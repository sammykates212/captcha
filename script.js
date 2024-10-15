// Function that is triggered once the user completes the hCaptcha
function onCaptchaComplete() {
  try {
    // Open a new pop-up window to redirect to the target page
    const popup = window.open("", "Verification Complete", "width=400,height=400");

    if (!popup) {
      alert("Popup blocked! Please allow popups and try again.");
      return;
    }

    // Write content to the pop-up window, informing the user of redirection
    popup.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Redirecting...</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              margin-top: 50px;
            }
          </style>
        </head>
        <body>
          <h2>Verification Complete!</h2>
          <p>Redirecting you to the next page...</p>
          <script>
            setTimeout(function() {
              window.location.href = "https://chat.lucasnsam.site/chat";
            }, 3000); // Redirect after 3 seconds
          </script>
        </body>
      </html>
    `);

    popup.document.close(); // Ensure document finishes writing
  } catch (error) {
    console.error("Error opening pop-up:", error);
  }
}
