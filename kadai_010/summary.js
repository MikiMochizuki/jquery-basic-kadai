$(function () {
  // idがchange-colorのボタンがクリックされた場合
  $("#change-color").on("click", function () {
    $("#target").css("color", "red");
  });
});

$(function () {
  // idがchange-colorのボタンがクリックされた場合
  $("#change-text").on("click", function () {
    $("#target").text("Hello!");
  });
});

$(function () {
  // idがchange-colorのボタンがクリックされた場合
  $("#fade-out").on("click", function () {
    $("#target").fadeOut();
  });
});

$(function () {
  // idがchange-colorのボタンがクリックされた場合
  $("#fade-in").on("click", function () {
    $("#target").fadeIn();
  });
});
