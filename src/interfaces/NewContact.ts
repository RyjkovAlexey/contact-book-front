import { Label } from './Label';
import { User } from './User';

interface NewNotes {
	text: string;
}

interface NewContactDetails {
	details: string;
	type: string;
}

export interface NewContact {
	name: string;
	creator: User;
	details: NewContactDetails[];
	labels: Label[];
	notes: NewNotes[];
}
