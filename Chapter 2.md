Chapter - 02

What is NPM ?

NPM is the default package manager of javascript`s runtime node.js. Npm consists of two parts :-
1. a CLI (command line tool) for publishing and downloading packages. 
2. an online repository that host javascript packages.

Every project in javascript whether its node.js or a browser application - can be scoped as an npm package with its own package information and its package.json job to describe the project.

What is parcel/webpack ? Why do we need it ?

Parcel/Webpack/Vite/Browserify all of these are javascript module bundler. 

A bundler is a development tool that combines many Javascript code files into a single one that is production-ready loadable in the browser. 

Apart from consistent tooling environment that saves you from the pain of dependencies, many popular bundlers also  come with performance optimization features such as :- 
Hot Module Replacement, Bindling, Minify, Code splitting, to name a few.


What is .parcel-cache ?

The parcel cache folder gets generated first time we run npx parcel {entry point } command. This stores the information about the project si that every time we rebuild the project parcel doesn`t have to build every thing from scratch. this is one of the main reason why parcel builds and sets up development environment so fast. 


What is npx ?

npm is the package manager which consists of two parts - first is the online repo for publishing open source Node.js projects.
secondly it is a CLI tool that aids you install those packages and manage their versions and dependencies. 
npm doesn't run any packages by itself. if you want to run a package using npm, you must specify that package in your package.json file.

When executables are installed via npm packages, npm creates link to them: 
local installs are in ./node-modules/.bin/
global installs have links created from the global directory.

to execute a package.. 
$ ./node_modules/.bin/your-package

or by adding it to package.json file and running command
npm run your package


now comes npx into picture. 

NPX is also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry.

npx helps us avoid versioning, dependency issues and installing unnecessary packages that we just want to try out. It also provides clear and easy way of executing packages, commands, modules and even github gists and repositories.


What is the difference between dependencies and dev dependencies ?

In every web development project we have a file called package.json file. this file contains all the relevant data regarding the project i.e metadata.  there are three type of dependencies which are found in this file. dependencies devdependencies peerdependecies.

dependencies - it consists all the packages that are needed in the project along withe its version number. so whenever you install any library that is required in your project that library you can find it in the dependencies object. 

devdependencies - this object consist of all the packages that are used in the project in its development phase and not in the production or development environment with its version number. USe the below command to add more devdependencies in your project 

 npm install <packagename> --save-dev
 npm install -D <packagename>


 What is tree shaking ?

Tree shaking is a term commonly used within a javascript context to describe the removal of dead code. In modern js applications we use module bundlers to automatically remove dead code when bundling JS files into single files. This is important for preparing code that is production ready, with clean structure and minimal size.

What is hot module replacement ?

HMR also known as HOT Module Replacement exchanges, adds, or removes modules while an application is running without a full reload. this can significantly speed up development in a few ways:
1. Retain application state which is lost during a full reload.
2. Same valubale development time by only updating what`s changed.
3. Instantly update the browser when the modification are made to CSS/JS in the source code,which is almost comparable to changing styles directly in the browser dev tools.


List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.


What is `.gitignore`? What should we add and not add into it?

The .gitignore file is a text file  that tells Git which files or folder to ignore in a project. 

A local .gitignore file is usually placed in the root directory of a project. You can also create a global .gitignore file and any enteries in that file will be ignored in all of your Git repositories.

To create a local .gitignore file, create a text file and name it .gitignore (remember to include . at the beginning). 

The files which we don`t want in our github repositories whereas we want it in our local machine those files should be added to .gitignore text file . 

Any files which can be regenerated in the server we basically put them in our gitignore whereas our source code should never be put into our gitignore.

for example node modules can be regenerated via package.json so we put it in our gitignore. there`s no need to push such heavy folder into github repositories.

What is the difference between package.json and package-lock.json ?

In Node.js, package.json is a verioning file used to install multiple packages in your project. As you initialize your node application, you will see three files installed in your app that is node_modules, package.json, and package-lock.json.

A package.json file contains meta data about the project and also the functional depenedencies tht is required by the application.

package-lock.json is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json. Let`a say if your current version of the package is 1.3.2 then it well save the version with (^) sign. Here carot means it will support any higher version.

package.json - It contains the basic information about the project. It is mandatory for every project. It records important metadata about the project. It contains important information such as name, description, author, script and  dependencies.

package-lock.json - It describes the exact tree that was generated to allow subsequent installs to have the identical tree. It is automatically generated for those operations where npm modifies either node_modules tree or package.json. It allows future devs to install the same dependencies in the project. It conatins the name, dependencies, and locked version of the project.


Why should I not modify package-lock.json ?

Although package.json is automatically generated and updated by npm, it an also be edited manually.This allows you to change the metadata and npm module dependencies for your NodeJs project with ease. 

In general package.json doesn`t specify the exact version numbers for dependencies (although it can if you wan`t it to). Instead, package.json generally sets the minimum version for each dependency, and it can also set a range of versions. In addition, package.json only tracks the top level dependencies for the project.

The problem with package.json is that you and your vulnerability scanner can end up seeing different versions of dependencies. Yet worse, you could be running different versions compared to what is running in production. that`s because package.json doesn`t specify exact versions, so depending on when/where you invoke npm install, you can see different version than a vulnerbility scanner. 

To solve such problem package-lock.json file was introduced in nom version 5. It is a generated file and is not designed to manually edit. Its purpose is to track the entire tree of dependencies (inclusing dependenies of dependencies aka transitive dependencies) and the exact version of each dependency. 

You should commit package-lock.json to your code repository. Sharing this file with teammates and the production environment is the best way to make  sure that everyone has the same configuration for their copy of their project.

What is node_modules ? Is it good idea to push it into git ?

The node_modules folder is used to save all downloaded packages from NPM in your computer for the javascript project that you have. 

The node modules foler is always kept in .gitignore file as we never push it into git instead we push package-lock.json into git which keeps track record of all the dependencies and whenever we access it in another machine we can install all the dependencies using nom install command and packgae-lock.json file.

So anything which can be regenerated should never be push into git. and node modules is also heavy in size so it`s of no use to push and pull such big size files into git.

What is the dist folder ? 

dist stands for distribution and is the minified or concatnated version which will be used on production sites.

The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. 

Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

What is browsers list ?

Browserslist is a tool for specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. 

During development we want to use the latest JS features as it makes out jobs easier, leads to cleaner code, possibly better performance. 

As Js evolves, browsers won`t support new features at the same pace, for instance not all browsers have built in support for ES6 (aka ES 2015). By using browserslist, transpilers/bundlers know what browsers you want to support, so they can group browsers in different categories and generate separate bundles.

Legacy bundle - Contains polyfills, large bundle size, compatible with old browsers without ES6 support.

Modern Bundle - Smaller bundle size, optimized fro modern browsers.

So our entry point is generated in a way that it`ll load the required bundles according to current browser being used by a user.

