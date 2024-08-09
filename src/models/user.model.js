const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema=mongoose.Schema({
    username:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
        index:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,//cloudinary url
        required:true
    },
    coverImage:{
        type:String,//cloudinary url
        required:true
    },
    watchHistory:[
        {type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    refreshToken:{
        type:String
    }
},
{
    timestamps:true
}
)
userSchema.pre("save",function(next){
    if(this.isModified("password")){
        this.password=bcrypt.hash(this.password,10)
        next()
    }else{
        return next()
    }
})
userSchema.methods.isPasswordCorrect=async function (password) {
   return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=async function () {
    return jwt.sign(
        {
            userId:this._id,
            username:this.username,
            email:this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken=async function () {
    return jwt.sign(
        {
            userId:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
const userModel=mongoose.model("User",userSchema)