import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './loading.css'

const style = {
  width: 40,
  position: 'relative',
  left: '50%',
  top: 20,
  transform: 'translateX(-50%)'
};

const Loading = () => (
  <div className="loading" style={ style }>
    <CircularProgress size={40} thickness={5} />
  </div>
);

export default Loading;
