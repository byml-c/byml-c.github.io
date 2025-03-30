@REM @echo off
@REM echo Uploading to server
@REM python ./send.py

@REM echo Do you want to upload to Github? (y/n)
@REM set /p choice=
@REM if %choice%==y goto upload
@REM else goto finish

:upload
echo Uploading Github
git add .
git commit -m "update website"
git push

:finish
echo Finish