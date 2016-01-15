# Suzi Portfolio

To get setup on the Mac:

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install node --without-npm  
mkdir "${HOME}/.npm-packages"  
echo NPM_PACKAGES="${HOME}/.npm-packages" >> ${HOME}/.bashrc  
echo prefix=${HOME}/.npm-packages >> ${HOME}/.npmrc  
curl -L https://www.npmjs.org/install.sh | sh  
echo NODE_PATH=\"\$NPM_PACKAGES/lib/node_modules:\$NODE_PATH\" >> ${HOME}/.bashrc  
echo PATH=\"\$NPM_PACKAGES/bin:\$PATH\" >> ${HOME}/.bashrc  
echo source "~/.bashrc" >> ${HOME}/.bash_profile  
source ~/.bashrc  

npm install -g yo gulp bower generator-gulp-angular node-gyp

git clone https://github.com/MarkZuber/suziportfolio.git


 `$ gulp` to build an optimized version of your application in folder dist
- `$ gulp serve` to start BrowserSync server on your source files with live reload
- `$ gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `$ gulp test` to run your unit tests with Karma
- `$ gulp test:auto` to run your unit tests with Karma in watch mode
- `$ gulp protractor` to launch your e2e tests with Protractor
- `$ gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

More details are available in docs and recipes
https://github.com/Swiip/generator-gulp-angular/tree/master/docs
