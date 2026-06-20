import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { sessionOptions } from "@/lib/session";
import type { SessionData } from "@/lib/session";

export async function POST(req: Request) {
  try {
    const { paymentIntentId, contactData, travelerNames } = await req.json();
    const session   = await getIronSession<SessionData>(await cookies(), sessionOptions);
    const sessionId = session.sessionId;

    if (!sessionId) {
      return NextResponse.json({ error: "No session" }, { status: 401 });
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== "succeeded") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
    }

    const cart = await prisma.cart.findUnique({
      where:   { sessionId },
      include: { items: true },
    });

    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    const order = await prisma.order.create({
      data: {
        sessionId,
        stripePaymentIntentId: paymentIntentId,
        status:               "paid",
        totalAmount:          cart.items.reduce((sum, i) => sum + i.price, 0),
        contactFirstName:     contactData.firstName,
        contactLastName:      contactData.lastName,
        contactEmail:         contactData.email,
        items: {
          create: cart.items.map((i, idx) => ({
            tourId:            i.tourId,
            cruiseId:          i.cruiseId,
            date:              i.date,
            time:              i.time,
            partySize:         i.partySize,
            price:             i.price,
            travelerFirstName: travelerNames[idx]?.firstName ?? "",
            travelerLastName:  travelerNames[idx]?.lastName  ?? "",
          })),
        },
      },
    });

    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });

    return NextResponse.json({ orderId: order.id });
  } catch (err) {
    console.error("[confirm-order]", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
