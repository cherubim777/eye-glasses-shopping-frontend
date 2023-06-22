import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
const handleAnimationEnd = () => {
    if (!isVisible) {
      onClose();
    }
  };
  
  return (
    <div className={"notification"} onAnimationEnd={handleAnimationEnd}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;