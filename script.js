function acceptCookies() {
  document.getElementById("cookiebanner").style.display = "none";
  document.cookie = "cookieConsent=true; path=/; max-age=31536000";
}

function declineCookies() {
  document.getElementById("cookiebanner").style.display = "none";
  document.cookie = "cookieConsent=false; path=/; max-age=31536000";
}

window.onload = function() {
  if (document.cookie.indexOf("cookieConsent") === -1) {
    document.getElementById("cookiebanner").style.display = "block";
  }
};