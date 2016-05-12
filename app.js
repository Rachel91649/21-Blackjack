
$(document).ready(function() {
	//console.log("testing");


	//my variable//
	var $hit = $("#hit");
	//console.log($hit);
	var $stay = $("#stay");
	//console.log($stay);
	var $dealerHand = $("#dealerCards");
	//console.log($dealerHand);
	var $playerHand = $("#playerCards");
	//console.log($playerHand);
	var $dealCards = $("#dealCards");
	//console.log($dealCards);
	

	//===============Clicks and Objects==========================//

	var player1 = {
		currentHand: [],
		// pcard2: "",
		// pcard3: "",
		// pcard4: "", 
		// pcard5: "",
		value: []//can I create a function in value that pulls the value of each card from the property currentHand and add them together.  this will need to loop through current hand in order to accomodate new cards being added. It's possible.  I might not have time to do this just yet.  I need to make the game work first. 
	};

	var dealer = {
		currentHand: [],
		// dcard2: "",
		// dcard3: "",
		// dcard4: "", 
		value: []
	}
	
	//========= Making the Deck ===========//

	var cards =["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
	var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
	var suit = ["Clubs", "Hearts", "Diamonds", "Spades"];
	var deck = [];

	var newDeck = function(){
		for (var c = 0; c < cards.length; c++) {
			for (var s = 0; s < suit.length; s++) {
					var card = { suit: "", number: "", value: ""};
					card.suit = suit[s];
					card.number = cards[c];
					card.value = value[c];
					deck.push(card);
			}
		}
	};

	newDeck();
	//============= Shuffle the Deck =============//

	var shuffle = function(o) {
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
	};

	shuffle(deck);
		console.log(deck);

	//========= Checking for Win ==========//
	var checkForWin = function () {
		var playerTotalValue = 0;
		var dealerTotalValue = 0;
		for(var p = 0; p < player1.value.length; p++) {
			playerTotalValue += player1.value[p];
		} console.log("player", playerTotalValue, player1.value);
		for(var d = 0; d < dealer.value.length; d++) {
			dealerTotalValue += dealer.value[d];
		} console.log("dealer", dealerTotalValue, dealer.value);
		if(playerTotalValue == 21) {
			alert("21! You Win!");
		} else if(playerTotalValue == 21 && dealerTotalValue == 21) {
			alert("It's a tie");
		} else if(playerTotalValue == dealerTotalValue) {
			alert("It's a tie");
		} else if(playerTotalValue < 21 && playerTotalValue > dealerTotalValue) {
			alert("You have " + playerTotalValue + "!" + " " + " and the dealer has" + dealerTotalValue + "." + "You Win!");
		} else if(dealerTotalValue < 21 && dealerTotalValue > playerTotalValue) {
			alert("You have" + playerTotalValue + "," + " " + "but the dealer has" + dealerTotalValue + "." + " " + "Sorry, you lose!");
		} else if(playerTotalValue > 21) {
			alert("Bust! You have" + playerTotalValue + "." + " " + "You Lose!");
		} else {
			return;
		}
	}; 

	var checkValue = function(){
		var playerValue = 0;
		var dealerValue = 0; 
		for(var pv = 0; pv < player1.value.length; pv++) {
			playerValue += player1.value[pv];
		} console.log ("player value", playerValue);
		for(var dv = 0; dv < dealer.value.length; dv++) {
			dealerValue += dealer.value[dv];
		} console.log("dealer value", dealerValue); //checkForWin(); 
		if(playerValue <= 21) {
			alert("You have " + playerValue + "!" + " " + "Do you want to hit or stay?");
		} else {
			alert("You have" + playerValue + "," + " " + "You Lose!");
		}
	}; 

	//============== deal cards ==================//

	$dealCards.click(function(){
		var card1 = deck.shift(0);
		var card2 = deck.shift(0);
		var card3 = deck.shift(0);
		var card4 = deck.shift(0);
		player1.currentHand.push(card1, card2);
		dealer.currentHand.push(card3, card4);
		player1.value.push(player1.currentHand[0].value);
		player1.value.push(player1.currentHand[1].value);//pushes the values from current hand object, index[0] in to the value key. How can I loop this?
		// player1.value = holdDisBae;
		console.log("player's hand", player1);
		dealer.value.push(dealer.currentHand[0].value);
		dealer.value.push(dealer.currentHand[1].value);
		console.log("dealer's hand", dealer);//This should honestly all be a function that loops until both dealer and player have 2 cards each. Will revisit later.
		// console.log(player1.value);
		// console.log(player1.currentHand[0].value);
		// console.log(player1.currentHand[1].value);	
		var checkCurrentValue = function () {//change this into a loop that will check the values and alert
			var playerValue = 0;
			var dealerValue = 0; 
			for(var pv = 0; pv < player1.value.length; pv++) {
				playerValue += player1.value[pv];
			}
			for(var dv = 0; dv < dealer.value.length; dv++) {
				dealerValue += dealer.value[dv];
			} //checkForWin();
			if(playerValue < 21) {
				alert("You have " + playerValue + "!" + " " + "Do you want to hit or stay?");
			} else if (playerValue > 21) {
				alert("Over 21! BUST!");
				return playerTotal;
			} else {
				alert("You hit 21!!!!");
			};//but what if the dealer also had 21? does that make it a tie also?
		};
		checkCurrentValue();
	}); 

	//============ hit button ===================//
	$hit.click(function(){///LOL!! my button is called $hit.click! 
		var card1 = deck.shift(0);
		console.log(card1);
		player1.currentHand.push(card1); 
		player1.value.push(player1.currentHand[2].value);
		console.log(player1.currentHand);
		//var playerTotal = player1.value[0] + player1.value[1] + player1.value[2]; 
		var dealerTotal = dealer.value[0] + dealer.value[1];
		var checkDealerTotal = function() {
			if(dealerTotal < 19) {
				var card1 = deck.shift(0);
				dealer.currentHand.push(card1);
				dealer.value.push(dealer.currentHand[2].value);
				dealerTotal = dealer.value[0] + dealer.value[1] + dealer.value[2]
				console.log(dealer.currentHand);
				console.log("dealer new total", dealerTotal);
			} else {
				return dealerTotal;
			}; 
		}; checkDealerTotal(); 
		checkValue(); //what else do I need this to do? Once hit is pressed I need for it to check the players totals, let the player know that they have and give them the option to hit or stay. This is separate from checking the dealer's total and adding a card to the dealer if the dealer is < 19.
		//try storing the totals in the global scope so that you don't have to keep declaring them. 
		// var checkDealer = function () {
		// }
	});
	
	//========= Stay Button =========//
	$stay.click(function(){
		console.log("stay clicked");
		checkForWin();
	});

});













// =============== Code Comments ================//
//line 45: //array of card numbers
//console.log(cards.length); confirmed legth of cards
//line 46: console.log(values.length); confirmed length matched the number of cards
//line 47: array of card suits
//line 48: empty array where new deck will be pushed into
//line 51: 1st loop will iterate through the card numbers for the length of the array, hitting every string.
//line 52: 2nd loop will iterate through suits for every time the 1st loop iterates through card numbers. suits has to be the 2nd loop because for every 13 cards I need a suit, essentially 13*4 = 52 cards.
//line 53: create each card as an object. The object will allow me to access the suit and number of the card separately instead of the suit and number being all together. I need this in order to be able to assign a value to the numbers.
//line 54: assign a suit to each card
//line 55: assign a number to each card
//line 56: assign the length of cards to values
	//console.log(card);//confirm I had a card with a number and suit for ever card needed and no duplicates
//line 57: push my new cards into the array called deck
//line 62: invoke the function newDeck //console.log(deck);
//line 65: i = the length of my deck; j returns a random index in from the length of the deck. switches places with the first number, then continues to pic a random indx number and switch it's place with the next index until it has filtered through the entire array.

//=====Super Basic 21 game-pseudocode======//
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
			//============= Check Value ========//
		// function(){
	// 		for (var i = 0; i < currentHand.length; i++) {
	// 			player1.value.push(player1.currentHand[i].value);
	// 		} 
	//	} //what the fuck am I trying to do right here!!!
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