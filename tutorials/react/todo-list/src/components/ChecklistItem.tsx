import "@components/ChecklistItem.css";

import { useState } from "react";

export type ChecklistItemProps = {
	checkListItemId: string;
	checkListItemText?: string;
	checkboxId: string;
	onTaskUpdate: (checkListItemId: string, newTaskText: string) => void;
	onTaskRemove: (checkListItemId: string) => void;
};

export const ChecklistItem = ({
	checkListItemId,
	checkListItemText,
	checkboxId,
	onTaskUpdate,
	onTaskRemove,
}: ChecklistItemProps) => {
	const [ checked, setChecked ] = useState(false);

	const labelStyle = {
		textDecorationLine: checked ? "line-through" : "none",
		color: checked ? "#424242" : undefined
	};
	const checklistItemName = `checkbox-${checkboxId}`;

	const updateCheckbox = () => {
		const newValue = !checked;
		setChecked(newValue);
	};

	const updateTask = (text: string) => {
		onTaskUpdate(checkListItemId, text);
	};

	const removeTask = () => {
		onTaskRemove(checkListItemId);
	};

	return (
		<div id={checkListItemId} className="check-list-item-box" key={checkListItemId}>
			<input
				className="check-list-item-checkbox"
				type="checkbox"
				id={checkboxId}
				name={checklistItemName}
				onChange={updateCheckbox}
			/>
			<input
				className="check-list-item-text"
				style={labelStyle}
				type="text"
				defaultValue={checkListItemText ?? ""}
				onChange={(event) => updateTask(event.target.value)}
			/>
			<button className="remove-task-button" onClick={removeTask}>X</button>
		</div>
	);
};
