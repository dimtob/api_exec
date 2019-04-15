var express=require("express")
var app= express();
var toDoroutes=require("./routes/todos.js")
var bodyParser=require("body-parser")


//BODY-PARSER CONFIGURATION
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//ROUTES CONFIGURATION-
app.use("/api/todos", toDoroutes)


// APP USE PUBLIC AND VIEWS DIRECTORIES

app.use(express.static(__dirname +'/public'));
//app.use(express.static(__dirname + '/views'));


// MAIN APP ROUTE//
app.get('/', function(req, res){
    res.sendFile('views/main.html', {root: __dirname });
});




//APP PORT AND ENV IP//
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("hey we are in baby");
});