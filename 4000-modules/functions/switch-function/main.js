var intNum = parseInt(prompt('Enter a number'))

switch(true) {
    case (intNum >= 20 && intNum <= 100):
        console.log('Number is between 20 and 100')
        break;
    
    case (intNum >= 101 && intNum <= 400):
        console.log('Number is between 101 and 400')
        break;

    default:
        console.log('Number is not between 20 and 400');
}