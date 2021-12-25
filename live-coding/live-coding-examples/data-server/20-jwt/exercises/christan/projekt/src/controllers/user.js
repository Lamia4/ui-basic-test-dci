import User from "../models/User.js";
import bcrypt from "bcrypt";
export default {
    register: async function (req, res, next) {try {
        // Generar el imput del usuario
        const { first_name, last_name, email, password } = req.body;
    
        // Validar el input del usuario
        if (!(email && password && first_name && last_name)) {
          res.status(400).send("All input is required, controller.user");
        }

        encryptedPassword = await bcrypt.hash(password, 10);
    
        // crear usuario en la BD.
        const user = await User.create({
          first_name,
          last_name,
          email: email.toLowerCase(), // por seguridad, convertir el input en todo minuscula.
          password: encryptedPassword,
        });
    
        // Crear token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,            // Secret
          {
            algorithm: "HS256",             // Options
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;
    
        // return new user
        res.status(201).json(user);
        return user;
      } catch (err) {
        console.log(err);
        return err;
      }
    },

     readAll: async function (req, res, next) {
        try {
            const users = await User.readAll();
            console.log("readAll users success", users);
            res.json(users);
        } catch (error) {
            next(error);
        }
        return users;
    },

    read: async function (req, res, next) {
        try {
            const user = await User.read(req.params.userId);
            if (!user) return res.status(404).send();
            console.log("readOne *users* success");
            res.json(user);
        } catch (error) {
            next(error);
        }
    },

    create: async function (req, res, next) {
        try {
            const result = await User.register("name", "email", "password");
            res.json(result);
        } catch (error) {
            next(error);
        }
    },

    update: async function (req, res, next) {
        try {
            res.json({ msg: "success" });
        } catch (error) {
            next(error);
        }
    },

    delete: async function (req, res, next) {
        try {
            res.json({ msg: "success" });
        } catch (error) {
            next(error);
        }
    },

    markArticleAsAcquired: async function (req, res, next) {
        try {
            const result = await User.markArticleAsAcquired(req.params.userId, req.params.productId);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },
};