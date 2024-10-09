const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors');
const mongoose  = require('mongoose');

const port = process.env.PORT||5000
//parse options
app.use(express.json());
app.use(cors());

//routes
const blogRoutes=require("./src/routes/blog.route");
app.use("/api/blogs",blogRoutes);

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);

  app.get('/', (req, res) => {
    res.send('hotel')
  })

}
main().then(() => console.log("Mongodb connected succesfully")).catch(err => console.log(err));


//prashantyadav9407
//prashantdeepak

app.get('/', (req, res) => {
  res.send('hotel')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 