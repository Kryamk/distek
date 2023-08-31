import React from 'react'
import sl from './Hero.module.scss'
import { Accordion } from './Accordion/Accordion'
import IconEnvelope from '@assets/img/envelope.svg'
import IconNumberOne from '@assets/img/Number-One.svg'
import IconNumberTwo from '@assets/img/Number-Two.svg'
import IconArrowInCircle from '@assets/img/arr-in-circle.svg'
import imgAnim from '@assets/img/main-screen-animation-1-large.gif'
import LinkWithLogo from '@components/LinkWithLogo/LinkWithLogo'

const advList = [
	{
		q: "Маркетинг",
		a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus cumque officiis, tempora ipsa a.",
	},
	{
		q: "Поддержка при работе с\u00A0заказчиками",
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
			<div className="container" >

				<div className={sl.heroTop}>
					<div className={sl.titleWrap}>
						<h1 className={sl.title}>Distek – дистрибьютор программного обеспечения</h1>
						<div className={sl.subTitle}>решения для BIM-моделирования</div>
					</div>
					<ul className={sl.list}>
						<li className={sl.item}>
							<LinkWithLogo variant='sketchup' />
						</li>
						<li className={sl.item}>
							<LinkWithLogo variant='tekla structures' />
						</li>
						<li className={sl.item}>
							<LinkWithLogo variant='tekla model' />
						</li>
						<li className={sl.item}>
							<LinkWithLogo variant='trimble' />
						</li>
					</ul>
				</div>

				<div className={sl.heroBottom}>
					<div className={`${sl.col} ${sl.colPartners}`}>

						<div className={sl.colHeader}>
							<div className={sl.colNum}>
								<IconNumberOne className={sl.colNumIcon} />
							</div>
							<div className={sl.colHeaderInner}>
								<h3 className={sl.colTitle}>партнерам и вендорам</h3>
								<a className={sl.colMail} href="mailto:info@distek.ru" >
									<IconEnvelope className={sl.colMailIcon} />
									<div className={sl.colMailText} >info@distek.ru</div>
								</a>
							</div>
						</div>

						<div className={sl.imgWrap}>
							<img className={sl.img} src={imgAnim} alt="" />
						</div>

						<div className={sl.colBody}>
							<div className={sl.advantages}>
								<div className={sl.advantagesTitle}>Преимущества</div>
								<Accordion advList={advList} />
							</div>
						</div>


					</div>

					<div className={`${sl.col} ${sl.colUsers}`}>
						<div className={sl.colHeader}>
							<div className={sl.colNum}>
								<IconNumberTwo className={sl.colNumIcon} />
							</div>
							<div className={sl.colHeaderInner}>
								<h3 className={sl.colTitle}>Пользователям</h3>
								<div className={sl.colText}>Подберите программные продукты для&nbsp;моделирования конструкции и&#160;визуализации проектов</div>
							</div>
						</div>
						<div className={sl.colBody}>
							<a className={sl.colLink} href='#'>
								<IconArrowInCircle className={sl.colLinkIcon} />
								<div className={sl.colLinkText}>подробнее о решениях для ваших&nbsp;задач</div>
							</a>
						</div>
					</div>
				</div>



			</div>
		</section>

	)
}
