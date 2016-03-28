# client-app

client app starter kit

## Features

## Usage

Clone the repo and initialize git:
```
git clone https://github.com/n-j-m/client-app your_project
cd your_project
rm -rf .git
git init
npm install
```
Add a ```.env``` file at the project root containing the following:
```
PORT=3000                   # optional
HOST=localhost              # the host webpack-dev-server runs on
```

## Scripts

 - **npm run start** : `webpack-dev-server --config ./build/webpack.dev.js`
 - **npm run build** : `webpack -p --config ./build/webpack.build.js`
 - **npm run readme** : `./node_modules/.bin/node-readme`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[dotenv](https://www.npmjs.com/package/dotenv) | ^2.0.0 | ✔
[babel-core](https://www.npmjs.com/package/babel-core) | ^6.5.2 | ✔
[babel-loader](https://www.npmjs.com/package/babel-loader) | ^6.2.3 | ✔
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) | ^6.5.0 | ✔
[babel-preset-stage-0](https://www.npmjs.com/package/babel-preset-stage-0) | ^6.5.0 | ✔
[cross-env](https://www.npmjs.com/package/cross-env) | ^1.0.7 | ✔
[css-loader](https://www.npmjs.com/package/css-loader) | ^0.23.1 | ✔
[file-loader](https://www.npmjs.com/package/file-loader) | ^0.8.5 | ✔
[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) | ^2.9.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[postcss-loader](https://www.npmjs.com/package/postcss-loader) | ^0.8.1 | ✔
[style-loader](https://www.npmjs.com/package/style-loader) | ^0.13.0 | ✔
[url-loader](https://www.npmjs.com/package/url-loader) | ^0.5.7 | ✔
[webpack](https://www.npmjs.com/package/webpack) | ^1.12.14 | ✔
[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) | ^1.14.1 | ✔
[webpack-merge](https://www.npmjs.com/package/webpack-merge) | ^0.7.3 | ✔


## Author



## License

 - **MIT** : http://opensource.org/licenses/MIT