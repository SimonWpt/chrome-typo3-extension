/*
 #
 # TYPO3 - Little helpers
 #
 # Function: creating context-menus
 # Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de
 #
 */


var t3top;

t3top = chrome.contextMenus.create({
  "title": "TYPO3 - Little Helper",
  "contexts": ["page", "selection"]
});

chrome.contextMenus.create({
  title: "Search Documentation",
  contexts: ["selection"],
  parentId: t3top,
  onclick: function (info, tab) {
    return chrome.tabs.create({
      url: 'http://typo3.org/search/?q=' + info.selectionText + '&tx_solr%5Bfilter%5D%5B1%5D=type%253Atx_terdoc_manuals',
      index: tab.index + 1
    });
  }
});

chrome.contextMenus.create({
  title: "Search Extensions",
  contexts: ["selection"],
  parentId: t3top,
  onclick: function (info, tab) {
    return chrome.tabs.create({
      url: 'http://typo3.org/search/?q=' + info.selectionText + '&tx_solr%5Bfilter%5D%5B0%5D=type%253Atx_terfe2_domain_model_extension',
      index: tab.index + 1
    });
  }
});

chrome.contextMenus.create({
  title: "Search Wiki",
  contexts: ["selection"],
  parentId: t3top,
  onclick: function (info, tab) {
    return chrome.tabs.create({
      url: 'http://wiki.typo3.org/wiki/index.php?search=' + info.selectionText + '&title=Special%3ASearch&fulltext=Search',
      index: tab.index + 1
    });
  }
});

chrome.contextMenus.create({
  "title": "Login",
  "parentId": t3top,
  onclick: function (info, tab) {
    $.get(tab.url, function( data ) {
      alert( "Data Loaded: " + data.getElementsByTagName('base')[0].innerHTML );
    });
    return chrome.tabs.create({
      url: xURL(tab.url).protocol + "//" + xURL(tab.url).host + '/typo3/index.php',
      index: tab.index + 1
    });
  }
});

chrome.contextMenus.create({
  "title": "Installtool",
  "parentId": t3top,
  onclick: function (info, tab) {
    return chrome.tabs.create({
      url: xURL(tab.url).protocol + "//" + xURL(tab.url).host + '/typo3/sysext/install/Start/Install.php',
      index: tab.index + 1
    });
  }
});

function xURL(url) {
  var qparse = /^(?:([a-z]\w*:))?(?:\/{2,3})?([^\/\?]*)([^\?#]*)(\?[^#]*)?(#.*)?$/i;
  var parsed = qparse.exec(url);
  var hostParts = parsed[2].split(':');
  return {
    protocol: parsed[1],
    host: parsed[2],
    hostname: hostParts[0],
    port: hostParts[1] || '',
    pathname: parsed[3],
    search: parsed[4] || '',
    hash: parsed[5] || '',
    href: url
  }
}