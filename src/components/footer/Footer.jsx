import React from 'react'
import sl from './Footer.module.scss'
import imgLogo from '@assets/img/logo.png'
import IconArrorCorner from '@assets/img/arr-corner.svg'
import Subscribe from '../subscribe/Subscribe'
import IconFb from '@assets/img/facebook.svg'
import IconVk from '@assets/img/vk.svg'
import IconYoutube from '@assets/img/youtube.svg'
import IconInst from '@assets/img/insta.svg'
import IconMade from '@assets/img/sagirov.svg'

export default function Footer() {

	return (
		<footer className={sl.footer}>
			<div className="container">
				<div className={sl.footerTop}>

					<div className={`${sl.colLogo}`}>
						<a className={sl.logoLink} href="/">
							<img className={sl.logo} src={imgLogo} alt="logo" />
						</a>
						<div className={sl.copyright}>ООО «ДИСТЕК». Все&nbsp;права защищены</div>
					</div>

					<div className={`${sl.colNav1}`}>
						<ul className={sl.navList}>
							<li className={sl.navItem}>
								<a className={sl.navLink} href="#">
									<span className={sl.navText}>программное обеспечение</span>
									<IconArrorCorner className={sl.navIcon} />
								</a>
							</li>
							<li className={sl.navItem}>
								<a className={sl.navLink} href="#">
									<span className={sl.navText}>Sketchup</span>
									<IconArrorCorner className={sl.navIcon} />
								</a>
							</li>
							<li className={sl.navItem}>
								<a className={sl.navLink} href="#">
									<span className={sl.navText}>tekla structures</span>
									<IconArrorCorner className={sl.navIcon} />
								</a>
							</li>
							<li className={sl.navItem}>
								<a className={sl.navLink} href="#">
									<span className={sl.navText}>Tekla model sharing</span>
									<IconArrorCorner className={sl.navIcon} />
								</a>
							</li>
							<li className={sl.navItem}>
								<a className={sl.navLink} href="#">
									<span className={sl.navText}>Trimble connect</span>
									<IconArrorCorner className={sl.navIcon} />
								</a>
							</li>
						</ul>
					</div>

					<div className={`${sl.colNav2}`}>
						<ul className={sl.navList}>
							<li className={sl.navItem}>
								<a className={sl.navLink} href="#">
									<span className={sl.navText}>О нас</span>
									<IconArrorCorner className={sl.navIcon} />
								</a>
							</li>
							<li className={sl.navItem}>
								<a className={sl.navLink} href="#">
									<span className={sl.navText}>Новости</span>
									<IconArrorCorner className={sl.navIcon} />
								</a>
							</li>
						</ul>
					</div>

					<div className={`${sl.colSubscribe}`}>
						<div className={sl.subscribeWrap}>
							<Subscribe />
						</div>
					</div>

				</div>


				<div className={sl.footerBottom}>
					<a className={sl.btn} href="tel:+74956609370">+7 495 660 93 70</a>
					<div className={sl.socList}>
						<a className={sl.socLink} href="#"><IconFb className={sl.socIcon} /></a>
						<a className={sl.socLink} href="#"><IconVk className={sl.socIcon} /></a>
						<a className={sl.socLink} href="#"><IconYoutube className={sl.socIcon} /></a>
						<a className={sl.socLink} href="#"><IconInst className={sl.socIcon} /></a>
					</div>
					<div className={sl.contactsCol}>
						<ul className={sl.contacts}>
							<li className={sl.contactsItem}>Москва</li>
							<li className={sl.contactsItem}>
								<a className={sl.contactsLink} href="tel:+74956609370">+7 495 660 93 70</a>
							</li>
							<li className={sl.contactsItem}>
								<a className={sl.contactsLink} href="mailto:info@distek.ru">info@distek.ru</a>
							</li>
						</ul>
						<a className={sl.made} href='https://sagirov.com/'>Сделано в <IconMade className={sl.madeIcon} /></a>
					</div>
				</div>
			</div>
		</footer>
	)
}
