// function formChange(form_name) {
// //   $("form#information-form").addClass("hid");
//   $("form").addClass("hid");
//   $("form#" + form_name).removeClass("hid");
// }

$(".checkbox-s").click(function () {
  $(".checkbox-s i").toggleClass("show");
  $("#accept").click();
  if ($("input#accept").is(":checked")) {
    $(".team-btn-area").removeClass("hidden");
    $(".reg-btn-area").addClass("hidden");
  }
  else{
    $(".team-btn-area").addClass("hidden");
    $("#newTeam-form").addClass("hidden");
    $("#addTeam-form").addClass("hidden");
    $("#addTeam").removeClass("hidden");
    $("#newTeam").removeClass("hidden");
    $(".reg-btn-area").removeClass("hidden");
  }
});

$("#newTeam").click(function () {
  $(this).addClass("hidden");
  $("#addTeam-form").addClass("hidden");
  $("#newTeam-form").removeClass("hidden");
  $("#addTeam").removeClass("hidden");
});

$("#addTeam").click(function () {
  $(this).addClass("hidden");
  $("#newTeam-form").addClass("hidden");
  $("#addTeam-form").removeClass("hidden");
  $("#newTeam").removeClass("hidden");
});
