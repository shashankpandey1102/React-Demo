import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'I am Parent'
      }
      this.greetParent = this.greetParent.bind(this)
      this.greetChange = this.greetChange.bind(this)
    }
    
    greetParent() {
        alert("Hello " + this.state.parentName);
    }

    greetChange(){
        this.setState({
            parentName : "I am new Parent"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.parentName}</h1>
        <ChildComponent greetHandler = {this.greetParent} greetChangeHandler = {this.greetChange}/>
      </div>
    )
  }
}

export default ParentComponent
