import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [completedCnt, setCompletedCnt] = useState(0);
  const [pendingCnt, setPendingCnt] = useState(0);


  useEffect(() => {
    const completedTodos = todos.filter((todo) => todo.done === true);
    const pendingTodos = todos.filter((todo) => todo.done === false);
    setCompletedCnt(completedTodos.length);
    setPendingCnt(pendingTodos.length);
  }, [todos]);


  const onTitleChange = (e) => {
    let inputVal = e.target.value;
    setTodoTitle(inputVal);
  };


  const onAddTodo = () => {
    const todoItem = {
      id: todos.length + 1,
      name: todoTitle,
      done: false
    };
    setTodos([...todos, todoItem]);
    setTodoTitle("");
  };


  const onCheckBoxClick = (todoId) => {
    const newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      let existing_todo = todos[i];
      if (todos[i].id === todoId) {
        newTodos.push({
          ...existing_todo,
          done: !existing_todo.done
        });
      } else {
        newTodos.push({
          ...existing_todo
        });
      }
    }
    setTodos(newTodos);
  };

  const onDeleteIconClick = (todoId) => {
    const newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      let existing_todo = todos[i];
      if (todos[i].id === todoId) {
        continue;
      } else {
        newTodos.push({
          ...existing_todo
        });
      }
    }
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        value={todoTitle}
        onChange={onTitleChange}
        style={{
          border: "0.1px solid silver",
          height: "3rem",
          width: "20rem",
          outlineColor: "blue",
          fontSize: "2rem",
          fontStyle: "italic"
        }}
      />
      <br />
      <br />
      <button
        onClick={onAddTodo}
        style={{
          border: "0px",
          outline: "none",
          color: "white",
          background: "blue",
          height: "4rem",
          width: "8rem",
          padding: "0",
          fontSize: "1rem"
        }}
      >
        Add this Todo{" "}
      </button>
      <h1>Todo List </h1>
      <p style={{ color: "green" }}>Done - {completedCnt}</p>
      <p style={{ color: "red" }}>Pending - {pendingCnt}</p>
      {todos.map((todo) => (
        <div
          style={{
            border: "0.1px solid silver",
            margin: "0.5rem",
            padding: "0.5rem",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }}
        >
          <i>
            <p
              style={
                todo.done
                  ? { color: "green", textDecoration: "line-through" }
                  : { color: "red" }
              }
            >
              {todo.id} - {todo.name}
            </p>
          </i>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => onCheckBoxClick(todo.id)}
          >
            Complete
            <input type="checkbox" checked={todo.done} />
          </span>
          <br />
          OR
          <br />
          <span
            style={{ cursor: "pointer" }}
            onClick={() => onDeleteIconClick(todo.id)}
          >
            Delete 🗑
          </span>
        </div>
      ))}
    </div>
  );
}
