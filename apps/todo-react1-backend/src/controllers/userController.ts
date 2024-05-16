import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user';

class UserController {
    static register = async (req: Request, res: Response) => {
        const { username, email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);

        try {
            const newUser = new UserModel({
                username,
                email,
                password_hash: passwordHash
            });
            await newUser.save();

            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Error registering user' });
        }
    };
    
    static login = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        try {
            const user = await UserModel.findOne({ email });

            if (user && await bcrypt.compare(password, user.password_hash)) {
                const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

                res.json({
                    success: true,
                    token: `Bearer ${token}`
                });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error logging in' });
        }
    };
}

export default UserController;