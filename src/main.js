$(document).ready(function () {
    $('.menu-icon').on('click', function () {
        $('.nav-content').toggleClass('active');
        $('.fa-times').toggleClass('active');
        $('.overlay').toggleClass('active');
    })
});