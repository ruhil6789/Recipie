import httpStatus from "http-status-codes"

exports.pageNotFoundError = (req,res)=>{
let errorCode = httpStatus.NOT_FOUND
res.status(errorCode)
res.render("error")
};


exports.internalServerError =(error,req,res,next)=>{
    let errorCodes = httpStatus.INTERNAL_SERVER_ERROR
    res.status(errorCodes)
    console.log(`Error occured ${error.stack}`);
    res.status(errorCodes)
    res.send(`${errorCodes} | Sorry our application is taking a nap!`)
};

// modules.exports={
//     pageNotFoundError,
//     internalServerError
// }