import React, { Component } from 'react';
import './App.css';
import Item from './Item';

class List extends Component {
  render() {
    let idNo = 0
    return (
      <ol>
        {this.props.items.map(content => {
          return <Item destroy={this.props.destroy} idNo={idNo++}>{content}</Item>
        })}
      </ol>
    );
  }
}

export default List;