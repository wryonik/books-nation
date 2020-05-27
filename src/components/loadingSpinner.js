import React from 'react';

const LoadingSpinner = () => (
  <div className="spinner">
    <i className="fa fa-spinner fa-pulse" />
    <p>Fetching Books...</p>
  </div>
);

export default LoadingSpinner;