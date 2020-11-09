//Add your URI in .env file as such;
//MONGO_URI=your_URI
if (process.env.NODE_ENV !== 'production'){
    const path = require('path');
    require('dotenv').config({ path: path.resolve(__dirname, '.env') });
}

module.exports = {
    mongoURI: process.env.MONGO_URI
};