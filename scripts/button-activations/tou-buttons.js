document.addEventListener('DOMContentLoaded', function () {
    var bodyCardsWrapper = document.getElementById('body-cards-wrapper');
    var touPage = document.getElementById('tou-page');
    var revertChangesButton = document.getElementById('tou-revert');
    var headerTitleText = document.getElementById('header-title-text');

    function vibrate() {
        // Check if the Vibration API is supported
        if ('vibrate' in navigator) {
            // Vibrate for 100 milliseconds
            navigator.vibrate(100);
        }
    }

    document.getElementById('tou-card').addEventListener('click', function () {
        vibrate(); // Add vibration effect
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
        vibrate(); // Add vibration effect
        bodyCardsWrapper.style.display = '';
        touPage.style.display = 'none';
        revertChangesButton.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    headerTitleText.addEventListener('click', function () {
        vibrate(); // Add vibration effect
        bodyCardsWrapper.style.display = '';
        touPage.style.display = 'none';
        revertChangesButton.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

