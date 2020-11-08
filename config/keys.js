const path = require('path')

// Add your URI in .env file as such;
//MONGO_URI=your_URI
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

module.exports = {
    mongoURI: process.env.MONGO_URI
};