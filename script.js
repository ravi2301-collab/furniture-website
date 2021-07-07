var header = document.getElementsByTagName('header')[0];
document.addEventListener('scroll', function(){
    header.classList.toggle('active', window.scrollY > 0);
});
var menu= document.querySelector('.menu');
var navigation = document.querySelector('.navigation');

const toggle = () => {
    menu.classList.toggle('active');
    navigation.classList.toggle('active')
};