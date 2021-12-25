import express from 'express';
import controller from '../controller/controller.js'

const server = express();


server.get('/', controller.getAllDishes);

router.get('/:id', controller.getById);

router.delete('/:id', controller.deleteById);

router.put('/:id', controller.updateById);

router.post('/:id', controller.createOrder);


export default router;