import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-link-button.css';

export const NavLinkButton = ({ value, to }: { value: string; to: string }) => {
	return (
		<NavLink className={'nav-btn-link'} to={to}>
			<button>{value}</button>
		</NavLink>
	);
};
