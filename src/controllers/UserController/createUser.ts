//const User = require("../../models/User");
import { User } from "../../models/User";

export async function createUserController(req: any, res: any){

    try {
        const { name, age } = req.body;
        
        if(!name){
          throw new Error("name is required");
          
        }
        if(!age){
          throw new Error("age is required");
        
        }
        
        const user = new User({
          name: name,
          age: age
        });
        await user.save(); 
        res.status(201).send('User saved successfully');
      } 
      catch (error:any) {
        console.log(error);
        res.status(500).send(`Error saving user: ${error.message}`);
      }
}