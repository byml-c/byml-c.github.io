#@echo off
#echo Uploading to server
#python ./send.py

#echo Do you want to upload to Github? (y/n)
#set /p choice=
#if %choice%==y goto upload
#else goto finish

:upload
echo Uploading Github
git add .
git commit -m "update website"
git push

:finish
echo Finish