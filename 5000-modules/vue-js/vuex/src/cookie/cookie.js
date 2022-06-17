export default { // cookieName=cookieValue;UTCstring;path=/;
    createCookie(cookieName, cookieValue, daysUntilExpires) {
        var date = new Date(); // Creates new date object
        // Sets to specific time - setTime to getTime (which is the current unix timestamp)
        date.setTime(date.getTime() + (daysUntilExpires*24*60*60*1000)); 
        var expirationTimeUTC = date.toUTCString();
        // Creates cookie with the cookieName, cookieValue & expirationTime converted to UTC string with path default at the end
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + expirationTimeUTC + ";path=/"; 
    },

    getCookie() {
        var decodedCookie = decodeURIComponent(document.cookie)
        var splitCookie = decodedCookie.split('=');
        return splitCookie[1];
    }
}