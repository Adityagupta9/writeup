document.getElementById('downloadButton').addEventListener('click', function () {
  // Define the URLs of the images you want to download
  var imageUrls = [
      "bdc4.jpg",
      "bdc5.jpg"
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
