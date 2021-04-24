import React, { Component } from "react";
import "./App.css";
import Contact from "./component/Contact";

import Search from "./component/Search";
import update from "immutability-helper";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
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

	handleCreate = (contact) => {
		this.setState({
			contactData: update(this.state.contactData, { $push: [contact] }),
		});
	};
	handleRemove = () => {
		// this.setState({ contactData: update(this.state.contactData), {$splice:[[this.state.selectedKey, 1]]} });
	};
	handleEdit = () => {};

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
				<Search setKeyword={this.setKeyword} />
				<br />
				<Contact contactData={data} />
			</div>
		);
	}
}

export default App;
