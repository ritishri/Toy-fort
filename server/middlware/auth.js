import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("Received Authorization Header:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        console.log("Token Missing or Incorrect Format");
        return res.status(401).json({ message: 'Token Missing or Incorrect Format' });
    }

    const token = authHeader.split(" ")[1]
    console.log("Extracted Token:", token)

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log("Decoded Token:", decoded);

        req.user = decoded;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(403).json({ message: 'Invalid Token' });
    }
};

export default verifyToken;
