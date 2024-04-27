import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';

const defaultTodos = [
  { text: 'Cortar cebollita', completed: true },
  { text: 'Terminar el curso de react.js', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Aprender react xd', completed: false },
  { text: 'Aprender react 2', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter completed={10} total={21} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text} 
            completed={todo.completed}
            />
        ))}
      </TodoList>

      <TodoCreateButton />
    </>
  );
}



export default App;
