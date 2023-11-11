document.addEventListener('DOMContentLoaded', function () {
    var bodyCardsWrapper = document.getElementById('body-cards-wrapper');
    var touPage = document.getElementById('tou-page');
    var revertChangesButton = document.getElementById('tou-revert');
    var headerTitleText = document.getElementById('header-title-text');

    document.getElementById('tou-card').addEventListener('click', function () {
        if (bodyCardsWrapper.style.display !== 'none') {
            bodyCardsWrapper.style.display = 'none';
            touPage.style.display = '';
            revertChangesButton.style.display = '';
        } else {
            bodyCardsWrapper.style.display = '';
            touPage.style.display = 'none';
            revertChangesButton.style.display = 'none';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('tou-revert').addEventListener('click', function () {
        bodyCardsWrapper.style.display = '';
        touPage.style.display = 'none';
        revertChangesButton.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    headerTitleText.addEventListener('click', function () {
        bodyCardsWrapper.style.display = '';
        touPage.style.display = 'none';
        revertChangesButton.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
