import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./donutchart.scss";
import { Typography } from '@mui/material';

const TotalAssets = () => {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "rgba(255, 255, 255, 0)",
      width: 200,
      height: 200,
    },
    title: {
      text: "",
    
    },
    plotOptions: {
      pie: {
        innerSize: "75%",
        borderWidth: 8,  
        dataLabels: {
          enabled: false, 
        },
        center: ["50%", "50%"],
      },
    },
    series: [
      {
        name: "Assets",
        data: [
          { name: "Part A", y: 20, color: "#1C4280" }, 
          { name: "Part B", y: 10, color: "#4993D1" },
          { name: "Part C", y: 5, color: "#A3D6D3" },
          { name: "Part D", y: 6, color: "#F4C545" }, 
          { name: "Part E", y: 5, color: "#E87732" },
        ],
      },
    ],
    tooltip: {
      enabled: false,
    },
    credits: {
      enabled: false, 
    },
  };

  return (
    <div className="donutchart-wrapper">
      <Typography className="charts-title ">Total Assests</Typography>
      <div className="total-assets-chart-wrapper">
        
      <HighchartsReact highcharts={Highcharts} options={options} />

      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#1C4280",
          textAlign: "center",
        }}
      >
        46
      </div>
      </div>
    </div>
  );
};

export default TotalAssets;
