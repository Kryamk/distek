import React from 'react'
import sl from './HeaderBurger.module.scss'

function HeaderBurger({ openedMenu, handleOpenedMenu, burgerRef }) {

	return (
		<button ref={burgerRef} className={`${sl['header-toggle-menu']} ${openedMenu ? sl['burger--opened'] : sl['burger--closed']}`} onClick={handleOpenedMenu}>
			<span className={sl['burger']}>
				<span className={sl['burger__line']} />
				<span className={sl['burger__line'] + ' ' + sl['burger__line--cross']} />
				<span className={sl['burger__line'] + ' ' + sl['burger__line--cross']} />
				<span className={sl['burger__line']} />
			</span>
		</button>
	)
}

export default HeaderBurger
