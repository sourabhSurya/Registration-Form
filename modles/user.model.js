import mongoose, {Schema} from "moongoose";

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        fullname:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avtar:{
            type:String,    // Cloudinary Url
            required:true,
        },
        coverimage:{
            type:String   //Cloudinary Url
        },
        watchHistory:[
            {
              type:Schema.type.ObjectId,
               ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true,'Password is requred']
        },
        refreshToken:{
            type:String
        },

        
        
       
    },
    {
            timeStamps:true
    }
)
userSchema.methods.genrateAccessToken =  function(){
    return JsonWebTokenError.sign(
        {
            _id: this_.id,
            email : this.email,
            username : this.username,
            fullname : this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.genrateRefreshToken = function(){
    return JsonWebTokenError.sign(
        {
            _id : this._id
        },
        process.enc>REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.models("User" , userSchema)