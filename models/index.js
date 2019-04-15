var mongoose=require("mongoose")
//mongoose.connect("mongodb://localhost/apidb", { useNewUrlParser: true });
mongoose.connect("mongodb+srv://dimtob:dimtob@cluster0-pam4t.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });
mongoose.Promise=Promise;

module.exports.Todo = require("./todo");

