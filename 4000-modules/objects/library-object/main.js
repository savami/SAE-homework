var library = [
    { 
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254 },
    
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4265 },
        
    { 
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245 } 
];

var title = document.querySelector('#title');
var author = document.querySelector('#author');
var id = document.querySelector('#id');
var error = document.querySelector('#error');
var inputSelector = document.querySelector('input')


function getBook() {
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

    if (idInputValue == library[0].libraryID) {
        title.style.display = "block";
        title.innerText = "Title - " + library[0].title;

        author.style.display = "block";
        author.innerText = "Author - " + library[0].author;

        id.style.display = "block";
        id.innerText = "ID - " + library[0].libraryID;
    }

    if (idInputValue == library[1].libraryID) {
        title.style.display = "block";
        title.innerText = "Title - " + library[1].title;

        author.style.display = "block";
        author.innerText = "Author - " + library[1].author;

        id.style.display = "block";
        id.innerText = "ID - " + library[1].libraryID;
    }

    if (idInputValue == library[2].libraryID) {
        title.style.display = "block";
        title.innerText = "Title - " + library[2].title;

        author.style.display = "block";
        author.innerText = "Author - " + library[2].author;

        id.style.display = "block";
        id.innerText = "ID - " + library[2].libraryID;
    }
}