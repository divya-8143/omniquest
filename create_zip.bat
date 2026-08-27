@echo off
echo ========================================================
echo   Omniquest - Creating Clean Submission ZIP Package
echo ========================================================
echo.

cd /d "%~dp0"
echo Packaging src, dist, index.html, package.json, README.md, and .git...
tar -a -c -f "..\omniquest_submission.zip" --exclude="node_modules" --exclude="*.bat" * .git

echo.
echo ========================================================
echo   SUCCESS! Created: omniquest_submission.zip
echo   Location: D:\ElevateIQ\LionixRohith\github_projects\Omniquest\omniquest_submission.zip
echo ========================================================
echo.
pause
