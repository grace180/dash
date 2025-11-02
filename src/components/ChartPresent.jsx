import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Complete", value: 90, color: "#10b981" }, 
  { label: "In Progress", value: 10, color: "#facc15" }, 
];

const settings = {
  margin: { right: 5 },
  width: 250, 
  height: 250, 
  hideLegend: true,
};

export default function ChartPresent() {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const completeValue = data.find((d) => d.label === "Complete")?.value || 0;
  const percentage = ((completeValue / total) * 100).toFixed(0) + "%"; 

  return (
    <div style={{ position: "relative", width: settings.width, height: settings.height }}>
      {" "}
      <PieChart
        series={[
          {
            innerRadius: 80,
            outerRadius: 120,
            data,
            paddingAngle: 0,
            cornerRadius: 0,
            color: (d) => d.color,
          },
        ]}
        {...settings}
      />
      {" "}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#10b981",
        }}
      >
         {percentage}{" "}
      </div>
      {" "}
    </div>
  );
}
