const app = require('./app');
// const UserModel = require('./models/user.model');
const port = 3000;
const db = require('./config/db');



app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})



//  Execution of the Code
//  index.js > app.js > userRoutes.js >controller >  db.js