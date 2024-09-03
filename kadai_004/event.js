$(function () {
  // ドキュメントが読み込み完了したときのイベントハンドラ
  $(window).on("load", () => {
    console.log("loadイベントが発生しました");
  });

  // 画面がスクロールされたときのイベントハンドラ
  $(window).on("scroll", () => {
    console.log("scrollイベントが発生しました");
  });
});
