import React, { useRef } from "react";
// import { ReactComponent as ArrowIcon } from "../arrow-icon.svg";

export const AccordionItem = ({ advItem, onClick, isOpen }) => {
	const itemRef = useRef(null);

	return (
		<li className="accordion-item">
			<button className="accordion-header" onClick={() => onClick()}>
				<div className="accordion-header__text">{advItem.q}</div>
				{/* <ArrowIcon className={`accordion-arrow ${isOpen ? "active" : ""}`} /> */}
			</button>
			<div
				className="accordion-collapse"
				// style={isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }}
				style={isOpen ? { height: itemRef.current.offsetHeight } : { height: "0px" }}
			>
				<div className="accordion-body" ref={itemRef}> {advItem.a} </div>
			</div>
		</li>
	);
};
