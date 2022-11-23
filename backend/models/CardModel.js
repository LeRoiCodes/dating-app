
import mongoose from 'mongoose';


const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
}, {timestamp:true})

export default mongoose.model('Cards', cardSchema)