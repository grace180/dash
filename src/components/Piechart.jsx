
import { PieChart } from '@mui/x-charts/PieChart';


function Piechart() {
  return (
    <div>
      <PieChart
         series={[
        {
          data: [
            { id: 0, value: 10, label: 'BFKO',  },
            { id: 1, value: 15, label: 'KARTU CC' },
            { id: 2, value: 20, label: 'SERVICE FEE' },
          ],
        },
      ]}
      width={200}
      height={200}
      />
    </div>
  )
}

export default Piechart


