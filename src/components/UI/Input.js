import React from 'react';

// File Imports 
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
	return (
		<div className={classes.input}>
			<label html={props.input.id}>
				{props.label}
			</label>
			<input ref={ref} {...props.input} />
		</div>
	);
})

export default Input;