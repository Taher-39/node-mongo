const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hay I know The node Calling");
})

app.listen(4020, () => console.log("Listening to port 4020"))