export class AuthTokenError extends Error {
    constructor() {
        super('Error withAuthentication token.')
    }
}