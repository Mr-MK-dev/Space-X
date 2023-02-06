var express = require('express');
// var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require('http')
const cors = require('cors')
const path = require('path')
const planetsModel = require('./models/planets_project_code')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const morgan = require('morgan');
const { default: mongoose } = require('mongoose');

var app = express();



app.use(cors({
  origin: "*"
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'))

app.use(cookieParser());
const db_url = "mongodb+srv://mkhamam:mk9569@cluster0.lsyuadi.mongodb.net/?retryWrites=true&w=majority"

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', "index.html"))
})
async function runServer() {
  await planetsModel.loadPlanets()

  mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const server = http.createServer(app)
  const port = process.env.PORT || 8080

  server.listen(port, () => {
    return console.log(`App is running on ${port}`);
  })

}


runServer()
