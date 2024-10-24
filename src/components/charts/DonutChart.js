import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./donutchart.scss";
import { Typography } from '@mui/material';

const DonutChart = () => {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      width: 250,
      height: 250,
      spacingTop: 0, // Reduce space on top
    margin: [0, 0, 0, 0] // Set all margins to 0
    },
    title: {
      text: '',
    },
    plotOptions: {
      pie: {
        innerSize: '40%', // To make it a donut
        borderWidth: 8,  
        dataLabels: {
          enabled: true,
          format: '{point.y} {point.name}',
          distance: -30,
          style: {
            fontSize: '10px',
            textOutline: 'none', 
            color: '#fff',
            fontWeight: 'bold'
          }
        }
      }
    },
    series: [{
      name: 'Expenses',
      data: [
        { name: 'Service Charges', y: 45000, color: '#1C4280' }, 
        { name: 'Spares', y: 30000, color: '#4993D1' },          
        { name: 'AMC', y: 10000, color: '#F4C545' },             
        { name: 'CMC', y: 15000, color: '#E87732' }               
      ]
    }],
    tooltip: {
      enabled: false 
    },
    credits: {
      enabled: false
    },
  };

  return (
    <div className="donutchart-wrapper">
      <Typography className="charts-title">Expenses</Typography>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default DonutChart;
