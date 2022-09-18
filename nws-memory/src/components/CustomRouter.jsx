import {BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Accueil from "../Pages/Accueil";
import Specialité from "../Pages/Specialité";
import Graph from "../Pages/Graph";
import Developpement from "../Pages/Developpement";
import Socialmm from "../Pages/Socialmm";
import Marketing from "../Pages/marketing";

const CustomRouter = () => {
		return (
			<Router>
				<Routes>
					<Route path='/' element={<Accueil />}/>
					<Route path='/vitae' element={<Specialité />}/>
					<Route path='/vitae' element={<Graph />}/>
					<Route path='/vitae' element={<Developpement />}/>
					<Route path='/vitae' element={<Socialmm />}/>
					<Route path='/vitae' element={<Marketing />}/>
				</Routes>
			</Router>
		)
};

export default CustomRouter;