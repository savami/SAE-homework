var allTheNumbers = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7] ];


function joinedNumbers() {
  allTheNumbers.join(' ')
  document.getElementById('result').innerHTML+= allTheNumbers.join(' - ')
}

joinedNumbers()