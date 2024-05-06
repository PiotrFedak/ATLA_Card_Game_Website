function CharacterIterator(characters) {
    this.characters = characters;
    this.currentIndex = 0;
}

CharacterIterator.prototype.next = function () {
    this.currentIndex = (this.currentIndex + 1) % this.characters.length;
};

CharacterIterator.prototype.previous = function () {
    this.currentIndex = (this.currentIndex - 1 + this.characters.length) % this.characters.length;
};

CharacterIterator.prototype.slice = function (startIndex, endIndex) {
    return this.characters.slice(startIndex, endIndex);
};

export default CharacterIterator;
