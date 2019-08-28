import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      itemList : [],
      currentVal : ''
    }
    this.addItem = this.addItem.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.destroy = this.destroy.bind(this)
  }

  addItem() {
    let arr = this.state.itemList
    arr.push(this.state.currentVal)
    this.setState({itemList: arr})
  }

  updateInput(input) {
    this.setState({currentVal: input})
  }

  destroy(idNo) {
    let arr = this.state.itemList
    arr.splice(idNo,1)
    this.setState({itemList: arr})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            To-Do List
          </h1>
        </header>
        <main>
          <label>
            Task:  
            <input type="text" name="toAdd" onChange={e => this.updateInput(e.target.value)}/>
          </label>
          <button onClick={this.addItem}>ADD</button>
          <div id="list">
            <List destroy={this.destroy} items={this.state.itemList}></List>
          </div>
        </main>
      </div>
    );
  }
}
export default App;