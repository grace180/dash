import React from 'react'

function TopDestinationItems({destination}) {


  return (
    <div className='flex items-center space-x-3 p-3 rounded-2xl bg-white backdrop-blur-sm border border-white'>
      <div className={"p-3 rounded-xl bg-blue-300 group-hover:scale-110 transition-transform duration-300"}> 
      
      </div>
      <div className='flex-1 min-w-0'>
        <p className='text-black font-medium truncate'>{destination.name}</p>
        <p className='text-black/80 text-sm'>{destination.destination} Transaction • {destination.month}</p>
      </div>
      <div className='text-right'>
        <p className='text-black font-medium truncate'>{destination.serviceFee}</p>
        <p className='text-xs text-black/60 capitalize'>{destination.category}</p>
      </div>
    </div>
  )
}

export default TopDestinationItems
