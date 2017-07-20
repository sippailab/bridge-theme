(function ($) {
  $(document).ready(function(){
    $("#nav").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 110) {
                $('#nav').fadeIn();
            } else {
                $('#nav').fadeOut();
            }
        });
    });

});
  }(jQuery));
