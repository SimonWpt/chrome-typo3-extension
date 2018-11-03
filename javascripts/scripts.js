$(function openTab() {
  let openTab;

  openTab = function (localUrl) {
    window.localUrl = localUrl;
    return chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      return chrome.tabs.create({
        url: tabs[0].url.match(/^https?:\/*([\w.:-]+)(\d+)?/)[0] + "/typo3" + window.localUrl,
        index: tabs[0].index + 1
      });
    });
  };

  $.getJSON("manifest.json", function (data) {
    return $("span.version").text("[version: " + data.version + "]");
  });

  /*
  --- Login Icons -----------------------------------------------------
   */

  $(".typo3-login").on("click", function () {
    return openTab("/index.php");
  });
  $(".typo3-installtool").on("click", function () {
    return openTab("/sysext/install/Start/Install.php");
  });

  /*
  --- Latest versions -------------------------------------------------
   */

  $.getJSON("https://get.typo3.org/json", data => {
    const relevantVersions = ["4.5", "4.6", "4.7", "6.0", "6.1", "6.2", "7", "8", "9"];
    let $t3ver = $("#t3ver").append('<div class="list-group-item active"><a href="https://get.typo3.org/" class="title">Latest Core</div>');
    $.each(relevantVersions.reverse(), (key, val) => {
        let version = data[val];
        let latest = version.latest;
        let options = {year: 'numeric', month: '2-digit', day: '2-digit'};
        let ldate = new Date(version.releases[latest].date).toLocaleString('en-US', options);
        $t3ver.append(
          `<div class="list-group-item"><span class="badge">${ldate}</span><a href="https://get.typo3.org/release-notes/${latest}">${latest}</a></div>`
        );
      }
    );
    $t3ver.append("</div>");
  });

  /*
  --- Latest news -----------------------------------------------------
   */
  $.getFeed({
    url: 'https://typo3.org/?type=100',
    success: function (feed) {
      let html = '<div class="list-group"><div class="list-group-item active"><a href="https://typo3.org/news/" class="title">Latest news</a></div>';

      for (let i = 0; i < 9; i++) {
        let item = feed.items[i];
        let options = {year: 'numeric', month: '2-digit', day: '2-digit'};

        html += '<div class="list-group-item"><span class="badge">'
          + new Date(item.updated).toLocaleString('en-US', options)
          + '</span><a href="' + item.link + '" target="blank">'
          + item.title
          + '</a></div>'
      }
      $("#t3news").append(html);
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
    "  © 2018 TYPO3 CMS - Little Helper by Bertram Simon / Agentur Simon\n\n\n\n");
  return $('[data-toggle="tooltip"]').tooltip();


});