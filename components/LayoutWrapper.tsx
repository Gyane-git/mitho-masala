"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";
import TawkToWidget from "@/components/TawkToWidget";

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Check if route starts with `/admin`
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <HeaderBar />}
      {children}
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <TawkToWidget />}
    </>
  );
}
