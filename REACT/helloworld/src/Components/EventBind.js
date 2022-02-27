import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        //this.msg = this.msg.bind(this)
    }
    //  msg(){
    //      this.setState({
    //          message:'Thank you'
    //      })
    //  }
    msg = () => {
        this.setState({
            message: 'Thank you'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={()=>this.msg()}>click me</button> */}
                {/* <button onClick={this.msg.bind(this)}>click me</button> */}
                <button onClick={this.msg}>click me</button>
            </div>
        )
    }
}

export default EventBind
