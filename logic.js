var basic = [];
var cloze = [];
var reveal = [];
var store = 0;  
var newFlashCard = 0; 
var currentFlashCard = 0; 
var selectedCard = 0;
var inquirer = require('inquirer');
var fs = require("fs")
userChoice();

function BasicFlashCard (front, back) {
	this.front = front;
	this.back = back;
};

function ClozeFlashCard (all, part, cloze) {
    this.back = all; 
    this.front = part; 
    this.deleted = cloze; 
};

BasicFlashCard.prototype.addBasicFlashCard = function() {
   newFlashCard = JSON.stringify(store, null, 2);
    //need to create a text file with trivia questions?
    fs.appendFile("", newFlashCard, function(err) {
	if (err) {
	    console.log(err);
	} else {
	    console.log("You've made a flashcard.");
	}
    });
};

ClozeFlashCard.prototype.addClozeFlashCard = function() {
     newCard = JSON.stringify(store, null, 2);
    //need to create a text file with trivia questions?
    fs.appendFile("", newFlashCard, function(err) {
	if (err) {
	    console.log(err);
	} else {
	    console.log("You've made a Clozecard.");
	}
    });
}; 

function userChoiceOne() {
    inquirer.prompt([{
        name: "cardType",
        message: "Basic or Cloze?",
        choices: ["Basic", "Cloze"]
    }]).then(function(startCreate) {
        console.log(startCreate.whatType + " Selected! Starting ");
        if (startCreate.whatType === "Basic") {
            createFlashcard();();
        } else if (startCreate.whatType === "Cloze") {
            browseFlashCards();
        }

    });
}