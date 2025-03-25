import { ChecklistItem } from "@components/ChecklistItem";
import "@containers/ChecklistItems.css";

export const ChecklistItems = () => {
  return (
    <div className="check-list-items-box">
      <ChecklistItem
        checkboxId="checkbox-1"
        checklistItemText="study"
      />
      <ChecklistItem
        checkboxId="checkbox-2"
        checklistItemText="do laundry"
      />
      <ChecklistItem
        checkboxId="checkbox-3"
        checklistItemText="wash the dishes"
      />
    </div>
  );
};
