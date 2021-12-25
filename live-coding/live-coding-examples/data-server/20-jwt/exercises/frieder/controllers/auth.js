import User from '../models/User.js';
import { errorOptions } from '../models/errors.js';

const loginByEmail = async (req, res, next) => {
    try {
        res.payload = await User.login(req.body.email, req.body.password);
        next();
    } catch (e) {
        next(errorOptions(e, 'authentication/login', 401 , false, "unauthorized - wrong email/password"));
    }
}

export default {
    loginByEmail
};