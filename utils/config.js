require('dotenv').config();

const MONGO = process.env.MONGO;
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    MONGO,
    PORT,
    SECRET_KEY
};