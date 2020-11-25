$(document).ready(
  function() {
    $(".relative").click(
      function() {
        $(this).next().toggleClass("active");
      }
    );
  }
);
