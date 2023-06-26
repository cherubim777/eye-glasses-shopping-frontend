import React, { useState, useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, onClose, color }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);



  return (
    <div>
      {isVisible && (
        <div className={`notification ${color}`}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Notification;