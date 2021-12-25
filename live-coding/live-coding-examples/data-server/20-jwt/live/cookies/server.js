const express = require("express");
const server = express();
// Mit dem Package cookie-parser lassen sich die Cookies per Middleware extrahieren.
// Da Cookies im Header als String übermittelt werden, ersparen wir uns somit das Umwandeln des Strings.
const cookieParser = require("cookie-parser");

server.listen(4444);

server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded());

server.get("/login", (req, res) => {
    const token = "efrtzw.ewrthwe34.z5twsegb";

    // Wir gehen in diesem Fall davon aus, dass der Token durch unsere Authentifizierung erzeugt wurde.
    // Um diesen nun an den Client auszuliefern, bietet sich ein Cookie an, den wir mittels res.cookie() erzeugen können.
    // Die Funktion sorgt dafür, dass der "Set-Cookie" Header im Response gesetzt wird.
    res.cookie("token", token, {
        maxAge: 5 * 60 * 1000,
        // Cookies, die "HTTP only" sind, können ausschließlich vom Browser erreicht werden.
        // Ein Skript, das auf der Seite läuft, hat keinen Zugriff auf solche Cookies. Das ist eine Sicherheitsmaßnahme gegen XSS.
        httpOnly: true,
        // Möglich wäre hier noch die explizite Angabe der Domain, wenn bspw. Subdomains mit einbezogen werden sollen.
        // Standardmäßig wird die Domain auf die des Servers gesetzt. In unserer lokalen Umgebung ist das "localhost".
    });

    res.json({ test: "value" });
});


server.get("/articles", (req, res) => {
    // Dank des Cookie Parsers haben wir Zugriff auf die im Request gesendeten Cookies in dem Objekt req.cookies.
    res.json(req.cookies);
});

server.get("/logout", (req, res) => {
    // Liegt das Ablaufdatum in der Vergangenheit (auch nur wenige Millisekunden), löscht der Browser i.d.R. den Cookie selbstständig.
    // Um einen Client also anzuweisen, einen Cookie zu löschen, verwenden wir res.clearCookie() mit dem Namen des Cookies.
    // Hierbei wird das Max Age auf 0 gesetzt, somit also auf den 01.01.1970 00:00:00.
    res.clearCookie("token");
    res.send();
});
