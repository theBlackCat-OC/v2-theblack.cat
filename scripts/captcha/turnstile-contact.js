// Common configuration for turnstile widget
const turnstileConfig = {
  sitekey: '0x4AAAAAAANHhz8aG9kmlKhB',
  callback: function(token) {
    console.log(`Challenge Success ${token}`);
    hideCaptchaAndShowContent();
  },
};

// Check if the browser supports matchMedia
if (window.matchMedia) {
  // Check if the browser prefers dark mode
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log(prefersDarkMode);

  // Set the theme based on prefersDarkMode
  const theme = prefersDarkMode ? 'dark' : 'light';

  // Configure the turnstile widget
  window.onloadTurnstileCallback = function() {
    turnstile.render('#turnstile-widget', {
      ...turnstileConfig,
      theme: theme,
    });
  };

} else {
  // Fallback for older browsers that do not support matchMedia
  console.log('matchMedia not supported, unable to determine dark mode.');

  // Configure the turnstile widget with a default dark theme
  window.onloadTurnstileCallback = function() {
    turnstile.render('#turnstile-widget', {
      ...turnstileConfig,
      theme: 'dark',
    });
  };
}

// Common function to hide captcha and show content
function hideCaptchaAndShowContent() {
  document.querySelector(".hiddenby-turnstile").style.display = "";
  document.querySelector(".turnstile-widget").style.display = "none";
}
