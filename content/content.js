// Write all your JavaScript and JQuery code in this file! :)
var i = 1

$("#counter").on("click", function () {
    $("h1").eq(1).html(i);
    i ++;
});

$("#reset").on("click", function () {
	i = 0;
    $("h1").eq(1).html(i);
});
