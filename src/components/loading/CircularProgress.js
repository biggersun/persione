import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loading = () => (
  <div className="loading">
    <CircularProgress size={50} thickness={5} />
  </div>
);

export default Loading;
