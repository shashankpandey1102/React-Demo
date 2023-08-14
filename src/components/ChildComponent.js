import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <div>
        <button onClick={props.greetHandler}>Child Button</button>
      </div>
      <button onClick={props.greetChangeHandler}>Change</button>
    </div>
  )
}

export default ChildComponent
