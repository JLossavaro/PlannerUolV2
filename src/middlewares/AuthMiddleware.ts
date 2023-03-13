import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        const decodedToken: any = jwt.verify(token!, "secret");
        const userEmail = decodedToken.email;
        if (req.body.email && req.body.email !== userEmail) {
            throw new Error('Invalid Email');
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({
            error: new Error('Not Authorized!').message,
        });
    }
};

export default authMiddleware;