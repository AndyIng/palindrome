module.exports = Phrase;


// reverse a string

function reverse(string) {
    return Array.from(string).reverse().join("");
}

//returns true for a palindrome, false otherwwise.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

//Define a Phrase object.
function Phrase(content) {
    this.content = content;
    this.processor = function(string) {
        return string.toLowerCase();
    }
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }
    this.louder = function() {
        return this.content.toUpperCase();
    }
    this.letters = function letters() {
        let theLetters = [];
        const letterRegex = /[a-z]/i;
        Array.from(this.content).forEach(function(character){
             if (character.match(letterRegex)) {
                theLetters.push(character);
            }
        });
        return theLetters.join(""); 
    }
    
    this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
};
}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
    
    this.processedContent = function processedContent() {
        return this.translation.toLowerCase();
    }
}

TranslatedPhrase.prototype = new Phrase();
