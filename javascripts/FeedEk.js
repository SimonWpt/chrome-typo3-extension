(function() {
  var addZ;

  (function(e) {
    return e.fn.FeedEk = function(t) {
      var n, r;

      n = {
        FeedUrl: "http://feeds.feedburner.com/typo3/Bosb",
        MaxCount: 100,
        CharacterLimit: 0,
        TitleLinkTarget: "_blank",
        Header: "Latest"
      };
      if (t) {
        e.extend(n, t);
      }
      r = e(this).attr("id");
      return e.ajax({
        url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=" + encodeURIComponent(n.FeedUrl),
        dataType: "jsonp",
        success: function(t) {
          var counter, s;

          e("#" + r).empty();
          s = "";
          counter = 0;
          e.each(t.responseData.feed.entries, function(e, t) {
            var b, d, x, y;

            d = new Date(t.publishedDate);
            b = addZ(d.getUTCMonth() + 1) + "/" + addZ(d.getUTCDate());
            if (r === "t3ver") {
              x = t.content.replace(/^.*(TYPO3) (\d\.\d*\.?\d*).*$/img, "$1 <strong>$2</strong>");
              y = 'http://sourceforge.net/projects/typo3/files/' + t.content.replace(/^(.*TYPO3 \d\.\d*\.?\d*).*/img, "$1");
            } else {
              x = t.title;
              y = t.link;
            }
            if (x.length > 82) {
              x = x.substring(0, 82) + "...";
            }
            if (/typo3_src-(\d|\.)+.tar.gz/im.test(t.content) && (counter < n.MaxCount)) {
              counter = counter + 1;
              s += '<a href="' + y + '" class="list-group-item" target="' + n.TitleLinkTarget + '" data-toggle="tooltip" title="' + t.title + '">' + x + '<span class="badge pull-right">' + b + '</span></a>';
            }
            if (r === "t3news" && (counter < n.MaxCount)) {
              counter = counter + 1;
              return s += '<a href="' + y + '" class="list-group-item" target="' + n.TitleLinkTarget + '" data-toggle="tooltip" title="' + t.title + '">' + x + '<span class="badge pull-right">' + b + '</span></a>';
            }
          });
          return e("#" + r).append('<div class="list-group"><div class="list-group-item active">' + n.Header + '</div>' + s + '</div>');
        }
      });
    };
  })(jQuery);

  addZ = function(n) {
    if (n < 10) {
      return "0" + n;
    } else {
      return "" + n;
    }
  };

}).call(this);
