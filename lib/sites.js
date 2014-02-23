/*
 * sites
 * https://github.com/dwoodson/sites
 *
 * Copyright (c) 2014 Dan Woodson
 * Licensed under the MIT license.
 */

var http = require('http');

'use strict';

var serveStatic = function(a, b){
  console.log(a);
  console.log(b);
};

exports.awesome = function() {
  //return 'awesome';
  // Start Server
  http.createServer(function (req, res) {
    // Make '/' point to index.html
    if(req.url === '/'){
      req.url = req.url + 'index.html';
      serveStatic(req, res);
    }
    else{
      req.chunks = [];
      req.on('data', function (chunk) {
        req.chunks.push(chunk.toString());
      });
      req.url = decodeURI(req.url);
      router.dispatch(req, res, function (err) {
        if (err) {
          serveStatic(req, res);
          return;
        }
      });
    }
  }).listen(1337, '0.0.0.0');
  //log.info('playlist.js::server running at http://127.0.0.1:1337/');
};
