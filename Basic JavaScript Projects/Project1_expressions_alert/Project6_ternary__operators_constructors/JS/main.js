function ride_function(){
	var height, can_ride;
	height=document.getElementById('height').value;
	can_ride=(height<52) ? "You are too short":"You are tall enought";
	document.getElementById("ride").innerHTML=can_ride + " to ride.";
}


function vehicle(make, model,year,color){
    this.vehicle_make=make;
    this.vehicle_model=model;
    this.vehicle_year=year;
    this.vehicle_color=color;
}
var jack=new vehicle("Dodge","viper", 2020,"red");
var emile= new vehicle("jeep","trail",2019,"white and black");
var eric=new vehicle("ford","pinto",1971,"Mustard");
function myfuction(){
    document.getElementById("new_and_this").innerHTML="eric drives a "+eric.vehicle_color+"-colored "+eric.vehicle_model+" manifactured in "+eric.vehicle_year;
}

//nested function

function nsted(){
    document.getElementById("Nested_id").innerHTML=pluss();
    function pluss(){// this function name is similar to the one behid innerHTML
        var nmber=14;
        function minus_one(){nmber-=2;}
        minus_one(); // 
        return nmber;
    }
}