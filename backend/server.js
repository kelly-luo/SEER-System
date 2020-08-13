const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req,res) => 
    res.send(`Hello running on ${PORT}. Testing.`)

)

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
)