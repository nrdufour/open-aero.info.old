function(doc, req) {  
  var ddoc = this;

  var Mustache = require('vendor/couchapp/lib/mustache');
  var template = ddoc.templates.project;

  return {
    "body": Mustache.to_html(template, doc)
  };
}
