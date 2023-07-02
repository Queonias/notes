const mongoose = require('mongoose');

// const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then( db => console.log('Database is connected'))
.catch( err => console.error(err))