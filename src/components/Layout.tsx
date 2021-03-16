import React from 'react';

export const Layout: React.FC = ({children}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {children}
    </div>
  );
}