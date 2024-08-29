document.addEventListener('DOMContentLoaded', () => {
    const aiBox = document.querySelector('.ai-box');

    aiBox.addEventListener('mouseover', () => {
        aiBox.style.backgroundColor = '#FF5722';
    });

    aiBox.addEventListener('mouseout', () => {
        aiBox.style.backgroundColor = '#4CAF50';
    });
});