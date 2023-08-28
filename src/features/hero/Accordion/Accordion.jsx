import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import sl from "./Accordion.module.scss";


export const Accordion = ({ advList }) => {
	const [openId, setId] = useState(null);

	return (
		<ul className={sl.accordion}>
			{advList.map((advItem, id) => {
				return (
					<AccordionItem
						onClick={() => (id === openId ? setId(null) : setId(id))}
						advItem={advItem}
						isOpen={id === openId}
						key={id}
					/>
				);
			})}
		</ul>
	);
};
