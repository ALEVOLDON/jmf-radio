@echo off
title JMF Radio - 24/7 Live Stream
cd /d "%~dp0"
echo ======================================================
echo    🎧 STARTING JMF RADIO STATION...
echo    📁 Music Folder: D:\Soundcloud
echo ======================================================
start http://localhost:3000
node server.js
pause
