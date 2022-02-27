import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            topic: 'React',
        }
    }
    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    changeComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    changeSkill = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) =>{
      
            alert(this.state.username +" "+this.state.comment + this.state.topic);
            event.preventDefault();
      
    }
    render() {
        const{username,comment,topic} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label>Username</label>
                        <input type="text" value={username} onChange={this.changeUsername} />
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea type="text" value={comment} onChange={this.changeComment}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.changeSkill}>
                            <option value='React'>React</option>
                            <option value='Angular'>Angular</option>
                            <option value='Vue'>Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
