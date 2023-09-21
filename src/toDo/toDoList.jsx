import React, { useState } from "react";
import styles from "./toDoList.module.css";
function ToDoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput("");
  };

  const deletTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };
  return (
    <>
      <div className={styles.mainBox}>
        <h1>ToDo List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.btn} onClick={() => addTodo(input)}>
          ADD
        </button>
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button
                className={styles.btn1}
                onClick={() => deletTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ToDoList;
