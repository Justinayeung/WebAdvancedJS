$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $(".menu-btn").toggleClass("btn");
    });
});

window.onload = function() {
    var homeBtn = document.getElementById('home-btn');
    var worksBtn = document.getElementById('works-btn');
    homeBtn.addEventListener('click', toggleNavbar);
    worksBtn.addEventListener('click', toggleNavbar);

    function toggleNavbar() {
        $('.navbar .menu').toggleClass("active");
        $(".menu-btn").toggleClass("btn");
    };
};