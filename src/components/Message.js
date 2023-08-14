import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome Visitor"
        }
    }

    changeMessagee() {
        this.setState({
            message: "Thanks for Visiting"
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessagee()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;