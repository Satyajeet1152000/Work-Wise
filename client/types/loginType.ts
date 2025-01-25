/**
 * Next Auth #3 -> types declation of CredentialsType and SocialCredentialsType
 */

/**
 * CredentialsType: Defines the structure for email and password login credentials.
 */
type CredentialsType = {
	email: string;
	password: string;
};

/**
 *SocialCredentialsType: Defines the structure for social login credentials, specifically for Google authentication.
 */
type SocialCredentialsType = {
	auth_code: string;
};

export type { CredentialsType, SocialCredentialsType };
