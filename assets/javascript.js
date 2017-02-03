
    //places the number of guesses allowed on the webpage before the game begins
		
	// wordlist variable will generate the words to be guessed in the game

		var alphabet = ['A', 'a', 'B', 'b', 'C', 'c','D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h',
        'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N','n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's',
        'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];
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
		var startTries = 13;
	//places the number of guesses allowed on the webpage before the game begins
		// document.getElementById("life").innerHTML = startTries;

		document.getElementById("canyouguess").innerHTML = canYou;
	// //computer selects a word from the wordList array 
		var computerWord = wordList[Math.floor(Math.random() * wordList.length)];

		document.getElementById("computerword").innerHTML = computerWord;
		if (computerWord == wordList[0]) {
		document.getElementById("dinohint").innerHTML = fact0;
		}
		else if (computerWord == wordList[1])
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

			document.getElementById("life").innerHTML = startTries;

	// // // provides keyboard input that the user presses on the game
			document.onkeyup = function(event) {
	// // Records the user input into the variable guess for later use.
 			var guess = event.key;
 // 	//creates a new variable called guess which is the user key press guess 
			var guessed = document.getElementById("log").innerHTML + guess;

			document.getElementById("log").innerHTML = guessed;

			for (var i = 0; i < alphabet.length; i++){
			if (guessed == alphabet[i]); 
			startTries--;
			}

			//----------------------------------------------
			

		
				
		//if the users is down to his last guess the image will turn read and flash extinct.
			if (starTries = 0) { 
			document.getElementById("canyouguess").innerHTML = dead;
			document.getElementById("dinoimage").src = "images/dino2.jpg";
		}
			//(match the winning word if all matched up)
		    // else if ()
			}

			// for (var i = 0; i < alphabet.length; i++) {
			// if (guess !== alphabet[i]);
			// 	tries--;
			// }
		
