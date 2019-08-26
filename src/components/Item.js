import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {

  checkItem = e => this.props.store.checkItem(e.target.value)

  editItem = e => {
    const location = prompt("What is your location?");
    this.props.store.editItem(e.target.name, location)
  }

  deleteItem = e => this.props.store.deleteItem(e.target.name)

  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" value={item.name} onClick={this.checkItem} />
        {item.name}{" "}{item.location}
        <button onClick={this.editItem} name={item.name}>Edit</button>
        <button onClick={this.deleteItem} name={item.name} className="editButton" >Delete</button>
      </div>
    )
  }
}

export default Item