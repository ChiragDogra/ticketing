import mongoose from 'mongoose';

// To check the type of arguments that are going to be passed while creating user
// We're going to create an interface that describes the properties 

interface UserAttrs {
    email: string;
    password: string;
}

//An interface that describes the properties that a user model has
interface UserModel extends mongoose.Model<any>{
    build(attrs: UserAttrs): any;
}

//An interface that describes the properties that a user document has
interface UserDoc extends mongoose.Document{
    email: string;
    password: string; 
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true 
    }, 
    password: {
        type : String,
        required: true
    }
})

// making a build in function in the userSchema itself
userSchema.statics.build = (attrs: UserAttrs) =>{
    return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export {User};

