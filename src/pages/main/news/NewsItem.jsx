import React, { useId, useState } from 'react'
import sl from './News.module.scss'

export default function NewsItem({ img, data, desc }) {
	const [isHover, setisHover] = useState(false)
	let iconId = useId()

	const mouseEnterHandler = () => {
		setisHover(true)
	}
	const mouseLeaveHandler = () => {
		setisHover(false)
	}
	return (
		<div className={`${sl.card}`} style={{ backgroundImage: `url(${img})` }}>
			<div className={sl.cardHeader}>
				<div className={sl.cardData}>{data}</div>
			</div>
			<div className={sl.cardBody}>
				<div className={sl.cardDesc}>{desc}</div>
				<a className={sl.cardLink} href='#' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
					<div className={sl.cardLinkText} >подробнее на <span>distek.tekla.ru</span></div>
					<svg className={sl.cardLinkIcon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill={`url(#${iconId})`}>
						<g clipPath="url(#clip0_311_892)">
							<path d="M32 16C32 20.2435 30.3143 24.3131 27.3137 27.3137C24.3131 30.3143 20.2435 32 16 32C11.7565 32 7.68687 30.3143 4.68629 27.3137C1.68571 24.3131 0 20.2435 0 16C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16ZM17 9C17 8.73478 16.8946 8.48043 16.7071 8.29289C16.5196 8.10536 16.2652 8 16 8C15.7348 8 15.4804 8.10536 15.2929 8.29289C15.1054 8.48043 15 8.73478 15 9V20.586L10.708 16.292C10.5202 16.1042 10.2656 15.9987 10 15.9987C9.73445 15.9987 9.47977 16.1042 9.292 16.292C9.10423 16.4798 8.99874 16.7344 8.99874 17C8.99874 17.2656 9.10423 17.5202 9.292 17.708L15.292 23.708C15.3849 23.8011 15.4952 23.875 15.6167 23.9254C15.7382 23.9758 15.8685 24.0018 16 24.0018C16.1315 24.0018 16.2618 23.9758 16.3833 23.9254C16.5048 23.875 16.6151 23.8011 16.708 23.708L22.708 17.708C22.8958 17.5202 23.0013 17.2656 23.0013 17C23.0013 16.7344 22.8958 16.4798 22.708 16.292C22.5202 16.1042 22.2656 15.9987 22 15.9987C21.7344 15.9987 21.4798 16.1042 21.292 16.292L17 20.586V9Z" />
						</g>
						<defs>
							<linearGradient id={iconId} x1="-11.7143" y1="41.7143" x2="38.8571" y2="4.19665e-07" gradientUnits="userSpaceOnUse">
								<stop stopColor={`${isHover ? '#30B3ED' : '#6A6B74'}`} />
								<stop offset="0.277625" stopColor={`${isHover ? '#299EE2' : '#6A6B74'}`} />
								<stop offset="0.556873" stopColor={`${isHover ? '#258BD7' : '#6A6B74'}`} />
								<stop offset="0.78005" stopColor={`${isHover ? '#44A1E0' : '#6A6B74'}`} />
								<stop offset="1" stopColor={`${isHover ? '#51A8E3' : '#6A6B74'}`} />
							</linearGradient>
							<clipPath id="clip0_311_892">
								<rect width="32" height="32" fill="white" transform="matrix(0 1 -1 0 32 0)" />
							</clipPath>
						</defs>
					</svg>
				</a>
			</div>
		</div>
	)
}
