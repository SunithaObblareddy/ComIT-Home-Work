const dialog = document.getElementById("dialog");
const showTodoFormBtn = document.getElementById("showTodoFormBtn");
const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");
const RemoveDialogBtn = document.getElementById("RemoveDialogBtn");
const textarea=document.getElementById("todo");
const progressBar=document.getElementById("dialogclosingTimer");
const closeDialogTime=5000;
  let IntervalId;
  let timeoutId;
  const onDialogcloseHandler=()=>{
    dialog.close();
    clearInterval(IntervalId);  //stop a timer that was previously established using the setInterval() method
    clearTimeout(timeoutId);
    textarea.value="";
  }

showTodoFormBtn.addEventListener("click", ()=>{
  dialog.showModal();
    let timeLeft=closeDialogTime;
  progressBar.max=closeDialogTime;
  IntervalId=setInterval(() => {
    timeLeft -= 100;
    progressBar.value = timeLeft;
  }, 100);
    timeoutId=setTimeout(()=>{
    textarea.value="";
    onDialogcloseHandler();
    timeLeft=closeDialogTime;
  },closeDialogTime)
  clear
});
RemoveDialogBtn.addEventListener("click", ()=>{
  onDialogcloseHandler();
    dialog.close();

});

todoForm.addEventListener("submit", () => { 
  const newTodoContainer = document.createElement("li");
  const todoText = document.createElement("p");
  const timestamp = document.createElement("p");
  const RemoveBtn = document.createElement("button");
  const ConfirmBtn=document.createElement("button");

  RemoveBtn.addEventListener("click", ()=> {
    newTodoContainer.classList.add("fade-In")
        newTodoContainer.classList.add("fade-Out")
  setTimeout(()=>{
    newTodoContainer.remove();
  },300)
});
ConfirmBtn.addEventListener("click", ()=> {
    newTodoContainer.classList.add("fade-In")
        newTodoContainer.classList.add("fade-Out")
  setTimeout(()=>{
    newTodoContainer.remove();
  },300)
});
  ConfirmBtn.innerHTML = "Confirm ✅";
RemoveBtn.innerHTML="Remove";


  const currentDate = new Date();

  todoText.innerHTML = textarea.value;
  timestamp.innerHTML = currentDate.toLocaleDateString();

  newTodoContainer.append(todoText, timestamp, ConfirmBtn, RemoveBtn);
  todoList.prepend(newTodoContainer);

onDialogcloseHandler();
});

//As a user I want a todo form dialog to be closed after a five seconds
