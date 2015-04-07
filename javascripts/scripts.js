/*
 #
 # TYPO3 CMS - Little helpers
 #
 # Copyright 2015 by Agentur Simon / Bertram Simon / www.agentur-simon.de
 #
 */


$(document).ready(
  function openTab() {
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


    console.log("\n" +
    "  _/_/_/_/_/  _/      _/  _/_/_/      _/_/    _/_/_/\n" +
    "     _/        _/  _/    _/    _/  _/    _/        _/\n" +
    "    _/          _/      _/_/_/    _/    _/    _/_/\n" +
    "   _/          _/      _/        _/    _/        _/\n" +
    "  _/          _/      _/          _/_/    _/_/_/\n\n" +
    "  © 2015 TYPO3 CMS - Little Helper by Bertram Simon / Agentur Simon\n\n\n\n");
    return $('[data-toggle="tooltip"]').tooltip();
  });