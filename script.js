// Set target date (3 months from now)
const targetDate = new Date();
targetDate.setMonth(targetDate.getMonth() + 3);

// Update countdown every second
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
        // Countdown finished
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Handle email notification form
const notifyForm = document.getElementById('notifyForm');
const formMessage = document.getElementById('formMessage');

notifyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = '#ef4444';
        return;
    }
    
    // Here you would typically send the email to your backend
    // For now, we'll just show a success message
    formMessage.textContent = 'Thank you! We\'ll notify you when we launch.';
    formMessage.style.color = '#10b981';
    
    // Clear the form
    document.getElementById('email').value = '';
    
    // Reset message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

