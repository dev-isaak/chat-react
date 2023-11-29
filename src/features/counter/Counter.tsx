import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { decrement, increment, reset } from './counterSlice';

export default function Counter() {
	const counterValue = useAppSelector((state) => state.counter);
	const dispatch = useAppDispatch();

	const handleAdd = () => {
		dispatch(increment());
	};

	const handleLess = () => {
		dispatch(decrement());
	};

	const handleReset = () => {
		dispatch(reset());
	};

	return (
		<div>
			<h1>Contador</h1>
			<h3>{counterValue.value}</h3>
			<Button variant="contained" onClick={handleAdd}>
				Add
			</Button>
			<Button variant="contained" onClick={handleLess}>
				Rest
			</Button>
			<Button variant="contained" onClick={handleReset}>
				Reset
			</Button>
		</div>
	);
}
