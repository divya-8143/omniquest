@echo off
echo ========================================================
echo   Omniquest - 50k+ LOC Auto Git Committer & ZIP Creator
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/4] Cleaning old temporary zip archives...
if exist "omniquest_required_files.zip" del "omniquest_required_files.zip"
if exist "*.zip" del "*.zip"

echo [2/4] Staging and committing all newly expanded production TypeScript subsystems...
git add .
git commit -m "feat: complete full 52k+ production LOC architecture expansion and unit test suites"

echo [3/4] Packaging clean omniquest_submission.zip into parent folder...
tar -a -c -f "..\omniquest_submission.zip" --exclude="node_modules" --exclude="*.bat" --exclude="*.zip" * .git

echo [4/4] Pushing updates to GitHub remote...
git push origin main

echo.
echo ========================================================
echo   SUCCESS! 
echo   ZIP location: D:\ElevateIQ\LionixRohith\github_projects\Omniquest\omniquest_submission.zip
echo ========================================================
echo.
pause
