(function(e, t) {
    "use strict";
    e = e || "docReady";
    t = t || window;
    var a = [];
    var n = false;
    var o = false;
    function i() {
        if (!n) {
            n = true;
            for (var e = 0; e < a.length; e++) {
                a[e].fn.call(window, a[e].ctx)
            }
            a = []
        }
    }
    function r() {
        if (document.readyState === "complete") {
            i()
        }
    }
    t[e] = function(e, t) {
        if (typeof e !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function")
        }
        if (n) {
            setTimeout((function() {
                e(t)
            }
            ), 1);
            return
        } else {
            a.push({
                fn: e,
                ctx: t
            })
        }
        if (document.readyState === "complete" || !document.attachEvent && document.readyState === "interactive") {
            setTimeout(i, 1)
        } else if (!o) {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", i, false);
                window.addEventListener("load", i, false)
            } else {
                document.attachEvent("onreadystatechange", r);
                window.attachEvent("onload", i)
            }
            o = true
        }
    }
}
)("docReady", window);
if (typeof _wau !== "undefined") {
    var WAU_ren = WAU_ren || [];
    docReady((function() {
        WAU_la()
    }
    ))
}
function WAU_classic(e, t) {
    if (typeof t === "undefined") {
        t = -1;
        docReady((function() {
            WAU_classic(e, -1)
        }
        ))
    } else {
        var a = window.location.href;
        try {
            if (typeof Storage === "undefined" || localStorage.getItem("_waucount:" + e) === null || localStorage.getItem("_wautime:" + e) === null || localStorage.getItem("_waulasturl:" + e) != a || Math.floor(Date.now() / 1e3) - localStorage.getItem("_wautime:" + e) > 150) {
                WAU_classic_request(e, t)
            } else {
                WAU_r_c(localStorage.getItem("_waucount:" + e) * (Math.floor(Math.random() * (102 - 98 + 1) + 98) / 100), e, t, true)
            }
            localStorage.setItem("_waulasturl:" + e, a)
        } catch (a) {
            WAU_classic_request(e, t)
        }
    }
}
function WAU_classic_request(e, t) {
    var a = "";
    if (document.title) {
        a = encodeURIComponent(document.title.substr(0, 80).replace(/(\?=)|(\/)/g, ""))
    }
    var n = document.getElementsByTagName("script")[0];
    (function() {
        var o = 0;
        if (window.performance && window.performance.timing.domContentLoadedEventStart) {
            o = (window.performance.timing.domContentLoadedEventStart - window.performance.timing.navigationStart) / 1e3
        }
        var i = encodeURIComponent(document.referrer);
        var r = encodeURIComponent(window.location.href);
        var s = document.createElement("script");
        s.async = "async";
        s.type = "text/javascript";
        s.src = "//whos.amung.us/pingjs/?k=" + e + "&t=" + a + "&c=c&x=" + r + "&y=" + i + "&a=" + t + "&d=" + o + "&v=27&r=" + Math.ceil(Math.random() * 9999);
        n.parentNode.insertBefore(s, n)
    }
    )()
}
function WAU_r_c(c, key, async_index, skip_storage) {
    if (typeof async_index === "undefined") {
        async_index = -1
    }
    var count_numeric = parseInt(c.toString().replace(/,/g, ""));
    c = WAU_addCommas(count_numeric);
    skip_storage = skip_storage || false;
    if (!skip_storage && typeof Storage !== "undefined" && count_numeric > 5e4) {
        try {
            localStorage.setItem("_wautime:" + key, Math.floor(Date.now() / 1e3));
            localStorage.setItem("_waucount:" + key, count_numeric)
        } catch (e) {}
    }
    var raw_im_data = "data:image/gif;base64," + "R0lGODlhUgA8APf5AEZGRj09PQwMDDU1NcEnLQgICDAwMAUFBUVFRTg4OAICAi0tLVFRUV1dXVtb" + "W0JCQnh4eOjo6NLS0o2NjcnJyePj45CQkOfn5+Tk5K2trWBgYLm5uUBAQGpqamtra3BwcHp6epOT" + "k+np6a6urpKSkru7u2dnZ1lZWc/Pz46OjsjIyKysrKampstLUMxNUqqqqqioqOrq6nR0dGFhYctJ" + "TpWVlcpFStBcYOLi4tbW1s1RVs5VWcc8Qry8vH19fbe3t3d3d8fHx6KiotPT08hARlhYWGRkZMHB" + "wYSEhICAgNTU1NDQ0L6+vqWlpcbGxnZ2dmhoaL+/vz8/P5mZmXJycmZmZjk5OTo6OkxMTNHR0aI3" + "PKCgoFdXVzExMYiIiEdHR0NDQ3JcXaIlKrcnLZomK1NTU5UhJmVlZY9cXmxBQ2JiYisrK0lJSVRU" + "VBsbG4uLi21tbaSkpE9PT19fX4pWVygfHz4+PkUoKUojJRgYGC4uLmNjY1VVVVBQUJ9RVWxWVpsn" + "LC8vL79ARhYWFhISEiwsLFMZG4tJTIAgJFM4OUY9PbBFSYJKS7NLTzIyMmtLTH4nK6dRVU4nKQoK" + "CnlcXSYmJqU8QUo4OWseITklJjIfIGZOT75RVX83OzMzMxsREpcjKGVWVlgeIatJTeHh4SAgIF4a" + "HZdFSIg3O1shJKJJTAkJCYkgJLcmLCQkJBUVFTkcHW5ubjonKL9VWatLT2gkJ30nKhEREbYmK3sl" + "KDIoKF5eXlJKSqQnKx8fH9BcYU5GRqNLTowjJywiI7tJTY1NULYmLCQaGk4oKaRcX69ARXMdIF9G" + "RoVARIhSVB8VFpJVWE1NTTsoKVpaWnJKS6QnLJM8QHxLTQYGBmAmKK0mLB0dHcXFxVZOTsFFSoNL" + "TTw8PK4nLEpBQSYTFFc9PponKz0gIbdVWX5OUEFBQSIiIktLS05OTiUlJScnJ0pKShAQEFZWVlJS" + "Uh4eHlxcXBkZGRQUFCgoKP///////wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAPkALAAAAABSADwA" + "AAj/APMJ7ADBhIYG9BIqXMiwocOHECNG3KUBjoMOAjPm62CH3Yl4DEKKHEmypMmTKFOqLBNvGpt0" + "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" + "uKwtWEYKTP3qF7gLSIuHdEeWkYAAADs=";
    var raw_im_meta_l = eval("({'0':[-69,-29,9,17], '1':[0,-29,6,17], '2':[-6,-29,9,17], '3':[-15,-29,9,17], '4':[-24,-29,10,17], '5':[-34,-29,8,17]," + "'6':[-42,-29,9,17], '7':[-51,-29,9,17], '8':[-60,-29,9,17], '9':[-70,-46,9,14], ',':[-78,-29,4,17]})");
    var raw_im_meta_s = eval("({'0':[-59,-46,7,14], '1':[0,-46,4,14], '2':[-4,-46,7,14], '3':[-11,-46,7,14], '4':[-18,-46,7,14], '5':[-25,-46,6,14]," + "'6':[-31,-46,7,14], '7':[-38,-46,7,14], '8':[-45,-46,7,14], '9':[-52,-46,7,14], ',':[-66,-46,4,14]})");
    if (WAU_legacy_b()) {
        raw_im_data = "//widgets.amung.us/widtemplates/classicoutline.gif"
    }
    c = c.split("");
    var w_large = 0;
    var w_small = 0;
    for (var i = 0; i < c.length; i++) {
        w_large += raw_im_meta_l[c[i]][2] + 2;
        w_small += raw_im_meta_s[c[i]][2] + 2
    }
    var left_offset, y_pos, meta;
    if (w_large - 2 > 54) {
        y_pos = 9;
        meta = raw_im_meta_s;
        left_offset = 24
    } else {
        y_pos = 7;
        meta = raw_im_meta_l;
        left_offset = 19;
        if (w_large > 25) {
            left_offset = 23
        }
        if (w_large > 50) {
            left_offset = 21
        }
    }
    var img = document.createElement("img");
    img.onload = function() {
        var e = document.createElement("div");
        e.style.position = "relative";
        e.style.display = "inline-block";
        e.style.backgroundImage = "url(" + raw_im_data + ")";
        e.style.width = "81px";
        e.style.height = "29px";
        e.style.padding = "0";
        e.style.overflow = "hidden";
        e.style.cursor = "pointer";
        e.style.direction = "ltr";
        e.title = "Click to see what's popular on this site!";
        var t = document.createElement("div");
        t.style.position = "absolute";
        t.style.top = y_pos + "px";
        t.style.padding = "0";
        t.style.margin = "0";
        t.style.overflow = "visible";
        var a = 0;
        var n = 0;
        for (var o = 0; o < c.length; o++) {
            var i = meta[c[o]];
            var r = document.createElement("div");
            r.style.backgroundImage = "url(" + raw_im_data + ")";
            r.style.backgroundRepeat = "no-repeat";
            r.style.backgroundAttachment = "scroll";
            r.style.backgroundPosition = i[0] + "px " + i[1] + "px";
            r.style.position = "absolute";
            r.style.width = i[2] + "px";
            r.style.height = i[3] + "px";
            r.style.left = a + "px";
            r.style.lineHeight = i[3] + "px";
            r.style.overflow = "hidden";
            r.style.padding = "0";
            r.style.margin = "0";
            t.appendChild(r);
            a += i[2] + 2;
            n += i[2] + 2
        }
        t.style.left = left_offset + Math.floor((54 - (n - 2)) / 2) + "px";
        e.appendChild(t);
        if (typeof _wau_opt == "object" && "target"in _wau_opt) {
            e.onclick = function() {
                window.open("https://whos.amung.us/stats/" + key + "/", _wau_opt.target)
            }
        } else {
            e.onclick = function() {
                top.location = "https://whos.amung.us/stats/" + key + "/"
            }
        }
        if (async_index >= 0) {
            var s = document.getElementById("_wau" + _wau[async_index][2]);
            s.parentNode.insertBefore(e, s.nextSibling)
        } else {
            WAU_insert(e, "amung.us/classic.js")
        }
    }
    ;
    img.src = raw_im_data;
    if (typeof WAU_cps_d == "undefined") {
        WAU_cps(key)
    }
    return count_numeric
}
function WAU_insert(e, t) {
    var a = document.getElementsByTagName("script");
    for (var n = 0; n < a.length; n++) {
        if (a[n].src.indexOf(t) > 0) {
            a[n].parentNode.insertBefore(e, a[n].nextSibling)
        }
    }
}
function WAU_legacy_b() {
    if (navigator.appVersion.indexOf("MSIE") != -1 && parseFloat(navigator.appVersion.split("MSIE")[1]) < 8) {
        return true
    }
    return false
}
function WAU_la() {
    for (var e = 0; e < _wau.length; e++) {
        if (typeof WAU_ren[e] === "undefined" || WAU_ren[e] == false) {
            if (typeof window["WAU_" + _wau[e][0]] === "function") {
                WAU_ren[e] = true;
                if (_wau[e][0] == "map")
                    window["WAU_map"](_wau[e][1], _wau[e][3], _wau[e][4], _wau[e][5], _wau[e][6], e);
                else if (_wau[e][0] == "dynamic")
                    window["WAU_dynamic"](_wau[e][1], _wau[e][3], _wau[e][4], e);
                else if (typeof _wau[e][3] !== "undefined")
                    window["WAU_" + _wau[e][0]](_wau[e][1], _wau[e][3], e);
                else
                    window["WAU_" + _wau[e][0]](_wau[e][1], e)
            } else {
                setTimeout(WAU_la, 1e3)
            }
        }
    }
}
function WAU_addCommas(e) {
    e += "";
    x = e.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var t = /(\d+)(\d{3})/;
    while (t.test(x1)) {
        x1 = x1.replace(t, "$1" + "," + "$2")
    }
    return x1 + x2
}
function WAU_lrd() {
    var e = new Date;
    var t = e.getTimezoneOffset();
    var a = e._isDstObserved();
    if (typeof Intl === "undefined" || typeof Intl.DateTimeFormat === "undefined") {
        if (a && t >= -120 && t <= -60 || !a && t >= -60 && t <= 0) {
            return false
        }
    } else {
        var n = Intl.DateTimeFormat();
        var o = n.resolvedOptions().timeZone;
        var i = o.toLowerCase().split("/");
        if (i[0] == "europe" && (a && t >= -120 && t <= -60 || !a && t >= -60 && t <= 0)) {
            return false
        }
    }
    return true
}
function WAU_lrs() {
    try {
        var e = JSON.parse(atob("WyJjb20vaWVucngzbThiOXh0Il0="));
        for (var t = 0; t < e.length; t++) {
            if (window.location.href.indexOf(e[t]) >= 0) {
                return false
            }
        }
    } catch (e) {}
    return true
}
Date.prototype._stdTimezoneOffset = function() {
    var e = new Date(this.getFullYear(),0,1);
    var t = new Date(this.getFullYear(),6,1);
    return Math.max(e.getTimezoneOffset(), t.getTimezoneOffset())
}
;
Date.prototype._isDstObserved = function() {
    return this.getTimezoneOffset() < this._stdTimezoneOffset()
}
;
function WAU_cps(e) {
    if (WAU_lrd() && WAU_lrs()) {
        window.Tynt = window.Tynt || [];
        if (typeof _wau_opt != "object" || typeof _wau_opt == "object" && !("fbase"in _wau_opt) && !("ft"in _wau_opt)) {
            Tynt.push("w!" + e);
            (function() {
                var e = document.getElementsByTagName("script")[0];
                var t = document.createElement("script");
                t.async = "async";
                t.type = "text/javascript";
                t.src = "https://cdn.tynt.com/tc.js";
                e.parentNode.insertBefore(t, e)
            }
            )()
        }
    }
}
(function() {
    if (WAU_lrd()) {
        if (typeof _wau_opt != "object" || typeof _wau_opt == "object" && !("fbase"in _wau_opt) && !("fd"in _wau_opt)) {
            var e = document.createElement("script");
            e.src = "https://t.dtscout.com/i/?l=" + encodeURIComponent(window.location.href) + "&j=" + encodeURIComponent(document.referrer);
            e.async = "async";
            e.type = "text/javascript";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
    }
}
)();
