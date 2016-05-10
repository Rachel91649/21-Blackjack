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
console.log($hit);
var $stay = $("#stay");
console.log($stay);
var $dealerHand = $("#dealerCards");
console.log($dealerHand);
var $playerHand = $("#playerCards");
console.log($playerHand);

//=========================================//
$hit.click(function(){
	console.log("hit clicked");
});
$stay.click(function(){
	console.log("stay clicked");
});

//========= Making the Deck ===========//

var cards =["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];//array of card numbers
var suits = ["Clubs", "Hearts", "Diamonds", "Spades"];//array of card suits
var deck = [];//empty array where new deck will be pushed into

var newDeck = function(){
	for (var c = 0; c < cards.length; c++) {//1st loop will iterate through the card numbers for the length of the array, hitting every string.
		for (var s = 0; s < suits.length; s++) {//2nd loop will iterate through suits for every time the 1st loop iterates through card numbers. suits has to be the 2nd loop because for every 13 cards I need a suit, essentially 13*4 = 52 cards.
			var card = { suit: "", number: "" };//create each card as an object. The object will allow me to access the suit and number of the card separately instead of the suit and number being all together. I need this in order to be able to assign a value to the numbers.
			card.suit = suits[s];//assign a suit to each card
			card.number = cards[c];//assign a number to each card
			console.log(card);//confirm I had a card with a number and suit for ever card needed and no duplicates
			deck.push(card);//push my new cards into the array called deck
		}
	}
	console.log(deck);//prints my new deck
};

newDeck();//invoke the function newDeck
//============= Shuffle the Deck =============//


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
//console.log(newDeck);