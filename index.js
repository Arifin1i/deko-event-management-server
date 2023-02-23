const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()


//get
app.get('/', (req, res) => {
    res.send('deko will be so richhhhhhhhhhhhh')
})


//listen
app.listen(port, () => {
    console.log(`deko earning mon-ney at ${5000}`)
})

