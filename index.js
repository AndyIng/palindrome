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
        return this.content.toLowerCase();
    }
    this.louder = function() {
        return this.content.toUpperCase();
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
