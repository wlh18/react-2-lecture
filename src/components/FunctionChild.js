import React from 'react'

const FunctionChild = props => {
  return (
    <div>
      I AM A FUNCTION CHILD
      <input placeholder="Function data" onChange={props.changeFunctionData} />
      <p>My prop is: {props.data}</p>
      <p>Scott prop is: {props.scottProp}</p>
    </div>
  )
}
export default FunctionChild
