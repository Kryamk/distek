import React, { useRef } from 'react'
import sl from './HeaderNav.module.scss'
import IconArrorCornerDown from '@assets/img/arr-corner-down.svg'
import { useOutsideClickMenu } from '../../../hooks/useOutsideClickMenu'

function HeaderNav({ openedMenu, onCloseMenu, burgerRef }) {
	const navRef = useRef(null)
	useOutsideClickMenu(navRef, burgerRef, onCloseMenu, openedMenu)
	// const pathname = useLocation()

	// useEffect(() => {
	// 	onCloseMenu()
	// }, [pathname])
	return (
		<nav className={`${sl.nav} ${openedMenu ? sl.open : ''}`} ref={navRef}>
			<ul className={sl.navList}>
				<li className={sl.navItem}>
					<a className={sl.navLink} href="#">
						<span className={sl.navText}>программное обеспечение</span>
						<IconArrorCornerDown className={sl.navIcon} />
					</a>
				</li>
				<li className={sl.navItem}>
					<a className={sl.navLink} href="#">
						<span className={sl.navText}>Новости</span>
						<IconArrorCornerDown className={sl.navIcon} />
					</a>
				</li>
				<li className={sl.navItem}>
					<a className={sl.navLink} href="#">
						<span className={sl.navText}>О нас</span>
						<IconArrorCornerDown className={sl.navIcon} />
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderNav
