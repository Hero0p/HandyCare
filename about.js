const hamBurgerBtn = document.getElementById('hamBurger');
hamBurgerBtn.addEventListener('click', function () {
    const responsiveRight = document.querySelector('.responsive')
    hamBurgerBtn.classList.toggle('active')
    if (hamBurgerBtn.classList.contains('active')) {
        responsiveRight.classList.add('active')
    }
    else {
        responsiveRight.classList.remove('active')
    }
})