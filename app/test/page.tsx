"use client";

import { useState } from "react";
import Sidebar from "./sidebar2";
import AddCategoryPage from './cat'
import AddCategoryPage2 from './cat2'
// import Analytics from "@/components/Analytics";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return < AddCategoryPage/>;
      case "dashboard":
        return < AddCategoryPage2 />;
      
      // case "analytics":
      //   return <Analytics />;
      default:
        // eslint-disable-next-line react/jsx-no-undef
        return <AddCategoryPage />;
    }
  };

  return (
    <>
      {/* Main Content Area */}
      <div className="min-h-screen bg-gray-100 flex overflow-auto">
        {/* Fixed Sidebar */}
        < Sidebar onSelect={setActiveTab} />

        <div className="flex-1 flex flex-col">
          {/* Header */}
          {/* < Header /> */}

          {/* Page Content */}
          <main className="flex-1 ml-60 mt-16 overflow-auto">
            {/* <ChatButton /> */}
            {renderContent()}
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;