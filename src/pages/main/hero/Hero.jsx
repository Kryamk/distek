import React, { useId, useState } from 'react'
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
	const [isHover, setisHover] = useState(false)
	let iconId = useId()

	const mouseEnterHandler = () => {
		setisHover(true)
	}
	const mouseLeaveHandler = () => {
		setisHover(false)
	}

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
							<a className={sl.colLink} href='#' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
								{/* <IconArrowInCircle className={sl.colLinkIcon} /> */}
								<svg className={sl.colLinkIcon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill={`url(#${iconId})`}>
									<g clipPath="url(#clip0_311_892)">
										<path d="M32 16C32 20.2435 30.3143 24.3131 27.3137 27.3137C24.3131 30.3143 20.2435 32 16 32C11.7565 32 7.68687 30.3143 4.68629 27.3137C1.68571 24.3131 0 20.2435 0 16C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16ZM17 9C17 8.73478 16.8946 8.48043 16.7071 8.29289C16.5196 8.10536 16.2652 8 16 8C15.7348 8 15.4804 8.10536 15.2929 8.29289C15.1054 8.48043 15 8.73478 15 9V20.586L10.708 16.292C10.5202 16.1042 10.2656 15.9987 10 15.9987C9.73445 15.9987 9.47977 16.1042 9.292 16.292C9.10423 16.4798 8.99874 16.7344 8.99874 17C8.99874 17.2656 9.10423 17.5202 9.292 17.708L15.292 23.708C15.3849 23.8011 15.4952 23.875 15.6167 23.9254C15.7382 23.9758 15.8685 24.0018 16 24.0018C16.1315 24.0018 16.2618 23.9758 16.3833 23.9254C16.5048 23.875 16.6151 23.8011 16.708 23.708L22.708 17.708C22.8958 17.5202 23.0013 17.2656 23.0013 17C23.0013 16.7344 22.8958 16.4798 22.708 16.292C22.5202 16.1042 22.2656 15.9987 22 15.9987C21.7344 15.9987 21.4798 16.1042 21.292 16.292L17 20.586V9Z" />
									</g>
									<defs>
										<linearGradient id={iconId} x1="-11.7143" y1="41.7143" x2="38.8571" y2="4.19665e-07" gradientUnits="userSpaceOnUse">
											<stop stopColor={`${!isHover ? '#30B3ED' : '#6A6B74'}`} />
											<stop offset="0.277625" stopColor={`${!isHover ? '#299EE2' : '#6A6B74'}`} />
											<stop offset="0.556873" stopColor={`${!isHover ? '#258BD7' : '#6A6B74'}`} />
											<stop offset="0.78005" stopColor={`${!isHover ? '#44A1E0' : '#6A6B74'}`} />
											<stop offset="1" stopColor={`${!isHover ? '#51A8E3' : '#6A6B74'}`} />
										</linearGradient>
										<clipPath id="clip0_311_892">
											<rect width="32" height="32" fill="white" transform="matrix(0 1 -1 0 32 0)" />
										</clipPath>
									</defs>
								</svg>
								<div className={sl.colLinkText}>подробнее о решениях для ваших&nbsp;задач</div>
							</a>
						</div>
					</div>
				</div>



			</div>
		</section>

	)
}
