import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 4000;




mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Hello:World@database.o473f.mongodb.net/<dbname>?retryWrites=true&w=majority', {
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



app.get('/', (req, res) =>
    res.send(`Hello running on ${PORT}. Testing heroku`)

)

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
)