@echo off
echo ========================================================
echo   Omniquest - 50k+ LOC Auto Git Committer & ZIP Creator
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/3] Staging and committing all new production TypeScript modules...
git add .
git commit -m "feat: expand complete RPG codebase past 50k+ production LOC"

echo [2/3] Creating fresh omniquest_submission.zip...
tar -a -c -f "..\omniquest_submission.zip" --exclude="node_modules" --exclude="*.bat" * .git

echo [3/3] Pushing updates to GitHub remote...
git push origin main

echo.
echo ========================================================
echo   SUCCESS! 
echo   ZIP location: D:\ElevateIQ\LionixRohith\github_projects\Omniquest\omniquest_submission.zip
echo ========================================================
echo.
pause
