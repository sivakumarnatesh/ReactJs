import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'sivakumar'
        }
        console.log(this.state.name + " constructor from lifecycle B");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Get derived from props at LifeCycle B");
        return null;
    }
    componentDidMount() {
        console.log("component did mount from lifecycle B");
    }
    shouldComponentUpdate() {
        console.log("Lifecycle B should component update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,nextState){
        console.log("lifecycle B get snapshot before update")
        return null
    }
    componentDidUpdate(){
        console.log("Lifecycle B component Did update ")
    }
    
    render() {
        console.log("render calls from LifecycleB")
        return (
            
            <div>
            LifecycleB
            </div>
            
        )
    }
}

export default LifecycleB
