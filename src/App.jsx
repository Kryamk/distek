import React from 'react';
import Header from '@components/header/Header';
import Hero from './pages/main/hero/Hero';
import Software from './pages/main/software/Software';
import Dealer from './pages/main/dealer/Dealer';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Software />
			<Dealer />
		</div>
	);
}

export default App;
