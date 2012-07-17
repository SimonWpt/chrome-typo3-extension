
/*

TYPO3 - Little helpers
Function: reading + display version
Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de
*/


(function() {

  $(function() {
    $.getJSON('manifest.json', function(data) {
      return $("span.version").text("[version: " + data.version + "]");
    });
    $(".typo3-login").click(function() {
      return chrome.tabs.getSelected(null, function(tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/index.php',
          index: tab.index + 1
        });
      });
    });
    return $(".typo3-installtool").click(function() {
      return chrome.tabs.getSelected(null, function(tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/install/index.php',
          index: tab.index + 1
        });
      });
    });
  });

}).call(this);
