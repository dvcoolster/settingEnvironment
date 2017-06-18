//This file isn't transpliled, so must use CommonJS & ES5

//Register babel to run before our tests

require('babel-register')();

//Disable Webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {};
