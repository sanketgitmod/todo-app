import React, { useState } from "react";
import { useEffect } from "react";
import {
  retriveAllTodo,
  todoDelete,
  cancelAllTodo,
} from "../api/todo/todoDataService";

function ListTodo(props) {
  const [message, setMessage] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    retriveAllTodo("in28minutes").then((response) => {
      setTodos(response.data);
    }, []);

    return () => {};
  });
  return (
    <div className="container">
      <h1>list todo</h1>
      {message && <div className="alert alert-danger">{message}</div>}
      <table className="table ">
        <thead>
          <tr>
            <th>id</th>
            <th>description</th>
            <th>targetDate</th>
            <th>done</th>
            <th>update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.targetDate.toString()}</td>
              <td>{todo.done.toString()}</td>
              <td>
                <button
                  onClick={() => props.history.push(`/todo/${todo.id}`)}
                  className="btn btn-warning"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() =>
                    todoDelete(
                      props.match.params.name,
                      todo.id
                    ).then((response) =>
                      setMessage(
                        `Delete of todos with id ${todo.id}is successfull `
                      )
                    )
                  }
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodo;
