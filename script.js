// Handle email notification form
const notifyForm = document.getElementById('notifyForm');
const formMessage = document.getElementById('formMessage');

notifyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = '#999';
        return;
    }
    
    // Here you would typically send the email to your backend
    // For now, we'll just show a success message
    formMessage.textContent = 'Thank you. We\'ll notify you when we launch.';
    formMessage.style.color = '#666';
    
    // Clear the form
    document.getElementById('email').value = '';
    
    // Reset message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
});
