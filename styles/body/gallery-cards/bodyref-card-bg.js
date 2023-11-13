const imagesBodyRefBG = [
    'resources/images/bg-images/horizontal/korodraws-bodyref-bg.avif',
    'resources/images/bg-images/horizontal/romupand-bodyref-bg.avif',
];

function getrandomBodyRefBGImage() {
    return imagesBodyRefBG[Math.floor(Math.random() * imagesBodyRefBG.length)];
}

function setRandomBodyRefBG() {
    const randomBodyRefBGImage = getrandomBodyRefBGImage();
    const bodyrefContainer = document.getElementById('oc-body-references');
    bodyrefContainer.style.backgroundImage = `url('${randomBodyRefBGImage}')`;
}

setRandomBodyRefBG();