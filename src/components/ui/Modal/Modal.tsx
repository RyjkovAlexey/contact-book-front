import React, { ReactNode } from 'react';
import './modal.css';

export const Modal = ({
	child,
	show,
	onClose,
}: {
	child: ReactNode;
	show: boolean;
	onClose: () => void;
}) => {
	if (!show) return null;
	return (
		<div className='modal' onClick={onClose}>
			<div className='modal__content' onClick={e => e.stopPropagation()}>
				{child}
			</div>
		</div>
	);
};
