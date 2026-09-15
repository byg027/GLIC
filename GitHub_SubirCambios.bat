@echo off
cd /d "%~dp0"

git add -A
git commit -m "Actualizacion del sitio web"
git push

pause