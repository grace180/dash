import { Sparkle, X, Settings, LogOut } from "lucide-react";
import { menuItems } from "../data/data";

function Sidebar({ sidebar, setSidebarOpen, activeTab, setActiveTab }) {
  return (
    <div
      className={`${
        sidebar ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-80 bg-blue-900/80 backdrop-blur-2xl border-r border-white/10 text-white transform transition-all duration-500 ease-out lg:translate-x-0 lg:static lg:inset-0 font-global flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between h-20 px-6 border-b border-white/10 flex-shrink-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkle className="h-7 w-7 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-linear-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">PLNDash</h1>
          </div>
        </div>
        <button className="lg:hidden text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors" onClick={() => setSidebarOpen(false)}>
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Main Navigation - No scrollbar */}
      <nav className="flex-1 mt-8 px-4 space-y-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {menuItems.map((items) => {
          return (
            <button
              key={items.id}
              className={`w-full flex items-center px-4 py-3 text-left rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                activeTab === items.id ? "bg-white/10 text-white shadow-2xl scale-105" : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
              }`}
              onClick={() => {
                setActiveTab(items.id);
                setSidebarOpen(false);
              }}
            >
              {activeTab === items.id && (
                <div 
                  className={`absolute inset-0 bg-linear-to-r ${items.gradient} opacity-30 rounded-2xl`}
                ></div>
              )}
              <div className={`p-1.5 rounded-xl bg-linear-to-r mr-4 group-hover:scale-110 transition-all duration-300 relative z-10 ${items.gradient}`}>
                <items.icon className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold relative z-10">{items.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Section - Settings & Logout */}
      <div className="p-6 border-t border-white/10 flex-shrink-0">
        <div className="space-y-2">
          <button
            className={`w-full flex items-center px-4 py-3 text-left rounded-2xl transition-all duration-300 group relative overflow-hidden ${
              activeTab === 'settings' ? "bg-white/10 text-white shadow-2xl scale-105" : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
            }`}
            onClick={() => {
              setActiveTab('settings');
              setSidebarOpen(false);
            }}
          >
            {activeTab === 'settings' && (
              <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
            )}
            <div className="p-1.5 mr-4 group-hover:scale-110 transition-all duration-300 relative z-10">
              <Settings className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold relative z-10">Settings</span>
          </button>

          <button
            className={`w-full flex items-center px-4 py-3 text-left rounded-2xl transition-all duration-300 group relative overflow-hidden ${
              activeTab === 'logout' ? "bg-white/10 text-white shadow-2xl scale-105" : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
            }`}
            onClick={() => {
              setActiveTab('logout');
              setSidebarOpen(false);
              console.log("Logout clicked");       
            }}
          >
            {activeTab === 'logout' && (
              <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
            )}
            <div className="p-1.5 mr-4 group-hover:scale-110 transition-all duration-300 relative z-10">
              <LogOut className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold relative z-10">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;