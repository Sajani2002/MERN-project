require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const toursRoutes = require('./routes/tours')

//express app
const app = express();

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/tours',toursRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & Listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
