###

TYPO3 - Little helpers
Function: reading + display version
Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de

###
$ ->
  $.getJSON 'manifest.json', (data) ->
    $("span.version").text("[version: " + data.version + "]")