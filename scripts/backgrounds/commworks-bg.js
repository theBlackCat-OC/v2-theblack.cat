const imageUrls = [
    'resources/images/bg-images/horizontal/juurikun-horizontal.png',
    'resources/images/bg-images/horizontal/chaosringen-sketch-horizontal.jpg',
    'resources/images/bg-images/horizontal/chaosringen-color-horizontal.png',
    'resources/images/bg-images/horizontal/korodrawsaug2023-horizontal.jpeg',
    'resources/images/bg-images/horizontal/romupand-aug2023-horizontal.png',
    'resources/images/bg-images/horizontal/mijeh-aug2023-horizontal.jpeg',
    'resources/images/bg-images/horizontal/ayaben-oct2023-bw.png',
    'resources/images/bg-images/horizontal/ayaben-oct2023-fullcolor.jpeg',
    // Add more image URLs as needed
  ];

  // Function to select a random image URL
  function getRandomImage() {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
  }

  // Function to set the random image as the background
  function setRandomBackground() {
    const randomImage = getRandomImage();
    const imageContainer = document.getElementById('oc-commworks');
    imageContainer.style.backgroundImage = `url('${randomImage}')`;
  }

  // Call the function on page load to set an initial random background
  setRandomBackground();