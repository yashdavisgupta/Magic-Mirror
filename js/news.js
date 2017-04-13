YUI().use('node', 'gallery-yql', function(Y) {
  new Y.yql('select title from rss where url="http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml" limit 8',
  function(r) {
    if (r.query) {
      if (r.query.results) {
         var res = Y.one('#results'), content = '';
         content += "<ul>";
         Y.each(r.query.results.item,
            function(v) {
              var the_title=v.title;
              content += "<li><img src=\"img/bullet.svg\" style=\"width:5vw; height:2vw;\">"+the_title+"</img></li>";
                });
         content += "</ul>";
         res.setContent(content);
}}});});
