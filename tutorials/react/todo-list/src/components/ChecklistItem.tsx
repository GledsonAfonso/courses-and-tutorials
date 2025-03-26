import "@components/ChecklistItem.css";
import { useState } from "react";

export type ChecklistItemProps = {
	checkboxId: string;
};

export const ChecklistItem = (props: ChecklistItemProps) => {
	const {
		checkboxId,
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
			/>
		</div>
	);
};
