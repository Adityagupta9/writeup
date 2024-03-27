document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".but2");
    button.addEventListener("click", function() {
        // Replace this with the URL of your PDF file
        const pdfUrl = "CVDL_TAE_2.pdf";
        
        // Create an anchor element to trigger the download
        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.download = "CVDL_TAE_2.pdf";
        anchor.click();
    });
});