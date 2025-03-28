import "@containers/ChecklistItems.css";

import { ChecklistItem, Task } from "@components/ChecklistItem";
import { useState } from "react";

export const ChecklistItems = () => {
  const [todoTasks, setTodoTasks] = useState<Task[]>([{ id: self.crypto.randomUUID() }]);

  const addNewTodoTaskLine = () => {
    setTodoTasks([...todoTasks, { id: self.crypto.randomUUID() }]);
  };

  const updateTaskText = (updatedTodoTask: Task) => {
    setTodoTasks(
      todoTasks.map(todoTask => {
        if (todoTask.id === updatedTodoTask.id) {
          todoTask = {
            ...todoTask,
            ...updatedTodoTask,
          };
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
            checked={todoTask.checked}
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
