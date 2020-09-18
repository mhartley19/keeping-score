const express = require('express')

const app = express()

const port = 3000

app.use(express.json())

const scores =  [
    {
    name: 'Edwin',
    score: 50
    },
    {
    name: 'David',
    score: 39
    }
]



app.get('/',(req,res) => {
    res.send("Scores Assessment")
})

app.get('/scores',(req,res) => {
    let topThree = scores.map(eachScore => eachScore.score)
    topThree.sort(function(a, b){return b - a});
    res.send(topThree.slice(0,3))
})

app.post('/scores', (req, res) => {
    res.statusCode = 201
    const newPlayer ={
        name: req.body.name,
        score: req.body.score

    }
    
    scores.push(newPlayer)   
    res.send(newPlayer)
    
    
})

app.listen(port)