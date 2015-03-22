###
# 
# TYPO3 - Little helpers
# 
# Function: reading + display version
# Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de
# 
###
$(document).ready ->
  openTab = (localUrl) ->
    window.localUrl = localUrl
    chrome.tabs.getSelected null, (tab) ->
      chrome.tabs.create
        url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + "/typo3" + window.localUrl
        index: tab.index + 1
  
  $.getJSON "manifest.json", (data) ->
    $("span.version").text "[version: " + data.version + "]"


  $('#t3news').FeedEk
    # FeedUrl: "http://feeds.feedburner.com/typo3/MbAQ"
    FeedUrl: "http://typo3.org/xml-feeds/rss.xml"
    MaxCount : 10
    TitleLinkTarget:'_blank'
    Header: "Latest News"

  $('#t3ver').FeedEk
    # FeedUrl: "http://feeds.feedburner.com/sourceforge/PxSy"
    FeedUrl: "http://sourceforge.net/projects/typo3/rss"
    MaxCount : 10
    TitleLinkTarget:'_blank'
    Header: "Latest versions"

  $(".typo3-login").click ->
    openTab "/index.php"
  
  $(".typo3-installtool").click ->
    openTab "/install/index.php"

  console.log "\n
  _/_/_/_/_/  _/      _/  _/_/_/      _/_/    _/_/_/\n
     _/        _/  _/    _/    _/  _/    _/        _/\n
    _/          _/      _/_/_/    _/    _/    _/_/\n
   _/          _/      _/        _/    _/        _/\n
  _/          _/      _/          _/_/    _/_/_/\n
  \n
  © 2014 TYPO3 Little Helper by Bertram Simon / Agentur Simon\n
  "
  $('[data-toggle="tooltip"]').tooltip()