!(function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
        ? define(e)
        : ((t = 'undefined' != typeof globalThis ? globalThis : t || self).RevealMath = e())
})(this, function () {
    'use strict'
    var t =
            'undefined' != typeof globalThis
                ? globalThis
                : 'undefined' != typeof window
                ? window
                : 'undefined' != typeof global
                ? global
                : 'undefined' != typeof self
                ? self
                : {},
        e = function (t) {
            return t && t.Math == Math && t
        },
        n =
            e('object' == typeof globalThis && globalThis) ||
            e('object' == typeof window && window) ||
            e('object' == typeof self && self) ||
            e('object' == typeof t && t) ||
            (function () {
                return this
            })() ||
            Function('return this')(),
        r = {},
        o = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        i = !o(function () {
            return (
                7 !=
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7
                    },
                })[1]
            )
        }),
        a = {},
        c = {}.propertyIsEnumerable,
        u = Object.getOwnPropertyDescriptor,
        f = u && !c.call({ 1: 2 }, 1)
    a.f = f
        ? function (t) {
              var e = u(this, t)
              return !!e && e.enumerable
          }
        : c
    var s = function (t, e) {
            return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e }
        },
        l = {}.toString,
        p = function (t) {
            return l.call(t).slice(8, -1)
        },
        h = p,
        d = ''.split,
        v = o(function () {
            return !Object('z').propertyIsEnumerable(0)
        })
            ? function (t) {
                  return 'String' == h(t) ? d.call(t, '') : Object(t)
              }
            : Object,
        y = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t)
            return t
        },
        g = v,
        m = y,
        b = function (t) {
            return g(m(t))
        },
        w = function (t) {
            return 'object' == typeof t ? null !== t : 'function' == typeof t
        },
        j = w,
        x = function (t, e) {
            if (!j(t)) return t
            var n, r
            if (e && 'function' == typeof (n = t.toString) && !j((r = n.call(t)))) return r
            if ('function' == typeof (n = t.valueOf) && !j((r = n.call(t)))) return r
            if (!e && 'function' == typeof (n = t.toString) && !j((r = n.call(t)))) return r
            throw TypeError("Can't convert object to primitive value")
        },
        O = y,
        E = function (t) {
            return Object(O(t))
        },
        S = E,
        T = {}.hasOwnProperty,
        P = function (t, e) {
            return T.call(S(t), e)
        },
        M = w,
        k = n.document,
        L = M(k) && M(k.createElement),
        _ = function (t) {
            return L ? k.createElement(t) : {}
        },
        A = _,
        I =
            !i &&
            !o(function () {
                return (
                    7 !=
                    Object.defineProperty(A('div'), 'a', {
                        get: function () {
                            return 7
                        },
                    }).a
                )
            }),
        R = i,
        C = a,
        N = s,
        F = b,
        J = x,
        D = P,
        $ = I,
        G = Object.getOwnPropertyDescriptor
    r.f = R
        ? G
        : function (t, e) {
              if (((t = F(t)), (e = J(e, !0)), $))
                  try {
                      return G(t, e)
                  } catch (t) {}
              if (D(t, e)) return N(!C.f.call(t, e), t[e])
          }
    var H = {},
        z = w,
        W = function (t) {
            if (!z(t)) throw TypeError(String(t) + ' is not an object')
            return t
        },
        q = i,
        U = I,
        K = W,
        Q = x,
        X = Object.defineProperty
    H.f = q
        ? X
        : function (t, e, n) {
              if ((K(t), (e = Q(e, !0)), K(n), U))
                  try {
                      return X(t, e, n)
                  } catch (t) {}
              if ('get' in n || 'set' in n) throw TypeError('Accessors not supported')
              return 'value' in n && (t[e] = n.value), t
          }
    var Y = H,
        B = s,
        V = i
            ? function (t, e, n) {
                  return Y.f(t, e, B(1, n))
              }
            : function (t, e, n) {
                  return (t[e] = n), t
              },
        Z = { exports: {} },
        tt = n,
        et = V,
        nt = function (t, e) {
            try {
                et(tt, t, e)
            } catch (n) {
                tt[t] = e
            }
            return e
        },
        rt = nt,
        ot = '__core-js_shared__',
        it = n[ot] || rt(ot, {}),
        at = it,
        ct = Function.toString
    'function' != typeof at.inspectSource &&
        (at.inspectSource = function (t) {
            return ct.call(t)
        })
    var ut = at.inspectSource,
        ft = ut,
        st = n.WeakMap,
        lt = 'function' == typeof st && /native code/.test(ft(st)),
        pt = { exports: {} },
        ht = it
    ;(pt.exports = function (t, e) {
        return ht[t] || (ht[t] = void 0 !== e ? e : {})
    })('versions', []).push({ version: '3.12.1', mode: 'global', copyright: '© 2021 Denis Pushkarev (zloirock.ru)' })
    var dt,
        vt,
        yt,
        gt = 0,
        mt = Math.random(),
        bt = function (t) {
            return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++gt + mt).toString(36)
        },
        wt = pt.exports,
        jt = bt,
        xt = wt('keys'),
        Ot = function (t) {
            return xt[t] || (xt[t] = jt(t))
        },
        Et = {},
        St = lt,
        Tt = w,
        Pt = V,
        Mt = P,
        kt = it,
        Lt = Ot,
        _t = Et,
        At = 'Object already initialized',
        It = n.WeakMap
    if (St || kt.state) {
        var Rt = kt.state || (kt.state = new It()),
            Ct = Rt.get,
            Nt = Rt.has,
            Ft = Rt.set
        ;(dt = function (t, e) {
            if (Nt.call(Rt, t)) throw new TypeError(At)
            return (e.facade = t), Ft.call(Rt, t, e), e
        }),
            (vt = function (t) {
                return Ct.call(Rt, t) || {}
            }),
            (yt = function (t) {
                return Nt.call(Rt, t)
            })
    } else {
        var Jt = Lt('state')
        ;(_t[Jt] = !0),
            (dt = function (t, e) {
                if (Mt(t, Jt)) throw new TypeError(At)
                return (e.facade = t), Pt(t, Jt, e), e
            }),
            (vt = function (t) {
                return Mt(t, Jt) ? t[Jt] : {}
            }),
            (yt = function (t) {
                return Mt(t, Jt)
            })
    }
    var Dt = {
            set: dt,
            get: vt,
            has: yt,
            enforce: function (t) {
                return yt(t) ? vt(t) : dt(t, {})
            },
            getterFor: function (t) {
                return function (e) {
                    var n
                    if (!Tt(e) || (n = vt(e)).type !== t) throw TypeError('Incompatible receiver, ' + t + ' required')
                    return n
                }
            },
        },
        $t = n,
        Gt = V,
        Ht = P,
        zt = nt,
        Wt = ut,
        qt = Dt.get,
        Ut = Dt.enforce,
        Kt = String(String).split('String')
    ;(Z.exports = function (t, e, n, r) {
        var o,
            i = !!r && !!r.unsafe,
            a = !!r && !!r.enumerable,
            c = !!r && !!r.noTargetGet
        'function' == typeof n &&
            ('string' != typeof e || Ht(n, 'name') || Gt(n, 'name', e),
            (o = Ut(n)).source || (o.source = Kt.join('string' == typeof e ? e : ''))),
            t !== $t
                ? (i ? !c && t[e] && (a = !0) : delete t[e], a ? (t[e] = n) : Gt(t, e, n))
                : a
                ? (t[e] = n)
                : zt(e, n)
    })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && qt(this).source) || Wt(this)
    })
    var Qt = n,
        Xt = n,
        Yt = function (t) {
            return 'function' == typeof t ? t : void 0
        },
        Bt = function (t, e) {
            return arguments.length < 2 ? Yt(Qt[t]) || Yt(Xt[t]) : (Qt[t] && Qt[t][e]) || (Xt[t] && Xt[t][e])
        },
        Vt = {},
        Zt = Math.ceil,
        te = Math.floor,
        ee = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? te : Zt)(t)
        },
        ne = ee,
        re = Math.min,
        oe = function (t) {
            return t > 0 ? re(ne(t), 9007199254740991) : 0
        },
        ie = ee,
        ae = Math.max,
        ce = Math.min,
        ue = b,
        fe = oe,
        se = function (t, e) {
            var n = ie(t)
            return n < 0 ? ae(n + e, 0) : ce(n, e)
        },
        le = function (t) {
            return function (e, n, r) {
                var o,
                    i = ue(e),
                    a = fe(i.length),
                    c = se(r, a)
                if (t && n != n) {
                    for (; a > c; ) if ((o = i[c++]) != o) return !0
                } else for (; a > c; c++) if ((t || c in i) && i[c] === n) return t || c || 0
                return !t && -1
            }
        },
        pe = { includes: le(!0), indexOf: le(!1) },
        he = P,
        de = b,
        ve = pe.indexOf,
        ye = Et,
        ge = function (t, e) {
            var n,
                r = de(t),
                o = 0,
                i = []
            for (n in r) !he(ye, n) && he(r, n) && i.push(n)
            for (; e.length > o; ) he(r, (n = e[o++])) && (~ve(i, n) || i.push(n))
            return i
        },
        me = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf',
        ],
        be = ge,
        we = me.concat('length', 'prototype')
    Vt.f =
        Object.getOwnPropertyNames ||
        function (t) {
            return be(t, we)
        }
    var je = {}
    je.f = Object.getOwnPropertySymbols
    var xe = Vt,
        Oe = je,
        Ee = W,
        Se =
            Bt('Reflect', 'ownKeys') ||
            function (t) {
                var e = xe.f(Ee(t)),
                    n = Oe.f
                return n ? e.concat(n(t)) : e
            },
        Te = P,
        Pe = Se,
        Me = r,
        ke = H,
        Le = o,
        _e = /#|\.prototype\./,
        Ae = function (t, e) {
            var n = Re[Ie(t)]
            return n == Ne || (n != Ce && ('function' == typeof e ? Le(e) : !!e))
        },
        Ie = (Ae.normalize = function (t) {
            return String(t).replace(_e, '.').toLowerCase()
        }),
        Re = (Ae.data = {}),
        Ce = (Ae.NATIVE = 'N'),
        Ne = (Ae.POLYFILL = 'P'),
        Fe = Ae,
        Je = n,
        De = r.f,
        $e = V,
        Ge = Z.exports,
        He = nt,
        ze = function (t, e) {
            for (var n = Pe(e), r = ke.f, o = Me.f, i = 0; i < n.length; i++) {
                var a = n[i]
                Te(t, a) || r(t, a, o(e, a))
            }
        },
        We = Fe,
        qe = function (t, e) {
            var n,
                r,
                o,
                i,
                a,
                c = t.target,
                u = t.global,
                f = t.stat
            if ((n = u ? Je : f ? Je[c] || He(c, {}) : (Je[c] || {}).prototype))
                for (r in e) {
                    if (
                        ((i = e[r]),
                        (o = t.noTargetGet ? (a = De(n, r)) && a.value : n[r]),
                        !We(u ? r : c + (f ? '.' : '#') + r, t.forced) && void 0 !== o)
                    ) {
                        if (typeof i == typeof o) continue
                        ze(i, o)
                    }
                    ;(t.sham || (o && o.sham)) && $e(i, 'sham', !0), Ge(n, r, i, t)
                }
        },
        Ue = ge,
        Ke = me,
        Qe =
            Object.keys ||
            function (t) {
                return Ue(t, Ke)
            },
        Xe = i,
        Ye = o,
        Be = Qe,
        Ve = je,
        Ze = a,
        tn = E,
        en = v,
        nn = Object.assign,
        rn = Object.defineProperty,
        on =
            !nn ||
            Ye(function () {
                if (
                    Xe &&
                    1 !==
                        nn(
                            { b: 1 },
                            nn(
                                rn({}, 'a', {
                                    enumerable: !0,
                                    get: function () {
                                        rn(this, 'b', { value: 3, enumerable: !1 })
                                    },
                                }),
                                { b: 2 }
                            )
                        ).b
                )
                    return !0
                var t = {},
                    e = {},
                    n = Symbol(),
                    r = 'abcdefghijklmnopqrst'
                return (
                    (t[n] = 7),
                    r.split('').forEach(function (t) {
                        e[t] = t
                    }),
                    7 != nn({}, t)[n] || Be(nn({}, e)).join('') != r
                )
            })
                ? function (t, e) {
                      for (var n = tn(t), r = arguments.length, o = 1, i = Ve.f, a = Ze.f; r > o; )
                          for (
                              var c, u = en(arguments[o++]), f = i ? Be(u).concat(i(u)) : Be(u), s = f.length, l = 0;
                              s > l;

                          )
                              (c = f[l++]), (Xe && !a.call(u, c)) || (n[c] = u[c])
                      return n
                  }
                : nn
    function an(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t)
            e &&
                (r = r.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, r)
        }
        return n
    }
    function cn(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}
            e % 2
                ? an(Object(n), !0).forEach(function (e) {
                      sn(t, e, n[e])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : an(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
        }
        return t
    }
    function un(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value
        } catch (t) {
            return void n(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o)
    }
    function fn(t) {
        return function () {
            var e = this,
                n = arguments
            return new Promise(function (r, o) {
                var i = t.apply(e, n)
                function a(t) {
                    un(i, r, o, a, c, 'next', t)
                }
                function c(t) {
                    un(i, r, o, a, c, 'throw', t)
                }
                a(void 0)
            })
        }
    }
    function sn(t, e, n) {
        return (
            e in t
                ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                : (t[e] = n),
            t
        )
    }
    function ln(t, e) {
        if (null == t) return {}
        var n,
            r,
            o = (function (t, e) {
                if (null == t) return {}
                var n,
                    r,
                    o = {},
                    i = Object.keys(t)
                for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n])
                return o
            })(t, e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t)
            for (r = 0; r < i.length; r++)
                (n = i[r]), e.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]))
        }
        return o
    }
    function pn(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
        return r
    }
    function hn(t, e) {
        var n = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator']
        if (!n) {
            if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                    if (t) {
                        if ('string' == typeof t) return pn(t, e)
                        var n = Object.prototype.toString.call(t).slice(8, -1)
                        return (
                            'Object' === n && t.constructor && (n = t.constructor.name),
                            'Map' === n || 'Set' === n
                                ? Array.from(t)
                                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                ? pn(t, e)
                                : void 0
                        )
                    }
                })(t)) ||
                (e && t && 'number' == typeof t.length)
            ) {
                n && (t = n)
                var r = 0,
                    o = function () {}
                return {
                    s: o,
                    n: function () {
                        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] }
                    },
                    e: function (t) {
                        throw t
                    },
                    f: o,
                }
            }
            throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
        }
        var i,
            a = !0,
            c = !1
        return {
            s: function () {
                n = n.call(t)
            },
            n: function () {
                var t = n.next()
                return (a = t.done), t
            },
            e: function (t) {
                ;(c = !0), (i = t)
            },
            f: function () {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            },
        }
    }
    qe({ target: 'Object', stat: !0, forced: Object.assign !== on }, { assign: on })
    !(function (t) {
        var e = (function (t) {
            var e,
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = 'function' == typeof Symbol ? Symbol : {},
                i = o.iterator || '@@iterator',
                a = o.asyncIterator || '@@asyncIterator',
                c = o.toStringTag || '@@toStringTag'
            function u(t, e, n) {
                return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e]
            }
            try {
                u({}, '')
            } catch (t) {
                u = function (t, e, n) {
                    return (t[e] = n)
                }
            }
            function f(t, e, n, r) {
                var o = e && e.prototype instanceof y ? e : y,
                    i = Object.create(o.prototype),
                    a = new M(r || [])
                return (
                    (i._invoke = (function (t, e, n) {
                        var r = l
                        return function (o, i) {
                            if (r === h) throw new Error('Generator is already running')
                            if (r === d) {
                                if ('throw' === o) throw i
                                return L()
                            }
                            for (n.method = o, n.arg = i; ; ) {
                                var a = n.delegate
                                if (a) {
                                    var c = S(a, n)
                                    if (c) {
                                        if (c === v) continue
                                        return c
                                    }
                                }
                                if ('next' === n.method) n.sent = n._sent = n.arg
                                else if ('throw' === n.method) {
                                    if (r === l) throw ((r = d), n.arg)
                                    n.dispatchException(n.arg)
                                } else 'return' === n.method && n.abrupt('return', n.arg)
                                r = h
                                var u = s(t, e, n)
                                if ('normal' === u.type) {
                                    if (((r = n.done ? d : p), u.arg === v)) continue
                                    return { value: u.arg, done: n.done }
                                }
                                'throw' === u.type && ((r = d), (n.method = 'throw'), (n.arg = u.arg))
                            }
                        }
                    })(t, n, a)),
                    i
                )
            }
            function s(t, e, n) {
                try {
                    return { type: 'normal', arg: t.call(e, n) }
                } catch (t) {
                    return { type: 'throw', arg: t }
                }
            }
            t.wrap = f
            var l = 'suspendedStart',
                p = 'suspendedYield',
                h = 'executing',
                d = 'completed',
                v = {}
            function y() {}
            function g() {}
            function m() {}
            var b = {}
            b[i] = function () {
                return this
            }
            var w = Object.getPrototypeOf,
                j = w && w(w(k([])))
            j && j !== n && r.call(j, i) && (b = j)
            var x = (m.prototype = y.prototype = Object.create(b))
            function O(t) {
                ;['next', 'throw', 'return'].forEach(function (e) {
                    u(t, e, function (t) {
                        return this._invoke(e, t)
                    })
                })
            }
            function E(t, e) {
                function n(o, i, a, c) {
                    var u = s(t[o], t, i)
                    if ('throw' !== u.type) {
                        var f = u.arg,
                            l = f.value
                        return l && 'object' == typeof l && r.call(l, '__await')
                            ? e.resolve(l.__await).then(
                                  function (t) {
                                      n('next', t, a, c)
                                  },
                                  function (t) {
                                      n('throw', t, a, c)
                                  }
                              )
                            : e.resolve(l).then(
                                  function (t) {
                                      ;(f.value = t), a(f)
                                  },
                                  function (t) {
                                      return n('throw', t, a, c)
                                  }
                              )
                    }
                    c(u.arg)
                }
                var o
                this._invoke = function (t, r) {
                    function i() {
                        return new e(function (e, o) {
                            n(t, r, e, o)
                        })
                    }
                    return (o = o ? o.then(i, i) : i())
                }
            }
            function S(t, n) {
                var r = t.iterator[n.method]
                if (r === e) {
                    if (((n.delegate = null), 'throw' === n.method)) {
                        if (t.iterator.return && ((n.method = 'return'), (n.arg = e), S(t, n), 'throw' === n.method))
                            return v
                        ;(n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a 'throw' method"))
                    }
                    return v
                }
                var o = s(r, t.iterator, n.arg)
                if ('throw' === o.type) return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v
                var i = o.arg
                return i
                    ? i.done
                        ? ((n[t.resultName] = i.value),
                          (n.next = t.nextLoc),
                          'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
                          (n.delegate = null),
                          v)
                        : i
                    : ((n.method = 'throw'),
                      (n.arg = new TypeError('iterator result is not an object')),
                      (n.delegate = null),
                      v)
            }
            function T(t) {
                var e = { tryLoc: t[0] }
                1 in t && (e.catchLoc = t[1]),
                    2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                    this.tryEntries.push(e)
            }
            function P(t) {
                var e = t.completion || {}
                ;(e.type = 'normal'), delete e.arg, (t.completion = e)
            }
            function M(t) {
                ;(this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(T, this), this.reset(!0)
            }
            function k(t) {
                if (t) {
                    var n = t[i]
                    if (n) return n.call(t)
                    if ('function' == typeof t.next) return t
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length; ) if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n
                                return (n.value = e), (n.done = !0), n
                            }
                        return (a.next = a)
                    }
                }
                return { next: L }
            }
            function L() {
                return { value: e, done: !0 }
            }
            return (
                (g.prototype = x.constructor = m),
                (m.constructor = g),
                (g.displayName = u(m, c, 'GeneratorFunction')),
                (t.isGeneratorFunction = function (t) {
                    var e = 'function' == typeof t && t.constructor
                    return !!e && (e === g || 'GeneratorFunction' === (e.displayName || e.name))
                }),
                (t.mark = function (t) {
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, m)
                            : ((t.__proto__ = m), u(t, c, 'GeneratorFunction')),
                        (t.prototype = Object.create(x)),
                        t
                    )
                }),
                (t.awrap = function (t) {
                    return { __await: t }
                }),
                O(E.prototype),
                (E.prototype[a] = function () {
                    return this
                }),
                (t.AsyncIterator = E),
                (t.async = function (e, n, r, o, i) {
                    void 0 === i && (i = Promise)
                    var a = new E(f(e, n, r, o), i)
                    return t.isGeneratorFunction(n)
                        ? a
                        : a.next().then(function (t) {
                              return t.done ? t.value : a.next()
                          })
                }),
                O(x),
                u(x, c, 'Generator'),
                (x[i] = function () {
                    return this
                }),
                (x.toString = function () {
                    return '[object Generator]'
                }),
                (t.keys = function (t) {
                    var e = []
                    for (var n in t) e.push(n)
                    return (
                        e.reverse(),
                        function n() {
                            for (; e.length; ) {
                                var r = e.pop()
                                if (r in t) return (n.value = r), (n.done = !1), n
                            }
                            return (n.done = !0), n
                        }
                    )
                }),
                (t.values = k),
                (M.prototype = {
                    constructor: M,
                    reset: function (t) {
                        if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = e),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = 'next'),
                            (this.arg = e),
                            this.tryEntries.forEach(P),
                            !t)
                        )
                            for (var n in this)
                                't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function () {
                        this.done = !0
                        var t = this.tryEntries[0].completion
                        if ('throw' === t.type) throw t.arg
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t
                        var n = this
                        function o(r, o) {
                            return (
                                (c.type = 'throw'),
                                (c.arg = t),
                                (n.next = r),
                                o && ((n.method = 'next'), (n.arg = e)),
                                !!o
                            )
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                c = a.completion
                            if ('root' === a.tryLoc) return o('end')
                            if (a.tryLoc <= this.prev) {
                                var u = r.call(a, 'catchLoc'),
                                    f = r.call(a, 'finallyLoc')
                                if (u && f) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!f) throw new Error('try statement without catch or finally')
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n]
                            if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                                var i = o
                                break
                            }
                        }
                        i && ('break' === t || 'continue' === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null)
                        var a = i ? i.completion : {}
                        return (
                            (a.type = t),
                            (a.arg = e),
                            i ? ((this.method = 'next'), (this.next = i.finallyLoc), v) : this.complete(a)
                        )
                    },
                    complete: function (t, e) {
                        if ('throw' === t.type) throw t.arg
                        return (
                            'break' === t.type || 'continue' === t.type
                                ? (this.next = t.arg)
                                : 'return' === t.type
                                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                                : 'normal' === t.type && e && (this.next = e),
                            v
                        )
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e]
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), P(n), v
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e]
                            if (n.tryLoc === t) {
                                var r = n.completion
                                if ('throw' === r.type) {
                                    var o = r.arg
                                    P(n)
                                }
                                return o
                            }
                        }
                        throw new Error('illegal catch attempt')
                    },
                    delegateYield: function (t, n, r) {
                        return (
                            (this.delegate = { iterator: k(t), resultName: n, nextLoc: r }),
                            'next' === this.method && (this.arg = e),
                            v
                        )
                    },
                }),
                t
            )
        })(t.exports)
        try {
            regeneratorRuntime = e
        } catch (t) {
            Function('r', 'regeneratorRuntime = r')(e)
        }
    })({ exports: {} })
    var dn,
        vn,
        yn = Bt('navigator', 'userAgent') || '',
        gn = yn,
        mn = n.process,
        bn = mn && mn.versions,
        wn = bn && bn.v8
    wn
        ? (vn = (dn = wn.split('.'))[0] < 4 ? 1 : dn[0] + dn[1])
        : gn && (!(dn = gn.match(/Edge\/(\d+)/)) || dn[1] >= 74) && (dn = gn.match(/Chrome\/(\d+)/)) && (vn = dn[1])
    var jn = vn && +vn,
        xn = jn,
        On = o,
        En =
            !!Object.getOwnPropertySymbols &&
            !On(function () {
                return !String(Symbol()) || (!Symbol.sham && xn && xn < 41)
            }),
        Sn = En && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
        Tn = n,
        Pn = pt.exports,
        Mn = P,
        kn = bt,
        Ln = En,
        _n = Sn,
        An = Pn('wks'),
        In = Tn.Symbol,
        Rn = _n ? In : (In && In.withoutSetter) || kn,
        Cn = function (t) {
            return (
                (Mn(An, t) && (Ln || 'string' == typeof An[t])) ||
                    (Ln && Mn(In, t) ? (An[t] = In[t]) : (An[t] = Rn('Symbol.' + t))),
                An[t]
            )
        },
        Nn = {}
    Nn[Cn('toStringTag')] = 'z'
    var Fn = '[object z]' === String(Nn),
        Jn = Fn,
        Dn = p,
        $n = Cn('toStringTag'),
        Gn =
            'Arguments' ==
            Dn(
                (function () {
                    return arguments
                })()
            ),
        Hn = Jn
            ? Dn
            : function (t) {
                  var e, n, r
                  return void 0 === t
                      ? 'Undefined'
                      : null === t
                      ? 'Null'
                      : 'string' ==
                        typeof (n = (function (t, e) {
                            try {
                                return t[e]
                            } catch (t) {}
                        })((e = Object(t)), $n))
                      ? n
                      : Gn
                      ? Dn(e)
                      : 'Object' == (r = Dn(e)) && 'function' == typeof e.callee
                      ? 'Arguments'
                      : r
              },
        zn = Hn,
        Wn = Fn
            ? {}.toString
            : function () {
                  return '[object ' + zn(this) + ']'
              },
        qn = Fn,
        Un = Z.exports,
        Kn = Wn
    qn || Un(Object.prototype, 'toString', Kn, { unsafe: !0 })
    var Qn = n.Promise,
        Xn = Z.exports,
        Yn = w,
        Bn = W,
        Vn = function (t) {
            if (!Yn(t) && null !== t) throw TypeError("Can't set " + String(t) + ' as a prototype')
            return t
        },
        Zn =
            Object.setPrototypeOf ||
            ('__proto__' in {}
                ? (function () {
                      var t,
                          e = !1,
                          n = {}
                      try {
                          ;(t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(n, []),
                              (e = n instanceof Array)
                      } catch (t) {}
                      return function (n, r) {
                          return Bn(n), Vn(r), e ? t.call(n, r) : (n.__proto__ = r), n
                      }
                  })()
                : void 0),
        tr = H.f,
        er = P,
        nr = Cn('toStringTag'),
        rr = Bt,
        or = H,
        ir = i,
        ar = Cn('species'),
        cr = function (t) {
            if ('function' != typeof t) throw TypeError(String(t) + ' is not a function')
            return t
        },
        ur = {},
        fr = ur,
        sr = Cn('iterator'),
        lr = Array.prototype,
        pr = cr,
        hr = function (t, e, n) {
            if ((pr(t), void 0 === e)) return t
            switch (n) {
                case 0:
                    return function () {
                        return t.call(e)
                    }
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    }
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    }
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        },
        dr = Hn,
        vr = ur,
        yr = Cn('iterator'),
        gr = W,
        mr = W,
        br = function (t) {
            return void 0 !== t && (fr.Array === t || lr[sr] === t)
        },
        wr = oe,
        jr = hr,
        xr = function (t) {
            if (null != t) return t[yr] || t['@@iterator'] || vr[dr(t)]
        },
        Or = function (t) {
            var e = t.return
            if (void 0 !== e) return gr(e.call(t)).value
        },
        Er = function (t, e) {
            ;(this.stopped = t), (this.result = e)
        },
        Sr = Cn('iterator'),
        Tr = !1
    try {
        var Pr = 0,
            Mr = {
                next: function () {
                    return { done: !!Pr++ }
                },
                return: function () {
                    Tr = !0
                },
            }
        ;(Mr[Sr] = function () {
            return this
        }),
            Array.from(Mr, function () {
                throw 2
            })
    } catch (t) {}
    var kr,
        Lr,
        _r,
        Ar = W,
        Ir = cr,
        Rr = Cn('species'),
        Cr = Bt('document', 'documentElement'),
        Nr = /(?:iphone|ipod|ipad).*applewebkit/i.test(yn),
        Fr = 'process' == p(n.process),
        Jr = n,
        Dr = o,
        $r = hr,
        Gr = Cr,
        Hr = _,
        zr = Nr,
        Wr = Fr,
        qr = Jr.location,
        Ur = Jr.setImmediate,
        Kr = Jr.clearImmediate,
        Qr = Jr.process,
        Xr = Jr.MessageChannel,
        Yr = Jr.Dispatch,
        Br = 0,
        Vr = {},
        Zr = 'onreadystatechange',
        to = function (t) {
            if (Vr.hasOwnProperty(t)) {
                var e = Vr[t]
                delete Vr[t], e()
            }
        },
        eo = function (t) {
            return function () {
                to(t)
            }
        },
        no = function (t) {
            to(t.data)
        },
        ro = function (t) {
            Jr.postMessage(t + '', qr.protocol + '//' + qr.host)
        }
    ;(Ur && Kr) ||
        ((Ur = function (t) {
            for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++])
            return (
                (Vr[++Br] = function () {
                    ;('function' == typeof t ? t : Function(t)).apply(void 0, e)
                }),
                kr(Br),
                Br
            )
        }),
        (Kr = function (t) {
            delete Vr[t]
        }),
        Wr
            ? (kr = function (t) {
                  Qr.nextTick(eo(t))
              })
            : Yr && Yr.now
            ? (kr = function (t) {
                  Yr.now(eo(t))
              })
            : Xr && !zr
            ? ((_r = (Lr = new Xr()).port2), (Lr.port1.onmessage = no), (kr = $r(_r.postMessage, _r, 1)))
            : Jr.addEventListener &&
              'function' == typeof postMessage &&
              !Jr.importScripts &&
              qr &&
              'file:' !== qr.protocol &&
              !Dr(ro)
            ? ((kr = ro), Jr.addEventListener('message', no, !1))
            : (kr =
                  Zr in Hr('script')
                      ? function (t) {
                            Gr.appendChild(Hr('script')).onreadystatechange = function () {
                                Gr.removeChild(this), to(t)
                            }
                        }
                      : function (t) {
                            setTimeout(eo(t), 0)
                        }))
    var oo,
        io,
        ao,
        co,
        uo,
        fo,
        so,
        lo,
        po = { set: Ur, clear: Kr },
        ho = /web0s(?!.*chrome)/i.test(yn),
        vo = n,
        yo = r.f,
        go = po.set,
        mo = Nr,
        bo = ho,
        wo = Fr,
        jo = vo.MutationObserver || vo.WebKitMutationObserver,
        xo = vo.document,
        Oo = vo.process,
        Eo = vo.Promise,
        So = yo(vo, 'queueMicrotask'),
        To = So && So.value
    To ||
        ((oo = function () {
            var t, e
            for (wo && (t = Oo.domain) && t.exit(); io; ) {
                ;(e = io.fn), (io = io.next)
                try {
                    e()
                } catch (t) {
                    throw (io ? co() : (ao = void 0), t)
                }
            }
            ;(ao = void 0), t && t.enter()
        }),
        mo || wo || bo || !jo || !xo
            ? Eo && Eo.resolve
                ? (((so = Eo.resolve(void 0)).constructor = Eo),
                  (lo = so.then),
                  (co = function () {
                      lo.call(so, oo)
                  }))
                : (co = wo
                      ? function () {
                            Oo.nextTick(oo)
                        }
                      : function () {
                            go.call(vo, oo)
                        })
            : ((uo = !0),
              (fo = xo.createTextNode('')),
              new jo(oo).observe(fo, { characterData: !0 }),
              (co = function () {
                  fo.data = uo = !uo
              })))
    var Po =
            To ||
            function (t) {
                var e = { fn: t, next: void 0 }
                ao && (ao.next = e), io || ((io = e), co()), (ao = e)
            },
        Mo = {},
        ko = cr,
        Lo = function (t) {
            var e, n
            ;(this.promise = new t(function (t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor')
                ;(e = t), (n = r)
            })),
                (this.resolve = ko(e)),
                (this.reject = ko(n))
        }
    Mo.f = function (t) {
        return new Lo(t)
    }
    var _o,
        Ao,
        Io,
        Ro,
        Co = W,
        No = w,
        Fo = Mo,
        Jo = n,
        Do = 'object' == typeof window,
        $o = qe,
        Go = n,
        Ho = Bt,
        zo = Qn,
        Wo = Z.exports,
        qo = function (t, e, n) {
            for (var r in e) Xn(t, r, e[r], n)
            return t
        },
        Uo = Zn,
        Ko = function (t, e, n) {
            t && !er((t = n ? t : t.prototype), nr) && tr(t, nr, { configurable: !0, value: e })
        },
        Qo = function (t) {
            var e = rr(t),
                n = or.f
            ir &&
                e &&
                !e[ar] &&
                n(e, ar, {
                    configurable: !0,
                    get: function () {
                        return this
                    },
                })
        },
        Xo = w,
        Yo = cr,
        Bo = function (t, e, n) {
            if (!(t instanceof e)) throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation')
            return t
        },
        Vo = ut,
        Zo = function (t, e, n) {
            var r,
                o,
                i,
                a,
                c,
                u,
                f,
                s = n && n.that,
                l = !(!n || !n.AS_ENTRIES),
                p = !(!n || !n.IS_ITERATOR),
                h = !(!n || !n.INTERRUPTED),
                d = jr(e, s, 1 + l + h),
                v = function (t) {
                    return r && Or(r), new Er(!0, t)
                },
                y = function (t) {
                    return l ? (mr(t), h ? d(t[0], t[1], v) : d(t[0], t[1])) : h ? d(t, v) : d(t)
                }
            if (p) r = t
            else {
                if ('function' != typeof (o = xr(t))) throw TypeError('Target is not iterable')
                if (br(o)) {
                    for (i = 0, a = wr(t.length); a > i; i++) if ((c = y(t[i])) && c instanceof Er) return c
                    return new Er(!1)
                }
                r = o.call(t)
            }
            for (u = r.next; !(f = u.call(r)).done; ) {
                try {
                    c = y(f.value)
                } catch (t) {
                    throw (Or(r), t)
                }
                if ('object' == typeof c && c && c instanceof Er) return c
            }
            return new Er(!1)
        },
        ti = function (t, e) {
            if (!e && !Tr) return !1
            var n = !1
            try {
                var r = {}
                ;(r[Sr] = function () {
                    return {
                        next: function () {
                            return { done: (n = !0) }
                        },
                    }
                }),
                    t(r)
            } catch (t) {}
            return n
        },
        ei = function (t, e) {
            var n,
                r = Ar(t).constructor
            return void 0 === r || null == (n = Ar(r)[Rr]) ? e : Ir(n)
        },
        ni = po.set,
        ri = Po,
        oi = function (t, e) {
            if ((Co(t), No(e) && e.constructor === t)) return e
            var n = Fo.f(t)
            return (0, n.resolve)(e), n.promise
        },
        ii = function (t, e) {
            var n = Jo.console
            n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
        },
        ai = Mo,
        ci = function (t) {
            try {
                return { error: !1, value: t() }
            } catch (t) {
                return { error: !0, value: t }
            }
        },
        ui = Dt,
        fi = Fe,
        si = Do,
        li = Fr,
        pi = jn,
        hi = Cn('species'),
        di = 'Promise',
        vi = ui.get,
        yi = ui.set,
        gi = ui.getterFor(di),
        mi = zo && zo.prototype,
        bi = zo,
        wi = mi,
        ji = Go.TypeError,
        xi = Go.document,
        Oi = Go.process,
        Ei = ai.f,
        Si = Ei,
        Ti = !!(xi && xi.createEvent && Go.dispatchEvent),
        Pi = 'function' == typeof PromiseRejectionEvent,
        Mi = 'unhandledrejection',
        ki = !1,
        Li = fi(di, function () {
            var t = Vo(bi) !== String(bi)
            if (!t && 66 === pi) return !0
            if (pi >= 51 && /native code/.test(bi)) return !1
            var e = new bi(function (t) {
                    t(1)
                }),
                n = function (t) {
                    t(
                        function () {},
                        function () {}
                    )
                }
            return ((e.constructor = {})[hi] = n), !(ki = e.then(function () {}) instanceof n) || (!t && si && !Pi)
        }),
        _i =
            Li ||
            !ti(function (t) {
                bi.all(t).catch(function () {})
            }),
        Ai = function (t) {
            var e
            return !(!Xo(t) || 'function' != typeof (e = t.then)) && e
        },
        Ii = function (t, e) {
            if (!t.notified) {
                t.notified = !0
                var n = t.reactions
                ri(function () {
                    for (var r = t.value, o = 1 == t.state, i = 0; n.length > i; ) {
                        var a,
                            c,
                            u,
                            f = n[i++],
                            s = o ? f.ok : f.fail,
                            l = f.resolve,
                            p = f.reject,
                            h = f.domain
                        try {
                            s
                                ? (o || (2 === t.rejection && Fi(t), (t.rejection = 1)),
                                  !0 === s ? (a = r) : (h && h.enter(), (a = s(r)), h && (h.exit(), (u = !0))),
                                  a === f.promise ? p(ji('Promise-chain cycle')) : (c = Ai(a)) ? c.call(a, l, p) : l(a))
                                : p(r)
                        } catch (t) {
                            h && !u && h.exit(), p(t)
                        }
                    }
                    ;(t.reactions = []), (t.notified = !1), e && !t.rejection && Ci(t)
                })
            }
        },
        Ri = function (t, e, n) {
            var r, o
            Ti
                ? (((r = xi.createEvent('Event')).promise = e),
                  (r.reason = n),
                  r.initEvent(t, !1, !0),
                  Go.dispatchEvent(r))
                : (r = { promise: e, reason: n }),
                !Pi && (o = Go['on' + t]) ? o(r) : t === Mi && ii('Unhandled promise rejection', n)
        },
        Ci = function (t) {
            ni.call(Go, function () {
                var e,
                    n = t.facade,
                    r = t.value
                if (
                    Ni(t) &&
                    ((e = ci(function () {
                        li ? Oi.emit('unhandledRejection', r, n) : Ri(Mi, n, r)
                    })),
                    (t.rejection = li || Ni(t) ? 2 : 1),
                    e.error)
                )
                    throw e.value
            })
        },
        Ni = function (t) {
            return 1 !== t.rejection && !t.parent
        },
        Fi = function (t) {
            ni.call(Go, function () {
                var e = t.facade
                li ? Oi.emit('rejectionHandled', e) : Ri('rejectionhandled', e, t.value)
            })
        },
        Ji = function (t, e, n) {
            return function (r) {
                t(e, r, n)
            }
        },
        Di = function (t, e, n) {
            t.done || ((t.done = !0), n && (t = n), (t.value = e), (t.state = 2), Ii(t, !0))
        },
        $i = function (t, e, n) {
            if (!t.done) {
                ;(t.done = !0), n && (t = n)
                try {
                    if (t.facade === e) throw ji("Promise can't be resolved itself")
                    var r = Ai(e)
                    r
                        ? ri(function () {
                              var n = { done: !1 }
                              try {
                                  r.call(e, Ji($i, n, t), Ji(Di, n, t))
                              } catch (e) {
                                  Di(n, e, t)
                              }
                          })
                        : ((t.value = e), (t.state = 1), Ii(t, !1))
                } catch (e) {
                    Di({ done: !1 }, e, t)
                }
            }
        }
    if (
        Li &&
        ((wi = (bi = function (t) {
            Bo(this, bi, di), Yo(t), _o.call(this)
            var e = vi(this)
            try {
                t(Ji($i, e), Ji(Di, e))
            } catch (t) {
                Di(e, t)
            }
        }).prototype),
        ((_o = function (t) {
            yi(this, {
                type: di,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0,
            })
        }).prototype = qo(wi, {
            then: function (t, e) {
                var n = gi(this),
                    r = Ei(ei(this, bi))
                return (
                    (r.ok = 'function' != typeof t || t),
                    (r.fail = 'function' == typeof e && e),
                    (r.domain = li ? Oi.domain : void 0),
                    (n.parent = !0),
                    n.reactions.push(r),
                    0 != n.state && Ii(n, !1),
                    r.promise
                )
            },
            catch: function (t) {
                return this.then(void 0, t)
            },
        })),
        (Ao = function () {
            var t = new _o(),
                e = vi(t)
            ;(this.promise = t), (this.resolve = Ji($i, e)), (this.reject = Ji(Di, e))
        }),
        (ai.f = Ei =
            function (t) {
                return t === bi || t === Io ? new Ao(t) : Si(t)
            }),
        'function' == typeof zo && mi !== Object.prototype)
    ) {
        ;(Ro = mi.then),
            ki ||
                (Wo(
                    mi,
                    'then',
                    function (t, e) {
                        var n = this
                        return new bi(function (t, e) {
                            Ro.call(n, t, e)
                        }).then(t, e)
                    },
                    { unsafe: !0 }
                ),
                Wo(mi, 'catch', wi.catch, { unsafe: !0 }))
        try {
            delete mi.constructor
        } catch (t) {}
        Uo && Uo(mi, wi)
    }
    $o({ global: !0, wrap: !0, forced: Li }, { Promise: bi }),
        Ko(bi, di, !1),
        Qo(di),
        (Io = Ho(di)),
        $o(
            { target: di, stat: !0, forced: Li },
            {
                reject: function (t) {
                    var e = Ei(this)
                    return e.reject.call(void 0, t), e.promise
                },
            }
        ),
        $o(
            { target: di, stat: !0, forced: Li },
            {
                resolve: function (t) {
                    return oi(this, t)
                },
            }
        ),
        $o(
            { target: di, stat: !0, forced: _i },
            {
                all: function (t) {
                    var e = this,
                        n = Ei(e),
                        r = n.resolve,
                        o = n.reject,
                        i = ci(function () {
                            var n = Yo(e.resolve),
                                i = [],
                                a = 0,
                                c = 1
                            Zo(t, function (t) {
                                var u = a++,
                                    f = !1
                                i.push(void 0),
                                    c++,
                                    n.call(e, t).then(function (t) {
                                        f || ((f = !0), (i[u] = t), --c || r(i))
                                    }, o)
                            }),
                                --c || r(i)
                        })
                    return i.error && o(i.value), n.promise
                },
                race: function (t) {
                    var e = this,
                        n = Ei(e),
                        r = n.reject,
                        o = ci(function () {
                            var o = Yo(e.resolve)
                            Zo(t, function (t) {
                                o.call(e, t).then(n.resolve, r)
                            })
                        })
                    return o.error && r(o.value), n.promise
                },
            }
        )
    var Gi,
        Hi = H,
        zi = W,
        Wi = Qe,
        qi = i
            ? Object.defineProperties
            : function (t, e) {
                  zi(t)
                  for (var n, r = Wi(e), o = r.length, i = 0; o > i; ) Hi.f(t, (n = r[i++]), e[n])
                  return t
              },
        Ui = W,
        Ki = qi,
        Qi = me,
        Xi = Et,
        Yi = Cr,
        Bi = _,
        Vi = Ot('IE_PROTO'),
        Zi = function () {},
        ta = function (t) {
            return '<script>' + t + '</' + 'script>'
        },
        ea = function () {
            try {
                Gi = document.domain && new ActiveXObject('htmlfile')
            } catch (t) {}
            var t, e
            ea = Gi
                ? (function (t) {
                      t.write(ta('')), t.close()
                      var e = t.parentWindow.Object
                      return (t = null), e
                  })(Gi)
                : (((e = Bi('iframe')).style.display = 'none'),
                  Yi.appendChild(e),
                  (e.src = String('javascript:')),
                  (t = e.contentWindow.document).open(),
                  t.write(ta('document.F=Object')),
                  t.close(),
                  t.F)
            for (var n = Qi.length; n--; ) delete ea.prototype[Qi[n]]
            return ea()
        }
    Xi[Vi] = !0
    var na =
            Object.create ||
            function (t, e) {
                var n
                return (
                    null !== t
                        ? ((Zi.prototype = Ui(t)), (n = new Zi()), (Zi.prototype = null), (n[Vi] = t))
                        : (n = ea()),
                    void 0 === e ? n : Ki(n, e)
                )
            },
        ra = H,
        oa = Cn('unscopables'),
        ia = Array.prototype
    null == ia[oa] && ra.f(ia, oa, { configurable: !0, value: na(null) })
    var aa = pe.includes,
        ca = function (t) {
            ia[oa][t] = !0
        }
    qe(
        { target: 'Array', proto: !0 },
        {
            includes: function (t) {
                return aa(this, t, arguments.length > 1 ? arguments[1] : void 0)
            },
        }
    ),
        ca('includes')
    var ua = w,
        fa = p,
        sa = Cn('match'),
        la = function (t) {
            var e
            return ua(t) && (void 0 !== (e = t[sa]) ? !!e : 'RegExp' == fa(t))
        },
        pa = Cn('match'),
        ha = function (t) {
            if (la(t)) throw TypeError("The method doesn't accept regular expressions")
            return t
        },
        da = y
    qe(
        {
            target: 'String',
            proto: !0,
            forced: !(function (t) {
                var e = /./
                try {
                    '/./'[t](e)
                } catch (n) {
                    try {
                        return (e[pa] = !1), '/./'[t](e)
                    } catch (t) {}
                }
                return !1
            })('includes'),
        },
        {
            includes: function (t) {
                return !!~String(da(this)).indexOf(ha(t), arguments.length > 1 ? arguments[1] : void 0)
            },
        }
    )
    var va = function () {
            var t,
                e = {
                    messageStyle: 'none',
                    tex2jax: {
                        inlineMath: [
                            ['$', '$'],
                            ['\\(', '\\)'],
                        ],
                        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
                    },
                    skipStartupTypeset: !0,
                }
            return {
                id: 'mathjax2',
                init: function (n) {
                    var r = (t = n).getConfig().mathjax2 || t.getConfig().math || {},
                        o = cn(cn({}, e), r),
                        i =
                            (o.mathjax || 'https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js') +
                            '?config=' +
                            (o.config || 'TeX-AMS_HTML-full')
                    ;(o.tex2jax = cn(cn({}, e.tex2jax), r.tex2jax)),
                        (o.mathjax = o.config = null),
                        (function (t, e) {
                            var n = this,
                                r = document.querySelector('head'),
                                o = document.createElement('script')
                            ;(o.type = 'text/javascript'), (o.src = t)
                            var i = function () {
                                'function' == typeof e && (e.call(), (e = null))
                            }
                            ;(o.onload = i),
                                (o.onreadystatechange = function () {
                                    'loaded' === n.readyState && i()
                                }),
                                r.appendChild(o)
                        })(i, function () {
                            MathJax.Hub.Config(o),
                                MathJax.Hub.Queue(['Typeset', MathJax.Hub, t.getRevealElement()]),
                                MathJax.Hub.Queue(t.layout),
                                t.on('slidechanged', function (t) {
                                    MathJax.Hub.Queue(['Typeset', MathJax.Hub, t.currentSlide])
                                })
                        })
                },
            }
        },
        ya = va
    return (Plugin = Object.assign(ya(), {
        KaTeX: function () {
            var t,
                e = {
                    version: 'latest',
                    delimiters: [
                        { left: '$$', right: '$$', display: !0 },
                        { left: '$', right: '$', display: !1 },
                        { left: '\\(', right: '\\)', display: !1 },
                        { left: '\\[', right: '\\]', display: !0 },
                    ],
                    ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
                },
                n = function (t) {
                    return new Promise(function (e, n) {
                        var r = document.createElement('script')
                        ;(r.type = 'text/javascript'),
                            (r.onload = e),
                            (r.onerror = n),
                            (r.src = t),
                            document.head.append(r)
                    })
                }
            function r() {
                return (r = fn(
                    regeneratorRuntime.mark(function t(e) {
                        var r, o, i
                        return regeneratorRuntime.wrap(
                            function (t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            ;(r = hn(e)), (t.prev = 1), r.s()
                                        case 3:
                                            if ((o = r.n()).done) {
                                                t.next = 9
                                                break
                                            }
                                            return (i = o.value), (t.next = 7), n(i)
                                        case 7:
                                            t.next = 3
                                            break
                                        case 9:
                                            t.next = 14
                                            break
                                        case 11:
                                            ;(t.prev = 11), (t.t0 = t.catch(1)), r.e(t.t0)
                                        case 14:
                                            return (t.prev = 14), r.f(), t.finish(14)
                                        case 17:
                                        case 'end':
                                            return t.stop()
                                    }
                            },
                            t,
                            null,
                            [[1, 11, 14, 17]]
                        )
                    })
                )).apply(this, arguments)
            }
            return {
                id: 'katex',
                init: function (n) {
                    var o = this,
                        i = (t = n).getConfig().katex || {},
                        a = cn(cn({}, e), i)
                    a.local, a.version, a.extensions
                    var c = ln(a, ['local', 'version', 'extensions']),
                        u = a.local || 'https://cdn.jsdelivr.net/npm/katex',
                        f = a.local ? '' : '@' + a.version,
                        s = u + f + '/dist/katex.min.css',
                        l = u + f + '/dist/contrib/mhchem.min.js',
                        p = u + f + '/dist/contrib/auto-render.min.js',
                        h = [u + f + '/dist/katex.min.js']
                    a.extensions && a.extensions.includes('mhchem') && h.push(l), h.push(p)
                    var d,
                        v,
                        y = function () {
                            renderMathInElement(n.getSlidesElement(), c), t.layout()
                        }
                    ;(d = s),
                        ((v = document.createElement('link')).rel = 'stylesheet'),
                        (v.href = d),
                        document.head.appendChild(v),
                        (function (t) {
                            return r.apply(this, arguments)
                        })(h).then(function () {
                            t.isReady() ? y() : t.on('ready', y.bind(o))
                        })
                },
            }
        },
        MathJax2: va,
        MathJax3: function () {
            var t = {
                tex: {
                    inlineMath: [
                        ['$', '$'],
                        ['\\(', '\\)'],
                    ],
                },
                options: { skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'] },
                startup: {
                    ready: function () {
                        MathJax.startup.defaultReady(),
                            MathJax.startup.promise.then(function () {
                                Reveal.layout()
                            })
                    },
                },
            }
            return {
                id: 'mathjax3',
                init: function (e) {
                    var n = e.getConfig().mathjax3 || {},
                        r = cn(cn({}, t), n)
                    ;(r.tex = cn(cn({}, t.tex), n.tex)),
                        (r.options = cn(cn({}, t.options), n.options)),
                        (r.startup = cn(cn({}, t.startup), n.startup))
                    var o = r.mathjax || 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
                    ;(r.mathjax = null),
                        (window.MathJax = r),
                        (function (t, e) {
                            var n = document.createElement('script')
                            ;(n.type = 'text/javascript'),
                                (n.id = 'MathJax-script'),
                                (n.src = t),
                                (n.async = !0),
                                (n.onload = function () {
                                    'function' == typeof e && (e.call(), (e = null))
                                }),
                                document.head.appendChild(n)
                        })(o, function () {
                            Reveal.addEventListener('slidechanged', function (t) {
                                MathJax.typeset()
                            })
                        })
                },
            }
        },
    }))
})
