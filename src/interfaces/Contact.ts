import { Details } from './Details';
import { Label } from './Label';
import { Note } from './Note';

export interface Contact {
	id: number;
	name: string;
	creator: number;
	details: Details[];
	labels: Label[];
	notes: Note[];
}
