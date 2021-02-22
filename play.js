$(document).ready(function () {
  $("#btn").click(function () {
    var form_data = new FormData();
    var imageOne = $("#image_one")[0].files;
    var imageTwo = $("#image_two")[0].files;
    var imageThree = $("#image_three")[0].files;

    if (imageOne.length > 0 && imageTwo.length > 0 && imageThree.length > 0) {
      form_data.append("file", imageOne[0]);
      form_data.append("file", imageTwo[0]);
      form_data.append("file", imageThree[0]);

      $.ajax({
        url: "updateGame.php",
        type: "post",
        data: form_data,
        contentType: false,
        processData: false,
        success: function (response) {
          if (response != 0) {
            console.log("Succesfully Uploaded");
          } else {
            alert("file not uploaded");
          }
        },
      });
    } else {
      alert("Please select a file.");
    }
  });
});
