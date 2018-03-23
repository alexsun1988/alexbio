  $(document).ready( function () {
    $("section").on("click", function () {
      $(this).toggleClass("closed");
    });
    
    $("section *").on("click", function (e) {
      e.stopPropagation();
    });
  });