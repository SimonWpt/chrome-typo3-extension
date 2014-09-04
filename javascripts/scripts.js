/*
# 
# TYPO3 - Little helpers
# 
# Function: reading + display version
# Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de
#
*/


(function() {
  $(function() {
    var openTab;

    openTab = function(localUrl) {
      window.localUrl = localUrl;
      return chrome.tabs.getSelected(null, function(tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + "/typo3" + window.localUrl,
          index: tab.index + 1
        });
      });
    };
    $.getJSON("manifest.json", function(data) {
      return $("span.version").text("[version: " + data.version + "]");
    });
    $('#t3news').FeedEk({
      FeedUrl: "http://feeds.feedburner.com/typo3/MbAQ",
      MaxCount: 10,
      TitleLinkTarget: '_blank',
      Header: "Latest News"
    });
    $('#t3ver').FeedEk({
      FeedUrl: "http://feeds.feedburner.com/sourceforge/PxSy",
      MaxCount: 10,
      TitleLinkTarget: '_blank',
      Header: "Latest versions"
    });
    $(".typo3-login").click(function() {
      return openTab("/index.php");
    });
    $(".typo3-installtool").click(function() {
      return openTab("/install/index.php");
    });
    return console.log("\n_/_/_/_/_/  _/      _/  _/_/_/      _/_/    _/_/_/\n   _/        _/  _/    _/    _/  _/    _/        _/\n  _/          _/      _/_/_/    _/    _/    _/_/\n _/          _/      _/        _/    _/        _/\n_/          _/      _/          _/_/    _/_/_/\n\n  © 2014 TYPO3 Little Helper by Bertram Simon / Agentur Simon\n");
  });

}).call(this);
