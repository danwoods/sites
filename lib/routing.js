/*
 * sites
 * https://github.com/dwoodson/sites
 *
 * Copyright (c) 2014 Dan Woodson
 * Licensed under the MIT license.
 */

'use strict';

var director = require('director'),
    siteManager = require('./siteManager.js'),
    router = new director.cli.Router();

exports.start = function() {
  router.on('new', function () {
    siteManager.new(process.argv[3]);
  });

  router.on('create', function () {
    console.log('create something');
  });

  router.on(/destroy/, function () {
    console.log('destroy something');
  });

  // You will need to dispatch the cli arguments yourself
  router.dispatch('on', process.argv[2]);
  //return 'awesome';
};
