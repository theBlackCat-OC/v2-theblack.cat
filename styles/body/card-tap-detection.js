// Get the element
var tapElement = document.getElementById('tapElement');
// Add a touchstart event listener
tapElement.addEventListener('touchstart', function() {
    // Apply the CSS style when tapped
        tapElement.classList.add('tapped');
        // You can add additional actions or styles here
});