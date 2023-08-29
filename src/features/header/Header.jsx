import React, { useEffect, useRef, useState } from 'react'
import sl from './Header.module.scss'
// import Remove from '../../assets/img/icon-remove.svg'

import imgLogo from '../../assets/img/logo.png'
import HeaderBurger from './HeaderBurger/HeaderBurger'
import HeaderNav from './HeaderNav/HeaderNav'

export default function Header() {
	const [openedMenu, setOpenedMenu] = useState(false)
	const burgerRef = useRef(null)
	const headerRef = useRef(null)

	const handleOpenedMenu = () => {
		setOpenedMenu(!openedMenu)
		document.body.classList.toggle('lock')
	}

	const onCloseMenu = () => {
		if (openedMenu) {
			setOpenedMenu(false);
		}
		document.body.classList.remove('lock')
	}

	useEffect(() => {
		document.documentElement.style.setProperty('--header-height', headerRef.current.offsetHeight + 20 + 'px')
	})

	return (
		<header ref={headerRef}>
			<div className="container">
				<div className={sl.headerWrap}>
					<div className={sl.headerLeft}>
						<a className={sl.logoLink} href="/">
							<img className={sl.logo} src={imgLogo} alt="logo" />
						</a>
						<HeaderNav openedMenu={openedMenu} onCloseMenu={onCloseMenu} burgerRef={burgerRef} />
						<HeaderBurger burgerRef={burgerRef} openedMenu={openedMenu} handleOpenedMenu={handleOpenedMenu} />
					</div>
					<a className={sl.btn} href="tel:+74956609370">+7 495 660 93 70</a>
				</div>
			</div>
		</header>
	)
}
