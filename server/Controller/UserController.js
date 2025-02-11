import { User } from "../Models/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please enter all details" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User Already Exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });

        if (user) {
            const token = jwt.sign({ email: user.email }, "shhh", { expiresIn: '1h' });
            res.cookie('token', token, {
                httpOnly: true,
            });

            return res.status(201).json({
                id: user._id,
                name: user.name,
                email: user.email,
            });
        } else {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}







export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please enter all details" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({ email: user.email }, "shhh", { expiresIn: '1h' });

            res.cookie('token', token, {
                httpOnly: true,
                secure: false, // Set to true if you're using HTTPS
                sameSite: 'Lax', // Adjust based on your requirement ('Lax', 'Strict', 'None')
                maxAge: 3600000, // 1 hour
            });

            return res.status(200).json({
                id: user._id,
                name: user.name,
                email: user.email,
            });
        } else {
            return res.status(401).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        console.error('Login error', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};









export const logOut = async (req, res) => {
    try {
        res.cookie('token', '', { expires: new Date(0), httpOnly: true });
        return res.status(200).json('Logout successful');
    } catch (error) {
        console.log('Logout error', error);
        return res.status(500).json('Internal server error');
    }
};