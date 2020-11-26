// $(document).ready(
//   function() {
//     $("li").mouseenter(
//       function() {
//         $(this).children().last().toggleClass("active");
//       }
//     );
//     $("li").mouseleave(
//       function() {
//         $(this).children().last().toggleClass("active");
//       }
//     );
//   }
// );
//

      // click

$(document).ready(
   function() {
     $("li").click(
      function() {
        $(this).siblings("li").children().removeClass("active");
        $(this).children().last().toggleClass("active");
      }
    );
  }
);




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
