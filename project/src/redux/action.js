import { DELETE_TASK, EDIT_TASK} from "./actionType";




export const deleteAction = (payload) => {
	return {
		type: DELETE_TASK,
		payload,
	};
};

export const editAction = (payload) => {
	return {
		type: EDIT_TASK,
		payload,
	};
};



