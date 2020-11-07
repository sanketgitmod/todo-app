import React from "react";
import "./App.css";
// // import { First } from "./components/First";
// import Counter from "./components/Counter";
import TodoApp from "./components/todo/TodoApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <TodoApp></TodoApp>
      </BrowserRouter>
    </React.Fragment>
  );
}

// function LearningComponent() {
//   return (
//     <>
//       {" "}
//       <div className="App">hello world</div>
//       <First></First>)
//     </>
//   );
// }
export default App;
