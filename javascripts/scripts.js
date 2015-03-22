/*
 #
 # TYPO3 CMS - Little helpers
 #
 # Function: reading + display version
 # Copyright 2015 by Agentur Simon / Bertram Simon / www.agentur-simon.de
 #
 */


(function () {
  $(document).ready(
    function openTab() {
      var openTab;

      openTab = function (localUrl) {
        window.localUrl = localUrl;
        return chrome.tabs.getSelected(null, function (tab) {
          return chrome.tabs.create({
            url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + "/typo3" + window.localUrl,
            index: tab.index + 1
          });
        });
      };
      $.getJSON("manifest.json", function (data) {
        return $("span.version").text("[version: " + data.version + "]");
      });
      $('#t3news').FeedEk({
        FeedUrl: "http://typo3.org/xml-feeds/rss.xml",
        MaxCount: 10,
        TitleLinkTarget: '_blank',
        Header: "Latest News"
      });
      $('#t3ver').FeedEk({
        FeedUrl: "http://sourceforge.net/projects/typo3/rss",
        MaxCount: 10,
        TitleLinkTarget: '_blank',
        Header: "Latest versions"
      });
      $(".typo3-login").click(function () {
        return openTab("/index.php");
      });
      $(".typo3-installtool").click(function () {
        return openTab("/install/index.php");
      });
      console.log("\n" +
      "  _/_/_/_/_/  _/      _/  _/_/_/      _/_/    _/_/_/\n" +
      "     _/        _/  _/    _/    _/  _/    _/        _/\n" +
      "    _/          _/      _/_/_/    _/    _/    _/_/\n" +
      "   _/          _/      _/        _/    _/        _/\n" +
      "  _/          _/      _/          _/_/    _/_/_/\n\n" +
      "  © 2015 TYPO3 CMS - Little Helper by Bertram Simon / Agentur Simon\n\n\n\n");
      return $('[data-toggle="tooltip"]').tooltip();
    });

}).call(this);