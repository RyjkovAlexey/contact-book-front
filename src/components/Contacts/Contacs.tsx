import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRootStore } from '../../hooks/useRootStore';
import { Contact } from '../../interfaces/Contact';

const ContactItem = ({ contact }: { contact: Contact }) => {
	return (
		<div className='container grid grid-flow-col min-w-full min-h-full'>
			<div className='container grid grid-flow-col min-w-full min-h-full text-center auto-cols-fr'>
				<span className='text-center'>{contact.name}</span>
				<span className='text-center'>
					{contact.details.map(detail => `Данные: ${detail.type} Тип: ${detail.type}\n`).join('')}
				</span>
				<span className='text-center'>{contact.labels.map(label => label.name).join('\n')}</span>
				<span className='text-center'>{contact.notes.map(note => note.text)}</span>
			</div>
		</div>
	);
};

export const Contacs = observer(({ contacts }: { contacts: Contact[] }) => {
	const navigate = useNavigate();

	const [searchValue, setSearchValue] = useState('');

	const contactItems = contacts
		.filter(contact => contact.name.includes(searchValue))
		.map(contact => <ContactItem key={contact.id} contact={contact} />);

	return (
		<div className='container min-w-full h-4/5 mt-10 grid grid-rows-contact-page-template gap-10 '>
			<input
				className='container h-max w-96 mx-auto'
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
			/>
			<NavLink to={'/newContact'} className={'bg-white w-72 align-middle text-center mx-auto'}>
				Создать новый контакт
			</NavLink>
			<div className='container grid grid-flow-row grid-row-auto min-h-full h-full mx-auto overflow-y-auto auto-rows-grid-auto-1f'>
				<div className='container grid grid-flow-col min-w-full min-h-full auto-cols-fr'>
					<span className='text-center'>Имя контакта</span>
					<span className='text-center'>Контактные данные</span>
					<span className='text-center'>Метки</span>
					<span className='text-center'>Заметки</span>
				</div>
				{contactItems}
			</div>
		</div>
	);
});
