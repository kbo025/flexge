
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const secret = process.env.SECRET_KEY;

export default async (req, res, next) => {
    try {
        let token = req.headers['authorization'];
        if (!token) {
            throw new Error(403);
        }
        
        token = token.split(' ')[1];
        const { email } = jwt.verify(token, secret);
        if (!email) {
            throw new Error(403);
        }

        const user = await User.findOne({ email }, ['email', 'password', 'name']).exec();
        req.user = user;
        next();
    } catch (e) {
        if (/\d/.test(e.message)) {
            res.status(e.message).json({ success: false, message: e.message});
        } else {
            res.status(500).json({ success: false });
        }
    }
};