console.log("Hey, thanks for looking through the code. This site is still needing feedback and I'm still working on it so if you have any feedback, I'd love to hear your thoughts. I convinced a UX designer to help me out with my portfolio and if you'd like me to direct her to you, I can do so because she's currently up for hire as well. ");
console.log("----------------------------------------------------------------------------------------");

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
});
