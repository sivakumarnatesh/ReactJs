import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'sivakumar'
        }
        console.log(this.state.name + " constructor from lifecycle A");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Get derived from props at LifeCycle A");
        return null;
    }
    componentDidMount() {
        console.log("component did mount from lifecycle A");
    }
    shouldComponentUpdate() {
        console.log("Lifecycle A should component update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, nextState) {
        console.log("lifecycle A get snapshot before update")
        return null
    }
    componentDidUpdate() {
        console.log("Lifecycle A component Did update ")
    }
    changeState = () => {
        this.setState({
            name: 'sk'
        })
    }
    render() {
        console.log("render calls from LifecycleA")
        return (
            <div>
                LifecycleA
                <LifecycleB />
                <button onClick={this.changeState}>state change</button>


            </div>
        )
    }
}

export default LifecycleA
