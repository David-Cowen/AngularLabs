export class User {
    constructor(
        public birthday: string,
        public username: string,
        public password: string,
        public email: string,
        public age: number,
        public valid: Boolean
    ) {}
}