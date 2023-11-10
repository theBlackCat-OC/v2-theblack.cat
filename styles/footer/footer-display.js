document.addEventListener('DOMContentLoaded', function() {
    var footer = document.getElementById('footer');
    var lastScrollY = window.scrollY;
  
    function updateFooterPosition() {
      var scrollY = window.scrollY;
  
      if (scrollY > lastScrollY) {
        footer.style.bottom = '-60px';
      } else {
        footer.style.bottom = '0';
      }
  
      lastScrollY = scrollY;
    }
    window.addEventListener('scroll', updateFooterPosition);
    updateFooterPosition();
  });
  