import React from 'react'
import sl from './Subscribe.module.scss'
import IconArrowInCircle from '@assets/img/arr-in-circle.svg'

export default function Subscribe() {
	let errorInput = false
	return (
		<div className={sl.subscribe}>
			<div className={sl.subscribeTitle}>подпишитесь на наши новости</div>
			<form className={`${sl.subscribeForm} ${errorInput ? sl.isInvalid : ''}`}>
				<input className={`${sl.subscribeInput} ${errorInput ? sl.isInvalid : ''}`} type="text" placeholder='your@email.ru' />
				<button className={sl.subscribeSubmit}>
					<span className={sl.subscribeText}>Подписаться</span>
					<IconArrowInCircle className={sl.subscribeSubmitArrow} />
				</button>
			</form>
			<div className={sl.subscribePolitic} >Отправляя заполненную форму, вы принимаете условия <a href="#">Политики обработки персональных данных</a> и подписываете <a href="#">Заявление-согласие субъекта</a> на&nbsp;передачу его персональных данных третьей стороне.</div>
		</div>
	)
}
