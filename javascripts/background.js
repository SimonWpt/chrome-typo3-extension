/*
 *
 * @author Bertram Simon <b.simon@wppt.de>
 * @copyright 2020 by Bertram Simon
 * @filename background.js
 * @lastmodfied 25.04.18 20:16
 *
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
            url: 'https://www.google.de/search?num=100&q=site%3Ahttps%3A%2F%2Fdocs.typo3.org%2F+' + info.selectionText,
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
            url: 'https://extensions.typo3.org/?tx_solr%5Bq%5D=' + info.selectionText,
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
            url: 'https://wiki.typo3.org/wiki/index.php?search=' + info.selectionText + '&fulltext=Search',
            index: tab.index + 1
        });
    }
});


chrome.contextMenus.create({
    title: "Search Forge",
    contexts: ["selection"],
    parentId: t3top,
    onclick: function (info, tab) {
        return chrome.tabs.create({
            url: 'https://forge.typo3.org/search?q=' + info.selectionText,
            index: tab.index + 1
        });
    }
});

chrome.contextMenus.create({
    title: "Search Stack Overflow",
    contexts: ["selection"],
    parentId: t3top,
    onclick: function (info, tab) {
        return chrome.tabs.create({
            url: 'https://stackoverflow.com/search?q=' + info.selectionText,
            index: tab.index + 1
        });
    }
});

chrome.contextMenus.create({
    title: "Search Github",
    contexts: ["selection"],
    parentId: t3top,
    onclick: function (info, tab) {
        return chrome.tabs.create({
            url: 'https://github.com/search?utf8=✓&q=' + info.selectionText,
            index: tab.index + 1
        });
    }
});

chrome.contextMenus.create({
    "title": "Login",
    "parentId": t3top,
    onclick: function (info, tab) {
        $.get(tab.url, function (data) {
            let typo3link;
            let match = (/<base href="([^"]+)"/.exec(data));
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
            let typo3link;
            let match = (/<base href="([^"]+)"/.exec(data));
            if (match === null) {
                typo3link = xURL(tab.url).protocol + '//' + xURL(tab.url).host + '/typo3/install.php';
            } else {
                typo3link = match[1] + '/typo3/install.php';
                typo3link = typo3link.replace("//typo3/install.php", "/typo3/install.php");
            }
            chrome.tabs.create({
                url: typo3link,
                index: tab.index + 1
            });
        });
    }
});


function xURL(url) {
    var qparse = /^(?:([a-z]\w*:))?(?:\/{2,5})?([^\/?]*)([^?#]*)(\?[^#]*)?(#.*)?$/i;
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