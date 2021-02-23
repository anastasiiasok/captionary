// $(document).ready(function () {
//   $("#btn").click(function () {
//     var form_data = new FormData();
//     var imageOne = $("#image_one")[0].files;
//     var imageTwo = $("#image_two")[0].files;
//     var imageThree = $("#image_three")[0].files;

//     if (imageOne.length > 0 && imageTwo.length > 0 && imageThree.length > 0) {
//       form_data.append("file", imageOne[0]);
//       form_data.append("file", imageTwo[0]);
//       form_data.append("file", imageThree[0]);

//       $.ajax({
//         url: "updateGame.php",
//         type: "post",
//         data: form_data,
//         contentType: false,
//         processData: false,
//         success: function (response) {
//           if (response != 0) {
//             console.log("Succesfully Uploaded");
//           } else {
//             alert("file not uploaded");
//           }
//         },
//       });
//     } else {
//       alert("Please select a file.");
//     }
//   });
// });

const form = document.querySelector("#form");
const fileInput = document.querySelector("#image_one");
const previewImages = document.querySelector(".preview-images");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

fileInput.addEventListener("change", (e) => {
  if (e.target.files.length <= 6) {
    // creating a condition to upload maximum 6 images
    generatePrevievImages(e.target.files);
  } else {
    const strInfo = `You uploaded ${e.target.files.length} images. Allows maximum 6 images`;
    previewImages.innerHTML = strInfo;
    alert(strInfo); // if condition is more than 6 alert will popup with strInfo
  }
});

function previewFunc(file, resultDom) {
  console.log(file.type);
  if (!file.type.match(/image.*/)) return false; // The match() method retrieves the result of matching image against a regular expression
  const reader = new FileReader(); // creating the file reader

  reader.addEventListener("load", (e) => {
    //listener for the file download event at the file reader
    const resultDomItem = `
      <div class="preview-images__item">
        <img src="${e.target.result}">
      </div>
    `;
    resultDom.insertAdjacentHTML("beforeend", resultDomItem);
  });
  reader.readAsDataURL(file); // The readAsDataURL method is used to read the contents of the specified file
}

function generatePrevievImages(files) {
  previewImages.innerHTML = "";
  for (const file of files) {
    // method as (for let i)
    previewFunc(file, previewImages);
  }
}
