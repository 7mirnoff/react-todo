import React from 'react'
import classes from './todo-list.module.scss'

import TodoItem from '../todo-item/todo-item'

const TodoList = () => {
  return (
    <ul className={classes.todoList}>
      <TodoItem />
      <TodoItem />
    </ul>
  )
}

export default TodoList
