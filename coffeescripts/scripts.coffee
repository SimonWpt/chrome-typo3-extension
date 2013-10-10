###
# 
# TYPO3 - Little helpers
# 
# Function: reading + display version
# Copyright 2012 by Agentur Simon / Bertram Simon / www.agentur-simon.de
# 
###
$ ->
  openTab = (localUrl) ->
    window.localUrl = localUrl
    chrome.tabs.getSelected null, (tab) ->
      chrome.tabs.create 
        url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + "/typo3" + window.localUrl
        index: tab.index + 1
  
  $.getJSON "manifest.json", (data) ->
    $("span.version").text "[version: " + data.version + "]"

  $('#t3ver').FeedEk
    FeedUrl: "http://sourceforge.net/api/file/index/project-id/20391/mtime/desc/limit/100/rss"
    MaxCount : 9
    TitleLinkTarget:'_blank'
    Header: "Latest versions"

  $(".typo3-login").click ->
    openTab "/index.php"
  
  $(".typo3-installtool").click ->
    openTab "/install/index.php"
  
  $(".typo3-weblist").click ->
    openTab "/mod.php?M=web_list&id=0"
  
  $(".typo3-template").click ->
    openTab "/sysext/tstemplate/ts/index.php"
  
  $(".typo3-pagetree").click ->
    openTab "/sysext/info/mod1/index.php?&id=0&SET[function]=tx_cms_webinfo_page&SET[depth]=999"
  
  $(".typo3-linkvalidator").click ->
    openTab "/sysext/info/mod1/index.php?SET[function]=tx_linkvalidator_ModFuncReport"
  
  $(".typo3-recycler").click ->
    openTab "/mod.php?M=web_txrecyclerM1&SET[depth]=999"
  
  $(".typo3-permissions").click ->
    openTab "/sysext/perm/mod1/index.php?&id=0&SET[depth]=4"
  
  $(".typo3-em").click ->
    openTab "/mod.php?M=tools_em"
  
  $(".typo3-beuser").click ->
    openTab "/mod.php?M=tools_beuser"
  
  $(".typo3-dbcheck").click ->
    openTab "/sysext/lowlevel/dbint/index.php"
  
  $(".typo3-configuration").click ->
    openTab "/sysext/lowlevel/config/index.php"
  
  $(".typo3-adminlog").click ->
    openTab "/sysext/info/mod1/index.php?&id=0&SET[function]=tx_belog_webinfo&SET[depth]=3&SET[log_time]=20"
  
  $(".typo3-reports").click ->
    openTab "/mod.php?M=tools_txreportsM1"
  
  $(".typo3-scheduler").click ->
    openTab "/mod.php?M=tools_txschedulerM1"
  
  $(".typo3-help_user").click ->
    openTab "/view_help.php"
  
  $(".typo3-help_ts").click ->
    openTab "/sysext/tsconfig_help/mod1/index.php"
  
  console.log "Huh, you are looking in my code? Then please have the energy and rate this extension to make it public. Thank you!"