import express from "express";
import productController from '../controllers/product.js';

const productRouter = express.Router();

productRouter.post("/", productController.create);
// productRouter.get("/", productController.readAll);
// productRouter.get("/:productId", productController.readOne);
productRouter.put("/:productId", productController.update);
productRouter.delete("/:productId", productController.delete);


export default productRouter;