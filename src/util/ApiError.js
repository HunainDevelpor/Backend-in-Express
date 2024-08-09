class ApiError extends Error{
    constructor(
        statuscode,
        message="Something went Wrong",
        error=[],
        statck=""
    ){
        super(message)
        this.statuscode=statuscode
        this.message=message
        this.success=false
        this.errors=error
        this.data=null
        if (statck) {
            this.stack=statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}
module.exports=ApiError