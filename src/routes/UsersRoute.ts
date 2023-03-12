import { Router, Request, Response } from 'express';
import { UserController } from '../controller';

const route = Router();

const userController = new UserController();

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: All operations with events.
 */

/**
 * @swagger
 * /users/signUp:
 *   post:
 *     summary: Criar novo usuário
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: Primeiro nome do usuário
 *               lastName:
 *                 type: string
 *                 description: Último nome do usuário
 *               birthDate:
 *                 type: string
 *                 description: Data de nascimento do usuário
 *               city:
 *                 type: string
 *                 description: Cidade do usuário
 *               country:
 *                 type: string
 *                 description: País do usuário
 *               email:
 *                 type: string
 *                 description: Endereço de e-mail do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *               confirmPassword:
 *                 type: string
 *                 description: Confirmação da senha do usuário
 *             required:
 *               - firstName
 *               - lastName
 *               - birthDate
 *               - city
 *               - country
 *               - email
 *               - password
 *               - confirmPassword
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Requisição inválida (algum campo obrigatório não foi preenchido corretamente)
 *       401:
 *         description: Não autorizado (o usuário não tem permissão para acessar este recurso)
 *       500:
 *         description: Erro interno do servidor
 */


route.post('/users/signUp', (req: Request, res: Response) => {
  return userController.createUser(req, res);
});



/**
 * @swagger
 *
 * /users/signIn:
 *   post:
 *     summary: login as a user.
 *     tags: 
 *       - Users
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: The user was logged successfully.
 *       400:
 *         description: Invalid request body or parameters.
 */
route.post('/users/signIn', (req: Request, res: Response) => {
  const user = userController.login(req, res);
});


export default route;