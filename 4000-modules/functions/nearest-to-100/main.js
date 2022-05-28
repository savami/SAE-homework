function findNearest(a, b) {
    var distanceA;
    if(a > 100) {
        distanceA = a - 100
    } else if(a < 100) {
        distanceA = 100 - a
    }

    var distanceB;
    if(b > 100) {
        distanceB = b - 100
    } else if(b < 100) {
        distanceB = 100 - b
    }

    if(distanceA > distanceB) {
        return b
    } else if(distanceA < distanceB) {
        return a
    } else {
        return 'The numbers are equally close to 100'
    }
}

console.log(findNearest(99, 101))
console.log(findNearest(75, 85))
console.log(findNearest(1, 0))
console.log(findNearest(-50, -100))
