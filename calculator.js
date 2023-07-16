const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname+"/index.html");
// });

// app.post("/",(req,res)=>{
//     let n1 =Number(req.body.num1);
//     let n2 = Number(req.body.num2);
//     let ans = n1+n2;
//     res.json({result: ans}); 
// });

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/bmiCalculator.html");
  });
app.post("/",(req,res)=>{
    let n1 = Number(req.body.weight);
    let n2 = Number(req.body.height);
    let ans = (n1)/(n2*n2);
    res.send(`the bmi is : ${ans}`)
})


app.listen(3000, () => {
  console.log("server started successfully");
});
