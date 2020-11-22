$(function () {

  let openTab = function (localUrl) {
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
    return openTab("/install.php");
  });

  /*
  --- Latest versions -------------------------------------------------
   */

  $.getJSON("https://get.typo3.org/json", data => {
    const relevantVersions = ["7", "8", "9", "10"];
    let $t3ver = $("#t3ver").append('<div class="list-group-item active"><a href="https://get.typo3.org/" class="title">Latest Core</div>');
    $.each(relevantVersions.reverse(), (key, val) => {
        let version = data[val];
        const latest = version.latest;
        const ldate = version.releases[latest].date.substring(2, 11);
        let tpl = `<div class="list-group-item"><span class="badge">${ldate}</span><a href="https://get.typo3.org/release-notes/${latest}"  data-toggle="dropdown" aria-haspopup="true">${latest} <span class="caret"></span></a> `;
        tpl = tpl + `<ul class="dropdown-menu">`;
        $.each(version.releases, (key2, val2) => {
          if (val2.type === "security") {
            tpl = tpl + `<li><a href="https://get.typo3.org/release-notes/${key2}" class="security">${key2} ${val2.type}</a></li>`
          } else {
            tpl = tpl + `<li><a href="https://get.typo3.org/release-notes/${key2}">${key2} <span class="regular">${val2.type}</span></a></li>`
          }
        });
        tpl = tpl + `</ul>`;
        $t3ver.append(tpl);

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

        html += '<div class="list-group-item"><span class="badge">' + new Date(item.updated).toLocaleString('en-US', options) + '</span><a href="' + item.link + '" target="blank">' + item.title + '</a></div>'
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
    "  © 2020 TYPO3 CMS - Little Helper by Bertram Simon / Agentur Simon\n\n\n\n");
  return $('[data-toggle="tooltip"]').tooltip();
});