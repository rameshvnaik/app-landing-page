import React from 'react'
import DonutChart from '../charts/DonutChart'
import TotalAssets from '../charts/TotalAssests'
import "./subinfo.scss";
import Service from './Service';
import IncidentManagement from './IncidentManagment';

const SubInfo = () => {
  return (
    <div className='info-wrapper'>
      <DonutChart />
      <Service />
      <TotalAssets />
      <IncidentManagement />
    </div>
  )
}

export default SubInfo
