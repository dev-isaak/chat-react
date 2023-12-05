import { Outlet } from 'react-router-dom';
import Navbar from '../features/navbar/Navbar';
import './rootStyles.css';

export default function Root() {
	return (
		<div>
			<Navbar />
			<div className="mainContainer">
				<Outlet />
			</div>
		</div>
	);
}
