@echo off
echo Creating a simple debug version of the portfolio...

echo ^<!DOCTYPE html^> > debug.html
echo ^<html lang="en"^> >> debug.html
echo ^<head^> >> debug.html
echo     ^<meta charset="UTF-8"^> >> debug.html
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> debug.html
echo     ^<title^>Debug Portfolio View^</title^> >> debug.html
echo     ^<link rel="stylesheet" href="styles.css"^> >> debug.html
echo     ^<style^> >> debug.html
echo         body { display: block; visibility: visible; } >> debug.html
echo         .greeting, .name, .profession, .description, .cta-buttons, >> debug.html
echo         .profile-image, .orbit-element, .skill-progress, >> debug.html
echo         .about-card, .stat-item, .project-card, >> debug.html
echo         .contact-card, .contact-form { opacity: 1 !important; } >> debug.html
echo     ^</style^> >> debug.html
echo ^</head^> >> debug.html
echo ^<body^> >> debug.html
echo     ^<div class="noise-overlay"^>^</div^> >> debug.html
echo     ^<iframe src="index.html" style="width:100%; height:100vh; border:none;"^>^</iframe^> >> debug.html
echo ^</body^> >> debug.html
echo ^</html^> >> debug.html

echo Opening debug version...
start debug.html

echo Debug version opened in your default browser!
pause 