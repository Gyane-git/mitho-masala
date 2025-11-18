"use client";
import React, { useState } from 'react';
import { ShoppingCart, Star, Check, Truck, Shield, Award, Gift, Package, Heart } from 'lucide-react';

export default function ComboOffersPage() {
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [hoveredCombo, setHoveredCombo] = useState(null);

  const combos = [
    {
      id: 1,
      name: "Essential Kitchen Pack",
      tagline: "Perfect for daily cooking",
      originalPrice: 599,
      offerPrice: 449,
      discount: 25,
      rating: 4.8,
      reviews: 1250,
      items: [
        "Garam Masala - 100g",
        "Turmeric Powder - 100g", 
        "Red Chili Powder - 100g",
        "Coriander Powder - 100g"
      ],
      badge: "BESTSELLER",
      gradient: "from-orange-400 via-red-500 to-pink-500"
    },
    {
      id: 2,
      name: "Premium Chef's Collection",
      tagline: "Restaurant quality at home",
      originalPrice: 899,
      offerPrice: 649,
      discount: 28,
      rating: 4.9,
      reviews: 2100,
      items: [
        "Biryani Masala - 100g",
        "Curry Masala - 100g",
        "Chat Masala - 50g",
        "Kitchen King Masala - 100g",
        "Kashmiri Chili - 50g"
      ],
      badge: "MOST POPULAR",
      gradient: "from-yellow-400 via-orange-500 to-red-600"
    },
    {
      id: 3,
      name: "Family Mega Pack",
      tagline: "Complete spice collection",
      originalPrice: 1499,
      offerPrice: 999,
      discount: 33,
      rating: 4.7,
      reviews: 890,
      items: [
        "All Essential Spices",
        "All Premium Spices", 
        "Pickle Masala - 100g",
        "Tea Masala - 50g",
        "Sabji Masala - 100g",
        "Garam Masala XL - 200g"
      ],
      badge: "BEST VALUE",
      gradient: "from-red-500 via-orange-600 to-amber-600"
    },
    {
      id: 4,
      name: "Festival Special",
      tagline: "Celebrate with authentic flavors",
      originalPrice: 749,
      offerPrice: 549,
      discount: 27,
      rating: 4.8,
      reviews: 1580,
      items: [
        "Tandoori Masala - 100g",
        "Pav Bhaji Masala - 100g",
        "Sambar Powder - 100g",
        "Rasam Powder - 100g"
      ],
      badge: "LIMITED EDITION",
      gradient: "from-pink-500 via-red-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <p className="text-white text-sm font-semibold">🎉 Limited Time Offer - Up to 33% OFF</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Deep Masala Combo Offers
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Authentic Indian Spices | Premium Quality | Unbeatable Combos
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">100% Pure</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Award className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Truck className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">Free Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Combos Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {combos.map((combo) => (
            <div 
              key={combo.id}
              onMouseEnter={() => setHoveredCombo(combo.id)}
              onMouseLeave={() => setHoveredCombo(null)}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`bg-gradient-to-r ${combo.gradient} text-white px-4 py-2 rounded-full shadow-lg transform rotate-3`}>
                  <p className="text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {combo.badge}
                  </p>
                </div>
              </div>

              {/* Discount Circle */}
              <div className="absolute top-4 left-4 z-10">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <div className="text-center">
                      <p className="text-white text-xs font-bold leading-none">SAVE</p>
                      <p className="text-white text-lg font-bold leading-none">{combo.discount}%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${combo.gradient} relative`}>
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 pt-4">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{combo.name}</h3>
                  <p className="text-gray-600 text-sm italic">{combo.tagline}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(combo.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{combo.rating}</span>
                    <span className="text-xs text-gray-400">({combo.reviews} reviews)</span>
                  </div>
                </div>

                {/* Gift Box Visual */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 mb-6 border-2 border-red-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-200 rounded-full blur-3xl opacity-30"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <Package className="w-5 h-5 text-red-600" />
                      <h4 className="font-bold text-gray-800">Gift Pack Contains:</h4>
                    </div>
                    <ul className="space-y-2">
                      {combo.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <div className="mt-1">
                            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-end justify-between mb-6 pb-6 border-b-2 border-gray-100">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Regular Price</p>
                    <p className="text-gray-400 line-through text-lg">₹{combo.originalPrice}</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        ₹{combo.offerPrice}
                      </p>
                      <span className="text-green-600 font-semibold text-sm">You Save ₹{combo.originalPrice - combo.offerPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedCombo(combo.id)}
                  className={`w-full bg-gradient-to-r ${combo.gradient} hover:shadow-xl text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 active:scale-95`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                  {hoveredCombo === combo.id && (
                    <Heart className="w-5 h-5 animate-pulse" />
                  )}
                </button>

                <p className="text-center text-xs text-gray-500 mt-3">
                  ✨ Free gift wrapping included
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Deep Masala?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🌾", title: "Farm Fresh", desc: "Sourced from premium organic farms" },
              { icon: "✨", title: "100% Pure", desc: "No artificial colors or preservatives" },
              { icon: "🔥", title: "Authentic Taste", desc: "Traditional recipes, bold flavors" },
              { icon: "🏆", title: "Certified Quality", desc: "FSSAI approved & lab tested" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      

      {/* Success Toast */}
      {selectedCombo && (
        <div className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce z-50">
          <div className="bg-white bg-opacity-20 rounded-full p-2">
            <Check className="w-6 h-6" />
          </div>
          <div>
            <p className="font-bold">Added to cart!</p>
            <p className="text-sm text-green-100">Continue shopping or checkout</p>
          </div>
        </div>
      )}
    </div>
  );
}