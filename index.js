const express = require('express')
const session = require('express-session')
const flash = require('simple-flash')
const app = express()
const sendMail = require('./controller/email')
const port = process.env.PORT || 5000

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))


app.use(function (req, res, next)  {
  res.locals.formErrors = req.session.formErrors
  res.locals.formBody = req.session.formBody
  delete req.session.formErrors
  delete req.session.formBody
  next()
})


app.use(flash())



app.set('view engine','ejs')
app.set('views','views')


app.get('/',(req,res)=>{
  res.render('index')
})

app.post('/',(req,res)=>{
  var email = req.body.email;
  var name = req.body.name;
  var subject = req.body.subject;
  var message = req.body.message;
  sendMail(email,message,name,subject)
  req.flash('success','Email sent successfully')
  res.redirect('back')
})

app.listen(port,()=>{
console.log( `server running on http://localhost:${port}`);
})