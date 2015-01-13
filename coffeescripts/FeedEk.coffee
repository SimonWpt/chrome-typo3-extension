#*
#* FeedEk jQuery RSS/ATOM Feed Plugin
#* http://jquery-plugins.net/FeedEk/FeedEk.html  https://github.com/enginkizil/FeedEk
#* Author : Engin KIZIL http://www.enginkizil.com
#*
#* Changes by Bertram Simon / http://www.agentur-simon.de / @SimonWpt
#*

((e) ->
  e.fn.FeedEk = (t) ->
    n =
      FeedUrl: "http://feeds.feedburner.com/typo3/Bosb"
      MaxCount: 100
      CharacterLimit: 0
      TitleLinkTarget: "_blank"
      Header: "Latest"

    e.extend n, t  if t
    r = e(this).attr("id")

    e.ajax
      url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=" + encodeURIComponent(n.FeedUrl)
      dataType: "jsonp"
      success: (t) ->
        e("#" + r).empty()
        s = ""
        counter = 0

        e.each t.responseData.feed.entries, (e, t) ->
          d = new Date(t.publishedDate)
          cd = new Date()

          b = (""+d.getUTCFullYear()).substring(2) + "/" + addZ(d.getUTCMonth() + 1) + "/" + addZ(d.getUTCDate())
          cb = (""+cd.getUTCFullYear()).substring(2) + "/" + addZ(cd.getUTCMonth() + 1) + "/" + addZ(cd.getUTCDate())

          if b == cb
            span = '<span class="badge now pull-right">'
          else
            span = '<span class="badge pull-right">'

          if r == "t3ver"
            x = t.content.replace(/^.*(TYPO3) (\d\.\d*\.?\d*).*$/img, "$1 <strong>$2</strong>")
            y = 'http://sourceforge.net/projects/typo3/files/' + t.content.replace(/^(.*TYPO3 \d\.\d*\.?\d*).*/img,
                "$1");
          else
            x = t.title
            y = t.link
          if r == "t3ver" && (/typo3_src-(\d|\.)+.tar.gz/im.test(t.content) && (counter < n.MaxCount))
            counter = counter + 1
            s += '<a href="' + y + '" class="list-group-item clearfix" target="' + n.TitleLinkTarget + '" data-toggle="tooltip" title="' + t.title + '">' + x + span + b + '</span></a>'
          if r == "t3news" && (counter < n.MaxCount)
            counter = counter + 1
            s += '<a href="' + y + '" class="list-group-item clearfix" target="' + n.TitleLinkTarget + '" data-toggle="tooltip" title="' + t.title + '">' + x + span + b + '</span></a>'

        e("#" + r).append '<div class="list-group"><div class="list-group-item active">' + n.Header + '</div>' + s + '</div>') jQuery

addZ = (n) ->
  (if n < 10 then "0" + n else "" + n)