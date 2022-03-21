import React from "react";
import { useContext } from "react";

import { TaskContext } from "../context/TaskContest";



export const GoTo = () => {
	const { one } = useContext(TaskContext);

	return <div>
		<div>{one.title }</div>
	</div>;
};
