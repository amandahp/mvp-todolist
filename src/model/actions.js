export function insertTodo(todoInput) {
    return {
      type: "TODO_INSERT",
      todoInput,
    }
  }

export function setInputValue(inputValue){
    return{
        type: "SET_INPUT_VALUE",
        inputValue,
    }
}

