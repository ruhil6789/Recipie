
var courses=[
    {
        title:"Javascript",
        cost:4000
    
    },
    {
        title:"css",
        cost:2000
    
    },
    {
        title:"Golang",
        cost:4000
    
    },
];

const showCourses=(req,res)=>{
     
    // render the page in the views/courses.ejs 
 res.render("courses",{
    offeredCourses:courses
 })

};

const showSignUp=(req,res)=>{
    res.render("contact")
};


const postedSignUpForm=(req,res)=>{
    res.render("thanks")
}

exports.module={
    showCourses,
    showSignUp,
    postedSignUpForm
}


