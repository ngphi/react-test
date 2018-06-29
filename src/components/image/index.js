import React from 'react';
import Square from './square';
import Zoom from './zoom';
import Username from './username';
import './index.css';

const Image = ({src, name, avatarUrl}) =>
  <div>
    <div className="image-container">
      <Zoom>
        <Square>
          <img className="image-content" src={src} alt="" />
        </Square>
      </Zoom>
      <div className="image-footer">
        <div className="image-item-left">
          <i className="fas fa-link"></i>
        </div>
        <div className="image-item">
          <i className="fas fa-eye"></i> 1000
        </div>
        <div className="image-item">
          <i className="fas fa-comment"></i> 900
        </div>
        <div className="image-item">
          <i className="fas fa-heart"></i> 123
        </div>
      </div>
    </div>
    <Username
      avatarUrl={avatarUrl}
      name={name}
    />
  </div>

export default Image;
