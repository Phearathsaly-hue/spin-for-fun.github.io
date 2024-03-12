
let container = document.querySelector(".container");
let btn = document.getElementById("spin");

btn.onclick = function () {
  let number = Math.ceil(Math.random() * 10000);
  container.style.transform = "rotate(" + number + "deg)";

  // Wait for the rotation animation to complete
  setTimeout(() => {
    Swal.fire({
      title: "Congratulations",
      html: "You won ",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff ",
      backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
                  `,
    });
  }, 3000); // Adjust the timeout according to your animation duration
};

// let container = document.querySelector(".container");
// let btn = document.getElementById("spin");

// btn.onclick = function () {
//   let number = Math.ceil(Math.random() * 360); // Changed to 360 to match the degrees of a circle
//   container.style.transform = "rotate(" + number + "deg)";

  

//   // Wait for the rotation animation to complete
//   setTimeout(() => {
//     let selectedItem = getSelectedItem(number);
//     Swal.fire({
//       title: "Congratulations",
//       html: "You won " + selectedItem,
//       width: 600,
//       padding: "3em",
//       color: "#716add",
//       background: "#fff url(/images/trees.png)",
//       backdrop: `
//               rgba(0,0,123,0.4)
//               url("/images/nyan-cat.gif")
//               left top
//               no-repeat
//                   `,
//     });
//   }, 3000); // Adjust the timeout according to your animation duration
// };

// function getSelectedItem(angle) {
//   let itemNumber = Math.ceil(angle / 60); // Divide 360 degrees into 6 equal parts
//   let items = [
//     "Try Again",
//     "USB",
//     "Computer",
//     "Mouse",
//     "Mouse-pad",
//     "Keyboard",
//   ];
  
//   return items[itemNumber - 1]; // Array index starts from 0
// }


// let container = document.querySelector(".container");
// let btn = document.getElementById("spin");

// btn.onclick = function () {
//   let number = Math.ceil(Math.random() * 10000);
//   container.style.transform = "rotate(" + number + "deg)";

//   // Wait for the rotation animation to complete
//   setTimeout(() => {
//     let selectedItem = getSelectedItem(number);
//     Swal.fire({
//       title: "Congratulations",
//       html: "You won",
//       width: 600,
//       padding: "3em",
//       color: "#716add",
//       background: "#fff url(/images/trees.png)",
//       backdrop: `
//               rgba(0,0,123,0.4)
//               url("/images/nyan-cat.gif")
//               left top
//               no-repeat
//                   `,
//     });
//   }, 3000); // Adjust the timeout according to your animation duration
// };


// if(Try-Again.includes(results[0])) selectedItem = "Try Again";
//   if(USB.includes(results[0])) selectedItem = "USB";
//   if(Computer.includes(results[0])) selectedItem = "Computer";
//   if(Mouse.includes(results[0])) selectedItem = "Mouse-pad";
//   if(Mouse-pad.includes(results[0])) selectedItem = "Try Again";
//   if(Keyboard.includes(results[0])) selectedItem = "Keyboard";