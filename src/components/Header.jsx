import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function Header({ activeTab, setSidebarOpen, onFilterChange }) {
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isCategory, setIsCategoryOpen] = useState(false);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const toggleMonth = (month) => {
    const newSelectedMonths = selectedMonths.includes(month)
      ? selectedMonths.filter((m) => m !== month)
      : [...selectedMonths, month];

    setSelectedMonths(newSelectedMonths);

    if (onFilterChange) {
      onFilterChange({ months: newSelectedMonths, category: selectedCategory });
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (onFilterChange) {
      onFilterChange({ months: selectedMonths, category });
    }
  };

  // hide filters
  const hideFilters = activeTab.toLowerCase() === "settings" || activeTab.toLowerCase() === "logout";
  
  // hide month selector
  const hideMonthSelector = hideFilters || activeTab.toLowerCase() === "documents";

  return (
    <div>
      <h1 className="font-global px-8 py-5 text-3xl font-bold bg-black/90 bg-clip-text text-transparent capitalize">
        {activeTab}
      </h1>

      <div className="flex items-center justify-between px-8">
        <div className="flex items-center space-x-3">
      
          {!hideFilters && (
            <div className="px-3 hidden md:flex items-center bg-black/10 backdrop-blur-xl border border-black/20 rounded-2xl py-2 w-60 group hover:text-black/70 transition-all">
              <Search className="h-5 w-5 text-black/70 transition-all" />
              <input
                type="text"
                className="bg-transparent text-black focus:outline-none flex-1 px-2"
                placeholder="Search..."
              />
            </div>
          )}

          {/* Upload Button - Only for Documents */}
          {activeTab === "Documents" && (
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </Button>
          )}
        </div>

    
        {!hideFilters && (
          <div className="flex items-center space-x-4">
            {activeTab === "dashboard" && (
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                onFocus={() => setIsCategoryOpen(true)}
                onBlur={() => setIsCategoryOpen(false)}
                className={`${
                  isCategory ? "bg-white" : "bg-[#a8d0db]"
                } text-black font-medium border border-black/20 rounded-xl py-2 px-6 focus:outline-none cursor-pointer hover:bg-[#b6dce5] transition-colors`}
              >
                <option value="">Category</option>
                <option value="bfko">BFKO</option>
                <option value="service">Service Fee</option>
                <option value="cc">Credit Card</option>
              </select>
            )}
            
            {!hideMonthSelector && (
              <div className="relative">
                <button
                  onClick={() => setIsMonthOpen(!isMonthOpen)}
                  className="flex items-center justify-between bg-[#a8d0db] text-black font-medium border border-black/20 rounded-xl py-2 px-6 focus:outline-none hover:bg-[#b6dce5] transition-colors min-w-[160px]"
                >
                  {selectedMonths.length > 0
                    ? `${selectedMonths.length} selected`
                    : "Select Month"}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>

                {isMonthOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                    <div className="max-h-60 overflow-y-auto p-3">
                      {months.map((month) => (
                        <label
                          key={month}
                          className="flex items-center space-x-2 py-1 px-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedMonths.includes(month)}
                            onChange={() => toggleMonth(month)}
                            className="accent-cyan-500"
                          />
                          <span>{month}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;