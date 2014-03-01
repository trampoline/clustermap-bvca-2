;(function(){
var h, ca = ca || {}, da = this;
function ea(a, b) {
  var c = a.split("."), d = da;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
function fa(a) {
  a = a.split(".");
  for (var b = da, c;c = a.shift();) {
    if (null != b[c]) {
      b = b[c];
    } else {
      return null;
    }
  }
  return b;
}
function ga() {
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
function ha(a) {
  var b = m(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function ia(a) {
  return "string" == typeof a;
}
function ja(a) {
  return "function" == m(a);
}
function ka(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function la(a) {
  return a[ma] || (a[ma] = ++na);
}
var ma = "closure_uid_" + (1E9 * Math.random() >>> 0), na = 0;
function oa(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function pa(a, b, c) {
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
function qa(a, b, c) {
  qa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
  return qa.apply(null, arguments);
}
function ra(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b);
  };
}
var sa = Date.now || function() {
  return+new Date;
};
function ta(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Fb = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
}
;function ua(a, b) {
  for (var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d);
  }
  return a;
}
function va(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
function wa(a) {
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
ta(Da, Error);
Da.prototype.name = "CustomError";
function Ea(a, b) {
  b.unshift(a);
  Da.call(this, ua.apply(null, b));
  b.shift();
}
ta(Ea, Da);
Ea.prototype.name = "AssertionError";
function Fa(a, b) {
  throw new Ea("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Ga = Array.prototype, Ha = Ga.indexOf ? function(a, b, c) {
  return Ga.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ia(a)) {
    return ia(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Ja = Ga.forEach ? function(a, b, c) {
  Ga.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ia(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, Ka = Ga.filter ? function(a, b, c) {
  return Ga.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, g = ia(a) ? a.split("") : a, k = 0;k < d;k++) {
    if (k in g) {
      var l = g[k];
      b.call(c, l, k, a) && (e[f++] = l);
    }
  }
  return e;
};
function La(a, b) {
  return 0 <= Ha(a, b);
}
function Ma(a, b) {
  var c = Ha(a, b);
  0 <= c && Ga.splice.call(a, c, 1);
}
function Na(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
function Oa(a, b, c) {
  return 2 >= arguments.length ? Ga.slice.call(a, b) : Ga.slice.call(a, b, c);
}
function Pa(a, b) {
  Ga.sort.call(a, b || Qa);
}
function Ra(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || Qa;
  Pa(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function Qa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function Sa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function Ta(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function Ua(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
var Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Wa(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Va.length;f++) {
      c = Va[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
;function Xa(a, b) {
  null != a && this.append.apply(this, arguments);
}
Xa.prototype.qb = "";
Xa.prototype.set = function(a) {
  this.qb = "" + a;
};
Xa.prototype.append = function(a, b, c) {
  this.qb += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.qb += arguments[d];
    }
  }
  return this;
};
Xa.prototype.toString = function() {
  return this.qb;
};
var Ya;
function Za() {
  throw Error("No *print-fn* fn set for evaluation environment");
}
var $a = null;
function ab() {
  return new n(null, 5, [bb, !0, cb, !0, db, !1, eb, !1, fb, null], null);
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
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : s ? !1 : null;
}
function jb(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = jb(b), c = q(q(c) ? c.T : c) ? c.S : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function kb(a) {
  var b = a.S;
  return q(b) ? b : "" + v(a);
}
function lb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function mb(a) {
  return Array.prototype.slice.call(arguments);
}
var pb = function() {
  function a(a, b) {
    return nb.c ? nb.c(function(a, b) {
      a.push(b);
      return a;
    }, [], b) : nb.call(null, function(a, b) {
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
    throw u("ICloneable.-clone", a);
  }
  return b.call(null, a);
}
var tb = {};
function ub(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = ub[m(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function vb(a) {
  if (a ? a.aa : a) {
    return a.aa(a);
  }
  var b;
  b = vb[m(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw u("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var wb = {};
function xb(a, b) {
  if (a ? a.R : a) {
    return a.R(a, b);
  }
  var c;
  c = xb[m(null == a ? null : a)];
  if (!c && (c = xb._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var yb = {}, w = function() {
  function a(a, b, c) {
    if (a ? a.qa : a) {
      return a.qa(a, b, c);
    }
    var g;
    g = w[m(null == a ? null : a)];
    if (!g && (g = w._, !g)) {
      throw u("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.A : a) {
      return a.A(a, b);
    }
    var c;
    c = w[m(null == a ? null : a)];
    if (!c && (c = w._, !c)) {
      throw u("IIndexed.-nth", a);
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
function Bb(a) {
  if (a ? a.X : a) {
    return a.X(a);
  }
  var b;
  b = Bb[m(null == a ? null : a)];
  if (!b && (b = Bb._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Cb(a) {
  if (a ? a.ha : a) {
    return a.ha(a);
  }
  var b;
  b = Cb[m(null == a ? null : a)];
  if (!b && (b = Cb._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Db = {}, Eb = {}, Fb = function() {
  function a(a, b, c) {
    if (a ? a.L : a) {
      return a.L(a, b, c);
    }
    var g;
    g = Fb[m(null == a ? null : a)];
    if (!g && (g = Fb._, !g)) {
      throw u("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.K : a) {
      return a.K(a, b);
    }
    var c;
    c = Fb[m(null == a ? null : a)];
    if (!c && (c = Fb._, !c)) {
      throw u("ILookup.-lookup", a);
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
function Gb(a, b) {
  if (a ? a.$b : a) {
    return a.$b(a, b);
  }
  var c;
  c = Gb[m(null == a ? null : a)];
  if (!c && (c = Gb._, !c)) {
    throw u("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Hb(a, b, c) {
  if (a ? a.rb : a) {
    return a.rb(a, b, c);
  }
  var d;
  d = Hb[m(null == a ? null : a)];
  if (!d && (d = Hb._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ib = {};
function Jb(a, b) {
  if (a ? a.yc : a) {
    return a.yc(a, b);
  }
  var c;
  c = Jb[m(null == a ? null : a)];
  if (!c && (c = Jb._, !c)) {
    throw u("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Kb = {};
function Lb(a) {
  if (a ? a.zd : a) {
    return a.zd();
  }
  var b;
  b = Lb[m(null == a ? null : a)];
  if (!b && (b = Lb._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Nb(a) {
  if (a ? a.Ad : a) {
    return a.Ad();
  }
  var b;
  b = Nb[m(null == a ? null : a)];
  if (!b && (b = Nb._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ob = {};
function Pb(a, b) {
  if (a ? a.ne : a) {
    return a.ne(0, b);
  }
  var c;
  c = Pb[m(null == a ? null : a)];
  if (!c && (c = Pb._, !c)) {
    throw u("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Qb(a) {
  if (a ? a.tb : a) {
    return a.tb(a);
  }
  var b;
  b = Qb[m(null == a ? null : a)];
  if (!b && (b = Qb._, !b)) {
    throw u("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Rb(a) {
  if (a ? a.ub : a) {
    return a.ub(a);
  }
  var b;
  b = Rb[m(null == a ? null : a)];
  if (!b && (b = Rb._, !b)) {
    throw u("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Sb = {};
function Tb(a, b, c) {
  if (a ? a.Cd : a) {
    return a.Cd(a, b, c);
  }
  var d;
  d = Tb[m(null == a ? null : a)];
  if (!d && (d = Tb._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Ub(a) {
  if (a ? a.Ib : a) {
    return a.Ib(a);
  }
  var b;
  b = Ub[m(null == a ? null : a)];
  if (!b && (b = Ub._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Vb = {};
function Wb(a) {
  if (a ? a.t : a) {
    return a.t(a);
  }
  var b;
  b = Wb[m(null == a ? null : a)];
  if (!b && (b = Wb._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Xb = {};
function Yb(a, b) {
  if (a ? a.u : a) {
    return a.u(a, b);
  }
  var c;
  c = Yb[m(null == a ? null : a)];
  if (!c && (c = Yb._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Zb = {}, $b = function() {
  function a(a, b, c) {
    if (a ? a.ga : a) {
      return a.ga(a, b, c);
    }
    var g;
    g = $b[m(null == a ? null : a)];
    if (!g && (g = $b._, !g)) {
      throw u("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.fa : a) {
      return a.fa(a, b);
    }
    var c;
    c = $b[m(null == a ? null : a)];
    if (!c && (c = $b._, !c)) {
      throw u("IReduce.-reduce", a);
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
function ac(a, b) {
  if (a ? a.G : a) {
    return a.G(a, b);
  }
  var c;
  c = ac[m(null == a ? null : a)];
  if (!c && (c = ac._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function bc(a) {
  if (a ? a.N : a) {
    return a.N(a);
  }
  var b;
  b = bc[m(null == a ? null : a)];
  if (!b && (b = bc._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var cc = {};
function dc(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = dc[m(null == a ? null : a)];
  if (!b && (b = dc._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var ec = {}, fc = {}, gc = {};
function hc(a) {
  if (a ? a.Bd : a) {
    return a.Bd(a);
  }
  var b;
  b = hc[m(null == a ? null : a)];
  if (!b && (b = hc._, !b)) {
    throw u("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function ic(a, b) {
  if (a ? a.se : a) {
    return a.se(0, b);
  }
  var c;
  c = ic[m(null == a ? null : a)];
  if (!c && (c = ic._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var jc = {};
function kc(a, b, c) {
  if (a ? a.H : a) {
    return a.H(a, b, c);
  }
  var d;
  d = kc[m(null == a ? null : a)];
  if (!d && (d = kc._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function lc(a, b, c) {
  if (a ? a.qe : a) {
    return a.qe(0, b, c);
  }
  var d;
  d = lc[m(null == a ? null : a)];
  if (!d && (d = lc._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function mc(a, b, c) {
  if (a ? a.pe : a) {
    return a.pe(0, b, c);
  }
  var d;
  d = mc[m(null == a ? null : a)];
  if (!d && (d = mc._, !d)) {
    throw u("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function nc(a, b) {
  if (a ? a.re : a) {
    return a.re(0, b);
  }
  var c;
  c = nc[m(null == a ? null : a)];
  if (!c && (c = nc._, !c)) {
    throw u("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function oc(a) {
  if (a ? a.Jb : a) {
    return a.Jb(a);
  }
  var b;
  b = oc[m(null == a ? null : a)];
  if (!b && (b = oc._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function pc(a, b) {
  if (a ? a.vb : a) {
    return a.vb(a, b);
  }
  var c;
  c = pc[m(null == a ? null : a)];
  if (!c && (c = pc._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function qc(a) {
  if (a ? a.wb : a) {
    return a.wb(a);
  }
  var b;
  b = qc[m(null == a ? null : a)];
  if (!b && (b = qc._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function rc(a, b, c) {
  if (a ? a.bc : a) {
    return a.bc(a, b, c);
  }
  var d;
  d = rc[m(null == a ? null : a)];
  if (!d && (d = rc._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function sc(a, b, c) {
  if (a ? a.oe : a) {
    return a.oe(0, b, c);
  }
  var d;
  d = sc[m(null == a ? null : a)];
  if (!d && (d = sc._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function tc(a) {
  if (a ? a.le : a) {
    return a.le();
  }
  var b;
  b = tc[m(null == a ? null : a)];
  if (!b && (b = tc._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function uc(a) {
  if (a ? a.jd : a) {
    return a.jd(a);
  }
  var b;
  b = uc[m(null == a ? null : a)];
  if (!b && (b = uc._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function vc(a) {
  if (a ? a.kd : a) {
    return a.kd(a);
  }
  var b;
  b = vc[m(null == a ? null : a)];
  if (!b && (b = vc._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function wc(a) {
  if (a ? a.hd : a) {
    return a.hd(a);
  }
  var b;
  b = wc[m(null == a ? null : a)];
  if (!b && (b = wc._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function xc(a) {
  this.kh = a;
  this.q = 0;
  this.g = 1073741824;
}
xc.prototype.se = function(a, b) {
  return this.kh.append(b);
};
function yc(a) {
  var b = new Xa;
  a.H(null, new xc(b), ab());
  return "" + v(b);
}
function zc(a, b) {
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
    c = Ac.a ? Ac.a(a.ma, b.ma) : Ac.call(null, a.ma, b.ma);
    return 0 === c ? Ac.a ? Ac.a(a.name, b.name) : Ac.call(null, a.name, b.name) : c;
  }
  return z ? Ac.a ? Ac.a(a.name, b.name) : Ac.call(null, a.name, b.name) : null;
}
function Bc(a, b, c, d, e) {
  this.ma = a;
  this.name = b;
  this.eb = c;
  this.$a = d;
  this.oa = e;
  this.g = 2154168321;
  this.q = 4096;
}
h = Bc.prototype;
h.H = function(a, b) {
  return ic(b, this.eb);
};
h.N = function() {
  var a = this.$a;
  return null != a ? a : this.$a = a = Cc.a ? Cc.a(Dc.b ? Dc.b(this.ma) : Dc.call(null, this.ma), Dc.b ? Dc.b(this.name) : Dc.call(null, this.name)) : Cc.call(null, Dc.b ? Dc.b(this.ma) : Dc.call(null, this.ma), Dc.b ? Dc.b(this.name) : Dc.call(null, this.name));
};
h.u = function(a, b) {
  return new Bc(this.ma, this.name, this.eb, this.$a, b);
};
h.t = function() {
  return this.oa;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Fb.c(c, this, null);
      case 3:
        return Fb.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return Fb.c(a, this, null);
};
h.a = function(a, b) {
  return Fb.c(a, this, b);
};
h.G = function(a, b) {
  return b instanceof Bc ? this.eb === b.eb : !1;
};
h.pa = !0;
h.ka = function() {
  return new Bc(this.ma, this.name, this.eb, this.$a, this.oa);
};
h.toString = function() {
  return this.eb;
};
var Ec = function() {
  function a(a, b) {
    var c = null != a ? [v(a), v("/"), v(b)].join("") : b;
    return new Bc(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof Bc ? a : c.a(null, a);
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
function Fc(a) {
  return sb(a);
}
function A(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.sb)) {
    return a.I(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Gc(a, 0);
  }
  if (r(cc, a)) {
    return dc(a);
  }
  if (s) {
    throw Error([v(a), v("is not ISeqable")].join(""));
  }
  return null;
}
function B(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.Mb)) {
    return a.X(null);
  }
  a = A(a);
  return null == a ? null : Bb(a);
}
function C(a) {
  return null != a ? a && (a.g & 64 || a.Mb) ? a.ha(null) : (a = A(a)) ? Cb(a) : Hc : Hc;
}
function E(a) {
  return null == a ? null : a && (a.g & 128 || a.zc) ? a.ra(null) : A(C(a));
}
var y = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || ac(a, b);
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
Date.prototype.uf = !0;
Date.prototype.G = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
ac.number = function(a, b) {
  return a === b;
};
Vb["function"] = !0;
Wb["function"] = function() {
  return null;
};
qb["function"] = !0;
bc._ = function(a) {
  return la(a);
};
function Ic(a) {
  return a + 1;
}
var Jc = function() {
  function a(a, b, c, d) {
    for (var l = ub(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, w.a(a, d)) : b.call(null, c, w.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = ub(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, w.a(a, l)) : b.call(null, c, w.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = ub(a);
    if (0 === c) {
      return b.p ? b.p() : b.call(null);
    }
    for (var d = w.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, w.a(a, l)) : b.call(null, d, w.a(a, l)), l += 1;
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
}(), Kc = function() {
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
      return b.p ? b.p() : b.call(null);
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
function Lc(a) {
  return a ? a.g & 2 || a.ac ? !0 : a.g ? !1 : r(tb, a) : r(tb, a);
}
function Mc(a) {
  return a ? a.g & 16 || a.Lb ? !0 : a.g ? !1 : r(yb, a) : r(yb, a);
}
function Gc(a, b) {
  this.f = a;
  this.n = b;
  this.q = 0;
  this.g = 166199550;
}
h = Gc.prototype;
h.N = function() {
  return Nc.b ? Nc.b(this) : Nc.call(null, this);
};
h.ra = function() {
  return this.n + 1 < this.f.length ? new Gc(this.f, this.n + 1) : null;
};
h.R = function(a, b) {
  return G.a ? G.a(b, this) : G.call(null, b, this);
};
h.Bd = function() {
  var a = ub(this);
  return 0 < a ? new Oc(this, a - 1, null) : null;
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Kc.i(this.f, b, this.f[this.n], this.n + 1);
};
h.ga = function(a, b, c) {
  return Kc.i(this.f, b, c, this.n);
};
h.I = function() {
  return this;
};
h.J = function() {
  return this.f.length - this.n;
};
h.X = function() {
  return this.f[this.n];
};
h.ha = function() {
  return this.n + 1 < this.f.length ? new Gc(this.f, this.n + 1) : Hc;
};
h.G = function(a, b) {
  return Pc.a ? Pc.a(this, b) : Pc.call(null, this, b);
};
h.pa = !0;
h.ka = function() {
  return new Gc(this.f, this.n);
};
h.A = function(a, b) {
  var c = b + this.n;
  return c < this.f.length ? this.f[c] : null;
};
h.qa = function(a, b, c) {
  a = b + this.n;
  return a < this.f.length ? this.f[a] : c;
};
h.aa = function() {
  return Hc;
};
var Qc = function() {
  function a(a, b) {
    return b < a.length ? new Gc(a, b) : null;
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
  this.vc = a;
  this.n = b;
  this.j = c;
  this.q = 0;
  this.g = 32374862;
}
h = Oc.prototype;
h.N = function() {
  return Nc.b ? Nc.b(this) : Nc.call(null, this);
};
h.R = function(a, b) {
  return G.a ? G.a(b, this) : G.call(null, b, this);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Rc.a ? Rc.a(b, this) : Rc.call(null, b, this);
};
h.ga = function(a, b, c) {
  return Rc.c ? Rc.c(b, c, this) : Rc.call(null, b, c, this);
};
h.I = function() {
  return this;
};
h.J = function() {
  return this.n + 1;
};
h.X = function() {
  return w.a(this.vc, this.n);
};
h.ha = function() {
  return 0 < this.n ? new Oc(this.vc, this.n - 1, null) : null;
};
h.G = function(a, b) {
  return Pc.a ? Pc.a(this, b) : Pc.call(null, this, b);
};
h.u = function(a, b) {
  return new Oc(this.vc, this.n, b);
};
h.pa = !0;
h.ka = function() {
  return new Oc(this.vc, this.n, this.j);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return Tc.a ? Tc.a(Hc, this.j) : Tc.call(null, Hc, this.j);
};
function Uc(a) {
  return B(E(a));
}
function Vc(a) {
  for (;;) {
    var b = E(a);
    if (null != b) {
      a = b;
    } else {
      return B(a);
    }
  }
}
ac._ = function(a, b) {
  return a === b;
};
var Wc = function() {
  function a(a, b) {
    return null != a ? xb(a, b) : xb(Hc, b);
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
    if (a && (a.g & 2 || a.ac)) {
      a = a.J(null);
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
            if (s) {
              a: {
                a = A(a);
                for (var b = 0;;) {
                  if (Lc(a)) {
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
var Xc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return A(a) ? B(a) : c;
      }
      if (Mc(a)) {
        return w.c(a, b, c);
      }
      if (A(a)) {
        a = E(a), b -= 1;
      } else {
        return s ? c : null;
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
      if (Mc(a)) {
        return w.a(a, b);
      }
      if (A(a)) {
        var c = E(a), g = b - 1;
        a = c;
        b = g;
      } else {
        if (s) {
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
      if (a && (a.g & 16 || a.Lb)) {
        return a.qa(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (r(yb, a)) {
        return w.a(a, b);
      }
      if (s) {
        if (a ? a.g & 64 || a.Mb || (a.g ? 0 : r(zb, a)) : r(zb, a)) {
          return Xc.c(a, b, c);
        }
        throw Error([v("nth not supported on this type "), v(kb(jb(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.g & 16 || a.Lb)) {
      return a.A(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (r(yb, a)) {
      return w.a(a, b);
    }
    if (s) {
      if (a ? a.g & 64 || a.Mb || (a.g ? 0 : r(zb, a)) : r(zb, a)) {
        return Xc.a(a, b);
      }
      throw Error([v("nth not supported on this type "), v(kb(jb(a)))].join(""));
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
}(), J = function() {
  function a(a, b, c) {
    return null != a ? a && (a.g & 256 || a.yd) ? a.L(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : r(Eb, a) ? Fb.c(a, b, c) : s ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.g & 256 || a.yd) ? a.K(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : r(Eb, a) ? Fb.a(a, b) : null;
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
}(), Zc = function() {
  function a(a, b, c) {
    return null != a ? Hb(a, b, c) : Yc.a ? Yc.a([b], [c]) : Yc.call(null, [b], [c]);
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
          d = B(l), e = Uc(l), l = E(E(l));
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
}(), $c = function() {
  function a(a, b) {
    return null == a ? null : Jb(a, b);
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
function ad(a) {
  var b = ja(a);
  return b ? b : a ? q(q(null) ? null : a.qf) ? !0 : a.Ba ? !1 : r(qb, a) : r(qb, a);
}
var Tc = function bd(b, c) {
  return ad(b) && !(b ? b.g & 262144 || b.zf || (b.g ? 0 : r(Xb, b)) : r(Xb, b)) ? bd(function() {
    "undefined" === typeof Ya && (Ya = function(b, c, f, g) {
      this.j = b;
      this.mc = c;
      this.zh = f;
      this.zg = g;
      this.q = 0;
      this.g = 393217;
    }, Ya.T = !0, Ya.S = "cljs.core/t23972", Ya.V = function(b, c) {
      return ic(c, "cljs.core/t23972");
    }, Ya.prototype.call = function() {
      function b(d, g) {
        d = this;
        var k = null;
        1 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return K.a ? K.a(b.mc, d) : K.call(null, b.mc, d);
      }
      b.l = 1;
      b.h = function(b) {
        var d = B(b);
        b = C(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), Ya.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(lb(c)));
    }, Ya.prototype.a = function() {
      function b(d) {
        var g = null;
        0 < arguments.length && (g = F(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, g);
      }
      function c(b) {
        return K.a ? K.a(self__.mc, b) : K.call(null, self__.mc, b);
      }
      b.l = 0;
      b.h = function(b) {
        b = A(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), Ya.prototype.qf = !0, Ya.prototype.t = function() {
      return this.zg;
    }, Ya.prototype.u = function(b, c) {
      return new Ya(this.j, this.mc, this.zh, c);
    });
    return new Ya(c, b, bd, null);
  }(), c) : null == b ? null : Yb(b, c);
};
function cd(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.wf || (a.g ? 0 : r(Vb, a)) : r(Vb, a) : b) ? Wb(a) : null;
}
var dd = function() {
  function a(a, b) {
    return null == a ? null : Pb(a, b);
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
}(), ed = {}, fd = 0;
function Dc(a) {
  if (a && (a.g & 4194304 || a.ki)) {
    a = a.N(null);
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
            255 < fd && (ed = {}, fd = 0);
            var b = ed[a];
            "number" !== typeof b && (b = Ca(a), ed[a] = b, fd += 1);
            a = b;
          } else {
            a = null == a ? 0 : s ? bc(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function gd(a) {
  return null == a || ib(A(a));
}
function hd(a) {
  return null == a ? !1 : a ? a.g & 8 || a.gi ? !0 : a.g ? !1 : r(wb, a) : r(wb, a);
}
function id(a) {
  return a ? a.g & 16777216 || a.yf ? !0 : a.g ? !1 : r(ec, a) : r(ec, a);
}
function O(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.mi ? !0 : a.g ? !1 : r(Ib, a) : r(Ib, a);
}
function jd(a) {
  return a ? a.g & 16384 || a.pi ? !0 : a.g ? !1 : r(Sb, a) : r(Sb, a);
}
function kd(a) {
  return a ? a.q & 512 || a.fi ? !0 : !1 : !1;
}
function ld(a) {
  var b = [];
  Sa(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function md(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var nd = {};
function od(a) {
  return!0 === a;
}
function P(a) {
  return null == a ? !1 : a ? a.g & 64 || a.Mb ? !0 : a.g ? !1 : r(zb, a) : r(zb, a);
}
function pd(a) {
  return q(a) ? !0 : !1;
}
function qd(a, b) {
  return J.c(a, b, nd) === nd ? !1 : !0;
}
function Ac(a, b) {
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
    return a && (a.q & 2048 || a.wc) ? a.xc(null, b) : Qa(a, b);
  }
  if (s) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var rd = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = Ac(I.a(a, g), I.a(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = H(a), g = H(b);
    return f < g ? -1 : f > g ? 1 : s ? c.i(a, b, f, 0) : null;
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
function sd(a) {
  return y.a(a, Ac) ? Ac : function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : q(d) ? -1 : q(a.a ? a.a(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var ud = function() {
  function a(a, b) {
    if (A(b)) {
      var c = td.b ? td.b(b) : td.call(null, b);
      Ra(c, sd(a));
      return A(c);
    }
    return Hc;
  }
  function b(a) {
    return c.a(Ac, a);
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
    return c ? nb.c ? nb.c(a, B(c), E(c)) : nb.call(null, a, B(c), E(c)) : a.p ? a.p() : a.call(null);
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
}(), nb = function() {
  function a(a, b, c) {
    return c && (c.g & 524288 || c.me) ? c.ga(null, a, b) : c instanceof Array ? Kc.c(c, a, b) : "string" === typeof c ? Kc.c(c, a, b) : r(Zb, c) ? $b.c(c, a, b) : s ? Rc.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.g & 524288 || b.me) ? b.fa(null, a) : b instanceof Array ? Kc.a(b, a) : "string" === typeof b ? Kc.a(b, a) : r(Zb, b) ? $b.a(b, a) : s ? Rc.a(a, b) : null;
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
function vd(a, b) {
  return(a % b + b) % b;
}
function wd(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.b ? Math.floor.b((a - a % 2) / 2) : Math.floor.call(null, (a - a % 2) / 2) : Math.ceil.b ? Math.ceil.b((a - a % 2) / 2) : Math.ceil.call(null, (a - a % 2) / 2);
}
function xd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var yd = function() {
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
        return ac(a, d);
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
    return ac(a, b);
  };
  a.e = b.e;
  return a;
}();
function zd(a) {
  var b = 1;
  for (a = A(a);;) {
    if (a && 0 < b) {
      b -= 1, a = E(a);
    } else {
      return a;
    }
  }
}
var v = function() {
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
      for (var e = new Xa(b.b(a)), l = d;;) {
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
  b.p = function() {
    return "";
  };
  b.b = a;
  b.e = c.e;
  return b;
}(), Ad = function() {
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
  return pd(id(b) ? function() {
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
        return s ? !1 : null;
      }
    }
  }() : null);
}
function Cc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Nc(a) {
  if (A(a)) {
    var b = Dc(B(a));
    for (a = E(a);;) {
      if (null == a) {
        return b;
      }
      b = Cc(b, Dc(B(a)));
      a = E(a);
    }
  } else {
    return 0;
  }
}
function Bd(a) {
  var b = 0;
  for (a = A(a);;) {
    if (a) {
      var c = B(a), b = (b + (Dc(Cd.b ? Cd.b(c) : Cd.call(null, c)) ^ Dc(Dd.b ? Dd.b(c) : Dd.call(null, c)))) % 4503599627370496;
      a = E(a);
    } else {
      return b;
    }
  }
}
function Ed(a, b, c, d, e) {
  this.j = a;
  this.jb = b;
  this.Wa = c;
  this.count = d;
  this.o = e;
  this.q = 0;
  this.g = 65937646;
}
h = Ed.prototype;
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.ra = function() {
  return 1 === this.count ? null : this.Wa;
};
h.R = function(a, b) {
  return new Ed(this.j, b, this, this.count + 1, null);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.I = function() {
  return this;
};
h.J = function() {
  return this.count;
};
h.tb = function() {
  return this.jb;
};
h.ub = function() {
  return Cb(this);
};
h.X = function() {
  return this.jb;
};
h.ha = function() {
  return 1 === this.count ? Hc : this.Wa;
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new Ed(b, this.jb, this.Wa, this.count, this.o);
};
h.pa = !0;
h.ka = function() {
  return new Ed(this.j, this.jb, this.Wa, this.count, this.o);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return Hc;
};
function Fd(a) {
  this.j = a;
  this.q = 0;
  this.g = 65937614;
}
h = Fd.prototype;
h.N = function() {
  return 0;
};
h.ra = function() {
  return null;
};
h.R = function(a, b) {
  return new Ed(this.j, b, null, 1, null);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.I = function() {
  return null;
};
h.J = function() {
  return 0;
};
h.tb = function() {
  return null;
};
h.ub = function() {
  throw Error("Can't pop empty list");
};
h.X = function() {
  return null;
};
h.ha = function() {
  return Hc;
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new Fd(b);
};
h.pa = !0;
h.ka = function() {
  return new Fd(this.j);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return this;
};
var Hc = new Fd(null);
function Gd(a) {
  return(a ? a.g & 134217728 || a.ni || (a.g ? 0 : r(gc, a)) : r(gc, a)) ? hc(a) : nb.c(Wc, Hc, a);
}
var Hd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Gc && 0 === a.n) {
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
    for (var e = Hc;;) {
      if (0 < a) {
        var f = a - 1, e = e.R(null, b[a - 1]);
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
function Id(a, b, c, d) {
  this.j = a;
  this.jb = b;
  this.Wa = c;
  this.o = d;
  this.q = 0;
  this.g = 65929452;
}
h = Id.prototype;
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.ra = function() {
  return null == this.Wa ? null : A(this.Wa);
};
h.R = function(a, b) {
  return new Id(null, b, this, this.o);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.I = function() {
  return this;
};
h.X = function() {
  return this.jb;
};
h.ha = function() {
  return null == this.Wa ? Hc : this.Wa;
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new Id(b, this.jb, this.Wa, this.o);
};
h.pa = !0;
h.ka = function() {
  return new Id(this.j, this.jb, this.Wa, this.o);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return Tc(Hc, this.j);
};
function G(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Mb)) ? new Id(null, a, b, null) : new Id(null, a, A(b), null);
}
function Q(a, b, c, d) {
  this.ma = a;
  this.name = b;
  this.cb = c;
  this.$a = d;
  this.g = 2153775105;
  this.q = 4096;
}
h = Q.prototype;
h.H = function(a, b) {
  return ic(b, [v(":"), v(this.cb)].join(""));
};
h.N = function() {
  null == this.$a && (this.$a = Cc(Dc(this.ma), Dc(this.name)) + 2654435769);
  return this.$a;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return J.a(c, this);
      case 3:
        return J.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return J.a(a, this);
};
h.a = function(a, b) {
  return J.c(a, this, b);
};
h.G = function(a, b) {
  return b instanceof Q ? this.cb === b.cb : !1;
};
h.pa = !0;
h.ka = function() {
  return new Q(this.ma, this.name, this.cb, this.$a);
};
h.toString = function() {
  return[v(":"), v(this.cb)].join("");
};
function Jd(a, b) {
  return a === b ? !0 : a instanceof Q && b instanceof Q ? a.cb === b.cb : !1;
}
var Ld = function() {
  function a(a, b) {
    return new Q(a, b, [v(q(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof Q) {
      return a;
    }
    if (a instanceof Bc) {
      var b;
      if (a && (a.q & 4096 || a.xf)) {
        b = a.ma;
      } else {
        throw Error([v("Doesn't support namespace: "), v(a)].join(""));
      }
      return new Q(b, Kd.b ? Kd.b(a) : Kd.call(null, a), a.eb, null);
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
function Md(a, b, c, d) {
  this.j = a;
  this.Rb = b;
  this.O = c;
  this.o = d;
  this.q = 0;
  this.g = 32374988;
}
h = Md.prototype;
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.ra = function() {
  dc(this);
  return null == this.O ? null : E(this.O);
};
h.R = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return yc(this);
};
function Nd(a) {
  null != a.Rb && (a.O = a.Rb.p ? a.Rb.p() : a.Rb.call(null), a.Rb = null);
  return a.O;
}
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.I = function() {
  Nd(this);
  if (null == this.O) {
    return null;
  }
  for (var a = this.O;;) {
    if (a instanceof Md) {
      a = Nd(a);
    } else {
      return this.O = a, A(this.O);
    }
  }
};
h.X = function() {
  dc(this);
  return null == this.O ? null : B(this.O);
};
h.ha = function() {
  dc(this);
  return null != this.O ? C(this.O) : Hc;
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new Md(b, this.Rb, this.O, this.o);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return Tc(Hc, this.j);
};
function Od(a, b) {
  this.ca = a;
  this.end = b;
  this.q = 0;
  this.g = 2;
}
Od.prototype.J = function() {
  return this.end;
};
Od.prototype.add = function(a) {
  this.ca[this.end] = a;
  return this.end += 1;
};
Od.prototype.$ = function() {
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
  this.q = 0;
  this.g = 524306;
}
h = Pd.prototype;
h.fa = function(a, b) {
  return Kc.i(this.f, b, this.f[this.W], this.W + 1);
};
h.ga = function(a, b, c) {
  return Kc.i(this.f, b, c, this.W);
};
h.le = function() {
  if (this.W === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Pd(this.f, this.W + 1, this.end);
};
h.A = function(a, b) {
  return this.f[this.W + b];
};
h.qa = function(a, b, c) {
  return 0 <= b && b < this.end - this.W ? this.f[this.W + b] : c;
};
h.J = function() {
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
  this.$ = a;
  this.Ya = b;
  this.j = c;
  this.o = d;
  this.g = 31850732;
  this.q = 1536;
}
h = Sd.prototype;
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.ra = function() {
  if (1 < ub(this.$)) {
    return new Sd(tc(this.$), this.Ya, this.j, null);
  }
  var a = dc(this.Ya);
  return null == a ? null : a;
};
h.R = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return yc(this);
};
h.I = function() {
  return this;
};
h.X = function() {
  return w.a(this.$, 0);
};
h.ha = function() {
  return 1 < ub(this.$) ? new Sd(tc(this.$), this.Ya, this.j, null) : null == this.Ya ? Hc : this.Ya;
};
h.hd = function() {
  return null == this.Ya ? null : this.Ya;
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new Sd(this.$, this.Ya, b, this.o);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return Tc(Hc, this.j);
};
h.jd = function() {
  return this.$;
};
h.kd = function() {
  return null == this.Ya ? Hc : this.Ya;
};
function Td(a, b) {
  return 0 === ub(a) ? b : new Sd(a, b, null, null);
}
function Ud(a, b) {
  a.add(b);
}
function td(a) {
  for (var b = [];;) {
    if (A(a)) {
      b.push(B(a)), a = E(a);
    } else {
      return b;
    }
  }
}
function Wd(a, b) {
  if (Lc(a)) {
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
var Yd = function Xd(b) {
  return null == b ? null : null == E(b) ? A(B(b)) : s ? G(B(b), Xd(E(b))) : null;
}, Zd = function() {
  function a(a, b) {
    return new Md(null, function() {
      var c = A(a);
      return c ? kd(c) ? Td(uc(c), d.a(vc(c), b)) : G(B(c), d.a(C(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Md(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Md(null, function() {
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
      return function x(a, b) {
        return new Md(null, function() {
          var c = A(a);
          return c ? kd(c) ? Td(uc(c), x(vc(c), b)) : G(B(c), x(C(c), b)) : q(b) ? x(B(b), E(b)) : null;
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
  d.p = c;
  d.b = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), $d = function() {
  function a(a, b, c, d) {
    return G(a, G(b, G(c, d)));
  }
  function b(a, b, c) {
    return G(a, G(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, t) {
      var x = null;
      4 < arguments.length && (x = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, x);
    }
    function b(a, c, d, e, f) {
      return G(a, G(c, G(d, G(e, Yd(f)))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = B(a);
      a = E(a);
      var d = B(a);
      a = E(a);
      var e = B(a);
      a = E(a);
      var t = B(a);
      a = C(a);
      return b(c, d, e, t, a);
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
function ae(a, b, c) {
  var d = A(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
  }
  c = Bb(d);
  var e = Cb(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Bb(e), f = Cb(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Bb(f), g = Cb(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = Bb(g), k = Cb(g);
  if (4 === b) {
    return a.i ? a.i(c, d, e, f) : a.i ? a.i(c, d, e, f) : a.call(null, c, d, e, f);
  }
  g = Bb(k);
  k = Cb(k);
  if (5 === b) {
    return a.m ? a.m(c, d, e, f, g) : a.m ? a.m(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  a = Bb(k);
  var l = Cb(k);
  if (6 === b) {
    return a.la ? a.la(c, d, e, f, g, a) : a.la ? a.la(c, d, e, f, g, a) : a.call(null, c, d, e, f, g, a);
  }
  var k = Bb(l), p = Cb(l);
  if (7 === b) {
    return a.Kb ? a.Kb(c, d, e, f, g, a, k) : a.Kb ? a.Kb(c, d, e, f, g, a, k) : a.call(null, c, d, e, f, g, a, k);
  }
  var l = Bb(p), t = Cb(p);
  if (8 === b) {
    return a.wd ? a.wd(c, d, e, f, g, a, k, l) : a.wd ? a.wd(c, d, e, f, g, a, k, l) : a.call(null, c, d, e, f, g, a, k, l);
  }
  var p = Bb(t), x = Cb(t);
  if (9 === b) {
    return a.xd ? a.xd(c, d, e, f, g, a, k, l, p) : a.xd ? a.xd(c, d, e, f, g, a, k, l, p) : a.call(null, c, d, e, f, g, a, k, l, p);
  }
  var t = Bb(x), D = Cb(x);
  if (10 === b) {
    return a.ld ? a.ld(c, d, e, f, g, a, k, l, p, t) : a.ld ? a.ld(c, d, e, f, g, a, k, l, p, t) : a.call(null, c, d, e, f, g, a, k, l, p, t);
  }
  var x = Bb(D), M = Cb(D);
  if (11 === b) {
    return a.md ? a.md(c, d, e, f, g, a, k, l, p, t, x) : a.md ? a.md(c, d, e, f, g, a, k, l, p, t, x) : a.call(null, c, d, e, f, g, a, k, l, p, t, x);
  }
  var D = Bb(M), N = Cb(M);
  if (12 === b) {
    return a.nd ? a.nd(c, d, e, f, g, a, k, l, p, t, x, D) : a.nd ? a.nd(c, d, e, f, g, a, k, l, p, t, x, D) : a.call(null, c, d, e, f, g, a, k, l, p, t, x, D);
  }
  var M = Bb(N), ba = Cb(N);
  if (13 === b) {
    return a.od ? a.od(c, d, e, f, g, a, k, l, p, t, x, D, M) : a.od ? a.od(c, d, e, f, g, a, k, l, p, t, x, D, M) : a.call(null, c, d, e, f, g, a, k, l, p, t, x, D, M);
  }
  var N = Bb(ba), U = Cb(ba);
  if (14 === b) {
    return a.pd ? a.pd(c, d, e, f, g, a, k, l, p, t, x, D, M, N) : a.pd ? a.pd(c, d, e, f, g, a, k, l, p, t, x, D, M, N) : a.call(null, c, d, e, f, g, a, k, l, p, t, x, D, M, N);
  }
  var ba = Bb(U), aa = Cb(U);
  if (15 === b) {
    return a.qd ? a.qd(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba) : a.qd ? a.qd(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba) : a.call(null, c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba);
  }
  var U = Bb(aa), Ia = Cb(aa);
  if (16 === b) {
    return a.rd ? a.rd(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U) : a.rd ? a.rd(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U) : a.call(null, c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U);
  }
  var aa = Bb(Ia), gb = Cb(Ia);
  if (17 === b) {
    return a.sd ? a.sd(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa) : a.sd ? a.sd(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa) : a.call(null, c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa);
  }
  var Ia = Bb(gb), ob = Cb(gb);
  if (18 === b) {
    return a.td ? a.td(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa, Ia) : a.td ? a.td(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa, Ia) : a.call(null, c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa, Ia);
  }
  gb = Bb(ob);
  ob = Cb(ob);
  if (19 === b) {
    return a.ud ? a.ud(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa, Ia, gb) : a.ud ? a.ud(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa, Ia, gb) : a.call(null, c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa, Ia, gb);
  }
  var Mb = Bb(ob);
  Cb(ob);
  if (20 === b) {
    return a.vd ? a.vd(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa, Ia, gb, Mb) : a.vd ? a.vd(c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa, Ia, gb, Mb) : a.call(null, c, d, e, f, g, a, k, l, p, t, x, D, M, N, ba, U, aa, Ia, gb, Mb);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var K = function() {
  function a(a, b, c, d, e) {
    b = $d.i(b, c, d, e);
    c = a.l;
    return a.h ? (d = Wd(b, c + 1), d <= c ? ae(a, d, b) : a.h(b)) : a.apply(a, td(b));
  }
  function b(a, b, c, d) {
    b = $d.c(b, c, d);
    c = a.l;
    return a.h ? (d = Wd(b, c + 1), d <= c ? ae(a, d, b) : a.h(b)) : a.apply(a, td(b));
  }
  function c(a, b, c) {
    b = $d.a(b, c);
    c = a.l;
    if (a.h) {
      var d = Wd(b, c + 1);
      return d <= c ? ae(a, d, b) : a.h(b);
    }
    return a.apply(a, td(b));
  }
  function d(a, b) {
    var c = a.l;
    if (a.h) {
      var d = Wd(b, c + 1);
      return d <= c ? ae(a, d, b) : a.h(b);
    }
    return a.apply(a, td(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, M) {
      var N = null;
      5 < arguments.length && (N = F(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, N);
    }
    function b(a, c, d, e, f, g) {
      c = G(c, G(d, G(e, G(f, Yd(g)))));
      d = a.l;
      return a.h ? (e = Wd(c, d + 1), e <= d ? ae(a, e, c) : a.h(c)) : a.apply(a, td(c));
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
  }(), e = function(e, k, l, p, t, x) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, t);
      default:
        return f.e(e, k, l, p, t, F(arguments, 5));
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
}(), be = function() {
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
      return ib(K.i(y, a, c, d));
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
function ce(a, b) {
  for (;;) {
    if (null == A(b)) {
      return!0;
    }
    if (q(a.b ? a.b(B(b)) : a.call(null, B(b)))) {
      var c = a, d = E(b);
      a = c;
      b = d;
    } else {
      return s ? !1 : null;
    }
  }
}
function de(a, b) {
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
function ee(a) {
  return a;
}
function fe(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l);
      }
      function c(b, d, e) {
        return ib(K.i(a, b, d, e));
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
          return ib(a.p ? a.p() : a.call(null));
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
var ge = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = F(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, f);
        }
        function k(d, l, p, t) {
          return a.b ? a.b(b.b ? b.b(K.m(c, d, l, p, t)) : b.call(null, K.m(c, d, l, p, t))) : a.call(null, b.b ? b.b(K.m(c, d, l, p, t)) : b.call(null, K.m(c, d, l, p, t)));
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
      }(), d = function(d, k, x, D) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.b ? b.b(c.p ? c.p() : c.call(null)) : b.call(null, c.p ? c.p() : c.call(null))) : a.call(null, b.b ? b.b(c.p ? c.p() : c.call(null)) : b.call(null, c.p ? c.p() : c.call(null)));
          case 1:
            return a.b ? a.b(b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d))) : a.call(null, b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d)));
          case 2:
            return a.b ? a.b(b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k))) : a.call(null, b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k)));
          case 3:
            return a.b ? a.b(b.b ? b.b(c.c ? c.c(d, k, x) : c.call(null, d, k, x)) : b.call(null, c.c ? c.c(d, k, x) : c.call(null, d, k, x))) : a.call(null, b.b ? b.b(c.c ? c.c(d, k, x) : c.call(null, d, k, x)) : b.call(null, c.c ? c.c(d, k, x) : c.call(null, d, k, x)));
          default:
            return l.e(d, k, x, F(arguments, 3));
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
          return a.b ? a.b(K.m(b, c, g, k, l)) : a.call(null, K.m(b, c, g, k, l));
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
      }(), c = function(c, g, t, x) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.p ? b.p() : b.call(null)) : a.call(null, b.p ? b.p() : b.call(null));
          case 1:
            return a.b ? a.b(b.b ? b.b(c) : b.call(null, c)) : a.call(null, b.b ? b.b(c) : b.call(null, c));
          case 2:
            return a.b ? a.b(b.a ? b.a(c, g) : b.call(null, c, g)) : a.call(null, b.a ? b.a(c, g) : b.call(null, c, g));
          case 3:
            return a.b ? a.b(b.c ? b.c(c, g, t) : b.call(null, c, g, t)) : a.call(null, b.c ? b.c(c, g, t) : b.call(null, c, g, t));
          default:
            return d.e(c, g, t, F(arguments, 3));
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
      var t = null;
      3 < arguments.length && (t = F(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, t);
    }
    function b(a, c, d, e) {
      var f = Gd($d.i(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d);
        }
        function b(a) {
          a = K.a(B(f), a);
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
        return ee;
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
  c.p = function() {
    return ee;
  };
  c.b = function(a) {
    return a;
  };
  c.a = b;
  c.c = a;
  c.e = d.e;
  return c;
}(), he = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = F(Array.prototype.slice.call(arguments, 0), 0));
        return t.call(this, b);
      }
      function t(e) {
        return K.m(a, b, c, d, e);
      }
      e.l = 0;
      e.h = function(a) {
        a = A(a);
        return t(a);
      };
      e.e = t;
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
        return K.i(a, b, c, d);
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
        return K.c(a, b, c);
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
    function a(c, d, e, f, x) {
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
          return K.m(a, c, d, e, Zd.a(f, b));
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
}(), ie = function() {
  function a(a, b, c, e) {
    return new Md(null, function() {
      var p = A(b), t = A(c), x = A(e);
      return p && t && x ? G(a.c ? a.c(B(p), B(t), B(x)) : a.call(null, B(p), B(t), B(x)), d.i(a, C(p), C(t), C(x))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Md(null, function() {
      var e = A(b), p = A(c);
      return e && p ? G(a.a ? a.a(B(e), B(p)) : a.call(null, B(e), B(p)), d.c(a, C(e), C(p))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new Md(null, function() {
      var c = A(b);
      if (c) {
        if (kd(c)) {
          for (var e = uc(c), p = H(e), t = Qd(p), x = 0;;) {
            if (x < p) {
              var D = a.b ? a.b(w.a(e, x)) : a.call(null, w.a(e, x));
              t.add(D);
              x += 1;
            } else {
              break;
            }
          }
          return Td(t.$(), d.a(a, vc(c)));
        }
        return G(a.b ? a.b(B(c)) : a.call(null, B(c)), d.a(a, C(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, x) {
      var D = null;
      4 < arguments.length && (D = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, D);
    }
    function b(a, c, e, f, g) {
      return d.a(function(b) {
        return K.a(a, b);
      }, function M(a) {
        return new Md(null, function() {
          var b = d.a(A, a);
          return ce(ee, b) ? G(d.a(B, b), M(d.a(C, b))) : null;
        }, null, null);
      }(Wc.e(g, f, F([e, c], 0))));
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
}(), ke = function je(b, c) {
  return new Md(null, function() {
    if (0 < b) {
      var d = A(c);
      return d ? G(B(d), je(b - 1, C(d))) : null;
    }
    return null;
  }, null, null);
};
function le(a, b) {
  return new Md(null, function() {
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
var me = function() {
  function a(a, b) {
    return ke(a, c.b(b));
  }
  function b(a) {
    return new Md(null, function() {
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
}(), oe = function ne(b, c) {
  return G(c, new Md(null, function() {
    return ne(b, b.b ? b.b(c) : b.call(null, c));
  }, null, null));
}, pe = function() {
  function a(a, c) {
    return new Md(null, function() {
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
      return new Md(null, function() {
        var c = ie.a(A, Wc.e(e, d, F([a], 0)));
        return ce(ee, c) ? Zd.a(ie.a(B, c), K.a(b, ie.a(C, c))) : null;
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
function qe(a, b) {
  return le(1, pe.a(me.b(a), b));
}
function re(a) {
  return function c(a, e) {
    return new Md(null, function() {
      var f = A(a);
      return f ? G(B(f), c(C(f), e)) : A(e) ? c(B(e), C(e)) : null;
    }, null, null);
  }(null, a);
}
var te = function() {
  function a(a, b) {
    return re(ie.a(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return re(K.i(ie, a, c, d));
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
}(), ve = function ue(b, c) {
  return new Md(null, function() {
    var d = A(c);
    if (d) {
      if (kd(d)) {
        for (var e = uc(d), f = H(e), g = Qd(f), k = 0;;) {
          if (k < f) {
            if (q(b.b ? b.b(w.a(e, k)) : b.call(null, w.a(e, k)))) {
              var l = w.a(e, k);
              g.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return Td(g.$(), ue(b, vc(d)));
      }
      e = B(d);
      d = C(d);
      return q(b.b ? b.b(e) : b.call(null, e)) ? G(e, ue(b, d)) : ue(b, d);
    }
    return null;
  }, null, null);
};
function we(a, b) {
  return ve(fe(a), b);
}
function xe(a) {
  return function c(a) {
    return new Md(null, function() {
      return G(a, q(id.b ? id.b(a) : id.call(null, a)) ? te.a(c, A.b ? A.b(a) : A.call(null, a)) : null);
    }, null, null);
  }(a);
}
function ye(a) {
  return ve(function(a) {
    return!id(a);
  }, C(xe(a)));
}
function ze(a, b) {
  var c;
  null != a ? a && (a.q & 4 || a.ii) ? (c = nb.c(pc, oc(a), b), c = qc(c)) : c = nb.c(xb, a, b) : c = nb.c(Wc, Hc, b);
  return c;
}
var Ae = function() {
  function a(a, b, c, k) {
    return new Md(null, function() {
      var l = A(k);
      if (l) {
        var p = ke(a, l);
        return a === H(p) ? G(p, d.i(a, b, c, le(b, l))) : xb(Hc, ke(a, Zd.a(p, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Md(null, function() {
      var k = A(c);
      if (k) {
        var l = ke(a, k);
        return a === H(l) ? G(l, d.c(a, b, le(b, k))) : null;
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
}(), Be = function() {
  function a(a, b, c) {
    var g = nd;
    for (b = A(b);;) {
      if (b) {
        var k = a;
        if (k ? k.g & 256 || k.yd || (k.g ? 0 : r(Eb, k)) : r(Eb, k)) {
          a = J.c(a, B(b), g);
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
}(), De = function Ce(b, c, d) {
  var e = I.c(c, 0, null);
  return(c = zd(c)) ? Zc.c(b, e, Ce(J.a(b, e), c, d)) : Zc.c(b, e, d);
}, Ee = function() {
  function a(a, b, c, d, f, x) {
    var D = I.c(b, 0, null);
    return(b = zd(b)) ? Zc.c(a, D, e.la(J.a(a, D), b, c, d, f, x)) : Zc.c(a, D, c.i ? c.i(J.a(a, D), d, f, x) : c.call(null, J.a(a, D), d, f, x));
  }
  function b(a, b, c, d, f) {
    var x = I.c(b, 0, null);
    return(b = zd(b)) ? Zc.c(a, x, e.m(J.a(a, x), b, c, d, f)) : Zc.c(a, x, c.c ? c.c(J.a(a, x), d, f) : c.call(null, J.a(a, x), d, f));
  }
  function c(a, b, c, d) {
    var f = I.c(b, 0, null);
    return(b = zd(b)) ? Zc.c(a, f, e.i(J.a(a, f), b, c, d)) : Zc.c(a, f, c.a ? c.a(J.a(a, f), d) : c.call(null, J.a(a, f), d));
  }
  function d(a, b, c) {
    var d = I.c(b, 0, null);
    return(b = zd(b)) ? Zc.c(a, d, e.c(J.a(a, d), b, c)) : Zc.c(a, d, c.b ? c.b(J.a(a, d)) : c.call(null, J.a(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, M, N) {
      var ba = null;
      6 < arguments.length && (ba = F(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, M, ba);
    }
    function b(a, c, d, f, g, k, N) {
      var ba = I.c(c, 0, null);
      return(c = zd(c)) ? Zc.c(a, ba, K.e(e, J.a(a, ba), c, d, f, F([g, k, N], 0))) : Zc.c(a, ba, K.e(d, J.a(a, ba), f, g, k, F([N], 0)));
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
      var N = B(a);
      a = C(a);
      return b(c, d, e, f, g, N, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, p, t, x, D) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, p);
      case 5:
        return b.call(this, e, k, l, p, t);
      case 6:
        return a.call(this, e, k, l, p, t, x);
      default:
        return f.e(e, k, l, p, t, x, F(arguments, 6));
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
function Fe(a, b) {
  this.F = a;
  this.f = b;
}
function Ge(a) {
  return new Fe(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function He(a) {
  return new Fe(a.F, lb(a.f));
}
function Ie(a) {
  a = a.k;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Je(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Ge(a);
    d.f[0] = c;
    c = d;
    b -= 5;
  }
}
var Le = function Ke(b, c, d, e) {
  var f = He(d), g = b.k - 1 >>> c & 31;
  5 === c ? f.f[g] = e : (d = d.f[g], b = null != d ? Ke(b, c - 5, d, e) : Je(null, c - 5, e), f.f[g] = b);
  return f;
};
function Me(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function Ne(a, b) {
  if (0 <= b && b < a.k) {
    if (b >= Ie(a)) {
      return a.D;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.f[b >>> d & 31], d = e
      } else {
        return c.f;
      }
    }
  } else {
    return Me(b, a.k);
  }
}
var Pe = function Oe(b, c, d, e, f) {
  var g = He(d);
  if (0 === c) {
    g.f[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Oe(b, c - 5, d.f[k], e, f);
    g.f[k] = b;
  }
  return g;
}, Re = function Qe(b, c, d) {
  var e = b.k - 2 >>> c & 31;
  if (5 < c) {
    b = Qe(b, c - 5, d.f[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = He(d);
    d.f[e] = b;
    return d;
  }
  return 0 === e ? null : s ? (d = He(d), d.f[e] = null, d) : null;
};
function R(a, b, c, d, e, f) {
  this.j = a;
  this.k = b;
  this.shift = c;
  this.root = d;
  this.D = e;
  this.o = f;
  this.q = 4;
  this.g = 167668511;
}
h = R.prototype;
h.Jb = function() {
  return new Se(this.k, this.shift, Te.b ? Te.b(this.root) : Te.call(null, this.root), Ue.b ? Ue.b(this.D) : Ue.call(null, this.D));
};
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.K = function(a, b) {
  return w.c(this, b, null);
};
h.L = function(a, b, c) {
  return w.c(this, b, c);
};
h.rb = function(a, b, c) {
  if (0 <= b && b < this.k) {
    return Ie(this) <= b ? (a = lb(this.D), a[b & 31] = c, new R(this.j, this.k, this.shift, this.root, a, null)) : new R(this.j, this.k, this.shift, Pe(this, this.shift, this.root, b, c), this.D, null);
  }
  if (b === this.k) {
    return xb(this, c);
  }
  if (s) {
    throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.k), v("]")].join(""));
  }
  return null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.qa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.qa(null, a, b);
};
h.R = function(a, b) {
  if (32 > this.k - Ie(this)) {
    for (var c = this.D.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.D[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new R(this.j, this.k + 1, this.shift, this.root, d, null);
  }
  c = (d = this.k >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Ge(null), d.f[0] = this.root, e = Je(null, this.shift, new Fe(null, this.D)), d.f[1] = e) : d = Le(this, this.shift, this.root, new Fe(null, this.D));
  return new R(this.j, this.k + 1, c, d, [b], null);
};
h.Bd = function() {
  return 0 < this.k ? new Oc(this, this.k - 1, null) : null;
};
h.zd = function() {
  return w.a(this, 0);
};
h.Ad = function() {
  return w.a(this, 1);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Jc.a(this, b);
};
h.ga = function(a, b, c) {
  return Jc.c(this, b, c);
};
h.I = function() {
  return 0 === this.k ? null : 32 > this.k ? F.b(this.D) : s ? Ve.c ? Ve.c(this, 0, 0) : Ve.call(null, this, 0, 0) : null;
};
h.J = function() {
  return this.k;
};
h.tb = function() {
  return 0 < this.k ? w.a(this, this.k - 1) : null;
};
h.ub = function() {
  if (0 === this.k) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.k) {
    return Yb(We, this.j);
  }
  if (1 < this.k - Ie(this)) {
    return new R(this.j, this.k - 1, this.shift, this.root, this.D.slice(0, -1), null);
  }
  if (s) {
    var a = Ne(this, this.k - 2), b = Re(this, this.shift, this.root), b = null == b ? S : b, c = this.k - 1;
    return 5 < this.shift && null == b.f[1] ? new R(this.j, c, this.shift - 5, b.f[0], a, null) : new R(this.j, c, this.shift, b, a, null);
  }
  return null;
};
h.Cd = function(a, b, c) {
  return Hb(this, b, c);
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new R(b, this.k, this.shift, this.root, this.D, this.o);
};
h.pa = !0;
h.ka = function() {
  return new R(this.j, this.k, this.shift, this.root, this.D, this.o);
};
h.t = function() {
  return this.j;
};
h.A = function(a, b) {
  return Ne(this, b)[b & 31];
};
h.qa = function(a, b, c) {
  return 0 <= b && b < this.k ? w.a(this, b) : c;
};
h.aa = function() {
  return Tc(We, this.j);
};
var S = new Fe(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), We = new R(null, 0, 5, S, [], 0);
function Xe(a, b) {
  var c = a.length, d = b ? a : lb(a);
  if (32 > c) {
    return new R(null, c, 5, S, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, g = (new R(null, 32, 5, S, e, null)).Jb(null);;) {
    if (f < c) {
      e = f + 1, g = pc(g, d[f]), f = e;
    } else {
      return qc(g);
    }
  }
}
function Ze(a) {
  return qc(nb.c(pc, oc(We), a));
}
var $e = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof Gc && 0 === a.n ? Xe.a ? Xe.a(a.f, !0) : Xe.call(null, a.f, !0) : Ze(a);
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function af(a, b, c, d, e, f) {
  this.ea = a;
  this.Ra = b;
  this.n = c;
  this.W = d;
  this.j = e;
  this.o = f;
  this.g = 32243948;
  this.q = 1536;
}
h = af.prototype;
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.ra = function() {
  if (this.W + 1 < this.Ra.length) {
    var a = Ve.i ? Ve.i(this.ea, this.Ra, this.n, this.W + 1) : Ve.call(null, this.ea, this.Ra, this.n, this.W + 1);
    return null == a ? null : a;
  }
  return wc(this);
};
h.R = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Jc.a(bf.c ? bf.c(this.ea, this.n + this.W, H(this.ea)) : bf.call(null, this.ea, this.n + this.W, H(this.ea)), b);
};
h.ga = function(a, b, c) {
  return Jc.c(bf.c ? bf.c(this.ea, this.n + this.W, H(this.ea)) : bf.call(null, this.ea, this.n + this.W, H(this.ea)), b, c);
};
h.I = function() {
  return this;
};
h.X = function() {
  return this.Ra[this.W];
};
h.ha = function() {
  if (this.W + 1 < this.Ra.length) {
    var a = Ve.i ? Ve.i(this.ea, this.Ra, this.n, this.W + 1) : Ve.call(null, this.ea, this.Ra, this.n, this.W + 1);
    return null == a ? Hc : a;
  }
  return vc(this);
};
h.hd = function() {
  var a = this.Ra.length, a = this.n + a < ub(this.ea) ? Ve.c ? Ve.c(this.ea, this.n + a, 0) : Ve.call(null, this.ea, this.n + a, 0) : null;
  return null == a ? null : a;
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return Ve.m ? Ve.m(this.ea, this.Ra, this.n, this.W, b) : Ve.call(null, this.ea, this.Ra, this.n, this.W, b);
};
h.aa = function() {
  return Tc(We, this.j);
};
h.jd = function() {
  return Rd.a(this.Ra, this.W);
};
h.kd = function() {
  var a = this.Ra.length, a = this.n + a < ub(this.ea) ? Ve.c ? Ve.c(this.ea, this.n + a, 0) : Ve.call(null, this.ea, this.n + a, 0) : null;
  return null == a ? Hc : a;
};
var Ve = function() {
  function a(a, b, c, d, l) {
    return new af(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new af(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new af(a, Ne(a, b), b, c, null, null);
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
function cf(a, b, c, d, e) {
  this.j = a;
  this.Na = b;
  this.start = c;
  this.end = d;
  this.o = e;
  this.q = 0;
  this.g = 32400159;
}
h = cf.prototype;
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.K = function(a, b) {
  return w.c(this, b, null);
};
h.L = function(a, b, c) {
  return w.c(this, b, c);
};
h.rb = function(a, b, c) {
  var d = this, e = d.start + b;
  return df.m ? df.m(d.j, Zc.c(d.Na, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : df.call(null, d.j, Zc.c(d.Na, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.qa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.qa(null, a, b);
};
h.R = function(a, b) {
  return df.m ? df.m(this.j, Tb(this.Na, this.end, b), this.start, this.end + 1, null) : df.call(null, this.j, Tb(this.Na, this.end, b), this.start, this.end + 1, null);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Jc.a(this, b);
};
h.ga = function(a, b, c) {
  return Jc.c(this, b, c);
};
h.I = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : G(w.a(a.Na, d), new Md(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
h.J = function() {
  return this.end - this.start;
};
h.tb = function() {
  return w.a(this.Na, this.end - 1);
};
h.ub = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return df.m ? df.m(this.j, this.Na, this.start, this.end - 1, null) : df.call(null, this.j, this.Na, this.start, this.end - 1, null);
};
h.Cd = function(a, b, c) {
  return Hb(this, b, c);
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return df.m ? df.m(b, this.Na, this.start, this.end, this.o) : df.call(null, b, this.Na, this.start, this.end, this.o);
};
h.pa = !0;
h.ka = function() {
  return new cf(this.j, this.Na, this.start, this.end, this.o);
};
h.t = function() {
  return this.j;
};
h.A = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Me(b, this.end - this.start) : w.a(this.Na, this.start + b);
};
h.qa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : w.c(this.Na, this.start + b, c);
};
h.aa = function() {
  return Tc(We, this.j);
};
function df(a, b, c, d, e) {
  for (;;) {
    if (b instanceof cf) {
      c = b.start + c, d = b.start + d, b = b.Na;
    } else {
      var f = H(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new cf(a, b, c, d, e);
    }
  }
}
var bf = function() {
  function a(a, b, c) {
    return df(null, a, b, c, null);
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
function Te(a) {
  return new Fe({}, lb(a.f));
}
function Ue(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  md(a, 0, b, 0, a.length);
  return b;
}
var ff = function ef(b, c, d, e) {
  d = b.root.F === d.F ? d : new Fe(b.root.F, lb(d.f));
  var f = b.k - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.f[f];
    b = null != g ? ef(b, c - 5, g, e) : Je(b.root.F, c - 5, e);
  }
  d.f[f] = b;
  return d;
};
function Se(a, b, c, d) {
  this.k = a;
  this.shift = b;
  this.root = c;
  this.D = d;
  this.g = 275;
  this.q = 88;
}
h = Se.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.L(null, a, b);
};
h.K = function(a, b) {
  return w.c(this, b, null);
};
h.L = function(a, b, c) {
  return w.c(this, b, c);
};
h.A = function(a, b) {
  if (this.root.F) {
    return Ne(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.qa = function(a, b, c) {
  return 0 <= b && b < this.k ? w.a(this, b) : c;
};
h.J = function() {
  if (this.root.F) {
    return this.k;
  }
  throw Error("count after persistent!");
};
h.oe = function(a, b, c) {
  var d = this;
  if (d.root.F) {
    if (0 <= b && b < d.k) {
      return Ie(this) <= b ? d.D[b & 31] = c : (a = function f(a, k) {
        var l = d.root.F === k.F ? k : new Fe(d.root.F, lb(k.f));
        if (0 === a) {
          l.f[b & 31] = c;
        } else {
          var p = b >>> a & 31, t = f(a - 5, l.f[p]);
          l.f[p] = t;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.k) {
      return pc(this, c);
    }
    if (s) {
      throw Error([v("Index "), v(b), v(" out of bounds for TransientVector of length"), v(d.k)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
h.bc = function(a, b, c) {
  return sc(this, b, c);
};
h.vb = function(a, b) {
  if (this.root.F) {
    if (32 > this.k - Ie(this)) {
      this.D[this.k & 31] = b;
    } else {
      var c = new Fe(this.root.F, this.D), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.D = d;
      if (this.k >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Je(this.root.F, this.shift, c);
        this.root = new Fe(this.root.F, d);
        this.shift = e;
      } else {
        this.root = ff(this, this.shift, this.root, c);
      }
    }
    this.k += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.wb = function() {
  if (this.root.F) {
    this.root.F = null;
    var a = this.k - Ie(this), b = Array(a);
    md(this.D, 0, b, 0, a);
    return new R(null, this.k, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function gf(a, b, c, d) {
  this.j = a;
  this.Ea = b;
  this.Va = c;
  this.o = d;
  this.q = 0;
  this.g = 31850572;
}
h = gf.prototype;
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.R = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return yc(this);
};
h.I = function() {
  return this;
};
h.X = function() {
  return B(this.Ea);
};
h.ha = function() {
  var a = E(this.Ea);
  return a ? new gf(this.j, a, this.Va, null) : null == this.Va ? vb(this) : new gf(this.j, this.Va, null, null);
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new gf(b, this.Ea, this.Va, this.o);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return Tc(Hc, this.j);
};
function hf(a, b, c, d, e) {
  this.j = a;
  this.count = b;
  this.Ea = c;
  this.Va = d;
  this.o = e;
  this.q = 0;
  this.g = 31858766;
}
h = hf.prototype;
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.R = function(a, b) {
  var c;
  q(this.Ea) ? (c = this.Va, c = new hf(this.j, this.count + 1, this.Ea, Wc.a(q(c) ? c : We, b), null)) : c = new hf(this.j, this.count + 1, Wc.a(this.Ea, b), We, null);
  return c;
};
h.toString = function() {
  return yc(this);
};
h.I = function() {
  var a = A(this.Va), b = this.Ea;
  return q(q(b) ? b : a) ? new gf(null, this.Ea, A(a), null) : null;
};
h.J = function() {
  return this.count;
};
h.tb = function() {
  return B(this.Ea);
};
h.ub = function() {
  if (q(this.Ea)) {
    var a = E(this.Ea);
    return a ? new hf(this.j, this.count - 1, a, this.Va, null) : new hf(this.j, this.count - 1, A(this.Va), We, null);
  }
  return this;
};
h.X = function() {
  return B(this.Ea);
};
h.ha = function() {
  return C(A(this));
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new hf(b, this.count, this.Ea, this.Va, this.o);
};
h.pa = !0;
h.ka = function() {
  return new hf(this.j, this.count, this.Ea, this.Va, this.o);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return jf;
};
var jf = new hf(null, 0, null, We, 0);
function kf() {
  this.q = 0;
  this.g = 2097152;
}
kf.prototype.G = function() {
  return!1;
};
var lf = new kf;
function mf(a, b) {
  return pd(O(b) ? H(a) === H(b) ? ce(ee, ie.a(function(a) {
    return y.a(J.c(b, B(a), lf), Uc(a));
  }, a)) : null : null);
}
function nf(a, b) {
  var c = a.f;
  if (b instanceof Q) {
    a: {
      for (var d = c.length, e = b.cb, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof Q && e === g.cb) {
          c = f;
          break a;
        }
        if (s) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (ia(b) || "number" === typeof b) {
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
          if (s) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof Bc) {
        a: {
          d = c.length;
          e = b.eb;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof Bc && e === g.eb) {
              c = f;
              break a;
            }
            if (s) {
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
              if (s) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (s) {
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
                if (s) {
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
function of(a, b, c) {
  this.f = a;
  this.n = b;
  this.oa = c;
  this.q = 0;
  this.g = 32374990;
}
h = of.prototype;
h.N = function() {
  return Nc(this);
};
h.ra = function() {
  return this.n < this.f.length - 2 ? new of(this.f, this.n + 2, this.oa) : null;
};
h.R = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.I = function() {
  return this;
};
h.J = function() {
  return(this.f.length - this.n) / 2;
};
h.X = function() {
  return new R(null, 2, 5, S, [this.f[this.n], this.f[this.n + 1]], null);
};
h.ha = function() {
  return this.n < this.f.length - 2 ? new of(this.f, this.n + 2, this.oa) : Hc;
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new of(this.f, this.n, b);
};
h.t = function() {
  return this.oa;
};
h.aa = function() {
  return Tc(Hc, this.oa);
};
function n(a, b, c, d) {
  this.j = a;
  this.k = b;
  this.f = c;
  this.o = d;
  this.q = 4;
  this.g = 16123663;
}
h = n.prototype;
h.Jb = function() {
  return new pf({}, this.f.length, lb(this.f));
};
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Bd(this);
};
h.K = function(a, b) {
  return Fb.c(this, b, null);
};
h.L = function(a, b, c) {
  a = nf(this, b);
  return-1 === a ? c : this.f[a + 1];
};
h.rb = function(a, b, c) {
  a = nf(this, b);
  if (-1 === a) {
    if (this.k < qf) {
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
    return Yb(Hb(ze(rf, this), b, c), this.j);
  }
  return c === this.f[a + 1] ? this : s ? (b = lb(this.f), b[a + 1] = c, new n(this.j, this.k, b, null)) : null;
};
h.$b = function(a, b) {
  return-1 !== nf(this, b);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.L(null, a, b);
};
h.R = function(a, b) {
  return jd(b) ? Hb(this, w.a(b, 0), w.a(b, 1)) : nb.c(xb, this, b);
};
h.toString = function() {
  return yc(this);
};
h.I = function() {
  return 0 <= this.f.length - 2 ? new of(this.f, 0, null) : null;
};
h.J = function() {
  return this.k;
};
h.G = function(a, b) {
  return mf(this, b);
};
h.u = function(a, b) {
  return new n(b, this.k, this.f, this.o);
};
h.pa = !0;
h.ka = function() {
  return new n(this.j, this.k, this.f, this.o);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return Yb(sf, this.j);
};
h.yc = function(a, b) {
  if (0 <= nf(this, b)) {
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
        if (s) {
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
var sf = new n(null, 0, [], null), qf = 8;
function tf(a) {
  for (var b = a.length, c = 0, d = oc(sf);;) {
    if (c < b) {
      var e = c + 2, d = rc(d, a[c], a[c + 1]), c = e
    } else {
      return qc(d);
    }
  }
}
function pf(a, b, c) {
  this.Ob = a;
  this.Ab = b;
  this.f = c;
  this.q = 56;
  this.g = 258;
}
h = pf.prototype;
h.bc = function(a, b, c) {
  if (q(this.Ob)) {
    a = nf(this, b);
    if (-1 === a) {
      if (this.Ab + 2 <= 2 * qf) {
        return this.Ab += 2, this.f.push(b), this.f.push(c), this;
      }
      a = uf.a ? uf.a(this.Ab, this.f) : uf.call(null, this.Ab, this.f);
      return rc(a, b, c);
    }
    c !== this.f[a + 1] && (this.f[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.vb = function(a, b) {
  if (q(this.Ob)) {
    if (b ? b.g & 2048 || b.vf || (b.g ? 0 : r(Kb, b)) : r(Kb, b)) {
      return rc(this, Cd.b ? Cd.b(b) : Cd.call(null, b), Dd.b ? Dd.b(b) : Dd.call(null, b));
    }
    for (var c = A(b), d = this;;) {
      var e = B(c);
      if (q(e)) {
        c = E(c), d = rc(d, Cd.b ? Cd.b(e) : Cd.call(null, e), Dd.b ? Dd.b(e) : Dd.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.wb = function() {
  if (q(this.Ob)) {
    return this.Ob = !1, new n(null, wd(this.Ab), this.f, null);
  }
  throw Error("persistent! called twice");
};
h.K = function(a, b) {
  return Fb.c(this, b, null);
};
h.L = function(a, b, c) {
  if (q(this.Ob)) {
    return a = nf(this, b), -1 === a ? c : this.f[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.J = function() {
  if (q(this.Ob)) {
    return wd(this.Ab);
  }
  throw Error("count after persistent!");
};
function uf(a, b) {
  for (var c = oc(rf), d = 0;;) {
    if (d < a) {
      c = rc(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function vf() {
  this.xa = !1;
}
function wf(a, b) {
  return a === b ? !0 : Jd(a, b) ? !0 : s ? y.a(a, b) : null;
}
var xf = function() {
  function a(a, b, c, g, k) {
    a = lb(a);
    a[b] = c;
    a[g] = k;
    return a;
  }
  function b(a, b, c) {
    a = lb(a);
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
function yf(a, b) {
  var c = Array(a.length - 2);
  md(a, 0, c, 0, 2 * b);
  md(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var zf = function() {
  function a(a, b, c, g, k, l) {
    a = a.Qb(b);
    a.f[c] = g;
    a.f[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Qb(b);
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
function Af(a, b, c) {
  this.F = a;
  this.Q = b;
  this.f = c;
}
h = Af.prototype;
h.Ta = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = xd(this.Q & g - 1);
  if (0 === (this.Q & g)) {
    var l = xd(this.Q);
    if (2 * l < this.f.length) {
      a = this.Qb(a);
      b = a.f;
      f.xa = !0;
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
      a.Q |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Bf.Ta(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.Q >>> d & 1) && (k[d] = null != this.f[e] ? Bf.Ta(a, b + 5, Dc(this.f[e]), this.f[e], this.f[e + 1], f) : this.f[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Cf(a, l + 1, k);
    }
    return s ? (b = Array(2 * (l + 4)), md(this.f, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, md(this.f, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.xa = !0, a = this.Qb(a), a.f = b, a.Q |= g, a) : null;
  }
  l = this.f[2 * k];
  g = this.f[2 * k + 1];
  return null == l ? (l = g.Ta(a, b + 5, c, d, e, f), l === g ? this : zf.i(this, a, 2 * k + 1, l)) : wf(d, l) ? e === g ? this : zf.i(this, a, 2 * k + 1, e) : s ? (f.xa = !0, zf.la(this, a, 2 * k, null, 2 * k + 1, Df.Kb ? Df.Kb(a, b + 5, l, g, c, d, e) : Df.call(null, a, b + 5, l, g, c, d, e))) : null;
};
h.hc = function() {
  return Ef.b ? Ef.b(this.f) : Ef.call(null, this.f);
};
h.Qb = function(a) {
  if (a === this.F) {
    return this;
  }
  var b = xd(this.Q), c = Array(0 > b ? 4 : 2 * (b + 1));
  md(this.f, 0, c, 0, 2 * b);
  return new Af(a, this.Q, c);
};
h.ic = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.Q & d)) {
    return this;
  }
  var e = xd(this.Q & d - 1), f = this.f[2 * e], g = this.f[2 * e + 1];
  return null == f ? (a = g.ic(a + 5, b, c), a === g ? this : null != a ? new Af(null, this.Q, xf.c(this.f, 2 * e + 1, a)) : this.Q === d ? null : s ? new Af(null, this.Q ^ d, yf(this.f, e)) : null) : wf(c, f) ? new Af(null, this.Q ^ d, yf(this.f, e)) : s ? this : null;
};
h.Sa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = xd(this.Q & f - 1);
  if (0 === (this.Q & f)) {
    var k = xd(this.Q);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Bf.Sa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.Q >>> c & 1) && (g[c] = null != this.f[d] ? Bf.Sa(a + 5, Dc(this.f[d]), this.f[d], this.f[d + 1], e) : this.f[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Cf(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    md(this.f, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    md(this.f, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.xa = !0;
    return new Af(null, this.Q | f, a);
  }
  k = this.f[2 * g];
  f = this.f[2 * g + 1];
  return null == k ? (k = f.Sa(a + 5, b, c, d, e), k === f ? this : new Af(null, this.Q, xf.c(this.f, 2 * g + 1, k))) : wf(c, k) ? d === f ? this : new Af(null, this.Q, xf.c(this.f, 2 * g + 1, d)) : s ? (e.xa = !0, new Af(null, this.Q, xf.m(this.f, 2 * g, null, 2 * g + 1, Df.la ? Df.la(a + 5, k, f, b, c, d) : Df.call(null, a + 5, k, f, b, c, d)))) : null;
};
h.mb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.Q & e)) {
    return d;
  }
  var f = xd(this.Q & e - 1), e = this.f[2 * f], f = this.f[2 * f + 1];
  return null == e ? f.mb(a + 5, b, c, d) : wf(c, e) ? f : s ? d : null;
};
var Bf = new Af(null, 0, []);
function Cf(a, b, c) {
  this.F = a;
  this.k = b;
  this.f = c;
}
h = Cf.prototype;
h.Ta = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.f[g];
  if (null == k) {
    return a = zf.i(this, a, g, Bf.Ta(a, b + 5, c, d, e, f)), a.k += 1, a;
  }
  b = k.Ta(a, b + 5, c, d, e, f);
  return b === k ? this : zf.i(this, a, g, b);
};
h.hc = function() {
  return Ff.b ? Ff.b(this.f) : Ff.call(null, this.f);
};
h.Qb = function(a) {
  return a === this.F ? this : new Cf(a, this.k, lb(this.f));
};
h.ic = function(a, b, c) {
  var d = b >>> a & 31, e = this.f[d];
  if (null != e) {
    a = e.ic(a + 5, b, c);
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
                d = new Af(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new Cf(null, this.k - 1, xf.c(this.f, d, a));
        }
      } else {
        d = s ? new Cf(null, this.k, xf.c(this.f, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
h.Sa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.f[f];
  if (null == g) {
    return new Cf(null, this.k + 1, xf.c(this.f, f, Bf.Sa(a + 5, b, c, d, e)));
  }
  a = g.Sa(a + 5, b, c, d, e);
  return a === g ? this : new Cf(null, this.k, xf.c(this.f, f, a));
};
h.mb = function(a, b, c, d) {
  var e = this.f[b >>> a & 31];
  return null != e ? e.mb(a + 5, b, c, d) : d;
};
function Gf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (wf(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Hf(a, b, c, d) {
  this.F = a;
  this.bb = b;
  this.k = c;
  this.f = d;
}
h = Hf.prototype;
h.Ta = function(a, b, c, d, e, f) {
  if (c === this.bb) {
    b = Gf(this.f, this.k, d);
    if (-1 === b) {
      if (this.f.length > 2 * this.k) {
        return a = zf.la(this, a, 2 * this.k, d, 2 * this.k + 1, e), f.xa = !0, a.k += 1, a;
      }
      c = this.f.length;
      b = Array(c + 2);
      md(this.f, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.xa = !0;
      f = this.k + 1;
      a === this.F ? (this.f = b, this.k = f, a = this) : a = new Hf(this.F, this.bb, f, b);
      return a;
    }
    return this.f[b + 1] === e ? this : zf.i(this, a, b + 1, e);
  }
  return(new Af(a, 1 << (this.bb >>> b & 31), [null, this, null, null])).Ta(a, b, c, d, e, f);
};
h.hc = function() {
  return Ef.b ? Ef.b(this.f) : Ef.call(null, this.f);
};
h.Qb = function(a) {
  if (a === this.F) {
    return this;
  }
  var b = Array(2 * (this.k + 1));
  md(this.f, 0, b, 0, 2 * this.k);
  return new Hf(a, this.bb, this.k, b);
};
h.ic = function(a, b, c) {
  a = Gf(this.f, this.k, c);
  return-1 === a ? this : 1 === this.k ? null : s ? new Hf(null, this.bb, this.k - 1, yf(this.f, wd(a))) : null;
};
h.Sa = function(a, b, c, d, e) {
  return b === this.bb ? (a = Gf(this.f, this.k, c), -1 === a ? (a = 2 * this.k, b = Array(a + 2), md(this.f, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.xa = !0, new Hf(null, this.bb, this.k + 1, b)) : y.a(this.f[a], d) ? this : new Hf(null, this.bb, this.k, xf.c(this.f, a + 1, d))) : (new Af(null, 1 << (this.bb >>> a & 31), [null, this])).Sa(a, b, c, d, e);
};
h.mb = function(a, b, c, d) {
  a = Gf(this.f, this.k, c);
  return 0 > a ? d : wf(c, this.f[a]) ? this.f[a + 1] : s ? d : null;
};
var Df = function() {
  function a(a, b, c, g, k, l, p) {
    var t = Dc(c);
    if (t === k) {
      return new Hf(null, t, 2, [c, g, l, p]);
    }
    var x = new vf;
    return Bf.Ta(a, b, t, c, g, x).Ta(a, b, k, l, p, x);
  }
  function b(a, b, c, g, k, l) {
    var p = Dc(b);
    if (p === g) {
      return new Hf(null, p, 2, [b, c, k, l]);
    }
    var t = new vf;
    return Bf.Sa(a, p, b, c, t).Sa(a, g, k, l, t);
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
  c.Kb = a;
  return c;
}();
function If(a, b, c, d, e) {
  this.j = a;
  this.Ua = b;
  this.n = c;
  this.O = d;
  this.o = e;
  this.q = 0;
  this.g = 32374860;
}
h = If.prototype;
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.R = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.I = function() {
  return this;
};
h.X = function() {
  return null == this.O ? new R(null, 2, 5, S, [this.Ua[this.n], this.Ua[this.n + 1]], null) : B(this.O);
};
h.ha = function() {
  return null == this.O ? Ef.c ? Ef.c(this.Ua, this.n + 2, null) : Ef.call(null, this.Ua, this.n + 2, null) : Ef.c ? Ef.c(this.Ua, this.n, E(this.O)) : Ef.call(null, this.Ua, this.n, E(this.O));
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new If(b, this.Ua, this.n, this.O, this.o);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return Tc(Hc, this.j);
};
var Ef = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new If(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (q(g) && (g = g.hc(), q(g))) {
            return new If(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new If(null, a, b, c, null);
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
function Jf(a, b, c, d, e) {
  this.j = a;
  this.Ua = b;
  this.n = c;
  this.O = d;
  this.o = e;
  this.q = 0;
  this.g = 32374860;
}
h = Jf.prototype;
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.R = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.I = function() {
  return this;
};
h.X = function() {
  return B(this.O);
};
h.ha = function() {
  return Ff.i ? Ff.i(null, this.Ua, this.n, E(this.O)) : Ff.call(null, null, this.Ua, this.n, E(this.O));
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new Jf(b, this.Ua, this.n, this.O, this.o);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return Tc(Hc, this.j);
};
var Ff = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (q(k) && (k = k.hc(), q(k))) {
            return new Jf(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Jf(a, b, c, g, null);
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
function Kf(a, b, c, d, e, f) {
  this.j = a;
  this.k = b;
  this.root = c;
  this.sa = d;
  this.Ia = e;
  this.o = f;
  this.q = 4;
  this.g = 16123663;
}
h = Kf.prototype;
h.Jb = function() {
  return new Lf({}, this.root, this.k, this.sa, this.Ia);
};
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Bd(this);
};
h.K = function(a, b) {
  return Fb.c(this, b, null);
};
h.L = function(a, b, c) {
  return null == b ? this.sa ? this.Ia : c : null == this.root ? c : s ? this.root.mb(0, Dc(b), b, c) : null;
};
h.rb = function(a, b, c) {
  if (null == b) {
    return this.sa && c === this.Ia ? this : new Kf(this.j, this.sa ? this.k : this.k + 1, this.root, !0, c, null);
  }
  a = new vf;
  b = (null == this.root ? Bf : this.root).Sa(0, Dc(b), b, c, a);
  return b === this.root ? this : new Kf(this.j, a.xa ? this.k + 1 : this.k, b, this.sa, this.Ia, null);
};
h.$b = function(a, b) {
  return null == b ? this.sa : null == this.root ? !1 : s ? this.root.mb(0, Dc(b), b, nd) !== nd : null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.L(null, a, b);
};
h.R = function(a, b) {
  return jd(b) ? Hb(this, w.a(b, 0), w.a(b, 1)) : nb.c(xb, this, b);
};
h.toString = function() {
  return yc(this);
};
h.I = function() {
  if (0 < this.k) {
    var a = null != this.root ? this.root.hc() : null;
    return this.sa ? G(new R(null, 2, 5, S, [null, this.Ia], null), a) : a;
  }
  return null;
};
h.J = function() {
  return this.k;
};
h.G = function(a, b) {
  return mf(this, b);
};
h.u = function(a, b) {
  return new Kf(b, this.k, this.root, this.sa, this.Ia, this.o);
};
h.pa = !0;
h.ka = function() {
  return new Kf(this.j, this.k, this.root, this.sa, this.Ia, this.o);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return Yb(rf, this.j);
};
h.yc = function(a, b) {
  if (null == b) {
    return this.sa ? new Kf(this.j, this.k - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (s) {
    var c = this.root.ic(0, Dc(b), b);
    return c === this.root ? this : new Kf(this.j, this.k - 1, c, this.sa, this.Ia, null);
  }
  return null;
};
var rf = new Kf(null, 0, null, !1, null, 0);
function Yc(a, b) {
  for (var c = a.length, d = 0, e = oc(rf);;) {
    if (d < c) {
      var f = d + 1, e = e.bc(null, a[d], b[d]), d = f
    } else {
      return qc(e);
    }
  }
}
function Lf(a, b, c, d, e) {
  this.F = a;
  this.root = b;
  this.count = c;
  this.sa = d;
  this.Ia = e;
  this.q = 56;
  this.g = 258;
}
h = Lf.prototype;
h.bc = function(a, b, c) {
  return Mf(this, b, c);
};
h.vb = function(a, b) {
  var c;
  a: {
    if (this.F) {
      if (b ? b.g & 2048 || b.vf || (b.g ? 0 : r(Kb, b)) : r(Kb, b)) {
        c = Mf(this, Cd.b ? Cd.b(b) : Cd.call(null, b), Dd.b ? Dd.b(b) : Dd.call(null, b));
        break a;
      }
      c = A(b);
      for (var d = this;;) {
        var e = B(c);
        if (q(e)) {
          c = E(c), d = Mf(d, Cd.b ? Cd.b(e) : Cd.call(null, e), Dd.b ? Dd.b(e) : Dd.call(null, e));
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
h.wb = function() {
  var a;
  if (this.F) {
    this.F = null, a = new Kf(null, this.count, this.root, this.sa, this.Ia, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.K = function(a, b) {
  return null == b ? this.sa ? this.Ia : null : null == this.root ? null : this.root.mb(0, Dc(b), b);
};
h.L = function(a, b, c) {
  return null == b ? this.sa ? this.Ia : c : null == this.root ? c : this.root.mb(0, Dc(b), b, c);
};
h.J = function() {
  if (this.F) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Mf(a, b, c) {
  if (a.F) {
    if (null == b) {
      a.Ia !== c && (a.Ia = c), a.sa || (a.count += 1, a.sa = !0);
    } else {
      var d = new vf;
      b = (null == a.root ? Bf : a.root).Ta(a.F, 0, Dc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.xa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var T = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    for (var b = A(a), e = oc(rf);;) {
      if (b) {
        a = E(E(b));
        var f = B(b), b = Uc(b), e = rc(e, f, b), b = a;
      } else {
        return qc(e);
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
    return new n(null, wd(H(a)), K.a(mb, a), null);
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
  this.q = 0;
  this.g = 32374988;
}
h = Of.prototype;
h.N = function() {
  return Nc(this);
};
h.ra = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.zc || (a.g ? 0 : r(Db, a)) : r(Db, a)) ? this.ua.ra(null) : E(this.ua);
  return null == a ? null : new Of(a, this.oa);
};
h.R = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.I = function() {
  return this;
};
h.X = function() {
  return this.ua.X(null).zd();
};
h.ha = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.zc || (a.g ? 0 : r(Db, a)) : r(Db, a)) ? this.ua.ra(null) : E(this.ua);
  return null != a ? new Of(a, this.oa) : Hc;
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new Of(this.ua, b);
};
h.t = function() {
  return this.oa;
};
h.aa = function() {
  return Tc(Hc, this.oa);
};
function Pf(a) {
  return(a = A(a)) ? new Of(a, null) : null;
}
function Cd(a) {
  return Lb(a);
}
function Qf(a, b) {
  this.ua = a;
  this.oa = b;
  this.q = 0;
  this.g = 32374988;
}
h = Qf.prototype;
h.N = function() {
  return Nc(this);
};
h.ra = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.zc || (a.g ? 0 : r(Db, a)) : r(Db, a)) ? this.ua.ra(null) : E(this.ua);
  return null == a ? null : new Qf(a, this.oa);
};
h.R = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Rc.a(b, this);
};
h.ga = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.I = function() {
  return this;
};
h.X = function() {
  return this.ua.X(null).Ad();
};
h.ha = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.zc || (a.g ? 0 : r(Db, a)) : r(Db, a)) ? this.ua.ra(null) : E(this.ua);
  return null != a ? new Qf(a, this.oa) : Hc;
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new Qf(this.ua, b);
};
h.t = function() {
  return this.oa;
};
h.aa = function() {
  return Tc(Hc, this.oa);
};
function Rf(a) {
  return(a = A(a)) ? new Qf(a, null) : null;
}
function Dd(a) {
  return Nb(a);
}
var Sf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return q(de(ee, a)) ? nb.a(function(a, b) {
      return Wc.a(q(a) ? a : sf, b);
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
  this.lb = b;
  this.o = c;
  this.q = 4;
  this.g = 15077647;
}
h = Tf.prototype;
h.Jb = function() {
  return new Uf(oc(this.lb));
};
h.N = function() {
  var a = this.o;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = A(this);;) {
      if (b) {
        var c = B(b), a = (a + Dc(c)) % 4503599627370496, b = E(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.o = a;
};
h.K = function(a, b) {
  return Fb.c(this, b, null);
};
h.L = function(a, b, c) {
  return Gb(this.lb, b) ? b : c;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.L(null, a, b);
};
h.R = function(a, b) {
  return new Tf(this.j, Zc.c(this.lb, b, null), null);
};
h.toString = function() {
  return yc(this);
};
h.I = function() {
  return Pf(this.lb);
};
h.ne = function(a, b) {
  return new Tf(this.j, Jb(this.lb, b), null);
};
h.J = function() {
  return ub(this.lb);
};
h.G = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.g & 4096 || b.oi ? !0 : b.g ? !1 : r(Ob, b) : r(Ob, b)) && H(c) === H(b) && ce(function(a) {
    return qd(c, a);
  }, b);
};
h.u = function(a, b) {
  return new Tf(b, this.lb, this.o);
};
h.pa = !0;
h.ka = function() {
  return new Tf(this.j, this.lb, this.o);
};
h.t = function() {
  return this.j;
};
h.aa = function() {
  return Tc(Vf, this.j);
};
var Vf = new Tf(null, sf, 0);
function Uf(a) {
  this.gb = a;
  this.g = 259;
  this.q = 136;
}
h = Uf.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Fb.c(this.gb, c, nd) === nd ? null : c;
      case 3:
        return Fb.c(this.gb, c, nd) === nd ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return Fb.c(this.gb, a, nd) === nd ? null : a;
};
h.a = function(a, b) {
  return Fb.c(this.gb, a, nd) === nd ? b : a;
};
h.K = function(a, b) {
  return Fb.c(this, b, null);
};
h.L = function(a, b, c) {
  return Fb.c(this.gb, b, nd) === nd ? c : b;
};
h.J = function() {
  return H(this.gb);
};
h.vb = function(a, b) {
  this.gb = rc(this.gb, b, null);
  return this;
};
h.wb = function() {
  return new Tf(null, qc(this.gb), null);
};
function Xf(a) {
  a = A(a);
  if (null == a) {
    return Vf;
  }
  if (a instanceof Gc && 0 === a.n) {
    a = a.f;
    a: {
      for (var b = 0, c = oc(Vf);;) {
        if (b < a.length) {
          var d = b + 1, c = c.vb(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.wb(null);
  }
  if (s) {
    for (d = oc(Vf);;) {
      if (null != a) {
        b = a.ra(null), d = d.vb(null, a.X(null)), a = b;
      } else {
        return d.wb(null);
      }
    }
  } else {
    return null;
  }
}
function Kd(a) {
  if (a && (a.q & 4096 || a.xf)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([v("Doesn't support name: "), v(a)].join(""));
}
function Yf(a, b) {
  for (var c = oc(sf), d = A(a), e = A(b);;) {
    if (d && e) {
      var f = B(d), g = B(e), c = rc(c, f, g), d = E(d), e = E(e)
    } else {
      return qc(c);
    }
  }
}
var Zf = function() {
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
      return nb.c(function(c, d) {
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
}(), ag = function $f(b, c) {
  return new Md(null, function() {
    var d = A(c);
    return d ? q(b.b ? b.b(B(d)) : b.call(null, B(d))) ? G(B(d), $f(b, C(d))) : null : null;
  }, null, null);
};
function bg(a, b, c, d, e) {
  this.j = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.o = e;
  this.q = 0;
  this.g = 32375006;
}
h = bg.prototype;
h.N = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Nc(this);
};
h.ra = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new bg(this.j, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new bg(this.j, this.start + this.step, this.end, this.step, null) : null;
};
h.R = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return yc(this);
};
h.fa = function(a, b) {
  return Jc.a(this, b);
};
h.ga = function(a, b, c) {
  return Jc.c(this, b, c);
};
h.I = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.J = function() {
  return ib(dc(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
h.X = function() {
  return null == dc(this) ? null : this.start;
};
h.ha = function() {
  return null != dc(this) ? new bg(this.j, this.start + this.step, this.end, this.step, null) : Hc;
};
h.G = function(a, b) {
  return Pc(this, b);
};
h.u = function(a, b) {
  return new bg(b, this.start, this.end, this.step, this.o);
};
h.pa = !0;
h.ka = function() {
  return new bg(this.j, this.start, this.end, this.step, this.o);
};
h.t = function() {
  return this.j;
};
h.A = function(a, b) {
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
h.aa = function() {
  return Tc(Hc, this.j);
};
var cg = function() {
  function a(a, b, c) {
    return new bg(null, a, b, c, null);
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
  e.p = d;
  e.b = c;
  e.a = b;
  e.c = a;
  return e;
}(), dg = function() {
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
}(), eg = function() {
  function a(a, b) {
    dg.a(a, b);
    return b;
  }
  function b(a) {
    dg.b(a);
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
function fg(a, b) {
  var c = a.exec(b);
  return y.a(B(c), b) ? 1 === H(c) ? B(c) : Ze(c) : null;
}
function gg(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === H(c) ? B(c) : Ze(c);
}
function hg(a) {
  var b = gg(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  I.c(b, 0, null);
  a = I.c(b, 1, null);
  b = I.c(b, 2, null);
  return RegExp(b, a);
}
function ig(a, b, c, d, e, f, g) {
  var k = $a;
  try {
    $a = null == $a ? null : $a - 1;
    if (null != $a && 0 > $a) {
      return ic(a, "#");
    }
    ic(a, c);
    A(g) && (b.c ? b.c(B(g), a, f) : b.call(null, B(g), a, f));
    for (var l = E(g), p = fb.b(f);l && (null == p || 0 !== p);) {
      ic(a, d);
      b.c ? b.c(B(l), a, f) : b.call(null, B(l), a, f);
      var t = E(l);
      c = p - 1;
      l = t;
      p = c;
    }
    q(fb.b(f)) && (ic(a, d), b.c ? b.c("...", a, f) : b.call(null, "...", a, f));
    return ic(a, e);
  } finally {
    $a = k;
  }
}
var jg = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = A(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.A(null, k);
        ic(a, l);
        k += 1;
      } else {
        if (e = A(e)) {
          f = e, kd(f) ? (e = uc(f), g = vc(f), f = e, l = H(e), e = g, g = l) : (l = B(f), ic(a, l), e = E(f), f = null, g = 0), k = 0;
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
}(), kg = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function lg(a) {
  return[v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return kg[a];
  })), v('"')].join("");
}
var og = function mg(b, c, d) {
  if (null == b) {
    return ic(c, "nil");
  }
  if (void 0 === b) {
    return ic(c, "#\x3cundefined\x3e");
  }
  if (s) {
    q(function() {
      var c = J.a(d, db);
      return q(c) ? (c = b ? b.g & 131072 || b.wf ? !0 : b.g ? !1 : r(Vb, b) : r(Vb, b)) ? cd(b) : c : c;
    }()) && (ic(c, "^"), mg(cd(b), c, d), ic(c, " "));
    if (null == b) {
      return ic(c, "nil");
    }
    if (b.T) {
      return b.V(b, c, d);
    }
    if (b && (b.g & 2147483648 || b.ba)) {
      return b.H(null, c, d);
    }
    if (jb(b) === Boolean || "number" === typeof b) {
      return ic(c, "" + v(b));
    }
    if (null != b && b.constructor === Object) {
      return ic(c, "#js "), ng.i ? ng.i(ie.a(function(c) {
        return new R(null, 2, 5, S, [Ld.b(c), b[c]], null);
      }, ld(b)), mg, c, d) : ng.call(null, ie.a(function(c) {
        return new R(null, 2, 5, S, [Ld.b(c), b[c]], null);
      }, ld(b)), mg, c, d);
    }
    if (b instanceof Array) {
      return ig(c, mg, "#js [", " ", "]", d, b);
    }
    if (ia(b)) {
      return q(cb.b(d)) ? ic(c, lg(b)) : ic(c, b);
    }
    if (ad(b)) {
      return jg.e(c, F(["#\x3c", "" + v(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + v(b);;) {
          if (H(d) < c) {
            d = [v("0"), v(d)].join("");
          } else {
            return d;
          }
        }
      };
      return jg.e(c, F(['#inst "', "" + v(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? jg.e(c, F(['#"', b.source, '"'], 0)) : (b ? b.g & 2147483648 || b.ba || (b.g ? 0 : r(jc, b)) : r(jc, b)) ? kc(b, c, d) : s ? jg.e(c, F(["#\x3c", "" + v(b), "\x3e"], 0)) : null;
  }
  return null;
};
function pg(a) {
  var b = ab();
  if (gd(a)) {
    b = "";
  } else {
    var c = v, d = new Xa;
    a: {
      var e = new xc(d);
      og(B(a), e, b);
      a = A(E(a));
      for (var f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.A(null, k);
          ic(e, " ");
          og(l, e, b);
          k += 1;
        } else {
          if (a = A(a)) {
            f = a, kd(f) ? (a = uc(f), g = vc(f), f = a, l = H(a), a = g, g = l) : (l = B(f), ic(e, " "), og(l, e, b), a = E(f), f = null, g = 0), k = 0;
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
var qg = function() {
  function a(a) {
    var c = null;
    0 < arguments.length && (c = F(Array.prototype.slice.call(arguments, 0), 0));
    return pg(c);
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return pg(a);
  };
  a.e = function(a) {
    return pg(a);
  };
  return a;
}(), rg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = pg(a);
    Za.b ? Za.b(a) : Za.call(null, a);
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
function ng(a, b, c, d) {
  return ig(c, function(a, c, d) {
    b.c ? b.c(Lb(a), c, d) : b.call(null, Lb(a), c, d);
    ic(c, " ");
    return b.c ? b.c(Nb(a), c, d) : b.call(null, Nb(a), c, d);
  }, "{", ", ", "}", d, A(a));
}
Of.prototype.ba = !0;
Of.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
Gc.prototype.ba = !0;
Gc.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
cf.prototype.ba = !0;
cf.prototype.H = function(a, b, c) {
  return ig(b, og, "[", " ", "]", c, this);
};
Sd.prototype.ba = !0;
Sd.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
n.prototype.ba = !0;
n.prototype.H = function(a, b, c) {
  return ng(this, og, b, c);
};
hf.prototype.ba = !0;
hf.prototype.H = function(a, b, c) {
  return ig(b, og, "#queue [", " ", "]", c, A(this));
};
Md.prototype.ba = !0;
Md.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
Oc.prototype.ba = !0;
Oc.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
If.prototype.ba = !0;
If.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
af.prototype.ba = !0;
af.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
Kf.prototype.ba = !0;
Kf.prototype.H = function(a, b, c) {
  return ng(this, og, b, c);
};
Tf.prototype.ba = !0;
Tf.prototype.H = function(a, b, c) {
  return ig(b, og, "#{", " ", "}", c, this);
};
R.prototype.ba = !0;
R.prototype.H = function(a, b, c) {
  return ig(b, og, "[", " ", "]", c, this);
};
Ed.prototype.ba = !0;
Ed.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
of.prototype.ba = !0;
of.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
Fd.prototype.ba = !0;
Fd.prototype.H = function(a, b) {
  return ic(b, "()");
};
Id.prototype.ba = !0;
Id.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
bg.prototype.ba = !0;
bg.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
Jf.prototype.ba = !0;
Jf.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
Qf.prototype.ba = !0;
Qf.prototype.H = function(a, b, c) {
  return ig(b, og, "(", " ", ")", c, this);
};
R.prototype.wc = !0;
R.prototype.xc = function(a, b) {
  return rd.a(this, b);
};
cf.prototype.wc = !0;
cf.prototype.xc = function(a, b) {
  return rd.a(this, b);
};
Q.prototype.wc = !0;
Q.prototype.xc = function(a, b) {
  return zc(this, b);
};
Bc.prototype.wc = !0;
Bc.prototype.xc = function(a, b) {
  return zc(this, b);
};
function sg(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.xh = c;
  this.Zb = d;
  this.g = 2153938944;
  this.q = 2;
}
h = sg.prototype;
h.N = function() {
  return la(this);
};
h.qe = function(a, b, c) {
  a = A(this.Zb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.A(null, f), k = I.c(g, 0, null), g = I.c(g, 1, null);
      g.i ? g.i(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = A(a)) {
        kd(a) ? (d = uc(a), a = vc(a), k = d, e = H(d), d = k) : (d = B(a), k = I.c(d, 0, null), g = I.c(d, 1, null), g.i ? g.i(k, this, b, c) : g.call(null, k, this, b, c), a = E(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
h.pe = function(a, b, c) {
  return this.Zb = Zc.c(this.Zb, b, c);
};
h.re = function(a, b) {
  return this.Zb = $c.a(this.Zb, b);
};
h.H = function(a, b, c) {
  ic(b, "#\x3cAtom: ");
  og(this.state, b, c);
  return ic(b, "\x3e");
};
h.t = function() {
  return this.j;
};
h.Ib = function() {
  return this.state;
};
h.G = function(a, b) {
  return this === b;
};
var ug = function() {
  function a(a) {
    return new sg(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = P(c) ? K.a(T, c) : c, e = J.a(d, tg), d = J.a(d, db);
      return new sg(a, d, e, null);
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
function vg(a, b) {
  var c = a.xh;
  if (null != c && !q(c.b ? c.b(b) : c.call(null, b))) {
    throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(qg.e(F([Hd(new Bc(null, "validate", "validate", 1233162959, null), new Bc(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  null != a.Zb && lc(a, c, b);
  return b;
}
var wg = function() {
  function a(a, b, c, d, e) {
    return vg(a, b.i ? b.i(a.state, c, d, e) : b.call(null, a.state, c, d, e));
  }
  function b(a, b, c, d) {
    return vg(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d));
  }
  function c(a, b, c) {
    return vg(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c));
  }
  function d(a, b) {
    return vg(a, b.b ? b.b(a.state) : b.call(null, a.state));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, M) {
      var N = null;
      5 < arguments.length && (N = F(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, N);
    }
    function b(a, c, d, e, f, g) {
      return vg(a, K.e(c, a.state, d, e, f, F([g], 0)));
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
  }(), e = function(e, k, l, p, t, x) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, t);
      default:
        return f.e(e, k, l, p, t, F(arguments, 5));
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
}(), xg = null, yg = function() {
  function a(a) {
    null == xg && (xg = ug.b(0));
    return Ec.b([v(a), v(wg.a(xg, Ic))].join(""));
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
  c.p = b;
  c.b = a;
  return c;
}(), zg = {};
function Ag(a) {
  if (a ? a.tf : a) {
    return a.tf(a);
  }
  var b;
  b = Ag[m(null == a ? null : a)];
  if (!b && (b = Ag._, !b)) {
    throw u("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function Bg(a) {
  return(a ? q(q(null) ? null : a.sf) || (a.Ba ? 0 : r(zg, a)) : r(zg, a)) ? Ag(a) : "string" === typeof a || "number" === typeof a || a instanceof Q || a instanceof Bc ? Cg.b ? Cg.b(a) : Cg.call(null, a) : qg.e(F([a], 0));
}
var Cg = function Dg(b) {
  if (null == b) {
    return null;
  }
  if (b ? q(q(null) ? null : b.sf) || (b.Ba ? 0 : r(zg, b)) : r(zg, b)) {
    return Ag(b);
  }
  if (b instanceof Q) {
    return Kd(b);
  }
  if (b instanceof Bc) {
    return "" + v(b);
  }
  if (O(b)) {
    var c = {};
    b = A(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.A(null, f), k = I.c(g, 0, null), g = I.c(g, 1, null);
        c[Bg(k)] = Dg(g);
        f += 1;
      } else {
        if (b = A(b)) {
          kd(b) ? (e = uc(b), b = vc(b), d = e, e = H(e)) : (e = B(b), d = I.c(e, 0, null), e = I.c(e, 1, null), c[Bg(d)] = Dg(e), b = E(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (hd(b)) {
    c = [];
    b = A(ie.a(Dg, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.A(null, f), c.push(k), f += 1;
      } else {
        if (b = A(b)) {
          d = b, kd(d) ? (b = uc(d), f = vc(d), d = b, e = H(b), b = f) : (b = B(d), c.push(b), b = E(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return s ? b : null;
}, Eg = {};
function Fg(a, b) {
  if (a ? a.rf : a) {
    return a.rf(a, b);
  }
  var c;
  c = Fg[m(null == a ? null : a)];
  if (!c && (c = Fg._, !c)) {
    throw u("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var Hg = function() {
  function a(a) {
    return b.e(a, F([new n(null, 1, [Gg, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? q(q(null) ? null : a.ji) || (a.Ba ? 0 : r(Eg, a)) : r(Eg, a)) {
        return Fg(a, K.a(Nf, c));
      }
      if (A(c)) {
        var d = P(c) ? K.a(T, c) : c, e = J.a(d, Gg);
        return function(a, b, c, d) {
          return function N(e) {
            return P(e) ? eg.b(ie.a(N, e)) : hd(e) ? ze(null == e ? null : vb(e), ie.a(N, e)) : e instanceof Array ? Ze(ie.a(N, e)) : jb(e) === Object ? ze(sf, function() {
              return function(a, b, c, d) {
                return function Mb(f) {
                  return new Md(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = A(f);
                        if (a) {
                          if (kd(a)) {
                            var b = uc(a), c = H(b), g = Qd(c);
                            a: {
                              for (var k = 0;;) {
                                if (k < c) {
                                  var l = w.a(b, k), l = new R(null, 2, 5, S, [d.b ? d.b(l) : d.call(null, l), N(e[l])], null);
                                  g.add(l);
                                  k += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? Td(g.$(), Mb(vc(a))) : Td(g.$(), null);
                          }
                          g = B(a);
                          return G(new R(null, 2, 5, S, [d.b ? d.b(g) : d.call(null, g), N(e[g])], null), Mb(C(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(ld(e));
            }()) : s ? e : null;
          };
        }(c, d, e, q(e) ? Ld : v)(a);
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
function Ig(a) {
  this.bd = a;
  this.q = 0;
  this.g = 2153775104;
}
h = Ig.prototype;
h.N = function() {
  return Ca(qg.e(F([this], 0)));
};
h.H = function(a, b) {
  return ic(b, [v('#uuid "'), v(this.bd), v('"')].join(""));
};
h.G = function(a, b) {
  return b instanceof Ig && this.bd === b.bd;
};
h.pa = !0;
h.ka = function() {
  return new Ig(this.bd);
};
function Jg(a, b) {
  this.message = a;
  this.data = b;
}
Jg.prototype = Error();
Jg.prototype.constructor = Jg;
var Kg = function() {
  function a(a, b) {
    return new Jg(a, b);
  }
  function b(a, b) {
    return new Jg(a, b);
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
var Lg = new Q(null, "labels", "labels"), Mg = new Q(null, "const-count", "const-count"), Ng = new Q(null, "view", "view"), eb = new Q(null, "dup", "dup"), Og = new Q(null, "path", "path"), Pg = new Q(null, "href", "href"), Qg = new Q(null, "update-selection-investments-table-view", "update-selection-investments-table-view"), Rg = new Q(null, "portfolio-companies", "portfolio-companies"), Sg = new Q(null, "query-params", "query-params"), Tg = new Q(null, "portfolio_company_count", "portfolio_company_count"), 
z = new Q(null, "default", "default"), V = new Q(null, "recur", "recur"), Ug = new Q(null, "text", "text"), Vg = new Q(null, "xml", "xml"), Wg = new Q(null, "data", "data"), Xg = new Q(null, "uk_constituencies", "uk_constituencies"), Yg = new Q(null, "!portfolio_company_name_na", "!portfolio_company_name_na"), Zg = new Q(null, "ul", "ul"), $g = new Q(null, "from", "from"), ah = new Q(null, "date", "date"), bh = new Q(null, "init-state", "init-state"), ch = new Q(null, "all-portfolio-companies-summary", 
"all-portfolio-companies-summary"), dh = new Q(null, "company_no", "company_no"), eh = new Q(null, "finally-block", "finally-block"), fh = new Q(null, "boundarylinecolls", "boundarylinecolls"), gh = new Q(null, "div.box.box-first", "div.box.box-first"), hh = new Q(null, "boundaryline_compact_name", "boundaryline_compact_name"), ih = new Q(null, "latest_employee_count_delta", "latest_employee_count_delta"), jh = new Q(null, "latest_accounts_date", "latest_accounts_date"), kh = new Q(null, "records", 
"records"), lh = new Q(null, "search", "search"), mh = new Q(null, "edn", "edn"), nh = new Q(null, "employee-count-delta-val", "employee-count-delta-val"), oh = new Q(null, "raw", "raw"), ph = new Q(null, "boundarylines", "boundarylines"), qh = new Q(null, "catch-block", "catch-block"), rh = new Q(null, "desc", "desc"), sh = new Q(null, "coordinates", "coordinates"), th = new Q(null, "map", "map"), uh = new Q(null, "width", "width"), wh = new Q(null, "state", "state"), xh = new Q(null, "div", "div"), 
yh = new Q(null, "collection_id", "collection_id"), zh = new Q(null, "link-fn", "link-fn"), Ah = new Q(null, "uk-constituencies", "uk-constituencies"), Bh = new Q(null, "selection-investment-stats", "selection-investment-stats"), Ch = new Q(null, "constituency", "constituency"), Dh = new Q(null, "boundaryline_id", "boundaryline_id"), Eh = new Q(null, "selection-investment-aggs-table-view", "selection-investment-aggs-table-view"), Fh = new Q(null, "react-key", "react-key"), Gh = new Q(null, "turnover-delta-val", 
"turnover-delta-val"), Hh = new Q(null, "total", "total"), Ih = new Q("om.core", "index", "om.core/index"), Jh = new Q(null, "icon", "icon"), Kh = new Q(null, "markers", "markers"), Lh = new Q(null, "fetch-boundaryline-fn", "fetch-boundaryline-fn"), Mh = new Q(null, "y", "y"), Nh = new Q(null, "chart", "chart"), Oh = new Q(null, "content", "content"), Ph = new Q(null, "key", "key"), Qh = new Q(null, "class", "class"), Rh = new Q(null, "x", "x"), Sh = new Q(null, "mean", "mean"), Th = new Q(null, 
"prefix", "prefix"), Uh = new Q(null, "selection-investments-table-view", "selection-investments-table-view"), Vh = new Q(null, "selector", "selector"), Wh = new Q(null, "portfolio-company", "portfolio-company"), Xh = new Q(null, "weight", "weight"), Yh = new Q(null, "portfolio_company_site_postcode", "portfolio_company_site_postcode"), Zh = new Q(null, "a", "a"), $h = new Q(null, "opacity", "opacity"), ai = new Q(null, "comm", "comm"), bi = new Q(null, "selection-investment-aggs", "selection-investment-aggs"), 
ci = new Q(null, "selection", "selection"), di = new Q(null, "leaflet-map", "leaflet-map"), Gg = new Q(null, "keywordize-keys", "keywordize-keys"), ei = new Q(null, "name", "name"), fi = new Q(null, "div.tbl", "div.tbl"), gi = new Q(null, "selected-idx", "selected-idx"), hi = new Q(null, "median", "median"), ii = new Q(null, "header", "header"), ji = new Q(null, "tolerance", "tolerance"), ki = new Q(null, "latest_turnover", "latest_turnover"), li = new Q(null, "iconAnchor", "iconAnchor"), mi = new Q(null, 
"color", "color"), ni = new Q(null, "fillOpacity", "fillOpacity"), oi = new Q(null, "pc-count", "pc-count"), pi = new Q(null, "y0-title", "y0-title"), bb = new Q(null, "flush-on-newline", "flush-on-newline"), qi = new Q(null, "click", "click"), ri = new Q(null, "count", "count"), si = new Q(null, "selection-portfolio-company-locations", "selection-portfolio-company-locations"), ti = new Q(null, "location", "location"), ui = new Q(null, "bounds", "bounds"), vi = new Q(null, "path-selections", "path-selections"), 
wi = new Q(null, "investor-companies", "investor-companies"), xi = new Q(null, "employee-count-delta", "employee-count-delta"), yi = new Q(null, "turnover-delta", "turnover-delta"), zi = new Q(null, "investor_company_count", "investor_company_count"), Ai = new Q(null, "catch-exception", "catch-exception"), Bi = new Q(null, "employee-count", "employee-count"), Ci = new Q(null, "pan-pending", "pan-pending"), Di = new Q(null, "?investor_company_name_na", "?investor_company_name_na"), Ei = new Q(null, 
"path-highlights", "path-highlights"), Fi = new Q(null, "continue-block", "continue-block"), Gi = new Q(null, "investor_company_uid", "investor_company_uid"), Hi = new Q(null, "investment_uid", "investment_uid"), Ii = new Q(null, "uk-constituencies-rtree", "uk-constituencies-rtree"), Ji = new Q(null, "properties", "properties"), Ki = new Q(null, "prev", "prev"), Li = new Q(null, "employee_count", "employee_count"), Mi = new Q(null, "clojure", "clojure"), Ni = new Q(null, "selection-investment-account-timelines", 
"selection-investment-account-timelines"), Oi = new Q(null, "constituencies", "constituencies"), Pi = new Q(null, "selection-investments", "selection-investments"), Qi = new Q(null, "div.box.box-last", "div.box.box-last"), Ri = new Q(null, "plus?", "plus?"), Si = new Q(null, "app-state", "app-state"), Ti = new Q(null, "curr", "curr"), Ui = new Q(null, "title", "title"), Vi = new Q(null, "constituency_count", "constituency_count"), Wi = new Q(null, "popupAnchor", "popupAnchor"), Xi = new Q(null, "accepts", 
"accepts"), Yi = new Q(null, "size", "size"), Zi = new Q(null, "span.prev", "span.prev"), $i = new Q(null, "route-select", "route-select"), aj = new Q(null, "?portfolio_company_site_postcode", "?portfolio_company_site_postcode"), bj = new Q(null, "fill", "fill"), cj = new Q(null, "div.tbl-row", "div.tbl-row"), dj = new Q(null, "min-zoom", "min-zoom"), ej = new Q(null, "investor_company_name", "investor_company_name"), fj = new Q(null, "onClick", "onClick"), gj = new Q(null, "?boundaryline_compact_name_na", 
"?boundaryline_compact_name_na"), hj = new Q(null, "paths", "paths"), ij = new Q(null, "div.grid", "div.grid"), jj = new Q(null, "i.icon-asc", "i.icon-asc"), kj = new Q(null, "dec", "dec"), lj = new Q(null, "h", "h"), mj = new Q(null, "latest_turnover_delta", "latest_turnover_delta"), fb = new Q(null, "print-length", "print-length"), nj = new Q(null, "categories", "categories"), oj = new Q(null, "ic-count", "ic-count"), pj = new Q(null, "all-investment-stats", "all-investment-stats"), qj = new Q(null, 
"turnover", "turnover"), rj = new Q(null, "search-results", "search-results"), sj = new Q(null, "uid", "uid"), vj = new Q(null, "type", "type"), wj = new Q(null, "all-portfolio-company-site-stats", "all-portfolio-company-site-stats"), xj = new Q(null, "textarea", "textarea"), yj = new Q(null, "yAxis", "yAxis"), zj = new Q(null, "small", "small"), s = new Q(null, "else", "else"), Aj = new Q(null, "htmlFor", "htmlFor"), Bj = new Q("cljs.core", "not-found", "cljs.core/not-found"), Cj = new Q(null, "route-change-view", 
"route-change-view"), cb = new Q(null, "readably", "readably"), Dj = new Q(null, "converters", "converters"), Ej = new Q(null, "xAxis", "xAxis"), Fj = new Q(null, "sf", "sf"), Gj = new Q(null, "zoom", "zoom"), Hj = new Q(null, "highlighted", "highlighted"), Ij = new Q(null, "web_url", "web_url"), tg = new Q(null, "validator", "validator"), db = new Q(null, "meta", "meta"), Jj = new Q(null, "min", "min"), Kj = new Q(null, "stats", "stats"), Lj = new Q(null, "latest_employee_count", "latest_employee_count"), 
Mj = new Q(null, "averages", "averages"), Nj = new Q(null, "w", "w"), Oj = new Q(null, "opts", "opts"), Pj = new Q(null, "update-selection-investment-aggs-table-view", "update-selection-investment-aggs-table-view"), Qj = new Q(null, "i.icon-desc", "i.icon-desc"), Rj = new Q(null, "series", "series"), Sj = new Q(null, "turnover_delta", "turnover_delta"), Tj = new Q(null, "input", "input"), Uj = new Q(null, "employee_count_delta", "employee_count_delta"), Vj = new Q(null, "div.tbl-cell", "div.tbl-cell"), 
Wj = new Q(null, "for", "for"), Xj = new Q(null, "order", "order"), Yj = new Q(null, "mp", "mp"), Zj = new Q(null, "y1-title", "y1-title"), ak = new Q(null, "investor_companies", "investor_companies"), bk = new Q(null, "className", "className"), ck = new Q(null, "investor-company", "investor-company"), dk = new Q(null, "leaflet-path", "leaflet-path"), ek = new Q(null, "div.tbl-cell.charts", "div.tbl-cell.charts"), fk = new Q(null, "change-view", "change-view"), gk = new Q(null, "fn", "fn"), hk = 
new Q(null, "id", "id"), ik = new Q(null, "asc", "asc"), jk = new Q(null, "value", "value"), kk = new Q(null, "selected", "selected"), lk = new Q(null, "select", "select"), mk = new Q(null, "description", "description"), nk = new Q(null, "height", "height"), ok = new Q(null, "compact_name", "compact_name"), pk = new Q(null, "portfolio_company_no", "portfolio_company_no"), qk = new Q(null, "iconSize", "iconSize"), rk = new Q(null, "tag", "tag"), sk = new Q(null, "i.icon-arrow-left", "i.icon-arrow-left"), 
tk = new Q(null, "li", "li"), uk = new Q(null, "benchmark", "benchmark"), vk = new Q(null, "contents", "contents"), wk = new Q(null, "path-fn", "path-fn"), xk = new Q(null, "rotation", "rotation"), yk = new Q(null, "political_party", "political_party"), zk = new Q(null, "portfolio_company_name", "portfolio_company_name"), Ak = new Q(null, "portfolio_companies", "portfolio_companies");
function Bk(a, b, c) {
  a = a.search(Cg(new n(null, 4, [Rh, b, Mh, c, Nj, 0, lj, 0], null)));
  return ve(function(a) {
    return gju.Qi(Cg(new n(null, 2, [vj, "Point", sh, new R(null, 2, 5, S, [b, c], null)], null)), a.vi);
  }, a);
}
;function Ck() {
  0 != Dk && (Ek[la(this)] = this);
}
var Dk = 0, Ek = {};
Ck.prototype.Ee = !1;
Ck.prototype.dc = function() {
  if (!this.Ee && (this.Ee = !0, this.Da(), 0 != Dk)) {
    var a = la(this);
    delete Ek[a];
  }
};
Ck.prototype.Da = function() {
  if (this.oc) {
    for (;this.oc.length;) {
      this.oc.shift()();
    }
  }
};
function Fk(a) {
  a && "function" == typeof a.dc && a.dc();
}
;var Gk, Hk, Ik, Jk;
function Kk() {
  return da.navigator ? da.navigator.userAgent : null;
}
Jk = Ik = Hk = Gk = !1;
var Lk;
if (Lk = Kk()) {
  var Mk = da.navigator;
  Gk = 0 == Lk.indexOf("Opera");
  Hk = !Gk && -1 != Lk.indexOf("MSIE");
  Ik = !Gk && -1 != Lk.indexOf("WebKit");
  Jk = !Gk && !Ik && "Gecko" == Mk.product;
}
var Nk = Gk, Ok = Hk, Pk = Jk, Qk = Ik;
function Rk() {
  var a = da.document;
  return a ? a.documentMode : void 0;
}
var Sk;
a: {
  var Tk = "", Uk;
  if (Nk && da.opera) {
    var Vk = da.opera.version, Tk = "function" == typeof Vk ? Vk() : Vk
  } else {
    if (Pk ? Uk = /rv\:([^\);]+)(\)|;)/ : Ok ? Uk = /MSIE\s+([^\);]+)(\)|;)/ : Qk && (Uk = /WebKit\/(\S+)/), Uk) {
      var Wk = Uk.exec(Kk()), Tk = Wk ? Wk[1] : ""
    }
  }
  if (Ok) {
    var Xk = Rk();
    if (Xk > parseFloat(Tk)) {
      Sk = String(Xk);
      break a;
    }
  }
  Sk = Tk;
}
var Yk = {};
function Zk(a) {
  var b;
  if (!(b = Yk[a])) {
    b = 0;
    for (var c = va(String(Sk)).split("."), d = va(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var t = l.exec(g) || ["", "", ""], x = p.exec(k) || ["", "", ""];
        if (0 == t[0].length && 0 == x[0].length) {
          break;
        }
        b = ((0 == t[1].length ? 0 : parseInt(t[1], 10)) < (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? -1 : (0 == t[1].length ? 0 : parseInt(t[1], 10)) > (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? 1 : 0) || ((0 == t[2].length) < (0 == x[2].length) ? -1 : (0 == t[2].length) > (0 == x[2].length) ? 1 : 0) || (t[2] < x[2] ? -1 : t[2] > x[2] ? 1 : 0);
      } while (0 == b);
    }
    b = Yk[a] = 0 <= b;
  }
  return b;
}
var $k = da.document, al = $k && Ok ? Rk() || ("CSS1Compat" == $k.compatMode ? parseInt(Sk, 10) : 5) : void 0;
var bl = !Ok || Ok && 9 <= al, cl = Ok && !Zk("9");
!Qk || Zk("528");
Pk && Zk("1.9b") || Ok && Zk("8") || Nk && Zk("9.5") || Qk && Zk("528");
Pk && !Zk("8") || Ok && Zk("9");
function dl(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
}
h = dl.prototype;
h.Da = function() {
};
h.dc = function() {
};
h.Xb = !1;
h.defaultPrevented = !1;
h.Zc = !0;
h.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Zc = !1;
};
function el(a) {
  el[" "](a);
  return a;
}
el[" "] = ga;
function fl(a, b) {
  a && this.Kc(a, b);
}
ta(fl, dl);
h = fl.prototype;
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
h.Jd = null;
h.Kc = function(a, b) {
  var c = this.type = a.type;
  dl.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (Pk) {
      var e;
      a: {
        try {
          el(d.nodeName);
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
  this.offsetX = Qk || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Qk || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  this.Jd = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Xb;
};
h.preventDefault = function() {
  fl.Fb.preventDefault.call(this);
  var a = this.Jd;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, cl) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
h.Da = function() {
};
var gl = 0;
function hl() {
}
h = hl.prototype;
h.key = 0;
h.Db = !1;
h.uc = !1;
h.Kc = function(a, b, c, d, e, f) {
  if (ja(a)) {
    this.Ne = !0;
  } else {
    if (a && a.handleEvent && ja(a.handleEvent)) {
      this.Ne = !1;
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.nb = a;
  this.Ye = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Sb = f;
  this.uc = !1;
  this.key = ++gl;
  this.Db = !1;
};
h.handleEvent = function(a) {
  return this.Ne ? this.nb.call(this.Sb || this.src, a) : this.nb.handleEvent.call(this.nb, a);
};
var il = {}, jl = {}, kl = {}, ll = {};
function ml(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      ml(a, b[f], c, d, e);
    }
    return null;
  }
  a = nl(a, b, c, !1, d, e);
  b = a.key;
  il[b] = a;
  return b;
}
function nl(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var g = jl;
  b in g || (g[b] = {Ca:0, La:0});
  g = g[b];
  e in g || (g[e] = {Ca:0, La:0}, g.Ca++);
  var g = g[e], k = la(a), l;
  g.La++;
  if (g[k]) {
    l = g[k];
    for (var p = 0;p < l.length;p++) {
      if (g = l[p], g.nb == c && g.Sb == f) {
        if (g.Db) {
          break;
        }
        d || (l[p].uc = !1);
        return l[p];
      }
    }
  } else {
    l = g[k] = [], g.Ca++;
  }
  p = ol();
  g = new hl;
  g.Kc(c, p, a, b, e, f);
  g.uc = d;
  p.src = a;
  p.nb = g;
  l.push(g);
  kl[k] || (kl[k] = []);
  kl[k].push(g);
  a.addEventListener ? a != da && a.De || a.addEventListener(b, p, e) : a.attachEvent(b in ll ? ll[b] : ll[b] = "on" + b, p);
  return g;
}
function ol() {
  var a = pl, b = bl ? function(c) {
    return a.call(b.src, b.nb, c);
  } : function(c) {
    c = a.call(b.src, b.nb, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function ql(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      ql(a, b[f], c, d, e);
    }
    return null;
  }
  a = nl(a, b, c, !0, d, e);
  b = a.key;
  il[b] = a;
  return b;
}
function rl(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      rl(a, b[f], c, d, e);
    }
  } else {
    d = !!d;
    a: {
      f = jl;
      if (b in f && (f = f[b], d in f && (f = f[d], a = la(a), f[a]))) {
        a = f[a];
        break a;
      }
      a = null;
    }
    if (a) {
      for (f = 0;f < a.length;f++) {
        if (a[f].nb == c && a[f].capture == d && a[f].Sb == e) {
          sl(a[f].key);
          break;
        }
      }
    }
  }
}
function sl(a) {
  var b = il[a];
  if (!b || b.Db) {
    return!1;
  }
  var c = b.src, d = b.type, e = b.Ye, f = b.capture;
  c.removeEventListener ? c != da && c.De || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in ll ? ll[d] : ll[d] = "on" + d, e);
  c = la(c);
  kl[c] && (e = kl[c], Ma(e, b), 0 == e.length && delete kl[c]);
  b.Db = !0;
  if (b = jl[d][f][c]) {
    b.Qe = !0, tl(d, f, c, b);
  }
  delete il[a];
  return!0;
}
function tl(a, b, c, d) {
  if (!d.Nc && d.Qe) {
    for (var e = 0, f = 0;e < d.length;e++) {
      d[e].Db ? d[e].Ye.src = null : (e != f && (d[f] = d[e]), f++);
    }
    d.length = f;
    d.Qe = !1;
    0 == f && (delete jl[a][b][c], jl[a][b].Ca--, 0 == jl[a][b].Ca && (delete jl[a][b], jl[a].Ca--), 0 == jl[a].Ca && delete jl[a]);
  }
}
function ul(a) {
  var b = 0;
  if (null != a) {
    if (a = la(a), kl[a]) {
      a = kl[a];
      for (var c = a.length - 1;0 <= c;c--) {
        sl(a[c].key), b++;
      }
    }
  } else {
    Sa(il, function(a, c) {
      sl(c);
      b++;
    });
  }
}
function vl(a, b, c, d, e) {
  var f = 1;
  b = la(b);
  if (a[b]) {
    var g = --a.La, k = a[b];
    k.Nc ? k.Nc++ : k.Nc = 1;
    try {
      for (var l = k.length, p = 0;p < l;p++) {
        var t = k[p];
        t && !t.Db && (f &= !1 !== wl(t, e));
      }
    } finally {
      a.La = Math.max(g, a.La), k.Nc--, tl(c, d, b, k);
    }
  }
  return Boolean(f);
}
function wl(a, b) {
  a.uc && sl(a.key);
  return a.handleEvent(b);
}
function pl(a, b) {
  if (a.Db) {
    return!0;
  }
  var c = a.type, d = jl;
  if (!(c in d)) {
    return!0;
  }
  var d = d[c], e, f;
  if (!bl) {
    e = b || fa("window.event");
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
    l = new fl;
    l.Kc(e, this);
    e = !0;
    try {
      if (g) {
        for (var t = [], x = l.currentTarget;x;x = x.parentNode) {
          t.push(x);
        }
        f = d[!0];
        f.La = f.Ca;
        for (var D = t.length - 1;!l.Xb && 0 <= D && f.La;D--) {
          l.currentTarget = t[D], e &= vl(f, t[D], c, !0, l);
        }
        if (k) {
          for (f = d[!1], f.La = f.Ca, D = 0;!l.Xb && D < t.length && f.La;D++) {
            l.currentTarget = t[D], e &= vl(f, t[D], c, !1, l);
          }
        }
      } else {
        e = wl(a, l);
      }
    } finally {
      t && (t.length = 0);
    }
    return e;
  }
  c = new fl(b, this);
  return e = wl(a, c);
}
;function xl() {
  Ck.call(this);
}
ta(xl, Ck);
h = xl.prototype;
h.De = !0;
h.ae = null;
h.addEventListener = function(a, b, c, d) {
  ml(this, a, b, c, d);
};
h.removeEventListener = function(a, b, c, d) {
  rl(this, a, b, c, d);
};
h.dispatchEvent = function(a) {
  var b = a.type || a, c = jl;
  if (b in c) {
    if (ia(a)) {
      a = new dl(a, this);
    } else {
      if (a instanceof dl) {
        a.target = a.target || this;
      } else {
        var d = a;
        a = new dl(b, this);
        Wa(a, d);
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if (b) {
      e = [];
      for (f = this;f;f = f.ae) {
        e.push(f);
      }
      f = c[!0];
      f.La = f.Ca;
      for (var g = e.length - 1;!a.Xb && 0 <= g && f.La;g--) {
        a.currentTarget = e[g], d &= vl(f, e[g], a.type, !0, a) && !1 != a.Zc;
      }
    }
    if (!1 in c) {
      if (f = c[!1], f.La = f.Ca, b) {
        for (g = 0;!a.Xb && g < e.length && f.La;g++) {
          a.currentTarget = e[g], d &= vl(f, e[g], a.type, !1, a) && !1 != a.Zc;
        }
      } else {
        for (e = this;!a.Xb && e && f.La;e = e.ae) {
          a.currentTarget = e, d &= vl(f, e, a.type, !1, a) && !1 != a.Zc;
        }
      }
    }
    a = Boolean(d);
  } else {
    a = !0;
  }
  return a;
};
h.Da = function() {
  xl.Fb.Da.call(this);
  ul(this);
  this.ae = null;
};
function yl(a, b) {
  Ck.call(this);
  this.jc = a || 1;
  this.rc = b || da;
  this.fd = qa(this.rh, this);
  this.Rd = sa();
}
ta(yl, xl);
h = yl.prototype;
h.enabled = !1;
h.na = null;
h.setInterval = function(a) {
  this.jc = a;
  this.na && this.enabled ? (this.stop(), this.start()) : this.na && this.stop();
};
h.rh = function() {
  if (this.enabled) {
    var a = sa() - this.Rd;
    0 < a && a < 0.8 * this.jc ? this.na = this.rc.setTimeout(this.fd, this.jc - a) : (this.dispatchEvent(zl), this.enabled && (this.na = this.rc.setTimeout(this.fd, this.jc), this.Rd = sa()));
  }
};
h.start = function() {
  this.enabled = !0;
  this.na || (this.na = this.rc.setTimeout(this.fd, this.jc), this.Rd = sa());
};
h.stop = function() {
  this.enabled = !1;
  this.na && (this.rc.clearTimeout(this.na), this.na = null);
};
h.Da = function() {
  yl.Fb.Da.call(this);
  this.stop();
  delete this.rc;
};
var zl = "tick";
function Al(a) {
  if ("function" == typeof a.Hc) {
    return a.Hc();
  }
  if (ia(a)) {
    return a.split("");
  }
  if (ha(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Ta(a);
}
function Bl(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ha(a) || ia(a)) {
      Ja(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.Ld) {
        d = a.Ld();
      } else {
        if ("function" != typeof a.Hc) {
          if (ha(a) || ia(a)) {
            d = [];
            for (var e = a.length, f = 0;f < e;f++) {
              d.push(f);
            }
          } else {
            d = Ua(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var e = Al(a), f = e.length, g = 0;g < f;g++) {
        b.call(c, e[g], d && d[g], a);
      }
    }
  }
}
;function Cl(a, b) {
  this.Bb = {};
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
      a instanceof Cl ? (c = a.Ld(), d = a.Hc()) : (c = Ua(a), d = Ta(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
h = Cl.prototype;
h.Ca = 0;
h.Hc = function() {
  Dl(this);
  for (var a = [], b = 0;b < this.da.length;b++) {
    a.push(this.Bb[this.da[b]]);
  }
  return a;
};
h.Ld = function() {
  Dl(this);
  return this.da.concat();
};
h.Gf = function() {
  return Object.prototype.hasOwnProperty.call(this.Bb, "Content-Type");
};
function Dl(a) {
  if (a.Ca != a.da.length) {
    for (var b = 0, c = 0;b < a.da.length;) {
      var d = a.da[b];
      Object.prototype.hasOwnProperty.call(a.Bb, d) && (a.da[c++] = d);
      b++;
    }
    a.da.length = c;
  }
  if (a.Ca != a.da.length) {
    for (var e = {}, c = b = 0;b < a.da.length;) {
      d = a.da[b], Object.prototype.hasOwnProperty.call(e, d) || (a.da[c++] = d, e[d] = 1), b++;
    }
    a.da.length = c;
  }
}
h.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.Bb, a) ? this.Bb[a] : b;
};
h.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.Bb, a) || (this.Ca++, this.da.push(a));
  this.Bb[a] = b;
};
h.Bf = function() {
  return new Cl(this);
};
function El(a) {
  return Fl(a || arguments.callee.caller, []);
}
function Fl(a, b) {
  var c = [];
  if (La(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(Gl(a) + "(");
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
            f = (f = Gl(f)) ? f : "[fn]";
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
        c.push(Fl(a.caller, b));
      } catch (g) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function Gl(a) {
  if (Hl[a]) {
    return Hl[a];
  }
  a = String(a);
  if (!Hl[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Hl[a] = b ? b[1] : "[Anonymous]";
  }
  return Hl[a];
}
var Hl = {};
function Il(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
Il.prototype.He = null;
Il.prototype.Ge = null;
var Jl = 0;
Il.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Jl++;
  d || sa();
  this.lc = a;
  this.Hg = b;
  delete this.He;
  delete this.Ge;
};
Il.prototype.af = function(a) {
  this.lc = a;
};
function Kl(a) {
  this.Ig = a;
}
Kl.prototype.Uc = null;
Kl.prototype.lc = null;
Kl.prototype.gd = null;
Kl.prototype.Je = null;
function Ll(a, b) {
  this.name = a;
  this.value = b;
}
Ll.prototype.toString = function() {
  return this.name;
};
var Ml = new Ll("SEVERE", 1E3), Nl = new Ll("WARNING", 900), Ol = new Ll("INFO", 800), Pl = new Ll("CONFIG", 700), Ql = new Ll("FINE", 500), Rl = new Ll("FINEST", 300);
h = Kl.prototype;
h.getParent = function() {
  return this.Uc;
};
h.Ie = function() {
  this.gd || (this.gd = {});
  return this.gd;
};
h.af = function(a) {
  this.lc = a;
};
function Sl(a) {
  if (a.lc) {
    return a.lc;
  }
  if (a.Uc) {
    return Sl(a.Uc);
  }
  Fa("Root logger has no level set.");
  return null;
}
h.log = function(a, b, c) {
  if (a.value >= Sl(this).value) {
    for (a = this.Kf(a, b, c), b = "log:" + a.Hg, da.console && (da.console.timeStamp ? da.console.timeStamp(b) : da.console.markTimeline && da.console.markTimeline(b)), da.msWriteProfilerMark && da.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if (c.Je) {
        for (var e = 0, f = void 0;f = c.Je[e];e++) {
          f(d);
        }
      }
      b = b.getParent();
    }
  }
};
h.Kf = function(a, b, c) {
  var d = new Il(a, String(b), this.Ig);
  if (c) {
    d.He = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var g;
      var k = fa("window.location.href");
      if (ia(c)) {
        g = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"};
      } else {
        var l, p, t = !1;
        try {
          l = c.lineNumber || c.Di || "Not available";
        } catch (x) {
          l = "Not available", t = !0;
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || da.$googDebugFname || k;
        } catch (D) {
          p = "Not available", t = !0;
        }
        g = !t && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:l, fileName:p, stack:c.stack || "Not available"};
      }
      e = "Message: " + wa(g.message) + '\nUrl: \x3ca href\x3d"view-source:' + g.fileName + '" target\x3d"_new"\x3e' + g.fileName + "\x3c/a\x3e\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + wa(g.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + wa(El(f) + "-\x3e ");
    } catch (M) {
      e = "Exception trying to expose exception! You win, we lose. " + M;
    }
    d.Ge = e;
  }
  return d;
};
h.info = function(a, b) {
  this.log(Ol, a, b);
};
function Tl(a, b) {
  a.log(Ql, b, void 0);
}
var Ul = {}, Vl = null;
function Wl(a) {
  Vl || (Vl = new Kl(""), Ul[""] = Vl, Vl.af(Pl));
  var b;
  if (!(b = Ul[a])) {
    b = new Kl(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Wl(a.substr(0, c));
    c.Ie()[d] = b;
    b.Uc = c;
    Ul[a] = b;
  }
  return b;
}
;function Xl() {
}
Xl.prototype.je = null;
function Yl(a) {
  var b;
  (b = a.je) || (b = {}, Zl(a) && (b[0] = !0, b[1] = !0), b = a.je = b);
  return b;
}
;var $l;
function am() {
}
ta(am, Xl);
function bm(a) {
  return(a = Zl(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function Zl(a) {
  if (!a.Ke && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Ke = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.Ke;
}
$l = new am;
var cm = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function dm(a) {
  Ck.call(this);
  this.headers = new Cl;
  this.dd = a || null;
}
ta(dm, xl);
dm.prototype.Oa = Wl("goog.net.XhrIo");
var em = /^https?$/i, hm = [];
function im(a, b) {
  var c = new dm;
  hm.push(c);
  b && ml(c, "complete", b);
  ml(c, "ready", ra(jm, c));
  c.send(a, void 0, void 0, void 0);
}
function jm(a) {
  a.dc();
  Ma(hm, a);
}
h = dm.prototype;
h.ib = !1;
h.U = null;
h.cd = null;
h.Mc = "";
h.Oe = "";
h.kc = "";
h.Id = !1;
h.Jc = !1;
h.Qd = !1;
h.zb = !1;
h.qc = 0;
h.Gb = null;
h.Ze = "";
h.yh = !1;
h.send = function(a, b, c, d) {
  if (this.U) {
    throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.Mc + "; newUri\x3d" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.Mc = a;
  this.kc = "";
  this.Oe = b;
  this.Id = !1;
  this.ib = !0;
  this.U = this.dd ? bm(this.dd) : bm($l);
  this.cd = this.dd ? Yl(this.dd) : Yl($l);
  this.U.onreadystatechange = qa(this.We, this);
  try {
    Tl(this.Oa, km(this, "Opening Xhr")), this.Qd = !0, this.U.open(b, a, !0), this.Qd = !1;
  } catch (e) {
    Tl(this.Oa, km(this, "Error opening Xhr: " + e.message));
    lm(this, e);
    return;
  }
  a = c || "";
  var f = this.headers.Bf();
  d && Bl(d, function(a, b) {
    f.set(b, a);
  });
  d = da.FormData && a instanceof da.FormData;
  "POST" != b || f.Gf() || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  Bl(f, function(a, b) {
    this.U.setRequestHeader(b, a);
  }, this);
  this.Ze && (this.U.responseType = this.Ze);
  "withCredentials" in this.U && (this.U.withCredentials = this.yh);
  try {
    this.Gb && (da.clearTimeout(this.Gb), this.Gb = null), 0 < this.qc && (Tl(this.Oa, km(this, "Will abort after " + this.qc + "ms if incomplete")), this.Gb = da.setTimeout(qa(this.th, this), this.qc)), Tl(this.Oa, km(this, "Sending request")), this.Jc = !0, this.U.send(a), this.Jc = !1;
  } catch (g) {
    Tl(this.Oa, km(this, "Send error: " + g.message)), lm(this, g);
  }
};
h.th = function() {
  "undefined" != typeof ca && this.U && (this.kc = "Timed out after " + this.qc + "ms, aborting", Tl(this.Oa, km(this, this.kc)), this.dispatchEvent("timeout"), this.abort(8));
};
function lm(a, b) {
  a.ib = !1;
  a.U && (a.zb = !0, a.U.abort(), a.zb = !1);
  a.kc = b;
  mm(a);
  nm(a);
}
function mm(a) {
  a.Id || (a.Id = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
h.abort = function() {
  this.U && this.ib && (Tl(this.Oa, km(this, "Aborting")), this.ib = !1, this.zb = !0, this.U.abort(), this.zb = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), nm(this));
};
h.Da = function() {
  this.U && (this.ib && (this.ib = !1, this.zb = !0, this.U.abort(), this.zb = !1), nm(this, !0));
  dm.Fb.Da.call(this);
};
h.We = function() {
  this.Qd || this.Jc || this.zb ? om(this) : this.Tg();
};
h.Tg = function() {
  om(this);
};
function om(a) {
  if (a.ib && "undefined" != typeof ca) {
    if (a.cd[1] && 4 == pm(a) && 2 == qm(a)) {
      Tl(a.Oa, km(a, "Local request error detected and ignored"));
    } else {
      if (a.Jc && 4 == pm(a)) {
        da.setTimeout(qa(a.We, a), 0);
      } else {
        if (a.dispatchEvent("readystatechange"), 4 == pm(a)) {
          Tl(a.Oa, km(a, "Request complete"));
          a.ib = !1;
          try {
            var b = qm(a), c, d;
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
                var f = String(a.Mc).match(cm)[1] || null;
                if (!f && self.location) {
                  var g = self.location.protocol, f = g.substr(0, g.length - 1)
                }
                e = !em.test(f ? f.toLowerCase() : "");
              }
              c = e;
            }
            if (c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success");
            } else {
              var k;
              try {
                k = 2 < pm(a) ? a.U.statusText : "";
              } catch (l) {
                Tl(a.Oa, "Can not get status: " + l.message), k = "";
              }
              a.kc = k + " [" + qm(a) + "]";
              mm(a);
            }
          } finally {
            nm(a);
          }
        }
      }
    }
  }
}
function nm(a, b) {
  if (a.U) {
    var c = a.U, d = a.cd[0] ? ga : null;
    a.U = null;
    a.cd = null;
    a.Gb && (da.clearTimeout(a.Gb), a.Gb = null);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
      a.Oa.log(Ml, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
    }
  }
}
function pm(a) {
  return a.U ? a.U.readyState : 0;
}
function qm(a) {
  try {
    return 2 < pm(a) ? a.U.status : -1;
  } catch (b) {
    return a.Oa.log(Nl, "Can not get status: " + b.message, void 0), -1;
  }
}
function rm(a) {
  try {
    return a.U ? a.U.responseText : "";
  } catch (b) {
    return Tl(a.Oa, "Can not get responseText: " + b.message), "";
  }
}
function km(a, b) {
  return b + " [" + a.Oe + " " + a.Mc + " " + qm(a) + "]";
}
;var sm, tm = !Pk && !Ok || Ok && Ok && 9 <= al || Pk && Zk("1.9.1");
Ok && Zk("9");
function um(a) {
  a = a.className;
  return ia(a) && a.match(/\S+/g) || [];
}
function vm(a, b) {
  for (var c = um(a), d = Oa(arguments, 1), e = c, f = 0;f < d.length;f++) {
    La(e, d[f]) || e.push(d[f]);
  }
  a.className = c.join(" ");
}
function wm(a, b) {
  var c = um(a), d = Oa(arguments, 1), c = xm(c, d);
  a.className = c.join(" ");
}
function xm(a, b) {
  return Ka(a, function(a) {
    return!La(b, a);
  });
}
function ym(a) {
  La(um(a), "open") ? wm(a, "open") : vm(a, "open");
}
;function zm() {
  var a = document;
  return a.querySelectorAll && a.querySelector ? a.querySelectorAll("HTML") : a.getElementsByTagName("HTML");
}
function Am(a, b, c) {
  function d(c) {
    c && b.appendChild(ia(c) ? a.createTextNode(c) : c);
  }
  for (var e = 1;e < c.length;e++) {
    var f = c[e];
    !ha(f) || ka(f) && 0 < f.nodeType ? d(f) : Ja(Bm(f) ? Na(f) : f, d);
  }
}
function Cm(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Bm(a) {
  if (a && "number" == typeof a.length) {
    if (ka(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ja(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
function Dm(a) {
  this.Fd = a || da.document || document;
}
h = Dm.prototype;
h.createElement = function(a) {
  return this.Fd.createElement(a);
};
h.createTextNode = function(a) {
  return this.Fd.createTextNode(String(a));
};
h.appendChild = function(a, b) {
  a.appendChild(b);
};
h.append = function(a, b) {
  Am(Cm(a), a, arguments);
};
h.Ie = function(a) {
  return tm && void 0 != a.children ? a.children : Ka(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
};
function Em(a, b, c) {
  if ("string" === typeof b) {
    return a.replace(RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c);
  }
  if (q(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), c);
  }
  if (s) {
    throw[v("Invalid match arg: "), v(b)].join("");
  }
  return null;
}
var Fm = function() {
  function a(a, b) {
    return K.a(v, qe(a, b));
  }
  function b(a) {
    return K.a(v, a);
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
function Gm(a) {
  return a.toUpperCase();
}
function Hm(a) {
  return a.toLowerCase();
}
function Im(a) {
  return 2 > H(a) ? Gm(a) : [v(Gm(Ad.c(a, 0, 1))), v(Hm(Ad.a(a, 1)))].join("");
}
function Jm(a, b) {
  if (0 >= b || b >= 2 + H(a)) {
    return Wc.a(Ze(G("", ie.a(v, A(a)))), "");
  }
  if (q(y.a ? y.a(1, b) : y.call(null, 1, b))) {
    return new R(null, 1, 5, S, [a], null);
  }
  if (q(y.a ? y.a(2, b) : y.call(null, 2, b))) {
    return new R(null, 2, 5, S, ["", a], null);
  }
  var c = b - 2;
  return Wc.a(Ze(G("", bf.c(Ze(ie.a(v, A(a))), 0, c))), Ad.a(a, c));
}
var Km = function() {
  function a(a, b, c) {
    if (y.a("" + v(b), "/(?:)/")) {
      b = Jm(a, c);
    } else {
      if (1 > c) {
        b = Ze(("" + v(a)).split(b));
      } else {
        a: {
          for (var g = c, k = We;;) {
            if (y.a(g, 1)) {
              b = Wc.a(k, a);
              break a;
            }
            var l = gg(b, a);
            if (q(l)) {
              var p = l, l = a.indexOf(p), p = a.substring(l + H(p)), g = g - 1, k = Wc.a(k, a.substring(0, l));
              a = p;
            } else {
              b = Wc.a(k, a);
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
          if (y.a("", null == c ? null : Qb(c))) {
            c = null == c ? null : Rb(c);
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
function Lm(a) {
  for (var b = Mm, c = new Xa, d = a.length, e = 0;;) {
    if (y.a(d, e)) {
      return c.toString();
    }
    var f = a.charAt(e), g = J.a(b, f);
    q(g) ? c.append("" + v(g)) : c.append(f);
    e += 1;
  }
}
;function Nm(a, b) {
  var c = K.c(Zf, a, b);
  return G(c, we(function(a) {
    return c === a;
  }, b));
}
var Om = function() {
  function a(a, b) {
    return H(a) < H(b) ? nb.c(Wc, b, a) : nb.c(Wc, a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = Nm(H, Wc.e(d, c, F([a], 0)));
      return nb.c(ze, B(a), C(a));
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
  b.p = function() {
    return Vf;
  };
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}(), Pm = function() {
  function a(a, b) {
    for (;;) {
      if (H(b) < H(a)) {
        var c = a;
        a = b;
        b = c;
      } else {
        return nb.c(function(a, b) {
          return function(a, c) {
            return qd(b, c) ? a : dd.a(a, c);
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
      a = Nm(function(a) {
        return-H(a);
      }, Wc.e(e, d, F([a], 0)));
      return nb.c(b, B(a), C(a));
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
}(), Qm = function() {
  function a(a, b) {
    return H(a) < H(b) ? nb.c(function(a, c) {
      return qd(b, c) ? dd.a(a, c) : a;
    }, a, a) : nb.c(dd, a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return nb.c(b, a, Wc.a(e, d));
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
function Rm(a, b) {
  return nb.c(function(a, b) {
    var e = I.c(b, 0, null), f = I.c(b, 1, null);
    return be.a(e, f) && qd(a, e) ? $c.a(Zc.c(a, f, J.a(a, e)), e) : a;
  }, a, b);
}
;var Sm = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function Tm(a) {
  if (q(a)) {
    var b = Km.a(Kd(a), /-/), c = I.c(b, 0, null), b = zd(b);
    return gd(b) || y.a("aria", c) || y.a("data", c) ? a : Ld.b(Fm.b(Wc.a(ie.a(Im, b), c)));
  }
  return null;
}
function Um(a) {
  return nb.c(function(a, c) {
    var d = J.a(a, c);
    return q(d) ? a : $c.a(a, c);
  }, a, Pf(a));
}
var Vm = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Ze(we(hb, te.a(function(a) {
      return(a ? a.g & 33554432 || a.li || (a.g ? 0 : r(fc, a)) : r(fc, a)) ? new R(null, 1, 5, S, [a], null) : jd(a) ? a : s ? new R(null, 1, 5, S, [a], null) : null;
    }, ie.a(Qh, a))));
    a = K.a(Sf, a);
    return gd(b) ? a : Zc.c(a, Qh, b);
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function W(a) {
  if (a ? a.Eb : a) {
    return a.Eb(a);
  }
  var b;
  b = W[m(null == a ? null : a)];
  if (!b && (b = W._, !b)) {
    throw u("IInterpreter.interpret", a);
  }
  return b.call(null, a);
}
function Wm(a) {
  return React.Ce({render:function() {
    return this.wh(a.b ? a.b({children:this.Ka.children, onChange:this.onChange, value:this.state.value}) : a.call(null, {children:this.Ka.children, onChange:this.onChange, value:this.state.value}));
  }, componentWillReceiveProps:function(a) {
    return this.ee({value:a.value});
  }, onChange:function(a) {
    var c = this.Ka.onChange;
    if (null == c) {
      return null;
    }
    c.b ? c.b(a) : c.call(null, a);
    return this.ee({value:a.target.value});
  }, getInitialState:function() {
    return{value:this.Ka.value};
  }});
}
var Xm = Wm(React.d.input), Ym = Wm(React.d.qh);
function X(a) {
  var b = Cg, c = Sf.e(F([Yf(Pf(a), ie.a(Tm, Pf(a))), new n(null, 2, [Qh, bk, Wj, Aj], null)], 0));
  a = Rm(a, c);
  b = b(a);
  a = Fm.a(" ", ye(A(b.className)));
  ib(/^[\s\xa0]*$/.test(null == a ? "" : String(a))) && (b.className = a);
  return b;
}
function Zm(a) {
  return pb.b(ie.a(W, a));
}
W["null"] = function() {
  return null;
};
W._ = function(a) {
  return a;
};
R.prototype.Eb = function() {
  var a, b = I.c(this, 0, null), c = zd(this);
  if (!(b instanceof Q || b instanceof Bc || "string" === typeof b)) {
    throw Kg.a([v(b), v(" is not a valid element name.")].join(""), new n(null, 2, [rk, b, Oh, c], null));
  }
  var d = fg(Sm, Kd(b));
  I.c(d, 0, null);
  b = I.c(d, 1, null);
  a = I.c(d, 2, null);
  d = I.c(d, 3, null);
  a = Um(new n(null, 2, [hk, a, Qh, q(d) ? Km.a(d, /\./) : null], null));
  d = B(c);
  a = O(d) ? new R(null, 3, 5, S, [b, Vm.e(F([a, d], 0)), E(c)], null) : new R(null, 3, 5, S, [b, a, c], null);
  b = I.c(a, 0, null);
  c = I.c(a, 1, null);
  a = I.c(a, 2, null);
  d = React.d[Kd(b)];
  if (q(d)) {
    b = J.c(new n(null, 2, [Tj, Xm, xj, Ym], null), Ld.b(b), d);
  } else {
    throw Kg.a([v("Unsupported HTML tag: "), v(Kd(b))].join(""), new n(null, 1, [rk, b], null));
  }
  return b.call(null, X(c), id(a) && "string" === typeof B(a) && gd(C(a)) ? W(B(a)) : q(a) ? W(a) : null);
};
Gc.prototype.Eb = function() {
  return Zm(this);
};
Ed.prototype.Eb = function() {
  return Zm(this);
};
Md.prototype.Eb = function() {
  return Zm(this);
};
af.prototype.Eb = function() {
  return Zm(this);
};
Id.prototype.Eb = function() {
  return Zm(this);
};
function $m(a) {
  React.Ce({render:function() {
    return this.wh(a.b ? a.b({children:this.Ka.children, onChange:this.onChange, value:this.state.value}) : a.call(null, {children:this.Ka.children, onChange:this.onChange, value:this.state.value}));
  }, componentWillReceiveProps:function(a) {
    return this.ee({value:a.value});
  }, onChange:function(a) {
    var c = this.Ka.onChange;
    if (null == c) {
      return null;
    }
    c.b ? c.b(a) : c.call(null, a);
    return this.ee({value:a.target.value});
  }, getInitialState:function() {
    return{value:this.Ka.value};
  }});
}
$m(React.d.input);
$m(React.d.qh);
$m(React.d.Ni);
var Y = !1, an = {};
function bn(a) {
  if (a ? a.Jg : a) {
    return a.Jg(a);
  }
  var b;
  b = bn[m(null == a ? null : a)];
  if (!b && (b = bn._, !b)) {
    throw u("IInitState.init-state", a);
  }
  return b.call(null, a);
}
var cn = {};
function dn(a, b, c) {
  if (a ? a.Kg : a) {
    return a.Kg(a, b, c);
  }
  var d;
  d = dn[m(null == a ? null : a)];
  if (!d && (d = dn._, !d)) {
    throw u("IShouldUpdate.should-update", a);
  }
  return d.call(null, a, b, c);
}
var en = {};
function fn(a) {
  if (a ? a.Og : a) {
    return a.Og(a);
  }
  var b;
  b = fn[m(null == a ? null : a)];
  if (!b && (b = fn._, !b)) {
    throw u("IWillMount.will-mount", a);
  }
  return b.call(null, a);
}
var gn = {};
function hn(a, b) {
  if (a ? a.Xd : a) {
    return a.Xd(a, b);
  }
  var c;
  c = hn[m(null == a ? null : a)];
  if (!c && (c = hn._, !c)) {
    throw u("IDidMount.did-mount", a);
  }
  return c.call(null, a, b);
}
var jn = {};
function kn(a) {
  if (a ? a.Pg : a) {
    return a.Pg(a);
  }
  var b;
  b = kn[m(null == a ? null : a)];
  if (!b && (b = kn._, !b)) {
    throw u("IWillUnmount.will-unmount", a);
  }
  return b.call(null, a);
}
var ln = {};
function mn(a, b, c) {
  if (a ? a.Ve : a) {
    return a.Ve(0, b, c);
  }
  var d;
  d = mn[m(null == a ? null : a)];
  if (!d && (d = mn._, !d)) {
    throw u("IWillUpdate.will-update", a);
  }
  return d.call(null, a, b, c);
}
var nn = {};
function on(a, b, c, d) {
  if (a ? a.Yd : a) {
    return a.Yd(a, b, c, d);
  }
  var e;
  e = on[m(null == a ? null : a)];
  if (!e && (e = on._, !e)) {
    throw u("IDidUpdate.did-update", a);
  }
  return e.call(null, a, b, c, d);
}
var pn = {};
function qn(a) {
  if (a ? a.Fa : a) {
    return a.Fa(a);
  }
  var b;
  b = qn[m(null == a ? null : a)];
  if (!b && (b = qn._, !b)) {
    throw u("IRender.render", a);
  }
  return b.call(null, a);
}
var rn = {};
function sn(a, b) {
  if (a ? a.Zd : a) {
    return a.Zd(a, b);
  }
  var c;
  c = sn[m(null == a ? null : a)];
  if (!c && (c = sn._, !c)) {
    throw u("IRenderState.render-state", a);
  }
  return c.call(null, a, b);
}
function tn(a) {
  if (a ? a.$d : a) {
    return a.$d(a);
  }
  var b;
  b = tn[m(null == a ? null : a)];
  if (!b && (b = tn._, !b)) {
    throw u("IValue.-value", a);
  }
  return b.call(null, a);
}
tn._ = function(a) {
  return a;
};
var un = {};
function vn(a) {
  if (a ? a.Pc : a) {
    return a.Pc(a);
  }
  var b;
  b = vn[m(null == a ? null : a)];
  if (!b && (b = vn._, !b)) {
    throw u("ICursor.-path", a);
  }
  return b.call(null, a);
}
function wn(a) {
  if (a ? a.Rc : a) {
    return a.Rc(a);
  }
  var b;
  b = wn[m(null == a ? null : a)];
  if (!b && (b = wn._, !b)) {
    throw u("ICursor.-state", a);
  }
  return b.call(null, a);
}
function xn(a) {
  if (a ? a.Qc : a) {
    return a.Qc(a);
  }
  var b;
  b = xn[m(null == a ? null : a)];
  if (!b && (b = xn._, !b)) {
    throw u("ICursor.-shared", a);
  }
  return b.call(null, a);
}
var yn = {}, zn = function() {
  function a(a, b, c, d) {
    if (a ? a.Ng : a) {
      return a.Ng(a, b, c, d);
    }
    var l;
    l = zn[m(null == a ? null : a)];
    if (!l && (l = zn._, !l)) {
      throw u("IToCursor.-to-cursor", a);
    }
    return l.call(null, a, b, c, d);
  }
  function b(a, b, c) {
    if (a ? a.Mg : a) {
      return a.Mg(a, b, c);
    }
    var d;
    d = zn[m(null == a ? null : a)];
    if (!d && (d = zn._, !d)) {
      throw u("IToCursor.-to-cursor", a);
    }
    return d.call(null, a, b, c);
  }
  function c(a, b) {
    if (a ? a.Lg : a) {
      return a.Lg(a, b);
    }
    var c;
    c = zn[m(null == a ? null : a)];
    if (!c && (c = zn._, !c)) {
      throw u("IToCursor.-to-cursor", a);
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
function An(a, b) {
  if (a ? a.Sc : a) {
    return a.Sc(a, b);
  }
  var c;
  c = An[m(null == a ? null : a)];
  if (!c && (c = An._, !c)) {
    throw u("ITransact.-transact!", a);
  }
  return c.call(null, a, b);
}
function Bn(a) {
  var b = a.Ka.children;
  if (ad(b)) {
    var c = a.Ka, d;
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
function Cn(a) {
  return a.Ka.__om_cursor;
}
var Dn = function() {
  function a(a, b) {
    return id(b) ? gd(b) ? c.b(a) : s ? Be.a(c.b(a), b) : null : J.a(c.b(a), b);
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
}(), En = function() {
  function a(a, b) {
    return id(b) ? gd(b) ? c.b(a) : s ? Be.a(c.b(a), b) : null : J.a(c.b(a), b);
  }
  function b(a) {
    return xn(Cn(a));
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
function Fn(a) {
  a = a.state;
  var b = a.__om_pending_state;
  return q(b) ? (a.__om_prev_state = a.__om_state, a.__om_state = b, a.__om_pending_state = null, a) : null;
}
var Gn = function() {
  function a(a, b) {
    var c = q(b) ? b : a.Ka, g = c.__om_state;
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
}(), Hn = React.Ce({render:function() {
  var a = Bn(this), b = Y;
  try {
    return Y = !0, (a ? q(q(null) ? null : a.Ja) || (a.Ba ? 0 : r(pn, a)) : r(pn, a)) ? qn(a) : (a ? q(q(null) ? null : a.Te) || (a.Ba ? 0 : r(rn, a)) : r(rn, a)) ? sn(a, Dn.b(this)) : s ? a : null;
  } finally {
    Y = b;
  }
}, componentDidUpdate:function(a, b, c) {
  if ((b = Bn(this)) ? q(q(null) ? null : b.Se) || (b.Ba ? 0 : r(nn, b)) : r(nn, b)) {
    var d = this.state, e = Y;
    try {
      Y = !0;
      var f = d.__om_prev_state;
      on(b, Cn({props:a}), q(f) ? f : d.__om_state, c);
    } finally {
      Y = e;
    }
  }
  return this.state.__om_prev_state = null;
}, componentWillUpdate:function(a) {
  var b = Bn(this);
  if (b ? q(q(null) ? null : b.Qg) || (b.Ba ? 0 : r(ln, b)) : r(ln, b)) {
    var c = this.state, d = Y;
    try {
      Y = !0;
      var e = c.__om_pending_state;
      mn(b, Cn({props:a}), q(e) ? e : c.__om_state);
    } finally {
      Y = d;
    }
  }
  return Fn(this);
}, componentWillUnmount:function() {
  var a = Bn(this);
  if (a ? q(q(null) ? null : a.Li) || (a.Ba ? 0 : r(jn, a)) : r(jn, a)) {
    var b = Y;
    try {
      return Y = !0, kn(a);
    } finally {
      Y = b;
    }
  } else {
    return null;
  }
}, componentDidMount:function(a) {
  var b = Bn(this);
  if (b ? q(q(null) ? null : b.Re) || (b.Ba ? 0 : r(gn, b)) : r(gn, b)) {
    var c = Y;
    try {
      return Y = !0, hn(b, a);
    } finally {
      Y = c;
    }
  } else {
    return null;
  }
}, componentWillMount:function() {
  Gn.b(this);
  var a = Bn(this);
  if (a ? q(q(null) ? null : a.Ki) || (a.Ba ? 0 : r(en, a)) : r(en, a)) {
    var b = Y;
    try {
      Y = !0, fn(a);
    } finally {
      Y = b;
    }
  }
  return Fn(this);
}, shouldComponentUpdate:function(a) {
  var b = Y;
  try {
    Y = !0;
    var c = this.Ka, d = this.state, e = Bn(this);
    Gn.a(this, a);
    return(e ? q(q(null) ? null : e.Ii) || (e.Ba ? 0 : r(cn, e)) : r(cn, e)) ? dn(e, Cn({props:a}), this.state.__om_pending_state) : tn(c.__om_cursor) !== tn(a.__om_cursor) ? !0 : null != d.__om_pending_state ? !0 : c.__om_index !== a.__om_index ? !0 : s ? !1 : null;
  } finally {
    Y = b;
  }
}, getInitialState:function() {
  var a = Bn(this), b = this.Ka, c = {__om_state:Sf.e(F([function() {
    var a = b.__om_init_state;
    return q(a) ? a : sf;
  }(), (a ? q(q(null) ? null : a.Hi) || (a.Ba ? 0 : r(an, a)) : r(an, a)) ? function() {
    var b = Y;
    try {
      return Y = !0, bn(a);
    } finally {
      Y = b;
    }
  }() : null], 0))};
  b.__om_init_state = null;
  return c;
}});
function In(a) {
  return a ? q(q(null) ? null : a.Wd) ? !0 : a.Ba ? !1 : r(un, a) : r(un, a);
}
function Jn(a, b, c, d) {
  this.value = a;
  this.state = b;
  this.path = c;
  this.P = d;
  this.q = 0;
  this.g = 2158397195;
}
h = Jn.prototype;
h.K = function(a, b) {
  return Fb.c(this, b, null);
};
h.L = function(a, b, c) {
  if (Y) {
    return a = Fb.c(this.value, b, c), y.a(a, c) ? c : Kn.i ? Kn.i(a, this.state, Wc.a(this.path, b), this.P) : Kn.call(null, a, this.state, Wc.a(this.path, b), this.P);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.$b = function(a, b) {
  if (Y) {
    return Gb(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.rb = function(a, b, c) {
  if (Y) {
    return new Jn(Hb(this.value, b, c), this.state, this.path, this.P);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.L(null, a, b);
};
h.Wd = !0;
h.Pc = function() {
  if (Y) {
    return this.path;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Rc = function() {
  if (Y) {
    return this.state;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Qc = function() {
  return this.P;
};
h.Ib = function() {
  if (Y) {
    throw Error([v("Cannot deref cursor during render phase: "), v(this)].join(""));
  }
  return Be.a(Ub(this.state), this.path);
};
h.$d = function() {
  if (Y) {
    return this.value;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.H = function(a, b, c) {
  if (Y) {
    return kc(this.value, b, c);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.R = function(a, b) {
  if (Y) {
    return new Jn(xb(this.value, b), this.state, this.path, this.P);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.I = function() {
  var a = this;
  if (Y) {
    return 0 < H(a.value) ? ie.a(function(b) {
      var c = I.c(b, 0, null);
      b = I.c(b, 1, null);
      return new R(null, 2, 5, S, [c, Kn.i ? Kn.i(b, a.state, Wc.a(a.path, c), a.P) : Kn.call(null, b, a.state, Wc.a(a.path, c), a.P)], null);
    }, a.value) : null;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.J = function() {
  if (Y) {
    return ub(this.value);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.G = function(a, b) {
  if (Y) {
    return In(b) ? y.a(this.value, tn(b)) : y.a(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.u = function(a, b) {
  if (Y) {
    return new Jn(Tc(this.value, b), this.state, this.path, this.P);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.pa = !0;
h.ka = function() {
  return new Jn(this.value, this.state, this.path, this.P);
};
h.t = function() {
  if (Y) {
    return cd(this.value);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.yc = function(a, b) {
  if (Y) {
    return new Jn(Jb(this.value, b), this.state, this.path, this.P);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Ue = !0;
h.Sc = function(a, b) {
  return wg.c(this.state, b, this.path);
};
function Ln(a, b, c, d) {
  this.value = a;
  this.state = b;
  this.path = c;
  this.P = d;
  this.q = 0;
  this.g = 2175181595;
}
h = Ln.prototype;
h.K = function(a, b) {
  if (Y) {
    return w.c(this, b, null);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.L = function(a, b, c) {
  if (Y) {
    return w.c(this, b, c);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.$b = function(a, b) {
  if (Y) {
    return Gb(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.rb = function(a, b, c) {
  if (Y) {
    return Kn.i ? Kn.i(Tb(this.value, b, c), this.state, this.path, this.P) : Kn.call(null, Tb(this.value, b, c), this.state, this.path, this.P);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.L(null, a, b);
};
h.Wd = !0;
h.Pc = function() {
  if (Y) {
    return this.path;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Rc = function() {
  if (Y) {
    return this.state;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Qc = function() {
  return this.P;
};
h.Ib = function() {
  if (Y) {
    throw Error([v("Cannot deref cursor during render phase: "), v(this)].join(""));
  }
  return Be.a(Ub(this.state), this.path);
};
h.$d = function() {
  if (Y) {
    return this.value;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.H = function(a, b, c) {
  if (Y) {
    return kc(this.value, b, c);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.R = function(a, b) {
  if (Y) {
    return new Ln(xb(this.value, b), this.state, this.path, this.P);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.I = function() {
  var a = this;
  if (Y) {
    return 0 < H(a.value) ? ie.c(function(b, c) {
      return Kn.i ? Kn.i(b, a.state, Wc.a(a.path, c), a.P) : Kn.call(null, b, a.state, Wc.a(a.path, c), a.P);
    }, a.value, cg.p()) : null;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.J = function() {
  if (Y) {
    return ub(this.value);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.tb = function() {
  if (Y) {
    return Kn.i ? Kn.i(Qb(this.value), this.state, this.path, this.P) : Kn.call(null, Qb(this.value), this.state, this.path, this.P);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.ub = function() {
  if (Y) {
    return Kn.i ? Kn.i(Rb(this.value), this.state, this.path, this.P) : Kn.call(null, Rb(this.value), this.state, this.path, this.P);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.G = function(a, b) {
  if (Y) {
    return In(b) ? y.a(this.value, tn(b)) : y.a(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.u = function(a, b) {
  if (Y) {
    return new Ln(Tc(this.value, b), this.state, this.path, this.P);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.pa = !0;
h.ka = function() {
  return new Ln(this.value, this.state, this.path, this.P);
};
h.t = function() {
  if (Y) {
    return cd(this.value);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.A = function(a, b) {
  if (Y) {
    return Kn.i ? Kn.i(w.a(this.value, b), this.state, Wc.a(this.path, b), this.P) : Kn.call(null, w.a(this.value, b), this.state, Wc.a(this.path, b), this.P);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.qa = function(a, b, c) {
  if (Y) {
    return b < ub(this.value) ? Kn.i ? Kn.i(w.a(this.value, b), this.state, Wc.a(this.path, b), this.P) : Kn.call(null, w.a(this.value, b), this.state, Wc.a(this.path, b), this.P) : c;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Ue = !0;
h.Sc = function(a, b) {
  return wg.c(this.state, b, this.path);
};
function Mn(a, b, c, d) {
  var e = sb(a);
  e.uf = !0;
  e.G = function(b, c) {
    if (Y) {
      return In(c) ? y.a(a, tn(c)) : y.a(a, c);
    }
    throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
  };
  e.Ue = !0;
  e.Sc = function(a, d) {
    return wg.c(b, d, c);
  };
  e.Wd = !0;
  e.Rc = function() {
    if (Y) {
      return b;
    }
    throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
  };
  e.Pc = function() {
    if (Y) {
      return c;
    }
    throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
  };
  e.Qc = function() {
    return d;
  };
  e.hi = !0;
  e.Ib = function() {
    if (Y) {
      throw Error([v("Cannot deref cursor during render phase: "), v(this)].join(""));
    }
    return Be.a(Ub(b), c);
  };
  return e;
}
var Kn = function() {
  function a(a, b, c, d) {
    return In(a) ? a : (a ? q(q(null) ? null : a.Ji) || (a.Ba ? 0 : r(yn, a)) : r(yn, a)) ? zn.i(a, b, c, d) : Mc(a) ? new Ln(a, b, c, d) : O(a) ? new Jn(a, b, c, d) : (a ? q(q(null) ? null : a.pa) || (a.Ba ? 0 : r(rb, a)) : r(rb, a)) ? Mn(a, b, c, d) : s ? a : null;
  }
  function b(a, b, c) {
    return e.i(a, b, c, null);
  }
  function c(a, b) {
    return e.i(a, b, We, null);
  }
  function d(a) {
    return e.i(a, null, We, null);
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
}(), Nn = !1, On = ug.b(Vf);
function Pn() {
  Nn = !1;
  for (var a = A(Ub(On)), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.A(null, d);
      e.p ? e.p() : e.call(null);
      d += 1;
    } else {
      if (a = A(a)) {
        b = a, kd(b) ? (a = uc(b), c = vc(b), b = a, e = H(a), a = c, c = e) : (e = B(b), e.p ? e.p() : e.call(null), a = E(b), b = null, c = 0), d = 0;
      } else {
        return null;
      }
    }
  }
}
var Qn = ug.b(sf), Rn = function() {
  function a(a, b, c, g) {
    var k = Ub(Qn);
    qd(k, g) && J.a(k, g).call(null);
    var l = a instanceof sg ? a : ug.b(a), p = function(a) {
      return function M() {
        wg.c(On, dd, M);
        var d = Ub(a), k = Kn.i(d, a, We, b);
        return React.Vi(new Hn({__om_cursor:k}, function(a, b) {
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
    }(l), t = yg.p();
    mc(l, t, function() {
      qd(Ub(On), p) || wg.c(On, Wc, p);
      if (q(Nn)) {
        return null;
      }
      Nn = !0;
      return "undefined" !== typeof requestAnimationFrame ? requestAnimationFrame(Pn) : setTimeout(Pn, 16);
    });
    wg.i(Qn, Zc, g, function() {
      nc(l, t);
      wg.c(Qn, $c, g);
      return React.bj(g);
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
}(), Sn = function() {
  function a(a, b, c) {
    if (!ce(new Tf(null, new n(null, 7, [bh, null, wh, null, Fh, null, Ih, null, Ph, null, Oj, null, gk, null], null), null), Pf(c))) {
      throw Error([v("Assert failed: "), v(K.i(v, "build options contains invalid keys, only :key, :react-key, ", ":fn, :init-state, :state, and :opts allowed, given ", qe(", ", Pf(c)))), v("\n"), v(qg.e(F([Hd(new Bc(null, "valid?", "valid?", 1830611324, null), new Bc(null, "m", "m", -1640531418, null))], 0)))].join(""));
    }
    if (null == c) {
      return c = new Hn({__om_cursor:b}, function(c) {
        var f = Y;
        try {
          return Y = !0, a.a ? a.a(b, c) : a.call(null, b, c);
        } finally {
          Y = f;
        }
      }), c.constructor = la(a), c;
    }
    if (s) {
      var g = P(c) ? K.a(T, c) : c, k = J.a(g, Oj), l = J.a(g, bh), p = J.a(g, wh), g = J.a(g, Ph), t = J.a(c, gk), x = null != t ? t.b ? t.b(b) : t.call(null, b) : b, g = null != g ? J.a(x, g) : J.a(c, Fh);
      c = new Hn({key:g, __om_state:p, __om_init_state:l, __om_index:Ih.b(c), __om_cursor:x}, null == k ? function(b) {
        var c = Y;
        try {
          return Y = !0, a.a ? a.a(x, b) : a.call(null, x, b);
        } finally {
          Y = c;
        }
      } : function(b) {
        var c = Y;
        try {
          return Y = !0, a.c ? a.c(x, b, k) : a.call(null, x, b, k);
        } finally {
          Y = c;
        }
      });
      c.constructor = la(a);
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
}(), Tn = function() {
  function a(a, b, c) {
    return ie.c(function(b, e) {
      return Sn.c(a, b, Zc.c(c, Ih, e));
    }, b, cg.p());
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
}(), Un = function() {
  function a(a, b, c, d, e, f) {
    return An(a, function(a, g) {
      return gd(g) ? b.m ? b.m(a, c, d, e, f) : b.call(null, a, c, d, e, f) : Ee.e(a, g, b, c, d, e, F([f], 0));
    });
  }
  function b(a, b, c, d, e) {
    return An(a, function(a, f) {
      return gd(f) ? b.i ? b.i(a, c, d, e) : b.call(null, a, c, d, e) : Ee.la(a, f, b, c, d, e);
    });
  }
  function c(a, b, c, d) {
    return An(a, function(a, e) {
      return gd(e) ? b.c ? b.c(a, c, d) : b.call(null, a, c, d) : Ee.m(a, e, b, c, d);
    });
  }
  function d(a, b, c) {
    return An(a, function(a, d) {
      return gd(d) ? b.a ? b.a(a, c) : b.call(null, a, c) : Ee.i(a, d, b, c);
    });
  }
  function e(a, b) {
    return An(a, function(a, c) {
      return gd(c) ? b.b ? b.b(a) : b.call(null, a) : Ee.c(a, c, b);
    });
  }
  var f = null, g = function() {
    function a(c, d, e, f, g, k, ba) {
      var U = null;
      6 < arguments.length && (U = F(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, k, U);
    }
    function b(a, c, d, e, f, g, k) {
      return An(a, function(a, b) {
        return gd(b) ? K.e(c, a, d, e, f, F([g, k], 0)) : K.e(Ee, a, b, c, d, F([e, f, g, k], 0));
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
  }(), f = function(f, l, p, t, x, D, M) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, p);
      case 4:
        return c.call(this, f, l, p, t);
      case 5:
        return b.call(this, f, l, p, t, x);
      case 6:
        return a.call(this, f, l, p, t, x, D);
      default:
        return g.e(f, l, p, t, x, D, F(arguments, 6));
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
function Vn(a, b) {
  var c = a.Ui;
  return q(c) ? c[b].wi() : null;
}
function Wn(a, b, c) {
  var d = Y;
  try {
    Y = !0;
    var e = a.state, f = a.Ka.__om_cursor, g = vn(f), k, l = e.__om_pending_state;
    k = q(l) ? l : e.__om_state;
    id(b) ? e.__om_pending_state = De(k, b, c) : e.__om_pending_state = Zc.c(k, b, c);
    return gd(g) ? wg.a(wn(f), Fc) : wg.i(wn(f), Ee, g, Fc);
  } finally {
    Y = d;
  }
}
;function Xn(a) {
  return Fm.a(",", ie.a(function(a) {
    return K.a(v, a);
  }, Gd(ie.a(Gd, Ae.i(3, 3, We, Gd(a))))));
}
var Yn = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P(b) ? K.a(T, b) : b, f = J.a(e, Fj);
    if (q(a)) {
      var e = 0 < a ? 1 : y.a(a, 0) ? 0 : 0 > a ? -1 : null, g = Math.abs(a), k = ("" + v(g)).split("."), l = I.c(k, 0, null), p = I.c(k, 1, null), k = 1 <= g ? 3 * ((H(l) - 1) / 3 | 0) : 0 < g ? -3 * ((3 + H(ag(function() {
        return function(a) {
          return y.a(a, "0");
        };
      }(e, g, k, l, p), p))) / 3 | 0) : 0, g = g * Math.pow(10, -1 * k), l = q(f) ? ("" + v(g)).split(".") : null, p = I.c(l, 0, null);
      I.c(l, 1, null);
      var l = q(q(f) ? 0 < g : f) ? Math.pow(10, H(p) - f) : null, l = q(l) ? "" + v(l * Math.round(g / l)) : null, t = q(l) ? l.split(".") : null, p = I.c(t, 0, null), t = I.c(t, 1, null), f = q(l) ? K.a(v, Zd.b(ve(ee, ye(new R(null, 3, 5, S, [ke(f, p), me.a(H(p) - f, "0"), 0 < H(t) ? new R(null, 2, 5, S, [".", ke(f - H(p), t)], null) : null], null))))) : null, f = q(f) ? parseFloat(f) : null;
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
    var e = P(b) ? K.a(T, b) : b, f = J.a(e, z), g = J.a(e, Ri), e = J.a(e, kj);
    return q(a) ? (f = q(e) ? Math.round(Math.abs(a) * Math.pow(10, e)) / Math.pow(10, e) : Math.abs(a), f = "" + v(f), e = Km.a(f, /\./), f = I.c(e, 0, null), e = I.c(e, 1, null), f = Xn(f), f = Fm.a(".", ve(ee, new R(null, 2, 5, S, [f, e], null))), 0 > a ? [v("-"), v(f)].join("") : q(q(g) ? 0 < a : g) ? [v("+"), v(f)].join("") : f) : f;
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
var Zn = new n(null, 5, [0, "", 3, "k", 6, "m", 9, "bn", 12, "tn"], null), $n = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P(b) ? K.a(T, b) : b, f = J.a(e, z), g = J.a(e, Ri), k = J.c(e, Ti, "\u00a3"), e = J.a(e, Fj);
    if (q(a)) {
      var e = Yn.e(a, F([Fj, e], 0)), f = I.c(e, 0, null), l = I.c(e, 1, null), e = Math.abs(f), p = Zn.b ? Zn.b(l) : Zn.call(null, l), l = q(p) ? p : [v("x10^"), v(l)].join("");
      return K.a(v, ve(ee, new R(null, 4, 5, S, [q(q(g) ? 0 < f : g) ? "+" : 0 > f ? "-" : null, k, e, l], null)));
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
var ao, bo;
function co(a) {
  a = P(a) ? K.a(T, a) : a;
  J.a(a, jk);
  a = J.a(a, vj);
  return q(y.a ? y.a(Wh, a) : y.call(null, Wh, a)) ? new n(null, 3, [ci, new n(null, 2, [ei, "Total", mk, "Totals for the selected Portfolio Company"], null), Mj, new n(null, 2, [ei, "Mean", mk, "Mean for the selected Portfolio Company"], null), uk, new n(null, 2, [ei, "Benchmark", mk, "Mean over all UK Companies"], null)], null) : q(y.a ? y.a(ck, a) : y.call(null, ck, a)) ? new n(null, 3, [ci, new n(null, 2, [ei, "Total", mk, "Totals for the Portfolio Companies of the selected Investor"], null), 
  Mj, new n(null, 2, [ei, "Mean", mk, "Mean over the Portfolio Companies of the selected Investor"], null), uk, new n(null, 2, [ei, "Benchmark", mk, "Mean over all UK Companies"], null)], null) : q(y.a ? y.a(Ch, a) : y.call(null, Ch, a)) ? new n(null, 3, [ci, new n(null, 2, [ei, "Total", mk, "Totals for the selected Constituency"], null), Mj, new n(null, 2, [ei, "Mean", mk, "Mean over the Portfolio Companies with sites in the selected Constituency"], null), uk, new n(null, 2, [ei, "Benchmark", mk, 
  "Mean over all UK Companies"], null)], null) : new n(null, 3, [ci, new n(null, 2, [ei, "Total", mk, "Totals over all Portfolio Companies"], null), Mj, new n(null, 2, [ei, "Mean", mk, "Mean over all Portfolio Companies"], null), uk, new n(null, 2, [ei, "Benchmark", mk, "Mean over all UK Companies"], null)], null);
}
function eo(a) {
  var b = P(a) ? K.a(T, a) : a;
  a = J.a(b, Bh);
  var c = J.a(b, ci), d = J.a(b, pj), b = co(c), e = q(a) ? a : d;
  return new n(null, 3, [ci, Sf.e(F([ci.b(b), Yc([Rg, nh, Gh, wi, xi, yi, Bi, Oi, qj], [Z.c ? Z.c(null == e ? null : Tg.b(e), z, "-") : Z.call(null, null == e ? null : Tg.b(e), z, "-"), function() {
    var a = null == e ? null : Uj.b(e);
    return null == a ? null : Hh.b(a);
  }(), function() {
    var a = null == e ? null : Sj.b(e);
    return null == a ? null : Hh.b(a);
  }(), Z.c ? Z.c(null == e ? null : zi.b(e), z, "-") : Z.call(null, null == e ? null : zi.b(e), z, "-"), Z.m ? Z.m(function() {
    var a = null == e ? null : Uj.b(e);
    return null == a ? null : Hh.b(a);
  }(), kj, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : Uj.b(e);
    return null == a ? null : Hh.b(a);
  }(), kj, 0, z, "-"), $n.m ? $n.m(function() {
    var a = null == e ? null : Sj.b(e);
    return null == a ? null : Hh.b(a);
  }(), Fj, 2, z, "-") : $n.call(null, function() {
    var a = null == e ? null : Sj.b(e);
    return null == a ? null : Hh.b(a);
  }(), Fj, 2, z, "-"), Z.m ? Z.m(function() {
    var a = null == e ? null : Li.b(e);
    return null == a ? null : Hh.b(a);
  }(), kj, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : Li.b(e);
    return null == a ? null : Hh.b(a);
  }(), kj, 0, z, "-"), Z.c ? Z.c(null == e ? null : Vi.b(e), z, "-") : Z.call(null, null == e ? null : Vi.b(e), z, "-"), $n.m ? $n.m(function() {
    var a = null == e ? null : qj.b(e);
    return null == a ? null : Hh.b(a);
  }(), Fj, 2, z, "-") : $n.call(null, function() {
    var a = null == e ? null : qj.b(e);
    return null == a ? null : Hh.b(a);
  }(), Fj, 2, z, "-")])], 0)), Mj, Sf.e(F([Mj.b(b), Yc([Rg, nh, Gh, wi, xi, yi, Bi, Oi, qj], ["\u00a0", function() {
    var a = null == e ? null : Uj.b(e);
    return null == a ? null : Sh.b(a);
  }(), function() {
    var a = null == e ? null : Sj.b(e);
    return null == a ? null : Sh.b(a);
  }(), "\u00a0", Z.m ? Z.m(function() {
    var a = null == e ? null : Uj.b(e);
    return null == a ? null : Sh.b(a);
  }(), kj, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : Uj.b(e);
    return null == a ? null : Sh.b(a);
  }(), kj, 0, z, "-"), $n.m ? $n.m(function() {
    var a = null == e ? null : Sj.b(e);
    return null == a ? null : Sh.b(a);
  }(), Fj, 2, z, "-") : $n.call(null, function() {
    var a = null == e ? null : Sj.b(e);
    return null == a ? null : Sh.b(a);
  }(), Fj, 2, z, "-"), Z.m ? Z.m(function() {
    var a = null == e ? null : Li.b(e);
    return null == a ? null : Sh.b(a);
  }(), kj, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : Li.b(e);
    return null == a ? null : Sh.b(a);
  }(), kj, 0, z, "-"), "\u00a0", $n.m ? $n.m(function() {
    var a = null == e ? null : qj.b(e);
    return null == a ? null : Sh.b(a);
  }(), Fj, 2, z, "-") : $n.call(null, function() {
    var a = null == e ? null : qj.b(e);
    return null == a ? null : Sh.b(a);
  }(), Fj, 2, z, "-")])], 0)), uk, Sf.e(F([uk.b(b), Yc([Rg, nh, Gh, wi, xi, yi, Bi, Oi, qj], [Z.c ? Z.c(null == d ? null : Tg.b(d), z, "-") : Z.call(null, null == d ? null : Tg.b(d), z, "-"), function() {
    var a = null == d ? null : Uj.b(d);
    return null == a ? null : Sh.b(a);
  }(), function() {
    var a = null == d ? null : Sj.b(d);
    return null == a ? null : Hh.b(a);
  }(), Z.c ? Z.c(null == d ? null : zi.b(d), z, "-") : Z.call(null, null == d ? null : zi.b(d), z, "-"), Z.m ? Z.m(function() {
    var a = null == d ? null : Uj.b(d);
    return null == a ? null : Sh.b(a);
  }(), kj, 0, z, "-") : Z.call(null, function() {
    var a = null == d ? null : Uj.b(d);
    return null == a ? null : Sh.b(a);
  }(), kj, 0, z, "-"), $n.m ? $n.m(function() {
    var a = null == d ? null : Sj.b(d);
    return null == a ? null : Sh.b(a);
  }(), Fj, 2, z, "-") : $n.call(null, function() {
    var a = null == d ? null : Sj.b(d);
    return null == a ? null : Sh.b(a);
  }(), Fj, 2, z, "-"), Z.m ? Z.m(function() {
    var a = null == d ? null : Li.b(d);
    return null == a ? null : Sh.b(a);
  }(), kj, 0, z, "-") : Z.call(null, function() {
    var a = null == d ? null : Li.b(d);
    return null == a ? null : Sh.b(a);
  }(), kj, 0, z, "-"), Z.c ? Z.c(null == d ? null : Vi.b(d), z, "-") : Z.call(null, null == d ? null : Vi.b(d), z, "-"), $n.m ? $n.m(function() {
    var a = null == d ? null : qj.b(d);
    return null == a ? null : Sh.b(a);
  }(), Fj, 2, z, "-") : $n.call(null, function() {
    var a = null == d ? null : qj.b(d);
    return null == a ? null : Sh.b(a);
  }(), Fj, 2, z, "-")])], 0))], null);
}
function fo(a) {
  return null == a ? null : 0 < a ? React.d.n({className:"icon-positive"}) : 0 > a ? React.d.n({className:"icon-negative"}) : null;
}
var ho = function go(b) {
  var c = eo(b), c = P(c) ? K.a(T, c) : c, d = J.a(c, uk), e = J.a(c, Mj), f = J.a(c, ci);
  "undefined" === typeof bo && (bo = function(b, c, d, e, f, x, D) {
    this.selection = b;
    this.ya = c;
    this.za = d;
    this.Sf = e;
    this.data = f;
    this.Xg = x;
    this.og = D;
    this.q = 0;
    this.g = 393216;
  }, bo.T = !0, bo.S = "clustermap.components.full-report.overview/t23017", bo.V = function(b, c) {
    return ic(c, "clustermap.components.full-report.overview/t23017");
  }, bo.prototype.Ja = !0, bo.prototype.Fa = function() {
    var b = this;
    return React.d.M({className:"full-report-overview"}, React.d.zi(null, "Overview of latest filings"), React.d.M({className:"table-responsive"}, React.d.table({className:"table-stats"}, React.d.ad(null, React.d.fb(null, React.d.v(null, "\u00a0"), React.d.v(null, "Portfolio Companies"), React.d.v(null, "Investors"), React.d.v(null, "Constituencies"), React.d.v(null, "Revenue"), React.d.v({colSpan:"2"}, "Rev. change"), React.d.v(null, "Employees"), React.d.v({colSpan:"2"}, "Emp. change"))), React.d.ob(null, 
    React.d.fb(null, React.d.v(null, React.d.n({className:"icon-info", "data-toggle":"tooltip", "data-container":"body", title:b.selection.b ? b.selection.b(mk) : b.selection.call(null, mk)}), W(b.selection.b ? b.selection.b(ei) : b.selection.call(null, ei))), React.d.s(null, function() {
      var c = Rg.b(b.selection);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, W(c));
    }()), React.d.s(null, function() {
      var c = wi.b(b.selection);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, W(c));
    }()), React.d.s(null, function() {
      var c = Oi.b(b.selection);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, W(c));
    }()), React.d.s(null, function() {
      var c = qj.b(b.selection);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, W(c));
    }()), React.d.s(null, function() {
      var c = fo(Gh.b(b.selection));
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, W(c));
    }()), React.d.s(null, function() {
      var c = yi.b(b.selection);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, W(c));
    }()), React.d.s(null, function() {
      var c = Bi.b(b.selection);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, W(c));
    }()), React.d.s(null, function() {
      var c = fo(nh.b(b.selection));
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, W(c));
    }()), React.d.s(null, function() {
      var c = xi.b(b.selection);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, W(c));
    }())), React.d.fb(null, React.d.v(null, React.d.n({className:"icon-info", "data-toggle":"tooltip", "data-container":"body", title:b.ya.b ? b.ya.b(mk) : b.ya.call(null, mk)}), W(b.ya.b ? b.ya.b(ei) : b.ya.call(null, ei))), React.d.s(null, function() {
      var c = Rg.b(b.ya);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, W(c));
    }()), React.d.s(null, function() {
      var c = wi.b(b.ya);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, W(c));
    }()), React.d.s(null, function() {
      var c = Oi.b(b.ya);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, W(c));
    }()), React.d.s(null, function() {
      var c = qj.b(b.ya);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, W(c));
    }()), React.d.s(null, function() {
      var c = fo(Gh.b(b.ya));
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, W(c));
    }()), React.d.s(null, function() {
      var c = yi.b(b.ya);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, W(c));
    }()), React.d.s(null, function() {
      var c = Bi.b(b.ya);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, W(c));
    }()), React.d.s(null, function() {
      var c = fo(nh.b(b.ya));
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, W(c));
    }()), React.d.s(null, function() {
      var c = xi.b(b.ya);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, W(c));
    }())), React.d.fb(null, React.d.v(null, React.d.n({className:"icon-info", "data-toggle":"tooltip", "data-container":"body", title:b.za.b ? b.za.b(mk) : b.za.call(null, mk)}), W(b.za.b ? b.za.b(ei) : b.za.call(null, ei))), React.d.s(null, function() {
      var c = Rg.b(b.za);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, W(c));
    }()), React.d.s(null, function() {
      var c = wi.b(b.za);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, W(c));
    }()), React.d.s(null, function() {
      var c = Oi.b(b.za);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, W(c));
    }()), React.d.s(null, function() {
      var c = qj.b(b.za);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, W(c));
    }()), React.d.s(null, function() {
      var c = fo(Gh.b(b.za));
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, W(c));
    }()), React.d.s(null, function() {
      var c = yi.b(b.za);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, W(c));
    }()), React.d.s(null, function() {
      var c = Bi.b(b.za);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, W(c));
    }()), React.d.s(null, function() {
      var c = fo(nh.b(b.za));
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, W(c));
    }()), React.d.s(null, function() {
      var c = xi.b(b.za);
      return O(c) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, W(c));
    }()))))));
  }, bo.prototype.t = function() {
    return this.og;
  }, bo.prototype.u = function(b, c) {
    return new bo(this.selection, this.ya, this.za, this.Sf, this.data, this.Xg, c);
  });
  return new bo(f, e, d, c, b, go, null);
};
var io = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/, Mm = new n(null, 4, '\x26 \x26amp; \x3c \x26lt; \x3e \x26gt; " \x26quot;'.split(" "), null), jo = new Tf(null, new n(null, 33, ["dd", null, "head", null, "a", null, "b", null, "body", null, "pre", null, "form", null, "iframe", null, "dl", null, "em", null, "fieldset", null, "i", null, "h1", null, "h2", null, "span", null, "h3", null, "script", null, "html", null, "h4", null, "h5", null, "h6", null, "table", null, "dt", null, "div", null, "style", 
null, "label", null, "option", null, "ul", null, "strong", null, "canvas", null, "textarea", null, "li", null, "ol", null], null), null);
function ko(a) {
  return a instanceof Q || a instanceof Bc ? Kd(a) : "" + v(a);
}
function lo(a, b) {
  return[v(" "), v(ko(a)), v('\x3d"'), v(Lm(ko(b))), v('"')].join("");
}
function mo(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  return!0 === a ? y.a(Vg, Vg) ? lo(b, b) : [v(" "), v(ko(b))].join("") : ib(a) ? "" : s ? lo(b, a) : null;
}
function no(a) {
  return K.a(v, ud.b(ie.a(mo, a)));
}
var po = function oo(b) {
  if (jd(b)) {
    var c, d = I.c(b, 0, null);
    b = zd(b);
    if (!(d instanceof Q || d instanceof Bc || "string" === typeof d)) {
      throw[v(d), v(" is not a valid tag name")].join("");
    }
    var e = fg(io, ko(d));
    I.c(e, 0, null);
    d = I.c(e, 1, null);
    c = I.c(e, 2, null);
    e = I.c(e, 3, null);
    c = new n(null, 2, [hk, c, Qh, q(e) ? Em(e, ".", " ") : null], null);
    e = B(b);
    c = O(e) ? new R(null, 3, 5, S, [d, Sf.e(F([c, e], 0)), E(b)], null) : new R(null, 3, 5, S, [d, c, b], null);
    b = I.c(c, 0, null);
    d = I.c(c, 1, null);
    c = I.c(c, 2, null);
    b = q(q(c) ? c : jo.b ? jo.b(b) : jo.call(null, b)) ? [v("\x3c"), v(b), v(no(d)), v("\x3e"), v(po.b ? po.b(c) : po.call(null, c)), v("\x3c/"), v(b), v("\x3e")].join("") : [v("\x3c"), v(b), v(no(d)), v(y.a(Vg, Vg) ? " /\x3e" : "\x3e")].join("");
  } else {
    b = P(b) ? K.a(v, ie.a(oo, b)) : s ? ko(b) : null;
  }
  return b;
};
var qo = Wl("goog.net.xpc");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var ro;
function so(a, b, c) {
  if (a ? a.Dc : a) {
    return a.Dc(0, b, c);
  }
  var d;
  d = so[m(null == a ? null : a)];
  if (!d && (d = so._, !d)) {
    throw u("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function to(a) {
  if (a ? a.Cc : a) {
    return a.Cc();
  }
  var b;
  b = to[m(null == a ? null : a)];
  if (!b && (b = to._, !b)) {
    throw u("Channel.close!", a);
  }
  return b.call(null, a);
}
function uo(a) {
  if (a ? a.ue : a) {
    return!0;
  }
  var b;
  b = uo[m(null == a ? null : a)];
  if (!b && (b = uo._, !b)) {
    throw u("Handler.active?", a);
  }
  return b.call(null, a);
}
function vo(a) {
  if (a ? a.Ac : a) {
    return a.Ac(a);
  }
  var b;
  b = vo[m(null == a ? null : a)];
  if (!b && (b = vo._, !b)) {
    throw u("Buffer.full?", a);
  }
  return b.call(null, a);
}
function wo(a) {
  if (a ? a.Bc : a) {
    return a.Bc(a);
  }
  var b;
  b = wo[m(null == a ? null : a)];
  if (!b && (b = wo._, !b)) {
    throw u("Buffer.remove!", a);
  }
  return b.call(null, a);
}
;var xo, zo = function yo(b) {
  "undefined" === typeof xo && (xo = function(b, d, e) {
    this.Qa = b;
    this.Kd = d;
    this.Cg = e;
    this.q = 0;
    this.g = 393216;
  }, xo.T = !0, xo.S = "cljs.core.async.impl.ioc-helpers/t27429", xo.V = function(b, d) {
    return ic(d, "cljs.core.async.impl.ioc-helpers/t27429");
  }, xo.prototype.ue = function() {
    return!0;
  }, xo.prototype.t = function() {
    return this.Cg;
  }, xo.prototype.u = function(b, d) {
    return new xo(this.Qa, this.Kd, d);
  });
  return new xo(b, yo, null);
};
function Ao(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].Cc(), b;
    }
    if (s) {
      throw b;
    }
    return null;
  }
}
function Bo(a, b, c) {
  c = c.Af(zo(function(c) {
    a[2] = c;
    a[1] = b;
    return Ao(a);
  }));
  return q(c) ? (a[2] = Ub(c), a[1] = b, V) : null;
}
function Co(a, b, c) {
  b = b.Dc(0, c, zo(function() {
    a[2] = null;
    a[1] = 7;
    return Ao(a);
  }));
  return q(b) ? (a[2] = Ub(b), a[1] = 7, V) : null;
}
function Do(a, b) {
  var c = a[6];
  null != b && c.Dc(0, b, zo(function() {
    return null;
  }));
  c.Cc();
  return c;
}
function Eo(a) {
  for (;;) {
    var b = a[4], c = qh.b(b), d = Ai.b(b), e = a[5];
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
      a[4] = Zc.e(b, qh, null, F([Ai, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? ib(c) && ib(eh.b(b)) : a;
    }())) {
      a[4] = Ki.b(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = ib(c)) ? eh.b(b) : a : a;
      }())) {
        a[1] = eh.b(b);
        a[4] = Zc.c(b, eh, null);
        break;
      }
      if (q(function() {
        var a = ib(e);
        return a ? eh.b(b) : a;
      }())) {
        a[1] = eh.b(b);
        a[4] = Zc.c(b, eh, null);
        break;
      }
      if (ib(e) && ib(eh.b(b))) {
        a[1] = Fi.b(b);
        a[4] = Ki.b(b);
        break;
      }
      if (s) {
        throw Error([v("Assert failed: "), v("No matching clause"), v("\n"), v(qg.e(F([!1], 0)))].join(""));
      }
      break;
    }
  }
}
;function Fo(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Ho(a, b, c, d) {
  this.head = a;
  this.D = b;
  this.length = c;
  this.f = d;
}
Ho.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.f[this.D];
  this.f[this.D] = null;
  this.D = (this.D + 1) % this.f.length;
  this.length -= 1;
  return a;
};
Ho.prototype.unshift = function(a) {
  this.f[this.head] = a;
  this.head = (this.head + 1) % this.f.length;
  this.length += 1;
  return null;
};
function Io(a, b) {
  a.length + 1 === a.f.length && a.resize();
  a.unshift(b);
}
Ho.prototype.resize = function() {
  var a = Array(2 * this.f.length);
  return this.D < this.head ? (Fo(this.f, this.D, a, 0, this.length), this.D = 0, this.head = this.length, this.f = a) : this.D > this.head ? (Fo(this.f, this.D, a, 0, this.f.length - this.D), Fo(this.f, 0, a, this.f.length - this.D, this.head), this.D = 0, this.head = this.length, this.f = a) : this.D === this.head ? (this.head = this.D = 0, this.f = a) : null;
};
function Jo(a, b) {
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
function Ko(a) {
  if (!(0 < a)) {
    throw Error([v("Assert failed: "), v("Can't create a ring buffer of size 0"), v("\n"), v(qg.e(F([Hd(new Bc(null, "\x3e", "\x3e", -1640531465, null), new Bc(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new Ho(0, 0, 0, Array(a));
}
function Lo(a, b) {
  this.ca = a;
  this.Vd = b;
  this.q = 0;
  this.g = 2;
}
Lo.prototype.J = function() {
  return this.ca.length;
};
Lo.prototype.Ac = function() {
  return this.ca.length === this.Vd;
};
Lo.prototype.Bc = function() {
  return this.ca.pop();
};
Lo.prototype.te = function(a, b) {
  if (!ib(vo(this))) {
    throw Error([v("Assert failed: "), v("Can't add to a full buffer"), v("\n"), v(qg.e(F([Hd(new Bc(null, "not", "not", -1640422260, null), Hd(new Bc("impl", "full?", "impl/full?", -1337857039, null), new Bc(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  return this.ca.unshift(b);
};
function Mo(a, b) {
  this.ca = a;
  this.Vd = b;
  this.q = 0;
  this.g = 2;
}
Mo.prototype.J = function() {
  return this.ca.length;
};
Mo.prototype.Ac = function() {
  return!1;
};
Mo.prototype.Bc = function() {
  return this.ca.pop();
};
Mo.prototype.te = function(a, b) {
  this.ca.length === this.Vd && wo(this);
  return this.ca.unshift(b);
};
var No = null, Oo = Ko(32), Po = !1, Qo = !1;
function Ro() {
  Po = !0;
  Qo = !1;
  for (var a = 0;;) {
    var b = Oo.pop();
    if (null != b && (b.p ? b.p() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Po = !1;
  return 0 < Oo.length ? So.p ? So.p() : So.call(null) : null;
}
"undefined" !== typeof MessageChannel && (No = new MessageChannel, No.port1.onmessage = function() {
  return Ro();
});
function So() {
  var a = Qo;
  if (q(a ? Po : a)) {
    return null;
  }
  Qo = !0;
  return "undefined" !== typeof MessageChannel ? No.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(Ro) : s ? setTimeout(Ro, 0) : null;
}
function To(a) {
  Io(Oo, a);
  So();
}
;var Uo, Wo = function Vo(b) {
  "undefined" === typeof Uo && (Uo = function(b, d, e) {
    this.xa = b;
    this.mf = d;
    this.Bg = e;
    this.q = 0;
    this.g = 425984;
  }, Uo.T = !0, Uo.S = "cljs.core.async.impl.channels/t27418", Uo.V = function(b, d) {
    return ic(d, "cljs.core.async.impl.channels/t27418");
  }, Uo.prototype.Ib = function() {
    return this.xa;
  }, Uo.prototype.t = function() {
    return this.Bg;
  }, Uo.prototype.u = function(b, d) {
    return new Uo(this.xa, this.mf, d);
  });
  return new Uo(b, Vo, null);
};
function Xo(a, b) {
  this.Sb = a;
  this.xa = b;
}
function Yo(a) {
  return uo(a.Sb);
}
function Zo(a, b, c, d, e, f) {
  this.pc = a;
  this.Gc = b;
  this.Xc = c;
  this.Fc = d;
  this.ca = e;
  this.closed = f;
}
Zo.prototype.Cc = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.pc.pop();
      if (null != a) {
        To(function(a) {
          return function() {
            return a.b ? a.b(null) : a.call(null, null);
          };
        }(a.Qa, a));
      } else {
        break;
      }
    }
  }
  return null;
};
Zo.prototype.Af = function(a) {
  if (null != this.ca && 0 < H(this.ca)) {
    return Wo(this.ca.Bc(null));
  }
  for (;;) {
    var b = this.Xc.pop();
    if (null != b) {
      return a = b.xa, To(b.Sb.Qa), Wo(a);
    }
    if (this.closed) {
      return Wo(null);
    }
    64 < this.Gc ? (this.Gc = 0, Jo(this.pc, uo)) : this.Gc += 1;
    if (!(1024 > this.pc.length)) {
      throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending takes are allowed on a single channel.")].join("")), v("\n"), v(qg.e(F([Hd(new Bc(null, "\x3c", "\x3c", -1640531467, null), Hd(new Bc(null, ".-length", ".-length", 1395928862, null), new Bc(null, "takes", "takes", -1530407291, null)), new Bc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    Io(this.pc, a);
    return null;
  }
};
Zo.prototype.Dc = function(a, b, c) {
  if (null == b) {
    throw Error([v("Assert failed: "), v("Can't put nil in on a channel"), v("\n"), v(qg.e(F([Hd(new Bc(null, "not", "not", -1640422260, null), Hd(new Bc(null, "nil?", "nil?", -1637150201, null), new Bc(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if (this.closed) {
    return Wo(null);
  }
  for (;;) {
    a = this.pc.pop();
    if (null != a) {
      c = c.Qa, To(function(a) {
        return function() {
          return a.b ? a.b(b) : a.call(null, b);
        };
      }(a.Qa, c, a));
    } else {
      if (null == this.ca || this.ca.Ac(null)) {
        64 < this.Fc ? (this.Fc = 0, Jo(this.Xc, Yo)) : this.Fc += 1;
        if (!(1024 > this.Xc.length)) {
          throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending puts are allowed on a single channel."), v(" Consider using a windowed buffer.")].join("")), v("\n"), v(qg.e(F([Hd(new Bc(null, "\x3c", "\x3c", -1640531467, null), Hd(new Bc(null, ".-length", ".-length", 1395928862, null), new Bc(null, "puts", "puts", -1637078787, null)), new Bc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        Io(this.Xc, new Xo(c, b));
        return null;
      }
      c = c.Qa;
      this.ca.te(null, b);
    }
    return Wo(null);
  }
};
function $o(a, b, c) {
  this.key = a;
  this.xa = b;
  this.forward = c;
  this.q = 0;
  this.g = 2155872256;
}
$o.prototype.H = function(a, b, c) {
  return ig(b, og, "[", " ", "]", c, this);
};
$o.prototype.I = function() {
  return xb(xb(Hc, this.xa), this.key);
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
    return new $o(a, b, c);
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
var bp = function ap(b) {
  "undefined" === typeof ro && (ro = function(b, d, e) {
    this.Qa = b;
    this.Kd = d;
    this.Ag = e;
    this.q = 0;
    this.g = 393216;
  }, ro.T = !0, ro.S = "cljs.core.async/t24825", ro.V = function(b, d) {
    return ic(d, "cljs.core.async/t24825");
  }, ro.prototype.ue = function() {
    return!0;
  }, ro.prototype.t = function() {
    return this.Ag;
  }, ro.prototype.u = function(b, d) {
    return new ro(this.Qa, this.Kd, d);
  });
  return new ro(b, ap, null);
}, cp = function() {
  function a(a) {
    a = y.a(a, 0) ? null : a;
    a = "number" === typeof a ? new Lo(Ko(a), a) : a;
    return new Zo(Ko(32), 0, Ko(32), 0, a, null);
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
  c.p = b;
  c.b = a;
  return c;
}();
function dp() {
  return null;
}
var ep = function() {
  function a(a, b, c, d) {
    a = so(a, b, bp(c));
    q(q(a) ? be.a(c, dp) : a) && (q(d) ? c.p ? c.p() : c.call(null) : To(c));
    return null;
  }
  function b(a, b, c) {
    return d.i(a, b, c, !0);
  }
  function c(a, b) {
    return d.c(a, b, dp);
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
}(), fp = function() {
  function a(a, b, c) {
    var g = cp.b(1);
    To(function() {
      var k = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!Jd(b, V)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, Eo(c), V;
                    }
                    if (s) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!Jd(d, V)) {
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
            d.p = c;
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
            return V;
          }
          return 2 === k ? (l = g[7], g[1] = q(l) ? 4 : 5, V) : 3 === k ? (k = g[2], Do(g, k)) : 4 === k ? (l = g[7], k = B(l), Co(g, a, k)) : 5 === k ? (g[1] = q(c) ? 8 : 9, V) : 6 === k ? (k = g[2], g[2] = k, g[1] = 3, V) : 7 === k ? (l = g[7], k = g[2], l = E(l), g[8] = k, g[7] = l, g[2] = null, g[1] = 2, V) : 8 === k ? (k = to(a), g[2] = k, g[1] = 10, V) : 9 === k ? (g[2] = null, g[1] = 10, V) : 10 === k ? (k = g[2], g[2] = k, g[1] = 6, V) : null;
        });
      }(), l = function() {
        var a = k.p ? k.p() : k.call(null);
        a[6] = g;
        return a;
      }();
      return Ao(l);
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
function gp(a, b, c, d, e) {
  b = Xj.b(b);
  b = id(b) ? B(b) : b;
  var f = B(Pf(b)), g = B(Rf(b));
  return React.d.hb({href:"#", onClick:function(b) {
    b.preventDefault();
    return q(y.a ? y.a("asc", g) : y.call(null, "asc", g)) ? ep.a(a, new R(null, 2, 5, S, [c, new n(null, 1, [Xj, new tf([e, rh])], null)], null)) : q(y.a ? y.a("desc", g) : y.call(null, "desc", g)) ? ep.a(a, new R(null, 2, 5, S, [c, new n(null, 1, [Xj, new tf([e, ik])], null)], null)) : ep.a(a, new R(null, 2, 5, S, [c, new n(null, 1, [Xj, new tf([e, rh])], null)], null));
  }}, W(d), y.a(f, e) ? W(q(y.a ? y.a("asc", g) : y.call(null, "asc", g)) ? new R(null, 1, 5, S, [jj], null) : new R(null, 1, 5, S, [Qj], null)) : null);
}
function hp(a, b, c) {
  b = P(b) ? K.a(T, b) : b;
  var d = J.a(b, Yi), e = J.a(b, $g), f = J.a(b, ri);
  b = 0 < e ? new R(null, 2, 5, S, [Zi, new R(null, 3, 5, S, [Zh, new n(null, 2, [Pg, "#", fj, function(b) {
    b.preventDefault();
    b = e - d;
    return ep.a(a, new R(null, 2, 5, S, [c, new n(null, 1, [$g, 0 < b ? b : 0], null)], null));
  }], null), new R(null, 1, 5, S, [sk], null)], null)], null) : new R(null, 2, 5, S, [Zi, new R(null, 1, 5, S, [sk], null)], null);
  return O(b) ? React.d.M(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["paginate"], null)], null), b], 0))), function() {
    var a = [v(e + 1), v("-"), v(function() {
      var a = e + d;
      return a < f ? a : f;
    }()), v(" of "), v(f)].join("");
    return O(a) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["page"], null)], null), a], 0))), null) : React.d.span({className:"page"}, W(a));
  }(), e + d < f ? React.d.span({className:"next"}, React.d.hb({href:"#", onClick:function(b) {
    b.preventDefault();
    return ep.a(a, new R(null, 2, 5, S, [c, new n(null, 1, [$g, e + d], null)], null));
  }}, React.d.n({className:"icon-arrow-right"}))) : React.d.span({className:"next"}, React.d.n({className:"icon-arrow-right"}))) : React.d.M({className:"paginate"}, W(b), function() {
    var a = [v(e + 1), v("-"), v(function() {
      var a = e + d;
      return a < f ? a : f;
    }()), v(" of "), v(f)].join("");
    return O(a) ? React.d.span(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["page"], null)], null), a], 0))), null) : React.d.span({className:"page"}, W(a));
  }(), e + d < f ? React.d.span({className:"next"}, React.d.hb({href:"#", onClick:function(b) {
    b.preventDefault();
    return ep.a(a, new R(null, 2, 5, S, [c, new n(null, 1, [$g, e + d], null)], null));
  }}, React.d.n({className:"icon-arrow-right"}))) : React.d.span({className:"next"}, React.d.n({className:"icon-arrow-right"})));
}
;function ip(a) {
  Ck.call(this);
  this.Lf = a;
  this.da = [];
}
ta(ip, Ck);
var jp = [];
function kp(a, b, c, d) {
  "array" != m(c) && (jp[0] = c, c = jp);
  for (var e = 0;e < c.length;e++) {
    var f = ml(b, c[e], d || a, !1, a.Lf || a);
    a.da.push(f);
  }
}
ip.prototype.Da = function() {
  ip.Fb.Da.call(this);
  Ja(this.da, sl);
  this.da.length = 0;
};
ip.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function lp(a) {
  dl.call(this, "navigate");
  this.uh = a;
}
ta(lp, dl);
function mp(a, b, c, d) {
  Ck.call(this);
  if (a && !b) {
    throw Error("Can't use invisible history without providing a blank page.");
  }
  var e;
  c ? e = c : (e = "history_state" + np, document.write(ua(op, e, e)), e = ia(e) ? document.getElementById(e) : e);
  this.gc = e;
  this.Za = c ? Cm(c) ? Cm(c).parentWindow || Cm(c).defaultView : window : window;
  this.lf = this.Za.location.href.split("#")[0];
  this.Ic = b;
  Ok && !b && (this.Ic = "https" == window.location.protocol ? "https:///" : 'javascript:""');
  this.na = new yl(pp);
  b = ra(Fk, this.na);
  this.oc || (this.oc = []);
  this.oc.push(qa(b, void 0));
  this.Hb = !a;
  this.xb = new ip(this);
  if (a || qp) {
    d ? a = d : (a = "history_iframe" + np, d = this.Ic ? 'src\x3d"' + wa(this.Ic) + '"' : "", document.write(ua(rp, a, d)), a = ia(a) ? document.getElementById(a) : a), this.Tb = a, this.cf = !0;
  }
  qp && (kp(this.xb, this.Za, "load", this.Rg), this.bf = this.Ed = !1);
  this.Hb ? sp(this, tp(this), !0) : up(this, this.gc.value);
  np++;
}
ta(mp, xl);
mp.prototype.ec = !1;
mp.prototype.Wb = !1;
mp.prototype.Ub = null;
var vp = Ok && Ok && 8 <= al || Pk && Zk("1.9.2") || Qk && Zk("532.1"), qp = Ok && !(Ok && 8 <= al);
h = mp.prototype;
h.Vb = null;
h.Da = function() {
  mp.Fb.Da.call(this);
  this.xb.dc();
  wp(this, !1);
};
function wp(a, b) {
  if (b != a.ec) {
    if (qp && !a.Ed) {
      a.bf = b;
    } else {
      if (b) {
        if (Nk ? kp(a.xb, a.Za.document, xp, a.Vg) : Pk && kp(a.xb, a.Za, "pageshow", a.Ug), vp && a.Hb) {
          kp(a.xb, a.Za, "hashchange", a.Sg), a.ec = !0, a.dispatchEvent(new lp(tp(a)));
        } else {
          if (!Ok || a.Ed) {
            kp(a.xb, a.na, zl, qa(a.ke, a, !0)), a.ec = !0, qp || (a.Ub = tp(a), a.dispatchEvent(new lp(tp(a)))), a.na.start();
          }
        }
      } else {
        a.ec = !1;
        var c = a.xb;
        Ja(c.da, sl);
        c.da.length = 0;
        a.na.stop();
      }
    }
  }
}
h.Rg = function() {
  this.Ed = !0;
  this.gc.value && up(this, this.gc.value, !0);
  wp(this, this.bf);
};
h.Ug = function(a) {
  a.Jd.persisted && (wp(this, !1), wp(this, !0));
};
h.Sg = function() {
  var a = yp(this.Za);
  a != this.Ub && zp(this, a);
};
function tp(a) {
  return null != a.Vb ? a.Vb : a.Hb ? yp(a.Za) : Ap(a) || "";
}
function Bp(a, b) {
  tp(a) != b && (a.Hb ? (sp(a, b, !1), vp || Ok && up(a, b, !1, void 0), a.ec && a.ke()) : (up(a, b, !1), a.Vb = a.Ub = a.gc.value = b, a.dispatchEvent(new lp(b))));
}
function yp(a) {
  a = a.location.href;
  var b = a.indexOf("#");
  return 0 > b ? "" : a.substring(b + 1);
}
function sp(a, b, c) {
  var d = a.Za.location;
  a = a.lf;
  var e = -1 != d.href.indexOf("#");
  if (qp || e || b) {
    a += "#" + b;
  }
  a != d.href && (c ? d.replace(a) : d.href = a);
}
function up(a, b, c, d) {
  if (a.cf || b != Ap(a)) {
    if (a.cf = !1, b = encodeURIComponent(String(b)), Ok) {
      var e = a.Tb.contentDocument || a.Tb.contentWindow.document;
      e.open("text/html", c ? "replace" : void 0);
      e.write(ua(Cp, wa(d || a.Za.document.title), b));
      e.close();
    } else {
      if (b = a.Ic + "#" + b, a = a.Tb.contentWindow) {
        c ? a.location.replace(b) : a.location.href = b;
      }
    }
  }
}
function Ap(a) {
  if (Ok) {
    return a = a.Tb.contentDocument || a.Tb.contentWindow.document, a.body ? decodeURIComponent(a.body.innerHTML.replace(/\+/g, " ")) : null;
  }
  var b = a.Tb.contentWindow;
  if (b) {
    var c;
    try {
      c = decodeURIComponent(yp(b).replace(/\+/g, " "));
    } catch (d) {
      return a.Wb || (!0 != a.Wb && a.na.setInterval(Dp), a.Wb = !0), null;
    }
    a.Wb && (!1 != a.Wb && a.na.setInterval(pp), a.Wb = !1);
    return c || null;
  }
  return null;
}
h.ke = function() {
  if (this.Hb) {
    var a = yp(this.Za);
    a != this.Ub && zp(this, a);
  }
  if (!this.Hb || qp) {
    if (a = Ap(this) || "", null == this.Vb || a == this.Vb) {
      this.Vb = null, a != this.Ub && zp(this, a);
    }
  }
};
function zp(a, b) {
  a.Ub = a.gc.value = b;
  a.Hb ? (qp && up(a, b), sp(a, b)) : up(a, b);
  a.dispatchEvent(new lp(tp(a)));
}
h.Vg = function() {
  this.na.stop();
  this.na.start();
};
var xp = ["mousedown", "keydown", "mousemove"], Cp = "\x3ctitle\x3e%s\x3c/title\x3e\x3cbody\x3e%s\x3c/body\x3e", rp = '\x3ciframe id\x3d"%s" style\x3d"display:none" %s\x3e\x3c/iframe\x3e', op = '\x3cinput type\x3d"text" name\x3d"%s" id\x3d"%s" style\x3d"display:none"\x3e', np = 0, pp = 150, Dp = 1E4;
function Ep(a) {
  a = null == a ? null : new Date(a);
  a = null == a ? null : a.getYear();
  return null == a ? null : a + 1900;
}
;var Fp, Gp;
function Hp(a, b, c) {
  var d = P(c) ? K.a(T, c) : c, e = J.a(d, wk), f = J.a(d, zh), g = e.a ? e.a(Wh, a) : e.call(null, Wh, a);
  "undefined" === typeof Fp && (Fp = function(a, b, c, d, e, f, g, N, ba) {
    this.cc = a;
    this.Y = b;
    this.C = c;
    this.va = d;
    this.Rf = e;
    this.Zg = f;
    this.w = g;
    this.Ga = N;
    this.mg = ba;
    this.q = 0;
    this.g = 393216;
  }, Fp.T = !0, Fp.S = "clustermap.components.full-report.company-site-list/t22878", Fp.V = function(a, b) {
    return ic(b, "clustermap.components.full-report.company-site-list/t22878");
  }, Fp.prototype.Ja = !0, Fp.prototype.Fa = function() {
    var a = this;
    return React.d.fb(null, function() {
      var b = a.Y.a ? a.Y.a(Wh, new n(null, 2, [dh, pk.b(a.Ga), ei, zk.b(a.Ga)], null)) : a.Y.call(null, Wh, new n(null, 2, [dh, pk.b(a.Ga), ei, zk.b(a.Ga)], null));
      return O(b) ? React.d.s(X(b), null) : React.d.s(null, W(b));
    }(), function() {
      var b = Yh.b(a.Ga);
      return O(b) ? React.d.s(X(b), null) : React.d.s(null, W(b));
    }(), function() {
      var b = a.Y.a ? a.Y.a(ck, new n(null, 2, [Gi, Gi.b(a.Ga), ei, ej.b(a.Ga)], null)) : a.Y.call(null, ck, new n(null, 2, [Gi, Gi.b(a.Ga), ei, ej.b(a.Ga)], null));
      return O(b) ? React.d.s(X(b), null) : React.d.s(null, W(b));
    }(), function() {
      var b = a.Y.a ? a.Y.a(Ch, new n(null, 2, [Dh, Dh.b(a.Ga), ok, hh.b(a.Ga)], null)) : a.Y.call(null, Ch, new n(null, 2, [Dh, Dh.b(a.Ga), ok, hh.b(a.Ga)], null));
      return O(b) ? React.d.s(X(b), null) : React.d.s(null, W(b));
    }());
  }, Fp.prototype.t = function() {
    return this.mg;
  }, Fp.prototype.u = function(a, b) {
    return new Fp(this.cc, this.Y, this.C, this.va, this.Rf, this.Zg, this.w, this.Ga, b);
  });
  return new Fp(g, f, e, d, d, c, b, a, null);
}
var Jp = function Ip(b, c, d) {
  var e = En.a(c, ai);
  "undefined" === typeof Gp && (Gp = function(b, c, d, e, p, t) {
    this.r = b;
    this.va = c;
    this.w = d;
    this.Ha = e;
    this.Ef = p;
    this.ng = t;
    this.q = 0;
    this.g = 393216;
  }, Gp.T = !0, Gp.S = "clustermap.components.full-report.company-site-list/t22899", Gp.V = function(b, c) {
    return ic(c, "clustermap.components.full-report.company-site-list/t22899");
  }, Gp.prototype.Ja = !0, Gp.prototype.Fa = function() {
    var b = this, c = hp(b.r, b.Ha, Qg);
    return O(c) ? React.d.M(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["full-report-list"], null)], null), c], 0))), React.d.M({className:"table-responsive"}, React.d.table({className:"table"}, React.d.ad(null, React.d.fb(null, function() {
      var c = gp(b.r, b.Ha, Qg, "Portfolio Company", Yg);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), function() {
      var c = gp(b.r, b.Ha, Qg, "Postcode", aj);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), function() {
      var c = gp(b.r, b.Ha, Qg, "Investor", Di);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), function() {
      var c = gp(b.r, b.Ha, Qg, "Constituency", gj);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }())), function() {
      var c = Tn.c(Hp, kh.b(b.Ha), new n(null, 2, [Ph, Hi, Oj, b.va], null));
      return O(c) ? React.d.ob(X(c), null) : React.d.ob(null, W(c));
    }())), W(hp(b.r, b.Ha, Qg))) : React.d.M({className:"full-report-list"}, W(c), React.d.M({className:"table-responsive"}, React.d.table({className:"table"}, React.d.ad(null, React.d.fb(null, function() {
      var c = gp(b.r, b.Ha, Qg, "Portfolio Company", Yg);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), function() {
      var c = gp(b.r, b.Ha, Qg, "Postcode", aj);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), function() {
      var c = gp(b.r, b.Ha, Qg, "Investor", Di);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), function() {
      var c = gp(b.r, b.Ha, Qg, "Constituency", gj);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }())), function() {
      var c = Tn.c(Hp, kh.b(b.Ha), new n(null, 2, [Ph, Hi, Oj, b.va], null));
      return O(c) ? React.d.ob(X(c), null) : React.d.ob(null, W(c));
    }())), W(hp(b.r, b.Ha, Qg)));
  }, Gp.prototype.t = function() {
    return this.ng;
  }, Gp.prototype.u = function(b, c) {
    return new Gp(this.r, this.va, this.w, this.Ha, this.Ef, c);
  });
  return new Gp(e, d, c, b, Ip, null);
};
var Kp, Lp;
function Mp(a, b, c, d) {
  var e = B(d);
  return E(d) ? (a = a.a ? a.a(c, e) : a.call(null, c, e), O(a) ? React.d.M(X(a), React.d.hb({href:b}, "\u00a0(more...)")) : React.d.M(null, W(a), React.d.hb({href:b}, "\u00a0(more...)"))) : a.a ? a.a(c, e) : a.call(null, c, e);
}
function Np(a) {
  return null == a ? null : 0 < a ? React.d.n({className:"icon-positive"}) : 0 > a ? React.d.n({className:"icon-negative"}) : null;
}
var Pp = function Op(b, c, d) {
  var e = P(d) ? K.a(T, d) : d, f = J.a(e, wk), g = J.a(e, zh), k = f.a ? f.a(Wh, b) : f.call(null, Wh, b);
  "undefined" === typeof Kp && (Kp = function(b, c, d, e, f, g, k, ba, U, aa) {
    this.cc = b;
    this.Y = c;
    this.C = d;
    this.va = e;
    this.Qf = f;
    this.Yg = g;
    this.w = k;
    this.ia = ba;
    this.Wc = U;
    this.kg = aa;
    this.q = 0;
    this.g = 393216;
  }, Kp.T = !0, Kp.S = "clustermap.components.full-report.company-list/t22815", Kp.V = function(b, c) {
    return ic(c, "clustermap.components.full-report.company-list/t22815");
  }, Kp.prototype.Ja = !0, Kp.prototype.Fa = function() {
    var b = this;
    return React.d.fb(null, function() {
      var c = b.Y.a ? b.Y.a(Wh, b.ia) : b.Y.call(null, Wh, b.ia);
      return O(c) ? React.d.s(X(c), null) : React.d.s(null, W(c));
    }(), function() {
      var c = Mp(b.Y, b.cc, ck, ak.b(b.ia));
      return O(c) ? React.d.s(X(c), null) : React.d.s(null, W(c));
    }(), function() {
      var c = Mp(b.Y, b.cc, Ch, function() {
        var c = b.ia, d = null == c ? null : ph.b(c);
        return null == d ? null : ve(function() {
          return function(b) {
            return y.a("uk_constituencies", yh.b(b));
          };
        }(c, d), d);
      }());
      return O(c) ? React.d.s(X(c), null) : React.d.s(null, W(c));
    }(), function() {
      var c = $n.m ? $n.m(ki.b(b.ia), Fj, 2, z, "-") : $n.call(null, ki.b(b.ia), Fj, 2, z, "-");
      return O(c) ? React.d.s(X(c), React.d.small(null, "\u00a0(", W(function() {
        var c = Ep(jh.b(b.ia));
        return q(c) ? c : "no info";
      }()), ")")) : React.d.s(null, W(c), React.d.small(null, "\u00a0(", W(function() {
        var c = Ep(jh.b(b.ia));
        return q(c) ? c : "no info";
      }()), ")"));
    }(), function() {
      var c = Np(mj.b(b.ia));
      return O(c) ? React.d.s(X(c), null) : React.d.s(null, W(c));
    }(), function() {
      var c = $n.m ? $n.m(mj.b(b.ia), Fj, 2, z, "-") : $n.call(null, mj.b(b.ia), Fj, 2, z, "-");
      return O(c) ? React.d.s(X(c), null) : React.d.s(null, W(c));
    }(), function() {
      var c = Z.m ? Z.m(Lj.b(b.ia), kj, 0, z, "-") : Z.call(null, Lj.b(b.ia), kj, 0, z, "-");
      return O(c) ? React.d.s(X(c), React.d.small(null, "\u00a0(", W(function() {
        var c = Ep(jh.b(b.ia));
        return q(c) ? c : "no info";
      }()), ")")) : React.d.s(null, W(c), React.d.small(null, "\u00a0(", W(function() {
        var c = Ep(jh.b(b.ia));
        return q(c) ? c : "no info";
      }()), ")"));
    }(), function() {
      var c = Np(ih.b(b.ia));
      return O(c) ? React.d.s(X(c), null) : React.d.s(null, W(c));
    }(), function() {
      var c = Z.m ? Z.m(ih.b(b.ia), kj, 0, z, "-") : Z.call(null, ih.b(b.ia), kj, 0, z, "-");
      return O(c) ? React.d.s(X(c), null) : React.d.s(null, W(c));
    }());
  }, Kp.prototype.t = function() {
    return this.kg;
  }, Kp.prototype.u = function(b, c) {
    return new Kp(this.cc, this.Y, this.C, this.va, this.Qf, this.Yg, this.w, this.ia, this.Wc, c);
  });
  return new Kp(k, g, f, e, e, d, c, b, Op, null);
}, Rp = function Qp(b, c, d) {
  var e = En.a(c, ai);
  "undefined" === typeof Lp && (Lp = function(b, c, d, e, p, t) {
    this.r = b;
    this.va = c;
    this.w = d;
    this.Aa = e;
    this.Df = p;
    this.lg = t;
    this.q = 0;
    this.g = 393216;
  }, Lp.T = !0, Lp.S = "clustermap.components.full-report.company-list/t22848", Lp.V = function(b, c) {
    return ic(c, "clustermap.components.full-report.company-list/t22848");
  }, Lp.prototype.Ja = !0, Lp.prototype.Fa = function() {
    var b = this, c = hp(b.r, b.Aa, Pj);
    return O(c) ? React.d.M(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["full-report-list"], null)], null), c], 0))), React.d.M({className:"table-responsive"}, React.d.table({className:"table"}, React.d.ad(null, React.d.fb(null, function() {
      var c = gp(b.r, b.Aa, Pj, "Portfolio Company", ei);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), React.d.v(null, "Investor"), React.d.v(null, "Constituency"), function() {
      var c = gp(b.r, b.Aa, Pj, "Revenue", ki);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), React.d.v({colSpan:"2"}, W(gp(b.r, b.Aa, Pj, "Rev. change", mj))), function() {
      var c = gp(b.r, b.Aa, Pj, "Employees", Lj);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), React.d.v({colSpan:"2"}, W(gp(b.r, b.Aa, Pj, "Emp. change", ih))))), function() {
      var c = Tn.c(Pp, kh.b(b.Aa), new n(null, 2, [Ph, dh, Oj, b.va], null));
      return O(c) ? React.d.ob(X(c), null) : React.d.ob(null, W(c));
    }())), W(hp(b.r, b.Aa, Pj))) : React.d.M({className:"full-report-list"}, W(c), React.d.M({className:"table-responsive"}, React.d.table({className:"table"}, React.d.ad(null, React.d.fb(null, function() {
      var c = gp(b.r, b.Aa, Pj, "Portfolio Company", ei);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), React.d.v(null, "Investor"), React.d.v(null, "Constituency"), function() {
      var c = gp(b.r, b.Aa, Pj, "Revenue", ki);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), React.d.v({colSpan:"2"}, W(gp(b.r, b.Aa, Pj, "Rev. change", mj))), function() {
      var c = gp(b.r, b.Aa, Pj, "Employees", Lj);
      return O(c) ? React.d.v(X(c), null) : React.d.v(null, W(c));
    }(), React.d.v({colSpan:"2"}, W(gp(b.r, b.Aa, Pj, "Emp. change", ih))))), function() {
      var c = Tn.c(Pp, kh.b(b.Aa), new n(null, 2, [Ph, dh, Oj, b.va], null));
      return O(c) ? React.d.ob(X(c), null) : React.d.ob(null, W(c));
    }())), W(hp(b.r, b.Aa, Pj)));
  }, Lp.prototype.t = function() {
    return this.lg;
  }, Lp.prototype.u = function(b, c) {
    return new Lp(this.r, this.va, this.w, this.Aa, this.Df, c);
  });
  return new Lp(e, d, c, b, Qp, null);
};
function Sp(a) {
  if (a ? a.ve : a) {
    return a.ve();
  }
  var b;
  b = Sp[m(null == a ? null : a)];
  if (!b && (b = Sp._, !b)) {
    throw u("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function Up(a, b) {
  if (a ? a.we : a) {
    return a.we(0, b);
  }
  var c;
  c = Up[m(null == a ? null : a)];
  if (!c && (c = Up._, !c)) {
    throw u("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function Vp(a, b, c) {
  this.O = a;
  this.buffer = b;
  this.Pd = c;
}
Vp.prototype.ve = function() {
  return 0 === this.buffer.length ? (this.Pd += 1, this.O[this.Pd]) : this.buffer.pop();
};
Vp.prototype.we = function(a, b) {
  return this.buffer.push(b);
};
function Wp(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return q(b) ? b : "," === a;
}
var Xp = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(K.a(v, b));
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
function Yp(a, b) {
  for (var c = new Xa(b), d = Sp(a);;) {
    var e;
    if (!(e = null == d) && !(e = Wp(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? Zp.b ? Zp.b(e) : Zp.call(null, e) : f : f : f;
    }
    if (e) {
      return Up(a, d), c.toString();
    }
    c.append(d);
    d = Sp(a);
  }
}
function $p(a) {
  for (;;) {
    var b = Sp(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var aq = hg("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?"), bq = hg("([-+]?[0-9]+)/([0-9]+)"), cq = hg("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?"), dq = hg("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
function eq(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === c.length ? c[0] : c;
}
function fq(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
var gq = hg("[0-9A-Fa-f]{2}"), hq = hg("[0-9A-Fa-f]{4}");
function iq(a, b, c, d) {
  return q(fg(a, d)) ? d : Xp.e(b, F(["Unexpected unicode escape \\", c, d], 0));
}
function jq(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function kq(a) {
  var b = Sp(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  return q(c) ? c : "x" === b ? jq(iq(gq, a, b, (new Xa(Sp(a), Sp(a))).toString())) : "u" === b ? jq(iq(hq, a, b, (new Xa(Sp(a), Sp(a), Sp(a), Sp(a))).toString())) : /[^0-9]/.test(b) ? s ? Xp.e(a, F(["Unexpected unicode escape \\", b], 0)) : null : String.fromCharCode(b);
}
function lq(a, b) {
  for (var c = oc(We);;) {
    var d;
    a: {
      d = Wp;
      for (var e = b, f = Sp(e);;) {
        if (q(d.b ? d.b(f) : d.call(null, f))) {
          f = Sp(e);
        } else {
          d = f;
          break a;
        }
      }
      d = void 0;
    }
    q(d) || Xp.e(b, F(["EOF while reading"], 0));
    if (a === d) {
      return qc(c);
    }
    e = Zp.b ? Zp.b(d) : Zp.call(null, d);
    q(e) ? d = e.a ? e.a(b, d) : e.call(null, b, d) : (Up(b, d), d = mq.i ? mq.i(b, !0, null, !0) : mq.call(null, b, !0, null));
    c = d === b ? c : pc(c, d);
  }
}
function nq(a, b) {
  return Xp.e(a, F(["Reader for ", b, " not implemented yet"], 0));
}
function oq(a, b) {
  var c = Sp(a), d = pq.b ? pq.b(c) : pq.call(null, c);
  if (q(d)) {
    return d.a ? d.a(a, b) : d.call(null, a, b);
  }
  d = qq.a ? qq.a(a, c) : qq.call(null, a, c);
  return q(d) ? d : Xp.e(a, F(["No dispatch macro for ", c], 0));
}
function rq(a, b) {
  return Xp.e(a, F(["Unmached delimiter ", b], 0));
}
function sq(a) {
  return K.a(Hd, lq(")", a));
}
function tq(a) {
  return lq("]", a);
}
function uq(a) {
  var b = lq("}", a);
  var c = H(b);
  if ("number" !== typeof c || isNaN(c) || Infinity === c || parseFloat(c) !== parseInt(c, 10)) {
    throw Error([v("Argument must be an integer: "), v(c)].join(""));
  }
  0 !== (c & 1) && Xp.e(a, F(["Map literal must contain an even number of forms"], 0));
  return K.a(T, b);
}
function vq(a) {
  for (var b = new Xa, c = Sp(a);;) {
    if (null == c) {
      return Xp.e(a, F(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(kq(a)), c = Sp(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      if (z) {
        b.append(c), c = Sp(a);
      } else {
        return null;
      }
    }
  }
}
function wq(a, b) {
  var c = Yp(a, b);
  if (q(-1 != c.indexOf("/"))) {
    c = Ec.a(Ad.c(c, 0, c.indexOf("/")), Ad.c(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = Ec.b(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : s ? d : null
  }
  return c;
}
function xq(a) {
  var b = Yp(a, Sp(a)), c = fq(dq, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? Xp.e(a, F(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Ld.a(d.substring(0, d.indexOf("/")), c) : Ld.b(b);
}
function yq(a) {
  return function(b) {
    return xb(xb(Hc, mq.i ? mq.i(b, !0, null, !0) : mq.call(null, b, !0, null)), a);
  };
}
function zq() {
  return function(a) {
    return Xp.e(a, F(["Unreadable form"], 0));
  };
}
function Aq(a) {
  var b;
  b = mq.i ? mq.i(a, !0, null, !0) : mq.call(null, a, !0, null);
  b = b instanceof Bc ? new n(null, 1, [rk, b], null) : "string" === typeof b ? new n(null, 1, [rk, b], null) : b instanceof Q ? new tf([b, !0]) : s ? b : null;
  O(b) || Xp.e(a, F(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = mq.i ? mq.i(a, !0, null, !0) : mq.call(null, a, !0, null);
  return(c ? c.g & 262144 || c.zf || (c.g ? 0 : r(Xb, c)) : r(Xb, c)) ? Tc(c, Sf.e(F([cd(c), b], 0))) : Xp.e(a, F(["Metadata can only be applied to IWithMetas"], 0));
}
function Bq(a) {
  return Xf(lq("}", a));
}
function Cq(a) {
  return hg(vq(a));
}
function Dq(a) {
  mq.i ? mq.i(a, !0, null, !0) : mq.call(null, a, !0, null);
  return a;
}
function Zp(a) {
  return'"' === a ? vq : ":" === a ? xq : ";" === a ? $p : "'" === a ? yq(new Bc(null, "quote", "quote", -1532577739, null)) : "@" === a ? yq(new Bc(null, "deref", "deref", -1545057749, null)) : "^" === a ? Aq : "`" === a ? nq : "~" === a ? nq : "(" === a ? sq : ")" === a ? rq : "[" === a ? tq : "]" === a ? rq : "{" === a ? uq : "}" === a ? rq : "\\" === a ? Sp : "#" === a ? oq : null;
}
function pq(a) {
  return "{" === a ? Bq : "\x3c" === a ? zq() : '"' === a ? Cq : "!" === a ? $p : "_" === a ? Dq : null;
}
function mq(a, b, c) {
  for (;;) {
    var d = Sp(a);
    if (null == d) {
      return q(b) ? Xp.e(a, F(["EOF while reading"], 0)) : c;
    }
    if (!Wp(d)) {
      if (";" === d) {
        a = $p.a ? $p.a(a, d) : $p.call(null, a);
      } else {
        if (s) {
          var e = Zp(d);
          if (q(e)) {
            e = e.a ? e.a(a, d) : e.call(null, a, d);
          } else {
            var e = a, f = void 0;
            !(f = !/[^0-9]/.test(d)) && (f = void 0, f = "+" === d || "-" === d) && (f = Sp(e), Up(e, f), f = !/[^0-9]/.test(f));
            if (f) {
              a: {
                e = a;
                d = new Xa(d);
                for (f = Sp(e);;) {
                  var g;
                  g = null == f;
                  g || (g = (g = Wp(f)) ? g : Zp.b ? Zp.b(f) : Zp.call(null, f));
                  if (q(g)) {
                    Up(e, f);
                    d = d.toString();
                    if (q(fq(aq, d))) {
                      if (g = eq(aq, d), f = g[2], null == f || 1 > f.length) {
                        var f = "-" === g[1] ? -1 : 1, k = q(g[3]) ? [g[3], 10] : q(g[4]) ? [g[4], 16] : q(g[5]) ? [g[5], 8] : q(g[7]) ? [g[7], parseInt(g[7])] : z ? [null, null] : null;
                        g = k[0];
                        k = k[1];
                        f = null == g ? null : f * parseInt(g, k);
                      } else {
                        f = 0;
                      }
                    } else {
                      q(fq(bq, d)) ? (f = eq(bq, d), f = parseInt(f[1]) / parseInt(f[2])) : f = q(fq(cq, d)) ? parseFloat(d) : null;
                    }
                    e = q(f) ? f : Xp.e(e, F(["Invalid number format [", d, "]"], 0));
                    break a;
                  }
                  d.append(f);
                  f = Sp(e);
                }
                e = void 0;
              }
            } else {
              e = s ? wq(a, d) : null;
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
function Eq(a) {
  if (y.a(3, H(a))) {
    return a;
  }
  if (3 < H(a)) {
    return Ad.c(a, 0, 3);
  }
  if (s) {
    for (a = new Xa(a);;) {
      if (3 > a.qb.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var Fq = function() {
  var a = new R(null, 13, 5, S, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new R(null, 13, 5, S, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return J.a(q(d) ? b : a, c);
  };
}(), Gq = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Hq(a) {
  a = parseInt(a);
  return ib(isNaN(a)) ? a : null;
}
function Iq(a, b, c, d) {
  a <= b && b <= c || Xp.e(null, F([[v(d), v(" Failed:  "), v(a), v("\x3c\x3d"), v(b), v("\x3c\x3d"), v(c)].join("")], 0));
  return b;
}
function Jq(a) {
  var b = fg(Gq, a);
  I.c(b, 0, null);
  var c = I.c(b, 1, null), d = I.c(b, 2, null), e = I.c(b, 3, null), f = I.c(b, 4, null), g = I.c(b, 5, null), k = I.c(b, 6, null), l = I.c(b, 7, null), p = I.c(b, 8, null), t = I.c(b, 9, null), x = I.c(b, 10, null);
  if (ib(b)) {
    return Xp.e(null, F([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
  }
  a = Hq(c);
  var b = function() {
    var a = Hq(d);
    return q(a) ? a : 1;
  }(), c = function() {
    var a = Hq(e);
    return q(a) ? a : 1;
  }(), D = function() {
    var a = Hq(f);
    return q(a) ? a : 0;
  }(), M = function() {
    var a = Hq(g);
    return q(a) ? a : 0;
  }(), N = function() {
    var a = Hq(k);
    return q(a) ? a : 0;
  }(), ba = function() {
    var a = Hq(Eq(l));
    return q(a) ? a : 0;
  }(), p = (y.a(p, "-") ? -1 : 1) * (60 * function() {
    var a = Hq(t);
    return q(a) ? a : 0;
  }() + function() {
    var a = Hq(x);
    return q(a) ? a : 0;
  }());
  return new R(null, 8, 5, S, [a, Iq(1, b, 12, "timestamp month field must be in range 1..12"), Iq(1, c, Fq.a ? Fq.a(b, 0 === vd(a, 4) && (0 !== vd(a, 100) || 0 === vd(a, 400))) : Fq.call(null, b, 0 === vd(a, 4) && (0 !== vd(a, 100) || 0 === vd(a, 400))), "timestamp day field must be in range 1..last day in month"), Iq(0, D, 23, "timestamp hour field must be in range 0..23"), Iq(0, M, 59, "timestamp minute field must be in range 0..59"), Iq(0, N, y.a(M, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), 
  Iq(0, ba, 999, "timestamp millisecond field must be in range 0..999"), p], null);
}
var Kq = ug.b(new n(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = Jq(a), q(b)) {
      a = I.c(b, 0, null);
      var c = I.c(b, 1, null), d = I.c(b, 2, null), e = I.c(b, 3, null), f = I.c(b, 4, null), g = I.c(b, 5, null), k = I.c(b, 6, null);
      b = I.c(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, k) - 6E4 * b);
    } else {
      b = Xp.e(null, F([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
    }
  } else {
    b = Xp.e(null, F(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Ig(a) : Xp.e(null, F(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return jd(a) ? ze(jf, a) : Xp.e(null, F(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (jd(a)) {
    var b = [];
    a = A(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.A(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = A(a)) {
          c = a, kd(c) ? (a = uc(c), e = vc(c), c = a, d = H(a), a = e) : (a = B(c), b.push(a), a = E(c), c = null, d = 0), e = 0;
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
        var g = c.A(null, e), f = I.c(g, 0, null), g = I.c(g, 1, null);
        b[Kd(f)] = g;
        e += 1;
      } else {
        if (a = A(a)) {
          kd(a) ? (d = uc(a), a = vc(a), c = d, d = H(d)) : (d = B(a), c = I.c(d, 0, null), d = I.c(d, 1, null), b[Kd(c)] = d, a = E(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return s ? Xp.e(null, F([[v("JS literal expects a vector or map containing "), v("only string or unqualified keyword keys")].join("")], 0)) : null;
}], null)), Lq = ug.b(null);
function qq(a, b) {
  var c = wq(a, b), d = J.a(Ub(Kq), "" + v(c)), e = Ub(Lq);
  return q(d) ? d.b ? d.b(mq(a, !0, null)) : d.call(null, mq(a, !0, null)) : q(e) ? e.a ? e.a(c, mq(a, !0, null)) : e.call(null, c, mq(a, !0, null)) : s ? Xp.e(a, F(["Could not find tag parser for ", "" + v(c), " in ", qg.e(F([Pf(Ub(Kq))], 0))], 0)) : null;
}
;function Mq(a) {
  if ("string" === typeof a) {
    return a;
  }
  if (ad(a)) {
    var b = a.prototype.Yh;
    return q(b) ? [v("[crateGroup\x3d"), v(b), v("]")].join("") : a;
  }
  return a instanceof Q ? Kd(a) : s ? a : null;
}
var Nq = function() {
  function a(a, b) {
    return jQuery(Mq(a), b);
  }
  function b(a) {
    return jQuery(Mq(a));
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
        return Fb.a(this, c);
      case 3:
        return Fb.c(this, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(lb(b)));
};
h.b = function(a) {
  return Fb.a(this, a);
};
h.a = function(a, b) {
  return Fb.c(this, a, b);
};
h.me = !0;
h.fa = function(a, b) {
  return Jc.a(this, b);
};
h.ga = function(a, b, c) {
  return Jc.c(this, b, c);
};
h.yd = !0;
h.K = function(a, b) {
  var c = this.slice(b, b + 1);
  return q(c) ? c : null;
};
h.L = function(a, b, c) {
  return w.c(this, b, c);
};
h.yf = !0;
h.Lb = !0;
h.A = function(a, b) {
  return b < H(this) ? this.slice(b, b + 1) : null;
};
h.qa = function(a, b, c) {
  return b < H(this) ? this.slice(b, b + 1) : void 0 === c ? null : c;
};
h.ac = !0;
h.J = function() {
  return this.length;
};
h.Mb = !0;
h.X = function() {
  return this.get(0);
};
h.ha = function() {
  return 1 < H(this) ? this.slice(1) : Hc;
};
h.sb = !0;
h.I = function() {
  return q(this.get(0)) ? this : null;
};
function Oq(a) {
  a = "" + v(a);
  return mq(new Vp(a, [], -1), !0, null);
}
jQuery.ai(Cg(new n(null, 3, [Xi, new n(null, 2, [mh, "application/edn, text/edn", Mi, "application/clojure, text/clojure"], null), vk, new n(null, 1, ["clojure", /edn|clojure/], null), Dj, new n(null, 2, ["text edn", Oq, "text clojure", Oq], null)], null)));
var Pq;
function Qq(a, b, c) {
  c = P(c) ? K.a(T, c) : c;
  J.a(c, Zj);
  c = J.a(c, pi);
  var d = ie.a(ah, a), e = ie.a(Kj, a), f = ie.a(function() {
    return function(a) {
      return Be.a(a, new R(null, 2, 5, S, [Kj, hi], null));
    };
  }(d, e), a);
  a = ie.a(function() {
    return function(a) {
      return Be.a(a, new R(null, 2, 5, S, [Kj, Sh], null));
    };
  }(d, e, f), a);
  return Nq.b(b).Mf(Cg(new n(null, 5, [Nh, new n(null, 2, [uh, null, nk, 300], null), Ui, new n(null, 1, [Ug, null], null), Ej, new n(null, 2, [nj, d, Lg, new n(null, 1, [xk, 270], null)], null), yj, new R(null, 1, 5, S, [new n(null, 2, [Ui, new n(null, 1, [Ug, c], null), Jj, 0], null)], null), Rj, new R(null, 1, 5, S, [new n(null, 4, [ei, [v("Mean "), v(c)].join(""), vj, "line", yj, 0, Wg, a], null)], null)], null)));
}
var Sq = function Rq(b, c, d) {
  var e = P(d) ? K.a(T, d) : d, f = J.a(e, hk);
  "undefined" === typeof Pq && (Pq = function(b, c, d, e, f, x, D, M) {
    this.id = b;
    this.va = c;
    this.hg = d;
    this.gh = e;
    this.w = f;
    this.data = x;
    this.sh = D;
    this.yg = M;
    this.q = 0;
    this.g = 393216;
  }, Pq.T = !0, Pq.S = "clustermap.components.timeline-chart/t23616", Pq.V = function(b, c) {
    return ic(c, "clustermap.components.timeline-chart/t23616");
  }, Pq.prototype.Se = !0, Pq.prototype.Yd = function() {
    return Qq(this.data, Vn(this.w, "chart"), this.va);
  }, Pq.prototype.Re = !0, Pq.prototype.Xd = function() {
    var b = this;
    Qq(b.data, Vn(b.w, "chart"), b.va);
    return Nq.b(document).nc("clustermap-change-view", function() {
      var c = Nq.b(Vn(b.w, "chart"));
      return q(c.Bi(":visible")) ? c.Mf().Ti() : null;
    });
  }, Pq.prototype.Ja = !0, Pq.prototype.Fa = function() {
    return React.d.M({className:"timeline-chart", id:this.id, ref:"chart"});
  }, Pq.prototype.t = function() {
    return this.yg;
  }, Pq.prototype.u = function(b, c) {
    return new Pq(this.id, this.va, this.hg, this.gh, this.w, this.data, this.sh, c);
  });
  return new Pq(f, e, e, d, c, b, Rq, null);
};
var Tq, Vq = function Uq(b, c) {
  "undefined" === typeof Tq && (Tq = function(b, c, f, g) {
    this.w = b;
    this.data = c;
    this.pf = f;
    this.jg = g;
    this.q = 0;
    this.g = 393216;
  }, Tq.T = !0, Tq.S = "clustermap.components.full-report.charts/t22785", Tq.V = function(b, c) {
    return ic(c, "clustermap.components.full-report.charts/t22785");
  }, Tq.prototype.Ja = !0, Tq.prototype.Fa = function() {
    var b;
    b = Ni.b(this.data);
    b = q(b) ? new R(null, 2, 5, S, [ij, new R(null, 2, 5, S, [fi, new R(null, 2, 5, S, [ek, new R(null, 2, 5, S, [fi, new R(null, 3, 5, S, [cj, new R(null, 2, 5, S, [Vj, new R(null, 3, 5, S, [gh, new R(null, 2, 5, S, [ii, "Turnover"], null), Sn.c(Sq, qj.b(b), new n(null, 2, [Oj, new n(null, 3, [hk, "turnover-timeline-chart", pi, "Turnover", Zj, "# Filings"], null), Fh, "turnover-timeline-chart"], null))], null)], null), new R(null, 2, 5, S, [Vj, new R(null, 3, 5, S, [Qi, new R(null, 2, 5, S, [ii, 
    "Employment"], null), Sn.c(Sq, Li.b(b), new n(null, 2, [Oj, new n(null, 3, [hk, "employment-timeline-chart", pi, "Employment", Zj, "# Filings"], null), Fh, "employment-timeline-chart"], null))], null)], null)], null)], null)], null)], null)], null) : null;
    return O(b) ? React.d.M(X(Vm.e(F([new n(null, 1, [Qh, new R(null, 1, 5, S, ["full-report-charts"], null)], null), b], 0))), null) : React.d.M({className:"full-report-charts"}, W(b));
  }, Tq.prototype.t = function() {
    return this.jg;
  }, Tq.prototype.u = function(b, c) {
    return new Tq(this.w, this.data, this.pf, c);
  });
  return new Tq(c, b, Uq, null);
};
function Wq(a) {
  return y.a(1, H(a)) && y.a(Wh, function() {
    var b = null == a ? null : Pf(a);
    return null == b ? null : B(b);
  }());
}
var Yq = function Xq(b, c) {
  var d = P(b) ? K.a(T, b) : b, e = J.a(d, ch), f = J.a(d, ci), g = J.a(d, Vh), k = En.b(c), k = P(k) ? K.a(T, k) : k, l = J.a(k, zh), p = J.a(k, wk), t = J.a(k, ai);
  "undefined" === typeof ao && (ao = function(b, c, d, e, f, g, k, l, p, t, Mb, Sc, Ab) {
    this.Tf = b;
    this.Jf = c;
    this.C = d;
    this.data = e;
    this.hf = f;
    this.Y = g;
    this.ce = k;
    this.selection = l;
    this.r = p;
    this.w = t;
    this.Uf = Mb;
    this.$g = Sc;
    this.pg = Ab;
    this.q = 0;
    this.g = 393216;
  }, ao.T = !0, ao.S = "clustermap.components.full-report/t23064", ao.V = function(b, c) {
    return ic(c, "clustermap.components.full-report/t23064");
  }, ao.prototype.Se = !0, ao.prototype.Yd = function(b, c, d, e) {
    Nq.a("[data-toggle\x3d'tooltip']", e).data("bs.tooltip", !1);
    return Nq.a("[data-toggle\x3d'tooltip']", e).vh();
  }, ao.prototype.Ja = !0, ao.prototype.Fa = function() {
    var b = Sn.c(ho, this.data, new n(null, 2, [Oj, new n(null, 1, [ai, this.r], null), Fh, "overview"], null));
    return O(b) ? React.d.M(X(b), W(Sn.c(Vq, this.data, new n(null, 2, [Oj, new n(null, 1, [ai, this.r], null), Fh, "details"], null))), Wq(this.ce) ? W(q(Pi.b(this.data)) ? Sn.c(Jp, Pi.b(this.data), new n(null, 2, [Oj, new n(null, 3, [ai, this.r, zh, this.Y, wk, this.C], null), Fh, "selection-investments"], null)) : null) : W(q(bi.b(this.data)) ? Sn.c(Rp, bi.b(this.data), new n(null, 2, [Oj, new n(null, 3, [ai, this.r, zh, this.Y, wk, this.C], null), Fh, "selection-investments-by-company"], null)) : 
    null)) : React.d.M(null, W(b), W(Sn.c(Vq, this.data, new n(null, 2, [Oj, new n(null, 1, [ai, this.r], null), Fh, "details"], null))), Wq(this.ce) ? W(q(Pi.b(this.data)) ? Sn.c(Jp, Pi.b(this.data), new n(null, 2, [Oj, new n(null, 3, [ai, this.r, zh, this.Y, wk, this.C], null), Fh, "selection-investments"], null)) : null) : W(q(bi.b(this.data)) ? Sn.c(Rp, bi.b(this.data), new n(null, 2, [Oj, new n(null, 3, [ai, this.r, zh, this.Y, wk, this.C], null), Fh, "selection-investments-by-company"], null)) : 
    null));
  }, ao.prototype.t = function() {
    return this.pg;
  }, ao.prototype.u = function(b, c) {
    return new ao(this.Tf, this.Jf, this.C, this.data, this.hf, this.Y, this.ce, this.selection, this.r, this.w, this.Uf, this.$g, c);
  });
  return new ao(d, Xq, p, d, e, l, g, f, t, c, k, b, null);
};
function Zq() {
  var a = $q, b = id(ci) ? ci : new R(null, 1, 5, S, [ci], null);
  return function() {
    function c(a) {
      var b = null;
      0 < arguments.length && (b = F(Array.prototype.slice.call(arguments, 0), 0));
      return d.call(this, b);
    }
    function d(c) {
      return K.c(a, Be.a(B(c), b), C(c));
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
;function ar(a) {
  return React.d.hb({href:a.a ? a.a(null, null) : a.call(null, null, null)}, React.d.button({className:"btn btn-link btn-reset", type:"reset"}, "Reset to UK wide"));
}
;var br, $q = function cr(b, c) {
  var d = P(b) ? K.a(T, b) : b, e = J.a(d, jk), f = J.a(d, vj), g = En.b(c), g = P(g) ? K.a(T, g) : g, k = J.a(g, wk), l = J.a(g, ai), p = function() {
    var b = null == d ? null : vj.b(d);
    if (null == b) {
      b = null;
    } else {
      if (q(y.a ? y.a(Wh, b) : y.call(null, Wh, b))) {
        b = "Portfolio Company";
      } else {
        if (q(y.a ? y.a(ck, b) : y.call(null, ck, b))) {
          b = "Investor";
        } else {
          if (q(y.a ? y.a(Ch, b) : y.call(null, Ch, b))) {
            b = "Constituency";
          } else {
            throw Error([v("No matching clause: "), v(b)].join(""));
          }
        }
      }
    }
    return b;
  }(), t = function() {
    var b = null == d ? null : jk.b(d);
    return null == b ? null : ei.b(b);
  }(), x = function() {
    var b = null == d ? null : jk.b(d);
    return null == b ? null : Ij.b(b);
  }();
  "undefined" === typeof br && (br = function(b, c, d, e, f, g, k, l, p, x, t, Ab, Ye, se) {
    this.value = b;
    this.C = c;
    this.ge = d;
    this.selection = e;
    this.name = f;
    this.r = g;
    this.hh = k;
    this.$f = l;
    this.ag = p;
    this.w = x;
    this.bh = t;
    this.url = Ab;
    this.type = Ye;
    this.vg = se;
    this.q = 0;
    this.g = 393216;
  }, br.T = !0, br.S = "clustermap.components.page-title/t23457", br.V = function(b, c) {
    return ic(c, "clustermap.components.page-title/t23457");
  }, br.prototype.Ja = !0, br.prototype.Fa = function() {
    var b = this;
    return React.d.M({id:"page-title"}, React.d.button({className:"btn", type:"button", onClick:function() {
      return ep.a(b.r, new R(null, 2, 5, S, [fk, "map"], null));
    }}, "View on map"), W(q(b.ge) ? ar(b.C) : null), function() {
      var c;
      c = b.ge;
      c = q(c) ? c : "All portfolio companies";
      return O(c) ? React.d.fc(X(c), null) : React.d.fc(null, W(c));
    }(), function() {
      var c;
      c = b.name;
      c = q(c) ? c : "UK wide";
      return O(c) ? React.d.kb(X(c), W(y.a(b.type, Ch) ? new R(null, 6, 5, S, [zj, "\u00a0(", Yj.b(b.value), ", ", yk.b(b.value), ")"], null) : null)) : React.d.kb(null, W(c), W(y.a(b.type, Ch) ? new R(null, 6, 5, S, [zj, "\u00a0(", Yj.b(b.value), ", ", yk.b(b.value), ")"], null) : null));
    }(), q(b.url) ? React.d.hb({href:b.url, target:"_blank"}, W(b.url)) : null);
  }, br.prototype.t = function() {
    return this.vg;
  }, br.prototype.u = function(b, c) {
    return new br(this.value, this.C, this.ge, this.selection, this.name, this.r, this.hh, this.$f, this.ag, this.w, this.bh, this.url, this.type, c);
  });
  return new br(e, k, p, d, t, l, cr, d, g, c, b, x, f, null);
};
function dr(a) {
  Ck.call(this);
  a || sm || (sm = new Dm);
}
ta(dr, Ck);
var er = document.createElement("div");
er.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
var fr = y.a(er.firstChild.nodeType, 3), gr = y.a(er.getElementsByTagName("tbody").length, 0);
y.a(er.getElementsByTagName("link").length, 0);
var hr = /<|&#?\w+;/, ir = /^\s+/, jr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, kr = /<([\w:]+)/, lr = /<tbody/i, mr = new R(null, 3, 5, S, [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"], null), nr = new R(null, 3, 5, S, [1, "\x3ctable\x3e", "\x3c/table\x3e"], null), or = new R(null, 3, 5, S, [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"], null), pr = Yc(["col", z, "tfoot", "caption", "optgroup", "legend", 
"area", "td", "thead", "th", "option", "tbody", "tr", "colgroup"], [new R(null, 3, 5, S, [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"], null), new R(null, 3, 5, S, [0, "", ""], null), nr, nr, mr, new R(null, 3, 5, S, [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"], null), new R(null, 3, 5, S, [1, "\x3cmap\x3e", "\x3c/map\x3e"], null), or, nr, or, mr, nr, new R(null, 3, 5, S, [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"], null), 
nr]);
function qr(a, b, c, d) {
  b = ib(gg(lr, b));
  y.a(c, "table") && b ? (c = a.firstChild, a = q(c) ? a.firstChild.childNodes : c) : a = y.a(d, "\x3ctable\x3e") && b ? divchildNodes : We;
  a = A(a);
  c = null;
  for (var e = b = 0;;) {
    if (e < b) {
      d = c.A(null, e), y.a(d.nodeName, "tbody") && y.a(d.childNodes.length, 0) && d.parentNode.removeChild(d), e += 1;
    } else {
      if (a = A(a)) {
        c = a, kd(c) ? (a = uc(c), b = vc(c), c = a, d = H(a), a = b, b = d) : (d = B(c), y.a(d.nodeName, "tbody") && y.a(d.childNodes.length, 0) && d.parentNode.removeChild(d), a = E(c), c = null, b = 0), e = 0;
      } else {
        break;
      }
    }
  }
}
function rr(a) {
  var b = Em(a, jr, "\x3c$1\x3e\x3c/$2\x3e");
  a = ("" + v(Uc(gg(kr, b)))).toLowerCase();
  var c = J.c(pr, a, z.b(pr)), d = I.c(c, 0, null), e = I.c(c, 1, null), f = I.c(c, 2, null), c = function() {
    var a;
    a = document.createElement("div");
    a.innerHTML = [v(e), v(b), v(f)].join("");
    for (var c = d;;) {
      if (0 < c) {
        c -= 1, a = a.lastChild;
      } else {
        return a;
      }
    }
  }();
  q(gr) && qr(c, b, a, e);
  q(function() {
    var a = ib(fr);
    return a ? gg(ir, b) : a;
  }()) && c.insertBefore(document.createTextNode(B(gg(ir, b))), c.firstChild);
  return c.childNodes;
}
function sr(a) {
  if (a ? a.Nb : a) {
    return a.Nb(a);
  }
  var b;
  b = sr[m(null == a ? null : a)];
  if (!b && (b = sr._, !b)) {
    throw u("DomContent.nodes", a);
  }
  return b.call(null, a);
}
function tr(a) {
  if (a ? a.Gd : a) {
    return a.Gd(a);
  }
  var b;
  b = tr[m(null == a ? null : a)];
  if (!b && (b = tr._, !b)) {
    throw u("DomContent.single-node", a);
  }
  return b.call(null, a);
}
function ur(a, b) {
  for (var c = A(sr(a)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.A(null, f);
      vm(g, b);
      f += 1;
    } else {
      if (c = A(c)) {
        d = c, kd(d) ? (c = uc(d), f = vc(d), d = c, e = H(c), c = f) : (c = B(d), vm(c, b), c = E(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
function vr(a, b) {
  for (var c = A(sr(a)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.A(null, f);
      wm(g, b);
      f += 1;
    } else {
      if (c = A(c)) {
        d = c, kd(d) ? (c = uc(d), f = vc(d), d = c, e = H(c), c = f) : (c = B(d), wm(c, b), c = E(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
var wr = function() {
  function a(a, b) {
    return b < a.length ? new Md(null, function() {
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
}(), xr = function() {
  function a(a, b) {
    return b < a.length ? new Md(null, function() {
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
function yr(a) {
  return q(a.item) ? wr.b(a) : xr.b(a);
}
function zr(a) {
  if (q(a)) {
    var b = ib(a.nodeName);
    return b ? a.length : b;
  }
  return a;
}
function Ar(a) {
  return null == a ? Hc : (a ? a.g & 8388608 || a.sb || (a.g ? 0 : r(cc, a)) : r(cc, a)) ? A(a) : q(zr(a)) ? yr(a) : z ? A(new R(null, 1, 5, S, [a], null)) : null;
}
sr._ = function(a) {
  return null == a ? Hc : (a ? a.g & 8388608 || a.sb || (a.g ? 0 : r(cc, a)) : r(cc, a)) ? A(a) : q(zr(a)) ? yr(a) : z ? A(new R(null, 1, 5, S, [a], null)) : null;
};
tr._ = function(a) {
  return null == a ? null : (a ? a.g & 8388608 || a.sb || (a.g ? 0 : r(cc, a)) : r(cc, a)) ? B(a) : q(zr(a)) ? a.item(0) : z ? a : null;
};
sr.string = function(a) {
  return eg.b(sr(q(gg(hr, a)) ? rr(a) : document.createTextNode(a)));
};
tr.string = function(a) {
  return tr(q(gg(hr, a)) ? rr(a) : document.createTextNode(a));
};
q("undefined" != typeof NodeList) && (h = NodeList.prototype, h.sb = !0, h.I = function() {
  return yr(this);
}, h.Lb = !0, h.A = function(a, b) {
  return this.item(b);
}, h.qa = function(a, b, c) {
  return this.length <= b ? c : I.a(this, b);
}, h.ac = !0, h.J = function() {
  return this.length;
});
q("undefined" != typeof StaticNodeList) && (h = StaticNodeList.prototype, h.sb = !0, h.I = function() {
  return yr(this);
}, h.Lb = !0, h.A = function(a, b) {
  return this.item(b);
}, h.qa = function(a, b, c) {
  return this.length <= b ? c : I.a(this, b);
}, h.ac = !0, h.J = function() {
  return this.length;
});
q("undefined" != typeof HTMLCollection) && (h = HTMLCollection.prototype, h.sb = !0, h.I = function() {
  return yr(this);
}, h.Lb = !0, h.A = function(a, b) {
  return this.item(b);
}, h.qa = function(a, b, c) {
  return this.length <= b ? c : I.a(this, b);
}, h.ac = !0, h.J = function() {
  return this.length;
});
var Br;
function Cr(a, b, c, d) {
  var e = Cm(b), f = b.selectSingleNode;
  if (q(q(f) ? e.setProperty : f)) {
    return e.setProperty("SelectionLanguage", "XPath"), c.a ? c.a(b, a) : c.call(null, b, a);
  }
  if (q(e.evaluate)) {
    return d.i ? d.i(null, e, b, a) : d.call(null, null, e, b, a);
  }
  if (s) {
    throw Error("Could not find XPath support in this browser.");
  }
  return null;
}
function Dr(a, b) {
  return Cr(a, b, function(a, b) {
    return a.selectSingleNode(b);
  }, function(a, b, e, f) {
    return b.evaluate(f, e, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  });
}
function Er(a, b) {
  return Cr(a, b, function(a, b) {
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
var Fr = function() {
  function a(a, b) {
    "undefined" === typeof Br && (Br = function(a, b, c, d) {
      this.yb = a;
      this.pb = b;
      this.Ah = c;
      this.Dg = d;
      this.q = 0;
      this.g = 393216;
    }, Br.T = !0, Br.S = "domina.xpath/t28244", Br.V = function(a, b) {
      return ic(b, "domina.xpath/t28244");
    }, Br.prototype.Nb = function() {
      return te.a(he.a(Er, this.yb), sr(this.pb));
    }, Br.prototype.Gd = function() {
      return B(ve(fe(hb), ie.a(he.a(Dr, this.yb), sr(this.pb))));
    }, Br.prototype.t = function() {
      return this.Dg;
    }, Br.prototype.u = function(a, b) {
      return new Br(this.yb, this.pb, this.Ah, b);
    });
    return new Br(b, a, c, null);
  }
  function b(a) {
    return c.a(zm()[0], a);
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
var Gr = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P(b) ? K.a(T, b) : b, f = J.a(e, oh), g = cp.b(1);
    im(a, function(a) {
      ep.a(g, function(a) {
        return q(f) ? a : Hg.e(a, F([Gg, !0], 0));
      }.call(null, (JSON.parse.b ? JSON.parse.b(rm(a.target)) : JSON.parse.call(null, rm(a.target))).data));
      return to(g);
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
function Hr(a, b) {
  var c = cp.b(1);
  To(function() {
    var d = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, V)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Eo(c), V;
                  }
                  if (s) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Jd(d, V)) {
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
          d.p = c;
          d.b = b;
          return d;
        }();
      }(function(c) {
        var d = c[1];
        if (1 === d) {
          return c[2] = null, c[1] = 2, V;
        }
        if (2 === d) {
          return c[1] = 4, V;
        }
        if (3 === d) {
          return d = c[2], Do(c, d);
        }
        if (4 === d) {
          return Bo(c, 7, a);
        }
        if (5 === d) {
          return c[2] = null, c[1] = 6, V;
        }
        if (6 === d) {
          return d = c[2], c[2] = d, c[1] = 3, V;
        }
        if (7 === d) {
          var d = c[7], e = c[2], d = I.c(e, 0, null), e = I.c(e, 1, null), l = id(d);
          c[8] = e;
          c[7] = d;
          c[1] = l ? 8 : 9;
          return V;
        }
        return 8 === d ? (d = c[7], e = We, c[9] = d, c[10] = e, c[2] = null, c[1] = 11, V) : 9 === d ? (d = c[7], c[1] = q(d) ? 20 : 21, V) : 10 === d ? (e = c[8], d = K.c(b, c[2], e), c[11] = d, c[2] = null, c[1] = 2, V) : 11 === d ? (e = c[9], d = gd(e), c[1] = d ? 13 : 14, V) : 12 === d ? (d = c[2], c[2] = d, c[1] = 10, V) : 13 === d ? (e = c[10], c[2] = e, c[1] = 15, V) : 14 === d ? (e = c[9], d = C(e), e = B(e), c[12] = d, c[1] = q(e) ? 16 : 17, V) : 15 === d ? (d = c[2], c[2] = d, c[1] = 12, 
        V) : 16 === d ? (e = c[9], d = B(e), Bo(c, 19, d)) : 17 === d ? (c[2] = null, c[1] = 18, V) : 18 === d ? (e = c[10], d = c[12], e = Wc.a(e, c[2]), c[9] = d, c[10] = e, c[2] = null, c[1] = 11, V) : 19 === d ? (d = c[2], c[2] = d, c[1] = 18, V) : 20 === d ? (d = c[7], Bo(c, 23, d)) : 21 === d ? (c[2] = null, c[1] = 22, V) : 22 === d ? (d = c[2], c[2] = d, c[1] = 10, V) : 23 === d ? (d = c[2], c[2] = d, c[1] = 22, V) : null;
      });
    }(), e = function() {
      var a = d.p ? d.p() : d.call(null);
      a[6] = c;
      return a;
    }();
    return Ao(e);
  });
}
function Ir(a, b) {
  var c = cp.b(new Mo(Ko(1), 1));
  Hr(c, b);
  return function() {
    function b(a) {
      var c = null;
      0 < arguments.length && (c = F(Array.prototype.slice.call(arguments, 0), 0));
      return e.call(this, c);
    }
    function e(b) {
      b = K.a(a, b);
      if (q(b)) {
        var d = id(b) ? b : new R(null, 1, 5, S, [b], null);
        b = I.c(d, 0, null);
        d = zd(d);
        return ep.a(c, new R(null, 2, 5, S, [b, d], null));
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
function Jr(a) {
  return Fm.a("\x26", ie.a(function(a) {
    var c = I.c(a, 0, null);
    a = I.c(a, 1, null);
    return[v(Kd(c)), v("\x3d"), v(JSON.stringify(Cg(a)))].join("");
  }, a));
}
var Kr = config.bi.prefix, Lr = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = F(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return K.c(Gr, [v("/api/boundarylines/"), v(a), v("/"), v(b)].join(""), e);
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
}(), Mr = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return K.c(Gr, [v("/api/boundaryline-collection-index/"), v(a)].join(""), b);
  }
  a.l = 1;
  a.h = function(a) {
    var d = B(a);
    a = C(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Nr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    return Gr([v("/api/"), v(Kr), v("/portfolio-company-locations?"), v(Jr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), Or = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    return Gr([v("/api/"), v(Kr), v("/investment-account-timelines?"), v(Jr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), Pr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    return Gr([v("/api/"), v(Kr), v("/investment-stats?"), v(Jr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), Qr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    a = Sf.e(F([new n(null, 2, [Yi, 50, Xj, new n(null, 1, [ki, "desc"], null)], null), a], 0));
    return Gr([v("/api/"), v(Kr), v("/investment-aggs?"), v(Jr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), Rr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    a = Sf.e(F([new n(null, 2, [Yi, 50, Xj, new R(null, 2, 5, S, [new n(null, 1, [gj, "asc"], null), new n(null, 1, [Di, "asc"], null)], null)], null), a], 0));
    return Gr([v("/api/"), v(Kr), v("/investments?"), v(Jr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
var Sr = new R(null, 4, 5, S, [new R(null, 2, 5, S, [7, 0.01], null), new R(null, 2, 5, S, [9, 0.002], null), new R(null, 2, 5, S, [12, 3E-4], null), new R(null, 2, 5, S, [null, 0], null)], null);
function Tr(a) {
  var b = de(function(b) {
    var d = I.c(b, 0, null);
    b = I.c(b, 1, null);
    return q(q(d) ? a <= d : d) ? b : null;
  }, Sr);
  return q(b) ? b : 0;
}
function Ur(a, b) {
  var c = Tr(a), d = Gd(ve(function(a) {
    return function(b) {
      return b > a;
    };
  }(c), ie.a(Vc, Sr))), e = ve(function(a) {
    return function(b) {
      return b < a;
    };
  }(c, d), ie.a(Vc, Sr)), f = Xf(b), c = J.a(f, c);
  if (q(c)) {
    return c;
  }
  e = de(f, e);
  return q(e) ? e : de(f, d);
}
function Vr(a, b, c, d) {
  var e = Lr.e(c, d, F([oh, !0], 0));
  b = id(b) ? b : new R(null, 1, 5, S, [b], null);
  var f = Zd.a(b, new R(null, 2, 5, S, [c, d], null)), g = cp.b(1);
  To(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, V)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Eo(c), V;
                  }
                  if (s) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Jd(d, V)) {
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
          d.p = c;
          d.b = b;
          return d;
        }();
      }(function(b) {
        var c = b[1];
        if (2 === c) {
          var d = b[2], g = wg.i(a, Ee, f, function() {
            return function(a) {
              return function() {
                return a;
              };
            }(d, d, c);
          }());
          return Do(b, g);
        }
        return 1 === c ? Bo(b, 2, e) : null;
      });
    }(), c = function() {
      var a = b.p ? b.p() : b.call(null);
      a[6] = g;
      return a;
    }();
    return Ao(c);
  });
}
var Wr = function() {
  function a(a, d, e, f, g) {
    var k = null;
    4 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 4), 0));
    return b.call(this, a, d, e, f, k);
  }
  function b(a, b, e, f, g) {
    g = P(g) ? K.a(T, g) : g;
    g = J.a(g, dj);
    if (q(q(g) ? f <= g : g)) {
      return null;
    }
    g = id(b) ? b : new R(null, 1, 5, S, [b], null);
    var k = Be.a(Ub(a), g), l = J.a(k, e);
    g = Tr(f);
    f = Ur(f, Pf(l));
    k = Be.a(k, new R(null, 2, 5, S, [e, f], null));
    be.a(g, f) && Vr(a, b, e, g);
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
Wl("goog.messaging.AbstractChannel");
function Xr(a, b) {
  dr.call(this, b);
  this.of = a;
  this.$c = [];
}
var Yr;
ta(Xr, dr);
h = Xr.prototype;
h.de = 0;
h.df = !1;
h.sc = 3800;
h.send = function(a, b) {
  var c = a + ":" + b;
  if (!Ok || b.length <= this.sc) {
    this.$c.push("|" + c);
  } else {
    for (var d = b.length, e = Math.ceil(d / this.sc), f = 0, g = 1;f < d;) {
      this.$c.push("," + g + "/" + e + "|" + c.substr(f, this.sc)), g++, f += this.sc;
    }
  }
  !this.df && this.$c.length && (c = this.$c.shift(), ++this.de, this.Gi.send(this.de + c), qo.log(Rl, "msg sent: " + this.de + c, void 0), this.df = !0);
};
h.Da = function() {
  Xr.Fb.Da.call(this);
  var a = Zr;
  Ma(a, this.Gg);
  Ma(a, this.ff);
  this.Gg = this.ff = null;
  (a = this.Fg) && a.parentNode && a.parentNode.removeChild(a);
  (a = this.ef) && a.parentNode && a.parentNode.removeChild(a);
  this.Fg = this.ef = null;
};
var Zr = [], $r = qa(function() {
  var a = Zr, b, c = !1;
  try {
    for (var d = 0;b = a[d];d++) {
      var e;
      if (!(e = c)) {
        var f = b, g = f.Si.location.href;
        if (g != f.Hf) {
          f.Hf = g;
          var k = g.split("#")[1];
          k && (k = k.substr(1), f.ei(decodeURIComponent(k)));
          e = !0;
        } else {
          e = !1;
        }
      }
      c = e;
    }
  } catch (l) {
    if (qo.info("receive_() failed: " + l), b = b.$i.of, qo.info("Transport Error"), b.close(), !a.length) {
      return;
    }
  }
  a = sa();
  c && (Yr = a);
  window.setTimeout($r, 1E3 > a - Yr ? 10 : 100);
}, Xr);
ze(sf, ie.a(function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  return new R(null, 2, 5, S, [Ld.b(b.toLowerCase()), a], null);
}, Sf.e(F([Hg.b({Eh:"complete", Wh:"success", Fh:"error", Bh:"abort", Sh:"ready", Th:"readystatechange", TIMEOUT:"timeout", Hh:"incrementaldata", Rh:"progress"})], 0))));
var as = function() {
  function a(a, b, c, d, e, f) {
    if (a ? a.Be : a) {
      return a.Be(0, b, c, d, e, f);
    }
    var D;
    D = as[m(null == a ? null : a)];
    if (!D && (D = as._, !D)) {
      throw u("IConnection.transmit", a);
    }
    return D.call(null, a, b, c, d, e, f);
  }
  function b(a, b, c, d, e) {
    if (a ? a.Ae : a) {
      return a.Ae(0, b, c, d, e);
    }
    var f;
    f = as[m(null == a ? null : a)];
    if (!f && (f = as._, !f)) {
      throw u("IConnection.transmit", a);
    }
    return f.call(null, a, b, c, d, e);
  }
  function c(a, b, c, d) {
    if (a ? a.ze : a) {
      return a.ze(0, b, c, d);
    }
    var e;
    e = as[m(null == a ? null : a)];
    if (!e && (e = as._, !e)) {
      throw u("IConnection.transmit", a);
    }
    return e.call(null, a, b, c, d);
  }
  function d(a, b, c) {
    if (a ? a.ye : a) {
      return a.ye(0, b, c);
    }
    var d;
    d = as[m(null == a ? null : a)];
    if (!d && (d = as._, !d)) {
      throw u("IConnection.transmit", a);
    }
    return d.call(null, a, b, c);
  }
  function e(a, b) {
    if (a ? a.xe : a) {
      return a.xe(0, b);
    }
    var c;
    c = as[m(null == a ? null : a)];
    if (!c && (c = as._, !c)) {
      throw u("IConnection.transmit", a);
    }
    return c.call(null, a, b);
  }
  var f = null, f = function(f, k, l, p, t, x) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, p);
      case 5:
        return b.call(this, f, k, l, p, t);
      case 6:
        return a.call(this, f, k, l, p, t, x);
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
h = dm.prototype;
h.xe = function(a, b) {
  return as.la(this, b, "GET", null, null, 1E4);
};
h.ye = function(a, b, c) {
  return as.la(this, b, c, null, null, 1E4);
};
h.ze = function(a, b, c, d) {
  return as.la(this, b, c, d, null, 1E4);
};
h.Ae = function(a, b, c, d, e) {
  return as.la(this, b, c, d, e, 1E4);
};
h.Be = function(a, b, c, d, e, f) {
  this.qc = Math.max(0, f);
  return this.send(b, c, d, e);
};
ze(sf, ie.a(function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  return new R(null, 2, 5, S, [Ld.b(b.toLowerCase()), a], null);
}, Hg.b({Dh:"cn", Ch:"at", Uh:"rat", Qh:"pu", Gh:"ifrid", Xh:"tp", Jh:"lru", Ph:"pru", Ih:"lpu", Oh:"ppu", Nh:"ph", Mh:"osh", Vh:"role", Lh:"nativeProtocolVersion"})));
ug.b(null);
ug.b(0);
var bs = new n(null, 3, [Wh, ei, ck, ei, Ch, ok], null), cs = new n(null, 4, [Wh, function(a, b) {
  return[v("#/"), v(function() {
    var b = null == a ? null : Ub(a), b = null == b ? null : Ng.b(b);
    return null == b ? null : Kd(b);
  }()), v("/portfolio-company/"), v(dh.b(b))].join("");
}, ck, function(a, b) {
  return[v("#/"), v(function() {
    var b = null == a ? null : Ub(a), b = null == b ? null : Ng.b(b);
    return null == b ? null : Kd(b);
  }()), v("/investor-company/"), v(Gi.b(b))].join("");
}, Ch, function(a, b) {
  return[v("#/"), v(function() {
    var b = null == a ? null : Ub(a), b = null == b ? null : Ng.b(b);
    return null == b ? null : Kd(b);
  }()), v("/constituency/"), v(Dh.b(b))].join("");
}, null, function(a) {
  return[v("#/"), v(function() {
    var b = null == a ? null : Ub(a), b = null == b ? null : Ng.b(b);
    return null == b ? null : Kd(b);
  }())].join("");
}], null);
function ds(a, b, c) {
  return K.a(J.a(cs, b), new R(null, 2, 5, S, [a, c], null));
}
function es(a, b, c) {
  return React.d.hb({href:ds(a, b, c)}, W(J.a(c, J.a(bs, b))));
}
;ug.b(new n(null, 1, [Th, ""], null));
var fs = ug.b(sf), gs = /\//;
function hs(a, b) {
  return y.a(B(a), ":") ? new tf([Ld.b(Ad.a(a, 1)), b]) : null;
}
function is(a, b) {
  return y.a(a, b);
}
function js(a, b) {
  var c = Km.a(a, gs), d = Km.a(b, gs);
  return y.a(H(c), H(d)) ? ce(od, ie.c(function(a, b) {
    return y.a(B(a), ":") || y.a(a, b);
  }, c, d)) : null;
}
function ks(a, b) {
  return ve(function(c) {
    return a.a ? a.a(B(c), b) : a.call(null, B(c), b);
  }, Ub(fs));
}
function ls(a) {
  return nb.c(function(a, c) {
    var d = Km.c(c, /=/, 2), e = I.c(d, 0, null), d = I.c(d, 1, null);
    return Zc.c(a, e, decodeURIComponent(d));
  }, sf, Km.a(a, /&/));
}
function ms(a, b) {
  return q(js(a, b)) ? K.a(Sf, function() {
    return function d(a) {
      return new Md(null, function() {
        for (var b = a;;) {
          if (b = A(b)) {
            if (kd(b)) {
              var g = uc(b), k = H(g), l = Qd(k);
              a: {
                for (var p = 0;;) {
                  if (p < k) {
                    var t = w.a(g, p), t = K.a(hs, t);
                    null != t && l.add(t);
                    p += 1;
                  } else {
                    g = !0;
                    break a;
                  }
                }
                g = void 0;
              }
              return g ? Td(l.$(), d(vc(b))) : Td(l.$(), null);
            }
            l = B(b);
            l = K.a(hs, l);
            if (null != l) {
              return G(l, d(C(b)));
            }
            b = C(b);
          } else {
            return null;
          }
        }
      }, null, null);
    }(Yf(Km.a(a, gs), Km.a(b, gs)));
  }()) : null;
}
;function ns(a, b) {
  if (q(y.a ? y.a(Wh, a) : y.call(null, Wh, a))) {
    return dh.b(b);
  }
  if (q(y.a ? y.a(ck, a) : y.call(null, ck, a))) {
    return Gi.b(b);
  }
  if (q(y.a ? y.a(Ch, a) : y.call(null, Ch, a))) {
    return Dh.b(b);
  }
  throw Error([v("No matching clause: "), v(a)].join(""));
}
;var os, ps, rs = function qs(b, c, d) {
  var e = P(b) ? K.a(T, b) : b, f = J.a(e, vj), g = J.a(e, ei), k = P(d) ? K.a(T, d) : d, l = J.a(k, wk), p = J.a(k, ai);
  "undefined" === typeof os && (os = function(b, c, d, e, f, g, k, l, p, gb, ob, Mb, Sc) {
    this.bg = b;
    this.cg = c;
    this.va = d;
    this.C = e;
    this.dh = f;
    this.eh = g;
    this.name = k;
    this.r = l;
    this.be = p;
    this.w = gb;
    this.type = ob;
    this.mh = Mb;
    this.wg = Sc;
    this.q = 0;
    this.g = 393216;
  }, os.T = !0, os.S = "clustermap.components.search/t23478", os.V = function(b, c) {
    return ic(c, "clustermap.components.search/t23478");
  }, os.prototype.Te = !0, os.prototype.Zd = function(b, c) {
    var d = this, e = P(c) ? K.a(T, c) : c, e = J.a(e, kk), f = d.C.a ? d.C.a(d.type, d.be) : d.C.call(null, d.type, d.be);
    return React.d.B({className:q(e) ? "selected" : null}, React.d.hb({href:f, ref:"link", onClick:function() {
      var b = Vn(d.w, "link"), b = null == b ? null : Nq.b(b), b = null == b ? null : b.Pi(".search-component");
      return null == b ? null : b.toggle();
    }}, W(d.name), q(e) ? "*" : null));
  }, os.prototype.t = function() {
    return this.wg;
  }, os.prototype.u = function(b, c) {
    return new os(this.bg, this.cg, this.va, this.C, this.dh, this.eh, this.name, this.r, this.be, this.w, this.type, this.mh, c);
  });
  return new os(e, k, k, l, b, d, g, p, e, c, f, qs, null);
};
function ss(a, b) {
  var c = P(a) ? K.a(T, a) : a, d = J.a(c, ak), e = J.a(c, Ak), c = J.a(c, Oi), f = q(c) ? c : We, e = q(e) ? e : We, d = q(d) ? d : We;
  return b < H(f) ? new R(null, 2, 5, S, [Ch, J.a(c, b)], null) : b < H(f) + H(e) ? new R(null, 2, 5, S, [Wh, J.a(e, b - H(f))], null) : new R(null, 2, 5, S, [ck, J.a(d, b - H(f) - H(e))], null);
}
function ts(a, b, c, d) {
  a = a.keyCode;
  if (q(yd.a ? yd.a(27, a) : yd.call(null, 27, a))) {
    return d = Vn(c, "search-component"), d = null == d ? null : Nq.b(d), null == d ? null : d.toggle();
  }
  if (q(yd.a ? yd.a(13, a) : yd.call(null, 13, a))) {
    a = ss(Ub(b), function() {
      var a = Dn.a(c, gi);
      return q(a) ? a : 0;
    }());
    b = I.c(a, 0, null);
    a = I.c(a, 1, null);
    var e = Vn(c, "search-component"), e = null == e ? null : Nq.b(e);
    null == e || e.toggle();
    return ep.a(d, new R(null, 2, 5, S, [lk, new R(null, 2, 5, S, [b, ns(b, a)], null)], null));
  }
  return q(yd.a ? yd.a(38, a) : yd.call(null, 38, a)) ? Wn(c, gi, function() {
    var a = Dn.a(c, gi);
    return q(a) ? a : 0;
  }() - 1) : q(yd.a ? yd.a(40, a) : yd.call(null, 40, a)) ? Wn(c, gi, function() {
    var a = Dn.a(c, gi);
    return q(a) ? a : 0;
  }() + 1) : null;
}
var vs = function us(b, c) {
  var d = P(b) ? K.a(T, b) : b, e = J.a(d, ci), e = P(e) ? K.a(T, e) : e, f = J.a(e, vj), g = J.a(e, jk), k = J.a(d, rj), l = En.b(c), l = P(l) ? K.a(T, l) : l, p = J.a(l, wk), t = J.a(l, ai), x = P(k) ? K.a(T, k) : k, D = J.a(x, ak), M = J.a(x, Ak), N = J.a(x, Oi);
  "undefined" === typeof ps && (ps = function(b, c, d, e, f, g, k, l, p, x, t, D, M, N, uj, vh) {
    this.Lc = b;
    this.ph = c;
    this.C = d;
    this.Vc = e;
    this.lh = f;
    this.fh = g;
    this.r = k;
    this.oh = l;
    this.gg = p;
    this.w = x;
    this.Ec = t;
    this.$e = D;
    this.fg = M;
    this.eg = N;
    this.dg = uj;
    this.xg = vh;
    this.q = 0;
    this.g = 393216;
  }, ps.T = !0, ps.S = "clustermap.components.search/t23538", ps.V = function(b, c) {
    return ic(c, "clustermap.components.search/t23538");
  }, ps.prototype.Te = !0, ps.prototype.Zd = function(b, c) {
    var d = this;
    return React.d.M({ref:"search-component", className:"search-component", id:"search", onKeyDown:function(b) {
      return ts(b, d.$e, d.w, d.r);
    }}, React.d.M({className:"tbl"}, React.d.M({className:"tbl-cell", style:{width:"100%"}}, Xm.b ? Xm.b({ref:"search-field", type:"text", placeholder:"Search", onChange:function(b) {
      return ep.a(d.r, new R(null, 2, 5, S, [lh, b.target.value], null));
    }}) : Xm.call(null, {ref:"search-field", type:"text", placeholder:"Search", onChange:function(b) {
      return ep.a(d.r, new R(null, 2, 5, S, [lh, b.target.value], null));
    }})), React.d.M({className:"tbl-cell", style:{width:"34"}}, React.d.button({type:"reset", onClick:function() {
      ep.a(d.r, new R(null, 2, 5, S, [lh, ""], null));
      return Vn(d.w, "search-field").value = "";
    }}, "\u00d7"))), W(q(function() {
      var b = A(d.Ec) ? d.Ec : null;
      if (q(b)) {
        return b;
      }
      b = A(d.Vc) ? d.Vc : null;
      return q(b) ? b : A(d.Lc) ? d.Lc : null;
    }()) ? function() {
      var b = ie.c($e, oe(Ic, 0), d.Ec), e = ie.c($e, oe(Ic, H(b)), d.Vc), f = ie.c($e, oe(Ic, H(b) + H(e)), d.Lc), g = vd(function() {
        var b = gi.b(c);
        return q(b) ? b : 0;
      }(), H(b) + H(e) + H(f));
      be.a(g, gi.b(c)) && Wn(d.w, gi, g);
      return new R(null, 3, 5, S, [xh, new n(null, 1, [Qh, "search-results"], null), new R(null, 4, 5, S, [Zg, q(A(b) ? b : null) ? ze(new R(null, 2, 5, S, [xh, new R(null, 3, 5, S, [tk, new n(null, 1, [Qh, "search-results-header"], null), "Constituencies"], null)], null), function() {
        return function Ab(b) {
          return new Md(null, function() {
            for (;;) {
              var c = A(b);
              if (c) {
                var e = c;
                if (kd(e)) {
                  var f = uc(e), k = H(f), l = Qd(k);
                  return function() {
                    for (var b = 0;;) {
                      if (b < k) {
                        var p = w.a(f, b), x = I.c(p, 0, null), t = I.c(p, 1, null);
                        Ud(l, Sn.c(rs, t, new n(null, 4, [Oj, new n(null, 2, [ai, d.r, wk, d.C], null), wh, new n(null, 1, [kk, y.a(x, g)], null), gk, function() {
                          return function(b) {
                            return Zc.e(b, vj, Ch, F([hk, J.a(b, Dh), sj, [v("constituency:"), v(J.a(b, Dh))].join("")], 0));
                          };
                        }(b, p, x, t, f, k, l, e, c), Ph, sj], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.$(), Ab(vc(e))) : Td(l.$(), null);
                }
                var p = B(e), x = I.c(p, 0, null), t = I.c(p, 1, null);
                return G(Sn.c(rs, t, new n(null, 4, [Oj, new n(null, 2, [ai, d.r, wk, d.C], null), wh, new n(null, 1, [kk, y.a(x, g)], null), gk, function() {
                  return function(b) {
                    return Zc.e(b, vj, Ch, F([hk, J.a(b, Dh), sj, [v("constituency:"), v(J.a(b, Dh))].join("")], 0));
                  };
                }(p, x, t, e, c), Ph, sj], null)), Ab(C(e)));
              }
              return null;
            }
          }, null, null);
        }(b);
      }()) : null, q(A(e) ? e : null) ? ze(new R(null, 2, 5, S, [xh, new R(null, 3, 5, S, [tk, new n(null, 1, [Qh, "search-results-header"], null), "Companies"], null)], null), function() {
        return function Ab(b) {
          return new Md(null, function() {
            for (;;) {
              var c = A(b);
              if (c) {
                var e = c;
                if (kd(e)) {
                  var f = uc(e), k = H(f), l = Qd(k);
                  return function() {
                    for (var b = 0;;) {
                      if (b < k) {
                        var p = w.a(f, b), x = I.c(p, 0, null), t = I.c(p, 1, null);
                        Ud(l, Sn.c(rs, t, new n(null, 4, [Oj, new n(null, 2, [ai, d.r, wk, d.C], null), wh, new n(null, 1, [kk, y.a(x, g)], null), gk, function() {
                          return function(b) {
                            return Zc.e(b, vj, Wh, F([hk, J.a(b, dh), sj, [v("portfolio-company:"), v(J.a(b, dh))].join("")], 0));
                          };
                        }(b, p, x, t, f, k, l, e, c), Ph, sj], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.$(), Ab(vc(e))) : Td(l.$(), null);
                }
                var p = B(e), x = I.c(p, 0, null), t = I.c(p, 1, null);
                return G(Sn.c(rs, t, new n(null, 4, [Oj, new n(null, 2, [ai, d.r, wk, d.C], null), wh, new n(null, 1, [kk, y.a(x, g)], null), gk, function() {
                  return function(b) {
                    return Zc.e(b, vj, Wh, F([hk, J.a(b, dh), sj, [v("portfolio-company:"), v(J.a(b, dh))].join("")], 0));
                  };
                }(p, x, t, e, c), Ph, sj], null)), Ab(C(e)));
              }
              return null;
            }
          }, null, null);
        }(e);
      }()) : null, q(A(f) ? f : null) ? ze(new R(null, 2, 5, S, [xh, new R(null, 3, 5, S, [tk, new n(null, 1, [Qh, "search-results-header"], null), "Investors"], null)], null), function() {
        return function Ab(b) {
          return new Md(null, function() {
            for (;;) {
              var c = A(b);
              if (c) {
                var e = c;
                if (kd(e)) {
                  var f = uc(e), k = H(f), l = Qd(k);
                  return function() {
                    for (var b = 0;;) {
                      if (b < k) {
                        var p = w.a(f, b), x = I.c(p, 0, null), t = I.c(p, 1, null);
                        Ud(l, Sn.c(rs, t, new n(null, 4, [Oj, new n(null, 2, [ai, d.r, wk, d.C], null), wh, new n(null, 1, [kk, y.a(x, g)], null), gk, function() {
                          return function(b) {
                            return Zc.e(b, vj, ck, F([hk, J.a(b, Gi), sj, [v("investor-company:"), v(J.a(b, Gi))].join("")], 0));
                          };
                        }(b, p, x, t, f, k, l, e, c), Ph, sj], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.$(), Ab(vc(e))) : Td(l.$(), null);
                }
                var p = B(e), x = I.c(p, 0, null), t = I.c(p, 1, null);
                return G(Sn.c(rs, t, new n(null, 4, [Oj, new n(null, 2, [ai, d.r, wk, d.C], null), wh, new n(null, 1, [kk, y.a(x, g)], null), gk, function() {
                  return function(b) {
                    return Zc.e(b, vj, ck, F([hk, J.a(b, Gi), sj, [v("investor-company:"), v(J.a(b, Gi))].join("")], 0));
                  };
                }(p, x, t, e, c), Ph, sj], null)), Ab(C(e)));
              }
              return null;
            }
          }, null, null);
        }(f);
      }()) : null], null)], null);
    }() : null));
  }, ps.prototype.t = function() {
    return this.xg;
  }, ps.prototype.u = function(b, c) {
    return new ps(this.Lc, this.ph, this.C, this.Vc, this.lh, this.fh, this.r, this.oh, this.gg, this.w, this.Ec, this.$e, this.fg, this.eg, this.dg, c);
  });
  return new ps(D, g, p, M, us, b, t, f, x, c, N, k, l, e, d, null);
};
var ws;
function xs(a) {
  if (a ? a.Hd : a) {
    return a.Hd(a);
  }
  var b;
  b = xs[m(null == a ? null : a)];
  if (!b && (b = xs._, !b)) {
    throw u("Event.prevent-default", a);
  }
  return b.call(null, a);
}
function ys(a) {
  if (a ? a.Fe : a) {
    return a.Pa.target;
  }
  var b;
  b = ys[m(null == a ? null : a)];
  if (!b && (b = ys._, !b)) {
    throw u("Event.target", a);
  }
  return b.call(null, a);
}
var zs = window.document.documentElement, Bs = function As(b) {
  return function(c) {
    b.b ? b.b(function() {
      "undefined" === typeof ws && (ws = function(b, c, f, g) {
        this.Pa = b;
        this.Qa = c;
        this.Dd = f;
        this.Ud = g;
        this.q = 0;
        this.g = 393472;
      }, ws.T = !0, ws.S = "domina.events/t28061", ws.V = function(b, c) {
        return ic(c, "domina.events/t28061");
      }, ws.prototype.K = function(b, c) {
        var f = this.Pa[c];
        return q(f) ? f : this.Pa[Kd(c)];
      }, ws.prototype.L = function(b, c, f) {
        b = Fb.a(this, c);
        return q(b) ? b : f;
      }, ws.prototype.Hd = function() {
        return this.Pa.preventDefault();
      }, ws.prototype.Fe = function() {
        return this.Pa.target;
      }, ws.prototype.t = function() {
        return this.Ud;
      }, ws.prototype.u = function(b, c) {
        return new ws(this.Pa, this.Qa, this.Dd, c);
      });
      return new ws(c, b, As, null);
    }()) : b.call(null, function() {
      "undefined" === typeof ws && (ws = function(b, c, f, g) {
        this.Pa = b;
        this.Qa = c;
        this.Dd = f;
        this.Ud = g;
        this.q = 0;
        this.g = 393472;
      }, ws.T = !0, ws.S = "domina.events/t28061", ws.V = function(b, c) {
        return ic(c, "domina.events/t28061");
      }, ws.prototype.K = function(b, c) {
        var f = this.Pa[c];
        return q(f) ? f : this.Pa[Kd(c)];
      }, ws.prototype.L = function(b, c, f) {
        b = Fb.a(this, c);
        return q(b) ? b : f;
      }, ws.prototype.Hd = function() {
        return this.Pa.preventDefault();
      }, ws.prototype.Fe = function() {
        return this.Pa.target;
      }, ws.prototype.t = function() {
        return this.Ud;
      }, ws.prototype.u = function(b, c) {
        return new ws(this.Pa, this.Qa, this.Dd, c);
      });
      return new ws(c, b, As, null);
    }());
    return!0;
  };
};
function Cs(a, b, c) {
  var d = Bs(c), e = Kd(b);
  return eg.b(function() {
    return function g(a) {
      return new Md(null, function() {
        for (;;) {
          var b = A(a);
          if (b) {
            if (kd(b)) {
              var c = uc(b), t = H(c), x = Qd(t);
              a: {
                for (var D = 0;;) {
                  if (D < t) {
                    var M = w.a(c, D), M = q(!1) ? ql(M, e, d, !1) : ml(M, e, d, !1);
                    x.add(M);
                    D += 1;
                  } else {
                    c = !0;
                    break a;
                  }
                }
                c = void 0;
              }
              return c ? Td(x.$(), g(vc(b))) : Td(x.$(), null);
            }
            x = B(b);
            return G(q(!1) ? ql(x, e, d, !1) : ml(x, e, d, !1), g(C(b)));
          }
          return null;
        }
      }, null, null);
    }(sr(a));
  }());
}
var Ds = function() {
  function a(a, d) {
    return b.c(zs, a, d);
  }
  var b = null, b = function(b, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, d);
      case 3:
        return Cs(b, d, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.c = function(a, b, e) {
    return Cs(a, b, e);
  };
  return b;
}();
function Es() {
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
var Fs = function() {
  function a(a, c) {
    if (!a) {
      return[];
    }
    if (a.constructor == Array) {
      return a;
    }
    if (!ia(a)) {
      return[a];
    }
    if (ia(c) && (c = ia(c) ? document.getElementById(c) : c, !c)) {
      return[];
    }
    c = c || document;
    var e = c.ownerDocument || c.documentElement;
    Sc = c.contentType && "application/xml" == c.contentType || Nk && (c.doctype || "[object XMLDocument]" == e.toString()) || !!e && (Ok ? e.xml : c.xmlVersion || e.xmlVersion);
    return(e = d(a)(c)) && e.Oc ? e : b(e);
  }
  function b(a) {
    if (a && a.Oc) {
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
    Vd++;
    if (Ok && Sc) {
      var c = Vd + "";
      a[0].setAttribute("_zipIdx", c);
      for (var d = 1, e;e = a[d];d++) {
        a[d].getAttribute("_zipIdx") != c && b.push(e), e.setAttribute("_zipIdx", c);
      }
    } else {
      if (Ok && a.Cf) {
        try {
          for (d = 1;e = a[d];d++) {
            U(e) && b.push(e);
          }
        } catch (f) {
        }
      } else {
        for (a[0] && (a[0]._zipIdx = Vd), d = 1;e = a[d];d++) {
          a[d]._zipIdx != Vd && b.push(e), e._zipIdx = Vd;
        }
      }
    }
    return b;
  }
  function c(a, b) {
    if (!b) {
      return 1;
    }
    var c = gt(a);
    return b[c] ? 0 : b[c] = 1;
  }
  function d(a, b) {
    if (Go) {
      var c = gm[a];
      if (c && !b) {
        return c;
      }
    }
    if (c = fm[a]) {
      return c;
    }
    var c = a.charAt(0), f = -1 == a.indexOf(" ");
    0 <= a.indexOf("#") && f && (b = !0);
    if (!Go || b || -1 != "\x3e~+".indexOf(c) || Ok && -1 != a.indexOf(":") || ob && 0 <= a.indexOf(".") || -1 != a.indexOf(":contains") || -1 != a.indexOf("|\x3d")) {
      var g = a.split(/\s*,\s*/);
      return fm[a] = 2 > g.length ? e(a) : function(a) {
        for (var b = 0, c = [], d;d = g[b++];) {
          c = c.concat(e(d)(a));
        }
        return c;
      };
    }
    var k = 0 <= "\x3e~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return gm[a] = function(b) {
      try {
        if (9 != b.nodeType && !f) {
          throw "";
        }
        var c = b.querySelectorAll(k);
        Ok ? c.Cf = !0 : c.Oc = !0;
        return c;
      } catch (e) {
        return d(a, !0)(b);
      }
    };
  }
  function e(a) {
    var b = Ia(va(a));
    if (1 == b.length) {
      var c = f(b[0]);
      return function(a) {
        if (a = c(a, [])) {
          a.Oc = !0;
        }
        return a;
      };
    }
    return function(a) {
      a = gb(a);
      for (var c, d, e = b.length, g, k, l = 0;l < e;l++) {
        k = [];
        c = b[l];
        d = a.length - 1;
        0 < d && (g = {}, k.Oc = !0);
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
    var b = vh[a.Yb];
    if (b) {
      return b;
    }
    var c = a.Le, c = c ? c.Tc : "", d = p(a, {Pb:1}), e = "*" == a.Ma, f = document.getElementsByClassName;
    if (c) {
      f = {Pb:1}, e && (f.Ma = 1), d = p(a, f), "+" == c ? b = l(d) : "~" == c ? b = k(d) : "\x3e" == c && (b = g(d));
    } else {
      if (a.id) {
        d = !a.Pe && e ? Es : p(a, {Pb:1, id:1}), b = function(b, c) {
          var e;
          e = b ? new Dm(Cm(b)) : sm || (sm = new Dm);
          var f = a.id;
          if ((f = (e = ia(f) ? e.Fd.getElementById(f) : f) && d(e)) && !(f = 9 == b.nodeType)) {
            for (f = e.parentNode;f && f != b;) {
              f = f.parentNode;
            }
            f = !!f;
          }
          if (f) {
            return gb(e, c);
          }
        };
      } else {
        if (f && /\{\s*\[native code\]\s*\}/.test(String(f)) && a.ab.length && !ob) {
          var d = p(a, {Pb:1, ab:1, id:1}), x = a.ab.join(" "), b = function(a, b) {
            for (var c = gb(0, b), e, f = 0, g = a.getElementsByClassName(x);e = g[f++];) {
              d(e, a) && c.push(e);
            }
            return c;
          }
        } else {
          e || a.Pe ? (d = p(a, {Pb:1, Ma:1, id:1}), b = function(b, c) {
            for (var e = gb(0, c), f, g = 0, k = b.getElementsByTagName(a.Md());f = k[g++];) {
              d(f, b) && e.push(f);
            }
            return e;
          }) : b = function(b, c) {
            for (var d = gb(0, c), e, f = 0, g = b.getElementsByTagName(a.Md());e = g[f++];) {
              d.push(e);
            }
            return d;
          };
        }
      }
    }
    return vh[a.Yb] = b;
  }
  function g(a) {
    a = a || Es;
    return function(b, d, e) {
      for (var f = 0, g = b[Mb];b = g[f++];) {
        Wf(b) && (!e || c(b, e)) && a(b, f) && d.push(b);
      }
      return d;
    };
  }
  function k(a) {
    return function(b, d, e) {
      for (b = b[se];b;) {
        if (Wf(b)) {
          if (e && !c(b, e)) {
            break;
          }
          a(b) && d.push(b);
        }
        b = b[se];
      }
      return d;
    };
  }
  function l(a) {
    return function(b, d, e) {
      for (;b = b[se];) {
        if (!Ye || U(b)) {
          e && !c(b, e) || !a(b) || d.push(b);
          break;
        }
      }
      return d;
    };
  }
  function p(a, b) {
    if (!a) {
      return Es;
    }
    b = b || {};
    var c = null;
    b.Pb || (c = aa(c, U));
    b.Ma || "*" != a.Ma && (c = aa(c, function(b) {
      return b && b.tagName == a.Md();
    }));
    b.ab || Ja(a.ab, function(a, b) {
      var d = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
      c = aa(c, function(a) {
        return d.test(a.className);
      });
      c.count = b;
    });
    b.Cb || Ja(a.Cb, function(a) {
      var b = a.name;
      tj[b] && (c = aa(c, tj[b](b, a.value)));
    });
    b.tc || Ja(a.tc, function(a) {
      var b, d = a.ed;
      a.type && Ab[a.type] ? b = Ab[a.type](d, a.Td) : d.length && (b = uj(d));
      b && (c = aa(c, b));
    });
    b.id || a.id && (c = aa(c, function(b) {
      return!!b && b.id == a.id;
    }));
    c || "default" in b || (c = Es);
    return c;
  }
  function t(a) {
    return D(a) % 2;
  }
  function x(a) {
    return!(D(a) % 2);
  }
  function D(a) {
    var b = a.parentNode, c = 0, d = b[Mb], e = a._i || -1, f = b._l || -1;
    if (!d) {
      return-1;
    }
    d = d.length;
    if (f == d && 0 <= e && 0 <= f) {
      return e;
    }
    b._l = d;
    e = -1;
    for (b = b.firstElementChild || b.firstChild;b;b = b[se]) {
      Wf(b) && (b._i = ++c, a === b && (e = c));
    }
    return e;
  }
  function M(a) {
    for (;a = a[se];) {
      if (Wf(a)) {
        return!1;
      }
    }
    return!0;
  }
  function N(a) {
    for (;a = a[Tp];) {
      if (Wf(a)) {
        return!1;
      }
    }
    return!0;
  }
  function ba(a, b) {
    return a ? "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (Sc ? a.getAttribute(b) : a.getAttribute(b, 2)) || "" : "";
  }
  function U(a) {
    return 1 == a.nodeType;
  }
  function aa(a, b) {
    return a ? b ? function() {
      return a.apply(window, arguments) && b.apply(window, arguments);
    } : a : b;
  }
  function Ia(a) {
    function b() {
      0 <= p && (U.id = c(p, N).replace(/\\/g, ""), p = -1);
      if (0 <= x) {
        var a = x == N ? null : c(x, N);
        0 > "\x3e~+".indexOf(a) ? U.Ma = a : U.Tc = a;
        x = -1;
      }
      0 <= l && (U.ab.push(c(l + 1, N).replace(/\\/g, "")), l = -1);
    }
    function c(b, d) {
      return va(a.slice(b, d));
    }
    a = 0 <= "\x3e~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
    for (var d = [], e = -1, f = -1, g = -1, k = -1, l = -1, p = -1, x = -1, t = "", D = "", M, N = 0, ba = a.length, U = null, aa = null;t = D, D = a.charAt(N), N < ba;N++) {
      "\\" != t && (U || (M = N, U = {Yb:null, Cb:[], tc:[], ab:[], Ma:null, Tc:null, id:null, Md:function() {
        return Sc ? this.Wg : this.Ma;
      }}, x = N), 0 <= e ? "]" == D ? (aa.ed ? aa.Td = c(g || e + 1, N) : aa.ed = c(e + 1, N), !(e = aa.Td) || '"' != e.charAt(0) && "'" != e.charAt(0) || (aa.Td = e.slice(1, -1)), U.tc.push(aa), aa = null, e = g = -1) : "\x3d" == D && (g = 0 <= "|~^$*".indexOf(t) ? t : "", aa.type = g + D, aa.ed = c(e + 1, N - g.length), g = N + 1) : 0 <= f ? ")" == D && (0 <= k && (aa.value = c(f + 1, N)), k = f = -1) : "#" == D ? (b(), p = N + 1) : "." == D ? (b(), l = N) : ":" == D ? (b(), k = N) : "[" == D ? 
      (b(), e = N, aa = {}) : "(" == D ? (0 <= k && (aa = {name:c(k + 1, N), value:null}, U.Cb.push(aa)), f = N) : " " == D && t != D && (b(), 0 <= k && U.Cb.push({name:c(k + 1, N)}), U.Pe = U.Cb.length || U.tc.length || U.ab.length, U.Oi = U.Yb = c(M, N), U.Wg = U.Ma = U.Tc ? null : U.Ma || "*", U.Ma && (U.Ma = U.Ma.toUpperCase()), d.length && d[d.length - 1].Tc && (U.Le = d.pop(), U.Yb = U.Le.Yb + " " + U.Yb), d.push(U), U = null));
    }
    return d;
  }
  function gb(a, b) {
    var c = b || [];
    a && c.push(a);
    return c;
  }
  var ob = Qk && "BackCompat" == document.compatMode, Mb = document.firstChild.children ? "children" : "childNodes", Sc = !1, Ab = {"*\x3d":function(a, b) {
    return function(c) {
      return 0 <= ba(c, a).indexOf(b);
    };
  }, "^\x3d":function(a, b) {
    return function(c) {
      return 0 == ba(c, a).indexOf(b);
    };
  }, "$\x3d":function(a, b) {
    return function(c) {
      c = " " + ba(c, a);
      return c.lastIndexOf(b) == c.length - b.length;
    };
  }, "~\x3d":function(a, b) {
    var c = " " + b + " ";
    return function(b) {
      return 0 <= (" " + ba(b, a) + " ").indexOf(c);
    };
  }, "|\x3d":function(a, b) {
    b = " " + b;
    return function(c) {
      c = " " + ba(c, a);
      return c == b || 0 == c.indexOf(b + "-");
    };
  }, "\x3d":function(a, b) {
    return function(c) {
      return ba(c, a) == b;
    };
  }}, Ye = "undefined" == typeof document.firstChild.nextElementSibling, se = Ye ? "nextSibling" : "nextElementSibling", Tp = Ye ? "previousSibling" : "previousElementSibling", Wf = Ye ? U : Es, tj = {checked:function() {
    return function(a) {
      return a.checked || a.attributes.checked;
    };
  }, "first-child":function() {
    return N;
  }, "last-child":function() {
    return M;
  }, "only-child":function() {
    return function(a) {
      return N(a) && M(a) ? !0 : !1;
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
    var c = Ia(b)[0], d = {Pb:1};
    "*" != c.Ma && (d.Ma = 1);
    c.ab.length || (d.ab = 1);
    var e = p(c, d);
    return function(a) {
      return!e(a);
    };
  }, "nth-child":function(a, b) {
    if ("odd" == b) {
      return t;
    }
    if ("even" == b) {
      return x;
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
  }}, uj = Ok ? function(a) {
    var b = a.toLowerCase();
    "class" == b && (a = "className");
    return function(c) {
      return Sc ? c.getAttribute(a) : c[a] || c[b];
    };
  } : function(a) {
    return function(b) {
      return b && b.getAttribute && b.hasAttribute(a);
    };
  }, vh = {}, fm = {}, gm = {}, Go = !!document.querySelectorAll && (!Qk || Zk("526")), Vd = 0, gt = Ok ? function(a) {
    return Sc ? a.getAttribute("_uid") || a.setAttribute("_uid", ++Vd) || Vd : a.uniqueID;
  } : function(a) {
    return a._uid || (a._uid = ++Vd);
  };
  a.Cb = tj;
  return a;
}();
ea("goog.dom.query", Fs);
ea("goog.dom.query.pseudos", Fs.Cb);
var Gs, Hs = function() {
  function a(a, b) {
    "undefined" === typeof Gs && (Gs = function(a, b, c, d) {
      this.yb = a;
      this.pb = b;
      this.nh = c;
      this.Eg = d;
      this.q = 0;
      this.g = 393216;
    }, Gs.T = !0, Gs.S = "domina.css/t28704", Gs.V = function(a, b) {
      return ic(b, "domina.css/t28704");
    }, Gs.prototype.Nb = function() {
      var a = this;
      return te.a(function(b) {
        return Ar(Fs(a.yb, b));
      }, sr(a.pb));
    }, Gs.prototype.Gd = function() {
      var a = this;
      return B(ve(fe(hb), te.a(function(b) {
        return Ar(Fs(a.yb, b));
      }, sr(a.pb))));
    }, Gs.prototype.t = function() {
      return this.Eg;
    }, Gs.prototype.u = function(a, b) {
      return new Gs(this.yb, this.pb, this.nh, b);
    });
    return new Gs(b, a, c, null);
  }
  function b(a) {
    return c.a(zm()[0], a);
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
function Is() {
  Ds.c(Hs.b("#nav .search \x3e a"), qi, function(a) {
    var b = ys(a), b = Fr.a(b, "..");
    xs(a);
    a = A(sr(b));
    for (var b = null, c = 0, d = 0;;) {
      if (d < c) {
        var e = b.A(null, d);
        ym(e);
        d += 1;
      } else {
        if (a = A(a)) {
          b = a, kd(b) ? (a = uc(b), d = vc(b), b = a, c = H(a), a = d) : (a = B(b), ym(a), a = E(b), b = null, c = 0), d = 0;
        } else {
          break;
        }
      }
    }
    return Nq.b(B(Hs.b("#search").Nb(null))).toggle();
  });
}
function Js() {
  Ds.c(Hs.b("#map-report \x3e a"), qi, function(a) {
    ys(a);
    var b = Hs.b("#map-report");
    xs(a);
    a = tr(b);
    a = La(um(a), "open");
    if (q(a)) {
      return vr(b, "open"), Nq.b(B(b.Nb(null))).kf(Cg(new n(null, 1, ["right", "-270px"], null)), 400);
    }
    ur(b, "open");
    return Nq.b(B(b.Nb(null))).kf(Cg(new n(null, 1, ["right", "0px"], null)), 400);
  });
}
var Ks = new n(null, 2, ["map", "view-map", "lists", "view-lists"], null);
function Ls(a) {
  for (var b = A(Ks), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.A(null, e), g = I.c(f, 0, null), k = I.c(f, 1, null);
      Ds.c(Hs.b([v("#nav ."), v(g), v(" \x3e a")].join("")), qi, function(b, c, d, e, f, g) {
        return function(b) {
          xs(b);
          return ep.a(a, new R(null, 2, 5, S, [fk, g], null));
        };
      }(b, c, d, e, f, g, k));
      e += 1;
    } else {
      var l = A(b);
      if (l) {
        f = l;
        if (kd(f)) {
          b = uc(f), e = vc(f), c = b, d = H(b), b = e;
        } else {
          var p = B(f), g = I.c(p, 0, null), k = I.c(p, 1, null);
          Ds.c(Hs.b([v("#nav ."), v(g), v(" \x3e a")].join("")), qi, function(b, c, d, e, f, g) {
            return function(b) {
              xs(b);
              return ep.a(a, new R(null, 2, 5, S, [fk, g], null));
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
function Ms(a) {
  Nq.b("[data-toggle\x3d'tooltip']").vh();
  Is();
  Js();
  Ls(a);
}
;var Ns = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = F(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    e = I.c(e, 0, null);
    return 1 === a ? b : q(e) ? e : [v(b), v("s")].join("");
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
var Os, Ps, Qs, Rs;
function Ss(a) {
  return React.d.button({className:"btn", type:"button", onClick:function() {
    return ep.a(a, new R(null, 2, 5, S, [fk, "lists"], null));
  }}, React.d.n({className:"icon-lists-sm"}), "Full report");
}
function Ts(a) {
  return new n(null, 3, [oi, null == a ? null : Tg.b(a), oj, null == a ? null : zi.b(a), Mg, null == a ? null : Vi.b(a)], null);
}
var Vs = function Us(b, c) {
  var d = Ts(b), d = P(d) ? K.a(T, d) : d, e = J.a(d, Mg), f = J.a(d, oj), g = J.a(d, oi);
  "undefined" === typeof Os && (Os = function(b, c, d, e, f, g, M, N) {
    this.wa = b;
    this.ta = c;
    this.ja = d;
    this.Wf = e;
    this.r = f;
    this.Z = g;
    this.jf = M;
    this.rg = N;
    this.q = 0;
    this.g = 393216;
  }, Os.T = !0, Os.S = "clustermap.components.map-report/t23239", Os.V = function(b, c) {
    return ic(c, "clustermap.components.map-report/t23239");
  }, Os.prototype.Ja = !0, Os.prototype.Fa = function() {
    var b = this;
    return React.d.M(null, React.d.Od({className:"secondary"}, React.d.fc(null, "All portfolio companies"), React.d.kb(null, "UK wide")), React.d.he(null, function() {
      var c = Z.c ? Z.c(b.wa, z, "-") : Z.call(null, b.wa, z, "-");
      return O(c) ? React.d.B(X(c), React.d.small(null, "Portfolio Companies listed")) : React.d.B(null, W(c), React.d.small(null, "Portfolio Companies listed"));
    }(), function() {
      var c = Z.c ? Z.c(b.ta, z, "-") : Z.call(null, b.ta, z, "-");
      return O(c) ? React.d.B(X(c), React.d.small(null, "Investors listed")) : React.d.B(null, W(c), React.d.small(null, "Investors listed"));
    }(), function() {
      var c = Z.c ? Z.c(b.ja, z, "-") : Z.call(null, b.ja, z, "-");
      return O(c) ? React.d.B(X(c), function() {
        var c = Ns.e(b.ja, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }()) : React.d.B(null, W(c), function() {
        var c = Ns.e(b.ja, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }());
    }(), function() {
      var c = $n.m ? $n.m(function() {
        var c = b.Z, c = null == c ? null : qj.b(c);
        return null == c ? null : Hh.b(c);
      }(), Fj, 2, z, "-") : $n.call(null, function() {
        var c = b.Z, c = null == c ? null : qj.b(c);
        return null == c ? null : Hh.b(c);
      }(), Fj, 2, z, "-");
      return O(c) ? React.d.B(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.B(null, W(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.Z, c = null == c ? null : Li.b(c);
        return null == c ? null : Hh.b(c);
      }(), kj, 0, z, "-") : Z.call(null, function() {
        var c = b.Z, c = null == c ? null : Li.b(c);
        return null == c ? null : Hh.b(c);
      }(), kj, 0, z, "-");
      return O(c) ? React.d.B(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.B(null, W(c), React.d.small(null, "Portfolio Company Employees"));
    }()), W(Ss(b.r)));
  }, Os.prototype.t = function() {
    return this.rg;
  }, Os.prototype.u = function(b, c) {
    return new Os(this.wa, this.ta, this.ja, this.Wf, this.r, this.Z, this.jf, c);
  });
  return new Os(g, f, e, d, c, b, Us, null);
}, Xs = function Ws(b, c, d, e) {
  var f = Ts(c), f = P(f) ? K.a(T, f) : f, g = J.a(f, Mg), k = J.a(f, oj), l = J.a(f, oi);
  "undefined" === typeof Ps && (Ps = function(b, c, d, e, f, g, k, l, aa, Ia) {
    this.wa = b;
    this.ta = c;
    this.ja = d;
    this.Xf = e;
    this.C = f;
    this.r = g;
    this.Z = k;
    this.Wc = l;
    this.ih = aa;
    this.sg = Ia;
    this.q = 0;
    this.g = 393216;
  }, Ps.T = !0, Ps.S = "clustermap.components.map-report/t23295", Ps.V = function(b, c) {
    return ic(c, "clustermap.components.map-report/t23295");
  }, Ps.prototype.Ja = !0, Ps.prototype.Fa = function() {
    var b = this;
    return React.d.M(null, React.d.Od({className:"secondary"}, React.d.fc(null, "Portfolio Company"), function() {
      var c = ei.b(b.Wc);
      return O(c) ? React.d.kb(X(c), null) : React.d.kb(null, W(c));
    }(), W(ar(b.C))), React.d.he(null, function() {
      var c = Z.b ? Z.b(b.ta) : Z.call(null, b.ta);
      return O(c) ? React.d.B(X(c), function() {
        var c = Ns(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }()) : React.d.B(null, W(c), function() {
        var c = Ns(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }());
    }(), function() {
      var c = Z.b ? Z.b(b.ja) : Z.call(null, b.ja);
      return O(c) ? React.d.B(X(c), function() {
        var c = Ns.e(b.ja, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }()) : React.d.B(null, W(c), function() {
        var c = Ns.e(b.ja, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }());
    }(), function() {
      var c = $n.m ? $n.m(function() {
        var c = b.Z, c = null == c ? null : qj.b(c);
        return null == c ? null : Hh.b(c);
      }(), Fj, 2, z, "-") : $n.call(null, function() {
        var c = b.Z, c = null == c ? null : qj.b(c);
        return null == c ? null : Hh.b(c);
      }(), Fj, 2, z, "-");
      return O(c) ? React.d.B(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.B(null, W(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.Z, c = null == c ? null : Li.b(c);
        return null == c ? null : Hh.b(c);
      }(), kj, 0, z, "-") : Z.call(null, function() {
        var c = b.Z, c = null == c ? null : Li.b(c);
        return null == c ? null : Hh.b(c);
      }(), kj, 0, z, "-");
      return O(c) ? React.d.B(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.B(null, W(c), React.d.small(null, "Portfolio Company Employees"));
    }()), W(Ss(b.r)));
  }, Ps.prototype.t = function() {
    return this.sg;
  }, Ps.prototype.u = function(b, c) {
    return new Ps(this.wa, this.ta, this.ja, this.Xf, this.C, this.r, this.Z, this.Wc, this.ih, c);
  });
  return new Ps(l, k, g, f, e, d, c, b, Ws, null);
}, Zs = function Ys(b, c, d, e) {
  var f = Ts(c), f = P(f) ? K.a(T, f) : f, g = J.a(f, Mg), k = J.a(f, oj), l = J.a(f, oi);
  "undefined" === typeof Qs && (Qs = function(b, c, d, e, f, g, k, l, aa, Ia) {
    this.wa = b;
    this.ta = c;
    this.ja = d;
    this.Yf = e;
    this.C = f;
    this.r = g;
    this.Z = k;
    this.Me = l;
    this.Nf = aa;
    this.tg = Ia;
    this.q = 0;
    this.g = 393216;
  }, Qs.T = !0, Qs.S = "clustermap.components.map-report/t23345", Qs.V = function(b, c) {
    return ic(c, "clustermap.components.map-report/t23345");
  }, Qs.prototype.Ja = !0, Qs.prototype.Fa = function() {
    var b = this;
    return React.d.M(null, React.d.Od({className:"secondary"}, React.d.fc(null, "Investor"), function() {
      var c = ei.b(b.Me);
      return O(c) ? React.d.kb(X(c), null) : React.d.kb(null, W(c));
    }(), W(ar(b.C))), React.d.he(null, function() {
      var c = Z.b ? Z.b(b.wa) : Z.call(null, b.wa);
      return O(c) ? React.d.B(X(c), function() {
        var c = Ns.e(b.wa, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }()) : React.d.B(null, W(c), function() {
        var c = Ns.e(b.wa, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }());
    }(), function() {
      var c = Z.b ? Z.b(b.ja) : Z.call(null, b.ja);
      return O(c) ? React.d.B(X(c), function() {
        var c = Ns.e(b.ja, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }()) : React.d.B(null, W(c), function() {
        var c = Ns.e(b.ja, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }());
    }(), function() {
      var c = $n.m ? $n.m(function() {
        var c = b.Z, c = null == c ? null : qj.b(c);
        return null == c ? null : Hh.b(c);
      }(), Fj, 2, z, "-") : $n.call(null, function() {
        var c = b.Z, c = null == c ? null : qj.b(c);
        return null == c ? null : Hh.b(c);
      }(), Fj, 2, z, "-");
      return O(c) ? React.d.B(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.B(null, W(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.Z, c = null == c ? null : Li.b(c);
        return null == c ? null : Hh.b(c);
      }(), kj, 0, z, "-") : Z.call(null, function() {
        var c = b.Z, c = null == c ? null : Li.b(c);
        return null == c ? null : Hh.b(c);
      }(), kj, 0, z, "-");
      return O(c) ? React.d.B(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.B(null, W(c), React.d.small(null, "Portfolio Company Employees"));
    }()), W(Ss(b.r)));
  }, Qs.prototype.t = function() {
    return this.tg;
  }, Qs.prototype.u = function(b, c) {
    return new Qs(this.wa, this.ta, this.ja, this.Yf, this.C, this.r, this.Z, this.Me, this.Nf, c);
  });
  return new Qs(l, k, g, f, e, d, c, b, Ys, null);
}, at = function $s(b, c, d, e) {
  var f = Ts(c), f = P(f) ? K.a(T, f) : f, g = J.a(f, Mg), k = J.a(f, oj), l = J.a(f, oi);
  "undefined" === typeof Rs && (Rs = function(b, c, d, e, f, g, k, l, aa, Ia) {
    this.wa = b;
    this.ta = c;
    this.ja = d;
    this.Zf = e;
    this.C = f;
    this.r = g;
    this.Z = k;
    this.Xa = l;
    this.Ff = aa;
    this.ug = Ia;
    this.q = 0;
    this.g = 393216;
  }, Rs.T = !0, Rs.S = "clustermap.components.map-report/t23399", Rs.V = function(b, c) {
    return ic(c, "clustermap.components.map-report/t23399");
  }, Rs.prototype.Ja = !0, Rs.prototype.Fa = function() {
    var b = this;
    return React.d.M(null, React.d.Od({className:"secondary"}, React.d.fc(null, "Constituency"), function() {
      var c = ei.b(b.Xa);
      return O(c) ? React.d.kb(X(c), React.d.nf(null), q(function() {
        var c = Yj.b(b.Xa);
        return q(c) ? c : yk.b(b.Xa);
      }()) ? React.d.small(null, "(", W(Yj.b(b.Xa)), ", ", W(yk.b(b.Xa)), ")") : null) : React.d.kb(null, W(c), React.d.nf(null), q(function() {
        var c = Yj.b(b.Xa);
        return q(c) ? c : yk.b(b.Xa);
      }()) ? React.d.small(null, "(", W(Yj.b(b.Xa)), ", ", W(yk.b(b.Xa)), ")") : null);
    }(), W(ar(b.C))), React.d.he(null, function() {
      var c = Z.b ? Z.b(b.wa) : Z.call(null, b.wa);
      return O(c) ? React.d.B(X(c), function() {
        var c = Ns.e(b.wa, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }()) : React.d.B(null, W(c), function() {
        var c = Ns.e(b.wa, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }());
    }(), function() {
      var c = Z.b ? Z.b(b.ta) : Z.call(null, b.ta);
      return O(c) ? React.d.B(X(c), function() {
        var c = Ns(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }()) : React.d.B(null, W(c), function() {
        var c = Ns(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, W(c));
      }());
    }(), function() {
      var c = $n.m ? $n.m(function() {
        var c = b.Z, c = null == c ? null : qj.b(c);
        return null == c ? null : Hh.b(c);
      }(), Fj, 2, z, "-") : $n.call(null, function() {
        var c = b.Z, c = null == c ? null : qj.b(c);
        return null == c ? null : Hh.b(c);
      }(), Fj, 2, z, "-");
      return O(c) ? React.d.B(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.B(null, W(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.Z, c = null == c ? null : Li.b(c);
        return null == c ? null : Hh.b(c);
      }(), kj, 0, z, "-") : Z.call(null, function() {
        var c = b.Z, c = null == c ? null : Li.b(c);
        return null == c ? null : Hh.b(c);
      }(), kj, 0, z, "-");
      return O(c) ? React.d.B(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.B(null, W(c), React.d.small(null, "Portfolio Company Employees"));
    }()), W(Ss(b.r)));
  }, Rs.prototype.t = function() {
    return this.ug;
  }, Rs.prototype.u = function(b, c) {
    return new Rs(this.wa, this.ta, this.ja, this.Zf, this.C, this.r, this.Z, this.Xa, this.Ff, c);
  });
  return new Rs(l, k, g, f, e, d, c, b, $s, null);
};
function bt(a, b) {
  var c = En.b(b), d = P(c) ? K.a(T, c) : c, c = J.a(d, wk), d = J.a(d, ai), e = Be.a(a, new R(null, 2, 5, S, [ci, vj], null)), f = Be.a(a, new R(null, 2, 5, S, [ci, jk], null)), g = Bh.b(a);
  return q(yd.a ? yd.a(Wh, e) : yd.call(null, Wh, e)) ? Xs(f, g, d, c) : q(yd.a ? yd.a(ck, e) : yd.call(null, ck, e)) ? Zs(f, g, d, c) : q(yd.a ? yd.a(Ch, e) : yd.call(null, Ch, e)) ? at(f, g, d, c) : Vs(g, d);
}
;var ct, dt = new R(null, 2, 5, S, [new R(null, 2, 5, S, [59.54, 2.3], null), new R(null, 2, 5, S, [49.29, -11.29], null)], null);
function et(a) {
  a.If(Cg(dt), Cg(new n(null, 2, ["paddingTopLeft", new R(null, 2, 5, S, [0, 0], null), "paddingBottomRight", new R(null, 2, 5, S, [0, 0], null)], null)));
}
var ft, ht, it = config, jt = null == it ? null : it.ri, kt = null == jt ? null : jt.map;
ht = null == kt ? null : kt.ci;
ft = q(ht) ? ht : "mccraigmccraig.h4f921b9";
function lt(a) {
  a = L.map.call(null, a, {zoomControl:!1});
  var b = L.Ei.Zi.call(null, ft, {detectRetina:ib(config.jh)}), c = L.control.zoom.call(null, {position:"bottomright"});
  a.$h(b);
  a.Zh(c);
  et(a);
  return new n(null, 4, [di, a, Kh, ug.b(sf), hj, ug.b(sf), vi, ug.b(Vf)], null);
}
var mt = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    if (q(A(b) ? b : null)) {
      var e = B(b), f = new L.Kh(e.yi(), e.xi()), e = nb.c(function() {
        return function(a, b) {
          return a.extend(b);
        };
      }(e, f), f, C(b));
      return a.If(e);
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
function nt(a, b) {
  return "" + v(function() {
    var c = ie.a(function(b) {
      return[v("\x3cli"), v(""), v("\x3e"), v("\x3ca"), v(no(new n(null, 3, [Pg, a.a ? a.a(Wh, b) : a.call(null, Wh, b), hk, null, Qh, null], null))), v("\x3e"), v(po(ei.b(b))), v("\x3c/a\x3e"), v("\x3c/li\x3e")].join("");
    }, b);
    return O(c) ? [v("\x3cul"), v(no(Sf.e(F([new n(null, 2, [hk, null, Qh, "map-marker-popup-location-list"], null), c], 0)))), v("\x3e"), v("\x3c/ul\x3e")].join("") : [v('\x3cul class\x3d"map-marker-popup-location-list"\x3e'), v(po(c)), v("\x3c/ul\x3e")].join("");
  }());
}
function ot(a, b, c) {
  var d = function() {
    var a = null == c ? null : B(c), a = null == a ? null : ti.b(a), a = null == a ? null : Gd(a);
    return null == a ? null : Cg(a);
  }();
  if (q(d)) {
    var e = L.si(Cg(new n(null, 4, [bk, "map-marker", qk, new R(null, 2, 5, S, [24, 28], null), li, new R(null, 2, 5, S, [12, 14], null), Wi, new R(null, 2, 5, S, [0, -8], null)], null))), d = L.Fi(d, Cg(new n(null, 1, [Jh, e], null)));
    a = nt(a, c);
    d.di(a);
    d.gf(b);
    return d;
  }
  return console.log([v("missing location: "), v(function() {
    var a = new Xa, b = Za;
    try {
      Za = function(b) {
        return a.append(b);
      }, rg.e(F([c], 0));
    } finally {
      Za = b;
    }
    return "" + v(a);
  }())].join(""));
}
function pt(a, b, c, d) {
  var e = Ub(c), f = Xf(Pf(e)), g = Xf(Pf(d)), k = Pm.a(f, g), l = Qm.a(g, f), p = Qm.a(f, g), t = ze(sf, ie.a(function() {
    return function(c) {
      return new R(null, 2, 5, S, [c, ot(a, b, J.a(d, c))], null);
    };
  }(e, f, g, k, l, p), l)), f = ze(sf, ie.a(function(b) {
    return function(c) {
      var e = S, f = J.a(b, c), g = J.a(d, c);
      f.Yi(nt(a, g));
      return new R(null, 2, 5, e, [c, f], null);
    };
  }(e, f, g, k, l, p, t), k));
  (function() {
    for (var a = A(p), c = null, d = 0, f = 0;;) {
      if (f < d) {
        var g = c.A(null, f), g = J.a(e, g);
        b.Yc(g);
        f += 1;
      } else {
        if (a = A(a)) {
          kd(a) ? (d = uc(a), a = vc(a), c = d, d = H(d)) : (g = B(a), c = J.a(e, g), b.Yc(c), a = E(a), c = null, d = 0), f = 0;
        } else {
          return null;
        }
      }
    }
  })();
  vg(c, Sf.e(F([f, t], 0)));
}
function qt(a) {
  a = Hg.b(a);
  a = P(a) ? K.a(T, a) : a;
  a = J.a(a, "coordinates");
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
  return L.Ci(Cg(new R(null, 2, 5, S, [new R(null, 2, 5, S, [c, a], null), new R(null, 2, 5, S, [e, d], null)], null)));
}
function rt(a, b, c, d) {
  b = q(b) ? b[c] : null;
  var e = q(b) ? b.tolerance : null;
  b = q(b) ? new R(null, 2, 5, S, [e, b], null) : null;
  a = a.i ? a.i(c, d, dj, 7) : a.call(null, c, d, dj, 7);
  return q(a) ? a : b;
}
function st(a, b) {
  var c = P(b) ? K.a(T, b) : b, d = J.a(c, Hj), c = J.a(c, kk);
  q(q(c) ? d : c) ? a.fe(Cg(new n(null, 5, [mi, "#0000aa", Xh, 2, $h, 1, bj, !0, ni, 0.2], null))) : q(c) ? a.fe(Cg(new n(null, 5, [mi, "#0000aa", Xh, 2, $h, 1, bj, !0, ni, 0.2], null))) : q(d) ? a.fe(Cg(new n(null, 4, [mi, "#000000", Xh, 2, $h, 1, bj, !1], null))) : a.fe(Cg(new n(null, 5, [mi, "#ff0000", Xh, 2, $h, 0, bj, !1, ni, 0], null)));
}
function tt(a, b, c, d, e) {
  e = P(e) ? K.a(T, e) : e;
  var f = J.a(e, kk), g = d.tolerance, k = qt(d.envelope);
  d = L.ui(d.geojson);
  st(d, e);
  d.gf(b);
  d.nc("click", function() {
    return ep.a(a, new R(null, 2, 5, S, [lk, new R(null, 2, 5, S, [Ch, c], null)], null));
  });
  return new n(null, 5, [hk, c, ji, g, kk, f, dk, d, ui, k], null);
}
function ut(a, b, c, d, e, f, g, k) {
  if (q(c)) {
    var l = Ub(e), p = Xf(Pf(l)), t = Ub(f);
    k = Xf(K.a(Zd, ie.a(ge.a(Xg, fh), K.a(Zd, Rf(k)))));
    var x = Om.a(k, g), D = Qm.a(x, p), M = Qm.a(p, x), N = Pm.a(p, x), ba = ie.a(function(e, f, k, l) {
      return function(e) {
        var f = new n(null, 2, [kk, qd(l, e), Hj, qd(g, e)], null), k = rt(b, c, e, d.Nd());
        q(k) ? (I.c(k, 0, null), k = I.c(k, 1, null), e = tt(a, d, e, k, f)) : e = null;
        return e;
      };
    }(l, p, t, k, x, D, M, N), D), U = ie.a(function(e, f, k, l) {
      return function(f) {
        a: {
          var k = J.a(e, f);
          f = new n(null, 2, [kk, qd(l, f), Hj, qd(g, f)], null);
          var k = P(k) ? K.a(T, k) : k, p = J.a(k, hk), t = rt(b, c, p, d.Nd());
          if (q(t)) {
            p = I.c(t, 0, null);
            t = I.c(t, 1, null);
            if (be.a(p, ji.b(k))) {
              d.Yc(dk.b(k));
              f = tt(a, d, hk.b(k), t, f);
              break a;
            }
            st(dk.b(k), f);
          }
          f = k;
        }
        return f;
      };
    }(l, p, t, k, x, D, M, N, ba), N), aa = function() {
      for (var a = A(M), b = null, c = 0, e = 0;;) {
        if (e < c) {
          var f = b.A(null, e), f = J.a(l, f);
          q(f) && d.Yc(dk.b(f));
          e += 1;
        } else {
          if (a = A(a)) {
            kd(a) ? (c = uc(a), a = vc(a), b = c, c = H(c)) : (f = B(a), b = J.a(l, f), q(b) && d.Yc(dk.b(b)), a = E(a), b = null, c = 0), e = 0;
          } else {
            return null;
          }
        }
      }
    }(), p = nb.c(function() {
      return function(a, b) {
        var c = P(b) ? K.a(T, b) : b, d = J.a(c, hk);
        return Zc.c(a, d, c);
      };
    }(l, p, t, k, x, D, M, N, ba, U, aa), sf, ve(ee, Zd.a(ba, U)));
    vg(f, k);
    vg(e, p);
  }
}
function vt(a, b, c, d) {
  c = Ub(c);
  d = Ub(d);
  if (gd(c)) {
    return et(b), Wn(a, Ci, !0);
  }
  Wn(a, Ci, !1);
  a: {
    a = sf;
    for (d = A(d);;) {
      if (d) {
        var e = B(d), f = J.c(c, e, Bj);
        a = be.a(f, Bj) ? Zc.c(a, e, f) : a;
        d = E(d);
      } else {
        c = a;
        break a;
      }
    }
    c = void 0;
  }
  c = null == c ? null : Rf(c);
  c = null == c ? null : ie.a(ui, c);
  return q(c) ? K.c(mt, b, c) : mt(dt);
}
var xt = function wt(b, c) {
  var d = P(b) ? K.a(T, b) : b, e = J.a(d, ci);
  "undefined" === typeof ct && (ct = function(b, c, d, e, p, t, x) {
    this.selection = b;
    this.ie = c;
    this.Vf = d;
    this.w = e;
    this.ah = p;
    this.ig = t;
    this.qg = x;
    this.q = 0;
    this.g = 393216;
  }, ct.T = !0, ct.S = "clustermap.components.map/t23178", ct.V = function(b, c) {
    return ic(c, "clustermap.components.map/t23178");
  }, ct.prototype.Qg = !0, ct.prototype.Ve = function(b, c, d) {
    var e = this, p = P(c) ? K.a(T, c) : c;
    b = J.a(p, ci);
    c = J.a(p, si);
    var t = J.a(p, Ah), x = J.a(p, Ii);
    J.a(p, ph);
    J.a(p, Gj);
    d = P(d) ? K.a(T, d) : d;
    d = J.a(d, Ei);
    var p = Cn(e.w), p = P(p) ? K.a(T, p) : p, p = J.a(p, Ii), D = En.b(e.w), M = P(D) ? K.a(T, D) : D, D = J.a(M, wk);
    J.a(M, zh);
    var N = J.a(M, Lh), ba = J.a(M, ai), M = Dn.b(e.w), M = P(M) ? K.a(T, M) : M, U = J.a(M, th), aa = P(U) ? K.a(T, U) : U, U = J.a(aa, vi), Ia = J.a(aa, hj), gb = J.a(aa, Kh), ob = J.a(aa, di), aa = J.a(M, Ci);
    J.a(M, Ei);
    pt(D, ob, gb, c);
    be.a(x, p) && (ob.nc("mousemove", function(b) {
      var c = b.Sd.Of;
      b = b.Sd.Pf;
      var d = Bk(x, b, c), f = ie.a(function() {
        return function(b) {
          return b.Xe.id;
        };
      }(c, b, d), d), g = B(d), d = Xf(ke(1, f)), f = Dn.a(e.w, Ei);
      q(q(g) ? be.a(f, d) : g) && (f = L.Ri(), f.Xi(Cg(new R(null, 2, 5, S, [c, b], null))), f.Wi([v("\x3cp\x3e"), v(function() {
        var b = null == g ? null : g.Xe;
        return null == b ? null : b.qi;
      }()), v("\x3c/p\x3e")].join("")), f.Mi(ob));
      return Wn(e.w, Ei, d);
    }), ob.nc("click", function(b) {
      b = Bk(x, b.Sd.Pf, b.Sd.Of);
      b = ie.a(function() {
        return function(b) {
          return b.Xe.id;
        };
      }(b), b);
      return ep.a(ba, new R(null, 2, 5, S, [lk, new R(null, 2, 5, S, [Ch, B(b)], null)], null));
    }));
    q(t) && ut(ba, N, t, ob, Ia, U, d, c);
    return q(q(aa) ? aa : be.a(b, e.selection)) ? vt(e.w, ob, Ia, U) : null;
  }, ct.prototype.Re = !0, ct.prototype.Xd = function(b, c) {
    var d = this, e = lt(c), e = P(e) ? K.a(T, e) : e;
    J.a(e, Og);
    J.a(e, Kh);
    var p = J.a(e, di);
    Wn(d.w, th, e);
    Wn(d.w, Ei, Vf);
    p.nc("zoomend", function() {
      return wg.i(En.a(d.w, Si), Zc, Gj, p.Nd());
    });
    Nq.b(document).nc("clustermap-change-view", function() {
      console.log("change-view");
      var b = Dn.b(d.w), b = P(b) ? K.a(T, b) : b, b = J.a(b, th), c = P(b) ? K.a(T, b) : b, b = J.a(c, vi), c = J.a(c, hj);
      p.Ai();
      return vt(d.w, p, c, b);
    });
    return Un.i(d.ie, Zc, Gj, p.Nd());
  }, ct.prototype.Ja = !0, ct.prototype.Fa = function() {
    return React.d.M({className:"map", ref:"map"});
  }, ct.prototype.t = function() {
    return this.qg;
  }, ct.prototype.u = function(b, c) {
    return new ct(this.selection, this.ie, this.Vf, this.w, this.ah, this.ig, c);
  });
  return new ct(e, d, d, c, b, wt, null);
};
var yt = ug.b(Yc([Ng, ph, Ah, Bh, Eh, Uh, Vh, bi, ci, si, Ii, Ni, Pi, pj, rj, wj, Gj], [th, null, null, null, null, null, null, null, null, null, null, null, null, null, sf, null, null]));
function zt(a, b) {
  return nb.c(function(a, b) {
    var e = I.c(b, 0, null), f = I.c(b, 1, null), e = id(e) ? e : new R(null, 1, 5, S, [e], null);
    return Ee.c(a, e, ad(f) ? f : function() {
      return f;
    });
  }, a, b);
}
var At = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = P(a) ? K.a(T, a) : a;
    return wg.c(yt, zt, a);
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Bt() {
  var a = cp.b(1);
  To(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, V)) {
                      return b;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return c[5] = e, Eo(c), V;
                  }
                  if (s) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!Jd(e, V)) {
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
          g.p = c;
          g.b = b;
          return g;
        }();
      }(function(a) {
        var b = a[1];
        if (2 === b) {
          var b = a[2], c = new RTree(10), g = Object.keys(b), k = [], l = Cg(new n(null, 1, [vj, "FeatureCollection"], null));
          l.features = k;
          for (var g = A(g), p = null, t = 0, x = 0;;) {
            if (x < t) {
              var D = p.A(null, x), M = b[D], D = M.geojson, M = Cg(new n(null, 2, [vj, "Feature", Ji, new n(null, 2, [hk, M.id, ok, M.compact_name], null)], null));
              M.geometry = D;
              k.push(M);
              x += 1;
            } else {
              if (g = A(g)) {
                kd(g) ? (t = uc(g), g = vc(g), p = t, t = H(t)) : (p = B(g), t = b[p], p = t.geojson, t = Cg(new n(null, 2, [vj, "Feature", Ji, new n(null, 2, [hk, t.id, ok, t.compact_name], null)], null)), t.geometry = p, k.push(t), g = E(g), p = null, t = 0), x = 0;
              } else {
                break;
              }
            }
          }
          c.ti(l);
          b = At.e(F([Ah, b, Ii, c], 0));
          return Do(a, b);
        }
        return 1 === b ? (b = Mr.e("uk_constituencies", F([oh, !0], 0)), Bo(a, 2, b)) : null;
      });
    }(), c = function() {
      var c = b.p ? b.p() : b.call(null);
      c[6] = a;
      return c;
    }();
    return Ao(c);
  });
}
function Ct() {
  var a = cp.b(1);
  To(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, V)) {
                      return b;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return c[5] = e, Eo(c), V;
                  }
                  if (s) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!Jd(e, V)) {
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
          g.p = c;
          g.b = b;
          return g;
        }();
      }(function(a) {
        var b = a[1];
        return 2 === b ? (b = At.e(F([pj, a[2]], 0)), Do(a, b)) : 1 === b ? (b = Pr(), Bo(a, 2, b)) : null;
      });
    }(), c = function() {
      var c = b.p ? b.p() : b.call(null);
      c[6] = a;
      return c;
    }();
    return Ao(c);
  });
}
var Dt = new mp;
function Et(a, b, c) {
  return q(q(b) ? c : b) ? Bp(Dt, [v("/"), v(Kd(q(a) ? a : "map")), v("/"), v(Kd(b)), v("/"), v(Kd(c))].join("")) : q(a) ? Bp(Dt, [v("/"), v(Kd(a))].join("")) : Bp(Dt, "" + v(""));
}
function Ft() {
  var a = tp(Dt), b = fg(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/, a);
  I.c(b, 0, null);
  var a = I.c(b, 1, null), c = I.c(b, 2, null), b = I.c(b, 3, null);
  return new n(null, 3, [Ng, a, vj, c, hk, b], null);
}
var Gt = new n(null, 7, [lh, Ir(function(a) {
  if (0 < H(va(a))) {
    a = Gr([v("/api/"), v(Kr), v("/search?q\x3d"), v(a)].join(""));
  } else {
    a = new R(null, 1, 5, S, [{}], null);
    var b = cp.b(Wd(100, a));
    fp.a(b, a);
    a = b;
  }
  return a;
}, function(a) {
  return At.e(F([rj, Hg.b(a)], 0));
}), lk, function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  var c = Ft(), c = P(c) ? K.a(T, c) : c, c = J.a(c, Ng);
  return Et(c, b, a);
}, $i, Ir(function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  var c = q(b) ? new tf([b, a]) : sf, d = Vh.b(Ub(yt));
  return be.a(c, d) ? (At.e(F([Vh, c], 0)), q(y.a ? y.a(Wh, b) : y.call(null, Wh, b)) ? new R(null, 2, 5, S, [new R(null, 6, 5, S, [Gr([v("/api/"), v(Kr), v("/portfolio-companies/"), v(a)].join("")), Pr.e(F([c], 0)), Or.e(F([c], 0)), Qr.e(F([c], 0)), Rr.e(F([c], 0)), Nr.e(F([c], 0))], null), b], null) : q(y.a ? y.a(ck, b) : y.call(null, ck, b)) ? new R(null, 2, 5, S, [new R(null, 6, 5, S, [Gr([v("/api/"), v(Kr), v("/investor-companies/"), v(a)].join("")), Pr.e(F([c], 0)), Or.e(F([c], 0)), Qr.e(F([c], 
  0)), Rr.e(F([c], 0)), Nr.e(F([c], 0))], null), b], null) : q(y.a ? y.a(Ch, b) : y.call(null, Ch, b)) ? new R(null, 2, 5, S, [new R(null, 6, 5, S, [Gr([v("/api/"), v(Kr), v("/constituencies/"), v(a)].join("")), Pr.e(F([c], 0)), Or.e(F([c], 0)), Qr.e(F([c], 0)), Rr.e(F([c], 0)), Nr.e(F([c], 0))], null), b], null) : new R(null, 2, 5, S, [new R(null, 6, 5, S, [null, Pr.e(F([c], 0)), Or.e(F([c], 0)), Qr.e(F([c], 0)), Rr.e(F([c], 0)), null], null), b], null)) : null;
}, function(a, b) {
  var c = I.c(a, 0, null), d = I.c(a, 1, null), e = I.c(a, 2, null), f = I.c(a, 3, null), g = I.c(a, 4, null), k = I.c(a, 5, null);
  return At.e(F([ci, new n(null, 2, [vj, b, jk, c], null), Bh, d, Ni, e, bi, f, Pi, g, si, k], 0));
}), fk, function(a) {
  var b = Ft(), c = P(b) ? K.a(T, b) : b, b = J.a(c, hk), c = J.a(c, vj);
  return Et(a, c, b);
}, Cj, function(a) {
  a = Ld.b(a);
  if (be.a(a, Ng.b(Ub(yt)))) {
    At.e(F([Ng, a], 0));
    a = Kd(a);
    if (!q(J.a(Ks, a))) {
      throw Error([v("unknown view: "), v(a)].join(""));
    }
    var b = Hs.b("body"), c = [v("#nav ."), v(a)].join(""), c = Hs.b(c), d = Fr.a(c, ".."), d = Hs.a(d, "\x3e .active");
    vr(d, "active");
    ur(c, "active");
    for (var c = A(Ks), d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.A(null, f), k = I.c(g, 0, null), g = I.c(g, 1, null);
        y.a(k, a) ? ur(b, g) : vr(b, g);
        f += 1;
      } else {
        if (c = A(c)) {
          kd(c) ? (e = uc(c), c = vc(c), d = e, e = H(e)) : (e = B(c), d = I.c(e, 0, null), e = I.c(e, 1, null), y.a(d, a) ? ur(b, e) : vr(b, e), c = E(c), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return Nq.b(document).aj("clustermap-change-view");
  }
  return null;
}, Pj, function(a) {
  var b = cp.b(1);
  To(function() {
    var c = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, V)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Eo(c), V;
                  }
                  if (s) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Jd(d, V)) {
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
          d.p = c;
          d.b = b;
          return d;
        }();
      }(function(b) {
        var c = b[1];
        if (2 === c) {
          return c = At.e(F([Eh, b[7], bi, b[2]], 0)), Do(b, c);
        }
        if (1 === c) {
          var c = Ub(yt), c = Eh.b(c), c = Sf.e(F([c, a], 0)), d = Ub(yt), d = Vh.b(d), d = Sf.e(F([d, c], 0)), d = Qr.e(F([d], 0));
          b[7] = c;
          return Bo(b, 2, d);
        }
        return null;
      });
    }(), d = function() {
      var a = c.p ? c.p() : c.call(null);
      a[6] = b;
      return a;
    }();
    return Ao(d);
  });
  return b;
}, Qg, function(a) {
  var b = cp.b(1);
  To(function() {
    var c = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, V)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Eo(c), V;
                  }
                  if (s) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Jd(d, V)) {
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
          d.p = c;
          d.b = b;
          return d;
        }();
      }(function(b) {
        var c = b[1];
        if (2 === c) {
          return c = At.e(F([Uh, b[7], Pi, b[2]], 0)), Do(b, c);
        }
        if (1 === c) {
          var c = Ub(yt), c = Uh.b(c), c = Sf.e(F([c, a], 0)), d = Ub(yt), d = Vh.b(d), d = Sf.e(F([d, c], 0)), d = Rr.e(F([d], 0));
          b[7] = c;
          return Bo(b, 2, d);
        }
        return null;
      });
    }(), d = function() {
      var a = c.p ? c.p() : c.call(null);
      a[6] = b;
      return a;
    }();
    return Ao(d);
  });
  return b;
}], null);
function Ht(a) {
  wg.i(fs, Zc, "/", function(b) {
    P(b) && K.a(T, b);
    return ep.a(a, new R(null, 2, 5, S, [$i, null], null));
  });
  wg.i(fs, Zc, "/:view", function(b) {
    b = P(b) ? K.a(T, b) : b;
    b = J.a(b, Ng);
    ep.a(a, new R(null, 2, 5, S, [Cj, b], null));
    return ep.a(a, new R(null, 2, 5, S, [$i, null], null));
  });
  wg.i(fs, Zc, "/:view/:type/:id", function(b) {
    var c = P(b) ? K.a(T, b) : b;
    b = J.a(c, hk);
    var d = J.a(c, vj), c = J.a(c, Ng);
    ep.a(a, new R(null, 2, 5, S, [Cj, c], null));
    return ep.a(a, new R(null, 2, 5, S, [$i, new R(null, 2, 5, S, [Ld.b(d), b], null)], null));
  });
  ml(Dt, "navigate", function(a) {
    a = Km.a(a.uh, /\?/);
    var c = I.c(a, 0, null);
    a = I.c(a, 1, null);
    a = q(a) ? new n(null, 1, [Sg, ls(a)], null) : null;
    var d;
    var e = B(ks(is, c));
    q(e) ? (d = I.c(e, 0, null), e = I.c(e, 1, null), d = new R(null, 2, 5, S, [e, sf], null)) : (d = A(ks(js, c))) ? (e = B(d), d = I.c(e, 0, null), e = I.c(e, 1, null), d = new R(null, 2, 5, S, [e, ms(d, c)], null)) : d = null;
    c = I.c(d, 0, null);
    d = I.c(d, 1, null);
    c = q(c) ? c : ee;
    a = Sf.e(F([d, a], 0));
    return c.b ? c.b(a) : c.call(null, a);
  });
  wp(Dt, !0);
}
function It() {
  var a = cp.p(), b = he.a(ds, yt), c = he.a(es, yt), b = new n(null, 3, [ai, a, wk, b, zh, c], null);
  Ms(a);
  Ht(a);
  Bt();
  Ct();
  Rn.i(yt, Sf.e(F([b, new n(null, 2, [Si, yt, Lh, he.c(Wr, yt, ph)], null)], 0)), xt, document.getElementById("map-component"));
  Rn.i(yt, b, vs, document.getElementById("search-component"));
  Rn.i(yt, b, bt, document.getElementById("map-report-component"));
  Rn.i(yt, b, Zq(), document.getElementById("page-title-component"));
  Rn.i(yt, b, Yq, document.getElementById("full-report-component"));
  var d = cp.b(1);
  To(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, V)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Eo(c), V;
                  }
                  if (s) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Jd(d, V)) {
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
          d.p = c;
          d.b = b;
          return d;
        }();
      }(function(b) {
        var c = b[1];
        if (7 === c) {
          var d = b[2], c = I.c(d, 0, null), d = I.c(d, 1, null), e = J.a(Gt, c);
          if (ib(e)) {
            throw Error([v("no handler for event-type: "), v(c)].join(""));
          }
          c = e.b ? e.b(d) : e.call(null, d);
          b[7] = c;
          b[2] = null;
          b[1] = 2;
          return V;
        }
        return 6 === c ? (c = b[2], b[2] = c, b[1] = 3, V) : 5 === c ? (b[2] = null, b[1] = 6, V) : 4 === c ? Bo(b, 7, a) : 3 === c ? (c = b[2], Do(b, c)) : 2 === c ? (b[1] = 4, V) : 1 === c ? (b[2] = null, b[1] = 2, V) : null;
      });
    }(), c = function() {
      var a = b.p ? b.p() : b.call(null);
      a[6] = d;
      return a;
    }();
    return Ao(c);
  });
  return d;
}
;function Jt() {
  return It();
}
q(config.jh) ? setTimeout(Jt, 2E3) : It();

})();

//# sourceMappingURL=clustermap.js.map