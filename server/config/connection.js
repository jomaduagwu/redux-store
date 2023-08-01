const mongoose = require('mongoose');

const  mongoURI  =  process.env.MONGODB_URI;
mongoose.connect(mongoURI,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;

// || 'mongodb://127.0.0.1:27017/mern-shopping'),