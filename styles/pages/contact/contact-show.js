document.addEventListener('DOMContentLoaded', function () {
    var headerContact = document.getElementById('header-contact');
    var contactPageWrapper = document.getElementById('contact-page-wrapper');

    function showContactPage() {
        contactPageWrapper.style.display = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    headerContact.addEventListener('click', showContactPage);
});