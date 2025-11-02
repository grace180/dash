
import ChartPresent from "../components/ChartPresent";
import Barchart from "../components/Barchart";
import { bfkoRevenueData } from "../data/data";
import ListDetails from "../components/ListDetails";

function BfkoGeneral({ onViewPerson }) { 
  return (
    <div className="px-8 py-0 bg-[#eaf2fa]">
      <div className="bg-white/10  border-white/20 rounded-3xl p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="flex items-center justify-center">
            <ChartPresent />
          </div>
          <div>
            <Barchart data={bfkoRevenueData} title="Monthly Payment" />
          </div>
        </div>
        <ListDetails onViewPerson={onViewPerson} />
      </div>
    </div>
  );
}

export default BfkoGeneral;