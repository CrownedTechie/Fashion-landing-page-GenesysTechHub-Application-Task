console.log('hey there') 

if (window.innerWidth >= 765) {alert('Activate mobile view');}

let hamburger = document.querySelector('.hamburger');

let dropdownMenu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display ='block'}
    else { dropdownMenu.style.display = 'none'}
})
