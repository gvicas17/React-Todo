import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


const toDoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      toDoList: toDoList,
      input: ''
    }
  }


onTextInput = (e) => {
        this.setState({
          input: e.target.value
      })
    }

addTask = (task) => {
  this.setState({
    toDoList:[...this.state.toDoList, {
      task: task,
      id: this.state.toDoList.length,
      completed: false
    }]
    })
}
onSubmit = (e) => {
  e.preventDefault()
  this.addTask(this.state.input)
  this.setState({
    input: ''
  })
}

toggleCompleted = (taskId) =>{
  this.setState({
    toDoList: this.state.toDoList.map ((item) => {
      if (item.id === taskId){
        return{
          ...item, completed: !item.completed
        }
      }
        else{
          return item
        }
    })
  })
}

clearItems = () => {
  this.setState({
    toDoList: this.state.toDoList.filter((tasks) => (!tasks.completed))
  })
}

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1 className = 'title'>Your Personal To-Do List</h1>
        <TodoForm addTask = {this.addTask} onTextInput = {this.onTextInput} value = {this.state.input} onSubmit = {this.onSubmit} clearItems = {this.clearItems}/>
        <TodoList todo = {this.state.toDoList} completed = {this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
