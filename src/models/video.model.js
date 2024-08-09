const mongoose = require('mongoose');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');
const videoSchema=mongoose.Schema({
   thumbnail:{type:String,required:true},
   videoFile:{type:String,required:true}, 
   Owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   },
   title:{type:String,
    required:true
   },
   duration:{
    type:Number,
    required:true
   },
   views:{
    type:Number,
    default:0
   },
   ispublished:{type:Boolean,
    default:true
   }

},{
    timestamps:true
}
)
videoSchema.plugin(mongooseAggregatePaginate)
const videoModel=mongoose.model("Video",videoSchema)