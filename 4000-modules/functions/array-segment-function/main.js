var preArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getData(arr, n = 1) {
    return arr.splice(0, n)
}

var result = getData(preArr)
console.log(result)