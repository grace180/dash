import TopHotelItem from './TopHotelItem'
import { TophotelsData } from '../data/data'

const TopHotels = ({ filters }) => {
    const filteredHotels = TophotelsData.filter(hotel => {
    const categoryMatch = !filters?.category || hotel.category === filters.category;
    const monthMatch = !filters?.months || filters.months.length === 0 || filters.months.includes(hotel.month);
    return categoryMatch && monthMatch;
  });

  return (
    <div className='bg-[#dbe5ec] backdrop-blur-2xl rounded-3xl p-8'>
      <div className='flex items-center justify-between mb-6'>
        <div>
          <h3 className='text-xl font-bold text-black mb-1'>Top Hotels by Service Fee</h3>
          <p className='text-sm text-black/60'>Showing {filteredHotels.length} hotels</p>
        </div>
      </div>
      <div className='space-y-4 max-h-80 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] '>
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => (
            <TopHotelItem key={index} hotel={hotel} />
          ))
        ) : (
          <div className='text-center py-8 text-black/60'>
            No hotels found for selected filters
          </div>
        )}
      </div>
    </div>
  )
}

export default TopHotels