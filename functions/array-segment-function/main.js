var myArray = [['Renault', 'Peugeot', 'Mazda'], ['Apple', 'Orange', 'Watermelon'], ['Harry', 'Sava', 'Mihailo', 'Yongxin']],
    firstElement = myArray.map(function(array) {
        return array[0];
    });

console.log(firstElement)