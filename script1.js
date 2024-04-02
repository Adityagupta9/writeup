// Get all download buttons
var downloadButtons = document.querySelectorAll('.downloadButton');

// Loop through each download button
downloadButtons.forEach(function(button) {
    // Add click event listener to each button
    button.addEventListener('click', function() {
        // Get the image source associated with this button
        var imageSrc = this.parentNode.querySelector('.pic1').src;
      
        // Create a temporary anchor element
        var downloadLink = document.createElement('a');
        downloadLink.href = imageSrc;
      
        // Set the download attribute with a desired filename
        downloadLink.download = 'downloaded_image.jpg';
      
        // Append the anchor element to the body
        document.body.appendChild(downloadLink);
      
        // Trigger a click event on the anchor element
        downloadLink.click();
      
        // Remove the anchor element from the DOM
        document.body.removeChild(downloadLink);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".but3");
    button.addEventListener("click", function() {
        // Replace this with the URL of your PDF file
        const pdfUrl = "daa09.pdf";
        
        // Create an anchor element to trigger the download
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "daa09.pdf";
        anchor.click();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".but4");
    button.addEventListener("click", function() {
        // Replace this with the URL of your PDF file
        const pdfUrl = "daa10.pdf";
        
        // Create an anchor element to trigger the download
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "daa10.pdf";
        anchor.click();
    });
  });
