import React from 'react';

// file imports 
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = () => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>
					ReactMeals
				</h1>
				<HeaderCartButton />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="table full of food" />
			</div>
		</React.Fragment>
	);
}

export default Header;