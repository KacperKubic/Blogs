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
    const blogDescription = req.body.blogDescription
    const blogContent = req.body.blogContent
    const blogCategory = req.body.blogCategory
    
    const sqlInsert = "INSERT INTO blogs.blogs (blogAuthor, blogDescription, blogTitle, blogContent, blogCategory) VALUES (?,?,?,?,?);"
    db.query(sqlInsert, [blogAuthor, blogDescription, blogTitle, blogContent, blogCategory], (err, result) => {
        console.log(err);
    })
})

app.listen(3001, () => {
    console.log("working");
})