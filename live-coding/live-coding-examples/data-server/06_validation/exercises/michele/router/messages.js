
import express from 'express';
import { header, check, validationResult } from 'express-validator';
import controllerMessages from '../controller/messages.js';

const router = express.Router();

router.get('/:id', controllerMessages.getById);

router.post(
    '/',
        check('id').isNumeric(),
        check('content-type').matches(''),
        header('content-type').equals('application/json').withMessage("set content type"),
        check('contact', 'optional contact email address').optional().isEmail(),
        check('text').escape(),
        check(['text', 'title']).isString(),
        check(['text', 'title']).not().contains("<").withMessage('no "<" allowed'),
        check(['text', 'title']).not().contains(">").withMessage('no ">" allowed'),
        (req, res, next) => {

            const errorFormatter = ({ location, msg, param }) => {
                // Build your resulting errors however you want! String, object, whatever - it works!
                return `${param}`;
              };
              const result = validationResult(req).formatWith(errorFormatter);
              if (!result.isEmpty()) {
                  if(result.mapped()['content-type'] && result.errors.length == 1) {
                      req.headers['content-type'] = 'application/json'
                  }
                  else {
                    return res.json({ errors: result.array() });
                  }            
              }
              // Handle your request as if no errors happened
            /*
            
            const errors = validationResult(req);
            console.log("errors:", errors);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            console.log(errors.array[0]);
*/
            controllerMessages.create(req, res, next);
        }
);

export default router;
