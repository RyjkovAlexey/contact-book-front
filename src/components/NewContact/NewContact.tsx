import React from 'react';

export const NewContact = () => {
	return (
		<form className='container w-1/2 h-4/5 center mt-10 mx-auto flex flex-col gap-5'>
			<p className='mx-auto font-bold'>Добавить новый контакт</p>
			<div className='container grid auto-rows-grid-auto-1f overflow-auto h-4/5 gap-5'>
				<div className='container grid grid-flow-col text-center auto-cols-grid-auto-1fr'>
					<label>Имя: </label>
					<input className='container w-full h-max'></input>
				</div>
				<div className='container grid grid-flow-col text-center auto-cols-grid-auto-1fr'>
					<label>Контактные данные: </label>
					<input className='container w-full h-max'></input>
				</div>
			</div>
			<button>Создать</button>
		</form>
	);
};
