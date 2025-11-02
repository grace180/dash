import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCards from "./components/DashboardCard";
import Barchart from "./components/Barchart";
import TopHotels from "./components/TopHotels";
import Piechart from "./components/piechart";
import ListDetailsDash from "./components/ListDetailsDash";
import BfkoGeneral from "./pages/bfko_general";
import BfkoPerson from "./pages/bfko_person";
import CcCard from "./pages/cc_card";
import ServiceFee from "./pages/service_fee";
import Settings from "./pages/Settings";

function App() {
  const [sidebar, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [filters, setFilters] = useState({ months: [], category: "" });
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleViewPerson = (personName) => {
    setSelectedPerson(personName);
    setActiveTab("BfkoPerson");
  };

  const handleBackToBfko = () => {
    setActiveTab("BFKO");
    setSelectedPerson(null);
  };

  const showDashboardCardsTop = ["BFKO", "CC Card", "Service"].includes(activeTab);

  return (
    <div className="min-h-screen bg-[#e8f0fa]">
      <div className="flex min-h-screen">
        <Sidebar sidebar={sidebar} setSidebarOpen={setSidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header activeTab={activeTab} setSidebarOpen={setSidebarOpen} onFilterChange={handleFilterChange} />

          {showDashboardCardsTop && <DashboardCards activeTab={activeTab} />}

          <main className="flex-1 overflow-auto p-8">
            {/* Dashboard Page */}
            {activeTab === "dashboard" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 justify-center">
                    <DashboardCards activeTab={activeTab} />
                  </div>
                  <div className="flex items-center justify-center">
                    <Piechart filters={filters} />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <Barchart />
                </div>
                <div>
                  <ListDetailsDash />
                </div>
              </div>
            )}
            {activeTab === "transactions" && <TopHotels filters={filters} />}
            {activeTab === "BFKO" && <BfkoGeneral onViewPerson={handleViewPerson} />}
            {activeTab === "CC Card" && <CcCard />}
            {activeTab === "Service" && <ServiceFee />}
            {activeTab === "BfkoPerson" && <BfkoPerson personName={selectedPerson} onBack={handleBackToBfko} />}
            {(activeTab === "Settings" || activeTab === "settings") && <Settings />}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
