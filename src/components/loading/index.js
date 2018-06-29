import React from 'react';
import './index.css';

const Loading = ({isLoading}) =>
  isLoading &&
    <div className="loading">
      <img src="/loading.gif" alt="" />
    </div>

export default Loading
