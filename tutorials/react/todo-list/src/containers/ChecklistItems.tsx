import { ChecklistItem } from "@components/ChecklistItem";
import "@containers/ChecklistItems.css";
import { useState } from "react";

type TodoTaskItem = {
  id: number;
};

export const ChecklistItems = () => {
  const [todoTasks, setTodoTasks] = useState<TodoTaskItem[]>([{ id: 0 }]);

  const addNewTodoTaskLine = () => {
    setTodoTasks([...todoTasks, { id: todoTasks.length+1 }]);
  };

  return (
    <div className="check-list-items-box">
      <div className="check-list-items-tasks">
        {todoTasks.map(todoTask => <ChecklistItem checkboxId={`checkbox-${todoTask.id}`} />)}
      </div>
      <div className="check-list-items-buttons-footer">
        <button className="check-list-items-add-button" onClick={addNewTodoTaskLine}>+</button>
      </div>
    </div>
  );
};
