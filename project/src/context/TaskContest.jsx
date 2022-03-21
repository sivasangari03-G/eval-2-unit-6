import axios from "axios";
import React, { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
    const [one, setOne] = useState("");
    // const navigate = useNavigate()
    const {taskId} = useParams(); 
		const handleGoTo = () => {
			axios
				.get(`http://localhost:8000/tasks/${taskId}`)
				.then(function (response) {
					// console.log(response.data.tasks);
					setOne(response.data.tasks);
				})
				.catch(function (error) {
					console.log(error);
                });
            
            // navigate(`/tasks/${taskId}`);
		};

	return (
		<TaskContext.Provider value={{ one, handleGoTo }}>
			{children}
		</TaskContext.Provider>
	);
};
