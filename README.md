# login-demo

> Vue + Express + MongoDB

> support sign in and register

## Setup
```bash
# init vue project
npm i -g vue-cli
vue init webpack login-demo

# run vue project
cd login-demo
npm run dev

# install express
npm install express -save

# install MongoDB
npm install mongoose -save
brew install mongodb --with-openssl

# start mongo data
cd ~
mkdir mongo-data
mongod --dbpath ~/mongo-data

# run server
cd server
node index

```

## cross-domain

```
proxyTable: {
      '/api': {
        target: 'http://localhost:8089/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
```

## Vue Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
