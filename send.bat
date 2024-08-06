echo "Uploading to server"
python ./send.py

echo "Uploading Github"
git add .
git commit -m "update website"
git push

echo "Finish"
pause