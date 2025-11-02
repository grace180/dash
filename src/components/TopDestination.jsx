import TopDestinationItems from "./TopDestinationItems";
import { TopDestinationData } from "../data/data";


const TopDestination = ({ filters }) => {
  const filteredDestination = TopDestinationData.filter((destination) => {
    const categoryMatch = !filters?.category || destination.category === filters.category;
    const monthMatch = !filters?.months || filters.months.length === 0 || filters.months.includes(destination.month);

    return categoryMatch && monthMatch;
  });
  return (
    <div className="bg-[#dbe5ec] backdrop-blur-2xl rounded-3xl p-2">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-black mb-1">Top Desination by Service Fee</h3>
          <p className="text-sm text-black/60">Showing {filteredDestination.length} Destination</p>
        </div>
      </div>
      <div className="space-y-4 max-h-70 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {filteredDestination.length > 0 ? filteredDestination.map((destination, index) => <TopDestinationItems key={index} destination={destination} />) : <div className="text-center py-8 text-black/60">No hotels found for selected filters</div>}
      </div>
    </div>
  );
};

export default TopDestination;
