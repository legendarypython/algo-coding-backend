const express = require('express'); 

const {PORT} = require('./config/server.config')

const app =  express(); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(express.text()); 

app.get('/health', (req, res) => {
    return res.json({message: "Problem service is working fine"}); 
})

app.listen(PORT, () => {
    console.log('Server started on PORT: ' + PORT); 
})