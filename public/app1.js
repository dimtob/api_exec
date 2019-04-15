/* global $ */
//var url1="https://webdev-course-dimtob.c9users.io/api/todos"
var url1="https://infinite-stream-51795.herokuapp.com/"
$(document).ready(function(){
    // fortoma json
    $.getJSON(url1)
    .then(listTodos)
    .catch(function(error){
        alert(error)
        
    })
    //eisagogh apo forma//
    $("#todoInput").keypress(function(event){
        if (event.which===13){
           createTodo();
        }
    })
    
    //delete tvn todos//
    $("ul").on("click", "span",function(event){
       event.stopPropagation();
       deleteTodos($(this).parent());
    })
    
    
    //update ta todos//
    $("ul").on("click", "li", function(){
        updatetodos($(this))
        
    })
    
})


//-----------------FUNCTIONS-------------------------//

// funtion to list all the todos me to anoigma tis selidas//
function listTodos(data){
    data.forEach(function(el){
    var newtodo=$("<li class=task>"+el.name+"<span>X</span></li>")
    newtodo.data("id", el._id)
    newtodo.data("completed", el.completed)
    if(el.completed){
        newtodo.addClass("done")
    }
    $("ul").append(newtodo)
    })
}

//create a new todo//---

function createTodo(){
    // περνω την τιμη του input
    var new1= $("#todoInput").val();
    if (new1 && /\S/.test(new1)){
    //stelno post request
    $.post(url1, {name:new1})
    .then(function(newtoto){
        //dhmiourgo neo li tsekaro ean einai completed 
        var text1=$("<li class=task>"+newtoto.name+"<span>X</span></li>")
        //bazo sto data to id
        text1.data("id", newtoto._id)
        text1.data("completed", newtoto.completed)
        if (newtoto.completed){
            text1.addClass("done")
        }
        //adeiazo to input pali
        $("#todoInput").val("");
        //kano append to li 
        $("ul").append(text1)
    })
    }else {alert("not valid input")}
}

//DELETE TO DOS//

function deleteTodos(todo){
    var deleteurl=url1+"/"+todo.data("id")
    $.ajax({
        method: "DELETE", 
        url:deleteurl})
    .then(function(data){
        todo.remove();
    })
    .catch(function(error){
        alert(error)
    })
    
}

/// UPDATE TODOS//

function updatetodos(updated){
    //save the new boolean  value (opposite)
    var updatedata=!updated.data("completed")
    //data to send with API
    var newData = {completed:updatedata}
    // get the url
    var updateurl=url1+"/"+updated.data("id")
    
    //send the put request
    $.ajax({
        method:"PUT",
        url:updateurl,
        data:newData
    })
    .then(function(updatedtodo){
       updated.toggleClass("done")
    })
    .catch(function(error){
        alert(error)
    })
    
    
}
