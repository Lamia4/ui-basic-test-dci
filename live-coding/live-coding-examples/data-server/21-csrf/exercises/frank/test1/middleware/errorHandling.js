const errorHandling = (error, req, res, next) => {
    console.log(error.message);
    res.status(500).send('<h1>'+error.message+'</h1>');
};

export default errorHandling;