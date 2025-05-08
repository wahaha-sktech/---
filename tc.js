//v186 Copyright (c) 2008-2025 33Across Inc. All Rights Reserved

Tynt = window.Tynt || [];
"undefined" == typeof Tynt.TIL && "undefined" == typeof Tynt.TCL && "undefined" == typeof Tynt.TICFL && function() {
    var e = window
      , k = document
      , h = {
        distro: "TC",
        id: "TC-" + (new Date).getTime()
    };
    Tynt.TCL = function() {
        if (document.body) {
            Date.now || (Date.now = function() {
                return (new Date).getTime()
            }
            );
            var d = {
                _maxRef: 600,
                _idMacro: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                init: function() {
                    this._icUrl = h.protocol + (Tynt.e || "") + "ic.tynt.com";
                    this._debUrl = h.protocol + (Tynt.e || "") + "de.tynt.com/deb/v2";
                    this._sicUrl = h.protocol + (Tynt.e || "") + "cdn-sic.33across.com/1/javascripts/sic.js";
                    this._apUrl = h.protocol + (Tynt.e || "") + "cdn-ap.33across.com/javascripts/ap.js";
                    this._chmob = this._chua = this._chuav = this._chm = this._chpv = this._chp = "";
                    this.init.fbl = function(a, c) {
                        if (c)
                            for (var g = 0; g < c.length; ++g)
                                0 < g && (d[a] += ", "),
                                d[a] += c[g].brand + ";v=" + c[g].version
                    }
                    ;
                    var a = navigator.userAgentData;
                    "undefined" != typeof a && ("undefined" != typeof a.getHighEntropyValues && (this._chpv = "pending",
                    a.getHighEntropyValues(["model", "platformVersion", "fullVersionList"]).then(function(a) {
                        d._chm = a.model;
                        d._chpv = a.platformVersion;
                        d.init.fbl("_chuav", a.fullVersionList)
                    })),
                    this._chp = a.platform,
                    this._chmob = a.mobile,
                    this.init.fbl("_chua", a.brands))
                },
                newEle: function(a, b, c, g) {
                    g = g || window;
                    a = g.document.createElement(a);
                    b && this.extend(a, b);
                    c && this.extend(a.style, c);
                    return a
                },
                injectScript: function(a, b, c) {
                    b = b || window;
                    a = this.newEle("script", {
                        async: "async",
                        referrerPolicy: "unsafe-url",
                        type: "text/javascript",
                        src: a
                    }, null, b);
                    this.insertEle(a, c || b.document.getElementsByTagName("script")[0])
                },
                injectSicScript: function(a) {
                    this.injectScript(this._sicUrl, window, a)
                },
                injectApolloScript: function() {
                    this.injectScript(this._apUrl)
                },
                injectSicIframe: function(a, b, c) {
                    var g = {
                        width: a.width + "px",
                        height: a.height + "px",
                        border: "0 none",
                        margin: "0"
                    };
                    c && this.extend(g, c);
                    c = this.newEle("iframe", {
                        referrerPolicy: "unsafe-url",
                        src: "about:blank",
                        frameBorder: "0",
                        frameSpacing: "0",
                        scrolling: "no"
                    }, g);
                    this.insertEle(c, b);
                    a.iframeId = this.eleId(c);
                    a.sicWindow = c.contentWindow;
                    a = c.contentWindow.document;
                    a.open();
                    a.write('<!DOCTYPE html><html><head><style type="text/css">*{margin:0;padding:0;}</style></head><body><script type="text/javascript">window.Tynt = window.parent.Tynt;\x3c/script><script type="text/javascript" src="' + this._sicUrl + '">\x3c/script></body></html>');
                    a.close()
                },
                insertEle: function(a, b) {
                    b ? "script" == b.tagName.toLowerCase() ? b.parentNode.insertBefore(a, b) : b.appendChild(a) : document.body.appendChild(a)
                },
                eleId: function(a) {
                    var b = a.id;
                    b || (b = "x33x" + Date.now(),
                    a.id = b);
                    return b
                },
                _imgs: [],
                injectPixel: function(a, b, c) {
                    var g;
                    try {
                        g = k.createElement("img")
                    } catch (d) {
                        g = document.createElement("img")
                    }
                    g && (this._imgs.push(g),
                    b && (g.onload = b),
                    c && (g.onerror = c),
                    g.referrerPolicy = "unsafe-url",
                    g.src = a)
                },
                docUrl: function() {
                    var a = this.getLink("canonical");
                    a || (a = this.getMeta("property", "og:url", "name", "original-source"));
                    if (a) {
                        if (0 != a.indexOf("http")) {
                            var b = h.protocol + e.location.host + e.location.pathname
                              , c = k.getElementsByTagName("base")[0];
                            c && (c = c.getAttribute("href")) && (b = c);
                            "/" == a.charAt(0) ? (c = b.indexOf("/", 9),
                            -1 < c && (b = b.slice(0, c))) : (c = b.lastIndexOf("/"),
                            b = 9 < c ? b.slice(0, c + 1) : b + "/");
                            a = b + a
                        }
                        return a
                    }
                    return ""
                },
                getMeta: function(a, b, c, g) {
                    var d, e = null, f = null, h = k.getElementsByTagName("meta");
                    for (d = 0; d < h.length; ++d)
                        e || h[d].getAttribute(a) !== b ? c && !f && h[d].getAttribute(c) === g && (f = h[d].getAttribute("content") || null) : e = h[d].getAttribute("content") || null;
                    return e || f
                },
                getLink: function(a, b) {
                    var c, g, d = k.getElementsByTagName("link");
                    for (c = 0; c < d.length; ++c)
                        if (g = d[c].getAttribute("rel"),
                        d[c].getAttribute("href") && g && (!b && 0 <= g.indexOf(a) || b && g == a))
                            return d[c].href;
                    return null
                },
                extend: function(a, b) {
                    var c, d;
                    for (c = 1; c < arguments.length; ++c)
                        for (d in arguments[c])
                            arguments[c].hasOwnProperty(d) && (a[d] = arguments[c][d]);
                    return a
                },
                isArray: function(a) {
                    return "undefined" != typeof a && "[object Array]" === Object.prototype.toString.call(a)
                },
                inArray: function(a, b) {
                    return 0 <= this.indexOf(a, b)
                },
                toArray: function(a, b) {
                    return Array.prototype.slice.call(a, b || 0)
                },
                indexOf: function(a, b) {
                    if (a.indexOf)
                        return a.indexOf(b);
                    for (var c = 0; c < a.length; ++c)
                        if (a[c] === b)
                            return c;
                    return -1
                },
                unique: function(a) {
                    var b, c = {}, d = [];
                    for (b = 0; b < a.length; ++b)
                        c[a[b]] || (c[a[b]] = !0,
                        d.push(a[b]));
                    return d
                },
                iframeType: function() {
                    var a = this.iframeEle()
                      , b = u;
                    if (a)
                        b = a.id && 0 <= a.id.search(/google_ads?_i?frame/) ? 6 : v;
                    else
                        try {
                            window != window.top && (b = "undefined" != typeof window.$sf ? w : r)
                        } catch (c) {
                            b = r,
                            d.clog("iframeType: " + c.message)
                        }
                    return b
                },
                iframeEle: function(a) {
                    var b = null;
                    a = a || window;
                    try {
                        b = a.frameElement
                    } catch (c) {}
                    return b
                },
                iframeTop: function() {
                    var a = window
                      , b = null;
                    try {
                        for (; a != window.top; )
                            b = a,
                            a = a.parent
                    } catch (c) {
                        return null
                    }
                    return b ? this.iframeEle(b) : null
                },
                getTopWin: function() {
                    var a = window;
                    try {
                        for (; a.parent !== a && a.parent.document; )
                            a = a.parent
                    } catch (b) {}
                    return a
                },
                isolated: function() {
                    var a = !0;
                    try {
                        "function" == typeof window.top.open && (a = !1)
                    } catch (b) {}
                    return a
                },
                tyntIds: function() {
                    return this.unique(Tynt).join("~")
                },
                getPubId: function() {
                    for (var a = null, b = 0; b < Tynt.length; ++b)
                        if ("string" == typeof Tynt[b] && 22 == Tynt[b].length && 0 > Tynt[b].indexOf("!")) {
                            a = Tynt[b];
                            break
                        }
                    return a
                },
                countIds: function(a) {
                    var b, c = 0;
                    for (b = 0; b < Tynt.length; ++b)
                        Tynt[b] === a && ++c;
                    return c
                },
                _log: function(a) {
                    "undefined" == typeof Tynt.debug && 0 < e.location.search.indexOf("__tcdebugmode=1") && e.console && e.console.log && (Tynt.debug = !0);
                    if (!0 === Tynt.debug || 1 === Tynt.debug)
                        a.unshift("[TC]"),
                        e.console.log.apply(e.console, a)
                },
                log: function() {
                    h.inXOIframe() ? this.clog.apply(this, arguments) : this._log(this.toArray(arguments))
                },
                clog: function() {
                    var a = this.toArray(arguments);
                    a.unshift(h.id);
                    this._log(a)
                },
                callIcU: function() {
                    e._33Across.state.icDone = x;
                    d.clog("Calling IC/U");
                    this.injectPixel(this._icUrl + "/u", function() {
                        e._33Across.state.icDone = p
                    })
                },
                callIcCb: function() {
                    var a, b, c, g, f, m;
                    if (!e._33Across.state.icDone) {
                        e._33Across.state.icDone = x;
                        b = this.getCookie(k.cookie, "tracertraffic");
                        a = e.location.hash;
                        a = /tynt=/.test(a) ? a.match(/tynt=?([^?&$#]*)/)[1] : !1;
                        var q = this.getPrivacyParameters();
                        g = c = this._icUrl + "/b/p?id=" + this.tyntIds() + (b ? "&et=" + b : "") + (a ? "&a=" + a : "") + ("string" == typeof Tynt.b ? "&b=" + Tynt.b : "") + "&lm=" + h.type + "&ts=" + Date.now() + "&dn=" + h.distro + "&iso=" + (this.isolated() ? "1" : "0") + q + "&pu=" + encodeURIComponent(this.trunc(this.pageUrl(), d._maxRef));
                        (a = this.getMeta("property", "og:title")) && a != k.title && (g += "&ct=" + encodeURIComponent(this.trunc(a, 200)));
                        f = g;
                        k.referrer && (a = this.trunc(k.referrer, this._maxRef),
                        f += "&r=" + encodeURIComponent(a));
                        m = f;
                        if (a = k.title || e.location.hostname)
                            a = this.trim(this.trunc(a, 200)),
                            m += "&t=" + encodeURIComponent(a);
                        b = this.clientHints(m);
                        d.callIcCb.rsp = function() {
                            e._33Across.state.icDone = p
                        }
                        ;
                        d.clog("Calling IC");
                        this.injectPixel(b, d.callIcCb.rsp, function() {
                            d.injectPixel(m, d.callIcCb.rsp, function() {
                                d.injectPixel(f, d.callIcCb.rsp, function() {
                                    d.injectPixel(g, d.callIcCb.rsp, function() {
                                        d.injectPixel(c, d.callIcCb.rsp)
                                    })
                                })
                            })
                        })
                    }
                },
                callIc: function() {
                    this.when(function() {
                        return "pending" != d._chpv
                    }, this.callIcCb, {
                        timeout: 300,
                        timeoutCallback: this.callIcCb
                    }, this)
                },
                callDeb: function(a, b, c) {
                    function g(a, b) {
                        d.clog("Calling DEB " + b + (a ? "" : " on IC timeout"));
                        var c = encodeURIComponent(d.trunc(k.referrer, d._maxRef)), g = this.getPrivacyParameters(), f;
                        f = this.clientHints("");
                        d.injectScript(d._debUrl + "?id=" + d.tyntIds() + "&dn=" + h.distro + "&cc=" + b + f + "&r=" + c + g + "&pu=" + encodeURIComponent(d.trunc(d.pageUrl(), d._maxRef)), e)
                    }
                    "undefined" == typeof a && (a = 1);
                    e._33Across.state.deDone >= a || (++e._33Across.state.deDone,
                    1 !== e._33Across.state.deDone && !0 !== c || this.when(function() {
                        return e._33Across.state.icDone == p
                    }, g, {
                        timeout: 300,
                        timeoutCallback: g,
                        callbackData: e._33Across.state.deDone
                    }, this),
                    b && 0 < b.length && setTimeout(function() {
                        d.callDeb(a, b, !0)
                    }, b.shift()))
                },
                callDebX: function(a, b) {
                    function c(a, c) {
                        d[b ? "log" : "clog"]("Calling DEBx " + c + (a ? "" : " on IC timeout"));
                        var f = encodeURIComponent(d.trunc(k.referrer, d._maxRef)), q = this.getPrivacyParameters(), l;
                        l = this.clientHints("");
                        d.injectScript(d._debUrl + "?m=xch&id=" + d.tyntIds() + "&dn=" + h.distro + "&cc=" + c + l + "&r=" + f + q + "&pu=" + encodeURIComponent(d.trunc(d.pageUrl(), d._maxRef)), e)
                    }
                    a || (a = 10);
                    e._33Across.state.dxDone >= a || (++e._33Across.state.dxDone,
                    this.when(function() {
                        return e._33Across.state.icDone == p
                    }, c, {
                        timeout: 300,
                        timeoutCallback: c,
                        callbackData: e._33Across.state.dxDone
                    }, this))
                },
                jsonDecode: function(a) {
                    if ("function" != typeof Array.prototype.toJSON)
                        return JSON.stringify(a);
                    var b = Array.prototype.toJSON;
                    delete Array.prototype.toJSON;
                    a = JSON.stringify(a);
                    Array.prototype.toJSON = b;
                    return a
                },
                getCookie: function(a, b) {
                    for (var c = b + "=", d = a.split(";"), f = 0; f < d.length; f++) {
                        for (var e = d[f]; " " == e.charAt(0); )
                            e = e.substring(1, e.length);
                        if (0 == e.indexOf(c))
                            return e.substring(c.length, e.length)
                    }
                    return null
                },
                trim: function(a) {
                    return a.replace(/^\s+|\s+$/g, "")
                },
                trunc: function(a, b) {
                    var c, d;
                    if (!a || a.length <= b)
                        return a;
                    c = a.substring(0, b);
                    for (d = 1; 3 >= d; ++d)
                        if ("%" == c.charAt(c.length - d))
                            return c.substring(0, c.length - d);
                    return c
                },
                when: function(a, b, c, d) {
                    var f, h, k, l = null, y = null, n = a();
                    c = c || {};
                    f = c.interval || 50;
                    h = c.timeout;
                    k = c.timeoutCallback || function() {}
                    ;
                    if (n)
                        return b.call(d, n, c.callbackData),
                        !0;
                    l = e.setInterval(function() {
                        if (n = a())
                            e.clearInterval(l),
                            e.clearTimeout(y),
                            b.call(d, n, c.callbackData)
                    }, f);
                    h && (y = e.setTimeout(function() {
                        e.clearInterval(l);
                        k.call(d, n, c.callbackData)
                    }, h));
                    return !1
                },
                prob: function(a) {
                    a = parseFloat(a) || 0;
                    return Math.random() < a
                },
                on: function(a, b, c, d) {
                    a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
                },
                off: function(a, b, c, d) {
                    a.removeEventListener ? a.removeEventListener(b, c, d || !1) : a.detachEvent && a.detachEvent("on" + b, c)
                },
                pageUrl: function() {
                    return h.inXOIframe() ? k.referrer : e.location.href
                },
                clientHints: function(a) {
                    "pending" != this._chpv && (this._chm && (a += "&chm=" + encodeURIComponent(this._chm)),
                    this._chpv && (a += "&chpv=" + encodeURIComponent(this._chpv)),
                    this._chuav && (a += "&chuav=" + encodeURIComponent(this._chuav)));
                    this._chp && (a += "&chp=" + encodeURIComponent(this._chp));
                    "boolean" == typeof this._chmob && (a += "&chmob=" + (this._chmob ? "1" : "0"));
                    this._chua && (a += "&chua=" + encodeURIComponent(this._chua));
                    return a
                },
                getPrivacyParameters: function() {
                    return ("string" == typeof t.uspString ? "&us_privacy=" + t.uspString : "") + ("string" == typeof f.gppString ? "&gpp=" + f.gppString : "") + (Array.isArray(f.gppSid) && 0 < f.gppSid.length ? "&gpp_sid=" + f.gppSid.join(",") : "")
                },
                getUrlArgs: function() {
                    var a, b, c, d = [];
                    a = location.href.indexOf("?");
                    if (-1 != a)
                        for (b = location.href.substring(a + 1, location.href.length).split("&"),
                        a = 0; a < b.length; a++)
                            c = b[a].split("="),
                            d[c[0]] = c[1];
                    return d
                }
            }
              , t = {
                uspString: null,
                init: function() {
                    var a = this
                      , b = function() {
                        for (var a = window, b; !b; ) {
                            try {
                                a.frames.__uspapiLocator && (b = a)
                            } catch (c) {}
                            if (a === window.top)
                                break;
                            a = a.parent
                        }
                        var f = {};
                        e.__uspapi = function(a, c, d) {
                            if (b) {
                                var e = "usp-" + Math.random();
                                a = {
                                    __uspapiCall: {
                                        command: a,
                                        callId: e,
                                        version: c
                                    }
                                };
                                f[e] = d;
                                b.postMessage(a, "*")
                            } else
                                d({
                                    msg: "__uspapi not found"
                                }, !1)
                        }
                        ;
                        d.on(window, "message", function(a) {
                            var b = a.data;
                            if ("string" === typeof a.data)
                                try {
                                    b = JSON.parse(a.data)
                                } catch (c) {}
                            b.__uspapiReturn && (a = b.__uspapiReturn,
                            f[a.callId](a.returnValue, a.success),
                            delete f[a.callId])
                        }, !1)
                    }
                      , c = function() {
                        e.__uspapi("getUSPData", 1, function(b, c) {
                            c && (a.uspString = b.uspString)
                        })
                    };
                    e.__uspapi || b();
                    try {
                        c()
                    } catch (f) {
                        b(),
                        c()
                    }
                    Tynt.getUspString = function() {
                        return a.uspString
                    }
                    ;
                    Tynt.getConsentString = function() {
                        return null
                    }
                }
            }
              , f = {
                gppSid: [],
                gppString: null,
                gppPromise: null,
                cmpWindow: null,
                cmpFound: !1,
                timeoutMs: 1E4,
                findCmpWindow: function() {
                    for (var a = window, b = null; !b; ) {
                        try {
                            a.frames.__gppLocator && (b = a)
                        } catch (c) {}
                        if (a === window.top)
                            break;
                        a = a.parent
                    }
                    return f.cmpWindow = b
                },
                createCmpProxy: function() {
                    var a = {};
                    e.__gpp = function(b, c, d, e) {
                        if (f.cmpWindow) {
                            var h = "33x-gpp-" + Math.random();
                            b = {
                                __gppCall: {
                                    command: b,
                                    parameter: d,
                                    version: e,
                                    callId: h
                                }
                            };
                            "function" == typeof c && (a[h] = c);
                            f.cmpWindow.postMessage(b, "*")
                        } else
                            "function" == typeof c && c("__gppLocator not found", !1)
                    }
                    ;
                    d.on(window, "message", function(b) {
                        var c = b.data;
                        if ("string" === typeof b.data)
                            try {
                                c = JSON.parse(b.data)
                            } catch (e) {
                                c = null,
                                d.log("JSON.parse exception:", b.data)
                            }
                        c && c.__gppReturn && (b = c.__gppReturn,
                        a[b.callId](b.returnValue, b.success),
                        delete a[b.callId])
                    }, !1)
                },
                isAppSec: function(a) {
                    return a && Array.isArray(a.applicableSection) && 0 < a.applicableSection.length && 0 !== a.applicableSection[0]
                },
                isAppSecs: function(a) {
                    return a && Array.isArray(a.applicableSections) && 0 < a.applicableSections.length && 0 !== a.applicableSections[0]
                },
                getApplicableSections: function(a) {
                    return f.isAppSecs(a) ? a.applicableSections : f.isAppSec(a) ? a.applicableSection : []
                },
                startListening: function() {
                    d.log("startListening");
                    var a = e.__gpp("addEventListener", f.handleEvent);
                    a && d.log("startListening, event returned:", a);
                    a && a.pingData && "1.1" != a.pingData.gppVersion && f.handleEvent(a)
                },
                handleEvent: function(a) {
                    if (a && a.pingData) {
                        var b = a.pingData;
                        d.log("handleEvent", b.gppVersion, a);
                        "loaded" == b.cmpStatus && ("1.1" == b.gppVersion ? b.gppString && b.applicableSections && f.receiveData(b) : f.receiveData(e.__gpp("getGPPData")))
                    } else
                        d.log("handleEvent:", a)
                },
                nullData: function() {
                    return {
                        gpp: null,
                        gppSid: [],
                        usp: "function" === typeof Tynt.getUspString ? Tynt.getUspString() : null,
                        coppa: null,
                        gdpr: null
                    }
                },
                init: function() {
                    Tynt.getPrivacySignals = function() {
                        null == f.gppPromise && (f.gppPromise = new Promise(function(a, c) {
                            var e = null;
                            f.cmpFound ? e = setTimeout(function() {
                                d.log("_gpp timed-out after " + f.timeoutMs / 1E3 + " seconds.");
                                a(f.nullData())
                            }, f.timeoutMs) : a(f.nullData());
                            f.receiveData = function(c) {
                                c && (f.gppString = c ? c.gppString : null,
                                f.gppSid = f.getApplicableSections(c),
                                null != f.gppString && (clearTimeout(e),
                                a({
                                    gpp: "string" === typeof f.gppString ? f.gppString : null,
                                    gppSid: f.gppSid,
                                    usp: "function" === typeof Tynt.getUspString ? Tynt.getUspString() : null,
                                    coppa: null,
                                    gdpr: null
                                })))
                            }
                        }
                        ));
                        return f.gppPromise
                    }
                    ;
                    f.cmpFound = "function" === typeof e.__gpp;
                    if (!f.cmpFound) {
                        var a = e.location.search;
                        "object" === typeof _gppMock10 && 0 < a.indexOf("__tcgppver=1.0") ? _gppMock10.init() : "object" === typeof _gppMock11 && 0 < a.indexOf("__tcgppver=1.1") && _gppMock11.init();
                        f.cmpFound = "function" === typeof e.__gpp
                    }
                    Tynt.getPrivacySignals().then(function(a) {
                        d.log("getPrivacySignals resolve:", a)
                    }, function(a) {
                        d.log("getPrivacySignals reject:", a)
                    });
                    "function" === typeof e.__gpp ? f.startListening() : h.inIframe() && h.isolated ? null == f.findCmpWindow() ? d.log("CMP API not found in frame ancestors.") : (f.cmpFound = !0,
                    f.createCmpProxy(),
                    f.startListening()) : d.log("CMP API not found in _window.")
                }
            }
              , x = 1
              , p = 2
              , u = 0
              , r = 3
              , w = 4
              , v = 5;
            h.type = 0;
            h.inIframe = function() {
                return this.type > u
            }
            ;
            h.inSOIframe = function() {
                return this.type >= v && 6 >= this.type
            }
            ;
            h.inXOIframe = function() {
                return this.type >= r && this.type <= w
            }
            ;
            h.init = function() {
                this.type = d.iframeType();
                this.inSOIframe() && (e = d.getTopWin(),
                k = e.document);
                e._33Across || (e._33Across = {});
                e._33Across.state || (e._33Across.state = {
                    icDone: 0,
                    deDone: 0,
                    dxDone: 0,
                    ivDone: !1
                });
                this.protocol = "https://";
                d.init();
                this.isolated = d.isolated();
                t.init();
                f.init();
                d.clog("xoi=" + this.inXOIframe() + ", soi=" + this.inSOIframe() + ", iso=" + this.isolated);
                e._33Across.pvTs || (e._33Across.pvTs = Date.now())
            }
            ;
            h.init();
            h.inXOIframe() ? d.clog("cross-origin iframes are not supported") : (d.callIc(),
            d.callDeb(100, null, !0))
        } else
            setTimeout(function() {
                Tynt.TCL()
            }, 50)
    }
    ;
    Tynt.TCL()
}();
