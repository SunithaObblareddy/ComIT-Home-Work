import './App.css';
import { useState } from "react";

// App Component
function GuestList() {
  const [GuestName, setGuestName] = useState("");//A variable to store the current text from the textarea, setTodoText ia a function to update the text

  const [guests, addGuests] = useState<string[]>([]);//list array of all todo items, a function to addnew items to the list
  //When user submits the form:
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();//stop the page from refreshing
    addGuests((previousState) => [...previousState, GuestName]);//adds new task to the previous state
    setGuestName("");//clears textarea
  };

  const onGuestListChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {//This function runs every time you type a letter.
    setGuestName(event.target.value);//saves the typed text to todoText
  }
  const onDeleteClickHandler = (index: number) => {
  addGuests((previousState) => previousState.filter((_, i) => i !== index));
  };

//JSX code//In react, components are executed only once not like();//to execute multiple times we use  useState("") hook
return (
    <>
      <form onSubmit={onSubmitHandler}>
        <textarea
          onChange={onGuestListChangeHandler}
          value={GuestName}
          placeholder="Enter todo text"
        ></textarea>
        <input type="submit" value="Add" />
      </form>

      <ul>
        {guests.map((guest, index) => (
          <li key={index}>{guest}
          <button onClick={()=>onDeleteClickHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GuestList;
