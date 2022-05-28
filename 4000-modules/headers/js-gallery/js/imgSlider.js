function imgSlider(settings) {
    // Selectors
    var slidesContainerSelector = document.querySelector('.slidesContainer');
    var imgSliderSelector = document.querySelector('.imgSlider');
    var allSlides = document.querySelectorAll('.imgSlider figure');
    var currentSlide = Math.round(allSlides.length / 2) -1;  
    var nextBtn = document.querySelector('.imgSlider #nextBtn');
    var prevBtn = document.querySelector('.imgSlider #prevBtn');
    var playBtn = document.querySelector('.imgSlider #playBtn');
    var playInt; // Variable for pause/play
    
    // Filter input variables
    var filterInput = document.querySelector('#filter');
    var rangeInput = document.querySelector('#range');
    
    // Settings by calling the settings argument within the function
    slidesContainerSelector.style.height = settings.height;
    slidesContainerSelector.style.maxWidth = settings.width;
    imgSliderSelector.style.overflow = settings.overflow;
    imgSliderSelector.setAttribute('id', settings.name);
    
    allSlides[currentSlide].style.left = 0;
    
    for (let i = currentSlide - 1, j = 100; i >= 0; i--, j+=100) {
        allSlides[i].style.left = "-" + j + "%";
    }
    
    for (let i = currentSlide + 1, j = 100; i < allSlides.length ; i++, j+=100) {
        allSlides[i].style.left = j + "%";
    }
    
    function slideRight() {
        currentSlide++;
        
        if (currentSlide === allSlides.length) {
            currentSlide = 0;
            allSlides[currentSlide].style.left = 0;
            
            for (let i = 1, j = 100; i < allSlides.length; i++, j += 100) {
                allSlides[i].style.left = j + "%";
            }
            
        } else {
            for (let i = 0; i < allSlides.length; i++) {
                let number = parseInt(allSlides[i].style.left.split('%')[0]);
                allSlides[i].style.left = number-100 + "%";
            }
        }
    }
    
    function slideLeft() {
        currentSlide--;
        
        if (currentSlide < 0) {
            currentSlide = allSlides.length - 1;
            allSlides[currentSlide].style.left = 0;
            
            for (let i = allSlides.length - 2, j = 100; i >= 0; i--, j += 100) {
                allSlides[i].style.left = "-" + j + "%";
            }
            
        } else {
            for (let i = 0; i < allSlides.length; i++) {
                let number = parseInt(allSlides[i].style.left.split('%')[0]);
                allSlides[i].style.left = number+100 + "%";
            }
        }
    }
    
    // Previous button
    prevBtn.addEventListener('click', function() {
        clearInterval(playInt);
        playBtn.innerText = 'play';
        slideLeft();
    });
    
    // Next button
    nextBtn.addEventListener('click', function() {
        clearInterval(playInt);
        playBtn.innerText = 'play';
        slideRight();
    });
    
    // Play & Pause
    playBtn.addEventListener('click', function() {
        if (playBtn.innerText.toLowerCase() === 'play') {
            slideRight();
            playInt = setInterval(function() {
                slideRight();
            }, settings.slideInterval);
            playBtn.innerText = 'pause';
        } else if (playBtn.innerText.toLowerCase() === 'pause') {
            clearInterval(playInt);
            playBtn.innerText = 'play';
        }
        
    });
    
    // Filter functions
    function setFilter() {
        allSlides.forEach(slide => {
            slide.style.filter = filterInput.value + "(" + rangeInput.value + "%)"
        })
    }
    
    filterInput.addEventListener('change', setFilter);
    rangeInput.addEventListener('change', setFilter);
    
    // Dragging functions
    if (settings.draggable === true) {
        var dragging;
        var currentCursorX;
        
        allSlides[currentSlide].addEventListener('mousemove', function(moveEvent) {
            currentCursorX = moveEvent.clientX;
        });

        // On mouseclick interval
        allSlides[currentSlide].addEventListener('mousedown', function(clickEvent) {
            dragging = setInterval(() => {
                console.log(clickEvent.clientX + ' - ' + currentCursorX);
                var dragDiff = clickEvent.clientX - currentCursorX;
                let slidesContainerWidth = (settings.width.split('px')[0]);
                var dragDiffPerc = (dragDiff / slidesContainerWidth) * 100;
                console.log(dragDiffPerc);

                // Logic for touch gesture slide
                if (dragDiffPerc < 0) {
                    dragDiffPerc = Math.abs(dragDiffPerc);
                } else if (dragDiffPerc > 0) {
                    dragDiffPerc = -Math.abs(dragDiffPerc);
                }

                for (let i = 0; i < allSlides.length; i++) {
                    // Loops all slides and edits style.left with dragdiffperc
                    let leftOffset = parseInt(allSlides[i].style.left.split('%')[0] + dragDiffPerc);
                    allSlides[i].style.left = leftOffset + dragDiffPerc + "%";
                }
            }, 100);
        });
        
        // On mouseup interval clear
        window.addEventListener('mouseup', function(e) {
            console.log('not dragging');
            clearInterval(dragging);
        });
    }
    
    
    // AUTOPLAY
    if (settings.autoplay === true) {
        playInt = setInterval(function() {
            slideRight();
        }, settings.slideInterval);
    };
}


// NEXT UP IN CLASS
// MOUSEUP ROUND UP
// BUTTONS