var express=require("express");
var router= express.Router();
var db=require("../models")
var fExports=require("../helper/middleF.js")


// GET ROUTE
router.get("/", fExports.getTodos)


//POST ROUTE
router.post("/", fExports.postTodos)


//SHOW ROUTE
router.get("/:todoID", fExports.showTodos)


//UPDATE ROUTE-PUT ROUTE

router.put("/:todoID", fExports.putTodos)


//DELETE ROUTE 

router.delete("/:todoID", fExports.deleteTodos)


module.exports=router