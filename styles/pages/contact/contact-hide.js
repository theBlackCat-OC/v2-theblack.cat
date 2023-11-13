    document.addEventListener('DOMContentLoaded', function () {
        var contactButtonClose = document.getElementById('contact-button-close');
        var contactPageWrapper = document.getElementById('contact-page-wrapper');

        function hideContactPage() {
            contactPageWrapper.style.display = 'none';
        }

        contactButtonClose.addEventListener('click', hideContactPage);

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                hideContactPage();
            }
        });
    });
