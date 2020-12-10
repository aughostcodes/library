'use strict';

let library = [];
// Mostly for testing -- final solution cannot be hard-coded
const cardOne = document.querySelector('.card.one');
const titleOne = document.querySelector('.title.one');
const authorOne = document.querySelector('.author.one');
const pagesOne = document.querySelector('.pages.one');
const haveReadOne = document.querySelector('.have-read.one');

// Grabbing some buttons/areas
const addButton = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const confirmNew = document.querySelector('.confirm-new-book');
const span = document.querySelector('.close');

// Grabbing user input values from the modal pop-up
let newTitleInput = document.querySelector('.new-title-input');
let newAuthorInput = document.querySelector('.new-author-input');
let newPagesInput = document.querySelector('.new-pages-input');
let haveRead = document.querySelector('.have-read');
let searchString;



// Close modal when clicking anywhere outside of modal
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
})

// Launch modal on button click
addButton.addEventListener('click', function () {
    modal.style.display = 'block';
})

// Close modal using the 'X'
span.addEventListener('click', closeModal);

// Starts other calls when 'Confirm' button is clicked within modal
confirmNew.addEventListener('click', addGameToLibrary);

// Generic close modal function
function closeModal() {
    modal.style.display = 'none';
}

// The almighty constructor
function Game(title, platform, year, genre) {
    this.title = newTitleInput.value;

    // this.platform = newAuthorInput.value;
    // this.year = newPagesInput.value;
    // this.genre = haveRead.value;
}

// Prototypal inheritence, so that this function isn't instantiated repeatedly for each book
Game.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages. Read: ${this.read}.`;
}


function addGameToLibrary() {
    if (newTitleInput.value.indexOf(' ') !== -1) {
        console.log('s p a c e');
    }
    console.log(newTitleInput.value);
    searchString = newTitleInput.value;
    library.push(new Game);
    accessAPI();
    closeModal();
}

function accessAPI() {
    let rawg = `https://api.rawg.io/api/games?key=3cf8028468fa4d308da3f1fb814237b7&search=${searchString}`;
    fetch(rawg, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
        })
}

// just testing
// let lib = [];

// function Book() {}

// Book.prototype.sayInfo = function () {
//     console.log(this.info);
// }

// function NewBook(name, author, info) {
//     this.name = name;
//     this.author = author;
//     this.info = info;
// }

// NewBook.prototype = Object.create(Book.prototype);

// const wasteLand = new NewBook('The Waste Land', 'Eliot', 'Your thesis');

// const hangovers = new NewBook('Hangovers', 'Bukowski', 'It takes an ungodly durability');

// lib.push(wasteLand);
// lib.push(hangovers);