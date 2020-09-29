$.ajax('https://rss.nytimes.com/services/xml/rss/nyt/World.xml', {
  accepts: {
    xml: "application/rss+xml"
  },

  dataType: "xml",

  success: function(data) {
    $(data)
      .find("item")
      .slice(0, 8)
      .each(function() {
        const el = $(this);
        console.log(el.find("title").text());

        const template = '<p>'+el.find("title").text();+'<p>'

        document.getElementById('results').innerHTML += template;
      });
  }
});
