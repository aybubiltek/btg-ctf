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
  else {
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



function sweetAlert(title, icon, text, confirmButton, cancelButton, timer) {
  Swal.fire({
    title: `${title}`,
    icon: `${icon}`,
    text: `${text}`,
    timer: timer,
    showConfirmButton: confirmButton,
    showCancelButton: cancelButton
  })
}


function addMember() {
  const check = $("input[name=accept]").is(':checked');
  var data = {
    "name_surname": $("#name").val().trim() + " " + $("#surname").val().trim(),
    "email": $("#email").val().trim(),
    "isJoinCtf": Boolean(check)
  }

  let url;

  if (!$("#newTeam-form").hasClass("hidden")) {
    url = "/add/team"
    if (check) {
      data["team"] = {}
      data["team"]["team_name"] = $("#nTeam").val()
    }
  } else if(!$("#addTeam-form").hasClass("hidden")){
    url = "/add/memberToTeam";
    if (check) {
      data["team"] = {}
      data["team"]["team_code"] = $("#aTeam").val()
    }
  } else{
    url = "/add/member";
  }

  $.ajax({
    url: url,
    type: "POST",
    data: data
    , success(res) {
      sweetAlert("Kayıt Başarılı", "success", res.data.message, false, false, 1500);

    }, error(res) {
      sweetAlert("Kayıt Başarısız", "warning", res.responseJSON.data.message, false, false, 2000);
    }
  })

}