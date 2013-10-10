(function() {
  (function(e) {
    return e.fn.FeedEk = function(t) {
      var i, n, r;

      n = {
        FeedUrl: "http://sourceforge.net/api/file/index/project-id/20391/mtime/desc/limit/100/rss",
        MaxCount: 100,
        CharacterLimit: 0,
        TitleLinkTarget: "_blank",
        Header: "Latest"
      };
      if (t) {
        e.extend(n, t);
      }
      r = e(this).attr("id");
      i = void 0;
      return e.ajax({
        url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&output=json&q=" + encodeURIComponent(n.FeedUrl) + "&hl=en&callback=?",
        dataType: "json",
        success: function(t) {
          var counter, s;

          e("#" + r).empty();
          s = "";
          counter = 0;
          e.each(t.responseData.feed.entries, function(e, t) {
            var x;

            x = t.title.replace('/TYPO3 Source and Dummy/', '');
            if (x.indexOf('/') === -1 && (counter < n.MaxCount)) {
              counter = counter + 1;
              return s += "<a href=\"" + t.link + "\" class=\"list-group-item\" target=\"" + n.TitleLinkTarget + "\" >" + x + "</a>";
            }
          });
          return e("#" + r).append("<div class=\"list-group\"><div class=\"list-group-item active\">" + n.Header + "</div>" + s + "</div>");
        }
      });
    };
  })(jQuery);

}).call(this);
