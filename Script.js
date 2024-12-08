// Function to toggle content visibility
function toggleContent(sectionId) {
    const content = document.querySelector(`#${sectionId} .project-content`);
    if (content) {
        content.classList.toggle('visible');
    }
}

// Function to add show more button to reflection section
function addShowMoreButton() {
    const reflectionSection = document.querySelector('#reflection .project-content');
    const showMoreBtn = document.createElement('button');
    showMoreBtn.textContent = 'Show More';
    showMoreBtn.className = 'show-more-btn';
    showMoreBtn.onclick = () => {
        reflectionSection.classList.toggle('visible');
        showMoreBtn.textContent = reflectionSection.classList.contains('visible') ? 'Show Less' : 'Show More';
    };
    
    // Insert button before the content
    reflectionSection.parentNode.insertBefore(showMoreBtn, reflectionSection);
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set up click handlers for "What I Learned" sections
    document.querySelectorAll('.reflection h3').forEach(heading => {
        heading.onclick = function() {
            const section = this.closest('section');
            if (section) {
                toggleContent(section.id);
            }
        }
    });

    // Add show more button to reflection section
    addShowMoreButton();
});
