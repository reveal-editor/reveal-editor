!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = e || self).RevealMenu = t())
})(this, function () {
    'use strict'
    var e =
        'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : {}
    function t(e, t, n) {
        return (
            e(
                (n = {
                    path: t,
                    exports: {},
                    require: function (e, t) {
                        return (function () {
                            throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs')
                        })(null == t && n.path)
                    },
                }),
                n.exports
            ),
            n.exports
        )
    }
    var n = function (e) {
            return e && e.Math == Math && e
        },
        r =
            n('object' == typeof globalThis && globalThis) ||
            n('object' == typeof window && window) ||
            n('object' == typeof self && self) ||
            n('object' == typeof e && e) ||
            Function('return this')(),
        i = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        a = !i(function () {
            return (
                7 !=
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7
                    },
                })[1]
            )
        }),
        o = {}.propertyIsEnumerable,
        s = Object.getOwnPropertyDescriptor,
        l = {
            f:
                s && !o.call({ 1: 2 }, 1)
                    ? function (e) {
                          var t = s(this, e)
                          return !!t && t.enumerable
                      }
                    : o,
        },
        c = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
        },
        u = {}.toString,
        f = function (e) {
            return u.call(e).slice(8, -1)
        },
        d = ''.split,
        p = i(function () {
            return !Object('z').propertyIsEnumerable(0)
        })
            ? function (e) {
                  return 'String' == f(e) ? d.call(e, '') : Object(e)
              }
            : Object,
        h = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e)
            return e
        },
        m = function (e) {
            return p(h(e))
        },
        v = function (e) {
            return 'object' == typeof e ? null !== e : 'function' == typeof e
        },
        g = function (e, t) {
            if (!v(e)) return e
            var n, r
            if (t && 'function' == typeof (n = e.toString) && !v((r = n.call(e)))) return r
            if ('function' == typeof (n = e.valueOf) && !v((r = n.call(e)))) return r
            if (!t && 'function' == typeof (n = e.toString) && !v((r = n.call(e)))) return r
            throw TypeError("Can't convert object to primitive value")
        },
        y = {}.hasOwnProperty,
        b = function (e, t) {
            return y.call(e, t)
        },
        S = r.document,
        E = v(S) && v(S.createElement),
        x =
            !a &&
            !i(function () {
                return (
                    7 !=
                    Object.defineProperty(((e = 'div'), E ? S.createElement(e) : {}), 'a', {
                        get: function () {
                            return 7
                        },
                    }).a
                )
                var e
            }),
        w = Object.getOwnPropertyDescriptor,
        L = {
            f: a
                ? w
                : function (e, t) {
                      if (((e = m(e)), (t = g(t, !0)), x))
                          try {
                              return w(e, t)
                          } catch (e) {}
                      if (b(e, t)) return c(!l.f.call(e, t), e[t])
                  },
        },
        T = function (e) {
            if (!v(e)) throw TypeError(String(e) + ' is not an object')
            return e
        },
        C = Object.defineProperty,
        O = {
            f: a
                ? C
                : function (e, t, n) {
                      if ((T(e), (t = g(t, !0)), T(n), x))
                          try {
                              return C(e, t, n)
                          } catch (e) {}
                      if ('get' in n || 'set' in n) throw TypeError('Accessors not supported')
                      return 'value' in n && (e[t] = n.value), e
                  },
        },
        A = a
            ? function (e, t, n) {
                  return O.f(e, t, c(1, n))
              }
            : function (e, t, n) {
                  return (e[t] = n), e
              },
        k = function (e, t) {
            try {
                A(r, e, t)
            } catch (n) {
                r[e] = t
            }
            return t
        },
        I = r['__core-js_shared__'] || k('__core-js_shared__', {}),
        P = Function.toString
    'function' != typeof I.inspectSource &&
        (I.inspectSource = function (e) {
            return P.call(e)
        })
    var M,
        R,
        j,
        N,
        _ = I.inspectSource,
        F = r.WeakMap,
        W = 'function' == typeof F && /native code/.test(_(F)),
        H = t(function (e) {
            ;(e.exports = function (e, t) {
                return I[e] || (I[e] = void 0 !== t ? t : {})
            })('versions', []).push({
                version: '3.6.5',
                mode: 'global',
                copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
            })
        }),
        U = 0,
        $ = Math.random(),
        D = function (e) {
            return 'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++U + $).toString(36)
        },
        q = H('keys'),
        B = {},
        G = r.WeakMap
    if (W) {
        var V = new G(),
            K = V.get,
            z = V.has,
            X = V.set
        ;(M = function (e, t) {
            return X.call(V, e, t), t
        }),
            (R = function (e) {
                return K.call(V, e) || {}
            }),
            (j = function (e) {
                return z.call(V, e)
            })
    } else {
        var Y = q[(N = 'state')] || (q[N] = D(N))
        ;(B[Y] = !0),
            (M = function (e, t) {
                return A(e, Y, t), t
            }),
            (R = function (e) {
                return b(e, Y) ? e[Y] : {}
            }),
            (j = function (e) {
                return b(e, Y)
            })
    }
    var J = {
            set: M,
            get: R,
            has: j,
            enforce: function (e) {
                return j(e) ? R(e) : M(e, {})
            },
            getterFor: function (e) {
                return function (t) {
                    var n
                    if (!v(t) || (n = R(t)).type !== e) throw TypeError('Incompatible receiver, ' + e + ' required')
                    return n
                }
            },
        },
        Z = t(function (e) {
            var t = J.get,
                n = J.enforce,
                i = String(String).split('String')
            ;(e.exports = function (e, t, a, o) {
                var s = !!o && !!o.unsafe,
                    l = !!o && !!o.enumerable,
                    c = !!o && !!o.noTargetGet
                'function' == typeof a &&
                    ('string' != typeof t || b(a, 'name') || A(a, 'name', t),
                    (n(a).source = i.join('string' == typeof t ? t : ''))),
                    e !== r
                        ? (s ? !c && e[t] && (l = !0) : delete e[t], l ? (e[t] = a) : A(e, t, a))
                        : l
                        ? (e[t] = a)
                        : k(t, a)
            })(Function.prototype, 'toString', function () {
                return ('function' == typeof this && t(this).source) || _(this)
            })
        }),
        Q = r,
        ee = function (e) {
            return 'function' == typeof e ? e : void 0
        },
        te = function (e, t) {
            return arguments.length < 2 ? ee(Q[e]) || ee(r[e]) : (Q[e] && Q[e][t]) || (r[e] && r[e][t])
        },
        ne = Math.ceil,
        re = Math.floor,
        ie = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? re : ne)(e)
        },
        ae = Math.min,
        oe = function (e) {
            return e > 0 ? ae(ie(e), 9007199254740991) : 0
        },
        se = Math.max,
        le = Math.min,
        ce = function (e, t) {
            var n = ie(e)
            return n < 0 ? se(n + t, 0) : le(n, t)
        },
        ue = function (e) {
            return function (t, n, r) {
                var i,
                    a = m(t),
                    o = oe(a.length),
                    s = ce(r, o)
                if (e && n != n) {
                    for (; o > s; ) if ((i = a[s++]) != i) return !0
                } else for (; o > s; s++) if ((e || s in a) && a[s] === n) return e || s || 0
                return !e && -1
            }
        },
        fe = { includes: ue(!0), indexOf: ue(!1) },
        de = fe.indexOf,
        pe = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf',
        ].concat('length', 'prototype'),
        he = {
            f:
                Object.getOwnPropertyNames ||
                function (e) {
                    return (function (e, t) {
                        var n,
                            r = m(e),
                            i = 0,
                            a = []
                        for (n in r) !b(B, n) && b(r, n) && a.push(n)
                        for (; t.length > i; ) b(r, (n = t[i++])) && (~de(a, n) || a.push(n))
                        return a
                    })(e, pe)
                },
        },
        me = { f: Object.getOwnPropertySymbols },
        ve =
            te('Reflect', 'ownKeys') ||
            function (e) {
                var t = he.f(T(e)),
                    n = me.f
                return n ? t.concat(n(e)) : t
            },
        ge = function (e, t) {
            for (var n = ve(t), r = O.f, i = L.f, a = 0; a < n.length; a++) {
                var o = n[a]
                b(e, o) || r(e, o, i(t, o))
            }
        },
        ye = /#|\.prototype\./,
        be = function (e, t) {
            var n = Ee[Se(e)]
            return n == we || (n != xe && ('function' == typeof t ? i(t) : !!t))
        },
        Se = (be.normalize = function (e) {
            return String(e).replace(ye, '.').toLowerCase()
        }),
        Ee = (be.data = {}),
        xe = (be.NATIVE = 'N'),
        we = (be.POLYFILL = 'P'),
        Le = be,
        Te = L.f,
        Ce = function (e, t) {
            var n,
                i,
                a,
                o,
                s,
                l = e.target,
                c = e.global,
                u = e.stat
            if ((n = c ? r : u ? r[l] || k(l, {}) : (r[l] || {}).prototype))
                for (i in t) {
                    if (
                        ((o = t[i]),
                        (a = e.noTargetGet ? (s = Te(n, i)) && s.value : n[i]),
                        !Le(c ? i : l + (u ? '.' : '#') + i, e.forced) && void 0 !== a)
                    ) {
                        if (typeof o == typeof a) continue
                        ge(o, a)
                    }
                    ;(e.sham || (a && a.sham)) && A(o, 'sham', !0), Z(n, i, o, e)
                }
        },
        Oe = function (e) {
            if ('function' != typeof e) throw TypeError(String(e) + ' is not a function')
            return e
        },
        Ae = function (e) {
            return Object(h(e))
        },
        ke =
            Array.isArray ||
            function (e) {
                return 'Array' == f(e)
            },
        Ie =
            !!Object.getOwnPropertySymbols &&
            !i(function () {
                return !String(Symbol())
            }),
        Pe = Ie && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
        Me = H('wks'),
        Re = r.Symbol,
        je = Pe ? Re : (Re && Re.withoutSetter) || D,
        Ne = function (e) {
            return b(Me, e) || (Ie && b(Re, e) ? (Me[e] = Re[e]) : (Me[e] = je('Symbol.' + e))), Me[e]
        },
        _e = Ne('species'),
        Fe = function (e, t) {
            var n
            return (
                ke(e) &&
                    ('function' != typeof (n = e.constructor) || (n !== Array && !ke(n.prototype))
                        ? v(n) && null === (n = n[_e]) && (n = void 0)
                        : (n = void 0)),
                new (void 0 === n ? Array : n)(0 === t ? 0 : t)
            )
        },
        We = [].push,
        He = function (e) {
            var t = 1 == e,
                n = 2 == e,
                r = 3 == e,
                i = 4 == e,
                a = 6 == e,
                o = 5 == e || a
            return function (s, l, c, u) {
                for (
                    var f,
                        d,
                        h = Ae(s),
                        m = p(h),
                        v = (function (e, t, n) {
                            if ((Oe(e), void 0 === t)) return e
                            switch (n) {
                                case 0:
                                    return function () {
                                        return e.call(t)
                                    }
                                case 1:
                                    return function (n) {
                                        return e.call(t, n)
                                    }
                                case 2:
                                    return function (n, r) {
                                        return e.call(t, n, r)
                                    }
                                case 3:
                                    return function (n, r, i) {
                                        return e.call(t, n, r, i)
                                    }
                            }
                            return function () {
                                return e.apply(t, arguments)
                            }
                        })(l, c, 3),
                        g = oe(m.length),
                        y = 0,
                        b = u || Fe,
                        S = t ? b(s, g) : n ? b(s, 0) : void 0;
                    g > y;
                    y++
                )
                    if ((o || y in m) && ((d = v((f = m[y]), y, h)), e))
                        if (t) S[y] = d
                        else if (d)
                            switch (e) {
                                case 3:
                                    return !0
                                case 5:
                                    return f
                                case 6:
                                    return y
                                case 2:
                                    We.call(S, f)
                            }
                        else if (i) return !1
                return a ? -1 : r || i ? i : S
            }
        },
        Ue = { forEach: He(0), map: He(1), filter: He(2), some: He(3), every: He(4), find: He(5), findIndex: He(6) },
        $e = function (e, t) {
            var n = [][e]
            return (
                !!n &&
                i(function () {
                    n.call(
                        null,
                        t ||
                            function () {
                                throw 1
                            },
                        1
                    )
                })
            )
        },
        De = Object.defineProperty,
        qe = {},
        Be = function (e) {
            throw e
        },
        Ge = function (e, t) {
            if (b(qe, e)) return qe[e]
            t || (t = {})
            var n = [][e],
                r = !!b(t, 'ACCESSORS') && t.ACCESSORS,
                o = b(t, 0) ? t[0] : Be,
                s = b(t, 1) ? t[1] : void 0
            return (qe[e] =
                !!n &&
                !i(function () {
                    if (r && !a) return !0
                    var e = { length: -1 }
                    r ? De(e, 1, { enumerable: !0, get: Be }) : (e[1] = 1), n.call(e, o, s)
                }))
        },
        Ve = Ue.every,
        Ke = $e('every'),
        ze = Ge('every')
    Ce(
        { target: 'Array', proto: !0, forced: !Ke || !ze },
        {
            every: function (e) {
                return Ve(this, e, arguments.length > 1 ? arguments[1] : void 0)
            },
        }
    )
    var Xe,
        Ye,
        Je = te('navigator', 'userAgent') || '',
        Ze = r.process,
        Qe = Ze && Ze.versions,
        et = Qe && Qe.v8
    et
        ? (Ye = (Xe = et.split('.'))[0] + Xe[1])
        : Je && (!(Xe = Je.match(/Edge\/(\d+)/)) || Xe[1] >= 74) && (Xe = Je.match(/Chrome\/(\d+)/)) && (Ye = Xe[1])
    var tt = Ye && +Ye,
        nt = Ne('species'),
        rt = function (e) {
            return (
                tt >= 51 ||
                !i(function () {
                    var t = []
                    return (
                        ((t.constructor = {})[nt] = function () {
                            return { foo: 1 }
                        }),
                        1 !== t[e](Boolean).foo
                    )
                })
            )
        },
        it = Ue.filter,
        at = rt('filter'),
        ot = Ge('filter')
    Ce(
        { target: 'Array', proto: !0, forced: !at || !ot },
        {
            filter: function (e) {
                return it(this, e, arguments.length > 1 ? arguments[1] : void 0)
            },
        }
    )
    var st = Ue.forEach,
        lt = $e('forEach'),
        ct = Ge('forEach'),
        ut =
            lt && ct
                ? [].forEach
                : function (e) {
                      return st(this, e, arguments.length > 1 ? arguments[1] : void 0)
                  }
    Ce({ target: 'Array', proto: !0, forced: [].forEach != ut }, { forEach: ut })
    var ft = fe.indexOf,
        dt = [].indexOf,
        pt = !!dt && 1 / [1].indexOf(1, -0) < 0,
        ht = $e('indexOf'),
        mt = Ge('indexOf', { ACCESSORS: !0, 1: 0 })
    Ce(
        { target: 'Array', proto: !0, forced: pt || !ht || !mt },
        {
            indexOf: function (e) {
                return pt ? dt.apply(this, arguments) || 0 : ft(this, e, arguments.length > 1 ? arguments[1] : void 0)
            },
        }
    ),
        Ce({ target: 'Array', stat: !0 }, { isArray: ke })
    var vt = [].join,
        gt = p != Object,
        yt = $e('join', ',')
    Ce(
        { target: 'Array', proto: !0, forced: gt || !yt },
        {
            join: function (e) {
                return vt.call(m(this), void 0 === e ? ',' : e)
            },
        }
    )
    var bt = Math.min,
        St = [].lastIndexOf,
        Et = !!St && 1 / [1].lastIndexOf(1, -0) < 0,
        xt = $e('lastIndexOf'),
        wt = Ge('indexOf', { ACCESSORS: !0, 1: 0 }),
        Lt =
            Et || !xt || !wt
                ? function (e) {
                      if (Et) return St.apply(this, arguments) || 0
                      var t = m(this),
                          n = oe(t.length),
                          r = n - 1
                      for (arguments.length > 1 && (r = bt(r, ie(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                          if (r in t && t[r] === e) return r || 0
                      return -1
                  }
                : St
    Ce({ target: 'Array', proto: !0, forced: Lt !== [].lastIndexOf }, { lastIndexOf: Lt })
    var Tt = Ue.map,
        Ct = rt('map'),
        Ot = Ge('map')
    Ce(
        { target: 'Array', proto: !0, forced: !Ct || !Ot },
        {
            map: function (e) {
                return Tt(this, e, arguments.length > 1 ? arguments[1] : void 0)
            },
        }
    )
    var At = function (e, t, n) {
            var r = g(t)
            r in e ? O.f(e, r, c(0, n)) : (e[r] = n)
        },
        kt = rt('slice'),
        It = Ge('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
        Pt = Ne('species'),
        Mt = [].slice,
        Rt = Math.max
    Ce(
        { target: 'Array', proto: !0, forced: !kt || !It },
        {
            slice: function (e, t) {
                var n,
                    r,
                    i,
                    a = m(this),
                    o = oe(a.length),
                    s = ce(e, o),
                    l = ce(void 0 === t ? o : t, o)
                if (
                    ke(a) &&
                    ('function' != typeof (n = a.constructor) || (n !== Array && !ke(n.prototype))
                        ? v(n) && null === (n = n[Pt]) && (n = void 0)
                        : (n = void 0),
                    n === Array || void 0 === n)
                )
                    return Mt.call(a, s, l)
                for (r = new (void 0 === n ? Array : n)(Rt(l - s, 0)), i = 0; s < l; s++, i++) s in a && At(r, i, a[s])
                return (r.length = i), r
            },
        }
    )
    var jt = O.f,
        Nt = Function.prototype,
        _t = Nt.toString,
        Ft = /^\s*function ([^ (]*)/
    a &&
        !('name' in Nt) &&
        jt(Nt, 'name', {
            configurable: !0,
            get: function () {
                try {
                    return _t.call(this).match(Ft)[1]
                } catch (e) {
                    return ''
                }
            },
        })
    var Wt = he.f,
        Ht = {}.toString,
        Ut =
            'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        $t = function (e) {
            return Ut && '[object Window]' == Ht.call(e)
                ? (function (e) {
                      try {
                          return Wt(e)
                      } catch (e) {
                          return Ut.slice()
                      }
                  })(e)
                : Wt(m(e))
        }
    Ce(
        {
            target: 'Object',
            stat: !0,
            forced: i(function () {
                return !Object.getOwnPropertyNames(1)
            }),
        },
        { getOwnPropertyNames: $t }
    )
    var Dt = '\t\n\v\f\r                　\u2028\u2029\ufeff',
        qt = '[' + Dt + ']',
        Bt = RegExp('^' + qt + qt + '*'),
        Gt = RegExp(qt + qt + '*$'),
        Vt = function (e) {
            return function (t) {
                var n = String(h(t))
                return 1 & e && (n = n.replace(Bt, '')), 2 & e && (n = n.replace(Gt, '')), n
            }
        },
        Kt = { start: Vt(1), end: Vt(2), trim: Vt(3) },
        zt = Kt.trim,
        Xt = r.parseFloat,
        Yt =
            1 / Xt(Dt + '-0') != -1 / 0
                ? function (e) {
                      var t = zt(String(e)),
                          n = Xt(t)
                      return 0 === n && '-' == t.charAt(0) ? -0 : n
                  }
                : Xt
    Ce({ global: !0, forced: parseFloat != Yt }, { parseFloat: Yt })
    var Jt = Kt.trim,
        Zt = r.parseInt,
        Qt = /^[+-]?0[Xx]/,
        en =
            8 !== Zt(Dt + '08') || 22 !== Zt(Dt + '0x16')
                ? function (e, t) {
                      var n = Jt(String(e))
                      return Zt(n, t >>> 0 || (Qt.test(n) ? 16 : 10))
                  }
                : Zt
    Ce({ global: !0, forced: parseInt != en }, { parseInt: en })
    var tn = function () {
        var e = T(this),
            t = ''
        return (
            e.global && (t += 'g'),
            e.ignoreCase && (t += 'i'),
            e.multiline && (t += 'm'),
            e.dotAll && (t += 's'),
            e.unicode && (t += 'u'),
            e.sticky && (t += 'y'),
            t
        )
    }
    function nn(e, t) {
        return RegExp(e, t)
    }
    var rn,
        an,
        on = {
            UNSUPPORTED_Y: i(function () {
                var e = nn('a', 'y')
                return (e.lastIndex = 2), null != e.exec('abcd')
            }),
            BROKEN_CARET: i(function () {
                var e = nn('^r', 'gy')
                return (e.lastIndex = 2), null != e.exec('str')
            }),
        },
        sn = RegExp.prototype.exec,
        ln = String.prototype.replace,
        cn = sn,
        un = ((rn = /a/), (an = /b*/g), sn.call(rn, 'a'), sn.call(an, 'a'), 0 !== rn.lastIndex || 0 !== an.lastIndex),
        fn = on.UNSUPPORTED_Y || on.BROKEN_CARET,
        dn = void 0 !== /()??/.exec('')[1]
    ;(un || dn || fn) &&
        (cn = function (e) {
            var t,
                n,
                r,
                i,
                a = this,
                o = fn && a.sticky,
                s = tn.call(a),
                l = a.source,
                c = 0,
                u = e
            return (
                o &&
                    (-1 === (s = s.replace('y', '')).indexOf('g') && (s += 'g'),
                    (u = String(e).slice(a.lastIndex)),
                    a.lastIndex > 0 &&
                        (!a.multiline || (a.multiline && '\n' !== e[a.lastIndex - 1])) &&
                        ((l = '(?: ' + l + ')'), (u = ' ' + u), c++),
                    (n = new RegExp('^(?:' + l + ')', s))),
                dn && (n = new RegExp('^' + l + '$(?!\\s)', s)),
                un && (t = a.lastIndex),
                (r = sn.call(o ? n : a, u)),
                o
                    ? r
                        ? ((r.input = r.input.slice(c)),
                          (r[0] = r[0].slice(c)),
                          (r.index = a.lastIndex),
                          (a.lastIndex += r[0].length))
                        : (a.lastIndex = 0)
                    : un && r && (a.lastIndex = a.global ? r.index + r[0].length : t),
                dn &&
                    r &&
                    r.length > 1 &&
                    ln.call(r[0], n, function () {
                        for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
                    }),
                r
            )
        })
    var pn = cn
    Ce({ target: 'RegExp', proto: !0, forced: /./.exec !== pn }, { exec: pn })
    var hn,
        mn = Ne('match'),
        vn = function (e) {
            var t
            return v(e) && (void 0 !== (t = e[mn]) ? !!t : 'RegExp' == f(e))
        },
        gn = function (e) {
            if (vn(e)) throw TypeError("The method doesn't accept regular expressions")
            return e
        },
        yn = Ne('match'),
        bn = function (e) {
            var t = /./
            try {
                '/./'[e](t)
            } catch (n) {
                try {
                    return (t[yn] = !1), '/./'[e](t)
                } catch (e) {}
            }
            return !1
        },
        Sn = L.f,
        En = ''.endsWith,
        xn = Math.min,
        wn = bn('endsWith')
    Ce(
        {
            target: 'String',
            proto: !0,
            forced: !!(wn || ((hn = Sn(String.prototype, 'endsWith')), !hn || hn.writable)) && !wn,
        },
        {
            endsWith: function (e) {
                var t = String(h(this))
                gn(e)
                var n = arguments.length > 1 ? arguments[1] : void 0,
                    r = oe(t.length),
                    i = void 0 === n ? r : xn(oe(n), r),
                    a = String(e)
                return En ? En.call(t, a, i) : t.slice(i - a.length, i) === a
            },
        }
    )
    var Ln = Ne('species'),
        Tn = !i(function () {
            var e = /./
            return (
                (e.exec = function () {
                    var e = []
                    return (e.groups = { a: '7' }), e
                }),
                '7' !== ''.replace(e, '$<a>')
            )
        }),
        Cn = '$0' === 'a'.replace(/./, '$0'),
        On = Ne('replace'),
        An = !!/./[On] && '' === /./[On]('a', '$0'),
        kn = !i(function () {
            var e = /(?:)/,
                t = e.exec
            e.exec = function () {
                return t.apply(this, arguments)
            }
            var n = 'ab'.split(e)
            return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1]
        }),
        In = function (e, t, n, r) {
            var a = Ne(e),
                o = !i(function () {
                    var t = {}
                    return (
                        (t[a] = function () {
                            return 7
                        }),
                        7 != ''[e](t)
                    )
                }),
                s =
                    o &&
                    !i(function () {
                        var t = !1,
                            n = /a/
                        return (
                            'split' === e &&
                                (((n = {}).constructor = {}),
                                (n.constructor[Ln] = function () {
                                    return n
                                }),
                                (n.flags = ''),
                                (n[a] = /./[a])),
                            (n.exec = function () {
                                return (t = !0), null
                            }),
                            n[a](''),
                            !t
                        )
                    })
            if (!o || !s || ('replace' === e && (!Tn || !Cn || An)) || ('split' === e && !kn)) {
                var l = /./[a],
                    c = n(
                        a,
                        ''[e],
                        function (e, t, n, r, i) {
                            return t.exec === pn
                                ? o && !i
                                    ? { done: !0, value: l.call(t, n, r) }
                                    : { done: !0, value: e.call(n, t, r) }
                                : { done: !1 }
                        },
                        { REPLACE_KEEPS_$0: Cn, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: An }
                    ),
                    u = c[0],
                    f = c[1]
                Z(String.prototype, e, u),
                    Z(
                        RegExp.prototype,
                        a,
                        2 == t
                            ? function (e, t) {
                                  return f.call(e, this, t)
                              }
                            : function (e) {
                                  return f.call(e, this)
                              }
                    )
            }
            r && A(RegExp.prototype[a], 'sham', !0)
        },
        Pn = function (e) {
            return function (t, n) {
                var r,
                    i,
                    a = String(h(t)),
                    o = ie(n),
                    s = a.length
                return o < 0 || o >= s
                    ? e
                        ? ''
                        : void 0
                    : (r = a.charCodeAt(o)) < 55296 ||
                      r > 56319 ||
                      o + 1 === s ||
                      (i = a.charCodeAt(o + 1)) < 56320 ||
                      i > 57343
                    ? e
                        ? a.charAt(o)
                        : r
                    : e
                    ? a.slice(o, o + 2)
                    : i - 56320 + ((r - 55296) << 10) + 65536
            }
        },
        Mn = { codeAt: Pn(!1), charAt: Pn(!0) }.charAt,
        Rn = function (e, t, n) {
            return t + (n ? Mn(e, t).length : 1)
        },
        jn = function (e, t) {
            var n = e.exec
            if ('function' == typeof n) {
                var r = n.call(e, t)
                if ('object' != typeof r)
                    throw TypeError('RegExp exec method returned something other than an Object or null')
                return r
            }
            if ('RegExp' !== f(e)) throw TypeError('RegExp#exec called on incompatible receiver')
            return pn.call(e, t)
        },
        Nn = Math.max,
        _n = Math.min,
        Fn = Math.floor,
        Wn = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Hn = /\$([$&'`]|\d\d?)/g
    In('replace', 2, function (e, t, n, r) {
        var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            a = r.REPLACE_KEEPS_$0,
            o = i ? '$' : '$0'
        return [
            function (n, r) {
                var i = h(this),
                    a = null == n ? void 0 : n[e]
                return void 0 !== a ? a.call(n, i, r) : t.call(String(i), n, r)
            },
            function (e, r) {
                if ((!i && a) || ('string' == typeof r && -1 === r.indexOf(o))) {
                    var l = n(t, e, this, r)
                    if (l.done) return l.value
                }
                var c = T(e),
                    u = String(this),
                    f = 'function' == typeof r
                f || (r = String(r))
                var d = c.global
                if (d) {
                    var p = c.unicode
                    c.lastIndex = 0
                }
                for (var h = []; ; ) {
                    var m = jn(c, u)
                    if (null === m) break
                    if ((h.push(m), !d)) break
                    '' === String(m[0]) && (c.lastIndex = Rn(u, oe(c.lastIndex), p))
                }
                for (var v, g = '', y = 0, b = 0; b < h.length; b++) {
                    m = h[b]
                    for (var S = String(m[0]), E = Nn(_n(ie(m.index), u.length), 0), x = [], w = 1; w < m.length; w++)
                        x.push(void 0 === (v = m[w]) ? v : String(v))
                    var L = m.groups
                    if (f) {
                        var C = [S].concat(x, E, u)
                        void 0 !== L && C.push(L)
                        var O = String(r.apply(void 0, C))
                    } else O = s(S, u, E, x, L, r)
                    E >= y && ((g += u.slice(y, E) + O), (y = E + S.length))
                }
                return g + u.slice(y)
            },
        ]
        function s(e, n, r, i, a, o) {
            var s = r + e.length,
                l = i.length,
                c = Hn
            return (
                void 0 !== a && ((a = Ae(a)), (c = Wn)),
                t.call(o, c, function (t, o) {
                    var c
                    switch (o.charAt(0)) {
                        case '$':
                            return '$'
                        case '&':
                            return e
                        case '`':
                            return n.slice(0, r)
                        case "'":
                            return n.slice(s)
                        case '<':
                            c = a[o.slice(1, -1)]
                            break
                        default:
                            var u = +o
                            if (0 === u) return t
                            if (u > l) {
                                var f = Fn(u / 10)
                                return 0 === f
                                    ? t
                                    : f <= l
                                    ? void 0 === i[f - 1]
                                        ? o.charAt(1)
                                        : i[f - 1] + o.charAt(1)
                                    : t
                            }
                            c = i[u - 1]
                    }
                    return void 0 === c ? '' : c
                })
            )
        }
    })
    var Un =
        Object.is ||
        function (e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }
    In('search', 1, function (e, t, n) {
        return [
            function (t) {
                var n = h(this),
                    r = null == t ? void 0 : t[e]
                return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
            },
            function (e) {
                var r = n(t, e, this)
                if (r.done) return r.value
                var i = T(e),
                    a = String(this),
                    o = i.lastIndex
                Un(o, 0) || (i.lastIndex = 0)
                var s = jn(i, a)
                return Un(i.lastIndex, o) || (i.lastIndex = o), null === s ? -1 : s.index
            },
        ]
    })
    var $n = Ne('species'),
        Dn = [].push,
        qn = Math.min,
        Bn = !i(function () {
            return !RegExp(4294967295, 'y')
        })
    In(
        'split',
        2,
        function (e, t, n) {
            var r
            return (
                (r =
                    'c' == 'abbc'.split(/(b)*/)[1] ||
                    4 != 'test'.split(/(?:)/, -1).length ||
                    2 != 'ab'.split(/(?:ab)*/).length ||
                    4 != '.'.split(/(.?)(.?)/).length ||
                    '.'.split(/()()/).length > 1 ||
                    ''.split(/.?/).length
                        ? function (e, n) {
                              var r = String(h(this)),
                                  i = void 0 === n ? 4294967295 : n >>> 0
                              if (0 === i) return []
                              if (void 0 === e) return [r]
                              if (!vn(e)) return t.call(r, e, i)
                              for (
                                  var a,
                                      o,
                                      s,
                                      l = [],
                                      c =
                                          (e.ignoreCase ? 'i' : '') +
                                          (e.multiline ? 'm' : '') +
                                          (e.unicode ? 'u' : '') +
                                          (e.sticky ? 'y' : ''),
                                      u = 0,
                                      f = new RegExp(e.source, c + 'g');
                                  (a = pn.call(f, r)) &&
                                  !(
                                      (o = f.lastIndex) > u &&
                                      (l.push(r.slice(u, a.index)),
                                      a.length > 1 && a.index < r.length && Dn.apply(l, a.slice(1)),
                                      (s = a[0].length),
                                      (u = o),
                                      l.length >= i)
                                  );

                              )
                                  f.lastIndex === a.index && f.lastIndex++
                              return (
                                  u === r.length ? (!s && f.test('')) || l.push('') : l.push(r.slice(u)),
                                  l.length > i ? l.slice(0, i) : l
                              )
                          }
                        : '0'.split(void 0, 0).length
                        ? function (e, n) {
                              return void 0 === e && 0 === n ? [] : t.call(this, e, n)
                          }
                        : t),
                [
                    function (t, n) {
                        var i = h(this),
                            a = null == t ? void 0 : t[e]
                        return void 0 !== a ? a.call(t, i, n) : r.call(String(i), t, n)
                    },
                    function (e, i) {
                        var a = n(r, e, this, i, r !== t)
                        if (a.done) return a.value
                        var o = T(e),
                            s = String(this),
                            l = (function (e, t) {
                                var n,
                                    r = T(e).constructor
                                return void 0 === r || null == (n = T(r)[$n]) ? t : Oe(n)
                            })(o, RegExp),
                            c = o.unicode,
                            u =
                                (o.ignoreCase ? 'i' : '') +
                                (o.multiline ? 'm' : '') +
                                (o.unicode ? 'u' : '') +
                                (Bn ? 'y' : 'g'),
                            f = new l(Bn ? o : '^(?:' + o.source + ')', u),
                            d = void 0 === i ? 4294967295 : i >>> 0
                        if (0 === d) return []
                        if (0 === s.length) return null === jn(f, s) ? [s] : []
                        for (var p = 0, h = 0, m = []; h < s.length; ) {
                            f.lastIndex = Bn ? h : 0
                            var v,
                                g = jn(f, Bn ? s : s.slice(h))
                            if (null === g || (v = qn(oe(f.lastIndex + (Bn ? 0 : h)), s.length)) === p) h = Rn(s, h, c)
                            else {
                                if ((m.push(s.slice(p, h)), m.length === d)) return m
                                for (var y = 1; y <= g.length - 1; y++) if ((m.push(g[y]), m.length === d)) return m
                                h = p = v
                            }
                        }
                        return m.push(s.slice(p)), m
                    },
                ]
            )
        },
        !Bn
    )
    var Gn = L.f,
        Vn = ''.startsWith,
        Kn = Math.min,
        zn = bn('startsWith')
    Ce(
        {
            target: 'String',
            proto: !0,
            forced:
                !(
                    !zn &&
                    !!(function () {
                        var e = Gn(String.prototype, 'startsWith')
                        return e && !e.writable
                    })()
                ) && !zn,
        },
        {
            startsWith: function (e) {
                var t = String(h(this))
                gn(e)
                var n = oe(Kn(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                    r = String(e)
                return Vn ? Vn.call(t, r, n) : t.slice(n, n + r.length) === r
            },
        }
    )
    var Xn,
        Yn = Kt.trim
    Ce(
        {
            target: 'String',
            proto: !0,
            forced:
                ((Xn = 'trim'),
                i(function () {
                    return !!Dt[Xn]() || '​᠎' != '​᠎'[Xn]() || Dt[Xn].name !== Xn
                })),
        },
        {
            trim: function () {
                return Yn(this)
            },
        }
    )
    for (var Jn in {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
    }) {
        var Zn = r[Jn],
            Qn = Zn && Zn.prototype
        if (Qn && Qn.forEach !== ut)
            try {
                A(Qn, 'forEach', ut)
            } catch (e) {
                Qn.forEach = ut
            }
    }
    var er = [].slice,
        tr = function (e) {
            return function (t, n) {
                var r = arguments.length > 2,
                    i = r ? er.call(arguments, 2) : void 0
                return e(
                    r
                        ? function () {
                              ;('function' == typeof t ? t : Function(t)).apply(this, i)
                          }
                        : t,
                    n
                )
            }
        }
    Ce(
        { global: !0, bind: !0, forced: /MSIE .\./.test(Je) },
        { setTimeout: tr(r.setTimeout), setInterval: tr(r.setInterval) }
    )
    return (
        String.prototype.startsWith ||
            (String.prototype.startsWith = function (e, t) {
                return this.substr(t || 0, e.length) === e
            }),
        String.prototype.endsWith ||
            (String.prototype.endsWith = function (e, t) {
                return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
            }),
        function () {
            var e,
                t,
                n,
                r,
                i =
                    (e = /(msie) ([\w.]+)/.exec(window.navigator.userAgent.toLowerCase())) && 'msie' === e[1]
                        ? parseFloat(e[2])
                        : null,
                a = !1
            function o(e) {
                ;((r = e.menu || {}).path =
                    r.path ||
                    (function () {
                        var e
                        if (document.querySelector('script[src$="menu.js"]')) {
                            var t = document.querySelector('script[src$="menu.js"]')
                            t && (e = t.src.slice(0, -7))
                        } else
                            e = (
                                'undefined' == typeof document
                                    ? new (require('url').URL)('file:' + __filename).href
                                    : (document.currentScript && document.currentScript.src) ||
                                      new URL('menu.js', document.baseURI).href
                            ).slice(
                                0,
                                ('undefined' == typeof document
                                    ? new (require('url').URL)('file:' + __filename).href
                                    : (document.currentScript && document.currentScript.src) ||
                                      new URL('menu.js', document.baseURI).href
                                ).lastIndexOf('/') + 1
                            )
                        return e
                    })() ||
                    'plugin/menu/'),
                    r.path.endsWith('/') || (r.path += '/'),
                    void 0 === r.side && (r.side = 'left'),
                    void 0 === r.numbers && (r.numbers = !1),
                    'string' != typeof r.titleSelector && (r.titleSelector = 'h1, h2, h3, h4, h5'),
                    void 0 === r.hideMissingTitles && (r.hideMissingTitles = !1),
                    void 0 === r.useTextContentForMissingTitles && (r.useTextContentForMissingTitles = !1),
                    void 0 === r.markers && (r.markers = !0),
                    'string' != typeof r.themesPath && (r.themesPath = 'dist/theme/'),
                    r.themesPath.endsWith('/') || (r.themesPath += '/'),
                    O('link#theme') || (r.themes = !1),
                    !0 === r.themes
                        ? (r.themes = [
                              { name: 'Black', theme: r.themesPath + 'black.css' },
                              { name: 'White', theme: r.themesPath + 'white.css' },
                              { name: 'League', theme: r.themesPath + 'league.css' },
                              { name: 'Sky', theme: r.themesPath + 'sky.css' },
                              { name: 'Beige', theme: r.themesPath + 'beige.css' },
                              { name: 'Simple', theme: r.themesPath + 'simple.css' },
                              { name: 'Serif', theme: r.themesPath + 'serif.css' },
                              { name: 'Blood', theme: r.themesPath + 'blood.css' },
                              { name: 'Night', theme: r.themesPath + 'night.css' },
                              { name: 'Moon', theme: r.themesPath + 'moon.css' },
                              { name: 'Solarized', theme: r.themesPath + 'solarized.css' },
                          ])
                        : Array.isArray(r.themes) || (r.themes = !1),
                    void 0 === r.transitions && (r.transitions = !1),
                    !0 === r.transitions
                        ? (r.transitions = ['None', 'Fade', 'Slide', 'Convex', 'Concave', 'Zoom'])
                        : !1 === r.transitions ||
                          (Array.isArray(r.transitions) &&
                              r.transitions.every(function (e) {
                                  return 'string' == typeof e
                              })) ||
                          (console.error(
                              "reveal.js-menu error: transitions config value must be 'true' or an array of strings, eg ['None', 'Fade', 'Slide')"
                          ),
                          (r.transitions = !1)),
                    i && i <= 9 && (r.transitions = !1),
                    void 0 === r.openButton && (r.openButton = !0),
                    void 0 === r.openSlideNumber && (r.openSlideNumber = !1),
                    void 0 === r.keyboard && (r.keyboard = !0),
                    void 0 === r.sticky && (r.sticky = !1),
                    void 0 === r.autoOpen && (r.autoOpen = !0),
                    void 0 === r.delayInit && (r.delayInit = !1),
                    void 0 === r.openOnInit && (r.openOnInit = !1)
            }
            var s = !0
            function l() {
                s = !1
            }
            function c() {
                O('nav.slide-menu').addEventListener('mousemove', function e(t) {
                    O('nav.slide-menu').removeEventListener('mousemove', e), (s = !0)
                })
            }
            function u(e) {
                var t =
                    (function (e) {
                        for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                            (t += e.offsetLeft - e.scrollLeft), (n += e.offsetTop - e.scrollTop), (e = e.offsetParent)
                        return { top: n, left: t }
                    })(e).top - e.offsetParent.offsetTop
                if (t < 0) return -t
                var n = e.offsetParent.offsetHeight - (e.offsetTop - e.offsetParent.scrollTop + e.offsetHeight)
                return n < 0 ? n : 0
            }
            function f(e) {
                var t = u(e)
                t && (l(), e.scrollIntoView(t > 0), c())
            }
            function d(e) {
                l(), (e.offsetParent.scrollTop = e.offsetTop), c()
            }
            function p(e) {
                l(), (e.offsetParent.scrollTop = e.offsetTop - e.offsetParent.offsetHeight + e.offsetHeight), c()
            }
            function h(e) {
                e.classList.add('selected'), f(e), r.sticky && r.autoOpen && E(e)
            }
            function m(e) {
                if (b())
                    switch ((e.stopImmediatePropagation(), e.keyCode)) {
                        case 72:
                        case 37:
                            !(function () {
                                var e = parseInt(O('.active-toolbar-button').getAttribute('data-button')) - 1
                                e < 0 && (e = T - 1)
                                S(null, O('.toolbar-panel-button[data-button="' + e + '"]').getAttribute('data-panel'))
                            })()
                            break
                        case 76:
                        case 39:
                            ;(l = (parseInt(O('.active-toolbar-button').getAttribute('data-button')) + 1) % T),
                                S(null, O('.toolbar-panel-button[data-button="' + l + '"]').getAttribute('data-panel'))
                            break
                        case 75:
                        case 38:
                            if (
                                (s =
                                    O('.active-menu-panel .slide-menu-items li.selected') ||
                                    O('.active-menu-panel .slide-menu-items li.active'))
                            )
                                A('.active-menu-panel .slide-menu-items li').forEach(function (e) {
                                    e.classList.remove('selected')
                                }),
                                    h(
                                        O(
                                            '.active-menu-panel .slide-menu-items li[data-item="' +
                                                (parseInt(s.getAttribute('data-item')) - 1) +
                                                '"]'
                                        ) || s
                                    )
                            else (o = O('.active-menu-panel .slide-menu-items li.slide-menu-item')) && h(o)
                            break
                        case 74:
                        case 40:
                            if (
                                (s =
                                    O('.active-menu-panel .slide-menu-items li.selected') ||
                                    O('.active-menu-panel .slide-menu-items li.active'))
                            )
                                A('.active-menu-panel .slide-menu-items li').forEach(function (e) {
                                    e.classList.remove('selected')
                                }),
                                    h(
                                        O(
                                            '.active-menu-panel .slide-menu-items li[data-item="' +
                                                (parseInt(s.getAttribute('data-item')) + 1) +
                                                '"]'
                                        ) || s
                                    )
                            else (o = O('.active-menu-panel .slide-menu-items li.slide-menu-item')) && h(o)
                            break
                        case 33:
                        case 85:
                            var t = A('.active-menu-panel .slide-menu-items li').filter(function (e) {
                                    return u(e) > 0
                                }),
                                n = A('.active-menu-panel .slide-menu-items li').filter(function (e) {
                                    return 0 == u(e)
                                }),
                                r =
                                    t.length > 0 && Math.abs(u(t[t.length - 1])) < t[t.length - 1].clientHeight
                                        ? t[t.length - 1]
                                        : n[0]
                            r &&
                                (r.classList.contains('selected') &&
                                    t.length > 0 &&
                                    (p(r),
                                    (r =
                                        (n = A('.active-menu-panel .slide-menu-items li').filter(function (e) {
                                            return 0 == u(e)
                                        }))[0] == r
                                            ? t[t.length - 1]
                                            : n[0])),
                                A('.active-menu-panel .slide-menu-items li').forEach(function (e) {
                                    e.classList.remove('selected')
                                }),
                                h(r),
                                d(r))
                            break
                        case 34:
                        case 68:
                            n = A('.active-menu-panel .slide-menu-items li').filter(function (e) {
                                return 0 == u(e)
                            })
                            var i = A('.active-menu-panel .slide-menu-items li').filter(function (e) {
                                    return u(e) < 0
                                }),
                                a = i.length > 0 && Math.abs(u(i[0])) < i[0].clientHeight ? i[0] : n[n.length - 1]
                            a &&
                                (a.classList.contains('selected') &&
                                    i.length > 0 &&
                                    (d(a),
                                    (a =
                                        (n = A('.active-menu-panel .slide-menu-items li').filter(function (e) {
                                            return 0 == u(e)
                                        }))[n.length - 1] == a
                                            ? i[0]
                                            : n[n.length - 1])),
                                A('.active-menu-panel .slide-menu-items li').forEach(function (e) {
                                    e.classList.remove('selected')
                                }),
                                h(a),
                                p(a))
                            break
                        case 36:
                            A('.active-menu-panel .slide-menu-items li').forEach(function (e) {
                                e.classList.remove('selected')
                            }),
                                (o = O('.active-menu-panel .slide-menu-items li:first-of-type')) &&
                                    (o.classList.add('selected'), f(o))
                            break
                        case 35:
                            var o
                            A('.active-menu-panel .slide-menu-items li').forEach(function (e) {
                                e.classList.remove('selected')
                            }),
                                (o = O('.active-menu-panel .slide-menu-items:last-of-type li:last-of-type')) &&
                                    (o.classList.add('selected'), f(o))
                            break
                        case 32:
                        case 13:
                            var s
                            ;(s = O('.active-menu-panel .slide-menu-items li.selected')) && E(s, !0)
                            break
                        case 27:
                            g(null, !0)
                    }
                var l
            }
            function v(e) {
                ;(e && e.preventDefault(), b()) ||
                    (O('body').classList.add('slide-menu-active'),
                    O('.reveal').classList.add('has-' + r.effect + '-' + r.side),
                    O('.slide-menu').classList.add('active'),
                    O('.slide-menu-overlay').classList.add('active'),
                    r.themes &&
                        (A('div[data-panel="Themes"] li').forEach(function (e) {
                            e.classList.remove('active')
                        }),
                        A('li[data-theme="' + O('link#theme').getAttribute('href') + '"]').forEach(function (e) {
                            e.classList.add('active')
                        })),
                    r.transitions &&
                        (A('div[data-panel="Transitions"] li').forEach(function (e) {
                            e.classList.remove('active')
                        }),
                        A('li[data-transition="' + n.transition + '"]').forEach(function (e) {
                            e.classList.add('active')
                        })),
                    A('.slide-menu-panel li.active').forEach(function (e) {
                        e.classList.add('selected'), f(e)
                    }))
            }
            function g(e, t) {
                e && e.preventDefault(),
                    (r.sticky && !t) ||
                        (O('body').classList.remove('slide-menu-active'),
                        O('.reveal').classList.remove('has-' + r.effect + '-' + r.side),
                        O('.slide-menu').classList.remove('active'),
                        O('.slide-menu-overlay').classList.remove('active'),
                        A('.slide-menu-panel li.selected').forEach(function (e) {
                            e.classList.remove('selected')
                        }))
            }
            function y(e) {
                b() ? g(e, !0) : v(e)
            }
            function b() {
                return O('body').classList.contains('slide-menu-active')
            }
            function S(e, t) {
                v(e)
                var n = t
                'string' != typeof t && (n = e.currentTarget.getAttribute('data-panel')),
                    O('.slide-menu-toolbar > li.active-toolbar-button').classList.remove('active-toolbar-button'),
                    O('li[data-panel="' + n + '"]').classList.add('active-toolbar-button'),
                    O('.slide-menu-panel.active-menu-panel').classList.remove('active-menu-panel'),
                    O('div[data-panel="' + n + '"]').classList.add('active-menu-panel')
            }
            function E(e, n) {
                var i = parseInt(e.getAttribute('data-slide-h')),
                    a = parseInt(e.getAttribute('data-slide-v')),
                    o = e.getAttribute('data-theme'),
                    s = e.getAttribute('data-highlight-theme'),
                    l = e.getAttribute('data-transition')
                isNaN(i) || isNaN(a) || t.slide(i, a),
                    o && I('theme', o),
                    s && I('highlight-theme', s),
                    l && t.configure({ transition: l })
                var c = O('a', e)
                c &&
                    (n ||
                        !r.sticky ||
                        (r.autoOpen && c.href.startsWith('#')) ||
                        c.href.startsWith(window.location.origin + window.location.pathname + '#')) &&
                    c.click(),
                    g()
            }
            function x(e) {
                'A' !== e.target.nodeName && e.preventDefault(), E(e.currentTarget)
            }
            function w() {
                var e = t.getState()
                A('li.slide-menu-item, li.slide-menu-item-vertical').forEach(function (t) {
                    t.classList.remove('past'), t.classList.remove('active'), t.classList.remove('future')
                    var n = parseInt(t.getAttribute('data-slide-h')),
                        r = parseInt(t.getAttribute('data-slide-v'))
                    n < e.indexh || (n === e.indexh && r < e.indexv)
                        ? t.classList.add('past')
                        : n === e.indexh && r === e.indexv
                        ? t.classList.add('active')
                        : t.classList.add('future')
                })
            }
            function L() {
                var e = window.getComputedStyle(O('.reveal'))
                O('.slide-menu').style.fontFamily = e.fontFamily
            }
            var T = 0
            function C() {
                if (!a) {
                    var e = function (e, t, n, r, i, a) {
                            var o = {
                                'data-button': '' + T++,
                                class: 'toolbar-panel-button' + (a ? ' active-toolbar-button' : ''),
                            }
                            t && (o['data-panel'] = t)
                            var s = k('li', o)
                            return (
                                n.startsWith('fa-')
                                    ? s.appendChild(k('i', { class: r + ' ' + n }))
                                    : (s.innerHTML = n + '</i>'),
                                s.appendChild(k('br'), O('i', s)),
                                s.appendChild(k('span', { class: 'slide-menu-toolbar-label' }, e), O('i', s)),
                                (s.onclick = i),
                                d.appendChild(s),
                                s
                            )
                        },
                        i = function (e, i, a, o, s) {
                            function l(e, t) {
                                if ('' === e) return null
                                var n = t ? O(e, i) : O(e)
                                return n ? n.textContent : null
                            }
                            var c = i.getAttribute('data-menu-title') || l('.menu-title', i) || l(r.titleSelector, i)
                            if (
                                (!c &&
                                    r.useTextContentForMissingTitles &&
                                    (c = i.textContent.trim()) &&
                                    (c =
                                        c
                                            .split('\n')
                                            .map(function (e) {
                                                return e.trim()
                                            })
                                            .join(' ')
                                            .trim()
                                            .replace(/^(.{16}[^\s]*).*/, '$1')
                                            .replace(/&/g, '&amp;')
                                            .replace(/</g, '&lt;')
                                            .replace(/>/g, '&gt;')
                                            .replace(/"/g, '&quot;')
                                            .replace(/'/g, '&#039;') + '...'),
                                !c)
                            ) {
                                if (r.hideMissingTitles) return ''
                                ;(e += ' no-title'), (c = 'Slide ' + (a + 1))
                            }
                            var u = k('li', {
                                class: e,
                                'data-item': a,
                                'data-slide-h': o,
                                'data-slide-v': void 0 === s ? 0 : s,
                            })
                            if (
                                (r.markers &&
                                    (u.appendChild(k('i', { class: 'fas fa-check-circle fa-fw past' })),
                                    u.appendChild(k('i', { class: 'fas fa-arrow-alt-circle-right fa-fw active' })),
                                    u.appendChild(k('i', { class: 'far fa-circle fa-fw future' }))),
                                r.numbers)
                            ) {
                                var f = [],
                                    d = 'h.v'
                                switch (
                                    ('string' == typeof r.numbers
                                        ? (d = r.numbers)
                                        : 'string' == typeof n.slideNumber && (d = n.slideNumber),
                                    d)
                                ) {
                                    case 'c':
                                        f.push(a + 1)
                                        break
                                    case 'c/t':
                                        f.push(a + 1, '/', t.getTotalSlides())
                                        break
                                    case 'h/v':
                                        f.push(o + 1), 'number' != typeof s || isNaN(s) || f.push('/', s + 1)
                                        break
                                    default:
                                        f.push(o + 1), 'number' != typeof s || isNaN(s) || f.push('.', s + 1)
                                }
                                u.appendChild(k('span', { class: 'slide-menu-item-number' }, f.join('') + '. '))
                            }
                            return u.appendChild(k('span', { class: 'slide-menu-item-title' }, c)), u
                        },
                        o = function (e) {
                            s &&
                                (A('.active-menu-panel .slide-menu-items li.selected').forEach(function (e) {
                                    e.classList.remove('selected')
                                }),
                                e.currentTarget.classList.add('selected'))
                        },
                        l = O('.reveal').parentElement,
                        c = k('div', { class: 'slide-menu-wrapper' })
                    l.appendChild(c)
                    var u = k('nav', { class: 'slide-menu slide-menu--' + r.side })
                    'string' == typeof r.width &&
                        (-1 != ['normal', 'wide', 'third', 'half', 'full'].indexOf(r.width)
                            ? u.classList.add('slide-menu--' + r.width)
                            : (u.classList.add('slide-menu--custom'), (u.style.width = r.width))),
                        c.appendChild(u),
                        L()
                    var f = k('div', { class: 'slide-menu-overlay' })
                    c.appendChild(f),
                        (f.onclick = function () {
                            g(null, !0)
                        })
                    var d = k('ol', { class: 'slide-menu-toolbar' })
                    O('.slide-menu').appendChild(d),
                        e('Slides', 'Slides', 'fa-images', 'fas', S, !0),
                        r.custom &&
                            r.custom.forEach(function (t, n, r) {
                                e(t.title, 'Custom' + n, t.icon, null, S)
                            }),
                        r.themes && e('Themes', 'Themes', 'fa-adjust', 'fas', S),
                        r.transitions && e('Transitions', 'Transitions', 'fa-sticky-note', 'fas', S)
                    var p = k('li', { id: 'close', class: 'toolbar-panel-button' })
                    if (
                        (p.appendChild(k('i', { class: 'fas fa-times' })),
                        p.appendChild(k('br')),
                        p.appendChild(k('span', { class: 'slide-menu-toolbar-label' }, 'Close')),
                        (p.onclick = function () {
                            g(null, !0)
                        }),
                        d.appendChild(p),
                        (function e() {
                            if (document.querySelector('section[data-markdown]:not([data-markdown-parsed])'))
                                setTimeout(e, 100)
                            else {
                                var t = k('div', {
                                    'data-panel': 'Slides',
                                    class: 'slide-menu-panel active-menu-panel',
                                })
                                t.appendChild(k('ul', { class: 'slide-menu-items' })), u.appendChild(t)
                                var n = O('.slide-menu-panel[data-panel="Slides"] > .slide-menu-items'),
                                    r = 0
                                A('.slides > section').forEach(function (e, t) {
                                    var a = A('section', e)
                                    if (a.length > 0)
                                        a.forEach(function (e, a) {
                                            var o = i(
                                                0 === a ? 'slide-menu-item' : 'slide-menu-item-vertical',
                                                e,
                                                r,
                                                t,
                                                a
                                            )
                                            o && n.appendChild(o), r++
                                        })
                                    else {
                                        var o = i('slide-menu-item', e, r, t)
                                        o && n.appendChild(o), r++
                                    }
                                }),
                                    A('.slide-menu-item, .slide-menu-item-vertical').forEach(function (e) {
                                        e.onclick = x
                                    }),
                                    w()
                            }
                        })(),
                        t.addEventListener('slidechanged', w),
                        r.custom)
                    ) {
                        var h = function () {
                                this.status >= 200 && this.status < 300
                                    ? ((this.panel.innerHTML = this.responseText), C(this.panel))
                                    : I(this)
                            },
                            E = function () {
                                I(this)
                            },
                            C = function (e) {
                                A('ul.slide-menu-items li.slide-menu-item', e).forEach(function (e, t) {
                                    e.setAttribute('data-item', t + 1),
                                        (e.onclick = x),
                                        e.addEventListener('mouseenter', o)
                                })
                            },
                            I = function (e) {
                                var t =
                                    '<p>ERROR: The attempt to fetch ' +
                                    e.responseURL +
                                    ' failed with HTTP status ' +
                                    e.status +
                                    ' (' +
                                    e.statusText +
                                    ').</p><p>Remember that you need to serve the presentation HTML from a HTTP server.</p>'
                                e.panel.innerHTML = t
                            }
                        r.custom.forEach(function (e, t, n) {
                            var r = k('div', {
                                'data-panel': 'Custom' + t,
                                class: 'slide-menu-panel slide-menu-custom-panel',
                            })
                            e.content
                                ? ((r.innerHTML = e.content), C(r))
                                : e.src &&
                                  (function (e, t) {
                                      var n = new XMLHttpRequest()
                                      ;(n.panel = e),
                                          (n.arguments = Array.prototype.slice.call(arguments, 2)),
                                          (n.onload = h),
                                          (n.onerror = E),
                                          n.open('get', t, !0),
                                          n.send(null)
                                  })(r, e.src),
                                u.appendChild(r)
                        })
                    }
                    if (r.themes) {
                        var P = k('div', { class: 'slide-menu-panel', 'data-panel': 'Themes' })
                        u.appendChild(P)
                        var M = k('ul', { class: 'slide-menu-items' })
                        P.appendChild(M),
                            r.themes.forEach(function (e, t) {
                                var n = { class: 'slide-menu-item', 'data-item': '' + (t + 1) }
                                e.theme && (n['data-theme'] = e.theme),
                                    e.highlightTheme && (n['data-highlight-theme'] = e.highlightTheme)
                                var r = k('li', n, e.name)
                                M.appendChild(r), (r.onclick = x)
                            })
                    }
                    if (r.transitions) {
                        P = k('div', { class: 'slide-menu-panel', 'data-panel': 'Transitions' })
                        u.appendChild(P)
                        M = k('ul', { class: 'slide-menu-items' })
                        P.appendChild(M),
                            r.transitions.forEach(function (e, t) {
                                var n = k(
                                    'li',
                                    {
                                        class: 'slide-menu-item',
                                        'data-transition': e.toLowerCase(),
                                        'data-item': '' + (t + 1),
                                    },
                                    e
                                )
                                M.appendChild(n), (n.onclick = x)
                            })
                    }
                    if (r.openButton) {
                        var R = k('div', { class: 'slide-menu-button' }),
                            j = k('a', { href: '#' })
                        j.appendChild(k('i', { class: 'fas fa-bars' })),
                            R.appendChild(j),
                            O('.reveal').appendChild(R),
                            (R.onclick = v)
                    }
                    if (r.openSlideNumber) O('div.slide-number').onclick = v
                    A('.slide-menu-panel .slide-menu-items li').forEach(function (e) {
                        e.addEventListener('mouseenter', o)
                    })
                }
                if (r.keyboard) {
                    if (
                        (document.addEventListener('keydown', m, !1),
                        window.addEventListener('message', function (e) {
                            var t
                            try {
                                t = JSON.parse(e.data)
                            } catch (e) {}
                            t &&
                                'triggerKey' === t.method &&
                                m({ keyCode: t.args[0], stopImmediatePropagation: function () {} })
                        }),
                        n.keyboardCondition && 'function' == typeof n.keyboardCondition)
                    ) {
                        var N = n.keyboardCondition
                        n.keyboardCondition = function (e) {
                            return N(e) && (!b() || 77 == e.keyCode)
                        }
                    } else
                        n.keyboardCondition = function (e) {
                            return !b() || 77 == e.keyCode
                        }
                    t.addKeyBinding({ keyCode: 77, key: 'M', description: 'Toggle menu' }, y)
                }
                r.openOnInit && v(), (a = !0)
            }
            function O(e, t) {
                return t || (t = document), t.querySelector(e)
            }
            function A(e, t) {
                return t || (t = document), Array.prototype.slice.call(t.querySelectorAll(e))
            }
            function k(e, t, n) {
                var r = document.createElement(e)
                return (
                    t &&
                        Object.getOwnPropertyNames(t).forEach(function (e) {
                            r.setAttribute(e, t[e])
                        }),
                    n && (r.innerHTML = n),
                    r
                )
            }
            function I(e, t) {
                var n = O('link#' + e),
                    r = n.parentElement,
                    i = n.nextElementSibling
                n.remove()
                var a = n.cloneNode()
                a.setAttribute('href', t),
                    (a.onload = function () {
                        L()
                    }),
                    r.insertBefore(a, i)
            }
            function P(e, t, n) {
                var r,
                    i = document.querySelector('head')
                'script' === t
                    ? (((r = document.createElement('script')).type = 'text/javascript'), (r.src = e))
                    : 'stylesheet' === t && (((r = document.createElement('link')).rel = 'stylesheet'), (r.href = e))
                var a = function () {
                    'function' == typeof n && (n.call(), (n = null))
                }
                ;(r.onload = a),
                    (r.onreadystatechange = function () {
                        'loaded' === this.readyState && a()
                    }),
                    i.appendChild(r)
            }
            function M() {
                var e,
                    a,
                    o,
                    s = !i || i >= 9
                t.isSpeakerNotes() && window.location.search.endsWith('controls=false') && (s = !1),
                    s &&
                        (r.delayInit || C(),
                        (e = 'menu-ready'),
                        (o = document.createEvent('HTMLEvents', 1, 2)).initEvent(e, !0, !0),
                        (function (e, t) {
                            for (var n in t) e[n] = t[n]
                        })(o, a),
                        document.querySelector('.reveal').dispatchEvent(o),
                        n.postMessageEvents &&
                            window.parent !== window.self &&
                            window.parent.postMessage(
                                JSON.stringify({ namespace: 'reveal', eventName: e, state: t.getState() }),
                                '*'
                            ))
            }
            return {
                id: 'menu',
                init: function (e) {
                    o((n = (t = e).getConfig())),
                        P(r.path + 'menu.css', 'stylesheet', function () {
                            void 0 === r.loadIcons || r.loadIcons
                                ? P(r.path + 'font-awesome/css/all.css', 'stylesheet', M)
                                : M()
                        })
                },
                toggle: y,
                openMenu: v,
                closeMenu: g,
                openPanel: S,
                isOpen: b,
                initialiseMenu: C,
                isMenuInitialised: function () {
                    return a
                },
            }
        }
    )
})
