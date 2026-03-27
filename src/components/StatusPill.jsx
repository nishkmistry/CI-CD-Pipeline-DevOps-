import React from 'react';

const StatusPill = ({ status, text }) => {
  // Map internal statuses to CSS custom classes
  const statusMap = {
    success: 'status-success',
    live: 'status-success',
    passed: 'status-success',
    healthy: 'status-success',
    ready: 'status-success',
    online: 'status-success',
    active: 'status-success',
    info: 'status-success',
    
    warning: 'status-warning',
    running: 'status-running',
    deploying: 'status-warning',
    monitor: 'status-warning',
    
    error: 'status-error',
    failed: 'status-error',
    fail: 'status-error',
  };

  const className = statusMap[status.toLowerCase()] || 'status-warning';

  return (
    <span className={`status-pill ${className}`}>
      {text || status}
    </span>
  );
};

export default StatusPill;
