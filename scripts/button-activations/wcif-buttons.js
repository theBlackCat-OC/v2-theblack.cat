document.addEventListener('DOMContentLoaded', function () {
    var bodyCardsWrapper = document.getElementById('body-cards-wrapper');
    var wcifPage = document.getElementById('wcif-page');
    var revertChangesButton = document.getElementById('wcif-revert');

    document.getElementById('wcif-card').addEventListener('click', function () {
        if (bodyCardsWrapper.style.display !== 'none') {
            bodyCardsWrapper.style.display = 'none';
            wcifPage.style.display = '';
            revertChangesButton.style.display = '';
        } else {
            bodyCardsWrapper.style.display = '';
            wcifPage.style.display = 'none';
            revertChangesButton.style.display = 'none';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('wcif-revert').addEventListener('click', function () {
        bodyCardsWrapper.style.display = '';
        wcifPage.style.display = 'none';
        revertChangesButton.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});