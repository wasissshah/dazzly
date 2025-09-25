(function () {
    const passwordField = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');
    const toggleIcon = togglePasswordButton ? togglePasswordButton.querySelector('i') : null;

    if (togglePasswordButton) {
        togglePasswordButton.setAttribute('aria-pressed', 'false');
        togglePasswordButton.setAttribute('title', 'Show password');
    }

    function setPasswordVisibility(isHidden) {
        if (!passwordField || !togglePasswordButton) {
            return;
        }

        passwordField.setAttribute('type', isHidden ? 'password' : 'text');
        togglePasswordButton.setAttribute('aria-pressed', String(!isHidden));
        togglePasswordButton.setAttribute('title', isHidden ? 'Show password' : 'Hide password');

        if (toggleIcon) {
            toggleIcon.classList.toggle('fa-eye', isHidden);
            toggleIcon.classList.toggle('fa-eye-slash', !isHidden);
        }
    }

    if (togglePasswordButton && passwordField) {
        togglePasswordButton.addEventListener('click', () => {
            const isCurrentlyHidden = passwordField.getAttribute('type') === 'password';
            setPasswordVisibility(!isCurrentlyHidden);
        });
    }

    const greetingHeading = document.getElementById('greetingHeading');
    const subHeading = document.getElementById('subHeading');
    let fallbackSubheading = subHeading ? subHeading.textContent : '';

    if (greetingHeading && subHeading) {
        const now = new Date();
        const hour = now.getHours();
        const greetingPrefix = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
        const titles = ['Explorer', 'Maker', 'Strategist', 'Dreamer', 'Leader', 'Trailblazer'];
        const moodLines = [
            'Use demo@dazzly.com with Password123! for an instant walkthrough.',
            'Check analytics the moment you land to keep decisions data-backed.',
            'Sync with your team faster by reviewing today’s automations.',
            'Queue up your customer journeys and let Dazzly handle the flow.',
            'Need inspiration? Visit the playbook library right after sign in.',
            'Every login unlocks a clearer picture of your customer journey.'
        ];
        const dynamicTitle = titles[now.getDay() % titles.length];
        const dynamicMood = moodLines[(now.getMinutes() + now.getDay()) % moodLines.length];

        greetingHeading.textContent = `${greetingPrefix}, ${dynamicTitle}!`;
        subHeading.textContent = dynamicMood;
        fallbackSubheading = dynamicMood;
    }

    function setSubheading(text) {
        if (!subHeading) {
            return;
        }

        subHeading.textContent = text;
    }

    const tips = [
        'Use demo@dazzly.com with Password123! for an instant walkthrough.',
        'Bookmark your dashboard to jump straight back to insights next time.',
        'Schedule a morning automation review to keep campaigns on track.',
        'Invite a teammate after login so they can follow along in real time.'
    ];

    let tipIndex = 0;
    let isBenefitFocused = false;

    function rotateTips() {
        if (!subHeading || !tips.length) {
            return;
        }

        fallbackSubheading = tips[tipIndex];
        if (!isBenefitFocused) {
            setSubheading(fallbackSubheading);
        }
        tipIndex = (tipIndex + 1) % tips.length;
        window.setTimeout(rotateTips, 12000);
    }

    if (subHeading) {
        window.setTimeout(rotateTips, 12000);
    }

    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const rememberCheckbox = document.getElementById('rememberMe');
    const loginButton = document.getElementById('loginButton');
    const feedbackBanner = document.getElementById('loginFeedback');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const rememberedEmailKey = 'dazzly.rememberedEmail';

    if (emailInput && rememberCheckbox) {
        const storedEmail = window.localStorage.getItem(rememberedEmailKey);
        if (storedEmail) {
            emailInput.value = storedEmail;
            rememberCheckbox.checked = true;
        }
    }

    function clearValidationState(input, messageElement) {
        if (!input || !messageElement) {
            return;
        }

        input.classList.remove('is-invalid', 'is-valid');
        messageElement.textContent = '';
    }

    function setValidationState(input, messageElement, isValid, message) {
        if (!input || !messageElement) {
            return;
        }

        input.classList.toggle('is-invalid', !isValid && Boolean(message));
        input.classList.toggle('is-valid', isValid && input.value.trim() !== '');
        messageElement.textContent = message || '';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateEmail(showMessage = true) {
        if (!emailInput || !emailError) {
            return true;
        }

        const value = emailInput.value.trim();

        if (!value) {
            if (showMessage) {
                setValidationState(emailInput, emailError, false, 'Email is required.');
            }
            return false;
        }

        if (!emailPattern.test(value)) {
            if (showMessage) {
                setValidationState(emailInput, emailError, false, 'Please provide a valid email address.');
            }
            return false;
        }

        if (showMessage) {
            setValidationState(emailInput, emailError, true, '');
        }
        return true;
    }

    function validatePassword(showMessage = true) {
        if (!passwordField || !passwordError) {
            return true;
        }

        const value = passwordField.value;

        if (!value.trim()) {
            if (showMessage) {
                setValidationState(passwordField, passwordError, false, 'Password is required.');
            }
            return false;
        }

        if (value.length < 8) {
            if (showMessage) {
                setValidationState(passwordField, passwordError, false, 'Use at least 8 characters.');
            }
            return false;
        }

        if (showMessage) {
            setValidationState(passwordField, passwordError, true, '');
        }
        return true;
    }

    function updateButtonState() {
        if (!loginButton) {
            return;
        }

        const canSubmit = validateEmail(false) && validatePassword(false);
        loginButton.disabled = !canSubmit;
    }

    function updateFeedback(type, message) {
        if (!feedbackBanner) {
            return;
        }

        feedbackBanner.className = 'feedback-banner';

        if (!message) {
            feedbackBanner.textContent = '';
            return;
        }

        feedbackBanner.textContent = message;
        feedbackBanner.classList.add('is-visible');

        const map = {
            success: 'is-success',
            error: 'is-error',
            info: 'is-info'
        };

        feedbackBanner.classList.add(map[type] || map.info);
    }

    function clearFeedback() {
        updateFeedback('', '');
    }

    if (emailInput) {
        emailInput.addEventListener('input', () => {
            validateEmail();
            updateButtonState();
            clearFeedback();
        });
        emailInput.addEventListener('blur', () => validateEmail());
    }

    if (passwordField) {
        passwordField.addEventListener('input', () => {
            validatePassword();
            updateButtonState();
            clearFeedback();
        });
        passwordField.addEventListener('blur', () => validatePassword());
    }

    updateButtonState();

    const credentials = {
        'demo@dazzly.com': 'Password123!',
        'teamlead@dazzly.com': 'LeadFlow!24',
        'insights@dazzly.com': 'Trends#2024'
    };

    if (form && loginButton) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();

            if (!isEmailValid || !isPasswordValid) {
                updateButtonState();
                return;
            }

            updateFeedback('info', 'Checking your credentials...');

            const originalButtonContent = loginButton.innerHTML;
            loginButton.disabled = true;
            loginButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Logging in...';

            const emailValue = emailInput ? emailInput.value.trim().toLowerCase() : '';
            const passwordValue = passwordField ? passwordField.value : '';
            const remember = rememberCheckbox ? rememberCheckbox.checked : false;

            window.setTimeout(() => {
                const isAuthenticated = Boolean(emailValue && credentials[emailValue] === passwordValue);

                if (isAuthenticated) {
                    updateFeedback('success', 'Welcome back! Redirecting you to your dashboard...');

                    if (remember && emailInput) {
                        window.localStorage.setItem(rememberedEmailKey, emailInput.value.trim());
                    } else {
                        window.localStorage.removeItem(rememberedEmailKey);
                    }

                    if (passwordField) {
                        passwordField.value = '';
                        clearValidationState(passwordField, passwordError);
                    }
                } else {
                    updateFeedback('error', "The credentials you entered didn't match our records. Try the demo account above.");
                }

                loginButton.disabled = false;
                loginButton.innerHTML = originalButtonContent;
                updateButtonState();
            }, 1200);
        });
    }

    const liveSessions = document.getElementById('liveSessions');
    const newSignups = document.getElementById('newSignups');
    const newSignupsHint = document.getElementById('newSignupsHint');

    function updateMetrics() {
        if (!liveSessions && !newSignups && !newSignupsHint) {
            return;
        }

        const sessions = Math.floor(60 + Math.random() * 40);
        const signups = Math.floor(50 + Math.random() * 60);

        if (liveSessions) {
            liveSessions.textContent = `${sessions}`;
        }

        if (newSignups) {
            newSignups.textContent = `${signups}`;
        }

        if (newSignupsHint) {
            const progress = Math.min(100, Math.round((signups / 120) * 100));
            newSignupsHint.textContent = `Daily goal: 120 · ${progress}% complete`;
        }

        window.setTimeout(updateMetrics, 7000);
    }

    updateMetrics();

    const benefitMessages = {
        automation: 'Automations run quietly in the background so you can focus on strategy.',
        analytics: 'Dashboards refresh as data arrives to keep your team informed.',
        collaboration: 'Teammates stay aligned with instant alerts and shared playbooks.'
    };

    const benefits = document.querySelectorAll('.benefits-list [data-benefit]');

    benefits.forEach((benefit) => {
        const key = benefit.getAttribute('data-benefit');
        const message = (key && benefitMessages[key]) || fallbackSubheading;

        benefit.addEventListener('mouseenter', () => {
            isBenefitFocused = true;
            if (message) {
                setSubheading(message);
            }
        });

        benefit.addEventListener('focus', () => {
            isBenefitFocused = true;
            if (message) {
                setSubheading(message);
            }
        });

        benefit.addEventListener('mouseleave', () => {
            isBenefitFocused = false;
            setSubheading(fallbackSubheading);
        });

        benefit.addEventListener('blur', () => {
            isBenefitFocused = false;
            setSubheading(fallbackSubheading);
        });

        benefit.setAttribute('tabindex', '0');
    });
})();
