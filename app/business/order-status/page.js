'use client';
import { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function OrderStatusPage() {
  const [activeTab, setActiveTab] = useState('processing');

  const orders = {
    processing: [
      { id: 'ORD-001', item: 'Wireless Headphones', date: '2024-11-12', amount: '$89.99', status: 'In Transit' },
      { id: 'ORD-004', item: 'Smart Watch', date: '2024-11-13', amount: '$299.99', status: 'Preparing' },
      { id: 'ORD-007', item: 'USB-C Cable', date: '2024-11-14', amount: '$15.99', status: 'In Transit' },
    ],
    received: [
      { id: 'ORD-002', item: 'Laptop Stand', date: '2024-11-08', amount: '$45.99', deliveredOn: '2024-11-10' },
      { id: 'ORD-005', item: 'Mechanical Keyboard', date: '2024-11-05', amount: '$129.99', deliveredOn: '2024-11-09' },
      { id: 'ORD-008', item: 'Mouse Pad', date: '2024-11-01', amount: '$12.99', deliveredOn: '2024-11-03' },
    ],
    cancelled: [
      { id: 'ORD-003', item: 'Phone Case', date: '2024-11-11', amount: '$24.99', reason: 'Customer Request' },
      { id: 'ORD-006', item: 'Screen Protector', date: '2024-11-09', amount: '$9.99', reason: 'Out of Stock' },
    ],
  };

  const tabs = [
    { id: 'processing', label: 'Processing', icon: Clock, count: orders.processing.length },
    { id: 'received', label: 'Received', icon: CheckCircle, count: orders.received.length },
    { id: 'cancelled', label: 'Cancelled', icon: XCircle, count: orders.cancelled.length },
  ];

  const renderOrders = () => {
    const currentOrders = orders[activeTab];

    if (currentOrders.length === 0) {
      return (
        <div className="text-center py-12 text-gray-500">
          <Package className="mx-auto mb-4 w-16 h-16 opacity-30" />
          <p>No orders in this category</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {currentOrders.map((order) => (
          <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{order.item}</h3>
                <p className="text-sm text-gray-500">Order ID: {order.id}</p>
              </div>
              <span className="text-lg font-bold text-gray-900">{order.amount}</span>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div>
                <span className="font-medium">Order Date:</span> {order.date}
              </div>
              
              {activeTab === 'processing' && (
                <div>
                  <span className="font-medium">Status:</span>{' '}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {order.status}
                  </span>
                </div>
              )}
              
              {activeTab === 'received' && (
                <div>
                  <span className="font-medium">Delivered:</span> {order.deliveredOn}
                </div>
              )}
              
              {activeTab === 'cancelled' && (
                <div>
                  <span className="font-medium">Reason:</span> {order.reason}
                </div>
              )}
            </div>

            {activeTab === 'processing' && (
              <button className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
                Track Order →
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                  <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Order List */}
        <div>{renderOrders()}</div>
      </div>
    </div>
  );
}