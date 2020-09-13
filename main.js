'use strict';

let library = [];
const cardOne = document.querySelector('.card.one');
const titleOne = document.querySelector('.title.one');
const authorOne = document.querySelector('.author.one');
const pagesOne = document.querySelector('.pages.one');
const haveReadOne = document.querySelector('.have-read.one');

const addButton = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const confirmNew = document.querySelector('.confirm-new-book');
const span = document.querySelector('.close');

let newTitleInput = document.querySelector('.new-title-input');
let newAuthorInput = document.querySelector('.new-author-input');
let newPagesInput = document.querySelector('.new-pages-input');
let haveRead = document.querySelector('.have-read');

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
})

addButton.addEventListener('click', function () {
    modal.style.display = 'block';
})

span.addEventListener('click', closeModal);

confirmNew.addEventListener('click', addBookToLibrary);

function closeModal() {
    modal.style.display = 'none';
}

function Book(title, author, pages, read) {
    this.title = newTitleInput.value;
    this.author = newAuthorInput.value;
    this.pages = newPagesInput.value;
    this.read = haveRead.value;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages. Read: ${read}.`;
    }
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