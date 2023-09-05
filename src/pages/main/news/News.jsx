import React from 'react'
import sl from './News.module.scss'
import IconArrowInCircle from '@assets/img/arr-in-circle.svg'
import imgNews1 from '@assets/img/news1.jpg'
import imgNews2 from '@assets/img/news2.jpg'
import imgNews3 from '@assets/img/news3.jpg'
import imgNews4 from '@assets/img/news4.jpg'
import Subscribe from '../../../components/subscribe/Subscribe'
import NewsItem from './NewsItem'

const cards = [
	{ id: 1, img: imgNews1, data: '09.02.2022', desc: 'Вебинар «Опыт AFRY: от предпроекта до&nbsp;выпуска рабочей документации. Как достичь высокой производительности работ?»' },
	{ id: 2, img: imgNews1, data: '03.02.2022', desc: 'Квиз-тест по SketchUp! Получи сертификат c&nbsp;указанием уровня владения программой' },
	{ id: 3, img: imgNews1, data: '21.01.2022', desc: 'Вебинар «Опыт AFRY: от предпроекта до&nbsp;выпуска рабочей документации. Как достичь высокой производительности работ?» ' },
	{ id: 4, img: imgNews1, data: '21.01.2022', desc: 'Квиз-тест по SketchUp! Получи сертификат c&nbsp;указанием уровня владения программой' },
]

export default function News() {
	return (
		<section>
			<div className="container">

				<div className={sl.newsTop}>

					<div className={sl.titleWrap}>
						<h2 className={sl.title}>Новости</h2>
						<div className={sl.subTitle}>самое актуальное на сегодняшний день в&nbsp;мире bim-проектирования</div>
					</div>

					<div className={sl.subscribeWrap}>
						<Subscribe />
					</div>

				</div>

				<div className={sl.newsCards}>
					{cards.map(card => (
						<NewsItem key={card.id} img={card.img} data={card.data} desc={card.desc} />
					))}
					{/* <div className={`${sl.card}`} style={{ backgroundImage: `url(${imgNews1})` }}>
						<div className={sl.cardHeader}>
							<div className={sl.cardData}>09.02.2022</div>
						</div>
						<div className={sl.cardBody}>
							<div className={sl.cardDesc}>Вебинар «Опыт AFRY: от предпроекта до&nbsp;выпуска рабочей документации. Как достичь высокой производительности работ?»</div>
							<a className={sl.cardLink} href='#'>
								<div className={sl.cardLinkText} >подробнее на <span>distek.tekla.ru</span></div>
								<IconArrowInCircle className={sl.cardLinkIcon} />

							</a>
						</div>
					</div>

					<div className={`${sl.card}`} style={{ backgroundImage: `url(${imgNews2})` }}>
						<div className={sl.cardHeader}>
							<div className={sl.cardData}>03.02.2022</div>
						</div>
						<div className={sl.cardBody}>
							<div className={sl.cardDesc}>Квиз-тест по SketchUp! Получи сертификат c&nbsp;указанием уровня владения программой</div>
							<a className={sl.cardLink} href='#'>
								<div className={sl.cardLinkText} >подробнее на <span>distek.tekla.ru</span></div>
								<IconArrowInCircle className={sl.cardLinkIcon} />
							</a>
						</div>
					</div>

					<div className={`${sl.card}`} style={{ backgroundImage: `url(${imgNews3})` }}>
						<div className={sl.cardHeader}>
							<div className={sl.cardData}>21.01.2022</div>
						</div>
						<div className={sl.cardBody}>
							<div className={sl.cardDesc}>Вебинар «Опыт AFRY: от предпроекта до&nbsp;выпуска рабочей документации. Как достичь высокой производительности работ?» </div>
							<a className={sl.cardLink} href='#'>
								<div className={sl.cardLinkText} >подробнее на <span>distek.tekla.ru</span></div>
								<IconArrowInCircle className={sl.cardLinkIcon} />
							</a>
						</div>
					</div>

					<div className={`${sl.card}`} style={{ backgroundImage: `url(${imgNews4})` }}>
						<div className={sl.cardHeader}>
							<div className={sl.cardData}>21.01.2022</div>
						</div>
						<div className={sl.cardBody}>
							<div className={sl.cardDesc}>Квиз-тест по SketchUp! Получи сертификат c&nbsp;указанием уровня владения программой</div>
							<a className={sl.cardLink} href='#'>
								<div className={sl.cardLinkText} >подробнее на <span>distek.tekla.ru</span></div>
								<IconArrowInCircle className={sl.cardLinkIcon} />
							</a>
						</div>
					</div> */}
				</div>

			</div>
		</section>
	)
}
