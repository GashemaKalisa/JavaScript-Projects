//cocant methods

function cocant_metho(){
    var dt="My_name is ";
    var f_name="Gashema ";
    var l_name="Kalisa";
    var age=" I am 24 years old";
    var location=" I live ottawa";
    var all_data=dt.concat(f_name,l_name,age,location);
    document.getElementById("information").innerHTML=all_data;
}
//slice() Method

function slice_method(){
    var my_sons="First is Eric and second is Hazard and the last is Faustin";
    var resl=my_sons.slice(9,13);
    document.getElementById("slice_id").innerHTML="my fist son is "+resl;
}

//toUpperCase() method.

function upper(){
    var sent="beleive in god the remaining will be blessings";
    var upp=sent.toUpperCase();
    var searc=sent.search("blessings");//  search() method this will return the position of the world in the sentence
    document.getElementById("uppercases").innerHTML=upp;
    document.getElementById("search").innerHTML=searc;

}

//number to string
function number_to_string(){
    var x=45;
    var y=x.toString()
    document.getElementById("number_to_st").innerHTML=y;
}
//toPrecision() method 
function precision(){
 var x=2547.15267;
 var y=x.toPrecision(6);// this will return 6 number as mentioned in bracket
 var n=x.toFixed(3);//toFixed() converts a number to a string, rounded to a specified number of decimals:
                    // if the fixed number is munch more it add zeros
var for_value=x.valueOf();//valueOf()returns the primitive value of variable
 document.getElementById("precis").innerHTML=y;
 document.getElementById("fixd").innerHTML=n;
 document.getElementById("for_value").innerHTML=for_value;
}
