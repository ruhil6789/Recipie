import express from "express";
import homeController from "./controllers/homeController"
import errorController from "./controllers/errorController"
import layouts from "express-ejs-layouts"
import mongodb from "mongodb"
import mongoose from "mongoose";
import subscriber from "./models/subscriber";
import subscribers from "./controllers/subscriberController"

const app = express()
app.set("port", process.env.PORT || 3000)

app.set("view engine", "ejs")
app.use(layouts)
app.use(express.static("public"))
// route for our home pages
app.get("/", (req, res) => {
    res.send("Welcome to our Website")
})
//  tell the expressjs app to use body parser for processing URL encoded and JSON parameters
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
//  error handeling
app.use(errorController.pageNotFoundError)
app.use(errorController.internalServerError)


app.get("/courses", homeController.showCourses)
app.get("/contact", homeController.showSignUp)
app.post("/contact", homeController.postedSignUpForm)

//  connecting to the database
const mongod = mongodb.MongoClient
const dbURL = "mongodb://localhost:27017"
const dbName = "recipie"

mongod.connect(dbURL, (error, client) => {
    if (error) throw error
    let db = client.db(dbName)
    db.collection("contacts")
        .find()
        .toArray((error, data) => {
            if (error) throw error;
            console.log(data)
        })


    db.collection("contacts")
        .insert({
            name: "Hello",
            email: "ruhil@gmail.com"
        }, (error, db) => {
            if (error) throw error
            console.log(db);
        }

        )
})



// mongoose  is a odm  that allow you to run mongodb commands in a away thgat preserves object oriented structure of your app.
mongoose.connect(
    "mongodb://localhost:27017/recipiedb",
    { useNewUrlParser: true }

)
const db = mongoose.connection
db.once("open", () => {
    console.log(" Successfully connected to the mongodb using mongoose")
})
// const subscriberSchema = mongodb.Schema({
//     name:String,
//     email:String,
//     zipCode:Number
// })

const subscriber1 = new subscriber({
    name: "abcdeee",
    email: "dsa@gmail.com"
})

subscriber1.save((error, savedDocument) => {
    if (error) console.log(error)
    console.log(savedDocument);

})
subscriber.create({
    name: "hello",
    email: "hello@hgmail.com"
},
    function (error, savedDocument) {
        if (error) console.log(error);
        console.log(savedDocument);
    }
)

var myQuery = subscriber.findOne({
    name: "hello nice"

}).where("email", /nice/);
myQuery.exec((error, data) => {
    if (data) console.log(data.name); 1
})

app.get("/subscribers", subscribers.getAllSubscribers, (req, res, next) => {
    res.send(req.data)
})

app.get("/contact", subscribers.getSubscriptionPage);
app.post("/subscribe", subscribers.saveSubscriber)

app.listen(app.get("port", () => {
    console.log(`Server  running  on http://localhost:${app.get(
        "port"
    )}`
    );
}))