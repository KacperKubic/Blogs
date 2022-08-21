const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root"
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) =>{
    const sqlSelect = "SELECT * FROM blogs.blogs";
    db.query(sqlSelect, (error, result) => {
        res.send(result);
    });
});

app.post('/api/post', (req, res)=>{
    const blogAuthor = req.body.blogAuthor
    const blogTitle = req.body.blogTitle
    const blogText = req.body.blogText

    
})

app.listen(3001, () => {
    console.log("working");
})