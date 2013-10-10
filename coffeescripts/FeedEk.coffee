((e) ->
  e.fn.FeedEk = (t) ->
    n =
      FeedUrl: "http://sourceforge.net/api/file/index/project-id/20391/mtime/desc/limit/100/rss"
      MaxCount: 100
      CharacterLimit: 0
      TitleLinkTarget: "_blank"
      Header: "Latest"

    e.extend n, t  if t
    r = e(this).attr("id")
    i = undefined
    e.ajax
      url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&output=json&q=" + encodeURIComponent(n.FeedUrl) + "&hl=en&callback=?"
      dataType: "json"
      success: (t) ->
        e("#" + r).empty()
        s = ""
        counter = 0
        e.each t.responseData.feed.entries, (e, t) ->
          x = t.title.replace('/TYPO3 Source and Dummy/','') 
          if x.indexOf('/') is -1  && (counter < n.MaxCount)
            counter =  counter + 1
            s += "<a href=\"" + t.link + "\" class=\"list-group-item\" target=\"" + n.TitleLinkTarget + "\" >" + x + "</a>"
        e("#" + r).append "<div class=\"list-group\"><div class=\"list-group-item active\">" + n.Header + "</div>" + s + "</div>"

) jQuery
