import mongoose from "mongoose";
import subscriber from "./models/subscriber";
mongoose.connect(
    "mongodb://localhost:27017/recipie",
    {useNewUrlParser:true}
)

mongoose.connection
var contacts =[
    {
        name:"gggg",
        email:"aaaa@gmail.com",
        zipcode:909090
     },
     {
        name:"aaaa",
        email:"gggg@gmail.com",
        zipcode:999999
     },
     {
        name:" bvbv",
        email:"bvbva@gmail.com",
        zipcode:99999
     }
]

subscriber.deleteMany()
    .exec()
    .then(()=>{
        console.log("subscriber data is empty");
    })

 
var commands =[]
contacts.forEach((c)=>{
    commands.push(subscriber.create({
        name:c.name,
        email:c.email
    }))
})    

Promise.all(commands)
   .then(r=>{
    console.log(JSON.stringify(r));
    mongoose.connection.close()
   })
   .catch(error=>{
    console.log(`error: ${error} `);
   })