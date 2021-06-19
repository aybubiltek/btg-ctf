function formChange(form_name) {
  $("form#information-form").addClass("hid");
  $("form#" + form_name).removeClass("hid");
}


$(".checkbox-s").click(function () {
    $(".checkbox-s i").toggleClass("show");
    $("#accept").click();
})