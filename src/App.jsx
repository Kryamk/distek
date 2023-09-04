import React from 'react';
import Header from '@components/header/Header';
import Footer from './components/footer/Footer';
import PageMain from './pages/main/PageMain';

function App() {
	return (
		<div className="App">
			<Header />
			<PageMain />
			<Footer />
		</div>
	);
}

export default App;
