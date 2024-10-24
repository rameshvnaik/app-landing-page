import React from 'react';
import "./alldepartment.scss"
import DepartmentBarChartCustom from '../charts/DepartmentBarChart';
import Calibrated from './Calibrated';

const AllDepartment = () => {
  return (
    <div className="department-calibrated-wrapper">
    <DepartmentBarChartCustom />
    <Calibrated />
  </div>
  )
}

export default AllDepartment
