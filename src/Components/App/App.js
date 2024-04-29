
import React, { useState } from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoCreateButton } from "../TodoCreateButton/TodoCreateButton";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";


const defaultTodos = [
  { text: 'Cortar cebollita', completed: true },
  { text: 'Terminar el curso de react.js', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Aprender react xd', completed: false },
  { text: 'Aprender react 2', completed: false },
  { text: 'TEST CON MAYUS', completed: true },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo =>
    !!todo.completed
  ).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });



  const toggleTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) =>
      todo.text === text
    );
    newTodos[index].completed = !newTodos[index].completed;

    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    // const newTodos = [...todos];
    const newTodos = todos.filter(todo =>
      !(todo.text === text)
    )

    setTodos(newTodos);
  }


  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>


      <TodoCreateButton />
    </>
  );
}



export default App;
