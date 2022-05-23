// ==UserScript==
// @name         Stebo_NoNumberOfAccompany
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  結果一覧から連れ出し件数の表示をなくします。
// @author       You
// @match        http://stella2.428.st/?mode=result
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var gokei = $('p:contains("合計")');
    var gokei_html = gokei.html();
    gokei_html = gokei_html.replace(/合計： [0-9]*件/g, '合計： ***件');
    gokei.html(gokei_html);
})();
