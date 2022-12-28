import React, { useState } from 'react';
import { useRootStore } from '../../../hooks/useRootStore';
import { NewContact } from '../../../interfaces/NewContact';
import { Modal } from '../../ui/Modal/Modal';
import './add-contact-modal.css';

export const AddContactModal = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
	const rootStore = useRootStore();

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const createOnClick = () => {
		const newContact: NewContact = {
			name,
			creator: rootStore.currentUser!,
			details: [
				{
					details: phone,
					type: 'Телефон',
				},
				{
					details: email,
					type: 'Почта',
				},
			],
			labels: [],
			notes: [],
		};

		rootStore.postContact(newContact);

		onClose();
	};

	return (
		<Modal
			show={show}
			onClose={onClose}
			child={
				<div className='add-contact-modal'>
					<label>Добавление контакта</label>
					<div className='add-contact-modal__base-info'>
						<input
							value={name}
							onChange={e => setName(e.target.value)}
							placeholder='Введите имя контакта'
						/>
						<div className='add-contact-modal__base-info__details'>
							<div>
								<label>Телефон</label>
								<input
									value={phone}
									onChange={e => setPhone(e.target.value)}
									placeholder='Введите конактные данные'></input>
							</div>
							<div>
								<label>Почта</label>
								<input
									value={email}
									onChange={e => setEmail(e.target.value)}
									placeholder='Введите конактные данные'></input>
							</div>
						</div>
					</div>
					<button onClick={createOnClick}>Создать контакт</button>
				</div>
			}
		/>
	);
};
