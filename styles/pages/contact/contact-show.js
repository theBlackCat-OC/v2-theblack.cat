document.addEventListener('DOMContentLoaded', function () {
    var headerContact = document.getElementById('header-contact');
    var contactButtonClose = document.getElementById('contact-button-close');
    var contactPageWrapper = document.getElementById('contact-page-wrapper');

    function showContactPage() {
        contactPageWrapper.style.display = 'block';
    }

    function hideContactPage() {
        contactPageWrapper.style.display = 'none';
    }

    headerContact.addEventListener('click', showContactPage);
    contactButtonClose.addEventListener('click', hideContactPage);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            hideContactPage();
        }
    });
});
