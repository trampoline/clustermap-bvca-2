var h, ba = ba || {}, ca = this;
function da(a, b) {
  var c = a.split("."), d = ca;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
function ea(a) {
  a = a.split(".");
  for (var b = ca, c;c = a.shift();) {
    if (null != b[c]) {
      b = b[c];
    } else {
      return null;
    }
  }
  return b;
}
function fa() {
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
  a.wb = b.prototype;
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
Xa.prototype.hb = "";
Xa.prototype.set = function(a) {
  this.hb = "" + a;
};
Xa.prototype.append = function(a, b, c) {
  this.hb += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.hb += arguments[d];
    }
  }
  return this;
};
Xa.prototype.toString = function() {
  return this.hb;
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
function ib(a) {
  return null == a;
}
function jb(a) {
  return q(a) ? !1 : !0;
}
function r(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : s ? !1 : null;
}
function kb(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = kb(b), c = q(q(c) ? c.R : c) ? c.Q : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function lb(a) {
  var b = a.Q;
  return q(b) ? b : "" + v(a);
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
    return ob.e ? ob.e(function(a, b) {
      a.push(b);
      return a;
    }, [], b) : ob.call(null, function(a, b) {
      a.push(b);
      return a;
    }, [], b);
  }
  function b(a) {
    return c.c(null, a);
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
  c.d = b;
  c.c = a;
  return c;
}(), rb = {}, sb = {};
function tb(a) {
  if (a ? a.wa : a) {
    return a.wa(a);
  }
  var b;
  b = tb[m(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw u("ICloneable.-clone", a);
  }
  return b.call(null, a);
}
var ub = {};
function vb(a) {
  if (a ? a.K : a) {
    return a.K(a);
  }
  var b;
  b = vb[m(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function wb(a) {
  if (a ? a.Y : a) {
    return a.Y(a);
  }
  var b;
  b = wb[m(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw u("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var xb = {};
function yb(a, b) {
  if (a ? a.T : a) {
    return a.T(a, b);
  }
  var c;
  c = yb[m(null == a ? null : a)];
  if (!c && (c = yb._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var zb = {}, Bb = function() {
  function a(a, b, c) {
    if (a ? a.ja : a) {
      return a.ja(a, b, c);
    }
    var g;
    g = Bb[m(null == a ? null : a)];
    if (!g && (g = Bb._, !g)) {
      throw u("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.C : a) {
      return a.C(a, b);
    }
    var c;
    c = Bb[m(null == a ? null : a)];
    if (!c && (c = Bb._, !c)) {
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
  c.c = b;
  c.e = a;
  return c;
}(), Cb = {};
function Db(a) {
  if (a ? a.W : a) {
    return a.W(a);
  }
  var b;
  b = Db[m(null == a ? null : a)];
  if (!b && (b = Db._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Eb(a) {
  if (a ? a.ga : a) {
    return a.ga(a);
  }
  var b;
  b = Eb[m(null == a ? null : a)];
  if (!b && (b = Eb._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Fb = {}, Gb = {}, Hb = function() {
  function a(a, b, c) {
    if (a ? a.M : a) {
      return a.M(a, b, c);
    }
    var g;
    g = Hb[m(null == a ? null : a)];
    if (!g && (g = Hb._, !g)) {
      throw u("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.L : a) {
      return a.L(a, b);
    }
    var c;
    c = Hb[m(null == a ? null : a)];
    if (!c && (c = Hb._, !c)) {
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
  c.c = b;
  c.e = a;
  return c;
}();
function Ib(a, b) {
  if (a ? a.Rb : a) {
    return a.Rb(a, b);
  }
  var c;
  c = Ib[m(null == a ? null : a)];
  if (!c && (c = Ib._, !c)) {
    throw u("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Jb(a, b, c) {
  if (a ? a.ib : a) {
    return a.ib(a, b, c);
  }
  var d;
  d = Jb[m(null == a ? null : a)];
  if (!d && (d = Jb._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Kb = {};
function Lb(a, b) {
  if (a ? a.oc : a) {
    return a.oc(a, b);
  }
  var c;
  c = Lb[m(null == a ? null : a)];
  if (!c && (c = Lb._, !c)) {
    throw u("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Mb = {};
function Nb(a) {
  if (a ? a.md : a) {
    return a.md();
  }
  var b;
  b = Nb[m(null == a ? null : a)];
  if (!b && (b = Nb._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ob(a) {
  if (a ? a.nd : a) {
    return a.nd();
  }
  var b;
  b = Ob[m(null == a ? null : a)];
  if (!b && (b = Ob._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Pb = {};
function Qb(a, b) {
  if (a ? a.ae : a) {
    return a.ae(0, b);
  }
  var c;
  c = Qb[m(null == a ? null : a)];
  if (!c && (c = Qb._, !c)) {
    throw u("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Rb(a) {
  if (a ? a.kb : a) {
    return a.kb(a);
  }
  var b;
  b = Rb[m(null == a ? null : a)];
  if (!b && (b = Rb._, !b)) {
    throw u("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Sb(a) {
  if (a ? a.lb : a) {
    return a.lb(a);
  }
  var b;
  b = Sb[m(null == a ? null : a)];
  if (!b && (b = Sb._, !b)) {
    throw u("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Tb = {};
function Ub(a, b, c) {
  if (a ? a.od : a) {
    return a.od(a, b, c);
  }
  var d;
  d = Ub[m(null == a ? null : a)];
  if (!d && (d = Ub._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Vb(a) {
  if (a ? a.zb : a) {
    return a.zb(a);
  }
  var b;
  b = Vb[m(null == a ? null : a)];
  if (!b && (b = Vb._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Wb = {};
function Xb(a) {
  if (a ? a.w : a) {
    return a.w(a);
  }
  var b;
  b = Xb[m(null == a ? null : a)];
  if (!b && (b = Xb._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Yb = {};
function Zb(a, b) {
  if (a ? a.A : a) {
    return a.A(a, b);
  }
  var c;
  c = Zb[m(null == a ? null : a)];
  if (!c && (c = Zb._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var $b = {}, ac = function() {
  function a(a, b, c) {
    if (a ? a.fa : a) {
      return a.fa(a, b, c);
    }
    var g;
    g = ac[m(null == a ? null : a)];
    if (!g && (g = ac._, !g)) {
      throw u("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.ea : a) {
      return a.ea(a, b);
    }
    var c;
    c = ac[m(null == a ? null : a)];
    if (!c && (c = ac._, !c)) {
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
  c.c = b;
  c.e = a;
  return c;
}();
function bc(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = bc[m(null == a ? null : a)];
  if (!c && (c = bc._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function cc(a) {
  if (a ? a.N : a) {
    return a.N(a);
  }
  var b;
  b = cc[m(null == a ? null : a)];
  if (!b && (b = cc._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var dc = {};
function ec(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = ec[m(null == a ? null : a)];
  if (!b && (b = ec._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var fc = {}, gc = {}, hc = {};
function ic(a) {
  if (a ? a.qc : a) {
    return a.qc(a);
  }
  var b;
  b = ic[m(null == a ? null : a)];
  if (!b && (b = ic._, !b)) {
    throw u("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function jc(a, b) {
  if (a ? a.fe : a) {
    return a.fe(0, b);
  }
  var c;
  c = jc[m(null == a ? null : a)];
  if (!c && (c = jc._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var kc = {};
function lc(a, b, c) {
  if (a ? a.I : a) {
    return a.I(a, b, c);
  }
  var d;
  d = lc[m(null == a ? null : a)];
  if (!d && (d = lc._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function mc(a, b, c) {
  if (a ? a.de : a) {
    return a.de(0, b, c);
  }
  var d;
  d = mc[m(null == a ? null : a)];
  if (!d && (d = mc._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function nc(a, b, c) {
  if (a ? a.ce : a) {
    return a.ce(0, b, c);
  }
  var d;
  d = nc[m(null == a ? null : a)];
  if (!d && (d = nc._, !d)) {
    throw u("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function oc(a, b) {
  if (a ? a.ee : a) {
    return a.ee(0, b);
  }
  var c;
  c = oc[m(null == a ? null : a)];
  if (!c && (c = oc._, !c)) {
    throw u("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function pc(a) {
  if (a ? a.Ab : a) {
    return a.Ab(a);
  }
  var b;
  b = pc[m(null == a ? null : a)];
  if (!b && (b = pc._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function qc(a, b) {
  if (a ? a.mb : a) {
    return a.mb(a, b);
  }
  var c;
  c = qc[m(null == a ? null : a)];
  if (!c && (c = qc._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function rc(a) {
  if (a ? a.nb : a) {
    return a.nb(a);
  }
  var b;
  b = rc[m(null == a ? null : a)];
  if (!b && (b = rc._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function sc(a, b, c) {
  if (a ? a.Tb : a) {
    return a.Tb(a, b, c);
  }
  var d;
  d = sc[m(null == a ? null : a)];
  if (!d && (d = sc._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function tc(a, b, c) {
  if (a ? a.be : a) {
    return a.be(0, b, c);
  }
  var d;
  d = tc[m(null == a ? null : a)];
  if (!d && (d = tc._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function uc(a) {
  if (a ? a.Zd : a) {
    return a.Zd();
  }
  var b;
  b = uc[m(null == a ? null : a)];
  if (!b && (b = uc._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function vc(a) {
  if (a ? a.Vc : a) {
    return a.Vc(a);
  }
  var b;
  b = vc[m(null == a ? null : a)];
  if (!b && (b = vc._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function wc(a) {
  if (a ? a.Wc : a) {
    return a.Wc(a);
  }
  var b;
  b = wc[m(null == a ? null : a)];
  if (!b && (b = wc._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function xc(a) {
  if (a ? a.Uc : a) {
    return a.Uc(a);
  }
  var b;
  b = xc[m(null == a ? null : a)];
  if (!b && (b = xc._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function yc(a) {
  this.rh = a;
  this.r = 0;
  this.k = 1073741824;
}
yc.prototype.fe = function(a, b) {
  return this.rh.append(b);
};
function zc(a) {
  var b = new Xa;
  a.I(null, new yc(b), ab());
  return "" + v(b);
}
function Ac(a, b) {
  if (q(x.c ? x.c(a, b) : x.call(null, a, b))) {
    return 0;
  }
  var c = jb(a.va);
  if (q(c ? b.va : c)) {
    return-1;
  }
  if (q(a.va)) {
    if (jb(b.va)) {
      return 1;
    }
    c = Bc.c ? Bc.c(a.va, b.va) : Bc.call(null, a.va, b.va);
    return 0 === c ? Bc.c ? Bc.c(a.name, b.name) : Bc.call(null, a.name, b.name) : c;
  }
  return y ? Bc.c ? Bc.c(a.name, b.name) : Bc.call(null, a.name, b.name) : null;
}
function Cc(a, b, c, d, e) {
  this.va = a;
  this.name = b;
  this.eb = c;
  this.fb = d;
  this.sa = e;
  this.k = 2154168321;
  this.r = 4096;
}
h = Cc.prototype;
h.I = function(a, b) {
  return jc(b, this.eb);
};
h.N = function() {
  var a = this.fb;
  return null != a ? a : this.fb = a = Dc.c ? Dc.c(Ec.d ? Ec.d(this.va) : Ec.call(null, this.va), Ec.d ? Ec.d(this.name) : Ec.call(null, this.name)) : Dc.call(null, Ec.d ? Ec.d(this.va) : Ec.call(null, this.va), Ec.d ? Ec.d(this.name) : Ec.call(null, this.name));
};
h.A = function(a, b) {
  return new Cc(this.va, this.name, this.eb, this.fb, b);
};
h.w = function() {
  return this.sa;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Hb.e(c, this, null);
      case 3:
        return Hb.e(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return Hb.e(a, this, null);
};
h.c = function(a, b) {
  return Hb.e(a, this, b);
};
h.H = function(a, b) {
  return b instanceof Cc ? this.eb === b.eb : !1;
};
h.toString = function() {
  return this.eb;
};
var Fc = function() {
  function a(a, b) {
    var c = null != a ? [v(a), v("/"), v(b)].join("") : b;
    return new Cc(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof Cc ? a : c.c(null, a);
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
  c.d = b;
  c.c = a;
  return c;
}();
function Gc(a) {
  return tb(a);
}
function z(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.k & 8388608 || a.jb)) {
    return a.J(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Hc(a, 0);
  }
  if (r(dc, a)) {
    return ec(a);
  }
  if (s) {
    throw Error([v(a), v("is not ISeqable")].join(""));
  }
  return null;
}
function A(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.k & 64 || a.Db)) {
    return a.W(null);
  }
  a = z(a);
  return null == a ? null : Db(a);
}
function B(a) {
  return null != a ? a && (a.k & 64 || a.Db) ? a.ga(null) : (a = z(a)) ? Eb(a) : Ic : Ic;
}
function C(a) {
  return null == a ? null : a && (a.k & 128 || a.pc) ? a.ka(null) : z(B(a));
}
var x = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || bc(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.c(a, d)) {
          if (C(e)) {
            a = d, d = A(e), e = C(e);
          } else {
            return b.c(d, A(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.m = 2;
    a.j = function(a) {
      var b = A(a);
      a = C(a);
      var d = A(a);
      a = B(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.j = c.j;
  b.d = function() {
    return!0;
  };
  b.c = a;
  b.f = c.f;
  return b;
}();
ub["null"] = !0;
vb["null"] = function() {
  return 0;
};
Date.prototype.pf = !0;
Date.prototype.H = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
bc.number = function(a, b) {
  return a === b;
};
Wb["function"] = !0;
Xb["function"] = function() {
  return null;
};
rb["function"] = !0;
cc._ = function(a) {
  return la(a);
};
function Jc(a) {
  return a + 1;
}
var Kc = function() {
  function a(a, b, c, d) {
    for (var l = vb(a);;) {
      if (d < l) {
        c = b.c ? b.c(c, Bb.c(a, d)) : b.call(null, c, Bb.c(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = vb(a), l = 0;;) {
      if (l < d) {
        c = b.c ? b.c(c, Bb.c(a, l)) : b.call(null, c, Bb.c(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = vb(a);
    if (0 === c) {
      return b.t ? b.t() : b.call(null);
    }
    for (var d = Bb.c(a, 0), l = 1;;) {
      if (l < c) {
        d = b.c ? b.c(d, Bb.c(a, l)) : b.call(null, d, Bb.c(a, l)), l += 1;
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
  d.c = c;
  d.e = b;
  d.o = a;
  return d;
}(), Lc = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.c ? b.c(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.c ? b.c(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.t ? b.t() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.c ? b.c(d, a[l]) : b.call(null, d, a[l]), l += 1;
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
  d.c = c;
  d.e = b;
  d.o = a;
  return d;
}();
function Mc(a) {
  return a ? a.k & 2 || a.Sb ? !0 : a.k ? !1 : r(ub, a) : r(ub, a);
}
function Nc(a) {
  return a ? a.k & 16 || a.Cb ? !0 : a.k ? !1 : r(zb, a) : r(zb, a);
}
function Hc(a, b) {
  this.h = a;
  this.i = b;
  this.k = 166199550;
  this.r = 8192;
}
h = Hc.prototype;
h.N = function() {
  return Oc.d ? Oc.d(this) : Oc.call(null, this);
};
h.ka = function() {
  return this.i + 1 < this.h.length ? new Hc(this.h, this.i + 1) : null;
};
h.T = function(a, b) {
  return F.c ? F.c(b, this) : F.call(null, b, this);
};
h.qc = function() {
  var a = vb(this);
  return 0 < a ? new Pc(this, a - 1, null) : null;
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Lc.o(this.h, b, this.h[this.i], this.i + 1);
};
h.fa = function(a, b, c) {
  return Lc.o(this.h, b, c, this.i);
};
h.J = function() {
  return this;
};
h.K = function() {
  return this.h.length - this.i;
};
h.W = function() {
  return this.h[this.i];
};
h.ga = function() {
  return this.i + 1 < this.h.length ? new Hc(this.h, this.i + 1) : Ic;
};
h.H = function(a, b) {
  return Qc.c ? Qc.c(this, b) : Qc.call(null, this, b);
};
h.wa = function() {
  return new Hc(this.h, this.i);
};
h.C = function(a, b) {
  var c = b + this.i;
  return c < this.h.length ? this.h[c] : null;
};
h.ja = function(a, b, c) {
  a = b + this.i;
  return a < this.h.length ? this.h[a] : c;
};
h.Y = function() {
  return Ic;
};
var Rc = function() {
  function a(a, b) {
    return b < a.length ? new Hc(a, b) : null;
  }
  function b(a) {
    return c.c(a, 0);
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
  c.d = b;
  c.c = a;
  return c;
}(), E = function() {
  function a(a, b) {
    return Rc.c(a, b);
  }
  function b(a) {
    return Rc.c(a, 0);
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
  c.d = b;
  c.c = a;
  return c;
}();
function Pc(a, b, c) {
  this.lc = a;
  this.i = b;
  this.l = c;
  this.k = 32374862;
  this.r = 8192;
}
h = Pc.prototype;
h.N = function() {
  return Oc.d ? Oc.d(this) : Oc.call(null, this);
};
h.T = function(a, b) {
  return F.c ? F.c(b, this) : F.call(null, b, this);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Sc.c ? Sc.c(b, this) : Sc.call(null, b, this);
};
h.fa = function(a, b, c) {
  return Sc.e ? Sc.e(b, c, this) : Sc.call(null, b, c, this);
};
h.J = function() {
  return this;
};
h.K = function() {
  return this.i + 1;
};
h.W = function() {
  return Bb.c(this.lc, this.i);
};
h.ga = function() {
  return 0 < this.i ? new Pc(this.lc, this.i - 1, null) : null;
};
h.H = function(a, b) {
  return Qc.c ? Qc.c(this, b) : Qc.call(null, this, b);
};
h.A = function(a, b) {
  return new Pc(this.lc, this.i, b);
};
h.wa = function() {
  return new Pc(this.lc, this.i, this.l);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return Tc.c ? Tc.c(Ic, this.l) : Tc.call(null, Ic, this.l);
};
function Uc(a) {
  return A(C(a));
}
function Wc(a) {
  for (;;) {
    var b = C(a);
    if (null != b) {
      a = b;
    } else {
      return A(a);
    }
  }
}
bc._ = function(a, b) {
  return a === b;
};
var Xc = function() {
  function a(a, b) {
    return null != a ? yb(a, b) : yb(Ic, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (q(e)) {
          a = b.c(a, d), d = A(e), e = C(e);
        } else {
          return b.c(a, d);
        }
      }
    }
    a.m = 2;
    a.j = function(a) {
      var b = A(a);
      a = C(a);
      var d = A(a);
      a = B(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.j = c.j;
  b.c = a;
  b.f = c.f;
  return b;
}();
function G(a) {
  if (null != a) {
    if (a && (a.k & 2 || a.Sb)) {
      a = a.K(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (r(ub, a)) {
            a = vb(a);
          } else {
            if (s) {
              a: {
                a = z(a);
                for (var b = 0;;) {
                  if (Mc(a)) {
                    a = b + vb(a);
                    break a;
                  }
                  a = C(a);
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
var Yc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return z(a) ? A(a) : c;
      }
      if (Nc(a)) {
        return Bb.e(a, b, c);
      }
      if (z(a)) {
        a = C(a), b -= 1;
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
        if (z(a)) {
          return A(a);
        }
        throw Error("Index out of bounds");
      }
      if (Nc(a)) {
        return Bb.c(a, b);
      }
      if (z(a)) {
        var c = C(a), g = b - 1;
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
  c.c = b;
  c.e = a;
  return c;
}(), H = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.k & 16 || a.Cb)) {
        return a.ja(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (r(zb, a)) {
        return Bb.c(a, b);
      }
      if (s) {
        if (a ? a.k & 64 || a.Db || (a.k ? 0 : r(Cb, a)) : r(Cb, a)) {
          return Yc.e(a, b, c);
        }
        throw Error([v("nth not supported on this type "), v(lb(kb(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.k & 16 || a.Cb)) {
      return a.C(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (r(zb, a)) {
      return Bb.c(a, b);
    }
    if (s) {
      if (a ? a.k & 64 || a.Db || (a.k ? 0 : r(Cb, a)) : r(Cb, a)) {
        return Yc.c(a, b);
      }
      throw Error([v("nth not supported on this type "), v(lb(kb(a)))].join(""));
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
  c.c = b;
  c.e = a;
  return c;
}(), I = function() {
  function a(a, b, c) {
    return null != a ? a && (a.k & 256 || a.ld) ? a.M(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : r(Gb, a) ? Hb.e(a, b, c) : s ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.k & 256 || a.ld) ? a.L(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : r(Gb, a) ? Hb.c(a, b) : null;
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
  c.c = b;
  c.e = a;
  return c;
}(), $c = function() {
  function a(a, b, c) {
    return null != a ? Jb(a, b, c) : Zc.c ? Zc.c([b], [c]) : Zc.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = E(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.e(a, d, e), q(l)) {
          d = A(l), e = Uc(l), l = C(C(l));
        } else {
          return a;
        }
      }
    }
    a.m = 3;
    a.j = function(a) {
      var b = A(a);
      a = C(a);
      var d = A(a);
      a = C(a);
      var l = A(a);
      a = B(a);
      return c(b, d, l, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.f(b, e, f, E(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 3;
  b.j = c.j;
  b.e = a;
  b.f = c.f;
  return b;
}(), ad = function() {
  function a(a, b) {
    return null == a ? null : Lb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.c(a, d);
        if (q(e)) {
          d = A(e), e = C(e);
        } else {
          return a;
        }
      }
    }
    a.m = 2;
    a.j = function(a) {
      var b = A(a);
      a = C(a);
      var d = A(a);
      a = B(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.j = c.j;
  b.d = function(a) {
    return a;
  };
  b.c = a;
  b.f = c.f;
  return b;
}();
function bd(a) {
  var b = ja(a);
  return b ? b : a ? q(q(null) ? null : a.lf) ? !0 : a.la ? !1 : r(rb, a) : r(rb, a);
}
var Tc = function cd(b, c) {
  return bd(b) && !(b ? b.k & 262144 || b.zf || (b.k ? 0 : r(Yb, b)) : r(Yb, b)) ? cd(function() {
    "undefined" === typeof Ya && (Ya = function(b, c, f, g) {
      this.l = b;
      this.cc = c;
      this.Ih = f;
      this.Bg = g;
      this.r = 0;
      this.k = 393217;
    }, Ya.R = !0, Ya.Q = "cljs.core/t34921", Ya.U = function(b, c) {
      return jc(c, "cljs.core/t34921");
    }, Ya.prototype.call = function() {
      function b(d, g) {
        d = this;
        var k = null;
        1 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return J.c ? J.c(b.cc, d) : J.call(null, b.cc, d);
      }
      b.m = 1;
      b.j = function(b) {
        var d = A(b);
        b = B(b);
        return c(d, b);
      };
      b.f = c;
      return b;
    }(), Ya.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(mb(c)));
    }, Ya.prototype.c = function() {
      function b(d) {
        var g = null;
        0 < arguments.length && (g = E(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, g);
      }
      function c(b) {
        return J.c ? J.c(self__.cc, b) : J.call(null, self__.cc, b);
      }
      b.m = 0;
      b.j = function(b) {
        b = z(b);
        return c(b);
      };
      b.f = c;
      return b;
    }(), Ya.prototype.lf = !0, Ya.prototype.w = function() {
      return this.Bg;
    }, Ya.prototype.A = function(b, c) {
      return new Ya(this.l, this.cc, this.Ih, c);
    });
    return new Ya(c, b, cd, null);
  }(), c) : null == b ? null : Zb(b, c);
};
function dd(a) {
  var b = null != a;
  return(b ? a ? a.k & 131072 || a.rf || (a.k ? 0 : r(Wb, a)) : r(Wb, a) : b) ? Xb(a) : null;
}
var ed = function() {
  function a(a, b) {
    return null == a ? null : Qb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.c(a, d);
        if (q(e)) {
          d = A(e), e = C(e);
        } else {
          return a;
        }
      }
    }
    a.m = 2;
    a.j = function(a) {
      var b = A(a);
      a = C(a);
      var d = A(a);
      a = B(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.j = c.j;
  b.d = function(a) {
    return a;
  };
  b.c = a;
  b.f = c.f;
  return b;
}(), fd = {}, gd = 0;
function Ec(a) {
  if (a && (a.k & 4194304 || a.wi)) {
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
            255 < gd && (fd = {}, gd = 0);
            var b = fd[a];
            "number" !== typeof b && (b = Ca(a), fd[a] = b, gd += 1);
            a = b;
          } else {
            a = null == a ? 0 : s ? cc(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function hd(a) {
  return null == a || jb(z(a));
}
function id(a) {
  return null == a ? !1 : a ? a.k & 8 || a.si ? !0 : a.k ? !1 : r(xb, a) : r(xb, a);
}
function jd(a) {
  return a ? a.k & 16777216 || a.uf ? !0 : a.k ? !1 : r(fc, a) : r(fc, a);
}
function K(a) {
  return null == a ? !1 : a ? a.k & 1024 || a.yi ? !0 : a.k ? !1 : r(Kb, a) : r(Kb, a);
}
function kd(a) {
  return a ? a.k & 16384 || a.Bi ? !0 : a.k ? !1 : r(Tb, a) : r(Tb, a);
}
function ld(a) {
  return a ? a.r & 512 || a.qi ? !0 : !1 : !1;
}
function md(a) {
  var b = [];
  Sa(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function nd(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var od = {};
function N(a) {
  return null == a ? !1 : a ? a.k & 64 || a.Db ? !0 : a.k ? !1 : r(Cb, a) : r(Cb, a);
}
function pd(a) {
  return q(a) ? !0 : !1;
}
function qd(a, b) {
  return I.e(a, b, od) === od ? !1 : !0;
}
function Bc(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (kb(a) === kb(b)) {
    return a && (a.r & 2048 || a.mc) ? a.nc(null, b) : Qa(a, b);
  }
  if (s) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var rd = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = Bc(H.c(a, g), H.c(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = G(a), g = G(b);
    return f < g ? -1 : f > g ? 1 : s ? c.o(a, b, f, 0) : null;
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
  c.c = b;
  c.o = a;
  return c;
}();
function sd(a) {
  return x.c(a, Bc) ? Bc : function(b, c) {
    var d = a.c ? a.c(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : q(d) ? -1 : q(a.c ? a.c(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var ud = function() {
  function a(a, b) {
    if (z(b)) {
      var c = td.d ? td.d(b) : td.call(null, b);
      Ra(c, sd(a));
      return z(c);
    }
    return Ic;
  }
  function b(a) {
    return c.c(Bc, a);
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
  c.d = b;
  c.c = a;
  return c;
}(), Sc = function() {
  function a(a, b, c) {
    for (c = z(c);;) {
      if (c) {
        b = a.c ? a.c(b, A(c)) : a.call(null, b, A(c)), c = C(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = z(b);
    return c ? ob.e ? ob.e(a, A(c), C(c)) : ob.call(null, a, A(c), C(c)) : a.t ? a.t() : a.call(null);
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
  c.c = b;
  c.e = a;
  return c;
}(), ob = function() {
  function a(a, b, c) {
    return c && (c.k & 524288 || c.$d) ? c.fa(null, a, b) : c instanceof Array ? Lc.e(c, a, b) : "string" === typeof c ? Lc.e(c, a, b) : r($b, c) ? ac.e(c, a, b) : s ? Sc.e(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.k & 524288 || b.$d) ? b.ea(null, a) : b instanceof Array ? Lc.c(b, a) : "string" === typeof b ? Lc.c(b, a) : r($b, b) ? ac.c(b, a) : s ? Sc.c(a, b) : null;
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
  c.c = b;
  c.e = a;
  return c;
}();
function vd(a, b) {
  return(a % b + b) % b;
}
function wd(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.d ? Math.floor.d((a - a % 2) / 2) : Math.floor.call(null, (a - a % 2) / 2) : Math.ceil.d ? Math.ceil.d((a - a % 2) / 2) : Math.ceil.call(null, (a - a % 2) / 2);
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
      2 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      for (;;) {
        if (a.c(b, c)) {
          if (C(d)) {
            b = c, c = A(d), d = C(d);
          } else {
            return a.c(c, A(d));
          }
        } else {
          return!1;
        }
      }
    }
    b.m = 2;
    b.j = function(a) {
      var b = A(a);
      a = C(a);
      var c = A(a);
      a = B(a);
      return d(b, c, a);
    };
    b.f = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return bc(a, d);
      default:
        return b.f(a, d, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 2;
  a.j = b.j;
  a.d = function() {
    return!0;
  };
  a.c = function(a, b) {
    return bc(a, b);
  };
  a.f = b.f;
  return a;
}();
function zd(a) {
  var b = 1;
  for (a = z(a);;) {
    if (a && 0 < b) {
      b -= 1, a = C(a);
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
      1 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new Xa(b.d(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.d(A(l))), l = C(l);
        } else {
          return e.toString();
        }
      }
    }
    a.m = 1;
    a.j = function(a) {
      var b = A(a);
      a = B(a);
      return c(b, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, E(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.j = c.j;
  b.t = function() {
    return "";
  };
  b.d = a;
  b.f = c.f;
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
  a.c = function(a, c) {
    return a.substring(c);
  };
  a.e = function(a, c, d) {
    return a.substring(c, d);
  };
  return a;
}();
function Qc(a, b) {
  return pd(jd(b) ? function() {
    for (var c = z(a), d = z(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (x.c(A(c), A(d))) {
        c = C(c), d = C(d);
      } else {
        return s ? !1 : null;
      }
    }
  }() : null);
}
function Dc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Oc(a) {
  if (z(a)) {
    var b = Ec(A(a));
    for (a = C(a);;) {
      if (null == a) {
        return b;
      }
      b = Dc(b, Ec(A(a)));
      a = C(a);
    }
  } else {
    return 0;
  }
}
function Bd(a) {
  var b = 0;
  for (a = z(a);;) {
    if (a) {
      var c = A(a), b = (b + (Ec(Cd.d ? Cd.d(c) : Cd.call(null, c)) ^ Ec(Dd.d ? Dd.d(c) : Dd.call(null, c)))) % 4503599627370496;
      a = C(a);
    } else {
      return b;
    }
  }
}
function Ed(a, b, c, d, e) {
  this.l = a;
  this.Za = b;
  this.Ra = c;
  this.count = d;
  this.s = e;
  this.k = 65937646;
  this.r = 8192;
}
h = Ed.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.ka = function() {
  return 1 === this.count ? null : this.Ra;
};
h.T = function(a, b) {
  return new Ed(this.l, b, this, this.count + 1, null);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Sc.c(b, this);
};
h.fa = function(a, b, c) {
  return Sc.e(b, c, this);
};
h.J = function() {
  return this;
};
h.K = function() {
  return this.count;
};
h.kb = function() {
  return this.Za;
};
h.lb = function() {
  return Eb(this);
};
h.W = function() {
  return this.Za;
};
h.ga = function() {
  return 1 === this.count ? Ic : this.Ra;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new Ed(b, this.Za, this.Ra, this.count, this.s);
};
h.wa = function() {
  return new Ed(this.l, this.Za, this.Ra, this.count, this.s);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return Ic;
};
function Fd(a) {
  this.l = a;
  this.k = 65937614;
  this.r = 8192;
}
h = Fd.prototype;
h.N = function() {
  return 0;
};
h.ka = function() {
  return null;
};
h.T = function(a, b) {
  return new Ed(this.l, b, null, 1, null);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Sc.c(b, this);
};
h.fa = function(a, b, c) {
  return Sc.e(b, c, this);
};
h.J = function() {
  return null;
};
h.K = function() {
  return 0;
};
h.kb = function() {
  return null;
};
h.lb = function() {
  throw Error("Can't pop empty list");
};
h.W = function() {
  return null;
};
h.ga = function() {
  return Ic;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new Fd(b);
};
h.wa = function() {
  return new Fd(this.l);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return this;
};
var Ic = new Fd(null);
function Gd(a) {
  return(a ? a.k & 134217728 || a.zi || (a.k ? 0 : r(hc, a)) : r(hc, a)) ? ic(a) : ob.e(Xc, Ic, a);
}
var Hd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Hc && 0 === a.i) {
      b = a.h;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.W(null)), a = a.ka(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Ic;;) {
      if (0 < a) {
        var f = a - 1, e = e.T(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function Id(a, b, c, d) {
  this.l = a;
  this.Za = b;
  this.Ra = c;
  this.s = d;
  this.k = 65929452;
  this.r = 8192;
}
h = Id.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.ka = function() {
  return null == this.Ra ? null : z(this.Ra);
};
h.T = function(a, b) {
  return new Id(null, b, this, this.s);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Sc.c(b, this);
};
h.fa = function(a, b, c) {
  return Sc.e(b, c, this);
};
h.J = function() {
  return this;
};
h.W = function() {
  return this.Za;
};
h.ga = function() {
  return null == this.Ra ? Ic : this.Ra;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new Id(b, this.Za, this.Ra, this.s);
};
h.wa = function() {
  return new Id(this.l, this.Za, this.Ra, this.s);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return Tc(Ic, this.l);
};
function F(a, b) {
  var c = null == b;
  return(c ? c : b && (b.k & 64 || b.Db)) ? new Id(null, a, b, null) : new Id(null, a, z(b), null);
}
function P(a, b, c, d) {
  this.va = a;
  this.name = b;
  this.$a = c;
  this.fb = d;
  this.k = 2153775105;
  this.r = 4096;
}
h = P.prototype;
h.I = function(a, b) {
  return jc(b, [v(":"), v(this.$a)].join(""));
};
h.N = function() {
  null == this.fb && (this.fb = Dc(Ec(this.va), Ec(this.name)) + 2654435769);
  return this.fb;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return I.c(c, this);
      case 3:
        return I.e(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return I.c(a, this);
};
h.c = function(a, b) {
  return I.e(a, this, b);
};
h.H = function(a, b) {
  return b instanceof P ? this.$a === b.$a : !1;
};
h.toString = function() {
  return[v(":"), v(this.$a)].join("");
};
function Jd(a, b) {
  return a === b ? !0 : a instanceof P && b instanceof P ? a.$a === b.$a : !1;
}
var Ld = function() {
  function a(a, b) {
    return new P(a, b, [v(q(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof P) {
      return a;
    }
    if (a instanceof Cc) {
      var b;
      if (a && (a.r & 4096 || a.sf)) {
        b = a.va;
      } else {
        throw Error([v("Doesn't support namespace: "), v(a)].join(""));
      }
      return new P(b, Kd.d ? Kd.d(a) : Kd.call(null, a), a.eb, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new P(b[0], b[1], a, null) : new P(null, b[0], a, null)) : null;
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
  c.d = b;
  c.c = a;
  return c;
}();
function Md(a, b, c, d) {
  this.l = a;
  this.Ib = b;
  this.O = c;
  this.s = d;
  this.r = 0;
  this.k = 32374988;
}
h = Md.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.ka = function() {
  ec(this);
  return null == this.O ? null : C(this.O);
};
h.T = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return zc(this);
};
function Nd(a) {
  null != a.Ib && (a.O = a.Ib.t ? a.Ib.t() : a.Ib.call(null), a.Ib = null);
  return a.O;
}
h.ea = function(a, b) {
  return Sc.c(b, this);
};
h.fa = function(a, b, c) {
  return Sc.e(b, c, this);
};
h.J = function() {
  Nd(this);
  if (null == this.O) {
    return null;
  }
  for (var a = this.O;;) {
    if (a instanceof Md) {
      a = Nd(a);
    } else {
      return this.O = a, z(this.O);
    }
  }
};
h.W = function() {
  ec(this);
  return null == this.O ? null : A(this.O);
};
h.ga = function() {
  ec(this);
  return null != this.O ? B(this.O) : Ic;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new Md(b, this.Ib, this.O, this.s);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return Tc(Ic, this.l);
};
function Od(a, b) {
  this.$ = a;
  this.end = b;
  this.r = 0;
  this.k = 2;
}
Od.prototype.K = function() {
  return this.end;
};
Od.prototype.add = function(a) {
  this.$[this.end] = a;
  return this.end += 1;
};
Od.prototype.aa = function() {
  var a = new Pd(this.$, 0, this.end);
  this.$ = null;
  return a;
};
function Qd(a) {
  return new Od(Array(a), 0);
}
function Pd(a, b, c) {
  this.h = a;
  this.S = b;
  this.end = c;
  this.r = 0;
  this.k = 524306;
}
h = Pd.prototype;
h.ea = function(a, b) {
  return Lc.o(this.h, b, this.h[this.S], this.S + 1);
};
h.fa = function(a, b, c) {
  return Lc.o(this.h, b, c, this.S);
};
h.Zd = function() {
  if (this.S === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Pd(this.h, this.S + 1, this.end);
};
h.C = function(a, b) {
  return this.h[this.S + b];
};
h.ja = function(a, b, c) {
  return 0 <= b && b < this.end - this.S ? this.h[this.S + b] : c;
};
h.K = function() {
  return this.end - this.S;
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
  d.d = c;
  d.c = b;
  d.e = a;
  return d;
}();
function Sd(a, b, c, d) {
  this.aa = a;
  this.Ta = b;
  this.l = c;
  this.s = d;
  this.k = 31850732;
  this.r = 1536;
}
h = Sd.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.ka = function() {
  if (1 < vb(this.aa)) {
    return new Sd(uc(this.aa), this.Ta, this.l, null);
  }
  var a = ec(this.Ta);
  return null == a ? null : a;
};
h.T = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return zc(this);
};
h.J = function() {
  return this;
};
h.W = function() {
  return Bb.c(this.aa, 0);
};
h.ga = function() {
  return 1 < vb(this.aa) ? new Sd(uc(this.aa), this.Ta, this.l, null) : null == this.Ta ? Ic : this.Ta;
};
h.Uc = function() {
  return null == this.Ta ? null : this.Ta;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new Sd(this.aa, this.Ta, b, this.s);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return Tc(Ic, this.l);
};
h.Vc = function() {
  return this.aa;
};
h.Wc = function() {
  return null == this.Ta ? Ic : this.Ta;
};
function Td(a, b) {
  return 0 === vb(a) ? b : new Sd(a, b, null, null);
}
function Ud(a, b) {
  a.add(b);
}
function td(a) {
  for (var b = [];;) {
    if (z(a)) {
      b.push(A(a)), a = C(a);
    } else {
      return b;
    }
  }
}
function Vd(a, b) {
  if (Mc(a)) {
    return G(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && z(c)) {
      c = C(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Xd = function Wd(b) {
  return null == b ? null : null == C(b) ? z(A(b)) : s ? F(A(b), Wd(C(b))) : null;
}, Yd = function() {
  function a(a, b) {
    return new Md(null, function() {
      var c = z(a);
      return c ? ld(c) ? Td(vc(c), d.c(wc(c), b)) : F(A(c), d.c(B(c), b)) : b;
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
      2 < arguments.length && (f = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function w(a, b) {
        return new Md(null, function() {
          var c = z(a);
          return c ? ld(c) ? Td(vc(c), w(wc(c), b)) : F(A(c), w(B(c), b)) : q(b) ? w(A(b), C(b)) : null;
        }, null, null);
      }(d.c(a, c), e);
    }
    a.m = 2;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var d = A(a);
      a = B(a);
      return b(c, d, a);
    };
    a.f = b;
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
        return e.f(d, g, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.j = e.j;
  d.t = c;
  d.d = b;
  d.c = a;
  d.f = e.f;
  return d;
}(), Zd = function() {
  function a(a, b, c, d) {
    return F(a, F(b, F(c, d)));
  }
  function b(a, b, c) {
    return F(a, F(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, t) {
      var w = null;
      4 < arguments.length && (w = E(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, w);
    }
    function b(a, c, d, e, f) {
      return F(a, F(c, F(d, F(e, Xd(f)))));
    }
    a.m = 4;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var d = A(a);
      a = C(a);
      var e = A(a);
      a = C(a);
      var t = A(a);
      a = B(a);
      return b(c, d, e, t, a);
    };
    a.f = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return z(c);
      case 2:
        return F(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.f(c, f, g, k, E(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 4;
  c.j = d.j;
  c.d = function(a) {
    return z(a);
  };
  c.c = function(a, b) {
    return F(a, b);
  };
  c.e = b;
  c.o = a;
  c.f = d.f;
  return c;
}(), $d = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var k = null;
      2 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = qc(a, c), q(d)) {
          c = A(d), d = C(d);
        } else {
          return a;
        }
      }
    }
    a.m = 2;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var g = A(a);
      a = B(a);
      return b(c, g, a);
    };
    a.f = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return qc(a, d);
      default:
        return b.f(a, d, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 2;
  a.j = b.j;
  a.c = function(a, b) {
    return qc(a, b);
  };
  a.f = b.f;
  return a;
}(), ae = function() {
  var a = null, b = function() {
    function a(c, f, g, k) {
      var l = null;
      3 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = sc(a, c, d), q(k)) {
          c = A(k), d = Uc(k), k = C(C(k));
        } else {
          return a;
        }
      }
    }
    a.m = 3;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var g = A(a);
      a = C(a);
      var k = A(a);
      a = B(a);
      return b(c, g, k, a);
    };
    a.f = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return sc(a, d, e);
      default:
        return b.f(a, d, e, E(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 3;
  a.j = b.j;
  a.e = function(a, b, e) {
    return sc(a, b, e);
  };
  a.f = b.f;
  return a;
}();
function be(a, b, c) {
  var d = z(c);
  if (0 === b) {
    return a.t ? a.t() : a.call(null);
  }
  c = Db(d);
  var e = Eb(d);
  if (1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c);
  }
  var d = Db(e), f = Eb(e);
  if (2 === b) {
    return a.c ? a.c(c, d) : a.c ? a.c(c, d) : a.call(null, c, d);
  }
  var e = Db(f), g = Eb(f);
  if (3 === b) {
    return a.e ? a.e(c, d, e) : a.e ? a.e(c, d, e) : a.call(null, c, d, e);
  }
  var f = Db(g), k = Eb(g);
  if (4 === b) {
    return a.o ? a.o(c, d, e, f) : a.o ? a.o(c, d, e, f) : a.call(null, c, d, e, f);
  }
  g = Db(k);
  k = Eb(k);
  if (5 === b) {
    return a.q ? a.q(c, d, e, f, g) : a.q ? a.q(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  a = Db(k);
  var l = Eb(k);
  if (6 === b) {
    return a.ta ? a.ta(c, d, e, f, g, a) : a.ta ? a.ta(c, d, e, f, g, a) : a.call(null, c, d, e, f, g, a);
  }
  var k = Db(l), p = Eb(l);
  if (7 === b) {
    return a.Bb ? a.Bb(c, d, e, f, g, a, k) : a.Bb ? a.Bb(c, d, e, f, g, a, k) : a.call(null, c, d, e, f, g, a, k);
  }
  var l = Db(p), t = Eb(p);
  if (8 === b) {
    return a.jd ? a.jd(c, d, e, f, g, a, k, l) : a.jd ? a.jd(c, d, e, f, g, a, k, l) : a.call(null, c, d, e, f, g, a, k, l);
  }
  var p = Db(t), w = Eb(t);
  if (9 === b) {
    return a.kd ? a.kd(c, d, e, f, g, a, k, l, p) : a.kd ? a.kd(c, d, e, f, g, a, k, l, p) : a.call(null, c, d, e, f, g, a, k, l, p);
  }
  var t = Db(w), D = Eb(w);
  if (10 === b) {
    return a.Xc ? a.Xc(c, d, e, f, g, a, k, l, p, t) : a.Xc ? a.Xc(c, d, e, f, g, a, k, l, p, t) : a.call(null, c, d, e, f, g, a, k, l, p, t);
  }
  var w = Db(D), M = Eb(D);
  if (11 === b) {
    return a.Yc ? a.Yc(c, d, e, f, g, a, k, l, p, t, w) : a.Yc ? a.Yc(c, d, e, f, g, a, k, l, p, t, w) : a.call(null, c, d, e, f, g, a, k, l, p, t, w);
  }
  var D = Db(M), O = Eb(M);
  if (12 === b) {
    return a.Zc ? a.Zc(c, d, e, f, g, a, k, l, p, t, w, D) : a.Zc ? a.Zc(c, d, e, f, g, a, k, l, p, t, w, D) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D);
  }
  var M = Db(O), Z = Eb(O);
  if (13 === b) {
    return a.$c ? a.$c(c, d, e, f, g, a, k, l, p, t, w, D, M) : a.$c ? a.$c(c, d, e, f, g, a, k, l, p, t, w, D, M) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, M);
  }
  var O = Db(Z), U = Eb(Z);
  if (14 === b) {
    return a.ad ? a.ad(c, d, e, f, g, a, k, l, p, t, w, D, M, O) : a.ad ? a.ad(c, d, e, f, g, a, k, l, p, t, w, D, M, O) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, M, O);
  }
  var Z = Db(U), aa = Eb(U);
  if (15 === b) {
    return a.bd ? a.bd(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z) : a.bd ? a.bd(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z);
  }
  var U = Db(aa), Ia = Eb(aa);
  if (16 === b) {
    return a.cd ? a.cd(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U) : a.cd ? a.cd(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U);
  }
  var aa = Db(Ia), gb = Eb(Ia);
  if (17 === b) {
    return a.ed ? a.ed(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa) : a.ed ? a.ed(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa);
  }
  var Ia = Db(gb), hb = Eb(gb);
  if (18 === b) {
    return a.fd ? a.fd(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa, Ia) : a.fd ? a.fd(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa, Ia) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa, Ia);
  }
  gb = Db(hb);
  hb = Eb(hb);
  if (19 === b) {
    return a.gd ? a.gd(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa, Ia, gb) : a.gd ? a.gd(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa, Ia, gb) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa, Ia, gb);
  }
  var qb = Db(hb);
  Eb(hb);
  if (20 === b) {
    return a.hd ? a.hd(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa, Ia, gb, qb) : a.hd ? a.hd(c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa, Ia, gb, qb) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, M, O, Z, U, aa, Ia, gb, qb);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var J = function() {
  function a(a, b, c, d, e) {
    b = Zd.o(b, c, d, e);
    c = a.m;
    return a.j ? (d = Vd(b, c + 1), d <= c ? be(a, d, b) : a.j(b)) : a.apply(a, td(b));
  }
  function b(a, b, c, d) {
    b = Zd.e(b, c, d);
    c = a.m;
    return a.j ? (d = Vd(b, c + 1), d <= c ? be(a, d, b) : a.j(b)) : a.apply(a, td(b));
  }
  function c(a, b, c) {
    b = Zd.c(b, c);
    c = a.m;
    if (a.j) {
      var d = Vd(b, c + 1);
      return d <= c ? be(a, d, b) : a.j(b);
    }
    return a.apply(a, td(b));
  }
  function d(a, b) {
    var c = a.m;
    if (a.j) {
      var d = Vd(b, c + 1);
      return d <= c ? be(a, d, b) : a.j(b);
    }
    return a.apply(a, td(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, M) {
      var O = null;
      5 < arguments.length && (O = E(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, O);
    }
    function b(a, c, d, e, f, g) {
      c = F(c, F(d, F(e, F(f, Xd(g)))));
      d = a.m;
      return a.j ? (e = Vd(c, d + 1), e <= d ? be(a, e, c) : a.j(c)) : a.apply(a, td(c));
    }
    a.m = 5;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var d = A(a);
      a = C(a);
      var e = A(a);
      a = C(a);
      var f = A(a);
      a = C(a);
      var g = A(a);
      a = B(a);
      return b(c, d, e, f, g, a);
    };
    a.f = b;
    return a;
  }(), e = function(e, k, l, p, t, w) {
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
        return f.f(e, k, l, p, t, E(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 5;
  e.j = f.j;
  e.c = d;
  e.e = c;
  e.o = b;
  e.q = a;
  e.f = f.f;
  return e;
}(), ce = function() {
  function a(a, b) {
    return!x.c(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return jb(J.o(x, a, c, d));
    }
    a.m = 2;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var d = A(a);
      a = B(a);
      return b(c, d, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.j = c.j;
  b.d = function() {
    return!1;
  };
  b.c = a;
  b.f = c.f;
  return b;
}();
function de(a) {
  return z(a) ? a : null;
}
function ee(a, b) {
  for (;;) {
    if (null == z(b)) {
      return!0;
    }
    if (q(a.d ? a.d(A(b)) : a.call(null, A(b)))) {
      var c = a, d = C(b);
      a = c;
      b = d;
    } else {
      return s ? !1 : null;
    }
  }
}
function fe(a, b) {
  for (;;) {
    if (z(b)) {
      var c = a.d ? a.d(A(b)) : a.call(null, A(b));
      if (q(c)) {
        return c;
      }
      var c = a, d = C(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function he(a) {
  return a;
}
function ie(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l);
      }
      function c(b, d, e) {
        return jb(J.o(a, b, d, e));
      }
      b.m = 2;
      b.j = function(a) {
        var b = A(a);
        a = C(a);
        var d = A(a);
        a = B(a);
        return c(b, d, a);
      };
      b.f = c;
      return b;
    }(), b = function(b, e, f) {
      switch(arguments.length) {
        case 0:
          return jb(a.t ? a.t() : a.call(null));
        case 1:
          return jb(a.d ? a.d(b) : a.call(null, b));
        case 2:
          return jb(a.c ? a.c(b, e) : a.call(null, b, e));
        default:
          return c.f(b, e, E(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.m = 2;
    b.j = c.j;
    return b;
  }();
}
var je = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = E(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, f);
        }
        function k(d, l, p, t) {
          return a.d ? a.d(b.d ? b.d(J.q(c, d, l, p, t)) : b.call(null, J.q(c, d, l, p, t))) : a.call(null, b.d ? b.d(J.q(c, d, l, p, t)) : b.call(null, J.q(c, d, l, p, t)));
        }
        d.m = 3;
        d.j = function(a) {
          var b = A(a);
          a = C(a);
          var c = A(a);
          a = C(a);
          var d = A(a);
          a = B(a);
          return k(b, c, d, a);
        };
        d.f = k;
        return d;
      }(), d = function(d, k, w, D) {
        switch(arguments.length) {
          case 0:
            return a.d ? a.d(b.d ? b.d(c.t ? c.t() : c.call(null)) : b.call(null, c.t ? c.t() : c.call(null))) : a.call(null, b.d ? b.d(c.t ? c.t() : c.call(null)) : b.call(null, c.t ? c.t() : c.call(null)));
          case 1:
            return a.d ? a.d(b.d ? b.d(c.d ? c.d(d) : c.call(null, d)) : b.call(null, c.d ? c.d(d) : c.call(null, d))) : a.call(null, b.d ? b.d(c.d ? c.d(d) : c.call(null, d)) : b.call(null, c.d ? c.d(d) : c.call(null, d)));
          case 2:
            return a.d ? a.d(b.d ? b.d(c.c ? c.c(d, k) : c.call(null, d, k)) : b.call(null, c.c ? c.c(d, k) : c.call(null, d, k))) : a.call(null, b.d ? b.d(c.c ? c.c(d, k) : c.call(null, d, k)) : b.call(null, c.c ? c.c(d, k) : c.call(null, d, k)));
          case 3:
            return a.d ? a.d(b.d ? b.d(c.e ? c.e(d, k, w) : c.call(null, d, k, w)) : b.call(null, c.e ? c.e(d, k, w) : c.call(null, d, k, w))) : a.call(null, b.d ? b.d(c.e ? c.e(d, k, w) : c.call(null, d, k, w)) : b.call(null, c.e ? c.e(d, k, w) : c.call(null, d, k, w)));
          default:
            return l.f(d, k, w, E(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.m = 3;
      d.j = l.j;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = E(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, k, l) {
          return a.d ? a.d(J.q(b, c, g, k, l)) : a.call(null, J.q(b, c, g, k, l));
        }
        c.m = 3;
        c.j = function(a) {
          var b = A(a);
          a = C(a);
          var c = A(a);
          a = C(a);
          var e = A(a);
          a = B(a);
          return d(b, c, e, a);
        };
        c.f = d;
        return c;
      }(), c = function(c, g, t, w) {
        switch(arguments.length) {
          case 0:
            return a.d ? a.d(b.t ? b.t() : b.call(null)) : a.call(null, b.t ? b.t() : b.call(null));
          case 1:
            return a.d ? a.d(b.d ? b.d(c) : b.call(null, c)) : a.call(null, b.d ? b.d(c) : b.call(null, c));
          case 2:
            return a.d ? a.d(b.c ? b.c(c, g) : b.call(null, c, g)) : a.call(null, b.c ? b.c(c, g) : b.call(null, c, g));
          case 3:
            return a.d ? a.d(b.e ? b.e(c, g, t) : b.call(null, c, g, t)) : a.call(null, b.e ? b.e(c, g, t) : b.call(null, c, g, t));
          default:
            return d.f(c, g, t, E(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.m = 3;
      c.j = d.j;
      return c;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, p) {
      var t = null;
      3 < arguments.length && (t = E(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, t);
    }
    function b(a, c, d, e) {
      var f = Gd(Zd.o(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d);
        }
        function b(a) {
          a = J.c(A(f), a);
          for (var c = C(f);;) {
            if (c) {
              a = A(c).call(null, a), c = C(c);
            } else {
              return a;
            }
          }
        }
        a.m = 0;
        a.j = function(a) {
          a = z(a);
          return b(a);
        };
        a.f = b;
        return a;
      }();
    }
    a.m = 3;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var d = A(a);
      a = C(a);
      var e = A(a);
      a = B(a);
      return b(c, d, e, a);
    };
    a.f = b;
    return a;
  }(), c = function(c, f, g, k) {
    switch(arguments.length) {
      case 0:
        return he;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.f(c, f, g, E(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 3;
  c.j = d.j;
  c.t = function() {
    return he;
  };
  c.d = function(a) {
    return a;
  };
  c.c = b;
  c.e = a;
  c.f = d.f;
  return c;
}(), ke = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = E(Array.prototype.slice.call(arguments, 0), 0));
        return t.call(this, b);
      }
      function t(e) {
        return J.q(a, b, c, d, e);
      }
      e.m = 0;
      e.j = function(a) {
        a = z(a);
        return t(a);
      };
      e.f = t;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = E(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return J.o(a, b, c, d);
      }
      d.m = 0;
      d.j = function(a) {
        a = z(a);
        return e(a);
      };
      d.f = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = E(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return J.e(a, b, c);
      }
      c.m = 0;
      c.j = function(a) {
        a = z(a);
        return d(a);
      };
      c.f = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, w) {
      var D = null;
      4 < arguments.length && (D = E(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, D);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = E(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return J.q(a, c, d, e, Yd.c(f, b));
        }
        b.m = 0;
        b.j = function(a) {
          a = z(a);
          return g(a);
        };
        b.f = g;
        return b;
      }();
    }
    a.m = 4;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var d = A(a);
      a = C(a);
      var e = A(a);
      a = C(a);
      var f = A(a);
      a = B(a);
      return b(c, d, e, f, a);
    };
    a.f = b;
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
        return e.f(d, g, k, l, E(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.j = e.j;
  d.d = function(a) {
    return a;
  };
  d.c = c;
  d.e = b;
  d.o = a;
  d.f = e.f;
  return d;
}(), le = function() {
  function a(a, b, c, e) {
    return new Md(null, function() {
      var p = z(b), t = z(c), w = z(e);
      return p && t && w ? F(a.e ? a.e(A(p), A(t), A(w)) : a.call(null, A(p), A(t), A(w)), d.o(a, B(p), B(t), B(w))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Md(null, function() {
      var e = z(b), p = z(c);
      return e && p ? F(a.c ? a.c(A(e), A(p)) : a.call(null, A(e), A(p)), d.e(a, B(e), B(p))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new Md(null, function() {
      var c = z(b);
      if (c) {
        if (ld(c)) {
          for (var e = vc(c), p = G(e), t = Qd(p), w = 0;;) {
            if (w < p) {
              var D = a.d ? a.d(Bb.c(e, w)) : a.call(null, Bb.c(e, w));
              t.add(D);
              w += 1;
            } else {
              break;
            }
          }
          return Td(t.aa(), d.c(a, wc(c)));
        }
        return F(a.d ? a.d(A(c)) : a.call(null, A(c)), d.c(a, B(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, w) {
      var D = null;
      4 < arguments.length && (D = E(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, D);
    }
    function b(a, c, e, f, g) {
      return d.c(function(b) {
        return J.c(a, b);
      }, function M(a) {
        return new Md(null, function() {
          var b = d.c(z, a);
          return ee(he, b) ? F(d.c(A, b), M(d.c(B, b))) : null;
        }, null, null);
      }(Xc.f(g, f, E([e, c], 0))));
    }
    a.m = 4;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var d = A(a);
      a = C(a);
      var e = A(a);
      a = C(a);
      var f = A(a);
      a = B(a);
      return b(c, d, e, f, a);
    };
    a.f = b;
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
        return e.f(d, g, k, l, E(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.j = e.j;
  d.c = c;
  d.e = b;
  d.o = a;
  d.f = e.f;
  return d;
}(), ne = function me(b, c) {
  return new Md(null, function() {
    if (0 < b) {
      var d = z(c);
      return d ? F(A(d), me(b - 1, B(d))) : null;
    }
    return null;
  }, null, null);
};
function oe(a, b) {
  return new Md(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (d = z(d), 0 < c && d) {
          c -= 1, d = B(d);
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
var pe = function() {
  function a(a, b) {
    return ne(a, c.d(b));
  }
  function b(a) {
    return new Md(null, function() {
      return F(a, c.d(a));
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
  c.d = b;
  c.c = a;
  return c;
}(), re = function qe(b, c) {
  return F(c, new Md(null, function() {
    return qe(b, b.d ? b.d(c) : b.call(null, c));
  }, null, null));
}, se = function() {
  function a(a, c) {
    return new Md(null, function() {
      var f = z(a), g = z(c);
      return f && g ? F(A(f), F(A(g), b.c(B(f), B(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new Md(null, function() {
        var c = le.c(z, Xc.f(e, d, E([a], 0)));
        return ee(he, c) ? Yd.c(le.c(A, c), J.c(b, le.c(B, c))) : null;
      }, null, null);
    }
    a.m = 2;
    a.j = function(a) {
      var b = A(a);
      a = C(a);
      var d = A(a);
      a = B(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.j = c.j;
  b.c = a;
  b.f = c.f;
  return b;
}();
function te(a, b) {
  return oe(1, se.c(pe.d(a), b));
}
function ue(a) {
  return function c(a, e) {
    return new Md(null, function() {
      var f = z(a);
      return f ? F(A(f), c(B(f), e)) : z(e) ? c(A(e), B(e)) : null;
    }, null, null);
  }(null, a);
}
var ve = function() {
  function a(a, b) {
    return ue(le.c(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return ue(J.o(le, a, c, d));
    }
    a.m = 2;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var d = A(a);
      a = B(a);
      return b(c, d, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.j = c.j;
  b.c = a;
  b.f = c.f;
  return b;
}(), xe = function we(b, c) {
  return new Md(null, function() {
    var d = z(c);
    if (d) {
      if (ld(d)) {
        for (var e = vc(d), f = G(e), g = Qd(f), k = 0;;) {
          if (k < f) {
            if (q(b.d ? b.d(Bb.c(e, k)) : b.call(null, Bb.c(e, k)))) {
              var l = Bb.c(e, k);
              g.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return Td(g.aa(), we(b, wc(d)));
      }
      e = A(d);
      d = B(d);
      return q(b.d ? b.d(e) : b.call(null, e)) ? F(e, we(b, d)) : we(b, d);
    }
    return null;
  }, null, null);
};
function ye(a, b) {
  return xe(ie(a), b);
}
function ze(a) {
  return function c(a) {
    return new Md(null, function() {
      return F(a, q(jd.d ? jd.d(a) : jd.call(null, a)) ? ve.c(c, z.d ? z.d(a) : z.call(null, a)) : null);
    }, null, null);
  }(a);
}
function Ae(a) {
  return xe(function(a) {
    return!jd(a);
  }, B(ze(a)));
}
function Be(a, b) {
  var c;
  null != a ? a && (a.r & 4 || a.ui) ? (c = ob.e(qc, pc(a), b), c = rc(c)) : c = ob.e(yb, a, b) : c = ob.e(Xc, Ic, b);
  return c;
}
var Ce = function() {
  function a(a, b, c, k) {
    return new Md(null, function() {
      var l = z(k);
      if (l) {
        var p = ne(a, l);
        return a === G(p) ? F(p, d.o(a, b, c, oe(b, l))) : yb(Ic, ne(a, Yd.c(p, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Md(null, function() {
      var k = z(c);
      if (k) {
        var l = ne(a, k);
        return a === G(l) ? F(l, d.e(a, b, oe(b, k))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.e(a, a, b);
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
  d.c = c;
  d.e = b;
  d.o = a;
  return d;
}(), De = function() {
  function a(a, b, c) {
    var g = od;
    for (b = z(b);;) {
      if (b) {
        var k = a;
        if (k ? k.k & 256 || k.ld || (k.k ? 0 : r(Gb, k)) : r(Gb, k)) {
          a = I.e(a, A(b), g);
          if (g === a) {
            return c;
          }
          b = C(b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.e(a, b, null);
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
  c.c = b;
  c.e = a;
  return c;
}(), Ge = function Fe(b, c, d) {
  var e = H.e(c, 0, null);
  return(c = zd(c)) ? $c.e(b, e, Fe(I.c(b, e), c, d)) : $c.e(b, e, d);
}, He = function() {
  function a(a, b, c, d, f, w) {
    var D = H.e(b, 0, null);
    return(b = zd(b)) ? $c.e(a, D, e.ta(I.c(a, D), b, c, d, f, w)) : $c.e(a, D, c.o ? c.o(I.c(a, D), d, f, w) : c.call(null, I.c(a, D), d, f, w));
  }
  function b(a, b, c, d, f) {
    var w = H.e(b, 0, null);
    return(b = zd(b)) ? $c.e(a, w, e.q(I.c(a, w), b, c, d, f)) : $c.e(a, w, c.e ? c.e(I.c(a, w), d, f) : c.call(null, I.c(a, w), d, f));
  }
  function c(a, b, c, d) {
    var f = H.e(b, 0, null);
    return(b = zd(b)) ? $c.e(a, f, e.o(I.c(a, f), b, c, d)) : $c.e(a, f, c.c ? c.c(I.c(a, f), d) : c.call(null, I.c(a, f), d));
  }
  function d(a, b, c) {
    var d = H.e(b, 0, null);
    return(b = zd(b)) ? $c.e(a, d, e.e(I.c(a, d), b, c)) : $c.e(a, d, c.d ? c.d(I.c(a, d)) : c.call(null, I.c(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, M, O) {
      var Z = null;
      6 < arguments.length && (Z = E(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, M, Z);
    }
    function b(a, c, d, f, g, k, O) {
      var Z = H.e(c, 0, null);
      return(c = zd(c)) ? $c.e(a, Z, J.f(e, I.c(a, Z), c, d, f, E([g, k, O], 0))) : $c.e(a, Z, J.f(d, I.c(a, Z), f, g, k, E([O], 0)));
    }
    a.m = 6;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var d = A(a);
      a = C(a);
      var e = A(a);
      a = C(a);
      var f = A(a);
      a = C(a);
      var g = A(a);
      a = C(a);
      var O = A(a);
      a = B(a);
      return b(c, d, e, f, g, O, a);
    };
    a.f = b;
    return a;
  }(), e = function(e, k, l, p, t, w, D) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, p);
      case 5:
        return b.call(this, e, k, l, p, t);
      case 6:
        return a.call(this, e, k, l, p, t, w);
      default:
        return f.f(e, k, l, p, t, w, E(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 6;
  e.j = f.j;
  e.e = d;
  e.o = c;
  e.q = b;
  e.ta = a;
  e.f = f.f;
  return e;
}();
function Ie(a, b) {
  this.G = a;
  this.h = b;
}
function Je(a) {
  return new Ie(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Ke(a) {
  return new Ie(a.G, mb(a.h));
}
function Le(a) {
  a = a.n;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Me(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Je(a);
    d.h[0] = c;
    c = d;
    b -= 5;
  }
}
var Oe = function Ne(b, c, d, e) {
  var f = Ke(d), g = b.n - 1 >>> c & 31;
  5 === c ? f.h[g] = e : (d = d.h[g], b = null != d ? Ne(b, c - 5, d, e) : Me(null, c - 5, e), f.h[g] = b);
  return f;
};
function Pe(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function Qe(a, b) {
  if (0 <= b && b < a.n) {
    if (b >= Le(a)) {
      return a.F;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.h[b >>> d & 31], d = e
      } else {
        return c.h;
      }
    }
  } else {
    return Pe(b, a.n);
  }
}
var Se = function Re(b, c, d, e, f) {
  var g = Ke(d);
  if (0 === c) {
    g.h[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Re(b, c - 5, d.h[k], e, f);
    g.h[k] = b;
  }
  return g;
}, Ue = function Te(b, c, d) {
  var e = b.n - 2 >>> c & 31;
  if (5 < c) {
    b = Te(b, c - 5, d.h[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Ke(d);
    d.h[e] = b;
    return d;
  }
  return 0 === e ? null : s ? (d = Ke(d), d.h[e] = null, d) : null;
};
function Q(a, b, c, d, e, f) {
  this.l = a;
  this.n = b;
  this.shift = c;
  this.root = d;
  this.F = e;
  this.s = f;
  this.r = 8196;
  this.k = 167668511;
}
h = Q.prototype;
h.Ab = function() {
  return new Ve(this.n, this.shift, We.d ? We.d(this.root) : We.call(null, this.root), Xe.d ? Xe.d(this.F) : Xe.call(null, this.F));
};
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.L = function(a, b) {
  return Bb.e(this, b, null);
};
h.M = function(a, b, c) {
  return Bb.e(this, b, c);
};
h.ib = function(a, b, c) {
  if ("number" === typeof b) {
    return Ub(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.ja(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return this.C(null, a);
};
h.c = function(a, b) {
  return this.ja(null, a, b);
};
h.T = function(a, b) {
  if (32 > this.n - Le(this)) {
    for (var c = this.F.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.F[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new Q(this.l, this.n + 1, this.shift, this.root, d, null);
  }
  c = (d = this.n >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Je(null), d.h[0] = this.root, e = Me(null, this.shift, new Ie(null, this.F)), d.h[1] = e) : d = Oe(this, this.shift, this.root, new Ie(null, this.F));
  return new Q(this.l, this.n + 1, c, d, [b], null);
};
h.qc = function() {
  return 0 < this.n ? new Pc(this, this.n - 1, null) : null;
};
h.md = function() {
  return Bb.c(this, 0);
};
h.nd = function() {
  return Bb.c(this, 1);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Kc.c(this, b);
};
h.fa = function(a, b, c) {
  return Kc.e(this, b, c);
};
h.J = function() {
  return 0 === this.n ? null : 32 > this.n ? E.d(this.F) : s ? Ye.e ? Ye.e(this, 0, 0) : Ye.call(null, this, 0, 0) : null;
};
h.K = function() {
  return this.n;
};
h.kb = function() {
  return 0 < this.n ? Bb.c(this, this.n - 1) : null;
};
h.lb = function() {
  if (0 === this.n) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.n) {
    return Zb(Ze, this.l);
  }
  if (1 < this.n - Le(this)) {
    return new Q(this.l, this.n - 1, this.shift, this.root, this.F.slice(0, -1), null);
  }
  if (s) {
    var a = Qe(this, this.n - 2), b = Ue(this, this.shift, this.root), b = null == b ? R : b, c = this.n - 1;
    return 5 < this.shift && null == b.h[1] ? new Q(this.l, c, this.shift - 5, b.h[0], a, null) : new Q(this.l, c, this.shift, b, a, null);
  }
  return null;
};
h.od = function(a, b, c) {
  if (0 <= b && b < this.n) {
    return Le(this) <= b ? (a = mb(this.F), a[b & 31] = c, new Q(this.l, this.n, this.shift, this.root, a, null)) : new Q(this.l, this.n, this.shift, Se(this, this.shift, this.root, b, c), this.F, null);
  }
  if (b === this.n) {
    return yb(this, c);
  }
  if (s) {
    throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.n), v("]")].join(""));
  }
  return null;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new Q(b, this.n, this.shift, this.root, this.F, this.s);
};
h.wa = function() {
  return new Q(this.l, this.n, this.shift, this.root, this.F, this.s);
};
h.w = function() {
  return this.l;
};
h.C = function(a, b) {
  return Qe(this, b)[b & 31];
};
h.ja = function(a, b, c) {
  return 0 <= b && b < this.n ? Bb.c(this, b) : c;
};
h.Y = function() {
  return Tc(Ze, this.l);
};
var R = new Ie(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Ze = new Q(null, 0, 5, R, [], 0);
function $e(a, b) {
  var c = a.length, d = b ? a : mb(a);
  if (32 > c) {
    return new Q(null, c, 5, R, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, g = (new Q(null, 32, 5, R, e, null)).Ab(null);;) {
    if (f < c) {
      e = f + 1, g = $d.c(g, d[f]), f = e;
    } else {
      return rc(g);
    }
  }
}
function af(a) {
  return rc(ob.e(qc, pc(Ze), a));
}
var bf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof Hc && 0 === a.i ? $e.c ? $e.c(a.h, !0) : $e.call(null, a.h, !0) : af(a);
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function cf(a, b, c, d, e, f) {
  this.da = a;
  this.La = b;
  this.i = c;
  this.S = d;
  this.l = e;
  this.s = f;
  this.k = 32243948;
  this.r = 1536;
}
h = cf.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.ka = function() {
  if (this.S + 1 < this.La.length) {
    var a = Ye.o ? Ye.o(this.da, this.La, this.i, this.S + 1) : Ye.call(null, this.da, this.La, this.i, this.S + 1);
    return null == a ? null : a;
  }
  return xc(this);
};
h.T = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Kc.c(df.e ? df.e(this.da, this.i + this.S, G(this.da)) : df.call(null, this.da, this.i + this.S, G(this.da)), b);
};
h.fa = function(a, b, c) {
  return Kc.e(df.e ? df.e(this.da, this.i + this.S, G(this.da)) : df.call(null, this.da, this.i + this.S, G(this.da)), b, c);
};
h.J = function() {
  return this;
};
h.W = function() {
  return this.La[this.S];
};
h.ga = function() {
  if (this.S + 1 < this.La.length) {
    var a = Ye.o ? Ye.o(this.da, this.La, this.i, this.S + 1) : Ye.call(null, this.da, this.La, this.i, this.S + 1);
    return null == a ? Ic : a;
  }
  return wc(this);
};
h.Uc = function() {
  var a = this.La.length, a = this.i + a < vb(this.da) ? Ye.e ? Ye.e(this.da, this.i + a, 0) : Ye.call(null, this.da, this.i + a, 0) : null;
  return null == a ? null : a;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return Ye.q ? Ye.q(this.da, this.La, this.i, this.S, b) : Ye.call(null, this.da, this.La, this.i, this.S, b);
};
h.Y = function() {
  return Tc(Ze, this.l);
};
h.Vc = function() {
  return Rd.c(this.La, this.S);
};
h.Wc = function() {
  var a = this.La.length, a = this.i + a < vb(this.da) ? Ye.e ? Ye.e(this.da, this.i + a, 0) : Ye.call(null, this.da, this.i + a, 0) : null;
  return null == a ? Ic : a;
};
var Ye = function() {
  function a(a, b, c, d, l) {
    return new cf(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new cf(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new cf(a, Qe(a, b), b, c, null, null);
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
  d.e = c;
  d.o = b;
  d.q = a;
  return d;
}();
function ef(a, b, c, d, e) {
  this.l = a;
  this.Ha = b;
  this.start = c;
  this.end = d;
  this.s = e;
  this.k = 166617887;
  this.r = 8192;
}
h = ef.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.L = function(a, b) {
  return Bb.e(this, b, null);
};
h.M = function(a, b, c) {
  return Bb.e(this, b, c);
};
h.ib = function(a, b, c) {
  if ("number" === typeof b) {
    return Ub(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.ja(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return this.C(null, a);
};
h.c = function(a, b) {
  return this.ja(null, a, b);
};
h.T = function(a, b) {
  return ff.q ? ff.q(this.l, Ub(this.Ha, this.end, b), this.start, this.end + 1, null) : ff.call(null, this.l, Ub(this.Ha, this.end, b), this.start, this.end + 1, null);
};
h.qc = function() {
  return this.start !== this.end ? new Pc(this, this.end - this.start - 1, null) : null;
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Kc.c(this, b);
};
h.fa = function(a, b, c) {
  return Kc.e(this, b, c);
};
h.J = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : F(Bb.c(a.Ha, d), new Md(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
h.K = function() {
  return this.end - this.start;
};
h.kb = function() {
  return Bb.c(this.Ha, this.end - 1);
};
h.lb = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return ff.q ? ff.q(this.l, this.Ha, this.start, this.end - 1, null) : ff.call(null, this.l, this.Ha, this.start, this.end - 1, null);
};
h.od = function(a, b, c) {
  var d = this, e = d.start + b;
  return ff.q ? ff.q(d.l, $c.e(d.Ha, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : ff.call(null, d.l, $c.e(d.Ha, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return ff.q ? ff.q(b, this.Ha, this.start, this.end, this.s) : ff.call(null, b, this.Ha, this.start, this.end, this.s);
};
h.wa = function() {
  return new ef(this.l, this.Ha, this.start, this.end, this.s);
};
h.w = function() {
  return this.l;
};
h.C = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Pe(b, this.end - this.start) : Bb.c(this.Ha, this.start + b);
};
h.ja = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : Bb.e(this.Ha, this.start + b, c);
};
h.Y = function() {
  return Tc(Ze, this.l);
};
function ff(a, b, c, d, e) {
  for (;;) {
    if (b instanceof ef) {
      c = b.start + c, d = b.start + d, b = b.Ha;
    } else {
      var f = G(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new ef(a, b, c, d, e);
    }
  }
}
var df = function() {
  function a(a, b, c) {
    return ff(null, a, b, c, null);
  }
  function b(a, b) {
    return c.e(a, b, G(a));
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
  c.c = b;
  c.e = a;
  return c;
}();
function We(a) {
  return new Ie({}, mb(a.h));
}
function Xe(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  nd(a, 0, b, 0, a.length);
  return b;
}
var hf = function gf(b, c, d, e) {
  d = b.root.G === d.G ? d : new Ie(b.root.G, mb(d.h));
  var f = b.n - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.h[f];
    b = null != g ? gf(b, c - 5, g, e) : Me(b.root.G, c - 5, e);
  }
  d.h[f] = b;
  return d;
};
function Ve(a, b, c, d) {
  this.n = a;
  this.shift = b;
  this.root = c;
  this.F = d;
  this.k = 275;
  this.r = 88;
}
h = Ve.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return this.L(null, a);
};
h.c = function(a, b) {
  return this.M(null, a, b);
};
h.L = function(a, b) {
  return Bb.e(this, b, null);
};
h.M = function(a, b, c) {
  return Bb.e(this, b, c);
};
h.C = function(a, b) {
  if (this.root.G) {
    return Qe(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.ja = function(a, b, c) {
  return 0 <= b && b < this.n ? Bb.c(this, b) : c;
};
h.K = function() {
  if (this.root.G) {
    return this.n;
  }
  throw Error("count after persistent!");
};
h.be = function(a, b, c) {
  var d = this;
  if (d.root.G) {
    if (0 <= b && b < d.n) {
      return Le(this) <= b ? d.F[b & 31] = c : (a = function f(a, k) {
        var l = d.root.G === k.G ? k : new Ie(d.root.G, mb(k.h));
        if (0 === a) {
          l.h[b & 31] = c;
        } else {
          var p = b >>> a & 31, t = f(a - 5, l.h[p]);
          l.h[p] = t;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.n) {
      return qc(this, c);
    }
    if (s) {
      throw Error([v("Index "), v(b), v(" out of bounds for TransientVector of length"), v(d.n)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
h.Tb = function(a, b, c) {
  return tc(this, b, c);
};
h.mb = function(a, b) {
  if (this.root.G) {
    if (32 > this.n - Le(this)) {
      this.F[this.n & 31] = b;
    } else {
      var c = new Ie(this.root.G, this.F), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.F = d;
      if (this.n >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Me(this.root.G, this.shift, c);
        this.root = new Ie(this.root.G, d);
        this.shift = e;
      } else {
        this.root = hf(this, this.shift, this.root, c);
      }
    }
    this.n += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.nb = function() {
  if (this.root.G) {
    this.root.G = null;
    var a = this.n - Le(this), b = Array(a);
    nd(this.F, 0, b, 0, a);
    return new Q(null, this.n, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function jf(a, b, c, d) {
  this.l = a;
  this.za = b;
  this.Qa = c;
  this.s = d;
  this.r = 0;
  this.k = 31850572;
}
h = jf.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.T = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return zc(this);
};
h.J = function() {
  return this;
};
h.W = function() {
  return A(this.za);
};
h.ga = function() {
  var a = C(this.za);
  return a ? new jf(this.l, a, this.Qa, null) : null == this.Qa ? wb(this) : new jf(this.l, this.Qa, null, null);
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new jf(b, this.za, this.Qa, this.s);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return Tc(Ic, this.l);
};
function lf(a, b, c, d, e) {
  this.l = a;
  this.count = b;
  this.za = c;
  this.Qa = d;
  this.s = e;
  this.k = 31858766;
  this.r = 8192;
}
h = lf.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.T = function(a, b) {
  var c;
  q(this.za) ? (c = this.Qa, c = new lf(this.l, this.count + 1, this.za, Xc.c(q(c) ? c : Ze, b), null)) : c = new lf(this.l, this.count + 1, Xc.c(this.za, b), Ze, null);
  return c;
};
h.toString = function() {
  return zc(this);
};
h.J = function() {
  var a = z(this.Qa), b = this.za;
  return q(q(b) ? b : a) ? new jf(null, this.za, z(a), null) : null;
};
h.K = function() {
  return this.count;
};
h.kb = function() {
  return A(this.za);
};
h.lb = function() {
  if (q(this.za)) {
    var a = C(this.za);
    return a ? new lf(this.l, this.count - 1, a, this.Qa, null) : new lf(this.l, this.count - 1, z(this.Qa), Ze, null);
  }
  return this;
};
h.W = function() {
  return A(this.za);
};
h.ga = function() {
  return B(z(this));
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new lf(b, this.count, this.za, this.Qa, this.s);
};
h.wa = function() {
  return new lf(this.l, this.count, this.za, this.Qa, this.s);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return mf;
};
var mf = new lf(null, 0, null, Ze, 0);
function nf() {
  this.r = 0;
  this.k = 2097152;
}
nf.prototype.H = function() {
  return!1;
};
var of = new nf;
function pf(a, b) {
  return pd(K(b) ? G(a) === G(b) ? ee(he, le.c(function(a) {
    return x.c(I.e(b, A(a), of), Uc(a));
  }, a)) : null : null);
}
function qf(a, b) {
  var c = a.h;
  if (b instanceof P) {
    a: {
      for (var d = c.length, e = b.$a, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof P && e === g.$a) {
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
      if (b instanceof Cc) {
        a: {
          d = c.length;
          e = b.eb;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof Cc && e === g.eb) {
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
                if (x.c(b, c[e])) {
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
function rf(a, b, c) {
  this.h = a;
  this.i = b;
  this.sa = c;
  this.r = 0;
  this.k = 32374990;
}
h = rf.prototype;
h.N = function() {
  return Oc(this);
};
h.ka = function() {
  return this.i < this.h.length - 2 ? new rf(this.h, this.i + 2, this.sa) : null;
};
h.T = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Sc.c(b, this);
};
h.fa = function(a, b, c) {
  return Sc.e(b, c, this);
};
h.J = function() {
  return this;
};
h.K = function() {
  return(this.h.length - this.i) / 2;
};
h.W = function() {
  return new Q(null, 2, 5, R, [this.h[this.i], this.h[this.i + 1]], null);
};
h.ga = function() {
  return this.i < this.h.length - 2 ? new rf(this.h, this.i + 2, this.sa) : Ic;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new rf(this.h, this.i, b);
};
h.w = function() {
  return this.sa;
};
h.Y = function() {
  return Tc(Ic, this.sa);
};
function n(a, b, c, d) {
  this.l = a;
  this.n = b;
  this.h = c;
  this.s = d;
  this.r = 8196;
  this.k = 16123663;
}
h = n.prototype;
h.Ab = function() {
  return new sf({}, this.h.length, mb(this.h));
};
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Bd(this);
};
h.L = function(a, b) {
  return Hb.e(this, b, null);
};
h.M = function(a, b, c) {
  a = qf(this, b);
  return-1 === a ? c : this.h[a + 1];
};
h.ib = function(a, b, c) {
  a = qf(this, b);
  if (-1 === a) {
    if (this.n < tf) {
      a = this.h;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new n(this.l, this.n + 1, e, null);
    }
    return Zb(Jb(Be(uf, this), b, c), this.l);
  }
  return c === this.h[a + 1] ? this : s ? (b = mb(this.h), b[a + 1] = c, new n(this.l, this.n, b, null)) : null;
};
h.Rb = function(a, b) {
  return-1 !== qf(this, b);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return this.L(null, a);
};
h.c = function(a, b) {
  return this.M(null, a, b);
};
h.T = function(a, b) {
  return kd(b) ? Jb(this, Bb.c(b, 0), Bb.c(b, 1)) : ob.e(yb, this, b);
};
h.toString = function() {
  return zc(this);
};
h.J = function() {
  return 0 <= this.h.length - 2 ? new rf(this.h, 0, null) : null;
};
h.K = function() {
  return this.n;
};
h.H = function(a, b) {
  return pf(this, b);
};
h.A = function(a, b) {
  return new n(b, this.n, this.h, this.s);
};
h.wa = function() {
  return new n(this.l, this.n, this.h, this.s);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return Zb(vf, this.l);
};
h.oc = function(a, b) {
  if (0 <= qf(this, b)) {
    var c = this.h.length, d = c - 2;
    if (0 === d) {
      return wb(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.l, this.n - 1, d, null);
      }
      if (x.c(b, this.h[e])) {
        e += 2;
      } else {
        if (s) {
          d[f] = this.h[e], d[f + 1] = this.h[e + 1], f += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var vf = new n(null, 0, [], null), tf = 8;
function wf(a) {
  for (var b = a.length, c = 0, d = pc(vf);;) {
    if (c < b) {
      var e = c + 2, d = sc(d, a[c], a[c + 1]), c = e
    } else {
      return rc(d);
    }
  }
}
function sf(a, b, c) {
  this.Fb = a;
  this.rb = b;
  this.h = c;
  this.r = 56;
  this.k = 258;
}
h = sf.prototype;
h.Tb = function(a, b, c) {
  if (q(this.Fb)) {
    a = qf(this, b);
    if (-1 === a) {
      return this.rb + 2 <= 2 * tf ? (this.rb += 2, this.h.push(b), this.h.push(c), this) : ae.e(xf.c ? xf.c(this.rb, this.h) : xf.call(null, this.rb, this.h), b, c);
    }
    c !== this.h[a + 1] && (this.h[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.mb = function(a, b) {
  if (q(this.Fb)) {
    if (b ? b.k & 2048 || b.qf || (b.k ? 0 : r(Mb, b)) : r(Mb, b)) {
      return sc(this, Cd.d ? Cd.d(b) : Cd.call(null, b), Dd.d ? Dd.d(b) : Dd.call(null, b));
    }
    for (var c = z(b), d = this;;) {
      var e = A(c);
      if (q(e)) {
        c = C(c), d = sc(d, Cd.d ? Cd.d(e) : Cd.call(null, e), Dd.d ? Dd.d(e) : Dd.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.nb = function() {
  if (q(this.Fb)) {
    return this.Fb = !1, new n(null, wd(this.rb), this.h, null);
  }
  throw Error("persistent! called twice");
};
h.L = function(a, b) {
  return Hb.e(this, b, null);
};
h.M = function(a, b, c) {
  if (q(this.Fb)) {
    return a = qf(this, b), -1 === a ? c : this.h[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.K = function() {
  if (q(this.Fb)) {
    return wd(this.rb);
  }
  throw Error("count after persistent!");
};
function xf(a, b) {
  for (var c = pc(uf), d = 0;;) {
    if (d < a) {
      c = ae.e(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function yf() {
  this.ra = !1;
}
function zf(a, b) {
  return a === b ? !0 : Jd(a, b) ? !0 : s ? x.c(a, b) : null;
}
var Af = function() {
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
  c.e = b;
  c.q = a;
  return c;
}();
function Bf(a, b) {
  var c = Array(a.length - 2);
  nd(a, 0, c, 0, 2 * b);
  nd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var Cf = function() {
  function a(a, b, c, g, k, l) {
    a = a.Hb(b);
    a.h[c] = g;
    a.h[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Hb(b);
    a.h[c] = g;
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
  c.o = b;
  c.ta = a;
  return c;
}();
function Df(a, b, c) {
  this.G = a;
  this.P = b;
  this.h = c;
}
h = Df.prototype;
h.Na = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = xd(this.P & g - 1);
  if (0 === (this.P & g)) {
    var l = xd(this.P);
    if (2 * l < this.h.length) {
      a = this.Hb(a);
      b = a.h;
      f.ra = !0;
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
      a.P |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Ef.Na(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.P >>> d & 1) && (k[d] = null != this.h[e] ? Ef.Na(a, b + 5, Ec(this.h[e]), this.h[e], this.h[e + 1], f) : this.h[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Ff(a, l + 1, k);
    }
    return s ? (b = Array(2 * (l + 4)), nd(this.h, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, nd(this.h, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.ra = !0, a = this.Hb(a), a.h = b, a.P |= g, a) : null;
  }
  l = this.h[2 * k];
  g = this.h[2 * k + 1];
  return null == l ? (l = g.Na(a, b + 5, c, d, e, f), l === g ? this : Cf.o(this, a, 2 * k + 1, l)) : zf(d, l) ? e === g ? this : Cf.o(this, a, 2 * k + 1, e) : s ? (f.ra = !0, Cf.ta(this, a, 2 * k, null, 2 * k + 1, Gf.Bb ? Gf.Bb(a, b + 5, l, g, c, d, e) : Gf.call(null, a, b + 5, l, g, c, d, e))) : null;
};
h.Yb = function() {
  return Hf.d ? Hf.d(this.h) : Hf.call(null, this.h);
};
h.Hb = function(a) {
  if (a === this.G) {
    return this;
  }
  var b = xd(this.P), c = Array(0 > b ? 4 : 2 * (b + 1));
  nd(this.h, 0, c, 0, 2 * b);
  return new Df(a, this.P, c);
};
h.Zb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.P & d)) {
    return this;
  }
  var e = xd(this.P & d - 1), f = this.h[2 * e], g = this.h[2 * e + 1];
  return null == f ? (a = g.Zb(a + 5, b, c), a === g ? this : null != a ? new Df(null, this.P, Af.e(this.h, 2 * e + 1, a)) : this.P === d ? null : s ? new Df(null, this.P ^ d, Bf(this.h, e)) : null) : zf(c, f) ? new Df(null, this.P ^ d, Bf(this.h, e)) : s ? this : null;
};
h.Ma = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = xd(this.P & f - 1);
  if (0 === (this.P & f)) {
    var k = xd(this.P);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Ef.Ma(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.P >>> c & 1) && (g[c] = null != this.h[d] ? Ef.Ma(a + 5, Ec(this.h[d]), this.h[d], this.h[d + 1], e) : this.h[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Ff(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    nd(this.h, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    nd(this.h, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.ra = !0;
    return new Df(null, this.P | f, a);
  }
  k = this.h[2 * g];
  f = this.h[2 * g + 1];
  return null == k ? (k = f.Ma(a + 5, b, c, d, e), k === f ? this : new Df(null, this.P, Af.e(this.h, 2 * g + 1, k))) : zf(c, k) ? d === f ? this : new Df(null, this.P, Af.e(this.h, 2 * g + 1, d)) : s ? (e.ra = !0, new Df(null, this.P, Af.q(this.h, 2 * g, null, 2 * g + 1, Gf.ta ? Gf.ta(a + 5, k, f, b, c, d) : Gf.call(null, a + 5, k, f, b, c, d)))) : null;
};
h.bb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.P & e)) {
    return d;
  }
  var f = xd(this.P & e - 1), e = this.h[2 * f], f = this.h[2 * f + 1];
  return null == e ? f.bb(a + 5, b, c, d) : zf(c, e) ? f : s ? d : null;
};
var Ef = new Df(null, 0, []);
function Ff(a, b, c) {
  this.G = a;
  this.n = b;
  this.h = c;
}
h = Ff.prototype;
h.Na = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.h[g];
  if (null == k) {
    return a = Cf.o(this, a, g, Ef.Na(a, b + 5, c, d, e, f)), a.n += 1, a;
  }
  b = k.Na(a, b + 5, c, d, e, f);
  return b === k ? this : Cf.o(this, a, g, b);
};
h.Yb = function() {
  return If.d ? If.d(this.h) : If.call(null, this.h);
};
h.Hb = function(a) {
  return a === this.G ? this : new Ff(a, this.n, mb(this.h));
};
h.Zb = function(a, b, c) {
  var d = b >>> a & 31, e = this.h[d];
  if (null != e) {
    a = e.Zb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.n) {
          a: {
            e = this.h;
            a = 2 * (this.n - 1);
            b = Array(a);
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new Df(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new Ff(null, this.n - 1, Af.e(this.h, d, a));
        }
      } else {
        d = s ? new Ff(null, this.n, Af.e(this.h, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
h.Ma = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.h[f];
  if (null == g) {
    return new Ff(null, this.n + 1, Af.e(this.h, f, Ef.Ma(a + 5, b, c, d, e)));
  }
  a = g.Ma(a + 5, b, c, d, e);
  return a === g ? this : new Ff(null, this.n, Af.e(this.h, f, a));
};
h.bb = function(a, b, c, d) {
  var e = this.h[b >>> a & 31];
  return null != e ? e.bb(a + 5, b, c, d) : d;
};
function Jf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (zf(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Kf(a, b, c, d) {
  this.G = a;
  this.Wa = b;
  this.n = c;
  this.h = d;
}
h = Kf.prototype;
h.Na = function(a, b, c, d, e, f) {
  if (c === this.Wa) {
    b = Jf(this.h, this.n, d);
    if (-1 === b) {
      if (this.h.length > 2 * this.n) {
        return a = Cf.ta(this, a, 2 * this.n, d, 2 * this.n + 1, e), f.ra = !0, a.n += 1, a;
      }
      c = this.h.length;
      b = Array(c + 2);
      nd(this.h, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ra = !0;
      f = this.n + 1;
      a === this.G ? (this.h = b, this.n = f, a = this) : a = new Kf(this.G, this.Wa, f, b);
      return a;
    }
    return this.h[b + 1] === e ? this : Cf.o(this, a, b + 1, e);
  }
  return(new Df(a, 1 << (this.Wa >>> b & 31), [null, this, null, null])).Na(a, b, c, d, e, f);
};
h.Yb = function() {
  return Hf.d ? Hf.d(this.h) : Hf.call(null, this.h);
};
h.Hb = function(a) {
  if (a === this.G) {
    return this;
  }
  var b = Array(2 * (this.n + 1));
  nd(this.h, 0, b, 0, 2 * this.n);
  return new Kf(a, this.Wa, this.n, b);
};
h.Zb = function(a, b, c) {
  a = Jf(this.h, this.n, c);
  return-1 === a ? this : 1 === this.n ? null : s ? new Kf(null, this.Wa, this.n - 1, Bf(this.h, wd(a))) : null;
};
h.Ma = function(a, b, c, d, e) {
  return b === this.Wa ? (a = Jf(this.h, this.n, c), -1 === a ? (a = 2 * this.n, b = Array(a + 2), nd(this.h, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ra = !0, new Kf(null, this.Wa, this.n + 1, b)) : x.c(this.h[a], d) ? this : new Kf(null, this.Wa, this.n, Af.e(this.h, a + 1, d))) : (new Df(null, 1 << (this.Wa >>> a & 31), [null, this])).Ma(a, b, c, d, e);
};
h.bb = function(a, b, c, d) {
  a = Jf(this.h, this.n, c);
  return 0 > a ? d : zf(c, this.h[a]) ? this.h[a + 1] : s ? d : null;
};
var Gf = function() {
  function a(a, b, c, g, k, l, p) {
    var t = Ec(c);
    if (t === k) {
      return new Kf(null, t, 2, [c, g, l, p]);
    }
    var w = new yf;
    return Ef.Na(a, b, t, c, g, w).Na(a, b, k, l, p, w);
  }
  function b(a, b, c, g, k, l) {
    var p = Ec(b);
    if (p === g) {
      return new Kf(null, p, 2, [b, c, k, l]);
    }
    var t = new yf;
    return Ef.Ma(a, p, b, c, t).Ma(a, g, k, l, t);
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
  c.ta = b;
  c.Bb = a;
  return c;
}();
function Lf(a, b, c, d, e) {
  this.l = a;
  this.Pa = b;
  this.i = c;
  this.O = d;
  this.s = e;
  this.r = 0;
  this.k = 32374860;
}
h = Lf.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.T = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Sc.c(b, this);
};
h.fa = function(a, b, c) {
  return Sc.e(b, c, this);
};
h.J = function() {
  return this;
};
h.W = function() {
  return null == this.O ? new Q(null, 2, 5, R, [this.Pa[this.i], this.Pa[this.i + 1]], null) : A(this.O);
};
h.ga = function() {
  return null == this.O ? Hf.e ? Hf.e(this.Pa, this.i + 2, null) : Hf.call(null, this.Pa, this.i + 2, null) : Hf.e ? Hf.e(this.Pa, this.i, C(this.O)) : Hf.call(null, this.Pa, this.i, C(this.O));
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new Lf(b, this.Pa, this.i, this.O, this.s);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return Tc(Ic, this.l);
};
var Hf = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Lf(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (q(g) && (g = g.Yb(), q(g))) {
            return new Lf(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Lf(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.e(a, 0, null);
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
  c.d = b;
  c.e = a;
  return c;
}();
function Mf(a, b, c, d, e) {
  this.l = a;
  this.Pa = b;
  this.i = c;
  this.O = d;
  this.s = e;
  this.r = 0;
  this.k = 32374860;
}
h = Mf.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.T = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Sc.c(b, this);
};
h.fa = function(a, b, c) {
  return Sc.e(b, c, this);
};
h.J = function() {
  return this;
};
h.W = function() {
  return A(this.O);
};
h.ga = function() {
  return If.o ? If.o(null, this.Pa, this.i, C(this.O)) : If.call(null, null, this.Pa, this.i, C(this.O));
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new Mf(b, this.Pa, this.i, this.O, this.s);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return Tc(Ic, this.l);
};
var If = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (q(k) && (k = k.Yb(), q(k))) {
            return new Mf(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Mf(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.o(null, a, 0, null);
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
  c.d = b;
  c.o = a;
  return c;
}();
function Nf(a, b, c, d, e, f) {
  this.l = a;
  this.n = b;
  this.root = c;
  this.ma = d;
  this.Da = e;
  this.s = f;
  this.r = 8196;
  this.k = 16123663;
}
h = Nf.prototype;
h.Ab = function() {
  return new Of({}, this.root, this.n, this.ma, this.Da);
};
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Bd(this);
};
h.L = function(a, b) {
  return Hb.e(this, b, null);
};
h.M = function(a, b, c) {
  return null == b ? this.ma ? this.Da : c : null == this.root ? c : s ? this.root.bb(0, Ec(b), b, c) : null;
};
h.ib = function(a, b, c) {
  if (null == b) {
    return this.ma && c === this.Da ? this : new Nf(this.l, this.ma ? this.n : this.n + 1, this.root, !0, c, null);
  }
  a = new yf;
  b = (null == this.root ? Ef : this.root).Ma(0, Ec(b), b, c, a);
  return b === this.root ? this : new Nf(this.l, a.ra ? this.n + 1 : this.n, b, this.ma, this.Da, null);
};
h.Rb = function(a, b) {
  return null == b ? this.ma : null == this.root ? !1 : s ? this.root.bb(0, Ec(b), b, od) !== od : null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return this.L(null, a);
};
h.c = function(a, b) {
  return this.M(null, a, b);
};
h.T = function(a, b) {
  return kd(b) ? Jb(this, Bb.c(b, 0), Bb.c(b, 1)) : ob.e(yb, this, b);
};
h.toString = function() {
  return zc(this);
};
h.J = function() {
  if (0 < this.n) {
    var a = null != this.root ? this.root.Yb() : null;
    return this.ma ? F(new Q(null, 2, 5, R, [null, this.Da], null), a) : a;
  }
  return null;
};
h.K = function() {
  return this.n;
};
h.H = function(a, b) {
  return pf(this, b);
};
h.A = function(a, b) {
  return new Nf(b, this.n, this.root, this.ma, this.Da, this.s);
};
h.wa = function() {
  return new Nf(this.l, this.n, this.root, this.ma, this.Da, this.s);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return Zb(uf, this.l);
};
h.oc = function(a, b) {
  if (null == b) {
    return this.ma ? new Nf(this.l, this.n - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (s) {
    var c = this.root.Zb(0, Ec(b), b);
    return c === this.root ? this : new Nf(this.l, this.n - 1, c, this.ma, this.Da, null);
  }
  return null;
};
var uf = new Nf(null, 0, null, !1, null, 0);
function Zc(a, b) {
  for (var c = a.length, d = 0, e = pc(uf);;) {
    if (d < c) {
      var f = d + 1, e = e.Tb(null, a[d], b[d]), d = f
    } else {
      return rc(e);
    }
  }
}
function Of(a, b, c, d, e) {
  this.G = a;
  this.root = b;
  this.count = c;
  this.ma = d;
  this.Da = e;
  this.r = 56;
  this.k = 258;
}
h = Of.prototype;
h.Tb = function(a, b, c) {
  return Pf(this, b, c);
};
h.mb = function(a, b) {
  var c;
  a: {
    if (this.G) {
      if (b ? b.k & 2048 || b.qf || (b.k ? 0 : r(Mb, b)) : r(Mb, b)) {
        c = Pf(this, Cd.d ? Cd.d(b) : Cd.call(null, b), Dd.d ? Dd.d(b) : Dd.call(null, b));
        break a;
      }
      c = z(b);
      for (var d = this;;) {
        var e = A(c);
        if (q(e)) {
          c = C(c), d = Pf(d, Cd.d ? Cd.d(e) : Cd.call(null, e), Dd.d ? Dd.d(e) : Dd.call(null, e));
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
h.nb = function() {
  var a;
  if (this.G) {
    this.G = null, a = new Nf(null, this.count, this.root, this.ma, this.Da, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.L = function(a, b) {
  return null == b ? this.ma ? this.Da : null : null == this.root ? null : this.root.bb(0, Ec(b), b);
};
h.M = function(a, b, c) {
  return null == b ? this.ma ? this.Da : c : null == this.root ? c : this.root.bb(0, Ec(b), b, c);
};
h.K = function() {
  if (this.G) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Pf(a, b, c) {
  if (a.G) {
    if (null == b) {
      a.Da !== c && (a.Da = c), a.ma || (a.count += 1, a.ma = !0);
    } else {
      var d = new yf;
      b = (null == a.root ? Ef : a.root).Na(a.G, 0, Ec(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ra && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var S = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = z(a);
    for (var b = pc(uf);;) {
      if (a) {
        var e = C(C(a)), b = ae.e(b, A(a), Uc(a));
        a = e;
      } else {
        return rc(b);
      }
    }
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}(), Qf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return new n(null, wd(G(a)), J.c(nb, a), null);
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function Rf(a, b) {
  this.oa = a;
  this.sa = b;
  this.r = 0;
  this.k = 32374988;
}
h = Rf.prototype;
h.N = function() {
  return Oc(this);
};
h.ka = function() {
  var a = this.oa, a = (a ? a.k & 128 || a.pc || (a.k ? 0 : r(Fb, a)) : r(Fb, a)) ? this.oa.ka(null) : C(this.oa);
  return null == a ? null : new Rf(a, this.sa);
};
h.T = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Sc.c(b, this);
};
h.fa = function(a, b, c) {
  return Sc.e(b, c, this);
};
h.J = function() {
  return this;
};
h.W = function() {
  return this.oa.W(null).md();
};
h.ga = function() {
  var a = this.oa, a = (a ? a.k & 128 || a.pc || (a.k ? 0 : r(Fb, a)) : r(Fb, a)) ? this.oa.ka(null) : C(this.oa);
  return null != a ? new Rf(a, this.sa) : Ic;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new Rf(this.oa, b);
};
h.w = function() {
  return this.sa;
};
h.Y = function() {
  return Tc(Ic, this.sa);
};
function Sf(a) {
  return(a = z(a)) ? new Rf(a, null) : null;
}
function Cd(a) {
  return Nb(a);
}
function Tf(a, b) {
  this.oa = a;
  this.sa = b;
  this.r = 0;
  this.k = 32374988;
}
h = Tf.prototype;
h.N = function() {
  return Oc(this);
};
h.ka = function() {
  var a = this.oa, a = (a ? a.k & 128 || a.pc || (a.k ? 0 : r(Fb, a)) : r(Fb, a)) ? this.oa.ka(null) : C(this.oa);
  return null == a ? null : new Tf(a, this.sa);
};
h.T = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Sc.c(b, this);
};
h.fa = function(a, b, c) {
  return Sc.e(b, c, this);
};
h.J = function() {
  return this;
};
h.W = function() {
  return this.oa.W(null).nd();
};
h.ga = function() {
  var a = this.oa, a = (a ? a.k & 128 || a.pc || (a.k ? 0 : r(Fb, a)) : r(Fb, a)) ? this.oa.ka(null) : C(this.oa);
  return null != a ? new Tf(a, this.sa) : Ic;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new Tf(this.oa, b);
};
h.w = function() {
  return this.sa;
};
h.Y = function() {
  return Tc(Ic, this.sa);
};
function Uf(a) {
  return(a = z(a)) ? new Tf(a, null) : null;
}
function Dd(a) {
  return Ob(a);
}
var Vf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return q(fe(he, a)) ? ob.c(function(a, b) {
      return Xc.c(q(a) ? a : vf, b);
    }, a) : null;
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}(), Wf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return q(fe(he, b)) ? ob.c(function(a) {
      return function(b, c) {
        return ob.e(a, q(b) ? b : vf, z(c));
      };
    }(function(b, d) {
      var g = A(d), k = Uc(d);
      return qd(b, g) ? $c.e(b, g, a.c ? a.c(I.c(b, g), k) : a.call(null, I.c(b, g), k)) : $c.e(b, g, k);
    }), b) : null;
  }
  a.m = 1;
  a.j = function(a) {
    var d = A(a);
    a = B(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}();
function Xf(a, b, c) {
  this.l = a;
  this.ab = b;
  this.s = c;
  this.r = 8196;
  this.k = 15077647;
}
h = Xf.prototype;
h.Ab = function() {
  return new Yf(pc(this.ab));
};
h.N = function() {
  var a = this.s;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = z(this);;) {
      if (b) {
        var c = A(b), a = (a + Ec(c)) % 4503599627370496, b = C(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.s = a;
};
h.L = function(a, b) {
  return Hb.e(this, b, null);
};
h.M = function(a, b, c) {
  return Ib(this.ab, b) ? b : c;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return this.L(null, a);
};
h.c = function(a, b) {
  return this.M(null, a, b);
};
h.T = function(a, b) {
  return new Xf(this.l, $c.e(this.ab, b, null), null);
};
h.toString = function() {
  return zc(this);
};
h.J = function() {
  return Sf(this.ab);
};
h.ae = function(a, b) {
  return new Xf(this.l, Lb(this.ab, b), null);
};
h.K = function() {
  return vb(this.ab);
};
h.H = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.k & 4096 || b.Ai ? !0 : b.k ? !1 : r(Pb, b) : r(Pb, b)) && G(c) === G(b) && ee(function(a) {
    return qd(c, a);
  }, b);
};
h.A = function(a, b) {
  return new Xf(b, this.ab, this.s);
};
h.wa = function() {
  return new Xf(this.l, this.ab, this.s);
};
h.w = function() {
  return this.l;
};
h.Y = function() {
  return Tc(Zf, this.l);
};
var Zf = new Xf(null, vf, 0);
function Yf(a) {
  this.Xa = a;
  this.k = 259;
  this.r = 136;
}
h = Yf.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Hb.e(this.Xa, c, od) === od ? null : c;
      case 3:
        return Hb.e(this.Xa, c, od) === od ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return Hb.e(this.Xa, a, od) === od ? null : a;
};
h.c = function(a, b) {
  return Hb.e(this.Xa, a, od) === od ? b : a;
};
h.L = function(a, b) {
  return Hb.e(this, b, null);
};
h.M = function(a, b, c) {
  return Hb.e(this.Xa, b, od) === od ? c : b;
};
h.K = function() {
  return G(this.Xa);
};
h.mb = function(a, b) {
  this.Xa = ae.e(this.Xa, b, null);
  return this;
};
h.nb = function() {
  return new Xf(null, rc(this.Xa), null);
};
function $f(a) {
  a = z(a);
  if (null == a) {
    return Zf;
  }
  if (a instanceof Hc && 0 === a.i) {
    a = a.h;
    a: {
      for (var b = 0, c = pc(Zf);;) {
        if (b < a.length) {
          var d = b + 1, c = c.mb(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.nb(null);
  }
  if (s) {
    for (d = pc(Zf);;) {
      if (null != a) {
        b = a.ka(null), d = d.mb(null, a.W(null)), a = b;
      } else {
        return d.nb(null);
      }
    }
  } else {
    return null;
  }
}
function Kd(a) {
  if (a && (a.r & 4096 || a.sf)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([v("Doesn't support name: "), v(a)].join(""));
}
function ag(a, b) {
  for (var c = pc(vf), d = z(a), e = z(b);;) {
    if (d && e) {
      c = ae.e(c, A(d), A(e)), d = C(d), e = C(e);
    } else {
      return rc(c);
    }
  }
}
var bg = function() {
  function a(a, b, c) {
    return(a.d ? a.d(b) : a.call(null, b)) > (a.d ? a.d(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = E(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p);
    }
    function c(a, d, e, l) {
      return ob.e(function(c, d) {
        return b.e(a, c, d);
      }, b.e(a, d, e), l);
    }
    a.m = 3;
    a.j = function(a) {
      var b = A(a);
      a = C(a);
      var d = A(a);
      a = C(a);
      var l = A(a);
      a = B(a);
      return c(b, d, l, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.f(b, e, f, E(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 3;
  b.j = c.j;
  b.c = function(a, b) {
    return b;
  };
  b.e = a;
  b.f = c.f;
  return b;
}(), dg = function cg(b, c) {
  return new Md(null, function() {
    var d = z(c);
    return d ? q(b.d ? b.d(A(d)) : b.call(null, A(d))) ? F(A(d), cg(b, B(d))) : null : null;
  }, null, null);
};
function fg(a, b, c, d, e) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.s = e;
  this.k = 32375006;
  this.r = 8192;
}
h = fg.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.ka = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new fg(this.l, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new fg(this.l, this.start + this.step, this.end, this.step, null) : null;
};
h.T = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return zc(this);
};
h.ea = function(a, b) {
  return Kc.c(this, b);
};
h.fa = function(a, b, c) {
  return Kc.e(this, b, c);
};
h.J = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.K = function() {
  return jb(ec(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
h.W = function() {
  return null == ec(this) ? null : this.start;
};
h.ga = function() {
  return null != ec(this) ? new fg(this.l, this.start + this.step, this.end, this.step, null) : Ic;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.A = function(a, b) {
  return new fg(b, this.start, this.end, this.step, this.s);
};
h.wa = function() {
  return new fg(this.l, this.start, this.end, this.step, this.s);
};
h.w = function() {
  return this.l;
};
h.C = function(a, b) {
  if (b < vb(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.ja = function(a, b, c) {
  return b < vb(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.Y = function() {
  return Tc(Ic, this.l);
};
var gg = function() {
  function a(a, b, c) {
    return new fg(null, a, b, c, null);
  }
  function b(a, b) {
    return e.e(a, b, 1);
  }
  function c(a) {
    return e.e(0, a, 1);
  }
  function d() {
    return e.e(0, Number.MAX_VALUE, 1);
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
  e.t = d;
  e.d = c;
  e.c = b;
  e.e = a;
  return e;
}(), hg = function() {
  function a(a, b) {
    for (;;) {
      if (z(b) && 0 < a) {
        var c = a - 1, g = C(b);
        a = c;
        b = g;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (z(a)) {
        a = C(a);
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
  c.d = b;
  c.c = a;
  return c;
}(), ig = function() {
  function a(a, b) {
    hg.c(a, b);
    return b;
  }
  function b(a) {
    hg.d(a);
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
  c.d = b;
  c.c = a;
  return c;
}();
function jg(a, b) {
  var c = a.exec(b);
  return x.c(A(c), b) ? 1 === G(c) ? A(c) : af(c) : null;
}
function kg(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === G(c) ? A(c) : af(c);
}
function lg(a) {
  var b = kg(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  H.e(b, 0, null);
  a = H.e(b, 1, null);
  b = H.e(b, 2, null);
  return RegExp(b, a);
}
function mg(a, b, c, d, e, f, g) {
  var k = $a;
  try {
    $a = null == $a ? null : $a - 1;
    if (null != $a && 0 > $a) {
      return jc(a, "#");
    }
    jc(a, c);
    z(g) && (b.e ? b.e(A(g), a, f) : b.call(null, A(g), a, f));
    for (var l = C(g), p = fb.d(f);l && (null == p || 0 !== p);) {
      jc(a, d);
      b.e ? b.e(A(l), a, f) : b.call(null, A(l), a, f);
      var t = C(l);
      c = p - 1;
      l = t;
      p = c;
    }
    q(fb.d(f)) && (jc(a, d), b.e ? b.e("...", a, f) : b.call(null, "...", a, f));
    return jc(a, e);
  } finally {
    $a = k;
  }
}
var ng = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = z(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.C(null, k);
        jc(a, l);
        k += 1;
      } else {
        if (e = z(e)) {
          f = e, ld(f) ? (e = vc(f), g = wc(f), f = e, l = G(e), e = g, g = l) : (l = A(f), jc(a, l), e = C(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.m = 1;
  a.j = function(a) {
    var d = A(a);
    a = B(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}(), og = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function pg(a) {
  return[v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return og[a];
  })), v('"')].join("");
}
var sg = function qg(b, c, d) {
  if (null == b) {
    return jc(c, "nil");
  }
  if (void 0 === b) {
    return jc(c, "#\x3cundefined\x3e");
  }
  if (s) {
    q(function() {
      var c = I.c(d, db);
      return q(c) ? (c = b ? b.k & 131072 || b.rf ? !0 : b.k ? !1 : r(Wb, b) : r(Wb, b)) ? dd(b) : c : c;
    }()) && (jc(c, "^"), qg(dd(b), c, d), jc(c, " "));
    if (null == b) {
      return jc(c, "nil");
    }
    if (b.R) {
      return b.U(b, c, d);
    }
    if (b && (b.k & 2147483648 || b.Z)) {
      return b.I(null, c, d);
    }
    if (kb(b) === Boolean || "number" === typeof b) {
      return jc(c, "" + v(b));
    }
    if (null != b && b.constructor === Object) {
      return jc(c, "#js "), rg.o ? rg.o(le.c(function(c) {
        return new Q(null, 2, 5, R, [Ld.d(c), b[c]], null);
      }, md(b)), qg, c, d) : rg.call(null, le.c(function(c) {
        return new Q(null, 2, 5, R, [Ld.d(c), b[c]], null);
      }, md(b)), qg, c, d);
    }
    if (b instanceof Array) {
      return mg(c, qg, "#js [", " ", "]", d, b);
    }
    if (ia(b)) {
      return q(cb.d(d)) ? jc(c, pg(b)) : jc(c, b);
    }
    if (bd(b)) {
      return ng.f(c, E(["#\x3c", "" + v(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + v(b);;) {
          if (G(d) < c) {
            d = [v("0"), v(d)].join("");
          } else {
            return d;
          }
        }
      };
      return ng.f(c, E(['#inst "', "" + v(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? ng.f(c, E(['#"', b.source, '"'], 0)) : (b ? b.k & 2147483648 || b.Z || (b.k ? 0 : r(kc, b)) : r(kc, b)) ? lc(b, c, d) : s ? ng.f(c, E(["#\x3c", "" + v(b), "\x3e"], 0)) : null;
  }
  return null;
};
function tg(a) {
  var b = ab();
  if (hd(a)) {
    b = "";
  } else {
    var c = v, d = new Xa;
    a: {
      var e = new yc(d);
      sg(A(a), e, b);
      a = z(C(a));
      for (var f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.C(null, k);
          jc(e, " ");
          sg(l, e, b);
          k += 1;
        } else {
          if (a = z(a)) {
            f = a, ld(f) ? (a = vc(f), g = wc(f), f = a, l = G(a), a = g, g = l) : (l = A(f), jc(e, " "), sg(l, e, b), a = C(f), f = null, g = 0), k = 0;
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
var ug = function() {
  function a(a) {
    var c = null;
    0 < arguments.length && (c = E(Array.prototype.slice.call(arguments, 0), 0));
    return tg(c);
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return tg(a);
  };
  a.f = function(a) {
    return tg(a);
  };
  return a;
}(), vg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = tg(a);
    Za.d ? Za.d(a) : Za.call(null, a);
    return null;
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function rg(a, b, c, d) {
  return mg(c, function(a, c, d) {
    b.e ? b.e(Nb(a), c, d) : b.call(null, Nb(a), c, d);
    jc(c, " ");
    return b.e ? b.e(Ob(a), c, d) : b.call(null, Ob(a), c, d);
  }, "{", ", ", "}", d, z(a));
}
Rf.prototype.Z = !0;
Rf.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
Hc.prototype.Z = !0;
Hc.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
ef.prototype.Z = !0;
ef.prototype.I = function(a, b, c) {
  return mg(b, sg, "[", " ", "]", c, this);
};
Sd.prototype.Z = !0;
Sd.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
n.prototype.Z = !0;
n.prototype.I = function(a, b, c) {
  return rg(this, sg, b, c);
};
lf.prototype.Z = !0;
lf.prototype.I = function(a, b, c) {
  return mg(b, sg, "#queue [", " ", "]", c, z(this));
};
Md.prototype.Z = !0;
Md.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
Pc.prototype.Z = !0;
Pc.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
Lf.prototype.Z = !0;
Lf.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
cf.prototype.Z = !0;
cf.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
Nf.prototype.Z = !0;
Nf.prototype.I = function(a, b, c) {
  return rg(this, sg, b, c);
};
Xf.prototype.Z = !0;
Xf.prototype.I = function(a, b, c) {
  return mg(b, sg, "#{", " ", "}", c, this);
};
Q.prototype.Z = !0;
Q.prototype.I = function(a, b, c) {
  return mg(b, sg, "[", " ", "]", c, this);
};
Ed.prototype.Z = !0;
Ed.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
rf.prototype.Z = !0;
rf.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
Fd.prototype.Z = !0;
Fd.prototype.I = function(a, b) {
  return jc(b, "()");
};
Id.prototype.Z = !0;
Id.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
fg.prototype.Z = !0;
fg.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
Mf.prototype.Z = !0;
Mf.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
Tf.prototype.Z = !0;
Tf.prototype.I = function(a, b, c) {
  return mg(b, sg, "(", " ", ")", c, this);
};
Q.prototype.mc = !0;
Q.prototype.nc = function(a, b) {
  return rd.c(this, b);
};
ef.prototype.mc = !0;
ef.prototype.nc = function(a, b) {
  return rd.c(this, b);
};
P.prototype.mc = !0;
P.prototype.nc = function(a, b) {
  return Ac(this, b);
};
Cc.prototype.mc = !0;
Cc.prototype.nc = function(a, b) {
  return Ac(this, b);
};
var wg = {};
function xg(a, b) {
  if (a ? a.tf : a) {
    return a.tf(a, b);
  }
  var c;
  c = xg[m(null == a ? null : a)];
  if (!c && (c = xg._, !c)) {
    throw u("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var yg = function() {
  function a(a, b, c, d, e) {
    if (a ? a.yf : a) {
      return a.yf(a, b, c, d, e);
    }
    var t;
    t = yg[m(null == a ? null : a)];
    if (!t && (t = yg._, !t)) {
      throw u("ISwap.-swap!", a);
    }
    return t.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.xf : a) {
      return a.xf(a, b, c, d);
    }
    var e;
    e = yg[m(null == a ? null : a)];
    if (!e && (e = yg._, !e)) {
      throw u("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.wf : a) {
      return a.wf(a, b, c);
    }
    var d;
    d = yg[m(null == a ? null : a)];
    if (!d && (d = yg._, !d)) {
      throw u("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.vf : a) {
      return a.vf(a, b);
    }
    var c;
    c = yg[m(null == a ? null : a)];
    if (!c && (c = yg._, !c)) {
      throw u("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, g, k, l, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, k);
      case 4:
        return b.call(this, e, g, k, l);
      case 5:
        return a.call(this, e, g, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.e = c;
  e.o = b;
  e.q = a;
  return e;
}();
function zg(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.Fh = c;
  this.Qb = d;
  this.k = 2153938944;
  this.r = 16386;
}
h = zg.prototype;
h.N = function() {
  return la(this);
};
h.de = function(a, b, c) {
  a = z(this.Qb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.C(null, f), k = H.e(g, 0, null), g = H.e(g, 1, null);
      g.o ? g.o(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = z(a)) {
        ld(a) ? (d = vc(a), a = wc(a), k = d, e = G(d), d = k) : (d = A(a), k = H.e(d, 0, null), g = H.e(d, 1, null), g.o ? g.o(k, this, b, c) : g.call(null, k, this, b, c), a = C(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
h.ce = function(a, b, c) {
  return this.Qb = $c.e(this.Qb, b, c);
};
h.ee = function(a, b) {
  return this.Qb = ad.c(this.Qb, b);
};
h.I = function(a, b, c) {
  jc(b, "#\x3cAtom: ");
  sg(this.state, b, c);
  return jc(b, "\x3e");
};
h.w = function() {
  return this.l;
};
h.zb = function() {
  return this.state;
};
h.H = function(a, b) {
  return this === b;
};
var Bg = function() {
  function a(a) {
    return new zg(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = N(c) ? J.c(S, c) : c, e = I.c(d, Ag), d = I.c(d, db);
      return new zg(a, d, e, null);
    }
    a.m = 1;
    a.j = function(a) {
      var c = A(a);
      a = B(a);
      return b(c, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, E(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.j = c.j;
  b.d = a;
  b.f = c.f;
  return b;
}();
function Cg(a, b) {
  if (a instanceof zg) {
    var c = a.Fh;
    if (null != c && !q(c.d ? c.d(b) : c.call(null, b))) {
      throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(ug.f(E([Hd(new Cc(null, "validate", "validate", 1233162959, null), new Cc(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Qb && mc(a, c, b);
    return b;
  }
  return xg(a, b);
}
var Dg = function() {
  function a(a, b, c, d) {
    return a instanceof zg ? Cg(a, b.e ? b.e(a.state, c, d) : b.call(null, a.state, c, d)) : yg.o(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof zg ? Cg(a, b.c ? b.c(a.state, c) : b.call(null, a.state, c)) : yg.e(a, b, c);
  }
  function c(a, b) {
    return a instanceof zg ? Cg(a, b.d ? b.d(a.state) : b.call(null, a.state)) : yg.c(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, w) {
      var D = null;
      4 < arguments.length && (D = E(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, D);
    }
    function b(a, c, d, e, f) {
      return a instanceof zg ? Cg(a, J.q(c, a.state, d, e, f)) : yg.q(a, c, d, e, f);
    }
    a.m = 4;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var d = A(a);
      a = C(a);
      var e = A(a);
      a = C(a);
      var f = A(a);
      a = B(a);
      return b(c, d, e, f, a);
    };
    a.f = b;
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
        return e.f(d, g, k, l, E(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.j = e.j;
  d.c = c;
  d.e = b;
  d.o = a;
  d.f = e.f;
  return d;
}(), Eg = null, Fg = function() {
  function a(a) {
    null == Eg && (Eg = Bg.d(0));
    return Fc.d([v(a), v(Dg.c(Eg, Jc))].join(""));
  }
  function b() {
    return c.d("G__");
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
  c.t = b;
  c.d = a;
  return c;
}(), Gg = {};
function Hg(a) {
  if (a ? a.of : a) {
    return a.of(a);
  }
  var b;
  b = Hg[m(null == a ? null : a)];
  if (!b && (b = Hg._, !b)) {
    throw u("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function Ig(a) {
  return(a ? q(q(null) ? null : a.nf) || (a.la ? 0 : r(Gg, a)) : r(Gg, a)) ? Hg(a) : "string" === typeof a || "number" === typeof a || a instanceof P || a instanceof Cc ? Jg.d ? Jg.d(a) : Jg.call(null, a) : ug.f(E([a], 0));
}
var Jg = function Kg(b) {
  if (null == b) {
    return null;
  }
  if (b ? q(q(null) ? null : b.nf) || (b.la ? 0 : r(Gg, b)) : r(Gg, b)) {
    return Hg(b);
  }
  if (b instanceof P) {
    return Kd(b);
  }
  if (b instanceof Cc) {
    return "" + v(b);
  }
  if (K(b)) {
    var c = {};
    b = z(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.C(null, f), k = H.e(g, 0, null), g = H.e(g, 1, null);
        c[Ig(k)] = Kg(g);
        f += 1;
      } else {
        if (b = z(b)) {
          ld(b) ? (e = vc(b), b = wc(b), d = e, e = G(e)) : (e = A(b), d = H.e(e, 0, null), e = H.e(e, 1, null), c[Ig(d)] = Kg(e), b = C(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (id(b)) {
    c = [];
    b = z(le.c(Kg, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.C(null, f), c.push(k), f += 1;
      } else {
        if (b = z(b)) {
          d = b, ld(d) ? (b = vc(d), f = wc(d), d = b, e = G(b), b = f) : (b = A(d), c.push(b), b = C(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return s ? b : null;
}, Lg = {};
function Mg(a, b) {
  if (a ? a.mf : a) {
    return a.mf(a, b);
  }
  var c;
  c = Mg[m(null == a ? null : a)];
  if (!c && (c = Mg._, !c)) {
    throw u("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var Og = function() {
  function a(a) {
    return b.f(a, E([new n(null, 1, [Ng, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? q(q(null) ? null : a.vi) || (a.la ? 0 : r(Lg, a)) : r(Lg, a)) {
        return Mg(a, J.c(Qf, c));
      }
      if (z(c)) {
        var d = N(c) ? J.c(S, c) : c, e = I.c(d, Ng);
        return function(a, b, c, d) {
          return function O(e) {
            return N(e) ? ig.d(le.c(O, e)) : id(e) ? Be(null == e ? null : wb(e), le.c(O, e)) : e instanceof Array ? af(le.c(O, e)) : kb(e) === Object ? Be(vf, function() {
              return function(a, b, c, d) {
                return function qb(f) {
                  return new Md(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = z(f);
                        if (a) {
                          if (ld(a)) {
                            var b = vc(a), c = G(b), g = Qd(c);
                            a: {
                              for (var k = 0;;) {
                                if (k < c) {
                                  var l = Bb.c(b, k), l = new Q(null, 2, 5, R, [d.d ? d.d(l) : d.call(null, l), O(e[l])], null);
                                  g.add(l);
                                  k += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? Td(g.aa(), qb(wc(a))) : Td(g.aa(), null);
                          }
                          g = A(a);
                          return F(new Q(null, 2, 5, R, [d.d ? d.d(g) : d.call(null, g), O(e[g])], null), qb(B(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(md(e));
            }()) : s ? e : null;
          };
        }(c, d, e, q(e) ? Ld : v)(a);
      }
      return null;
    }
    a.m = 1;
    a.j = function(a) {
      var c = A(a);
      a = B(a);
      return b(c, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, E(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.j = c.j;
  b.d = a;
  b.f = c.f;
  return b;
}();
function Pg(a) {
  this.Vd = a;
  this.r = 0;
  this.k = 2153775104;
}
Pg.prototype.N = function() {
  return Ca(ug.f(E([this], 0)));
};
Pg.prototype.I = function(a, b) {
  return jc(b, [v('#uuid "'), v(this.Vd), v('"')].join(""));
};
Pg.prototype.H = function(a, b) {
  return b instanceof Pg && this.Vd === b.Vd;
};
function Qg(a, b) {
  this.message = a;
  this.data = b;
}
Qg.prototype = Error();
Qg.prototype.constructor = Qg;
var Rg = function() {
  function a(a, b) {
    return new Qg(a, b);
  }
  function b(a, b) {
    return new Qg(a, b);
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
  c.c = b;
  c.e = a;
  return c;
}();
var Sg = new P(null, "labels", "labels"), Tg = new P(null, "const-count", "const-count"), Ug = new P(null, "view", "view"), eb = new P(null, "dup", "dup"), Vg = new P(null, "path", "path"), Wg = new P(null, "mousemove-listener", "mousemove-listener"), Xg = new P(null, "href", "href"), Yg = new P(null, "update-selection-investments-table-view", "update-selection-investments-table-view"), Zg = new P(null, "portfolio-companies", "portfolio-companies"), $g = new P(null, "query-params", "query-params"), 
ah = new P(null, "portfolio_company_count", "portfolio_company_count"), y = new P(null, "default", "default"), T = new P(null, "recur", "recur"), bh = new P(null, "text", "text"), ch = new P(null, "xml", "xml"), dh = new P(null, "data", "data"), eh = new P(null, "*", "*"), fh = new P(null, "uk_constituencies", "uk_constituencies"), gh = new P(null, "!portfolio_company_name_na", "!portfolio_company_name_na"), hh = new P(null, "ul", "ul"), ih = new P(null, "from", "from"), jh = new P(null, "date", 
"date"), kh = new P(null, "init-state", "init-state"), lh = new P(null, "all-portfolio-companies-summary", "all-portfolio-companies-summary"), mh = new P(null, "company_no", "company_no"), nh = new P(null, "finally-block", "finally-block"), oh = new P(null, "boundarylinecolls", "boundarylinecolls"), ph = new P(null, "ctor", "ctor"), qh = new P(null, "div.box.box-first", "div.box.box-first"), rh = new P(null, "boundaryline_compact_name", "boundaryline_compact_name"), sh = new P(null, "latest_accounts_date", 
"latest_accounts_date"), th = new P(null, "records", "records"), uh = new P(null, "lists", "lists"), vh = new P(null, "search", "search"), wh = new P(null, "edn", "edn"), xh = new P(null, "employee-count-delta-val", "employee-count-delta-val"), yh = new P(null, "raw", "raw"), zh = new P(null, "boundarylines", "boundarylines"), Ah = new P(null, "catch-block", "catch-block"), Bh = new P(null, "desc", "desc"), Ch = new P(null, "coordinates", "coordinates"), Dh = new P(null, "map", "map"), Eh = new P(null, 
"width", "width"), Fh = new P(null, "state", "state"), Gh = new P(null, "div", "div"), Hh = new P(null, "target", "target"), Ih = new P(null, "collection_id", "collection_id"), Lh = new P(null, "link-fn", "link-fn"), Mh = new P(null, "uk-constituencies", "uk-constituencies"), Nh = new P(null, "selection-investment-stats", "selection-investment-stats"), Oh = new P(null, "constituency", "constituency"), Ph = new P(null, "boundaryline_id", "boundaryline_id"), Qh = new P(null, "selection-investment-aggs-table-view", 
"selection-investment-aggs-table-view"), Rh = new P(null, "react-key", "react-key"), Sh = new P(null, "turnover-delta-val", "turnover-delta-val"), Th = new P(null, "total", "total"), Uh = new P("om.core", "index", "om.core/index"), Vh = new P(null, "icon", "icon"), Wh = new P(null, "markers", "markers"), Xh = new P(null, "fetch-boundaryline-fn", "fetch-boundaryline-fn"), Yh = new P(null, "y", "y"), Zh = new P(null, "chart", "chart"), $h = new P(null, "content", "content"), ai = new P(null, "key", 
"key"), bi = new P(null, "class", "class"), ci = new P(null, "x", "x"), di = new P(null, "mean", "mean"), ei = new P(null, "prefix", "prefix"), fi = new P(null, "selection-investments-table-view", "selection-investments-table-view"), gi = new P(null, "selector", "selector"), hi = new P(null, "portfolio-company", "portfolio-company"), ii = new P(null, "weight", "weight"), ji = new P(null, "portfolio_company_site_postcode", "portfolio_company_site_postcode"), ki = new P(null, "a", "a"), li = new P(null, 
"opacity", "opacity"), mi = new P(null, "comm", "comm"), ni = new P(null, "selection-investment-aggs", "selection-investment-aggs"), oi = new P(null, "selection", "selection"), pi = new P(null, "leaflet-map", "leaflet-map"), Ng = new P(null, "keywordize-keys", "keywordize-keys"), qi = new P(null, "name", "name"), ri = new P(null, "div.tbl", "div.tbl"), si = new P(null, "selected-idx", "selected-idx"), ti = new P(null, "median", "median"), ui = new P(null, "header", "header"), vi = new P(null, "tolerance", 
"tolerance"), wi = new P(null, "latest_turnover", "latest_turnover"), xi = new P(null, "iconAnchor", "iconAnchor"), yi = new P(null, "color", "color"), zi = new P(null, "fillOpacity", "fillOpacity"), Ai = new P(null, "pc-count", "pc-count"), Bi = new P(null, "y0-title", "y0-title"), bb = new P(null, "flush-on-newline", "flush-on-newline"), Ci = new P(null, "click", "click"), Di = new P(null, "count", "count"), Ei = new P(null, "selection-portfolio-company-locations", "selection-portfolio-company-locations"), 
Gi = new P(null, "location", "location"), Hi = new P(null, "bounds", "bounds"), Ii = new P(null, "path-selections", "path-selections"), Ji = new P(null, "investor-companies", "investor-companies"), Ki = new P(null, "employee-count-delta", "employee-count-delta"), Li = new P(null, "turnover-delta", "turnover-delta"), Mi = new P(null, "investor_company_count", "investor_company_count"), Ni = new P(null, "catch-exception", "catch-exception"), Oi = new P(null, "employee-count", "employee-count"), Pi = 
new P(null, "instrument", "instrument"), Qi = new P(null, "pan-pending", "pan-pending"), Ri = new P(null, "tx-listen", "tx-listen"), Si = new P(null, "?investor_company_name_na", "?investor_company_name_na"), Ti = new P(null, "path-highlights", "path-highlights"), Ui = new P(null, "continue-block", "continue-block"), Vi = new P(null, "investor_company_uid", "investor_company_uid"), Wi = new P(null, "investment_uid", "investment_uid"), Xi = new P("om.core", "defer", "om.core/defer"), Yi = new P(null, 
"uk-constituencies-rtree", "uk-constituencies-rtree"), Zi = new P(null, "properties", "properties"), $i = new P(null, "prev", "prev"), aj = new P(null, "employee_count", "employee_count"), bj = new P(null, "clojure", "clojure"), cj = new P(null, "click-listener", "click-listener"), dj = new P(null, "selection-investment-account-timelines", "selection-investment-account-timelines"), ej = new P(null, "constituencies", "constituencies"), fj = new P(null, "shared", "shared"), gj = new P(null, "selection-investments", 
"selection-investments"), hj = new P(null, "plus?", "plus?"), ij = new P(null, "app-state", "app-state"), jj = new P(null, "curr", "curr"), kj = new P(null, "title", "title"), lj = new P(null, "old-state", "old-state"), mj = new P(null, "constituency_count", "constituency_count"), nj = new P(null, "popupAnchor", "popupAnchor"), oj = new P(null, "accepts", "accepts"), pj = new P(null, "size", "size"), qj = new P(null, "span.prev", "span.prev"), rj = new P(null, "route-select", "route-select"), sj = 
new P(null, "?portfolio_company_site_postcode", "?portfolio_company_site_postcode"), tj = new P(null, "fill", "fill"), uj = new P(null, "div.tbl-row", "div.tbl-row"), vj = new P(null, "min-zoom", "min-zoom"), wj = new P(null, "investor_company_name", "investor_company_name"), xj = new P(null, "onClick", "onClick"), yj = new P(null, "?boundaryline_compact_name_na", "?boundaryline_compact_name_na"), zj = new P(null, "paths", "paths"), Aj = new P(null, "div.grid", "div.grid"), Bj = new P(null, "i.icon-asc", 
"i.icon-asc"), Cj = new P(null, "dec", "dec"), Dj = new P(null, "h", "h"), Ej = new P(null, "latest_turnover_delta", "latest_turnover_delta"), fb = new P(null, "print-length", "print-length"), Fj = new P(null, "categories", "categories"), Gj = new P(null, "ic-count", "ic-count"), Hj = new P(null, "all-investment-stats", "all-investment-stats"), Ij = new P(null, "turnover", "turnover"), Jj = new P(null, "search-results", "search-results"), Kj = new P(null, "uid", "uid"), Lj = new P(null, "type", "type"), 
Mj = new P(null, "all-portfolio-company-site-stats", "all-portfolio-company-site-stats"), Nj = new P("om.core", "pass", "om.core/pass"), Pj = new P(null, "textarea", "textarea"), Qj = new P(null, "yAxis", "yAxis"), Rj = new P(null, "small", "small"), s = new P(null, "else", "else"), Sj = new P(null, "htmlFor", "htmlFor"), Tj = new P("cljs.core", "not-found", "cljs.core/not-found"), Uj = new P(null, "new-value", "new-value"), Vj = new P(null, "route-change-view", "route-change-view"), cb = new P(null, 
"readably", "readably"), Wj = new P(null, "converters", "converters"), Xj = new P(null, "xAxis", "xAxis"), Yj = new P(null, "sf", "sf"), Zj = new P(null, "zoom", "zoom"), ak = new P(null, "highlighted", "highlighted"), bk = new P(null, "web_url", "web_url"), Ag = new P(null, "validator", "validator"), db = new P(null, "meta", "meta"), ck = new P(null, "min", "min"), dk = new P(null, "stats", "stats"), ek = new P(null, "latest_employee_count", "latest_employee_count"), fk = new P(null, "old-value", 
"old-value"), gk = new P(null, "averages", "averages"), hk = new P(null, "w", "w"), ik = new P(null, "opts", "opts"), jk = new P(null, "update-selection-investment-aggs-table-view", "update-selection-investment-aggs-table-view"), kk = new P(null, "formatter", "formatter"), lk = new P(null, "i.icon-desc", "i.icon-desc"), mk = new P(null, "series", "series"), nk = new P(null, "turnover_delta", "turnover_delta"), ok = new P(null, "input", "input"), pk = new P(null, "employee_count_delta", "employee_count_delta"), 
qk = new P(null, "div.tbl-cell", "div.tbl-cell"), rk = new P(null, "for", "for"), sk = new P(null, "order", "order"), tk = new P(null, "mp", "mp"), uk = new P(null, "y1-title", "y1-title"), vk = new P(null, "investor_companies", "investor_companies"), wk = new P(null, "className", "className"), xk = new P(null, "investor-company", "investor-company"), yk = new P(null, "leaflet-path", "leaflet-path"), zk = new P(null, "div.tbl-cell.charts", "div.tbl-cell.charts"), Ak = new P(null, "change-view", "change-view"), 
Bk = new P(null, "fn", "fn"), Ck = new P(null, "id", "id"), Dk = new P(null, "asc", "asc"), Ek = new P(null, "value", "value"), Fk = new P(null, "selected", "selected"), Gk = new P(null, "select", "select"), Hk = new P(null, "description", "description"), Ik = new P(null, "height", "height"), Jk = new P(null, "compact_name", "compact_name"), Kk = new P(null, "iconSize", "iconSize"), Lk = new P(null, "tag", "tag"), Mk = new P(null, "i.icon-arrow-left", "i.icon-arrow-left"), Nk = new P(null, "li", 
"li"), Ok = new P(null, "benchmark", "benchmark"), Pk = new P(null, "contents", "contents"), Qk = new P(null, "path-fn", "path-fn"), Rk = new P(null, "rotation", "rotation"), Sk = new P(null, "political_party", "political_party"), Tk = new P(null, "portfolio_company_name", "portfolio_company_name"), Uk = new P(null, "portfolio_companies", "portfolio_companies"), Vk = new P(null, "new-state", "new-state");
function Wk(a, b, c) {
  a = a.search(Jg(new n(null, 4, [ci, b, Yh, c, hk, 0, Dj, 0], null)));
  return xe(function(a) {
    return gju.cj(Jg(new n(null, 2, [Lj, "Point", Ch, new Q(null, 2, 5, R, [b, c], null)], null)), a.Ii);
  }, a);
}
;function Xk() {
  0 != Yk && (Zk[la(this)] = this);
}
var Yk = 0, Zk = {};
Xk.prototype.qe = !1;
Xk.prototype.Vb = function() {
  if (!this.qe && (this.qe = !0, this.ya(), 0 != Yk)) {
    var a = la(this);
    delete Zk[a];
  }
};
Xk.prototype.ya = function() {
  if (this.ec) {
    for (;this.ec.length;) {
      this.ec.shift()();
    }
  }
};
function $k(a) {
  a && "function" == typeof a.Vb && a.Vb();
}
;var al, bl, cl, dl;
function el() {
  return ca.navigator ? ca.navigator.userAgent : null;
}
dl = cl = bl = al = !1;
var fl;
if (fl = el()) {
  var gl = ca.navigator;
  al = 0 == fl.indexOf("Opera");
  bl = !al && -1 != fl.indexOf("MSIE");
  cl = !al && -1 != fl.indexOf("WebKit");
  dl = !al && !cl && "Gecko" == gl.product;
}
var hl = al, il = bl, jl = dl, kl = cl;
function ll() {
  var a = ca.document;
  return a ? a.documentMode : void 0;
}
var ml;
a: {
  var nl = "", ol;
  if (hl && ca.opera) {
    var pl = ca.opera.version, nl = "function" == typeof pl ? pl() : pl
  } else {
    if (jl ? ol = /rv\:([^\);]+)(\)|;)/ : il ? ol = /MSIE\s+([^\);]+)(\)|;)/ : kl && (ol = /WebKit\/(\S+)/), ol) {
      var ql = ol.exec(el()), nl = ql ? ql[1] : ""
    }
  }
  if (il) {
    var rl = ll();
    if (rl > parseFloat(nl)) {
      ml = String(rl);
      break a;
    }
  }
  ml = nl;
}
var sl = {};
function tl(a) {
  var b;
  if (!(b = sl[a])) {
    b = 0;
    for (var c = va(String(ml)).split("."), d = va(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var t = l.exec(g) || ["", "", ""], w = p.exec(k) || ["", "", ""];
        if (0 == t[0].length && 0 == w[0].length) {
          break;
        }
        b = ((0 == t[1].length ? 0 : parseInt(t[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == t[1].length ? 0 : parseInt(t[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == t[2].length) < (0 == w[2].length) ? -1 : (0 == t[2].length) > (0 == w[2].length) ? 1 : 0) || (t[2] < w[2] ? -1 : t[2] > w[2] ? 1 : 0);
      } while (0 == b);
    }
    b = sl[a] = 0 <= b;
  }
  return b;
}
var ul = ca.document, vl = ul && il ? ll() || ("CSS1Compat" == ul.compatMode ? parseInt(ml, 10) : 5) : void 0;
var wl = !il || il && 9 <= vl, xl = il && !tl("9");
!kl || tl("528");
jl && tl("1.9b") || il && tl("8") || hl && tl("9.5") || kl && tl("528");
jl && !tl("8") || il && tl("9");
function yl(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
}
h = yl.prototype;
h.ya = function() {
};
h.Vb = function() {
};
h.Ob = !1;
h.defaultPrevented = !1;
h.Mc = !0;
h.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Mc = !1;
};
function zl(a) {
  zl[" "](a);
  return a;
}
zl[" "] = fa;
function Al(a, b) {
  a && this.Ac(a, b);
}
ta(Al, yl);
h = Al.prototype;
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
h.xd = null;
h.Ac = function(a, b) {
  var c = this.type = a.type;
  yl.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (jl) {
      var e;
      a: {
        try {
          zl(d.nodeName);
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
  this.offsetX = kl || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = kl || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  this.xd = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Ob;
};
h.preventDefault = function() {
  Al.wb.preventDefault.call(this);
  var a = this.xd;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, xl) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
h.ya = function() {
};
var Bl = 0;
function Cl() {
}
h = Cl.prototype;
h.key = 0;
h.ub = !1;
h.kc = !1;
h.Ac = function(a, b, c, d, e, f) {
  if (ja(a)) {
    this.Be = !0;
  } else {
    if (a && a.handleEvent && ja(a.handleEvent)) {
      this.Be = !1;
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.cb = a;
  this.Pe = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Jb = f;
  this.kc = !1;
  this.key = ++Bl;
  this.ub = !1;
};
h.handleEvent = function(a) {
  return this.Be ? this.cb.call(this.Jb || this.src, a) : this.cb.handleEvent.call(this.cb, a);
};
var Dl = {}, El = {}, Fl = {}, Gl = {};
function Hl(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Hl(a, b[f], c, d, e);
    }
    return null;
  }
  a = Il(a, b, c, !1, d, e);
  b = a.key;
  Dl[b] = a;
  return b;
}
function Il(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var g = El;
  b in g || (g[b] = {xa:0, Fa:0});
  g = g[b];
  e in g || (g[e] = {xa:0, Fa:0}, g.xa++);
  var g = g[e], k = la(a), l;
  g.Fa++;
  if (g[k]) {
    l = g[k];
    for (var p = 0;p < l.length;p++) {
      if (g = l[p], g.cb == c && g.Jb == f) {
        if (g.ub) {
          break;
        }
        d || (l[p].kc = !1);
        return l[p];
      }
    }
  } else {
    l = g[k] = [], g.xa++;
  }
  p = Jl();
  g = new Cl;
  g.Ac(c, p, a, b, e, f);
  g.kc = d;
  p.src = a;
  p.cb = g;
  l.push(g);
  Fl[k] || (Fl[k] = []);
  Fl[k].push(g);
  a.addEventListener ? a != ca && a.pe || a.addEventListener(b, p, e) : a.attachEvent(b in Gl ? Gl[b] : Gl[b] = "on" + b, p);
  return g;
}
function Jl() {
  var a = Kl, b = wl ? function(c) {
    return a.call(b.src, b.cb, c);
  } : function(c) {
    c = a.call(b.src, b.cb, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Ll(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Ll(a, b[f], c, d, e);
    }
    return null;
  }
  a = Il(a, b, c, !0, d, e);
  b = a.key;
  Dl[b] = a;
  return b;
}
function Ml(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Ml(a, b[f], c, d, e);
    }
  } else {
    d = !!d;
    a: {
      f = El;
      if (b in f && (f = f[b], d in f && (f = f[d], a = la(a), f[a]))) {
        a = f[a];
        break a;
      }
      a = null;
    }
    if (a) {
      for (f = 0;f < a.length;f++) {
        if (a[f].cb == c && a[f].capture == d && a[f].Jb == e) {
          Nl(a[f].key);
          break;
        }
      }
    }
  }
}
function Nl(a) {
  var b = Dl[a];
  if (!b || b.ub) {
    return!1;
  }
  var c = b.src, d = b.type, e = b.Pe, f = b.capture;
  c.removeEventListener ? c != ca && c.pe || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Gl ? Gl[d] : Gl[d] = "on" + d, e);
  c = la(c);
  Fl[c] && (e = Fl[c], Ma(e, b), 0 == e.length && delete Fl[c]);
  b.ub = !0;
  if (b = El[d][f][c]) {
    b.Ee = !0, Ol(d, f, c, b);
  }
  delete Dl[a];
  return!0;
}
function Ol(a, b, c, d) {
  if (!d.Cc && d.Ee) {
    for (var e = 0, f = 0;e < d.length;e++) {
      d[e].ub ? d[e].Pe.src = null : (e != f && (d[f] = d[e]), f++);
    }
    d.length = f;
    d.Ee = !1;
    0 == f && (delete El[a][b][c], El[a][b].xa--, 0 == El[a][b].xa && (delete El[a][b], El[a].xa--), 0 == El[a].xa && delete El[a]);
  }
}
function Pl(a) {
  var b = 0;
  if (null != a) {
    if (a = la(a), Fl[a]) {
      a = Fl[a];
      for (var c = a.length - 1;0 <= c;c--) {
        Nl(a[c].key), b++;
      }
    }
  } else {
    Sa(Dl, function(a, c) {
      Nl(c);
      b++;
    });
  }
}
function Ql(a, b, c, d, e) {
  var f = 1;
  b = la(b);
  if (a[b]) {
    var g = --a.Fa, k = a[b];
    k.Cc ? k.Cc++ : k.Cc = 1;
    try {
      for (var l = k.length, p = 0;p < l;p++) {
        var t = k[p];
        t && !t.ub && (f &= !1 !== Rl(t, e));
      }
    } finally {
      a.Fa = Math.max(g, a.Fa), k.Cc--, Ol(c, d, b, k);
    }
  }
  return Boolean(f);
}
function Rl(a, b) {
  a.kc && Nl(a.key);
  return a.handleEvent(b);
}
function Kl(a, b) {
  if (a.ub) {
    return!0;
  }
  var c = a.type, d = El;
  if (!(c in d)) {
    return!0;
  }
  var d = d[c], e, f;
  if (!wl) {
    e = b || ea("window.event");
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
    l = new Al;
    l.Ac(e, this);
    e = !0;
    try {
      if (g) {
        for (var t = [], w = l.currentTarget;w;w = w.parentNode) {
          t.push(w);
        }
        f = d[!0];
        f.Fa = f.xa;
        for (var D = t.length - 1;!l.Ob && 0 <= D && f.Fa;D--) {
          l.currentTarget = t[D], e &= Ql(f, t[D], c, !0, l);
        }
        if (k) {
          for (f = d[!1], f.Fa = f.xa, D = 0;!l.Ob && D < t.length && f.Fa;D++) {
            l.currentTarget = t[D], e &= Ql(f, t[D], c, !1, l);
          }
        }
      } else {
        e = Rl(a, l);
      }
    } finally {
      t && (t.length = 0);
    }
    return e;
  }
  c = new Al(b, this);
  return e = Rl(a, c);
}
;function Sl() {
  Xk.call(this);
}
ta(Sl, Xk);
h = Sl.prototype;
h.pe = !0;
h.Od = null;
h.addEventListener = function(a, b, c, d) {
  Hl(this, a, b, c, d);
};
h.removeEventListener = function(a, b, c, d) {
  Ml(this, a, b, c, d);
};
h.dispatchEvent = function(a) {
  var b = a.type || a, c = El;
  if (b in c) {
    if (ia(a)) {
      a = new yl(a, this);
    } else {
      if (a instanceof yl) {
        a.target = a.target || this;
      } else {
        var d = a;
        a = new yl(b, this);
        Wa(a, d);
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if (b) {
      e = [];
      for (f = this;f;f = f.Od) {
        e.push(f);
      }
      f = c[!0];
      f.Fa = f.xa;
      for (var g = e.length - 1;!a.Ob && 0 <= g && f.Fa;g--) {
        a.currentTarget = e[g], d &= Ql(f, e[g], a.type, !0, a) && !1 != a.Mc;
      }
    }
    if (!1 in c) {
      if (f = c[!1], f.Fa = f.xa, b) {
        for (g = 0;!a.Ob && g < e.length && f.Fa;g++) {
          a.currentTarget = e[g], d &= Ql(f, e[g], a.type, !1, a) && !1 != a.Mc;
        }
      } else {
        for (e = this;!a.Ob && e && f.Fa;e = e.Od) {
          a.currentTarget = e, d &= Ql(f, e, a.type, !1, a) && !1 != a.Mc;
        }
      }
    }
    a = Boolean(d);
  } else {
    a = !0;
  }
  return a;
};
h.ya = function() {
  Sl.wb.ya.call(this);
  Pl(this);
  this.Od = null;
};
function Tl(a, b) {
  Xk.call(this);
  this.$b = a || 1;
  this.hc = b || ca;
  this.Sc = qa(this.Ah, this);
  this.Fd = sa();
}
ta(Tl, Sl);
h = Tl.prototype;
h.enabled = !1;
h.ia = null;
h.setInterval = function(a) {
  this.$b = a;
  this.ia && this.enabled ? (this.stop(), this.start()) : this.ia && this.stop();
};
h.Ah = function() {
  if (this.enabled) {
    var a = sa() - this.Fd;
    0 < a && a < 0.8 * this.$b ? this.ia = this.hc.setTimeout(this.Sc, this.$b - a) : (this.dispatchEvent(Ul), this.enabled && (this.ia = this.hc.setTimeout(this.Sc, this.$b), this.Fd = sa()));
  }
};
h.start = function() {
  this.enabled = !0;
  this.ia || (this.ia = this.hc.setTimeout(this.Sc, this.$b), this.Fd = sa());
};
h.stop = function() {
  this.enabled = !1;
  this.ia && (this.hc.clearTimeout(this.ia), this.ia = null);
};
h.ya = function() {
  Tl.wb.ya.call(this);
  this.stop();
  delete this.hc;
};
var Ul = "tick";
function Vl(a) {
  if ("function" == typeof a.xc) {
    return a.xc();
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
function Wl(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ha(a) || ia(a)) {
      Ja(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.zd) {
        d = a.zd();
      } else {
        if ("function" != typeof a.xc) {
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
      for (var e = Vl(a), f = e.length, g = 0;g < f;g++) {
        b.call(c, e[g], d && d[g], a);
      }
    }
  }
}
;function Xl(a, b) {
  this.sb = {};
  this.ba = [];
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
      a instanceof Xl ? (c = a.zd(), d = a.xc()) : (c = Ua(a), d = Ta(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
h = Xl.prototype;
h.xa = 0;
h.xc = function() {
  Yl(this);
  for (var a = [], b = 0;b < this.ba.length;b++) {
    a.push(this.sb[this.ba[b]]);
  }
  return a;
};
h.zd = function() {
  Yl(this);
  return this.ba.concat();
};
h.If = function() {
  return Object.prototype.hasOwnProperty.call(this.sb, "Content-Type");
};
function Yl(a) {
  if (a.xa != a.ba.length) {
    for (var b = 0, c = 0;b < a.ba.length;) {
      var d = a.ba[b];
      Object.prototype.hasOwnProperty.call(a.sb, d) && (a.ba[c++] = d);
      b++;
    }
    a.ba.length = c;
  }
  if (a.xa != a.ba.length) {
    for (var e = {}, c = b = 0;b < a.ba.length;) {
      d = a.ba[b], Object.prototype.hasOwnProperty.call(e, d) || (a.ba[c++] = d, e[d] = 1), b++;
    }
    a.ba.length = c;
  }
}
h.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.sb, a) ? this.sb[a] : b;
};
h.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.sb, a) || (this.xa++, this.ba.push(a));
  this.sb[a] = b;
};
h.Bf = function() {
  return new Xl(this);
};
function Zl(a) {
  return $l(a || arguments.callee.caller, []);
}
function $l(a, b) {
  var c = [];
  if (La(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(am(a) + "(");
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
            f = (f = am(f)) ? f : "[fn]";
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
        c.push($l(a.caller, b));
      } catch (g) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function am(a) {
  if (bm[a]) {
    return bm[a];
  }
  a = String(a);
  if (!bm[a]) {
    var b = /function ([^\(]+)/.exec(a);
    bm[a] = b ? b[1] : "[Anonymous]";
  }
  return bm[a];
}
var bm = {};
function cm(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
cm.prototype.te = null;
cm.prototype.se = null;
var dm = 0;
cm.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || dm++;
  d || sa();
  this.bc = a;
  this.Kg = b;
  delete this.te;
  delete this.se;
};
cm.prototype.Te = function(a) {
  this.bc = a;
};
function em(a) {
  this.Lg = a;
}
em.prototype.Ic = null;
em.prototype.bc = null;
em.prototype.Tc = null;
em.prototype.we = null;
function fm(a, b) {
  this.name = a;
  this.value = b;
}
fm.prototype.toString = function() {
  return this.name;
};
var gm = new fm("SEVERE", 1E3), hm = new fm("WARNING", 900), im = new fm("INFO", 800), jm = new fm("CONFIG", 700), km = new fm("FINE", 500), lm = new fm("FINEST", 300);
h = em.prototype;
h.getParent = function() {
  return this.Ic;
};
h.ue = function() {
  this.Tc || (this.Tc = {});
  return this.Tc;
};
h.Te = function(a) {
  this.bc = a;
};
function mm(a) {
  if (a.bc) {
    return a.bc;
  }
  if (a.Ic) {
    return mm(a.Ic);
  }
  Fa("Root logger has no level set.");
  return null;
}
h.log = function(a, b, c) {
  if (a.value >= mm(this).value) {
    for (a = this.Mf(a, b, c), b = "log:" + a.Kg, ca.console && (ca.console.timeStamp ? ca.console.timeStamp(b) : ca.console.markTimeline && ca.console.markTimeline(b)), ca.msWriteProfilerMark && ca.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if (c.we) {
        for (var e = 0, f = void 0;f = c.we[e];e++) {
          f(d);
        }
      }
      b = b.getParent();
    }
  }
};
h.Mf = function(a, b, c) {
  var d = new cm(a, String(b), this.Lg);
  if (c) {
    d.te = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var g;
      var k = ea("window.location.href");
      if (ia(c)) {
        g = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"};
      } else {
        var l, p, t = !1;
        try {
          l = c.lineNumber || c.line || "Not available";
        } catch (w) {
          l = "Not available", t = !0;
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || ca.$googDebugFname || k;
        } catch (D) {
          p = "Not available", t = !0;
        }
        g = !t && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:l, fileName:p, stack:c.stack || "Not available"};
      }
      e = "Message: " + wa(g.message) + '\nUrl: \x3ca href\x3d"view-source:' + g.fileName + '" target\x3d"_new"\x3e' + g.fileName + "\x3c/a\x3e\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + wa(g.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + wa(Zl(f) + "-\x3e ");
    } catch (M) {
      e = "Exception trying to expose exception! You win, we lose. " + M;
    }
    d.se = e;
  }
  return d;
};
h.info = function(a, b) {
  this.log(im, a, b);
};
h.Gf = function(a, b) {
  this.log(jm, a, b);
};
function nm(a, b) {
  a.log(km, b, void 0);
}
var om = {}, pm = null;
function qm(a) {
  pm || (pm = new em(""), om[""] = pm, pm.Te(jm));
  var b;
  if (!(b = om[a])) {
    b = new em(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = qm(a.substr(0, c));
    c.ue()[d] = b;
    b.Ic = c;
    om[a] = b;
  }
  return b;
}
;function rm() {
}
rm.prototype.Xd = null;
function sm(a) {
  var b;
  (b = a.Xd) || (b = {}, tm(a) && (b[0] = !0, b[1] = !0), b = a.Xd = b);
  return b;
}
;var um;
function vm() {
}
ta(vm, rm);
function wm(a) {
  return(a = tm(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function tm(a) {
  if (!a.xe && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.xe = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.xe;
}
um = new vm;
var xm = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function ym(a) {
  Xk.call(this);
  this.headers = new Xl;
  this.Qc = a || null;
}
ta(ym, Sl);
ym.prototype.Ia = qm("goog.net.XhrIo");
var zm = /^https?$/i, Am = [];
function Bm(a, b) {
  var c = new ym;
  Am.push(c);
  b && Hl(c, "complete", b);
  Hl(c, "ready", ra(Cm, c));
  c.send(a, void 0, void 0, void 0);
}
function Cm(a) {
  a.Vb();
  Ma(Am, a);
}
h = ym.prototype;
h.Ya = !1;
h.V = null;
h.Pc = null;
h.Bc = "";
h.Ce = "";
h.ac = "";
h.wd = !1;
h.zc = !1;
h.Dd = !1;
h.qb = !1;
h.gc = 0;
h.xb = null;
h.Re = "";
h.Hh = !1;
h.send = function(a, b, c, d) {
  if (this.V) {
    throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.Bc + "; newUri\x3d" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.Bc = a;
  this.ac = "";
  this.Ce = b;
  this.wd = !1;
  this.Ya = !0;
  this.V = this.Qc ? wm(this.Qc) : wm(um);
  this.Pc = this.Qc ? sm(this.Qc) : sm(um);
  this.V.onreadystatechange = qa(this.Me, this);
  try {
    nm(this.Ia, Dm(this, "Opening Xhr")), this.Dd = !0, this.V.open(b, a, !0), this.Dd = !1;
  } catch (e) {
    nm(this.Ia, Dm(this, "Error opening Xhr: " + e.message));
    Em(this, e);
    return;
  }
  a = c || "";
  var f = this.headers.Bf();
  d && Wl(d, function(a, b) {
    f.set(b, a);
  });
  d = ca.FormData && a instanceof ca.FormData;
  "POST" != b || f.If() || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  Wl(f, function(a, b) {
    this.V.setRequestHeader(b, a);
  }, this);
  this.Re && (this.V.responseType = this.Re);
  "withCredentials" in this.V && (this.V.withCredentials = this.Hh);
  try {
    this.xb && (ca.clearTimeout(this.xb), this.xb = null), 0 < this.gc && (nm(this.Ia, Dm(this, "Will abort after " + this.gc + "ms if incomplete")), this.xb = ca.setTimeout(qa(this.Ch, this), this.gc)), nm(this.Ia, Dm(this, "Sending request")), this.zc = !0, this.V.send(a), this.zc = !1;
  } catch (g) {
    nm(this.Ia, Dm(this, "Send error: " + g.message)), Em(this, g);
  }
};
h.Ch = function() {
  "undefined" != typeof ba && this.V && (this.ac = "Timed out after " + this.gc + "ms, aborting", nm(this.Ia, Dm(this, this.ac)), this.dispatchEvent("timeout"), this.abort(8));
};
function Em(a, b) {
  a.Ya = !1;
  a.V && (a.qb = !0, a.V.abort(), a.qb = !1);
  a.ac = b;
  Fm(a);
  Gm(a);
}
function Fm(a) {
  a.wd || (a.wd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
h.abort = function() {
  this.V && this.Ya && (nm(this.Ia, Dm(this, "Aborting")), this.Ya = !1, this.qb = !0, this.V.abort(), this.qb = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Gm(this));
};
h.ya = function() {
  this.V && (this.Ya && (this.Ya = !1, this.qb = !0, this.V.abort(), this.qb = !1), Gm(this, !0));
  ym.wb.ya.call(this);
};
h.Me = function() {
  this.Dd || this.zc || this.qb ? Hm(this) : this.Zg();
};
h.Zg = function() {
  Hm(this);
};
function Hm(a) {
  if (a.Ya && "undefined" != typeof ba) {
    if (a.Pc[1] && 4 == Jm(a) && 2 == Km(a)) {
      nm(a.Ia, Dm(a, "Local request error detected and ignored"));
    } else {
      if (a.zc && 4 == Jm(a)) {
        ca.setTimeout(qa(a.Me, a), 0);
      } else {
        if (a.dispatchEvent("readystatechange"), 4 == Jm(a)) {
          nm(a.Ia, Dm(a, "Request complete"));
          a.Ya = !1;
          try {
            var b = Km(a), c, d;
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
                var f = String(a.Bc).match(xm)[1] || null;
                if (!f && self.location) {
                  var g = self.location.protocol, f = g.substr(0, g.length - 1)
                }
                e = !zm.test(f ? f.toLowerCase() : "");
              }
              c = e;
            }
            if (c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success");
            } else {
              var k;
              try {
                k = 2 < Jm(a) ? a.V.statusText : "";
              } catch (l) {
                nm(a.Ia, "Can not get status: " + l.message), k = "";
              }
              a.ac = k + " [" + Km(a) + "]";
              Fm(a);
            }
          } finally {
            Gm(a);
          }
        }
      }
    }
  }
}
function Gm(a, b) {
  if (a.V) {
    var c = a.V, d = a.Pc[0] ? fa : null;
    a.V = null;
    a.Pc = null;
    a.xb && (ca.clearTimeout(a.xb), a.xb = null);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
      a.Ia.log(gm, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
    }
  }
}
function Jm(a) {
  return a.V ? a.V.readyState : 0;
}
function Km(a) {
  try {
    return 2 < Jm(a) ? a.V.status : -1;
  } catch (b) {
    return a.Ia.log(hm, "Can not get status: " + b.message, void 0), -1;
  }
}
function Lm(a) {
  try {
    return a.V ? a.V.responseText : "";
  } catch (b) {
    return nm(a.Ia, "Can not get responseText: " + b.message), "";
  }
}
function Dm(a, b) {
  return b + " [" + a.Ce + " " + a.Bc + " " + Km(a) + "]";
}
;var Mm, Nm = !jl && !il || il && il && 9 <= vl || jl && tl("1.9.1");
il && tl("9");
function Om(a) {
  a = a.className;
  return ia(a) && a.match(/\S+/g) || [];
}
function Pm(a, b) {
  for (var c = Om(a), d = Oa(arguments, 1), e = c, f = 0;f < d.length;f++) {
    La(e, d[f]) || e.push(d[f]);
  }
  a.className = c.join(" ");
}
function Qm(a, b) {
  var c = Om(a), d = Oa(arguments, 1), c = Rm(c, d);
  a.className = c.join(" ");
}
function Rm(a, b) {
  return Ka(a, function(a) {
    return!La(b, a);
  });
}
function Sm(a) {
  La(Om(a), "open") ? Qm(a, "open") : Pm(a, "open");
}
;function Tm() {
  var a = document;
  return a.querySelectorAll && a.querySelector ? a.querySelectorAll("HTML") : a.getElementsByTagName("HTML");
}
function Um(a, b, c) {
  function d(c) {
    c && b.appendChild(ia(c) ? a.createTextNode(c) : c);
  }
  for (var e = 1;e < c.length;e++) {
    var f = c[e];
    !ha(f) || ka(f) && 0 < f.nodeType ? d(f) : Ja(Vm(f) ? Na(f) : f, d);
  }
}
function Wm(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Vm(a) {
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
function Xm(a) {
  this.sd = a || ca.document || document;
}
h = Xm.prototype;
h.createElement = function(a) {
  return this.sd.createElement(a);
};
h.createTextNode = function(a) {
  return this.sd.createTextNode(String(a));
};
h.appendChild = function(a, b) {
  a.appendChild(b);
};
h.append = function(a, b) {
  Um(Wm(a), a, arguments);
};
h.ue = function(a) {
  return Nm && void 0 != a.children ? a.children : Ka(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
};
function Ym(a, b, c) {
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
var Zm = function() {
  function a(a, b) {
    return J.c(v, te(a, b));
  }
  function b(a) {
    return J.c(v, a);
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
  c.d = b;
  c.c = a;
  return c;
}();
function $m(a) {
  return a.toUpperCase();
}
function an(a) {
  return a.toLowerCase();
}
function bn(a) {
  return 2 > G(a) ? $m(a) : [v($m(Ad.e(a, 0, 1))), v(an(Ad.c(a, 1)))].join("");
}
function cn(a, b) {
  if (0 >= b || b >= 2 + G(a)) {
    return Xc.c(af(F("", le.c(v, z(a)))), "");
  }
  if (q(x.c ? x.c(1, b) : x.call(null, 1, b))) {
    return new Q(null, 1, 5, R, [a], null);
  }
  if (q(x.c ? x.c(2, b) : x.call(null, 2, b))) {
    return new Q(null, 2, 5, R, ["", a], null);
  }
  var c = b - 2;
  return Xc.c(af(F("", df.e(af(le.c(v, z(a))), 0, c))), Ad.c(a, c));
}
var dn = function() {
  function a(a, b, c) {
    if (x.c("" + v(b), "/(?:)/")) {
      b = cn(a, c);
    } else {
      if (1 > c) {
        b = af(("" + v(a)).split(b));
      } else {
        a: {
          for (var g = c, k = Ze;;) {
            if (x.c(g, 1)) {
              b = Xc.c(k, a);
              break a;
            }
            var l = kg(b, a);
            if (q(l)) {
              var p = l, l = a.indexOf(p), p = a.substring(l + G(p)), g = g - 1, k = Xc.c(k, a.substring(0, l));
              a = p;
            } else {
              b = Xc.c(k, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (x.c(0, c)) {
      a: {
        for (c = b;;) {
          if (x.c("", null == c ? null : Rb(c))) {
            c = null == c ? null : Sb(c);
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
    return c.e(a, b, 0);
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
  c.c = b;
  c.e = a;
  return c;
}();
function en(a) {
  for (var b = fn, c = new Xa, d = a.length, e = 0;;) {
    if (x.c(d, e)) {
      return c.toString();
    }
    var f = a.charAt(e), g = I.c(b, f);
    q(g) ? c.append("" + v(g)) : c.append(f);
    e += 1;
  }
}
;function gn(a, b) {
  var c = J.e(bg, a, b);
  return F(c, ye(function(a) {
    return c === a;
  }, b));
}
var hn = function() {
  function a(a, b) {
    return G(a) < G(b) ? ob.e(Xc, b, a) : ob.e(Xc, a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = gn(G, Xc.f(d, c, E([a], 0)));
      return ob.e(Be, A(a), B(a));
    }
    a.m = 2;
    a.j = function(a) {
      var c = A(a);
      a = C(a);
      var d = A(a);
      a = B(a);
      return b(c, d, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return Zf;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.j = c.j;
  b.t = function() {
    return Zf;
  };
  b.d = function(a) {
    return a;
  };
  b.c = a;
  b.f = c.f;
  return b;
}(), jn = function() {
  function a(a, b) {
    for (;;) {
      if (G(b) < G(a)) {
        var c = a;
        a = b;
        b = c;
      } else {
        return ob.e(function(a, b) {
          return function(a, c) {
            return qd(b, c) ? a : ed.c(a, c);
          };
        }(a, b), a, a);
      }
    }
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      a = gn(function(a) {
        return-G(a);
      }, Xc.f(e, d, E([a], 0)));
      return ob.e(b, A(a), B(a));
    }
    a.m = 2;
    a.j = function(a) {
      var b = A(a);
      a = C(a);
      var d = A(a);
      a = B(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.j = c.j;
  b.d = function(a) {
    return a;
  };
  b.c = a;
  b.f = c.f;
  return b;
}(), kn = function() {
  function a(a, b) {
    return G(a) < G(b) ? ob.e(function(a, c) {
      return qd(b, c) ? ed.c(a, c) : a;
    }, a, a) : ob.e(ed, a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return ob.e(b, a, Xc.c(e, d));
    }
    a.m = 2;
    a.j = function(a) {
      var b = A(a);
      a = C(a);
      var d = A(a);
      a = B(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.j = c.j;
  b.d = function(a) {
    return a;
  };
  b.c = a;
  b.f = c.f;
  return b;
}();
function ln(a, b) {
  return ob.e(function(a, b) {
    var e = H.e(b, 0, null), f = H.e(b, 1, null);
    return ce.c(e, f) && qd(a, e) ? ad.c($c.e(a, f, I.c(a, e)), e) : a;
  }, a, b);
}
;var mn = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function nn(a) {
  if (q(a)) {
    var b = dn.c(Kd(a), /-/), c = H.e(b, 0, null), b = zd(b);
    return hd(b) || x.c("aria", c) || x.c("data", c) ? a : Ld.d(Zm.d(Xc.c(le.c(bn, b), c)));
  }
  return null;
}
function on(a) {
  return ob.e(function(a, c) {
    var d = I.c(a, c);
    return q(d) ? a : ad.c(a, c);
  }, a, Sf(a));
}
var pn = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = af(ye(ib, ve.c(function(a) {
      return(a ? a.k & 33554432 || a.xi || (a.k ? 0 : r(gc, a)) : r(gc, a)) ? new Q(null, 1, 5, R, [a], null) : kd(a) ? a : s ? new Q(null, 1, 5, R, [a], null) : null;
    }, le.c(bi, a))));
    a = J.c(Vf, a);
    return hd(b) ? a : $c.e(a, bi, b);
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function V(a) {
  if (a ? a.vb : a) {
    return a.vb(a);
  }
  var b;
  b = V[m(null == a ? null : a)];
  if (!b && (b = V._, !b)) {
    throw u("IInterpreter.interpret", a);
  }
  return b.call(null, a);
}
function qn(a) {
  return React.createClass({render:function() {
    return this.transferPropsTo(a.d ? a.d({children:this.props.children, onChange:this.onChange, value:this.state.value}) : a.call(null, {children:this.props.children, onChange:this.onChange, value:this.state.value}));
  }, componentWillReceiveProps:function(a) {
    return this.setState({value:a.value});
  }, onChange:function(a) {
    var c = this.props.onChange;
    if (null == c) {
      return null;
    }
    c.d ? c.d(a) : c.call(null, a);
    return this.setState({value:a.target.value});
  }, getInitialState:function() {
    return{value:this.props.value};
  }});
}
var rn = qn(React.DOM.input), sn = qn(React.DOM.textarea);
function W(a) {
  var b = Jg, c = Vf.f(E([ag(Sf(a), le.c(nn, Sf(a))), new n(null, 2, [bi, wk, rk, Sj], null)], 0));
  a = ln(a, c);
  b = b(a);
  a = Zm.c(" ", Ae(z(b.className)));
  jb(/^[\s\xa0]*$/.test(null == a ? "" : String(a))) && (b.className = a);
  return b;
}
function tn(a) {
  return pb.d(le.c(V, a));
}
V["null"] = function() {
  return null;
};
V._ = function(a) {
  return a;
};
Q.prototype.vb = function() {
  var a, b = H.e(this, 0, null), c = zd(this);
  if (!(b instanceof P || b instanceof Cc || "string" === typeof b)) {
    throw Rg.c([v(b), v(" is not a valid element name.")].join(""), new n(null, 2, [Lk, b, $h, c], null));
  }
  var d = jg(mn, Kd(b));
  H.e(d, 0, null);
  b = H.e(d, 1, null);
  a = H.e(d, 2, null);
  d = H.e(d, 3, null);
  a = on(new n(null, 2, [Ck, a, bi, q(d) ? dn.c(d, /\./) : null], null));
  d = A(c);
  a = K(d) ? new Q(null, 3, 5, R, [b, pn.f(E([a, d], 0)), C(c)], null) : new Q(null, 3, 5, R, [b, a, c], null);
  b = H.e(a, 0, null);
  c = H.e(a, 1, null);
  a = H.e(a, 2, null);
  d = React.DOM[Kd(b)];
  if (q(d)) {
    b = I.e(new n(null, 2, [ok, rn, Pj, sn], null), Ld.d(b), d);
  } else {
    throw Rg.c([v("Unsupported HTML tag: "), v(Kd(b))].join(""), new n(null, 1, [Lk, b], null));
  }
  return b.call(null, W(c), jd(a) && "string" === typeof A(a) && hd(B(a)) ? V(A(a)) : q(a) ? V(a) : null);
};
Hc.prototype.vb = function() {
  return tn(this);
};
Ed.prototype.vb = function() {
  return tn(this);
};
Md.prototype.vb = function() {
  return tn(this);
};
cf.prototype.vb = function() {
  return tn(this);
};
Id.prototype.vb = function() {
  return tn(this);
};
function un(a) {
  React.createClass({render:function() {
    return this.transferPropsTo(a.d ? a.d({children:this.props.children, onChange:this.onChange, value:this.state.value}) : a.call(null, {children:this.props.children, onChange:this.onChange, value:this.state.value}));
  }, componentWillReceiveProps:function(a) {
    return this.setState({value:a.value});
  }, onChange:function(a) {
    var c = this.props.onChange;
    if (null == c) {
      return null;
    }
    c.d ? c.d(a) : c.call(null, a);
    return this.setState({value:a.target.value});
  }, getInitialState:function() {
    return{value:this.props.value};
  }});
}
un(React.DOM.input);
un(React.DOM.textarea);
un(React.DOM.option);
function vn() {
}
vn.ve = function() {
  return vn.ze ? vn.ze : vn.ze = new vn;
};
vn.prototype.Mg = 0;
vn.ve();
var wn = {}, X = !1, xn = null, yn = null, zn = {};
function An(a) {
  if (a ? a.Ng : a) {
    return a.Ng(a);
  }
  var b;
  b = An[m(null == a ? null : a)];
  if (!b && (b = An._, !b)) {
    throw u("IDisplayName.display-name", a);
  }
  return b.call(null, a);
}
var Bn = {};
function Cn(a) {
  if (a ? a.Og : a) {
    return a.Og(a);
  }
  var b;
  b = Cn[m(null == a ? null : a)];
  if (!b && (b = Cn._, !b)) {
    throw u("IInitState.init-state", a);
  }
  return b.call(null, a);
}
var Dn = {};
function En(a, b, c) {
  if (a ? a.Qg : a) {
    return a.Qg(a, b, c);
  }
  var d;
  d = En[m(null == a ? null : a)];
  if (!d && (d = En._, !d)) {
    throw u("IShouldUpdate.should-update", a);
  }
  return d.call(null, a, b, c);
}
var Fn = {};
function Gn(a) {
  if (a ? a.Tg : a) {
    return a.Tg(a);
  }
  var b;
  b = Gn[m(null == a ? null : a)];
  if (!b && (b = Gn._, !b)) {
    throw u("IWillMount.will-mount", a);
  }
  return b.call(null, a);
}
var Hn = {};
function In(a) {
  if (a ? a.Ld : a) {
    return a.Ld(a);
  }
  var b;
  b = In[m(null == a ? null : a)];
  if (!b && (b = In._, !b)) {
    throw u("IDidMount.did-mount", a);
  }
  return b.call(null, a);
}
var Jn = {};
function Kn(a) {
  if (a ? a.Vg : a) {
    return a.Vg(a);
  }
  var b;
  b = Kn[m(null == a ? null : a)];
  if (!b && (b = Kn._, !b)) {
    throw u("IWillUnmount.will-unmount", a);
  }
  return b.call(null, a);
}
var Ln = {};
function Mn(a, b, c) {
  if (a ? a.Le : a) {
    return a.Le(0, b, c);
  }
  var d;
  d = Mn[m(null == a ? null : a)];
  if (!d && (d = Mn._, !d)) {
    throw u("IWillUpdate.will-update", a);
  }
  return d.call(null, a, b, c);
}
var Nn = {};
function On(a, b, c) {
  if (a ? a.Md : a) {
    return a.Md(a, b, c);
  }
  var d;
  d = On[m(null == a ? null : a)];
  if (!d && (d = On._, !d)) {
    throw u("IDidUpdate.did-update", a);
  }
  return d.call(null, a, b, c);
}
var Pn = {};
function Qn(a, b) {
  if (a ? a.Ug : a) {
    return a.Ug(a, b);
  }
  var c;
  c = Qn[m(null == a ? null : a)];
  if (!c && (c = Qn._, !c)) {
    throw u("IWillReceiveProps.will-receive-props", a);
  }
  return c.call(null, a, b);
}
var Rn = {};
function Sn(a) {
  if (a ? a.Aa : a) {
    return a.Aa(a);
  }
  var b;
  b = Sn[m(null == a ? null : a)];
  if (!b && (b = Sn._, !b)) {
    throw u("IRender.render", a);
  }
  return b.call(null, a);
}
var Tn = {};
function Un(a, b) {
  if (a ? a.Nd : a) {
    return a.Nd(a, b);
  }
  var c;
  c = Un[m(null == a ? null : a)];
  if (!c && (c = Un._, !c)) {
    throw u("IRenderState.render-state", a);
  }
  return c.call(null, a, b);
}
var Vn = {};
function Wn(a, b, c, d, e) {
  if (a ? a.Pg : a) {
    return a.Pg(a, b, c, d, e);
  }
  var f;
  f = Wn[m(null == a ? null : a)];
  if (!f && (f = Wn._, !f)) {
    throw u("IOmSwap.-om-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
}
function Xn(a) {
  if (a ? a.Ke : a) {
    return a.value;
  }
  var b;
  b = Xn[m(null == a ? null : a)];
  if (!b && (b = Xn._, !b)) {
    throw u("IValue.-value", a);
  }
  return b.call(null, a);
}
Xn._ = function(a) {
  return a;
};
var Yn = {};
function Zn(a) {
  if (a ? a.Ec : a) {
    return a.Ec(a);
  }
  var b;
  b = Zn[m(null == a ? null : a)];
  if (!b && (b = Zn._, !b)) {
    throw u("ICursor.-path", a);
  }
  return b.call(null, a);
}
function $n(a) {
  if (a ? a.Fc : a) {
    return a.Fc(a);
  }
  var b;
  b = $n[m(null == a ? null : a)];
  if (!b && (b = $n._, !b)) {
    throw u("ICursor.-state", a);
  }
  return b.call(null, a);
}
var ao = {}, bo = function() {
  function a(a, b, c) {
    if (a ? a.Sg : a) {
      return a.Sg(a, b, c);
    }
    var g;
    g = bo[m(null == a ? null : a)];
    if (!g && (g = bo._, !g)) {
      throw u("IToCursor.-to-cursor", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Rg : a) {
      return a.Rg(a, b);
    }
    var c;
    c = bo[m(null == a ? null : a)];
    if (!c && (c = bo._, !c)) {
      throw u("IToCursor.-to-cursor", a);
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
  c.c = b;
  c.e = a;
  return c;
}();
function co(a) {
  return Zn(a);
}
function eo(a, b, c, d) {
  if (a ? a.Gc : a) {
    return a.Gc(a, b, c, d);
  }
  var e;
  e = eo[m(null == a ? null : a)];
  if (!e && (e = eo._, !e)) {
    throw u("ITransact.-transact!", a);
  }
  return e.call(null, a, b, c, d);
}
function fo(a, b, c) {
  if (a ? a.He : a) {
    return a.He(a, b, c);
  }
  var d;
  d = fo[m(null == a ? null : a)];
  if (!d && (d = fo._, !d)) {
    throw u("INotify.-notify", a);
  }
  return d.call(null, a, b, c);
}
function go(a, b, c, d, e) {
  var f = Vb(a), g = Be(co.d ? co.d(b) : co.call(null, b), c);
  c = (a ? q(q(null) ? null : a.Ui) || (a.la ? 0 : r(Vn, a)) : r(Vn, a)) ? Wn(a, b, c, d, e) : hd(g) ? Dg.c(a, d) : s ? Dg.o(a, He, g, d) : null;
  if (x.c(c, Xi)) {
    return null;
  }
  a = new n(null, 5, [Vg, g, fk, De.c(f, g), Uj, De.c(Vb(a), g), lj, f, Vk, Vb(a)], null);
  return null != e ? ho.c ? ho.c(b, $c.e(a, Lk, e)) : ho.call(null, b, $c.e(a, Lk, e)) : ho.c ? ho.c(b, a) : ho.call(null, b, a);
}
function io(a) {
  var b = a.props.children;
  if (bd(b)) {
    var c = a.props, d;
    a: {
      var e = X;
      try {
        X = !0;
        d = b.d ? b.d(a) : b.call(null, a);
        break a;
      } finally {
        X = e;
      }
      d = void 0;
    }
    a = c.children = d;
  } else {
    a = b;
  }
  return a;
}
function jo(a) {
  return a.props.__om_cursor;
}
var ko = function() {
  function a(a, b) {
    return jd(b) ? hd(b) ? c.d(a) : s ? De.c(c.d(a), b) : null : I.c(c.d(a), b);
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
  c.d = b;
  c.c = a;
  return c;
}(), lo = function() {
  function a(a, b) {
    return jd(b) ? hd(b) ? c.d(a) : s ? De.c(c.d(a), b) : null : I.c(c.d(a), b);
  }
  function b(a) {
    return null == a ? null : a.props.__om_shared;
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
  c.d = b;
  c.c = a;
  return c;
}();
function mo(a) {
  a = a.state;
  var b = a.__om_pending_state;
  return q(b) ? (a.__om_prev_state = a.__om_state, a.__om_state = b, a.__om_pending_state = null, a) : null;
}
var no = function() {
  function a(a, b) {
    var c = q(b) ? b : a.props, g = c.__om_state;
    if (q(g)) {
      var k = a.state, l = k.__om_pending_state;
      k.__om_pending_state = Vf.f(E([q(l) ? l : k.__om_state, g], 0));
      return c.__om_state = null;
    }
    return null;
  }
  function b(a) {
    return c.c(a, null);
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
  c.d = b;
  c.c = a;
  return c;
}(), oo = React.createClass({componentWillUpdate:function(a) {
  var b = io(this);
  if (b ? q(q(null) ? null : b.Wg) || (b.la ? 0 : r(Ln, b)) : r(Ln, b)) {
    var c = this.state, d = X;
    try {
      X = !0;
      var e = c.__om_pending_state;
      Mn(b, jo({props:a}), q(e) ? e : c.__om_state);
    } finally {
      X = d;
    }
  }
  return mo(this);
}, componentDidUpdate:function(a) {
  var b = io(this);
  if (b ? q(q(null) ? null : b.Ge) || (b.la ? 0 : r(Nn, b)) : r(Nn, b)) {
    var c = this.state, d = X;
    try {
      X = !0;
      var e = c.__om_prev_state;
      On(b, jo({props:a}), q(e) ? e : c.__om_state);
    } finally {
      X = d;
    }
  }
  return this.state.__om_prev_state = null;
}, render:function() {
  var a = io(this), b = this.props, c = X;
  try {
    if (X = !0, a ? q(q(null) ? null : a.Ea) || (a.la ? 0 : r(Rn, a)) : r(Rn, a)) {
      var d = xn, e = yn;
      try {
        return xn = this, yn = b.__om_instrument, Sn(a);
      } finally {
        yn = e, xn = d;
      }
    } else {
      if (a ? q(q(null) ? null : a.Ie) || (a.la ? 0 : r(Tn, a)) : r(Tn, a)) {
        d = xn;
        e = yn;
        try {
          return xn = this, yn = b.__om_instrument, Un(a, ko.d(this));
        } finally {
          yn = e, xn = d;
        }
      } else {
        return s ? a : null;
      }
    }
  } finally {
    X = c;
  }
}, componentWillReceiveProps:function(a) {
  var b = io(this);
  if (b ? q(q(null) ? null : b.Yi) || (b.la ? 0 : r(Pn, b)) : r(Pn, b)) {
    var c = X;
    try {
      return X = !0, Qn(b, jo({props:a}));
    } finally {
      X = c;
    }
  } else {
    return null;
  }
}, getDisplayName:function() {
  var a = io(this);
  if (a ? q(q(null) ? null : a.Ri) || (a.la ? 0 : r(zn, a)) : r(zn, a)) {
    var b = X;
    try {
      return X = !0, An(a);
    } finally {
      X = b;
    }
  } else {
    return null;
  }
}, componentWillUnmount:function() {
  var a = io(this);
  if (a ? q(q(null) ? null : a.Zi) || (a.la ? 0 : r(Jn, a)) : r(Jn, a)) {
    var b = X;
    try {
      return X = !0, Kn(a);
    } finally {
      X = b;
    }
  } else {
    return null;
  }
}, componentWillMount:function() {
  no.d(this);
  var a = io(this);
  if (a ? q(q(null) ? null : a.Xi) || (a.la ? 0 : r(Fn, a)) : r(Fn, a)) {
    var b = X;
    try {
      X = !0, Gn(a);
    } finally {
      X = b;
    }
  }
  return mo(this);
}, componentDidMount:function() {
  var a = io(this);
  if (a ? q(q(null) ? null : a.Fe) || (a.la ? 0 : r(Hn, a)) : r(Hn, a)) {
    var b = X;
    try {
      return X = !0, In(a);
    } finally {
      X = b;
    }
  } else {
    return null;
  }
}, getInitialState:function() {
  var a = io(this), b = this.props, c = {__om_state:Vf.f(E([function() {
    var a = b.__om_init_state;
    return q(a) ? a : vf;
  }(), (a ? q(q(null) ? null : a.Si) || (a.la ? 0 : r(Bn, a)) : r(Bn, a)) ? function() {
    var b = X;
    try {
      return X = !0, Cn(a);
    } finally {
      X = b;
    }
  }() : null], 0)), __om_id:":" + (vn.ve().Mg++).toString(36)};
  b.__om_init_state = null;
  return c;
}, shouldComponentUpdate:function(a) {
  var b = X;
  try {
    X = !0;
    var c = this.props, d = this.state, e = io(this);
    no.c(this, a);
    var f;
    if (e ? q(q(null) ? null : e.Vi) || (e.la ? 0 : r(Dn, e)) : r(Dn, e)) {
      var g = d.__om_pending_state;
      f = En(e, jo({props:a}), q(g) ? g : d.__om_state);
    } else {
      f = Xn(c.__om_cursor) !== Xn(a.__om_cursor) ? !0 : null != d.__om_pending_state ? !0 : c.__om_index !== a.__om_index ? !0 : s ? !1 : null;
    }
    return f;
  } finally {
    X = b;
  }
}});
function po(a) {
  return new oo(a);
}
function qo(a) {
  return a ? q(q(null) ? null : a.Kd) ? !0 : a.la ? !1 : r(Yn, a) : r(Yn, a);
}
function ro(a, b, c) {
  this.value = a;
  this.state = b;
  this.path = c;
  this.k = 2158397195;
  this.r = 8192;
}
h = ro.prototype;
h.L = function(a, b) {
  return Hb.e(this, b, null);
};
h.M = function(a, b, c) {
  if (X) {
    return a = Hb.e(this.value, b, c), x.c(a, c) ? c : so.e ? so.e(a, this.state, Xc.c(this.path, b)) : so.call(null, a, this.state, Xc.c(this.path, b));
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Rb = function(a, b) {
  if (X) {
    return Ib(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.ib = function(a, b, c) {
  if (X) {
    return new ro(Jb(this.value, b, c), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return this.L(null, a);
};
h.c = function(a, b) {
  return this.M(null, a, b);
};
h.Kd = !0;
h.Ec = function() {
  return this.path;
};
h.Fc = function() {
  return this.state;
};
h.zb = function() {
  if (X) {
    throw Error([v("Cannot deref cursor during render phase: "), v(this)].join(""));
  }
  return De.c(Vb(this.state), this.path);
};
h.Ke = function() {
  return this.value;
};
h.I = function(a, b, c) {
  if (X) {
    return lc(this.value, b, c);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.T = function(a, b) {
  if (X) {
    return new ro(yb(this.value, b), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.J = function() {
  var a = this;
  if (X) {
    return 0 < G(a.value) ? le.c(function(b) {
      var c = H.e(b, 0, null);
      b = H.e(b, 1, null);
      return new Q(null, 2, 5, R, [c, so.e ? so.e(b, a.state, Xc.c(a.path, c)) : so.call(null, b, a.state, Xc.c(a.path, c))], null);
    }, a.value) : null;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.K = function() {
  if (X) {
    return vb(this.value);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.H = function(a, b) {
  if (X) {
    return qo(b) ? x.c(this.value, Xn(b)) : x.c(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.A = function(a, b) {
  if (X) {
    return new ro(Tc(this.value, b), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.wa = function() {
  return new ro(this.value, this.state, this.path);
};
h.w = function() {
  if (X) {
    return dd(this.value);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.oc = function(a, b) {
  if (X) {
    return new ro(Lb(this.value, b), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Je = !0;
h.Gc = function(a, b, c, d) {
  return go(this.state, this, b, c, d);
};
function to(a, b, c) {
  this.value = a;
  this.state = b;
  this.path = c;
  this.k = 2175181595;
  this.r = 8192;
}
h = to.prototype;
h.L = function(a, b) {
  if (X) {
    return Bb.e(this, b, null);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.M = function(a, b, c) {
  if (X) {
    return Bb.e(this, b, c);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Rb = function(a, b) {
  if (X) {
    return Ib(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.ib = function(a, b, c) {
  if (X) {
    return so.e ? so.e(Ub(this.value, b, c), this.state, this.path) : so.call(null, Ub(this.value, b, c), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return this.L(null, a);
};
h.c = function(a, b) {
  return this.M(null, a, b);
};
h.Kd = !0;
h.Ec = function() {
  return this.path;
};
h.Fc = function() {
  return this.state;
};
h.zb = function() {
  if (X) {
    throw Error([v("Cannot deref cursor during render phase: "), v(this)].join(""));
  }
  return De.c(Vb(this.state), this.path);
};
h.Ke = function() {
  return this.value;
};
h.I = function(a, b, c) {
  if (X) {
    return lc(this.value, b, c);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.T = function(a, b) {
  if (X) {
    return new to(yb(this.value, b), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.J = function() {
  var a = this;
  if (X) {
    return 0 < G(a.value) ? le.e(function(b, c) {
      return so.e ? so.e(b, a.state, Xc.c(a.path, c)) : so.call(null, b, a.state, Xc.c(a.path, c));
    }, a.value, gg.t()) : null;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.K = function() {
  if (X) {
    return vb(this.value);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.kb = function() {
  if (X) {
    return so.e ? so.e(Rb(this.value), this.state, this.path) : so.call(null, Rb(this.value), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.lb = function() {
  if (X) {
    return so.e ? so.e(Sb(this.value), this.state, this.path) : so.call(null, Sb(this.value), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.H = function(a, b) {
  if (X) {
    return qo(b) ? x.c(this.value, Xn(b)) : x.c(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.A = function(a, b) {
  if (X) {
    return new to(Tc(this.value, b), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.wa = function() {
  return new to(this.value, this.state, this.path);
};
h.w = function() {
  if (X) {
    return dd(this.value);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.C = function(a, b) {
  if (X) {
    return so.e ? so.e(Bb.c(this.value, b), this.state, Xc.c(this.path, b)) : so.call(null, Bb.c(this.value, b), this.state, Xc.c(this.path, b));
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.ja = function(a, b, c) {
  if (X) {
    return b < vb(this.value) ? so.e ? so.e(Bb.c(this.value, b), this.state, Xc.c(this.path, b)) : so.call(null, Bb.c(this.value, b), this.state, Xc.c(this.path, b)) : c;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Je = !0;
h.Gc = function(a, b, c, d) {
  return go(this.state, this, b, c, d);
};
function uo(a, b, c) {
  var d = tb(a);
  d.pf = !0;
  d.H = function(b, c) {
    if (X) {
      return qo(c) ? x.c(a, Xn(c)) : x.c(a, c);
    }
    throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
  };
  d.Je = !0;
  d.Gc = function(a, c, d, k) {
    return go(b, this, c, d, k);
  };
  d.Kd = !0;
  d.Ec = function() {
    return c;
  };
  d.Fc = function() {
    return b;
  };
  d.ti = !0;
  d.zb = function() {
    if (X) {
      throw Error([v("Cannot deref cursor during render phase: "), v(this)].join(""));
    }
    return De.c(Vb(b), c);
  };
  return d;
}
var so = function() {
  function a(a, b, c) {
    return qo(a) ? a : (a ? q(q(null) ? null : a.Wi) || (a.la ? 0 : r(ao, a)) : r(ao, a)) ? bo.e(a, b, c) : Nc(a) ? new to(a, b, c) : K(a) ? new ro(a, b, c) : (a ? a.r & 8192 || a.ri || (a.r ? 0 : r(sb, a)) : r(sb, a)) ? uo(a, b, c) : s ? a : null;
  }
  function b(a, b) {
    return d.e(a, b, Ze);
  }
  function c(a) {
    return d.e(a, null, Ze);
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
  d.d = c;
  d.c = b;
  d.e = a;
  return d;
}();
function ho(a, b) {
  var c = $n(a);
  return fo(c, b, so.c(Vb(c), c));
}
var vo = !1, wo = Bg.d(Zf);
function xo() {
  vo = !1;
  for (var a = z(Vb(wo)), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.C(null, d);
      e.t ? e.t() : e.call(null);
      d += 1;
    } else {
      if (a = z(a)) {
        b = a, ld(b) ? (a = vc(b), c = wc(b), b = a, e = G(a), a = c, c = e) : (e = A(b), e.t ? e.t() : e.call(null), a = C(b), b = null, c = 0), d = 0;
      } else {
        return null;
      }
    }
  }
}
var yo = Bg.d(vf), zo = function() {
  function a(a, b, c) {
    if (!ee(new Xf(null, new n(null, 10, [kh, null, ph, null, Fh, null, Rh, null, Uh, null, ai, null, Pi, null, fj, null, ik, null, Bk, null], null), null), Sf(c))) {
      throw Error([v("Assert failed: "), v(J.o(v, "build options contains invalid keys, only :key, :react-key, ", ":fn, :init-state, :state, and :opts allowed, given ", te(", ", Sf(c)))), v("\n"), v(ug.f(E([Hd(new Cc(null, "valid?", "valid?", 1830611324, null), new Cc(null, "m", "m", -1640531418, null))], 0)))].join(""));
    }
    if (null == c) {
      var g = function() {
        var a = fj.d(c);
        return q(a) ? a : lo.d(xn);
      }(), k = function() {
        var a = ph.d(c);
        return q(a) ? a : po;
      }(), l = k.d ? k.d({children:function(c) {
        var f = X;
        try {
          return X = !0, a.c ? a.c(b, c) : a.call(null, b, c);
        } finally {
          X = f;
        }
      }, __om_instrument:yn, __om_shared:g, __om_cursor:b}) : k.call(null, {children:function(c) {
        var f = X;
        try {
          return X = !0, a.c ? a.c(b, c) : a.call(null, b, c);
        } finally {
          X = f;
        }
      }, __om_instrument:yn, __om_shared:g, __om_cursor:b});
      l.constructor = la(a);
      return l;
    }
    if (s) {
      var g = N(c) ? J.c(S, c) : c, p = I.c(g, ik), l = I.c(g, kh), t = I.c(g, Fh), g = I.c(g, ai), k = I.c(c, Bk), w = null != k ? k.d ? k.d(b) : k.call(null, b) : b, D = null != g ? I.c(w, g) : I.c(c, Rh), g = function() {
        var a = fj.d(c);
        return q(a) ? a : lo.d(xn);
      }(), k = function() {
        var a = ph.d(c);
        return q(a) ? a : po;
      }(), l = k.d ? k.d({children:null == p ? function(b) {
        var c = X;
        try {
          return X = !0, a.c ? a.c(w, b) : a.call(null, w, b);
        } finally {
          X = c;
        }
      } : function(b) {
        var c = X;
        try {
          return X = !0, a.e ? a.e(w, b, p) : a.call(null, w, b, p);
        } finally {
          X = c;
        }
      }, key:D, __om_instrument:yn, __om_shared:g, __om_state:t, __om_init_state:l, __om_index:Uh.d(c), __om_cursor:w}) : k.call(null, {children:null == p ? function(b) {
        var c = X;
        try {
          return X = !0, a.c ? a.c(w, b) : a.call(null, w, b);
        } finally {
          X = c;
        }
      } : function(b) {
        var c = X;
        try {
          return X = !0, a.e ? a.e(w, b, p) : a.call(null, w, b, p);
        } finally {
          X = c;
        }
      }, key:D, __om_instrument:yn, __om_shared:g, __om_state:t, __om_init_state:l, __om_index:Uh.d(c), __om_cursor:w});
      l.constructor = la(a);
      return l;
    }
    return null;
  }
  function b(a, b) {
    return c.e(a, b, null);
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
  c.c = b;
  c.e = a;
  return c;
}(), Ao = function() {
  function a(a, b, c) {
    if (null != yn) {
      var g;
      a: {
        var k = X;
        try {
          X = !0;
          g = yn.e ? yn.e(a, b, c) : yn.call(null, a, b, c);
          break a;
        } finally {
          X = k;
        }
        g = void 0;
      }
      return x.c(g, Nj) ? zo.e(a, b, c) : g;
    }
    return zo.e(a, b, c);
  }
  function b(a, b) {
    return c.e(a, b, null);
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
  c.c = b;
  c.e = a;
  return c;
}(), Bo = function() {
  function a(a, b, c) {
    return le.e(function(b, e) {
      return Ao.e(a, b, $c.e(c, Uh, e));
    }, b, gg.t());
  }
  function b(a, b) {
    return c.e(a, b, null);
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
  c.c = b;
  c.e = a;
  return c;
}();
function Co(a, b, c) {
  c = N(c) ? J.c(S, c) : c;
  var d = I.c(c, Pi), e = I.c(c, Vg), f = I.c(c, Ri);
  I.c(c, fj);
  var g = I.c(c, Hh);
  if (null == g) {
    throw Error([v("Assert failed: "), v("No target specified to om.core/root"), v("\n"), v(ug.f(E([Hd(new Cc(null, "not", "not", -1640422260, null), Hd(new Cc(null, "nil?", "nil?", -1637150201, null), new Cc(null, "target", "target", 1773529930, null)))], 0)))].join(""));
  }
  var k = Vb(yo);
  qd(k, g) && I.c(k, g).call(null);
  var l = (b ? b.r & 16384 || b.pi || (b.r ? 0 : r(wg, b)) : r(wg, b)) ? b : Bg.d(b), p = function() {
    l.Ti = !0;
    l.He = function() {
      return function(a, b, c) {
        return null == f ? null : f.c ? f.c(b, c) : f.call(null, b, c);
      };
    }(l, l);
    return l;
  }();
  b = ad.f(c, Hh, E([Ri, Vg], 0));
  var t = function(b, c, f) {
    return function U() {
      Dg.e(wo, ed, U);
      var b = Vb(c), b = null == e ? so.e(b, c, Ze) : so.e(De.c(b, e), c, e), k;
      a: {
        var l = yn;
        try {
          yn = d;
          k = Ao.e(a, b, f);
          break a;
        } finally {
          yn = l;
        }
        k = void 0;
      }
      return React.renderComponent(k, g);
    };
  }(l, p, b), w = Fg.t();
  nc(p, w, function() {
    qd(Vb(wo), t) || Dg.e(wo, Xc, t);
    if (q(vo)) {
      return null;
    }
    vo = !0;
    return "undefined" !== typeof requestAnimationFrame ? requestAnimationFrame(xo) : setTimeout(xo, 16);
  });
  Dg.o(yo, $c, g, function() {
    oc(p, w);
    Dg.e(yo, ad, g);
    return React.unmountComponentAtNode(g);
  });
  t();
}
var Do = function() {
  function a(a, b, c, d) {
    b = null == b ? Ze : jd(b) ? b : s ? new Q(null, 1, 5, R, [b], null) : null;
    return eo(a, b, c, d);
  }
  function b(a, b, c) {
    return d.o(a, b, c, null);
  }
  function c(a, b) {
    return d.o(a, Ze, b, null);
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
  d.c = c;
  d.e = b;
  d.o = a;
  return d;
}(), Eo = function() {
  function a(a, b, c, d) {
    return Do.o(a, b, function() {
      return c;
    }, d);
  }
  function b(a, b, c) {
    return Do.o(a, b, function() {
      return c;
    }, null);
  }
  function c(a, b) {
    return Do.o(a, Ze, function() {
      return b;
    }, null);
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
  d.c = c;
  d.e = b;
  d.o = a;
  return d;
}(), Fo = function() {
  function a(a, b) {
    var c = a.refs;
    return q(c) ? c[b].getDOMNode() : null;
  }
  function b(a) {
    return a.getDOMNode();
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
  c.d = b;
  c.c = a;
  return c;
}();
function Go(a, b, c) {
  var d = X;
  try {
    X = !0;
    var e = a.state, f = a.props.__om_cursor, g = Zn(f), k, l = e.__om_pending_state;
    k = q(l) ? l : e.__om_state;
    jd(b) ? e.__om_pending_state = Ge(k, b, c) : e.__om_pending_state = $c.e(k, b, c);
    return hd(g) ? Dg.c($n(f), Gc) : Dg.o($n(f), He, g, Gc);
  } finally {
    X = d;
  }
}
;function Ho(a, b) {
  return q(b) ? Math.round(a * Math.pow(10, b)) / Math.pow(10, b) : a;
}
function Io(a) {
  return Zm.c(",", le.c(function(a) {
    return J.c(v, a);
  }, Gd(le.c(Gd, Ce.o(3, 3, Ze, Gd(a))))));
}
var Jo = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = N(b) ? J.c(S, b) : b, f = I.c(e, Yj);
    if (q(a)) {
      var e = 0 < a ? 1 : x.c(a, 0) ? 0 : 0 > a ? -1 : null, g = Math.abs(a), k = ("" + v(g)).split("."), l = H.e(k, 0, null), p = H.e(k, 1, null), k = 1 <= g ? 3 * ((G(l) - 1) / 3 | 0) : 0 < g ? -3 * ((3 + G(dg(function() {
        return function(a) {
          return x.c(a, "0");
        };
      }(e, g, k, l, p), p))) / 3 | 0) : 0, g = g * Math.pow(10, -1 * k), l = q(f) ? ("" + v(g)).split(".") : null, p = H.e(l, 0, null);
      H.e(l, 1, null);
      var l = q(q(f) ? 0 < g : f) ? Math.pow(10, G(p) - f) : null, l = q(l) ? "" + v(l * Math.round(g / l)) : null, t = q(l) ? l.split(".") : null, p = H.e(t, 0, null), t = H.e(t, 1, null), f = q(l) ? J.c(v, Yd.d(xe(he, Ae(new Q(null, 3, 5, R, [ne(f, p), pe.c(G(p) - f, "0"), 0 < G(t) ? new Q(null, 2, 5, R, [".", ne(f - G(p), t)], null) : null], null))))) : null, f = q(f) ? parseFloat(f) : null;
      return new Q(null, 2, 5, R, [e * (q(f) ? f : g), k], null);
    }
    return null;
  }
  a.m = 1;
  a.j = function(a) {
    var d = A(a);
    a = B(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}(), Y = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = N(b) ? J.c(S, b) : b, f = I.c(e, y), g = I.c(e, hj), e = I.c(e, Cj);
    return q(a) ? (f = Ho(Math.abs(a), e), f = "" + v(f), e = dn.c(f, /\./), f = H.e(e, 0, null), e = H.e(e, 1, null), f = Io(f), f = Zm.c(".", xe(he, new Q(null, 2, 5, R, [f, e], null))), 0 > a ? [v("-"), v(f)].join("") : q(q(g) ? 0 < a : g) ? [v("+"), v(f)].join("") : f) : f;
  }
  a.m = 1;
  a.j = function(a) {
    var d = A(a);
    a = B(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}();
var Ko = new n(null, 5, [0, "", 3, "k", 6, "m", 9, "bn", 12, "tn"], null), Lo = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = N(b) ? J.c(S, b) : b, f = I.c(e, y), g = I.c(e, hj), k = I.e(e, jj, "\u00a3"), e = I.c(e, Yj);
    if (q(a)) {
      var e = Jo.f(a, E([Yj, e], 0)), f = H.e(e, 0, null), l = H.e(e, 1, null), e = Math.abs(f), p = Ko.d ? Ko.d(l) : Ko.call(null, l), l = q(p) ? p : [v("x10^"), v(l)].join("");
      return J.c(v, xe(he, new Q(null, 4, 5, R, [q(q(g) ? 0 < f : g) ? "+" : 0 > f ? "-" : null, k, e, l], null)));
    }
    return f;
  }
  a.m = 1;
  a.j = function(a) {
    var d = A(a);
    a = B(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}();
var Mo, No;
function Oo(a) {
  a = N(a) ? J.c(S, a) : a;
  I.c(a, Ek);
  a = I.c(a, Lj);
  return q(x.c ? x.c(hi, a) : x.call(null, hi, a)) ? new n(null, 3, [oi, new n(null, 2, [qi, "Total", Hk, "Totals for the selected Portfolio Company"], null), gk, new n(null, 2, [qi, "Mean", Hk, "Mean for the selected Portfolio Company"], null), Ok, new n(null, 2, [qi, "Benchmark", Hk, "Mean over all UK Companies"], null)], null) : q(x.c ? x.c(xk, a) : x.call(null, xk, a)) ? new n(null, 3, [oi, new n(null, 2, [qi, "Total", Hk, "Totals for the Portfolio Companies of the selected Investor"], null), 
  gk, new n(null, 2, [qi, "Mean", Hk, "Mean over the Portfolio Companies of the selected Investor"], null), Ok, new n(null, 2, [qi, "Benchmark", Hk, "Mean over all UK Companies"], null)], null) : q(x.c ? x.c(Oh, a) : x.call(null, Oh, a)) ? new n(null, 3, [oi, new n(null, 2, [qi, "Total", Hk, "Totals for the selected Constituency"], null), gk, new n(null, 2, [qi, "Mean", Hk, "Mean over the Portfolio Companies with sites in the selected Constituency"], null), Ok, new n(null, 2, [qi, "Benchmark", Hk, 
  "Mean over all UK Companies"], null)], null) : new n(null, 3, [oi, new n(null, 2, [qi, "Total", Hk, "Totals over all Portfolio Companies"], null), gk, new n(null, 2, [qi, "Mean", Hk, "Mean over all Portfolio Companies"], null), Ok, new n(null, 2, [qi, "Benchmark", Hk, "Mean over all UK Companies"], null)], null);
}
function Po(a) {
  var b = N(a) ? J.c(S, a) : a;
  a = I.c(b, Nh);
  var c = I.c(b, oi), d = I.c(b, Hj), b = Oo(c), e = q(a) ? a : d;
  return new n(null, 3, [oi, Vf.f(E([oi.d(b), Zc([Zg, xh, Sh, Ji, Ki, Li, Oi, ej, Ij], [Y.e ? Y.e(null == e ? null : ah.d(e), y, "-") : Y.call(null, null == e ? null : ah.d(e), y, "-"), function() {
    var a = null == e ? null : pk.d(e);
    return null == a ? null : Th.d(a);
  }(), function() {
    var a = null == e ? null : nk.d(e);
    return null == a ? null : Th.d(a);
  }(), Y.e ? Y.e(null == e ? null : Mi.d(e), y, "-") : Y.call(null, null == e ? null : Mi.d(e), y, "-"), Y.q ? Y.q(function() {
    var a = null == e ? null : pk.d(e);
    return null == a ? null : Th.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == e ? null : pk.d(e);
    return null == a ? null : Th.d(a);
  }(), Cj, 0, y, "-"), Lo.q ? Lo.q(function() {
    var a = null == e ? null : nk.d(e);
    return null == a ? null : Th.d(a);
  }(), Yj, 2, y, "-") : Lo.call(null, function() {
    var a = null == e ? null : nk.d(e);
    return null == a ? null : Th.d(a);
  }(), Yj, 2, y, "-"), Y.q ? Y.q(function() {
    var a = null == e ? null : aj.d(e);
    return null == a ? null : Th.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == e ? null : aj.d(e);
    return null == a ? null : Th.d(a);
  }(), Cj, 0, y, "-"), Y.e ? Y.e(null == e ? null : mj.d(e), y, "-") : Y.call(null, null == e ? null : mj.d(e), y, "-"), Lo.q ? Lo.q(function() {
    var a = null == e ? null : Ij.d(e);
    return null == a ? null : Th.d(a);
  }(), Yj, 2, y, "-") : Lo.call(null, function() {
    var a = null == e ? null : Ij.d(e);
    return null == a ? null : Th.d(a);
  }(), Yj, 2, y, "-")])], 0)), gk, Vf.f(E([gk.d(b), Zc([Zg, xh, Sh, Ji, Ki, Li, Oi, ej, Ij], ["\u00a0", function() {
    var a = null == e ? null : pk.d(e);
    return null == a ? null : di.d(a);
  }(), function() {
    var a = null == e ? null : nk.d(e);
    return null == a ? null : di.d(a);
  }(), "\u00a0", Y.q ? Y.q(function() {
    var a = null == e ? null : pk.d(e);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == e ? null : pk.d(e);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-"), Lo.q ? Lo.q(function() {
    var a = null == e ? null : nk.d(e);
    return null == a ? null : di.d(a);
  }(), Yj, 2, y, "-") : Lo.call(null, function() {
    var a = null == e ? null : nk.d(e);
    return null == a ? null : di.d(a);
  }(), Yj, 2, y, "-"), Y.q ? Y.q(function() {
    var a = null == e ? null : aj.d(e);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == e ? null : aj.d(e);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-"), "\u00a0", Lo.q ? Lo.q(function() {
    var a = null == e ? null : Ij.d(e);
    return null == a ? null : di.d(a);
  }(), Yj, 2, y, "-") : Lo.call(null, function() {
    var a = null == e ? null : Ij.d(e);
    return null == a ? null : di.d(a);
  }(), Yj, 2, y, "-")])], 0)), Ok, Vf.f(E([Ok.d(b), Zc([Zg, xh, Sh, Ji, Ki, Li, Oi, ej, Ij], [Y.e ? Y.e(null == d ? null : ah.d(d), y, "-") : Y.call(null, null == d ? null : ah.d(d), y, "-"), function() {
    var a = null == d ? null : pk.d(d);
    return null == a ? null : di.d(a);
  }(), function() {
    var a = null == d ? null : nk.d(d);
    return null == a ? null : Th.d(a);
  }(), Y.e ? Y.e(null == d ? null : Mi.d(d), y, "-") : Y.call(null, null == d ? null : Mi.d(d), y, "-"), Y.q ? Y.q(function() {
    var a = null == d ? null : pk.d(d);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == d ? null : pk.d(d);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-"), Lo.q ? Lo.q(function() {
    var a = null == d ? null : nk.d(d);
    return null == a ? null : di.d(a);
  }(), Yj, 2, y, "-") : Lo.call(null, function() {
    var a = null == d ? null : nk.d(d);
    return null == a ? null : di.d(a);
  }(), Yj, 2, y, "-"), Y.q ? Y.q(function() {
    var a = null == d ? null : aj.d(d);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == d ? null : aj.d(d);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-"), Y.e ? Y.e(null == d ? null : mj.d(d), y, "-") : Y.call(null, null == d ? null : mj.d(d), y, "-"), Lo.q ? Lo.q(function() {
    var a = null == d ? null : Ij.d(d);
    return null == a ? null : di.d(a);
  }(), Yj, 2, y, "-") : Lo.call(null, function() {
    var a = null == d ? null : Ij.d(d);
    return null == a ? null : di.d(a);
  }(), Yj, 2, y, "-")])], 0))], null);
}
var Ro = function Qo(b) {
  var c = Po(b), c = N(c) ? J.c(S, c) : c, d = I.c(c, Ok), e = I.c(c, gk), f = I.c(c, oi);
  "undefined" === typeof No && (No = function(b, c, d, e, f, w, D) {
    this.selection = b;
    this.df = c;
    this.ff = d;
    this.Uf = e;
    this.data = f;
    this.dh = w;
    this.qg = D;
    this.r = 0;
    this.k = 393216;
  }, No.R = !0, No.Q = "clustermap.components.full-report.overview/t33984", No.U = function(b, c) {
    return jc(c, "clustermap.components.full-report.overview/t33984");
  }, No.prototype.Ea = !0, No.prototype.Aa = function() {
    var b = this;
    return React.DOM.div({className:"full-report-overview"}, React.DOM.h4(null, "Overview of latest filings", React.DOM.small(null, "\u00a0(may span years : see table below for details)")), React.DOM.div({className:"table-responsive"}, React.DOM.table({className:"table-stats"}, React.DOM.thead(null, React.DOM.tr(null, React.DOM.th(null, "\u00a0"), React.DOM.th(null, "Investor-backed companies"), React.DOM.th(null, "Investors"), React.DOM.th(null, "Constituencies"), React.DOM.th(null, "Revenue"), 
    React.DOM.th({colSpan:"2"}, "Rev. change"), React.DOM.th(null, "Employees"))), React.DOM.tbody(null, React.DOM.tr(null, React.DOM.th(null, React.DOM.i({className:"icon-info", "data-toggle":"tooltip", "data-container":"body", title:b.selection.d ? b.selection.d(Hk) : b.selection.call(null, Hk)}), V(b.selection.d ? b.selection.d(qi) : b.selection.call(null, qi))), React.DOM.td(null, function() {
      var c = Zg.d(b.selection);
      return K(c) ? React.DOM.span(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c = Ji.d(b.selection);
      return K(c) ? React.DOM.span(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c = ej.d(b.selection);
      return K(c) ? React.DOM.span(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c = Ij.d(b.selection);
      return K(c) ? React.DOM.span(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c;
      c = Sh.d(b.selection);
      c = null == c ? null : 0 < c ? React.DOM.i({className:"icon-positive"}) : 0 > c ? React.DOM.i({className:"icon-negative"}) : null;
      return K(c) ? React.DOM.span(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c = Li.d(b.selection);
      return K(c) ? React.DOM.span(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c = Oi.d(b.selection);
      return K(c) ? React.DOM.span(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()))))));
  }, No.prototype.w = function() {
    return this.qg;
  }, No.prototype.A = function(b, c) {
    return new No(this.selection, this.df, this.ff, this.Uf, this.data, this.dh, c);
  });
  return new No(f, e, d, c, b, Qo, null);
};
var So = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/, fn = new n(null, 4, '\x26 \x26amp; \x3c \x26lt; \x3e \x26gt; " \x26quot;'.split(" "), null), To = new Xf(null, new n(null, 33, ["dd", null, "head", null, "a", null, "b", null, "body", null, "pre", null, "form", null, "iframe", null, "dl", null, "em", null, "fieldset", null, "i", null, "h1", null, "h2", null, "span", null, "h3", null, "script", null, "html", null, "h4", null, "h5", null, "h6", null, "table", null, "dt", null, "div", null, "style", 
null, "label", null, "option", null, "ul", null, "strong", null, "canvas", null, "textarea", null, "li", null, "ol", null], null), null);
function Uo(a) {
  return a instanceof P || a instanceof Cc ? Kd(a) : "" + v(a);
}
function Vo(a, b) {
  return[v(" "), v(Uo(a)), v('\x3d"'), v(en(Uo(b))), v('"')].join("");
}
function Wo(a) {
  var b = H.e(a, 0, null);
  a = H.e(a, 1, null);
  return!0 === a ? x.c(ch, ch) ? Vo(b, b) : [v(" "), v(Uo(b))].join("") : jb(a) ? "" : s ? Vo(b, a) : null;
}
function Xo(a) {
  return J.c(v, ud.d(le.c(Wo, a)));
}
var Zo = function Yo(b) {
  if (kd(b)) {
    var c, d = H.e(b, 0, null);
    b = zd(b);
    if (!(d instanceof P || d instanceof Cc || "string" === typeof d)) {
      throw[v(d), v(" is not a valid tag name")].join("");
    }
    var e = jg(So, Uo(d));
    H.e(e, 0, null);
    d = H.e(e, 1, null);
    c = H.e(e, 2, null);
    e = H.e(e, 3, null);
    c = new n(null, 2, [Ck, c, bi, q(e) ? Ym(e, ".", " ") : null], null);
    e = A(b);
    c = K(e) ? new Q(null, 3, 5, R, [d, Vf.f(E([c, e], 0)), C(b)], null) : new Q(null, 3, 5, R, [d, c, b], null);
    b = H.e(c, 0, null);
    d = H.e(c, 1, null);
    c = H.e(c, 2, null);
    b = q(q(c) ? c : To.d ? To.d(b) : To.call(null, b)) ? [v("\x3c"), v(b), v(Xo(d)), v("\x3e"), v(Zo.d ? Zo.d(c) : Zo.call(null, c)), v("\x3c/"), v(b), v("\x3e")].join("") : [v("\x3c"), v(b), v(Xo(d)), v(x.c(ch, ch) ? " /\x3e" : "\x3e")].join("");
  } else {
    b = N(b) ? J.c(v, le.c(Yo, b)) : s ? Uo(b) : null;
  }
  return b;
};
var $o = qm("goog.net.xpc");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var ap;
function bp(a, b, c) {
  if (a ? a.uc : a) {
    return a.uc(0, b, c);
  }
  var d;
  d = bp[m(null == a ? null : a)];
  if (!d && (d = bp._, !d)) {
    throw u("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function cp(a) {
  if (a ? a.tc : a) {
    return a.tc();
  }
  var b;
  b = cp[m(null == a ? null : a)];
  if (!b && (b = cp._, !b)) {
    throw u("Channel.close!", a);
  }
  return b.call(null, a);
}
function dp(a) {
  if (a ? a.he : a) {
    return!0;
  }
  var b;
  b = dp[m(null == a ? null : a)];
  if (!b && (b = dp._, !b)) {
    throw u("Handler.active?", a);
  }
  return b.call(null, a);
}
function ep(a) {
  if (a ? a.rc : a) {
    return a.rc(a);
  }
  var b;
  b = ep[m(null == a ? null : a)];
  if (!b && (b = ep._, !b)) {
    throw u("Buffer.full?", a);
  }
  return b.call(null, a);
}
function fp(a) {
  if (a ? a.sc : a) {
    return a.sc(a);
  }
  var b;
  b = fp[m(null == a ? null : a)];
  if (!b && (b = fp._, !b)) {
    throw u("Buffer.remove!", a);
  }
  return b.call(null, a);
}
;var gp, ip = function hp(b) {
  "undefined" === typeof gp && (gp = function(b, d, e) {
    this.Ka = b;
    this.yd = d;
    this.Eg = e;
    this.r = 0;
    this.k = 393216;
  }, gp.R = !0, gp.Q = "cljs.core.async.impl.ioc-helpers/t38403", gp.U = function(b, d) {
    return jc(d, "cljs.core.async.impl.ioc-helpers/t38403");
  }, gp.prototype.he = function() {
    return!0;
  }, gp.prototype.w = function() {
    return this.Eg;
  }, gp.prototype.A = function(b, d) {
    return new gp(this.Ka, this.yd, d);
  });
  return new gp(b, hp, null);
};
function jp(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].tc(), b;
    }
    if (s) {
      throw b;
    }
    return null;
  }
}
function kp(a, b, c) {
  c = c.Af(ip(function(c) {
    a[2] = c;
    a[1] = b;
    return jp(a);
  }));
  return q(c) ? (a[2] = Vb(c), a[1] = b, T) : null;
}
function lp(a, b, c) {
  b = b.uc(0, c, ip(function() {
    a[2] = null;
    a[1] = 7;
    return jp(a);
  }));
  return q(b) ? (a[2] = Vb(b), a[1] = 7, T) : null;
}
function mp(a, b) {
  var c = a[6];
  null != b && c.uc(0, b, ip(function() {
    return null;
  }));
  c.tc();
  return c;
}
function np(a) {
  for (;;) {
    var b = a[4], c = Ah.d(b), d = Ni.d(b), e = a[5];
    if (q(function() {
      var a = e;
      return q(a) ? jb(b) : a;
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
      a[4] = $c.f(b, Ah, null, E([Ni, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? jb(c) && jb(nh.d(b)) : a;
    }())) {
      a[4] = $i.d(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = jb(c)) ? nh.d(b) : a : a;
      }())) {
        a[1] = nh.d(b);
        a[4] = $c.e(b, nh, null);
        break;
      }
      if (q(function() {
        var a = jb(e);
        return a ? nh.d(b) : a;
      }())) {
        a[1] = nh.d(b);
        a[4] = $c.e(b, nh, null);
        break;
      }
      if (jb(e) && jb(nh.d(b))) {
        a[1] = Ui.d(b);
        a[4] = $i.d(b);
        break;
      }
      if (s) {
        throw Error([v("Assert failed: "), v("No matching clause"), v("\n"), v(ug.f(E([!1], 0)))].join(""));
      }
      break;
    }
  }
}
;function op(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function pp(a, b, c, d) {
  this.head = a;
  this.F = b;
  this.length = c;
  this.h = d;
}
pp.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.h[this.F];
  this.h[this.F] = null;
  this.F = (this.F + 1) % this.h.length;
  this.length -= 1;
  return a;
};
pp.prototype.unshift = function(a) {
  this.h[this.head] = a;
  this.head = (this.head + 1) % this.h.length;
  this.length += 1;
  return null;
};
function rp(a, b) {
  a.length + 1 === a.h.length && a.resize();
  a.unshift(b);
}
pp.prototype.resize = function() {
  var a = Array(2 * this.h.length);
  return this.F < this.head ? (op(this.h, this.F, a, 0, this.length), this.F = 0, this.head = this.length, this.h = a) : this.F > this.head ? (op(this.h, this.F, a, 0, this.h.length - this.F), op(this.h, 0, a, this.h.length - this.F, this.head), this.F = 0, this.head = this.length, this.h = a) : this.F === this.head ? (this.head = this.F = 0, this.h = a) : null;
};
function sp(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop();
      (b.d ? b.d(e) : b.call(null, e)) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function tp(a) {
  if (!(0 < a)) {
    throw Error([v("Assert failed: "), v("Can't create a ring buffer of size 0"), v("\n"), v(ug.f(E([Hd(new Cc(null, "\x3e", "\x3e", -1640531465, null), new Cc(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new pp(0, 0, 0, Array(a));
}
function up(a, b) {
  this.$ = a;
  this.Jd = b;
  this.r = 0;
  this.k = 2;
}
up.prototype.K = function() {
  return this.$.length;
};
up.prototype.rc = function() {
  return this.$.length === this.Jd;
};
up.prototype.sc = function() {
  return this.$.pop();
};
up.prototype.ge = function(a, b) {
  if (!jb(ep(this))) {
    throw Error([v("Assert failed: "), v("Can't add to a full buffer"), v("\n"), v(ug.f(E([Hd(new Cc(null, "not", "not", -1640422260, null), Hd(new Cc("impl", "full?", "impl/full?", -1337857039, null), new Cc(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  return this.$.unshift(b);
};
function vp(a, b) {
  this.$ = a;
  this.Jd = b;
  this.r = 0;
  this.k = 2;
}
vp.prototype.K = function() {
  return this.$.length;
};
vp.prototype.rc = function() {
  return!1;
};
vp.prototype.sc = function() {
  return this.$.pop();
};
vp.prototype.ge = function(a, b) {
  this.$.length === this.Jd && fp(this);
  return this.$.unshift(b);
};
var wp = null, xp = tp(32), yp = !1, zp = !1;
function Ap() {
  yp = !0;
  zp = !1;
  for (var a = 0;;) {
    var b = xp.pop();
    if (null != b && (b.t ? b.t() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  yp = !1;
  return 0 < xp.length ? Bp.t ? Bp.t() : Bp.call(null) : null;
}
"undefined" !== typeof MessageChannel && (wp = new MessageChannel, wp.port1.onmessage = function() {
  return Ap();
});
function Bp() {
  var a = zp;
  if (q(a ? yp : a)) {
    return null;
  }
  zp = !0;
  return "undefined" !== typeof MessageChannel ? wp.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(Ap) : s ? setTimeout(Ap, 0) : null;
}
function Cp(a) {
  rp(xp, a);
  Bp();
}
;var Dp, Fp = function Ep(b) {
  "undefined" === typeof Dp && (Dp = function(b, d, e) {
    this.ra = b;
    this.gf = d;
    this.Dg = e;
    this.r = 0;
    this.k = 425984;
  }, Dp.R = !0, Dp.Q = "cljs.core.async.impl.channels/t38392", Dp.U = function(b, d) {
    return jc(d, "cljs.core.async.impl.channels/t38392");
  }, Dp.prototype.zb = function() {
    return this.ra;
  }, Dp.prototype.w = function() {
    return this.Dg;
  }, Dp.prototype.A = function(b, d) {
    return new Dp(this.ra, this.gf, d);
  });
  return new Dp(b, Ep, null);
};
function Gp(a, b) {
  this.Jb = a;
  this.ra = b;
}
function Hp(a) {
  return dp(a.Jb);
}
function Ip(a, b, c, d, e, f) {
  this.fc = a;
  this.wc = b;
  this.Kc = c;
  this.vc = d;
  this.$ = e;
  this.closed = f;
}
Ip.prototype.tc = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.fc.pop();
      if (null != a) {
        Cp(function(a) {
          return function() {
            return a.d ? a.d(null) : a.call(null, null);
          };
        }(a.Ka, a));
      } else {
        break;
      }
    }
  }
  return null;
};
Ip.prototype.Af = function(a) {
  if (null != this.$ && 0 < G(this.$)) {
    return Fp(this.$.sc(null));
  }
  for (;;) {
    var b = this.Kc.pop();
    if (null != b) {
      return a = b.ra, Cp(b.Jb.Ka), Fp(a);
    }
    if (this.closed) {
      return Fp(null);
    }
    64 < this.wc ? (this.wc = 0, sp(this.fc, dp)) : this.wc += 1;
    if (!(1024 > this.fc.length)) {
      throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending takes are allowed on a single channel.")].join("")), v("\n"), v(ug.f(E([Hd(new Cc(null, "\x3c", "\x3c", -1640531467, null), Hd(new Cc(null, ".-length", ".-length", 1395928862, null), new Cc(null, "takes", "takes", -1530407291, null)), new Cc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    rp(this.fc, a);
    return null;
  }
};
Ip.prototype.uc = function(a, b, c) {
  if (null == b) {
    throw Error([v("Assert failed: "), v("Can't put nil in on a channel"), v("\n"), v(ug.f(E([Hd(new Cc(null, "not", "not", -1640422260, null), Hd(new Cc(null, "nil?", "nil?", -1637150201, null), new Cc(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if (this.closed) {
    return Fp(null);
  }
  for (;;) {
    a = this.fc.pop();
    if (null != a) {
      c = c.Ka, Cp(function(a) {
        return function() {
          return a.d ? a.d(b) : a.call(null, b);
        };
      }(a.Ka, c, a));
    } else {
      if (null == this.$ || this.$.rc(null)) {
        64 < this.vc ? (this.vc = 0, sp(this.Kc, Hp)) : this.vc += 1;
        if (!(1024 > this.Kc.length)) {
          throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending puts are allowed on a single channel."), v(" Consider using a windowed buffer.")].join("")), v("\n"), v(ug.f(E([Hd(new Cc(null, "\x3c", "\x3c", -1640531467, null), Hd(new Cc(null, ".-length", ".-length", 1395928862, null), new Cc(null, "puts", "puts", -1637078787, null)), new Cc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        rp(this.Kc, new Gp(c, b));
        return null;
      }
      c = c.Ka;
      this.$.ge(null, b);
    }
    return Fp(null);
  }
};
function Jp(a, b, c) {
  this.key = a;
  this.ra = b;
  this.forward = c;
  this.r = 0;
  this.k = 2155872256;
}
Jp.prototype.I = function(a, b, c) {
  return mg(b, sg, "[", " ", "]", c, this);
};
Jp.prototype.J = function() {
  return yb(yb(Ic, this.ra), this.key);
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
    return new Jp(a, b, c);
  }
  function b(a) {
    return c.e(null, null, a);
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
  c.d = b;
  c.e = a;
  return c;
})().d(0);
var Lp = function Kp(b) {
  "undefined" === typeof ap && (ap = function(b, d, e) {
    this.Ka = b;
    this.yd = d;
    this.Cg = e;
    this.r = 0;
    this.k = 393216;
  }, ap.R = !0, ap.Q = "cljs.core.async/t35799", ap.U = function(b, d) {
    return jc(d, "cljs.core.async/t35799");
  }, ap.prototype.he = function() {
    return!0;
  }, ap.prototype.w = function() {
    return this.Cg;
  }, ap.prototype.A = function(b, d) {
    return new ap(this.Ka, this.yd, d);
  });
  return new ap(b, Kp, null);
}, Mp = function() {
  function a(a) {
    a = x.c(a, 0) ? null : a;
    a = "number" === typeof a ? new up(tp(a), a) : a;
    return new Ip(tp(32), 0, tp(32), 0, a, null);
  }
  function b() {
    return c.d(null);
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
  c.t = b;
  c.d = a;
  return c;
}();
function Np() {
  return null;
}
var Op = function() {
  function a(a, b, c, d) {
    a = bp(a, b, Lp(c));
    q(q(a) ? ce.c(c, Np) : a) && (q(d) ? c.t ? c.t() : c.call(null) : Cp(c));
    return null;
  }
  function b(a, b, c) {
    return d.o(a, b, c, !0);
  }
  function c(a, b) {
    return d.e(a, b, Np);
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
  d.c = c;
  d.e = b;
  d.o = a;
  return d;
}(), Pp = function() {
  function a(a, b, c) {
    var g = Mp.d(1);
    Cp(function() {
      var k = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!Jd(b, T)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, np(c), T;
                    }
                    if (s) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!Jd(d, T)) {
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
            d.t = c;
            d.d = b;
            return d;
          }();
        }(function(g) {
          var k = g[1];
          if (1 === k) {
            var l = z(b);
            g[7] = l;
            g[2] = null;
            g[1] = 2;
            return T;
          }
          return 2 === k ? (l = g[7], g[1] = q(l) ? 4 : 5, T) : 3 === k ? (k = g[2], mp(g, k)) : 4 === k ? (l = g[7], k = A(l), lp(g, a, k)) : 5 === k ? (g[1] = q(c) ? 8 : 9, T) : 6 === k ? (k = g[2], g[2] = k, g[1] = 3, T) : 7 === k ? (l = g[7], k = g[2], l = C(l), g[7] = l, g[8] = k, g[2] = null, g[1] = 2, T) : 8 === k ? (k = cp(a), g[2] = k, g[1] = 10, T) : 9 === k ? (g[2] = null, g[1] = 10, T) : 10 === k ? (k = g[2], g[2] = k, g[1] = 6, T) : null;
        });
      }(), l = function() {
        var a = k.t ? k.t() : k.call(null);
        a[6] = g;
        return a;
      }();
      return jp(l);
    });
    return g;
  }
  function b(a, b) {
    return c.e(a, b, !0);
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
  c.c = b;
  c.e = a;
  return c;
}();
function Qp(a, b, c, d, e) {
  b = sk.d(b);
  b = jd(b) ? A(b) : b;
  var f = A(Sf(b)), g = A(Uf(b));
  return React.DOM.a({href:"#", onClick:function(b) {
    b.preventDefault();
    return q(x.c ? x.c("asc", g) : x.call(null, "asc", g)) ? Op.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [sk, new wf([e, Bh])], null)], null)) : q(x.c ? x.c("desc", g) : x.call(null, "desc", g)) ? Op.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [sk, new wf([e, Dk])], null)], null)) : Op.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [sk, new wf([e, Bh])], null)], null));
  }}, V(d), x.c(f, e) ? V(q(x.c ? x.c("asc", g) : x.call(null, "asc", g)) ? new Q(null, 1, 5, R, [Bj], null) : new Q(null, 1, 5, R, [lk], null)) : null);
}
function Rp(a, b, c) {
  b = N(b) ? J.c(S, b) : b;
  var d = I.c(b, pj), e = I.c(b, ih), f = I.c(b, Di);
  b = 0 < e ? new Q(null, 2, 5, R, [qj, new Q(null, 3, 5, R, [ki, new n(null, 2, [Xg, "#", xj, function(b) {
    b.preventDefault();
    b = e - d;
    return Op.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [ih, 0 < b ? b : 0], null)], null));
  }], null), new Q(null, 1, 5, R, [Mk], null)], null)], null) : new Q(null, 2, 5, R, [qj, new Q(null, 1, 5, R, [Mk], null)], null);
  return K(b) ? React.DOM.div(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["paginate"], null)], null), b], 0))), function() {
    var a = [v(e + 1), v("-"), v(function() {
      var a = e + d;
      return a < f ? a : f;
    }()), v(" of "), v(f)].join("");
    return K(a) ? React.DOM.span(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["page"], null)], null), a], 0))), null) : React.DOM.span({className:"page"}, V(a));
  }(), e + d < f ? React.DOM.span({className:"next"}, React.DOM.a({href:"#", onClick:function(b) {
    b.preventDefault();
    return Op.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [ih, e + d], null)], null));
  }}, React.DOM.i({className:"icon-arrow-right"}))) : React.DOM.span({className:"next"}, React.DOM.i({className:"icon-arrow-right"}))) : React.DOM.div({className:"paginate"}, V(b), function() {
    var a = [v(e + 1), v("-"), v(function() {
      var a = e + d;
      return a < f ? a : f;
    }()), v(" of "), v(f)].join("");
    return K(a) ? React.DOM.span(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["page"], null)], null), a], 0))), null) : React.DOM.span({className:"page"}, V(a));
  }(), e + d < f ? React.DOM.span({className:"next"}, React.DOM.a({href:"#", onClick:function(b) {
    b.preventDefault();
    return Op.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [ih, e + d], null)], null));
  }}, React.DOM.i({className:"icon-arrow-right"}))) : React.DOM.span({className:"next"}, React.DOM.i({className:"icon-arrow-right"})));
}
;function Sp(a) {
  Xk.call(this);
  this.Nf = a;
  this.ba = [];
}
ta(Sp, Xk);
var Tp = [];
function Up(a, b, c, d) {
  "array" != m(c) && (Tp[0] = c, c = Tp);
  for (var e = 0;e < c.length;e++) {
    var f = Hl(b, c[e], d || a, !1, a.Nf || a);
    a.ba.push(f);
  }
}
Sp.prototype.ya = function() {
  Sp.wb.ya.call(this);
  Ja(this.ba, Nl);
  this.ba.length = 0;
};
Sp.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Vp(a) {
  yl.call(this, "navigate");
  this.Dh = a;
}
ta(Vp, yl);
function Wp(a, b, c, d) {
  Xk.call(this);
  if (a && !b) {
    throw Error("Can't use invisible history without providing a blank page.");
  }
  var e;
  c ? e = c : (e = "history_state" + Xp, document.write(ua(Yp, e, e)), e = ia(e) ? document.getElementById(e) : e);
  this.Xb = e;
  this.Ua = c ? Wm(c) ? Wm(c).parentWindow || Wm(c).defaultView : window : window;
  this.ef = this.Ua.location.href.split("#")[0];
  this.yc = b;
  il && !b && (this.yc = "https" == window.location.protocol ? "https:///" : 'javascript:""');
  this.ia = new Tl(Zp);
  b = ra($k, this.ia);
  this.ec || (this.ec = []);
  this.ec.push(qa(b, void 0));
  this.yb = !a;
  this.ob = new Sp(this);
  if (a || $p) {
    d ? a = d : (a = "history_iframe" + Xp, d = this.yc ? 'src\x3d"' + wa(this.yc) + '"' : "", document.write(ua(aq, a, d)), a = ia(a) ? document.getElementById(a) : a), this.Kb = a, this.We = !0;
  }
  $p && (Up(this.ob, this.Ua, "load", this.Xg), this.Ve = this.rd = !1);
  this.yb ? bq(this, cq(this), !0) : dq(this, this.Xb.value);
  Xp++;
}
ta(Wp, Sl);
Wp.prototype.Wb = !1;
Wp.prototype.Nb = !1;
Wp.prototype.Lb = null;
var eq = il && il && 8 <= vl || jl && tl("1.9.2") || kl && tl("532.1"), $p = il && !(il && 8 <= vl);
h = Wp.prototype;
h.Mb = null;
h.ya = function() {
  Wp.wb.ya.call(this);
  this.ob.Vb();
  fq(this, !1);
};
function fq(a, b) {
  if (b != a.Wb) {
    if ($p && !a.rd) {
      a.Ve = b;
    } else {
      if (b) {
        if (hl ? Up(a.ob, a.Ua.document, gq, a.ah) : jl && Up(a.ob, a.Ua, "pageshow", a.$g), eq && a.yb) {
          Up(a.ob, a.Ua, "hashchange", a.Yg), a.Wb = !0, a.dispatchEvent(new Vp(cq(a)));
        } else {
          if (!il || a.rd) {
            Up(a.ob, a.ia, Ul, qa(a.Yd, a, !0)), a.Wb = !0, $p || (a.Lb = cq(a), a.dispatchEvent(new Vp(cq(a)))), a.ia.start();
          }
        }
      } else {
        a.Wb = !1;
        var c = a.ob;
        Ja(c.ba, Nl);
        c.ba.length = 0;
        a.ia.stop();
      }
    }
  }
}
h.Xg = function() {
  this.rd = !0;
  this.Xb.value && dq(this, this.Xb.value, !0);
  fq(this, this.Ve);
};
h.$g = function(a) {
  a.xd.persisted && (fq(this, !1), fq(this, !0));
};
h.Yg = function() {
  var a = hq(this.Ua);
  a != this.Lb && iq(this, a);
};
function cq(a) {
  return null != a.Mb ? a.Mb : a.yb ? hq(a.Ua) : jq(a) || "";
}
function kq(a, b) {
  cq(a) != b && (a.yb ? (bq(a, b, !1), eq || il && dq(a, b, !1, void 0), a.Wb && a.Yd()) : (dq(a, b, !1), a.Mb = a.Lb = a.Xb.value = b, a.dispatchEvent(new Vp(b))));
}
function hq(a) {
  a = a.location.href;
  var b = a.indexOf("#");
  return 0 > b ? "" : a.substring(b + 1);
}
function bq(a, b, c) {
  var d = a.Ua.location;
  a = a.ef;
  var e = -1 != d.href.indexOf("#");
  if ($p || e || b) {
    a += "#" + b;
  }
  a != d.href && (c ? d.replace(a) : d.href = a);
}
function dq(a, b, c, d) {
  if (a.We || b != jq(a)) {
    if (a.We = !1, b = encodeURIComponent(String(b)), il) {
      var e = a.Kb.contentDocument || a.Kb.contentWindow.document;
      e.open("text/html", c ? "replace" : void 0);
      e.write(ua(lq, wa(d || a.Ua.document.title), b));
      e.close();
    } else {
      if (b = a.yc + "#" + b, a = a.Kb.contentWindow) {
        c ? a.location.replace(b) : a.location.href = b;
      }
    }
  }
}
function jq(a) {
  if (il) {
    return a = a.Kb.contentDocument || a.Kb.contentWindow.document, a.body ? decodeURIComponent(a.body.innerHTML.replace(/\+/g, " ")) : null;
  }
  var b = a.Kb.contentWindow;
  if (b) {
    var c;
    try {
      c = decodeURIComponent(hq(b).replace(/\+/g, " "));
    } catch (d) {
      return a.Nb || (!0 != a.Nb && a.ia.setInterval(mq), a.Nb = !0), null;
    }
    a.Nb && (!1 != a.Nb && a.ia.setInterval(Zp), a.Nb = !1);
    return c || null;
  }
  return null;
}
h.Yd = function() {
  if (this.yb) {
    var a = hq(this.Ua);
    a != this.Lb && iq(this, a);
  }
  if (!this.yb || $p) {
    if (a = jq(this) || "", null == this.Mb || a == this.Mb) {
      this.Mb = null, a != this.Lb && iq(this, a);
    }
  }
};
function iq(a, b) {
  a.Lb = a.Xb.value = b;
  a.yb ? ($p && dq(a, b), bq(a, b)) : dq(a, b);
  a.dispatchEvent(new Vp(cq(a)));
}
h.ah = function() {
  this.ia.stop();
  this.ia.start();
};
var gq = ["mousedown", "keydown", "mousemove"], lq = "\x3ctitle\x3e%s\x3c/title\x3e\x3cbody\x3e%s\x3c/body\x3e", aq = '\x3ciframe id\x3d"%s" style\x3d"display:none" %s\x3e\x3c/iframe\x3e', Yp = '\x3cinput type\x3d"text" name\x3d"%s" id\x3d"%s" style\x3d"display:none"\x3e', Xp = 0, Zp = 150, mq = 1E4;
function nq(a) {
  a = null == a ? null : new Date(a);
  a = null == a ? null : a.getYear();
  return null == a ? null : a + 1900;
}
;var oq, pq;
function qq(a, b, c) {
  var d = N(c) ? J.c(S, c) : c, e = I.c(d, Qk), f = I.c(d, Lh), g = e.c ? e.c(hi, a) : e.call(null, hi, a);
  "undefined" === typeof oq && (oq = function(a, b, c, d, e, f, g, O, Z) {
    this.Ub = a;
    this.ca = b;
    this.D = c;
    this.pa = d;
    this.Tf = e;
    this.fh = f;
    this.B = g;
    this.Oa = O;
    this.og = Z;
    this.r = 0;
    this.k = 393216;
  }, oq.R = !0, oq.Q = "clustermap.components.full-report.company-site-list/t33865", oq.U = function(a, b) {
    return jc(b, "clustermap.components.full-report.company-site-list/t33865");
  }, oq.prototype.Ea = !0, oq.prototype.Aa = function() {
    var a = this;
    return React.DOM.tr(null, function() {
      var b = Tk.d(a.Oa);
      return K(b) ? React.DOM.td(W(b), null) : React.DOM.td(null, V(b));
    }(), function() {
      var b = ji.d(a.Oa);
      return K(b) ? React.DOM.td(W(b), null) : React.DOM.td(null, V(b));
    }(), function() {
      var b = a.ca.c ? a.ca.c(xk, new n(null, 2, [Vi, Vi.d(a.Oa), qi, wj.d(a.Oa)], null)) : a.ca.call(null, xk, new n(null, 2, [Vi, Vi.d(a.Oa), qi, wj.d(a.Oa)], null));
      return K(b) ? React.DOM.td(W(b), null) : React.DOM.td(null, V(b));
    }(), function() {
      var b = a.ca.c ? a.ca.c(Oh, new n(null, 2, [Ph, Ph.d(a.Oa), Jk, rh.d(a.Oa)], null)) : a.ca.call(null, Oh, new n(null, 2, [Ph, Ph.d(a.Oa), Jk, rh.d(a.Oa)], null));
      return K(b) ? React.DOM.td(W(b), null) : React.DOM.td(null, V(b));
    }());
  }, oq.prototype.w = function() {
    return this.og;
  }, oq.prototype.A = function(a, b) {
    return new oq(this.Ub, this.ca, this.D, this.pa, this.Tf, this.fh, this.B, this.Oa, b);
  });
  return new oq(g, f, e, d, d, c, b, a, null);
}
var sq = function rq(b, c, d) {
  var e = lo.c(c, mi);
  "undefined" === typeof pq && (pq = function(b, c, d, e, p, t) {
    this.v = b;
    this.pa = c;
    this.B = d;
    this.Ca = e;
    this.Ef = p;
    this.pg = t;
    this.r = 0;
    this.k = 393216;
  }, pq.R = !0, pq.Q = "clustermap.components.full-report.company-site-list/t33886", pq.U = function(b, c) {
    return jc(c, "clustermap.components.full-report.company-site-list/t33886");
  }, pq.prototype.Ea = !0, pq.prototype.Aa = function() {
    var b = this, c = Rp(b.v, b.Ca, Yg);
    return K(c) ? React.DOM.div(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["full-report-list"], null)], null), c], 0))), React.DOM.div({className:"table-responsive"}, React.DOM.table({className:"table"}, React.DOM.thead(null, React.DOM.tr(null, function() {
      var c = Qp(b.v, b.Ca, Yg, "Investor-backed Company", gh);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Qp(b.v, b.Ca, Yg, "Postcode", sj);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Qp(b.v, b.Ca, Yg, "Investor", Si);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Qp(b.v, b.Ca, Yg, "Constituency", yj);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }())), function() {
      var c = Bo.e(qq, th.d(b.Ca), new n(null, 2, [ai, Wi, ik, b.pa], null));
      return K(c) ? React.DOM.tbody(W(c), null) : React.DOM.tbody(null, V(c));
    }())), V(Rp(b.v, b.Ca, Yg))) : React.DOM.div({className:"full-report-list"}, V(c), React.DOM.div({className:"table-responsive"}, React.DOM.table({className:"table"}, React.DOM.thead(null, React.DOM.tr(null, function() {
      var c = Qp(b.v, b.Ca, Yg, "Investor-backed Company", gh);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Qp(b.v, b.Ca, Yg, "Postcode", sj);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Qp(b.v, b.Ca, Yg, "Investor", Si);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Qp(b.v, b.Ca, Yg, "Constituency", yj);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }())), function() {
      var c = Bo.e(qq, th.d(b.Ca), new n(null, 2, [ai, Wi, ik, b.pa], null));
      return K(c) ? React.DOM.tbody(W(c), null) : React.DOM.tbody(null, V(c));
    }())), V(Rp(b.v, b.Ca, Yg)));
  }, pq.prototype.w = function() {
    return this.pg;
  }, pq.prototype.A = function(b, c) {
    return new pq(this.v, this.pa, this.B, this.Ca, this.Ef, c);
  });
  return new pq(e, d, c, b, rq, null);
};
var tq, uq;
function vq(a, b, c, d) {
  var e = A(d);
  return C(d) ? (a = a.c ? a.c(c, e) : a.call(null, c, e), K(a) ? React.DOM.div(W(a), React.DOM.a({href:b}, "\u00a0(more...)")) : React.DOM.div(null, V(a), React.DOM.a({href:b}, "\u00a0(more...)"))) : a.c ? a.c(c, e) : a.call(null, c, e);
}
var xq = function wq(b, c, d) {
  var e = N(d) ? J.c(S, d) : d, f = I.c(e, Qk), g = I.c(e, Lh), k = f.c ? f.c(hi, b) : f.call(null, hi, b);
  "undefined" === typeof tq && (tq = function(b, c, d, e, f, g, k, Z, U, aa) {
    this.Ub = b;
    this.ca = c;
    this.D = d;
    this.pa = e;
    this.Sf = f;
    this.eh = g;
    this.B = k;
    this.ua = Z;
    this.Jc = U;
    this.mg = aa;
    this.r = 0;
    this.k = 393216;
  }, tq.R = !0, tq.Q = "clustermap.components.full-report.company-list/t33804", tq.U = function(b, c) {
    return jc(c, "clustermap.components.full-report.company-list/t33804");
  }, tq.prototype.Ea = !0, tq.prototype.Aa = function() {
    var b = this;
    return React.DOM.tr(null, function() {
      var c = b.ca.c ? b.ca.c(hi, b.ua) : b.ca.call(null, hi, b.ua);
      return K(c) ? React.DOM.td(W(c), null) : React.DOM.td(null, V(c));
    }(), function() {
      var c = vq(b.ca, b.Ub, xk, vk.d(b.ua));
      return K(c) ? React.DOM.td(W(c), null) : React.DOM.td(null, V(c));
    }(), function() {
      var c = vq(b.ca, b.Ub, Oh, function() {
        var c = b.ua, d = null == c ? null : zh.d(c);
        return null == d ? null : xe(function() {
          return function(b) {
            return x.c("uk_constituencies", Ih.d(b));
          };
        }(c, d), d);
      }());
      return K(c) ? React.DOM.td(W(c), null) : React.DOM.td(null, V(c));
    }(), function() {
      var c = Lo.q ? Lo.q(wi.d(b.ua), Yj, 2, y, "-") : Lo.call(null, wi.d(b.ua), Yj, 2, y, "-");
      return K(c) ? React.DOM.td(W(c), React.DOM.small(null, "\u00a0(", V(function() {
        var c = nq(sh.d(b.ua));
        return q(c) ? c : "no info";
      }()), ")")) : React.DOM.td(null, V(c), React.DOM.small(null, "\u00a0(", V(function() {
        var c = nq(sh.d(b.ua));
        return q(c) ? c : "no info";
      }()), ")"));
    }(), function() {
      var c;
      c = Ej.d(b.ua);
      c = null == c ? null : 0 < c ? React.DOM.i({className:"icon-positive"}) : 0 > c ? React.DOM.i({className:"icon-negative"}) : null;
      return K(c) ? React.DOM.td(W(c), null) : React.DOM.td(null, V(c));
    }(), function() {
      var c = Lo.q ? Lo.q(Ej.d(b.ua), Yj, 2, y, "-") : Lo.call(null, Ej.d(b.ua), Yj, 2, y, "-");
      return K(c) ? React.DOM.td(W(c), null) : React.DOM.td(null, V(c));
    }(), function() {
      var c = Y.q ? Y.q(ek.d(b.ua), Cj, 0, y, "-") : Y.call(null, ek.d(b.ua), Cj, 0, y, "-");
      return K(c) ? React.DOM.td(W(c), React.DOM.small(null, "\u00a0(", V(function() {
        var c = nq(sh.d(b.ua));
        return q(c) ? c : "no info";
      }()), ")")) : React.DOM.td(null, V(c), React.DOM.small(null, "\u00a0(", V(function() {
        var c = nq(sh.d(b.ua));
        return q(c) ? c : "no info";
      }()), ")"));
    }());
  }, tq.prototype.w = function() {
    return this.mg;
  }, tq.prototype.A = function(b, c) {
    return new tq(this.Ub, this.ca, this.D, this.pa, this.Sf, this.eh, this.B, this.ua, this.Jc, c);
  });
  return new tq(k, g, f, e, e, d, c, b, wq, null);
}, zq = function yq(b, c, d) {
  var e = lo.c(c, mi);
  "undefined" === typeof uq && (uq = function(b, c, d, e, p, t) {
    this.v = b;
    this.pa = c;
    this.B = d;
    this.Ba = e;
    this.Df = p;
    this.ng = t;
    this.r = 0;
    this.k = 393216;
  }, uq.R = !0, uq.Q = "clustermap.components.full-report.company-list/t33835", uq.U = function(b, c) {
    return jc(c, "clustermap.components.full-report.company-list/t33835");
  }, uq.prototype.Ea = !0, uq.prototype.Aa = function() {
    var b = this, c = Rp(b.v, b.Ba, jk);
    return K(c) ? React.DOM.div(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["full-report-list"], null)], null), c], 0))), React.DOM.div({className:"table-responsive"}, React.DOM.table({className:"table"}, React.DOM.thead(null, React.DOM.tr(null, function() {
      var c = Qp(b.v, b.Ba, jk, "Investor-backed company", qi);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), React.DOM.th(null, "Investor"), React.DOM.th(null, "Constituency"), function() {
      var c = Qp(b.v, b.Ba, jk, "Revenue", wi);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), React.DOM.th({colSpan:"2"}, V(Qp(b.v, b.Ba, jk, "Rev. change", Ej))), function() {
      var c = Qp(b.v, b.Ba, jk, "Employees", ek);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }())), function() {
      var c = Bo.e(xq, th.d(b.Ba), new n(null, 2, [ai, mh, ik, b.pa], null));
      return K(c) ? React.DOM.tbody(W(c), null) : React.DOM.tbody(null, V(c));
    }())), V(Rp(b.v, b.Ba, jk))) : React.DOM.div({className:"full-report-list"}, V(c), React.DOM.div({className:"table-responsive"}, React.DOM.table({className:"table"}, React.DOM.thead(null, React.DOM.tr(null, function() {
      var c = Qp(b.v, b.Ba, jk, "Investor-backed company", qi);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), React.DOM.th(null, "Investor"), React.DOM.th(null, "Constituency"), function() {
      var c = Qp(b.v, b.Ba, jk, "Revenue", wi);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), React.DOM.th({colSpan:"2"}, V(Qp(b.v, b.Ba, jk, "Rev. change", Ej))), function() {
      var c = Qp(b.v, b.Ba, jk, "Employees", ek);
      return K(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }())), function() {
      var c = Bo.e(xq, th.d(b.Ba), new n(null, 2, [ai, mh, ik, b.pa], null));
      return K(c) ? React.DOM.tbody(W(c), null) : React.DOM.tbody(null, V(c));
    }())), V(Rp(b.v, b.Ba, jk)));
  }, uq.prototype.w = function() {
    return this.ng;
  }, uq.prototype.A = function(b, c) {
    return new uq(this.v, this.pa, this.B, this.Ba, this.Df, c);
  });
  return new uq(e, d, c, b, yq, null);
};
function Aq(a) {
  if (a ? a.ie : a) {
    return a.ie();
  }
  var b;
  b = Aq[m(null == a ? null : a)];
  if (!b && (b = Aq._, !b)) {
    throw u("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function Dq(a, b) {
  if (a ? a.je : a) {
    return a.je(0, b);
  }
  var c;
  c = Dq[m(null == a ? null : a)];
  if (!c && (c = Dq._, !c)) {
    throw u("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function Eq(a, b, c) {
  this.O = a;
  this.buffer = b;
  this.Cd = c;
}
Eq.prototype.ie = function() {
  return 0 === this.buffer.length ? (this.Cd += 1, this.O[this.Cd]) : this.buffer.pop();
};
Eq.prototype.je = function(a, b) {
  return this.buffer.push(b);
};
function Fq(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return q(b) ? b : "," === a;
}
var Gq = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(J.c(v, b));
  }
  a.m = 1;
  a.j = function(a) {
    A(a);
    a = B(a);
    return b(0, a);
  };
  a.f = b;
  return a;
}();
function Hq(a, b) {
  for (var c = new Xa(b), d = Aq(a);;) {
    var e;
    if (!(e = null == d) && !(e = Fq(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? Iq.d ? Iq.d(e) : Iq.call(null, e) : f : f : f;
    }
    if (e) {
      return Dq(a, d), c.toString();
    }
    c.append(d);
    d = Aq(a);
  }
}
function Jq(a) {
  for (;;) {
    var b = Aq(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var Kq = lg("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?"), Lq = lg("([-+]?[0-9]+)/([0-9]+)"), Mq = lg("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?"), Nq = lg("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
function Oq(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === c.length ? c[0] : c;
}
function Pq(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
var Qq = lg("[0-9A-Fa-f]{2}"), Rq = lg("[0-9A-Fa-f]{4}");
function Sq(a, b, c, d) {
  return q(jg(a, d)) ? d : Gq.f(b, E(["Unexpected unicode escape \\", c, d], 0));
}
function Tq(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function Uq(a) {
  var b = Aq(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  return q(c) ? c : "x" === b ? Tq(Sq(Qq, a, b, (new Xa(Aq(a), Aq(a))).toString())) : "u" === b ? Tq(Sq(Rq, a, b, (new Xa(Aq(a), Aq(a), Aq(a), Aq(a))).toString())) : /[^0-9]/.test(b) ? s ? Gq.f(a, E(["Unexpected unicode escape \\", b], 0)) : null : String.fromCharCode(b);
}
function Vq(a, b) {
  for (var c = pc(Ze);;) {
    var d;
    a: {
      d = Fq;
      for (var e = b, f = Aq(e);;) {
        if (q(d.d ? d.d(f) : d.call(null, f))) {
          f = Aq(e);
        } else {
          d = f;
          break a;
        }
      }
      d = void 0;
    }
    q(d) || Gq.f(b, E(["EOF while reading"], 0));
    if (a === d) {
      return rc(c);
    }
    e = Iq.d ? Iq.d(d) : Iq.call(null, d);
    q(e) ? d = e.c ? e.c(b, d) : e.call(null, b, d) : (Dq(b, d), d = Wq.o ? Wq.o(b, !0, null, !0) : Wq.call(null, b, !0, null));
    c = d === b ? c : $d.c(c, d);
  }
}
function Xq(a, b) {
  return Gq.f(a, E(["Reader for ", b, " not implemented yet"], 0));
}
function Yq(a, b) {
  var c = Aq(a), d = Zq.d ? Zq.d(c) : Zq.call(null, c);
  if (q(d)) {
    return d.c ? d.c(a, b) : d.call(null, a, b);
  }
  d = $q.c ? $q.c(a, c) : $q.call(null, a, c);
  return q(d) ? d : Gq.f(a, E(["No dispatch macro for ", c], 0));
}
function ar(a, b) {
  return Gq.f(a, E(["Unmached delimiter ", b], 0));
}
function br(a) {
  return J.c(Hd, Vq(")", a));
}
function cr(a) {
  return Vq("]", a);
}
function dr(a) {
  var b = Vq("}", a);
  var c = G(b);
  if ("number" !== typeof c || isNaN(c) || Infinity === c || parseFloat(c) !== parseInt(c, 10)) {
    throw Error([v("Argument must be an integer: "), v(c)].join(""));
  }
  0 !== (c & 1) && Gq.f(a, E(["Map literal must contain an even number of forms"], 0));
  return J.c(S, b);
}
function er(a) {
  for (var b = new Xa, c = Aq(a);;) {
    if (null == c) {
      return Gq.f(a, E(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(Uq(a)), c = Aq(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      if (y) {
        b.append(c), c = Aq(a);
      } else {
        return null;
      }
    }
  }
}
function fr(a, b) {
  var c = Hq(a, b);
  if (q(-1 != c.indexOf("/"))) {
    c = Fc.c(Ad.e(c, 0, c.indexOf("/")), Ad.e(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = Fc.d(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : s ? d : null
  }
  return c;
}
function gr(a) {
  var b = Hq(a, Aq(a)), c = Pq(Nq, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? Gq.f(a, E(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Ld.c(d.substring(0, d.indexOf("/")), c) : Ld.d(b);
}
function hr(a) {
  return function(b) {
    return yb(yb(Ic, Wq.o ? Wq.o(b, !0, null, !0) : Wq.call(null, b, !0, null)), a);
  };
}
function ir() {
  return function(a) {
    return Gq.f(a, E(["Unreadable form"], 0));
  };
}
function jr(a) {
  var b;
  b = Wq.o ? Wq.o(a, !0, null, !0) : Wq.call(null, a, !0, null);
  b = b instanceof Cc ? new n(null, 1, [Lk, b], null) : "string" === typeof b ? new n(null, 1, [Lk, b], null) : b instanceof P ? new wf([b, !0]) : s ? b : null;
  K(b) || Gq.f(a, E(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = Wq.o ? Wq.o(a, !0, null, !0) : Wq.call(null, a, !0, null);
  return(c ? c.k & 262144 || c.zf || (c.k ? 0 : r(Yb, c)) : r(Yb, c)) ? Tc(c, Vf.f(E([dd(c), b], 0))) : Gq.f(a, E(["Metadata can only be applied to IWithMetas"], 0));
}
function kr(a) {
  return $f(Vq("}", a));
}
function lr(a) {
  return lg(er(a));
}
function mr(a) {
  Wq.o ? Wq.o(a, !0, null, !0) : Wq.call(null, a, !0, null);
  return a;
}
function Iq(a) {
  return'"' === a ? er : ":" === a ? gr : ";" === a ? Jq : "'" === a ? hr(new Cc(null, "quote", "quote", -1532577739, null)) : "@" === a ? hr(new Cc(null, "deref", "deref", -1545057749, null)) : "^" === a ? jr : "`" === a ? Xq : "~" === a ? Xq : "(" === a ? br : ")" === a ? ar : "[" === a ? cr : "]" === a ? ar : "{" === a ? dr : "}" === a ? ar : "\\" === a ? Aq : "#" === a ? Yq : null;
}
function Zq(a) {
  return "{" === a ? kr : "\x3c" === a ? ir() : '"' === a ? lr : "!" === a ? Jq : "_" === a ? mr : null;
}
function Wq(a, b, c) {
  for (;;) {
    var d = Aq(a);
    if (null == d) {
      return q(b) ? Gq.f(a, E(["EOF while reading"], 0)) : c;
    }
    if (!Fq(d)) {
      if (";" === d) {
        a = Jq.c ? Jq.c(a, d) : Jq.call(null, a);
      } else {
        if (s) {
          var e = Iq(d);
          if (q(e)) {
            e = e.c ? e.c(a, d) : e.call(null, a, d);
          } else {
            var e = a, f = void 0;
            !(f = !/[^0-9]/.test(d)) && (f = void 0, f = "+" === d || "-" === d) && (f = Aq(e), Dq(e, f), f = !/[^0-9]/.test(f));
            if (f) {
              a: {
                e = a;
                d = new Xa(d);
                for (f = Aq(e);;) {
                  var g;
                  g = null == f;
                  g || (g = (g = Fq(f)) ? g : Iq.d ? Iq.d(f) : Iq.call(null, f));
                  if (q(g)) {
                    Dq(e, f);
                    d = d.toString();
                    if (q(Pq(Kq, d))) {
                      if (g = Oq(Kq, d), f = g[2], null == f || 1 > f.length) {
                        var f = "-" === g[1] ? -1 : 1, k = q(g[3]) ? [g[3], 10] : q(g[4]) ? [g[4], 16] : q(g[5]) ? [g[5], 8] : q(g[7]) ? [g[7], parseInt(g[7])] : y ? [null, null] : null;
                        g = k[0];
                        k = k[1];
                        f = null == g ? null : f * parseInt(g, k);
                      } else {
                        f = 0;
                      }
                    } else {
                      q(Pq(Lq, d)) ? (f = Oq(Lq, d), f = parseInt(f[1]) / parseInt(f[2])) : f = q(Pq(Mq, d)) ? parseFloat(d) : null;
                    }
                    e = q(f) ? f : Gq.f(e, E(["Invalid number format [", d, "]"], 0));
                    break a;
                  }
                  d.append(f);
                  f = Aq(e);
                }
                e = void 0;
              }
            } else {
              e = s ? fr(a, d) : null;
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
function nr(a) {
  if (x.c(3, G(a))) {
    return a;
  }
  if (3 < G(a)) {
    return Ad.e(a, 0, 3);
  }
  if (s) {
    for (a = new Xa(a);;) {
      if (3 > a.hb.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var or = function() {
  var a = new Q(null, 13, 5, R, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new Q(null, 13, 5, R, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return I.c(q(d) ? b : a, c);
  };
}(), pr = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function qr(a) {
  a = parseInt(a);
  return jb(isNaN(a)) ? a : null;
}
function rr(a, b, c, d) {
  a <= b && b <= c || Gq.f(null, E([[v(d), v(" Failed:  "), v(a), v("\x3c\x3d"), v(b), v("\x3c\x3d"), v(c)].join("")], 0));
  return b;
}
function sr(a) {
  var b = jg(pr, a);
  H.e(b, 0, null);
  var c = H.e(b, 1, null), d = H.e(b, 2, null), e = H.e(b, 3, null), f = H.e(b, 4, null), g = H.e(b, 5, null), k = H.e(b, 6, null), l = H.e(b, 7, null), p = H.e(b, 8, null), t = H.e(b, 9, null), w = H.e(b, 10, null);
  if (jb(b)) {
    return Gq.f(null, E([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
  }
  a = qr(c);
  var b = function() {
    var a = qr(d);
    return q(a) ? a : 1;
  }(), c = function() {
    var a = qr(e);
    return q(a) ? a : 1;
  }(), D = function() {
    var a = qr(f);
    return q(a) ? a : 0;
  }(), M = function() {
    var a = qr(g);
    return q(a) ? a : 0;
  }(), O = function() {
    var a = qr(k);
    return q(a) ? a : 0;
  }(), Z = function() {
    var a = qr(nr(l));
    return q(a) ? a : 0;
  }(), p = (x.c(p, "-") ? -1 : 1) * (60 * function() {
    var a = qr(t);
    return q(a) ? a : 0;
  }() + function() {
    var a = qr(w);
    return q(a) ? a : 0;
  }());
  return new Q(null, 8, 5, R, [a, rr(1, b, 12, "timestamp month field must be in range 1..12"), rr(1, c, or.c ? or.c(b, 0 === vd(a, 4) && (0 !== vd(a, 100) || 0 === vd(a, 400))) : or.call(null, b, 0 === vd(a, 4) && (0 !== vd(a, 100) || 0 === vd(a, 400))), "timestamp day field must be in range 1..last day in month"), rr(0, D, 23, "timestamp hour field must be in range 0..23"), rr(0, M, 59, "timestamp minute field must be in range 0..59"), rr(0, O, x.c(M, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), 
  rr(0, Z, 999, "timestamp millisecond field must be in range 0..999"), p], null);
}
var tr = Bg.d(new n(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = sr(a), q(b)) {
      a = H.e(b, 0, null);
      var c = H.e(b, 1, null), d = H.e(b, 2, null), e = H.e(b, 3, null), f = H.e(b, 4, null), g = H.e(b, 5, null), k = H.e(b, 6, null);
      b = H.e(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, k) - 6E4 * b);
    } else {
      b = Gq.f(null, E([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
    }
  } else {
    b = Gq.f(null, E(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Pg(a) : Gq.f(null, E(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return kd(a) ? Be(mf, a) : Gq.f(null, E(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (kd(a)) {
    var b = [];
    a = z(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.C(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = z(a)) {
          c = a, ld(c) ? (a = vc(c), e = wc(c), c = a, d = G(a), a = e) : (a = A(c), b.push(a), a = C(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (K(a)) {
    b = {};
    a = z(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = c.C(null, e), f = H.e(g, 0, null), g = H.e(g, 1, null);
        b[Kd(f)] = g;
        e += 1;
      } else {
        if (a = z(a)) {
          ld(a) ? (d = vc(a), a = wc(a), c = d, d = G(d)) : (d = A(a), c = H.e(d, 0, null), d = H.e(d, 1, null), b[Kd(c)] = d, a = C(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return s ? Gq.f(null, E([[v("JS literal expects a vector or map containing "), v("only string or unqualified keyword keys")].join("")], 0)) : null;
}], null)), ur = Bg.d(null);
function $q(a, b) {
  var c = fr(a, b), d = I.c(Vb(tr), "" + v(c)), e = Vb(ur);
  return q(d) ? d.d ? d.d(Wq(a, !0, null)) : d.call(null, Wq(a, !0, null)) : q(e) ? e.c ? e.c(c, Wq(a, !0, null)) : e.call(null, c, Wq(a, !0, null)) : s ? Gq.f(a, E(["Could not find tag parser for ", "" + v(c), " in ", ug.f(E([Sf(Vb(tr))], 0))], 0)) : null;
}
;function vr(a) {
  if ("string" === typeof a) {
    return a;
  }
  if (bd(a)) {
    var b = a.prototype.gi;
    return q(b) ? [v("[crateGroup\x3d"), v(b), v("]")].join("") : a;
  }
  return a instanceof P ? Kd(a) : s ? a : null;
}
var wr = function() {
  function a(a, b) {
    return jQuery(vr(a), b);
  }
  function b(a) {
    return jQuery(vr(a));
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
  c.d = b;
  c.c = a;
  return c;
}();
h = jQuery.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Hb.c(this, c);
      case 3:
        return Hb.e(this, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.d = function(a) {
  return Hb.c(this, a);
};
h.c = function(a, b) {
  return Hb.e(this, a, b);
};
h.$d = !0;
h.ea = function(a, b) {
  return Kc.c(this, b);
};
h.fa = function(a, b, c) {
  return Kc.e(this, b, c);
};
h.ld = !0;
h.L = function(a, b) {
  var c = this.slice(b, b + 1);
  return q(c) ? c : null;
};
h.M = function(a, b, c) {
  return Bb.e(this, b, c);
};
h.uf = !0;
h.Cb = !0;
h.C = function(a, b) {
  return b < G(this) ? this.slice(b, b + 1) : null;
};
h.ja = function(a, b, c) {
  return b < G(this) ? this.slice(b, b + 1) : void 0 === c ? null : c;
};
h.Sb = !0;
h.K = function() {
  return this.length;
};
h.Db = !0;
h.W = function() {
  return this.get(0);
};
h.ga = function() {
  return 1 < G(this) ? this.slice(1) : Ic;
};
h.jb = !0;
h.J = function() {
  return q(this.get(0)) ? this : null;
};
function xr(a) {
  a = "" + v(a);
  return Wq(new Eq(a, [], -1), !0, null);
}
jQuery.ji(Jg(new n(null, 3, [oj, new n(null, 2, [wh, "application/edn, text/edn", bj, "application/clojure, text/clojure"], null), Pk, new n(null, 1, ["clojure", /edn|clojure/], null), Wj, new n(null, 2, ["text edn", xr, "text clojure", xr], null)], null)));
var yr;
function zr(a, b, c) {
  c = N(c) ? J.c(S, c) : c;
  I.c(c, uk);
  c = I.c(c, Bi);
  var d = le.c(jh, a), e = le.c(dk, a), f = le.c(je.c(function() {
    return function(a) {
      return Ho(a, 0);
    };
  }(d, e), function() {
    return function(a) {
      return De.c(a, new Q(null, 2, 5, R, [dk, ti], null));
    };
  }(d, e)), a), g = le.c(je.c(function() {
    return function(a) {
      return Ho(a, 0);
    };
  }(d, e, f), function() {
    return function(a) {
      return De.c(a, new Q(null, 2, 5, R, [dk, di], null));
    };
  }(d, e, f)), a);
  a = le.c(je.c(function() {
    return function(a) {
      return Ho(a, 0);
    };
  }(d, e, f, g), function() {
    return function(a) {
      return De.c(a, new Q(null, 2, 5, R, [dk, Th], null));
    };
  }(d, e, f, g)), a);
  return wr.d(b).Of(Jg(new n(null, 5, [Zh, new n(null, 2, [Eh, null, Ik, 300], null), kj, new n(null, 1, [bh, null], null), Xj, new n(null, 2, [Fj, d, Sg, new n(null, 1, [Rk, 270], null)], null), Qj, new Q(null, 1, 5, R, [new n(null, 3, [kj, new n(null, 1, [bh, c], null), ck, 0, Sg, new n(null, 1, [kk, function() {
    return Lo.f(this.value, E([jj, ""], 0));
  }], null)], null)], null), mk, new Q(null, 1, 5, R, [new n(null, 4, [qi, [v("Total "), v(c)].join(""), Lj, "line", Qj, 0, dh, a], null)], null)], null)));
}
var Br = function Ar(b, c, d) {
  var e = N(d) ? J.c(S, d) : d, f = I.c(e, Ck);
  "undefined" === typeof yr && (yr = function(b, c, d, e, f, w, D, M) {
    this.id = b;
    this.pa = c;
    this.jg = d;
    this.mh = e;
    this.B = f;
    this.data = w;
    this.Bh = D;
    this.Ag = M;
    this.r = 0;
    this.k = 393216;
  }, yr.R = !0, yr.Q = "clustermap.components.timeline-chart/t34569", yr.U = function(b, c) {
    return jc(c, "clustermap.components.timeline-chart/t34569");
  }, yr.prototype.Ge = !0, yr.prototype.Md = function() {
    Fo.d(this.B);
    return zr(this.data, Fo.c(this.B, "chart"), this.pa);
  }, yr.prototype.Fe = !0, yr.prototype.Ld = function() {
    var b = this;
    Fo.d(b.B);
    zr(b.data, Fo.c(b.B, "chart"), b.pa);
    return wr.d(document).dc("clustermap-change-view", function() {
      var c = wr.d(Fo.c(b.B, "chart"));
      return q(c.Mi(":visible")) ? c.Of().fj() : null;
    });
  }, yr.prototype.Ea = !0, yr.prototype.Aa = function() {
    return React.DOM.div({className:"timeline-chart", id:this.id, ref:"chart"});
  }, yr.prototype.w = function() {
    return this.Ag;
  }, yr.prototype.A = function(b, c) {
    return new yr(this.id, this.pa, this.jg, this.mh, this.B, this.data, this.Bh, c);
  });
  return new yr(f, e, e, d, c, b, Ar, null);
};
var Cr, Er = function Dr(b, c) {
  "undefined" === typeof Cr && (Cr = function(b, c, f, g) {
    this.B = b;
    this.data = c;
    this.jf = f;
    this.lg = g;
    this.r = 0;
    this.k = 393216;
  }, Cr.R = !0, Cr.Q = "clustermap.components.full-report.charts/t33776", Cr.U = function(b, c) {
    return jc(c, "clustermap.components.full-report.charts/t33776");
  }, Cr.prototype.Ea = !0, Cr.prototype.Aa = function() {
    var b;
    b = dj.d(this.data);
    b = q(b) ? new Q(null, 2, 5, R, [Aj, new Q(null, 2, 5, R, [ri, new Q(null, 2, 5, R, [zk, new Q(null, 2, 5, R, [ri, new Q(null, 2, 5, R, [uj, new Q(null, 2, 5, R, [qk, new Q(null, 3, 5, R, [qh, new Q(null, 2, 5, R, [ui, "Revenue"], null), Ao.e(Br, Ij.d(b), new n(null, 2, [ik, new n(null, 3, [Ck, "turnover-timeline-chart", Bi, "Revenue", uk, "# Filings"], null), Rh, "turnover-timeline-chart"], null))], null)], null)], null)], null)], null)], null)], null) : null;
    return K(b) ? React.DOM.div(W(pn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["full-report-charts"], null)], null), b], 0))), null) : React.DOM.div({className:"full-report-charts"}, V(b));
  }, Cr.prototype.w = function() {
    return this.lg;
  }, Cr.prototype.A = function(b, c) {
    return new Cr(this.B, this.data, this.jf, c);
  });
  return new Cr(c, b, Dr, null);
};
function Fr(a) {
  return x.c(1, G(a)) && x.c(hi, function() {
    var b = null == a ? null : Sf(a);
    return null == b ? null : A(b);
  }());
}
var Hr = function Gr(b, c) {
  var d = N(b) ? J.c(S, b) : b, e = I.c(d, lh), f = I.c(d, oi), g = I.c(d, gi), k = lo.d(c), k = N(k) ? J.c(S, k) : k, l = I.c(k, Lh), p = I.c(k, Qk), t = I.c(k, mi), p = ke.c(p, uh), l = ke.c(l, uh);
  "undefined" === typeof Mo && (Mo = function(b, c, d, e, f, g, k, l, p, t, qb, Vc, kf) {
    this.Lf = b;
    this.Vf = c;
    this.D = d;
    this.data = e;
    this.af = f;
    this.ca = g;
    this.Rd = k;
    this.Wf = l;
    this.selection = p;
    this.gh = t;
    this.v = qb;
    this.B = Vc;
    this.rg = kf;
    this.r = 0;
    this.k = 393216;
  }, Mo.R = !0, Mo.Q = "clustermap.components.full-report/t34011", Mo.U = function(b, c) {
    return jc(c, "clustermap.components.full-report/t34011");
  }, Mo.prototype.Ge = !0, Mo.prototype.Md = function() {
    var b = Fo.d(this.B);
    wr.c("[data-toggle\x3d'tooltip']", b).data("bs.tooltip", !1);
    return wr.c("[data-toggle\x3d'tooltip']", b).Eh();
  }, Mo.prototype.Ea = !0, Mo.prototype.Aa = function() {
    var b = Ao.e(Ro, this.data, new n(null, 2, [ik, new n(null, 1, [mi, this.v], null), Rh, "overview"], null));
    return K(b) ? React.DOM.div(W(b), V(Ao.e(Er, this.data, new n(null, 2, [ik, new n(null, 1, [mi, this.v], null), Rh, "details"], null))), Fr(this.Rd) ? V(q(gj.d(this.data)) ? Ao.e(sq, gj.d(this.data), new n(null, 2, [ik, new n(null, 3, [mi, this.v, Lh, this.ca, Qk, this.D], null), Rh, "selection-investments"], null)) : null) : V(q(ni.d(this.data)) ? Ao.e(zq, ni.d(this.data), new n(null, 2, [ik, new n(null, 3, [mi, this.v, Lh, this.ca, Qk, this.D], null), Rh, "selection-investments-by-company"], 
    null)) : null)) : React.DOM.div(null, V(b), V(Ao.e(Er, this.data, new n(null, 2, [ik, new n(null, 1, [mi, this.v], null), Rh, "details"], null))), Fr(this.Rd) ? V(q(gj.d(this.data)) ? Ao.e(sq, gj.d(this.data), new n(null, 2, [ik, new n(null, 3, [mi, this.v, Lh, this.ca, Qk, this.D], null), Rh, "selection-investments"], null)) : null) : V(q(ni.d(this.data)) ? Ao.e(zq, ni.d(this.data), new n(null, 2, [ik, new n(null, 3, [mi, this.v, Lh, this.ca, Qk, this.D], null), Rh, "selection-investments-by-company"], 
    null)) : null));
  }, Mo.prototype.w = function() {
    return this.rg;
  }, Mo.prototype.A = function(b, c) {
    return new Mo(this.Lf, this.Vf, this.D, this.data, this.af, this.ca, this.Rd, this.Wf, this.selection, this.gh, this.v, this.B, c);
  });
  return new Mo(Gr, d, p, d, e, l, g, k, f, b, t, c, null);
};
function Ir() {
  var a = Jr, b = jd(oi) ? oi : new Q(null, 1, 5, R, [oi], null);
  return function() {
    function c(a) {
      var b = null;
      0 < arguments.length && (b = E(Array.prototype.slice.call(arguments, 0), 0));
      return d.call(this, b);
    }
    function d(c) {
      return J.e(a, De.c(A(c), b), B(c));
    }
    c.m = 0;
    c.j = function(a) {
      a = z(a);
      return d(a);
    };
    c.f = d;
    return c;
  }();
}
;function Kr(a) {
  return React.DOM.a({href:a.c ? a.c(null, null) : a.call(null, null, null)}, React.DOM.button({className:"btn btn-link btn-reset", type:"reset"}, "Reset to UK wide"));
}
;var Lr, Jr = function Mr(b, c) {
  var d = N(b) ? J.c(S, b) : b, e = I.c(d, Ek), f = I.c(d, Lj), g = lo.d(c), g = N(g) ? J.c(S, g) : g, k = I.c(g, Qk), l = I.c(g, mi), k = ke.c(k, uh), p = function() {
    var b = null == d ? null : Lj.d(d);
    if (null == b) {
      b = null;
    } else {
      if (q(x.c ? x.c(hi, b) : x.call(null, hi, b))) {
        b = "Investor-backed company";
      } else {
        if (q(x.c ? x.c(xk, b) : x.call(null, xk, b))) {
          b = "Investor";
        } else {
          if (q(x.c ? x.c(Oh, b) : x.call(null, Oh, b))) {
            b = "Constituency";
          } else {
            throw Error([v("No matching clause: "), v(b)].join(""));
          }
        }
      }
    }
    return b;
  }(), t = function() {
    var b = null == d ? null : Ek.d(d);
    return null == b ? null : qi.d(b);
  }(), w = function() {
    var b = null == d ? null : Ek.d(d);
    return null == b ? null : bk.d(b);
  }();
  "undefined" === typeof Lr && (Lr = function(b, c, d, e, f, g, k, l, p, w, t, kf, Ab, Ee) {
    this.value = b;
    this.D = c;
    this.Ud = d;
    this.cg = e;
    this.bg = f;
    this.selection = g;
    this.name = k;
    this.v = l;
    this.nh = p;
    this.B = w;
    this.url = t;
    this.type = kf;
    this.ih = Ab;
    this.xg = Ee;
    this.r = 0;
    this.k = 393216;
  }, Lr.R = !0, Lr.Q = "clustermap.components.page-title/t34406", Lr.U = function(b, c) {
    return jc(c, "clustermap.components.page-title/t34406");
  }, Lr.prototype.Ea = !0, Lr.prototype.Aa = function() {
    var b = this;
    return React.DOM.div({id:"page-title"}, React.DOM.button({className:"btn", type:"button", onClick:function() {
      return Op.c(b.v, new Q(null, 2, 5, R, [Ak, "map"], null));
    }}, "View on map"), V(q(b.Ud) ? Kr(b.D) : null), function() {
      var c;
      c = b.Ud;
      c = q(c) ? c : "All investor-backed companies";
      return K(c) ? React.DOM.h2(W(c), null) : React.DOM.h2(null, V(c));
    }(), function() {
      var c;
      c = b.name;
      c = q(c) ? c : "UK wide";
      return K(c) ? React.DOM.h3(W(c), V(x.c(b.type, Oh) ? new Q(null, 6, 5, R, [Rj, "\u00a0(", tk.d(b.value), ", ", Sk.d(b.value), ")"], null) : null)) : React.DOM.h3(null, V(c), V(x.c(b.type, Oh) ? new Q(null, 6, 5, R, [Rj, "\u00a0(", tk.d(b.value), ", ", Sk.d(b.value), ")"], null) : null));
    }(), q(b.url) ? React.DOM.a({href:b.url, target:"_blank"}, V(b.url)) : null);
  }, Lr.prototype.w = function() {
    return this.xg;
  }, Lr.prototype.A = function(b, c) {
    return new Lr(this.value, this.D, this.Ud, this.cg, this.bg, this.selection, this.name, this.v, this.nh, this.B, this.url, this.type, this.ih, c);
  });
  return new Lr(e, k, p, g, d, d, t, l, Mr, c, w, f, b, null);
};
function Nr(a) {
  Xk.call(this);
  a || Mm || (Mm = new Xm);
}
ta(Nr, Xk);
var Or = document.createElement("div");
Or.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
var Pr = x.c(Or.firstChild.nodeType, 3), Qr = x.c(Or.getElementsByTagName("tbody").length, 0);
x.c(Or.getElementsByTagName("link").length, 0);
var Rr = /<|&#?\w+;/, Sr = /^\s+/, Tr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, Ur = /<([\w:]+)/, Vr = /<tbody/i, Wr = new Q(null, 3, 5, R, [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"], null), Xr = new Q(null, 3, 5, R, [1, "\x3ctable\x3e", "\x3c/table\x3e"], null), Yr = new Q(null, 3, 5, R, [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"], null), Zr = Zc(["col", y, "tfoot", "caption", "optgroup", "legend", 
"area", "td", "thead", "th", "option", "tbody", "tr", "colgroup"], [new Q(null, 3, 5, R, [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"], null), new Q(null, 3, 5, R, [0, "", ""], null), Xr, Xr, Wr, new Q(null, 3, 5, R, [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"], null), new Q(null, 3, 5, R, [1, "\x3cmap\x3e", "\x3c/map\x3e"], null), Yr, Xr, Yr, Wr, Xr, new Q(null, 3, 5, R, [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"], null), 
Xr]);
function $r(a, b, c, d) {
  b = jb(kg(Vr, b));
  x.c(c, "table") && b ? (c = a.firstChild, a = q(c) ? a.firstChild.childNodes : c) : a = x.c(d, "\x3ctable\x3e") && b ? divchildNodes : Ze;
  a = z(a);
  c = null;
  for (var e = b = 0;;) {
    if (e < b) {
      d = c.C(null, e), x.c(d.nodeName, "tbody") && x.c(d.childNodes.length, 0) && d.parentNode.removeChild(d), e += 1;
    } else {
      if (a = z(a)) {
        c = a, ld(c) ? (a = vc(c), b = wc(c), c = a, d = G(a), a = b, b = d) : (d = A(c), x.c(d.nodeName, "tbody") && x.c(d.childNodes.length, 0) && d.parentNode.removeChild(d), a = C(c), c = null, b = 0), e = 0;
      } else {
        break;
      }
    }
  }
}
function as(a) {
  var b = Ym(a, Tr, "\x3c$1\x3e\x3c/$2\x3e");
  a = ("" + v(Uc(kg(Ur, b)))).toLowerCase();
  var c = I.e(Zr, a, y.d(Zr)), d = H.e(c, 0, null), e = H.e(c, 1, null), f = H.e(c, 2, null), c = function() {
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
  q(Qr) && $r(c, b, a, e);
  q(function() {
    var a = jb(Pr);
    return a ? kg(Sr, b) : a;
  }()) && c.insertBefore(document.createTextNode(A(kg(Sr, b))), c.firstChild);
  return c.childNodes;
}
function bs(a) {
  if (a ? a.Eb : a) {
    return a.Eb(a);
  }
  var b;
  b = bs[m(null == a ? null : a)];
  if (!b && (b = bs._, !b)) {
    throw u("DomContent.nodes", a);
  }
  return b.call(null, a);
}
function cs(a) {
  if (a ? a.ud : a) {
    return a.ud(a);
  }
  var b;
  b = cs[m(null == a ? null : a)];
  if (!b && (b = cs._, !b)) {
    throw u("DomContent.single-node", a);
  }
  return b.call(null, a);
}
function ds(a, b) {
  for (var c = z(bs(a)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.C(null, f);
      Pm(g, b);
      f += 1;
    } else {
      if (c = z(c)) {
        d = c, ld(d) ? (c = vc(d), f = wc(d), d = c, e = G(c), c = f) : (c = A(d), Pm(c, b), c = C(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
function es(a, b) {
  for (var c = z(bs(a)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.C(null, f);
      Qm(g, b);
      f += 1;
    } else {
      if (c = z(c)) {
        d = c, ld(d) ? (c = vc(d), f = wc(d), d = c, e = G(c), c = f) : (c = A(d), Qm(c, b), c = C(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
var fs = function() {
  function a(a, b) {
    return b < a.length ? new Md(null, function() {
      return F(a.item(b), c.c(a, b + 1));
    }, null, null) : null;
  }
  function b(a) {
    return c.c(a, 0);
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
  c.d = b;
  c.c = a;
  return c;
}(), gs = function() {
  function a(a, b) {
    return b < a.length ? new Md(null, function() {
      return F(a[b], c.c(a, b + 1));
    }, null, null) : null;
  }
  function b(a) {
    return c.c(a, 0);
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
  c.d = b;
  c.c = a;
  return c;
}();
function hs(a) {
  return q(a.item) ? fs.d(a) : gs.d(a);
}
function is(a) {
  if (q(a)) {
    var b = jb(a.nodeName);
    return b ? a.length : b;
  }
  return a;
}
function js(a) {
  return null == a ? Ic : (a ? a.k & 8388608 || a.jb || (a.k ? 0 : r(dc, a)) : r(dc, a)) ? z(a) : q(is(a)) ? hs(a) : y ? z(new Q(null, 1, 5, R, [a], null)) : null;
}
bs._ = function(a) {
  return null == a ? Ic : (a ? a.k & 8388608 || a.jb || (a.k ? 0 : r(dc, a)) : r(dc, a)) ? z(a) : q(is(a)) ? hs(a) : y ? z(new Q(null, 1, 5, R, [a], null)) : null;
};
cs._ = function(a) {
  return null == a ? null : (a ? a.k & 8388608 || a.jb || (a.k ? 0 : r(dc, a)) : r(dc, a)) ? A(a) : q(is(a)) ? a.item(0) : y ? a : null;
};
bs.string = function(a) {
  return ig.d(bs(q(kg(Rr, a)) ? as(a) : document.createTextNode(a)));
};
cs.string = function(a) {
  return cs(q(kg(Rr, a)) ? as(a) : document.createTextNode(a));
};
q("undefined" != typeof NodeList) && (h = NodeList.prototype, h.jb = !0, h.J = function() {
  return hs(this);
}, h.Cb = !0, h.C = function(a, b) {
  return this.item(b);
}, h.ja = function(a, b, c) {
  return this.length <= b ? c : H.c(this, b);
}, h.Sb = !0, h.K = function() {
  return this.length;
});
q("undefined" != typeof StaticNodeList) && (h = StaticNodeList.prototype, h.jb = !0, h.J = function() {
  return hs(this);
}, h.Cb = !0, h.C = function(a, b) {
  return this.item(b);
}, h.ja = function(a, b, c) {
  return this.length <= b ? c : H.c(this, b);
}, h.Sb = !0, h.K = function() {
  return this.length;
});
q("undefined" != typeof HTMLCollection) && (h = HTMLCollection.prototype, h.jb = !0, h.J = function() {
  return hs(this);
}, h.Cb = !0, h.C = function(a, b) {
  return this.item(b);
}, h.ja = function(a, b, c) {
  return this.length <= b ? c : H.c(this, b);
}, h.Sb = !0, h.K = function() {
  return this.length;
});
var ks;
function ls(a, b, c, d) {
  var e = Wm(b), f = b.selectSingleNode;
  if (q(q(f) ? e.setProperty : f)) {
    return e.setProperty("SelectionLanguage", "XPath"), c.c ? c.c(b, a) : c.call(null, b, a);
  }
  if (q(e.evaluate)) {
    return d.o ? d.o(null, e, b, a) : d.call(null, null, e, b, a);
  }
  if (s) {
    throw Error("Could not find XPath support in this browser.");
  }
  return null;
}
function ms(a, b) {
  return ls(a, b, function(a, b) {
    return a.selectSingleNode(b);
  }, function(a, b, e, f) {
    return b.evaluate(f, e, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  });
}
function ns(a, b) {
  return ls(a, b, function(a, b) {
    return a.selectNodes(b);
  }, function(a, b, e, f) {
    a = b.evaluate(f, e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    b = a.snapshotLength;
    e = 0;
    for (var g = null;;) {
      if (e < b) {
        f = e + 1, g = F(a.snapshotItem(e), g), e = f;
      } else {
        return g;
      }
    }
  });
}
var os = function() {
  function a(a, b) {
    "undefined" === typeof ks && (ks = function(a, b, c, d) {
      this.pb = a;
      this.gb = b;
      this.Jh = c;
      this.Gg = d;
      this.r = 0;
      this.k = 393216;
    }, ks.R = !0, ks.Q = "domina.xpath/t39260", ks.U = function(a, b) {
      return jc(b, "domina.xpath/t39260");
    }, ks.prototype.Eb = function() {
      return ve.c(ke.c(ns, this.pb), bs(this.gb));
    }, ks.prototype.ud = function() {
      return A(xe(ie(ib), le.c(ke.c(ms, this.pb), bs(this.gb))));
    }, ks.prototype.w = function() {
      return this.Gg;
    }, ks.prototype.A = function(a, b) {
      return new ks(this.pb, this.gb, this.Jh, b);
    });
    return new ks(b, a, c, null);
  }
  function b(a) {
    return c.c(Tm()[0], a);
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
  c.d = b;
  c.c = a;
  return c;
}();
var ps = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = N(b) ? J.c(S, b) : b, f = I.c(e, yh), g = Mp.d(1);
    Bm(a, function(a) {
      Op.c(g, function(a) {
        return q(f) ? a : Og.f(a, E([Ng, !0], 0));
      }.call(null, (JSON.parse.d ? JSON.parse.d(Lm(a.target)) : JSON.parse.call(null, Lm(a.target))).data));
      return cp(g);
    });
    return g;
  }
  a.m = 1;
  a.j = function(a) {
    var d = A(a);
    a = B(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}();
function qs(a, b) {
  var c = Mp.d(1);
  Cp(function() {
    var d = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, T)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, np(c), T;
                  }
                  if (s) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Jd(d, T)) {
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
          d.t = c;
          d.d = b;
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
          return d = c[2], mp(c, d);
        }
        if (4 === d) {
          return kp(c, 7, a);
        }
        if (5 === d) {
          return c[2] = null, c[1] = 6, T;
        }
        if (6 === d) {
          return d = c[2], c[2] = d, c[1] = 3, T;
        }
        if (7 === d) {
          var d = c[7], e = c[2], d = H.e(e, 0, null), e = H.e(e, 1, null), l = jd(d);
          c[8] = e;
          c[7] = d;
          c[1] = l ? 8 : 9;
          return T;
        }
        return 8 === d ? (d = c[7], e = Ze, c[9] = d, c[10] = e, c[2] = null, c[1] = 11, T) : 9 === d ? (d = c[7], c[1] = q(d) ? 20 : 21, T) : 10 === d ? (e = c[8], d = J.e(b, c[2], e), c[11] = d, c[2] = null, c[1] = 2, T) : 11 === d ? (e = c[9], d = hd(e), c[1] = d ? 13 : 14, T) : 12 === d ? (d = c[2], c[2] = d, c[1] = 10, T) : 13 === d ? (e = c[10], c[2] = e, c[1] = 15, T) : 14 === d ? (e = c[9], d = B(e), e = A(e), c[12] = d, c[1] = q(e) ? 16 : 17, T) : 15 === d ? (d = c[2], c[2] = d, c[1] = 12, 
        T) : 16 === d ? (e = c[9], d = A(e), kp(c, 19, d)) : 17 === d ? (c[2] = null, c[1] = 18, T) : 18 === d ? (d = c[12], e = c[10], e = Xc.c(e, c[2]), c[9] = d, c[10] = e, c[2] = null, c[1] = 11, T) : 19 === d ? (d = c[2], c[2] = d, c[1] = 18, T) : 20 === d ? (d = c[7], kp(c, 23, d)) : 21 === d ? (c[2] = null, c[1] = 22, T) : 22 === d ? (d = c[2], c[2] = d, c[1] = 10, T) : 23 === d ? (d = c[2], c[2] = d, c[1] = 22, T) : null;
      });
    }(), e = function() {
      var a = d.t ? d.t() : d.call(null);
      a[6] = c;
      return a;
    }();
    return jp(e);
  });
}
function rs(a, b) {
  var c = Mp.d(new vp(tp(1), 1));
  qs(c, b);
  return function() {
    function b(a) {
      var c = null;
      0 < arguments.length && (c = E(Array.prototype.slice.call(arguments, 0), 0));
      return e.call(this, c);
    }
    function e(b) {
      b = J.c(a, b);
      if (q(b)) {
        var d = jd(b) ? b : new Q(null, 1, 5, R, [b], null);
        b = H.e(d, 0, null);
        d = zd(d);
        return Op.c(c, new Q(null, 2, 5, R, [b, d], null));
      }
      return null;
    }
    b.m = 0;
    b.j = function(a) {
      a = z(a);
      return e(a);
    };
    b.f = e;
    return b;
  }();
}
function ss(a) {
  return Zm.c("\x26", le.c(function(a) {
    var c = H.e(a, 0, null);
    a = H.e(a, 1, null);
    return[v(Kd(c)), v("\x3d"), v(JSON.stringify(Jg(a)))].join("");
  }, a));
}
var ts = config.ki.prefix, us = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = E(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return J.e(ps, [v("/api/boundarylines/"), v(a), v("/"), v(b)].join(""), e);
  }
  a.m = 2;
  a.j = function(a) {
    var d = A(a);
    a = C(a);
    var e = A(a);
    a = B(a);
    return b(d, e, a);
  };
  a.f = b;
  return a;
}(), vs = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return J.e(ps, [v("/api/boundaryline-collection-index/"), v(a)].join(""), b);
  }
  a.m = 1;
  a.j = function(a) {
    var d = A(a);
    a = B(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}(), ws = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = H.e(a, 0, null);
    return ps([v("/api/"), v(ts), v("/portfolio-company-locations?"), v(ss(a))].join(""));
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}(), xs = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = H.e(a, 0, null);
    return ps([v("/api/"), v(ts), v("/investment-account-timelines?"), v(ss(a))].join(""));
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}(), ys = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = H.e(a, 0, null);
    return ps([v("/api/"), v(ts), v("/investment-stats?"), v(ss(a))].join(""));
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}(), zs = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = H.e(a, 0, null);
    a = Vf.f(E([new n(null, 2, [pj, 50, sk, new n(null, 1, [wi, "desc"], null)], null), a], 0));
    return ps([v("/api/"), v(ts), v("/investment-aggs?"), v(ss(a))].join(""));
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}(), As = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = H.e(a, 0, null);
    a = Vf.f(E([new n(null, 2, [pj, 50, sk, new Q(null, 2, 5, R, [new n(null, 1, [yj, "asc"], null), new n(null, 1, [Si, "asc"], null)], null)], null), a], 0));
    return ps([v("/api/"), v(ts), v("/investments?"), v(ss(a))].join(""));
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
var Bs = new Q(null, 4, 5, R, [new Q(null, 2, 5, R, [7, 0.01], null), new Q(null, 2, 5, R, [9, 0.002], null), new Q(null, 2, 5, R, [12, 3E-4], null), new Q(null, 2, 5, R, [null, 0], null)], null);
function Cs(a) {
  var b = fe(function(b) {
    var d = H.e(b, 0, null);
    b = H.e(b, 1, null);
    return q(q(d) ? a <= d : d) ? b : null;
  }, Bs);
  return q(b) ? b : 0;
}
function Ds(a, b) {
  var c = Cs(a), d = Gd(xe(function(a) {
    return function(b) {
      return b > a;
    };
  }(c), le.c(Wc, Bs))), e = xe(function(a) {
    return function(b) {
      return b < a;
    };
  }(c, d), le.c(Wc, Bs)), f = $f(b), c = I.c(f, c);
  if (q(c)) {
    return c;
  }
  e = fe(f, e);
  return q(e) ? e : fe(f, d);
}
function Es(a, b, c, d) {
  var e = us.f(c, d, E([yh, !0], 0));
  b = jd(b) ? b : new Q(null, 1, 5, R, [b], null);
  var f = Yd.c(b, new Q(null, 2, 5, R, [c, d], null)), g = Mp.d(1);
  Cp(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, T)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, np(c), T;
                  }
                  if (s) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Jd(d, T)) {
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
          d.t = c;
          d.d = b;
          return d;
        }();
      }(function(b) {
        var c = b[1];
        if (2 === c) {
          var d = b[2], g = Dg.o(a, He, f, function() {
            return function(a) {
              return function() {
                return a;
              };
            }(d, d, c);
          }());
          return mp(b, g);
        }
        return 1 === c ? kp(b, 2, e) : null;
      });
    }(), c = function() {
      var a = b.t ? b.t() : b.call(null);
      a[6] = g;
      return a;
    }();
    return jp(c);
  });
}
var Fs = function() {
  function a(a, d, e, f, g) {
    var k = null;
    4 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 4), 0));
    return b.call(this, a, d, e, f, k);
  }
  function b(a, b, e, f, g) {
    g = N(g) ? J.c(S, g) : g;
    g = I.c(g, vj);
    if (q(q(g) ? f <= g : g)) {
      return null;
    }
    g = jd(b) ? b : new Q(null, 1, 5, R, [b], null);
    var k = De.c(Vb(a), g), l = I.c(k, e);
    g = Cs(f);
    f = Ds(f, Sf(l));
    k = De.c(k, new Q(null, 2, 5, R, [e, f], null));
    ce.c(g, f) && Es(a, b, e, g);
    return q(k) ? new Q(null, 2, 5, R, [f, k], null) : null;
  }
  a.m = 4;
  a.j = function(a) {
    var d = A(a);
    a = C(a);
    var e = A(a);
    a = C(a);
    var f = A(a);
    a = C(a);
    var g = A(a);
    a = B(a);
    return b(d, e, f, g, a);
  };
  a.f = b;
  return a;
}();
qm("goog.messaging.AbstractChannel");
function Gs(a, b) {
  Nr.call(this, b);
  this.hf = a;
  this.Oc = [];
}
var Hs;
ta(Gs, Nr);
h = Gs.prototype;
h.Sd = 0;
h.Xe = !1;
h.ic = 3800;
h.send = function(a, b) {
  var c = a + ":" + b;
  if (!il || b.length <= this.ic) {
    this.Oc.push("|" + c);
  } else {
    for (var d = b.length, e = Math.ceil(d / this.ic), f = 0, g = 1;f < d;) {
      this.Oc.push("," + g + "/" + e + "|" + c.substr(f, this.ic)), g++, f += this.ic;
    }
  }
  !this.Xe && this.Oc.length && (c = this.Oc.shift(), ++this.Sd, this.Qi.send(this.Sd + c), $o.log(lm, "msg sent: " + this.Sd + c, void 0), this.Xe = !0);
};
h.ya = function() {
  Gs.wb.ya.call(this);
  var a = Is;
  Ma(a, this.Jg);
  Ma(a, this.Ze);
  this.Jg = this.Ze = null;
  (a = this.Ig) && a.parentNode && a.parentNode.removeChild(a);
  (a = this.Ye) && a.parentNode && a.parentNode.removeChild(a);
  this.Ig = this.Ye = null;
};
var Is = [], Js = qa(function() {
  var a = Is, b, c = !1;
  try {
    for (var d = 0;b = a[d];d++) {
      var e;
      if (!(e = c)) {
        var f = b, g = f.ej.location.href;
        if (g != f.Jf) {
          f.Jf = g;
          var k = g.split("#")[1];
          k && (k = k.substr(1), f.oi(decodeURIComponent(k)));
          e = !0;
        } else {
          e = !1;
        }
      }
      c = e;
    }
  } catch (l) {
    if ($o.info("receive_() failed: " + l), b = b.kj.hf, $o.info("Transport Error"), b.close(), !a.length) {
      return;
    }
  }
  a = sa();
  c && (Hs = a);
  window.setTimeout(Js, 1E3 > a - Hs ? 10 : 100);
}, Gs);
Be(vf, le.c(function(a) {
  var b = H.e(a, 0, null);
  a = H.e(a, 1, null);
  return new Q(null, 2, 5, R, [Ld.d(b.toLowerCase()), a], null);
}, Vf.f(E([Og.d({Nh:"complete", ei:"success", Oh:"error", Kh:"abort", ai:"ready", bi:"readystatechange", TIMEOUT:"timeout", Qh:"incrementaldata", $h:"progress"})], 0))));
var Ks = function() {
  function a(a, b, c, d, e, f) {
    if (a ? a.oe : a) {
      return a.oe(0, b, c, d, e, f);
    }
    var D;
    D = Ks[m(null == a ? null : a)];
    if (!D && (D = Ks._, !D)) {
      throw u("IConnection.transmit", a);
    }
    return D.call(null, a, b, c, d, e, f);
  }
  function b(a, b, c, d, e) {
    if (a ? a.ne : a) {
      return a.ne(0, b, c, d, e);
    }
    var f;
    f = Ks[m(null == a ? null : a)];
    if (!f && (f = Ks._, !f)) {
      throw u("IConnection.transmit", a);
    }
    return f.call(null, a, b, c, d, e);
  }
  function c(a, b, c, d) {
    if (a ? a.me : a) {
      return a.me(0, b, c, d);
    }
    var e;
    e = Ks[m(null == a ? null : a)];
    if (!e && (e = Ks._, !e)) {
      throw u("IConnection.transmit", a);
    }
    return e.call(null, a, b, c, d);
  }
  function d(a, b, c) {
    if (a ? a.le : a) {
      return a.le(0, b, c);
    }
    var d;
    d = Ks[m(null == a ? null : a)];
    if (!d && (d = Ks._, !d)) {
      throw u("IConnection.transmit", a);
    }
    return d.call(null, a, b, c);
  }
  function e(a, b) {
    if (a ? a.ke : a) {
      return a.ke(0, b);
    }
    var c;
    c = Ks[m(null == a ? null : a)];
    if (!c && (c = Ks._, !c)) {
      throw u("IConnection.transmit", a);
    }
    return c.call(null, a, b);
  }
  var f = null, f = function(f, k, l, p, t, w) {
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
        return a.call(this, f, k, l, p, t, w);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = e;
  f.e = d;
  f.o = c;
  f.q = b;
  f.ta = a;
  return f;
}();
h = ym.prototype;
h.ke = function(a, b) {
  return Ks.ta(this, b, "GET", null, null, 1E4);
};
h.le = function(a, b, c) {
  return Ks.ta(this, b, c, null, null, 1E4);
};
h.me = function(a, b, c, d) {
  return Ks.ta(this, b, c, d, null, 1E4);
};
h.ne = function(a, b, c, d, e) {
  return Ks.ta(this, b, c, d, e, 1E4);
};
h.oe = function(a, b, c, d, e, f) {
  this.gc = Math.max(0, f);
  return this.send(b, c, d, e);
};
Be(vf, le.c(function(a) {
  var b = H.e(a, 0, null);
  a = H.e(a, 1, null);
  return new Q(null, 2, 5, R, [Ld.d(b.toLowerCase()), a], null);
}, Og.d({Mh:"cn", Lh:"at", ci:"rat", Zh:"pu", Ph:"ifrid", fi:"tp", Sh:"lru", Yh:"pru", Rh:"lpu", Xh:"ppu", Wh:"ph", Vh:"osh", di:"role", Uh:"nativeProtocolVersion"})));
Bg.d(null);
Bg.d(0);
function Ls(a) {
  var b = function() {
    var a = window, a = null == a ? null : a.Gf, a = null == a ? null : a.mj;
    return null == a ? null : a.code;
  }();
  q(function() {
    var a = window.Fi;
    return q(a) ? b : a;
  }()) && ga("send", "pageview", a);
}
;var Ms = new n(null, 3, [hi, qi, xk, qi, Oh, Jk], null), Ns = new n(null, 4, [hi, function(a, b) {
  return[v("#/"), v(Kd(a)), v("/portfolio-company/"), v(mh.d(b))].join("");
}, xk, function(a, b) {
  return[v("#/"), v(Kd(a)), v("/investor-company/"), v(Vi.d(b))].join("");
}, Oh, function(a, b) {
  return[v("#/"), v(Kd(a)), v("/constituency/"), v(Ph.d(b))].join("");
}, null, function(a) {
  return[v("#/"), v(Kd(a))].join("");
}], null);
function Os(a, b, c) {
  return J.c(I.c(Ns, b), new Q(null, 2, 5, R, [a, c], null));
}
function Ps(a, b, c) {
  return React.DOM.a({href:Os(a, b, c)}, V(I.c(c, I.c(Ms, b))));
}
;var Qs;
function Rs(a, b) {
  if (a ? a.Nc : a) {
    return a.Nc(a, b);
  }
  var c;
  c = Rs[m(null == a ? null : a)];
  if (!c && (c = Rs._, !c)) {
    throw u("IRouteMatches.route-matches", a);
  }
  return c.call(null, a, b);
}
var Ss = function() {
  function a(a, b) {
    if (a ? a.wh : a) {
      return a.wh(a, b);
    }
    var c;
    c = Ss[m(null == a ? null : a)];
    if (!c && (c = Ss._, !c)) {
      throw u("IRenderRoute.render-route", a);
    }
    return c.call(null, a, b);
  }
  function b(a) {
    if (a ? a.vh : a) {
      return a.vh(a);
    }
    var b;
    b = Ss[m(null == a ? null : a)];
    if (!b && (b = Ss._, !b)) {
      throw u("IRenderRoute.render-route", a);
    }
    return b.call(null, a);
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
  c.d = b;
  c.c = a;
  return c;
}(), Ts = Bg.d(new n(null, 1, [ei, ""], null));
function Us() {
  var a = new Q(null, 1, 5, R, [ei], null), a = jd(a) ? a : new Q(null, 1, 5, R, [a], null);
  return De.c(Vb(Ts), a);
}
var Vs = encodeURIComponent, Ws = decodeURIComponent;
function Xs(a) {
  return Zm.c("\x26", le.c(function(a) {
    var c = H.e(a, 0, null);
    a = H.e(a, 1, null);
    return[v(Kd(c)), v("\x3d"), v(Vs.d ? Vs.d(a instanceof P ? Kd(a) : "" + v(a)) : Vs.call(null, a instanceof P ? Kd(a) : "" + v(a)))].join("");
  }, a));
}
function Ys(a) {
  return ob.e(function(a, c) {
    var d = dn.e(c, /=/, 2), e = H.e(d, 0, null), d = H.e(d, 1, null), d = Ws.d ? Ws.d(d) : Ws.call(null, d);
    return $c.e(a, e, d);
  }, vf, dn.c(a, /&/));
}
function Zs(a) {
  return Zm.c("/", le.c(Vs, dn.c(a, /\//)));
}
function $s(a, b) {
  var c = jg(a, b);
  return q(c) ? jd(c) ? c : new Q(null, 2, 5, R, [c, c], null) : null;
}
var at = $f("\\.*+|?()[]{}$^");
function bt(a) {
  return ob.e(function(a, c) {
    return q(at.d ? at.d(c) : at.call(null, c)) ? [v(a), v("\\"), v(c)].join("") : [v(a), v(c)].join("");
  }, "", a);
}
function ct(a, b) {
  return fe(function(b) {
    var d = H.e(b, 0, null);
    b = H.e(b, 1, null);
    var e = kg(d, a);
    return q(e) ? (d = H.e(e, 0, null), e = H.e(e, 1, null), new Q(null, 2, 5, R, [Ad.c(a, G(d)), b.d ? b.d(e) : b.call(null, e)], null)) : null;
  }, b);
}
function dt(a, b) {
  for (var c = a, d = "", e = Ze;;) {
    if (z(c)) {
      var f = ct(c, b), c = H.e(f, 0, null), g = H.e(f, 1, null), f = H.e(g, 0, null), g = H.e(g, 1, null), d = [v(d), v(f)].join(""), e = Xc.c(e, g)
    } else {
      return new Q(null, 2, 5, R, [lg([v("^"), v(d), v("$")].join("")), ye(ib, e)], null);
    }
  }
}
var ft = function et(b) {
  var c = new Q(null, 3, 5, R, [new Q(null, 2, 5, R, [/^\*([^\s.:*\/]*)/, function(b) {
    b = z(b) ? Ld.d(b) : eh;
    return new Q(null, 2, 5, R, ["(.*?)", b], null);
  }], null), new Q(null, 2, 5, R, [/^\:([^\s.:*\/]+)/, function(b) {
    b = Ld.d(b);
    return new Q(null, 2, 5, R, ["([^,;?/]+)", b], null);
  }], null), new Q(null, 2, 5, R, [/^([^:*]+)/, function(b) {
    b = bt(b);
    return new Q(null, 1, 5, R, [b], null);
  }], null)], null), d = dt(b, c), e = H.e(d, 0, null), f = H.e(d, 1, null);
  "undefined" === typeof Qs && (Qs = function(b, c, d, e, f, w, D) {
    this.Ne = b;
    this.Qe = c;
    this.Gh = d;
    this.kf = e;
    this.qh = f;
    this.Ff = w;
    this.Fg = D;
    this.r = 0;
    this.k = 393216;
  }, Qs.R = !0, Qs.Q = "secretary.core/t38482", Qs.U = function(b, c) {
    return jc(c, "secretary.core/t38482");
  }, Qs.prototype.Nc = function(b, c) {
    var d = $s(this.Qe, c);
    return q(d) ? (H.e(d, 0, null), d = zd(d), Wf.f(bf, E([vf, Ce.c(2, se.c(this.Ne, le.c(Ws, d)))], 0))) : null;
  }, Qs.prototype.w = function() {
    return this.Fg;
  }, Qs.prototype.A = function(b, c) {
    return new Qs(this.Ne, this.Qe, this.Gh, this.kf, this.qh, this.Ff, c);
  });
  return new Qs(f, e, d, c, b, et, null);
}, gt = Bg.d(Ze);
function ht(a, b) {
  var c = "string" === typeof a ? ft(a) : a;
  Dg.e(gt, Xc, new Q(null, 2, 5, R, [c, b], null));
}
function it(a) {
  return fe(function(b) {
    var c = H.e(b, 0, null);
    b = H.e(b, 1, null);
    var d = Rs(c, a);
    return q(d) ? new Q(null, 2, 5, R, [b, Rs(c, a)], null) : null;
  }, Vb(gt));
}
RegExp.prototype.Nc = function(a, b) {
  var c = $s(this, b);
  return q(c) ? (H.e(c, 0, null), c = zd(c), af(c)) : null;
};
Rs.string = function(a, b) {
  return ft(a).Nc(null, b);
};
Ss.string = function(a) {
  return Ss.c(a, vf);
};
Ss.string = function(a, b) {
  var c = N(b) ? J.c(S, b) : b, d = I.c(c, $g), e = Bg.d(c), c = a.replace(RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*", "g"), function(a, b, c, d, e) {
    return function(a) {
      var b = Ld.d(x.c(a, "*") ? a : Ad.c(a, 1)), c = Vb(e).call(null, b);
      jd(c) ? (Dg.o(e, $c, b, C(c)), a = Zs(A(c))) : a = q(c) ? Zs(c) : a;
      return a;
    };
  }(b, c, c, d, e)), c = [v(Us()), v(c)].join(""), d = q(d) ? Xs(d) : d;
  return q(d) ? [v(c), v("?"), v(d)].join("") : c;
};
function jt(a, b) {
  if (q(x.c ? x.c(hi, a) : x.call(null, hi, a))) {
    return mh.d(b);
  }
  if (q(x.c ? x.c(xk, a) : x.call(null, xk, a))) {
    return Vi.d(b);
  }
  if (q(x.c ? x.c(Oh, a) : x.call(null, Oh, a))) {
    return Ph.d(b);
  }
  throw Error([v("No matching clause: "), v(a)].join(""));
}
;var kt, lt, nt = function mt(b, c, d) {
  var e = N(b) ? J.c(S, b) : b, f = I.c(e, Lj), g = I.c(e, qi), k = N(d) ? J.c(S, d) : d, l = I.c(k, Qk), p = I.c(k, mi);
  "undefined" === typeof kt && (kt = function(b, c, d, e, f, g, k, l, p, gb, hb, qb, Vc) {
    this.pa = b;
    this.D = c;
    this.name = d;
    this.v = e;
    this.Qd = f;
    this.kh = g;
    this.B = k;
    this.eg = l;
    this.type = p;
    this.dg = gb;
    this.jh = hb;
    this.uh = qb;
    this.yg = Vc;
    this.r = 0;
    this.k = 393216;
  }, kt.R = !0, kt.Q = "clustermap.components.search/t34427", kt.U = function(b, c) {
    return jc(c, "clustermap.components.search/t34427");
  }, kt.prototype.Ie = !0, kt.prototype.Nd = function(b, c) {
    var d = this, e = N(c) ? J.c(S, c) : c, e = I.c(e, Fk), f = d.D.c ? d.D.c(d.type, d.Qd) : d.D.call(null, d.type, d.Qd);
    return React.DOM.li({className:q(e) ? "selected" : null}, React.DOM.a({href:f, ref:"link", onClick:function() {
      var b = Fo.c(d.B, "link"), b = null == b ? null : wr.d(b), b = null == b ? null : b.bj(".search-component");
      return null == b ? null : b.toggle();
    }}, V(d.name)));
  }, kt.prototype.w = function() {
    return this.yg;
  }, kt.prototype.A = function(b, c) {
    return new kt(this.pa, this.D, this.name, this.v, this.Qd, this.kh, this.B, this.eg, this.type, this.dg, this.jh, this.uh, c);
  });
  return new kt(k, l, g, p, e, d, c, k, f, e, b, mt, null);
};
function ot(a, b) {
  var c = N(a) ? J.c(S, a) : a, d = I.c(c, vk), e = I.c(c, Uk), c = I.c(c, ej), f = q(c) ? c : Ze, e = q(e) ? e : Ze, d = q(d) ? d : Ze;
  return b < G(f) ? new Q(null, 2, 5, R, [Oh, I.c(c, b)], null) : b < G(f) + G(e) ? new Q(null, 2, 5, R, [hi, I.c(e, b - G(f))], null) : new Q(null, 2, 5, R, [xk, I.c(d, b - G(f) - G(e))], null);
}
function pt(a, b, c, d) {
  a = a.keyCode;
  if (q(yd.c ? yd.c(27, a) : yd.call(null, 27, a))) {
    return d = Fo.c(c, "search-component"), d = null == d ? null : wr.d(d), null == d ? null : d.toggle();
  }
  if (q(yd.c ? yd.c(13, a) : yd.call(null, 13, a))) {
    a = ot(Vb(b), function() {
      var a = ko.c(c, si);
      return q(a) ? a : 0;
    }());
    b = H.e(a, 0, null);
    a = H.e(a, 1, null);
    var e = Fo.c(c, "search-component"), e = null == e ? null : wr.d(e);
    null == e || e.toggle();
    return Op.c(d, new Q(null, 2, 5, R, [Gk, new Q(null, 2, 5, R, [b, jt(b, a)], null)], null));
  }
  return q(yd.c ? yd.c(38, a) : yd.call(null, 38, a)) ? Go(c, si, function() {
    var a = ko.c(c, si);
    return q(a) ? a : 0;
  }() - 1) : q(yd.c ? yd.c(40, a) : yd.call(null, 40, a)) ? Go(c, si, function() {
    var a = ko.c(c, si);
    return q(a) ? a : 0;
  }() + 1) : null;
}
var rt = function qt(b, c) {
  var d = N(b) ? J.c(S, b) : b, e = I.c(d, oi), e = N(e) ? J.c(S, e) : e, f = I.c(e, Lj), g = I.c(e, Ek), k = I.c(d, Ug), l = I.c(d, Jj), p = lo.d(c), p = N(p) ? J.c(S, p) : p, t = I.c(p, Qk), w = I.c(p, mi), t = ke.c(t, k), D = N(l) ? J.c(S, l) : l, M = I.c(D, vk), O = I.c(D, Uk), Z = I.c(D, ej);
  "undefined" === typeof lt && (lt = function(b, c, d, e, f, g, k, l, p, w, t, D, M, O, Z, Jh, Kh) {
    this.Ed = b;
    this.hg = c;
    this.ig = d;
    this.zh = e;
    this.D = f;
    this.Pd = g;
    this.gg = k;
    this.lh = l;
    this.view = p;
    this.fg = w;
    this.sh = t;
    this.v = D;
    this.yh = M;
    this.B = O;
    this.pd = Z;
    this.Se = Jh;
    this.zg = Kh;
    this.r = 0;
    this.k = 393216;
  }, lt.R = !0, lt.Q = "clustermap.components.search/t34487", lt.U = function(b, c) {
    return jc(c, "clustermap.components.search/t34487");
  }, lt.prototype.Ie = !0, lt.prototype.Nd = function(b, c) {
    var d = this;
    return React.DOM.div({ref:"search-component", className:"search-component", id:"search", onKeyDown:function(b) {
      return pt(b, d.Se, d.B, d.v);
    }}, React.DOM.div({className:"tbl"}, React.DOM.div({className:"tbl-cell", style:{width:"100%"}}, rn.d ? rn.d({ref:"search-field", type:"text", placeholder:"Search", onChange:function(b) {
      return Op.c(d.v, new Q(null, 2, 5, R, [vh, b.target.value], null));
    }}) : rn.call(null, {ref:"search-field", type:"text", placeholder:"Search", onChange:function(b) {
      return Op.c(d.v, new Q(null, 2, 5, R, [vh, b.target.value], null));
    }})), React.DOM.div({className:"tbl-cell", style:{width:"34"}}, React.DOM.button({type:"reset", onClick:function() {
      Op.c(d.v, new Q(null, 2, 5, R, [vh, ""], null));
      return Fo.c(d.B, "search-field").value = "";
    }}, "\u00d7"))), V(q(function() {
      var b = de(d.pd);
      if (q(b)) {
        return b;
      }
      b = de(d.Pd);
      return q(b) ? b : de(d.Ed);
    }()) ? function() {
      var b = le.e(bf, re(Jc, 0), d.pd), e = le.e(bf, re(Jc, G(b)), d.Pd), f = le.e(bf, re(Jc, G(b) + G(e)), d.Ed), g = vd(function() {
        var b = si.d(c);
        return q(b) ? b : 0;
      }(), G(b) + G(e) + G(f));
      ce.c(g, si.d(c)) && Go(d.B, si, g);
      return new Q(null, 3, 5, R, [Gh, new n(null, 1, [bi, "search-results"], null), new Q(null, 4, 5, R, [hh, q(de(b)) ? Be(new Q(null, 2, 5, R, [Gh, new Q(null, 3, 5, R, [Nk, new n(null, 1, [bi, "search-results-header"], null), "Constituencies"], null)], null), function() {
        return function Ab(b) {
          return new Md(null, function() {
            for (;;) {
              var c = z(b);
              if (c) {
                var e = c;
                if (ld(e)) {
                  var f = vc(e), k = G(f), l = Qd(k);
                  return function() {
                    for (var b = 0;;) {
                      if (b < k) {
                        var p = Bb.c(f, b), w = H.e(p, 0, null), t = H.e(p, 1, null);
                        Ud(l, Ao.e(nt, t, new n(null, 4, [ik, new n(null, 2, [mi, d.v, Qk, d.D], null), Fh, new n(null, 1, [Fk, x.c(w, g)], null), Bk, function() {
                          return function(b) {
                            return $c.f(b, Lj, Oh, E([Ck, I.c(b, Ph), Kj, [v("constituency:"), v(I.c(b, Ph))].join("")], 0));
                          };
                        }(b, p, w, t, f, k, l, e, c), ai, Kj], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.aa(), Ab(wc(e))) : Td(l.aa(), null);
                }
                var p = A(e), w = H.e(p, 0, null), t = H.e(p, 1, null);
                return F(Ao.e(nt, t, new n(null, 4, [ik, new n(null, 2, [mi, d.v, Qk, d.D], null), Fh, new n(null, 1, [Fk, x.c(w, g)], null), Bk, function() {
                  return function(b) {
                    return $c.f(b, Lj, Oh, E([Ck, I.c(b, Ph), Kj, [v("constituency:"), v(I.c(b, Ph))].join("")], 0));
                  };
                }(p, w, t, e, c), ai, Kj], null)), Ab(B(e)));
              }
              return null;
            }
          }, null, null);
        }(b);
      }()) : null, q(de(e)) ? Be(new Q(null, 2, 5, R, [Gh, new Q(null, 3, 5, R, [Nk, new n(null, 1, [bi, "search-results-header"], null), "Investor-backed companies"], null)], null), function() {
        return function Ab(b) {
          return new Md(null, function() {
            for (;;) {
              var c = z(b);
              if (c) {
                var e = c;
                if (ld(e)) {
                  var f = vc(e), k = G(f), l = Qd(k);
                  return function() {
                    for (var b = 0;;) {
                      if (b < k) {
                        var p = Bb.c(f, b), w = H.e(p, 0, null), t = H.e(p, 1, null);
                        Ud(l, Ao.e(nt, t, new n(null, 4, [ik, new n(null, 2, [mi, d.v, Qk, d.D], null), Fh, new n(null, 1, [Fk, x.c(w, g)], null), Bk, function() {
                          return function(b) {
                            return $c.f(b, Lj, hi, E([Ck, I.c(b, mh), Kj, [v("portfolio-company:"), v(I.c(b, mh))].join("")], 0));
                          };
                        }(b, p, w, t, f, k, l, e, c), ai, Kj], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.aa(), Ab(wc(e))) : Td(l.aa(), null);
                }
                var p = A(e), w = H.e(p, 0, null), t = H.e(p, 1, null);
                return F(Ao.e(nt, t, new n(null, 4, [ik, new n(null, 2, [mi, d.v, Qk, d.D], null), Fh, new n(null, 1, [Fk, x.c(w, g)], null), Bk, function() {
                  return function(b) {
                    return $c.f(b, Lj, hi, E([Ck, I.c(b, mh), Kj, [v("portfolio-company:"), v(I.c(b, mh))].join("")], 0));
                  };
                }(p, w, t, e, c), ai, Kj], null)), Ab(B(e)));
              }
              return null;
            }
          }, null, null);
        }(e);
      }()) : null, q(de(f)) ? Be(new Q(null, 2, 5, R, [Gh, new Q(null, 3, 5, R, [Nk, new n(null, 1, [bi, "search-results-header"], null), "Investors"], null)], null), function() {
        return function Ab(b) {
          return new Md(null, function() {
            for (;;) {
              var c = z(b);
              if (c) {
                var e = c;
                if (ld(e)) {
                  var f = vc(e), k = G(f), l = Qd(k);
                  return function() {
                    for (var b = 0;;) {
                      if (b < k) {
                        var p = Bb.c(f, b), w = H.e(p, 0, null), t = H.e(p, 1, null);
                        Ud(l, Ao.e(nt, t, new n(null, 4, [ik, new n(null, 2, [mi, d.v, Qk, d.D], null), Fh, new n(null, 1, [Fk, x.c(w, g)], null), Bk, function() {
                          return function(b) {
                            return $c.f(b, Lj, xk, E([Ck, I.c(b, Vi), Kj, [v("investor-company:"), v(I.c(b, Vi))].join("")], 0));
                          };
                        }(b, p, w, t, f, k, l, e, c), ai, Kj], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.aa(), Ab(wc(e))) : Td(l.aa(), null);
                }
                var p = A(e), w = H.e(p, 0, null), t = H.e(p, 1, null);
                return F(Ao.e(nt, t, new n(null, 4, [ik, new n(null, 2, [mi, d.v, Qk, d.D], null), Fh, new n(null, 1, [Fk, x.c(w, g)], null), Bk, function() {
                  return function(b) {
                    return $c.f(b, Lj, xk, E([Ck, I.c(b, Vi), Kj, [v("investor-company:"), v(I.c(b, Vi))].join("")], 0));
                  };
                }(p, w, t, e, c), ai, Kj], null)), Ab(B(e)));
              }
              return null;
            }
          }, null, null);
        }(f);
      }()) : null], null)], null);
    }() : null));
  }, lt.prototype.w = function() {
    return this.zg;
  }, lt.prototype.A = function(b, c) {
    return new lt(this.Ed, this.hg, this.ig, this.zh, this.D, this.Pd, this.gg, this.lh, this.view, this.fg, this.sh, this.v, this.yh, this.B, this.pd, this.Se, c);
  });
  return new lt(M, p, D, g, t, O, e, b, k, d, qt, w, f, c, Z, l, null);
};
var st;
function tt(a) {
  if (a ? a.vd : a) {
    return a.vd(a);
  }
  var b;
  b = tt[m(null == a ? null : a)];
  if (!b && (b = tt._, !b)) {
    throw u("Event.prevent-default", a);
  }
  return b.call(null, a);
}
function ut(a) {
  if (a ? a.re : a) {
    return a.Ja.target;
  }
  var b;
  b = ut[m(null == a ? null : a)];
  if (!b && (b = ut._, !b)) {
    throw u("Event.target", a);
  }
  return b.call(null, a);
}
var vt = window.document.documentElement, xt = function wt(b) {
  return function(c) {
    b.d ? b.d(function() {
      "undefined" === typeof st && (st = function(b, c, f, g) {
        this.Ja = b;
        this.Ka = c;
        this.qd = f;
        this.Id = g;
        this.r = 0;
        this.k = 393472;
      }, st.R = !0, st.Q = "domina.events/t39077", st.U = function(b, c) {
        return jc(c, "domina.events/t39077");
      }, st.prototype.L = function(b, c) {
        var f = this.Ja[c];
        return q(f) ? f : this.Ja[Kd(c)];
      }, st.prototype.M = function(b, c, f) {
        b = Hb.c(this, c);
        return q(b) ? b : f;
      }, st.prototype.vd = function() {
        return this.Ja.preventDefault();
      }, st.prototype.re = function() {
        return this.Ja.target;
      }, st.prototype.w = function() {
        return this.Id;
      }, st.prototype.A = function(b, c) {
        return new st(this.Ja, this.Ka, this.qd, c);
      });
      return new st(c, b, wt, null);
    }()) : b.call(null, function() {
      "undefined" === typeof st && (st = function(b, c, f, g) {
        this.Ja = b;
        this.Ka = c;
        this.qd = f;
        this.Id = g;
        this.r = 0;
        this.k = 393472;
      }, st.R = !0, st.Q = "domina.events/t39077", st.U = function(b, c) {
        return jc(c, "domina.events/t39077");
      }, st.prototype.L = function(b, c) {
        var f = this.Ja[c];
        return q(f) ? f : this.Ja[Kd(c)];
      }, st.prototype.M = function(b, c, f) {
        b = Hb.c(this, c);
        return q(b) ? b : f;
      }, st.prototype.vd = function() {
        return this.Ja.preventDefault();
      }, st.prototype.re = function() {
        return this.Ja.target;
      }, st.prototype.w = function() {
        return this.Id;
      }, st.prototype.A = function(b, c) {
        return new st(this.Ja, this.Ka, this.qd, c);
      });
      return new st(c, b, wt, null);
    }());
    return!0;
  };
};
function yt(a, b, c) {
  var d = xt(c), e = Kd(b);
  return ig.d(function() {
    return function g(a) {
      return new Md(null, function() {
        for (;;) {
          var b = z(a);
          if (b) {
            if (ld(b)) {
              var c = vc(b), t = G(c), w = Qd(t);
              a: {
                for (var D = 0;;) {
                  if (D < t) {
                    var M = Bb.c(c, D), M = q(!1) ? Ll(M, e, d, !1) : Hl(M, e, d, !1);
                    w.add(M);
                    D += 1;
                  } else {
                    c = !0;
                    break a;
                  }
                }
                c = void 0;
              }
              return c ? Td(w.aa(), g(wc(b))) : Td(w.aa(), null);
            }
            w = A(b);
            return F(q(!1) ? Ll(w, e, d, !1) : Hl(w, e, d, !1), g(B(b)));
          }
          return null;
        }
      }, null, null);
    }(bs(a));
  }());
}
var zt = function() {
  function a(a, d) {
    return b.e(vt, a, d);
  }
  var b = null, b = function(b, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, d);
      case 3:
        return yt(b, d, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = a;
  b.e = function(a, b, e) {
    return yt(a, b, e);
  };
  return b;
}();
function At() {
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
var Bt = function() {
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
    Vc = c.contentType && "application/xml" == c.contentType || hl && (c.doctype || "[object XMLDocument]" == e.toString()) || !!e && (il ? e.xml : c.xmlVersion || e.xmlVersion);
    return(e = d(a)(c)) && e.Dc ? e : b(e);
  }
  function b(a) {
    if (a && a.Dc) {
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
    ge++;
    if (il && Vc) {
      var c = ge + "";
      a[0].setAttribute("_zipIdx", c);
      for (var d = 1, e;e = a[d];d++) {
        a[d].getAttribute("_zipIdx") != c && b.push(e), e.setAttribute("_zipIdx", c);
      }
    } else {
      if (il && a.Cf) {
        try {
          for (d = 1;e = a[d];d++) {
            U(e) && b.push(e);
          }
        } catch (f) {
        }
      } else {
        for (a[0] && (a[0]._zipIdx = ge), d = 1;e = a[d];d++) {
          a[d]._zipIdx != ge && b.push(e), e._zipIdx = ge;
        }
      }
    }
    return b;
  }
  function c(a, b) {
    if (!b) {
      return 1;
    }
    var c = cu(a);
    return b[c] ? 0 : b[c] = 1;
  }
  function d(a, b) {
    if (qp) {
      var c = Kh[a];
      if (c && !b) {
        return c;
      }
    }
    if (c = Jh[a]) {
      return c;
    }
    var c = a.charAt(0), f = -1 == a.indexOf(" ");
    0 <= a.indexOf("#") && f && (b = !0);
    if (!qp || b || -1 != "\x3e~+".indexOf(c) || il && -1 != a.indexOf(":") || hb && 0 <= a.indexOf(".") || -1 != a.indexOf(":contains") || -1 != a.indexOf("|\x3d")) {
      var g = a.split(/\s*,\s*/);
      return Jh[a] = 2 > g.length ? e(a) : function(a) {
        for (var b = 0, c = [], d;d = g[b++];) {
          c = c.concat(e(d)(a));
        }
        return c;
      };
    }
    var k = 0 <= "\x3e~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return Kh[a] = function(b) {
      try {
        if (9 != b.nodeType && !f) {
          throw "";
        }
        var c = b.querySelectorAll(k);
        il ? c.Cf = !0 : c.Dc = !0;
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
          a.Dc = !0;
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
        0 < d && (g = {}, k.Dc = !0);
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
    var b = Im[a.Pb];
    if (b) {
      return b;
    }
    var c = a.ye, c = c ? c.Hc : "", d = p(a, {Gb:1}), e = "*" == a.Ga, f = document.getElementsByClassName;
    if (c) {
      f = {Gb:1}, e && (f.Ga = 1), d = p(a, f), "+" == c ? b = l(d) : "~" == c ? b = k(d) : "\x3e" == c && (b = g(d));
    } else {
      if (a.id) {
        d = !a.De && e ? At : p(a, {Gb:1, id:1}), b = function(b, c) {
          var e;
          e = b ? new Xm(Wm(b)) : Mm || (Mm = new Xm);
          var f = a.id;
          if ((f = (e = ia(f) ? e.sd.getElementById(f) : f) && d(e)) && !(f = 9 == b.nodeType)) {
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
        if (f && /\{\s*\[native code\]\s*\}/.test(String(f)) && a.Va.length && !hb) {
          var d = p(a, {Gb:1, Va:1, id:1}), w = a.Va.join(" "), b = function(a, b) {
            for (var c = gb(0, b), e, f = 0, g = a.getElementsByClassName(w);e = g[f++];) {
              d(e, a) && c.push(e);
            }
            return c;
          }
        } else {
          e || a.De ? (d = p(a, {Gb:1, Ga:1, id:1}), b = function(b, c) {
            for (var e = gb(0, c), f, g = 0, k = b.getElementsByTagName(a.Ad());f = k[g++];) {
              d(f, b) && e.push(f);
            }
            return e;
          }) : b = function(b, c) {
            for (var d = gb(0, c), e, f = 0, g = b.getElementsByTagName(a.Ad());e = g[f++];) {
              d.push(e);
            }
            return d;
          };
        }
      }
    }
    return Im[a.Pb] = b;
  }
  function g(a) {
    a = a || At;
    return function(b, d, e) {
      for (var f = 0, g = b[qb];b = g[f++];) {
        eg(b) && (!e || c(b, e)) && a(b, f) && d.push(b);
      }
      return d;
    };
  }
  function k(a) {
    return function(b, d, e) {
      for (b = b[Ee];b;) {
        if (eg(b)) {
          if (e && !c(b, e)) {
            break;
          }
          a(b) && d.push(b);
        }
        b = b[Ee];
      }
      return d;
    };
  }
  function l(a) {
    return function(b, d, e) {
      for (;b = b[Ee];) {
        if (!Ab || U(b)) {
          e && !c(b, e) || !a(b) || d.push(b);
          break;
        }
      }
      return d;
    };
  }
  function p(a, b) {
    if (!a) {
      return At;
    }
    b = b || {};
    var c = null;
    b.Gb || (c = aa(c, U));
    b.Ga || "*" != a.Ga && (c = aa(c, function(b) {
      return b && b.tagName == a.Ad();
    }));
    b.Va || Ja(a.Va, function(a, b) {
      var d = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
      c = aa(c, function(a) {
        return d.test(a.className);
      });
      c.count = b;
    });
    b.tb || Ja(a.tb, function(a) {
      var b = a.name;
      Oj[b] && (c = aa(c, Oj[b](b, a.value)));
    });
    b.jc || Ja(a.jc, function(a) {
      var b, d = a.Rc;
      a.type && kf[a.type] ? b = kf[a.type](d, a.Hd) : d.length && (b = Cq(d));
      b && (c = aa(c, b));
    });
    b.id || a.id && (c = aa(c, function(b) {
      return!!b && b.id == a.id;
    }));
    c || "default" in b || (c = At);
    return c;
  }
  function t(a) {
    return D(a) % 2;
  }
  function w(a) {
    return!(D(a) % 2);
  }
  function D(a) {
    var b = a.parentNode, c = 0, d = b[qb], e = a._i || -1, f = b._l || -1;
    if (!d) {
      return-1;
    }
    d = d.length;
    if (f == d && 0 <= e && 0 <= f) {
      return e;
    }
    b._l = d;
    e = -1;
    for (b = b.firstElementChild || b.firstChild;b;b = b[Ee]) {
      eg(b) && (b._i = ++c, a === b && (e = c));
    }
    return e;
  }
  function M(a) {
    for (;a = a[Ee];) {
      if (eg(a)) {
        return!1;
      }
    }
    return!0;
  }
  function O(a) {
    for (;a = a[Bq];) {
      if (eg(a)) {
        return!1;
      }
    }
    return!0;
  }
  function Z(a, b) {
    return a ? "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (Vc ? a.getAttribute(b) : a.getAttribute(b, 2)) || "" : "";
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
      0 <= p && (U.id = c(p, O).replace(/\\/g, ""), p = -1);
      if (0 <= w) {
        var a = w == O ? null : c(w, O);
        0 > "\x3e~+".indexOf(a) ? U.Ga = a : U.Hc = a;
        w = -1;
      }
      0 <= l && (U.Va.push(c(l + 1, O).replace(/\\/g, "")), l = -1);
    }
    function c(b, d) {
      return va(a.slice(b, d));
    }
    a = 0 <= "\x3e~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
    for (var d = [], e = -1, f = -1, g = -1, k = -1, l = -1, p = -1, w = -1, t = "", D = "", M, O = 0, Z = a.length, U = null, aa = null;t = D, D = a.charAt(O), O < Z;O++) {
      "\\" != t && (U || (M = O, U = {Pb:null, tb:[], jc:[], Va:[], Ga:null, Hc:null, id:null, Ad:function() {
        return Vc ? this.bh : this.Ga;
      }}, w = O), 0 <= e ? "]" == D ? (aa.Rc ? aa.Hd = c(g || e + 1, O) : aa.Rc = c(e + 1, O), !(e = aa.Hd) || '"' != e.charAt(0) && "'" != e.charAt(0) || (aa.Hd = e.slice(1, -1)), U.jc.push(aa), aa = null, e = g = -1) : "\x3d" == D && (g = 0 <= "|~^$*".indexOf(t) ? t : "", aa.type = g + D, aa.Rc = c(e + 1, O - g.length), g = O + 1) : 0 <= f ? ")" == D && (0 <= k && (aa.value = c(f + 1, O)), k = f = -1) : "#" == D ? (b(), p = O + 1) : "." == D ? (b(), l = O) : ":" == D ? (b(), k = O) : "[" == D ? 
      (b(), e = O, aa = {}) : "(" == D ? (0 <= k && (aa = {name:c(k + 1, O), value:null}, U.tb.push(aa)), f = O) : " " == D && t != D && (b(), 0 <= k && U.tb.push({name:c(k + 1, O)}), U.De = U.tb.length || U.jc.length || U.Va.length, U.aj = U.Pb = c(M, O), U.bh = U.Ga = U.Hc ? null : U.Ga || "*", U.Ga && (U.Ga = U.Ga.toUpperCase()), d.length && d[d.length - 1].Hc && (U.ye = d.pop(), U.Pb = U.ye.Pb + " " + U.Pb), d.push(U), U = null));
    }
    return d;
  }
  function gb(a, b) {
    var c = b || [];
    a && c.push(a);
    return c;
  }
  var hb = kl && "BackCompat" == document.compatMode, qb = document.firstChild.children ? "children" : "childNodes", Vc = !1, kf = {"*\x3d":function(a, b) {
    return function(c) {
      return 0 <= Z(c, a).indexOf(b);
    };
  }, "^\x3d":function(a, b) {
    return function(c) {
      return 0 == Z(c, a).indexOf(b);
    };
  }, "$\x3d":function(a, b) {
    return function(c) {
      c = " " + Z(c, a);
      return c.lastIndexOf(b) == c.length - b.length;
    };
  }, "~\x3d":function(a, b) {
    var c = " " + b + " ";
    return function(b) {
      return 0 <= (" " + Z(b, a) + " ").indexOf(c);
    };
  }, "|\x3d":function(a, b) {
    b = " " + b;
    return function(c) {
      c = " " + Z(c, a);
      return c == b || 0 == c.indexOf(b + "-");
    };
  }, "\x3d":function(a, b) {
    return function(c) {
      return Z(c, a) == b;
    };
  }}, Ab = "undefined" == typeof document.firstChild.nextElementSibling, Ee = Ab ? "nextSibling" : "nextElementSibling", Bq = Ab ? "previousSibling" : "previousElementSibling", eg = Ab ? U : At, Oj = {checked:function() {
    return function(a) {
      return a.checked || a.attributes.checked;
    };
  }, "first-child":function() {
    return O;
  }, "last-child":function() {
    return M;
  }, "only-child":function() {
    return function(a) {
      return O(a) && M(a) ? !0 : !1;
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
    var c = Ia(b)[0], d = {Gb:1};
    "*" != c.Ga && (d.Ga = 1);
    c.Va.length || (d.Va = 1);
    var e = p(c, d);
    return function(a) {
      return!e(a);
    };
  }, "nth-child":function(a, b) {
    if ("odd" == b) {
      return t;
    }
    if ("even" == b) {
      return w;
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
  }}, Cq = il ? function(a) {
    var b = a.toLowerCase();
    "class" == b && (a = "className");
    return function(c) {
      return Vc ? c.getAttribute(a) : c[a] || c[b];
    };
  } : function(a) {
    return function(b) {
      return b && b.getAttribute && b.hasAttribute(a);
    };
  }, Im = {}, Jh = {}, Kh = {}, qp = !!document.querySelectorAll && (!kl || tl("526")), ge = 0, cu = il ? function(a) {
    return Vc ? a.getAttribute("_uid") || a.setAttribute("_uid", ++ge) || ge : a.uniqueID;
  } : function(a) {
    return a._uid || (a._uid = ++ge);
  };
  a.tb = Oj;
  return a;
}();
da("goog.dom.query", Bt);
da("goog.dom.query.pseudos", Bt.tb);
var Ct, Dt = function() {
  function a(a, b) {
    "undefined" === typeof Ct && (Ct = function(a, b, c, d) {
      this.pb = a;
      this.gb = b;
      this.xh = c;
      this.Hg = d;
      this.r = 0;
      this.k = 393216;
    }, Ct.R = !0, Ct.Q = "domina.css/t39720", Ct.U = function(a, b) {
      return jc(b, "domina.css/t39720");
    }, Ct.prototype.Eb = function() {
      var a = this;
      return ve.c(function(b) {
        return js(Bt(a.pb, b));
      }, bs(a.gb));
    }, Ct.prototype.ud = function() {
      var a = this;
      return A(xe(ie(ib), ve.c(function(b) {
        return js(Bt(a.pb, b));
      }, bs(a.gb))));
    }, Ct.prototype.w = function() {
      return this.Hg;
    }, Ct.prototype.A = function(a, b) {
      return new Ct(this.pb, this.gb, this.xh, b);
    });
    return new Ct(b, a, c, null);
  }
  function b(a) {
    return c.c(Tm()[0], a);
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
  c.d = b;
  c.c = a;
  return c;
}();
function Et() {
  zt.e(Dt.d("#nav .search \x3e a"), Ci, function(a) {
    var b = ut(a), b = os.c(b, "..");
    tt(a);
    a = z(bs(b));
    for (var b = null, c = 0, d = 0;;) {
      if (d < c) {
        var e = b.C(null, d);
        Sm(e);
        d += 1;
      } else {
        if (a = z(a)) {
          b = a, ld(b) ? (a = vc(b), d = wc(b), b = a, c = G(a), a = d) : (a = A(b), Sm(a), a = C(b), b = null, c = 0), d = 0;
        } else {
          break;
        }
      }
    }
    return wr.d(A(Dt.d("#search").Eb(null))).toggle();
  });
}
function Ft() {
  zt.e(Dt.d("#map-report \x3e a"), Ci, function(a) {
    ut(a);
    var b = Dt.d("#map-report");
    tt(a);
    a = cs(b);
    a = La(Om(a), "open");
    if (q(a)) {
      return es(b, "open"), wr.d(A(b.Eb(null))).cf(Jg(new n(null, 1, ["right", "-270px"], null)), 400);
    }
    ds(b, "open");
    return wr.d(A(b.Eb(null))).cf(Jg(new n(null, 1, ["right", "0px"], null)), 400);
  });
}
var Gt = new n(null, 2, ["map", "view-map", "lists", "view-lists"], null);
function Ht(a) {
  for (var b = z(Gt), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.C(null, e), g = H.e(f, 0, null), k = H.e(f, 1, null);
      zt.e(Dt.d([v("#nav ."), v(g), v(" \x3e a")].join("")), Ci, function(b, c, d, e, f, g) {
        return function(b) {
          tt(b);
          return Op.c(a, new Q(null, 2, 5, R, [Ak, g], null));
        };
      }(b, c, d, e, f, g, k));
      e += 1;
    } else {
      var l = z(b);
      if (l) {
        f = l;
        if (ld(f)) {
          b = vc(f), e = wc(f), c = b, d = G(b), b = e;
        } else {
          var p = A(f), g = H.e(p, 0, null), k = H.e(p, 1, null);
          zt.e(Dt.d([v("#nav ."), v(g), v(" \x3e a")].join("")), Ci, function(b, c, d, e, f, g) {
            return function(b) {
              tt(b);
              return Op.c(a, new Q(null, 2, 5, R, [Ak, g], null));
            };
          }(b, c, d, e, p, g, k, f, l));
          b = C(f);
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
function It(a) {
  wr.d("[data-toggle\x3d'tooltip']").Eh();
  Et();
  Ft();
  Ht(a);
}
;var Jt = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = E(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    e = H.e(e, 0, null);
    return 1 === a ? b : q(e) ? e : [v(b), v("s")].join("");
  }
  a.m = 2;
  a.j = function(a) {
    var d = A(a);
    a = C(a);
    var e = A(a);
    a = B(a);
    return b(d, e, a);
  };
  a.f = b;
  return a;
}();
var Kt, Lt, Mt, Nt;
function Ot(a) {
  return React.DOM.button({className:"btn", type:"button", onClick:function() {
    return Op.c(a, new Q(null, 2, 5, R, [Ak, "lists"], null));
  }}, React.DOM.i({className:"icon-lists-sm"}), "Full report");
}
function Pt(a) {
  return new n(null, 3, [Ai, null == a ? null : ah.d(a), Gj, null == a ? null : Mi.d(a), Tg, null == a ? null : mj.d(a)], null);
}
var Rt = function Qt(b, c) {
  var d = Pt(b), d = N(d) ? J.c(S, d) : d, e = I.c(d, Tg), f = I.c(d, Gj), g = I.c(d, Ai);
  "undefined" === typeof Kt && (Kt = function(b, c, d, e, f, g, M, O) {
    this.qa = b;
    this.na = c;
    this.ha = d;
    this.Yf = e;
    this.v = f;
    this.X = g;
    this.bf = M;
    this.tg = O;
    this.r = 0;
    this.k = 393216;
  }, Kt.R = !0, Kt.Q = "clustermap.components.map-report/t34188", Kt.U = function(b, c) {
    return jc(c, "clustermap.components.map-report/t34188");
  }, Kt.prototype.Ea = !0, Kt.prototype.Aa = function() {
    var b = this;
    return React.DOM.div(null, React.DOM.header({className:"secondary"}, React.DOM.h2(null, "All investor-backed companies"), React.DOM.h3(null, "UK wide")), React.DOM.ul(null, function() {
      var c = Y.e ? Y.e(b.qa, y, "-") : Y.call(null, b.qa, y, "-");
      return K(c) ? React.DOM.li(W(c), React.DOM.small(null, "Investor-backed companies")) : React.DOM.li(null, V(c), React.DOM.small(null, "Investor-backed companies"));
    }(), function() {
      var c = Y.e ? Y.e(b.na, y, "-") : Y.call(null, b.na, y, "-");
      return K(c) ? React.DOM.li(W(c), React.DOM.small(null, "Investors")) : React.DOM.li(null, V(c), React.DOM.small(null, "Investors"));
    }(), function() {
      var c = Y.e ? Y.e(b.ha, y, "-") : Y.call(null, b.ha, y, "-");
      return K(c) ? React.DOM.li(W(c), function() {
        var c = Jt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Jt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Lo.q ? Lo.q(function() {
        var c = b.X, c = null == c ? null : Ij.d(c);
        return null == c ? null : Th.d(c);
      }(), Yj, 2, y, "-") : Lo.call(null, function() {
        var c = b.X, c = null == c ? null : Ij.d(c);
        return null == c ? null : Th.d(c);
      }(), Yj, 2, y, "-");
      return K(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total revenue")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total revenue"));
    }(), function() {
      var c = Y.q ? Y.q(function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-") : Y.call(null, function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-");
      return K(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total employees")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total employees"));
    }()), V(Ot(b.v)));
  }, Kt.prototype.w = function() {
    return this.tg;
  }, Kt.prototype.A = function(b, c) {
    return new Kt(this.qa, this.na, this.ha, this.Yf, this.v, this.X, this.bf, c);
  });
  return new Kt(g, f, e, d, c, b, Qt, null);
}, Tt = function St(b, c, d, e) {
  var f = Pt(c), f = N(f) ? J.c(S, f) : f, g = I.c(f, Tg), k = I.c(f, Gj), l = I.c(f, Ai);
  "undefined" === typeof Lt && (Lt = function(b, c, d, e, f, g, k, l, aa, Ia) {
    this.qa = b;
    this.na = c;
    this.ha = d;
    this.Zf = e;
    this.D = f;
    this.v = g;
    this.X = k;
    this.Jc = l;
    this.oh = aa;
    this.ug = Ia;
    this.r = 0;
    this.k = 393216;
  }, Lt.R = !0, Lt.Q = "clustermap.components.map-report/t34244", Lt.U = function(b, c) {
    return jc(c, "clustermap.components.map-report/t34244");
  }, Lt.prototype.Ea = !0, Lt.prototype.Aa = function() {
    var b = this;
    return React.DOM.div(null, React.DOM.header({className:"secondary"}, React.DOM.h2(null, "Investor-backed company"), function() {
      var c = qi.d(b.Jc);
      return K(c) ? React.DOM.h3(W(c), null) : React.DOM.h3(null, V(c));
    }(), V(Kr(b.D))), React.DOM.ul(null, function() {
      var c = Y.d ? Y.d(b.na) : Y.call(null, b.na);
      return K(c) ? React.DOM.li(W(c), function() {
        var c = Jt(b.na, "Investor");
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Jt(b.na, "Investor");
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Y.d ? Y.d(b.ha) : Y.call(null, b.ha);
      return K(c) ? React.DOM.li(W(c), function() {
        var c = Jt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Jt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Lo.q ? Lo.q(function() {
        var c = b.X, c = null == c ? null : Ij.d(c);
        return null == c ? null : Th.d(c);
      }(), Yj, 2, y, "-") : Lo.call(null, function() {
        var c = b.X, c = null == c ? null : Ij.d(c);
        return null == c ? null : Th.d(c);
      }(), Yj, 2, y, "-");
      return K(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total revenue")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total revenue"));
    }(), function() {
      var c = Y.q ? Y.q(function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-") : Y.call(null, function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-");
      return K(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total employees")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total employees"));
    }()), V(Ot(b.v)));
  }, Lt.prototype.w = function() {
    return this.ug;
  }, Lt.prototype.A = function(b, c) {
    return new Lt(this.qa, this.na, this.ha, this.Zf, this.D, this.v, this.X, this.Jc, this.oh, c);
  });
  return new Lt(l, k, g, f, e, d, c, b, St, null);
}, Vt = function Ut(b, c, d, e) {
  var f = Pt(c), f = N(f) ? J.c(S, f) : f, g = I.c(f, Tg), k = I.c(f, Gj), l = I.c(f, Ai);
  "undefined" === typeof Mt && (Mt = function(b, c, d, e, f, g, k, l, aa, Ia) {
    this.qa = b;
    this.na = c;
    this.ha = d;
    this.$f = e;
    this.D = f;
    this.v = g;
    this.X = k;
    this.Ae = l;
    this.Pf = aa;
    this.vg = Ia;
    this.r = 0;
    this.k = 393216;
  }, Mt.R = !0, Mt.Q = "clustermap.components.map-report/t34294", Mt.U = function(b, c) {
    return jc(c, "clustermap.components.map-report/t34294");
  }, Mt.prototype.Ea = !0, Mt.prototype.Aa = function() {
    var b = this;
    return React.DOM.div(null, React.DOM.header({className:"secondary"}, React.DOM.h2(null, "Investor"), function() {
      var c = qi.d(b.Ae);
      return K(c) ? React.DOM.h3(W(c), null) : React.DOM.h3(null, V(c));
    }(), V(Kr(b.D))), React.DOM.ul(null, function() {
      var c = Y.d ? Y.d(b.qa) : Y.call(null, b.qa);
      return K(c) ? React.DOM.li(W(c), function() {
        var c = Jt.f(b.qa, "Investor-backed company", E(["Investor-backed companies"], 0));
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Jt.f(b.qa, "Investor-backed company", E(["Investor-backed companies"], 0));
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Y.d ? Y.d(b.ha) : Y.call(null, b.ha);
      return K(c) ? React.DOM.li(W(c), function() {
        var c = Jt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Jt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Lo.q ? Lo.q(function() {
        var c = b.X, c = null == c ? null : Ij.d(c);
        return null == c ? null : Th.d(c);
      }(), Yj, 2, y, "-") : Lo.call(null, function() {
        var c = b.X, c = null == c ? null : Ij.d(c);
        return null == c ? null : Th.d(c);
      }(), Yj, 2, y, "-");
      return K(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total revenue")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total revenue"));
    }(), function() {
      var c = Y.q ? Y.q(function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-") : Y.call(null, function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-");
      return K(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total employees")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total employees"));
    }()), V(Ot(b.v)));
  }, Mt.prototype.w = function() {
    return this.vg;
  }, Mt.prototype.A = function(b, c) {
    return new Mt(this.qa, this.na, this.ha, this.$f, this.D, this.v, this.X, this.Ae, this.Pf, c);
  });
  return new Mt(l, k, g, f, e, d, c, b, Ut, null);
}, Xt = function Wt(b, c, d, e) {
  var f = Pt(c), f = N(f) ? J.c(S, f) : f, g = I.c(f, Tg), k = I.c(f, Gj), l = I.c(f, Ai);
  "undefined" === typeof Nt && (Nt = function(b, c, d, e, f, g, k, l, aa, Ia) {
    this.qa = b;
    this.na = c;
    this.ha = d;
    this.ag = e;
    this.D = f;
    this.v = g;
    this.X = k;
    this.Sa = l;
    this.Hf = aa;
    this.wg = Ia;
    this.r = 0;
    this.k = 393216;
  }, Nt.R = !0, Nt.Q = "clustermap.components.map-report/t34348", Nt.U = function(b, c) {
    return jc(c, "clustermap.components.map-report/t34348");
  }, Nt.prototype.Ea = !0, Nt.prototype.Aa = function() {
    var b = this;
    return React.DOM.div(null, React.DOM.header({className:"secondary"}, React.DOM.h2(null, "Constituency"), function() {
      var c = qi.d(b.Sa);
      return K(c) ? React.DOM.h3(W(c), React.DOM.br(null), q(function() {
        var c = tk.d(b.Sa);
        return q(c) ? c : Sk.d(b.Sa);
      }()) ? React.DOM.small(null, "(", V(tk.d(b.Sa)), ", ", V(Sk.d(b.Sa)), ")") : null) : React.DOM.h3(null, V(c), React.DOM.br(null), q(function() {
        var c = tk.d(b.Sa);
        return q(c) ? c : Sk.d(b.Sa);
      }()) ? React.DOM.small(null, "(", V(tk.d(b.Sa)), ", ", V(Sk.d(b.Sa)), ")") : null);
    }(), V(Kr(b.D))), React.DOM.ul(null, function() {
      var c = Y.d ? Y.d(b.qa) : Y.call(null, b.qa);
      return K(c) ? React.DOM.li(W(c), function() {
        var c = Jt.f(b.qa, "Investor-backed company", E(["Investor-backed companies"], 0));
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Jt.f(b.qa, "Investor-backed company", E(["Investor-backed companies"], 0));
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Y.d ? Y.d(b.na) : Y.call(null, b.na);
      return K(c) ? React.DOM.li(W(c), function() {
        var c = Jt(b.na, "Investor");
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Jt(b.na, "Investor");
        return K(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Lo.q ? Lo.q(function() {
        var c = b.X, c = null == c ? null : Ij.d(c);
        return null == c ? null : Th.d(c);
      }(), Yj, 2, y, "-") : Lo.call(null, function() {
        var c = b.X, c = null == c ? null : Ij.d(c);
        return null == c ? null : Th.d(c);
      }(), Yj, 2, y, "-");
      return K(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total revenue")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total revenue"));
    }(), function() {
      var c = Y.q ? Y.q(function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-") : Y.call(null, function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-");
      return K(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total employees")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total employees"));
    }()), V(Ot(b.v)));
  }, Nt.prototype.w = function() {
    return this.wg;
  }, Nt.prototype.A = function(b, c) {
    return new Nt(this.qa, this.na, this.ha, this.ag, this.D, this.v, this.X, this.Sa, this.Hf, c);
  });
  return new Nt(l, k, g, f, e, d, c, b, Wt, null);
};
function Yt(a, b) {
  var c = lo.d(b), c = N(c) ? J.c(S, c) : c, d = I.c(c, Qk), c = I.c(c, mi), d = ke.c(d, Dh), e = De.c(a, new Q(null, 2, 5, R, [oi, Lj], null)), f = De.c(a, new Q(null, 2, 5, R, [oi, Ek], null)), g = Nh.d(a);
  return q(yd.c ? yd.c(hi, e) : yd.call(null, hi, e)) ? Tt(f, g, c, d) : q(yd.c ? yd.c(xk, e) : yd.call(null, xk, e)) ? Vt(f, g, c, d) : q(yd.c ? yd.c(Oh, e) : yd.call(null, Oh, e)) ? Xt(f, g, c, d) : Rt(g, c);
}
;var Zt, $t = new Q(null, 2, 5, R, [new Q(null, 2, 5, R, [59.54, 2.3], null), new Q(null, 2, 5, R, [49.29, -11.29], null)], null);
function au(a) {
  return a.Kf(Jg($t), Jg(new n(null, 2, ["paddingTopLeft", new Q(null, 2, 5, R, [0, 0], null), "paddingBottomRight", new Q(null, 2, 5, R, [0, 0], null)], null)));
}
var bu, du, eu = config, fu = null == eu ? null : eu.Di, gu = null == fu ? null : fu.map;
du = null == gu ? null : gu.mi;
bu = q(du) ? du : "mccraigmccraig.h4f921b9";
function hu(a) {
  a = L.map.call(null, a, {zoomControl:!1});
  var b = L.Oi.jj.call(null, bu, {detectRetina:jb(config.ph)}), c = L.control.zoom.call(null, {position:"bottomright"});
  a.ii(b);
  a.hi(c);
  au(a);
  return new n(null, 4, [pi, a, Wh, Bg.d(vf), zj, Bg.d(vf), Ii, Bg.d(Zf)], null);
}
var iu = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    if (q(de(b))) {
      var e = A(b), f = new L.Th(e.Ki(), e.Ji()), e = ob.e(function() {
        return function(a, b) {
          return a.extend(b);
        };
      }(e, f), f, B(b));
      return a.Kf(e);
    }
    return null;
  }
  a.m = 1;
  a.j = function(a) {
    var d = A(a);
    a = B(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}();
function ju(a, b) {
  return "" + v(function() {
    var c = le.c(function(b) {
      return[v("\x3ca"), v(Xo(new n(null, 3, [Xg, a.e ? a.e(Dh, hi, b) : a.call(null, Dh, hi, b), Ck, null, bi, null], null))), v("\x3e"), v(function() {
        var a = qi.d(b);
        return K(a) ? [v("\x3cli"), v(Xo(Vf.f(E([new n(null, 2, [Ck, null, bi, null], null), a], 0)))), v("\x3e"), v("\x3c/li\x3e")].join("") : [v("\x3cli\x3e"), v(Zo(a)), v("\x3c/li\x3e")].join("");
      }()), v("\x3c/a\x3e")].join("");
    }, b);
    return K(c) ? [v("\x3cul"), v(Xo(Vf.f(E([new n(null, 2, [Ck, null, bi, "map-marker-popup-location-list"], null), c], 0)))), v("\x3e"), v("\x3c/ul\x3e")].join("") : [v('\x3cul class\x3d"map-marker-popup-location-list"\x3e'), v(Zo(c)), v("\x3c/ul\x3e")].join("");
  }());
}
function ku(a, b, c) {
  var d = function() {
    var a = null == c ? null : A(c), a = null == a ? null : Gi.d(a), a = null == a ? null : Gd(a);
    return null == a ? null : Jg(a);
  }();
  if (q(d)) {
    var e = L.Ei(Jg(new n(null, 4, [wk, "map-marker", Kk, new Q(null, 2, 5, R, [24, 28], null), xi, new Q(null, 2, 5, R, [12, 14], null), nj, new Q(null, 2, 5, R, [0, -8], null)], null))), d = L.Pi(d, Jg(new n(null, 1, [Vh, e], null)));
    a = ju(a, c);
    d.ni(a);
    d.$e(b);
    return d;
  }
  return console.log([v("missing location: "), v(function() {
    var a = new Xa, b = Za;
    try {
      Za = function(b) {
        return a.append(b);
      }, vg.f(E([c], 0));
    } finally {
      Za = b;
    }
    return "" + v(a);
  }())].join(""));
}
function lu(a, b, c, d) {
  var e = Vb(c), f = $f(Sf(e)), g = $f(Sf(d)), k = jn.c(f, g), l = kn.c(g, f), p = kn.c(f, g), t = Be(vf, le.c(function() {
    return function(c) {
      return new Q(null, 2, 5, R, [c, ku(a, b, I.c(d, c))], null);
    };
  }(e, f, g, k, l, p), l)), f = Be(vf, le.c(function(b) {
    return function(c) {
      var e = R, f = I.c(b, c), g = I.c(d, c);
      f.ij(ju(a, g));
      return new Q(null, 2, 5, e, [c, f], null);
    };
  }(e, f, g, k, l, p, t), k));
  (function() {
    for (var a = z(p), c = null, d = 0, f = 0;;) {
      if (f < d) {
        var g = c.C(null, f), g = I.c(e, g);
        b.Lc(g);
        f += 1;
      } else {
        if (a = z(a)) {
          ld(a) ? (d = vc(a), a = wc(a), c = d, d = G(d)) : (g = A(a), c = I.c(e, g), b.Lc(c), a = C(a), c = null, d = 0), f = 0;
        } else {
          return null;
        }
      }
    }
  })();
  Cg(c, Vf.f(E([f, t], 0)));
}
function mu(a) {
  a = Og.d(a);
  a = N(a) ? J.c(S, a) : a;
  a = I.c(a, "coordinates");
  var b = H.e(a, 0, null), c = H.e(b, 0, null);
  a = H.e(c, 0, null);
  var c = H.e(c, 1, null), d = H.e(b, 1, null);
  H.e(d, 0, null);
  H.e(d, 1, null);
  var e = H.e(b, 2, null), d = H.e(e, 0, null), e = H.e(e, 1, null), f = H.e(b, 3, null);
  H.e(f, 0, null);
  H.e(f, 1, null);
  b = H.e(b, 4, null);
  H.e(b, 0, null);
  H.e(b, 1, null);
  return L.Ni(Jg(new Q(null, 2, 5, R, [new Q(null, 2, 5, R, [c, a], null), new Q(null, 2, 5, R, [e, d], null)], null)));
}
function nu(a, b, c, d) {
  b = q(b) ? b[c] : null;
  var e = q(b) ? b.tolerance : null;
  b = q(b) ? new Q(null, 2, 5, R, [e, b], null) : null;
  a = a.o ? a.o(c, d, vj, 7) : a.call(null, c, d, vj, 7);
  return q(a) ? a : b;
}
function ou(a, b) {
  var c = N(b) ? J.c(S, b) : b, d = I.c(c, ak), c = I.c(c, Fk);
  q(q(c) ? d : c) ? a.Td(Jg(new n(null, 5, [yi, "#0000aa", ii, 2, li, 1, tj, !0, zi, 0.2], null))) : q(c) ? a.Td(Jg(new n(null, 5, [yi, "#0000aa", ii, 2, li, 1, tj, !0, zi, 0.2], null))) : q(d) ? a.Td(Jg(new n(null, 4, [yi, "#000000", ii, 2, li, 1, tj, !1], null))) : a.Td(Jg(new n(null, 5, [yi, "#ff0000", ii, 2, li, 0, tj, !1, zi, 0], null)));
}
function pu(a, b, c, d, e) {
  e = N(e) ? J.c(S, e) : e;
  var f = I.c(e, Fk), g = d.tolerance, k = mu(d.envelope);
  d = L.Hi(d.geojson);
  ou(d, e);
  d.$e(b);
  d.dc("click", function() {
    return Op.c(a, new Q(null, 2, 5, R, [Gk, new Q(null, 2, 5, R, [Oh, c], null)], null));
  });
  return new n(null, 5, [Ck, c, vi, g, Fk, f, yk, d, Hi, k], null);
}
function qu(a, b, c, d, e, f, g, k) {
  if (q(c)) {
    var l = Vb(e), p = $f(Sf(l)), t = Vb(f);
    k = $f(J.c(Yd, le.c(je.c(fh, oh), J.c(Yd, Uf(k)))));
    var w = hn.c(k, g), D = kn.c(w, p), M = kn.c(p, w), O = jn.c(p, w), Z = le.c(function(e, f, k, l) {
      return function(e) {
        var f = new n(null, 2, [Fk, qd(l, e), ak, qd(g, e)], null), k = nu(b, c, e, d.Bd());
        q(k) ? (H.e(k, 0, null), k = H.e(k, 1, null), e = pu(a, d, e, k, f)) : e = null;
        return e;
      };
    }(l, p, t, k, w, D, M, O), D), U = le.c(function(e, f, k, l) {
      return function(f) {
        a: {
          var k = I.c(e, f);
          f = new n(null, 2, [Fk, qd(l, f), ak, qd(g, f)], null);
          var k = N(k) ? J.c(S, k) : k, p = I.c(k, Ck), t = nu(b, c, p, d.Bd());
          if (q(t)) {
            p = H.e(t, 0, null);
            t = H.e(t, 1, null);
            if (ce.c(p, vi.d(k))) {
              d.Lc(yk.d(k));
              f = pu(a, d, Ck.d(k), t, f);
              break a;
            }
            ou(yk.d(k), f);
          }
          f = k;
        }
        return f;
      };
    }(l, p, t, k, w, D, M, O, Z), O), aa = function() {
      for (var a = z(M), b = null, c = 0, e = 0;;) {
        if (e < c) {
          var f = b.C(null, e), f = I.c(l, f);
          q(f) && d.Lc(yk.d(f));
          e += 1;
        } else {
          if (a = z(a)) {
            ld(a) ? (c = vc(a), a = wc(a), b = c, c = G(c)) : (f = A(a), b = I.c(l, f), q(b) && d.Lc(yk.d(b)), a = C(a), b = null, c = 0), e = 0;
          } else {
            return null;
          }
        }
      }
    }(), p = ob.e(function() {
      return function(a, b) {
        var c = N(b) ? J.c(S, b) : b, d = I.c(c, Ck);
        return $c.e(a, d, c);
      };
    }(l, p, t, k, w, D, M, O, Z, U, aa), vf, xe(he, Yd.c(Z, U)));
    Cg(f, k);
    Cg(e, p);
  }
}
function ru(a, b, c, d) {
  c = Vb(c);
  d = Vb(d);
  if (hd(d)) {
    return au(b);
  }
  if (hd(c)) {
    return wn.Ue.e ? wn.Ue.e(a, Qi, !0) : wn.Ue.call(null, a, Qi, !0);
  }
  q(ko.c(a, Qi)) && Go(a, Qi, !1);
  a: {
    a = vf;
    for (d = z(d);;) {
      if (d) {
        var e = A(d), f = I.e(c, e, Tj);
        a = ce.c(f, Tj) ? $c.e(a, e, f) : a;
        d = C(d);
      } else {
        c = a;
        break a;
      }
    }
    c = void 0;
  }
  c = null == c ? null : Uf(c);
  c = null == c ? null : le.c(Hi, c);
  c = null == c ? null : de(c);
  return q(c) ? J.e(iu, b, c) : iu($t);
}
var tu = function su(b, c) {
  var d = N(b) ? J.c(S, b) : b, e = I.c(d, oi);
  "undefined" === typeof Zt && (Zt = function(b, c, d, e, p, t, w) {
    this.selection = b;
    this.Wd = c;
    this.Xf = d;
    this.B = e;
    this.hh = p;
    this.kg = t;
    this.sg = w;
    this.r = 0;
    this.k = 393216;
  }, Zt.R = !0, Zt.Q = "clustermap.components.map/t34127", Zt.U = function(b, c) {
    return jc(c, "clustermap.components.map/t34127");
  }, Zt.prototype.Wg = !0, Zt.prototype.Le = function(b, c, d) {
    var e = this, p = N(c) ? J.c(S, c) : c;
    b = I.c(p, oi);
    c = I.c(p, Ei);
    var t = I.c(p, Mh), w = I.c(p, Yi);
    I.c(p, zh);
    I.c(p, Zj);
    d = N(d) ? J.c(S, d) : d;
    d = I.c(d, Ti);
    var p = jo(e.B), p = N(p) ? J.c(S, p) : p, p = I.c(p, Yi), D = lo.d(e.B), M = N(D) ? J.c(S, D) : D, D = I.c(M, Qk);
    I.c(M, Lh);
    var O = I.c(M, Xh), Z = I.c(M, mi), M = ko.d(e.B), M = N(M) ? J.c(S, M) : M, U = I.c(M, Dh), aa = N(U) ? J.c(S, U) : U, U = I.c(aa, Ii), Ia = I.c(aa, zj), gb = I.c(aa, Wh), hb = I.c(aa, pi), aa = I.c(M, Qi);
    I.c(M, Ti);
    var qb = I.c(M, Wg), M = I.c(M, cj);
    lu(D, hb, gb, c);
    ce.c(w, p) && (Go(e.B, Wg, function(b) {
      var c = b.Gd.Qf;
      b = b.Gd.Rf;
      var d = Wk(w, b, c), f = le.c(function() {
        return function(b) {
          return b.Oe.id;
        };
      }(c, b, d), d), g = A(d), d = $f(ne(1, f)), f = ko.c(e.B, Ti);
      q(q(g) ? ce.c(f, d) : g) && (f = L.dj(), f.hj(Jg(new Q(null, 2, 5, R, [c, b], null))), f.gj([v("\x3cp\x3e"), v(function() {
        var b = null == g ? null : g.Oe;
        return null == b ? null : b.Ci;
      }()), v("\x3c/p\x3e")].join("")), f.$i(hb));
      return Go(e.B, Ti, d);
    }), q(qb) && hb.S("mousemove", qb), hb.dc("mousemove", ko.c(e.B, Wg)), Go(e.B, cj, function(b) {
      b = Wk(w, b.Gd.Rf, b.Gd.Qf);
      b = le.c(function() {
        return function(b) {
          return b.Oe.id;
        };
      }(b), b);
      return Op.c(Z, new Q(null, 2, 5, R, [Gk, new Q(null, 2, 5, R, [Oh, A(b)], null)], null));
    }), q(M) && hb.S("click", M), hb.dc("click", ko.c(e.B, cj)));
    q(t) && qu(Z, O, t, hb, Ia, U, d, c);
    return q(q(aa) ? aa : ce.c(b, e.selection)) ? ru(e.B, hb, Ia, U) : null;
  }, Zt.prototype.Fe = !0, Zt.prototype.Ld = function() {
    var b = this, c = Fo.d(b.B), c = hu(c), c = N(c) ? J.c(S, c) : c;
    I.c(c, Vg);
    I.c(c, Wh);
    var d = I.c(c, pi);
    Go(b.B, Dh, c);
    Go(b.B, Ti, Zf);
    d.dc("zoomend", function() {
      return Dg.o(lo.c(b.B, ij), $c, Zj, d.Bd());
    });
    wr.d(document).dc("clustermap-change-view", function() {
      var c = ko.d(b.B), c = N(c) ? J.c(S, c) : c, c = I.c(c, Dh), e = N(c) ? J.c(S, c) : c, c = I.c(e, Ii), e = I.c(e, zj);
      d.Li();
      return ru(b.B, d, e, c);
    });
    return Eo.o(b.Wd, $c, Zj, d.Bd());
  }, Zt.prototype.Ea = !0, Zt.prototype.Aa = function() {
    return React.DOM.div({className:"map", ref:"map"});
  }, Zt.prototype.w = function() {
    return this.sg;
  }, Zt.prototype.A = function(b, c) {
    return new Zt(this.selection, this.Wd, this.Xf, this.B, this.hh, this.kg, c);
  });
  return new Zt(e, d, d, c, b, su, null);
};
var uu = Bg.d(Zc([Ug, zh, Mh, Nh, Qh, fi, gi, ni, oi, Ei, Yi, dj, gj, Hj, Jj, Mj, Zj], [Dh, null, null, null, null, null, null, null, null, null, null, null, null, null, vf, null, null]));
function vu(a, b) {
  return ob.e(function(a, b) {
    var e = H.e(b, 0, null), f = H.e(b, 1, null), e = jd(e) ? e : new Q(null, 1, 5, R, [e], null);
    return He.e(a, e, bd(f) ? f : function() {
      return f;
    });
  }, a, b);
}
var wu = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = N(a) ? J.c(S, a) : a;
    return Dg.e(uu, vu, a);
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function xu() {
  var a = Mp.d(1);
  Cp(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, T)) {
                      return b;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return c[5] = e, np(c), T;
                  }
                  if (s) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!Jd(e, T)) {
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
          g.t = c;
          g.d = b;
          return g;
        }();
      }(function(a) {
        var b = a[1];
        if (2 === b) {
          var b = a[2], c = new RTree(10), g = Object.keys(b), k = [], l = Jg(new n(null, 1, [Lj, "FeatureCollection"], null));
          l.features = k;
          for (var g = z(g), p = null, t = 0, w = 0;;) {
            if (w < t) {
              var D = p.C(null, w), M = b[D], D = M.geojson, M = Jg(new n(null, 2, [Lj, "Feature", Zi, new n(null, 2, [Ck, M.id, Jk, M.compact_name], null)], null));
              M.geometry = D;
              k.push(M);
              w += 1;
            } else {
              if (g = z(g)) {
                ld(g) ? (t = vc(g), g = wc(g), p = t, t = G(t)) : (p = A(g), t = b[p], p = t.geojson, t = Jg(new n(null, 2, [Lj, "Feature", Zi, new n(null, 2, [Ck, t.id, Jk, t.compact_name], null)], null)), t.geometry = p, k.push(t), g = C(g), p = null, t = 0), w = 0;
              } else {
                break;
              }
            }
          }
          c.Gi(l);
          b = wu.f(E([Mh, b, Yi, c], 0));
          return mp(a, b);
        }
        return 1 === b ? (b = vs.f("uk_constituencies", E([yh, !0], 0)), kp(a, 2, b)) : null;
      });
    }(), c = function() {
      var c = b.t ? b.t() : b.call(null);
      c[6] = a;
      return c;
    }();
    return jp(c);
  });
}
function yu() {
  var a = Mp.d(1);
  Cp(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, T)) {
                      return b;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return c[5] = e, np(c), T;
                  }
                  if (s) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!Jd(e, T)) {
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
          g.t = c;
          g.d = b;
          return g;
        }();
      }(function(a) {
        var b = a[1];
        return 2 === b ? (b = wu.f(E([Hj, a[2]], 0)), mp(a, b)) : 1 === b ? (b = ys(), kp(a, 2, b)) : null;
      });
    }(), c = function() {
      var c = b.t ? b.t() : b.call(null);
      c[6] = a;
      return c;
    }();
    return jp(c);
  });
}
var zu = new Wp;
function Au(a, b, c) {
  return q(q(b) ? c : b) ? kq(zu, [v("/"), v(Kd(q(a) ? a : "map")), v("/"), v(Kd(b)), v("/"), v(Kd(c))].join("")) : q(a) ? kq(zu, [v("/"), v(Kd(a))].join("")) : kq(zu, "" + v(""));
}
function Bu() {
  var a = cq(zu), b = jg(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/, a);
  H.e(b, 0, null);
  var a = H.e(b, 1, null), c = H.e(b, 2, null), b = H.e(b, 3, null);
  return new n(null, 3, [Ug, a, Lj, c, Ck, b], null);
}
var Cu = new n(null, 7, [vh, rs(function(a) {
  if (0 < G(va(a))) {
    a = ps([v("/api/"), v(ts), v("/search?q\x3d"), v(a)].join(""));
  } else {
    a = new Q(null, 1, 5, R, [{}], null);
    var b = Mp.d(Vd(100, a));
    Pp.c(b, a);
    a = b;
  }
  return a;
}, function(a) {
  return wu.f(E([Jj, Og.d(a)], 0));
}), Gk, function(a) {
  var b = H.e(a, 0, null);
  a = H.e(a, 1, null);
  var c = Bu(), c = N(c) ? J.c(S, c) : c, c = I.c(c, Ug);
  return Au(c, b, a);
}, rj, rs(function(a) {
  var b = H.e(a, 0, null);
  a = H.e(a, 1, null);
  var c = q(b) ? new wf([b, a]) : vf, d = gi.d(Vb(uu));
  return ce.c(c, d) ? (wu.f(E([gi, c], 0)), q(x.c ? x.c(hi, b) : x.call(null, hi, b)) ? new Q(null, 2, 5, R, [new Q(null, 6, 5, R, [ps([v("/api/"), v(ts), v("/portfolio-companies/"), v(a)].join("")), ys.f(E([c], 0)), xs.f(E([c], 0)), zs.f(E([c], 0)), As.f(E([c], 0)), ws.f(E([c], 0))], null), b], null) : q(x.c ? x.c(xk, b) : x.call(null, xk, b)) ? new Q(null, 2, 5, R, [new Q(null, 6, 5, R, [ps([v("/api/"), v(ts), v("/investor-companies/"), v(a)].join("")), ys.f(E([c], 0)), xs.f(E([c], 0)), zs.f(E([c], 
  0)), As.f(E([c], 0)), ws.f(E([c], 0))], null), b], null) : q(x.c ? x.c(Oh, b) : x.call(null, Oh, b)) ? new Q(null, 2, 5, R, [new Q(null, 6, 5, R, [ps([v("/api/"), v(ts), v("/constituencies/"), v(a)].join("")), ys.f(E([c], 0)), xs.f(E([c], 0)), zs.f(E([c], 0)), As.f(E([c], 0)), ws.f(E([c], 0))], null), b], null) : new Q(null, 2, 5, R, [new Q(null, 6, 5, R, [null, ys.f(E([c], 0)), xs.f(E([c], 0)), zs.f(E([c], 0)), As.f(E([c], 0)), null], null), b], null)) : null;
}, function(a, b) {
  var c = H.e(a, 0, null), d = H.e(a, 1, null), e = H.e(a, 2, null), f = H.e(a, 3, null), g = H.e(a, 4, null), k = H.e(a, 5, null);
  return wu.f(E([oi, new n(null, 2, [Lj, b, Ek, c], null), Nh, d, dj, e, ni, f, gj, g, Ei, k], 0));
}), Ak, function(a) {
  var b = Bu(), c = N(b) ? J.c(S, b) : b, b = I.c(c, Ck), c = I.c(c, Lj);
  return Au(a, c, b);
}, Vj, function(a) {
  a = Ld.d(a);
  if (ce.c(a, Ug.d(Vb(uu)))) {
    wu.f(E([Ug, a], 0));
    a = Kd(a);
    if (!q(I.c(Gt, a))) {
      throw Error([v("unknown view: "), v(a)].join(""));
    }
    var b = Dt.d("body"), c = [v("#nav ."), v(a)].join(""), c = Dt.d(c), d = os.c(c, ".."), d = Dt.c(d, "\x3e .active");
    es(d, "active");
    ds(c, "active");
    for (var c = z(Gt), d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.C(null, f), k = H.e(g, 0, null), g = H.e(g, 1, null);
        x.c(k, a) ? ds(b, g) : es(b, g);
        f += 1;
      } else {
        if (c = z(c)) {
          ld(c) ? (e = vc(c), c = wc(c), d = e, e = G(e)) : (e = A(c), d = H.e(e, 0, null), e = H.e(e, 1, null), x.c(d, a) ? ds(b, e) : es(b, e), c = C(c), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return wr.d(document).lj("clustermap-change-view");
  }
  return null;
}, jk, function(a) {
  var b = Mp.d(1);
  Cp(function() {
    var c = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, T)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, np(c), T;
                  }
                  if (s) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Jd(d, T)) {
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
          d.t = c;
          d.d = b;
          return d;
        }();
      }(function(b) {
        var c = b[1];
        if (2 === c) {
          return c = wu.f(E([Qh, b[7], ni, b[2]], 0)), mp(b, c);
        }
        if (1 === c) {
          var c = Vb(uu), c = Qh.d(c), c = Vf.f(E([c, a], 0)), d = Vb(uu), d = gi.d(d), d = Vf.f(E([d, c], 0)), d = zs.f(E([d], 0));
          b[7] = c;
          return kp(b, 2, d);
        }
        return null;
      });
    }(), d = function() {
      var a = c.t ? c.t() : c.call(null);
      a[6] = b;
      return a;
    }();
    return jp(d);
  });
  return b;
}, Yg, function(a) {
  var b = Mp.d(1);
  Cp(function() {
    var c = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, T)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, np(c), T;
                  }
                  if (s) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Jd(d, T)) {
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
          d.t = c;
          d.d = b;
          return d;
        }();
      }(function(b) {
        var c = b[1];
        if (2 === c) {
          return c = wu.f(E([fi, b[7], gj, b[2]], 0)), mp(b, c);
        }
        if (1 === c) {
          var c = Vb(uu), c = fi.d(c), c = Vf.f(E([c, a], 0)), d = Vb(uu), d = gi.d(d), d = Vf.f(E([d, c], 0)), d = As.f(E([d], 0));
          b[7] = c;
          return kp(b, 2, d);
        }
        return null;
      });
    }(), d = function() {
      var a = c.t ? c.t() : c.call(null);
      a[6] = b;
      return a;
    }();
    return jp(d);
  });
  return b;
}], null);
function Du(a) {
  ht("", function(b) {
    return K(b) ? (N(b) && J.c(S, b), Op.c(a, new Q(null, 2, 5, R, [rj, null], null))) : kd(b) ? Op.c(a, new Q(null, 2, 5, R, [rj, null], null)) : null;
  });
  ht("/", function(b) {
    return K(b) ? (N(b) && J.c(S, b), Op.c(a, new Q(null, 2, 5, R, [rj, null], null))) : kd(b) ? Op.c(a, new Q(null, 2, 5, R, [rj, null], null)) : null;
  });
  ht("/:view", function(b) {
    return K(b) ? (b = N(b) ? J.c(S, b) : b, b = I.c(b, Ug), Op.c(a, new Q(null, 2, 5, R, [Vj, b], null)), Op.c(a, new Q(null, 2, 5, R, [rj, null], null))) : kd(b) ? (b = H.e(b, 0, null), Op.c(a, new Q(null, 2, 5, R, [Vj, b], null)), Op.c(a, new Q(null, 2, 5, R, [rj, null], null))) : null;
  });
  ht("/:view/:type/:id", function(b) {
    if (K(b)) {
      var c = N(b) ? J.c(S, b) : b;
      b = I.c(c, Ck);
      var d = I.c(c, Lj), c = I.c(c, Ug);
      Op.c(a, new Q(null, 2, 5, R, [Vj, c], null));
      return Op.c(a, new Q(null, 2, 5, R, [rj, new Q(null, 2, 5, R, [Ld.d(d), b], null)], null));
    }
    return kd(b) ? (c = H.e(b, 0, null), d = H.e(b, 1, null), b = H.e(b, 2, null), Op.c(a, new Q(null, 2, 5, R, [Vj, c], null)), Op.c(a, new Q(null, 2, 5, R, [rj, new Q(null, 2, 5, R, [Ld.d(d), b], null)], null))) : null;
  });
  Hl(zu, "navigate", function(a) {
    a = a.Dh;
    Ls(a);
    a = dn.c(a, /\?/);
    var c = H.e(a, 0, null);
    a = H.e(a, 1, null);
    a = q(a) ? new n(null, 1, [$g, Ys(a)], null) : null;
    var d = it(c), c = H.e(d, 0, null), d = H.e(d, 1, null), c = q(c) ? c : he;
    a = Vf.f(E([d, a], 0));
    return c.d ? c.d(a) : c.call(null, a);
  });
  fq(zu, !0);
}
function Eu() {
  var a = Mp.t(), b = new n(null, 3, [mi, a, Qk, Os, Lh, Ps], null);
  It(a);
  Du(a);
  xu();
  yu();
  Co(tu, uu, new n(null, 2, [fj, Vf.f(E([b, new n(null, 2, [ij, uu, Xh, ke.e(Fs, uu, zh)], null)], 0)), Hh, document.getElementById("map-component")], null));
  Co(rt, uu, new n(null, 2, [fj, b, Hh, document.getElementById("search-component")], null));
  Co(Yt, uu, new n(null, 2, [fj, b, Hh, document.getElementById("map-report-component")], null));
  Co(Ir(), uu, new n(null, 2, [fj, b, Hh, document.getElementById("page-title-component")], null));
  Co(Hr, uu, new n(null, 2, [Hh, document.getElementById("full-report-component"), fj, b], null));
  var c = Mp.d(1);
  Cp(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Jd(b, T)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, np(c), T;
                  }
                  if (s) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Jd(d, T)) {
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
          d.t = c;
          d.d = b;
          return d;
        }();
      }(function(b) {
        var c = b[1];
        if (7 === c) {
          var d = b[2], c = H.e(d, 0, null), d = H.e(d, 1, null), e = I.c(Cu, c);
          if (jb(e)) {
            throw Error([v("no handler for event-type: "), v(c)].join(""));
          }
          c = e.d ? e.d(d) : e.call(null, d);
          b[7] = c;
          b[2] = null;
          b[1] = 2;
          return T;
        }
        return 6 === c ? (c = b[2], b[2] = c, b[1] = 3, T) : 5 === c ? (b[2] = null, b[1] = 6, T) : 4 === c ? kp(b, 7, a) : 3 === c ? (c = b[2], mp(b, c)) : 2 === c ? (b[1] = 4, T) : 1 === c ? (b[2] = null, b[1] = 2, T) : null;
      });
    }(), e = function() {
      var a = b.t ? b.t() : b.call(null);
      a[6] = c;
      return a;
    }();
    return jp(e);
  });
  return c;
}
;function Fu() {
  return Eu();
}
q(config.ph) ? setTimeout(Fu, 2E3) : Eu();

//# sourceMappingURL=clustermap.js.map