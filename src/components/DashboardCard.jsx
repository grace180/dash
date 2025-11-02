import React from "react";
import Card from "./Card";

function DashboardCards({ activeTab }) {
  const cardConfigs = {
    dashboard: {
      cards: [
        { title: "Administrasi Umum", value: "Rp 253,7 M", gradient: "#f4d03f" },
        { title: "Kepegawaian", value: "197 M", gradient: "#6c63ff" },
      ],
      padding: "p-5",
      width: "w-60",
      gap: "gap-10"
    },
    BFKO: {
      cards: [
        { title: "Total Payment", value: "Rp 180 M", gradient: "#37d055" },
        { title: "Remaining payment", value: "145 M", gradient: "#e8d950" },
      ],
      padding: "p-6",
      width: "w-60",
      gap: "gap-10"
  
    },
    "CC Card": {
      cards: [
        { title: "CC Total Fee", value: "Rp 73,7 M", gradient: "#37d055" },
        { title: "Total Trips", value: "52", gradient: "#605eca" },
        { title: "Average Payment", value: "Rp 197 M", gradient: "#e8d950" },
        { title: "Fine Payment", value: "Rp 16 M", gradient: "#ea51e8" },
      ],
      padding: "p-5",
      width: "w-48",
      gap: "gap-8"
    },
    Service: {
      cards: [
        { title: "Service Income", value: "Rp 100 M", gradient: "#605eca" },
        { title: "Total Bookings", value: "89", gradient: "#37d055" },
        { title: "Average Rate Fee", value: "3.90%", gradient: "#e8d950" },
      ],
      padding: "p-5",
      width: "w-54",
      gap: "gap-11"
    },
    "BFKO Person": {
      cards: [
        { title: "Service Income", value: "Rp 100 M", gradient: "#605eca" },
        { title: "Total Bookings", value: "89", gradient: "#37d055" },
        { title: "Average Rate Fee", value: "3.90%", gradient: "#e8d950" },
      ],
      padding: "p-3",
      width: "w-56",
      gap: "gap-3"
    },
  };

  const config = cardConfigs[activeTab] || cardConfigs.dashboard;

  return (
    <div className={`flex ${config.gap} px-8 py-6 bg-[#eaf2fa] flex-wrap`}>
      {config.cards.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          value={card.value} 
          gradient={card.gradient}
          padding={config.padding}
          width={config.width}
        />
      ))}
    </div>
  );
}

export default DashboardCards;