import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }

      this.eventHandler = this.eventHandler.bind(this)
    }
    
    // eventHandler(){
    //     this.setState({
    //         message : "Goodbye !"
    //     })
    //     console.log(this)
    // }

    eventHandler = () => {
        this.setState({
            message : "See you Soon !"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.eventHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.eventHandler()}>Click</button> */}
        <button onClick={this.eventHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
