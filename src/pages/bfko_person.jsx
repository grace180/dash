import React from 'react'
import ChartPresent from '../components/ChartPresent' 
import Barchart from '../components/Barchart' 
import Button from '@mui/material/Button';
import { ArrowLeft, Search, Filter } from 'lucide-react';

const monthlyPaymentData = [
  { month: 'Jan', revenue: 6000000 },
  { month: 'Feb', revenue: 4000000 },
  { month: 'Mar', revenue: 5000000 },
  { month: 'Apr', revenue: 3500000 },
];

function BfkoPerson({ personName = "MOH. Andy", onBack }) { 
  const personTransactions = [
    { date: '12-08-2025', description: 'Angsuran BFKO', angsuran: 'Angsuran ke -24', category: 'BFKO', total: 'Rp 10 M', status: 'Complete' },
    { date: '12-08-2025', description: 'Angsuran BFKO', angsuran: 'Angsuran ke -24', category: 'BFKO', total: 'Rp 10 M', status: 'Complete' },
    { date: '', description: 'Angsuran BFKO', angsuran: 'Angsuran ke -24', category: 'BFKO', total: 'Rp 10 M', status: 'In Progress' },
    { date: '', description: 'Angsuran BFKO', angsuran: 'Angsuran ke -24', category: 'BFKO', total: 'Rp 10 M', status: 'In Progress' },
    { date: '12-08-2025', description: 'Angsuran BFKO', angsuran: 'Angsuran ke -24', category: 'BFKO', total: 'Rp 10 M', status: 'Complete' },
  ];

 
  const PersonPaymentDetailsTable = () => (
    <div className="mt-6">
  
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#d9d9d9]">
            <tr>
              {['Date', 'Description', 'Angsuran', 'Category', 'Total', 'Status'].map((header) => (
                <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {personTransactions.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.angsuran}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold" style={{color: row.status === 'Complete' ? '#10b981' : '#f59e0b'}}>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className='px-8 py-6 bg-[#eaf2fa]'>
      <div className="mb-6 justify-between items-center">
      
         <Button
            startIcon={<ArrowLeft />}
            sx={{ marginBottom: 0, textTransform: 'none', color: '#000' }}
            onClick={onBack}
          >
            Back to BFKO
          </Button>
          <h2 className='text-3xl font-extrabold text-black' style={{ marginRight: 'auto', marginLeft: '30px'}}>
             {personName.toUpperCase()}
          </h2>
      </div>
      <div className='bg-white/10 backdrop-blur-2xl border-white/20 rounded-3xl p-6'>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-xl p-4 shadow-md'>
          
     
          <div className='flex space-x-4 items-center'>
            <ChartPresent /> 
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
                <span>Complete</span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                <span>In Progress</span>
              </div>
            </div>
          </div>
          <div className='p-2'>
            <Barchart 
              data={monthlyPaymentData} 
              title="Monthly Payment" 
              showWrapper={false}
              barWidth={40} 
              chartHeight={200}
              customClass="w-full"
            />
          </div>
          
        </div>
        <PersonPaymentDetailsTable />
        
      </div>
    </div>
  );
}

export default BfkoPerson;