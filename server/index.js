const express=require('express')
const app=express()
const PORT=3001
const cors=require('cors')
const mysql=require('mysql')
app.use(cors())
app.use(express.json())
const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'TekupAdmin2020',
    database:'PasswordManager'
});
app.post('/addPassword',(req,res)=>{
    const {password,title}=req.body;
    db.query(`INSERT INTO passwords (password, title) VALUES (?,?)`,
    [password,title],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send('success')
        }
    });
});

app.listen(PORT,()=>{
    console.log('server is running .....')
})