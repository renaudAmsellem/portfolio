import React from "react";

const Mockup = ({ children, device, className }) => {
  return (
    <div className={`device device-${device} ${className ? className : ""}`}>
      <div className="device-frame">
        <div>{children}</div>
      </div>
      <div className="device-stripe" />
      <div className="device-header" />
      <div className="device-sensors" />
      <div className="device-btns" />
      <div className="device-power" />
    </div>
  );
};

export default Mockup;
