const mongoose = require('mongoose');

const PostsSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    summary:{
        type:String,
        require:true
    }
}, { collection: 'displayMovie' })

module.exports = mongoose.model('displayMovie',PostsSchema);