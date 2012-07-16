###

TYPO3 - Little helpers
Function: creating context-menus
Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de

###
def_context = [
  title: "TYPO3 Login"
  context: "page"
  action: (info, tab) ->
    chrome.tabs.create 
      url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/index.php'
      index: tab.index + 1 
,
  title: "TYPO3 Installltool"
  context: "page"
  action: (info, tab) ->
    chrome.tabs.create 
      url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/install/index.php'
      index: tab.index + 1
,
  title: "Search Documentation"
  context: "selection"
  action: (info, tab) ->
    chrome.tabs.create 
      url: 'http://typo3.org/search/?q=' + info.selectionText + '&tx_solr%5Bfilter%5D%5B1%5D=type%253Atx_terdoc_manuals'
      index: tab.index + 1
,
  title: "Search Extensions"
  context: "selection"
  action: (info, tab) ->
    chrome.tabs.create 
      url: 'http://typo3.org/search/?q=' + info.selectionText + '&tx_solr%5Bfilter%5D%5B0%5D=type%253Atx_terfe2_domain_model_extension'
      index: tab.index + 1
 ]

i = 0 

while i < def_context.length
  item = def_context[i]
  id = chrome.contextMenus.create(
    title: item.title
    contexts: [item.context]
    onclick: item.action
  )
  i++