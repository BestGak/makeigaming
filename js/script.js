// Header menu 

const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu nav a');
menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('active'));
menuLinks.forEach((item) => item.addEventListener('click' , () =>  document.querySelector('html').classList.toggle('active')));

// Marquee
$(function() {
    $('.marquee').marquee({
      duration: 15000,
      startVisible: true,
      duplicated: true
    });
  });


  // Copy btn
  const copyBtn = document.querySelector('.contact__copy-btn');

  copyBtn.addEventListener('click' , () => {
    document.body.classList.add('copied')
    copyBtn.previousElementSibling.select();
    document.execCommand("copy");
  })
  
  copyBtn.addEventListener('mouseleave' , () => document.body.classList.remove('copied'));

// Behavior Scroll
document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
