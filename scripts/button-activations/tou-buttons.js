document.addEventListener('DOMContentLoaded', function () {
    var bodyCardsWrapper = document.getElementById('body-cards-wrapper');
    var touPage = document.getElementById('tou-page');
    var revertChangesButton = document.getElementById('tou-revert');
    var headerTitleText = document.getElementById('header-title-text');

    function vibrate() {
        if ('vibrate' in navigator) {
            navigator.vibrate(100);
        }
    }

    function handleRevertAction() {
        vibrate(); // Add vibration effect
        bodyCardsWrapper.style.display = '';
        touPage.style.display = 'none';
        revertChangesButton.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.getElementById('tou-card').addEventListener('click', function () {
        vibrate(); // Add vibration effect
        if (bodyCardsWrapper.style.display !== 'none') {
            bodyCardsWrapper.style.display = 'none';
            touPage.style.display = '';
            revertChangesButton.style.display = '';
        } else {
            handleRevertAction();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('tou-revert').addEventListener('click', function () {
        handleRevertAction();
    });

    headerTitleText.addEventListener('click', function () {
        handleRevertAction();
    });

    // Add event listener for the 'Esc' key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            handleRevertAction();
        }
    });
});

