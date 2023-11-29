
/*//stingfy
function na(){
var obj = { "name":"Gashema", "age":10, "city":"Ottawa"};
var myJSON = JSON.stringify(obj);
document.getElementById("names").innerHTML = myJSON;
};
 function pars(){
var dog = '{"name":" Dax", "breed": " Greet Pyrebees", "color":" white"}';
var JSONstring = JSON.parse(dog);
document.getElementById("nam").innerHTML = JSONstring.name + "the" + JSONstring.breed;
};
function localstor(){
//set the data as a key/value pair to be saved locally in your browser
localStorage.setItem("Name", "Dax");
//then use the key "Name" to return its value "Dax"
document.getElementById("localstorage").innerHTML = localStorage.getItem("Name");
};
*/

/*This function gets the task from input*/

function get_todos(){
    /*this creates an array if task that are inputed*/
    var todos = new Array;
    //this pulls the task that was saved in the wev browser memory
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null then JSON.parse will
    communitcate with the browser to make the task a Java Script objet. */
    if (todos_str !== null) {
        todos=JSON.parse(todos_str);
    }
    return todos;
}

/*This function adds the inputed task to the get_todos function array */

function add(){
    //This takes the inputed task and creates a variable of it
    var task = document.getElementById('task').value;
    var todos = get_todos();
    //this adds a new task the end of the Array
    todos.push(task);
    //This converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value= "";
    show();
    return false;
}

//this functionkeeps the tasks permanently displayed on the screen
function show(){
    //this sets the task that was retrieved as a variable
    var todos = get_todos();
    //This this sets up each task as an unordered list
    var html = '<ul>';
    //this displays a task to the list in the order that it is inputed
    for (var i = 0; i < todos.length; i++) {
        //this also displays the task as a list and creates the button with the "X"
        html += '<li>' + todos[i] + '<button class = "remove" id="'+ i+ '">x</button></li>';
    };
    html += '</ul';

    //This tells the browser how to display the todo array after an item has been remove
     var buttons = document.getElementsByClassName('remove');
     for (var i = 0; o < buttons.length; i ++){
        buttons[i].addEventListener('click'. remove);
     };
    //This displays the task as a list
    document.getElementById('todos').innerHTML = html;
}

//This displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener("click", add);
//this will keep the inputs dispalyed permentaly on the screen
show()

//this creates the functionality of removing a todo item from the array
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    //this looks in the show() how to display a removed item on the creen
    show();
    return false;
}