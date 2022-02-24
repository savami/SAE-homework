// EVEN NUMBERS
for (var i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

var evenNumber = 1;
while (evenNumber < 101) {
    if (evenNumber % 2 === 0)
        console.log(evenNumber);
    evenNumber++;
}

console.log('These were all the even numbers')

// ODD NUMBERS
for (var iOdd = 1; iOdd < 101; iOdd++) {
    if (iOdd % 2 === 1) {
        console.log(iOdd);
    }
}

var oddNumber = 1;
while (oddNumber !== 100) {
    if (oddNumber % 2 === 1)
        console.log(oddNumber);
    oddNumber++;
}

console.log('These were all the odd numbers')