$(".sidebar-toggle-btn").click(function(){
    $(".sidebar").toggleClass("open");
});

var active = $("#nav-active").html();

$("nav > a").removeClass("active");
$("nav > a." + active).addClass("active");