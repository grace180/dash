import { 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer, 
    Bar, 
    BarChart,
    Legend
} from 'recharts';

function CcBarChart({ 
  data, 
  title = "CC Cards Monthly Payment", 
  showWrapper = true, 
  barWidth = 30,
  chartHeight = 250,
  padding = "p-6",
  customClass = ""
}) {
    const chartContent = (
      <>
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h3 className='text-2xl font-bold text-black mb-2'>{title}</h3>
            <p className='text-black/70'>Card Comparison Analytics</p>
          </div>
        
          <div className='flex items-center space-x-3'>
            <div className='flex items-center space-x-2 bg-blue-500/40 rounded-2xl px-4 py-2'>
              <div className='w-3 h-3 bg-green-600 rounded-full'></div>
              <span className='text-black/80 text-sm font-medium'>Card 1</span>
            </div>
            <div className='flex items-center space-x-2 bg-blue-500/40 rounded-2xl px-4 py-2'>
              <div className='w-3 h-3 bg-blue-600 rounded-full'></div>
              <span className='text-black/80 text-sm font-medium'>Card 2</span>
            </div>
          </div>
        </div>

        <ResponsiveContainer width='100%' height={chartHeight}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke='rgba(216, 70, 70, 0.1)'/>
            <XAxis 
              dataKey="month" 
              stroke='rgba(0, 0, 0, 0.5)' 
              fontSize={12} 
            /> 
            <YAxis stroke='rgba(0, 0, 0, 0.5)' fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                border: 'none', 
                borderRadius: '5px' 
              }} 
              itemStyle={{ color: '#000000ff' }} 
            />
            <Bar 
              dataKey="card1" 
              fill="#4caf50" 
              barSize={barWidth} 
              name="Card 1"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="card2" 
              fill="#2196f3" 
              barSize={barWidth} 
              name="Card 2"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </>
    );

    if (!showWrapper) {
      return <div className={customClass}>{chartContent}</div>;
    }

    return (
      <div className={`lg:col-span-3 bg-white/10 backdrop-blur-2xl border-white/20 rounded-3xl ${padding} ${customClass}`}>
        {chartContent}
      </div>
    );
}

export default CcBarChart;