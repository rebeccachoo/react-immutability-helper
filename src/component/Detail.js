import React, { useState } from "react";

const Detail = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [newContact, setNewContact] = useState({
		name: "",
		phone: "",
	});

	const switchMode = () => {
		setNewContact({ name: props.contact.name, phone: props.contact.phone });
		setEditMode(true);
	};
	const editContact = () => {
		props.editContact(newContact);
	};

	const showContact = (
		<div>
			<h2>Detail</h2>
			Name: {props.contact.name}
			<br />
			<br /> Phone: {props.contact.phone}
			<br />
			<br />
			<button onClick={switchMode}>Edit</button>
			<button onClick={() => props.remove()}>Remove This Contact</button>
		</div>
	);

	const editContat = (
		<div>
			<h2>Detail</h2>
			<input
				value={newContact.name}
				onChange={(e) =>
					setNewContact({ phone: newContact.phone, name: e.target.value })
				}
			/>
			<br />
			<br />
			<input
				value={newContact.phone}
				onChange={(e) =>
					setNewContact({ ...newContact, phone: e.target.value })
				}
			/>
			<br />
			<br />
			<button onClick={() => setEditMode(false)}>Cancel</button>
			<button onClick={editContact}>Submit</button>
		</div>
	);

	return editMode ? editContat : showContact;
};
export default Detail;
