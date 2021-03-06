
$(document).ready(function() {
	//console.log("testing");


	//my variable//
	var $hit = $("#hit");//grabs the Id of hit button
	//console.log($hit);
	var $stay = $("#stay");//grabs the Id of stay button
	//console.log($stay);
	var $dealerHand = $("#dealerContainer");//grabs the Id of dealerContainer
	//console.log($dealerHand);
	var $playerHand = $("#playerContainer");//grabs the Id of playerContainer
	//console.log($playerHand);
	var $dealCards = $("#dealCards");//grabs the Id of deal button
	//console.log($dealCards);
	var playerTotalValue;//holds player card totals in global scope for use in functions later
	var dealerTotalValue;//holds dealer card totals in global scope for use in functions later
	

	//=============== Objects ==========================//

	var player1 = {//player1 object, holds all player1 info
		currentHand: [],//dealt cards are pushed into empty array here
		bank: [],
		currentBet: [],
		value: []//the value of each card dealt is separated from card and pushed into the empty array 
	};

	var dealer = {//dealer object, holds all dealer info
		currentHand: [], //dealt cards are pushed into empty array here
		value: []//the value of each card dealt is separated from card and pushed into the empty array
	}

	//========== Cards ===========//
	var playerComeGetSome = function() {//function creates visual card display for player1's cards
		var $div = $("<div>");//creates a div
		$div.addClass("card").appendTo($playerHand);//adds the card class to newly created div and appends that div to the playerContainer
	} 

	var dealerGetsSome = function() {//function creates visual card display for dealer's cards
		var $div = $("<div>");//creates a div
		$div.addClass("card").appendTo($dealerHand);//adds the card class to newly created div and appends that div to the dealerContainer
	}
	//========= Making the Deck ===========//

	var cards =["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];//array of the 13 number cards you find in a 52 card deck
	var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]//array of the value assigned to the corresponding number cards according to blackjack rules
	var suit = ["Clubs", "Hearts", "Diamonds", "Spades"];//an array of the 4 suits found in a 52 card deck.
	var deck = [];//empty array to push newly created cards into.

	var newDeck = function(){//functions creates my deck
		for (var c = 0; c < cards.length; c++) {//1st (outer) loop will iterate through the card numbers for the length of the array, hitting every string.
			for (var s = 0; s < suit.length; s++) {//2nd (inner) loop will iterate through suits for every time the 1st loop iterates through card numbers. suits has to be the 2nd loop because for every 13 cards I need a suit, essentially 13*4 = 52 cards.
					var card = { suit: "", number: "", value: ""};//constructs each new card as an object. The object will allow me to access the suit, number and value of the card separately instead of the suit and number being all together.
					card.suit = suit[s];//assigns suit to each card
					card.number = cards[c];//assigns number to each card
					card.value = value[c];//assigns value to each card
					deck.push(card);//pushes newly made card objects into empty deck array.
			}
		}
	};

	newDeck();//invokes newDeck function to make deck
	//============= Shuffle the Deck =============//

	var shuffle = function(o) {//function shuffles. i = the length of my deck; j returns a random index number in the deck. the card in that index number is located and switches places with index[0]. This continues until the process has iterated through the entire length of the deck.
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
	};

	shuffle(deck);//invokes the shuffle function and passes the newly create deck through in order to shuffle it.  
		console.log("my deck:", deck);//prints my deck
		console.log("deck count:", deck.length);//prints the # of cards in deck

	//=========== Hit me deal ==============//
	var hitTheDealer = function() {
		if(dealerTotalValue < 18) {//checks dealer current value. if less than 18, creates a new card for dealer.
			var card;//holds card
			var dnc = 0;//counter
			card = deck.shift(0);//takes card from top of deck
			dealer.currentHand.push(card);//pushes card into dealer current hand
			dealer.value.push(dealer.currentHand[dnc].value);//takes the value from card object that was pushed into current hand and pushes that info into value property.
			dealerGetsSome();//invokes function
		}
	} //console.log(hitTheDealer());
	var playerHitMeBaby = function () {//creates new card for player
		var card;//holds card
		var c = 0;//counter
			card = deck.shift(0);//takes top card from deck
			player1.currentHand.push(card);//pushes card to player current hand
			player1.value.push(player1.currentHand[c].value);//takes the value from that card and pushes it into the value property
			playerComeGetSome();//invokes function
	}

	//========= Checking for Win ==========//
	var checkForWin = function () {//1st check for win function
		playerTotalValue = 0;//reassigns var to 0
		dealerTotalValue = 0;//reassigns var to 0
		for(var p = 0; p < player1.value.length; p++) {//iterates through player1 value property
			playerTotalValue += player1.value[p];//finds the sum of values
		} //console.log("player", playerTotalValue, player1.value);
		for(var d = 0; d < dealer.value.length; d++) {//iterates through dealer value property
			dealerTotalValue += dealer.value[d];//finds the sum of values
		} //console.log("dealer", dealerTotalValue, dealer.value);
		if(playerTotalValue == 21) {//if player's total = 21
			alert("You hit 21! You Win!");//alert this message
		} else if(playerTotalValue < 21) {//if player total less than 21
			alert("You have " + playerTotalValue + "!" + " " + " Do you want to hit or stay?");//alert this message
		} else if(playerTotalValue == 21 && dealerTotalValue == 21) {//if both player and dealer totals = 21
			alert("You have " + playerTotalValue + "!" + " " + " and the dealer has " + " " + dealerTotalValue + " " + " It's a tie");//alert this message
		} else if(playerTotalValue > 21) {//if player total is over 21
			alert("Bust! You have " + playerTotalValue + "." + " " + " You Lose!");//alert this message
		} else {//if some other condition occurs
			alert("skinamerinkydinkydink, skinamerinkydoo");//alert this message. This let's me know there is a win condition in this function that I missed.
		}
	}; 

	var checkFinalWin = function () {//final checkfor win function
		if(playerTotalValue == 21) {//if player total = 21
			alert("You hit 21! You Win!");//alert this message
		} else if(playerTotalValue == 21 && dealerTotalValue == 21) {//if player and dealer total = 21
			alert("You have " + playerTotalValue + "!" + " " + " and the dealer has " + dealerTotalValue + "." + " It's a tie");//alert this message
		} else if(playerTotalValue == dealerTotalValue) {//if player and dealer have the same exact total
			alert("You have " + playerTotalValue + "!" + " " + " and the dealer has " + dealerTotalValue + "." + " " + "It's a tie");//alert this message
		} else if(playerTotalValue < 21 && playerTotalValue > dealerTotalValue) {//if player total is less than 21 and greater than dealer total
			alert("You have " + playerTotalValue + "!" + " " + " and the dealer has " + " " + dealerTotalValue + "." + " " + "You Win!");//alert this message
		} else if(dealerTotalValue <= 21 && dealerTotalValue > playerTotalValue) {//if dealer total is less than or equal to 21 and greater than player total
			alert("You have " + playerTotalValue + "," + " " + " but the dealer has " + " " + dealerTotalValue + "." + " " + "Sorry, you lose!");//alert this message
		} else if(playerTotalValue < 21 && dealerTotalValue > 21) {//if player total is less than 21 and dealer total is greater than 21
			alert("You have " + playerTotalValue + "!" + " " + " and the dealer has " + " " + dealerTotalValue + "." + " " + "You Win!");//alert this message
		} else if(playerTotalValue > 21) {//if player total is greater than 21
			alert("Bust! You have " + playerTotalValue + "." + " " + " You Lose!");//alert this message
		} else if(playerTotalValue > 21 && dealerTotalValue > 21) {//if both player and dealer are over 21
			alert("Bust! You have " + playerTotalValue + "." + " " + " You Lose!");//alert this message
		} else {//if some other condition occurs
			alert("Jupiter has ascended");//alert this message. This let's me know there is a win condition in this function that I missed.
		}
	};
	// ============= Game Play ================== //
	$dealCards.click(function(){
		var card;
		for(var c = 0; c < 2; c++) {
			card = deck.shift(0);
			player1.currentHand.push(card);
			player1.value.push(player1.currentHand[c].value);
			playerComeGetSome();
		}; console.log("player value:", player1.value);
			 console.log("player:", player1.currentHand);
		for(var d = 0; d < 2; d++) {
			card = deck.shift(0);
			dealer.currentHand.push(card);
			dealer.value.push(dealer.currentHand[d].value);
			dealerGetsSome();
		}; console.log("dealer:", dealer.value);
			 console.log("dealer:", dealer.currentHand);
			 console.log("new deck count:", deck.length);
		
		checkForWin();
	});  

	$hit.click(function(){
		playerHitMeBaby();
		hitTheDealer();
		checkForWin();
		console.log("player new value:", player1.value);
		console.log("player new hand:", player1.currentHand);
		console.log("dealer new value:", dealer.value);
		console.log("dealer new hand:", dealer.currentHand);
		console.log("new length of deck:", deck.length);
	}); 

	$stay.click(function(){
		//console.log("stay clicked");
		checkFinalWin();
	});

});





//==============Super Basic 21 game-pseudocode==================//
//  1. cards to need shuffle
// 	-need shuffle function: how can you do this? 			an array. There are 52 cards in a deck, 4				  suits, 52/4 = 13. 
	// -do I have to create a deck before I can shuffle it...duh! how can you shuffle something you don't have. 
		//-ok, so create a deck of 52 cards, 4 suits, 13cards to each suit. #cards are 2-10, then J, Q, K, A
			//-what would the array look like: 
		//-shuffle cards. 
//  2. deal to player
	//-how does the computer know to deal?
		//just make it deal once the cards have been shuffled. 
// 	what does a deal consist of?
		//-two cards get dealt to player, then dealer from the same deck.  no repeat cards!!
// 3. player can hit or stay
// 	-if hit clicked, deal 1 card from deck
// 4. check for winner
// 	-what is a winner?
// 		-hand total == 21;
// 		-hand total < 21, but higher than all other hands
//		-what are all the possible winning conditions I can think of: player has 21-playerwins; dealer and player have 21 it's a tie; player has < 21 but > than dealer-player wins; dealer has < 21 but > than player-dealer wins and player loses; player goes > 21-player busts. dealer > 21 player automatically wins as long as player is not also > 21// should I do check for tie function or just hard code it into the checkForWin with if/else statements?
//=========================================//

//============== My Scrap Code =================//

//========makeing the deck===========//
// var deck = [["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"], ["C", "H", "D", "S"]];
// console.log(deck); I created a 2D array that i want to combine into a 1D array to make a deck of 52 cards.  How do I combine it?
// var deck = {
// 	cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
// 	suits: ["C", "H", "D", "S"]
//};
//var cards =["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
//var suits = ["C", "H", "D", "S"];
// var newDeck = for (var c = 0; c < cards.length; c++) {
// 	for(var s = 0; s < suits.lenth; s++) {
// 		return cards[c] + suits[s]
// 	}
// }
// var newDeck = function(){
// 	for (var c = 0; c < cards.length; c++) {//1st loop will iterate through the card numbers for the length of the array, hitting every string.
// 		var v = 0;
// 		var card = cards[c] + values[v];//doesn't work, this add only the 1st value to every damn card!!
// 		for (var s = 0; s < suits.length; s++) {//2nd loop will iterate through suits for every time the 1st loop iterates through card numbers. suits has to be the 2nd loop because for every 13 cards I need a suit, essentially 13*4 = 52 cards.
// 			var card = { suit: "", number: "", values: ""};//create each card as an object. The object will allow me to access the suit and number of the card separately instead of the suit and number being all together. I need this in order to be able to assign a value to the numbers.
// 			card.suit = suits[s];//assign a suit to each card
// 			card.number = cards[c];//assign a number to each card
// 			// var v = 0;
// 			card.values = values[v];//trying to add values to my cards
// 			console.log(card);//confirm I had a card with a number and suit for ever card needed and no duplicates
// 			deck.push(card);//push my new cards into the array called deck
// 		}
// 	}
// 	console.log(deck);//prints my new deck
// };
// //console.log(newDeck);
//=========== Dealing Cards ==============//
//var card = deck;
//console.log(card);
// var $card1 = deck.pop(0);
// var $card2 = deck.pop(0);
// console.log($card2);
// console.log(deck);
// $pcard1.html($card1);
// console.log($pcard1);
// $pcard2.html($card2);
// console.log($pcard2);
//need to create an empty array for each player and dealer for the cards, which are currently objects to be pushed into. 
//var $pcard1 = $("#pcard1");
//console.log($pcard1);
//var $pcard2 = $("#pcard2");
//console.log($pcard2);
//var $card1 = deck.shift(0);//initially used pop this takes the last element. then I found the shift function which takes the first element from the array. That is how you would normally deal cards. 
//console.log($card1);
// var $pcard2 = $("#pcard2");
// var $card2 = deck.shift(0);
// console.log($card2);
// $(function(){
// 	$.each($card2, function(){
// 		$pcard2.html(this);
// 	})
// });
// $pcard2.html(this.card2);
// $pcard2.html($card2.suit);
// $pcard2.html($card2.number);
// $dealCards.click(function(){
// var card1 = deck.shift(0);
	// var card2 = deck.shift(0);
	// var card3 = deck.shift(0);
	// var card4 = deck.shift(0);
	// player1.currentHand.push(card1, card2);
	// dealer.currentHand.push(card3, card4);
	// player1.value.push(player1.currentHand[0].value);
	// player1.value.push(player1.currentHand[1].value);//pushes the values from current hand object, index[0] in to the value key. How can I loop this?
	// player1.value = holdDisBae;
	// console.log("player's hand", player1);
	// dealer.value.push(dealer.currentHand[0].value);
	// dealer.value.push(dealer.currentHand[1].value);
	// console.log("dealer's hand", dealer);//This should honestly all be a function that loops until both dealer and player have 2 cards each. Will revisit later.
	// console.log(player1.value);
	// console.log(player1.currentHand[0].value);
	// console.log(player1.currentHand[1].value);
	// });	
	//======checkForWin=============//
// if(playerTotal < 21) {
		// 	alert("You have " + playerTotal + "!" + " " + "Do you want to hit or stay?");
		// } else if (playerTotal > 21) {
		// 	alert("Over 21! You Lose!");
		// } else {
		// 	alert("You hit 21!!");
		// }
	// 	var dealerTotal = dealer.value[0] + dealer.value[1];
	// 	console.log(dealerTotal)
	// 	console.log(playerTotal);
	// 	// var dealerTotal = dealer.value[0] + dealer.value[1];
	// 	// console.log(dealerTotal);
	// 	// if (playerTotal < 21) {
	// 	// 	alert("You have " + playerTotal + "!" + " " + "Do you want to hit?");
	// 	// } else if (playerTotal > 21) {
	// 	// 	alert("Over 21! BUST!");
	// 	// 	return playerTotal;
	// 	// } else {
	// 	// 	alert("You hit 21!!!!");
	// 	// }
	// };
	// checkForWin();
	//checkValue();	
	// if(dealerValue < 19) {
		// 	var card;
		// 	var i = 0;
		// 	card = deck.shift(0);
		// 	dealer.currentHand.push(card);
		// 	dealer.value.push(dealer.currentHand[i].value);
		// 	dealerGetsSome();
		//} else if(playerTotalValue == dealerTotalValue) {
			//alert("It's a tie");
		// } else if(playerTotalValue < 21 && playerTotalValue > dealerTotalValue) {
		// 	alert("You have " + playerTotalValue + "!" + " " + " and the dealer has" + dealerTotalValue + "." + "You Win!");
		// } else if(dealerTotalValue < 21 && dealerTotalValue > playerTotalValue) {
		// 	alert("You have" + playerTotalValue + "," + " " + "but the dealer has" + dealerTotalValue + "." + " " + "Sorry, you lose!");
		//============= Check Value ========//
	// function(){
// 		for (var i = 0; i < currentHand.length; i++) {
// 			player1.value.push(player1.currentHand[i].value);
// 		} 
//	} //what the fuck am I trying to do right here!!!
// var checkCurrentValue = function () {//change this into a loop that will check the values and alert
	// 	var playerValue = 0;
	// 	var dealerValue = 0; 
	// 	for(var pv = 0; pv < player1.value.length; pv++) {
	// 		playerValue += player1.value[pv];
	// 	}
	// 	for(var dv = 0; dv < dealer.value.length; dv++) {
	// 		dealerValue += dealer.value[dv];
	// 	} //checkForWin();
	// 	if(playerValue < 21) {
	// 		alert("You have " + playerValue + "!" + " " + "Do you want to hit or stay?");
	// 	} else if (playerValue > 21) {
	// 		alert("Over 21! BUST!");
	// 		return playerTotal;
	// 	} else {
	// 		alert("You hit 21!!!!");
	// 	};//but what if the dealer also had 21? does that make it a tie also?
	// };
	// checkCurrentValue();

	// 		if(dealerTotal < 19) {
// 			var card1 = deck.shift(0);
// 			dealer.currentHand.push(card1);
// 			dealer.value.push(dealer.currentHand[2].value);
// 			dealerTotal = dealer.value[0] + dealer.value[1] + dealer.value[2]
// 			console.log(dealer.currentHand);
// 			console.log("dealer new total", dealerTotal);
// 		} else {
// 			return dealerTotal;
// 		}; 
// 	}; checkDealerTotal(); 	

	// var checkDealerTotal = function() {
// 	var dealerTotal = 0;
// 	for(var d = 0; d < dealer.value.length; d++) {
// 		dealerTotal += dealer.value[d];
// 	} console.log("dealer", dealerTotal);
// 	if(dealerTotal < 19) {
// 		var card;
// 		for(var c = 0; c < 1;)
// 		dealer.currentHand.push(card);
// 		dealer.value.push(dealer.currentHand[2].value);
// 		dealerTotal = dealer.value[0] + dealer.value[1] + dealer.value[2]
// 		console.log(dealer.currentHand);
// 		console.log("dealer new total", dealerTotal);
// 	} else {
// 		return dealerTotal;
// 	}; 
// };

// var checkValue = function(){
// 	var playerValue = 0;
// 	var dealerValue = 0; 
// 	for(var pv = 0; pv < player1.value.length; pv++) {
// 		playerValue += player1.value[pv];
// 	} console.log ("player value", playerValue);
// 	for(var dv = 0; dv < dealer.value.length; dv++) {
// 		dealerValue += dealer.value[dv];
// 	} console.log("dealer value", dealerValue); //checkForWin(); 
// 	if(dealerValue < 19) {
// 		var card;
// 		var i = 0;
// 		card = deck.shift(0);
// 		dealer.currentHand.push(card);
// 		dealer.value.push(dealer.currentHand[i].value);
// 		dealerGetsSome();
// 		// dealerVale = dealer.value[0] + dealer.value[1] + dealer.value[2]
// 		console.log(dealer.currentHand);
// 		console.log("dealer new total", dealerValue);
// 	if(playerValue <= 21) {
// 		alert("You have " + playerValue + "!" + " " + "Do you want to hit or stay?");
// 	} else {
// 		alert("You have" + playerValue + "," + " " + "You Lose!");
// 	}
// 	return dealerValue;
// 	}; 
// }; 
//============  the value of cards ================//
	//i need to iterate through the current hand, access the value of each card, add the value together and push that value into the value empty array of the player. I want it to return this.value 

// checkValue();
// var checkValue = function (player1, dealer) {
// 	var i = 0;
// 	for(var v = 0; v < value.length; v++) {
// 		var total = player1.value[i] + player1.value[i + 1];
// 	} 
// };
// checkValue();	
//============= $hit Function LOL ============//	
// var card;
	// for(var c = 0; c < 1; c++) {
	// 	card = deck.shift(0);
	// 	player1.currentHand.push(card);
	// 	player1.value.push(player1.currentHand[c].value);
	// }; 
// var card = deck.shift(0);
// 	console.log(card1);
// 	player1.currentHand.push(card1); 
// 	player1.value.push(player1.currentHand[2].value);
// 	console.log(player1.currentHand);
	//var playerTotal = player1.value[0] + player1.value[1] + player1.value[2]; 
// var dealerTotal = dealer.value[0] + dealer.value[1];
// 	var checkDealerTotal = function() {

// player1.currentHand.push(card1); 
	// player1.value.push(player1.currentHand[2].value);
	// console.log(player1.currentHand);
	//var playerTotal = player1.value[0] + player1.value[1] + player1.value[2]; 
	//var dealerTotal = dealer.value[0] + dealer.value[1];
 //checkDealerTotal(); 		
	
