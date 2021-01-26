import React, { Component } from 'react';
import './App.css';
import ListItems from './Components/ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			currentItem: {
				text: '',
				key: '',
			},
		};
	}

	handleInput = (e) => {
		this.setState({
			currentItem: {
				text: e.target.value,
				key: Date.now(),
			},
		});
	};

	addItem = (e) => {
		e.preventDefault();
		const newItem = this.state.currentItem;
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
		const filteredItems = this.state.items.filter((item) => item.key !== key);
		this.setState({
			items: filteredItems,
		});
	};

	setUpdateHandler = (updatedText, key) => {
		const items = [...this.state.items];
		items.forEach((item) => {
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
								value={this.state.currentItem.text}
								onChange={this.handleInput}
							/>
							<button type='submit'>Add</button>
						</form>
					</header>
					<ListItems
						items={this.state.items}
						deleteHandler={this.deleteHandler}
						setUpdateHandler={this.setUpdateHandler}
					/>
				</div>
			</div>
		);
	}
}
