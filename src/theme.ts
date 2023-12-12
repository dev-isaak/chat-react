import { ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#266394',
			light: '#73a5c7',
			dark: '#143c5c',
		},
		secondary: {
			main: '#D96864',
			light: '#e08683',
			dark: '#974846',
		},
		background: {
			default: '#ffffff',
			paper: '#f5f5f5',
		},
		error: {
			main: '#d32f2f',
			light: '#db5858',
			dark: '#932020',
		},
		warning: {
			main: '#ed6c02',
			light: '#f08934',
			dark: '#a54b01',
		},
		success: {
			main: '#2e7d32',
			light: '#57975b',
			dark: '#205723',
		},
		divider: 'rgba(76,76,76,0.12)',
	},
	typography: {
		fontFamily: 'Montserrat, sans-serif',
		fontWeightLight: 300,
		fontWeightMedium: 400,
		fontWeightBold: 700,
	},
	components: {
		//
	},
	shape: {
		borderRadius: 4,
	},
});
