const express = require('express'); 

const {PORT} = require('./config/server.config')
const apiRouter  = require('./routes')

const app =  express(); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(express.text()); 
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use('/api', apiRouter ); 

app.get('/ping', (req, res) => {
    return res.json({message: "Problem service is working fine"}); 
})


app.listen(PORT, () => {
    console.log('Server started on PORT: ' + PORT); 
})