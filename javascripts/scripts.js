
/*
# 
# TYPO3 - Little helpers
# 
# Function: reading + display version
# Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de
#
*/


(function() {

  $(function() {
    var openTab;
    openTab = function(localUrl) {
      window.localUrl = localUrl;
      return chrome.tabs.getSelected(null, function(tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + "/typo3" + window.localUrl,
          index: tab.index + 1
        });
      });
    };
    $.getJSON("manifest.json", function(data) {
      return $("span.version").text("[version: " + data.version + "]");
    });
    $(".typo3-login").click(function() {
      return openTab("/index.php");
    });
    $(".typo3-installtool").click(function() {
      return openTab("/install/index.php");
    });
    $(".typo3-weblist").click(function() {
      return openTab("/mod.php?M=web_list&id=0");
    });
    $(".typo3-template").click(function() {
      return openTab("/sysext/tstemplate/ts/index.php");
    });
    $(".typo3-pagetree").click(function() {
      return openTab("/sysext/info/mod1/index.php?&id=0&SET[function]=tx_cms_webinfo_page&SET[depth]=999");
    });
    $(".typo3-linkvalidator").click(function() {
      return openTab("/sysext/info/mod1/index.php?SET[function]=tx_linkvalidator_ModFuncReport");
    });
    $(".typo3-recycler").click(function() {
      return openTab("/mod.php?M=web_txrecyclerM1&SET[depth]=999");
    });
    $(".typo3-permissions").click(function() {
      return openTab("/sysext/perm/mod1/index.php?&id=0&SET[depth]=4");
    });
    $(".typo3-em").click(function() {
      return openTab("/mod.php?M=tools_em");
    });
    $(".typo3-beuser").click(function() {
      return openTab("/mod.php?M=tools_beuser");
    });
    $(".typo3-dbcheck").click(function() {
      return openTab("/sysext/lowlevel/dbint/index.php");
    });
    $(".typo3-configuration").click(function() {
      return openTab("/sysext/lowlevel/config/index.php");
    });
    $(".typo3-adminlog").click(function() {
      return openTab("/sysext/info/mod1/index.php?&id=0&SET[function]=tx_belog_webinfo&SET[depth]=3&SET[log_time]=20");
    });
    $(".typo3-reports").click(function() {
      return openTab("/mod.php?M=tools_txreportsM1");
    });
    $(".typo3-scheduler").click(function() {
      return openTab("/mod.php?M=tools_txschedulerM1");
    });
    $(".typo3-help_user").click(function() {
      return openTab("/view_help.php");
    });
    $(".typo3-help_ts").click(function() {
      return openTab("/sysext/tsconfig_help/mod1/index.php");
    });
    return console.log("Huh, you are looking in my code? Then please have the energy and rate this extension to make it public. Thank you!");
  });

}).call(this);
