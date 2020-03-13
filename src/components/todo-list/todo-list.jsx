import React from 'react'
import PropTypes from 'prop-types'
import classes from './todo-list.module.scss'

import TodoItem from '../todo-item/todo-item'

const TodoList = (props) => {
  return (
    <ul className={classes.todoList}>
      { props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        )
      }) }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList
