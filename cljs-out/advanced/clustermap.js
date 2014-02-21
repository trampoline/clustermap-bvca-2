;(function(){
var h, aa = aa || {}, ba = this;
function ca(a, b) {
  var c = a.split("."), d = ba;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
function da(a) {
  a = a.split(".");
  for (var b = ba, c;c = a.shift();) {
    if (null != b[c]) {
      b = b[c];
    } else {
      return null;
    }
  }
  return b;
}
function ea() {
}
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function fa(a) {
  var b = m(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function ga(a) {
  return "string" == typeof a;
}
function ia(a) {
  return "function" == m(a);
}
function ja(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function ka(a) {
  return a[la] || (a[la] = ++ma);
}
var la = "closure_uid_" + (1E9 * Math.random() >>> 0), ma = 0;
function na(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function oa(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function pa(a, b, c) {
  pa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
  return pa.apply(null, arguments);
}
function qa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b);
  };
}
var ra = Date.now || function() {
  return+new Date;
};
function sa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Ab = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
}
;function ta(a, b) {
  for (var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d);
  }
  return a;
}
function ua(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
function va(a) {
  if (!xa.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(ya, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(za, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(Aa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ba, "\x26quot;"));
  return a;
}
var ya = /&/g, za = /</g, Aa = />/g, Ba = /\"/g, xa = /[&<>\"]/;
function Ca(a) {
  for (var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
}
;function Da(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, Da) : this.stack = Error().stack || "";
  a && (this.message = String(a));
}
sa(Da, Error);
Da.prototype.name = "CustomError";
function Ea(a, b) {
  b.unshift(a);
  Da.call(this, ta.apply(null, b));
  b.shift();
}
sa(Ea, Da);
Ea.prototype.name = "AssertionError";
function Fa(a, b) {
  throw new Ea("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Ga = Array.prototype, Ha = Ga.indexOf ? function(a, b, c) {
  return Ga.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ga(a)) {
    return ga(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Ia = Ga.forEach ? function(a, b, c) {
  Ga.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ga(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, Ja = Ga.filter ? function(a, b, c) {
  return Ga.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, g = ga(a) ? a.split("") : a, k = 0;k < d;k++) {
    if (k in g) {
      var l = g[k];
      b.call(c, l, k, a) && (e[f++] = l);
    }
  }
  return e;
};
function Ka(a, b) {
  return 0 <= Ha(a, b);
}
function La(a, b) {
  var c = Ha(a, b);
  0 <= c && Ga.splice.call(a, c, 1);
}
function Ma(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function Na(a, b, c) {
  return 2 >= arguments.length ? Ga.slice.call(a, b) : Ga.slice.call(a, b, c);
}
function Oa(a, b) {
  Ga.sort.call(a, b || Pa);
}
function Qa(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || Pa;
  Oa(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function Pa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function Ra(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function Sa(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function Ta(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
var Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Va(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Ua.length;f++) {
      c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function Wa(a, b) {
  null != a && this.append.apply(this, arguments);
}
Wa.prototype.kb = "";
Wa.prototype.set = function(a) {
  this.kb = "" + a;
};
Wa.prototype.append = function(a, b, c) {
  this.kb += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.kb += arguments[d];
    }
  }
  return this;
};
Wa.prototype.toString = function() {
  return this.kb;
};
var Xa;
function Ya() {
  throw Error("No *print-fn* fn set for evaluation environment");
}
var Za = null;
function $a() {
  return new n(null, 5, [ab, !0, bb, !0, db, !1, eb, !1, fb, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function hb(a) {
  return null == a;
}
function ib(a) {
  return q(a) ? !1 : !0;
}
function r(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function jb(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = jb(b), c = q(q(c) ? c.R : c) ? c.Q : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function lb(a) {
  var b = a.Q;
  return q(b) ? b : "" + w(a);
}
function mb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function nb(a) {
  return Array.prototype.slice.call(arguments);
}
var pb = function() {
  function a(a, b) {
    return ob.c ? ob.c(function(a, b) {
      a.push(b);
      return a;
    }, [], b) : ob.call(null, function(a, b) {
      a.push(b);
      return a;
    }, [], b);
  }
  function b(a) {
    return c.a(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, 0, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), qb = {}, rb = {};
function sb(a) {
  if (a ? a.ka : a) {
    return a.ka(a);
  }
  var b;
  b = sb[m(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw v("ICloneable.-clone", a);
  }
  return b.call(null, a);
}
var tb = {};
function ub(a) {
  if (a ? a.H : a) {
    return a.H(a);
  }
  var b;
  b = ub[m(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a);
}
function vb(a) {
  if (a ? a.$ : a) {
    return a.$(a);
  }
  var b;
  b = vb[m(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw v("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var wb = {};
function xb(a, b) {
  if (a ? a.P : a) {
    return a.P(a, b);
  }
  var c;
  c = xb[m(null == a ? null : a)];
  if (!c && (c = xb._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var yb = {}, x = function() {
  function a(a, b, c) {
    if (a ? a.qa : a) {
      return a.qa(a, b, c);
    }
    var g;
    g = x[m(null == a ? null : a)];
    if (!g && (g = x._, !g)) {
      throw v("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.w : a) {
      return a.w(a, b);
    }
    var c;
    c = x[m(null == a ? null : a)];
    if (!c && (c = x._, !c)) {
      throw v("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), zb = {};
function Ab(a) {
  if (a ? a.X : a) {
    return a.X(a);
  }
  var b;
  b = Ab[m(null == a ? null : a)];
  if (!b && (b = Ab._, !b)) {
    throw v("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Bb(a) {
  if (a ? a.ha : a) {
    return a.ha(a);
  }
  var b;
  b = Bb[m(null == a ? null : a)];
  if (!b && (b = Bb._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Cb = {}, Db = {}, Eb = function() {
  function a(a, b, c) {
    if (a ? a.J : a) {
      return a.J(a, b, c);
    }
    var g;
    g = Eb[m(null == a ? null : a)];
    if (!g && (g = Eb._, !g)) {
      throw v("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.I : a) {
      return a.I(a, b);
    }
    var c;
    c = Eb[m(null == a ? null : a)];
    if (!c && (c = Eb._, !c)) {
      throw v("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Fb(a, b) {
  if (a ? a.Xb : a) {
    return a.Xb(a, b);
  }
  var c;
  c = Fb[m(null == a ? null : a)];
  if (!c && (c = Fb._, !c)) {
    throw v("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Gb(a, b, c) {
  if (a ? a.lb : a) {
    return a.lb(a, b, c);
  }
  var d;
  d = Gb[m(null == a ? null : a)];
  if (!d && (d = Gb._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Hb = {};
function Ib(a, b) {
  if (a ? a.uc : a) {
    return a.uc(a, b);
  }
  var c;
  c = Ib[m(null == a ? null : a)];
  if (!c && (c = Ib._, !c)) {
    throw v("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Jb = {};
function Kb(a) {
  if (a ? a.vd : a) {
    return a.vd();
  }
  var b;
  b = Kb[m(null == a ? null : a)];
  if (!b && (b = Kb._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Lb(a) {
  if (a ? a.wd : a) {
    return a.wd();
  }
  var b;
  b = Lb[m(null == a ? null : a)];
  if (!b && (b = Lb._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Nb = {};
function Ob(a, b) {
  if (a ? a.ie : a) {
    return a.ie(0, b);
  }
  var c;
  c = Ob[m(null == a ? null : a)];
  if (!c && (c = Ob._, !c)) {
    throw v("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Pb(a) {
  if (a ? a.nb : a) {
    return a.nb(a);
  }
  var b;
  b = Pb[m(null == a ? null : a)];
  if (!b && (b = Pb._, !b)) {
    throw v("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Qb(a) {
  if (a ? a.ob : a) {
    return a.ob(a);
  }
  var b;
  b = Qb[m(null == a ? null : a)];
  if (!b && (b = Qb._, !b)) {
    throw v("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Rb = {};
function Sb(a, b, c) {
  if (a ? a.yd : a) {
    return a.yd(a, b, c);
  }
  var d;
  d = Sb[m(null == a ? null : a)];
  if (!d && (d = Sb._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Tb(a) {
  if (a ? a.Eb : a) {
    return a.Eb(a);
  }
  var b;
  b = Tb[m(null == a ? null : a)];
  if (!b && (b = Tb._, !b)) {
    throw v("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ub = {};
function Vb(a) {
  if (a ? a.s : a) {
    return a.s(a);
  }
  var b;
  b = Vb[m(null == a ? null : a)];
  if (!b && (b = Vb._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Wb = {};
function Xb(a, b) {
  if (a ? a.t : a) {
    return a.t(a, b);
  }
  var c;
  c = Xb[m(null == a ? null : a)];
  if (!c && (c = Xb._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Yb = {}, Zb = function() {
  function a(a, b, c) {
    if (a ? a.ga : a) {
      return a.ga(a, b, c);
    }
    var g;
    g = Zb[m(null == a ? null : a)];
    if (!g && (g = Zb._, !g)) {
      throw v("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.fa : a) {
      return a.fa(a, b);
    }
    var c;
    c = Zb[m(null == a ? null : a)];
    if (!c && (c = Zb._, !c)) {
      throw v("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function $b(a, b) {
  if (a ? a.D : a) {
    return a.D(a, b);
  }
  var c;
  c = $b[m(null == a ? null : a)];
  if (!c && (c = $b._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function ac(a) {
  if (a ? a.K : a) {
    return a.K(a);
  }
  var b;
  b = ac[m(null == a ? null : a)];
  if (!b && (b = ac._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a);
}
var bc = {};
function cc(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = cc[m(null == a ? null : a)];
  if (!b && (b = cc._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var dc = {}, ec = {}, fc = {};
function gc(a) {
  if (a ? a.xd : a) {
    return a.xd(a);
  }
  var b;
  b = gc[m(null == a ? null : a)];
  if (!b && (b = gc._, !b)) {
    throw v("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function hc(a, b) {
  if (a ? a.ne : a) {
    return a.ne(0, b);
  }
  var c;
  c = hc[m(null == a ? null : a)];
  if (!c && (c = hc._, !c)) {
    throw v("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var ic = {};
function jc(a, b, c) {
  if (a ? a.F : a) {
    return a.F(a, b, c);
  }
  var d;
  d = jc[m(null == a ? null : a)];
  if (!d && (d = jc._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function kc(a, b, c) {
  if (a ? a.le : a) {
    return a.le(0, b, c);
  }
  var d;
  d = kc[m(null == a ? null : a)];
  if (!d && (d = kc._, !d)) {
    throw v("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function lc(a, b, c) {
  if (a ? a.ke : a) {
    return a.ke(0, b, c);
  }
  var d;
  d = lc[m(null == a ? null : a)];
  if (!d && (d = lc._, !d)) {
    throw v("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function mc(a, b) {
  if (a ? a.me : a) {
    return a.me(0, b);
  }
  var c;
  c = mc[m(null == a ? null : a)];
  if (!c && (c = mc._, !c)) {
    throw v("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function nc(a) {
  if (a ? a.Fb : a) {
    return a.Fb(a);
  }
  var b;
  b = nc[m(null == a ? null : a)];
  if (!b && (b = nc._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function oc(a, b) {
  if (a ? a.pb : a) {
    return a.pb(a, b);
  }
  var c;
  c = oc[m(null == a ? null : a)];
  if (!c && (c = oc._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function pc(a) {
  if (a ? a.qb : a) {
    return a.qb(a);
  }
  var b;
  b = pc[m(null == a ? null : a)];
  if (!b && (b = pc._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function qc(a, b, c) {
  if (a ? a.Zb : a) {
    return a.Zb(a, b, c);
  }
  var d;
  d = qc[m(null == a ? null : a)];
  if (!d && (d = qc._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function rc(a, b, c) {
  if (a ? a.je : a) {
    return a.je(0, b, c);
  }
  var d;
  d = rc[m(null == a ? null : a)];
  if (!d && (d = rc._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function sc(a) {
  if (a ? a.ge : a) {
    return a.ge();
  }
  var b;
  b = sc[m(null == a ? null : a)];
  if (!b && (b = sc._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function tc(a) {
  if (a ? a.ed : a) {
    return a.ed(a);
  }
  var b;
  b = tc[m(null == a ? null : a)];
  if (!b && (b = tc._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function uc(a) {
  if (a ? a.fd : a) {
    return a.fd(a);
  }
  var b;
  b = uc[m(null == a ? null : a)];
  if (!b && (b = uc._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function vc(a) {
  if (a ? a.dd : a) {
    return a.dd(a);
  }
  var b;
  b = vc[m(null == a ? null : a)];
  if (!b && (b = vc._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function wc(a) {
  this.gh = a;
  this.p = 0;
  this.g = 1073741824;
}
wc.prototype.ne = function(a, b) {
  return this.gh.append(b);
};
function xc(a) {
  var b = new Wa;
  a.F(null, new wc(b), $a());
  return "" + w(b);
}
function yc(a, b) {
  if (q(y.a ? y.a(a, b) : y.call(null, a, b))) {
    return 0;
  }
  var c = ib(a.ma);
  if (q(c ? b.ma : c)) {
    return-1;
  }
  if (q(a.ma)) {
    if (ib(b.ma)) {
      return 1;
    }
    c = zc.a ? zc.a(a.ma, b.ma) : zc.call(null, a.ma, b.ma);
    return 0 === c ? zc.a ? zc.a(a.name, b.name) : zc.call(null, a.name, b.name) : c;
  }
  return z ? zc.a ? zc.a(a.name, b.name) : zc.call(null, a.name, b.name) : null;
}
function Ac(a, b, c, d, e) {
  this.ma = a;
  this.name = b;
  this.$a = c;
  this.Wa = d;
  this.oa = e;
  this.g = 2154168321;
  this.p = 4096;
}
h = Ac.prototype;
h.F = function(a, b) {
  return hc(b, this.$a);
};
h.K = function() {
  var a = this.Wa;
  return null != a ? a : this.Wa = a = Bc.a ? Bc.a(Cc.b ? Cc.b(this.ma) : Cc.call(null, this.ma), Cc.b ? Cc.b(this.name) : Cc.call(null, this.name)) : Bc.call(null, Cc.b ? Cc.b(this.ma) : Cc.call(null, this.ma), Cc.b ? Cc.b(this.name) : Cc.call(null, this.name));
};
h.t = function(a, b) {
  return new Ac(this.ma, this.name, this.$a, this.Wa, b);
};
h.s = function() {
  return this.oa;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Eb.c(c, this, null);
      case 3:
        return Eb.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return Eb.c(a, this, null);
};
h.a = function(a, b) {
  return Eb.c(a, this, b);
};
h.D = function(a, b) {
  return b instanceof Ac ? this.$a === b.$a : !1;
};
h.pa = !0;
h.ka = function() {
  return new Ac(this.ma, this.name, this.$a, this.Wa, this.oa);
};
h.toString = function() {
  return this.$a;
};
var Dc = function() {
  function a(a, b) {
    var c = null != a ? [w(a), w("/"), w(b)].join("") : b;
    return new Ac(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof Ac ? a : c.a(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Ec(a) {
  return sb(a);
}
function A(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.mb)) {
    return a.G(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Fc(a, 0);
  }
  if (r(bc, a)) {
    return cc(a);
  }
  if (t) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null;
}
function B(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.Ib)) {
    return a.X(null);
  }
  a = A(a);
  return null == a ? null : Ab(a);
}
function C(a) {
  return null != a ? a && (a.g & 64 || a.Ib) ? a.ha(null) : (a = A(a)) ? Bb(a) : Gc : Gc;
}
function E(a) {
  return null == a ? null : a && (a.g & 128 || a.vc) ? a.ra(null) : A(C(a));
}
var y = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || $b(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (E(e)) {
            a = d, d = B(e), e = E(e);
          } else {
            return b.a(d, B(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = B(a);
      a = E(a);
      var d = B(a);
      a = C(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.b = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
tb["null"] = !0;
ub["null"] = function() {
  return 0;
};
Date.prototype.sf = !0;
Date.prototype.D = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
$b.number = function(a, b) {
  return a === b;
};
Ub["function"] = !0;
Vb["function"] = function() {
  return null;
};
qb["function"] = !0;
ac._ = function(a) {
  return ka(a);
};
function Hc(a) {
  return a + 1;
}
var Ic = function() {
  function a(a, b, c, d) {
    for (var l = ub(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, x.a(a, d)) : b.call(null, c, x.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = ub(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, x.a(a, l)) : b.call(null, c, x.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = ub(a);
    if (0 === c) {
      return b.q ? b.q() : b.call(null);
    }
    for (var d = x.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, x.a(a, l)) : b.call(null, d, x.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}(), Jc = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.q ? b.q() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}();
function Kc(a) {
  return a ? a.g & 2 || a.Yb ? !0 : a.g ? !1 : r(tb, a) : r(tb, a);
}
function Lc(a) {
  return a ? a.g & 16 || a.Hb ? !0 : a.g ? !1 : r(yb, a) : r(yb, a);
}
function Fc(a, b) {
  this.f = a;
  this.o = b;
  this.p = 0;
  this.g = 166199550;
}
h = Fc.prototype;
h.K = function() {
  return Nc.b ? Nc.b(this) : Nc.call(null, this);
};
h.ra = function() {
  return this.o + 1 < this.f.length ? new Fc(this.f, this.o + 1) : null;
};
h.P = function(a, b) {
  return G.a ? G.a(b, this) : G.call(null, b, this);
};
h.xd = function() {
  var a = ub(this);
  return 0 < a ? new Oc(this, a - 1, null) : null;
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Jc.i(this.f, b, this.f[this.o], this.o + 1);
};
h.ga = function(a, b, c) {
  return Jc.i(this.f, b, c, this.o);
};
h.G = function() {
  return this;
};
h.H = function() {
  return this.f.length - this.o;
};
h.X = function() {
  return this.f[this.o];
};
h.ha = function() {
  return this.o + 1 < this.f.length ? new Fc(this.f, this.o + 1) : Gc;
};
h.D = function(a, b) {
  return Pc.a ? Pc.a(this, b) : Pc.call(null, this, b);
};
h.pa = !0;
h.ka = function() {
  return new Fc(this.f, this.o);
};
h.w = function(a, b) {
  var c = b + this.o;
  return c < this.f.length ? this.f[c] : null;
};
h.qa = function(a, b, c) {
  a = b + this.o;
  return a < this.f.length ? this.f[a] : c;
};
h.$ = function() {
  return Gc;
};
var Qc = function() {
  function a(a, b) {
    return b < a.length ? new Fc(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), F = function() {
  function a(a, b) {
    return Qc.a(a, b);
  }
  function b(a) {
    return Qc.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Oc(a, b, c) {
  this.rc = a;
  this.o = b;
  this.j = c;
  this.p = 0;
  this.g = 32374862;
}
h = Oc.prototype;
h.K = function() {
  return Nc.b ? Nc.b(this) : Nc.call(null, this);
};
h.P = function(a, b) {
  return G.a ? G.a(b, this) : G.call(null, b, this);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Rc.a ? Rc.a(b, this) : Rc.call(null, b, this);
};
h.ga = function(a, b, c) {
  return Rc.c ? Rc.c(b, c, this) : Rc.call(null, b, c, this);
};
h.G = function() {
  return this;
};
h.H = function() {
  return this.o + 1;
};
h.X = function() {
  return x.a(this.rc, this.o);
};
h.ha = function() {
  return 0 < this.o ? new Oc(this.rc, this.o - 1, null) : null;
};
h.D = function(a, b) {
  return Pc.a ? Pc.a(this, b) : Pc.call(null, this, b);
};
h.t = function(a, b) {
  return new Oc(this.rc, this.o, b);
};
h.pa = !0;
h.ka = function() {
  return new Oc(this.rc, this.o, this.j);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return Sc.a ? Sc.a(Gc, this.j) : Sc.call(null, Gc, this.j);
};
function Tc(a) {
  return B(E(a));
}
function Uc(a) {
  for (;;) {
    var b = E(a);
    if (null != b) {
      a = b;
    } else {
      return B(a);
    }
  }
}
$b._ = function(a, b) {
  return a === b;
};
var Vc = function() {
  function a(a, b) {
    return null != a ? xb(a, b) : xb(Gc, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (q(e)) {
          a = b.a(a, d), d = B(e), e = E(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = B(a);
      a = E(a);
      var d = B(a);
      a = C(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function H(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.Yb)) {
      a = a.H(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (r(tb, a)) {
            a = ub(a);
          } else {
            if (t) {
              a: {
                a = A(a);
                for (var b = 0;;) {
                  if (Kc(a)) {
                    a = b + ub(a);
                    break a;
                  }
                  a = E(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var Wc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return A(a) ? B(a) : c;
      }
      if (Lc(a)) {
        return x.c(a, b, c);
      }
      if (A(a)) {
        a = E(a), b -= 1;
      } else {
        return t ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (A(a)) {
          return B(a);
        }
        throw Error("Index out of bounds");
      }
      if (Lc(a)) {
        return x.a(a, b);
      }
      if (A(a)) {
        var c = E(a), g = b - 1;
        a = c;
        b = g;
      } else {
        if (t) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), I = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.g & 16 || a.Hb)) {
        return a.qa(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (r(yb, a)) {
        return x.a(a, b);
      }
      if (t) {
        if (a ? a.g & 64 || a.Ib || (a.g ? 0 : r(zb, a)) : r(zb, a)) {
          return Wc.c(a, b, c);
        }
        throw Error([w("nth not supported on this type "), w(lb(jb(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.g & 16 || a.Hb)) {
      return a.w(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (r(yb, a)) {
      return x.a(a, b);
    }
    if (t) {
      if (a ? a.g & 64 || a.Ib || (a.g ? 0 : r(zb, a)) : r(zb, a)) {
        return Wc.a(a, b);
      }
      throw Error([w("nth not supported on this type "), w(lb(jb(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), K = function() {
  function a(a, b, c) {
    return null != a ? a && (a.g & 256 || a.ud) ? a.J(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : r(Db, a) ? Eb.c(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.g & 256 || a.ud) ? a.I(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : r(Db, a) ? Eb.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Yc = function() {
  function a(a, b, c) {
    return null != a ? Gb(a, b, c) : Xc.a ? Xc.a([b], [c]) : Xc.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = F(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), q(l)) {
          d = B(l), e = Tc(l), l = E(E(l));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.h = function(a) {
      var b = B(a);
      a = E(a);
      var d = B(a);
      a = E(a);
      var l = B(a);
      a = C(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, F(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 3;
  b.h = c.h;
  b.c = a;
  b.e = c.e;
  return b;
}(), Zc = function() {
  function a(a, b) {
    return null == a ? null : Ib(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (q(e)) {
          d = B(e), e = E(e);
        } else {
          return a;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = B(a);
      a = E(a);
      var d = B(a);
      a = C(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function $c(a) {
  var b = ia(a);
  return b ? b : a ? q(q(null) ? null : a.of) ? !0 : a.za ? !1 : r(qb, a) : r(qb, a);
}
var Sc = function ad(b, c) {
  return $c(b) && !(b ? b.g & 262144 || b.xf || (b.g ? 0 : r(Wb, b)) : r(Wb, b)) ? ad(function() {
    "undefined" === typeof Xa && (Xa = function(b, c, f, g) {
      this.j = b;
      this.ic = c;
      this.uh = f;
      this.vg = g;
      this.p = 0;
      this.g = 393217;
    }, Xa.R = !0, Xa.Q = "cljs.core/t23420", Xa.V = function(b, c) {
      return hc(c, "cljs.core/t23420");
    }, Xa.prototype.call = function() {
      function b(d, g) {
        d = this;
        var k = null;
        1 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return N.a ? N.a(b.ic, d) : N.call(null, b.ic, d);
      }
      b.l = 1;
      b.h = function(b) {
        var d = B(b);
        b = C(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), Xa.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(mb(c)));
    }, Xa.prototype.a = function() {
      function b(d) {
        var g = null;
        0 < arguments.length && (g = F(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, g);
      }
      function c(b) {
        return N.a ? N.a(self__.ic, b) : N.call(null, self__.ic, b);
      }
      b.l = 0;
      b.h = function(b) {
        b = A(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), Xa.prototype.of = !0, Xa.prototype.s = function() {
      return this.vg;
    }, Xa.prototype.t = function(b, c) {
      return new Xa(this.j, this.ic, this.uh, c);
    });
    return new Xa(c, b, ad, null);
  }(), c) : null == b ? null : Xb(b, c);
};
function bd(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.uf || (a.g ? 0 : r(Ub, a)) : r(Ub, a) : b) ? Vb(a) : null;
}
var cd = function() {
  function a(a, b) {
    return null == a ? null : Ob(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (q(e)) {
          d = B(e), e = E(e);
        } else {
          return a;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = B(a);
      a = E(a);
      var d = B(a);
      a = C(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}(), dd = {}, ed = 0;
function Cc(a) {
  if (a && (a.g & 4194304 || a.fi)) {
    a = a.K(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < ed && (dd = {}, ed = 0);
            var b = dd[a];
            "number" !== typeof b && (b = Ca(a), dd[a] = b, ed += 1);
            a = b;
          } else {
            a = null == a ? 0 : t ? ac(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function fd(a) {
  return null == a || ib(A(a));
}
function gd(a) {
  return null == a ? !1 : a ? a.g & 8 || a.bi ? !0 : a.g ? !1 : r(wb, a) : r(wb, a);
}
function hd(a) {
  return a ? a.g & 16777216 || a.wf ? !0 : a.g ? !1 : r(dc, a) : r(dc, a);
}
function O(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.hi ? !0 : a.g ? !1 : r(Hb, a) : r(Hb, a);
}
function id(a) {
  return a ? a.g & 16384 || a.ki ? !0 : a.g ? !1 : r(Rb, a) : r(Rb, a);
}
function jd(a) {
  return a ? a.p & 512 || a.ai ? !0 : !1 : !1;
}
function kd(a) {
  var b = [];
  Ra(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function ld(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var md = {};
function nd(a) {
  return!0 === a;
}
function P(a) {
  return null == a ? !1 : a ? a.g & 64 || a.Ib ? !0 : a.g ? !1 : r(zb, a) : r(zb, a);
}
function od(a) {
  return q(a) ? !0 : !1;
}
function pd(a, b) {
  return K.c(a, b, md) === md ? !1 : !0;
}
function zc(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (jb(a) === jb(b)) {
    return a && (a.p & 2048 || a.sc) ? a.tc(null, b) : Pa(a, b);
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var qd = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = zc(I.a(a, g), I.a(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = H(a), g = H(b);
    return f < g ? -1 : f > g ? 1 : t ? c.i(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.i = a;
  return c;
}();
function rd(a) {
  return y.a(a, zc) ? zc : function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : q(d) ? -1 : q(a.a ? a.a(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var td = function() {
  function a(a, b) {
    if (A(b)) {
      var c = sd.b ? sd.b(b) : sd.call(null, b);
      Qa(c, rd(a));
      return A(c);
    }
    return Gc;
  }
  function b(a) {
    return c.a(zc, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Rc = function() {
  function a(a, b, c) {
    for (c = A(c);;) {
      if (c) {
        b = a.a ? a.a(b, B(c)) : a.call(null, b, B(c)), c = E(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = A(b);
    return c ? ob.c ? ob.c(a, B(c), E(c)) : ob.call(null, a, B(c), E(c)) : a.q ? a.q() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), ob = function() {
  function a(a, b, c) {
    return c && (c.g & 524288 || c.he) ? c.ga(null, a, b) : c instanceof Array ? Jc.c(c, a, b) : "string" === typeof c ? Jc.c(c, a, b) : r(Yb, c) ? Zb.c(c, a, b) : t ? Rc.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.g & 524288 || b.he) ? b.fa(null, a) : b instanceof Array ? Jc.a(b, a) : "string" === typeof b ? Jc.a(b, a) : r(Yb, b) ? Zb.a(b, a) : t ? Rc.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function ud(a, b) {
  return(a % b + b) % b;
}
function vd(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.b ? Math.floor.b((a - a % 2) / 2) : Math.floor.call(null, (a - a % 2) / 2) : Math.ceil.b ? Math.ceil.b((a - a % 2) / 2) : Math.ceil.call(null, (a - a % 2) / 2);
}
function wd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var xd = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var k = null;
      2 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      for (;;) {
        if (a.a(b, c)) {
          if (E(d)) {
            b = c, c = B(d), d = E(d);
          } else {
            return a.a(c, B(d));
          }
        } else {
          return!1;
        }
      }
    }
    b.l = 2;
    b.h = function(a) {
      var b = B(a);
      a = E(a);
      var c = B(a);
      a = C(a);
      return d(b, c, a);
    };
    b.e = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return $b(a, d);
      default:
        return b.e(a, d, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.h = b.h;
  a.b = function() {
    return!0;
  };
  a.a = function(a, b) {
    return $b(a, b);
  };
  a.e = b.e;
  return a;
}();
function yd(a) {
  var b = 1;
  for (a = A(a);;) {
    if (a && 0 < b) {
      b -= 1, a = E(a);
    } else {
      return a;
    }
  }
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new Wa(b.b(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.b(B(l))), l = E(l);
        } else {
          return e.toString();
        }
      }
    }
    a.l = 1;
    a.h = function(a) {
      var b = B(a);
      a = C(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, F(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.h = c.h;
  b.q = function() {
    return "";
  };
  b.b = a;
  b.e = c.e;
  return b;
}(), zd = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return a.substring(c);
  };
  a.c = function(a, c, d) {
    return a.substring(c, d);
  };
  return a;
}();
function Pc(a, b) {
  return od(hd(b) ? function() {
    for (var c = A(a), d = A(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (y.a(B(c), B(d))) {
        c = E(c), d = E(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function Bc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Nc(a) {
  if (A(a)) {
    var b = Cc(B(a));
    for (a = E(a);;) {
      if (null == a) {
        return b;
      }
      b = Bc(b, Cc(B(a)));
      a = E(a);
    }
  } else {
    return 0;
  }
}
function Ad(a) {
  var b = 0;
  for (a = A(a);;) {
    if (a) {
      var c = B(a), b = (b + (Cc(Bd.b ? Bd.b(c) : Bd.call(null, c)) ^ Cc(Cd.b ? Cd.b(c) : Cd.call(null, c)))) % 4503599627370496;
      a = E(a);
    } else {
      return b;
    }
  }
}
function Dd(a, b, c, d, e) {
  this.j = a;
  this.cb = b;
  this.Ta = c;
  this.count = d;
  this.n = e;
  this.p = 0;
  this.g = 65937646;
}
h = Dd.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.ra = function() {
  return 1 === this.count ? null : this.Ta;
};
h.P = function(a, b) {
  return new Dd(this.j, b, this, this.count + 1, null);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.H = function() {
  return this.count;
};
h.nb = function() {
  return this.cb;
};
h.ob = function() {
  return Bb(this);
};
h.X = function() {
  return this.cb;
};
h.ha = function() {
  return 1 === this.count ? Gc : this.Ta;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Dd(b, this.cb, this.Ta, this.count, this.n);
};
h.pa = !0;
h.ka = function() {
  return new Dd(this.j, this.cb, this.Ta, this.count, this.n);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return Gc;
};
function Ed(a) {
  this.j = a;
  this.p = 0;
  this.g = 65937614;
}
h = Ed.prototype;
h.K = function() {
  return 0;
};
h.ra = function() {
  return null;
};
h.P = function(a, b) {
  return new Dd(this.j, b, null, 1, null);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return null;
};
h.H = function() {
  return 0;
};
h.nb = function() {
  return null;
};
h.ob = function() {
  throw Error("Can't pop empty list");
};
h.X = function() {
  return null;
};
h.ha = function() {
  return Gc;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Ed(b);
};
h.pa = !0;
h.ka = function() {
  return new Ed(this.j);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return this;
};
var Gc = new Ed(null);
function Fd(a) {
  return(a ? a.g & 134217728 || a.ii || (a.g ? 0 : r(fc, a)) : r(fc, a)) ? gc(a) : ob.c(Vc, Gc, a);
}
var Gd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Fc && 0 === a.o) {
      b = a.f;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.X(null)), a = a.ra(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Gc;;) {
      if (0 < a) {
        var f = a - 1, e = e.P(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Hd(a, b, c, d) {
  this.j = a;
  this.cb = b;
  this.Ta = c;
  this.n = d;
  this.p = 0;
  this.g = 65929452;
}
h = Hd.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.ra = function() {
  return null == this.Ta ? null : A(this.Ta);
};
h.P = function(a, b) {
  return new Hd(null, b, this, this.n);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.X = function() {
  return this.cb;
};
h.ha = function() {
  return null == this.Ta ? Gc : this.Ta;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Hd(b, this.cb, this.Ta, this.n);
};
h.pa = !0;
h.ka = function() {
  return new Hd(this.j, this.cb, this.Ta, this.n);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return Sc(Gc, this.j);
};
function G(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Ib)) ? new Hd(null, a, b, null) : new Hd(null, a, A(b), null);
}
function Q(a, b, c, d) {
  this.ma = a;
  this.name = b;
  this.Za = c;
  this.Wa = d;
  this.g = 2153775105;
  this.p = 4096;
}
h = Q.prototype;
h.F = function(a, b) {
  return hc(b, [w(":"), w(this.Za)].join(""));
};
h.K = function() {
  null == this.Wa && (this.Wa = Bc(Cc(this.ma), Cc(this.name)) + 2654435769);
  return this.Wa;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return K.a(c, this);
      case 3:
        return K.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return K.a(a, this);
};
h.a = function(a, b) {
  return K.c(a, this, b);
};
h.D = function(a, b) {
  return b instanceof Q ? this.Za === b.Za : !1;
};
h.pa = !0;
h.ka = function() {
  return new Q(this.ma, this.name, this.Za, this.Wa);
};
h.toString = function() {
  return[w(":"), w(this.Za)].join("");
};
function Id(a, b) {
  return a === b ? !0 : a instanceof Q && b instanceof Q ? a.Za === b.Za : !1;
}
var Kd = function() {
  function a(a, b) {
    return new Q(a, b, [w(q(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof Q) {
      return a;
    }
    if (a instanceof Ac) {
      var b;
      if (a && (a.p & 4096 || a.vf)) {
        b = a.ma;
      } else {
        throw Error([w("Doesn't support namespace: "), w(a)].join(""));
      }
      return new Q(b, Jd.b ? Jd.b(a) : Jd.call(null, a), a.$a, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new Q(b[0], b[1], a, null) : new Q(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Ld(a, b, c, d) {
  this.j = a;
  this.Ob = b;
  this.L = c;
  this.n = d;
  this.p = 0;
  this.g = 32374988;
}
h = Ld.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.ra = function() {
  cc(this);
  return null == this.L ? null : E(this.L);
};
h.P = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
function Nd(a) {
  null != a.Ob && (a.L = a.Ob.q ? a.Ob.q() : a.Ob.call(null), a.Ob = null);
  return a.L;
}
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  Nd(this);
  if (null == this.L) {
    return null;
  }
  for (var a = this.L;;) {
    if (a instanceof Ld) {
      a = Nd(a);
    } else {
      return this.L = a, A(this.L);
    }
  }
};
h.X = function() {
  cc(this);
  return null == this.L ? null : B(this.L);
};
h.ha = function() {
  cc(this);
  return null != this.L ? C(this.L) : Gc;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Ld(b, this.Ob, this.L, this.n);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return Sc(Gc, this.j);
};
function Od(a, b) {
  this.ca = a;
  this.end = b;
  this.p = 0;
  this.g = 2;
}
Od.prototype.H = function() {
  return this.end;
};
Od.prototype.add = function(a) {
  this.ca[this.end] = a;
  return this.end += 1;
};
Od.prototype.Z = function() {
  var a = new Pd(this.ca, 0, this.end);
  this.ca = null;
  return a;
};
function Qd(a) {
  return new Od(Array(a), 0);
}
function Pd(a, b, c) {
  this.f = a;
  this.W = b;
  this.end = c;
  this.p = 0;
  this.g = 524306;
}
h = Pd.prototype;
h.fa = function(a, b) {
  return Jc.i(this.f, b, this.f[this.W], this.W + 1);
};
h.ga = function(a, b, c) {
  return Jc.i(this.f, b, c, this.W);
};
h.ge = function() {
  if (this.W === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Pd(this.f, this.W + 1, this.end);
};
h.w = function(a, b) {
  return this.f[this.W + b];
};
h.qa = function(a, b, c) {
  return 0 <= b && b < this.end - this.W ? this.f[this.W + b] : c;
};
h.H = function() {
  return this.end - this.W;
};
var Rd = function() {
  function a(a, b, c) {
    return new Pd(a, b, c);
  }
  function b(a, b) {
    return new Pd(a, b, a.length);
  }
  function c(a) {
    return new Pd(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d;
}();
function Sd(a, b, c, d) {
  this.Z = a;
  this.Ua = b;
  this.j = c;
  this.n = d;
  this.g = 31850732;
  this.p = 1536;
}
h = Sd.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.ra = function() {
  if (1 < ub(this.Z)) {
    return new Sd(sc(this.Z), this.Ua, this.j, null);
  }
  var a = cc(this.Ua);
  return null == a ? null : a;
};
h.P = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.G = function() {
  return this;
};
h.X = function() {
  return x.a(this.Z, 0);
};
h.ha = function() {
  return 1 < ub(this.Z) ? new Sd(sc(this.Z), this.Ua, this.j, null) : null == this.Ua ? Gc : this.Ua;
};
h.dd = function() {
  return null == this.Ua ? null : this.Ua;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Sd(this.Z, this.Ua, b, this.n);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return Sc(Gc, this.j);
};
h.ed = function() {
  return this.Z;
};
h.fd = function() {
  return null == this.Ua ? Gc : this.Ua;
};
function Td(a, b) {
  return 0 === ub(a) ? b : new Sd(a, b, null, null);
}
function Ud(a, b) {
  a.add(b);
}
function sd(a) {
  for (var b = [];;) {
    if (A(a)) {
      b.push(B(a)), a = E(a);
    } else {
      return b;
    }
  }
}
function Vd(a, b) {
  if (Kc(a)) {
    return H(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && A(c)) {
      c = E(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Xd = function Wd(b) {
  return null == b ? null : null == E(b) ? A(B(b)) : t ? G(B(b), Wd(E(b))) : null;
}, Yd = function() {
  function a(a, b) {
    return new Ld(null, function() {
      var c = A(a);
      return c ? jd(c) ? Td(tc(c), d.a(uc(c), b)) : G(B(c), d.a(C(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Ld(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Ld(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function u(a, b) {
        return new Ld(null, function() {
          var c = A(a);
          return c ? jd(c) ? Td(tc(c), u(uc(c), b)) : G(B(c), u(C(c), b)) : q(b) ? u(B(b), E(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.l = 2;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = C(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.e(d, g, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 2;
  d.h = e.h;
  d.q = c;
  d.b = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), Zd = function() {
  function a(a, b, c, d) {
    return G(a, G(b, G(c, d)));
  }
  function b(a, b, c) {
    return G(a, G(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, s) {
      var u = null;
      4 < arguments.length && (u = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, u);
    }
    function b(a, c, d, e, f) {
      return G(a, G(c, G(d, G(e, Xd(f)))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = E(a);
      var e = B(a);
      a = E(a);
      var s = B(a);
      a = C(a);
      return b(c, d, e, s, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return A(c);
      case 2:
        return G(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.e(c, f, g, k, F(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 4;
  c.h = d.h;
  c.b = function(a) {
    return A(a);
  };
  c.a = function(a, b) {
    return G(a, b);
  };
  c.c = b;
  c.i = a;
  c.e = d.e;
  return c;
}();
function $d(a, b, c) {
  var d = A(c);
  if (0 === b) {
    return a.q ? a.q() : a.call(null);
  }
  c = Ab(d);
  var e = Bb(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Ab(e), f = Bb(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Ab(f), g = Bb(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = Ab(g), k = Bb(g);
  if (4 === b) {
    return a.i ? a.i(c, d, e, f) : a.i ? a.i(c, d, e, f) : a.call(null, c, d, e, f);
  }
  g = Ab(k);
  k = Bb(k);
  if (5 === b) {
    return a.m ? a.m(c, d, e, f, g) : a.m ? a.m(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  a = Ab(k);
  var l = Bb(k);
  if (6 === b) {
    return a.la ? a.la(c, d, e, f, g, a) : a.la ? a.la(c, d, e, f, g, a) : a.call(null, c, d, e, f, g, a);
  }
  var k = Ab(l), p = Bb(l);
  if (7 === b) {
    return a.Gb ? a.Gb(c, d, e, f, g, a, k) : a.Gb ? a.Gb(c, d, e, f, g, a, k) : a.call(null, c, d, e, f, g, a, k);
  }
  var l = Ab(p), s = Bb(p);
  if (8 === b) {
    return a.sd ? a.sd(c, d, e, f, g, a, k, l) : a.sd ? a.sd(c, d, e, f, g, a, k, l) : a.call(null, c, d, e, f, g, a, k, l);
  }
  var p = Ab(s), u = Bb(s);
  if (9 === b) {
    return a.td ? a.td(c, d, e, f, g, a, k, l, p) : a.td ? a.td(c, d, e, f, g, a, k, l, p) : a.call(null, c, d, e, f, g, a, k, l, p);
  }
  var s = Ab(u), D = Bb(u);
  if (10 === b) {
    return a.gd ? a.gd(c, d, e, f, g, a, k, l, p, s) : a.gd ? a.gd(c, d, e, f, g, a, k, l, p, s) : a.call(null, c, d, e, f, g, a, k, l, p, s);
  }
  var u = Ab(D), J = Bb(D);
  if (11 === b) {
    return a.hd ? a.hd(c, d, e, f, g, a, k, l, p, s, u) : a.hd ? a.hd(c, d, e, f, g, a, k, l, p, s, u) : a.call(null, c, d, e, f, g, a, k, l, p, s, u);
  }
  var D = Ab(J), M = Bb(J);
  if (12 === b) {
    return a.jd ? a.jd(c, d, e, f, g, a, k, l, p, s, u, D) : a.jd ? a.jd(c, d, e, f, g, a, k, l, p, s, u, D) : a.call(null, c, d, e, f, g, a, k, l, p, s, u, D);
  }
  var J = Ab(M), W = Bb(M);
  if (13 === b) {
    return a.kd ? a.kd(c, d, e, f, g, a, k, l, p, s, u, D, J) : a.kd ? a.kd(c, d, e, f, g, a, k, l, p, s, u, D, J) : a.call(null, c, d, e, f, g, a, k, l, p, s, u, D, J);
  }
  var M = Ab(W), U = Bb(W);
  if (14 === b) {
    return a.ld ? a.ld(c, d, e, f, g, a, k, l, p, s, u, D, J, M) : a.ld ? a.ld(c, d, e, f, g, a, k, l, p, s, u, D, J, M) : a.call(null, c, d, e, f, g, a, k, l, p, s, u, D, J, M);
  }
  var W = Ab(U), ha = Bb(U);
  if (15 === b) {
    return a.md ? a.md(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W) : a.md ? a.md(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W) : a.call(null, c, d, e, f, g, a, k, l, p, s, u, D, J, M, W);
  }
  var U = Ab(ha), gb = Bb(ha);
  if (16 === b) {
    return a.nd ? a.nd(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U) : a.nd ? a.nd(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U) : a.call(null, c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U);
  }
  var ha = Ab(gb), cb = Bb(gb);
  if (17 === b) {
    return a.od ? a.od(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha) : a.od ? a.od(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha) : a.call(null, c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha);
  }
  var gb = Ab(cb), kb = Bb(cb);
  if (18 === b) {
    return a.pd ? a.pd(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha, gb) : a.pd ? a.pd(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha, gb) : a.call(null, c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha, gb);
  }
  cb = Ab(kb);
  kb = Bb(kb);
  if (19 === b) {
    return a.qd ? a.qd(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha, gb, cb) : a.qd ? a.qd(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha, gb, cb) : a.call(null, c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha, gb, cb);
  }
  var wa = Ab(kb);
  Bb(kb);
  if (20 === b) {
    return a.rd ? a.rd(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha, gb, cb, wa) : a.rd ? a.rd(c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha, gb, cb, wa) : a.call(null, c, d, e, f, g, a, k, l, p, s, u, D, J, M, W, U, ha, gb, cb, wa);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var N = function() {
  function a(a, b, c, d, e) {
    b = Zd.i(b, c, d, e);
    c = a.l;
    return a.h ? (d = Vd(b, c + 1), d <= c ? $d(a, d, b) : a.h(b)) : a.apply(a, sd(b));
  }
  function b(a, b, c, d) {
    b = Zd.c(b, c, d);
    c = a.l;
    return a.h ? (d = Vd(b, c + 1), d <= c ? $d(a, d, b) : a.h(b)) : a.apply(a, sd(b));
  }
  function c(a, b, c) {
    b = Zd.a(b, c);
    c = a.l;
    if (a.h) {
      var d = Vd(b, c + 1);
      return d <= c ? $d(a, d, b) : a.h(b);
    }
    return a.apply(a, sd(b));
  }
  function d(a, b) {
    var c = a.l;
    if (a.h) {
      var d = Vd(b, c + 1);
      return d <= c ? $d(a, d, b) : a.h(b);
    }
    return a.apply(a, sd(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, J) {
      var M = null;
      5 < arguments.length && (M = F(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, M);
    }
    function b(a, c, d, e, f, g) {
      c = G(c, G(d, G(e, G(f, Xd(g)))));
      d = a.l;
      return a.h ? (e = Vd(c, d + 1), e <= d ? $d(a, e, c) : a.h(c)) : a.apply(a, sd(c));
    }
    a.l = 5;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = E(a);
      var e = B(a);
      a = E(a);
      var f = B(a);
      a = E(a);
      var g = B(a);
      a = C(a);
      return b(c, d, e, f, g, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, p, s, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, s);
      default:
        return f.e(e, k, l, p, s, F(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 5;
  e.h = f.h;
  e.a = d;
  e.c = c;
  e.i = b;
  e.m = a;
  e.e = f.e;
  return e;
}(), ae = function() {
  function a(a, b) {
    return!y.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return ib(N.i(y, a, c, d));
    }
    a.l = 2;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = C(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.b = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function be(a, b) {
  for (;;) {
    if (null == A(b)) {
      return!0;
    }
    if (q(a.b ? a.b(B(b)) : a.call(null, B(b)))) {
      var c = a, d = E(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function ce(a, b) {
  for (;;) {
    if (A(b)) {
      var c = a.b ? a.b(B(b)) : a.call(null, B(b));
      if (q(c)) {
        return c;
      }
      var c = a, d = E(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function de(a) {
  return a;
}
function ee(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l);
      }
      function c(b, d, e) {
        return ib(N.i(a, b, d, e));
      }
      b.l = 2;
      b.h = function(a) {
        var b = B(a);
        a = E(a);
        var d = B(a);
        a = C(a);
        return c(b, d, a);
      };
      b.e = c;
      return b;
    }(), b = function(b, e, f) {
      switch(arguments.length) {
        case 0:
          return ib(a.q ? a.q() : a.call(null));
        case 1:
          return ib(a.b ? a.b(b) : a.call(null, b));
        case 2:
          return ib(a.a ? a.a(b, e) : a.call(null, b, e));
        default:
          return c.e(b, e, F(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.l = 2;
    b.h = c.h;
    return b;
  }();
}
var fe = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = F(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, f);
        }
        function k(d, l, p, s) {
          return a.b ? a.b(b.b ? b.b(N.m(c, d, l, p, s)) : b.call(null, N.m(c, d, l, p, s))) : a.call(null, b.b ? b.b(N.m(c, d, l, p, s)) : b.call(null, N.m(c, d, l, p, s)));
        }
        d.l = 3;
        d.h = function(a) {
          var b = B(a);
          a = E(a);
          var c = B(a);
          a = E(a);
          var d = B(a);
          a = C(a);
          return k(b, c, d, a);
        };
        d.e = k;
        return d;
      }(), d = function(d, k, u, D) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.b ? b.b(c.q ? c.q() : c.call(null)) : b.call(null, c.q ? c.q() : c.call(null))) : a.call(null, b.b ? b.b(c.q ? c.q() : c.call(null)) : b.call(null, c.q ? c.q() : c.call(null)));
          case 1:
            return a.b ? a.b(b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d))) : a.call(null, b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d)));
          case 2:
            return a.b ? a.b(b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k))) : a.call(null, b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k)));
          case 3:
            return a.b ? a.b(b.b ? b.b(c.c ? c.c(d, k, u) : c.call(null, d, k, u)) : b.call(null, c.c ? c.c(d, k, u) : c.call(null, d, k, u))) : a.call(null, b.b ? b.b(c.c ? c.c(d, k, u) : c.call(null, d, k, u)) : b.call(null, c.c ? c.c(d, k, u) : c.call(null, d, k, u)));
          default:
            return l.e(d, k, u, F(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.l = 3;
      d.h = l.h;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = F(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, k, l) {
          return a.b ? a.b(N.m(b, c, g, k, l)) : a.call(null, N.m(b, c, g, k, l));
        }
        c.l = 3;
        c.h = function(a) {
          var b = B(a);
          a = E(a);
          var c = B(a);
          a = E(a);
          var e = B(a);
          a = C(a);
          return d(b, c, e, a);
        };
        c.e = d;
        return c;
      }(), c = function(c, g, s, u) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.q ? b.q() : b.call(null)) : a.call(null, b.q ? b.q() : b.call(null));
          case 1:
            return a.b ? a.b(b.b ? b.b(c) : b.call(null, c)) : a.call(null, b.b ? b.b(c) : b.call(null, c));
          case 2:
            return a.b ? a.b(b.a ? b.a(c, g) : b.call(null, c, g)) : a.call(null, b.a ? b.a(c, g) : b.call(null, c, g));
          case 3:
            return a.b ? a.b(b.c ? b.c(c, g, s) : b.call(null, c, g, s)) : a.call(null, b.c ? b.c(c, g, s) : b.call(null, c, g, s));
          default:
            return d.e(c, g, s, F(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.l = 3;
      c.h = d.h;
      return c;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, p) {
      var s = null;
      3 < arguments.length && (s = F(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, s);
    }
    function b(a, c, d, e) {
      var f = Fd(Zd.i(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d);
        }
        function b(a) {
          a = N.a(B(f), a);
          for (var c = E(f);;) {
            if (c) {
              a = B(c).call(null, a), c = E(c);
            } else {
              return a;
            }
          }
        }
        a.l = 0;
        a.h = function(a) {
          a = A(a);
          return b(a);
        };
        a.e = b;
        return a;
      }();
    }
    a.l = 3;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = E(a);
      var e = B(a);
      a = C(a);
      return b(c, d, e, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, g, k) {
    switch(arguments.length) {
      case 0:
        return de;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.e(c, f, g, F(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 3;
  c.h = d.h;
  c.q = function() {
    return de;
  };
  c.b = function(a) {
    return a;
  };
  c.a = b;
  c.c = a;
  c.e = d.e;
  return c;
}(), ge = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = F(Array.prototype.slice.call(arguments, 0), 0));
        return s.call(this, b);
      }
      function s(e) {
        return N.m(a, b, c, d, e);
      }
      e.l = 0;
      e.h = function(a) {
        a = A(a);
        return s(a);
      };
      e.e = s;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = F(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return N.i(a, b, c, d);
      }
      d.l = 0;
      d.h = function(a) {
        a = A(a);
        return e(a);
      };
      d.e = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = F(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return N.c(a, b, c);
      }
      c.l = 0;
      c.h = function(a) {
        a = A(a);
        return d(a);
      };
      c.e = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, u) {
      var D = null;
      4 < arguments.length && (D = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, D);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = F(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return N.m(a, c, d, e, Yd.a(f, b));
        }
        b.l = 0;
        b.h = function(a) {
          a = A(a);
          return g(a);
        };
        b.e = g;
        return b;
      }();
    }
    a.l = 4;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = E(a);
      var e = B(a);
      a = E(a);
      var f = B(a);
      a = C(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k, l, p) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.e(d, g, k, l, F(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.b = function(a) {
    return a;
  };
  d.a = c;
  d.c = b;
  d.i = a;
  d.e = e.e;
  return d;
}(), he = function() {
  function a(a, b, c, e) {
    return new Ld(null, function() {
      var p = A(b), s = A(c), u = A(e);
      return p && s && u ? G(a.c ? a.c(B(p), B(s), B(u)) : a.call(null, B(p), B(s), B(u)), d.i(a, C(p), C(s), C(u))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Ld(null, function() {
      var e = A(b), p = A(c);
      return e && p ? G(a.a ? a.a(B(e), B(p)) : a.call(null, B(e), B(p)), d.c(a, C(e), C(p))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new Ld(null, function() {
      var c = A(b);
      if (c) {
        if (jd(c)) {
          for (var e = tc(c), p = H(e), s = Qd(p), u = 0;;) {
            if (u < p) {
              var D = a.b ? a.b(x.a(e, u)) : a.call(null, x.a(e, u));
              s.add(D);
              u += 1;
            } else {
              break;
            }
          }
          return Td(s.Z(), d.a(a, uc(c)));
        }
        return G(a.b ? a.b(B(c)) : a.call(null, B(c)), d.a(a, C(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, u) {
      var D = null;
      4 < arguments.length && (D = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, D);
    }
    function b(a, c, e, f, g) {
      return d.a(function(b) {
        return N.a(a, b);
      }, function J(a) {
        return new Ld(null, function() {
          var b = d.a(A, a);
          return be(de, b) ? G(d.a(B, b), J(d.a(C, b))) : null;
        }, null, null);
      }(Vc.e(g, f, F([e, c], 0))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = E(a);
      var e = B(a);
      a = E(a);
      var f = B(a);
      a = C(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.e(d, g, k, l, F(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.a = c;
  d.c = b;
  d.i = a;
  d.e = e.e;
  return d;
}(), je = function ie(b, c) {
  return new Ld(null, function() {
    if (0 < b) {
      var d = A(c);
      return d ? G(B(d), ie(b - 1, C(d))) : null;
    }
    return null;
  }, null, null);
};
function ke(a, b) {
  return new Ld(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (d = A(d), 0 < c && d) {
          c -= 1, d = C(d);
        } else {
          c = d;
          break a;
        }
      }
      c = void 0;
    }
    return c;
  }, null, null);
}
var le = function() {
  function a(a, b) {
    return je(a, c.b(b));
  }
  function b(a) {
    return new Ld(null, function() {
      return G(a, c.b(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), ne = function me(b, c) {
  return G(c, new Ld(null, function() {
    return me(b, b.b ? b.b(c) : b.call(null, c));
  }, null, null));
}, oe = function() {
  function a(a, c) {
    return new Ld(null, function() {
      var f = A(a), g = A(c);
      return f && g ? G(B(f), G(B(g), b.a(C(f), C(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new Ld(null, function() {
        var c = he.a(A, Vc.e(e, d, F([a], 0)));
        return be(de, c) ? Yd.a(he.a(B, c), N.a(b, he.a(C, c))) : null;
      }, null, null);
    }
    a.l = 2;
    a.h = function(a) {
      var b = B(a);
      a = E(a);
      var d = B(a);
      a = C(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function pe(a, b) {
  return ke(1, oe.a(le.b(a), b));
}
function qe(a) {
  return function c(a, e) {
    return new Ld(null, function() {
      var f = A(a);
      return f ? G(B(f), c(C(f), e)) : A(e) ? c(B(e), C(e)) : null;
    }, null, null);
  }(null, a);
}
var re = function() {
  function a(a, b) {
    return qe(he.a(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return qe(N.i(he, a, c, d));
    }
    a.l = 2;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = C(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}(), te = function se(b, c) {
  return new Ld(null, function() {
    var d = A(c);
    if (d) {
      if (jd(d)) {
        for (var e = tc(d), f = H(e), g = Qd(f), k = 0;;) {
          if (k < f) {
            if (q(b.b ? b.b(x.a(e, k)) : b.call(null, x.a(e, k)))) {
              var l = x.a(e, k);
              g.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return Td(g.Z(), se(b, uc(d)));
      }
      e = B(d);
      d = C(d);
      return q(b.b ? b.b(e) : b.call(null, e)) ? G(e, se(b, d)) : se(b, d);
    }
    return null;
  }, null, null);
};
function ue(a, b) {
  return te(ee(a), b);
}
function ve(a) {
  return function c(a) {
    return new Ld(null, function() {
      return G(a, q(hd.b ? hd.b(a) : hd.call(null, a)) ? re.a(c, A.b ? A.b(a) : A.call(null, a)) : null);
    }, null, null);
  }(a);
}
function we(a) {
  return te(function(a) {
    return!hd(a);
  }, C(ve(a)));
}
function xe(a, b) {
  var c;
  null != a ? a && (a.p & 4 || a.di) ? (c = ob.c(oc, nc(a), b), c = pc(c)) : c = ob.c(xb, a, b) : c = ob.c(Vc, Gc, b);
  return c;
}
var ye = function() {
  function a(a, b, c, k) {
    return new Ld(null, function() {
      var l = A(k);
      if (l) {
        var p = je(a, l);
        return a === H(p) ? G(p, d.i(a, b, c, ke(b, l))) : xb(Gc, je(a, Yd.a(p, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Ld(null, function() {
      var k = A(c);
      if (k) {
        var l = je(a, k);
        return a === H(l) ? G(l, d.c(a, b, ke(b, k))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.c(a, a, b);
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}(), ze = function() {
  function a(a, b, c) {
    var g = md;
    for (b = A(b);;) {
      if (b) {
        var k = a;
        if (k ? k.g & 256 || k.ud || (k.g ? 0 : r(Db, k)) : r(Db, k)) {
          a = K.c(a, B(b), g);
          if (g === a) {
            return c;
          }
          b = E(b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.c(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Be = function Ae(b, c, d) {
  var e = I.c(c, 0, null);
  return(c = yd(c)) ? Yc.c(b, e, Ae(K.a(b, e), c, d)) : Yc.c(b, e, d);
}, Ce = function() {
  function a(a, b, c, d, f, u) {
    var D = I.c(b, 0, null);
    return(b = yd(b)) ? Yc.c(a, D, e.la(K.a(a, D), b, c, d, f, u)) : Yc.c(a, D, c.i ? c.i(K.a(a, D), d, f, u) : c.call(null, K.a(a, D), d, f, u));
  }
  function b(a, b, c, d, f) {
    var u = I.c(b, 0, null);
    return(b = yd(b)) ? Yc.c(a, u, e.m(K.a(a, u), b, c, d, f)) : Yc.c(a, u, c.c ? c.c(K.a(a, u), d, f) : c.call(null, K.a(a, u), d, f));
  }
  function c(a, b, c, d) {
    var f = I.c(b, 0, null);
    return(b = yd(b)) ? Yc.c(a, f, e.i(K.a(a, f), b, c, d)) : Yc.c(a, f, c.a ? c.a(K.a(a, f), d) : c.call(null, K.a(a, f), d));
  }
  function d(a, b, c) {
    var d = I.c(b, 0, null);
    return(b = yd(b)) ? Yc.c(a, d, e.c(K.a(a, d), b, c)) : Yc.c(a, d, c.b ? c.b(K.a(a, d)) : c.call(null, K.a(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, J, M) {
      var W = null;
      6 < arguments.length && (W = F(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, J, W);
    }
    function b(a, c, d, f, g, k, M) {
      var W = I.c(c, 0, null);
      return(c = yd(c)) ? Yc.c(a, W, N.e(e, K.a(a, W), c, d, f, F([g, k, M], 0))) : Yc.c(a, W, N.e(d, K.a(a, W), f, g, k, F([M], 0)));
    }
    a.l = 6;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = E(a);
      var e = B(a);
      a = E(a);
      var f = B(a);
      a = E(a);
      var g = B(a);
      a = E(a);
      var M = B(a);
      a = C(a);
      return b(c, d, e, f, g, M, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, p, s, u, D) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, p);
      case 5:
        return b.call(this, e, k, l, p, s);
      case 6:
        return a.call(this, e, k, l, p, s, u);
      default:
        return f.e(e, k, l, p, s, u, F(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 6;
  e.h = f.h;
  e.c = d;
  e.i = c;
  e.m = b;
  e.la = a;
  e.e = f.e;
  return e;
}();
function De(a, b) {
  this.C = a;
  this.f = b;
}
function Ee(a) {
  return new De(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Fe(a) {
  return new De(a.C, mb(a.f));
}
function Ge(a) {
  a = a.k;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function He(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Ee(a);
    d.f[0] = c;
    c = d;
    b -= 5;
  }
}
var Je = function Ie(b, c, d, e) {
  var f = Fe(d), g = b.k - 1 >>> c & 31;
  5 === c ? f.f[g] = e : (d = d.f[g], b = null != d ? Ie(b, c - 5, d, e) : He(null, c - 5, e), f.f[g] = b);
  return f;
};
function Ke(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function Le(a, b) {
  if (0 <= b && b < a.k) {
    if (b >= Ge(a)) {
      return a.B;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.f[b >>> d & 31], d = e
      } else {
        return c.f;
      }
    }
  } else {
    return Ke(b, a.k);
  }
}
var Ne = function Me(b, c, d, e, f) {
  var g = Fe(d);
  if (0 === c) {
    g.f[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Me(b, c - 5, d.f[k], e, f);
    g.f[k] = b;
  }
  return g;
}, Pe = function Oe(b, c, d) {
  var e = b.k - 2 >>> c & 31;
  if (5 < c) {
    b = Oe(b, c - 5, d.f[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Fe(d);
    d.f[e] = b;
    return d;
  }
  return 0 === e ? null : t ? (d = Fe(d), d.f[e] = null, d) : null;
};
function R(a, b, c, d, e, f) {
  this.j = a;
  this.k = b;
  this.shift = c;
  this.root = d;
  this.B = e;
  this.n = f;
  this.p = 4;
  this.g = 167668511;
}
h = R.prototype;
h.Fb = function() {
  return new Qe(this.k, this.shift, Re.b ? Re.b(this.root) : Re.call(null, this.root), Se.b ? Se.b(this.B) : Se.call(null, this.B));
};
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.I = function(a, b) {
  return x.c(this, b, null);
};
h.J = function(a, b, c) {
  return x.c(this, b, c);
};
h.lb = function(a, b, c) {
  if (0 <= b && b < this.k) {
    return Ge(this) <= b ? (a = mb(this.B), a[b & 31] = c, new R(this.j, this.k, this.shift, this.root, a, null)) : new R(this.j, this.k, this.shift, Ne(this, this.shift, this.root, b, c), this.B, null);
  }
  if (b === this.k) {
    return xb(this, c);
  }
  if (t) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.k), w("]")].join(""));
  }
  return null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.qa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return this.w(null, a);
};
h.a = function(a, b) {
  return this.qa(null, a, b);
};
h.P = function(a, b) {
  if (32 > this.k - Ge(this)) {
    for (var c = this.B.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.B[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new R(this.j, this.k + 1, this.shift, this.root, d, null);
  }
  c = (d = this.k >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Ee(null), d.f[0] = this.root, e = He(null, this.shift, new De(null, this.B)), d.f[1] = e) : d = Je(this, this.shift, this.root, new De(null, this.B));
  return new R(this.j, this.k + 1, c, d, [b], null);
};
h.xd = function() {
  return 0 < this.k ? new Oc(this, this.k - 1, null) : null;
};
h.vd = function() {
  return x.a(this, 0);
};
h.wd = function() {
  return x.a(this, 1);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Ic.a(this, b);
};
h.ga = function(a, b, c) {
  return Ic.c(this, b, c);
};
h.G = function() {
  return 0 === this.k ? null : 32 > this.k ? F.b(this.B) : t ? Te.c ? Te.c(this, 0, 0) : Te.call(null, this, 0, 0) : null;
};
h.H = function() {
  return this.k;
};
h.nb = function() {
  return 0 < this.k ? x.a(this, this.k - 1) : null;
};
h.ob = function() {
  if (0 === this.k) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.k) {
    return Xb(Ue, this.j);
  }
  if (1 < this.k - Ge(this)) {
    return new R(this.j, this.k - 1, this.shift, this.root, this.B.slice(0, -1), null);
  }
  if (t) {
    var a = Le(this, this.k - 2), b = Pe(this, this.shift, this.root), b = null == b ? S : b, c = this.k - 1;
    return 5 < this.shift && null == b.f[1] ? new R(this.j, c, this.shift - 5, b.f[0], a, null) : new R(this.j, c, this.shift, b, a, null);
  }
  return null;
};
h.yd = function(a, b, c) {
  return Gb(this, b, c);
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new R(b, this.k, this.shift, this.root, this.B, this.n);
};
h.pa = !0;
h.ka = function() {
  return new R(this.j, this.k, this.shift, this.root, this.B, this.n);
};
h.s = function() {
  return this.j;
};
h.w = function(a, b) {
  return Le(this, b)[b & 31];
};
h.qa = function(a, b, c) {
  return 0 <= b && b < this.k ? x.a(this, b) : c;
};
h.$ = function() {
  return Sc(Ue, this.j);
};
var S = new De(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Ue = new R(null, 0, 5, S, [], 0);
function Ve(a, b) {
  var c = a.length, d = b ? a : mb(a);
  if (32 > c) {
    return new R(null, c, 5, S, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, g = (new R(null, 32, 5, S, e, null)).Fb(null);;) {
    if (f < c) {
      e = f + 1, g = oc(g, d[f]), f = e;
    } else {
      return pc(g);
    }
  }
}
function We(a) {
  return pc(ob.c(oc, nc(Ue), a));
}
var Xe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof Fc && 0 === a.o ? Ve.a ? Ve.a(a.f, !0) : Ve.call(null, a.f, !0) : We(a);
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Ye(a, b, c, d, e, f) {
  this.ea = a;
  this.Oa = b;
  this.o = c;
  this.W = d;
  this.j = e;
  this.n = f;
  this.g = 32243948;
  this.p = 1536;
}
h = Ye.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.ra = function() {
  if (this.W + 1 < this.Oa.length) {
    var a = Te.i ? Te.i(this.ea, this.Oa, this.o, this.W + 1) : Te.call(null, this.ea, this.Oa, this.o, this.W + 1);
    return null == a ? null : a;
  }
  return vc(this);
};
h.P = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Ic.a(Ze.c ? Ze.c(this.ea, this.o + this.W, H(this.ea)) : Ze.call(null, this.ea, this.o + this.W, H(this.ea)), b);
};
h.ga = function(a, b, c) {
  return Ic.c(Ze.c ? Ze.c(this.ea, this.o + this.W, H(this.ea)) : Ze.call(null, this.ea, this.o + this.W, H(this.ea)), b, c);
};
h.G = function() {
  return this;
};
h.X = function() {
  return this.Oa[this.W];
};
h.ha = function() {
  if (this.W + 1 < this.Oa.length) {
    var a = Te.i ? Te.i(this.ea, this.Oa, this.o, this.W + 1) : Te.call(null, this.ea, this.Oa, this.o, this.W + 1);
    return null == a ? Gc : a;
  }
  return uc(this);
};
h.dd = function() {
  var a = this.Oa.length, a = this.o + a < ub(this.ea) ? Te.c ? Te.c(this.ea, this.o + a, 0) : Te.call(null, this.ea, this.o + a, 0) : null;
  return null == a ? null : a;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return Te.m ? Te.m(this.ea, this.Oa, this.o, this.W, b) : Te.call(null, this.ea, this.Oa, this.o, this.W, b);
};
h.$ = function() {
  return Sc(Ue, this.j);
};
h.ed = function() {
  return Rd.a(this.Oa, this.W);
};
h.fd = function() {
  var a = this.Oa.length, a = this.o + a < ub(this.ea) ? Te.c ? Te.c(this.ea, this.o + a, 0) : Te.call(null, this.ea, this.o + a, 0) : null;
  return null == a ? Gc : a;
};
var Te = function() {
  function a(a, b, c, d, l) {
    return new Ye(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Ye(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Ye(a, Le(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.i = b;
  d.m = a;
  return d;
}();
function $e(a, b, c, d, e) {
  this.j = a;
  this.Ka = b;
  this.start = c;
  this.end = d;
  this.n = e;
  this.p = 0;
  this.g = 32400159;
}
h = $e.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.I = function(a, b) {
  return x.c(this, b, null);
};
h.J = function(a, b, c) {
  return x.c(this, b, c);
};
h.lb = function(a, b, c) {
  var d = this, e = d.start + b;
  return af.m ? af.m(d.j, Yc.c(d.Ka, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : af.call(null, d.j, Yc.c(d.Ka, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.qa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return this.w(null, a);
};
h.a = function(a, b) {
  return this.qa(null, a, b);
};
h.P = function(a, b) {
  return af.m ? af.m(this.j, Sb(this.Ka, this.end, b), this.start, this.end + 1, null) : af.call(null, this.j, Sb(this.Ka, this.end, b), this.start, this.end + 1, null);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Ic.a(this, b);
};
h.ga = function(a, b, c) {
  return Ic.c(this, b, c);
};
h.G = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : G(x.a(a.Ka, d), new Ld(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
h.H = function() {
  return this.end - this.start;
};
h.nb = function() {
  return x.a(this.Ka, this.end - 1);
};
h.ob = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return af.m ? af.m(this.j, this.Ka, this.start, this.end - 1, null) : af.call(null, this.j, this.Ka, this.start, this.end - 1, null);
};
h.yd = function(a, b, c) {
  return Gb(this, b, c);
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return af.m ? af.m(b, this.Ka, this.start, this.end, this.n) : af.call(null, b, this.Ka, this.start, this.end, this.n);
};
h.pa = !0;
h.ka = function() {
  return new $e(this.j, this.Ka, this.start, this.end, this.n);
};
h.s = function() {
  return this.j;
};
h.w = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Ke(b, this.end - this.start) : x.a(this.Ka, this.start + b);
};
h.qa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : x.c(this.Ka, this.start + b, c);
};
h.$ = function() {
  return Sc(Ue, this.j);
};
function af(a, b, c, d, e) {
  for (;;) {
    if (b instanceof $e) {
      c = b.start + c, d = b.start + d, b = b.Ka;
    } else {
      var f = H(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new $e(a, b, c, d, e);
    }
  }
}
var Ze = function() {
  function a(a, b, c) {
    return af(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, H(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Re(a) {
  return new De({}, mb(a.f));
}
function Se(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  ld(a, 0, b, 0, a.length);
  return b;
}
var cf = function bf(b, c, d, e) {
  d = b.root.C === d.C ? d : new De(b.root.C, mb(d.f));
  var f = b.k - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.f[f];
    b = null != g ? bf(b, c - 5, g, e) : He(b.root.C, c - 5, e);
  }
  d.f[f] = b;
  return d;
};
function Qe(a, b, c, d) {
  this.k = a;
  this.shift = b;
  this.root = c;
  this.B = d;
  this.g = 275;
  this.p = 88;
}
h = Qe.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.J(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return this.I(null, a);
};
h.a = function(a, b) {
  return this.J(null, a, b);
};
h.I = function(a, b) {
  return x.c(this, b, null);
};
h.J = function(a, b, c) {
  return x.c(this, b, c);
};
h.w = function(a, b) {
  if (this.root.C) {
    return Le(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.qa = function(a, b, c) {
  return 0 <= b && b < this.k ? x.a(this, b) : c;
};
h.H = function() {
  if (this.root.C) {
    return this.k;
  }
  throw Error("count after persistent!");
};
h.je = function(a, b, c) {
  var d = this;
  if (d.root.C) {
    if (0 <= b && b < d.k) {
      return Ge(this) <= b ? d.B[b & 31] = c : (a = function f(a, k) {
        var l = d.root.C === k.C ? k : new De(d.root.C, mb(k.f));
        if (0 === a) {
          l.f[b & 31] = c;
        } else {
          var p = b >>> a & 31, s = f(a - 5, l.f[p]);
          l.f[p] = s;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.k) {
      return oc(this, c);
    }
    if (t) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.k)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
h.Zb = function(a, b, c) {
  return rc(this, b, c);
};
h.pb = function(a, b) {
  if (this.root.C) {
    if (32 > this.k - Ge(this)) {
      this.B[this.k & 31] = b;
    } else {
      var c = new De(this.root.C, this.B), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.B = d;
      if (this.k >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = He(this.root.C, this.shift, c);
        this.root = new De(this.root.C, d);
        this.shift = e;
      } else {
        this.root = cf(this, this.shift, this.root, c);
      }
    }
    this.k += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.qb = function() {
  if (this.root.C) {
    this.root.C = null;
    var a = this.k - Ge(this), b = Array(a);
    ld(this.B, 0, b, 0, a);
    return new R(null, this.k, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function df(a, b, c, d) {
  this.j = a;
  this.Ca = b;
  this.Sa = c;
  this.n = d;
  this.p = 0;
  this.g = 31850572;
}
h = df.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.P = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.G = function() {
  return this;
};
h.X = function() {
  return B(this.Ca);
};
h.ha = function() {
  var a = E(this.Ca);
  return a ? new df(this.j, a, this.Sa, null) : null == this.Sa ? vb(this) : new df(this.j, this.Sa, null, null);
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new df(b, this.Ca, this.Sa, this.n);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return Sc(Gc, this.j);
};
function ef(a, b, c, d, e) {
  this.j = a;
  this.count = b;
  this.Ca = c;
  this.Sa = d;
  this.n = e;
  this.p = 0;
  this.g = 31858766;
}
h = ef.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.P = function(a, b) {
  var c;
  q(this.Ca) ? (c = this.Sa, c = new ef(this.j, this.count + 1, this.Ca, Vc.a(q(c) ? c : Ue, b), null)) : c = new ef(this.j, this.count + 1, Vc.a(this.Ca, b), Ue, null);
  return c;
};
h.toString = function() {
  return xc(this);
};
h.G = function() {
  var a = A(this.Sa), b = this.Ca;
  return q(q(b) ? b : a) ? new df(null, this.Ca, A(a), null) : null;
};
h.H = function() {
  return this.count;
};
h.nb = function() {
  return B(this.Ca);
};
h.ob = function() {
  if (q(this.Ca)) {
    var a = E(this.Ca);
    return a ? new ef(this.j, this.count - 1, a, this.Sa, null) : new ef(this.j, this.count - 1, A(this.Sa), Ue, null);
  }
  return this;
};
h.X = function() {
  return B(this.Ca);
};
h.ha = function() {
  return C(A(this));
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new ef(b, this.count, this.Ca, this.Sa, this.n);
};
h.pa = !0;
h.ka = function() {
  return new ef(this.j, this.count, this.Ca, this.Sa, this.n);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return ff;
};
var ff = new ef(null, 0, null, Ue, 0);
function gf() {
  this.p = 0;
  this.g = 2097152;
}
gf.prototype.D = function() {
  return!1;
};
var hf = new gf;
function jf(a, b) {
  return od(O(b) ? H(a) === H(b) ? be(de, he.a(function(a) {
    return y.a(K.c(b, B(a), hf), Tc(a));
  }, a)) : null : null);
}
function kf(a, b) {
  var c = a.f;
  if (b instanceof Q) {
    a: {
      for (var d = c.length, e = b.Za, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof Q && e === g.Za) {
          c = f;
          break a;
        }
        if (t) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (ga(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (t) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof Ac) {
        a: {
          d = c.length;
          e = b.$a;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof Ac && e === g.$a) {
              c = f;
              break a;
            }
            if (t) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (t) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (t) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (y.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (t) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function lf(a, b, c) {
  this.f = a;
  this.o = b;
  this.oa = c;
  this.p = 0;
  this.g = 32374990;
}
h = lf.prototype;
h.K = function() {
  return Nc(this);
};
h.ra = function() {
  return this.o < this.f.length - 2 ? new lf(this.f, this.o + 2, this.oa) : null;
};
h.P = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.H = function() {
  return(this.f.length - this.o) / 2;
};
h.X = function() {
  return new R(null, 2, 5, S, [this.f[this.o], this.f[this.o + 1]], null);
};
h.ha = function() {
  return this.o < this.f.length - 2 ? new lf(this.f, this.o + 2, this.oa) : Gc;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new lf(this.f, this.o, b);
};
h.s = function() {
  return this.oa;
};
h.$ = function() {
  return Sc(Gc, this.oa);
};
function n(a, b, c, d) {
  this.j = a;
  this.k = b;
  this.f = c;
  this.n = d;
  this.p = 4;
  this.g = 16123663;
}
h = n.prototype;
h.Fb = function() {
  return new mf({}, this.f.length, mb(this.f));
};
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Ad(this);
};
h.I = function(a, b) {
  return Eb.c(this, b, null);
};
h.J = function(a, b, c) {
  a = kf(this, b);
  return-1 === a ? c : this.f[a + 1];
};
h.lb = function(a, b, c) {
  a = kf(this, b);
  if (-1 === a) {
    if (this.k < nf) {
      a = this.f;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new n(this.j, this.k + 1, e, null);
    }
    return Xb(Gb(xe(of, this), b, c), this.j);
  }
  return c === this.f[a + 1] ? this : t ? (b = mb(this.f), b[a + 1] = c, new n(this.j, this.k, b, null)) : null;
};
h.Xb = function(a, b) {
  return-1 !== kf(this, b);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.J(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return this.I(null, a);
};
h.a = function(a, b) {
  return this.J(null, a, b);
};
h.P = function(a, b) {
  return id(b) ? Gb(this, x.a(b, 0), x.a(b, 1)) : ob.c(xb, this, b);
};
h.toString = function() {
  return xc(this);
};
h.G = function() {
  return 0 <= this.f.length - 2 ? new lf(this.f, 0, null) : null;
};
h.H = function() {
  return this.k;
};
h.D = function(a, b) {
  return jf(this, b);
};
h.t = function(a, b) {
  return new n(b, this.k, this.f, this.n);
};
h.pa = !0;
h.ka = function() {
  return new n(this.j, this.k, this.f, this.n);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return Xb(pf, this.j);
};
h.uc = function(a, b) {
  if (0 <= kf(this, b)) {
    var c = this.f.length, d = c - 2;
    if (0 === d) {
      return vb(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.j, this.k - 1, d, null);
      }
      if (y.a(b, this.f[e])) {
        e += 2;
      } else {
        if (t) {
          d[f] = this.f[e], d[f + 1] = this.f[e + 1], f += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var pf = new n(null, 0, [], null), nf = 8;
function qf(a) {
  for (var b = a.length, c = 0, d = nc(pf);;) {
    if (c < b) {
      var e = c + 2, d = qc(d, a[c], a[c + 1]), c = e
    } else {
      return pc(d);
    }
  }
}
function mf(a, b, c) {
  this.Lb = a;
  this.vb = b;
  this.f = c;
  this.p = 56;
  this.g = 258;
}
h = mf.prototype;
h.Zb = function(a, b, c) {
  if (q(this.Lb)) {
    a = kf(this, b);
    if (-1 === a) {
      if (this.vb + 2 <= 2 * nf) {
        return this.vb += 2, this.f.push(b), this.f.push(c), this;
      }
      a = rf.a ? rf.a(this.vb, this.f) : rf.call(null, this.vb, this.f);
      return qc(a, b, c);
    }
    c !== this.f[a + 1] && (this.f[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.pb = function(a, b) {
  if (q(this.Lb)) {
    if (b ? b.g & 2048 || b.tf || (b.g ? 0 : r(Jb, b)) : r(Jb, b)) {
      return qc(this, Bd.b ? Bd.b(b) : Bd.call(null, b), Cd.b ? Cd.b(b) : Cd.call(null, b));
    }
    for (var c = A(b), d = this;;) {
      var e = B(c);
      if (q(e)) {
        c = E(c), d = qc(d, Bd.b ? Bd.b(e) : Bd.call(null, e), Cd.b ? Cd.b(e) : Cd.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.qb = function() {
  if (q(this.Lb)) {
    return this.Lb = !1, new n(null, vd(this.vb), this.f, null);
  }
  throw Error("persistent! called twice");
};
h.I = function(a, b) {
  return Eb.c(this, b, null);
};
h.J = function(a, b, c) {
  if (q(this.Lb)) {
    return a = kf(this, b), -1 === a ? c : this.f[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.H = function() {
  if (q(this.Lb)) {
    return vd(this.vb);
  }
  throw Error("count after persistent!");
};
function rf(a, b) {
  for (var c = nc(of), d = 0;;) {
    if (d < a) {
      c = qc(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function sf() {
  this.wa = !1;
}
function tf(a, b) {
  return a === b ? !0 : Id(a, b) ? !0 : t ? y.a(a, b) : null;
}
var uf = function() {
  function a(a, b, c, g, k) {
    a = mb(a);
    a[b] = c;
    a[g] = k;
    return a;
  }
  function b(a, b, c) {
    a = mb(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.m = a;
  return c;
}();
function vf(a, b) {
  var c = Array(a.length - 2);
  ld(a, 0, c, 0, 2 * b);
  ld(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var wf = function() {
  function a(a, b, c, g, k, l) {
    a = a.Nb(b);
    a.f[c] = g;
    a.f[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Nb(b);
    a.f[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.la = a;
  return c;
}();
function xf(a, b, c) {
  this.C = a;
  this.O = b;
  this.f = c;
}
h = xf.prototype;
h.Qa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = wd(this.O & g - 1);
  if (0 === (this.O & g)) {
    var l = wd(this.O);
    if (2 * l < this.f.length) {
      a = this.Nb(a);
      b = a.f;
      f.wa = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.O |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = yf.Qa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.O >>> d & 1) && (k[d] = null != this.f[e] ? yf.Qa(a, b + 5, Cc(this.f[e]), this.f[e], this.f[e + 1], f) : this.f[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new zf(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), ld(this.f, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, ld(this.f, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.wa = !0, a = this.Nb(a), a.f = b, a.O |= g, a) : null;
  }
  l = this.f[2 * k];
  g = this.f[2 * k + 1];
  return null == l ? (l = g.Qa(a, b + 5, c, d, e, f), l === g ? this : wf.i(this, a, 2 * k + 1, l)) : tf(d, l) ? e === g ? this : wf.i(this, a, 2 * k + 1, e) : t ? (f.wa = !0, wf.la(this, a, 2 * k, null, 2 * k + 1, Af.Gb ? Af.Gb(a, b + 5, l, g, c, d, e) : Af.call(null, a, b + 5, l, g, c, d, e))) : null;
};
h.dc = function() {
  return Bf.b ? Bf.b(this.f) : Bf.call(null, this.f);
};
h.Nb = function(a) {
  if (a === this.C) {
    return this;
  }
  var b = wd(this.O), c = Array(0 > b ? 4 : 2 * (b + 1));
  ld(this.f, 0, c, 0, 2 * b);
  return new xf(a, this.O, c);
};
h.ec = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.O & d)) {
    return this;
  }
  var e = wd(this.O & d - 1), f = this.f[2 * e], g = this.f[2 * e + 1];
  return null == f ? (a = g.ec(a + 5, b, c), a === g ? this : null != a ? new xf(null, this.O, uf.c(this.f, 2 * e + 1, a)) : this.O === d ? null : t ? new xf(null, this.O ^ d, vf(this.f, e)) : null) : tf(c, f) ? new xf(null, this.O ^ d, vf(this.f, e)) : t ? this : null;
};
h.Pa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = wd(this.O & f - 1);
  if (0 === (this.O & f)) {
    var k = wd(this.O);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = yf.Pa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.O >>> c & 1) && (g[c] = null != this.f[d] ? yf.Pa(a + 5, Cc(this.f[d]), this.f[d], this.f[d + 1], e) : this.f[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new zf(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    ld(this.f, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    ld(this.f, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.wa = !0;
    return new xf(null, this.O | f, a);
  }
  k = this.f[2 * g];
  f = this.f[2 * g + 1];
  return null == k ? (k = f.Pa(a + 5, b, c, d, e), k === f ? this : new xf(null, this.O, uf.c(this.f, 2 * g + 1, k))) : tf(c, k) ? d === f ? this : new xf(null, this.O, uf.c(this.f, 2 * g + 1, d)) : t ? (e.wa = !0, new xf(null, this.O, uf.m(this.f, 2 * g, null, 2 * g + 1, Af.la ? Af.la(a + 5, k, f, b, c, d) : Af.call(null, a + 5, k, f, b, c, d)))) : null;
};
h.gb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.O & e)) {
    return d;
  }
  var f = wd(this.O & e - 1), e = this.f[2 * f], f = this.f[2 * f + 1];
  return null == e ? f.gb(a + 5, b, c, d) : tf(c, e) ? f : t ? d : null;
};
var yf = new xf(null, 0, []);
function zf(a, b, c) {
  this.C = a;
  this.k = b;
  this.f = c;
}
h = zf.prototype;
h.Qa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.f[g];
  if (null == k) {
    return a = wf.i(this, a, g, yf.Qa(a, b + 5, c, d, e, f)), a.k += 1, a;
  }
  b = k.Qa(a, b + 5, c, d, e, f);
  return b === k ? this : wf.i(this, a, g, b);
};
h.dc = function() {
  return Cf.b ? Cf.b(this.f) : Cf.call(null, this.f);
};
h.Nb = function(a) {
  return a === this.C ? this : new zf(a, this.k, mb(this.f));
};
h.ec = function(a, b, c) {
  var d = b >>> a & 31, e = this.f[d];
  if (null != e) {
    a = e.ec(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.k) {
          a: {
            e = this.f;
            a = 2 * (this.k - 1);
            b = Array(a);
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new xf(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new zf(null, this.k - 1, uf.c(this.f, d, a));
        }
      } else {
        d = t ? new zf(null, this.k, uf.c(this.f, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
h.Pa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.f[f];
  if (null == g) {
    return new zf(null, this.k + 1, uf.c(this.f, f, yf.Pa(a + 5, b, c, d, e)));
  }
  a = g.Pa(a + 5, b, c, d, e);
  return a === g ? this : new zf(null, this.k, uf.c(this.f, f, a));
};
h.gb = function(a, b, c, d) {
  var e = this.f[b >>> a & 31];
  return null != e ? e.gb(a + 5, b, c, d) : d;
};
function Df(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (tf(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ef(a, b, c, d) {
  this.C = a;
  this.Ya = b;
  this.k = c;
  this.f = d;
}
h = Ef.prototype;
h.Qa = function(a, b, c, d, e, f) {
  if (c === this.Ya) {
    b = Df(this.f, this.k, d);
    if (-1 === b) {
      if (this.f.length > 2 * this.k) {
        return a = wf.la(this, a, 2 * this.k, d, 2 * this.k + 1, e), f.wa = !0, a.k += 1, a;
      }
      c = this.f.length;
      b = Array(c + 2);
      ld(this.f, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.wa = !0;
      f = this.k + 1;
      a === this.C ? (this.f = b, this.k = f, a = this) : a = new Ef(this.C, this.Ya, f, b);
      return a;
    }
    return this.f[b + 1] === e ? this : wf.i(this, a, b + 1, e);
  }
  return(new xf(a, 1 << (this.Ya >>> b & 31), [null, this, null, null])).Qa(a, b, c, d, e, f);
};
h.dc = function() {
  return Bf.b ? Bf.b(this.f) : Bf.call(null, this.f);
};
h.Nb = function(a) {
  if (a === this.C) {
    return this;
  }
  var b = Array(2 * (this.k + 1));
  ld(this.f, 0, b, 0, 2 * this.k);
  return new Ef(a, this.Ya, this.k, b);
};
h.ec = function(a, b, c) {
  a = Df(this.f, this.k, c);
  return-1 === a ? this : 1 === this.k ? null : t ? new Ef(null, this.Ya, this.k - 1, vf(this.f, vd(a))) : null;
};
h.Pa = function(a, b, c, d, e) {
  return b === this.Ya ? (a = Df(this.f, this.k, c), -1 === a ? (a = 2 * this.k, b = Array(a + 2), ld(this.f, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.wa = !0, new Ef(null, this.Ya, this.k + 1, b)) : y.a(this.f[a], d) ? this : new Ef(null, this.Ya, this.k, uf.c(this.f, a + 1, d))) : (new xf(null, 1 << (this.Ya >>> a & 31), [null, this])).Pa(a, b, c, d, e);
};
h.gb = function(a, b, c, d) {
  a = Df(this.f, this.k, c);
  return 0 > a ? d : tf(c, this.f[a]) ? this.f[a + 1] : t ? d : null;
};
var Af = function() {
  function a(a, b, c, g, k, l, p) {
    var s = Cc(c);
    if (s === k) {
      return new Ef(null, s, 2, [c, g, l, p]);
    }
    var u = new sf;
    return yf.Qa(a, b, s, c, g, u).Qa(a, b, k, l, p, u);
  }
  function b(a, b, c, g, k, l) {
    var p = Cc(b);
    if (p === g) {
      return new Ef(null, p, 2, [b, c, k, l]);
    }
    var s = new sf;
    return yf.Pa(a, p, b, c, s).Pa(a, g, k, l, s);
  }
  var c = null, c = function(c, e, f, g, k, l, p) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.la = b;
  c.Gb = a;
  return c;
}();
function Ff(a, b, c, d, e) {
  this.j = a;
  this.Ra = b;
  this.o = c;
  this.L = d;
  this.n = e;
  this.p = 0;
  this.g = 32374860;
}
h = Ff.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.P = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.X = function() {
  return null == this.L ? new R(null, 2, 5, S, [this.Ra[this.o], this.Ra[this.o + 1]], null) : B(this.L);
};
h.ha = function() {
  return null == this.L ? Bf.c ? Bf.c(this.Ra, this.o + 2, null) : Bf.call(null, this.Ra, this.o + 2, null) : Bf.c ? Bf.c(this.Ra, this.o, E(this.L)) : Bf.call(null, this.Ra, this.o, E(this.L));
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Ff(b, this.Ra, this.o, this.L, this.n);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return Sc(Gc, this.j);
};
var Bf = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Ff(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (q(g) && (g = g.dc(), q(g))) {
            return new Ff(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Ff(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function Gf(a, b, c, d, e) {
  this.j = a;
  this.Ra = b;
  this.o = c;
  this.L = d;
  this.n = e;
  this.p = 0;
  this.g = 32374860;
}
h = Gf.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.P = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.X = function() {
  return B(this.L);
};
h.ha = function() {
  return Cf.i ? Cf.i(null, this.Ra, this.o, E(this.L)) : Cf.call(null, null, this.Ra, this.o, E(this.L));
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Gf(b, this.Ra, this.o, this.L, this.n);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return Sc(Gc, this.j);
};
var Cf = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (q(k) && (k = k.dc(), q(k))) {
            return new Gf(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Gf(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.i(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.i = a;
  return c;
}();
function Hf(a, b, c, d, e, f) {
  this.j = a;
  this.k = b;
  this.root = c;
  this.sa = d;
  this.Fa = e;
  this.n = f;
  this.p = 4;
  this.g = 16123663;
}
h = Hf.prototype;
h.Fb = function() {
  return new If({}, this.root, this.k, this.sa, this.Fa);
};
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Ad(this);
};
h.I = function(a, b) {
  return Eb.c(this, b, null);
};
h.J = function(a, b, c) {
  return null == b ? this.sa ? this.Fa : c : null == this.root ? c : t ? this.root.gb(0, Cc(b), b, c) : null;
};
h.lb = function(a, b, c) {
  if (null == b) {
    return this.sa && c === this.Fa ? this : new Hf(this.j, this.sa ? this.k : this.k + 1, this.root, !0, c, null);
  }
  a = new sf;
  b = (null == this.root ? yf : this.root).Pa(0, Cc(b), b, c, a);
  return b === this.root ? this : new Hf(this.j, a.wa ? this.k + 1 : this.k, b, this.sa, this.Fa, null);
};
h.Xb = function(a, b) {
  return null == b ? this.sa : null == this.root ? !1 : t ? this.root.gb(0, Cc(b), b, md) !== md : null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.J(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return this.I(null, a);
};
h.a = function(a, b) {
  return this.J(null, a, b);
};
h.P = function(a, b) {
  return id(b) ? Gb(this, x.a(b, 0), x.a(b, 1)) : ob.c(xb, this, b);
};
h.toString = function() {
  return xc(this);
};
h.G = function() {
  if (0 < this.k) {
    var a = null != this.root ? this.root.dc() : null;
    return this.sa ? G(new R(null, 2, 5, S, [null, this.Fa], null), a) : a;
  }
  return null;
};
h.H = function() {
  return this.k;
};
h.D = function(a, b) {
  return jf(this, b);
};
h.t = function(a, b) {
  return new Hf(b, this.k, this.root, this.sa, this.Fa, this.n);
};
h.pa = !0;
h.ka = function() {
  return new Hf(this.j, this.k, this.root, this.sa, this.Fa, this.n);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return Xb(of, this.j);
};
h.uc = function(a, b) {
  if (null == b) {
    return this.sa ? new Hf(this.j, this.k - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (t) {
    var c = this.root.ec(0, Cc(b), b);
    return c === this.root ? this : new Hf(this.j, this.k - 1, c, this.sa, this.Fa, null);
  }
  return null;
};
var of = new Hf(null, 0, null, !1, null, 0);
function Xc(a, b) {
  for (var c = a.length, d = 0, e = nc(of);;) {
    if (d < c) {
      var f = d + 1, e = e.Zb(null, a[d], b[d]), d = f
    } else {
      return pc(e);
    }
  }
}
function If(a, b, c, d, e) {
  this.C = a;
  this.root = b;
  this.count = c;
  this.sa = d;
  this.Fa = e;
  this.p = 56;
  this.g = 258;
}
h = If.prototype;
h.Zb = function(a, b, c) {
  return Jf(this, b, c);
};
h.pb = function(a, b) {
  var c;
  a: {
    if (this.C) {
      if (b ? b.g & 2048 || b.tf || (b.g ? 0 : r(Jb, b)) : r(Jb, b)) {
        c = Jf(this, Bd.b ? Bd.b(b) : Bd.call(null, b), Cd.b ? Cd.b(b) : Cd.call(null, b));
        break a;
      }
      c = A(b);
      for (var d = this;;) {
        var e = B(c);
        if (q(e)) {
          c = E(c), d = Jf(d, Bd.b ? Bd.b(e) : Bd.call(null, e), Cd.b ? Cd.b(e) : Cd.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
h.qb = function() {
  var a;
  if (this.C) {
    this.C = null, a = new Hf(null, this.count, this.root, this.sa, this.Fa, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.I = function(a, b) {
  return null == b ? this.sa ? this.Fa : null : null == this.root ? null : this.root.gb(0, Cc(b), b);
};
h.J = function(a, b, c) {
  return null == b ? this.sa ? this.Fa : c : null == this.root ? c : this.root.gb(0, Cc(b), b, c);
};
h.H = function() {
  if (this.C) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Jf(a, b, c) {
  if (a.C) {
    if (null == b) {
      a.Fa !== c && (a.Fa = c), a.sa || (a.count += 1, a.sa = !0);
    } else {
      var d = new sf;
      b = (null == a.root ? yf : a.root).Qa(a.C, 0, Cc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.wa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var Mf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    for (var b = A(a), e = nc(of);;) {
      if (b) {
        a = E(E(b));
        var f = B(b), b = Tc(b), e = qc(e, f, b), b = a;
      } else {
        return pc(e);
      }
    }
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), Nf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return new n(null, vd(H(a)), N.a(nb, a), null);
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Of(a, b) {
  this.ua = a;
  this.oa = b;
  this.p = 0;
  this.g = 32374988;
}
h = Of.prototype;
h.K = function() {
  return Nc(this);
};
h.ra = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.vc || (a.g ? 0 : r(Cb, a)) : r(Cb, a)) ? this.ua.ra(null) : E(this.ua);
  return null == a ? null : new Of(a, this.oa);
};
h.P = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.X = function() {
  return this.ua.X(null).vd();
};
h.ha = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.vc || (a.g ? 0 : r(Cb, a)) : r(Cb, a)) ? this.ua.ra(null) : E(this.ua);
  return null != a ? new Of(a, this.oa) : Gc;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Of(this.ua, b);
};
h.s = function() {
  return this.oa;
};
h.$ = function() {
  return Sc(Gc, this.oa);
};
function Pf(a) {
  return(a = A(a)) ? new Of(a, null) : null;
}
function Bd(a) {
  return Kb(a);
}
function Qf(a, b) {
  this.ua = a;
  this.oa = b;
  this.p = 0;
  this.g = 32374988;
}
h = Qf.prototype;
h.K = function() {
  return Nc(this);
};
h.ra = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.vc || (a.g ? 0 : r(Cb, a)) : r(Cb, a)) ? this.ua.ra(null) : E(this.ua);
  return null == a ? null : new Qf(a, this.oa);
};
h.P = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.X = function() {
  return this.ua.X(null).wd();
};
h.ha = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.vc || (a.g ? 0 : r(Cb, a)) : r(Cb, a)) ? this.ua.ra(null) : E(this.ua);
  return null != a ? new Qf(a, this.oa) : Gc;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Qf(this.ua, b);
};
h.s = function() {
  return this.oa;
};
h.$ = function() {
  return Sc(Gc, this.oa);
};
function Rf(a) {
  return(a = A(a)) ? new Qf(a, null) : null;
}
function Cd(a) {
  return Lb(a);
}
var Sf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return q(ce(de, a)) ? ob.a(function(a, b) {
      return Vc.a(q(a) ? a : pf, b);
    }, a) : null;
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Tf(a, b, c) {
  this.j = a;
  this.fb = b;
  this.n = c;
  this.p = 4;
  this.g = 15077647;
}
h = Tf.prototype;
h.Fb = function() {
  return new Uf(nc(this.fb));
};
h.K = function() {
  var a = this.n;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = A(this);;) {
      if (b) {
        var c = B(b), a = (a + Cc(c)) % 4503599627370496, b = E(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.n = a;
};
h.I = function(a, b) {
  return Eb.c(this, b, null);
};
h.J = function(a, b, c) {
  return Fb(this.fb, b) ? b : c;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.J(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return this.I(null, a);
};
h.a = function(a, b) {
  return this.J(null, a, b);
};
h.P = function(a, b) {
  return new Tf(this.j, Yc.c(this.fb, b, null), null);
};
h.toString = function() {
  return xc(this);
};
h.G = function() {
  return Pf(this.fb);
};
h.ie = function(a, b) {
  return new Tf(this.j, Ib(this.fb, b), null);
};
h.H = function() {
  return ub(this.fb);
};
h.D = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.g & 4096 || b.ji ? !0 : b.g ? !1 : r(Nb, b) : r(Nb, b)) && H(c) === H(b) && be(function(a) {
    return pd(c, a);
  }, b);
};
h.t = function(a, b) {
  return new Tf(b, this.fb, this.n);
};
h.pa = !0;
h.ka = function() {
  return new Tf(this.j, this.fb, this.n);
};
h.s = function() {
  return this.j;
};
h.$ = function() {
  return Sc(Vf, this.j);
};
var Vf = new Tf(null, pf, 0);
function Uf(a) {
  this.ab = a;
  this.g = 259;
  this.p = 136;
}
h = Uf.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Eb.c(this.ab, c, md) === md ? null : c;
      case 3:
        return Eb.c(this.ab, c, md) === md ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return Eb.c(this.ab, a, md) === md ? null : a;
};
h.a = function(a, b) {
  return Eb.c(this.ab, a, md) === md ? b : a;
};
h.I = function(a, b) {
  return Eb.c(this, b, null);
};
h.J = function(a, b, c) {
  return Eb.c(this.ab, b, md) === md ? c : b;
};
h.H = function() {
  return H(this.ab);
};
h.pb = function(a, b) {
  this.ab = qc(this.ab, b, null);
  return this;
};
h.qb = function() {
  return new Tf(null, pc(this.ab), null);
};
function Wf(a) {
  a = A(a);
  if (null == a) {
    return Vf;
  }
  if (a instanceof Fc && 0 === a.o) {
    a = a.f;
    a: {
      for (var b = 0, c = nc(Vf);;) {
        if (b < a.length) {
          var d = b + 1, c = c.pb(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.qb(null);
  }
  if (t) {
    for (d = nc(Vf);;) {
      if (null != a) {
        b = a.ra(null), d = d.pb(null, a.X(null)), a = b;
      } else {
        return d.qb(null);
      }
    }
  } else {
    return null;
  }
}
function Jd(a) {
  if (a && (a.p & 4096 || a.vf)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
function Xf(a, b) {
  for (var c = nc(pf), d = A(a), e = A(b);;) {
    if (d && e) {
      var f = B(d), g = B(e), c = qc(c, f, g), d = E(d), e = E(e)
    } else {
      return pc(c);
    }
  }
}
var Yf = function() {
  function a(a, b, c) {
    return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = F(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p);
    }
    function c(a, d, e, l) {
      return ob.c(function(c, d) {
        return b.c(a, c, d);
      }, b.c(a, d, e), l);
    }
    a.l = 3;
    a.h = function(a) {
      var b = B(a);
      a = E(a);
      var d = B(a);
      a = E(a);
      var l = B(a);
      a = C(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, F(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 3;
  b.h = c.h;
  b.a = function(a, b) {
    return b;
  };
  b.c = a;
  b.e = c.e;
  return b;
}(), $f = function Zf(b, c) {
  return new Ld(null, function() {
    var d = A(c);
    return d ? q(b.b ? b.b(B(d)) : b.call(null, B(d))) ? G(B(d), Zf(b, C(d))) : null : null;
  }, null, null);
};
function ag(a, b, c, d, e) {
  this.j = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.n = e;
  this.p = 0;
  this.g = 32375006;
}
h = ag.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.ra = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ag(this.j, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ag(this.j, this.start + this.step, this.end, this.step, null) : null;
};
h.P = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.fa = function(a, b) {
  return Ic.a(this, b);
};
h.ga = function(a, b, c) {
  return Ic.c(this, b, c);
};
h.G = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.H = function() {
  return ib(cc(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
h.X = function() {
  return null == cc(this) ? null : this.start;
};
h.ha = function() {
  return null != cc(this) ? new ag(this.j, this.start + this.step, this.end, this.step, null) : Gc;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new ag(b, this.start, this.end, this.step, this.n);
};
h.pa = !0;
h.ka = function() {
  return new ag(this.j, this.start, this.end, this.step, this.n);
};
h.s = function() {
  return this.j;
};
h.w = function(a, b) {
  if (b < ub(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.qa = function(a, b, c) {
  return b < ub(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.$ = function() {
  return Sc(Gc, this.j);
};
var bg = function() {
  function a(a, b, c) {
    return new ag(null, a, b, c, null);
  }
  function b(a, b) {
    return e.c(a, b, 1);
  }
  function c(a) {
    return e.c(0, a, 1);
  }
  function d() {
    return e.c(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, g, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = d;
  e.b = c;
  e.a = b;
  e.c = a;
  return e;
}(), cg = function() {
  function a(a, b) {
    for (;;) {
      if (A(b) && 0 < a) {
        var c = a - 1, g = E(b);
        a = c;
        b = g;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (A(a)) {
        a = E(a);
      } else {
        return null;
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), dg = function() {
  function a(a, b) {
    cg.a(a, b);
    return b;
  }
  function b(a) {
    cg.b(a);
    return a;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function eg(a, b) {
  var c = a.exec(b);
  return y.a(B(c), b) ? 1 === H(c) ? B(c) : We(c) : null;
}
function fg(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === H(c) ? B(c) : We(c);
}
function gg(a) {
  var b = fg(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  I.c(b, 0, null);
  a = I.c(b, 1, null);
  b = I.c(b, 2, null);
  return RegExp(b, a);
}
function hg(a, b, c, d, e, f, g) {
  var k = Za;
  try {
    Za = null == Za ? null : Za - 1;
    if (null != Za && 0 > Za) {
      return hc(a, "#");
    }
    hc(a, c);
    A(g) && (b.c ? b.c(B(g), a, f) : b.call(null, B(g), a, f));
    for (var l = E(g), p = fb.b(f);l && (null == p || 0 !== p);) {
      hc(a, d);
      b.c ? b.c(B(l), a, f) : b.call(null, B(l), a, f);
      var s = E(l);
      c = p - 1;
      l = s;
      p = c;
    }
    q(fb.b(f)) && (hc(a, d), b.c ? b.c("...", a, f) : b.call(null, "...", a, f));
    return hc(a, e);
  } finally {
    Za = k;
  }
}
var ig = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = A(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.w(null, k);
        hc(a, l);
        k += 1;
      } else {
        if (e = A(e)) {
          f = e, jd(f) ? (e = tc(f), g = uc(f), f = e, l = H(e), e = g, g = l) : (l = B(f), hc(a, l), e = E(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.l = 1;
  a.h = function(a) {
    var d = B(a);
    a = C(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), jg = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function kg(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return jg[a];
  })), w('"')].join("");
}
var ng = function lg(b, c, d) {
  if (null == b) {
    return hc(c, "nil");
  }
  if (void 0 === b) {
    return hc(c, "#\x3cundefined\x3e");
  }
  if (t) {
    q(function() {
      var c = K.a(d, db);
      return q(c) ? (c = b ? b.g & 131072 || b.uf ? !0 : b.g ? !1 : r(Ub, b) : r(Ub, b)) ? bd(b) : c : c;
    }()) && (hc(c, "^"), lg(bd(b), c, d), hc(c, " "));
    if (null == b) {
      return hc(c, "nil");
    }
    if (b.R) {
      return b.V(b, c, d);
    }
    if (b && (b.g & 2147483648 || b.ba)) {
      return b.F(null, c, d);
    }
    if (jb(b) === Boolean || "number" === typeof b) {
      return hc(c, "" + w(b));
    }
    if (null != b && b.constructor === Object) {
      return hc(c, "#js "), mg.i ? mg.i(he.a(function(c) {
        return new R(null, 2, 5, S, [Kd.b(c), b[c]], null);
      }, kd(b)), lg, c, d) : mg.call(null, he.a(function(c) {
        return new R(null, 2, 5, S, [Kd.b(c), b[c]], null);
      }, kd(b)), lg, c, d);
    }
    if (b instanceof Array) {
      return hg(c, lg, "#js [", " ", "]", d, b);
    }
    if (ga(b)) {
      return q(bb.b(d)) ? hc(c, kg(b)) : hc(c, b);
    }
    if ($c(b)) {
      return ig.e(c, F(["#\x3c", "" + w(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + w(b);;) {
          if (H(d) < c) {
            d = [w("0"), w(d)].join("");
          } else {
            return d;
          }
        }
      };
      return ig.e(c, F(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? ig.e(c, F(['#"', b.source, '"'], 0)) : (b ? b.g & 2147483648 || b.ba || (b.g ? 0 : r(ic, b)) : r(ic, b)) ? jc(b, c, d) : t ? ig.e(c, F(["#\x3c", "" + w(b), "\x3e"], 0)) : null;
  }
  return null;
};
function og(a) {
  var b = $a();
  if (fd(a)) {
    b = "";
  } else {
    var c = w, d = new Wa;
    a: {
      var e = new wc(d);
      ng(B(a), e, b);
      a = A(E(a));
      for (var f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.w(null, k);
          hc(e, " ");
          ng(l, e, b);
          k += 1;
        } else {
          if (a = A(a)) {
            f = a, jd(f) ? (a = tc(f), g = uc(f), f = a, l = H(a), a = g, g = l) : (l = B(f), hc(e, " "), ng(l, e, b), a = E(f), f = null, g = 0), k = 0;
          } else {
            break a;
          }
        }
      }
    }
    b = "" + c(d);
  }
  return b;
}
var pg = function() {
  function a(a) {
    var c = null;
    0 < arguments.length && (c = F(Array.prototype.slice.call(arguments, 0), 0));
    return og(c);
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return og(a);
  };
  a.e = function(a) {
    return og(a);
  };
  return a;
}(), qg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = og(a);
    Ya.b ? Ya.b(a) : Ya.call(null, a);
    return null;
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function mg(a, b, c, d) {
  return hg(c, function(a, c, d) {
    b.c ? b.c(Kb(a), c, d) : b.call(null, Kb(a), c, d);
    hc(c, " ");
    return b.c ? b.c(Lb(a), c, d) : b.call(null, Lb(a), c, d);
  }, "{", ", ", "}", d, A(a));
}
Of.prototype.ba = !0;
Of.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
Fc.prototype.ba = !0;
Fc.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
$e.prototype.ba = !0;
$e.prototype.F = function(a, b, c) {
  return hg(b, ng, "[", " ", "]", c, this);
};
Sd.prototype.ba = !0;
Sd.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
n.prototype.ba = !0;
n.prototype.F = function(a, b, c) {
  return mg(this, ng, b, c);
};
ef.prototype.ba = !0;
ef.prototype.F = function(a, b, c) {
  return hg(b, ng, "#queue [", " ", "]", c, A(this));
};
Ld.prototype.ba = !0;
Ld.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
Oc.prototype.ba = !0;
Oc.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
Ff.prototype.ba = !0;
Ff.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
Ye.prototype.ba = !0;
Ye.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
Hf.prototype.ba = !0;
Hf.prototype.F = function(a, b, c) {
  return mg(this, ng, b, c);
};
Tf.prototype.ba = !0;
Tf.prototype.F = function(a, b, c) {
  return hg(b, ng, "#{", " ", "}", c, this);
};
R.prototype.ba = !0;
R.prototype.F = function(a, b, c) {
  return hg(b, ng, "[", " ", "]", c, this);
};
Dd.prototype.ba = !0;
Dd.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
lf.prototype.ba = !0;
lf.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
Ed.prototype.ba = !0;
Ed.prototype.F = function(a, b) {
  return hc(b, "()");
};
Hd.prototype.ba = !0;
Hd.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
ag.prototype.ba = !0;
ag.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
Gf.prototype.ba = !0;
Gf.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
Qf.prototype.ba = !0;
Qf.prototype.F = function(a, b, c) {
  return hg(b, ng, "(", " ", ")", c, this);
};
R.prototype.sc = !0;
R.prototype.tc = function(a, b) {
  return qd.a(this, b);
};
$e.prototype.sc = !0;
$e.prototype.tc = function(a, b) {
  return qd.a(this, b);
};
Q.prototype.sc = !0;
Q.prototype.tc = function(a, b) {
  return yc(this, b);
};
Ac.prototype.sc = !0;
Ac.prototype.tc = function(a, b) {
  return yc(this, b);
};
function rg(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.sh = c;
  this.Wb = d;
  this.g = 2153938944;
  this.p = 2;
}
h = rg.prototype;
h.K = function() {
  return ka(this);
};
h.le = function(a, b, c) {
  a = A(this.Wb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.w(null, f), k = I.c(g, 0, null), g = I.c(g, 1, null);
      g.i ? g.i(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = A(a)) {
        jd(a) ? (d = tc(a), a = uc(a), k = d, e = H(d), d = k) : (d = B(a), k = I.c(d, 0, null), g = I.c(d, 1, null), g.i ? g.i(k, this, b, c) : g.call(null, k, this, b, c), a = E(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
h.ke = function(a, b, c) {
  return this.Wb = Yc.c(this.Wb, b, c);
};
h.me = function(a, b) {
  return this.Wb = Zc.a(this.Wb, b);
};
h.F = function(a, b, c) {
  hc(b, "#\x3cAtom: ");
  ng(this.state, b, c);
  return hc(b, "\x3e");
};
h.s = function() {
  return this.j;
};
h.Eb = function() {
  return this.state;
};
h.D = function(a, b) {
  return this === b;
};
var tg = function() {
  function a(a) {
    return new rg(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = P(c) ? N.a(Mf, c) : c, e = K.a(d, sg), d = K.a(d, db);
      return new rg(a, d, e, null);
    }
    a.l = 1;
    a.h = function(a) {
      var c = B(a);
      a = C(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, F(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}();
function ug(a, b) {
  var c = a.sh;
  if (null != c && !q(c.b ? c.b(b) : c.call(null, b))) {
    throw Error([w("Assert failed: "), w("Validator rejected reference state"), w("\n"), w(pg.e(F([Gd(new Ac(null, "validate", "validate", 1233162959, null), new Ac(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  null != a.Wb && kc(a, c, b);
  return b;
}
var vg = function() {
  function a(a, b, c, d, e) {
    return ug(a, b.i ? b.i(a.state, c, d, e) : b.call(null, a.state, c, d, e));
  }
  function b(a, b, c, d) {
    return ug(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d));
  }
  function c(a, b, c) {
    return ug(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c));
  }
  function d(a, b) {
    return ug(a, b.b ? b.b(a.state) : b.call(null, a.state));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, J) {
      var M = null;
      5 < arguments.length && (M = F(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, M);
    }
    function b(a, c, d, e, f, g) {
      return ug(a, N.e(c, a.state, d, e, f, F([g], 0)));
    }
    a.l = 5;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = E(a);
      var e = B(a);
      a = E(a);
      var f = B(a);
      a = E(a);
      var g = B(a);
      a = C(a);
      return b(c, d, e, f, g, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, p, s, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, s);
      default:
        return f.e(e, k, l, p, s, F(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 5;
  e.h = f.h;
  e.a = d;
  e.c = c;
  e.i = b;
  e.m = a;
  e.e = f.e;
  return e;
}(), wg = null, xg = function() {
  function a(a) {
    null == wg && (wg = tg.b(0));
    return Dc.b([w(a), w(vg.a(wg, Hc))].join(""));
  }
  function b() {
    return c.b("G__");
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.b = a;
  return c;
}(), yg = {};
function zg(a) {
  if (a ? a.rf : a) {
    return a.rf(a);
  }
  var b;
  b = zg[m(null == a ? null : a)];
  if (!b && (b = zg._, !b)) {
    throw v("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function Ag(a) {
  return(a ? q(q(null) ? null : a.qf) || (a.za ? 0 : r(yg, a)) : r(yg, a)) ? zg(a) : "string" === typeof a || "number" === typeof a || a instanceof Q || a instanceof Ac ? Bg.b ? Bg.b(a) : Bg.call(null, a) : pg.e(F([a], 0));
}
var Bg = function Cg(b) {
  if (null == b) {
    return null;
  }
  if (b ? q(q(null) ? null : b.qf) || (b.za ? 0 : r(yg, b)) : r(yg, b)) {
    return zg(b);
  }
  if (b instanceof Q) {
    return Jd(b);
  }
  if (b instanceof Ac) {
    return "" + w(b);
  }
  if (O(b)) {
    var c = {};
    b = A(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.w(null, f), k = I.c(g, 0, null), g = I.c(g, 1, null);
        c[Ag(k)] = Cg(g);
        f += 1;
      } else {
        if (b = A(b)) {
          jd(b) ? (e = tc(b), b = uc(b), d = e, e = H(e)) : (e = B(b), d = I.c(e, 0, null), e = I.c(e, 1, null), c[Ag(d)] = Cg(e), b = E(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (gd(b)) {
    c = [];
    b = A(he.a(Cg, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.w(null, f), c.push(k), f += 1;
      } else {
        if (b = A(b)) {
          d = b, jd(d) ? (b = tc(d), f = uc(d), d = b, e = H(b), b = f) : (b = B(d), c.push(b), b = E(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return t ? b : null;
}, Dg = {};
function Eg(a, b) {
  if (a ? a.pf : a) {
    return a.pf(a, b);
  }
  var c;
  c = Eg[m(null == a ? null : a)];
  if (!c && (c = Eg._, !c)) {
    throw v("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var Gg = function() {
  function a(a) {
    return b.e(a, F([new n(null, 1, [Fg, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? q(q(null) ? null : a.ei) || (a.za ? 0 : r(Dg, a)) : r(Dg, a)) {
        return Eg(a, N.a(Nf, c));
      }
      if (A(c)) {
        var d = P(c) ? N.a(Mf, c) : c, e = K.a(d, Fg);
        return function(a, b, c, d) {
          return function M(e) {
            return P(e) ? dg.b(he.a(M, e)) : gd(e) ? xe(null == e ? null : vb(e), he.a(M, e)) : e instanceof Array ? We(he.a(M, e)) : jb(e) === Object ? xe(pf, function() {
              return function(a, b, c, d) {
                return function wa(f) {
                  return new Ld(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = A(f);
                        if (a) {
                          if (jd(a)) {
                            var b = tc(a), c = H(b), g = Qd(c);
                            a: {
                              for (var k = 0;;) {
                                if (k < c) {
                                  var l = x.a(b, k), l = new R(null, 2, 5, S, [d.b ? d.b(l) : d.call(null, l), M(e[l])], null);
                                  g.add(l);
                                  k += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? Td(g.Z(), wa(uc(a))) : Td(g.Z(), null);
                          }
                          g = B(a);
                          return G(new R(null, 2, 5, S, [d.b ? d.b(g) : d.call(null, g), M(e[g])], null), wa(C(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(kd(e));
            }()) : t ? e : null;
          };
        }(c, d, e, q(e) ? Kd : w)(a);
      }
      return null;
    }
    a.l = 1;
    a.h = function(a) {
      var c = B(a);
      a = C(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, F(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}();
function Hg(a) {
  this.Yc = a;
  this.p = 0;
  this.g = 2153775104;
}
h = Hg.prototype;
h.K = function() {
  return Ca(pg.e(F([this], 0)));
};
h.F = function(a, b) {
  return hc(b, [w('#uuid "'), w(this.Yc), w('"')].join(""));
};
h.D = function(a, b) {
  return b instanceof Hg && this.Yc === b.Yc;
};
h.pa = !0;
h.ka = function() {
  return new Hg(this.Yc);
};
function Ig(a, b) {
  this.message = a;
  this.data = b;
}
Ig.prototype = Error();
Ig.prototype.constructor = Ig;
var Jg = function() {
  function a(a, b) {
    return new Ig(a, b);
  }
  function b(a, b) {
    return new Ig(a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
var Kg = new Q(null, "labels", "labels"), Lg = new Q(null, "const-count", "const-count"), Mg = new Q(null, "view", "view"), eb = new Q(null, "dup", "dup"), Ng = new Q(null, "path", "path"), Og = new Q(null, "href", "href"), Pg = new Q(null, "portfolio-companies", "portfolio-companies"), Qg = new Q(null, "query-params", "query-params"), Rg = new Q(null, "portfolio_company_count", "portfolio_company_count"), z = new Q(null, "default", "default"), T = new Q(null, "recur", "recur"), Sg = new Q(null, 
"text", "text"), Tg = new Q(null, "xml", "xml"), Ug = new Q(null, "data", "data"), Vg = new Q(null, "uk_constituencies", "uk_constituencies"), Wg = new Q(null, "ul", "ul"), Xg = new Q(null, "init-state", "init-state"), Yg = new Q(null, "all-portfolio-companies-summary", "all-portfolio-companies-summary"), Zg = new Q(null, "company_no", "company_no"), $g = new Q(null, "finally-block", "finally-block"), ah = new Q(null, "boundarylinecolls", "boundarylinecolls"), bh = new Q(null, "div.box.box-first", 
"div.box.box-first"), ch = new Q(null, "selection-portfolio-company-site-stats", "selection-portfolio-company-site-stats"), dh = new Q(null, "latest_employee_count_delta", "latest_employee_count_delta"), eh = new Q(null, "latest_accounts_date", "latest_accounts_date"), fh = new Q(null, "records", "records"), ih = new Q(null, "search", "search"), jh = new Q(null, "edn", "edn"), kh = new Q(null, "selection-portfolio-company-site-account-timelines", "selection-portfolio-company-site-account-timelines"), 
lh = new Q(null, "employee-count-delta-val", "employee-count-delta-val"), mh = new Q(null, "raw", "raw"), nh = new Q(null, "boundarylines", "boundarylines"), oh = new Q(null, "catch-block", "catch-block"), ph = new Q(null, "coordinates", "coordinates"), qh = new Q(null, "map", "map"), rh = new Q(null, "width", "width"), sh = new Q(null, "state", "state"), th = new Q(null, "div", "div"), uh = new Q(null, "collection_id", "collection_id"), vh = new Q(null, "link-fn", "link-fn"), wh = new Q(null, "uk-constituencies", 
"uk-constituencies"), xh = new Q(null, "constituency", "constituency"), yh = new Q(null, "boundaryline_id", "boundaryline_id"), zh = new Q(null, "react-key", "react-key"), Ah = new Q(null, "turnover-delta-val", "turnover-delta-val"), Bh = new Q(null, "total", "total"), Ch = new Q("om.core", "index", "om.core/index"), Dh = new Q(null, "markers", "markers"), Eh = new Q(null, "fetch-boundaryline-fn", "fetch-boundaryline-fn"), Fh = new Q(null, "y", "y"), Gh = new Q(null, "chart", "chart"), Hh = new Q(null, 
"content", "content"), Ih = new Q(null, "key", "key"), Jh = new Q(null, "class", "class"), Kh = new Q(null, "x", "x"), Lh = new Q(null, "mean", "mean"), Mh = new Q(null, "prefix", "prefix"), Nh = new Q(null, "selector", "selector"), Oh = new Q(null, "portfolio-company", "portfolio-company"), Ph = new Q(null, "weight", "weight"), Qh = new Q(null, "opacity", "opacity"), Rh = new Q(null, "comm", "comm"), Sh = new Q(null, "selection", "selection"), Th = new Q(null, "leaflet-map", "leaflet-map"), Fg = 
new Q(null, "keywordize-keys", "keywordize-keys"), Uh = new Q(null, "selection-portfolio-company-sites", "selection-portfolio-company-sites"), Vh = new Q(null, "name", "name"), Wh = new Q(null, "div.tbl", "div.tbl"), Xh = new Q(null, "selected-idx", "selected-idx"), Yh = new Q(null, "header", "header"), Zh = new Q(null, "postcode", "postcode"), $h = new Q(null, "tolerance", "tolerance"), ai = new Q(null, "latest_turnover", "latest_turnover"), bi = new Q(null, "color", "color"), ci = new Q(null, "fillOpacity", 
"fillOpacity"), di = new Q(null, "pc-count", "pc-count"), ei = new Q(null, "y0-title", "y0-title"), ab = new Q(null, "flush-on-newline", "flush-on-newline"), fi = new Q(null, "click", "click"), gi = new Q(null, "count", "count"), hi = new Q(null, "selection-portfolio-company-locations", "selection-portfolio-company-locations"), ii = new Q(null, "location", "location"), ji = new Q(null, "bounds", "bounds"), ki = new Q(null, "path-selections", "path-selections"), li = new Q(null, "investor-companies", 
"investor-companies"), mi = new Q(null, "employee-count-delta", "employee-count-delta"), ni = new Q(null, "turnover-delta", "turnover-delta"), oi = new Q(null, "investor_company_count", "investor_company_count"), pi = new Q(null, "catch-exception", "catch-exception"), qi = new Q(null, "employee-count", "employee-count"), ri = new Q(null, "pan-pending", "pan-pending"), si = new Q(null, "path-highlights", "path-highlights"), ti = new Q(null, "continue-block", "continue-block"), ui = new Q(null, "investor_company_uid", 
"investor_company_uid"), vi = new Q(null, "uk-constituencies-rtree", "uk-constituencies-rtree"), wi = new Q(null, "properties", "properties"), xi = new Q(null, "prev", "prev"), yi = new Q(null, "employee_count", "employee_count"), zi = new Q(null, "clojure", "clojure"), Ai = new Q(null, "constituencies", "constituencies"), Bi = new Q(null, "div.box.box-last", "div.box.box-last"), Ci = new Q(null, "plus?", "plus?"), Di = new Q(null, "app-state", "app-state"), Ei = new Q(null, "curr", "curr"), Fi = 
new Q(null, "title", "title"), Gi = new Q(null, "constituency_count", "constituency_count"), Hi = new Q(null, "accepts", "accepts"), Ii = new Q(null, "size", "size"), Ji = new Q(null, "route-select", "route-select"), Ki = new Q(null, "fill", "fill"), Li = new Q(null, "div.tbl-row", "div.tbl-row"), Mi = new Q(null, "min-zoom", "min-zoom"), Ni = new Q(null, "paths", "paths"), Oi = new Q(null, "div.grid", "div.grid"), Pi = new Q(null, "dec", "dec"), Qi = new Q(null, "h", "h"), Ri = new Q(null, "latest_turnover_delta", 
"latest_turnover_delta"), fb = new Q(null, "print-length", "print-length"), Si = new Q(null, "categories", "categories"), Ti = new Q(null, "ic-count", "ic-count"), Ui = new Q(null, "turnover", "turnover"), Vi = new Q(null, "search-results", "search-results"), Wi = new Q(null, "uid", "uid"), Xi = new Q(null, "type", "type"), Yi = new Q(null, "all-portfolio-company-site-stats", "all-portfolio-company-site-stats"), Zi = new Q(null, "textarea", "textarea"), $i = new Q(null, "yAxis", "yAxis"), t = new Q(null, 
"else", "else"), aj = new Q(null, "htmlFor", "htmlFor"), bj = new Q(null, "sort", "sort"), ej = new Q("cljs.core", "not-found", "cljs.core/not-found"), fj = new Q(null, "route-change-view", "route-change-view"), bb = new Q(null, "readably", "readably"), gj = new Q(null, "converters", "converters"), hj = new Q(null, "xAxis", "xAxis"), ij = new Q(null, "sf", "sf"), jj = new Q(null, "zoom", "zoom"), kj = new Q(null, "highlighted", "highlighted"), lj = new Q(null, "web_url", "web_url"), sg = new Q(null, 
"validator", "validator"), db = new Q(null, "meta", "meta"), mj = new Q(null, "latest_employee_count", "latest_employee_count"), nj = new Q(null, "averages", "averages"), oj = new Q(null, "w", "w"), pj = new Q(null, "opts", "opts"), qj = new Q(null, "series", "series"), rj = new Q(null, "turnover_delta", "turnover_delta"), sj = new Q(null, "input", "input"), tj = new Q(null, "employee_count_delta", "employee_count_delta"), uj = new Q(null, "div.tbl-cell", "div.tbl-cell"), vj = new Q(null, "for", 
"for"), wj = new Q(null, "mp", "mp"), xj = new Q(null, "y1-title", "y1-title"), yj = new Q(null, "investor_companies", "investor_companies"), zj = new Q(null, "className", "className"), Aj = new Q(null, "investor-company", "investor-company"), Bj = new Q(null, "leaflet-path", "leaflet-path"), Cj = new Q(null, "!latest_turnover", "!latest_turnover"), Dj = new Q(null, "div.tbl-cell.charts", "div.tbl-cell.charts"), Ej = new Q(null, "change-view", "change-view"), Fj = new Q(null, "fn", "fn"), Gj = new Q(null, 
"id", "id"), Hj = new Q(null, "value", "value"), Ij = new Q(null, "portfolio_company_site_uid", "portfolio_company_site_uid"), Jj = new Q(null, "selected", "selected"), Kj = new Q(null, "select", "select"), Lj = new Q(null, "description", "description"), Mj = new Q(null, "compact_name", "compact_name"), Nj = new Q(null, "tag", "tag"), Oj = new Q(null, "li", "li"), Pj = new Q(null, "benchmark", "benchmark"), Qj = new Q(null, "contents", "contents"), Rj = new Q(null, "path-fn", "path-fn"), Sj = new Q(null, 
"rotation", "rotation"), Tj = new Q(null, "political_party", "political_party"), Uj = new Q(null, "portfolio_companies", "portfolio_companies"), Vj = new Q(null, "selection-portfolio-company-sites-by-company", "selection-portfolio-company-sites-by-company");
function Wj(a, b, c) {
  a = a.search(Bg(new n(null, 4, [Kh, b, Fh, c, oj, 0, Qi, 0], null)));
  return te(function(a) {
    return gju.Ji(Bg(new n(null, 2, [Xi, "Point", ph, new R(null, 2, 5, S, [b, c], null)], null)), a.pi);
  }, a);
}
;function Xj() {
  0 != Yj && (Zj[ka(this)] = this);
}
var Yj = 0, Zj = {};
Xj.prototype.ze = !1;
Xj.prototype.$b = function() {
  if (!this.ze && (this.ze = !0, this.Ba(), 0 != Yj)) {
    var a = ka(this);
    delete Zj[a];
  }
};
Xj.prototype.Ba = function() {
  if (this.kc) {
    for (;this.kc.length;) {
      this.kc.shift()();
    }
  }
};
function ak(a) {
  a && "function" == typeof a.$b && a.$b();
}
;var bk, ck, dk, ek;
function fk() {
  return ba.navigator ? ba.navigator.userAgent : null;
}
ek = dk = ck = bk = !1;
var gk;
if (gk = fk()) {
  var hk = ba.navigator;
  bk = 0 == gk.indexOf("Opera");
  ck = !bk && -1 != gk.indexOf("MSIE");
  dk = !bk && -1 != gk.indexOf("WebKit");
  ek = !bk && !dk && "Gecko" == hk.product;
}
var ik = bk, jk = ck, kk = ek, lk = dk;
function mk() {
  var a = ba.document;
  return a ? a.documentMode : void 0;
}
var nk;
a: {
  var ok = "", pk;
  if (ik && ba.opera) {
    var qk = ba.opera.version, ok = "function" == typeof qk ? qk() : qk
  } else {
    if (kk ? pk = /rv\:([^\);]+)(\)|;)/ : jk ? pk = /MSIE\s+([^\);]+)(\)|;)/ : lk && (pk = /WebKit\/(\S+)/), pk) {
      var rk = pk.exec(fk()), ok = rk ? rk[1] : ""
    }
  }
  if (jk) {
    var sk = mk();
    if (sk > parseFloat(ok)) {
      nk = String(sk);
      break a;
    }
  }
  nk = ok;
}
var tk = {};
function uk(a) {
  var b;
  if (!(b = tk[a])) {
    b = 0;
    for (var c = ua(String(nk)).split("."), d = ua(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = l.exec(g) || ["", "", ""], u = p.exec(k) || ["", "", ""];
        if (0 == s[0].length && 0 == u[0].length) {
          break;
        }
        b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == u[2].length) ? -1 : (0 == s[2].length) > (0 == u[2].length) ? 1 : 0) || (s[2] < u[2] ? -1 : s[2] > u[2] ? 1 : 0);
      } while (0 == b);
    }
    b = tk[a] = 0 <= b;
  }
  return b;
}
var vk = ba.document, wk = vk && jk ? mk() || ("CSS1Compat" == vk.compatMode ? parseInt(nk, 10) : 5) : void 0;
var xk = !jk || jk && 9 <= wk, yk = jk && !uk("9");
!lk || uk("528");
kk && uk("1.9b") || jk && uk("8") || ik && uk("9.5") || lk && uk("528");
kk && !uk("8") || jk && uk("9");
function zk(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
}
h = zk.prototype;
h.Ba = function() {
};
h.$b = function() {
};
h.Ub = !1;
h.defaultPrevented = !1;
h.Vc = !0;
h.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Vc = !1;
};
function Ak(a) {
  Ak[" "](a);
  return a;
}
Ak[" "] = ea;
function Bk(a, b) {
  a && this.Gc(a, b);
}
sa(Bk, zk);
h = Bk.prototype;
h.target = null;
h.relatedTarget = null;
h.offsetX = 0;
h.offsetY = 0;
h.clientX = 0;
h.clientY = 0;
h.screenX = 0;
h.screenY = 0;
h.button = 0;
h.keyCode = 0;
h.charCode = 0;
h.ctrlKey = !1;
h.altKey = !1;
h.shiftKey = !1;
h.metaKey = !1;
h.Fd = null;
h.Gc = function(a, b) {
  var c = this.type = a.type;
  zk.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (kk) {
      var e;
      a: {
        try {
          Ak(d.nodeName);
          e = !0;
          break a;
        } catch (f) {
        }
        e = !1;
      }
      e || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = lk || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = lk || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.Fd = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Ub;
};
h.preventDefault = function() {
  Bk.Ab.preventDefault.call(this);
  var a = this.Fd;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, yk) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
h.Ba = function() {
};
var Ck = 0;
function Dk() {
}
h = Dk.prototype;
h.key = 0;
h.yb = !1;
h.qc = !1;
h.Gc = function(a, b, c, d, e, f) {
  if (ia(a)) {
    this.Ie = !0;
  } else {
    if (a && a.handleEvent && ia(a.handleEvent)) {
      this.Ie = !1;
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.hb = a;
  this.Te = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Pb = f;
  this.qc = !1;
  this.key = ++Ck;
  this.yb = !1;
};
h.handleEvent = function(a) {
  return this.Ie ? this.hb.call(this.Pb || this.src, a) : this.hb.handleEvent.call(this.hb, a);
};
var Ek = {}, Fk = {}, Gk = {}, Hk = {};
function Ik(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Ik(a, b[f], c, d, e);
    }
    return null;
  }
  a = Jk(a, b, c, !1, d, e);
  b = a.key;
  Ek[b] = a;
  return b;
}
function Jk(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var g = Fk;
  b in g || (g[b] = {Aa:0, Ia:0});
  g = g[b];
  e in g || (g[e] = {Aa:0, Ia:0}, g.Aa++);
  var g = g[e], k = ka(a), l;
  g.Ia++;
  if (g[k]) {
    l = g[k];
    for (var p = 0;p < l.length;p++) {
      if (g = l[p], g.hb == c && g.Pb == f) {
        if (g.yb) {
          break;
        }
        d || (l[p].qc = !1);
        return l[p];
      }
    }
  } else {
    l = g[k] = [], g.Aa++;
  }
  p = Kk();
  g = new Dk;
  g.Gc(c, p, a, b, e, f);
  g.qc = d;
  p.src = a;
  p.hb = g;
  l.push(g);
  Gk[k] || (Gk[k] = []);
  Gk[k].push(g);
  a.addEventListener ? a != ba && a.ye || a.addEventListener(b, p, e) : a.attachEvent(b in Hk ? Hk[b] : Hk[b] = "on" + b, p);
  return g;
}
function Kk() {
  var a = Lk, b = xk ? function(c) {
    return a.call(b.src, b.hb, c);
  } : function(c) {
    c = a.call(b.src, b.hb, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Mk(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Mk(a, b[f], c, d, e);
    }
    return null;
  }
  a = Jk(a, b, c, !0, d, e);
  b = a.key;
  Ek[b] = a;
  return b;
}
function Nk(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Nk(a, b[f], c, d, e);
    }
  } else {
    d = !!d;
    a: {
      f = Fk;
      if (b in f && (f = f[b], d in f && (f = f[d], a = ka(a), f[a]))) {
        a = f[a];
        break a;
      }
      a = null;
    }
    if (a) {
      for (f = 0;f < a.length;f++) {
        if (a[f].hb == c && a[f].capture == d && a[f].Pb == e) {
          Ok(a[f].key);
          break;
        }
      }
    }
  }
}
function Ok(a) {
  var b = Ek[a];
  if (!b || b.yb) {
    return!1;
  }
  var c = b.src, d = b.type, e = b.Te, f = b.capture;
  c.removeEventListener ? c != ba && c.ye || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Hk ? Hk[d] : Hk[d] = "on" + d, e);
  c = ka(c);
  Gk[c] && (e = Gk[c], La(e, b), 0 == e.length && delete Gk[c]);
  b.yb = !0;
  if (b = Fk[d][f][c]) {
    b.Le = !0, Pk(d, f, c, b);
  }
  delete Ek[a];
  return!0;
}
function Pk(a, b, c, d) {
  if (!d.Jc && d.Le) {
    for (var e = 0, f = 0;e < d.length;e++) {
      d[e].yb ? d[e].Te.src = null : (e != f && (d[f] = d[e]), f++);
    }
    d.length = f;
    d.Le = !1;
    0 == f && (delete Fk[a][b][c], Fk[a][b].Aa--, 0 == Fk[a][b].Aa && (delete Fk[a][b], Fk[a].Aa--), 0 == Fk[a].Aa && delete Fk[a]);
  }
}
function Qk(a) {
  var b = 0;
  if (null != a) {
    if (a = ka(a), Gk[a]) {
      a = Gk[a];
      for (var c = a.length - 1;0 <= c;c--) {
        Ok(a[c].key), b++;
      }
    }
  } else {
    Ra(Ek, function(a, c) {
      Ok(c);
      b++;
    });
  }
}
function Rk(a, b, c, d, e) {
  var f = 1;
  b = ka(b);
  if (a[b]) {
    var g = --a.Ia, k = a[b];
    k.Jc ? k.Jc++ : k.Jc = 1;
    try {
      for (var l = k.length, p = 0;p < l;p++) {
        var s = k[p];
        s && !s.yb && (f &= !1 !== Sk(s, e));
      }
    } finally {
      a.Ia = Math.max(g, a.Ia), k.Jc--, Pk(c, d, b, k);
    }
  }
  return Boolean(f);
}
function Sk(a, b) {
  a.qc && Ok(a.key);
  return a.handleEvent(b);
}
function Lk(a, b) {
  if (a.yb) {
    return!0;
  }
  var c = a.type, d = Fk;
  if (!(c in d)) {
    return!0;
  }
  var d = d[c], e, f;
  if (!xk) {
    e = b || da("window.event");
    var g = !0 in d, k = !1 in d;
    if (g) {
      if (0 > e.keyCode || void 0 != e.returnValue) {
        return!0;
      }
      a: {
        var l = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (p) {
            l = !0;
          }
        }
        if (l || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
    }
    l = new Bk;
    l.Gc(e, this);
    e = !0;
    try {
      if (g) {
        for (var s = [], u = l.currentTarget;u;u = u.parentNode) {
          s.push(u);
        }
        f = d[!0];
        f.Ia = f.Aa;
        for (var D = s.length - 1;!l.Ub && 0 <= D && f.Ia;D--) {
          l.currentTarget = s[D], e &= Rk(f, s[D], c, !0, l);
        }
        if (k) {
          for (f = d[!1], f.Ia = f.Aa, D = 0;!l.Ub && D < s.length && f.Ia;D++) {
            l.currentTarget = s[D], e &= Rk(f, s[D], c, !1, l);
          }
        }
      } else {
        e = Sk(a, l);
      }
    } finally {
      s && (s.length = 0);
    }
    return e;
  }
  c = new Bk(b, this);
  return e = Sk(a, c);
}
;function Tk() {
  Xj.call(this);
}
sa(Tk, Xj);
h = Tk.prototype;
h.ye = !0;
h.Xd = null;
h.addEventListener = function(a, b, c, d) {
  Ik(this, a, b, c, d);
};
h.removeEventListener = function(a, b, c, d) {
  Nk(this, a, b, c, d);
};
h.dispatchEvent = function(a) {
  var b = a.type || a, c = Fk;
  if (b in c) {
    if (ga(a)) {
      a = new zk(a, this);
    } else {
      if (a instanceof zk) {
        a.target = a.target || this;
      } else {
        var d = a;
        a = new zk(b, this);
        Va(a, d);
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if (b) {
      e = [];
      for (f = this;f;f = f.Xd) {
        e.push(f);
      }
      f = c[!0];
      f.Ia = f.Aa;
      for (var g = e.length - 1;!a.Ub && 0 <= g && f.Ia;g--) {
        a.currentTarget = e[g], d &= Rk(f, e[g], a.type, !0, a) && !1 != a.Vc;
      }
    }
    if (!1 in c) {
      if (f = c[!1], f.Ia = f.Aa, b) {
        for (g = 0;!a.Ub && g < e.length && f.Ia;g++) {
          a.currentTarget = e[g], d &= Rk(f, e[g], a.type, !1, a) && !1 != a.Vc;
        }
      } else {
        for (e = this;!a.Ub && e && f.Ia;e = e.Xd) {
          a.currentTarget = e, d &= Rk(f, e, a.type, !1, a) && !1 != a.Vc;
        }
      }
    }
    a = Boolean(d);
  } else {
    a = !0;
  }
  return a;
};
h.Ba = function() {
  Tk.Ab.Ba.call(this);
  Qk(this);
  this.Xd = null;
};
function Uk(a, b) {
  Xj.call(this);
  this.fc = a || 1;
  this.nc = b || ba;
  this.bd = pa(this.mh, this);
  this.Nd = ra();
}
sa(Uk, Tk);
h = Uk.prototype;
h.enabled = !1;
h.na = null;
h.setInterval = function(a) {
  this.fc = a;
  this.na && this.enabled ? (this.stop(), this.start()) : this.na && this.stop();
};
h.mh = function() {
  if (this.enabled) {
    var a = ra() - this.Nd;
    0 < a && a < 0.8 * this.fc ? this.na = this.nc.setTimeout(this.bd, this.fc - a) : (this.dispatchEvent(Vk), this.enabled && (this.na = this.nc.setTimeout(this.bd, this.fc), this.Nd = ra()));
  }
};
h.start = function() {
  this.enabled = !0;
  this.na || (this.na = this.nc.setTimeout(this.bd, this.fc), this.Nd = ra());
};
h.stop = function() {
  this.enabled = !1;
  this.na && (this.nc.clearTimeout(this.na), this.na = null);
};
h.Ba = function() {
  Uk.Ab.Ba.call(this);
  this.stop();
  delete this.nc;
};
var Vk = "tick";
function Wk(a) {
  if ("function" == typeof a.Dc) {
    return a.Dc();
  }
  if (ga(a)) {
    return a.split("");
  }
  if (fa(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Sa(a);
}
function Xk(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (fa(a) || ga(a)) {
      Ia(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.Hd) {
        d = a.Hd();
      } else {
        if ("function" != typeof a.Dc) {
          if (fa(a) || ga(a)) {
            d = [];
            for (var e = a.length, f = 0;f < e;f++) {
              d.push(f);
            }
          } else {
            d = Ta(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var e = Wk(a), f = e.length, g = 0;g < f;g++) {
        b.call(c, e[g], d && d[g], a);
      }
    }
  }
}
;function Yk(a, b) {
  this.wb = {};
  this.da = [];
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      a instanceof Yk ? (c = a.Hd(), d = a.Dc()) : (c = Ta(a), d = Sa(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
h = Yk.prototype;
h.Aa = 0;
h.Dc = function() {
  Zk(this);
  for (var a = [], b = 0;b < this.da.length;b++) {
    a.push(this.wb[this.da[b]]);
  }
  return a;
};
h.Hd = function() {
  Zk(this);
  return this.da.concat();
};
h.Ef = function() {
  return Object.prototype.hasOwnProperty.call(this.wb, "Content-Type");
};
function Zk(a) {
  if (a.Aa != a.da.length) {
    for (var b = 0, c = 0;b < a.da.length;) {
      var d = a.da[b];
      Object.prototype.hasOwnProperty.call(a.wb, d) && (a.da[c++] = d);
      b++;
    }
    a.da.length = c;
  }
  if (a.Aa != a.da.length) {
    for (var e = {}, c = b = 0;b < a.da.length;) {
      d = a.da[b], Object.prototype.hasOwnProperty.call(e, d) || (a.da[c++] = d, e[d] = 1), b++;
    }
    a.da.length = c;
  }
}
h.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.wb, a) ? this.wb[a] : b;
};
h.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.wb, a) || (this.Aa++, this.da.push(a));
  this.wb[a] = b;
};
h.zf = function() {
  return new Yk(this);
};
function $k(a) {
  return al(a || arguments.callee.caller, []);
}
function al(a, b) {
  var c = [];
  if (Ka(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(bl(a) + "(");
      for (var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = bl(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f;
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(al(a.caller, b));
      } catch (g) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function bl(a) {
  if (cl[a]) {
    return cl[a];
  }
  a = String(a);
  if (!cl[a]) {
    var b = /function ([^\(]+)/.exec(a);
    cl[a] = b ? b[1] : "[Anonymous]";
  }
  return cl[a];
}
var cl = {};
function dl(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
dl.prototype.Ce = null;
dl.prototype.Be = null;
var el = 0;
dl.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || el++;
  d || ra();
  this.hc = a;
  this.Dg = b;
  delete this.Ce;
  delete this.Be;
};
dl.prototype.Ze = function(a) {
  this.hc = a;
};
function fl(a) {
  this.Eg = a;
}
fl.prototype.Qc = null;
fl.prototype.hc = null;
fl.prototype.cd = null;
fl.prototype.Ee = null;
function gl(a, b) {
  this.name = a;
  this.value = b;
}
gl.prototype.toString = function() {
  return this.name;
};
var hl = new gl("SEVERE", 1E3), il = new gl("WARNING", 900), jl = new gl("INFO", 800), kl = new gl("CONFIG", 700), ll = new gl("FINE", 500), ml = new gl("FINEST", 300);
h = fl.prototype;
h.getParent = function() {
  return this.Qc;
};
h.De = function() {
  this.cd || (this.cd = {});
  return this.cd;
};
h.Ze = function(a) {
  this.hc = a;
};
function nl(a) {
  if (a.hc) {
    return a.hc;
  }
  if (a.Qc) {
    return nl(a.Qc);
  }
  Fa("Root logger has no level set.");
  return null;
}
h.log = function(a, b, c) {
  if (a.value >= nl(this).value) {
    for (a = this.If(a, b, c), b = "log:" + a.Dg, ba.console && (ba.console.timeStamp ? ba.console.timeStamp(b) : ba.console.markTimeline && ba.console.markTimeline(b)), ba.msWriteProfilerMark && ba.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if (c.Ee) {
        for (var e = 0, f = void 0;f = c.Ee[e];e++) {
          f(d);
        }
      }
      b = b.getParent();
    }
  }
};
h.If = function(a, b, c) {
  var d = new dl(a, String(b), this.Eg);
  if (c) {
    d.Ce = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var g;
      var k = da("window.location.href");
      if (ga(c)) {
        g = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"};
      } else {
        var l, p, s = !1;
        try {
          l = c.lineNumber || c.wi || "Not available";
        } catch (u) {
          l = "Not available", s = !0;
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || ba.$googDebugFname || k;
        } catch (D) {
          p = "Not available", s = !0;
        }
        g = !s && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:l, fileName:p, stack:c.stack || "Not available"};
      }
      e = "Message: " + va(g.message) + '\nUrl: \x3ca href\x3d"view-source:' + g.fileName + '" target\x3d"_new"\x3e' + g.fileName + "\x3c/a\x3e\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + va(g.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + va($k(f) + "-\x3e ");
    } catch (J) {
      e = "Exception trying to expose exception! You win, we lose. " + J;
    }
    d.Be = e;
  }
  return d;
};
h.info = function(a, b) {
  this.log(jl, a, b);
};
function ol(a, b) {
  a.log(ll, b, void 0);
}
var pl = {}, ql = null;
function rl(a) {
  ql || (ql = new fl(""), pl[""] = ql, ql.Ze(kl));
  var b;
  if (!(b = pl[a])) {
    b = new fl(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = rl(a.substr(0, c));
    c.De()[d] = b;
    b.Qc = c;
    pl[a] = b;
  }
  return b;
}
;function sl() {
}
sl.prototype.ee = null;
function tl(a) {
  var b;
  (b = a.ee) || (b = {}, ul(a) && (b[0] = !0, b[1] = !0), b = a.ee = b);
  return b;
}
;var vl;
function wl() {
}
sa(wl, sl);
function xl(a) {
  return(a = ul(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function ul(a) {
  if (!a.Fe && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Fe = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.Fe;
}
vl = new wl;
var yl = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function zl(a) {
  Xj.call(this);
  this.headers = new Yk;
  this.$c = a || null;
}
sa(zl, Tk);
zl.prototype.La = rl("goog.net.XhrIo");
var Al = /^https?$/i, Bl = [];
function Cl(a, b) {
  var c = new zl;
  Bl.push(c);
  b && Ik(c, "complete", b);
  Ik(c, "ready", qa(Dl, c));
  c.send(a, void 0, void 0, void 0);
}
function Dl(a) {
  a.$b();
  La(Bl, a);
}
h = zl.prototype;
h.bb = !1;
h.U = null;
h.Zc = null;
h.Ic = "";
h.Je = "";
h.gc = "";
h.Ed = !1;
h.Fc = !1;
h.Md = !1;
h.ub = !1;
h.mc = 0;
h.Bb = null;
h.Ue = "";
h.th = !1;
h.send = function(a, b, c, d) {
  if (this.U) {
    throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.Ic + "; newUri\x3d" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.Ic = a;
  this.gc = "";
  this.Je = b;
  this.Ed = !1;
  this.bb = !0;
  this.U = this.$c ? xl(this.$c) : xl(vl);
  this.Zc = this.$c ? tl(this.$c) : tl(vl);
  this.U.onreadystatechange = pa(this.Re, this);
  try {
    ol(this.La, El(this, "Opening Xhr")), this.Md = !0, this.U.open(b, a, !0), this.Md = !1;
  } catch (e) {
    ol(this.La, El(this, "Error opening Xhr: " + e.message));
    Fl(this, e);
    return;
  }
  a = c || "";
  var f = this.headers.zf();
  d && Xk(d, function(a, b) {
    f.set(b, a);
  });
  d = ba.FormData && a instanceof ba.FormData;
  "POST" != b || f.Ef() || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  Xk(f, function(a, b) {
    this.U.setRequestHeader(b, a);
  }, this);
  this.Ue && (this.U.responseType = this.Ue);
  "withCredentials" in this.U && (this.U.withCredentials = this.th);
  try {
    this.Bb && (ba.clearTimeout(this.Bb), this.Bb = null), 0 < this.mc && (ol(this.La, El(this, "Will abort after " + this.mc + "ms if incomplete")), this.Bb = ba.setTimeout(pa(this.oh, this), this.mc)), ol(this.La, El(this, "Sending request")), this.Fc = !0, this.U.send(a), this.Fc = !1;
  } catch (g) {
    ol(this.La, El(this, "Send error: " + g.message)), Fl(this, g);
  }
};
h.oh = function() {
  "undefined" != typeof aa && this.U && (this.gc = "Timed out after " + this.mc + "ms, aborting", ol(this.La, El(this, this.gc)), this.dispatchEvent("timeout"), this.abort(8));
};
function Fl(a, b) {
  a.bb = !1;
  a.U && (a.ub = !0, a.U.abort(), a.ub = !1);
  a.gc = b;
  Gl(a);
  Hl(a);
}
function Gl(a) {
  a.Ed || (a.Ed = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
h.abort = function() {
  this.U && this.bb && (ol(this.La, El(this, "Aborting")), this.bb = !1, this.ub = !0, this.U.abort(), this.ub = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Hl(this));
};
h.Ba = function() {
  this.U && (this.bb && (this.bb = !1, this.ub = !0, this.U.abort(), this.ub = !1), Hl(this, !0));
  zl.Ab.Ba.call(this);
};
h.Re = function() {
  this.Md || this.Fc || this.ub ? Il(this) : this.Pg();
};
h.Pg = function() {
  Il(this);
};
function Il(a) {
  if (a.bb && "undefined" != typeof aa) {
    if (a.Zc[1] && 4 == Jl(a) && 2 == Kl(a)) {
      ol(a.La, El(a, "Local request error detected and ignored"));
    } else {
      if (a.Fc && 4 == Jl(a)) {
        ba.setTimeout(pa(a.Re, a), 0);
      } else {
        if (a.dispatchEvent("readystatechange"), 4 == Jl(a)) {
          ol(a.La, El(a, "Request complete"));
          a.bb = !1;
          try {
            var b = Kl(a), c, d;
            a: {
              switch(b) {
                case 200:
                ;
                case 201:
                ;
                case 202:
                ;
                case 204:
                ;
                case 206:
                ;
                case 304:
                ;
                case 1223:
                  d = !0;
                  break a;
                default:
                  d = !1;
              }
            }
            if (!(c = d)) {
              var e;
              if (e = 0 === b) {
                var f = String(a.Ic).match(yl)[1] || null;
                if (!f && self.location) {
                  var g = self.location.protocol, f = g.substr(0, g.length - 1)
                }
                e = !Al.test(f ? f.toLowerCase() : "");
              }
              c = e;
            }
            if (c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success");
            } else {
              var k;
              try {
                k = 2 < Jl(a) ? a.U.statusText : "";
              } catch (l) {
                ol(a.La, "Can not get status: " + l.message), k = "";
              }
              a.gc = k + " [" + Kl(a) + "]";
              Gl(a);
            }
          } finally {
            Hl(a);
          }
        }
      }
    }
  }
}
function Hl(a, b) {
  if (a.U) {
    var c = a.U, d = a.Zc[0] ? ea : null;
    a.U = null;
    a.Zc = null;
    a.Bb && (ba.clearTimeout(a.Bb), a.Bb = null);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
      a.La.log(hl, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
    }
  }
}
function Jl(a) {
  return a.U ? a.U.readyState : 0;
}
function Kl(a) {
  try {
    return 2 < Jl(a) ? a.U.status : -1;
  } catch (b) {
    return a.La.log(il, "Can not get status: " + b.message, void 0), -1;
  }
}
function Ll(a) {
  try {
    return a.U ? a.U.responseText : "";
  } catch (b) {
    return ol(a.La, "Can not get responseText: " + b.message), "";
  }
}
function El(a, b) {
  return b + " [" + a.Je + " " + a.Ic + " " + Kl(a) + "]";
}
;var Ol, Pl = !kk && !jk || jk && jk && 9 <= wk || kk && uk("1.9.1");
jk && uk("9");
function Ql(a) {
  a = a.className;
  return ga(a) && a.match(/\S+/g) || [];
}
function Rl(a, b) {
  for (var c = Ql(a), d = Na(arguments, 1), e = c, f = 0;f < d.length;f++) {
    Ka(e, d[f]) || e.push(d[f]);
  }
  a.className = c.join(" ");
}
function Sl(a, b) {
  var c = Ql(a), d = Na(arguments, 1), c = Tl(c, d);
  a.className = c.join(" ");
}
function Tl(a, b) {
  return Ja(a, function(a) {
    return!Ka(b, a);
  });
}
function Ul(a) {
  Ka(Ql(a), "open") ? Sl(a, "open") : Rl(a, "open");
}
;function Vl() {
  var a = document;
  return a.querySelectorAll && a.querySelector ? a.querySelectorAll("HTML") : a.getElementsByTagName("HTML");
}
function Wl(a, b, c) {
  function d(c) {
    c && b.appendChild(ga(c) ? a.createTextNode(c) : c);
  }
  for (var e = 1;e < c.length;e++) {
    var f = c[e];
    !fa(f) || ja(f) && 0 < f.nodeType ? d(f) : Ia(Xl(f) ? Ma(f) : f, d);
  }
}
function Yl(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Xl(a) {
  if (a && "number" == typeof a.length) {
    if (ja(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ia(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
function Zl(a) {
  this.Bd = a || ba.document || document;
}
h = Zl.prototype;
h.createElement = function(a) {
  return this.Bd.createElement(a);
};
h.createTextNode = function(a) {
  return this.Bd.createTextNode(String(a));
};
h.appendChild = function(a, b) {
  a.appendChild(b);
};
h.append = function(a, b) {
  Wl(Yl(a), a, arguments);
};
h.De = function(a) {
  return Pl && void 0 != a.children ? a.children : Ja(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
};
function $l(a, b, c) {
  if ("string" === typeof b) {
    return a.replace(RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c);
  }
  if (q(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), c);
  }
  if (t) {
    throw[w("Invalid match arg: "), w(b)].join("");
  }
  return null;
}
var am = function() {
  function a(a, b) {
    return N.a(w, pe(a, b));
  }
  function b(a) {
    return N.a(w, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function bm(a) {
  return a.toUpperCase();
}
function cm(a) {
  return a.toLowerCase();
}
function dm(a) {
  return 2 > H(a) ? bm(a) : [w(bm(zd.c(a, 0, 1))), w(cm(zd.a(a, 1)))].join("");
}
function em(a, b) {
  if (0 >= b || b >= 2 + H(a)) {
    return Vc.a(We(G("", he.a(w, A(a)))), "");
  }
  if (q(y.a ? y.a(1, b) : y.call(null, 1, b))) {
    return new R(null, 1, 5, S, [a], null);
  }
  if (q(y.a ? y.a(2, b) : y.call(null, 2, b))) {
    return new R(null, 2, 5, S, ["", a], null);
  }
  var c = b - 2;
  return Vc.a(We(G("", Ze.c(We(he.a(w, A(a))), 0, c))), zd.a(a, c));
}
var fm = function() {
  function a(a, b, c) {
    if (y.a("" + w(b), "/(?:)/")) {
      b = em(a, c);
    } else {
      if (1 > c) {
        b = We(("" + w(a)).split(b));
      } else {
        a: {
          for (var g = c, k = Ue;;) {
            if (y.a(g, 1)) {
              b = Vc.a(k, a);
              break a;
            }
            var l = fg(b, a);
            if (q(l)) {
              var p = l, l = a.indexOf(p), p = a.substring(l + H(p)), g = g - 1, k = Vc.a(k, a.substring(0, l));
              a = p;
            } else {
              b = Vc.a(k, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (y.a(0, c)) {
      a: {
        for (c = b;;) {
          if (y.a("", null == c ? null : Pb(c))) {
            c = null == c ? null : Qb(c);
          } else {
            break a;
          }
        }
        c = void 0;
      }
    } else {
      c = b;
    }
    return c;
  }
  function b(a, b) {
    return c.c(a, b, 0);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function gm(a) {
  for (var b = hm, c = new Wa, d = a.length, e = 0;;) {
    if (y.a(d, e)) {
      return c.toString();
    }
    var f = a.charAt(e), g = K.a(b, f);
    q(g) ? c.append("" + w(g)) : c.append(f);
    e += 1;
  }
}
;function im(a, b) {
  var c = N.c(Yf, a, b);
  return G(c, ue(function(a) {
    return c === a;
  }, b));
}
var jm = function() {
  function a(a, b) {
    return H(a) < H(b) ? ob.c(Vc, b, a) : ob.c(Vc, a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = im(H, Vc.e(d, c, F([a], 0)));
      return ob.c(xe, B(a), C(a));
    }
    a.l = 2;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = C(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return Vf;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.q = function() {
    return Vf;
  };
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}(), km = function() {
  function a(a, b) {
    for (;;) {
      if (H(b) < H(a)) {
        var c = a;
        a = b;
        b = c;
      } else {
        return ob.c(function(a, b) {
          return function(a, c) {
            return pd(b, c) ? a : cd.a(a, c);
          };
        }(a, b), a, a);
      }
    }
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      a = im(function(a) {
        return-H(a);
      }, Vc.e(e, d, F([a], 0)));
      return ob.c(b, B(a), C(a));
    }
    a.l = 2;
    a.h = function(a) {
      var b = B(a);
      a = E(a);
      var d = B(a);
      a = C(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}(), lm = function() {
  function a(a, b) {
    return H(a) < H(b) ? ob.c(function(a, c) {
      return pd(b, c) ? cd.a(a, c) : a;
    }, a, a) : ob.c(cd, a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return ob.c(b, a, Vc.a(e, d));
    }
    a.l = 2;
    a.h = function(a) {
      var b = B(a);
      a = E(a);
      var d = B(a);
      a = C(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, F(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function mm(a, b) {
  return ob.c(function(a, b) {
    var e = I.c(b, 0, null), f = I.c(b, 1, null);
    return ae.a(e, f) && pd(a, e) ? Zc.a(Yc.c(a, f, K.a(a, e)), e) : a;
  }, a, b);
}
;var nm = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function om(a) {
  if (q(a)) {
    var b = fm.a(Jd(a), /-/), c = I.c(b, 0, null), b = yd(b);
    return fd(b) || y.a("aria", c) || y.a("data", c) ? a : Kd.b(am.b(Vc.a(he.a(dm, b), c)));
  }
  return null;
}
function pm(a) {
  return ob.c(function(a, c) {
    var d = K.a(a, c);
    return q(d) ? a : Zc.a(a, c);
  }, a, Pf(a));
}
var qm = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = We(ue(hb, re.a(function(a) {
      return(a ? a.g & 33554432 || a.gi || (a.g ? 0 : r(ec, a)) : r(ec, a)) ? new R(null, 1, 5, S, [a], null) : id(a) ? a : t ? new R(null, 1, 5, S, [a], null) : null;
    }, he.a(Jh, a))));
    a = N.a(Sf, a);
    return fd(b) ? a : Yc.c(a, Jh, b);
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function V(a) {
  if (a ? a.zb : a) {
    return a.zb(a);
  }
  var b;
  b = V[m(null == a ? null : a)];
  if (!b && (b = V._, !b)) {
    throw v("IInterpreter.interpret", a);
  }
  return b.call(null, a);
}
function rm(a) {
  return React.xe({render:function() {
    return this.rh(a.b ? a.b({children:this.Ha.children, onChange:this.onChange, value:this.state.value}) : a.call(null, {children:this.Ha.children, onChange:this.onChange, value:this.state.value}));
  }, componentWillReceiveProps:function(a) {
    return this.ae({value:a.value});
  }, onChange:function(a) {
    var c = this.Ha.onChange;
    if (null == c) {
      return null;
    }
    c.b ? c.b(a) : c.call(null, a);
    return this.ae({value:a.target.value});
  }, getInitialState:function() {
    return{value:this.Ha.value};
  }});
}
var sm = rm(React.d.input), tm = rm(React.d.lh);
function X(a) {
  var b = Bg, c = Sf.e(F([Xf(Pf(a), he.a(om, Pf(a))), new n(null, 2, [Jh, zj, vj, aj], null)], 0));
  a = mm(a, c);
  b = b(a);
  a = am.a(" ", we(A(b.className)));
  ib(/^[\s\xa0]*$/.test(null == a ? "" : String(a))) && (b.className = a);
  return b;
}
function um(a) {
  return pb.b(he.a(V, a));
}
V["null"] = function() {
  return null;
};
V._ = function(a) {
  return a;
};
R.prototype.zb = function() {
  var a, b = I.c(this, 0, null), c = yd(this);
  if (!(b instanceof Q || b instanceof Ac || "string" === typeof b)) {
    throw Jg.a([w(b), w(" is not a valid element name.")].join(""), new n(null, 2, [Nj, b, Hh, c], null));
  }
  var d = eg(nm, Jd(b));
  I.c(d, 0, null);
  b = I.c(d, 1, null);
  a = I.c(d, 2, null);
  d = I.c(d, 3, null);
  a = pm(new n(null, 2, [Gj, a, Jh, q(d) ? fm.a(d, /\./) : null], null));
  d = B(c);
  a = O(d) ? new R(null, 3, 5, S, [b, qm.e(F([a, d], 0)), E(c)], null) : new R(null, 3, 5, S, [b, a, c], null);
  b = I.c(a, 0, null);
  c = I.c(a, 1, null);
  a = I.c(a, 2, null);
  d = React.d[Jd(b)];
  if (q(d)) {
    b = K.c(new n(null, 2, [sj, sm, Zi, tm], null), Kd.b(b), d);
  } else {
    throw Jg.a([w("Unsupported HTML tag: "), w(Jd(b))].join(""), new n(null, 1, [Nj, b], null));
  }
  return b.call(null, X(c), hd(a) && "string" === typeof B(a) && fd(C(a)) ? V(B(a)) : q(a) ? V(a) : null);
};
Fc.prototype.zb = function() {
  return um(this);
};
Dd.prototype.zb = function() {
  return um(this);
};
Ld.prototype.zb = function() {
  return um(this);
};
Ye.prototype.zb = function() {
  return um(this);
};
Hd.prototype.zb = function() {
  return um(this);
};
function vm(a) {
  React.xe({render:function() {
    return this.rh(a.b ? a.b({children:this.Ha.children, onChange:this.onChange, value:this.state.value}) : a.call(null, {children:this.Ha.children, onChange:this.onChange, value:this.state.value}));
  }, componentWillReceiveProps:function(a) {
    return this.ae({value:a.value});
  }, onChange:function(a) {
    var c = this.Ha.onChange;
    if (null == c) {
      return null;
    }
    c.b ? c.b(a) : c.call(null, a);
    return this.ae({value:a.target.value});
  }, getInitialState:function() {
    return{value:this.Ha.value};
  }});
}
vm(React.d.input);
vm(React.d.lh);
vm(React.d.Gi);
var Y = !1, wm = {};
function xm(a) {
  if (a ? a.Fg : a) {
    return a.Fg(a);
  }
  var b;
  b = xm[m(null == a ? null : a)];
  if (!b && (b = xm._, !b)) {
    throw v("IInitState.init-state", a);
  }
  return b.call(null, a);
}
var ym = {};
function zm(a, b, c) {
  if (a ? a.Gg : a) {
    return a.Gg(a, b, c);
  }
  var d;
  d = zm[m(null == a ? null : a)];
  if (!d && (d = zm._, !d)) {
    throw v("IShouldUpdate.should-update", a);
  }
  return d.call(null, a, b, c);
}
var Am = {};
function Bm(a) {
  if (a ? a.Kg : a) {
    return a.Kg(a);
  }
  var b;
  b = Bm[m(null == a ? null : a)];
  if (!b && (b = Bm._, !b)) {
    throw v("IWillMount.will-mount", a);
  }
  return b.call(null, a);
}
var Cm = {};
function Dm(a, b) {
  if (a ? a.Td : a) {
    return a.Td(a, b);
  }
  var c;
  c = Dm[m(null == a ? null : a)];
  if (!c && (c = Dm._, !c)) {
    throw v("IDidMount.did-mount", a);
  }
  return c.call(null, a, b);
}
var Em = {};
function Fm(a) {
  if (a ? a.Lg : a) {
    return a.Lg(a);
  }
  var b;
  b = Fm[m(null == a ? null : a)];
  if (!b && (b = Fm._, !b)) {
    throw v("IWillUnmount.will-unmount", a);
  }
  return b.call(null, a);
}
var Gm = {};
function Hm(a, b, c) {
  if (a ? a.Qe : a) {
    return a.Qe(0, b, c);
  }
  var d;
  d = Hm[m(null == a ? null : a)];
  if (!d && (d = Hm._, !d)) {
    throw v("IWillUpdate.will-update", a);
  }
  return d.call(null, a, b, c);
}
var Im = {};
function Jm(a, b, c, d) {
  if (a ? a.Ud : a) {
    return a.Ud(a, b, c, d);
  }
  var e;
  e = Jm[m(null == a ? null : a)];
  if (!e && (e = Jm._, !e)) {
    throw v("IDidUpdate.did-update", a);
  }
  return e.call(null, a, b, c, d);
}
var Km = {};
function Lm(a) {
  if (a ? a.Da : a) {
    return a.Da(a);
  }
  var b;
  b = Lm[m(null == a ? null : a)];
  if (!b && (b = Lm._, !b)) {
    throw v("IRender.render", a);
  }
  return b.call(null, a);
}
var Mm = {};
function Nm(a, b) {
  if (a ? a.Vd : a) {
    return a.Vd(a, b);
  }
  var c;
  c = Nm[m(null == a ? null : a)];
  if (!c && (c = Nm._, !c)) {
    throw v("IRenderState.render-state", a);
  }
  return c.call(null, a, b);
}
function Om(a) {
  if (a ? a.Wd : a) {
    return a.Wd(a);
  }
  var b;
  b = Om[m(null == a ? null : a)];
  if (!b && (b = Om._, !b)) {
    throw v("IValue.-value", a);
  }
  return b.call(null, a);
}
Om._ = function(a) {
  return a;
};
var Pm = {};
function Qm(a) {
  if (a ? a.Lc : a) {
    return a.Lc(a);
  }
  var b;
  b = Qm[m(null == a ? null : a)];
  if (!b && (b = Qm._, !b)) {
    throw v("ICursor.-path", a);
  }
  return b.call(null, a);
}
function Rm(a) {
  if (a ? a.Nc : a) {
    return a.Nc(a);
  }
  var b;
  b = Rm[m(null == a ? null : a)];
  if (!b && (b = Rm._, !b)) {
    throw v("ICursor.-state", a);
  }
  return b.call(null, a);
}
function Sm(a) {
  if (a ? a.Mc : a) {
    return a.Mc(a);
  }
  var b;
  b = Sm[m(null == a ? null : a)];
  if (!b && (b = Sm._, !b)) {
    throw v("ICursor.-shared", a);
  }
  return b.call(null, a);
}
var Tm = {}, Um = function() {
  function a(a, b, c, d) {
    if (a ? a.Jg : a) {
      return a.Jg(a, b, c, d);
    }
    var l;
    l = Um[m(null == a ? null : a)];
    if (!l && (l = Um._, !l)) {
      throw v("IToCursor.-to-cursor", a);
    }
    return l.call(null, a, b, c, d);
  }
  function b(a, b, c) {
    if (a ? a.Ig : a) {
      return a.Ig(a, b, c);
    }
    var d;
    d = Um[m(null == a ? null : a)];
    if (!d && (d = Um._, !d)) {
      throw v("IToCursor.-to-cursor", a);
    }
    return d.call(null, a, b, c);
  }
  function c(a, b) {
    if (a ? a.Hg : a) {
      return a.Hg(a, b);
    }
    var c;
    c = Um[m(null == a ? null : a)];
    if (!c && (c = Um._, !c)) {
      throw v("IToCursor.-to-cursor", a);
    }
    return c.call(null, a, b);
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}();
function Vm(a, b) {
  if (a ? a.Oc : a) {
    return a.Oc(a, b);
  }
  var c;
  c = Vm[m(null == a ? null : a)];
  if (!c && (c = Vm._, !c)) {
    throw v("ITransact.-transact!", a);
  }
  return c.call(null, a, b);
}
function Wm(a) {
  var b = a.Ha.children;
  if ($c(b)) {
    var c = a.Ha, d;
    a: {
      var e = Y;
      try {
        Y = !0;
        d = b.b ? b.b(a) : b.call(null, a);
        break a;
      } finally {
        Y = e;
      }
      d = void 0;
    }
    a = c.children = d;
  } else {
    a = b;
  }
  return a;
}
function Xm(a) {
  return a.Ha.__om_cursor;
}
var Ym = function() {
  function a(a, b) {
    return hd(b) ? fd(b) ? c.b(a) : t ? ze.a(c.b(a), b) : null : K.a(c.b(a), b);
  }
  function b(a) {
    a = a.state;
    var b = a.__om_pending_state;
    return q(b) ? b : a.__om_state;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Zm = function() {
  function a(a, b) {
    return hd(b) ? fd(b) ? c.b(a) : t ? ze.a(c.b(a), b) : null : K.a(c.b(a), b);
  }
  function b(a) {
    return Sm(Xm(a));
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function $m(a) {
  a = a.state;
  var b = a.__om_pending_state;
  return q(b) ? (a.__om_prev_state = a.__om_state, a.__om_state = b, a.__om_pending_state = null, a) : null;
}
var an = function() {
  function a(a, b) {
    var c = q(b) ? b : a.Ha, g = c.__om_state;
    if (q(g)) {
      var k = a.state, l = k.__om_pending_state;
      k.__om_pending_state = Sf.e(F([q(l) ? l : k.__om_state, g], 0));
      return c.__om_state = null;
    }
    return null;
  }
  function b(a) {
    return c.a(a, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), bn = React.xe({render:function() {
  var a = Wm(this), b = Y;
  try {
    return Y = !0, (a ? q(q(null) ? null : a.Ga) || (a.za ? 0 : r(Km, a)) : r(Km, a)) ? Lm(a) : (a ? q(q(null) ? null : a.Oe) || (a.za ? 0 : r(Mm, a)) : r(Mm, a)) ? Nm(a, Ym.b(this)) : t ? a : null;
  } finally {
    Y = b;
  }
}, componentDidUpdate:function(a, b, c) {
  if ((b = Wm(this)) ? q(q(null) ? null : b.Ne) || (b.za ? 0 : r(Im, b)) : r(Im, b)) {
    var d = this.state, e = Y;
    try {
      Y = !0;
      var f = d.__om_prev_state;
      Jm(b, Xm({props:a}), q(f) ? f : d.__om_state, c);
    } finally {
      Y = e;
    }
  }
  return this.state.__om_prev_state = null;
}, componentWillUpdate:function(a) {
  var b = Wm(this);
  if (b ? q(q(null) ? null : b.Mg) || (b.za ? 0 : r(Gm, b)) : r(Gm, b)) {
    var c = this.state, d = Y;
    try {
      Y = !0;
      var e = c.__om_pending_state;
      Hm(b, Xm({props:a}), q(e) ? e : c.__om_state);
    } finally {
      Y = d;
    }
  }
  return $m(this);
}, componentWillUnmount:function() {
  var a = Wm(this);
  if (a ? q(q(null) ? null : a.Ei) || (a.za ? 0 : r(Em, a)) : r(Em, a)) {
    var b = Y;
    try {
      return Y = !0, Fm(a);
    } finally {
      Y = b;
    }
  } else {
    return null;
  }
}, componentDidMount:function(a) {
  var b = Wm(this);
  if (b ? q(q(null) ? null : b.Me) || (b.za ? 0 : r(Cm, b)) : r(Cm, b)) {
    var c = Y;
    try {
      return Y = !0, Dm(b, a);
    } finally {
      Y = c;
    }
  } else {
    return null;
  }
}, componentWillMount:function() {
  an.b(this);
  var a = Wm(this);
  if (a ? q(q(null) ? null : a.Di) || (a.za ? 0 : r(Am, a)) : r(Am, a)) {
    var b = Y;
    try {
      Y = !0, Bm(a);
    } finally {
      Y = b;
    }
  }
  return $m(this);
}, shouldComponentUpdate:function(a) {
  var b = Y;
  try {
    Y = !0;
    var c = this.Ha, d = this.state, e = Wm(this);
    an.a(this, a);
    return(e ? q(q(null) ? null : e.Bi) || (e.za ? 0 : r(ym, e)) : r(ym, e)) ? zm(e, Xm({props:a}), this.state.__om_pending_state) : Om(c.__om_cursor) !== Om(a.__om_cursor) ? !0 : null != d.__om_pending_state ? !0 : c.__om_index !== a.__om_index ? !0 : t ? !1 : null;
  } finally {
    Y = b;
  }
}, getInitialState:function() {
  var a = Wm(this), b = this.Ha, c = {__om_state:Sf.e(F([function() {
    var a = b.__om_init_state;
    return q(a) ? a : pf;
  }(), (a ? q(q(null) ? null : a.Ai) || (a.za ? 0 : r(wm, a)) : r(wm, a)) ? function() {
    var b = Y;
    try {
      return Y = !0, xm(a);
    } finally {
      Y = b;
    }
  }() : null], 0))};
  b.__om_init_state = null;
  return c;
}});
function cn(a) {
  return a ? q(q(null) ? null : a.Sd) ? !0 : a.za ? !1 : r(Pm, a) : r(Pm, a);
}
function dn(a, b, c, d) {
  this.value = a;
  this.state = b;
  this.path = c;
  this.M = d;
  this.p = 0;
  this.g = 2158397195;
}
h = dn.prototype;
h.I = function(a, b) {
  return Eb.c(this, b, null);
};
h.J = function(a, b, c) {
  if (Y) {
    return a = Eb.c(this.value, b, c), y.a(a, c) ? c : en.i ? en.i(a, this.state, Vc.a(this.path, b), this.M) : en.call(null, a, this.state, Vc.a(this.path, b), this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Xb = function(a, b) {
  if (Y) {
    return Fb(this.value, b);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.lb = function(a, b, c) {
  if (Y) {
    return new dn(Gb(this.value, b, c), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.J(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return this.I(null, a);
};
h.a = function(a, b) {
  return this.J(null, a, b);
};
h.Sd = !0;
h.Lc = function() {
  if (Y) {
    return this.path;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Nc = function() {
  if (Y) {
    return this.state;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Mc = function() {
  return this.M;
};
h.Eb = function() {
  if (Y) {
    throw Error([w("Cannot deref cursor during render phase: "), w(this)].join(""));
  }
  return ze.a(Tb(this.state), this.path);
};
h.Wd = function() {
  if (Y) {
    return this.value;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.F = function(a, b, c) {
  if (Y) {
    return jc(this.value, b, c);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.P = function(a, b) {
  if (Y) {
    return new dn(xb(this.value, b), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.G = function() {
  var a = this;
  if (Y) {
    return 0 < H(a.value) ? he.a(function(b) {
      var c = I.c(b, 0, null);
      b = I.c(b, 1, null);
      return new R(null, 2, 5, S, [c, en.i ? en.i(b, a.state, Vc.a(a.path, c), a.M) : en.call(null, b, a.state, Vc.a(a.path, c), a.M)], null);
    }, a.value) : null;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.H = function() {
  if (Y) {
    return ub(this.value);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.D = function(a, b) {
  if (Y) {
    return cn(b) ? y.a(this.value, Om(b)) : y.a(this.value, b);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.t = function(a, b) {
  if (Y) {
    return new dn(Sc(this.value, b), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.pa = !0;
h.ka = function() {
  return new dn(this.value, this.state, this.path, this.M);
};
h.s = function() {
  if (Y) {
    return bd(this.value);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.uc = function(a, b) {
  if (Y) {
    return new dn(Ib(this.value, b), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Pe = !0;
h.Oc = function(a, b) {
  return vg.c(this.state, b, this.path);
};
function fn(a, b, c, d) {
  this.value = a;
  this.state = b;
  this.path = c;
  this.M = d;
  this.p = 0;
  this.g = 2175181595;
}
h = fn.prototype;
h.I = function(a, b) {
  if (Y) {
    return x.c(this, b, null);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.J = function(a, b, c) {
  if (Y) {
    return x.c(this, b, c);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Xb = function(a, b) {
  if (Y) {
    return Fb(this.value, b);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.lb = function(a, b, c) {
  if (Y) {
    return en.i ? en.i(Sb(this.value, b, c), this.state, this.path, this.M) : en.call(null, Sb(this.value, b, c), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.J(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return this.I(null, a);
};
h.a = function(a, b) {
  return this.J(null, a, b);
};
h.Sd = !0;
h.Lc = function() {
  if (Y) {
    return this.path;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Nc = function() {
  if (Y) {
    return this.state;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Mc = function() {
  return this.M;
};
h.Eb = function() {
  if (Y) {
    throw Error([w("Cannot deref cursor during render phase: "), w(this)].join(""));
  }
  return ze.a(Tb(this.state), this.path);
};
h.Wd = function() {
  if (Y) {
    return this.value;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.F = function(a, b, c) {
  if (Y) {
    return jc(this.value, b, c);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.P = function(a, b) {
  if (Y) {
    return new fn(xb(this.value, b), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.G = function() {
  var a = this;
  if (Y) {
    return 0 < H(a.value) ? he.c(function(b, c) {
      return en.i ? en.i(b, a.state, Vc.a(a.path, c), a.M) : en.call(null, b, a.state, Vc.a(a.path, c), a.M);
    }, a.value, bg.q()) : null;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.H = function() {
  if (Y) {
    return ub(this.value);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.nb = function() {
  if (Y) {
    return en.i ? en.i(Pb(this.value), this.state, this.path, this.M) : en.call(null, Pb(this.value), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.ob = function() {
  if (Y) {
    return en.i ? en.i(Qb(this.value), this.state, this.path, this.M) : en.call(null, Qb(this.value), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.D = function(a, b) {
  if (Y) {
    return cn(b) ? y.a(this.value, Om(b)) : y.a(this.value, b);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.t = function(a, b) {
  if (Y) {
    return new fn(Sc(this.value, b), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.pa = !0;
h.ka = function() {
  return new fn(this.value, this.state, this.path, this.M);
};
h.s = function() {
  if (Y) {
    return bd(this.value);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.w = function(a, b) {
  if (Y) {
    return en.i ? en.i(x.a(this.value, b), this.state, Vc.a(this.path, b), this.M) : en.call(null, x.a(this.value, b), this.state, Vc.a(this.path, b), this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.qa = function(a, b, c) {
  if (Y) {
    return b < ub(this.value) ? en.i ? en.i(x.a(this.value, b), this.state, Vc.a(this.path, b), this.M) : en.call(null, x.a(this.value, b), this.state, Vc.a(this.path, b), this.M) : c;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Pe = !0;
h.Oc = function(a, b) {
  return vg.c(this.state, b, this.path);
};
function gn(a, b, c, d) {
  var e = sb(a);
  e.sf = !0;
  e.D = function(b, c) {
    if (Y) {
      return cn(c) ? y.a(a, Om(c)) : y.a(a, c);
    }
    throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
  };
  e.Pe = !0;
  e.Oc = function(a, d) {
    return vg.c(b, d, c);
  };
  e.Sd = !0;
  e.Nc = function() {
    if (Y) {
      return b;
    }
    throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
  };
  e.Lc = function() {
    if (Y) {
      return c;
    }
    throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
  };
  e.Mc = function() {
    return d;
  };
  e.ci = !0;
  e.Eb = function() {
    if (Y) {
      throw Error([w("Cannot deref cursor during render phase: "), w(this)].join(""));
    }
    return ze.a(Tb(b), c);
  };
  return e;
}
var en = function() {
  function a(a, b, c, d) {
    return cn(a) ? a : (a ? q(q(null) ? null : a.Ci) || (a.za ? 0 : r(Tm, a)) : r(Tm, a)) ? Um.i(a, b, c, d) : Lc(a) ? new fn(a, b, c, d) : O(a) ? new dn(a, b, c, d) : (a ? q(q(null) ? null : a.pa) || (a.za ? 0 : r(rb, a)) : r(rb, a)) ? gn(a, b, c, d) : t ? a : null;
  }
  function b(a, b, c) {
    return e.i(a, b, c, null);
  }
  function c(a, b) {
    return e.i(a, b, Ue, null);
  }
  function d(a) {
    return e.i(a, null, Ue, null);
  }
  var e = null, e = function(e, g, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, g);
      case 3:
        return b.call(this, e, g, k);
      case 4:
        return a.call(this, e, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.b = d;
  e.a = c;
  e.c = b;
  e.i = a;
  return e;
}(), hn = !1, jn = tg.b(Vf);
function kn() {
  hn = !1;
  for (var a = A(Tb(jn)), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.w(null, d);
      e.q ? e.q() : e.call(null);
      d += 1;
    } else {
      if (a = A(a)) {
        b = a, jd(b) ? (a = tc(b), c = uc(b), b = a, e = H(a), a = c, c = e) : (e = B(b), e.q ? e.q() : e.call(null), a = E(b), b = null, c = 0), d = 0;
      } else {
        return null;
      }
    }
  }
}
var ln = tg.b(pf), mn = function() {
  function a(a, b, c, g) {
    var k = Tb(ln);
    pd(k, g) && K.a(k, g).call(null);
    var l = a instanceof rg ? a : tg.b(a), p = function(a) {
      return function J() {
        vg.c(jn, cd, J);
        var d = Tb(a), k = en.i(d, a, Ue, b);
        return React.Oi(new bn({__om_cursor:k}, function(a, b) {
          return function(a) {
            var d = Y;
            try {
              return Y = !0, c.a ? c.a(b, a) : c.call(null, b, a);
            } finally {
              Y = d;
            }
          };
        }(d, k, a)), g);
      };
    }(l), s = xg.q();
    lc(l, s, function() {
      pd(Tb(jn), p) || vg.c(jn, Vc, p);
      if (q(hn)) {
        return null;
      }
      hn = !0;
      return "undefined" !== typeof requestAnimationFrame ? requestAnimationFrame(kn) : setTimeout(kn, 16);
    });
    vg.i(ln, Yc, g, function() {
      mc(l, s);
      vg.c(ln, Zc, g);
      return React.Vi(g);
    });
    return p();
  }
  function b(a, b, f) {
    return c.i(a, null, b, f);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.i = a;
  return c;
}(), nn = function() {
  function a(a, b, c) {
    if (!be(new Tf(null, new n(null, 7, [Xg, null, sh, null, zh, null, Ch, null, Ih, null, pj, null, Fj, null], null), null), Pf(c))) {
      throw Error([w("Assert failed: "), w(N.i(w, "build options contains invalid keys, only :key, :react-key, ", ":fn, :init-state, :state, and :opts allowed, given ", pe(", ", Pf(c)))), w("\n"), w(pg.e(F([Gd(new Ac(null, "valid?", "valid?", 1830611324, null), new Ac(null, "m", "m", -1640531418, null))], 0)))].join(""));
    }
    if (null == c) {
      return c = new bn({__om_cursor:b}, function(c) {
        var f = Y;
        try {
          return Y = !0, a.a ? a.a(b, c) : a.call(null, b, c);
        } finally {
          Y = f;
        }
      }), c.constructor = ka(a), c;
    }
    if (t) {
      var g = P(c) ? N.a(Mf, c) : c, k = K.a(g, pj), l = K.a(g, Xg), p = K.a(g, sh), g = K.a(g, Ih), s = K.a(c, Fj), u = null != s ? s.b ? s.b(b) : s.call(null, b) : b, g = null != g ? K.a(u, g) : K.a(c, zh);
      c = new bn({key:g, __om_state:p, __om_init_state:l, __om_index:Ch.b(c), __om_cursor:u}, null == k ? function(b) {
        var c = Y;
        try {
          return Y = !0, a.a ? a.a(u, b) : a.call(null, u, b);
        } finally {
          Y = c;
        }
      } : function(b) {
        var c = Y;
        try {
          return Y = !0, a.c ? a.c(u, b, k) : a.call(null, u, b, k);
        } finally {
          Y = c;
        }
      });
      c.constructor = ka(a);
      return c;
    }
    return null;
  }
  function b(a, b) {
    return c.c(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), on = function() {
  function a(a, b, c) {
    return he.c(function(b, e) {
      return nn.c(a, b, Yc.c(c, Ch, e));
    }, b, bg.q());
  }
  function b(a, b) {
    return c.c(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), pn = function() {
  function a(a, b, c, d, e, f) {
    return Vm(a, function(a, g) {
      return fd(g) ? b.m ? b.m(a, c, d, e, f) : b.call(null, a, c, d, e, f) : Ce.e(a, g, b, c, d, e, F([f], 0));
    });
  }
  function b(a, b, c, d, e) {
    return Vm(a, function(a, f) {
      return fd(f) ? b.i ? b.i(a, c, d, e) : b.call(null, a, c, d, e) : Ce.la(a, f, b, c, d, e);
    });
  }
  function c(a, b, c, d) {
    return Vm(a, function(a, e) {
      return fd(e) ? b.c ? b.c(a, c, d) : b.call(null, a, c, d) : Ce.m(a, e, b, c, d);
    });
  }
  function d(a, b, c) {
    return Vm(a, function(a, d) {
      return fd(d) ? b.a ? b.a(a, c) : b.call(null, a, c) : Ce.i(a, d, b, c);
    });
  }
  function e(a, b) {
    return Vm(a, function(a, c) {
      return fd(c) ? b.b ? b.b(a) : b.call(null, a) : Ce.c(a, c, b);
    });
  }
  var f = null, g = function() {
    function a(c, d, e, f, g, k, W) {
      var U = null;
      6 < arguments.length && (U = F(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, k, U);
    }
    function b(a, c, d, e, f, g, k) {
      return Vm(a, function(a, b) {
        return fd(b) ? N.e(c, a, d, e, f, F([g, k], 0)) : N.e(Ce, a, b, c, d, F([e, f, g, k], 0));
      });
    }
    a.l = 6;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = E(a);
      var e = B(a);
      a = E(a);
      var f = B(a);
      a = E(a);
      var g = B(a);
      a = E(a);
      var k = B(a);
      a = C(a);
      return b(c, d, e, f, g, k, a);
    };
    a.e = b;
    return a;
  }(), f = function(f, l, p, s, u, D, J) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, p);
      case 4:
        return c.call(this, f, l, p, s);
      case 5:
        return b.call(this, f, l, p, s, u);
      case 6:
        return a.call(this, f, l, p, s, u, D);
      default:
        return g.e(f, l, p, s, u, D, F(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.l = 6;
  f.h = g.h;
  f.a = e;
  f.c = d;
  f.i = c;
  f.m = b;
  f.la = a;
  f.e = g.e;
  return f;
}();
function qn(a, b) {
  var c = a.Ni;
  return q(c) ? c[b].qi() : null;
}
function rn(a, b, c) {
  var d = Y;
  try {
    Y = !0;
    var e = a.state, f = a.Ha.__om_cursor, g = Qm(f), k, l = e.__om_pending_state;
    k = q(l) ? l : e.__om_state;
    hd(b) ? e.__om_pending_state = Be(k, b, c) : e.__om_pending_state = Yc.c(k, b, c);
    return fd(g) ? vg.a(Rm(f), Ec) : vg.i(Rm(f), Ce, g, Ec);
  } finally {
    Y = d;
  }
}
;function sn(a) {
  return am.a(",", he.a(function(a) {
    return N.a(w, a);
  }, Fd(he.a(Fd, ye.i(3, 3, Ue, Fd(a))))));
}
var tn = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P(b) ? N.a(Mf, b) : b, f = K.a(e, ij);
    if (q(a)) {
      var e = 0 < a ? 1 : y.a(a, 0) ? 0 : 0 > a ? -1 : null, g = Math.abs(a), k = ("" + w(g)).split("."), l = I.c(k, 0, null), p = I.c(k, 1, null), k = 1 <= g ? 3 * ((H(l) - 1) / 3 | 0) : 0 < g ? -3 * ((3 + H($f(function() {
        return function(a) {
          return y.a(a, "0");
        };
      }(e, g, k, l, p), p))) / 3 | 0) : 0, g = g * Math.pow(10, -1 * k), l = q(f) ? ("" + w(g)).split(".") : null, p = I.c(l, 0, null);
      I.c(l, 1, null);
      var l = q(q(f) ? 0 < g : f) ? Math.pow(10, H(p) - f) : null, l = q(l) ? "" + w(l * Math.round(g / l)) : null, s = q(l) ? l.split(".") : null, p = I.c(s, 0, null), s = I.c(s, 1, null), f = q(l) ? N.a(w, Yd.b(te(de, we(new R(null, 3, 5, S, [je(f, p), le.a(H(p) - f, "0"), 0 < H(s) ? new R(null, 2, 5, S, [".", je(f - H(p), s)], null) : null], null))))) : null, f = q(f) ? parseFloat(f) : null;
      return new R(null, 2, 5, S, [e * (q(f) ? f : g), k], null);
    }
    return null;
  }
  a.l = 1;
  a.h = function(a) {
    var d = B(a);
    a = C(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Z = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P(b) ? N.a(Mf, b) : b, f = K.a(e, z), g = K.a(e, Ci), e = K.a(e, Pi);
    return q(a) ? (f = q(e) ? Math.round(Math.abs(a) * Math.pow(10, e)) / Math.pow(10, e) : Math.abs(a), f = "" + w(f), e = fm.a(f, /\./), f = I.c(e, 0, null), e = I.c(e, 1, null), f = sn(f), f = am.a(".", te(de, new R(null, 2, 5, S, [f, e], null))), 0 > a ? [w("-"), w(f)].join("") : q(q(g) ? 0 < a : g) ? [w("+"), w(f)].join("") : f) : f;
  }
  a.l = 1;
  a.h = function(a) {
    var d = B(a);
    a = C(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}();
var un = new n(null, 5, [0, "", 3, "k", 6, "m", 9, "bn", 12, "tn"], null), vn = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P(b) ? N.a(Mf, b) : b, f = K.a(e, z), g = K.a(e, Ci), k = K.c(e, Ei, "\u00a3"), e = K.a(e, ij);
    if (q(a)) {
      var e = tn.e(a, F([ij, e], 0)), f = I.c(e, 0, null), l = I.c(e, 1, null), e = Math.abs(f), p = un.b ? un.b(l) : un.call(null, l), l = q(p) ? p : [w("x10^"), w(l)].join("");
      return N.a(w, te(de, new R(null, 4, 5, S, [q(q(g) ? 0 < f : g) ? "+" : 0 > f ? "-" : null, k, e, l], null)));
    }
    return f;
  }
  a.l = 1;
  a.h = function(a) {
    var d = B(a);
    a = C(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}();
var wn, xn;
function yn(a) {
  a = P(a) ? N.a(Mf, a) : a;
  K.a(a, Hj);
  a = K.a(a, Xi);
  return q(y.a ? y.a(Oh, a) : y.call(null, Oh, a)) ? new n(null, 3, [Sh, new n(null, 2, [Vh, "Total", Lj, "Totals for the selected Portfolio Company"], null), nj, new n(null, 2, [Vh, "Average", Lj, "Averages for the selected Portfolio Company"], null), Pj, new n(null, 2, [Vh, "Benchmark", Lj, "Averages over all UK Companies"], null)], null) : q(y.a ? y.a(Aj, a) : y.call(null, Aj, a)) ? new n(null, 3, [Sh, new n(null, 2, [Vh, "Total", Lj, "Totals for the Portfolio Companies of the selected Investor"], 
  null), nj, new n(null, 2, [Vh, "Average", Lj, "Averages over the Portfolio Companies of the selected Investor"], null), Pj, new n(null, 2, [Vh, "Benchmark", Lj, "Averages over all UK Companies"], null)], null) : q(y.a ? y.a(xh, a) : y.call(null, xh, a)) ? new n(null, 3, [Sh, new n(null, 2, [Vh, "Total", Lj, "Totals for the selected Constituency"], null), nj, new n(null, 2, [Vh, "Average", Lj, "Averages over the Portfolio Companies with sites in the selected Constituency"], null), Pj, new n(null, 
  2, [Vh, "Benchmark", Lj, "Averages over all UK Companies"], null)], null) : new n(null, 3, [Sh, new n(null, 2, [Vh, "Total", Lj, "Totals over all Portfolio Companies"], null), nj, new n(null, 2, [Vh, "Average", Lj, "Averages over all Portfolio Companies"], null), Pj, new n(null, 2, [Vh, "Benchmark", Lj, "Averages over all UK Companies"], null)], null);
}
function zn(a) {
  var b = P(a) ? N.a(Mf, a) : a;
  a = K.a(b, ch);
  var c = K.a(b, Sh), d = K.a(b, Yi), b = yn(c), e = q(a) ? a : d;
  return new n(null, 3, [Sh, Sf.e(F([Sh.b(b), Xc([Pg, lh, Ah, li, mi, ni, qi, Ai, Ui], [Z.c ? Z.c(null == e ? null : Rg.b(e), z, "-") : Z.call(null, null == e ? null : Rg.b(e), z, "-"), function() {
    var a = null == e ? null : tj.b(e);
    return null == a ? null : Bh.b(a);
  }(), function() {
    var a = null == e ? null : rj.b(e);
    return null == a ? null : Bh.b(a);
  }(), Z.c ? Z.c(null == e ? null : oi.b(e), z, "-") : Z.call(null, null == e ? null : oi.b(e), z, "-"), Z.m ? Z.m(function() {
    var a = null == e ? null : tj.b(e);
    return null == a ? null : Bh.b(a);
  }(), Pi, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : tj.b(e);
    return null == a ? null : Bh.b(a);
  }(), Pi, 0, z, "-"), vn.m ? vn.m(function() {
    var a = null == e ? null : rj.b(e);
    return null == a ? null : Bh.b(a);
  }(), ij, 2, z, "-") : vn.call(null, function() {
    var a = null == e ? null : rj.b(e);
    return null == a ? null : Bh.b(a);
  }(), ij, 2, z, "-"), Z.m ? Z.m(function() {
    var a = null == e ? null : yi.b(e);
    return null == a ? null : Bh.b(a);
  }(), Pi, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : yi.b(e);
    return null == a ? null : Bh.b(a);
  }(), Pi, 0, z, "-"), Z.c ? Z.c(null == e ? null : Gi.b(e), z, "-") : Z.call(null, null == e ? null : Gi.b(e), z, "-"), vn.m ? vn.m(function() {
    var a = null == e ? null : Ui.b(e);
    return null == a ? null : Bh.b(a);
  }(), ij, 2, z, "-") : vn.call(null, function() {
    var a = null == e ? null : Ui.b(e);
    return null == a ? null : Bh.b(a);
  }(), ij, 2, z, "-")])], 0)), nj, Sf.e(F([nj.b(b), Xc([Pg, lh, Ah, li, mi, ni, qi, Ai, Ui], ["\u00a0", function() {
    var a = null == e ? null : tj.b(e);
    return null == a ? null : Lh.b(a);
  }(), function() {
    var a = null == e ? null : rj.b(e);
    return null == a ? null : Lh.b(a);
  }(), "\u00a0", Z.m ? Z.m(function() {
    var a = null == e ? null : tj.b(e);
    return null == a ? null : Lh.b(a);
  }(), Pi, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : tj.b(e);
    return null == a ? null : Lh.b(a);
  }(), Pi, 0, z, "-"), vn.m ? vn.m(function() {
    var a = null == e ? null : rj.b(e);
    return null == a ? null : Lh.b(a);
  }(), ij, 2, z, "-") : vn.call(null, function() {
    var a = null == e ? null : rj.b(e);
    return null == a ? null : Lh.b(a);
  }(), ij, 2, z, "-"), Z.m ? Z.m(function() {
    var a = null == e ? null : yi.b(e);
    return null == a ? null : Lh.b(a);
  }(), Pi, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : yi.b(e);
    return null == a ? null : Lh.b(a);
  }(), Pi, 0, z, "-"), "\u00a0", vn.m ? vn.m(function() {
    var a = null == e ? null : Ui.b(e);
    return null == a ? null : Lh.b(a);
  }(), ij, 2, z, "-") : vn.call(null, function() {
    var a = null == e ? null : Ui.b(e);
    return null == a ? null : Lh.b(a);
  }(), ij, 2, z, "-")])], 0)), Pj, Sf.e(F([Pj.b(b), Xc([Pg, lh, Ah, li, mi, ni, qi, Ai, Ui], [Z.c ? Z.c(null == d ? null : Rg.b(d), z, "-") : Z.call(null, null == d ? null : Rg.b(d), z, "-"), function() {
    var a = null == d ? null : tj.b(d);
    return null == a ? null : Lh.b(a);
  }(), function() {
    var a = null == d ? null : rj.b(d);
    return null == a ? null : Bh.b(a);
  }(), Z.c ? Z.c(null == d ? null : oi.b(d), z, "-") : Z.call(null, null == d ? null : oi.b(d), z, "-"), Z.m ? Z.m(function() {
    var a = null == d ? null : tj.b(d);
    return null == a ? null : Lh.b(a);
  }(), Pi, 0, z, "-") : Z.call(null, function() {
    var a = null == d ? null : tj.b(d);
    return null == a ? null : Lh.b(a);
  }(), Pi, 0, z, "-"), vn.m ? vn.m(function() {
    var a = null == d ? null : rj.b(d);
    return null == a ? null : Lh.b(a);
  }(), ij, 2, z, "-") : vn.call(null, function() {
    var a = null == d ? null : rj.b(d);
    return null == a ? null : Lh.b(a);
  }(), ij, 2, z, "-"), Z.m ? Z.m(function() {
    var a = null == d ? null : yi.b(d);
    return null == a ? null : Lh.b(a);
  }(), Pi, 0, z, "-") : Z.call(null, function() {
    var a = null == d ? null : yi.b(d);
    return null == a ? null : Lh.b(a);
  }(), Pi, 0, z, "-"), Z.c ? Z.c(null == d ? null : Gi.b(d), z, "-") : Z.call(null, null == d ? null : Gi.b(d), z, "-"), vn.m ? vn.m(function() {
    var a = null == d ? null : Ui.b(d);
    return null == a ? null : Lh.b(a);
  }(), ij, 2, z, "-") : vn.call(null, function() {
    var a = null == d ? null : Ui.b(d);
    return null == a ? null : Lh.b(a);
  }(), ij, 2, z, "-")])], 0))], null);
}
function An(a) {
  return null == a ? null : 0 < a ? React.d.o({className:"icon-positive"}) : 0 > a ? React.d.o({className:"icon-negative"}) : null;
}
var Cn = function Bn(b) {
  var c = zn(b), c = P(c) ? N.a(Mf, c) : c, d = K.a(c, Pj), e = K.a(c, nj), f = K.a(c, Sh);
  "undefined" === typeof xn && (xn = function(b, c, d, e, f, u, D) {
    this.selection = b;
    this.xa = c;
    this.ya = d;
    this.Qf = e;
    this.data = f;
    this.Tg = u;
    this.kg = D;
    this.p = 0;
    this.g = 393216;
  }, xn.R = !0, xn.Q = "clustermap.components.full-report.overview/t22523", xn.V = function(b, c) {
    return hc(c, "clustermap.components.full-report.overview/t22523");
  }, xn.prototype.Ga = !0, xn.prototype.Da = function() {
    var b = this;
    return React.d.S({className:"full-report-overview"}, React.d.ti(null, "Overview of latest filings"), React.d.S({className:"table-responsive"}, React.d.table({className:"table-stats"}, React.d.af(null, React.d.Cb(null, React.d.aa(null, "\u00a0"), React.d.aa(null, "Portfolio Companies"), React.d.aa(null, "Investors"), React.d.aa(null, "Constituencies"), React.d.aa(null, "Revenue"), React.d.aa({colSpan:"2"}, "Rev. change"), React.d.aa(null, "Employees"), React.d.aa({colSpan:"2"}, "Emp. change"))), 
    React.d.Xc(null, React.d.Cb(null, React.d.aa(null, React.d.o({className:"icon-info", "data-toggle":"tooltip", "data-container":"body", title:b.selection.b ? b.selection.b(Lj) : b.selection.call(null, Lj)}), V(b.selection.b ? b.selection.b(Vh) : b.selection.call(null, Vh))), React.d.r(null, function() {
      var c = Pg.b(b.selection);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = li.b(b.selection);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = Ai.b(b.selection);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = Ui.b(b.selection);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = An(Ah.b(b.selection));
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = ni.b(b.selection);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = qi.b(b.selection);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = An(lh.b(b.selection));
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = mi.b(b.selection);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }())), React.d.Cb(null, React.d.aa(null, React.d.o({className:"icon-info", "data-toggle":"tooltip", "data-container":"body", title:b.xa.b ? b.xa.b(Lj) : b.xa.call(null, Lj)}), V(b.xa.b ? b.xa.b(Vh) : b.xa.call(null, Vh))), React.d.r(null, function() {
      var c = Pg.b(b.xa);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = li.b(b.xa);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = Ai.b(b.xa);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = Ui.b(b.xa);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = An(Ah.b(b.xa));
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = ni.b(b.xa);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = qi.b(b.xa);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = An(lh.b(b.xa));
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = mi.b(b.xa);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }())), React.d.Cb(null, React.d.aa(null, React.d.o({className:"icon-info", "data-toggle":"tooltip", "data-container":"body", title:b.ya.b ? b.ya.b(Lj) : b.ya.call(null, Lj)}), V(b.ya.b ? b.ya.b(Vh) : b.ya.call(null, Vh))), React.d.r(null, function() {
      var c = Pg.b(b.ya);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = li.b(b.ya);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = Ai.b(b.ya);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = Ui.b(b.ya);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = An(Ah.b(b.ya));
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = ni.b(b.ya);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = qi.b(b.ya);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = An(lh.b(b.ya));
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = mi.b(b.ya);
      return O(c) ? React.d.span(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()))))));
  }, xn.prototype.s = function() {
    return this.kg;
  }, xn.prototype.t = function(b, c) {
    return new xn(this.selection, this.xa, this.ya, this.Qf, this.data, this.Tg, c);
  });
  return new xn(f, e, d, c, b, Bn, null);
};
var Dn = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/, hm = new n(null, 4, '\x26 \x26amp; \x3c \x26lt; \x3e \x26gt; " \x26quot;'.split(" "), null), En = new Tf(null, new n(null, 33, ["dd", null, "head", null, "a", null, "b", null, "body", null, "pre", null, "form", null, "iframe", null, "dl", null, "em", null, "fieldset", null, "i", null, "h1", null, "h2", null, "span", null, "h3", null, "script", null, "html", null, "h4", null, "h5", null, "h6", null, "table", null, "dt", null, "div", null, "style", 
null, "label", null, "option", null, "ul", null, "strong", null, "canvas", null, "textarea", null, "li", null, "ol", null], null), null);
function Fn(a) {
  return a instanceof Q || a instanceof Ac ? Jd(a) : "" + w(a);
}
function Gn(a, b) {
  return[w(" "), w(Fn(a)), w('\x3d"'), w(gm(Fn(b))), w('"')].join("");
}
function Hn(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  return!0 === a ? y.a(Tg, Tg) ? Gn(b, b) : [w(" "), w(Fn(b))].join("") : ib(a) ? "" : t ? Gn(b, a) : null;
}
function In(a) {
  return N.a(w, td.b(he.a(Hn, a)));
}
var Kn = function Jn(b) {
  if (id(b)) {
    var c, d = I.c(b, 0, null);
    b = yd(b);
    if (!(d instanceof Q || d instanceof Ac || "string" === typeof d)) {
      throw[w(d), w(" is not a valid tag name")].join("");
    }
    var e = eg(Dn, Fn(d));
    I.c(e, 0, null);
    d = I.c(e, 1, null);
    c = I.c(e, 2, null);
    e = I.c(e, 3, null);
    c = new n(null, 2, [Gj, c, Jh, q(e) ? $l(e, ".", " ") : null], null);
    e = B(b);
    c = O(e) ? new R(null, 3, 5, S, [d, Sf.e(F([c, e], 0)), E(b)], null) : new R(null, 3, 5, S, [d, c, b], null);
    b = I.c(c, 0, null);
    d = I.c(c, 1, null);
    c = I.c(c, 2, null);
    b = q(q(c) ? c : En.b ? En.b(b) : En.call(null, b)) ? [w("\x3c"), w(b), w(In(d)), w("\x3e"), w(Kn.b ? Kn.b(c) : Kn.call(null, c)), w("\x3c/"), w(b), w("\x3e")].join("") : [w("\x3c"), w(b), w(In(d)), w(y.a(Tg, Tg) ? " /\x3e" : "\x3e")].join("");
  } else {
    b = P(b) ? N.a(w, he.a(Jn, b)) : t ? Fn(b) : null;
  }
  return b;
};
var Ln = rl("goog.net.xpc");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Mn;
function Nn(a, b, c) {
  if (a ? a.zc : a) {
    return a.zc(0, b, c);
  }
  var d;
  d = Nn[m(null == a ? null : a)];
  if (!d && (d = Nn._, !d)) {
    throw v("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function On(a) {
  if (a ? a.yc : a) {
    return a.yc();
  }
  var b;
  b = On[m(null == a ? null : a)];
  if (!b && (b = On._, !b)) {
    throw v("Channel.close!", a);
  }
  return b.call(null, a);
}
function Pn(a) {
  if (a ? a.pe : a) {
    return!0;
  }
  var b;
  b = Pn[m(null == a ? null : a)];
  if (!b && (b = Pn._, !b)) {
    throw v("Handler.active?", a);
  }
  return b.call(null, a);
}
function Qn(a) {
  if (a ? a.wc : a) {
    return a.wc(a);
  }
  var b;
  b = Qn[m(null == a ? null : a)];
  if (!b && (b = Qn._, !b)) {
    throw v("Buffer.full?", a);
  }
  return b.call(null, a);
}
function Rn(a) {
  if (a ? a.xc : a) {
    return a.xc(a);
  }
  var b;
  b = Rn[m(null == a ? null : a)];
  if (!b && (b = Rn._, !b)) {
    throw v("Buffer.remove!", a);
  }
  return b.call(null, a);
}
;function Sn(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Tn(a, b, c, d) {
  this.head = a;
  this.B = b;
  this.length = c;
  this.f = d;
}
Tn.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.f[this.B];
  this.f[this.B] = null;
  this.B = (this.B + 1) % this.f.length;
  this.length -= 1;
  return a;
};
Tn.prototype.unshift = function(a) {
  this.f[this.head] = a;
  this.head = (this.head + 1) % this.f.length;
  this.length += 1;
  return null;
};
function Un(a, b) {
  a.length + 1 === a.f.length && a.resize();
  a.unshift(b);
}
Tn.prototype.resize = function() {
  var a = Array(2 * this.f.length);
  return this.B < this.head ? (Sn(this.f, this.B, a, 0, this.length), this.B = 0, this.head = this.length, this.f = a) : this.B > this.head ? (Sn(this.f, this.B, a, 0, this.f.length - this.B), Sn(this.f, 0, a, this.f.length - this.B, this.head), this.B = 0, this.head = this.length, this.f = a) : this.B === this.head ? (this.head = this.B = 0, this.f = a) : null;
};
function Vn(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop();
      (b.b ? b.b(e) : b.call(null, e)) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function Wn(a) {
  if (!(0 < a)) {
    throw Error([w("Assert failed: "), w("Can't create a ring buffer of size 0"), w("\n"), w(pg.e(F([Gd(new Ac(null, "\x3e", "\x3e", -1640531465, null), new Ac(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new Tn(0, 0, 0, Array(a));
}
function Xn(a, b) {
  this.ca = a;
  this.Rd = b;
  this.p = 0;
  this.g = 2;
}
Xn.prototype.H = function() {
  return this.ca.length;
};
Xn.prototype.wc = function() {
  return this.ca.length === this.Rd;
};
Xn.prototype.xc = function() {
  return this.ca.pop();
};
Xn.prototype.oe = function(a, b) {
  if (!ib(Qn(this))) {
    throw Error([w("Assert failed: "), w("Can't add to a full buffer"), w("\n"), w(pg.e(F([Gd(new Ac(null, "not", "not", -1640422260, null), Gd(new Ac("impl", "full?", "impl/full?", -1337857039, null), new Ac(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  return this.ca.unshift(b);
};
function Yn(a, b) {
  this.ca = a;
  this.Rd = b;
  this.p = 0;
  this.g = 2;
}
Yn.prototype.H = function() {
  return this.ca.length;
};
Yn.prototype.wc = function() {
  return!1;
};
Yn.prototype.xc = function() {
  return this.ca.pop();
};
Yn.prototype.oe = function(a, b) {
  this.ca.length === this.Rd && Rn(this);
  return this.ca.unshift(b);
};
var Zn = null, $n = Wn(32), ao = !1, bo = !1;
function co() {
  ao = !0;
  bo = !1;
  for (var a = 0;;) {
    var b = $n.pop();
    if (null != b && (b.q ? b.q() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  ao = !1;
  return 0 < $n.length ? eo.q ? eo.q() : eo.call(null) : null;
}
"undefined" !== typeof MessageChannel && (Zn = new MessageChannel, Zn.port1.onmessage = function() {
  return co();
});
function eo() {
  var a = bo;
  if (q(a ? ao : a)) {
    return null;
  }
  bo = !0;
  return "undefined" !== typeof MessageChannel ? Zn.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(co) : t ? setTimeout(co, 0) : null;
}
function fo(a) {
  Un($n, a);
  eo();
}
;function go(a) {
  Xj.call(this);
  this.Jf = a;
  this.da = [];
}
sa(go, Xj);
var ho = [];
function io(a, b, c, d) {
  "array" != m(c) && (ho[0] = c, c = ho);
  for (var e = 0;e < c.length;e++) {
    var f = Ik(b, c[e], d || a, !1, a.Jf || a);
    a.da.push(f);
  }
}
go.prototype.Ba = function() {
  go.Ab.Ba.call(this);
  Ia(this.da, Ok);
  this.da.length = 0;
};
go.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function jo(a) {
  zk.call(this, "navigate");
  this.ph = a;
}
sa(jo, zk);
function ko(a, b, c, d) {
  Xj.call(this);
  if (a && !b) {
    throw Error("Can't use invisible history without providing a blank page.");
  }
  var e;
  c ? e = c : (e = "history_state" + lo, document.write(ta(no, e, e)), e = ga(e) ? document.getElementById(e) : e);
  this.cc = e;
  this.Va = c ? Yl(c) ? Yl(c).parentWindow || Yl(c).defaultView : window : window;
  this.kf = this.Va.location.href.split("#")[0];
  this.Ec = b;
  jk && !b && (this.Ec = "https" == window.location.protocol ? "https:///" : 'javascript:""');
  this.na = new Uk(oo);
  b = qa(ak, this.na);
  this.kc || (this.kc = []);
  this.kc.push(pa(b, void 0));
  this.Db = !a;
  this.sb = new go(this);
  if (a || po) {
    d ? a = d : (a = "history_iframe" + lo, d = this.Ec ? 'src\x3d"' + va(this.Ec) + '"' : "", document.write(ta(qo, a, d)), a = ga(a) ? document.getElementById(a) : a), this.Qb = a, this.bf = !0;
  }
  po && (io(this.sb, this.Va, "load", this.Ng), this.$e = this.Ad = !1);
  this.Db ? ro(this, so(this), !0) : to(this, this.cc.value);
  lo++;
}
sa(ko, Tk);
ko.prototype.ac = !1;
ko.prototype.Tb = !1;
ko.prototype.Rb = null;
var uo = jk && jk && 8 <= wk || kk && uk("1.9.2") || lk && uk("532.1"), po = jk && !(jk && 8 <= wk);
h = ko.prototype;
h.Sb = null;
h.Ba = function() {
  ko.Ab.Ba.call(this);
  this.sb.$b();
  vo(this, !1);
};
function vo(a, b) {
  if (b != a.ac) {
    if (po && !a.Ad) {
      a.$e = b;
    } else {
      if (b) {
        if (ik ? io(a.sb, a.Va.document, wo, a.Rg) : kk && io(a.sb, a.Va, "pageshow", a.Qg), uo && a.Db) {
          io(a.sb, a.Va, "hashchange", a.Og), a.ac = !0, a.dispatchEvent(new jo(so(a)));
        } else {
          if (!jk || a.Ad) {
            io(a.sb, a.na, Vk, pa(a.fe, a, !0)), a.ac = !0, po || (a.Rb = so(a), a.dispatchEvent(new jo(so(a)))), a.na.start();
          }
        }
      } else {
        a.ac = !1;
        var c = a.sb;
        Ia(c.da, Ok);
        c.da.length = 0;
        a.na.stop();
      }
    }
  }
}
h.Ng = function() {
  this.Ad = !0;
  this.cc.value && to(this, this.cc.value, !0);
  vo(this, this.$e);
};
h.Qg = function(a) {
  a.Fd.persisted && (vo(this, !1), vo(this, !0));
};
h.Og = function() {
  var a = xo(this.Va);
  a != this.Rb && yo(this, a);
};
function so(a) {
  return null != a.Sb ? a.Sb : a.Db ? xo(a.Va) : zo(a) || "";
}
function Ao(a, b) {
  so(a) != b && (a.Db ? (ro(a, b, !1), uo || jk && to(a, b, !1, void 0), a.ac && a.fe()) : (to(a, b, !1), a.Sb = a.Rb = a.cc.value = b, a.dispatchEvent(new jo(b))));
}
function xo(a) {
  a = a.location.href;
  var b = a.indexOf("#");
  return 0 > b ? "" : a.substring(b + 1);
}
function ro(a, b, c) {
  var d = a.Va.location;
  a = a.kf;
  var e = -1 != d.href.indexOf("#");
  if (po || e || b) {
    a += "#" + b;
  }
  a != d.href && (c ? d.replace(a) : d.href = a);
}
function to(a, b, c, d) {
  if (a.bf || b != zo(a)) {
    if (a.bf = !1, b = encodeURIComponent(String(b)), jk) {
      var e = a.Qb.contentDocument || a.Qb.contentWindow.document;
      e.open("text/html", c ? "replace" : void 0);
      e.write(ta(Bo, va(d || a.Va.document.title), b));
      e.close();
    } else {
      if (b = a.Ec + "#" + b, a = a.Qb.contentWindow) {
        c ? a.location.replace(b) : a.location.href = b;
      }
    }
  }
}
function zo(a) {
  if (jk) {
    return a = a.Qb.contentDocument || a.Qb.contentWindow.document, a.body ? decodeURIComponent(a.body.innerHTML.replace(/\+/g, " ")) : null;
  }
  var b = a.Qb.contentWindow;
  if (b) {
    var c;
    try {
      c = decodeURIComponent(xo(b).replace(/\+/g, " "));
    } catch (d) {
      return a.Tb || (!0 != a.Tb && a.na.setInterval(Co), a.Tb = !0), null;
    }
    a.Tb && (!1 != a.Tb && a.na.setInterval(oo), a.Tb = !1);
    return c || null;
  }
  return null;
}
h.fe = function() {
  if (this.Db) {
    var a = xo(this.Va);
    a != this.Rb && yo(this, a);
  }
  if (!this.Db || po) {
    if (a = zo(this) || "", null == this.Sb || a == this.Sb) {
      this.Sb = null, a != this.Rb && yo(this, a);
    }
  }
};
function yo(a, b) {
  a.Rb = a.cc.value = b;
  a.Db ? (po && to(a, b), ro(a, b)) : to(a, b);
  a.dispatchEvent(new jo(so(a)));
}
h.Rg = function() {
  this.na.stop();
  this.na.start();
};
var wo = ["mousedown", "keydown", "mousemove"], Bo = "\x3ctitle\x3e%s\x3c/title\x3e\x3cbody\x3e%s\x3c/body\x3e", qo = '\x3ciframe id\x3d"%s" style\x3d"display:none" %s\x3e\x3c/iframe\x3e', no = '\x3cinput type\x3d"text" name\x3d"%s" id\x3d"%s" style\x3d"display:none"\x3e', lo = 0, oo = 150, Co = 1E4;
function Do(a) {
  a = null == a ? null : new Date(a);
  a = null == a ? null : a.getYear();
  return null == a ? null : a + 1900;
}
;var Eo, Fo;
function Go(a, b, c, d) {
  var e = B(d);
  return(d = E(d)) ? (a = a.a ? a.a(c, e) : a.call(null, c, e), O(a) ? React.d.S(X(a), React.d.ib({href:b}, "\u00a0(", V(H(d)), " more...)")) : React.d.S(null, V(a), React.d.ib({href:b}, "\u00a0(", V(H(d)), " more...)"))) : a.a ? a.a(c, e) : a.call(null, c, e);
}
var Io = function Ho(b, c, d) {
  var e = P(d) ? N.a(Mf, d) : d, f = K.a(e, Rj), g = K.a(e, vh), k = f.a ? f.a(Oh, b) : f.call(null, Oh, b);
  "undefined" === typeof Eo && (Eo = function(b, c, d, e, f, g, k, W, U, ha) {
    this.rb = b;
    this.ja = c;
    this.T = d;
    this.Ea = e;
    this.Pf = f;
    this.Vg = g;
    this.u = k;
    this.N = W;
    this.eh = U;
    this.ig = ha;
    this.p = 0;
    this.g = 393216;
  }, Eo.R = !0, Eo.Q = "clustermap.components.full-report.company-site-list/t22399", Eo.V = function(b, c) {
    return hc(c, "clustermap.components.full-report.company-site-list/t22399");
  }, Eo.prototype.Ga = !0, Eo.prototype.Da = function() {
    var b = this;
    return React.d.Cb(null, function() {
      var c = b.ja.a ? b.ja.a(Oh, b.N) : b.ja.call(null, Oh, b.N);
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Zh.b(b.N);
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Go(b.ja, b.rb, Aj, yj.b(b.N));
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Go(b.ja, b.rb, xh, function() {
        var c = b.N, d = null == c ? null : nh.b(c);
        return null == d ? null : te(function() {
          return function(b) {
            return y.a("uk_constituencies", uh.b(b));
          };
        }(c, d), d);
      }());
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }());
  }, Eo.prototype.s = function() {
    return this.ig;
  }, Eo.prototype.t = function(b, c) {
    return new Eo(this.rb, this.ja, this.T, this.Ea, this.Pf, this.Vg, this.u, this.N, this.eh, c);
  });
  return new Eo(k, g, f, e, e, d, c, b, Ho, null);
}, Ko = function Jo(b, c, d) {
  "undefined" === typeof Fo && (Fo = function(b, c, d, k, l) {
    this.Ea = b;
    this.u = c;
    this.We = d;
    this.Cf = k;
    this.jg = l;
    this.p = 0;
    this.g = 393216;
  }, Fo.R = !0, Fo.Q = "clustermap.components.full-report.company-site-list/t22413", Fo.V = function(b, c) {
    return hc(c, "clustermap.components.full-report.company-site-list/t22413");
  }, Fo.prototype.Ga = !0, Fo.prototype.Da = function() {
    var b = this;
    return React.d.S({className:"full-report-list"}, React.d.S({className:"table-responsive"}, React.d.table({className:"table"}, React.d.af(null, React.d.Cb(null, React.d.aa(null, "Portfolio Company"), React.d.aa(null, "Postcode"), React.d.aa(null, "Investor"), React.d.aa(null, "Constituency"))), function() {
      var c = on.c(Io, fh.b(b.We), new n(null, 2, [Ih, Ij, pj, b.Ea], null));
      return O(c) ? React.d.Xc(X(c), null) : React.d.Xc(null, V(c));
    }())));
  }, Fo.prototype.s = function() {
    return this.jg;
  }, Fo.prototype.t = function(b, c) {
    return new Fo(this.Ea, this.u, this.We, this.Cf, c);
  });
  return new Fo(d, c, b, Jo, null);
};
var Lo, Mo;
function No(a, b, c, d) {
  var e = B(d);
  return(d = E(d)) ? (a = a.a ? a.a(c, e) : a.call(null, c, e), O(a) ? React.d.S(X(a), React.d.ib({href:b}, "\u00a0(", V(H(d)), " more...)")) : React.d.S(null, V(a), React.d.ib({href:b}, "\u00a0(", V(H(d)), " more...)"))) : a.a ? a.a(c, e) : a.call(null, c, e);
}
function Oo(a) {
  return null == a ? null : 0 < a ? React.d.o({className:"icon-positive"}) : 0 > a ? React.d.o({className:"icon-negative"}) : null;
}
var Qo = function Po(b, c, d) {
  var e = P(d) ? N.a(Mf, d) : d, f = K.a(e, Rj), g = K.a(e, vh), k = f.a ? f.a(Oh, b) : f.call(null, Oh, b);
  "undefined" === typeof Lo && (Lo = function(b, c, d, e, f, g, k, W, U, ha) {
    this.rb = b;
    this.ja = c;
    this.T = d;
    this.Ea = e;
    this.Of = f;
    this.Ug = g;
    this.u = k;
    this.N = W;
    this.Sc = U;
    this.gg = ha;
    this.p = 0;
    this.g = 393216;
  }, Lo.R = !0, Lo.Q = "clustermap.components.full-report.company-list/t22360", Lo.V = function(b, c) {
    return hc(c, "clustermap.components.full-report.company-list/t22360");
  }, Lo.prototype.Ga = !0, Lo.prototype.Da = function() {
    var b = this;
    return React.d.Cb(null, function() {
      var c = b.ja.a ? b.ja.a(Oh, b.N) : b.ja.call(null, Oh, b.N);
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Zh.b(b.N);
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = No(b.ja, b.rb, Aj, yj.b(b.N));
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = No(b.ja, b.rb, xh, function() {
        var c = b.N, d = null == c ? null : nh.b(c);
        return null == d ? null : te(function() {
          return function(b) {
            return y.a("uk_constituencies", uh.b(b));
          };
        }(c, d), d);
      }());
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = vn.m ? vn.m(ai.b(b.N), ij, 2, z, "-") : vn.call(null, ai.b(b.N), ij, 2, z, "-");
      return O(c) ? React.d.r(X(c), React.d.small(null, "\u00a0(", V(Do(eh.b(b.N))), ")")) : React.d.r(null, V(c), React.d.small(null, "\u00a0(", V(Do(eh.b(b.N))), ")"));
    }(), function() {
      var c = Oo(Ri.b(b.N));
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = vn.m ? vn.m(Ri.b(b.N), ij, 2, z, "-") : vn.call(null, Ri.b(b.N), ij, 2, z, "-");
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Z.m ? Z.m(mj.b(b.N), Pi, 0, z, "-") : Z.call(null, mj.b(b.N), Pi, 0, z, "-");
      return O(c) ? React.d.r(X(c), React.d.small(null, "\u00a0(", V(Do(eh.b(b.N))), ")")) : React.d.r(null, V(c), React.d.small(null, "\u00a0(", V(Do(eh.b(b.N))), ")"));
    }(), function() {
      var c = Oo(dh.b(b.N));
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Z.m ? Z.m(dh.b(b.N), Pi, 0, z, "-") : Z.call(null, dh.b(b.N), Pi, 0, z, "-");
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }());
  }, Lo.prototype.s = function() {
    return this.gg;
  }, Lo.prototype.t = function(b, c) {
    return new Lo(this.rb, this.ja, this.T, this.Ea, this.Of, this.Ug, this.u, this.N, this.Sc, c);
  });
  return new Lo(k, g, f, e, e, d, c, b, Po, null);
}, So = function Ro(b, c, d) {
  "undefined" === typeof Mo && (Mo = function(b, c, d, k, l) {
    this.Ea = b;
    this.u = c;
    this.Xe = d;
    this.Bf = k;
    this.hg = l;
    this.p = 0;
    this.g = 393216;
  }, Mo.R = !0, Mo.Q = "clustermap.components.full-report.company-list/t22380", Mo.V = function(b, c) {
    return hc(c, "clustermap.components.full-report.company-list/t22380");
  }, Mo.prototype.Ga = !0, Mo.prototype.Da = function() {
    var b = this;
    return React.d.S({className:"full-report-list"}, React.d.S({className:"table-responsive"}, React.d.table({className:"table"}, React.d.af(null, React.d.Cb(null, React.d.aa(null, "Portfolio Company"), React.d.aa(null, "Postcode"), React.d.aa(null, "Investor"), React.d.aa(null, "Constituency"), React.d.aa(null, "Revenue"), React.d.aa({colSpan:"2"}, "Rev. change"), React.d.aa(null, "Employees"), React.d.aa({colSpan:"2"}, "Emp. change"))), function() {
      var c = on.c(Qo, fh.b(b.Xe), new n(null, 2, [Ih, Ij, pj, b.Ea], null));
      return O(c) ? React.d.Xc(X(c), null) : React.d.Xc(null, V(c));
    }())));
  }, Mo.prototype.s = function() {
    return this.hg;
  }, Mo.prototype.t = function(b, c) {
    return new Mo(this.Ea, this.u, this.Xe, this.Bf, c);
  });
  return new Mo(d, c, b, Ro, null);
};
function To(a) {
  if (a ? a.qe : a) {
    return a.qe();
  }
  var b;
  b = To[m(null == a ? null : a)];
  if (!b && (b = To._, !b)) {
    throw v("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function Uo(a, b) {
  if (a ? a.re : a) {
    return a.re(0, b);
  }
  var c;
  c = Uo[m(null == a ? null : a)];
  if (!c && (c = Uo._, !c)) {
    throw v("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function Vo(a, b, c) {
  this.L = a;
  this.buffer = b;
  this.Ld = c;
}
Vo.prototype.qe = function() {
  return 0 === this.buffer.length ? (this.Ld += 1, this.L[this.Ld]) : this.buffer.pop();
};
Vo.prototype.re = function(a, b) {
  return this.buffer.push(b);
};
function Wo(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return q(b) ? b : "," === a;
}
var Xo = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(N.a(w, b));
  }
  a.l = 1;
  a.h = function(a) {
    B(a);
    a = C(a);
    return b(0, a);
  };
  a.e = b;
  return a;
}();
function Yo(a, b) {
  for (var c = new Wa(b), d = To(a);;) {
    var e;
    if (!(e = null == d) && !(e = Wo(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? Zo.b ? Zo.b(e) : Zo.call(null, e) : f : f : f;
    }
    if (e) {
      return Uo(a, d), c.toString();
    }
    c.append(d);
    d = To(a);
  }
}
function $o(a) {
  for (;;) {
    var b = To(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var ap = gg("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?"), bp = gg("([-+]?[0-9]+)/([0-9]+)"), cp = gg("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?"), dp = gg("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
function ep(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === c.length ? c[0] : c;
}
function fp(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
var gp = gg("[0-9A-Fa-f]{2}"), hp = gg("[0-9A-Fa-f]{4}");
function ip(a, b, c, d) {
  return q(eg(a, d)) ? d : Xo.e(b, F(["Unexpected unicode escape \\", c, d], 0));
}
function jp(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function kp(a) {
  var b = To(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  return q(c) ? c : "x" === b ? jp(ip(gp, a, b, (new Wa(To(a), To(a))).toString())) : "u" === b ? jp(ip(hp, a, b, (new Wa(To(a), To(a), To(a), To(a))).toString())) : /[^0-9]/.test(b) ? t ? Xo.e(a, F(["Unexpected unicode escape \\", b], 0)) : null : String.fromCharCode(b);
}
function lp(a, b) {
  for (var c = nc(Ue);;) {
    var d;
    a: {
      d = Wo;
      for (var e = b, f = To(e);;) {
        if (q(d.b ? d.b(f) : d.call(null, f))) {
          f = To(e);
        } else {
          d = f;
          break a;
        }
      }
      d = void 0;
    }
    q(d) || Xo.e(b, F(["EOF while reading"], 0));
    if (a === d) {
      return pc(c);
    }
    e = Zo.b ? Zo.b(d) : Zo.call(null, d);
    q(e) ? d = e.a ? e.a(b, d) : e.call(null, b, d) : (Uo(b, d), d = mp.i ? mp.i(b, !0, null, !0) : mp.call(null, b, !0, null));
    c = d === b ? c : oc(c, d);
  }
}
function np(a, b) {
  return Xo.e(a, F(["Reader for ", b, " not implemented yet"], 0));
}
function op(a, b) {
  var c = To(a), d = pp.b ? pp.b(c) : pp.call(null, c);
  if (q(d)) {
    return d.a ? d.a(a, b) : d.call(null, a, b);
  }
  d = qp.a ? qp.a(a, c) : qp.call(null, a, c);
  return q(d) ? d : Xo.e(a, F(["No dispatch macro for ", c], 0));
}
function rp(a, b) {
  return Xo.e(a, F(["Unmached delimiter ", b], 0));
}
function sp(a) {
  return N.a(Gd, lp(")", a));
}
function tp(a) {
  return lp("]", a);
}
function up(a) {
  var b = lp("}", a);
  var c = H(b);
  if ("number" !== typeof c || isNaN(c) || Infinity === c || parseFloat(c) !== parseInt(c, 10)) {
    throw Error([w("Argument must be an integer: "), w(c)].join(""));
  }
  0 !== (c & 1) && Xo.e(a, F(["Map literal must contain an even number of forms"], 0));
  return N.a(Mf, b);
}
function vp(a) {
  for (var b = new Wa, c = To(a);;) {
    if (null == c) {
      return Xo.e(a, F(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(kp(a)), c = To(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      if (z) {
        b.append(c), c = To(a);
      } else {
        return null;
      }
    }
  }
}
function xp(a, b) {
  var c = Yo(a, b);
  if (q(-1 != c.indexOf("/"))) {
    c = Dc.a(zd.c(c, 0, c.indexOf("/")), zd.c(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = Dc.b(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : t ? d : null
  }
  return c;
}
function yp(a) {
  var b = Yo(a, To(a)), c = fp(dp, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? Xo.e(a, F(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Kd.a(d.substring(0, d.indexOf("/")), c) : Kd.b(b);
}
function zp(a) {
  return function(b) {
    return xb(xb(Gc, mp.i ? mp.i(b, !0, null, !0) : mp.call(null, b, !0, null)), a);
  };
}
function Ap() {
  return function(a) {
    return Xo.e(a, F(["Unreadable form"], 0));
  };
}
function Bp(a) {
  var b;
  b = mp.i ? mp.i(a, !0, null, !0) : mp.call(null, a, !0, null);
  b = b instanceof Ac ? new n(null, 1, [Nj, b], null) : "string" === typeof b ? new n(null, 1, [Nj, b], null) : b instanceof Q ? new qf([b, !0]) : t ? b : null;
  O(b) || Xo.e(a, F(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = mp.i ? mp.i(a, !0, null, !0) : mp.call(null, a, !0, null);
  return(c ? c.g & 262144 || c.xf || (c.g ? 0 : r(Wb, c)) : r(Wb, c)) ? Sc(c, Sf.e(F([bd(c), b], 0))) : Xo.e(a, F(["Metadata can only be applied to IWithMetas"], 0));
}
function Cp(a) {
  return Wf(lp("}", a));
}
function Dp(a) {
  return gg(vp(a));
}
function Ep(a) {
  mp.i ? mp.i(a, !0, null, !0) : mp.call(null, a, !0, null);
  return a;
}
function Zo(a) {
  return'"' === a ? vp : ":" === a ? yp : ";" === a ? $o : "'" === a ? zp(new Ac(null, "quote", "quote", -1532577739, null)) : "@" === a ? zp(new Ac(null, "deref", "deref", -1545057749, null)) : "^" === a ? Bp : "`" === a ? np : "~" === a ? np : "(" === a ? sp : ")" === a ? rp : "[" === a ? tp : "]" === a ? rp : "{" === a ? up : "}" === a ? rp : "\\" === a ? To : "#" === a ? op : null;
}
function pp(a) {
  return "{" === a ? Cp : "\x3c" === a ? Ap() : '"' === a ? Dp : "!" === a ? $o : "_" === a ? Ep : null;
}
function mp(a, b, c) {
  for (;;) {
    var d = To(a);
    if (null == d) {
      return q(b) ? Xo.e(a, F(["EOF while reading"], 0)) : c;
    }
    if (!Wo(d)) {
      if (";" === d) {
        a = $o.a ? $o.a(a, d) : $o.call(null, a);
      } else {
        if (t) {
          var e = Zo(d);
          if (q(e)) {
            e = e.a ? e.a(a, d) : e.call(null, a, d);
          } else {
            var e = a, f = void 0;
            !(f = !/[^0-9]/.test(d)) && (f = void 0, f = "+" === d || "-" === d) && (f = To(e), Uo(e, f), f = !/[^0-9]/.test(f));
            if (f) {
              a: {
                e = a;
                d = new Wa(d);
                for (f = To(e);;) {
                  var g;
                  g = null == f;
                  g || (g = (g = Wo(f)) ? g : Zo.b ? Zo.b(f) : Zo.call(null, f));
                  if (q(g)) {
                    Uo(e, f);
                    d = d.toString();
                    if (q(fp(ap, d))) {
                      if (g = ep(ap, d), f = g[2], null == f || 1 > f.length) {
                        var f = "-" === g[1] ? -1 : 1, k = q(g[3]) ? [g[3], 10] : q(g[4]) ? [g[4], 16] : q(g[5]) ? [g[5], 8] : q(g[7]) ? [g[7], parseInt(g[7])] : z ? [null, null] : null;
                        g = k[0];
                        k = k[1];
                        f = null == g ? null : f * parseInt(g, k);
                      } else {
                        f = 0;
                      }
                    } else {
                      q(fp(bp, d)) ? (f = ep(bp, d), f = parseInt(f[1]) / parseInt(f[2])) : f = q(fp(cp, d)) ? parseFloat(d) : null;
                    }
                    e = q(f) ? f : Xo.e(e, F(["Invalid number format [", d, "]"], 0));
                    break a;
                  }
                  d.append(f);
                  f = To(e);
                }
                e = void 0;
              }
            } else {
              e = t ? xp(a, d) : null;
            }
          }
          if (e !== a) {
            return e;
          }
        } else {
          return null;
        }
      }
    }
  }
}
function Fp(a) {
  if (y.a(3, H(a))) {
    return a;
  }
  if (3 < H(a)) {
    return zd.c(a, 0, 3);
  }
  if (t) {
    for (a = new Wa(a);;) {
      if (3 > a.kb.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var Gp = function() {
  var a = new R(null, 13, 5, S, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new R(null, 13, 5, S, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return K.a(q(d) ? b : a, c);
  };
}(), Hp = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Ip(a) {
  a = parseInt(a);
  return ib(isNaN(a)) ? a : null;
}
function Jp(a, b, c, d) {
  a <= b && b <= c || Xo.e(null, F([[w(d), w(" Failed:  "), w(a), w("\x3c\x3d"), w(b), w("\x3c\x3d"), w(c)].join("")], 0));
  return b;
}
function Kp(a) {
  var b = eg(Hp, a);
  I.c(b, 0, null);
  var c = I.c(b, 1, null), d = I.c(b, 2, null), e = I.c(b, 3, null), f = I.c(b, 4, null), g = I.c(b, 5, null), k = I.c(b, 6, null), l = I.c(b, 7, null), p = I.c(b, 8, null), s = I.c(b, 9, null), u = I.c(b, 10, null);
  if (ib(b)) {
    return Xo.e(null, F([[w("Unrecognized date/time syntax: "), w(a)].join("")], 0));
  }
  a = Ip(c);
  var b = function() {
    var a = Ip(d);
    return q(a) ? a : 1;
  }(), c = function() {
    var a = Ip(e);
    return q(a) ? a : 1;
  }(), D = function() {
    var a = Ip(f);
    return q(a) ? a : 0;
  }(), J = function() {
    var a = Ip(g);
    return q(a) ? a : 0;
  }(), M = function() {
    var a = Ip(k);
    return q(a) ? a : 0;
  }(), W = function() {
    var a = Ip(Fp(l));
    return q(a) ? a : 0;
  }(), p = (y.a(p, "-") ? -1 : 1) * (60 * function() {
    var a = Ip(s);
    return q(a) ? a : 0;
  }() + function() {
    var a = Ip(u);
    return q(a) ? a : 0;
  }());
  return new R(null, 8, 5, S, [a, Jp(1, b, 12, "timestamp month field must be in range 1..12"), Jp(1, c, Gp.a ? Gp.a(b, 0 === ud(a, 4) && (0 !== ud(a, 100) || 0 === ud(a, 400))) : Gp.call(null, b, 0 === ud(a, 4) && (0 !== ud(a, 100) || 0 === ud(a, 400))), "timestamp day field must be in range 1..last day in month"), Jp(0, D, 23, "timestamp hour field must be in range 0..23"), Jp(0, J, 59, "timestamp minute field must be in range 0..59"), Jp(0, M, y.a(J, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), 
  Jp(0, W, 999, "timestamp millisecond field must be in range 0..999"), p], null);
}
var Lp = tg.b(new n(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = Kp(a), q(b)) {
      a = I.c(b, 0, null);
      var c = I.c(b, 1, null), d = I.c(b, 2, null), e = I.c(b, 3, null), f = I.c(b, 4, null), g = I.c(b, 5, null), k = I.c(b, 6, null);
      b = I.c(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, k) - 6E4 * b);
    } else {
      b = Xo.e(null, F([[w("Unrecognized date/time syntax: "), w(a)].join("")], 0));
    }
  } else {
    b = Xo.e(null, F(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Hg(a) : Xo.e(null, F(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return id(a) ? xe(ff, a) : Xo.e(null, F(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (id(a)) {
    var b = [];
    a = A(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.w(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = A(a)) {
          c = a, jd(c) ? (a = tc(c), e = uc(c), c = a, d = H(a), a = e) : (a = B(c), b.push(a), a = E(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (O(a)) {
    b = {};
    a = A(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = c.w(null, e), f = I.c(g, 0, null), g = I.c(g, 1, null);
        b[Jd(f)] = g;
        e += 1;
      } else {
        if (a = A(a)) {
          jd(a) ? (d = tc(a), a = uc(a), c = d, d = H(d)) : (d = B(a), c = I.c(d, 0, null), d = I.c(d, 1, null), b[Jd(c)] = d, a = E(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return t ? Xo.e(null, F([[w("JS literal expects a vector or map containing "), w("only string or unqualified keyword keys")].join("")], 0)) : null;
}], null)), Mp = tg.b(null);
function qp(a, b) {
  var c = xp(a, b), d = K.a(Tb(Lp), "" + w(c)), e = Tb(Mp);
  return q(d) ? d.b ? d.b(mp(a, !0, null)) : d.call(null, mp(a, !0, null)) : q(e) ? e.a ? e.a(c, mp(a, !0, null)) : e.call(null, c, mp(a, !0, null)) : t ? Xo.e(a, F(["Could not find tag parser for ", "" + w(c), " in ", pg.e(F([Pf(Tb(Lp))], 0))], 0)) : null;
}
;function Np(a) {
  if ("string" === typeof a) {
    return a;
  }
  if ($c(a)) {
    var b = a.prototype.Th;
    return q(b) ? [w("[crateGroup\x3d"), w(b), w("]")].join("") : a;
  }
  return a instanceof Q ? Jd(a) : t ? a : null;
}
var Op = function() {
  function a(a, b) {
    return jQuery(Np(a), b);
  }
  function b(a) {
    return jQuery(Np(a));
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
h = jQuery.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Eb.a(this, c);
      case 3:
        return Eb.c(this, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return Eb.a(this, a);
};
h.a = function(a, b) {
  return Eb.c(this, a, b);
};
h.he = !0;
h.fa = function(a, b) {
  return Ic.a(this, b);
};
h.ga = function(a, b, c) {
  return Ic.c(this, b, c);
};
h.ud = !0;
h.I = function(a, b) {
  var c = this.slice(b, b + 1);
  return q(c) ? c : null;
};
h.J = function(a, b, c) {
  return x.c(this, b, c);
};
h.wf = !0;
h.Hb = !0;
h.w = function(a, b) {
  return b < H(this) ? this.slice(b, b + 1) : null;
};
h.qa = function(a, b, c) {
  return b < H(this) ? this.slice(b, b + 1) : void 0 === c ? null : c;
};
h.Yb = !0;
h.H = function() {
  return this.length;
};
h.Ib = !0;
h.X = function() {
  return this.get(0);
};
h.ha = function() {
  return 1 < H(this) ? this.slice(1) : Gc;
};
h.mb = !0;
h.G = function() {
  return q(this.get(0)) ? this : null;
};
function Pp(a) {
  a = "" + w(a);
  return mp(new Vo(a, [], -1), !0, null);
}
jQuery.Wh(Bg(new n(null, 3, [Hi, new n(null, 2, [jh, "application/edn, text/edn", zi, "application/clojure, text/clojure"], null), Qj, new n(null, 1, ["clojure", /edn|clojure/], null), gj, new n(null, 2, ["text edn", Pp, "text clojure", Pp], null)], null)));
var Qp;
function Rp(a, b, c) {
  c = P(c) ? N.a(Mf, c) : c;
  K.a(c, xj);
  c = K.a(c, ei);
  var d = he.a(B, a), e = he.a(Lh, a), f = he.a(gi, a);
  he.a(function() {
    return function(a) {
      return new n(null, 1, [Fh, a], null);
    };
  }(d, e, f), he.a(Bh, a));
  return Op.b(b).Kf(Bg(new n(null, 5, [Gh, new n(null, 1, [rh, null], null), Fi, new n(null, 1, [Sg, null], null), hj, new n(null, 2, [Si, d, Kg, new n(null, 1, [Sj, 270], null)], null), $i, new R(null, 1, 5, S, [new n(null, 1, [Fi, new n(null, 1, [Sg, c], null)], null)], null), qj, new R(null, 1, 5, S, [new n(null, 4, [Vh, c, Xi, "boxplot", $i, 0, Ug, a], null)], null)], null)));
}
var Tp = function Sp(b, c, d) {
  var e = P(d) ? N.a(Mf, d) : d, f = K.a(e, Gj);
  "undefined" === typeof Qp && (Qp = function(b, c, d, e, f, u, D, J) {
    this.id = b;
    this.Ea = c;
    this.dg = d;
    this.ah = e;
    this.u = f;
    this.data = u;
    this.nh = D;
    this.ug = J;
    this.p = 0;
    this.g = 393216;
  }, Qp.R = !0, Qp.Q = "clustermap.components.timeline-chart/t23064", Qp.V = function(b, c) {
    return hc(c, "clustermap.components.timeline-chart/t23064");
  }, Qp.prototype.Ne = !0, Qp.prototype.Ud = function() {
    return Rp(this.data, qn(this.u, "chart"), this.Ea);
  }, Qp.prototype.Me = !0, Qp.prototype.Td = function() {
    var b = this;
    Rp(b.data, qn(b.u, "chart"), b.Ea);
    return Op.b(document).jc("clustermap-change-view", function() {
      return Op.b([w("#"), w(b.id)].join("")).Kf().Mi();
    });
  }, Qp.prototype.Ga = !0, Qp.prototype.Da = function() {
    return React.d.S({className:"timeline-chart", id:this.id, ref:"chart"});
  }, Qp.prototype.s = function() {
    return this.ug;
  }, Qp.prototype.t = function(b, c) {
    return new Qp(this.id, this.Ea, this.dg, this.ah, this.u, this.data, this.nh, c);
  });
  return new Qp(f, e, e, d, c, b, Sp, null);
};
var Up, Wp = function Vp(b, c) {
  "undefined" === typeof Up && (Up = function(b, c, f, g) {
    this.u = b;
    this.data = c;
    this.nf = f;
    this.fg = g;
    this.p = 0;
    this.g = 393216;
  }, Up.R = !0, Up.Q = "clustermap.components.full-report.charts/t22329", Up.V = function(b, c) {
    return hc(c, "clustermap.components.full-report.charts/t22329");
  }, Up.prototype.Ga = !0, Up.prototype.Da = function() {
    var b;
    b = kh.b(this.data);
    b = q(b) ? new R(null, 2, 5, S, [Oi, new R(null, 2, 5, S, [Wh, new R(null, 2, 5, S, [Dj, new R(null, 2, 5, S, [Wh, new R(null, 3, 5, S, [Li, new R(null, 2, 5, S, [uj, new R(null, 3, 5, S, [bh, new R(null, 2, 5, S, [Yh, "Turnover"], null), nn.c(Tp, Ui.b(b), new n(null, 2, [pj, new n(null, 3, [Gj, "turnover-timeline-chart", ei, "Turnover", xj, "# Filings"], null), zh, "turnover-timeline-chart"], null))], null)], null), new R(null, 2, 5, S, [uj, new R(null, 3, 5, S, [Bi, new R(null, 2, 5, S, [Yh, 
    "Employment"], null), nn.c(Tp, yi.b(b), new n(null, 2, [pj, new n(null, 3, [Gj, "employment-timeline-chart", ei, "Employment", xj, "# Filings"], null), zh, "employment-timeline-chart"], null))], null)], null)], null)], null)], null)], null)], null) : null;
    return O(b) ? React.d.S(X(qm.e(F([new n(null, 1, [Jh, new R(null, 1, 5, S, ["full-report-charts"], null)], null), b], 0))), null) : React.d.S({className:"full-report-charts"}, V(b));
  }, Up.prototype.s = function() {
    return this.fg;
  }, Up.prototype.t = function(b, c) {
    return new Up(this.u, this.data, this.nf, c);
  });
  return new Up(c, b, Vp, null);
};
function Xp(a) {
  return y.a(1, H(a)) && y.a(Oh, function() {
    var b = null == a ? null : Pf(a);
    return null == b ? null : B(b);
  }());
}
var Zp = function Yp(b, c) {
  var d = P(b) ? N.a(Mf, b) : b, e = K.a(d, Yg), f = K.a(d, Sh), g = K.a(d, Nh), k = Zm.b(c), k = P(k) ? N.a(Mf, k) : k, l = K.a(k, vh), p = K.a(k, Rj), s = K.a(k, Rh);
  "undefined" === typeof wn && (wn = function(b, c, d, e, f, g, k, l, p, s, wa, Mc, Mb) {
    this.Wg = b;
    this.Hf = c;
    this.T = d;
    this.data = e;
    this.gf = f;
    this.ja = g;
    this.Zd = k;
    this.selection = l;
    this.v = p;
    this.Sf = s;
    this.u = wa;
    this.Rf = Mc;
    this.lg = Mb;
    this.p = 0;
    this.g = 393216;
  }, wn.R = !0, wn.Q = "clustermap.components.full-report/t22570", wn.V = function(b, c) {
    return hc(c, "clustermap.components.full-report/t22570");
  }, wn.prototype.Ne = !0, wn.prototype.Ud = function(b, c, d, e) {
    Op.a("[data-toggle\x3d'tooltip']", e).data("bs.tooltip", !1);
    return Op.a("[data-toggle\x3d'tooltip']", e).qh();
  }, wn.prototype.Ga = !0, wn.prototype.Da = function() {
    var b = nn.c(Cn, this.data, new n(null, 2, [pj, new n(null, 1, [Rh, this.v], null), zh, "overview"], null));
    return O(b) ? React.d.S(X(b), V(nn.c(Wp, this.data, new n(null, 2, [pj, new n(null, 1, [Rh, this.v], null), zh, "details"], null))), Xp(this.Zd) ? V(q(Uh.b(this.data)) ? nn.c(Ko, Uh.b(this.data), new n(null, 2, [pj, new n(null, 3, [Rh, this.v, vh, this.ja, Rj, this.T], null), zh, "selection-portfolio-company-sites"], null)) : null) : V(q(Uh.b(this.data)) ? nn.c(So, Uh.b(this.data), new n(null, 2, [pj, new n(null, 3, [Rh, this.v, vh, this.ja, Rj, this.T], null), zh, "selection-portfolio-company-sites"], 
    null)) : null)) : React.d.S(null, V(b), V(nn.c(Wp, this.data, new n(null, 2, [pj, new n(null, 1, [Rh, this.v], null), zh, "details"], null))), Xp(this.Zd) ? V(q(Uh.b(this.data)) ? nn.c(Ko, Uh.b(this.data), new n(null, 2, [pj, new n(null, 3, [Rh, this.v, vh, this.ja, Rj, this.T], null), zh, "selection-portfolio-company-sites"], null)) : null) : V(q(Uh.b(this.data)) ? nn.c(So, Uh.b(this.data), new n(null, 2, [pj, new n(null, 3, [Rh, this.v, vh, this.ja, Rj, this.T], null), zh, "selection-portfolio-company-sites"], 
    null)) : null));
  }, wn.prototype.s = function() {
    return this.lg;
  }, wn.prototype.t = function(b, c) {
    return new wn(this.Wg, this.Hf, this.T, this.data, this.gf, this.ja, this.Zd, this.selection, this.v, this.Sf, this.u, this.Rf, c);
  });
  return new wn(b, Yp, p, d, e, l, g, f, s, k, c, d, null);
};
function $p() {
  var a = aq, b = hd(Sh) ? Sh : new R(null, 1, 5, S, [Sh], null);
  return function() {
    function c(a) {
      var b = null;
      0 < arguments.length && (b = F(Array.prototype.slice.call(arguments, 0), 0));
      return d.call(this, b);
    }
    function d(c) {
      return N.c(a, ze.a(B(c), b), C(c));
    }
    c.l = 0;
    c.h = function(a) {
      a = A(a);
      return d(a);
    };
    c.e = d;
    return c;
  }();
}
;var bq, dq = function cq(b) {
  "undefined" === typeof bq && (bq = function(b, d, e) {
    this.Na = b;
    this.Gd = d;
    this.yg = e;
    this.p = 0;
    this.g = 393216;
  }, bq.R = !0, bq.Q = "cljs.core.async.impl.ioc-helpers/t26877", bq.V = function(b, d) {
    return hc(d, "cljs.core.async.impl.ioc-helpers/t26877");
  }, bq.prototype.pe = function() {
    return!0;
  }, bq.prototype.s = function() {
    return this.yg;
  }, bq.prototype.t = function(b, d) {
    return new bq(this.Na, this.Gd, d);
  });
  return new bq(b, cq, null);
};
function eq(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].yc(), b;
    }
    if (t) {
      throw b;
    }
    return null;
  }
}
function fq(a, b, c) {
  c = c.yf(dq(function(c) {
    a[2] = c;
    a[1] = b;
    return eq(a);
  }));
  return q(c) ? (a[2] = Tb(c), a[1] = b, T) : null;
}
function gq(a, b, c) {
  b = b.zc(0, c, dq(function() {
    a[2] = null;
    a[1] = 7;
    return eq(a);
  }));
  return q(b) ? (a[2] = Tb(b), a[1] = 7, T) : null;
}
function hq(a, b) {
  var c = a[6];
  null != b && c.zc(0, b, dq(function() {
    return null;
  }));
  c.yc();
  return c;
}
function iq(a) {
  for (;;) {
    var b = a[4], c = oh.b(b), d = pi.b(b), e = a[5];
    if (q(function() {
      var a = e;
      return q(a) ? ib(b) : a;
    }())) {
      throw e;
    }
    if (q(function() {
      var a = e;
      return q(a) ? (a = c, q(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = Yc.e(b, oh, null, F([pi, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? ib(c) && ib($g.b(b)) : a;
    }())) {
      a[4] = xi.b(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = ib(c)) ? $g.b(b) : a : a;
      }())) {
        a[1] = $g.b(b);
        a[4] = Yc.c(b, $g, null);
        break;
      }
      if (q(function() {
        var a = ib(e);
        return a ? $g.b(b) : a;
      }())) {
        a[1] = $g.b(b);
        a[4] = Yc.c(b, $g, null);
        break;
      }
      if (ib(e) && ib($g.b(b))) {
        a[1] = ti.b(b);
        a[4] = xi.b(b);
        break;
      }
      if (t) {
        throw Error([w("Assert failed: "), w("No matching clause"), w("\n"), w(pg.e(F([!1], 0)))].join(""));
      }
      break;
    }
  }
}
;var jq, lq = function kq(b) {
  "undefined" === typeof jq && (jq = function(b, d, e) {
    this.wa = b;
    this.lf = d;
    this.xg = e;
    this.p = 0;
    this.g = 425984;
  }, jq.R = !0, jq.Q = "cljs.core.async.impl.channels/t26866", jq.V = function(b, d) {
    return hc(d, "cljs.core.async.impl.channels/t26866");
  }, jq.prototype.Eb = function() {
    return this.wa;
  }, jq.prototype.s = function() {
    return this.xg;
  }, jq.prototype.t = function(b, d) {
    return new jq(this.wa, this.lf, d);
  });
  return new jq(b, kq, null);
};
function mq(a, b) {
  this.Pb = a;
  this.wa = b;
}
function nq(a) {
  return Pn(a.Pb);
}
function oq(a, b, c, d, e, f) {
  this.lc = a;
  this.Cc = b;
  this.Tc = c;
  this.Bc = d;
  this.ca = e;
  this.closed = f;
}
oq.prototype.yc = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.lc.pop();
      if (null != a) {
        fo(function(a) {
          return function() {
            return a.b ? a.b(null) : a.call(null, null);
          };
        }(a.Na, a));
      } else {
        break;
      }
    }
  }
  return null;
};
oq.prototype.yf = function(a) {
  if (null != this.ca && 0 < H(this.ca)) {
    return lq(this.ca.xc(null));
  }
  for (;;) {
    var b = this.Tc.pop();
    if (null != b) {
      return a = b.wa, fo(b.Pb.Na), lq(a);
    }
    if (this.closed) {
      return lq(null);
    }
    64 < this.Cc ? (this.Cc = 0, Vn(this.lc, Pn)) : this.Cc += 1;
    if (!(1024 > this.lc.length)) {
      throw Error([w("Assert failed: "), w([w("No more than "), w(1024), w(" pending takes are allowed on a single channel.")].join("")), w("\n"), w(pg.e(F([Gd(new Ac(null, "\x3c", "\x3c", -1640531467, null), Gd(new Ac(null, ".-length", ".-length", 1395928862, null), new Ac(null, "takes", "takes", -1530407291, null)), new Ac("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    Un(this.lc, a);
    return null;
  }
};
oq.prototype.zc = function(a, b, c) {
  if (null == b) {
    throw Error([w("Assert failed: "), w("Can't put nil in on a channel"), w("\n"), w(pg.e(F([Gd(new Ac(null, "not", "not", -1640422260, null), Gd(new Ac(null, "nil?", "nil?", -1637150201, null), new Ac(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if (this.closed) {
    return lq(null);
  }
  for (;;) {
    a = this.lc.pop();
    if (null != a) {
      c = c.Na, fo(function(a) {
        return function() {
          return a.b ? a.b(b) : a.call(null, b);
        };
      }(a.Na, c, a));
    } else {
      if (null == this.ca || this.ca.wc(null)) {
        64 < this.Bc ? (this.Bc = 0, Vn(this.Tc, nq)) : this.Bc += 1;
        if (!(1024 > this.Tc.length)) {
          throw Error([w("Assert failed: "), w([w("No more than "), w(1024), w(" pending puts are allowed on a single channel."), w(" Consider using a windowed buffer.")].join("")), w("\n"), w(pg.e(F([Gd(new Ac(null, "\x3c", "\x3c", -1640531467, null), Gd(new Ac(null, ".-length", ".-length", 1395928862, null), new Ac(null, "puts", "puts", -1637078787, null)), new Ac("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        Un(this.Tc, new mq(c, b));
        return null;
      }
      c = c.Na;
      this.ca.oe(null, b);
    }
    return lq(null);
  }
};
function pq(a, b, c) {
  this.key = a;
  this.wa = b;
  this.forward = c;
  this.p = 0;
  this.g = 2155872256;
}
pq.prototype.F = function(a, b, c) {
  return hg(b, ng, "[", " ", "]", c, this);
};
pq.prototype.G = function() {
  return xb(xb(Gc, this.wa), this.key);
};
(function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new pq(a, b, c);
  }
  function b(a) {
    return c.c(null, null, a);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
})().b(0);
var rq = function qq(b) {
  "undefined" === typeof Mn && (Mn = function(b, d, e) {
    this.Na = b;
    this.Gd = d;
    this.wg = e;
    this.p = 0;
    this.g = 393216;
  }, Mn.R = !0, Mn.Q = "cljs.core.async/t24273", Mn.V = function(b, d) {
    return hc(d, "cljs.core.async/t24273");
  }, Mn.prototype.pe = function() {
    return!0;
  }, Mn.prototype.s = function() {
    return this.wg;
  }, Mn.prototype.t = function(b, d) {
    return new Mn(this.Na, this.Gd, d);
  });
  return new Mn(b, qq, null);
}, sq = function() {
  function a(a) {
    a = y.a(a, 0) ? null : a;
    a = "number" === typeof a ? new Xn(Wn(a), a) : a;
    return new oq(Wn(32), 0, Wn(32), 0, a, null);
  }
  function b() {
    return c.b(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.b = a;
  return c;
}();
function tq() {
  return null;
}
var uq = function() {
  function a(a, b, c, d) {
    a = Nn(a, b, rq(c));
    q(q(a) ? ae.a(c, tq) : a) && (q(d) ? c.q ? c.q() : c.call(null) : fo(c));
    return null;
  }
  function b(a, b, c) {
    return d.i(a, b, c, !0);
  }
  function c(a, b) {
    return d.c(a, b, tq);
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}(), vq = function() {
  function a(a, b, c) {
    var g = sq.b(1);
    fo(function() {
      var k = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!Id(b, T)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, iq(c), T;
                    }
                    if (t) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!Id(d, T)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.q = c;
            d.b = b;
            return d;
          }();
        }(function(g) {
          var k = g[1];
          if (1 === k) {
            var l = A(b);
            g[7] = l;
            g[2] = null;
            g[1] = 2;
            return T;
          }
          return 2 === k ? (l = g[7], g[1] = q(l) ? 4 : 5, T) : 3 === k ? (k = g[2], hq(g, k)) : 4 === k ? (l = g[7], k = B(l), gq(g, a, k)) : 5 === k ? (g[1] = q(c) ? 8 : 9, T) : 6 === k ? (k = g[2], g[2] = k, g[1] = 3, T) : 7 === k ? (l = g[7], k = g[2], l = E(l), g[7] = l, g[8] = k, g[2] = null, g[1] = 2, T) : 8 === k ? (k = On(a), g[2] = k, g[1] = 10, T) : 9 === k ? (g[2] = null, g[1] = 10, T) : 10 === k ? (k = g[2], g[2] = k, g[1] = 6, T) : null;
        });
      }(), l = function() {
        var a = k.q ? k.q() : k.call(null);
        a[6] = g;
        return a;
      }();
      return eq(l);
    });
    return g;
  }
  function b(a, b) {
    return c.c(a, b, !0);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
var wq, aq = function xq(b, c) {
  var d = Zm.a(c, Rh), e = function() {
    var c = null == b ? null : Xi.b(b);
    if (null == c) {
      c = null;
    } else {
      if (q(y.a ? y.a(Oh, c) : y.call(null, Oh, c))) {
        c = "Portfolio Company";
      } else {
        if (q(y.a ? y.a(Aj, c) : y.call(null, Aj, c))) {
          c = "Investor";
        } else {
          if (q(y.a ? y.a(xh, c) : y.call(null, xh, c))) {
            c = "Constituency";
          } else {
            throw Error([w("No matching clause: "), w(c)].join(""));
          }
        }
      }
    }
    return c;
  }(), f = function() {
    var c = null == b ? null : Hj.b(b);
    return null == c ? null : Vh.b(c);
  }(), g = function() {
    var c = null == b ? null : Hj.b(b);
    return null == c ? null : lj.b(c);
  }();
  "undefined" === typeof wq && (wq = function(b, c, d, e, f, g, J, M) {
    this.url = b;
    this.name = c;
    this.type = d;
    this.v = e;
    this.u = f;
    this.selection = g;
    this.bh = J;
    this.rg = M;
    this.p = 0;
    this.g = 393216;
  }, wq.R = !0, wq.Q = "clustermap.components.page-title/t22948", wq.V = function(b, c) {
    return hc(c, "clustermap.components.page-title/t22948");
  }, wq.prototype.Ga = !0, wq.prototype.Da = function() {
    var b = this;
    return React.d.S({id:"page-title"}, React.d.button({className:"btn", type:"button", onClick:function() {
      return uq.a(b.v, new R(null, 2, 5, S, [Ej, "map"], null));
    }}, "View on map"), function() {
      var c;
      c = b.type;
      c = q(c) ? c : "All portfolio companies";
      return O(c) ? React.d.bc(X(c), null) : React.d.bc(null, V(c));
    }(), function() {
      var c;
      c = b.name;
      c = q(c) ? c : "UK wide";
      return O(c) ? React.d.eb(X(c), null) : React.d.eb(null, V(c));
    }(), q(b.url) ? React.d.ib({href:b.url, target:"_blank"}, V(b.url)) : null);
  }, wq.prototype.s = function() {
    return this.rg;
  }, wq.prototype.t = function(b, c) {
    return new wq(this.url, this.name, this.type, this.v, this.u, this.selection, this.bh, c);
  });
  return new wq(g, f, e, d, c, b, xq, null);
};
function yq(a) {
  Xj.call(this);
  a || Ol || (Ol = new Zl);
}
sa(yq, Xj);
var zq = document.createElement("div");
zq.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
var Aq = y.a(zq.firstChild.nodeType, 3), Bq = y.a(zq.getElementsByTagName("tbody").length, 0);
y.a(zq.getElementsByTagName("link").length, 0);
var Cq = /<|&#?\w+;/, Dq = /^\s+/, Eq = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, Fq = /<([\w:]+)/, Gq = /<tbody/i, Hq = new R(null, 3, 5, S, [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"], null), Iq = new R(null, 3, 5, S, [1, "\x3ctable\x3e", "\x3c/table\x3e"], null), Jq = new R(null, 3, 5, S, [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"], null), Kq = Xc(["col", z, "tfoot", "caption", "optgroup", "legend", 
"area", "td", "thead", "th", "option", "tbody", "tr", "colgroup"], [new R(null, 3, 5, S, [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"], null), new R(null, 3, 5, S, [0, "", ""], null), Iq, Iq, Hq, new R(null, 3, 5, S, [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"], null), new R(null, 3, 5, S, [1, "\x3cmap\x3e", "\x3c/map\x3e"], null), Jq, Iq, Jq, Hq, Iq, new R(null, 3, 5, S, [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"], null), 
Iq]);
function Lq(a, b, c, d) {
  b = ib(fg(Gq, b));
  y.a(c, "table") && b ? (c = a.firstChild, a = q(c) ? a.firstChild.childNodes : c) : a = y.a(d, "\x3ctable\x3e") && b ? divchildNodes : Ue;
  a = A(a);
  c = null;
  for (var e = b = 0;;) {
    if (e < b) {
      d = c.w(null, e), y.a(d.nodeName, "tbody") && y.a(d.childNodes.length, 0) && d.parentNode.removeChild(d), e += 1;
    } else {
      if (a = A(a)) {
        c = a, jd(c) ? (a = tc(c), b = uc(c), c = a, d = H(a), a = b, b = d) : (d = B(c), y.a(d.nodeName, "tbody") && y.a(d.childNodes.length, 0) && d.parentNode.removeChild(d), a = E(c), c = null, b = 0), e = 0;
      } else {
        break;
      }
    }
  }
}
function Mq(a) {
  var b = $l(a, Eq, "\x3c$1\x3e\x3c/$2\x3e");
  a = ("" + w(Tc(fg(Fq, b)))).toLowerCase();
  var c = K.c(Kq, a, z.b(Kq)), d = I.c(c, 0, null), e = I.c(c, 1, null), f = I.c(c, 2, null), c = function() {
    var a;
    a = document.createElement("div");
    a.innerHTML = [w(e), w(b), w(f)].join("");
    for (var c = d;;) {
      if (0 < c) {
        c -= 1, a = a.lastChild;
      } else {
        return a;
      }
    }
  }();
  q(Bq) && Lq(c, b, a, e);
  q(function() {
    var a = ib(Aq);
    return a ? fg(Dq, b) : a;
  }()) && c.insertBefore(document.createTextNode(B(fg(Dq, b))), c.firstChild);
  return c.childNodes;
}
function Nq(a) {
  if (a ? a.Kb : a) {
    return a.Kb(a);
  }
  var b;
  b = Nq[m(null == a ? null : a)];
  if (!b && (b = Nq._, !b)) {
    throw v("DomContent.nodes", a);
  }
  return b.call(null, a);
}
function Oq(a) {
  if (a ? a.Cd : a) {
    return a.Cd(a);
  }
  var b;
  b = Oq[m(null == a ? null : a)];
  if (!b && (b = Oq._, !b)) {
    throw v("DomContent.single-node", a);
  }
  return b.call(null, a);
}
function Pq(a, b) {
  for (var c = A(Nq(a)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.w(null, f);
      Rl(g, b);
      f += 1;
    } else {
      if (c = A(c)) {
        d = c, jd(d) ? (c = tc(d), f = uc(d), d = c, e = H(c), c = f) : (c = B(d), Rl(c, b), c = E(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
function Qq(a, b) {
  for (var c = A(Nq(a)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.w(null, f);
      Sl(g, b);
      f += 1;
    } else {
      if (c = A(c)) {
        d = c, jd(d) ? (c = tc(d), f = uc(d), d = c, e = H(c), c = f) : (c = B(d), Sl(c, b), c = E(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
var Rq = function() {
  function a(a, b) {
    return b < a.length ? new Ld(null, function() {
      return G(a.item(b), c.a(a, b + 1));
    }, null, null) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Sq = function() {
  function a(a, b) {
    return b < a.length ? new Ld(null, function() {
      return G(a[b], c.a(a, b + 1));
    }, null, null) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Tq(a) {
  return q(a.item) ? Rq.b(a) : Sq.b(a);
}
function Uq(a) {
  if (q(a)) {
    var b = ib(a.nodeName);
    return b ? a.length : b;
  }
  return a;
}
function Vq(a) {
  return null == a ? Gc : (a ? a.g & 8388608 || a.mb || (a.g ? 0 : r(bc, a)) : r(bc, a)) ? A(a) : q(Uq(a)) ? Tq(a) : z ? A(new R(null, 1, 5, S, [a], null)) : null;
}
Nq._ = function(a) {
  return null == a ? Gc : (a ? a.g & 8388608 || a.mb || (a.g ? 0 : r(bc, a)) : r(bc, a)) ? A(a) : q(Uq(a)) ? Tq(a) : z ? A(new R(null, 1, 5, S, [a], null)) : null;
};
Oq._ = function(a) {
  return null == a ? null : (a ? a.g & 8388608 || a.mb || (a.g ? 0 : r(bc, a)) : r(bc, a)) ? B(a) : q(Uq(a)) ? a.item(0) : z ? a : null;
};
Nq.string = function(a) {
  return dg.b(Nq(q(fg(Cq, a)) ? Mq(a) : document.createTextNode(a)));
};
Oq.string = function(a) {
  return Oq(q(fg(Cq, a)) ? Mq(a) : document.createTextNode(a));
};
q("undefined" != typeof NodeList) && (h = NodeList.prototype, h.mb = !0, h.G = function() {
  return Tq(this);
}, h.Hb = !0, h.w = function(a, b) {
  return this.item(b);
}, h.qa = function(a, b, c) {
  return this.length <= b ? c : I.a(this, b);
}, h.Yb = !0, h.H = function() {
  return this.length;
});
q("undefined" != typeof StaticNodeList) && (h = StaticNodeList.prototype, h.mb = !0, h.G = function() {
  return Tq(this);
}, h.Hb = !0, h.w = function(a, b) {
  return this.item(b);
}, h.qa = function(a, b, c) {
  return this.length <= b ? c : I.a(this, b);
}, h.Yb = !0, h.H = function() {
  return this.length;
});
q("undefined" != typeof HTMLCollection) && (h = HTMLCollection.prototype, h.mb = !0, h.G = function() {
  return Tq(this);
}, h.Hb = !0, h.w = function(a, b) {
  return this.item(b);
}, h.qa = function(a, b, c) {
  return this.length <= b ? c : I.a(this, b);
}, h.Yb = !0, h.H = function() {
  return this.length;
});
var Wq;
function Xq(a, b, c, d) {
  var e = Yl(b), f = b.selectSingleNode;
  if (q(q(f) ? e.setProperty : f)) {
    return e.setProperty("SelectionLanguage", "XPath"), c.a ? c.a(b, a) : c.call(null, b, a);
  }
  if (q(e.evaluate)) {
    return d.i ? d.i(null, e, b, a) : d.call(null, null, e, b, a);
  }
  if (t) {
    throw Error("Could not find XPath support in this browser.");
  }
  return null;
}
function Yq(a, b) {
  return Xq(a, b, function(a, b) {
    return a.selectSingleNode(b);
  }, function(a, b, e, f) {
    return b.evaluate(f, e, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  });
}
function Zq(a, b) {
  return Xq(a, b, function(a, b) {
    return a.selectNodes(b);
  }, function(a, b, e, f) {
    a = b.evaluate(f, e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    b = a.snapshotLength;
    e = 0;
    for (var g = null;;) {
      if (e < b) {
        f = e + 1, g = G(a.snapshotItem(e), g), e = f;
      } else {
        return g;
      }
    }
  });
}
var $q = function() {
  function a(a, b) {
    "undefined" === typeof Wq && (Wq = function(a, b, c, d) {
      this.tb = a;
      this.jb = b;
      this.vh = c;
      this.zg = d;
      this.p = 0;
      this.g = 393216;
    }, Wq.R = !0, Wq.Q = "domina.xpath/t27692", Wq.V = function(a, b) {
      return hc(b, "domina.xpath/t27692");
    }, Wq.prototype.Kb = function() {
      return re.a(ge.a(Zq, this.tb), Nq(this.jb));
    }, Wq.prototype.Cd = function() {
      return B(te(ee(hb), he.a(ge.a(Yq, this.tb), Nq(this.jb))));
    }, Wq.prototype.s = function() {
      return this.zg;
    }, Wq.prototype.t = function(a, b) {
      return new Wq(this.tb, this.jb, this.vh, b);
    });
    return new Wq(b, a, c, null);
  }
  function b(a) {
    return c.a(Vl()[0], a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
var ar = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P(b) ? N.a(Mf, b) : b, f = K.a(e, mh), g = sq.b(1);
    Cl(a, function(a) {
      uq.a(g, function(a) {
        return q(f) ? a : Gg.e(a, F([Fg, !0], 0));
      }.call(null, (JSON.parse.b ? JSON.parse.b(Ll(a.target)) : JSON.parse.call(null, Ll(a.target))).data));
      return On(g);
    });
    return g;
  }
  a.l = 1;
  a.h = function(a) {
    var d = B(a);
    a = C(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}();
function br(a, b) {
  var c = sq.b(1);
  fo(function() {
    var d = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Id(b, T)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, iq(c), T;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Id(d, T)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.q = c;
          d.b = b;
          return d;
        }();
      }(function(c) {
        var d = c[1];
        if (1 === d) {
          return c[2] = null, c[1] = 2, T;
        }
        if (2 === d) {
          return c[1] = 4, T;
        }
        if (3 === d) {
          return d = c[2], hq(c, d);
        }
        if (4 === d) {
          return fq(c, 7, a);
        }
        if (5 === d) {
          return c[2] = null, c[1] = 6, T;
        }
        if (6 === d) {
          return d = c[2], c[2] = d, c[1] = 3, T;
        }
        if (7 === d) {
          var d = c[7], e = c[2], d = I.c(e, 0, null), e = I.c(e, 1, null), l = hd(d);
          c[7] = d;
          c[8] = e;
          c[1] = l ? 8 : 9;
          return T;
        }
        return 8 === d ? (d = c[7], e = Ue, c[9] = d, c[10] = e, c[2] = null, c[1] = 11, T) : 9 === d ? (d = c[7], c[1] = q(d) ? 20 : 21, T) : 10 === d ? (e = c[8], d = N.c(b, c[2], e), c[11] = d, c[2] = null, c[1] = 2, T) : 11 === d ? (e = c[9], d = fd(e), c[1] = d ? 13 : 14, T) : 12 === d ? (d = c[2], c[2] = d, c[1] = 10, T) : 13 === d ? (e = c[10], c[2] = e, c[1] = 15, T) : 14 === d ? (e = c[9], d = C(e), e = B(e), c[12] = d, c[1] = q(e) ? 16 : 17, T) : 15 === d ? (d = c[2], c[2] = d, c[1] = 12, 
        T) : 16 === d ? (e = c[9], d = B(e), fq(c, 19, d)) : 17 === d ? (c[2] = null, c[1] = 18, T) : 18 === d ? (e = c[10], d = c[12], e = Vc.a(e, c[2]), c[9] = d, c[10] = e, c[2] = null, c[1] = 11, T) : 19 === d ? (d = c[2], c[2] = d, c[1] = 18, T) : 20 === d ? (d = c[7], fq(c, 23, d)) : 21 === d ? (c[2] = null, c[1] = 22, T) : 22 === d ? (d = c[2], c[2] = d, c[1] = 10, T) : 23 === d ? (d = c[2], c[2] = d, c[1] = 22, T) : null;
      });
    }(), e = function() {
      var a = d.q ? d.q() : d.call(null);
      a[6] = c;
      return a;
    }();
    return eq(e);
  });
}
function cr(a, b) {
  var c = sq.b(new Yn(Wn(1), 1));
  br(c, b);
  return function() {
    function b(a) {
      var c = null;
      0 < arguments.length && (c = F(Array.prototype.slice.call(arguments, 0), 0));
      return e.call(this, c);
    }
    function e(b) {
      b = N.a(a, b);
      if (q(b)) {
        var d = hd(b) ? b : new R(null, 1, 5, S, [b], null);
        b = I.c(d, 0, null);
        d = yd(d);
        return uq.a(c, new R(null, 2, 5, S, [b, d], null));
      }
      return null;
    }
    b.l = 0;
    b.h = function(a) {
      a = A(a);
      return e(a);
    };
    b.e = e;
    return b;
  }();
}
function dr(a) {
  return am.a("\x26", he.a(function(a) {
    var c = I.c(a, 0, null);
    a = I.c(a, 1, null);
    return[w(Jd(c)), w("\x3d"), w(JSON.stringify(Bg(a)))].join("");
  }, a));
}
var er = config.Xh.prefix, fr = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = F(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return N.c(ar, [w("/api/boundarylines/"), w(a), w("/"), w(b)].join(""), e);
  }
  a.l = 2;
  a.h = function(a) {
    var d = B(a);
    a = E(a);
    var e = B(a);
    a = C(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}(), gr = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return N.c(ar, [w("/api/boundaryline-collection-index/"), w(a)].join(""), b);
  }
  a.l = 1;
  a.h = function(a) {
    var d = B(a);
    a = C(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), hr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    a = Sf.e(F([new n(null, 2, [Ii, 100, bj, new R(null, 1, 5, S, [new n(null, 1, [Cj, "desc"], null)], null)], null), a], 0));
    return ar([w("/api/"), w(er), w("/portfolio-company-sites?"), w(dr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), ir = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    a = Sf.e(F([new n(null, 2, [Ii, 100, bj, new R(null, 1, 5, S, [new n(null, 1, [Cj, "desc"], null)], null)], null), a], 0));
    return ar([w("/api/"), w(er), w("/portfolio-company-sites-by-company?"), w(dr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), jr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    return ar([w("/api/"), w(er), w("/portfolio-company-locations?"), w(dr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), kr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    return ar([w("/api/"), w(er), w("/portfolio-company-site-stats?"), w(dr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), lr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    return ar([w("/api/"), w(er), w("/portfolio-company-site-account-timelines?"), w(dr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
var mr = new R(null, 4, 5, S, [new R(null, 2, 5, S, [7, 0.01], null), new R(null, 2, 5, S, [9, 0.002], null), new R(null, 2, 5, S, [12, 3E-4], null), new R(null, 2, 5, S, [null, 0], null)], null);
function nr(a) {
  var b = ce(function(b) {
    var d = I.c(b, 0, null);
    b = I.c(b, 1, null);
    return q(q(d) ? a <= d : d) ? b : null;
  }, mr);
  return q(b) ? b : 0;
}
function or(a, b) {
  var c = nr(a), d = Fd(te(function(a) {
    return function(b) {
      return b > a;
    };
  }(c), he.a(Uc, mr))), e = te(function(a) {
    return function(b) {
      return b < a;
    };
  }(c, d), he.a(Uc, mr)), f = Wf(b), c = K.a(f, c);
  if (q(c)) {
    return c;
  }
  e = ce(f, e);
  return q(e) ? e : ce(f, d);
}
function pr(a, b, c, d) {
  var e = fr.e(c, d, F([mh, !0], 0));
  b = hd(b) ? b : new R(null, 1, 5, S, [b], null);
  var f = Yd.a(b, new R(null, 2, 5, S, [c, d], null)), g = sq.b(1);
  fo(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Id(b, T)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, iq(c), T;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Id(d, T)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.q = c;
          d.b = b;
          return d;
        }();
      }(function(b) {
        var c = b[1];
        if (2 === c) {
          var d = b[2], g = vg.i(a, Ce, f, function() {
            return function(a) {
              return function() {
                return a;
              };
            }(d, d, c);
          }());
          return hq(b, g);
        }
        return 1 === c ? fq(b, 2, e) : null;
      });
    }(), c = function() {
      var a = b.q ? b.q() : b.call(null);
      a[6] = g;
      return a;
    }();
    return eq(c);
  });
}
var qr = function() {
  function a(a, d, e, f, g) {
    var k = null;
    4 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 4), 0));
    return b.call(this, a, d, e, f, k);
  }
  function b(a, b, e, f, g) {
    g = P(g) ? N.a(Mf, g) : g;
    g = K.a(g, Mi);
    if (q(q(g) ? f <= g : g)) {
      return null;
    }
    g = hd(b) ? b : new R(null, 1, 5, S, [b], null);
    var k = ze.a(Tb(a), g), l = K.a(k, e);
    g = nr(f);
    f = or(f, Pf(l));
    k = ze.a(k, new R(null, 2, 5, S, [e, f], null));
    ae.a(g, f) && pr(a, b, e, g);
    return q(k) ? new R(null, 2, 5, S, [f, k], null) : null;
  }
  a.l = 4;
  a.h = function(a) {
    var d = B(a);
    a = E(a);
    var e = B(a);
    a = E(a);
    var f = B(a);
    a = E(a);
    var g = B(a);
    a = C(a);
    return b(d, e, f, g, a);
  };
  a.e = b;
  return a;
}();
rl("goog.messaging.AbstractChannel");
function rr(a, b) {
  yq.call(this, b);
  this.mf = a;
  this.Wc = [];
}
var sr;
sa(rr, yq);
h = rr.prototype;
h.$d = 0;
h.cf = !1;
h.oc = 3800;
h.send = function(a, b) {
  var c = a + ":" + b;
  if (!jk || b.length <= this.oc) {
    this.Wc.push("|" + c);
  } else {
    for (var d = b.length, e = Math.ceil(d / this.oc), f = 0, g = 1;f < d;) {
      this.Wc.push("," + g + "/" + e + "|" + c.substr(f, this.oc)), g++, f += this.oc;
    }
  }
  !this.cf && this.Wc.length && (c = this.Wc.shift(), ++this.$d, this.zi.send(this.$d + c), Ln.log(ml, "msg sent: " + this.$d + c, void 0), this.cf = !0);
};
h.Ba = function() {
  rr.Ab.Ba.call(this);
  var a = tr;
  La(a, this.Cg);
  La(a, this.ef);
  this.Cg = this.ef = null;
  (a = this.Bg) && a.parentNode && a.parentNode.removeChild(a);
  (a = this.df) && a.parentNode && a.parentNode.removeChild(a);
  this.Bg = this.df = null;
};
var tr = [], ur = pa(function() {
  var a = tr, b, c = !1;
  try {
    for (var d = 0;b = a[d];d++) {
      var e;
      if (!(e = c)) {
        var f = b, g = f.Li.location.href;
        if (g != f.Ff) {
          f.Ff = g;
          var k = g.split("#")[1];
          k && (k = k.substr(1), f.$h(decodeURIComponent(k)));
          e = !0;
        } else {
          e = !1;
        }
      }
      c = e;
    }
  } catch (l) {
    if (Ln.info("receive_() failed: " + l), b = b.Ti.mf, Ln.info("Transport Error"), b.close(), !a.length) {
      return;
    }
  }
  a = ra();
  c && (sr = a);
  window.setTimeout(ur, 1E3 > a - sr ? 10 : 100);
}, rr);
xe(pf, he.a(function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  return new R(null, 2, 5, S, [Kd.b(b.toLowerCase()), a], null);
}, Sf.e(F([Gg.b({zh:"complete", Rh:"success", Ah:"error", wh:"abort", Nh:"ready", Oh:"readystatechange", TIMEOUT:"timeout", Ch:"incrementaldata", Mh:"progress"})], 0))));
var vr = function() {
  function a(a, b, c, d, e, f) {
    if (a ? a.we : a) {
      return a.we(0, b, c, d, e, f);
    }
    var D;
    D = vr[m(null == a ? null : a)];
    if (!D && (D = vr._, !D)) {
      throw v("IConnection.transmit", a);
    }
    return D.call(null, a, b, c, d, e, f);
  }
  function b(a, b, c, d, e) {
    if (a ? a.ve : a) {
      return a.ve(0, b, c, d, e);
    }
    var f;
    f = vr[m(null == a ? null : a)];
    if (!f && (f = vr._, !f)) {
      throw v("IConnection.transmit", a);
    }
    return f.call(null, a, b, c, d, e);
  }
  function c(a, b, c, d) {
    if (a ? a.ue : a) {
      return a.ue(0, b, c, d);
    }
    var e;
    e = vr[m(null == a ? null : a)];
    if (!e && (e = vr._, !e)) {
      throw v("IConnection.transmit", a);
    }
    return e.call(null, a, b, c, d);
  }
  function d(a, b, c) {
    if (a ? a.te : a) {
      return a.te(0, b, c);
    }
    var d;
    d = vr[m(null == a ? null : a)];
    if (!d && (d = vr._, !d)) {
      throw v("IConnection.transmit", a);
    }
    return d.call(null, a, b, c);
  }
  function e(a, b) {
    if (a ? a.se : a) {
      return a.se(0, b);
    }
    var c;
    c = vr[m(null == a ? null : a)];
    if (!c && (c = vr._, !c)) {
      throw v("IConnection.transmit", a);
    }
    return c.call(null, a, b);
  }
  var f = null, f = function(f, k, l, p, s, u) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, p);
      case 5:
        return b.call(this, f, k, l, p, s);
      case 6:
        return a.call(this, f, k, l, p, s, u);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = e;
  f.c = d;
  f.i = c;
  f.m = b;
  f.la = a;
  return f;
}();
h = zl.prototype;
h.se = function(a, b) {
  return vr.la(this, b, "GET", null, null, 1E4);
};
h.te = function(a, b, c) {
  return vr.la(this, b, c, null, null, 1E4);
};
h.ue = function(a, b, c, d) {
  return vr.la(this, b, c, d, null, 1E4);
};
h.ve = function(a, b, c, d, e) {
  return vr.la(this, b, c, d, e, 1E4);
};
h.we = function(a, b, c, d, e, f) {
  this.mc = Math.max(0, f);
  return this.send(b, c, d, e);
};
xe(pf, he.a(function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  return new R(null, 2, 5, S, [Kd.b(b.toLowerCase()), a], null);
}, Gg.b({yh:"cn", xh:"at", Ph:"rat", Lh:"pu", Bh:"ifrid", Sh:"tp", Eh:"lru", Kh:"pru", Dh:"lpu", Jh:"ppu", Ih:"ph", Hh:"osh", Qh:"role", Gh:"nativeProtocolVersion"})));
tg.b(null);
tg.b(0);
var wr = new n(null, 3, [Oh, Vh, Aj, Vh, xh, Mj], null), xr = new n(null, 4, [Oh, function(a, b) {
  return[w("#/"), w(function() {
    var b = null == a ? null : Tb(a), b = null == b ? null : Mg.b(b);
    return null == b ? null : Jd(b);
  }()), w("/portfolio-company/"), w(Zg.b(b))].join("");
}, Aj, function(a, b) {
  return[w("#/"), w(function() {
    var b = null == a ? null : Tb(a), b = null == b ? null : Mg.b(b);
    return null == b ? null : Jd(b);
  }()), w("/investor-company/"), w(ui.b(b))].join("");
}, xh, function(a, b) {
  return[w("#/"), w(function() {
    var b = null == a ? null : Tb(a), b = null == b ? null : Mg.b(b);
    return null == b ? null : Jd(b);
  }()), w("/constituency/"), w(yh.b(b))].join("");
}, null, function(a) {
  return[w("#/"), w(function() {
    var b = null == a ? null : Tb(a), b = null == b ? null : Mg.b(b);
    return null == b ? null : Jd(b);
  }())].join("");
}], null);
function yr(a, b, c) {
  return N.a(K.a(xr, b), new R(null, 2, 5, S, [a, c], null));
}
function zr(a, b, c) {
  return React.d.ib({href:yr(a, b, c)}, V(K.a(c, K.a(wr, b))));
}
;tg.b(new n(null, 1, [Mh, ""], null));
var Ar = tg.b(pf), Br = /\//;
function Cr(a, b) {
  return y.a(B(a), ":") ? new qf([Kd.b(zd.a(a, 1)), b]) : null;
}
function Dr(a, b) {
  return y.a(a, b);
}
function Er(a, b) {
  var c = fm.a(a, Br), d = fm.a(b, Br);
  return y.a(H(c), H(d)) ? be(nd, he.c(function(a, b) {
    return y.a(B(a), ":") || y.a(a, b);
  }, c, d)) : null;
}
function Fr(a, b) {
  return te(function(c) {
    return a.a ? a.a(B(c), b) : a.call(null, B(c), b);
  }, Tb(Ar));
}
function Gr(a) {
  return ob.c(function(a, c) {
    var d = fm.c(c, /=/, 2), e = I.c(d, 0, null), d = I.c(d, 1, null);
    return Yc.c(a, e, decodeURIComponent(d));
  }, pf, fm.a(a, /&/));
}
function Hr(a, b) {
  return q(Er(a, b)) ? N.a(Sf, function() {
    return function d(a) {
      return new Ld(null, function() {
        for (var b = a;;) {
          if (b = A(b)) {
            if (jd(b)) {
              var g = tc(b), k = H(g), l = Qd(k);
              a: {
                for (var p = 0;;) {
                  if (p < k) {
                    var s = x.a(g, p), s = N.a(Cr, s);
                    null != s && l.add(s);
                    p += 1;
                  } else {
                    g = !0;
                    break a;
                  }
                }
                g = void 0;
              }
              return g ? Td(l.Z(), d(uc(b))) : Td(l.Z(), null);
            }
            l = B(b);
            l = N.a(Cr, l);
            if (null != l) {
              return G(l, d(C(b)));
            }
            b = C(b);
          } else {
            return null;
          }
        }
      }, null, null);
    }(Xf(fm.a(a, Br), fm.a(b, Br)));
  }()) : null;
}
;function Ir(a, b) {
  if (q(y.a ? y.a(Oh, a) : y.call(null, Oh, a))) {
    return Zg.b(b);
  }
  if (q(y.a ? y.a(Aj, a) : y.call(null, Aj, a))) {
    return ui.b(b);
  }
  if (q(y.a ? y.a(xh, a) : y.call(null, xh, a))) {
    return yh.b(b);
  }
  throw Error([w("No matching clause: "), w(a)].join(""));
}
;var Jr, Kr, Mr = function Lr(b, c, d) {
  var e = P(b) ? N.a(Mf, b) : b, f = K.a(e, Xi), g = K.a(e, Vh), k = P(d) ? N.a(Mf, d) : d, l = K.a(k, Rj), p = K.a(k, Rh);
  "undefined" === typeof Jr && (Jr = function(b, c, d, e, f, g, k, l, p, cb, kb, wa, Mc) {
    this.Ea = b;
    this.T = c;
    this.name = d;
    this.v = e;
    this.Yd = f;
    this.Zg = g;
    this.u = k;
    this.Zf = l;
    this.Yf = p;
    this.type = cb;
    this.Yg = kb;
    this.ih = wa;
    this.sg = Mc;
    this.p = 0;
    this.g = 393216;
  }, Jr.R = !0, Jr.Q = "clustermap.components.search/t22965", Jr.V = function(b, c) {
    return hc(c, "clustermap.components.search/t22965");
  }, Jr.prototype.Oe = !0, Jr.prototype.Vd = function(b, c) {
    var d = this, e = P(c) ? N.a(Mf, c) : c, e = K.a(e, Jj), f = d.T.a ? d.T.a(d.type, d.Yd) : d.T.call(null, d.type, d.Yd);
    return React.d.A({className:q(e) ? "selected" : null}, React.d.ib({href:f, ref:"link", onClick:function() {
      var b = qn(d.u, "link"), b = null == b ? null : Op.b(b), b = null == b ? null : b.Ii(".search-component");
      return null == b ? null : b.toggle();
    }}, V(d.name), q(e) ? "*" : null));
  }, Jr.prototype.s = function() {
    return this.sg;
  }, Jr.prototype.t = function(b, c) {
    return new Jr(this.Ea, this.T, this.name, this.v, this.Yd, this.Zg, this.u, this.Zf, this.Yf, this.type, this.Yg, this.ih, c);
  });
  return new Jr(k, l, g, p, e, d, c, k, e, f, b, Lr, null);
};
function Nr(a, b) {
  var c = P(a) ? N.a(Mf, a) : a, d = K.a(c, yj), e = K.a(c, Uj), c = K.a(c, Ai), f = q(c) ? c : Ue, e = q(e) ? e : Ue, d = q(d) ? d : Ue;
  return b < H(f) ? new R(null, 2, 5, S, [xh, K.a(c, b)], null) : b < H(f) + H(e) ? new R(null, 2, 5, S, [Oh, K.a(e, b - H(f))], null) : new R(null, 2, 5, S, [Aj, K.a(d, b - H(f) - H(e))], null);
}
function Or(a, b, c, d) {
  a = a.keyCode;
  if (q(xd.a ? xd.a(27, a) : xd.call(null, 27, a))) {
    return d = qn(c, "search-component"), d = null == d ? null : Op.b(d), null == d ? null : d.toggle();
  }
  if (q(xd.a ? xd.a(13, a) : xd.call(null, 13, a))) {
    a = Nr(Tb(b), function() {
      var a = Ym.a(c, Xh);
      return q(a) ? a : 0;
    }());
    b = I.c(a, 0, null);
    a = I.c(a, 1, null);
    var e = qn(c, "search-component"), e = null == e ? null : Op.b(e);
    null == e || e.toggle();
    return uq.a(d, new R(null, 2, 5, S, [Kj, new R(null, 2, 5, S, [b, Ir(b, a)], null)], null));
  }
  return q(xd.a ? xd.a(38, a) : xd.call(null, 38, a)) ? rn(c, Xh, function() {
    var a = Ym.a(c, Xh);
    return q(a) ? a : 0;
  }() - 1) : q(xd.a ? xd.a(40, a) : xd.call(null, 40, a)) ? rn(c, Xh, function() {
    var a = Ym.a(c, Xh);
    return q(a) ? a : 0;
  }() + 1) : null;
}
var Qr = function Pr(b, c) {
  var d = P(b) ? N.a(Mf, b) : b, e = K.a(d, Sh), e = P(e) ? N.a(Mf, e) : e, f = K.a(e, Xi), g = K.a(e, Hj), k = K.a(d, Vi), l = Zm.b(c), l = P(l) ? N.a(Mf, l) : l, p = K.a(l, Rj), s = K.a(l, Rh), u = P(k) ? N.a(Mf, k) : k, D = K.a(u, yj), J = K.a(u, Uj), M = K.a(u, Ai);
  "undefined" === typeof Kr && (Kr = function(b, c, d, e, f, g, k, l, p, s, u, D, J, M, dj, hh) {
    this.Hc = b;
    this.Ye = c;
    this.T = d;
    this.Rc = e;
    this.hh = f;
    this.v = g;
    this.kh = k;
    this.u = l;
    this.Ac = p;
    this.$g = s;
    this.bg = u;
    this.cg = D;
    this.Ve = J;
    this.ag = M;
    this.$f = dj;
    this.tg = hh;
    this.p = 0;
    this.g = 393216;
  }, Kr.R = !0, Kr.Q = "clustermap.components.search/t23025", Kr.V = function(b, c) {
    return hc(c, "clustermap.components.search/t23025");
  }, Kr.prototype.Oe = !0, Kr.prototype.Vd = function(b, c) {
    var d = this;
    return React.d.S({ref:"search-component", className:"search-component", id:"search", onKeyDown:function(b) {
      return Or(b, d.Ve, d.u, d.v);
    }}, React.d.S({className:"tbl"}, React.d.S({className:"tbl-cell", style:{width:"100%"}}, sm.b ? sm.b({ref:"search-field", type:"text", placeholder:"Search", onChange:function(b) {
      return uq.a(d.v, new R(null, 2, 5, S, [ih, b.target.value], null));
    }}) : sm.call(null, {ref:"search-field", type:"text", placeholder:"Search", onChange:function(b) {
      return uq.a(d.v, new R(null, 2, 5, S, [ih, b.target.value], null));
    }})), React.d.S({className:"tbl-cell", style:{width:"34"}}, React.d.button({type:"reset", onClick:function() {
      uq.a(d.v, new R(null, 2, 5, S, [ih, ""], null));
      return qn(d.u, "search-field").value = "";
    }}, "\u00d7")), q(d.Ye) ? React.d.S({className:"tbl-cell", style:{width:"136"}}, React.d.ib({href:d.T.a ? d.T.a(null, null) : d.T.call(null, null, null)}, React.d.button({className:"btn-reset", type:"reset", onClick:function() {
      uq.a(d.v, new R(null, 2, 5, S, [ih, ""], null));
      return qn(d.u, "search-field").value = "";
    }}, "Reset to UK wide"))) : null), V(q(function() {
      var b = A(d.Ac) ? d.Ac : null;
      if (q(b)) {
        return b;
      }
      b = A(d.Rc) ? d.Rc : null;
      return q(b) ? b : A(d.Hc) ? d.Hc : null;
    }()) ? function() {
      var b = he.c(Xe, ne(Hc, 0), d.Ac), e = he.c(Xe, ne(Hc, H(b)), d.Rc), f = he.c(Xe, ne(Hc, H(b) + H(e)), d.Hc), g = ud(function() {
        var b = Xh.b(c);
        return q(b) ? b : 0;
      }(), H(b) + H(e) + H(f));
      ae.a(g, Xh.b(c)) && rn(d.u, Xh, g);
      return new R(null, 3, 5, S, [th, new n(null, 1, [Jh, "search-results"], null), new R(null, 4, 5, S, [Wg, q(A(b) ? b : null) ? xe(new R(null, 2, 5, S, [th, new R(null, 3, 5, S, [Oj, new n(null, 1, [Jh, "search-results-header"], null), "Constituencies"], null)], null), function() {
        return function Mb(b) {
          return new Ld(null, function() {
            for (;;) {
              var c = A(b);
              if (c) {
                var e = c;
                if (jd(e)) {
                  var f = tc(e), k = H(f), l = Qd(k);
                  return function() {
                    for (var b = 0;;) {
                      if (b < k) {
                        var p = x.a(f, b), s = I.c(p, 0, null), u = I.c(p, 1, null);
                        Ud(l, nn.c(Mr, u, new n(null, 4, [pj, new n(null, 2, [Rh, d.v, Rj, d.T], null), sh, new n(null, 1, [Jj, y.a(s, g)], null), Fj, function() {
                          return function(b) {
                            return Yc.e(b, Xi, xh, F([Gj, K.a(b, yh), Wi, [w("constituency:"), w(K.a(b, yh))].join("")], 0));
                          };
                        }(b, p, s, u, f, k, l, e, c), Ih, Wi], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.Z(), Mb(uc(e))) : Td(l.Z(), null);
                }
                var p = B(e), s = I.c(p, 0, null), u = I.c(p, 1, null);
                return G(nn.c(Mr, u, new n(null, 4, [pj, new n(null, 2, [Rh, d.v, Rj, d.T], null), sh, new n(null, 1, [Jj, y.a(s, g)], null), Fj, function() {
                  return function(b) {
                    return Yc.e(b, Xi, xh, F([Gj, K.a(b, yh), Wi, [w("constituency:"), w(K.a(b, yh))].join("")], 0));
                  };
                }(p, s, u, e, c), Ih, Wi], null)), Mb(C(e)));
              }
              return null;
            }
          }, null, null);
        }(b);
      }()) : null, q(A(e) ? e : null) ? xe(new R(null, 2, 5, S, [th, new R(null, 3, 5, S, [Oj, new n(null, 1, [Jh, "search-results-header"], null), "Companies"], null)], null), function() {
        return function Mb(b) {
          return new Ld(null, function() {
            for (;;) {
              var c = A(b);
              if (c) {
                var e = c;
                if (jd(e)) {
                  var f = tc(e), k = H(f), l = Qd(k);
                  return function() {
                    for (var b = 0;;) {
                      if (b < k) {
                        var p = x.a(f, b), s = I.c(p, 0, null), u = I.c(p, 1, null);
                        Ud(l, nn.c(Mr, u, new n(null, 4, [pj, new n(null, 2, [Rh, d.v, Rj, d.T], null), sh, new n(null, 1, [Jj, y.a(s, g)], null), Fj, function() {
                          return function(b) {
                            return Yc.e(b, Xi, Oh, F([Gj, K.a(b, Zg), Wi, [w("portfolio-company:"), w(K.a(b, Zg))].join("")], 0));
                          };
                        }(b, p, s, u, f, k, l, e, c), Ih, Wi], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.Z(), Mb(uc(e))) : Td(l.Z(), null);
                }
                var p = B(e), s = I.c(p, 0, null), u = I.c(p, 1, null);
                return G(nn.c(Mr, u, new n(null, 4, [pj, new n(null, 2, [Rh, d.v, Rj, d.T], null), sh, new n(null, 1, [Jj, y.a(s, g)], null), Fj, function() {
                  return function(b) {
                    return Yc.e(b, Xi, Oh, F([Gj, K.a(b, Zg), Wi, [w("portfolio-company:"), w(K.a(b, Zg))].join("")], 0));
                  };
                }(p, s, u, e, c), Ih, Wi], null)), Mb(C(e)));
              }
              return null;
            }
          }, null, null);
        }(e);
      }()) : null, q(A(f) ? f : null) ? xe(new R(null, 2, 5, S, [th, new R(null, 3, 5, S, [Oj, new n(null, 1, [Jh, "search-results-header"], null), "Investors"], null)], null), function() {
        return function Mb(b) {
          return new Ld(null, function() {
            for (;;) {
              var c = A(b);
              if (c) {
                var e = c;
                if (jd(e)) {
                  var f = tc(e), k = H(f), l = Qd(k);
                  return function() {
                    for (var b = 0;;) {
                      if (b < k) {
                        var p = x.a(f, b), s = I.c(p, 0, null), u = I.c(p, 1, null);
                        Ud(l, nn.c(Mr, u, new n(null, 4, [pj, new n(null, 2, [Rh, d.v, Rj, d.T], null), sh, new n(null, 1, [Jj, y.a(s, g)], null), Fj, function() {
                          return function(b) {
                            return Yc.e(b, Xi, Aj, F([Gj, K.a(b, ui), Wi, [w("investor-company:"), w(K.a(b, ui))].join("")], 0));
                          };
                        }(b, p, s, u, f, k, l, e, c), Ih, Wi], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.Z(), Mb(uc(e))) : Td(l.Z(), null);
                }
                var p = B(e), s = I.c(p, 0, null), u = I.c(p, 1, null);
                return G(nn.c(Mr, u, new n(null, 4, [pj, new n(null, 2, [Rh, d.v, Rj, d.T], null), sh, new n(null, 1, [Jj, y.a(s, g)], null), Fj, function() {
                  return function(b) {
                    return Yc.e(b, Xi, Aj, F([Gj, K.a(b, ui), Wi, [w("investor-company:"), w(K.a(b, ui))].join("")], 0));
                  };
                }(p, s, u, e, c), Ih, Wi], null)), Mb(C(e)));
              }
              return null;
            }
          }, null, null);
        }(f);
      }()) : null], null)], null);
    }() : null));
  }, Kr.prototype.s = function() {
    return this.tg;
  }, Kr.prototype.t = function(b, c) {
    return new Kr(this.Hc, this.Ye, this.T, this.Rc, this.hh, this.v, this.kh, this.u, this.Ac, this.$g, this.bg, this.cg, this.Ve, this.ag, this.$f, c);
  });
  return new Kr(D, g, p, J, Pr, s, f, c, M, b, l, u, k, e, d, null);
};
var Rr;
function Sr(a) {
  if (a ? a.Dd : a) {
    return a.Dd(a);
  }
  var b;
  b = Sr[m(null == a ? null : a)];
  if (!b && (b = Sr._, !b)) {
    throw v("Event.prevent-default", a);
  }
  return b.call(null, a);
}
function Tr(a) {
  if (a ? a.Ae : a) {
    return a.Ma.target;
  }
  var b;
  b = Tr[m(null == a ? null : a)];
  if (!b && (b = Tr._, !b)) {
    throw v("Event.target", a);
  }
  return b.call(null, a);
}
var Ur = window.document.documentElement, Wr = function Vr(b) {
  return function(c) {
    b.b ? b.b(function() {
      "undefined" === typeof Rr && (Rr = function(b, c, f, g) {
        this.Ma = b;
        this.Na = c;
        this.zd = f;
        this.Qd = g;
        this.p = 0;
        this.g = 393472;
      }, Rr.R = !0, Rr.Q = "domina.events/t27509", Rr.V = function(b, c) {
        return hc(c, "domina.events/t27509");
      }, Rr.prototype.I = function(b, c) {
        var f = this.Ma[c];
        return q(f) ? f : this.Ma[Jd(c)];
      }, Rr.prototype.J = function(b, c, f) {
        b = Eb.a(this, c);
        return q(b) ? b : f;
      }, Rr.prototype.Dd = function() {
        return this.Ma.preventDefault();
      }, Rr.prototype.Ae = function() {
        return this.Ma.target;
      }, Rr.prototype.s = function() {
        return this.Qd;
      }, Rr.prototype.t = function(b, c) {
        return new Rr(this.Ma, this.Na, this.zd, c);
      });
      return new Rr(c, b, Vr, null);
    }()) : b.call(null, function() {
      "undefined" === typeof Rr && (Rr = function(b, c, f, g) {
        this.Ma = b;
        this.Na = c;
        this.zd = f;
        this.Qd = g;
        this.p = 0;
        this.g = 393472;
      }, Rr.R = !0, Rr.Q = "domina.events/t27509", Rr.V = function(b, c) {
        return hc(c, "domina.events/t27509");
      }, Rr.prototype.I = function(b, c) {
        var f = this.Ma[c];
        return q(f) ? f : this.Ma[Jd(c)];
      }, Rr.prototype.J = function(b, c, f) {
        b = Eb.a(this, c);
        return q(b) ? b : f;
      }, Rr.prototype.Dd = function() {
        return this.Ma.preventDefault();
      }, Rr.prototype.Ae = function() {
        return this.Ma.target;
      }, Rr.prototype.s = function() {
        return this.Qd;
      }, Rr.prototype.t = function(b, c) {
        return new Rr(this.Ma, this.Na, this.zd, c);
      });
      return new Rr(c, b, Vr, null);
    }());
    return!0;
  };
};
function Xr(a, b, c) {
  var d = Wr(c), e = Jd(b);
  return dg.b(function() {
    return function g(a) {
      return new Ld(null, function() {
        for (;;) {
          var b = A(a);
          if (b) {
            if (jd(b)) {
              var c = tc(b), s = H(c), u = Qd(s);
              a: {
                for (var D = 0;;) {
                  if (D < s) {
                    var J = x.a(c, D), J = q(!1) ? Mk(J, e, d, !1) : Ik(J, e, d, !1);
                    u.add(J);
                    D += 1;
                  } else {
                    c = !0;
                    break a;
                  }
                }
                c = void 0;
              }
              return c ? Td(u.Z(), g(uc(b))) : Td(u.Z(), null);
            }
            u = B(b);
            return G(q(!1) ? Mk(u, e, d, !1) : Ik(u, e, d, !1), g(C(b)));
          }
          return null;
        }
      }, null, null);
    }(Nq(a));
  }());
}
var Yr = function() {
  function a(a, d) {
    return b.c(Ur, a, d);
  }
  var b = null, b = function(b, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, d);
      case 3:
        return Xr(b, d, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.c = function(a, b, e) {
    return Xr(a, b, e);
  };
  return b;
}();
function Zr() {
  return!0;
}
;/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var $r = function() {
  function a(a, c) {
    if (!a) {
      return[];
    }
    if (a.constructor == Array) {
      return a;
    }
    if (!ga(a)) {
      return[a];
    }
    if (ga(c) && (c = ga(c) ? document.getElementById(c) : c, !c)) {
      return[];
    }
    c = c || document;
    var e = c.ownerDocument || c.documentElement;
    Mc = c.contentType && "application/xml" == c.contentType || ik && (c.doctype || "[object XMLDocument]" == e.toString()) || !!e && (jk ? e.xml : c.xmlVersion || e.xmlVersion);
    return(e = d(a)(c)) && e.Kc ? e : b(e);
  }
  function b(a) {
    if (a && a.Kc) {
      return a;
    }
    var b = [];
    if (!a || !a.length) {
      return b;
    }
    a[0] && b.push(a[0]);
    if (2 > a.length) {
      return b;
    }
    Md++;
    if (jk && Mc) {
      var c = Md + "";
      a[0].setAttribute("_zipIdx", c);
      for (var d = 1, e;e = a[d];d++) {
        a[d].getAttribute("_zipIdx") != c && b.push(e), e.setAttribute("_zipIdx", c);
      }
    } else {
      if (jk && a.Af) {
        try {
          for (d = 1;e = a[d];d++) {
            U(e) && b.push(e);
          }
        } catch (f) {
        }
      } else {
        for (a[0] && (a[0]._zipIdx = Md), d = 1;e = a[d];d++) {
          a[d]._zipIdx != Md && b.push(e), e._zipIdx = Md;
        }
      }
    }
    return b;
  }
  function c(a, b) {
    if (!b) {
      return 1;
    }
    var c = ys(a);
    return b[c] ? 0 : b[c] = 1;
  }
  function d(a, b) {
    if (mo) {
      var c = Nl[a];
      if (c && !b) {
        return c;
      }
    }
    if (c = Ml[a]) {
      return c;
    }
    var c = a.charAt(0), f = -1 == a.indexOf(" ");
    0 <= a.indexOf("#") && f && (b = !0);
    if (!mo || b || -1 != "\x3e~+".indexOf(c) || jk && -1 != a.indexOf(":") || kb && 0 <= a.indexOf(".") || -1 != a.indexOf(":contains") || -1 != a.indexOf("|\x3d")) {
      var g = a.split(/\s*,\s*/);
      return Ml[a] = 2 > g.length ? e(a) : function(a) {
        for (var b = 0, c = [], d;d = g[b++];) {
          c = c.concat(e(d)(a));
        }
        return c;
      };
    }
    var k = 0 <= "\x3e~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return Nl[a] = function(b) {
      try {
        if (9 != b.nodeType && !f) {
          throw "";
        }
        var c = b.querySelectorAll(k);
        jk ? c.Af = !0 : c.Kc = !0;
        return c;
      } catch (e) {
        return d(a, !0)(b);
      }
    };
  }
  function e(a) {
    var b = gb(ua(a));
    if (1 == b.length) {
      var c = f(b[0]);
      return function(a) {
        if (a = c(a, [])) {
          a.Kc = !0;
        }
        return a;
      };
    }
    return function(a) {
      a = cb(a);
      for (var c, d, e = b.length, g, k, l = 0;l < e;l++) {
        k = [];
        c = b[l];
        d = a.length - 1;
        0 < d && (g = {}, k.Kc = !0);
        d = f(c);
        for (var p = 0;c = a[p];p++) {
          d(c, k, g);
        }
        if (!k.length) {
          break;
        }
        a = k;
      }
      return k;
    };
  }
  function f(a) {
    var b = hh[a.Vb];
    if (b) {
      return b;
    }
    var c = a.Ge, c = c ? c.Pc : "", d = p(a, {Mb:1}), e = "*" == a.Ja, f = document.getElementsByClassName;
    if (c) {
      f = {Mb:1}, e && (f.Ja = 1), d = p(a, f), "+" == c ? b = l(d) : "~" == c ? b = k(d) : "\x3e" == c && (b = g(d));
    } else {
      if (a.id) {
        d = !a.Ke && e ? Zr : p(a, {Mb:1, id:1}), b = function(b, c) {
          var e;
          e = b ? new Zl(Yl(b)) : Ol || (Ol = new Zl);
          var f = a.id;
          if ((f = (e = ga(f) ? e.Bd.getElementById(f) : f) && d(e)) && !(f = 9 == b.nodeType)) {
            for (f = e.parentNode;f && f != b;) {
              f = f.parentNode;
            }
            f = !!f;
          }
          if (f) {
            return cb(e, c);
          }
        };
      } else {
        if (f && /\{\s*\[native code\]\s*\}/.test(String(f)) && a.Xa.length && !kb) {
          var d = p(a, {Mb:1, Xa:1, id:1}), s = a.Xa.join(" "), b = function(a, b) {
            for (var c = cb(0, b), e, f = 0, g = a.getElementsByClassName(s);e = g[f++];) {
              d(e, a) && c.push(e);
            }
            return c;
          }
        } else {
          e || a.Ke ? (d = p(a, {Mb:1, Ja:1, id:1}), b = function(b, c) {
            for (var e = cb(0, c), f, g = 0, k = b.getElementsByTagName(a.Id());f = k[g++];) {
              d(f, b) && e.push(f);
            }
            return e;
          }) : b = function(b, c) {
            for (var d = cb(0, c), e, f = 0, g = b.getElementsByTagName(a.Id());e = g[f++];) {
              d.push(e);
            }
            return d;
          };
        }
      }
    }
    return hh[a.Vb] = b;
  }
  function g(a) {
    a = a || Zr;
    return function(b, d, e) {
      for (var f = 0, g = b[wa];b = g[f++];) {
        Lf(b) && (!e || c(b, e)) && a(b, f) && d.push(b);
      }
      return d;
    };
  }
  function k(a) {
    return function(b, d, e) {
      for (b = b[Kf];b;) {
        if (Lf(b)) {
          if (e && !c(b, e)) {
            break;
          }
          a(b) && d.push(b);
        }
        b = b[Kf];
      }
      return d;
    };
  }
  function l(a) {
    return function(b, d, e) {
      for (;b = b[Kf];) {
        if (!gh || U(b)) {
          e && !c(b, e) || !a(b) || d.push(b);
          break;
        }
      }
      return d;
    };
  }
  function p(a, b) {
    if (!a) {
      return Zr;
    }
    b = b || {};
    var c = null;
    b.Mb || (c = ha(c, U));
    b.Ja || "*" != a.Ja && (c = ha(c, function(b) {
      return b && b.tagName == a.Id();
    }));
    b.Xa || Ia(a.Xa, function(a, b) {
      var d = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
      c = ha(c, function(a) {
        return d.test(a.className);
      });
      c.count = b;
    });
    b.xb || Ia(a.xb, function(a) {
      var b = a.name;
      cj[b] && (c = ha(c, cj[b](b, a.value)));
    });
    b.pc || Ia(a.pc, function(a) {
      var b, d = a.ad;
      a.type && Mb[a.type] ? b = Mb[a.type](d, a.Pd) : d.length && (b = dj(d));
      b && (c = ha(c, b));
    });
    b.id || a.id && (c = ha(c, function(b) {
      return!!b && b.id == a.id;
    }));
    c || "default" in b || (c = Zr);
    return c;
  }
  function s(a) {
    return D(a) % 2;
  }
  function u(a) {
    return!(D(a) % 2);
  }
  function D(a) {
    var b = a.parentNode, c = 0, d = b[wa], e = a._i || -1, f = b._l || -1;
    if (!d) {
      return-1;
    }
    d = d.length;
    if (f == d && 0 <= e && 0 <= f) {
      return e;
    }
    b._l = d;
    e = -1;
    for (b = b.firstElementChild || b.firstChild;b;b = b[Kf]) {
      Lf(b) && (b._i = ++c, a === b && (e = c));
    }
    return e;
  }
  function J(a) {
    for (;a = a[Kf];) {
      if (Lf(a)) {
        return!1;
      }
    }
    return!0;
  }
  function M(a) {
    for (;a = a[wp];) {
      if (Lf(a)) {
        return!1;
      }
    }
    return!0;
  }
  function W(a, b) {
    return a ? "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (Mc ? a.getAttribute(b) : a.getAttribute(b, 2)) || "" : "";
  }
  function U(a) {
    return 1 == a.nodeType;
  }
  function ha(a, b) {
    return a ? b ? function() {
      return a.apply(window, arguments) && b.apply(window, arguments);
    } : a : b;
  }
  function gb(a) {
    function b() {
      0 <= p && (U.id = c(p, M).replace(/\\/g, ""), p = -1);
      if (0 <= s) {
        var a = s == M ? null : c(s, M);
        0 > "\x3e~+".indexOf(a) ? U.Ja = a : U.Pc = a;
        s = -1;
      }
      0 <= l && (U.Xa.push(c(l + 1, M).replace(/\\/g, "")), l = -1);
    }
    function c(b, d) {
      return ua(a.slice(b, d));
    }
    a = 0 <= "\x3e~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
    for (var d = [], e = -1, f = -1, g = -1, k = -1, l = -1, p = -1, s = -1, u = "", D = "", J, M = 0, W = a.length, U = null, wa = null;u = D, D = a.charAt(M), M < W;M++) {
      "\\" != u && (U || (J = M, U = {Vb:null, xb:[], pc:[], Xa:[], Ja:null, Pc:null, id:null, Id:function() {
        return Mc ? this.Sg : this.Ja;
      }}, s = M), 0 <= e ? "]" == D ? (wa.ad ? wa.Pd = c(g || e + 1, M) : wa.ad = c(e + 1, M), !(e = wa.Pd) || '"' != e.charAt(0) && "'" != e.charAt(0) || (wa.Pd = e.slice(1, -1)), U.pc.push(wa), wa = null, e = g = -1) : "\x3d" == D && (g = 0 <= "|~^$*".indexOf(u) ? u : "", wa.type = g + D, wa.ad = c(e + 1, M - g.length), g = M + 1) : 0 <= f ? ")" == D && (0 <= k && (wa.value = c(f + 1, M)), k = f = -1) : "#" == D ? (b(), p = M + 1) : "." == D ? (b(), l = M) : ":" == D ? (b(), k = M) : "[" == D ? 
      (b(), e = M, wa = {}) : "(" == D ? (0 <= k && (wa = {name:c(k + 1, M), value:null}, U.xb.push(wa)), f = M) : " " == D && u != D && (b(), 0 <= k && U.xb.push({name:c(k + 1, M)}), U.Ke = U.xb.length || U.pc.length || U.Xa.length, U.Hi = U.Vb = c(J, M), U.Sg = U.Ja = U.Pc ? null : U.Ja || "*", U.Ja && (U.Ja = U.Ja.toUpperCase()), d.length && d[d.length - 1].Pc && (U.Ge = d.pop(), U.Vb = U.Ge.Vb + " " + U.Vb), d.push(U), U = null));
    }
    return d;
  }
  function cb(a, b) {
    var c = b || [];
    a && c.push(a);
    return c;
  }
  var kb = lk && "BackCompat" == document.compatMode, wa = document.firstChild.children ? "children" : "childNodes", Mc = !1, Mb = {"*\x3d":function(a, b) {
    return function(c) {
      return 0 <= W(c, a).indexOf(b);
    };
  }, "^\x3d":function(a, b) {
    return function(c) {
      return 0 == W(c, a).indexOf(b);
    };
  }, "$\x3d":function(a, b) {
    return function(c) {
      c = " " + W(c, a);
      return c.lastIndexOf(b) == c.length - b.length;
    };
  }, "~\x3d":function(a, b) {
    var c = " " + b + " ";
    return function(b) {
      return 0 <= (" " + W(b, a) + " ").indexOf(c);
    };
  }, "|\x3d":function(a, b) {
    b = " " + b;
    return function(c) {
      c = " " + W(c, a);
      return c == b || 0 == c.indexOf(b + "-");
    };
  }, "\x3d":function(a, b) {
    return function(c) {
      return W(c, a) == b;
    };
  }}, gh = "undefined" == typeof document.firstChild.nextElementSibling, Kf = gh ? "nextSibling" : "nextElementSibling", wp = gh ? "previousSibling" : "previousElementSibling", Lf = gh ? U : Zr, cj = {checked:function() {
    return function(a) {
      return a.checked || a.attributes.checked;
    };
  }, "first-child":function() {
    return M;
  }, "last-child":function() {
    return J;
  }, "only-child":function() {
    return function(a) {
      return M(a) && J(a) ? !0 : !1;
    };
  }, empty:function() {
    return function(a) {
      var b = a.childNodes;
      for (a = a.childNodes.length - 1;0 <= a;a--) {
        var c = b[a].nodeType;
        if (1 === c || 3 == c) {
          return!1;
        }
      }
      return!0;
    };
  }, contains:function(a, b) {
    var c = b.charAt(0);
    if ('"' == c || "'" == c) {
      b = b.slice(1, -1);
    }
    return function(a) {
      return 0 <= a.innerHTML.indexOf(b);
    };
  }, not:function(a, b) {
    var c = gb(b)[0], d = {Mb:1};
    "*" != c.Ja && (d.Ja = 1);
    c.Xa.length || (d.Xa = 1);
    var e = p(c, d);
    return function(a) {
      return!e(a);
    };
  }, "nth-child":function(a, b) {
    if ("odd" == b) {
      return s;
    }
    if ("even" == b) {
      return u;
    }
    if (-1 != b.indexOf("n")) {
      var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, e = c[1] ? parseInt(c[1], 10) : 0, f = 0, g = -1;
      0 < d ? 0 > e ? e = e % d && d + e % d : 0 < e && (e >= d && (f = e - e % d), e %= d) : 0 > d && (d *= -1, 0 < e && (g = e, e %= d));
      if (0 < d) {
        return function(a) {
          a = D(a);
          return a >= f && (0 > g || a <= g) && a % d == e;
        };
      }
      b = e;
    }
    var k = parseInt(b, 10);
    return function(a) {
      return D(a) == k;
    };
  }}, dj = jk ? function(a) {
    var b = a.toLowerCase();
    "class" == b && (a = "className");
    return function(c) {
      return Mc ? c.getAttribute(a) : c[a] || c[b];
    };
  } : function(a) {
    return function(b) {
      return b && b.getAttribute && b.hasAttribute(a);
    };
  }, hh = {}, Ml = {}, Nl = {}, mo = !!document.querySelectorAll && (!lk || uk("526")), Md = 0, ys = jk ? function(a) {
    return Mc ? a.getAttribute("_uid") || a.setAttribute("_uid", ++Md) || Md : a.uniqueID;
  } : function(a) {
    return a._uid || (a._uid = ++Md);
  };
  a.xb = cj;
  return a;
}();
ca("goog.dom.query", $r);
ca("goog.dom.query.pseudos", $r.xb);
var as, bs = function() {
  function a(a, b) {
    "undefined" === typeof as && (as = function(a, b, c, d) {
      this.tb = a;
      this.jb = b;
      this.jh = c;
      this.Ag = d;
      this.p = 0;
      this.g = 393216;
    }, as.R = !0, as.Q = "domina.css/t28152", as.V = function(a, b) {
      return hc(b, "domina.css/t28152");
    }, as.prototype.Kb = function() {
      var a = this;
      return re.a(function(b) {
        return Vq($r(a.tb, b));
      }, Nq(a.jb));
    }, as.prototype.Cd = function() {
      var a = this;
      return B(te(ee(hb), re.a(function(b) {
        return Vq($r(a.tb, b));
      }, Nq(a.jb))));
    }, as.prototype.s = function() {
      return this.Ag;
    }, as.prototype.t = function(a, b) {
      return new as(this.tb, this.jb, this.jh, b);
    });
    return new as(b, a, c, null);
  }
  function b(a) {
    return c.a(Vl()[0], a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function cs() {
  Yr.c(bs.b("#nav .search \x3e a"), fi, function(a) {
    var b = Tr(a), b = $q.a(b, "..");
    Sr(a);
    a = A(Nq(b));
    for (var b = null, c = 0, d = 0;;) {
      if (d < c) {
        var e = b.w(null, d);
        Ul(e);
        d += 1;
      } else {
        if (a = A(a)) {
          b = a, jd(b) ? (a = tc(b), d = uc(b), b = a, c = H(a), a = d) : (a = B(b), Ul(a), a = E(b), b = null, c = 0), d = 0;
        } else {
          break;
        }
      }
    }
    return Op.b(B(bs.b("#search").Kb(null))).toggle();
  });
}
function ds() {
  Yr.c(bs.b("#map-report \x3e a"), fi, function(a) {
    Tr(a);
    var b = bs.b("#map-report");
    Sr(a);
    a = Oq(b);
    a = Ka(Ql(a), "open");
    if (q(a)) {
      return Qq(b, "open"), Op.b(B(b.Kb(null))).jf(Bg(new n(null, 1, ["right", "-270px"], null)), 400);
    }
    Pq(b, "open");
    return Op.b(B(b.Kb(null))).jf(Bg(new n(null, 1, ["right", "0px"], null)), 400);
  });
}
var es = new n(null, 2, ["map", "view-map", "lists", "view-lists"], null);
function fs(a) {
  for (var b = A(es), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.w(null, e), g = I.c(f, 0, null), k = I.c(f, 1, null);
      Yr.c(bs.b([w("#nav ."), w(g), w(" \x3e a")].join("")), fi, function(b, c, d, e, f, g) {
        return function(b) {
          Sr(b);
          return uq.a(a, new R(null, 2, 5, S, [Ej, g], null));
        };
      }(b, c, d, e, f, g, k));
      e += 1;
    } else {
      var l = A(b);
      if (l) {
        f = l;
        if (jd(f)) {
          b = tc(f), e = uc(f), c = b, d = H(b), b = e;
        } else {
          var p = B(f), g = I.c(p, 0, null), k = I.c(p, 1, null);
          Yr.c(bs.b([w("#nav ."), w(g), w(" \x3e a")].join("")), fi, function(b, c, d, e, f, g) {
            return function(b) {
              Sr(b);
              return uq.a(a, new R(null, 2, 5, S, [Ej, g], null));
            };
          }(b, c, d, e, p, g, k, f, l));
          b = E(f);
          c = null;
          d = 0;
        }
        e = 0;
      } else {
        break;
      }
    }
  }
}
function gs(a) {
  Op.b("[data-toggle\x3d'tooltip']").qh();
  cs();
  ds();
  fs(a);
}
;var hs = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = F(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    e = I.c(e, 0, null);
    return 1 === a ? b : q(e) ? e : [w(b), w("s")].join("");
  }
  a.l = 2;
  a.h = function(a) {
    var d = B(a);
    a = E(a);
    var e = B(a);
    a = C(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}();
var is, js, ks, ls;
function ms(a) {
  return React.d.button({className:"btn", type:"button", onClick:function() {
    return uq.a(a, new R(null, 2, 5, S, [Ej, "lists"], null));
  }}, React.d.o({className:"icon-lists-sm"}), "Full report");
}
function ns(a) {
  return new n(null, 3, [di, null == a ? null : Rg.b(a), Ti, null == a ? null : oi.b(a), Lg, null == a ? null : Gi.b(a)], null);
}
var ps = function os(b, c) {
  var d = ns(b), d = P(d) ? N.a(Mf, d) : d, e = K.a(d, Lg), f = K.a(d, Ti), g = K.a(d, di);
  "undefined" === typeof is && (is = function(b, c, d, e, f, g, J, M) {
    this.va = b;
    this.ta = c;
    this.ia = d;
    this.Uf = e;
    this.v = f;
    this.Y = g;
    this.hf = J;
    this.ng = M;
    this.p = 0;
    this.g = 393216;
  }, is.R = !0, is.Q = "clustermap.components.map-report/t22745", is.V = function(b, c) {
    return hc(c, "clustermap.components.map-report/t22745");
  }, is.prototype.Ga = !0, is.prototype.Da = function() {
    var b = this;
    return React.d.S(null, React.d.Kd({className:"secondary"}, React.d.bc(null, "All portfolio companies"), React.d.eb(null, "UK wide")), React.d.ce(null, function() {
      var c = Z.c ? Z.c(b.va, z, "-") : Z.call(null, b.va, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Companies listed")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Companies listed"));
    }(), function() {
      var c = Z.c ? Z.c(b.ta, z, "-") : Z.call(null, b.ta, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Investors listed")) : React.d.A(null, V(c), React.d.small(null, "Investors listed"));
    }(), function() {
      var c = Z.c ? Z.c(b.ia, z, "-") : Z.call(null, b.ia, z, "-");
      return O(c) ? React.d.A(X(c), function() {
        var c = hs.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = hs.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = vn.m ? vn.m(function() {
        var c = b.Y, c = null == c ? null : Ui.b(c);
        return null == c ? null : Bh.b(c);
      }(), ij, 2, z, "-") : vn.call(null, function() {
        var c = b.Y, c = null == c ? null : Ui.b(c);
        return null == c ? null : Bh.b(c);
      }(), ij, 2, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.Y, c = null == c ? null : yi.b(c);
        return null == c ? null : Bh.b(c);
      }(), Pi, 0, z, "-") : Z.call(null, function() {
        var c = b.Y, c = null == c ? null : yi.b(c);
        return null == c ? null : Bh.b(c);
      }(), Pi, 0, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Employees"));
    }()), V(ms(b.v)));
  }, is.prototype.s = function() {
    return this.ng;
  }, is.prototype.t = function(b, c) {
    return new is(this.va, this.ta, this.ia, this.Uf, this.v, this.Y, this.hf, c);
  });
  return new is(g, f, e, d, c, b, os, null);
}, rs = function qs(b, c, d) {
  var e = ns(c), e = P(e) ? N.a(Mf, e) : e, f = K.a(e, Lg), g = K.a(e, Ti), k = K.a(e, di);
  "undefined" === typeof js && (js = function(b, c, d, e, f, g, k, W, U) {
    this.va = b;
    this.ta = c;
    this.ia = d;
    this.Vf = e;
    this.v = f;
    this.Y = g;
    this.Sc = k;
    this.dh = W;
    this.og = U;
    this.p = 0;
    this.g = 393216;
  }, js.R = !0, js.Q = "clustermap.components.map-report/t22801", js.V = function(b, c) {
    return hc(c, "clustermap.components.map-report/t22801");
  }, js.prototype.Ga = !0, js.prototype.Da = function() {
    var b = this;
    return React.d.S(null, React.d.Kd({className:"secondary"}, React.d.bc(null, "Portfolio Company"), function() {
      var c = Vh.b(b.Sc);
      return O(c) ? React.d.eb(X(c), null) : React.d.eb(null, V(c));
    }()), React.d.ce(null, function() {
      var c = Z.b ? Z.b(b.ta) : Z.call(null, b.ta);
      return O(c) ? React.d.A(X(c), function() {
        var c = hs(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = hs(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = Z.b ? Z.b(b.ia) : Z.call(null, b.ia);
      return O(c) ? React.d.A(X(c), function() {
        var c = hs.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = hs.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = vn.m ? vn.m(function() {
        var c = b.Y, c = null == c ? null : Ui.b(c);
        return null == c ? null : Bh.b(c);
      }(), ij, 2, z, "-") : vn.call(null, function() {
        var c = b.Y, c = null == c ? null : Ui.b(c);
        return null == c ? null : Bh.b(c);
      }(), ij, 2, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.Y, c = null == c ? null : yi.b(c);
        return null == c ? null : Bh.b(c);
      }(), Pi, 0, z, "-") : Z.call(null, function() {
        var c = b.Y, c = null == c ? null : yi.b(c);
        return null == c ? null : Bh.b(c);
      }(), Pi, 0, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Employees"));
    }()), V(ms(b.v)));
  }, js.prototype.s = function() {
    return this.og;
  }, js.prototype.t = function(b, c) {
    return new js(this.va, this.ta, this.ia, this.Vf, this.v, this.Y, this.Sc, this.dh, c);
  });
  return new js(k, g, f, e, d, c, b, qs, null);
}, ts = function ss(b, c, d) {
  var e = ns(c), e = P(e) ? N.a(Mf, e) : e, f = K.a(e, Lg), g = K.a(e, Ti), k = K.a(e, di);
  "undefined" === typeof ks && (ks = function(b, c, d, e, f, g, k, W, U) {
    this.va = b;
    this.ta = c;
    this.ia = d;
    this.Wf = e;
    this.v = f;
    this.Y = g;
    this.He = k;
    this.Lf = W;
    this.pg = U;
    this.p = 0;
    this.g = 393216;
  }, ks.R = !0, ks.Q = "clustermap.components.map-report/t22851", ks.V = function(b, c) {
    return hc(c, "clustermap.components.map-report/t22851");
  }, ks.prototype.Ga = !0, ks.prototype.Da = function() {
    var b = this;
    return React.d.S(null, React.d.Kd({className:"secondary"}, React.d.bc(null, "Investor"), function() {
      var c = Vh.b(b.He);
      return O(c) ? React.d.eb(X(c), null) : React.d.eb(null, V(c));
    }()), React.d.ce(null, function() {
      var c = Z.b ? Z.b(b.va) : Z.call(null, b.va);
      return O(c) ? React.d.A(X(c), function() {
        var c = hs.e(b.va, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = hs.e(b.va, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = Z.b ? Z.b(b.ia) : Z.call(null, b.ia);
      return O(c) ? React.d.A(X(c), function() {
        var c = hs.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = hs.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = vn.m ? vn.m(function() {
        var c = b.Y, c = null == c ? null : Ui.b(c);
        return null == c ? null : Bh.b(c);
      }(), ij, 2, z, "-") : vn.call(null, function() {
        var c = b.Y, c = null == c ? null : Ui.b(c);
        return null == c ? null : Bh.b(c);
      }(), ij, 2, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.Y, c = null == c ? null : yi.b(c);
        return null == c ? null : Bh.b(c);
      }(), Pi, 0, z, "-") : Z.call(null, function() {
        var c = b.Y, c = null == c ? null : yi.b(c);
        return null == c ? null : Bh.b(c);
      }(), Pi, 0, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Employees"));
    }()), V(ms(b.v)));
  }, ks.prototype.s = function() {
    return this.pg;
  }, ks.prototype.t = function(b, c) {
    return new ks(this.va, this.ta, this.ia, this.Wf, this.v, this.Y, this.He, this.Lf, c);
  });
  return new ks(k, g, f, e, d, c, b, ss, null);
}, vs = function us(b, c, d) {
  var e = ns(c), e = P(e) ? N.a(Mf, e) : e, f = K.a(e, Lg), g = K.a(e, Ti), k = K.a(e, di);
  "undefined" === typeof ls && (ls = function(b, c, d, e, f, g, k, W, U) {
    this.va = b;
    this.ta = c;
    this.ia = d;
    this.Xf = e;
    this.v = f;
    this.Y = g;
    this.Jb = k;
    this.Df = W;
    this.qg = U;
    this.p = 0;
    this.g = 393216;
  }, ls.R = !0, ls.Q = "clustermap.components.map-report/t22901", ls.V = function(b, c) {
    return hc(c, "clustermap.components.map-report/t22901");
  }, ls.prototype.Ga = !0, ls.prototype.Da = function() {
    var b = this;
    return React.d.S(null, React.d.Kd({className:"secondary"}, React.d.bc(null, "Constituency"), function() {
      var c = Vh.b(b.Jb);
      return O(c) ? React.d.eb(X(c), React.d.small(null, "(", V(wj.b(b.Jb)), ", ", V(Tj.b(b.Jb)), ")")) : React.d.eb(null, V(c), React.d.small(null, "(", V(wj.b(b.Jb)), ", ", V(Tj.b(b.Jb)), ")"));
    }()), React.d.ce(null, function() {
      var c = Z.b ? Z.b(b.va) : Z.call(null, b.va);
      return O(c) ? React.d.A(X(c), function() {
        var c = hs.e(b.va, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = hs.e(b.va, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = Z.b ? Z.b(b.ta) : Z.call(null, b.ta);
      return O(c) ? React.d.A(X(c), function() {
        var c = hs(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = hs(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = vn.m ? vn.m(function() {
        var c = b.Y, c = null == c ? null : Ui.b(c);
        return null == c ? null : Bh.b(c);
      }(), ij, 2, z, "-") : vn.call(null, function() {
        var c = b.Y, c = null == c ? null : Ui.b(c);
        return null == c ? null : Bh.b(c);
      }(), ij, 2, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.Y, c = null == c ? null : yi.b(c);
        return null == c ? null : Bh.b(c);
      }(), Pi, 0, z, "-") : Z.call(null, function() {
        var c = b.Y, c = null == c ? null : yi.b(c);
        return null == c ? null : Bh.b(c);
      }(), Pi, 0, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Employees"));
    }()), V(ms(b.v)));
  }, ls.prototype.s = function() {
    return this.qg;
  }, ls.prototype.t = function(b, c) {
    return new ls(this.va, this.ta, this.ia, this.Xf, this.v, this.Y, this.Jb, this.Df, c);
  });
  return new ls(k, g, f, e, d, c, b, us, null);
};
function ws(a, b) {
  var c = Zm.a(b, Rh), d = ze.a(a, new R(null, 2, 5, S, [Sh, Xi], null)), e = ze.a(a, new R(null, 2, 5, S, [Sh, Hj], null)), f = ch.b(a);
  return q(xd.a ? xd.a(Oh, d) : xd.call(null, Oh, d)) ? rs(e, f, c) : q(xd.a ? xd.a(Aj, d) : xd.call(null, Aj, d)) ? ts(e, f, c) : q(xd.a ? xd.a(xh, d) : xd.call(null, xh, d)) ? vs(e, f, c) : ps(f, c);
}
;var xs, zs, As, Bs = config, Cs = null == Bs ? null : Bs.mi, Ds = null == Cs ? null : Cs.map;
As = null == Ds ? null : Ds.Yh;
zs = q(As) ? As : "mccraigmccraig.h4f921b9";
function Es(a) {
  a = L.map.call(null, a, {zoomControl:!1});
  var b = L.xi.Si.call(null, zs, {detectRetina:ib(config.fh)}), c = L.control.zoom.call(null, {position:"bottomright"});
  a.Vh(b);
  a.Uh(c);
  a.Gf(Bg(new R(null, 2, 5, S, [new R(null, 2, 5, S, [59.54, 2.3], null), new R(null, 2, 5, S, [49.29, -11.29], null)], null)), Bg(new n(null, 2, ["paddingTopLeft", new R(null, 2, 5, S, [0, 0], null), "paddingBottomRight", new R(null, 2, 5, S, [0, 0], null)], null)));
  return new n(null, 4, [Th, a, Dh, tg.b(pf), Ni, tg.b(pf), ki, tg.b(Vf)], null);
}
var Fs = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    if (q(A(b) ? b : null)) {
      var e = B(b), f = new L.Fh(e.si(), e.ri()), e = ob.c(function() {
        return function(a, b) {
          return a.extend(b);
        };
      }(e, f), f, C(b));
      return a.Gf(e);
    }
    return null;
  }
  a.l = 1;
  a.h = function(a) {
    var d = B(a);
    a = C(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}();
function Gs(a, b) {
  return "" + w(function() {
    var c = he.a(function(b) {
      return[w("\x3cdiv"), w(' class\x3d"map-marker-popup-location-list"'), w("\x3e"), w("\x3cli"), w(""), w("\x3e"), w("\x3ca"), w(In(new n(null, 3, [Og, a.a ? a.a(Oh, b) : a.call(null, Oh, b), Gj, null, Jh, null], null))), w("\x3e"), w(Kn(Vh.b(b))), w("\x3c/a\x3e"), w("\x3c/li\x3e"), w("\x3c/div\x3e")].join("");
    }, b);
    return O(c) ? [w("\x3cul"), w(In(Sf.e(F([new n(null, 2, [Gj, null, Jh, null], null), c], 0)))), w("\x3e"), w("\x3c/ul\x3e")].join("") : [w("\x3cul\x3e"), w(Kn(c)), w("\x3c/ul\x3e")].join("");
  }());
}
function Hs(a, b, c) {
  var d = function() {
    var a = null == c ? null : B(c), a = null == a ? null : ii.b(a), a = null == a ? null : Fd(a);
    return null == a ? null : Bg(a);
  }();
  return q(d) ? (d = L.yi(d), a = Gs(a, c), d.Zh(a), d.ff(b), d) : console.log([w("missing location: "), w(function() {
    var a = new Wa, b = Ya;
    try {
      Ya = function(b) {
        return a.append(b);
      }, qg.e(F([c], 0));
    } finally {
      Ya = b;
    }
    return "" + w(a);
  }())].join(""));
}
function Is(a, b, c, d) {
  var e = Tb(c), f = Wf(Pf(e)), g = Wf(Pf(d)), k = km.a(f, g), l = lm.a(g, f), p = lm.a(f, g), s = xe(pf, he.a(function() {
    return function(c) {
      return new R(null, 2, 5, S, [c, Hs(a, b, K.a(d, c))], null);
    };
  }(e, f, g, k, l, p), l)), f = xe(pf, he.a(function(b) {
    return function(c) {
      var e = S, f = K.a(b, c), g = K.a(d, c);
      f.Ri(Gs(a, g));
      return new R(null, 2, 5, e, [c, f], null);
    };
  }(e, f, g, k, l, p, s), k));
  (function() {
    for (var a = A(p), c = null, d = 0, f = 0;;) {
      if (f < d) {
        var g = c.w(null, f), g = K.a(e, g);
        b.Uc(g);
        f += 1;
      } else {
        if (a = A(a)) {
          jd(a) ? (d = tc(a), a = uc(a), c = d, d = H(d)) : (g = B(a), c = K.a(e, g), b.Uc(c), a = E(a), c = null, d = 0), f = 0;
        } else {
          return null;
        }
      }
    }
  })();
  ug(c, Sf.e(F([f, s], 0)));
}
function Js(a) {
  a = Gg.b(a);
  a = P(a) ? N.a(Mf, a) : a;
  a = K.a(a, "coordinates");
  var b = I.c(a, 0, null), c = I.c(b, 0, null);
  a = I.c(c, 0, null);
  var c = I.c(c, 1, null), d = I.c(b, 1, null);
  I.c(d, 0, null);
  I.c(d, 1, null);
  var e = I.c(b, 2, null), d = I.c(e, 0, null), e = I.c(e, 1, null), f = I.c(b, 3, null);
  I.c(f, 0, null);
  I.c(f, 1, null);
  b = I.c(b, 4, null);
  I.c(b, 0, null);
  I.c(b, 1, null);
  return L.vi(Bg(new R(null, 2, 5, S, [new R(null, 2, 5, S, [c, a], null), new R(null, 2, 5, S, [e, d], null)], null)));
}
function Ks(a, b, c, d) {
  b = q(b) ? b[c] : null;
  var e = q(b) ? b.tolerance : null;
  b = q(b) ? new R(null, 2, 5, S, [e, b], null) : null;
  a = a.i ? a.i(c, d, Mi, 7) : a.call(null, c, d, Mi, 7);
  return q(a) ? a : b;
}
function Ls(a, b) {
  var c = P(b) ? N.a(Mf, b) : b, d = K.a(c, kj), c = K.a(c, Jj);
  q(q(c) ? d : c) ? a.be(Bg(new n(null, 5, [bi, "#0000ff", Ph, 3, Qh, 1, Ki, !0, ci, 0.3], null))) : q(c) ? a.be(Bg(new n(null, 5, [bi, "#0000ff", Ph, 3, Qh, 1, Ki, !0, ci, 0.3], null))) : q(d) ? a.be(Bg(new n(null, 4, [bi, "#000000", Ph, 3, Qh, 1, Ki, !1], null))) : a.be(Bg(new n(null, 5, [bi, "#ff0000", Ph, 3, Qh, 0, Ki, !1, ci, 0], null)));
}
function Ms(a, b, c, d, e) {
  e = P(e) ? N.a(Mf, e) : e;
  var f = K.a(e, Jj), g = d.tolerance, k = Js(d.envelope);
  d = L.oi(d.geojson);
  Ls(d, e);
  d.ff(b);
  d.jc("click", function() {
    return uq.a(a, new R(null, 2, 5, S, [Kj, new R(null, 2, 5, S, [xh, c], null)], null));
  });
  return new n(null, 5, [Gj, c, $h, g, Jj, f, Bj, d, ji, k], null);
}
function Ns(a, b, c, d, e, f, g, k) {
  if (q(c)) {
    var l = Tb(e), p = Wf(Pf(l)), s = Tb(f);
    k = Wf(N.a(Yd, he.a(fe.a(Vg, ah), N.a(Yd, Rf(k)))));
    var u = jm.a(k, g), D = lm.a(u, p), J = lm.a(p, u), M = km.a(p, u), W = he.a(function(e, f, k, l) {
      return function(e) {
        var f = new n(null, 2, [Jj, pd(l, e), kj, pd(g, e)], null), k = Ks(b, c, e, d.Jd());
        q(k) ? (I.c(k, 0, null), k = I.c(k, 1, null), e = Ms(a, d, e, k, f)) : e = null;
        return e;
      };
    }(l, p, s, k, u, D, J, M), D), U = he.a(function(e, f, k, l) {
      return function(f) {
        a: {
          var k = K.a(e, f);
          f = new n(null, 2, [Jj, pd(l, f), kj, pd(g, f)], null);
          var k = P(k) ? N.a(Mf, k) : k, p = K.a(k, Gj), s = Ks(b, c, p, d.Jd());
          if (q(s)) {
            p = I.c(s, 0, null);
            s = I.c(s, 1, null);
            if (ae.a(p, $h.b(k))) {
              d.Uc(Bj.b(k));
              f = Ms(a, d, Gj.b(k), s, f);
              break a;
            }
            Ls(Bj.b(k), f);
          }
          f = k;
        }
        return f;
      };
    }(l, p, s, k, u, D, J, M, W), M), ha = function() {
      for (var a = A(J), b = null, c = 0, e = 0;;) {
        if (e < c) {
          var f = b.w(null, e), f = K.a(l, f);
          q(f) && d.Uc(Bj.b(f));
          e += 1;
        } else {
          if (a = A(a)) {
            jd(a) ? (c = tc(a), a = uc(a), b = c, c = H(c)) : (f = B(a), b = K.a(l, f), q(b) && d.Uc(Bj.b(b)), a = E(a), b = null, c = 0), e = 0;
          } else {
            return null;
          }
        }
      }
    }(), p = ob.c(function() {
      return function(a, b) {
        var c = P(b) ? N.a(Mf, b) : b, d = K.a(c, Gj);
        return Yc.c(a, d, c);
      };
    }(l, p, s, k, u, D, J, M, W, U, ha), pf, te(de, Yd.a(W, U)));
    ug(f, k);
    ug(e, p);
  }
}
function Os(a, b, c, d) {
  c = Tb(c);
  d = Tb(d);
  if (fd(c)) {
    return rn(a, ri, !0);
  }
  rn(a, ri, !1);
  a: {
    a = pf;
    for (d = A(d);;) {
      if (d) {
        var e = B(d), f = K.c(c, e, ej);
        a = ae.a(f, ej) ? Yc.c(a, e, f) : a;
        d = E(d);
      } else {
        c = a;
        break a;
      }
    }
    c = void 0;
  }
  c = null == c ? null : Rf(c);
  c = null == c ? null : he.a(ji, c);
  return q(c) ? N.c(Fs, b, c) : null;
}
var Qs = function Ps(b, c) {
  var d = P(b) ? N.a(Mf, b) : b, e = K.a(d, Sh);
  "undefined" === typeof xs && (xs = function(b, c, d, e, p, s, u) {
    this.selection = b;
    this.de = c;
    this.Tf = d;
    this.u = e;
    this.Xg = p;
    this.eg = s;
    this.mg = u;
    this.p = 0;
    this.g = 393216;
  }, xs.R = !0, xs.Q = "clustermap.components.map/t22684", xs.V = function(b, c) {
    return hc(c, "clustermap.components.map/t22684");
  }, xs.prototype.Mg = !0, xs.prototype.Qe = function(b, c, d) {
    var e = this, p = P(c) ? N.a(Mf, c) : c;
    b = K.a(p, Sh);
    c = K.a(p, hi);
    var s = K.a(p, wh), u = K.a(p, vi);
    K.a(p, nh);
    K.a(p, jj);
    d = P(d) ? N.a(Mf, d) : d;
    d = K.a(d, si);
    var p = Xm(e.u), p = P(p) ? N.a(Mf, p) : p, p = K.a(p, vi), D = Zm.b(e.u), J = P(D) ? N.a(Mf, D) : D, D = K.a(J, Rj);
    K.a(J, vh);
    var M = K.a(J, Eh), W = K.a(J, Rh), J = Ym.b(e.u), J = P(J) ? N.a(Mf, J) : J, U = K.a(J, qh), ha = P(U) ? N.a(Mf, U) : U, U = K.a(ha, ki), gb = K.a(ha, Ni), cb = K.a(ha, Dh), kb = K.a(ha, Th), ha = K.a(J, ri);
    K.a(J, si);
    Is(D, kb, cb, c);
    ae.a(u, p) && (kb.jc("mousemove", function(b) {
      var c = b.Od.Mf;
      b = b.Od.Nf;
      var d = Wj(u, b, c), f = he.a(function() {
        return function(b) {
          return b.Se.id;
        };
      }(c, b, d), d), g = B(d), d = Wf(je(1, f)), f = Ym.a(e.u, si);
      q(q(g) ? ae.a(f, d) : g) && (f = L.Ki(), f.Qi(Bg(new R(null, 2, 5, S, [c, b], null))), f.Pi([w("\x3cp\x3e"), w(function() {
        var b = null == g ? null : g.Se;
        return null == b ? null : b.li;
      }()), w("\x3c/p\x3e")].join("")), f.Fi(kb));
      return rn(e.u, si, d);
    }), kb.jc("click", function(b) {
      b = Wj(u, b.Od.Nf, b.Od.Mf);
      b = he.a(function() {
        return function(b) {
          return b.Se.id;
        };
      }(b), b);
      return uq.a(W, new R(null, 2, 5, S, [Kj, new R(null, 2, 5, S, [xh, B(b)], null)], null));
    }));
    q(s) && Ns(W, M, s, kb, gb, U, d, c);
    return q(q(ha) ? ha : ae.a(b, e.selection)) ? Os(e.u, kb, gb, U) : null;
  }, xs.prototype.Me = !0, xs.prototype.Td = function(b, c) {
    var d = this, e = Es(c), e = P(e) ? N.a(Mf, e) : e;
    K.a(e, Ng);
    K.a(e, Dh);
    var p = K.a(e, Th);
    rn(d.u, qh, e);
    rn(d.u, si, Vf);
    p.jc("zoomend", function() {
      return vg.i(Zm.a(d.u, Di), Yc, jj, p.Jd());
    });
    Op.b(document).jc("clustermap-change-view", function() {
      console.log("change-view");
      var b = Ym.b(d.u), b = P(b) ? N.a(Mf, b) : b, b = K.a(b, qh), c = P(b) ? N.a(Mf, b) : b, b = K.a(c, ki), c = K.a(c, Ni);
      p.ui();
      return Os(d.u, p, c, b);
    });
    return pn.i(d.de, Yc, jj, p.Jd());
  }, xs.prototype.Ga = !0, xs.prototype.Da = function() {
    return React.d.S({className:"map", ref:"map"});
  }, xs.prototype.s = function() {
    return this.mg;
  }, xs.prototype.t = function(b, c) {
    return new xs(this.selection, this.de, this.Tf, this.u, this.Xg, this.eg, c);
  });
  return new xs(e, d, d, c, b, Ps, null);
};
var Rs = tg.b(Xc([Mg, ch, kh, nh, wh, Nh, Sh, Uh, hi, vi, Vi, Yi, jj, Vj], [qh, null, null, null, null, null, null, Ue, null, null, pf, null, null, null]));
function Ss(a, b) {
  return ob.c(function(a, b) {
    var e = I.c(b, 0, null), f = I.c(b, 1, null), e = hd(e) ? e : new R(null, 1, 5, S, [e], null);
    return Ce.c(a, e, $c(f) ? f : function() {
      return f;
    });
  }, a, b);
}
var Ts = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = P(a) ? N.a(Mf, a) : a;
    return vg.c(Rs, Ss, a);
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Us() {
  var a = sq.b(1);
  fo(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Id(b, T)) {
                      return b;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return c[5] = e, iq(c), T;
                  }
                  if (t) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!Id(e, T)) {
                return e;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null];
            a[0] = g;
            a[1] = 1;
            return a;
          }
          var g = null, g = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          g.q = c;
          g.b = b;
          return g;
        }();
      }(function(a) {
        var b = a[1];
        if (2 === b) {
          var b = a[2], c = new RTree(10), g = Object.keys(b), k = [], l = Bg(new n(null, 1, [Xi, "FeatureCollection"], null));
          l.features = k;
          for (var g = A(g), p = null, s = 0, u = 0;;) {
            if (u < s) {
              var D = p.w(null, u), J = b[D], D = J.geojson, J = Bg(new n(null, 2, [Xi, "Feature", wi, new n(null, 2, [Gj, J.id, Mj, J.compact_name], null)], null));
              J.geometry = D;
              k.push(J);
              u += 1;
            } else {
              if (g = A(g)) {
                jd(g) ? (s = tc(g), g = uc(g), p = s, s = H(s)) : (p = B(g), s = b[p], p = s.geojson, s = Bg(new n(null, 2, [Xi, "Feature", wi, new n(null, 2, [Gj, s.id, Mj, s.compact_name], null)], null)), s.geometry = p, k.push(s), g = E(g), p = null, s = 0), u = 0;
              } else {
                break;
              }
            }
          }
          c.ni(l);
          b = Ts.e(F([wh, b, vi, c], 0));
          return hq(a, b);
        }
        return 1 === b ? (b = gr.e("uk_constituencies", F([mh, !0], 0)), fq(a, 2, b)) : null;
      });
    }(), c = function() {
      var c = b.q ? b.q() : b.call(null);
      c[6] = a;
      return c;
    }();
    return eq(c);
  });
}
function Vs() {
  var a = sq.b(1);
  fo(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Id(b, T)) {
                      return b;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return c[5] = e, iq(c), T;
                  }
                  if (t) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!Id(e, T)) {
                return e;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null];
            a[0] = g;
            a[1] = 1;
            return a;
          }
          var g = null, g = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          g.q = c;
          g.b = b;
          return g;
        }();
      }(function(a) {
        var b = a[1];
        return 2 === b ? (b = Ts.e(F([Yi, a[2]], 0)), hq(a, b)) : 1 === b ? (b = kr(), fq(a, 2, b)) : null;
      });
    }(), c = function() {
      var c = b.q ? b.q() : b.call(null);
      c[6] = a;
      return c;
    }();
    return eq(c);
  });
}
var Ws = new ko;
function Xs(a, b, c) {
  return q(q(b) ? c : b) ? Ao(Ws, [w("/"), w(Jd(q(a) ? a : "map")), w("/"), w(Jd(b)), w("/"), w(Jd(c))].join("")) : q(a) ? Ao(Ws, [w("/"), w(Jd(a))].join("")) : Ao(Ws, "" + w(""));
}
function Ys() {
  var a = so(Ws), b = eg(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/, a);
  I.c(b, 0, null);
  var a = I.c(b, 1, null), c = I.c(b, 2, null), b = I.c(b, 3, null);
  return new n(null, 3, [Mg, a, Xi, c, Gj, b], null);
}
var Zs = new n(null, 5, [ih, cr(function(a) {
  if (0 < H(ua(a))) {
    a = ar([w("/api/"), w(er), w("/search?q\x3d"), w(a)].join(""));
  } else {
    a = new R(null, 1, 5, S, [{}], null);
    var b = sq.b(Vd(100, a));
    vq.a(b, a);
    a = b;
  }
  return a;
}, function(a) {
  return Ts.e(F([Vi, Gg.b(a)], 0));
}), Kj, function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  var c = Ys(), c = P(c) ? N.a(Mf, c) : c, c = K.a(c, Mg);
  return Xs(c, b, a);
}, Ji, cr(function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  var c = q(b) ? new qf([b, a]) : pf, d = Nh.b(Tb(Rs));
  return ae.a(c, d) ? (Ts.e(F([Nh, c], 0)), q(y.a ? y.a(Oh, b) : y.call(null, Oh, b)) ? new R(null, 2, 5, S, [new R(null, 6, 5, S, [ar([w("/api/"), w(er), w("/portfolio-companies/"), w(a)].join("")), kr.e(F([c], 0)), hr.e(F([c], 0)), ir.e(F([c], 0)), lr.e(F([c], 0)), jr.e(F([c], 0))], null), b], null) : q(y.a ? y.a(Aj, b) : y.call(null, Aj, b)) ? new R(null, 2, 5, S, [new R(null, 6, 5, S, [ar([w("/api/"), w(er), w("/investor-companies/"), w(a)].join("")), kr.e(F([c], 0)), hr.e(F([c], 0)), ir.e(F([c], 
  0)), lr.e(F([c], 0)), jr.e(F([c], 0))], null), b], null) : q(y.a ? y.a(xh, b) : y.call(null, xh, b)) ? new R(null, 2, 5, S, [new R(null, 6, 5, S, [ar([w("/api/"), w(er), w("/constituencies/"), w(a)].join("")), kr.e(F([c], 0)), hr.e(F([c], 0)), ir.e(F([c], 0)), lr.e(F([c], 0)), jr.e(F([c], 0))], null), b], null) : new R(null, 2, 5, S, [new R(null, 6, 5, S, [null, kr.e(F([c], 0)), hr.e(F([c], 0)), ir.e(F([c], 0)), lr.e(F([c], 0)), null], null), b], null)) : null;
}, function(a, b) {
  var c = I.c(a, 0, null), d = I.c(a, 1, null), e = I.c(a, 2, null), f = I.c(a, 3, null), g = I.c(a, 4, null), k = I.c(a, 5, null);
  return Ts.e(F([Sh, new n(null, 2, [Xi, b, Hj, c], null), ch, d, Uh, e, Vj, f, kh, g, hi, k], 0));
}), Ej, function(a) {
  var b = Ys(), c = P(b) ? N.a(Mf, b) : b, b = K.a(c, Gj), c = K.a(c, Xi);
  return Xs(a, c, b);
}, fj, function(a) {
  a = Kd.b(a);
  if (ae.a(a, Mg.b(Tb(Rs)))) {
    var b = Jd(a);
    if (!q(K.a(es, b))) {
      throw Error([w("unknown view: "), w(b)].join(""));
    }
    var c = bs.b("body"), d = [w("#nav ."), w(b)].join(""), d = bs.b(d), e = $q.a(d, ".."), e = bs.a(e, "\x3e .active");
    Qq(e, "active");
    Pq(d, "active");
    for (var d = A(es), e = null, f = 0, g = 0;;) {
      if (g < f) {
        var k = e.w(null, g), l = I.c(k, 0, null), k = I.c(k, 1, null);
        y.a(l, b) ? Pq(c, k) : Qq(c, k);
        g += 1;
      } else {
        if (d = A(d)) {
          jd(d) ? (f = tc(d), d = uc(d), e = f, f = H(f)) : (f = B(d), e = I.c(f, 0, null), f = I.c(f, 1, null), y.a(e, b) ? Pq(c, f) : Qq(c, f), d = E(d), e = null, f = 0), g = 0;
        } else {
          break;
        }
      }
    }
    Op.b(document).Ui("clustermap-change-view");
    return Ts.e(F([Mg, a], 0));
  }
  return null;
}], null);
function $s(a) {
  vg.i(Ar, Yc, "/", function(b) {
    P(b) && N.a(Mf, b);
    return uq.a(a, new R(null, 2, 5, S, [Ji, null], null));
  });
  vg.i(Ar, Yc, "/:view", function(b) {
    b = P(b) ? N.a(Mf, b) : b;
    b = K.a(b, Mg);
    uq.a(a, new R(null, 2, 5, S, [fj, b], null));
    return uq.a(a, new R(null, 2, 5, S, [Ji, null], null));
  });
  vg.i(Ar, Yc, "/:view/:type/:id", function(b) {
    var c = P(b) ? N.a(Mf, b) : b;
    b = K.a(c, Gj);
    var d = K.a(c, Xi), c = K.a(c, Mg);
    uq.a(a, new R(null, 2, 5, S, [fj, c], null));
    return uq.a(a, new R(null, 2, 5, S, [Ji, new R(null, 2, 5, S, [Kd.b(d), b], null)], null));
  });
  Ik(Ws, "navigate", function(a) {
    a = fm.a(a.ph, /\?/);
    var c = I.c(a, 0, null);
    a = I.c(a, 1, null);
    a = q(a) ? new n(null, 1, [Qg, Gr(a)], null) : null;
    var d;
    var e = B(Fr(Dr, c));
    q(e) ? (d = I.c(e, 0, null), e = I.c(e, 1, null), d = new R(null, 2, 5, S, [e, pf], null)) : (d = A(Fr(Er, c))) ? (e = B(d), d = I.c(e, 0, null), e = I.c(e, 1, null), d = new R(null, 2, 5, S, [e, Hr(d, c)], null)) : d = null;
    c = I.c(d, 0, null);
    d = I.c(d, 1, null);
    c = q(c) ? c : de;
    a = Sf.e(F([d, a], 0));
    return c.b ? c.b(a) : c.call(null, a);
  });
  vo(Ws, !0);
}
function at() {
  var a = sq.q(), b = ge.a(yr, Rs), c = ge.a(zr, Rs), b = new n(null, 3, [Rh, a, Rj, b, vh, c], null);
  gs(a);
  $s(a);
  Us();
  Vs();
  mn.i(Rs, Sf.e(F([b, new n(null, 2, [Di, Rs, Eh, ge.c(qr, Rs, nh)], null)], 0)), Qs, document.getElementById("map-component"));
  mn.i(Rs, b, Qr, document.getElementById("search-component"));
  mn.i(Rs, b, ws, document.getElementById("map-report-component"));
  mn.i(Rs, b, $p(), document.getElementById("page-title-component"));
  mn.i(Rs, b, Zp, document.getElementById("full-report-component"));
  var d = sq.b(1);
  fo(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Id(b, T)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, iq(c), T;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Id(d, T)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.q = c;
          d.b = b;
          return d;
        }();
      }(function(b) {
        var c = b[1];
        if (7 === c) {
          var d = b[2], c = I.c(d, 0, null), d = I.c(d, 1, null), e = K.a(Zs, c);
          if (ib(e)) {
            throw Error([w("no handler for event-type: "), w(c)].join(""));
          }
          c = e.b ? e.b(d) : e.call(null, d);
          b[7] = c;
          b[2] = null;
          b[1] = 2;
          return T;
        }
        return 6 === c ? (c = b[2], b[2] = c, b[1] = 3, T) : 5 === c ? (b[2] = null, b[1] = 6, T) : 4 === c ? fq(b, 7, a) : 3 === c ? (c = b[2], hq(b, c)) : 2 === c ? (b[1] = 4, T) : 1 === c ? (b[2] = null, b[1] = 2, T) : null;
      });
    }(), c = function() {
      var a = b.q ? b.q() : b.call(null);
      a[6] = d;
      return a;
    }();
    return eq(c);
  });
  return d;
}
;function bt() {
  return at();
}
q(config.fh) ? setTimeout(bt, 2E3) : at();

})();

//# sourceMappingURL=clustermap.js.map