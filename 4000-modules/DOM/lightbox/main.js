var thumbnail = document.createElement('img')
thumbnail.src = ('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
thumbnail.style.width = '100px';

function openLightbox() {
    document.querySelector('.overlay').style.display = "flex"
}

thumbnail.addEventListener('click', openLightbox)
document.body.appendChild(thumbnail)

function closeOverlay() {
    document.querySelector('.overlay').style.display = "none"
}

document.querySelector('.overlayBackground').addEventListener('click', closeOverlay)