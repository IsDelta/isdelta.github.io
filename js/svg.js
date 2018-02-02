/*!
 * Font Awesome Free 5.0.6 by @fontawesome - http://fontawesome.com
 * License - http://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
! function () {
    "use strict";
    var c = {};
    try {
        "undefined" != typeof window && (c = window)
    } catch (c) {}
    var l = (c.navigator || {}).userAgent,
        h = void 0 === l ? "" : l,
        v = c,
        z = (~h.indexOf("MSIE") || h.indexOf("Trident/"), "___FONT_AWESOME___"),
        e = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        m = a.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(a.map(function (c) {
        return c + "x"
    })).concat(m.map(function (c) {
        return "w-" + c
    }));
    var t = v || {};
    t[z] || (t[z] = {}), t[z].styles || (t[z].styles = {}), t[z].hooks || (t[z].hooks = {}), t[z].shims || (t[z].shims = []);
    var s = t[z],
        r = Object.assign || function (c) {
            for (var l = 1; l < arguments.length; l++) {
                var h = arguments[l];
                for (var v in h) Object.prototype.hasOwnProperty.call(h, v) && (c[v] = h[v])
            }
            return c
        };
    var f = {
        vk: [576, 512, [], "f189", "M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"],

        telegram: [496, 512, [], "f2c6", "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"],

        github: [496, 512, [], "f09b", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]
    };
    ! function (c) {
        try {
            c()
        } catch (c) {
            if (!e) throw c
        }
    }(function () {
        ! function c(l, h) {
            var v = Object.keys(h).reduce(function (c, l) {
                var v = h[l];
                return v.icon ? c[v.iconName] = v.icon : c[l] = v, c
            }, {});
            "function" == typeof s.hooks.addPack ? s.hooks.addPack(l, v) : s.styles[l] = r({}, s.styles[l] || {}, v), "fas" === l && c("fa", h)
        }("fab", f)
    })
}(),
function () {
    "use strict";
    var c = {};
    try {
        "undefined" != typeof window && (c = window)
    } catch (c) {}
    var l = (c.navigator || {}).userAgent,
        h = void 0 === l ? "" : l,
        v = c,
        z = (~h.indexOf("MSIE") || h.indexOf("Trident/"), "___FONT_AWESOME___"),
        e = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        m = a.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(a.map(function (c) {
        return c + "x"
    })).concat(m.map(function (c) {
        return "w-" + c
    }));
    var t = v || {};
    t[z] || (t[z] = {}), t[z].styles || (t[z].styles = {}), t[z].hooks || (t[z].hooks = {}), t[z].shims || (t[z].shims = []);
    var s = t[z],
        r = Object.assign || function (c) {
            for (var l = 1; l < arguments.length; l++) {
                var h = arguments[l];
                for (var v in h) Object.prototype.hasOwnProperty.call(h, v) && (c[v] = h[v])
            }
            return c
        };
    var f = {
    };
    ! function (c) {
        try {
            c()
        } catch (c) {
            if (!e) throw c
        }
    }(function () {
        ! function c(l, h) {
            var v = Object.keys(h).reduce(function (c, l) {
                var v = h[l];
                return v.icon ? c[v.iconName] = v.icon : c[l] = v, c
            }, {});
            "function" == typeof s.hooks.addPack ? s.hooks.addPack(l, v) : s.styles[l] = r({}, s.styles[l] || {}, v), "fas" === l && c("fa", h)
        }("far", f)
    })
}(),
function () {
    "use strict";
    var c = {};
    try {
        "undefined" != typeof window && (c = window)
    } catch (c) {}
    var l = (c.navigator || {}).userAgent,
        h = void 0 === l ? "" : l,
        v = c,
        z = (~h.indexOf("MSIE") || h.indexOf("Trident/"), "___FONT_AWESOME___"),
        e = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        m = a.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(a.map(function (c) {
        return c + "x"
    })).concat(m.map(function (c) {
        return "w-" + c
    }));
    var t = v || {};
    t[z] || (t[z] = {}), t[z].styles || (t[z].styles = {}), t[z].hooks || (t[z].hooks = {}), t[z].shims || (t[z].shims = []);
    var s = t[z],
        r = Object.assign || function (c) {
            for (var l = 1; l < arguments.length; l++) {
                var h = arguments[l];
                for (var v in h) Object.prototype.hasOwnProperty.call(h, v) && (c[v] = h[v])
            }
            return c
        };
    var f = {
    };
    ! function (c) {
        try {
            c()
        } catch (c) {
            if (!e) throw c
        }
    }(function () {
        ! function c(l, h) {
            var v = Object.keys(h).reduce(function (c, l) {
                var v = h[l];
                return v.icon ? c[v.iconName] = v.icon : c[l] = v, c
            }, {});
            "function" == typeof s.hooks.addPack ? s.hooks.addPack(l, v) : s.styles[l] = r({}, s.styles[l] || {}, v), "fas" === l && c("fa", h)
        }("fas", f)
    })
}(),
function () {
    "use strict";
    var c = function () {},
        l = {},
        h = {},
        v = null,
        z = {
            mark: c,
            measure: c
        };
    try {
        "undefined" != typeof window && (l = window), "undefined" != typeof document && (h = document), "undefined" != typeof MutationObserver && (v = MutationObserver), "undefined" != typeof performance && (z = performance)
    } catch (c) {}
    var e = (l.navigator || {}).userAgent,
        a = void 0 === e ? "" : e,
        m = l,
        t = h,
        s = v,
        r = z,
        f = !!m.document,
        M = !!t.documentElement && !!t.head && "function" == typeof t.addEventListener && "function" == typeof t.createElement,
        i = ~a.indexOf("MSIE") || ~a.indexOf("Trident/"),
        n = "___FONT_AWESOME___",
        H = 16,
        o = "svg-inline--fa",
        V = "data-fa-i2svg",
        C = "data-fa-pseudo-element",
        L = "fontawesome-i2svg",
        u = function () {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }(),
        d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        p = d.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        b = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
        g = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(d.map(function (c) {
            return c + "x"
        })).concat(p.map(function (c) {
            return "w-" + c
        })),
        y = function (c, l) {
            if (!(c instanceof l)) throw new TypeError("Cannot call a class as a function")
        },
        w = function () {
            function c(c, l) {
                for (var h = 0; h < l.length; h++) {
                    var v = l[h];
                    v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(c, v.key, v)
                }
            }
            return function (l, h, v) {
                return h && c(l.prototype, h), v && c(l, v), l
            }
        }(),
        k = Object.assign || function (c) {
            for (var l = 1; l < arguments.length; l++) {
                var h = arguments[l];
                for (var v in h) Object.prototype.hasOwnProperty.call(h, v) && (c[v] = h[v])
            }
            return c
        },
        S = function (c) {
            if (Array.isArray(c)) {
                for (var l = 0, h = Array(c.length); l < c.length; l++) h[l] = c[l];
                return h
            }
            return Array.from(c)
        },
        x = m.FontAwesomeConfig || {},
        A = Object.keys(x),
        q = k({
            familyPrefix: "fa",
            replacementClass: o,
            autoReplaceSvg: !0,
            autoAddCss: !0,
            autoA11y: !0,
            searchPseudoElements: !1,
            observeMutations: !0,
            keepOriginalSource: !0,
            measurePerformance: !1,
            showMissingIcons: !0
        }, x);
    q.autoReplaceSvg || (q.observeMutations = !1);
    var O = k({}, q);

    function j(c) {
        var l = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).asNewDefault,
            h = void 0 !== l && l,
            v = Object.keys(O),
            z = h ? function (c) {
                return ~v.indexOf(c) && !~A.indexOf(c)
            } : function (c) {
                return ~v.indexOf(c)
            };
        Object.keys(c).forEach(function (l) {
            z(l) && (O[l] = c[l])
        })
    }
    m.FontAwesomeConfig = O;
    var N = m || {};
    N[n] || (N[n] = {}), N[n].styles || (N[n].styles = {}), N[n].hooks || (N[n].hooks = {}), N[n].shims || (N[n].shims = []);
    var E = N[n],
        P = [],
        _ = !1;
    M && ((_ = (t.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(t.readyState)) || t.addEventListener("DOMContentLoaded", function c() {
        t.removeEventListener("DOMContentLoaded", c), _ = 1, P.map(function (c) {
            return c()
        })
    }));
    var T = function (c) {
            M && (_ ? setTimeout(c, 0) : P.push(c))
        },
        F = H,
        I = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: !1,
            flipY: !1
        };

    function R(c) {
        if (c && M) {
            var l = t.createElement("style");
            l.setAttribute("type", "text/css"), l.innerHTML = c;
            for (var h = t.head.childNodes, v = null, z = h.length - 1; z > -1; z--) {
                var e = h[z],
                    a = (e.tagName || "").toUpperCase();
                ["STYLE", "LINK"].indexOf(a) > -1 && (v = e)
            }
            return t.head.insertBefore(l, v), c
        }
    }
    var W = 0;

    function B() {
        return ++W
    }

    function D(c) {
        for (var l = [], h = (c || []).length >>> 0; h--;) l[h] = c[h];
        return l
    }

    function X(c) {
        return c.classList ? D(c.classList) : (c.getAttribute("class") || "").split(" ").filter(function (c) {
            return c
        })
    }

    function Y(c, l) {
        var h, v = l.split("-"),
            z = v[0],
            e = v.slice(1).join("-");
        return z !== c || "" === e || (h = e, ~g.indexOf(h)) ? null : e
    }

    function U(c) {
        return ("" + c).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function K(c) {
        return Object.keys(c || {}).reduce(function (l, h) {
            return l + (h + ": ") + c[h] + ";"
        }, "")
    }

    function G(c) {
        return c.size !== I.size || c.x !== I.x || c.y !== I.y || c.rotate !== I.rotate || c.flipX || c.flipY
    }

    function J(c) {
        var l = c.transform,
            h = c.containerWidth,
            v = c.iconWidth;
        return {
            outer: {
                transform: "translate(" + h / 2 + " 256)"
            },
            inner: {
                transform: "translate(" + 32 * l.x + ", " + 32 * l.y + ") " + " " + ("scale(" + l.size / 16 * (l.flipX ? -1 : 1) + ", " + l.size / 16 * (l.flipY ? -1 : 1) + ") ") + " " + ("rotate(" + l.rotate + " 0 0)")
            },
            path: {
                transform: "translate(" + v / 2 * -1 + " -256)"
            }
        }
    }
    var Q = {
            x: 0,
            y: 0,
            width: "100%",
            height: "100%"
        },
        Z = function (c) {
            var l = c.children,
                h = c.attributes,
                v = c.main,
                z = c.mask,
                e = c.transform,
                a = v.width,
                m = v.icon,
                t = z.width,
                s = z.icon,
                r = J({
                    transform: e,
                    containerWidth: t,
                    iconWidth: a
                }),
                f = {
                    tag: "rect",
                    attributes: k({}, Q, {
                        fill: "white"
                    })
                },
                M = {
                    tag: "g",
                    attributes: k({}, r.inner),
                    children: [{
                        tag: "path",
                        attributes: k({}, m.attributes, r.path, {
                            fill: "black"
                        })
                    }]
                },
                i = {
                    tag: "g",
                    attributes: k({}, r.outer),
                    children: [M]
                },
                n = "mask-" + B(),
                H = "clip-" + B(),
                o = {
                    tag: "defs",
                    children: [{
                        tag: "clipPath",
                        attributes: {
                            id: H
                        },
                        children: [s]
                    }, {
                        tag: "mask",
                        attributes: k({}, Q, {
                            id: n,
                            maskUnits: "userSpaceOnUse",
                            maskContentUnits: "userSpaceOnUse"
                        }),
                        children: [f, i]
                    }]
                };
            return l.push(o, {
                tag: "rect",
                attributes: k({
                    fill: "currentColor",
                    "clip-path": "url(#" + H + ")",
                    mask: "url(#" + n + ")"
                }, Q)
            }), {
                children: l,
                attributes: h
            }
        },
        $ = function (c) {
            var l = c.children,
                h = c.attributes,
                v = c.main,
                z = c.transform,
                e = K(c.styles);
            if (e.length > 0 && (h.style = e), G(z)) {
                var a = J({
                    transform: z,
                    containerWidth: v.width,
                    iconWidth: v.width
                });
                l.push({
                    tag: "g",
                    attributes: k({}, a.outer),
                    children: [{
                        tag: "g",
                        attributes: k({}, a.inner),
                        children: [{
                            tag: v.icon.tag,
                            children: v.icon.children,
                            attributes: k({}, v.icon.attributes, a.path)
                        }]
                    }]
                })
            } else l.push(v.icon);
            return {
                children: l,
                attributes: h
            }
        },
        cc = function (c) {
            var l = c.children,
                h = c.main,
                v = c.mask,
                z = c.attributes,
                e = c.styles,
                a = c.transform;
            if (G(a) && h.found && !v.found) {
                var m = h.width / h.height / 2,
                    t = .5;
                z.style = K(k({}, e, {
                    "transform-origin": m + a.x / 16 + "em " + (t + a.y / 16) + "em"
                }))
            }
            return [{
                tag: "svg",
                attributes: z,
                children: l
            }]
        },
        lc = function (c) {
            var l = c.prefix,
                h = c.iconName,
                v = c.children,
                z = c.attributes,
                e = c.symbol,
                a = !0 === e ? l + "-" + O.familyPrefix + "-" + h : e;
            return [{
                tag: "svg",
                attributes: {
                    style: "display: none;"
                },
                children: [{
                    tag: "symbol",
                    attributes: k({}, z, {
                        id: a
                    }),
                    children: v
                }]
            }]
        };

    function hc(c) {
        var l = c.icons,
            h = l.main,
            v = l.mask,
            z = c.prefix,
            e = c.iconName,
            a = c.transform,
            m = c.symbol,
            t = c.title,
            s = c.extra,
            r = c.watchable,
            f = void 0 !== r && r,
            M = v.found ? v : h,
            i = M.width,
            n = M.height,
            H = "fa-w-" + Math.ceil(i / n * 16),
            o = [O.replacementClass, e ? O.familyPrefix + "-" + e : "", H].concat(s.classes).join(" "),
            C = {
                children: [],
                attributes: k({}, s.attributes, {
                    "data-prefix": z,
                    "data-icon": e,
                    class: o,
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 " + i + " " + n
                })
            };
        f && (C.attributes[V] = ""), t && C.children.push({
            tag: "title",
            attributes: {
                id: C.attributes["aria-labelledby"] || "title-" + B()
            },
            children: [t]
        });
        var L = k({}, C, {
                prefix: z,
                iconName: e,
                main: h,
                mask: v,
                transform: a,
                symbol: m,
                styles: s.styles
            }),
            u = v.found && h.found ? Z(L) : $(L),
            d = u.children,
            p = u.attributes;
        return L.children = d, L.attributes = p, m ? lc(L) : cc(L)
    }

    function vc(c) {
        var l = c.content,
            h = c.width,
            v = c.height,
            z = c.transform,
            e = c.title,
            a = c.extra,
            m = c.watchable,
            t = void 0 !== m && m,
            s = k({}, a.attributes, e ? {
                title: e
            } : {}, {
                class: a.classes.join(" ")
            });
        t && (s[V] = "");
        var r, f, M, n, o, C, L, u, d, p = k({}, a.styles);
        G(z) && (p.transform = (f = (r = {
            transform: z,
            startCentered: !0,
            width: h,
            height: v
        }).transform, M = r.width, n = void 0 === M ? H : M, o = r.height, C = void 0 === o ? H : o, L = r.startCentered, d = "", d += (u = void 0 !== L && L) && i ? "translate(" + (f.x / F - n / 2) + "em, " + (f.y / F - C / 2) + "em) " : u ? "translate(calc(-50% + " + f.x / F + "em), calc(-50% + " + f.y / F + "em)) " : "translate(" + f.x / F + "em, " + f.y / F + "em) ", d += "scale(" + f.size / F * (f.flipX ? -1 : 1) + ", " + f.size / F * (f.flipY ? -1 : 1) + ") ", d += "rotate(" + f.rotate + "deg) "), p["-webkit-transform"] = p.transform);
        var b = K(p);
        b.length > 0 && (s.style = b);
        var g = [];
        return g.push({
            tag: "span",
            attributes: s,
            children: [l]
        }), e && g.push({
            tag: "span",
            attributes: {
                class: "sr-only"
            },
            children: [e]
        }), g
    }
    var zc = function () {},
        ec = O.measurePerformance && r && r.mark && r.measure ? r : {
            mark: zc,
            measure: zc
        },
        ac = 'FA "5.0.6"',
        mc = function (c) {
            ec.mark(ac + " " + c + " ends"), ec.measure(ac + " " + c, ac + " " + c + " begins", ac + " " + c + " ends")
        },
        tc = {
            begin: function (c) {
                return ec.mark(ac + " " + c + " begins"),
                    function () {
                        return mc(c)
                    }
            },
            end: mc
        },
        sc = function (c, l, h, v) {
            var z, e, a, m, t, s = Object.keys(c),
                r = s.length,
                f = void 0 !== v ? (m = l, t = v, function (c, l, h, v) {
                    return m.call(t, c, l, h, v)
                }) : l;
            for (void 0 === h ? (z = 1, a = c[s[0]]) : (z = 0, a = h); z < r; z++) a = f(a, c[e = s[z]], e, c);
            return a
        },
        rc = E.styles,
        fc = E.shims,
        Mc = {},
        ic = {},
        nc = {},
        Hc = function () {
            var c = function (c) {
                return sc(rc, function (l, h, v) {
                    return l[v] = sc(h, c, {}), l
                }, {})
            };
            Mc = c(function (c, l, h) {
                return c[l[3]] = h, c
            }), ic = c(function (c, l, h) {
                var v = l[2];
                return c[h] = h, v.forEach(function (l) {
                    c[l] = h
                }), c
            });
            var l = "far" in rc;
            nc = sc(fc, function (c, h) {
                var v = h[0],
                    z = h[1],
                    e = h[2];
                return "far" !== z || l || (z = "fas"), c[v] = {
                    prefix: z,
                    iconName: e
                }, c
            }, {})
        };
    Hc();
    var oc = E.styles,
        Vc = function () {
            return {
                prefix: null,
                iconName: null,
                rest: []
            }
        };

    function Cc(c) {
        return c.reduce(function (c, l) {
            var h = Y(O.familyPrefix, l);
            if (oc[l]) c.prefix = l;
            else if (h) {
                var v = "fa" === c.prefix ? nc[h] || {
                    prefix: null,
                    iconName: null
                } : {};
                c.iconName = v.iconName || h, c.prefix = v.prefix || c.prefix
            } else l !== O.replacementClass && 0 !== l.indexOf("fa-w-") && c.rest.push(l);
            return c
        }, Vc())
    }

    function Lc(c, l, h) {
        if (c && c[l] && c[l][h]) return {
            prefix: l,
            iconName: h,
            icon: c[l][h]
        }
    }

    function uc(c) {
        var l, h = c.tag,
            v = c.attributes,
            z = void 0 === v ? {} : v,
            e = c.children,
            a = void 0 === e ? [] : e;
        return "string" == typeof c ? U(c) : "<" + h + " " + (l = z, Object.keys(l || {}).reduce(function (c, h) {
            return c + (h + '="') + U(l[h]) + '" '
        }, "").trim()) + ">" + a.map(uc).join("") + "</" + h + ">"
    }
    var dc = function () {};

    function pc(c) {
        return "string" == typeof (c.getAttribute ? c.getAttribute(V) : null)
    }
    var bc = {
        replace: function (c) {
            var l = c[0],
                h = c[1].map(function (c) {
                    return uc(c)
                }).join("\n");
            if (l.parentNode && l.outerHTML) l.outerHTML = h + (O.keepOriginalSource && "svg" !== l.tagName.toLowerCase() ? "\x3c!-- " + l.outerHTML + " --\x3e" : "");
            else if (l.parentNode) {
                var v = document.createElement("span");
                l.parentNode.replaceChild(v, l), v.outerHTML = h
            }
        },
        nest: function (c) {
            var l = c[0],
                h = c[1];
            if (~X(l).indexOf(O.replacementClass)) return bc.replace(c);
            var v = new RegExp(O.familyPrefix + "-.*");
            delete h[0].attributes.style;
            var z = h[0].attributes.class.split(" ").reduce(function (c, l) {
                return l === O.replacementClass || l.match(v) ? c.toSvg.push(l) : c.toNode.push(l), c
            }, {
                toNode: [],
                toSvg: []
            });
            h[0].attributes.class = z.toSvg.join(" ");
            var e = h.map(function (c) {
                return uc(c)
            }).join("\n");
            l.setAttribute("class", z.toNode.join(" ")), l.setAttribute(V, ""), l.innerHTML = e
        }
    };

    function gc(c, l) {
        var h = "function" == typeof l ? l : dc;
        0 === c.length ? h() : (m.requestAnimationFrame || function (c) {
            return c()
        })(function () {
            var l = !0 === O.autoReplaceSvg ? bc.replace : bc[O.autoReplaceSvg] || bc.replace,
                v = tc.begin("mutate");
            c.map(l), v(), h()
        })
    }
    var yc = !1;
    var wc = function (c) {
        var l = c.getAttribute("style"),
            h = [];
        return l && (h = l.split(";").reduce(function (c, l) {
            var h = l.split(":"),
                v = h[0],
                z = h.slice(1);
            return v && z.length > 0 && (c[v] = z.join(":").trim()), c
        }, {})), h
    };
    var kc = function (c) {
            var l, h, v, z, e = c.getAttribute("data-prefix"),
                a = c.getAttribute("data-icon"),
                m = void 0 !== c.innerText ? c.innerText.trim() : "",
                t = Cc(X(c));
            return e && a && (t.prefix = e, t.iconName = a), t.prefix && m.length > 1 ? t.iconName = (v = t.prefix, z = c.innerText, ic[v][z]) : t.prefix && 1 === m.length && (t.iconName = (l = t.prefix, h = function (c) {
                for (var l = "", h = 0; h < c.length; h++) l += ("000" + c.charCodeAt(h).toString(16)).slice(-4);
                return l
            }(c.innerText), Mc[l][h])), t
        },
        Sc = function (c) {
            var l = {
                size: 16,
                x: 0,
                y: 0,
                flipX: !1,
                flipY: !1,
                rotate: 0
            };
            return c ? c.toLowerCase().split(" ").reduce(function (c, l) {
                var h = l.toLowerCase().split("-"),
                    v = h[0],
                    z = h.slice(1).join("-");
                if (v && "h" === z) return c.flipX = !0, c;
                if (v && "v" === z) return c.flipY = !0, c;
                if (z = parseFloat(z), isNaN(z)) return c;
                switch (v) {
                    case "grow":
                        c.size = c.size + z;
                        break;
                    case "shrink":
                        c.size = c.size - z;
                        break;
                    case "left":
                        c.x = c.x - z;
                        break;
                    case "right":
                        c.x = c.x + z;
                        break;
                    case "up":
                        c.y = c.y - z;
                        break;
                    case "down":
                        c.y = c.y + z;
                        break;
                    case "rotate":
                        c.rotate = c.rotate + z
                }
                return c
            }, l) : l
        },
        xc = function (c) {
            return Sc(c.getAttribute("data-fa-transform"))
        },
        Ac = function (c) {
            var l = c.getAttribute("data-fa-symbol");
            return null !== l && ("" === l || l)
        },
        qc = function (c) {
            var l = D(c.attributes).reduce(function (c, l) {
                    return "class" !== c.name && "style" !== c.name && (c[l.name] = l.value), c
                }, {}),
                h = c.getAttribute("title");
            return O.autoA11y && (h ? l["aria-labelledby"] = O.replacementClass + "-title-" + B() : l["aria-hidden"] = "true"), l
        },
        Oc = function (c) {
            var l = c.getAttribute("data-fa-mask");
            return l ? Cc(l.split(" ").map(function (c) {
                return c.trim()
            })) : Vc()
        };

    function jc(c) {
        this.name = "MissingIcon", this.message = c || "Icon unavailable", this.stack = (new Error).stack
    }
    jc.prototype = Object.create(Error.prototype), jc.prototype.constructor = jc;
    var Nc = {
            fill: "currentColor"
        },
        Ec = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
        },
        Pc = {
            tag: "path",
            attributes: k({}, Nc, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
        },
        _c = k({}, Ec, {
            attributeName: "opacity"
        }),
        Tc = {
            tag: "g",
            children: [Pc, {
                tag: "circle",
                attributes: k({}, Nc, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: [{
                    tag: "animate",
                    attributes: k({}, Ec, {
                        attributeName: "r",
                        values: "28;14;28;28;14;28;"
                    })
                }, {
                    tag: "animate",
                    attributes: k({}, _c, {
                        values: "1;0;1;1;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: k({}, Nc, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: [{
                    tag: "animate",
                    attributes: k({}, _c, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }, {
                tag: "path",
                attributes: k({}, Nc, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: k({}, _c, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }]
        },
        Fc = E.styles,
        Ic = "fa-layers-text",
        Rc = /Font Awesome 5 (Solid|Regular|Light|Brands)/,
        Wc = {
            Solid: "fas",
            Regular: "far",
            Light: "fal",
            Brands: "fab"
        };

    function Bc(c, l) {
        var h = {
            found: !1,
            width: 512,
            height: 512,
            icon: Tc
        };
        if (c && l && Fc[l] && Fc[l][c]) {
            var v = Fc[l][c];
            h = {
                found: !0,
                width: v[0],
                height: v[1],
                icon: {
                    tag: "path",
                    attributes: {
                        fill: "currentColor",
                        d: v.slice(4)[0]
                    }
                }
            }
        } else if (c && l && !O.showMissingIcons) throw new jc("Icon is missing for prefix " + l + " with icon name " + c);
        return h
    }

    function Dc(c) {
        var l, h, v, z, e, a, m, t, s, r, f, M, n, H, o, V, C, L, u, d = (h = kc(l = c), v = h.iconName, z = h.prefix, e = h.rest, a = wc(l), m = xc(l), t = Ac(l), s = qc(l), r = Oc(l), {
            iconName: v,
            title: l.getAttribute("title"),
            prefix: z,
            transform: m,
            symbol: t,
            mask: r,
            extra: {
                classes: e,
                styles: a,
                attributes: s
            }
        });
        return ~d.extra.classes.indexOf(Ic) ? function (c, l) {
            var h = l.title,
                v = l.transform,
                z = l.extra,
                e = null,
                a = null;
            if (i) {
                var m = parseInt(getComputedStyle(c).fontSize, 10),
                    t = c.getBoundingClientRect();
                e = t.width / m, a = t.height / m
            }
            return O.autoA11y && !h && (z.attributes["aria-hidden"] = "true"), [c, vc({
                content: c.innerHTML,
                width: e,
                height: a,
                transform: v,
                title: h,
                extra: z,
                watchable: !0
            })]
        }(c, d) : (f = c, n = (M = d).iconName, H = M.title, o = M.prefix, V = M.transform, C = M.symbol, L = M.mask, u = M.extra, [f, hc({
            icons: {
                main: Bc(n, o),
                mask: Bc(L.iconName, L.prefix)
            },
            prefix: o,
            iconName: n,
            transform: V,
            symbol: C,
            mask: L,
            title: H,
            extra: u,
            watchable: !0
        })])
    }

    function Xc(c) {
        "function" == typeof c.remove ? c.remove() : c && c.parentNode && c.parentNode.removeChild(c)
    }

    function Yc(c) {
        if (M) {
            var l = tc.begin("searchPseudoElements");
            yc = !0,
                function () {
                    D(c.querySelectorAll("*")).forEach(function (c) {
                        [":before", ":after"].forEach(function (l) {
                            var h = m.getComputedStyle(c, l),
                                v = h.getPropertyValue("font-family").match(Rc),
                                z = D(c.children).filter(function (c) {
                                    return c.getAttribute(C) === l
                                })[0];
                            if (z && (z.nextSibling && z.nextSibling.textContent.indexOf(C) > -1 && Xc(z.nextSibling), Xc(z), z = null), v && !z) {
                                var e = h.getPropertyValue("content"),
                                    a = t.createElement("i");
                                a.setAttribute("class", "" + Wc[v[1]]), a.setAttribute(C, l), a.innerText = 3 === e.length ? e.substr(1, 1) : e, ":before" === l ? c.insertBefore(a, c.firstChild) : c.appendChild(a)
                            }
                        })
                    })
                }(), yc = !1, l()
        }
    }

    function Uc(c) {
        var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (M) {
            var h = t.documentElement.classList,
                v = function (c) {
                    return h.add(L + "-" + c)
                },
                z = function (c) {
                    return h.remove(L + "-" + c)
                },
                e = Object.keys(Fc),
                a = ["." + Ic + ":not([" + V + "])"].concat(e.map(function (c) {
                    return "." + c + ":not([" + V + "])"
                })).join(", ");
            if (0 !== a.length) {
                var m = D(c.querySelectorAll(a));
                if (m.length > 0) {
                    v("pending"), z("complete");
                    var s = tc.begin("onTree"),
                        r = m.reduce(function (c, l) {
                            try {
                                var h = Dc(l);
                                h && c.push(h)
                            } catch (c) {
                                u || c instanceof jc && console.error(c)
                            }
                            return c
                        }, []);
                    s(), gc(r, function () {
                        v("active"), v("complete"), z("pending"), "function" == typeof l && l()
                    })
                }
            }
        }
    }

    function Kc(c) {
        var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            h = Dc(c);
        h && gc([h], l)
    }
    var Gc = function () {
        var c = o,
            l = O.familyPrefix,
            h = O.replacementClass,
            v = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1em}.svg-inline--fa.fa-stack-2x{height:2em;width:2em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}";
        if ("fa" !== l || h !== c) {
            var z = new RegExp("\\.fa\\-", "g"),
                e = new RegExp("\\." + c, "g");
            v = v.replace(z, "." + l + "-").replace(e, "." + h)
        }
        return v
    };

    function Jc(c) {
        return {
            found: !0,
            width: c[0],
            height: c[1],
            icon: {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: c.slice(4)[0]
                }
            }
        }
    }
    var Qc = !1;

    function Zc() {
        O.autoAddCss && (Qc || R(Gc()), Qc = !0)
    }

    function $c(c, l) {
        return Object.defineProperty(c, "abstract", {
            get: l
        }), Object.defineProperty(c, "html", {
            get: function () {
                return c.abstract.map(function (c) {
                    return uc(c)
                })
            }
        }), Object.defineProperty(c, "node", {
            get: function () {
                if (M) {
                    var l = t.createElement("div");
                    return l.innerHTML = c.html, l.children
                }
            }
        }), c
    }

    function cl(c) {
        var l = c.prefix,
            h = void 0 === l ? "fa" : l,
            v = c.iconName;
        if (v) return Lc(hl.definitions, h, v) || Lc(E.styles, h, v)
    }
    var ll, hl = new(function () {
            function c() {
                y(this, c), this.definitions = {}
            }
            return w(c, [{
                key: "add",
                value: function () {
                    for (var c = this, l = arguments.length, h = Array(l), v = 0; v < l; v++) h[v] = arguments[v];
                    var z = h.reduce(this._pullDefinitions, {});
                    Object.keys(z).forEach(function (l) {
                        c.definitions[l] = k({}, c.definitions[l] || {}, z[l]),
                            function c(l, h) {
                                var v = Object.keys(h).reduce(function (c, l) {
                                    var v = h[l];
                                    return v.icon ? c[v.iconName] = v.icon : c[l] = v, c
                                }, {});
                                "function" == typeof E.hooks.addPack ? E.hooks.addPack(l, v) : E.styles[l] = k({}, E.styles[l] || {}, v), "fas" === l && c("fa", h)
                            }(l, z[l])
                    })
                }
            }, {
                key: "reset",
                value: function () {
                    this.definitions = {}
                }
            }, {
                key: "_pullDefinitions",
                value: function (c, l) {
                    var h = l.prefix && l.iconName && l.icon ? {
                        0: l
                    } : l;
                    return Object.keys(h).map(function (l) {
                        var v = h[l],
                            z = v.prefix,
                            e = v.iconName,
                            a = v.icon;
                        c[z] || (c[z] = {}), c[z][e] = a
                    }), c
                }
            }]), c
        }()),
        vl = (ll = function (c) {
            var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                h = l.transform,
                v = void 0 === h ? I : h,
                z = l.symbol,
                e = void 0 !== z && z,
                a = l.mask,
                m = void 0 === a ? null : a,
                t = l.title,
                s = void 0 === t ? null : t,
                r = l.classes,
                f = void 0 === r ? [] : r,
                M = l.attributes,
                i = void 0 === M ? {} : M,
                n = l.styles,
                H = void 0 === n ? {} : n;
            if (c) {
                var o = c.prefix,
                    V = c.iconName,
                    C = c.icon;
                return $c(k({
                    type: "icon"
                }, c), function () {
                    return Zc(), O.autoA11y && (s ? i["aria-labelledby"] = O.replacementClass + "-title-" + B() : i["aria-hidden"] = "true"), hc({
                        icons: {
                            main: Jc(C),
                            mask: m ? Jc(m.icon) : {
                                found: !1,
                                width: null,
                                height: null,
                                icon: {}
                            }
                        },
                        prefix: o,
                        iconName: V,
                        transform: k({}, I, v),
                        symbol: e,
                        title: s,
                        extra: {
                            attributes: i,
                            styles: H,
                            classes: f
                        }
                    })
                })
            }
        }, function (c) {
            var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                h = (c || {}).icon ? c : cl(c || {}),
                v = l.mask;
            return v && (v = (v || {}).icon ? v : cl(v || {})), ll(h, k({}, l, {
                mask: v
            }))
        }),
        zl = {
            noAuto: function () {
                var c;
                j({
                    autoReplaceSvg: c = !1,
                    observeMutations: c
                })
            },
            dom: {
                i2svg: function () {
                    var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (M) {
                        Zc();
                        var l = c.node,
                            h = void 0 === l ? t : l,
                            v = c.callback,
                            z = void 0 === v ? function () {} : v;
                        O.searchPseudoElements && Yc(h), Uc(h, z)
                    }
                },
                css: Gc,
                insertCss: function () {
                    R(Gc())
                }
            },
            library: hl,
            parse: {
                transform: function (c) {
                    return Sc(c)
                }
            },
            findIconDefinition: cl,
            icon: vl,
            text: function (c) {
                var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    h = l.transform,
                    v = void 0 === h ? I : h,
                    z = l.title,
                    e = void 0 === z ? null : z,
                    a = l.classes,
                    m = void 0 === a ? [] : a,
                    t = l.attributes,
                    s = void 0 === t ? {} : t,
                    r = l.styles,
                    f = void 0 === r ? {} : r;
                return $c({
                    type: "text",
                    content: c
                }, function () {
                    return Zc(), vc({
                        content: c,
                        transform: k({}, I, v),
                        title: e,
                        extra: {
                            attributes: s,
                            styles: f,
                            classes: [O.familyPrefix + "-layers-text"].concat(S(m))
                        }
                    })
                })
            },
            layer: function (c) {
                return $c({
                    type: "layer"
                }, function () {
                    Zc();
                    var l = [];
                    return c(function (c) {
                        l = Array.isArray(c) ? c.map(function (c) {
                            l = l.concat(c.abstract)
                        }) : l.concat(c.abstract)
                    }), [{
                        tag: "span",
                        attributes: {
                            class: O.familyPrefix + "-layers"
                        },
                        children: l
                    }]
                })
            }
        },
        el = function () {
            M && O.autoReplaceSvg && zl.dom.i2svg({
                node: t
            })
        };
    Object.defineProperty(zl, "config", {
            get: function () {
                return O
            },
            set: function (c) {
                j(c)
            }
        }),
        function (c) {
            try {
                c()
            } catch (c) {
                if (!u) throw c
            }
        }(function () {
            f && (m.FontAwesome || (m.FontAwesome = zl), T(function () {
                Object.keys(E.styles).length > 0 && el(), O.observeMutations && "function" == typeof MutationObserver && function (c) {
                    if (s) {
                        var l = c.treeCallback,
                            h = c.nodeCallback,
                            v = c.pseudoElementsCallback,
                            z = new s(function (c) {
                                yc || D(c).forEach(function (c) {
                                    if ("childList" === c.type && c.addedNodes.length > 0 && !pc(c.addedNodes[0]) && (O.searchPseudoElements && v(c.target), l(c.target)), "attributes" === c.type && c.target.parentNode && O.searchPseudoElements && v(c.target.parentNode), "attributes" === c.type && pc(c.target) && ~b.indexOf(c.attributeName))
                                        if ("class" === c.attributeName) {
                                            var z = Cc(X(c.target)),
                                                e = z.prefix,
                                                a = z.iconName;
                                            e && c.target.setAttribute("data-prefix", e), a && c.target.setAttribute("data-icon", a)
                                        } else h(c.target)
                                })
                            });
                        M && z.observe(t.getElementsByTagName("body")[0], {
                            childList: !0,
                            attributes: !0,
                            characterData: !0,
                            subtree: !0
                        })
                    }
                }({
                    treeCallback: Uc,
                    nodeCallback: Kc,
                    pseudoElementsCallback: Yc
                })
            })), E.hooks = k({}, E.hooks, {
                addPack: function (c, l) {
                    E.styles[c] = k({}, E.styles[c] || {}, l), Hc(), el()
                },
                addShims: function (c) {
                    var l;
                    (l = E.shims).push.apply(l, S(c)), Hc(), el()
                }
            })
        })
}();