@echo off
echo Ensuring image is properly copied for the website...

REM Check if web2.jpg exists in current directory
if exist "web2.jpg" (
    echo Image file found. Ready to display in website.
) else (
    echo ERROR: web2.jpg not found in current directory!
    echo Please ensure you have a file named exactly "web2.jpg" in:
    echo %CD%
    echo.
    echo If your image is in a different location or has a different name,
    echo please copy it to this directory and rename it to "web2.jpg"
)

echo.
echo You can now run launch-index.bat to view your website.
pause 