import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
// File imports 
import classes from './Modal.module.css';
import Cart from '../Cart/Cart';


const Backdrop = props => {
	return (
		<div className={classes.backdrop} onClick={props.onClick} />
	);
}

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>
				{props.children}
			</div>
		</div>
	);
}

const portalElement = document.getElementById('overlays');
const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay >, portalElement)}
		</Fragment>
	);
}

export default Modal;