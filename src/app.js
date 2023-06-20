const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app=express()

const publicDirectoryPath= path.join(__dirname,'../public')
const viewPath= path.join(__dirname,'../templates/views')
const partialPath= path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)   //nodemon src/app.js -e js,hbs    (to make hbs file updating on browser after saving)

app.use(express.static(publicDirectoryPath))


app.get('',(req,res) =>{
    res.render('index', {
        title: 'WeatherAPP',
        name: 'Mansi'
    })
})

app.get('/about',(req,res) =>{
    res.render('about', {
        title:'About me',
        name:'Mansi'
    })
})

app.get('/help',(req,res) =>{
    res.render('help', {
        title:'Help',
        name: 'Mansi'
    }) 
})
/*app.get('', (req, res) => {
    res.send("Hello")
})
*/

app.get('/index',(req,res)=>{
    res.send([{
        name: 'Mansi',
        age: 22
    },
    {
        name: 'andrew'
    }
])
})
app.get('/help/*', (req,res) =>{
    res.render('404',{
        title: '404',
        name: 'Mansi',
        errorMessage: 'Help Article Not Founds'

    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Mansi',
        errorMessage: 'Page Not Found'

    })
})



/*
app.get('/about',(req,res)=>{
    res.send("hii i am mansi")
})

app.get('/weather',(req,res)=>{
    res.send("humidity")
})
*/

app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})
