import jwt from "jsonwebtoken";

const identificationHandling = (error, req, res, next) => {

// In der Payload speichern wir die Daten, mit denen wir den User identifizieren wollen
const payload = {
    id: 123,
    name: "Erika",
    role: "Redakteure",
};
    const secret = "thnroHTN)b3tngr498otn(§§)RJnfPOytumamatambiendfsdf";

    const options = {
        algorithm: "HS256",
        expiresIn: "30s",
    };

    const token = jwt.sign(payload, secret, options);

        console.log("token:", {  token });

    jwt.verify(token, secret, { algorithms: ["HS256"] }, (error, decoded) => {
        if (error) {
            console.log({ error });
            return res.status(500).send();
        }
        
        console.log({ decoded });
    });

    setTimeout(() => {
        jwt.verify(token, secret, { algorithms: ["HS256"] }, (error, decoded) => {
            if (error) return console.log({ error });
    
            console.log("timeout");
        });
    }, 4000);
};

export default identificationHandling;
