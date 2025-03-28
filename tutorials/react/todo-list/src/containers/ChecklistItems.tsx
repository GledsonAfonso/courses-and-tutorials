import "@containers/ChecklistItems.css";

import { ChecklistItem } from "@components/ChecklistItem";
import { useState } from "react";

type TodoTaskItem = {
  id: string;
  text?: string;
};

export const ChecklistItems = () => {
  const [todoTasks, setTodoTasks] = useState<TodoTaskItem[]>([{ id: self.crypto.randomUUID() }]);

  const addNewTodoTaskLine = () => {
    setTodoTasks([...todoTasks, { id: self.crypto.randomUUID() }]);
  };

  const updateTaskText = (checkListItemId: string, newTaskText: string) => {
    setTodoTasks(
      todoTasks.map(todoTask => {
        if (todoTask.id === checkListItemId) {
          todoTask.text = newTaskText;
        }

        return todoTask;
      })
    );
  };

  const removeTaskFromArray = (checkListItemId: string) => {
    setTodoTasks(todoTasks.filter(todoTask => todoTask.id !== checkListItemId));
  };

  return (
    <div className="check-list-items-box">
      <div className="check-list-items-tasks">
        {todoTasks.map(todoTask =>
          <ChecklistItem
            checkListItemId={todoTask.id}
            checkListItemText={todoTask.text}
            checkboxId={`checkbox-${todoTask.id}`}
            onTaskUpdate={updateTaskText}
            onTaskRemove={removeTaskFromArray}
          />
        )}
      </div>
      <div className="check-list-items-buttons-footer">
        <button className="check-list-items-add-button" onClick={addNewTodoTaskLine}>+</button>
      </div>
    </div>
  );
};
