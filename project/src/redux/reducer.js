import {
	DELETE_TASK,
	EDIT_TASK,
} from "./actionType";

const initState = {
	task: [],
};

export const reducer = (state = initState, { type, payload }) => {
	console.log(payload);
	if (type === DELETE_TASK) {
		return {
			...state,
			task: state.task.filter((elem) => {
				return elem.id !== payload;
			}),
		};
	}
	if (type === EDIT_TASK) {
		const index = state.task.findIndex((elem) => elem.id === payload.id);
		state.task[index].title = payload.editValue;
		return {
			...state,
			task: [...state.task],
		};
	}
	return state;
};
