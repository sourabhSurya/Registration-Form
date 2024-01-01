import  express  from "express";

// Second method for handling 
 const asyncHandler = (requestHandler) =>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) =>next(err))
    }
 }

export {asyncHandler}

// const asyncHandler = () =>{}
// const asyncHandler =(func) => () =>{}
// const asyncHandler = (func) =>async() =>{}


// Frist method to make aync wait handler !!!!!!

// const asyncHandler = (fn) =>async (err, req,res,next) =>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(err.code || 5000).json({
//             success: false,
//             message:err.message
//         })
//     }
// }
