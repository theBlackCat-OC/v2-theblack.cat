const imagesBodyRefBG = [
    'resources/images/bg-images/vertical/korodraws-bodyref-bg.avif',
    'resources/images/bg-images/vertical/romupand-bodyref-bg.avif',
];

function getrandomBodyRefBGImage() {
    return imagesBodyRefBG[Math.floor(Math.random() * imagesBodyRefBG.length)];
}

function setRandomBackground() {
    const randomBodyRefBGImage = getrandomBodyRefBGImage();
    const bodyrefContainer = document.getElementById('oc-body-references');
    bodyrefContainer.style.backgroundImage = `url('${randomBodyRefBGImage}')`;
}

setRandomBackground();