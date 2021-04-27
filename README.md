# React App - Contact Information CRUD
 
 This app has a list of conatct information that is stored in "localStorage" in a browser to keep track of user's selections. 
And immutability helper is used to do CRUD functions. App.js in src folder is a smart component that manage everything. 
<br /><br />

Create Function:<br />
`this.setState({
			contactData: update(this.state.contactData, { $push: [contact] }),
		});`
  
<br /><br />

Remove Function:<br />
`this.setState({
			contactData: update(this.state.contactData, {
				$splice: [[this.state.selectedKey, 1]],
			}),
			selectedKey: -1,
		});`
