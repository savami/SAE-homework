window.onload = function() {
    // HTTP REQUEST (JSON API NPOINT)
    var slidesContainer = document.querySelector('.slidesContainer');
    
    var npointRequest = new XMLHttpRequest();
    
    npointRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            slidesContainer.innerHTML = "";
            this.response.slides.forEach(slide => {
                var singleSlide = document.createElement('figure');
                
                var slideImg = document.createElement('img');
                slideImg.src = slide.img;
                slideImg.title = slide.title;
                slideImg.alt = slide.alt;
                singleSlide.appendChild(slideImg);
                
                // var slideCaption = document.createElement('figcaption');
                // slideCaption.figcaption = slide.caption
                
                slidesContainer.appendChild(singleSlide);

            })
            imgSlider({
                "slideInterval": 4000,
                "height": "50vh",
                "width": "600px",
                // "overflow": "hidden",
                "name": "mySlider",
                "autoplay": false,
                "draggable": true,
                });
            }
        }

    npointRequest.open('GET', 'https://api.npoint.io/6cf2d927bc70a0b56873');
    npointRequest.responseType = 'json'; // Makes it return JSON type rather than stringyfied

    setTimeout(() => {
        npointRequest.send();
    }, 100);
    }
    
