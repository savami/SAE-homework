var xAxisSelector = document.querySelector('#xAxis span')
var yAxisSelector = document.querySelector('#yAxis span')


function showCoordinates(event) {
    xAxisSelector.innerText = event.clientX;
    yAxisSelector.innerText = event.clientY;
}

document.addEventListener('mousemove', showCoordinates);