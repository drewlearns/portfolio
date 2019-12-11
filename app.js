//=======================================================
// dependancies
//=======================================================
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//=======================================================
// MongoDB connection (update <password> )
//=======================================================
mongoose.connect('mongodb+srv://drewlearns:<password>@drewlearns-8lmq1.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
})
        .then(function() {
                console.log('Connected to DB');
        })
        .catch(err => {
                console.log('Error: ', err.message);
        });

// Insert GET requests below here:
//*******************************************************

app.get('/', async (req, res) => {
        res.send('Hello World!');
        console.log('Home Page | Loaded.');
});

//*******************************************************
// Insert GET requests above here:

// This Route is a catch all
app.get('*', (req, res) => {
        console.log(req.params);
        console.log('A user went to an undefined route, and was redirected to');
        res.redirect('/');
});

// listening on:
app.listen(3000, () => {
        console.log('Server stared & listening on port 3000.');
});
