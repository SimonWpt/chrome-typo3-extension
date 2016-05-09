/*
 #
 # TYPO3 CMS - Little helpers
 #
 # Copyright 2016 by Agentur Simon / Bertram Simon / www.agentur-simon.de
 #
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

        showFeed('http://query.yahooapis.com/v1/public/yql/agnt/typo3-projects10?format=json', '#t3ver', 'Latest Versions');
        showFeed('http://query.yahooapis.com/v1/public/yql/agnt/typo3-news10?format=json', '#t3news', 'Latest News');

        $(".typo3-login").click(function () {
            return openTab("/index.php");
        });
        $(".typo3-installtool").click(function () {
            return openTab("/install/index.php");
        });

        function showFeed(feedurl, id, headline) {
            var title, link, s = "";
            $(id).empty();
            $.ajax({
                url: feedurl,
                dataType: "json",
                success: function (data) {
                    if (!(data.query.results.item instanceof Array)) {
                        data.query.results.item = [data.query.results.item];
                    }

                    $.each(data.query.results.item, function (e, itm) {
                        s += '<div class="list-group-item">';

                        var dt = new Date(itm.pubDate);
                        var dtn = new Date();
                        var options = {year: '2-digit', month: '2-digit', day: '2-digit'};

                        if (dt.toLocaleDateString('en-US', options) == dtn.toLocaleDateString('en-US', options)) {
                            s += '<span class="badge now">' + dt.toLocaleDateString('en-US', options) + '</span>';
                        } else {
                            s += '<span class="badge">' + dt.toLocaleDateString('en-US', options) + '</span>';
                        }
                        if (id == "#t3ver") {
                            title = itm.title.replace(/^.*(TYPO3) (\d\.\d*\.?\d*).*$/img, "$1 <strong>$2</strong>");
                            link = decodeURI(itm.link).replace(/(.*TYPO3 \d\.\d*\.?\d*).*/img, "$1");
                        } else {
                            title = itm.title;
                            link = itm.link;
                        }

                        s += '<a href="' + link + '" target="blank">' + title + '</a>';
                        s += '</div>';
                    });
                    $(id).append('<div class="list-group"><div class="list-group-item active">' + headline + '</div>' + s + '</div>');
                }
            })
        }


        console.log("\n" +
            "  _/_/_/_/_/  _/      _/  _/_/_/      _/_/    _/_/_/\n" +
            "     _/        _/  _/    _/    _/  _/    _/        _/\n" +
            "    _/          _/      _/_/_/    _/    _/    _/_/\n" +
            "   _/          _/      _/        _/    _/        _/\n" +
            "  _/          _/      _/          _/_/    _/_/_/\n\n" +
            "  © 2016 TYPO3 CMS - Little Helper by Bertram Simon / Agentur Simon\n\n\n\n");
        return $('[data-toggle="tooltip"]').tooltip();


    });