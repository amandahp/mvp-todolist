import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux';
import TodoList from '../../viewpage/todoList/todolist'
import { insertTodo, setInputValue } from '../../../model/actions'


const TodoListController = () => {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todoList)
    const input = useSelector(state => state.inputValue)

    const handleInputChange = (input) => {
        dispatch(setInputValue(input))
    }

    const handleOnClick = () => {
        dispatch(insertTodo(input))
    }

    return (
        <TodoList 
        todosPage={todo} 
        inputPage={input} 
        handleOnClickPage={handleOnClick} 
        handleInputChangePage={handleInputChange}
    > 
    </TodoList>
    )
}

export default TodoListController