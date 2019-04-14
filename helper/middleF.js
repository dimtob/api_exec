var db=require("../models")

exports.getTodos=function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos)
    })
    .catch(function(error){
        res.send("error")
    })
}

exports.postTodos=function(req,res){
    console.log(req.body)
   db.Todo.create(req.body)
   .then(function(newtodo){
      res.status(201).json(newtodo)
   })
  .catch(function(error){
      res.send(error)
   })
}


exports.showTodos=function(req, res){
    db.Todo.findById(req.params.todoID)
    .then(function(found){
        res.json(found)
    })
    .catch(function(error){
        res.send(error)
    })
}


exports.putTodos=function (req, res){
    db.Todo.findOneAndUpdate({_id:req.params.todoID}, req.body, {new:true})
    .then(function(updated){
        res.json(updated);
    })
    .catch(function(error){
        res.send(error)
    })
}


exports.deleteTodos=function(req,res){
    db.Todo.findOneAndRemove({_id:req.params.todoID})
    .then(function(removed){
        res.json(removed);
    })
    .catch(function(error){
        res.send(error)
    })
}

module.exports=exports;