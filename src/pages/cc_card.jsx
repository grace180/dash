import React from "react";
import CcBarChart from "../components/CcBarchart"; 
import { ccCard1Data } from "../data/data";
import TopDestination from "../components/TopDestination";

function CcCard() {
  return (
    <div className="px-8 py-1 bg-[#eaf2fa]">
      <div className="bg-white/10 backdrop-blur-2xl border-white/20 rounded-2xl p-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Use the new CcBarChart component */}
          <div>
            <CcBarChart
              data={ccCard1Data}
              title="Monthly Payment"
              showWrapper={false}
              barWidth={30}
              chartHeight={200}
              customClass="w-full"
            />
          </div>
          <TopDestination />
        </div>
      </div>
    </div>
  );
}

export default CcCard;