import React, { useId, useState } from 'react'
import sl from './News.module.scss'
import IconArrowCircle from '../../../components/subscribe/iconArrowCircle/IconArrowCircle'

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
					<IconArrowCircle className={sl.cardLinkIcon} isHover={isHover}/>
				</a>
			</div>
		</div>
	)
}
