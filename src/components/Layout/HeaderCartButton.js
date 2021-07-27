import React from 'react';

// File imports 
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';


const HeaderCartButton = (props) => {

	const openHandler = () => {

	}
	return (
		<button className={classes.button} onClick={openHandler}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>
				Your Cart
			</span>
			<span className={classes.badge}>
				3
			</span>
		</button>
	);
}

export default HeaderCartButton;