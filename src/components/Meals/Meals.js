import React, { Fragment } from 'react';

// File Imports 
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
	return (
		<Fragment>
			<MealsSummary />
			<AvailableMeals />
		</Fragment>
	);
}

export default Meals;
