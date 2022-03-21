import React, { useContext } from "react";

import { TaskContext } from "../context/TaskContest";

export const Task = ({ elem }) => {
    // const dispatch = useDispatch();
    // const { taskId } = useParams();
    
    // const navigate = useNavigate();
    // const [one,setOne] = useState();
	const {handleGoTo} = useContext(TaskContext);
	const handleDelete = (e) => {
		// let id = e.currentTarget.parentNode.id;
		// console.log(id);
		// const action = deleteAction(id);
		// dispatch(action);
		console.log(e.currentTarget.parentNode.remove());
		// console.log(e.currentTarget.parentNode);
	};

	return (
		<div key={elem.id}>
			<div>id: {elem.id}</div>
			<div>title: {elem.title}</div>
			<div>status: {elem.status}</div>
			<div>subTask: {elem.subTask}</div>
			<button onClick={handleGoTo}>Go To title {elem.title}</button>
			<button onClick={handleDelete}>Delete {elem.title}</button>
            <button>Edit {elem.title}</button>
		</div>
	);
};
