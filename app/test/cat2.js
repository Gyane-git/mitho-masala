"use client";

import { useState } from "react";

export default function AddCategoryPage2() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategory = {
      name,
      slug,
      description,
    };

    console.log("Category Submitted:", newCategory);

    // TODO: Replace with API call:
    // await fetch("/api/admin/categories", {...})

    setName("");
    setSlug("");
    setDescription("");
    alert("Category added successfully!");
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add New Category
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Category Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Category Name
          </label>
          <input
            type="text"
            placeholder="e.g. Spices, Masala, Flour"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Slug
          </label>
          <input
            type="text"
            placeholder="e.g. spices, masala"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            placeholder="Write a short description…"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#0072bc] text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Add Category22222222
        </button>
      </form>
    </div>
  );
}
