import React from 'react';
import { Box } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux';
import Navbar from './components/Navbar';
import Navigator from './router/Navigator';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Box>
						<Navbar />
						<Navigator />
						<FooterComponent/>
					</Box>
				</ThemeProvider>
			</Provider>
		</Router>
	);
};

export default App;
