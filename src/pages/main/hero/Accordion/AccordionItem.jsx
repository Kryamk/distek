import React, { useRef } from "react";
// import { ReactComponent as ArrowIcon } from "../arrow-icon.svg";
import sl from "./Accordion.module.scss";

export const AccordionItem = ({ advItem, onClick, isOpen }) => {
	const itemRef = useRef(null);

	return (
		<li className={`${sl.accordionItem} ${isOpen ? sl.show : ''}`}>
			<button className={sl.accordionHeader} onClick={() => onClick()}>
				<div className={sl.accordionHeader__text}>{advItem.q}</div>
				<div className={sl.accordionHeader__icon}></div>
			</button>
			<div
				className={sl.accordionCollapse}
				style={isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }}
			>
				<div className={sl.accordionBody} ref={itemRef}> {advItem.a} </div>
			</div>
		</li>
	);
};
