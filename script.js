// Add event listener to window load
window.addEventListener('load', function() {
    // Get all elements with class fade-in
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Add fade-in animation to elements
    fadeInElements.forEach(function(element) {
        element.classList.add('fade-in');
    });
});

// Add event listener to window scroll
window.addEventListener('scroll', function() {
    // Get all elements with class manga-story
    const mangaStoryElements = document.querySelectorAll('.manga-story');

    // Add fade-in animation to elements on scroll
    mangaStoryElements.forEach(function(element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('fade-in');
        }
    });
});