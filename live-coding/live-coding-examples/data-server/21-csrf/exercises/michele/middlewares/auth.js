import User from '.././models/User.js';
import jwt from 'jsonwebtoken';


export default {
    protect: async (req, res, next) => {
        try {
            // Verify token
            const token = req.cookies.token;

            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            const id = decoded.id;
            req.user = await User.readOne(id);
            next();

        } catch (err) {
            res.status(401).send('Not authorized to access this route');
        }
    }
}