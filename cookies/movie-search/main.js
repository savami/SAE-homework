var inputSelector = document.querySelector('#movieTitle');
var movieList = document.querySelector('.movieList');
var endpoint;
var inputValue;

inputSelector.focus();

inputSelector.onkeyup = function() {
    inputValue = inputSelector.value;
    endpoint = "http://www.omdbapi.com/?s=" + inputValue + "&apikey=d5599d0";

    if (inputValue.length >= 3) {
        movieList.innerHTML = '';

        var req = new XMLHttpRequest();
        req.open('GET', endpoint);
        req.responseType = 'json';
        req.send();
    
        req.onreadystatechange = function () {
    
            if (req.readyState === 4 && req.status === 200 && req.response.Response == "True") {
                console.log(req.response.Search);

                for (var i = 0; i < req.response.Search.length; i++) {
                    var newListItem = document.createElement('li');

                    var newListItemPoster = document.createElement('img');
                    newListItemPoster.src = req.response.Search[i].Poster;
                    newListItem.appendChild(newListItemPoster)
                    
                    
                    var newListItemTitle = document.createElement('h3');
                    newListItemTitle.innerText = req.response.Search[i].Title;
                    newListItem.appendChild(newListItemTitle)





                    movieList.appendChild(newListItem);
                }

            }
        }
    }
}