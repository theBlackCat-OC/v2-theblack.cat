const turnstileConfig = {
  sitekey: '0x4AAAAAAANHiIn8pG5nQ_UC',
  callback: function(token) {
    console.log(`Challenge Success ${token}`);
    hideCaptchaAndShowContent();
  },
};

if (window.matchMedia) {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log(prefersDarkMode);

  const theme = prefersDarkMode ? 'dark' : 'light';

  window.onloadTurnstileCallback = function() {
    turnstile.render('#turnstile-widget-commworks', {
      ...turnstileConfig,
      theme: theme,
    });
  };

} else {
  console.log('matchMedia not supported, unable to determine dark mode.');

  window.onloadTurnstileCallback = function() {
    turnstile.render('#turnstile-widget', {
      ...turnstileConfig,
      theme: 'dark',
    });
  };
}

function hideCaptchaAndShowContent() {
  document.querySelector(".hiddenby-turnstile-commworks").style.display = "";
  document.querySelector(".turnstile-widget-commworks").style.display = "none";
}
