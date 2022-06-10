var book = {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    };


function checkProperty(propertyName) {

    if (book.hasOwnProperty(propertyName) === true) {
        console.log('The objects contains that property')
    } else {
        console.log('The object does not contain that property')
    }
}

checkProperty('name'); // false
checkProperty('title'); // true
checkProperty('writer'); // false
checkProperty('author'); // true