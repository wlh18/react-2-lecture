import React, { Component } from 'react'
import ClassChild from './ClassChild'
import FunctionChild from './FunctionChild'

class ParentComponent extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Scott The Best Assistant Instructor Ever',
      classData: 'This is class data',
      functionData: 'This is function data',
    }

    this.changeName = this.changeName.bind(this)
    this.changeClassData = this.changeClassData.bind(this)
  }

  changeName(event) {
    this.setState({
      name: event.target.value,
    })
  }

  changeClassData(event) {
    this.setState({
      classData: event.target.value,
    })
  }

  //Arrow function get context from where they are written
  //This means the value of this is maintained even if we pass the method as props
  changeFunctionData = event => {
    this.setState({
      functionData: event.target.value,
    })
  }

  render() {
    return (
      <div>
        I AM THE PARENT COMPONENT
        <input placeholder="Name" onChange={this.changeName} />
        <ClassChild
          changeClassData={this.changeClassData}
          randomThing="This is a random thing"
          myName={this.state.name}
          data={this.state.classData}
        />
        <FunctionChild
          changeFunctionData={this.changeFunctionData}
          scottProp="Scott"
          data={this.state.functionData}
        />
      </div>
    )
  }
}
export default ParentComponent
