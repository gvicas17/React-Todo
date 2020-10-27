import React from 'react'

class TodoForm extends React.Component{
    onClick = (e) => {
        e.preventDefault()
        this.props.clearItems()
    }

    render(){
        return(
            <div className = 'form-container'>
                <form className = 'todoForm' onSubmit = {this.props.onSubmit}>
                <input className = 'input'
                    placeholder = 'add task'
                    type = 'text'
                    name = 'task'
                    value = {this.props.value}
                    onChange = {this.props.onTextInput}
                />
                <div className = 'addButton' onClick= {this.props.onSubmit}>Add Todo</div>
                </form>
                <div className = 'clearButton' onClick = {this.onClick}>Clear Completed</div>
            </div>
        )
    }
}

export default TodoForm