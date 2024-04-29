import "./TodoCounter.css"

function TodoCounter({totalTodos, completedTodos}) {
    return (
      <h1 className="title">
        <span> {completedTodos} </span>
        Tareas completadas de 
        <span> {totalTodos} </span>
      </h1>
    );
  }
  
  export { TodoCounter };