import mongoose from 'mongoose';

const errorHandler = (err, req, res, next) => {
    console.error(Date.now(),'\n' + err.action, err, '\n');
    res = res.status(err.status);

    const returnMessage = err instanceof mongoose.CastError ? err.reason.sendMessage : err.sendMessage;
    !err.empty ? res.send(returnMessage) : res.send();
};

export default errorHandler;