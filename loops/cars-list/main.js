var cars = ['Renault', 'Peugeot', 'Mazda', 'Mercedes', 'Yugo', 'Honda']

function printArray() {
    cars.forEach(function(el){
      document.getElementById('result').innerHTML+='<br>' + el;
    })
  }
  
printArray()