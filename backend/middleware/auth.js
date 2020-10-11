const jwt = require('jsonwebtoken')
const keys = require("../config/keys");

function auth(req, res, next) {
    const token = req.header('x-auth-token')

    if (!token)
        return res.status(401).json({ msg: 'No token, authorization denied' })


    try {
        const decoded = jwt.verify(token, keys.secretOrKey);
        req.user = decoded;
        next();

    } catch (e) {
        res.status(400).json({ msg: 'token is not valid' })
    }

}

module.exports = auth;