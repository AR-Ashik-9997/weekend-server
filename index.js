const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.Port || 5000;
const database = require("./data/data.json");

app.listen(port, () => {
  console.log("app is ruming");
});
app.get("/alldata", (req, res) => {
  res.send(database);
});
app.get("/data/:id",(req,res)=>{
    const id=req.params.id;
    const getItem=database.find(p=>p.id==id);
    res.send(getItem);
})
module.exports=app;