import React from 'react'
import sl from './News.module.scss'
import IconArrowInCircle from '@assets/img/arr-in-circle.svg'
import imgNews1 from '@assets/img/news1.jpg'
import imgNews2 from '@assets/img/news2.jpg'
import imgNews3 from '@assets/img/news3.jpg'
import imgNews4 from '@assets/img/news4.jpg'
import Subscribe from '../../../components/subscribe/Subscribe'

export default function News() {
	let errorInput = false
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

					{/* <div className={sl.subscribe}>
						<div className={sl.subscribeTitle}>подпишитесь на наши новости</div>
						<form className={`${sl.subscribeForm} ${errorInput ? sl.isInvalid : ''}`}>
							<input className={`${sl.subscribeInput} ${errorInput ? sl.isInvalid : ''}`} type="text" placeholder='your@email.ru' />
							<button className={sl.subscribeSubmit}>
								<span className={sl.subscribeText}>Подписаться</span>
								<IconArrowInCircle className={sl.subscribeSubmitArrow} />
							</button>
						</form>
						<div className={sl.subscribePolitic} >Отправляя заполненную форму, вы принимаете условия <a href="#">Политики обработки персональных данных</a> и подписываете <a href="#">Заявление-согласие субъекта</a> на&nbsp;передачу его персональных данных третьей стороне.</div>
					</div> */}

				</div>

				<div className={sl.newsCards}>
					<div className={`${sl.card}`} style={{ backgroundImage: `url(${imgNews1})` }}>
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
					</div>
				</div>

			</div>
		</section>
	)
}
