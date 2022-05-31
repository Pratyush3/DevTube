// On clicking Logo
document.getElementById("brand-logo").addEventListener('click', () => {
    location.reload();
})
//On clicking then responsive menu button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navelems')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})