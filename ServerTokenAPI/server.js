const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const jwt = require("jsonwebtoken")
const cors = require('cors');
const jwtKey = "my_secret_key"
const jwtExpirySeconds = 3000 //5 //300
let userData=[];
const userType={
    customer:1,
    employee:2
}
const users = [{
    firstName:'admin1',
    userId:1,
	userName: "admin1",
    password: "123"
},
{
    firstName:'admin2',
    userId:2,
	userName: "admin2",
    password: "123"
}]

// Read json encoded body data
app.use (express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin:'*',
      credentials: true,
    })
  )

app.post("/signin", (req, res)=>{
    const { UserName, Password } = req.body
    try{
    if(!UserName){
        throw new Error('Invalid username');
    }
    if(!Password){
        throw new Error('Invalid password.');
    }
    let filterUsers=users.filter(x=>x.userName===UserName && x.password===Password);
    if(filterUsers.length==0){
        throw new Error('Invalid creadentials.')
    }
        const token = jwt.sign({userId:filterUsers[0].userId,firstName:filterUsers[0].firstName}, jwtKey, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
        res.send({token:token});
        res.end()
    }
    catch (err) {
        res.send({
          error: `${err.message}`,
        });
      }
})



app.listen(port, () => {
    console.log("Listening on port %s...", port);
});


