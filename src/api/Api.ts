import { Contact } from '../interfaces/Contact';
import { User } from '../interfaces/User';

const url = 'http://localhost:8080';

export const Api = {
	login: async (login: string, password: string): Promise<User> => {
		const response = await fetch(`${url}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({
				login: login,
				password: password,
			}),
		});

		if (response.ok) {
			return response.json() as unknown as User;
		}

		throw new Error('Login error');
	},

	loadContactsById: async (id: number): Promise<Contact[]> => {
		const response = await fetch(`${url}/contacts/getWithUser/${id}`);

		if (response.ok) {
			return response.json() as unknown as Contact[];
		}

		throw new Error('Get all contacts error');
	},
};
