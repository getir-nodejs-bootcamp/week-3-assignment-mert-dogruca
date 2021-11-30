const jwt = require("jsonwebtoken");

function verifyAuthToken(req, res, next) {
    const authHeader = req.header("Authorization");
    if (!authHeader) res.status(401).json("Auth token is missing!");
    else {
        //check if the header includes Bearer keyword and remove it if exists.
        const token = (authHeader.includes("Bearer") || authHeader) && authHeader.replace("Bearer ", "");
        try {
            jwt.verify(token, process.env.SECRET_KEY);
            next();
        } catch {
            res.status(403).send("Token is not valid!");
        }
    }
}

module.exports = verifyAuthToken;
