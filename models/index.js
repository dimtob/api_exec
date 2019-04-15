var mongoose=require("mongoose")
//mongoose.connect("mongodb://localhost/apidb", { useNewUrlParser: true });
mongoose.connect("mongodb+srv://todoDB:Skyvalley!@cluster0-pqbnr.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });
mongoose.Promise=Promise;

module.exports.Todo = require("./todo");

