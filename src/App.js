import React, { Component } from 'react';
import './App.css';
import ListItems from './Components/ListItems';

export default class App extends Component {
	constructor(props) {
		super(props);

		//To persist todo items in local storage between browser refreshes
		let localStorageItems = JSON.parse(window.localStorage.getItem('items'));
		localStorageItems = localStorageItems !== null ? localStorageItems : [];

		//Setting initial state
		this.state = {
			items: localStorageItems,
			currentItem: {
				text: '',
				key: '',
			},
		};
	}

	// Persist state value to browser localStorage when component updates
	componentDidUpdate() {
		window.localStorage.setItem('items', JSON.stringify(this.state.items));
	}

	handleInput = (e) => {
		this.setState({
			currentItem: {
				text: e.target.value,

				// Selects and assigns the current date timestamp as the unique ID for the todo
				// 'uuid' library can be used here to implement the same functionality more reliably
				key: Date.now(),
			},
		});
	};

	addItem = (e) => {
		e.preventDefault();
		// Funcion to be called when the current Item is to be added to the items state array
		const newItem = this.state.currentItem;

		//Does nothing if currentItem.text is empty => Disallows blank todos from being added
		if (newItem.text !== '') {
			const newItems = [...this.state.items, newItem];
			this.setState({
				items: newItems,
				currentItem: {
					text: '',
					key: '',
				},
			});
		}
	};

	deleteHandler = (key) => {
		// Filters all items where item->key is not equal to the value passed as a parameter to the function.

		// Removes the element to be deleted from the state array of items
		const filteredItems = this.state.items.filter((item) => item.key !== key);
		// Update the items array in state with the updated array after the item has been deleted
		this.setState({
			items: filteredItems,
		});
	};

	setUpdateHandler = (updatedText, key) => {
		// Make a copy of the state items array
		const items = [...this.state.items];
		items.forEach((item) => {
			/* While mapping over the items array, if the key of the item === the key passed to the function, the value of the text property of the item is set to the updatedText value passed to the function */

			if (item.key === key) {
				item.text = updatedText;
			}
		});
		this.setState({
			items: items,
		});
	};

	render() {
		return (
			<div>
				<div className='App'>
					<header>
						<form id='to-do-form' onSubmit={this.addItem}>
							<input
								type='text'
								placeholder='Enter text'
								/*Initially, the value is an empty string, it updates as characters are typed into the input field. For each keystroke, the state value of the currentItem object is updated.*/
								value={this.state.currentItem.text}
								// Updates state value per keystroke
								onChange={this.handleInput}
							/>
							<button type='submit'>Add</button>
						</form>
					</header>
					<ListItems
						/* Passing down functions to the ListItems component to be used as event listeners in the individual todo items.*/

						items={this.state.items}
						deleteHandler={this.deleteHandler}
						setUpdateHandler={this.setUpdateHandler}
					/>
				</div>
			</div>
		);
	}
}
