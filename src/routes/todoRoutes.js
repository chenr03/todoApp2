
let express = require('express');

let routes = express.Router()

let controller = require("../controllers/todoControllers");

routes.get("/todos/:id", controller.getSingleTodo);
routes.put('/todos/:id', controller.updateTodos);
routes.delete('/todos/:id', controller.deleteTodo);
routes.post('/todos', controller.createTodo);
routes.get("/todos", controller.getTodos)

module.exports = routes;