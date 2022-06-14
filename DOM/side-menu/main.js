var menu = document.querySelectorAll('#menu ul li');

menu.forEach(e => e.addEventListener('mouseover', () => {
    e.classList.add('hover')
}))

menu.forEach(e => e.addEventListener('mouseout', () => {
    e.classList.remove('hover')
}))
