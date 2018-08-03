'use strict';

const express = require('express'),
    compression = require('compression'),
    helmet = require('helmet'),
    _ = require('lodash'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    fs = require('fs'),
    chalk = require('chalk'),
    errorHandler = require('errorhandler'),
    dotenv = require('dotenv').config(),
    cors = require('cors'),
    app = express(),
    MongoStore = require('connect-mongo')(session),
    path = require('path'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    multer = require('multer'),
    storage = multer.diskStorage({
        destination: 'public/uploads',
        filename: function (req, file, cb) {
            cb(null, uuid.v4() + path.extname(file.originalname))
        }
    }),
    upload = multer({
        storage: storage
    });


app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}));

/* Connect to MongoDB */
// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URL);
// mongoose.connection.on('error', (err) => {
//     console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('âœ—'));
//     process.exit();
// });


/* Express Configuration */
app.set('port', process.env.METADATA_PORT || 3001);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', '.ejs');
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000
}));
app.use(logger('dev'));
app.use(passport.initialize());
app.use(passport.session());

/* MongoDB Connection session */
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: process.env.API_KEY,
//     store: new MongoStore({
//         url: process.env.MONGODB_URL,
//         autoReconnect: true
//     })
// }));

/** Load Static Files */
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: 31557600000
}));


/** Error Handler */
if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
}

/**
 * Load Router
 */
let metaRouter = require('./src/routes/metaRouter');
let userRouter = require('./src/routes/userRouter');

/**
 * Register Routes
 */
app.use('/meta', metaRouter);
app.use('/user', userRouter);


/** Start Express Server */
app.listen(app.get('port'), (req, res, next) => {
    console.log(`%s App is running at http://${process.env.METADATA_HOST}:%d/ in %s mode`, chalk.green('âœ“'), app.get('port'), process.env.NODE_ENV);
    console.log('Press CTRL-C to exit');
});

module.exports = app;