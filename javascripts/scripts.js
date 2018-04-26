/*
 *
 * @author Bertram Simon <b.simon@agentur-simon.de>
 * @copyright 2018 by Bertram Simon
 * @filename scripts.js
 * @lastmodfied 25.04.18 20:12
 *
 */


$(document).ready(
  function openTab() {
    var openTab;

    openTab = function (localUrl) {
      window.localUrl = localUrl;
      return chrome.tabs.getSelected(null, function (tab) {
        return chrome.tabs.create({
          url: tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0] + "/typo3" + window.localUrl,
          index: tab.index + 1
        });
      });
    };

    $.getJSON("manifest.json", function (data) {
      return $("span.version").text("[version: " + data.version + "]");
    });

    /*
    --- Login Icons -----------------------------------------------------
     */

    $(".typo3-login").click(function () {
      return openTab("/index.php");
    });
    $(".typo3-installtool").click(function () {
      return openTab("/sysext/install/Start/Install.php");
    });

    /*
    --- Latest versions -------------------------------------------------
     */

    $.getJSON("https://get.typo3.org/json", function (data) {
      var relevantVersions = ["4.5", "4.6", "4.7", "6.0", "6.1", "6.2", "7", "8"];
      var $t3ver = $("#t3ver")
        .empty()
        .append('<div class="list-group-item active">' +
          '<a href="https://get.typo3.org/" class="title">' +
          'Latest Core</div>');

      $.each(relevantVersions.reverse(), function (key, val) {
        var version = data[val];
        var latest = version.latest;
        var options = {year: '2-digit', month: '2-digit', day: '2-digit'};
        var ldate = new Date(version.releases[latest].date).toLocaleString('en-US', options);
        $t3ver.append(
          '<div class="list-group-item"><span class="badge">' +
          ldate +
          "</span>" +
          '<a href="https://get.typo3.org/' +
          latest +
          '">' +
          latest +
          "</a></div>"
        );
      });
      $t3ver.append("</div>");
    });

    /*
    --- Latest news -----------------------------------------------------
     */
    jQuery.getFeed({
      url: 'https://typo3.org/?type=100',
      success: function (feed) {
        var html = '<div class="list-group">\n' +
          '<div class="list-group-item active">' +
          '<a href="https://typo3.org/news/" class="title">' +
          'Latest news</a></div>';

        for (var i = 0; i < 8; i++) {
          var item = feed.items[i];
          var options = {year: 'numeric', month: '2-digit', day: '2-digit'};

          html += '<div class="list-group-item"><span class="badge">'
            + new Date(item.updated).toLocaleString('en-US', options)
            + '</span><a href="' + item.link + '" target="blank">'
            + item.title
            + '</a></div>'
        }
        jQuery('#t3news').append(html);
      }
    });


    /*
    --- Console Log -----------------------------------------------------
     */

    console.log("\n" +
      "  _/_/_/_/_/  _/      _/  _/_/_/      _/_/    _/_/_/\n" +
      "     _/        _/  _/    _/    _/  _/    _/        _/\n" +
      "    _/          _/      _/_/_/    _/    _/    _/_/\n" +
      "   _/          _/      _/        _/    _/        _/\n" +
      "  _/          _/      _/          _/_/    _/_/_/\n\n" +
      "  © 2017 TYPO3 CMS - Little Helper by Bertram Simon / Agentur Simon\n\n\n\n");
    return $('[data-toggle="tooltip"]').tooltip();


  });