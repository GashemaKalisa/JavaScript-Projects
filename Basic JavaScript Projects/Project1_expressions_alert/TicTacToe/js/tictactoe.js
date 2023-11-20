//This variable keeps track of whose turn it is.
let activePlayer='X';
//This array stores an array of moves. we use this to determine win conditions.
let selectedSquares= [];

//This function is for placing an z or o in a square.
function placeXoro(squareNumber){
    //This condition ensures a square hasn't been selected alredy.
    //The.some()method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if(!selectedSquares.some(element=>element.includes(squareNumber))){
        //This variable retrieves the HTML element id that was clicked.
        let select=document.getElementById(squareNumber);
        //This condition checks who's turn it is .
        if(activePlayer==='X'){
            //if activePlayer is equal to 'x' the x.png is placed in HTMl
            select.style.backgroundImage='url("images/xx.png")';
            //Active Player may only be 'X' or 'o', so, if not 'x' it must be 'o'
        }else{
            //If activePlayer is equal to 'o', the o.png is placed in HTML
            select.style.backgroundImage= 'url("images/oo.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber+activePlayer);
        //This calls a function to check for any win condition.
        checkWincondition();
        //This condition is for changing tyhe active player.
        if(activePlayer=='X'){
            //if active player is 'X' change to 'o'.
            activePlayer='O';
            //if active player is anything other than 'X'
        }else{
            //change the activePlayer tp 'X'
            activePlayer='X';
        }
        //This function plays placement sound.
        audio('media/placee.wav');
        //This condition checks to see if it is the computers turn.
        if (activePlayer==='O') {
            //This function disables clicking for computer turn.
            disableClick();
            //This function waits 1 second before the computer places an imag and enables click.
            setTimeout(function(){computersTurn();},1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    //}
//This funtion results in a random sqaure being selected by the computer.
function computersTurn(){
    //This boolean is needed for our while loop.
    let success = false;
    //This variable store a random number 0-8.
    let pickASquare;
    //This condition allows our while loop to keep trying if a square is selected already.
    while (!success){
        //A random number between o and 8 is selected.
        pickASquare = String(Math.floor(Math.random()*9));
        //If the random number evaluated returns true, the square hasn't been selected yet.
        if (placeXoro(pickASquare)) {
            //This line calls the function.
            placeXoro(pickASquare);
            //This changes our boolean and ends the loop.
            success = true;
        };
    }
}     
    }
}
//This function parses the selectedSquares array to search for win contions.
//drawline()funtion is called to draw a line on the screen if the condition is met.
function checkWincondition(){
    //X 0, 1, 2 condition.
    if (arrayIncludes('0X','1X','2X')) {drawWinLines(50,100,558,100)}
    //X 3, 4, 5 condition.
    else if(arrayIncludes('3X','4X','5X')){ drawWinLines(50,304,558,304)}
    //X 6,7,8 conditon.
    else if (arrayIncludes('6X','7X','8X')){drawWinLines(50,508,558,508)}
    //X 0, 3, 6, condition.
    else if (arrayIncludes('0X','3X','6X')){drawWinLines(100,50,100,558)}
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X','4X','7X')){drawWinLines(304,50,304,558)}
    // X 2,5, 8 conditon.
    else if (arrayIncludes('2X','5X','8X')){drawWinLines(508,50,508,558)}
    //x 6,4,2 condition.
    else if (arrayIncludes('6X','4X','2X')){drawWinLines(100,508,510,90)}
    //X 0, 4, 8 condition.
    else if(arrayIncludes('0X','4X','8X')){drawWinLines(100,100,520,520)}
    //O 0, 1, 2 condition.
    else if (arrayIncludes('0O','1O','2O')){drawWinLines(50,100,558,100)}
    //O 3, 4, 5 condition.
    else if(arrayIncludes('3O','4O','5O')){drawWinLines(50,304,558,304)}
    //O 6, 7, 8 condition.
    else if (arrayIncludes('6O','7O','8O')){drawWinLines(50,508,558,508)}
    //O 0, 3, 6 condition.
    else if (arrayIncludes('0O','3O','6O')){drawWinLines(100,50,100,558)} 
    //O 1,4, 7 condition.
    else if (arrayIncludes('1O','4O','7O')){drawWinLines(304,50,304,558)}
    //O 2, 5,8 condition.
    else if (arrayIncludes('2O','5O','8O')){drawWinLines(508,50,508,558)}
    //O 6, 4, 2 condition.
    else if (arrayIncludes('6O','4O','2O')){drawWinLines(100,508,510,90)}
    //O 0,4 ,8 condition.
    else if (arrayIncludes('0O','4O','8O')){drawWinLines(100,100.520,520)}
    //This condition checks for a tie.If none of the above conditions are met and
    //9 squares are selected the code executes.
    else if (selectedSquares.length>=9){
        //This funtion plays the tie game sound.
        audio('media/tiee.wav');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function(){resetGame();},500);
    }
    //This function checks if an array includes 3 strings.It is used to check for
    //each win condition.
    function arrayIncludes(squareA,squareB, squareC){
        //These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variable we pass are all included in our array then
        //true is retruned and our else if condition executes the drawLine() function/
        if(a ===true && b ===true && c===true){return true;}
    }
}

// This function makes our body element temporarily unclickable.
function disableClick(){
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function(){body.style.pointerEvents= 'auto'; },1000);
}

//This funtion takes a string parameter of the path you set earlier for
//placement sound(media/place.mp3)
function audio(audioURL){
    //We create a new audio object and we pass the path as a parameter.
    let audio=new Audio(audioURL);
    //Play method plays our audio sounds.
    audio.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLines(coordX1,coordY1, coordX2,coordY2){
//This lines accessses our HTML canvas element.
const canvas = document.getElementById('win-lines');
//This lines gives us access to methods and properties to use on canvas.
const c = canvas.getContext('2d');
//This line indicates where the start of a lines x axis is.
let x1=coordX1,
//This line indicates where the start of a lines y axis is.
    y1=coordY1,
//This line indicates where the end of a lines x axis is.
    x2=coordX2,
//This line indicates where the end of a lines x axis is.
    Y2= coordY2,
    //This variable store temporary x axis data we update in our animation loop.
    x=x1,
    //This variable stores temporary y axis data we update in our animation loop.
    y=y1;
    //This function interacts with the canvas.
function animateLineDrawing(){
    //This variable creates a loop.
    const animationLoop=requestAnimationFrame(animateLineDrawing);
    //This method clears content from the last loop iteration.
    c.clearRect(0,0,608,608);
    //This method starts a new path.
    c.beginPath();
    //This method moves us to a strating pint in our line.
    c.moveTo(x1, y1);
    //This method indicats the end point in our line.
    c.lineTo(x,y);
    //This method sets the width of our line.
    c.lineWidth = 10;
    //This method sets the color of our line.
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    //This method draws everything we laid out above.
    c.stroke();
    //This condition checks if we've reached the end points.
    if(x1<=x2 && y1<=Y2){
        //This condition adds 10 to the previous end x endpoint.
        if(x < x2){x +=10;}
        //This condition adds 10 to the previous end y endpoint.
        if(y < Y2){y +=10;}
        //This condition is similar to the one above.
        //This is necessary for the 6, 4, 2 win condition.
        if(x >= x2 && y >=Y2){cancelAnimationFrame(animationLoop);}
    }
    //This condition is similar to the one above.
    //This is neccessary for the 6, 4, 2 win condition.
    if (x1 <= x2 && y1>=Y2) {
        if(x < x2){x +=10;}
        if(y > Y2){y -=10;}
        if(x >= x2 && y<=Y2){cancelAnimationFrame(animationLoop);}
    }
}
//This function clears our canvas after our win line is drawn.
function clear(){
    //This line starts our animation loop.
    const animationLoop = requestAnimationFrame(clear);
    //This line clear our canvas.
    c.clearRect(0,0,608,608);
    //This line stops our animation loop.
    cancelAnimationFrame(animationLoop);
}
//This line disallows clicking while the win sounds is  playing
disableClick();
//this line plays the win sounds.
audio('media/winGamee.wav');
//This line calls our main animation loop.
animateLineDrawing();
//This line waits 1 second. Then, clears canvas, resets game, an allows clicking again.
setTimeout(function(){clear();resetGame();},1000);
}

//This function resets the game in the event of a tie or a win.
function resetGame(){
    //This for loop iterats through each HTML square element.
    for (let i = 0; i < 9; i++){
        //This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage.
        square.style.backgroundImage = '';
    }
    //This rests our array so it is empy and we can start over.
    selectedSquares = [];
}
