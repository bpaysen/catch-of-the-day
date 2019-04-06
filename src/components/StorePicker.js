import React from 'react';
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	static propTypes = {
		history: PropTypes.object
	};
	/*this is what a constructor may look like to bind a non React method to the React component*/
	// constructor() {
	// 	super();
	// 	this.gotToStore = this.goToStore.bind(this);
	// }
	myInput = React.createRef();

	/*this is not a method, it's a prop so that we don't have to use the constructor above (possibly over and over)*/
	goToStore = event => {
		//1. stop form from submitting
		event.preventDefault();
		//2. get the text from the input
		const storeName = this.myInput.value.value;
		//3. Change the page to /store/userinput
		this.props.history.push(`/store/${storeName}`);
	};
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
			  <h2>Please Enter A Store</h2>
			  <input 
			  	type="text"
			  	ref={this.myInput}
				required 
				placeholder="Store Name" 
				defaultValue={getFunName()} 
			  />
			  <button type="submit">Visit Store →</button>
			</form>

			)
	}

}

export default StorePicker