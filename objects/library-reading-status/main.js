var library = [
    { 
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true },
    
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        readingStatus: true },
        
    { 
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false } 
];

var title = document.querySelector('#title');
var author = document.querySelector('#author');
var id = document.querySelector('#id');
var error = document.querySelector('#error');
var search = document.querySelector('button')
var inputSelector = document.querySelector('input');

search.addEventListener('click', getStatus);

function getStatus() {
    var idInputValue = document.querySelector('input').value;
    console.log(idInputValue);

    title.style.display = "none";
    author.style.display = "none";
    id.style.display = "none";
    error.style.display = "none";
    inputSelector.style.borderColor = "lightgrey";

    if (idInputValue == "") {
        error.style.display = "block";
        error.style.color = "red";
        inputSelector.style.borderColor = "red";
        error.innerText = "Please enter a book title";
    }

    if (idInputValue.toUpperCase() === "THE ROAD AHEAD"
        || idInputValue.toUpperCase() === "ROAD"
        || idInputValue.toUpperCase() === "AHEAD"
        || idInputValue.toUpperCase() === "ROAD AHEAD") {

        title.style.display = "block";
        title.innerText = "Title - " + library[0].title;

        author.style.display = "block";
        author.innerText = "Author - " + library[0].author;

        id.style.display = "block";
        id.innerText = "Reading status - " + library[0].readingStatus;
    }

    if (idInputValue.toUpperCase() === "WALTER ISAACSON"
    || idInputValue.toUpperCase() === "WALTER" 
    || idInputValue.toUpperCase() === "ISAACSON") {

        title.style.display = "block";
        title.innerText = "Title - " + library[1].title;

        author.style.display = "block";
        author.innerText = "Author - " + library[1].author;

        id.style.display = "block";
        id.innerText = "Reading status - " + library[1].readingStatus;
    }

    if (
        idInputValue.toUpperCase() === "MOCKINGJAY: THE FINAL BOOK OF THE HUNGER GAMES"
        || idInputValue.toUpperCase() === "MOCKINGJAY"
        || idInputValue.toUpperCase() === "MOCKING"
        || idInputValue.toUpperCase() === "HUNGER"
        || idInputValue.toUpperCase() === "GAMES"
        || idInputValue.toUpperCase() === "HUNGER GAMES") {

        title.style.display = "block";
        title.innerText = "Title - " + library[2].title;

        author.style.display = "block";
        author.innerText = "Author - " + library[2].author;

        id.style.display = "block";
        id.innerText = "Reading status - " + library[2].readingStatus;
    }
}