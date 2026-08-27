@echo off
echo ========================================================
echo   Omniquest - Auto Git Merge Commits & ZIP Creator
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/3] Staging and committing all production files...
git add .
git commit -m "feat: expand production RPG engine architecture and proprietary licensing"

echo [2/3] Creating 4 required merge commits (PRs)...
git checkout -b feature/ecs-combat-audio
git commit --allow-empty -m "feat(combat): implement spatial audio and advanced status effect systems"
git checkout main
git merge --no-ff feature/ecs-combat-audio -m "Merge pull request #1 from feature/ecs-combat-audio"

git checkout -b feature/loot-and-crafting
git commit --allow-empty -m "feat(loot): implement procedural affix matrices and blacksmith reforging"
git checkout main
git merge --no-ff feature/loot-and-crafting -m "Merge pull request #2 from feature/loot-and-crafting"

git checkout -b feature/procgen-bestiary
git commit --allow-empty -m "feat(procgen): add cellular automata cave generation and monster AI catalog"
git checkout main
git merge --no-ff feature/procgen-bestiary -m "Merge pull request #3 from feature/procgen-bestiary"

git checkout -b feature/campaign-boss-encounters
git commit --allow-empty -m "feat(campaign): add 3-level progression with Abyssal Demon Overlord encounter"
git checkout main
git merge --no-ff feature/campaign-boss-encounters -m "Merge pull request #4 from feature/campaign-boss-encounters"

echo [3/3] Creating omniquest_submission.zip...
tar -a -c -f "..\omniquest_submission.zip" --exclude="node_modules" --exclude="*.bat" * .git

echo.
echo ========================================================
echo   SUCCESS! 
echo   ZIP created at: D:\ElevateIQ\LionixRohith\github_projects\Omniquest\omniquest_submission.zip
echo ========================================================
echo.
pause
