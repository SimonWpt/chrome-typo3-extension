/*
# 
# TYPO3 - Little helpers
# 
# Function: creating context-menus
# Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de
#
*/


(function() {
  var def_context, i, id, item;

  def_context = [
    {
      title: "TYPO3 Login",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/index.php',
          index: tab.index + 1
        });
      }
    }, {
      type: "separator"
    }, {
      title: "Weblist",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=web_list&id=0',
          index: tab.index + 1
        });
      }
    }, {
      title: "Template",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/tstemplate/ts/index.php',
          index: tab.index + 1
        });
      }
    }, {
      title: "Recycler",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=web_txrecyclerM1&SET[depth]=999',
          index: tab.index + 1
        });
      }
    }, {
      title: "Pagetree overview",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/info/mod1/index.php?&id=0&SET[function]=tx_cms_webinfo_page&SET[depth]=999',
          index: tab.index + 1
        });
      }
    }, {
      title: "Linkvalidator",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/info/mod1/index.php?SET[function]=tx_linkvalidator_ModFuncReport',
          index: tab.index + 1
        });
      }
    }, {
      title: "Permissions",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/perm/mod1/index.php?&id=0&SET[depth]=4',
          index: tab.index + 1
        });
      }
    }, {
      type: "separator"
    }, {
      title: "Backend-User",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=tools_beuser',
          index: tab.index + 1
        });
      }
    }, {
      title: "Extension Manager",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=tools_em',
          index: tab.index + 1
        });
      }
    }, {
      title: "DB Check",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/lowlevel/dbint/index.php',
          index: tab.index + 1
        });
      }
    }, {
      title: "Configuration",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/lowlevel/config/index.php',
          index: tab.index + 1
        });
      }
    }, {
      title: "Installtool",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/install/index.php',
          index: tab.index + 1
        });
      }
    }, {
      title: "Admin Logs",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/info/mod1/index.php?&id=0&SET[function]=tx_belog_webinfo&SET[depth]=3&SET[log_time]=20',
          index: tab.index + 1
        });
      }
    }, {
      title: "Reports",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=tools_txreportsM1',
          index: tab.index + 1
        });
      }
    }, {
      title: "Scheduler",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/mod.php?M=tools_txschedulerM1',
          index: tab.index + 1
        });
      }
    }, {
      type: "separator"
    }, {
      title: "TYPO3 Manual",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/view_help.php',
          index: tab.index + 1
        });
      }
    }, {
      title: "TypoScript Help",
      context: "page",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + '/typo3/sysext/tsconfig_help/mod1/index.php',
          index: tab.index + 1
        });
      }
    }, {
      title: "Search Documentation",
      context: "selection",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: 'http://typo3.org/search/?q=' + info.selectionText + '&tx_solr%5Bfilter%5D%5B1%5D=type%253Atx_terdoc_manuals',
          index: tab.index + 1
        });
      }
    }, {
      title: "Search Extensions",
      context: "selection",
      action: function(info, tab) {
        return chrome.tabs.create({
          url: 'http://typo3.org/search/?q=' + info.selectionText + '&tx_solr%5Bfilter%5D%5B0%5D=type%253Atx_terfe2_domain_model_extension',
          index: tab.index + 1
        });
      }
    }
  ];

  i = 0;

  while (i < def_context.length) {
    item = def_context[i];
    if (item.type === "separator") {
      id = chrome.contextMenus.create({
        type: "separator"
      });
    } else {
      id = chrome.contextMenus.create({
        title: item.title,
        contexts: [item.context],
        onclick: item.action
      });
    }
    i++;
  }

}).call(this);
