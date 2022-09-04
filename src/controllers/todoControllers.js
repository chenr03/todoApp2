//1
let getTodos =

    function(request, response){
        console.log ("GET /todos");
        response.send("from GET /todos")
    }

//2
let getSingleTodo =

    function(request, response){
        console.log ("GET /todos");
        response.send("from GET /todos")
    }

//3
let createTodo =

    function(request, response){
        console.log ("POST /todos");
        response.send("from POST /todos")
    }

//4
let deleteTodo =

    function(request, response){
        console.log ("DELETE /todos");
        response.send("from DELETE /todos")
    }

//5
let updateTodo =

    function(request, response){
        console.log ("PUT /todos");
        response.send("from PUT /todos")
    }

module.exports = {getTodos, getSingleTodo, createTodo, deleteTodo, updateTodo};




