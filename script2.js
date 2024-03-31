document.getElementById('downloadButton').addEventListener('click', function () {
  // Define the URLs of the images you want to download
  var imageUrls = [
      "bdc4.jpg",
      "bdc5.jpg",
      "bdc9.jpg"
  ];

  // Create an anchor element for each image
  imageUrls.forEach(function (imageUrl, index) {
      var downloadLink = document.createElement('a');
      downloadLink.href = imageUrl;
      downloadLink.download = 'bdc' + (index + 4) + '.jpg'; // Set filenames based on the index
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".but2");
  button.addEventListener("click", function() {
      // Replace this with the URL of your PDF file
      const pdfUrl = "BDC_Practical_10.pdf";
      
      // Create an anchor element to trigger the download
      const anchor = document.createElement("a");
      anchor.href = pdfUrl;
      anchor.download = "BDC_Practical_10.pdf";
      anchor.click();
  });
});
