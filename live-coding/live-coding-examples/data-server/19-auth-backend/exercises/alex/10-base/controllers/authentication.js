import User from "../models/User.js";
import { errorOptions } from "../models/errors.js";

const loginByEmail = async (req, res, next) => {
    try {
        const authenticated = await User.login(req.body.email, req.body.password);
        res.status(200).json(authenticated);
    } catch (e) {
        next(errorOptions(e, 'authentication', 401 , false, "unauthorized - wrong email/password"));
    }
}

export default { loginByEmail };