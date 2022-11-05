import { useAppSelector } from "../../hooks/useAppSelector";
import { TodoList } from "../TodoList/TodoLIst";

export const TodoApp = () => {
  const { todos } = useAppSelector((state) => state.todos);

  const uncompletedTodos = todos.filter((todo) => todo.completed === false);

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <form>
          <input
            type="text"
            data-cy="createTodo"
            className="new-todo"
            placeholder="What needs to be done?"
          />
        </form>
      </header>

      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          data-cy="toggleAll"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList items={todos} />
      </section>

      <footer className="footer">
        <span className="todo-count" data-cy="todosCounter">
          {uncompletedTodos.length} items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">
              All
            </a>
          </li>

          <li>
            <a href="#/active">Active</a>
          </li>

          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>

        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  );
};
