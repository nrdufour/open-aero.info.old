function(doc, req) {  
  var ddoc = this;

  var Mustache = require('vendor/couchapp/lib/mustache');
  var Markdown = require('vendor/couchapp/lib/markdown');

  var header = ddoc.templates.header;
  send( Mustache.to_html(
    header,
    {
      "page_title": doc.title
    }
  ) );

  var page = ddoc.templates.page;
  send( Mustache.to_html(
    page,
    {
      "body": Markdown.encode(doc.body)
    }
  ) );

  var footer = ddoc.templates.footer;
  send( Mustache.to_html(
    footer,
    {}
  ) );
}
