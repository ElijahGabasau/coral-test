// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  //for possible safety issues dev.js has been included in the gitignore file
  //in order to run the app on a local machine, make sure to make your own copy according to prod.js
  module.exports = require('./dev');
}
