import React from 'react';
import Header from '@components/header/Header';
import Hero from './pages/main/hero/Hero';
import Software from './pages/main/software/Software';
import Dealer from './pages/main/dealer/Dealer';
import News from './pages/main/news/News';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Software />
			<Dealer />
			<News />
			<Footer />
		</div>
	);
}

export default App;
