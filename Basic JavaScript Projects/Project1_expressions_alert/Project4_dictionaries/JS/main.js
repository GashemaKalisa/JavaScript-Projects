//Bellow is a dictionary 
function my_first_dictionary(){  
    var location = {    
        country:"Canada",
        provence:"Ontario",
        city:'Ottawa',
        address:'1883 walkley Rd',
    }
    delete location.city   //because is delete this will remove name of city
    document.getElementById('Dictionary').innerHTML=location.city; // without delete  
                                                                    //operator the result will be the city name
}