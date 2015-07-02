/*
 #
 # TYPO3 - Little helpers
 #
 # Function: creating context-menus
 # Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de
 #
 */

var t3top = chrome.contextMenus.create({
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
    $.get(tab.url, function (data) {
      var typo3link;
      var match = (/<base href="([^"]+)"/.exec(data));
      if (match === null) {
        typo3link = xURL(tab.url).protocol + '//' + xURL(tab.url).host + '/typo3/index.php';
      } else {
        typo3link = match[1] + '/typo3/index.php';
        typo3link = typo3link.replace("//typo3/index.php", "/typo3/index.php");
      }
      chrome.tabs.create({
        url: typo3link,
        index: tab.index + 1
      });
    });
  }
});

chrome.contextMenus.create({
  "title": "Installtool",
  "parentId": t3top,
  onclick: function (info, tab) {
    $.get(tab.url, function (data) {
      var typo3link;
      var match = (/<base href="([^"]+)"/.exec(data));
      if (match === null) {
        typo3link = xURL(tab.url).protocol + '//' + xURL(tab.url).host + '/typo3/sysext/install/Start/Install.php';
      } else {
        typo3link = match[1] + '/typo3/sysext/install/Start/Install.php';
        typo3link = typo3link.replace("//typo3/sysext/install/Start/Install.php", "/typo3/sysext/install/Start/Install.php");
      }
      chrome.tabs.create({
        url: typo3link,
        index: tab.index + 1
      });
    });
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  var urlParts = ["chrome:", "/typo3/", ":8443/", ":4643/"];
  for (var i = 0; i < urlParts.length; i++) {
    if (tab.url.indexOf(urlParts[i]) >= 0) {
      return;
    }
  }

  chrome.storage.sync.get({
    skipCheck: true
  }, function (items) {
    if (items.skipCheck === true) {
      return
    }

    $.get(tab.url, function (data) {
      var output = $(data).filter('meta[name=generator]').attr("content");
      var match = (/[TYPO3|TYPO3 CMS] (\d+\.\d+)/.exec(output));
      if (match !== null) {
        chrome.browserAction.setBadgeBackgroundColor({color: "#000"});
        chrome.browserAction.setBadgeText({text: match[1], tabId: tab.id});
      }
    });

  });
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
  };
}

