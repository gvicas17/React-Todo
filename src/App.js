import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todo = [
  {
    task: 'Feed Pets',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Clean Floors',
    id: 1528817084358,
    completed: false
  },

  {
    task: 'Wash Dishes',
    id: 1234,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
     todo
    };
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  toggleTask = (taskId) => {
    console.log(taskId)
    this.setState({
      todo: this.state.todo.map((task)=>{
        if (taskId === task.id){
          return{
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  clearCompletedTask = (event) => {
    event.preventDefault();
    this.setState({
      todo: this.state.todo.filter((task)=> !task.completed)
    });
  };
  render() {
    return (
      <div className = 'App'>
      <div className = 'header'>
        <h2>To Do List</h2>
        <TodoForm
          addTask = {this.addTask}
        />
      </div>
        <TodoList
          todo = {this.state.todo}
          toggleTask = {this.toggleItem}
          clearCompletedTask = {this.clearCompletedTask}
        />
      </div>
    );
  }
}

export default App;
