import React from 'react';
import './ListItems.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// To use trash icon while displaying todos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// To use transitions while displaying/deleting todos
import FlipMove from 'react-flip-move';

// To use font-awesome trash icon
library.add(faTrash);

// Maps over all the items in the items array and displays each element in its own <div> tag
function ListItems(props) {
	const items = props.items;
	// Maps over all the items in the items array and displays each element in its own <div> tag
	const listItems = items.map((item) => {
		return (
			// Adding <div> tags and event listeners to all the items present in the items state array

			<div className='list' key={item.key}>
				<p>
					<input
						type='text'
						id={item.key}
						value={item.text}
						// Functionality to change the text of a single Todo item
						// Passes the text to be changed and the unique ID of the todo item
						onChange={(e) => {
							props.setUpdateHandler(e.target.value, item.key);
						}}></input>
					<span>
						<FontAwesomeIcon
							onClick={() => {
								props.deleteHandler(item.key);
							}}
							// Trash icon imported from font-awesome
							className='faIcons'
							icon='trash'
						/>
					</span>
				</p>
			</div>
		);
	});
	return (
		// Flip move library is used for the transition effect when displaying and removing todos
		<div>
			<FlipMove duration={500} easing='ease-in-out'>
				{listItems}
			</FlipMove>
		</div>
	);
}

export default ListItems;
