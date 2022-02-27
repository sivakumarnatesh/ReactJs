import React, { Component } from 'react'


class ClassClick extends Component {
   eventTriggered() {
        console.log("class event triggered")
    }
render() {
    
    return (
        <div>
            <button onClick={this.eventTriggered}>Class click me</button>
        </div>
    )
}
}

export default ClassClick
