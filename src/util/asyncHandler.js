const asyncHandler=(fun)=>{
    async(req,res,next)=>{
            try {
                await fun(req,res,next)
            } catch (error) {
                res.status(err.code||500).json({
                    sucess:false,
                    message:err.message
                })                
            }
}
    
}

module.exports=asyncHandler