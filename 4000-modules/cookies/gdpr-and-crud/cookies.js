var xBtn = document.querySelector('#banner button')
xBtn.addEventListener('click', removeBanner)

var bannerSelector = document.querySelector('#banner');

window.addEventListener('load', function() {
    var readExistingCookie = readCookie("hideBanner");
    console.log(readExistingCookie)
    
    if (readExistingCookie == true) {
        setTimeout(() => {
            bannerSelector.classList.add('slideOut')
        }, 500);
    }
})

function createCookie(cookieName, value, days) {
    value = escape(JSON.stringify(value));
    let expires;

    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toGMTString();
    } else {
        expires = '';
    }

    document.cookie = cookieName + '=' + value + expires + '; path=/';
}

function readCookie(cookieName) {
    const nameEQ = cookieName + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            let contents = c.substring(nameEQ.length, c.length);
            contents = JSON.parse(unescape(contents));
            return contents;
        }
    }
    return null;
}

function eraseCookie(cookieName) {
    this.createCookie(cookieName, '', -1);
}

function removeBanner() {
    bannerSelector.classList.add('slideOut');

    createCookie("hideBanner", true, 30);

    console.log('Cookie has been created')
}
