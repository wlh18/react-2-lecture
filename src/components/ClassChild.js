import React, { Component } from 'react'

class ClassChild extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Class Child here
        <p>My prop is: {this.props.data}</p>
        <p>My name is: {this.props.myName}</p>
        <p>Random thing is: {this.props.randomThing}</p>
        <input
          onChange={event => this.props.changeClassData(event)}
          placeholder="Class data"
        />
      </div>
    )
  }
}
export default ClassChild
