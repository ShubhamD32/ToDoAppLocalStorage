import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props) {
	const items = props.items;
	const listItems = items.map((item) => {
		return (
			<div className='list' key={item.key}>
				<p>
					<input
						type='text'
						id={item.key}
						value={item.text}
						onChange={(e) => {
							props.setUpdateHandler(e.target.value, item.key);
						}}></input>
					<span>
						<FontAwesomeIcon
							onClick={() => {
								props.deleteHandler(item.key);
							}}
							className='faIcons'
							icon='trash'
						/>
					</span>
				</p>
			</div>
		);
	});
	return (
		<div>
			<FlipMove duration={500} easing='ease-in-out'>
				{listItems}
			</FlipMove>
		</div>
	);
}

export default ListItems;
