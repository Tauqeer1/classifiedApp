import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    profile: { type: String },
    created: { type: Date, default: Date.now() }
})

export interface IUser extends mongoose.Document {
    name: string,
    email: string,
    password: string,
    role: string,
    profile: string,
    created: Date,
    validatePassword: (password: string) => {}
}

userSchema.pre('save', function(next){
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
    return next();
});

userSchema.methods = {
    validatePassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}
export default mongoose.model <IUser> ('User', userSchema);