import React from 'react';
import './index.css'

const Username = ({avatarUrl, name}) =>
  <div className="username-container">
    <img src={avatarUrl} className="username-avatar" alt="" />
    <div className="username-name">
      {name}
    </div>
  </div>

export default Username;
