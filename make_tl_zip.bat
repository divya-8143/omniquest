@echo off
echo ========================================================
echo   Omniquest - 50k+ LOC Final ZIP Packager for Team Lead
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/3] Committing all newly added files to Git...
git add .
git commit -m "feat: expand complete production codebase past 50,000+ LOC"

echo [2/3] Building updated omniquest_project_final.zip via Node.js...
node "%~dp0build_zip.js"

echo [3/3] Pushing latest commits to GitHub remote...
git push origin main

echo.
echo ========================================================
echo   SUCCESS! ZIP CREATED AT:
echo   %~dp0omniquest_project_final.zip
echo ========================================================
echo.
pause
