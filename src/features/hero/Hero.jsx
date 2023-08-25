import React from 'react'
import sl from './Hero.module.scss'
import ArrorCorner from '../../assets/img/arr-corner.svg'
import LogoSketchup from '../../assets/img/logo-sketchup.svg'
import Envelope from '../../assets/img/envelope.svg'
import { Accordion } from '../Accordion/Accordion'

const advList = [
	{
		q: "Маркетинг",
		a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus cumque officiis, tempora ipsa a.",
	},
	{
		q: "Поддержка при работе с заказчиками",
		a: "Lorem ipsum dolor sit amet sewad elit. Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
	},
	{
		q: "Более 30 партнеров",
		a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
	},
	{
		q: "Информационная поддержка",
		a: "Lorem ipsum dolor sit amet sewad elit. Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
	},
	{
		q: "Логистика",
		a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
	},
	{
		q: "Обучение",
		a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
	},
];

export default function Hero() {
	return (
		<section>
			<div className="container">

				<div className={sl.heroTop}>
					<div className={sl.titleWrap}>
						<h1 className={sl.title}>Distek – дистрибьютор программного обеспечения</h1>
						<div className={sl.subTitle}>решения для BIM-моделирования</div>
					</div>
					<ul className={sl.list}>
						<li className={sl.item}>
							<a className={sl.link} href="#">
								<div className={sl.logoWrap}>
									<LogoSketchup className={sl.logo} />
								</div>
								<span className={sl.text}>Sketchup</span>
								<ArrorCorner className={sl.arrow} />
							</a>
						</li>
						<li className={sl.item}>
							<a className={sl.link} href="#">
								<div className={sl.logoWrap}>
									<LogoSketchup className={sl.logo} />
								</div>
								<span className={sl.text}>Tekla structures</span>
								<ArrorCorner className={sl.arrow} />
							</a>
						</li>
						<li className={sl.item}>
							<a className={sl.link} href="#">
								<div className={sl.logoWrap}>
									<LogoSketchup className={sl.logo} />
								</div>
								<span className={sl.text}>Tekla model sharing</span>
								<ArrorCorner className={sl.arrow} />
							</a>
						</li>
						<li className={sl.item}>
							<a className={sl.link} href="#">
								<div className={sl.logoWrap}>
									<LogoSketchup className={sl.logo} />
								</div>
								<span className={sl.text}>Trimble connect</span>
								<ArrorCorner className={sl.arrow} />
							</a>
						</li>
					</ul>
				</div>

				<div className={sl.heroBottom}>
					<div className={sl.col}>
						<div className={sl.colHeader}>
							<div className={sl.num}></div>
							<h3 className={sl.colTitle}>партнерам и вендорам</h3>
							<div className={sl.mail}>
								<Envelope className={sl.mailIcon}/>
								<a className={sl.mailLink} href="mailto:info@distek.ru">info@distek.ru</a>
							</div>
						</div>
						<div className={sl.advantages}>
							<Accordion advList={advList} />
						</div>

					</div>






					<div className={sl.users}></div>
				</div>

			</div>
		</section>

	)
}
