import jwt from 'jsonwebtoken';

// Basic token verification using HTTP-only cookie
export const verifyToken = (req, res, next) => {
    const token = req.cookies.adminToken; // ✅ Read from cookie

    if (!token) {
        return res.status(401).json({ message: 'Token missing. Not authenticated.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token.' });
    }
};

// Middleware for admin-only routes
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user && req.user.role === 'admin') {
            next();
        } else {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }
    });
};

export default verifyToken;
