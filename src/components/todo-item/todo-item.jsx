import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classes from './todo-item.module.scss'
import Context from '../../context'

const TodoItem = ({ todo, index, onChange }) => {
  const { removeTodo } = useContext(Context)
  return (
    <li className={classes.todoItem}>
      <span className={todo.complited ? classes.todoItem__done : ''}>
        <input className={classes.todoItem__checkbox} onChange={() => { onChange(todo.id) }} type='checkbox' checked={todo.complited} />
        <strong>{ index + 1 }</strong>&nbsp;{todo.title}
      </span>
      <button className={classes.todoItem__close} onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem
