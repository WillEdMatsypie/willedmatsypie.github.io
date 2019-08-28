import React, { Component } from 'react';
import './App.css';

class Item extends Component {
  render() {
    return (
      <div>
        <li>{this.props.children}
        <button onClick={() => this.props.destroy(this.props.idNo)}>Delete</button>
        </li>
      </div>
    );
  }
}

export default Item;