
/*

TYPO3 - Little helpers
Function: reading + display version
Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de
*/


(function() {

  $(function() {
    return $.getJSON('manifest.json', function(data) {
      return $("span.version").text("[version: " + data.version + "]");
    });
  });

}).call(this);
