require ('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRoute = require('./routes/user.route.js')
const authRoute = require('./routes/auth.route.js')

const authMiddleware = require('./middleware/auth.middleware.js')

const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser(process.env.SESSION_SECRET))

app.use(express.static('public'))

app.get('/', authMiddleware.requiredAuth, (req, res) => res.render('index', {
    name: 'Anh Linh đẹp trai!'
}))

app.use('/users', authMiddleware.requiredAuth, userRoute)
app.use('/auth', authRoute)

app.listen(port, () => console.log(`Example app listening on port: ${port}`))


