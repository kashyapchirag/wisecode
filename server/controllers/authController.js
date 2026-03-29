import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (await User.findOne({ email })) {
            return res.status(409).json({ message: "Email already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({ email, password: hashedPassword })
        return res.status(201).json({ message: "Signed Up Successfully" })

    } catch (err) {
        return res.status(500).json({ message: "Sign up failed" })
    }

}
export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" })
        }
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        });
        return res.status(200).json({ message: "Logged In Successfully", token })

    } catch (err) {
        return res.status(500).json({ message: "Log In failed" })
    }

}

export const getMe = async (req, res) => {
    return res.status(200).json({ user: req.user })
}

export const signOut = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        });
        res.status(200).json({ message: "Logged Out Successfully" })
    } catch (err) {
        res.status(500).json({ message: "Log Out failed" })
    }
}

