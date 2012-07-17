###

TYPO3 - Little helpers
Function: reading + display version
Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de

###
$ ->
  $.getJSON 'manifest.json', (data) ->
    $("span.version").text("[version: " + data.version + "]")

  $(".typo3-login").click ->
    chrome.tabs.getSelected null, (tab) ->
      chrome.tabs.create
        url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/index.php'
        index: tab.index + 1

  $(".typo3-installtool").click ->
    chrome.tabs.getSelected null, (tab) ->
      chrome.tabs.create
        url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/install/index.php'
        index: tab.index + 1