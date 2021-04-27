import React, { useState } from "react";
import Detail from "./Detail";

const Contact = (props) => {
	const [contact, setContact] = useState({ name: "", phone: "" });

	const set = (name, phone, index) => {
		setContact({
			name: name,
			phone: phone,
		});
		props.changeKey(index);
	};
	const removeHandler = () => {
		setContact({ name: "", phone: "" });
		props.onRemove();
	};
	const editContact = (newContact) => {
		props.updateData(newContact);
	};

	return (
		<div>
			{props.contactData.map((contact, index) => {
				return (
					<div
						key={index}
						style={{ cursor: "pointer", paddingTop: "10px" }}
						onClick={() => set(contact.name, contact.phone, index)}
					>
						{contact.name}
					</div>
				);
			})}
			<div>
				<Detail
					contact={contact}
					remove={removeHandler}
					editContact={editContact}
				/>
			</div>
		</div>
	);
};

Contact.defaultProps = {
	contactData: { name: "", phone: "" },
	onRemove: () => {
		console.error("onRemove Error");
	},
};

export default Contact;
