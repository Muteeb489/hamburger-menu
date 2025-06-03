let deviceSize = window.innerWidth
let hamburgerIcon = document.querySelector('.hamburger-container')
let closeIcon = document.querySelector('.close-icon')
let myNav = document.querySelector('nav')
if(deviceSize<670)
{
   hamburgerIcon.style.display='block'
   hamburgerIcon.addEventListener('click',()=>{
    myNav.classList.toggle('show-nav')
    hamburgerIcon.style.display='none'
    closeIcon.style.display='block'
   })
   closeIcon.addEventListener('click',()=>{
    myNav.classList.toggle('show-nav')
     hamburgerIcon.style.display='block'
   })
}