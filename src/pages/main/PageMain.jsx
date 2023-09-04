import React from 'react'
import Software from './software/Software'
import Hero from './hero/Hero'
import Dealer from './dealer/Dealer'
import News from './news/News'

export default function PageMain() {
	return (
		<>
			<Hero />
			<Software />
			<Dealer />
			<News />
		</>
	)
}
