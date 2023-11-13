document.addEventListener('DOMContentLoaded', function () {
    var headerContact = document.getElementById('header-contact');
    var contactPageWrapper = document.getElementById('contact-page-wrapper');

    function showContactPage() {
        contactPageWrapper.style.visibility = '';
    }

    headerContact.addEventListener('click', showContactPage);
});