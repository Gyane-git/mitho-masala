"use client";

import { useState } from "react";
import Image from "next/image";

export default function TawkToWidget() {
  const [showSelection, setShowSelection] = useState(false);

  const settings = {
    whatsapp: "9821212332",
    viber: "9821212332",
  };

  const message = "Hello! I'm interested in your products!";

  const handleChatIconClick = (e) => {
    e.preventDefault();
    setShowSelection(true);
  };

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setShowSelection(false);
  };

  const handleViberClick = () => {
    const phone = settings.viber.startsWith("+")
      ? settings.viber
      : `+977${settings.viber}`; // ensure international format
    window.open(
      `viber://chat?number=${encodeURIComponent(phone)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setShowSelection(false);
  };

  const closeSelection = () => setShowSelection(false);

  return (
    <>
      {/* Chat Icon */}
      <div className="fixed bottom-2 right-3 z-50 flex flex-col items-center justify-center">
        <button
          onClick={handleChatIconClick}
          className="hover:scale-110 transform text-white p-3 rounded-full flex items-center justify-center transition-all duration-300 animate-bounce"
        >
          <img
            src="/images/chatboticon.webp"
            alt="ChatApp"
            className="w-20 h-20 pointer-events-none -mb-2"
          />
        </button>
        <span className="text-[18px] text-gray-700 font-bold mb-4">Contact Us</span>
      </div>

      {/* Selection Modal */}
      {showSelection && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-50 z-[60] flex items-center justify-center">
          <div className="bg-gray-50 rounded-lg p-6 m-4 max-w-sm w-full shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Choose Platform</h3>
              <button
                onClick={closeSelection}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <img src="/images/whatsapp.svg" alt="WhatsApp Icon" className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-800">WhatsApp</div>
                  <div className="text-sm text-gray-600">Chat via WhatsApp</div>
                </div>
              </button>

              {/* Viber */}
              <button
                onClick={handleViberClick}
                className="w-full flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <img src="/images/viber1.webp" alt="Viber Icon" className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-800">Viber</div>
                  <div className="text-sm text-gray-600">Chat via Viber</div>
                </div>
              </button>
            </div>

            {/* Footer */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">Choose your preferred messaging platform</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
