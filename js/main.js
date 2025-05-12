// Elements Designs Website JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle Navigation
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = window.scrollY;
    });
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            
            // Simple validation
            if (!name.value.trim()) {
                highlightInvalidField(name);
                isValid = false;
            } else {
                removeInvalidHighlight(name);
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                highlightInvalidField(email);
                isValid = false;
            } else {
                removeInvalidHighlight(email);
            }
            
            if (!message.value.trim()) {
                highlightInvalidField(message);
                isValid = false;
            } else {
                removeInvalidHighlight(message);
            }
            
            if (isValid) {
                // In a real implementation, you would send the form data to a server here
                // For this demo, we'll just show the success message
                contactForm.style.display = 'none';
                formSuccess.classList.add('show');
                
                // Reset form for future use (if the user navigates back)
                contactForm.reset();
                
                // Scroll to the success message
                window.scrollTo({
                    top: formSuccess.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Helper functions for form validation
    function highlightInvalidField(field) {
        field.style.borderColor = '#8C5E58'; // Use secondary color for error
        field.style.backgroundColor = 'rgba(140, 94, 88, 0.05)';
    }
    
    function removeInvalidHighlight(field) {
        field.style.borderColor = '';
        field.style.backgroundColor = '';
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
