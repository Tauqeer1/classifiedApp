import * as mongoose from 'mongoose';
import User from '../user/user.model';
const Schema = mongoose.Schema;

const postSchema = new Schema({
    category: { type: String, required: true },
    ad_title: { type: String, required: true },
    brand_name: { type: String, required: true },
    brand_description: { type: String },
    images: { type: String, default: '' },
    price: { type: Number, required: true },
    posted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created: { type: Date, default: Date.now() }
})

export default mongoose.model('Post', postSchema);