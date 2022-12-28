import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useRootStore } from '../../hooks/useRootStore';
import { AddContactModal } from './AddContactModal/AddContactModal';
import './contacts-page.css';

export const ContactsPage = observer(() => {
	const { contacts } = useRootStore();

	const [showDialog, setShowDialog] = useState(false);

	return (
		<>
			<div className='contacts-page'>
				<div className='contacts-page__controls'>
					<input placeholder='Поиск' />
					<button onClick={() => setShowDialog(true)}>Создать</button>
				</div>
				<div className='contacts-page__contact-list'>
					{contacts.map(contact => (
						<div className='contacts-page__contact-list__contact-row' key={contact.id}>
							<label>{contact.name}</label>
							{contact.details.map(detail => (
								<label key={detail.id}>
									{detail.type} - {detail.details}
								</label>
							))}
						</div>
					))}
				</div>
			</div>
			<AddContactModal show={showDialog} onClose={() => setShowDialog(false)} />
		</>
	);
});
