import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import ApolloClientProvider from "@/lib/ApolloProvider";
import ClientLayout from "@/components/ClientLayout";

const dmSans = DM_Sans({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Vietnam",
  description: "Vietnam Tour Booking",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col relative">
        <ApolloClientProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ApolloClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
