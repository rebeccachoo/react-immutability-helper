import React, { Component } from "react";
import "./App.css";
import Contact from "./component/Contact";

import Search from "./component/Search";
import update from "immutability-helper";
import ContactCreate from "./component/ContactCreate";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedKey: -1,
			keyword: "",
			contactData: [
				{ name: "Rebecca", phone: "3932903943" },
				{ name: "Reina", phone: "490495043" },
				{ name: "David", phone: "34324934" },
				{ name: "Nathan", phone: "112232323" },
				{ name: "Kaylin", phone: "24325323" },
				{ name: "Claire", phone: "235657454" },
			],
		};
		this.setKeyword = this.setKeyword.bind(this);
		this.filter = this.filter.bind(this);
		this.handleCreate = this.handleCreate.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}
	UNSAFE_componentWillMount() {
		console.log(localStorage);
		if (localStorage.contactData) {
			this.setState({ contactData: JSON.parse(localStorage.contactData) });
		}
		localStorage.clear();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			JSON.stringify(prevState.contactData) !==
			JSON.stringify(this.state.contactData)
		) {
			localStorage.contactData = JSON.stringify(this.state.contactData);
		}
	}

	setSelectedKey = (index) => {
		this.setState({ selectedKey: index });
	};

	handleCreate = (contact) => {
		this.setState({
			contactData: update(this.state.contactData, { $push: [contact] }),
		});
	};
	handleRemove = () => {
		if (this.state.selectedKey < 0) {
			return;
		}
		this.setState({
			contactData: update(this.state.contactData, {
				$splice: [[this.state.selectedKey, 1]],
			}),
			selectedKey: -1,
		});
	};
	handleEdit = (newContact) => {
		const { name, phone } = newContact;

		this.setState({
			contactData: update(this.state.contactData, {
				[this.state.selectedKey]: {
					name: { $set: name },
					phone: { $set: phone },
				},
			}),
		});
	};

	setKeyword = (value) => {
		this.setState({ keyword: value });
	};
	filter = () => {
		let data = this.state.contactData;
		data.sort();
		data = data.filter((contact) => {
			return (
				contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) >
				-1
			);
		});
		return data;
	};

	render() {
		let data = this.filter();
		return (
			<div className="App">
				<div style={{ display: "flex", flexDirection: "row" }}>
					<div style={{ width: "50%", paddingTop: "20px" }}>
						<h1>Contacts</h1>
						<Search setKeyword={this.setKeyword} />
						<Contact
							contactData={data}
							onRemove={this.handleRemove}
							changeKey={this.setSelectedKey}
							updateData={this.handleEdit}
						/>
					</div>
					<div style={{ width: "50%", paddingTop: "20px" }}>
						<ContactCreate onCreate={this.handleCreate} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
