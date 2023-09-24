import subscriber from "../models/subscriber";

exports.getAllSubscribers = (req, res) => {
    // subscriber.find({}, (error, subscribers) => {
    //     if (error) next(error)
    //     req.data = subscribers
    //     next()
    // })
    subscriber.find({})
        .exec()
        .then((subscriber) => {
            res.render("subscribers", {
                subscriber: subscriber
            })
        }).catch((error) => {
            console.log(error.message);
            return []
        })
        .then(() => {
            console.log("promise complete");
        })
};

exports.getSubscriptionPage = (req, res) => {
    res.render('contact')
};
exports.saveSubscriber = (req, res) => {
    let newSUbscriber = new subscriber({
        name: req.body.name,
        email: req.body.email,
        zipcode: req.body.zipCode
    })


    // newSUbscriber.save((error, result) => {
    //     if (error) res.send(error)
    //     res.render("thanks")
    // })
    newSUbscriber.save()
        .then(result => {
            res.render("thanks")
        })
        .catch(error => {
            if (error) res.send(error)
        })

}
