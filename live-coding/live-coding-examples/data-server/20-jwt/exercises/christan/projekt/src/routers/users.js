import express from "express";
import usersController from "../controllers/user.js";
import validation from "../middlewares/validate.js";
import bcrypt from "bcrypt";
import user from "../controllers/user.js";

const usersRouter = express.Router();

usersRouter.post("/", 
// validacion,
 usersController.create);
 

// ========================================================  
// ** Register User
usersRouter.post("/register", usersController.register)

// -------------------------------------------------------    
// ** Login User
usersRouter.post("/login", (req, res) => {
    async function login(){
    try {
        // Get user input
        const { email, password } = req.body;
    
        // Validate user input
        if (!(email && password)) {
          res.status(400).send("All input is required");
        }
        // Validar la existencia del user en la DB.
        // const user = await User.findOne({ email });


        if (user && (await bcrypt.compare(password, user.password))) {
          // Create token
          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,              // Secret
            {
                algorithm: "HS256",             // Options
                expiresIn: "2h",
            }
          );
    
          // save user token
          user.token = token;
    
          // user
          res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
        return user;
      } catch (err) {
        console.log(err);
        return err;
      }
}});
// usersRouter.get("/:userId", usersController.read);
// usersRouter.get("/:userId", usersController.readOne);
// usersRouter.put("/:userId", usersController.update);
// usersRouter.delete("/:userId", usersController.delete);

// Neue Endpoints für die Reading List
// usersRouter.post("/:userId/readinglist", usersController.addArticleToReadingList);
// usersRouter.patch("/:userId/readinglist/:articleId", usersController.markArticleAsRead);

export default usersRouter;