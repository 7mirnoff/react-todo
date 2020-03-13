import React, { useEffect } from 'react'
import TodoList from '../components/todo-list/todo-list'
import classes from './app.module.scss'
import Context from '../context'
import AddTodo from '../components/add-todo/add-todo'

function App () {
  const [todos, setTodos] = React.useState([])

  useEffect(() => {
    window.fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
      })
  }, [])

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.complited = !todo.complited
      }

      return todo
    }))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => {
      if (todo.id !== id) {
        return true
      } else {
        return false
      }
    }))
  }

  const addTodo = (title) => {
    setTodos(todos.concat([{
      title: title,
      id: Date.now(),
      complited: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className={classes.wrapper}>
        <h1>React todo</h1>
        <AddTodo onCreate={addTodo} />
        { (todos.length) ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No todos</p> }
      </div>
    </Context.Provider>
  )
}

export default App
