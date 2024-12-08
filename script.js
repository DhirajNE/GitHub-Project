document.addEventListener('DOMContentLoaded', () => {
    // Hide all project content initially
    document.querySelectorAll('.project-content').forEach(content => {
        content.style.display = 'none';
    });

    // Set up click handlers for "What I Learned" sections
    document.querySelectorAll('.reflection h3').forEach(heading => {
        heading.onclick = function() {
            const content = this.closest('section').querySelector('.project-content');
            if (content) {
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            }
        }
    });

    // Add show more button for reflection section
    const reflectionSection = document.querySelector('#reflection');
    const reflectionContent = reflectionSection.querySelector('.project-content');
    const showMoreBtn = document.createElement('button');
    showMoreBtn.id = 'reflection-button';
    showMoreBtn.textContent = 'Show More';
    showMoreBtn.onclick = () => {
        if (reflectionContent.style.display === 'none') {
            reflectionContent.style.display = 'block';
            showMoreBtn.textContent = 'Show Less';
        } else {
            reflectionContent.style.display = 'none';
            showMoreBtn.textContent = 'Show More';
        }
    };
    
    // Insert button before the content
    reflectionContent.parentNode.insertBefore(showMoreBtn, reflectionContent);
});
