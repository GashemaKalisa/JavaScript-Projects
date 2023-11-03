/*document.write(typeof 6);//this will show that is a number*/
/*document.write(typeof"Hello world!");// this will show that it is a string*/

document.write('40'+7);// This is to use type coercion 
                        //this means to attach that number the result will be 407

function NAN_f(){
    document.getElementById('test').innerHTML=0/0;// this will result NaN as 0/0 is not possible
    document.getElementById('test').innerHTML=isNaN('01');// the result will be false
                                                        //if in isNaN()contain the string the result will be true
}
//for negative and positive infinity
function inf_and_neg_inf(){
    var infi=5E309;
    var neg_inf=-5E311;
    document.getElementById('infini').innerHTML=infi;
    document.getElementById('neg_inf').innerHTML=neg_inf;
}
//for boolean
function boole(){
    var a=10;
    var b=14;
    document.getElementById('T_or_F').innerHTML=(a>b);
    document.getElementById('T_or_Ff').innerHTML=(a<b);
}/*
function sum(x,y,z){
    return x+y+z;
   
}
console.log(sum(45,45,7));
*/

//Equal operator
function equal(){
    var s=45;
    var d=40;
    var v=85;
    var g=85;
    document.getElementById('eequal').innerHTML="is "+s+" = "+d+" " +(s==d);
    document.getElementById('iqual').innerHTML="is "+v+" = "+g+" " +(v==g);
}

//utilize ===

function triple_equal(){
    var x=40;
    var y=35;
    var z=40;
    var q="40";// as astring
    var h="hard";
    var m="soft";
document.getElementById("tripl").innerHTML="Is "+x+" === "+z+"    "+(x===z);
document.getElementById("triple").innerHTML="Is "+x+" === "+h+"    "+(x===h);
document.getElementById("triplee").innerHTML="Is "+h+" === "+m+"    "+(h===m);
document.getElementById("tripleee").innerHTML="Is "+x+" === "+q+"    "+(x===q);//" because the second "+q+" is declared as a string";

}

//AND OPERATOR

function andd(){
    var x=35;
    var y=23;
    var z=39;
    document.getElementById("an").innerHTML="is "+x+" > "+y+"and "+y+" < "+z+" "+(x>y && z>y) ;
    document.getElementById("andf").innerHTML="is "+x+" > "+y+"and "+y+" > "+z+" "+(x>y && z<y) ;
    document.getElementById("not").innerHTML="is "+x+" > "+y+" "+!(x>y);//+=;//this is not operator
}
=

