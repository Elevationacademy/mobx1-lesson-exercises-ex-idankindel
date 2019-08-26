import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import DevTools from 'mobx-react-devtools'
import Item from './components/Item';


@observer
class App extends Component {

  handleChange = e => this.setState({ newItem: e.target.value })

  addItem = () => this.props.store.addItem(this.state.newItem)

  render() {
    const store = this.props.store;
    return (
      <div className="App">
        <DevTools />
        <input onChange={this.handleChange} />
        <button onClick={this.addItem}>Add</button>
        {store.list.map((item, index) => <Item item={item} key={index} store={store} />)}
      </div>
    );
  }
}

export default App;
