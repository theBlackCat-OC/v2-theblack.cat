const turnstileConfig = {
  sitekey: '0x4AAAAAAANL6mXeSnrnKbZW',
  callback: function(token) {
    console.log(`Challenge Success ${token}`);
    hideCaptchaAndShowContent();
  },
};

const turnstileRender = function(theme) {
  turnstile.render('#turnstile-widget', {
    ...turnstileConfig,
    theme: theme,
  });
};

const hideCaptchaAndShowContent = function() {
  const hiddenElement = document.querySelector(".hiddenby-turnstile");
  const widgetElement = document.querySelector(".turnstile-widget");

  if (hiddenElement && widgetElement) {
    hiddenElement.style.display = "";
    widgetElement.style.display = "none";
  }
};

const onLoadTurnstileCallback = function() {
  if (window.matchMedia) {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = prefersDarkMode ? 'dark' : 'light';
    console.log(theme);

    turnstileRender(theme);
  } else {
    console.log('matchMedia not supported, unable to determine dark mode.');
    turnstileRender('dark');
  }
};

// Debounce window resize event if needed
const debounce = (func, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
};

window.onloadTurnstileCallback = onLoadTurnstileCallback;
