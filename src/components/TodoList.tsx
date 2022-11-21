import React from 'react'
import { TodoContext, TodoContextType } from '../Contexts/TodoContext';
import {Todo} from '../models/todomodels'





const TodoList: React.FC = () => {
  const {todos} = React.useContext(TodoContext) as TodoContextType;

  return (
    <div className='mt-3'>
    <div className='text-muted mb-2'> <small>Todo Items:</small></div>
    <div>
        {
            todos.map((item: Todo) => (<div className='mb-3'>{item.text} ({item.isCompleted ? "Completed": "Not Completed"})</div>))
        }
    </div>

    </div>
  )
}

export default TodoList