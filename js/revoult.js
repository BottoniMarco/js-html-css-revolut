$(document).ready(
  function() {
    $(".relative").click(
      function() {
        $(this).next().toggleClass("active");
      }
    );
  }
);


      // mouseover

// * $(document).ready(
//   function() {
//     $(".relative").mouseover(
//       function() {
//         $(this).next().toggleClass("active");
//       }
//     );
//   }
// );




// $(document).ready(
//   function() {
//     var relativeOver = $(".relative").mouseover();
//     if (relativeOver == true) {
//       $(this).next().toggleClass("active");
//     }else {
//       console.log("non è sopra");
//     }
//   }
// );
