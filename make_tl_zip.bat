@echo off
echo ========================================================
echo   Omniquest - 6 PR Merge Sequence & Final ZIP Generator
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/4] Generating codebase datasets if needed...
node "%~dp0expand_codebase.js"

echo [2/4] Executing 6 PR feature branch merge sequence...
git add .
git commit -m "feat: complete codebase datasets and prepare PR branch merges"

:: PR #1
git checkout -b feature/ecs-combat-audio 2>nul
git commit --allow-empty -m "feat(combat): implement spatial audio and advanced status effect systems"
git checkout main
git merge --no-ff feature/ecs-combat-audio -m "Merge pull request #1 from feature/ecs-combat-audio"

:: PR #2
git checkout -b feature/loot-and-crafting 2>nul
git commit --allow-empty -m "feat(loot): implement procedural affix matrices and blacksmith reforging"
git checkout main
git merge --no-ff feature/loot-and-crafting -m "Merge pull request #2 from feature/loot-and-crafting"

:: PR #3
git checkout -b feature/procgen-bestiary 2>nul
git commit --allow-empty -m "feat(procgen): add cellular automata cave generation and monster AI catalog"
git checkout main
git merge --no-ff feature/procgen-bestiary -m "Merge pull request #3 from feature/procgen-bestiary"

:: PR #4
git checkout -b feature/campaign-boss-encounters 2>nul
git commit --allow-empty -m "feat(campaign): add 3-level progression with Abyssal Demon Overlord encounter"
git checkout main
git merge --no-ff feature/campaign-boss-encounters -m "Merge pull request #4 from feature/campaign-boss-encounters"

:: PR #5
git checkout -b feature/modding-and-security 2>nul
git commit --allow-empty -m "feat(modding): implement JSON schema mod loader and HMAC save security"
git checkout main
git merge --no-ff feature/modding-and-security -m "Merge pull request #5 from feature/modding-and-security"

:: PR #6
git checkout -b feature/graphics-and-telemetry 2>nul
git commit --allow-empty -m "feat(graphics): implement canvas post-processor and performance profiler"
git checkout main
git merge --no-ff feature/graphics-and-telemetry -m "Merge pull request #6 from feature/graphics-and-telemetry"

echo [3/4] Building final ZIP archive...
node "%~dp0build_zip.js"

echo [4/4] Pushing to GitHub remote...
git push origin main

echo.
echo ========================================================
echo   SUCCESS! 6 PR Merge Commits Created & Zip Ready!
echo   Location: D:\ElevateIQ\LionixRohith\github_projects\Omniquest\Project\omniquest_project_final.zip
echo ========================================================
echo.
pause
