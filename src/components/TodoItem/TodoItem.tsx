import { ITodo } from "../../Types/ITodo";

import { useState } from "react";
import cN from "classnames";

import { useAppActions } from "../../hooks/useAppActions";

interface Props {
  item: ITodo;
}

export const TodoItem: React.FC<Props> = ({ item }) => {
  const { toggleStatus } = useAppActions();

  return (
    <li className={cN({ completed: item.completed })}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          id="toggle-view"
          checked={true}
        />
        <label onClick={(e) => toggleStatus(item.id)} htmlFor="toggle-view">
          {item.title}
        </label>
        <button type="button" className="destroy" data-cy="deleteTodo" />
      </div>
      <input type="text" className="edit" />
    </li>
  );
};
