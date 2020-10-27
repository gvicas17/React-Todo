import React from 'react'
import './Todo.css'

class Todo extends React.Component {
    onClick = () => {
        this.props.completed(this.props.item.id)
    }
    render(){
        return(
            <div onClick = {this.onClick} className = {`item${this.props.item.completed ? '-completed' : ''}`}>
                {this.props.item.task}
            </div>
        )
    }
}

export default Todo