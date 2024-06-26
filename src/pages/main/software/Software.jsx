import React, { useCallback, useEffect, useRef, useState } from 'react'
import sl from './Software.module.scss'
import IconNumberOne from '@assets/img/Number-One.svg'
import IconNumberTwo from '@assets/img/Number-Two.svg'
import IconNumberThree from '@assets/img/Number-Three.svg'
import imgAnim3d from '@assets/img/main-screen-animation-2.gif'
import imgAnimDetail from '@assets/img/main-screen-animation-3.gif'
import imgAnimInfo from '@assets/img/main-screen-animation-1.gif'
import LinkWithLogo from '@components/LinkWithLogo/LinkWithLogo'



export default function Software() {

	let softwareRef = useRef()

	useEffect(() => {
		const element = softwareRef?.current;

		if (!element) return;

		const observer = new ResizeObserver((e) => {

			window.requestAnimationFrame(() => {
				let cols = [...document.querySelectorAll('.' + sl.col)]

				let arrHeightLinks = []
				let arrHeightDesc = []

				cols.forEach(col => {
					let linksItem = col.querySelector('.' + sl.links)
					linksItem.style.minHeight = ''

					let descList = col.querySelector('.' + sl.descList)
					descList.style.minHeight = ''
				})

				if (window.innerWidth < 1199) {
					cols = cols.slice(0, cols.length - 1)
				}
				if (window.innerWidth < 992) return


				cols.forEach(col => {
					let linksItem = col.querySelector('.' + sl.links)
					let heighLinksItemt = linksItem.clientHeight
					linksItem.style.minHeight = ''
					arrHeightLinks.push(heighLinksItemt)

					let descList = col.querySelector('.' + sl.descList)
					let height = descList.clientHeight
					descList.style.minHeight = ''
					arrHeightDesc.push(height)
				})
				cols.forEach(col => {
					let linksItem = col.querySelector('.' + sl.links)
					linksItem.style.minHeight = Math.max(...arrHeightLinks) + 'px'

					let descList = col.querySelector('.' + sl.descList)
					descList.style.minHeight = Math.max(...arrHeightDesc) + 'px'
				})

			});

		});

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, [])


	return (
		<section>
			<div className="container">

				<div className={sl.softwareTop}>
					<div className={sl.titleWrap}>
						<h2 className={sl.title}>Программное обеспечение для&nbsp;ваших задач</h2>
					</div>
				</div>

				<div className={sl.softwareBottom} ref={softwareRef}>

					<div className={`${sl.col}`}>
						<div className={sl.colHeader}>
							<div className={sl.colNum}>
								<IconNumberOne className={sl.colNumIcon} />
							</div>
							<div className={sl.colHeaderInner}>
								<h3 className={sl.colTitle}>Эскизное 3d&#8209;моделирование</h3>
							</div>
						</div>
						<div className={sl.imgWrap}>
							<img className={sl.img} src={imgAnim3d} alt="" />
						</div>
						<div className={sl.links}>
							<LinkWithLogo variant='sketchup' />
						</div>
						<ul className={sl.descList}>
							<li className={sl.descItem}>Быстрое, простое и качественное создание 3D-моделей любых объектов по чертежу, изображению, фотографии и&nbsp;т.д.</li>
							<li className={sl.descItem}>Оформление проектной документации по требованиям ЕСКД и СПДС, создание отчётов и спецификаций</li>
							<li className={sl.descItem}>Крупнейшая библиотека бесплатных 3D-моделей</li>
							<li className={sl.descItem}>Просмотр модели в виртуальной реальности </li>
							<li className={sl.descItem}>Обмер помещений непосредственно в SketchUp</li>
						</ul>
					</div>

					<div className={`${sl.col}`}>
						<div className={sl.colHeader}>
							<div className={sl.colNum}>
								<IconNumberTwo className={sl.colNumIcon} />
							</div>
							<div className={sl.colHeaderInner}>
								<h3 className={sl.colTitle}>Моделирование и&nbsp;деталировка </h3>
							</div>
						</div>
						<div className={sl.imgWrap}>
							<img className={sl.img} src={imgAnimDetail} alt="" />
						</div>
						<div className={sl.links}>
							<LinkWithLogo variant='tekla structures' />
							<LinkWithLogo variant='tekla model' />
						</div>
						<ul className={sl.descList}>
							<li className={sl.descItem}>Создание информационной модели с высоким уровнем детализации (LOD 500)</li>
							<li className={sl.descItem}>Совместная работа над проектом с неограниченным количеством участников </li>
							<li className={sl.descItem}>Создание отчетов и экспорт ЧПУ файлов</li>
							<li className={sl.descItem}>Экономическая оценка конструкций на этапе планирования </li>
							<li className={sl.descItem}>Проверка на коллизии в один клик</li>
						</ul>
					</div>

					<div className={`${sl.col}`}>
						<div className={sl.colHeader}>
							<div className={sl.colNum}>
								<IconNumberThree className={sl.colNumIcon} />
							</div>
							<div className={sl.colHeaderInner}>
								<h3 className={sl.colTitle}>Доступ к проектной информации </h3>
							</div>
						</div>
						<div className={sl.imgWrap}>
							<img className={sl.img} src={imgAnimInfo} alt="" />
						</div>
						<div className={sl.links}>
							<LinkWithLogo variant='trimble' />
						</div>
						<ul className={sl.descList}>
							<li className={sl.descItem}>Совместная работа над проектом из любой точки мира</li>
							<li className={sl.descItem}>Неограниченное облачное хранилище документов и&nbsp;моделей</li>
							<li className={sl.descItem}>Контроль изменений в проекте </li>
							<li className={sl.descItem}>Назначение статуса и определение сроков выполнения задач</li>
							<li className={sl.descItem}>Просмотр сведения о проекте в мобильном приложении Trimble Connect или VR-гарнитуре</li>
						</ul>
					</div>

				</div>

			</div>
		</section>
	)
}
