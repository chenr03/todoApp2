let express = require('express');

let PORT = 8080;

let app = express();

app.use(express.json());
app.use(express.static("./public"));

// we have not defined this yet
// but thi will capture all the todo routes we have
// in one place, instead of defining the routes directly
// on the app object
let todoRoutes = require("./routes/todoRoutes");
app.use(todoRoutes);
// console.log(todoRoutes);

app.listen(PORT, function(){
    console.log('application started on port', PORT);
})

