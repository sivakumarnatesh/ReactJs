import React, { Component } from 'react'


class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        //using short circuit operator
        return this.state.isLoggedIn && <div>Hello sk</div>
        //using ternary operator
       // return this.state.isLoggedIn ? <div>Hello sk</div> : <div>Hello siva</div>
        //using element variables
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Hello sk</div>
        // }
        // else {
        //     message = <div>Hello siva</div>
        // }
        // return message
        //using if else 
        // if (this.state.isLoggedIn) {
        //     return <div>Hello sk</div>
        // }
        // else {
        //     return <div>Hello siva</div>
        // }
    }
}
export default UserGreeting