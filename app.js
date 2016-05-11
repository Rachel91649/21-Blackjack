//console.log("testing");
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
//=========================================//

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

//=========================================//
$hit.click(function(){
	console.log("hit clicked");
});
$stay.click(function(){
	console.log("stay clicked");
});
$dealCards.click(function(){
	console.log("cards dealt");
})


//========= Making the Deck ===========//

var cards =["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
var suits = ["Clubs", "Hearts", "Diamonds", "Spades"];
var deck = [];

var newDeck = function(){
	for (var c = 0; c < cards.length; c++) {
		for (var s = 0; s < suits.length; s++) {
				var card = { suit: "", number: "", values: ""};
				card.suit = suits[s];
				card.number = cards[c];
				card.values = values[c];
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
//============== deal cards ==================//
//going to pop 2 cards from my deck array and give it to the player and dealer. I need a deal button
// var dealCards = function(deck) {

// }	
//hardcode empty divs that will be my cards. deal function will pop cards from deck array and inner html that info to the empty divs.  then assign a class to to add styling to the cards. 
	var card = deck;
	console.log(card);
	var card1 = card.pop();
	var card2 = card.pop(1);
	$playerHand.append(card1,[card2]);
	console.log($playerHand);
//now I need to append the cards to the player div. have a grabbed the player div already
//console.log(deal);
//deal();




















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