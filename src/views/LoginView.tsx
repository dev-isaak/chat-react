import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './assets/LoginViewStyles.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function LoginView() {
	const [showPassword, setShowPassword] = useState(false);
	const [identification, setIdentification] = useState('');
	const [password, setPassword] = useState('');
	const [isErrorInIdentificationField, setIsErrorInIdentificationField] =
		useState(false);
	const [isErrorInPasswordField, setIsErrorInPasswordField] = useState(false);

	const handleIdentification = (e: ChangeEvent<HTMLInputElement>) => {
		setIdentification(e.target.value);
	};

	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleLogin = () => {
		alert(`email ${identification}, password: ${password}`);
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleLogin} className="login-form">
				<TextField
					error={isErrorInIdentificationField ? true : false}
					helperText={isErrorInIdentificationField ? 'Error in field' : ''}
					required
					label="Email"
					value={identification}
					onChange={handleIdentification}
					margin="normal"
				/>
				<OutlinedInput
					error={isErrorInPasswordField ? true : false}
					required
					label="Password"
					value={password}
					onChange={handlePassword}
					type={showPassword ? 'text' : 'password'}
					endAdornment={
						<InputAdornment position="end">
							<IconButton onClick={handleClickShowPassword}>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
				<Button variant="contained" type="submit">
					Login
				</Button>
			</form>
		</div>
	);
}
