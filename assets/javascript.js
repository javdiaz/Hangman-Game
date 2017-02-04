		// wordList array
		var wordList = ["stegosaurus", "triceratops", "velociraptor", "brontosaurus", "pterosaurus", "dilong"]; 
    	//provides a fun hint to help with the guess
 		var fact0 = "I have a club for a tail!";
 		var fact1 = "My horns stand for three!";
 		var fact2 = "Ever been disembowled?";
 		var fact3 = "I'm really big!";
 		var fact4 = "I love to soar to new heights!";
 		var fact5 = "I had feathers before they were cool!"
 		var dead = "TOO LATE!! WE HAVE BECOME EXTINCT!!";
 		var canYou = "Can You Guess Who I Am?";
 		//var which sets a number of guesses counter
 		var startTries = 13;

 		// variable canyou places a game challange phrase, at the end of the game if the user losses it changes to variable dead
 		document.getElementById("canyouguess").innerHTML = canYou;
 
 		//computer selects a word from the wordList array 
 		var computerWord = wordList[Math.floor(Math.random() * wordList.length)];
 		document.getElementById("computerword").innerHTML = computerWord;

 	// 	for (var i = 0; i < wordList.length; i++){
		// wordList[i] = "_ ";
		// }

   		//if sttement that matches the selected word to a hint fact abou the dinosaur being guessed
 		if (computerWord == wordList[0]) {
  		document.getElementById("dinohint").innerHTML = fact0;
 		}
  		else if (computerWord == wordList[1]){
 			document.getElementById("dinohint").innerHTML = fact1;
 		}
 		else if (computerWord == wordList[2]){
 			document.getElementById("dinohint").innerHTML = fact2;
 		}
 		else if (computerWord == wordList[3]){
 			document.getElementById("dinohint").innerHTML = fact3;
 		}
 		else if (computerWord == wordList[4]){
 			document.getElementById("dinohint").innerHTML = fact4;
 		}
 		else if (computerWord == wordList[5]){
 		document.getElementById("dinohint").innerHTML = fact5;
 		}
 		// places variable startTies which equals 13 on the webpage, this is countdown for every wrong choice
 		document.getElementById("life").innerHTML = startTries;
 
 		// provides keyboard input that the user presses on the game
 		document.onkeyup = function(event) {
 
 		// Records the user input into the variable guess for later use.
  		var guess = event.key;
   		//creates a new variable called guessed which is the user key press guess, places this on the html page to show which words have already been guessed

		// if guessedLetters.indexOf(guessed) >= 0 then alert("You already guessed that letter!");

 		var guessed = document.getElementById("log").innerHTML + guess;

		// if guess is in computerWord console log "INCORRECT GUESS" and subtract 1 from tries. I was helped on this segment by Angelo.
  		
  		if (computerWord.indexOf(guess) < 0) {
   			 console.log("INCORRECT GUESS");
    			var tries = document.getElementById("life").innerHTML--; 
  			}
 
 		// var tries = document.getElementById("life").innerHTML; 
 		document.getElementById("log").innerHTML = guessed;	

 		//if the users is down to his last guess the image will turn read and flash extinct.
 		if (tries <= 1) { 
 			document.getElementById("canyouguess").innerHTML = dead;
 			document.getElementById("dinoimage").src = "images/dino2.jpg";
 		}

 		}
