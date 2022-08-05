const Todo = require('../models/todo_list')

// Rendering the main page

module.exports.home = function(req,res){

    Todo.find({},function(err,todos){
        if (err){
            console.log('error in fetching');
            return;
        }
        let result = []
        for(let i=0; i<todos.length; i++){
            let object ={
                id: todos[i].id,
                task: todos[i].task,
                category: todos[i].category,
                dueDate: todos[i].dueDate.toDateString()
            } 
            result.push(object);
        }
        return res.render('home',{
            title: "todo_list",
            todo_list: result
        });
    })
};

// Addition of the task to the todo list

module.exports.newtask = function(req,res){
    Todo.create({
        task: req.body.description,
        category: req.body.category,
        dueDate: req.body.date
    },(err,newTask)=>{
        if(err){
            console.log('Error in creating the task');
            return;
        }
        console.log('Task added')
    });
    return res.redirect('/')
}

// Deletion of the task from the todo list

module.exports.delete = function(req,res){
    let {id} = req.query;
    let content = id.split(",");
    content.map((obj)=>{
        Todo.findByIdAndDelete(obj, function(err){
            if(err){  
                return;
            }    
            console.log('Task deleted')   
        });
    })
    return res.redirect('/');
}
