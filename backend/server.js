const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const routes = require('./Routes/routes');
const specificRoutes = require('./Routes/specificRoutes');
const path = require('path');
const mongoKey = require("./config/keys").mongoURI
const passport = require("passport");


const app = express();
const PORT = process.env.PORT || 4000;


mongoose.Promise = global.Promise;
mongoose.connect(process.env.URI || mongoKey, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(client => {
        console.log('Connected to Database')
    })
    .catch(console.error)


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use(routes);
app.use(specificRoutes);

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('frontend/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
    });
}

app.get('/', (req, res) =>
    res.send(`Hello running on ${PORT}. Testing herokus`)

)

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
)

module.exports =  app;