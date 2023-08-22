'use strict';
(() => {
  var bt = Object.create;
  var dt = Object.defineProperty;
  var _t = Object.getOwnPropertyDescriptor;
  var Ot = Object.getOwnPropertyNames;
  var Et = Object.getPrototypeOf,
    At = Object.prototype.hasOwnProperty;
  var kt = (j, g) => () => (g || j((g = { exports: {} }).exports, g), g.exports);
  var wt = (j, g, p, P) => {
    if ((g && typeof g === 'object') || typeof g === 'function')
      for (let w of Ot(g))
        !At.call(j, w) &&
          w !== p &&
          dt(j, w, { get: () => g[w], enumerable: !(P = _t(g, w)) || P.enumerable });
    return j;
  };
  var Nt = (j, g, p) => (
    (p = j != null ? bt(Et(j)) : {}),
    wt(g || !j || !j.__esModule ? dt(p, 'default', { value: j, enumerable: !0 }) : p, j)
  );
  var pt = kt((ct, ht) => {
    (function (g, p) {
      typeof ct === 'object' && typeof ht === 'object'
        ? (ht.exports = p())
        : typeof define === 'function' && define.amd
        ? define([], p)
        : typeof ct === 'object'
        ? (ct.Quill = p())
        : (g.Quill = p());
    })(typeof self !== 'undefined' ? self : ct, function () {
      return (function (j) {
        var g = {};
        function p(P) {
          if (g[P]) return g[P].exports;
          var w = (g[P] = { i: P, l: !1, exports: {} });
          return j[P].call(w.exports, w, w.exports, p), (w.l = !0), w.exports;
        }
        return (
          (p.m = j),
          (p.c = g),
          (p.d = function (P, w, O) {
            p.o(P, w) || Object.defineProperty(P, w, { configurable: !1, enumerable: !0, get: O });
          }),
          (p.n = function (P) {
            var w =
              P && P.__esModule
                ? function () {
                    return P.default;
                  }
                : function () {
                    return P;
                  };
            return p.d(w, 'a', w), w;
          }),
          (p.o = function (P, w) {
            return Object.prototype.hasOwnProperty.call(P, w);
          }),
          (p.p = ''),
          p((p.s = 109))
        );
      })([
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(17),
            w = p(18),
            O = p(19),
            v = p(45),
            d = p(46),
            s = p(47),
            o = p(48),
            t = p(49),
            e = p(12),
            u = p(32),
            l = p(33),
            a = p(31),
            i = p(1),
            r = {
              Scope: i.Scope,
              create: i.create,
              find: i.find,
              query: i.query,
              register: i.register,
              Container: P.default,
              Format: w.default,
              Leaf: O.default,
              Embed: o.default,
              Scroll: v.default,
              Block: s.default,
              Inline: d.default,
              Text: t.default,
              Attributor: {
                Attribute: e.default,
                Class: u.default,
                Style: l.default,
                Store: a.default,
              },
            };
          g.default = r;
        },
        function (j, g, p) {
          'use strict';
          var P =
            (this && this.__extends) ||
            (function () {
              var a =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (i, r) {
                    i.__proto__ = r;
                  }) ||
                function (i, r) {
                  for (var f in r) r.hasOwnProperty(f) && (i[f] = r[f]);
                };
              return function (i, r) {
                a(i, r);
                function f() {
                  this.constructor = i;
                }
                i.prototype =
                  r === null ? Object.create(r) : ((f.prototype = r.prototype), new f());
              };
            })();
          Object.defineProperty(g, '__esModule', { value: !0 });
          var w = (function (a) {
            P(i, a);
            function i(r) {
              var f = this;
              return (
                (r = '[Parchment] ' + r),
                (f = a.call(this, r) || this),
                (f.message = r),
                (f.name = f.constructor.name),
                f
              );
            }
            return i;
          })(Error);
          g.ParchmentError = w;
          var O = {},
            v = {},
            d = {},
            s = {};
          g.DATA_KEY = '__blot';
          var o;
          (function (a) {
            (a[(a.TYPE = 3)] = 'TYPE'),
              (a[(a.LEVEL = 12)] = 'LEVEL'),
              (a[(a.ATTRIBUTE = 13)] = 'ATTRIBUTE'),
              (a[(a.BLOT = 14)] = 'BLOT'),
              (a[(a.INLINE = 7)] = 'INLINE'),
              (a[(a.BLOCK = 11)] = 'BLOCK'),
              (a[(a.BLOCK_BLOT = 10)] = 'BLOCK_BLOT'),
              (a[(a.INLINE_BLOT = 6)] = 'INLINE_BLOT'),
              (a[(a.BLOCK_ATTRIBUTE = 9)] = 'BLOCK_ATTRIBUTE'),
              (a[(a.INLINE_ATTRIBUTE = 5)] = 'INLINE_ATTRIBUTE'),
              (a[(a.ANY = 15)] = 'ANY');
          })((o = g.Scope || (g.Scope = {})));
          function t(a, i) {
            var r = u(a);
            if (r == null) throw new w('Unable to create ' + a + ' blot');
            var f = r,
              n = a instanceof Node || a.nodeType === Node.TEXT_NODE ? a : f.create(i);
            return new f(n, i);
          }
          g.create = t;
          function e(a, i) {
            return (
              i === void 0 && (i = !1),
              a == null
                ? null
                : a[g.DATA_KEY] != null
                ? a[g.DATA_KEY].blot
                : i
                ? e(a.parentNode, i)
                : null
            );
          }
          g.find = e;
          function u(a, i) {
            i === void 0 && (i = o.ANY);
            var r;
            if (typeof a === 'string') r = s[a] || O[a];
            else if (a instanceof Text || a.nodeType === Node.TEXT_NODE) r = s.text;
            else if (typeof a === 'number')
              a & o.LEVEL & o.BLOCK ? (r = s.block) : a & o.LEVEL & o.INLINE && (r = s.inline);
            else if (a instanceof HTMLElement) {
              var f = (a.getAttribute('class') || '').split(/\s+/);
              for (var n in f) if (((r = v[f[n]]), r)) break;
              r = r || d[a.tagName];
            }
            return r == null ? null : i & o.LEVEL & r.scope && i & o.TYPE & r.scope ? r : null;
          }
          g.query = u;
          function l() {
            for (var a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
            if (a.length > 1)
              return a.map(function (n) {
                return l(n);
              });
            var r = a[0];
            if (typeof r.blotName !== 'string' && typeof r.attrName !== 'string')
              throw new w('Invalid definition');
            if (r.blotName === 'abstract') throw new w('Cannot register abstract class');
            if (((s[r.blotName || r.attrName] = r), typeof r.keyName === 'string'))
              O[r.keyName] = r;
            else if ((r.className != null && (v[r.className] = r), r.tagName != null)) {
              Array.isArray(r.tagName)
                ? (r.tagName = r.tagName.map(function (n) {
                    return n.toUpperCase();
                  }))
                : (r.tagName = r.tagName.toUpperCase());
              var f = Array.isArray(r.tagName) ? r.tagName : [r.tagName];
              f.forEach(function (n) {
                (d[n] == null || r.className == null) && (d[n] = r);
              });
            }
            return r;
          }
          g.register = l;
        },
        function (j, g, p) {
          var P = p(51),
            w = p(11),
            O = p(3),
            v = p(20),
            d = String.fromCharCode(0),
            s = function (o) {
              Array.isArray(o)
                ? (this.ops = o)
                : o != null && Array.isArray(o.ops)
                ? (this.ops = o.ops)
                : (this.ops = []);
            };
          (s.prototype.insert = function (o, t) {
            var e = {};
            return o.length === 0
              ? this
              : ((e.insert = o),
                t != null &&
                  typeof t === 'object' &&
                  Object.keys(t).length > 0 &&
                  (e.attributes = t),
                this.push(e));
          }),
            (s.prototype.delete = function (o) {
              return o <= 0 ? this : this.push({ delete: o });
            }),
            (s.prototype.retain = function (o, t) {
              if (o <= 0) return this;
              var e = { retain: o };
              return (
                t != null &&
                  typeof t === 'object' &&
                  Object.keys(t).length > 0 &&
                  (e.attributes = t),
                this.push(e)
              );
            }),
            (s.prototype.push = function (o) {
              var t = this.ops.length,
                e = this.ops[t - 1];
              if (((o = O(!0, {}, o)), typeof e === 'object')) {
                if (typeof o.delete === 'number' && typeof e.delete === 'number')
                  return (this.ops[t - 1] = { delete: e.delete + o.delete }), this;
                if (
                  typeof e.delete === 'number' &&
                  o.insert != null &&
                  ((t -= 1), (e = this.ops[t - 1]), typeof e !== 'object')
                )
                  return this.ops.unshift(o), this;
                if (w(o.attributes, e.attributes)) {
                  if (typeof o.insert === 'string' && typeof e.insert === 'string')
                    return (
                      (this.ops[t - 1] = { insert: e.insert + o.insert }),
                      typeof o.attributes === 'object' &&
                        (this.ops[t - 1].attributes = o.attributes),
                      this
                    );
                  if (typeof o.retain === 'number' && typeof e.retain === 'number')
                    return (
                      (this.ops[t - 1] = { retain: e.retain + o.retain }),
                      typeof o.attributes === 'object' &&
                        (this.ops[t - 1].attributes = o.attributes),
                      this
                    );
                }
              }
              return t === this.ops.length ? this.ops.push(o) : this.ops.splice(t, 0, o), this;
            }),
            (s.prototype.chop = function () {
              var o = this.ops[this.ops.length - 1];
              return o && o.retain && !o.attributes && this.ops.pop(), this;
            }),
            (s.prototype.filter = function (o) {
              return this.ops.filter(o);
            }),
            (s.prototype.forEach = function (o) {
              this.ops.forEach(o);
            }),
            (s.prototype.map = function (o) {
              return this.ops.map(o);
            }),
            (s.prototype.partition = function (o) {
              var t = [],
                e = [];
              return (
                this.forEach(function (u) {
                  var l = o(u) ? t : e;
                  l.push(u);
                }),
                [t, e]
              );
            }),
            (s.prototype.reduce = function (o, t) {
              return this.ops.reduce(o, t);
            }),
            (s.prototype.changeLength = function () {
              return this.reduce(function (o, t) {
                return t.insert ? o + v.length(t) : t.delete ? o - t.delete : o;
              }, 0);
            }),
            (s.prototype.length = function () {
              return this.reduce(function (o, t) {
                return o + v.length(t);
              }, 0);
            }),
            (s.prototype.slice = function (o, t) {
              (o = o || 0), typeof t !== 'number' && (t = 1 / 0);
              for (var e = [], u = v.iterator(this.ops), l = 0; l < t && u.hasNext(); ) {
                var a;
                l < o ? (a = u.next(o - l)) : ((a = u.next(t - l)), e.push(a)), (l += v.length(a));
              }
              return new s(e);
            }),
            (s.prototype.compose = function (o) {
              for (
                var t = v.iterator(this.ops), e = v.iterator(o.ops), u = new s();
                t.hasNext() || e.hasNext();

              )
                if (e.peekType() === 'insert') u.push(e.next());
                else if (t.peekType() === 'delete') u.push(t.next());
                else {
                  var l = Math.min(t.peekLength(), e.peekLength()),
                    a = t.next(l),
                    i = e.next(l);
                  if (typeof i.retain === 'number') {
                    var r = {};
                    typeof a.retain === 'number' ? (r.retain = l) : (r.insert = a.insert);
                    var f = v.attributes.compose(
                      a.attributes,
                      i.attributes,
                      typeof a.retain === 'number'
                    );
                    f && (r.attributes = f), u.push(r);
                  } else typeof i.delete === 'number' && typeof a.retain === 'number' && u.push(i);
                }
              return u.chop();
            }),
            (s.prototype.concat = function (o) {
              var t = new s(this.ops.slice());
              return (
                o.ops.length > 0 && (t.push(o.ops[0]), (t.ops = t.ops.concat(o.ops.slice(1)))), t
              );
            }),
            (s.prototype.diff = function (o, t) {
              if (this.ops === o.ops) return new s();
              var e = [this, o].map(function (r) {
                  return r
                    .map(function (f) {
                      if (f.insert != null) return typeof f.insert === 'string' ? f.insert : d;
                      var n = r === o ? 'on' : 'with';
                      throw new Error('diff() called ' + n + ' non-document');
                    })
                    .join('');
                }),
                u = new s(),
                l = P(e[0], e[1], t),
                a = v.iterator(this.ops),
                i = v.iterator(o.ops);
              return (
                l.forEach(function (r) {
                  for (var f = r[1].length; f > 0; ) {
                    var n = 0;
                    switch (r[0]) {
                      case P.INSERT:
                        (n = Math.min(i.peekLength(), f)), u.push(i.next(n));
                        break;
                      case P.DELETE:
                        (n = Math.min(f, a.peekLength())), a.next(n), u.delete(n);
                        break;
                      case P.EQUAL:
                        n = Math.min(a.peekLength(), i.peekLength(), f);
                        var c = a.next(n),
                          k = i.next(n);
                        w(c.insert, k.insert)
                          ? u.retain(n, v.attributes.diff(c.attributes, k.attributes))
                          : u.push(k).delete(n);
                        break;
                    }
                    f -= n;
                  }
                }),
                u.chop()
              );
            }),
            (s.prototype.eachLine = function (o, t) {
              t =
                t ||
                `
`;
              for (var e = v.iterator(this.ops), u = new s(), l = 0; e.hasNext(); ) {
                if (e.peekType() !== 'insert') return;
                var a = e.peek(),
                  i = v.length(a) - e.peekLength(),
                  r = typeof a.insert === 'string' ? a.insert.indexOf(t, i) - i : -1;
                if (r < 0) u.push(e.next());
                else if (r > 0) u.push(e.next(r));
                else {
                  if (o(u, e.next(1).attributes || {}, l) === !1) return;
                  (l += 1), (u = new s());
                }
              }
              u.length() > 0 && o(u, {}, l);
            }),
            (s.prototype.transform = function (o, t) {
              if (((t = !!t), typeof o === 'number')) return this.transformPosition(o, t);
              for (
                var e = v.iterator(this.ops), u = v.iterator(o.ops), l = new s();
                e.hasNext() || u.hasNext();

              )
                if (e.peekType() === 'insert' && (t || u.peekType() !== 'insert'))
                  l.retain(v.length(e.next()));
                else if (u.peekType() === 'insert') l.push(u.next());
                else {
                  var a = Math.min(e.peekLength(), u.peekLength()),
                    i = e.next(a),
                    r = u.next(a);
                  if (i.delete) continue;
                  r.delete
                    ? l.push(r)
                    : l.retain(a, v.attributes.transform(i.attributes, r.attributes, t));
                }
              return l.chop();
            }),
            (s.prototype.transformPosition = function (o, t) {
              t = !!t;
              for (var e = v.iterator(this.ops), u = 0; e.hasNext() && u <= o; ) {
                var l = e.peekLength(),
                  a = e.peekType();
                if ((e.next(), a === 'delete')) {
                  o -= Math.min(l, o - u);
                  continue;
                } else a === 'insert' && (u < o || !t) && (o += l);
                u += l;
              }
              return o;
            }),
            (j.exports = s);
        },
        function (j, g) {
          'use strict';
          var p = Object.prototype.hasOwnProperty,
            P = Object.prototype.toString,
            w = function (d) {
              return typeof Array.isArray === 'function'
                ? Array.isArray(d)
                : P.call(d) === '[object Array]';
            },
            O = function (d) {
              if (!d || P.call(d) !== '[object Object]') return !1;
              var s = p.call(d, 'constructor'),
                o =
                  d.constructor &&
                  d.constructor.prototype &&
                  p.call(d.constructor.prototype, 'isPrototypeOf');
              if (d.constructor && !s && !o) return !1;
              var t;
              for (t in d);
              return typeof t === 'undefined' || p.call(d, t);
            };
          j.exports = function v() {
            var d,
              s,
              o,
              t,
              e,
              u,
              l = arguments[0],
              a = 1,
              i = arguments.length,
              r = !1;
            for (
              typeof l === 'boolean' && ((r = l), (l = arguments[1] || {}), (a = 2)),
                (l == null || (typeof l !== 'object' && typeof l !== 'function')) && (l = {});
              a < i;
              ++a
            )
              if (((d = arguments[a]), d != null))
                for (s in d)
                  (o = l[s]),
                    (t = d[s]),
                    l !== t &&
                      (r && t && (O(t) || (e = w(t)))
                        ? (e ? ((e = !1), (u = o && w(o) ? o : [])) : (u = o && O(o) ? o : {}),
                          (l[s] = v(r, u, t)))
                        : typeof t !== 'undefined' && (l[s] = t));
            return l;
          };
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.default = g.BlockEmbed = g.bubbleFormats = void 0);
          var P = (function () {
              function h(y, A) {
                for (var T = 0; T < A.length; T++) {
                  var q = A[T];
                  (q.enumerable = q.enumerable || !1),
                    (q.configurable = !0),
                    'value' in q && (q.writable = !0),
                    Object.defineProperty(y, q.key, q);
                }
              }
              return function (y, A, T) {
                return A && h(y.prototype, A), T && h(y, T), y;
              };
            })(),
            w = function h(y, A, T) {
              y === null && (y = Function.prototype);
              var q = Object.getOwnPropertyDescriptor(y, A);
              if (q === void 0) {
                var B = Object.getPrototypeOf(y);
                return B === null ? void 0 : h(B, A, T);
              }
              if ('value' in q) return q.value;
              var C = q.get;
              return C === void 0 ? void 0 : C.call(T);
            },
            O = p(3),
            v = f(O),
            d = p(2),
            s = f(d),
            o = p(0),
            t = f(o),
            e = p(16),
            u = f(e),
            l = p(6),
            a = f(l),
            i = p(7),
            r = f(i);
          function f(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function n(h, y) {
            if (!(h instanceof y)) throw new TypeError('Cannot call a class as a function');
          }
          function c(h, y) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y && (typeof y === 'object' || typeof y === 'function') ? y : h;
          }
          function k(h, y) {
            if (typeof y !== 'function' && y !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof y
              );
            (h.prototype = Object.create(y && y.prototype, {
              constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 },
            })),
              y && (Object.setPrototypeOf ? Object.setPrototypeOf(h, y) : (h.__proto__ = y));
          }
          var b = 1,
            _ = (function (h) {
              k(y, h);
              function y() {
                return (
                  n(this, y),
                  c(this, (y.__proto__ || Object.getPrototypeOf(y)).apply(this, arguments))
                );
              }
              return (
                P(y, [
                  {
                    key: 'attach',
                    value: function () {
                      w(
                        y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                        'attach',
                        this
                      ).call(this),
                        (this.attributes = new t.default.Attributor.Store(this.domNode));
                    },
                  },
                  {
                    key: 'delta',
                    value: function () {
                      return new s.default().insert(
                        this.value(),
                        (0, v.default)(this.formats(), this.attributes.values())
                      );
                    },
                  },
                  {
                    key: 'format',
                    value: function (T, q) {
                      var B = t.default.query(T, t.default.Scope.BLOCK_ATTRIBUTE);
                      B != null && this.attributes.attribute(B, q);
                    },
                  },
                  {
                    key: 'formatAt',
                    value: function (T, q, B, C) {
                      this.format(B, C);
                    },
                  },
                  {
                    key: 'insertAt',
                    value: function (T, q, B) {
                      if (
                        typeof q === 'string' &&
                        q.endsWith(`
`)
                      ) {
                        var C = t.default.create(N.blotName);
                        this.parent.insertBefore(C, T === 0 ? this : this.next),
                          C.insertAt(0, q.slice(0, -1));
                      } else
                        w(
                          y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                          'insertAt',
                          this
                        ).call(this, T, q, B);
                    },
                  },
                ]),
                y
              );
            })(t.default.Embed);
          _.scope = t.default.Scope.BLOCK_BLOT;
          var N = (function (h) {
            k(y, h);
            function y(A) {
              n(this, y);
              var T = c(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, A));
              return (T.cache = {}), T;
            }
            return (
              P(y, [
                {
                  key: 'delta',
                  value: function () {
                    return (
                      this.cache.delta == null &&
                        (this.cache.delta = this.descendants(t.default.Leaf)
                          .reduce(function (T, q) {
                            return q.length() === 0 ? T : T.insert(q.value(), m(q));
                          }, new s.default())
                          .insert(
                            `
`,
                            m(this)
                          )),
                      this.cache.delta
                    );
                  },
                },
                {
                  key: 'deleteAt',
                  value: function (T, q) {
                    w(
                      y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                      'deleteAt',
                      this
                    ).call(this, T, q),
                      (this.cache = {});
                  },
                },
                {
                  key: 'formatAt',
                  value: function (T, q, B, C) {
                    q <= 0 ||
                      (t.default.query(B, t.default.Scope.BLOCK)
                        ? T + q === this.length() && this.format(B, C)
                        : w(
                            y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                            'formatAt',
                            this
                          ).call(this, T, Math.min(q, this.length() - T - 1), B, C),
                      (this.cache = {}));
                  },
                },
                {
                  key: 'insertAt',
                  value: function (T, q, B) {
                    if (B != null)
                      return w(
                        y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                        'insertAt',
                        this
                      ).call(this, T, q, B);
                    if (q.length !== 0) {
                      var C = q.split(`
`),
                        Z = C.shift();
                      Z.length > 0 &&
                        (T < this.length() - 1 || this.children.tail == null
                          ? w(
                              y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                              'insertAt',
                              this
                            ).call(this, Math.min(T, this.length() - 1), Z)
                          : this.children.tail.insertAt(this.children.tail.length(), Z),
                        (this.cache = {}));
                      var M = this;
                      C.reduce(function (R, E) {
                        return (M = M.split(R, !0)), M.insertAt(0, E), E.length;
                      }, T + Z.length);
                    }
                  },
                },
                {
                  key: 'insertBefore',
                  value: function (T, q) {
                    var B = this.children.head;
                    w(
                      y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                      'insertBefore',
                      this
                    ).call(this, T, q),
                      B instanceof u.default && B.remove(),
                      (this.cache = {});
                  },
                },
                {
                  key: 'length',
                  value: function () {
                    return (
                      this.cache.length == null &&
                        (this.cache.length =
                          w(
                            y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                            'length',
                            this
                          ).call(this) + b),
                      this.cache.length
                    );
                  },
                },
                {
                  key: 'moveChildren',
                  value: function (T, q) {
                    w(
                      y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                      'moveChildren',
                      this
                    ).call(this, T, q),
                      (this.cache = {});
                  },
                },
                {
                  key: 'optimize',
                  value: function (T) {
                    w(
                      y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                      'optimize',
                      this
                    ).call(this, T),
                      (this.cache = {});
                  },
                },
                {
                  key: 'path',
                  value: function (T) {
                    return w(
                      y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                      'path',
                      this
                    ).call(this, T, !0);
                  },
                },
                {
                  key: 'removeChild',
                  value: function (T) {
                    w(
                      y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                      'removeChild',
                      this
                    ).call(this, T),
                      (this.cache = {});
                  },
                },
                {
                  key: 'split',
                  value: function (T) {
                    var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                    if (q && (T === 0 || T >= this.length() - b)) {
                      var B = this.clone();
                      return T === 0
                        ? (this.parent.insertBefore(B, this), this)
                        : (this.parent.insertBefore(B, this.next), B);
                    }
                    var C = w(
                      y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                      'split',
                      this
                    ).call(this, T, q);
                    return (this.cache = {}), C;
                  },
                },
              ]),
              y
            );
          })(t.default.Block);
          (N.blotName = 'block'),
            (N.tagName = 'P'),
            (N.defaultChild = 'break'),
            (N.allowedChildren = [a.default, t.default.Embed, r.default]);
          function m(h) {
            var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return h == null ||
              (typeof h.formats === 'function' && (y = (0, v.default)(y, h.formats())),
              h.parent == null ||
                h.parent.blotName == 'scroll' ||
                h.parent.statics.scope !== h.statics.scope)
              ? y
              : m(h.parent, y);
          }
          (g.bubbleFormats = m), (g.BlockEmbed = _), (g.default = N);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.default = g.overload = g.expandConfig = void 0);
          var P =
              typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function (M) {
                    return typeof M;
                  }
                : function (M) {
                    return M &&
                      typeof Symbol === 'function' &&
                      M.constructor === Symbol &&
                      M !== Symbol.prototype
                      ? 'symbol'
                      : typeof M;
                  },
            w = (function () {
              function M(R, E) {
                var S = [],
                  L = !0,
                  F = !1,
                  D = void 0;
                try {
                  for (
                    var x = R[Symbol.iterator](), I;
                    !(L = (I = x.next()).done) && (S.push(I.value), !(E && S.length === E));
                    L = !0
                  );
                } catch (U) {
                  (F = !0), (D = U);
                } finally {
                  try {
                    !L && x.return && x.return();
                  } finally {
                    if (F) throw D;
                  }
                }
                return S;
              }
              return function (R, E) {
                if (Array.isArray(R)) return R;
                if (Symbol.iterator in Object(R)) return M(R, E);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            O = (function () {
              function M(R, E) {
                for (var S = 0; S < E.length; S++) {
                  var L = E[S];
                  (L.enumerable = L.enumerable || !1),
                    (L.configurable = !0),
                    'value' in L && (L.writable = !0),
                    Object.defineProperty(R, L.key, L);
                }
              }
              return function (R, E, S) {
                return E && M(R.prototype, E), S && M(R, S), R;
              };
            })();
          p(50);
          var v = p(2),
            d = m(v),
            s = p(14),
            o = m(s),
            t = p(8),
            e = m(t),
            u = p(9),
            l = m(u),
            a = p(0),
            i = m(a),
            r = p(15),
            f = m(r),
            n = p(3),
            c = m(n),
            k = p(10),
            b = m(k),
            _ = p(34),
            N = m(_);
          function m(M) {
            return M && M.__esModule ? M : { default: M };
          }
          function h(M, R, E) {
            return (
              R in M
                ? Object.defineProperty(M, R, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (M[R] = E),
              M
            );
          }
          function y(M, R) {
            if (!(M instanceof R)) throw new TypeError('Cannot call a class as a function');
          }
          var A = (0, b.default)('quill'),
            T = (function () {
              O(M, null, [
                {
                  key: 'debug',
                  value: function (E) {
                    E === !0 && (E = 'log'), b.default.level(E);
                  },
                },
                {
                  key: 'find',
                  value: function (E) {
                    return E.__quill || i.default.find(E);
                  },
                },
                {
                  key: 'import',
                  value: function (E) {
                    return (
                      this.imports[E] == null &&
                        A.error('Cannot import ' + E + '. Are you sure it was registered?'),
                      this.imports[E]
                    );
                  },
                },
                {
                  key: 'register',
                  value: function (E, S) {
                    var L = this,
                      F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                    if (typeof E !== 'string') {
                      var D = E.attrName || E.blotName;
                      typeof D === 'string'
                        ? this.register('formats/' + D, E, S)
                        : Object.keys(E).forEach(function (x) {
                            L.register(x, E[x], S);
                          });
                    } else
                      this.imports[E] != null && !F && A.warn('Overwriting ' + E + ' with', S),
                        (this.imports[E] = S),
                        (E.startsWith('blots/') || E.startsWith('formats/')) &&
                        S.blotName !== 'abstract'
                          ? i.default.register(S)
                          : E.startsWith('modules') &&
                            typeof S.register === 'function' &&
                            S.register();
                  },
                },
              ]);
              function M(R) {
                var E = this,
                  S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (
                  (y(this, M),
                  (this.options = q(R, S)),
                  (this.container = this.options.container),
                  this.container == null)
                )
                  return A.error('Invalid Quill container', R);
                this.options.debug && M.debug(this.options.debug);
                var L = this.container.innerHTML.trim();
                this.container.classList.add('ql-container'),
                  (this.container.innerHTML = ''),
                  (this.container.__quill = this),
                  (this.root = this.addContainer('ql-editor')),
                  this.root.classList.add('ql-blank'),
                  this.root.setAttribute('data-gramm', !1),
                  (this.scrollingContainer = this.options.scrollingContainer || this.root),
                  (this.emitter = new e.default()),
                  (this.scroll = i.default.create(this.root, {
                    emitter: this.emitter,
                    whitelist: this.options.formats,
                  })),
                  (this.editor = new o.default(this.scroll)),
                  (this.selection = new f.default(this.scroll, this.emitter)),
                  (this.theme = new this.options.theme(this, this.options)),
                  (this.keyboard = this.theme.addModule('keyboard')),
                  (this.clipboard = this.theme.addModule('clipboard')),
                  (this.history = this.theme.addModule('history')),
                  this.theme.init(),
                  this.emitter.on(e.default.events.EDITOR_CHANGE, function (D) {
                    D === e.default.events.TEXT_CHANGE &&
                      E.root.classList.toggle('ql-blank', E.editor.isBlank());
                  }),
                  this.emitter.on(e.default.events.SCROLL_UPDATE, function (D, x) {
                    var I = E.selection.lastRange,
                      U = I && I.length === 0 ? I.index : void 0;
                    B.call(
                      E,
                      function () {
                        return E.editor.update(null, x, U);
                      },
                      D
                    );
                  });
                var F = this.clipboard.convert(
                  `<div class='ql-editor' style="white-space: normal;">` + L + '<p><br></p></div>'
                );
                this.setContents(F),
                  this.history.clear(),
                  this.options.placeholder &&
                    this.root.setAttribute('data-placeholder', this.options.placeholder),
                  this.options.readOnly && this.disable();
              }
              return (
                O(M, [
                  {
                    key: 'addContainer',
                    value: function (E) {
                      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                      if (typeof E === 'string') {
                        var L = E;
                        (E = document.createElement('div')), E.classList.add(L);
                      }
                      return this.container.insertBefore(E, S), E;
                    },
                  },
                  {
                    key: 'blur',
                    value: function () {
                      this.selection.setRange(null);
                    },
                  },
                  {
                    key: 'deleteText',
                    value: function (E, S, L) {
                      var F = this,
                        D = C(E, S, L),
                        x = w(D, 4);
                      return (
                        (E = x[0]),
                        (S = x[1]),
                        (L = x[3]),
                        B.call(
                          this,
                          function () {
                            return F.editor.deleteText(E, S);
                          },
                          L,
                          E,
                          -1 * S
                        )
                      );
                    },
                  },
                  {
                    key: 'disable',
                    value: function () {
                      this.enable(!1);
                    },
                  },
                  {
                    key: 'enable',
                    value: function () {
                      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                      this.scroll.enable(E), this.container.classList.toggle('ql-disabled', !E);
                    },
                  },
                  {
                    key: 'focus',
                    value: function () {
                      var E = this.scrollingContainer.scrollTop;
                      this.selection.focus(),
                        (this.scrollingContainer.scrollTop = E),
                        this.scrollIntoView();
                    },
                  },
                  {
                    key: 'format',
                    value: function (E, S) {
                      var L = this,
                        F =
                          arguments.length > 2 && arguments[2] !== void 0
                            ? arguments[2]
                            : e.default.sources.API;
                      return B.call(
                        this,
                        function () {
                          var D = L.getSelection(!0),
                            x = new d.default();
                          if (D == null) return x;
                          if (i.default.query(E, i.default.Scope.BLOCK))
                            x = L.editor.formatLine(D.index, D.length, h({}, E, S));
                          else {
                            if (D.length === 0) return L.selection.format(E, S), x;
                            x = L.editor.formatText(D.index, D.length, h({}, E, S));
                          }
                          return L.setSelection(D, e.default.sources.SILENT), x;
                        },
                        F
                      );
                    },
                  },
                  {
                    key: 'formatLine',
                    value: function (E, S, L, F, D) {
                      var x = this,
                        I = void 0,
                        U = C(E, S, L, F, D),
                        H = w(U, 4);
                      return (
                        (E = H[0]),
                        (S = H[1]),
                        (I = H[2]),
                        (D = H[3]),
                        B.call(
                          this,
                          function () {
                            return x.editor.formatLine(E, S, I);
                          },
                          D,
                          E,
                          0
                        )
                      );
                    },
                  },
                  {
                    key: 'formatText',
                    value: function (E, S, L, F, D) {
                      var x = this,
                        I = void 0,
                        U = C(E, S, L, F, D),
                        H = w(U, 4);
                      return (
                        (E = H[0]),
                        (S = H[1]),
                        (I = H[2]),
                        (D = H[3]),
                        B.call(
                          this,
                          function () {
                            return x.editor.formatText(E, S, I);
                          },
                          D,
                          E,
                          0
                        )
                      );
                    },
                  },
                  {
                    key: 'getBounds',
                    value: function (E) {
                      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                        L = void 0;
                      typeof E === 'number'
                        ? (L = this.selection.getBounds(E, S))
                        : (L = this.selection.getBounds(E.index, E.length));
                      var F = this.container.getBoundingClientRect();
                      return {
                        bottom: L.bottom - F.top,
                        height: L.height,
                        left: L.left - F.left,
                        right: L.right - F.left,
                        top: L.top - F.top,
                        width: L.width,
                      };
                    },
                  },
                  {
                    key: 'getContents',
                    value: function () {
                      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                        S =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this.getLength() - E,
                        L = C(E, S),
                        F = w(L, 2);
                      return (E = F[0]), (S = F[1]), this.editor.getContents(E, S);
                    },
                  },
                  {
                    key: 'getFormat',
                    value: function () {
                      var E =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : this.getSelection(!0),
                        S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                      return typeof E === 'number'
                        ? this.editor.getFormat(E, S)
                        : this.editor.getFormat(E.index, E.length);
                    },
                  },
                  {
                    key: 'getIndex',
                    value: function (E) {
                      return E.offset(this.scroll);
                    },
                  },
                  {
                    key: 'getLength',
                    value: function () {
                      return this.scroll.length();
                    },
                  },
                  {
                    key: 'getLeaf',
                    value: function (E) {
                      return this.scroll.leaf(E);
                    },
                  },
                  {
                    key: 'getLine',
                    value: function (E) {
                      return this.scroll.line(E);
                    },
                  },
                  {
                    key: 'getLines',
                    value: function () {
                      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                        S =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : Number.MAX_VALUE;
                      return typeof E !== 'number'
                        ? this.scroll.lines(E.index, E.length)
                        : this.scroll.lines(E, S);
                    },
                  },
                  {
                    key: 'getModule',
                    value: function (E) {
                      return this.theme.modules[E];
                    },
                  },
                  {
                    key: 'getSelection',
                    value: function () {
                      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                      return E && this.focus(), this.update(), this.selection.getRange()[0];
                    },
                  },
                  {
                    key: 'getText',
                    value: function () {
                      var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                        S =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this.getLength() - E,
                        L = C(E, S),
                        F = w(L, 2);
                      return (E = F[0]), (S = F[1]), this.editor.getText(E, S);
                    },
                  },
                  {
                    key: 'hasFocus',
                    value: function () {
                      return this.selection.hasFocus();
                    },
                  },
                  {
                    key: 'insertEmbed',
                    value: function (E, S, L) {
                      var F = this,
                        D =
                          arguments.length > 3 && arguments[3] !== void 0
                            ? arguments[3]
                            : M.sources.API;
                      return B.call(
                        this,
                        function () {
                          return F.editor.insertEmbed(E, S, L);
                        },
                        D,
                        E
                      );
                    },
                  },
                  {
                    key: 'insertText',
                    value: function (E, S, L, F, D) {
                      var x = this,
                        I = void 0,
                        U = C(E, 0, L, F, D),
                        H = w(U, 4);
                      return (
                        (E = H[0]),
                        (I = H[2]),
                        (D = H[3]),
                        B.call(
                          this,
                          function () {
                            return x.editor.insertText(E, S, I);
                          },
                          D,
                          E,
                          S.length
                        )
                      );
                    },
                  },
                  {
                    key: 'isEnabled',
                    value: function () {
                      return !this.container.classList.contains('ql-disabled');
                    },
                  },
                  {
                    key: 'off',
                    value: function () {
                      return this.emitter.off.apply(this.emitter, arguments);
                    },
                  },
                  {
                    key: 'on',
                    value: function () {
                      return this.emitter.on.apply(this.emitter, arguments);
                    },
                  },
                  {
                    key: 'once',
                    value: function () {
                      return this.emitter.once.apply(this.emitter, arguments);
                    },
                  },
                  {
                    key: 'pasteHTML',
                    value: function (E, S, L) {
                      this.clipboard.dangerouslyPasteHTML(E, S, L);
                    },
                  },
                  {
                    key: 'removeFormat',
                    value: function (E, S, L) {
                      var F = this,
                        D = C(E, S, L),
                        x = w(D, 4);
                      return (
                        (E = x[0]),
                        (S = x[1]),
                        (L = x[3]),
                        B.call(
                          this,
                          function () {
                            return F.editor.removeFormat(E, S);
                          },
                          L,
                          E
                        )
                      );
                    },
                  },
                  {
                    key: 'scrollIntoView',
                    value: function () {
                      this.selection.scrollIntoView(this.scrollingContainer);
                    },
                  },
                  {
                    key: 'setContents',
                    value: function (E) {
                      var S = this,
                        L =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : e.default.sources.API;
                      return B.call(
                        this,
                        function () {
                          E = new d.default(E);
                          var F = S.getLength(),
                            D = S.editor.deleteText(0, F),
                            x = S.editor.applyDelta(E),
                            I = x.ops[x.ops.length - 1];
                          I != null &&
                            typeof I.insert === 'string' &&
                            I.insert[I.insert.length - 1] ===
                              `
` &&
                            (S.editor.deleteText(S.getLength() - 1, 1), x.delete(1));
                          var U = D.compose(x);
                          return U;
                        },
                        L
                      );
                    },
                  },
                  {
                    key: 'setSelection',
                    value: function (E, S, L) {
                      if (E == null) this.selection.setRange(null, S || M.sources.API);
                      else {
                        var F = C(E, S, L),
                          D = w(F, 4);
                        (E = D[0]),
                          (S = D[1]),
                          (L = D[3]),
                          this.selection.setRange(new r.Range(E, S), L),
                          L !== e.default.sources.SILENT &&
                            this.selection.scrollIntoView(this.scrollingContainer);
                      }
                    },
                  },
                  {
                    key: 'setText',
                    value: function (E) {
                      var S =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : e.default.sources.API,
                        L = new d.default().insert(E);
                      return this.setContents(L, S);
                    },
                  },
                  {
                    key: 'update',
                    value: function () {
                      var E =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : e.default.sources.USER,
                        S = this.scroll.update(E);
                      return this.selection.update(E), S;
                    },
                  },
                  {
                    key: 'updateContents',
                    value: function (E) {
                      var S = this,
                        L =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : e.default.sources.API;
                      return B.call(
                        this,
                        function () {
                          return (E = new d.default(E)), S.editor.applyDelta(E, L);
                        },
                        L,
                        !0
                      );
                    },
                  },
                ]),
                M
              );
            })();
          (T.DEFAULTS = {
            bounds: null,
            formats: null,
            modules: {},
            placeholder: '',
            readOnly: !1,
            scrollingContainer: null,
            strict: !0,
            theme: 'default',
          }),
            (T.events = e.default.events),
            (T.sources = e.default.sources),
            (T.version = '1.3.6'),
            (T.imports = {
              delta: d.default,
              parchment: i.default,
              'core/module': l.default,
              'core/theme': N.default,
            });
          function q(M, R) {
            if (
              ((R = (0, c.default)(
                !0,
                { container: M, modules: { clipboard: !0, keyboard: !0, history: !0 } },
                R
              )),
              !R.theme || R.theme === T.DEFAULTS.theme)
            )
              R.theme = N.default;
            else if (((R.theme = T.import('themes/' + R.theme)), R.theme == null))
              throw new Error('Invalid theme ' + R.theme + '. Did you register it?');
            var E = (0, c.default)(!0, {}, R.theme.DEFAULTS);
            [E, R].forEach(function (F) {
              (F.modules = F.modules || {}),
                Object.keys(F.modules).forEach(function (D) {
                  F.modules[D] === !0 && (F.modules[D] = {});
                });
            });
            var S = Object.keys(E.modules).concat(Object.keys(R.modules)),
              L = S.reduce(function (F, D) {
                var x = T.import('modules/' + D);
                return (
                  x == null
                    ? A.error('Cannot load ' + D + ' module. Are you sure you registered it?')
                    : (F[D] = x.DEFAULTS || {}),
                  F
                );
              }, {});
            return (
              R.modules != null &&
                R.modules.toolbar &&
                R.modules.toolbar.constructor !== Object &&
                (R.modules.toolbar = { container: R.modules.toolbar }),
              (R = (0, c.default)(!0, {}, T.DEFAULTS, { modules: L }, E, R)),
              ['bounds', 'container', 'scrollingContainer'].forEach(function (F) {
                typeof R[F] === 'string' && (R[F] = document.querySelector(R[F]));
              }),
              (R.modules = Object.keys(R.modules).reduce(function (F, D) {
                return R.modules[D] && (F[D] = R.modules[D]), F;
              }, {})),
              R
            );
          }
          function B(M, R, E, S) {
            if (this.options.strict && !this.isEnabled() && R === e.default.sources.USER)
              return new d.default();
            var L = E == null ? null : this.getSelection(),
              F = this.editor.delta,
              D = M();
            if (
              (L != null &&
                (E === !0 && (E = L.index),
                S == null ? (L = Z(L, D, R)) : S !== 0 && (L = Z(L, E, S, R)),
                this.setSelection(L, e.default.sources.SILENT)),
              D.length() > 0)
            ) {
              var x,
                I = [e.default.events.TEXT_CHANGE, D, F, R];
              if (
                ((x = this.emitter).emit.apply(x, [e.default.events.EDITOR_CHANGE].concat(I)),
                R !== e.default.sources.SILENT)
              ) {
                var U;
                (U = this.emitter).emit.apply(U, I);
              }
            }
            return D;
          }
          function C(M, R, E, S, L) {
            var F = {};
            return (
              typeof M.index === 'number' && typeof M.length === 'number'
                ? typeof R !== 'number'
                  ? ((L = S), (S = E), (E = R), (R = M.length), (M = M.index))
                  : ((R = M.length), (M = M.index))
                : typeof R !== 'number' && ((L = S), (S = E), (E = R), (R = 0)),
              (typeof E === 'undefined' ? 'undefined' : P(E)) === 'object'
                ? ((F = E), (L = S))
                : typeof E === 'string' && (S != null ? (F[E] = S) : (L = E)),
              (L = L || e.default.sources.API),
              [M, R, F, L]
            );
          }
          function Z(M, R, E, S) {
            if (M == null) return null;
            var L = void 0,
              F = void 0;
            if (R instanceof d.default) {
              var D = [M.index, M.index + M.length].map(function (H) {
                  return R.transformPosition(H, S !== e.default.sources.USER);
                }),
                x = w(D, 2);
              (L = x[0]), (F = x[1]);
            } else {
              var I = [M.index, M.index + M.length].map(function (H) {
                  return H < R || (H === R && S === e.default.sources.USER)
                    ? H
                    : E >= 0
                    ? H + E
                    : Math.max(R, H + E);
                }),
                U = w(I, 2);
              (L = U[0]), (F = U[1]);
            }
            return new r.Range(L, F - L);
          }
          (g.expandConfig = q), (g.overload = C), (g.default = T);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function a(i, r) {
                for (var f = 0; f < r.length; f++) {
                  var n = r[f];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(i, n.key, n);
                }
              }
              return function (i, r, f) {
                return r && a(i.prototype, r), f && a(i, f), i;
              };
            })(),
            w = function a(i, r, f) {
              i === null && (i = Function.prototype);
              var n = Object.getOwnPropertyDescriptor(i, r);
              if (n === void 0) {
                var c = Object.getPrototypeOf(i);
                return c === null ? void 0 : a(c, r, f);
              }
              if ('value' in n) return n.value;
              var k = n.get;
              return k === void 0 ? void 0 : k.call(f);
            },
            O = p(7),
            v = o(O),
            d = p(0),
            s = o(d);
          function o(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function t(a, i) {
            if (!(a instanceof i)) throw new TypeError('Cannot call a class as a function');
          }
          function e(a, i) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i === 'object' || typeof i === 'function') ? i : a;
          }
          function u(a, i) {
            if (typeof i !== 'function' && i !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof i
              );
            (a.prototype = Object.create(i && i.prototype, {
              constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
            })),
              i && (Object.setPrototypeOf ? Object.setPrototypeOf(a, i) : (a.__proto__ = i));
          }
          var l = (function (a) {
            u(i, a);
            function i() {
              return (
                t(this, i),
                e(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
              );
            }
            return (
              P(
                i,
                [
                  {
                    key: 'formatAt',
                    value: function (f, n, c, k) {
                      if (
                        i.compare(this.statics.blotName, c) < 0 &&
                        s.default.query(c, s.default.Scope.BLOT)
                      ) {
                        var b = this.isolate(f, n);
                        k && b.wrap(c, k);
                      } else
                        w(
                          i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                          'formatAt',
                          this
                        ).call(this, f, n, c, k);
                    },
                  },
                  {
                    key: 'optimize',
                    value: function (f) {
                      if (
                        (w(
                          i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                          'optimize',
                          this
                        ).call(this, f),
                        this.parent instanceof i &&
                          i.compare(this.statics.blotName, this.parent.statics.blotName) > 0)
                      ) {
                        var n = this.parent.isolate(this.offset(), this.length());
                        this.moveChildren(n), n.wrap(this);
                      }
                    },
                  },
                ],
                [
                  {
                    key: 'compare',
                    value: function (f, n) {
                      var c = i.order.indexOf(f),
                        k = i.order.indexOf(n);
                      return c >= 0 || k >= 0 ? c - k : f === n ? 0 : f < n ? -1 : 1;
                    },
                  },
                ]
              ),
              i
            );
          })(s.default.Inline);
          (l.allowedChildren = [l, s.default.Embed, v.default]),
            (l.order = [
              'cursor',
              'inline',
              'underline',
              'strike',
              'italic',
              'bold',
              'script',
              'link',
              'code',
            ]),
            (g.default = l);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(0),
            w = O(P);
          function O(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          function d(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e === 'object' || typeof e === 'function') ? e : t;
          }
          function s(t, e) {
            if (typeof e !== 'function' && e !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
              e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
          }
          var o = (function (t) {
            s(e, t);
            function e() {
              return (
                v(this, e),
                d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
              );
            }
            return e;
          })(w.default.Text);
          g.default = o;
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function r(f, n) {
                for (var c = 0; c < n.length; c++) {
                  var k = n[c];
                  (k.enumerable = k.enumerable || !1),
                    (k.configurable = !0),
                    'value' in k && (k.writable = !0),
                    Object.defineProperty(f, k.key, k);
                }
              }
              return function (f, n, c) {
                return n && r(f.prototype, n), c && r(f, c), f;
              };
            })(),
            w = function r(f, n, c) {
              f === null && (f = Function.prototype);
              var k = Object.getOwnPropertyDescriptor(f, n);
              if (k === void 0) {
                var b = Object.getPrototypeOf(f);
                return b === null ? void 0 : r(b, n, c);
              }
              if ('value' in k) return k.value;
              var _ = k.get;
              return _ === void 0 ? void 0 : _.call(c);
            },
            O = p(54),
            v = o(O),
            d = p(10),
            s = o(d);
          function o(r) {
            return r && r.__esModule ? r : { default: r };
          }
          function t(r, f) {
            if (!(r instanceof f)) throw new TypeError('Cannot call a class as a function');
          }
          function e(r, f) {
            if (!r)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return f && (typeof f === 'object' || typeof f === 'function') ? f : r;
          }
          function u(r, f) {
            if (typeof f !== 'function' && f !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof f
              );
            (r.prototype = Object.create(f && f.prototype, {
              constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
            })),
              f && (Object.setPrototypeOf ? Object.setPrototypeOf(r, f) : (r.__proto__ = f));
          }
          var l = (0, s.default)('quill:events'),
            a = ['selectionchange', 'mousedown', 'mouseup', 'click'];
          a.forEach(function (r) {
            document.addEventListener(r, function () {
              for (var f = arguments.length, n = Array(f), c = 0; c < f; c++) n[c] = arguments[c];
              [].slice.call(document.querySelectorAll('.ql-container')).forEach(function (k) {
                if (k.__quill && k.__quill.emitter) {
                  var b;
                  (b = k.__quill.emitter).handleDOM.apply(b, n);
                }
              });
            });
          });
          var i = (function (r) {
            u(f, r);
            function f() {
              t(this, f);
              var n = e(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
              return (n.listeners = {}), n.on('error', l.error), n;
            }
            return (
              P(f, [
                {
                  key: 'emit',
                  value: function () {
                    l.log.apply(l, arguments),
                      w(
                        f.prototype.__proto__ || Object.getPrototypeOf(f.prototype),
                        'emit',
                        this
                      ).apply(this, arguments);
                  },
                },
                {
                  key: 'handleDOM',
                  value: function (c) {
                    for (var k = arguments.length, b = Array(k > 1 ? k - 1 : 0), _ = 1; _ < k; _++)
                      b[_ - 1] = arguments[_];
                    (this.listeners[c.type] || []).forEach(function (N) {
                      var m = N.node,
                        h = N.handler;
                      (c.target === m || m.contains(c.target)) && h.apply(void 0, [c].concat(b));
                    });
                  },
                },
                {
                  key: 'listenDOM',
                  value: function (c, k, b) {
                    this.listeners[c] || (this.listeners[c] = []),
                      this.listeners[c].push({ node: k, handler: b });
                  },
                },
              ]),
              f
            );
          })(v.default);
          (i.events = {
            EDITOR_CHANGE: 'editor-change',
            SCROLL_BEFORE_UPDATE: 'scroll-before-update',
            SCROLL_OPTIMIZE: 'scroll-optimize',
            SCROLL_UPDATE: 'scroll-update',
            SELECTION_CHANGE: 'selection-change',
            TEXT_CHANGE: 'text-change',
          }),
            (i.sources = { API: 'api', SILENT: 'silent', USER: 'user' }),
            (g.default = i);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          function P(O, v) {
            if (!(O instanceof v)) throw new TypeError('Cannot call a class as a function');
          }
          var w = function O(v) {
            var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            P(this, O), (this.quill = v), (this.options = d);
          };
          (w.DEFAULTS = {}), (g.default = w);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = ['error', 'warn', 'log', 'info'],
            w = 'warn';
          function O(d) {
            if (P.indexOf(d) <= P.indexOf(w)) {
              for (var s, o = arguments.length, t = Array(o > 1 ? o - 1 : 0), e = 1; e < o; e++)
                t[e - 1] = arguments[e];
              (s = console)[d].apply(s, t);
            }
          }
          function v(d) {
            return P.reduce(function (s, o) {
              return (s[o] = O.bind(console, o, d)), s;
            }, {});
          }
          (O.level = v.level =
            function (d) {
              w = d;
            }),
            (g.default = v);
        },
        function (j, g, p) {
          var P = Array.prototype.slice,
            w = p(52),
            O = p(53),
            v = (j.exports = function (t, e, u) {
              return (
                u || (u = {}),
                t === e
                  ? !0
                  : t instanceof Date && e instanceof Date
                  ? t.getTime() === e.getTime()
                  : !t || !e || (typeof t !== 'object' && typeof e !== 'object')
                  ? u.strict
                    ? t === e
                    : t == e
                  : o(t, e, u)
              );
            });
          function d(t) {
            return t == null;
          }
          function s(t) {
            return !(
              !t ||
              typeof t !== 'object' ||
              typeof t.length !== 'number' ||
              typeof t.copy !== 'function' ||
              typeof t.slice !== 'function' ||
              (t.length > 0 && typeof t[0] !== 'number')
            );
          }
          function o(t, e, u) {
            var l, a;
            if (d(t) || d(e) || t.prototype !== e.prototype) return !1;
            if (O(t)) return O(e) ? ((t = P.call(t)), (e = P.call(e)), v(t, e, u)) : !1;
            if (s(t)) {
              if (!s(e) || t.length !== e.length) return !1;
              for (l = 0; l < t.length; l++) if (t[l] !== e[l]) return !1;
              return !0;
            }
            try {
              var i = w(t),
                r = w(e);
            } catch {
              return !1;
            }
            if (i.length != r.length) return !1;
            for (i.sort(), r.sort(), l = i.length - 1; l >= 0; l--) if (i[l] != r[l]) return !1;
            for (l = i.length - 1; l >= 0; l--) if (((a = i[l]), !v(t[a], e[a], u))) return !1;
            return typeof t === typeof e;
          }
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(1),
            w = (function () {
              function O(v, d, s) {
                s === void 0 && (s = {}), (this.attrName = v), (this.keyName = d);
                var o = P.Scope.TYPE & P.Scope.ATTRIBUTE;
                s.scope != null
                  ? (this.scope = (s.scope & P.Scope.LEVEL) | o)
                  : (this.scope = P.Scope.ATTRIBUTE),
                  s.whitelist != null && (this.whitelist = s.whitelist);
              }
              return (
                (O.keys = function (v) {
                  return [].map.call(v.attributes, function (d) {
                    return d.name;
                  });
                }),
                (O.prototype.add = function (v, d) {
                  return this.canAdd(v, d) ? (v.setAttribute(this.keyName, d), !0) : !1;
                }),
                (O.prototype.canAdd = function (v, d) {
                  var s = P.query(v, P.Scope.BLOT & (this.scope | P.Scope.TYPE));
                  return s == null
                    ? !1
                    : this.whitelist == null
                    ? !0
                    : typeof d === 'string'
                    ? this.whitelist.indexOf(d.replace(/["']/g, '')) > -1
                    : this.whitelist.indexOf(d) > -1;
                }),
                (O.prototype.remove = function (v) {
                  v.removeAttribute(this.keyName);
                }),
                (O.prototype.value = function (v) {
                  var d = v.getAttribute(this.keyName);
                  return this.canAdd(v, d) && d ? d : '';
                }),
                O
              );
            })();
          g.default = w;
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = g.Code = void 0);
          var P = (function () {
              function _(N, m) {
                var h = [],
                  y = !0,
                  A = !1,
                  T = void 0;
                try {
                  for (
                    var q = N[Symbol.iterator](), B;
                    !(y = (B = q.next()).done) && (h.push(B.value), !(m && h.length === m));
                    y = !0
                  );
                } catch (C) {
                  (A = !0), (T = C);
                } finally {
                  try {
                    !y && q.return && q.return();
                  } finally {
                    if (A) throw T;
                  }
                }
                return h;
              }
              return function (N, m) {
                if (Array.isArray(N)) return N;
                if (Symbol.iterator in Object(N)) return _(N, m);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            w = (function () {
              function _(N, m) {
                for (var h = 0; h < m.length; h++) {
                  var y = m[h];
                  (y.enumerable = y.enumerable || !1),
                    (y.configurable = !0),
                    'value' in y && (y.writable = !0),
                    Object.defineProperty(N, y.key, y);
                }
              }
              return function (N, m, h) {
                return m && _(N.prototype, m), h && _(N, h), N;
              };
            })(),
            O = function _(N, m, h) {
              N === null && (N = Function.prototype);
              var y = Object.getOwnPropertyDescriptor(N, m);
              if (y === void 0) {
                var A = Object.getPrototypeOf(N);
                return A === null ? void 0 : _(A, m, h);
              }
              if ('value' in y) return y.value;
              var T = y.get;
              return T === void 0 ? void 0 : T.call(h);
            },
            v = p(2),
            d = r(v),
            s = p(0),
            o = r(s),
            t = p(4),
            e = r(t),
            u = p(6),
            l = r(u),
            a = p(7),
            i = r(a);
          function r(_) {
            return _ && _.__esModule ? _ : { default: _ };
          }
          function f(_, N) {
            if (!(_ instanceof N)) throw new TypeError('Cannot call a class as a function');
          }
          function n(_, N) {
            if (!_)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return N && (typeof N === 'object' || typeof N === 'function') ? N : _;
          }
          function c(_, N) {
            if (typeof N !== 'function' && N !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof N
              );
            (_.prototype = Object.create(N && N.prototype, {
              constructor: { value: _, enumerable: !1, writable: !0, configurable: !0 },
            })),
              N && (Object.setPrototypeOf ? Object.setPrototypeOf(_, N) : (_.__proto__ = N));
          }
          var k = (function (_) {
            c(N, _);
            function N() {
              return (
                f(this, N),
                n(this, (N.__proto__ || Object.getPrototypeOf(N)).apply(this, arguments))
              );
            }
            return N;
          })(l.default);
          (k.blotName = 'code'), (k.tagName = 'CODE');
          var b = (function (_) {
            c(N, _);
            function N() {
              return (
                f(this, N),
                n(this, (N.__proto__ || Object.getPrototypeOf(N)).apply(this, arguments))
              );
            }
            return (
              w(
                N,
                [
                  {
                    key: 'delta',
                    value: function () {
                      var h = this,
                        y = this.domNode.textContent;
                      return (
                        y.endsWith(`
`) && (y = y.slice(0, -1)),
                        y
                          .split(
                            `
`
                          )
                          .reduce(function (A, T) {
                            return A.insert(T).insert(
                              `
`,
                              h.formats()
                            );
                          }, new d.default())
                      );
                    },
                  },
                  {
                    key: 'format',
                    value: function (h, y) {
                      if (!(h === this.statics.blotName && y)) {
                        var A = this.descendant(i.default, this.length() - 1),
                          T = P(A, 1),
                          q = T[0];
                        q != null && q.deleteAt(q.length() - 1, 1),
                          O(
                            N.prototype.__proto__ || Object.getPrototypeOf(N.prototype),
                            'format',
                            this
                          ).call(this, h, y);
                      }
                    },
                  },
                  {
                    key: 'formatAt',
                    value: function (h, y, A, T) {
                      if (
                        y !== 0 &&
                        !(
                          o.default.query(A, o.default.Scope.BLOCK) == null ||
                          (A === this.statics.blotName && T === this.statics.formats(this.domNode))
                        )
                      ) {
                        var q = this.newlineIndex(h);
                        if (!(q < 0 || q >= h + y)) {
                          var B = this.newlineIndex(h, !0) + 1,
                            C = q - B + 1,
                            Z = this.isolate(B, C),
                            M = Z.next;
                          Z.format(A, T), M instanceof N && M.formatAt(0, h - B + y - C, A, T);
                        }
                      }
                    },
                  },
                  {
                    key: 'insertAt',
                    value: function (h, y, A) {
                      if (A == null) {
                        var T = this.descendant(i.default, h),
                          q = P(T, 2),
                          B = q[0],
                          C = q[1];
                        B.insertAt(C, y);
                      }
                    },
                  },
                  {
                    key: 'length',
                    value: function () {
                      var h = this.domNode.textContent.length;
                      return this.domNode.textContent.endsWith(`
`)
                        ? h
                        : h + 1;
                    },
                  },
                  {
                    key: 'newlineIndex',
                    value: function (h) {
                      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                      if (y)
                        return this.domNode.textContent.slice(0, h).lastIndexOf(`
`);
                      var A = this.domNode.textContent.slice(h).indexOf(`
`);
                      return A > -1 ? h + A : -1;
                    },
                  },
                  {
                    key: 'optimize',
                    value: function (h) {
                      this.domNode.textContent.endsWith(`
`) ||
                        this.appendChild(
                          o.default.create(
                            'text',
                            `
`
                          )
                        ),
                        O(
                          N.prototype.__proto__ || Object.getPrototypeOf(N.prototype),
                          'optimize',
                          this
                        ).call(this, h);
                      var y = this.next;
                      y != null &&
                        y.prev === this &&
                        y.statics.blotName === this.statics.blotName &&
                        this.statics.formats(this.domNode) === y.statics.formats(y.domNode) &&
                        (y.optimize(h), y.moveChildren(this), y.remove());
                    },
                  },
                  {
                    key: 'replace',
                    value: function (h) {
                      O(
                        N.prototype.__proto__ || Object.getPrototypeOf(N.prototype),
                        'replace',
                        this
                      ).call(this, h),
                        [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (y) {
                          var A = o.default.find(y);
                          A == null
                            ? y.parentNode.removeChild(y)
                            : A instanceof o.default.Embed
                            ? A.remove()
                            : A.unwrap();
                        });
                    },
                  },
                ],
                [
                  {
                    key: 'create',
                    value: function (h) {
                      var y = O(N.__proto__ || Object.getPrototypeOf(N), 'create', this).call(
                        this,
                        h
                      );
                      return y.setAttribute('spellcheck', !1), y;
                    },
                  },
                  {
                    key: 'formats',
                    value: function () {
                      return !0;
                    },
                  },
                ]
              ),
              N
            );
          })(e.default);
          (b.blotName = 'code-block'),
            (b.tagName = 'PRE'),
            (b.TAB = '  '),
            (g.Code = k),
            (g.default = b);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P =
              typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function (M) {
                    return typeof M;
                  }
                : function (M) {
                    return M &&
                      typeof Symbol === 'function' &&
                      M.constructor === Symbol &&
                      M !== Symbol.prototype
                      ? 'symbol'
                      : typeof M;
                  },
            w = (function () {
              function M(R, E) {
                var S = [],
                  L = !0,
                  F = !1,
                  D = void 0;
                try {
                  for (
                    var x = R[Symbol.iterator](), I;
                    !(L = (I = x.next()).done) && (S.push(I.value), !(E && S.length === E));
                    L = !0
                  );
                } catch (U) {
                  (F = !0), (D = U);
                } finally {
                  try {
                    !L && x.return && x.return();
                  } finally {
                    if (F) throw D;
                  }
                }
                return S;
              }
              return function (R, E) {
                if (Array.isArray(R)) return R;
                if (Symbol.iterator in Object(R)) return M(R, E);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            O = (function () {
              function M(R, E) {
                for (var S = 0; S < E.length; S++) {
                  var L = E[S];
                  (L.enumerable = L.enumerable || !1),
                    (L.configurable = !0),
                    'value' in L && (L.writable = !0),
                    Object.defineProperty(R, L.key, L);
                }
              }
              return function (R, E, S) {
                return E && M(R.prototype, E), S && M(R, S), R;
              };
            })(),
            v = p(2),
            d = y(v),
            s = p(20),
            o = y(s),
            t = p(0),
            e = y(t),
            u = p(13),
            l = y(u),
            a = p(24),
            i = y(a),
            r = p(4),
            f = y(r),
            n = p(16),
            c = y(n),
            k = p(21),
            b = y(k),
            _ = p(11),
            N = y(_),
            m = p(3),
            h = y(m);
          function y(M) {
            return M && M.__esModule ? M : { default: M };
          }
          function A(M, R, E) {
            return (
              R in M
                ? Object.defineProperty(M, R, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (M[R] = E),
              M
            );
          }
          function T(M, R) {
            if (!(M instanceof R)) throw new TypeError('Cannot call a class as a function');
          }
          var q = /^[ -~]*$/,
            B = (function () {
              function M(R) {
                T(this, M), (this.scroll = R), (this.delta = this.getDelta());
              }
              return (
                O(M, [
                  {
                    key: 'applyDelta',
                    value: function (E) {
                      var S = this,
                        L = !1;
                      this.scroll.update();
                      var F = this.scroll.length();
                      return (
                        this.scroll.batchStart(),
                        (E = Z(E)),
                        E.reduce(function (D, x) {
                          var I = x.retain || x.delete || x.insert.length || 1,
                            U = x.attributes || {};
                          if (x.insert != null) {
                            if (typeof x.insert === 'string') {
                              var H = x.insert;
                              H.endsWith(`
`) &&
                                L &&
                                ((L = !1), (H = H.slice(0, -1))),
                                D >= F &&
                                  !H.endsWith(`
`) &&
                                  (L = !0),
                                S.scroll.insertAt(D, H);
                              var V = S.scroll.line(D),
                                Y = w(V, 2),
                                X = Y[0],
                                Q = Y[1],
                                nt = (0, h.default)({}, (0, r.bubbleFormats)(X));
                              if (X instanceof f.default) {
                                var rt = X.descendant(e.default.Leaf, Q),
                                  at = w(rt, 1),
                                  lt = at[0];
                                nt = (0, h.default)(nt, (0, r.bubbleFormats)(lt));
                              }
                              U = o.default.attributes.diff(nt, U) || {};
                            } else if (P(x.insert) === 'object') {
                              var z = Object.keys(x.insert)[0];
                              if (z == null) return D;
                              S.scroll.insertAt(D, z, x.insert[z]);
                            }
                            F += I;
                          }
                          return (
                            Object.keys(U).forEach(function (K) {
                              S.scroll.formatAt(D, I, K, U[K]);
                            }),
                            D + I
                          );
                        }, 0),
                        E.reduce(function (D, x) {
                          return typeof x.delete === 'number'
                            ? (S.scroll.deleteAt(D, x.delete), D)
                            : D + (x.retain || x.insert.length || 1);
                        }, 0),
                        this.scroll.batchEnd(),
                        this.update(E)
                      );
                    },
                  },
                  {
                    key: 'deleteText',
                    value: function (E, S) {
                      return (
                        this.scroll.deleteAt(E, S), this.update(new d.default().retain(E).delete(S))
                      );
                    },
                  },
                  {
                    key: 'formatLine',
                    value: function (E, S) {
                      var L = this,
                        F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                      return (
                        this.scroll.update(),
                        Object.keys(F).forEach(function (D) {
                          if (!(L.scroll.whitelist != null && !L.scroll.whitelist[D])) {
                            var x = L.scroll.lines(E, Math.max(S, 1)),
                              I = S;
                            x.forEach(function (U) {
                              var H = U.length();
                              if (!(U instanceof l.default)) U.format(D, F[D]);
                              else {
                                var V = E - U.offset(L.scroll),
                                  Y = U.newlineIndex(V + I) - V + 1;
                                U.formatAt(V, Y, D, F[D]);
                              }
                              I -= H;
                            });
                          }
                        }),
                        this.scroll.optimize(),
                        this.update(new d.default().retain(E).retain(S, (0, b.default)(F)))
                      );
                    },
                  },
                  {
                    key: 'formatText',
                    value: function (E, S) {
                      var L = this,
                        F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                      return (
                        Object.keys(F).forEach(function (D) {
                          L.scroll.formatAt(E, S, D, F[D]);
                        }),
                        this.update(new d.default().retain(E).retain(S, (0, b.default)(F)))
                      );
                    },
                  },
                  {
                    key: 'getContents',
                    value: function (E, S) {
                      return this.delta.slice(E, E + S);
                    },
                  },
                  {
                    key: 'getDelta',
                    value: function () {
                      return this.scroll.lines().reduce(function (E, S) {
                        return E.concat(S.delta());
                      }, new d.default());
                    },
                  },
                  {
                    key: 'getFormat',
                    value: function (E) {
                      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                        L = [],
                        F = [];
                      S === 0
                        ? this.scroll.path(E).forEach(function (x) {
                            var I = w(x, 1),
                              U = I[0];
                            U instanceof f.default
                              ? L.push(U)
                              : U instanceof e.default.Leaf && F.push(U);
                          })
                        : ((L = this.scroll.lines(E, S)),
                          (F = this.scroll.descendants(e.default.Leaf, E, S)));
                      var D = [L, F].map(function (x) {
                        if (x.length === 0) return {};
                        for (var I = (0, r.bubbleFormats)(x.shift()); Object.keys(I).length > 0; ) {
                          var U = x.shift();
                          if (U == null) return I;
                          I = C((0, r.bubbleFormats)(U), I);
                        }
                        return I;
                      });
                      return h.default.apply(h.default, D);
                    },
                  },
                  {
                    key: 'getText',
                    value: function (E, S) {
                      return this.getContents(E, S)
                        .filter(function (L) {
                          return typeof L.insert === 'string';
                        })
                        .map(function (L) {
                          return L.insert;
                        })
                        .join('');
                    },
                  },
                  {
                    key: 'insertEmbed',
                    value: function (E, S, L) {
                      return (
                        this.scroll.insertAt(E, S, L),
                        this.update(new d.default().retain(E).insert(A({}, S, L)))
                      );
                    },
                  },
                  {
                    key: 'insertText',
                    value: function (E, S) {
                      var L = this,
                        F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                      return (
                        (S = S.replace(
                          /\r\n/g,
                          `
`
                        ).replace(
                          /\r/g,
                          `
`
                        )),
                        this.scroll.insertAt(E, S),
                        Object.keys(F).forEach(function (D) {
                          L.scroll.formatAt(E, S.length, D, F[D]);
                        }),
                        this.update(new d.default().retain(E).insert(S, (0, b.default)(F)))
                      );
                    },
                  },
                  {
                    key: 'isBlank',
                    value: function () {
                      if (this.scroll.children.length == 0) return !0;
                      if (this.scroll.children.length > 1) return !1;
                      var E = this.scroll.children.head;
                      return E.statics.blotName !== f.default.blotName || E.children.length > 1
                        ? !1
                        : E.children.head instanceof c.default;
                    },
                  },
                  {
                    key: 'removeFormat',
                    value: function (E, S) {
                      var L = this.getText(E, S),
                        F = this.scroll.line(E + S),
                        D = w(F, 2),
                        x = D[0],
                        I = D[1],
                        U = 0,
                        H = new d.default();
                      x != null &&
                        (x instanceof l.default
                          ? (U = x.newlineIndex(I) - I + 1)
                          : (U = x.length() - I),
                        (H = x.delta().slice(I, I + U - 1).insert(`
`)));
                      var V = this.getContents(E, S + U),
                        Y = V.diff(new d.default().insert(L).concat(H)),
                        X = new d.default().retain(E).concat(Y);
                      return this.applyDelta(X);
                    },
                  },
                  {
                    key: 'update',
                    value: function (E) {
                      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
                        L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0,
                        F = this.delta;
                      if (
                        S.length === 1 &&
                        S[0].type === 'characterData' &&
                        S[0].target.data.match(q) &&
                        e.default.find(S[0].target)
                      ) {
                        var D = e.default.find(S[0].target),
                          x = (0, r.bubbleFormats)(D),
                          I = D.offset(this.scroll),
                          U = S[0].oldValue.replace(i.default.CONTENTS, ''),
                          H = new d.default().insert(U),
                          V = new d.default().insert(D.value()),
                          Y = new d.default().retain(I).concat(H.diff(V, L));
                        (E = Y.reduce(function (X, Q) {
                          return Q.insert ? X.insert(Q.insert, x) : X.push(Q);
                        }, new d.default())),
                          (this.delta = F.compose(E));
                      } else
                        (this.delta = this.getDelta()),
                          (!E || !(0, N.default)(F.compose(E), this.delta)) &&
                            (E = F.diff(this.delta, L));
                      return E;
                    },
                  },
                ]),
                M
              );
            })();
          function C(M, R) {
            return Object.keys(R).reduce(function (E, S) {
              return (
                M[S] == null ||
                  (R[S] === M[S]
                    ? (E[S] = R[S])
                    : Array.isArray(R[S])
                    ? R[S].indexOf(M[S]) < 0 && (E[S] = R[S].concat([M[S]]))
                    : (E[S] = [R[S], M[S]])),
                E
              );
            }, {});
          }
          function Z(M) {
            return M.reduce(function (R, E) {
              if (E.insert === 1) {
                var S = (0, b.default)(E.attributes);
                return delete S.image, R.insert({ image: E.attributes.image }, S);
              }
              if (
                (E.attributes != null &&
                  (E.attributes.list === !0 || E.attributes.bullet === !0) &&
                  ((E = (0, b.default)(E)),
                  E.attributes.list
                    ? (E.attributes.list = 'ordered')
                    : ((E.attributes.list = 'bullet'), delete E.attributes.bullet)),
                typeof E.insert === 'string')
              ) {
                var L = E.insert
                  .replace(
                    /\r\n/g,
                    `
`
                  )
                  .replace(
                    /\r/g,
                    `
`
                  );
                return R.insert(L, E.attributes);
              }
              return R.push(E);
            }, new d.default());
          }
          g.default = B;
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = g.Range = void 0);
          var P = (function () {
              function _(N, m) {
                var h = [],
                  y = !0,
                  A = !1,
                  T = void 0;
                try {
                  for (
                    var q = N[Symbol.iterator](), B;
                    !(y = (B = q.next()).done) && (h.push(B.value), !(m && h.length === m));
                    y = !0
                  );
                } catch (C) {
                  (A = !0), (T = C);
                } finally {
                  try {
                    !y && q.return && q.return();
                  } finally {
                    if (A) throw T;
                  }
                }
                return h;
              }
              return function (N, m) {
                if (Array.isArray(N)) return N;
                if (Symbol.iterator in Object(N)) return _(N, m);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            w = (function () {
              function _(N, m) {
                for (var h = 0; h < m.length; h++) {
                  var y = m[h];
                  (y.enumerable = y.enumerable || !1),
                    (y.configurable = !0),
                    'value' in y && (y.writable = !0),
                    Object.defineProperty(N, y.key, y);
                }
              }
              return function (N, m, h) {
                return m && _(N.prototype, m), h && _(N, h), N;
              };
            })(),
            O = p(0),
            v = i(O),
            d = p(21),
            s = i(d),
            o = p(11),
            t = i(o),
            e = p(8),
            u = i(e),
            l = p(10),
            a = i(l);
          function i(_) {
            return _ && _.__esModule ? _ : { default: _ };
          }
          function r(_) {
            if (Array.isArray(_)) {
              for (var N = 0, m = Array(_.length); N < _.length; N++) m[N] = _[N];
              return m;
            }
            return Array.from(_);
          }
          function f(_, N) {
            if (!(_ instanceof N)) throw new TypeError('Cannot call a class as a function');
          }
          var n = (0, a.default)('quill:selection'),
            c = function _(N) {
              var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              f(this, _), (this.index = N), (this.length = m);
            },
            k = (function () {
              function _(N, m) {
                var h = this;
                f(this, _),
                  (this.emitter = m),
                  (this.scroll = N),
                  (this.composing = !1),
                  (this.mouseDown = !1),
                  (this.root = this.scroll.domNode),
                  (this.cursor = v.default.create('cursor', this)),
                  (this.lastRange = this.savedRange = new c(0, 0)),
                  this.handleComposition(),
                  this.handleDragging(),
                  this.emitter.listenDOM('selectionchange', document, function () {
                    h.mouseDown || setTimeout(h.update.bind(h, u.default.sources.USER), 1);
                  }),
                  this.emitter.on(u.default.events.EDITOR_CHANGE, function (y, A) {
                    y === u.default.events.TEXT_CHANGE &&
                      A.length() > 0 &&
                      h.update(u.default.sources.SILENT);
                  }),
                  this.emitter.on(u.default.events.SCROLL_BEFORE_UPDATE, function () {
                    if (h.hasFocus()) {
                      var y = h.getNativeRange();
                      y != null &&
                        y.start.node !== h.cursor.textNode &&
                        h.emitter.once(u.default.events.SCROLL_UPDATE, function () {
                          try {
                            h.setNativeRange(
                              y.start.node,
                              y.start.offset,
                              y.end.node,
                              y.end.offset
                            );
                          } catch {}
                        });
                    }
                  }),
                  this.emitter.on(u.default.events.SCROLL_OPTIMIZE, function (y, A) {
                    if (A.range) {
                      var T = A.range,
                        q = T.startNode,
                        B = T.startOffset,
                        C = T.endNode,
                        Z = T.endOffset;
                      h.setNativeRange(q, B, C, Z);
                    }
                  }),
                  this.update(u.default.sources.SILENT);
              }
              return (
                w(_, [
                  {
                    key: 'handleComposition',
                    value: function () {
                      var m = this;
                      this.root.addEventListener('compositionstart', function () {
                        m.composing = !0;
                      }),
                        this.root.addEventListener('compositionend', function () {
                          if (((m.composing = !1), m.cursor.parent)) {
                            var h = m.cursor.restore();
                            if (!h) return;
                            setTimeout(function () {
                              m.setNativeRange(h.startNode, h.startOffset, h.endNode, h.endOffset);
                            }, 1);
                          }
                        });
                    },
                  },
                  {
                    key: 'handleDragging',
                    value: function () {
                      var m = this;
                      this.emitter.listenDOM('mousedown', document.body, function () {
                        m.mouseDown = !0;
                      }),
                        this.emitter.listenDOM('mouseup', document.body, function () {
                          (m.mouseDown = !1), m.update(u.default.sources.USER);
                        });
                    },
                  },
                  {
                    key: 'focus',
                    value: function () {
                      this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
                    },
                  },
                  {
                    key: 'format',
                    value: function (m, h) {
                      if (!(this.scroll.whitelist != null && !this.scroll.whitelist[m])) {
                        this.scroll.update();
                        var y = this.getNativeRange();
                        if (
                          !(
                            y == null ||
                            !y.native.collapsed ||
                            v.default.query(m, v.default.Scope.BLOCK)
                          )
                        ) {
                          if (y.start.node !== this.cursor.textNode) {
                            var A = v.default.find(y.start.node, !1);
                            if (A == null) return;
                            if (A instanceof v.default.Leaf) {
                              var T = A.split(y.start.offset);
                              A.parent.insertBefore(this.cursor, T);
                            } else A.insertBefore(this.cursor, y.start.node);
                            this.cursor.attach();
                          }
                          this.cursor.format(m, h),
                            this.scroll.optimize(),
                            this.setNativeRange(
                              this.cursor.textNode,
                              this.cursor.textNode.data.length
                            ),
                            this.update();
                        }
                      }
                    },
                  },
                  {
                    key: 'getBounds',
                    value: function (m) {
                      var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                        y = this.scroll.length();
                      (m = Math.min(m, y - 1)), (h = Math.min(m + h, y - 1) - m);
                      var A = void 0,
                        T = this.scroll.leaf(m),
                        q = P(T, 2),
                        B = q[0],
                        C = q[1];
                      if (B == null) return null;
                      var Z = B.position(C, !0),
                        M = P(Z, 2);
                      (A = M[0]), (C = M[1]);
                      var R = document.createRange();
                      if (h > 0) {
                        R.setStart(A, C);
                        var E = this.scroll.leaf(m + h),
                          S = P(E, 2);
                        if (((B = S[0]), (C = S[1]), B == null)) return null;
                        var L = B.position(C, !0),
                          F = P(L, 2);
                        return (A = F[0]), (C = F[1]), R.setEnd(A, C), R.getBoundingClientRect();
                      }
                      var D = 'left',
                        x = void 0;
                      return (
                        A instanceof Text
                          ? (C < A.data.length
                              ? (R.setStart(A, C), R.setEnd(A, C + 1))
                              : (R.setStart(A, C - 1), R.setEnd(A, C), (D = 'right')),
                            (x = R.getBoundingClientRect()))
                          : ((x = B.domNode.getBoundingClientRect()), C > 0 && (D = 'right')),
                        {
                          bottom: x.top + x.height,
                          height: x.height,
                          left: x[D],
                          right: x[D],
                          top: x.top,
                          width: 0,
                        }
                      );
                    },
                  },
                  {
                    key: 'getNativeRange',
                    value: function () {
                      var m = document.getSelection();
                      if (m == null || m.rangeCount <= 0) return null;
                      var h = m.getRangeAt(0);
                      if (h == null) return null;
                      var y = this.normalizeNative(h);
                      return n.info('getNativeRange', y), y;
                    },
                  },
                  {
                    key: 'getRange',
                    value: function () {
                      var m = this.getNativeRange();
                      if (m == null) return [null, null];
                      var h = this.normalizedToRange(m);
                      return [h, m];
                    },
                  },
                  {
                    key: 'hasFocus',
                    value: function () {
                      return document.activeElement === this.root;
                    },
                  },
                  {
                    key: 'normalizedToRange',
                    value: function (m) {
                      var h = this,
                        y = [[m.start.node, m.start.offset]];
                      m.native.collapsed || y.push([m.end.node, m.end.offset]);
                      var A = y.map(function (B) {
                          var C = P(B, 2),
                            Z = C[0],
                            M = C[1],
                            R = v.default.find(Z, !0),
                            E = R.offset(h.scroll);
                          return M === 0
                            ? E
                            : R instanceof v.default.Container
                            ? E + R.length()
                            : E + R.index(Z, M);
                        }),
                        T = Math.min(Math.max.apply(Math, r(A)), this.scroll.length() - 1),
                        q = Math.min.apply(Math, [T].concat(r(A)));
                      return new c(q, T - q);
                    },
                  },
                  {
                    key: 'normalizeNative',
                    value: function (m) {
                      if (
                        !b(this.root, m.startContainer) ||
                        (!m.collapsed && !b(this.root, m.endContainer))
                      )
                        return null;
                      var h = {
                        start: { node: m.startContainer, offset: m.startOffset },
                        end: { node: m.endContainer, offset: m.endOffset },
                        native: m,
                      };
                      return (
                        [h.start, h.end].forEach(function (y) {
                          for (
                            var A = y.node, T = y.offset;
                            !(A instanceof Text) && A.childNodes.length > 0;

                          )
                            if (A.childNodes.length > T) (A = A.childNodes[T]), (T = 0);
                            else if (A.childNodes.length === T)
                              (A = A.lastChild),
                                (T = A instanceof Text ? A.data.length : A.childNodes.length + 1);
                            else break;
                          (y.node = A), (y.offset = T);
                        }),
                        h
                      );
                    },
                  },
                  {
                    key: 'rangeToNative',
                    value: function (m) {
                      var h = this,
                        y = m.collapsed ? [m.index] : [m.index, m.index + m.length],
                        A = [],
                        T = this.scroll.length();
                      return (
                        y.forEach(function (q, B) {
                          q = Math.min(T - 1, q);
                          var C = void 0,
                            Z = h.scroll.leaf(q),
                            M = P(Z, 2),
                            R = M[0],
                            E = M[1],
                            S = R.position(E, B !== 0),
                            L = P(S, 2);
                          (C = L[0]), (E = L[1]), A.push(C, E);
                        }),
                        A.length < 2 && (A = A.concat(A)),
                        A
                      );
                    },
                  },
                  {
                    key: 'scrollIntoView',
                    value: function (m) {
                      var h = this.lastRange;
                      if (h != null) {
                        var y = this.getBounds(h.index, h.length);
                        if (y != null) {
                          var A = this.scroll.length() - 1,
                            T = this.scroll.line(Math.min(h.index, A)),
                            q = P(T, 1),
                            B = q[0],
                            C = B;
                          if (h.length > 0) {
                            var Z = this.scroll.line(Math.min(h.index + h.length, A)),
                              M = P(Z, 1);
                            C = M[0];
                          }
                          if (!(B == null || C == null)) {
                            var R = m.getBoundingClientRect();
                            y.top < R.top
                              ? (m.scrollTop -= R.top - y.top)
                              : y.bottom > R.bottom && (m.scrollTop += y.bottom - R.bottom);
                          }
                        }
                      }
                    },
                  },
                  {
                    key: 'setNativeRange',
                    value: function (m, h) {
                      var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : m,
                        A = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : h,
                        T = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
                      if (
                        (n.info('setNativeRange', m, h, y, A),
                        !(
                          m != null &&
                          (this.root.parentNode == null ||
                            m.parentNode == null ||
                            y.parentNode == null)
                        ))
                      ) {
                        var q = document.getSelection();
                        if (q != null)
                          if (m != null) {
                            this.hasFocus() || this.root.focus();
                            var B = (this.getNativeRange() || {}).native;
                            if (
                              B == null ||
                              T ||
                              m !== B.startContainer ||
                              h !== B.startOffset ||
                              y !== B.endContainer ||
                              A !== B.endOffset
                            ) {
                              m.tagName == 'BR' &&
                                ((h = [].indexOf.call(m.parentNode.childNodes, m)),
                                (m = m.parentNode)),
                                y.tagName == 'BR' &&
                                  ((A = [].indexOf.call(y.parentNode.childNodes, y)),
                                  (y = y.parentNode));
                              var C = document.createRange();
                              C.setStart(m, h), C.setEnd(y, A), q.removeAllRanges(), q.addRange(C);
                            }
                          } else q.removeAllRanges(), this.root.blur(), document.body.focus();
                      }
                    },
                  },
                  {
                    key: 'setRange',
                    value: function (m) {
                      var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                        y =
                          arguments.length > 2 && arguments[2] !== void 0
                            ? arguments[2]
                            : u.default.sources.API;
                      if (
                        (typeof h === 'string' && ((y = h), (h = !1)),
                        n.info('setRange', m),
                        m != null)
                      ) {
                        var A = this.rangeToNative(m);
                        this.setNativeRange.apply(this, r(A).concat([h]));
                      } else this.setNativeRange(null);
                      this.update(y);
                    },
                  },
                  {
                    key: 'update',
                    value: function () {
                      var m =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : u.default.sources.USER,
                        h = this.lastRange,
                        y = this.getRange(),
                        A = P(y, 2),
                        T = A[0],
                        q = A[1];
                      if (
                        ((this.lastRange = T),
                        this.lastRange != null && (this.savedRange = this.lastRange),
                        !(0, t.default)(h, this.lastRange))
                      ) {
                        var B;
                        !this.composing &&
                          q != null &&
                          q.native.collapsed &&
                          q.start.node !== this.cursor.textNode &&
                          this.cursor.restore();
                        var C = [
                          u.default.events.SELECTION_CHANGE,
                          (0, s.default)(this.lastRange),
                          (0, s.default)(h),
                          m,
                        ];
                        if (
                          ((B = this.emitter).emit.apply(
                            B,
                            [u.default.events.EDITOR_CHANGE].concat(C)
                          ),
                          m !== u.default.sources.SILENT)
                        ) {
                          var Z;
                          (Z = this.emitter).emit.apply(Z, C);
                        }
                      }
                    },
                  },
                ]),
                _
              );
            })();
          function b(_, N) {
            try {
              N.parentNode;
            } catch {
              return !1;
            }
            return N instanceof Text && (N = N.parentNode), _.contains(N);
          }
          (g.Range = c), (g.default = k);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function u(l, a) {
                for (var i = 0; i < a.length; i++) {
                  var r = a[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(l, r.key, r);
                }
              }
              return function (l, a, i) {
                return a && u(l.prototype, a), i && u(l, i), l;
              };
            })(),
            w = function u(l, a, i) {
              l === null && (l = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(l, a);
              if (r === void 0) {
                var f = Object.getPrototypeOf(l);
                return f === null ? void 0 : u(f, a, i);
              }
              if ('value' in r) return r.value;
              var n = r.get;
              return n === void 0 ? void 0 : n.call(i);
            },
            O = p(0),
            v = d(O);
          function d(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function s(u, l) {
            if (!(u instanceof l)) throw new TypeError('Cannot call a class as a function');
          }
          function o(u, l) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l === 'object' || typeof l === 'function') ? l : u;
          }
          function t(u, l) {
            if (typeof l !== 'function' && l !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof l
              );
            (u.prototype = Object.create(l && l.prototype, {
              constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
            })),
              l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : (u.__proto__ = l));
          }
          var e = (function (u) {
            t(l, u);
            function l() {
              return (
                s(this, l),
                o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments))
              );
            }
            return (
              P(
                l,
                [
                  {
                    key: 'insertInto',
                    value: function (i, r) {
                      i.children.length === 0
                        ? w(
                            l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                            'insertInto',
                            this
                          ).call(this, i, r)
                        : this.remove();
                    },
                  },
                  {
                    key: 'length',
                    value: function () {
                      return 0;
                    },
                  },
                  {
                    key: 'value',
                    value: function () {
                      return '';
                    },
                  },
                ],
                [{ key: 'value', value: function () {} }]
              ),
              l
            );
          })(v.default.Embed);
          (e.blotName = 'break'), (e.tagName = 'BR'), (g.default = e);
        },
        function (j, g, p) {
          'use strict';
          var P =
            (this && this.__extends) ||
            (function () {
              var o =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var u in e) e.hasOwnProperty(u) && (t[u] = e[u]);
                };
              return function (t, e) {
                o(t, e);
                function u() {
                  this.constructor = t;
                }
                t.prototype =
                  e === null ? Object.create(e) : ((u.prototype = e.prototype), new u());
              };
            })();
          Object.defineProperty(g, '__esModule', { value: !0 });
          var w = p(44),
            O = p(30),
            v = p(1),
            d = (function (o) {
              P(t, o);
              function t(e) {
                var u = o.call(this, e) || this;
                return u.build(), u;
              }
              return (
                (t.prototype.appendChild = function (e) {
                  this.insertBefore(e);
                }),
                (t.prototype.attach = function () {
                  o.prototype.attach.call(this),
                    this.children.forEach(function (e) {
                      e.attach();
                    });
                }),
                (t.prototype.build = function () {
                  var e = this;
                  (this.children = new w.default()),
                    [].slice
                      .call(this.domNode.childNodes)
                      .reverse()
                      .forEach(function (u) {
                        try {
                          var l = s(u);
                          e.insertBefore(l, e.children.head || void 0);
                        } catch (a) {
                          if (a instanceof v.ParchmentError) return;
                          throw a;
                        }
                      });
                }),
                (t.prototype.deleteAt = function (e, u) {
                  if (e === 0 && u === this.length()) return this.remove();
                  this.children.forEachAt(e, u, function (l, a, i) {
                    l.deleteAt(a, i);
                  });
                }),
                (t.prototype.descendant = function (e, u) {
                  var l = this.children.find(u),
                    a = l[0],
                    i = l[1];
                  return (e.blotName == null && e(a)) || (e.blotName != null && a instanceof e)
                    ? [a, i]
                    : a instanceof t
                    ? a.descendant(e, i)
                    : [null, -1];
                }),
                (t.prototype.descendants = function (e, u, l) {
                  u === void 0 && (u = 0), l === void 0 && (l = Number.MAX_VALUE);
                  var a = [],
                    i = l;
                  return (
                    this.children.forEachAt(u, l, function (r, f, n) {
                      ((e.blotName == null && e(r)) || (e.blotName != null && r instanceof e)) &&
                        a.push(r),
                        r instanceof t && (a = a.concat(r.descendants(e, f, i))),
                        (i -= n);
                    }),
                    a
                  );
                }),
                (t.prototype.detach = function () {
                  this.children.forEach(function (e) {
                    e.detach();
                  }),
                    o.prototype.detach.call(this);
                }),
                (t.prototype.formatAt = function (e, u, l, a) {
                  this.children.forEachAt(e, u, function (i, r, f) {
                    i.formatAt(r, f, l, a);
                  });
                }),
                (t.prototype.insertAt = function (e, u, l) {
                  var a = this.children.find(e),
                    i = a[0],
                    r = a[1];
                  if (i) i.insertAt(r, u, l);
                  else {
                    var f = l == null ? v.create('text', u) : v.create(u, l);
                    this.appendChild(f);
                  }
                }),
                (t.prototype.insertBefore = function (e, u) {
                  if (
                    this.statics.allowedChildren != null &&
                    !this.statics.allowedChildren.some(function (l) {
                      return e instanceof l;
                    })
                  )
                    throw new v.ParchmentError(
                      'Cannot insert ' + e.statics.blotName + ' into ' + this.statics.blotName
                    );
                  e.insertInto(this, u);
                }),
                (t.prototype.length = function () {
                  return this.children.reduce(function (e, u) {
                    return e + u.length();
                  }, 0);
                }),
                (t.prototype.moveChildren = function (e, u) {
                  this.children.forEach(function (l) {
                    e.insertBefore(l, u);
                  });
                }),
                (t.prototype.optimize = function (e) {
                  if ((o.prototype.optimize.call(this, e), this.children.length === 0))
                    if (this.statics.defaultChild != null) {
                      var u = v.create(this.statics.defaultChild);
                      this.appendChild(u), u.optimize(e);
                    } else this.remove();
                }),
                (t.prototype.path = function (e, u) {
                  u === void 0 && (u = !1);
                  var l = this.children.find(e, u),
                    a = l[0],
                    i = l[1],
                    r = [[this, e]];
                  return a instanceof t ? r.concat(a.path(i, u)) : (a != null && r.push([a, i]), r);
                }),
                (t.prototype.removeChild = function (e) {
                  this.children.remove(e);
                }),
                (t.prototype.replace = function (e) {
                  e instanceof t && e.moveChildren(this), o.prototype.replace.call(this, e);
                }),
                (t.prototype.split = function (e, u) {
                  if ((u === void 0 && (u = !1), !u)) {
                    if (e === 0) return this;
                    if (e === this.length()) return this.next;
                  }
                  var l = this.clone();
                  return (
                    this.parent.insertBefore(l, this.next),
                    this.children.forEachAt(e, this.length(), function (a, i, r) {
                      (a = a.split(i, u)), l.appendChild(a);
                    }),
                    l
                  );
                }),
                (t.prototype.unwrap = function () {
                  this.moveChildren(this.parent, this.next), this.remove();
                }),
                (t.prototype.update = function (e, u) {
                  var l = this,
                    a = [],
                    i = [];
                  e.forEach(function (r) {
                    r.target === l.domNode &&
                      r.type === 'childList' &&
                      (a.push.apply(a, r.addedNodes), i.push.apply(i, r.removedNodes));
                  }),
                    i.forEach(function (r) {
                      if (
                        !(
                          r.parentNode != null &&
                          r.tagName !== 'IFRAME' &&
                          document.body.compareDocumentPosition(r) &
                            Node.DOCUMENT_POSITION_CONTAINED_BY
                        )
                      ) {
                        var f = v.find(r);
                        f != null &&
                          (f.domNode.parentNode == null || f.domNode.parentNode === l.domNode) &&
                          f.detach();
                      }
                    }),
                    a
                      .filter(function (r) {
                        return r.parentNode == l.domNode;
                      })
                      .sort(function (r, f) {
                        return r === f
                          ? 0
                          : r.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_FOLLOWING
                          ? 1
                          : -1;
                      })
                      .forEach(function (r) {
                        var f = null;
                        r.nextSibling != null && (f = v.find(r.nextSibling));
                        var n = s(r);
                        (n.next != f || n.next == null) &&
                          (n.parent != null && n.parent.removeChild(l),
                          l.insertBefore(n, f || void 0));
                      });
                }),
                t
              );
            })(O.default);
          function s(o) {
            var t = v.find(o);
            if (t == null)
              try {
                t = v.create(o);
              } catch {
                (t = v.create(v.Scope.INLINE)),
                  [].slice.call(o.childNodes).forEach(function (u) {
                    t.domNode.appendChild(u);
                  }),
                  o.parentNode && o.parentNode.replaceChild(t.domNode, o),
                  t.attach();
              }
            return t;
          }
          g.default = d;
        },
        function (j, g, p) {
          'use strict';
          var P =
            (this && this.__extends) ||
            (function () {
              var o =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var u in e) e.hasOwnProperty(u) && (t[u] = e[u]);
                };
              return function (t, e) {
                o(t, e);
                function u() {
                  this.constructor = t;
                }
                t.prototype =
                  e === null ? Object.create(e) : ((u.prototype = e.prototype), new u());
              };
            })();
          Object.defineProperty(g, '__esModule', { value: !0 });
          var w = p(12),
            O = p(31),
            v = p(17),
            d = p(1),
            s = (function (o) {
              P(t, o);
              function t(e) {
                var u = o.call(this, e) || this;
                return (u.attributes = new O.default(u.domNode)), u;
              }
              return (
                (t.formats = function (e) {
                  if (typeof this.tagName === 'string') return !0;
                  if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
                }),
                (t.prototype.format = function (e, u) {
                  var l = d.query(e);
                  l instanceof w.default
                    ? this.attributes.attribute(l, u)
                    : u &&
                      l != null &&
                      (e !== this.statics.blotName || this.formats()[e] !== u) &&
                      this.replaceWith(e, u);
                }),
                (t.prototype.formats = function () {
                  var e = this.attributes.values(),
                    u = this.statics.formats(this.domNode);
                  return u != null && (e[this.statics.blotName] = u), e;
                }),
                (t.prototype.replaceWith = function (e, u) {
                  var l = o.prototype.replaceWith.call(this, e, u);
                  return this.attributes.copy(l), l;
                }),
                (t.prototype.update = function (e, u) {
                  var l = this;
                  o.prototype.update.call(this, e, u),
                    e.some(function (a) {
                      return a.target === l.domNode && a.type === 'attributes';
                    }) && this.attributes.build();
                }),
                (t.prototype.wrap = function (e, u) {
                  var l = o.prototype.wrap.call(this, e, u);
                  return (
                    l instanceof t &&
                      l.statics.scope === this.statics.scope &&
                      this.attributes.move(l),
                    l
                  );
                }),
                t
              );
            })(v.default);
          g.default = s;
        },
        function (j, g, p) {
          'use strict';
          var P =
            (this && this.__extends) ||
            (function () {
              var d =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (s, o) {
                    s.__proto__ = o;
                  }) ||
                function (s, o) {
                  for (var t in o) o.hasOwnProperty(t) && (s[t] = o[t]);
                };
              return function (s, o) {
                d(s, o);
                function t() {
                  this.constructor = s;
                }
                s.prototype =
                  o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
              };
            })();
          Object.defineProperty(g, '__esModule', { value: !0 });
          var w = p(30),
            O = p(1),
            v = (function (d) {
              P(s, d);
              function s() {
                return (d !== null && d.apply(this, arguments)) || this;
              }
              return (
                (s.value = function (o) {
                  return !0;
                }),
                (s.prototype.index = function (o, t) {
                  return this.domNode === o ||
                    this.domNode.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY
                    ? Math.min(t, 1)
                    : -1;
                }),
                (s.prototype.position = function (o, t) {
                  var e = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                  return o > 0 && (e += 1), [this.parent.domNode, e];
                }),
                (s.prototype.value = function () {
                  return (
                    (o = {}), (o[this.statics.blotName] = this.statics.value(this.domNode) || !0), o
                  );
                  var o;
                }),
                (s.scope = O.Scope.INLINE_BLOT),
                s
              );
            })(w.default);
          g.default = v;
        },
        function (j, g, p) {
          var P = p(11),
            w = p(3),
            O = {
              attributes: {
                compose: function (d, s, o) {
                  typeof d !== 'object' && (d = {}), typeof s !== 'object' && (s = {});
                  var t = w(!0, {}, s);
                  o ||
                    (t = Object.keys(t).reduce(function (u, l) {
                      return t[l] != null && (u[l] = t[l]), u;
                    }, {}));
                  for (var e in d) d[e] !== void 0 && s[e] === void 0 && (t[e] = d[e]);
                  return Object.keys(t).length > 0 ? t : void 0;
                },
                diff: function (d, s) {
                  typeof d !== 'object' && (d = {}), typeof s !== 'object' && (s = {});
                  var o = Object.keys(d)
                    .concat(Object.keys(s))
                    .reduce(function (t, e) {
                      return P(d[e], s[e]) || (t[e] = s[e] === void 0 ? null : s[e]), t;
                    }, {});
                  return Object.keys(o).length > 0 ? o : void 0;
                },
                transform: function (d, s, o) {
                  if (typeof d !== 'object') return s;
                  if (typeof s === 'object') {
                    if (!o) return s;
                    var t = Object.keys(s).reduce(function (e, u) {
                      return d[u] === void 0 && (e[u] = s[u]), e;
                    }, {});
                    return Object.keys(t).length > 0 ? t : void 0;
                  }
                },
              },
              iterator: function (d) {
                return new v(d);
              },
              length: function (d) {
                return typeof d.delete === 'number'
                  ? d.delete
                  : typeof d.retain === 'number'
                  ? d.retain
                  : typeof d.insert === 'string'
                  ? d.insert.length
                  : 1;
              },
            };
          function v(d) {
            (this.ops = d), (this.index = 0), (this.offset = 0);
          }
          (v.prototype.hasNext = function () {
            return this.peekLength() < 1 / 0;
          }),
            (v.prototype.next = function (d) {
              d || (d = 1 / 0);
              var s = this.ops[this.index];
              if (s) {
                var o = this.offset,
                  t = O.length(s);
                if (
                  (d >= t - o
                    ? ((d = t - o), (this.index += 1), (this.offset = 0))
                    : (this.offset += d),
                  typeof s.delete === 'number')
                )
                  return { delete: d };
                var e = {};
                return (
                  s.attributes && (e.attributes = s.attributes),
                  typeof s.retain === 'number'
                    ? (e.retain = d)
                    : typeof s.insert === 'string'
                    ? (e.insert = s.insert.substr(o, d))
                    : (e.insert = s.insert),
                  e
                );
              }
              return { retain: 1 / 0 };
            }),
            (v.prototype.peek = function () {
              return this.ops[this.index];
            }),
            (v.prototype.peekLength = function () {
              return this.ops[this.index] ? O.length(this.ops[this.index]) - this.offset : 1 / 0;
            }),
            (v.prototype.peekType = function () {
              return this.ops[this.index]
                ? typeof this.ops[this.index].delete === 'number'
                  ? 'delete'
                  : typeof this.ops[this.index].retain === 'number'
                  ? 'retain'
                  : 'insert'
                : 'retain';
            }),
            (j.exports = O);
        },
        function (j, g) {
          var p = (function () {
            'use strict';
            function P(l, a) {
              return a != null && l instanceof a;
            }
            var w;
            try {
              w = Map;
            } catch {
              w = function () {};
            }
            var O;
            try {
              O = Set;
            } catch {
              O = function () {};
            }
            var v;
            try {
              v = Promise;
            } catch {
              v = function () {};
            }
            function d(l, a, i, r, f) {
              typeof a === 'object' &&
                ((i = a.depth), (r = a.prototype), (f = a.includeNonEnumerable), (a = a.circular));
              var n = [],
                c = [],
                k = typeof Buffer !== 'undefined';
              typeof a === 'undefined' && (a = !0), typeof i === 'undefined' && (i = 1 / 0);
              function b(_, N) {
                if (_ === null) return null;
                if (N === 0) return _;
                var m, h;
                if (typeof _ !== 'object') return _;
                if (P(_, w)) m = new w();
                else if (P(_, O)) m = new O();
                else if (P(_, v))
                  m = new v(function (R, E) {
                    _.then(
                      function (S) {
                        R(b(S, N - 1));
                      },
                      function (S) {
                        E(b(S, N - 1));
                      }
                    );
                  });
                else if (d.__isArray(_)) m = [];
                else if (d.__isRegExp(_))
                  (m = new RegExp(_.source, u(_))), _.lastIndex && (m.lastIndex = _.lastIndex);
                else if (d.__isDate(_)) m = new Date(_.getTime());
                else {
                  if (k && Buffer.isBuffer(_)) return (m = new Buffer(_.length)), _.copy(m), m;
                  P(_, Error)
                    ? (m = Object.create(_))
                    : typeof r === 'undefined'
                    ? ((h = Object.getPrototypeOf(_)), (m = Object.create(h)))
                    : ((m = Object.create(r)), (h = r));
                }
                if (a) {
                  var y = n.indexOf(_);
                  if (y != -1) return c[y];
                  n.push(_), c.push(m);
                }
                P(_, w) &&
                  _.forEach(function (R, E) {
                    var S = b(E, N - 1),
                      L = b(R, N - 1);
                    m.set(S, L);
                  }),
                  P(_, O) &&
                    _.forEach(function (R) {
                      var E = b(R, N - 1);
                      m.add(E);
                    });
                for (var A in _) {
                  var T;
                  h && (T = Object.getOwnPropertyDescriptor(h, A)),
                    !(T && T.set == null) && (m[A] = b(_[A], N - 1));
                }
                if (Object.getOwnPropertySymbols)
                  for (var q = Object.getOwnPropertySymbols(_), A = 0; A < q.length; A++) {
                    var B = q[A],
                      C = Object.getOwnPropertyDescriptor(_, B);
                    (C && !C.enumerable && !f) ||
                      ((m[B] = b(_[B], N - 1)),
                      C.enumerable || Object.defineProperty(m, B, { enumerable: !1 }));
                  }
                if (f)
                  for (var Z = Object.getOwnPropertyNames(_), A = 0; A < Z.length; A++) {
                    var M = Z[A],
                      C = Object.getOwnPropertyDescriptor(_, M);
                    (C && C.enumerable) ||
                      ((m[M] = b(_[M], N - 1)), Object.defineProperty(m, M, { enumerable: !1 }));
                  }
                return m;
              }
              return b(l, i);
            }
            d.clonePrototype = function (a) {
              if (a === null) return null;
              var i = function () {};
              return (i.prototype = a), new i();
            };
            function s(l) {
              return Object.prototype.toString.call(l);
            }
            d.__objToStr = s;
            function o(l) {
              return typeof l === 'object' && s(l) === '[object Date]';
            }
            d.__isDate = o;
            function t(l) {
              return typeof l === 'object' && s(l) === '[object Array]';
            }
            d.__isArray = t;
            function e(l) {
              return typeof l === 'object' && s(l) === '[object RegExp]';
            }
            d.__isRegExp = e;
            function u(l) {
              var a = '';
              return (
                l.global && (a += 'g'), l.ignoreCase && (a += 'i'), l.multiline && (a += 'm'), a
              );
            }
            return (d.__getRegExpFlags = u), d;
          })();
          typeof j === 'object' && j.exports && (j.exports = p);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function m(h, y) {
                var A = [],
                  T = !0,
                  q = !1,
                  B = void 0;
                try {
                  for (
                    var C = h[Symbol.iterator](), Z;
                    !(T = (Z = C.next()).done) && (A.push(Z.value), !(y && A.length === y));
                    T = !0
                  );
                } catch (M) {
                  (q = !0), (B = M);
                } finally {
                  try {
                    !T && C.return && C.return();
                  } finally {
                    if (q) throw B;
                  }
                }
                return A;
              }
              return function (h, y) {
                if (Array.isArray(h)) return h;
                if (Symbol.iterator in Object(h)) return m(h, y);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            w = (function () {
              function m(h, y) {
                for (var A = 0; A < y.length; A++) {
                  var T = y[A];
                  (T.enumerable = T.enumerable || !1),
                    (T.configurable = !0),
                    'value' in T && (T.writable = !0),
                    Object.defineProperty(h, T.key, T);
                }
              }
              return function (h, y, A) {
                return y && m(h.prototype, y), A && m(h, A), h;
              };
            })(),
            O = function m(h, y, A) {
              h === null && (h = Function.prototype);
              var T = Object.getOwnPropertyDescriptor(h, y);
              if (T === void 0) {
                var q = Object.getPrototypeOf(h);
                return q === null ? void 0 : m(q, y, A);
              }
              if ('value' in T) return T.value;
              var B = T.get;
              return B === void 0 ? void 0 : B.call(A);
            },
            v = p(0),
            d = n(v),
            s = p(8),
            o = n(s),
            t = p(4),
            e = n(t),
            u = p(16),
            l = n(u),
            a = p(13),
            i = n(a),
            r = p(25),
            f = n(r);
          function n(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function c(m, h) {
            if (!(m instanceof h)) throw new TypeError('Cannot call a class as a function');
          }
          function k(m, h) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h && (typeof h === 'object' || typeof h === 'function') ? h : m;
          }
          function b(m, h) {
            if (typeof h !== 'function' && h !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof h
              );
            (m.prototype = Object.create(h && h.prototype, {
              constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 },
            })),
              h && (Object.setPrototypeOf ? Object.setPrototypeOf(m, h) : (m.__proto__ = h));
          }
          function _(m) {
            return m instanceof e.default || m instanceof t.BlockEmbed;
          }
          var N = (function (m) {
            b(h, m);
            function h(y, A) {
              c(this, h);
              var T = k(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, y));
              return (
                (T.emitter = A.emitter),
                Array.isArray(A.whitelist) &&
                  (T.whitelist = A.whitelist.reduce(function (q, B) {
                    return (q[B] = !0), q;
                  }, {})),
                T.domNode.addEventListener('DOMNodeInserted', function () {}),
                T.optimize(),
                T.enable(),
                T
              );
            }
            return (
              w(h, [
                {
                  key: 'batchStart',
                  value: function () {
                    this.batch = !0;
                  },
                },
                {
                  key: 'batchEnd',
                  value: function () {
                    (this.batch = !1), this.optimize();
                  },
                },
                {
                  key: 'deleteAt',
                  value: function (A, T) {
                    var q = this.line(A),
                      B = P(q, 2),
                      C = B[0],
                      Z = B[1],
                      M = this.line(A + T),
                      R = P(M, 1),
                      E = R[0];
                    if (
                      (O(
                        h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                        'deleteAt',
                        this
                      ).call(this, A, T),
                      E != null && C !== E && Z > 0)
                    ) {
                      if (C instanceof t.BlockEmbed || E instanceof t.BlockEmbed) {
                        this.optimize();
                        return;
                      }
                      if (C instanceof i.default) {
                        var S = C.newlineIndex(C.length(), !0);
                        if (S > -1 && ((C = C.split(S + 1)), C === E)) {
                          this.optimize();
                          return;
                        }
                      } else if (E instanceof i.default) {
                        var L = E.newlineIndex(0);
                        L > -1 && E.split(L + 1);
                      }
                      var F = E.children.head instanceof l.default ? null : E.children.head;
                      C.moveChildren(E, F), C.remove();
                    }
                    this.optimize();
                  },
                },
                {
                  key: 'enable',
                  value: function () {
                    var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                    this.domNode.setAttribute('contenteditable', A);
                  },
                },
                {
                  key: 'formatAt',
                  value: function (A, T, q, B) {
                    (this.whitelist != null && !this.whitelist[q]) ||
                      (O(
                        h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                        'formatAt',
                        this
                      ).call(this, A, T, q, B),
                      this.optimize());
                  },
                },
                {
                  key: 'insertAt',
                  value: function (A, T, q) {
                    if (!(q != null && this.whitelist != null && !this.whitelist[T])) {
                      if (A >= this.length())
                        if (q == null || d.default.query(T, d.default.Scope.BLOCK) == null) {
                          var B = d.default.create(this.statics.defaultChild);
                          this.appendChild(B),
                            q == null &&
                              T.endsWith(`
`) &&
                              (T = T.slice(0, -1)),
                            B.insertAt(0, T, q);
                        } else {
                          var C = d.default.create(T, q);
                          this.appendChild(C);
                        }
                      else
                        O(
                          h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                          'insertAt',
                          this
                        ).call(this, A, T, q);
                      this.optimize();
                    }
                  },
                },
                {
                  key: 'insertBefore',
                  value: function (A, T) {
                    if (A.statics.scope === d.default.Scope.INLINE_BLOT) {
                      var q = d.default.create(this.statics.defaultChild);
                      q.appendChild(A), (A = q);
                    }
                    O(
                      h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                      'insertBefore',
                      this
                    ).call(this, A, T);
                  },
                },
                {
                  key: 'leaf',
                  value: function (A) {
                    return this.path(A).pop() || [null, -1];
                  },
                },
                {
                  key: 'line',
                  value: function (A) {
                    return A === this.length() ? this.line(A - 1) : this.descendant(_, A);
                  },
                },
                {
                  key: 'lines',
                  value: function () {
                    var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                      T =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : Number.MAX_VALUE,
                      q = function B(C, Z, M) {
                        var R = [],
                          E = M;
                        return (
                          C.children.forEachAt(Z, M, function (S, L, F) {
                            _(S)
                              ? R.push(S)
                              : S instanceof d.default.Container && (R = R.concat(B(S, L, E))),
                              (E -= F);
                          }),
                          R
                        );
                      };
                    return q(this, A, T);
                  },
                },
                {
                  key: 'optimize',
                  value: function () {
                    var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                      T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    this.batch !== !0 &&
                      (O(
                        h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                        'optimize',
                        this
                      ).call(this, A, T),
                      A.length > 0 && this.emitter.emit(o.default.events.SCROLL_OPTIMIZE, A, T));
                  },
                },
                {
                  key: 'path',
                  value: function (A) {
                    return O(
                      h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                      'path',
                      this
                    )
                      .call(this, A)
                      .slice(1);
                  },
                },
                {
                  key: 'update',
                  value: function (A) {
                    if (this.batch !== !0) {
                      var T = o.default.sources.USER;
                      typeof A === 'string' && (T = A),
                        Array.isArray(A) || (A = this.observer.takeRecords()),
                        A.length > 0 &&
                          this.emitter.emit(o.default.events.SCROLL_BEFORE_UPDATE, T, A),
                        O(
                          h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                          'update',
                          this
                        ).call(this, A.concat([])),
                        A.length > 0 && this.emitter.emit(o.default.events.SCROLL_UPDATE, T, A);
                    }
                  },
                },
              ]),
              h
            );
          })(d.default.Scroll);
          (N.blotName = 'scroll'),
            (N.className = 'ql-editor'),
            (N.tagName = 'DIV'),
            (N.defaultChild = 'block'),
            (N.allowedChildren = [e.default, t.BlockEmbed, f.default]),
            (g.default = N);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }), (g.SHORTKEY = g.default = void 0);
          var P =
              typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function (x) {
                    return typeof x;
                  }
                : function (x) {
                    return x &&
                      typeof Symbol === 'function' &&
                      x.constructor === Symbol &&
                      x !== Symbol.prototype
                      ? 'symbol'
                      : typeof x;
                  },
            w = (function () {
              function x(I, U) {
                var H = [],
                  V = !0,
                  Y = !1,
                  X = void 0;
                try {
                  for (
                    var Q = I[Symbol.iterator](), nt;
                    !(V = (nt = Q.next()).done) && (H.push(nt.value), !(U && H.length === U));
                    V = !0
                  );
                } catch (rt) {
                  (Y = !0), (X = rt);
                } finally {
                  try {
                    !V && Q.return && Q.return();
                  } finally {
                    if (Y) throw X;
                  }
                }
                return H;
              }
              return function (I, U) {
                if (Array.isArray(I)) return I;
                if (Symbol.iterator in Object(I)) return x(I, U);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            O = (function () {
              function x(I, U) {
                for (var H = 0; H < U.length; H++) {
                  var V = U[H];
                  (V.enumerable = V.enumerable || !1),
                    (V.configurable = !0),
                    'value' in V && (V.writable = !0),
                    Object.defineProperty(I, V.key, V);
                }
              }
              return function (I, U, H) {
                return U && x(I.prototype, U), H && x(I, H), I;
              };
            })(),
            v = p(21),
            d = m(v),
            s = p(11),
            o = m(s),
            t = p(3),
            e = m(t),
            u = p(2),
            l = m(u),
            a = p(20),
            i = m(a),
            r = p(0),
            f = m(r),
            n = p(5),
            c = m(n),
            k = p(10),
            b = m(k),
            _ = p(9),
            N = m(_);
          function m(x) {
            return x && x.__esModule ? x : { default: x };
          }
          function h(x, I, U) {
            return (
              I in x
                ? Object.defineProperty(x, I, {
                    value: U,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (x[I] = U),
              x
            );
          }
          function y(x, I) {
            if (!(x instanceof I)) throw new TypeError('Cannot call a class as a function');
          }
          function A(x, I) {
            if (!x)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return I && (typeof I === 'object' || typeof I === 'function') ? I : x;
          }
          function T(x, I) {
            if (typeof I !== 'function' && I !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof I
              );
            (x.prototype = Object.create(I && I.prototype, {
              constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 },
            })),
              I && (Object.setPrototypeOf ? Object.setPrototypeOf(x, I) : (x.__proto__ = I));
          }
          var q = (0, b.default)('quill:keyboard'),
            B = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey',
            C = (function (x) {
              T(I, x),
                O(I, null, [
                  {
                    key: 'match',
                    value: function (H, V) {
                      return (
                        (V = D(V)),
                        ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (Y) {
                          return !!V[Y] !== H[Y] && V[Y] !== null;
                        })
                          ? !1
                          : V.key === (H.which || H.keyCode)
                      );
                    },
                  },
                ]);
              function I(U, H) {
                y(this, I);
                var V = A(this, (I.__proto__ || Object.getPrototypeOf(I)).call(this, U, H));
                return (
                  (V.bindings = {}),
                  Object.keys(V.options.bindings).forEach(function (Y) {
                    (Y === 'list autofill' &&
                      U.scroll.whitelist != null &&
                      !U.scroll.whitelist.list) ||
                      (V.options.bindings[Y] && V.addBinding(V.options.bindings[Y]));
                  }),
                  V.addBinding({ key: I.keys.ENTER, shiftKey: null }, S),
                  V.addBinding(
                    { key: I.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null },
                    function () {}
                  ),
                  /Firefox/i.test(navigator.userAgent)
                    ? (V.addBinding({ key: I.keys.BACKSPACE }, { collapsed: !0 }, M),
                      V.addBinding({ key: I.keys.DELETE }, { collapsed: !0 }, R))
                    : (V.addBinding(
                        { key: I.keys.BACKSPACE },
                        { collapsed: !0, prefix: /^.?$/ },
                        M
                      ),
                      V.addBinding({ key: I.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, R)),
                  V.addBinding({ key: I.keys.BACKSPACE }, { collapsed: !1 }, E),
                  V.addBinding({ key: I.keys.DELETE }, { collapsed: !1 }, E),
                  V.addBinding(
                    {
                      key: I.keys.BACKSPACE,
                      altKey: null,
                      ctrlKey: null,
                      metaKey: null,
                      shiftKey: null,
                    },
                    { collapsed: !0, offset: 0 },
                    M
                  ),
                  V.listen(),
                  V
                );
              }
              return (
                O(I, [
                  {
                    key: 'addBinding',
                    value: function (H) {
                      var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        X = D(H);
                      if (X == null || X.key == null)
                        return q.warn('Attempted to add invalid keyboard binding', X);
                      typeof V === 'function' && (V = { handler: V }),
                        typeof Y === 'function' && (Y = { handler: Y }),
                        (X = (0, e.default)(X, V, Y)),
                        (this.bindings[X.key] = this.bindings[X.key] || []),
                        this.bindings[X.key].push(X);
                    },
                  },
                  {
                    key: 'listen',
                    value: function () {
                      var H = this;
                      this.quill.root.addEventListener('keydown', function (V) {
                        if (!V.defaultPrevented) {
                          var Y = V.which || V.keyCode,
                            X = (H.bindings[Y] || []).filter(function (ot) {
                              return I.match(V, ot);
                            });
                          if (X.length !== 0) {
                            var Q = H.quill.getSelection();
                            if (!(Q == null || !H.quill.hasFocus())) {
                              var nt = H.quill.getLine(Q.index),
                                rt = w(nt, 2),
                                at = rt[0],
                                lt = rt[1],
                                z = H.quill.getLeaf(Q.index),
                                K = w(z, 2),
                                $ = K[0],
                                G = K[1],
                                W = Q.length === 0 ? [$, G] : H.quill.getLeaf(Q.index + Q.length),
                                J = w(W, 2),
                                tt = J[0],
                                et = J[1],
                                ut = $ instanceof f.default.Text ? $.value().slice(0, G) : '',
                                st = tt instanceof f.default.Text ? tt.value().slice(et) : '',
                                it = {
                                  collapsed: Q.length === 0,
                                  empty: Q.length === 0 && at.length() <= 1,
                                  format: H.quill.getFormat(Q),
                                  offset: lt,
                                  prefix: ut,
                                  suffix: st,
                                },
                                gt = X.some(function (ot) {
                                  if (
                                    (ot.collapsed != null && ot.collapsed !== it.collapsed) ||
                                    (ot.empty != null && ot.empty !== it.empty) ||
                                    (ot.offset != null && ot.offset !== it.offset)
                                  )
                                    return !1;
                                  if (Array.isArray(ot.format)) {
                                    if (
                                      ot.format.every(function (ft) {
                                        return it.format[ft] == null;
                                      })
                                    )
                                      return !1;
                                  } else if (
                                    P(ot.format) === 'object' &&
                                    !Object.keys(ot.format).every(function (ft) {
                                      return ot.format[ft] === !0
                                        ? it.format[ft] != null
                                        : ot.format[ft] === !1
                                        ? it.format[ft] == null
                                        : (0, o.default)(ot.format[ft], it.format[ft]);
                                    })
                                  )
                                    return !1;
                                  return (ot.prefix != null && !ot.prefix.test(it.prefix)) ||
                                    (ot.suffix != null && !ot.suffix.test(it.suffix))
                                    ? !1
                                    : ot.handler.call(H, Q, it) !== !0;
                                });
                              gt && V.preventDefault();
                            }
                          }
                        }
                      });
                    },
                  },
                ]),
                I
              );
            })(N.default);
          (C.keys = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46,
          }),
            (C.DEFAULTS = {
              bindings: {
                bold: F('bold'),
                italic: F('italic'),
                underline: F('underline'),
                indent: {
                  key: C.keys.TAB,
                  format: ['blockquote', 'indent', 'list'],
                  handler: function (I, U) {
                    if (U.collapsed && U.offset !== 0) return !0;
                    this.quill.format('indent', '+1', c.default.sources.USER);
                  },
                },
                outdent: {
                  key: C.keys.TAB,
                  shiftKey: !0,
                  format: ['blockquote', 'indent', 'list'],
                  handler: function (I, U) {
                    if (U.collapsed && U.offset !== 0) return !0;
                    this.quill.format('indent', '-1', c.default.sources.USER);
                  },
                },
                'outdent backspace': {
                  key: C.keys.BACKSPACE,
                  collapsed: !0,
                  shiftKey: null,
                  metaKey: null,
                  ctrlKey: null,
                  altKey: null,
                  format: ['indent', 'list'],
                  offset: 0,
                  handler: function (I, U) {
                    U.format.indent != null
                      ? this.quill.format('indent', '-1', c.default.sources.USER)
                      : U.format.list != null &&
                        this.quill.format('list', !1, c.default.sources.USER);
                  },
                },
                'indent code-block': L(!0),
                'outdent code-block': L(!1),
                'remove tab': {
                  key: C.keys.TAB,
                  shiftKey: !0,
                  collapsed: !0,
                  prefix: /\t$/,
                  handler: function (I) {
                    this.quill.deleteText(I.index - 1, 1, c.default.sources.USER);
                  },
                },
                tab: {
                  key: C.keys.TAB,
                  handler: function (I) {
                    this.quill.history.cutoff();
                    var U = new l.default().retain(I.index).delete(I.length).insert('	');
                    this.quill.updateContents(U, c.default.sources.USER),
                      this.quill.history.cutoff(),
                      this.quill.setSelection(I.index + 1, c.default.sources.SILENT);
                  },
                },
                'list empty enter': {
                  key: C.keys.ENTER,
                  collapsed: !0,
                  format: ['list'],
                  empty: !0,
                  handler: function (I, U) {
                    this.quill.format('list', !1, c.default.sources.USER),
                      U.format.indent && this.quill.format('indent', !1, c.default.sources.USER);
                  },
                },
                'checklist enter': {
                  key: C.keys.ENTER,
                  collapsed: !0,
                  format: { list: 'checked' },
                  handler: function (I) {
                    var U = this.quill.getLine(I.index),
                      H = w(U, 2),
                      V = H[0],
                      Y = H[1],
                      X = (0, e.default)({}, V.formats(), { list: 'checked' }),
                      Q = new l.default()
                        .retain(I.index)
                        .insert(
                          `
`,
                          X
                        )
                        .retain(V.length() - Y - 1)
                        .retain(1, { list: 'unchecked' });
                    this.quill.updateContents(Q, c.default.sources.USER),
                      this.quill.setSelection(I.index + 1, c.default.sources.SILENT),
                      this.quill.scrollIntoView();
                  },
                },
                'header enter': {
                  key: C.keys.ENTER,
                  collapsed: !0,
                  format: ['header'],
                  suffix: /^$/,
                  handler: function (I, U) {
                    var H = this.quill.getLine(I.index),
                      V = w(H, 2),
                      Y = V[0],
                      X = V[1],
                      Q = new l.default()
                        .retain(I.index)
                        .insert(
                          `
`,
                          U.format
                        )
                        .retain(Y.length() - X - 1)
                        .retain(1, { header: null });
                    this.quill.updateContents(Q, c.default.sources.USER),
                      this.quill.setSelection(I.index + 1, c.default.sources.SILENT),
                      this.quill.scrollIntoView();
                  },
                },
                'list autofill': {
                  key: ' ',
                  collapsed: !0,
                  format: { list: !1 },
                  prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                  handler: function (I, U) {
                    var H = U.prefix.length,
                      V = this.quill.getLine(I.index),
                      Y = w(V, 2),
                      X = Y[0],
                      Q = Y[1];
                    if (Q > H) return !0;
                    var nt = void 0;
                    switch (U.prefix.trim()) {
                      case '[]':
                      case '[ ]':
                        nt = 'unchecked';
                        break;
                      case '[x]':
                        nt = 'checked';
                        break;
                      case '-':
                      case '*':
                        nt = 'bullet';
                        break;
                      default:
                        nt = 'ordered';
                    }
                    this.quill.insertText(I.index, ' ', c.default.sources.USER),
                      this.quill.history.cutoff();
                    var rt = new l.default()
                      .retain(I.index - Q)
                      .delete(H + 1)
                      .retain(X.length() - 2 - Q)
                      .retain(1, { list: nt });
                    this.quill.updateContents(rt, c.default.sources.USER),
                      this.quill.history.cutoff(),
                      this.quill.setSelection(I.index - H, c.default.sources.SILENT);
                  },
                },
                'code exit': {
                  key: C.keys.ENTER,
                  collapsed: !0,
                  format: ['code-block'],
                  prefix: /\n\n$/,
                  suffix: /^\s+$/,
                  handler: function (I) {
                    var U = this.quill.getLine(I.index),
                      H = w(U, 2),
                      V = H[0],
                      Y = H[1],
                      X = new l.default()
                        .retain(I.index + V.length() - Y - 2)
                        .retain(1, { 'code-block': null })
                        .delete(1);
                    this.quill.updateContents(X, c.default.sources.USER);
                  },
                },
                'embed left': Z(C.keys.LEFT, !1),
                'embed left shift': Z(C.keys.LEFT, !0),
                'embed right': Z(C.keys.RIGHT, !1),
                'embed right shift': Z(C.keys.RIGHT, !0),
              },
            });
          function Z(x, I) {
            var U,
              H = x === C.keys.LEFT ? 'prefix' : 'suffix';
            return (
              (U = { key: x, shiftKey: I, altKey: null }),
              h(U, H, /^$/),
              h(U, 'handler', function (Y) {
                var X = Y.index;
                x === C.keys.RIGHT && (X += Y.length + 1);
                var Q = this.quill.getLeaf(X),
                  nt = w(Q, 1),
                  rt = nt[0];
                return rt instanceof f.default.Embed
                  ? (x === C.keys.LEFT
                      ? I
                        ? this.quill.setSelection(Y.index - 1, Y.length + 1, c.default.sources.USER)
                        : this.quill.setSelection(Y.index - 1, c.default.sources.USER)
                      : I
                      ? this.quill.setSelection(Y.index, Y.length + 1, c.default.sources.USER)
                      : this.quill.setSelection(Y.index + Y.length + 1, c.default.sources.USER),
                    !1)
                  : !0;
              }),
              U
            );
          }
          function M(x, I) {
            if (!(x.index === 0 || this.quill.getLength() <= 1)) {
              var U = this.quill.getLine(x.index),
                H = w(U, 1),
                V = H[0],
                Y = {};
              if (I.offset === 0) {
                var X = this.quill.getLine(x.index - 1),
                  Q = w(X, 1),
                  nt = Q[0];
                if (nt != null && nt.length() > 1) {
                  var rt = V.formats(),
                    at = this.quill.getFormat(x.index - 1, 1);
                  Y = i.default.attributes.diff(rt, at) || {};
                }
              }
              var lt = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(I.prefix) ? 2 : 1;
              this.quill.deleteText(x.index - lt, lt, c.default.sources.USER),
                Object.keys(Y).length > 0 &&
                  this.quill.formatLine(x.index - lt, lt, Y, c.default.sources.USER),
                this.quill.focus();
            }
          }
          function R(x, I) {
            var U = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(I.suffix) ? 2 : 1;
            if (!(x.index >= this.quill.getLength() - U)) {
              var H = {},
                V = 0,
                Y = this.quill.getLine(x.index),
                X = w(Y, 1),
                Q = X[0];
              if (I.offset >= Q.length() - 1) {
                var nt = this.quill.getLine(x.index + 1),
                  rt = w(nt, 1),
                  at = rt[0];
                if (at) {
                  var lt = Q.formats(),
                    z = this.quill.getFormat(x.index, 1);
                  (H = i.default.attributes.diff(lt, z) || {}), (V = at.length());
                }
              }
              this.quill.deleteText(x.index, U, c.default.sources.USER),
                Object.keys(H).length > 0 &&
                  this.quill.formatLine(x.index + V - 1, U, H, c.default.sources.USER);
            }
          }
          function E(x) {
            var I = this.quill.getLines(x),
              U = {};
            if (I.length > 1) {
              var H = I[0].formats(),
                V = I[I.length - 1].formats();
              U = i.default.attributes.diff(V, H) || {};
            }
            this.quill.deleteText(x, c.default.sources.USER),
              Object.keys(U).length > 0 &&
                this.quill.formatLine(x.index, 1, U, c.default.sources.USER),
              this.quill.setSelection(x.index, c.default.sources.SILENT),
              this.quill.focus();
          }
          function S(x, I) {
            var U = this;
            x.length > 0 && this.quill.scroll.deleteAt(x.index, x.length);
            var H = Object.keys(I.format).reduce(function (V, Y) {
              return (
                f.default.query(Y, f.default.Scope.BLOCK) &&
                  !Array.isArray(I.format[Y]) &&
                  (V[Y] = I.format[Y]),
                V
              );
            }, {});
            this.quill.insertText(
              x.index,
              `
`,
              H,
              c.default.sources.USER
            ),
              this.quill.setSelection(x.index + 1, c.default.sources.SILENT),
              this.quill.focus(),
              Object.keys(I.format).forEach(function (V) {
                H[V] == null &&
                  (Array.isArray(I.format[V]) ||
                    (V !== 'link' && U.quill.format(V, I.format[V], c.default.sources.USER)));
              });
          }
          function L(x) {
            return {
              key: C.keys.TAB,
              shiftKey: !x,
              format: { 'code-block': !0 },
              handler: function (U) {
                var H = f.default.query('code-block'),
                  V = U.index,
                  Y = U.length,
                  X = this.quill.scroll.descendant(H, V),
                  Q = w(X, 2),
                  nt = Q[0],
                  rt = Q[1];
                if (nt != null) {
                  var at = this.quill.getIndex(nt),
                    lt = nt.newlineIndex(rt, !0) + 1,
                    z = nt.newlineIndex(at + rt + Y),
                    K = nt.domNode.textContent.slice(lt, z).split(`
`);
                  (rt = 0),
                    K.forEach(function ($, G) {
                      x
                        ? (nt.insertAt(lt + rt, H.TAB),
                          (rt += H.TAB.length),
                          G === 0 ? (V += H.TAB.length) : (Y += H.TAB.length))
                        : $.startsWith(H.TAB) &&
                          (nt.deleteAt(lt + rt, H.TAB.length),
                          (rt -= H.TAB.length),
                          G === 0 ? (V -= H.TAB.length) : (Y -= H.TAB.length)),
                        (rt += $.length + 1);
                    }),
                    this.quill.update(c.default.sources.USER),
                    this.quill.setSelection(V, Y, c.default.sources.SILENT);
                }
              },
            };
          }
          function F(x) {
            return {
              key: x[0].toUpperCase(),
              shortKey: !0,
              handler: function (U, H) {
                this.quill.format(x, !H.format[x], c.default.sources.USER);
              },
            };
          }
          function D(x) {
            if (typeof x === 'string' || typeof x === 'number') return D({ key: x });
            if (
              ((typeof x === 'undefined' ? 'undefined' : P(x)) === 'object' &&
                (x = (0, d.default)(x, !1)),
              typeof x.key === 'string')
            )
              if (C.keys[x.key.toUpperCase()] != null) x.key = C.keys[x.key.toUpperCase()];
              else if (x.key.length === 1) x.key = x.key.toUpperCase().charCodeAt(0);
              else return null;
            return x.shortKey && ((x[B] = x.shortKey), delete x.shortKey), x;
          }
          (g.default = C), (g.SHORTKEY = B);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function i(r, f) {
                var n = [],
                  c = !0,
                  k = !1,
                  b = void 0;
                try {
                  for (
                    var _ = r[Symbol.iterator](), N;
                    !(c = (N = _.next()).done) && (n.push(N.value), !(f && n.length === f));
                    c = !0
                  );
                } catch (m) {
                  (k = !0), (b = m);
                } finally {
                  try {
                    !c && _.return && _.return();
                  } finally {
                    if (k) throw b;
                  }
                }
                return n;
              }
              return function (r, f) {
                if (Array.isArray(r)) return r;
                if (Symbol.iterator in Object(r)) return i(r, f);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            w = function i(r, f, n) {
              r === null && (r = Function.prototype);
              var c = Object.getOwnPropertyDescriptor(r, f);
              if (c === void 0) {
                var k = Object.getPrototypeOf(r);
                return k === null ? void 0 : i(k, f, n);
              }
              if ('value' in c) return c.value;
              var b = c.get;
              return b === void 0 ? void 0 : b.call(n);
            },
            O = (function () {
              function i(r, f) {
                for (var n = 0; n < f.length; n++) {
                  var c = f[n];
                  (c.enumerable = c.enumerable || !1),
                    (c.configurable = !0),
                    'value' in c && (c.writable = !0),
                    Object.defineProperty(r, c.key, c);
                }
              }
              return function (r, f, n) {
                return f && i(r.prototype, f), n && i(r, n), r;
              };
            })(),
            v = p(0),
            d = t(v),
            s = p(7),
            o = t(s);
          function t(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function e(i, r) {
            if (!(i instanceof r)) throw new TypeError('Cannot call a class as a function');
          }
          function u(i, r) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r === 'object' || typeof r === 'function') ? r : i;
          }
          function l(i, r) {
            if (typeof r !== 'function' && r !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof r
              );
            (i.prototype = Object.create(r && r.prototype, {
              constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
            })),
              r && (Object.setPrototypeOf ? Object.setPrototypeOf(i, r) : (i.__proto__ = r));
          }
          var a = (function (i) {
            l(r, i), O(r, null, [{ key: 'value', value: function () {} }]);
            function r(f, n) {
              e(this, r);
              var c = u(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, f));
              return (
                (c.selection = n),
                (c.textNode = document.createTextNode(r.CONTENTS)),
                c.domNode.appendChild(c.textNode),
                (c._length = 0),
                c
              );
            }
            return (
              O(r, [
                {
                  key: 'detach',
                  value: function () {
                    this.parent != null && this.parent.removeChild(this);
                  },
                },
                {
                  key: 'format',
                  value: function (n, c) {
                    if (this._length !== 0)
                      return w(
                        r.prototype.__proto__ || Object.getPrototypeOf(r.prototype),
                        'format',
                        this
                      ).call(this, n, c);
                    for (
                      var k = this, b = 0;
                      k != null && k.statics.scope !== d.default.Scope.BLOCK_BLOT;

                    )
                      (b += k.offset(k.parent)), (k = k.parent);
                    k != null &&
                      ((this._length = r.CONTENTS.length),
                      k.optimize(),
                      k.formatAt(b, r.CONTENTS.length, n, c),
                      (this._length = 0));
                  },
                },
                {
                  key: 'index',
                  value: function (n, c) {
                    return n === this.textNode
                      ? 0
                      : w(
                          r.prototype.__proto__ || Object.getPrototypeOf(r.prototype),
                          'index',
                          this
                        ).call(this, n, c);
                  },
                },
                {
                  key: 'length',
                  value: function () {
                    return this._length;
                  },
                },
                {
                  key: 'position',
                  value: function () {
                    return [this.textNode, this.textNode.data.length];
                  },
                },
                {
                  key: 'remove',
                  value: function () {
                    w(
                      r.prototype.__proto__ || Object.getPrototypeOf(r.prototype),
                      'remove',
                      this
                    ).call(this),
                      (this.parent = null);
                  },
                },
                {
                  key: 'restore',
                  value: function () {
                    if (!(this.selection.composing || this.parent == null)) {
                      var n = this.textNode,
                        c = this.selection.getNativeRange(),
                        k = void 0,
                        b = void 0,
                        _ = void 0;
                      if (c != null && c.start.node === n && c.end.node === n) {
                        var N = [n, c.start.offset, c.end.offset];
                        (k = N[0]), (b = N[1]), (_ = N[2]);
                      }
                      for (
                        ;
                        this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode;

                      )
                        this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                      if (this.textNode.data !== r.CONTENTS) {
                        var m = this.textNode.data.split(r.CONTENTS).join('');
                        this.next instanceof o.default
                          ? ((k = this.next.domNode),
                            this.next.insertAt(0, m),
                            (this.textNode.data = r.CONTENTS))
                          : ((this.textNode.data = m),
                            this.parent.insertBefore(d.default.create(this.textNode), this),
                            (this.textNode = document.createTextNode(r.CONTENTS)),
                            this.domNode.appendChild(this.textNode));
                      }
                      if ((this.remove(), b != null)) {
                        var h = [b, _].map(function (A) {
                            return Math.max(0, Math.min(k.data.length, A - 1));
                          }),
                          y = P(h, 2);
                        return (
                          (b = y[0]),
                          (_ = y[1]),
                          { startNode: k, startOffset: b, endNode: k, endOffset: _ }
                        );
                      }
                    }
                  },
                },
                {
                  key: 'update',
                  value: function (n, c) {
                    var k = this;
                    if (
                      n.some(function (_) {
                        return _.type === 'characterData' && _.target === k.textNode;
                      })
                    ) {
                      var b = this.restore();
                      b && (c.range = b);
                    }
                  },
                },
                {
                  key: 'value',
                  value: function () {
                    return '';
                  },
                },
              ]),
              r
            );
          })(d.default.Embed);
          (a.blotName = 'cursor'),
            (a.className = 'ql-cursor'),
            (a.tagName = 'span'),
            (a.CONTENTS = '\uFEFF'),
            (g.default = a);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(0),
            w = d(P),
            O = p(4),
            v = d(O);
          function d(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function s(u, l) {
            if (!(u instanceof l)) throw new TypeError('Cannot call a class as a function');
          }
          function o(u, l) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l === 'object' || typeof l === 'function') ? l : u;
          }
          function t(u, l) {
            if (typeof l !== 'function' && l !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof l
              );
            (u.prototype = Object.create(l && l.prototype, {
              constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
            })),
              l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : (u.__proto__ = l));
          }
          var e = (function (u) {
            t(l, u);
            function l() {
              return (
                s(this, l),
                o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments))
              );
            }
            return l;
          })(w.default.Container);
          (e.allowedChildren = [v.default, O.BlockEmbed, e]), (g.default = e);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.ColorStyle = g.ColorClass = g.ColorAttributor = void 0);
          var P = (function () {
              function a(i, r) {
                for (var f = 0; f < r.length; f++) {
                  var n = r[f];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(i, n.key, n);
                }
              }
              return function (i, r, f) {
                return r && a(i.prototype, r), f && a(i, f), i;
              };
            })(),
            w = function a(i, r, f) {
              i === null && (i = Function.prototype);
              var n = Object.getOwnPropertyDescriptor(i, r);
              if (n === void 0) {
                var c = Object.getPrototypeOf(i);
                return c === null ? void 0 : a(c, r, f);
              }
              if ('value' in n) return n.value;
              var k = n.get;
              return k === void 0 ? void 0 : k.call(f);
            },
            O = p(0),
            v = d(O);
          function d(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function s(a, i) {
            if (!(a instanceof i)) throw new TypeError('Cannot call a class as a function');
          }
          function o(a, i) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i === 'object' || typeof i === 'function') ? i : a;
          }
          function t(a, i) {
            if (typeof i !== 'function' && i !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof i
              );
            (a.prototype = Object.create(i && i.prototype, {
              constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
            })),
              i && (Object.setPrototypeOf ? Object.setPrototypeOf(a, i) : (a.__proto__ = i));
          }
          var e = (function (a) {
              t(i, a);
              function i() {
                return (
                  s(this, i),
                  o(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
                );
              }
              return (
                P(i, [
                  {
                    key: 'value',
                    value: function (f) {
                      var n = w(
                        i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                        'value',
                        this
                      ).call(this, f);
                      return n.startsWith('rgb(')
                        ? ((n = n.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '')),
                          '#' +
                            n
                              .split(',')
                              .map(function (c) {
                                return ('00' + parseInt(c).toString(16)).slice(-2);
                              })
                              .join(''))
                        : n;
                    },
                  },
                ]),
                i
              );
            })(v.default.Attributor.Style),
            u = new v.default.Attributor.Class('color', 'ql-color', {
              scope: v.default.Scope.INLINE,
            }),
            l = new e('color', 'color', { scope: v.default.Scope.INLINE });
          (g.ColorAttributor = e), (g.ColorClass = u), (g.ColorStyle = l);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }), (g.sanitize = g.default = void 0);
          var P = (function () {
              function l(a, i) {
                for (var r = 0; r < i.length; r++) {
                  var f = i[r];
                  (f.enumerable = f.enumerable || !1),
                    (f.configurable = !0),
                    'value' in f && (f.writable = !0),
                    Object.defineProperty(a, f.key, f);
                }
              }
              return function (a, i, r) {
                return i && l(a.prototype, i), r && l(a, r), a;
              };
            })(),
            w = function l(a, i, r) {
              a === null && (a = Function.prototype);
              var f = Object.getOwnPropertyDescriptor(a, i);
              if (f === void 0) {
                var n = Object.getPrototypeOf(a);
                return n === null ? void 0 : l(n, i, r);
              }
              if ('value' in f) return f.value;
              var c = f.get;
              return c === void 0 ? void 0 : c.call(r);
            },
            O = p(6),
            v = d(O);
          function d(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function s(l, a) {
            if (!(l instanceof a)) throw new TypeError('Cannot call a class as a function');
          }
          function o(l, a) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a === 'object' || typeof a === 'function') ? a : l;
          }
          function t(l, a) {
            if (typeof a !== 'function' && a !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof a
              );
            (l.prototype = Object.create(a && a.prototype, {
              constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 },
            })),
              a && (Object.setPrototypeOf ? Object.setPrototypeOf(l, a) : (l.__proto__ = a));
          }
          var e = (function (l) {
            t(a, l);
            function a() {
              return (
                s(this, a),
                o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
              );
            }
            return (
              P(
                a,
                [
                  {
                    key: 'format',
                    value: function (r, f) {
                      if (r !== this.statics.blotName || !f)
                        return w(
                          a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                          'format',
                          this
                        ).call(this, r, f);
                      (f = this.constructor.sanitize(f)), this.domNode.setAttribute('href', f);
                    },
                  },
                ],
                [
                  {
                    key: 'create',
                    value: function (r) {
                      var f = w(a.__proto__ || Object.getPrototypeOf(a), 'create', this).call(
                        this,
                        r
                      );
                      return (
                        (r = this.sanitize(r)),
                        f.setAttribute('href', r),
                        f.setAttribute('target', '_blank'),
                        f
                      );
                    },
                  },
                  {
                    key: 'formats',
                    value: function (r) {
                      return r.getAttribute('href');
                    },
                  },
                  {
                    key: 'sanitize',
                    value: function (r) {
                      return u(r, this.PROTOCOL_WHITELIST) ? r : this.SANITIZED_URL;
                    },
                  },
                ]
              ),
              a
            );
          })(v.default);
          (e.blotName = 'link'),
            (e.tagName = 'A'),
            (e.SANITIZED_URL = 'about:blank'),
            (e.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel']);
          function u(l, a) {
            var i = document.createElement('a');
            i.href = l;
            var r = i.href.slice(0, i.href.indexOf(':'));
            return a.indexOf(r) > -1;
          }
          (g.default = e), (g.sanitize = u);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P =
              typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol === 'function' &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? 'symbol'
                      : typeof a;
                  },
            w = (function () {
              function a(i, r) {
                for (var f = 0; f < r.length; f++) {
                  var n = r[f];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(i, n.key, n);
                }
              }
              return function (i, r, f) {
                return r && a(i.prototype, r), f && a(i, f), i;
              };
            })(),
            O = p(23),
            v = o(O),
            d = p(107),
            s = o(d);
          function o(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function t(a, i) {
            if (!(a instanceof i)) throw new TypeError('Cannot call a class as a function');
          }
          var e = 0;
          function u(a, i) {
            a.setAttribute(i, a.getAttribute(i) !== 'true');
          }
          var l = (function () {
            function a(i) {
              var r = this;
              t(this, a),
                (this.select = i),
                (this.container = document.createElement('span')),
                this.buildPicker(),
                (this.select.style.display = 'none'),
                this.select.parentNode.insertBefore(this.container, this.select),
                this.label.addEventListener('mousedown', function () {
                  r.togglePicker();
                }),
                this.label.addEventListener('keydown', function (f) {
                  switch (f.keyCode) {
                    case v.default.keys.ENTER:
                      r.togglePicker();
                      break;
                    case v.default.keys.ESCAPE:
                      r.escape(), f.preventDefault();
                      break;
                    default:
                  }
                }),
                this.select.addEventListener('change', this.update.bind(this));
            }
            return (
              w(a, [
                {
                  key: 'togglePicker',
                  value: function () {
                    this.container.classList.toggle('ql-expanded'),
                      u(this.label, 'aria-expanded'),
                      u(this.options, 'aria-hidden');
                  },
                },
                {
                  key: 'buildItem',
                  value: function (r) {
                    var f = this,
                      n = document.createElement('span');
                    return (
                      (n.tabIndex = '0'),
                      n.setAttribute('role', 'button'),
                      n.classList.add('ql-picker-item'),
                      r.hasAttribute('value') &&
                        n.setAttribute('data-value', r.getAttribute('value')),
                      r.textContent && n.setAttribute('data-label', r.textContent),
                      n.addEventListener('click', function () {
                        f.selectItem(n, !0);
                      }),
                      n.addEventListener('keydown', function (c) {
                        switch (c.keyCode) {
                          case v.default.keys.ENTER:
                            f.selectItem(n, !0), c.preventDefault();
                            break;
                          case v.default.keys.ESCAPE:
                            f.escape(), c.preventDefault();
                            break;
                          default:
                        }
                      }),
                      n
                    );
                  },
                },
                {
                  key: 'buildLabel',
                  value: function () {
                    var r = document.createElement('span');
                    return (
                      r.classList.add('ql-picker-label'),
                      (r.innerHTML = s.default),
                      (r.tabIndex = '0'),
                      r.setAttribute('role', 'button'),
                      r.setAttribute('aria-expanded', 'false'),
                      this.container.appendChild(r),
                      r
                    );
                  },
                },
                {
                  key: 'buildOptions',
                  value: function () {
                    var r = this,
                      f = document.createElement('span');
                    f.classList.add('ql-picker-options'),
                      f.setAttribute('aria-hidden', 'true'),
                      (f.tabIndex = '-1'),
                      (f.id = 'ql-picker-options-' + e),
                      (e += 1),
                      this.label.setAttribute('aria-controls', f.id),
                      (this.options = f),
                      [].slice.call(this.select.options).forEach(function (n) {
                        var c = r.buildItem(n);
                        f.appendChild(c), n.selected === !0 && r.selectItem(c);
                      }),
                      this.container.appendChild(f);
                  },
                },
                {
                  key: 'buildPicker',
                  value: function () {
                    var r = this;
                    [].slice.call(this.select.attributes).forEach(function (f) {
                      r.container.setAttribute(f.name, f.value);
                    }),
                      this.container.classList.add('ql-picker'),
                      (this.label = this.buildLabel()),
                      this.buildOptions();
                  },
                },
                {
                  key: 'escape',
                  value: function () {
                    var r = this;
                    this.close(),
                      setTimeout(function () {
                        return r.label.focus();
                      }, 1);
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    this.container.classList.remove('ql-expanded'),
                      this.label.setAttribute('aria-expanded', 'false'),
                      this.options.setAttribute('aria-hidden', 'true');
                  },
                },
                {
                  key: 'selectItem',
                  value: function (r) {
                    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                      n = this.container.querySelector('.ql-selected');
                    if (
                      r !== n &&
                      (n != null && n.classList.remove('ql-selected'),
                      r != null &&
                        (r.classList.add('ql-selected'),
                        (this.select.selectedIndex = [].indexOf.call(r.parentNode.children, r)),
                        r.hasAttribute('data-value')
                          ? this.label.setAttribute('data-value', r.getAttribute('data-value'))
                          : this.label.removeAttribute('data-value'),
                        r.hasAttribute('data-label')
                          ? this.label.setAttribute('data-label', r.getAttribute('data-label'))
                          : this.label.removeAttribute('data-label'),
                        f))
                    ) {
                      if (typeof Event === 'function')
                        this.select.dispatchEvent(new Event('change'));
                      else if (
                        (typeof Event === 'undefined' ? 'undefined' : P(Event)) === 'object'
                      ) {
                        var c = document.createEvent('Event');
                        c.initEvent('change', !0, !0), this.select.dispatchEvent(c);
                      }
                      this.close();
                    }
                  },
                },
                {
                  key: 'update',
                  value: function () {
                    var r = void 0;
                    if (this.select.selectedIndex > -1) {
                      var f =
                        this.container.querySelector('.ql-picker-options').children[
                          this.select.selectedIndex
                        ];
                      (r = this.select.options[this.select.selectedIndex]), this.selectItem(f);
                    } else this.selectItem(null);
                    var n = r != null && r !== this.select.querySelector('option[selected]');
                    this.label.classList.toggle('ql-active', n);
                  },
                },
              ]),
              a
            );
          })();
          g.default = l;
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(0),
            w = q(P),
            O = p(5),
            v = q(O),
            d = p(4),
            s = q(d),
            o = p(16),
            t = q(o),
            e = p(25),
            u = q(e),
            l = p(24),
            a = q(l),
            i = p(35),
            r = q(i),
            f = p(6),
            n = q(f),
            c = p(22),
            k = q(c),
            b = p(7),
            _ = q(b),
            N = p(55),
            m = q(N),
            h = p(42),
            y = q(h),
            A = p(23),
            T = q(A);
          function q(B) {
            return B && B.__esModule ? B : { default: B };
          }
          v.default.register({
            'blots/block': s.default,
            'blots/block/embed': d.BlockEmbed,
            'blots/break': t.default,
            'blots/container': u.default,
            'blots/cursor': a.default,
            'blots/embed': r.default,
            'blots/inline': n.default,
            'blots/scroll': k.default,
            'blots/text': _.default,
            'modules/clipboard': m.default,
            'modules/history': y.default,
            'modules/keyboard': T.default,
          }),
            w.default.register(s.default, t.default, a.default, n.default, k.default, _.default),
            (g.default = v.default);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(1),
            w = (function () {
              function O(v) {
                (this.domNode = v), (this.domNode[P.DATA_KEY] = { blot: this });
              }
              return (
                Object.defineProperty(O.prototype, 'statics', {
                  get: function () {
                    return this.constructor;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (O.create = function (v) {
                  if (this.tagName == null)
                    throw new P.ParchmentError('Blot definition missing tagName');
                  var d;
                  return (
                    Array.isArray(this.tagName)
                      ? (typeof v === 'string' &&
                          ((v = v.toUpperCase()),
                          parseInt(v).toString() === v && (v = parseInt(v))),
                        typeof v === 'number'
                          ? (d = document.createElement(this.tagName[v - 1]))
                          : this.tagName.indexOf(v) > -1
                          ? (d = document.createElement(v))
                          : (d = document.createElement(this.tagName[0])))
                      : (d = document.createElement(this.tagName)),
                    this.className && d.classList.add(this.className),
                    d
                  );
                }),
                (O.prototype.attach = function () {
                  this.parent != null && (this.scroll = this.parent.scroll);
                }),
                (O.prototype.clone = function () {
                  var v = this.domNode.cloneNode(!1);
                  return P.create(v);
                }),
                (O.prototype.detach = function () {
                  this.parent != null && this.parent.removeChild(this),
                    delete this.domNode[P.DATA_KEY];
                }),
                (O.prototype.deleteAt = function (v, d) {
                  var s = this.isolate(v, d);
                  s.remove();
                }),
                (O.prototype.formatAt = function (v, d, s, o) {
                  var t = this.isolate(v, d);
                  if (P.query(s, P.Scope.BLOT) != null && o) t.wrap(s, o);
                  else if (P.query(s, P.Scope.ATTRIBUTE) != null) {
                    var e = P.create(this.statics.scope);
                    t.wrap(e), e.format(s, o);
                  }
                }),
                (O.prototype.insertAt = function (v, d, s) {
                  var o = s == null ? P.create('text', d) : P.create(d, s),
                    t = this.split(v);
                  this.parent.insertBefore(o, t);
                }),
                (O.prototype.insertInto = function (v, d) {
                  d === void 0 && (d = null),
                    this.parent != null && this.parent.children.remove(this);
                  var s = null;
                  v.children.insertBefore(this, d),
                    d != null && (s = d.domNode),
                    (this.domNode.parentNode != v.domNode || this.domNode.nextSibling != s) &&
                      v.domNode.insertBefore(this.domNode, s),
                    (this.parent = v),
                    this.attach();
                }),
                (O.prototype.isolate = function (v, d) {
                  var s = this.split(v);
                  return s.split(d), s;
                }),
                (O.prototype.length = function () {
                  return 1;
                }),
                (O.prototype.offset = function (v) {
                  return (
                    v === void 0 && (v = this.parent),
                    this.parent == null || this == v
                      ? 0
                      : this.parent.children.offset(this) + this.parent.offset(v)
                  );
                }),
                (O.prototype.optimize = function (v) {
                  this.domNode[P.DATA_KEY] != null && delete this.domNode[P.DATA_KEY].mutations;
                }),
                (O.prototype.remove = function () {
                  this.domNode.parentNode != null &&
                    this.domNode.parentNode.removeChild(this.domNode),
                    this.detach();
                }),
                (O.prototype.replace = function (v) {
                  v.parent != null && (v.parent.insertBefore(this, v.next), v.remove());
                }),
                (O.prototype.replaceWith = function (v, d) {
                  var s = typeof v === 'string' ? P.create(v, d) : v;
                  return s.replace(this), s;
                }),
                (O.prototype.split = function (v, d) {
                  return v === 0 ? this : this.next;
                }),
                (O.prototype.update = function (v, d) {}),
                (O.prototype.wrap = function (v, d) {
                  var s = typeof v === 'string' ? P.create(v, d) : v;
                  return (
                    this.parent != null && this.parent.insertBefore(s, this.next),
                    s.appendChild(this),
                    s
                  );
                }),
                (O.blotName = 'abstract'),
                O
              );
            })();
          g.default = w;
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(12),
            w = p(32),
            O = p(33),
            v = p(1),
            d = (function () {
              function s(o) {
                (this.attributes = {}), (this.domNode = o), this.build();
              }
              return (
                (s.prototype.attribute = function (o, t) {
                  t
                    ? o.add(this.domNode, t) &&
                      (o.value(this.domNode) != null
                        ? (this.attributes[o.attrName] = o)
                        : delete this.attributes[o.attrName])
                    : (o.remove(this.domNode), delete this.attributes[o.attrName]);
                }),
                (s.prototype.build = function () {
                  var o = this;
                  this.attributes = {};
                  var t = P.default.keys(this.domNode),
                    e = w.default.keys(this.domNode),
                    u = O.default.keys(this.domNode);
                  t.concat(e)
                    .concat(u)
                    .forEach(function (l) {
                      var a = v.query(l, v.Scope.ATTRIBUTE);
                      a instanceof P.default && (o.attributes[a.attrName] = a);
                    });
                }),
                (s.prototype.copy = function (o) {
                  var t = this;
                  Object.keys(this.attributes).forEach(function (e) {
                    var u = t.attributes[e].value(t.domNode);
                    o.format(e, u);
                  });
                }),
                (s.prototype.move = function (o) {
                  var t = this;
                  this.copy(o),
                    Object.keys(this.attributes).forEach(function (e) {
                      t.attributes[e].remove(t.domNode);
                    }),
                    (this.attributes = {});
                }),
                (s.prototype.values = function () {
                  var o = this;
                  return Object.keys(this.attributes).reduce(function (t, e) {
                    return (t[e] = o.attributes[e].value(o.domNode)), t;
                  }, {});
                }),
                s
              );
            })();
          g.default = d;
        },
        function (j, g, p) {
          'use strict';
          var P =
            (this && this.__extends) ||
            (function () {
              var d =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (s, o) {
                    s.__proto__ = o;
                  }) ||
                function (s, o) {
                  for (var t in o) o.hasOwnProperty(t) && (s[t] = o[t]);
                };
              return function (s, o) {
                d(s, o);
                function t() {
                  this.constructor = s;
                }
                s.prototype =
                  o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
              };
            })();
          Object.defineProperty(g, '__esModule', { value: !0 });
          var w = p(12);
          function O(d, s) {
            var o = d.getAttribute('class') || '';
            return o.split(/\s+/).filter(function (t) {
              return t.indexOf(s + '-') === 0;
            });
          }
          var v = (function (d) {
            P(s, d);
            function s() {
              return (d !== null && d.apply(this, arguments)) || this;
            }
            return (
              (s.keys = function (o) {
                return (o.getAttribute('class') || '').split(/\s+/).map(function (t) {
                  return t.split('-').slice(0, -1).join('-');
                });
              }),
              (s.prototype.add = function (o, t) {
                return this.canAdd(o, t)
                  ? (this.remove(o), o.classList.add(this.keyName + '-' + t), !0)
                  : !1;
              }),
              (s.prototype.remove = function (o) {
                var t = O(o, this.keyName);
                t.forEach(function (e) {
                  o.classList.remove(e);
                }),
                  o.classList.length === 0 && o.removeAttribute('class');
              }),
              (s.prototype.value = function (o) {
                var t = O(o, this.keyName)[0] || '',
                  e = t.slice(this.keyName.length + 1);
                return this.canAdd(o, e) ? e : '';
              }),
              s
            );
          })(w.default);
          g.default = v;
        },
        function (j, g, p) {
          'use strict';
          var P =
            (this && this.__extends) ||
            (function () {
              var d =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (s, o) {
                    s.__proto__ = o;
                  }) ||
                function (s, o) {
                  for (var t in o) o.hasOwnProperty(t) && (s[t] = o[t]);
                };
              return function (s, o) {
                d(s, o);
                function t() {
                  this.constructor = s;
                }
                s.prototype =
                  o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
              };
            })();
          Object.defineProperty(g, '__esModule', { value: !0 });
          var w = p(12);
          function O(d) {
            var s = d.split('-'),
              o = s
                .slice(1)
                .map(function (t) {
                  return t[0].toUpperCase() + t.slice(1);
                })
                .join('');
            return s[0] + o;
          }
          var v = (function (d) {
            P(s, d);
            function s() {
              return (d !== null && d.apply(this, arguments)) || this;
            }
            return (
              (s.keys = function (o) {
                return (o.getAttribute('style') || '').split(';').map(function (t) {
                  var e = t.split(':');
                  return e[0].trim();
                });
              }),
              (s.prototype.add = function (o, t) {
                return this.canAdd(o, t) ? ((o.style[O(this.keyName)] = t), !0) : !1;
              }),
              (s.prototype.remove = function (o) {
                (o.style[O(this.keyName)] = ''),
                  o.getAttribute('style') || o.removeAttribute('style');
              }),
              (s.prototype.value = function (o) {
                var t = o.style[O(this.keyName)];
                return this.canAdd(o, t) ? t : '';
              }),
              s
            );
          })(w.default);
          g.default = v;
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
            function v(d, s) {
              for (var o = 0; o < s.length; o++) {
                var t = s[o];
                (t.enumerable = t.enumerable || !1),
                  (t.configurable = !0),
                  'value' in t && (t.writable = !0),
                  Object.defineProperty(d, t.key, t);
              }
            }
            return function (d, s, o) {
              return s && v(d.prototype, s), o && v(d, o), d;
            };
          })();
          function w(v, d) {
            if (!(v instanceof d)) throw new TypeError('Cannot call a class as a function');
          }
          var O = (function () {
            function v(d, s) {
              w(this, v), (this.quill = d), (this.options = s), (this.modules = {});
            }
            return (
              P(v, [
                {
                  key: 'init',
                  value: function () {
                    var s = this;
                    Object.keys(this.options.modules).forEach(function (o) {
                      s.modules[o] == null && s.addModule(o);
                    });
                  },
                },
                {
                  key: 'addModule',
                  value: function (s) {
                    var o = this.quill.constructor.import('modules/' + s);
                    return (
                      (this.modules[s] = new o(this.quill, this.options.modules[s] || {})),
                      this.modules[s]
                    );
                  },
                },
              ]),
              v
            );
          })();
          (O.DEFAULTS = { modules: {} }), (O.themes = { default: O }), (g.default = O);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function i(r, f) {
                for (var n = 0; n < f.length; n++) {
                  var c = f[n];
                  (c.enumerable = c.enumerable || !1),
                    (c.configurable = !0),
                    'value' in c && (c.writable = !0),
                    Object.defineProperty(r, c.key, c);
                }
              }
              return function (r, f, n) {
                return f && i(r.prototype, f), n && i(r, n), r;
              };
            })(),
            w = function i(r, f, n) {
              r === null && (r = Function.prototype);
              var c = Object.getOwnPropertyDescriptor(r, f);
              if (c === void 0) {
                var k = Object.getPrototypeOf(r);
                return k === null ? void 0 : i(k, f, n);
              }
              if ('value' in c) return c.value;
              var b = c.get;
              return b === void 0 ? void 0 : b.call(n);
            },
            O = p(0),
            v = o(O),
            d = p(7),
            s = o(d);
          function o(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function t(i, r) {
            if (!(i instanceof r)) throw new TypeError('Cannot call a class as a function');
          }
          function e(i, r) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r === 'object' || typeof r === 'function') ? r : i;
          }
          function u(i, r) {
            if (typeof r !== 'function' && r !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof r
              );
            (i.prototype = Object.create(r && r.prototype, {
              constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
            })),
              r && (Object.setPrototypeOf ? Object.setPrototypeOf(i, r) : (i.__proto__ = r));
          }
          var l = '\uFEFF',
            a = (function (i) {
              u(r, i);
              function r(f) {
                t(this, r);
                var n = e(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, f));
                return (
                  (n.contentNode = document.createElement('span')),
                  n.contentNode.setAttribute('contenteditable', !1),
                  [].slice.call(n.domNode.childNodes).forEach(function (c) {
                    n.contentNode.appendChild(c);
                  }),
                  (n.leftGuard = document.createTextNode(l)),
                  (n.rightGuard = document.createTextNode(l)),
                  n.domNode.appendChild(n.leftGuard),
                  n.domNode.appendChild(n.contentNode),
                  n.domNode.appendChild(n.rightGuard),
                  n
                );
              }
              return (
                P(r, [
                  {
                    key: 'index',
                    value: function (n, c) {
                      return n === this.leftGuard
                        ? 0
                        : n === this.rightGuard
                        ? 1
                        : w(
                            r.prototype.__proto__ || Object.getPrototypeOf(r.prototype),
                            'index',
                            this
                          ).call(this, n, c);
                    },
                  },
                  {
                    key: 'restore',
                    value: function (n) {
                      var c = void 0,
                        k = void 0,
                        b = n.data.split(l).join('');
                      if (n === this.leftGuard)
                        if (this.prev instanceof s.default) {
                          var _ = this.prev.length();
                          this.prev.insertAt(_, b),
                            (c = { startNode: this.prev.domNode, startOffset: _ + b.length });
                        } else
                          (k = document.createTextNode(b)),
                            this.parent.insertBefore(v.default.create(k), this),
                            (c = { startNode: k, startOffset: b.length });
                      else
                        n === this.rightGuard &&
                          (this.next instanceof s.default
                            ? (this.next.insertAt(0, b),
                              (c = { startNode: this.next.domNode, startOffset: b.length }))
                            : ((k = document.createTextNode(b)),
                              this.parent.insertBefore(v.default.create(k), this.next),
                              (c = { startNode: k, startOffset: b.length })));
                      return (n.data = l), c;
                    },
                  },
                  {
                    key: 'update',
                    value: function (n, c) {
                      var k = this;
                      n.forEach(function (b) {
                        if (
                          b.type === 'characterData' &&
                          (b.target === k.leftGuard || b.target === k.rightGuard)
                        ) {
                          var _ = k.restore(b.target);
                          _ && (c.range = _);
                        }
                      });
                    },
                  },
                ]),
                r
              );
            })(v.default.Embed);
          g.default = a;
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.AlignStyle = g.AlignClass = g.AlignAttribute = void 0);
          var P = p(0),
            w = O(P);
          function O(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var v = { scope: w.default.Scope.BLOCK, whitelist: ['right', 'center', 'justify'] },
            d = new w.default.Attributor.Attribute('align', 'align', v),
            s = new w.default.Attributor.Class('align', 'ql-align', v),
            o = new w.default.Attributor.Style('align', 'text-align', v);
          (g.AlignAttribute = d), (g.AlignClass = s), (g.AlignStyle = o);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.BackgroundStyle = g.BackgroundClass = void 0);
          var P = p(0),
            w = v(P),
            O = p(26);
          function v(o) {
            return o && o.__esModule ? o : { default: o };
          }
          var d = new w.default.Attributor.Class('background', 'ql-bg', {
              scope: w.default.Scope.INLINE,
            }),
            s = new O.ColorAttributor('background', 'background-color', {
              scope: w.default.Scope.INLINE,
            });
          (g.BackgroundClass = d), (g.BackgroundStyle = s);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.DirectionStyle = g.DirectionClass = g.DirectionAttribute = void 0);
          var P = p(0),
            w = O(P);
          function O(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var v = { scope: w.default.Scope.BLOCK, whitelist: ['rtl'] },
            d = new w.default.Attributor.Attribute('direction', 'dir', v),
            s = new w.default.Attributor.Class('direction', 'ql-direction', v),
            o = new w.default.Attributor.Style('direction', 'direction', v);
          (g.DirectionAttribute = d), (g.DirectionClass = s), (g.DirectionStyle = o);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.FontClass = g.FontStyle = void 0);
          var P = (function () {
              function i(r, f) {
                for (var n = 0; n < f.length; n++) {
                  var c = f[n];
                  (c.enumerable = c.enumerable || !1),
                    (c.configurable = !0),
                    'value' in c && (c.writable = !0),
                    Object.defineProperty(r, c.key, c);
                }
              }
              return function (r, f, n) {
                return f && i(r.prototype, f), n && i(r, n), r;
              };
            })(),
            w = function i(r, f, n) {
              r === null && (r = Function.prototype);
              var c = Object.getOwnPropertyDescriptor(r, f);
              if (c === void 0) {
                var k = Object.getPrototypeOf(r);
                return k === null ? void 0 : i(k, f, n);
              }
              if ('value' in c) return c.value;
              var b = c.get;
              return b === void 0 ? void 0 : b.call(n);
            },
            O = p(0),
            v = d(O);
          function d(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function s(i, r) {
            if (!(i instanceof r)) throw new TypeError('Cannot call a class as a function');
          }
          function o(i, r) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r === 'object' || typeof r === 'function') ? r : i;
          }
          function t(i, r) {
            if (typeof r !== 'function' && r !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof r
              );
            (i.prototype = Object.create(r && r.prototype, {
              constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
            })),
              r && (Object.setPrototypeOf ? Object.setPrototypeOf(i, r) : (i.__proto__ = r));
          }
          var e = { scope: v.default.Scope.INLINE, whitelist: ['serif', 'monospace'] },
            u = new v.default.Attributor.Class('font', 'ql-font', e),
            l = (function (i) {
              t(r, i);
              function r() {
                return (
                  s(this, r),
                  o(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
                );
              }
              return (
                P(r, [
                  {
                    key: 'value',
                    value: function (n) {
                      return w(
                        r.prototype.__proto__ || Object.getPrototypeOf(r.prototype),
                        'value',
                        this
                      )
                        .call(this, n)
                        .replace(/["']/g, '');
                    },
                  },
                ]),
                r
              );
            })(v.default.Attributor.Style),
            a = new l('font', 'font-family', e);
          (g.FontStyle = a), (g.FontClass = u);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.SizeStyle = g.SizeClass = void 0);
          var P = p(0),
            w = O(P);
          function O(s) {
            return s && s.__esModule ? s : { default: s };
          }
          var v = new w.default.Attributor.Class('size', 'ql-size', {
              scope: w.default.Scope.INLINE,
              whitelist: ['small', 'large', 'huge'],
            }),
            d = new w.default.Attributor.Style('size', 'font-size', {
              scope: w.default.Scope.INLINE,
              whitelist: ['10px', '18px', '32px'],
            });
          (g.SizeClass = v), (g.SizeStyle = d);
        },
        function (j, g, p) {
          'use strict';
          j.exports = {
            align: { '': p(76), center: p(77), right: p(78), justify: p(79) },
            background: p(80),
            blockquote: p(81),
            bold: p(82),
            clean: p(83),
            code: p(58),
            'code-block': p(58),
            color: p(84),
            direction: { '': p(85), rtl: p(86) },
            float: { center: p(87), full: p(88), left: p(89), right: p(90) },
            formula: p(91),
            header: { 1: p(92), 2: p(93) },
            italic: p(94),
            image: p(95),
            indent: { '+1': p(96), '-1': p(97) },
            link: p(98),
            list: { ordered: p(99), bullet: p(100), check: p(101) },
            script: { sub: p(102), super: p(103) },
            strike: p(104),
            underline: p(105),
            video: p(106),
          };
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.getLastChangeIndex = g.default = void 0);
          var P = (function () {
              function f(n, c) {
                for (var k = 0; k < c.length; k++) {
                  var b = c[k];
                  (b.enumerable = b.enumerable || !1),
                    (b.configurable = !0),
                    'value' in b && (b.writable = !0),
                    Object.defineProperty(n, b.key, b);
                }
              }
              return function (n, c, k) {
                return c && f(n.prototype, c), k && f(n, k), n;
              };
            })(),
            w = p(0),
            O = t(w),
            v = p(5),
            d = t(v),
            s = p(9),
            o = t(s);
          function t(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function e(f, n) {
            if (!(f instanceof n)) throw new TypeError('Cannot call a class as a function');
          }
          function u(f, n) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n && (typeof n === 'object' || typeof n === 'function') ? n : f;
          }
          function l(f, n) {
            if (typeof n !== 'function' && n !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof n
              );
            (f.prototype = Object.create(n && n.prototype, {
              constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 },
            })),
              n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : (f.__proto__ = n));
          }
          var a = (function (f) {
            l(n, f);
            function n(c, k) {
              e(this, n);
              var b = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, c, k));
              return (
                (b.lastRecorded = 0),
                (b.ignoreChange = !1),
                b.clear(),
                b.quill.on(d.default.events.EDITOR_CHANGE, function (_, N, m, h) {
                  _ !== d.default.events.TEXT_CHANGE ||
                    b.ignoreChange ||
                    (!b.options.userOnly || h === d.default.sources.USER
                      ? b.record(N, m)
                      : b.transform(N));
                }),
                b.quill.keyboard.addBinding({ key: 'Z', shortKey: !0 }, b.undo.bind(b)),
                b.quill.keyboard.addBinding(
                  { key: 'Z', shortKey: !0, shiftKey: !0 },
                  b.redo.bind(b)
                ),
                /Win/i.test(navigator.platform) &&
                  b.quill.keyboard.addBinding({ key: 'Y', shortKey: !0 }, b.redo.bind(b)),
                b
              );
            }
            return (
              P(n, [
                {
                  key: 'change',
                  value: function (k, b) {
                    if (this.stack[k].length !== 0) {
                      var _ = this.stack[k].pop();
                      this.stack[b].push(_),
                        (this.lastRecorded = 0),
                        (this.ignoreChange = !0),
                        this.quill.updateContents(_[k], d.default.sources.USER),
                        (this.ignoreChange = !1);
                      var N = r(_[k]);
                      this.quill.setSelection(N);
                    }
                  },
                },
                {
                  key: 'clear',
                  value: function () {
                    this.stack = { undo: [], redo: [] };
                  },
                },
                {
                  key: 'cutoff',
                  value: function () {
                    this.lastRecorded = 0;
                  },
                },
                {
                  key: 'record',
                  value: function (k, b) {
                    if (k.ops.length !== 0) {
                      this.stack.redo = [];
                      var _ = this.quill.getContents().diff(b),
                        N = Date.now();
                      if (
                        this.lastRecorded + this.options.delay > N &&
                        this.stack.undo.length > 0
                      ) {
                        var m = this.stack.undo.pop();
                        (_ = _.compose(m.undo)), (k = m.redo.compose(k));
                      } else this.lastRecorded = N;
                      this.stack.undo.push({ redo: k, undo: _ }),
                        this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
                    }
                  },
                },
                {
                  key: 'redo',
                  value: function () {
                    this.change('redo', 'undo');
                  },
                },
                {
                  key: 'transform',
                  value: function (k) {
                    this.stack.undo.forEach(function (b) {
                      (b.undo = k.transform(b.undo, !0)), (b.redo = k.transform(b.redo, !0));
                    }),
                      this.stack.redo.forEach(function (b) {
                        (b.undo = k.transform(b.undo, !0)), (b.redo = k.transform(b.redo, !0));
                      });
                  },
                },
                {
                  key: 'undo',
                  value: function () {
                    this.change('undo', 'redo');
                  },
                },
              ]),
              n
            );
          })(o.default);
          a.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 };
          function i(f) {
            var n = f.ops[f.ops.length - 1];
            return n == null
              ? !1
              : n.insert != null
              ? typeof n.insert === 'string' &&
                n.insert.endsWith(`
`)
              : n.attributes != null
              ? Object.keys(n.attributes).some(function (c) {
                  return O.default.query(c, O.default.Scope.BLOCK) != null;
                })
              : !1;
          }
          function r(f) {
            var n = f.reduce(function (k, b) {
                return (k += b.delete || 0), k;
              }, 0),
              c = f.length() - n;
            return i(f) && (c -= 1), c;
          }
          (g.default = a), (g.getLastChangeIndex = r);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.default = g.BaseTooltip = void 0);
          var P = (function () {
              function S(L, F) {
                for (var D = 0; D < F.length; D++) {
                  var x = F[D];
                  (x.enumerable = x.enumerable || !1),
                    (x.configurable = !0),
                    'value' in x && (x.writable = !0),
                    Object.defineProperty(L, x.key, x);
                }
              }
              return function (L, F, D) {
                return F && S(L.prototype, F), D && S(L, D), L;
              };
            })(),
            w = function S(L, F, D) {
              L === null && (L = Function.prototype);
              var x = Object.getOwnPropertyDescriptor(L, F);
              if (x === void 0) {
                var I = Object.getPrototypeOf(L);
                return I === null ? void 0 : S(I, F, D);
              }
              if ('value' in x) return x.value;
              var U = x.get;
              return U === void 0 ? void 0 : U.call(D);
            },
            O = p(3),
            v = N(O),
            d = p(2),
            s = N(d),
            o = p(8),
            t = N(o),
            e = p(23),
            u = N(e),
            l = p(34),
            a = N(l),
            i = p(59),
            r = N(i),
            f = p(60),
            n = N(f),
            c = p(28),
            k = N(c),
            b = p(61),
            _ = N(b);
          function N(S) {
            return S && S.__esModule ? S : { default: S };
          }
          function m(S, L) {
            if (!(S instanceof L)) throw new TypeError('Cannot call a class as a function');
          }
          function h(S, L) {
            if (!S)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return L && (typeof L === 'object' || typeof L === 'function') ? L : S;
          }
          function y(S, L) {
            if (typeof L !== 'function' && L !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof L
              );
            (S.prototype = Object.create(L && L.prototype, {
              constructor: { value: S, enumerable: !1, writable: !0, configurable: !0 },
            })),
              L && (Object.setPrototypeOf ? Object.setPrototypeOf(S, L) : (S.__proto__ = L));
          }
          var A = [!1, 'center', 'right', 'justify'],
            T = [
              '#000000',
              '#e60000',
              '#ff9900',
              '#ffff00',
              '#008a00',
              '#0066cc',
              '#9933ff',
              '#ffffff',
              '#facccc',
              '#ffebcc',
              '#ffffcc',
              '#cce8cc',
              '#cce0f5',
              '#ebd6ff',
              '#bbbbbb',
              '#f06666',
              '#ffc266',
              '#ffff66',
              '#66b966',
              '#66a3e0',
              '#c285ff',
              '#888888',
              '#a10000',
              '#b26b00',
              '#b2b200',
              '#006100',
              '#0047b2',
              '#6b24b2',
              '#444444',
              '#5c0000',
              '#663d00',
              '#666600',
              '#003700',
              '#002966',
              '#3d1466',
            ],
            q = [!1, 'serif', 'monospace'],
            B = ['1', '2', '3', !1],
            C = ['small', !1, 'large', 'huge'],
            Z = (function (S) {
              y(L, S);
              function L(F, D) {
                m(this, L);
                var x = h(this, (L.__proto__ || Object.getPrototypeOf(L)).call(this, F, D)),
                  I = function U(H) {
                    if (!document.body.contains(F.root))
                      return document.body.removeEventListener('click', U);
                    x.tooltip != null &&
                      !x.tooltip.root.contains(H.target) &&
                      document.activeElement !== x.tooltip.textbox &&
                      !x.quill.hasFocus() &&
                      x.tooltip.hide(),
                      x.pickers != null &&
                        x.pickers.forEach(function (V) {
                          V.container.contains(H.target) || V.close();
                        });
                  };
                return F.emitter.listenDOM('click', document.body, I), x;
              }
              return (
                P(L, [
                  {
                    key: 'addModule',
                    value: function (D) {
                      var x = w(
                        L.prototype.__proto__ || Object.getPrototypeOf(L.prototype),
                        'addModule',
                        this
                      ).call(this, D);
                      return D === 'toolbar' && this.extendToolbar(x), x;
                    },
                  },
                  {
                    key: 'buildButtons',
                    value: function (D, x) {
                      D.forEach(function (I) {
                        var U = I.getAttribute('class') || '';
                        U.split(/\s+/).forEach(function (H) {
                          if (H.startsWith('ql-') && ((H = H.slice(3)), x[H] != null))
                            if (H === 'direction') I.innerHTML = x[H][''] + x[H].rtl;
                            else if (typeof x[H] === 'string') I.innerHTML = x[H];
                            else {
                              var V = I.value || '';
                              V != null && x[H][V] && (I.innerHTML = x[H][V]);
                            }
                        });
                      });
                    },
                  },
                  {
                    key: 'buildPickers',
                    value: function (D, x) {
                      var I = this;
                      this.pickers = D.map(function (H) {
                        if (H.classList.contains('ql-align'))
                          return (
                            H.querySelector('option') == null && E(H, A), new n.default(H, x.align)
                          );
                        if (
                          H.classList.contains('ql-background') ||
                          H.classList.contains('ql-color')
                        ) {
                          var V = H.classList.contains('ql-background') ? 'background' : 'color';
                          return (
                            H.querySelector('option') == null &&
                              E(H, T, V === 'background' ? '#ffffff' : '#000000'),
                            new r.default(H, x[V])
                          );
                        }
                        return (
                          H.querySelector('option') == null &&
                            (H.classList.contains('ql-font')
                              ? E(H, q)
                              : H.classList.contains('ql-header')
                              ? E(H, B)
                              : H.classList.contains('ql-size') && E(H, C)),
                          new k.default(H)
                        );
                      });
                      var U = function () {
                        I.pickers.forEach(function (V) {
                          V.update();
                        });
                      };
                      this.quill.on(t.default.events.EDITOR_CHANGE, U);
                    },
                  },
                ]),
                L
              );
            })(a.default);
          Z.DEFAULTS = (0, v.default)(!0, {}, a.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  formula: function () {
                    this.quill.theme.tooltip.edit('formula');
                  },
                  image: function () {
                    var L = this,
                      F = this.container.querySelector('input.ql-image[type=file]');
                    F == null &&
                      ((F = document.createElement('input')),
                      F.setAttribute('type', 'file'),
                      F.setAttribute(
                        'accept',
                        'image/png, image/gif, image/jpeg, image/bmp, image/x-icon'
                      ),
                      F.classList.add('ql-image'),
                      F.addEventListener('change', function () {
                        if (F.files != null && F.files[0] != null) {
                          var D = new FileReader();
                          (D.onload = function (x) {
                            var I = L.quill.getSelection(!0);
                            L.quill.updateContents(
                              new s.default()
                                .retain(I.index)
                                .delete(I.length)
                                .insert({ image: x.target.result }),
                              t.default.sources.USER
                            ),
                              L.quill.setSelection(I.index + 1, t.default.sources.SILENT),
                              (F.value = '');
                          }),
                            D.readAsDataURL(F.files[0]);
                        }
                      }),
                      this.container.appendChild(F)),
                      F.click();
                  },
                  video: function () {
                    this.quill.theme.tooltip.edit('video');
                  },
                },
              },
            },
          });
          var M = (function (S) {
            y(L, S);
            function L(F, D) {
              m(this, L);
              var x = h(this, (L.__proto__ || Object.getPrototypeOf(L)).call(this, F, D));
              return (x.textbox = x.root.querySelector('input[type="text"]')), x.listen(), x;
            }
            return (
              P(L, [
                {
                  key: 'listen',
                  value: function () {
                    var D = this;
                    this.textbox.addEventListener('keydown', function (x) {
                      u.default.match(x, 'enter')
                        ? (D.save(), x.preventDefault())
                        : u.default.match(x, 'escape') && (D.cancel(), x.preventDefault());
                    });
                  },
                },
                {
                  key: 'cancel',
                  value: function () {
                    this.hide();
                  },
                },
                {
                  key: 'edit',
                  value: function () {
                    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'link',
                      x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                    this.root.classList.remove('ql-hidden'),
                      this.root.classList.add('ql-editing'),
                      x != null
                        ? (this.textbox.value = x)
                        : D !== this.root.getAttribute('data-mode') && (this.textbox.value = ''),
                      this.position(this.quill.getBounds(this.quill.selection.savedRange)),
                      this.textbox.select(),
                      this.textbox.setAttribute(
                        'placeholder',
                        this.textbox.getAttribute('data-' + D) || ''
                      ),
                      this.root.setAttribute('data-mode', D);
                  },
                },
                {
                  key: 'restoreFocus',
                  value: function () {
                    var D = this.quill.scrollingContainer.scrollTop;
                    this.quill.focus(), (this.quill.scrollingContainer.scrollTop = D);
                  },
                },
                {
                  key: 'save',
                  value: function () {
                    var D = this.textbox.value;
                    switch (this.root.getAttribute('data-mode')) {
                      case 'link': {
                        var x = this.quill.root.scrollTop;
                        this.linkRange
                          ? (this.quill.formatText(
                              this.linkRange,
                              'link',
                              D,
                              t.default.sources.USER
                            ),
                            delete this.linkRange)
                          : (this.restoreFocus(),
                            this.quill.format('link', D, t.default.sources.USER)),
                          (this.quill.root.scrollTop = x);
                        break;
                      }
                      case 'video':
                        D = R(D);
                      case 'formula': {
                        if (!D) break;
                        var I = this.quill.getSelection(!0);
                        if (I != null) {
                          var U = I.index + I.length;
                          this.quill.insertEmbed(
                            U,
                            this.root.getAttribute('data-mode'),
                            D,
                            t.default.sources.USER
                          ),
                            this.root.getAttribute('data-mode') === 'formula' &&
                              this.quill.insertText(U + 1, ' ', t.default.sources.USER),
                            this.quill.setSelection(U + 2, t.default.sources.USER);
                        }
                        break;
                      }
                      default:
                    }
                    (this.textbox.value = ''), this.hide();
                  },
                },
              ]),
              L
            );
          })(_.default);
          function R(S) {
            var L =
              S.match(
                /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
              ) || S.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
            return L
              ? (L[1] || 'https') + '://www.youtube.com/embed/' + L[2] + '?showinfo=0'
              : (L = S.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))
              ? (L[1] || 'https') + '://player.vimeo.com/video/' + L[2] + '/'
              : S;
          }
          function E(S, L) {
            var F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            L.forEach(function (D) {
              var x = document.createElement('option');
              D === F ? x.setAttribute('selected', 'selected') : x.setAttribute('value', D),
                S.appendChild(x);
            });
          }
          (g.BaseTooltip = M), (g.default = Z);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
            function w() {
              (this.head = this.tail = null), (this.length = 0);
            }
            return (
              (w.prototype.append = function () {
                for (var O = [], v = 0; v < arguments.length; v++) O[v] = arguments[v];
                this.insertBefore(O[0], null), O.length > 1 && this.append.apply(this, O.slice(1));
              }),
              (w.prototype.contains = function (O) {
                for (var v, d = this.iterator(); (v = d()); ) if (v === O) return !0;
                return !1;
              }),
              (w.prototype.insertBefore = function (O, v) {
                O &&
                  ((O.next = v),
                  v != null
                    ? ((O.prev = v.prev),
                      v.prev != null && (v.prev.next = O),
                      (v.prev = O),
                      v === this.head && (this.head = O))
                    : this.tail != null
                    ? ((this.tail.next = O), (O.prev = this.tail), (this.tail = O))
                    : ((O.prev = null), (this.head = this.tail = O)),
                  (this.length += 1));
              }),
              (w.prototype.offset = function (O) {
                for (var v = 0, d = this.head; d != null; ) {
                  if (d === O) return v;
                  (v += d.length()), (d = d.next);
                }
                return -1;
              }),
              (w.prototype.remove = function (O) {
                this.contains(O) &&
                  (O.prev != null && (O.prev.next = O.next),
                  O.next != null && (O.next.prev = O.prev),
                  O === this.head && (this.head = O.next),
                  O === this.tail && (this.tail = O.prev),
                  (this.length -= 1));
              }),
              (w.prototype.iterator = function (O) {
                return (
                  O === void 0 && (O = this.head),
                  function () {
                    var v = O;
                    return O != null && (O = O.next), v;
                  }
                );
              }),
              (w.prototype.find = function (O, v) {
                v === void 0 && (v = !1);
                for (var d, s = this.iterator(); (d = s()); ) {
                  var o = d.length();
                  if (O < o || (v && O === o && (d.next == null || d.next.length() !== 0)))
                    return [d, O];
                  O -= o;
                }
                return [null, 0];
              }),
              (w.prototype.forEach = function (O) {
                for (var v, d = this.iterator(); (v = d()); ) O(v);
              }),
              (w.prototype.forEachAt = function (O, v, d) {
                if (!(v <= 0))
                  for (
                    var s = this.find(O), o = s[0], t = s[1], e, u = O - t, l = this.iterator(o);
                    (e = l()) && u < O + v;

                  ) {
                    var a = e.length();
                    O > u ? d(e, O - u, Math.min(v, u + a - O)) : d(e, 0, Math.min(a, O + v - u)),
                      (u += a);
                  }
              }),
              (w.prototype.map = function (O) {
                return this.reduce(function (v, d) {
                  return v.push(O(d)), v;
                }, []);
              }),
              (w.prototype.reduce = function (O, v) {
                for (var d, s = this.iterator(); (d = s()); ) v = O(v, d);
                return v;
              }),
              w
            );
          })();
          g.default = P;
        },
        function (j, g, p) {
          'use strict';
          var P =
            (this && this.__extends) ||
            (function () {
              var o =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var u in e) e.hasOwnProperty(u) && (t[u] = e[u]);
                };
              return function (t, e) {
                o(t, e);
                function u() {
                  this.constructor = t;
                }
                t.prototype =
                  e === null ? Object.create(e) : ((u.prototype = e.prototype), new u());
              };
            })();
          Object.defineProperty(g, '__esModule', { value: !0 });
          var w = p(17),
            O = p(1),
            v = {
              attributes: !0,
              characterData: !0,
              characterDataOldValue: !0,
              childList: !0,
              subtree: !0,
            },
            d = 100,
            s = (function (o) {
              P(t, o);
              function t(e) {
                var u = o.call(this, e) || this;
                return (
                  (u.scroll = u),
                  (u.observer = new MutationObserver(function (l) {
                    u.update(l);
                  })),
                  u.observer.observe(u.domNode, v),
                  u.attach(),
                  u
                );
              }
              return (
                (t.prototype.detach = function () {
                  o.prototype.detach.call(this), this.observer.disconnect();
                }),
                (t.prototype.deleteAt = function (e, u) {
                  this.update(),
                    e === 0 && u === this.length()
                      ? this.children.forEach(function (l) {
                          l.remove();
                        })
                      : o.prototype.deleteAt.call(this, e, u);
                }),
                (t.prototype.formatAt = function (e, u, l, a) {
                  this.update(), o.prototype.formatAt.call(this, e, u, l, a);
                }),
                (t.prototype.insertAt = function (e, u, l) {
                  this.update(), o.prototype.insertAt.call(this, e, u, l);
                }),
                (t.prototype.optimize = function (e, u) {
                  var l = this;
                  e === void 0 && (e = []),
                    u === void 0 && (u = {}),
                    o.prototype.optimize.call(this, u);
                  for (var a = [].slice.call(this.observer.takeRecords()); a.length > 0; )
                    e.push(a.pop());
                  for (
                    var i = function (c, k) {
                        k === void 0 && (k = !0),
                          !(c == null || c === l) &&
                            c.domNode.parentNode != null &&
                            (c.domNode[O.DATA_KEY].mutations == null &&
                              (c.domNode[O.DATA_KEY].mutations = []),
                            k && i(c.parent));
                      },
                      r = function (c) {
                        c.domNode[O.DATA_KEY] == null ||
                          c.domNode[O.DATA_KEY].mutations == null ||
                          (c instanceof w.default && c.children.forEach(r), c.optimize(u));
                      },
                      f = e,
                      n = 0;
                    f.length > 0;
                    n += 1
                  ) {
                    if (n >= d) throw new Error('[Parchment] Maximum optimize iterations reached');
                    for (
                      f.forEach(function (c) {
                        var k = O.find(c.target, !0);
                        k != null &&
                          (k.domNode === c.target &&
                            (c.type === 'childList'
                              ? (i(O.find(c.previousSibling, !1)),
                                [].forEach.call(c.addedNodes, function (b) {
                                  var _ = O.find(b, !1);
                                  i(_, !1),
                                    _ instanceof w.default &&
                                      _.children.forEach(function (N) {
                                        i(N, !1);
                                      });
                                }))
                              : c.type === 'attributes' && i(k.prev)),
                          i(k));
                      }),
                        this.children.forEach(r),
                        f = [].slice.call(this.observer.takeRecords()),
                        a = f.slice();
                      a.length > 0;

                    )
                      e.push(a.pop());
                  }
                }),
                (t.prototype.update = function (e, u) {
                  var l = this;
                  u === void 0 && (u = {}),
                    (e = e || this.observer.takeRecords()),
                    e
                      .map(function (a) {
                        var i = O.find(a.target, !0);
                        return i == null
                          ? null
                          : i.domNode[O.DATA_KEY].mutations == null
                          ? ((i.domNode[O.DATA_KEY].mutations = [a]), i)
                          : (i.domNode[O.DATA_KEY].mutations.push(a), null);
                      })
                      .forEach(function (a) {
                        a == null ||
                          a === l ||
                          a.domNode[O.DATA_KEY] == null ||
                          a.update(a.domNode[O.DATA_KEY].mutations || [], u);
                      }),
                    this.domNode[O.DATA_KEY].mutations != null &&
                      o.prototype.update.call(this, this.domNode[O.DATA_KEY].mutations, u),
                    this.optimize(e, u);
                }),
                (t.blotName = 'scroll'),
                (t.defaultChild = 'block'),
                (t.scope = O.Scope.BLOCK_BLOT),
                (t.tagName = 'DIV'),
                t
              );
            })(w.default);
          g.default = s;
        },
        function (j, g, p) {
          'use strict';
          var P =
            (this && this.__extends) ||
            (function () {
              var s =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (o, t) {
                    o.__proto__ = t;
                  }) ||
                function (o, t) {
                  for (var e in t) t.hasOwnProperty(e) && (o[e] = t[e]);
                };
              return function (o, t) {
                s(o, t);
                function e() {
                  this.constructor = o;
                }
                o.prototype =
                  t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
              };
            })();
          Object.defineProperty(g, '__esModule', { value: !0 });
          var w = p(18),
            O = p(1);
          function v(s, o) {
            if (Object.keys(s).length !== Object.keys(o).length) return !1;
            for (var t in s) if (s[t] !== o[t]) return !1;
            return !0;
          }
          var d = (function (s) {
            P(o, s);
            function o() {
              return (s !== null && s.apply(this, arguments)) || this;
            }
            return (
              (o.formats = function (t) {
                if (t.tagName !== o.tagName) return s.formats.call(this, t);
              }),
              (o.prototype.format = function (t, e) {
                var u = this;
                t === this.statics.blotName && !e
                  ? (this.children.forEach(function (l) {
                      l instanceof w.default || (l = l.wrap(o.blotName, !0)), u.attributes.copy(l);
                    }),
                    this.unwrap())
                  : s.prototype.format.call(this, t, e);
              }),
              (o.prototype.formatAt = function (t, e, u, l) {
                if (this.formats()[u] != null || O.query(u, O.Scope.ATTRIBUTE)) {
                  var a = this.isolate(t, e);
                  a.format(u, l);
                } else s.prototype.formatAt.call(this, t, e, u, l);
              }),
              (o.prototype.optimize = function (t) {
                s.prototype.optimize.call(this, t);
                var e = this.formats();
                if (Object.keys(e).length === 0) return this.unwrap();
                var u = this.next;
                u instanceof o &&
                  u.prev === this &&
                  v(e, u.formats()) &&
                  (u.moveChildren(this), u.remove());
              }),
              (o.blotName = 'inline'),
              (o.scope = O.Scope.INLINE_BLOT),
              (o.tagName = 'SPAN'),
              o
            );
          })(w.default);
          g.default = d;
        },
        function (j, g, p) {
          'use strict';
          var P =
            (this && this.__extends) ||
            (function () {
              var d =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (s, o) {
                    s.__proto__ = o;
                  }) ||
                function (s, o) {
                  for (var t in o) o.hasOwnProperty(t) && (s[t] = o[t]);
                };
              return function (s, o) {
                d(s, o);
                function t() {
                  this.constructor = s;
                }
                s.prototype =
                  o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
              };
            })();
          Object.defineProperty(g, '__esModule', { value: !0 });
          var w = p(18),
            O = p(1),
            v = (function (d) {
              P(s, d);
              function s() {
                return (d !== null && d.apply(this, arguments)) || this;
              }
              return (
                (s.formats = function (o) {
                  var t = O.query(s.blotName).tagName;
                  if (o.tagName !== t) return d.formats.call(this, o);
                }),
                (s.prototype.format = function (o, t) {
                  O.query(o, O.Scope.BLOCK) != null &&
                    (o === this.statics.blotName && !t
                      ? this.replaceWith(s.blotName)
                      : d.prototype.format.call(this, o, t));
                }),
                (s.prototype.formatAt = function (o, t, e, u) {
                  O.query(e, O.Scope.BLOCK) != null
                    ? this.format(e, u)
                    : d.prototype.formatAt.call(this, o, t, e, u);
                }),
                (s.prototype.insertAt = function (o, t, e) {
                  if (e == null || O.query(t, O.Scope.INLINE) != null)
                    d.prototype.insertAt.call(this, o, t, e);
                  else {
                    var u = this.split(o),
                      l = O.create(t, e);
                    u.parent.insertBefore(l, u);
                  }
                }),
                (s.prototype.update = function (o, t) {
                  navigator.userAgent.match(/Trident/)
                    ? this.build()
                    : d.prototype.update.call(this, o, t);
                }),
                (s.blotName = 'block'),
                (s.scope = O.Scope.BLOCK_BLOT),
                (s.tagName = 'P'),
                s
              );
            })(w.default);
          g.default = v;
        },
        function (j, g, p) {
          'use strict';
          var P =
            (this && this.__extends) ||
            (function () {
              var v =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (d, s) {
                    d.__proto__ = s;
                  }) ||
                function (d, s) {
                  for (var o in s) s.hasOwnProperty(o) && (d[o] = s[o]);
                };
              return function (d, s) {
                v(d, s);
                function o() {
                  this.constructor = d;
                }
                d.prototype =
                  s === null ? Object.create(s) : ((o.prototype = s.prototype), new o());
              };
            })();
          Object.defineProperty(g, '__esModule', { value: !0 });
          var w = p(19),
            O = (function (v) {
              P(d, v);
              function d() {
                return (v !== null && v.apply(this, arguments)) || this;
              }
              return (
                (d.formats = function (s) {}),
                (d.prototype.format = function (s, o) {
                  v.prototype.formatAt.call(this, 0, this.length(), s, o);
                }),
                (d.prototype.formatAt = function (s, o, t, e) {
                  s === 0 && o === this.length()
                    ? this.format(t, e)
                    : v.prototype.formatAt.call(this, s, o, t, e);
                }),
                (d.prototype.formats = function () {
                  return this.statics.formats(this.domNode);
                }),
                d
              );
            })(w.default);
          g.default = O;
        },
        function (j, g, p) {
          'use strict';
          var P =
            (this && this.__extends) ||
            (function () {
              var d =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (s, o) {
                    s.__proto__ = o;
                  }) ||
                function (s, o) {
                  for (var t in o) o.hasOwnProperty(t) && (s[t] = o[t]);
                };
              return function (s, o) {
                d(s, o);
                function t() {
                  this.constructor = s;
                }
                s.prototype =
                  o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
              };
            })();
          Object.defineProperty(g, '__esModule', { value: !0 });
          var w = p(19),
            O = p(1),
            v = (function (d) {
              P(s, d);
              function s(o) {
                var t = d.call(this, o) || this;
                return (t.text = t.statics.value(t.domNode)), t;
              }
              return (
                (s.create = function (o) {
                  return document.createTextNode(o);
                }),
                (s.value = function (o) {
                  var t = o.data;
                  return t.normalize && (t = t.normalize()), t;
                }),
                (s.prototype.deleteAt = function (o, t) {
                  this.domNode.data = this.text = this.text.slice(0, o) + this.text.slice(o + t);
                }),
                (s.prototype.index = function (o, t) {
                  return this.domNode === o ? t : -1;
                }),
                (s.prototype.insertAt = function (o, t, e) {
                  e == null
                    ? ((this.text = this.text.slice(0, o) + t + this.text.slice(o)),
                      (this.domNode.data = this.text))
                    : d.prototype.insertAt.call(this, o, t, e);
                }),
                (s.prototype.length = function () {
                  return this.text.length;
                }),
                (s.prototype.optimize = function (o) {
                  d.prototype.optimize.call(this, o),
                    (this.text = this.statics.value(this.domNode)),
                    this.text.length === 0
                      ? this.remove()
                      : this.next instanceof s &&
                        this.next.prev === this &&
                        (this.insertAt(this.length(), this.next.value()), this.next.remove());
                }),
                (s.prototype.position = function (o, t) {
                  return t === void 0 && (t = !1), [this.domNode, o];
                }),
                (s.prototype.split = function (o, t) {
                  if ((t === void 0 && (t = !1), !t)) {
                    if (o === 0) return this;
                    if (o === this.length()) return this.next;
                  }
                  var e = O.create(this.domNode.splitText(o));
                  return (
                    this.parent.insertBefore(e, this.next),
                    (this.text = this.statics.value(this.domNode)),
                    e
                  );
                }),
                (s.prototype.update = function (o, t) {
                  var e = this;
                  o.some(function (u) {
                    return u.type === 'characterData' && u.target === e.domNode;
                  }) && (this.text = this.statics.value(this.domNode));
                }),
                (s.prototype.value = function () {
                  return this.text;
                }),
                (s.blotName = 'text'),
                (s.scope = O.Scope.INLINE_BLOT),
                s
              );
            })(w.default);
          g.default = v;
        },
        function (j, g, p) {
          'use strict';
          var P = document.createElement('div');
          if ((P.classList.toggle('test-class', !1), P.classList.contains('test-class'))) {
            var w = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function (O, v) {
              return arguments.length > 1 && !this.contains(O) == !v ? v : w.call(this, O);
            };
          }
          String.prototype.startsWith ||
            (String.prototype.startsWith = function (O, v) {
              return (v = v || 0), this.substr(v, O.length) === O;
            }),
            String.prototype.endsWith ||
              (String.prototype.endsWith = function (O, v) {
                var d = this.toString();
                (typeof v !== 'number' || !isFinite(v) || Math.floor(v) !== v || v > d.length) &&
                  (v = d.length),
                  (v -= O.length);
                var s = d.indexOf(O, v);
                return s !== -1 && s === v;
              }),
            Array.prototype.find ||
              Object.defineProperty(Array.prototype, 'find', {
                value: function (v) {
                  if (this === null)
                    throw new TypeError('Array.prototype.find called on null or undefined');
                  if (typeof v !== 'function') throw new TypeError('predicate must be a function');
                  for (
                    var d = Object(this), s = d.length >>> 0, o = arguments[1], t, e = 0;
                    e < s;
                    e++
                  )
                    if (((t = d[e]), v.call(o, t, e, d))) return t;
                },
              }),
            document.addEventListener('DOMContentLoaded', function () {
              document.execCommand('enableObjectResizing', !1, !1),
                document.execCommand('autoUrlDetect', !1, !1);
            });
        },
        function (j, g) {
          var p = -1,
            P = 1,
            w = 0;
          function O(n, c, k) {
            if (n == c) return n ? [[w, n]] : [];
            (k < 0 || n.length < k) && (k = null);
            var b = o(n, c),
              _ = n.substring(0, b);
            (n = n.substring(b)), (c = c.substring(b)), (b = t(n, c));
            var N = n.substring(n.length - b);
            (n = n.substring(0, n.length - b)), (c = c.substring(0, c.length - b));
            var m = v(n, c);
            return (
              _ && m.unshift([w, _]),
              N && m.push([w, N]),
              u(m),
              k != null && (m = i(m, k)),
              (m = r(m)),
              m
            );
          }
          function v(n, c) {
            var k;
            if (!n) return [[P, c]];
            if (!c) return [[p, n]];
            var b = n.length > c.length ? n : c,
              _ = n.length > c.length ? c : n,
              N = b.indexOf(_);
            if (N != -1)
              return (
                (k = [
                  [P, b.substring(0, N)],
                  [w, _],
                  [P, b.substring(N + _.length)],
                ]),
                n.length > c.length && (k[0][0] = k[2][0] = p),
                k
              );
            if (_.length == 1)
              return [
                [p, n],
                [P, c],
              ];
            var m = e(n, c);
            if (m) {
              var h = m[0],
                y = m[1],
                A = m[2],
                T = m[3],
                q = m[4],
                B = O(h, A),
                C = O(y, T);
              return B.concat([[w, q]], C);
            }
            return d(n, c);
          }
          function d(n, c) {
            for (
              var k = n.length,
                b = c.length,
                _ = Math.ceil((k + b) / 2),
                N = _,
                m = 2 * _,
                h = new Array(m),
                y = new Array(m),
                A = 0;
              A < m;
              A++
            )
              (h[A] = -1), (y[A] = -1);
            (h[N + 1] = 0), (y[N + 1] = 0);
            for (var T = k - b, q = T % 2 != 0, B = 0, C = 0, Z = 0, M = 0, R = 0; R < _; R++) {
              for (var E = -R + B; E <= R - C; E += 2) {
                var S = N + E,
                  L;
                E == -R || (E != R && h[S - 1] < h[S + 1]) ? (L = h[S + 1]) : (L = h[S - 1] + 1);
                for (var F = L - E; L < k && F < b && n.charAt(L) == c.charAt(F); ) L++, F++;
                if (((h[S] = L), L > k)) C += 2;
                else if (F > b) B += 2;
                else if (q) {
                  var D = N + T - E;
                  if (D >= 0 && D < m && y[D] != -1) {
                    var x = k - y[D];
                    if (L >= x) return s(n, c, L, F);
                  }
                }
              }
              for (var I = -R + Z; I <= R - M; I += 2) {
                var D = N + I,
                  x;
                I == -R || (I != R && y[D - 1] < y[D + 1]) ? (x = y[D + 1]) : (x = y[D - 1] + 1);
                for (var U = x - I; x < k && U < b && n.charAt(k - x - 1) == c.charAt(b - U - 1); )
                  x++, U++;
                if (((y[D] = x), x > k)) M += 2;
                else if (U > b) Z += 2;
                else if (!q) {
                  var S = N + T - I;
                  if (S >= 0 && S < m && h[S] != -1) {
                    var L = h[S],
                      F = N + L - S;
                    if (((x = k - x), L >= x)) return s(n, c, L, F);
                  }
                }
              }
            }
            return [
              [p, n],
              [P, c],
            ];
          }
          function s(n, c, k, b) {
            var _ = n.substring(0, k),
              N = c.substring(0, b),
              m = n.substring(k),
              h = c.substring(b),
              y = O(_, N),
              A = O(m, h);
            return y.concat(A);
          }
          function o(n, c) {
            if (!n || !c || n.charAt(0) != c.charAt(0)) return 0;
            for (var k = 0, b = Math.min(n.length, c.length), _ = b, N = 0; k < _; )
              n.substring(N, _) == c.substring(N, _) ? ((k = _), (N = k)) : (b = _),
                (_ = Math.floor((b - k) / 2 + k));
            return _;
          }
          function t(n, c) {
            if (!n || !c || n.charAt(n.length - 1) != c.charAt(c.length - 1)) return 0;
            for (var k = 0, b = Math.min(n.length, c.length), _ = b, N = 0; k < _; )
              n.substring(n.length - _, n.length - N) == c.substring(c.length - _, c.length - N)
                ? ((k = _), (N = k))
                : (b = _),
                (_ = Math.floor((b - k) / 2 + k));
            return _;
          }
          function e(n, c) {
            var k = n.length > c.length ? n : c,
              b = n.length > c.length ? c : n;
            if (k.length < 4 || b.length * 2 < k.length) return null;
            function _(C, Z, M) {
              for (
                var R = C.substring(M, M + Math.floor(C.length / 4)), E = -1, S = '', L, F, D, x;
                (E = Z.indexOf(R, E + 1)) != -1;

              ) {
                var I = o(C.substring(M), Z.substring(E)),
                  U = t(C.substring(0, M), Z.substring(0, E));
                S.length < U + I &&
                  ((S = Z.substring(E - U, E) + Z.substring(E, E + I)),
                  (L = C.substring(0, M - U)),
                  (F = C.substring(M + I)),
                  (D = Z.substring(0, E - U)),
                  (x = Z.substring(E + I)));
              }
              return S.length * 2 >= C.length ? [L, F, D, x, S] : null;
            }
            var N = _(k, b, Math.ceil(k.length / 4)),
              m = _(k, b, Math.ceil(k.length / 2)),
              h;
            if (!N && !m) return null;
            m ? (N ? (h = N[4].length > m[4].length ? N : m) : (h = m)) : (h = N);
            var y, A, T, q;
            n.length > c.length
              ? ((y = h[0]), (A = h[1]), (T = h[2]), (q = h[3]))
              : ((T = h[0]), (q = h[1]), (y = h[2]), (A = h[3]));
            var B = h[4];
            return [y, A, T, q, B];
          }
          function u(n) {
            n.push([w, '']);
            for (var c = 0, k = 0, b = 0, _ = '', N = '', m; c < n.length; )
              switch (n[c][0]) {
                case P:
                  b++, (N += n[c][1]), c++;
                  break;
                case p:
                  k++, (_ += n[c][1]), c++;
                  break;
                case w:
                  k + b > 1
                    ? (k !== 0 &&
                        b !== 0 &&
                        ((m = o(N, _)),
                        m !== 0 &&
                          (c - k - b > 0 && n[c - k - b - 1][0] == w
                            ? (n[c - k - b - 1][1] += N.substring(0, m))
                            : (n.splice(0, 0, [w, N.substring(0, m)]), c++),
                          (N = N.substring(m)),
                          (_ = _.substring(m))),
                        (m = t(N, _)),
                        m !== 0 &&
                          ((n[c][1] = N.substring(N.length - m) + n[c][1]),
                          (N = N.substring(0, N.length - m)),
                          (_ = _.substring(0, _.length - m)))),
                      k === 0
                        ? n.splice(c - b, k + b, [P, N])
                        : b === 0
                        ? n.splice(c - k, k + b, [p, _])
                        : n.splice(c - k - b, k + b, [p, _], [P, N]),
                      (c = c - k - b + (k ? 1 : 0) + (b ? 1 : 0) + 1))
                    : c !== 0 && n[c - 1][0] == w
                    ? ((n[c - 1][1] += n[c][1]), n.splice(c, 1))
                    : c++,
                    (b = 0),
                    (k = 0),
                    (_ = ''),
                    (N = '');
                  break;
              }
            n[n.length - 1][1] === '' && n.pop();
            var h = !1;
            for (c = 1; c < n.length - 1; )
              n[c - 1][0] == w &&
                n[c + 1][0] == w &&
                (n[c][1].substring(n[c][1].length - n[c - 1][1].length) == n[c - 1][1]
                  ? ((n[c][1] =
                      n[c - 1][1] + n[c][1].substring(0, n[c][1].length - n[c - 1][1].length)),
                    (n[c + 1][1] = n[c - 1][1] + n[c + 1][1]),
                    n.splice(c - 1, 1),
                    (h = !0))
                  : n[c][1].substring(0, n[c + 1][1].length) == n[c + 1][1] &&
                    ((n[c - 1][1] += n[c + 1][1]),
                    (n[c][1] = n[c][1].substring(n[c + 1][1].length) + n[c + 1][1]),
                    n.splice(c + 1, 1),
                    (h = !0))),
                c++;
            h && u(n);
          }
          var l = O;
          (l.INSERT = P), (l.DELETE = p), (l.EQUAL = w), (j.exports = l);
          function a(n, c) {
            if (c === 0) return [w, n];
            for (var k = 0, b = 0; b < n.length; b++) {
              var _ = n[b];
              if (_[0] === p || _[0] === w) {
                var N = k + _[1].length;
                if (c === N) return [b + 1, n];
                if (c < N) {
                  n = n.slice();
                  var m = c - k,
                    h = [_[0], _[1].slice(0, m)],
                    y = [_[0], _[1].slice(m)];
                  return n.splice(b, 1, h, y), [b + 1, n];
                }
                k = N;
              }
            }
            throw new Error('cursor_pos is out of bounds!');
          }
          function i(n, c) {
            var k = a(n, c),
              b = k[1],
              _ = k[0],
              N = b[_],
              m = b[_ + 1];
            if (N == null) return n;
            if (N[0] !== w) return n;
            if (m != null && N[1] + m[1] === m[1] + N[1]) return b.splice(_, 2, m, N), f(b, _, 2);
            if (m != null && m[1].indexOf(N[1]) === 0) {
              b.splice(_, 2, [m[0], N[1]], [0, N[1]]);
              var h = m[1].slice(N[1].length);
              return h.length > 0 && b.splice(_ + 2, 0, [m[0], h]), f(b, _, 3);
            }
            return n;
          }
          function r(n) {
            for (
              var c = !1,
                k = function (m) {
                  return m.charCodeAt(0) >= 56320 && m.charCodeAt(0) <= 57343;
                },
                b = function (m) {
                  return m.charCodeAt(m.length - 1) >= 55296 && m.charCodeAt(m.length - 1) <= 56319;
                },
                _ = 2;
              _ < n.length;
              _ += 1
            )
              n[_ - 2][0] === w &&
                b(n[_ - 2][1]) &&
                n[_ - 1][0] === p &&
                k(n[_ - 1][1]) &&
                n[_][0] === P &&
                k(n[_][1]) &&
                ((c = !0),
                (n[_ - 1][1] = n[_ - 2][1].slice(-1) + n[_ - 1][1]),
                (n[_][1] = n[_ - 2][1].slice(-1) + n[_][1]),
                (n[_ - 2][1] = n[_ - 2][1].slice(0, -1)));
            if (!c) return n;
            for (var N = [], _ = 0; _ < n.length; _ += 1) n[_][1].length > 0 && N.push(n[_]);
            return N;
          }
          function f(n, c, k) {
            for (var b = c + k - 1; b >= 0 && b >= c - 1; b--)
              if (b + 1 < n.length) {
                var _ = n[b],
                  N = n[b + 1];
                _[0] === N[1] && n.splice(b, 2, [_[0], _[1] + N[1]]);
              }
            return n;
          }
        },
        function (j, g) {
          (g = j.exports = typeof Object.keys === 'function' ? Object.keys : p), (g.shim = p);
          function p(P) {
            var w = [];
            for (var O in P) w.push(O);
            return w;
          }
        },
        function (j, g) {
          var p =
            (function () {
              return Object.prototype.toString.call(arguments);
            })() == '[object Arguments]';
          (g = j.exports = p ? P : w), (g.supported = P);
          function P(O) {
            return Object.prototype.toString.call(O) == '[object Arguments]';
          }
          g.unsupported = w;
          function w(O) {
            return (
              (O &&
                typeof O === 'object' &&
                typeof O.length === 'number' &&
                Object.prototype.hasOwnProperty.call(O, 'callee') &&
                !Object.prototype.propertyIsEnumerable.call(O, 'callee')) ||
              !1
            );
          }
        },
        function (j, g) {
          'use strict';
          var p = Object.prototype.hasOwnProperty,
            P = '~';
          function w() {}
          Object.create && ((w.prototype = Object.create(null)), new w().__proto__ || (P = !1));
          function O(d, s, o) {
            (this.fn = d), (this.context = s), (this.once = o || !1);
          }
          function v() {
            (this._events = new w()), (this._eventsCount = 0);
          }
          (v.prototype.eventNames = function () {
            var s = [],
              o,
              t;
            if (this._eventsCount === 0) return s;
            for (t in (o = this._events)) p.call(o, t) && s.push(P ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(o)) : s;
          }),
            (v.prototype.listeners = function (s, o) {
              var t = P ? P + s : s,
                e = this._events[t];
              if (o) return !!e;
              if (!e) return [];
              if (e.fn) return [e.fn];
              for (var u = 0, l = e.length, a = new Array(l); u < l; u++) a[u] = e[u].fn;
              return a;
            }),
            (v.prototype.emit = function (s, o, t, e, u, l) {
              var a = P ? P + s : s;
              if (!this._events[a]) return !1;
              var i = this._events[a],
                r = arguments.length,
                f,
                n;
              if (i.fn) {
                switch ((i.once && this.removeListener(s, i.fn, void 0, !0), r)) {
                  case 1:
                    return i.fn.call(i.context), !0;
                  case 2:
                    return i.fn.call(i.context, o), !0;
                  case 3:
                    return i.fn.call(i.context, o, t), !0;
                  case 4:
                    return i.fn.call(i.context, o, t, e), !0;
                  case 5:
                    return i.fn.call(i.context, o, t, e, u), !0;
                  case 6:
                    return i.fn.call(i.context, o, t, e, u, l), !0;
                }
                for (n = 1, f = new Array(r - 1); n < r; n++) f[n - 1] = arguments[n];
                i.fn.apply(i.context, f);
              } else {
                var c = i.length,
                  k;
                for (n = 0; n < c; n++)
                  switch ((i[n].once && this.removeListener(s, i[n].fn, void 0, !0), r)) {
                    case 1:
                      i[n].fn.call(i[n].context);
                      break;
                    case 2:
                      i[n].fn.call(i[n].context, o);
                      break;
                    case 3:
                      i[n].fn.call(i[n].context, o, t);
                      break;
                    case 4:
                      i[n].fn.call(i[n].context, o, t, e);
                      break;
                    default:
                      if (!f) for (k = 1, f = new Array(r - 1); k < r; k++) f[k - 1] = arguments[k];
                      i[n].fn.apply(i[n].context, f);
                  }
              }
              return !0;
            }),
            (v.prototype.on = function (s, o, t) {
              var e = new O(o, t || this),
                u = P ? P + s : s;
              return (
                this._events[u]
                  ? this._events[u].fn
                    ? (this._events[u] = [this._events[u], e])
                    : this._events[u].push(e)
                  : ((this._events[u] = e), this._eventsCount++),
                this
              );
            }),
            (v.prototype.once = function (s, o, t) {
              var e = new O(o, t || this, !0),
                u = P ? P + s : s;
              return (
                this._events[u]
                  ? this._events[u].fn
                    ? (this._events[u] = [this._events[u], e])
                    : this._events[u].push(e)
                  : ((this._events[u] = e), this._eventsCount++),
                this
              );
            }),
            (v.prototype.removeListener = function (s, o, t, e) {
              var u = P ? P + s : s;
              if (!this._events[u]) return this;
              if (!o)
                return (
                  --this._eventsCount === 0 ? (this._events = new w()) : delete this._events[u],
                  this
                );
              var l = this._events[u];
              if (l.fn)
                l.fn === o &&
                  (!e || l.once) &&
                  (!t || l.context === t) &&
                  (--this._eventsCount === 0 ? (this._events = new w()) : delete this._events[u]);
              else {
                for (var a = 0, i = [], r = l.length; a < r; a++)
                  (l[a].fn !== o || (e && !l[a].once) || (t && l[a].context !== t)) && i.push(l[a]);
                i.length
                  ? (this._events[u] = i.length === 1 ? i[0] : i)
                  : --this._eventsCount === 0
                  ? (this._events = new w())
                  : delete this._events[u];
              }
              return this;
            }),
            (v.prototype.removeAllListeners = function (s) {
              var o;
              return (
                s
                  ? ((o = P ? P + s : s),
                    this._events[o] &&
                      (--this._eventsCount === 0
                        ? (this._events = new w())
                        : delete this._events[o]))
                  : ((this._events = new w()), (this._eventsCount = 0)),
                this
              );
            }),
            (v.prototype.off = v.prototype.removeListener),
            (v.prototype.addListener = v.prototype.on),
            (v.prototype.setMaxListeners = function () {
              return this;
            }),
            (v.prefixed = P),
            (v.EventEmitter = v),
            typeof j !== 'undefined' && (j.exports = v);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.matchText =
              g.matchSpacing =
              g.matchNewline =
              g.matchBlot =
              g.matchAttributor =
              g.default =
                void 0);
          var P =
              typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
                ? function (z) {
                    return typeof z;
                  }
                : function (z) {
                    return z &&
                      typeof Symbol === 'function' &&
                      z.constructor === Symbol &&
                      z !== Symbol.prototype
                      ? 'symbol'
                      : typeof z;
                  },
            w = (function () {
              function z(K, $) {
                var G = [],
                  W = !0,
                  J = !1,
                  tt = void 0;
                try {
                  for (
                    var et = K[Symbol.iterator](), ut;
                    !(W = (ut = et.next()).done) && (G.push(ut.value), !($ && G.length === $));
                    W = !0
                  );
                } catch (st) {
                  (J = !0), (tt = st);
                } finally {
                  try {
                    !W && et.return && et.return();
                  } finally {
                    if (J) throw tt;
                  }
                }
                return G;
              }
              return function (K, $) {
                if (Array.isArray(K)) return K;
                if (Symbol.iterator in Object(K)) return z(K, $);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            O = (function () {
              function z(K, $) {
                for (var G = 0; G < $.length; G++) {
                  var W = $[G];
                  (W.enumerable = W.enumerable || !1),
                    (W.configurable = !0),
                    'value' in W && (W.writable = !0),
                    Object.defineProperty(K, W.key, W);
                }
              }
              return function (K, $, G) {
                return $ && z(K.prototype, $), G && z(K, G), K;
              };
            })(),
            v = p(3),
            d = y(v),
            s = p(2),
            o = y(s),
            t = p(0),
            e = y(t),
            u = p(5),
            l = y(u),
            a = p(10),
            i = y(a),
            r = p(9),
            f = y(r),
            n = p(36),
            c = p(37),
            k = p(13),
            b = y(k),
            _ = p(26),
            N = p(38),
            m = p(39),
            h = p(40);
          function y(z) {
            return z && z.__esModule ? z : { default: z };
          }
          function A(z, K, $) {
            return (
              K in z
                ? Object.defineProperty(z, K, {
                    value: $,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (z[K] = $),
              z
            );
          }
          function T(z, K) {
            if (!(z instanceof K)) throw new TypeError('Cannot call a class as a function');
          }
          function q(z, K) {
            if (!z)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return K && (typeof K === 'object' || typeof K === 'function') ? K : z;
          }
          function B(z, K) {
            if (typeof K !== 'function' && K !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof K
              );
            (z.prototype = Object.create(K && K.prototype, {
              constructor: { value: z, enumerable: !1, writable: !0, configurable: !0 },
            })),
              K && (Object.setPrototypeOf ? Object.setPrototypeOf(z, K) : (z.__proto__ = K));
          }
          var C = (0, i.default)('quill:clipboard'),
            Z = '__ql-matcher',
            M = [
              [Node.TEXT_NODE, lt],
              [Node.TEXT_NODE, nt],
              ['br', Y],
              [Node.ELEMENT_NODE, nt],
              [Node.ELEMENT_NODE, V],
              [Node.ELEMENT_NODE, rt],
              [Node.ELEMENT_NODE, H],
              [Node.ELEMENT_NODE, at],
              ['li', Q],
              ['b', U.bind(U, 'bold')],
              ['i', U.bind(U, 'italic')],
              ['style', X],
            ],
            R = [n.AlignAttribute, N.DirectionAttribute].reduce(function (z, K) {
              return (z[K.keyName] = K), z;
            }, {}),
            E = [
              n.AlignStyle,
              c.BackgroundStyle,
              _.ColorStyle,
              N.DirectionStyle,
              m.FontStyle,
              h.SizeStyle,
            ].reduce(function (z, K) {
              return (z[K.keyName] = K), z;
            }, {}),
            S = (function (z) {
              B(K, z);
              function K($, G) {
                T(this, K);
                var W = q(this, (K.__proto__ || Object.getPrototypeOf(K)).call(this, $, G));
                return (
                  W.quill.root.addEventListener('paste', W.onPaste.bind(W)),
                  (W.container = W.quill.addContainer('ql-clipboard')),
                  W.container.setAttribute('contenteditable', !0),
                  W.container.setAttribute('tabindex', -1),
                  (W.matchers = []),
                  M.concat(W.options.matchers).forEach(function (J) {
                    var tt = w(J, 2),
                      et = tt[0],
                      ut = tt[1];
                    (!G.matchVisual && ut === rt) || W.addMatcher(et, ut);
                  }),
                  W
                );
              }
              return (
                O(K, [
                  {
                    key: 'addMatcher',
                    value: function (G, W) {
                      this.matchers.push([G, W]);
                    },
                  },
                  {
                    key: 'convert',
                    value: function (G) {
                      if (typeof G === 'string')
                        return (
                          (this.container.innerHTML = G.replace(/\>\r?\n +\</g, '><')),
                          this.convert()
                        );
                      var W = this.quill.getFormat(this.quill.selection.savedRange.index);
                      if (W[b.default.blotName]) {
                        var J = this.container.innerText;
                        return (
                          (this.container.innerHTML = ''),
                          new o.default().insert(
                            J,
                            A({}, b.default.blotName, W[b.default.blotName])
                          )
                        );
                      }
                      var tt = this.prepareMatching(),
                        et = w(tt, 2),
                        ut = et[0],
                        st = et[1],
                        it = I(this.container, ut, st);
                      return (
                        D(
                          it,
                          `
`
                        ) &&
                          it.ops[it.ops.length - 1].attributes == null &&
                          (it = it.compose(new o.default().retain(it.length() - 1).delete(1))),
                        C.log('convert', this.container.innerHTML, it),
                        (this.container.innerHTML = ''),
                        it
                      );
                    },
                  },
                  {
                    key: 'dangerouslyPasteHTML',
                    value: function (G, W) {
                      var J =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : l.default.sources.API;
                      if (typeof G === 'string')
                        this.quill.setContents(this.convert(G), W),
                          this.quill.setSelection(0, l.default.sources.SILENT);
                      else {
                        var tt = this.convert(W);
                        this.quill.updateContents(new o.default().retain(G).concat(tt), J),
                          this.quill.setSelection(G + tt.length(), l.default.sources.SILENT);
                      }
                    },
                  },
                  {
                    key: 'onPaste',
                    value: function (G) {
                      var W = this;
                      if (!(G.defaultPrevented || !this.quill.isEnabled())) {
                        var J = this.quill.getSelection(),
                          tt = new o.default().retain(J.index),
                          et = this.quill.scrollingContainer.scrollTop;
                        this.container.focus(),
                          this.quill.selection.update(l.default.sources.SILENT),
                          setTimeout(function () {
                            (tt = tt.concat(W.convert()).delete(J.length)),
                              W.quill.updateContents(tt, l.default.sources.USER),
                              W.quill.setSelection(
                                tt.length() - J.length,
                                l.default.sources.SILENT
                              ),
                              (W.quill.scrollingContainer.scrollTop = et),
                              W.quill.focus();
                          }, 1);
                      }
                    },
                  },
                  {
                    key: 'prepareMatching',
                    value: function () {
                      var G = this,
                        W = [],
                        J = [];
                      return (
                        this.matchers.forEach(function (tt) {
                          var et = w(tt, 2),
                            ut = et[0],
                            st = et[1];
                          switch (ut) {
                            case Node.TEXT_NODE:
                              J.push(st);
                              break;
                            case Node.ELEMENT_NODE:
                              W.push(st);
                              break;
                            default:
                              [].forEach.call(G.container.querySelectorAll(ut), function (it) {
                                (it[Z] = it[Z] || []), it[Z].push(st);
                              });
                              break;
                          }
                        }),
                        [W, J]
                      );
                    },
                  },
                ]),
                K
              );
            })(f.default);
          S.DEFAULTS = { matchers: [], matchVisual: !0 };
          function L(z, K, $) {
            return (typeof K === 'undefined' ? 'undefined' : P(K)) === 'object'
              ? Object.keys(K).reduce(function (G, W) {
                  return L(G, W, K[W]);
                }, z)
              : z.reduce(function (G, W) {
                  return W.attributes && W.attributes[K]
                    ? G.push(W)
                    : G.insert(W.insert, (0, d.default)({}, A({}, K, $), W.attributes));
                }, new o.default());
          }
          function F(z) {
            if (z.nodeType !== Node.ELEMENT_NODE) return {};
            var K = '__ql-computed-style';
            return z[K] || (z[K] = window.getComputedStyle(z));
          }
          function D(z, K) {
            for (var $ = '', G = z.ops.length - 1; G >= 0 && $.length < K.length; --G) {
              var W = z.ops[G];
              if (typeof W.insert !== 'string') break;
              $ = W.insert + $;
            }
            return $.slice(-1 * K.length) === K;
          }
          function x(z) {
            if (z.childNodes.length === 0) return !1;
            var K = F(z);
            return ['block', 'list-item'].indexOf(K.display) > -1;
          }
          function I(z, K, $) {
            return z.nodeType === z.TEXT_NODE
              ? $.reduce(function (G, W) {
                  return W(z, G);
                }, new o.default())
              : z.nodeType === z.ELEMENT_NODE
              ? [].reduce.call(
                  z.childNodes || [],
                  function (G, W) {
                    var J = I(W, K, $);
                    return (
                      W.nodeType === z.ELEMENT_NODE &&
                        ((J = K.reduce(function (tt, et) {
                          return et(W, tt);
                        }, J)),
                        (J = (W[Z] || []).reduce(function (tt, et) {
                          return et(W, tt);
                        }, J))),
                      G.concat(J)
                    );
                  },
                  new o.default()
                )
              : new o.default();
          }
          function U(z, K, $) {
            return L($, z, !0);
          }
          function H(z, K) {
            var $ = e.default.Attributor.Attribute.keys(z),
              G = e.default.Attributor.Class.keys(z),
              W = e.default.Attributor.Style.keys(z),
              J = {};
            return (
              $.concat(G)
                .concat(W)
                .forEach(function (tt) {
                  var et = e.default.query(tt, e.default.Scope.ATTRIBUTE);
                  (et != null && ((J[et.attrName] = et.value(z)), J[et.attrName])) ||
                    ((et = R[tt]),
                    et != null &&
                      (et.attrName === tt || et.keyName === tt) &&
                      (J[et.attrName] = et.value(z) || void 0),
                    (et = E[tt]),
                    et != null &&
                      (et.attrName === tt || et.keyName === tt) &&
                      ((et = E[tt]), (J[et.attrName] = et.value(z) || void 0)));
                }),
              Object.keys(J).length > 0 && (K = L(K, J)),
              K
            );
          }
          function V(z, K) {
            var $ = e.default.query(z);
            if ($ == null) return K;
            if ($.prototype instanceof e.default.Embed) {
              var G = {},
                W = $.value(z);
              W != null && ((G[$.blotName] = W), (K = new o.default().insert(G, $.formats(z))));
            } else typeof $.formats === 'function' && (K = L(K, $.blotName, $.formats(z)));
            return K;
          }
          function Y(z, K) {
            return (
              D(
                K,
                `
`
              ) ||
                K.insert(`
`),
              K
            );
          }
          function X() {
            return new o.default();
          }
          function Q(z, K) {
            var $ = e.default.query(z);
            if (
              $ == null ||
              $.blotName !== 'list-item' ||
              !D(
                K,
                `
`
              )
            )
              return K;
            for (var G = -1, W = z.parentNode; !W.classList.contains('ql-clipboard'); )
              (e.default.query(W) || {}).blotName === 'list' && (G += 1), (W = W.parentNode);
            return G <= 0
              ? K
              : K.compose(new o.default().retain(K.length() - 1).retain(1, { indent: G }));
          }
          function nt(z, K) {
            return (
              D(
                K,
                `
`
              ) ||
                ((x(z) || (K.length() > 0 && z.nextSibling && x(z.nextSibling))) &&
                  K.insert(`
`)),
              K
            );
          }
          function rt(z, K) {
            if (
              x(z) &&
              z.nextElementSibling != null &&
              !D(
                K,
                `

`
              )
            ) {
              var $ = z.offsetHeight + parseFloat(F(z).marginTop) + parseFloat(F(z).marginBottom);
              z.nextElementSibling.offsetTop > z.offsetTop + $ * 1.5 &&
                K.insert(`
`);
            }
            return K;
          }
          function at(z, K) {
            var $ = {},
              G = z.style || {};
            return (
              G.fontStyle && F(z).fontStyle === 'italic' && ($.italic = !0),
              G.fontWeight &&
                (F(z).fontWeight.startsWith('bold') || parseInt(F(z).fontWeight) >= 700) &&
                ($.bold = !0),
              Object.keys($).length > 0 && (K = L(K, $)),
              parseFloat(G.textIndent || 0) > 0 && (K = new o.default().insert('	').concat(K)),
              K
            );
          }
          function lt(z, K) {
            var $ = z.data;
            if (z.parentNode.tagName === 'O:P') return K.insert($.trim());
            if ($.trim().length === 0 && z.parentNode.classList.contains('ql-clipboard')) return K;
            if (!F(z.parentNode).whiteSpace.startsWith('pre')) {
              var G = function (J, tt) {
                return (tt = tt.replace(/[^\u00a0]/g, '')), tt.length < 1 && J ? ' ' : tt;
              };
              ($ = $.replace(/\r\n/g, ' ').replace(/\n/g, ' ')),
                ($ = $.replace(/\s\s+/g, G.bind(G, !0))),
                ((z.previousSibling == null && x(z.parentNode)) ||
                  (z.previousSibling != null && x(z.previousSibling))) &&
                  ($ = $.replace(/^\s+/, G.bind(G, !1))),
                ((z.nextSibling == null && x(z.parentNode)) ||
                  (z.nextSibling != null && x(z.nextSibling))) &&
                  ($ = $.replace(/\s+$/, G.bind(G, !1)));
            }
            return K.insert($);
          }
          (g.default = S),
            (g.matchAttributor = H),
            (g.matchBlot = V),
            (g.matchNewline = nt),
            (g.matchSpacing = rt),
            (g.matchText = lt);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function u(l, a) {
                for (var i = 0; i < a.length; i++) {
                  var r = a[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(l, r.key, r);
                }
              }
              return function (l, a, i) {
                return a && u(l.prototype, a), i && u(l, i), l;
              };
            })(),
            w = function u(l, a, i) {
              l === null && (l = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(l, a);
              if (r === void 0) {
                var f = Object.getPrototypeOf(l);
                return f === null ? void 0 : u(f, a, i);
              }
              if ('value' in r) return r.value;
              var n = r.get;
              return n === void 0 ? void 0 : n.call(i);
            },
            O = p(6),
            v = d(O);
          function d(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function s(u, l) {
            if (!(u instanceof l)) throw new TypeError('Cannot call a class as a function');
          }
          function o(u, l) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l === 'object' || typeof l === 'function') ? l : u;
          }
          function t(u, l) {
            if (typeof l !== 'function' && l !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof l
              );
            (u.prototype = Object.create(l && l.prototype, {
              constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
            })),
              l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : (u.__proto__ = l));
          }
          var e = (function (u) {
            t(l, u);
            function l() {
              return (
                s(this, l),
                o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments))
              );
            }
            return (
              P(
                l,
                [
                  {
                    key: 'optimize',
                    value: function (i) {
                      w(
                        l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                        'optimize',
                        this
                      ).call(this, i),
                        this.domNode.tagName !== this.statics.tagName[0] &&
                          this.replaceWith(this.statics.blotName);
                    },
                  },
                ],
                [
                  {
                    key: 'create',
                    value: function () {
                      return w(l.__proto__ || Object.getPrototypeOf(l), 'create', this).call(this);
                    },
                  },
                  {
                    key: 'formats',
                    value: function () {
                      return !0;
                    },
                  },
                ]
              ),
              l
            );
          })(v.default);
          (e.blotName = 'bold'), (e.tagName = ['STRONG', 'B']), (g.default = e);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.addControls = g.default = void 0);
          var P = (function () {
              function h(y, A) {
                var T = [],
                  q = !0,
                  B = !1,
                  C = void 0;
                try {
                  for (
                    var Z = y[Symbol.iterator](), M;
                    !(q = (M = Z.next()).done) && (T.push(M.value), !(A && T.length === A));
                    q = !0
                  );
                } catch (R) {
                  (B = !0), (C = R);
                } finally {
                  try {
                    !q && Z.return && Z.return();
                  } finally {
                    if (B) throw C;
                  }
                }
                return T;
              }
              return function (y, A) {
                if (Array.isArray(y)) return y;
                if (Symbol.iterator in Object(y)) return h(y, A);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            w = (function () {
              function h(y, A) {
                for (var T = 0; T < A.length; T++) {
                  var q = A[T];
                  (q.enumerable = q.enumerable || !1),
                    (q.configurable = !0),
                    'value' in q && (q.writable = !0),
                    Object.defineProperty(y, q.key, q);
                }
              }
              return function (y, A, T) {
                return A && h(y.prototype, A), T && h(y, T), y;
              };
            })(),
            O = p(2),
            v = i(O),
            d = p(0),
            s = i(d),
            o = p(5),
            t = i(o),
            e = p(10),
            u = i(e),
            l = p(9),
            a = i(l);
          function i(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function r(h, y, A) {
            return (
              y in h
                ? Object.defineProperty(h, y, {
                    value: A,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (h[y] = A),
              h
            );
          }
          function f(h, y) {
            if (!(h instanceof y)) throw new TypeError('Cannot call a class as a function');
          }
          function n(h, y) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y && (typeof y === 'object' || typeof y === 'function') ? y : h;
          }
          function c(h, y) {
            if (typeof y !== 'function' && y !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof y
              );
            (h.prototype = Object.create(y && y.prototype, {
              constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 },
            })),
              y && (Object.setPrototypeOf ? Object.setPrototypeOf(h, y) : (h.__proto__ = y));
          }
          var k = (0, u.default)('quill:toolbar'),
            b = (function (h) {
              c(y, h);
              function y(A, T) {
                f(this, y);
                var q = n(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, A, T));
                if (Array.isArray(q.options.container)) {
                  var B = document.createElement('div');
                  N(B, q.options.container),
                    A.container.parentNode.insertBefore(B, A.container),
                    (q.container = B);
                } else
                  typeof q.options.container === 'string'
                    ? (q.container = document.querySelector(q.options.container))
                    : (q.container = q.options.container);
                if (!(q.container instanceof HTMLElement)) {
                  var C;
                  return (C = k.error('Container required for toolbar', q.options)), n(q, C);
                }
                return (
                  q.container.classList.add('ql-toolbar'),
                  (q.controls = []),
                  (q.handlers = {}),
                  Object.keys(q.options.handlers).forEach(function (Z) {
                    q.addHandler(Z, q.options.handlers[Z]);
                  }),
                  [].forEach.call(q.container.querySelectorAll('button, select'), function (Z) {
                    q.attach(Z);
                  }),
                  q.quill.on(t.default.events.EDITOR_CHANGE, function (Z, M) {
                    Z === t.default.events.SELECTION_CHANGE && q.update(M);
                  }),
                  q.quill.on(t.default.events.SCROLL_OPTIMIZE, function () {
                    var Z = q.quill.selection.getRange(),
                      M = P(Z, 1),
                      R = M[0];
                    q.update(R);
                  }),
                  q
                );
              }
              return (
                w(y, [
                  {
                    key: 'addHandler',
                    value: function (T, q) {
                      this.handlers[T] = q;
                    },
                  },
                  {
                    key: 'attach',
                    value: function (T) {
                      var q = this,
                        B = [].find.call(T.classList, function (Z) {
                          return Z.indexOf('ql-') === 0;
                        });
                      if (B) {
                        if (
                          ((B = B.slice(3)),
                          T.tagName === 'BUTTON' && T.setAttribute('type', 'button'),
                          this.handlers[B] == null)
                        ) {
                          if (
                            this.quill.scroll.whitelist != null &&
                            this.quill.scroll.whitelist[B] == null
                          ) {
                            k.warn('ignoring attaching to disabled format', B, T);
                            return;
                          }
                          if (s.default.query(B) == null) {
                            k.warn('ignoring attaching to nonexistent format', B, T);
                            return;
                          }
                        }
                        var C = T.tagName === 'SELECT' ? 'change' : 'click';
                        T.addEventListener(C, function (Z) {
                          var M = void 0;
                          if (T.tagName === 'SELECT') {
                            if (T.selectedIndex < 0) return;
                            var R = T.options[T.selectedIndex];
                            R.hasAttribute('selected') ? (M = !1) : (M = R.value || !1);
                          } else T.classList.contains('ql-active') ? (M = !1) : (M = T.value || !T.hasAttribute('value')), Z.preventDefault();
                          q.quill.focus();
                          var E = q.quill.selection.getRange(),
                            S = P(E, 1),
                            L = S[0];
                          if (q.handlers[B] != null) q.handlers[B].call(q, M);
                          else if (s.default.query(B).prototype instanceof s.default.Embed) {
                            if (((M = prompt('Enter ' + B)), !M)) return;
                            q.quill.updateContents(
                              new v.default().retain(L.index).delete(L.length).insert(r({}, B, M)),
                              t.default.sources.USER
                            );
                          } else q.quill.format(B, M, t.default.sources.USER);
                          q.update(L);
                        }),
                          this.controls.push([B, T]);
                      }
                    },
                  },
                  {
                    key: 'update',
                    value: function (T) {
                      var q = T == null ? {} : this.quill.getFormat(T);
                      this.controls.forEach(function (B) {
                        var C = P(B, 2),
                          Z = C[0],
                          M = C[1];
                        if (M.tagName === 'SELECT') {
                          var R = void 0;
                          if (T == null) R = null;
                          else if (q[Z] == null) R = M.querySelector('option[selected]');
                          else if (!Array.isArray(q[Z])) {
                            var E = q[Z];
                            typeof E === 'string' && (E = E.replace(/\"/g, '\\"')),
                              (R = M.querySelector('option[value="' + E + '"]'));
                          }
                          R == null ? ((M.value = ''), (M.selectedIndex = -1)) : (R.selected = !0);
                        } else if (T == null) M.classList.remove('ql-active');
                        else if (M.hasAttribute('value')) {
                          var S =
                            q[Z] === M.getAttribute('value') ||
                            (q[Z] != null && q[Z].toString() === M.getAttribute('value')) ||
                            (q[Z] == null && !M.getAttribute('value'));
                          M.classList.toggle('ql-active', S);
                        } else M.classList.toggle('ql-active', q[Z] != null);
                      });
                    },
                  },
                ]),
                y
              );
            })(a.default);
          b.DEFAULTS = {};
          function _(h, y, A) {
            var T = document.createElement('button');
            T.setAttribute('type', 'button'),
              T.classList.add('ql-' + y),
              A != null && (T.value = A),
              h.appendChild(T);
          }
          function N(h, y) {
            Array.isArray(y[0]) || (y = [y]),
              y.forEach(function (A) {
                var T = document.createElement('span');
                T.classList.add('ql-formats'),
                  A.forEach(function (q) {
                    if (typeof q === 'string') _(T, q);
                    else {
                      var B = Object.keys(q)[0],
                        C = q[B];
                      Array.isArray(C) ? m(T, B, C) : _(T, B, C);
                    }
                  }),
                  h.appendChild(T);
              });
          }
          function m(h, y, A) {
            var T = document.createElement('select');
            T.classList.add('ql-' + y),
              A.forEach(function (q) {
                var B = document.createElement('option');
                q !== !1 ? B.setAttribute('value', q) : B.setAttribute('selected', 'selected'),
                  T.appendChild(B);
              }),
              h.appendChild(T);
          }
          (b.DEFAULTS = {
            container: null,
            handlers: {
              clean: function () {
                var y = this,
                  A = this.quill.getSelection();
                if (A != null)
                  if (A.length == 0) {
                    var T = this.quill.getFormat();
                    Object.keys(T).forEach(function (q) {
                      s.default.query(q, s.default.Scope.INLINE) != null && y.quill.format(q, !1);
                    });
                  } else this.quill.removeFormat(A, t.default.sources.USER);
              },
              direction: function (y) {
                var A = this.quill.getFormat().align;
                y === 'rtl' && A == null
                  ? this.quill.format('align', 'right', t.default.sources.USER)
                  : !y && A === 'right' && this.quill.format('align', !1, t.default.sources.USER),
                  this.quill.format('direction', y, t.default.sources.USER);
              },
              indent: function (y) {
                var A = this.quill.getSelection(),
                  T = this.quill.getFormat(A),
                  q = parseInt(T.indent || 0);
                if (y === '+1' || y === '-1') {
                  var B = y === '+1' ? 1 : -1;
                  T.direction === 'rtl' && (B *= -1),
                    this.quill.format('indent', q + B, t.default.sources.USER);
                }
              },
              link: function (y) {
                y === !0 && (y = prompt('Enter link URL:')),
                  this.quill.format('link', y, t.default.sources.USER);
              },
              list: function (y) {
                var A = this.quill.getSelection(),
                  T = this.quill.getFormat(A);
                y === 'check'
                  ? T.list === 'checked' || T.list === 'unchecked'
                    ? this.quill.format('list', !1, t.default.sources.USER)
                    : this.quill.format('list', 'unchecked', t.default.sources.USER)
                  : this.quill.format('list', y, t.default.sources.USER);
              },
            },
          }),
            (g.default = b),
            (g.addControls = N);
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function u(l, a) {
                for (var i = 0; i < a.length; i++) {
                  var r = a[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(l, r.key, r);
                }
              }
              return function (l, a, i) {
                return a && u(l.prototype, a), i && u(l, i), l;
              };
            })(),
            w = function u(l, a, i) {
              l === null && (l = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(l, a);
              if (r === void 0) {
                var f = Object.getPrototypeOf(l);
                return f === null ? void 0 : u(f, a, i);
              }
              if ('value' in r) return r.value;
              var n = r.get;
              return n === void 0 ? void 0 : n.call(i);
            },
            O = p(28),
            v = d(O);
          function d(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function s(u, l) {
            if (!(u instanceof l)) throw new TypeError('Cannot call a class as a function');
          }
          function o(u, l) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l === 'object' || typeof l === 'function') ? l : u;
          }
          function t(u, l) {
            if (typeof l !== 'function' && l !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof l
              );
            (u.prototype = Object.create(l && l.prototype, {
              constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
            })),
              l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : (u.__proto__ = l));
          }
          var e = (function (u) {
            t(l, u);
            function l(a, i) {
              s(this, l);
              var r = o(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, a));
              return (
                (r.label.innerHTML = i),
                r.container.classList.add('ql-color-picker'),
                [].slice
                  .call(r.container.querySelectorAll('.ql-picker-item'), 0, 7)
                  .forEach(function (f) {
                    f.classList.add('ql-primary');
                  }),
                r
              );
            }
            return (
              P(l, [
                {
                  key: 'buildItem',
                  value: function (i) {
                    var r = w(
                      l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                      'buildItem',
                      this
                    ).call(this, i);
                    return (r.style.backgroundColor = i.getAttribute('value') || ''), r;
                  },
                },
                {
                  key: 'selectItem',
                  value: function (i, r) {
                    w(
                      l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                      'selectItem',
                      this
                    ).call(this, i, r);
                    var f = this.label.querySelector('.ql-color-label'),
                      n = (i && i.getAttribute('data-value')) || '';
                    f && (f.tagName === 'line' ? (f.style.stroke = n) : (f.style.fill = n));
                  },
                },
              ]),
              l
            );
          })(v.default);
          g.default = e;
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function u(l, a) {
                for (var i = 0; i < a.length; i++) {
                  var r = a[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(l, r.key, r);
                }
              }
              return function (l, a, i) {
                return a && u(l.prototype, a), i && u(l, i), l;
              };
            })(),
            w = function u(l, a, i) {
              l === null && (l = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(l, a);
              if (r === void 0) {
                var f = Object.getPrototypeOf(l);
                return f === null ? void 0 : u(f, a, i);
              }
              if ('value' in r) return r.value;
              var n = r.get;
              return n === void 0 ? void 0 : n.call(i);
            },
            O = p(28),
            v = d(O);
          function d(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function s(u, l) {
            if (!(u instanceof l)) throw new TypeError('Cannot call a class as a function');
          }
          function o(u, l) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l === 'object' || typeof l === 'function') ? l : u;
          }
          function t(u, l) {
            if (typeof l !== 'function' && l !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof l
              );
            (u.prototype = Object.create(l && l.prototype, {
              constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
            })),
              l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : (u.__proto__ = l));
          }
          var e = (function (u) {
            t(l, u);
            function l(a, i) {
              s(this, l);
              var r = o(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, a));
              return (
                r.container.classList.add('ql-icon-picker'),
                [].forEach.call(r.container.querySelectorAll('.ql-picker-item'), function (f) {
                  f.innerHTML = i[f.getAttribute('data-value') || ''];
                }),
                (r.defaultItem = r.container.querySelector('.ql-selected')),
                r.selectItem(r.defaultItem),
                r
              );
            }
            return (
              P(l, [
                {
                  key: 'selectItem',
                  value: function (i, r) {
                    w(
                      l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                      'selectItem',
                      this
                    ).call(this, i, r),
                      (i = i || this.defaultItem),
                      (this.label.innerHTML = i.innerHTML);
                  },
                },
              ]),
              l
            );
          })(v.default);
          g.default = e;
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
            function v(d, s) {
              for (var o = 0; o < s.length; o++) {
                var t = s[o];
                (t.enumerable = t.enumerable || !1),
                  (t.configurable = !0),
                  'value' in t && (t.writable = !0),
                  Object.defineProperty(d, t.key, t);
              }
            }
            return function (d, s, o) {
              return s && v(d.prototype, s), o && v(d, o), d;
            };
          })();
          function w(v, d) {
            if (!(v instanceof d)) throw new TypeError('Cannot call a class as a function');
          }
          var O = (function () {
            function v(d, s) {
              var o = this;
              w(this, v),
                (this.quill = d),
                (this.boundsContainer = s || document.body),
                (this.root = d.addContainer('ql-tooltip')),
                (this.root.innerHTML = this.constructor.TEMPLATE),
                this.quill.root === this.quill.scrollingContainer &&
                  this.quill.root.addEventListener('scroll', function () {
                    o.root.style.marginTop = -1 * o.quill.root.scrollTop + 'px';
                  }),
                this.hide();
            }
            return (
              P(v, [
                {
                  key: 'hide',
                  value: function () {
                    this.root.classList.add('ql-hidden');
                  },
                },
                {
                  key: 'position',
                  value: function (s) {
                    var o = s.left + s.width / 2 - this.root.offsetWidth / 2,
                      t = s.bottom + this.quill.root.scrollTop;
                    (this.root.style.left = o + 'px'),
                      (this.root.style.top = t + 'px'),
                      this.root.classList.remove('ql-flip');
                    var e = this.boundsContainer.getBoundingClientRect(),
                      u = this.root.getBoundingClientRect(),
                      l = 0;
                    if (
                      (u.right > e.right &&
                        ((l = e.right - u.right), (this.root.style.left = o + l + 'px')),
                      u.left < e.left &&
                        ((l = e.left - u.left), (this.root.style.left = o + l + 'px')),
                      u.bottom > e.bottom)
                    ) {
                      var a = u.bottom - u.top,
                        i = s.bottom - s.top + a;
                      (this.root.style.top = t - i + 'px'), this.root.classList.add('ql-flip');
                    }
                    return l;
                  },
                },
                {
                  key: 'show',
                  value: function () {
                    this.root.classList.remove('ql-editing'),
                      this.root.classList.remove('ql-hidden');
                  },
                },
              ]),
              v
            );
          })();
          g.default = O;
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function m(h, y) {
                var A = [],
                  T = !0,
                  q = !1,
                  B = void 0;
                try {
                  for (
                    var C = h[Symbol.iterator](), Z;
                    !(T = (Z = C.next()).done) && (A.push(Z.value), !(y && A.length === y));
                    T = !0
                  );
                } catch (M) {
                  (q = !0), (B = M);
                } finally {
                  try {
                    !T && C.return && C.return();
                  } finally {
                    if (q) throw B;
                  }
                }
                return A;
              }
              return function (h, y) {
                if (Array.isArray(h)) return h;
                if (Symbol.iterator in Object(h)) return m(h, y);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            w = function m(h, y, A) {
              h === null && (h = Function.prototype);
              var T = Object.getOwnPropertyDescriptor(h, y);
              if (T === void 0) {
                var q = Object.getPrototypeOf(h);
                return q === null ? void 0 : m(q, y, A);
              }
              if ('value' in T) return T.value;
              var B = T.get;
              return B === void 0 ? void 0 : B.call(A);
            },
            O = (function () {
              function m(h, y) {
                for (var A = 0; A < y.length; A++) {
                  var T = y[A];
                  (T.enumerable = T.enumerable || !1),
                    (T.configurable = !0),
                    'value' in T && (T.writable = !0),
                    Object.defineProperty(h, T.key, T);
                }
              }
              return function (h, y, A) {
                return y && m(h.prototype, y), A && m(h, A), h;
              };
            })(),
            v = p(3),
            d = f(v),
            s = p(8),
            o = f(s),
            t = p(43),
            e = f(t),
            u = p(27),
            l = f(u),
            a = p(15),
            i = p(41),
            r = f(i);
          function f(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function n(m, h) {
            if (!(m instanceof h)) throw new TypeError('Cannot call a class as a function');
          }
          function c(m, h) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h && (typeof h === 'object' || typeof h === 'function') ? h : m;
          }
          function k(m, h) {
            if (typeof h !== 'function' && h !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof h
              );
            (m.prototype = Object.create(h && h.prototype, {
              constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 },
            })),
              h && (Object.setPrototypeOf ? Object.setPrototypeOf(m, h) : (m.__proto__ = h));
          }
          var b = [
              [{ header: ['1', '2', '3', !1] }],
              ['bold', 'italic', 'underline', 'link'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['clean'],
            ],
            _ = (function (m) {
              k(h, m);
              function h(y, A) {
                n(this, h),
                  A.modules.toolbar != null &&
                    A.modules.toolbar.container == null &&
                    (A.modules.toolbar.container = b);
                var T = c(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, y, A));
                return T.quill.container.classList.add('ql-snow'), T;
              }
              return (
                O(h, [
                  {
                    key: 'extendToolbar',
                    value: function (A) {
                      A.container.classList.add('ql-snow'),
                        this.buildButtons(
                          [].slice.call(A.container.querySelectorAll('button')),
                          r.default
                        ),
                        this.buildPickers(
                          [].slice.call(A.container.querySelectorAll('select')),
                          r.default
                        ),
                        (this.tooltip = new N(this.quill, this.options.bounds)),
                        A.container.querySelector('.ql-link') &&
                          this.quill.keyboard.addBinding(
                            { key: 'K', shortKey: !0 },
                            function (T, q) {
                              A.handlers.link.call(A, !q.format.link);
                            }
                          );
                    },
                  },
                ]),
                h
              );
            })(e.default);
          _.DEFAULTS = (0, d.default)(!0, {}, e.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function (h) {
                    if (h) {
                      var y = this.quill.getSelection();
                      if (y == null || y.length == 0) return;
                      var A = this.quill.getText(y);
                      /^\S+@\S+\.\S+$/.test(A) && A.indexOf('mailto:') !== 0 && (A = 'mailto:' + A);
                      var T = this.quill.theme.tooltip;
                      T.edit('link', A);
                    } else this.quill.format('link', !1);
                  },
                },
              },
            },
          });
          var N = (function (m) {
            k(h, m);
            function h(y, A) {
              n(this, h);
              var T = c(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, y, A));
              return (T.preview = T.root.querySelector('a.ql-preview')), T;
            }
            return (
              O(h, [
                {
                  key: 'listen',
                  value: function () {
                    var A = this;
                    w(
                      h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                      'listen',
                      this
                    ).call(this),
                      this.root
                        .querySelector('a.ql-action')
                        .addEventListener('click', function (T) {
                          A.root.classList.contains('ql-editing')
                            ? A.save()
                            : A.edit('link', A.preview.textContent),
                            T.preventDefault();
                        }),
                      this.root
                        .querySelector('a.ql-remove')
                        .addEventListener('click', function (T) {
                          if (A.linkRange != null) {
                            var q = A.linkRange;
                            A.restoreFocus(),
                              A.quill.formatText(q, 'link', !1, o.default.sources.USER),
                              delete A.linkRange;
                          }
                          T.preventDefault(), A.hide();
                        }),
                      this.quill.on(o.default.events.SELECTION_CHANGE, function (T, q, B) {
                        if (T != null) {
                          if (T.length === 0 && B === o.default.sources.USER) {
                            var C = A.quill.scroll.descendant(l.default, T.index),
                              Z = P(C, 2),
                              M = Z[0],
                              R = Z[1];
                            if (M != null) {
                              A.linkRange = new a.Range(T.index - R, M.length());
                              var E = l.default.formats(M.domNode);
                              (A.preview.textContent = E),
                                A.preview.setAttribute('href', E),
                                A.show(),
                                A.position(A.quill.getBounds(A.linkRange));
                              return;
                            }
                          } else delete A.linkRange;
                          A.hide();
                        }
                      });
                  },
                },
                {
                  key: 'show',
                  value: function () {
                    w(
                      h.prototype.__proto__ || Object.getPrototypeOf(h.prototype),
                      'show',
                      this
                    ).call(this),
                      this.root.removeAttribute('data-mode');
                  },
                },
              ]),
              h
            );
          })(t.BaseTooltip);
          (N.TEMPLATE = [
            '<a class="ql-preview" target="_blank" href="about:blank"></a>',
            '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
            '<a class="ql-action"></a>',
            '<a class="ql-remove"></a>',
          ].join('')),
            (g.default = _);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(29),
            w = W(P),
            O = p(36),
            v = p(38),
            d = p(64),
            s = p(65),
            o = W(s),
            t = p(66),
            e = W(t),
            u = p(67),
            l = W(u),
            a = p(37),
            i = p(26),
            r = p(39),
            f = p(40),
            n = p(56),
            c = W(n),
            k = p(68),
            b = W(k),
            _ = p(27),
            N = W(_),
            m = p(69),
            h = W(m),
            y = p(70),
            A = W(y),
            T = p(71),
            q = W(T),
            B = p(72),
            C = W(B),
            Z = p(73),
            M = W(Z),
            R = p(13),
            E = W(R),
            S = p(74),
            L = W(S),
            F = p(75),
            D = W(F),
            x = p(57),
            I = W(x),
            U = p(41),
            H = W(U),
            V = p(28),
            Y = W(V),
            X = p(59),
            Q = W(X),
            nt = p(60),
            rt = W(nt),
            at = p(61),
            lt = W(at),
            z = p(108),
            K = W(z),
            $ = p(62),
            G = W($);
          function W(J) {
            return J && J.__esModule ? J : { default: J };
          }
          w.default.register(
            {
              'attributors/attribute/direction': v.DirectionAttribute,
              'attributors/class/align': O.AlignClass,
              'attributors/class/background': a.BackgroundClass,
              'attributors/class/color': i.ColorClass,
              'attributors/class/direction': v.DirectionClass,
              'attributors/class/font': r.FontClass,
              'attributors/class/size': f.SizeClass,
              'attributors/style/align': O.AlignStyle,
              'attributors/style/background': a.BackgroundStyle,
              'attributors/style/color': i.ColorStyle,
              'attributors/style/direction': v.DirectionStyle,
              'attributors/style/font': r.FontStyle,
              'attributors/style/size': f.SizeStyle,
            },
            !0
          ),
            w.default.register(
              {
                'formats/align': O.AlignClass,
                'formats/direction': v.DirectionClass,
                'formats/indent': d.IndentClass,
                'formats/background': a.BackgroundStyle,
                'formats/color': i.ColorStyle,
                'formats/font': r.FontClass,
                'formats/size': f.SizeClass,
                'formats/blockquote': o.default,
                'formats/code-block': E.default,
                'formats/header': e.default,
                'formats/list': l.default,
                'formats/bold': c.default,
                'formats/code': R.Code,
                'formats/italic': b.default,
                'formats/link': N.default,
                'formats/script': h.default,
                'formats/strike': A.default,
                'formats/underline': q.default,
                'formats/image': C.default,
                'formats/video': M.default,
                'formats/list/item': u.ListItem,
                'modules/formula': L.default,
                'modules/syntax': D.default,
                'modules/toolbar': I.default,
                'themes/bubble': K.default,
                'themes/snow': G.default,
                'ui/icons': H.default,
                'ui/picker': Y.default,
                'ui/icon-picker': rt.default,
                'ui/color-picker': Q.default,
                'ui/tooltip': lt.default,
              },
              !0
            ),
            (g.default = w.default);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }), (g.IndentClass = void 0);
          var P = (function () {
              function l(a, i) {
                for (var r = 0; r < i.length; r++) {
                  var f = i[r];
                  (f.enumerable = f.enumerable || !1),
                    (f.configurable = !0),
                    'value' in f && (f.writable = !0),
                    Object.defineProperty(a, f.key, f);
                }
              }
              return function (a, i, r) {
                return i && l(a.prototype, i), r && l(a, r), a;
              };
            })(),
            w = function l(a, i, r) {
              a === null && (a = Function.prototype);
              var f = Object.getOwnPropertyDescriptor(a, i);
              if (f === void 0) {
                var n = Object.getPrototypeOf(a);
                return n === null ? void 0 : l(n, i, r);
              }
              if ('value' in f) return f.value;
              var c = f.get;
              return c === void 0 ? void 0 : c.call(r);
            },
            O = p(0),
            v = d(O);
          function d(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function s(l, a) {
            if (!(l instanceof a)) throw new TypeError('Cannot call a class as a function');
          }
          function o(l, a) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a === 'object' || typeof a === 'function') ? a : l;
          }
          function t(l, a) {
            if (typeof a !== 'function' && a !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof a
              );
            (l.prototype = Object.create(a && a.prototype, {
              constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 },
            })),
              a && (Object.setPrototypeOf ? Object.setPrototypeOf(l, a) : (l.__proto__ = a));
          }
          var e = (function (l) {
              t(a, l);
              function a() {
                return (
                  s(this, a),
                  o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
                );
              }
              return (
                P(a, [
                  {
                    key: 'add',
                    value: function (r, f) {
                      if (f === '+1' || f === '-1') {
                        var n = this.value(r) || 0;
                        f = f === '+1' ? n + 1 : n - 1;
                      }
                      return f === 0
                        ? (this.remove(r), !0)
                        : w(
                            a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                            'add',
                            this
                          ).call(this, r, f);
                    },
                  },
                  {
                    key: 'canAdd',
                    value: function (r, f) {
                      return (
                        w(
                          a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                          'canAdd',
                          this
                        ).call(this, r, f) ||
                        w(
                          a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                          'canAdd',
                          this
                        ).call(this, r, parseInt(f))
                      );
                    },
                  },
                  {
                    key: 'value',
                    value: function (r) {
                      return (
                        parseInt(
                          w(
                            a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                            'value',
                            this
                          ).call(this, r)
                        ) || void 0
                      );
                    },
                  },
                ]),
                a
              );
            })(v.default.Attributor.Class),
            u = new e('indent', 'ql-indent', {
              scope: v.default.Scope.BLOCK,
              whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
            });
          g.IndentClass = u;
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(4),
            w = O(P);
          function O(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          function d(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e === 'object' || typeof e === 'function') ? e : t;
          }
          function s(t, e) {
            if (typeof e !== 'function' && e !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
              e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
          }
          var o = (function (t) {
            s(e, t);
            function e() {
              return (
                v(this, e),
                d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
              );
            }
            return e;
          })(w.default);
          (o.blotName = 'blockquote'), (o.tagName = 'blockquote'), (g.default = o);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function e(u, l) {
                for (var a = 0; a < l.length; a++) {
                  var i = l[a];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    'value' in i && (i.writable = !0),
                    Object.defineProperty(u, i.key, i);
                }
              }
              return function (u, l, a) {
                return l && e(u.prototype, l), a && e(u, a), u;
              };
            })(),
            w = p(4),
            O = v(w);
          function v(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function d(e, u) {
            if (!(e instanceof u)) throw new TypeError('Cannot call a class as a function');
          }
          function s(e, u) {
            if (!e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u === 'object' || typeof u === 'function') ? u : e;
          }
          function o(e, u) {
            if (typeof u !== 'function' && u !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof u
              );
            (e.prototype = Object.create(u && u.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              u && (Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u));
          }
          var t = (function (e) {
            o(u, e);
            function u() {
              return (
                d(this, u),
                s(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments))
              );
            }
            return (
              P(u, null, [
                {
                  key: 'formats',
                  value: function (a) {
                    return this.tagName.indexOf(a.tagName) + 1;
                  },
                },
              ]),
              u
            );
          })(O.default);
          (t.blotName = 'header'),
            (t.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']),
            (g.default = t);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = g.ListItem = void 0);
          var P = (function () {
              function n(c, k) {
                for (var b = 0; b < k.length; b++) {
                  var _ = k[b];
                  (_.enumerable = _.enumerable || !1),
                    (_.configurable = !0),
                    'value' in _ && (_.writable = !0),
                    Object.defineProperty(c, _.key, _);
                }
              }
              return function (c, k, b) {
                return k && n(c.prototype, k), b && n(c, b), c;
              };
            })(),
            w = function n(c, k, b) {
              c === null && (c = Function.prototype);
              var _ = Object.getOwnPropertyDescriptor(c, k);
              if (_ === void 0) {
                var N = Object.getPrototypeOf(c);
                return N === null ? void 0 : n(N, k, b);
              }
              if ('value' in _) return _.value;
              var m = _.get;
              return m === void 0 ? void 0 : m.call(b);
            },
            O = p(0),
            v = e(O),
            d = p(4),
            s = e(d),
            o = p(25),
            t = e(o);
          function e(n) {
            return n && n.__esModule ? n : { default: n };
          }
          function u(n, c, k) {
            return (
              c in n
                ? Object.defineProperty(n, c, {
                    value: k,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[c] = k),
              n
            );
          }
          function l(n, c) {
            if (!(n instanceof c)) throw new TypeError('Cannot call a class as a function');
          }
          function a(n, c) {
            if (!n)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return c && (typeof c === 'object' || typeof c === 'function') ? c : n;
          }
          function i(n, c) {
            if (typeof c !== 'function' && c !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof c
              );
            (n.prototype = Object.create(c && c.prototype, {
              constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
            })),
              c && (Object.setPrototypeOf ? Object.setPrototypeOf(n, c) : (n.__proto__ = c));
          }
          var r = (function (n) {
            i(c, n);
            function c() {
              return (
                l(this, c),
                a(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments))
              );
            }
            return (
              P(
                c,
                [
                  {
                    key: 'format',
                    value: function (b, _) {
                      b === f.blotName && !_
                        ? this.replaceWith(v.default.create(this.statics.scope))
                        : w(
                            c.prototype.__proto__ || Object.getPrototypeOf(c.prototype),
                            'format',
                            this
                          ).call(this, b, _);
                    },
                  },
                  {
                    key: 'remove',
                    value: function () {
                      this.prev == null && this.next == null
                        ? this.parent.remove()
                        : w(
                            c.prototype.__proto__ || Object.getPrototypeOf(c.prototype),
                            'remove',
                            this
                          ).call(this);
                    },
                  },
                  {
                    key: 'replaceWith',
                    value: function (b, _) {
                      return (
                        this.parent.isolate(this.offset(this.parent), this.length()),
                        b === this.parent.statics.blotName
                          ? (this.parent.replaceWith(b, _), this)
                          : (this.parent.unwrap(),
                            w(
                              c.prototype.__proto__ || Object.getPrototypeOf(c.prototype),
                              'replaceWith',
                              this
                            ).call(this, b, _))
                      );
                    },
                  },
                ],
                [
                  {
                    key: 'formats',
                    value: function (b) {
                      return b.tagName === this.tagName
                        ? void 0
                        : w(c.__proto__ || Object.getPrototypeOf(c), 'formats', this).call(this, b);
                    },
                  },
                ]
              ),
              c
            );
          })(s.default);
          (r.blotName = 'list-item'), (r.tagName = 'LI');
          var f = (function (n) {
            i(c, n),
              P(c, null, [
                {
                  key: 'create',
                  value: function (b) {
                    var _ = b === 'ordered' ? 'OL' : 'UL',
                      N = w(c.__proto__ || Object.getPrototypeOf(c), 'create', this).call(this, _);
                    return (
                      (b === 'checked' || b === 'unchecked') &&
                        N.setAttribute('data-checked', b === 'checked'),
                      N
                    );
                  },
                },
                {
                  key: 'formats',
                  value: function (b) {
                    if (b.tagName === 'OL') return 'ordered';
                    if (b.tagName === 'UL')
                      return b.hasAttribute('data-checked')
                        ? b.getAttribute('data-checked') === 'true'
                          ? 'checked'
                          : 'unchecked'
                        : 'bullet';
                  },
                },
              ]);
            function c(k) {
              l(this, c);
              var b = a(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, k)),
                _ = function (m) {
                  if (m.target.parentNode === k) {
                    var h = b.statics.formats(k),
                      y = v.default.find(m.target);
                    h === 'checked'
                      ? y.format('list', 'unchecked')
                      : h === 'unchecked' && y.format('list', 'checked');
                  }
                };
              return k.addEventListener('touchstart', _), k.addEventListener('mousedown', _), b;
            }
            return (
              P(c, [
                {
                  key: 'format',
                  value: function (b, _) {
                    this.children.length > 0 && this.children.tail.format(b, _);
                  },
                },
                {
                  key: 'formats',
                  value: function () {
                    return u({}, this.statics.blotName, this.statics.formats(this.domNode));
                  },
                },
                {
                  key: 'insertBefore',
                  value: function (b, _) {
                    if (b instanceof r)
                      w(
                        c.prototype.__proto__ || Object.getPrototypeOf(c.prototype),
                        'insertBefore',
                        this
                      ).call(this, b, _);
                    else {
                      var N = _ == null ? this.length() : _.offset(this),
                        m = this.split(N);
                      m.parent.insertBefore(b, m);
                    }
                  },
                },
                {
                  key: 'optimize',
                  value: function (b) {
                    w(
                      c.prototype.__proto__ || Object.getPrototypeOf(c.prototype),
                      'optimize',
                      this
                    ).call(this, b);
                    var _ = this.next;
                    _ != null &&
                      _.prev === this &&
                      _.statics.blotName === this.statics.blotName &&
                      _.domNode.tagName === this.domNode.tagName &&
                      _.domNode.getAttribute('data-checked') ===
                        this.domNode.getAttribute('data-checked') &&
                      (_.moveChildren(this), _.remove());
                  },
                },
                {
                  key: 'replace',
                  value: function (b) {
                    if (b.statics.blotName !== this.statics.blotName) {
                      var _ = v.default.create(this.statics.defaultChild);
                      b.moveChildren(_), this.appendChild(_);
                    }
                    w(
                      c.prototype.__proto__ || Object.getPrototypeOf(c.prototype),
                      'replace',
                      this
                    ).call(this, b);
                  },
                },
              ]),
              c
            );
          })(t.default);
          (f.blotName = 'list'),
            (f.scope = v.default.Scope.BLOCK_BLOT),
            (f.tagName = ['OL', 'UL']),
            (f.defaultChild = 'list-item'),
            (f.allowedChildren = [r]),
            (g.ListItem = r),
            (g.default = f);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(56),
            w = O(P);
          function O(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          function d(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e === 'object' || typeof e === 'function') ? e : t;
          }
          function s(t, e) {
            if (typeof e !== 'function' && e !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
              e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
          }
          var o = (function (t) {
            s(e, t);
            function e() {
              return (
                v(this, e),
                d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
              );
            }
            return e;
          })(w.default);
          (o.blotName = 'italic'), (o.tagName = ['EM', 'I']), (g.default = o);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function u(l, a) {
                for (var i = 0; i < a.length; i++) {
                  var r = a[i];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(l, r.key, r);
                }
              }
              return function (l, a, i) {
                return a && u(l.prototype, a), i && u(l, i), l;
              };
            })(),
            w = function u(l, a, i) {
              l === null && (l = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(l, a);
              if (r === void 0) {
                var f = Object.getPrototypeOf(l);
                return f === null ? void 0 : u(f, a, i);
              }
              if ('value' in r) return r.value;
              var n = r.get;
              return n === void 0 ? void 0 : n.call(i);
            },
            O = p(6),
            v = d(O);
          function d(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function s(u, l) {
            if (!(u instanceof l)) throw new TypeError('Cannot call a class as a function');
          }
          function o(u, l) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l === 'object' || typeof l === 'function') ? l : u;
          }
          function t(u, l) {
            if (typeof l !== 'function' && l !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof l
              );
            (u.prototype = Object.create(l && l.prototype, {
              constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
            })),
              l && (Object.setPrototypeOf ? Object.setPrototypeOf(u, l) : (u.__proto__ = l));
          }
          var e = (function (u) {
            t(l, u);
            function l() {
              return (
                s(this, l),
                o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments))
              );
            }
            return (
              P(l, null, [
                {
                  key: 'create',
                  value: function (i) {
                    return i === 'super'
                      ? document.createElement('sup')
                      : i === 'sub'
                      ? document.createElement('sub')
                      : w(l.__proto__ || Object.getPrototypeOf(l), 'create', this).call(this, i);
                  },
                },
                {
                  key: 'formats',
                  value: function (i) {
                    if (i.tagName === 'SUB') return 'sub';
                    if (i.tagName === 'SUP') return 'super';
                  },
                },
              ]),
              l
            );
          })(v.default);
          (e.blotName = 'script'), (e.tagName = ['SUB', 'SUP']), (g.default = e);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(6),
            w = O(P);
          function O(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          function d(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e === 'object' || typeof e === 'function') ? e : t;
          }
          function s(t, e) {
            if (typeof e !== 'function' && e !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
              e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
          }
          var o = (function (t) {
            s(e, t);
            function e() {
              return (
                v(this, e),
                d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
              );
            }
            return e;
          })(w.default);
          (o.blotName = 'strike'), (o.tagName = 'S'), (g.default = o);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = p(6),
            w = O(P);
          function O(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }
          function d(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e === 'object' || typeof e === 'function') ? e : t;
          }
          function s(t, e) {
            if (typeof e !== 'function' && e !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
              e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
          }
          var o = (function (t) {
            s(e, t);
            function e() {
              return (
                v(this, e),
                d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
              );
            }
            return e;
          })(w.default);
          (o.blotName = 'underline'), (o.tagName = 'U'), (g.default = o);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function a(i, r) {
                for (var f = 0; f < r.length; f++) {
                  var n = r[f];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(i, n.key, n);
                }
              }
              return function (i, r, f) {
                return r && a(i.prototype, r), f && a(i, f), i;
              };
            })(),
            w = function a(i, r, f) {
              i === null && (i = Function.prototype);
              var n = Object.getOwnPropertyDescriptor(i, r);
              if (n === void 0) {
                var c = Object.getPrototypeOf(i);
                return c === null ? void 0 : a(c, r, f);
              }
              if ('value' in n) return n.value;
              var k = n.get;
              return k === void 0 ? void 0 : k.call(f);
            },
            O = p(0),
            v = s(O),
            d = p(27);
          function s(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function o(a, i) {
            if (!(a instanceof i)) throw new TypeError('Cannot call a class as a function');
          }
          function t(a, i) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i === 'object' || typeof i === 'function') ? i : a;
          }
          function e(a, i) {
            if (typeof i !== 'function' && i !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof i
              );
            (a.prototype = Object.create(i && i.prototype, {
              constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
            })),
              i && (Object.setPrototypeOf ? Object.setPrototypeOf(a, i) : (a.__proto__ = i));
          }
          var u = ['alt', 'height', 'width'],
            l = (function (a) {
              e(i, a);
              function i() {
                return (
                  o(this, i),
                  t(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
                );
              }
              return (
                P(
                  i,
                  [
                    {
                      key: 'format',
                      value: function (f, n) {
                        u.indexOf(f) > -1
                          ? n
                            ? this.domNode.setAttribute(f, n)
                            : this.domNode.removeAttribute(f)
                          : w(
                              i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                              'format',
                              this
                            ).call(this, f, n);
                      },
                    },
                  ],
                  [
                    {
                      key: 'create',
                      value: function (f) {
                        var n = w(i.__proto__ || Object.getPrototypeOf(i), 'create', this).call(
                          this,
                          f
                        );
                        return typeof f === 'string' && n.setAttribute('src', this.sanitize(f)), n;
                      },
                    },
                    {
                      key: 'formats',
                      value: function (f) {
                        return u.reduce(function (n, c) {
                          return f.hasAttribute(c) && (n[c] = f.getAttribute(c)), n;
                        }, {});
                      },
                    },
                    {
                      key: 'match',
                      value: function (f) {
                        return /\.(jpe?g|gif|png)$/.test(f) || /^data:image\/.+;base64/.test(f);
                      },
                    },
                    {
                      key: 'sanitize',
                      value: function (f) {
                        return (0, d.sanitize)(f, ['http', 'https', 'data']) ? f : '//:0';
                      },
                    },
                    {
                      key: 'value',
                      value: function (f) {
                        return f.getAttribute('src');
                      },
                    },
                  ]
                ),
                i
              );
            })(v.default.Embed);
          (l.blotName = 'image'), (l.tagName = 'IMG'), (g.default = l);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 });
          var P = (function () {
              function a(i, r) {
                for (var f = 0; f < r.length; f++) {
                  var n = r[f];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(i, n.key, n);
                }
              }
              return function (i, r, f) {
                return r && a(i.prototype, r), f && a(i, f), i;
              };
            })(),
            w = function a(i, r, f) {
              i === null && (i = Function.prototype);
              var n = Object.getOwnPropertyDescriptor(i, r);
              if (n === void 0) {
                var c = Object.getPrototypeOf(i);
                return c === null ? void 0 : a(c, r, f);
              }
              if ('value' in n) return n.value;
              var k = n.get;
              return k === void 0 ? void 0 : k.call(f);
            },
            O = p(4),
            v = p(27),
            d = s(v);
          function s(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function o(a, i) {
            if (!(a instanceof i)) throw new TypeError('Cannot call a class as a function');
          }
          function t(a, i) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i === 'object' || typeof i === 'function') ? i : a;
          }
          function e(a, i) {
            if (typeof i !== 'function' && i !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof i
              );
            (a.prototype = Object.create(i && i.prototype, {
              constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
            })),
              i && (Object.setPrototypeOf ? Object.setPrototypeOf(a, i) : (a.__proto__ = i));
          }
          var u = ['height', 'width'],
            l = (function (a) {
              e(i, a);
              function i() {
                return (
                  o(this, i),
                  t(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
                );
              }
              return (
                P(
                  i,
                  [
                    {
                      key: 'format',
                      value: function (f, n) {
                        u.indexOf(f) > -1
                          ? n
                            ? this.domNode.setAttribute(f, n)
                            : this.domNode.removeAttribute(f)
                          : w(
                              i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                              'format',
                              this
                            ).call(this, f, n);
                      },
                    },
                  ],
                  [
                    {
                      key: 'create',
                      value: function (f) {
                        var n = w(i.__proto__ || Object.getPrototypeOf(i), 'create', this).call(
                          this,
                          f
                        );
                        return (
                          n.setAttribute('frameborder', '0'),
                          n.setAttribute('allowfullscreen', !0),
                          n.setAttribute('src', this.sanitize(f)),
                          n
                        );
                      },
                    },
                    {
                      key: 'formats',
                      value: function (f) {
                        return u.reduce(function (n, c) {
                          return f.hasAttribute(c) && (n[c] = f.getAttribute(c)), n;
                        }, {});
                      },
                    },
                    {
                      key: 'sanitize',
                      value: function (f) {
                        return d.default.sanitize(f);
                      },
                    },
                    {
                      key: 'value',
                      value: function (f) {
                        return f.getAttribute('src');
                      },
                    },
                  ]
                ),
                i
              );
            })(O.BlockEmbed);
          (l.blotName = 'video'),
            (l.className = 'ql-video'),
            (l.tagName = 'IFRAME'),
            (g.default = l);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.default = g.FormulaBlot = void 0);
          var P = (function () {
              function f(n, c) {
                for (var k = 0; k < c.length; k++) {
                  var b = c[k];
                  (b.enumerable = b.enumerable || !1),
                    (b.configurable = !0),
                    'value' in b && (b.writable = !0),
                    Object.defineProperty(n, b.key, b);
                }
              }
              return function (n, c, k) {
                return c && f(n.prototype, c), k && f(n, k), n;
              };
            })(),
            w = function f(n, c, k) {
              n === null && (n = Function.prototype);
              var b = Object.getOwnPropertyDescriptor(n, c);
              if (b === void 0) {
                var _ = Object.getPrototypeOf(n);
                return _ === null ? void 0 : f(_, c, k);
              }
              if ('value' in b) return b.value;
              var N = b.get;
              return N === void 0 ? void 0 : N.call(k);
            },
            O = p(35),
            v = e(O),
            d = p(5),
            s = e(d),
            o = p(9),
            t = e(o);
          function e(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function u(f, n) {
            if (!(f instanceof n)) throw new TypeError('Cannot call a class as a function');
          }
          function l(f, n) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n && (typeof n === 'object' || typeof n === 'function') ? n : f;
          }
          function a(f, n) {
            if (typeof n !== 'function' && n !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof n
              );
            (f.prototype = Object.create(n && n.prototype, {
              constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 },
            })),
              n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : (f.__proto__ = n));
          }
          var i = (function (f) {
            a(n, f);
            function n() {
              return (
                u(this, n),
                l(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
              );
            }
            return (
              P(n, null, [
                {
                  key: 'create',
                  value: function (k) {
                    var b = w(n.__proto__ || Object.getPrototypeOf(n), 'create', this).call(
                      this,
                      k
                    );
                    return (
                      typeof k === 'string' &&
                        (window.katex.render(k, b, { throwOnError: !1, errorColor: '#f00' }),
                        b.setAttribute('data-value', k)),
                      b
                    );
                  },
                },
                {
                  key: 'value',
                  value: function (k) {
                    return k.getAttribute('data-value');
                  },
                },
              ]),
              n
            );
          })(v.default);
          (i.blotName = 'formula'), (i.className = 'ql-formula'), (i.tagName = 'SPAN');
          var r = (function (f) {
            a(n, f),
              P(n, null, [
                {
                  key: 'register',
                  value: function () {
                    s.default.register(i, !0);
                  },
                },
              ]);
            function n() {
              u(this, n);
              var c = l(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
              if (window.katex == null) throw new Error('Formula module requires KaTeX.');
              return c;
            }
            return n;
          })(t.default);
          (g.FormulaBlot = i), (g.default = r);
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.default = g.CodeToken = g.CodeBlock = void 0);
          var P = (function () {
              function k(b, _) {
                for (var N = 0; N < _.length; N++) {
                  var m = _[N];
                  (m.enumerable = m.enumerable || !1),
                    (m.configurable = !0),
                    'value' in m && (m.writable = !0),
                    Object.defineProperty(b, m.key, m);
                }
              }
              return function (b, _, N) {
                return _ && k(b.prototype, _), N && k(b, N), b;
              };
            })(),
            w = function k(b, _, N) {
              b === null && (b = Function.prototype);
              var m = Object.getOwnPropertyDescriptor(b, _);
              if (m === void 0) {
                var h = Object.getPrototypeOf(b);
                return h === null ? void 0 : k(h, _, N);
              }
              if ('value' in m) return m.value;
              var y = m.get;
              return y === void 0 ? void 0 : y.call(N);
            },
            O = p(0),
            v = l(O),
            d = p(5),
            s = l(d),
            o = p(9),
            t = l(o),
            e = p(13),
            u = l(e);
          function l(k) {
            return k && k.__esModule ? k : { default: k };
          }
          function a(k, b) {
            if (!(k instanceof b)) throw new TypeError('Cannot call a class as a function');
          }
          function i(k, b) {
            if (!k)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return b && (typeof b === 'object' || typeof b === 'function') ? b : k;
          }
          function r(k, b) {
            if (typeof b !== 'function' && b !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof b
              );
            (k.prototype = Object.create(b && b.prototype, {
              constructor: { value: k, enumerable: !1, writable: !0, configurable: !0 },
            })),
              b && (Object.setPrototypeOf ? Object.setPrototypeOf(k, b) : (k.__proto__ = b));
          }
          var f = (function (k) {
            r(b, k);
            function b() {
              return (
                a(this, b),
                i(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments))
              );
            }
            return (
              P(b, [
                {
                  key: 'replaceWith',
                  value: function (N) {
                    (this.domNode.textContent = this.domNode.textContent),
                      this.attach(),
                      w(
                        b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                        'replaceWith',
                        this
                      ).call(this, N);
                  },
                },
                {
                  key: 'highlight',
                  value: function (N) {
                    var m = this.domNode.textContent;
                    this.cachedText !== m &&
                      ((m.trim().length > 0 || this.cachedText == null) &&
                        ((this.domNode.innerHTML = N(m)), this.domNode.normalize(), this.attach()),
                      (this.cachedText = m));
                  },
                },
              ]),
              b
            );
          })(u.default);
          f.className = 'ql-syntax';
          var n = new v.default.Attributor.Class('token', 'hljs', {
              scope: v.default.Scope.INLINE,
            }),
            c = (function (k) {
              r(b, k),
                P(b, null, [
                  {
                    key: 'register',
                    value: function () {
                      s.default.register(n, !0), s.default.register(f, !0);
                    },
                  },
                ]);
              function b(_, N) {
                a(this, b);
                var m = i(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, _, N));
                if (typeof m.options.highlight !== 'function')
                  throw new Error(
                    'Syntax module requires highlight.js. Please include the library on the page before Quill.'
                  );
                var h = null;
                return (
                  m.quill.on(s.default.events.SCROLL_OPTIMIZE, function () {
                    clearTimeout(h),
                      (h = setTimeout(function () {
                        m.highlight(), (h = null);
                      }, m.options.interval));
                  }),
                  m.highlight(),
                  m
                );
              }
              return (
                P(b, [
                  {
                    key: 'highlight',
                    value: function () {
                      var N = this;
                      if (!this.quill.selection.composing) {
                        this.quill.update(s.default.sources.USER);
                        var m = this.quill.getSelection();
                        this.quill.scroll.descendants(f).forEach(function (h) {
                          h.highlight(N.options.highlight);
                        }),
                          this.quill.update(s.default.sources.SILENT),
                          m != null && this.quill.setSelection(m, s.default.sources.SILENT);
                      }
                    },
                  },
                ]),
                b
              );
            })(t.default);
          (c.DEFAULTS = {
            highlight: (function () {
              return window.hljs == null
                ? null
                : function (k) {
                    var b = window.hljs.highlightAuto(k);
                    return b.value;
                  };
            })(),
            interval: 1e3,
          }),
            (g.CodeBlock = f),
            (g.CodeToken = n),
            (g.default = c);
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
        },
        function (j, g) {
          j.exports =
            '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
        },
        function (j, g, p) {
          'use strict';
          Object.defineProperty(g, '__esModule', { value: !0 }),
            (g.default = g.BubbleTooltip = void 0);
          var P = function b(_, N, m) {
              _ === null && (_ = Function.prototype);
              var h = Object.getOwnPropertyDescriptor(_, N);
              if (h === void 0) {
                var y = Object.getPrototypeOf(_);
                return y === null ? void 0 : b(y, N, m);
              }
              if ('value' in h) return h.value;
              var A = h.get;
              return A === void 0 ? void 0 : A.call(m);
            },
            w = (function () {
              function b(_, N) {
                for (var m = 0; m < N.length; m++) {
                  var h = N[m];
                  (h.enumerable = h.enumerable || !1),
                    (h.configurable = !0),
                    'value' in h && (h.writable = !0),
                    Object.defineProperty(_, h.key, h);
                }
              }
              return function (_, N, m) {
                return N && b(_.prototype, N), m && b(_, m), _;
              };
            })(),
            O = p(3),
            v = a(O),
            d = p(8),
            s = a(d),
            o = p(43),
            t = a(o),
            e = p(15),
            u = p(41),
            l = a(u);
          function a(b) {
            return b && b.__esModule ? b : { default: b };
          }
          function i(b, _) {
            if (!(b instanceof _)) throw new TypeError('Cannot call a class as a function');
          }
          function r(b, _) {
            if (!b)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return _ && (typeof _ === 'object' || typeof _ === 'function') ? _ : b;
          }
          function f(b, _) {
            if (typeof _ !== 'function' && _ !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof _
              );
            (b.prototype = Object.create(_ && _.prototype, {
              constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 },
            })),
              _ && (Object.setPrototypeOf ? Object.setPrototypeOf(b, _) : (b.__proto__ = _));
          }
          var n = [
              ['bold', 'italic', 'link'],
              [{ header: 1 }, { header: 2 }, 'blockquote'],
            ],
            c = (function (b) {
              f(_, b);
              function _(N, m) {
                i(this, _),
                  m.modules.toolbar != null &&
                    m.modules.toolbar.container == null &&
                    (m.modules.toolbar.container = n);
                var h = r(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, N, m));
                return h.quill.container.classList.add('ql-bubble'), h;
              }
              return (
                w(_, [
                  {
                    key: 'extendToolbar',
                    value: function (m) {
                      (this.tooltip = new k(this.quill, this.options.bounds)),
                        this.tooltip.root.appendChild(m.container),
                        this.buildButtons(
                          [].slice.call(m.container.querySelectorAll('button')),
                          l.default
                        ),
                        this.buildPickers(
                          [].slice.call(m.container.querySelectorAll('select')),
                          l.default
                        );
                    },
                  },
                ]),
                _
              );
            })(t.default);
          c.DEFAULTS = (0, v.default)(!0, {}, t.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function (_) {
                    _ ? this.quill.theme.tooltip.edit() : this.quill.format('link', !1);
                  },
                },
              },
            },
          });
          var k = (function (b) {
            f(_, b);
            function _(N, m) {
              i(this, _);
              var h = r(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, N, m));
              return (
                h.quill.on(s.default.events.EDITOR_CHANGE, function (y, A, T, q) {
                  if (y === s.default.events.SELECTION_CHANGE)
                    if (A != null && A.length > 0 && q === s.default.sources.USER) {
                      h.show(),
                        (h.root.style.left = '0px'),
                        (h.root.style.width = ''),
                        (h.root.style.width = h.root.offsetWidth + 'px');
                      var B = h.quill.getLines(A.index, A.length);
                      if (B.length === 1) h.position(h.quill.getBounds(A));
                      else {
                        var C = B[B.length - 1],
                          Z = h.quill.getIndex(C),
                          M = Math.min(C.length() - 1, A.index + A.length - Z),
                          R = h.quill.getBounds(new e.Range(Z, M));
                        h.position(R);
                      }
                    } else document.activeElement !== h.textbox && h.quill.hasFocus() && h.hide();
                }),
                h
              );
            }
            return (
              w(_, [
                {
                  key: 'listen',
                  value: function () {
                    var m = this;
                    P(
                      _.prototype.__proto__ || Object.getPrototypeOf(_.prototype),
                      'listen',
                      this
                    ).call(this),
                      this.root.querySelector('.ql-close').addEventListener('click', function () {
                        m.root.classList.remove('ql-editing');
                      }),
                      this.quill.on(s.default.events.SCROLL_OPTIMIZE, function () {
                        setTimeout(function () {
                          if (!m.root.classList.contains('ql-hidden')) {
                            var h = m.quill.getSelection();
                            h != null && m.position(m.quill.getBounds(h));
                          }
                        }, 1);
                      });
                  },
                },
                {
                  key: 'cancel',
                  value: function () {
                    this.show();
                  },
                },
                {
                  key: 'position',
                  value: function (m) {
                    var h = P(
                        _.prototype.__proto__ || Object.getPrototypeOf(_.prototype),
                        'position',
                        this
                      ).call(this, m),
                      y = this.root.querySelector('.ql-tooltip-arrow');
                    if (((y.style.marginLeft = ''), h === 0)) return h;
                    y.style.marginLeft = -1 * h - y.offsetWidth / 2 + 'px';
                  },
                },
              ]),
              _
            );
          })(o.BaseTooltip);
          (k.TEMPLATE = [
            '<span class="ql-tooltip-arrow"></span>',
            '<div class="ql-tooltip-editor">',
            '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
            '<a class="ql-close"></a>',
            '</div>',
          ].join('')),
            (g.BubbleTooltip = k),
            (g.default = c);
        },
        function (j, g, p) {
          j.exports = p(63);
        },
      ]).default;
    });
  });
  function vt() {
    let j = 0;
    function g(O) {
      let v = [];
      if (O.nodeType === 3) {
        let d = O.nodeValue || '',
          s = /##(.*?)##/g,
          o,
          t = 0;
        for (; (o = s.exec(d)) !== null; ) {
          v.push(document.createTextNode(d.substring(t, o.index)));
          let e = o[1],
            u = p(e, j++);
          v.push(u), (t = s.lastIndex);
        }
        t < d.length && v.push(document.createTextNode(d.substring(t)));
      } else if (O.nodeType === 1) {
        let d = O.cloneNode(!1);
        Array.from(O.childNodes).forEach((s) => {
          g(s).forEach((o) => d.appendChild(o));
        }),
          v.push(d);
      }
      return v;
    }
    function p(O, v) {
      var u;
      let d = document.createElement('input');
      (d.className = 'Sermon-Text-Input'),
        (d.id = 'input-' + v),
        d.setAttribute('type', 'text'),
        d.setAttribute('maxlength', O.length.toString()),
        d.style.setProperty('--size', O.length.toString());
      let s =
          (u = document.querySelector('[sermon-function="Fill-In"]')) == null
            ? void 0
            : u.getAttribute('sermon-data'),
        o = s ? s + '__InputValues' : '',
        e = JSON.parse(localStorage.getItem(o) || '[]')[v];
      return (
        e && ((d.value = e), e === O && ((d.readOnly = !0), d.classList.add('correct'))),
        d.addEventListener('keydown', function (l) {
          if (l.key === 'Tab') return;
          let a = O.charAt(this.value.length);
          l.key.toLowerCase() !== a.toLowerCase()
            ? (l.preventDefault(),
              this.classList.add('shake'),
              setTimeout(() => {
                this.classList.remove('shake');
              }, 500))
            : (l.preventDefault(), (this.value += a));
        }),
        d.addEventListener('keyup', function () {
          if (this.value === O) {
            (this.readOnly = !0),
              this.classList.add('correct'),
              this.classList.add('dance'),
              setTimeout(() => {
                this.classList.remove('dance');
              }, 1e3);
            let a = w.indexOf(this);
            w[a + 1] && w[a + 1].focus();
          }
          let l = JSON.parse(localStorage.getItem(o) || '[]');
          (l[v] = this.value), localStorage.setItem(o, JSON.stringify(l));
        }),
        d
      );
    }
    let P = document.querySelector('[sermon-function="Fill-In"]'),
      w = [];
    P &&
      Array.from(P.querySelectorAll('.text-rich-text')[0].childNodes).forEach((v) => {
        g(v).forEach((s) => {
          s instanceof HTMLInputElement && w.push(s),
            P.querySelectorAll('.text-rich-text')[0].insertBefore(s, v);
        }),
          P.querySelectorAll('.text-rich-text')[0].removeChild(v);
      });
  }
  var yt = Nt(pt(), 1);
  function mt() {
    let j = document.querySelector('[sermon-function="notes-editor"]'),
      g = document.querySelector('[sermon-editor="toolbar"]'),
      p = j.getAttribute('sermon-data'),
      P = new yt.default(j, {
        modules: {
          toolbar: { container: g },
          history: { delay: 2e3, maxStack: 500, userOnly: !0 },
        },
        placeholder: 'Sermon Notes...',
      }),
      w = `${p}__Notes`,
      O = j.querySelector('.ql-editor'),
      v = localStorage.getItem(w);
    v && (O.innerHTML = v),
      new MutationObserver(function () {
        localStorage.setItem(w, O.innerHTML);
      }).observe(O, { attributes: !0, childList: !0, characterData: !0, subtree: !0 }),
      window.addEventListener('storage', function (s) {
        s.key === w && (O.innerHTML = s.newValue);
      });
  }
  window.Webflow = window.Webflow || [];
  window.Webflow.push(() => {
    vt(), mt();
  });
})();
/*! Bundled license information:

quill/dist/quill.js:
  (*!
   * Quill Editor v1.3.6
   * https://quilljs.com/
   * Copyright (c) 2014, Jason Chen
   * Copyright (c) 2013, salesforce.com
   *)
*/
