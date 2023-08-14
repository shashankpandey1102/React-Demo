import React, { Component } from 'react'

class UserGreet extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }


    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    Welcome Shashank
                </div>
            )
        }
        else {
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }
    }
}

export default UserGreet
