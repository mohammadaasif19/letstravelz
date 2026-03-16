import React from 'react';
import { Button } from "./button";

const HeartbeatButton = ({ children, className, ...props }) => {
  return (
    <Button 
      variant="brand" 
      className={`heartbeateffect cursor-pointer ${className}`} 
      {...props}
    >
      {children}
    </Button>
  );
};

export default HeartbeatButton;
