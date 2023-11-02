/*function addition_f(){
    var addition = 2+2;
    document.getElementById("Math").innerHTML="2+2="+addition;
}
*/
function sum(){
    var addi=40+20;
    document.getElementById('Math').innerHTML='The sum of 40+20 is '+addi;
}
//for the subtruction

function sub(){
    var subtruction=60-20;
    var ssub="60-20";
    document.getElementById('Mathe').innerHTML="The subtraction of "+ssub+" = "+subtruction;
}

//For the Multiplication 

function product(){
    var numbers=40*20;
    var nnumbers="40*20";
    document.getElementById('both').innerHTML="The product of "+nnumbers+" = "+numbers;
}

//for the division

function quotient(){
    var numbers=40/20;
    var nnumbers="40/20";
    document.getElementById('divi').innerHTML="The quatient of "+nnumbers+" = "+numbers;
}
//for modulus
function modulus(){
    var nu=7%2;
    var mo="7%2";
    document.getElementById('modul').innerHTML="The modulus of "+mo+" = "+nu;
}

//For multiple operation

function more_numers(){
    var those_numbers=(5*9)/3+5-2;
    var Those_numbers='(5*9)/3+5-2';
    document.getElementById('more').innerHTML="The result of this operation "+Those_numbers+" = "+those_numbers;
}

//For the negation_operator

function negation(){
    var those_numbers=(5*9)/3+5-2;
    var Those_numbers='(5*9)/3+5-2';
    document.getElementById('neg').innerHTML="The result of this negation operation "+Those_numbers+" = "+ -those_numbers;
}

//For increment

function incre(){
    var x=15;
    ++x;//If we increament after the valuable also it can works you gonna see at the below example
    var y=15;
    document.getElementById('incream').innerHTML='If we do the increament of '+y+" we get "+x;
}

//For deincrement

function dencre(){
    var x=15;
    x--;// if we decrement before the variable also it can work as I did at the above example
    var y=15;
    document.getElementById('dencream').innerHTML='If we do the dencreament of '+y+" we get "+x;
}

//For random number

function rand(){
    document.write(Math.random()*5);
    document.getElementById('radom').innerHTML=rand;
}

//For math Object

//for pow

function po(){
    var m=8;
    var n=Math.pow(m,2);
    document.getElementById('power').innerHTML="The power 2 of "+m+" = "+n;
}
//for squareroot

function square(){
    var l=81;
    var p=Math.sqrt(l);
    document.getElementById('squar').innerHTML="The squareroot of "+l+" = "+p;
}

//for maxmum 

function mxx(){
    var h=45;
    var j=87;
    var o=92;
    var maxim=Math.max(h,j,o);
    document.getElementById('min_max').innerHTML="The maxmum of "+h+ " and "+j+" and "+o+" = "+maxim;
    
}