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
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};