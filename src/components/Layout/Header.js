import React from 'react';

// file imports 
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {

	const consoleHandler = () => {
		console.log('I have been clicked');
	}

	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>
					ReactMeals
				</h1>
				<HeaderCartButton onClick={props.onShowCart}
				/>
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="table full of food" />
			</div>
		</React.Fragment>
	);
}

export default Header;