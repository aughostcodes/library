'use strict';

let library = [];
const cardOne = document.querySelector('.card.one');
const titleOne = document.querySelector('.title.one');
const authorOne = document.querySelector('.author.one');
const pagesOne = document.querySelector('.pages.one');
const haveReadOne = document.querySelector('.have-read.one');

const addButton = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const span = document.querySelector('.close');

addButton.addEventListener('click', function () {
    modal.style.display = 'block';
})

span.addEventListener('click', function () {
    modal.style.display = 'none';
})

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages. Read: ${read}.`;
    }
}

function addBookToLibrary() {

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

/*
const houseOfLeaves = new Book('House of Leaves', 'Mark Z. Danielewski', '709', 'true');
console.log(houseOfLeaves.info());
*/