import { Typography } from '@mui/material';
import React from 'react';
import "./calibrated.scss";


const Calibrated = () => {
  const calibarted = [
    { name: 'Calibrated', value: 86, color: '#1C4280' },  
    { name: 'Not Calibrated', value: 46, color: '#FFA500' }, 
    { name: 'Not Required', value: 26, color: '#F4C545' }, 
  ];
  return (
    <div className='calibarted-manage-wrapper'>
      <Typography className='charts-title'>Incident Management</Typography>
      <div className='calibarted-bars-container'>
        {calibarted.map((dept, index) => (
          <div key={index} className="calibarted-bar-row">
            <span className="calibarted-management-name">{dept.name}</span>
            <div className="calibarted-bar-wrapper">
              <div className="calibarted-bar" style={{ width: `${dept.value}%`, backgroundColor: dept.color }}></div>
              <span className="calibarted-value">{dept.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calibrated;
