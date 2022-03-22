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

const readStatus = (element) => element === true;


library.forEach(book => {
    for (let key in book) {
        console.log(`${key}: ${book[key]}`);
        library.some(readStatus)

        if (readStatus === true) {
            console.log('You already read ' + library.title + " by " + library.author)
        } else {
            console.log('You still need to read ' + library.title + " by " + library.author)
        }
    }
});