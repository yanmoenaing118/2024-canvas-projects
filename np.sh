projectName=$1

mkdir $projectName
cp webpack.config.js $projectName
cp package.json $projectName
cp .gitignore
cp template.html $projectName
cd $projectName
mv template.html index.html
npm install webpack webpack-cli webpack-dev-server --save-dev
mkdir js css 
touch js/main.ts