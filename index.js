const app = require('./app');
const port = 3000;



app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})



//  Execution of the Code
//  index.js > app.js > userRoutes.js >controller >  db.js