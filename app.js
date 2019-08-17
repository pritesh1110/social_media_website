const express = require('express');
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
//const { check, validationResult } = require('express-validator')
const router = express.Router()
const dotenv = require('dotenv');
dotenv.config();

//db
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser : true})
.then(() => {console.log('DB connected')})

mongoose.connection.on('error',err => {
    console.log(`DB connection error: ${err.message}`);
})

//bring routes
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");


//middlewar

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser())
app.use('/',postRoutes);
app.use('/',authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {console.log(`api is listening on port: ${port}`)});