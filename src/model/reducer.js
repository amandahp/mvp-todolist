export const initialState = {
    inputValue: '',
    todoList: [],
  };
  
  export default function Reducer(state = initialState, action) {
    console.log('action', action.data)
    switch (action.type) {
        case 'TODO_INSERT':
          return { ...state, todoList:[...state.todoList, action.todoInput] }
        case 'SET_INPUT_VALUE':
            return {...state, inputValue:action.inputValue}
        default:
          return state;
    }
  }