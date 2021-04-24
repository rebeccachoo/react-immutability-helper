import React from "react";

function Contact(props) {
	return (
		<div>
			{props.contactData.map((contact, index) => {
				return (
					<div key={index}>
						{contact.name} {contact.phone}
					</div>
				);
			})}
		</div>
	);
}

export default Contact;
