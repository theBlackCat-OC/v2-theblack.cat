document.addEventListener("DOMContentLoaded", function () {
    var bodyCardsWrapper = document.getElementById('body-cards-wrapper');
    var infoPageWrapper = document.getElementById('info-page-wrapper');
    var contactPageWrapper = document.getElementById('contact-page-wrapper');
    var touPage = document.getElementById('tou-page');
    var touBackButton = document.getElementById('tou-revert');
    var wcifPage = document.getElementById('wcif-page');
    var wcifBackButton = document.getElementById('wcif-revert');

    function showInfoPage() {
        infoPageWrapper.style.display = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function showContactPage() {
        contactPageWrapper.style.display = '';
    }

    if (urlParams.has("goto") && urlParams.get("goto") === "contact") {
        showContactPage();
    }

    if (urlParams.has("goto") && urlParams.get("goto") === "info") {
        showInfoPage();
    }

    if (urlParams.has("goto") && urlParams.get("goto") === "tou") {
        document.getElementById('tou-card').addEventListener('click', function () {
            if (bodyCardsWrapper.style.display !== 'none') {
                bodyCardsWrapper.style.display = 'none';
                touPage.style.display = '';
                touBackButton.style.display = '';
            } else {
                handleRevertAction();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (urlParams.has("goto") && urlParams.get("goto") === "wcif") {
        document.getElementById('wcif-card').addEventListener('click', function () {
            if (bodyCardsWrapper.style.display !== 'none') {
                bodyCardsWrapper.style.display = 'none';
                wcifPage.style.display = '';
                wcifBackButton.style.display = '';
            } else {
                handleRevertAction();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
