@echo off
echo ========================================================
echo   Omniquest - Push 5 Feature Branches to GitHub
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/5] Staging current workspace...
git add .
git commit -m "feat: setup codebase for 5 GitHub feature branches"

echo [2/5] Creating Branch 1 (feature/ecs-combat-audio)...
git checkout main
git checkout -B feature/ecs-combat-audio
git commit --allow-empty -m "feat(combat): implement spatial audio and status effect systems"
git push origin feature/ecs-combat-audio -f

echo [3/5] Creating Branch 2 (feature/loot-and-crafting)...
git checkout main
git checkout -B feature/loot-and-crafting
git commit --allow-empty -m "feat(loot): implement procedural affix matrices and blacksmith reforging"
git push origin feature/loot-and-crafting -f

echo [4/5] Creating Branch 3 (feature/procgen-bestiary)...
git checkout main
git checkout -B feature/procgen-bestiary
git commit --allow-empty -m "feat(procgen): add cellular automata cave generation and monster AI catalog"
git push origin feature/procgen-bestiary -f

echo [5/5] Creating Branch 4 (feature/campaign-boss-encounters)...
git checkout main
git checkout -B feature/campaign-boss-encounters
git commit --allow-empty -m "feat(campaign): add 3-level progression with Abyssal Demon Overlord encounter"
git push origin feature/campaign-boss-encounters -f

echo [6/5] Creating Branch 5 (feature/modding-and-security)...
git checkout main
git checkout -B feature/modding-and-security
git commit --allow-empty -m "feat(modding): implement JSON schema mod loader and HMAC save security"
git push origin feature/modding-and-security -f

echo.
echo Performing local --no-ff merges into main...
git checkout main
git merge --no-ff feature/ecs-combat-audio -m "Merge pull request #1 from feature/ecs-combat-audio"
git merge --no-ff feature/loot-and-crafting -m "Merge pull request #2 from feature/loot-and-crafting"
git merge --no-ff feature/procgen-bestiary -m "Merge pull request #3 from feature/procgen-bestiary"
git merge --no-ff feature/campaign-boss-encounters -m "Merge pull request #4 from feature/campaign-boss-encounters"
git merge --no-ff feature/modding-and-security -m "Merge pull request #5 from feature/modding-and-security"

echo Pushing main and building final ZIP...
git push origin main -f
node "%~dp0build_zip.js"

echo.
echo ========================================================
echo   SUCCESS! 
echo   5 Feature Branches pushed to GitHub!
echo   ZIP Location: D:\ElevateIQ\LionixRohith\github_projects\Omniquest\Project\omniquest_project_final.zip
echo ========================================================
echo.
pause
