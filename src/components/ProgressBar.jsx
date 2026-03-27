import React, { useEffect, useState } from 'react';

const ProgressBar = ({ value, label, color = 'var(--accent-primary)', height = '8px' }) => {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    // Delay setting width slightly to trigger CSS transition
    setTimeout(() => {
      setWidth(`${value}%`);
    }, 100);
  }, [value]);

  return (
    <div style={{ width: '100%', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        {label && <span>{label}</span>}
      </div>
      <div 
        style={{ 
          width: '100%', 
          height, 
          backgroundColor: 'var(--bg-secondary)', 
          borderRadius: '999px',
          overflow: 'hidden' 
        }}
      >
        <div 
          style={{ 
            width, 
            height: '100%', 
            backgroundColor: color,
            transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
            borderRadius: '999px'
          }} 
        />
      </div>
    </div>
  );
};

export default ProgressBar;
