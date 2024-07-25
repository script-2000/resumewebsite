
echo > .nojekyll

# Build the project
git init
git checkout -B main
git add -A
git commit -m "Deployed at $(date)"

#git push -f git@github.com:script-2000/resumewebsite.git main:gh-pages

cd -