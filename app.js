//console.log("testing");
//=====Super Basic 21 game-pseudocode======//
//  1. cards to need shuffle
// 	-need shuffle function: how can you do this? 			an array. There are 52 cards in a deck, 4				  suits, 52/4 = 13. 
		// -do I have to create a deck before I can shuffle it...duh! how can you shuffle something you don't have. 
			//-ok, so create a deck of 52 cards, 4 suits, 13cards to each suit. #cards are 2-10, then J, Q, K, A
				//-what would the array look like: 
				var deck = [["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"], ["C", "H", "D", "S"]];
				console.log(deck);
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

