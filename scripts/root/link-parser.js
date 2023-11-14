document.addEventListener("DOMContentLoaded", function () {
    var bodyCardsWrapper = document.getElementById('body-cards-wrapper');
    var touPage = document.getElementById('tou-page');
    var touBackButton = document.getElementById('tou-revert');
    var wcifPage = document.getElementById('wcif-page');
    var wcifBackButton = document.getElementById('wcif-revert');

    if (window.location.href.includes("contact")) {
        showContactPage();
    }

    if (window.location.href.includes("info")) {
        showInfoPage();
    }

    if (window.location.href.includes("tou")) {
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

    if (window.location.href.includes("wcif")) {
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
