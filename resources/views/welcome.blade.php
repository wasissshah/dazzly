<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Log in to your Dazzly workspace to continue managing automations, analytics, and customer experiences.">
    <title>Dazzly &mdash; Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('assets/css/main-page.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/login&signup.css') }}">
</head>

<body style="background-color: #F8F9FA;">

    <div class="main-sec">
        <div class="left-side">
            <div class="login-card">
                <a href="/" class="logo d-flex align-items-center gap-3 mb-5 text-decoration-none">
                    <img src="{{ asset('assets/img/Logo.svg') }}" width="66" height="80" alt="Dazzly Logo">
                    <div class="logo-text">Dazzly</div>
                </a>
                <h1 class="fw-bold mb-2" id="greetingHeading">Welcome Back</h1>
                <p class="lead mb-4" id="subHeading">Log in to pick up where you left off.</p>
                <div class="feedback-banner" id="loginFeedback" role="alert" aria-live="polite"></div>
                <form id="loginForm" class="form" novalidate>
                    <div class="mb-4">
                        <label for="email" class="label">Email Address</label>
                        <input id="email" name="email" type="email" placeholder="Enter your email" class="input-wrapper"
                            autocomplete="email" required>
                        <p class="validation-message" id="emailError" role="alert"></p>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="label">Password</label>
                        <div class="position-relative password-wrapper">
                            <input type="password" class="input-wrapper" id="password" name="password"
                                placeholder="Enter your password" autocomplete="current-password" minlength="8" required>
                            <button type="button" class="toggle-password" id="togglePassword"
                                aria-label="Toggle password visibility">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </button>
                        </div>
                        <p class="validation-message" id="passwordError" role="alert"></p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5 form-meta">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="rememberMe">
                            <label class="form-check-label" for="rememberMe">
                                Remember Me on this device
                            </label>
                        </div>
                        <a href="#" class="text-decoration-none forget-pass">Forgot Password?</a>
                    </div>
                    <button type="submit" id="loginButton" class="login-btn mb-4 border-0 w-100">Log In</button>
                </form>
                <p class="demo-tip text-center mb-4">Try our demo credentials: <strong>demo@dazzly.com</strong> / <strong>Password123!</strong></p>
                <div class="divider text-center mb-4">
                    <span class="divider-label">or continue with</span>
                </div>
                <div class="social-login">
                    <a href="#" class="google-btn mb-3 text-decoration-none">
                        <img src="{{ asset('assets/img/google-icon.svg') }}" width="26" height="26" alt="Google Icon"
                            loading="lazy">
                        Google
                    </a>
                </div>
                <div class="signup-prompt text-center">
                    <span>Don’t have an account?</span>
                    <a href="#" class="text-primary fw-bold ms-1">Create one now</a>
                </div>
            </div>
        </div>
        <div class="right-side">
            <div class="right-side-content">
                <span class="badge rounded-pill text-bg-light text-uppercase mb-4">Dashboard Preview</span>
                <h2 class="right-side-title mb-3">Stay in sync with your customer journey</h2>
                <p class="right-side-text mb-5">Dazzly keeps every automation, insight, and conversation aligned so your team
                    can deliver remarkable experiences in real time.</p>
                <div class="insight-grid mb-5">
                    <div class="insight-card">
                        <span class="insight-label">Live Sessions</span>
                        <span class="insight-value" id="liveSessions">--</span>
                        <span class="insight-subtext">Updating continuously</span>
                    </div>
                    <div class="insight-card">
                        <span class="insight-label">New Signups</span>
                        <span class="insight-value" id="newSignups">--</span>
                        <span class="insight-subtext" id="newSignupsHint">Daily goal: 120</span>
                    </div>
                </div>
                <ul class="benefits-list">
                    <li data-benefit="automation">Automate repetitive work and focus on the moments that matter most.</li>
                    <li data-benefit="analytics">Visualize performance with dashboards that update as your team acts.</li>
                    <li data-benefit="collaboration">Collaborate with teammates using shared playbooks and real-time alerts.</li>
                </ul>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('assets/js/main.js') }}"></script>
</body>

</html>
