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

//Selecting all of the blogs from database
app.get('/api/get', (req, res) =>{
    const sqlSelect = "SELECT * FROM blogs.blogs";
    db.query(sqlSelect, (error, result) => {
        res.send(result);
    });
});

//Selecting a specific blog from the database based on their id
app.get('/api/blogDetails/:id', (req, res) =>{
    const id = req.params.id;
    const sqlSelect = "SELECT * FROM blogs.blogs WHERE id=?";
    db.query(sqlSelect, [id], (error, result) => {
        res.json(result)
    })
});

//Selecting blogs based on their category 
app.get('/api/getByCategory/:blogCategory', (req, res) =>{
    const blogCategory = req.params.blogCategory;
    console.log(blogCategory)
    //If blog category is any return all the blogs
    if(blogCategory === "*"){
        const sqlSelect = "SELECT * FROM blogs.blogs";
        db.query(sqlSelect, (error, result) => {
            res.send(result);
        }) 
    }else{
        const sqlSelect = "SELECT * FROM blogs.blogs WHERE blogCategory=?";
        db.query(sqlSelect, [blogCategory], (error, result) =>{
        res.send(result);
    })
    }
});

//Adding the blog into the database
app.post('/api/post', (req, res)=>{
    //Create variable with data passed by the user on client side
    const blogAuthor = req.body.blogAuthor
    const blogTitle = req.body.blogTitle
    const blogDescription = req.body.blogDescription
    const blogContent = req.body.blogContent
    const blogCategory = req.body.blogCategory
    
    //SQL query
    const sqlInsert = "INSERT INTO blogs.blogs (blogAuthor, blogDescription, blogTitle, blogContent, blogCategory) VALUES (?,?,?,?,?);"
    db.query(sqlInsert, [blogAuthor, blogDescription, blogTitle, blogContent, blogCategory], (err, result) => {
        console.log(err);
    })
});

app.listen(3001, () => {
    console.log("working");
});