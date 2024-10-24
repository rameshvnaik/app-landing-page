import { Typography } from "@mui/material";
import React from "react";
import "./service.scss"
import serviceImg from "../../assets/images/services.png"

const Service = () => {
  return (
    <div className="services-wrapper">
      <Typography className="charts-title">In Service</Typography>
      <img src={serviceImg} className="service-img" alt="service-img" />
      <div className="service-info-block">
        <div className="blocks">
          <Typography className="service-title">Total Services</Typography>
          <Typography className="service-val">38</Typography>
        </div>
        <div className="blocks">
          <Typography className="service-title">Open Services</Typography>
          <Typography className="service-val">18</Typography>
        </div>
      </div>
    </div>
  ); 
};

export default Service;
