var mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/apidb", { useNewUrlParser: true });

mongoose.Promise=Promise;

module.exports.Todo = require("./todo");