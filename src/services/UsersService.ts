import { UserLoginDTO, CreateUserDTO } from "../DTO";
import { UserRepository } from "../repositories";
import { Users } from "../models";

export default class UsersServices {

    _userRepository: UserRepository;

    constructor() {
        this._userRepository = new UserRepository();
    }

    async createUser(createUserDTO: CreateUserDTO) {
        try {
            const user = {
                firstName: createUserDTO.firstName,
                lastName: createUserDTO.lastName,
                birthDate: createUserDTO.birthDate,
                city: createUserDTO.city,
                country: createUserDTO.country,
                email: createUserDTO.email,
                password: createUserDTO.password
            };
            const userFind = await this._userRepository.findOne(user.email)
            if (!userFind) {
                return await this._userRepository.create(user as Users);
            } else {
                throw new Error("User already exists");
            }
        } catch (error) {
            throw error;
        }
    }


    async login(userLogin: UserLoginDTO): Promise<Users | null> {

        const user = await this._userRepository.findOne(userLogin.email);

        if (user && user.password === userLogin.password) {
            return user;
        } else {
            return null;
        }
    }

}