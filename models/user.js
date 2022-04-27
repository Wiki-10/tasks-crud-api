import moongose from 'mongoose'
const {Schema} = moongose

const taskSchema = new Schema({
    username: {
        type: String,
        required: true
    }

})