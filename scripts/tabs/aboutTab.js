/* See license.txt for terms of usage */

define("tabs/aboutTab", ["domplate/domplate", "domplate/tabView", "core/lib", "i18n!nls/harViewer"], function (Domplate, TabView, Lib, Strings) {
    with(Domplate) {
        function AboutTab() {}
        return AboutTab.prototype = {
            id: "About",
            label: Strings.aboutTabLabel,
            tabHeaderTag: A({
                "class": "$tab.id\\Tab tab",
                view: "$tab.id",
                _repObject: "$tab"
            }, "$tab.label", SPAN("&nbsp;"), SPAN({
                "class": "version"
            }, "$tab.tabView.version")),
            bodyTag: DIV({
                "class": "aboutBody"
            }),
            onUpdateBody: function (e, t) {
                var n = this;
                t = this.bodyTag.replace({}, t), require(["text!tabs/aboutTab.html"], function (r) {
                    r = r.replace("@VERSION@", e.version, "g"), r = r.replace("@HAR_SPEC_URL@", e.harSpecURL, "g"), t.innerHTML = r, $(".linkSchema").click(Lib.bind(n.onSchema, n))
                })
            },
            onSchema: function () {
                this.tabView.selectTabByName("模式")
            }
        }, AboutTab
    }
});