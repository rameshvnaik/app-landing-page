import { Typography } from '@mui/material';
import React from 'react';
import "./incidentmanagement.scss";


const IncidentManagement = () => {
  const departments = [
    { name: 'Cleared', value: 56, color: '#1C4280' },
    { name: 'Not Cleared', value: 36, color: '	#FF0000' }, 
  ];
  return (
    <div className='incident-manage-wrapper'>
      <Typography className='charts-title'>Incident Management</Typography>
      <div className='bars-container'>
        {departments.map((dept, index) => (
          <div key={index} className="bar-row">
            <span className="incident-management-name">{dept.name}</span>
            <div className="bar-wrapper">
              <div className="bar" style={{ width: `${dept.value}%`, backgroundColor: dept.color }}></div>
              <span className="value">{dept.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IncidentManagement;
