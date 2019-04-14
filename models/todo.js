var mongoose=require("mongoose")

var todoSchema=new mongoose.Schema({
    name:
        {
            type:String,
            required: "need to fill it"
        },
    completed:
        {
            type:Boolean,
            default: false
        },
    created:
        {
            type:Date,
            defaultStatus:Date.now
        }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;