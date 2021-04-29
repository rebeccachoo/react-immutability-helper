# React App - Contact Information CRUD
 
 This app has a list of conatct information that is stored in "localStorage" in a browser to keep track of user's selections. 
And immutability helper is used to do CRUD functions. App.js in src folder is a smart component that manage everything. 
<br /><br />

Create Function:<br />
`this.setState({
			contactData: update(this.state.contactData, { $push: [contact] }),
		});`
 
Delete Function:<br />
`this.setState({
			contactData: update(this.state.contactData, {
				$splice: [[this.state.selectedKey, 1]],
			}),
			selectedKey: -1,
		});`

Edit Function:<br />
`this.setState({
			contactData: update(this.state.contactData, {
				[this.state.selectedKey]: {
					name: { $set: name },
					phone: { $set: phone },
				},
			}),
		});`
		<br /><br />
| Feature | Description |
| -----: | :----------- |
|  Initial state | <img src="https://github.com/rebeccachoo/react-immutability-helper/blob/main/crud.png?raw=true"  width="400">| 


## Installation

You can simply download the files on your computer. <br />
In terminal, install by typing `npm install`.  <br /> 
intall immutability-helper, `npm install immutability-helper --save`.
And type `npm start` to start the program.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate. 


##  Contributors

|  <img src="https://avatars.githubusercontent.com/u/254729?s=460&u=58ed23724180265db677357b4133d4ef970d6407&v=4" width="50" height="50" /> |<a href="https://github.com/rebeccachoo" target="_blank">Rebecca Choo</a>| 
| ----------- | ----------- |
