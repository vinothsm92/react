/* Scroll */
/* DatePicker */
$( function() {
  $( "#datepicker" ).datepicker({dateFormat: "dd-mm-yy"});
} );

$(document).ready(function () {
  $("#boxscroll").niceScroll({ cursorborder: "", cursorcolor: "#356b9a" });
  $(".launch-modal").click(function () {
    $("#myModal").modal({
      backdrop: 'static'
    });
  });
  /* Tabs */
  $(".request-tab ul li a").click(function () {
    var rtab = $(this).attr('tab');
    if (rtab == "1") {
      $('.appbox1').show();
      $('.appbox2').hide();
      $('.appbox3').hide();
    }
    else if (rtab == "2") {
      $('.appbox1').hide();
      $('.appbox2').show();
      $('.appbox3').hide();
    }
    else {
      $('.appbox1').hide();
      $('.appbox2').hide();
      $('.appbox3').show();
    }
  });
  /* dropdown toggle */
  $(".toggledropbtn").on("click", function () {
    $(this).parent("li").find(".dropdown-content").toggle();
    var ee = $(this).parent("li").find(".dropdown-content").css("display");
    if (ee == "block") {
      $(".dropdown-content").css("display", "none");
      $(this).parent("li").find(".dropdown-content").css("display", "block");

    } else {
      $(this).parent("li").find(".dropdown-content").css("display", "block");
    }
  });
});


