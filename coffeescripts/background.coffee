###
#
# TYPO3 - Little helpers
#
# Function: creating context-menus
# Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de
#
###


t3top = chrome.contextMenus.create
  title: "TYP3 - Little Helper"
  contexts: ["page", "selection"]

chrome.contextMenus.create
  title: "Search Documentation"
  contexts: ["selection"]
  parentId: t3top
  onclick: (info, tab) ->
    chrome.tabs.create
      url: 'http://typo3.org/search/?q=' + info.selectionText + '&tx_solr%5Bfilter%5D%5B1%5D=type%253Atx_terdoc_manuals'
      index: tab.index + 1

chrome.contextMenus.create
  title: "Search Extensions"
  contexts: ["selection"]
  parentId: t3top
  onclick: (info, tab) ->
    chrome.tabs.create
      url: 'http://typo3.org/search/?q=' + info.selectionText + '&tx_solr%5Bfilter%5D%5B0%5D=type%253Atx_terfe2_domain_model_extension'
      index: tab.index + 1

chrome.contextMenus.create
  title: "Login"
  parentId: t3top
  onclick: (info, tab) ->
    chrome.tabs.create
      url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/index.php'
      index: tab.index + 1

chrome.contextMenus.create
  title: "Installtool"
  parentId: t3top
  onclick: (info, tab) ->
    chrome.tabs.create
      url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/install/Start/Install.php'
      index: tab.index + 1
