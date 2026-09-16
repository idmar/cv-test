import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

const Toast = ({ message, type = 'info', duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }[type];

  return (
    <div
      className={`fixed bottom-8 right-8 px-6 py-4 text-white rounded-lg shadow-lg ${bgColor} animate-pulse`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Toast;
