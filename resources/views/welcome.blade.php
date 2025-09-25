<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dazzly - Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css">
    <link rel="stylesheet" href="{{ asset('assets/css/main-page.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/login&signup.css') }}">
</head>

<body style="background-color: #F8F9FA;">

    <div class="main-sec">
        <div class="left-side">
            <div class="login-card">
                <a href="/" class="logo d-flex align-items-center gap-3 mb-5">
                    <img src="{{ asset('assets/img/Logo.svg') }}" width="66" height="80" alt="Dazzly Logo">
                    <div class="logo-text">Dazzly</div>
                </a>
                <h1 class="fw-bold">LOG IN</h1>
                <p style="font-size: 18px;" class="mb-5">Enter credentials to access your account</p>
                <form action="#" class="form">
                    <div class="mb-3">
                        <label for="email" class="label">Email Address</label>
                        <input id="email" type="email" placeholder="Enter your email" class="input-wrapper" required>
                    </div>
                    <label for="custompassword" class="label">Password</label>
                    <div class="mb-3 position-relative">
                        <input type="password" class="form-control input-wrapper" id="custompassword" placeholder="Enter your password" required>
                        <i class="fa fa-eye toggle-password position-absolute" id="customtogglePassword" aria-hidden="true"></i>
                    </div>
                    <div class="d-flex justify-content-between align-items-center flex-wrap mb-5">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="rememberMe">
                            <label class="form-check-label" for="rememberMe">
                                Remember Me
                            </label>
                        </div>
                        <a href="#" class="text-decoration-none forget-pass">Forgot Password?</a>
                    </div>
                    <button type="submit" class="login-btn mb-5 border-0 w-100">Log In</button>
                </form>
                <span style="font-size: 14px;" class="d-block text-center fw-md mb-3">Or login with</span>
                <a href="#" class="google-btn mb-3 text-decoration-none">
                    <img src="{{ asset('assets/img/google-icon.svg') }}" width="26" height="26" alt="Google Icon" loading="lazy">
                    Google
                </a>
                <span style="font-size: 14px;" class="d-block text-center">Don’t have an account? <a href="#" class="text-primary fw-bold">Sign up</a></span>
            </div>
        </div>
        <div class="right-side"></div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('assets/js/main.js') }}"></script>
</body>

</html>
