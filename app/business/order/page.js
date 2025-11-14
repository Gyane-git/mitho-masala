'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, ArrowLeft } from 'lucide-react';

export default function OrderPage() {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    // Get product from localStorage
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    } else {
      // If no product found, redirect back to product list
      router.push('/business/productlist');
    }
  }, [router]);

  const handleQuantityChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value >= 0 || e.target.value === '') {
      setQuantity(value || 0);
    }
  };

  const confirmOrder = () => {
    if (quantity <= 0) {
      alert('Please enter a valid quantity');
      return;
    }
    const totalPrice = (product.price * quantity).toFixed(2);
    alert(`Order Confirmed!\nProduct: ${product.name}\nQuantity: ${quantity} ${product.unit}\nTotal: $${totalPrice}`);
    
    // Clear localStorage and redirect back
    localStorage.removeItem('selectedProduct');
    router.push('/business/productlist');
  };

  const goBack = () => {
    localStorage.removeItem('selectedProduct');
    router.push('/business/productlist');
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden animate-fadeIn">
        {/* Header with Close Button */}
        <div className="bg-indigo-600 text-white p-4 flex items-center justify-between">
          <button
            onClick={goBack}
            className="flex items-center gap-2 hover:bg-indigo-700 px-3 py-2 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Products</span>
          </button>
          <h1 className="text-xl font-bold">Order Details</h1>
          <button
            onClick={goBack}
            className="p-2 hover:bg-indigo-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Order Content */}
        <div className="flex flex-col md:flex-row p-6 gap-8">
          {/* Left Side - Product Images */}
          <div className="md:w-1/2 flex-shrink-0">
            {/* Main Image */}
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg mb-4">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-2 justify-center">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-indigo-600 scale-105'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              {/* Product Name */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h2>

              {/* Product Description */}
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <label className="text-sm text-gray-600 block mb-2">
                  Price per {product.unit}
                </label>
                <div className="text-4xl font-bold text-green-600">
                  Rs. {product.price}
                </div>
              </div>

              {/* Quantity Input */}
              <div className="mb-6">
                <label className="text-sm text-gray-600 block mb-2">
                  Quantity ({product.unit})
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-xl font-semibold focus:border-indigo-600 focus:outline-none transition-colors"
                  placeholder="Enter quantity"
                />
              </div>

              {/* Total Price */}
              <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700 font-medium">Total Price:</span>
                  <span className="text-4xl font-bold text-green-600">
                    Rs. {totalPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={confirmOrder}
                className="w-full bg-indigo-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Confirm Order
              </button>
              <button
                onClick={goBack}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}