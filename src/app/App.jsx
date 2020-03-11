import React from 'react'
import TodoList from '../components/todo-list/todo-list'
import classes from './app.module.scss'

function App () {
  const todos = [
    {
      id: 1, complited: false, title: 'Купить хлеб'
    },
    {
      id: 2, complited: false, title: 'Купить масло'
    },
    {
      id: 3, complited: false, title: 'Купить молоко'
    }
  ]

  return (
    <div className={classes.wrapper}>
      <h1>React todo</h1>
      <TodoList

      />
    </div>
  )
}

export default App
