console.log('hey there')


let hamburger = document.querySelector('.hamburger');
console.log(hamburger)

let dropdownMenu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display ='block'}
    else { dropdownMenu.style.display = 'none'}
})