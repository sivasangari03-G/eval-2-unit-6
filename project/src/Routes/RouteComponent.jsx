import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GoTo } from '../components/GoTo';
import { Home } from '../components/Home'

export const RouteComponent = () => {
  return (
		<div>
			<Routes>
				<Route path="/tasks" element={<Home />}></Route>
				<Route path="/tasks/:taskId" element={<GoTo />}></Route>
			</Routes>
		</div>
  );
}
