import React, { useState, useId } from 'react'
import sl from './Subscribe.module.scss'
import IconArrowCircle from './iconArrowCircle/IconArrowCircle'

export default function Subscribe() {
	const [email, setEmail] = useState('')
	const [emailAway, setEmailAway] = useState(false)
	const [isError, setIsError] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const [isHover, setisHover] = useState(false)

	const blurHandler = (e) => {
		setEmailAway(true)
	}
	const emailHandler = (e) => {
		let value = e.target.value
		setEmail(value)
		setEmailAway(false)
		const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
		if (!emailPattern.test(value)) {
			setIsError(true)
			setDisabled(true)
		} else {
			setIsError(false)
			setDisabled(false)
		}
	}

	const mouseEnterHandler = () => {
		setisHover(true)
	}
	const mouseLeaveHandler = () => {
		setisHover(false)
	}


	return (
		<div className={sl.subscribe}>
			<div className={sl.subscribeTitle}>подпишитесь на наши новости</div>
			<form className={`${sl.subscribeForm} ${emailAway && isError ? sl.isInvalid : ''}`}>
				<input
					className={`${sl.subscribeInput} ${emailAway && isError ? sl.isInvalid : ''}`}
					type="text"
					name="email"
					value={email}
					placeholder='your@email.ru'
					onBlur={blurHandler}
					onChange={emailHandler}
				/>
				<button className={sl.subscribeSubmit} disabled={disabled} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
					<span className={sl.subscribeText}>Подписаться</span>
					<IconArrowCircle className={sl.subscribeSubmitArrow} isHover={isHover} />
				</button>
			</form>
			<div className={sl.subscribePolitic} >Отправляя заполненную форму, вы принимаете условия <a href="#">Политики обработки персональных данных</a> и подписываете <a href="#">Заявление-согласие субъекта</a> на&nbsp;передачу его персональных данных третьей стороне.</div>
		</div>
	)
}
