import { Users } from "../models";

export default class UserRepository {
    _users: Array<Users>;
    constructor() {
        this._users = new Array<Users>();
    }

    async create(user: any) {
        this._users.push(user);
        return user;
    }

    async findOne(email: any) {
        return this._users.find(user => user.email === email);
    }
}