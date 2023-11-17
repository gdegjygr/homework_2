import React, {useState} from "react"


export default function ToDoList() {
  const [todo, setTodo] = useState([])
  const [newTodo, setNewTodo] = useState("")


  const inputChange = (e) => {
    setNewTodo(e.target.value)
  }


  const addTodo = () => {
    if(newTodo.trim() != ''){
      const todoItem = {
        id: Date.now(),
        text: newTodo
      }
      setTodo([...todo, todoItem])

      setNewTodo('')
    }
  }

  const keyPress = (e) => {
    if(e.key === "Enter"){
      addTodo()
    }
  }

  return (
    <div>
      <h2>Create a new task</h2>
      <input placeholder="Task today?"
      value = {newTodo}
      onChange = {inputChange}
      onKeyPress={keyPress}
      />
      <button onClick={addTodo}>Add task</button>
      <ol>
        {todo.map((todos) => 
        <li key = {todos.id}>{todos.text}</li>
        )}
      </ol>
    </div>
  );
}
