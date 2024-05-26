// src/components/Notification.jsx
import React from 'react';
import '../styles/Notification.css';

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      <span className="closebtn" onClick={onClose}>×</span>
      <p>{message}</p>
    </div>
  );
};

const NotificationCon = () => {
  const initialNotifications = [
    'This is a notification message.',
    'This is a notification message.',
    'This is a notification message.',
    'This is a notification message.',
    'This is a notification message.',
    'This is a notification message.',
    'This is a notification message.',
    'This is a notification message.',
    'This is a notification message.',
  ];

  const handleRemoveNotification = (index) => {
    const newNotifications = [...notifications];
    newNotifications.splice(index, 1);
    setNotifications(newNotifications);
  };

  const [notifications, setNotifications] = React.useState(initialNotifications);

  return (
    <div className="page-notice-con">
      {notifications.map((message, index) => (
        <Notification
          key={index}
          message={message}
          onClose={() => handleRemoveNotification(index)}
        />
      ))}
    </div>
  );
};

export default NotificationCon;
