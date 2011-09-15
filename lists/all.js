function(head, req) {
  var ddoc = this;
  var Mustache = require('vendor/couchapp/lib/mustache');
  var path = require('vendor/couchapp/lib/path').init(req);

  var asset = path.asset();

  start({
    "headers": {
      "Content-Type": "text/html"
     }
  });

  var header = ddoc.templates.header;
  send( Mustache.to_html(
    header,
    {
      "page_title": "OpenAero",
      "asset": asset
    }
  ) );

  var row;
  var project_banner = ddoc.templates.project_banner;
  while(row = getRow()) {
    send( Mustache.to_html(
      project_banner,
      row.value
    ) );
  }

  var footer = ddoc.templates.footer;
  send( Mustache.to_html(
    footer,
    {}
  ) );
}
