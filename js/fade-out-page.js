$(document).ready(function() {
        $("a").click(function() {
          $link = $(this).attr("href");
          $("body").fadeOut(500);
          setTimeout(function() {
              console.log($link);
            window.location = $link;
          }, 500);
          return false;
        });
 });
