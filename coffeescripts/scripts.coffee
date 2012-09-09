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
  $(".typo3-weblist").click ->
    chrome.tabs.getSelected null, (tab) ->
      chrome.tabs.create
        url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=web_list&id=0'
        index: tab.index + 1
  $(".typo3-template").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/tstemplate/ts/index.php'
          index: tab.index + 1
  $(".typo3-pagetree").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/info/mod1/index.php?&id=0&SET[function]=tx_cms_webinfo_page&SET[depth]=999'
          index: tab.index + 1
  $(".typo3-linkvalidator").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/info/mod1/index.php?SET[function]=tx_linkvalidator_ModFuncReport'
          index: tab.index + 1
  $(".typo3-recycler").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=web_txrecyclerM1&SET[depth]=999'
          index: tab.index + 1
  $(".typo3-permissions").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/perm/mod1/index.php?&id=0&SET[depth]=4'
          index: tab.index + 1
  $(".typo3-em").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=tools_em'
          index: tab.index + 1
  $(".typo3-beuser").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=tools_beuser'
          index: tab.index + 1
  $(".typo3-dbcheck").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/lowlevel/dbint/index.php/typo3/sysext/lowlevel/dbint/index.php'
          index: tab.index + 1
  $(".typo3-configuration").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/lowlevel/config/index.php'
          index: tab.index + 1
  $(".typo3-adminlog").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/info/mod1/index.php?&id=0&SET[function]=tx_belog_webinfo&SET[depth]=3&SET[log_time]=20'
          index: tab.index + 1
  $(".typo3-reports").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=tools_txreportsM1'
          index: tab.index + 1
  $(".typo3-scheduler").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=tools_txschedulerM1'
          index: tab.index + 1
  $(".typo3-userhelp").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/view_help.php'
          index: tab.index + 1
  $(".typo3-tsrefhelp").click ->
      chrome.tabs.getSelected null, (tab) ->
        chrome.tabs.create
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/tsconfig_help/mod1/index.php'
          index: tab.index + 1
