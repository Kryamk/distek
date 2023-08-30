import React from 'react'
import sl from './LinkWithLogo.module.scss'
import ArrorCorner from '@assets/img/arr-corner.svg'
import LogoSketchup from '@assets/img/logo-sketchup.svg'
import LogoTekla from '@assets/img/logo-tekla.svg'
import LogoTrimble from '@assets/img/logo-trimble.svg'

export default function LinkWithLogo({ variant, className = '' }) {
	let url = '';
	let text = '';
	let svg = '';
	switch (variant) {
		case 'sketchup':
			url = '#';
			text = 'Sketchup';
			svg = (<LogoSketchup className={sl.logo} />)
			break;
		case 'tekla structures':
			url = '#';
			text = 'Tekla structures';
			svg = (<LogoTekla className={sl.logo} />)
			break;
		case 'tekla model':
			url = '#';
			text = 'Tekla model sharing';
			svg = (<LogoTekla className={sl.logo} />)
			break;
		case 'trimble':
			url = '#';
			text = 'Trimble connect';
			svg = (<LogoTrimble className={sl.logo} />)
			break;
	}
	return (
		<a className={`${sl.link} ${className ? className : ''}`} href={url}>
			<div className={sl.logoWrap}>
				{svg}
			</div>
			<span className={sl.text}>{text}</span>
			<ArrorCorner className={sl.arrow} />
		</a>
	)
}
