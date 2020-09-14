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
confirmNew.addEventListener('click', addBookToLibrary);

// Generic close modal function
function closeModal() {
    modal.style.display = 'none';
}

// The almighty constructor
function Book(title, author, pages, read) {
    this.title = newTitleInput.value;
    this.author = newAuthorInput.value;
    this.pages = newPagesInput.value;
    this.read = haveRead.value;
}

// Prototypal inheritence, so that this function isn't instantiated repeatedly for each book
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages. Read: ${this.read}.`;
}

function addBookToLibrary() {
    console.log(typeof(newPagesInput.value));
    titleOne.textContent = newTitleInput.value;
    library.push(new Book);
    closeModal();
}

function displayLibrary() {

}

// addButton.addEventListener('click', function () {
//     const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'false');
//     console.log(theHobbit.info());
//     titleOne.textContent = theHobbit.title;
//     authorOne.textContent = theHobbit.author;
//     pagesOne.textContent = theHobbit.pages;
//     if (theHobbit.read === 'true') {
//         haveReadOne.textContent = 'Yes';
//     } else {
//         haveReadOne.textContent = 'No';
//     }
// });