import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "",
            comments: "",
            topic: "React"
        }

        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handleTopic = this.handleTopic.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUserNameChange(event) {
        this.setState({
            userName: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopic(event) {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit(event) {
        alert("Username : " + this.state.userName + "Comment : " + this.state.comments + "Topic : " + this.state.topic)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleComment}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Forms
