"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    grievance: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-3xl">
        <h1 className="text-2xl font-semibold text-center text-blue-800 mb-8">
          Customer Grievance Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter 10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Grievance Details */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Grievance Details <span className="text-red-500">*</span>
            </label>
            <textarea
              name="grievance"
              placeholder="Any additional information"
              value={formData.grievance}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 h-24 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Attach Documents
            </label>
            <div className="flex items-center gap-4">
              <label className="flex flex-col items-center justify-center bg-blue-600 text-white font-medium px-5 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition">
                Add +
                <input
                  type="file"
                  name="file"
                  accept=".jpg,.png,.jpeg"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
              <p className="text-gray-500 text-sm">
                Supported: JPG, PNG, JPEG. Max: 2MB each.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-10 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
