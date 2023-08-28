'use strict';
(() => {
  var wn = Object.create;
  var It = Object.defineProperty;
  var An = Object.getOwnPropertyDescriptor;
  var kn = Object.getOwnPropertyNames;
  var Tn = Object.getPrototypeOf,
    Nn = Object.prototype.hasOwnProperty;
  var re = (h, e) => () => (e || h((e = { exports: {} }).exports, e), e.exports);
  var Sn = (h, e, n, g) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let _ of kn(e))
        !Nn.call(h, _) &&
          _ !== n &&
          It(h, _, { get: () => e[_], enumerable: !(g = An(e, _)) || g.enumerable });
    return h;
  };
  var Dt = (h, e, n) => (
    (n = h != null ? wn(Tn(h)) : {}),
    Sn(e || !h || !h.__esModule ? It(n, 'default', { value: h, enumerable: !0 }) : n, h)
  );
  var De = re((Ue) => {
    'use strict';
    Object.defineProperty(Ue, '__esModule', { value: !0 });
    Ue.settings = void 0;
    Ue.settings = { debug: !1, gravity: 800, zIndex: 99999, respectReducedMotion: !0 };
  });
  var Ve = re((He) => {
    'use strict';
    Object.defineProperty(He, '__esModule', { value: !0 });
    He.overrideDefaults = void 0;
    function xn(h, e) {
      return Object.assign({}, h, e);
    }
    He.overrideDefaults = xn;
  });
  var Bt = re((Ke) => {
    'use strict';
    Object.defineProperty(Ke, '__esModule', { value: !0 });
    Ke.Circle = void 0;
    var Pn = (function () {
      function h(e, n, g) {
        g === void 0 && (g = 0), (this.x = e), (this.y = n), (this.radius = g);
      }
      return (h.zero = new h(0, 0)), h;
    })();
    Ke.Circle = Pn;
  });
  var Ee = re((se) => {
    'use strict';
    Object.defineProperty(se, '__esModule', { value: !0 });
    se.approximately =
      se.clamp =
      se.invlerp =
      se.slerp =
      se.lerp =
      se.epsilon =
      se.rad2deg =
      se.deg2rad =
        void 0;
    se.deg2rad = Math.PI / 180;
    se.rad2deg = 180 / Math.PI;
    se.epsilon = 1e-6;
    function Ct(h, e, n) {
      return (1 - n) * h + n * e;
    }
    se.lerp = Ct;
    function qn(h, e, n) {
      return Ct(h, e, (1 - Math.cos(n * Math.PI)) / 2);
    }
    se.slerp = qn;
    function Ln(h, e, n) {
      return (n - h) / (e - h);
    }
    se.invlerp = Ln;
    function Rn(h, e, n) {
      return Math.min(n, Math.max(e, h));
    }
    se.clamp = Rn;
    function jn(h, e) {
      return Math.abs(h - e) < se.epsilon;
    }
    se.approximately = jn;
  });
  var Ft = re((Ze) => {
    'use strict';
    Object.defineProperty(Ze, '__esModule', { value: !0 });
    Ze.Color = void 0;
    var mt = Ee(),
      Mn = (function () {
        function h(e, n, g) {
          (this.values = new Float32Array(3)), (this.rgb = [e, n, g]);
        }
        return (
          Object.defineProperty(h.prototype, 'r', {
            get: function () {
              return this.values[0];
            },
            set: function (e) {
              this.values[0] = Math.floor(e);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(h.prototype, 'g', {
            get: function () {
              return this.values[1];
            },
            set: function (e) {
              this.values[1] = Math.floor(e);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(h.prototype, 'b', {
            get: function () {
              return this.values[2];
            },
            set: function (e) {
              this.values[2] = Math.floor(e);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(h.prototype, 'rgb', {
            get: function () {
              return [this.r, this.g, this.b];
            },
            set: function (e) {
              (this.r = e[0]), (this.g = e[1]), (this.b = e[2]);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (h.prototype.mix = function (e, n) {
            return (
              n === void 0 && (n = 0.5),
              new h(mt.lerp(this.r, e.r, n), mt.lerp(this.g, e.g, n), mt.lerp(this.b, e.b, n))
            );
          }),
          (h.prototype.toHex = function () {
            var e = function (n) {
              return n.toString(16).padStart(2, '0');
            };
            return '#' + e(this.r) + e(this.g) + e(this.b);
          }),
          (h.prototype.toString = function () {
            return 'rgb(' + this.values.join(', ') + ')';
          }),
          (h.fromHex = function (e) {
            return (
              e.startsWith('#') && (e = e.substr(1)),
              new h(
                parseInt(e.substr(0, 2), 16),
                parseInt(e.substr(2, 2), 16),
                parseInt(e.substr(4, 2), 16)
              )
            );
          }),
          (h.fromHsl = function (e, n, g) {
            if (((e /= 360), (n /= 100), (g /= 100), n === 0)) return new h(g, g, g);
            var _ = function (c, o, t) {
                return (
                  t < 0 && (t += 1),
                  t > 1 && (t -= 1),
                  t < 0.16666666666666666
                    ? c + (o - c) * 6 * t
                    : t < 0.5
                    ? o
                    : t < 0.6666666666666666
                    ? c + (o - c) * (0.6666666666666666 - t) * 6
                    : c
                );
              },
              E = function (c) {
                return Math.min(255, 256 * c);
              },
              m = g < 0.5 ? g * (1 + n) : g + n - g * n,
              p = 2 * g - m;
            return new h(E(_(p, m, e + 1 / 3)), E(_(p, m, e)), E(_(p, m, e - 1 / 3)));
          }),
          (h.white = new h(255, 255, 255)),
          (h.black = new h(0, 0, 0)),
          h
        );
      })();
    Ze.Color = Mn;
  });
  var gt = re((Ge) => {
    'use strict';
    Object.defineProperty(Ge, '__esModule', { value: !0 });
    Ge.Spline = void 0;
    var In = Ee(),
      Dn = (function () {
        function h() {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          if (e.length === 0) throw new Error('Splines require at least one key.');
          if (Array.isArray(e[0]))
            throw new Error(
              'You are trying to pass an array to the spline constructor, which is not supported. Try to spread the array into the constructor instead.'
            );
          this.keys = e;
        }
        return (
          (h.prototype.evaluate = function (e) {
            if (this.keys.length === 0)
              throw new Error('Attempt to evaluate a spline with no keys.');
            if (this.keys.length === 1) return this.keys[0].value;
            var n = this.keys.sort(function (p, c) {
                return p.time - c.time;
              }),
              g = n.findIndex(function (p) {
                return p.time > e;
              });
            if (g === 0) return n[0].value;
            if (g === -1) return n[n.length - 1].value;
            var _ = n[g - 1],
              E = n[g],
              m = In.invlerp(_.time, E.time, e);
            return this.interpolate(_.value, E.value, m);
          }),
          h
        );
      })();
    Ge.Spline = Dn;
  });
  var zt = re((we) => {
    'use strict';
    var Bn =
        (we && we.__extends) ||
        (function () {
          var h = function (e, n) {
            return (
              (h =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (g, _) {
                    g.__proto__ = _;
                  }) ||
                function (g, _) {
                  for (var E in _) Object.prototype.hasOwnProperty.call(_, E) && (g[E] = _[E]);
                }),
              h(e, n)
            );
          };
          return function (e, n) {
            if (typeof n != 'function' && n !== null)
              throw new TypeError(
                'Class extends value ' + String(n) + ' is not a constructor or null'
              );
            h(e, n);
            function g() {
              this.constructor = e;
            }
            e.prototype = n === null ? Object.create(n) : ((g.prototype = n.prototype), new g());
          };
        })(),
      Cn =
        (we && we.__spreadArray) ||
        function (h, e) {
          for (var n = 0, g = e.length, _ = h.length; n < g; n++, _++) h[_] = e[n];
          return h;
        };
    Object.defineProperty(we, '__esModule', { value: !0 });
    we.Gradient = void 0;
    var Fn = gt(),
      zn = (function (h) {
        Bn(e, h);
        function e() {
          return (h !== null && h.apply(this, arguments)) || this;
        }
        return (
          (e.prototype.interpolate = function (n, g, _) {
            return n.mix(g, _);
          }),
          (e.solid = function (n) {
            return new e({ value: n, time: 0.5 });
          }),
          (e.simple = function () {
            for (var n = [], g = 0; g < arguments.length; g++) n[g] = arguments[g];
            var _ = 1 / (n.length - 1);
            return new (e.bind.apply(
              e,
              Cn(
                [void 0],
                n.map(function (E, m) {
                  return { value: E, time: m * _ };
                })
              )
            ))();
          }),
          e
        );
      })(Fn.Spline);
    we.Gradient = zn;
  });
  var Ut = re((xe) => {
    'use strict';
    var Un =
      (xe && xe.__extends) ||
      (function () {
        var h = function (e, n) {
          return (
            (h =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (g, _) {
                  g.__proto__ = _;
                }) ||
              function (g, _) {
                for (var E in _) Object.prototype.hasOwnProperty.call(_, E) && (g[E] = _[E]);
              }),
            h(e, n)
          );
        };
        return function (e, n) {
          if (typeof n != 'function' && n !== null)
            throw new TypeError(
              'Class extends value ' + String(n) + ' is not a constructor or null'
            );
          h(e, n);
          function g() {
            this.constructor = e;
          }
          e.prototype = n === null ? Object.create(n) : ((g.prototype = n.prototype), new g());
        };
      })();
    Object.defineProperty(xe, '__esModule', { value: !0 });
    xe.NumericSpline = void 0;
    var Hn = Ee(),
      Vn = gt(),
      Kn = (function (h) {
        Un(e, h);
        function e() {
          return (h !== null && h.apply(this, arguments)) || this;
        }
        return (
          (e.prototype.interpolate = function (n, g, _) {
            return Hn.slerp(n, g, _);
          }),
          e
        );
      })(Vn.Spline);
    xe.NumericSpline = Kn;
  });
  var Ht = re((We) => {
    'use strict';
    Object.defineProperty(We, '__esModule', { value: !0 });
    We.Rect = void 0;
    var Zn = (function () {
      function h(e, n, g, _) {
        g === void 0 && (g = 0),
          _ === void 0 && (_ = 0),
          (this.x = e),
          (this.y = n),
          (this.width = g),
          (this.height = _);
      }
      return (
        (h.fromScreen = function () {
          return new h(window.scrollX, window.scrollY, window.innerWidth, window.innerHeight);
        }),
        (h.fromElement = function (e) {
          var n = e.getBoundingClientRect();
          return new h(window.scrollX + n.x, window.scrollY + n.y, n.width, n.height);
        }),
        (h.zero = new h(0, 0)),
        h
      );
    })();
    We.Rect = Zn;
  });
  var Ye = re((Pe) => {
    'use strict';
    var Gn =
      (Pe && Pe.__spreadArray) ||
      function (h, e) {
        for (var n = 0, g = e.length, _ = h.length; n < g; n++, _++) h[_] = e[n];
        return h;
      };
    Object.defineProperty(Pe, '__esModule', { value: !0 });
    Pe.Vector = void 0;
    var $e = Ee(),
      Wn = (function () {
        function h(e, n, g) {
          e === void 0 && (e = 0),
            n === void 0 && (n = 0),
            g === void 0 && (g = 0),
            (this.values = new Float32Array(3)),
            (this.xyz = [e, n, g]);
        }
        return (
          Object.defineProperty(h.prototype, 'x', {
            get: function () {
              return this.values[0];
            },
            set: function (e) {
              this.values[0] = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(h.prototype, 'y', {
            get: function () {
              return this.values[1];
            },
            set: function (e) {
              this.values[1] = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(h.prototype, 'z', {
            get: function () {
              return this.values[2];
            },
            set: function (e) {
              this.values[2] = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(h.prototype, 'xyz', {
            get: function () {
              return [this.x, this.y, this.z];
            },
            set: function (e) {
              (this.values[0] = e[0]), (this.values[1] = e[1]), (this.values[2] = e[2]);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (h.prototype.magnitude = function () {
            return Math.sqrt(this.sqrMagnitude());
          }),
          (h.prototype.sqrMagnitude = function () {
            return this.x * this.x + this.y * this.y + this.z * this.z;
          }),
          (h.prototype.add = function (e) {
            return new h(this.x + e.x, this.y + e.y, this.z + e.z);
          }),
          (h.prototype.subtract = function (e) {
            return new h(this.x - e.x, this.y - e.y, this.z - e.z);
          }),
          (h.prototype.scale = function (e) {
            return typeof e == 'number'
              ? new h(this.x * e, this.y * e, this.z * e)
              : new h(this.x * e.x, this.y * e.y, this.z * e.z);
          }),
          (h.prototype.normalized = function () {
            var e = this.magnitude();
            return e !== 0 ? this.scale(1 / e) : new (h.bind.apply(h, Gn([void 0], this.xyz)))();
          }),
          (h.prototype.angle = function (e) {
            return (
              $e.rad2deg *
              Math.acos(
                (this.x * e.x + this.y * e.y + this.z * e.z) / (this.magnitude() * e.magnitude())
              )
            );
          }),
          (h.prototype.cross = function (e) {
            return new h(
              this.y * e.z - this.z * e.y,
              this.z * e.x - this.x * e.z,
              this.x * e.y - this.y * e.x
            );
          }),
          (h.prototype.dot = function (e) {
            return this.magnitude() * e.magnitude() * Math.cos($e.deg2rad * this.angle(e));
          }),
          (h.prototype.toString = function () {
            return 'Vector(' + this.values.join(', ') + ')';
          }),
          (h.from2dAngle = function (e) {
            return new h(Math.cos(e * $e.deg2rad), Math.sin(e * $e.deg2rad));
          }),
          (h.zero = new h(0, 0, 0)),
          (h.one = new h(1, 1, 1)),
          (h.right = new h(1, 0, 0)),
          (h.up = new h(0, 1, 0)),
          (h.forward = new h(0, 0, 1)),
          h
        );
      })();
    Pe.Vector = Wn;
  });
  var ye = re((de) => {
    'use strict';
    var $n =
        (de && de.__createBinding) ||
        (Object.create
          ? function (h, e, n, g) {
              g === void 0 && (g = n),
                Object.defineProperty(h, g, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }
          : function (h, e, n, g) {
              g === void 0 && (g = n), (h[g] = e[n]);
            }),
      qe =
        (de && de.__exportStar) ||
        function (h, e) {
          for (var n in h)
            n !== 'default' && !Object.prototype.hasOwnProperty.call(e, n) && $n(e, h, n);
        };
    Object.defineProperty(de, '__esModule', { value: !0 });
    qe(Bt(), de);
    qe(Ft(), de);
    qe(zt(), de);
    qe(Ut(), de);
    qe(Ht(), de);
    qe(Ye(), de);
  });
  var Zt = re((Xe) => {
    'use strict';
    Object.defineProperty(Xe, '__esModule', { value: !0 });
    Xe.rotationToNormal = void 0;
    var Vt = ye(),
      Kt = Ee();
    function Yn(h) {
      var e = h.x * Kt.deg2rad,
        n = h.y * Kt.deg2rad,
        g = new Vt.Vector(Math.cos(n), 0, Math.sin(n)),
        _ = new Vt.Vector(0, Math.cos(e), Math.sin(e));
      return g.cross(_);
    }
    Xe.rotationToNormal = Yn;
  });
  var bt = re((Qe) => {
    'use strict';
    Object.defineProperty(Qe, '__esModule', { value: !0 });
    Qe.despawningRules = void 0;
    Qe.despawningRules = {
      lifetime: function (h) {
        return h.lifetime <= 0;
      },
      bounds: function (h) {
        var e = document.documentElement.scrollHeight;
        return h.location.y > e;
      },
    };
  });
  var Gt = re((Je) => {
    'use strict';
    Object.defineProperty(Je, '__esModule', { value: !0 });
    Je.Lazy = void 0;
    var Xn = (function () {
      function h(e, n) {
        n === void 0 && (n = h.defaultExists), (this.factory = e), (this.exists = n);
      }
      return (
        Object.defineProperty(h.prototype, 'current', {
          get: function () {
            return this.exists(this.value) || (this.value = this.factory()), this.value;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (h.defaultExists = function (e) {
          return typeof e != 'undefined';
        }),
        h
      );
    })();
    Je.Lazy = Xn;
  });
  var ke = re((me) => {
    'use strict';
    var Qn =
        (me && me.__createBinding) ||
        (Object.create
          ? function (h, e, n, g) {
              g === void 0 && (g = n),
                Object.defineProperty(h, g, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }
          : function (h, e, n, g) {
              g === void 0 && (g = n), (h[g] = e[n]);
            }),
      et =
        (me && me.__exportStar) ||
        function (h, e) {
          for (var n in h)
            n !== 'default' && !Object.prototype.hasOwnProperty.call(e, n) && Qn(e, h, n);
        };
    Object.defineProperty(me, '__esModule', { value: !0 });
    et(Ve(), me);
    et(Zt(), me);
    et(bt(), me);
    et(Gt(), me);
  });
  var wt = re((ge) => {
    'use strict';
    Object.defineProperty(ge, '__esModule', { value: !0 });
    ge.particleContainer = ge.debugContainer = ge.rootContainer = void 0;
    var Jn = De(),
      _t = ke(),
      er = 'party-js-';
    function Ot(h) {
      return h && h.isConnected;
    }
    function Et(h, e, n) {
      var g = document.createElement('div');
      return (g.id = er + h), Object.assign(g.style, e), n.appendChild(g);
    }
    ge.rootContainer = new _t.Lazy(function () {
      return Et(
        'container',
        {
          position: 'fixed',
          left: '0',
          top: '0',
          height: '100vh',
          width: '100vw',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: Jn.settings.zIndex.toString(),
        },
        document.body
      );
    }, Ot);
    ge.debugContainer = new _t.Lazy(function () {
      return Et(
        'debug',
        {
          position: 'absolute',
          top: '0',
          left: '0',
          margin: '0.5em',
          padding: '0.5em 1em',
          border: '2px solid rgb(0, 0, 0, 0.2)',
          background: 'rgb(0, 0, 0, 0.1)',
          color: '#555',
          fontFamily: 'monospace',
        },
        ge.rootContainer.current
      );
    }, Ot);
    ge.particleContainer = new _t.Lazy(function () {
      return Et(
        'particles',
        { width: '100%', height: '100%', overflow: 'hidden', perspective: '1200px' },
        ge.rootContainer.current
      );
    }, Ot);
  });
  var $t = re((Le) => {
    'use strict';
    var tr =
      (Le && Le.__spreadArray) ||
      function (h, e) {
        for (var n = 0, g = e.length, _ = h.length; n < g; n++, _++) h[_] = e[n];
        return h;
      };
    Object.defineProperty(Le, '__esModule', { value: !0 });
    Le.Debug = void 0;
    var nr = wt(),
      Wt = De(),
      rr = (function () {
        function h(e) {
          (this.scene = e), (this.refreshRate = 8), (this.refreshTimer = 1 / this.refreshRate);
        }
        return (
          (h.prototype.tick = function (e) {
            var n = nr.debugContainer.current,
              g = Wt.settings.debug ? 'block' : 'none';
            n.style.display !== g && (n.style.display = g),
              Wt.settings.debug &&
                ((this.refreshTimer += e),
                this.refreshTimer > 1 / this.refreshRate &&
                  ((this.refreshTimer = 0),
                  (n.innerHTML = this.getDebugInformation(e).join('<br>'))));
          }),
          (h.prototype.getDebugInformation = function (e) {
            var n = this.scene.emitters.length,
              g = this.scene.emitters.reduce(function (m, p) {
                return m + p.particles.length;
              }, 0),
              _ = [
                '<b>party.js Debug</b>',
                '--------------',
                'FPS: ' + Math.round(1 / e),
                'Emitters: ' + n,
                'Particles: ' + g,
              ],
              E = this.scene.emitters.map(function (m) {
                return [
                  '\u2B6F: ' +
                    (m.currentLoop + 1) +
                    '/' +
                    (m.options.loops >= 0 ? m.options.loops : '\u221E'),
                  '\u03A3p: ' + m.particles.length,
                  m.isExpired ? '<i>expired</i>' : '\u03A3t: ' + m.durationTimer.toFixed(3) + 's',
                ].join(', ');
              });
            return _.push.apply(_, tr(['--------------'], E)), _;
          }),
          h
        );
      })();
    Le.Debug = rr;
  });
  var Re = re((ve) => {
    'use strict';
    Object.defineProperty(ve, '__esModule', { value: !0 });
    ve.randomInsideCircle =
      ve.randomInsideRect =
      ve.randomUnitVector =
      ve.pick =
      ve.randomRange =
        void 0;
    var At = ye(),
      ir = Ee();
    function Te(h, e) {
      return h === void 0 && (h = 0), e === void 0 && (e = 1), ir.lerp(h, e, Math.random());
    }
    ve.randomRange = Te;
    function or(h) {
      return h.length === 0 ? void 0 : h[Math.floor(Math.random() * h.length)];
    }
    ve.pick = or;
    function lr() {
      var h = Te(0, 2 * Math.PI),
        e = Te(-1, 1);
      return new At.Vector(
        Math.sqrt(1 - e * e) * Math.cos(h),
        Math.sqrt(1 - e * e) * Math.sin(h),
        e
      );
    }
    ve.randomUnitVector = lr;
    function ar(h) {
      return new At.Vector(h.x + Te(0, h.width), h.y + Te(0, h.height));
    }
    ve.randomInsideRect = ar;
    function ur(h) {
      var e = Te(0, 2 * Math.PI),
        n = Te(0, h.radius);
      return new At.Vector(h.x + Math.cos(e) * n, h.y + Math.sin(e) * n);
    }
    ve.randomInsideCircle = ur;
  });
  var je = re((ce) => {
    'use strict';
    Object.defineProperty(ce, '__esModule', { value: !0 });
    ce.gradientSample =
      ce.splineSample =
      ce.skewRelative =
      ce.skew =
      ce.range =
      ce.evaluateVariation =
        void 0;
    var tt = Re();
    function sr(h) {
      return Array.isArray(h) ? tt.pick(h) : typeof h == 'function' ? h() : h;
    }
    ce.evaluateVariation = sr;
    function fr(h, e) {
      return function () {
        return tt.randomRange(h, e);
      };
    }
    ce.range = fr;
    function cr(h, e) {
      return function () {
        return h + tt.randomRange(-e, e);
      };
    }
    ce.skew = cr;
    function hr(h, e) {
      return function () {
        return h * (1 + tt.randomRange(-e, e));
      };
    }
    ce.skewRelative = hr;
    function Yt(h) {
      return function () {
        return h.evaluate(Math.random());
      };
    }
    ce.splineSample = Yt;
    function dr(h) {
      return Yt(h);
    }
    ce.gradientSample = dr;
  });
  var Qt = re((nt) => {
    'use strict';
    Object.defineProperty(nt, '__esModule', { value: !0 });
    nt.getDefaultEmitterOptions = void 0;
    var Xt = bt();
    function vr() {
      return {
        duration: 5,
        loops: 1,
        useGravity: !0,
        maxParticles: 300,
        despawningRules: [Xt.despawningRules.lifetime, Xt.despawningRules.bounds],
        modules: [],
      };
    }
    nt.getDefaultEmitterOptions = vr;
  });
  var Be = re((pe) => {
    'use strict';
    Object.defineProperty(pe, '__esModule', { value: !0 });
    pe.circleSource = pe.rectSource = pe.mouseSource = pe.elementSource = pe.dynamicSource = void 0;
    var rt = ye(),
      kt = Re();
    function pr(h) {
      if (h instanceof HTMLElement) return Jt(h);
      if (h instanceof rt.Circle) return nn(h);
      if (h instanceof rt.Rect) return tn(h);
      if (h instanceof MouseEvent) return en(h);
      throw new Error("Cannot infer the source type of '" + h + "'.");
    }
    pe.dynamicSource = pr;
    function Jt(h) {
      return function () {
        return kt.randomInsideRect(rt.Rect.fromElement(h));
      };
    }
    pe.elementSource = Jt;
    function en(h) {
      return function () {
        return new rt.Vector(window.scrollX + h.clientX, window.scrollY + h.clientY);
      };
    }
    pe.mouseSource = en;
    function tn(h) {
      return function () {
        return kt.randomInsideRect(h);
      };
    }
    pe.rectSource = tn;
    function nn(h) {
      return function () {
        return kt.randomInsideCircle(h);
      };
    }
    pe.circleSource = nn;
  });
  var rn = re((it) => {
    'use strict';
    Object.defineProperty(it, '__esModule', { value: !0 });
    it.getDefaultEmissionOptions = void 0;
    var Tt = ye(),
      yr = Be();
    function mr() {
      return {
        rate: 10,
        angle: 0,
        bursts: [],
        sourceSampler: yr.rectSource(Tt.Rect.zero),
        initialLifetime: 5,
        initialSpeed: 5,
        initialSize: 1,
        initialRotation: Tt.Vector.zero,
        initialColor: Tt.Color.white,
      };
    }
    it.getDefaultEmissionOptions = mr;
  });
  var on = re((ot) => {
    'use strict';
    Object.defineProperty(ot, '__esModule', { value: !0 });
    ot.getDefaultRendererOptions = void 0;
    function gr() {
      return {
        shapeFactory: 'square',
        applyColor: br,
        applyOpacity: _r,
        applyLighting: Or,
        applyTransform: Er,
      };
    }
    ot.getDefaultRendererOptions = gr;
    function br(h, e) {
      var n = h.toHex();
      switch (e.nodeName.toLowerCase()) {
        case 'div':
          e.style.background = n;
          break;
        case 'svg':
          e.style.fill = e.style.color = n;
          break;
        default:
          e.style.color = n;
          break;
      }
    }
    function _r(h, e) {
      e.style.opacity = h.toString();
    }
    function Or(h, e) {
      e.style.filter = 'brightness(' + (0.5 + Math.abs(h)) + ')';
    }
    function Er(h, e) {
      e.style.transform =
        'translateX(' +
        (h.location.x - window.scrollX).toFixed(3) +
        'px) ' +
        ('translateY(' + (h.location.y - window.scrollY).toFixed(3) + 'px) ') +
        ('translateZ(' + h.location.z.toFixed(3) + 'px) ') +
        ('rotateX(' + h.rotation.x.toFixed(3) + 'deg) ') +
        ('rotateY(' + h.rotation.y.toFixed(3) + 'deg) ') +
        ('rotateZ(' + h.rotation.z.toFixed(3) + 'deg) ') +
        ('scale(' + h.size.toFixed(3) + ')');
    }
  });
  var ln = re((_e) => {
    'use strict';
    var wr =
        (_e && _e.__createBinding) ||
        (Object.create
          ? function (h, e, n, g) {
              g === void 0 && (g = n),
                Object.defineProperty(h, g, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }
          : function (h, e, n, g) {
              g === void 0 && (g = n), (h[g] = e[n]);
            }),
      Nt =
        (_e && _e.__exportStar) ||
        function (h, e) {
          for (var n in h)
            n !== 'default' && !Object.prototype.hasOwnProperty.call(e, n) && wr(e, h, n);
        };
    Object.defineProperty(_e, '__esModule', { value: !0 });
    Nt(Qt(), _e);
    Nt(rn(), _e);
    Nt(on(), _e);
  });
  var St = re((at) => {
    'use strict';
    Object.defineProperty(at, '__esModule', { value: !0 });
    at.Particle = void 0;
    var lt = ye(),
      Ar = Ve(),
      kr = (function () {
        function h(e) {
          var n = Ar.overrideDefaults(
            {
              lifetime: 0,
              size: 1,
              location: lt.Vector.zero,
              rotation: lt.Vector.zero,
              velocity: lt.Vector.zero,
              color: lt.Color.white,
              opacity: 1,
            },
            e
          );
          (this.id = Symbol()),
            (this.size = this.initialSize = n.size),
            (this.lifetime = this.initialLifetime = n.lifetime),
            (this.rotation = this.initialRotation = n.rotation),
            (this.location = n.location),
            (this.velocity = n.velocity),
            (this.color = n.color),
            (this.opacity = n.opacity);
        }
        return h;
      })();
    at.Particle = kr;
  });
  var qt = re((ut) => {
    'use strict';
    Object.defineProperty(ut, '__esModule', { value: !0 });
    ut.Emitter = void 0;
    var an = Ye(),
      Tr = De(),
      Ne = je(),
      xt = Ve(),
      Pt = ln(),
      Nr = St(),
      Sr = (function () {
        function h(e) {
          (this.particles = []),
            (this.currentLoop = 0),
            (this.durationTimer = 0),
            (this.emissionTimer = 0),
            (this.attemptedBurstIndices = []),
            (this.options = xt.overrideDefaults(
              Pt.getDefaultEmitterOptions(),
              e == null ? void 0 : e.emitterOptions
            )),
            (this.emission = xt.overrideDefaults(
              Pt.getDefaultEmissionOptions(),
              e == null ? void 0 : e.emissionOptions
            )),
            (this.renderer = xt.overrideDefaults(
              Pt.getDefaultRendererOptions(),
              e == null ? void 0 : e.rendererOptions
            ));
        }
        return (
          Object.defineProperty(h.prototype, 'isExpired', {
            get: function () {
              return this.options.loops >= 0 && this.currentLoop >= this.options.loops;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(h.prototype, 'canRemove', {
            get: function () {
              return this.particles.length === 0;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (h.prototype.clearParticles = function () {
            return this.particles.splice(0).length;
          }),
          (h.prototype.tick = function (e) {
            if (
              !this.isExpired &&
              ((this.durationTimer += e),
              this.durationTimer >= this.options.duration &&
                (this.currentLoop++, (this.durationTimer = 0), (this.attemptedBurstIndices = [])),
              !this.isExpired)
            ) {
              for (var n = 0, g = 0, _ = this.emission.bursts; g < _.length; g++) {
                var E = _[g];
                if (E.time <= this.durationTimer && !this.attemptedBurstIndices.includes(n)) {
                  for (var m = Ne.evaluateVariation(E.count), p = 0; p < m; p++)
                    this.emitParticle();
                  this.attemptedBurstIndices.push(n);
                }
                n++;
              }
              this.emissionTimer += e;
              for (var c = 1 / this.emission.rate; this.emissionTimer > c; )
                (this.emissionTimer -= c), this.emitParticle();
            }
            for (
              var o = function (r) {
                  var f = t.particles[r];
                  t.tickParticle(f, e),
                    t.options.despawningRules.some(function (u) {
                      return u(f);
                    }) && t.particles.splice(r, 1);
                },
                t = this,
                p = this.particles.length - 1;
              p >= 0;
              p--
            )
              o(p);
          }),
          (h.prototype.tickParticle = function (e, n) {
            (e.lifetime -= n),
              this.options.useGravity &&
                (e.velocity = e.velocity.add(an.Vector.up.scale(Tr.settings.gravity * n))),
              (e.location = e.location.add(e.velocity.scale(n)));
            for (var g = 0, _ = this.options.modules; g < _.length; g++) {
              var E = _[g];
              E(e);
            }
          }),
          (h.prototype.emitParticle = function () {
            var e = new Nr.Particle({
              location: this.emission.sourceSampler(),
              lifetime: Ne.evaluateVariation(this.emission.initialLifetime),
              velocity: an.Vector.from2dAngle(Ne.evaluateVariation(this.emission.angle)).scale(
                Ne.evaluateVariation(this.emission.initialSpeed)
              ),
              size: Ne.evaluateVariation(this.emission.initialSize),
              rotation: Ne.evaluateVariation(this.emission.initialRotation),
              color: Ne.evaluateVariation(this.emission.initialColor),
            });
            return (
              this.particles.push(e),
              this.particles.length > this.options.maxParticles && this.particles.shift(),
              e
            );
          }),
          h
        );
      })();
    ut.Emitter = Sr;
  });
  var Lt = re((Se) => {
    'use strict';
    Object.defineProperty(Se, '__esModule', { value: !0 });
    Se.resolveShapeFactory = Se.resolvableShapes = void 0;
    var xr = je();
    Se.resolvableShapes = {
      square: '<div style="height: 10px; width: 10px;"></div>',
      rectangle: '<div style="height: 6px; width: 10px;"></div>',
      circle:
        '<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1" fill="currentColor"/></svg>',
      roundedSquare: '<div style="height: 10px; width: 10px; border-radius: 3px;"></div>',
      roundedRectangle: '<div style="height: 6px; width: 10px; border-radius: 3px;"></div>',
      star: '<svg viewBox="0 0 512 512" width="15" height="15"><polygon fill="currentColor" points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842"/></svg>',
    };
    function Pr(h) {
      var e = xr.evaluateVariation(h);
      if (typeof e == 'string') {
        var n = Se.resolvableShapes[e];
        if (!n)
          throw new Error(
            "Failed to resolve shape key '" +
              e +
              "'. Did you forget to add it to the 'resolvableShapes' lookup?"
          );
        var g = document.createElement('div');
        return (g.innerHTML = n), g.firstElementChild;
      }
      return e;
    }
    Se.resolveShapeFactory = Pr;
  });
  var un = re((st) => {
    'use strict';
    Object.defineProperty(st, '__esModule', { value: !0 });
    st.Renderer = void 0;
    var qr = Me(),
      Lr = Ye(),
      Rr = wt(),
      jr = Lt(),
      Mr = ke(),
      Ir = (function () {
        function h() {
          (this.elements = new Map()),
            (this.light = new Lr.Vector(0, 0, 1)),
            (this.enabled = !0),
            (this.enabled =
              !qr.settings.respectReducedMotion ||
              !window.matchMedia('(prefers-reduced-motion)').matches);
        }
        return (
          (h.prototype.begin = function () {
            this.renderedParticles = [];
          }),
          (h.prototype.end = function () {
            for (var e = this.elements.keys(), n = e.next(); !n.done; ) {
              var g = n.value;
              this.renderedParticles.includes(g) ||
                (this.elements.get(g).remove(), this.elements.delete(g)),
                (n = e.next());
            }
            return this.renderedParticles.length;
          }),
          (h.prototype.renderParticle = function (e, n) {
            if (this.enabled) {
              var g = n.renderer,
                _ = this.elements.has(e.id)
                  ? this.elements.get(e.id)
                  : this.createParticleElement(e, g);
              if (
                (g.applyColor && g.applyColor(e.color, _),
                g.applyOpacity && g.applyOpacity(e.opacity, _),
                g.applyLighting)
              ) {
                var E = Mr.rotationToNormal(e.rotation),
                  m = E.dot(this.light);
                g.applyLighting(m, _);
              }
              g.applyTransform && g.applyTransform(e, _), this.renderedParticles.push(e.id);
            }
          }),
          (h.prototype.createParticleElement = function (e, n) {
            var g = jr.resolveShapeFactory(n.shapeFactory),
              _ = g.cloneNode(!0);
            return (
              (_.style.position = 'absolute'),
              this.elements.set(e.id, Rr.particleContainer.current.appendChild(_)),
              _
            );
          }),
          h
        );
      })();
    st.Renderer = Ir;
  });
  var sn = re((ft) => {
    'use strict';
    Object.defineProperty(ft, '__esModule', { value: !0 });
    ft.Scene = void 0;
    var Dr = $t(),
      Br = qt(),
      Cr = un(),
      Fr = (function () {
        function h() {
          (this.emitters = []),
            (this.debug = new Dr.Debug(this)),
            (this.renderer = new Cr.Renderer()),
            (this.scheduledTickId = void 0),
            (this.lastTickTimestamp = performance.now()),
            (this.tick = this.tick.bind(this)),
            this.scheduleTick();
        }
        return (
          (h.prototype.createEmitter = function (e) {
            var n = new Br.Emitter(e);
            return this.emitters.push(n), n;
          }),
          (h.prototype.clearEmitters = function () {
            return this.emitters.splice(0).length;
          }),
          (h.prototype.clearParticles = function () {
            return this.emitters.reduce(function (e, n) {
              return e + n.clearParticles();
            }, 0);
          }),
          (h.prototype.scheduleTick = function () {
            this.scheduledTickId = window.requestAnimationFrame(this.tick);
          }),
          (h.prototype.cancelTick = function () {
            window.cancelAnimationFrame(this.scheduledTickId);
          }),
          (h.prototype.tick = function (e) {
            var n = (e - this.lastTickTimestamp) / 1e3;
            try {
              for (var g = 0; g < this.emitters.length; g++) {
                var _ = this.emitters[g];
                _.tick(n), _.isExpired && _.canRemove && this.emitters.splice(g--, 1);
              }
            } catch (t) {
              console.error(
                `An error occurred while updating the scene's emitters:
"` +
                  t +
                  '"'
              );
            }
            try {
              this.renderer.begin();
              for (var E = 0, m = this.emitters; E < m.length; E++)
                for (var _ = m[E], p = 0, c = _.particles; p < c.length; p++) {
                  var o = c[p];
                  this.renderer.renderParticle(o, _);
                }
              this.renderer.end();
            } catch (t) {
              console.error(
                `An error occurred while rendering the scene's particles:
"` +
                  t +
                  '"'
              );
            }
            this.debug.tick(n), (this.lastTickTimestamp = e), this.scheduleTick();
          }),
          h
        );
      })();
    ft.Scene = Fr;
  });
  var ht = re((ct) => {
    'use strict';
    Object.defineProperty(ct, '__esModule', { value: !0 });
    ct.ModuleBuilder = void 0;
    var zr = ye(),
      Ur = (function () {
        function h() {
          (this.factor = 'lifetime'), (this.isRelative = !1);
        }
        return (
          (h.prototype.drive = function (e) {
            return (this.driverKey = e), this;
          }),
          (h.prototype.through = function (e) {
            return (this.factor = e), this;
          }),
          (h.prototype.by = function (e) {
            return (this.driverValue = e), this;
          }),
          (h.prototype.relative = function (e) {
            return e === void 0 && (e = !0), (this.isRelative = e), this;
          }),
          (h.prototype.build = function () {
            var e = this;
            if (typeof this.driverKey == 'undefined')
              throw new Error(
                "No driving key was provided in the module builder. Did you forget a '.drive()' call?"
              );
            if (typeof this.driverValue == 'undefined')
              throw new Error(
                "No driving value was provided in the module builder. Did you forget a '.through()' call?"
              );
            return function (n) {
              Rt(n, e.driverKey, Hr(e.driverValue, Vr(e.factor, n), n), e.isRelative);
            };
          }),
          h
        );
      })();
    ct.ModuleBuilder = Ur;
    function Hr(h, e, n) {
      return typeof h == 'object' && 'evaluate' in h
        ? h.evaluate(e)
        : typeof h == 'function'
        ? h(e, n)
        : h;
    }
    function Vr(h, e) {
      switch (h) {
        case 'lifetime':
          return e.initialLifetime - e.lifetime;
        case 'relativeLifetime':
          return (e.initialLifetime - e.lifetime) / e.initialLifetime;
        case 'size':
          return e.size;
        default:
          throw new Error("Invalid driving factor '" + h + "'.");
      }
    }
    function Rt(h, e, n, g) {
      if ((g === void 0 && (g = !1), !g)) h[e] = n;
      else {
        var _ = h['initial' + e[0].toUpperCase() + e.substr(1)];
        if (typeof _ == 'undefined')
          throw new Error(
            "Unable to use relative chaining with key '" + e + "'; no initial value exists."
          );
        if (n instanceof zr.Vector) Rt(h, e, _.add(n));
        else if (typeof n == 'number') Rt(h, e, _ * n);
        else
          throw new Error(
            "Unable to use relative chaining with particle key '" +
              e +
              "'; no relative operation for '" +
              n +
              "' could be inferred."
          );
      }
    }
  });
  var dn = re((dt) => {
    'use strict';
    Object.defineProperty(dt, '__esModule', { value: !0 });
    dt.confetti = void 0;
    var Kr = Me(),
      fn = ye(),
      cn = ht(),
      hn = Re(),
      Zr = Be(),
      Ie = je(),
      Gr = ke();
    function Wr(h, e) {
      var n = Gr.overrideDefaults(
          {
            count: Ie.range(20, 40),
            spread: Ie.range(35, 45),
            speed: Ie.range(300, 600),
            size: Ie.skew(1, 0.2),
            rotation: function () {
              return hn.randomUnitVector().scale(180);
            },
            color: function () {
              return fn.Color.fromHsl(hn.randomRange(0, 360), 100, 70);
            },
            modules: [
              new cn.ModuleBuilder()
                .drive('size')
                .by(function (_) {
                  return Math.min(1, _ * 3);
                })
                .relative()
                .build(),
              new cn.ModuleBuilder()
                .drive('rotation')
                .by(function (_) {
                  return new fn.Vector(140, 200, 260).scale(_);
                })
                .relative()
                .build(),
            ],
            shapes: ['square', 'circle'],
          },
          e
        ),
        g = Kr.scene.current.createEmitter({
          emitterOptions: { loops: 1, duration: 8, modules: n.modules },
          emissionOptions: {
            rate: 0,
            bursts: [{ time: 0, count: n.count }],
            sourceSampler: Zr.dynamicSource(h),
            angle: Ie.skew(-90, Ie.evaluateVariation(n.spread)),
            initialLifetime: 8,
            initialSpeed: n.speed,
            initialSize: n.size,
            initialRotation: n.rotation,
            initialColor: n.color,
          },
          rendererOptions: { shapeFactory: n.shapes },
        });
      return g;
    }
    dt.confetti = Wr;
  });
  var pn = re((vt) => {
    'use strict';
    Object.defineProperty(vt, '__esModule', { value: !0 });
    vt.sparkles = void 0;
    var $r = Me(),
      Ce = ye(),
      jt = ht(),
      vn = Re(),
      Yr = Be(),
      Fe = je(),
      Xr = ke();
    function Qr(h, e) {
      var n = Xr.overrideDefaults(
          {
            lifetime: Fe.range(1, 2),
            count: Fe.range(10, 20),
            speed: Fe.range(100, 200),
            size: Fe.range(0.8, 1.8),
            rotation: function () {
              return new Ce.Vector(0, 0, vn.randomRange(0, 360));
            },
            color: function () {
              return Ce.Color.fromHsl(50, 100, vn.randomRange(55, 85));
            },
            modules: [
              new jt.ModuleBuilder()
                .drive('rotation')
                .by(function (_) {
                  return new Ce.Vector(0, 0, 200).scale(_);
                })
                .relative()
                .build(),
              new jt.ModuleBuilder()
                .drive('size')
                .by(
                  new Ce.NumericSpline(
                    { time: 0, value: 0 },
                    { time: 0.3, value: 1 },
                    { time: 0.7, value: 1 },
                    { time: 1, value: 0 }
                  )
                )
                .through('relativeLifetime')
                .relative()
                .build(),
              new jt.ModuleBuilder()
                .drive('opacity')
                .by(
                  new Ce.NumericSpline(
                    { time: 0, value: 1 },
                    { time: 0.5, value: 1 },
                    { time: 1, value: 0 }
                  )
                )
                .through('relativeLifetime')
                .build(),
            ],
            shapes: 'star',
          },
          e
        ),
        g = $r.scene.current.createEmitter({
          emitterOptions: { loops: 1, duration: 3, useGravity: !1, modules: n.modules },
          emissionOptions: {
            rate: 0,
            bursts: [{ time: 0, count: n.count }],
            sourceSampler: Yr.dynamicSource(h),
            angle: Fe.range(0, 360),
            initialLifetime: n.lifetime,
            initialSpeed: n.speed,
            initialSize: n.size,
            initialRotation: n.rotation,
            initialColor: n.color,
          },
          rendererOptions: { applyLighting: void 0, shapeFactory: n.shapes },
        });
      return g;
    }
    vt.sparkles = Qr;
  });
  var mn = re((Ae) => {
    'use strict';
    var Jr =
        (Ae && Ae.__createBinding) ||
        (Object.create
          ? function (h, e, n, g) {
              g === void 0 && (g = n),
                Object.defineProperty(h, g, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }
          : function (h, e, n, g) {
              g === void 0 && (g = n), (h[g] = e[n]);
            }),
      yn =
        (Ae && Ae.__exportStar) ||
        function (h, e) {
          for (var n in h)
            n !== 'default' && !Object.prototype.hasOwnProperty.call(e, n) && Jr(e, h, n);
        };
    Object.defineProperty(Ae, '__esModule', { value: !0 });
    yn(dn(), Ae);
    yn(pn(), Ae);
  });
  var Me = re((ie) => {
    'use strict';
    var ei =
        (ie && ie.__createBinding) ||
        (Object.create
          ? function (h, e, n, g) {
              g === void 0 && (g = n),
                Object.defineProperty(h, g, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }
          : function (h, e, n, g) {
              g === void 0 && (g = n), (h[g] = e[n]);
            }),
      pt =
        (ie && ie.__exportStar) ||
        function (h, e) {
          for (var n in h)
            n !== 'default' && !Object.prototype.hasOwnProperty.call(e, n) && ei(e, h, n);
        };
    Object.defineProperty(ie, '__esModule', { value: !0 });
    ie.default =
      ie.forceInit =
      ie.util =
      ie.math =
      ie.random =
      ie.sources =
      ie.variation =
      ie.Emitter =
      ie.Particle =
      ie.settings =
      ie.scene =
        void 0;
    var ti = sn(),
      ni = ke();
    pt(ye(), ie);
    pt(mn(), ie);
    pt(Lt(), ie);
    pt(ht(), ie);
    ie.scene = new ni.Lazy(function () {
      if (typeof document == 'undefined' || typeof window == 'undefined')
        throw new Error(
          'It seems like you are trying to run party.js in a non-browser-like environment, which is not supported.'
        );
      return new ti.Scene();
    });
    var ri = De();
    Object.defineProperty(ie, 'settings', {
      enumerable: !0,
      get: function () {
        return ri.settings;
      },
    });
    var ii = St();
    Object.defineProperty(ie, 'Particle', {
      enumerable: !0,
      get: function () {
        return ii.Particle;
      },
    });
    var oi = qt();
    Object.defineProperty(ie, 'Emitter', {
      enumerable: !0,
      get: function () {
        return oi.Emitter;
      },
    });
    ie.variation = je();
    ie.sources = Be();
    ie.random = Re();
    ie.math = Ee();
    ie.util = ke();
    function li() {
      ie.scene.current;
    }
    ie.forceInit = li;
    ie.default = Me();
  });
  var bn = re((ze, Mt) => {
    (function (e, n) {
      typeof ze == 'object' && typeof Mt == 'object'
        ? (Mt.exports = n())
        : typeof define == 'function' && define.amd
        ? define([], n)
        : typeof ze == 'object'
        ? (ze.Quill = n())
        : (e.Quill = n());
    })(typeof self != 'undefined' ? self : ze, function () {
      return (function (h) {
        var e = {};
        function n(g) {
          if (e[g]) return e[g].exports;
          var _ = (e[g] = { i: g, l: !1, exports: {} });
          return h[g].call(_.exports, _, _.exports, n), (_.l = !0), _.exports;
        }
        return (
          (n.m = h),
          (n.c = e),
          (n.d = function (g, _, E) {
            n.o(g, _) || Object.defineProperty(g, _, { configurable: !1, enumerable: !0, get: E });
          }),
          (n.n = function (g) {
            var _ =
              g && g.__esModule
                ? function () {
                    return g.default;
                  }
                : function () {
                    return g;
                  };
            return n.d(_, 'a', _), _;
          }),
          (n.o = function (g, _) {
            return Object.prototype.hasOwnProperty.call(g, _);
          }),
          (n.p = ''),
          n((n.s = 109))
        );
      })([
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(17),
            _ = n(18),
            E = n(19),
            m = n(45),
            p = n(46),
            c = n(47),
            o = n(48),
            t = n(49),
            r = n(12),
            f = n(32),
            u = n(33),
            s = n(31),
            a = n(1),
            l = {
              Scope: a.Scope,
              create: a.create,
              find: a.find,
              query: a.query,
              register: a.register,
              Container: g.default,
              Format: _.default,
              Leaf: E.default,
              Embed: o.default,
              Scroll: m.default,
              Block: c.default,
              Inline: p.default,
              Text: t.default,
              Attributor: {
                Attribute: r.default,
                Class: f.default,
                Style: u.default,
                Store: s.default,
              },
            };
          e.default = l;
        },
        function (h, e, n) {
          'use strict';
          var g =
            (this && this.__extends) ||
            (function () {
              var s =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (a, l) {
                    a.__proto__ = l;
                  }) ||
                function (a, l) {
                  for (var d in l) l.hasOwnProperty(d) && (a[d] = l[d]);
                };
              return function (a, l) {
                s(a, l);
                function d() {
                  this.constructor = a;
                }
                a.prototype =
                  l === null ? Object.create(l) : ((d.prototype = l.prototype), new d());
              };
            })();
          Object.defineProperty(e, '__esModule', { value: !0 });
          var _ = (function (s) {
            g(a, s);
            function a(l) {
              var d = this;
              return (
                (l = '[Parchment] ' + l),
                (d = s.call(this, l) || this),
                (d.message = l),
                (d.name = d.constructor.name),
                d
              );
            }
            return a;
          })(Error);
          e.ParchmentError = _;
          var E = {},
            m = {},
            p = {},
            c = {};
          e.DATA_KEY = '__blot';
          var o;
          (function (s) {
            (s[(s.TYPE = 3)] = 'TYPE'),
              (s[(s.LEVEL = 12)] = 'LEVEL'),
              (s[(s.ATTRIBUTE = 13)] = 'ATTRIBUTE'),
              (s[(s.BLOT = 14)] = 'BLOT'),
              (s[(s.INLINE = 7)] = 'INLINE'),
              (s[(s.BLOCK = 11)] = 'BLOCK'),
              (s[(s.BLOCK_BLOT = 10)] = 'BLOCK_BLOT'),
              (s[(s.INLINE_BLOT = 6)] = 'INLINE_BLOT'),
              (s[(s.BLOCK_ATTRIBUTE = 9)] = 'BLOCK_ATTRIBUTE'),
              (s[(s.INLINE_ATTRIBUTE = 5)] = 'INLINE_ATTRIBUTE'),
              (s[(s.ANY = 15)] = 'ANY');
          })((o = e.Scope || (e.Scope = {})));
          function t(s, a) {
            var l = f(s);
            if (l == null) throw new _('Unable to create ' + s + ' blot');
            var d = l,
              i = s instanceof Node || s.nodeType === Node.TEXT_NODE ? s : d.create(a);
            return new d(i, a);
          }
          e.create = t;
          function r(s, a) {
            return (
              a === void 0 && (a = !1),
              s == null
                ? null
                : s[e.DATA_KEY] != null
                ? s[e.DATA_KEY].blot
                : a
                ? r(s.parentNode, a)
                : null
            );
          }
          e.find = r;
          function f(s, a) {
            a === void 0 && (a = o.ANY);
            var l;
            if (typeof s == 'string') l = c[s] || E[s];
            else if (s instanceof Text || s.nodeType === Node.TEXT_NODE) l = c.text;
            else if (typeof s == 'number')
              s & o.LEVEL & o.BLOCK ? (l = c.block) : s & o.LEVEL & o.INLINE && (l = c.inline);
            else if (s instanceof HTMLElement) {
              var d = (s.getAttribute('class') || '').split(/\s+/);
              for (var i in d) if (((l = m[d[i]]), l)) break;
              l = l || p[s.tagName];
            }
            return l == null ? null : a & o.LEVEL & l.scope && a & o.TYPE & l.scope ? l : null;
          }
          e.query = f;
          function u() {
            for (var s = [], a = 0; a < arguments.length; a++) s[a] = arguments[a];
            if (s.length > 1)
              return s.map(function (i) {
                return u(i);
              });
            var l = s[0];
            if (typeof l.blotName != 'string' && typeof l.attrName != 'string')
              throw new _('Invalid definition');
            if (l.blotName === 'abstract') throw new _('Cannot register abstract class');
            if (((c[l.blotName || l.attrName] = l), typeof l.keyName == 'string')) E[l.keyName] = l;
            else if ((l.className != null && (m[l.className] = l), l.tagName != null)) {
              Array.isArray(l.tagName)
                ? (l.tagName = l.tagName.map(function (i) {
                    return i.toUpperCase();
                  }))
                : (l.tagName = l.tagName.toUpperCase());
              var d = Array.isArray(l.tagName) ? l.tagName : [l.tagName];
              d.forEach(function (i) {
                (p[i] == null || l.className == null) && (p[i] = l);
              });
            }
            return l;
          }
          e.register = u;
        },
        function (h, e, n) {
          var g = n(51),
            _ = n(11),
            E = n(3),
            m = n(20),
            p = String.fromCharCode(0),
            c = function (o) {
              Array.isArray(o)
                ? (this.ops = o)
                : o != null && Array.isArray(o.ops)
                ? (this.ops = o.ops)
                : (this.ops = []);
            };
          (c.prototype.insert = function (o, t) {
            var r = {};
            return o.length === 0
              ? this
              : ((r.insert = o),
                t != null &&
                  typeof t == 'object' &&
                  Object.keys(t).length > 0 &&
                  (r.attributes = t),
                this.push(r));
          }),
            (c.prototype.delete = function (o) {
              return o <= 0 ? this : this.push({ delete: o });
            }),
            (c.prototype.retain = function (o, t) {
              if (o <= 0) return this;
              var r = { retain: o };
              return (
                t != null &&
                  typeof t == 'object' &&
                  Object.keys(t).length > 0 &&
                  (r.attributes = t),
                this.push(r)
              );
            }),
            (c.prototype.push = function (o) {
              var t = this.ops.length,
                r = this.ops[t - 1];
              if (((o = E(!0, {}, o)), typeof r == 'object')) {
                if (typeof o.delete == 'number' && typeof r.delete == 'number')
                  return (this.ops[t - 1] = { delete: r.delete + o.delete }), this;
                if (
                  typeof r.delete == 'number' &&
                  o.insert != null &&
                  ((t -= 1), (r = this.ops[t - 1]), typeof r != 'object')
                )
                  return this.ops.unshift(o), this;
                if (_(o.attributes, r.attributes)) {
                  if (typeof o.insert == 'string' && typeof r.insert == 'string')
                    return (
                      (this.ops[t - 1] = { insert: r.insert + o.insert }),
                      typeof o.attributes == 'object' &&
                        (this.ops[t - 1].attributes = o.attributes),
                      this
                    );
                  if (typeof o.retain == 'number' && typeof r.retain == 'number')
                    return (
                      (this.ops[t - 1] = { retain: r.retain + o.retain }),
                      typeof o.attributes == 'object' &&
                        (this.ops[t - 1].attributes = o.attributes),
                      this
                    );
                }
              }
              return t === this.ops.length ? this.ops.push(o) : this.ops.splice(t, 0, o), this;
            }),
            (c.prototype.chop = function () {
              var o = this.ops[this.ops.length - 1];
              return o && o.retain && !o.attributes && this.ops.pop(), this;
            }),
            (c.prototype.filter = function (o) {
              return this.ops.filter(o);
            }),
            (c.prototype.forEach = function (o) {
              this.ops.forEach(o);
            }),
            (c.prototype.map = function (o) {
              return this.ops.map(o);
            }),
            (c.prototype.partition = function (o) {
              var t = [],
                r = [];
              return (
                this.forEach(function (f) {
                  var u = o(f) ? t : r;
                  u.push(f);
                }),
                [t, r]
              );
            }),
            (c.prototype.reduce = function (o, t) {
              return this.ops.reduce(o, t);
            }),
            (c.prototype.changeLength = function () {
              return this.reduce(function (o, t) {
                return t.insert ? o + m.length(t) : t.delete ? o - t.delete : o;
              }, 0);
            }),
            (c.prototype.length = function () {
              return this.reduce(function (o, t) {
                return o + m.length(t);
              }, 0);
            }),
            (c.prototype.slice = function (o, t) {
              (o = o || 0), typeof t != 'number' && (t = 1 / 0);
              for (var r = [], f = m.iterator(this.ops), u = 0; u < t && f.hasNext(); ) {
                var s;
                u < o ? (s = f.next(o - u)) : ((s = f.next(t - u)), r.push(s)), (u += m.length(s));
              }
              return new c(r);
            }),
            (c.prototype.compose = function (o) {
              for (
                var t = m.iterator(this.ops), r = m.iterator(o.ops), f = new c();
                t.hasNext() || r.hasNext();

              )
                if (r.peekType() === 'insert') f.push(r.next());
                else if (t.peekType() === 'delete') f.push(t.next());
                else {
                  var u = Math.min(t.peekLength(), r.peekLength()),
                    s = t.next(u),
                    a = r.next(u);
                  if (typeof a.retain == 'number') {
                    var l = {};
                    typeof s.retain == 'number' ? (l.retain = u) : (l.insert = s.insert);
                    var d = m.attributes.compose(
                      s.attributes,
                      a.attributes,
                      typeof s.retain == 'number'
                    );
                    d && (l.attributes = d), f.push(l);
                  } else typeof a.delete == 'number' && typeof s.retain == 'number' && f.push(a);
                }
              return f.chop();
            }),
            (c.prototype.concat = function (o) {
              var t = new c(this.ops.slice());
              return (
                o.ops.length > 0 && (t.push(o.ops[0]), (t.ops = t.ops.concat(o.ops.slice(1)))), t
              );
            }),
            (c.prototype.diff = function (o, t) {
              if (this.ops === o.ops) return new c();
              var r = [this, o].map(function (l) {
                  return l
                    .map(function (d) {
                      if (d.insert != null) return typeof d.insert == 'string' ? d.insert : p;
                      var i = l === o ? 'on' : 'with';
                      throw new Error('diff() called ' + i + ' non-document');
                    })
                    .join('');
                }),
                f = new c(),
                u = g(r[0], r[1], t),
                s = m.iterator(this.ops),
                a = m.iterator(o.ops);
              return (
                u.forEach(function (l) {
                  for (var d = l[1].length; d > 0; ) {
                    var i = 0;
                    switch (l[0]) {
                      case g.INSERT:
                        (i = Math.min(a.peekLength(), d)), f.push(a.next(i));
                        break;
                      case g.DELETE:
                        (i = Math.min(d, s.peekLength())), s.next(i), f.delete(i);
                        break;
                      case g.EQUAL:
                        i = Math.min(s.peekLength(), a.peekLength(), d);
                        var v = s.next(i),
                          N = a.next(i);
                        _(v.insert, N.insert)
                          ? f.retain(i, m.attributes.diff(v.attributes, N.attributes))
                          : f.push(N).delete(i);
                        break;
                    }
                    d -= i;
                  }
                }),
                f.chop()
              );
            }),
            (c.prototype.eachLine = function (o, t) {
              t =
                t ||
                `
`;
              for (var r = m.iterator(this.ops), f = new c(), u = 0; r.hasNext(); ) {
                if (r.peekType() !== 'insert') return;
                var s = r.peek(),
                  a = m.length(s) - r.peekLength(),
                  l = typeof s.insert == 'string' ? s.insert.indexOf(t, a) - a : -1;
                if (l < 0) f.push(r.next());
                else if (l > 0) f.push(r.next(l));
                else {
                  if (o(f, r.next(1).attributes || {}, u) === !1) return;
                  (u += 1), (f = new c());
                }
              }
              f.length() > 0 && o(f, {}, u);
            }),
            (c.prototype.transform = function (o, t) {
              if (((t = !!t), typeof o == 'number')) return this.transformPosition(o, t);
              for (
                var r = m.iterator(this.ops), f = m.iterator(o.ops), u = new c();
                r.hasNext() || f.hasNext();

              )
                if (r.peekType() === 'insert' && (t || f.peekType() !== 'insert'))
                  u.retain(m.length(r.next()));
                else if (f.peekType() === 'insert') u.push(f.next());
                else {
                  var s = Math.min(r.peekLength(), f.peekLength()),
                    a = r.next(s),
                    l = f.next(s);
                  if (a.delete) continue;
                  l.delete
                    ? u.push(l)
                    : u.retain(s, m.attributes.transform(a.attributes, l.attributes, t));
                }
              return u.chop();
            }),
            (c.prototype.transformPosition = function (o, t) {
              t = !!t;
              for (var r = m.iterator(this.ops), f = 0; r.hasNext() && f <= o; ) {
                var u = r.peekLength(),
                  s = r.peekType();
                if ((r.next(), s === 'delete')) {
                  o -= Math.min(u, o - f);
                  continue;
                } else s === 'insert' && (f < o || !t) && (o += u);
                f += u;
              }
              return o;
            }),
            (h.exports = c);
        },
        function (h, e) {
          'use strict';
          var n = Object.prototype.hasOwnProperty,
            g = Object.prototype.toString,
            _ = function (p) {
              return typeof Array.isArray == 'function'
                ? Array.isArray(p)
                : g.call(p) === '[object Array]';
            },
            E = function (p) {
              if (!p || g.call(p) !== '[object Object]') return !1;
              var c = n.call(p, 'constructor'),
                o =
                  p.constructor &&
                  p.constructor.prototype &&
                  n.call(p.constructor.prototype, 'isPrototypeOf');
              if (p.constructor && !c && !o) return !1;
              var t;
              for (t in p);
              return typeof t == 'undefined' || n.call(p, t);
            };
          h.exports = function m() {
            var p,
              c,
              o,
              t,
              r,
              f,
              u = arguments[0],
              s = 1,
              a = arguments.length,
              l = !1;
            for (
              typeof u == 'boolean' && ((l = u), (u = arguments[1] || {}), (s = 2)),
                (u == null || (typeof u != 'object' && typeof u != 'function')) && (u = {});
              s < a;
              ++s
            )
              if (((p = arguments[s]), p != null))
                for (c in p)
                  (o = u[c]),
                    (t = p[c]),
                    u !== t &&
                      (l && t && (E(t) || (r = _(t)))
                        ? (r ? ((r = !1), (f = o && _(o) ? o : [])) : (f = o && E(o) ? o : {}),
                          (u[c] = m(l, f, t)))
                        : typeof t != 'undefined' && (u[c] = t));
            return u;
          };
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = e.BlockEmbed = e.bubbleFormats = void 0);
          var g = (function () {
              function y(b, T) {
                for (var x = 0; x < T.length; x++) {
                  var R = T[x];
                  (R.enumerable = R.enumerable || !1),
                    (R.configurable = !0),
                    'value' in R && (R.writable = !0),
                    Object.defineProperty(b, R.key, R);
                }
              }
              return function (b, T, x) {
                return T && y(b.prototype, T), x && y(b, x), b;
              };
            })(),
            _ = function y(b, T, x) {
              b === null && (b = Function.prototype);
              var R = Object.getOwnPropertyDescriptor(b, T);
              if (R === void 0) {
                var B = Object.getPrototypeOf(b);
                return B === null ? void 0 : y(B, T, x);
              } else {
                if ('value' in R) return R.value;
                var C = R.get;
                return C === void 0 ? void 0 : C.call(x);
              }
            },
            E = n(3),
            m = d(E),
            p = n(2),
            c = d(p),
            o = n(0),
            t = d(o),
            r = n(16),
            f = d(r),
            u = n(6),
            s = d(u),
            a = n(7),
            l = d(a);
          function d(y) {
            return y && y.__esModule ? y : { default: y };
          }
          function i(y, b) {
            if (!(y instanceof b)) throw new TypeError('Cannot call a class as a function');
          }
          function v(y, b) {
            if (!y)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return b && (typeof b == 'object' || typeof b == 'function') ? b : y;
          }
          function N(y, b) {
            if (typeof b != 'function' && b !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof b
              );
            (y.prototype = Object.create(b && b.prototype, {
              constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 },
            })),
              b && (Object.setPrototypeOf ? Object.setPrototypeOf(y, b) : (y.__proto__ = b));
          }
          var w = 1,
            A = (function (y) {
              N(b, y);
              function b() {
                return (
                  i(this, b),
                  v(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments))
                );
              }
              return (
                g(b, [
                  {
                    key: 'attach',
                    value: function () {
                      _(
                        b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                        'attach',
                        this
                      ).call(this),
                        (this.attributes = new t.default.Attributor.Store(this.domNode));
                    },
                  },
                  {
                    key: 'delta',
                    value: function () {
                      return new c.default().insert(
                        this.value(),
                        (0, m.default)(this.formats(), this.attributes.values())
                      );
                    },
                  },
                  {
                    key: 'format',
                    value: function (x, R) {
                      var B = t.default.query(x, t.default.Scope.BLOCK_ATTRIBUTE);
                      B != null && this.attributes.attribute(B, R);
                    },
                  },
                  {
                    key: 'formatAt',
                    value: function (x, R, B, C) {
                      this.format(B, C);
                    },
                  },
                  {
                    key: 'insertAt',
                    value: function (x, R, B) {
                      if (
                        typeof R == 'string' &&
                        R.endsWith(`
`)
                      ) {
                        var C = t.default.create(S.blotName);
                        this.parent.insertBefore(C, x === 0 ? this : this.next),
                          C.insertAt(0, R.slice(0, -1));
                      } else
                        _(
                          b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                          'insertAt',
                          this
                        ).call(this, x, R, B);
                    },
                  },
                ]),
                b
              );
            })(t.default.Embed);
          A.scope = t.default.Scope.BLOCK_BLOT;
          var S = (function (y) {
            N(b, y);
            function b(T) {
              i(this, b);
              var x = v(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, T));
              return (x.cache = {}), x;
            }
            return (
              g(b, [
                {
                  key: 'delta',
                  value: function () {
                    return (
                      this.cache.delta == null &&
                        (this.cache.delta = this.descendants(t.default.Leaf)
                          .reduce(function (x, R) {
                            return R.length() === 0 ? x : x.insert(R.value(), O(R));
                          }, new c.default())
                          .insert(
                            `
`,
                            O(this)
                          )),
                      this.cache.delta
                    );
                  },
                },
                {
                  key: 'deleteAt',
                  value: function (x, R) {
                    _(
                      b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                      'deleteAt',
                      this
                    ).call(this, x, R),
                      (this.cache = {});
                  },
                },
                {
                  key: 'formatAt',
                  value: function (x, R, B, C) {
                    R <= 0 ||
                      (t.default.query(B, t.default.Scope.BLOCK)
                        ? x + R === this.length() && this.format(B, C)
                        : _(
                            b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                            'formatAt',
                            this
                          ).call(this, x, Math.min(R, this.length() - x - 1), B, C),
                      (this.cache = {}));
                  },
                },
                {
                  key: 'insertAt',
                  value: function (x, R, B) {
                    if (B != null)
                      return _(
                        b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                        'insertAt',
                        this
                      ).call(this, x, R, B);
                    if (R.length !== 0) {
                      var C = R.split(`
`),
                        Z = C.shift();
                      Z.length > 0 &&
                        (x < this.length() - 1 || this.children.tail == null
                          ? _(
                              b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                              'insertAt',
                              this
                            ).call(this, Math.min(x, this.length() - 1), Z)
                          : this.children.tail.insertAt(this.children.tail.length(), Z),
                        (this.cache = {}));
                      var I = this;
                      C.reduce(function (j, k) {
                        return (I = I.split(j, !0)), I.insertAt(0, k), k.length;
                      }, x + Z.length);
                    }
                  },
                },
                {
                  key: 'insertBefore',
                  value: function (x, R) {
                    var B = this.children.head;
                    _(
                      b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                      'insertBefore',
                      this
                    ).call(this, x, R),
                      B instanceof f.default && B.remove(),
                      (this.cache = {});
                  },
                },
                {
                  key: 'length',
                  value: function () {
                    return (
                      this.cache.length == null &&
                        (this.cache.length =
                          _(
                            b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                            'length',
                            this
                          ).call(this) + w),
                      this.cache.length
                    );
                  },
                },
                {
                  key: 'moveChildren',
                  value: function (x, R) {
                    _(
                      b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                      'moveChildren',
                      this
                    ).call(this, x, R),
                      (this.cache = {});
                  },
                },
                {
                  key: 'optimize',
                  value: function (x) {
                    _(
                      b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                      'optimize',
                      this
                    ).call(this, x),
                      (this.cache = {});
                  },
                },
                {
                  key: 'path',
                  value: function (x) {
                    return _(
                      b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                      'path',
                      this
                    ).call(this, x, !0);
                  },
                },
                {
                  key: 'removeChild',
                  value: function (x) {
                    _(
                      b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                      'removeChild',
                      this
                    ).call(this, x),
                      (this.cache = {});
                  },
                },
                {
                  key: 'split',
                  value: function (x) {
                    var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                    if (R && (x === 0 || x >= this.length() - w)) {
                      var B = this.clone();
                      return x === 0
                        ? (this.parent.insertBefore(B, this), this)
                        : (this.parent.insertBefore(B, this.next), B);
                    } else {
                      var C = _(
                        b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                        'split',
                        this
                      ).call(this, x, R);
                      return (this.cache = {}), C;
                    }
                  },
                },
              ]),
              b
            );
          })(t.default.Block);
          (S.blotName = 'block'),
            (S.tagName = 'P'),
            (S.defaultChild = 'break'),
            (S.allowedChildren = [s.default, t.default.Embed, l.default]);
          function O(y) {
            var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return y == null ||
              (typeof y.formats == 'function' && (b = (0, m.default)(b, y.formats())),
              y.parent == null ||
                y.parent.blotName == 'scroll' ||
                y.parent.statics.scope !== y.statics.scope)
              ? b
              : O(y.parent, b);
          }
          (e.bubbleFormats = O), (e.BlockEmbed = A), (e.default = S);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = e.overload = e.expandConfig = void 0);
          var g =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (I) {
                    return typeof I;
                  }
                : function (I) {
                    return I &&
                      typeof Symbol == 'function' &&
                      I.constructor === Symbol &&
                      I !== Symbol.prototype
                      ? 'symbol'
                      : typeof I;
                  },
            _ = (function () {
              function I(j, k) {
                var q = [],
                  L = !0,
                  F = !1,
                  D = void 0;
                try {
                  for (
                    var P = j[Symbol.iterator](), M;
                    !(L = (M = P.next()).done) && (q.push(M.value), !(k && q.length === k));
                    L = !0
                  );
                } catch (z) {
                  (F = !0), (D = z);
                } finally {
                  try {
                    !L && P.return && P.return();
                  } finally {
                    if (F) throw D;
                  }
                }
                return q;
              }
              return function (j, k) {
                if (Array.isArray(j)) return j;
                if (Symbol.iterator in Object(j)) return I(j, k);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            E = (function () {
              function I(j, k) {
                for (var q = 0; q < k.length; q++) {
                  var L = k[q];
                  (L.enumerable = L.enumerable || !1),
                    (L.configurable = !0),
                    'value' in L && (L.writable = !0),
                    Object.defineProperty(j, L.key, L);
                }
              }
              return function (j, k, q) {
                return k && I(j.prototype, k), q && I(j, q), j;
              };
            })();
          n(50);
          var m = n(2),
            p = O(m),
            c = n(14),
            o = O(c),
            t = n(8),
            r = O(t),
            f = n(9),
            u = O(f),
            s = n(0),
            a = O(s),
            l = n(15),
            d = O(l),
            i = n(3),
            v = O(i),
            N = n(10),
            w = O(N),
            A = n(34),
            S = O(A);
          function O(I) {
            return I && I.__esModule ? I : { default: I };
          }
          function y(I, j, k) {
            return (
              j in I
                ? Object.defineProperty(I, j, {
                    value: k,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (I[j] = k),
              I
            );
          }
          function b(I, j) {
            if (!(I instanceof j)) throw new TypeError('Cannot call a class as a function');
          }
          var T = (0, w.default)('quill'),
            x = (function () {
              E(I, null, [
                {
                  key: 'debug',
                  value: function (k) {
                    k === !0 && (k = 'log'), w.default.level(k);
                  },
                },
                {
                  key: 'find',
                  value: function (k) {
                    return k.__quill || a.default.find(k);
                  },
                },
                {
                  key: 'import',
                  value: function (k) {
                    return (
                      this.imports[k] == null &&
                        T.error('Cannot import ' + k + '. Are you sure it was registered?'),
                      this.imports[k]
                    );
                  },
                },
                {
                  key: 'register',
                  value: function (k, q) {
                    var L = this,
                      F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                    if (typeof k != 'string') {
                      var D = k.attrName || k.blotName;
                      typeof D == 'string'
                        ? this.register('formats/' + D, k, q)
                        : Object.keys(k).forEach(function (P) {
                            L.register(P, k[P], q);
                          });
                    } else
                      this.imports[k] != null && !F && T.warn('Overwriting ' + k + ' with', q),
                        (this.imports[k] = q),
                        (k.startsWith('blots/') || k.startsWith('formats/')) &&
                        q.blotName !== 'abstract'
                          ? a.default.register(q)
                          : k.startsWith('modules') &&
                            typeof q.register == 'function' &&
                            q.register();
                  },
                },
              ]);
              function I(j) {
                var k = this,
                  q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (
                  (b(this, I),
                  (this.options = R(j, q)),
                  (this.container = this.options.container),
                  this.container == null)
                )
                  return T.error('Invalid Quill container', j);
                this.options.debug && I.debug(this.options.debug);
                var L = this.container.innerHTML.trim();
                this.container.classList.add('ql-container'),
                  (this.container.innerHTML = ''),
                  (this.container.__quill = this),
                  (this.root = this.addContainer('ql-editor')),
                  this.root.classList.add('ql-blank'),
                  this.root.setAttribute('data-gramm', !1),
                  (this.scrollingContainer = this.options.scrollingContainer || this.root),
                  (this.emitter = new r.default()),
                  (this.scroll = a.default.create(this.root, {
                    emitter: this.emitter,
                    whitelist: this.options.formats,
                  })),
                  (this.editor = new o.default(this.scroll)),
                  (this.selection = new d.default(this.scroll, this.emitter)),
                  (this.theme = new this.options.theme(this, this.options)),
                  (this.keyboard = this.theme.addModule('keyboard')),
                  (this.clipboard = this.theme.addModule('clipboard')),
                  (this.history = this.theme.addModule('history')),
                  this.theme.init(),
                  this.emitter.on(r.default.events.EDITOR_CHANGE, function (D) {
                    D === r.default.events.TEXT_CHANGE &&
                      k.root.classList.toggle('ql-blank', k.editor.isBlank());
                  }),
                  this.emitter.on(r.default.events.SCROLL_UPDATE, function (D, P) {
                    var M = k.selection.lastRange,
                      z = M && M.length === 0 ? M.index : void 0;
                    B.call(
                      k,
                      function () {
                        return k.editor.update(null, P, z);
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
                E(I, [
                  {
                    key: 'addContainer',
                    value: function (k) {
                      var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                      if (typeof k == 'string') {
                        var L = k;
                        (k = document.createElement('div')), k.classList.add(L);
                      }
                      return this.container.insertBefore(k, q), k;
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
                    value: function (k, q, L) {
                      var F = this,
                        D = C(k, q, L),
                        P = _(D, 4);
                      return (
                        (k = P[0]),
                        (q = P[1]),
                        (L = P[3]),
                        B.call(
                          this,
                          function () {
                            return F.editor.deleteText(k, q);
                          },
                          L,
                          k,
                          -1 * q
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
                      var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                      this.scroll.enable(k), this.container.classList.toggle('ql-disabled', !k);
                    },
                  },
                  {
                    key: 'focus',
                    value: function () {
                      var k = this.scrollingContainer.scrollTop;
                      this.selection.focus(),
                        (this.scrollingContainer.scrollTop = k),
                        this.scrollIntoView();
                    },
                  },
                  {
                    key: 'format',
                    value: function (k, q) {
                      var L = this,
                        F =
                          arguments.length > 2 && arguments[2] !== void 0
                            ? arguments[2]
                            : r.default.sources.API;
                      return B.call(
                        this,
                        function () {
                          var D = L.getSelection(!0),
                            P = new p.default();
                          if (D == null) return P;
                          if (a.default.query(k, a.default.Scope.BLOCK))
                            P = L.editor.formatLine(D.index, D.length, y({}, k, q));
                          else {
                            if (D.length === 0) return L.selection.format(k, q), P;
                            P = L.editor.formatText(D.index, D.length, y({}, k, q));
                          }
                          return L.setSelection(D, r.default.sources.SILENT), P;
                        },
                        F
                      );
                    },
                  },
                  {
                    key: 'formatLine',
                    value: function (k, q, L, F, D) {
                      var P = this,
                        M = void 0,
                        z = C(k, q, L, F, D),
                        U = _(z, 4);
                      return (
                        (k = U[0]),
                        (q = U[1]),
                        (M = U[2]),
                        (D = U[3]),
                        B.call(
                          this,
                          function () {
                            return P.editor.formatLine(k, q, M);
                          },
                          D,
                          k,
                          0
                        )
                      );
                    },
                  },
                  {
                    key: 'formatText',
                    value: function (k, q, L, F, D) {
                      var P = this,
                        M = void 0,
                        z = C(k, q, L, F, D),
                        U = _(z, 4);
                      return (
                        (k = U[0]),
                        (q = U[1]),
                        (M = U[2]),
                        (D = U[3]),
                        B.call(
                          this,
                          function () {
                            return P.editor.formatText(k, q, M);
                          },
                          D,
                          k,
                          0
                        )
                      );
                    },
                  },
                  {
                    key: 'getBounds',
                    value: function (k) {
                      var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                        L = void 0;
                      typeof k == 'number'
                        ? (L = this.selection.getBounds(k, q))
                        : (L = this.selection.getBounds(k.index, k.length));
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
                      var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                        q =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this.getLength() - k,
                        L = C(k, q),
                        F = _(L, 2);
                      return (k = F[0]), (q = F[1]), this.editor.getContents(k, q);
                    },
                  },
                  {
                    key: 'getFormat',
                    value: function () {
                      var k =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : this.getSelection(!0),
                        q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                      return typeof k == 'number'
                        ? this.editor.getFormat(k, q)
                        : this.editor.getFormat(k.index, k.length);
                    },
                  },
                  {
                    key: 'getIndex',
                    value: function (k) {
                      return k.offset(this.scroll);
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
                    value: function (k) {
                      return this.scroll.leaf(k);
                    },
                  },
                  {
                    key: 'getLine',
                    value: function (k) {
                      return this.scroll.line(k);
                    },
                  },
                  {
                    key: 'getLines',
                    value: function () {
                      var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                        q =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : Number.MAX_VALUE;
                      return typeof k != 'number'
                        ? this.scroll.lines(k.index, k.length)
                        : this.scroll.lines(k, q);
                    },
                  },
                  {
                    key: 'getModule',
                    value: function (k) {
                      return this.theme.modules[k];
                    },
                  },
                  {
                    key: 'getSelection',
                    value: function () {
                      var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                      return k && this.focus(), this.update(), this.selection.getRange()[0];
                    },
                  },
                  {
                    key: 'getText',
                    value: function () {
                      var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                        q =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this.getLength() - k,
                        L = C(k, q),
                        F = _(L, 2);
                      return (k = F[0]), (q = F[1]), this.editor.getText(k, q);
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
                    value: function (k, q, L) {
                      var F = this,
                        D =
                          arguments.length > 3 && arguments[3] !== void 0
                            ? arguments[3]
                            : I.sources.API;
                      return B.call(
                        this,
                        function () {
                          return F.editor.insertEmbed(k, q, L);
                        },
                        D,
                        k
                      );
                    },
                  },
                  {
                    key: 'insertText',
                    value: function (k, q, L, F, D) {
                      var P = this,
                        M = void 0,
                        z = C(k, 0, L, F, D),
                        U = _(z, 4);
                      return (
                        (k = U[0]),
                        (M = U[2]),
                        (D = U[3]),
                        B.call(
                          this,
                          function () {
                            return P.editor.insertText(k, q, M);
                          },
                          D,
                          k,
                          q.length
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
                    value: function (k, q, L) {
                      this.clipboard.dangerouslyPasteHTML(k, q, L);
                    },
                  },
                  {
                    key: 'removeFormat',
                    value: function (k, q, L) {
                      var F = this,
                        D = C(k, q, L),
                        P = _(D, 4);
                      return (
                        (k = P[0]),
                        (q = P[1]),
                        (L = P[3]),
                        B.call(
                          this,
                          function () {
                            return F.editor.removeFormat(k, q);
                          },
                          L,
                          k
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
                    value: function (k) {
                      var q = this,
                        L =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : r.default.sources.API;
                      return B.call(
                        this,
                        function () {
                          k = new p.default(k);
                          var F = q.getLength(),
                            D = q.editor.deleteText(0, F),
                            P = q.editor.applyDelta(k),
                            M = P.ops[P.ops.length - 1];
                          M != null &&
                            typeof M.insert == 'string' &&
                            M.insert[M.insert.length - 1] ===
                              `
` &&
                            (q.editor.deleteText(q.getLength() - 1, 1), P.delete(1));
                          var z = D.compose(P);
                          return z;
                        },
                        L
                      );
                    },
                  },
                  {
                    key: 'setSelection',
                    value: function (k, q, L) {
                      if (k == null) this.selection.setRange(null, q || I.sources.API);
                      else {
                        var F = C(k, q, L),
                          D = _(F, 4);
                        (k = D[0]),
                          (q = D[1]),
                          (L = D[3]),
                          this.selection.setRange(new l.Range(k, q), L),
                          L !== r.default.sources.SILENT &&
                            this.selection.scrollIntoView(this.scrollingContainer);
                      }
                    },
                  },
                  {
                    key: 'setText',
                    value: function (k) {
                      var q =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : r.default.sources.API,
                        L = new p.default().insert(k);
                      return this.setContents(L, q);
                    },
                  },
                  {
                    key: 'update',
                    value: function () {
                      var k =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : r.default.sources.USER,
                        q = this.scroll.update(k);
                      return this.selection.update(k), q;
                    },
                  },
                  {
                    key: 'updateContents',
                    value: function (k) {
                      var q = this,
                        L =
                          arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : r.default.sources.API;
                      return B.call(
                        this,
                        function () {
                          return (k = new p.default(k)), q.editor.applyDelta(k, L);
                        },
                        L,
                        !0
                      );
                    },
                  },
                ]),
                I
              );
            })();
          (x.DEFAULTS = {
            bounds: null,
            formats: null,
            modules: {},
            placeholder: '',
            readOnly: !1,
            scrollingContainer: null,
            strict: !0,
            theme: 'default',
          }),
            (x.events = r.default.events),
            (x.sources = r.default.sources),
            (x.version = '1.3.6'),
            (x.imports = {
              delta: p.default,
              parchment: a.default,
              'core/module': u.default,
              'core/theme': S.default,
            });
          function R(I, j) {
            if (
              ((j = (0, v.default)(
                !0,
                { container: I, modules: { clipboard: !0, keyboard: !0, history: !0 } },
                j
              )),
              !j.theme || j.theme === x.DEFAULTS.theme)
            )
              j.theme = S.default;
            else if (((j.theme = x.import('themes/' + j.theme)), j.theme == null))
              throw new Error('Invalid theme ' + j.theme + '. Did you register it?');
            var k = (0, v.default)(!0, {}, j.theme.DEFAULTS);
            [k, j].forEach(function (F) {
              (F.modules = F.modules || {}),
                Object.keys(F.modules).forEach(function (D) {
                  F.modules[D] === !0 && (F.modules[D] = {});
                });
            });
            var q = Object.keys(k.modules).concat(Object.keys(j.modules)),
              L = q.reduce(function (F, D) {
                var P = x.import('modules/' + D);
                return (
                  P == null
                    ? T.error('Cannot load ' + D + ' module. Are you sure you registered it?')
                    : (F[D] = P.DEFAULTS || {}),
                  F
                );
              }, {});
            return (
              j.modules != null &&
                j.modules.toolbar &&
                j.modules.toolbar.constructor !== Object &&
                (j.modules.toolbar = { container: j.modules.toolbar }),
              (j = (0, v.default)(!0, {}, x.DEFAULTS, { modules: L }, k, j)),
              ['bounds', 'container', 'scrollingContainer'].forEach(function (F) {
                typeof j[F] == 'string' && (j[F] = document.querySelector(j[F]));
              }),
              (j.modules = Object.keys(j.modules).reduce(function (F, D) {
                return j.modules[D] && (F[D] = j.modules[D]), F;
              }, {})),
              j
            );
          }
          function B(I, j, k, q) {
            if (this.options.strict && !this.isEnabled() && j === r.default.sources.USER)
              return new p.default();
            var L = k == null ? null : this.getSelection(),
              F = this.editor.delta,
              D = I();
            if (
              (L != null &&
                (k === !0 && (k = L.index),
                q == null ? (L = Z(L, D, j)) : q !== 0 && (L = Z(L, k, q, j)),
                this.setSelection(L, r.default.sources.SILENT)),
              D.length() > 0)
            ) {
              var P,
                M = [r.default.events.TEXT_CHANGE, D, F, j];
              if (
                ((P = this.emitter).emit.apply(P, [r.default.events.EDITOR_CHANGE].concat(M)),
                j !== r.default.sources.SILENT)
              ) {
                var z;
                (z = this.emitter).emit.apply(z, M);
              }
            }
            return D;
          }
          function C(I, j, k, q, L) {
            var F = {};
            return (
              typeof I.index == 'number' && typeof I.length == 'number'
                ? typeof j != 'number'
                  ? ((L = q), (q = k), (k = j), (j = I.length), (I = I.index))
                  : ((j = I.length), (I = I.index))
                : typeof j != 'number' && ((L = q), (q = k), (k = j), (j = 0)),
              (typeof k == 'undefined' ? 'undefined' : g(k)) === 'object'
                ? ((F = k), (L = q))
                : typeof k == 'string' && (q != null ? (F[k] = q) : (L = k)),
              (L = L || r.default.sources.API),
              [I, j, F, L]
            );
          }
          function Z(I, j, k, q) {
            if (I == null) return null;
            var L = void 0,
              F = void 0;
            if (j instanceof p.default) {
              var D = [I.index, I.index + I.length].map(function (U) {
                  return j.transformPosition(U, q !== r.default.sources.USER);
                }),
                P = _(D, 2);
              (L = P[0]), (F = P[1]);
            } else {
              var M = [I.index, I.index + I.length].map(function (U) {
                  return U < j || (U === j && q === r.default.sources.USER)
                    ? U
                    : k >= 0
                    ? U + k
                    : Math.max(j, U + k);
                }),
                z = _(M, 2);
              (L = z[0]), (F = z[1]);
            }
            return new l.Range(L, F - L);
          }
          (e.expandConfig = R), (e.overload = C), (e.default = x);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function s(a, l) {
                for (var d = 0; d < l.length; d++) {
                  var i = l[d];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    'value' in i && (i.writable = !0),
                    Object.defineProperty(a, i.key, i);
                }
              }
              return function (a, l, d) {
                return l && s(a.prototype, l), d && s(a, d), a;
              };
            })(),
            _ = function s(a, l, d) {
              a === null && (a = Function.prototype);
              var i = Object.getOwnPropertyDescriptor(a, l);
              if (i === void 0) {
                var v = Object.getPrototypeOf(a);
                return v === null ? void 0 : s(v, l, d);
              } else {
                if ('value' in i) return i.value;
                var N = i.get;
                return N === void 0 ? void 0 : N.call(d);
              }
            },
            E = n(7),
            m = o(E),
            p = n(0),
            c = o(p);
          function o(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function t(s, a) {
            if (!(s instanceof a)) throw new TypeError('Cannot call a class as a function');
          }
          function r(s, a) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == 'object' || typeof a == 'function') ? a : s;
          }
          function f(s, a) {
            if (typeof a != 'function' && a !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof a
              );
            (s.prototype = Object.create(a && a.prototype, {
              constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 },
            })),
              a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : (s.__proto__ = a));
          }
          var u = (function (s) {
            f(a, s);
            function a() {
              return (
                t(this, a),
                r(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
              );
            }
            return (
              g(
                a,
                [
                  {
                    key: 'formatAt',
                    value: function (d, i, v, N) {
                      if (
                        a.compare(this.statics.blotName, v) < 0 &&
                        c.default.query(v, c.default.Scope.BLOT)
                      ) {
                        var w = this.isolate(d, i);
                        N && w.wrap(v, N);
                      } else
                        _(
                          a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                          'formatAt',
                          this
                        ).call(this, d, i, v, N);
                    },
                  },
                  {
                    key: 'optimize',
                    value: function (d) {
                      if (
                        (_(
                          a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                          'optimize',
                          this
                        ).call(this, d),
                        this.parent instanceof a &&
                          a.compare(this.statics.blotName, this.parent.statics.blotName) > 0)
                      ) {
                        var i = this.parent.isolate(this.offset(), this.length());
                        this.moveChildren(i), i.wrap(this);
                      }
                    },
                  },
                ],
                [
                  {
                    key: 'compare',
                    value: function (d, i) {
                      var v = a.order.indexOf(d),
                        N = a.order.indexOf(i);
                      return v >= 0 || N >= 0 ? v - N : d === i ? 0 : d < i ? -1 : 1;
                    },
                  },
                ]
              ),
              a
            );
          })(c.default.Inline);
          (u.allowedChildren = [u, c.default.Embed, m.default]),
            (u.order = [
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
            (e.default = u);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(0),
            _ = E(g);
          function E(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function m(t, r) {
            if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
          }
          function p(t, r) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == 'object' || typeof r == 'function') ? r : t;
          }
          function c(t, r) {
            if (typeof r != 'function' && r !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof r
              );
            (t.prototype = Object.create(r && r.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
              r && (Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : (t.__proto__ = r));
          }
          var o = (function (t) {
            c(r, t);
            function r() {
              return (
                m(this, r),
                p(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
              );
            }
            return r;
          })(_.default.Text);
          e.default = o;
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function l(d, i) {
                for (var v = 0; v < i.length; v++) {
                  var N = i[v];
                  (N.enumerable = N.enumerable || !1),
                    (N.configurable = !0),
                    'value' in N && (N.writable = !0),
                    Object.defineProperty(d, N.key, N);
                }
              }
              return function (d, i, v) {
                return i && l(d.prototype, i), v && l(d, v), d;
              };
            })(),
            _ = function l(d, i, v) {
              d === null && (d = Function.prototype);
              var N = Object.getOwnPropertyDescriptor(d, i);
              if (N === void 0) {
                var w = Object.getPrototypeOf(d);
                return w === null ? void 0 : l(w, i, v);
              } else {
                if ('value' in N) return N.value;
                var A = N.get;
                return A === void 0 ? void 0 : A.call(v);
              }
            },
            E = n(54),
            m = o(E),
            p = n(10),
            c = o(p);
          function o(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function t(l, d) {
            if (!(l instanceof d)) throw new TypeError('Cannot call a class as a function');
          }
          function r(l, d) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return d && (typeof d == 'object' || typeof d == 'function') ? d : l;
          }
          function f(l, d) {
            if (typeof d != 'function' && d !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof d
              );
            (l.prototype = Object.create(d && d.prototype, {
              constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 },
            })),
              d && (Object.setPrototypeOf ? Object.setPrototypeOf(l, d) : (l.__proto__ = d));
          }
          var u = (0, c.default)('quill:events'),
            s = ['selectionchange', 'mousedown', 'mouseup', 'click'];
          s.forEach(function (l) {
            document.addEventListener(l, function () {
              for (var d = arguments.length, i = Array(d), v = 0; v < d; v++) i[v] = arguments[v];
              [].slice.call(document.querySelectorAll('.ql-container')).forEach(function (N) {
                if (N.__quill && N.__quill.emitter) {
                  var w;
                  (w = N.__quill.emitter).handleDOM.apply(w, i);
                }
              });
            });
          });
          var a = (function (l) {
            f(d, l);
            function d() {
              t(this, d);
              var i = r(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this));
              return (i.listeners = {}), i.on('error', u.error), i;
            }
            return (
              g(d, [
                {
                  key: 'emit',
                  value: function () {
                    u.log.apply(u, arguments),
                      _(
                        d.prototype.__proto__ || Object.getPrototypeOf(d.prototype),
                        'emit',
                        this
                      ).apply(this, arguments);
                  },
                },
                {
                  key: 'handleDOM',
                  value: function (v) {
                    for (var N = arguments.length, w = Array(N > 1 ? N - 1 : 0), A = 1; A < N; A++)
                      w[A - 1] = arguments[A];
                    (this.listeners[v.type] || []).forEach(function (S) {
                      var O = S.node,
                        y = S.handler;
                      (v.target === O || O.contains(v.target)) && y.apply(void 0, [v].concat(w));
                    });
                  },
                },
                {
                  key: 'listenDOM',
                  value: function (v, N, w) {
                    this.listeners[v] || (this.listeners[v] = []),
                      this.listeners[v].push({ node: N, handler: w });
                  },
                },
              ]),
              d
            );
          })(m.default);
          (a.events = {
            EDITOR_CHANGE: 'editor-change',
            SCROLL_BEFORE_UPDATE: 'scroll-before-update',
            SCROLL_OPTIMIZE: 'scroll-optimize',
            SCROLL_UPDATE: 'scroll-update',
            SELECTION_CHANGE: 'selection-change',
            TEXT_CHANGE: 'text-change',
          }),
            (a.sources = { API: 'api', SILENT: 'silent', USER: 'user' }),
            (e.default = a);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          function g(E, m) {
            if (!(E instanceof m)) throw new TypeError('Cannot call a class as a function');
          }
          var _ = function E(m) {
            var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            g(this, E), (this.quill = m), (this.options = p);
          };
          (_.DEFAULTS = {}), (e.default = _);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = ['error', 'warn', 'log', 'info'],
            _ = 'warn';
          function E(p) {
            if (g.indexOf(p) <= g.indexOf(_)) {
              for (var c, o = arguments.length, t = Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
                t[r - 1] = arguments[r];
              (c = console)[p].apply(c, t);
            }
          }
          function m(p) {
            return g.reduce(function (c, o) {
              return (c[o] = E.bind(console, o, p)), c;
            }, {});
          }
          (E.level = m.level =
            function (p) {
              _ = p;
            }),
            (e.default = m);
        },
        function (h, e, n) {
          var g = Array.prototype.slice,
            _ = n(52),
            E = n(53),
            m = (h.exports = function (t, r, f) {
              return (
                f || (f = {}),
                t === r
                  ? !0
                  : t instanceof Date && r instanceof Date
                  ? t.getTime() === r.getTime()
                  : !t || !r || (typeof t != 'object' && typeof r != 'object')
                  ? f.strict
                    ? t === r
                    : t == r
                  : o(t, r, f)
              );
            });
          function p(t) {
            return t == null;
          }
          function c(t) {
            return !(
              !t ||
              typeof t != 'object' ||
              typeof t.length != 'number' ||
              typeof t.copy != 'function' ||
              typeof t.slice != 'function' ||
              (t.length > 0 && typeof t[0] != 'number')
            );
          }
          function o(t, r, f) {
            var u, s;
            if (p(t) || p(r) || t.prototype !== r.prototype) return !1;
            if (E(t)) return E(r) ? ((t = g.call(t)), (r = g.call(r)), m(t, r, f)) : !1;
            if (c(t)) {
              if (!c(r) || t.length !== r.length) return !1;
              for (u = 0; u < t.length; u++) if (t[u] !== r[u]) return !1;
              return !0;
            }
            try {
              var a = _(t),
                l = _(r);
            } catch {
              return !1;
            }
            if (a.length != l.length) return !1;
            for (a.sort(), l.sort(), u = a.length - 1; u >= 0; u--) if (a[u] != l[u]) return !1;
            for (u = a.length - 1; u >= 0; u--) if (((s = a[u]), !m(t[s], r[s], f))) return !1;
            return typeof t == typeof r;
          }
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(1),
            _ = (function () {
              function E(m, p, c) {
                c === void 0 && (c = {}), (this.attrName = m), (this.keyName = p);
                var o = g.Scope.TYPE & g.Scope.ATTRIBUTE;
                c.scope != null
                  ? (this.scope = (c.scope & g.Scope.LEVEL) | o)
                  : (this.scope = g.Scope.ATTRIBUTE),
                  c.whitelist != null && (this.whitelist = c.whitelist);
              }
              return (
                (E.keys = function (m) {
                  return [].map.call(m.attributes, function (p) {
                    return p.name;
                  });
                }),
                (E.prototype.add = function (m, p) {
                  return this.canAdd(m, p) ? (m.setAttribute(this.keyName, p), !0) : !1;
                }),
                (E.prototype.canAdd = function (m, p) {
                  var c = g.query(m, g.Scope.BLOT & (this.scope | g.Scope.TYPE));
                  return c == null
                    ? !1
                    : this.whitelist == null
                    ? !0
                    : typeof p == 'string'
                    ? this.whitelist.indexOf(p.replace(/["']/g, '')) > -1
                    : this.whitelist.indexOf(p) > -1;
                }),
                (E.prototype.remove = function (m) {
                  m.removeAttribute(this.keyName);
                }),
                (E.prototype.value = function (m) {
                  var p = m.getAttribute(this.keyName);
                  return this.canAdd(m, p) && p ? p : '';
                }),
                E
              );
            })();
          e.default = _;
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = e.Code = void 0);
          var g = (function () {
              function A(S, O) {
                var y = [],
                  b = !0,
                  T = !1,
                  x = void 0;
                try {
                  for (
                    var R = S[Symbol.iterator](), B;
                    !(b = (B = R.next()).done) && (y.push(B.value), !(O && y.length === O));
                    b = !0
                  );
                } catch (C) {
                  (T = !0), (x = C);
                } finally {
                  try {
                    !b && R.return && R.return();
                  } finally {
                    if (T) throw x;
                  }
                }
                return y;
              }
              return function (S, O) {
                if (Array.isArray(S)) return S;
                if (Symbol.iterator in Object(S)) return A(S, O);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            _ = (function () {
              function A(S, O) {
                for (var y = 0; y < O.length; y++) {
                  var b = O[y];
                  (b.enumerable = b.enumerable || !1),
                    (b.configurable = !0),
                    'value' in b && (b.writable = !0),
                    Object.defineProperty(S, b.key, b);
                }
              }
              return function (S, O, y) {
                return O && A(S.prototype, O), y && A(S, y), S;
              };
            })(),
            E = function A(S, O, y) {
              S === null && (S = Function.prototype);
              var b = Object.getOwnPropertyDescriptor(S, O);
              if (b === void 0) {
                var T = Object.getPrototypeOf(S);
                return T === null ? void 0 : A(T, O, y);
              } else {
                if ('value' in b) return b.value;
                var x = b.get;
                return x === void 0 ? void 0 : x.call(y);
              }
            },
            m = n(2),
            p = l(m),
            c = n(0),
            o = l(c),
            t = n(4),
            r = l(t),
            f = n(6),
            u = l(f),
            s = n(7),
            a = l(s);
          function l(A) {
            return A && A.__esModule ? A : { default: A };
          }
          function d(A, S) {
            if (!(A instanceof S)) throw new TypeError('Cannot call a class as a function');
          }
          function i(A, S) {
            if (!A)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return S && (typeof S == 'object' || typeof S == 'function') ? S : A;
          }
          function v(A, S) {
            if (typeof S != 'function' && S !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof S
              );
            (A.prototype = Object.create(S && S.prototype, {
              constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 },
            })),
              S && (Object.setPrototypeOf ? Object.setPrototypeOf(A, S) : (A.__proto__ = S));
          }
          var N = (function (A) {
            v(S, A);
            function S() {
              return (
                d(this, S),
                i(this, (S.__proto__ || Object.getPrototypeOf(S)).apply(this, arguments))
              );
            }
            return S;
          })(u.default);
          (N.blotName = 'code'), (N.tagName = 'CODE');
          var w = (function (A) {
            v(S, A);
            function S() {
              return (
                d(this, S),
                i(this, (S.__proto__ || Object.getPrototypeOf(S)).apply(this, arguments))
              );
            }
            return (
              _(
                S,
                [
                  {
                    key: 'delta',
                    value: function () {
                      var y = this,
                        b = this.domNode.textContent;
                      return (
                        b.endsWith(`
`) && (b = b.slice(0, -1)),
                        b
                          .split(
                            `
`
                          )
                          .reduce(function (T, x) {
                            return T.insert(x).insert(
                              `
`,
                              y.formats()
                            );
                          }, new p.default())
                      );
                    },
                  },
                  {
                    key: 'format',
                    value: function (y, b) {
                      if (!(y === this.statics.blotName && b)) {
                        var T = this.descendant(a.default, this.length() - 1),
                          x = g(T, 1),
                          R = x[0];
                        R != null && R.deleteAt(R.length() - 1, 1),
                          E(
                            S.prototype.__proto__ || Object.getPrototypeOf(S.prototype),
                            'format',
                            this
                          ).call(this, y, b);
                      }
                    },
                  },
                  {
                    key: 'formatAt',
                    value: function (y, b, T, x) {
                      if (
                        b !== 0 &&
                        !(
                          o.default.query(T, o.default.Scope.BLOCK) == null ||
                          (T === this.statics.blotName && x === this.statics.formats(this.domNode))
                        )
                      ) {
                        var R = this.newlineIndex(y);
                        if (!(R < 0 || R >= y + b)) {
                          var B = this.newlineIndex(y, !0) + 1,
                            C = R - B + 1,
                            Z = this.isolate(B, C),
                            I = Z.next;
                          Z.format(T, x), I instanceof S && I.formatAt(0, y - B + b - C, T, x);
                        }
                      }
                    },
                  },
                  {
                    key: 'insertAt',
                    value: function (y, b, T) {
                      if (T == null) {
                        var x = this.descendant(a.default, y),
                          R = g(x, 2),
                          B = R[0],
                          C = R[1];
                        B.insertAt(C, b);
                      }
                    },
                  },
                  {
                    key: 'length',
                    value: function () {
                      var y = this.domNode.textContent.length;
                      return this.domNode.textContent.endsWith(`
`)
                        ? y
                        : y + 1;
                    },
                  },
                  {
                    key: 'newlineIndex',
                    value: function (y) {
                      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                      if (b)
                        return this.domNode.textContent.slice(0, y).lastIndexOf(`
`);
                      var T = this.domNode.textContent.slice(y).indexOf(`
`);
                      return T > -1 ? y + T : -1;
                    },
                  },
                  {
                    key: 'optimize',
                    value: function (y) {
                      this.domNode.textContent.endsWith(`
`) ||
                        this.appendChild(
                          o.default.create(
                            'text',
                            `
`
                          )
                        ),
                        E(
                          S.prototype.__proto__ || Object.getPrototypeOf(S.prototype),
                          'optimize',
                          this
                        ).call(this, y);
                      var b = this.next;
                      b != null &&
                        b.prev === this &&
                        b.statics.blotName === this.statics.blotName &&
                        this.statics.formats(this.domNode) === b.statics.formats(b.domNode) &&
                        (b.optimize(y), b.moveChildren(this), b.remove());
                    },
                  },
                  {
                    key: 'replace',
                    value: function (y) {
                      E(
                        S.prototype.__proto__ || Object.getPrototypeOf(S.prototype),
                        'replace',
                        this
                      ).call(this, y),
                        [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (b) {
                          var T = o.default.find(b);
                          T == null
                            ? b.parentNode.removeChild(b)
                            : T instanceof o.default.Embed
                            ? T.remove()
                            : T.unwrap();
                        });
                    },
                  },
                ],
                [
                  {
                    key: 'create',
                    value: function (y) {
                      var b = E(S.__proto__ || Object.getPrototypeOf(S), 'create', this).call(
                        this,
                        y
                      );
                      return b.setAttribute('spellcheck', !1), b;
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
              S
            );
          })(r.default);
          (w.blotName = 'code-block'),
            (w.tagName = 'PRE'),
            (w.TAB = '  '),
            (e.Code = N),
            (e.default = w);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (I) {
                    return typeof I;
                  }
                : function (I) {
                    return I &&
                      typeof Symbol == 'function' &&
                      I.constructor === Symbol &&
                      I !== Symbol.prototype
                      ? 'symbol'
                      : typeof I;
                  },
            _ = (function () {
              function I(j, k) {
                var q = [],
                  L = !0,
                  F = !1,
                  D = void 0;
                try {
                  for (
                    var P = j[Symbol.iterator](), M;
                    !(L = (M = P.next()).done) && (q.push(M.value), !(k && q.length === k));
                    L = !0
                  );
                } catch (z) {
                  (F = !0), (D = z);
                } finally {
                  try {
                    !L && P.return && P.return();
                  } finally {
                    if (F) throw D;
                  }
                }
                return q;
              }
              return function (j, k) {
                if (Array.isArray(j)) return j;
                if (Symbol.iterator in Object(j)) return I(j, k);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            E = (function () {
              function I(j, k) {
                for (var q = 0; q < k.length; q++) {
                  var L = k[q];
                  (L.enumerable = L.enumerable || !1),
                    (L.configurable = !0),
                    'value' in L && (L.writable = !0),
                    Object.defineProperty(j, L.key, L);
                }
              }
              return function (j, k, q) {
                return k && I(j.prototype, k), q && I(j, q), j;
              };
            })(),
            m = n(2),
            p = b(m),
            c = n(20),
            o = b(c),
            t = n(0),
            r = b(t),
            f = n(13),
            u = b(f),
            s = n(24),
            a = b(s),
            l = n(4),
            d = b(l),
            i = n(16),
            v = b(i),
            N = n(21),
            w = b(N),
            A = n(11),
            S = b(A),
            O = n(3),
            y = b(O);
          function b(I) {
            return I && I.__esModule ? I : { default: I };
          }
          function T(I, j, k) {
            return (
              j in I
                ? Object.defineProperty(I, j, {
                    value: k,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (I[j] = k),
              I
            );
          }
          function x(I, j) {
            if (!(I instanceof j)) throw new TypeError('Cannot call a class as a function');
          }
          var R = /^[ -~]*$/,
            B = (function () {
              function I(j) {
                x(this, I), (this.scroll = j), (this.delta = this.getDelta());
              }
              return (
                E(I, [
                  {
                    key: 'applyDelta',
                    value: function (k) {
                      var q = this,
                        L = !1;
                      this.scroll.update();
                      var F = this.scroll.length();
                      return (
                        this.scroll.batchStart(),
                        (k = Z(k)),
                        k.reduce(function (D, P) {
                          var M = P.retain || P.delete || P.insert.length || 1,
                            z = P.attributes || {};
                          if (P.insert != null) {
                            if (typeof P.insert == 'string') {
                              var U = P.insert;
                              U.endsWith(`
`) &&
                                L &&
                                ((L = !1), (U = U.slice(0, -1))),
                                D >= F &&
                                  !U.endsWith(`
`) &&
                                  (L = !0),
                                q.scroll.insertAt(D, U);
                              var K = q.scroll.line(D),
                                Y = _(K, 2),
                                X = Y[0],
                                Q = Y[1],
                                ne = (0, y.default)({}, (0, l.bubbleFormats)(X));
                              if (X instanceof d.default) {
                                var oe = X.descendant(r.default.Leaf, Q),
                                  fe = _(oe, 1),
                                  ue = fe[0];
                                ne = (0, y.default)(ne, (0, l.bubbleFormats)(ue));
                              }
                              z = o.default.attributes.diff(ne, z) || {};
                            } else if (g(P.insert) === 'object') {
                              var H = Object.keys(P.insert)[0];
                              if (H == null) return D;
                              q.scroll.insertAt(D, H, P.insert[H]);
                            }
                            F += M;
                          }
                          return (
                            Object.keys(z).forEach(function (V) {
                              q.scroll.formatAt(D, M, V, z[V]);
                            }),
                            D + M
                          );
                        }, 0),
                        k.reduce(function (D, P) {
                          return typeof P.delete == 'number'
                            ? (q.scroll.deleteAt(D, P.delete), D)
                            : D + (P.retain || P.insert.length || 1);
                        }, 0),
                        this.scroll.batchEnd(),
                        this.update(k)
                      );
                    },
                  },
                  {
                    key: 'deleteText',
                    value: function (k, q) {
                      return (
                        this.scroll.deleteAt(k, q), this.update(new p.default().retain(k).delete(q))
                      );
                    },
                  },
                  {
                    key: 'formatLine',
                    value: function (k, q) {
                      var L = this,
                        F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                      return (
                        this.scroll.update(),
                        Object.keys(F).forEach(function (D) {
                          if (!(L.scroll.whitelist != null && !L.scroll.whitelist[D])) {
                            var P = L.scroll.lines(k, Math.max(q, 1)),
                              M = q;
                            P.forEach(function (z) {
                              var U = z.length();
                              if (!(z instanceof u.default)) z.format(D, F[D]);
                              else {
                                var K = k - z.offset(L.scroll),
                                  Y = z.newlineIndex(K + M) - K + 1;
                                z.formatAt(K, Y, D, F[D]);
                              }
                              M -= U;
                            });
                          }
                        }),
                        this.scroll.optimize(),
                        this.update(new p.default().retain(k).retain(q, (0, w.default)(F)))
                      );
                    },
                  },
                  {
                    key: 'formatText',
                    value: function (k, q) {
                      var L = this,
                        F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                      return (
                        Object.keys(F).forEach(function (D) {
                          L.scroll.formatAt(k, q, D, F[D]);
                        }),
                        this.update(new p.default().retain(k).retain(q, (0, w.default)(F)))
                      );
                    },
                  },
                  {
                    key: 'getContents',
                    value: function (k, q) {
                      return this.delta.slice(k, k + q);
                    },
                  },
                  {
                    key: 'getDelta',
                    value: function () {
                      return this.scroll.lines().reduce(function (k, q) {
                        return k.concat(q.delta());
                      }, new p.default());
                    },
                  },
                  {
                    key: 'getFormat',
                    value: function (k) {
                      var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                        L = [],
                        F = [];
                      q === 0
                        ? this.scroll.path(k).forEach(function (P) {
                            var M = _(P, 1),
                              z = M[0];
                            z instanceof d.default
                              ? L.push(z)
                              : z instanceof r.default.Leaf && F.push(z);
                          })
                        : ((L = this.scroll.lines(k, q)),
                          (F = this.scroll.descendants(r.default.Leaf, k, q)));
                      var D = [L, F].map(function (P) {
                        if (P.length === 0) return {};
                        for (var M = (0, l.bubbleFormats)(P.shift()); Object.keys(M).length > 0; ) {
                          var z = P.shift();
                          if (z == null) return M;
                          M = C((0, l.bubbleFormats)(z), M);
                        }
                        return M;
                      });
                      return y.default.apply(y.default, D);
                    },
                  },
                  {
                    key: 'getText',
                    value: function (k, q) {
                      return this.getContents(k, q)
                        .filter(function (L) {
                          return typeof L.insert == 'string';
                        })
                        .map(function (L) {
                          return L.insert;
                        })
                        .join('');
                    },
                  },
                  {
                    key: 'insertEmbed',
                    value: function (k, q, L) {
                      return (
                        this.scroll.insertAt(k, q, L),
                        this.update(new p.default().retain(k).insert(T({}, q, L)))
                      );
                    },
                  },
                  {
                    key: 'insertText',
                    value: function (k, q) {
                      var L = this,
                        F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                      return (
                        (q = q
                          .replace(
                            /\r\n/g,
                            `
`
                          )
                          .replace(
                            /\r/g,
                            `
`
                          )),
                        this.scroll.insertAt(k, q),
                        Object.keys(F).forEach(function (D) {
                          L.scroll.formatAt(k, q.length, D, F[D]);
                        }),
                        this.update(new p.default().retain(k).insert(q, (0, w.default)(F)))
                      );
                    },
                  },
                  {
                    key: 'isBlank',
                    value: function () {
                      if (this.scroll.children.length == 0) return !0;
                      if (this.scroll.children.length > 1) return !1;
                      var k = this.scroll.children.head;
                      return k.statics.blotName !== d.default.blotName || k.children.length > 1
                        ? !1
                        : k.children.head instanceof v.default;
                    },
                  },
                  {
                    key: 'removeFormat',
                    value: function (k, q) {
                      var L = this.getText(k, q),
                        F = this.scroll.line(k + q),
                        D = _(F, 2),
                        P = D[0],
                        M = D[1],
                        z = 0,
                        U = new p.default();
                      P != null &&
                        (P instanceof u.default
                          ? (z = P.newlineIndex(M) - M + 1)
                          : (z = P.length() - M),
                        (U = P.delta().slice(M, M + z - 1).insert(`
`)));
                      var K = this.getContents(k, q + z),
                        Y = K.diff(new p.default().insert(L).concat(U)),
                        X = new p.default().retain(k).concat(Y);
                      return this.applyDelta(X);
                    },
                  },
                  {
                    key: 'update',
                    value: function (k) {
                      var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
                        L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0,
                        F = this.delta;
                      if (
                        q.length === 1 &&
                        q[0].type === 'characterData' &&
                        q[0].target.data.match(R) &&
                        r.default.find(q[0].target)
                      ) {
                        var D = r.default.find(q[0].target),
                          P = (0, l.bubbleFormats)(D),
                          M = D.offset(this.scroll),
                          z = q[0].oldValue.replace(a.default.CONTENTS, ''),
                          U = new p.default().insert(z),
                          K = new p.default().insert(D.value()),
                          Y = new p.default().retain(M).concat(U.diff(K, L));
                        (k = Y.reduce(function (X, Q) {
                          return Q.insert ? X.insert(Q.insert, P) : X.push(Q);
                        }, new p.default())),
                          (this.delta = F.compose(k));
                      } else
                        (this.delta = this.getDelta()),
                          (!k || !(0, S.default)(F.compose(k), this.delta)) &&
                            (k = F.diff(this.delta, L));
                      return k;
                    },
                  },
                ]),
                I
              );
            })();
          function C(I, j) {
            return Object.keys(j).reduce(function (k, q) {
              return (
                I[q] == null ||
                  (j[q] === I[q]
                    ? (k[q] = j[q])
                    : Array.isArray(j[q])
                    ? j[q].indexOf(I[q]) < 0 && (k[q] = j[q].concat([I[q]]))
                    : (k[q] = [j[q], I[q]])),
                k
              );
            }, {});
          }
          function Z(I) {
            return I.reduce(function (j, k) {
              if (k.insert === 1) {
                var q = (0, w.default)(k.attributes);
                return delete q.image, j.insert({ image: k.attributes.image }, q);
              }
              if (
                (k.attributes != null &&
                  (k.attributes.list === !0 || k.attributes.bullet === !0) &&
                  ((k = (0, w.default)(k)),
                  k.attributes.list
                    ? (k.attributes.list = 'ordered')
                    : ((k.attributes.list = 'bullet'), delete k.attributes.bullet)),
                typeof k.insert == 'string')
              ) {
                var L = k.insert
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
                return j.insert(L, k.attributes);
              }
              return j.push(k);
            }, new p.default());
          }
          e.default = B;
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = e.Range = void 0);
          var g = (function () {
              function A(S, O) {
                var y = [],
                  b = !0,
                  T = !1,
                  x = void 0;
                try {
                  for (
                    var R = S[Symbol.iterator](), B;
                    !(b = (B = R.next()).done) && (y.push(B.value), !(O && y.length === O));
                    b = !0
                  );
                } catch (C) {
                  (T = !0), (x = C);
                } finally {
                  try {
                    !b && R.return && R.return();
                  } finally {
                    if (T) throw x;
                  }
                }
                return y;
              }
              return function (S, O) {
                if (Array.isArray(S)) return S;
                if (Symbol.iterator in Object(S)) return A(S, O);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            _ = (function () {
              function A(S, O) {
                for (var y = 0; y < O.length; y++) {
                  var b = O[y];
                  (b.enumerable = b.enumerable || !1),
                    (b.configurable = !0),
                    'value' in b && (b.writable = !0),
                    Object.defineProperty(S, b.key, b);
                }
              }
              return function (S, O, y) {
                return O && A(S.prototype, O), y && A(S, y), S;
              };
            })(),
            E = n(0),
            m = a(E),
            p = n(21),
            c = a(p),
            o = n(11),
            t = a(o),
            r = n(8),
            f = a(r),
            u = n(10),
            s = a(u);
          function a(A) {
            return A && A.__esModule ? A : { default: A };
          }
          function l(A) {
            if (Array.isArray(A)) {
              for (var S = 0, O = Array(A.length); S < A.length; S++) O[S] = A[S];
              return O;
            } else return Array.from(A);
          }
          function d(A, S) {
            if (!(A instanceof S)) throw new TypeError('Cannot call a class as a function');
          }
          var i = (0, s.default)('quill:selection'),
            v = function A(S) {
              var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              d(this, A), (this.index = S), (this.length = O);
            },
            N = (function () {
              function A(S, O) {
                var y = this;
                d(this, A),
                  (this.emitter = O),
                  (this.scroll = S),
                  (this.composing = !1),
                  (this.mouseDown = !1),
                  (this.root = this.scroll.domNode),
                  (this.cursor = m.default.create('cursor', this)),
                  (this.lastRange = this.savedRange = new v(0, 0)),
                  this.handleComposition(),
                  this.handleDragging(),
                  this.emitter.listenDOM('selectionchange', document, function () {
                    y.mouseDown || setTimeout(y.update.bind(y, f.default.sources.USER), 1);
                  }),
                  this.emitter.on(f.default.events.EDITOR_CHANGE, function (b, T) {
                    b === f.default.events.TEXT_CHANGE &&
                      T.length() > 0 &&
                      y.update(f.default.sources.SILENT);
                  }),
                  this.emitter.on(f.default.events.SCROLL_BEFORE_UPDATE, function () {
                    if (y.hasFocus()) {
                      var b = y.getNativeRange();
                      b != null &&
                        b.start.node !== y.cursor.textNode &&
                        y.emitter.once(f.default.events.SCROLL_UPDATE, function () {
                          try {
                            y.setNativeRange(
                              b.start.node,
                              b.start.offset,
                              b.end.node,
                              b.end.offset
                            );
                          } catch {}
                        });
                    }
                  }),
                  this.emitter.on(f.default.events.SCROLL_OPTIMIZE, function (b, T) {
                    if (T.range) {
                      var x = T.range,
                        R = x.startNode,
                        B = x.startOffset,
                        C = x.endNode,
                        Z = x.endOffset;
                      y.setNativeRange(R, B, C, Z);
                    }
                  }),
                  this.update(f.default.sources.SILENT);
              }
              return (
                _(A, [
                  {
                    key: 'handleComposition',
                    value: function () {
                      var O = this;
                      this.root.addEventListener('compositionstart', function () {
                        O.composing = !0;
                      }),
                        this.root.addEventListener('compositionend', function () {
                          if (((O.composing = !1), O.cursor.parent)) {
                            var y = O.cursor.restore();
                            if (!y) return;
                            setTimeout(function () {
                              O.setNativeRange(y.startNode, y.startOffset, y.endNode, y.endOffset);
                            }, 1);
                          }
                        });
                    },
                  },
                  {
                    key: 'handleDragging',
                    value: function () {
                      var O = this;
                      this.emitter.listenDOM('mousedown', document.body, function () {
                        O.mouseDown = !0;
                      }),
                        this.emitter.listenDOM('mouseup', document.body, function () {
                          (O.mouseDown = !1), O.update(f.default.sources.USER);
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
                    value: function (O, y) {
                      if (!(this.scroll.whitelist != null && !this.scroll.whitelist[O])) {
                        this.scroll.update();
                        var b = this.getNativeRange();
                        if (
                          !(
                            b == null ||
                            !b.native.collapsed ||
                            m.default.query(O, m.default.Scope.BLOCK)
                          )
                        ) {
                          if (b.start.node !== this.cursor.textNode) {
                            var T = m.default.find(b.start.node, !1);
                            if (T == null) return;
                            if (T instanceof m.default.Leaf) {
                              var x = T.split(b.start.offset);
                              T.parent.insertBefore(this.cursor, x);
                            } else T.insertBefore(this.cursor, b.start.node);
                            this.cursor.attach();
                          }
                          this.cursor.format(O, y),
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
                    value: function (O) {
                      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                        b = this.scroll.length();
                      (O = Math.min(O, b - 1)), (y = Math.min(O + y, b - 1) - O);
                      var T = void 0,
                        x = this.scroll.leaf(O),
                        R = g(x, 2),
                        B = R[0],
                        C = R[1];
                      if (B == null) return null;
                      var Z = B.position(C, !0),
                        I = g(Z, 2);
                      (T = I[0]), (C = I[1]);
                      var j = document.createRange();
                      if (y > 0) {
                        j.setStart(T, C);
                        var k = this.scroll.leaf(O + y),
                          q = g(k, 2);
                        if (((B = q[0]), (C = q[1]), B == null)) return null;
                        var L = B.position(C, !0),
                          F = g(L, 2);
                        return (T = F[0]), (C = F[1]), j.setEnd(T, C), j.getBoundingClientRect();
                      } else {
                        var D = 'left',
                          P = void 0;
                        return (
                          T instanceof Text
                            ? (C < T.data.length
                                ? (j.setStart(T, C), j.setEnd(T, C + 1))
                                : (j.setStart(T, C - 1), j.setEnd(T, C), (D = 'right')),
                              (P = j.getBoundingClientRect()))
                            : ((P = B.domNode.getBoundingClientRect()), C > 0 && (D = 'right')),
                          {
                            bottom: P.top + P.height,
                            height: P.height,
                            left: P[D],
                            right: P[D],
                            top: P.top,
                            width: 0,
                          }
                        );
                      }
                    },
                  },
                  {
                    key: 'getNativeRange',
                    value: function () {
                      var O = document.getSelection();
                      if (O == null || O.rangeCount <= 0) return null;
                      var y = O.getRangeAt(0);
                      if (y == null) return null;
                      var b = this.normalizeNative(y);
                      return i.info('getNativeRange', b), b;
                    },
                  },
                  {
                    key: 'getRange',
                    value: function () {
                      var O = this.getNativeRange();
                      if (O == null) return [null, null];
                      var y = this.normalizedToRange(O);
                      return [y, O];
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
                    value: function (O) {
                      var y = this,
                        b = [[O.start.node, O.start.offset]];
                      O.native.collapsed || b.push([O.end.node, O.end.offset]);
                      var T = b.map(function (B) {
                          var C = g(B, 2),
                            Z = C[0],
                            I = C[1],
                            j = m.default.find(Z, !0),
                            k = j.offset(y.scroll);
                          return I === 0
                            ? k
                            : j instanceof m.default.Container
                            ? k + j.length()
                            : k + j.index(Z, I);
                        }),
                        x = Math.min(Math.max.apply(Math, l(T)), this.scroll.length() - 1),
                        R = Math.min.apply(Math, [x].concat(l(T)));
                      return new v(R, x - R);
                    },
                  },
                  {
                    key: 'normalizeNative',
                    value: function (O) {
                      if (
                        !w(this.root, O.startContainer) ||
                        (!O.collapsed && !w(this.root, O.endContainer))
                      )
                        return null;
                      var y = {
                        start: { node: O.startContainer, offset: O.startOffset },
                        end: { node: O.endContainer, offset: O.endOffset },
                        native: O,
                      };
                      return (
                        [y.start, y.end].forEach(function (b) {
                          for (
                            var T = b.node, x = b.offset;
                            !(T instanceof Text) && T.childNodes.length > 0;

                          )
                            if (T.childNodes.length > x) (T = T.childNodes[x]), (x = 0);
                            else if (T.childNodes.length === x)
                              (T = T.lastChild),
                                (x = T instanceof Text ? T.data.length : T.childNodes.length + 1);
                            else break;
                          (b.node = T), (b.offset = x);
                        }),
                        y
                      );
                    },
                  },
                  {
                    key: 'rangeToNative',
                    value: function (O) {
                      var y = this,
                        b = O.collapsed ? [O.index] : [O.index, O.index + O.length],
                        T = [],
                        x = this.scroll.length();
                      return (
                        b.forEach(function (R, B) {
                          R = Math.min(x - 1, R);
                          var C = void 0,
                            Z = y.scroll.leaf(R),
                            I = g(Z, 2),
                            j = I[0],
                            k = I[1],
                            q = j.position(k, B !== 0),
                            L = g(q, 2);
                          (C = L[0]), (k = L[1]), T.push(C, k);
                        }),
                        T.length < 2 && (T = T.concat(T)),
                        T
                      );
                    },
                  },
                  {
                    key: 'scrollIntoView',
                    value: function (O) {
                      var y = this.lastRange;
                      if (y != null) {
                        var b = this.getBounds(y.index, y.length);
                        if (b != null) {
                          var T = this.scroll.length() - 1,
                            x = this.scroll.line(Math.min(y.index, T)),
                            R = g(x, 1),
                            B = R[0],
                            C = B;
                          if (y.length > 0) {
                            var Z = this.scroll.line(Math.min(y.index + y.length, T)),
                              I = g(Z, 1);
                            C = I[0];
                          }
                          if (!(B == null || C == null)) {
                            var j = O.getBoundingClientRect();
                            b.top < j.top
                              ? (O.scrollTop -= j.top - b.top)
                              : b.bottom > j.bottom && (O.scrollTop += b.bottom - j.bottom);
                          }
                        }
                      }
                    },
                  },
                  {
                    key: 'setNativeRange',
                    value: function (O, y) {
                      var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : O,
                        T = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : y,
                        x = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
                      if (
                        (i.info('setNativeRange', O, y, b, T),
                        !(
                          O != null &&
                          (this.root.parentNode == null ||
                            O.parentNode == null ||
                            b.parentNode == null)
                        ))
                      ) {
                        var R = document.getSelection();
                        if (R != null)
                          if (O != null) {
                            this.hasFocus() || this.root.focus();
                            var B = (this.getNativeRange() || {}).native;
                            if (
                              B == null ||
                              x ||
                              O !== B.startContainer ||
                              y !== B.startOffset ||
                              b !== B.endContainer ||
                              T !== B.endOffset
                            ) {
                              O.tagName == 'BR' &&
                                ((y = [].indexOf.call(O.parentNode.childNodes, O)),
                                (O = O.parentNode)),
                                b.tagName == 'BR' &&
                                  ((T = [].indexOf.call(b.parentNode.childNodes, b)),
                                  (b = b.parentNode));
                              var C = document.createRange();
                              C.setStart(O, y), C.setEnd(b, T), R.removeAllRanges(), R.addRange(C);
                            }
                          } else R.removeAllRanges(), this.root.blur(), document.body.focus();
                      }
                    },
                  },
                  {
                    key: 'setRange',
                    value: function (O) {
                      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                        b =
                          arguments.length > 2 && arguments[2] !== void 0
                            ? arguments[2]
                            : f.default.sources.API;
                      if (
                        (typeof y == 'string' && ((b = y), (y = !1)),
                        i.info('setRange', O),
                        O != null)
                      ) {
                        var T = this.rangeToNative(O);
                        this.setNativeRange.apply(this, l(T).concat([y]));
                      } else this.setNativeRange(null);
                      this.update(b);
                    },
                  },
                  {
                    key: 'update',
                    value: function () {
                      var O =
                          arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : f.default.sources.USER,
                        y = this.lastRange,
                        b = this.getRange(),
                        T = g(b, 2),
                        x = T[0],
                        R = T[1];
                      if (
                        ((this.lastRange = x),
                        this.lastRange != null && (this.savedRange = this.lastRange),
                        !(0, t.default)(y, this.lastRange))
                      ) {
                        var B;
                        !this.composing &&
                          R != null &&
                          R.native.collapsed &&
                          R.start.node !== this.cursor.textNode &&
                          this.cursor.restore();
                        var C = [
                          f.default.events.SELECTION_CHANGE,
                          (0, c.default)(this.lastRange),
                          (0, c.default)(y),
                          O,
                        ];
                        if (
                          ((B = this.emitter).emit.apply(
                            B,
                            [f.default.events.EDITOR_CHANGE].concat(C)
                          ),
                          O !== f.default.sources.SILENT)
                        ) {
                          var Z;
                          (Z = this.emitter).emit.apply(Z, C);
                        }
                      }
                    },
                  },
                ]),
                A
              );
            })();
          function w(A, S) {
            try {
              S.parentNode;
            } catch {
              return !1;
            }
            return S instanceof Text && (S = S.parentNode), A.contains(S);
          }
          (e.Range = v), (e.default = N);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function f(u, s) {
                for (var a = 0; a < s.length; a++) {
                  var l = s[a];
                  (l.enumerable = l.enumerable || !1),
                    (l.configurable = !0),
                    'value' in l && (l.writable = !0),
                    Object.defineProperty(u, l.key, l);
                }
              }
              return function (u, s, a) {
                return s && f(u.prototype, s), a && f(u, a), u;
              };
            })(),
            _ = function f(u, s, a) {
              u === null && (u = Function.prototype);
              var l = Object.getOwnPropertyDescriptor(u, s);
              if (l === void 0) {
                var d = Object.getPrototypeOf(u);
                return d === null ? void 0 : f(d, s, a);
              } else {
                if ('value' in l) return l.value;
                var i = l.get;
                return i === void 0 ? void 0 : i.call(a);
              }
            },
            E = n(0),
            m = p(E);
          function p(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function c(f, u) {
            if (!(f instanceof u)) throw new TypeError('Cannot call a class as a function');
          }
          function o(f, u) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u == 'object' || typeof u == 'function') ? u : f;
          }
          function t(f, u) {
            if (typeof u != 'function' && u !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof u
              );
            (f.prototype = Object.create(u && u.prototype, {
              constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 },
            })),
              u && (Object.setPrototypeOf ? Object.setPrototypeOf(f, u) : (f.__proto__ = u));
          }
          var r = (function (f) {
            t(u, f);
            function u() {
              return (
                c(this, u),
                o(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments))
              );
            }
            return (
              g(
                u,
                [
                  {
                    key: 'insertInto',
                    value: function (a, l) {
                      a.children.length === 0
                        ? _(
                            u.prototype.__proto__ || Object.getPrototypeOf(u.prototype),
                            'insertInto',
                            this
                          ).call(this, a, l)
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
              u
            );
          })(m.default.Embed);
          (r.blotName = 'break'), (r.tagName = 'BR'), (e.default = r);
        },
        function (h, e, n) {
          'use strict';
          var g =
            (this && this.__extends) ||
            (function () {
              var o =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var f in r) r.hasOwnProperty(f) && (t[f] = r[f]);
                };
              return function (t, r) {
                o(t, r);
                function f() {
                  this.constructor = t;
                }
                t.prototype =
                  r === null ? Object.create(r) : ((f.prototype = r.prototype), new f());
              };
            })();
          Object.defineProperty(e, '__esModule', { value: !0 });
          var _ = n(44),
            E = n(30),
            m = n(1),
            p = (function (o) {
              g(t, o);
              function t(r) {
                var f = o.call(this, r) || this;
                return f.build(), f;
              }
              return (
                (t.prototype.appendChild = function (r) {
                  this.insertBefore(r);
                }),
                (t.prototype.attach = function () {
                  o.prototype.attach.call(this),
                    this.children.forEach(function (r) {
                      r.attach();
                    });
                }),
                (t.prototype.build = function () {
                  var r = this;
                  (this.children = new _.default()),
                    [].slice
                      .call(this.domNode.childNodes)
                      .reverse()
                      .forEach(function (f) {
                        try {
                          var u = c(f);
                          r.insertBefore(u, r.children.head || void 0);
                        } catch (s) {
                          if (s instanceof m.ParchmentError) return;
                          throw s;
                        }
                      });
                }),
                (t.prototype.deleteAt = function (r, f) {
                  if (r === 0 && f === this.length()) return this.remove();
                  this.children.forEachAt(r, f, function (u, s, a) {
                    u.deleteAt(s, a);
                  });
                }),
                (t.prototype.descendant = function (r, f) {
                  var u = this.children.find(f),
                    s = u[0],
                    a = u[1];
                  return (r.blotName == null && r(s)) || (r.blotName != null && s instanceof r)
                    ? [s, a]
                    : s instanceof t
                    ? s.descendant(r, a)
                    : [null, -1];
                }),
                (t.prototype.descendants = function (r, f, u) {
                  f === void 0 && (f = 0), u === void 0 && (u = Number.MAX_VALUE);
                  var s = [],
                    a = u;
                  return (
                    this.children.forEachAt(f, u, function (l, d, i) {
                      ((r.blotName == null && r(l)) || (r.blotName != null && l instanceof r)) &&
                        s.push(l),
                        l instanceof t && (s = s.concat(l.descendants(r, d, a))),
                        (a -= i);
                    }),
                    s
                  );
                }),
                (t.prototype.detach = function () {
                  this.children.forEach(function (r) {
                    r.detach();
                  }),
                    o.prototype.detach.call(this);
                }),
                (t.prototype.formatAt = function (r, f, u, s) {
                  this.children.forEachAt(r, f, function (a, l, d) {
                    a.formatAt(l, d, u, s);
                  });
                }),
                (t.prototype.insertAt = function (r, f, u) {
                  var s = this.children.find(r),
                    a = s[0],
                    l = s[1];
                  if (a) a.insertAt(l, f, u);
                  else {
                    var d = u == null ? m.create('text', f) : m.create(f, u);
                    this.appendChild(d);
                  }
                }),
                (t.prototype.insertBefore = function (r, f) {
                  if (
                    this.statics.allowedChildren != null &&
                    !this.statics.allowedChildren.some(function (u) {
                      return r instanceof u;
                    })
                  )
                    throw new m.ParchmentError(
                      'Cannot insert ' + r.statics.blotName + ' into ' + this.statics.blotName
                    );
                  r.insertInto(this, f);
                }),
                (t.prototype.length = function () {
                  return this.children.reduce(function (r, f) {
                    return r + f.length();
                  }, 0);
                }),
                (t.prototype.moveChildren = function (r, f) {
                  this.children.forEach(function (u) {
                    r.insertBefore(u, f);
                  });
                }),
                (t.prototype.optimize = function (r) {
                  if ((o.prototype.optimize.call(this, r), this.children.length === 0))
                    if (this.statics.defaultChild != null) {
                      var f = m.create(this.statics.defaultChild);
                      this.appendChild(f), f.optimize(r);
                    } else this.remove();
                }),
                (t.prototype.path = function (r, f) {
                  f === void 0 && (f = !1);
                  var u = this.children.find(r, f),
                    s = u[0],
                    a = u[1],
                    l = [[this, r]];
                  return s instanceof t ? l.concat(s.path(a, f)) : (s != null && l.push([s, a]), l);
                }),
                (t.prototype.removeChild = function (r) {
                  this.children.remove(r);
                }),
                (t.prototype.replace = function (r) {
                  r instanceof t && r.moveChildren(this), o.prototype.replace.call(this, r);
                }),
                (t.prototype.split = function (r, f) {
                  if ((f === void 0 && (f = !1), !f)) {
                    if (r === 0) return this;
                    if (r === this.length()) return this.next;
                  }
                  var u = this.clone();
                  return (
                    this.parent.insertBefore(u, this.next),
                    this.children.forEachAt(r, this.length(), function (s, a, l) {
                      (s = s.split(a, f)), u.appendChild(s);
                    }),
                    u
                  );
                }),
                (t.prototype.unwrap = function () {
                  this.moveChildren(this.parent, this.next), this.remove();
                }),
                (t.prototype.update = function (r, f) {
                  var u = this,
                    s = [],
                    a = [];
                  r.forEach(function (l) {
                    l.target === u.domNode &&
                      l.type === 'childList' &&
                      (s.push.apply(s, l.addedNodes), a.push.apply(a, l.removedNodes));
                  }),
                    a.forEach(function (l) {
                      if (
                        !(
                          l.parentNode != null &&
                          l.tagName !== 'IFRAME' &&
                          document.body.compareDocumentPosition(l) &
                            Node.DOCUMENT_POSITION_CONTAINED_BY
                        )
                      ) {
                        var d = m.find(l);
                        d != null &&
                          (d.domNode.parentNode == null || d.domNode.parentNode === u.domNode) &&
                          d.detach();
                      }
                    }),
                    s
                      .filter(function (l) {
                        return l.parentNode == u.domNode;
                      })
                      .sort(function (l, d) {
                        return l === d
                          ? 0
                          : l.compareDocumentPosition(d) & Node.DOCUMENT_POSITION_FOLLOWING
                          ? 1
                          : -1;
                      })
                      .forEach(function (l) {
                        var d = null;
                        l.nextSibling != null && (d = m.find(l.nextSibling));
                        var i = c(l);
                        (i.next != d || i.next == null) &&
                          (i.parent != null && i.parent.removeChild(u),
                          u.insertBefore(i, d || void 0));
                      });
                }),
                t
              );
            })(E.default);
          function c(o) {
            var t = m.find(o);
            if (t == null)
              try {
                t = m.create(o);
              } catch {
                (t = m.create(m.Scope.INLINE)),
                  [].slice.call(o.childNodes).forEach(function (f) {
                    t.domNode.appendChild(f);
                  }),
                  o.parentNode && o.parentNode.replaceChild(t.domNode, o),
                  t.attach();
              }
            return t;
          }
          e.default = p;
        },
        function (h, e, n) {
          'use strict';
          var g =
            (this && this.__extends) ||
            (function () {
              var o =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var f in r) r.hasOwnProperty(f) && (t[f] = r[f]);
                };
              return function (t, r) {
                o(t, r);
                function f() {
                  this.constructor = t;
                }
                t.prototype =
                  r === null ? Object.create(r) : ((f.prototype = r.prototype), new f());
              };
            })();
          Object.defineProperty(e, '__esModule', { value: !0 });
          var _ = n(12),
            E = n(31),
            m = n(17),
            p = n(1),
            c = (function (o) {
              g(t, o);
              function t(r) {
                var f = o.call(this, r) || this;
                return (f.attributes = new E.default(f.domNode)), f;
              }
              return (
                (t.formats = function (r) {
                  if (typeof this.tagName == 'string') return !0;
                  if (Array.isArray(this.tagName)) return r.tagName.toLowerCase();
                }),
                (t.prototype.format = function (r, f) {
                  var u = p.query(r);
                  u instanceof _.default
                    ? this.attributes.attribute(u, f)
                    : f &&
                      u != null &&
                      (r !== this.statics.blotName || this.formats()[r] !== f) &&
                      this.replaceWith(r, f);
                }),
                (t.prototype.formats = function () {
                  var r = this.attributes.values(),
                    f = this.statics.formats(this.domNode);
                  return f != null && (r[this.statics.blotName] = f), r;
                }),
                (t.prototype.replaceWith = function (r, f) {
                  var u = o.prototype.replaceWith.call(this, r, f);
                  return this.attributes.copy(u), u;
                }),
                (t.prototype.update = function (r, f) {
                  var u = this;
                  o.prototype.update.call(this, r, f),
                    r.some(function (s) {
                      return s.target === u.domNode && s.type === 'attributes';
                    }) && this.attributes.build();
                }),
                (t.prototype.wrap = function (r, f) {
                  var u = o.prototype.wrap.call(this, r, f);
                  return (
                    u instanceof t &&
                      u.statics.scope === this.statics.scope &&
                      this.attributes.move(u),
                    u
                  );
                }),
                t
              );
            })(m.default);
          e.default = c;
        },
        function (h, e, n) {
          'use strict';
          var g =
            (this && this.__extends) ||
            (function () {
              var p =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (c, o) {
                    c.__proto__ = o;
                  }) ||
                function (c, o) {
                  for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
                };
              return function (c, o) {
                p(c, o);
                function t() {
                  this.constructor = c;
                }
                c.prototype =
                  o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
              };
            })();
          Object.defineProperty(e, '__esModule', { value: !0 });
          var _ = n(30),
            E = n(1),
            m = (function (p) {
              g(c, p);
              function c() {
                return (p !== null && p.apply(this, arguments)) || this;
              }
              return (
                (c.value = function (o) {
                  return !0;
                }),
                (c.prototype.index = function (o, t) {
                  return this.domNode === o ||
                    this.domNode.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY
                    ? Math.min(t, 1)
                    : -1;
                }),
                (c.prototype.position = function (o, t) {
                  var r = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                  return o > 0 && (r += 1), [this.parent.domNode, r];
                }),
                (c.prototype.value = function () {
                  return (
                    (o = {}), (o[this.statics.blotName] = this.statics.value(this.domNode) || !0), o
                  );
                  var o;
                }),
                (c.scope = E.Scope.INLINE_BLOT),
                c
              );
            })(_.default);
          e.default = m;
        },
        function (h, e, n) {
          var g = n(11),
            _ = n(3),
            E = {
              attributes: {
                compose: function (p, c, o) {
                  typeof p != 'object' && (p = {}), typeof c != 'object' && (c = {});
                  var t = _(!0, {}, c);
                  o ||
                    (t = Object.keys(t).reduce(function (f, u) {
                      return t[u] != null && (f[u] = t[u]), f;
                    }, {}));
                  for (var r in p) p[r] !== void 0 && c[r] === void 0 && (t[r] = p[r]);
                  return Object.keys(t).length > 0 ? t : void 0;
                },
                diff: function (p, c) {
                  typeof p != 'object' && (p = {}), typeof c != 'object' && (c = {});
                  var o = Object.keys(p)
                    .concat(Object.keys(c))
                    .reduce(function (t, r) {
                      return g(p[r], c[r]) || (t[r] = c[r] === void 0 ? null : c[r]), t;
                    }, {});
                  return Object.keys(o).length > 0 ? o : void 0;
                },
                transform: function (p, c, o) {
                  if (typeof p != 'object') return c;
                  if (typeof c == 'object') {
                    if (!o) return c;
                    var t = Object.keys(c).reduce(function (r, f) {
                      return p[f] === void 0 && (r[f] = c[f]), r;
                    }, {});
                    return Object.keys(t).length > 0 ? t : void 0;
                  }
                },
              },
              iterator: function (p) {
                return new m(p);
              },
              length: function (p) {
                return typeof p.delete == 'number'
                  ? p.delete
                  : typeof p.retain == 'number'
                  ? p.retain
                  : typeof p.insert == 'string'
                  ? p.insert.length
                  : 1;
              },
            };
          function m(p) {
            (this.ops = p), (this.index = 0), (this.offset = 0);
          }
          (m.prototype.hasNext = function () {
            return this.peekLength() < 1 / 0;
          }),
            (m.prototype.next = function (p) {
              p || (p = 1 / 0);
              var c = this.ops[this.index];
              if (c) {
                var o = this.offset,
                  t = E.length(c);
                if (
                  (p >= t - o
                    ? ((p = t - o), (this.index += 1), (this.offset = 0))
                    : (this.offset += p),
                  typeof c.delete == 'number')
                )
                  return { delete: p };
                var r = {};
                return (
                  c.attributes && (r.attributes = c.attributes),
                  typeof c.retain == 'number'
                    ? (r.retain = p)
                    : typeof c.insert == 'string'
                    ? (r.insert = c.insert.substr(o, p))
                    : (r.insert = c.insert),
                  r
                );
              } else return { retain: 1 / 0 };
            }),
            (m.prototype.peek = function () {
              return this.ops[this.index];
            }),
            (m.prototype.peekLength = function () {
              return this.ops[this.index] ? E.length(this.ops[this.index]) - this.offset : 1 / 0;
            }),
            (m.prototype.peekType = function () {
              return this.ops[this.index]
                ? typeof this.ops[this.index].delete == 'number'
                  ? 'delete'
                  : typeof this.ops[this.index].retain == 'number'
                  ? 'retain'
                  : 'insert'
                : 'retain';
            }),
            (h.exports = E);
        },
        function (h, e) {
          var n = (function () {
            'use strict';
            function g(u, s) {
              return s != null && u instanceof s;
            }
            var _;
            try {
              _ = Map;
            } catch {
              _ = function () {};
            }
            var E;
            try {
              E = Set;
            } catch {
              E = function () {};
            }
            var m;
            try {
              m = Promise;
            } catch {
              m = function () {};
            }
            function p(u, s, a, l, d) {
              typeof s == 'object' &&
                ((a = s.depth), (l = s.prototype), (d = s.includeNonEnumerable), (s = s.circular));
              var i = [],
                v = [],
                N = typeof Buffer != 'undefined';
              typeof s == 'undefined' && (s = !0), typeof a == 'undefined' && (a = 1 / 0);
              function w(A, S) {
                if (A === null) return null;
                if (S === 0) return A;
                var O, y;
                if (typeof A != 'object') return A;
                if (g(A, _)) O = new _();
                else if (g(A, E)) O = new E();
                else if (g(A, m))
                  O = new m(function (j, k) {
                    A.then(
                      function (q) {
                        j(w(q, S - 1));
                      },
                      function (q) {
                        k(w(q, S - 1));
                      }
                    );
                  });
                else if (p.__isArray(A)) O = [];
                else if (p.__isRegExp(A))
                  (O = new RegExp(A.source, f(A))), A.lastIndex && (O.lastIndex = A.lastIndex);
                else if (p.__isDate(A)) O = new Date(A.getTime());
                else {
                  if (N && Buffer.isBuffer(A)) return (O = new Buffer(A.length)), A.copy(O), O;
                  g(A, Error)
                    ? (O = Object.create(A))
                    : typeof l == 'undefined'
                    ? ((y = Object.getPrototypeOf(A)), (O = Object.create(y)))
                    : ((O = Object.create(l)), (y = l));
                }
                if (s) {
                  var b = i.indexOf(A);
                  if (b != -1) return v[b];
                  i.push(A), v.push(O);
                }
                g(A, _) &&
                  A.forEach(function (j, k) {
                    var q = w(k, S - 1),
                      L = w(j, S - 1);
                    O.set(q, L);
                  }),
                  g(A, E) &&
                    A.forEach(function (j) {
                      var k = w(j, S - 1);
                      O.add(k);
                    });
                for (var T in A) {
                  var x;
                  y && (x = Object.getOwnPropertyDescriptor(y, T)),
                    !(x && x.set == null) && (O[T] = w(A[T], S - 1));
                }
                if (Object.getOwnPropertySymbols)
                  for (var R = Object.getOwnPropertySymbols(A), T = 0; T < R.length; T++) {
                    var B = R[T],
                      C = Object.getOwnPropertyDescriptor(A, B);
                    (C && !C.enumerable && !d) ||
                      ((O[B] = w(A[B], S - 1)),
                      C.enumerable || Object.defineProperty(O, B, { enumerable: !1 }));
                  }
                if (d)
                  for (var Z = Object.getOwnPropertyNames(A), T = 0; T < Z.length; T++) {
                    var I = Z[T],
                      C = Object.getOwnPropertyDescriptor(A, I);
                    (C && C.enumerable) ||
                      ((O[I] = w(A[I], S - 1)), Object.defineProperty(O, I, { enumerable: !1 }));
                  }
                return O;
              }
              return w(u, a);
            }
            p.clonePrototype = function (s) {
              if (s === null) return null;
              var a = function () {};
              return (a.prototype = s), new a();
            };
            function c(u) {
              return Object.prototype.toString.call(u);
            }
            p.__objToStr = c;
            function o(u) {
              return typeof u == 'object' && c(u) === '[object Date]';
            }
            p.__isDate = o;
            function t(u) {
              return typeof u == 'object' && c(u) === '[object Array]';
            }
            p.__isArray = t;
            function r(u) {
              return typeof u == 'object' && c(u) === '[object RegExp]';
            }
            p.__isRegExp = r;
            function f(u) {
              var s = '';
              return (
                u.global && (s += 'g'), u.ignoreCase && (s += 'i'), u.multiline && (s += 'm'), s
              );
            }
            return (p.__getRegExpFlags = f), p;
          })();
          typeof h == 'object' && h.exports && (h.exports = n);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function O(y, b) {
                var T = [],
                  x = !0,
                  R = !1,
                  B = void 0;
                try {
                  for (
                    var C = y[Symbol.iterator](), Z;
                    !(x = (Z = C.next()).done) && (T.push(Z.value), !(b && T.length === b));
                    x = !0
                  );
                } catch (I) {
                  (R = !0), (B = I);
                } finally {
                  try {
                    !x && C.return && C.return();
                  } finally {
                    if (R) throw B;
                  }
                }
                return T;
              }
              return function (y, b) {
                if (Array.isArray(y)) return y;
                if (Symbol.iterator in Object(y)) return O(y, b);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            _ = (function () {
              function O(y, b) {
                for (var T = 0; T < b.length; T++) {
                  var x = b[T];
                  (x.enumerable = x.enumerable || !1),
                    (x.configurable = !0),
                    'value' in x && (x.writable = !0),
                    Object.defineProperty(y, x.key, x);
                }
              }
              return function (y, b, T) {
                return b && O(y.prototype, b), T && O(y, T), y;
              };
            })(),
            E = function O(y, b, T) {
              y === null && (y = Function.prototype);
              var x = Object.getOwnPropertyDescriptor(y, b);
              if (x === void 0) {
                var R = Object.getPrototypeOf(y);
                return R === null ? void 0 : O(R, b, T);
              } else {
                if ('value' in x) return x.value;
                var B = x.get;
                return B === void 0 ? void 0 : B.call(T);
              }
            },
            m = n(0),
            p = i(m),
            c = n(8),
            o = i(c),
            t = n(4),
            r = i(t),
            f = n(16),
            u = i(f),
            s = n(13),
            a = i(s),
            l = n(25),
            d = i(l);
          function i(O) {
            return O && O.__esModule ? O : { default: O };
          }
          function v(O, y) {
            if (!(O instanceof y)) throw new TypeError('Cannot call a class as a function');
          }
          function N(O, y) {
            if (!O)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y && (typeof y == 'object' || typeof y == 'function') ? y : O;
          }
          function w(O, y) {
            if (typeof y != 'function' && y !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof y
              );
            (O.prototype = Object.create(y && y.prototype, {
              constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 },
            })),
              y && (Object.setPrototypeOf ? Object.setPrototypeOf(O, y) : (O.__proto__ = y));
          }
          function A(O) {
            return O instanceof r.default || O instanceof t.BlockEmbed;
          }
          var S = (function (O) {
            w(y, O);
            function y(b, T) {
              v(this, y);
              var x = N(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, b));
              return (
                (x.emitter = T.emitter),
                Array.isArray(T.whitelist) &&
                  (x.whitelist = T.whitelist.reduce(function (R, B) {
                    return (R[B] = !0), R;
                  }, {})),
                x.domNode.addEventListener('DOMNodeInserted', function () {}),
                x.optimize(),
                x.enable(),
                x
              );
            }
            return (
              _(y, [
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
                  value: function (T, x) {
                    var R = this.line(T),
                      B = g(R, 2),
                      C = B[0],
                      Z = B[1],
                      I = this.line(T + x),
                      j = g(I, 1),
                      k = j[0];
                    if (
                      (E(
                        y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                        'deleteAt',
                        this
                      ).call(this, T, x),
                      k != null && C !== k && Z > 0)
                    ) {
                      if (C instanceof t.BlockEmbed || k instanceof t.BlockEmbed) {
                        this.optimize();
                        return;
                      }
                      if (C instanceof a.default) {
                        var q = C.newlineIndex(C.length(), !0);
                        if (q > -1 && ((C = C.split(q + 1)), C === k)) {
                          this.optimize();
                          return;
                        }
                      } else if (k instanceof a.default) {
                        var L = k.newlineIndex(0);
                        L > -1 && k.split(L + 1);
                      }
                      var F = k.children.head instanceof u.default ? null : k.children.head;
                      C.moveChildren(k, F), C.remove();
                    }
                    this.optimize();
                  },
                },
                {
                  key: 'enable',
                  value: function () {
                    var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                    this.domNode.setAttribute('contenteditable', T);
                  },
                },
                {
                  key: 'formatAt',
                  value: function (T, x, R, B) {
                    (this.whitelist != null && !this.whitelist[R]) ||
                      (E(
                        y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                        'formatAt',
                        this
                      ).call(this, T, x, R, B),
                      this.optimize());
                  },
                },
                {
                  key: 'insertAt',
                  value: function (T, x, R) {
                    if (!(R != null && this.whitelist != null && !this.whitelist[x])) {
                      if (T >= this.length())
                        if (R == null || p.default.query(x, p.default.Scope.BLOCK) == null) {
                          var B = p.default.create(this.statics.defaultChild);
                          this.appendChild(B),
                            R == null &&
                              x.endsWith(`
`) &&
                              (x = x.slice(0, -1)),
                            B.insertAt(0, x, R);
                        } else {
                          var C = p.default.create(x, R);
                          this.appendChild(C);
                        }
                      else
                        E(
                          y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                          'insertAt',
                          this
                        ).call(this, T, x, R);
                      this.optimize();
                    }
                  },
                },
                {
                  key: 'insertBefore',
                  value: function (T, x) {
                    if (T.statics.scope === p.default.Scope.INLINE_BLOT) {
                      var R = p.default.create(this.statics.defaultChild);
                      R.appendChild(T), (T = R);
                    }
                    E(
                      y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                      'insertBefore',
                      this
                    ).call(this, T, x);
                  },
                },
                {
                  key: 'leaf',
                  value: function (T) {
                    return this.path(T).pop() || [null, -1];
                  },
                },
                {
                  key: 'line',
                  value: function (T) {
                    return T === this.length() ? this.line(T - 1) : this.descendant(A, T);
                  },
                },
                {
                  key: 'lines',
                  value: function () {
                    var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                      x =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : Number.MAX_VALUE,
                      R = function B(C, Z, I) {
                        var j = [],
                          k = I;
                        return (
                          C.children.forEachAt(Z, I, function (q, L, F) {
                            A(q)
                              ? j.push(q)
                              : q instanceof p.default.Container && (j = j.concat(B(q, L, k))),
                              (k -= F);
                          }),
                          j
                        );
                      };
                    return R(this, T, x);
                  },
                },
                {
                  key: 'optimize',
                  value: function () {
                    var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                      x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    this.batch !== !0 &&
                      (E(
                        y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                        'optimize',
                        this
                      ).call(this, T, x),
                      T.length > 0 && this.emitter.emit(o.default.events.SCROLL_OPTIMIZE, T, x));
                  },
                },
                {
                  key: 'path',
                  value: function (T) {
                    return E(
                      y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                      'path',
                      this
                    )
                      .call(this, T)
                      .slice(1);
                  },
                },
                {
                  key: 'update',
                  value: function (T) {
                    if (this.batch !== !0) {
                      var x = o.default.sources.USER;
                      typeof T == 'string' && (x = T),
                        Array.isArray(T) || (T = this.observer.takeRecords()),
                        T.length > 0 &&
                          this.emitter.emit(o.default.events.SCROLL_BEFORE_UPDATE, x, T),
                        E(
                          y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                          'update',
                          this
                        ).call(this, T.concat([])),
                        T.length > 0 && this.emitter.emit(o.default.events.SCROLL_UPDATE, x, T);
                    }
                  },
                },
              ]),
              y
            );
          })(p.default.Scroll);
          (S.blotName = 'scroll'),
            (S.className = 'ql-editor'),
            (S.tagName = 'DIV'),
            (S.defaultChild = 'block'),
            (S.allowedChildren = [r.default, t.BlockEmbed, d.default]),
            (e.default = S);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.SHORTKEY = e.default = void 0);
          var g =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (P) {
                    return typeof P;
                  }
                : function (P) {
                    return P &&
                      typeof Symbol == 'function' &&
                      P.constructor === Symbol &&
                      P !== Symbol.prototype
                      ? 'symbol'
                      : typeof P;
                  },
            _ = (function () {
              function P(M, z) {
                var U = [],
                  K = !0,
                  Y = !1,
                  X = void 0;
                try {
                  for (
                    var Q = M[Symbol.iterator](), ne;
                    !(K = (ne = Q.next()).done) && (U.push(ne.value), !(z && U.length === z));
                    K = !0
                  );
                } catch (oe) {
                  (Y = !0), (X = oe);
                } finally {
                  try {
                    !K && Q.return && Q.return();
                  } finally {
                    if (Y) throw X;
                  }
                }
                return U;
              }
              return function (M, z) {
                if (Array.isArray(M)) return M;
                if (Symbol.iterator in Object(M)) return P(M, z);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            E = (function () {
              function P(M, z) {
                for (var U = 0; U < z.length; U++) {
                  var K = z[U];
                  (K.enumerable = K.enumerable || !1),
                    (K.configurable = !0),
                    'value' in K && (K.writable = !0),
                    Object.defineProperty(M, K.key, K);
                }
              }
              return function (M, z, U) {
                return z && P(M.prototype, z), U && P(M, U), M;
              };
            })(),
            m = n(21),
            p = O(m),
            c = n(11),
            o = O(c),
            t = n(3),
            r = O(t),
            f = n(2),
            u = O(f),
            s = n(20),
            a = O(s),
            l = n(0),
            d = O(l),
            i = n(5),
            v = O(i),
            N = n(10),
            w = O(N),
            A = n(9),
            S = O(A);
          function O(P) {
            return P && P.__esModule ? P : { default: P };
          }
          function y(P, M, z) {
            return (
              M in P
                ? Object.defineProperty(P, M, {
                    value: z,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (P[M] = z),
              P
            );
          }
          function b(P, M) {
            if (!(P instanceof M)) throw new TypeError('Cannot call a class as a function');
          }
          function T(P, M) {
            if (!P)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return M && (typeof M == 'object' || typeof M == 'function') ? M : P;
          }
          function x(P, M) {
            if (typeof M != 'function' && M !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof M
              );
            (P.prototype = Object.create(M && M.prototype, {
              constructor: { value: P, enumerable: !1, writable: !0, configurable: !0 },
            })),
              M && (Object.setPrototypeOf ? Object.setPrototypeOf(P, M) : (P.__proto__ = M));
          }
          var R = (0, w.default)('quill:keyboard'),
            B = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey',
            C = (function (P) {
              x(M, P),
                E(M, null, [
                  {
                    key: 'match',
                    value: function (U, K) {
                      return (
                        (K = D(K)),
                        ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (Y) {
                          return !!K[Y] !== U[Y] && K[Y] !== null;
                        })
                          ? !1
                          : K.key === (U.which || U.keyCode)
                      );
                    },
                  },
                ]);
              function M(z, U) {
                b(this, M);
                var K = T(this, (M.__proto__ || Object.getPrototypeOf(M)).call(this, z, U));
                return (
                  (K.bindings = {}),
                  Object.keys(K.options.bindings).forEach(function (Y) {
                    (Y === 'list autofill' &&
                      z.scroll.whitelist != null &&
                      !z.scroll.whitelist.list) ||
                      (K.options.bindings[Y] && K.addBinding(K.options.bindings[Y]));
                  }),
                  K.addBinding({ key: M.keys.ENTER, shiftKey: null }, q),
                  K.addBinding(
                    { key: M.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null },
                    function () {}
                  ),
                  /Firefox/i.test(navigator.userAgent)
                    ? (K.addBinding({ key: M.keys.BACKSPACE }, { collapsed: !0 }, I),
                      K.addBinding({ key: M.keys.DELETE }, { collapsed: !0 }, j))
                    : (K.addBinding(
                        { key: M.keys.BACKSPACE },
                        { collapsed: !0, prefix: /^.?$/ },
                        I
                      ),
                      K.addBinding({ key: M.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, j)),
                  K.addBinding({ key: M.keys.BACKSPACE }, { collapsed: !1 }, k),
                  K.addBinding({ key: M.keys.DELETE }, { collapsed: !1 }, k),
                  K.addBinding(
                    {
                      key: M.keys.BACKSPACE,
                      altKey: null,
                      ctrlKey: null,
                      metaKey: null,
                      shiftKey: null,
                    },
                    { collapsed: !0, offset: 0 },
                    I
                  ),
                  K.listen(),
                  K
                );
              }
              return (
                E(M, [
                  {
                    key: 'addBinding',
                    value: function (U) {
                      var K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        X = D(U);
                      if (X == null || X.key == null)
                        return R.warn('Attempted to add invalid keyboard binding', X);
                      typeof K == 'function' && (K = { handler: K }),
                        typeof Y == 'function' && (Y = { handler: Y }),
                        (X = (0, r.default)(X, K, Y)),
                        (this.bindings[X.key] = this.bindings[X.key] || []),
                        this.bindings[X.key].push(X);
                    },
                  },
                  {
                    key: 'listen',
                    value: function () {
                      var U = this;
                      this.quill.root.addEventListener('keydown', function (K) {
                        if (!K.defaultPrevented) {
                          var Y = K.which || K.keyCode,
                            X = (U.bindings[Y] || []).filter(function (ae) {
                              return M.match(K, ae);
                            });
                          if (X.length !== 0) {
                            var Q = U.quill.getSelection();
                            if (!(Q == null || !U.quill.hasFocus())) {
                              var ne = U.quill.getLine(Q.index),
                                oe = _(ne, 2),
                                fe = oe[0],
                                ue = oe[1],
                                H = U.quill.getLeaf(Q.index),
                                V = _(H, 2),
                                W = V[0],
                                $ = V[1],
                                G = Q.length === 0 ? [W, $] : U.quill.getLeaf(Q.index + Q.length),
                                J = _(G, 2),
                                ee = J[0],
                                te = J[1],
                                he = W instanceof d.default.Text ? W.value().slice(0, $) : '',
                                be = ee instanceof d.default.Text ? ee.value().slice(te) : '',
                                le = {
                                  collapsed: Q.length === 0,
                                  empty: Q.length === 0 && fe.length() <= 1,
                                  format: U.quill.getFormat(Q),
                                  offset: ue,
                                  prefix: he,
                                  suffix: be,
                                },
                                En = X.some(function (ae) {
                                  if (
                                    (ae.collapsed != null && ae.collapsed !== le.collapsed) ||
                                    (ae.empty != null && ae.empty !== le.empty) ||
                                    (ae.offset != null && ae.offset !== le.offset)
                                  )
                                    return !1;
                                  if (Array.isArray(ae.format)) {
                                    if (
                                      ae.format.every(function (Oe) {
                                        return le.format[Oe] == null;
                                      })
                                    )
                                      return !1;
                                  } else if (
                                    g(ae.format) === 'object' &&
                                    !Object.keys(ae.format).every(function (Oe) {
                                      return ae.format[Oe] === !0
                                        ? le.format[Oe] != null
                                        : ae.format[Oe] === !1
                                        ? le.format[Oe] == null
                                        : (0, o.default)(ae.format[Oe], le.format[Oe]);
                                    })
                                  )
                                    return !1;
                                  return (ae.prefix != null && !ae.prefix.test(le.prefix)) ||
                                    (ae.suffix != null && !ae.suffix.test(le.suffix))
                                    ? !1
                                    : ae.handler.call(U, Q, le) !== !0;
                                });
                              En && K.preventDefault();
                            }
                          }
                        }
                      });
                    },
                  },
                ]),
                M
              );
            })(S.default);
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
                  handler: function (M, z) {
                    if (z.collapsed && z.offset !== 0) return !0;
                    this.quill.format('indent', '+1', v.default.sources.USER);
                  },
                },
                outdent: {
                  key: C.keys.TAB,
                  shiftKey: !0,
                  format: ['blockquote', 'indent', 'list'],
                  handler: function (M, z) {
                    if (z.collapsed && z.offset !== 0) return !0;
                    this.quill.format('indent', '-1', v.default.sources.USER);
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
                  handler: function (M, z) {
                    z.format.indent != null
                      ? this.quill.format('indent', '-1', v.default.sources.USER)
                      : z.format.list != null &&
                        this.quill.format('list', !1, v.default.sources.USER);
                  },
                },
                'indent code-block': L(!0),
                'outdent code-block': L(!1),
                'remove tab': {
                  key: C.keys.TAB,
                  shiftKey: !0,
                  collapsed: !0,
                  prefix: /\t$/,
                  handler: function (M) {
                    this.quill.deleteText(M.index - 1, 1, v.default.sources.USER);
                  },
                },
                tab: {
                  key: C.keys.TAB,
                  handler: function (M) {
                    this.quill.history.cutoff();
                    var z = new u.default().retain(M.index).delete(M.length).insert('	');
                    this.quill.updateContents(z, v.default.sources.USER),
                      this.quill.history.cutoff(),
                      this.quill.setSelection(M.index + 1, v.default.sources.SILENT);
                  },
                },
                'list empty enter': {
                  key: C.keys.ENTER,
                  collapsed: !0,
                  format: ['list'],
                  empty: !0,
                  handler: function (M, z) {
                    this.quill.format('list', !1, v.default.sources.USER),
                      z.format.indent && this.quill.format('indent', !1, v.default.sources.USER);
                  },
                },
                'checklist enter': {
                  key: C.keys.ENTER,
                  collapsed: !0,
                  format: { list: 'checked' },
                  handler: function (M) {
                    var z = this.quill.getLine(M.index),
                      U = _(z, 2),
                      K = U[0],
                      Y = U[1],
                      X = (0, r.default)({}, K.formats(), { list: 'checked' }),
                      Q = new u.default()
                        .retain(M.index)
                        .insert(
                          `
`,
                          X
                        )
                        .retain(K.length() - Y - 1)
                        .retain(1, { list: 'unchecked' });
                    this.quill.updateContents(Q, v.default.sources.USER),
                      this.quill.setSelection(M.index + 1, v.default.sources.SILENT),
                      this.quill.scrollIntoView();
                  },
                },
                'header enter': {
                  key: C.keys.ENTER,
                  collapsed: !0,
                  format: ['header'],
                  suffix: /^$/,
                  handler: function (M, z) {
                    var U = this.quill.getLine(M.index),
                      K = _(U, 2),
                      Y = K[0],
                      X = K[1],
                      Q = new u.default()
                        .retain(M.index)
                        .insert(
                          `
`,
                          z.format
                        )
                        .retain(Y.length() - X - 1)
                        .retain(1, { header: null });
                    this.quill.updateContents(Q, v.default.sources.USER),
                      this.quill.setSelection(M.index + 1, v.default.sources.SILENT),
                      this.quill.scrollIntoView();
                  },
                },
                'list autofill': {
                  key: ' ',
                  collapsed: !0,
                  format: { list: !1 },
                  prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                  handler: function (M, z) {
                    var U = z.prefix.length,
                      K = this.quill.getLine(M.index),
                      Y = _(K, 2),
                      X = Y[0],
                      Q = Y[1];
                    if (Q > U) return !0;
                    var ne = void 0;
                    switch (z.prefix.trim()) {
                      case '[]':
                      case '[ ]':
                        ne = 'unchecked';
                        break;
                      case '[x]':
                        ne = 'checked';
                        break;
                      case '-':
                      case '*':
                        ne = 'bullet';
                        break;
                      default:
                        ne = 'ordered';
                    }
                    this.quill.insertText(M.index, ' ', v.default.sources.USER),
                      this.quill.history.cutoff();
                    var oe = new u.default()
                      .retain(M.index - Q)
                      .delete(U + 1)
                      .retain(X.length() - 2 - Q)
                      .retain(1, { list: ne });
                    this.quill.updateContents(oe, v.default.sources.USER),
                      this.quill.history.cutoff(),
                      this.quill.setSelection(M.index - U, v.default.sources.SILENT);
                  },
                },
                'code exit': {
                  key: C.keys.ENTER,
                  collapsed: !0,
                  format: ['code-block'],
                  prefix: /\n\n$/,
                  suffix: /^\s+$/,
                  handler: function (M) {
                    var z = this.quill.getLine(M.index),
                      U = _(z, 2),
                      K = U[0],
                      Y = U[1],
                      X = new u.default()
                        .retain(M.index + K.length() - Y - 2)
                        .retain(1, { 'code-block': null })
                        .delete(1);
                    this.quill.updateContents(X, v.default.sources.USER);
                  },
                },
                'embed left': Z(C.keys.LEFT, !1),
                'embed left shift': Z(C.keys.LEFT, !0),
                'embed right': Z(C.keys.RIGHT, !1),
                'embed right shift': Z(C.keys.RIGHT, !0),
              },
            });
          function Z(P, M) {
            var z,
              U = P === C.keys.LEFT ? 'prefix' : 'suffix';
            return (
              (z = { key: P, shiftKey: M, altKey: null }),
              y(z, U, /^$/),
              y(z, 'handler', function (Y) {
                var X = Y.index;
                P === C.keys.RIGHT && (X += Y.length + 1);
                var Q = this.quill.getLeaf(X),
                  ne = _(Q, 1),
                  oe = ne[0];
                return oe instanceof d.default.Embed
                  ? (P === C.keys.LEFT
                      ? M
                        ? this.quill.setSelection(Y.index - 1, Y.length + 1, v.default.sources.USER)
                        : this.quill.setSelection(Y.index - 1, v.default.sources.USER)
                      : M
                      ? this.quill.setSelection(Y.index, Y.length + 1, v.default.sources.USER)
                      : this.quill.setSelection(Y.index + Y.length + 1, v.default.sources.USER),
                    !1)
                  : !0;
              }),
              z
            );
          }
          function I(P, M) {
            if (!(P.index === 0 || this.quill.getLength() <= 1)) {
              var z = this.quill.getLine(P.index),
                U = _(z, 1),
                K = U[0],
                Y = {};
              if (M.offset === 0) {
                var X = this.quill.getLine(P.index - 1),
                  Q = _(X, 1),
                  ne = Q[0];
                if (ne != null && ne.length() > 1) {
                  var oe = K.formats(),
                    fe = this.quill.getFormat(P.index - 1, 1);
                  Y = a.default.attributes.diff(oe, fe) || {};
                }
              }
              var ue = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(M.prefix) ? 2 : 1;
              this.quill.deleteText(P.index - ue, ue, v.default.sources.USER),
                Object.keys(Y).length > 0 &&
                  this.quill.formatLine(P.index - ue, ue, Y, v.default.sources.USER),
                this.quill.focus();
            }
          }
          function j(P, M) {
            var z = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(M.suffix) ? 2 : 1;
            if (!(P.index >= this.quill.getLength() - z)) {
              var U = {},
                K = 0,
                Y = this.quill.getLine(P.index),
                X = _(Y, 1),
                Q = X[0];
              if (M.offset >= Q.length() - 1) {
                var ne = this.quill.getLine(P.index + 1),
                  oe = _(ne, 1),
                  fe = oe[0];
                if (fe) {
                  var ue = Q.formats(),
                    H = this.quill.getFormat(P.index, 1);
                  (U = a.default.attributes.diff(ue, H) || {}), (K = fe.length());
                }
              }
              this.quill.deleteText(P.index, z, v.default.sources.USER),
                Object.keys(U).length > 0 &&
                  this.quill.formatLine(P.index + K - 1, z, U, v.default.sources.USER);
            }
          }
          function k(P) {
            var M = this.quill.getLines(P),
              z = {};
            if (M.length > 1) {
              var U = M[0].formats(),
                K = M[M.length - 1].formats();
              z = a.default.attributes.diff(K, U) || {};
            }
            this.quill.deleteText(P, v.default.sources.USER),
              Object.keys(z).length > 0 &&
                this.quill.formatLine(P.index, 1, z, v.default.sources.USER),
              this.quill.setSelection(P.index, v.default.sources.SILENT),
              this.quill.focus();
          }
          function q(P, M) {
            var z = this;
            P.length > 0 && this.quill.scroll.deleteAt(P.index, P.length);
            var U = Object.keys(M.format).reduce(function (K, Y) {
              return (
                d.default.query(Y, d.default.Scope.BLOCK) &&
                  !Array.isArray(M.format[Y]) &&
                  (K[Y] = M.format[Y]),
                K
              );
            }, {});
            this.quill.insertText(
              P.index,
              `
`,
              U,
              v.default.sources.USER
            ),
              this.quill.setSelection(P.index + 1, v.default.sources.SILENT),
              this.quill.focus(),
              Object.keys(M.format).forEach(function (K) {
                U[K] == null &&
                  (Array.isArray(M.format[K]) ||
                    (K !== 'link' && z.quill.format(K, M.format[K], v.default.sources.USER)));
              });
          }
          function L(P) {
            return {
              key: C.keys.TAB,
              shiftKey: !P,
              format: { 'code-block': !0 },
              handler: function (z) {
                var U = d.default.query('code-block'),
                  K = z.index,
                  Y = z.length,
                  X = this.quill.scroll.descendant(U, K),
                  Q = _(X, 2),
                  ne = Q[0],
                  oe = Q[1];
                if (ne != null) {
                  var fe = this.quill.getIndex(ne),
                    ue = ne.newlineIndex(oe, !0) + 1,
                    H = ne.newlineIndex(fe + oe + Y),
                    V = ne.domNode.textContent.slice(ue, H).split(`
`);
                  (oe = 0),
                    V.forEach(function (W, $) {
                      P
                        ? (ne.insertAt(ue + oe, U.TAB),
                          (oe += U.TAB.length),
                          $ === 0 ? (K += U.TAB.length) : (Y += U.TAB.length))
                        : W.startsWith(U.TAB) &&
                          (ne.deleteAt(ue + oe, U.TAB.length),
                          (oe -= U.TAB.length),
                          $ === 0 ? (K -= U.TAB.length) : (Y -= U.TAB.length)),
                        (oe += W.length + 1);
                    }),
                    this.quill.update(v.default.sources.USER),
                    this.quill.setSelection(K, Y, v.default.sources.SILENT);
                }
              },
            };
          }
          function F(P) {
            return {
              key: P[0].toUpperCase(),
              shortKey: !0,
              handler: function (z, U) {
                this.quill.format(P, !U.format[P], v.default.sources.USER);
              },
            };
          }
          function D(P) {
            if (typeof P == 'string' || typeof P == 'number') return D({ key: P });
            if (
              ((typeof P == 'undefined' ? 'undefined' : g(P)) === 'object' &&
                (P = (0, p.default)(P, !1)),
              typeof P.key == 'string')
            )
              if (C.keys[P.key.toUpperCase()] != null) P.key = C.keys[P.key.toUpperCase()];
              else if (P.key.length === 1) P.key = P.key.toUpperCase().charCodeAt(0);
              else return null;
            return P.shortKey && ((P[B] = P.shortKey), delete P.shortKey), P;
          }
          (e.default = C), (e.SHORTKEY = B);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function a(l, d) {
                var i = [],
                  v = !0,
                  N = !1,
                  w = void 0;
                try {
                  for (
                    var A = l[Symbol.iterator](), S;
                    !(v = (S = A.next()).done) && (i.push(S.value), !(d && i.length === d));
                    v = !0
                  );
                } catch (O) {
                  (N = !0), (w = O);
                } finally {
                  try {
                    !v && A.return && A.return();
                  } finally {
                    if (N) throw w;
                  }
                }
                return i;
              }
              return function (l, d) {
                if (Array.isArray(l)) return l;
                if (Symbol.iterator in Object(l)) return a(l, d);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            _ = function a(l, d, i) {
              l === null && (l = Function.prototype);
              var v = Object.getOwnPropertyDescriptor(l, d);
              if (v === void 0) {
                var N = Object.getPrototypeOf(l);
                return N === null ? void 0 : a(N, d, i);
              } else {
                if ('value' in v) return v.value;
                var w = v.get;
                return w === void 0 ? void 0 : w.call(i);
              }
            },
            E = (function () {
              function a(l, d) {
                for (var i = 0; i < d.length; i++) {
                  var v = d[i];
                  (v.enumerable = v.enumerable || !1),
                    (v.configurable = !0),
                    'value' in v && (v.writable = !0),
                    Object.defineProperty(l, v.key, v);
                }
              }
              return function (l, d, i) {
                return d && a(l.prototype, d), i && a(l, i), l;
              };
            })(),
            m = n(0),
            p = t(m),
            c = n(7),
            o = t(c);
          function t(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function r(a, l) {
            if (!(a instanceof l)) throw new TypeError('Cannot call a class as a function');
          }
          function f(a, l) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l == 'object' || typeof l == 'function') ? l : a;
          }
          function u(a, l) {
            if (typeof l != 'function' && l !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof l
              );
            (a.prototype = Object.create(l && l.prototype, {
              constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
            })),
              l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : (a.__proto__ = l));
          }
          var s = (function (a) {
            u(l, a), E(l, null, [{ key: 'value', value: function () {} }]);
            function l(d, i) {
              r(this, l);
              var v = f(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, d));
              return (
                (v.selection = i),
                (v.textNode = document.createTextNode(l.CONTENTS)),
                v.domNode.appendChild(v.textNode),
                (v._length = 0),
                v
              );
            }
            return (
              E(l, [
                {
                  key: 'detach',
                  value: function () {
                    this.parent != null && this.parent.removeChild(this);
                  },
                },
                {
                  key: 'format',
                  value: function (i, v) {
                    if (this._length !== 0)
                      return _(
                        l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                        'format',
                        this
                      ).call(this, i, v);
                    for (
                      var N = this, w = 0;
                      N != null && N.statics.scope !== p.default.Scope.BLOCK_BLOT;

                    )
                      (w += N.offset(N.parent)), (N = N.parent);
                    N != null &&
                      ((this._length = l.CONTENTS.length),
                      N.optimize(),
                      N.formatAt(w, l.CONTENTS.length, i, v),
                      (this._length = 0));
                  },
                },
                {
                  key: 'index',
                  value: function (i, v) {
                    return i === this.textNode
                      ? 0
                      : _(
                          l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                          'index',
                          this
                        ).call(this, i, v);
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
                    _(
                      l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
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
                      var i = this.textNode,
                        v = this.selection.getNativeRange(),
                        N = void 0,
                        w = void 0,
                        A = void 0;
                      if (v != null && v.start.node === i && v.end.node === i) {
                        var S = [i, v.start.offset, v.end.offset];
                        (N = S[0]), (w = S[1]), (A = S[2]);
                      }
                      for (
                        ;
                        this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode;

                      )
                        this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                      if (this.textNode.data !== l.CONTENTS) {
                        var O = this.textNode.data.split(l.CONTENTS).join('');
                        this.next instanceof o.default
                          ? ((N = this.next.domNode),
                            this.next.insertAt(0, O),
                            (this.textNode.data = l.CONTENTS))
                          : ((this.textNode.data = O),
                            this.parent.insertBefore(p.default.create(this.textNode), this),
                            (this.textNode = document.createTextNode(l.CONTENTS)),
                            this.domNode.appendChild(this.textNode));
                      }
                      if ((this.remove(), w != null)) {
                        var y = [w, A].map(function (T) {
                            return Math.max(0, Math.min(N.data.length, T - 1));
                          }),
                          b = g(y, 2);
                        return (
                          (w = b[0]),
                          (A = b[1]),
                          { startNode: N, startOffset: w, endNode: N, endOffset: A }
                        );
                      }
                    }
                  },
                },
                {
                  key: 'update',
                  value: function (i, v) {
                    var N = this;
                    if (
                      i.some(function (A) {
                        return A.type === 'characterData' && A.target === N.textNode;
                      })
                    ) {
                      var w = this.restore();
                      w && (v.range = w);
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
              l
            );
          })(p.default.Embed);
          (s.blotName = 'cursor'),
            (s.className = 'ql-cursor'),
            (s.tagName = 'span'),
            (s.CONTENTS = '\uFEFF'),
            (e.default = s);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(0),
            _ = p(g),
            E = n(4),
            m = p(E);
          function p(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function c(f, u) {
            if (!(f instanceof u)) throw new TypeError('Cannot call a class as a function');
          }
          function o(f, u) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u == 'object' || typeof u == 'function') ? u : f;
          }
          function t(f, u) {
            if (typeof u != 'function' && u !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof u
              );
            (f.prototype = Object.create(u && u.prototype, {
              constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 },
            })),
              u && (Object.setPrototypeOf ? Object.setPrototypeOf(f, u) : (f.__proto__ = u));
          }
          var r = (function (f) {
            t(u, f);
            function u() {
              return (
                c(this, u),
                o(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments))
              );
            }
            return u;
          })(_.default.Container);
          (r.allowedChildren = [m.default, E.BlockEmbed, r]), (e.default = r);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0);
          var g = (function () {
              function s(a, l) {
                for (var d = 0; d < l.length; d++) {
                  var i = l[d];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    'value' in i && (i.writable = !0),
                    Object.defineProperty(a, i.key, i);
                }
              }
              return function (a, l, d) {
                return l && s(a.prototype, l), d && s(a, d), a;
              };
            })(),
            _ = function s(a, l, d) {
              a === null && (a = Function.prototype);
              var i = Object.getOwnPropertyDescriptor(a, l);
              if (i === void 0) {
                var v = Object.getPrototypeOf(a);
                return v === null ? void 0 : s(v, l, d);
              } else {
                if ('value' in i) return i.value;
                var N = i.get;
                return N === void 0 ? void 0 : N.call(d);
              }
            },
            E = n(0),
            m = p(E);
          function p(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function c(s, a) {
            if (!(s instanceof a)) throw new TypeError('Cannot call a class as a function');
          }
          function o(s, a) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == 'object' || typeof a == 'function') ? a : s;
          }
          function t(s, a) {
            if (typeof a != 'function' && a !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof a
              );
            (s.prototype = Object.create(a && a.prototype, {
              constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 },
            })),
              a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : (s.__proto__ = a));
          }
          var r = (function (s) {
              t(a, s);
              function a() {
                return (
                  c(this, a),
                  o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
                );
              }
              return (
                g(a, [
                  {
                    key: 'value',
                    value: function (d) {
                      var i = _(
                        a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                        'value',
                        this
                      ).call(this, d);
                      return i.startsWith('rgb(')
                        ? ((i = i.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '')),
                          '#' +
                            i
                              .split(',')
                              .map(function (v) {
                                return ('00' + parseInt(v).toString(16)).slice(-2);
                              })
                              .join(''))
                        : i;
                    },
                  },
                ]),
                a
              );
            })(m.default.Attributor.Style),
            f = new m.default.Attributor.Class('color', 'ql-color', {
              scope: m.default.Scope.INLINE,
            }),
            u = new r('color', 'color', { scope: m.default.Scope.INLINE });
          (e.ColorAttributor = r), (e.ColorClass = f), (e.ColorStyle = u);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.sanitize = e.default = void 0);
          var g = (function () {
              function u(s, a) {
                for (var l = 0; l < a.length; l++) {
                  var d = a[l];
                  (d.enumerable = d.enumerable || !1),
                    (d.configurable = !0),
                    'value' in d && (d.writable = !0),
                    Object.defineProperty(s, d.key, d);
                }
              }
              return function (s, a, l) {
                return a && u(s.prototype, a), l && u(s, l), s;
              };
            })(),
            _ = function u(s, a, l) {
              s === null && (s = Function.prototype);
              var d = Object.getOwnPropertyDescriptor(s, a);
              if (d === void 0) {
                var i = Object.getPrototypeOf(s);
                return i === null ? void 0 : u(i, a, l);
              } else {
                if ('value' in d) return d.value;
                var v = d.get;
                return v === void 0 ? void 0 : v.call(l);
              }
            },
            E = n(6),
            m = p(E);
          function p(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function c(u, s) {
            if (!(u instanceof s)) throw new TypeError('Cannot call a class as a function');
          }
          function o(u, s) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == 'object' || typeof s == 'function') ? s : u;
          }
          function t(u, s) {
            if (typeof s != 'function' && s !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof s
              );
            (u.prototype = Object.create(s && s.prototype, {
              constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
            })),
              s && (Object.setPrototypeOf ? Object.setPrototypeOf(u, s) : (u.__proto__ = s));
          }
          var r = (function (u) {
            t(s, u);
            function s() {
              return (
                c(this, s),
                o(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments))
              );
            }
            return (
              g(
                s,
                [
                  {
                    key: 'format',
                    value: function (l, d) {
                      if (l !== this.statics.blotName || !d)
                        return _(
                          s.prototype.__proto__ || Object.getPrototypeOf(s.prototype),
                          'format',
                          this
                        ).call(this, l, d);
                      (d = this.constructor.sanitize(d)), this.domNode.setAttribute('href', d);
                    },
                  },
                ],
                [
                  {
                    key: 'create',
                    value: function (l) {
                      var d = _(s.__proto__ || Object.getPrototypeOf(s), 'create', this).call(
                        this,
                        l
                      );
                      return (
                        (l = this.sanitize(l)),
                        d.setAttribute('href', l),
                        d.setAttribute('target', '_blank'),
                        d
                      );
                    },
                  },
                  {
                    key: 'formats',
                    value: function (l) {
                      return l.getAttribute('href');
                    },
                  },
                  {
                    key: 'sanitize',
                    value: function (l) {
                      return f(l, this.PROTOCOL_WHITELIST) ? l : this.SANITIZED_URL;
                    },
                  },
                ]
              ),
              s
            );
          })(m.default);
          (r.blotName = 'link'),
            (r.tagName = 'A'),
            (r.SANITIZED_URL = 'about:blank'),
            (r.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel']);
          function f(u, s) {
            var a = document.createElement('a');
            a.href = u;
            var l = a.href.slice(0, a.href.indexOf(':'));
            return s.indexOf(l) > -1;
          }
          (e.default = r), (e.sanitize = f);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (s) {
                    return typeof s;
                  }
                : function (s) {
                    return s &&
                      typeof Symbol == 'function' &&
                      s.constructor === Symbol &&
                      s !== Symbol.prototype
                      ? 'symbol'
                      : typeof s;
                  },
            _ = (function () {
              function s(a, l) {
                for (var d = 0; d < l.length; d++) {
                  var i = l[d];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    'value' in i && (i.writable = !0),
                    Object.defineProperty(a, i.key, i);
                }
              }
              return function (a, l, d) {
                return l && s(a.prototype, l), d && s(a, d), a;
              };
            })(),
            E = n(23),
            m = o(E),
            p = n(107),
            c = o(p);
          function o(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function t(s, a) {
            if (!(s instanceof a)) throw new TypeError('Cannot call a class as a function');
          }
          var r = 0;
          function f(s, a) {
            s.setAttribute(a, s.getAttribute(a) !== 'true');
          }
          var u = (function () {
            function s(a) {
              var l = this;
              t(this, s),
                (this.select = a),
                (this.container = document.createElement('span')),
                this.buildPicker(),
                (this.select.style.display = 'none'),
                this.select.parentNode.insertBefore(this.container, this.select),
                this.label.addEventListener('mousedown', function () {
                  l.togglePicker();
                }),
                this.label.addEventListener('keydown', function (d) {
                  switch (d.keyCode) {
                    case m.default.keys.ENTER:
                      l.togglePicker();
                      break;
                    case m.default.keys.ESCAPE:
                      l.escape(), d.preventDefault();
                      break;
                    default:
                  }
                }),
                this.select.addEventListener('change', this.update.bind(this));
            }
            return (
              _(s, [
                {
                  key: 'togglePicker',
                  value: function () {
                    this.container.classList.toggle('ql-expanded'),
                      f(this.label, 'aria-expanded'),
                      f(this.options, 'aria-hidden');
                  },
                },
                {
                  key: 'buildItem',
                  value: function (l) {
                    var d = this,
                      i = document.createElement('span');
                    return (
                      (i.tabIndex = '0'),
                      i.setAttribute('role', 'button'),
                      i.classList.add('ql-picker-item'),
                      l.hasAttribute('value') &&
                        i.setAttribute('data-value', l.getAttribute('value')),
                      l.textContent && i.setAttribute('data-label', l.textContent),
                      i.addEventListener('click', function () {
                        d.selectItem(i, !0);
                      }),
                      i.addEventListener('keydown', function (v) {
                        switch (v.keyCode) {
                          case m.default.keys.ENTER:
                            d.selectItem(i, !0), v.preventDefault();
                            break;
                          case m.default.keys.ESCAPE:
                            d.escape(), v.preventDefault();
                            break;
                          default:
                        }
                      }),
                      i
                    );
                  },
                },
                {
                  key: 'buildLabel',
                  value: function () {
                    var l = document.createElement('span');
                    return (
                      l.classList.add('ql-picker-label'),
                      (l.innerHTML = c.default),
                      (l.tabIndex = '0'),
                      l.setAttribute('role', 'button'),
                      l.setAttribute('aria-expanded', 'false'),
                      this.container.appendChild(l),
                      l
                    );
                  },
                },
                {
                  key: 'buildOptions',
                  value: function () {
                    var l = this,
                      d = document.createElement('span');
                    d.classList.add('ql-picker-options'),
                      d.setAttribute('aria-hidden', 'true'),
                      (d.tabIndex = '-1'),
                      (d.id = 'ql-picker-options-' + r),
                      (r += 1),
                      this.label.setAttribute('aria-controls', d.id),
                      (this.options = d),
                      [].slice.call(this.select.options).forEach(function (i) {
                        var v = l.buildItem(i);
                        d.appendChild(v), i.selected === !0 && l.selectItem(v);
                      }),
                      this.container.appendChild(d);
                  },
                },
                {
                  key: 'buildPicker',
                  value: function () {
                    var l = this;
                    [].slice.call(this.select.attributes).forEach(function (d) {
                      l.container.setAttribute(d.name, d.value);
                    }),
                      this.container.classList.add('ql-picker'),
                      (this.label = this.buildLabel()),
                      this.buildOptions();
                  },
                },
                {
                  key: 'escape',
                  value: function () {
                    var l = this;
                    this.close(),
                      setTimeout(function () {
                        return l.label.focus();
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
                  value: function (l) {
                    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                      i = this.container.querySelector('.ql-selected');
                    if (
                      l !== i &&
                      (i != null && i.classList.remove('ql-selected'),
                      l != null &&
                        (l.classList.add('ql-selected'),
                        (this.select.selectedIndex = [].indexOf.call(l.parentNode.children, l)),
                        l.hasAttribute('data-value')
                          ? this.label.setAttribute('data-value', l.getAttribute('data-value'))
                          : this.label.removeAttribute('data-value'),
                        l.hasAttribute('data-label')
                          ? this.label.setAttribute('data-label', l.getAttribute('data-label'))
                          : this.label.removeAttribute('data-label'),
                        d))
                    ) {
                      if (typeof Event == 'function')
                        this.select.dispatchEvent(new Event('change'));
                      else if (
                        (typeof Event == 'undefined' ? 'undefined' : g(Event)) === 'object'
                      ) {
                        var v = document.createEvent('Event');
                        v.initEvent('change', !0, !0), this.select.dispatchEvent(v);
                      }
                      this.close();
                    }
                  },
                },
                {
                  key: 'update',
                  value: function () {
                    var l = void 0;
                    if (this.select.selectedIndex > -1) {
                      var d =
                        this.container.querySelector('.ql-picker-options').children[
                          this.select.selectedIndex
                        ];
                      (l = this.select.options[this.select.selectedIndex]), this.selectItem(d);
                    } else this.selectItem(null);
                    var i = l != null && l !== this.select.querySelector('option[selected]');
                    this.label.classList.toggle('ql-active', i);
                  },
                },
              ]),
              s
            );
          })();
          e.default = u;
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(0),
            _ = R(g),
            E = n(5),
            m = R(E),
            p = n(4),
            c = R(p),
            o = n(16),
            t = R(o),
            r = n(25),
            f = R(r),
            u = n(24),
            s = R(u),
            a = n(35),
            l = R(a),
            d = n(6),
            i = R(d),
            v = n(22),
            N = R(v),
            w = n(7),
            A = R(w),
            S = n(55),
            O = R(S),
            y = n(42),
            b = R(y),
            T = n(23),
            x = R(T);
          function R(B) {
            return B && B.__esModule ? B : { default: B };
          }
          m.default.register({
            'blots/block': c.default,
            'blots/block/embed': p.BlockEmbed,
            'blots/break': t.default,
            'blots/container': f.default,
            'blots/cursor': s.default,
            'blots/embed': l.default,
            'blots/inline': i.default,
            'blots/scroll': N.default,
            'blots/text': A.default,
            'modules/clipboard': O.default,
            'modules/history': b.default,
            'modules/keyboard': x.default,
          }),
            _.default.register(c.default, t.default, s.default, i.default, N.default, A.default),
            (e.default = m.default);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(1),
            _ = (function () {
              function E(m) {
                (this.domNode = m), (this.domNode[g.DATA_KEY] = { blot: this });
              }
              return (
                Object.defineProperty(E.prototype, 'statics', {
                  get: function () {
                    return this.constructor;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (E.create = function (m) {
                  if (this.tagName == null)
                    throw new g.ParchmentError('Blot definition missing tagName');
                  var p;
                  return (
                    Array.isArray(this.tagName)
                      ? (typeof m == 'string' &&
                          ((m = m.toUpperCase()),
                          parseInt(m).toString() === m && (m = parseInt(m))),
                        typeof m == 'number'
                          ? (p = document.createElement(this.tagName[m - 1]))
                          : this.tagName.indexOf(m) > -1
                          ? (p = document.createElement(m))
                          : (p = document.createElement(this.tagName[0])))
                      : (p = document.createElement(this.tagName)),
                    this.className && p.classList.add(this.className),
                    p
                  );
                }),
                (E.prototype.attach = function () {
                  this.parent != null && (this.scroll = this.parent.scroll);
                }),
                (E.prototype.clone = function () {
                  var m = this.domNode.cloneNode(!1);
                  return g.create(m);
                }),
                (E.prototype.detach = function () {
                  this.parent != null && this.parent.removeChild(this),
                    delete this.domNode[g.DATA_KEY];
                }),
                (E.prototype.deleteAt = function (m, p) {
                  var c = this.isolate(m, p);
                  c.remove();
                }),
                (E.prototype.formatAt = function (m, p, c, o) {
                  var t = this.isolate(m, p);
                  if (g.query(c, g.Scope.BLOT) != null && o) t.wrap(c, o);
                  else if (g.query(c, g.Scope.ATTRIBUTE) != null) {
                    var r = g.create(this.statics.scope);
                    t.wrap(r), r.format(c, o);
                  }
                }),
                (E.prototype.insertAt = function (m, p, c) {
                  var o = c == null ? g.create('text', p) : g.create(p, c),
                    t = this.split(m);
                  this.parent.insertBefore(o, t);
                }),
                (E.prototype.insertInto = function (m, p) {
                  p === void 0 && (p = null),
                    this.parent != null && this.parent.children.remove(this);
                  var c = null;
                  m.children.insertBefore(this, p),
                    p != null && (c = p.domNode),
                    (this.domNode.parentNode != m.domNode || this.domNode.nextSibling != c) &&
                      m.domNode.insertBefore(this.domNode, c),
                    (this.parent = m),
                    this.attach();
                }),
                (E.prototype.isolate = function (m, p) {
                  var c = this.split(m);
                  return c.split(p), c;
                }),
                (E.prototype.length = function () {
                  return 1;
                }),
                (E.prototype.offset = function (m) {
                  return (
                    m === void 0 && (m = this.parent),
                    this.parent == null || this == m
                      ? 0
                      : this.parent.children.offset(this) + this.parent.offset(m)
                  );
                }),
                (E.prototype.optimize = function (m) {
                  this.domNode[g.DATA_KEY] != null && delete this.domNode[g.DATA_KEY].mutations;
                }),
                (E.prototype.remove = function () {
                  this.domNode.parentNode != null &&
                    this.domNode.parentNode.removeChild(this.domNode),
                    this.detach();
                }),
                (E.prototype.replace = function (m) {
                  m.parent != null && (m.parent.insertBefore(this, m.next), m.remove());
                }),
                (E.prototype.replaceWith = function (m, p) {
                  var c = typeof m == 'string' ? g.create(m, p) : m;
                  return c.replace(this), c;
                }),
                (E.prototype.split = function (m, p) {
                  return m === 0 ? this : this.next;
                }),
                (E.prototype.update = function (m, p) {}),
                (E.prototype.wrap = function (m, p) {
                  var c = typeof m == 'string' ? g.create(m, p) : m;
                  return (
                    this.parent != null && this.parent.insertBefore(c, this.next),
                    c.appendChild(this),
                    c
                  );
                }),
                (E.blotName = 'abstract'),
                E
              );
            })();
          e.default = _;
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(12),
            _ = n(32),
            E = n(33),
            m = n(1),
            p = (function () {
              function c(o) {
                (this.attributes = {}), (this.domNode = o), this.build();
              }
              return (
                (c.prototype.attribute = function (o, t) {
                  t
                    ? o.add(this.domNode, t) &&
                      (o.value(this.domNode) != null
                        ? (this.attributes[o.attrName] = o)
                        : delete this.attributes[o.attrName])
                    : (o.remove(this.domNode), delete this.attributes[o.attrName]);
                }),
                (c.prototype.build = function () {
                  var o = this;
                  this.attributes = {};
                  var t = g.default.keys(this.domNode),
                    r = _.default.keys(this.domNode),
                    f = E.default.keys(this.domNode);
                  t.concat(r)
                    .concat(f)
                    .forEach(function (u) {
                      var s = m.query(u, m.Scope.ATTRIBUTE);
                      s instanceof g.default && (o.attributes[s.attrName] = s);
                    });
                }),
                (c.prototype.copy = function (o) {
                  var t = this;
                  Object.keys(this.attributes).forEach(function (r) {
                    var f = t.attributes[r].value(t.domNode);
                    o.format(r, f);
                  });
                }),
                (c.prototype.move = function (o) {
                  var t = this;
                  this.copy(o),
                    Object.keys(this.attributes).forEach(function (r) {
                      t.attributes[r].remove(t.domNode);
                    }),
                    (this.attributes = {});
                }),
                (c.prototype.values = function () {
                  var o = this;
                  return Object.keys(this.attributes).reduce(function (t, r) {
                    return (t[r] = o.attributes[r].value(o.domNode)), t;
                  }, {});
                }),
                c
              );
            })();
          e.default = p;
        },
        function (h, e, n) {
          'use strict';
          var g =
            (this && this.__extends) ||
            (function () {
              var p =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (c, o) {
                    c.__proto__ = o;
                  }) ||
                function (c, o) {
                  for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
                };
              return function (c, o) {
                p(c, o);
                function t() {
                  this.constructor = c;
                }
                c.prototype =
                  o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
              };
            })();
          Object.defineProperty(e, '__esModule', { value: !0 });
          var _ = n(12);
          function E(p, c) {
            var o = p.getAttribute('class') || '';
            return o.split(/\s+/).filter(function (t) {
              return t.indexOf(c + '-') === 0;
            });
          }
          var m = (function (p) {
            g(c, p);
            function c() {
              return (p !== null && p.apply(this, arguments)) || this;
            }
            return (
              (c.keys = function (o) {
                return (o.getAttribute('class') || '').split(/\s+/).map(function (t) {
                  return t.split('-').slice(0, -1).join('-');
                });
              }),
              (c.prototype.add = function (o, t) {
                return this.canAdd(o, t)
                  ? (this.remove(o), o.classList.add(this.keyName + '-' + t), !0)
                  : !1;
              }),
              (c.prototype.remove = function (o) {
                var t = E(o, this.keyName);
                t.forEach(function (r) {
                  o.classList.remove(r);
                }),
                  o.classList.length === 0 && o.removeAttribute('class');
              }),
              (c.prototype.value = function (o) {
                var t = E(o, this.keyName)[0] || '',
                  r = t.slice(this.keyName.length + 1);
                return this.canAdd(o, r) ? r : '';
              }),
              c
            );
          })(_.default);
          e.default = m;
        },
        function (h, e, n) {
          'use strict';
          var g =
            (this && this.__extends) ||
            (function () {
              var p =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (c, o) {
                    c.__proto__ = o;
                  }) ||
                function (c, o) {
                  for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
                };
              return function (c, o) {
                p(c, o);
                function t() {
                  this.constructor = c;
                }
                c.prototype =
                  o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
              };
            })();
          Object.defineProperty(e, '__esModule', { value: !0 });
          var _ = n(12);
          function E(p) {
            var c = p.split('-'),
              o = c
                .slice(1)
                .map(function (t) {
                  return t[0].toUpperCase() + t.slice(1);
                })
                .join('');
            return c[0] + o;
          }
          var m = (function (p) {
            g(c, p);
            function c() {
              return (p !== null && p.apply(this, arguments)) || this;
            }
            return (
              (c.keys = function (o) {
                return (o.getAttribute('style') || '').split(';').map(function (t) {
                  var r = t.split(':');
                  return r[0].trim();
                });
              }),
              (c.prototype.add = function (o, t) {
                return this.canAdd(o, t) ? ((o.style[E(this.keyName)] = t), !0) : !1;
              }),
              (c.prototype.remove = function (o) {
                (o.style[E(this.keyName)] = ''),
                  o.getAttribute('style') || o.removeAttribute('style');
              }),
              (c.prototype.value = function (o) {
                var t = o.style[E(this.keyName)];
                return this.canAdd(o, t) ? t : '';
              }),
              c
            );
          })(_.default);
          e.default = m;
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
            function m(p, c) {
              for (var o = 0; o < c.length; o++) {
                var t = c[o];
                (t.enumerable = t.enumerable || !1),
                  (t.configurable = !0),
                  'value' in t && (t.writable = !0),
                  Object.defineProperty(p, t.key, t);
              }
            }
            return function (p, c, o) {
              return c && m(p.prototype, c), o && m(p, o), p;
            };
          })();
          function _(m, p) {
            if (!(m instanceof p)) throw new TypeError('Cannot call a class as a function');
          }
          var E = (function () {
            function m(p, c) {
              _(this, m), (this.quill = p), (this.options = c), (this.modules = {});
            }
            return (
              g(m, [
                {
                  key: 'init',
                  value: function () {
                    var c = this;
                    Object.keys(this.options.modules).forEach(function (o) {
                      c.modules[o] == null && c.addModule(o);
                    });
                  },
                },
                {
                  key: 'addModule',
                  value: function (c) {
                    var o = this.quill.constructor.import('modules/' + c);
                    return (
                      (this.modules[c] = new o(this.quill, this.options.modules[c] || {})),
                      this.modules[c]
                    );
                  },
                },
              ]),
              m
            );
          })();
          (E.DEFAULTS = { modules: {} }), (E.themes = { default: E }), (e.default = E);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function a(l, d) {
                for (var i = 0; i < d.length; i++) {
                  var v = d[i];
                  (v.enumerable = v.enumerable || !1),
                    (v.configurable = !0),
                    'value' in v && (v.writable = !0),
                    Object.defineProperty(l, v.key, v);
                }
              }
              return function (l, d, i) {
                return d && a(l.prototype, d), i && a(l, i), l;
              };
            })(),
            _ = function a(l, d, i) {
              l === null && (l = Function.prototype);
              var v = Object.getOwnPropertyDescriptor(l, d);
              if (v === void 0) {
                var N = Object.getPrototypeOf(l);
                return N === null ? void 0 : a(N, d, i);
              } else {
                if ('value' in v) return v.value;
                var w = v.get;
                return w === void 0 ? void 0 : w.call(i);
              }
            },
            E = n(0),
            m = o(E),
            p = n(7),
            c = o(p);
          function o(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function t(a, l) {
            if (!(a instanceof l)) throw new TypeError('Cannot call a class as a function');
          }
          function r(a, l) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l == 'object' || typeof l == 'function') ? l : a;
          }
          function f(a, l) {
            if (typeof l != 'function' && l !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof l
              );
            (a.prototype = Object.create(l && l.prototype, {
              constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
            })),
              l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : (a.__proto__ = l));
          }
          var u = '\uFEFF',
            s = (function (a) {
              f(l, a);
              function l(d) {
                t(this, l);
                var i = r(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, d));
                return (
                  (i.contentNode = document.createElement('span')),
                  i.contentNode.setAttribute('contenteditable', !1),
                  [].slice.call(i.domNode.childNodes).forEach(function (v) {
                    i.contentNode.appendChild(v);
                  }),
                  (i.leftGuard = document.createTextNode(u)),
                  (i.rightGuard = document.createTextNode(u)),
                  i.domNode.appendChild(i.leftGuard),
                  i.domNode.appendChild(i.contentNode),
                  i.domNode.appendChild(i.rightGuard),
                  i
                );
              }
              return (
                g(l, [
                  {
                    key: 'index',
                    value: function (i, v) {
                      return i === this.leftGuard
                        ? 0
                        : i === this.rightGuard
                        ? 1
                        : _(
                            l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                            'index',
                            this
                          ).call(this, i, v);
                    },
                  },
                  {
                    key: 'restore',
                    value: function (i) {
                      var v = void 0,
                        N = void 0,
                        w = i.data.split(u).join('');
                      if (i === this.leftGuard)
                        if (this.prev instanceof c.default) {
                          var A = this.prev.length();
                          this.prev.insertAt(A, w),
                            (v = { startNode: this.prev.domNode, startOffset: A + w.length });
                        } else
                          (N = document.createTextNode(w)),
                            this.parent.insertBefore(m.default.create(N), this),
                            (v = { startNode: N, startOffset: w.length });
                      else
                        i === this.rightGuard &&
                          (this.next instanceof c.default
                            ? (this.next.insertAt(0, w),
                              (v = { startNode: this.next.domNode, startOffset: w.length }))
                            : ((N = document.createTextNode(w)),
                              this.parent.insertBefore(m.default.create(N), this.next),
                              (v = { startNode: N, startOffset: w.length })));
                      return (i.data = u), v;
                    },
                  },
                  {
                    key: 'update',
                    value: function (i, v) {
                      var N = this;
                      i.forEach(function (w) {
                        if (
                          w.type === 'characterData' &&
                          (w.target === N.leftGuard || w.target === N.rightGuard)
                        ) {
                          var A = N.restore(w.target);
                          A && (v.range = A);
                        }
                      });
                    },
                  },
                ]),
                l
              );
            })(m.default.Embed);
          e.default = s;
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0);
          var g = n(0),
            _ = E(g);
          function E(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var m = { scope: _.default.Scope.BLOCK, whitelist: ['right', 'center', 'justify'] },
            p = new _.default.Attributor.Attribute('align', 'align', m),
            c = new _.default.Attributor.Class('align', 'ql-align', m),
            o = new _.default.Attributor.Style('align', 'text-align', m);
          (e.AlignAttribute = p), (e.AlignClass = c), (e.AlignStyle = o);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.BackgroundStyle = e.BackgroundClass = void 0);
          var g = n(0),
            _ = m(g),
            E = n(26);
          function m(o) {
            return o && o.__esModule ? o : { default: o };
          }
          var p = new _.default.Attributor.Class('background', 'ql-bg', {
              scope: _.default.Scope.INLINE,
            }),
            c = new E.ColorAttributor('background', 'background-color', {
              scope: _.default.Scope.INLINE,
            });
          (e.BackgroundClass = p), (e.BackgroundStyle = c);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0);
          var g = n(0),
            _ = E(g);
          function E(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var m = { scope: _.default.Scope.BLOCK, whitelist: ['rtl'] },
            p = new _.default.Attributor.Attribute('direction', 'dir', m),
            c = new _.default.Attributor.Class('direction', 'ql-direction', m),
            o = new _.default.Attributor.Style('direction', 'direction', m);
          (e.DirectionAttribute = p), (e.DirectionClass = c), (e.DirectionStyle = o);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.FontClass = e.FontStyle = void 0);
          var g = (function () {
              function a(l, d) {
                for (var i = 0; i < d.length; i++) {
                  var v = d[i];
                  (v.enumerable = v.enumerable || !1),
                    (v.configurable = !0),
                    'value' in v && (v.writable = !0),
                    Object.defineProperty(l, v.key, v);
                }
              }
              return function (l, d, i) {
                return d && a(l.prototype, d), i && a(l, i), l;
              };
            })(),
            _ = function a(l, d, i) {
              l === null && (l = Function.prototype);
              var v = Object.getOwnPropertyDescriptor(l, d);
              if (v === void 0) {
                var N = Object.getPrototypeOf(l);
                return N === null ? void 0 : a(N, d, i);
              } else {
                if ('value' in v) return v.value;
                var w = v.get;
                return w === void 0 ? void 0 : w.call(i);
              }
            },
            E = n(0),
            m = p(E);
          function p(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function c(a, l) {
            if (!(a instanceof l)) throw new TypeError('Cannot call a class as a function');
          }
          function o(a, l) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l == 'object' || typeof l == 'function') ? l : a;
          }
          function t(a, l) {
            if (typeof l != 'function' && l !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof l
              );
            (a.prototype = Object.create(l && l.prototype, {
              constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
            })),
              l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : (a.__proto__ = l));
          }
          var r = { scope: m.default.Scope.INLINE, whitelist: ['serif', 'monospace'] },
            f = new m.default.Attributor.Class('font', 'ql-font', r),
            u = (function (a) {
              t(l, a);
              function l() {
                return (
                  c(this, l),
                  o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments))
                );
              }
              return (
                g(l, [
                  {
                    key: 'value',
                    value: function (i) {
                      return _(
                        l.prototype.__proto__ || Object.getPrototypeOf(l.prototype),
                        'value',
                        this
                      )
                        .call(this, i)
                        .replace(/["']/g, '');
                    },
                  },
                ]),
                l
              );
            })(m.default.Attributor.Style),
            s = new u('font', 'font-family', r);
          (e.FontStyle = s), (e.FontClass = f);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.SizeStyle = e.SizeClass = void 0);
          var g = n(0),
            _ = E(g);
          function E(c) {
            return c && c.__esModule ? c : { default: c };
          }
          var m = new _.default.Attributor.Class('size', 'ql-size', {
              scope: _.default.Scope.INLINE,
              whitelist: ['small', 'large', 'huge'],
            }),
            p = new _.default.Attributor.Style('size', 'font-size', {
              scope: _.default.Scope.INLINE,
              whitelist: ['10px', '18px', '32px'],
            });
          (e.SizeClass = m), (e.SizeStyle = p);
        },
        function (h, e, n) {
          'use strict';
          h.exports = {
            align: { '': n(76), center: n(77), right: n(78), justify: n(79) },
            background: n(80),
            blockquote: n(81),
            bold: n(82),
            clean: n(83),
            code: n(58),
            'code-block': n(58),
            color: n(84),
            direction: { '': n(85), rtl: n(86) },
            float: { center: n(87), full: n(88), left: n(89), right: n(90) },
            formula: n(91),
            header: { 1: n(92), 2: n(93) },
            italic: n(94),
            image: n(95),
            indent: { '+1': n(96), '-1': n(97) },
            link: n(98),
            list: { ordered: n(99), bullet: n(100), check: n(101) },
            script: { sub: n(102), super: n(103) },
            strike: n(104),
            underline: n(105),
            video: n(106),
          };
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.getLastChangeIndex = e.default = void 0);
          var g = (function () {
              function d(i, v) {
                for (var N = 0; N < v.length; N++) {
                  var w = v[N];
                  (w.enumerable = w.enumerable || !1),
                    (w.configurable = !0),
                    'value' in w && (w.writable = !0),
                    Object.defineProperty(i, w.key, w);
                }
              }
              return function (i, v, N) {
                return v && d(i.prototype, v), N && d(i, N), i;
              };
            })(),
            _ = n(0),
            E = t(_),
            m = n(5),
            p = t(m),
            c = n(9),
            o = t(c);
          function t(d) {
            return d && d.__esModule ? d : { default: d };
          }
          function r(d, i) {
            if (!(d instanceof i)) throw new TypeError('Cannot call a class as a function');
          }
          function f(d, i) {
            if (!d)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == 'object' || typeof i == 'function') ? i : d;
          }
          function u(d, i) {
            if (typeof i != 'function' && i !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof i
              );
            (d.prototype = Object.create(i && i.prototype, {
              constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 },
            })),
              i && (Object.setPrototypeOf ? Object.setPrototypeOf(d, i) : (d.__proto__ = i));
          }
          var s = (function (d) {
            u(i, d);
            function i(v, N) {
              r(this, i);
              var w = f(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, v, N));
              return (
                (w.lastRecorded = 0),
                (w.ignoreChange = !1),
                w.clear(),
                w.quill.on(p.default.events.EDITOR_CHANGE, function (A, S, O, y) {
                  A !== p.default.events.TEXT_CHANGE ||
                    w.ignoreChange ||
                    (!w.options.userOnly || y === p.default.sources.USER
                      ? w.record(S, O)
                      : w.transform(S));
                }),
                w.quill.keyboard.addBinding({ key: 'Z', shortKey: !0 }, w.undo.bind(w)),
                w.quill.keyboard.addBinding(
                  { key: 'Z', shortKey: !0, shiftKey: !0 },
                  w.redo.bind(w)
                ),
                /Win/i.test(navigator.platform) &&
                  w.quill.keyboard.addBinding({ key: 'Y', shortKey: !0 }, w.redo.bind(w)),
                w
              );
            }
            return (
              g(i, [
                {
                  key: 'change',
                  value: function (N, w) {
                    if (this.stack[N].length !== 0) {
                      var A = this.stack[N].pop();
                      this.stack[w].push(A),
                        (this.lastRecorded = 0),
                        (this.ignoreChange = !0),
                        this.quill.updateContents(A[N], p.default.sources.USER),
                        (this.ignoreChange = !1);
                      var S = l(A[N]);
                      this.quill.setSelection(S);
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
                  value: function (N, w) {
                    if (N.ops.length !== 0) {
                      this.stack.redo = [];
                      var A = this.quill.getContents().diff(w),
                        S = Date.now();
                      if (
                        this.lastRecorded + this.options.delay > S &&
                        this.stack.undo.length > 0
                      ) {
                        var O = this.stack.undo.pop();
                        (A = A.compose(O.undo)), (N = O.redo.compose(N));
                      } else this.lastRecorded = S;
                      this.stack.undo.push({ redo: N, undo: A }),
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
                  value: function (N) {
                    this.stack.undo.forEach(function (w) {
                      (w.undo = N.transform(w.undo, !0)), (w.redo = N.transform(w.redo, !0));
                    }),
                      this.stack.redo.forEach(function (w) {
                        (w.undo = N.transform(w.undo, !0)), (w.redo = N.transform(w.redo, !0));
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
              i
            );
          })(o.default);
          s.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 };
          function a(d) {
            var i = d.ops[d.ops.length - 1];
            return i == null
              ? !1
              : i.insert != null
              ? typeof i.insert == 'string' &&
                i.insert.endsWith(`
`)
              : i.attributes != null
              ? Object.keys(i.attributes).some(function (v) {
                  return E.default.query(v, E.default.Scope.BLOCK) != null;
                })
              : !1;
          }
          function l(d) {
            var i = d.reduce(function (N, w) {
                return (N += w.delete || 0), N;
              }, 0),
              v = d.length() - i;
            return a(d) && (v -= 1), v;
          }
          (e.default = s), (e.getLastChangeIndex = l);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = e.BaseTooltip = void 0);
          var g = (function () {
              function q(L, F) {
                for (var D = 0; D < F.length; D++) {
                  var P = F[D];
                  (P.enumerable = P.enumerable || !1),
                    (P.configurable = !0),
                    'value' in P && (P.writable = !0),
                    Object.defineProperty(L, P.key, P);
                }
              }
              return function (L, F, D) {
                return F && q(L.prototype, F), D && q(L, D), L;
              };
            })(),
            _ = function q(L, F, D) {
              L === null && (L = Function.prototype);
              var P = Object.getOwnPropertyDescriptor(L, F);
              if (P === void 0) {
                var M = Object.getPrototypeOf(L);
                return M === null ? void 0 : q(M, F, D);
              } else {
                if ('value' in P) return P.value;
                var z = P.get;
                return z === void 0 ? void 0 : z.call(D);
              }
            },
            E = n(3),
            m = S(E),
            p = n(2),
            c = S(p),
            o = n(8),
            t = S(o),
            r = n(23),
            f = S(r),
            u = n(34),
            s = S(u),
            a = n(59),
            l = S(a),
            d = n(60),
            i = S(d),
            v = n(28),
            N = S(v),
            w = n(61),
            A = S(w);
          function S(q) {
            return q && q.__esModule ? q : { default: q };
          }
          function O(q, L) {
            if (!(q instanceof L)) throw new TypeError('Cannot call a class as a function');
          }
          function y(q, L) {
            if (!q)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return L && (typeof L == 'object' || typeof L == 'function') ? L : q;
          }
          function b(q, L) {
            if (typeof L != 'function' && L !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof L
              );
            (q.prototype = Object.create(L && L.prototype, {
              constructor: { value: q, enumerable: !1, writable: !0, configurable: !0 },
            })),
              L && (Object.setPrototypeOf ? Object.setPrototypeOf(q, L) : (q.__proto__ = L));
          }
          var T = [!1, 'center', 'right', 'justify'],
            x = [
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
            R = [!1, 'serif', 'monospace'],
            B = ['1', '2', '3', !1],
            C = ['small', !1, 'large', 'huge'],
            Z = (function (q) {
              b(L, q);
              function L(F, D) {
                O(this, L);
                var P = y(this, (L.__proto__ || Object.getPrototypeOf(L)).call(this, F, D)),
                  M = function z(U) {
                    if (!document.body.contains(F.root))
                      return document.body.removeEventListener('click', z);
                    P.tooltip != null &&
                      !P.tooltip.root.contains(U.target) &&
                      document.activeElement !== P.tooltip.textbox &&
                      !P.quill.hasFocus() &&
                      P.tooltip.hide(),
                      P.pickers != null &&
                        P.pickers.forEach(function (K) {
                          K.container.contains(U.target) || K.close();
                        });
                  };
                return F.emitter.listenDOM('click', document.body, M), P;
              }
              return (
                g(L, [
                  {
                    key: 'addModule',
                    value: function (D) {
                      var P = _(
                        L.prototype.__proto__ || Object.getPrototypeOf(L.prototype),
                        'addModule',
                        this
                      ).call(this, D);
                      return D === 'toolbar' && this.extendToolbar(P), P;
                    },
                  },
                  {
                    key: 'buildButtons',
                    value: function (D, P) {
                      D.forEach(function (M) {
                        var z = M.getAttribute('class') || '';
                        z.split(/\s+/).forEach(function (U) {
                          if (U.startsWith('ql-') && ((U = U.slice(3)), P[U] != null))
                            if (U === 'direction') M.innerHTML = P[U][''] + P[U].rtl;
                            else if (typeof P[U] == 'string') M.innerHTML = P[U];
                            else {
                              var K = M.value || '';
                              K != null && P[U][K] && (M.innerHTML = P[U][K]);
                            }
                        });
                      });
                    },
                  },
                  {
                    key: 'buildPickers',
                    value: function (D, P) {
                      var M = this;
                      this.pickers = D.map(function (U) {
                        if (U.classList.contains('ql-align'))
                          return (
                            U.querySelector('option') == null && k(U, T), new i.default(U, P.align)
                          );
                        if (
                          U.classList.contains('ql-background') ||
                          U.classList.contains('ql-color')
                        ) {
                          var K = U.classList.contains('ql-background') ? 'background' : 'color';
                          return (
                            U.querySelector('option') == null &&
                              k(U, x, K === 'background' ? '#ffffff' : '#000000'),
                            new l.default(U, P[K])
                          );
                        } else return U.querySelector('option') == null && (U.classList.contains('ql-font') ? k(U, R) : U.classList.contains('ql-header') ? k(U, B) : U.classList.contains('ql-size') && k(U, C)), new N.default(U);
                      });
                      var z = function () {
                        M.pickers.forEach(function (K) {
                          K.update();
                        });
                      };
                      this.quill.on(t.default.events.EDITOR_CHANGE, z);
                    },
                  },
                ]),
                L
              );
            })(s.default);
          Z.DEFAULTS = (0, m.default)(!0, {}, s.default.DEFAULTS, {
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
                          (D.onload = function (P) {
                            var M = L.quill.getSelection(!0);
                            L.quill.updateContents(
                              new c.default()
                                .retain(M.index)
                                .delete(M.length)
                                .insert({ image: P.target.result }),
                              t.default.sources.USER
                            ),
                              L.quill.setSelection(M.index + 1, t.default.sources.SILENT),
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
          var I = (function (q) {
            b(L, q);
            function L(F, D) {
              O(this, L);
              var P = y(this, (L.__proto__ || Object.getPrototypeOf(L)).call(this, F, D));
              return (P.textbox = P.root.querySelector('input[type="text"]')), P.listen(), P;
            }
            return (
              g(L, [
                {
                  key: 'listen',
                  value: function () {
                    var D = this;
                    this.textbox.addEventListener('keydown', function (P) {
                      f.default.match(P, 'enter')
                        ? (D.save(), P.preventDefault())
                        : f.default.match(P, 'escape') && (D.cancel(), P.preventDefault());
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
                      P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                    this.root.classList.remove('ql-hidden'),
                      this.root.classList.add('ql-editing'),
                      P != null
                        ? (this.textbox.value = P)
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
                        var P = this.quill.root.scrollTop;
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
                          (this.quill.root.scrollTop = P);
                        break;
                      }
                      case 'video':
                        D = j(D);
                      case 'formula': {
                        if (!D) break;
                        var M = this.quill.getSelection(!0);
                        if (M != null) {
                          var z = M.index + M.length;
                          this.quill.insertEmbed(
                            z,
                            this.root.getAttribute('data-mode'),
                            D,
                            t.default.sources.USER
                          ),
                            this.root.getAttribute('data-mode') === 'formula' &&
                              this.quill.insertText(z + 1, ' ', t.default.sources.USER),
                            this.quill.setSelection(z + 2, t.default.sources.USER);
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
          })(A.default);
          function j(q) {
            var L =
              q.match(
                /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
              ) || q.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
            return L
              ? (L[1] || 'https') + '://www.youtube.com/embed/' + L[2] + '?showinfo=0'
              : (L = q.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))
              ? (L[1] || 'https') + '://player.vimeo.com/video/' + L[2] + '/'
              : q;
          }
          function k(q, L) {
            var F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            L.forEach(function (D) {
              var P = document.createElement('option');
              D === F ? P.setAttribute('selected', 'selected') : P.setAttribute('value', D),
                q.appendChild(P);
            });
          }
          (e.BaseTooltip = I), (e.default = Z);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
            function _() {
              (this.head = this.tail = null), (this.length = 0);
            }
            return (
              (_.prototype.append = function () {
                for (var E = [], m = 0; m < arguments.length; m++) E[m] = arguments[m];
                this.insertBefore(E[0], null), E.length > 1 && this.append.apply(this, E.slice(1));
              }),
              (_.prototype.contains = function (E) {
                for (var m, p = this.iterator(); (m = p()); ) if (m === E) return !0;
                return !1;
              }),
              (_.prototype.insertBefore = function (E, m) {
                E &&
                  ((E.next = m),
                  m != null
                    ? ((E.prev = m.prev),
                      m.prev != null && (m.prev.next = E),
                      (m.prev = E),
                      m === this.head && (this.head = E))
                    : this.tail != null
                    ? ((this.tail.next = E), (E.prev = this.tail), (this.tail = E))
                    : ((E.prev = null), (this.head = this.tail = E)),
                  (this.length += 1));
              }),
              (_.prototype.offset = function (E) {
                for (var m = 0, p = this.head; p != null; ) {
                  if (p === E) return m;
                  (m += p.length()), (p = p.next);
                }
                return -1;
              }),
              (_.prototype.remove = function (E) {
                this.contains(E) &&
                  (E.prev != null && (E.prev.next = E.next),
                  E.next != null && (E.next.prev = E.prev),
                  E === this.head && (this.head = E.next),
                  E === this.tail && (this.tail = E.prev),
                  (this.length -= 1));
              }),
              (_.prototype.iterator = function (E) {
                return (
                  E === void 0 && (E = this.head),
                  function () {
                    var m = E;
                    return E != null && (E = E.next), m;
                  }
                );
              }),
              (_.prototype.find = function (E, m) {
                m === void 0 && (m = !1);
                for (var p, c = this.iterator(); (p = c()); ) {
                  var o = p.length();
                  if (E < o || (m && E === o && (p.next == null || p.next.length() !== 0)))
                    return [p, E];
                  E -= o;
                }
                return [null, 0];
              }),
              (_.prototype.forEach = function (E) {
                for (var m, p = this.iterator(); (m = p()); ) E(m);
              }),
              (_.prototype.forEachAt = function (E, m, p) {
                if (!(m <= 0))
                  for (
                    var c = this.find(E), o = c[0], t = c[1], r, f = E - t, u = this.iterator(o);
                    (r = u()) && f < E + m;

                  ) {
                    var s = r.length();
                    E > f ? p(r, E - f, Math.min(m, f + s - E)) : p(r, 0, Math.min(s, E + m - f)),
                      (f += s);
                  }
              }),
              (_.prototype.map = function (E) {
                return this.reduce(function (m, p) {
                  return m.push(E(p)), m;
                }, []);
              }),
              (_.prototype.reduce = function (E, m) {
                for (var p, c = this.iterator(); (p = c()); ) m = E(m, p);
                return m;
              }),
              _
            );
          })();
          e.default = g;
        },
        function (h, e, n) {
          'use strict';
          var g =
            (this && this.__extends) ||
            (function () {
              var o =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var f in r) r.hasOwnProperty(f) && (t[f] = r[f]);
                };
              return function (t, r) {
                o(t, r);
                function f() {
                  this.constructor = t;
                }
                t.prototype =
                  r === null ? Object.create(r) : ((f.prototype = r.prototype), new f());
              };
            })();
          Object.defineProperty(e, '__esModule', { value: !0 });
          var _ = n(17),
            E = n(1),
            m = {
              attributes: !0,
              characterData: !0,
              characterDataOldValue: !0,
              childList: !0,
              subtree: !0,
            },
            p = 100,
            c = (function (o) {
              g(t, o);
              function t(r) {
                var f = o.call(this, r) || this;
                return (
                  (f.scroll = f),
                  (f.observer = new MutationObserver(function (u) {
                    f.update(u);
                  })),
                  f.observer.observe(f.domNode, m),
                  f.attach(),
                  f
                );
              }
              return (
                (t.prototype.detach = function () {
                  o.prototype.detach.call(this), this.observer.disconnect();
                }),
                (t.prototype.deleteAt = function (r, f) {
                  this.update(),
                    r === 0 && f === this.length()
                      ? this.children.forEach(function (u) {
                          u.remove();
                        })
                      : o.prototype.deleteAt.call(this, r, f);
                }),
                (t.prototype.formatAt = function (r, f, u, s) {
                  this.update(), o.prototype.formatAt.call(this, r, f, u, s);
                }),
                (t.prototype.insertAt = function (r, f, u) {
                  this.update(), o.prototype.insertAt.call(this, r, f, u);
                }),
                (t.prototype.optimize = function (r, f) {
                  var u = this;
                  r === void 0 && (r = []),
                    f === void 0 && (f = {}),
                    o.prototype.optimize.call(this, f);
                  for (var s = [].slice.call(this.observer.takeRecords()); s.length > 0; )
                    r.push(s.pop());
                  for (
                    var a = function (v, N) {
                        N === void 0 && (N = !0),
                          !(v == null || v === u) &&
                            v.domNode.parentNode != null &&
                            (v.domNode[E.DATA_KEY].mutations == null &&
                              (v.domNode[E.DATA_KEY].mutations = []),
                            N && a(v.parent));
                      },
                      l = function (v) {
                        v.domNode[E.DATA_KEY] == null ||
                          v.domNode[E.DATA_KEY].mutations == null ||
                          (v instanceof _.default && v.children.forEach(l), v.optimize(f));
                      },
                      d = r,
                      i = 0;
                    d.length > 0;
                    i += 1
                  ) {
                    if (i >= p) throw new Error('[Parchment] Maximum optimize iterations reached');
                    for (
                      d.forEach(function (v) {
                        var N = E.find(v.target, !0);
                        N != null &&
                          (N.domNode === v.target &&
                            (v.type === 'childList'
                              ? (a(E.find(v.previousSibling, !1)),
                                [].forEach.call(v.addedNodes, function (w) {
                                  var A = E.find(w, !1);
                                  a(A, !1),
                                    A instanceof _.default &&
                                      A.children.forEach(function (S) {
                                        a(S, !1);
                                      });
                                }))
                              : v.type === 'attributes' && a(N.prev)),
                          a(N));
                      }),
                        this.children.forEach(l),
                        d = [].slice.call(this.observer.takeRecords()),
                        s = d.slice();
                      s.length > 0;

                    )
                      r.push(s.pop());
                  }
                }),
                (t.prototype.update = function (r, f) {
                  var u = this;
                  f === void 0 && (f = {}),
                    (r = r || this.observer.takeRecords()),
                    r
                      .map(function (s) {
                        var a = E.find(s.target, !0);
                        return a == null
                          ? null
                          : a.domNode[E.DATA_KEY].mutations == null
                          ? ((a.domNode[E.DATA_KEY].mutations = [s]), a)
                          : (a.domNode[E.DATA_KEY].mutations.push(s), null);
                      })
                      .forEach(function (s) {
                        s == null ||
                          s === u ||
                          s.domNode[E.DATA_KEY] == null ||
                          s.update(s.domNode[E.DATA_KEY].mutations || [], f);
                      }),
                    this.domNode[E.DATA_KEY].mutations != null &&
                      o.prototype.update.call(this, this.domNode[E.DATA_KEY].mutations, f),
                    this.optimize(r, f);
                }),
                (t.blotName = 'scroll'),
                (t.defaultChild = 'block'),
                (t.scope = E.Scope.BLOCK_BLOT),
                (t.tagName = 'DIV'),
                t
              );
            })(_.default);
          e.default = c;
        },
        function (h, e, n) {
          'use strict';
          var g =
            (this && this.__extends) ||
            (function () {
              var c =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (o, t) {
                    o.__proto__ = t;
                  }) ||
                function (o, t) {
                  for (var r in t) t.hasOwnProperty(r) && (o[r] = t[r]);
                };
              return function (o, t) {
                c(o, t);
                function r() {
                  this.constructor = o;
                }
                o.prototype =
                  t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
              };
            })();
          Object.defineProperty(e, '__esModule', { value: !0 });
          var _ = n(18),
            E = n(1);
          function m(c, o) {
            if (Object.keys(c).length !== Object.keys(o).length) return !1;
            for (var t in c) if (c[t] !== o[t]) return !1;
            return !0;
          }
          var p = (function (c) {
            g(o, c);
            function o() {
              return (c !== null && c.apply(this, arguments)) || this;
            }
            return (
              (o.formats = function (t) {
                if (t.tagName !== o.tagName) return c.formats.call(this, t);
              }),
              (o.prototype.format = function (t, r) {
                var f = this;
                t === this.statics.blotName && !r
                  ? (this.children.forEach(function (u) {
                      u instanceof _.default || (u = u.wrap(o.blotName, !0)), f.attributes.copy(u);
                    }),
                    this.unwrap())
                  : c.prototype.format.call(this, t, r);
              }),
              (o.prototype.formatAt = function (t, r, f, u) {
                if (this.formats()[f] != null || E.query(f, E.Scope.ATTRIBUTE)) {
                  var s = this.isolate(t, r);
                  s.format(f, u);
                } else c.prototype.formatAt.call(this, t, r, f, u);
              }),
              (o.prototype.optimize = function (t) {
                c.prototype.optimize.call(this, t);
                var r = this.formats();
                if (Object.keys(r).length === 0) return this.unwrap();
                var f = this.next;
                f instanceof o &&
                  f.prev === this &&
                  m(r, f.formats()) &&
                  (f.moveChildren(this), f.remove());
              }),
              (o.blotName = 'inline'),
              (o.scope = E.Scope.INLINE_BLOT),
              (o.tagName = 'SPAN'),
              o
            );
          })(_.default);
          e.default = p;
        },
        function (h, e, n) {
          'use strict';
          var g =
            (this && this.__extends) ||
            (function () {
              var p =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (c, o) {
                    c.__proto__ = o;
                  }) ||
                function (c, o) {
                  for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
                };
              return function (c, o) {
                p(c, o);
                function t() {
                  this.constructor = c;
                }
                c.prototype =
                  o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
              };
            })();
          Object.defineProperty(e, '__esModule', { value: !0 });
          var _ = n(18),
            E = n(1),
            m = (function (p) {
              g(c, p);
              function c() {
                return (p !== null && p.apply(this, arguments)) || this;
              }
              return (
                (c.formats = function (o) {
                  var t = E.query(c.blotName).tagName;
                  if (o.tagName !== t) return p.formats.call(this, o);
                }),
                (c.prototype.format = function (o, t) {
                  E.query(o, E.Scope.BLOCK) != null &&
                    (o === this.statics.blotName && !t
                      ? this.replaceWith(c.blotName)
                      : p.prototype.format.call(this, o, t));
                }),
                (c.prototype.formatAt = function (o, t, r, f) {
                  E.query(r, E.Scope.BLOCK) != null
                    ? this.format(r, f)
                    : p.prototype.formatAt.call(this, o, t, r, f);
                }),
                (c.prototype.insertAt = function (o, t, r) {
                  if (r == null || E.query(t, E.Scope.INLINE) != null)
                    p.prototype.insertAt.call(this, o, t, r);
                  else {
                    var f = this.split(o),
                      u = E.create(t, r);
                    f.parent.insertBefore(u, f);
                  }
                }),
                (c.prototype.update = function (o, t) {
                  navigator.userAgent.match(/Trident/)
                    ? this.build()
                    : p.prototype.update.call(this, o, t);
                }),
                (c.blotName = 'block'),
                (c.scope = E.Scope.BLOCK_BLOT),
                (c.tagName = 'P'),
                c
              );
            })(_.default);
          e.default = m;
        },
        function (h, e, n) {
          'use strict';
          var g =
            (this && this.__extends) ||
            (function () {
              var m =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (p, c) {
                    p.__proto__ = c;
                  }) ||
                function (p, c) {
                  for (var o in c) c.hasOwnProperty(o) && (p[o] = c[o]);
                };
              return function (p, c) {
                m(p, c);
                function o() {
                  this.constructor = p;
                }
                p.prototype =
                  c === null ? Object.create(c) : ((o.prototype = c.prototype), new o());
              };
            })();
          Object.defineProperty(e, '__esModule', { value: !0 });
          var _ = n(19),
            E = (function (m) {
              g(p, m);
              function p() {
                return (m !== null && m.apply(this, arguments)) || this;
              }
              return (
                (p.formats = function (c) {}),
                (p.prototype.format = function (c, o) {
                  m.prototype.formatAt.call(this, 0, this.length(), c, o);
                }),
                (p.prototype.formatAt = function (c, o, t, r) {
                  c === 0 && o === this.length()
                    ? this.format(t, r)
                    : m.prototype.formatAt.call(this, c, o, t, r);
                }),
                (p.prototype.formats = function () {
                  return this.statics.formats(this.domNode);
                }),
                p
              );
            })(_.default);
          e.default = E;
        },
        function (h, e, n) {
          'use strict';
          var g =
            (this && this.__extends) ||
            (function () {
              var p =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (c, o) {
                    c.__proto__ = o;
                  }) ||
                function (c, o) {
                  for (var t in o) o.hasOwnProperty(t) && (c[t] = o[t]);
                };
              return function (c, o) {
                p(c, o);
                function t() {
                  this.constructor = c;
                }
                c.prototype =
                  o === null ? Object.create(o) : ((t.prototype = o.prototype), new t());
              };
            })();
          Object.defineProperty(e, '__esModule', { value: !0 });
          var _ = n(19),
            E = n(1),
            m = (function (p) {
              g(c, p);
              function c(o) {
                var t = p.call(this, o) || this;
                return (t.text = t.statics.value(t.domNode)), t;
              }
              return (
                (c.create = function (o) {
                  return document.createTextNode(o);
                }),
                (c.value = function (o) {
                  var t = o.data;
                  return t.normalize && (t = t.normalize()), t;
                }),
                (c.prototype.deleteAt = function (o, t) {
                  this.domNode.data = this.text = this.text.slice(0, o) + this.text.slice(o + t);
                }),
                (c.prototype.index = function (o, t) {
                  return this.domNode === o ? t : -1;
                }),
                (c.prototype.insertAt = function (o, t, r) {
                  r == null
                    ? ((this.text = this.text.slice(0, o) + t + this.text.slice(o)),
                      (this.domNode.data = this.text))
                    : p.prototype.insertAt.call(this, o, t, r);
                }),
                (c.prototype.length = function () {
                  return this.text.length;
                }),
                (c.prototype.optimize = function (o) {
                  p.prototype.optimize.call(this, o),
                    (this.text = this.statics.value(this.domNode)),
                    this.text.length === 0
                      ? this.remove()
                      : this.next instanceof c &&
                        this.next.prev === this &&
                        (this.insertAt(this.length(), this.next.value()), this.next.remove());
                }),
                (c.prototype.position = function (o, t) {
                  return t === void 0 && (t = !1), [this.domNode, o];
                }),
                (c.prototype.split = function (o, t) {
                  if ((t === void 0 && (t = !1), !t)) {
                    if (o === 0) return this;
                    if (o === this.length()) return this.next;
                  }
                  var r = E.create(this.domNode.splitText(o));
                  return (
                    this.parent.insertBefore(r, this.next),
                    (this.text = this.statics.value(this.domNode)),
                    r
                  );
                }),
                (c.prototype.update = function (o, t) {
                  var r = this;
                  o.some(function (f) {
                    return f.type === 'characterData' && f.target === r.domNode;
                  }) && (this.text = this.statics.value(this.domNode));
                }),
                (c.prototype.value = function () {
                  return this.text;
                }),
                (c.blotName = 'text'),
                (c.scope = E.Scope.INLINE_BLOT),
                c
              );
            })(_.default);
          e.default = m;
        },
        function (h, e, n) {
          'use strict';
          var g = document.createElement('div');
          if ((g.classList.toggle('test-class', !1), g.classList.contains('test-class'))) {
            var _ = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function (E, m) {
              return arguments.length > 1 && !this.contains(E) == !m ? m : _.call(this, E);
            };
          }
          String.prototype.startsWith ||
            (String.prototype.startsWith = function (E, m) {
              return (m = m || 0), this.substr(m, E.length) === E;
            }),
            String.prototype.endsWith ||
              (String.prototype.endsWith = function (E, m) {
                var p = this.toString();
                (typeof m != 'number' || !isFinite(m) || Math.floor(m) !== m || m > p.length) &&
                  (m = p.length),
                  (m -= E.length);
                var c = p.indexOf(E, m);
                return c !== -1 && c === m;
              }),
            Array.prototype.find ||
              Object.defineProperty(Array.prototype, 'find', {
                value: function (m) {
                  if (this === null)
                    throw new TypeError('Array.prototype.find called on null or undefined');
                  if (typeof m != 'function') throw new TypeError('predicate must be a function');
                  for (
                    var p = Object(this), c = p.length >>> 0, o = arguments[1], t, r = 0;
                    r < c;
                    r++
                  )
                    if (((t = p[r]), m.call(o, t, r, p))) return t;
                },
              }),
            document.addEventListener('DOMContentLoaded', function () {
              document.execCommand('enableObjectResizing', !1, !1),
                document.execCommand('autoUrlDetect', !1, !1);
            });
        },
        function (h, e) {
          var n = -1,
            g = 1,
            _ = 0;
          function E(i, v, N) {
            if (i == v) return i ? [[_, i]] : [];
            (N < 0 || i.length < N) && (N = null);
            var w = o(i, v),
              A = i.substring(0, w);
            (i = i.substring(w)), (v = v.substring(w)), (w = t(i, v));
            var S = i.substring(i.length - w);
            (i = i.substring(0, i.length - w)), (v = v.substring(0, v.length - w));
            var O = m(i, v);
            return (
              A && O.unshift([_, A]),
              S && O.push([_, S]),
              f(O),
              N != null && (O = a(O, N)),
              (O = l(O)),
              O
            );
          }
          function m(i, v) {
            var N;
            if (!i) return [[g, v]];
            if (!v) return [[n, i]];
            var w = i.length > v.length ? i : v,
              A = i.length > v.length ? v : i,
              S = w.indexOf(A);
            if (S != -1)
              return (
                (N = [
                  [g, w.substring(0, S)],
                  [_, A],
                  [g, w.substring(S + A.length)],
                ]),
                i.length > v.length && (N[0][0] = N[2][0] = n),
                N
              );
            if (A.length == 1)
              return [
                [n, i],
                [g, v],
              ];
            var O = r(i, v);
            if (O) {
              var y = O[0],
                b = O[1],
                T = O[2],
                x = O[3],
                R = O[4],
                B = E(y, T),
                C = E(b, x);
              return B.concat([[_, R]], C);
            }
            return p(i, v);
          }
          function p(i, v) {
            for (
              var N = i.length,
                w = v.length,
                A = Math.ceil((N + w) / 2),
                S = A,
                O = 2 * A,
                y = new Array(O),
                b = new Array(O),
                T = 0;
              T < O;
              T++
            )
              (y[T] = -1), (b[T] = -1);
            (y[S + 1] = 0), (b[S + 1] = 0);
            for (var x = N - w, R = x % 2 != 0, B = 0, C = 0, Z = 0, I = 0, j = 0; j < A; j++) {
              for (var k = -j + B; k <= j - C; k += 2) {
                var q = S + k,
                  L;
                k == -j || (k != j && y[q - 1] < y[q + 1]) ? (L = y[q + 1]) : (L = y[q - 1] + 1);
                for (var F = L - k; L < N && F < w && i.charAt(L) == v.charAt(F); ) L++, F++;
                if (((y[q] = L), L > N)) C += 2;
                else if (F > w) B += 2;
                else if (R) {
                  var D = S + x - k;
                  if (D >= 0 && D < O && b[D] != -1) {
                    var P = N - b[D];
                    if (L >= P) return c(i, v, L, F);
                  }
                }
              }
              for (var M = -j + Z; M <= j - I; M += 2) {
                var D = S + M,
                  P;
                M == -j || (M != j && b[D - 1] < b[D + 1]) ? (P = b[D + 1]) : (P = b[D - 1] + 1);
                for (var z = P - M; P < N && z < w && i.charAt(N - P - 1) == v.charAt(w - z - 1); )
                  P++, z++;
                if (((b[D] = P), P > N)) I += 2;
                else if (z > w) Z += 2;
                else if (!R) {
                  var q = S + x - M;
                  if (q >= 0 && q < O && y[q] != -1) {
                    var L = y[q],
                      F = S + L - q;
                    if (((P = N - P), L >= P)) return c(i, v, L, F);
                  }
                }
              }
            }
            return [
              [n, i],
              [g, v],
            ];
          }
          function c(i, v, N, w) {
            var A = i.substring(0, N),
              S = v.substring(0, w),
              O = i.substring(N),
              y = v.substring(w),
              b = E(A, S),
              T = E(O, y);
            return b.concat(T);
          }
          function o(i, v) {
            if (!i || !v || i.charAt(0) != v.charAt(0)) return 0;
            for (var N = 0, w = Math.min(i.length, v.length), A = w, S = 0; N < A; )
              i.substring(S, A) == v.substring(S, A) ? ((N = A), (S = N)) : (w = A),
                (A = Math.floor((w - N) / 2 + N));
            return A;
          }
          function t(i, v) {
            if (!i || !v || i.charAt(i.length - 1) != v.charAt(v.length - 1)) return 0;
            for (var N = 0, w = Math.min(i.length, v.length), A = w, S = 0; N < A; )
              i.substring(i.length - A, i.length - S) == v.substring(v.length - A, v.length - S)
                ? ((N = A), (S = N))
                : (w = A),
                (A = Math.floor((w - N) / 2 + N));
            return A;
          }
          function r(i, v) {
            var N = i.length > v.length ? i : v,
              w = i.length > v.length ? v : i;
            if (N.length < 4 || w.length * 2 < N.length) return null;
            function A(C, Z, I) {
              for (
                var j = C.substring(I, I + Math.floor(C.length / 4)), k = -1, q = '', L, F, D, P;
                (k = Z.indexOf(j, k + 1)) != -1;

              ) {
                var M = o(C.substring(I), Z.substring(k)),
                  z = t(C.substring(0, I), Z.substring(0, k));
                q.length < z + M &&
                  ((q = Z.substring(k - z, k) + Z.substring(k, k + M)),
                  (L = C.substring(0, I - z)),
                  (F = C.substring(I + M)),
                  (D = Z.substring(0, k - z)),
                  (P = Z.substring(k + M)));
              }
              return q.length * 2 >= C.length ? [L, F, D, P, q] : null;
            }
            var S = A(N, w, Math.ceil(N.length / 4)),
              O = A(N, w, Math.ceil(N.length / 2)),
              y;
            if (!S && !O) return null;
            O ? (S ? (y = S[4].length > O[4].length ? S : O) : (y = O)) : (y = S);
            var b, T, x, R;
            i.length > v.length
              ? ((b = y[0]), (T = y[1]), (x = y[2]), (R = y[3]))
              : ((x = y[0]), (R = y[1]), (b = y[2]), (T = y[3]));
            var B = y[4];
            return [b, T, x, R, B];
          }
          function f(i) {
            i.push([_, '']);
            for (var v = 0, N = 0, w = 0, A = '', S = '', O; v < i.length; )
              switch (i[v][0]) {
                case g:
                  w++, (S += i[v][1]), v++;
                  break;
                case n:
                  N++, (A += i[v][1]), v++;
                  break;
                case _:
                  N + w > 1
                    ? (N !== 0 &&
                        w !== 0 &&
                        ((O = o(S, A)),
                        O !== 0 &&
                          (v - N - w > 0 && i[v - N - w - 1][0] == _
                            ? (i[v - N - w - 1][1] += S.substring(0, O))
                            : (i.splice(0, 0, [_, S.substring(0, O)]), v++),
                          (S = S.substring(O)),
                          (A = A.substring(O))),
                        (O = t(S, A)),
                        O !== 0 &&
                          ((i[v][1] = S.substring(S.length - O) + i[v][1]),
                          (S = S.substring(0, S.length - O)),
                          (A = A.substring(0, A.length - O)))),
                      N === 0
                        ? i.splice(v - w, N + w, [g, S])
                        : w === 0
                        ? i.splice(v - N, N + w, [n, A])
                        : i.splice(v - N - w, N + w, [n, A], [g, S]),
                      (v = v - N - w + (N ? 1 : 0) + (w ? 1 : 0) + 1))
                    : v !== 0 && i[v - 1][0] == _
                    ? ((i[v - 1][1] += i[v][1]), i.splice(v, 1))
                    : v++,
                    (w = 0),
                    (N = 0),
                    (A = ''),
                    (S = '');
                  break;
              }
            i[i.length - 1][1] === '' && i.pop();
            var y = !1;
            for (v = 1; v < i.length - 1; )
              i[v - 1][0] == _ &&
                i[v + 1][0] == _ &&
                (i[v][1].substring(i[v][1].length - i[v - 1][1].length) == i[v - 1][1]
                  ? ((i[v][1] =
                      i[v - 1][1] + i[v][1].substring(0, i[v][1].length - i[v - 1][1].length)),
                    (i[v + 1][1] = i[v - 1][1] + i[v + 1][1]),
                    i.splice(v - 1, 1),
                    (y = !0))
                  : i[v][1].substring(0, i[v + 1][1].length) == i[v + 1][1] &&
                    ((i[v - 1][1] += i[v + 1][1]),
                    (i[v][1] = i[v][1].substring(i[v + 1][1].length) + i[v + 1][1]),
                    i.splice(v + 1, 1),
                    (y = !0))),
                v++;
            y && f(i);
          }
          var u = E;
          (u.INSERT = g), (u.DELETE = n), (u.EQUAL = _), (h.exports = u);
          function s(i, v) {
            if (v === 0) return [_, i];
            for (var N = 0, w = 0; w < i.length; w++) {
              var A = i[w];
              if (A[0] === n || A[0] === _) {
                var S = N + A[1].length;
                if (v === S) return [w + 1, i];
                if (v < S) {
                  i = i.slice();
                  var O = v - N,
                    y = [A[0], A[1].slice(0, O)],
                    b = [A[0], A[1].slice(O)];
                  return i.splice(w, 1, y, b), [w + 1, i];
                } else N = S;
              }
            }
            throw new Error('cursor_pos is out of bounds!');
          }
          function a(i, v) {
            var N = s(i, v),
              w = N[1],
              A = N[0],
              S = w[A],
              O = w[A + 1];
            if (S == null) return i;
            if (S[0] !== _) return i;
            if (O != null && S[1] + O[1] === O[1] + S[1]) return w.splice(A, 2, O, S), d(w, A, 2);
            if (O != null && O[1].indexOf(S[1]) === 0) {
              w.splice(A, 2, [O[0], S[1]], [0, S[1]]);
              var y = O[1].slice(S[1].length);
              return y.length > 0 && w.splice(A + 2, 0, [O[0], y]), d(w, A, 3);
            } else return i;
          }
          function l(i) {
            for (
              var v = !1,
                N = function (O) {
                  return O.charCodeAt(0) >= 56320 && O.charCodeAt(0) <= 57343;
                },
                w = function (O) {
                  return O.charCodeAt(O.length - 1) >= 55296 && O.charCodeAt(O.length - 1) <= 56319;
                },
                A = 2;
              A < i.length;
              A += 1
            )
              i[A - 2][0] === _ &&
                w(i[A - 2][1]) &&
                i[A - 1][0] === n &&
                N(i[A - 1][1]) &&
                i[A][0] === g &&
                N(i[A][1]) &&
                ((v = !0),
                (i[A - 1][1] = i[A - 2][1].slice(-1) + i[A - 1][1]),
                (i[A][1] = i[A - 2][1].slice(-1) + i[A][1]),
                (i[A - 2][1] = i[A - 2][1].slice(0, -1)));
            if (!v) return i;
            for (var S = [], A = 0; A < i.length; A += 1) i[A][1].length > 0 && S.push(i[A]);
            return S;
          }
          function d(i, v, N) {
            for (var w = v + N - 1; w >= 0 && w >= v - 1; w--)
              if (w + 1 < i.length) {
                var A = i[w],
                  S = i[w + 1];
                A[0] === S[1] && i.splice(w, 2, [A[0], A[1] + S[1]]);
              }
            return i;
          }
        },
        function (h, e) {
          (e = h.exports = typeof Object.keys == 'function' ? Object.keys : n), (e.shim = n);
          function n(g) {
            var _ = [];
            for (var E in g) _.push(E);
            return _;
          }
        },
        function (h, e) {
          var n =
            (function () {
              return Object.prototype.toString.call(arguments);
            })() == '[object Arguments]';
          (e = h.exports = n ? g : _), (e.supported = g);
          function g(E) {
            return Object.prototype.toString.call(E) == '[object Arguments]';
          }
          e.unsupported = _;
          function _(E) {
            return (
              (E &&
                typeof E == 'object' &&
                typeof E.length == 'number' &&
                Object.prototype.hasOwnProperty.call(E, 'callee') &&
                !Object.prototype.propertyIsEnumerable.call(E, 'callee')) ||
              !1
            );
          }
        },
        function (h, e) {
          'use strict';
          var n = Object.prototype.hasOwnProperty,
            g = '~';
          function _() {}
          Object.create && ((_.prototype = Object.create(null)), new _().__proto__ || (g = !1));
          function E(p, c, o) {
            (this.fn = p), (this.context = c), (this.once = o || !1);
          }
          function m() {
            (this._events = new _()), (this._eventsCount = 0);
          }
          (m.prototype.eventNames = function () {
            var c = [],
              o,
              t;
            if (this._eventsCount === 0) return c;
            for (t in (o = this._events)) n.call(o, t) && c.push(g ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(o)) : c;
          }),
            (m.prototype.listeners = function (c, o) {
              var t = g ? g + c : c,
                r = this._events[t];
              if (o) return !!r;
              if (!r) return [];
              if (r.fn) return [r.fn];
              for (var f = 0, u = r.length, s = new Array(u); f < u; f++) s[f] = r[f].fn;
              return s;
            }),
            (m.prototype.emit = function (c, o, t, r, f, u) {
              var s = g ? g + c : c;
              if (!this._events[s]) return !1;
              var a = this._events[s],
                l = arguments.length,
                d,
                i;
              if (a.fn) {
                switch ((a.once && this.removeListener(c, a.fn, void 0, !0), l)) {
                  case 1:
                    return a.fn.call(a.context), !0;
                  case 2:
                    return a.fn.call(a.context, o), !0;
                  case 3:
                    return a.fn.call(a.context, o, t), !0;
                  case 4:
                    return a.fn.call(a.context, o, t, r), !0;
                  case 5:
                    return a.fn.call(a.context, o, t, r, f), !0;
                  case 6:
                    return a.fn.call(a.context, o, t, r, f, u), !0;
                }
                for (i = 1, d = new Array(l - 1); i < l; i++) d[i - 1] = arguments[i];
                a.fn.apply(a.context, d);
              } else {
                var v = a.length,
                  N;
                for (i = 0; i < v; i++)
                  switch ((a[i].once && this.removeListener(c, a[i].fn, void 0, !0), l)) {
                    case 1:
                      a[i].fn.call(a[i].context);
                      break;
                    case 2:
                      a[i].fn.call(a[i].context, o);
                      break;
                    case 3:
                      a[i].fn.call(a[i].context, o, t);
                      break;
                    case 4:
                      a[i].fn.call(a[i].context, o, t, r);
                      break;
                    default:
                      if (!d) for (N = 1, d = new Array(l - 1); N < l; N++) d[N - 1] = arguments[N];
                      a[i].fn.apply(a[i].context, d);
                  }
              }
              return !0;
            }),
            (m.prototype.on = function (c, o, t) {
              var r = new E(o, t || this),
                f = g ? g + c : c;
              return (
                this._events[f]
                  ? this._events[f].fn
                    ? (this._events[f] = [this._events[f], r])
                    : this._events[f].push(r)
                  : ((this._events[f] = r), this._eventsCount++),
                this
              );
            }),
            (m.prototype.once = function (c, o, t) {
              var r = new E(o, t || this, !0),
                f = g ? g + c : c;
              return (
                this._events[f]
                  ? this._events[f].fn
                    ? (this._events[f] = [this._events[f], r])
                    : this._events[f].push(r)
                  : ((this._events[f] = r), this._eventsCount++),
                this
              );
            }),
            (m.prototype.removeListener = function (c, o, t, r) {
              var f = g ? g + c : c;
              if (!this._events[f]) return this;
              if (!o)
                return (
                  --this._eventsCount === 0 ? (this._events = new _()) : delete this._events[f],
                  this
                );
              var u = this._events[f];
              if (u.fn)
                u.fn === o &&
                  (!r || u.once) &&
                  (!t || u.context === t) &&
                  (--this._eventsCount === 0 ? (this._events = new _()) : delete this._events[f]);
              else {
                for (var s = 0, a = [], l = u.length; s < l; s++)
                  (u[s].fn !== o || (r && !u[s].once) || (t && u[s].context !== t)) && a.push(u[s]);
                a.length
                  ? (this._events[f] = a.length === 1 ? a[0] : a)
                  : --this._eventsCount === 0
                  ? (this._events = new _())
                  : delete this._events[f];
              }
              return this;
            }),
            (m.prototype.removeAllListeners = function (c) {
              var o;
              return (
                c
                  ? ((o = g ? g + c : c),
                    this._events[o] &&
                      (--this._eventsCount === 0
                        ? (this._events = new _())
                        : delete this._events[o]))
                  : ((this._events = new _()), (this._eventsCount = 0)),
                this
              );
            }),
            (m.prototype.off = m.prototype.removeListener),
            (m.prototype.addListener = m.prototype.on),
            (m.prototype.setMaxListeners = function () {
              return this;
            }),
            (m.prefixed = g),
            (m.EventEmitter = m),
            typeof h != 'undefined' && (h.exports = m);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.matchText =
              e.matchSpacing =
              e.matchNewline =
              e.matchBlot =
              e.matchAttributor =
              e.default =
                void 0);
          var g =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (H) {
                    return typeof H;
                  }
                : function (H) {
                    return H &&
                      typeof Symbol == 'function' &&
                      H.constructor === Symbol &&
                      H !== Symbol.prototype
                      ? 'symbol'
                      : typeof H;
                  },
            _ = (function () {
              function H(V, W) {
                var $ = [],
                  G = !0,
                  J = !1,
                  ee = void 0;
                try {
                  for (
                    var te = V[Symbol.iterator](), he;
                    !(G = (he = te.next()).done) && ($.push(he.value), !(W && $.length === W));
                    G = !0
                  );
                } catch (be) {
                  (J = !0), (ee = be);
                } finally {
                  try {
                    !G && te.return && te.return();
                  } finally {
                    if (J) throw ee;
                  }
                }
                return $;
              }
              return function (V, W) {
                if (Array.isArray(V)) return V;
                if (Symbol.iterator in Object(V)) return H(V, W);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            E = (function () {
              function H(V, W) {
                for (var $ = 0; $ < W.length; $++) {
                  var G = W[$];
                  (G.enumerable = G.enumerable || !1),
                    (G.configurable = !0),
                    'value' in G && (G.writable = !0),
                    Object.defineProperty(V, G.key, G);
                }
              }
              return function (V, W, $) {
                return W && H(V.prototype, W), $ && H(V, $), V;
              };
            })(),
            m = n(3),
            p = b(m),
            c = n(2),
            o = b(c),
            t = n(0),
            r = b(t),
            f = n(5),
            u = b(f),
            s = n(10),
            a = b(s),
            l = n(9),
            d = b(l),
            i = n(36),
            v = n(37),
            N = n(13),
            w = b(N),
            A = n(26),
            S = n(38),
            O = n(39),
            y = n(40);
          function b(H) {
            return H && H.__esModule ? H : { default: H };
          }
          function T(H, V, W) {
            return (
              V in H
                ? Object.defineProperty(H, V, {
                    value: W,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (H[V] = W),
              H
            );
          }
          function x(H, V) {
            if (!(H instanceof V)) throw new TypeError('Cannot call a class as a function');
          }
          function R(H, V) {
            if (!H)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return V && (typeof V == 'object' || typeof V == 'function') ? V : H;
          }
          function B(H, V) {
            if (typeof V != 'function' && V !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof V
              );
            (H.prototype = Object.create(V && V.prototype, {
              constructor: { value: H, enumerable: !1, writable: !0, configurable: !0 },
            })),
              V && (Object.setPrototypeOf ? Object.setPrototypeOf(H, V) : (H.__proto__ = V));
          }
          var C = (0, a.default)('quill:clipboard'),
            Z = '__ql-matcher',
            I = [
              [Node.TEXT_NODE, ue],
              [Node.TEXT_NODE, ne],
              ['br', Y],
              [Node.ELEMENT_NODE, ne],
              [Node.ELEMENT_NODE, K],
              [Node.ELEMENT_NODE, oe],
              [Node.ELEMENT_NODE, U],
              [Node.ELEMENT_NODE, fe],
              ['li', Q],
              ['b', z.bind(z, 'bold')],
              ['i', z.bind(z, 'italic')],
              ['style', X],
            ],
            j = [i.AlignAttribute, S.DirectionAttribute].reduce(function (H, V) {
              return (H[V.keyName] = V), H;
            }, {}),
            k = [
              i.AlignStyle,
              v.BackgroundStyle,
              A.ColorStyle,
              S.DirectionStyle,
              O.FontStyle,
              y.SizeStyle,
            ].reduce(function (H, V) {
              return (H[V.keyName] = V), H;
            }, {}),
            q = (function (H) {
              B(V, H);
              function V(W, $) {
                x(this, V);
                var G = R(this, (V.__proto__ || Object.getPrototypeOf(V)).call(this, W, $));
                return (
                  G.quill.root.addEventListener('paste', G.onPaste.bind(G)),
                  (G.container = G.quill.addContainer('ql-clipboard')),
                  G.container.setAttribute('contenteditable', !0),
                  G.container.setAttribute('tabindex', -1),
                  (G.matchers = []),
                  I.concat(G.options.matchers).forEach(function (J) {
                    var ee = _(J, 2),
                      te = ee[0],
                      he = ee[1];
                    (!$.matchVisual && he === oe) || G.addMatcher(te, he);
                  }),
                  G
                );
              }
              return (
                E(V, [
                  {
                    key: 'addMatcher',
                    value: function ($, G) {
                      this.matchers.push([$, G]);
                    },
                  },
                  {
                    key: 'convert',
                    value: function ($) {
                      if (typeof $ == 'string')
                        return (
                          (this.container.innerHTML = $.replace(/\>\r?\n +\</g, '><')),
                          this.convert()
                        );
                      var G = this.quill.getFormat(this.quill.selection.savedRange.index);
                      if (G[w.default.blotName]) {
                        var J = this.container.innerText;
                        return (
                          (this.container.innerHTML = ''),
                          new o.default().insert(
                            J,
                            T({}, w.default.blotName, G[w.default.blotName])
                          )
                        );
                      }
                      var ee = this.prepareMatching(),
                        te = _(ee, 2),
                        he = te[0],
                        be = te[1],
                        le = M(this.container, he, be);
                      return (
                        D(
                          le,
                          `
`
                        ) &&
                          le.ops[le.ops.length - 1].attributes == null &&
                          (le = le.compose(new o.default().retain(le.length() - 1).delete(1))),
                        C.log('convert', this.container.innerHTML, le),
                        (this.container.innerHTML = ''),
                        le
                      );
                    },
                  },
                  {
                    key: 'dangerouslyPasteHTML',
                    value: function ($, G) {
                      var J =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : u.default.sources.API;
                      if (typeof $ == 'string')
                        this.quill.setContents(this.convert($), G),
                          this.quill.setSelection(0, u.default.sources.SILENT);
                      else {
                        var ee = this.convert(G);
                        this.quill.updateContents(new o.default().retain($).concat(ee), J),
                          this.quill.setSelection($ + ee.length(), u.default.sources.SILENT);
                      }
                    },
                  },
                  {
                    key: 'onPaste',
                    value: function ($) {
                      var G = this;
                      if (!($.defaultPrevented || !this.quill.isEnabled())) {
                        var J = this.quill.getSelection(),
                          ee = new o.default().retain(J.index),
                          te = this.quill.scrollingContainer.scrollTop;
                        this.container.focus(),
                          this.quill.selection.update(u.default.sources.SILENT),
                          setTimeout(function () {
                            (ee = ee.concat(G.convert()).delete(J.length)),
                              G.quill.updateContents(ee, u.default.sources.USER),
                              G.quill.setSelection(
                                ee.length() - J.length,
                                u.default.sources.SILENT
                              ),
                              (G.quill.scrollingContainer.scrollTop = te),
                              G.quill.focus();
                          }, 1);
                      }
                    },
                  },
                  {
                    key: 'prepareMatching',
                    value: function () {
                      var $ = this,
                        G = [],
                        J = [];
                      return (
                        this.matchers.forEach(function (ee) {
                          var te = _(ee, 2),
                            he = te[0],
                            be = te[1];
                          switch (he) {
                            case Node.TEXT_NODE:
                              J.push(be);
                              break;
                            case Node.ELEMENT_NODE:
                              G.push(be);
                              break;
                            default:
                              [].forEach.call($.container.querySelectorAll(he), function (le) {
                                (le[Z] = le[Z] || []), le[Z].push(be);
                              });
                              break;
                          }
                        }),
                        [G, J]
                      );
                    },
                  },
                ]),
                V
              );
            })(d.default);
          q.DEFAULTS = { matchers: [], matchVisual: !0 };
          function L(H, V, W) {
            return (typeof V == 'undefined' ? 'undefined' : g(V)) === 'object'
              ? Object.keys(V).reduce(function ($, G) {
                  return L($, G, V[G]);
                }, H)
              : H.reduce(function ($, G) {
                  return G.attributes && G.attributes[V]
                    ? $.push(G)
                    : $.insert(G.insert, (0, p.default)({}, T({}, V, W), G.attributes));
                }, new o.default());
          }
          function F(H) {
            if (H.nodeType !== Node.ELEMENT_NODE) return {};
            var V = '__ql-computed-style';
            return H[V] || (H[V] = window.getComputedStyle(H));
          }
          function D(H, V) {
            for (var W = '', $ = H.ops.length - 1; $ >= 0 && W.length < V.length; --$) {
              var G = H.ops[$];
              if (typeof G.insert != 'string') break;
              W = G.insert + W;
            }
            return W.slice(-1 * V.length) === V;
          }
          function P(H) {
            if (H.childNodes.length === 0) return !1;
            var V = F(H);
            return ['block', 'list-item'].indexOf(V.display) > -1;
          }
          function M(H, V, W) {
            return H.nodeType === H.TEXT_NODE
              ? W.reduce(function ($, G) {
                  return G(H, $);
                }, new o.default())
              : H.nodeType === H.ELEMENT_NODE
              ? [].reduce.call(
                  H.childNodes || [],
                  function ($, G) {
                    var J = M(G, V, W);
                    return (
                      G.nodeType === H.ELEMENT_NODE &&
                        ((J = V.reduce(function (ee, te) {
                          return te(G, ee);
                        }, J)),
                        (J = (G[Z] || []).reduce(function (ee, te) {
                          return te(G, ee);
                        }, J))),
                      $.concat(J)
                    );
                  },
                  new o.default()
                )
              : new o.default();
          }
          function z(H, V, W) {
            return L(W, H, !0);
          }
          function U(H, V) {
            var W = r.default.Attributor.Attribute.keys(H),
              $ = r.default.Attributor.Class.keys(H),
              G = r.default.Attributor.Style.keys(H),
              J = {};
            return (
              W.concat($)
                .concat(G)
                .forEach(function (ee) {
                  var te = r.default.query(ee, r.default.Scope.ATTRIBUTE);
                  (te != null && ((J[te.attrName] = te.value(H)), J[te.attrName])) ||
                    ((te = j[ee]),
                    te != null &&
                      (te.attrName === ee || te.keyName === ee) &&
                      (J[te.attrName] = te.value(H) || void 0),
                    (te = k[ee]),
                    te != null &&
                      (te.attrName === ee || te.keyName === ee) &&
                      ((te = k[ee]), (J[te.attrName] = te.value(H) || void 0)));
                }),
              Object.keys(J).length > 0 && (V = L(V, J)),
              V
            );
          }
          function K(H, V) {
            var W = r.default.query(H);
            if (W == null) return V;
            if (W.prototype instanceof r.default.Embed) {
              var $ = {},
                G = W.value(H);
              G != null && (($[W.blotName] = G), (V = new o.default().insert($, W.formats(H))));
            } else typeof W.formats == 'function' && (V = L(V, W.blotName, W.formats(H)));
            return V;
          }
          function Y(H, V) {
            return (
              D(
                V,
                `
`
              ) ||
                V.insert(`
`),
              V
            );
          }
          function X() {
            return new o.default();
          }
          function Q(H, V) {
            var W = r.default.query(H);
            if (
              W == null ||
              W.blotName !== 'list-item' ||
              !D(
                V,
                `
`
              )
            )
              return V;
            for (var $ = -1, G = H.parentNode; !G.classList.contains('ql-clipboard'); )
              (r.default.query(G) || {}).blotName === 'list' && ($ += 1), (G = G.parentNode);
            return $ <= 0
              ? V
              : V.compose(new o.default().retain(V.length() - 1).retain(1, { indent: $ }));
          }
          function ne(H, V) {
            return (
              D(
                V,
                `
`
              ) ||
                ((P(H) || (V.length() > 0 && H.nextSibling && P(H.nextSibling))) &&
                  V.insert(`
`)),
              V
            );
          }
          function oe(H, V) {
            if (
              P(H) &&
              H.nextElementSibling != null &&
              !D(
                V,
                `

`
              )
            ) {
              var W = H.offsetHeight + parseFloat(F(H).marginTop) + parseFloat(F(H).marginBottom);
              H.nextElementSibling.offsetTop > H.offsetTop + W * 1.5 &&
                V.insert(`
`);
            }
            return V;
          }
          function fe(H, V) {
            var W = {},
              $ = H.style || {};
            return (
              $.fontStyle && F(H).fontStyle === 'italic' && (W.italic = !0),
              $.fontWeight &&
                (F(H).fontWeight.startsWith('bold') || parseInt(F(H).fontWeight) >= 700) &&
                (W.bold = !0),
              Object.keys(W).length > 0 && (V = L(V, W)),
              parseFloat($.textIndent || 0) > 0 && (V = new o.default().insert('	').concat(V)),
              V
            );
          }
          function ue(H, V) {
            var W = H.data;
            if (H.parentNode.tagName === 'O:P') return V.insert(W.trim());
            if (W.trim().length === 0 && H.parentNode.classList.contains('ql-clipboard')) return V;
            if (!F(H.parentNode).whiteSpace.startsWith('pre')) {
              var $ = function (J, ee) {
                return (ee = ee.replace(/[^\u00a0]/g, '')), ee.length < 1 && J ? ' ' : ee;
              };
              (W = W.replace(/\r\n/g, ' ').replace(/\n/g, ' ')),
                (W = W.replace(/\s\s+/g, $.bind($, !0))),
                ((H.previousSibling == null && P(H.parentNode)) ||
                  (H.previousSibling != null && P(H.previousSibling))) &&
                  (W = W.replace(/^\s+/, $.bind($, !1))),
                ((H.nextSibling == null && P(H.parentNode)) ||
                  (H.nextSibling != null && P(H.nextSibling))) &&
                  (W = W.replace(/\s+$/, $.bind($, !1)));
            }
            return V.insert(W);
          }
          (e.default = q),
            (e.matchAttributor = U),
            (e.matchBlot = K),
            (e.matchNewline = ne),
            (e.matchSpacing = oe),
            (e.matchText = ue);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function f(u, s) {
                for (var a = 0; a < s.length; a++) {
                  var l = s[a];
                  (l.enumerable = l.enumerable || !1),
                    (l.configurable = !0),
                    'value' in l && (l.writable = !0),
                    Object.defineProperty(u, l.key, l);
                }
              }
              return function (u, s, a) {
                return s && f(u.prototype, s), a && f(u, a), u;
              };
            })(),
            _ = function f(u, s, a) {
              u === null && (u = Function.prototype);
              var l = Object.getOwnPropertyDescriptor(u, s);
              if (l === void 0) {
                var d = Object.getPrototypeOf(u);
                return d === null ? void 0 : f(d, s, a);
              } else {
                if ('value' in l) return l.value;
                var i = l.get;
                return i === void 0 ? void 0 : i.call(a);
              }
            },
            E = n(6),
            m = p(E);
          function p(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function c(f, u) {
            if (!(f instanceof u)) throw new TypeError('Cannot call a class as a function');
          }
          function o(f, u) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u == 'object' || typeof u == 'function') ? u : f;
          }
          function t(f, u) {
            if (typeof u != 'function' && u !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof u
              );
            (f.prototype = Object.create(u && u.prototype, {
              constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 },
            })),
              u && (Object.setPrototypeOf ? Object.setPrototypeOf(f, u) : (f.__proto__ = u));
          }
          var r = (function (f) {
            t(u, f);
            function u() {
              return (
                c(this, u),
                o(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments))
              );
            }
            return (
              g(
                u,
                [
                  {
                    key: 'optimize',
                    value: function (a) {
                      _(
                        u.prototype.__proto__ || Object.getPrototypeOf(u.prototype),
                        'optimize',
                        this
                      ).call(this, a),
                        this.domNode.tagName !== this.statics.tagName[0] &&
                          this.replaceWith(this.statics.blotName);
                    },
                  },
                ],
                [
                  {
                    key: 'create',
                    value: function () {
                      return _(u.__proto__ || Object.getPrototypeOf(u), 'create', this).call(this);
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
              u
            );
          })(m.default);
          (r.blotName = 'bold'), (r.tagName = ['STRONG', 'B']), (e.default = r);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.addControls = e.default = void 0);
          var g = (function () {
              function y(b, T) {
                var x = [],
                  R = !0,
                  B = !1,
                  C = void 0;
                try {
                  for (
                    var Z = b[Symbol.iterator](), I;
                    !(R = (I = Z.next()).done) && (x.push(I.value), !(T && x.length === T));
                    R = !0
                  );
                } catch (j) {
                  (B = !0), (C = j);
                } finally {
                  try {
                    !R && Z.return && Z.return();
                  } finally {
                    if (B) throw C;
                  }
                }
                return x;
              }
              return function (b, T) {
                if (Array.isArray(b)) return b;
                if (Symbol.iterator in Object(b)) return y(b, T);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            _ = (function () {
              function y(b, T) {
                for (var x = 0; x < T.length; x++) {
                  var R = T[x];
                  (R.enumerable = R.enumerable || !1),
                    (R.configurable = !0),
                    'value' in R && (R.writable = !0),
                    Object.defineProperty(b, R.key, R);
                }
              }
              return function (b, T, x) {
                return T && y(b.prototype, T), x && y(b, x), b;
              };
            })(),
            E = n(2),
            m = a(E),
            p = n(0),
            c = a(p),
            o = n(5),
            t = a(o),
            r = n(10),
            f = a(r),
            u = n(9),
            s = a(u);
          function a(y) {
            return y && y.__esModule ? y : { default: y };
          }
          function l(y, b, T) {
            return (
              b in y
                ? Object.defineProperty(y, b, {
                    value: T,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (y[b] = T),
              y
            );
          }
          function d(y, b) {
            if (!(y instanceof b)) throw new TypeError('Cannot call a class as a function');
          }
          function i(y, b) {
            if (!y)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return b && (typeof b == 'object' || typeof b == 'function') ? b : y;
          }
          function v(y, b) {
            if (typeof b != 'function' && b !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof b
              );
            (y.prototype = Object.create(b && b.prototype, {
              constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 },
            })),
              b && (Object.setPrototypeOf ? Object.setPrototypeOf(y, b) : (y.__proto__ = b));
          }
          var N = (0, f.default)('quill:toolbar'),
            w = (function (y) {
              v(b, y);
              function b(T, x) {
                d(this, b);
                var R = i(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, T, x));
                if (Array.isArray(R.options.container)) {
                  var B = document.createElement('div');
                  S(B, R.options.container),
                    T.container.parentNode.insertBefore(B, T.container),
                    (R.container = B);
                } else
                  typeof R.options.container == 'string'
                    ? (R.container = document.querySelector(R.options.container))
                    : (R.container = R.options.container);
                if (!(R.container instanceof HTMLElement)) {
                  var C;
                  return (C = N.error('Container required for toolbar', R.options)), i(R, C);
                }
                return (
                  R.container.classList.add('ql-toolbar'),
                  (R.controls = []),
                  (R.handlers = {}),
                  Object.keys(R.options.handlers).forEach(function (Z) {
                    R.addHandler(Z, R.options.handlers[Z]);
                  }),
                  [].forEach.call(R.container.querySelectorAll('button, select'), function (Z) {
                    R.attach(Z);
                  }),
                  R.quill.on(t.default.events.EDITOR_CHANGE, function (Z, I) {
                    Z === t.default.events.SELECTION_CHANGE && R.update(I);
                  }),
                  R.quill.on(t.default.events.SCROLL_OPTIMIZE, function () {
                    var Z = R.quill.selection.getRange(),
                      I = g(Z, 1),
                      j = I[0];
                    R.update(j);
                  }),
                  R
                );
              }
              return (
                _(b, [
                  {
                    key: 'addHandler',
                    value: function (x, R) {
                      this.handlers[x] = R;
                    },
                  },
                  {
                    key: 'attach',
                    value: function (x) {
                      var R = this,
                        B = [].find.call(x.classList, function (Z) {
                          return Z.indexOf('ql-') === 0;
                        });
                      if (B) {
                        if (
                          ((B = B.slice(3)),
                          x.tagName === 'BUTTON' && x.setAttribute('type', 'button'),
                          this.handlers[B] == null)
                        ) {
                          if (
                            this.quill.scroll.whitelist != null &&
                            this.quill.scroll.whitelist[B] == null
                          ) {
                            N.warn('ignoring attaching to disabled format', B, x);
                            return;
                          }
                          if (c.default.query(B) == null) {
                            N.warn('ignoring attaching to nonexistent format', B, x);
                            return;
                          }
                        }
                        var C = x.tagName === 'SELECT' ? 'change' : 'click';
                        x.addEventListener(C, function (Z) {
                          var I = void 0;
                          if (x.tagName === 'SELECT') {
                            if (x.selectedIndex < 0) return;
                            var j = x.options[x.selectedIndex];
                            j.hasAttribute('selected') ? (I = !1) : (I = j.value || !1);
                          } else x.classList.contains('ql-active') ? (I = !1) : (I = x.value || !x.hasAttribute('value')), Z.preventDefault();
                          R.quill.focus();
                          var k = R.quill.selection.getRange(),
                            q = g(k, 1),
                            L = q[0];
                          if (R.handlers[B] != null) R.handlers[B].call(R, I);
                          else if (c.default.query(B).prototype instanceof c.default.Embed) {
                            if (((I = prompt('Enter ' + B)), !I)) return;
                            R.quill.updateContents(
                              new m.default().retain(L.index).delete(L.length).insert(l({}, B, I)),
                              t.default.sources.USER
                            );
                          } else R.quill.format(B, I, t.default.sources.USER);
                          R.update(L);
                        }),
                          this.controls.push([B, x]);
                      }
                    },
                  },
                  {
                    key: 'update',
                    value: function (x) {
                      var R = x == null ? {} : this.quill.getFormat(x);
                      this.controls.forEach(function (B) {
                        var C = g(B, 2),
                          Z = C[0],
                          I = C[1];
                        if (I.tagName === 'SELECT') {
                          var j = void 0;
                          if (x == null) j = null;
                          else if (R[Z] == null) j = I.querySelector('option[selected]');
                          else if (!Array.isArray(R[Z])) {
                            var k = R[Z];
                            typeof k == 'string' && (k = k.replace(/\"/g, '\\"')),
                              (j = I.querySelector('option[value="' + k + '"]'));
                          }
                          j == null ? ((I.value = ''), (I.selectedIndex = -1)) : (j.selected = !0);
                        } else if (x == null) I.classList.remove('ql-active');
                        else if (I.hasAttribute('value')) {
                          var q =
                            R[Z] === I.getAttribute('value') ||
                            (R[Z] != null && R[Z].toString() === I.getAttribute('value')) ||
                            (R[Z] == null && !I.getAttribute('value'));
                          I.classList.toggle('ql-active', q);
                        } else I.classList.toggle('ql-active', R[Z] != null);
                      });
                    },
                  },
                ]),
                b
              );
            })(s.default);
          w.DEFAULTS = {};
          function A(y, b, T) {
            var x = document.createElement('button');
            x.setAttribute('type', 'button'),
              x.classList.add('ql-' + b),
              T != null && (x.value = T),
              y.appendChild(x);
          }
          function S(y, b) {
            Array.isArray(b[0]) || (b = [b]),
              b.forEach(function (T) {
                var x = document.createElement('span');
                x.classList.add('ql-formats'),
                  T.forEach(function (R) {
                    if (typeof R == 'string') A(x, R);
                    else {
                      var B = Object.keys(R)[0],
                        C = R[B];
                      Array.isArray(C) ? O(x, B, C) : A(x, B, C);
                    }
                  }),
                  y.appendChild(x);
              });
          }
          function O(y, b, T) {
            var x = document.createElement('select');
            x.classList.add('ql-' + b),
              T.forEach(function (R) {
                var B = document.createElement('option');
                R !== !1 ? B.setAttribute('value', R) : B.setAttribute('selected', 'selected'),
                  x.appendChild(B);
              }),
              y.appendChild(x);
          }
          (w.DEFAULTS = {
            container: null,
            handlers: {
              clean: function () {
                var b = this,
                  T = this.quill.getSelection();
                if (T != null)
                  if (T.length == 0) {
                    var x = this.quill.getFormat();
                    Object.keys(x).forEach(function (R) {
                      c.default.query(R, c.default.Scope.INLINE) != null && b.quill.format(R, !1);
                    });
                  } else this.quill.removeFormat(T, t.default.sources.USER);
              },
              direction: function (b) {
                var T = this.quill.getFormat().align;
                b === 'rtl' && T == null
                  ? this.quill.format('align', 'right', t.default.sources.USER)
                  : !b && T === 'right' && this.quill.format('align', !1, t.default.sources.USER),
                  this.quill.format('direction', b, t.default.sources.USER);
              },
              indent: function (b) {
                var T = this.quill.getSelection(),
                  x = this.quill.getFormat(T),
                  R = parseInt(x.indent || 0);
                if (b === '+1' || b === '-1') {
                  var B = b === '+1' ? 1 : -1;
                  x.direction === 'rtl' && (B *= -1),
                    this.quill.format('indent', R + B, t.default.sources.USER);
                }
              },
              link: function (b) {
                b === !0 && (b = prompt('Enter link URL:')),
                  this.quill.format('link', b, t.default.sources.USER);
              },
              list: function (b) {
                var T = this.quill.getSelection(),
                  x = this.quill.getFormat(T);
                b === 'check'
                  ? x.list === 'checked' || x.list === 'unchecked'
                    ? this.quill.format('list', !1, t.default.sources.USER)
                    : this.quill.format('list', 'unchecked', t.default.sources.USER)
                  : this.quill.format('list', b, t.default.sources.USER);
              },
            },
          }),
            (e.default = w),
            (e.addControls = S);
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function f(u, s) {
                for (var a = 0; a < s.length; a++) {
                  var l = s[a];
                  (l.enumerable = l.enumerable || !1),
                    (l.configurable = !0),
                    'value' in l && (l.writable = !0),
                    Object.defineProperty(u, l.key, l);
                }
              }
              return function (u, s, a) {
                return s && f(u.prototype, s), a && f(u, a), u;
              };
            })(),
            _ = function f(u, s, a) {
              u === null && (u = Function.prototype);
              var l = Object.getOwnPropertyDescriptor(u, s);
              if (l === void 0) {
                var d = Object.getPrototypeOf(u);
                return d === null ? void 0 : f(d, s, a);
              } else {
                if ('value' in l) return l.value;
                var i = l.get;
                return i === void 0 ? void 0 : i.call(a);
              }
            },
            E = n(28),
            m = p(E);
          function p(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function c(f, u) {
            if (!(f instanceof u)) throw new TypeError('Cannot call a class as a function');
          }
          function o(f, u) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u == 'object' || typeof u == 'function') ? u : f;
          }
          function t(f, u) {
            if (typeof u != 'function' && u !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof u
              );
            (f.prototype = Object.create(u && u.prototype, {
              constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 },
            })),
              u && (Object.setPrototypeOf ? Object.setPrototypeOf(f, u) : (f.__proto__ = u));
          }
          var r = (function (f) {
            t(u, f);
            function u(s, a) {
              c(this, u);
              var l = o(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, s));
              return (
                (l.label.innerHTML = a),
                l.container.classList.add('ql-color-picker'),
                [].slice
                  .call(l.container.querySelectorAll('.ql-picker-item'), 0, 7)
                  .forEach(function (d) {
                    d.classList.add('ql-primary');
                  }),
                l
              );
            }
            return (
              g(u, [
                {
                  key: 'buildItem',
                  value: function (a) {
                    var l = _(
                      u.prototype.__proto__ || Object.getPrototypeOf(u.prototype),
                      'buildItem',
                      this
                    ).call(this, a);
                    return (l.style.backgroundColor = a.getAttribute('value') || ''), l;
                  },
                },
                {
                  key: 'selectItem',
                  value: function (a, l) {
                    _(
                      u.prototype.__proto__ || Object.getPrototypeOf(u.prototype),
                      'selectItem',
                      this
                    ).call(this, a, l);
                    var d = this.label.querySelector('.ql-color-label'),
                      i = (a && a.getAttribute('data-value')) || '';
                    d && (d.tagName === 'line' ? (d.style.stroke = i) : (d.style.fill = i));
                  },
                },
              ]),
              u
            );
          })(m.default);
          e.default = r;
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function f(u, s) {
                for (var a = 0; a < s.length; a++) {
                  var l = s[a];
                  (l.enumerable = l.enumerable || !1),
                    (l.configurable = !0),
                    'value' in l && (l.writable = !0),
                    Object.defineProperty(u, l.key, l);
                }
              }
              return function (u, s, a) {
                return s && f(u.prototype, s), a && f(u, a), u;
              };
            })(),
            _ = function f(u, s, a) {
              u === null && (u = Function.prototype);
              var l = Object.getOwnPropertyDescriptor(u, s);
              if (l === void 0) {
                var d = Object.getPrototypeOf(u);
                return d === null ? void 0 : f(d, s, a);
              } else {
                if ('value' in l) return l.value;
                var i = l.get;
                return i === void 0 ? void 0 : i.call(a);
              }
            },
            E = n(28),
            m = p(E);
          function p(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function c(f, u) {
            if (!(f instanceof u)) throw new TypeError('Cannot call a class as a function');
          }
          function o(f, u) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u == 'object' || typeof u == 'function') ? u : f;
          }
          function t(f, u) {
            if (typeof u != 'function' && u !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof u
              );
            (f.prototype = Object.create(u && u.prototype, {
              constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 },
            })),
              u && (Object.setPrototypeOf ? Object.setPrototypeOf(f, u) : (f.__proto__ = u));
          }
          var r = (function (f) {
            t(u, f);
            function u(s, a) {
              c(this, u);
              var l = o(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, s));
              return (
                l.container.classList.add('ql-icon-picker'),
                [].forEach.call(l.container.querySelectorAll('.ql-picker-item'), function (d) {
                  d.innerHTML = a[d.getAttribute('data-value') || ''];
                }),
                (l.defaultItem = l.container.querySelector('.ql-selected')),
                l.selectItem(l.defaultItem),
                l
              );
            }
            return (
              g(u, [
                {
                  key: 'selectItem',
                  value: function (a, l) {
                    _(
                      u.prototype.__proto__ || Object.getPrototypeOf(u.prototype),
                      'selectItem',
                      this
                    ).call(this, a, l),
                      (a = a || this.defaultItem),
                      (this.label.innerHTML = a.innerHTML);
                  },
                },
              ]),
              u
            );
          })(m.default);
          e.default = r;
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
            function m(p, c) {
              for (var o = 0; o < c.length; o++) {
                var t = c[o];
                (t.enumerable = t.enumerable || !1),
                  (t.configurable = !0),
                  'value' in t && (t.writable = !0),
                  Object.defineProperty(p, t.key, t);
              }
            }
            return function (p, c, o) {
              return c && m(p.prototype, c), o && m(p, o), p;
            };
          })();
          function _(m, p) {
            if (!(m instanceof p)) throw new TypeError('Cannot call a class as a function');
          }
          var E = (function () {
            function m(p, c) {
              var o = this;
              _(this, m),
                (this.quill = p),
                (this.boundsContainer = c || document.body),
                (this.root = p.addContainer('ql-tooltip')),
                (this.root.innerHTML = this.constructor.TEMPLATE),
                this.quill.root === this.quill.scrollingContainer &&
                  this.quill.root.addEventListener('scroll', function () {
                    o.root.style.marginTop = -1 * o.quill.root.scrollTop + 'px';
                  }),
                this.hide();
            }
            return (
              g(m, [
                {
                  key: 'hide',
                  value: function () {
                    this.root.classList.add('ql-hidden');
                  },
                },
                {
                  key: 'position',
                  value: function (c) {
                    var o = c.left + c.width / 2 - this.root.offsetWidth / 2,
                      t = c.bottom + this.quill.root.scrollTop;
                    (this.root.style.left = o + 'px'),
                      (this.root.style.top = t + 'px'),
                      this.root.classList.remove('ql-flip');
                    var r = this.boundsContainer.getBoundingClientRect(),
                      f = this.root.getBoundingClientRect(),
                      u = 0;
                    if (
                      (f.right > r.right &&
                        ((u = r.right - f.right), (this.root.style.left = o + u + 'px')),
                      f.left < r.left &&
                        ((u = r.left - f.left), (this.root.style.left = o + u + 'px')),
                      f.bottom > r.bottom)
                    ) {
                      var s = f.bottom - f.top,
                        a = c.bottom - c.top + s;
                      (this.root.style.top = t - a + 'px'), this.root.classList.add('ql-flip');
                    }
                    return u;
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
              m
            );
          })();
          e.default = E;
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function O(y, b) {
                var T = [],
                  x = !0,
                  R = !1,
                  B = void 0;
                try {
                  for (
                    var C = y[Symbol.iterator](), Z;
                    !(x = (Z = C.next()).done) && (T.push(Z.value), !(b && T.length === b));
                    x = !0
                  );
                } catch (I) {
                  (R = !0), (B = I);
                } finally {
                  try {
                    !x && C.return && C.return();
                  } finally {
                    if (R) throw B;
                  }
                }
                return T;
              }
              return function (y, b) {
                if (Array.isArray(y)) return y;
                if (Symbol.iterator in Object(y)) return O(y, b);
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              };
            })(),
            _ = function O(y, b, T) {
              y === null && (y = Function.prototype);
              var x = Object.getOwnPropertyDescriptor(y, b);
              if (x === void 0) {
                var R = Object.getPrototypeOf(y);
                return R === null ? void 0 : O(R, b, T);
              } else {
                if ('value' in x) return x.value;
                var B = x.get;
                return B === void 0 ? void 0 : B.call(T);
              }
            },
            E = (function () {
              function O(y, b) {
                for (var T = 0; T < b.length; T++) {
                  var x = b[T];
                  (x.enumerable = x.enumerable || !1),
                    (x.configurable = !0),
                    'value' in x && (x.writable = !0),
                    Object.defineProperty(y, x.key, x);
                }
              }
              return function (y, b, T) {
                return b && O(y.prototype, b), T && O(y, T), y;
              };
            })(),
            m = n(3),
            p = d(m),
            c = n(8),
            o = d(c),
            t = n(43),
            r = d(t),
            f = n(27),
            u = d(f),
            s = n(15),
            a = n(41),
            l = d(a);
          function d(O) {
            return O && O.__esModule ? O : { default: O };
          }
          function i(O, y) {
            if (!(O instanceof y)) throw new TypeError('Cannot call a class as a function');
          }
          function v(O, y) {
            if (!O)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return y && (typeof y == 'object' || typeof y == 'function') ? y : O;
          }
          function N(O, y) {
            if (typeof y != 'function' && y !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof y
              );
            (O.prototype = Object.create(y && y.prototype, {
              constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 },
            })),
              y && (Object.setPrototypeOf ? Object.setPrototypeOf(O, y) : (O.__proto__ = y));
          }
          var w = [
              [{ header: ['1', '2', '3', !1] }],
              ['bold', 'italic', 'underline', 'link'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['clean'],
            ],
            A = (function (O) {
              N(y, O);
              function y(b, T) {
                i(this, y),
                  T.modules.toolbar != null &&
                    T.modules.toolbar.container == null &&
                    (T.modules.toolbar.container = w);
                var x = v(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, b, T));
                return x.quill.container.classList.add('ql-snow'), x;
              }
              return (
                E(y, [
                  {
                    key: 'extendToolbar',
                    value: function (T) {
                      T.container.classList.add('ql-snow'),
                        this.buildButtons(
                          [].slice.call(T.container.querySelectorAll('button')),
                          l.default
                        ),
                        this.buildPickers(
                          [].slice.call(T.container.querySelectorAll('select')),
                          l.default
                        ),
                        (this.tooltip = new S(this.quill, this.options.bounds)),
                        T.container.querySelector('.ql-link') &&
                          this.quill.keyboard.addBinding(
                            { key: 'K', shortKey: !0 },
                            function (x, R) {
                              T.handlers.link.call(T, !R.format.link);
                            }
                          );
                    },
                  },
                ]),
                y
              );
            })(r.default);
          A.DEFAULTS = (0, p.default)(!0, {}, r.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function (y) {
                    if (y) {
                      var b = this.quill.getSelection();
                      if (b == null || b.length == 0) return;
                      var T = this.quill.getText(b);
                      /^\S+@\S+\.\S+$/.test(T) && T.indexOf('mailto:') !== 0 && (T = 'mailto:' + T);
                      var x = this.quill.theme.tooltip;
                      x.edit('link', T);
                    } else this.quill.format('link', !1);
                  },
                },
              },
            },
          });
          var S = (function (O) {
            N(y, O);
            function y(b, T) {
              i(this, y);
              var x = v(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, b, T));
              return (x.preview = x.root.querySelector('a.ql-preview')), x;
            }
            return (
              E(y, [
                {
                  key: 'listen',
                  value: function () {
                    var T = this;
                    _(
                      y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                      'listen',
                      this
                    ).call(this),
                      this.root
                        .querySelector('a.ql-action')
                        .addEventListener('click', function (x) {
                          T.root.classList.contains('ql-editing')
                            ? T.save()
                            : T.edit('link', T.preview.textContent),
                            x.preventDefault();
                        }),
                      this.root
                        .querySelector('a.ql-remove')
                        .addEventListener('click', function (x) {
                          if (T.linkRange != null) {
                            var R = T.linkRange;
                            T.restoreFocus(),
                              T.quill.formatText(R, 'link', !1, o.default.sources.USER),
                              delete T.linkRange;
                          }
                          x.preventDefault(), T.hide();
                        }),
                      this.quill.on(o.default.events.SELECTION_CHANGE, function (x, R, B) {
                        if (x != null) {
                          if (x.length === 0 && B === o.default.sources.USER) {
                            var C = T.quill.scroll.descendant(u.default, x.index),
                              Z = g(C, 2),
                              I = Z[0],
                              j = Z[1];
                            if (I != null) {
                              T.linkRange = new s.Range(x.index - j, I.length());
                              var k = u.default.formats(I.domNode);
                              (T.preview.textContent = k),
                                T.preview.setAttribute('href', k),
                                T.show(),
                                T.position(T.quill.getBounds(T.linkRange));
                              return;
                            }
                          } else delete T.linkRange;
                          T.hide();
                        }
                      });
                  },
                },
                {
                  key: 'show',
                  value: function () {
                    _(
                      y.prototype.__proto__ || Object.getPrototypeOf(y.prototype),
                      'show',
                      this
                    ).call(this),
                      this.root.removeAttribute('data-mode');
                  },
                },
              ]),
              y
            );
          })(t.BaseTooltip);
          (S.TEMPLATE = [
            '<a class="ql-preview" target="_blank" href="about:blank"></a>',
            '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
            '<a class="ql-action"></a>',
            '<a class="ql-remove"></a>',
          ].join('')),
            (e.default = A);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(29),
            _ = G(g),
            E = n(36),
            m = n(38),
            p = n(64),
            c = n(65),
            o = G(c),
            t = n(66),
            r = G(t),
            f = n(67),
            u = G(f),
            s = n(37),
            a = n(26),
            l = n(39),
            d = n(40),
            i = n(56),
            v = G(i),
            N = n(68),
            w = G(N),
            A = n(27),
            S = G(A),
            O = n(69),
            y = G(O),
            b = n(70),
            T = G(b),
            x = n(71),
            R = G(x),
            B = n(72),
            C = G(B),
            Z = n(73),
            I = G(Z),
            j = n(13),
            k = G(j),
            q = n(74),
            L = G(q),
            F = n(75),
            D = G(F),
            P = n(57),
            M = G(P),
            z = n(41),
            U = G(z),
            K = n(28),
            Y = G(K),
            X = n(59),
            Q = G(X),
            ne = n(60),
            oe = G(ne),
            fe = n(61),
            ue = G(fe),
            H = n(108),
            V = G(H),
            W = n(62),
            $ = G(W);
          function G(J) {
            return J && J.__esModule ? J : { default: J };
          }
          _.default.register(
            {
              'attributors/attribute/direction': m.DirectionAttribute,
              'attributors/class/align': E.AlignClass,
              'attributors/class/background': s.BackgroundClass,
              'attributors/class/color': a.ColorClass,
              'attributors/class/direction': m.DirectionClass,
              'attributors/class/font': l.FontClass,
              'attributors/class/size': d.SizeClass,
              'attributors/style/align': E.AlignStyle,
              'attributors/style/background': s.BackgroundStyle,
              'attributors/style/color': a.ColorStyle,
              'attributors/style/direction': m.DirectionStyle,
              'attributors/style/font': l.FontStyle,
              'attributors/style/size': d.SizeStyle,
            },
            !0
          ),
            _.default.register(
              {
                'formats/align': E.AlignClass,
                'formats/direction': m.DirectionClass,
                'formats/indent': p.IndentClass,
                'formats/background': s.BackgroundStyle,
                'formats/color': a.ColorStyle,
                'formats/font': l.FontClass,
                'formats/size': d.SizeClass,
                'formats/blockquote': o.default,
                'formats/code-block': k.default,
                'formats/header': r.default,
                'formats/list': u.default,
                'formats/bold': v.default,
                'formats/code': j.Code,
                'formats/italic': w.default,
                'formats/link': S.default,
                'formats/script': y.default,
                'formats/strike': T.default,
                'formats/underline': R.default,
                'formats/image': C.default,
                'formats/video': I.default,
                'formats/list/item': f.ListItem,
                'modules/formula': L.default,
                'modules/syntax': D.default,
                'modules/toolbar': M.default,
                'themes/bubble': V.default,
                'themes/snow': $.default,
                'ui/icons': U.default,
                'ui/picker': Y.default,
                'ui/icon-picker': oe.default,
                'ui/color-picker': Q.default,
                'ui/tooltip': ue.default,
              },
              !0
            ),
            (e.default = _.default);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.IndentClass = void 0);
          var g = (function () {
              function u(s, a) {
                for (var l = 0; l < a.length; l++) {
                  var d = a[l];
                  (d.enumerable = d.enumerable || !1),
                    (d.configurable = !0),
                    'value' in d && (d.writable = !0),
                    Object.defineProperty(s, d.key, d);
                }
              }
              return function (s, a, l) {
                return a && u(s.prototype, a), l && u(s, l), s;
              };
            })(),
            _ = function u(s, a, l) {
              s === null && (s = Function.prototype);
              var d = Object.getOwnPropertyDescriptor(s, a);
              if (d === void 0) {
                var i = Object.getPrototypeOf(s);
                return i === null ? void 0 : u(i, a, l);
              } else {
                if ('value' in d) return d.value;
                var v = d.get;
                return v === void 0 ? void 0 : v.call(l);
              }
            },
            E = n(0),
            m = p(E);
          function p(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function c(u, s) {
            if (!(u instanceof s)) throw new TypeError('Cannot call a class as a function');
          }
          function o(u, s) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return s && (typeof s == 'object' || typeof s == 'function') ? s : u;
          }
          function t(u, s) {
            if (typeof s != 'function' && s !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof s
              );
            (u.prototype = Object.create(s && s.prototype, {
              constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 },
            })),
              s && (Object.setPrototypeOf ? Object.setPrototypeOf(u, s) : (u.__proto__ = s));
          }
          var r = (function (u) {
              t(s, u);
              function s() {
                return (
                  c(this, s),
                  o(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments))
                );
              }
              return (
                g(s, [
                  {
                    key: 'add',
                    value: function (l, d) {
                      if (d === '+1' || d === '-1') {
                        var i = this.value(l) || 0;
                        d = d === '+1' ? i + 1 : i - 1;
                      }
                      return d === 0
                        ? (this.remove(l), !0)
                        : _(
                            s.prototype.__proto__ || Object.getPrototypeOf(s.prototype),
                            'add',
                            this
                          ).call(this, l, d);
                    },
                  },
                  {
                    key: 'canAdd',
                    value: function (l, d) {
                      return (
                        _(
                          s.prototype.__proto__ || Object.getPrototypeOf(s.prototype),
                          'canAdd',
                          this
                        ).call(this, l, d) ||
                        _(
                          s.prototype.__proto__ || Object.getPrototypeOf(s.prototype),
                          'canAdd',
                          this
                        ).call(this, l, parseInt(d))
                      );
                    },
                  },
                  {
                    key: 'value',
                    value: function (l) {
                      return (
                        parseInt(
                          _(
                            s.prototype.__proto__ || Object.getPrototypeOf(s.prototype),
                            'value',
                            this
                          ).call(this, l)
                        ) || void 0
                      );
                    },
                  },
                ]),
                s
              );
            })(m.default.Attributor.Class),
            f = new r('indent', 'ql-indent', {
              scope: m.default.Scope.BLOCK,
              whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
            });
          e.IndentClass = f;
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(4),
            _ = E(g);
          function E(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function m(t, r) {
            if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
          }
          function p(t, r) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == 'object' || typeof r == 'function') ? r : t;
          }
          function c(t, r) {
            if (typeof r != 'function' && r !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof r
              );
            (t.prototype = Object.create(r && r.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
              r && (Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : (t.__proto__ = r));
          }
          var o = (function (t) {
            c(r, t);
            function r() {
              return (
                m(this, r),
                p(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
              );
            }
            return r;
          })(_.default);
          (o.blotName = 'blockquote'), (o.tagName = 'blockquote'), (e.default = o);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function r(f, u) {
                for (var s = 0; s < u.length; s++) {
                  var a = u[s];
                  (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    'value' in a && (a.writable = !0),
                    Object.defineProperty(f, a.key, a);
                }
              }
              return function (f, u, s) {
                return u && r(f.prototype, u), s && r(f, s), f;
              };
            })(),
            _ = n(4),
            E = m(_);
          function m(r) {
            return r && r.__esModule ? r : { default: r };
          }
          function p(r, f) {
            if (!(r instanceof f)) throw new TypeError('Cannot call a class as a function');
          }
          function c(r, f) {
            if (!r)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return f && (typeof f == 'object' || typeof f == 'function') ? f : r;
          }
          function o(r, f) {
            if (typeof f != 'function' && f !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof f
              );
            (r.prototype = Object.create(f && f.prototype, {
              constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
            })),
              f && (Object.setPrototypeOf ? Object.setPrototypeOf(r, f) : (r.__proto__ = f));
          }
          var t = (function (r) {
            o(f, r);
            function f() {
              return (
                p(this, f),
                c(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments))
              );
            }
            return (
              g(f, null, [
                {
                  key: 'formats',
                  value: function (s) {
                    return this.tagName.indexOf(s.tagName) + 1;
                  },
                },
              ]),
              f
            );
          })(E.default);
          (t.blotName = 'header'),
            (t.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']),
            (e.default = t);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = e.ListItem = void 0);
          var g = (function () {
              function i(v, N) {
                for (var w = 0; w < N.length; w++) {
                  var A = N[w];
                  (A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(v, A.key, A);
                }
              }
              return function (v, N, w) {
                return N && i(v.prototype, N), w && i(v, w), v;
              };
            })(),
            _ = function i(v, N, w) {
              v === null && (v = Function.prototype);
              var A = Object.getOwnPropertyDescriptor(v, N);
              if (A === void 0) {
                var S = Object.getPrototypeOf(v);
                return S === null ? void 0 : i(S, N, w);
              } else {
                if ('value' in A) return A.value;
                var O = A.get;
                return O === void 0 ? void 0 : O.call(w);
              }
            },
            E = n(0),
            m = r(E),
            p = n(4),
            c = r(p),
            o = n(25),
            t = r(o);
          function r(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function f(i, v, N) {
            return (
              v in i
                ? Object.defineProperty(i, v, {
                    value: N,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (i[v] = N),
              i
            );
          }
          function u(i, v) {
            if (!(i instanceof v)) throw new TypeError('Cannot call a class as a function');
          }
          function s(i, v) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return v && (typeof v == 'object' || typeof v == 'function') ? v : i;
          }
          function a(i, v) {
            if (typeof v != 'function' && v !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof v
              );
            (i.prototype = Object.create(v && v.prototype, {
              constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
            })),
              v && (Object.setPrototypeOf ? Object.setPrototypeOf(i, v) : (i.__proto__ = v));
          }
          var l = (function (i) {
            a(v, i);
            function v() {
              return (
                u(this, v),
                s(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments))
              );
            }
            return (
              g(
                v,
                [
                  {
                    key: 'format',
                    value: function (w, A) {
                      w === d.blotName && !A
                        ? this.replaceWith(m.default.create(this.statics.scope))
                        : _(
                            v.prototype.__proto__ || Object.getPrototypeOf(v.prototype),
                            'format',
                            this
                          ).call(this, w, A);
                    },
                  },
                  {
                    key: 'remove',
                    value: function () {
                      this.prev == null && this.next == null
                        ? this.parent.remove()
                        : _(
                            v.prototype.__proto__ || Object.getPrototypeOf(v.prototype),
                            'remove',
                            this
                          ).call(this);
                    },
                  },
                  {
                    key: 'replaceWith',
                    value: function (w, A) {
                      return (
                        this.parent.isolate(this.offset(this.parent), this.length()),
                        w === this.parent.statics.blotName
                          ? (this.parent.replaceWith(w, A), this)
                          : (this.parent.unwrap(),
                            _(
                              v.prototype.__proto__ || Object.getPrototypeOf(v.prototype),
                              'replaceWith',
                              this
                            ).call(this, w, A))
                      );
                    },
                  },
                ],
                [
                  {
                    key: 'formats',
                    value: function (w) {
                      return w.tagName === this.tagName
                        ? void 0
                        : _(v.__proto__ || Object.getPrototypeOf(v), 'formats', this).call(this, w);
                    },
                  },
                ]
              ),
              v
            );
          })(c.default);
          (l.blotName = 'list-item'), (l.tagName = 'LI');
          var d = (function (i) {
            a(v, i),
              g(v, null, [
                {
                  key: 'create',
                  value: function (w) {
                    var A = w === 'ordered' ? 'OL' : 'UL',
                      S = _(v.__proto__ || Object.getPrototypeOf(v), 'create', this).call(this, A);
                    return (
                      (w === 'checked' || w === 'unchecked') &&
                        S.setAttribute('data-checked', w === 'checked'),
                      S
                    );
                  },
                },
                {
                  key: 'formats',
                  value: function (w) {
                    if (w.tagName === 'OL') return 'ordered';
                    if (w.tagName === 'UL')
                      return w.hasAttribute('data-checked')
                        ? w.getAttribute('data-checked') === 'true'
                          ? 'checked'
                          : 'unchecked'
                        : 'bullet';
                  },
                },
              ]);
            function v(N) {
              u(this, v);
              var w = s(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, N)),
                A = function (O) {
                  if (O.target.parentNode === N) {
                    var y = w.statics.formats(N),
                      b = m.default.find(O.target);
                    y === 'checked'
                      ? b.format('list', 'unchecked')
                      : y === 'unchecked' && b.format('list', 'checked');
                  }
                };
              return N.addEventListener('touchstart', A), N.addEventListener('mousedown', A), w;
            }
            return (
              g(v, [
                {
                  key: 'format',
                  value: function (w, A) {
                    this.children.length > 0 && this.children.tail.format(w, A);
                  },
                },
                {
                  key: 'formats',
                  value: function () {
                    return f({}, this.statics.blotName, this.statics.formats(this.domNode));
                  },
                },
                {
                  key: 'insertBefore',
                  value: function (w, A) {
                    if (w instanceof l)
                      _(
                        v.prototype.__proto__ || Object.getPrototypeOf(v.prototype),
                        'insertBefore',
                        this
                      ).call(this, w, A);
                    else {
                      var S = A == null ? this.length() : A.offset(this),
                        O = this.split(S);
                      O.parent.insertBefore(w, O);
                    }
                  },
                },
                {
                  key: 'optimize',
                  value: function (w) {
                    _(
                      v.prototype.__proto__ || Object.getPrototypeOf(v.prototype),
                      'optimize',
                      this
                    ).call(this, w);
                    var A = this.next;
                    A != null &&
                      A.prev === this &&
                      A.statics.blotName === this.statics.blotName &&
                      A.domNode.tagName === this.domNode.tagName &&
                      A.domNode.getAttribute('data-checked') ===
                        this.domNode.getAttribute('data-checked') &&
                      (A.moveChildren(this), A.remove());
                  },
                },
                {
                  key: 'replace',
                  value: function (w) {
                    if (w.statics.blotName !== this.statics.blotName) {
                      var A = m.default.create(this.statics.defaultChild);
                      w.moveChildren(A), this.appendChild(A);
                    }
                    _(
                      v.prototype.__proto__ || Object.getPrototypeOf(v.prototype),
                      'replace',
                      this
                    ).call(this, w);
                  },
                },
              ]),
              v
            );
          })(t.default);
          (d.blotName = 'list'),
            (d.scope = m.default.Scope.BLOCK_BLOT),
            (d.tagName = ['OL', 'UL']),
            (d.defaultChild = 'list-item'),
            (d.allowedChildren = [l]),
            (e.ListItem = l),
            (e.default = d);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(56),
            _ = E(g);
          function E(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function m(t, r) {
            if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
          }
          function p(t, r) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == 'object' || typeof r == 'function') ? r : t;
          }
          function c(t, r) {
            if (typeof r != 'function' && r !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof r
              );
            (t.prototype = Object.create(r && r.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
              r && (Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : (t.__proto__ = r));
          }
          var o = (function (t) {
            c(r, t);
            function r() {
              return (
                m(this, r),
                p(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
              );
            }
            return r;
          })(_.default);
          (o.blotName = 'italic'), (o.tagName = ['EM', 'I']), (e.default = o);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function f(u, s) {
                for (var a = 0; a < s.length; a++) {
                  var l = s[a];
                  (l.enumerable = l.enumerable || !1),
                    (l.configurable = !0),
                    'value' in l && (l.writable = !0),
                    Object.defineProperty(u, l.key, l);
                }
              }
              return function (u, s, a) {
                return s && f(u.prototype, s), a && f(u, a), u;
              };
            })(),
            _ = function f(u, s, a) {
              u === null && (u = Function.prototype);
              var l = Object.getOwnPropertyDescriptor(u, s);
              if (l === void 0) {
                var d = Object.getPrototypeOf(u);
                return d === null ? void 0 : f(d, s, a);
              } else {
                if ('value' in l) return l.value;
                var i = l.get;
                return i === void 0 ? void 0 : i.call(a);
              }
            },
            E = n(6),
            m = p(E);
          function p(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function c(f, u) {
            if (!(f instanceof u)) throw new TypeError('Cannot call a class as a function');
          }
          function o(f, u) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u == 'object' || typeof u == 'function') ? u : f;
          }
          function t(f, u) {
            if (typeof u != 'function' && u !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof u
              );
            (f.prototype = Object.create(u && u.prototype, {
              constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 },
            })),
              u && (Object.setPrototypeOf ? Object.setPrototypeOf(f, u) : (f.__proto__ = u));
          }
          var r = (function (f) {
            t(u, f);
            function u() {
              return (
                c(this, u),
                o(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments))
              );
            }
            return (
              g(u, null, [
                {
                  key: 'create',
                  value: function (a) {
                    return a === 'super'
                      ? document.createElement('sup')
                      : a === 'sub'
                      ? document.createElement('sub')
                      : _(u.__proto__ || Object.getPrototypeOf(u), 'create', this).call(this, a);
                  },
                },
                {
                  key: 'formats',
                  value: function (a) {
                    if (a.tagName === 'SUB') return 'sub';
                    if (a.tagName === 'SUP') return 'super';
                  },
                },
              ]),
              u
            );
          })(m.default);
          (r.blotName = 'script'), (r.tagName = ['SUB', 'SUP']), (e.default = r);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(6),
            _ = E(g);
          function E(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function m(t, r) {
            if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
          }
          function p(t, r) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == 'object' || typeof r == 'function') ? r : t;
          }
          function c(t, r) {
            if (typeof r != 'function' && r !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof r
              );
            (t.prototype = Object.create(r && r.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
              r && (Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : (t.__proto__ = r));
          }
          var o = (function (t) {
            c(r, t);
            function r() {
              return (
                m(this, r),
                p(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
              );
            }
            return r;
          })(_.default);
          (o.blotName = 'strike'), (o.tagName = 'S'), (e.default = o);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = n(6),
            _ = E(g);
          function E(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function m(t, r) {
            if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
          }
          function p(t, r) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == 'object' || typeof r == 'function') ? r : t;
          }
          function c(t, r) {
            if (typeof r != 'function' && r !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof r
              );
            (t.prototype = Object.create(r && r.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
              r && (Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : (t.__proto__ = r));
          }
          var o = (function (t) {
            c(r, t);
            function r() {
              return (
                m(this, r),
                p(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
              );
            }
            return r;
          })(_.default);
          (o.blotName = 'underline'), (o.tagName = 'U'), (e.default = o);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function s(a, l) {
                for (var d = 0; d < l.length; d++) {
                  var i = l[d];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    'value' in i && (i.writable = !0),
                    Object.defineProperty(a, i.key, i);
                }
              }
              return function (a, l, d) {
                return l && s(a.prototype, l), d && s(a, d), a;
              };
            })(),
            _ = function s(a, l, d) {
              a === null && (a = Function.prototype);
              var i = Object.getOwnPropertyDescriptor(a, l);
              if (i === void 0) {
                var v = Object.getPrototypeOf(a);
                return v === null ? void 0 : s(v, l, d);
              } else {
                if ('value' in i) return i.value;
                var N = i.get;
                return N === void 0 ? void 0 : N.call(d);
              }
            },
            E = n(0),
            m = c(E),
            p = n(27);
          function c(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function o(s, a) {
            if (!(s instanceof a)) throw new TypeError('Cannot call a class as a function');
          }
          function t(s, a) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == 'object' || typeof a == 'function') ? a : s;
          }
          function r(s, a) {
            if (typeof a != 'function' && a !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof a
              );
            (s.prototype = Object.create(a && a.prototype, {
              constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 },
            })),
              a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : (s.__proto__ = a));
          }
          var f = ['alt', 'height', 'width'],
            u = (function (s) {
              r(a, s);
              function a() {
                return (
                  o(this, a),
                  t(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
                );
              }
              return (
                g(
                  a,
                  [
                    {
                      key: 'format',
                      value: function (d, i) {
                        f.indexOf(d) > -1
                          ? i
                            ? this.domNode.setAttribute(d, i)
                            : this.domNode.removeAttribute(d)
                          : _(
                              a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                              'format',
                              this
                            ).call(this, d, i);
                      },
                    },
                  ],
                  [
                    {
                      key: 'create',
                      value: function (d) {
                        var i = _(a.__proto__ || Object.getPrototypeOf(a), 'create', this).call(
                          this,
                          d
                        );
                        return typeof d == 'string' && i.setAttribute('src', this.sanitize(d)), i;
                      },
                    },
                    {
                      key: 'formats',
                      value: function (d) {
                        return f.reduce(function (i, v) {
                          return d.hasAttribute(v) && (i[v] = d.getAttribute(v)), i;
                        }, {});
                      },
                    },
                    {
                      key: 'match',
                      value: function (d) {
                        return /\.(jpe?g|gif|png)$/.test(d) || /^data:image\/.+;base64/.test(d);
                      },
                    },
                    {
                      key: 'sanitize',
                      value: function (d) {
                        return (0, p.sanitize)(d, ['http', 'https', 'data']) ? d : '//:0';
                      },
                    },
                    {
                      key: 'value',
                      value: function (d) {
                        return d.getAttribute('src');
                      },
                    },
                  ]
                ),
                a
              );
            })(m.default.Embed);
          (u.blotName = 'image'), (u.tagName = 'IMG'), (e.default = u);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var g = (function () {
              function s(a, l) {
                for (var d = 0; d < l.length; d++) {
                  var i = l[d];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    'value' in i && (i.writable = !0),
                    Object.defineProperty(a, i.key, i);
                }
              }
              return function (a, l, d) {
                return l && s(a.prototype, l), d && s(a, d), a;
              };
            })(),
            _ = function s(a, l, d) {
              a === null && (a = Function.prototype);
              var i = Object.getOwnPropertyDescriptor(a, l);
              if (i === void 0) {
                var v = Object.getPrototypeOf(a);
                return v === null ? void 0 : s(v, l, d);
              } else {
                if ('value' in i) return i.value;
                var N = i.get;
                return N === void 0 ? void 0 : N.call(d);
              }
            },
            E = n(4),
            m = n(27),
            p = c(m);
          function c(s) {
            return s && s.__esModule ? s : { default: s };
          }
          function o(s, a) {
            if (!(s instanceof a)) throw new TypeError('Cannot call a class as a function');
          }
          function t(s, a) {
            if (!s)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == 'object' || typeof a == 'function') ? a : s;
          }
          function r(s, a) {
            if (typeof a != 'function' && a !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof a
              );
            (s.prototype = Object.create(a && a.prototype, {
              constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 },
            })),
              a && (Object.setPrototypeOf ? Object.setPrototypeOf(s, a) : (s.__proto__ = a));
          }
          var f = ['height', 'width'],
            u = (function (s) {
              r(a, s);
              function a() {
                return (
                  o(this, a),
                  t(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
                );
              }
              return (
                g(
                  a,
                  [
                    {
                      key: 'format',
                      value: function (d, i) {
                        f.indexOf(d) > -1
                          ? i
                            ? this.domNode.setAttribute(d, i)
                            : this.domNode.removeAttribute(d)
                          : _(
                              a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                              'format',
                              this
                            ).call(this, d, i);
                      },
                    },
                  ],
                  [
                    {
                      key: 'create',
                      value: function (d) {
                        var i = _(a.__proto__ || Object.getPrototypeOf(a), 'create', this).call(
                          this,
                          d
                        );
                        return (
                          i.setAttribute('frameborder', '0'),
                          i.setAttribute('allowfullscreen', !0),
                          i.setAttribute('src', this.sanitize(d)),
                          i
                        );
                      },
                    },
                    {
                      key: 'formats',
                      value: function (d) {
                        return f.reduce(function (i, v) {
                          return d.hasAttribute(v) && (i[v] = d.getAttribute(v)), i;
                        }, {});
                      },
                    },
                    {
                      key: 'sanitize',
                      value: function (d) {
                        return p.default.sanitize(d);
                      },
                    },
                    {
                      key: 'value',
                      value: function (d) {
                        return d.getAttribute('src');
                      },
                    },
                  ]
                ),
                a
              );
            })(E.BlockEmbed);
          (u.blotName = 'video'),
            (u.className = 'ql-video'),
            (u.tagName = 'IFRAME'),
            (e.default = u);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = e.FormulaBlot = void 0);
          var g = (function () {
              function d(i, v) {
                for (var N = 0; N < v.length; N++) {
                  var w = v[N];
                  (w.enumerable = w.enumerable || !1),
                    (w.configurable = !0),
                    'value' in w && (w.writable = !0),
                    Object.defineProperty(i, w.key, w);
                }
              }
              return function (i, v, N) {
                return v && d(i.prototype, v), N && d(i, N), i;
              };
            })(),
            _ = function d(i, v, N) {
              i === null && (i = Function.prototype);
              var w = Object.getOwnPropertyDescriptor(i, v);
              if (w === void 0) {
                var A = Object.getPrototypeOf(i);
                return A === null ? void 0 : d(A, v, N);
              } else {
                if ('value' in w) return w.value;
                var S = w.get;
                return S === void 0 ? void 0 : S.call(N);
              }
            },
            E = n(35),
            m = r(E),
            p = n(5),
            c = r(p),
            o = n(9),
            t = r(o);
          function r(d) {
            return d && d.__esModule ? d : { default: d };
          }
          function f(d, i) {
            if (!(d instanceof i)) throw new TypeError('Cannot call a class as a function');
          }
          function u(d, i) {
            if (!d)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == 'object' || typeof i == 'function') ? i : d;
          }
          function s(d, i) {
            if (typeof i != 'function' && i !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof i
              );
            (d.prototype = Object.create(i && i.prototype, {
              constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 },
            })),
              i && (Object.setPrototypeOf ? Object.setPrototypeOf(d, i) : (d.__proto__ = i));
          }
          var a = (function (d) {
            s(i, d);
            function i() {
              return (
                f(this, i),
                u(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
              );
            }
            return (
              g(i, null, [
                {
                  key: 'create',
                  value: function (N) {
                    var w = _(i.__proto__ || Object.getPrototypeOf(i), 'create', this).call(
                      this,
                      N
                    );
                    return (
                      typeof N == 'string' &&
                        (window.katex.render(N, w, { throwOnError: !1, errorColor: '#f00' }),
                        w.setAttribute('data-value', N)),
                      w
                    );
                  },
                },
                {
                  key: 'value',
                  value: function (N) {
                    return N.getAttribute('data-value');
                  },
                },
              ]),
              i
            );
          })(m.default);
          (a.blotName = 'formula'), (a.className = 'ql-formula'), (a.tagName = 'SPAN');
          var l = (function (d) {
            s(i, d),
              g(i, null, [
                {
                  key: 'register',
                  value: function () {
                    c.default.register(a, !0);
                  },
                },
              ]);
            function i() {
              f(this, i);
              var v = u(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
              if (window.katex == null) throw new Error('Formula module requires KaTeX.');
              return v;
            }
            return i;
          })(t.default);
          (e.FormulaBlot = a), (e.default = l);
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = e.CodeToken = e.CodeBlock = void 0);
          var g = (function () {
              function N(w, A) {
                for (var S = 0; S < A.length; S++) {
                  var O = A[S];
                  (O.enumerable = O.enumerable || !1),
                    (O.configurable = !0),
                    'value' in O && (O.writable = !0),
                    Object.defineProperty(w, O.key, O);
                }
              }
              return function (w, A, S) {
                return A && N(w.prototype, A), S && N(w, S), w;
              };
            })(),
            _ = function N(w, A, S) {
              w === null && (w = Function.prototype);
              var O = Object.getOwnPropertyDescriptor(w, A);
              if (O === void 0) {
                var y = Object.getPrototypeOf(w);
                return y === null ? void 0 : N(y, A, S);
              } else {
                if ('value' in O) return O.value;
                var b = O.get;
                return b === void 0 ? void 0 : b.call(S);
              }
            },
            E = n(0),
            m = u(E),
            p = n(5),
            c = u(p),
            o = n(9),
            t = u(o),
            r = n(13),
            f = u(r);
          function u(N) {
            return N && N.__esModule ? N : { default: N };
          }
          function s(N, w) {
            if (!(N instanceof w)) throw new TypeError('Cannot call a class as a function');
          }
          function a(N, w) {
            if (!N)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return w && (typeof w == 'object' || typeof w == 'function') ? w : N;
          }
          function l(N, w) {
            if (typeof w != 'function' && w !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof w
              );
            (N.prototype = Object.create(w && w.prototype, {
              constructor: { value: N, enumerable: !1, writable: !0, configurable: !0 },
            })),
              w && (Object.setPrototypeOf ? Object.setPrototypeOf(N, w) : (N.__proto__ = w));
          }
          var d = (function (N) {
            l(w, N);
            function w() {
              return (
                s(this, w),
                a(this, (w.__proto__ || Object.getPrototypeOf(w)).apply(this, arguments))
              );
            }
            return (
              g(w, [
                {
                  key: 'replaceWith',
                  value: function (S) {
                    (this.domNode.textContent = this.domNode.textContent),
                      this.attach(),
                      _(
                        w.prototype.__proto__ || Object.getPrototypeOf(w.prototype),
                        'replaceWith',
                        this
                      ).call(this, S);
                  },
                },
                {
                  key: 'highlight',
                  value: function (S) {
                    var O = this.domNode.textContent;
                    this.cachedText !== O &&
                      ((O.trim().length > 0 || this.cachedText == null) &&
                        ((this.domNode.innerHTML = S(O)), this.domNode.normalize(), this.attach()),
                      (this.cachedText = O));
                  },
                },
              ]),
              w
            );
          })(f.default);
          d.className = 'ql-syntax';
          var i = new m.default.Attributor.Class('token', 'hljs', {
              scope: m.default.Scope.INLINE,
            }),
            v = (function (N) {
              l(w, N),
                g(w, null, [
                  {
                    key: 'register',
                    value: function () {
                      c.default.register(i, !0), c.default.register(d, !0);
                    },
                  },
                ]);
              function w(A, S) {
                s(this, w);
                var O = a(this, (w.__proto__ || Object.getPrototypeOf(w)).call(this, A, S));
                if (typeof O.options.highlight != 'function')
                  throw new Error(
                    'Syntax module requires highlight.js. Please include the library on the page before Quill.'
                  );
                var y = null;
                return (
                  O.quill.on(c.default.events.SCROLL_OPTIMIZE, function () {
                    clearTimeout(y),
                      (y = setTimeout(function () {
                        O.highlight(), (y = null);
                      }, O.options.interval));
                  }),
                  O.highlight(),
                  O
                );
              }
              return (
                g(w, [
                  {
                    key: 'highlight',
                    value: function () {
                      var S = this;
                      if (!this.quill.selection.composing) {
                        this.quill.update(c.default.sources.USER);
                        var O = this.quill.getSelection();
                        this.quill.scroll.descendants(d).forEach(function (y) {
                          y.highlight(S.options.highlight);
                        }),
                          this.quill.update(c.default.sources.SILENT),
                          O != null && this.quill.setSelection(O, c.default.sources.SILENT);
                      }
                    },
                  },
                ]),
                w
              );
            })(t.default);
          (v.DEFAULTS = {
            highlight: (function () {
              return window.hljs == null
                ? null
                : function (N) {
                    var w = window.hljs.highlightAuto(N);
                    return w.value;
                  };
            })(),
            interval: 1e3,
          }),
            (e.CodeBlock = d),
            (e.CodeToken = i),
            (e.default = v);
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
        },
        function (h, e) {
          h.exports =
            '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
        },
        function (h, e, n) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = e.BubbleTooltip = void 0);
          var g = function w(A, S, O) {
              A === null && (A = Function.prototype);
              var y = Object.getOwnPropertyDescriptor(A, S);
              if (y === void 0) {
                var b = Object.getPrototypeOf(A);
                return b === null ? void 0 : w(b, S, O);
              } else {
                if ('value' in y) return y.value;
                var T = y.get;
                return T === void 0 ? void 0 : T.call(O);
              }
            },
            _ = (function () {
              function w(A, S) {
                for (var O = 0; O < S.length; O++) {
                  var y = S[O];
                  (y.enumerable = y.enumerable || !1),
                    (y.configurable = !0),
                    'value' in y && (y.writable = !0),
                    Object.defineProperty(A, y.key, y);
                }
              }
              return function (A, S, O) {
                return S && w(A.prototype, S), O && w(A, O), A;
              };
            })(),
            E = n(3),
            m = s(E),
            p = n(8),
            c = s(p),
            o = n(43),
            t = s(o),
            r = n(15),
            f = n(41),
            u = s(f);
          function s(w) {
            return w && w.__esModule ? w : { default: w };
          }
          function a(w, A) {
            if (!(w instanceof A)) throw new TypeError('Cannot call a class as a function');
          }
          function l(w, A) {
            if (!w)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return A && (typeof A == 'object' || typeof A == 'function') ? A : w;
          }
          function d(w, A) {
            if (typeof A != 'function' && A !== null)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof A
              );
            (w.prototype = Object.create(A && A.prototype, {
              constructor: { value: w, enumerable: !1, writable: !0, configurable: !0 },
            })),
              A && (Object.setPrototypeOf ? Object.setPrototypeOf(w, A) : (w.__proto__ = A));
          }
          var i = [
              ['bold', 'italic', 'link'],
              [{ header: 1 }, { header: 2 }, 'blockquote'],
            ],
            v = (function (w) {
              d(A, w);
              function A(S, O) {
                a(this, A),
                  O.modules.toolbar != null &&
                    O.modules.toolbar.container == null &&
                    (O.modules.toolbar.container = i);
                var y = l(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, S, O));
                return y.quill.container.classList.add('ql-bubble'), y;
              }
              return (
                _(A, [
                  {
                    key: 'extendToolbar',
                    value: function (O) {
                      (this.tooltip = new N(this.quill, this.options.bounds)),
                        this.tooltip.root.appendChild(O.container),
                        this.buildButtons(
                          [].slice.call(O.container.querySelectorAll('button')),
                          u.default
                        ),
                        this.buildPickers(
                          [].slice.call(O.container.querySelectorAll('select')),
                          u.default
                        );
                    },
                  },
                ]),
                A
              );
            })(t.default);
          v.DEFAULTS = (0, m.default)(!0, {}, t.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function (A) {
                    A ? this.quill.theme.tooltip.edit() : this.quill.format('link', !1);
                  },
                },
              },
            },
          });
          var N = (function (w) {
            d(A, w);
            function A(S, O) {
              a(this, A);
              var y = l(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, S, O));
              return (
                y.quill.on(c.default.events.EDITOR_CHANGE, function (b, T, x, R) {
                  if (b === c.default.events.SELECTION_CHANGE)
                    if (T != null && T.length > 0 && R === c.default.sources.USER) {
                      y.show(),
                        (y.root.style.left = '0px'),
                        (y.root.style.width = ''),
                        (y.root.style.width = y.root.offsetWidth + 'px');
                      var B = y.quill.getLines(T.index, T.length);
                      if (B.length === 1) y.position(y.quill.getBounds(T));
                      else {
                        var C = B[B.length - 1],
                          Z = y.quill.getIndex(C),
                          I = Math.min(C.length() - 1, T.index + T.length - Z),
                          j = y.quill.getBounds(new r.Range(Z, I));
                        y.position(j);
                      }
                    } else document.activeElement !== y.textbox && y.quill.hasFocus() && y.hide();
                }),
                y
              );
            }
            return (
              _(A, [
                {
                  key: 'listen',
                  value: function () {
                    var O = this;
                    g(
                      A.prototype.__proto__ || Object.getPrototypeOf(A.prototype),
                      'listen',
                      this
                    ).call(this),
                      this.root.querySelector('.ql-close').addEventListener('click', function () {
                        O.root.classList.remove('ql-editing');
                      }),
                      this.quill.on(c.default.events.SCROLL_OPTIMIZE, function () {
                        setTimeout(function () {
                          if (!O.root.classList.contains('ql-hidden')) {
                            var y = O.quill.getSelection();
                            y != null && O.position(O.quill.getBounds(y));
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
                  value: function (O) {
                    var y = g(
                        A.prototype.__proto__ || Object.getPrototypeOf(A.prototype),
                        'position',
                        this
                      ).call(this, O),
                      b = this.root.querySelector('.ql-tooltip-arrow');
                    if (((b.style.marginLeft = ''), y === 0)) return y;
                    b.style.marginLeft = -1 * y - b.offsetWidth / 2 + 'px';
                  },
                },
              ]),
              A
            );
          })(o.BaseTooltip);
          (N.TEMPLATE = [
            '<span class="ql-tooltip-arrow"></span>',
            '<div class="ql-tooltip-editor">',
            '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
            '<a class="ql-close"></a>',
            '</div>',
          ].join('')),
            (e.BubbleTooltip = N),
            (e.default = v);
        },
        function (h, e, n) {
          h.exports = n(63);
        },
      ]).default;
    });
  });
  var yt = Dt(Me(), 1);
  function gn() {
    let e = [
        'M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z',
        'M325.8 152.3c1.3 4.6 5.5 7.7 10.2 7.7s8.9-3.1 10.2-7.7L360 104l48.3-13.8c4.6-1.3 7.7-5.5 7.7-10.2s-3.1-8.9-7.7-10.2L360 56 346.2 7.7C344.9 3.1 340.7 0 336 0s-8.9 3.1-10.2 7.7L312 56 263.7 69.8c-4.6 1.3-7.7 5.5-7.7 10.2s3.1 8.9 7.7 10.2L312 104l13.8 48.3zm-112.4 5.1c-8.8-17.9-34.3-17.9-43.1 0l-46.3 94L20.5 266.5C.9 269.3-7 293.5 7.2 307.4l74.9 73.2L64.5 483.9c-3.4 19.6 17.2 34.6 34.8 25.3l92.6-48.8 92.6 48.8c17.6 9.3 38.2-5.7 34.8-25.3L301.6 380.6l74.9-73.2c14.2-13.9 6.4-38.1-13.3-40.9L259.7 251.4l-46.3-94zm215.4 85.8l11 38.6c1 3.6 4.4 6.2 8.2 6.2s7.1-2.5 8.2-6.2l11-38.6 38.6-11c3.6-1 6.2-4.4 6.2-8.2s-2.5-7.1-6.2-8.2l-38.6-11-11-38.6c-1-3.6-4.4-6.2-8.2-6.2s-7.1 2.5-8.2 6.2l-11 38.6-38.6 11c-3.6 1-6.2 4.4-6.2 8.2s2.5 7.1 6.2 8.2l38.6 11z',
        'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z',
        'M320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L320 0z',
      ].map((p) => {
        let c = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        c.setAttribute('d', p);
        let o = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        return (
          o.setAttribute('viewBox', '0 0 512 512'),
          o.setAttribute('height', '20'),
          o.setAttribute('width', '20'),
          o.appendChild(c),
          o
        );
      }),
      n = 0;
    function g(p) {
      let c = [];
      if (p.nodeType === 3) {
        let o = p.nodeValue || '',
          t = /##(.*?)##/g,
          r,
          f = 0;
        for (; (r = t.exec(o)) !== null; ) {
          c.push(document.createTextNode(o.substring(f, r.index)));
          let u = r[1],
            s = _(u, n++);
          c.push(s), (f = t.lastIndex);
        }
        f < o.length && c.push(document.createTextNode(o.substring(f)));
      } else if (p.nodeType === 1) {
        let o = p.cloneNode(!1);
        Array.from(p.childNodes).forEach((t) => {
          g(t).forEach((r) => o.appendChild(r));
        }),
          c.push(o);
      }
      return c;
    }
    function _(p, c) {
      var s;
      let o = document.createElement('input');
      (o.className = 'Sermon-Text-Input'),
        (o.id = 'input-' + c),
        o.setAttribute('type', 'text'),
        o.setAttribute('maxlength', p.length.toString()),
        o.style.setProperty('--size', p.length.toString());
      let t =
          (s = document.querySelector('[sermon-function="Fill-In"]')) == null
            ? void 0
            : s.getAttribute('sermon-data'),
        r = t ? t + '__InputValues' : '',
        u = JSON.parse(localStorage.getItem(r) || '[]')[c];
      return (
        u && ((o.value = u), u === p && ((o.disabled = !0), o.classList.add('correct'))),
        o.addEventListener('keydown', function (a) {
          if (a.key === 'Tab') return;
          let l = p.charAt(this.value.length);
          a.key.toLowerCase() !== l.toLowerCase()
            ? (a.preventDefault(),
              this.classList.add('shake'),
              setTimeout(() => {
                this.classList.remove('shake');
              }, 500))
            : (a.preventDefault(), (this.value += l));
        }),
        o.addEventListener('keyup', function () {
          if (this.value === p) {
            (this.disabled = !0),
              this.classList.add('correct'),
              this.classList.add('dance'),
              yt.default.confetti(this, {
                count: yt.default.variation.range(20, 30),
                size: yt.default.variation.range(0.5, 0.9),
                shapes: e,
              }),
              setTimeout(() => {
                this.classList.remove('dance');
              }, 1e3);
            let l = m.indexOf(this);
            m[l + 1] && m[l + 1].focus();
          }
          let a = JSON.parse(localStorage.getItem(r) || '[]');
          (a[c] = this.value), localStorage.setItem(r, JSON.stringify(a));
        }),
        o
      );
    }
    let E = document.querySelector('[sermon-function="Fill-In"]'),
      m = [];
    E &&
      Array.from(E.querySelectorAll('.text-rich-text')[0].childNodes).forEach((c) => {
        g(c).forEach((t) => {
          t instanceof HTMLInputElement && m.push(t),
            E.querySelectorAll('.text-rich-text')[0].insertBefore(t, c);
        }),
          E.querySelectorAll('.text-rich-text')[0].removeChild(c);
      });
  }
  var _n = Dt(bn(), 1);
  function On() {
    let h = document.querySelector('[sermon-function="notes-editor"]'),
      e = document.querySelector('[sermon-editor="toolbar"]'),
      n = h.getAttribute('sermon-data'),
      g = new _n.default(h, {
        modules: {
          toolbar: { container: e },
          history: { delay: 2e3, maxStack: 500, userOnly: !0 },
        },
        placeholder: 'Sermon Notes...',
      }),
      _ = `${n}__Notes`,
      E = h.querySelector('.ql-editor'),
      m = localStorage.getItem(_);
    m && (E.innerHTML = m),
      new MutationObserver(function () {
        localStorage.setItem(_, E.innerHTML);
      }).observe(E, { attributes: !0, childList: !0, characterData: !0, subtree: !0 }),
      window.addEventListener('storage', function (c) {
        c.key === _ && (E.innerHTML = c.newValue);
      });
  }
  window.Webflow = window.Webflow || [];
  window.Webflow.push(() => {
    gn(), On();
  });
})();
