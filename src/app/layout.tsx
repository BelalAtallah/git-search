"use client";
import { Montserrat } from "next/font/google";
import RouteAnimation from "@/animations/route-animation";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import "@/styles/globals.css";
import "@/styles/transitions.css";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RouteAnimation>
          <div className="flex items-center justify-center min-h-screen bg-slate-900 transition-all">
            <Provider store={store}>{children}</Provider>
          </div>
        </RouteAnimation>
      </body>
    </html>
  );
}
