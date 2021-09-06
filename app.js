const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

//DB config
const db = require('./config/keys').MongoURI;

// connect
mongoose.connect(db, {useNewUrlParser: true})
.then(()=> console.log('connected'))
.catch(error => console.log(error));
const app = express();
// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', require('./routers/index'));
app.use('/users', require('./routers/users'));
const port  = process.env.port || 4000;

app.listen(port, console.log(`server started on port ${port}`))