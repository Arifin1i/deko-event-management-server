const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()

//middle wares
app.use(cors());
app.use(express.json());

//mongoDB user and password
// console.log(process.env.DB_USER)
// console.log(process.env.DB_Password)


//get
app.get('/', (req, res) => {
    res.send('deko will be so richhhhhhhhhhhhh')
})

app.get('/', )
//listen
app.listen(port, () => {
    console.log(`deko earning mon-ney at ${5000}`)
})

