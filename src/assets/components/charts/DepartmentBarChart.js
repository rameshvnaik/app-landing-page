import React from 'react';
import './department.scss'; 

const DepartmentBarChartCustom = () => {
  const departments = [
    { name: 'Laboratory', value: 91, color: '#1C4280' },  
    { name: 'Radiology', value: 53, color: '#4993D1' },   
    { name: 'ICU', value: 98, color: '#A3D6D3' },       
    { name: 'Operation Theatre', value: 75, color: '#F4C545' }, 
    { name: 'OPD', value: 36, color: '#E87732' }          
  ];

  return (
    <div className="department-chart">
      <div className="chart-header">
        <h3>Departments</h3>
        <div className="color-indicators">
          {departments.map((dept, index) => (
            <span key={index} className="color-box" style={{ backgroundColor: dept.color }}></span>
          ))}
        </div>
      </div>
      <div className="bars-container">
        {departments.map((dept, index) => (
          <div key={index} className="bar-row">
            <span className="department-name">{dept.name}</span>
            <div className="bar-wrapper">
              <div className="bar" style={{ width: `${dept.value}%`, backgroundColor: dept.color }}></div>
              <span className="value">{dept.value}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="see-more">
        <a href="#see-more">See More</a>
      </div>
    </div>
  );
};

export default DepartmentBarChartCustom;
