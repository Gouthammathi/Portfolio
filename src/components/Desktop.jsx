import React from 'react';
import Spline from '@splinetool/react-spline';

const Desktop = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
      <div style={{ width: '50%', height: '100%' }}>
        <Spline scene="https://prod.spline.design/1FbAnbD-rMe-2Xf3/scene.splinecode" />
      </div>
    </div>
  );
};

export default Desktop;
