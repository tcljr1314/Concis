!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('react'), require('react-dom'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react', 'react-dom'], t)
    : t(
        (((e = 'undefined' != typeof globalThis ? globalThis : e || self).umd = e.umd || {}),
        (e.umd.js = {})),
        e.React,
        e.ReactDOM,
      );
})(this, function (e, U, i) {
  'use strict';
  function o(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e };
  }
  var V = o(U),
    f = (function (n) {
      if (n && n.__esModule) return n;
      var r = Object.create(null);
      return (
        n &&
          Object.keys(n).forEach(function (e) {
            var t;
            'default' !== e &&
              ((t = Object.getOwnPropertyDescriptor(n, e)),
              Object.defineProperty(
                r,
                e,
                t.get
                  ? t
                  : {
                      enumerable: !0,
                      get: function () {
                        return n[e];
                      },
                    },
              ));
          }),
        (r.default = n),
        Object.freeze(r)
      );
    })(U),
    A = o(i);
  const g = U.forwardRef((e) => {
    const {
        type: t,
        width: n = '100%',
        height: r = '40',
        disabled: a,
        circle: l,
        dashed: i,
        loading: o,
        handleClick: c,
        children: u,
        style: s = {},
      } = e,
      f = U.useMemo(
        () =>
          t || 'danger' === t || 'warning' === t || 'warning' === t || 'text' === t ? t : 'primary',
        [t],
      ),
      d = U.useMemo(() => {
        var e = Object.assign(Object.assign({}, s), { width: '100%', height: '40px' });
        return (
          n && (e.width = n + 'px'),
          r && (e.height = r + 'px'),
          l && (e = Object.assign(Object.assign({}, e), { borderRadius: '50%' })),
          i &&
            'text' === t &&
            (e = Object.assign(Object.assign({}, e), { border: '1px dashed #ccc' })),
          (e = a ? Object.assign(Object.assign({}, e), { cursor: 'not-allowed' }) : e)
        );
      }, [n, r, l, i]);
    return V.default.createElement(
      'div',
      { className: 'button', style: { width: n + 'px', height: r + 'px' } },
      V.default.createElement(
        'button',
        { className: f, style: d, disabled: !!a, onClick: c },
        o && V.default.createElement('div', { className: 'loading1' }),
        u,
      ),
    );
  });
  g.displayName = 'Button';
  var i = U.memo((e) => {
      const { children: t, fontSize: n, borderColor: r, align: a, dashed: l } = e,
        i = U.useMemo(
          () =>
            'left' === a
              ? { justifyContent: 'left' }
              : 'right' === a
              ? { justifyContent: 'right' }
              : {},
          [a],
        ),
        o = U.useMemo(() => (r ? { borderColor: r } : {}), [r]),
        c = U.useMemo(() => {
          if (n) return { fontSize: n + 'px' };
        }, [n]);
      return V.default.createElement(
        'div',
        { className: 'divider' },
        V.default.createElement(
          'div',
          { className: l ? 'dashed' : 'line', style: Object.assign(Object.assign({}, i), o) },
          t && V.default.createElement('span', { className: 'line-text', style: c }, t),
        ),
      );
    }),
    c = U.memo((e) => {
      const { children: t, extraStyle: n } = e,
        r = U.useMemo(() => n || {}, [n]);
      return V.default.createElement('div', { className: 'layout', style: r }, t);
    }),
    P = U.memo((e) => {
      const { children: t, extraStyle: n } = e,
        r = U.useMemo(() => n || {}, [n]);
      return V.default.createElement('div', { className: 'header', style: r }, t);
    }),
    L = U.memo((e) => {
      const { row: t, extraStyle: n } = e,
        r = U.useMemo(() => (t ? { width: t + '0%' } : {}), [t]),
        a = U.useMemo(() => n || {}, [n]);
      return V.default.createElement(
        'div',
        { className: 'slider', style: Object.assign(Object.assign({}, r), a) },
        e.children,
      );
    }),
    R = U.memo((e) => {
      const { children: t, row: n, extraStyle: r } = e,
        a = U.useMemo(() => (n ? { width: n + '0%' } : {}), [n]),
        l = U.useMemo(() => r || {}, [r]);
      return V.default.createElement(
        'div',
        { className: 'layout-content', style: Object.assign(Object.assign({}, a), l) },
        t,
      );
    }),
    D = U.memo((e) => {
      const { children: t, extraStyle: n } = e,
        r = U.useMemo(() => n || {}, [n]);
      return V.default.createElement('div', { className: 'footer', style: r }, t);
    }),
    B = U.createContext({});
  function F(e, t, n) {
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n);
  }
  function T(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function d(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? T(Object(n), !0).forEach(function (e) {
            F(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : T(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function $(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function q(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            a,
            l = [],
            i = !0,
            o = !1;
          try {
            for (
              n = n.call(e);
              !(i = (r = n.next()).done) && (l.push(r.value), !t || l.length !== t);
              i = !0
            );
          } catch (e) {
            (o = !0), (a = e);
          } finally {
            try {
              i || null == n.return || n.return();
            } finally {
              if (o) throw a;
            }
          }
          return l;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return $(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return 'Map' === (n = 'Object' === n && e.constructor ? e.constructor.name : n) ||
            'Set' === n
            ? Array.from(e)
            : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? $(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      })()
    );
  }
  function Y(e, t) {
    if (null == e) return {};
    var n,
      r = (function (e, t) {
        if (null == e) return {};
        for (var n, r = {}, a = Object.keys(e), l = 0; l < a.length; l++)
          (n = a[l]), 0 <= t.indexOf(n) || (r[n] = e[n]);
        return r;
      })(e, t);
    if (Object.getOwnPropertySymbols)
      for (var a = Object.getOwnPropertySymbols(e), l = 0; l < a.length; l++)
        (n = a[l]),
          0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    return r;
  }
  var k =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function H(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var W = H(function (e) {
    function i() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        if (n) {
          var r,
            a = typeof n;
          if ('string' == a || 'number' == a) e.push(n);
          else if (Array.isArray(n)) !n.length || ((r = i.apply(null, n)) && e.push(r));
          else if ('object' == a)
            if (n.toString === Object.prototype.toString)
              for (var l in n) o.call(n, l) && n[l] && e.push(l);
            else e.push(n.toString());
        }
      }
      return e.join(' ');
    }
    var o;
    (o = {}.hasOwnProperty), e.exports ? (e.exports = i.default = i) : (window.classNames = i);
  });
  function J(e) {
    return (J =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          })(e);
  }
  function m(e, t) {
    var n =
      'string' ==
        typeof (e =
          'string' == typeof (n = e) && -1 !== n.indexOf('.') && 1 === parseFloat(n)
            ? '100%'
            : e) && -1 !== e.indexOf('%');
    return (
      (e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e)))),
      n && (e = parseInt(String(e * t), 10) / 100),
      Math.abs(e - t) < 1e-6
        ? 1
        : 360 === t
        ? (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t))
        : (e % t) / parseFloat(String(t))
    );
  }
  function v(e) {
    return e <= 1 ? ''.concat(100 * Number(e), '%') : e;
  }
  function Q(e) {
    return 1 === e.length ? '0' + e : String(e);
  }
  function ee(e, t, n) {
    return (
      n < 0 && (n += 1),
      1 < n && --n,
      n < 1 / 6 ? e + 6 * n * (t - e) : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
  }
  function te(e) {
    return y(e) / 255;
  }
  function y(e) {
    return parseInt(e, 16);
  }
  var ne = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
  };
  function u(e) {
    var t,
      n,
      r,
      a,
      l,
      i,
      o,
      c,
      u,
      s = { r: 0, g: 0, b: 0 },
      f = 1,
      d = null,
      h = !1,
      p = !1;
    return (
      'object' ==
        typeof (e =
          'string' == typeof e
            ? (function (e) {
                if (0 === (e = e.trim().toLowerCase()).length) return !1;
                var t = !1;
                if (ne[e]) (e = ne[e]), (t = !0);
                else if ('transparent' === e) return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
                var n = b.rgb.exec(e);
                return n
                  ? { r: n[1], g: n[2], b: n[3] }
                  : (n = b.rgba.exec(e))
                  ? { r: n[1], g: n[2], b: n[3], a: n[4] }
                  : (n = b.hsl.exec(e))
                  ? { h: n[1], s: n[2], l: n[3] }
                  : (n = b.hsla.exec(e))
                  ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                  : (n = b.hsv.exec(e))
                  ? { h: n[1], s: n[2], v: n[3] }
                  : (n = b.hsva.exec(e))
                  ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                  : (n = b.hex8.exec(e))
                  ? { r: y(n[1]), g: y(n[2]), b: y(n[3]), a: te(n[4]), format: t ? 'name' : 'hex8' }
                  : (n = b.hex6.exec(e))
                  ? { r: y(n[1]), g: y(n[2]), b: y(n[3]), format: t ? 'name' : 'hex' }
                  : (n = b.hex4.exec(e))
                  ? {
                      r: y(n[1] + n[1]),
                      g: y(n[2] + n[2]),
                      b: y(n[3] + n[3]),
                      a: te(n[4] + n[4]),
                      format: t ? 'name' : 'hex8',
                    }
                  : !!(n = b.hex3.exec(e)) && {
                      r: y(n[1] + n[1]),
                      g: y(n[2] + n[2]),
                      b: y(n[3] + n[3]),
                      format: t ? 'name' : 'hex',
                    };
              })(e)
            : e) &&
        (x(e.r) && x(e.g) && x(e.b)
          ? ((i = e.r),
            (a = e.g),
            (l = e.b),
            (s = { r: 255 * m(i, 255), g: 255 * m(a, 255), b: 255 * m(l, 255) }),
            (h = !0),
            (p = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb'))
          : x(e.h) && x(e.s) && x(e.v)
          ? ((d = v(e.s)),
            (i = v(e.v)),
            (a = e.h),
            (l = d),
            (i = i),
            (a = 6 * m(a, 360)),
            (l = m(l, 100)),
            (i = m(i, 100)),
            (o = Math.floor(a)),
            (s = {
              r:
                255 *
                [
                  i,
                  (u = i * (1 - (a -= o) * l)),
                  (c = i * (1 - l)),
                  c,
                  (a = i * (1 - (1 - a) * l)),
                  i,
                ][(l = o % 6)],
              g: 255 * [a, i, i, u, c, c][l],
              b: 255 * [c, c, a, i, i, u][l],
            }),
            (h = !0),
            (p = 'hsv'))
          : x(e.h) &&
            x(e.s) &&
            x(e.l) &&
            ((d = v(e.s)),
            (o = v(e.l)),
            (c = e.h),
            (u = d),
            (d = o),
            (c = m(c, 360)),
            (u = m(u, 100)),
            (d = m(d, 100)),
            0 === u
              ? (t = r = n = d)
              : ((t = ee((u = 2 * d - (d = d < 0.5 ? d * (1 + u) : d + u - d * u)), d, c + 1 / 3)),
                (n = ee(u, d, c)),
                (r = ee(u, d, c - 1 / 3))),
            (s = { r: 255 * t, g: 255 * n, b: 255 * r }),
            (h = !0),
            (p = 'hsl')),
        Object.prototype.hasOwnProperty.call(e, 'a') && (f = e.a)),
      (d = f),
      (d = parseFloat(d)),
      (f = d = isNaN(d) || d < 0 || 1 < d ? 1 : d),
      {
        ok: h,
        format: e.format || p,
        r: Math.min(255, Math.max(s.r, 0)),
        g: Math.min(255, Math.max(s.g, 0)),
        b: Math.min(255, Math.max(s.b, 0)),
        a: f,
      }
    );
  }
  var t = '(?:'.concat('[-\\+]?\\d*\\.\\d+%?', ')|(?:').concat('[-\\+]?\\d+%?', ')'),
    n = '[\\s|\\(]+('.concat(t, ')[,|\\s]+(').concat(t, ')[,|\\s]+(').concat(t, ')\\s*\\)?'),
    re = '[\\s|\\(]+('
      .concat(t, ')[,|\\s]+(')
      .concat(t, ')[,|\\s]+(')
      .concat(t, ')[,|\\s]+(')
      .concat(t, ')\\s*\\)?'),
    b = {
      CSS_UNIT: new RegExp(t),
      rgb: new RegExp('rgb' + n),
      rgba: new RegExp('rgba' + re),
      hsl: new RegExp('hsl' + n),
      hsla: new RegExp('hsla' + re),
      hsv: new RegExp('hsv' + n),
      hsva: new RegExp('hsva' + re),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };
  function x(e) {
    return Boolean(b.CSS_UNIT.exec(String(e)));
  }
  var ae = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
  function le(e) {
    e = (function (e, t, n) {
      (e = m(e, 255)), (t = m(t, 255)), (n = m(n, 255));
      var r = Math.max(e, t, n),
        a = Math.min(e, t, n),
        l = 0,
        i = r,
        o = r - a,
        c = 0 === r ? 0 : o / r;
      if (r === a) l = 0;
      else {
        switch (r) {
          case e:
            l = (t - n) / o + (t < n ? 6 : 0);
            break;
          case t:
            l = (n - e) / o + 2;
            break;
          case n:
            l = (e - t) / o + 4;
        }
        l /= 6;
      }
      return { h: l, s: c, v: i };
    })(e.r, e.g, e.b);
    return { h: 360 * e.h, s: e.s, v: e.v };
  }
  function ie(e) {
    var n = e.r,
      t = e.g,
      e = e.b;
    return '#'.concat(
      (function (e, t) {
        e = [
          Q(Math.round(n).toString(16)),
          Q(Math.round(e).toString(16)),
          Q(Math.round(t).toString(16)),
        ];
        return e.join('');
      })(t, e),
    );
  }
  function oe(e, t, n) {
    return (
      (n =
        60 <= Math.round(e.h) && Math.round(e.h) <= 240
          ? n
            ? Math.round(e.h) - 2 * t
            : Math.round(e.h) + 2 * t
          : n
          ? Math.round(e.h) + 2 * t
          : Math.round(e.h) - 2 * t) < 0
        ? (n += 360)
        : 360 <= n && (n -= 360),
      n
    );
  }
  function ce(e, t, n) {
    return 0 === e.h && 0 === e.s
      ? e.s
      : (1 < (e = n ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) && (e = 1),
        (e = n && 5 === t && 0.1 < e ? 0.1 : e) < 0.06 && (e = 0.06),
        Number(e.toFixed(2)));
  }
  function ue(e, t, n) {
    return 1 < (n = n ? e.v + 0.05 * t : e.v - 0.15 * t) && (n = 1), Number(n.toFixed(2));
  }
  function se(e, t) {
    for (
      var r = 1 < arguments.length && void 0 !== t ? t : {}, a = [], n = u(e), l = 5;
      0 < l;
      --l
    ) {
      var i = le(n),
        i = ie(u({ h: oe(i, l, !0), s: ce(i, l, !0), v: ue(i, l, !0) }));
      a.push(i);
    }
    a.push(ie(n));
    for (var o = 1; o <= 4; o += 1) {
      var c = le(n),
        c = ie(u({ h: oe(c, o), s: ce(c, o), v: ue(c, o) }));
      a.push(c);
    }
    return 'dark' === r.theme
      ? ae.map(function (e) {
          var t,
            n = e.index,
            e = e.opacity;
          return ie(
            ((t = u(r.backgroundColor || '#141414')),
            (n = u(a[n])),
            (e = 100 * e),
            (e /= 100),
            { r: (n.r - t.r) * e + t.r, g: (n.g - t.g) * e + t.g, b: (n.b - t.b) * e + t.b }),
          );
        })
      : a;
  }
  var fe = {
      red: '#F5222D',
      volcano: '#FA541C',
      orange: '#FA8C16',
      gold: '#FAAD14',
      yellow: '#FADB14',
      lime: '#A0D911',
      green: '#52C41A',
      cyan: '#13C2C2',
      blue: '#1890FF',
      geekblue: '#2F54EB',
      purple: '#722ED1',
      magenta: '#EB2F96',
      grey: '#666666',
    },
    de = {},
    he = {},
    pe =
      (Object.keys(fe).forEach(function (e) {
        (de[e] = se(fe[e])),
          (de[e].primary = de[e][5]),
          (he[e] = se(fe[e], { theme: 'dark', backgroundColor: '#141414' })),
          (he[e].primary = he[e][5]);
      }),
      {});
  function me(e, t) {
    'production' === process.env.NODE_ENV ||
      e ||
      void 0 === console ||
      console.error('Warning: '.concat(t));
  }
  var ge = 'rc-util-key';
  function ve(e) {
    e = (0 < arguments.length && void 0 !== e ? e : {}).mark;
    return e ? (e.startsWith('data-') ? e : 'data-'.concat(e)) : ge;
  }
  function ye(e) {
    return e.attachTo || document.querySelector('head') || document.body;
  }
  function be(e, t) {
    t = 1 < arguments.length && void 0 !== t ? t : {};
    if ('undefined' == typeof window || !window.document || !window.document.createElement)
      return null;
    var n = document.createElement('style'),
      r =
        (null != (r = t.csp) && r.nonce && (n.nonce = null == (r = t.csp) ? void 0 : r.nonce),
        (n.innerHTML = e),
        ye(t)),
      e = r.firstChild;
    return (
      t.prepend && r.prepend
        ? r.prepend(n)
        : t.prepend && e
        ? r.insertBefore(n, e)
        : r.appendChild(n),
      n
    );
  }
  var xe = new Map();
  function Ee(e, t, n) {
    var r,
      n = 2 < arguments.length && void 0 !== n ? n : {},
      a = ye(n),
      a =
        (xe.has(a) || ((r = (l = be('', n)).parentNode), xe.set(a, r), r.removeChild(l)),
        (function (t, e) {
          var n = 1 < arguments.length && void 0 !== e ? e : {},
            e = ye(n);
          return Array.from(xe.get(e).children).find(function (e) {
            return 'STYLE' === e.tagName && e.getAttribute(ve(n)) === t;
          });
        })(t, n));
    if (a)
      return (
        null != (r = n.csp) &&
          r.nonce &&
          a.nonce !== (null == (l = n.csp) ? void 0 : l.nonce) &&
          (a.nonce = null == (r = n.csp) ? void 0 : r.nonce),
        a.innerHTML !== e && (a.innerHTML = e)
      );
    var l = be(e, n);
    l.setAttribute(ve(n), t);
  }
  function we(e) {
    return (
      'object' === J(e) &&
      'string' == typeof e.name &&
      'string' == typeof e.theme &&
      ('object' === J(e.icon) || 'function' == typeof e.icon)
    );
  }
  function _e(e) {
    var r = 0 < arguments.length && void 0 !== e ? e : {};
    return Object.keys(r).reduce(function (e, t) {
      var n = r[t];
      return 'class' === t ? ((e.className = n), delete e.class) : (e[t] = n), e;
    }, {});
  }
  function ke(e) {
    return se(e)[0];
  }
  function Ne(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
  }
  function Ce(e) {
    var t,
      n = e.icon,
      r = e.className,
      a = e.onClick,
      l = e.style,
      i = e.primaryColor,
      o = e.secondaryColor,
      e = Y(e, Se),
      c = s;
    return (
      i && (c = { primaryColor: i, secondaryColor: o || ke(i) }),
      (function (e) {
        var t =
            0 < arguments.length && void 0 !== e
              ? e
              : '\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n',
          n = U.useContext(B).csp;
        U.useEffect(function () {
          Ee(t, '@ant-design-icons', { prepend: !0, csp: n });
        }, []);
      })(),
      (o = we(n)),
      (i = 'icon should be icon definiton, but got '.concat(n)),
      (o = o),
      (i = '[@ant-design/icons] '.concat(i)),
      (t = me),
      (i = i),
      o || pe[i] || (t(!1, i), (pe[i] = !0)),
      we(n)
        ? (function n(r, a, e) {
            return e
              ? V.default.createElement(
                  r.tag,
                  d(d({ key: a }, _e(r.attrs)), e),
                  (r.children || []).map(function (e, t) {
                    return n(e, ''.concat(a, '-').concat(r.tag, '-').concat(t));
                  }),
                )
              : V.default.createElement(
                  r.tag,
                  d({ key: a }, _e(r.attrs)),
                  (r.children || []).map(function (e, t) {
                    return n(e, ''.concat(a, '-').concat(r.tag, '-').concat(t));
                  }),
                );
          })(
            (o =
              (o = n) && 'function' == typeof o.icon
                ? d(d({}, o), {}, { icon: o.icon(c.primaryColor, c.secondaryColor) })
                : o).icon,
            'svg-'.concat(o.name),
            d(
              {
                className: r,
                onClick: a,
                style: l,
                'data-icon': o.name,
                width: '1em',
                height: '1em',
                fill: 'currentColor',
                'aria-hidden': 'true',
              },
              e,
            ),
          )
        : null
    );
  }
  var Se = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'],
    s = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 },
    Oe =
      ((Ce.displayName = 'IconReact'),
      (Ce.getTwoToneColors = function () {
        return d({}, s);
      }),
      (Ce.setTwoToneColors = function (e) {
        var t = e.primaryColor,
          e = e.secondaryColor;
        (s.primaryColor = t), (s.secondaryColor = e || ke(t)), (s.calculated = !!e);
      }),
      Ce);
  function je(e) {
    var e = q(Ne(e), 2),
      t = e[0],
      e = e[1];
    return Oe.setTwoToneColors({ primaryColor: t, secondaryColor: e });
  }
  function Ie(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: nt }));
  }
  function ze(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: rt }));
  }
  function Me(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: lt }));
  }
  function Ae(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: ot }));
  }
  function Pe(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: ut }));
  }
  function Le(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: ft }));
  }
  function Re(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: dt }));
  }
  function De(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: pt }));
  }
  function Be(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: mt }));
  }
  function Fe(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: vt }));
  }
  function Te(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: bt }));
  }
  function $e(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: Et }));
  }
  function qe(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: _t }));
  }
  function Ye(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: Nt }));
  }
  function He(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: St }));
  }
  function We(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: jt }));
  }
  function Je(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: zt }));
  }
  function Ue(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: At }));
  }
  function Ve(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: Lt }));
  }
  function Ke(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: Dt }));
  }
  function Ge(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: Ft }));
  }
  function Ze(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: $t }));
  }
  function Xe(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: Yt }));
  }
  function Qe(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: Wt }));
  }
  function et(e, t) {
    return f.createElement(r, d(d({}, e), {}, { ref: t, icon: Ut }));
  }
  var tt = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'],
    t =
      (je('#1890ff'),
      f.forwardRef(function (e, t) {
        var n = e.className,
          r = e.icon,
          a = e.spin,
          l = e.rotate,
          i = e.tabIndex,
          o = e.onClick,
          c = e.twoToneColor,
          e = Y(e, tt),
          u = f.useContext(B).prefixCls,
          u = void 0 === u ? 'anticon' : u,
          u = W(
            u,
            (F((s = {}), ''.concat(u, '-').concat(r.name), !!r.name),
            F(s, ''.concat(u, '-spin'), !!a || 'loading' === r.name),
            s),
            n,
          ),
          a = i,
          s =
            (void 0 === i && o && (a = -1),
            l
              ? { msTransform: 'rotate('.concat(l, 'deg)'), transform: 'rotate('.concat(l, 'deg)') }
              : void 0),
          n = q(Ne(c), 2),
          i = n[0],
          l = n[1];
        return f.createElement(
          'span',
          d(
            d({ role: 'img', 'aria-label': r.name }, e),
            {},
            { ref: t, tabIndex: a, onClick: o, className: u },
          ),
          f.createElement(Oe, { icon: r, primaryColor: i, secondaryColor: l, style: s }),
        );
      })),
    r =
      ((t.displayName = 'AntdIcon'),
      (t.getTwoToneColor = function () {
        var e = Oe.getTwoToneColors();
        return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
      }),
      (t.setTwoToneColor = je),
      t),
    nt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z',
            },
          },
        ],
      },
      name: 'caret-down',
      theme: 'outlined',
    },
    K = ((Ie.displayName = 'CaretDownOutlined'), f.forwardRef(Ie)),
    rt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z',
            },
          },
        ],
      },
      name: 'caret-left',
      theme: 'outlined',
    },
    at = ((ze.displayName = 'CaretLeftOutlined'), f.forwardRef(ze)),
    lt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z',
            },
          },
        ],
      },
      name: 'caret-right',
      theme: 'outlined',
    },
    it = ((Me.displayName = 'CaretRightOutlined'), f.forwardRef(Me)),
    ot = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z',
            },
          },
        ],
      },
      name: 'caret-up',
      theme: 'outlined',
    },
    ct = ((Ae.displayName = 'CaretUpOutlined'), f.forwardRef(Ae)),
    ut = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z',
            },
          },
        ],
      },
      name: 'check-circle',
      theme: 'filled',
    },
    st = ((Pe.displayName = 'CheckCircleFilled'), f.forwardRef(Pe)),
    ft = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z',
            },
          },
        ],
      },
      name: 'check',
      theme: 'outlined',
    },
    N = ((Le.displayName = 'CheckOutlined'), f.forwardRef(Le)),
    dt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z',
            },
          },
        ],
      },
      name: 'close-circle',
      theme: 'filled',
    },
    ht = ((Re.displayName = 'CloseCircleFilled'), f.forwardRef(Re)),
    pt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
            },
          },
        ],
      },
      name: 'close',
      theme: 'outlined',
    },
    C = ((De.displayName = 'CloseOutlined'), f.forwardRef(De)),
    mt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z',
            },
          },
        ],
      },
      name: 'double-left',
      theme: 'outlined',
    },
    gt = ((Be.displayName = 'DoubleLeftOutlined'), f.forwardRef(Be)),
    vt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z',
            },
          },
        ],
      },
      name: 'double-right',
      theme: 'outlined',
    },
    yt = ((Fe.displayName = 'DoubleRightOutlined'), f.forwardRef(Fe)),
    bt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
            },
          },
        ],
      },
      name: 'down',
      theme: 'outlined',
    },
    xt = ((Te.displayName = 'DownOutlined'), f.forwardRef(Te)),
    Et = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
            },
          },
        ],
      },
      name: 'ellipsis',
      theme: 'outlined',
    },
    wt = (($e.displayName = 'EllipsisOutlined'), f.forwardRef($e)),
    _t = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
            },
          },
        ],
      },
      name: 'exclamation-circle',
      theme: 'filled',
    },
    kt = ((qe.displayName = 'ExclamationCircleFilled'), f.forwardRef(qe)),
    Nt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z',
            },
          },
        ],
      },
      name: 'eye',
      theme: 'outlined',
    },
    Ct = ((Ye.displayName = 'EyeOutlined'), f.forwardRef(Ye)),
    St = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
          {
            tag: 'path',
            attrs: {
              d: 'M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z',
            },
          },
          {
            tag: 'path',
            attrs: {
              d: 'M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7a321 321 0 01-44.5 55.7 317.17 317.17 0 01-101.3 68.3c-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3a321 321 0 0144.5 55.7c3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8a9.18 9.18 0 00-8.2-13.3z',
            },
          },
        ],
      },
      name: 'field-time',
      theme: 'outlined',
    },
    Ot = ((He.displayName = 'FieldTimeOutlined'), f.forwardRef(He)),
    jt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M603.3 327.5l-246 178a7.95 7.95 0 000 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z',
            },
          },
          {
            tag: 'path',
            attrs: {
              d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
            },
          },
        ],
      },
      name: 'left-circle',
      theme: 'outlined',
    },
    It = ((We.displayName = 'LeftCircleOutlined'), f.forwardRef(We)),
    zt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
            },
          },
        ],
      },
      name: 'left',
      theme: 'outlined',
    },
    Mt = ((Je.displayName = 'LeftOutlined'), f.forwardRef(Je)),
    At = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
            },
          },
        ],
      },
      name: 'loading',
      theme: 'outlined',
    },
    Pt = ((Ue.displayName = 'LoadingOutlined'), f.forwardRef(Ue)),
    Lt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
          {
            tag: 'path',
            attrs: { d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z' },
          },
          {
            tag: 'path',
            attrs: { d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z' },
          },
        ],
      },
      name: 'plus',
      theme: 'outlined',
    },
    Rt = ((Ve.displayName = 'PlusOutlined'), f.forwardRef(Ve)),
    Dt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z',
            },
          },
          {
            tag: 'path',
            attrs: {
              d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
            },
          },
        ],
      },
      name: 'right-circle',
      theme: 'outlined',
    },
    Bt = ((Ke.displayName = 'RightCircleOutlined'), f.forwardRef(Ke)),
    Ft = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
            },
          },
        ],
      },
      name: 'right',
      theme: 'outlined',
    },
    Tt = ((Ge.displayName = 'RightOutlined'), f.forwardRef(Ge)),
    $t = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 000 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z',
            },
          },
        ],
      },
      name: 'rollback',
      theme: 'outlined',
    },
    qt = ((Ze.displayName = 'RollbackOutlined'), f.forwardRef(Ze)),
    Yt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
            },
          },
        ],
      },
      name: 'search',
      theme: 'outlined',
    },
    Ht = ((Xe.displayName = 'SearchOutlined'), f.forwardRef(Xe)),
    Wt = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z',
            },
          },
        ],
      },
      name: 'swap-right',
      theme: 'outlined',
    },
    Jt = ((Qe.displayName = 'SwapRightOutlined'), f.forwardRef(Qe)),
    Ut = {
      icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
          {
            tag: 'path',
            attrs: {
              d: 'M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z',
            },
          },
        ],
      },
      name: 'up',
      theme: 'outlined',
    },
    Vt = ((et.displayName = 'UpOutlined'), f.forwardRef(et)),
    Kt = U.memo((e) => {
      const {
          style: t,
          changePageCallback: n,
          changePageSizeCallback: r,
          total: a,
          pageSizeOptions: l,
          showJumpInput: i,
          showSizeChanger: o,
        } = e,
        [c, u] = U.useState(1),
        [s, f] = U.useState([]),
        [d, h] = U.useState(l ? l[0] : 10),
        p = U.useMemo(() => {
          if ((u(1), 6 < Math.ceil(a / d))) f([2, 3, 4, 5, 6]);
          else if (2 < Math.ceil(a / d)) {
            const n = new Array(Math.ceil(a / d) - 2).fill(0);
            n.forEach((e, t) => {
              n[t] = t + 2;
            }),
              f(n);
          } else f([]);
          return Math.ceil(a / d);
        }, [a, d]),
        m = (e) => () => {
          if (p <= 6) return n && n(e), u(e);
          4 < e && e <= p - 4 && f([e - 2, e - 1, e, e + 1, e + 2]),
            e <= 4 && f([2, 3, 4, 5, 6]),
            e > p - 4 && f([p - 5, p - 4, p - 3, p - 2, p - 1]),
            u(e),
            n && n(e);
        };
      return V.default.createElement(
        'div',
        { className: 'pagination', style: t },
        V.default.createElement(
          'div',
          {
            className: 1 === c ? 'prev disabled' : 'prev',
            onClick: () => {
              if (1 !== c) {
                if ((u(c - 1), 6 < p)) {
                  if (c > p - 3) return;
                  4 < c ? f(s.map((e) => e - 1)) : c - 5 <= 4 && f([2, 3, 4, 5, 6]);
                }
                n && n(c - 1);
              }
            },
          },
          V.default.createElement(Mt, null),
        ),
        V.default.createElement(
          'div',
          { className: 1 === c ? 'actived numberBox' : 'numberBox', onClick: m(1) },
          '1',
        ),
        4 < c &&
          6 < p &&
          V.default.createElement(
            'div',
            {
              className: 'numberBox',
              onClick: () => {
                var e = 0;
                c - 5 <= 4
                  ? (f([2, 3, 4, 5, 6]), (e = c - 5 <= 1 ? 1 : c - 5))
                  : c + 5 > p
                  ? (f([c - 7, c - 6, c - 5, c - 4, c - 3]), (e = c - 5))
                  : 4 < c - 5 && (f(s.map((e) => e - 5)), (e = c - 5)),
                  u(e),
                  n && n(e);
              },
            },
            V.default.createElement(wt, null),
          ),
        p <= 4 &&
          1 <= s.length &&
          s.map((e, t) =>
            V.default.createElement(
              'div',
              { className: c === e ? 'actived numberBox' : 'numberBox', key: t, onClick: m(e) },
              e,
            ),
          ),
        4 < p &&
          s.map((e, t) =>
            V.default.createElement(
              'div',
              { className: c === e ? 'actived numberBox' : 'numberBox', key: t, onClick: m(e) },
              e,
            ),
          ),
        4 <= p - c &&
          6 < p &&
          V.default.createElement(
            'div',
            {
              className: 'numberBox',
              onClick: () => {
                var e = 0;
                c + 7 >= p
                  ? (f([p - 5, p - 4, p - 3, p - 2, p - 1]), (e = c + 5 > p ? p : c + 5))
                  : c - 5 < 0
                  ? (f([c + 3, c + 4, c + 5, c + 6, c + 7]), (e = c + 5))
                  : c + 5 < p && (f(s.map((e) => e + 5)), (e = c + 5)),
                  u(e),
                  n && n(e);
              },
            },
            V.default.createElement(wt, null),
          ),
        1 < p &&
          V.default.createElement(
            'div',
            { className: c === p ? 'actived numberBox' : 'numberBox', onClick: m(p) },
            p,
          ),
        V.default.createElement(
          'div',
          {
            className: c === p || p <= 1 ? 'next disabled' : 'next',
            onClick: () => {
              if (c !== p) {
                if ((u(c + 1), 6 < p))
                  if (c + 5 > p) f([p - 5, p - 4, p - 3, p - 2, p - 1]);
                  else {
                    if (c < 4) return;
                    c + 5 < p && f(s.map((e) => e + 1));
                  }
                n && n(c + 1);
              }
            },
          },
          V.default.createElement(Tt, null),
        ),
        Array.isArray(l) &&
          o &&
          V.default.createElement(Gt, {
            option: l.map((e) => ({ label: e + ' 条/页', value: e })),
            width: 100,
            handleSelectCallback: (e) => {
              h(e.value), r && r(e.value);
            },
          }),
        i &&
          V.default.createElement(
            'div',
            { className: 'jumpBox' },
            V.default.createElement('span', null, '跳至'),
            V.default.createElement('input', {
              type: 'text',
              className: 'jump',
              onKeyUp: (e) => {
                if (13 === e.keyCode) {
                  var t = Number(e.target.value);
                  if (t > p || t < 0 || isNaN(t)) return (e.target.value = '');
                  6 < t && t < p - 6
                    ? f([t - 2, t - 1, t, t + 1, t + 2])
                    : t - 5 < 0
                    ? f([2, 3, 4, 5, 6])
                    : t + 5 > p && f([p - 5, p - 4, p - 3, p - 2, p - 1]),
                    u(t),
                    n && n(t),
                    (e.target.value = '');
                }
              },
            }),
            V.default.createElement('span', null, '页'),
          ),
      );
    }),
    Gt = U.memo((e) => {
      const {
          option: n,
          width: t,
          placeholder: r,
          disabled: a,
          loading: l,
          showSearch: i,
          clearable: o,
          handleSelectCallback: c,
          handleTextChange: u,
        } = e,
        [s, f] = U.useState(''),
        [d, h] = U.useState(''),
        p = U.createRef(),
        m = () => {
          p.current && p.current.style && (p.current.style.height = '0px');
        },
        g =
          (U.useEffect(
            () => (
              (p.current.height = '0px'),
              window.addEventListener('click', m),
              () => {
                window.removeEventListener('click', m);
              }
            ),
            [],
          ),
          U.useMemo(() => (t ? { width: t + 'px' } : {}), [t])),
        v = U.useMemo(() => {
          if (a) return { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' };
        }, [a]),
        y = (e) => {
          e.stopPropagation(),
            a ||
              ('0px' === p.current.style.height || '' === p.current.style.height
                ? (p.current.style.height = i ? 100 * x.length + '%' : 100 * n.length + '%')
                : (p.current.style.height = '0px'));
        },
        b = (e, t) => {
          t.stopPropagation(),
            e.disabled || ((p.current.style.height = '0px'), f(e.label), h(e.value), c && c(e));
        },
        x = U.useMemo(() => (null == n ? void 0 : n.filter((e) => e.label.includes(s))), [n, s]),
        E = U.useCallback(
          (t) => {
            f(t.target.value),
              console.log(s),
              (p.current.style.height =
                100 * n.filter((e) => e.label.includes(t.target.value)).length + '%'),
              u && u(t.target.value);
          },
          [s],
        );
      return i
        ? V.default.createElement(
            V.default.Fragment,
            null,
            V.default.createElement(
              'div',
              { className: 'select', style: Object.assign(Object.assign({}, g), v) },
              V.default.createElement(
                'div',
                { className: 'selected' },
                V.default.createElement('input', {
                  type: 'text',
                  className: 'selected',
                  value: s,
                  placeholder: r,
                  onClick: y,
                  onChange: (e) => E(e),
                }),
                o
                  ? V.default.createElement(C, { onClick: () => f('') })
                  : V.default.createElement(xt, { onClick: y }),
              ),
              V.default.createElement(
                'div',
                { className: 'selectOptions', style: g, ref: p },
                x.map((t) =>
                  V.default.createElement(
                    'div',
                    {
                      key: t.label,
                      className: 'option',
                      style: t.disabled
                        ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' }
                        : {},
                      onClick: (e) => b(t, e),
                    },
                    t.label,
                  ),
                ),
              ),
            ),
          )
        : V.default.createElement(
            'div',
            { className: 'select', style: Object.assign(Object.assign({}, g), v) },
            V.default.createElement(
              'div',
              { className: 'selected', onClick: y },
              s
                ? V.default.createElement('div', { className: 'size' }, s)
                : (r && V.default.createElement('div', { className: 'placeholder' }, r)) ||
                    V.default.createElement('div', null),
              l ? V.default.createElement(Pt, null) : V.default.createElement(xt, null),
            ),
            V.default.createElement(
              'div',
              { className: 'selectOptions', style: g, ref: p },
              null == n
                ? void 0
                : n.map((t) =>
                    V.default.createElement(
                      'div',
                      {
                        key: t.label,
                        className: t.value == d ? 'select-option' : 'option',
                        style: t.disabled
                          ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' }
                          : {},
                        onClick: (e) => b(t, e),
                      },
                      t.label,
                    ),
                  ),
            ),
          );
    });
  const G = (e) => {
    const {
        width: t,
        moreStyle: n,
        type: r,
        placeholder: a,
        showClear: l,
        showTogglePwd: i,
        min: o,
        max: c,
        step: u,
        handleIptChange: s,
        handleKeyDown: f,
        handleIptFocus: d,
        handleClick: h,
        handleIptBlur: p,
        handleNumChange: m,
        clearCallback: g,
        defaultValue: v,
      } = e,
      [y, b] = U.useState(v || ''),
      [x, E] = U.useState(!0),
      w = U.createRef(),
      _ = U.useMemo(
        () => (i && 'password' === r ? (x ? 'password' : 'text') : r || 'text'),
        [r, i, x],
      ),
      k = U.useMemo(() => {
        let e = { width: '170px' };
        return t && (e.width = t + 'px'), Object.assign(Object.assign({}, e), n);
      }, [t, n]);
    return V.default.createElement(
      'div',
      { className: 'box', style: { width: t ? t + 'px' : '170px' } },
      V.default.createElement('input', {
        className: 'input',
        style: k,
        type: _,
        placeholder: a,
        value: v || y,
        onChange: (e) => {
          (n && Object.keys(n).includes('caretColor')) ||
            (b(e.target.value), s && s(e.target.value));
        },
        onBlur: (e) => {
          'num' === r && NaN == Number(y) && b(''), p && p();
        },
        onFocus: () => {
          d && d(y);
        },
        onKeyUp: (e) => f && f(e),
        onClick: () => {
          h && h();
        },
        ref: () => w,
      }),
      (l &&
        V.default.createElement(C, {
          style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
          onClick: () => {
            b(''), g && g();
          },
        })) ||
        ('password' === r &&
          i &&
          V.default.createElement(Ct, {
            style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
            onClick: () => E(!x),
          })) ||
        ('num' === r &&
          V.default.createElement(
            'div',
            { className: 'numTags' },
            V.default.createElement(Vt, {
              style: { cursor: 'pointer', fontSize: '10px' },
              onClick: () => {
                if ('num' === r && NaN == Number(y)) return b('');
                var e = u || 1;
                return u && c && Number(y) + e > c
                  ? (m && m(c), b(c))
                  : u && o && Number(y) + e < o
                  ? (m && m(o), b(o))
                  : (m && m(Number(y) + e), void b(Number(y) + e));
              },
            }),
            V.default.createElement(xt, {
              style: { cursor: 'pointer', fontSize: '10px' },
              onClick: () => {
                return 'num' === r && NaN == Number(y)
                  ? b('')
                  : ((e = u || 1),
                    u && o && Number(y) - e < o
                      ? (m && m(o), b(o))
                      : (m && m(Number(y) - e), void b(Number(y) - e)));
                var e;
              },
            }),
          )),
    );
  };
  var n = U.memo((e) => {
      e = e.children;
      return V.default.createElement('div', null, e);
    }),
    re = U.memo((e) => {
      const { children: t, value: n, canAddOption: r, boxStyle: a, onChange: l } = e,
        [i, o] = U.useState(n || 0),
        [c, u] = U.useState(t),
        [s, f] = U.useState(''),
        [d, h] = U.useState(r && !1),
        p = (e, t, n) => {
          e.disabled || (n && n.stopPropagation(), o(t), l && l(e, t), r && h(!1));
        },
        m = () => {
          o(c.length), h(!0);
        },
        g = (e) => {
          13 == e.keyCode && s && (u((e) => [...e, { props: { children: s } }]), h(!1));
        },
        v = (e) => {
          f(e);
        },
        y = U.useCallback(
          (e, t) => (e.disabled ? 'groupDisabledStyle' : t == i ? 'groupActive' : 'groupStyle'),
          [t, a, n, i],
        );
      return V.default.createElement(
        'div',
        { className: 'radioGroup' },
        c.map((t, n) =>
          a
            ? V.default.createElement(
                'div',
                {
                  className: y(t.props, n),
                  style: t.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' },
                  key: n,
                  onClick: (e) => p(t.props, n, e),
                },
                t.props.children,
              )
            : V.default.createElement(
                'div',
                {
                  className: 'radioBox',
                  style: t.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' },
                  key: n,
                  onClick: (e) => p(t.props, n, e),
                },
                V.default.createElement(
                  'span',
                  { className: t.props.disabled ? 'disabledLabel' : 'radioLabel' },
                  t.props.children,
                ),
                V.default.createElement('input', {
                  className: t.props.disabled ? 'disabledRadio' : 'radio',
                  readOnly: !0,
                  type: 'radio',
                  checked: i === n,
                  disabled: t.props.disabled,
                }),
              ),
        ),
        r
          ? a
            ? V.default.createElement(
                'div',
                { className: 'addOption' },
                V.default.createElement(
                  'div',
                  { className: i === c.length ? 'groupActive' : 'groupStyle', onClick: m },
                  'More...',
                ),
                d && V.default.createElement(G, { handleKeyDown: g, handleIptChange: v }),
              )
            : V.default.createElement(
                'div',
                { className: 'addOption' },
                V.default.createElement(
                  'div',
                  { className: 'radioBox', onClick: m },
                  V.default.createElement('span', { className: 'radioLabel' }, 'More...'),
                  V.default.createElement('input', {
                    className: 'radio',
                    type: 'radio',
                    readOnly: !0,
                    checked: i === c.length,
                  }),
                ),
                d && V.default.createElement(G, { handleKeyDown: g, handleIptChange: v }),
              )
          : V.default.createElement(V.default.Fragment, null),
      );
    }),
    t = U.memo((e) => {
      const [t, c] = U.useState(''),
        [n, u] = U.useState(''),
        [s, f] = U.useState({}),
        { items: r, width: a, dark: l, ableToggle: i, defaultOpen: o, handleRouteChange: d } = e,
        h =
          (U.useEffect(() => {
            const e = h(r, {}, '');
            if (o)
              for (var t in e)
                (e[t].height = e[t].childNum + 1),
                  0 < e[t].children.length &&
                    (e[t].children.map((e) => (e.height = 50 * (e.childNum + 1) + 'px')),
                    (e[t].height += e[t].children.reduce((e, t) => e.childNum + t.childNum))),
                  (e[t].height = 50 * e[t].height + 'px');
            f(e);
          }, []),
          U.useEffect(() => {
            d && d(n);
          }, [n]),
          (e, n, r) => (
            e.forEach((e) => {
              var t;
              e.children &&
                (1 == e.level
                  ? (n[e.key] = {
                      key: e.key,
                      height: '50px',
                      childNum: e.children.length,
                      level: e.level,
                      children: [],
                    })
                  : null != (t = n[r]) &&
                    t.children.push({
                      key: e.key,
                      height: '50px',
                      childNum: e.children.length,
                      level: e.level,
                    }),
                h(e.children, n, e.level && 1 == e.level ? e.key : ''));
            }),
            n
          )),
        p = (e) => {
          return s[e] ? { height: null == (e = s[e]) ? void 0 : e.height } : { height: '50px' };
        },
        m = U.useCallback(
          (t) => {
            for (var e in s) {
              var n = null == (n = s[e].children) ? void 0 : n.findIndex((e) => e.key == t);
              if (-1 !== n) return { height: s[e].children[n].height };
            }
            return { height: '50px' };
          },
          [s],
        ),
        g = U.useMemo(() => {
          if (a) {
            if ('string' == typeof a) return { width: a.includes('%') ? a : a + 'px' };
            if ('number' == typeof a) return { width: a + 'px' };
          }
          return { width: '220px' };
        }, [a]),
        v = (o) => {
          if (o.children)
            return o.children.map((i) =>
              V.default.createElement(
                'div',
                { key: i.key },
                V.default.createElement(
                  'div',
                  {
                    className: n == i.key ? 'activeMenuOptions' : 'childMenuOptions',
                    style: Object.assign({}, m(i.key)),
                  },
                  V.default.createElement(
                    'div',
                    {
                      className:
                        i.children && -1 !== i.children.findIndex((e) => e.key == n)
                          ? 'activeFatherTitle'
                          : 'fatherTitle',
                      onClick: (e) => {
                        var t = i,
                          n = o.key;
                        if (
                          (((2 != t.level || t.children) && 3 != t.level) || (c(n), u(t.key)),
                          2 == t.level)
                        ) {
                          const l = Object.assign({}, s);
                          for (var r in l)
                            if (
                              l[r].children &&
                              -1 !== l[r].children.findIndex((e) => e.key == t.key)
                            ) {
                              const n = l[r].children.findIndex((e) => e.key == t.key);
                              l[r].children[n].height =
                                '50px' == l[r].children[n].height
                                  ? 50 * (l[r].children[n].childNum + 1) + 'px'
                                  : '50px';
                              var a = 50 * (l[r].childNum - l[r].children.length) + 50;
                              (a += l[r].children.reduce(
                                (e, t) =>
                                  Number(e.height.split('px')[0]) + Number(t.height.split('px')[0]),
                              )),
                                (l[r].height = a);
                            }
                          f(l);
                        }
                        if (3 == t.level)
                          for (var r in s)
                            s[r].children &&
                              -1 !== s[r].children.findIndex((e) => e.key == n) &&
                              c(s[r].key);
                      },
                    },
                    V.default.createElement('span', null, i.label),
                    i.children &&
                      ('50px' == m(i.key).height
                        ? V.default.createElement(K, null)
                        : V.default.createElement(ct, null)),
                  ),
                  V.default.createElement(
                    'div',
                    { className: 'childMenuOptions', key: i.key },
                    i.children && v(i),
                  ),
                ),
              ),
            );
        };
      return V.default.createElement(
        'div',
        { className: l ? 'darkMenu' : 'menu', style: g },
        r.map((l) =>
          V.default.createElement(
            'div',
            { key: l.key },
            V.default.createElement(
              'div',
              { className: 'menuOptions', style: p(l.key) },
              V.default.createElement(
                'div',
                {
                  className: t == l.key ? 'activeFatherTitle' : 'fatherTitle',
                  onClick: (e) => {
                    {
                      var t = l;
                      e.stopPropagation();
                      const r = t.key,
                        a = Object.assign({}, s);
                      if (
                        ((a[r].height =
                          '50px' == a[r].height ? 50 * (a[r].childNum + 1) + 'px' : '50px'),
                        i)
                      ) {
                        if ('50px' !== a[r].height)
                          for (var n in a)
                            n !== r &&
                              ((a[n].height = '50px'),
                              a[n].children && a[n].children.map((e) => (e.height = '50px')));
                      } else
                        0 !== a[r].children.length &&
                          a[r].children.forEach((e) => {
                            e.height = '50px';
                          });
                      return void f(a);
                    }
                  },
                },
                V.default.createElement(
                  'div',
                  { className: 'left' },
                  V.default.createElement('i', null, l.icon),
                  V.default.createElement('span', null, l.label),
                ),
                '50px' == p(l.key).height
                  ? V.default.createElement(K, null)
                  : V.default.createElement(ct, null),
              ),
              V.default.createElement(V.default.Fragment, null, l.children && v(l)),
            ),
          ),
        ),
      );
    }),
    Zt = U.memo((e) => {
      const {
          children: t,
          affixType: n,
          offsetTop: r,
          offsetLeft: a,
          offsetBottom: l,
          offsetRight: i,
          style: o,
        } = e,
        [c, u] = U.useState({});
      let s;
      U.useEffect(() => {
        const e = document.querySelector('.affix');
        return (
          (s = new IntersectionObserver((e) => d(e))).observe(e),
          'scroll' == n
            ? (window.addEventListener('scroll', f),
              u(
                (e) => (
                  (e.position = 'relative'),
                  r && !e.bottom && (e.top = 0),
                  l && !e.top && (e.bottom = 0),
                  a && !e.right && (e.left = 0),
                  i && !e.left && (e.right = 0),
                  JSON.parse(JSON.stringify(e))
                ),
              ))
            : u(
                (e) => (
                  (e.position = 'fixed'),
                  r && !e.bottom && (e.top = r),
                  l && !e.top && (e.bottom = l),
                  a && !e.right && (e.left = a),
                  i && !e.left && (e.right = i),
                  JSON.parse(JSON.stringify(e))
                ),
              ),
          () => {
            s.unobserve(e);
          }
        );
      }, []);
      const f = () => {
          document.querySelector('.affix'),
            window.scrollY < 200 &&
              u((e) => {
                for (const t in e)
                  'position' == t
                    ? (e[t] = 'relative')
                    : ('right' != t && 'left' != t && 'top' != t && 'bottom' != t) || (e[t] = '0');
                return JSON.parse(JSON.stringify(e));
              });
        },
        d = (e) => {
          e.forEach((e) => {
            e.isIntersecting ||
              ('relative' == c.position &&
                u(
                  (e) => (
                    (e.position = 'fixed'),
                    r && r !== e.top && (e.top = r + 'px'),
                    l && l !== e.bottom && (e.bottom = l + 'px'),
                    a && a !== e.left && (e.left = a + 'px'),
                    i && i !== e.right && (e.right = i + 'px'),
                    JSON.parse(JSON.stringify(e))
                  ),
                ));
          });
        };
      return V.default.createElement(
        'div',
        { className: 'affix', style: Object.assign(Object.assign({}, c), o) },
        t,
      );
    }),
    Xt = U.memo((e) => {
      const { showClear: t, align: n, handleChange: r } = e,
        [s, a] = U.useState({
          startYear: new Date().getFullYear(),
          startMonth: new Date().getMonth() + 1,
          startDay: new Date().getDate(),
        }),
        [f, l] = U.useState({
          endYear: new Date().getFullYear(),
          endMonth: new Date().getMonth() + 2,
          endDay: new Date().getDate(),
        }),
        [i, o] = U.useState(''),
        [c, u] = U.useState(''),
        [, d] = U.useState(0),
        [, h] = U.useState(0),
        [p, m] = U.useState([]),
        [g, v] = U.useState([]),
        [y, b] = U.useState(!1),
        [x, E] = U.useState(!1),
        [w, _] = U.useState({ start: !1, end: !1 });
      let k = U.useRef(null);
      U.useEffect(() => {
        const { startYear: e, startMonth: t } = s,
          { endYear: n, endMonth: r } = f,
          a = new Date(e + `/${t}/1`).getDay(),
          l = new Date(n + `/${r}/1`).getDay(),
          i = new Date(e, t, 0).getDate(),
          o = new Date(n, r, 0).getDate(),
          c = new Array(a).fill(''),
          u = new Array(l).fill('');
        for (let e = 1; e < i + 1; e++) c.push(e);
        for (let e = 1; e < o + 1; e++) u.push(e);
        m(c), d(a), v(u), h(l);
      }, [s.startYear, s.startMonth, f.endYear, f.endMonth]),
        U.useEffect(() => {
          window.addEventListener('click', () => {
            b(!1),
              setTimeout(() => {
                E(!1);
              }, 300);
          });
        }, []),
        U.useEffect(() => {
          w.start &&
            w.end &&
            (b(!1),
            setTimeout(() => {
              E(!1);
            }, 300),
            _((e) => ((e.start = !1), (e.end = !1), Object.assign({}, e))),
            r && r(i, c));
        }, [w]);
      const N = (e) => {
          if ('start' == e) {
            const e = Object.assign({}, s);
            --e.startYear, a(e);
          } else if ('end' == e && f.endYear > s.startYear) {
            const e = Object.assign({}, f);
            --e.endYear, l(e);
          }
        },
        C = (e) => {
          if ('start' == e) {
            if (s.startYear < f.endYear) {
              const e = Object.assign({}, s);
              (e.startYear += 1), a(e);
            }
          } else if ('end' == e) {
            const e = Object.assign({}, f);
            (e.endYear += 1), l(e);
          }
        },
        S = (e) => {
          if ('start' == e) {
            const e = Object.assign({}, s);
            1 == e.startMonth ? ((e.startMonth = 12), --e.startYear) : --e.startMonth, a(e);
          } else if ('end' == e && (f.endYear != s.startYear || f.endMonth != s.startMonth)) {
            const e = Object.assign({}, f);
            1 == e.endMonth ? ((e.endMonth = 12), --e.endYear) : --e.endMonth,
              e.endDay < s.startDay && (e.endDay = s.startDay),
              l(e);
          }
        },
        O = (e) => {
          if ('start' == e) {
            if (f.endYear != s.startYear || f.endMonth != s.startMonth) {
              const e = Object.assign({}, s);
              12 == e.startMonth ? ((e.startMonth = 1), (e.startYear += 1)) : (e.startMonth += 1),
                a(e);
            }
          } else if ('end' == e) {
            const e = Object.assign({}, f);
            12 == e.endMonth ? ((e.endMonth = 1), (e.endYear += 1)) : (e.endMonth += 1), l(e);
          }
        },
        j = U.useCallback(
          () =>
            n
              ? {
                  right: { left: '360px', bottom: '20px' },
                  left: { right: '600px', bottom: '20px' },
                  top: { bottom: '40px' },
                  bottom: { top: '40px' },
                }[n]
              : { bottom: { top: '40px' } },
          [n],
        ),
        I = U.useCallback(
          (e) =>
            '' == e
              ? 'white'
              : s.startYear == f.endYear && s.startMonth == f.endMonth && e < s.startDay
              ? 'disabled-day'
              : 'day-box',
          [s, f],
        );
      return V.default.createElement(
        'div',
        { className: 'range', onClick: (e) => e.stopPropagation() },
        V.default.createElement(
          'div',
          { className: 'rangePicker', onClick: (e) => e.stopPropagation() },
          V.default.createElement(G, {
            placeholder: '请输入开始日期',
            defaultValue: i || `${s.startYear}-${s.startMonth}-` + s.startDay,
            handleIptChange: (e) => o(e),
            handleIptFocus: () => {
              b(!0), E(!0), (k.current.style.left = '0');
            },
            handleKeyDown: (e) => {
              var t = e;
              if (13 == t.keyCode)
                if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(i)) {
                  const t = i.split('-');
                  Number(t[0]) <= f.endYear &&
                  Number(t[1]) <= f.endMonth &&
                  Number(t[2]) <= f.endDay
                    ? (a(
                        (e) => (
                          (e.startYear = Number(t[0])),
                          (e.startMonth = Number(t[1])),
                          (e.startDay = Number(t[2])),
                          Object.assign({}, e)
                        ),
                      ),
                      _((e) => ((e.start = !0), Object.assign({}, e))))
                    : o('');
                } else o('');
            },
            handleIptBlur: () => {
              /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(i) || o('');
            },
            clearCallback: () => {
              o(''),
                a((e) => {
                  const t = new Date();
                  return (
                    (e.startDay = t.getDate()),
                    (e.startMonth = t.getMonth() + 1),
                    (e.startYear = t.getFullYear()),
                    Object.assign({}, e)
                  );
                });
            },
            showClear: t,
          }),
          V.default.createElement(Jt, { style: { color: '#cccccc', fontSize: '20px' } }),
          V.default.createElement(G, {
            placeholder: '请输入结束日期',
            defaultValue: c || `${f.endYear}-${f.endMonth}-` + f.endDay,
            handleIptChange: (e) => u(e),
            handleIptFocus: () => {
              b(!0), E(!0), (k.current.style.left = '190px');
            },
            handleKeyDown: (e) => {
              var t = e;
              if (13 == t.keyCode)
                if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(c)) {
                  const t = c.split('-');
                  Number(t[0]) >= s.startYear &&
                  Number(t[1]) >= s.startMonth &&
                  Number(t[2]) >= s.startDay
                    ? (l(
                        (e) => (
                          (e.endYear = Number(t[0])),
                          (e.endMonth = Number(t[1])),
                          (e.endDay = Number(t[2])),
                          Object.assign({}, e)
                        ),
                      ),
                      _((e) => ((e.end = !0), Object.assign({}, e))))
                    : u('');
                } else u('');
            },
            handleIptBlur: () => {
              /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(c) || u('');
            },
            clearCallback: () => {
              u(''),
                l((e) => {
                  const t = new Date();
                  return (
                    (e.endDay = t.getDate()),
                    (e.endMonth = t.getMonth() + 1),
                    (e.endYear = t.getFullYear()),
                    Object.assign({}, e)
                  );
                });
            },
            showClear: t,
          }),
          V.default.createElement('div', { className: 'activeBorder', ref: k }),
        ),
        x &&
          V.default.createElement(
            'div',
            {
              className: 'date-box',
              onClick: (e) => e.stopPropagation(),
              style: Object.assign(Object.assign({}, y ? { opacity: 1 } : {}), j()),
            },
            V.default.createElement(
              'div',
              { className: 'left' },
              V.default.createElement(
                'div',
                { className: 'top-bar' },
                V.default.createElement(
                  'div',
                  { className: 'icon' },
                  V.default.createElement(gt, {
                    style: { cursor: 'pointer' },
                    onClick: () => N('start'),
                  }),
                  V.default.createElement(Mt, {
                    style: { marginLeft: '10px', cursor: 'pointer' },
                    onClick: () => S('start'),
                  }),
                ),
                V.default.createElement(
                  'div',
                  { className: 'info' },
                  s.startYear,
                  '年 ',
                  s.startMonth,
                  '月',
                ),
                V.default.createElement(
                  'div',
                  null,
                  V.default.createElement(Tt, {
                    style: { cursor: 'pointer' },
                    onClick: () => O('start'),
                  }),
                  V.default.createElement(yt, {
                    style: { marginLeft: '10px', cursor: 'pointer' },
                    onClick: () => C('start'),
                  }),
                ),
              ),
              V.default.createElement(
                'div',
                { className: 'week' },
                V.default.createElement('div', null, '一'),
                V.default.createElement('div', null, '二'),
                V.default.createElement('div', null, '三'),
                V.default.createElement('div', null, '四'),
                V.default.createElement('div', null, '五'),
                V.default.createElement('div', null, '六'),
                V.default.createElement('div', null, '日'),
              ),
              V.default.createElement(
                'div',
                { className: 'day-list' },
                p.map((e, t) =>
                  V.default.createElement(
                    'div',
                    {
                      key: t,
                      className: '' == e ? 'white' : 'box-list',
                      style:
                        e == s.startDay
                          ? {
                              color: '#fff',
                              background: '#1890FF',
                              fontWeight: 'bold',
                              borderRadius: '5px',
                            }
                          : {},
                      onClick: () => {
                        var t;
                        '' != (t = Number(e)) &&
                          (a((e) => ((e.startDay = t), Object.assign({}, e))),
                          _((e) => ((e.start = !0), Object.assign({}, e))),
                          o(`${s.startYear}-${s.startMonth}-` + t),
                          s.startYear == f.endYear &&
                            s.startMonth == f.endMonth &&
                            t > f.endDay &&
                            l((e) => ((e.endDay = t), Object.assign({}, e))));
                      },
                    },
                    e,
                  ),
                ),
              ),
            ),
            V.default.createElement(
              'div',
              { className: 'right' },
              V.default.createElement(
                'div',
                { className: 'top-bar' },
                V.default.createElement(
                  'div',
                  null,
                  V.default.createElement(gt, {
                    style: { cursor: 'pointer' },
                    onClick: () => N('end'),
                  }),
                  V.default.createElement(Mt, {
                    style: { marginLeft: '10px', cursor: 'pointer' },
                    onClick: () => S('end'),
                  }),
                ),
                V.default.createElement(
                  'div',
                  { className: 'info' },
                  f.endYear,
                  '年 ',
                  f.endMonth,
                  '月',
                ),
                V.default.createElement(
                  'div',
                  { className: 'icon' },
                  V.default.createElement(Tt, {
                    style: { cursor: 'pointer' },
                    onClick: () => O('end'),
                  }),
                  V.default.createElement(yt, {
                    style: { marginLeft: '10px', cursor: 'pointer' },
                    onClick: () => C('end'),
                  }),
                ),
              ),
              V.default.createElement(
                'div',
                { className: 'week' },
                V.default.createElement('div', null, '一'),
                V.default.createElement('div', null, '二'),
                V.default.createElement('div', null, '三'),
                V.default.createElement('div', null, '四'),
                V.default.createElement('div', null, '五'),
                V.default.createElement('div', null, '六'),
                V.default.createElement('div', null, '日'),
              ),
              V.default.createElement(
                'div',
                { className: 'day-list' },
                g.map((e, t) =>
                  V.default.createElement(
                    'div',
                    {
                      key: t,
                      className: I(e),
                      style:
                        e == f.endDay
                          ? {
                              color: '#fff',
                              background: '#1890FF',
                              fontWeight: 'bold',
                              borderRadius: '5px',
                            }
                          : {},
                      onClick: () => {
                        var t = Number(e);
                        (s.startYear == f.endYear &&
                          s.startMonth == f.endMonth &&
                          t < s.startDay) ||
                          (_((e) => ((e.end = !0), Object.assign({}, e))),
                          l((e) => ((e.endDay = t), Object.assign({}, e))),
                          u(`${f.endYear}-${f.endMonth}-` + t));
                      },
                    },
                    e,
                  ),
                ),
              ),
            ),
          ),
      );
    });
  const Qt = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ];
  var en = U.memo((e) => {
      const { type: t, showRange: n, showClear: r, align: a, handleChange: l } = e,
        [i, o] = U.useState(!1),
        [c, u] = U.useState(!1),
        [s, f] = U.useState({
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDate(),
        }),
        [, d] = U.useState(0),
        [h, p] = U.useState([]),
        [m, g] = U.useState(0),
        [v, y] = U.useState(null),
        [b, x] = U.useState([2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]),
        E =
          (U.useEffect(() => {
            window.addEventListener('click', () => {
              o(!1),
                setTimeout(() => {
                  u(!1);
                }, 300);
            });
          }, []),
          U.useEffect(() => {
            const { year: e, month: t } = s,
              n = new Date(e + `/${t}/1`).getDay(),
              r = new Date(e, t, 0).getDate(),
              a = new Array(n).fill('');
            for (let e = 1; e < r + 1; e++) a.push(e);
            d(n), p(a);
          }, [s.year, s.month]),
          (e) => {
            e.stopPropagation(), o(!0), u(!0);
          }),
        w = {
          result: { letterSpacing: 'normal', color: '#1890FF', width: '120px' },
          icon: { opacity: 1, marginLeft: '5px' },
          checkBox: { opacity: 1 },
          dayActive: {
            backgroundColor: '#1890FF',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '5px',
          },
        },
        _ = U.useCallback(
          () =>
            a
              ? {
                  right: { left: '170px', bottom: '20px' },
                  left: { right: '800px', bottom: '40px' },
                  top: { bottom: '40px' },
                  bottom: { top: '40px' },
                }[a]
              : { bottom: { top: '40px' } },
          [a],
        );
      return n
        ? V.default.createElement(Xt, {
            showClear: r,
            align: a || 'bottom',
            handleChange: (e, t) => {
              l && l(e, t);
            },
          })
        : V.default.createElement(
            'div',
            { className: 'time-picker' },
            ('primary' == t || !t) &&
              V.default.createElement(
                'div',
                { className: 'result', style: i ? w.result : {}, onClick: (e) => E(e) },
                V.default.createElement('span', null, s.year, '-', s.month, '-', s.day),
                V.default.createElement(
                  'div',
                  { className: 'icon', style: i ? w.icon : {} },
                  V.default.createElement(Ot, null),
                ),
              ),
            'input' == t &&
              V.default.createElement(
                'div',
                null,
                V.default.createElement('input', {
                  className: 'input',
                  value: null !== v ? v : `${s.year}-${s.month}-` + s.day,
                  onClick: (e) => E(e),
                  onChange: (e) => {
                    y(e.target.value);
                  },
                  onKeyDown: (e) => {
                    var t = e;
                    if (13 == t.keyCode) {
                      if (
                        null !== v &&
                        /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(v)
                      ) {
                        const t = v.split('-');
                        f(
                          (e) => (
                            (e.year = Number(t[0])),
                            (e.month = Number(t[1])),
                            (e.day = Number(t[2])),
                            Object.assign({}, e)
                          ),
                        ),
                          l && l(`${Number(t[0])}-${Number(t[1])}-` + Number(t[2]));
                      }
                      y(null),
                        o(!1),
                        setTimeout(() => {
                          u(!1);
                        }, 300);
                    }
                  },
                  onBlur: () => {
                    if (
                      null !== v &&
                      /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(v)
                    ) {
                      const t = v.split('-');
                      f(
                        (e) => (
                          (e.year = Number(t[0])),
                          (e.month = Number(t[1])),
                          (e.day = Number(t[2])),
                          Object.assign({}, e)
                        ),
                      );
                    }
                    y(null);
                  },
                }),
                r &&
                  V.default.createElement(C, {
                    style: {
                      position: 'relative',
                      right: '15px',
                      fontSize: '12px',
                      cursor: 'pointer',
                    },
                    onClick: () => {
                      f(
                        (e) => (
                          (e.year = new Date().getFullYear()),
                          (e.month = new Date().getMonth() + 1),
                          (e.day = new Date().getDate()),
                          Object.assign({}, e)
                        ),
                      ),
                        y(null);
                    },
                  }),
              ),
            c &&
              V.default.createElement(
                'div',
                {
                  className: 'check-box',
                  style: Object.assign(Object.assign({}, i ? w.checkBox : {}), _()),
                  onClick: (e) => e.stopPropagation(),
                },
                V.default.createElement(
                  'div',
                  { className: 'top-bar' },
                  V.default.createElement('b', { className: 'year', onClick: () => g(2) }, s.year),
                  V.default.createElement(
                    'b',
                    { className: 'month', onClick: () => g(1), style: { marginRight: '20px' } },
                    s.month,
                  ),
                  V.default.createElement(
                    'div',
                    {
                      className: 'close-icon',
                      onClick: () => {
                        o(!1),
                          setTimeout(() => {
                            u(!1);
                          }, 300);
                      },
                    },
                    V.default.createElement(C, null),
                  ),
                ),
                V.default.createElement(
                  'div',
                  { className: 'date-content' },
                  0 == m &&
                    V.default.createElement(
                      V.default.Fragment,
                      null,
                      V.default.createElement(
                        'div',
                        { className: 'week' },
                        V.default.createElement('div', null, '日'),
                        V.default.createElement('div', null, '一'),
                        V.default.createElement('div', null, '二'),
                        V.default.createElement('div', null, '三'),
                        V.default.createElement('div', null, '四'),
                        V.default.createElement('div', null, '五'),
                        V.default.createElement('div', null, '六'),
                      ),
                      V.default.createElement(
                        'div',
                        { className: 'day-list' },
                        h.map((e, t) =>
                          V.default.createElement(
                            'div',
                            {
                              key: t,
                              className: e ? 'day' : 'white',
                              style: s.day == e ? w.dayActive : {},
                              onClick: () => {
                                var t = e;
                                t &&
                                  (f((e) => ((e.day = t), Object.assign({}, e))),
                                  l && l(`${s.year}-${s.month}-` + s.day),
                                  o(!1),
                                  setTimeout(() => {
                                    u(!1);
                                  }, 300));
                              },
                            },
                            e,
                          ),
                        ),
                      ),
                    ),
                  1 == m &&
                    V.default.createElement(
                      'div',
                      { className: 'month-toggle-box' },
                      Qt.map((e, n) =>
                        V.default.createElement(
                          'div',
                          {
                            key: e,
                            className: 'month',
                            style: n + 1 == s.month ? w.dayActive : {},
                            onClick: () => {
                              var t = n + 1;
                              f((e) => ((e.month = t), Object.assign({}, e))), g(0);
                            },
                          },
                          e,
                        ),
                      ),
                    ),
                  2 == m &&
                    V.default.createElement(
                      'div',
                      { className: 'year-toggle-box' },
                      V.default.createElement(
                        'div',
                        { className: 'toggle-bar' },
                        V.default.createElement(gt, {
                          style: { cursor: 'pointer' },
                          onClick: () => {
                            x((e) => [...e.map((e) => e - 9)]);
                          },
                        }),
                        V.default.createElement('span', null, b[0], '-', b[8]),
                        V.default.createElement(yt, {
                          style: { cursor: 'pointer' },
                          onClick: () => {
                            x((e) => [...e.map((e) => e + 9)]);
                          },
                        }),
                      ),
                      V.default.createElement(
                        'div',
                        { className: 'list' },
                        b.map((e) =>
                          V.default.createElement(
                            'div',
                            {
                              key: e,
                              className: 'year',
                              style: e == s.year ? w.dayActive : {},
                              onClick: () => {
                                var t = e;
                                f((e) => ((e.year = t), Object.assign({}, e))), g(0);
                              },
                            },
                            e,
                          ),
                        ),
                      ),
                    ),
                ),
                V.default.createElement(
                  'div',
                  { className: 'time-footer' },
                  0 == m &&
                    V.default.createElement(
                      V.default.Fragment,
                      null,
                      V.default.createElement(
                        'div',
                        {
                          className: 'today',
                          onClick: () => {
                            const t = new Date();
                            f(
                              (e) => (
                                (e.year = t.getFullYear()),
                                (e.month = t.getMonth() + 1),
                                (e.day = t.getDate()),
                                Object.assign({}, e)
                              ),
                            );
                          },
                        },
                        V.default.createElement('span', null, '今天'),
                        V.default.createElement(N, null),
                      ),
                      V.default.createElement(
                        'div',
                        { className: 'toggle-month' },
                        V.default.createElement(Mt, {
                          style: { marginRight: '5px' },
                          onClick: () => {
                            const e = Object.assign({}, s);
                            1 == e.month ? (--e.year, (e.month = 12)) : --e.month, f(e);
                          },
                        }),
                        V.default.createElement(Tt, {
                          onClick: () => {
                            const e = Object.assign({}, s);
                            12 == e.month ? ((e.year += 1), (e.month = 1)) : (e.month += 1), f(e);
                          },
                        }),
                      ),
                    ),
                  (1 == m || 2 == m) &&
                    V.default.createElement(
                      V.default.Fragment,
                      null,
                      V.default.createElement('div', null),
                      V.default.createElement(
                        'div',
                        { className: 'go-back-icon', onClick: () => g(0) },
                        V.default.createElement(qt, null),
                      ),
                    ),
                ),
              ),
          );
    }),
    tn = U.memo((e) => {
      const { children: t, delay: n } = e,
        [r, a] = U.useState(!1),
        l = U.createRef();
      let i;
      U.useEffect(() => {
        (i = new IntersectionObserver((e) => o(e))).observe(l.current);
      }, []);
      const o = (e) => {
        e.forEach((e) => {
          e.isIntersecting &&
            (n
              ? setTimeout(() => {
                  a(!0);
                }, n)
              : a(!0));
        });
      };
      return V.default.createElement('div', { className: 'lazyLoad', ref: l }, r && t);
    }),
    nn = U.memo((e) => {
      const { current: n, children: t } = e,
        r = U.useCallback(
          (e) => (e == n ? 'active-index' : e > n ? 'after-index' : 'before-index'),
          [n],
        );
      return V.default.createElement(
        'div',
        { className: 'steps' },
        V.default.createElement(
          'div',
          { className: 'step-content' },
          V.default.createElement(
            'div',
            { className: 'step-line' },
            t.map((e, t) =>
              V.default.createElement(
                'div',
                { className: 'step-box', key: t },
                t + 1 < n
                  ? V.default.createElement(
                      'div',
                      { className: r(t + 1) },
                      V.default.createElement(N, null),
                    )
                  : V.default.createElement('span', { className: r(t + 1) }, t + 1),
                V.default.createElement(
                  'div',
                  { className: 'sub-content' },
                  V.default.createElement(
                    'div',
                    { className: 'top' },
                    V.default.createElement(
                      'span',
                      {
                        className: 'title',
                        style: t + 1 > n ? { color: '#999999' } : { color: '#000000' },
                      },
                      e.props.title,
                    ),
                    V.default.createElement('span', { className: 'sub-title' }, e.props.subTitle),
                  ),
                  V.default.createElement(
                    'div',
                    {
                      className: 'bottom',
                      style: t + 1 !== n ? { color: '#999999' } : { color: '#000000' },
                    },
                    e.props.description,
                  ),
                ),
              ),
            ),
          ),
        ),
      );
    }),
    rn = U.memo((e) => {
      e = e.title;
      return V.default.createElement('div', null, e);
    }),
    an = H(function (w, _) {
      !function () {
        var Ml,
          Al = 'Expected a function',
          ui = '__lodash_hash_undefined__',
          si = '__lodash_placeholder__',
          Pl = 9007199254740991,
          Ll = 4294967295,
          fi = [
            ['ary', 128],
            ['bind', 1],
            ['bindKey', 2],
            ['curry', 8],
            ['curryRight', 16],
            ['flip', 512],
            ['partial', 32],
            ['partialRight', 64],
            ['rearg', 256],
          ],
          Rl = '[object Arguments]',
          di = '[object Array]',
          Dl = '[object Boolean]',
          Bl = '[object Date]',
          hi = '[object Error]',
          pi = '[object Function]',
          mi = '[object GeneratorFunction]',
          Fl = '[object Map]',
          Tl = '[object Number]',
          $l = '[object Object]',
          gi = '[object Promise]',
          ql = '[object RegExp]',
          Yl = '[object Set]',
          Hl = '[object String]',
          vi = '[object Symbol]',
          Wl = '[object WeakMap]',
          Jl = '[object ArrayBuffer]',
          Ul = '[object DataView]',
          yi = '[object Float32Array]',
          bi = '[object Float64Array]',
          xi = '[object Int8Array]',
          Ei = '[object Int16Array]',
          wi = '[object Int32Array]',
          _i = '[object Uint8Array]',
          ki = '[object Uint8ClampedArray]',
          Ni = '[object Uint16Array]',
          Ci = '[object Uint32Array]',
          Si = /\b__p \+= '';/g,
          Oi = /\b(__p \+=) '' \+/g,
          ji = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          Ii = /&(?:amp|lt|gt|quot|#39);/g,
          zi = /[&<>"']/g,
          Mi = RegExp(Ii.source),
          Ai = RegExp(zi.source),
          Pi = /<%-([\s\S]+?)%>/g,
          Li = /<%([\s\S]+?)%>/g,
          Ri = /<%=([\s\S]+?)%>/g,
          Di = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          Bi = /^\w*$/,
          Fi =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          Ti = /[\\^$.*+?()[\]{}|]/g,
          $i = RegExp(Ti.source),
          qi = /^\s+|\s+$/g,
          Yi = /^\s+/,
          Hi = /\s+$/,
          Wi = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          Ji = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Ui = /,? & /,
          Vi = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          Ki = /\\(\\)?/g,
          Gi = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          Zi = /\w*$/,
          Xi = /^[-+]0x[0-9a-f]+$/i,
          Qi = /^0b[01]+$/i,
          eo = /^\[object .+?Constructor\]$/,
          to = /^0o[0-7]+$/i,
          no = /^(?:0|[1-9]\d*)$/,
          ro = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          ao = /($^)/,
          lo = /['\n\r\u2028\u2029\\]/g,
          l = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
          e = 'a-z\\xdf-\\xf6\\xf8-\\xff',
          t = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
          n =
            '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          i = '[' + n + ']',
          r = '[' + l + ']',
          o = '[' + e + ']',
          n = '[^\\ud800-\\udfff' + n + '\\d+\\u2700-\\u27bf' + e + t + ']',
          e = '\\ud83c[\\udffb-\\udfff]',
          c = '[^\\ud800-\\udfff]',
          u = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          s = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          t = '[' + t + ']',
          f = '(?:' + o + '|' + n + ')',
          n = '(?:' + t + '|' + n + ')',
          d = "(?:['’](?:d|ll|m|re|s|t|ve))?",
          h = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
          p = '(?:' + r + '|' + e + ')?',
          m = '[\\ufe0e\\ufe0f]?',
          m = m + p + '(?:\\u200d(?:' + [c, u, s].join('|') + ')' + m + p + ')*',
          p = '(?:' + ['[\\u2700-\\u27bf]', u, s].join('|') + ')' + m,
          c = '(?:' + [c + r + '?', r, u, s, '[\\ud800-\\udfff]'].join('|') + ')',
          io = RegExp("['’]", 'g'),
          oo = RegExp(r, 'g'),
          g = RegExp(e + '(?=' + e + ')|' + c + m, 'g'),
          co = RegExp(
            [
              t + '?' + o + '+' + d + '(?=' + [i, t, '$'].join('|') + ')',
              n + '+' + h + '(?=' + [i, t + f, '$'].join('|') + ')',
              t + '?' + f + '+' + d,
              t + '+' + h,
              '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
              '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
              '\\d+',
              p,
            ].join('|'),
            'g',
          ),
          v = RegExp('[\\u200d\\ud800-\\udfff' + l + '\\ufe0e\\ufe0f]'),
          uo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          so = [
            'Array',
            'Buffer',
            'DataView',
            'Date',
            'Error',
            'Float32Array',
            'Float64Array',
            'Function',
            'Int8Array',
            'Int16Array',
            'Int32Array',
            'Map',
            'Math',
            'Object',
            'Promise',
            'RegExp',
            'Set',
            'String',
            'Symbol',
            'TypeError',
            'Uint8Array',
            'Uint8ClampedArray',
            'Uint16Array',
            'Uint32Array',
            'WeakMap',
            '_',
            'clearTimeout',
            'isFinite',
            'parseInt',
            'setTimeout',
          ],
          fo = -1,
          Vl = {},
          Kl =
            ((Vl[yi] = Vl[bi] = Vl[xi] = Vl[Ei] = Vl[wi] = Vl[_i] = Vl[ki] = Vl[Ni] = Vl[Ci] = !0),
            (Vl[Rl] =
              Vl[di] =
              Vl[Jl] =
              Vl[Dl] =
              Vl[Ul] =
              Vl[Bl] =
              Vl[hi] =
              Vl[pi] =
              Vl[Fl] =
              Vl[Tl] =
              Vl[$l] =
              Vl[ql] =
              Vl[Yl] =
              Vl[Hl] =
              Vl[Wl] =
                !1),
            {}),
          y =
            ((Kl[Rl] =
              Kl[di] =
              Kl[Jl] =
              Kl[Ul] =
              Kl[Dl] =
              Kl[Bl] =
              Kl[yi] =
              Kl[bi] =
              Kl[xi] =
              Kl[Ei] =
              Kl[wi] =
              Kl[Fl] =
              Kl[Tl] =
              Kl[$l] =
              Kl[ql] =
              Kl[Yl] =
              Kl[Hl] =
              Kl[vi] =
              Kl[_i] =
              Kl[ki] =
              Kl[Ni] =
              Kl[Ci] =
                !0),
            (Kl[hi] = Kl[pi] = Kl[Wl] = !1),
            { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' }),
          ho = parseFloat,
          po = parseInt,
          u = 'object' == typeof k && k && k.Object === Object && k,
          s = 'object' == typeof self && self && self.Object === Object && self,
          Gl = u || s || Function('return this')(),
          r = _ && !_.nodeType && _,
          a = r && w && !w.nodeType && w,
          mo = a && a.exports === r,
          b = mo && u.process,
          e = (function () {
            try {
              return (
                (a && a.require && a.require('util').types) || (b && b.binding && b.binding('util'))
              );
            } catch (e) {}
          })(),
          go = e && e.isArrayBuffer,
          vo = e && e.isDate,
          yo = e && e.isMap,
          bo = e && e.isRegExp,
          xo = e && e.isSet,
          Eo = e && e.isTypedArray;
        function Zl(e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, n[0]);
            case 2:
              return e.call(t, n[0], n[1]);
            case 3:
              return e.call(t, n[0], n[1], n[2]);
          }
          return e.apply(t, n);
        }
        function wo(e, t, n, r) {
          for (var a = -1, l = null == e ? 0 : e.length; ++a < l; ) {
            var i = e[a];
            t(r, i, n(i), e);
          }
          return r;
        }
        function Xl(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e); );
          return e;
        }
        function _o(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (!t(e[n], n, e)) return !1;
          return !0;
        }
        function Ql(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, a = 0, l = []; ++n < r; ) {
            var i = e[n];
            t(i, n, e) && (l[a++] = i);
          }
          return l;
        }
        function ko(e, t) {
          return !(null == e || !e.length) && -1 < ni(e, t, 0);
        }
        function No(e, t, n) {
          for (var r = -1, a = null == e ? 0 : e.length; ++r < a; ) if (n(t, e[r])) return !0;
          return !1;
        }
        function ei(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r; )
            a[n] = t(e[n], n, e);
          return a;
        }
        function ti(e, t) {
          for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
          return e;
        }
        function Co(e, t, n, r) {
          var a = -1,
            l = null == e ? 0 : e.length;
          for (r && l && (n = e[++a]); ++a < l; ) n = t(n, e[a], a, e);
          return n;
        }
        function So(e, t, n, r) {
          var a = null == e ? 0 : e.length;
          for (r && a && (n = e[--a]); a--; ) n = t(n, e[a], a, e);
          return n;
        }
        function Oo(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
          return !1;
        }
        var x = Po('length');
        function jo(e, r, t) {
          var a;
          return (
            t(e, function (e, t, n) {
              if (r(e, t, n)) return (a = t), !1;
            }),
            a
          );
        }
        function Io(e, t, n, r) {
          for (var a = e.length, l = n + (r ? 1 : -1); r ? l-- : ++l < a; )
            if (t(e[l], l, e)) return l;
          return -1;
        }
        function ni(e, t, n) {
          if (t != t) return Io(e, Mo, n);
          for (var r = e, a = t, l = n - 1, i = r.length; ++l < i; ) if (r[l] === a) return l;
          return -1;
        }
        function zo(e, t, n, r) {
          for (var a = n - 1, l = e.length; ++a < l; ) if (r(e[a], t)) return a;
          return -1;
        }
        function Mo(e) {
          return e != e;
        }
        function Ao(e, t) {
          var n = null == e ? 0 : e.length;
          return n ? Ro(e, t) / n : NaN;
        }
        function Po(t) {
          return function (e) {
            return null == e ? Ml : e[t];
          };
        }
        function E(t) {
          return function (e) {
            return null == t ? Ml : t[e];
          };
        }
        function Lo(e, r, a, l, t) {
          return (
            t(e, function (e, t, n) {
              a = l ? ((l = !1), e) : r(a, e, t, n);
            }),
            a
          );
        }
        function Ro(e, t) {
          for (var n, r = -1, a = e.length; ++r < a; ) {
            var l = t(e[r]);
            l !== Ml && (n = n === Ml ? l : n + l);
          }
          return n;
        }
        function Do(e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        }
        function ri(t) {
          return function (e) {
            return t(e);
          };
        }
        function Bo(t, e) {
          return ei(e, function (e) {
            return t[e];
          });
        }
        function Fo(e, t) {
          return e.has(t);
        }
        function To(e, t) {
          for (var n = -1, r = e.length; ++n < r && -1 < ni(t, e[n], 0); );
          return n;
        }
        function $o(e, t) {
          for (var n = e.length; n-- && -1 < ni(t, e[n], 0); );
          return n;
        }
        var qo = E({
            À: 'A',
            Á: 'A',
            Â: 'A',
            Ã: 'A',
            Ä: 'A',
            Å: 'A',
            à: 'a',
            á: 'a',
            â: 'a',
            ã: 'a',
            ä: 'a',
            å: 'a',
            Ç: 'C',
            ç: 'c',
            Ð: 'D',
            ð: 'd',
            È: 'E',
            É: 'E',
            Ê: 'E',
            Ë: 'E',
            è: 'e',
            é: 'e',
            ê: 'e',
            ë: 'e',
            Ì: 'I',
            Í: 'I',
            Î: 'I',
            Ï: 'I',
            ì: 'i',
            í: 'i',
            î: 'i',
            ï: 'i',
            Ñ: 'N',
            ñ: 'n',
            Ò: 'O',
            Ó: 'O',
            Ô: 'O',
            Õ: 'O',
            Ö: 'O',
            Ø: 'O',
            ò: 'o',
            ó: 'o',
            ô: 'o',
            õ: 'o',
            ö: 'o',
            ø: 'o',
            Ù: 'U',
            Ú: 'U',
            Û: 'U',
            Ü: 'U',
            ù: 'u',
            ú: 'u',
            û: 'u',
            ü: 'u',
            Ý: 'Y',
            ý: 'y',
            ÿ: 'y',
            Æ: 'Ae',
            æ: 'ae',
            Þ: 'Th',
            þ: 'th',
            ß: 'ss',
            Ā: 'A',
            Ă: 'A',
            Ą: 'A',
            ā: 'a',
            ă: 'a',
            ą: 'a',
            Ć: 'C',
            Ĉ: 'C',
            Ċ: 'C',
            Č: 'C',
            ć: 'c',
            ĉ: 'c',
            ċ: 'c',
            č: 'c',
            Ď: 'D',
            Đ: 'D',
            ď: 'd',
            đ: 'd',
            Ē: 'E',
            Ĕ: 'E',
            Ė: 'E',
            Ę: 'E',
            Ě: 'E',
            ē: 'e',
            ĕ: 'e',
            ė: 'e',
            ę: 'e',
            ě: 'e',
            Ĝ: 'G',
            Ğ: 'G',
            Ġ: 'G',
            Ģ: 'G',
            ĝ: 'g',
            ğ: 'g',
            ġ: 'g',
            ģ: 'g',
            Ĥ: 'H',
            Ħ: 'H',
            ĥ: 'h',
            ħ: 'h',
            Ĩ: 'I',
            Ī: 'I',
            Ĭ: 'I',
            Į: 'I',
            İ: 'I',
            ĩ: 'i',
            ī: 'i',
            ĭ: 'i',
            į: 'i',
            ı: 'i',
            Ĵ: 'J',
            ĵ: 'j',
            Ķ: 'K',
            ķ: 'k',
            ĸ: 'k',
            Ĺ: 'L',
            Ļ: 'L',
            Ľ: 'L',
            Ŀ: 'L',
            Ł: 'L',
            ĺ: 'l',
            ļ: 'l',
            ľ: 'l',
            ŀ: 'l',
            ł: 'l',
            Ń: 'N',
            Ņ: 'N',
            Ň: 'N',
            Ŋ: 'N',
            ń: 'n',
            ņ: 'n',
            ň: 'n',
            ŋ: 'n',
            Ō: 'O',
            Ŏ: 'O',
            Ő: 'O',
            ō: 'o',
            ŏ: 'o',
            ő: 'o',
            Ŕ: 'R',
            Ŗ: 'R',
            Ř: 'R',
            ŕ: 'r',
            ŗ: 'r',
            ř: 'r',
            Ś: 'S',
            Ŝ: 'S',
            Ş: 'S',
            Š: 'S',
            ś: 's',
            ŝ: 's',
            ş: 's',
            š: 's',
            Ţ: 'T',
            Ť: 'T',
            Ŧ: 'T',
            ţ: 't',
            ť: 't',
            ŧ: 't',
            Ũ: 'U',
            Ū: 'U',
            Ŭ: 'U',
            Ů: 'U',
            Ű: 'U',
            Ų: 'U',
            ũ: 'u',
            ū: 'u',
            ŭ: 'u',
            ů: 'u',
            ű: 'u',
            ų: 'u',
            Ŵ: 'W',
            ŵ: 'w',
            Ŷ: 'Y',
            ŷ: 'y',
            Ÿ: 'Y',
            Ź: 'Z',
            Ż: 'Z',
            Ž: 'Z',
            ź: 'z',
            ż: 'z',
            ž: 'z',
            Ĳ: 'IJ',
            ĳ: 'ij',
            Œ: 'Oe',
            œ: 'oe',
            ŉ: "'n",
            ſ: 's',
          }),
          Yo = E({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' });
        function Ho(e) {
          return '\\' + y[e];
        }
        function ai(e) {
          return v.test(e);
        }
        function Wo(e) {
          var n = -1,
            r = Array(e.size);
          return (
            e.forEach(function (e, t) {
              r[++n] = [t, e];
            }),
            r
          );
        }
        function Jo(t, n) {
          return function (e) {
            return t(n(e));
          };
        }
        function li(e, t) {
          for (var n = -1, r = e.length, a = 0, l = []; ++n < r; ) {
            var i = e[n];
            (i !== t && i !== si) || ((e[n] = si), (l[a++] = n));
          }
          return l;
        }
        function Uo(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        }
        function ii(e) {
          return (
            ai(e)
              ? function (e) {
                  for (var t = (g.lastIndex = 0); g.test(e); ) ++t;
                  return t;
                }
              : x
          )(e);
        }
        function oi(e) {
          return ai(e) ? e.match(g) || [] : e.split('');
        }
        var Vo = E({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" }),
          ci = (function a(e) {
            var I = (e = null == e ? Gl : ci.defaults(Gl.Object(), e, ci.pick(Gl, so))).Array,
              D = e.Date,
              B = e.Error,
              F = e.Function,
              T = e.Math,
              v = e.Object,
              $ = e.RegExp,
              q = e.String,
              z = e.TypeError,
              Y = I.prototype,
              H = F.prototype,
              W = v.prototype,
              J = e['__core-js_shared__'],
              U = H.toString,
              S = W.hasOwnProperty,
              V = 0,
              K = (H = /[^.]+$/.exec((J && J.keys && J.keys.IE_PROTO) || ''))
                ? 'Symbol(src)_1.' + H
                : '',
              G = W.toString,
              Z = U.call(v),
              X = Gl._,
              Q = $(
                '^' +
                  U.call(S)
                    .replace(Ti, '\\$&')
                    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                  '$',
              ),
              H = mo ? e.Buffer : Ml,
              t = e.Symbol,
              ee = e.Uint8Array,
              te = H ? H.allocUnsafe : Ml,
              ne = Jo(v.getPrototypeOf, v),
              re = v.create,
              ae = W.propertyIsEnumerable,
              le = Y.splice,
              ie = t ? t.isConcatSpreadable : Ml,
              oe = t ? t.iterator : Ml,
              ce = t ? t.toStringTag : Ml,
              ue = (function () {
                try {
                  var e = Hn(v, 'defineProperty');
                  return e({}, '', {}), e;
                } catch (e) {}
              })(),
              se = e.clearTimeout !== Gl.clearTimeout && e.clearTimeout,
              fe = D && D.now !== Gl.Date.now && D.now,
              de = e.setTimeout !== Gl.setTimeout && e.setTimeout,
              he = T.ceil,
              pe = T.floor,
              me = v.getOwnPropertySymbols,
              H = H ? H.isBuffer : Ml,
              ge = e.isFinite,
              ve = Y.join,
              ye = Jo(v.keys, v),
              M = T.max,
              A = T.min,
              be = D.now,
              xe = e.parseInt,
              Ee = T.random,
              we = Y.reverse,
              D = Hn(e, 'DataView'),
              _e = Hn(e, 'Map'),
              ke = Hn(e, 'Promise'),
              Ne = Hn(e, 'Set'),
              e = Hn(e, 'WeakMap'),
              Ce = Hn(v, 'create'),
              Se = e && new e(),
              Oe = {},
              je = mr(D),
              Ie = mr(_e),
              ze = mr(ke),
              Me = mr(Ne),
              Ae = mr(e),
              t = t ? t.prototype : Ml,
              Pe = t ? t.valueOf : Ml,
              Le = t ? t.toString : Ml;
            function p(e) {
              if (l(e) && !L(e) && !(e instanceof g)) {
                if (e instanceof m) return e;
                if (S.call(e, '__wrapped__')) return gr(e);
              }
              return new m(e);
            }
            var Re = function (e) {
              if (!E(e)) return {};
              if (re) return re(e);
              De.prototype = e;
              e = new De();
              return (De.prototype = Ml), e;
            };
            function De() {}
            function Be() {}
            function m(e, t) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__chain__ = !!t),
                (this.__index__ = 0),
                (this.__values__ = Ml);
            }
            function g(e) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = Ll),
                (this.__views__ = []);
            }
            function Fe(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function Te(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function $e(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function qe(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.__data__ = new $e(); ++t < n; ) this.add(e[t]);
            }
            function O(e) {
              e = this.__data__ = new Te(e);
              this.size = e.size;
            }
            function Ye(e, t) {
              var n,
                r = L(e),
                a = !r && ua(e),
                l = !r && !a && fa(e),
                i = !r && !a && !l && wa(e),
                o = r || a || l || i,
                c = o ? Do(e.length, q) : [],
                u = c.length;
              for (n in e)
                (!t && !S.call(e, n)) ||
                  (o &&
                    ('length' == n ||
                      (l && ('offset' == n || 'parent' == n)) ||
                      (i && ('buffer' == n || 'byteLength' == n || 'byteOffset' == n)) ||
                      Gn(n, u))) ||
                  c.push(n);
              return c;
            }
            function He(e) {
              var t = e.length;
              return t ? e[Lt(0, t - 1)] : Ml;
            }
            function We(e, t, n) {
              ((n === Ml || P(e[t], n)) && (n !== Ml || t in e)) || Ge(e, t, n);
            }
            function Je(e, t, n) {
              var r = e[t];
              (S.call(e, t) && P(r, n) && (n !== Ml || t in e)) || Ge(e, t, n);
            }
            function Ue(e, t) {
              for (var n = e.length; n--; ) if (P(e[n][0], t)) return n;
              return -1;
            }
            function Ve(e, r, a, l) {
              return (
                nt(e, function (e, t, n) {
                  r(l, e, a(e), n);
                }),
                l
              );
            }
            function Ke(e, t) {
              return e && sn(t, k(t), e);
            }
            function Ge(e, t, n) {
              '__proto__' == t && ue
                ? ue(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
                : (e[t] = n);
            }
            function Ze(e, t) {
              for (var n = -1, r = t.length, a = I(r), l = null == e; ++n < r; )
                a[n] = l ? Ml : Ra(e, t[n]);
              return a;
            }
            function Xe(e, t, n) {
              return (
                e == e && (n !== Ml && (e = e <= n ? e : n), t !== Ml && (e = t <= e ? e : t)), e
              );
            }
            function y(n, r, a, e, t, l) {
              var i,
                o = 1 & r,
                c = 2 & r,
                u = 4 & r;
              if ((i = a ? (t ? a(n, e, t, l) : a(n)) : i) !== Ml) return i;
              if (!E(n)) return n;
              var s,
                f,
                d,
                e = L(n);
              if (e) {
                if (
                  ((p = (f = n).length),
                  (d = new f.constructor(p)),
                  p &&
                    'string' == typeof f[0] &&
                    S.call(f, 'index') &&
                    ((d.index = f.index), (d.input = f.input)),
                  (i = d),
                  !o)
                )
                  return w(n, i);
              } else {
                var h = j(n),
                  p = h == pi || h == mi;
                if (fa(n)) return rn(n, o);
                if (h == $l || h == Rl || (p && !t)) {
                  if (((i = c || p ? {} : Vn(n)), !o))
                    return c
                      ? ((f = n), (s = (d = i) && sn(n, N(n), d)), sn(f, Jn(f), s))
                      : ((m = Ke(i, (s = n))), sn(s, Wn(s), m));
                } else {
                  if (!Kl[h]) return t ? n : {};
                  i = (function (e, t) {
                    var n,
                      r,
                      a = e.constructor;
                    switch (h) {
                      case Jl:
                        return an(e);
                      case Dl:
                      case Bl:
                        return new a(+e);
                      case Ul:
                        return (
                          (n = e),
                          (r = t ? an(n.buffer) : n.buffer),
                          new n.constructor(r, n.byteOffset, n.byteLength)
                        );
                      case yi:
                      case bi:
                      case xi:
                      case Ei:
                      case wi:
                      case _i:
                      case ki:
                      case Ni:
                      case Ci:
                        return ln(e, t);
                      case Fl:
                        return new a();
                      case Tl:
                      case Hl:
                        return new a(e);
                      case ql:
                        return (
                          ((n = new (r = e).constructor(r.source, Zi.exec(r))).lastIndex =
                            r.lastIndex),
                          n
                        );
                      case Yl:
                        return new a();
                      case vi:
                        return Pe ? v(Pe.call(e)) : {};
                    }
                  })(n, o);
                }
              }
              var m = (l = l || new O()).get(n);
              if (m) return m;
              if ((l.set(n, i), xa(n)))
                return (
                  n.forEach(function (e) {
                    i.add(y(e, r, a, e, n, l));
                  }),
                  i
                );
              if (ga(n))
                return (
                  n.forEach(function (e, t) {
                    i.set(t, y(e, r, a, t, n, l));
                  }),
                  i
                );
              var g = e ? Ml : (u ? (c ? Bn : Dn) : c ? N : k)(n);
              return (
                Xl(g || n, function (e, t) {
                  g && (e = n[(t = e)]), Je(i, t, y(e, r, a, t, n, l));
                }),
                i
              );
            }
            function Qe(e, t, n) {
              var r = n.length;
              if (null == e) return !r;
              for (e = v(e); r--; ) {
                var a = n[r],
                  l = t[a],
                  i = e[a];
                if ((i === Ml && !(a in e)) || !l(i)) return !1;
              }
              return !0;
            }
            function et(e, t, n) {
              if ('function' != typeof e) throw new z(Al);
              return or(function () {
                e.apply(Ml, n);
              }, t);
            }
            function tt(e, t, n, r) {
              var a = -1,
                l = ko,
                i = !0,
                o = e.length,
                c = [],
                u = t.length;
              if (o) {
                n && (t = ei(t, ri(n))),
                  r
                    ? ((l = No), (i = !1))
                    : 200 <= t.length && ((l = Fo), (i = !1), (t = new qe(t)));
                e: for (; ++a < o; ) {
                  var s = e[a],
                    f = null == n ? s : n(s),
                    s = r || 0 !== s ? s : 0;
                  if (i && f == f) {
                    for (var d = u; d--; ) if (t[d] === f) continue e;
                    c.push(s);
                  } else l(t, f, r) || c.push(s);
                }
              }
              return c;
            }
            (p.templateSettings = {
              escape: Pi,
              evaluate: Li,
              interpolate: Ri,
              variable: '',
              imports: { _: p },
            }),
              ((p.prototype = Be.prototype).constructor = p),
              ((m.prototype = Re(Be.prototype)).constructor = m),
              ((g.prototype = Re(Be.prototype)).constructor = g),
              (Fe.prototype.clear = function () {
                (this.__data__ = Ce ? Ce(null) : {}), (this.size = 0);
              }),
              (Fe.prototype.delete = function (e) {
                e = this.has(e) && delete this.__data__[e];
                return (this.size -= e ? 1 : 0), e;
              }),
              (Fe.prototype.get = function (e) {
                var t,
                  n = this.__data__;
                return Ce ? ((t = n[e]) === ui ? Ml : t) : S.call(n, e) ? n[e] : Ml;
              }),
              (Fe.prototype.has = function (e) {
                var t = this.__data__;
                return Ce ? t[e] !== Ml : S.call(t, e);
              }),
              (Fe.prototype.set = function (e, t) {
                var n = this.__data__;
                return (this.size += this.has(e) ? 0 : 1), (n[e] = Ce && t === Ml ? ui : t), this;
              }),
              (Te.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (Te.prototype.delete = function (e) {
                var t = this.__data__,
                  e = Ue(t, e);
                return !(e < 0 || (e == t.length - 1 ? t.pop() : le.call(t, e, 1), --this.size, 0));
              }),
              (Te.prototype.get = function (e) {
                var t = this.__data__,
                  e = Ue(t, e);
                return e < 0 ? Ml : t[e][1];
              }),
              (Te.prototype.has = function (e) {
                return -1 < Ue(this.__data__, e);
              }),
              (Te.prototype.set = function (e, t) {
                var n = this.__data__,
                  r = Ue(n, e);
                return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
              }),
              ($e.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = { hash: new Fe(), map: new (_e || Te)(), string: new Fe() });
              }),
              ($e.prototype.delete = function (e) {
                e = qn(this, e).delete(e);
                return (this.size -= e ? 1 : 0), e;
              }),
              ($e.prototype.get = function (e) {
                return qn(this, e).get(e);
              }),
              ($e.prototype.has = function (e) {
                return qn(this, e).has(e);
              }),
              ($e.prototype.set = function (e, t) {
                var n = qn(this, e),
                  r = n.size;
                return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
              }),
              (qe.prototype.add = qe.prototype.push =
                function (e) {
                  return this.__data__.set(e, ui), this;
                }),
              (qe.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (O.prototype.clear = function () {
                (this.__data__ = new Te()), (this.size = 0);
              }),
              (O.prototype.delete = function (e) {
                var t = this.__data__,
                  e = t.delete(e);
                return (this.size = t.size), e;
              }),
              (O.prototype.get = function (e) {
                return this.__data__.get(e);
              }),
              (O.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (O.prototype.set = function (e, t) {
                var n = this.__data__;
                if (n instanceof Te) {
                  var r = n.__data__;
                  if (!_e || r.length < 199) return r.push([e, t]), (this.size = ++n.size), this;
                  n = this.__data__ = new $e(r);
                }
                return n.set(e, t), (this.size = n.size), this;
              });
            var nt = hn(ut),
              rt = hn(st, !0);
            function at(e, r) {
              var a = !0;
              return (
                nt(e, function (e, t, n) {
                  return (a = !!r(e, t, n));
                }),
                a
              );
            }
            function lt(e, t, n) {
              for (var r = -1, a = e.length; ++r < a; ) {
                var l,
                  i,
                  o = e[r],
                  c = t(o);
                null != c && (l === Ml ? c == c && !b(c) : n(c, l)) && ((l = c), (i = o));
              }
              return i;
            }
            function it(e, r) {
              var a = [];
              return (
                nt(e, function (e, t, n) {
                  r(e, t, n) && a.push(e);
                }),
                a
              );
            }
            function c(e, t, n, r, a) {
              var l = -1,
                i = e.length;
              for (n = n || Kn, a = a || []; ++l < i; ) {
                var o = e[l];
                0 < t && n(o) ? (1 < t ? c(o, t - 1, n, r, a) : ti(a, o)) : r || (a[a.length] = o);
              }
              return a;
            }
            var ot = pn(),
              ct = pn(!0);
            function ut(e, t) {
              return e && ot(e, t, k);
            }
            function st(e, t) {
              return e && ct(e, t, k);
            }
            function ft(t, e) {
              return Ql(e, function (e) {
                return ha(t[e]);
              });
            }
            function dt(e, t) {
              for (var n = 0, r = (t = Qt(t, e)).length; null != e && n < r; ) e = e[pr(t[n++])];
              return n && n == r ? e : Ml;
            }
            function ht(e, t, n) {
              t = t(e);
              return L(e) ? t : ti(t, n(e));
            }
            function n(e) {
              {
                if (null == e) return e === Ml ? '[object Undefined]' : '[object Null]';
                if (ce && ce in v(e)) {
                  var t = e,
                    n = S.call(t, ce),
                    r = t[ce];
                  try {
                    t[ce] = Ml;
                    var a = !0;
                  } catch (t) {}
                  var l = G.call(t);
                  return a && (n ? (t[ce] = r) : delete t[ce]), l;
                }
                return G.call(e);
              }
            }
            function pt(e, t) {
              return t < e;
            }
            function mt(e, t) {
              return null != e && S.call(e, t);
            }
            function gt(e, t) {
              return null != e && t in v(e);
            }
            function vt(e, t, n) {
              for (
                var r = n ? No : ko,
                  a = e[0].length,
                  l = e.length,
                  i = l,
                  o = I(l),
                  c = 1 / 0,
                  u = [];
                i--;

              ) {
                var s = e[i];
                i && t && (s = ei(s, ri(t))),
                  (c = A(s.length, c)),
                  (o[i] = !n && (t || (120 <= a && 120 <= s.length)) ? new qe(i && s) : Ml);
              }
              var s = e[0],
                f = -1,
                d = o[0];
              e: for (; ++f < a && u.length < c; ) {
                var h = s[f],
                  p = t ? t(h) : h,
                  h = n || 0 !== h ? h : 0;
                if (!(d ? Fo(d, p) : r(u, p, n))) {
                  for (i = l; --i; ) {
                    var m = o[i];
                    if (!(m ? Fo(m, p) : r(e[i], p, n))) continue e;
                  }
                  d && d.push(p), u.push(h);
                }
              }
              return u;
            }
            function yt(e, t, n) {
              t = null == (e = ar(e, (t = Qt(t, e)))) ? e : e[pr(r(t))];
              return null == t ? Ml : Zl(t, e, n);
            }
            function bt(e) {
              return l(e) && n(e) == Rl;
            }
            function xt(e, t, n, r, a) {
              return (
                e === t ||
                (null == e || null == t || (!l(e) && !l(t))
                  ? e != e && t != t
                  : (function (e, t, n, r, a, l) {
                      var i = L(e),
                        o = L(t),
                        c = i ? di : j(e),
                        o = o ? di : j(t),
                        u = (c = c == Rl ? $l : c) == $l,
                        s = (o = o == Rl ? $l : o) == $l,
                        o = c == o;
                      if (o && fa(e)) {
                        if (!fa(t)) return !1;
                        u = !(i = !0);
                      }
                      if (o && !u)
                        return (
                          (l = l || new O()),
                          (i || wa(e)
                            ? Ln
                            : function (e, t, n, r, a, l) {
                                switch (c) {
                                  case Ul:
                                    if (
                                      e.byteLength != t.byteLength ||
                                      e.byteOffset != t.byteOffset
                                    )
                                      return !1;
                                    (e = e.buffer), (t = t.buffer);
                                  case Jl:
                                    return !(
                                      e.byteLength != t.byteLength || !a(new ee(e), new ee(t))
                                    );
                                  case Dl:
                                  case Bl:
                                  case Tl:
                                    return P(+e, +t);
                                  case hi:
                                    return e.name == t.name && e.message == t.message;
                                  case ql:
                                  case Hl:
                                    return e == t + '';
                                  case Fl:
                                    var i = Wo;
                                  case Yl:
                                    i = i || Uo;
                                    if (e.size != t.size && !(1 & n)) return !1;
                                    var o = l.get(e);
                                    if (o) return o == t;
                                    (n |= 2), l.set(e, t);
                                    o = Ln(i(e), i(t), n, r, a, l);
                                    return l.delete(e), o;
                                  case vi:
                                    if (Pe) return Pe.call(e) == Pe.call(t);
                                }
                                return !1;
                              })(e, t, n, r, a, l)
                        );
                      if (!(1 & n)) {
                        (i = u && S.call(e, '__wrapped__')), (u = s && S.call(t, '__wrapped__'));
                        if (i || u)
                          return a(i ? e.value() : e, u ? t.value() : t, n, r, (l = l || new O()));
                      }
                      if (o) {
                        l = l || new O();
                        var f = e,
                          d = t,
                          h = n,
                          p = r,
                          m = a,
                          g = l,
                          v = 1 & h,
                          y = Dn(f),
                          b = y.length;
                        if (b != Dn(d).length && !v) return !1;
                        for (var x = b; x--; ) {
                          var E = y[x];
                          if (!(v ? E in d : S.call(d, E))) return !1;
                        }
                        s = g.get(f);
                        if (s && g.get(d)) return s == d;
                        for (var w = !0, _ = (g.set(f, d), g.set(d, f), v); ++x < b; ) {
                          var k,
                            N = f[(E = y[x])],
                            C = d[E];
                          if (
                            !((k = p ? (v ? p(C, N, E, d, f, g) : p(N, C, E, f, d, g)) : k) === Ml
                              ? N === C || m(N, C, h, p, g)
                              : k)
                          ) {
                            w = !1;
                            break;
                          }
                          _ = _ || 'constructor' == E;
                        }
                        return (
                          w &&
                            !_ &&
                            (s = f.constructor) != (i = d.constructor) &&
                            'constructor' in f &&
                            'constructor' in d &&
                            !(
                              'function' == typeof s &&
                              s instanceof s &&
                              'function' == typeof i &&
                              i instanceof i
                            ) &&
                            (w = !1),
                          g.delete(f),
                          g.delete(d),
                          w
                        );
                      }
                      return !1;
                    })(e, t, n, r, xt, a))
              );
            }
            function Et(e, t, n, r) {
              var a = n.length,
                l = a,
                i = !r;
              if (null == e) return !l;
              for (e = v(e); a--; ) {
                var o = n[a];
                if (i && o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1;
              }
              for (; ++a < l; ) {
                var c = (o = n[a])[0],
                  u = e[c],
                  s = o[1];
                if (i && o[2]) {
                  if (u === Ml && !(c in e)) return !1;
                } else {
                  var f,
                    d = new O();
                  if (!((f = r ? r(u, s, c, e, t, d) : f) === Ml ? xt(s, u, 3, r, d) : f))
                    return !1;
                }
              }
              return !0;
            }
            function wt(e) {
              return !(!E(e) || (K && K in e)) && (ha(e) ? Q : eo).test(mr(e));
            }
            function _t(e) {
              return 'function' == typeof e
                ? e
                : null == e
                ? C
                : 'object' == typeof e
                ? L(e)
                  ? Ot(e[0], e[1])
                  : St(e)
                : bl(e);
            }
            function kt(e) {
              if (!er(e)) return ye(e);
              var t,
                n = [];
              for (t in v(e)) S.call(e, t) && 'constructor' != t && n.push(t);
              return n;
            }
            function Nt(e, t) {
              return e < t;
            }
            function Ct(e, r) {
              var a = -1,
                l = d(e) ? I(e.length) : [];
              return (
                nt(e, function (e, t, n) {
                  l[++a] = r(e, t, n);
                }),
                l
              );
            }
            function St(t) {
              var n = Yn(t);
              return 1 == n.length && n[0][2]
                ? nr(n[0][0], n[0][1])
                : function (e) {
                    return e === t || Et(e, t, n);
                  };
            }
            function Ot(n, r) {
              return Zn(n) && tr(r)
                ? nr(pr(n), r)
                : function (e) {
                    var t = Ra(e, n);
                    return t === Ml && t === r ? Da(e, n) : xt(r, t, 3);
                  };
            }
            function jt(m, g, v, y, b) {
              m !== g &&
                ot(
                  g,
                  function (e, t) {
                    var n, r, a, l, i, o, c, u, s, f, d, h, p;
                    E(e)
                      ? ((b = b || new O()),
                        (p = g),
                        (a = v),
                        (l = jt),
                        (i = y),
                        (o = b),
                        (c = lr((n = m), (r = t))),
                        (u = lr(p, r)),
                        (h = o.get(u)) ||
                          ((h = i ? i(c, u, r + '', n, p, o) : Ml),
                          (p = h === Ml) &&
                            ((f = !(s = L(u)) && fa(u)),
                            (d = !s && !f && wa(u)),
                            (h = u),
                            s || f || d
                              ? (h = L(c)
                                  ? c
                                  : x(c)
                                  ? w(c)
                                  : f
                                  ? rn(u, !(p = !1))
                                  : d
                                  ? ln(u, !(p = !1))
                                  : [])
                              : ya(u) || ua(u)
                              ? ua((h = c))
                                ? (h = Oa(c))
                                : (E(c) && !ha(c)) || (h = Vn(u))
                              : (p = !1)),
                          p && (o.set(u, h), l(h, u, a, i, o), o.delete(u))),
                        We(n, r, h))
                      : ((s = y ? y(lr(m, t), e, t + '', m, g, b) : Ml),
                        We(m, t, (s = s === Ml ? e : s)));
                  },
                  N,
                );
            }
            function It(e, t) {
              var n = e.length;
              if (n) return Gn((t += t < 0 ? n : 0), n) ? e[t] : Ml;
            }
            function zt(e, r, f) {
              var a = -1;
              r = ei(r.length ? r : [C], ri(s()));
              var t = Ct(e, function (t, e, n) {
                  return {
                    criteria: ei(r, function (e) {
                      return e(t);
                    }),
                    index: ++a,
                    value: t,
                  };
                }),
                n = t.length;
              for (
                t.sort(function (e, t) {
                  for (
                    var n = e,
                      r = t,
                      a = f,
                      l = -1,
                      i = n.criteria,
                      o = r.criteria,
                      c = i.length,
                      u = a.length;
                    ++l < c;

                  ) {
                    var s = on(i[l], o[l]);
                    if (s) return l >= u ? s : s * ('desc' == a[l] ? -1 : 1);
                  }
                  return n.index - r.index;
                });
                n--;

              )
                t[n] = t[n].value;
              return t;
            }
            function Mt(e, t, n) {
              for (var r = -1, a = t.length, l = {}; ++r < a; ) {
                var i = t[r],
                  o = dt(e, i);
                n(o, i) && Dt(l, Qt(i, e), o);
              }
              return l;
            }
            function At(e, t, n, r) {
              var a = r ? zo : ni,
                l = -1,
                i = t.length,
                o = e;
              for (e === t && (t = w(t)), n && (o = ei(e, ri(n))); ++l < i; )
                for (var c = 0, u = t[l], s = n ? n(u) : u; -1 < (c = a(o, s, c, r)); )
                  o !== e && le.call(o, c, 1), le.call(e, c, 1);
              return e;
            }
            function Pt(e, t) {
              for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                var a,
                  l = t[n];
                (n != r && l === a) || (Gn((a = l)) ? le.call(e, l, 1) : Wt(e, l));
              }
            }
            function Lt(e, t) {
              return e + pe(Ee() * (t - e + 1));
            }
            function Rt(e, t) {
              var n = '';
              if (!(!e || t < 1 || Pl < t))
                for (; t % 2 && (n += e), (t = pe(t / 2)) && (e += e), t; );
              return n;
            }
            function i(e, t) {
              return cr(rr(e, t, C), e + '');
            }
            function Dt(e, t, n, r) {
              if (E(e))
                for (
                  var a = -1, l = (t = Qt(t, e)).length, i = l - 1, o = e;
                  null != o && ++a < l;

                ) {
                  var c,
                    u = pr(t[a]),
                    s = n;
                  a != i &&
                    ((c = o[u]),
                    (s = r ? r(c, u, o) : Ml) === Ml && (s = E(c) ? c : Gn(t[a + 1]) ? [] : {})),
                    Je(o, u, s),
                    (o = o[u]);
                }
              return e;
            }
            var Bt = Se
                ? function (e, t) {
                    return Se.set(e, t), e;
                  }
                : C,
              t = ue
                ? function (e, t) {
                    return ue(e, 'toString', {
                      configurable: !0,
                      enumerable: !1,
                      value: cl(t),
                      writable: !0,
                    });
                  }
                : C;
            function o(e, t, n) {
              var r = -1,
                a = e.length;
              (n = a < n ? a : n) < 0 && (n += a),
                (a = n < (t = t < 0 ? (a < -t ? 0 : a + t) : t) ? 0 : (n - t) >>> 0),
                (t >>>= 0);
              for (var l = I(a); ++r < a; ) l[r] = e[r + t];
              return l;
            }
            function Ft(e, r) {
              var a;
              return (
                nt(e, function (e, t, n) {
                  return !(a = r(e, t, n));
                }),
                !!a
              );
            }
            function Tt(e, t, n) {
              var r = 0,
                a = null == e ? r : e.length;
              if ('number' == typeof t && t == t && a <= 2147483647) {
                for (; r < a; ) {
                  var l = (r + a) >>> 1,
                    i = e[l];
                  null !== i && !b(i) && (n ? i <= t : i < t) ? (r = 1 + l) : (a = l);
                }
                return a;
              }
              return $t(e, t, C, n);
            }
            function $t(e, t, n, r) {
              t = n(t);
              for (
                var a = 0,
                  l = null == e ? 0 : e.length,
                  i = t != t,
                  o = null === t,
                  c = b(t),
                  u = t === Ml;
                a < l;

              ) {
                var s = pe((a + l) / 2),
                  f = n(e[s]),
                  d = f !== Ml,
                  h = null === f,
                  p = f == f,
                  m = b(f),
                  p = i
                    ? r || p
                    : u
                    ? p && (r || d)
                    : o
                    ? p && d && (r || !h)
                    : c
                    ? p && d && !h && (r || !m)
                    : !h && !m && (r ? f <= t : f < t);
                p ? (a = s + 1) : (l = s);
              }
              return A(l, 4294967294);
            }
            function qt(e, t) {
              for (var n = -1, r = e.length, a = 0, l = []; ++n < r; ) {
                var i,
                  o = e[n],
                  c = t ? t(o) : o;
                (n && P(c, i)) || ((i = c), (l[a++] = 0 === o ? 0 : o));
              }
              return l;
            }
            function Yt(e) {
              return 'number' == typeof e ? e : b(e) ? NaN : +e;
            }
            function u(e) {
              if ('string' == typeof e) return e;
              if (L(e)) return ei(e, u) + '';
              if (b(e)) return Le ? Le.call(e) : '';
              var t = e + '';
              return '0' == t && 1 / e == -1 / 0 ? '-0' : t;
            }
            function Ht(e, t, n) {
              var r = -1,
                a = ko,
                l = e.length,
                i = !0,
                o = [],
                c = o;
              if (n) (i = !1), (a = No);
              else if (200 <= l) {
                var u = t ? null : jn(e);
                if (u) return Uo(u);
                (i = !1), (a = Fo), (c = new qe());
              } else c = t ? [] : o;
              e: for (; ++r < l; ) {
                var s = e[r],
                  f = t ? t(s) : s,
                  s = n || 0 !== s ? s : 0;
                if (i && f == f) {
                  for (var d = c.length; d--; ) if (c[d] === f) continue e;
                  t && c.push(f), o.push(s);
                } else a(c, f, n) || (c !== o && c.push(f), o.push(s));
              }
              return o;
            }
            function Wt(e, t) {
              return null == (e = ar(e, (t = Qt(t, e)))) || delete e[pr(r(t))];
            }
            function Jt(e, t, n, r) {
              return Dt(e, t, n(dt(e, t)), r);
            }
            function Ut(e, t, n, r) {
              for (var a = e.length, l = r ? a : -1; (r ? l-- : ++l < a) && t(e[l], l, e); );
              return n ? o(e, r ? 0 : l, r ? l + 1 : a) : o(e, r ? l + 1 : 0, r ? a : l);
            }
            function Vt(e, t) {
              var n = e;
              return Co(
                t,
                function (e, t) {
                  return t.func.apply(t.thisArg, ti([e], t.args));
                },
                (n = e instanceof g ? e.value() : n),
              );
            }
            function Kt(e, t, n) {
              var r = e.length;
              if (r < 2) return r ? Ht(e[0]) : [];
              for (var a = -1, l = I(r); ++a < r; )
                for (var i = e[a], o = -1; ++o < r; ) o != a && (l[a] = tt(l[a] || i, e[o], t, n));
              return Ht(c(l, 1), t, n);
            }
            function Gt(e, t, n) {
              for (var r = -1, a = e.length, l = t.length, i = {}; ++r < a; ) {
                var o = r < l ? t[r] : Ml;
                n(i, e[r], o);
              }
              return i;
            }
            function Zt(e) {
              return x(e) ? e : [];
            }
            function Xt(e) {
              return 'function' == typeof e ? e : C;
            }
            function Qt(e, t) {
              return L(e) ? e : Zn(e, t) ? [e] : hr(h(e));
            }
            var en = i;
            function tn(e, t, n) {
              var r = e.length;
              return (n = n === Ml ? r : n), !t && r <= n ? e : o(e, t, n);
            }
            var nn =
              se ||
              function (e) {
                return Gl.clearTimeout(e);
              };
            function rn(e, t) {
              if (t) return e.slice();
              (t = e.length), (t = te ? te(t) : new e.constructor(t));
              return e.copy(t), t;
            }
            function an(e) {
              var t = new e.constructor(e.byteLength);
              return new ee(t).set(new ee(e)), t;
            }
            function ln(e, t) {
              t = t ? an(e.buffer) : e.buffer;
              return new e.constructor(t, e.byteOffset, e.length);
            }
            function on(e, t) {
              if (e !== t) {
                var n = e !== Ml,
                  r = null === e,
                  a = e == e,
                  l = b(e),
                  i = t !== Ml,
                  o = null === t,
                  c = t == t,
                  u = b(t);
                if (
                  (!o && !u && !l && t < e) ||
                  (l && i && c && !o && !u) ||
                  (r && i && c) ||
                  (!n && c) ||
                  !a
                )
                  return 1;
                if (
                  (!r && !l && !u && e < t) ||
                  (u && n && a && !r && !l) ||
                  (o && n && a) ||
                  (!i && a) ||
                  !c
                )
                  return -1;
              }
              return 0;
            }
            function cn(e, t, n, r) {
              for (
                var a = -1,
                  l = e.length,
                  i = n.length,
                  o = -1,
                  c = t.length,
                  u = M(l - i, 0),
                  s = I(c + u),
                  f = !r;
                ++o < c;

              )
                s[o] = t[o];
              for (; ++a < i; ) (f || a < l) && (s[n[a]] = e[a]);
              for (; u--; ) s[o++] = e[a++];
              return s;
            }
            function un(e, t, n, r) {
              for (
                var a = -1,
                  l = e.length,
                  i = -1,
                  o = n.length,
                  c = -1,
                  u = t.length,
                  s = M(l - o, 0),
                  f = I(s + u),
                  d = !r;
                ++a < s;

              )
                f[a] = e[a];
              for (var h = a; ++c < u; ) f[h + c] = t[c];
              for (; ++i < o; ) (d || a < l) && (f[h + n[i]] = e[a++]);
              return f;
            }
            function w(e, t) {
              var n = -1,
                r = e.length;
              for (t = t || I(r); ++n < r; ) t[n] = e[n];
              return t;
            }
            function sn(e, t, n, r) {
              var a = !n;
              n = n || {};
              for (var l = -1, i = t.length; ++l < i; ) {
                var o = t[l],
                  c = r ? r(n[o], e[o], o, n, e) : Ml;
                (a ? Ge : Je)(n, o, (c = c === Ml ? e[o] : c));
              }
              return n;
            }
            function fn(a, l) {
              return function (e, t) {
                var n = L(e) ? wo : Ve,
                  r = l ? l() : {};
                return n(e, a, s(t, 2), r);
              };
            }
            function dn(o) {
              return i(function (e, t) {
                var n = -1,
                  r = t.length,
                  a = 1 < r ? t[r - 1] : Ml,
                  l = 2 < r ? t[2] : Ml,
                  a = 3 < o.length && 'function' == typeof a ? (r--, a) : Ml;
                for (
                  l && f(t[0], t[1], l) && ((a = r < 3 ? Ml : a), (r = 1)), e = v(e);
                  ++n < r;

                ) {
                  var i = t[n];
                  i && o(e, i, n, a);
                }
                return e;
              });
            }
            function hn(l, i) {
              return function (e, t) {
                if (null != e) {
                  if (!d(e)) return l(e, t);
                  for (
                    var n = e.length, r = i ? n : -1, a = v(e);
                    (i ? r-- : ++r < n) && !1 !== t(a[r], r, a);

                  );
                }
                return e;
              };
            }
            function pn(c) {
              return function (e, t, n) {
                for (var r = -1, a = v(e), l = n(e), i = l.length; i--; ) {
                  var o = l[c ? i : ++r];
                  if (!1 === t(a[o], o, a)) break;
                }
                return e;
              };
            }
            function mn(r) {
              return function (e) {
                var t = ai((e = h(e))) ? oi(e) : Ml,
                  n = t ? t[0] : e.charAt(0),
                  t = t ? tn(t, 1).join('') : e.slice(1);
                return n[r]() + t;
              };
            }
            function gn(t) {
              return function (e) {
                return Co(ll(Za(e).replace(io, '')), t, '');
              };
            }
            function vn(r) {
              return function () {
                var e = arguments;
                switch (e.length) {
                  case 0:
                    return new r();
                  case 1:
                    return new r(e[0]);
                  case 2:
                    return new r(e[0], e[1]);
                  case 3:
                    return new r(e[0], e[1], e[2]);
                  case 4:
                    return new r(e[0], e[1], e[2], e[3]);
                  case 5:
                    return new r(e[0], e[1], e[2], e[3], e[4]);
                  case 6:
                    return new r(e[0], e[1], e[2], e[3], e[4], e[5]);
                  case 7:
                    return new r(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
                }
                var t = Re(r.prototype),
                  n = r.apply(t, e);
                return E(n) ? n : t;
              };
            }
            function yn(l) {
              return function (e, t, n) {
                var r,
                  a = v(e),
                  t =
                    (d(e) ||
                      ((r = s(t, 3)),
                      (e = k(e)),
                      (t = function (e) {
                        return r(a[e], e, a);
                      })),
                    l(e, t, n));
                return -1 < t ? a[r ? e[t] : t] : Ml;
              };
            }
            function bn(c) {
              return Rn(function (a) {
                var l = a.length,
                  e = l,
                  t = m.prototype.thru;
                for (c && a.reverse(); e--; ) {
                  var n = a[e];
                  if ('function' != typeof n) throw new z(Al);
                  t && !o && 'wrapper' == Tn(n) && (o = new m([], !0));
                }
                for (e = o ? e : l; ++e < l; )
                  var r = Tn((n = a[e])),
                    i = 'wrapper' == r ? Fn(n) : Ml,
                    o =
                      i && Xn(i[0]) && 424 == i[1] && !i[4].length && 1 == i[9]
                        ? o[Tn(i[0])].apply(o, i[3])
                        : 1 == n.length && Xn(n)
                        ? o[r]()
                        : o.thru(n);
                return function () {
                  var e = arguments,
                    t = e[0];
                  if (o && 1 == e.length && L(t)) return o.plant(t).value();
                  for (var n = 0, r = l ? a[n].apply(this, e) : t; ++n < l; )
                    r = a[n].call(this, r);
                  return r;
                };
              });
            }
            function xn(i, o, c, u, s, f, d, h, p, m) {
              var g = 128 & o,
                v = 1 & o,
                y = 2 & o,
                b = 24 & o,
                x = 512 & o,
                E = y ? Ml : vn(i);
              return function e() {
                for (var t = I((l = arguments.length)), n = l; n--; ) t[n] = arguments[n];
                if (
                  (b &&
                    (a = (function (e, t) {
                      for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
                      return r;
                    })(t, (r = $n(e)))),
                  u && (t = cn(t, u, s, b)),
                  f && (t = un(t, f, d, b)),
                  (l -= a),
                  b && l < m)
                )
                  return (a = li(t, r)), Sn(i, o, xn, e.placeholder, c, t, a, h, p, m - l);
                var r = v ? c : this,
                  a = y ? r[i] : i,
                  l = t.length;
                return (
                  h
                    ? (t = (function (e, t) {
                        for (var n = e.length, r = A(t.length, n), a = w(e); r--; ) {
                          var l = t[r];
                          e[r] = Gn(l, n) ? a[l] : Ml;
                        }
                        return e;
                      })(t, h))
                    : x && 1 < l && t.reverse(),
                  g && p < l && (t.length = p),
                  (a = this && this !== Gl && this instanceof e ? E || vn(a) : a).apply(r, t)
                );
              };
            }
            function En(n, i) {
              return function (e, t) {
                return (
                  (e = e),
                  (r = n),
                  (a = i(t)),
                  (l = {}),
                  ut(e, function (e, t, n) {
                    r(l, a(e), t, n);
                  }),
                  l
                );
                var r, a, l;
              };
            }
            function wn(r, a) {
              return function (e, t) {
                var n;
                if (e === Ml && t === Ml) return a;
                if ((e !== Ml && (n = e), t !== Ml)) {
                  if (n === Ml) return t;
                  (t =
                    'string' == typeof e || 'string' == typeof t
                      ? ((e = u(e)), u(t))
                      : ((e = Yt(e)), Yt(t))),
                    (n = r(e, t));
                }
                return n;
              };
            }
            function _n(r) {
              return Rn(function (e) {
                return (
                  (e = ei(e, ri(s()))),
                  i(function (t) {
                    var n = this;
                    return r(e, function (e) {
                      return Zl(e, n, t);
                    });
                  })
                );
              });
            }
            function kn(e, t) {
              var n = (t = t === Ml ? ' ' : u(t)).length;
              if (n < 2) return n ? Rt(t, e) : t;
              n = Rt(t, he(e / ii(t)));
              return ai(t) ? tn(oi(n), 0, e).join('') : n.slice(0, e);
            }
            function Nn(s) {
              return function (e, t, n) {
                n && 'number' != typeof n && f(e, t, n) && (t = n = Ml),
                  (e = Ca(e)),
                  t === Ml ? ((t = e), (e = 0)) : (t = Ca(t));
                for (
                  var r = e,
                    a = t,
                    l = (n = n === Ml ? (e < t ? 1 : -1) : Ca(n)),
                    i = s,
                    o = -1,
                    c = M(he((a - r) / (l || 1)), 0),
                    u = I(c);
                  c--;

                )
                  (u[i ? c : ++o] = r), (r += l);
                return u;
              };
            }
            function Cn(n) {
              return function (e, t) {
                return (
                  ('string' == typeof e && 'string' == typeof t) || ((e = _(e)), (t = _(t))),
                  n(e, t)
                );
              };
            }
            function Sn(e, t, n, r, a, l, i, o, c, u) {
              var s = 8 & t,
                a =
                  (4 & (t = (t | (s ? 32 : 64)) & ~(s ? 64 : 32)) || (t &= -4),
                  [e, t, a, s ? l : Ml, s ? i : Ml, s ? Ml : l, s ? Ml : i, o, c, u]),
                l = n.apply(Ml, a);
              return Xn(e) && ir(l, a), (l.placeholder = r), ur(l, e, t);
            }
            function On(e) {
              var r = T[e];
              return function (e, t) {
                var n;
                return (
                  (e = _(e)),
                  (t = null == t ? 0 : A(R(t), 292))
                    ? ((n = (h(e) + 'e').split('e')),
                      +(
                        (n = (h(r(n[0] + 'e' + (+n[1] + t))) + 'e').split('e'))[0] +
                        'e' +
                        (+n[1] - t)
                      ))
                    : r(e)
                );
              };
            }
            var jn =
              Ne && 1 / Uo(new Ne([, -0]))[1] == 1 / 0
                ? function (e) {
                    return new Ne(e);
                  }
                : ml;
            function In(l) {
              return function (e) {
                var t,
                  n,
                  r,
                  a = j(e);
                return a == Fl
                  ? Wo(e)
                  : a == Yl
                  ? ((a = e),
                    (n = -1),
                    (r = Array(a.size)),
                    a.forEach(function (e) {
                      r[++n] = [e, e];
                    }),
                    r)
                  : ei(l((t = e)), function (e) {
                      return [e, t[e]];
                    });
              };
            }
            function zn(e, t, n, r, a, l, i, o) {
              var c = 2 & t;
              if (!c && 'function' != typeof e) throw new z(Al);
              var u,
                s,
                f,
                d,
                h,
                p,
                m,
                g,
                v,
                y,
                b,
                x,
                E,
                w,
                _,
                k,
                N,
                C,
                S = r ? r.length : 0,
                O =
                  (S || ((t &= -97), (r = a = Ml)),
                  (i = i === Ml ? i : M(R(i), 0)),
                  (o = o === Ml ? o : R(o)),
                  (S -= a ? a.length : 0),
                  64 & t && ((j = r), (w = a), (r = a = Ml)),
                  c ? Ml : Fn(e)),
                j = [e, t, n, r, a, j, w, l, i, o];
              return (
                O &&
                  ((w = O),
                  (i = (l = j)[1]),
                  (k = w[1]),
                  (N = i | k),
                  (C =
                    (128 == k && 8 == i) ||
                    (128 == k && 256 == i && l[7].length <= w[8]) ||
                    (384 == k && w[7].length <= w[8] && 8 == i)),
                  (N < 131 || C) &&
                    (1 & k && ((l[2] = w[2]), (N |= 1 & i ? 0 : 4)),
                    (C = w[3]) &&
                      ((_ = l[3]),
                      (l[3] = _ ? cn(_, C, w[4]) : C),
                      (l[4] = _ ? li(l[3], si) : w[4])),
                    (C = w[5]) &&
                      ((_ = l[5]),
                      (l[5] = _ ? un(_, C, w[6]) : C),
                      (l[6] = _ ? li(l[5], si) : w[6])),
                    (C = w[7]) && (l[7] = C),
                    128 & k && (l[8] = null == l[8] ? w[8] : A(l[8], w[8])),
                    null == l[9] && (l[9] = w[9]),
                    (l[0] = w[0]),
                    (l[1] = N))),
                (e = j[0]),
                (t = j[1]),
                (n = j[2]),
                (r = j[3]),
                (a = j[4]),
                !(o = j[9] = j[9] === Ml ? (c ? 0 : e.length) : M(j[9] - S, 0)) &&
                  24 & t &&
                  (t &= -25),
                (i =
                  t && 1 != t
                    ? 8 == t || 16 == t
                      ? ((b = t),
                        (x = o),
                        (E = vn((y = e))),
                        function e() {
                          for (var t = arguments.length, n = I(t), r = t, a = $n(e); r--; )
                            n[r] = arguments[r];
                          a = t < 3 && n[0] !== a && n[t - 1] !== a ? [] : li(n, a);
                          return (t -= a.length) < x
                            ? Sn(y, b, xn, e.placeholder, Ml, n, a, Ml, Ml, x - t)
                            : Zl(this && this !== Gl && this instanceof e ? E : y, this, n);
                        })
                      : (32 != t && 33 != t) || a.length
                      ? xn.apply(Ml, j)
                      : ((p = n),
                        (m = r),
                        (g = 1 & t),
                        (v = vn((h = e))),
                        function e() {
                          for (
                            var t = -1,
                              n = arguments.length,
                              r = -1,
                              a = m.length,
                              l = I(a + n),
                              i = this && this !== Gl && this instanceof e ? v : h;
                            ++r < a;

                          )
                            l[r] = m[r];
                          for (; n--; ) l[r++] = arguments[++t];
                          return Zl(i, g ? p : this, l);
                        })
                    : ((s = n),
                      (f = 1 & t),
                      (d = vn((u = e))),
                      function e() {
                        return (this && this !== Gl && this instanceof e ? d : u).apply(
                          f ? s : this,
                          arguments,
                        );
                      })),
                ur((O ? Bt : ir)(i, j), e, t)
              );
            }
            function Mn(e, t, n, r) {
              return e === Ml || (P(e, W[n]) && !S.call(r, n)) ? t : e;
            }
            function An(e, t, n, r, a, l) {
              return E(e) && E(t) && (l.set(t, e), jt(e, t, Ml, An, l), l.delete(t)), e;
            }
            function Pn(e) {
              return ya(e) ? Ml : e;
            }
            function Ln(e, t, n, r, a, l) {
              var i = 1 & n,
                o = e.length,
                c = t.length;
              if (o != c && !(i && o < c)) return !1;
              c = l.get(e);
              if (c && l.get(t)) return c == t;
              var u = -1,
                s = !0,
                f = 2 & n ? new qe() : Ml;
              for (l.set(e, t), l.set(t, e); ++u < o; ) {
                var d,
                  h = e[u],
                  p = t[u];
                if ((d = r ? (i ? r(p, h, u, t, e, l) : r(h, p, u, e, t, l)) : d) !== Ml) {
                  if (d) continue;
                  s = !1;
                  break;
                }
                if (f) {
                  if (
                    !Oo(t, function (e, t) {
                      return !Fo(f, t) && (h === e || a(h, e, n, r, l)) && f.push(t);
                    })
                  ) {
                    s = !1;
                    break;
                  }
                } else if (h !== p && !a(h, p, n, r, l)) {
                  s = !1;
                  break;
                }
              }
              return l.delete(e), l.delete(t), s;
            }
            function Rn(e) {
              return cr(rr(e, Ml, br), e + '');
            }
            function Dn(e) {
              return ht(e, k, Wn);
            }
            function Bn(e) {
              return ht(e, N, Jn);
            }
            var Fn = Se
              ? function (e) {
                  return Se.get(e);
                }
              : ml;
            function Tn(e) {
              for (var t = e.name + '', n = Oe[t], r = S.call(Oe, t) ? n.length : 0; r--; ) {
                var a = n[r],
                  l = a.func;
                if (null == l || l == e) return a.name;
              }
              return t;
            }
            function $n(e) {
              return (S.call(p, 'placeholder') ? p : e).placeholder;
            }
            function s() {
              var e = (e = p.iteratee || fl) === fl ? _t : e;
              return arguments.length ? e(arguments[0], arguments[1]) : e;
            }
            function qn(e, t) {
              var n,
                e = e.__data__;
              return (
                'string' == (n = typeof t) || 'number' == n || 'symbol' == n || 'boolean' == n
                  ? '__proto__' !== t
                  : null === t
              )
                ? e['string' == typeof t ? 'string' : 'hash']
                : e.map;
            }
            function Yn(e) {
              for (var t = k(e), n = t.length; n--; ) {
                var r = t[n],
                  a = e[r];
                t[n] = [r, a, tr(a)];
              }
              return t;
            }
            function Hn(e, t) {
              e = null == e ? Ml : e[t];
              return wt(e) ? e : Ml;
            }
            var Wn = me
                ? function (t) {
                    return null == t
                      ? []
                      : ((t = v(t)),
                        Ql(me(t), function (e) {
                          return ae.call(t, e);
                        }));
                  }
                : wl,
              Jn = me
                ? function (e) {
                    for (var t = []; e; ) ti(t, Wn(e)), (e = ne(e));
                    return t;
                  }
                : wl,
              j = n;
            function Un(e, t, n) {
              for (var r = -1, a = (t = Qt(t, e)).length, l = !1; ++r < a; ) {
                var i = pr(t[r]);
                if (!(l = null != e && n(e, i))) break;
                e = e[i];
              }
              return l || ++r != a
                ? l
                : !!(a = null == e ? 0 : e.length) && ma(a) && Gn(i, a) && (L(e) || ua(e));
            }
            function Vn(e) {
              return 'function' != typeof e.constructor || er(e) ? {} : Re(ne(e));
            }
            function Kn(e) {
              return L(e) || ua(e) || !!(ie && e && e[ie]);
            }
            function Gn(e, t) {
              var n = typeof e;
              return (
                !!(t = null == t ? Pl : t) &&
                ('number' == n || ('symbol' != n && no.test(e))) &&
                -1 < e &&
                e % 1 == 0 &&
                e < t
              );
            }
            function f(e, t, n) {
              if (!E(n)) return !1;
              var r = typeof t;
              return (
                !!('number' == r ? d(n) && Gn(t, n.length) : 'string' == r && t in n) && P(n[t], e)
              );
            }
            function Zn(e, t) {
              var n;
              if (!L(e))
                return (
                  (n = typeof e),
                  'number' == n ||
                    'symbol' == n ||
                    'boolean' == n ||
                    null == e ||
                    b(e) ||
                    Bi.test(e) ||
                    !Di.test(e) ||
                    (null != t && e in v(t))
                );
            }
            function Xn(e) {
              var t = Tn(e),
                n = p[t];
              if ('function' == typeof n && t in g.prototype) {
                if (e === n) return 1;
                t = Fn(n);
                return t && e === t[0];
              }
            }
            ((D && j(new D(new ArrayBuffer(1))) != Ul) ||
              (_e && j(new _e()) != Fl) ||
              (ke && j(ke.resolve()) != gi) ||
              (Ne && j(new Ne()) != Yl) ||
              (e && j(new e()) != Wl)) &&
              (j = function (e) {
                var t = n(e),
                  e = t == $l ? e.constructor : Ml,
                  e = e ? mr(e) : '';
                if (e)
                  switch (e) {
                    case je:
                      return Ul;
                    case Ie:
                      return Fl;
                    case ze:
                      return gi;
                    case Me:
                      return Yl;
                    case Ae:
                      return Wl;
                  }
                return t;
              });
            var Qn = J ? ha : _l;
            function er(e) {
              var t = e && e.constructor;
              return e === (('function' == typeof t && t.prototype) || W);
            }
            function tr(e) {
              return e == e && !E(e);
            }
            function nr(t, n) {
              return function (e) {
                return null != e && e[t] === n && (n !== Ml || t in v(e));
              };
            }
            function rr(l, i, o) {
              return (
                (i = M(i === Ml ? l.length - 1 : i, 0)),
                function () {
                  for (var e = arguments, t = -1, n = M(e.length - i, 0), r = I(n); ++t < n; )
                    r[t] = e[i + t];
                  for (var t = -1, a = I(i + 1); ++t < i; ) a[t] = e[t];
                  return (a[i] = o(r)), Zl(l, this, a);
                }
              );
            }
            function ar(e, t) {
              return t.length < 2 ? e : dt(e, o(t, 0, -1));
            }
            function lr(e, t) {
              if ('__proto__' != t) return e[t];
            }
            var ir = sr(Bt),
              or =
                de ||
                function (e, t) {
                  return Gl.setTimeout(e, t);
                },
              cr = sr(t);
            function ur(e, t, n) {
              var r,
                a,
                t = t + '';
              return cr(
                e,
                (function (e, t) {
                  var n = t.length;
                  if (!n) return e;
                  var r = n - 1;
                  return (
                    (t[r] = (1 < n ? '& ' : '') + t[r]),
                    (t = t.join(2 < n ? ', ' : ' ')),
                    e.replace(Wi, '{\n/* [wrapped with ' + t + '] */\n')
                  );
                })(
                  t,
                  ((e = t.match(Ji)),
                  (r = e ? e[1].split(Ui) : []),
                  (a = n),
                  Xl(fi, function (e) {
                    var t = '_.' + e[0];
                    a & e[1] && !ko(r, t) && r.push(t);
                  }),
                  r.sort()),
                ),
              );
            }
            function sr(n) {
              var r = 0,
                a = 0;
              return function () {
                var e = be(),
                  t = 16 - (e - a);
                if (((a = e), 0 < t)) {
                  if (800 <= ++r) return arguments[0];
                } else r = 0;
                return n.apply(Ml, arguments);
              };
            }
            function fr(e, t) {
              var n = -1,
                r = e.length,
                a = r - 1;
              for (t = t === Ml ? r : t; ++n < t; ) {
                var l = Lt(n, a),
                  i = e[l];
                (e[l] = e[n]), (e[n] = i);
              }
              return (e.length = t), e;
            }
            dr = (se = na(
              function (e) {
                var a = [];
                return (
                  46 === e.charCodeAt(0) && a.push(''),
                  e.replace(Fi, function (e, t, n, r) {
                    a.push(n ? r.replace(Ki, '$1') : t || e);
                  }),
                  a
                );
              },
              function (e) {
                return 500 === dr.size && dr.clear(), e;
              },
            )).cache;
            var dr,
              hr = se;
            function pr(e) {
              if ('string' == typeof e || b(e)) return e;
              var t = e + '';
              return '0' == t && 1 / e == -1 / 0 ? '-0' : t;
            }
            function mr(e) {
              if (null != e) {
                try {
                  return U.call(e);
                } catch (e) {}
                try {
                  return e + '';
                } catch (e) {}
              }
              return '';
            }
            function gr(e) {
              if (e instanceof g) return e.clone();
              var t = new m(e.__wrapped__, e.__chain__);
              return (
                (t.__actions__ = w(e.__actions__)),
                (t.__index__ = e.__index__),
                (t.__values__ = e.__values__),
                t
              );
            }
            (D = i(function (e, t) {
              return x(e) ? tt(e, c(t, 1, x, !0)) : [];
            })),
              (ke = i(function (e, t) {
                var n = r(t);
                return x(n) && (n = Ml), x(e) ? tt(e, c(t, 1, x, !0), s(n, 2)) : [];
              })),
              (e = i(function (e, t) {
                var n = r(t);
                return x(n) && (n = Ml), x(e) ? tt(e, c(t, 1, x, !0), Ml, n) : [];
              }));
            function vr(e, t, n) {
              var r = null == e ? 0 : e.length;
              if (!r) return -1;
              n = null == n ? 0 : R(n);
              return n < 0 && (n = M(r + n, 0)), Io(e, s(t, 3), n);
            }
            function yr(e, t, n) {
              var r = null == e ? 0 : e.length;
              if (!r) return -1;
              var a = r - 1;
              return (
                n !== Ml && ((a = R(n)), (a = n < 0 ? M(r + a, 0) : A(a, r - 1))),
                Io(e, s(t, 3), a, !0)
              );
            }
            function br(e) {
              return null != e && e.length ? c(e, 1) : [];
            }
            function xr(e) {
              return e && e.length ? e[0] : Ml;
            }
            (J = i(function (e) {
              var t = ei(e, Zt);
              return t.length && t[0] === e[0] ? vt(t) : [];
            })),
              (de = i(function (e) {
                var t = r(e),
                  n = ei(e, Zt);
                return (
                  t === r(n) ? (t = Ml) : n.pop(), n.length && n[0] === e[0] ? vt(n, s(t, 2)) : []
                );
              })),
              (t = i(function (e) {
                var t = r(e),
                  n = ei(e, Zt);
                return (
                  (t = 'function' == typeof t ? t : Ml) && n.pop(),
                  n.length && n[0] === e[0] ? vt(n, Ml, t) : []
                );
              }));
            function r(e) {
              var t = null == e ? 0 : e.length;
              return t ? e[t - 1] : Ml;
            }
            se = i(Er);
            function Er(e, t) {
              return e && e.length && t && t.length ? At(e, t) : e;
            }
            var wr = Rn(function (e, t) {
              var n = null == e ? 0 : e.length,
                r = Ze(e, t);
              return (
                Pt(
                  e,
                  ei(t, function (e) {
                    return Gn(e, n) ? +e : e;
                  }).sort(on),
                ),
                r
              );
            });
            function _r(e) {
              return null == e ? e : we.call(e);
            }
            var kr = i(function (e) {
                return Ht(c(e, 1, x, !0));
              }),
              Nr = i(function (e) {
                var t = r(e);
                return x(t) && (t = Ml), Ht(c(e, 1, x, !0), s(t, 2));
              }),
              Cr = i(function (e) {
                var t = 'function' == typeof (t = r(e)) ? t : Ml;
                return Ht(c(e, 1, x, !0), Ml, t);
              });
            function Sr(t) {
              if (!t || !t.length) return [];
              var n = 0;
              return (
                (t = Ql(t, function (e) {
                  if (x(e)) return (n = M(e.length, n)), !0;
                })),
                Do(n, function (e) {
                  return ei(t, Po(e));
                })
              );
            }
            function Or(e, t) {
              if (!e || !e.length) return [];
              e = Sr(e);
              return null == t
                ? e
                : ei(e, function (e) {
                    return Zl(t, Ml, e);
                  });
            }
            var jr = i(function (e, t) {
                return x(e) ? tt(e, t) : [];
              }),
              Ir = i(function (e) {
                return Kt(Ql(e, x));
              }),
              zr = i(function (e) {
                var t = r(e);
                return x(t) && (t = Ml), Kt(Ql(e, x), s(t, 2));
              }),
              Mr = i(function (e) {
                var t = 'function' == typeof (t = r(e)) ? t : Ml;
                return Kt(Ql(e, x), Ml, t);
              }),
              Ar = i(Sr),
              Pr = i(function (e) {
                var t = e.length,
                  t = 'function' == typeof (t = 1 < t ? e[t - 1] : Ml) ? (e.pop(), t) : Ml;
                return Or(e, t);
              });
            function Lr(e) {
              e = p(e);
              return (e.__chain__ = !0), e;
            }
            function Rr(e, t) {
              return t(e);
            }
            var Dr = Rn(function (t) {
                function e(e) {
                  return Ze(e, t);
                }
                var n = t.length,
                  r = n ? t[0] : 0,
                  a = this.__wrapped__;
                return !(1 < n || this.__actions__.length) && a instanceof g && Gn(r)
                  ? ((a = a.slice(r, +r + (n ? 1 : 0))).__actions__.push({
                      func: Rr,
                      args: [e],
                      thisArg: Ml,
                    }),
                    new m(a, this.__chain__).thru(function (e) {
                      return n && !e.length && e.push(Ml), e;
                    }))
                  : this.thru(e);
              }),
              Br = fn(function (e, t, n) {
                S.call(e, n) ? ++e[n] : Ge(e, n, 1);
              }),
              Fr = yn(vr),
              Tr = yn(yr);
            function $r(e, t) {
              return (L(e) ? Xl : nt)(e, s(t, 3));
            }
            function qr(e, t) {
              return (
                L(e)
                  ? function (e, t) {
                      for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); );
                      return e;
                    }
                  : rt
              )(e, s(t, 3));
            }
            var Yr = fn(function (e, t, n) {
                S.call(e, n) ? e[n].push(t) : Ge(e, n, [t]);
              }),
              Hr = i(function (e, t, n) {
                var r = -1,
                  a = 'function' == typeof t,
                  l = d(e) ? I(e.length) : [];
                return (
                  nt(e, function (e) {
                    l[++r] = a ? Zl(t, e, n) : yt(e, t, n);
                  }),
                  l
                );
              }),
              Wr = fn(function (e, t, n) {
                Ge(e, n, t);
              });
            function Jr(e, t) {
              return (L(e) ? ei : Ct)(e, s(t, 3));
            }
            var Ur = fn(
                function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                },
                function () {
                  return [[], []];
                },
              ),
              Vr = i(function (e, t) {
                if (null == e) return [];
                var n = t.length;
                return (
                  1 < n && f(e, t[0], t[1])
                    ? (t = [])
                    : 2 < n && f(t[0], t[1], t[2]) && (t = [t[0]]),
                  zt(e, c(t, 1), [])
                );
              }),
              Kr =
                fe ||
                function () {
                  return Gl.Date.now();
                };
            function Gr(e, t, n) {
              return (
                (t = n ? Ml : t), (t = e && null == t ? e.length : t), zn(e, 128, Ml, Ml, Ml, Ml, t)
              );
            }
            function Zr(e, t) {
              var n;
              if ('function' != typeof t) throw new z(Al);
              return (
                (e = R(e)),
                function () {
                  return 0 < --e && (n = t.apply(this, arguments)), e <= 1 && (t = Ml), n;
                }
              );
            }
            var Xr = i(function (e, t, n) {
                var r,
                  a = 1;
                return n.length && ((r = li(n, $n(Xr))), (a |= 32)), zn(e, a, t, n, r);
              }),
              Qr = i(function (e, t, n) {
                var r,
                  a = 3;
                return n.length && ((r = li(n, $n(Qr))), (a |= 32)), zn(t, a, e, n, r);
              });
            function ea(r, n, e) {
              var a,
                l,
                i,
                o,
                c,
                u,
                s = 0,
                f = !1,
                d = !1,
                t = !0;
              if ('function' != typeof r) throw new z(Al);
              function h(e) {
                var t = a,
                  n = l;
                return (a = l = Ml), (s = e), (o = r.apply(n, t));
              }
              function p(e) {
                var t = e - u;
                return u === Ml || n <= t || t < 0 || (d && i <= e - s);
              }
              function m() {
                var e,
                  t = Kr();
                if (p(t)) return g(t);
                c = or(m, ((e = n - (t - u)), d ? A(e, i - (t - s)) : e));
              }
              function g(e) {
                return (c = Ml), t && a ? h(e) : ((a = l = Ml), o);
              }
              function v() {
                var e = Kr(),
                  t = p(e);
                if (((a = arguments), (l = this), (u = e), t)) {
                  if (c === Ml) return (s = e = u), (c = or(m, n)), f ? h(e) : o;
                  if (d) return (c = or(m, n)), h(u);
                }
                return c === Ml && (c = or(m, n)), o;
              }
              return (
                (n = _(n) || 0),
                E(e) &&
                  ((f = !!e.leading),
                  (i = (d = 'maxWait' in e) ? M(_(e.maxWait) || 0, n) : i),
                  (t = 'trailing' in e ? !!e.trailing : t)),
                (v.cancel = function () {
                  c !== Ml && nn(c), (s = 0), (a = u = l = c = Ml);
                }),
                (v.flush = function () {
                  return c === Ml ? o : g(Kr());
                }),
                v
              );
            }
            var fe = i(function (e, t) {
                return et(e, 1, t);
              }),
              ta = i(function (e, t, n) {
                return et(e, _(t) || 0, n);
              });
            function na(r, a) {
              if ('function' != typeof r || (null != a && 'function' != typeof a)) throw new z(Al);
              function l() {
                var e = arguments,
                  t = a ? a.apply(this, e) : e[0],
                  n = l.cache;
                return n.has(t)
                  ? n.get(t)
                  : ((e = r.apply(this, e)), (l.cache = n.set(t, e) || n), e);
              }
              return (l.cache = new (na.Cache || $e)()), l;
            }
            function ra(t) {
              if ('function' != typeof t) throw new z(Al);
              return function () {
                var e = arguments;
                switch (e.length) {
                  case 0:
                    return !t.call(this);
                  case 1:
                    return !t.call(this, e[0]);
                  case 2:
                    return !t.call(this, e[0], e[1]);
                  case 3:
                    return !t.call(this, e[0], e[1], e[2]);
                }
                return !t.apply(this, e);
              };
            }
            na.Cache = $e;
            var en = en(function (r, a) {
                var l = (a = 1 == a.length && L(a[0]) ? ei(a[0], ri(s())) : ei(c(a, 1), ri(s())))
                  .length;
                return i(function (e) {
                  for (var t = -1, n = A(e.length, l); ++t < n; ) e[t] = a[t].call(this, e[t]);
                  return Zl(r, this, e);
                });
              }),
              aa = i(function (e, t) {
                var n = li(t, $n(aa));
                return zn(e, 32, Ml, t, n);
              }),
              la = i(function (e, t) {
                var n = li(t, $n(la));
                return zn(e, 64, Ml, t, n);
              }),
              ia = Rn(function (e, t) {
                return zn(e, 256, Ml, Ml, Ml, t);
              });
            function P(e, t) {
              return e === t || (e != e && t != t);
            }
            var oa = Cn(pt),
              ca = Cn(function (e, t) {
                return t <= e;
              }),
              ua = bt(
                (function () {
                  return arguments;
                })(),
              )
                ? bt
                : function (e) {
                    return l(e) && S.call(e, 'callee') && !ae.call(e, 'callee');
                  },
              L = I.isArray,
              sa = go
                ? ri(go)
                : function (e) {
                    return l(e) && n(e) == Jl;
                  };
            function d(e) {
              return null != e && ma(e.length) && !ha(e);
            }
            function x(e) {
              return l(e) && d(e);
            }
            var fa = H || _l,
              H = vo
                ? ri(vo)
                : function (e) {
                    return l(e) && n(e) == Bl;
                  };
            function da(e) {
              if (!l(e)) return !1;
              var t = n(e);
              return (
                t == hi ||
                '[object DOMException]' == t ||
                ('string' == typeof e.message && 'string' == typeof e.name && !ya(e))
              );
            }
            function ha(e) {
              if (!E(e)) return !1;
              e = n(e);
              return e == pi || e == mi || '[object AsyncFunction]' == e || '[object Proxy]' == e;
            }
            function pa(e) {
              return 'number' == typeof e && e == R(e);
            }
            function ma(e) {
              return 'number' == typeof e && -1 < e && e % 1 == 0 && e <= Pl;
            }
            function E(e) {
              var t = typeof e;
              return null != e && ('object' == t || 'function' == t);
            }
            function l(e) {
              return null != e && 'object' == typeof e;
            }
            var ga = yo
              ? ri(yo)
              : function (e) {
                  return l(e) && j(e) == Fl;
                };
            function va(e) {
              return 'number' == typeof e || (l(e) && n(e) == Tl);
            }
            function ya(e) {
              if (!l(e) || n(e) != $l) return !1;
              e = ne(e);
              if (null === e) return !0;
              e = S.call(e, 'constructor') && e.constructor;
              return 'function' == typeof e && e instanceof e && U.call(e) == Z;
            }
            var ba = bo
                ? ri(bo)
                : function (e) {
                    return l(e) && n(e) == ql;
                  },
              xa = xo
                ? ri(xo)
                : function (e) {
                    return l(e) && j(e) == Yl;
                  };
            function Ea(e) {
              return 'string' == typeof e || (!L(e) && l(e) && n(e) == Hl);
            }
            function b(e) {
              return 'symbol' == typeof e || (l(e) && n(e) == vi);
            }
            var wa = Eo
                ? ri(Eo)
                : function (e) {
                    return l(e) && ma(e.length) && !!Vl[n(e)];
                  },
              _a = Cn(Nt),
              ka = Cn(function (e, t) {
                return e <= t;
              });
            function Na(e) {
              if (!e) return [];
              if (d(e)) return (Ea(e) ? oi : w)(e);
              var t;
              {
                if (oe && e[oe]) {
                  for (var n, r = e[oe](), a = []; !(n = r.next()).done; ) a.push(n.value);
                  return a;
                }
                return ((t = j(e)) == Fl ? Wo : t == Yl ? Uo : Va)(e);
              }
            }
            function Ca(e) {
              return e
                ? (e = _(e)) === 1 / 0 || e === -1 / 0
                  ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                  : e == e
                  ? e
                  : 0
                : 0 === e
                ? e
                : 0;
            }
            function R(e) {
              var e = Ca(e),
                t = e % 1;
              return e == e ? (t ? e - t : e) : 0;
            }
            function Sa(e) {
              return e ? Xe(R(e), 0, Ll) : 0;
            }
            function _(e) {
              if ('number' == typeof e) return e;
              if (b(e)) return NaN;
              if (
                'string' !=
                typeof (e = E(e)
                  ? E((t = 'function' == typeof e.valueOf ? e.valueOf() : e))
                    ? t + ''
                    : t
                  : e)
              )
                return 0 === e ? e : +e;
              e = e.replace(qi, '');
              var t = Qi.test(e);
              return t || to.test(e) ? po(e.slice(2), t ? 2 : 8) : Xi.test(e) ? NaN : +e;
            }
            function Oa(e) {
              return sn(e, N(e));
            }
            function h(e) {
              return null == e ? '' : u(e);
            }
            var ja = dn(function (e, t) {
                if (er(t) || d(t)) sn(t, k(t), e);
                else for (var n in t) S.call(t, n) && Je(e, n, t[n]);
              }),
              Ia = dn(function (e, t) {
                sn(t, N(t), e);
              }),
              za = dn(function (e, t, n, r) {
                sn(t, N(t), e, r);
              }),
              Ma = dn(function (e, t, n, r) {
                sn(t, k(t), e, r);
              }),
              Aa = Rn(Ze),
              Pa = i(function (e, t) {
                e = v(e);
                var n = -1,
                  r = t.length,
                  a = 2 < r ? t[2] : Ml;
                for (a && f(t[0], t[1], a) && (r = 1); ++n < r; )
                  for (var l = t[n], i = N(l), o = -1, c = i.length; ++o < c; ) {
                    var u = i[o],
                      s = e[u];
                    (s === Ml || (P(s, W[u]) && !S.call(e, u))) && (e[u] = l[u]);
                  }
                return e;
              }),
              La = i(function (e) {
                return e.push(Ml, An), Zl(qa, Ml, e);
              });
            function Ra(e, t, n) {
              e = null == e ? Ml : dt(e, t);
              return e === Ml ? n : e;
            }
            function Da(e, t) {
              return null != e && Un(e, t, gt);
            }
            var Ba = En(function (e, t, n) {
                e[(t = null != t && 'function' != typeof t.toString ? G.call(t) : t)] = n;
              }, cl(C)),
              Fa = En(function (e, t, n) {
                null != t && 'function' != typeof t.toString && (t = G.call(t)),
                  S.call(e, t) ? e[t].push(n) : (e[t] = [n]);
              }, s),
              Ta = i(yt);
            function k(e) {
              return (d(e) ? Ye : kt)(e);
            }
            function N(e) {
              if (d(e)) return Ye(e, !0);
              var t = e;
              if (E(t)) {
                var n,
                  r = er(t),
                  a = [];
                for (n in t) ('constructor' != n || (!r && S.call(t, n))) && a.push(n);
                return a;
              }
              var l = [];
              if (null != t) for (var i in v(t)) l.push(i);
              return l;
            }
            var $a = dn(function (e, t, n) {
                jt(e, t, n);
              }),
              qa = dn(function (e, t, n, r) {
                jt(e, t, n, r);
              }),
              Ya = Rn(function (t, e) {
                var n = {};
                if (null != t) {
                  var r = !1;
                  (e = ei(e, function (e) {
                    return (e = Qt(e, t)), (r = r || 1 < e.length), e;
                  })),
                    sn(t, Bn(t), n),
                    r && (n = y(n, 7, Pn));
                  for (var a = e.length; a--; ) Wt(n, e[a]);
                }
                return n;
              }),
              Ha = Rn(function (e, t) {
                return null == e
                  ? {}
                  : Mt((n = e), t, function (e, t) {
                      return Da(n, t);
                    });
                var n;
              });
            function Wa(e, n) {
              if (null == e) return {};
              var t = ei(Bn(e), function (e) {
                return [e];
              });
              return (
                (n = s(n)),
                Mt(e, t, function (e, t) {
                  return n(e, t[0]);
                })
              );
            }
            var Ja = In(k),
              Ua = In(N);
            function Va(e) {
              return null == e ? [] : Bo(e, k(e));
            }
            var Ka = gn(function (e, t, n) {
              return (t = t.toLowerCase()), e + (n ? Ga(t) : t);
            });
            function Ga(e) {
              return al(h(e).toLowerCase());
            }
            function Za(e) {
              return (e = h(e)) && e.replace(ro, qo).replace(oo, '');
            }
            var Xa = gn(function (e, t, n) {
                return e + (n ? '-' : '') + t.toLowerCase();
              }),
              Qa = gn(function (e, t, n) {
                return e + (n ? ' ' : '') + t.toLowerCase();
              }),
              el = mn('toLowerCase'),
              tl = gn(function (e, t, n) {
                return e + (n ? '_' : '') + t.toLowerCase();
              }),
              nl = gn(function (e, t, n) {
                return e + (n ? ' ' : '') + al(t);
              }),
              rl = gn(function (e, t, n) {
                return e + (n ? ' ' : '') + t.toUpperCase();
              }),
              al = mn('toUpperCase');
            function ll(e, t, n) {
              return (
                (e = h(e)),
                (t = n ? Ml : t) === Ml
                  ? ((n = e), uo.test(n) ? e.match(co) || [] : e.match(Vi) || [])
                  : e.match(t) || []
              );
            }
            var il = i(function (e, t) {
                try {
                  return Zl(e, Ml, t);
                } catch (e) {
                  return da(e) ? e : new B(e);
                }
              }),
              ol = Rn(function (t, e) {
                return (
                  Xl(e, function (e) {
                    (e = pr(e)), Ge(t, e, Xr(t[e], t));
                  }),
                  t
                );
              });
            function cl(e) {
              return function () {
                return e;
              };
            }
            var ul = bn(),
              sl = bn(!0);
            function C(e) {
              return e;
            }
            function fl(e) {
              return _t('function' == typeof e ? e : y(e, 1));
            }
            var dl = i(function (t, n) {
                return function (e) {
                  return yt(e, t, n);
                };
              }),
              hl = i(function (t, n) {
                return function (e) {
                  return yt(t, e, n);
                };
              });
            function pl(r, t, e) {
              var n = k(t),
                a = ft(t, n),
                l =
                  (null != e ||
                    (E(t) && (a.length || !n.length)) ||
                    ((e = t), (t = r), (r = this), (a = ft(t, k(t)))),
                  !(E(e) && 'chain' in e && !e.chain)),
                i = ha(r);
              return (
                Xl(a, function (e) {
                  var n = t[e];
                  (r[e] = n),
                    i &&
                      (r.prototype[e] = function () {
                        var e,
                          t = this.__chain__;
                        return l || t
                          ? (((e = r(this.__wrapped__)).__actions__ = w(this.__actions__)).push({
                              func: n,
                              args: arguments,
                              thisArg: r,
                            }),
                            (e.__chain__ = t),
                            e)
                          : n.apply(r, ti([this.value()], arguments));
                      });
                }),
                r
              );
            }
            function ml() {}
            var gl = _n(ei),
              vl = _n(_o),
              yl = _n(Oo);
            function bl(e) {
              return Zn(e)
                ? Po(pr(e))
                : ((t = e),
                  function (e) {
                    return dt(e, t);
                  });
              var t;
            }
            var xl = Nn(),
              El = Nn(!0);
            function wl() {
              return [];
            }
            function _l() {
              return !1;
            }
            var kl,
              Nl = wn(function (e, t) {
                return e + t;
              }, 0),
              Cl = On('ceil'),
              Sl = wn(function (e, t) {
                return e / t;
              }, 1),
              Ol = On('floor'),
              jl = wn(function (e, t) {
                return e * t;
              }, 1),
              Il = On('round'),
              zl = wn(function (e, t) {
                return e - t;
              }, 0);
            return (
              (p.after = function (e, t) {
                if ('function' != typeof t) throw new z(Al);
                return (
                  (e = R(e)),
                  function () {
                    if (--e < 1) return t.apply(this, arguments);
                  }
                );
              }),
              (p.ary = Gr),
              (p.assign = ja),
              (p.assignIn = Ia),
              (p.assignInWith = za),
              (p.assignWith = Ma),
              (p.at = Aa),
              (p.before = Zr),
              (p.bind = Xr),
              (p.bindAll = ol),
              (p.bindKey = Qr),
              (p.castArray = function () {
                if (!arguments.length) return [];
                var e = arguments[0];
                return L(e) ? e : [e];
              }),
              (p.chain = Lr),
              (p.chunk = function (e, t, n) {
                t = (n ? f(e, t, n) : t === Ml) ? 1 : M(R(t), 0);
                var r = null == e ? 0 : e.length;
                if (!r || t < 1) return [];
                for (var a = 0, l = 0, i = I(he(r / t)); a < r; ) i[l++] = o(e, a, (a += t));
                return i;
              }),
              (p.compact = function (e) {
                for (var t = -1, n = null == e ? 0 : e.length, r = 0, a = []; ++t < n; ) {
                  var l = e[t];
                  l && (a[r++] = l);
                }
                return a;
              }),
              (p.concat = function () {
                var e = arguments.length;
                if (!e) return [];
                for (var t = I(e - 1), n = arguments[0], r = e; r--; ) t[r - 1] = arguments[r];
                return ti(L(n) ? w(n) : [n], c(t, 1));
              }),
              (p.cond = function (r) {
                var a = null == r ? 0 : r.length,
                  t = s();
                return (
                  (r = a
                    ? ei(r, function (e) {
                        if ('function' != typeof e[1]) throw new z(Al);
                        return [t(e[0]), e[1]];
                      })
                    : []),
                  i(function (e) {
                    for (var t = -1; ++t < a; ) {
                      var n = r[t];
                      if (Zl(n[0], this, e)) return Zl(n[1], this, e);
                    }
                  })
                );
              }),
              (p.conforms = function (e) {
                return (
                  (t = y(e, 1)),
                  (n = k(t)),
                  function (e) {
                    return Qe(e, t, n);
                  }
                );
                var t, n;
              }),
              (p.constant = cl),
              (p.countBy = Br),
              (p.create = function (e, t) {
                e = Re(e);
                return null == t ? e : Ke(e, t);
              }),
              (p.curry = function e(t, n, r) {
                t = zn(t, 8, Ml, Ml, Ml, Ml, Ml, (n = r ? Ml : n));
                return (t.placeholder = e.placeholder), t;
              }),
              (p.curryRight = function e(t, n, r) {
                t = zn(t, 16, Ml, Ml, Ml, Ml, Ml, (n = r ? Ml : n));
                return (t.placeholder = e.placeholder), t;
              }),
              (p.debounce = ea),
              (p.defaults = Pa),
              (p.defaultsDeep = La),
              (p.defer = fe),
              (p.delay = ta),
              (p.difference = D),
              (p.differenceBy = ke),
              (p.differenceWith = e),
              (p.drop = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r ? o(e, (t = n || t === Ml ? 1 : R(t)) < 0 ? 0 : t, r) : [];
              }),
              (p.dropRight = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r ? o(e, 0, (t = r - (n || t === Ml ? 1 : R(t))) < 0 ? 0 : t) : [];
              }),
              (p.dropRightWhile = function (e, t) {
                return e && e.length ? Ut(e, s(t, 3), !0, !0) : [];
              }),
              (p.dropWhile = function (e, t) {
                return e && e.length ? Ut(e, s(t, 3), !0) : [];
              }),
              (p.fill = function (e, t, n, r) {
                var a = null == e ? 0 : e.length;
                if (a) {
                  n && 'number' != typeof n && f(e, t, n) && ((n = 0), (r = a));
                  var l = e,
                    i = t,
                    o = n,
                    c = r,
                    a = l.length;
                  for (
                    (o = R(o)) < 0 && (o = a < -o ? 0 : a + o),
                      (c = c === Ml || a < c ? a : R(c)) < 0 && (c += a),
                      c = c < o ? 0 : Sa(c);
                    o < c;

                  )
                    l[o++] = i;
                  return l;
                }
                return [];
              }),
              (p.filter = function (e, t) {
                return (L(e) ? Ql : it)(e, s(t, 3));
              }),
              (p.flatMap = function (e, t) {
                return c(Jr(e, t), 1);
              }),
              (p.flatMapDeep = function (e, t) {
                return c(Jr(e, t), 1 / 0);
              }),
              (p.flatMapDepth = function (e, t, n) {
                return (n = n === Ml ? 1 : R(n)), c(Jr(e, t), n);
              }),
              (p.flatten = br),
              (p.flattenDeep = function (e) {
                return null != e && e.length ? c(e, 1 / 0) : [];
              }),
              (p.flattenDepth = function (e, t) {
                return null != e && e.length ? c(e, (t = t === Ml ? 1 : R(t))) : [];
              }),
              (p.flip = function (e) {
                return zn(e, 512);
              }),
              (p.flow = ul),
              (p.flowRight = sl),
              (p.fromPairs = function (e) {
                for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
                  var a = e[t];
                  r[a[0]] = a[1];
                }
                return r;
              }),
              (p.functions = function (e) {
                return null == e ? [] : ft(e, k(e));
              }),
              (p.functionsIn = function (e) {
                return null == e ? [] : ft(e, N(e));
              }),
              (p.groupBy = Yr),
              (p.initial = function (e) {
                return null != e && e.length ? o(e, 0, -1) : [];
              }),
              (p.intersection = J),
              (p.intersectionBy = de),
              (p.intersectionWith = t),
              (p.invert = Ba),
              (p.invertBy = Fa),
              (p.invokeMap = Hr),
              (p.iteratee = fl),
              (p.keyBy = Wr),
              (p.keys = k),
              (p.keysIn = N),
              (p.map = Jr),
              (p.mapKeys = function (e, r) {
                var a = {};
                return (
                  (r = s(r, 3)),
                  ut(e, function (e, t, n) {
                    Ge(a, r(e, t, n), e);
                  }),
                  a
                );
              }),
              (p.mapValues = function (e, r) {
                var a = {};
                return (
                  (r = s(r, 3)),
                  ut(e, function (e, t, n) {
                    Ge(a, t, r(e, t, n));
                  }),
                  a
                );
              }),
              (p.matches = function (e) {
                return St(y(e, 1));
              }),
              (p.matchesProperty = function (e, t) {
                return Ot(e, y(t, 1));
              }),
              (p.memoize = na),
              (p.merge = $a),
              (p.mergeWith = qa),
              (p.method = dl),
              (p.methodOf = hl),
              (p.mixin = pl),
              (p.negate = ra),
              (p.nthArg = function (t) {
                return (
                  (t = R(t)),
                  i(function (e) {
                    return It(e, t);
                  })
                );
              }),
              (p.omit = Ya),
              (p.omitBy = function (e, t) {
                return Wa(e, ra(s(t)));
              }),
              (p.once = function (e) {
                return Zr(2, e);
              }),
              (p.orderBy = function (e, t, n, r) {
                return null == e
                  ? []
                  : zt(
                      e,
                      (t = L(t) ? t : null == t ? [] : [t]),
                      (n = L((n = r ? Ml : n)) ? n : null == n ? [] : [n]),
                    );
              }),
              (p.over = gl),
              (p.overArgs = en),
              (p.overEvery = vl),
              (p.overSome = yl),
              (p.partial = aa),
              (p.partialRight = la),
              (p.partition = Ur),
              (p.pick = Ha),
              (p.pickBy = Wa),
              (p.property = bl),
              (p.propertyOf = function (t) {
                return function (e) {
                  return null == t ? Ml : dt(t, e);
                };
              }),
              (p.pull = se),
              (p.pullAll = Er),
              (p.pullAllBy = function (e, t, n) {
                return e && e.length && t && t.length ? At(e, t, s(n, 2)) : e;
              }),
              (p.pullAllWith = function (e, t, n) {
                return e && e.length && t && t.length ? At(e, t, Ml, n) : e;
              }),
              (p.pullAt = wr),
              (p.range = xl),
              (p.rangeRight = El),
              (p.rearg = ia),
              (p.reject = function (e, t) {
                return (L(e) ? Ql : it)(e, ra(s(t, 3)));
              }),
              (p.remove = function (e, t) {
                var n = [];
                if (!e || !e.length) return n;
                var r = -1,
                  a = [],
                  l = e.length;
                for (t = s(t, 3); ++r < l; ) {
                  var i = e[r];
                  t(i, r, e) && (n.push(i), a.push(r));
                }
                return Pt(e, a), n;
              }),
              (p.rest = function (e, t) {
                if ('function' != typeof e) throw new z(Al);
                return i(e, (t = t === Ml ? t : R(t)));
              }),
              (p.reverse = _r),
              (p.sampleSize = function (e, t, n) {
                return (
                  (t = (n ? f(e, t, n) : t === Ml) ? 1 : R(t)),
                  (L(e)
                    ? function (e, t) {
                        return fr(w(e), Xe(t, 0, e.length));
                      }
                    : function (e, t) {
                        return fr((e = Va(e)), Xe(t, 0, e.length));
                      })(e, t)
                );
              }),
              (p.set = function (e, t, n) {
                return null == e ? e : Dt(e, t, n);
              }),
              (p.setWith = function (e, t, n, r) {
                return (r = 'function' == typeof r ? r : Ml), null == e ? e : Dt(e, t, n, r);
              }),
              (p.shuffle = function (e) {
                return (
                  L(e)
                    ? function (e) {
                        return fr(w(e));
                      }
                    : function (e) {
                        return fr(Va(e));
                      }
                )(e);
              }),
              (p.slice = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r
                  ? ((n =
                      n && 'number' != typeof n && f(e, t, n)
                        ? ((t = 0), r)
                        : ((t = null == t ? 0 : R(t)), n === Ml ? r : R(n))),
                    o(e, t, n))
                  : [];
              }),
              (p.sortBy = Vr),
              (p.sortedUniq = function (e) {
                return e && e.length ? qt(e) : [];
              }),
              (p.sortedUniqBy = function (e, t) {
                return e && e.length ? qt(e, s(t, 2)) : [];
              }),
              (p.split = function (e, t, n) {
                return (
                  n && 'number' != typeof n && f(e, t, n) && (t = n = Ml),
                  (n = n === Ml ? Ll : n >>> 0)
                    ? (e = h(e)) &&
                      ('string' == typeof t || (null != t && !ba(t))) &&
                      !(t = u(t)) &&
                      ai(e)
                      ? tn(oi(e), 0, n)
                      : e.split(t, n)
                    : []
                );
              }),
              (p.spread = function (n, r) {
                if ('function' != typeof n) throw new z(Al);
                return (
                  (r = null == r ? 0 : M(R(r), 0)),
                  i(function (e) {
                    var t = e[r],
                      e = tn(e, 0, r);
                    return t && ti(e, t), Zl(n, this, e);
                  })
                );
              }),
              (p.tail = function (e) {
                var t = null == e ? 0 : e.length;
                return t ? o(e, 1, t) : [];
              }),
              (p.take = function (e, t, n) {
                return e && e.length ? o(e, 0, (t = n || t === Ml ? 1 : R(t)) < 0 ? 0 : t) : [];
              }),
              (p.takeRight = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                return r ? o(e, (t = r - (n || t === Ml ? 1 : R(t))) < 0 ? 0 : t, r) : [];
              }),
              (p.takeRightWhile = function (e, t) {
                return e && e.length ? Ut(e, s(t, 3), !1, !0) : [];
              }),
              (p.takeWhile = function (e, t) {
                return e && e.length ? Ut(e, s(t, 3)) : [];
              }),
              (p.tap = function (e, t) {
                return t(e), e;
              }),
              (p.throttle = function (e, t, n) {
                var r = !0,
                  a = !0;
                if ('function' != typeof e) throw new z(Al);
                return (
                  E(n) &&
                    ((r = 'leading' in n ? !!n.leading : r),
                    (a = 'trailing' in n ? !!n.trailing : a)),
                  ea(e, t, { leading: r, maxWait: t, trailing: a })
                );
              }),
              (p.thru = Rr),
              (p.toArray = Na),
              (p.toPairs = Ja),
              (p.toPairsIn = Ua),
              (p.toPath = function (e) {
                return L(e) ? ei(e, pr) : b(e) ? [e] : w(hr(h(e)));
              }),
              (p.toPlainObject = Oa),
              (p.transform = function (e, r, a) {
                var t,
                  n = L(e),
                  l = n || fa(e) || wa(e);
                return (
                  (r = s(r, 4)),
                  null == a &&
                    ((t = e && e.constructor),
                    (a = l ? (n ? new t() : []) : E(e) && ha(t) ? Re(ne(e)) : {})),
                  (l ? Xl : ut)(e, function (e, t, n) {
                    return r(a, e, t, n);
                  }),
                  a
                );
              }),
              (p.unary = function (e) {
                return Gr(e, 1);
              }),
              (p.union = kr),
              (p.unionBy = Nr),
              (p.unionWith = Cr),
              (p.uniq = function (e) {
                return e && e.length ? Ht(e) : [];
              }),
              (p.uniqBy = function (e, t) {
                return e && e.length ? Ht(e, s(t, 2)) : [];
              }),
              (p.uniqWith = function (e, t) {
                return (t = 'function' == typeof t ? t : Ml), e && e.length ? Ht(e, Ml, t) : [];
              }),
              (p.unset = function (e, t) {
                return null == e || Wt(e, t);
              }),
              (p.unzip = Sr),
              (p.unzipWith = Or),
              (p.update = function (e, t, n) {
                return null == e ? e : Jt(e, t, Xt(n));
              }),
              (p.updateWith = function (e, t, n, r) {
                return (r = 'function' == typeof r ? r : Ml), null == e ? e : Jt(e, t, Xt(n), r);
              }),
              (p.values = Va),
              (p.valuesIn = function (e) {
                return null == e ? [] : Bo(e, N(e));
              }),
              (p.without = jr),
              (p.words = ll),
              (p.wrap = function (e, t) {
                return aa(Xt(t), e);
              }),
              (p.xor = Ir),
              (p.xorBy = zr),
              (p.xorWith = Mr),
              (p.zip = Ar),
              (p.zipObject = function (e, t) {
                return Gt(e || [], t || [], Je);
              }),
              (p.zipObjectDeep = function (e, t) {
                return Gt(e || [], t || [], Dt);
              }),
              (p.zipWith = Pr),
              (p.entries = Ja),
              (p.entriesIn = Ua),
              (p.extend = Ia),
              (p.extendWith = za),
              pl(p, p),
              (p.add = Nl),
              (p.attempt = il),
              (p.camelCase = Ka),
              (p.capitalize = Ga),
              (p.ceil = Cl),
              (p.clamp = function (e, t, n) {
                return (
                  n === Ml && ((n = t), (t = Ml)),
                  n !== Ml && (n = (n = _(n)) == n ? n : 0),
                  t !== Ml && (t = (t = _(t)) == t ? t : 0),
                  Xe(_(e), t, n)
                );
              }),
              (p.clone = function (e) {
                return y(e, 4);
              }),
              (p.cloneDeep = function (e) {
                return y(e, 5);
              }),
              (p.cloneDeepWith = function (e, t) {
                return y(e, 5, (t = 'function' == typeof t ? t : Ml));
              }),
              (p.cloneWith = function (e, t) {
                return y(e, 4, (t = 'function' == typeof t ? t : Ml));
              }),
              (p.conformsTo = function (e, t) {
                return null == t || Qe(e, t, k(t));
              }),
              (p.deburr = Za),
              (p.defaultTo = function (e, t) {
                return null == e || e != e ? t : e;
              }),
              (p.divide = Sl),
              (p.endsWith = function (e, t, n) {
                (e = h(e)), (t = u(t));
                var r = e.length,
                  r = (n = n === Ml ? r : Xe(R(n), 0, r));
                return 0 <= (n -= t.length) && e.slice(n, r) == t;
              }),
              (p.eq = P),
              (p.escape = function (e) {
                return (e = h(e)) && Ai.test(e) ? e.replace(zi, Yo) : e;
              }),
              (p.escapeRegExp = function (e) {
                return (e = h(e)) && $i.test(e) ? e.replace(Ti, '\\$&') : e;
              }),
              (p.every = function (e, t, n) {
                return (L(e) ? _o : at)(e, s((t = n && f(e, t, n) ? Ml : t), 3));
              }),
              (p.find = Fr),
              (p.findIndex = vr),
              (p.findKey = function (e, t) {
                return jo(e, s(t, 3), ut);
              }),
              (p.findLast = Tr),
              (p.findLastIndex = yr),
              (p.findLastKey = function (e, t) {
                return jo(e, s(t, 3), st);
              }),
              (p.floor = Ol),
              (p.forEach = $r),
              (p.forEachRight = qr),
              (p.forIn = function (e, t) {
                return null == e ? e : ot(e, s(t, 3), N);
              }),
              (p.forInRight = function (e, t) {
                return null == e ? e : ct(e, s(t, 3), N);
              }),
              (p.forOwn = function (e, t) {
                return e && ut(e, s(t, 3));
              }),
              (p.forOwnRight = function (e, t) {
                return e && st(e, s(t, 3));
              }),
              (p.get = Ra),
              (p.gt = oa),
              (p.gte = ca),
              (p.has = function (e, t) {
                return null != e && Un(e, t, mt);
              }),
              (p.hasIn = Da),
              (p.head = xr),
              (p.identity = C),
              (p.includes = function (e, t, n, r) {
                (e = d(e) ? e : Va(e)), (n = n && !r ? R(n) : 0);
                r = e.length;
                return (
                  n < 0 && (n = M(r + n, 0)),
                  Ea(e) ? n <= r && -1 < e.indexOf(t, n) : !!r && -1 < ni(e, t, n)
                );
              }),
              (p.indexOf = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                n = null == n ? 0 : R(n);
                return ni(e, t, (n = n < 0 ? M(r + n, 0) : n));
              }),
              (p.inRange = function (e, t, n) {
                return (
                  (t = Ca(t)),
                  n === Ml ? ((n = t), (t = 0)) : (n = Ca(n)),
                  (e = e = _(e)) >= A((t = t), (n = n)) && e < M(t, n)
                );
              }),
              (p.invoke = Ta),
              (p.isArguments = ua),
              (p.isArray = L),
              (p.isArrayBuffer = sa),
              (p.isArrayLike = d),
              (p.isArrayLikeObject = x),
              (p.isBoolean = function (e) {
                return !0 === e || !1 === e || (l(e) && n(e) == Dl);
              }),
              (p.isBuffer = fa),
              (p.isDate = H),
              (p.isElement = function (e) {
                return l(e) && 1 === e.nodeType && !ya(e);
              }),
              (p.isEmpty = function (e) {
                if (null != e) {
                  if (
                    d(e) &&
                    (L(e) ||
                      'string' == typeof e ||
                      'function' == typeof e.splice ||
                      fa(e) ||
                      wa(e) ||
                      ua(e))
                  )
                    return !e.length;
                  var t,
                    n = j(e);
                  if (n == Fl || n == Yl) return !e.size;
                  if (er(e)) return !kt(e).length;
                  for (t in e) if (S.call(e, t)) return !1;
                }
                return !0;
              }),
              (p.isEqual = function (e, t) {
                return xt(e, t);
              }),
              (p.isEqualWith = function (e, t, n) {
                var r = (n = 'function' == typeof n ? n : Ml) ? n(e, t) : Ml;
                return r === Ml ? xt(e, t, Ml, n) : !!r;
              }),
              (p.isError = da),
              (p.isFinite = function (e) {
                return 'number' == typeof e && ge(e);
              }),
              (p.isFunction = ha),
              (p.isInteger = pa),
              (p.isLength = ma),
              (p.isMap = ga),
              (p.isMatch = function (e, t) {
                return e === t || Et(e, t, Yn(t));
              }),
              (p.isMatchWith = function (e, t, n) {
                return (n = 'function' == typeof n ? n : Ml), Et(e, t, Yn(t), n);
              }),
              (p.isNaN = function (e) {
                return va(e) && e != +e;
              }),
              (p.isNative = function (e) {
                if (Qn(e))
                  throw new B('Unsupported core-js use. Try https://npms.io/search?q=ponyfill.');
                return wt(e);
              }),
              (p.isNil = function (e) {
                return null == e;
              }),
              (p.isNull = function (e) {
                return null === e;
              }),
              (p.isNumber = va),
              (p.isObject = E),
              (p.isObjectLike = l),
              (p.isPlainObject = ya),
              (p.isRegExp = ba),
              (p.isSafeInteger = function (e) {
                return pa(e) && -9007199254740991 <= e && e <= Pl;
              }),
              (p.isSet = xa),
              (p.isString = Ea),
              (p.isSymbol = b),
              (p.isTypedArray = wa),
              (p.isUndefined = function (e) {
                return e === Ml;
              }),
              (p.isWeakMap = function (e) {
                return l(e) && j(e) == Wl;
              }),
              (p.isWeakSet = function (e) {
                return l(e) && '[object WeakSet]' == n(e);
              }),
              (p.join = function (e, t) {
                return null == e ? '' : ve.call(e, t);
              }),
              (p.kebabCase = Xa),
              (p.last = r),
              (p.lastIndexOf = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var a = r;
                if ((n !== Ml && (a = (a = R(n)) < 0 ? M(r + a, 0) : A(a, r - 1)), t != t))
                  return Io(e, Mo, a, !0);
                for (var l = e, i = t, o = a + 1; o--; ) if (l[o] === i) return o;
                return o;
              }),
              (p.lowerCase = Qa),
              (p.lowerFirst = el),
              (p.lt = _a),
              (p.lte = ka),
              (p.max = function (e) {
                return e && e.length ? lt(e, C, pt) : Ml;
              }),
              (p.maxBy = function (e, t) {
                return e && e.length ? lt(e, s(t, 2), pt) : Ml;
              }),
              (p.mean = function (e) {
                return Ao(e, C);
              }),
              (p.meanBy = function (e, t) {
                return Ao(e, s(t, 2));
              }),
              (p.min = function (e) {
                return e && e.length ? lt(e, C, Nt) : Ml;
              }),
              (p.minBy = function (e, t) {
                return e && e.length ? lt(e, s(t, 2), Nt) : Ml;
              }),
              (p.stubArray = wl),
              (p.stubFalse = _l),
              (p.stubObject = function () {
                return {};
              }),
              (p.stubString = function () {
                return '';
              }),
              (p.stubTrue = function () {
                return !0;
              }),
              (p.multiply = jl),
              (p.nth = function (e, t) {
                return e && e.length ? It(e, R(t)) : Ml;
              }),
              (p.noConflict = function () {
                return Gl._ === this && (Gl._ = X), this;
              }),
              (p.noop = ml),
              (p.now = Kr),
              (p.pad = function (e, t, n) {
                e = h(e);
                var r = (t = R(t)) ? ii(e) : 0;
                if (!t || t <= r) return e;
                t = (t - r) / 2;
                return kn(pe(t), n) + e + kn(he(t), n);
              }),
              (p.padEnd = function (e, t, n) {
                e = h(e);
                var r = (t = R(t)) ? ii(e) : 0;
                return t && r < t ? e + kn(t - r, n) : e;
              }),
              (p.padStart = function (e, t, n) {
                e = h(e);
                var r = (t = R(t)) ? ii(e) : 0;
                return t && r < t ? kn(t - r, n) + e : e;
              }),
              (p.parseInt = function (e, t, n) {
                return (t = n || null == t ? 0 : t && +t), xe(h(e).replace(Yi, ''), t || 0);
              }),
              (p.random = function (e, t, n) {
                var r;
                return (
                  n && 'boolean' != typeof n && f(e, t, n) && (t = n = Ml),
                  n === Ml &&
                    ('boolean' == typeof t
                      ? ((n = t), (t = Ml))
                      : 'boolean' == typeof e && ((n = e), (e = Ml))),
                  e === Ml && t === Ml
                    ? ((e = 0), (t = 1))
                    : ((e = Ca(e)), t === Ml ? ((t = e), (e = 0)) : (t = Ca(t))),
                  t < e && ((r = e), (e = t), (t = r)),
                  n || e % 1 || t % 1
                    ? ((r = Ee()), A(e + r * (t - e + ho('1e-' + ((r + '').length - 1))), t))
                    : Lt(e, t)
                );
              }),
              (p.reduce = function (e, t, n) {
                var r = L(e) ? Co : Lo,
                  a = arguments.length < 3;
                return r(e, s(t, 4), n, a, nt);
              }),
              (p.reduceRight = function (e, t, n) {
                var r = L(e) ? So : Lo,
                  a = arguments.length < 3;
                return r(e, s(t, 4), n, a, rt);
              }),
              (p.repeat = function (e, t, n) {
                return (t = (n ? f(e, t, n) : t === Ml) ? 1 : R(t)), Rt(h(e), t);
              }),
              (p.replace = function () {
                var e = arguments,
                  t = h(e[0]);
                return e.length < 3 ? t : t.replace(e[1], e[2]);
              }),
              (p.result = function (e, t, n) {
                var r = -1,
                  a = (t = Qt(t, e)).length;
                for (a || ((a = 1), (e = Ml)); ++r < a; ) {
                  var l = null == e ? Ml : e[pr(t[r])];
                  l === Ml && ((r = a), (l = n)), (e = ha(l) ? l.call(e) : l);
                }
                return e;
              }),
              (p.round = Il),
              (p.runInContext = a),
              (p.sample = function (e) {
                return (
                  L(e)
                    ? He
                    : function (e) {
                        return He(Va(e));
                      }
                )(e);
              }),
              (p.size = function (e) {
                if (null == e) return 0;
                if (d(e)) return Ea(e) ? ii(e) : e.length;
                var t = j(e);
                return t == Fl || t == Yl ? e.size : kt(e).length;
              }),
              (p.snakeCase = tl),
              (p.some = function (e, t, n) {
                return (L(e) ? Oo : Ft)(e, s((t = n && f(e, t, n) ? Ml : t), 3));
              }),
              (p.sortedIndex = function (e, t) {
                return Tt(e, t);
              }),
              (p.sortedIndexBy = function (e, t, n) {
                return $t(e, t, s(n, 2));
              }),
              (p.sortedIndexOf = function (e, t) {
                var n = null == e ? 0 : e.length;
                if (n) {
                  var r = Tt(e, t);
                  if (r < n && P(e[r], t)) return r;
                }
                return -1;
              }),
              (p.sortedLastIndex = function (e, t) {
                return Tt(e, t, !0);
              }),
              (p.sortedLastIndexBy = function (e, t, n) {
                return $t(e, t, s(n, 2), !0);
              }),
              (p.sortedLastIndexOf = function (e, t) {
                if (null != e && e.length) {
                  var n = Tt(e, t, !0) - 1;
                  if (P(e[n], t)) return n;
                }
                return -1;
              }),
              (p.startCase = nl),
              (p.startsWith = function (e, t, n) {
                return (
                  (e = h(e)),
                  (n = null == n ? 0 : Xe(R(n), 0, e.length)),
                  (t = u(t)),
                  e.slice(n, n + t.length) == t
                );
              }),
              (p.subtract = zl),
              (p.sum = function (e) {
                return e && e.length ? Ro(e, C) : 0;
              }),
              (p.sumBy = function (e, t) {
                return e && e.length ? Ro(e, s(t, 2)) : 0;
              }),
              (p.template = function (i, e, t) {
                var n = p.templateSettings;
                t && f(i, e, t) && (e = Ml), (i = h(i)), (e = za({}, e, n, Mn));
                var o,
                  c,
                  t = za({}, e.imports, n.imports, Mn),
                  r = k(t),
                  a = Bo(t, r),
                  u = 0,
                  n = e.interpolate || ao,
                  s = "__p += '",
                  t = $(
                    (e.escape || ao).source +
                      '|' +
                      n.source +
                      '|' +
                      (n === Ri ? Gi : ao).source +
                      '|' +
                      (e.evaluate || ao).source +
                      '|$',
                    'g',
                  ),
                  l =
                    '//# sourceURL=' +
                    ('sourceURL' in e ? e.sourceURL : 'lodash.templateSources[' + ++fo + ']') +
                    '\n',
                  n =
                    (i.replace(t, function (e, t, n, r, a, l) {
                      return (
                        (n = n || r),
                        (s += i.slice(u, l).replace(lo, Ho)),
                        t && ((o = !0), (s += "' +\n__e(" + t + ") +\n'")),
                        a && ((c = !0), (s += "';\n" + a + ";\n__p += '")),
                        n && (s += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                        (u = l + e.length),
                        e
                      );
                    }),
                    (s += "';\n"),
                    e.variable),
                  t =
                    (n || (s = 'with (obj) {\n' + s + '\n}\n'),
                    (s = (c ? s.replace(Si, '') : s).replace(Oi, '$1').replace(ji, '$1;')),
                    (s =
                      'function(' +
                      (n || 'obj') +
                      ') {\n' +
                      (n ? '' : 'obj || (obj = {});\n') +
                      "var __t, __p = ''" +
                      (o ? ', __e = _.escape' : '') +
                      (c
                        ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                        : ';\n') +
                      s +
                      'return __p\n}'),
                    il(function () {
                      return F(r, l + 'return ' + s).apply(Ml, a);
                    }));
                if (((t.source = s), da(t))) throw t;
                return t;
              }),
              (p.times = function (e, t) {
                if ((e = R(e)) < 1 || Pl < e) return [];
                var n = Ll,
                  r = A(e, Ll);
                (t = s(t)), (e -= Ll);
                for (r = Do(r, t); ++n < e; ) t(n);
                return r;
              }),
              (p.toFinite = Ca),
              (p.toInteger = R),
              (p.toLength = Sa),
              (p.toLower = function (e) {
                return h(e).toLowerCase();
              }),
              (p.toNumber = _),
              (p.toSafeInteger = function (e) {
                return e ? Xe(R(e), -9007199254740991, Pl) : 0 === e ? e : 0;
              }),
              (p.toString = h),
              (p.toUpper = function (e) {
                return h(e).toUpperCase();
              }),
              (p.trim = function (e, t, n) {
                if ((e = h(e)) && (n || t === Ml)) return e.replace(qi, '');
                if (!e || !(t = u(t))) return e;
                (n = oi(e)), (e = oi(t));
                return tn(n, To(n, e), $o(n, e) + 1).join('');
              }),
              (p.trimEnd = function (e, t, n) {
                if ((e = h(e)) && (n || t === Ml)) return e.replace(Hi, '');
                if (!e || !(t = u(t))) return e;
                n = oi(e);
                return tn(n, 0, $o(n, oi(t)) + 1).join('');
              }),
              (p.trimStart = function (e, t, n) {
                if ((e = h(e)) && (n || t === Ml)) return e.replace(Yi, '');
                if (!e || !(t = u(t))) return e;
                n = oi(e);
                return tn(n, To(n, oi(t))).join('');
              }),
              (p.truncate = function (e, t) {
                var n,
                  r = 30,
                  a = '...',
                  t =
                    (E(t) &&
                      ((n = 'separator' in t ? t.separator : n),
                      (r = 'length' in t ? R(t.length) : r),
                      (a = 'omission' in t ? u(t.omission) : a)),
                    (e = h(e)).length);
                if ((t = ai(e) ? (l = oi(e)).length : t) <= r) return e;
                t = r - ii(a);
                if (t < 1) return a;
                var l,
                  r = l ? tn(l, 0, t).join('') : e.slice(0, t);
                if (n !== Ml)
                  if ((l && (t += r.length - t), ba(n))) {
                    if (e.slice(t).search(n)) {
                      var i,
                        o = r;
                      for (
                        (n = n.global ? n : $(n.source, h(Zi.exec(n)) + 'g')).lastIndex = 0;
                        (i = n.exec(o));

                      )
                        var c = i.index;
                      r = r.slice(0, c === Ml ? t : c);
                    }
                  } else
                    e.indexOf(u(n), t) == t || (-1 < (l = r.lastIndexOf(n)) && (r = r.slice(0, l)));
                return r + a;
              }),
              (p.unescape = function (e) {
                return (e = h(e)) && Mi.test(e) ? e.replace(Ii, Vo) : e;
              }),
              (p.uniqueId = function (e) {
                var t = ++V;
                return h(e) + t;
              }),
              (p.upperCase = rl),
              (p.upperFirst = al),
              (p.each = $r),
              (p.eachRight = qr),
              (p.first = xr),
              pl(
                p,
                ((kl = {}),
                ut(p, function (e, t) {
                  S.call(p.prototype, t) || (kl[t] = e);
                }),
                kl),
                { chain: !1 },
              ),
              (p.VERSION = '4.17.11'),
              Xl(
                ['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'],
                function (e) {
                  p[e].placeholder = p;
                },
              ),
              Xl(['drop', 'take'], function (n, r) {
                (g.prototype[n] = function (e) {
                  e = e === Ml ? 1 : M(R(e), 0);
                  var t = this.__filtered__ && !r ? new g(this) : this.clone();
                  return (
                    t.__filtered__
                      ? (t.__takeCount__ = A(e, t.__takeCount__))
                      : t.__views__.push({
                          size: A(e, Ll),
                          type: n + (t.__dir__ < 0 ? 'Right' : ''),
                        }),
                    t
                  );
                }),
                  (g.prototype[n + 'Right'] = function (e) {
                    return this.reverse()[n](e).reverse();
                  });
              }),
              Xl(['filter', 'map', 'takeWhile'], function (e, t) {
                var n = t + 1,
                  r = 1 == n || 3 == n;
                g.prototype[e] = function (e) {
                  var t = this.clone();
                  return (
                    t.__iteratees__.push({ iteratee: s(e, 3), type: n }),
                    (t.__filtered__ = t.__filtered__ || r),
                    t
                  );
                };
              }),
              Xl(['head', 'last'], function (e, t) {
                var n = 'take' + (t ? 'Right' : '');
                g.prototype[e] = function () {
                  return this[n](1).value()[0];
                };
              }),
              Xl(['initial', 'tail'], function (e, t) {
                var n = 'drop' + (t ? '' : 'Right');
                g.prototype[e] = function () {
                  return this.__filtered__ ? new g(this) : this[n](1);
                };
              }),
              (g.prototype.compact = function () {
                return this.filter(C);
              }),
              (g.prototype.find = function (e) {
                return this.filter(e).head();
              }),
              (g.prototype.findLast = function (e) {
                return this.reverse().find(e);
              }),
              (g.prototype.invokeMap = i(function (t, n) {
                return 'function' == typeof t
                  ? new g(this)
                  : this.map(function (e) {
                      return yt(e, t, n);
                    });
              })),
              (g.prototype.reject = function (e) {
                return this.filter(ra(s(e)));
              }),
              (g.prototype.slice = function (e, t) {
                e = R(e);
                var n = this;
                return n.__filtered__ && (0 < e || t < 0)
                  ? new g(n)
                  : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                    (n = t !== Ml ? ((t = R(t)) < 0 ? n.dropRight(-t) : n.take(t - e)) : n));
              }),
              (g.prototype.takeRightWhile = function (e) {
                return this.reverse().takeWhile(e).reverse();
              }),
              (g.prototype.toArray = function () {
                return this.take(Ll);
              }),
              ut(g.prototype, function (u, e) {
                var s = /^(?:filter|find|map|reject)|While$/.test(e),
                  f = /^(?:head|last)$/.test(e),
                  d = p[f ? 'take' + ('last' == e ? 'Right' : '') : e],
                  h = f || /^find/.test(e);
                d &&
                  (p.prototype[e] = function () {
                    function e(e) {
                      return (e = d.apply(p, ti([e], r))), f && o ? e[0] : e;
                    }
                    var t,
                      n = this.__wrapped__,
                      r = f ? [1] : arguments,
                      a = n instanceof g,
                      l = r[0],
                      i = a || L(n),
                      o =
                        (i && s && 'function' == typeof l && 1 != l.length && (a = i = !1),
                        this.__chain__),
                      l = !!this.__actions__.length,
                      c = h && !o,
                      a = a && !l;
                    return !h && i
                      ? ((n = a ? n : new g(this)),
                        (t = u.apply(n, r)).__actions__.push({ func: Rr, args: [e], thisArg: Ml }),
                        new m(t, o))
                      : c && a
                      ? u.apply(this, r)
                      : ((t = this.thru(e)), c ? (f ? t.value()[0] : t.value()) : t);
                  });
              }),
              Xl(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (e) {
                var n = Y[e],
                  r = /^(?:push|sort|unshift)$/.test(e) ? 'tap' : 'thru',
                  a = /^(?:pop|shift)$/.test(e);
                p.prototype[e] = function () {
                  var e,
                    t = arguments;
                  return a && !this.__chain__
                    ? ((e = this.value()), n.apply(L(e) ? e : [], t))
                    : this[r](function (e) {
                        return n.apply(L(e) ? e : [], t);
                      });
                };
              }),
              ut(g.prototype, function (e, t) {
                var n,
                  r = p[t];
                r && ((n = r.name + ''), (Oe[n] || (Oe[n] = [])).push({ name: t, func: r }));
              }),
              (Oe[xn(Ml, 2).name] = [{ name: 'wrapper', func: Ml }]),
              (g.prototype.clone = function () {
                var e = new g(this.__wrapped__);
                return (
                  (e.__actions__ = w(this.__actions__)),
                  (e.__dir__ = this.__dir__),
                  (e.__filtered__ = this.__filtered__),
                  (e.__iteratees__ = w(this.__iteratees__)),
                  (e.__takeCount__ = this.__takeCount__),
                  (e.__views__ = w(this.__views__)),
                  e
                );
              }),
              (g.prototype.reverse = function () {
                var e;
                return (
                  this.__filtered__
                    ? (((e = new g(this)).__dir__ = -1), (e.__filtered__ = !0))
                    : ((e = this.clone()).__dir__ *= -1),
                  e
                );
              }),
              (g.prototype.value = function () {
                var e = this.__wrapped__.value(),
                  t = this.__dir__,
                  n = L(e),
                  r = t < 0,
                  a = n ? e.length : 0,
                  l = (function (e, t, n) {
                    for (var r = -1, a = n.length; ++r < a; ) {
                      var l = n[r],
                        i = l.size;
                      switch (l.type) {
                        case 'drop':
                          e += i;
                          break;
                        case 'dropRight':
                          t -= i;
                          break;
                        case 'take':
                          t = A(t, e + i);
                          break;
                        case 'takeRight':
                          e = M(e, t - i);
                      }
                    }
                    return { start: e, end: t };
                  })(0, a, this.__views__),
                  i = l.start,
                  l = l.end,
                  o = l - i,
                  c = r ? l : i - 1,
                  u = this.__iteratees__,
                  s = u.length,
                  f = 0,
                  d = A(o, this.__takeCount__);
                if (!n || (!r && a == o && d == o)) return Vt(e, this.__actions__);
                var h = [];
                e: for (; o-- && f < d; ) {
                  for (var p = -1, m = e[(c += t)]; ++p < s; ) {
                    var g = u[p],
                      v = g.iteratee,
                      g = g.type,
                      v = v(m);
                    if (2 == g) m = v;
                    else if (!v) {
                      if (1 == g) continue e;
                      break e;
                    }
                  }
                  h[f++] = m;
                }
                return h;
              }),
              (p.prototype.at = Dr),
              (p.prototype.chain = function () {
                return Lr(this);
              }),
              (p.prototype.commit = function () {
                return new m(this.value(), this.__chain__);
              }),
              (p.prototype.next = function () {
                this.__values__ === Ml && (this.__values__ = Na(this.value()));
                var e = this.__index__ >= this.__values__.length;
                return { done: e, value: e ? Ml : this.__values__[this.__index__++] };
              }),
              (p.prototype.plant = function (e) {
                for (var t, n = this; n instanceof Be; )
                  var r = gr(n),
                    a =
                      ((r.__index__ = 0),
                      (r.__values__ = Ml),
                      t ? (a.__wrapped__ = r) : (t = r),
                      r),
                    n = n.__wrapped__;
                return (a.__wrapped__ = e), t;
              }),
              (p.prototype.reverse = function () {
                var e = this.__wrapped__;
                return e instanceof g
                  ? ((e = e),
                    (e = (e = this.__actions__.length
                      ? new g(this)
                      : e).reverse()).__actions__.push({ func: Rr, args: [_r], thisArg: Ml }),
                    new m(e, this.__chain__))
                  : this.thru(_r);
              }),
              (p.prototype.toJSON =
                p.prototype.valueOf =
                p.prototype.value =
                  function () {
                    return Vt(this.__wrapped__, this.__actions__);
                  }),
              (p.prototype.first = p.prototype.head),
              oe &&
                (p.prototype[oe] = function () {
                  return this;
                }),
              p
            );
          })();
        a ? (((a.exports = ci)._ = ci), (r._ = ci)) : (Gl._ = ci);
      }.call(k);
    }),
    ln = U.memo((e) => {
      const {
          num: n = 5,
          starColor: r,
          defaultShow: a = n || 0,
          avaHalf: l,
          avaClear: t,
          chooseCallback: i,
        } = e,
        [o, c] = U.useState([]),
        [u, s] = U.useState([]),
        [f, d] = U.useState(!1),
        h =
          (U.useEffect(() => {
            c((t) => {
              for (let e = 0; e < a; e++) t[e] = !0;
              return (
                n > a && t.length < n && t.splice(t.length, 0, ...new Array(n - a).fill(!1)),
                JSON.parse(JSON.stringify(t))
              );
            });
          }, []),
          U.useCallback(
            (e) =>
              'half' == o[e] && l
                ? e == o.length - 1
                  ? { width: '50%', opacity: 1, right: '5px' }
                  : { width: '50%', opacity: 1 }
                : o[e]
                ? o[e]
                  ? { width: '0%', opacity: 0 }
                  : void 0
                : { width: '100%', opacity: 1 },
            [n, o],
          )),
        p = an.debounce(
          (e, n) => {
            const r = e.offsetX;
            c((t) => {
              8 <= r ? (t[n] = !0) : r < 5 && l && (t[n] = 'half');
              for (let e = 0; e < n; e++) t[e] = !0;
              for (let e = n + 1; e < t.length; e++) t[e] = !1;
              return JSON.parse(JSON.stringify(t));
            });
          },
          [0],
        ),
        m = () => {
          t && f && o.toString() == u.toString()
            ? (d(!1),
              c(
                (e) => (
                  (e = e.map((e) => !1)),
                  i &&
                    i(
                      e.reduce(
                        (e, t) => (
                          'half' == e ? (e = 0.5) : 1 == e ? (e = 1) : 0 == e && (e = 0),
                          'half' == t ? (t = 0.5) : 1 == t ? (t = 1) : 0 == t && (t = 0),
                          e + t
                        ),
                      ),
                    ),
                  s((e) => ((e = e.map((e) => !1)), JSON.parse(JSON.stringify(e)))),
                  JSON.parse(JSON.stringify(e))
                ),
              ))
            : (s((e) => ((e = o), JSON.parse(JSON.stringify(e)))),
              d(!0),
              i &&
                i(
                  o.reduce(
                    (e, t) => (
                      'half' == e ? (e = 0.5) : 1 == e ? (e = 1) : 0 == e && (e = 0),
                      'half' == t ? (t = 0.5) : 1 == t ? (t = 1) : 0 == t && (t = 0),
                      e + t
                    ),
                  ),
                ));
        };
      return V.default.createElement(
        'div',
        { className: 'rate' },
        V.default.createElement(
          'div',
          {
            className: 'rate-container',
            onMouseLeave: () => {
              f || c((e) => ((e = u), JSON.parse(JSON.stringify(e)))), d(!1);
            },
            onMouseEnter: () => {
              s((e) => ((e = o), JSON.parse(JSON.stringify(e))));
            },
          },
          new Array(n)
            .fill('')
            .map((e, t) =>
              V.default.createElement(
                'div',
                {
                  className: 'rate-box',
                  key: t,
                  onMouseMove: (e) => p(e.nativeEvent, t),
                  onClick: m,
                },
                V.default.createElement('div', { className: 'half-dialog', style: h(t) }),
                V.default.createElement(
                  'svg',
                  {
                    style: { color: r },
                    className: 'rate-row',
                    viewBox: '80 80 896 896',
                    focusable: 'false',
                    'data-icon': 'star',
                    width: '20px',
                    height: '20px',
                    fill: 'currentColor',
                    'aria-hidden': 'true',
                  },
                  V.default.createElement('path', {
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z',
                  }),
                ),
              ),
            ),
        ),
      );
    }),
    on = U.memo((e) => {
      const {
          width: t = '200',
          treeData: n,
          avaSearch: r,
          avaChooseMore: i,
          defaultOpen: a,
          chooseCallback: o,
        } = e,
        [c, u] = U.useState(n),
        [s, f] = U.useState(''),
        [l, d] = U.useState('0px'),
        [h, p] = U.useState(!1),
        m =
          (U.useEffect(() => {
            m(n, 1), window.addEventListener('click', () => d('0px'));
          }, []),
          (e, n) => {
            e.forEach((e) => {
              var t;
              (e.level = n),
                (e.height = a || 1 == e.level ? '30px' : '0'),
                null != (t = null == e ? void 0 : e.children) && t.length
                  ? m(e.children, n + 1)
                  : (n = e.level);
            }),
              u(e),
              console.log(e);
          }),
        g = U.useCallback((e) => (e.title.includes(s) && '' !== s ? '#1890FF' : '#000000'), [s]),
        v = U.useCallback(
          (e) =>
            i
              ? s.split(',').includes(e.title)
                ? '#bae8ff'
                : '#ffffff'
              : s == e.title
              ? '#bae8ff'
              : '#ffffff',
          [s],
        ),
        y = (e = c) =>
          e.map((t, e) => {
            return V.default.createElement(
              U.Fragment,
              { key: e },
              V.default.createElement(
                'div',
                {
                  className: 'treeNode',
                  style: {
                    marginLeft: 10 * t.level + 'px',
                    height: '' + t.height,
                    color: g(t),
                    background: v(t),
                  },
                  onClick: () => {
                    var e,
                      r = t;
                    if (null != (e = null == r ? void 0 : r.children) && e.length) {
                      const e = [...c],
                        a = (e) => {
                          e.forEach((e) => {
                            var t;
                            null != (t = null == e ? void 0 : e.children) && t.length
                              ? ((e.height = '0'), a(e.children))
                              : (e.height = '0');
                          });
                        },
                        l = (e) => {
                          e.forEach((e, t) => {
                            var n;
                            e.title == r.title && e.value == e.value
                              ? null != (n = null == e ? void 0 : e.children) &&
                                n.length &&
                                ('0' == e.children[0].height
                                  ? (e.children = e.children.map((e) =>
                                      Object.assign(Object.assign({}, e), {
                                        height: '0' == e.height ? '30px' : '0',
                                      }),
                                    ))
                                  : a(e.children))
                              : null != (n = null == e ? void 0 : e.children) &&
                                n.length &&
                                l(e.children);
                          });
                        };
                      l(e), u(e);
                    } else if (i)
                      if (s.split(',').includes(r.title)) {
                        let e = s;
                        (e = e.split(',')).splice(
                          s.split(',').findIndex((e) => e == r.title),
                          1,
                        ),
                          (e = e.join(',')),
                          f(e),
                          o && o(e);
                      } else
                        f('' == s ? r.title : s + ',' + r.title),
                          o && o('' == s ? r.title : s + ',' + r.title);
                    else f(r.title), o && o(r.title);
                  },
                },
                null != (e = null == t ? void 0 : t.children) && e.length
                  ? '0' == t.children[0].height
                    ? V.default.createElement(K, null)
                    : V.default.createElement(it, null)
                  : V.default.createElement('div', { style: { width: '12px', height: '12px' } }),
                V.default.createElement('span', { className: 'text' }, t.title),
              ),
              (null == (e = null == t ? void 0 : t.children) ? void 0 : e.length) && y(t.children),
            );
          });
      return V.default.createElement(
        U.Fragment,
        null,
        V.default.createElement(
          'div',
          { className: 'tree-container', onClick: (e) => e.stopPropagation() },
          V.default.createElement(G, {
            moreStyle: r ? {} : { caretColor: 'transparent' },
            placeholder: r ? '请输入' : '',
            width: t,
            defaultValue: s,
            handleClick: () => {
              d(r ? (h && '100%' == l ? '0px' : '100%') : '0px' == l ? '100%' : '0px');
            },
            handleIptChange: (e) => {
              f(r ? e : '');
            },
            handleIptFocus: () => {
              setTimeout(() => {
                h || p(!0);
              }, 150);
            },
            handleIptBlur: () => {
              p(!1);
            },
            clearCallback: () => {
              f('');
            },
            showClear: !0,
          }),
          V.default.createElement(
            'div',
            {
              className: 'tree-select-dialog',
              style: {
                width: t + 'px',
                height: l,
                opacity: '0px' == l ? '0' : '1',
                padding: '0px' == l ? '0 10px 0 10px' : '10px',
              },
            },
            y(),
          ),
        ),
      );
    }),
    cn = U.memo((e) => {
      const { treeData: t, defaultOpen: l, avaDrop: u, checkCallback: n, dropCallback: r } = e,
        [s, f] = U.useState(t),
        [a, i] = U.useState(''),
        o =
          (U.useEffect(() => {
            o(s, 1, null);
          }, []),
          (e, r, a) => {
            const t = [...e];
            t.forEach((e, t) => {
              var n;
              (e.level = r),
                (e.height = l || 1 == e.level ? '30px' : '0'),
                (e.checked = !1),
                (e.prev = a),
                null != (n = null == e ? void 0 : e.children) && n.length
                  ? o(e.children, r + 1, e)
                  : (r = e.level);
            }),
              f(t);
          }),
        d = (r) => {
          var e;
          if (null != (e = null == r ? void 0 : r.children) && e.length) {
            const e = [...s],
              a = (e) => {
                e.forEach((e) => {
                  var t;
                  null != (t = null == e ? void 0 : e.children) && t.length
                    ? ((e.height = '0'), a(e.children))
                    : (e.height = '0');
                });
              },
              l = (e) => {
                e.forEach((e, t) => {
                  var n;
                  e.title == r.title && e.value == r.value
                    ? null != (n = null == e ? void 0 : e.children) &&
                      n.length &&
                      ('0' == e.children[0].height
                        ? (e.children = e.children.map((e) =>
                            Object.assign(Object.assign({}, e), {
                              height: '0' == e.height ? '30px' : '0',
                            }),
                          ))
                        : a(e.children))
                    : null != (n = null == e ? void 0 : e.children) && n.length && l(e.children);
                });
              };
            l(e), f(e);
          }
        },
        c = (l) => {
          if (!l.disabled) {
            const e = [...s],
              i = (e, n) => {
                e.forEach((e) => {
                  var t;
                  null != (t = null == e ? void 0 : e.children) && t.length
                    ? ((e.checked = n), i(e.children, n))
                    : (e.checked = n);
                });
              },
              o = (r, a) => {
                r.forEach((e, t) => {
                  var n;
                  if (e.title == l.title && e.value == l.value) {
                    if (((e.checked = !e.checked), a)) {
                      let e = r;
                      for (; null !== a && e.every((e) => e.checked); )
                        (a.checked = !0),
                          e.map((e) => (e.prev = a)),
                          (e = a.children),
                          (a = a.prev);
                    }
                    null != (n = null == e ? void 0 : e.children) &&
                      n.length &&
                      i(e.children, e.checked);
                  } else
                    null != (n = null == e ? void 0 : e.children) && n.length && o(e.children, e);
                });
              };
            o(e, null), f(e), n && n(e);
          }
        },
        h = U.useCallback(
          (a) => {
            var e;
            if (a.disabled)
              return V.default.createElement('div', { className: 'disblaed-checkBox' });
            if (null == (e = null == a ? void 0 : a.children) || !e.length)
              return a.checked
                ? V.default.createElement(
                    'div',
                    { className: 'checkBox-actived', onClick: () => c(a) },
                    V.default.createElement(N, null),
                  )
                : V.default.createElement('div', {
                    className: 'checkBox-noActived',
                    onClick: () => c(a),
                  });
            if (a.children && a.children.length) {
              let r = [];
              const l = (t) => {
                for (let e = 0; e < t.children.length; e++) {
                  var n = t.children[e];
                  if ((r.push(n.checked ? 1 : 0), n.children && n.children.length)) return l(n);
                  if (e == t.children.length - 1)
                    return r.every((e) => 0 == e)
                      ? V.default.createElement('div', {
                          className: 'checkBox-noActived',
                          onClick: () => c(a),
                        })
                      : r.every((e) => 1 == e)
                      ? V.default.createElement(
                          'div',
                          { className: 'checkBox-actived', onClick: () => c(a) },
                          V.default.createElement(N, null),
                        )
                      : V.default.createElement(
                          'div',
                          { className: 'checkBox-activedLess', onClick: () => c(a) },
                          V.default.createElement('div', { className: 'less-box' }),
                        );
                }
              };
              return l(a);
            }
          },
          [s],
        ),
        p = U.useCallback(
          (e = s) =>
            e.map((c, e) => {
              return V.default.createElement(
                U.Fragment,
                { key: e },
                V.default.createElement(
                  'div',
                  {
                    className: 'treeNode',
                    style: { marginLeft: 10 * c.level + 'px', height: '' + c.height },
                    draggable: u,
                    onDragStart: (e) => {
                      var t = e,
                        n = c;
                      if (u)
                        if (1 == s.length && 1 == n.level) {
                          const t = [...s],
                            n = (e) => {
                              var t;
                              1 !== e.level && (e.height = '0'),
                                null != (t = null == e ? void 0 : e.children) &&
                                  t.length &&
                                  e.children.forEach((e) => {
                                    var t;
                                    (e.height = '0'),
                                      null != (t = null == e ? void 0 : e.children) &&
                                        t.length &&
                                        e.children.forEach((e) => {
                                          n(e);
                                        });
                                  });
                            };
                          n(t[0]), f(t);
                        } else t.nativeEvent.dataTransfer.setData('dargTree', n.title);
                    },
                    onDrop: (e) => {
                      var a = c;
                      if (u) {
                        e.nativeEvent.preventDefault();
                        var l = e.nativeEvent.dataTransfer.getData('dargTree');
                        if (l) {
                          const t = [...s],
                            i = (r) => {
                              var e;
                              if (r.title == l && a !== r)
                                return (
                                  1 == (l = r).level
                                    ? t.splice(r.group, 1)
                                    : null != (e = null == r ? void 0 : r.children) &&
                                      e.splice(0, 1),
                                  void (
                                    0 ==
                                      (null == (e = null == r ? void 0 : r.children)
                                        ? void 0
                                        : e.length) && delete r.children
                                  )
                                );
                              null != (e = null == r ? void 0 : r.children) &&
                                e.length &&
                                r.children.forEach((e, t) => {
                                  var n;
                                  e.title == l &&
                                    ((l = e),
                                    null != (n = null == r ? void 0 : r.children) && n.splice(t, 1),
                                    0 ==
                                      (null == (n = null == r ? void 0 : r.children)
                                        ? void 0
                                        : n.length) && delete r.children),
                                    e.children && i(e);
                                });
                            },
                            o =
                              (t.forEach((e) => {
                                i(e);
                              }),
                              (r) => {
                                var e;
                                if (r.title == a.title)
                                  return (
                                    (l.level = r.level + 1),
                                    void ((l.prev = r).children
                                      ? r.children.splice(0, 0, l)
                                      : (r.children = [l]))
                                  );
                                null != (e = null == r ? void 0 : r.children) &&
                                  e.length &&
                                  r.children.forEach((e, t) => {
                                    var n;
                                    e.title == a.title
                                      ? ((l.level = e.level),
                                        (l.prev = r).children
                                          ? (r.children.splice(t + 1, 0, l),
                                            r.children[t + 1].children &&
                                              (r.children[t + 1].children = (
                                                null == (n = null == r ? void 0 : r.children[t + 1])
                                                  ? void 0
                                                  : n.children
                                              ).map((e) =>
                                                Object.assign(Object.assign({}, e), {
                                                  level:
                                                    (null == r ? void 0 : r.children)[t + 1].level +
                                                    1,
                                                }),
                                              )))
                                          : (r.children = [l]))
                                      : null != (n = null == e ? void 0 : e.children) &&
                                        n.length &&
                                        o(e);
                                  });
                              });
                          'object' == typeof l &&
                            t.forEach((e) => {
                              o(e);
                            }),
                            (l.group == a.group && l.level < a.level) || (f(t), r && r(t));
                        }
                      }
                    },
                    onDragOver: (e) => {
                      var t = e,
                        n = c;
                      if (u && (t.nativeEvent.preventDefault(), n.title && n.title !== a)) {
                        i(n.title);
                        const t = [...s],
                          r = (e) => {
                            null != (e = null == e ? void 0 : e.children) &&
                              e.forEach((e) => {
                                var t;
                                e.title == n.title
                                  ? ((e.height = '30px'),
                                    null != (t = null == e ? void 0 : e.children) &&
                                      t.forEach((e) => {
                                        e.height = '30px';
                                      }))
                                  : null != (t = null == e ? void 0 : e.children) &&
                                    t.length &&
                                    r(e);
                              });
                          };
                        t.forEach((e) => {
                          r(e);
                        }),
                          f(t);
                      }
                    },
                  },
                  null != (e = null == c ? void 0 : c.children) && e.length
                    ? '0' == c.children[0].height
                      ? V.default.createElement(K, { onClick: () => d(c) })
                      : V.default.createElement(it, { onClick: () => d(c) })
                    : V.default.createElement('div', { style: { width: '14px', height: '14px' } }),
                  h(c),
                  V.default.createElement(
                    'span',
                    {
                      className: 'text',
                      onClick: () => d(c),
                      style: c.disabled ? { color: '#00000040' } : { color: '#000000' },
                    },
                    c.title,
                  ),
                ),
                (null == (e = null == c ? void 0 : c.children) ? void 0 : e.length) &&
                  p(c.children),
              );
            }),
          [s],
        );
      return V.default.createElement(
        U.Fragment,
        null,
        V.default.createElement('div', { className: 'tree-select-dialog' }, p(s)),
      );
    }),
    Z = U.memo((e) => {
      const {
          children: t,
          checked: n,
          disabled: r,
          group: a,
          checkCallback: l,
          checkGroupCallback: i,
        } = e,
        [o, c] = U.useState(),
        [u, s] = U.useState(a || []),
        f =
          (U.useEffect(() => {
            c(null != n && n);
          }, [n]),
          U.useMemo(
            () =>
              r
                ? V.default.createElement('div', { className: 'disblaed-checkBox' })
                : o
                ? V.default.createElement(
                    'div',
                    { className: 'checkBox-actived' },
                    V.default.createElement(N, { style: { fontSize: '12px' } }),
                  )
                : V.default.createElement('div', { className: 'checkBox-noActived' }),
            [o, n],
          )),
        d = U.useCallback(
          (e) =>
            e.disabled
              ? V.default.createElement('div', { className: 'disblaed-checkBox' })
              : e.checked
              ? V.default.createElement(
                  'div',
                  { className: 'checkBox-actived' },
                  V.default.createElement(N, { style: { fontSize: '12px' } }),
                )
              : e.checked
              ? void 0
              : V.default.createElement('div', { className: 'checkBox-noActived' }),
          [a],
        );
      return V.default.createElement(
        U.Fragment,
        null,
        a && a.length
          ? V.default.createElement(
              'div',
              { className: 'checkGroup' },
              a.map((e, r) =>
                V.default.createElement(
                  'div',
                  {
                    className: 'checkbox groupBox',
                    key: r,
                    onClick: () => {
                      {
                        var e = r,
                          t;
                        const n = [...u];
                        return (
                          (n[e].checked = !(null != (t = n[e]) && t.checked && n[e].checked)),
                          s(n),
                          void (i && i(n))
                        );
                      }
                    },
                  },
                  d(e),
                  V.default.createElement('div', { className: 'text' }, e.label),
                ),
              ),
            )
          : V.default.createElement(
              'div',
              {
                className: 'checkbox',
                onClick: () => {
                  r || (c(!o), l && l(!o));
                },
              },
              f,
              V.default.createElement('div', { className: 'text' }, t),
            ),
      );
    });
  const un = {
    3: [
      [0, 1, 2],
      [1, 2, 0],
      [2, 0, 1],
    ],
    4: [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 0],
      [3, 0, 1],
    ],
    5: [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 0],
      [4, 0, 1],
    ],
    6: [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 0],
      [5, 0, 1],
    ],
  };
  var sn = U.memo((e) => {
      let {
        imgList: n,
        pictureSize: a = 400,
        height: l = 240,
        autoPlayer: t,
        deply: r = 3e3,
        showTrigger: i,
        card: o,
      } = e;
      const [c, u] = U.useState(n),
        [s, f] = U.useState(n),
        [d, h] = U.useState(a),
        [p, m] = U.useState('0.2s linear'),
        [g, v] = U.useState(un[n.length]),
        [y, b] = U.useState({
          leftPic: {
            pos: { left: 0 },
            width: a / 2 + 'px',
            height: l - 60 + 'px',
            zIndex: 2,
            top: '20px',
            picIndex: 0,
            opacity: 0.4,
          },
          centerPic: {
            pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
            width: a + 'px',
            height: l + 'px',
            zIndex: 5,
            top: '',
            picIndex: 1,
            opacity: 1,
          },
          rightPic: {
            pos: { left: 2 * a - 40 - a / 2 + 'px' },
            width: a / 2 + 'px',
            height: l - 60 + 'px',
            zIndex: 2,
            top: '20px',
            picIndex: 2,
            opacity: 0.4,
          },
        }),
        [x, E] = U.useState(0);
      let w = U.useRef(),
        _ = U.useRef();
      U.useEffect(() => {
        let e = JSON.parse(JSON.stringify(n));
        f(n), e.push(e[0]), e.unshift(e[e.length - 2]), u(e);
        var t = n.length;
        v(un[t]);
      }, []),
        U.useEffect(
          () => (
            t && (o ? requestAnimationFrame(N) : requestAnimationFrame(k)),
            () => {
              clearInterval(w.current), clearInterval(_.current);
            }
          ),
          [],
        );
      const k = () => {
          w.current = setInterval(() => {
            h((e) => {
              e = JSON.parse(JSON.stringify(e));
              return e >= c.length * a ? m('') : m('0.2s linear'), e >= c.length * a ? 0 : e + a;
            });
          }, r);
        },
        N = () => {
          _.current = setInterval(() => {
            b(
              (e) => (
                e.centerPic.pos.margin
                  ? (e.centerPic = {
                      pos: { left: 0 },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    })
                  : e.centerPic.pos.margin || 0 != e.centerPic.pos.left
                  ? (e.centerPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: a + 'px',
                      height: l + 'px',
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    })
                  : (e.centerPic = {
                      pos: { left: 2 * a - 40 - a / 2 + 'px' },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    }),
                e.leftPic.pos.margin
                  ? (e.leftPic = {
                      pos: { left: 0 },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    })
                  : e.leftPic.pos.margin || 0 != e.leftPic.pos.left
                  ? (e.leftPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: a + 'px',
                      height: l + 'px',
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    })
                  : (e.leftPic = {
                      pos: { left: 2 * a - 40 - a / 2 + 'px' },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    }),
                e.rightPic.pos.margin
                  ? (e.rightPic = {
                      pos: { left: 0 },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    })
                  : e.rightPic.pos.margin || 0 != e.rightPic.pos.left
                  ? (e.rightPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: a + 'px',
                      height: l + 'px',
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    })
                  : (e.rightPic = {
                      pos: { left: 2 * a - 40 - a / 2 + 'px' },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    }),
                JSON.parse(JSON.stringify(e))
              ),
            ),
              v((e) => (e.push(e[0]), e.shift(), JSON.parse(JSON.stringify(e)))),
              E((e) => (e >= g.length - 1 ? 0 : e + 1));
          }, r);
        },
        C = U.useCallback(
          (e) =>
            (d == a && 0 == e) || (0 == d && e == c.length - 3) || d / a - 1 == e
              ? 'option-active'
              : 'option',
          [d],
        ),
        S = U.useCallback(
          (e) =>
            0 == e
              ? Object.assign(Object.assign({ width: y.centerPic.width }, y.centerPic.pos), {
                  height: y.centerPic.height,
                  zIndex: y.centerPic.zIndex,
                  top: y.centerPic.top,
                  opacity: y.centerPic.opacity,
                })
              : 1 == e
              ? Object.assign(Object.assign({ width: y.leftPic.width }, y.leftPic.pos), {
                  height: y.leftPic.height,
                  zIndex: y.leftPic.zIndex,
                  top: y.leftPic.top,
                  opacity: y.leftPic.opacity,
                })
              : 2 == e
              ? Object.assign(Object.assign({ width: y.rightPic.width }, y.rightPic.pos), {
                  height: y.rightPic.height,
                  zIndex: y.rightPic.zIndex,
                  top: y.rightPic.top,
                  opacity: y.rightPic.opacity,
                })
              : void 0,
          [y],
        ),
        O = (e) => {
          if (2 == e.zIndex && 0 !== e.left) {
            const e = Object.assign({}, y),
              t =
                (e.centerPic.pos.margin
                  ? (e.centerPic = {
                      pos: { left: 0 },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    })
                  : e.centerPic.pos.margin || 0 != e.centerPic.pos.left
                  ? (e.centerPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: a + 'px',
                      height: l + 'px',
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    })
                  : (e.centerPic = {
                      pos: { left: 2 * a - 40 - a / 2 + 'px' },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    }),
                e.leftPic.pos.margin
                  ? (e.leftPic = {
                      pos: { left: 0 },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    })
                  : e.leftPic.pos.margin || 0 != e.leftPic.pos.left
                  ? (e.leftPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: a + 'px',
                      height: l + 'px',
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    })
                  : (e.leftPic = {
                      pos: { left: 2 * a - 40 - a / 2 + 'px' },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    }),
                e.rightPic.pos.margin
                  ? (e.rightPic = {
                      pos: { left: 0 },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    })
                  : e.rightPic.pos.margin || 0 != e.rightPic.pos.left
                  ? (e.rightPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: a + 'px',
                      height: l + 'px',
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    })
                  : (e.rightPic = {
                      pos: { left: 2 * a - 40 - a / 2 + 'px' },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    }),
                b(e),
                [...g]);
            t.push(t.shift()), v(t), E((e) => (e >= g.length - 1 ? 0 : e + 1));
          } else if (2 == e.zIndex && 0 == e.left) {
            const e = Object.assign({}, y),
              n =
                (e.centerPic.pos.margin
                  ? (e.centerPic = {
                      pos: { left: 2 * a - 40 - a / 2 + 'px' },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    })
                  : e.centerPic.pos.margin || 0 != e.centerPic.pos.left
                  ? (e.centerPic = {
                      pos: { left: 0 },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    })
                  : (e.centerPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: a + 'px',
                      height: l + 'px',
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    }),
                e.leftPic.pos.margin
                  ? (e.leftPic = {
                      pos: { left: 2 * a - 40 - a / 2 + 'px' },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    })
                  : e.leftPic.pos.margin || 0 != e.leftPic.pos.left
                  ? (e.leftPic = {
                      pos: { left: 0 },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    })
                  : (e.leftPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: a + 'px',
                      height: l + 'px',
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    }),
                e.rightPic.pos.margin
                  ? (e.rightPic = {
                      pos: { left: 2 * a - 40 - a / 2 + 'px' },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    })
                  : e.rightPic.pos.margin || 0 != e.rightPic.pos.left
                  ? (e.rightPic = {
                      pos: { left: 0 },
                      width: a / 2 + 'px',
                      height: l - 60 + 'px',
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    })
                  : (e.rightPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: a + 'px',
                      height: l + 'px',
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    }),
                b(e),
                [...g]);
            n.unshift(n[n.length - 1]), n.pop(), v(n), E((e) => (e - 1 < 0 ? g.length - 1 : e - 1));
          }
        };
      return V.default.createElement(
        U.Fragment,
        null,
        o
          ? V.default.createElement(
              'div',
              { className: 'card-swiper', style: { height: l + 'px', width: 2 * a + 'px' } },
              V.default.createElement(
                'div',
                { className: 'center-pic', style: { width: 2 * a - 40 + 'px', height: l + 'px' } },
                V.default.createElement('img', {
                  src: s[g[0][y.centerPic.picIndex]],
                  style: S(0),
                  className: 'center',
                  onClick: () => O(S(0)),
                }),
                V.default.createElement('img', {
                  src: s[g[0][y.leftPic.picIndex]],
                  style: S(1),
                  className: 'left',
                  onClick: () => O(S(1)),
                }),
                V.default.createElement('img', {
                  src: s[g[0][y.rightPic.picIndex]],
                  style: S(2),
                  className: 'right',
                  onClick: () => O(S(2)),
                }),
              ),
              i &&
                V.default.createElement(
                  'div',
                  { className: 'menu-options' },
                  new Array(s.length).fill('').map((e, r) =>
                    V.default.createElement('div', {
                      key: r,
                      className: r == x ? 'option-active' : 'option',
                      onClick: () => {
                        var n = r;
                        if (x < n) {
                          E(n);
                          const e = Object.assign({}, y);
                          e.centerPic.pos.margin
                            ? (e.centerPic = {
                                pos: { left: 0 },
                                width: a / 2 + 'px',
                                height: l - 60 + 'px',
                                zIndex: 2,
                                top: '20px',
                                picIndex: 0,
                                opacity: 0.4,
                              })
                            : e.centerPic.pos.margin || 0 != e.centerPic.pos.left
                            ? (e.centerPic = {
                                pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                                width: a + 'px',
                                height: l + 'px',
                                zIndex: 5,
                                top: '',
                                picIndex: 1,
                                opacity: 1,
                              })
                            : (e.centerPic = {
                                pos: { left: 2 * a - 40 - a / 2 + 'px' },
                                width: a / 2 + 'px',
                                height: l - 60 + 'px',
                                zIndex: 2,
                                top: '20px',
                                picIndex: 2,
                                opacity: 0.4,
                              }),
                            e.leftPic.pos.margin
                              ? (e.leftPic = {
                                  pos: { left: 0 },
                                  width: a / 2 + 'px',
                                  height: l - 60 + 'px',
                                  zIndex: 2,
                                  top: '20px',
                                  picIndex: 0,
                                  opacity: 0.4,
                                })
                              : e.leftPic.pos.margin || 0 != e.leftPic.pos.left
                              ? (e.leftPic = {
                                  pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                                  width: a + 'px',
                                  height: l + 'px',
                                  zIndex: 5,
                                  top: '',
                                  picIndex: 1,
                                  opacity: 1,
                                })
                              : (e.leftPic = {
                                  pos: { left: 2 * a - 40 - a / 2 + 'px' },
                                  width: a / 2 + 'px',
                                  height: l - 60 + 'px',
                                  zIndex: 2,
                                  top: '20px',
                                  picIndex: 2,
                                  opacity: 0.4,
                                }),
                            e.rightPic.pos.margin
                              ? (e.rightPic = {
                                  pos: { left: 0 },
                                  width: a / 2 + 'px',
                                  height: l - 60 + 'px',
                                  zIndex: 2,
                                  top: '20px',
                                  picIndex: 0,
                                  opacity: 0.4,
                                })
                              : e.rightPic.pos.margin || 0 != e.rightPic.pos.left
                              ? (e.rightPic = {
                                  pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                                  width: a + 'px',
                                  height: l + 'px',
                                  zIndex: 5,
                                  top: '',
                                  picIndex: 1,
                                  opacity: 1,
                                })
                              : (e.rightPic = {
                                  pos: { left: 2 * a - 40 - a / 2 + 'px' },
                                  width: a / 2 + 'px',
                                  height: l - 60 + 'px',
                                  zIndex: 2,
                                  top: '20px',
                                  picIndex: 2,
                                  opacity: 0.4,
                                }),
                            b(e),
                            v((t) => {
                              t.sort((e, t) => e[0] - t[0]);
                              for (let e = 0; e < n; e++) t.push(t.shift());
                              return JSON.parse(JSON.stringify(t));
                            });
                        } else if (x > n) {
                          E(n);
                          const t = Object.assign({}, y);
                          t.centerPic.pos.margin
                            ? (t.centerPic = {
                                pos: { left: 2 * a - 40 - a / 2 + 'px' },
                                width: a / 2 + 'px',
                                height: l - 60 + 'px',
                                zIndex: 2,
                                top: '20px',
                                picIndex: 2,
                                opacity: 0.4,
                              })
                            : t.centerPic.pos.margin || 0 != t.centerPic.pos.left
                            ? (t.centerPic = {
                                pos: { left: 0 },
                                width: a / 2 + 'px',
                                height: l - 60 + 'px',
                                zIndex: 2,
                                top: '20px',
                                picIndex: 0,
                                opacity: 0.4,
                              })
                            : (t.centerPic = {
                                pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                                width: a + 'px',
                                height: l + 'px',
                                zIndex: 5,
                                top: '',
                                picIndex: 1,
                                opacity: 1,
                              }),
                            t.leftPic.pos.margin
                              ? (t.leftPic = {
                                  pos: { left: 2 * a - 40 - a / 2 + 'px' },
                                  width: a / 2 + 'px',
                                  height: l - 60 + 'px',
                                  zIndex: 2,
                                  top: '20px',
                                  picIndex: 2,
                                  opacity: 0.4,
                                })
                              : t.leftPic.pos.margin || 0 != t.leftPic.pos.left
                              ? (t.leftPic = {
                                  pos: { left: 0 },
                                  width: a / 2 + 'px',
                                  height: l - 60 + 'px',
                                  zIndex: 2,
                                  top: '20px',
                                  picIndex: 0,
                                  opacity: 0.4,
                                })
                              : (t.leftPic = {
                                  pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                                  width: a + 'px',
                                  height: l + 'px',
                                  zIndex: 5,
                                  top: '',
                                  picIndex: 1,
                                  opacity: 1,
                                }),
                            t.rightPic.pos.margin
                              ? (t.rightPic = {
                                  pos: { left: 2 * a - 40 - a / 2 + 'px' },
                                  width: a / 2 + 'px',
                                  height: l - 60 + 'px',
                                  zIndex: 2,
                                  top: '20px',
                                  picIndex: 2,
                                  opacity: 0.4,
                                })
                              : t.rightPic.pos.margin || 0 != t.rightPic.pos.left
                              ? (t.rightPic = {
                                  pos: { left: 0 },
                                  width: a / 2 + 'px',
                                  height: l - 60 + 'px',
                                  zIndex: 2,
                                  top: '20px',
                                  picIndex: 0,
                                  opacity: 0.4,
                                })
                              : (t.rightPic = {
                                  pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                                  width: a + 'px',
                                  height: l + 'px',
                                  zIndex: 5,
                                  top: '',
                                  picIndex: 1,
                                  opacity: 1,
                                }),
                            b(t),
                            v((t) => {
                              t.sort((e, t) => e[0] - t[0]);
                              for (let e = 0; e < t.length && t[e] != g[n]; e++) t.push(t.shift());
                              return JSON.parse(JSON.stringify(t));
                            });
                        }
                      },
                    }),
                  ),
                ),
            )
          : V.default.createElement(
              'div',
              { className: 'swipers', style: { width: a + 'px', height: l + 'px' } },
              V.default.createElement(
                'div',
                {
                  className: 'swiperList',
                  style: { right: d + 'px', transition: p, width: a * c.length + 'px' },
                },
                c.map((e, t) =>
                  V.default.createElement('img', {
                    key: t,
                    className: 'swiper-img',
                    style: { width: a + 'px', height: l + 'px' },
                    src: e,
                  }),
                ),
              ),
              V.default.createElement(
                'div',
                {
                  className: 'prev-btn',
                  onClick: () => {
                    d <= 0
                      ? (m(''),
                        h((c.length - 2) * a),
                        setTimeout(() => {
                          m('0.2s linear'), h((c.length - 2) * a - a);
                        }, 0))
                      : h(d - a);
                  },
                },
                V.default.createElement(It, null),
              ),
              V.default.createElement(
                'div',
                {
                  className: 'next-btn',
                  onClick: () => {
                    d >= (c.length - 2) * a
                      ? (m(''),
                        h(0),
                        setTimeout(() => {
                          m('0.2s linear'), h(a);
                        }, 0))
                      : h(d + a);
                  },
                },
                V.default.createElement(Bt, null),
              ),
              i &&
                V.default.createElement(
                  'div',
                  { className: 'menu-options' },
                  new Array(n.length).fill('').map((e, t) =>
                    V.default.createElement('div', {
                      key: t,
                      className: C(t),
                      onClick: () => {
                        var e = t;
                        h((e + 1) * a);
                      },
                    }),
                  ),
                ),
            ),
      );
    }),
    fn = U.memo((e) => {
      const {
          children: t,
          type: n = 'hover',
          align: r = 'bottom',
          content: a,
          noBorder: l,
          dialogWidth: i = 200,
          propsVisiable: o,
          onVisableChange: c,
        } = e,
        u = U.useRef(),
        s = U.useRef(),
        [f, d] = U.useState(o || !1),
        [h, p] = U.useState({ width: '', height: '' }),
        m =
          (U.useEffect(() => {
            p({ width: u.current.offsetWidth, height: u.current.offsetHeight }),
              'click' == n &&
                window.addEventListener('click', () => {
                  d(!1), o && d(!1);
                });
          }, []),
          U.useEffect(() => {
            null != o && d(o);
          }, [o]),
          U.useEffect(() => {
            const e = s.current;
            f
              ? ((e.style.width = f ? i + 'px' : '0px'),
                (e.style.height = f ? '' : '0px'),
                setTimeout(() => {
                  e.style.opacity = f ? 1 : 0;
                }, 100))
              : ((e.style.opacity = f ? 1 : 0),
                setTimeout(() => {
                  (e.style.width = f ? i + 'px' : '0px'), (e.style.height = f ? '' : '0px');
                }, 100));
          }, [f]),
          an.debounce(() => {
            'hover' == n && 0 == f && (d(!0), c && c(!0));
          }, 200)),
        g = an.debounce(() => {
          'hover' == n && 1 == f && (d(!1), c && c(!1));
        }, 200),
        v = U.useMemo(() => {
          let e = {};
          return (
            'bottom' != r &&
              ('top' == r
                ? (e.bottom = h.height + 'px')
                : 'right' == r
                ? ((e.left = h.width + 'px'), (e.bottom = Number(h.height) / 2 + 'px'))
                : 'left' == r &&
                  ((e.right = h.width + 'px'), (e.bottom = Number(h.height) / 2 + 'px'))),
            l || (e.border = '1px solid #ccc'),
            Object.assign({}, e)
          );
        }, [a, f, o, h]);
      return V.default.createElement(
        'div',
        { className: 'popover-card' },
        V.default.createElement(
          'div',
          { className: 'open-container', onMouseEnter: () => m(), onMouseLeave: () => g() },
          V.default.createElement(
            'div',
            {
              className: 'show-btn',
              onClick: (e) => {
                e.stopPropagation(), 'click' == n && (d(!f), c && c(!f));
              },
              ref: u,
            },
            t,
          ),
          V.default.createElement(
            'div',
            {
              className: 'pop-dialog',
              style: v,
              onClick: (e) => e.stopPropagation(),
              onMouseEnter: () => m(),
              onMouseLeave: () => g(),
              ref: s,
            },
            a,
          ),
        ),
      );
    });
  let X = 0;
  const dn = [10, 20, 30, 50];
  var hn = U.memo((e) => {
    const {
        titleParams: t,
        tableData: a,
        align: n,
        expandedRowRender: r,
        radio: l,
        checked: i,
        radioSelectCallback: o,
        checkedSelectCallback: c,
        filter: u,
        avableSort: s,
        virtualized: f,
        largeDateShowNum: d = 10,
        lazyLoad: h,
        pagination: p,
        paginationAlign: m,
        pageSizeOption: R,
        changePNumCallback: g,
        changePSizeCallback: v,
        dropabled: D,
        dropCallback: y,
      } = e,
      [b, x] = U.useState(t),
      [E, w] = U.useState(a),
      [_, B] = U.useState({}),
      [k, N] = U.useState([]),
      [F, T] = U.useState(0),
      [C, $] = U.useState(dn[0]),
      [, q] = U.useState(1),
      S = U.createRef(),
      O =
        (U.useEffect(() => {
          let e = [...E];
          r &&
            e.forEach((e) => {
              e.openLine = '';
            }),
            s &&
              x(
                (e) => (
                  e.forEach((e) => {
                    Array.isArray(e.sorter) &&
                      (e.sorter = e.sorter.map((e) => ({ fn: e, sorted: !1 })));
                  }),
                  [...e]
                ),
              ),
            (f || h) && (e = e.slice(0, d || 10)),
            p && (e = e.slice(0, C)),
            w(e);
        }, []),
        U.useCallback(
          (e) => {
            const t = { width: 'auto' };
            return null != e && e.width && (t.width = e.width + 'px'), t;
          },
          [t],
        )),
      j = (e, t) => {
        if (r) {
          r(e);
          const n = [...E];
          n[t].openLine ? (n[t].openLine = '') : (r(e), (n[t].openLine = r(e))), w(n);
        }
      },
      I = (e) => {
        B(e), o && o(e);
      },
      z = (t, n) => {
        N((e) => {
          if (t) e.push(n);
          else {
            const t = e.findIndex((e) => e == n);
            e.splice(t, 1);
          }
          return c && c(e), [...e];
        });
      },
      M = (t) => {
        N((e) => ((e = t ? E : []), c && c(e), [...e]));
      },
      A = (t, e, n) => {
        const r = e.dataIndex,
          a = [...E];
        Array.isArray(e.sorter) && 'object' == typeof e.sorter[0]
          ? (a.sort(e.sorter[n - 2].fn),
            w(a),
            x(
              (e) => (
                2 == n
                  ? ((e[t].sorter[0].sorted = !0), (e[t].sorter[1].sorted = !1))
                  : ((e[t].sorter[0].sorted = !1), (e[t].sorter[1].sorted = !0)),
                [...e]
              ),
            ))
          : (a.sort((e, t) => (2 == n ? e[r] - t[r] : t[r] - e[r])),
            w(a),
            x((e) => ((e[t].sorter = n), [...e])));
      },
      Y = (t, n) => {
        x(
          (e) => (
            e.forEach((e) => {
              e == n && e.filter && (e.filter = t);
            }),
            [...e]
          ),
        );
      },
      H = (t) => {
        w((e) => [
          ...(1 == t.filter ? a : a.filter((e) => String(e[t.dataIndex]).includes(t.filter))),
        ]);
      },
      P = (e) =>
        Object.entries(e).map((e, t) => {
          if ('openLine' !== e[0])
            return V.default.createElement(
              'td',
              { key: t, style: { textAlign: n || 'left' } },
              e[1],
            );
        }),
      L = U.useCallback(
        (e, t) =>
          'number' == typeof e.sorter || 'boolean' == typeof e.sorter
            ? 0 == t
              ? { color: 2 == e.sorter ? '#1890ff' : '#a9adb2' }
              : { color: 3 == e.sorter ? '#1890ff' : '#a9adb2' }
            : 0 == t
            ? { color: e.sorter[0].sorted ? '#1890ff' : '#a9adb2' }
            : { color: e.sorter[1].sorted ? '#1890ff' : '#a9adb2' },
        [t, b],
      ),
      W = U.useCallback(
        () =>
          null == E
            ? void 0
            : E.map((t, e) =>
                V.default.createElement(
                  V.default.Fragment,
                  null,
                  V.default.createElement(
                    'tr',
                    { key: e, className: 'victurl-scroll-tr' },
                    r &&
                      V.default.createElement(
                        'td',
                        {
                          style: { textAlign: n || 'left', cursor: 'pointer' },
                          onClick: () => j(t, e),
                        },
                        V.default.createElement(Rt, null),
                      ),
                    l &&
                      V.default.createElement(
                        'td',
                        { style: { textAlign: n || 'left', cursor: 'pointer' } },
                        V.default.createElement('input', {
                          className: 'radioBox',
                          type: 'radio',
                          checked: _ == t,
                          onClick: () => I(t),
                        }),
                      ),
                    i &&
                      V.default.createElement(
                        'td',
                        { style: { textAlign: n || 'left', cursor: 'pointer' } },
                        V.default.createElement(
                          Z,
                          { checked: -1 != k.indexOf(t), checkCallback: (e) => z(e, t) },
                          -1 == k.indexOf(t),
                        ),
                      ),
                    P(t),
                  ),
                  t.openLine &&
                    V.default.createElement(
                      'tr',
                      null,
                      V.default.createElement(
                        'td',
                        {
                          style: { textAlign: n || 'left' },
                          colSpan: Object.keys(E[0]).length + 1,
                        },
                        t.openLine,
                      ),
                    ),
                ),
              ),
        [E, X, F, k, _],
      ),
      J = U.useMemo(() => {
        let e = {};
        if (m)
          switch (m) {
            case 'left':
              e = { justifyContent: 'flex-start' };
              break;
            case 'center':
              e = { justifyContent: 'center' };
              break;
            case 'right':
              e = { justifyContent: 'flex-end' };
          }
        else e = { justifyContent: 'flex-start' };
        return e;
      }, [m]);
    return V.default.createElement(
      'div',
      {
        className: 'table-container',
        style:
          f || h
            ? {
                height:
                  (d + 2) *
                    (null == (e = document.querySelector('.victurl-scroll-tr'))
                      ? void 0
                      : e.offsetHeight) +
                  'px',
              }
            : {},
      },
      V.default.createElement(
        'div',
        {
          className: 'table',
          style:
            f || h
              ? {
                  maxHeight:
                    (d + 2) *
                      (null == (e = document.querySelector('.victurl-scroll-tr'))
                        ? void 0
                        : e.offsetHeight) +
                    'px',
                  overflow: 'scroll',
                  position: 'absolute',
                  top: '40px',
                  left: '0',
                }
              : {},
          onScroll: (e) => {
            var n = e;
            if (f) {
              const n = S.current.scrollTop;
              if (
                !(
                  (a.length + 2) *
                    (null == (e = document.querySelector('.victurl-scroll-tr'))
                      ? void 0
                      : e.offsetHeight) -
                    X <
                    (d + 2) *
                      (null == (e = document.querySelector('.victurl-scroll-tr'))
                        ? void 0
                        : e.offsetHeight) && n > X
                )
              ) {
                const r =
                  (null == (e = document.querySelector('.victurl-scroll-tr'))
                    ? void 0
                    : e.offsetHeight) || 40;
                (X = n),
                  T(n),
                  w((e) => {
                    var t = d || 10;
                    return [...a.slice(Math.floor(n / r), Math.floor(n / r) + t)];
                  });
              }
            } else
              h &&
                n.nativeEvent.target.scrollHeight -
                  n.nativeEvent.target.clientHeight -
                  n.nativeEvent.target.scrollTop ==
                  0 &&
                setTimeout(() => {
                  w((e) => [...(e = [...e, ...a.slice(e.length + 1, e.length + 11)])]);
                }, 300);
          },
          ref: S,
        },
        V.default.createElement(
          'table',
          null,
          !f &&
            V.default.createElement(
              'thead',
              null,
              V.default.createElement(
                'tr',
                null,
                (r || l) && V.default.createElement('th', { style: { textAlign: n || 'left' } }),
                i &&
                  V.default.createElement(
                    'th',
                    { style: { textAlign: n || 'left' } },
                    V.default.createElement(Z, {
                      checked: k.length == E.length,
                      checkCallback: (e) => M(e),
                    }),
                  ),
                b.map((t, e) =>
                  V.default.createElement(
                    'th',
                    { key: e, style: O(t), className: 'tableHead' },
                    V.default.createElement(
                      'div',
                      {
                        style: {
                          display: 'flex',
                          justifyContent: n || 'flex-start',
                          alignItems: 'center',
                        },
                      },
                      V.default.createElement('span', null, t.title),
                      (null == t ? void 0 : t.sorter) &&
                        s &&
                        V.default.createElement(
                          'div',
                          { className: 'sort-icon' },
                          V.default.createElement(ct, {
                            onClick: () => A(e, t, 2),
                            style: L(t, 0),
                          }),
                          V.default.createElement(K, { onClick: () => A(e, t, 3), style: L(t, 1) }),
                        ),
                      (null == t ? void 0 : t.filter) &&
                        u &&
                        V.default.createElement(
                          fn,
                          {
                            type: 'click',
                            align: 'bottom',
                            dialogWidth: 130,
                            noBorder: !0,
                            content: V.default.createElement(
                              'div',
                              { className: 'filter-dialog' },
                              V.default.createElement(G, {
                                placeholder: '请输入',
                                width: '70',
                                handleIptChange: (e) => Y(e, t),
                              }),
                              V.default.createElement(
                                'div',
                                { className: 'search-btn', onClick: () => H(t) },
                                V.default.createElement(Ht, null),
                              ),
                            ),
                          },
                          V.default.createElement(
                            'div',
                            { className: 'search-th-btn' },
                            V.default.createElement(Ht, null),
                          ),
                        ),
                    ),
                  ),
                ),
              ),
            ),
          f
            ? V.default.createElement(
                'div',
                {
                  style: {
                    height:
                      (a.length + 2) *
                        (null == (e = document.querySelector('.victurl-scroll-tr'))
                          ? void 0
                          : e.offsetHeight) -
                      X +
                      'px',
                    transform: `translateY(${X}px)`,
                  },
                },
                V.default.createElement(
                  'thead',
                  null,
                  V.default.createElement(
                    'tr',
                    null,
                    (r || l) &&
                      V.default.createElement('th', { style: { textAlign: n || 'left' } }),
                    i &&
                      V.default.createElement(
                        'th',
                        { style: { textAlign: n || 'left' } },
                        V.default.createElement(Z, {
                          checked: k.length == E.length,
                          checkCallback: (e) => M(e),
                        }),
                      ),
                    null == b
                      ? void 0
                      : b.map((t, e) =>
                          V.default.createElement(
                            'th',
                            { key: e, style: O(t), className: 'tableHead' },
                            V.default.createElement(
                              'div',
                              {
                                style: {
                                  display: 'flex',
                                  justifyContent: n || 'flex-start',
                                  alignItems: 'center',
                                },
                              },
                              V.default.createElement('span', null, t.title),
                              (null == t ? void 0 : t.sorter) &&
                                s &&
                                V.default.createElement(
                                  'div',
                                  { className: 'sort-icon' },
                                  V.default.createElement(ct, {
                                    onClick: () => A(e, t, 2),
                                    style: L(t, 0),
                                  }),
                                  V.default.createElement(K, {
                                    onClick: () => A(e, t, 3),
                                    style: L(t, 1),
                                  }),
                                ),
                              (null == t ? void 0 : t.filter) &&
                                u &&
                                V.default.createElement(
                                  fn,
                                  {
                                    type: 'click',
                                    align: 'bottom',
                                    dialogWidth: 130,
                                    noBorder: !0,
                                    content: V.default.createElement(
                                      'div',
                                      { className: 'filter-dialog' },
                                      V.default.createElement(G, {
                                        placeholder: '请输入',
                                        width: '70',
                                        handleIptChange: (e) => Y(e, t),
                                      }),
                                      V.default.createElement(
                                        'div',
                                        { className: 'search-btn', onClick: () => H(t) },
                                        V.default.createElement(Ht, null),
                                      ),
                                    ),
                                  },
                                  V.default.createElement(
                                    'div',
                                    { className: 'search-th-btn' },
                                    V.default.createElement(Ht, null),
                                  ),
                                ),
                            ),
                          ),
                        ),
                  ),
                ),
                V.default.createElement('tbody', null, W()),
              )
            : h || p
            ? V.default.createElement(
                'tbody',
                null,
                null == E
                  ? void 0
                  : E.map((t, e) =>
                      V.default.createElement(
                        V.default.Fragment,
                        null,
                        V.default.createElement(
                          'tr',
                          { key: e },
                          r &&
                            V.default.createElement(
                              'td',
                              {
                                style: { textAlign: n || 'left', cursor: 'pointer' },
                                onClick: () => j(t, e),
                              },
                              V.default.createElement(Rt, null),
                            ),
                          l &&
                            V.default.createElement(
                              'td',
                              { style: { textAlign: n || 'left', cursor: 'pointer' } },
                              V.default.createElement('input', {
                                className: 'radioBox',
                                type: 'radio',
                                checked: _ == t,
                                onClick: () => I(t),
                              }),
                            ),
                          i &&
                            V.default.createElement(
                              'td',
                              { style: { textAlign: n || 'left', cursor: 'pointer' } },
                              V.default.createElement(
                                Z,
                                { checked: -1 != k.indexOf(t), checkCallback: (e) => z(e, t) },
                                -1 == k.indexOf(t),
                              ),
                            ),
                          P(t),
                        ),
                        t.openLine &&
                          V.default.createElement(
                            'tr',
                            null,
                            V.default.createElement(
                              'td',
                              {
                                style: { textAlign: n || 'left' },
                                colSpan: Object.keys(E[0]).length + 1,
                              },
                              t.openLine,
                            ),
                          ),
                      ),
                    ),
              )
            : D
            ? V.default.createElement(
                'tbody',
                null,
                null == E
                  ? void 0
                  : E.map((t, a) =>
                      V.default.createElement(
                        V.default.Fragment,
                        null,
                        V.default.createElement(
                          'tr',
                          {
                            key: a,
                            style: { cursor: 'move' },
                            draggable: !0,
                            onDragStart: (e) => {
                              e.nativeEvent.dataTransfer.setData('dragKey', a);
                            },
                            onDrop: (e) => {
                              {
                                var t = a;
                                e.nativeEvent.preventDefault();
                                const n = e.nativeEvent.dataTransfer.getData('dragKey'),
                                  r = t;
                                return void w(
                                  (e) => (([e[n], e[r]] = [e[r], e[n]]), y && y(e), [...e]),
                                );
                              }
                            },
                            onDragOver: (e) => {
                              e.nativeEvent.preventDefault();
                            },
                          },
                          r &&
                            V.default.createElement(
                              'td',
                              {
                                style: { textAlign: n || 'left', cursor: 'pointer' },
                                onClick: () => j(t, a),
                              },
                              V.default.createElement(Rt, null),
                            ),
                          l &&
                            V.default.createElement(
                              'td',
                              { style: { textAlign: n || 'left', cursor: 'pointer' } },
                              V.default.createElement('input', {
                                className: 'radioBox',
                                type: 'radio',
                                checked: _ == t,
                                onClick: () => I(t),
                              }),
                            ),
                          i &&
                            V.default.createElement(
                              'td',
                              { style: { textAlign: n || 'left', cursor: 'pointer' } },
                              V.default.createElement(
                                Z,
                                { checked: -1 != k.indexOf(t), checkCallback: (e) => z(e, t) },
                                -1 == k.indexOf(t),
                              ),
                            ),
                          P(t),
                        ),
                        t.openLine &&
                          V.default.createElement(
                            'tr',
                            null,
                            V.default.createElement(
                              'td',
                              {
                                style: { textAlign: n || 'left' },
                                colSpan: Object.keys(E[0]).length + 1,
                              },
                              t.openLine,
                            ),
                          ),
                      ),
                    ),
              )
            : V.default.createElement(
                'tbody',
                null,
                null == E
                  ? void 0
                  : E.map((t, e) =>
                      V.default.createElement(
                        V.default.Fragment,
                        null,
                        V.default.createElement(
                          'tr',
                          { key: e },
                          r &&
                            V.default.createElement(
                              'td',
                              {
                                style: { textAlign: n || 'left', cursor: 'pointer' },
                                onClick: () => j(t, e),
                              },
                              V.default.createElement(Rt, null),
                            ),
                          l &&
                            V.default.createElement(
                              'td',
                              { style: { textAlign: n || 'left', cursor: 'pointer' } },
                              V.default.createElement('input', {
                                className: 'radioBox',
                                type: 'radio',
                                checked: _ == t,
                                onClick: () => I(t),
                              }),
                            ),
                          i &&
                            V.default.createElement(
                              'td',
                              { style: { textAlign: n || 'left', cursor: 'pointer' } },
                              V.default.createElement(
                                Z,
                                { checked: -1 != k.indexOf(t), checkCallback: (e) => z(e, t) },
                                -1 == k.indexOf(t),
                              ),
                            ),
                          P(t),
                        ),
                        t.openLine &&
                          V.default.createElement(
                            'tr',
                            null,
                            V.default.createElement(
                              'td',
                              {
                                style: { textAlign: n || 'left' },
                                colSpan: Object.keys(E[0]).length + 1,
                              },
                              t.openLine,
                            ),
                          ),
                      ),
                    ),
              ),
        ),
      ),
      p &&
        V.default.createElement(
          'div',
          { className: 'pagination', style: J },
          V.default.createElement(Kt, {
            style: J,
            total: a.length,
            showSizeChanger: !0,
            pageSizeOptions: R || dn,
            showJumpInput: !0,
            changePageSizeCallback: (t) => {
              $(t), w((e) => [...a.slice(0, t)]), v && v(t, a.slice(0, t));
            },
            changePageCallback: (t) => {
              q(t),
                w((e) => [...a.slice((t - 1) * C, (t - 1) * C + C)]),
                g && g(t, a.slice((t - 1) * C, (t - 1) * C + C));
            },
          }),
        ),
    );
  });
  const pn = U.createContext({});
  var mn = U.memo((e) => {
    var {
        children: e,
        defaultActive: t,
        accordion: n,
        noBorder: r,
        headerAlign: a = 'left',
        lazyLoad: l = !1,
        toggleCallback: i,
      } = e,
      [t, o] = U.useState(t || []),
      t = {
        activeKeyList: t,
        setActiveKeyList: o,
        accordion: n,
        headerAlign: a,
        lazyLoad: l,
        toggleCallback: i,
      };
    return V.default.createElement(
      pn.Provider,
      { value: t },
      V.default.createElement(
        'div',
        {
          className: 'collapse-box',
          style: r ? {} : { border: '1px solid rgba(229, 230, 235, 1)' },
        },
        e,
      ),
    );
  });
  const gn = (e) => {
    const [t, n] = U.useState(e),
      r = U.useRef(),
      a = U.useCallback((e, t) => {
        (r.current = t), n(e);
      }, []);
    return (
      U.useEffect(() => {
        r.current && r.current(t);
      }, [t]),
      [t, a]
    );
  };
  var vn = U.memo((e) => {
    const { children: t, header: n, disabled: r = !1, listKey: a, extra: l } = e,
      [i, o] = gn(0),
      [c, u] = gn(!1),
      {
        activeKeyList: s,
        setActiveKeyList: f,
        accordion: d,
        headerAlign: h,
        lazyLoad: p,
        toggleCallback: m,
      } = U.useContext(pn),
      g =
        (U.useEffect(() => {
          -1 == s.indexOf(Number(a))
            ? o(0)
            : o(document.querySelector('.collapse-item-content').scrollHeight + 30);
        }, [s]),
        () => {
          if (!r) {
            let t = i;
            0 == t
              ? p && !c
                ? u(!0, (e) => {
                    (t = document.querySelector('.collapse-item-content').scrollHeight + 30),
                      d
                        ? (f([Number(a)]), m && m([Number(a)]))
                        : f(
                            (e) => (
                              m && m([...[...e, Number(a)].sort()]), [...[...e, Number(a)].sort()]
                            ),
                          ),
                      o(t);
                  })
                : ((t = document.querySelector('.collapse-item-content').scrollHeight + 30),
                  d
                    ? (f([Number(a)]), m && m([Number(a)]))
                    : f(
                        (e) => (
                          m && m([...[...e, Number(a)].sort()]), [...[...e, Number(a)].sort()]
                        ),
                      ),
                  o(t))
              : ((t = 0),
                f(
                  (e) => (
                    e.splice(
                      e.findIndex((e, t) => Number(t) + 1 == a),
                      1,
                    ),
                    [...e.sort()]
                  ),
                ),
                o(t));
          }
        }),
      v = U.useMemo(() => ({ maxHeight: i + 'px' }), [i]),
      y = U.useMemo(
        () =>
          'left' == h
            ? V.default.createElement(
                'div',
                {
                  className: 'collapse-item-header',
                  onClick: g,
                  style: r ? { color: '#c9cdd4', cursor: 'not-allowed' } : {},
                },
                V.default.createElement(
                  'div',
                  { className: 'left' },
                  V.default.createElement(
                    'div',
                    { className: 'header-icon' },
                    '0px' == v.maxHeight
                      ? V.default.createElement(it, null)
                      : V.default.createElement(K, null),
                  ),
                  V.default.createElement('div', { className: 'header-text' }, n),
                ),
                l && V.default.createElement('div', { className: 'right' }, l),
              )
            : 'right' == h
            ? V.default.createElement(
                'div',
                {
                  className: 'collapse-item-header',
                  onClick: g,
                  style: r ? { color: '#c9cdd4', cursor: 'not-allowed' } : {},
                },
                V.default.createElement(
                  'div',
                  { className: 'left' },
                  V.default.createElement('div', { className: 'header-text' }, n),
                ),
                V.default.createElement(
                  'div',
                  { className: 'right' },
                  l,
                  V.default.createElement(
                    'div',
                    { className: 'header-icon' },
                    '0px' == v.maxHeight
                      ? V.default.createElement(at, null)
                      : V.default.createElement(K, null),
                  ),
                ),
              )
            : 'hide' == h
            ? V.default.createElement(
                'div',
                {
                  className: 'collapse-item-header',
                  onClick: g,
                  style: r ? { color: '#c9cdd4', cursor: 'not-allowed' } : {},
                },
                V.default.createElement(
                  'div',
                  { className: 'left' },
                  V.default.createElement('div', { className: 'header-text' }, n),
                ),
                V.default.createElement('div', { className: 'right' }, l),
              )
            : void 0,
        [h, v, r],
      );
    return V.default.createElement(
      'div',
      { className: 'collapse-item' },
      y,
      V.default.createElement(
        'div',
        { className: 'collapse-item-content', style: v },
        (!p || c) && t,
      ),
    );
  });
  const yn = U.createContext({});
  var bn = U.memo((e) => {
      var t = e['children'];
      return V.default.createElement(
        yn.Provider,
        { value: e },
        V.default.createElement('div', { className: 'avatar-group' }, t),
      );
    }),
    xn = U.memo((e) => {
      const {
          children: t,
          style: n = {},
          size: r = 40,
          shape: a,
          autoFixFontSize: l = !0,
          triggerType: i = 'button',
          triggerIcon: o,
          triggerClick: c,
        } = e,
        u = U.useContext(yn),
        s = U.useRef(null),
        f =
          (U.useEffect(() => {
            f();
          }, []),
          () => {
            var e, t;
            l &&
              s.current &&
              0 < (e = s.current.clientWidth) - (t = u.size || r || 40) &&
              (s.current.style.transform = `scale(${1 - (e - t + 5) / 100})`);
          }),
        d = U.useMemo(() => {
          const e = Object.assign(Object.assign({}, u.groupStyle), n);
          return (
            0 < Object.keys(u).length
              ? u.size &&
                ((e.width = u.size + 'px'),
                (e.height = u.size + 'px'),
                (e.fontSize = u.size / 3 + 'px'))
              : r && ((e.width = r + 'px'), (e.height = r + 'px'), (e.fontSize = r / 3 + 'px')),
            a && 'square' === a && (e.borderRadius = '5px'),
            e
          );
        }, [n, a, r, u]),
        h = U.useMemo(
          () =>
            'square' == a ? { right: '-2px', bottom: '-2px' } : { right: '2px', bottom: '-2px' },
          [i],
        ),
        p = () => {
          c && c();
        };
      return V.default.createElement(
        'div',
        { className: 'avatar', style: d },
        t && 'img' === t.type
          ? t
          : V.default.createElement('div', { ref: s, className: 'text-ref' }, t),
        'button' === i &&
          o &&
          V.default.createElement('div', { className: 'button-dialog', style: h, onClick: p }, o),
        'mask' === i &&
          o &&
          V.default.createElement(
            'div',
            { className: 'dialog' },
            V.default.createElement('div', { className: 'icon', onClick: p }, o),
          ),
      );
    }),
    En = U.memo((e) => {
      const {
          children: t,
          style: n = {},
          count: r,
          maxCount: a = 99,
          dotStyle: l = {},
          dot: i,
          offset: o = [2, 2],
          text: c,
        } = e,
        u =
          (console.log(t),
          U.useMemo(() => {
            if (r) return a && r > a ? a + '+' : r;
          }, [r, a])),
        s = U.useMemo(
          () =>
            t
              ? 1 < String(u).length
                ? { borderRadius: '20px' }
                : { borderRadius: '50%' }
              : 1 == String(u).length
              ? { padding: '' }
              : { padding: '0 6px' },
          [t, r, a],
        );
      return V.default.createElement(
        V.default.Fragment,
        null,
        t
          ? V.default.createElement(
              'div',
              { className: 'badge', style: n },
              t,
              i
                ? V.default.createElement('span', {
                    className: 'dot',
                    style: Object.assign(Object.assign({}, l), {
                      right: o[0] + 'px',
                      top: o[1] + 'px',
                    }),
                  })
                : c
                ? V.default.createElement('span', { className: 'badge-text' }, c)
                : V.default.createElement(
                    'span',
                    { className: 'count', style: Object.assign(Object.assign({}, l), s) },
                    u,
                  ),
            )
          : V.default.createElement(
              'div',
              {
                className: 'no-child-badge',
                style: Object.assign(Object.assign(Object.assign({}, n), l), s),
              },
              u,
            ),
      );
    }),
    wn = U.memo((e) => {
      const { children: t, style: n = {} } = e,
        r = U.useContext(_n)['size'],
        a = U.useMemo(() => {
          const e = n;
          switch (r) {
            case 'default':
              e.padding = '13px 20px';
              break;
            case 'small':
              e.padding = '9px 20px';
              break;
            case 'large':
              e.padding = '17px 20px';
          }
          return e;
        }, [r]);
      return V.default.createElement('div', { className: 'list-item', style: a }, t);
    });
  const _n = U.createContext({}),
    kn = V.default.forwardRef((e) => {
      const {
          style: t = {},
          dataSource: r,
          render: n,
          header: a,
          size: l = 'default',
          lazyLoad: i = !1,
          defaultShowNum: o = 5,
          virtualListProps: c,
          virtualShowNum: u = 5,
          lazyScrollToBottom: s,
        } = e,
        f = { size: l },
        [d, h] = U.useState(r ? [...r] : []),
        [p, m] = U.useState(0),
        g = U.useRef(null),
        v = U.useRef(null),
        y = U.useRef(null);
      U.useEffect(() => {
        var t;
        if (i && o) h((e) => [...r.slice(0, o)]);
        else if (c) {
          let e = null == (t = document.querySelector('.list-item')) ? void 0 : t.clientHeight;
          switch (l) {
            case 'default':
              e += 26;
              break;
            case 'small':
              e += 18;
              break;
            case 'large':
              e += 34;
          }
          (g.current = e), h((e) => [...r.slice(0, u + 2)]);
        }
      }, []);
      var e = U.useMemo(() => {
          const e = {};
          switch (l) {
            case 'default':
              e.padding = '12px 20px';
              break;
            case 'small':
              e.padding = '8px 20px';
              break;
            case 'large':
              e.padding = '16px 20px';
          }
          return e;
        }, [l]),
        b = U.useMemo(() => t, [t]),
        x = U.useMemo(() => {
          const e = {};
          return i && o && ((e.height = '400px'), (e.overflow = 'scroll')), e;
        }, [i, o]);
      return V.default.createElement(
        _n.Provider,
        { value: f },
        V.default.createElement(
          'div',
          { className: 'rList', style: b },
          V.default.createElement('div', { className: 'list-header', style: e }, a),
          c
            ? V.default.createElement(
                'div',
                {
                  className: 'victurl-list-content',
                  style: { height: u * g.current + 'px' },
                  ref: y,
                  onScroll: () => {
                    const t = Math.floor(y.current.scrollTop / g.current);
                    m(y.current.scrollTop), h((e) => [...r.slice(t, t + u + 2)]);
                  },
                },
                V.default.createElement(
                  'div',
                  {
                    className: 'victurl-relly-content',
                    style: {
                      height: r.length * g.current - p + 'px',
                      transform: `translate(0, ${p}px)`,
                    },
                  },
                  0 !== d.length && d.map(n),
                ),
              )
            : V.default.createElement(
                'div',
                {
                  className: 'list-content',
                  style: x,
                  ref: v,
                  onScroll: () => {
                    var { scrollHeight: e, clientHeight: t, scrollTop: n } = v.current,
                      e = e - t - n;
                    0 == e
                      ? (s && s(e, !0),
                        setTimeout(() => {
                          h((e) => [...(e = r.slice(0, e.length + o))]);
                        }, 500))
                      : s && s(e, !1);
                  },
                },
                0 !== d.length && d.map(n),
              ),
        ),
      );
    });
  (kn.Item = wn), (kn.displayName = 'List');
  let h,
    p = 0,
    E = 0;
  function a(e, t) {
    let n,
      r = {},
      a = 3e3,
      l = 'top',
      i = !1;
    'object' == typeof t
      ? ((r = t.style || {}),
        (a = t.duration || 3e3),
        (n = t.content),
        (l = t.position || 'top'),
        (i = !!t.clearable && t.clearable))
      : 'string' == typeof t && (n = t);
    const o = document.createElement('div'),
      c = String(Math.floor(1e3 * Math.random()));
    o.setAttribute('class', l + '-' + c),
      h ||
        ((h = document.createElement('div')).setAttribute('class', 'all-container'),
        document.body.appendChild(h)),
      h.appendChild(o),
      setTimeout(() => {
        Array.prototype.slice.call(null == h ? void 0 : h.childNodes).includes(o) &&
          (Nn(Array.prototype.slice.call(null == h ? void 0 : h.childNodes), l),
          null != h && h.removeChild(o),
          'top' === l ? p-- : E--);
      }, a + 200),
      A.default.render(
        V.default.createElement(w, {
          style: r,
          content: n,
          type: e,
          duration: a,
          position: l,
          clearable: i,
          messageBoxId: c,
        }),
        o,
      );
  }
  function Nn(e, t) {
    var n, r;
    for (r in e) {
      const a = e[r].childNodes[0];
      null != (n = e[r].getAttribute('class')) &&
        n.startsWith(t) &&
        (a.style[t] = Number(a.style[t].split('p')[0]) - 70 + 'px');
    }
  }
  const w = (e) => {
    const {
        style: t,
        content: n,
        type: r,
        duration: a,
        position: l,
        clearable: i,
        messageBoxId: o,
      } = e,
      [c, u] = U.useState(1),
      s = U.useRef(null);
    U.useEffect(() => {
      'top' === l ? p++ : E++,
        setTimeout(() => {
          (s.current.style.transition = '0.2s linear'), (s.current.style.animation = 'none');
        }, 500),
        setTimeout(() => {
          u(0);
        }, a);
    }, []),
      U.useEffect(() => {
        var e = l || 'top';
        (null == s ? void 0 : s.current).style[e] = 70 * ('top' === e ? p : E) + 'px';
      }, [p, E]);
    e = U.useMemo(
      () =>
        'info' === r
          ? V.default.createElement(kt, { style: { color: '#1890ff', fontSize: '16px' } })
          : 'error' === r
          ? V.default.createElement(ht, { style: { color: '#f53f3f', fontSize: '16px' } })
          : 'normal' === r
          ? V.default.createElement(V.default.Fragment, null)
          : 'success' === r
          ? V.default.createElement(st, { style: { color: '#19b42a', fontSize: '16px' } })
          : 'warning' === r
          ? V.default.createElement(kt, { style: { color: '#fa7d00', fontSize: '16px' } })
          : 'loading' === r
          ? V.default.createElement(Pt, { style: { color: '#1890ff', fontSize: '16px' } })
          : void 0,
      [r],
    );
    return V.default.createElement(
      'div',
      { className: 'message-container', style: Object.assign({ opacity: c }, t), ref: s },
      e,
      V.default.createElement('span', { className: 'toast-content' }, n),
      i &&
        V.default.createElement(C, {
          onClick: () => {
            {
              var e = o,
                t = l,
                n;
              const r = document.querySelector('.all-container'),
                a = Array.prototype.slice.call(null == r ? void 0 : r.childNodes);
              for (n in a)
                if (a[n].getAttribute('class') === t + '-' + e) {
                  const e = a[n];
                  null != r && r.removeChild(e), 'top' === t ? p-- : E--, Nn(a.slice(Number(n)), t);
                }
              return;
            }
          },
        }),
    );
  };
  let _,
    S =
      ((w.info = (e) => a('info', e)),
      (w.success = (e) => a('success', e)),
      (w.error = (e) => a('error', e)),
      (w.normal = (e) => a('normal', e)),
      (w.warning = (e) => a('warning', e)),
      (w.loading = (e) => a('loading', e)),
      0),
    O = 0,
    j = 0,
    I = 0;
  function l(e, t) {
    let n,
      r = {},
      a = 3e3,
      l = '',
      i = '',
      o = 'topRight',
      c = !1,
      u = !1,
      s = { enter: 'OK', exit: 'Cancel' };
    'object' == typeof t
      ? ((l = t.title),
        (r = t.style || {}),
        (a = t.duration || 3e3),
        (i = t.content),
        (n = t.doneCallback),
        (o = t.position || 'topRight'),
        (c = !!t.clearable && t.clearable),
        (u = !!t.showFooter && t.showFooter),
        t.footerBtnVal && (s = t.footerBtnVal))
      : 'string' == typeof t && (i = t);
    const f = document.createElement('div'),
      d = String(Math.floor(1e3 * Math.random()));
    f.setAttribute('class', o + '-' + d),
      _ ||
        ((_ = document.createElement('div')).setAttribute('class', 'notification-container'),
        document.body.appendChild(_)),
      _.appendChild(f),
      setTimeout(() => {
        Array.prototype.slice.call(null == _ ? void 0 : _.childNodes).includes(f) &&
          (Sn(Array.prototype.slice.call(null == _ ? void 0 : _.childNodes), o),
          null != _ && _.removeChild(f),
          'topLeft' === o
            ? S--
            : 'topRight' === o
            ? O--
            : 'bottomLeft' === o
            ? j--
            : 'bottomRight' === o && I--);
      }, a + 200),
      A.default.render(
        V.default.createElement(z, {
          title: l,
          style: r,
          content: i,
          type: e,
          duration: a,
          position: o,
          clearable: c,
          showFooter: u,
          footerBtnVal: s,
          doneCallback: n,
          messageBoxId: d,
        }),
        f,
      );
  }
  function Cn(e, t, n) {
    const r = document.querySelector('.notification-container'),
      a = Array.prototype.slice.call(null == r ? void 0 : r.childNodes);
    for (var l in a)
      if (a[l].getAttribute('class') === t + '-' + e) {
        const e = a[l];
        console.log(e.childNodes),
          (e.childNodes[0].style.opacity = 0),
          setTimeout(() => {
            null != r && r.removeChild(e);
          }, 50),
          'topLeft' === t
            ? S--
            : 'topRight' === t
            ? O--
            : 'bottomLeft' === t
            ? j--
            : 'bottomRight' === t && I--,
          Sn(a.slice(Number(l)), t),
          n();
      }
  }
  function Sn(e, t) {
    var n,
      r,
      a = t.startsWith('top') ? 'top' : 'bottom';
    for (r in e) {
      const l = e[r].childNodes[0];
      if (null != (n = e[r].getAttribute('class')) && n.startsWith(a)) {
        const e =
          null == (n = document.querySelector('.notifica-container')) ? void 0 : n.clientHeight;
        l.style[a] = Number(l.style[a].split('p')[0]) - 30 - e + 'px';
      }
    }
  }
  const z = (e) => {
    const {
        style: t,
        title: n,
        content: r,
        type: a,
        duration: l,
        position: i,
        clearable: o,
        showFooter: c,
        footerBtnVal: u,
        doneCallback: s,
        messageBoxId: f,
      } = e,
      [d, h] = U.useState(1),
      p = U.useRef(null);
    U.useEffect(() => {
      'topLeft' === i
        ? S++
        : 'topRight' === i
        ? O++
        : 'bottomLeft' === i
        ? j++
        : 'bottomRight' === i && I++,
        setTimeout(() => {
          (p.current.style.transition = '0.2s linear'), (p.current.style.animation = 'none');
        }, 500),
        setTimeout(() => {
          h(0);
        }, l);
    }, []),
      U.useEffect(() => {
        var e = null != i && i.startsWith('top') ? 'top' : 'bottom';
        let t,
          n = 0;
        'topLeft' === i && 1 <= S
          ? ((n = p.current.clientHeight * (S - 1)), (t = S))
          : 'topRight' === i && 1 <= O
          ? ((n = p.current.clientHeight * (O - 1)), (t = O))
          : 'bottomLeft' === i && 1 <= j
          ? ((n = p.current.clientHeight * (j - 1)), (t = j))
          : 'bottomRight' === i && 1 <= I && ((n = p.current.clientHeight * (I - 1)), (t = I)),
          ((null == p ? void 0 : p.current).style[e] = 30 * t + n + 'px');
      }, [S, O, j, I]);
    var e = U.useMemo(
        () =>
          'info' === a
            ? V.default.createElement(kt, { style: { color: '#1890ff', fontSize: '24px' } })
            : 'error' === a
            ? V.default.createElement(ht, { style: { color: '#f53f3f', fontSize: '24px' } })
            : 'normal' === a
            ? V.default.createElement(V.default.Fragment, null)
            : 'success' === a
            ? V.default.createElement(st, { style: { color: '#19b42a', fontSize: '24px' } })
            : 'warning' === a
            ? V.default.createElement(kt, { style: { color: '#fa7d00', fontSize: '24px' } })
            : 'loading' === a
            ? V.default.createElement(Pt, { style: { color: '#1890ff', fontSize: '24px' } })
            : void 0,
        [a],
      ),
      m = U.useMemo(
        () => (null != i && i.includes('Left') ? { left: '20px' } : { right: '20px' }),
        [i],
      );
    return V.default.createElement(
      'div',
      {
        className: 'notifica-container',
        style: Object.assign(Object.assign({ opacity: d }, m), t),
        ref: p,
      },
      V.default.createElement(
        'div',
        { className: 'title' },
        V.default.createElement(
          'div',
          { className: 'title-left' },
          e,
          V.default.createElement('span', { className: 'title-content' }, n),
        ),
        o &&
          V.default.createElement(C, {
            className: 'close-icon',
            onClick: () => {
              Cn(f, i, () => {
                s && s(1);
              });
            },
          }),
      ),
      V.default.createElement('div', { className: 'notification-content' }, r),
      c &&
        V.default.createElement(
          'div',
          { className: 'notification-footer' },
          V.default.createElement('div', null),
          V.default.createElement(
            'div',
            null,
            V.default.createElement(
              g,
              {
                type: 'text',
                height: 30,
                handleClick: () => {
                  Cn(f, i, () => {
                    s && s(2);
                  });
                },
              },
              u.exit,
            ),
            V.default.createElement(
              g,
              {
                type: 'primary',
                height: 30,
                style: { marginLeft: '15px' },
                handleClick: () => {
                  Cn(f, i, () => {
                    s && s(3);
                  });
                },
              },
              u.enter,
            ),
          ),
        ),
    );
  };
  (z.info = (e) => l('info', e)),
    (z.success = (e) => l('success', e)),
    (z.error = (e) => l('error', e)),
    (z.normal = (e) => l('normal', e)),
    (z.warning = (e) => l('warning', e)),
    (z.loading = (e) => l('loading', e));
  class On {
    constructor(e, t, n) {
      (this.wrapperCol = e), (this.wrapperTol = t), (this.layout = n);
    }
    getStyle() {
      return Object.assign(
        { marginBottom: 20 + this.wrapperCol + 'px', marginTop: 20 + this.wrapperTol + 'px' },
        this.formatLayout(),
      );
    }
    formatLayout() {
      let e = {};
      switch (this.layout) {
        case 'horizontal':
          e = {};
          break;
        case 'vertical':
          e = { flexDirection: 'column', alignItems: 'flex-start' };
      }
      return e;
    }
  }
  class jn {
    constructor(e) {
      this.layout = e;
    }
    getStyle() {
      return Object.assign({}, this.getAlign());
    }
    getAlign() {
      let e = {};
      switch (this.layout) {
        case 'horizontal':
          e = {};
          break;
        case 'vertical':
          e = { textAlign: 'left', marginBottom: '5px' };
      }
      return e;
    }
  }
  const In = (e = !0) => {
      const t = new Date();
      return e
        ? `${t.getFullYear()}-${
            String(t.getMonth() + 1).length < 2 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1
          }-${String(t.getDate()).length < 2 ? '0' + t.getDate() : t.getDate()} ${
            String(t.getHours()).length < 2 ? '0' + t.getHours() : t.getHours()
          }:${String(t.getMinutes()).length < 2 ? '0' + t.getMinutes() : t.getMinutes()}:` +
            (String(t.getSeconds()).length < 2 ? '0' + t.getSeconds() : t.getSeconds())
        : `${t.getFullYear()}-${
            t.getMonth() + 1
          }-${t.getDate()} ${t.getHours()}:${t.getMinutes()}:` + t.getSeconds();
    },
    zn = U.createContext({}),
    M = {
      formRef: '',
      onSubmit: () => {},
      resetFields: () => {},
      validateFields: () => {},
      useFormContext: () => {},
    },
    Mn = (e) => {
      const { children: t, layout: n = 'horizontal', style: r, formField: a, disabled: l } = e,
        [f, i] = U.useState({}),
        o = { layout: n };
      function d(e) {
        const r = {};
        let a = '';
        for (var t in f)
          !(function e(t, n) {
            if (0 === (null == t ? void 0 : t.childNodes.length))
              'input' === a
                ? (r[n] = t.value)
                : 'select' === a &&
                  ('placeholder' === t.parentNode.getAttribute('class')
                    ? (r[n] = '')
                    : (r[n] = t.parentNode.innerText)),
                (a = '');
            else if (null !== t) {
              if ('' === a)
                switch (t.getAttribute('class')) {
                  case 'select':
                    a = 'select';
                    break;
                  case 'box':
                    a = 'input';
                }
              e(t.childNodes[0], n);
            }
          })(e.current.querySelector(' .form-item .' + t), t);
        return r;
      }
      const c = (e) => {
          var t = d(e),
            e = u(t, e);
          return 0 < Object.keys(e).length
            ? Object.assign({ submitResult: !1 }, { ruleResult: e })
            : Object.assign({ submitResult: !0 }, { result: t });
        },
        u = (o, c) => {
          void 0 === o && (o = d(c));
          const u = {};
          for (var s in o)
            if (f[s].rules) {
              let i = !0;
              f[s].rules.forEach((e) => {
                if (
                  (e.required && '' == o[s] && i) ||
                  (e.maxLength && o[s].length > e.maxLength && i) ||
                  (e.minLength && o[s].length < e.minLength && i) ||
                  (e.fn && !e.fn(o[s]))
                ) {
                  i = !1;
                  {
                    var t = ' .form-item .' + s,
                      n = ((e = e.message), s),
                      r = c;
                    u[n] = e;
                    const a = r.current.querySelector(t + ' .hide-rule-label'),
                      l = r.current.querySelector(t + ' .show-rule-label');
                    a ? (a.innerText = e) : (l.innerText = e),
                      null != a && a.setAttribute('class', 'show-rule-label');
                  }
                }
                i &&
                  c.current.querySelector(` .form-item .${s} .show-rule-label`) &&
                  null != (n = c.current.querySelector(` .form-item .${s} .show-rule-label`)) &&
                  n.setAttribute('class', 'hide-rule-label');
              });
            }
          return u;
        },
        s = (a) => {
          let l = '';
          for (var e in f)
            !(function e(t, n) {
              var r;
              if (0 === (null == t ? void 0 : t.childNodes.length)) {
                if ('input' === l) t.value = '';
                else if ('select' === l && null !== a.current.querySelector('.size'))
                  (a.current.querySelector('.size').innerText = '请选择'),
                    null != (r = a.current.querySelector('.size')) &&
                      r.setAttribute('class', 'placeholder');
                else if ('datePicker' === l) {
                  const l = a.current.querySelectorAll('.rangePicker input');
                  if (((l[0].value = In(!1).split(' ')[0]), 2 === l.length)) {
                    const a = In(!1).split(' ')[0].split('-');
                    (a[1] = Number(a[1]) + 1), (l[1].value = a.join('-'));
                  }
                }
                l = '';
              } else if (null !== t) {
                if ('' === l)
                  switch (t.getAttribute('class')) {
                    case 'select':
                      l = 'select';
                      break;
                    case 'box':
                      l = 'input';
                      break;
                    case 'rangePicker':
                      l = 'datePicker';
                  }
                e(t.childNodes[0]);
              }
            })(a.current.querySelector(' .form-item .' + e));
        },
        h = (e) => d(e);
      return (
        U.useEffect(() => {
          const n = {};
          t.forEach((e) => {
            var t;
            e.props.field &&
              ((t = e.props.field), (n[t] = {}), (n[t].rules = e.props.rules || null));
          }),
            i(n);
        }, []),
        U.useEffect(() => {
          (M.onSubmit = c),
            (M.resetFields = s),
            (M.validateFields = u),
            (M.useFormContext = h),
            (M.formRef = a);
        }, [f]),
        V.default.createElement(
          zn.Provider,
          { value: o },
          V.default.createElement(
            'div',
            { className: 'form', style: r, ref: a || null },
            l && V.default.createElement('div', { className: 'disabled' }),
            t,
          ),
        )
      );
    };
  (Mn.Item = (e) => {
    const {
        children: t,
        style: n = {},
        label: r,
        wrapperCol: a = 0,
        wrapperTol: l = 0,
        field: i,
        rules: o = [],
        disabled: c = !1,
      } = e,
      [u, s] = U.useState({}),
      [f, d] = U.useState({}),
      h = (function () {
        const t = U.useContext(zn);
        return { get: (e) => t[e] || null };
      })(),
      p =
        (U.useEffect(() => {
          s(Object.assign(Object.assign({}, p()), n)), d(m());
        }, [e]),
        U.useCallback(() => new On(a, l, h.get('layout')).getStyle(), [a, l, h.get('layout')])),
      m = U.useCallback(() => new jn(h.get('layout')).getStyle(), [h.get('layout')]);
    return V.default.createElement(
      'div',
      { className: 'form-item', style: u },
      V.default.createElement(
        'div',
        { className: 'label', style: f },
        0 < o.length &&
          V.default.createElement(
            'svg',
            { fill: 'currentColor', viewBox: '0 0 1024 1024', width: '0.5em', height: '0.5em' },
            V.default.createElement('path', {
              d: 'M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z',
            }),
          ),
        r || '',
      ),
      V.default.createElement(
        'div',
        {
          className: i || 'content',
          style: 'horizontal' === h.get('layout') ? { position: 'relative' } : {},
        },
        t,
        c && V.default.createElement('div', { className: 'form-item-disabled' }),
        i &&
          0 < o.length &&
          V.default.createElement('div', { className: 'hide-rule-label' }, o[0].message),
      ),
    );
  }),
    (Mn.useForm = () => M),
    (e.Affix = Zt),
    (e.Avatar = xn),
    (e.AvatarGroup = bn),
    (e.Badge = En),
    (e.Button = g),
    (e.CheckBox = Z),
    (e.Collapse = mn),
    (e.CollapseItem = vn),
    (e.Content = R),
    (e.DatePicker = en),
    (e.Divider = i),
    (e.Footer = D),
    (e.Form = Mn),
    (e.Header = P),
    (e.Input = G),
    (e.Layout = c),
    (e.LazyLoad = tn),
    (e.List = kn),
    (e.Loading = (e) => {
      const {
          type: t = 'default',
          mask: n = !1,
          loadingText: r,
          icon: a,
          width: l = '2em',
          height: i = '2em',
          style: o = {},
        } = e,
        c = U.useRef(null),
        [u, s] = U.useState(0);
      U.useEffect(
        () => (
          (c.current = setInterval(() => {
            s((e) => (2 === e ? (e = 0) : e++, e));
          }, 500)),
          () => {
            clearInterval(c.current);
          }
        ),
        [],
      );
      e = U.useMemo(() => {
        const e = o;
        return (e.width = l), (e.height = i), e;
      }, [l, i, o]);
      return V.default.createElement(
        U.Fragment,
        null,
        n && V.default.createElement('div', { className: 'dialog' }),
        'default' === t
          ? V.default.createElement(
              'div',
              { className: 'loading', style: e },
              V.default.createElement(
                'div',
                { className: 'loading-container' },
                a ||
                  V.default.createElement(
                    'svg',
                    {
                      fill: 'none',
                      stroke: 'currentColor',
                      'stroke-width': '4',
                      width: l,
                      height: i,
                      viewBox: '0 0 48 48',
                      'aria-hidden': 'true',
                      focusable: 'false',
                    },
                    V.default.createElement('path', {
                      d: 'M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6',
                    }),
                  ),
              ),
              r && V.default.createElement('div', { className: 'text' }, r),
            )
          : V.default.createElement(
              'div',
              { className: 'dot-loading' },
              new Array(3)
                .fill('')
                .map((e, t) =>
                  V.default.createElement('div', { className: u === t ? 'dot-active' : 'dot' }, e),
                ),
            ),
      );
    }),
    (e.Menu = t),
    (e.Message = w),
    (e.Notification = z),
    (e.Pagination = Kt),
    (e.Popover = fn),
    (e.Radio = n),
    (e.RadioGroup = re),
    (e.Rate = ln),
    (e.Select = Gt),
    (e.Slider = L),
    (e.Step = rn),
    (e.Steps = nn),
    (e.Swiper = sn),
    (e.Table = hn),
    (e.Tree = on),
    (e.TreeView = cn),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
