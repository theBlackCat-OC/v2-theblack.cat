const imageUrls = [
    'resources/images/bg-images/horizontal/juurikun-horizontal.avif',
    'resources/images/bg-images/horizontal/chaosringen-color-horizontal.avif',
    'resources/images/bg-images/horizontal/mijeh-aug2023-horizontal.avif',
    'resources/images/bg-images/horizontal/ayaben-oct2023-fullcolor.avif',
    'resources/images/bg-images/horizontal/hairyhyur-gpose-cardbg.avif',
  ];
  function getRandomImage() {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
  }
  function setRandomCommWorksBackground() {
    const randomImage = getRandomImage();
    const imageContainer = document.getElementById('oc-commworks');
    imageContainer.style.backgroundImage = `url('${randomImage}')`;
  }
  
  setRandomCommWorksBackground();