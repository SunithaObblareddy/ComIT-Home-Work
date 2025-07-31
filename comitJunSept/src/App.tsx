import './App.css';
import { useState } from "react";

// App Component
function App() {
  const [todoText, setTodoText] = useState("");//A variable to store the current text from the textarea, setTodoText ia a function to update the text

  const [todos, setTodos] = useState<string[]>([]);//list array of all todo items, a function to addnew items to the list
  //When user submits the form:
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();//stop the page from refreshing
    setTodos((previousState) => [...previousState, todoText]);//adds new task to the previous state
    setTodoText("");//clears textarea
  };

  const onTodoTextChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {//This function runs every time you type a letter.
    setTodoText(event.target.value);//saves the typed text to todoText
  };

  //When user submits the form:

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <textarea
          onChange={onTodoTextChangeHandler}
          value={todoText}
          placeholder="Enter todo text"
        ></textarea>
        <input type="submit" value="Add" />
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
