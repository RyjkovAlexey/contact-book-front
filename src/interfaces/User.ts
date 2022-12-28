import { Role } from './Role';

export interface User {
	id: number;
	login: string;
	name: string;
	surname: string;
	patronymic: string;
	role: Role[];
}
