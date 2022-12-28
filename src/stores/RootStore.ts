import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { redirect } from 'react-router-dom';
import { Api } from '../api/Api';
import { Contact } from '../interfaces/Contact';
import { NewContact } from '../interfaces/NewContact';
import { NewUser } from '../interfaces/NewUser';
import { User } from '../interfaces/User';

export class RootStore {
	isAuth: boolean = false;
	contacts: Contact[] = [];
	currentUser: User | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	login = (username: string, password: string) => {
		Api.login({ username, password })
			.then(data => {
				localStorage.setItem('token', data.accessToken);
				this.currentUser = data.accountDTO;
				this.isAuth = true;
			})
			.then(() => Api.getContactsForAccount(this.currentUser!.id))
			.then(data => (this.contacts = data));
	};

	register = (newUser: NewUser) => {
		Api.register(newUser).then(() => this.login(newUser.surname, newUser.password));
	};

	postContact = (newContact: NewContact) => {
		Api.postContact(newContact).then(data => this.contacts.push(data));
	};
}
