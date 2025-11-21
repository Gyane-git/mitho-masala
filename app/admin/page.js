"use client";

import { useState } from "react";
import SideHeaderBar from "@/components/admin-sidebar";
import DashboardPage from "./dashboard/page";
import AdminHeaderBar from "@/components/admin-HeaderBar";

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">

      {/* ------------ TOP HEADER (STICKY) ------------ */}
      <header className="sticky top-0 z-40 bg-white shadow">
        <AdminHeaderBar />
      </header>

      {/* ------------ MAIN LAYOUT (SIDEBAR + CONTENT) ------------ */}
      <div className="flex flex-1 overflow-hidden">

        {/* ---------- SIDEBAR (STICKY ON DESKTOP) ---------- */}
        <aside
          className={`
            ${sidebarOpen ? "block" : "hidden"}
            lg:block
            w-64 xl:w-72 bg-gray-50 border-r shadow-inner
            overflow-y-auto h-full
          `}
        >
          <SideHeaderBar />
        </aside>

        {/* ---------- CONTENT AREA ---------- */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <DashboardPage />
        </main>

      </div>
    </div>
  );
}
