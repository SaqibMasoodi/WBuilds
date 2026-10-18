@echo off
setlocal
title Push WBuilds to GitHub
cd /d "%~dp0" || goto failed

git symbolic-ref --quiet --short HEAD >nul || goto failed
git add --all || goto failed
git diff --cached --quiet
if errorlevel 2 goto failed
if not errorlevel 1 goto push

git commit -m "Update WBuilds website" || goto failed

:push
git push --set-upstream origin HEAD || goto failed
echo.
echo Pushed successfully.
pause
exit /b 0

:failed
echo.
echo Push stopped. Check the Git error above.
pause
exit /b 1
