projectName=$1

mkdir $projectName
cp webpack.config.js $projectName
cp -r public $projectName
cp package.json $projectName
cp .gitignore
cd $projectName
npm install webpack webpack-cli webpack-dev-server --save-dev
mkdir js css 
touch js/main.ts