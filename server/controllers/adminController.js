import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '../config/db.js';

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = await connectToDatabase();
    // Select user where role_id = 1 (admin)
    const [rows] = await db.query(
      'SELECT * FROM users WHERE email = ? AND role_id = 1',
      [email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Admin not found or unauthorized' });
    }

    const admin = rows[0];

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: 'admin' },
      process.env.JWT_KEY,
      { expiresIn: '1h' }
    );

    // Set cookie options with secure flag false for local dev (HTTP) and true for production (HTTPS)
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // true only in production (HTTPS)
      sameSite: 'Strict', // Can be 'Lax' if needed for wider compatibility
      maxAge: 60 * 60 * 1000, // 1 hour
    };

    res
      .cookie('adminToken', token, cookieOptions)
      .status(200)
      .json({
        user: {
          id: admin.id,
          first_name: admin.first_name,
          last_name: admin.last_name,
          email: admin.email,
          role_id: admin.role_id,
          role: 'admin',
          slug: admin.slug.toLowerCase(),
        }
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
