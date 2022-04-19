// The hard way (supports older browsers)
// The easy way would be "scroll-behavior: smooth" in CSS
function scrollToTop() {
    var docEle = document.documentElement;

    var scrollAnimation = setInterval(function() {
        if (docEle.scrollToTop > 0) {
            docEle.scrollTop -= 50;
        } else {
            clearInterval(scrollAnimation);
        }
    }, 1)
}


// Scroll to specific element
function scrollToElement() {
    var docEle = document.documentElement;
    var quo = document.querySelector('#quo');
    var quoPos = quo.offsetTop;
    var scrollAnimation = setInterval(function() {
        if (docEle.scrollTop < quoPos) {
            docEle.scrollTop += 10
        } else {
            clearInterval(scrollAnimation);
        }
    }, 1)

    document.documentElement.scrollTo(quoPos)
}

/*
You can reuse scrollToElement(element) to select specific elements and then the add the ID of the element in the argument.
*/

/* 
To not hardcore it:
1. Add the same class to all elements you want to scroll to
2. QuerySelectorAll on the class (returns array of elements)
3. Loop through all of them 
*/