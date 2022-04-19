var library = [
    {   title: 'The Road Ahead',
        author: 'Bill Gates',
        alreadyRead: true
    },
    
    {   title: 'Walter Isaacson',
        author: 'Steve Jobs',
        alreadyRead: true
    },
        
    {   title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        alreadyRead: false
    } 
];

for (let book in library) {
    if (library[book].alreadyRead === true) {
        console.log('You already read ' + library[book].title + " by " + library[book].author)
    } else if (library[book].alreadyRead === false) {
        console.log('You still need to read ' + library[book].title + " by " + library[book].author)
    } else {
        console.log('An error has occured')
    }
};