
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const secret = process.env.SECRET_KEY;

const login = async (req, res) => {
    try {    
        let { email, password } = req.body;
        let user = await User.findOne({ email }, ['email', 'password', 'name']).exec();
        if ( !user ) {
            throw new Error(401);
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new Error(401);
        }

        const { id, name } = user;
        let token = jwt.sign({ id, name, email }, secret,  { expiresIn: '4h' });

        res.status(200).json({ success: true, token })
    } catch (e) {
        if (/\d/.test(e.message)) {
            res.status(e.message).json({ success: false, message: e.message});
        } else {
            res.status(500).json({ success: false });
        }
    }
}

const me = async (req, res) => {
    res.json({user: req.user});
}

export default {
    resourceName: 'auth',
    login,
    me
}
