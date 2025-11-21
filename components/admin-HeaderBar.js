"use client";

import { useState, useEffect } from "react";
import { Menu, X, LogOut, User, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminHeaderBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fake admin auth (replace with real token / cookie)
  useEffect(() => {
    const admin = localStorage.getItem("admin_auth");
    setIsLoggedIn(!!admin);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-4 h-16">

        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Logo */}
          <Link href="/admin" className="flex items-center">
            <Image
              src="/images/logo1.png"
              alt="Admin Logo"
              width={45}
              height={45}
              className="object-contain"
            />
            <span className="font-semibold text-xl ml-2 text-gray-800 hidden sm:block">
              Admin Panel
            </span>
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-5">
          <button className="text-gray-700 hover:text-blue-600 transition">
            <Bell size={22} />
          </button>

          {/* Profile */}
          <button
            onClick={() => router.push("/admin/profile")}
            className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1"
          >
            <User size={22} />
          </button>

          {/* Logout */}
          <button
            onClick={() => {
              localStorage.removeItem("admin_auth");
              router.push("/admin/login");
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
          >
            <LogOut size={18} />
            <span className="hidden sm:block">Logout</span>
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu Area (Optional) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-50 border-t shadow-inner p-4 space-y-3">
          <Link
            href="/admin/dashboard"
            className="block text-gray-800 font-medium hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="block text-gray-800 font-medium hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/admin/orders"
            className="block text-gray-800 font-medium hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Orders
          </Link>
          <Link
            href="/admin/users"
            className="block text-gray-800 font-medium hover:text-blue-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Users
          </Link>
        </div>
      )}
    </header>
  );
}
