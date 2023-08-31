import React from 'react'
import sl from './Dealer.module.scss'

let cities = ['Москва', 'Ярославль', 'Волгоград', 'Казань', 'Люберцы', 'Екатеринбург', 'Санкт-Петербург', 'Липецк', 'Ростов-на-Дону', 'Тверь', 'Краснодар', 'Великий Новгород', 'Калининград', 'Вельск',]

export default function Dealer() {
	return (
		<section>
			<div className="container">
				<div className={sl.dealer}>

					<div className={sl.dealerInner}>
						<h2 className={sl.title}>Дилерская сеть – более 30 партнёров</h2>
						<ul className={sl.cities}>
							{cities.map(city => (
								<li className={sl.city} key={city}>{city}</li>
							))}
						</ul>
						<ul className={sl.contactsList}>
							<li className={sl.contactsItem}>
								<div className={sl.contactsText}>
									хотите стать партнером?
									<span className={sl.contactsSubtext}>оставьте заявку для консультации</span>
								</div>
								<button className={sl.btn}><span className={sl.btnText}>закажите звонок</span></button>
							</li>
							<li className={sl.contactsItem}>
								<div className={sl.contactsText}>ООО Дистек</div>
								<div className={sl.contactsText}>Москва</div>
							</li>
							<li className={sl.contactsItem}>
								<a className={sl.contactsText} href='tel:+74956609370'>+7 495 660 93 70</a>
								<a className={sl.contactsText} href='mailto:info@distek.ru'>info@distek.ru</a>
							</li>
						</ul>
					</div>


				</div>
			</div>
		</section>
	)
}
