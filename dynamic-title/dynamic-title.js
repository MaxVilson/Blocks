const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtxElement = txtElement;
    this.words = words;
    this.wait = wait;
    this.wordIndex = 0;
    this.txt = '';
    this.isDeleting = false;
    this.type();
};

TypeWriter.prototype.type = function () {
    let typeSpeed = 150,
        currentIndex = this.wordIndex % this.words.length,
        currentWord = this.words[currentIndex];

    if (this.isDeleting) {
        typeSpeed = typeSpeed / 2;
        this.txt = currentWord.substring(0, this.txt.length - 1)
    } else {
        typeSpeed = 200;
        this.txt = currentWord.substring(0, this.txt.length + 1)
    }

    this.txtxElement.innerHTML = this.txt;

    if (this.txt === currentWord && !this.isDeleting) {
        typeSpeed = 3000;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.wordIndex++;
        this.isDeleting = false;
    }
    setTimeout(() => this.type(), typeSpeed)
};


document.addEventListener('DOMContentLoaded', init);

function init() {
    let txtElement = document.querySelector('.dynamic-title__text'),
        words = JSON.parse(txtElement.getAttribute('data-words')),
        wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}



