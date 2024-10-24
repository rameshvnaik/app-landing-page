import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import "./columnchart.scss";
import { Typography } from '@mui/material';

const ColumnChart = () => {
  const [filter, setFilter] = useState('week');

  // Sample data for different time periods
  const data = {
    days: {
      categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
      values: [5, 3, 8, 2, 6],
    },
    week: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
      values: [10, 27, 5, 17, 20],
    },
    month: {
      categories: ['January', 'February', 'March', 'April', 'May'],
      values: [45, 50, 30, 40, 35],
    },
    custom: {
      categories: ['Custom 1', 'Custom 2', 'Custom 3', 'Custom 4'],
      values: [15, 10, 25, 30],
    },
  };

  // Dynamically set the axis labels based on the filter
  const axisLabels = {
    days: {
      xAxis: 'X-Axis : Days',
      yAxis: 'Y-Axis : Incidents',
    },
    week: {
      xAxis: 'X-Axis : Weeks',
      yAxis: 'Y-Axis : Incidents',
    },
    month: {
      xAxis: 'X-Axis : Months',
      yAxis: 'Y-Axis : Incidents',
    },
    custom: {
      xAxis: 'X-Axis : Custom',
      yAxis: 'Y-Axis : Incidents',
    },
  };

  // Set chart options based on the current filter
  const options = {
    chart: {
      type: 'column',
    },
    // title: {
    //   text: `Total Incidents Recorded (${filter.charAt(0).toUpperCase() + filter.slice(1)})`,
    // },
    title: {
        text: "",
      },
    xAxis: {
      categories: data[filter].categories,
      title: {
        text: axisLabels[filter].xAxis, // Dynamic X-Axis label
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: axisLabels[filter].yAxis, // Dynamic Y-Axis label
      },
      allowDecimals: false,
    },
    series: [
      {
        name: 'Incidents',
        data: data[filter].values,
        color: '#f3c13a',
      },
    ],
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      column: {
        pointWidth: 75, 
      },
    },
  };

  return (
    <div className='columnchart-wrapper'>
      <Typography className='columnchart-title'>Total Incidents Recorded</Typography>
      <div className='columnchart-filter-block'>
      <div style={{ marginBottom: '20px' }} className='chart-button-block'>
        <button onClick={() => setFilter('days')} className={`chart-btn ${filter === 'days' ? 'active' : ''}`}>Days</button>
        <button onClick={() => setFilter('week')} className={`chart-btn ${filter === 'week' ? 'active' : ''}`}>Weeks</button>
        <button onClick={() => setFilter('month')} className={`chart-btn ${filter === 'month' ? 'active' : ''}`}>Months</button>
        <button onClick={() => setFilter('custom')} className={`chart-btn ${filter === 'custom' ? 'active' : ''}`}>Custom</button>
      </div>
      <div className='record-clear-btn-wrap'>
        <button className='rc-btn active'>Recorded</button>
        <button className='rc-btn'>Cleared</button>
      </div>
      </div>
     
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ColumnChart;
