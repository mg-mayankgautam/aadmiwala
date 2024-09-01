// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    
    // if(token == null) return res.sendStatus(401); // 401 means token doesnt exist

    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //     if(err) return res.sendStatus(403); // 403 means u have token but its not valid so u have no access
    //     req.user = user;
        next();
    // })
};

module.exports = authenticateToken;
