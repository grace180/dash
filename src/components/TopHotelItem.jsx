import { Home as HomeIcon } from 'lucide-react'


function TopHotelItem({ hotel }) {
  const typeStyles = {
    bfko: {
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-600',
      icon: HomeIcon
    },
    service: {
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-600',
      icon: HomeIcon
    },
    cc: {
      bgColor: 'bg-purple-500/20',
      textColor: 'text-purple-600',
      icon: HomeIcon
    }
  }

  const style = typeStyles[hotel.category] || typeStyles.bfko;
  const ActivityIcon = style.icon;

  return (
    <div className='flex items-center space-x-4 p-4 rounded-2xl bg-white backdrop-blur-sm border border-white hover:bg-blue/800 transition-all duration-300 group'>
      <div className={`p-3 rounded-xl ${style.bgColor} group-hover:scale-110 transition-transform duration-300`}> 
        <ActivityIcon className={`w-5 h-5 ${style.textColor}`} />
      </div>
      <div className='flex-1 min-w-0'>
        <p className='text-black font-medium truncate'>{hotel.name}</p>
        <p className='text-black/80 text-sm'>{hotel.transactions} Transaction • {hotel.month}</p>
      </div>
      <div className='text-right'>
        <p className='text-black font-medium truncate'>{hotel.serviceFee}</p>
     
      </div>
    </div>
  )
}

export default TopHotelItem