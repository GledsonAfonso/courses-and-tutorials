import "@components/ChecklistItem.css";
import { useState } from "react";

type ChecklistItemProps = {
	checkboxId: string;
	checklistItemText: string;
};

export const ChecklistItem = (props: ChecklistItemProps) => {
	const {
		checkboxId,
		checklistItemText,
	} = props;
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

	return (
		<div className="check-list-item-box">
			<input
				className="check-list-item-input"
				type="checkbox"
				id={checkboxId}
				name={checklistItemName}
				value={checklistItemText}
				onChange={updateCheckbox}
			/>
			<label
				className="check-list-item-label"
				htmlFor={checklistItemName}
				style={labelStyle}
			>
				{checklistItemText}
			</label>
		</div>
	);
};
