import { type } from 'os';
import { Contact } from '../interfaces/Contact';
import { NewContact } from '../interfaces/NewContact';
import { NewUser } from '../interfaces/NewUser';
import { User } from '../interfaces/User';

const url = 'http://localhost:8080';

export const Api = {
	register: async (newUser: NewUser): Promise<User> => {
		const headers = new Headers();
		headers.append('Content-type', 'application/json; charset=utf-8');

		const request = await fetch(`${url}/singUp`, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(newUser),
		});

		if (request.ok) return request.json();

		throw new Error(`Registration error ${request.status}`);
	},

	login: async ({
		username,
		password,
	}: {
		username: string;
		password: string;
	}): Promise<{ accessToken: string; accountDTO: User }> => {
		const headers = new Headers();
		headers.append('Content-type', 'application/json; charset=utf-8');

		const request = await fetch(`${url}/authenticate`, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify({ username, password }),
		});

		if (request.ok) {
			return request.json() as unknown as { accessToken: string; accountDTO: User };
		}

		throw new Error(`Login error ${request.status}`);
	},

	getContactsForAccount: async (id: number) => {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
		const request = await fetch(`${url}/accounts/contacts/${id}`, { headers });

		if (request.ok) return (await request.json()) as Contact[];

		throw new Error(`Get contacts error ${request.status}`);
	},

	postContact: async (newContact: NewContact) => {
		const headers = new Headers();
		headers.append('Content-type', 'application/json; charset=utf-8');
		headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

		const request = await fetch(`${url}/contacts`, {
			method: 'POST',
			headers,
			body: JSON.stringify(newContact),
		});

		if (request.ok) return (await request.json) as unknown as Contact;

		throw new Error(`Post contact error ${request.status}`);
	},
};
