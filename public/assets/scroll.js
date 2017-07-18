(function ($) {
  $(document).ready(function(){
    $("#nav").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#nav').fadeIn();
            } else {
                $('#nav').fadeOut();
            }
        });
    });

});
  }(jQuery));
