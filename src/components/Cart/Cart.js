import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';

// File Imports 
import classes from './Cart.module.css';
import Modal from '../UI/Modal';


const Cart = (props) => {
	const [modalActive, setModalActive] = useState(true);
	const cartItems = <ul>{[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
	].map(item => <li className={classes['cart-items']}>{item.name}</li>)}</ul>;


	const closeHandler = () => {
		setModalActive();
	}
	return (
		<Fragment>
			{
				modalActive &&
				<Modal>
					{cartItems}
					<div>
						<span>Total Amount</span>
						<span>35.62</span>
					</div>
					<div className={classes.actions}>
						<button className={classes['button--alt']} onClick={closeHandler}>
							Close
						</button>
						<button className={classes.button}>
							Order
						</button>
					</div>
				</Modal>
			}
		</Fragment>


	);
}

export default Cart;