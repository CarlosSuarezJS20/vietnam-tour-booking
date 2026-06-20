"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiX, FiTrash2 } from "react-icons/fi";
import { useReactiveVar } from "@apollo/client/react";
import { cartDrawerOpenVar } from "@/lib/cartDrawerVar";
import { useGetCartQuery, useRemoveFromCartMutation } from "@/graphql/hooks";

const CartDrawer = () => {
  const isOpen  = useReactiveVar(cartDrawerOpenVar);
  const { data } = useGetCartQuery();
  const { removeFromCart } = useRemoveFromCartMutation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const items      = data?.items      ?? [];
  const itemCount  = data?.itemCount  ?? 0;
  const totalPrice = data?.totalPrice ?? 0;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-[70] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => cartDrawerOpenVar(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[380px] bg-white z-[71] shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
          <h2 className="text-lg font-bold text-gray-900 font-sans">
            My Cart{itemCount > 0 && `, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
          </h2>
          <button onClick={() => cartDrawerOpenVar(false)} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
            <FiX className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-8">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <p className="text-gray-500 font-sans text-sm">Your cart is empty</p>
              <Link
                href="/tours"
                onClick={() => cartDrawerOpenVar(false)}
                className="text-brand text-sm font-semibold font-sans hover:underline"
              >
                Browse tours →
              </Link>
            </div>
          ) : (
            items.map(item => (
              <div key={item.uid}>
                <div className="relative w-full aspect-video mb-3 overflow-hidden">
                  <Image src={item.product.imageUrl} alt={item.product.title} fill className="object-cover" sizes="380px" />
                </div>

                <h3 className="text-sm font-bold text-gray-900 font-sans mb-3">{item.product.title}</h3>

                <div className="border-t border-gray-100 pt-3 space-y-2 mb-3">
                  {([
                    ["Size of party", String(item.partySize)],
                    ["Date",          item.date],
                    ["Time",          item.time],
                    ["Tour Price",    `$${item.price.toLocaleString()}`],
                  ] as [string, string][]).map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm font-sans">
                      <span className="text-gray-500">{label}</span>
                      <span className="font-semibold text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => removeFromCart(item.uid)}
                  className="flex items-center gap-2 text-xs text-gray-400 hover:text-red-500 transition-colors font-sans"
                >
                  <FiTrash2 className="w-3.5 h-3.5" />
                  Remove from cart
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5 space-y-4 flex-shrink-0">
            <div className="flex justify-between">
              <span className="text-sm font-bold text-gray-900 font-sans">Total price</span>
              <span className="text-sm font-bold text-gray-900 font-sans">${totalPrice.toLocaleString()}</span>
            </div>
            <Link
              href="/booking"
              onClick={() => cartDrawerOpenVar(false)}
              className="block w-full bg-brand text-white text-center font-bold text-sm font-sans py-4 hover:bg-brand/90 transition-colors"
            >
              Go to checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
