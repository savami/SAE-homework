var btn = document.querySelector('.dropdownBtn');
var menu = document.querySelector('.dropdownItems');
var menuItems = document.querySelectorAll('a');

btn.addEventListener('mouseover', displayMenu);
menu.addEventListener('mouseout', hideMenu);


function displayMenu() {
    menu.classList.add('display');
}

function hideMenu() {
    menu.classList.remove('display');
}

menuItems.forEach(item => {
    item.addEventListener('click', event => {
        menuItems.classList.remove('display');
    })
})