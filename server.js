const express = require('express')
const app = express()
const port = 3000 //main port
const path = require('path');
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Returns the message 
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying!')
})

//change URL to display Hello (localhost:3000/hello)
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name) // Request Parameter with name
    res.send('Hello ' + req.params.name); //Display message with Hello and (name)
})//end of hello: name 

//Part 5
app.get('/api/movies', (req, res) => {
    const mymovies = [ // array holds all the information
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];//End of array

    res.json({ movies: mymovies });//Display movie list

})//End of api movies

//Part 6
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');//Display html page from index.html
})//end of test

//Part 7
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);// Display firstname lastname with a message 
})//end of name 

//Post Method Part 8
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})//end of post (need to install body-parser)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})