// for-zofia.html //
$(".button-back").click(function() {
  $link = $(this).data("link");
  $("body").fadeOut(500);
  setTimeout(function() {
      console.log($link);
    window.location = $link;
  }, 500);
  return false;
});
});

// index.html //
$("a").click(function() {
  $link = $(this).data("link");
  $("body").fadeOut(500);
  setTimeout(function() {
      console.log($link);
    window.location = $link;
  }, 500);
  return false;
});
});
