import React from 'react';
import './index.css';

const Square = ({children}) =>
  <div className="square-box">
    <div className="square-content">
      {children}
    </div>
  </div>

export default Square
