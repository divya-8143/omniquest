@echo off
echo ========================================================
echo   Omniquest - Launching Game Directly in Browser
echo ========================================================
echo.

cd /d "%~dp0"

echo Opening index.html directly...
start "" "%~dp0index.html"

echo.
echo ========================================================
echo   Omniquest is now open in your browser!
echo ========================================================
echo.
pause
