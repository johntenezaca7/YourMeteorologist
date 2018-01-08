const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys')

require('./models/User');
require('./services/passport'); 

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

const User = mongoose.model('users');

app.post('/api/saveToDB', (req, res) => {
    const info = req.body.savedInfo;
    req.user.savedCities.push({info: info});
    req.user.save().then(console.log('saved'))
    res.send('Saved City!')
})

app.get('/api/savedInfo', (req, res) => {
   
    res.send(req.user.savedCities)
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


app.listen(PORT, () => {
    console.log('Server started at port: ' + PORT);
})