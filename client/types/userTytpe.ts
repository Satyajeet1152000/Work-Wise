/**
 * Next Auth #4 -> types declation of UserType
 * Next Auth #5 -> Create your Auth.js/.ts configuration.
 * Define interface and type for user data to manage session details:
 */

/**
 * UserType: Interface specifying the expected properties for user session management.
 */
interface UserType {
	id: string;
	name: string;
	email: string;
	emailVerified?: Date | null;
	password: string;
	token: string;
	avatar?: string;
	role: string;
	department: string;
	position: string;
	dateJoined: Date;
	manager: string;
	lastLogin: string;
	preferences: any;
}

export type { UserType };
