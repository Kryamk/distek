import React from 'react'
import sl from './Header.module.scss'
// import Remove from '../../assets/img/icon-remove.svg'
import ArrorCorner from '../../assets/img/arr-corner.svg'
import logo from '../../assets/img/logo.png'

export default function Header() {
	return (
		<header>
			<div className="container">
				<div className={sl.headerWrap}>
					<div className={sl.headerLeft}>
						<a className={sl.logoLink} href="/">
							<img className={sl.logo} src={logo} alt="logo" />
						</a>
						<nav className={sl.nav}>
							<ul className={sl.navList}>
								<li className={sl.navItem}>
									<a className={sl.navLink} href="#">
										<span className={sl.navText}>программное обеспечение</span>
										<ArrorCorner className={sl.navIcon} />
									</a>
								</li>
								<li className={sl.navItem}>
									<a className={sl.navLink} href="#">
										<span className={sl.navText}>Новости</span>
										<ArrorCorner className={sl.navIcon} />
									</a>
								</li>
								<li className={sl.navItem}>
									<a className={sl.navLink} href="#">
										<span className={sl.navText}>Новости</span>
										<ArrorCorner className={sl.navIcon} />
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<a className={sl.btn} href="tel:+74956609370">+7 495 660 93 70</a>
				</div>
			</div>
		</header>
	)
}
