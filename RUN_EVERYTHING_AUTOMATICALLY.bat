@echo off
echo ========================================================
echo   Omniquest - Auto 5 PR Generator & GitHub Launcher
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/5] Staging current files...
git add .
git commit -m "feat: setup codebase for 5 GitHub feature branches"

echo [2/5] Pushing 5 Feature Branches to GitHub...

:: Branch 1
git checkout main
git checkout -B feature/ecs-combat-audio
git commit --allow-empty -m "feat(combat): implement spatial audio and status effect systems"
git push origin feature/ecs-combat-audio -f

:: Branch 2
git checkout main
git checkout -B feature/loot-and-crafting
git commit --allow-empty -m "feat(loot): implement procedural affix matrices and blacksmith reforging"
git push origin feature/loot-and-crafting -f

:: Branch 3
git checkout main
git checkout -B feature/procgen-bestiary
git commit --allow-empty -m "feat(procgen): add cellular automata cave generation and monster AI catalog"
git push origin feature/procgen-bestiary -f

:: Branch 4
git checkout main
git checkout -B feature/campaign-boss-encounters
git commit --allow-empty -m "feat(campaign): add 3-level progression with Abyssal Demon Overlord encounter"
git push origin feature/campaign-boss-encounters -f

:: Branch 5
git checkout main
git checkout -B feature/modding-and-security
git commit --allow-empty -m "feat(modding): implement JSON schema mod loader and HMAC save security"
git push origin feature/modding-and-security -f

echo [3/5] Merging all 5 PR branches into main...
git checkout main
git merge --no-ff feature/ecs-combat-audio -m "Merge pull request #1 from feature/ecs-combat-audio"
git merge --no-ff feature/loot-and-crafting -m "Merge pull request #2 from feature/loot-and-crafting"
git merge --no-ff feature/procgen-bestiary -m "Merge pull request #3 from feature/procgen-bestiary"
git merge --no-ff feature/campaign-boss-encounters -m "Merge pull request #4 from feature/campaign-boss-encounters"
git merge --no-ff feature/modding-and-security -m "Merge pull request #5 from feature/modding-and-security"

echo [4/5] Pushing main and generating ZIP...
git push origin main -f
node "%~dp0build_zip.js"

echo [5/5] Launching GitHub Pull Requests page in browser...
start https://github.com/divya-8143/omniquest/pulls

echo.
echo ========================================================
echo   COMPLETED! 5 PRs pushed to GitHub and ZIP generated.
echo ========================================================
echo.
pause
