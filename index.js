const express = require('express')
//joi is a schema


const app = express()

app.use(express.json())

const courses = [
    {id:1,
    name:"Math"},
    {id:2,
    name:"History"}
]

app.get('/',(req,res) => {
    res.send("Hello World!!")
})

//makes a route
app.get('/api/courses', (req,res)=>{
    res.send(courses)
})

// The : is setting a paramater of id
app.get('/api/courses/:id', (req,res)=>{
   const course = courses.find((c)=> c.id === parseInt(req.params.id))
   if(!course){
       res.status(404).send("Not Found")
   }
   else return res.send(course.name)
})

app.post('/api/courses', (req, res) => {



    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send("Error")
        return
    }

    const course ={
        id: courses.length + 1,
        name: req.body.name

    }
    courses.push(course)
    res.send(course)
    
})

app.put("/api/courses/:id", (req,res)=>{

      const course = courses.find((c)=> c.id === parseInt(req.params.id))
   if(!course){
       res.status(404).send("Not Found")
   }
   else return res.send(course.name)

})

//PORT - envoirnment variable, set outside of application

//process is global method, env is referencing enviornment variable and that variable is PORT
const port = process.env.PORT || 3000

app.listen(port,()=> console.log(`listening on port ${port}`))