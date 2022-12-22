import { action, makeObservable, observable } from 'mobx';
import { Api } from '../api/Api';
import { Contact } from '../interfaces/Contact';
import { User } from '../interfaces/User';

export class RootStore {
	isAuth: boolean = false;
	contacts: Contact[] = [];
	currentUser: User | null = null;

	constructor() {
		makeObservable(this, {
			isAuth: observable,
			contacts: observable,
			login: action,
			loadContacsByUser: action,
		});
	}

	login = (login: string, password: string) => {
		Api.login(login, password)
			.then(data => {
				this.currentUser = data;
			})
			.then(() => {
				this.loadContacsByUser(this.currentUser?.id || -1);
				this.isAuth = true;
			});
	};

	loadContacsByUser = (id: number) => {
		Api.loadContactsById(id).then(data => (this.contacts = data));
	};
}
