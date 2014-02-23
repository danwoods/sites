/*
 * sites
 * https://github.com/dwoodson/sites
 *
 * Copyright (c) 2014 Dan Woodson
 * Licensed under the MIT license.
 */

'use strict';

var routing = require('../lib/routing.js');

exports.awesome = function() {
  return 'awesome';
};

//var initSeq = [exports.init];

function init(){
  routing.start();
}
init();
