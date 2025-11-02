import React from 'react'
import Barchart from '../components/Barchart'
import TopHotels from '../components/TopHotels'

function ServiceFee() {
  return (
    <div>
        <main className='flex-1 overflow-hidden p-8 '>
            <Barchart />
            
            <TopHotels />
        </main>
      
    </div>
  )
}

export default ServiceFee
