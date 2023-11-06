//global variable
var y=10;
function first_number(){
    document.getElementById("y_value").innerHTML="in Total is "+(y+45);
}
// for local variable
function second_number(){
    var z=20;
    document.getElementById("z_variable").innerHTML="in Total is "+(z+45);
}

//for console
function add_number(){
    var x=10;
    console.log(15+x);
}
function add_another(){
    var x=50;
    console.log(x+100);
}
add_another();

//if statement
function gt_dt(){
    if (new Date().getDate()<18){
        document.getElementById("greeting").innerHTML="The date of today is among the end of date of month";
    }
}

//my if statement
var age=25
function num(){ 
if(age>21){
    //document.write("you have to stay");
    document.getElementById('age').innerHTML="you have to stay";
}
}

//if else statement with else if

function marks_function(){
    var markss=document.getElementById("markss").value;
    if(markss>=70){
        result="you pass!";
        document.getElementById('display_mark').innerHTML=result;
    }
    else if(markss>=50){//else if statement start here
        result="retake";
        document.getElementById("display_mark").innerHTML=result;
    }
    else{
        result="you fail";
        document.getElementById('display_mark').innerHTML=result;
    }
}