$(document).ready(function() {
    $("#navnav").hide();
    $("#nav").on({
      "mouseenter": function() {
        $("#navnav").show();
      }
      , "mouseleave": function() {
        $("#navnav").hide();
    }
    });
});
