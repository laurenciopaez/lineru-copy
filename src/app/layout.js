"use client";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import ReduxProvider from "../redux/ReduxProvider";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URI;

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Lineru Practise</title>
      </head>
      <body>
        <ThemeProvider
        attribute="class"
        defaultTheme="light"
        breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}
        minBreakpoint= "xs">
          <NextUIProvider>
            <ReduxProvider>
              <div className="flex w-full font-serif">
                {path === "/" ? null : <div> </div>} {children}
              </div>
            </ReduxProvider>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
