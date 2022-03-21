import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Task } from './Task';
export const GetAllTask = () => {
    const [task, setTask] = useState([])
    useEffect(() => {
		axios
			.get("http://localhost:8000/tasks")
            .then(function (response) {
                // console.log(response.data.tasks);
				setTask(response.data.tasks);
			})
			.catch(function (error) {
				console.log(error);
			});
	},[]);
  return (
		<div>
			{task.map((elem) => {
				return <Task key={elem.id} elem={elem} />;
			})}

			<button>prev</button>
			<button>Next</button>
		</div>
  );
}
