function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = '🎊 Thanks for clicking! You are awesome! 🎊';

    // Add a simple animation
    messageElement.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    messageElement.style.transform = 'scale(1.2)';
    messageElement.style.opacity = '1';

    setTimeout(() => {
        messageElement.style.transform = 'scale(1)';
    }, 300);
} 
