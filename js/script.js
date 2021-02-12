const bars = document.querySelector('.fa-bars'),
nav = document.querySelector('nav'),
arrowToTop= document.querySelector('.fa-arrow-alt-circle-up');

const showMenu = function() {
  bars.addEventListener('click', function(){
    nav.classList.toggle('active');
    bars.classList.toggle('active')
  });
}

const scrollToTop = function(){
  arrowToTop.addEventListener('click',function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  });   
};

const initFunctions = [
  showMenu(),
  scrollToTop(),
]