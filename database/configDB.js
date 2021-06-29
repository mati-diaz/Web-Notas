const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(db => console.log('DB Conected'))
    .catch(err => console.log(err));