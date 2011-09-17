function(head, req) {
  var ddoc = this;
  var Mustache = require('vendor/couchapp/lib/mustache');

  start({
    "headers": {
      "Content-Type": "text/html"
     }
  });

  var header = ddoc.templates.header;
  send( Mustache.to_html(
    header,
    {
      "page_title": "Home"
    }
  ) );

  var announce = ddoc.templates.announce;
  send( Mustache.to_html(
    announce,
    {}
  ) );

  var start_home = ddoc.templates.start_home;
  send( Mustache.to_html(
    start_home,
    {}
  ) );

  var row;
  var project_banner = ddoc.templates.project_banner;
  while(row = getRow()) {
    send( Mustache.to_html(
      project_banner,
      row.value
    ) );
  }

  var end_home = ddoc.templates.end_home;
  send( Mustache.to_html(
    end_home,
    {}
  ) );

  var footer = ddoc.templates.footer;
  send( Mustache.to_html(
    footer,
    {}
  ) );
}
