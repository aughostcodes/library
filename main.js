'use strict';

let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages. Read: ${read}.`;
    }
}

function addBookToLibrary(){
}

function displayLibrary() {
    
}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'true');

const houseOfLeaves = new Book('House of Leaves', 'Mark Z. Danielewski', '709', 'true');

console.log(theHobbit.info());
console.log(houseOfLeaves.info());
