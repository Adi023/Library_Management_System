const connection = require('./db');
var express=require('express')
// var router=express.Router()
var app =express();
var bodyparser=require('body-parser')

//npm i cors
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))


app.post('/',(req,res,next)=>{
    res.render('adminhomepage')

})
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/add',(req,res)=>
{ 
    connection.query("insert into Books set ?",[req.body.e],(error,res)=>{})
     
     console.log("data inserted")   
})

app.post('/delete',(req,res)=>
{
    connection.query("delete from Books where ISBN=?",[req.body.a.ISBN],(error,result)=>{
        console.log("data deleted")
    })
    
})

app.get('/edit/:ISBN',(req, res) => {
    console.log("==="+(req.params.ISBN))
    connection.query("select * from  Books where ISBN=? ",[req.params.ISBN],(error,result)=>{
      res.json(result)
    })
 
  })
app.post('/update',  (req, res) => {
    console.log("update on server")
    connection.query("update Books set ? where ISBN=?",[req.body.d,req.body.d.ISBN],(error,result)=>{
     res.send(result)
    })
    })
    

app.get('/view',(req,res)=>
{
 connection.query("select * from Books",(error,result)=>{
    res.send(result);
 })
})


app.get('/search',(req,res)=>
{
 connection.query("select * from Books",(error,result)=>{
    res.send(result);
 })
})


app.listen(8001)