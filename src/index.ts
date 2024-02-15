const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");



app.use(express.json());
app.use(cors());




// app.get("/tshirt", (req:any, res:any) => {
//     res.status(200).send({
//         tshirt: "shirt",
//         size:  "large"
//     });
// });

// app.post("/tshirt/:id", (req:any, res:any) => {

//     const { id } = req.params;

//     const { logo } = req.body;

//     if(!logo){
//         res.status(418).send({message: "We need a logo!"});
//     }

//     res.send({
//         tshirt: `shirt with your ${logo} and ID of ${id}`
//     });

// });

  
  // app.post("/fluffy", async (req:any, res:any) => {
  //   try {
  //     const { name } = req.body;
  //     console.log(name);
  //     const cat = new Kitten({ name });
  //     await cat.save(); // Save the kitten to the database
  //     res.status(201).send('Kitten saved successfully');
  //   } catch (error) {
  //     console.error('Error saving kitten:', error);
  //     res.status(500).send('Error saving kitten');
  //   }
  // });


  app.use("/users", require("./routes/users"));


app.listen(
  PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
);



  
  // fluffy.speak(); 

  // const kittens =  Kitten.find(Kitten.find({ name: /^fluff/ }));
  // console.log(kittens);

  

// const UserSchema = mongoose.Schema({
//     name: String,
//     age: Number
// });

// const UserModel = mongoose.model("users", UserSchema);

// app.get("/getUsers", (req, res) => {
//     UserModel.find({}).then(function(users) {
//         res.json(users)
//     }).catch(function(err) {
//         console.log(err)
//     })
// });