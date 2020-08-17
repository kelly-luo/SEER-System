import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from '../backend/Routes/routes.js';
import path from 'path';


const app = express();
const PORT = process.env.PORT || 4000;


mongoose.Promise = global.Promise;
mongoose.connect(process.env.URI || 'mongodb+srv://Hello:World@database.o473f.mongodb.net/<dbname>?retryWrites=true&w=majority', {
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

routes(app);

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));

    app.get("*", (req,res) =>{
        res.sendFile(path.resolve(__dirname,"../frontend", "build", "index.html"));
    });

}


app.get('/', (req, res) =>
    res.send(`Hello running on ${PORT}. Testing heroku`)

)

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
)