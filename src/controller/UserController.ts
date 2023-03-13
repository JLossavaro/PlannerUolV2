import { Request, Response } from 'express';
import { CreateUserDTO, UserLoginDTO } from "../DTO";
import { UsersService } from "../services";


export default class UserController {
    private userService: UsersService;

    constructor() {
        this.userService = new UsersService();
    };

    async createUser(req: Request, res: Response) {
        try {
            const createUserDTO: CreateUserDTO = req.body;

            const validateCreate = CreateUserDTO.validateData(createUserDTO);
            if (!validateCreate.success) {
                return res.status(401).json("Please provide the following parameters in the request body: firstName, lastName, birthDate, city, country, email, password and confirmPassword");
            }
            const createdUser = await this.userService.createUser(createUserDTO);
            return res.status(201).json({ data: createdUser });
        } catch (err) {
            const errorMessage: string = (err as Error).message;
            if (errorMessage === "User already exists") {
                return res.status(400).json({ message: errorMessage });
            }
            return res.status(500).json({ errorMessage });
        }



    }

    async login(req: Request, res: Response) {
        try {
            const userLoginDTO: UserLoginDTO = req.body;
            if (!(userLoginDTO.email && userLoginDTO.password)) {
                return res.status(400).send('Please provide email and password in the request body');
            }
            const user = await this.userService.login(userLoginDTO);

            if (user != null) {
                return res.status(200).json({ message: 'Logado com sucesso!', data: user });
            } else {
                return res.status(401).json({ message: 'Usuário ou senha inválidos' });
            }

        } catch (err) {
            return res.status(401).json({ message: err });
        }
    }
}