import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, onClose, color }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);
const handleAnimationEnd = () => {
    if (!isVisible) {
      onClose();
    }
  };

  return (
    <div className={`notification ${color}`} onAnimationEnd={handleAnimationEnd}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;