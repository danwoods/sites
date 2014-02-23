/*
 * sites
 * https://github.com/dwoodson/sites
 *
 * Copyright (c) 2014 Dan Woodson
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');

exports.new = function(site_id) {
  var cfg = {"sites":[]};

  console.log('creating new site: '+site_id);
  try{
    cfg = require('../config.json');
  }
  catch(err){
    if(err.code && err.code === 'MODULE_NOT_FOUND'){
      console.log('no config file found');
    }
  }
  cfg.sites.push({"id":site_id});
  fs.writeFileSync('config.json', JSON.stringify(cfg));
};
