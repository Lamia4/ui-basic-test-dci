import jwt from "jsonwebtoken";


const payload = {
    id: 123,
    name: "Erika",
    role: "Redakteure",
};


const secret = "thnroHTN)b3tngr498otn(§§)RJnfPOAdasadsadasdsadasndfsdf";


const options = {
    algorithm: "HS256",
    expiresIn: "3s",
};

const token = jwt.sign(payload, secret, options);

console.log({ token });


jwt.verify(token, secret, { algorithms: ["HS256"] }, (error, decoded) => {
    if (error) return console.log({ error });

    console.log({ decoded });
});


setTimeout(() => {
    jwt.verify(token, secret, { algorithms: ["HS256"] }, (error, decoded) => {
        if (error) return console.log({ error });

        console.log({ decoded });
    });
}, 4000);
