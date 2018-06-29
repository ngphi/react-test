import React, { Component } from 'react';
import './index.css';

export default class Zoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  open = () => {
    this.setState({open: true});
  }

  close = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        {this.state.open && <div className="zoom-overlay" onClick={this.close} />}
        <div className={this.state.open ? "zoom-content" : ""} onClick={this.open}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
