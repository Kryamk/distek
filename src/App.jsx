import React from 'react';
import Header from './features/header/Header';
import Hero from './features/hero/Hero';
import Software from './features/software/Software';
import Dealer from './features/dealer/Dealer';

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
