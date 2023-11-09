function Call_Loop(){
    var y= "";
    var n="God help everyone";
    var leng=n.length;//this return the length number of the variable n
    var x=0;
    var m=document.getElementById("valu").value;
    while(x<m){
        y+="<br>"+x;
        x++;
    }
    document.getElementById("Loop").innerHTML=y;
    document.getElementById("length_id").innerHTML=leng;
}


//for loop

var Instruments=["Guitar", "Drums", "piano","Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var y;
function for_looop(){
    for(y=0;y<Instruments.length;y++){
        Content += Instruments[y]+ "<br>";
    }
    document.getElementById("list_of_Instruments").innerHTML=Content;
}


//array

function array_Function(){
    var car_name=[];
    car_name[0]="BMW";
    car_name[1]="TOYOTA";
    car_name[2]="RAVA4";
    car_name[3]="RENGEROVER";

    document.getElementById("Array").innerHTML="Manager has "+car_name[1]+" Highlider";
}

//Const Keyword Assignment

function constant_function(){
    const person_detail={name:"Antony",class:"level4",Age:25,country:"canada"};
    person_detail.country="India";
    person_detail.weight="56";
    document.getElementById("Constant").innerHTML="The student "+person_detail.name+ " who comming from "+person_detail.country+ " is a leader";
}

//let keyword

function let(){
    let x="Stress should be a powerful driving force, not an obstacle.";
    document.getElementById("let_id").innerHTML=x;
}


//for return
var a=my_return(7);
function my_return(a,){
    return a%2;
}
document.getElementById("ret").innerHTML=a;

//Object assigniment
let people={
    name:"Dolphin",// if you put semicolon you get error
    address:"west",
    age:"21",
    height:"1.87",
    all_info : function(){
        return "the name is a "+this.name+ " and has"+this.age+" is comming from "+this.address+ " and has height of "+this.height;
    }
};
document.getElementById("objc").innerHTML=people.all_info();


// for continue
function continuees(){
let y="";
for(x=0;x<15;x++){
    if(x%2==0){continue}// means count if you reach to anumber moduls 2 and remainder is zero skip and countinue
    y+=x+"<br>"
    
}
document.getElementById("continueee").innerHTML=y;
}
    
//for break

function breakk(){
    let y="";
    for(x=0;x<10;x++){
        if( x===5){break}//mean count if you reach to five stop or break
        y+=x+"<br>"
        
    }
    document.getElementById("brek").innerHTML=y;
    }