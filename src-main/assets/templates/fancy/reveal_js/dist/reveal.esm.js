/*!
 * reveal.js 4.3.1
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2022 Hakim El Hattab, https://hakim.se
 */
const e = (e, t) => {
        for (let i in t) e[i] = t[i]
        return e
    },
    t = (e, t) => Array.from(e.querySelectorAll(t)),
    i = (e, t, i) => {
        i ? e.classList.add(t) : e.classList.remove(t)
    },
    s = e => {
        if ('string' == typeof e) {
            if ('null' === e) return null
            if ('true' === e) return !0
            if ('false' === e) return !1
            if (e.match(/^-?[\d\.]+$/)) return parseFloat(e)
        }
        return e
    },
    a = (e, t) => {
        e.style.transform = t
    },
    n = (e, t) => {
        let i = e.matches || e.matchesSelector || e.msMatchesSelector
        return !(!i || !i.call(e, t))
    },
    r = (e, t) => {
        if ('function' == typeof e.closest) return e.closest(t)
        for (; e; ) {
            if (n(e, t)) return e
            e = e.parentNode
        }
        return null
    },
    o = (e, t, i, s = '') => {
        let a = e.querySelectorAll('.' + i)
        for (let t = 0; t < a.length; t++) {
            let i = a[t]
            if (i.parentNode === e) return i
        }
        let n = document.createElement(t)
        return (n.className = i), (n.innerHTML = s), e.appendChild(n), n
    },
    l = e => {
        let t = document.createElement('style')
        return (
            (t.type = 'text/css'),
            e &&
                e.length > 0 &&
                (t.styleSheet ? (t.styleSheet.cssText = e) : t.appendChild(document.createTextNode(e))),
            document.head.appendChild(t),
            t
        )
    },
    d = () => {
        let e = {}
        location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, t => {
            e[t.split('=').shift()] = t.split('=').pop()
        })
        for (let t in e) {
            let i = e[t]
            e[t] = s(unescape(i))
        }
        return void 0 !== e.dependencies && delete e.dependencies, e
    },
    c = (e, t = 0) => {
        if (e) {
            let i,
                s = e.style.height
            return (
                (e.style.height = '0px'),
                (e.parentNode.style.height = 'auto'),
                (i = t - e.parentNode.offsetHeight),
                (e.style.height = s + 'px'),
                e.parentNode.style.removeProperty('height'),
                i
            )
        }
        return t
    },
    h = { mp4: 'video/mp4', m4a: 'video/mp4', ogv: 'video/ogg', mpeg: 'video/mpeg', webm: 'video/webm' },
    u = navigator.userAgent,
    g = document.createElement('div'),
    v = /(iphone|ipod|ipad|android)/gi.test(u) || ('MacIntel' === navigator.platform && navigator.maxTouchPoints > 1),
    p = /chrome/i.test(u) && !/edge/i.test(u),
    m = /android/gi.test(u),
    f = 'zoom' in g.style && !v && (p || /Version\/[\d\.]+.*Safari/.test(u))
var b = {}
Object.defineProperty(b, '__esModule', { value: !0 })
var y =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t]
                for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
            }
            return e
        },
    w = (b.default = (function (e) {
        if (e) {
            var t = function (e) {
                    return [].slice.call(e)
                },
                i = 0,
                s = 1,
                a = 2,
                n = 3,
                r = [],
                o = null,
                l =
                    'requestAnimationFrame' in e
                        ? function () {
                              e.cancelAnimationFrame(o),
                                  (o = e.requestAnimationFrame(function () {
                                      return c(
                                          r.filter(function (e) {
                                              return e.dirty && e.active
                                          })
                                      )
                                  }))
                          }
                        : function () {},
                d = function (e) {
                    return function () {
                        r.forEach(function (t) {
                            return (t.dirty = e)
                        }),
                            l()
                    }
                },
                c = function (e) {
                    e
                        .filter(function (e) {
                            return !e.styleComputed
                        })
                        .forEach(function (e) {
                            e.styleComputed = v(e)
                        }),
                        e.filter(p).forEach(m)
                    var t = e.filter(g)
                    t.forEach(u),
                        t.forEach(function (e) {
                            m(e), h(e)
                        }),
                        t.forEach(f)
                },
                h = function (e) {
                    return (e.dirty = i)
                },
                u = function (e) {
                    ;(e.availableWidth = e.element.parentNode.clientWidth),
                        (e.currentWidth = e.element.scrollWidth),
                        (e.previousFontSize = e.currentFontSize),
                        (e.currentFontSize = Math.min(
                            Math.max(e.minSize, (e.availableWidth / e.currentWidth) * e.previousFontSize),
                            e.maxSize
                        )),
                        (e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? 'normal' : 'nowrap')
                },
                g = function (e) {
                    return e.dirty !== a || (e.dirty === a && e.element.parentNode.clientWidth !== e.availableWidth)
                },
                v = function (t) {
                    var i = e.getComputedStyle(t.element, null)
                    ;(t.currentFontSize = parseFloat(i.getPropertyValue('font-size'))),
                        (t.display = i.getPropertyValue('display')),
                        (t.whiteSpace = i.getPropertyValue('white-space'))
                },
                p = function (e) {
                    var t = !1
                    return (
                        !e.preStyleTestCompleted &&
                        (/inline-/.test(e.display) || ((t = !0), (e.display = 'inline-block')),
                        'nowrap' !== e.whiteSpace && ((t = !0), (e.whiteSpace = 'nowrap')),
                        (e.preStyleTestCompleted = !0),
                        t)
                    )
                },
                m = function (e) {
                    ;(e.element.style.whiteSpace = e.whiteSpace),
                        (e.element.style.display = e.display),
                        (e.element.style.fontSize = e.currentFontSize + 'px')
                },
                f = function (e) {
                    e.element.dispatchEvent(
                        new CustomEvent('fit', {
                            detail: {
                                oldValue: e.previousFontSize,
                                newValue: e.currentFontSize,
                                scaleFactor: e.currentFontSize / e.previousFontSize,
                            },
                        })
                    )
                },
                b = function (e, t) {
                    return function () {
                        ;(e.dirty = t), e.active && l()
                    }
                },
                w = function (e) {
                    return function () {
                        ;(r = r.filter(function (t) {
                            return t.element !== e.element
                        })),
                            e.observeMutations && e.observer.disconnect(),
                            (e.element.style.whiteSpace = e.originalStyle.whiteSpace),
                            (e.element.style.display = e.originalStyle.display),
                            (e.element.style.fontSize = e.originalStyle.fontSize)
                    }
                },
                E = function (e) {
                    return function () {
                        e.active || ((e.active = !0), l())
                    }
                },
                R = function (e) {
                    return function () {
                        return (e.active = !1)
                    }
                },
                S = function (e) {
                    e.observeMutations &&
                        ((e.observer = new MutationObserver(b(e, s))),
                        e.observer.observe(e.element, e.observeMutations))
                },
                A = {
                    minSize: 16,
                    maxSize: 512,
                    multiLine: !0,
                    observeMutations: 'MutationObserver' in e && { subtree: !0, childList: !0, characterData: !0 },
                },
                k = null,
                L = function () {
                    e.clearTimeout(k), (k = e.setTimeout(d(a), P.observeWindowDelay))
                },
                C = ['resize', 'orientationchange']
            return (
                Object.defineProperty(P, 'observeWindow', {
                    set: function (t) {
                        var i = (t ? 'add' : 'remove') + 'EventListener'
                        C.forEach(function (t) {
                            e[i](t, L)
                        })
                    },
                }),
                (P.observeWindow = !0),
                (P.observeWindowDelay = 100),
                (P.fitAll = d(n)),
                P
            )
        }
        function x(e, t) {
            var i = y({}, A, t),
                s = e.map(function (e) {
                    var t = y({}, i, { element: e, active: !0 })
                    return (
                        (function (e) {
                            ;(e.originalStyle = {
                                whiteSpace: e.element.style.whiteSpace,
                                display: e.element.style.display,
                                fontSize: e.element.style.fontSize,
                            }),
                                S(e),
                                (e.newbie = !0),
                                (e.dirty = !0),
                                r.push(e)
                        })(t),
                        { element: e, fit: b(t, n), unfreeze: E(t), freeze: R(t), unsubscribe: w(t) }
                    )
                })
            return l(), s
        }
        function P(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            return 'string' == typeof e ? x(t(document.querySelectorAll(e)), i) : x([e], i)[0]
        }
    })('undefined' == typeof window ? null : window))
class E {
    constructor(e) {
        ;(this.Reveal = e), (this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this))
    }
    shouldPreload(e) {
        let t = this.Reveal.getConfig().preloadIframes
        return 'boolean' != typeof t && (t = e.hasAttribute('data-preload')), t
    }
    load(e, i = {}) {
        ;(e.style.display = this.Reveal.getConfig().display),
            t(e, 'img[data-src], video[data-src], audio[data-src], iframe[data-src]').forEach(e => {
                ;('IFRAME' !== e.tagName || this.shouldPreload(e)) &&
                    (e.setAttribute('src', e.getAttribute('data-src')),
                    e.setAttribute('data-lazy-loaded', ''),
                    e.removeAttribute('data-src'))
            }),
            t(e, 'video, audio').forEach(e => {
                let i = 0
                t(e, 'source[data-src]').forEach(e => {
                    e.setAttribute('src', e.getAttribute('data-src')),
                        e.removeAttribute('data-src'),
                        e.setAttribute('data-lazy-loaded', ''),
                        (i += 1)
                }),
                    v && 'VIDEO' === e.tagName && e.setAttribute('playsinline', ''),
                    i > 0 && e.load()
            })
        let s = e.slideBackgroundElement
        if (s) {
            s.style.display = 'block'
            let t = e.slideBackgroundContentElement,
                a = e.getAttribute('data-background-iframe')
            if (!1 === s.hasAttribute('data-loaded')) {
                s.setAttribute('data-loaded', 'true')
                let n = e.getAttribute('data-background-image'),
                    r = e.getAttribute('data-background-video'),
                    o = e.hasAttribute('data-background-video-loop'),
                    l = e.hasAttribute('data-background-video-muted')
                if (n)
                    /^data:/.test(n.trim())
                        ? (t.style.backgroundImage = `url(${n.trim()})`)
                        : (t.style.backgroundImage = n
                              .split(',')
                              .map(e => `url(${encodeURI(e.trim())})`)
                              .join(','))
                else if (r && !this.Reveal.isSpeakerNotes()) {
                    let e = document.createElement('video')
                    o && e.setAttribute('loop', ''),
                        l && (e.muted = !0),
                        v && ((e.muted = !0), e.setAttribute('playsinline', '')),
                        r.split(',').forEach(t => {
                            let i = ((e = '') => h[e.split('.').pop()])(t)
                            e.innerHTML += i ? `<source src="${t}" type="${i}">` : `<source src="${t}">`
                        }),
                        t.appendChild(e)
                } else if (a && !0 !== i.excludeIframes) {
                    let e = document.createElement('iframe')
                    e.setAttribute('allowfullscreen', ''),
                        e.setAttribute('mozallowfullscreen', ''),
                        e.setAttribute('webkitallowfullscreen', ''),
                        e.setAttribute('allow', 'autoplay'),
                        e.setAttribute('data-src', a),
                        (e.style.width = '100%'),
                        (e.style.height = '100%'),
                        (e.style.maxHeight = '100%'),
                        (e.style.maxWidth = '100%'),
                        t.appendChild(e)
                }
            }
            let n = t.querySelector('iframe[data-src]')
            n &&
                this.shouldPreload(s) &&
                !/autoplay=(1|true|yes)/gi.test(a) &&
                n.getAttribute('src') !== a &&
                n.setAttribute('src', a)
        }
        this.layout(e)
    }
    layout(e) {
        Array.from(e.querySelectorAll('.r-fit-text')).forEach(e => {
            w(e, {
                minSize: 24,
                maxSize: 0.8 * this.Reveal.getConfig().height,
                observeMutations: !1,
                observeWindow: !1,
            })
        })
    }
    unload(e) {
        e.style.display = 'none'
        let i = this.Reveal.getSlideBackground(e)
        i &&
            ((i.style.display = 'none'),
            t(i, 'iframe[src]').forEach(e => {
                e.removeAttribute('src')
            })),
            t(e, 'video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]').forEach(
                e => {
                    e.setAttribute('data-src', e.getAttribute('src')), e.removeAttribute('src')
                }
            ),
            t(e, 'video[data-lazy-loaded] source[src], audio source[src]').forEach(e => {
                e.setAttribute('data-src', e.getAttribute('src')), e.removeAttribute('src')
            })
    }
    formatEmbeddedContent() {
        let e = (e, i, s) => {
            t(this.Reveal.getSlidesElement(), 'iframe[' + e + '*="' + i + '"]').forEach(t => {
                let i = t.getAttribute(e)
                i && -1 === i.indexOf(s) && t.setAttribute(e, i + (/\?/.test(i) ? '&' : '?') + s)
            })
        }
        e('src', 'youtube.com/embed/', 'enablejsapi=1'),
            e('data-src', 'youtube.com/embed/', 'enablejsapi=1'),
            e('src', 'player.vimeo.com/', 'api=1'),
            e('data-src', 'player.vimeo.com/', 'api=1')
    }
    startEmbeddedContent(e) {
        e &&
            !this.Reveal.isSpeakerNotes() &&
            (t(e, 'img[src$=".gif"]').forEach(e => {
                e.setAttribute('src', e.getAttribute('src'))
            }),
            t(e, 'video, audio').forEach(e => {
                if (r(e, '.fragment') && !r(e, '.fragment.visible')) return
                let t = this.Reveal.getConfig().autoPlayMedia
                if (
                    ('boolean' != typeof t && (t = e.hasAttribute('data-autoplay') || !!r(e, '.slide-background')),
                    t && 'function' == typeof e.play)
                )
                    if (e.readyState > 1) this.startEmbeddedMedia({ target: e })
                    else if (v) {
                        let t = e.play()
                        t &&
                            'function' == typeof t.catch &&
                            !1 === e.controls &&
                            t.catch(() => {
                                ;(e.controls = !0),
                                    e.addEventListener('play', () => {
                                        e.controls = !1
                                    })
                            })
                    } else
                        e.removeEventListener('loadeddata', this.startEmbeddedMedia),
                            e.addEventListener('loadeddata', this.startEmbeddedMedia)
            }),
            t(e, 'iframe[src]').forEach(e => {
                ;(r(e, '.fragment') && !r(e, '.fragment.visible')) || this.startEmbeddedIframe({ target: e })
            }),
            t(e, 'iframe[data-src]').forEach(e => {
                ;(r(e, '.fragment') && !r(e, '.fragment.visible')) ||
                    (e.getAttribute('src') !== e.getAttribute('data-src') &&
                        (e.removeEventListener('load', this.startEmbeddedIframe),
                        e.addEventListener('load', this.startEmbeddedIframe),
                        e.setAttribute('src', e.getAttribute('data-src'))))
            }))
    }
    startEmbeddedMedia(e) {
        let t = !!r(e.target, 'html'),
            i = !!r(e.target, '.present')
        t && i && ((e.target.currentTime = 0), e.target.play()),
            e.target.removeEventListener('loadeddata', this.startEmbeddedMedia)
    }
    startEmbeddedIframe(e) {
        let t = e.target
        if (t && t.contentWindow) {
            let i = !!r(e.target, 'html'),
                s = !!r(e.target, '.present')
            if (i && s) {
                let e = this.Reveal.getConfig().autoPlayMedia
                'boolean' != typeof e && (e = t.hasAttribute('data-autoplay') || !!r(t, '.slide-background')),
                    /youtube\.com\/embed\//.test(t.getAttribute('src')) && e
                        ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
                        : /player\.vimeo\.com\//.test(t.getAttribute('src')) && e
                        ? t.contentWindow.postMessage('{"method":"play"}', '*')
                        : t.contentWindow.postMessage('slide:start', '*')
            }
        }
    }
    stopEmbeddedContent(i, s = {}) {
        ;(s = e({ unloadIframes: !0 }, s)),
            i &&
                i.parentNode &&
                (t(i, 'video, audio').forEach(e => {
                    e.hasAttribute('data-ignore') ||
                        'function' != typeof e.pause ||
                        (e.setAttribute('data-paused-by-reveal', ''), e.pause())
                }),
                t(i, 'iframe').forEach(e => {
                    e.contentWindow && e.contentWindow.postMessage('slide:stop', '*'),
                        e.removeEventListener('load', this.startEmbeddedIframe)
                }),
                t(i, 'iframe[src*="youtube.com/embed/"]').forEach(e => {
                    !e.hasAttribute('data-ignore') &&
                        e.contentWindow &&
                        'function' == typeof e.contentWindow.postMessage &&
                        e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
                }),
                t(i, 'iframe[src*="player.vimeo.com/"]').forEach(e => {
                    !e.hasAttribute('data-ignore') &&
                        e.contentWindow &&
                        'function' == typeof e.contentWindow.postMessage &&
                        e.contentWindow.postMessage('{"method":"pause"}', '*')
                }),
                !0 === s.unloadIframes &&
                    t(i, 'iframe[data-src]').forEach(e => {
                        e.setAttribute('src', 'about:blank'), e.removeAttribute('src')
                    }))
    }
}
class R {
    constructor(e) {
        this.Reveal = e
    }
    render() {
        ;(this.element = document.createElement('div')),
            (this.element.className = 'slide-number'),
            this.Reveal.getRevealElement().appendChild(this.element)
    }
    configure(e, t) {
        let i = 'none'
        e.slideNumber &&
            !this.Reveal.isPrintingPDF() &&
            ('all' === e.showSlideNumber || ('speaker' === e.showSlideNumber && this.Reveal.isSpeakerNotes())) &&
            (i = 'block'),
            (this.element.style.display = i)
    }
    update() {
        this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber())
    }
    getSlideNumber(e = this.Reveal.getCurrentSlide()) {
        let t,
            i = this.Reveal.getConfig(),
            s = 'h.v'
        if ('function' == typeof i.slideNumber) t = i.slideNumber(e)
        else {
            'string' == typeof i.slideNumber && (s = i.slideNumber),
                /c/.test(s) || 1 !== this.Reveal.getHorizontalSlides().length || (s = 'c')
            let a = e && 'uncounted' === e.dataset.visibility ? 0 : 1
            switch (((t = []), s)) {
                case 'c':
                    t.push(this.Reveal.getSlidePastCount(e) + a)
                    break
                case 'c/t':
                    t.push(this.Reveal.getSlidePastCount(e) + a, '/', this.Reveal.getTotalSlides())
                    break
                default:
                    let i = this.Reveal.getIndices(e)
                    t.push(i.h + a)
                    let n = 'h/v' === s ? '/' : '.'
                    this.Reveal.isVerticalSlide(e) && t.push(n, i.v + 1)
            }
        }
        let a = '#' + this.Reveal.location.getHash(e)
        return this.formatNumber(t[0], t[1], t[2], a)
    }
    formatNumber(e, t, i, s = '#' + this.Reveal.location.getHash()) {
        return 'number' != typeof i || isNaN(i)
            ? `<a href="${s}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t</a>`
            : `<a href="${s}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t<span class="slide-number-delimiter">${t}</span>\n\t\t\t\t\t<span class="slide-number-b">${i}</span>\n\t\t\t\t\t</a>`
    }
    destroy() {
        this.element.remove()
    }
}
const S = e => {
    let t = e.match(/^#([0-9a-f]{3})$/i)
    if (t && t[1])
        return (
            (t = t[1]),
            { r: 17 * parseInt(t.charAt(0), 16), g: 17 * parseInt(t.charAt(1), 16), b: 17 * parseInt(t.charAt(2), 16) }
        )
    let i = e.match(/^#([0-9a-f]{6})$/i)
    if (i && i[1])
        return (
            (i = i[1]),
            { r: parseInt(i.slice(0, 2), 16), g: parseInt(i.slice(2, 4), 16), b: parseInt(i.slice(4, 6), 16) }
        )
    let s = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i)
    if (s) return { r: parseInt(s[1], 10), g: parseInt(s[2], 10), b: parseInt(s[3], 10) }
    let a = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i)
    return a ? { r: parseInt(a[1], 10), g: parseInt(a[2], 10), b: parseInt(a[3], 10), a: parseFloat(a[4]) } : null
}
class A {
    constructor(e) {
        this.Reveal = e
    }
    render() {
        ;(this.element = document.createElement('div')),
            (this.element.className = 'backgrounds'),
            this.Reveal.getRevealElement().appendChild(this.element)
    }
    create() {
        ;(this.element.innerHTML = ''),
            this.element.classList.add('no-transition'),
            this.Reveal.getHorizontalSlides().forEach(e => {
                let i = this.createBackground(e, this.element)
                t(e, 'section').forEach(e => {
                    this.createBackground(e, i), i.classList.add('stack')
                })
            }),
            this.Reveal.getConfig().parallaxBackgroundImage
                ? ((this.element.style.backgroundImage =
                      'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")'),
                  (this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize),
                  (this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat),
                  (this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition),
                  setTimeout(() => {
                      this.Reveal.getRevealElement().classList.add('has-parallax-background')
                  }, 1))
                : ((this.element.style.backgroundImage = ''),
                  this.Reveal.getRevealElement().classList.remove('has-parallax-background'))
    }
    createBackground(e, t) {
        let i = document.createElement('div')
        i.className = 'slide-background ' + e.className.replace(/present|past|future/, '')
        let s = document.createElement('div')
        return (
            (s.className = 'slide-background-content'),
            i.appendChild(s),
            t.appendChild(i),
            (e.slideBackgroundElement = i),
            (e.slideBackgroundContentElement = s),
            this.sync(e),
            i
        )
    }
    sync(e) {
        const t = e.slideBackgroundElement,
            i = e.slideBackgroundContentElement,
            s = {
                background: e.getAttribute('data-background'),
                backgroundSize: e.getAttribute('data-background-size'),
                backgroundImage: e.getAttribute('data-background-image'),
                backgroundVideo: e.getAttribute('data-background-video'),
                backgroundIframe: e.getAttribute('data-background-iframe'),
                backgroundColor: e.getAttribute('data-background-color'),
                backgroundRepeat: e.getAttribute('data-background-repeat'),
                backgroundPosition: e.getAttribute('data-background-position'),
                backgroundTransition: e.getAttribute('data-background-transition'),
                backgroundOpacity: e.getAttribute('data-background-opacity'),
            },
            a = e.hasAttribute('data-preload')
        e.classList.remove('has-dark-background'),
            e.classList.remove('has-light-background'),
            t.removeAttribute('data-loaded'),
            t.removeAttribute('data-background-hash'),
            t.removeAttribute('data-background-size'),
            t.removeAttribute('data-background-transition'),
            (t.style.backgroundColor = ''),
            (i.style.backgroundSize = ''),
            (i.style.backgroundRepeat = ''),
            (i.style.backgroundPosition = ''),
            (i.style.backgroundImage = ''),
            (i.style.opacity = ''),
            (i.innerHTML = ''),
            s.background &&
                (/^(http|file|\/\/)/gi.test(s.background) ||
                /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(s.background)
                    ? e.setAttribute('data-background-image', s.background)
                    : (t.style.background = s.background)),
            (s.background || s.backgroundColor || s.backgroundImage || s.backgroundVideo || s.backgroundIframe) &&
                t.setAttribute(
                    'data-background-hash',
                    s.background +
                        s.backgroundSize +
                        s.backgroundImage +
                        s.backgroundVideo +
                        s.backgroundIframe +
                        s.backgroundColor +
                        s.backgroundRepeat +
                        s.backgroundPosition +
                        s.backgroundTransition +
                        s.backgroundOpacity
                ),
            s.backgroundSize && t.setAttribute('data-background-size', s.backgroundSize),
            s.backgroundColor && (t.style.backgroundColor = s.backgroundColor),
            s.backgroundTransition && t.setAttribute('data-background-transition', s.backgroundTransition),
            a && t.setAttribute('data-preload', ''),
            s.backgroundSize && (i.style.backgroundSize = s.backgroundSize),
            s.backgroundRepeat && (i.style.backgroundRepeat = s.backgroundRepeat),
            s.backgroundPosition && (i.style.backgroundPosition = s.backgroundPosition),
            s.backgroundOpacity && (i.style.opacity = s.backgroundOpacity)
        let n = s.backgroundColor
        if (!n || !S(n)) {
            let e = window.getComputedStyle(t)
            e && e.backgroundColor && (n = e.backgroundColor)
        }
        if (n) {
            const t = S(n)
            t &&
                0 !== t.a &&
                ('string' == typeof (r = n) && (r = S(r)),
                (r ? (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 : null) < 128
                    ? e.classList.add('has-dark-background')
                    : e.classList.add('has-light-background'))
        }
        var r
    }
    update(e = !1) {
        let i = this.Reveal.getCurrentSlide(),
            s = this.Reveal.getIndices(),
            a = null,
            n = this.Reveal.getConfig().rtl ? 'future' : 'past',
            r = this.Reveal.getConfig().rtl ? 'past' : 'future'
        if (
            (Array.from(this.element.childNodes).forEach((i, o) => {
                i.classList.remove('past', 'present', 'future'),
                    o < s.h ? i.classList.add(n) : o > s.h ? i.classList.add(r) : (i.classList.add('present'), (a = i)),
                    (e || o === s.h) &&
                        t(i, '.slide-background').forEach((e, t) => {
                            e.classList.remove('past', 'present', 'future'),
                                t < s.v
                                    ? e.classList.add('past')
                                    : t > s.v
                                    ? e.classList.add('future')
                                    : (e.classList.add('present'), o === s.h && (a = e))
                        })
            }),
            this.previousBackground &&
                this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
                    unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground),
                }),
            a)
        ) {
            this.Reveal.slideContent.startEmbeddedContent(a)
            let e = a.querySelector('.slide-background-content')
            if (e) {
                let t = e.style.backgroundImage || ''
                ;/\.gif/i.test(t) &&
                    ((e.style.backgroundImage = ''), window.getComputedStyle(e).opacity, (e.style.backgroundImage = t))
            }
            let t = this.previousBackground ? this.previousBackground.getAttribute('data-background-hash') : null,
                i = a.getAttribute('data-background-hash')
            i && i === t && a !== this.previousBackground && this.element.classList.add('no-transition'),
                (this.previousBackground = a)
        }
        i &&
            ['has-light-background', 'has-dark-background'].forEach(e => {
                i.classList.contains(e)
                    ? this.Reveal.getRevealElement().classList.add(e)
                    : this.Reveal.getRevealElement().classList.remove(e)
            }, this),
            setTimeout(() => {
                this.element.classList.remove('no-transition')
            }, 1)
    }
    updateParallax() {
        let e = this.Reveal.getIndices()
        if (this.Reveal.getConfig().parallaxBackgroundImage) {
            let t,
                i,
                s = this.Reveal.getHorizontalSlides(),
                a = this.Reveal.getVerticalSlides(),
                n = this.element.style.backgroundSize.split(' ')
            1 === n.length ? (t = i = parseInt(n[0], 10)) : ((t = parseInt(n[0], 10)), (i = parseInt(n[1], 10)))
            let r,
                o,
                l = this.element.offsetWidth,
                d = s.length
            ;(r =
                'number' == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal
                    ? this.Reveal.getConfig().parallaxBackgroundHorizontal
                    : d > 1
                    ? (t - l) / (d - 1)
                    : 0),
                (o = r * e.h * -1)
            let c,
                h,
                u = this.element.offsetHeight,
                g = a.length
            ;(c =
                'number' == typeof this.Reveal.getConfig().parallaxBackgroundVertical
                    ? this.Reveal.getConfig().parallaxBackgroundVertical
                    : (i - u) / (g - 1)),
                (h = g > 0 ? c * e.v : 0),
                (this.element.style.backgroundPosition = o + 'px ' + -h + 'px')
        }
    }
    destroy() {
        this.element.remove()
    }
}
const k = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/,
    L = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/
let C = 0
class x {
    constructor(e) {
        this.Reveal = e
    }
    run(e, t) {
        this.reset()
        let i = this.Reveal.getSlides(),
            s = i.indexOf(t),
            a = i.indexOf(e)
        if (
            e.hasAttribute('data-auto-animate') &&
            t.hasAttribute('data-auto-animate') &&
            e.getAttribute('data-auto-animate-id') === t.getAttribute('data-auto-animate-id') &&
            !(s > a ? t : e).hasAttribute('data-auto-animate-restart')
        ) {
            this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || l()
            let i = this.getAutoAnimateOptions(t)
            ;(e.dataset.autoAnimate = 'pending'),
                (t.dataset.autoAnimate = 'pending'),
                (i.slideDirection = s > a ? 'forward' : 'backward')
            let n = this.getAutoAnimatableElements(e, t).map(e =>
                this.autoAnimateElements(e.from, e.to, e.options || {}, i, C++)
            )
            if ('false' !== t.dataset.autoAnimateUnmatched && !0 === this.Reveal.getConfig().autoAnimateUnmatched) {
                let e = 0.8 * i.duration,
                    s = 0.2 * i.duration
                this.getUnmatchedAutoAnimateElements(t).forEach(e => {
                    let t = this.getAutoAnimateOptions(e, i),
                        s = 'unmatched'
                    ;(t.duration === i.duration && t.delay === i.delay) ||
                        ((s = 'unmatched-' + C++),
                        n.push(
                            `[data-auto-animate="running"] [data-auto-animate-target="${s}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`
                        )),
                        (e.dataset.autoAnimateTarget = s)
                }, this),
                    n.push(
                        `[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e}s ease ${s}s; }`
                    )
            }
            ;(this.autoAnimateStyleSheet.innerHTML = n.join('')),
                requestAnimationFrame(() => {
                    this.autoAnimateStyleSheet &&
                        (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, (t.dataset.autoAnimate = 'running'))
                }),
                this.Reveal.dispatchEvent({
                    type: 'autoanimate',
                    data: { fromSlide: e, toSlide: t, sheet: this.autoAnimateStyleSheet },
                })
        }
    }
    reset() {
        t(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach(e => {
            e.dataset.autoAnimate = ''
        }),
            t(this.Reveal.getRevealElement(), '[data-auto-animate-target]').forEach(e => {
                delete e.dataset.autoAnimateTarget
            }),
            this.autoAnimateStyleSheet &&
                this.autoAnimateStyleSheet.parentNode &&
                (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),
                (this.autoAnimateStyleSheet = null))
    }
    autoAnimateElements(e, t, i, s, a) {
        ;(e.dataset.autoAnimateTarget = ''), (t.dataset.autoAnimateTarget = a)
        let n = this.getAutoAnimateOptions(t, s)
        void 0 !== i.delay && (n.delay = i.delay),
            void 0 !== i.duration && (n.duration = i.duration),
            void 0 !== i.easing && (n.easing = i.easing)
        let r = this.getAutoAnimatableProperties('from', e, i),
            o = this.getAutoAnimatableProperties('to', t, i)
        if (t.classList.contains('fragment') && (delete o.styles.opacity, e.classList.contains('fragment'))) {
            ;(e.className.match(L) || [''])[0] === (t.className.match(L) || [''])[0] &&
                'forward' === s.slideDirection &&
                t.classList.add('visible', 'disabled')
        }
        if (!1 !== i.translate || !1 !== i.scale) {
            let e = this.Reveal.getScale(),
                t = { x: (r.x - o.x) / e, y: (r.y - o.y) / e, scaleX: r.width / o.width, scaleY: r.height / o.height }
            ;(t.x = Math.round(1e3 * t.x) / 1e3),
                (t.y = Math.round(1e3 * t.y) / 1e3),
                (t.scaleX = Math.round(1e3 * t.scaleX) / 1e3),
                (t.scaleX = Math.round(1e3 * t.scaleX) / 1e3)
            let s = !1 !== i.translate && (0 !== t.x || 0 !== t.y),
                a = !1 !== i.scale && (0 !== t.scaleX || 0 !== t.scaleY)
            if (s || a) {
                let e = []
                s && e.push(`translate(${t.x}px, ${t.y}px)`),
                    a && e.push(`scale(${t.scaleX}, ${t.scaleY})`),
                    (r.styles.transform = e.join(' ')),
                    (r.styles['transform-origin'] = 'top left'),
                    (o.styles.transform = 'none')
            }
        }
        for (let e in o.styles) {
            const t = o.styles[e],
                i = r.styles[e]
            t === i
                ? delete o.styles[e]
                : (!0 === t.explicitValue && (o.styles[e] = t.value), !0 === i.explicitValue && (r.styles[e] = i.value))
        }
        let l = '',
            d = Object.keys(o.styles)
        if (d.length > 0) {
            ;(r.styles.transition = 'none'),
                (o.styles.transition = `all ${n.duration}s ${n.easing} ${n.delay}s`),
                (o.styles['transition-property'] = d.join(', ')),
                (o.styles['will-change'] = d.join(', ')),
                (l =
                    '[data-auto-animate-target="' +
                    a +
                    '"] {' +
                    Object.keys(r.styles)
                        .map(e => e + ': ' + r.styles[e] + ' !important;')
                        .join('') +
                    '}[data-auto-animate="running"] [data-auto-animate-target="' +
                    a +
                    '"] {' +
                    Object.keys(o.styles)
                        .map(e => e + ': ' + o.styles[e] + ' !important;')
                        .join('') +
                    '}')
        }
        return l
    }
    getAutoAnimateOptions(t, i) {
        let s = {
            easing: this.Reveal.getConfig().autoAnimateEasing,
            duration: this.Reveal.getConfig().autoAnimateDuration,
            delay: 0,
        }
        if (((s = e(s, i)), t.parentNode)) {
            let e = r(t.parentNode, '[data-auto-animate-target]')
            e && (s = this.getAutoAnimateOptions(e, s))
        }
        return (
            t.dataset.autoAnimateEasing && (s.easing = t.dataset.autoAnimateEasing),
            t.dataset.autoAnimateDuration && (s.duration = parseFloat(t.dataset.autoAnimateDuration)),
            t.dataset.autoAnimateDelay && (s.delay = parseFloat(t.dataset.autoAnimateDelay)),
            s
        )
    }
    getAutoAnimatableProperties(e, t, i) {
        let s = this.Reveal.getConfig(),
            a = { styles: [] }
        if (!1 !== i.translate || !1 !== i.scale) {
            let e
            if ('function' == typeof i.measure) e = i.measure(t)
            else if (s.center) e = t.getBoundingClientRect()
            else {
                let i = this.Reveal.getScale()
                e = { x: t.offsetLeft * i, y: t.offsetTop * i, width: t.offsetWidth * i, height: t.offsetHeight * i }
            }
            ;(a.x = e.x), (a.y = e.y), (a.width = e.width), (a.height = e.height)
        }
        const n = getComputedStyle(t)
        return (
            (i.styles || s.autoAnimateStyles).forEach(t => {
                let i
                'string' == typeof t && (t = { property: t }),
                    (i =
                        void 0 !== t.from && 'from' === e
                            ? { value: t.from, explicitValue: !0 }
                            : void 0 !== t.to && 'to' === e
                            ? { value: t.to, explicitValue: !0 }
                            : n[t.property]),
                    '' !== i && (a.styles[t.property] = i)
            }),
            a
        )
    }
    getAutoAnimatableElements(e, t) {
        let i = (
                'function' == typeof this.Reveal.getConfig().autoAnimateMatcher
                    ? this.Reveal.getConfig().autoAnimateMatcher
                    : this.getAutoAnimatePairs
            ).call(this, e, t),
            s = []
        return i.filter((e, t) => {
            if (-1 === s.indexOf(e.to)) return s.push(e.to), !0
        })
    }
    getAutoAnimatePairs(e, t) {
        let i = []
        const s = 'h1, h2, h3, h4, h5, h6, p, li'
        return (
            this.findAutoAnimateMatches(i, e, t, '[data-id]', e => e.nodeName + ':::' + e.getAttribute('data-id')),
            this.findAutoAnimateMatches(i, e, t, s, e => e.nodeName + ':::' + e.innerText),
            this.findAutoAnimateMatches(
                i,
                e,
                t,
                'img, video, iframe',
                e => e.nodeName + ':::' + (e.getAttribute('src') || e.getAttribute('data-src'))
            ),
            this.findAutoAnimateMatches(i, e, t, 'pre', e => e.nodeName + ':::' + e.innerText),
            i.forEach(e => {
                n(e.from, s)
                    ? (e.options = { scale: !1 })
                    : n(e.from, 'pre') &&
                      ((e.options = { scale: !1, styles: ['width', 'height'] }),
                      this.findAutoAnimateMatches(i, e.from, e.to, '.hljs .hljs-ln-code', e => e.textContent, {
                          scale: !1,
                          styles: [],
                          measure: this.getLocalBoundingBox.bind(this),
                      }),
                      this.findAutoAnimateMatches(
                          i,
                          e.from,
                          e.to,
                          '.hljs .hljs-ln-line[data-line-number]',
                          e => e.getAttribute('data-line-number'),
                          { scale: !1, styles: ['width'], measure: this.getLocalBoundingBox.bind(this) }
                      ))
            }, this),
            i
        )
    }
    getLocalBoundingBox(e) {
        const t = this.Reveal.getScale()
        return {
            x: Math.round(e.offsetLeft * t * 100) / 100,
            y: Math.round(e.offsetTop * t * 100) / 100,
            width: Math.round(e.offsetWidth * t * 100) / 100,
            height: Math.round(e.offsetHeight * t * 100) / 100,
        }
    }
    findAutoAnimateMatches(e, t, i, s, a, n) {
        let r = {},
            o = {}
        ;[].slice.call(t.querySelectorAll(s)).forEach((e, t) => {
            const i = a(e)
            'string' == typeof i && i.length && ((r[i] = r[i] || []), r[i].push(e))
        }),
            [].slice.call(i.querySelectorAll(s)).forEach((t, i) => {
                const s = a(t)
                let l
                if (((o[s] = o[s] || []), o[s].push(t), r[s])) {
                    const e = o[s].length - 1,
                        t = r[s].length - 1
                    r[s][e] ? ((l = r[s][e]), (r[s][e] = null)) : r[s][t] && ((l = r[s][t]), (r[s][t] = null))
                }
                l && e.push({ from: l, to: t, options: n })
            })
    }
    getUnmatchedAutoAnimateElements(e) {
        return [].slice.call(e.children).reduce((e, t) => {
            const i = t.querySelector('[data-auto-animate-target]')
            return (
                t.hasAttribute('data-auto-animate-target') || i || e.push(t),
                t.querySelector('[data-auto-animate-target]') &&
                    (e = e.concat(this.getUnmatchedAutoAnimateElements(t))),
                e
            )
        }, [])
    }
}
class P {
    constructor(e) {
        this.Reveal = e
    }
    configure(e, t) {
        !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable()
    }
    disable() {
        t(this.Reveal.getSlidesElement(), '.fragment').forEach(e => {
            e.classList.add('visible'), e.classList.remove('current-fragment')
        })
    }
    enable() {
        t(this.Reveal.getSlidesElement(), '.fragment').forEach(e => {
            e.classList.remove('visible'), e.classList.remove('current-fragment')
        })
    }
    availableRoutes() {
        let e = this.Reveal.getCurrentSlide()
        if (e && this.Reveal.getConfig().fragments) {
            let t = e.querySelectorAll('.fragment:not(.disabled)'),
                i = e.querySelectorAll('.fragment:not(.disabled):not(.visible)')
            return { prev: t.length - i.length > 0, next: !!i.length }
        }
        return { prev: !1, next: !1 }
    }
    sort(e, t = !1) {
        e = Array.from(e)
        let i = [],
            s = [],
            a = []
        e.forEach(e => {
            if (e.hasAttribute('data-fragment-index')) {
                let t = parseInt(e.getAttribute('data-fragment-index'), 10)
                i[t] || (i[t] = []), i[t].push(e)
            } else s.push([e])
        }),
            (i = i.concat(s))
        let n = 0
        return (
            i.forEach(e => {
                e.forEach(e => {
                    a.push(e), e.setAttribute('data-fragment-index', n)
                }),
                    n++
            }),
            !0 === t ? i : a
        )
    }
    sortAll() {
        this.Reveal.getHorizontalSlides().forEach(e => {
            let i = t(e, 'section')
            i.forEach((e, t) => {
                this.sort(e.querySelectorAll('.fragment'))
            }, this),
                0 === i.length && this.sort(e.querySelectorAll('.fragment'))
        })
    }
    update(e, t) {
        let i = { shown: [], hidden: [] },
            s = this.Reveal.getCurrentSlide()
        if (s && this.Reveal.getConfig().fragments && (t = t || this.sort(s.querySelectorAll('.fragment'))).length) {
            let a = 0
            if ('number' != typeof e) {
                let t = this.sort(s.querySelectorAll('.fragment.visible')).pop()
                t && (e = parseInt(t.getAttribute('data-fragment-index') || 0, 10))
            }
            Array.from(t).forEach((t, s) => {
                if (
                    (t.hasAttribute('data-fragment-index') && (s = parseInt(t.getAttribute('data-fragment-index'), 10)),
                    (a = Math.max(a, s)),
                    s <= e)
                ) {
                    let a = t.classList.contains('visible')
                    t.classList.add('visible'),
                        t.classList.remove('current-fragment'),
                        s === e &&
                            (this.Reveal.announceStatus(this.Reveal.getStatusText(t)),
                            t.classList.add('current-fragment'),
                            this.Reveal.slideContent.startEmbeddedContent(t)),
                        a || (i.shown.push(t), this.Reveal.dispatchEvent({ target: t, type: 'visible', bubbles: !1 }))
                } else {
                    let e = t.classList.contains('visible')
                    t.classList.remove('visible'),
                        t.classList.remove('current-fragment'),
                        e &&
                            (this.Reveal.slideContent.stopEmbeddedContent(t),
                            i.hidden.push(t),
                            this.Reveal.dispatchEvent({ target: t, type: 'hidden', bubbles: !1 }))
                }
            }),
                (e = 'number' == typeof e ? e : -1),
                (e = Math.max(Math.min(e, a), -1)),
                s.setAttribute('data-fragment', e)
        }
        return i
    }
    sync(e = this.Reveal.getCurrentSlide()) {
        return this.sort(e.querySelectorAll('.fragment'))
    }
    goto(e, t = 0) {
        let i = this.Reveal.getCurrentSlide()
        if (i && this.Reveal.getConfig().fragments) {
            let s = this.sort(i.querySelectorAll('.fragment:not(.disabled)'))
            if (s.length) {
                if ('number' != typeof e) {
                    let t = this.sort(i.querySelectorAll('.fragment:not(.disabled).visible')).pop()
                    e = t ? parseInt(t.getAttribute('data-fragment-index') || 0, 10) : -1
                }
                e += t
                let a = this.update(e, s)
                return (
                    a.hidden.length &&
                        this.Reveal.dispatchEvent({
                            type: 'fragmenthidden',
                            data: { fragment: a.hidden[0], fragments: a.hidden },
                        }),
                    a.shown.length &&
                        this.Reveal.dispatchEvent({
                            type: 'fragmentshown',
                            data: { fragment: a.shown[0], fragments: a.shown },
                        }),
                    this.Reveal.controls.update(),
                    this.Reveal.progress.update(),
                    this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(),
                    !(!a.shown.length && !a.hidden.length)
                )
            }
        }
        return !1
    }
    next() {
        return this.goto(null, 1)
    }
    prev() {
        return this.goto(null, -1)
    }
}
class N {
    constructor(e) {
        ;(this.Reveal = e), (this.active = !1), (this.onSlideClicked = this.onSlideClicked.bind(this))
    }
    activate() {
        if (this.Reveal.getConfig().overview && !this.isActive()) {
            ;(this.active = !0),
                this.Reveal.getRevealElement().classList.add('overview'),
                this.Reveal.cancelAutoSlide(),
                this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),
                t(this.Reveal.getRevealElement(), '.slides section').forEach(e => {
                    e.classList.contains('stack') || e.addEventListener('click', this.onSlideClicked, !0)
                })
            const e = 70,
                i = this.Reveal.getComputedSlideSize()
            ;(this.overviewSlideWidth = i.width + e),
                (this.overviewSlideHeight = i.height + e),
                this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth),
                this.Reveal.updateSlidesVisibility(),
                this.layout(),
                this.update(),
                this.Reveal.layout()
            const s = this.Reveal.getIndices()
            this.Reveal.dispatchEvent({
                type: 'overviewshown',
                data: { indexh: s.h, indexv: s.v, currentSlide: this.Reveal.getCurrentSlide() },
            })
        }
    }
    layout() {
        this.Reveal.getHorizontalSlides().forEach((e, i) => {
            e.setAttribute('data-index-h', i),
                a(e, 'translate3d(' + i * this.overviewSlideWidth + 'px, 0, 0)'),
                e.classList.contains('stack') &&
                    t(e, 'section').forEach((e, t) => {
                        e.setAttribute('data-index-h', i),
                            e.setAttribute('data-index-v', t),
                            a(e, 'translate3d(0, ' + t * this.overviewSlideHeight + 'px, 0)')
                    })
        }),
            Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e, i) => {
                a(e, 'translate3d(' + i * this.overviewSlideWidth + 'px, 0, 0)'),
                    t(e, '.slide-background').forEach((e, t) => {
                        a(e, 'translate3d(0, ' + t * this.overviewSlideHeight + 'px, 0)')
                    })
            })
    }
    update() {
        const e = Math.min(window.innerWidth, window.innerHeight),
            t = Math.max(e / 5, 150) / e,
            i = this.Reveal.getIndices()
        this.Reveal.transformSlides({
            overview: [
                'scale(' + t + ')',
                'translateX(' + -i.h * this.overviewSlideWidth + 'px)',
                'translateY(' + -i.v * this.overviewSlideHeight + 'px)',
            ].join(' '),
        })
    }
    deactivate() {
        if (this.Reveal.getConfig().overview) {
            ;(this.active = !1),
                this.Reveal.getRevealElement().classList.remove('overview'),
                this.Reveal.getRevealElement().classList.add('overview-deactivating'),
                setTimeout(() => {
                    this.Reveal.getRevealElement().classList.remove('overview-deactivating')
                }, 1),
                this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),
                t(this.Reveal.getRevealElement(), '.slides section').forEach(e => {
                    a(e, ''), e.removeEventListener('click', this.onSlideClicked, !0)
                }),
                t(this.Reveal.getBackgroundsElement(), '.slide-background').forEach(e => {
                    a(e, '')
                }),
                this.Reveal.transformSlides({ overview: '' })
            const e = this.Reveal.getIndices()
            this.Reveal.slide(e.h, e.v),
                this.Reveal.layout(),
                this.Reveal.cueAutoSlide(),
                this.Reveal.dispatchEvent({
                    type: 'overviewhidden',
                    data: { indexh: e.h, indexv: e.v, currentSlide: this.Reveal.getCurrentSlide() },
                })
        }
    }
    toggle(e) {
        'boolean' == typeof e
            ? e
                ? this.activate()
                : this.deactivate()
            : this.isActive()
            ? this.deactivate()
            : this.activate()
    }
    isActive() {
        return this.active
    }
    onSlideClicked(e) {
        if (this.isActive()) {
            e.preventDefault()
            let t = e.target
            for (; t && !t.nodeName.match(/section/gi); ) t = t.parentNode
            if (t && !t.classList.contains('disabled') && (this.deactivate(), t.nodeName.match(/section/gi))) {
                let e = parseInt(t.getAttribute('data-index-h'), 10),
                    i = parseInt(t.getAttribute('data-index-v'), 10)
                this.Reveal.slide(e, i)
            }
        }
    }
}
class M {
    constructor(e) {
        ;(this.Reveal = e),
            (this.shortcuts = {}),
            (this.bindings = {}),
            (this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this)),
            (this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this))
    }
    configure(e, t) {
        'linear' === e.navigationMode
            ? ((this.shortcuts['&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J'] = 'Next slide'),
              (this.shortcuts['&#8592;  ,  &#8593;  ,  P  ,  H  ,  K'] = 'Previous slide'))
            : ((this.shortcuts['N  ,  SPACE'] = 'Next slide'),
              (this.shortcuts['P  ,  Shift SPACE'] = 'Previous slide'),
              (this.shortcuts['&#8592;  ,  H'] = 'Navigate left'),
              (this.shortcuts['&#8594;  ,  L'] = 'Navigate right'),
              (this.shortcuts['&#8593;  ,  K'] = 'Navigate up'),
              (this.shortcuts['&#8595;  ,  J'] = 'Navigate down')),
            (this.shortcuts['Alt + &#8592;/&#8593/&#8594;/&#8595;'] = 'Navigate without fragments'),
            (this.shortcuts['Shift + &#8592;/&#8593/&#8594;/&#8595;'] = 'Jump to first/last slide'),
            (this.shortcuts['B  ,  .'] = 'Pause'),
            (this.shortcuts.F = 'Fullscreen'),
            (this.shortcuts['ESC, O'] = 'Slide overview')
    }
    bind() {
        document.addEventListener('keydown', this.onDocumentKeyDown, !1),
            document.addEventListener('keypress', this.onDocumentKeyPress, !1)
    }
    unbind() {
        document.removeEventListener('keydown', this.onDocumentKeyDown, !1),
            document.removeEventListener('keypress', this.onDocumentKeyPress, !1)
    }
    addKeyBinding(e, t) {
        'object' == typeof e && e.keyCode
            ? (this.bindings[e.keyCode] = { callback: t, key: e.key, description: e.description })
            : (this.bindings[e] = { callback: t, key: null, description: null })
    }
    removeKeyBinding(e) {
        delete this.bindings[e]
    }
    triggerKey(e) {
        this.onDocumentKeyDown({ keyCode: e })
    }
    registerKeyboardShortcut(e, t) {
        this.shortcuts[e] = t
    }
    getShortcuts() {
        return this.shortcuts
    }
    getBindings() {
        return this.bindings
    }
    onDocumentKeyPress(e) {
        e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp()
    }
    onDocumentKeyDown(e) {
        let t = this.Reveal.getConfig()
        if ('function' == typeof t.keyboardCondition && !1 === t.keyboardCondition(e)) return !0
        if ('focused' === t.keyboardCondition && !this.Reveal.isFocused()) return !0
        let i = e.keyCode,
            s = !this.Reveal.isAutoSliding()
        this.Reveal.onUserInput(e)
        let a = document.activeElement && !0 === document.activeElement.isContentEditable,
            n =
                document.activeElement &&
                document.activeElement.tagName &&
                /input|textarea/i.test(document.activeElement.tagName),
            r =
                document.activeElement &&
                document.activeElement.className &&
                /speaker-notes/i.test(document.activeElement.className),
            o =
                !((-1 !== [32, 37, 38, 39, 40, 78, 80].indexOf(e.keyCode) && e.shiftKey) || e.altKey) &&
                (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)
        if (a || n || r || o) return
        let l,
            d = [66, 86, 190, 191]
        if ('object' == typeof t.keyboard)
            for (l in t.keyboard) 'togglePause' === t.keyboard[l] && d.push(parseInt(l, 10))
        if (this.Reveal.isPaused() && -1 === d.indexOf(i)) return !1
        let c = 'linear' === t.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(),
            h = !1
        if ('object' == typeof t.keyboard)
            for (l in t.keyboard)
                if (parseInt(l, 10) === i) {
                    let i = t.keyboard[l]
                    'function' == typeof i
                        ? i.apply(null, [e])
                        : 'string' == typeof i && 'function' == typeof this.Reveal[i] && this.Reveal[i].call(),
                        (h = !0)
                }
        if (!1 === h)
            for (l in this.bindings)
                if (parseInt(l, 10) === i) {
                    let t = this.bindings[l].callback
                    'function' == typeof t
                        ? t.apply(null, [e])
                        : 'string' == typeof t && 'function' == typeof this.Reveal[t] && this.Reveal[t].call(),
                        (h = !0)
                }
        !1 === h &&
            ((h = !0),
            80 === i || 33 === i
                ? this.Reveal.prev({ skipFragments: e.altKey })
                : 78 === i || 34 === i
                ? this.Reveal.next({ skipFragments: e.altKey })
                : 72 === i || 37 === i
                ? e.shiftKey
                    ? this.Reveal.slide(0)
                    : !this.Reveal.overview.isActive() && c
                    ? this.Reveal.prev({ skipFragments: e.altKey })
                    : this.Reveal.left({ skipFragments: e.altKey })
                : 76 === i || 39 === i
                ? e.shiftKey
                    ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1)
                    : !this.Reveal.overview.isActive() && c
                    ? this.Reveal.next({ skipFragments: e.altKey })
                    : this.Reveal.right({ skipFragments: e.altKey })
                : 75 === i || 38 === i
                ? e.shiftKey
                    ? this.Reveal.slide(void 0, 0)
                    : !this.Reveal.overview.isActive() && c
                    ? this.Reveal.prev({ skipFragments: e.altKey })
                    : this.Reveal.up({ skipFragments: e.altKey })
                : 74 === i || 40 === i
                ? e.shiftKey
                    ? this.Reveal.slide(void 0, Number.MAX_VALUE)
                    : !this.Reveal.overview.isActive() && c
                    ? this.Reveal.next({ skipFragments: e.altKey })
                    : this.Reveal.down({ skipFragments: e.altKey })
                : 36 === i
                ? this.Reveal.slide(0)
                : 35 === i
                ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1)
                : 32 === i
                ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(),
                  e.shiftKey
                      ? this.Reveal.prev({ skipFragments: e.altKey })
                      : this.Reveal.next({ skipFragments: e.altKey }))
                : 58 === i || 59 === i || 66 === i || 86 === i || 190 === i || 191 === i
                ? this.Reveal.togglePause()
                : 70 === i
                ? (e => {
                      let t =
                          (e = e || document.documentElement).requestFullscreen ||
                          e.webkitRequestFullscreen ||
                          e.webkitRequestFullScreen ||
                          e.mozRequestFullScreen ||
                          e.msRequestFullscreen
                      t && t.apply(e)
                  })(t.embedded ? this.Reveal.getViewportElement() : document.documentElement)
                : 65 === i
                ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(s)
                : (h = !1)),
            h
                ? e.preventDefault && e.preventDefault()
                : (27 !== i && 79 !== i) ||
                  (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(),
                  e.preventDefault && e.preventDefault()),
            this.Reveal.cueAutoSlide()
    }
}
class D {
    constructor(e) {
        var t, i, s
        ;(s = 1e3),
            (i = 'MAX_REPLACE_STATE_FREQUENCY') in (t = this)
                ? Object.defineProperty(t, i, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                : (t[i] = s),
            (this.Reveal = e),
            (this.writeURLTimeout = 0),
            (this.replaceStateTimestamp = 0),
            (this.onWindowHashChange = this.onWindowHashChange.bind(this))
    }
    bind() {
        window.addEventListener('hashchange', this.onWindowHashChange, !1)
    }
    unbind() {
        window.removeEventListener('hashchange', this.onWindowHashChange, !1)
    }
    getIndicesFromHash(e = window.location.hash) {
        let t = e.replace(/^#\/?/, ''),
            i = t.split('/')
        if (/^[0-9]*$/.test(i[0]) || !t.length) {
            const e = this.Reveal.getConfig()
            let t,
                s = e.hashOneBasedIndex ? 1 : 0,
                a = parseInt(i[0], 10) - s || 0,
                n = parseInt(i[1], 10) - s || 0
            return e.fragmentInURL && ((t = parseInt(i[2], 10)), isNaN(t) && (t = void 0)), { h: a, v: n, f: t }
        }
        {
            let e, i
            ;/\/[-\d]+$/g.test(t) &&
                ((i = parseInt(t.split('/').pop(), 10)), (i = isNaN(i) ? void 0 : i), (t = t.split('/').shift()))
            try {
                e = document.getElementById(decodeURIComponent(t))
            } catch (e) {}
            if (e) return { ...this.Reveal.getIndices(e), f: i }
        }
        return null
    }
    readURL() {
        const e = this.Reveal.getIndices(),
            t = this.getIndicesFromHash()
        t
            ? (t.h === e.h && t.v === e.v && void 0 === t.f) || this.Reveal.slide(t.h, t.v, t.f)
            : this.Reveal.slide(e.h || 0, e.v || 0)
    }
    writeURL(e) {
        let t = this.Reveal.getConfig(),
            i = this.Reveal.getCurrentSlide()
        if ((clearTimeout(this.writeURLTimeout), 'number' == typeof e))
            this.writeURLTimeout = setTimeout(this.writeURL, e)
        else if (i) {
            let e = this.getHash()
            t.history
                ? (window.location.hash = e)
                : t.hash &&
                  ('/' === e
                      ? this.debouncedReplaceState(window.location.pathname + window.location.search)
                      : this.debouncedReplaceState('#' + e))
        }
    }
    replaceState(e) {
        window.history.replaceState(null, null, e), (this.replaceStateTimestamp = Date.now())
    }
    debouncedReplaceState(e) {
        clearTimeout(this.replaceStateTimeout),
            Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY
                ? this.replaceState(e)
                : (this.replaceStateTimeout = setTimeout(() => this.replaceState(e), this.MAX_REPLACE_STATE_FREQUENCY))
    }
    getHash(e) {
        let t = '/',
            i = e || this.Reveal.getCurrentSlide(),
            s = i ? i.getAttribute('id') : null
        s && (s = encodeURIComponent(s))
        let a = this.Reveal.getIndices(e)
        if ((this.Reveal.getConfig().fragmentInURL || (a.f = void 0), 'string' == typeof s && s.length))
            (t = '/' + s), a.f >= 0 && (t += '/' + a.f)
        else {
            let e = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0
            ;(a.h > 0 || a.v > 0 || a.f >= 0) && (t += a.h + e),
                (a.v > 0 || a.f >= 0) && (t += '/' + (a.v + e)),
                a.f >= 0 && (t += '/' + a.f)
        }
        return t
    }
    onWindowHashChange(e) {
        this.readURL()
    }
}
class I {
    constructor(e) {
        ;(this.Reveal = e),
            (this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this)),
            (this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this)),
            (this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this)),
            (this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this)),
            (this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this)),
            (this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this))
    }
    render() {
        const e = this.Reveal.getConfig().rtl,
            i = this.Reveal.getRevealElement()
        ;(this.element = document.createElement('aside')),
            (this.element.className = 'controls'),
            (this.element.innerHTML = `<button class="navigate-left" aria-label="${
                e ? 'next slide' : 'previous slide'
            }"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="${
                e ? 'previous slide' : 'next slide'
            }"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`),
            this.Reveal.getRevealElement().appendChild(this.element),
            (this.controlsLeft = t(i, '.navigate-left')),
            (this.controlsRight = t(i, '.navigate-right')),
            (this.controlsUp = t(i, '.navigate-up')),
            (this.controlsDown = t(i, '.navigate-down')),
            (this.controlsPrev = t(i, '.navigate-prev')),
            (this.controlsNext = t(i, '.navigate-next')),
            (this.controlsRightArrow = this.element.querySelector('.navigate-right')),
            (this.controlsLeftArrow = this.element.querySelector('.navigate-left')),
            (this.controlsDownArrow = this.element.querySelector('.navigate-down'))
    }
    configure(e, t) {
        ;(this.element.style.display = e.controls ? 'block' : 'none'),
            this.element.setAttribute('data-controls-layout', e.controlsLayout),
            this.element.setAttribute('data-controls-back-arrows', e.controlsBackArrows)
    }
    bind() {
        let e = ['touchstart', 'click']
        m && (e = ['touchstart']),
            e.forEach(e => {
                this.controlsLeft.forEach(t => t.addEventListener(e, this.onNavigateLeftClicked, !1)),
                    this.controlsRight.forEach(t => t.addEventListener(e, this.onNavigateRightClicked, !1)),
                    this.controlsUp.forEach(t => t.addEventListener(e, this.onNavigateUpClicked, !1)),
                    this.controlsDown.forEach(t => t.addEventListener(e, this.onNavigateDownClicked, !1)),
                    this.controlsPrev.forEach(t => t.addEventListener(e, this.onNavigatePrevClicked, !1)),
                    this.controlsNext.forEach(t => t.addEventListener(e, this.onNavigateNextClicked, !1))
            })
    }
    unbind() {
        ;['touchstart', 'click'].forEach(e => {
            this.controlsLeft.forEach(t => t.removeEventListener(e, this.onNavigateLeftClicked, !1)),
                this.controlsRight.forEach(t => t.removeEventListener(e, this.onNavigateRightClicked, !1)),
                this.controlsUp.forEach(t => t.removeEventListener(e, this.onNavigateUpClicked, !1)),
                this.controlsDown.forEach(t => t.removeEventListener(e, this.onNavigateDownClicked, !1)),
                this.controlsPrev.forEach(t => t.removeEventListener(e, this.onNavigatePrevClicked, !1)),
                this.controlsNext.forEach(t => t.removeEventListener(e, this.onNavigateNextClicked, !1))
        })
    }
    update() {
        let e = this.Reveal.availableRoutes()
        ;[
            ...this.controlsLeft,
            ...this.controlsRight,
            ...this.controlsUp,
            ...this.controlsDown,
            ...this.controlsPrev,
            ...this.controlsNext,
        ].forEach(e => {
            e.classList.remove('enabled', 'fragmented'), e.setAttribute('disabled', 'disabled')
        }),
            e.left &&
                this.controlsLeft.forEach(e => {
                    e.classList.add('enabled'), e.removeAttribute('disabled')
                }),
            e.right &&
                this.controlsRight.forEach(e => {
                    e.classList.add('enabled'), e.removeAttribute('disabled')
                }),
            e.up &&
                this.controlsUp.forEach(e => {
                    e.classList.add('enabled'), e.removeAttribute('disabled')
                }),
            e.down &&
                this.controlsDown.forEach(e => {
                    e.classList.add('enabled'), e.removeAttribute('disabled')
                }),
            (e.left || e.up) &&
                this.controlsPrev.forEach(e => {
                    e.classList.add('enabled'), e.removeAttribute('disabled')
                }),
            (e.right || e.down) &&
                this.controlsNext.forEach(e => {
                    e.classList.add('enabled'), e.removeAttribute('disabled')
                })
        let t = this.Reveal.getCurrentSlide()
        if (t) {
            let e = this.Reveal.fragments.availableRoutes()
            e.prev &&
                this.controlsPrev.forEach(e => {
                    e.classList.add('fragmented', 'enabled'), e.removeAttribute('disabled')
                }),
                e.next &&
                    this.controlsNext.forEach(e => {
                        e.classList.add('fragmented', 'enabled'), e.removeAttribute('disabled')
                    }),
                this.Reveal.isVerticalSlide(t)
                    ? (e.prev &&
                          this.controlsUp.forEach(e => {
                              e.classList.add('fragmented', 'enabled'), e.removeAttribute('disabled')
                          }),
                      e.next &&
                          this.controlsDown.forEach(e => {
                              e.classList.add('fragmented', 'enabled'), e.removeAttribute('disabled')
                          }))
                    : (e.prev &&
                          this.controlsLeft.forEach(e => {
                              e.classList.add('fragmented', 'enabled'), e.removeAttribute('disabled')
                          }),
                      e.next &&
                          this.controlsRight.forEach(e => {
                              e.classList.add('fragmented', 'enabled'), e.removeAttribute('disabled')
                          }))
        }
        if (this.Reveal.getConfig().controlsTutorial) {
            let t = this.Reveal.getIndices()
            !this.Reveal.hasNavigatedVertically() && e.down
                ? this.controlsDownArrow.classList.add('highlight')
                : (this.controlsDownArrow.classList.remove('highlight'),
                  this.Reveal.getConfig().rtl
                      ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === t.v
                          ? this.controlsLeftArrow.classList.add('highlight')
                          : this.controlsLeftArrow.classList.remove('highlight')
                      : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === t.v
                      ? this.controlsRightArrow.classList.add('highlight')
                      : this.controlsRightArrow.classList.remove('highlight'))
        }
    }
    destroy() {
        this.unbind(), this.element.remove()
    }
    onNavigateLeftClicked(e) {
        e.preventDefault(),
            this.Reveal.onUserInput(),
            'linear' === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left()
    }
    onNavigateRightClicked(e) {
        e.preventDefault(),
            this.Reveal.onUserInput(),
            'linear' === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right()
    }
    onNavigateUpClicked(e) {
        e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up()
    }
    onNavigateDownClicked(e) {
        e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down()
    }
    onNavigatePrevClicked(e) {
        e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev()
    }
    onNavigateNextClicked(e) {
        e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next()
    }
}
class T {
    constructor(e) {
        ;(this.Reveal = e), (this.onProgressClicked = this.onProgressClicked.bind(this))
    }
    render() {
        ;(this.element = document.createElement('div')),
            (this.element.className = 'progress'),
            this.Reveal.getRevealElement().appendChild(this.element),
            (this.bar = document.createElement('span')),
            this.element.appendChild(this.bar)
    }
    configure(e, t) {
        this.element.style.display = e.progress ? 'block' : 'none'
    }
    bind() {
        this.Reveal.getConfig().progress &&
            this.element &&
            this.element.addEventListener('click', this.onProgressClicked, !1)
    }
    unbind() {
        this.Reveal.getConfig().progress &&
            this.element &&
            this.element.removeEventListener('click', this.onProgressClicked, !1)
    }
    update() {
        if (this.Reveal.getConfig().progress && this.bar) {
            let e = this.Reveal.getProgress()
            this.Reveal.getTotalSlides() < 2 && (e = 0), (this.bar.style.transform = 'scaleX(' + e + ')')
        }
    }
    getMaxWidth() {
        return this.Reveal.getRevealElement().offsetWidth
    }
    onProgressClicked(e) {
        this.Reveal.onUserInput(e), e.preventDefault()
        let t = this.Reveal.getSlides(),
            i = t.length,
            s = Math.floor((e.clientX / this.getMaxWidth()) * i)
        this.Reveal.getConfig().rtl && (s = i - s)
        let a = this.Reveal.getIndices(t[s])
        this.Reveal.slide(a.h, a.v)
    }
    destroy() {
        this.element.remove()
    }
}
class F {
    constructor(e) {
        ;(this.Reveal = e),
            (this.lastMouseWheelStep = 0),
            (this.cursorHidden = !1),
            (this.cursorInactiveTimeout = 0),
            (this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this)),
            (this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this))
    }
    configure(e, t) {
        e.mouseWheel
            ? (document.addEventListener('DOMMouseScroll', this.onDocumentMouseScroll, !1),
              document.addEventListener('mousewheel', this.onDocumentMouseScroll, !1))
            : (document.removeEventListener('DOMMouseScroll', this.onDocumentMouseScroll, !1),
              document.removeEventListener('mousewheel', this.onDocumentMouseScroll, !1)),
            e.hideInactiveCursor
                ? (document.addEventListener('mousemove', this.onDocumentCursorActive, !1),
                  document.addEventListener('mousedown', this.onDocumentCursorActive, !1))
                : (this.showCursor(),
                  document.removeEventListener('mousemove', this.onDocumentCursorActive, !1),
                  document.removeEventListener('mousedown', this.onDocumentCursorActive, !1))
    }
    showCursor() {
        this.cursorHidden && ((this.cursorHidden = !1), (this.Reveal.getRevealElement().style.cursor = ''))
    }
    hideCursor() {
        !1 === this.cursorHidden && ((this.cursorHidden = !0), (this.Reveal.getRevealElement().style.cursor = 'none'))
    }
    destroy() {
        this.showCursor(),
            document.removeEventListener('DOMMouseScroll', this.onDocumentMouseScroll, !1),
            document.removeEventListener('mousewheel', this.onDocumentMouseScroll, !1),
            document.removeEventListener('mousemove', this.onDocumentCursorActive, !1),
            document.removeEventListener('mousedown', this.onDocumentCursorActive, !1)
    }
    onDocumentCursorActive(e) {
        this.showCursor(),
            clearTimeout(this.cursorInactiveTimeout),
            (this.cursorInactiveTimeout = setTimeout(
                this.hideCursor.bind(this),
                this.Reveal.getConfig().hideCursorTime
            ))
    }
    onDocumentMouseScroll(e) {
        if (Date.now() - this.lastMouseWheelStep > 1e3) {
            this.lastMouseWheelStep = Date.now()
            let t = e.detail || -e.wheelDelta
            t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev()
        }
    }
}
const z = (e, t) => {
    const i = document.createElement('script')
    ;(i.type = 'text/javascript'),
        (i.async = !1),
        (i.defer = !1),
        (i.src = e),
        'function' == typeof t &&
            ((i.onload = i.onreadystatechange =
                e => {
                    ;('load' === e.type || /loaded|complete/.test(i.readyState)) &&
                        ((i.onload = i.onreadystatechange = i.onerror = null), t())
                }),
            (i.onerror = e => {
                ;(i.onload = i.onreadystatechange = i.onerror = null),
                    t(new Error('Failed loading script: ' + i.src + '\n' + e))
            }))
    const s = document.querySelector('head')
    s.insertBefore(i, s.lastChild)
}
class H {
    constructor(e) {
        ;(this.Reveal = e), (this.state = 'idle'), (this.registeredPlugins = {}), (this.asyncDependencies = [])
    }
    load(e, t) {
        return (
            (this.state = 'loading'),
            e.forEach(this.registerPlugin.bind(this)),
            new Promise(e => {
                let i = [],
                    s = 0
                if (
                    (t.forEach(e => {
                        ;(e.condition && !e.condition()) || (e.async ? this.asyncDependencies.push(e) : i.push(e))
                    }),
                    i.length)
                ) {
                    s = i.length
                    const t = t => {
                        t && 'function' == typeof t.callback && t.callback(), 0 == --s && this.initPlugins().then(e)
                    }
                    i.forEach(e => {
                        'string' == typeof e.id
                            ? (this.registerPlugin(e), t(e))
                            : 'string' == typeof e.src
                            ? z(e.src, () => t(e))
                            : (console.warn('Unrecognized plugin format', e), t())
                    })
                } else this.initPlugins().then(e)
            })
        )
    }
    initPlugins() {
        return new Promise(e => {
            let t = Object.values(this.registeredPlugins),
                i = t.length
            if (0 === i) this.loadAsync().then(e)
            else {
                let s,
                    a = () => {
                        0 == --i ? this.loadAsync().then(e) : s()
                    },
                    n = 0
                ;(s = () => {
                    let e = t[n++]
                    if ('function' == typeof e.init) {
                        let t = e.init(this.Reveal)
                        t && 'function' == typeof t.then ? t.then(a) : a()
                    } else a()
                }),
                    s()
            }
        })
    }
    loadAsync() {
        return (
            (this.state = 'loaded'),
            this.asyncDependencies.length &&
                this.asyncDependencies.forEach(e => {
                    z(e.src, e.callback)
                }),
            Promise.resolve()
        )
    }
    registerPlugin(e) {
        2 === arguments.length && 'string' == typeof arguments[0]
            ? ((e = arguments[1]).id = arguments[0])
            : 'function' == typeof e && (e = e())
        let t = e.id
        'string' != typeof t
            ? console.warn("Unrecognized plugin format; can't find plugin.id", e)
            : void 0 === this.registeredPlugins[t]
            ? ((this.registeredPlugins[t] = e),
              'loaded' === this.state && 'function' == typeof e.init && e.init(this.Reveal))
            : console.warn('reveal.js: "' + t + '" plugin has already been registered')
    }
    hasPlugin(e) {
        return !!this.registeredPlugins[e]
    }
    getPlugin(e) {
        return this.registeredPlugins[e]
    }
    getRegisteredPlugins() {
        return this.registeredPlugins
    }
    destroy() {
        Object.values(this.registeredPlugins).forEach(e => {
            'function' == typeof e.destroy && e.destroy()
        }),
            (this.registeredPlugins = {}),
            (this.asyncDependencies = [])
    }
}
class q {
    constructor(e) {
        this.Reveal = e
    }
    async setupPDF() {
        const e = this.Reveal.getConfig(),
            i = t(this.Reveal.getRevealElement(), '.slides section'),
            s = e.slideNumber && /all|print/i.test(e.showSlideNumber),
            a = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight),
            n = Math.floor(a.width * (1 + e.margin)),
            r = Math.floor(a.height * (1 + e.margin)),
            o = a.width,
            d = a.height
        await new Promise(requestAnimationFrame),
            l('@page{size:' + n + 'px ' + r + 'px; margin: 0px;}'),
            l(
                '.reveal section>img, .reveal section>video, .reveal section>iframe{max-width: ' +
                    o +
                    'px; max-height:' +
                    d +
                    'px}'
            ),
            document.documentElement.classList.add('print-pdf'),
            (document.body.style.width = n + 'px'),
            (document.body.style.height = r + 'px')
        const c = document.querySelector('.reveal-viewport')
        let h
        if (c) {
            const e = window.getComputedStyle(c)
            e && e.background && (h = e.background)
        }
        await new Promise(requestAnimationFrame),
            this.Reveal.layoutSlideContents(o, d),
            await new Promise(requestAnimationFrame)
        const u = i.map(e => e.scrollHeight),
            g = [],
            v = i[0].parentNode
        i.forEach(function (i, a) {
            if (!1 === i.classList.contains('stack')) {
                let l = (n - o) / 2,
                    c = (r - d) / 2
                const v = u[a]
                let p = Math.max(Math.ceil(v / r), 1)
                ;(p = Math.min(p, e.pdfMaxPagesPerSlide)),
                    ((1 === p && e.center) || i.classList.contains('center')) && (c = Math.max((r - v) / 2, 0))
                const m = document.createElement('div')
                if (
                    (g.push(m),
                    (m.className = 'pdf-page'),
                    (m.style.height = (r + e.pdfPageHeightOffset) * p + 'px'),
                    h && (m.style.background = h),
                    m.appendChild(i),
                    (i.style.left = l + 'px'),
                    (i.style.top = c + 'px'),
                    (i.style.width = o + 'px'),
                    this.Reveal.slideContent.layout(i),
                    i.slideBackgroundElement && m.insertBefore(i.slideBackgroundElement, i),
                    e.showNotes)
                ) {
                    const t = this.Reveal.getSlideNotes(i)
                    if (t) {
                        const i = 8,
                            s = 'string' == typeof e.showNotes ? e.showNotes : 'inline',
                            a = document.createElement('div')
                        a.classList.add('speaker-notes'),
                            a.classList.add('speaker-notes-pdf'),
                            a.setAttribute('data-layout', s),
                            (a.innerHTML = t),
                            'separate-page' === s
                                ? g.push(a)
                                : ((a.style.left = i + 'px'),
                                  (a.style.bottom = i + 'px'),
                                  (a.style.width = n - 2 * i + 'px'),
                                  m.appendChild(a))
                    }
                }
                if (s) {
                    const e = a + 1,
                        t = document.createElement('div')
                    t.classList.add('slide-number'),
                        t.classList.add('slide-number-pdf'),
                        (t.innerHTML = e),
                        m.appendChild(t)
                }
                if (e.pdfSeparateFragments) {
                    const e = this.Reveal.fragments.sort(m.querySelectorAll('.fragment'), !0)
                    let t
                    e.forEach(function (e) {
                        t &&
                            t.forEach(function (e) {
                                e.classList.remove('current-fragment')
                            }),
                            e.forEach(function (e) {
                                e.classList.add('visible', 'current-fragment')
                            }, this)
                        const i = m.cloneNode(!0)
                        g.push(i), (t = e)
                    }, this),
                        e.forEach(function (e) {
                            e.forEach(function (e) {
                                e.classList.remove('visible', 'current-fragment')
                            })
                        })
                } else
                    t(m, '.fragment:not(.fade-out)').forEach(function (e) {
                        e.classList.add('visible')
                    })
            }
        }, this),
            await new Promise(requestAnimationFrame),
            g.forEach(e => v.appendChild(e)),
            this.Reveal.dispatchEvent({ type: 'pdf-ready' })
    }
    isPrintingPDF() {
        return /print-pdf/gi.test(window.location.search)
    }
}
class B {
    constructor(e) {
        ;(this.Reveal = e),
            (this.touchStartX = 0),
            (this.touchStartY = 0),
            (this.touchStartCount = 0),
            (this.touchCaptured = !1),
            (this.onPointerDown = this.onPointerDown.bind(this)),
            (this.onPointerMove = this.onPointerMove.bind(this)),
            (this.onPointerUp = this.onPointerUp.bind(this)),
            (this.onTouchStart = this.onTouchStart.bind(this)),
            (this.onTouchMove = this.onTouchMove.bind(this)),
            (this.onTouchEnd = this.onTouchEnd.bind(this))
    }
    bind() {
        let e = this.Reveal.getRevealElement()
        'onpointerdown' in window
            ? (e.addEventListener('pointerdown', this.onPointerDown, !1),
              e.addEventListener('pointermove', this.onPointerMove, !1),
              e.addEventListener('pointerup', this.onPointerUp, !1))
            : window.navigator.msPointerEnabled
            ? (e.addEventListener('MSPointerDown', this.onPointerDown, !1),
              e.addEventListener('MSPointerMove', this.onPointerMove, !1),
              e.addEventListener('MSPointerUp', this.onPointerUp, !1))
            : (e.addEventListener('touchstart', this.onTouchStart, !1),
              e.addEventListener('touchmove', this.onTouchMove, !1),
              e.addEventListener('touchend', this.onTouchEnd, !1))
    }
    unbind() {
        let e = this.Reveal.getRevealElement()
        e.removeEventListener('pointerdown', this.onPointerDown, !1),
            e.removeEventListener('pointermove', this.onPointerMove, !1),
            e.removeEventListener('pointerup', this.onPointerUp, !1),
            e.removeEventListener('MSPointerDown', this.onPointerDown, !1),
            e.removeEventListener('MSPointerMove', this.onPointerMove, !1),
            e.removeEventListener('MSPointerUp', this.onPointerUp, !1),
            e.removeEventListener('touchstart', this.onTouchStart, !1),
            e.removeEventListener('touchmove', this.onTouchMove, !1),
            e.removeEventListener('touchend', this.onTouchEnd, !1)
    }
    isSwipePrevented(e) {
        if (n(e, 'video, audio')) return !0
        for (; e && 'function' == typeof e.hasAttribute; ) {
            if (e.hasAttribute('data-prevent-swipe')) return !0
            e = e.parentNode
        }
        return !1
    }
    onTouchStart(e) {
        if (this.isSwipePrevented(e.target)) return !0
        ;(this.touchStartX = e.touches[0].clientX),
            (this.touchStartY = e.touches[0].clientY),
            (this.touchStartCount = e.touches.length)
    }
    onTouchMove(e) {
        if (this.isSwipePrevented(e.target)) return !0
        let t = this.Reveal.getConfig()
        if (this.touchCaptured) m && e.preventDefault()
        else {
            this.Reveal.onUserInput(e)
            let i = e.touches[0].clientX,
                s = e.touches[0].clientY
            if (1 === e.touches.length && 2 !== this.touchStartCount) {
                let a = this.Reveal.availableRoutes({ includeFragments: !0 }),
                    n = i - this.touchStartX,
                    r = s - this.touchStartY
                n > 40 && Math.abs(n) > Math.abs(r)
                    ? ((this.touchCaptured = !0),
                      'linear' === t.navigationMode
                          ? t.rtl
                              ? this.Reveal.next()
                              : this.Reveal.prev()
                          : this.Reveal.left())
                    : n < -40 && Math.abs(n) > Math.abs(r)
                    ? ((this.touchCaptured = !0),
                      'linear' === t.navigationMode
                          ? t.rtl
                              ? this.Reveal.prev()
                              : this.Reveal.next()
                          : this.Reveal.right())
                    : r > 40 && a.up
                    ? ((this.touchCaptured = !0), 'linear' === t.navigationMode ? this.Reveal.prev() : this.Reveal.up())
                    : r < -40 &&
                      a.down &&
                      ((this.touchCaptured = !0),
                      'linear' === t.navigationMode ? this.Reveal.next() : this.Reveal.down()),
                    t.embedded
                        ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault()
                        : e.preventDefault()
            }
        }
    }
    onTouchEnd(e) {
        this.touchCaptured = !1
    }
    onPointerDown(e) {
        ;(e.pointerType !== e.MSPOINTER_TYPE_TOUCH && 'touch' !== e.pointerType) ||
            ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]), this.onTouchStart(e))
    }
    onPointerMove(e) {
        ;(e.pointerType !== e.MSPOINTER_TYPE_TOUCH && 'touch' !== e.pointerType) ||
            ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]), this.onTouchMove(e))
    }
    onPointerUp(e) {
        ;(e.pointerType !== e.MSPOINTER_TYPE_TOUCH && 'touch' !== e.pointerType) ||
            ((e.touches = [{ clientX: e.clientX, clientY: e.clientY }]), this.onTouchEnd(e))
    }
}
class O {
    constructor(e) {
        ;(this.Reveal = e),
            (this.onRevealPointerDown = this.onRevealPointerDown.bind(this)),
            (this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this))
    }
    configure(e, t) {
        e.embedded ? this.blur() : (this.focus(), this.unbind())
    }
    bind() {
        this.Reveal.getConfig().embedded &&
            this.Reveal.getRevealElement().addEventListener('pointerdown', this.onRevealPointerDown, !1)
    }
    unbind() {
        this.Reveal.getRevealElement().removeEventListener('pointerdown', this.onRevealPointerDown, !1),
            document.removeEventListener('pointerdown', this.onDocumentPointerDown, !1)
    }
    focus() {
        'focus' !== this.state &&
            (this.Reveal.getRevealElement().classList.add('focused'),
            document.addEventListener('pointerdown', this.onDocumentPointerDown, !1)),
            (this.state = 'focus')
    }
    blur() {
        'blur' !== this.state &&
            (this.Reveal.getRevealElement().classList.remove('focused'),
            document.removeEventListener('pointerdown', this.onDocumentPointerDown, !1)),
            (this.state = 'blur')
    }
    isFocused() {
        return 'focus' === this.state
    }
    destroy() {
        this.Reveal.getRevealElement().classList.remove('focused')
    }
    onRevealPointerDown(e) {
        this.focus()
    }
    onDocumentPointerDown(e) {
        let t = r(e.target, '.reveal')
        ;(t && t === this.Reveal.getRevealElement()) || this.blur()
    }
}
class U {
    constructor(e) {
        this.Reveal = e
    }
    render() {
        ;(this.element = document.createElement('div')),
            (this.element.className = 'speaker-notes'),
            this.element.setAttribute('data-prevent-swipe', ''),
            this.element.setAttribute('tabindex', '0'),
            this.Reveal.getRevealElement().appendChild(this.element)
    }
    configure(e, t) {
        e.showNotes && this.element.setAttribute('data-layout', 'string' == typeof e.showNotes ? e.showNotes : 'inline')
    }
    update() {
        this.Reveal.getConfig().showNotes &&
            this.element &&
            this.Reveal.getCurrentSlide() &&
            !this.Reveal.print.isPrintingPDF() &&
            (this.element.innerHTML =
                this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>')
    }
    updateVisibility() {
        this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF()
            ? this.Reveal.getRevealElement().classList.add('show-notes')
            : this.Reveal.getRevealElement().classList.remove('show-notes')
    }
    hasNotes() {
        return this.Reveal.getSlidesElement().querySelectorAll('[data-notes], aside.notes').length > 0
    }
    isSpeakerNotesWindow() {
        return !!window.location.search.match(/receiver/gi)
    }
    getSlideNotes(e = this.Reveal.getCurrentSlide()) {
        if (e.hasAttribute('data-notes')) return e.getAttribute('data-notes')
        let t = e.querySelector('aside.notes')
        return t ? t.innerHTML : null
    }
    destroy() {
        this.element.remove()
    }
}
class W {
    constructor(e, t) {
        ;(this.diameter = 100),
            (this.diameter2 = this.diameter / 2),
            (this.thickness = 6),
            (this.playing = !1),
            (this.progress = 0),
            (this.progressOffset = 1),
            (this.container = e),
            (this.progressCheck = t),
            (this.canvas = document.createElement('canvas')),
            (this.canvas.className = 'playback'),
            (this.canvas.width = this.diameter),
            (this.canvas.height = this.diameter),
            (this.canvas.style.width = this.diameter2 + 'px'),
            (this.canvas.style.height = this.diameter2 + 'px'),
            (this.context = this.canvas.getContext('2d')),
            this.container.appendChild(this.canvas),
            this.render()
    }
    setPlaying(e) {
        const t = this.playing
        ;(this.playing = e), !t && this.playing ? this.animate() : this.render()
    }
    animate() {
        const e = this.progress
        ;(this.progress = this.progressCheck()),
            e > 0.8 && this.progress < 0.2 && (this.progressOffset = this.progress),
            this.render(),
            this.playing && requestAnimationFrame(this.animate.bind(this))
    }
    render() {
        let e = this.playing ? this.progress : 0,
            t = this.diameter2 - this.thickness,
            i = this.diameter2,
            s = this.diameter2,
            a = 28
        this.progressOffset += 0.1 * (1 - this.progressOffset)
        const n = -Math.PI / 2 + e * (2 * Math.PI),
            r = -Math.PI / 2 + this.progressOffset * (2 * Math.PI)
        this.context.save(),
            this.context.clearRect(0, 0, this.diameter, this.diameter),
            this.context.beginPath(),
            this.context.arc(i, s, t + 4, 0, 2 * Math.PI, !1),
            (this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )'),
            this.context.fill(),
            this.context.beginPath(),
            this.context.arc(i, s, t, 0, 2 * Math.PI, !1),
            (this.context.lineWidth = this.thickness),
            (this.context.strokeStyle = 'rgba( 255, 255, 255, 0.2 )'),
            this.context.stroke(),
            this.playing &&
                (this.context.beginPath(),
                this.context.arc(i, s, t, r, n, !1),
                (this.context.lineWidth = this.thickness),
                (this.context.strokeStyle = '#fff'),
                this.context.stroke()),
            this.context.translate(i - 14, s - 14),
            this.playing
                ? ((this.context.fillStyle = '#fff'),
                  this.context.fillRect(0, 0, 10, a),
                  this.context.fillRect(18, 0, 10, a))
                : (this.context.beginPath(),
                  this.context.translate(4, 0),
                  this.context.moveTo(0, 0),
                  this.context.lineTo(24, 14),
                  this.context.lineTo(0, a),
                  (this.context.fillStyle = '#fff'),
                  this.context.fill()),
            this.context.restore()
    }
    on(e, t) {
        this.canvas.addEventListener(e, t, !1)
    }
    off(e, t) {
        this.canvas.removeEventListener(e, t, !1)
    }
    destroy() {
        ;(this.playing = !1), this.canvas.parentNode && this.container.removeChild(this.canvas)
    }
}
var K = {
    width: 960,
    height: 700,
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2,
    controls: !0,
    controlsTutorial: !0,
    controlsLayout: 'bottom-right',
    controlsBackArrows: 'faded',
    progress: !0,
    slideNumber: !1,
    showSlideNumber: 'all',
    hashOneBasedIndex: !1,
    hash: !1,
    respondToHashChanges: !0,
    history: !1,
    keyboard: !0,
    keyboardCondition: null,
    disableLayout: !1,
    overview: !0,
    center: !0,
    touch: !0,
    loop: !1,
    rtl: !1,
    navigationMode: 'default',
    shuffle: !1,
    fragments: !0,
    fragmentInURL: !0,
    embedded: !1,
    help: !0,
    pause: !0,
    showNotes: !1,
    showHiddenSlides: !1,
    autoPlayMedia: null,
    preloadIframes: null,
    autoAnimate: !0,
    autoAnimateMatcher: null,
    autoAnimateEasing: 'ease',
    autoAnimateDuration: 1,
    autoAnimateUnmatched: !0,
    autoAnimateStyles: [
        'opacity',
        'color',
        'background-color',
        'padding',
        'font-size',
        'line-height',
        'letter-spacing',
        'border-width',
        'border-color',
        'border-radius',
        'outline',
        'outline-offset',
    ],
    autoSlide: 0,
    autoSlideStoppable: !0,
    autoSlideMethod: null,
    defaultTiming: null,
    mouseWheel: !1,
    previewLinks: !1,
    postMessage: !0,
    postMessageEvents: !1,
    focusBodyOnPageVisibilityChange: !0,
    transition: 'slide',
    transitionSpeed: 'default',
    backgroundTransition: 'fade',
    parallaxBackgroundImage: '',
    parallaxBackgroundSize: '',
    parallaxBackgroundRepeat: '',
    parallaxBackgroundPosition: '',
    parallaxBackgroundHorizontal: null,
    parallaxBackgroundVertical: null,
    pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
    pdfSeparateFragments: !0,
    pdfPageHeightOffset: -1,
    viewDistance: 3,
    mobileViewDistance: 2,
    display: 'block',
    hideInactiveCursor: !0,
    hideCursorTime: 5e3,
    dependencies: [],
    plugins: [],
}
function V(n, l) {
    arguments.length < 2 && ((l = arguments[0]), (n = document.querySelector('.reveal')))
    const h = {}
    let u,
        g,
        p,
        m,
        b,
        y = {},
        w = !1,
        S = { hasNavigatedHorizontally: !1, hasNavigatedVertically: !1 },
        L = [],
        C = 1,
        z = { layout: '', overview: '' },
        V = {},
        $ = 'idle',
        j = 0,
        X = 0,
        Y = -1,
        _ = !1,
        J = new E(h),
        Q = new R(h),
        Z = new x(h),
        G = new A(h),
        ee = new P(h),
        te = new N(h),
        ie = new M(h),
        se = new D(h),
        ae = new I(h),
        ne = new T(h),
        re = new F(h),
        oe = new H(h),
        le = new q(h),
        de = new O(h),
        ce = new B(h),
        he = new U(h)
    function ue(e) {
        if (!n) throw 'Unable to find presentation root (<div class="reveal">).'
        if (((V.wrapper = n), (V.slides = n.querySelector('.slides')), !V.slides))
            throw 'Unable to find slides container (<div class="slides">).'
        return (
            (y = { ...K, ...y, ...l, ...e, ...d() }),
            ge(),
            window.addEventListener('load', qe, !1),
            oe.load(y.plugins, y.dependencies).then(ve),
            new Promise(e => h.on('ready', e))
        )
    }
    function ge() {
        !0 === y.embedded
            ? (V.viewport = r(n, '.reveal-viewport') || n)
            : ((V.viewport = document.body), document.documentElement.classList.add('reveal-full-page')),
            V.viewport.classList.add('reveal-viewport')
    }
    function ve() {
        ;(w = !0),
            pe(),
            me(),
            Re(),
            we(),
            Ee(),
            it(),
            Se(),
            se.readURL(),
            G.update(!0),
            setTimeout(() => {
                V.slides.classList.remove('no-transition'),
                    V.wrapper.classList.add('ready'),
                    Ne({ type: 'ready', data: { indexh: u, indexv: g, currentSlide: m } })
            }, 1),
            le.isPrintingPDF() &&
                (ke(),
                'complete' === document.readyState
                    ? le.setupPDF()
                    : window.addEventListener('load', () => {
                          le.setupPDF()
                      }))
    }
    function pe() {
        y.showHiddenSlides ||
            t(V.wrapper, 'section[data-visibility="hidden"]').forEach(e => {
                e.parentNode.removeChild(e)
            })
    }
    function me() {
        V.slides.classList.add('no-transition'),
            v ? V.wrapper.classList.add('no-hover') : V.wrapper.classList.remove('no-hover'),
            G.render(),
            Q.render(),
            ae.render(),
            ne.render(),
            he.render(),
            (V.pauseOverlay = o(
                V.wrapper,
                'div',
                'pause-overlay',
                y.controls ? '<button class="resume-button">Resume presentation</button>' : null
            )),
            (V.statusElement = fe()),
            V.wrapper.setAttribute('role', 'application')
    }
    function fe() {
        let e = V.wrapper.querySelector('.aria-status')
        return (
            e ||
                ((e = document.createElement('div')),
                (e.style.position = 'absolute'),
                (e.style.height = '1px'),
                (e.style.width = '1px'),
                (e.style.overflow = 'hidden'),
                (e.style.clip = 'rect( 1px, 1px, 1px, 1px )'),
                e.classList.add('aria-status'),
                e.setAttribute('aria-live', 'polite'),
                e.setAttribute('aria-atomic', 'true'),
                V.wrapper.appendChild(e)),
            e
        )
    }
    function be(e) {
        V.statusElement.textContent = e
    }
    function ye(e) {
        let t = ''
        if (3 === e.nodeType) t += e.textContent
        else if (1 === e.nodeType) {
            let i = e.getAttribute('aria-hidden'),
                s = 'none' === window.getComputedStyle(e).display
            'true' === i ||
                s ||
                Array.from(e.childNodes).forEach(e => {
                    t += ye(e)
                })
        }
        return (t = t.trim()), '' === t ? '' : t + ' '
    }
    function we() {
        setInterval(() => {
            ;(0 === V.wrapper.scrollTop && 0 === V.wrapper.scrollLeft) ||
                ((V.wrapper.scrollTop = 0), (V.wrapper.scrollLeft = 0))
        }, 1e3)
    }
    function Ee() {
        document.addEventListener('fullscreenchange', qt), document.addEventListener('webkitfullscreenchange', qt)
    }
    function Re() {
        y.postMessage && window.addEventListener('message', It, !1)
    }
    function Se(t) {
        const s = { ...y }
        if (('object' == typeof t && e(y, t), !1 === h.isReady())) return
        const a = V.wrapper.querySelectorAll('.slides section').length
        V.wrapper.classList.remove(s.transition),
            V.wrapper.classList.add(y.transition),
            V.wrapper.setAttribute('data-transition-speed', y.transitionSpeed),
            V.wrapper.setAttribute('data-background-transition', y.backgroundTransition),
            V.viewport.style.setProperty('--slide-width', y.width + 'px'),
            V.viewport.style.setProperty('--slide-height', y.height + 'px'),
            y.shuffle && st(),
            i(V.wrapper, 'embedded', y.embedded),
            i(V.wrapper, 'rtl', y.rtl),
            i(V.wrapper, 'center', y.center),
            !1 === y.pause && Ye(),
            y.previewLinks
                ? (De(), Ie('[data-preview-link=false]'))
                : (Ie(), De('[data-preview-link]:not([data-preview-link=false])')),
            Z.reset(),
            b && (b.destroy(), (b = null)),
            a > 1 &&
                y.autoSlide &&
                y.autoSlideStoppable &&
                ((b = new W(V.wrapper, () => Math.min(Math.max((Date.now() - Y) / j, 0), 1))),
                b.on('click', Ot),
                (_ = !1)),
            'default' !== y.navigationMode
                ? V.wrapper.setAttribute('data-navigation-mode', y.navigationMode)
                : V.wrapper.removeAttribute('data-navigation-mode'),
            he.configure(y, s),
            de.configure(y, s),
            re.configure(y, s),
            ae.configure(y, s),
            ne.configure(y, s),
            ie.configure(y, s),
            ee.configure(y, s),
            Q.configure(y, s),
            et()
    }
    function Ae() {
        window.addEventListener('resize', zt, !1),
            y.touch && ce.bind(),
            y.keyboard && ie.bind(),
            y.progress && ne.bind(),
            y.respondToHashChanges && se.bind(),
            ae.bind(),
            de.bind(),
            V.slides.addEventListener('click', Ft, !1),
            V.slides.addEventListener('transitionend', Tt, !1),
            V.pauseOverlay.addEventListener('click', Ye, !1),
            y.focusBodyOnPageVisibilityChange && document.addEventListener('visibilitychange', Ht, !1)
    }
    function ke() {
        ce.unbind(),
            de.unbind(),
            ie.unbind(),
            ae.unbind(),
            ne.unbind(),
            se.unbind(),
            window.removeEventListener('resize', zt, !1),
            V.slides.removeEventListener('click', Ft, !1),
            V.slides.removeEventListener('transitionend', Tt, !1),
            V.pauseOverlay.removeEventListener('click', Ye, !1)
    }
    function Le() {
        ke(),
            St(),
            Ie(),
            he.destroy(),
            de.destroy(),
            oe.destroy(),
            re.destroy(),
            ae.destroy(),
            ne.destroy(),
            G.destroy(),
            Q.destroy(),
            document.removeEventListener('fullscreenchange', qt),
            document.removeEventListener('webkitfullscreenchange', qt),
            document.removeEventListener('visibilitychange', Ht, !1),
            window.removeEventListener('message', It, !1),
            window.removeEventListener('load', qe, !1),
            V.pauseOverlay && V.pauseOverlay.remove(),
            V.statusElement && V.statusElement.remove(),
            document.documentElement.classList.remove('reveal-full-page'),
            V.wrapper.classList.remove('ready', 'center', 'has-horizontal-slides', 'has-vertical-slides'),
            V.wrapper.removeAttribute('data-transition-speed'),
            V.wrapper.removeAttribute('data-background-transition'),
            V.viewport.classList.remove('reveal-viewport'),
            V.viewport.style.removeProperty('--slide-width'),
            V.viewport.style.removeProperty('--slide-height'),
            V.slides.style.removeProperty('width'),
            V.slides.style.removeProperty('height'),
            V.slides.style.removeProperty('zoom'),
            V.slides.style.removeProperty('left'),
            V.slides.style.removeProperty('top'),
            V.slides.style.removeProperty('bottom'),
            V.slides.style.removeProperty('right'),
            V.slides.style.removeProperty('transform'),
            Array.from(V.wrapper.querySelectorAll('.slides section')).forEach(e => {
                e.style.removeProperty('display'),
                    e.style.removeProperty('top'),
                    e.removeAttribute('hidden'),
                    e.removeAttribute('aria-hidden')
            })
    }
    function Ce(e, t, i) {
        n.addEventListener(e, t, i)
    }
    function xe(e, t, i) {
        n.removeEventListener(e, t, i)
    }
    function Pe(e) {
        'string' == typeof e.layout && (z.layout = e.layout),
            'string' == typeof e.overview && (z.overview = e.overview),
            z.layout ? a(V.slides, z.layout + ' ' + z.overview) : a(V.slides, z.overview)
    }
    function Ne({ target: t = V.wrapper, type: i, data: s, bubbles: a = !0 }) {
        let n = document.createEvent('HTMLEvents', 1, 2)
        return n.initEvent(i, a, !0), e(n, s), t.dispatchEvent(n), t === V.wrapper && Me(i), n
    }
    function Me(t, i) {
        if (y.postMessageEvents && window.parent !== window.self) {
            let s = { namespace: 'reveal', eventName: t, state: wt() }
            e(s, i), window.parent.postMessage(JSON.stringify(s), '*')
        }
    }
    function De(e = 'a') {
        Array.from(V.wrapper.querySelectorAll(e)).forEach(e => {
            ;/^(http|www)/gi.test(e.getAttribute('href')) && e.addEventListener('click', Bt, !1)
        })
    }
    function Ie(e = 'a') {
        Array.from(V.wrapper.querySelectorAll(e)).forEach(e => {
            ;/^(http|www)/gi.test(e.getAttribute('href')) && e.removeEventListener('click', Bt, !1)
        })
    }
    function Te(e) {
        He(),
            (V.overlay = document.createElement('div')),
            V.overlay.classList.add('overlay'),
            V.overlay.classList.add('overlay-preview'),
            V.wrapper.appendChild(V.overlay),
            (V.overlay.innerHTML = `<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="${e}" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="${e}"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>`),
            V.overlay.querySelector('iframe').addEventListener(
                'load',
                e => {
                    V.overlay.classList.add('loaded')
                },
                !1
            ),
            V.overlay.querySelector('.close').addEventListener(
                'click',
                e => {
                    He(), e.preventDefault()
                },
                !1
            ),
            V.overlay.querySelector('.external').addEventListener(
                'click',
                e => {
                    He()
                },
                !1
            )
    }
    function Fe(e) {
        'boolean' == typeof e ? (e ? ze() : He()) : V.overlay ? He() : ze()
    }
    function ze() {
        if (y.help) {
            He(),
                (V.overlay = document.createElement('div')),
                V.overlay.classList.add('overlay'),
                V.overlay.classList.add('overlay-help'),
                V.wrapper.appendChild(V.overlay)
            let e = '<p class="title">Keyboard Shortcuts</p><br/>',
                t = ie.getShortcuts(),
                i = ie.getBindings()
            e += '<table><th>KEY</th><th>ACTION</th>'
            for (let i in t) e += `<tr><td>${i}</td><td>${t[i]}</td></tr>`
            for (let t in i)
                i[t].key && i[t].description && (e += `<tr><td>${i[t].key}</td><td>${i[t].description}</td></tr>`)
            ;(e += '</table>'),
                (V.overlay.innerHTML = `\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">${e}</div>\n\t\t\t\t</div>\n\t\t\t`),
                V.overlay.querySelector('.close').addEventListener(
                    'click',
                    e => {
                        He(), e.preventDefault()
                    },
                    !1
                )
        }
    }
    function He() {
        return !!V.overlay && (V.overlay.parentNode.removeChild(V.overlay), (V.overlay = null), !0)
    }
    function qe() {
        if (V.wrapper && !le.isPrintingPDF()) {
            if (!y.disableLayout) {
                v && !y.embedded && document.documentElement.style.setProperty('--vh', 0.01 * window.innerHeight + 'px')
                const e = Oe(),
                    t = C
                Be(y.width, y.height),
                    (V.slides.style.width = e.width + 'px'),
                    (V.slides.style.height = e.height + 'px'),
                    (C = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height)),
                    (C = Math.max(C, y.minScale)),
                    (C = Math.min(C, y.maxScale)),
                    1 === C
                        ? ((V.slides.style.zoom = ''),
                          (V.slides.style.left = ''),
                          (V.slides.style.top = ''),
                          (V.slides.style.bottom = ''),
                          (V.slides.style.right = ''),
                          Pe({ layout: '' }))
                        : C > 1 && f && window.devicePixelRatio < 2
                        ? ((V.slides.style.zoom = C),
                          (V.slides.style.left = ''),
                          (V.slides.style.top = ''),
                          (V.slides.style.bottom = ''),
                          (V.slides.style.right = ''),
                          Pe({ layout: '' }))
                        : ((V.slides.style.zoom = ''),
                          (V.slides.style.left = '50%'),
                          (V.slides.style.top = '50%'),
                          (V.slides.style.bottom = 'auto'),
                          (V.slides.style.right = 'auto'),
                          Pe({ layout: 'translate(-50%, -50%) scale(' + C + ')' }))
                const i = Array.from(V.wrapper.querySelectorAll('.slides section'))
                for (let t = 0, s = i.length; t < s; t++) {
                    const s = i[t]
                    'none' !== s.style.display &&
                        (y.center || s.classList.contains('center')
                            ? s.classList.contains('stack')
                                ? (s.style.top = 0)
                                : (s.style.top = Math.max((e.height - s.scrollHeight) / 2, 0) + 'px')
                            : (s.style.top = ''))
                }
                t !== C && Ne({ type: 'resize', data: { oldScale: t, scale: C, size: e } })
            }
            ne.update(), G.updateParallax(), te.isActive() && te.update()
        }
    }
    function Be(e, i) {
        t(V.slides, 'section > .stretch, section > .r-stretch').forEach(t => {
            let s = c(t, i)
            if (/(img|video)/gi.test(t.nodeName)) {
                const i = t.naturalWidth || t.videoWidth,
                    a = t.naturalHeight || t.videoHeight,
                    n = Math.min(e / i, s / a)
                ;(t.style.width = i * n + 'px'), (t.style.height = a * n + 'px')
            } else (t.style.width = e + 'px'), (t.style.height = s + 'px')
        })
    }
    function Oe(e, t) {
        const i = {
            width: y.width,
            height: y.height,
            presentationWidth: e || V.wrapper.offsetWidth,
            presentationHeight: t || V.wrapper.offsetHeight,
        }
        return (
            (i.presentationWidth -= i.presentationWidth * y.margin),
            (i.presentationHeight -= i.presentationHeight * y.margin),
            'string' == typeof i.width &&
                /%$/.test(i.width) &&
                (i.width = (parseInt(i.width, 10) / 100) * i.presentationWidth),
            'string' == typeof i.height &&
                /%$/.test(i.height) &&
                (i.height = (parseInt(i.height, 10) / 100) * i.presentationHeight),
            i
        )
    }
    function Ue(e, t) {
        'object' == typeof e && 'function' == typeof e.setAttribute && e.setAttribute('data-previous-indexv', t || 0)
    }
    function We(e) {
        if ('object' == typeof e && 'function' == typeof e.setAttribute && e.classList.contains('stack')) {
            const t = e.hasAttribute('data-start-indexv') ? 'data-start-indexv' : 'data-previous-indexv'
            return parseInt(e.getAttribute(t) || 0, 10)
        }
        return 0
    }
    function Ke(e = m) {
        return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i)
    }
    function Ve() {
        return !(!m || !Ke(m)) && !m.nextElementSibling
    }
    function $e() {
        return 0 === u && 0 === g
    }
    function je() {
        return !!m && !m.nextElementSibling && (!Ke(m) || !m.parentNode.nextElementSibling)
    }
    function Xe() {
        if (y.pause) {
            const e = V.wrapper.classList.contains('paused')
            St(), V.wrapper.classList.add('paused'), !1 === e && Ne({ type: 'paused' })
        }
    }
    function Ye() {
        const e = V.wrapper.classList.contains('paused')
        V.wrapper.classList.remove('paused'), Rt(), e && Ne({ type: 'resumed' })
    }
    function _e(e) {
        'boolean' == typeof e ? (e ? Xe() : Ye()) : Je() ? Ye() : Xe()
    }
    function Je() {
        return V.wrapper.classList.contains('paused')
    }
    function Qe(e) {
        'boolean' == typeof e ? (e ? kt() : At()) : _ ? kt() : At()
    }
    function Ze() {
        return !(!j || _)
    }
    function Ge(e, t, i, s) {
        if (
            Ne({
                type: 'beforeslidechange',
                data: { indexh: void 0 === e ? u : e, indexv: void 0 === t ? g : t, origin: s },
            }).defaultPrevented
        )
            return
        p = m
        const a = V.wrapper.querySelectorAll('.slides>section')
        if (0 === a.length) return
        void 0 !== t || te.isActive() || (t = We(a[e])),
            p && p.parentNode && p.parentNode.classList.contains('stack') && Ue(p.parentNode, g)
        const n = L.concat()
        L.length = 0
        let r = u || 0,
            o = g || 0
        ;(u = at('.slides>section', void 0 === e ? u : e)),
            (g = at('.slides>section.present>section', void 0 === t ? g : t))
        let l = u !== r || g !== o
        l || (p = null)
        let d = a[u],
            c = d.querySelectorAll('section')
        m = c[g] || d
        let h = !1
        l &&
            p &&
            m &&
            !te.isActive() &&
            (p.hasAttribute('data-auto-animate') &&
                m.hasAttribute('data-auto-animate') &&
                p.getAttribute('data-auto-animate-id') === m.getAttribute('data-auto-animate-id') &&
                !(u > r || g > o ? m : p).hasAttribute('data-auto-animate-restart') &&
                ((h = !0), V.slides.classList.add('disable-slide-transitions')),
            ($ = 'running')),
            nt(),
            qe(),
            te.isActive() && te.update(),
            void 0 !== i && ee.goto(i),
            p &&
                p !== m &&
                (p.classList.remove('present'),
                p.setAttribute('aria-hidden', 'true'),
                $e() &&
                    setTimeout(() => {
                        gt().forEach(e => {
                            Ue(e, 0)
                        })
                    }, 0))
        e: for (let e = 0, t = L.length; e < t; e++) {
            for (let t = 0; t < n.length; t++)
                if (n[t] === L[e]) {
                    n.splice(t, 1)
                    continue e
                }
            V.viewport.classList.add(L[e]), Ne({ type: L[e] })
        }
        for (; n.length; ) V.viewport.classList.remove(n.pop())
        l && Ne({ type: 'slidechanged', data: { indexh: u, indexv: g, previousSlide: p, currentSlide: m, origin: s } }),
            (!l && p) || (J.stopEmbeddedContent(p), J.startEmbeddedContent(m)),
            requestAnimationFrame(() => {
                be(ye(m))
            }),
            ne.update(),
            ae.update(),
            he.update(),
            G.update(),
            G.updateParallax(),
            Q.update(),
            ee.update(),
            se.writeURL(),
            Rt(),
            h &&
                (setTimeout(() => {
                    V.slides.classList.remove('disable-slide-transitions')
                }, 0),
                y.autoAnimate && Z.run(p, m))
    }
    function et() {
        ke(),
            Ae(),
            qe(),
            (j = y.autoSlide),
            Rt(),
            G.create(),
            se.writeURL(),
            ee.sortAll(),
            ae.update(),
            ne.update(),
            nt(),
            he.update(),
            he.updateVisibility(),
            G.update(!0),
            Q.update(),
            J.formatEmbeddedContent(),
            !1 === y.autoPlayMedia ? J.stopEmbeddedContent(m, { unloadIframes: !1 }) : J.startEmbeddedContent(m),
            te.isActive() && te.layout()
    }
    function tt(e = m) {
        G.sync(e), ee.sync(e), J.load(e), G.update(), he.update()
    }
    function it() {
        ht().forEach(e => {
            t(e, 'section').forEach((e, t) => {
                t > 0 &&
                    (e.classList.remove('present'),
                    e.classList.remove('past'),
                    e.classList.add('future'),
                    e.setAttribute('aria-hidden', 'true'))
            })
        })
    }
    function st(e = ht()) {
        e.forEach((t, i) => {
            let s = e[Math.floor(Math.random() * e.length)]
            s.parentNode === t.parentNode && t.parentNode.insertBefore(t, s)
            let a = t.querySelectorAll('section')
            a.length && st(a)
        })
    }
    function at(e, i) {
        let s = t(V.wrapper, e),
            a = s.length,
            n = le.isPrintingPDF()
        if (a) {
            y.loop && (i %= a) < 0 && (i = a + i), (i = Math.max(Math.min(i, a - 1), 0))
            for (let e = 0; e < a; e++) {
                let a = s[e],
                    r = y.rtl && !Ke(a)
                a.classList.remove('past'),
                    a.classList.remove('present'),
                    a.classList.remove('future'),
                    a.setAttribute('hidden', ''),
                    a.setAttribute('aria-hidden', 'true'),
                    a.querySelector('section') && a.classList.add('stack'),
                    n
                        ? a.classList.add('present')
                        : e < i
                        ? (a.classList.add(r ? 'future' : 'past'),
                          y.fragments &&
                              t(a, '.fragment').forEach(e => {
                                  e.classList.add('visible'), e.classList.remove('current-fragment')
                              }))
                        : e > i &&
                          (a.classList.add(r ? 'past' : 'future'),
                          y.fragments &&
                              t(a, '.fragment.visible').forEach(e => {
                                  e.classList.remove('visible', 'current-fragment')
                              }))
            }
            let e = s[i],
                r = e.classList.contains('present')
            e.classList.add('present'),
                e.removeAttribute('hidden'),
                e.removeAttribute('aria-hidden'),
                r || Ne({ target: e, type: 'visible', bubbles: !1 })
            let o = e.getAttribute('data-state')
            o && (L = L.concat(o.split(' ')))
        } else i = 0
        return i
    }
    function nt() {
        let e,
            i,
            s = ht(),
            a = s.length
        if (a && void 0 !== u) {
            let n = te.isActive() ? 10 : y.viewDistance
            v && (n = te.isActive() ? 6 : y.mobileViewDistance), le.isPrintingPDF() && (n = Number.MAX_VALUE)
            for (let r = 0; r < a; r++) {
                let o = s[r],
                    l = t(o, 'section'),
                    d = l.length
                if (
                    ((e = Math.abs((u || 0) - r) || 0),
                    y.loop && (e = Math.abs(((u || 0) - r) % (a - n)) || 0),
                    e < n ? J.load(o) : J.unload(o),
                    d)
                ) {
                    let t = We(o)
                    for (let s = 0; s < d; s++) {
                        let a = l[s]
                        ;(i = r === (u || 0) ? Math.abs((g || 0) - s) : Math.abs(s - t)),
                            e + i < n ? J.load(a) : J.unload(a)
                    }
                }
            }
            pt() ? V.wrapper.classList.add('has-vertical-slides') : V.wrapper.classList.remove('has-vertical-slides'),
                vt()
                    ? V.wrapper.classList.add('has-horizontal-slides')
                    : V.wrapper.classList.remove('has-horizontal-slides')
        }
    }
    function rt({ includeFragments: e = !1 } = {}) {
        let t = V.wrapper.querySelectorAll('.slides>section'),
            i = V.wrapper.querySelectorAll('.slides>section.present>section'),
            s = { left: u > 0, right: u < t.length - 1, up: g > 0, down: g < i.length - 1 }
        if (
            (y.loop && (t.length > 1 && ((s.left = !0), (s.right = !0)), i.length > 1 && ((s.up = !0), (s.down = !0))),
            t.length > 1 && 'linear' === y.navigationMode && ((s.right = s.right || s.down), (s.left = s.left || s.up)),
            !0 === e)
        ) {
            let e = ee.availableRoutes()
            ;(s.left = s.left || e.prev),
                (s.up = s.up || e.prev),
                (s.down = s.down || e.next),
                (s.right = s.right || e.next)
        }
        if (y.rtl) {
            let e = s.left
            ;(s.left = s.right), (s.right = e)
        }
        return s
    }
    function ot(e = m) {
        let t = ht(),
            i = 0
        e: for (let s = 0; s < t.length; s++) {
            let a = t[s],
                n = a.querySelectorAll('section')
            for (let t = 0; t < n.length; t++) {
                if (n[t] === e) break e
                'uncounted' !== n[t].dataset.visibility && i++
            }
            if (a === e) break
            !1 === a.classList.contains('stack') && 'uncounted' !== a.dataset.visibility && i++
        }
        return i
    }
    function lt() {
        let e = ft(),
            t = ot()
        if (m) {
            let e = m.querySelectorAll('.fragment')
            if (e.length > 0) {
                let i = 0.9
                t += (m.querySelectorAll('.fragment.visible').length / e.length) * i
            }
        }
        return Math.min(t / (e - 1), 1)
    }
    function dt(e) {
        let i,
            s = u,
            a = g
        if (e) {
            let i = Ke(e),
                n = i ? e.parentNode : e,
                r = ht()
            ;(s = Math.max(r.indexOf(n), 0)),
                (a = void 0),
                i && (a = Math.max(t(e.parentNode, 'section').indexOf(e), 0))
        }
        if (!e && m) {
            if (m.querySelectorAll('.fragment').length > 0) {
                let e = m.querySelector('.current-fragment')
                i =
                    e && e.hasAttribute('data-fragment-index')
                        ? parseInt(e.getAttribute('data-fragment-index'), 10)
                        : m.querySelectorAll('.fragment.visible').length - 1
            }
        }
        return { h: s, v: a, f: i }
    }
    function ct() {
        return t(V.wrapper, '.slides section:not(.stack):not([data-visibility="uncounted"])')
    }
    function ht() {
        return t(V.wrapper, '.slides>section')
    }
    function ut() {
        return t(V.wrapper, '.slides>section>section')
    }
    function gt() {
        return t(V.wrapper, '.slides>section.stack')
    }
    function vt() {
        return ht().length > 1
    }
    function pt() {
        return ut().length > 1
    }
    function mt() {
        return ct().map(e => {
            let t = {}
            for (let i = 0; i < e.attributes.length; i++) {
                let s = e.attributes[i]
                t[s.name] = s.value
            }
            return t
        })
    }
    function ft() {
        return ct().length
    }
    function bt(e, t) {
        let i = ht()[e],
            s = i && i.querySelectorAll('section')
        return s && s.length && 'number' == typeof t ? (s ? s[t] : void 0) : i
    }
    function yt(e, t) {
        let i = 'number' == typeof e ? bt(e, t) : e
        if (i) return i.slideBackgroundElement
    }
    function wt() {
        let e = dt()
        return { indexh: e.h, indexv: e.v, indexf: e.f, paused: Je(), overview: te.isActive() }
    }
    function Et(e) {
        if ('object' == typeof e) {
            Ge(s(e.indexh), s(e.indexv), s(e.indexf))
            let t = s(e.paused),
                i = s(e.overview)
            'boolean' == typeof t && t !== Je() && _e(t), 'boolean' == typeof i && i !== te.isActive() && te.toggle(i)
        }
    }
    function Rt() {
        if ((St(), m && !1 !== y.autoSlide)) {
            let e = m.querySelector('.current-fragment')
            e || (e = m.querySelector('.fragment'))
            let i = e ? e.getAttribute('data-autoslide') : null,
                s = m.parentNode ? m.parentNode.getAttribute('data-autoslide') : null,
                a = m.getAttribute('data-autoslide')
            i
                ? (j = parseInt(i, 10))
                : a
                ? (j = parseInt(a, 10))
                : s
                ? (j = parseInt(s, 10))
                : ((j = y.autoSlide),
                  0 === m.querySelectorAll('.fragment').length &&
                      t(m, 'video, audio').forEach(e => {
                          e.hasAttribute('data-autoplay') &&
                              j &&
                              (1e3 * e.duration) / e.playbackRate > j &&
                              (j = (1e3 * e.duration) / e.playbackRate + 1e3)
                      })),
                !j ||
                    _ ||
                    Je() ||
                    te.isActive() ||
                    (je() && !ee.availableRoutes().next && !0 !== y.loop) ||
                    ((X = setTimeout(() => {
                        'function' == typeof y.autoSlideMethod ? y.autoSlideMethod() : Mt(), Rt()
                    }, j)),
                    (Y = Date.now())),
                b && b.setPlaying(-1 !== X)
        }
    }
    function St() {
        clearTimeout(X), (X = -1)
    }
    function At() {
        j && !_ && ((_ = !0), Ne({ type: 'autoslidepaused' }), clearTimeout(X), b && b.setPlaying(!1))
    }
    function kt() {
        j && _ && ((_ = !1), Ne({ type: 'autoslideresumed' }), Rt())
    }
    function Lt({ skipFragments: e = !1 } = {}) {
        ;(S.hasNavigatedHorizontally = !0),
            y.rtl
                ? (te.isActive() || e || !1 === ee.next()) &&
                  rt().left &&
                  Ge(u + 1, 'grid' === y.navigationMode ? g : void 0)
                : (te.isActive() || e || !1 === ee.prev()) &&
                  rt().left &&
                  Ge(u - 1, 'grid' === y.navigationMode ? g : void 0)
    }
    function Ct({ skipFragments: e = !1 } = {}) {
        ;(S.hasNavigatedHorizontally = !0),
            y.rtl
                ? (te.isActive() || e || !1 === ee.prev()) &&
                  rt().right &&
                  Ge(u - 1, 'grid' === y.navigationMode ? g : void 0)
                : (te.isActive() || e || !1 === ee.next()) &&
                  rt().right &&
                  Ge(u + 1, 'grid' === y.navigationMode ? g : void 0)
    }
    function xt({ skipFragments: e = !1 } = {}) {
        ;(te.isActive() || e || !1 === ee.prev()) && rt().up && Ge(u, g - 1)
    }
    function Pt({ skipFragments: e = !1 } = {}) {
        ;(S.hasNavigatedVertically = !0), (te.isActive() || e || !1 === ee.next()) && rt().down && Ge(u, g + 1)
    }
    function Nt({ skipFragments: e = !1 } = {}) {
        if (e || !1 === ee.prev())
            if (rt().up) xt({ skipFragments: e })
            else {
                let i
                if (
                    ((i = y.rtl
                        ? t(V.wrapper, '.slides>section.future').pop()
                        : t(V.wrapper, '.slides>section.past').pop()),
                    i && i.classList.contains('stack'))
                ) {
                    let e = i.querySelectorAll('section').length - 1 || void 0
                    Ge(u - 1, e)
                } else Lt({ skipFragments: e })
            }
    }
    function Mt({ skipFragments: e = !1 } = {}) {
        if (((S.hasNavigatedHorizontally = !0), (S.hasNavigatedVertically = !0), e || !1 === ee.next())) {
            let t = rt()
            t.down && t.right && y.loop && Ve() && (t.down = !1),
                t.down ? Pt({ skipFragments: e }) : y.rtl ? Lt({ skipFragments: e }) : Ct({ skipFragments: e })
        }
    }
    function Dt(e) {
        y.autoSlideStoppable && At()
    }
    function It(e) {
        let t = e.data
        if (
            'string' == typeof t &&
            '{' === t.charAt(0) &&
            '}' === t.charAt(t.length - 1) &&
            ((t = JSON.parse(t)), t.method && 'function' == typeof h[t.method])
        )
            if (!1 === k.test(t.method)) {
                const e = h[t.method].apply(h, t.args)
                Me('callback', { method: t.method, result: e })
            } else console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API')
    }
    function Tt(e) {
        'running' === $ &&
            /section/gi.test(e.target.nodeName) &&
            (($ = 'idle'),
            Ne({ type: 'slidetransitionend', data: { indexh: u, indexv: g, previousSlide: p, currentSlide: m } }))
    }
    function Ft(e) {
        const t = r(e.target, 'a[href^="#"]')
        if (t) {
            const i = t.getAttribute('href'),
                s = se.getIndicesFromHash(i)
            s && (h.slide(s.h, s.v, s.f), e.preventDefault())
        }
    }
    function zt(e) {
        qe()
    }
    function Ht(e) {
        !1 === document.hidden &&
            document.activeElement !== document.body &&
            ('function' == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus())
    }
    function qt(e) {
        ;(document.fullscreenElement || document.webkitFullscreenElement) === V.wrapper &&
            (e.stopImmediatePropagation(),
            setTimeout(() => {
                h.layout(), h.focus.focus()
            }, 1))
    }
    function Bt(e) {
        if (e.currentTarget && e.currentTarget.hasAttribute('href')) {
            let t = e.currentTarget.getAttribute('href')
            t && (Te(t), e.preventDefault())
        }
    }
    function Ot(e) {
        je() && !1 === y.loop ? (Ge(0, 0), kt()) : _ ? kt() : At()
    }
    const Ut = {
        VERSION: '4.3.1',
        initialize: ue,
        configure: Se,
        destroy: Le,
        sync: et,
        syncSlide: tt,
        syncFragments: ee.sync.bind(ee),
        slide: Ge,
        left: Lt,
        right: Ct,
        up: xt,
        down: Pt,
        prev: Nt,
        next: Mt,
        navigateLeft: Lt,
        navigateRight: Ct,
        navigateUp: xt,
        navigateDown: Pt,
        navigatePrev: Nt,
        navigateNext: Mt,
        navigateFragment: ee.goto.bind(ee),
        prevFragment: ee.prev.bind(ee),
        nextFragment: ee.next.bind(ee),
        on: Ce,
        off: xe,
        addEventListener: Ce,
        removeEventListener: xe,
        layout: qe,
        shuffle: st,
        availableRoutes: rt,
        availableFragments: ee.availableRoutes.bind(ee),
        toggleHelp: Fe,
        toggleOverview: te.toggle.bind(te),
        togglePause: _e,
        toggleAutoSlide: Qe,
        isFirstSlide: $e,
        isLastSlide: je,
        isLastVerticalSlide: Ve,
        isVerticalSlide: Ke,
        isPaused: Je,
        isAutoSliding: Ze,
        isSpeakerNotes: he.isSpeakerNotesWindow.bind(he),
        isOverview: te.isActive.bind(te),
        isFocused: de.isFocused.bind(de),
        isPrintingPDF: le.isPrintingPDF.bind(le),
        isReady: () => w,
        loadSlide: J.load.bind(J),
        unloadSlide: J.unload.bind(J),
        showPreview: Te,
        hidePreview: He,
        addEventListeners: Ae,
        removeEventListeners: ke,
        dispatchEvent: Ne,
        getState: wt,
        setState: Et,
        getProgress: lt,
        getIndices: dt,
        getSlidesAttributes: mt,
        getSlidePastCount: ot,
        getTotalSlides: ft,
        getSlide: bt,
        getPreviousSlide: () => p,
        getCurrentSlide: () => m,
        getSlideBackground: yt,
        getSlideNotes: he.getSlideNotes.bind(he),
        getSlides: ct,
        getHorizontalSlides: ht,
        getVerticalSlides: ut,
        hasHorizontalSlides: vt,
        hasVerticalSlides: pt,
        hasNavigatedHorizontally: () => S.hasNavigatedHorizontally,
        hasNavigatedVertically: () => S.hasNavigatedVertically,
        addKeyBinding: ie.addKeyBinding.bind(ie),
        removeKeyBinding: ie.removeKeyBinding.bind(ie),
        triggerKey: ie.triggerKey.bind(ie),
        registerKeyboardShortcut: ie.registerKeyboardShortcut.bind(ie),
        getComputedSlideSize: Oe,
        getScale: () => C,
        getConfig: () => y,
        getQueryHash: d,
        getSlidePath: se.getHash.bind(se),
        getRevealElement: () => n,
        getSlidesElement: () => V.slides,
        getViewportElement: () => V.viewport,
        getBackgroundsElement: () => G.element,
        registerPlugin: oe.registerPlugin.bind(oe),
        hasPlugin: oe.hasPlugin.bind(oe),
        getPlugin: oe.getPlugin.bind(oe),
        getPlugins: oe.getRegisteredPlugins.bind(oe),
    }
    return (
        e(h, {
            ...Ut,
            announceStatus: be,
            getStatusText: ye,
            print: le,
            focus: de,
            progress: ne,
            controls: ae,
            location: se,
            overview: te,
            fragments: ee,
            slideContent: J,
            slideNumber: Q,
            onUserInput: Dt,
            closeOverlay: He,
            updateSlidesVisibility: nt,
            layoutSlideContents: Be,
            transformSlides: Pe,
            cueAutoSlide: Rt,
            cancelAutoSlide: St,
        }),
        Ut
    )
}
let $ = V,
    j = []
;($.initialize = e => (
    Object.assign($, new V(document.querySelector('.reveal'), e)), j.map(e => e($)), $.initialize()
)),
    ['configure', 'on', 'off', 'addEventListener', 'removeEventListener', 'registerPlugin'].forEach(e => {
        $[e] = (...t) => {
            j.push(i => i[e].call(null, ...t))
        }
    }),
    ($.isReady = () => !1),
    ($.VERSION = '4.3.1')
export default $
//# sourceMappingURL=reveal.esm.js.map
