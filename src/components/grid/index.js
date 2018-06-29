import React from 'react';
import './index.css';

const Grid = ({children}) =>
  <div className="grid-container">
    {
      React.Children.map(children, (child, i) =>
        <div className="grid-child" >{child}</div>
      )
    }
  </div>

export default Grid;
