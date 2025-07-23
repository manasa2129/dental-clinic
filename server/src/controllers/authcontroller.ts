import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/user';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, location, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      location,
      role,
    });

    await user.save();
    return res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    return res.status(500).json({ message: 'Registration failed', error });
  }
};
