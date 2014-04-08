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
  a.xb = b.prototype;
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
Xa.prototype.ib = "";
Xa.prototype.set = function(a) {
  this.ib = "" + a;
};
Xa.prototype.append = function(a, b, c) {
  this.ib += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.ib += arguments[d];
    }
  }
  return this;
};
Xa.prototype.toString = function() {
  return this.ib;
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
var zb = {}, Ab = function() {
  function a(a, b, c) {
    if (a ? a.ja : a) {
      return a.ja(a, b, c);
    }
    var g;
    g = Ab[m(null == a ? null : a)];
    if (!g && (g = Ab._, !g)) {
      throw u("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.C : a) {
      return a.C(a, b);
    }
    var c;
    c = Ab[m(null == a ? null : a)];
    if (!c && (c = Ab._, !c)) {
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
  if (a ? a.Sb : a) {
    return a.Sb(a, b);
  }
  var c;
  c = Ib[m(null == a ? null : a)];
  if (!c && (c = Ib._, !c)) {
    throw u("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Jb(a, b, c) {
  if (a ? a.jb : a) {
    return a.jb(a, b, c);
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
  if (a ? a.be : a) {
    return a.be(0, b);
  }
  var c;
  c = Qb[m(null == a ? null : a)];
  if (!c && (c = Qb._, !c)) {
    throw u("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Rb(a) {
  if (a ? a.lb : a) {
    return a.lb(a);
  }
  var b;
  b = Rb[m(null == a ? null : a)];
  if (!b && (b = Rb._, !b)) {
    throw u("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Sb(a) {
  if (a ? a.mb : a) {
    return a.mb(a);
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
  if (a ? a.Ab : a) {
    return a.Ab(a);
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
  if (a ? a.A : a) {
    return a.A(a);
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
  if (a ? a.B : a) {
    return a.B(a, b);
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
  if (a ? a.ge : a) {
    return a.ge(0, b);
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
  if (a ? a.ee : a) {
    return a.ee(0, b, c);
  }
  var d;
  d = mc[m(null == a ? null : a)];
  if (!d && (d = mc._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function nc(a, b, c) {
  if (a ? a.de : a) {
    return a.de(0, b, c);
  }
  var d;
  d = nc[m(null == a ? null : a)];
  if (!d && (d = nc._, !d)) {
    throw u("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function oc(a, b) {
  if (a ? a.fe : a) {
    return a.fe(0, b);
  }
  var c;
  c = oc[m(null == a ? null : a)];
  if (!c && (c = oc._, !c)) {
    throw u("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function pc(a) {
  if (a ? a.Bb : a) {
    return a.Bb(a);
  }
  var b;
  b = pc[m(null == a ? null : a)];
  if (!b && (b = pc._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function qc(a, b) {
  if (a ? a.nb : a) {
    return a.nb(a, b);
  }
  var c;
  c = qc[m(null == a ? null : a)];
  if (!c && (c = qc._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function rc(a) {
  if (a ? a.ob : a) {
    return a.ob(a);
  }
  var b;
  b = rc[m(null == a ? null : a)];
  if (!b && (b = rc._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function sc(a, b, c) {
  if (a ? a.Ub : a) {
    return a.Ub(a, b, c);
  }
  var d;
  d = sc[m(null == a ? null : a)];
  if (!d && (d = sc._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function tc(a, b, c) {
  if (a ? a.ce : a) {
    return a.ce(0, b, c);
  }
  var d;
  d = tc[m(null == a ? null : a)];
  if (!d && (d = tc._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function uc(a) {
  if (a ? a.$d : a) {
    return a.$d();
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
  this.sh = a;
  this.r = 0;
  this.k = 1073741824;
}
yc.prototype.ge = function(a, b) {
  return this.sh.append(b);
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
  this.fb = c;
  this.gb = d;
  this.sa = e;
  this.k = 2154168321;
  this.r = 4096;
}
h = Cc.prototype;
h.I = function(a, b) {
  return jc(b, this.fb);
};
h.N = function() {
  var a = this.gb;
  return null != a ? a : this.gb = a = Dc.c ? Dc.c(Ec.d ? Ec.d(this.va) : Ec.call(null, this.va), Ec.d ? Ec.d(this.name) : Ec.call(null, this.name)) : Dc.call(null, Ec.d ? Ec.d(this.va) : Ec.call(null, this.va), Ec.d ? Ec.d(this.name) : Ec.call(null, this.name));
};
h.B = function(a, b) {
  return new Cc(this.va, this.name, this.fb, this.gb, b);
};
h.A = function() {
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
  return b instanceof Cc ? this.fb === b.fb : !1;
};
h.toString = function() {
  return this.fb;
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
  if (a && (a.k & 8388608 || a.kb)) {
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
  if (a && (a.k & 64 || a.Eb)) {
    return a.W(null);
  }
  a = z(a);
  return null == a ? null : Db(a);
}
function B(a) {
  return null != a ? a && (a.k & 64 || a.Eb) ? a.ga(null) : (a = z(a)) ? Eb(a) : Ic : Ic;
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
        c = b.c ? b.c(c, Ab.c(a, d)) : b.call(null, c, Ab.c(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = vb(a), l = 0;;) {
      if (l < d) {
        c = b.c ? b.c(c, Ab.c(a, l)) : b.call(null, c, Ab.c(a, l)), l += 1;
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
    for (var d = Ab.c(a, 0), l = 1;;) {
      if (l < c) {
        d = b.c ? b.c(d, Ab.c(a, l)) : b.call(null, d, Ab.c(a, l)), l += 1;
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
  return a ? a.k & 2 || a.Tb ? !0 : a.k ? !1 : r(ub, a) : r(ub, a);
}
function Nc(a) {
  return a ? a.k & 16 || a.Db ? !0 : a.k ? !1 : r(zb, a) : r(zb, a);
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
  return Ab.c(this.lc, this.i);
};
h.ga = function() {
  return 0 < this.i ? new Pc(this.lc, this.i - 1, null) : null;
};
h.H = function(a, b) {
  return Qc.c ? Qc.c(this, b) : Qc.call(null, this, b);
};
h.B = function(a, b) {
  return new Pc(this.lc, this.i, b);
};
h.wa = function() {
  return new Pc(this.lc, this.i, this.l);
};
h.A = function() {
  return this.l;
};
h.Y = function() {
  return Tc.c ? Tc.c(Ic, this.l) : Tc.call(null, Ic, this.l);
};
function Uc(a) {
  return A(C(a));
}
function Vc(a) {
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
var Wc = function() {
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
    if (a && (a.k & 2 || a.Tb)) {
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
var Xc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return z(a) ? A(a) : c;
      }
      if (Nc(a)) {
        return Ab.e(a, b, c);
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
        return Ab.c(a, b);
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
      if (a && (a.k & 16 || a.Db)) {
        return a.ja(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (r(zb, a)) {
        return Ab.c(a, b);
      }
      if (s) {
        if (a ? a.k & 64 || a.Eb || (a.k ? 0 : r(Cb, a)) : r(Cb, a)) {
          return Xc.e(a, b, c);
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
    if (a && (a.k & 16 || a.Db)) {
      return a.C(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (r(zb, a)) {
      return Ab.c(a, b);
    }
    if (s) {
      if (a ? a.k & 64 || a.Eb || (a.k ? 0 : r(Cb, a)) : r(Cb, a)) {
        return Xc.c(a, b);
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
      this.dc = c;
      this.Jh = f;
      this.Bg = g;
      this.r = 0;
      this.k = 393217;
    }, Ya.R = !0, Ya.Q = "cljs.core/t34945", Ya.U = function(b, c) {
      return jc(c, "cljs.core/t34945");
    }, Ya.prototype.call = function() {
      function b(d, g) {
        d = this;
        var k = null;
        1 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return J.c ? J.c(b.dc, d) : J.call(null, b.dc, d);
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
        return J.c ? J.c(self__.dc, b) : J.call(null, self__.dc, b);
      }
      b.m = 0;
      b.j = function(b) {
        b = z(b);
        return c(b);
      };
      b.f = c;
      return b;
    }(), Ya.prototype.lf = !0, Ya.prototype.A = function() {
      return this.Bg;
    }, Ya.prototype.B = function(b, c) {
      return new Ya(this.l, this.dc, this.Jh, c);
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
  if (a && (a.k & 4194304 || a.yi)) {
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
  return null == a ? !1 : a ? a.k & 8 || a.ui ? !0 : a.k ? !1 : r(xb, a) : r(xb, a);
}
function jd(a) {
  return a ? a.k & 16777216 || a.uf ? !0 : a.k ? !1 : r(fc, a) : r(fc, a);
}
function M(a) {
  return null == a ? !1 : a ? a.k & 1024 || a.Ai ? !0 : a.k ? !1 : r(Kb, a) : r(Kb, a);
}
function kd(a) {
  return a ? a.k & 16384 || a.Di ? !0 : a.k ? !1 : r(Tb, a) : r(Tb, a);
}
function ld(a) {
  return a ? a.r & 512 || a.si ? !0 : !1 : !1;
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
  return null == a ? !1 : a ? a.k & 64 || a.Eb ? !0 : a.k ? !1 : r(Cb, a) : r(Cb, a);
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
    return c && (c.k & 524288 || c.ae) ? c.fa(null, a, b) : c instanceof Array ? Lc.e(c, a, b) : "string" === typeof c ? Lc.e(c, a, b) : r($b, c) ? ac.e(c, a, b) : s ? Sc.e(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.k & 524288 || b.ae) ? b.ea(null, a) : b instanceof Array ? Lc.c(b, a) : "string" === typeof b ? Lc.c(b, a) : r($b, b) ? ac.c(b, a) : s ? Sc.c(a, b) : null;
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
h.lb = function() {
  return this.Za;
};
h.mb = function() {
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
h.B = function(a, b) {
  return new Ed(b, this.Za, this.Ra, this.count, this.s);
};
h.wa = function() {
  return new Ed(this.l, this.Za, this.Ra, this.count, this.s);
};
h.A = function() {
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
h.lb = function() {
  return null;
};
h.mb = function() {
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
h.B = function(a, b) {
  return new Fd(b);
};
h.wa = function() {
  return new Fd(this.l);
};
h.A = function() {
  return this.l;
};
h.Y = function() {
  return this;
};
var Ic = new Fd(null);
function Gd(a) {
  return(a ? a.k & 134217728 || a.Bi || (a.k ? 0 : r(hc, a)) : r(hc, a)) ? ic(a) : ob.e(Wc, Ic, a);
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
h.B = function(a, b) {
  return new Id(b, this.Za, this.Ra, this.s);
};
h.wa = function() {
  return new Id(this.l, this.Za, this.Ra, this.s);
};
h.A = function() {
  return this.l;
};
h.Y = function() {
  return Tc(Ic, this.l);
};
function F(a, b) {
  var c = null == b;
  return(c ? c : b && (b.k & 64 || b.Eb)) ? new Id(null, a, b, null) : new Id(null, a, z(b), null);
}
function P(a, b, c, d) {
  this.va = a;
  this.name = b;
  this.$a = c;
  this.gb = d;
  this.k = 2153775105;
  this.r = 4096;
}
h = P.prototype;
h.I = function(a, b) {
  return jc(b, [v(":"), v(this.$a)].join(""));
};
h.N = function() {
  null == this.gb && (this.gb = Dc(Ec(this.va), Ec(this.name)) + 2654435769);
  return this.gb;
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
      return new P(b, Kd.d ? Kd.d(a) : Kd.call(null, a), a.fb, null);
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
  this.Jb = b;
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
  null != a.Jb && (a.O = a.Jb.t ? a.Jb.t() : a.Jb.call(null), a.Jb = null);
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
h.B = function(a, b) {
  return new Md(b, this.Jb, this.O, this.s);
};
h.A = function() {
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
h.$d = function() {
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
  return Ab.c(this.aa, 0);
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
h.B = function(a, b) {
  return new Sd(this.aa, this.Ta, b, this.s);
};
h.A = function() {
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
    return a.Cb ? a.Cb(c, d, e, f, g, a, k) : a.Cb ? a.Cb(c, d, e, f, g, a, k) : a.call(null, c, d, e, f, g, a, k);
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
  var w = Db(D), K = Eb(D);
  if (11 === b) {
    return a.Yc ? a.Yc(c, d, e, f, g, a, k, l, p, t, w) : a.Yc ? a.Yc(c, d, e, f, g, a, k, l, p, t, w) : a.call(null, c, d, e, f, g, a, k, l, p, t, w);
  }
  var D = Db(K), O = Eb(K);
  if (12 === b) {
    return a.Zc ? a.Zc(c, d, e, f, g, a, k, l, p, t, w, D) : a.Zc ? a.Zc(c, d, e, f, g, a, k, l, p, t, w, D) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D);
  }
  var K = Db(O), Z = Eb(O);
  if (13 === b) {
    return a.$c ? a.$c(c, d, e, f, g, a, k, l, p, t, w, D, K) : a.$c ? a.$c(c, d, e, f, g, a, k, l, p, t, w, D, K) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, K);
  }
  var O = Db(Z), U = Eb(Z);
  if (14 === b) {
    return a.ad ? a.ad(c, d, e, f, g, a, k, l, p, t, w, D, K, O) : a.ad ? a.ad(c, d, e, f, g, a, k, l, p, t, w, D, K, O) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, K, O);
  }
  var Z = Db(U), aa = Eb(U);
  if (15 === b) {
    return a.bd ? a.bd(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z) : a.bd ? a.bd(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z);
  }
  var U = Db(aa), Ia = Eb(aa);
  if (16 === b) {
    return a.cd ? a.cd(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U) : a.cd ? a.cd(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U);
  }
  var aa = Db(Ia), gb = Eb(Ia);
  if (17 === b) {
    return a.ed ? a.ed(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa) : a.ed ? a.ed(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa);
  }
  var Ia = Db(gb), hb = Eb(gb);
  if (18 === b) {
    return a.fd ? a.fd(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa, Ia) : a.fd ? a.fd(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa, Ia) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa, Ia);
  }
  gb = Db(hb);
  hb = Eb(hb);
  if (19 === b) {
    return a.gd ? a.gd(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa, Ia, gb) : a.gd ? a.gd(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa, Ia, gb) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa, Ia, gb);
  }
  var qb = Db(hb);
  Eb(hb);
  if (20 === b) {
    return a.hd ? a.hd(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa, Ia, gb, qb) : a.hd ? a.hd(c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa, Ia, gb, qb) : a.call(null, c, d, e, f, g, a, k, l, p, t, w, D, K, O, Z, U, aa, Ia, gb, qb);
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
    function a(c, d, e, f, g, K) {
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
function ge(a) {
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
        return ge;
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
    return ge;
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
              var D = a.d ? a.d(Ab.c(e, w)) : a.call(null, Ab.c(e, w));
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
      }, function K(a) {
        return new Md(null, function() {
          var b = d.c(z, a);
          return ee(ge, b) ? F(d.c(A, b), K(d.c(B, b))) : null;
        }, null, null);
      }(Wc.f(g, f, E([e, c], 0))));
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
        var c = le.c(z, Wc.f(e, d, E([a], 0)));
        return ee(ge, c) ? Yd.c(le.c(A, c), J.c(b, le.c(B, c))) : null;
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
            if (q(b.d ? b.d(Ab.c(e, k)) : b.call(null, Ab.c(e, k)))) {
              var l = Ab.c(e, k);
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
  null != a ? a && (a.r & 4 || a.wi) ? (c = ob.e(qc, pc(a), b), c = rc(c)) : c = ob.e(yb, a, b) : c = ob.e(Wc, Ic, b);
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
}(), Ge = function Ee(b, c, d) {
  var e = H.e(c, 0, null);
  return(c = zd(c)) ? $c.e(b, e, Ee(I.c(b, e), c, d)) : $c.e(b, e, d);
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
    function a(c, d, e, f, g, K, O) {
      var Z = null;
      6 < arguments.length && (Z = E(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, K, Z);
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
h.Bb = function() {
  return new Ve(this.n, this.shift, We.d ? We.d(this.root) : We.call(null, this.root), Xe.d ? Xe.d(this.F) : Xe.call(null, this.F));
};
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.L = function(a, b) {
  return Ab.e(this, b, null);
};
h.M = function(a, b, c) {
  return Ab.e(this, b, c);
};
h.jb = function(a, b, c) {
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
  return Ab.c(this, 0);
};
h.nd = function() {
  return Ab.c(this, 1);
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
h.lb = function() {
  return 0 < this.n ? Ab.c(this, this.n - 1) : null;
};
h.mb = function() {
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
h.B = function(a, b) {
  return new Q(b, this.n, this.shift, this.root, this.F, this.s);
};
h.wa = function() {
  return new Q(this.l, this.n, this.shift, this.root, this.F, this.s);
};
h.A = function() {
  return this.l;
};
h.C = function(a, b) {
  return Qe(this, b)[b & 31];
};
h.ja = function(a, b, c) {
  return 0 <= b && b < this.n ? Ab.c(this, b) : c;
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
  for (var e = d.slice(0, 32), f = 32, g = (new Q(null, 32, 5, R, e, null)).Bb(null);;) {
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
h.B = function(a, b) {
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
  return Ab.e(this, b, null);
};
h.M = function(a, b, c) {
  return Ab.e(this, b, c);
};
h.jb = function(a, b, c) {
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
    return d === a.end ? null : F(Ab.c(a.Ha, d), new Md(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
h.K = function() {
  return this.end - this.start;
};
h.lb = function() {
  return Ab.c(this.Ha, this.end - 1);
};
h.mb = function() {
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
h.B = function(a, b) {
  return ff.q ? ff.q(b, this.Ha, this.start, this.end, this.s) : ff.call(null, b, this.Ha, this.start, this.end, this.s);
};
h.wa = function() {
  return new ef(this.l, this.Ha, this.start, this.end, this.s);
};
h.A = function() {
  return this.l;
};
h.C = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Pe(b, this.end - this.start) : Ab.c(this.Ha, this.start + b);
};
h.ja = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : Ab.e(this.Ha, this.start + b, c);
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
  return Ab.e(this, b, null);
};
h.M = function(a, b, c) {
  return Ab.e(this, b, c);
};
h.C = function(a, b) {
  if (this.root.G) {
    return Qe(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.ja = function(a, b, c) {
  return 0 <= b && b < this.n ? Ab.c(this, b) : c;
};
h.K = function() {
  if (this.root.G) {
    return this.n;
  }
  throw Error("count after persistent!");
};
h.ce = function(a, b, c) {
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
h.Ub = function(a, b, c) {
  return tc(this, b, c);
};
h.nb = function(a, b) {
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
h.ob = function() {
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
h.B = function(a, b) {
  return new jf(b, this.za, this.Qa, this.s);
};
h.A = function() {
  return this.l;
};
h.Y = function() {
  return Tc(Ic, this.l);
};
function kf(a, b, c, d, e) {
  this.l = a;
  this.count = b;
  this.za = c;
  this.Qa = d;
  this.s = e;
  this.k = 31858766;
  this.r = 8192;
}
h = kf.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.T = function(a, b) {
  var c;
  q(this.za) ? (c = this.Qa, c = new kf(this.l, this.count + 1, this.za, Wc.c(q(c) ? c : Ze, b), null)) : c = new kf(this.l, this.count + 1, Wc.c(this.za, b), Ze, null);
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
h.lb = function() {
  return A(this.za);
};
h.mb = function() {
  if (q(this.za)) {
    var a = C(this.za);
    return a ? new kf(this.l, this.count - 1, a, this.Qa, null) : new kf(this.l, this.count - 1, z(this.Qa), Ze, null);
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
h.B = function(a, b) {
  return new kf(b, this.count, this.za, this.Qa, this.s);
};
h.wa = function() {
  return new kf(this.l, this.count, this.za, this.Qa, this.s);
};
h.A = function() {
  return this.l;
};
h.Y = function() {
  return lf;
};
var lf = new kf(null, 0, null, Ze, 0);
function nf() {
  this.r = 0;
  this.k = 2097152;
}
nf.prototype.H = function() {
  return!1;
};
var of = new nf;
function pf(a, b) {
  return pd(M(b) ? G(a) === G(b) ? ee(ge, le.c(function(a) {
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
          e = b.fb;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof Cc && e === g.fb) {
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
h.B = function(a, b) {
  return new rf(this.h, this.i, b);
};
h.A = function() {
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
h.Bb = function() {
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
h.jb = function(a, b, c) {
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
h.Sb = function(a, b) {
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
  return kd(b) ? Jb(this, Ab.c(b, 0), Ab.c(b, 1)) : ob.e(yb, this, b);
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
h.B = function(a, b) {
  return new n(b, this.n, this.h, this.s);
};
h.wa = function() {
  return new n(this.l, this.n, this.h, this.s);
};
h.A = function() {
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
  this.Gb = a;
  this.sb = b;
  this.h = c;
  this.r = 56;
  this.k = 258;
}
h = sf.prototype;
h.Ub = function(a, b, c) {
  if (q(this.Gb)) {
    a = qf(this, b);
    if (-1 === a) {
      return this.sb + 2 <= 2 * tf ? (this.sb += 2, this.h.push(b), this.h.push(c), this) : ae.e(xf.c ? xf.c(this.sb, this.h) : xf.call(null, this.sb, this.h), b, c);
    }
    c !== this.h[a + 1] && (this.h[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.nb = function(a, b) {
  if (q(this.Gb)) {
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
h.ob = function() {
  if (q(this.Gb)) {
    return this.Gb = !1, new n(null, wd(this.sb), this.h, null);
  }
  throw Error("persistent! called twice");
};
h.L = function(a, b) {
  return Hb.e(this, b, null);
};
h.M = function(a, b, c) {
  if (q(this.Gb)) {
    return a = qf(this, b), -1 === a ? c : this.h[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.K = function() {
  if (q(this.Gb)) {
    return wd(this.sb);
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
    a = a.Ib(b);
    a.h[c] = g;
    a.h[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Ib(b);
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
      a = this.Ib(a);
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
    return s ? (b = Array(2 * (l + 4)), nd(this.h, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, nd(this.h, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.ra = !0, a = this.Ib(a), a.h = b, a.P |= g, a) : null;
  }
  l = this.h[2 * k];
  g = this.h[2 * k + 1];
  return null == l ? (l = g.Na(a, b + 5, c, d, e, f), l === g ? this : Cf.o(this, a, 2 * k + 1, l)) : zf(d, l) ? e === g ? this : Cf.o(this, a, 2 * k + 1, e) : s ? (f.ra = !0, Cf.ta(this, a, 2 * k, null, 2 * k + 1, Gf.Cb ? Gf.Cb(a, b + 5, l, g, c, d, e) : Gf.call(null, a, b + 5, l, g, c, d, e))) : null;
};
h.Zb = function() {
  return Hf.d ? Hf.d(this.h) : Hf.call(null, this.h);
};
h.Ib = function(a) {
  if (a === this.G) {
    return this;
  }
  var b = xd(this.P), c = Array(0 > b ? 4 : 2 * (b + 1));
  nd(this.h, 0, c, 0, 2 * b);
  return new Df(a, this.P, c);
};
h.$b = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.P & d)) {
    return this;
  }
  var e = xd(this.P & d - 1), f = this.h[2 * e], g = this.h[2 * e + 1];
  return null == f ? (a = g.$b(a + 5, b, c), a === g ? this : null != a ? new Df(null, this.P, Af.e(this.h, 2 * e + 1, a)) : this.P === d ? null : s ? new Df(null, this.P ^ d, Bf(this.h, e)) : null) : zf(c, f) ? new Df(null, this.P ^ d, Bf(this.h, e)) : s ? this : null;
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
h.Zb = function() {
  return If.d ? If.d(this.h) : If.call(null, this.h);
};
h.Ib = function(a) {
  return a === this.G ? this : new Ff(a, this.n, mb(this.h));
};
h.$b = function(a, b, c) {
  var d = b >>> a & 31, e = this.h[d];
  if (null != e) {
    a = e.$b(a + 5, b, c);
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
h.Zb = function() {
  return Hf.d ? Hf.d(this.h) : Hf.call(null, this.h);
};
h.Ib = function(a) {
  if (a === this.G) {
    return this;
  }
  var b = Array(2 * (this.n + 1));
  nd(this.h, 0, b, 0, 2 * this.n);
  return new Kf(a, this.Wa, this.n, b);
};
h.$b = function(a, b, c) {
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
  c.Cb = a;
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
h.B = function(a, b) {
  return new Lf(b, this.Pa, this.i, this.O, this.s);
};
h.A = function() {
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
          if (q(g) && (g = g.Zb(), q(g))) {
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
h.B = function(a, b) {
  return new Mf(b, this.Pa, this.i, this.O, this.s);
};
h.A = function() {
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
          if (q(k) && (k = k.Zb(), q(k))) {
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
h.Bb = function() {
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
h.jb = function(a, b, c) {
  if (null == b) {
    return this.ma && c === this.Da ? this : new Nf(this.l, this.ma ? this.n : this.n + 1, this.root, !0, c, null);
  }
  a = new yf;
  b = (null == this.root ? Ef : this.root).Ma(0, Ec(b), b, c, a);
  return b === this.root ? this : new Nf(this.l, a.ra ? this.n + 1 : this.n, b, this.ma, this.Da, null);
};
h.Sb = function(a, b) {
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
  return kd(b) ? Jb(this, Ab.c(b, 0), Ab.c(b, 1)) : ob.e(yb, this, b);
};
h.toString = function() {
  return zc(this);
};
h.J = function() {
  if (0 < this.n) {
    var a = null != this.root ? this.root.Zb() : null;
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
h.B = function(a, b) {
  return new Nf(b, this.n, this.root, this.ma, this.Da, this.s);
};
h.wa = function() {
  return new Nf(this.l, this.n, this.root, this.ma, this.Da, this.s);
};
h.A = function() {
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
    var c = this.root.$b(0, Ec(b), b);
    return c === this.root ? this : new Nf(this.l, this.n - 1, c, this.ma, this.Da, null);
  }
  return null;
};
var uf = new Nf(null, 0, null, !1, null, 0);
function Zc(a, b) {
  for (var c = a.length, d = 0, e = pc(uf);;) {
    if (d < c) {
      var f = d + 1, e = e.Ub(null, a[d], b[d]), d = f
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
h.Ub = function(a, b, c) {
  return Pf(this, b, c);
};
h.nb = function(a, b) {
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
h.ob = function() {
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
h.B = function(a, b) {
  return new Rf(this.oa, b);
};
h.A = function() {
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
h.B = function(a, b) {
  return new Tf(this.oa, b);
};
h.A = function() {
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
    return q(fe(ge, a)) ? ob.c(function(a, b) {
      return Wc.c(q(a) ? a : vf, b);
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
    return q(fe(ge, b)) ? ob.c(function(a) {
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
h.Bb = function() {
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
h.be = function(a, b) {
  return new Xf(this.l, Lb(this.ab, b), null);
};
h.K = function() {
  return vb(this.ab);
};
h.H = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.k & 4096 || b.Ci ? !0 : b.k ? !1 : r(Pb, b) : r(Pb, b)) && G(c) === G(b) && ee(function(a) {
    return qd(c, a);
  }, b);
};
h.B = function(a, b) {
  return new Xf(b, this.ab, this.s);
};
h.wa = function() {
  return new Xf(this.l, this.ab, this.s);
};
h.A = function() {
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
h.nb = function(a, b) {
  this.Xa = ae.e(this.Xa, b, null);
  return this;
};
h.ob = function() {
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
          var d = b + 1, c = c.nb(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.ob(null);
  }
  if (s) {
    for (d = pc(Zf);;) {
      if (null != a) {
        b = a.ka(null), d = d.nb(null, a.W(null)), a = b;
      } else {
        return d.ob(null);
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
function eg(a, b, c, d, e) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.s = e;
  this.k = 32375006;
  this.r = 8192;
}
h = eg.prototype;
h.N = function() {
  var a = this.s;
  return null != a ? a : this.s = a = Oc(this);
};
h.ka = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new eg(this.l, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new eg(this.l, this.start + this.step, this.end, this.step, null) : null;
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
  return null != ec(this) ? new eg(this.l, this.start + this.step, this.end, this.step, null) : Ic;
};
h.H = function(a, b) {
  return Qc(this, b);
};
h.B = function(a, b) {
  return new eg(b, this.start, this.end, this.step, this.s);
};
h.wa = function() {
  return new eg(this.l, this.start, this.end, this.step, this.s);
};
h.A = function() {
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
var fg = function() {
  function a(a, b, c) {
    return new eg(null, a, b, c, null);
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
}(), gg = function() {
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
    gg.c(a, b);
    return b;
  }
  function b(a) {
    gg.d(a);
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
kf.prototype.Z = !0;
kf.prototype.I = function(a, b, c) {
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
eg.prototype.Z = !0;
eg.prototype.I = function(a, b, c) {
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
  this.Gh = c;
  this.Rb = d;
  this.k = 2153938944;
  this.r = 16386;
}
h = zg.prototype;
h.N = function() {
  return la(this);
};
h.ee = function(a, b, c) {
  a = z(this.Rb);
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
h.de = function(a, b, c) {
  return this.Rb = $c.e(this.Rb, b, c);
};
h.fe = function(a, b) {
  return this.Rb = ad.c(this.Rb, b);
};
h.I = function(a, b, c) {
  jc(b, "#\x3cAtom: ");
  sg(this.state, b, c);
  return jc(b, "\x3e");
};
h.A = function() {
  return this.l;
};
h.Ab = function() {
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
    var c = a.Gh;
    if (null != c && !q(c.d ? c.d(b) : c.call(null, b))) {
      throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(ug.f(E([Hd(new Cc(null, "validate", "validate", 1233162959, null), new Cc(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Rb && mc(a, c, b);
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
  if (M(b)) {
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
      if (a ? q(q(null) ? null : a.xi) || (a.la ? 0 : r(Lg, a)) : r(Lg, a)) {
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
                                  var l = Ab.c(b, k), l = new Q(null, 2, 5, R, [d.d ? d.d(l) : d.call(null, l), O(e[l])], null);
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
  this.Wd = a;
  this.r = 0;
  this.k = 2153775104;
}
Pg.prototype.N = function() {
  return Ca(ug.f(E([this], 0)));
};
Pg.prototype.I = function(a, b) {
  return jc(b, [v('#uuid "'), v(this.Wd), v('"')].join(""));
};
Pg.prototype.H = function(a, b) {
  return b instanceof Pg && this.Wd === b.Wd;
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
Fi = new P(null, "location", "location"), Gi = new P(null, "bounds", "bounds"), Ii = new P(null, "path-selections", "path-selections"), Ji = new P(null, "investor-companies", "investor-companies"), Ki = new P(null, "employee-count-delta", "employee-count-delta"), Li = new P(null, "turnover-delta", "turnover-delta"), Mi = new P(null, "investor_company_count", "investor_company_count"), Ni = new P(null, "catch-exception", "catch-exception"), Oi = new P(null, "employee-count", "employee-count"), Pi = 
new P(null, "instrument", "instrument"), Qi = new P(null, "pan-pending", "pan-pending"), Ri = new P(null, "tx-listen", "tx-listen"), Si = new P(null, "?investor_company_name_na", "?investor_company_name_na"), Ti = new P(null, "path-highlights", "path-highlights"), Ui = new P(null, "continue-block", "continue-block"), Vi = new P(null, "investor_company_uid", "investor_company_uid"), Wi = new P(null, "investment_uid", "investment_uid"), Xi = new P("om.core", "defer", "om.core/defer"), Yi = new P(null, 
"uk-constituencies-rtree", "uk-constituencies-rtree"), Zi = new P(null, "properties", "properties"), $i = new P(null, "prev", "prev"), aj = new P(null, "employee_count", "employee_count"), bj = new P(null, "clojure", "clojure"), cj = new P(null, "click-listener", "click-listener"), dj = new P(null, "selection-investment-account-timelines", "selection-investment-account-timelines"), ej = new P(null, "constituencies", "constituencies"), fj = new P(null, "shared", "shared"), gj = new P(null, "selection-investments", 
"selection-investments"), hj = new P(null, "plus?", "plus?"), ij = new P(null, "app-state", "app-state"), jj = new P(null, "curr", "curr"), kj = new P(null, "title", "title"), lj = new P(null, "old-state", "old-state"), mj = new P(null, "constituency_count", "constituency_count"), nj = new P(null, "popupAnchor", "popupAnchor"), oj = new P(null, "accepts", "accepts"), pj = new P(null, "size", "size"), qj = new P(null, "span.prev", "span.prev"), rj = new P(null, "route-select", "route-select"), sj = 
new P(null, "?portfolio_company_site_postcode", "?portfolio_company_site_postcode"), tj = new P(null, "fill", "fill"), uj = new P(null, "div.tbl-row", "div.tbl-row"), vj = new P(null, "min-zoom", "min-zoom"), wj = new P(null, "investor_company_name", "investor_company_name"), xj = new P(null, "onClick", "onClick"), yj = new P(null, "?boundaryline_compact_name_na", "?boundaryline_compact_name_na"), zj = new P(null, "paths", "paths"), Aj = new P(null, "div.grid", "div.grid"), Bj = new P(null, "i.icon-asc", 
"i.icon-asc"), Cj = new P(null, "dec", "dec"), Dj = new P(null, "h", "h"), Ej = new P(null, "latest_turnover_delta", "latest_turnover_delta"), fb = new P(null, "print-length", "print-length"), Fj = new P(null, "categories", "categories"), Gj = new P(null, "ic-count", "ic-count"), Hj = new P(null, "popup-selected", "popup-selected"), Ij = new P(null, "all-investment-stats", "all-investment-stats"), Jj = new P(null, "turnover", "turnover"), Kj = new P(null, "search-results", "search-results"), Lj = 
new P(null, "uid", "uid"), Mj = new P(null, "type", "type"), Nj = new P(null, "all-portfolio-company-site-stats", "all-portfolio-company-site-stats"), Pj = new P("om.core", "pass", "om.core/pass"), Qj = new P(null, "textarea", "textarea"), Rj = new P(null, "yAxis", "yAxis"), Sj = new P(null, "small", "small"), s = new P(null, "else", "else"), Tj = new P(null, "htmlFor", "htmlFor"), Uj = new P("cljs.core", "not-found", "cljs.core/not-found"), Vj = new P(null, "new-value", "new-value"), Wj = new P(null, 
"route-change-view", "route-change-view"), cb = new P(null, "readably", "readably"), Xj = new P(null, "converters", "converters"), Yj = new P(null, "xAxis", "xAxis"), Zj = new P(null, "sf", "sf"), ak = new P(null, "zoom", "zoom"), bk = new P(null, "highlighted", "highlighted"), ck = new P(null, "web_url", "web_url"), Ag = new P(null, "validator", "validator"), db = new P(null, "meta", "meta"), dk = new P(null, "min", "min"), ek = new P(null, "stats", "stats"), fk = new P(null, "latest_employee_count", 
"latest_employee_count"), gk = new P(null, "old-value", "old-value"), hk = new P(null, "averages", "averages"), ik = new P(null, "w", "w"), jk = new P(null, "opts", "opts"), kk = new P(null, "update-selection-investment-aggs-table-view", "update-selection-investment-aggs-table-view"), lk = new P(null, "formatter", "formatter"), mk = new P(null, "i.icon-desc", "i.icon-desc"), nk = new P(null, "series", "series"), ok = new P(null, "turnover_delta", "turnover_delta"), pk = new P(null, "input", "input"), 
qk = new P(null, "employee_count_delta", "employee_count_delta"), rk = new P(null, "div.tbl-cell", "div.tbl-cell"), sk = new P(null, "for", "for"), tk = new P(null, "order", "order"), uk = new P(null, "mp", "mp"), vk = new P(null, "y1-title", "y1-title"), wk = new P(null, "investor_companies", "investor_companies"), xk = new P(null, "className", "className"), yk = new P(null, "investor-company", "investor-company"), zk = new P(null, "leaflet-path", "leaflet-path"), Ak = new P(null, "div.tbl-cell.charts", 
"div.tbl-cell.charts"), Bk = new P(null, "change-view", "change-view"), Ck = new P(null, "fn", "fn"), Dk = new P(null, "id", "id"), Ek = new P(null, "asc", "asc"), Fk = new P(null, "value", "value"), Gk = new P(null, "selected", "selected"), Hk = new P(null, "select", "select"), Ik = new P(null, "description", "description"), Jk = new P(null, "height", "height"), Kk = new P(null, "compact_name", "compact_name"), Lk = new P(null, "iconSize", "iconSize"), Mk = new P(null, "tag", "tag"), Nk = new P(null, 
"i.icon-arrow-left", "i.icon-arrow-left"), Ok = new P(null, "li", "li"), Pk = new P(null, "benchmark", "benchmark"), Qk = new P(null, "contents", "contents"), Rk = new P(null, "path-fn", "path-fn"), Sk = new P(null, "rotation", "rotation"), Tk = new P(null, "political_party", "political_party"), Uk = new P(null, "portfolio_company_name", "portfolio_company_name"), Vk = new P(null, "portfolio_companies", "portfolio_companies"), Wk = new P(null, "new-state", "new-state");
function Xk(a, b, c) {
  a = a.search(Jg(new n(null, 4, [ci, b, Yh, c, ik, 0, Dj, 0], null)));
  return xe(function(a) {
    return gju.ej(Jg(new n(null, 2, [Mj, "Point", Ch, new Q(null, 2, 5, R, [b, c], null)], null)), a.Ki);
  }, a);
}
;function Yk() {
  0 != Zk && ($k[la(this)] = this);
}
var Zk = 0, $k = {};
Yk.prototype.re = !1;
Yk.prototype.Wb = function() {
  if (!this.re && (this.re = !0, this.ya(), 0 != Zk)) {
    var a = la(this);
    delete $k[a];
  }
};
Yk.prototype.ya = function() {
  if (this.ec) {
    for (;this.ec.length;) {
      this.ec.shift()();
    }
  }
};
function al(a) {
  a && "function" == typeof a.Wb && a.Wb();
}
;var bl, cl, dl, el;
function fl() {
  return ca.navigator ? ca.navigator.userAgent : null;
}
el = dl = cl = bl = !1;
var gl;
if (gl = fl()) {
  var hl = ca.navigator;
  bl = 0 == gl.indexOf("Opera");
  cl = !bl && -1 != gl.indexOf("MSIE");
  dl = !bl && -1 != gl.indexOf("WebKit");
  el = !bl && !dl && "Gecko" == hl.product;
}
var il = bl, jl = cl, kl = el, ll = dl;
function ml() {
  var a = ca.document;
  return a ? a.documentMode : void 0;
}
var nl;
a: {
  var ol = "", pl;
  if (il && ca.opera) {
    var ql = ca.opera.version, ol = "function" == typeof ql ? ql() : ql
  } else {
    if (kl ? pl = /rv\:([^\);]+)(\)|;)/ : jl ? pl = /MSIE\s+([^\);]+)(\)|;)/ : ll && (pl = /WebKit\/(\S+)/), pl) {
      var rl = pl.exec(fl()), ol = rl ? rl[1] : ""
    }
  }
  if (jl) {
    var sl = ml();
    if (sl > parseFloat(ol)) {
      nl = String(sl);
      break a;
    }
  }
  nl = ol;
}
var tl = {};
function ul(a) {
  var b;
  if (!(b = tl[a])) {
    b = 0;
    for (var c = va(String(nl)).split("."), d = va(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var t = l.exec(g) || ["", "", ""], w = p.exec(k) || ["", "", ""];
        if (0 == t[0].length && 0 == w[0].length) {
          break;
        }
        b = ((0 == t[1].length ? 0 : parseInt(t[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == t[1].length ? 0 : parseInt(t[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == t[2].length) < (0 == w[2].length) ? -1 : (0 == t[2].length) > (0 == w[2].length) ? 1 : 0) || (t[2] < w[2] ? -1 : t[2] > w[2] ? 1 : 0);
      } while (0 == b);
    }
    b = tl[a] = 0 <= b;
  }
  return b;
}
var vl = ca.document, wl = vl && jl ? ml() || ("CSS1Compat" == vl.compatMode ? parseInt(nl, 10) : 5) : void 0;
var xl = !jl || jl && 9 <= wl, yl = jl && !ul("9");
!ll || ul("528");
kl && ul("1.9b") || jl && ul("8") || il && ul("9.5") || ll && ul("528");
kl && !ul("8") || jl && ul("9");
function zl(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
}
h = zl.prototype;
h.ya = function() {
};
h.Wb = function() {
};
h.Pb = !1;
h.defaultPrevented = !1;
h.Mc = !0;
h.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Mc = !1;
};
function Al(a) {
  Al[" "](a);
  return a;
}
Al[" "] = fa;
function Bl(a, b) {
  a && this.Ac(a, b);
}
ta(Bl, zl);
h = Bl.prototype;
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
  zl.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (kl) {
      var e;
      a: {
        try {
          Al(d.nodeName);
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
  this.offsetX = ll || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = ll || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  delete this.Pb;
};
h.preventDefault = function() {
  Bl.xb.preventDefault.call(this);
  var a = this.xd;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, yl) {
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
var Cl = 0;
function Dl() {
}
h = Dl.prototype;
h.key = 0;
h.vb = !1;
h.kc = !1;
h.Ac = function(a, b, c, d, e, f) {
  if (ja(a)) {
    this.Ce = !0;
  } else {
    if (a && a.handleEvent && ja(a.handleEvent)) {
      this.Ce = !1;
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.cb = a;
  this.Pe = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Kb = f;
  this.kc = !1;
  this.key = ++Cl;
  this.vb = !1;
};
h.handleEvent = function(a) {
  return this.Ce ? this.cb.call(this.Kb || this.src, a) : this.cb.handleEvent.call(this.cb, a);
};
var El = {}, Fl = {}, Gl = {}, Hl = {};
function Il(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Il(a, b[f], c, d, e);
    }
    return null;
  }
  a = Jl(a, b, c, !1, d, e);
  b = a.key;
  El[b] = a;
  return b;
}
function Jl(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var g = Fl;
  b in g || (g[b] = {xa:0, Fa:0});
  g = g[b];
  e in g || (g[e] = {xa:0, Fa:0}, g.xa++);
  var g = g[e], k = la(a), l;
  g.Fa++;
  if (g[k]) {
    l = g[k];
    for (var p = 0;p < l.length;p++) {
      if (g = l[p], g.cb == c && g.Kb == f) {
        if (g.vb) {
          break;
        }
        d || (l[p].kc = !1);
        return l[p];
      }
    }
  } else {
    l = g[k] = [], g.xa++;
  }
  p = Kl();
  g = new Dl;
  g.Ac(c, p, a, b, e, f);
  g.kc = d;
  p.src = a;
  p.cb = g;
  l.push(g);
  Gl[k] || (Gl[k] = []);
  Gl[k].push(g);
  a.addEventListener ? a != ca && a.qe || a.addEventListener(b, p, e) : a.attachEvent(b in Hl ? Hl[b] : Hl[b] = "on" + b, p);
  return g;
}
function Kl() {
  var a = Ll, b = xl ? function(c) {
    return a.call(b.src, b.cb, c);
  } : function(c) {
    c = a.call(b.src, b.cb, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Ml(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Ml(a, b[f], c, d, e);
    }
    return null;
  }
  a = Jl(a, b, c, !0, d, e);
  b = a.key;
  El[b] = a;
  return b;
}
function Nl(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Nl(a, b[f], c, d, e);
    }
  } else {
    d = !!d;
    a: {
      f = Fl;
      if (b in f && (f = f[b], d in f && (f = f[d], a = la(a), f[a]))) {
        a = f[a];
        break a;
      }
      a = null;
    }
    if (a) {
      for (f = 0;f < a.length;f++) {
        if (a[f].cb == c && a[f].capture == d && a[f].Kb == e) {
          Ol(a[f].key);
          break;
        }
      }
    }
  }
}
function Ol(a) {
  var b = El[a];
  if (!b || b.vb) {
    return!1;
  }
  var c = b.src, d = b.type, e = b.Pe, f = b.capture;
  c.removeEventListener ? c != ca && c.qe || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Hl ? Hl[d] : Hl[d] = "on" + d, e);
  c = la(c);
  Gl[c] && (e = Gl[c], Ma(e, b), 0 == e.length && delete Gl[c]);
  b.vb = !0;
  if (b = Fl[d][f][c]) {
    b.Fe = !0, Pl(d, f, c, b);
  }
  delete El[a];
  return!0;
}
function Pl(a, b, c, d) {
  if (!d.Cc && d.Fe) {
    for (var e = 0, f = 0;e < d.length;e++) {
      d[e].vb ? d[e].Pe.src = null : (e != f && (d[f] = d[e]), f++);
    }
    d.length = f;
    d.Fe = !1;
    0 == f && (delete Fl[a][b][c], Fl[a][b].xa--, 0 == Fl[a][b].xa && (delete Fl[a][b], Fl[a].xa--), 0 == Fl[a].xa && delete Fl[a]);
  }
}
function Ql(a) {
  var b = 0;
  if (null != a) {
    if (a = la(a), Gl[a]) {
      a = Gl[a];
      for (var c = a.length - 1;0 <= c;c--) {
        Ol(a[c].key), b++;
      }
    }
  } else {
    Sa(El, function(a, c) {
      Ol(c);
      b++;
    });
  }
}
function Rl(a, b, c, d, e) {
  var f = 1;
  b = la(b);
  if (a[b]) {
    var g = --a.Fa, k = a[b];
    k.Cc ? k.Cc++ : k.Cc = 1;
    try {
      for (var l = k.length, p = 0;p < l;p++) {
        var t = k[p];
        t && !t.vb && (f &= !1 !== Sl(t, e));
      }
    } finally {
      a.Fa = Math.max(g, a.Fa), k.Cc--, Pl(c, d, b, k);
    }
  }
  return Boolean(f);
}
function Sl(a, b) {
  a.kc && Ol(a.key);
  return a.handleEvent(b);
}
function Ll(a, b) {
  if (a.vb) {
    return!0;
  }
  var c = a.type, d = Fl;
  if (!(c in d)) {
    return!0;
  }
  var d = d[c], e, f;
  if (!xl) {
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
    l = new Bl;
    l.Ac(e, this);
    e = !0;
    try {
      if (g) {
        for (var t = [], w = l.currentTarget;w;w = w.parentNode) {
          t.push(w);
        }
        f = d[!0];
        f.Fa = f.xa;
        for (var D = t.length - 1;!l.Pb && 0 <= D && f.Fa;D--) {
          l.currentTarget = t[D], e &= Rl(f, t[D], c, !0, l);
        }
        if (k) {
          for (f = d[!1], f.Fa = f.xa, D = 0;!l.Pb && D < t.length && f.Fa;D++) {
            l.currentTarget = t[D], e &= Rl(f, t[D], c, !1, l);
          }
        }
      } else {
        e = Sl(a, l);
      }
    } finally {
      t && (t.length = 0);
    }
    return e;
  }
  c = new Bl(b, this);
  return e = Sl(a, c);
}
;function Tl() {
  Yk.call(this);
}
ta(Tl, Yk);
h = Tl.prototype;
h.qe = !0;
h.Od = null;
h.addEventListener = function(a, b, c, d) {
  Il(this, a, b, c, d);
};
h.removeEventListener = function(a, b, c, d) {
  Nl(this, a, b, c, d);
};
h.dispatchEvent = function(a) {
  var b = a.type || a, c = Fl;
  if (b in c) {
    if (ia(a)) {
      a = new zl(a, this);
    } else {
      if (a instanceof zl) {
        a.target = a.target || this;
      } else {
        var d = a;
        a = new zl(b, this);
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
      for (var g = e.length - 1;!a.Pb && 0 <= g && f.Fa;g--) {
        a.currentTarget = e[g], d &= Rl(f, e[g], a.type, !0, a) && !1 != a.Mc;
      }
    }
    if (!1 in c) {
      if (f = c[!1], f.Fa = f.xa, b) {
        for (g = 0;!a.Pb && g < e.length && f.Fa;g++) {
          a.currentTarget = e[g], d &= Rl(f, e[g], a.type, !1, a) && !1 != a.Mc;
        }
      } else {
        for (e = this;!a.Pb && e && f.Fa;e = e.Od) {
          a.currentTarget = e, d &= Rl(f, e, a.type, !1, a) && !1 != a.Mc;
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
  Tl.xb.ya.call(this);
  Ql(this);
  this.Od = null;
};
function Ul(a, b) {
  Yk.call(this);
  this.ac = a || 1;
  this.hc = b || ca;
  this.Sc = qa(this.Bh, this);
  this.Fd = sa();
}
ta(Ul, Tl);
h = Ul.prototype;
h.enabled = !1;
h.ia = null;
h.setInterval = function(a) {
  this.ac = a;
  this.ia && this.enabled ? (this.stop(), this.start()) : this.ia && this.stop();
};
h.Bh = function() {
  if (this.enabled) {
    var a = sa() - this.Fd;
    0 < a && a < 0.8 * this.ac ? this.ia = this.hc.setTimeout(this.Sc, this.ac - a) : (this.dispatchEvent(Vl), this.enabled && (this.ia = this.hc.setTimeout(this.Sc, this.ac), this.Fd = sa()));
  }
};
h.start = function() {
  this.enabled = !0;
  this.ia || (this.ia = this.hc.setTimeout(this.Sc, this.ac), this.Fd = sa());
};
h.stop = function() {
  this.enabled = !1;
  this.ia && (this.hc.clearTimeout(this.ia), this.ia = null);
};
h.ya = function() {
  Ul.xb.ya.call(this);
  this.stop();
  delete this.hc;
};
var Vl = "tick";
function Wl(a) {
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
function Xl(a, b, c) {
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
      for (var e = Wl(a), f = e.length, g = 0;g < f;g++) {
        b.call(c, e[g], d && d[g], a);
      }
    }
  }
}
;function Yl(a, b) {
  this.tb = {};
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
      a instanceof Yl ? (c = a.zd(), d = a.xc()) : (c = Ua(a), d = Ta(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
h = Yl.prototype;
h.xa = 0;
h.xc = function() {
  Zl(this);
  for (var a = [], b = 0;b < this.ba.length;b++) {
    a.push(this.tb[this.ba[b]]);
  }
  return a;
};
h.zd = function() {
  Zl(this);
  return this.ba.concat();
};
h.If = function() {
  return Object.prototype.hasOwnProperty.call(this.tb, "Content-Type");
};
function Zl(a) {
  if (a.xa != a.ba.length) {
    for (var b = 0, c = 0;b < a.ba.length;) {
      var d = a.ba[b];
      Object.prototype.hasOwnProperty.call(a.tb, d) && (a.ba[c++] = d);
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
  return Object.prototype.hasOwnProperty.call(this.tb, a) ? this.tb[a] : b;
};
h.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.tb, a) || (this.xa++, this.ba.push(a));
  this.tb[a] = b;
};
h.Bf = function() {
  return new Yl(this);
};
function $l(a) {
  return am(a || arguments.callee.caller, []);
}
function am(a, b) {
  var c = [];
  if (La(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(bm(a) + "(");
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
            f = (f = bm(f)) ? f : "[fn]";
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
        c.push(am(a.caller, b));
      } catch (g) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function bm(a) {
  if (cm[a]) {
    return cm[a];
  }
  a = String(a);
  if (!cm[a]) {
    var b = /function ([^\(]+)/.exec(a);
    cm[a] = b ? b[1] : "[Anonymous]";
  }
  return cm[a];
}
var cm = {};
function dm(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
dm.prototype.ue = null;
dm.prototype.te = null;
var em = 0;
dm.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || em++;
  d || sa();
  this.cc = a;
  this.Kg = b;
  delete this.ue;
  delete this.te;
};
dm.prototype.Te = function(a) {
  this.cc = a;
};
function fm(a) {
  this.Lg = a;
}
fm.prototype.Ic = null;
fm.prototype.cc = null;
fm.prototype.Tc = null;
fm.prototype.xe = null;
function gm(a, b) {
  this.name = a;
  this.value = b;
}
gm.prototype.toString = function() {
  return this.name;
};
var hm = new gm("SEVERE", 1E3), im = new gm("WARNING", 900), jm = new gm("INFO", 800), km = new gm("CONFIG", 700), lm = new gm("FINE", 500), mm = new gm("FINEST", 300);
h = fm.prototype;
h.getParent = function() {
  return this.Ic;
};
h.ve = function() {
  this.Tc || (this.Tc = {});
  return this.Tc;
};
h.Te = function(a) {
  this.cc = a;
};
function nm(a) {
  if (a.cc) {
    return a.cc;
  }
  if (a.Ic) {
    return nm(a.Ic);
  }
  Fa("Root logger has no level set.");
  return null;
}
h.log = function(a, b, c) {
  if (a.value >= nm(this).value) {
    for (a = this.Mf(a, b, c), b = "log:" + a.Kg, ca.console && (ca.console.timeStamp ? ca.console.timeStamp(b) : ca.console.markTimeline && ca.console.markTimeline(b)), ca.msWriteProfilerMark && ca.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if (c.xe) {
        for (var e = 0, f = void 0;f = c.xe[e];e++) {
          f(d);
        }
      }
      b = b.getParent();
    }
  }
};
h.Mf = function(a, b, c) {
  var d = new dm(a, String(b), this.Lg);
  if (c) {
    d.ue = c;
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
      e = "Message: " + wa(g.message) + '\nUrl: \x3ca href\x3d"view-source:' + g.fileName + '" target\x3d"_new"\x3e' + g.fileName + "\x3c/a\x3e\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + wa(g.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + wa($l(f) + "-\x3e ");
    } catch (K) {
      e = "Exception trying to expose exception! You win, we lose. " + K;
    }
    d.te = e;
  }
  return d;
};
h.info = function(a, b) {
  this.log(jm, a, b);
};
h.Gf = function(a, b) {
  this.log(km, a, b);
};
function om(a, b) {
  a.log(lm, b, void 0);
}
var pm = {}, qm = null;
function rm(a) {
  qm || (qm = new fm(""), pm[""] = qm, qm.Te(km));
  var b;
  if (!(b = pm[a])) {
    b = new fm(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = rm(a.substr(0, c));
    c.ve()[d] = b;
    b.Ic = c;
    pm[a] = b;
  }
  return b;
}
;function sm() {
}
sm.prototype.Yd = null;
function tm(a) {
  var b;
  (b = a.Yd) || (b = {}, um(a) && (b[0] = !0, b[1] = !0), b = a.Yd = b);
  return b;
}
;var vm;
function wm() {
}
ta(wm, sm);
function xm(a) {
  return(a = um(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function um(a) {
  if (!a.ye && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.ye = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.ye;
}
vm = new wm;
var ym = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function zm(a) {
  Yk.call(this);
  this.headers = new Yl;
  this.Qc = a || null;
}
ta(zm, Tl);
zm.prototype.Ia = rm("goog.net.XhrIo");
var Am = /^https?$/i, Bm = [];
function Cm(a, b) {
  var c = new zm;
  Bm.push(c);
  b && Il(c, "complete", b);
  Il(c, "ready", ra(Dm, c));
  c.send(a, void 0, void 0, void 0);
}
function Dm(a) {
  a.Wb();
  Ma(Bm, a);
}
h = zm.prototype;
h.Ya = !1;
h.V = null;
h.Pc = null;
h.Bc = "";
h.De = "";
h.bc = "";
h.wd = !1;
h.zc = !1;
h.Dd = !1;
h.rb = !1;
h.gc = 0;
h.yb = null;
h.Re = "";
h.Ih = !1;
h.send = function(a, b, c, d) {
  if (this.V) {
    throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.Bc + "; newUri\x3d" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.Bc = a;
  this.bc = "";
  this.De = b;
  this.wd = !1;
  this.Ya = !0;
  this.V = this.Qc ? xm(this.Qc) : xm(vm);
  this.Pc = this.Qc ? tm(this.Qc) : tm(vm);
  this.V.onreadystatechange = qa(this.Ne, this);
  try {
    om(this.Ia, Em(this, "Opening Xhr")), this.Dd = !0, this.V.open(b, a, !0), this.Dd = !1;
  } catch (e) {
    om(this.Ia, Em(this, "Error opening Xhr: " + e.message));
    Fm(this, e);
    return;
  }
  a = c || "";
  var f = this.headers.Bf();
  d && Xl(d, function(a, b) {
    f.set(b, a);
  });
  d = ca.FormData && a instanceof ca.FormData;
  "POST" != b || f.If() || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  Xl(f, function(a, b) {
    this.V.setRequestHeader(b, a);
  }, this);
  this.Re && (this.V.responseType = this.Re);
  "withCredentials" in this.V && (this.V.withCredentials = this.Ih);
  try {
    this.yb && (ca.clearTimeout(this.yb), this.yb = null), 0 < this.gc && (om(this.Ia, Em(this, "Will abort after " + this.gc + "ms if incomplete")), this.yb = ca.setTimeout(qa(this.Dh, this), this.gc)), om(this.Ia, Em(this, "Sending request")), this.zc = !0, this.V.send(a), this.zc = !1;
  } catch (g) {
    om(this.Ia, Em(this, "Send error: " + g.message)), Fm(this, g);
  }
};
h.Dh = function() {
  "undefined" != typeof ba && this.V && (this.bc = "Timed out after " + this.gc + "ms, aborting", om(this.Ia, Em(this, this.bc)), this.dispatchEvent("timeout"), this.abort(8));
};
function Fm(a, b) {
  a.Ya = !1;
  a.V && (a.rb = !0, a.V.abort(), a.rb = !1);
  a.bc = b;
  Gm(a);
  Hm(a);
}
function Gm(a) {
  a.wd || (a.wd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
h.abort = function() {
  this.V && this.Ya && (om(this.Ia, Em(this, "Aborting")), this.Ya = !1, this.rb = !0, this.V.abort(), this.rb = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Hm(this));
};
h.ya = function() {
  this.V && (this.Ya && (this.Ya = !1, this.rb = !0, this.V.abort(), this.rb = !1), Hm(this, !0));
  zm.xb.ya.call(this);
};
h.Ne = function() {
  this.Dd || this.zc || this.rb ? Im(this) : this.Zg();
};
h.Zg = function() {
  Im(this);
};
function Im(a) {
  if (a.Ya && "undefined" != typeof ba) {
    if (a.Pc[1] && 4 == Jm(a) && 2 == Lm(a)) {
      om(a.Ia, Em(a, "Local request error detected and ignored"));
    } else {
      if (a.zc && 4 == Jm(a)) {
        ca.setTimeout(qa(a.Ne, a), 0);
      } else {
        if (a.dispatchEvent("readystatechange"), 4 == Jm(a)) {
          om(a.Ia, Em(a, "Request complete"));
          a.Ya = !1;
          try {
            var b = Lm(a), c, d;
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
                var f = String(a.Bc).match(ym)[1] || null;
                if (!f && self.location) {
                  var g = self.location.protocol, f = g.substr(0, g.length - 1)
                }
                e = !Am.test(f ? f.toLowerCase() : "");
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
                om(a.Ia, "Can not get status: " + l.message), k = "";
              }
              a.bc = k + " [" + Lm(a) + "]";
              Gm(a);
            }
          } finally {
            Hm(a);
          }
        }
      }
    }
  }
}
function Hm(a, b) {
  if (a.V) {
    var c = a.V, d = a.Pc[0] ? fa : null;
    a.V = null;
    a.Pc = null;
    a.yb && (ca.clearTimeout(a.yb), a.yb = null);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
      a.Ia.log(hm, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
    }
  }
}
function Jm(a) {
  return a.V ? a.V.readyState : 0;
}
function Lm(a) {
  try {
    return 2 < Jm(a) ? a.V.status : -1;
  } catch (b) {
    return a.Ia.log(im, "Can not get status: " + b.message, void 0), -1;
  }
}
function Mm(a) {
  try {
    return a.V ? a.V.responseText : "";
  } catch (b) {
    return om(a.Ia, "Can not get responseText: " + b.message), "";
  }
}
function Em(a, b) {
  return b + " [" + a.De + " " + a.Bc + " " + Lm(a) + "]";
}
;var Nm, Om = !kl && !jl || jl && jl && 9 <= wl || kl && ul("1.9.1");
jl && ul("9");
function Pm(a) {
  a = a.className;
  return ia(a) && a.match(/\S+/g) || [];
}
function Qm(a, b) {
  for (var c = Pm(a), d = Oa(arguments, 1), e = c, f = 0;f < d.length;f++) {
    La(e, d[f]) || e.push(d[f]);
  }
  a.className = c.join(" ");
}
function Rm(a, b) {
  var c = Pm(a), d = Oa(arguments, 1), c = Sm(c, d);
  a.className = c.join(" ");
}
function Sm(a, b) {
  return Ka(a, function(a) {
    return!La(b, a);
  });
}
function Tm(a) {
  La(Pm(a), "open") ? Rm(a, "open") : Qm(a, "open");
}
;function Um() {
  var a = document;
  return a.querySelectorAll && a.querySelector ? a.querySelectorAll("HTML") : a.getElementsByTagName("HTML");
}
function Vm(a, b, c) {
  function d(c) {
    c && b.appendChild(ia(c) ? a.createTextNode(c) : c);
  }
  for (var e = 1;e < c.length;e++) {
    var f = c[e];
    !ha(f) || ka(f) && 0 < f.nodeType ? d(f) : Ja(Wm(f) ? Na(f) : f, d);
  }
}
function Xm(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Wm(a) {
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
function Ym(a) {
  this.sd = a || ca.document || document;
}
h = Ym.prototype;
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
  Vm(Xm(a), a, arguments);
};
h.ve = function(a) {
  return Om && void 0 != a.children ? a.children : Ka(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
};
function Zm(a, b, c) {
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
var $m = function() {
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
function an(a) {
  return a.toUpperCase();
}
function bn(a) {
  return a.toLowerCase();
}
function cn(a) {
  return 2 > G(a) ? an(a) : [v(an(Ad.e(a, 0, 1))), v(bn(Ad.c(a, 1)))].join("");
}
function dn(a, b) {
  if (0 >= b || b >= 2 + G(a)) {
    return Wc.c(af(F("", le.c(v, z(a)))), "");
  }
  if (q(x.c ? x.c(1, b) : x.call(null, 1, b))) {
    return new Q(null, 1, 5, R, [a], null);
  }
  if (q(x.c ? x.c(2, b) : x.call(null, 2, b))) {
    return new Q(null, 2, 5, R, ["", a], null);
  }
  var c = b - 2;
  return Wc.c(af(F("", df.e(af(le.c(v, z(a))), 0, c))), Ad.c(a, c));
}
var en = function() {
  function a(a, b, c) {
    if (x.c("" + v(b), "/(?:)/")) {
      b = dn(a, c);
    } else {
      if (1 > c) {
        b = af(("" + v(a)).split(b));
      } else {
        a: {
          for (var g = c, k = Ze;;) {
            if (x.c(g, 1)) {
              b = Wc.c(k, a);
              break a;
            }
            var l = kg(b, a);
            if (q(l)) {
              var p = l, l = a.indexOf(p), p = a.substring(l + G(p)), g = g - 1, k = Wc.c(k, a.substring(0, l));
              a = p;
            } else {
              b = Wc.c(k, a);
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
function fn(a) {
  for (var b = gn, c = new Xa, d = a.length, e = 0;;) {
    if (x.c(d, e)) {
      return c.toString();
    }
    var f = a.charAt(e), g = I.c(b, f);
    q(g) ? c.append("" + v(g)) : c.append(f);
    e += 1;
  }
}
;function hn(a, b) {
  var c = J.e(bg, a, b);
  return F(c, ye(function(a) {
    return c === a;
  }, b));
}
var jn = function() {
  function a(a, b) {
    return G(a) < G(b) ? ob.e(Wc, b, a) : ob.e(Wc, a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = hn(G, Wc.f(d, c, E([a], 0)));
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
}(), kn = function() {
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
      a = hn(function(a) {
        return-G(a);
      }, Wc.f(e, d, E([a], 0)));
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
}(), ln = function() {
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
      return ob.e(b, a, Wc.c(e, d));
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
function mn(a, b) {
  return ob.e(function(a, b) {
    var e = H.e(b, 0, null), f = H.e(b, 1, null);
    return ce.c(e, f) && qd(a, e) ? ad.c($c.e(a, f, I.c(a, e)), e) : a;
  }, a, b);
}
;var nn = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function on(a) {
  if (q(a)) {
    var b = en.c(Kd(a), /-/), c = H.e(b, 0, null), b = zd(b);
    return hd(b) || x.c("aria", c) || x.c("data", c) ? a : Ld.d($m.d(Wc.c(le.c(cn, b), c)));
  }
  return null;
}
function pn(a) {
  return ob.e(function(a, c) {
    var d = I.c(a, c);
    return q(d) ? a : ad.c(a, c);
  }, a, Sf(a));
}
var qn = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = af(ye(ib, ve.c(function(a) {
      return(a ? a.k & 33554432 || a.zi || (a.k ? 0 : r(gc, a)) : r(gc, a)) ? new Q(null, 1, 5, R, [a], null) : kd(a) ? a : s ? new Q(null, 1, 5, R, [a], null) : null;
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
  if (a ? a.wb : a) {
    return a.wb(a);
  }
  var b;
  b = V[m(null == a ? null : a)];
  if (!b && (b = V._, !b)) {
    throw u("IInterpreter.interpret", a);
  }
  return b.call(null, a);
}
function rn(a) {
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
var sn = rn(React.DOM.input), tn = rn(React.DOM.textarea);
function W(a) {
  var b = Jg, c = Vf.f(E([ag(Sf(a), le.c(on, Sf(a))), new n(null, 2, [bi, xk, sk, Tj], null)], 0));
  a = mn(a, c);
  b = b(a);
  a = $m.c(" ", Ae(z(b.className)));
  jb(/^[\s\xa0]*$/.test(null == a ? "" : String(a))) && (b.className = a);
  return b;
}
function un(a) {
  return pb.d(le.c(V, a));
}
V["null"] = function() {
  return null;
};
V._ = function(a) {
  return a;
};
Q.prototype.wb = function() {
  var a, b = H.e(this, 0, null), c = zd(this);
  if (!(b instanceof P || b instanceof Cc || "string" === typeof b)) {
    throw Rg.c([v(b), v(" is not a valid element name.")].join(""), new n(null, 2, [Mk, b, $h, c], null));
  }
  var d = jg(nn, Kd(b));
  H.e(d, 0, null);
  b = H.e(d, 1, null);
  a = H.e(d, 2, null);
  d = H.e(d, 3, null);
  a = pn(new n(null, 2, [Dk, a, bi, q(d) ? en.c(d, /\./) : null], null));
  d = A(c);
  a = M(d) ? new Q(null, 3, 5, R, [b, qn.f(E([a, d], 0)), C(c)], null) : new Q(null, 3, 5, R, [b, a, c], null);
  b = H.e(a, 0, null);
  c = H.e(a, 1, null);
  a = H.e(a, 2, null);
  d = React.DOM[Kd(b)];
  if (q(d)) {
    b = I.e(new n(null, 2, [pk, sn, Qj, tn], null), Ld.d(b), d);
  } else {
    throw Rg.c([v("Unsupported HTML tag: "), v(Kd(b))].join(""), new n(null, 1, [Mk, b], null));
  }
  return b.call(null, W(c), jd(a) && "string" === typeof A(a) && hd(B(a)) ? V(A(a)) : q(a) ? V(a) : null);
};
Hc.prototype.wb = function() {
  return un(this);
};
Ed.prototype.wb = function() {
  return un(this);
};
Md.prototype.wb = function() {
  return un(this);
};
cf.prototype.wb = function() {
  return un(this);
};
Id.prototype.wb = function() {
  return un(this);
};
function vn(a) {
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
vn(React.DOM.input);
vn(React.DOM.textarea);
vn(React.DOM.option);
function wn() {
}
wn.we = function() {
  return wn.Ae ? wn.Ae : wn.Ae = new wn;
};
wn.prototype.Mg = 0;
wn.we();
var xn = {}, X = !1, yn = null, zn = null, An = {};
function Bn(a) {
  if (a ? a.Ng : a) {
    return a.Ng(a);
  }
  var b;
  b = Bn[m(null == a ? null : a)];
  if (!b && (b = Bn._, !b)) {
    throw u("IDisplayName.display-name", a);
  }
  return b.call(null, a);
}
var Cn = {};
function Dn(a) {
  if (a ? a.Og : a) {
    return a.Og(a);
  }
  var b;
  b = Dn[m(null == a ? null : a)];
  if (!b && (b = Dn._, !b)) {
    throw u("IInitState.init-state", a);
  }
  return b.call(null, a);
}
var En = {};
function Fn(a, b, c) {
  if (a ? a.Qg : a) {
    return a.Qg(a, b, c);
  }
  var d;
  d = Fn[m(null == a ? null : a)];
  if (!d && (d = Fn._, !d)) {
    throw u("IShouldUpdate.should-update", a);
  }
  return d.call(null, a, b, c);
}
var Gn = {};
function Hn(a) {
  if (a ? a.Tg : a) {
    return a.Tg(a);
  }
  var b;
  b = Hn[m(null == a ? null : a)];
  if (!b && (b = Hn._, !b)) {
    throw u("IWillMount.will-mount", a);
  }
  return b.call(null, a);
}
var In = {};
function Jn(a) {
  if (a ? a.Ld : a) {
    return a.Ld(a);
  }
  var b;
  b = Jn[m(null == a ? null : a)];
  if (!b && (b = Jn._, !b)) {
    throw u("IDidMount.did-mount", a);
  }
  return b.call(null, a);
}
var Kn = {};
function Ln(a) {
  if (a ? a.Vg : a) {
    return a.Vg(a);
  }
  var b;
  b = Ln[m(null == a ? null : a)];
  if (!b && (b = Ln._, !b)) {
    throw u("IWillUnmount.will-unmount", a);
  }
  return b.call(null, a);
}
var Mn = {};
function Nn(a, b, c) {
  if (a ? a.Me : a) {
    return a.Me(0, b, c);
  }
  var d;
  d = Nn[m(null == a ? null : a)];
  if (!d && (d = Nn._, !d)) {
    throw u("IWillUpdate.will-update", a);
  }
  return d.call(null, a, b, c);
}
var On = {};
function Pn(a, b, c) {
  if (a ? a.Md : a) {
    return a.Md(a, b, c);
  }
  var d;
  d = Pn[m(null == a ? null : a)];
  if (!d && (d = Pn._, !d)) {
    throw u("IDidUpdate.did-update", a);
  }
  return d.call(null, a, b, c);
}
var Qn = {};
function Rn(a, b) {
  if (a ? a.Ug : a) {
    return a.Ug(a, b);
  }
  var c;
  c = Rn[m(null == a ? null : a)];
  if (!c && (c = Rn._, !c)) {
    throw u("IWillReceiveProps.will-receive-props", a);
  }
  return c.call(null, a, b);
}
var Sn = {};
function Tn(a) {
  if (a ? a.Aa : a) {
    return a.Aa(a);
  }
  var b;
  b = Tn[m(null == a ? null : a)];
  if (!b && (b = Tn._, !b)) {
    throw u("IRender.render", a);
  }
  return b.call(null, a);
}
var Un = {};
function Vn(a, b) {
  if (a ? a.Nd : a) {
    return a.Nd(a, b);
  }
  var c;
  c = Vn[m(null == a ? null : a)];
  if (!c && (c = Vn._, !c)) {
    throw u("IRenderState.render-state", a);
  }
  return c.call(null, a, b);
}
var Wn = {};
function Xn(a, b, c, d, e) {
  if (a ? a.Pg : a) {
    return a.Pg(a, b, c, d, e);
  }
  var f;
  f = Xn[m(null == a ? null : a)];
  if (!f && (f = Xn._, !f)) {
    throw u("IOmSwap.-om-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
}
function Yn(a) {
  if (a ? a.Le : a) {
    return a.value;
  }
  var b;
  b = Yn[m(null == a ? null : a)];
  if (!b && (b = Yn._, !b)) {
    throw u("IValue.-value", a);
  }
  return b.call(null, a);
}
Yn._ = function(a) {
  return a;
};
var Zn = {};
function $n(a) {
  if (a ? a.Ec : a) {
    return a.Ec(a);
  }
  var b;
  b = $n[m(null == a ? null : a)];
  if (!b && (b = $n._, !b)) {
    throw u("ICursor.-path", a);
  }
  return b.call(null, a);
}
function ao(a) {
  if (a ? a.Fc : a) {
    return a.Fc(a);
  }
  var b;
  b = ao[m(null == a ? null : a)];
  if (!b && (b = ao._, !b)) {
    throw u("ICursor.-state", a);
  }
  return b.call(null, a);
}
var bo = {}, co = function() {
  function a(a, b, c) {
    if (a ? a.Sg : a) {
      return a.Sg(a, b, c);
    }
    var g;
    g = co[m(null == a ? null : a)];
    if (!g && (g = co._, !g)) {
      throw u("IToCursor.-to-cursor", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Rg : a) {
      return a.Rg(a, b);
    }
    var c;
    c = co[m(null == a ? null : a)];
    if (!c && (c = co._, !c)) {
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
function eo(a) {
  return $n(a);
}
function fo(a, b, c, d) {
  if (a ? a.Gc : a) {
    return a.Gc(a, b, c, d);
  }
  var e;
  e = fo[m(null == a ? null : a)];
  if (!e && (e = fo._, !e)) {
    throw u("ITransact.-transact!", a);
  }
  return e.call(null, a, b, c, d);
}
function go(a, b, c) {
  if (a ? a.Ie : a) {
    return a.Ie(a, b, c);
  }
  var d;
  d = go[m(null == a ? null : a)];
  if (!d && (d = go._, !d)) {
    throw u("INotify.-notify", a);
  }
  return d.call(null, a, b, c);
}
function ho(a, b, c, d, e) {
  var f = Vb(a), g = Be(eo.d ? eo.d(b) : eo.call(null, b), c);
  c = (a ? q(q(null) ? null : a.Wi) || (a.la ? 0 : r(Wn, a)) : r(Wn, a)) ? Xn(a, b, c, d, e) : hd(g) ? Dg.c(a, d) : s ? Dg.o(a, He, g, d) : null;
  if (x.c(c, Xi)) {
    return null;
  }
  a = new n(null, 5, [Vg, g, gk, De.c(f, g), Vj, De.c(Vb(a), g), lj, f, Wk, Vb(a)], null);
  return null != e ? io.c ? io.c(b, $c.e(a, Mk, e)) : io.call(null, b, $c.e(a, Mk, e)) : io.c ? io.c(b, a) : io.call(null, b, a);
}
function jo(a) {
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
function ko(a) {
  return a.props.__om_cursor;
}
var lo = function() {
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
}(), mo = function() {
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
function no(a) {
  a = a.state;
  var b = a.__om_pending_state;
  return q(b) ? (a.__om_prev_state = a.__om_state, a.__om_state = b, a.__om_pending_state = null, a) : null;
}
var oo = function() {
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
}(), po = React.createClass({componentWillUpdate:function(a) {
  var b = jo(this);
  if (b ? q(q(null) ? null : b.Wg) || (b.la ? 0 : r(Mn, b)) : r(Mn, b)) {
    var c = this.state, d = X;
    try {
      X = !0;
      var e = c.__om_pending_state;
      Nn(b, ko({props:a}), q(e) ? e : c.__om_state);
    } finally {
      X = d;
    }
  }
  return no(this);
}, componentDidUpdate:function(a) {
  var b = jo(this);
  if (b ? q(q(null) ? null : b.He) || (b.la ? 0 : r(On, b)) : r(On, b)) {
    var c = this.state, d = X;
    try {
      X = !0;
      var e = c.__om_prev_state;
      Pn(b, ko({props:a}), q(e) ? e : c.__om_state);
    } finally {
      X = d;
    }
  }
  return this.state.__om_prev_state = null;
}, render:function() {
  var a = jo(this), b = this.props, c = X;
  try {
    if (X = !0, a ? q(q(null) ? null : a.Ea) || (a.la ? 0 : r(Sn, a)) : r(Sn, a)) {
      var d = yn, e = zn;
      try {
        return yn = this, zn = b.__om_instrument, Tn(a);
      } finally {
        zn = e, yn = d;
      }
    } else {
      if (a ? q(q(null) ? null : a.Je) || (a.la ? 0 : r(Un, a)) : r(Un, a)) {
        d = yn;
        e = zn;
        try {
          return yn = this, zn = b.__om_instrument, Vn(a, lo.d(this));
        } finally {
          zn = e, yn = d;
        }
      } else {
        return s ? a : null;
      }
    }
  } finally {
    X = c;
  }
}, componentWillReceiveProps:function(a) {
  var b = jo(this);
  if (b ? q(q(null) ? null : b.$i) || (b.la ? 0 : r(Qn, b)) : r(Qn, b)) {
    var c = X;
    try {
      return X = !0, Rn(b, ko({props:a}));
    } finally {
      X = c;
    }
  } else {
    return null;
  }
}, getDisplayName:function() {
  var a = jo(this);
  if (a ? q(q(null) ? null : a.Ti) || (a.la ? 0 : r(An, a)) : r(An, a)) {
    var b = X;
    try {
      return X = !0, Bn(a);
    } finally {
      X = b;
    }
  } else {
    return null;
  }
}, componentWillUnmount:function() {
  var a = jo(this);
  if (a ? q(q(null) ? null : a.aj) || (a.la ? 0 : r(Kn, a)) : r(Kn, a)) {
    var b = X;
    try {
      return X = !0, Ln(a);
    } finally {
      X = b;
    }
  } else {
    return null;
  }
}, componentWillMount:function() {
  oo.d(this);
  var a = jo(this);
  if (a ? q(q(null) ? null : a.Zi) || (a.la ? 0 : r(Gn, a)) : r(Gn, a)) {
    var b = X;
    try {
      X = !0, Hn(a);
    } finally {
      X = b;
    }
  }
  return no(this);
}, componentDidMount:function() {
  var a = jo(this);
  if (a ? q(q(null) ? null : a.Ge) || (a.la ? 0 : r(In, a)) : r(In, a)) {
    var b = X;
    try {
      return X = !0, Jn(a);
    } finally {
      X = b;
    }
  } else {
    return null;
  }
}, getInitialState:function() {
  var a = jo(this), b = this.props, c = {__om_state:Vf.f(E([function() {
    var a = b.__om_init_state;
    return q(a) ? a : vf;
  }(), (a ? q(q(null) ? null : a.Ui) || (a.la ? 0 : r(Cn, a)) : r(Cn, a)) ? function() {
    var b = X;
    try {
      return X = !0, Dn(a);
    } finally {
      X = b;
    }
  }() : null], 0)), __om_id:":" + (wn.we().Mg++).toString(36)};
  b.__om_init_state = null;
  return c;
}, shouldComponentUpdate:function(a) {
  var b = X;
  try {
    X = !0;
    var c = this.props, d = this.state, e = jo(this);
    oo.c(this, a);
    var f;
    if (e ? q(q(null) ? null : e.Xi) || (e.la ? 0 : r(En, e)) : r(En, e)) {
      var g = d.__om_pending_state;
      f = Fn(e, ko({props:a}), q(g) ? g : d.__om_state);
    } else {
      f = Yn(c.__om_cursor) !== Yn(a.__om_cursor) ? !0 : null != d.__om_pending_state ? !0 : c.__om_index !== a.__om_index ? !0 : s ? !1 : null;
    }
    return f;
  } finally {
    X = b;
  }
}});
function qo(a) {
  return new po(a);
}
function ro(a) {
  return a ? q(q(null) ? null : a.Kd) ? !0 : a.la ? !1 : r(Zn, a) : r(Zn, a);
}
function so(a, b, c) {
  this.value = a;
  this.state = b;
  this.path = c;
  this.k = 2158397195;
  this.r = 8192;
}
h = so.prototype;
h.L = function(a, b) {
  return Hb.e(this, b, null);
};
h.M = function(a, b, c) {
  if (X) {
    return a = Hb.e(this.value, b, c), x.c(a, c) ? c : to.e ? to.e(a, this.state, Wc.c(this.path, b)) : to.call(null, a, this.state, Wc.c(this.path, b));
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Sb = function(a, b) {
  if (X) {
    return Ib(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.jb = function(a, b, c) {
  if (X) {
    return new so(Jb(this.value, b, c), this.state, this.path);
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
h.Ab = function() {
  if (X) {
    throw Error([v("Cannot deref cursor during render phase: "), v(this)].join(""));
  }
  return De.c(Vb(this.state), this.path);
};
h.Le = function() {
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
    return new so(yb(this.value, b), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.J = function() {
  var a = this;
  if (X) {
    return 0 < G(a.value) ? le.c(function(b) {
      var c = H.e(b, 0, null);
      b = H.e(b, 1, null);
      return new Q(null, 2, 5, R, [c, to.e ? to.e(b, a.state, Wc.c(a.path, c)) : to.call(null, b, a.state, Wc.c(a.path, c))], null);
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
    return ro(b) ? x.c(this.value, Yn(b)) : x.c(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.B = function(a, b) {
  if (X) {
    return new so(Tc(this.value, b), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.wa = function() {
  return new so(this.value, this.state, this.path);
};
h.A = function() {
  if (X) {
    return dd(this.value);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.oc = function(a, b) {
  if (X) {
    return new so(Lb(this.value, b), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Ke = !0;
h.Gc = function(a, b, c, d) {
  return ho(this.state, this, b, c, d);
};
function uo(a, b, c) {
  this.value = a;
  this.state = b;
  this.path = c;
  this.k = 2175181595;
  this.r = 8192;
}
h = uo.prototype;
h.L = function(a, b) {
  if (X) {
    return Ab.e(this, b, null);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.M = function(a, b, c) {
  if (X) {
    return Ab.e(this, b, c);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Sb = function(a, b) {
  if (X) {
    return Ib(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.jb = function(a, b, c) {
  if (X) {
    return to.e ? to.e(Ub(this.value, b, c), this.state, this.path) : to.call(null, Ub(this.value, b, c), this.state, this.path);
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
h.Ab = function() {
  if (X) {
    throw Error([v("Cannot deref cursor during render phase: "), v(this)].join(""));
  }
  return De.c(Vb(this.state), this.path);
};
h.Le = function() {
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
    return new uo(yb(this.value, b), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.J = function() {
  var a = this;
  if (X) {
    return 0 < G(a.value) ? le.e(function(b, c) {
      return to.e ? to.e(b, a.state, Wc.c(a.path, c)) : to.call(null, b, a.state, Wc.c(a.path, c));
    }, a.value, fg.t()) : null;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.K = function() {
  if (X) {
    return vb(this.value);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.lb = function() {
  if (X) {
    return to.e ? to.e(Rb(this.value), this.state, this.path) : to.call(null, Rb(this.value), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.mb = function() {
  if (X) {
    return to.e ? to.e(Sb(this.value), this.state, this.path) : to.call(null, Sb(this.value), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.H = function(a, b) {
  if (X) {
    return ro(b) ? x.c(this.value, Yn(b)) : x.c(this.value, b);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.B = function(a, b) {
  if (X) {
    return new uo(Tc(this.value, b), this.state, this.path);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.wa = function() {
  return new uo(this.value, this.state, this.path);
};
h.A = function() {
  if (X) {
    return dd(this.value);
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.C = function(a, b) {
  if (X) {
    return to.e ? to.e(Ab.c(this.value, b), this.state, Wc.c(this.path, b)) : to.call(null, Ab.c(this.value, b), this.state, Wc.c(this.path, b));
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.ja = function(a, b, c) {
  if (X) {
    return b < vb(this.value) ? to.e ? to.e(Ab.c(this.value, b), this.state, Wc.c(this.path, b)) : to.call(null, Ab.c(this.value, b), this.state, Wc.c(this.path, b)) : c;
  }
  throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Ke = !0;
h.Gc = function(a, b, c, d) {
  return ho(this.state, this, b, c, d);
};
function vo(a, b, c) {
  var d = tb(a);
  d.pf = !0;
  d.H = function(b, c) {
    if (X) {
      return ro(c) ? x.c(a, Yn(c)) : x.c(a, c);
    }
    throw Error([v("Cannot manipulate cursor outside of render phase, only "), v("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
  };
  d.Ke = !0;
  d.Gc = function(a, c, d, k) {
    return ho(b, this, c, d, k);
  };
  d.Kd = !0;
  d.Ec = function() {
    return c;
  };
  d.Fc = function() {
    return b;
  };
  d.vi = !0;
  d.Ab = function() {
    if (X) {
      throw Error([v("Cannot deref cursor during render phase: "), v(this)].join(""));
    }
    return De.c(Vb(b), c);
  };
  return d;
}
var to = function() {
  function a(a, b, c) {
    return ro(a) ? a : (a ? q(q(null) ? null : a.Yi) || (a.la ? 0 : r(bo, a)) : r(bo, a)) ? co.e(a, b, c) : Nc(a) ? new uo(a, b, c) : M(a) ? new so(a, b, c) : (a ? a.r & 8192 || a.ti || (a.r ? 0 : r(sb, a)) : r(sb, a)) ? vo(a, b, c) : s ? a : null;
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
function io(a, b) {
  var c = ao(a);
  return go(c, b, to.c(Vb(c), c));
}
var wo = !1, xo = Bg.d(Zf);
function yo() {
  wo = !1;
  for (var a = z(Vb(xo)), b = null, c = 0, d = 0;;) {
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
var zo = Bg.d(vf), Ao = function() {
  function a(a, b, c) {
    if (!ee(new Xf(null, new n(null, 10, [kh, null, ph, null, Fh, null, Rh, null, Uh, null, ai, null, Pi, null, fj, null, jk, null, Ck, null], null), null), Sf(c))) {
      throw Error([v("Assert failed: "), v(J.o(v, "build options contains invalid keys, only :key, :react-key, ", ":fn, :init-state, :state, and :opts allowed, given ", te(", ", Sf(c)))), v("\n"), v(ug.f(E([Hd(new Cc(null, "valid?", "valid?", 1830611324, null), new Cc(null, "m", "m", -1640531418, null))], 0)))].join(""));
    }
    if (null == c) {
      var g = function() {
        var a = fj.d(c);
        return q(a) ? a : mo.d(yn);
      }(), k = function() {
        var a = ph.d(c);
        return q(a) ? a : qo;
      }(), l = k.d ? k.d({children:function(c) {
        var f = X;
        try {
          return X = !0, a.c ? a.c(b, c) : a.call(null, b, c);
        } finally {
          X = f;
        }
      }, __om_instrument:zn, __om_shared:g, __om_cursor:b}) : k.call(null, {children:function(c) {
        var f = X;
        try {
          return X = !0, a.c ? a.c(b, c) : a.call(null, b, c);
        } finally {
          X = f;
        }
      }, __om_instrument:zn, __om_shared:g, __om_cursor:b});
      l.constructor = la(a);
      return l;
    }
    if (s) {
      var g = N(c) ? J.c(S, c) : c, p = I.c(g, jk), l = I.c(g, kh), t = I.c(g, Fh), g = I.c(g, ai), k = I.c(c, Ck), w = null != k ? k.d ? k.d(b) : k.call(null, b) : b, D = null != g ? I.c(w, g) : I.c(c, Rh), g = function() {
        var a = fj.d(c);
        return q(a) ? a : mo.d(yn);
      }(), k = function() {
        var a = ph.d(c);
        return q(a) ? a : qo;
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
      }, key:D, __om_instrument:zn, __om_shared:g, __om_state:t, __om_init_state:l, __om_index:Uh.d(c), __om_cursor:w}) : k.call(null, {children:null == p ? function(b) {
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
      }, key:D, __om_instrument:zn, __om_shared:g, __om_state:t, __om_init_state:l, __om_index:Uh.d(c), __om_cursor:w});
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
}(), Bo = function() {
  function a(a, b, c) {
    if (null != zn) {
      var g;
      a: {
        var k = X;
        try {
          X = !0;
          g = zn.e ? zn.e(a, b, c) : zn.call(null, a, b, c);
          break a;
        } finally {
          X = k;
        }
        g = void 0;
      }
      return x.c(g, Pj) ? Ao.e(a, b, c) : g;
    }
    return Ao.e(a, b, c);
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
}(), Co = function() {
  function a(a, b, c) {
    return le.e(function(b, e) {
      return Bo.e(a, b, $c.e(c, Uh, e));
    }, b, fg.t());
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
function Do(a, b, c) {
  c = N(c) ? J.c(S, c) : c;
  var d = I.c(c, Pi), e = I.c(c, Vg), f = I.c(c, Ri);
  I.c(c, fj);
  var g = I.c(c, Hh);
  if (null == g) {
    throw Error([v("Assert failed: "), v("No target specified to om.core/root"), v("\n"), v(ug.f(E([Hd(new Cc(null, "not", "not", -1640422260, null), Hd(new Cc(null, "nil?", "nil?", -1637150201, null), new Cc(null, "target", "target", 1773529930, null)))], 0)))].join(""));
  }
  var k = Vb(zo);
  qd(k, g) && I.c(k, g).call(null);
  var l = (b ? b.r & 16384 || b.ri || (b.r ? 0 : r(wg, b)) : r(wg, b)) ? b : Bg.d(b), p = function() {
    l.Vi = !0;
    l.Ie = function() {
      return function(a, b, c) {
        return null == f ? null : f.c ? f.c(b, c) : f.call(null, b, c);
      };
    }(l, l);
    return l;
  }();
  b = ad.f(c, Hh, E([Ri, Vg], 0));
  var t = function(b, c, f) {
    return function U() {
      Dg.e(xo, ed, U);
      var b = Vb(c), b = null == e ? to.e(b, c, Ze) : to.e(De.c(b, e), c, e), k;
      a: {
        var l = zn;
        try {
          zn = d;
          k = Bo.e(a, b, f);
          break a;
        } finally {
          zn = l;
        }
        k = void 0;
      }
      return React.renderComponent(k, g);
    };
  }(l, p, b), w = Fg.t();
  nc(p, w, function() {
    qd(Vb(xo), t) || Dg.e(xo, Wc, t);
    if (q(wo)) {
      return null;
    }
    wo = !0;
    return "undefined" !== typeof requestAnimationFrame ? requestAnimationFrame(yo) : setTimeout(yo, 16);
  });
  Dg.o(zo, $c, g, function() {
    oc(p, w);
    Dg.e(zo, ad, g);
    return React.unmountComponentAtNode(g);
  });
  t();
}
var Eo = function() {
  function a(a, b, c, d) {
    b = null == b ? Ze : jd(b) ? b : s ? new Q(null, 1, 5, R, [b], null) : null;
    return fo(a, b, c, d);
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
}(), Fo = function() {
  function a(a, b, c, d) {
    return Eo.o(a, b, function() {
      return c;
    }, d);
  }
  function b(a, b, c) {
    return Eo.o(a, b, function() {
      return c;
    }, null);
  }
  function c(a, b) {
    return Eo.o(a, Ze, function() {
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
}(), Go = function() {
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
function Ho(a, b, c) {
  var d = X;
  try {
    X = !0;
    var e = a.state, f = a.props.__om_cursor, g = $n(f), k, l = e.__om_pending_state;
    k = q(l) ? l : e.__om_state;
    jd(b) ? e.__om_pending_state = Ge(k, b, c) : e.__om_pending_state = $c.e(k, b, c);
    return hd(g) ? Dg.c(ao(f), Gc) : Dg.o(ao(f), He, g, Gc);
  } finally {
    X = d;
  }
}
;function Io(a, b) {
  return q(b) ? Math.round(a * Math.pow(10, b)) / Math.pow(10, b) : a;
}
function Jo(a) {
  return $m.c(",", le.c(function(a) {
    return J.c(v, a);
  }, Gd(le.c(Gd, Ce.o(3, 3, Ze, Gd(a))))));
}
var Ko = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = N(b) ? J.c(S, b) : b, f = I.c(e, Zj);
    if (q(a)) {
      var e = 0 < a ? 1 : x.c(a, 0) ? 0 : 0 > a ? -1 : null, g = Math.abs(a), k = ("" + v(g)).split("."), l = H.e(k, 0, null), p = H.e(k, 1, null), k = 1 <= g ? 3 * ((G(l) - 1) / 3 | 0) : 0 < g ? -3 * ((3 + G(dg(function() {
        return function(a) {
          return x.c(a, "0");
        };
      }(e, g, k, l, p), p))) / 3 | 0) : 0, g = g * Math.pow(10, -1 * k), l = q(f) ? ("" + v(g)).split(".") : null, p = H.e(l, 0, null);
      H.e(l, 1, null);
      var l = q(q(f) ? 0 < g : f) ? Math.pow(10, G(p) - f) : null, l = q(l) ? "" + v(l * Math.round(g / l)) : null, t = q(l) ? l.split(".") : null, p = H.e(t, 0, null), t = H.e(t, 1, null), f = q(l) ? J.c(v, Yd.d(xe(ge, Ae(new Q(null, 3, 5, R, [ne(f, p), pe.c(G(p) - f, "0"), 0 < G(t) ? new Q(null, 2, 5, R, [".", ne(f - G(p), t)], null) : null], null))))) : null, f = q(f) ? parseFloat(f) : null;
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
    return q(a) ? (f = Io(Math.abs(a), e), f = "" + v(f), e = en.c(f, /\./), f = H.e(e, 0, null), e = H.e(e, 1, null), f = Jo(f), f = $m.c(".", xe(ge, new Q(null, 2, 5, R, [f, e], null))), 0 > a ? [v("-"), v(f)].join("") : q(q(g) ? 0 < a : g) ? [v("+"), v(f)].join("") : f) : f;
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
var Lo = new n(null, 5, [0, "", 3, "k", 6, "m", 9, "bn", 12, "tn"], null), Mo = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = N(b) ? J.c(S, b) : b, f = I.c(e, y), g = I.c(e, hj), k = I.e(e, jj, "\u00a3"), e = I.c(e, Zj);
    if (q(a)) {
      var e = Ko.f(a, E([Zj, e], 0)), f = H.e(e, 0, null), l = H.e(e, 1, null), e = Math.abs(f), p = Lo.d ? Lo.d(l) : Lo.call(null, l), l = q(p) ? p : [v("x10^"), v(l)].join("");
      return J.c(v, xe(ge, new Q(null, 4, 5, R, [q(q(g) ? 0 < f : g) ? "+" : 0 > f ? "-" : null, k, e, l], null)));
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
var No, Oo;
function Po(a) {
  a = N(a) ? J.c(S, a) : a;
  I.c(a, Fk);
  a = I.c(a, Mj);
  return q(x.c ? x.c(hi, a) : x.call(null, hi, a)) ? new n(null, 3, [oi, new n(null, 2, [qi, "Total", Ik, "Totals for the selected Portfolio Company"], null), hk, new n(null, 2, [qi, "Mean", Ik, "Mean for the selected Portfolio Company"], null), Pk, new n(null, 2, [qi, "Benchmark", Ik, "Mean over all UK Companies"], null)], null) : q(x.c ? x.c(yk, a) : x.call(null, yk, a)) ? new n(null, 3, [oi, new n(null, 2, [qi, "Total", Ik, "Totals for the Portfolio Companies of the selected Investor"], null), 
  hk, new n(null, 2, [qi, "Mean", Ik, "Mean over the Portfolio Companies of the selected Investor"], null), Pk, new n(null, 2, [qi, "Benchmark", Ik, "Mean over all UK Companies"], null)], null) : q(x.c ? x.c(Oh, a) : x.call(null, Oh, a)) ? new n(null, 3, [oi, new n(null, 2, [qi, "Total", Ik, "Totals for the selected Constituency"], null), hk, new n(null, 2, [qi, "Mean", Ik, "Mean over the Portfolio Companies with sites in the selected Constituency"], null), Pk, new n(null, 2, [qi, "Benchmark", Ik, 
  "Mean over all UK Companies"], null)], null) : new n(null, 3, [oi, new n(null, 2, [qi, "Total", Ik, "Totals over all Portfolio Companies"], null), hk, new n(null, 2, [qi, "Mean", Ik, "Mean over all Portfolio Companies"], null), Pk, new n(null, 2, [qi, "Benchmark", Ik, "Mean over all UK Companies"], null)], null);
}
function Qo(a) {
  var b = N(a) ? J.c(S, a) : a;
  a = I.c(b, Nh);
  var c = I.c(b, oi), d = I.c(b, Ij), b = Po(c), e = q(a) ? a : d;
  return new n(null, 3, [oi, Vf.f(E([oi.d(b), Zc([Zg, xh, Sh, Ji, Ki, Li, Oi, ej, Jj], [Y.e ? Y.e(null == e ? null : ah.d(e), y, "-") : Y.call(null, null == e ? null : ah.d(e), y, "-"), function() {
    var a = null == e ? null : qk.d(e);
    return null == a ? null : Th.d(a);
  }(), function() {
    var a = null == e ? null : ok.d(e);
    return null == a ? null : Th.d(a);
  }(), Y.e ? Y.e(null == e ? null : Mi.d(e), y, "-") : Y.call(null, null == e ? null : Mi.d(e), y, "-"), Y.q ? Y.q(function() {
    var a = null == e ? null : qk.d(e);
    return null == a ? null : Th.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == e ? null : qk.d(e);
    return null == a ? null : Th.d(a);
  }(), Cj, 0, y, "-"), Mo.q ? Mo.q(function() {
    var a = null == e ? null : ok.d(e);
    return null == a ? null : Th.d(a);
  }(), Zj, 2, y, "-") : Mo.call(null, function() {
    var a = null == e ? null : ok.d(e);
    return null == a ? null : Th.d(a);
  }(), Zj, 2, y, "-"), Y.q ? Y.q(function() {
    var a = null == e ? null : aj.d(e);
    return null == a ? null : Th.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == e ? null : aj.d(e);
    return null == a ? null : Th.d(a);
  }(), Cj, 0, y, "-"), Y.e ? Y.e(null == e ? null : mj.d(e), y, "-") : Y.call(null, null == e ? null : mj.d(e), y, "-"), Mo.q ? Mo.q(function() {
    var a = null == e ? null : Jj.d(e);
    return null == a ? null : Th.d(a);
  }(), Zj, 2, y, "-") : Mo.call(null, function() {
    var a = null == e ? null : Jj.d(e);
    return null == a ? null : Th.d(a);
  }(), Zj, 2, y, "-")])], 0)), hk, Vf.f(E([hk.d(b), Zc([Zg, xh, Sh, Ji, Ki, Li, Oi, ej, Jj], ["\u00a0", function() {
    var a = null == e ? null : qk.d(e);
    return null == a ? null : di.d(a);
  }(), function() {
    var a = null == e ? null : ok.d(e);
    return null == a ? null : di.d(a);
  }(), "\u00a0", Y.q ? Y.q(function() {
    var a = null == e ? null : qk.d(e);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == e ? null : qk.d(e);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-"), Mo.q ? Mo.q(function() {
    var a = null == e ? null : ok.d(e);
    return null == a ? null : di.d(a);
  }(), Zj, 2, y, "-") : Mo.call(null, function() {
    var a = null == e ? null : ok.d(e);
    return null == a ? null : di.d(a);
  }(), Zj, 2, y, "-"), Y.q ? Y.q(function() {
    var a = null == e ? null : aj.d(e);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == e ? null : aj.d(e);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-"), "\u00a0", Mo.q ? Mo.q(function() {
    var a = null == e ? null : Jj.d(e);
    return null == a ? null : di.d(a);
  }(), Zj, 2, y, "-") : Mo.call(null, function() {
    var a = null == e ? null : Jj.d(e);
    return null == a ? null : di.d(a);
  }(), Zj, 2, y, "-")])], 0)), Pk, Vf.f(E([Pk.d(b), Zc([Zg, xh, Sh, Ji, Ki, Li, Oi, ej, Jj], [Y.e ? Y.e(null == d ? null : ah.d(d), y, "-") : Y.call(null, null == d ? null : ah.d(d), y, "-"), function() {
    var a = null == d ? null : qk.d(d);
    return null == a ? null : di.d(a);
  }(), function() {
    var a = null == d ? null : ok.d(d);
    return null == a ? null : Th.d(a);
  }(), Y.e ? Y.e(null == d ? null : Mi.d(d), y, "-") : Y.call(null, null == d ? null : Mi.d(d), y, "-"), Y.q ? Y.q(function() {
    var a = null == d ? null : qk.d(d);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == d ? null : qk.d(d);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-"), Mo.q ? Mo.q(function() {
    var a = null == d ? null : ok.d(d);
    return null == a ? null : di.d(a);
  }(), Zj, 2, y, "-") : Mo.call(null, function() {
    var a = null == d ? null : ok.d(d);
    return null == a ? null : di.d(a);
  }(), Zj, 2, y, "-"), Y.q ? Y.q(function() {
    var a = null == d ? null : aj.d(d);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-") : Y.call(null, function() {
    var a = null == d ? null : aj.d(d);
    return null == a ? null : di.d(a);
  }(), Cj, 0, y, "-"), Y.e ? Y.e(null == d ? null : mj.d(d), y, "-") : Y.call(null, null == d ? null : mj.d(d), y, "-"), Mo.q ? Mo.q(function() {
    var a = null == d ? null : Jj.d(d);
    return null == a ? null : di.d(a);
  }(), Zj, 2, y, "-") : Mo.call(null, function() {
    var a = null == d ? null : Jj.d(d);
    return null == a ? null : di.d(a);
  }(), Zj, 2, y, "-")])], 0))], null);
}
var So = function Ro(b) {
  var c = Qo(b), c = N(c) ? J.c(S, c) : c, d = I.c(c, Pk), e = I.c(c, hk), f = I.c(c, oi);
  "undefined" === typeof Oo && (Oo = function(b, c, d, e, f, w, D) {
    this.selection = b;
    this.df = c;
    this.ff = d;
    this.Uf = e;
    this.data = f;
    this.dh = w;
    this.qg = D;
    this.r = 0;
    this.k = 393216;
  }, Oo.R = !0, Oo.Q = "clustermap.components.full-report.overview/t34004", Oo.U = function(b, c) {
    return jc(c, "clustermap.components.full-report.overview/t34004");
  }, Oo.prototype.Ea = !0, Oo.prototype.Aa = function() {
    var b = this;
    return React.DOM.div({className:"full-report-overview"}, React.DOM.h4(null, "Overview of latest filings", React.DOM.small(null, "\u00a0(may span years : see table below for details)")), React.DOM.div({className:"table-responsive"}, React.DOM.table({className:"table-stats"}, React.DOM.thead(null, React.DOM.tr(null, React.DOM.th(null, "\u00a0"), React.DOM.th(null, "Investor-backed companies"), React.DOM.th(null, "Investors"), React.DOM.th(null, "Constituencies"), React.DOM.th(null, "Revenue"), 
    React.DOM.th({colSpan:"2"}, "Rev. change"), React.DOM.th(null, "Employees"))), React.DOM.tbody(null, React.DOM.tr(null, React.DOM.th(null, React.DOM.i({className:"icon-info", "data-toggle":"tooltip", "data-container":"body", title:b.selection.d ? b.selection.d(Ik) : b.selection.call(null, Ik)}), V(b.selection.d ? b.selection.d(qi) : b.selection.call(null, qi))), React.DOM.td(null, function() {
      var c = Zg.d(b.selection);
      return M(c) ? React.DOM.span(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c = Ji.d(b.selection);
      return M(c) ? React.DOM.span(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c = ej.d(b.selection);
      return M(c) ? React.DOM.span(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c = Jj.d(b.selection);
      return M(c) ? React.DOM.span(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c;
      c = Sh.d(b.selection);
      c = null == c ? null : 0 < c ? React.DOM.i({className:"icon-positive"}) : 0 > c ? React.DOM.i({className:"icon-negative"}) : null;
      return M(c) ? React.DOM.span(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c = Li.d(b.selection);
      return M(c) ? React.DOM.span(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()), React.DOM.td(null, function() {
      var c = Oi.d(b.selection);
      return M(c) ? React.DOM.span(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["selection"], null)], null), c], 0))), null) : React.DOM.span({className:"selection"}, V(c));
    }()))))));
  }, Oo.prototype.A = function() {
    return this.qg;
  }, Oo.prototype.B = function(b, c) {
    return new Oo(this.selection, this.df, this.ff, this.Uf, this.data, this.dh, c);
  });
  return new Oo(f, e, d, c, b, Ro, null);
};
var To = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/, gn = new n(null, 4, '\x26 \x26amp; \x3c \x26lt; \x3e \x26gt; " \x26quot;'.split(" "), null), Uo = new Xf(null, new n(null, 33, ["dd", null, "head", null, "a", null, "b", null, "body", null, "pre", null, "form", null, "iframe", null, "dl", null, "em", null, "fieldset", null, "i", null, "h1", null, "h2", null, "span", null, "h3", null, "script", null, "html", null, "h4", null, "h5", null, "h6", null, "table", null, "dt", null, "div", null, "style", 
null, "label", null, "option", null, "ul", null, "strong", null, "canvas", null, "textarea", null, "li", null, "ol", null], null), null);
function Vo(a) {
  return a instanceof P || a instanceof Cc ? Kd(a) : "" + v(a);
}
function Wo(a, b) {
  return[v(" "), v(Vo(a)), v('\x3d"'), v(fn(Vo(b))), v('"')].join("");
}
function Xo(a) {
  var b = H.e(a, 0, null);
  a = H.e(a, 1, null);
  return!0 === a ? x.c(ch, ch) ? Wo(b, b) : [v(" "), v(Vo(b))].join("") : jb(a) ? "" : s ? Wo(b, a) : null;
}
function Yo(a) {
  return J.c(v, ud.d(le.c(Xo, a)));
}
var $o = function Zo(b) {
  if (kd(b)) {
    var c, d = H.e(b, 0, null);
    b = zd(b);
    if (!(d instanceof P || d instanceof Cc || "string" === typeof d)) {
      throw[v(d), v(" is not a valid tag name")].join("");
    }
    var e = jg(To, Vo(d));
    H.e(e, 0, null);
    d = H.e(e, 1, null);
    c = H.e(e, 2, null);
    e = H.e(e, 3, null);
    c = new n(null, 2, [Dk, c, bi, q(e) ? Zm(e, ".", " ") : null], null);
    e = A(b);
    c = M(e) ? new Q(null, 3, 5, R, [d, Vf.f(E([c, e], 0)), C(b)], null) : new Q(null, 3, 5, R, [d, c, b], null);
    b = H.e(c, 0, null);
    d = H.e(c, 1, null);
    c = H.e(c, 2, null);
    b = q(q(c) ? c : Uo.d ? Uo.d(b) : Uo.call(null, b)) ? [v("\x3c"), v(b), v(Yo(d)), v("\x3e"), v($o.d ? $o.d(c) : $o.call(null, c)), v("\x3c/"), v(b), v("\x3e")].join("") : [v("\x3c"), v(b), v(Yo(d)), v(x.c(ch, ch) ? " /\x3e" : "\x3e")].join("");
  } else {
    b = N(b) ? J.c(v, le.c(Zo, b)) : s ? Vo(b) : null;
  }
  return b;
};
var ap = rm("goog.net.xpc");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var bp;
function cp(a, b, c) {
  if (a ? a.uc : a) {
    return a.uc(0, b, c);
  }
  var d;
  d = cp[m(null == a ? null : a)];
  if (!d && (d = cp._, !d)) {
    throw u("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function dp(a) {
  if (a ? a.tc : a) {
    return a.tc();
  }
  var b;
  b = dp[m(null == a ? null : a)];
  if (!b && (b = dp._, !b)) {
    throw u("Channel.close!", a);
  }
  return b.call(null, a);
}
function ep(a) {
  if (a ? a.ie : a) {
    return!0;
  }
  var b;
  b = ep[m(null == a ? null : a)];
  if (!b && (b = ep._, !b)) {
    throw u("Handler.active?", a);
  }
  return b.call(null, a);
}
function fp(a) {
  if (a ? a.rc : a) {
    return a.rc(a);
  }
  var b;
  b = fp[m(null == a ? null : a)];
  if (!b && (b = fp._, !b)) {
    throw u("Buffer.full?", a);
  }
  return b.call(null, a);
}
function gp(a) {
  if (a ? a.sc : a) {
    return a.sc(a);
  }
  var b;
  b = gp[m(null == a ? null : a)];
  if (!b && (b = gp._, !b)) {
    throw u("Buffer.remove!", a);
  }
  return b.call(null, a);
}
;var hp, jp = function ip(b) {
  "undefined" === typeof hp && (hp = function(b, d, e) {
    this.Ka = b;
    this.yd = d;
    this.Eg = e;
    this.r = 0;
    this.k = 393216;
  }, hp.R = !0, hp.Q = "cljs.core.async.impl.ioc-helpers/t38427", hp.U = function(b, d) {
    return jc(d, "cljs.core.async.impl.ioc-helpers/t38427");
  }, hp.prototype.ie = function() {
    return!0;
  }, hp.prototype.A = function() {
    return this.Eg;
  }, hp.prototype.B = function(b, d) {
    return new hp(this.Ka, this.yd, d);
  });
  return new hp(b, ip, null);
};
function kp(a) {
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
function lp(a, b, c) {
  c = c.Af(jp(function(c) {
    a[2] = c;
    a[1] = b;
    return kp(a);
  }));
  return q(c) ? (a[2] = Vb(c), a[1] = b, T) : null;
}
function mp(a, b, c) {
  b = b.uc(0, c, jp(function() {
    a[2] = null;
    a[1] = 7;
    return kp(a);
  }));
  return q(b) ? (a[2] = Vb(b), a[1] = 7, T) : null;
}
function np(a, b) {
  var c = a[6];
  null != b && c.uc(0, b, jp(function() {
    return null;
  }));
  c.tc();
  return c;
}
function op(a) {
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
;function pp(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function rp(a, b, c, d) {
  this.head = a;
  this.F = b;
  this.length = c;
  this.h = d;
}
rp.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.h[this.F];
  this.h[this.F] = null;
  this.F = (this.F + 1) % this.h.length;
  this.length -= 1;
  return a;
};
rp.prototype.unshift = function(a) {
  this.h[this.head] = a;
  this.head = (this.head + 1) % this.h.length;
  this.length += 1;
  return null;
};
function sp(a, b) {
  a.length + 1 === a.h.length && a.resize();
  a.unshift(b);
}
rp.prototype.resize = function() {
  var a = Array(2 * this.h.length);
  return this.F < this.head ? (pp(this.h, this.F, a, 0, this.length), this.F = 0, this.head = this.length, this.h = a) : this.F > this.head ? (pp(this.h, this.F, a, 0, this.h.length - this.F), pp(this.h, 0, a, this.h.length - this.F, this.head), this.F = 0, this.head = this.length, this.h = a) : this.F === this.head ? (this.head = this.F = 0, this.h = a) : null;
};
function tp(a, b) {
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
function up(a) {
  if (!(0 < a)) {
    throw Error([v("Assert failed: "), v("Can't create a ring buffer of size 0"), v("\n"), v(ug.f(E([Hd(new Cc(null, "\x3e", "\x3e", -1640531465, null), new Cc(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new rp(0, 0, 0, Array(a));
}
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
  return this.$.length === this.Jd;
};
vp.prototype.sc = function() {
  return this.$.pop();
};
vp.prototype.he = function(a, b) {
  if (!jb(fp(this))) {
    throw Error([v("Assert failed: "), v("Can't add to a full buffer"), v("\n"), v(ug.f(E([Hd(new Cc(null, "not", "not", -1640422260, null), Hd(new Cc("impl", "full?", "impl/full?", -1337857039, null), new Cc(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  return this.$.unshift(b);
};
function wp(a, b) {
  this.$ = a;
  this.Jd = b;
  this.r = 0;
  this.k = 2;
}
wp.prototype.K = function() {
  return this.$.length;
};
wp.prototype.rc = function() {
  return!1;
};
wp.prototype.sc = function() {
  return this.$.pop();
};
wp.prototype.he = function(a, b) {
  this.$.length === this.Jd && gp(this);
  return this.$.unshift(b);
};
var xp = null, yp = up(32), zp = !1, Ap = !1;
function Bp() {
  zp = !0;
  Ap = !1;
  for (var a = 0;;) {
    var b = yp.pop();
    if (null != b && (b.t ? b.t() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  zp = !1;
  return 0 < yp.length ? Cp.t ? Cp.t() : Cp.call(null) : null;
}
"undefined" !== typeof MessageChannel && (xp = new MessageChannel, xp.port1.onmessage = function() {
  return Bp();
});
function Cp() {
  var a = Ap;
  if (q(a ? zp : a)) {
    return null;
  }
  Ap = !0;
  return "undefined" !== typeof MessageChannel ? xp.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(Bp) : s ? setTimeout(Bp, 0) : null;
}
function Dp(a) {
  sp(yp, a);
  Cp();
}
;var Ep, Gp = function Fp(b) {
  "undefined" === typeof Ep && (Ep = function(b, d, e) {
    this.ra = b;
    this.gf = d;
    this.Dg = e;
    this.r = 0;
    this.k = 425984;
  }, Ep.R = !0, Ep.Q = "cljs.core.async.impl.channels/t38416", Ep.U = function(b, d) {
    return jc(d, "cljs.core.async.impl.channels/t38416");
  }, Ep.prototype.Ab = function() {
    return this.ra;
  }, Ep.prototype.A = function() {
    return this.Dg;
  }, Ep.prototype.B = function(b, d) {
    return new Ep(this.ra, this.gf, d);
  });
  return new Ep(b, Fp, null);
};
function Hp(a, b) {
  this.Kb = a;
  this.ra = b;
}
function Ip(a) {
  return ep(a.Kb);
}
function Jp(a, b, c, d, e, f) {
  this.fc = a;
  this.wc = b;
  this.Kc = c;
  this.vc = d;
  this.$ = e;
  this.closed = f;
}
Jp.prototype.tc = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.fc.pop();
      if (null != a) {
        Dp(function(a) {
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
Jp.prototype.Af = function(a) {
  if (null != this.$ && 0 < G(this.$)) {
    return Gp(this.$.sc(null));
  }
  for (;;) {
    var b = this.Kc.pop();
    if (null != b) {
      return a = b.ra, Dp(b.Kb.Ka), Gp(a);
    }
    if (this.closed) {
      return Gp(null);
    }
    64 < this.wc ? (this.wc = 0, tp(this.fc, ep)) : this.wc += 1;
    if (!(1024 > this.fc.length)) {
      throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending takes are allowed on a single channel.")].join("")), v("\n"), v(ug.f(E([Hd(new Cc(null, "\x3c", "\x3c", -1640531467, null), Hd(new Cc(null, ".-length", ".-length", 1395928862, null), new Cc(null, "takes", "takes", -1530407291, null)), new Cc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    sp(this.fc, a);
    return null;
  }
};
Jp.prototype.uc = function(a, b, c) {
  if (null == b) {
    throw Error([v("Assert failed: "), v("Can't put nil in on a channel"), v("\n"), v(ug.f(E([Hd(new Cc(null, "not", "not", -1640422260, null), Hd(new Cc(null, "nil?", "nil?", -1637150201, null), new Cc(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if (this.closed) {
    return Gp(null);
  }
  for (;;) {
    a = this.fc.pop();
    if (null != a) {
      c = c.Ka, Dp(function(a) {
        return function() {
          return a.d ? a.d(b) : a.call(null, b);
        };
      }(a.Ka, c, a));
    } else {
      if (null == this.$ || this.$.rc(null)) {
        64 < this.vc ? (this.vc = 0, tp(this.Kc, Ip)) : this.vc += 1;
        if (!(1024 > this.Kc.length)) {
          throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending puts are allowed on a single channel."), v(" Consider using a windowed buffer.")].join("")), v("\n"), v(ug.f(E([Hd(new Cc(null, "\x3c", "\x3c", -1640531467, null), Hd(new Cc(null, ".-length", ".-length", 1395928862, null), new Cc(null, "puts", "puts", -1637078787, null)), new Cc("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        sp(this.Kc, new Hp(c, b));
        return null;
      }
      c = c.Ka;
      this.$.he(null, b);
    }
    return Gp(null);
  }
};
function Kp(a, b, c) {
  this.key = a;
  this.ra = b;
  this.forward = c;
  this.r = 0;
  this.k = 2155872256;
}
Kp.prototype.I = function(a, b, c) {
  return mg(b, sg, "[", " ", "]", c, this);
};
Kp.prototype.J = function() {
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
    return new Kp(a, b, c);
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
var Mp = function Lp(b) {
  "undefined" === typeof bp && (bp = function(b, d, e) {
    this.Ka = b;
    this.yd = d;
    this.Cg = e;
    this.r = 0;
    this.k = 393216;
  }, bp.R = !0, bp.Q = "cljs.core.async/t35823", bp.U = function(b, d) {
    return jc(d, "cljs.core.async/t35823");
  }, bp.prototype.ie = function() {
    return!0;
  }, bp.prototype.A = function() {
    return this.Cg;
  }, bp.prototype.B = function(b, d) {
    return new bp(this.Ka, this.yd, d);
  });
  return new bp(b, Lp, null);
}, Np = function() {
  function a(a) {
    a = x.c(a, 0) ? null : a;
    a = "number" === typeof a ? new vp(up(a), a) : a;
    return new Jp(up(32), 0, up(32), 0, a, null);
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
function Op() {
  return null;
}
var Pp = function() {
  function a(a, b, c, d) {
    a = cp(a, b, Mp(c));
    q(q(a) ? ce.c(c, Op) : a) && (q(d) ? c.t ? c.t() : c.call(null) : Dp(c));
    return null;
  }
  function b(a, b, c) {
    return d.o(a, b, c, !0);
  }
  function c(a, b) {
    return d.e(a, b, Op);
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
}(), Qp = function() {
  function a(a, b, c) {
    var g = Np.d(1);
    Dp(function() {
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
                      return c[5] = d, op(c), T;
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
          return 2 === k ? (l = g[7], g[1] = q(l) ? 4 : 5, T) : 3 === k ? (k = g[2], np(g, k)) : 4 === k ? (l = g[7], k = A(l), mp(g, a, k)) : 5 === k ? (g[1] = q(c) ? 8 : 9, T) : 6 === k ? (k = g[2], g[2] = k, g[1] = 3, T) : 7 === k ? (l = g[7], k = g[2], l = C(l), g[7] = l, g[8] = k, g[2] = null, g[1] = 2, T) : 8 === k ? (k = dp(a), g[2] = k, g[1] = 10, T) : 9 === k ? (g[2] = null, g[1] = 10, T) : 10 === k ? (k = g[2], g[2] = k, g[1] = 6, T) : null;
        });
      }(), l = function() {
        var a = k.t ? k.t() : k.call(null);
        a[6] = g;
        return a;
      }();
      return kp(l);
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
function Rp(a, b, c, d, e) {
  b = tk.d(b);
  b = jd(b) ? A(b) : b;
  var f = A(Sf(b)), g = A(Uf(b));
  return React.DOM.a({href:"#", onClick:function(b) {
    b.preventDefault();
    return q(x.c ? x.c("asc", g) : x.call(null, "asc", g)) ? Pp.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [tk, new wf([e, Bh])], null)], null)) : q(x.c ? x.c("desc", g) : x.call(null, "desc", g)) ? Pp.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [tk, new wf([e, Ek])], null)], null)) : Pp.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [tk, new wf([e, Bh])], null)], null));
  }}, V(d), x.c(f, e) ? V(q(x.c ? x.c("asc", g) : x.call(null, "asc", g)) ? new Q(null, 1, 5, R, [Bj], null) : new Q(null, 1, 5, R, [mk], null)) : null);
}
function Sp(a, b, c) {
  b = N(b) ? J.c(S, b) : b;
  var d = I.c(b, pj), e = I.c(b, ih), f = I.c(b, Di);
  b = 0 < e ? new Q(null, 2, 5, R, [qj, new Q(null, 3, 5, R, [ki, new n(null, 2, [Xg, "#", xj, function(b) {
    b.preventDefault();
    b = e - d;
    return Pp.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [ih, 0 < b ? b : 0], null)], null));
  }], null), new Q(null, 1, 5, R, [Nk], null)], null)], null) : new Q(null, 2, 5, R, [qj, new Q(null, 1, 5, R, [Nk], null)], null);
  return M(b) ? React.DOM.div(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["paginate"], null)], null), b], 0))), function() {
    var a = [v(e + 1), v("-"), v(function() {
      var a = e + d;
      return a < f ? a : f;
    }()), v(" of "), v(f)].join("");
    return M(a) ? React.DOM.span(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["page"], null)], null), a], 0))), null) : React.DOM.span({className:"page"}, V(a));
  }(), e + d < f ? React.DOM.span({className:"next"}, React.DOM.a({href:"#", onClick:function(b) {
    b.preventDefault();
    return Pp.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [ih, e + d], null)], null));
  }}, React.DOM.i({className:"icon-arrow-right"}))) : React.DOM.span({className:"next"}, React.DOM.i({className:"icon-arrow-right"}))) : React.DOM.div({className:"paginate"}, V(b), function() {
    var a = [v(e + 1), v("-"), v(function() {
      var a = e + d;
      return a < f ? a : f;
    }()), v(" of "), v(f)].join("");
    return M(a) ? React.DOM.span(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["page"], null)], null), a], 0))), null) : React.DOM.span({className:"page"}, V(a));
  }(), e + d < f ? React.DOM.span({className:"next"}, React.DOM.a({href:"#", onClick:function(b) {
    b.preventDefault();
    return Pp.c(a, new Q(null, 2, 5, R, [c, new n(null, 1, [ih, e + d], null)], null));
  }}, React.DOM.i({className:"icon-arrow-right"}))) : React.DOM.span({className:"next"}, React.DOM.i({className:"icon-arrow-right"})));
}
;function Tp(a) {
  Yk.call(this);
  this.Nf = a;
  this.ba = [];
}
ta(Tp, Yk);
var Up = [];
function Vp(a, b, c, d) {
  "array" != m(c) && (Up[0] = c, c = Up);
  for (var e = 0;e < c.length;e++) {
    var f = Il(b, c[e], d || a, !1, a.Nf || a);
    a.ba.push(f);
  }
}
Tp.prototype.ya = function() {
  Tp.xb.ya.call(this);
  Ja(this.ba, Ol);
  this.ba.length = 0;
};
Tp.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Wp(a) {
  zl.call(this, "navigate");
  this.Eh = a;
}
ta(Wp, zl);
function Xp(a, b, c, d) {
  Yk.call(this);
  if (a && !b) {
    throw Error("Can't use invisible history without providing a blank page.");
  }
  var e;
  c ? e = c : (e = "history_state" + Yp, document.write(ua(Zp, e, e)), e = ia(e) ? document.getElementById(e) : e);
  this.Yb = e;
  this.Ua = c ? Xm(c) ? Xm(c).parentWindow || Xm(c).defaultView : window : window;
  this.ef = this.Ua.location.href.split("#")[0];
  this.yc = b;
  jl && !b && (this.yc = "https" == window.location.protocol ? "https:///" : 'javascript:""');
  this.ia = new Ul($p);
  b = ra(al, this.ia);
  this.ec || (this.ec = []);
  this.ec.push(qa(b, void 0));
  this.zb = !a;
  this.pb = new Tp(this);
  if (a || aq) {
    d ? a = d : (a = "history_iframe" + Yp, d = this.yc ? 'src\x3d"' + wa(this.yc) + '"' : "", document.write(ua(bq, a, d)), a = ia(a) ? document.getElementById(a) : a), this.Lb = a, this.We = !0;
  }
  aq && (Vp(this.pb, this.Ua, "load", this.Xg), this.Ve = this.rd = !1);
  this.zb ? cq(this, dq(this), !0) : eq(this, this.Yb.value);
  Yp++;
}
ta(Xp, Tl);
Xp.prototype.Xb = !1;
Xp.prototype.Ob = !1;
Xp.prototype.Mb = null;
var fq = jl && jl && 8 <= wl || kl && ul("1.9.2") || ll && ul("532.1"), aq = jl && !(jl && 8 <= wl);
h = Xp.prototype;
h.Nb = null;
h.ya = function() {
  Xp.xb.ya.call(this);
  this.pb.Wb();
  gq(this, !1);
};
function gq(a, b) {
  if (b != a.Xb) {
    if (aq && !a.rd) {
      a.Ve = b;
    } else {
      if (b) {
        if (il ? Vp(a.pb, a.Ua.document, hq, a.ah) : kl && Vp(a.pb, a.Ua, "pageshow", a.$g), fq && a.zb) {
          Vp(a.pb, a.Ua, "hashchange", a.Yg), a.Xb = !0, a.dispatchEvent(new Wp(dq(a)));
        } else {
          if (!jl || a.rd) {
            Vp(a.pb, a.ia, Vl, qa(a.Zd, a, !0)), a.Xb = !0, aq || (a.Mb = dq(a), a.dispatchEvent(new Wp(dq(a)))), a.ia.start();
          }
        }
      } else {
        a.Xb = !1;
        var c = a.pb;
        Ja(c.ba, Ol);
        c.ba.length = 0;
        a.ia.stop();
      }
    }
  }
}
h.Xg = function() {
  this.rd = !0;
  this.Yb.value && eq(this, this.Yb.value, !0);
  gq(this, this.Ve);
};
h.$g = function(a) {
  a.xd.persisted && (gq(this, !1), gq(this, !0));
};
h.Yg = function() {
  var a = iq(this.Ua);
  a != this.Mb && jq(this, a);
};
function dq(a) {
  return null != a.Nb ? a.Nb : a.zb ? iq(a.Ua) : kq(a) || "";
}
function lq(a, b) {
  dq(a) != b && (a.zb ? (cq(a, b, !1), fq || jl && eq(a, b, !1, void 0), a.Xb && a.Zd()) : (eq(a, b, !1), a.Nb = a.Mb = a.Yb.value = b, a.dispatchEvent(new Wp(b))));
}
function iq(a) {
  a = a.location.href;
  var b = a.indexOf("#");
  return 0 > b ? "" : a.substring(b + 1);
}
function cq(a, b, c) {
  var d = a.Ua.location;
  a = a.ef;
  var e = -1 != d.href.indexOf("#");
  if (aq || e || b) {
    a += "#" + b;
  }
  a != d.href && (c ? d.replace(a) : d.href = a);
}
function eq(a, b, c, d) {
  if (a.We || b != kq(a)) {
    if (a.We = !1, b = encodeURIComponent(String(b)), jl) {
      var e = a.Lb.contentDocument || a.Lb.contentWindow.document;
      e.open("text/html", c ? "replace" : void 0);
      e.write(ua(mq, wa(d || a.Ua.document.title), b));
      e.close();
    } else {
      if (b = a.yc + "#" + b, a = a.Lb.contentWindow) {
        c ? a.location.replace(b) : a.location.href = b;
      }
    }
  }
}
function kq(a) {
  if (jl) {
    return a = a.Lb.contentDocument || a.Lb.contentWindow.document, a.body ? decodeURIComponent(a.body.innerHTML.replace(/\+/g, " ")) : null;
  }
  var b = a.Lb.contentWindow;
  if (b) {
    var c;
    try {
      c = decodeURIComponent(iq(b).replace(/\+/g, " "));
    } catch (d) {
      return a.Ob || (!0 != a.Ob && a.ia.setInterval(nq), a.Ob = !0), null;
    }
    a.Ob && (!1 != a.Ob && a.ia.setInterval($p), a.Ob = !1);
    return c || null;
  }
  return null;
}
h.Zd = function() {
  if (this.zb) {
    var a = iq(this.Ua);
    a != this.Mb && jq(this, a);
  }
  if (!this.zb || aq) {
    if (a = kq(this) || "", null == this.Nb || a == this.Nb) {
      this.Nb = null, a != this.Mb && jq(this, a);
    }
  }
};
function jq(a, b) {
  a.Mb = a.Yb.value = b;
  a.zb ? (aq && eq(a, b), cq(a, b)) : eq(a, b);
  a.dispatchEvent(new Wp(dq(a)));
}
h.ah = function() {
  this.ia.stop();
  this.ia.start();
};
var hq = ["mousedown", "keydown", "mousemove"], mq = "\x3ctitle\x3e%s\x3c/title\x3e\x3cbody\x3e%s\x3c/body\x3e", bq = '\x3ciframe id\x3d"%s" style\x3d"display:none" %s\x3e\x3c/iframe\x3e', Zp = '\x3cinput type\x3d"text" name\x3d"%s" id\x3d"%s" style\x3d"display:none"\x3e', Yp = 0, $p = 150, nq = 1E4;
function oq(a) {
  a = null == a ? null : new Date(a);
  a = null == a ? null : a.getYear();
  return null == a ? null : a + 1900;
}
;var pq, qq;
function rq(a, b, c) {
  var d = N(c) ? J.c(S, c) : c, e = I.c(d, Rk), f = I.c(d, Lh), g = e.c ? e.c(hi, a) : e.call(null, hi, a);
  "undefined" === typeof pq && (pq = function(a, b, c, d, e, f, g, O, Z) {
    this.Vb = a;
    this.ca = b;
    this.D = c;
    this.pa = d;
    this.Tf = e;
    this.fh = f;
    this.w = g;
    this.Oa = O;
    this.og = Z;
    this.r = 0;
    this.k = 393216;
  }, pq.R = !0, pq.Q = "clustermap.components.full-report.company-site-list/t33885", pq.U = function(a, b) {
    return jc(b, "clustermap.components.full-report.company-site-list/t33885");
  }, pq.prototype.Ea = !0, pq.prototype.Aa = function() {
    var a = this;
    return React.DOM.tr(null, function() {
      var b = Uk.d(a.Oa);
      return M(b) ? React.DOM.td(W(b), null) : React.DOM.td(null, V(b));
    }(), function() {
      var b = ji.d(a.Oa);
      return M(b) ? React.DOM.td(W(b), null) : React.DOM.td(null, V(b));
    }(), function() {
      var b = a.ca.c ? a.ca.c(yk, new n(null, 2, [Vi, Vi.d(a.Oa), qi, wj.d(a.Oa)], null)) : a.ca.call(null, yk, new n(null, 2, [Vi, Vi.d(a.Oa), qi, wj.d(a.Oa)], null));
      return M(b) ? React.DOM.td(W(b), null) : React.DOM.td(null, V(b));
    }(), function() {
      var b = a.ca.c ? a.ca.c(Oh, new n(null, 2, [Ph, Ph.d(a.Oa), Kk, rh.d(a.Oa)], null)) : a.ca.call(null, Oh, new n(null, 2, [Ph, Ph.d(a.Oa), Kk, rh.d(a.Oa)], null));
      return M(b) ? React.DOM.td(W(b), null) : React.DOM.td(null, V(b));
    }());
  }, pq.prototype.A = function() {
    return this.og;
  }, pq.prototype.B = function(a, b) {
    return new pq(this.Vb, this.ca, this.D, this.pa, this.Tf, this.fh, this.w, this.Oa, b);
  });
  return new pq(g, f, e, d, d, c, b, a, null);
}
var tq = function sq(b, c, d) {
  var e = mo.c(c, mi);
  "undefined" === typeof qq && (qq = function(b, c, d, e, p, t) {
    this.v = b;
    this.pa = c;
    this.w = d;
    this.Ca = e;
    this.Ef = p;
    this.pg = t;
    this.r = 0;
    this.k = 393216;
  }, qq.R = !0, qq.Q = "clustermap.components.full-report.company-site-list/t33906", qq.U = function(b, c) {
    return jc(c, "clustermap.components.full-report.company-site-list/t33906");
  }, qq.prototype.Ea = !0, qq.prototype.Aa = function() {
    var b = this, c = Sp(b.v, b.Ca, Yg);
    return M(c) ? React.DOM.div(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["full-report-list"], null)], null), c], 0))), React.DOM.div({className:"table-responsive"}, React.DOM.table({className:"table"}, React.DOM.thead(null, React.DOM.tr(null, function() {
      var c = Rp(b.v, b.Ca, Yg, "Investor-backed Company", gh);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Rp(b.v, b.Ca, Yg, "Postcode", sj);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Rp(b.v, b.Ca, Yg, "Investor", Si);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Rp(b.v, b.Ca, Yg, "Constituency", yj);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }())), function() {
      var c = Co.e(rq, th.d(b.Ca), new n(null, 2, [ai, Wi, jk, b.pa], null));
      return M(c) ? React.DOM.tbody(W(c), null) : React.DOM.tbody(null, V(c));
    }())), V(Sp(b.v, b.Ca, Yg))) : React.DOM.div({className:"full-report-list"}, V(c), React.DOM.div({className:"table-responsive"}, React.DOM.table({className:"table"}, React.DOM.thead(null, React.DOM.tr(null, function() {
      var c = Rp(b.v, b.Ca, Yg, "Investor-backed Company", gh);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Rp(b.v, b.Ca, Yg, "Postcode", sj);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Rp(b.v, b.Ca, Yg, "Investor", Si);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), function() {
      var c = Rp(b.v, b.Ca, Yg, "Constituency", yj);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }())), function() {
      var c = Co.e(rq, th.d(b.Ca), new n(null, 2, [ai, Wi, jk, b.pa], null));
      return M(c) ? React.DOM.tbody(W(c), null) : React.DOM.tbody(null, V(c));
    }())), V(Sp(b.v, b.Ca, Yg)));
  }, qq.prototype.A = function() {
    return this.pg;
  }, qq.prototype.B = function(b, c) {
    return new qq(this.v, this.pa, this.w, this.Ca, this.Ef, c);
  });
  return new qq(e, d, c, b, sq, null);
};
var uq, vq;
function wq(a, b, c, d) {
  var e = A(d);
  return C(d) ? (a = a.c ? a.c(c, e) : a.call(null, c, e), M(a) ? React.DOM.div(W(a), React.DOM.a({href:b}, "\u00a0(more...)")) : React.DOM.div(null, V(a), React.DOM.a({href:b}, "\u00a0(more...)"))) : a.c ? a.c(c, e) : a.call(null, c, e);
}
var yq = function xq(b, c, d) {
  var e = N(d) ? J.c(S, d) : d, f = I.c(e, Rk), g = I.c(e, Lh), k = f.c ? f.c(hi, b) : f.call(null, hi, b);
  "undefined" === typeof uq && (uq = function(b, c, d, e, f, g, k, Z, U, aa) {
    this.Vb = b;
    this.ca = c;
    this.D = d;
    this.pa = e;
    this.Sf = f;
    this.eh = g;
    this.w = k;
    this.ua = Z;
    this.Jc = U;
    this.mg = aa;
    this.r = 0;
    this.k = 393216;
  }, uq.R = !0, uq.Q = "clustermap.components.full-report.company-list/t33824", uq.U = function(b, c) {
    return jc(c, "clustermap.components.full-report.company-list/t33824");
  }, uq.prototype.Ea = !0, uq.prototype.Aa = function() {
    var b = this;
    return React.DOM.tr(null, function() {
      var c = b.ca.c ? b.ca.c(hi, b.ua) : b.ca.call(null, hi, b.ua);
      return M(c) ? React.DOM.td(W(c), null) : React.DOM.td(null, V(c));
    }(), function() {
      var c = wq(b.ca, b.Vb, yk, wk.d(b.ua));
      return M(c) ? React.DOM.td(W(c), null) : React.DOM.td(null, V(c));
    }(), function() {
      var c = wq(b.ca, b.Vb, Oh, function() {
        var c = b.ua, d = null == c ? null : zh.d(c);
        return null == d ? null : xe(function() {
          return function(b) {
            return x.c("uk_constituencies", Ih.d(b));
          };
        }(c, d), d);
      }());
      return M(c) ? React.DOM.td(W(c), null) : React.DOM.td(null, V(c));
    }(), function() {
      var c = Mo.q ? Mo.q(wi.d(b.ua), Zj, 2, y, "-") : Mo.call(null, wi.d(b.ua), Zj, 2, y, "-");
      return M(c) ? React.DOM.td(W(c), React.DOM.small(null, "\u00a0(", V(function() {
        var c = oq(sh.d(b.ua));
        return q(c) ? c : "no info";
      }()), ")")) : React.DOM.td(null, V(c), React.DOM.small(null, "\u00a0(", V(function() {
        var c = oq(sh.d(b.ua));
        return q(c) ? c : "no info";
      }()), ")"));
    }(), function() {
      var c;
      c = Ej.d(b.ua);
      c = null == c ? null : 0 < c ? React.DOM.i({className:"icon-positive"}) : 0 > c ? React.DOM.i({className:"icon-negative"}) : null;
      return M(c) ? React.DOM.td(W(c), null) : React.DOM.td(null, V(c));
    }(), function() {
      var c = Mo.q ? Mo.q(Ej.d(b.ua), Zj, 2, y, "-") : Mo.call(null, Ej.d(b.ua), Zj, 2, y, "-");
      return M(c) ? React.DOM.td(W(c), null) : React.DOM.td(null, V(c));
    }(), function() {
      var c = Y.q ? Y.q(fk.d(b.ua), Cj, 0, y, "-") : Y.call(null, fk.d(b.ua), Cj, 0, y, "-");
      return M(c) ? React.DOM.td(W(c), React.DOM.small(null, "\u00a0(", V(function() {
        var c = oq(sh.d(b.ua));
        return q(c) ? c : "no info";
      }()), ")")) : React.DOM.td(null, V(c), React.DOM.small(null, "\u00a0(", V(function() {
        var c = oq(sh.d(b.ua));
        return q(c) ? c : "no info";
      }()), ")"));
    }());
  }, uq.prototype.A = function() {
    return this.mg;
  }, uq.prototype.B = function(b, c) {
    return new uq(this.Vb, this.ca, this.D, this.pa, this.Sf, this.eh, this.w, this.ua, this.Jc, c);
  });
  return new uq(k, g, f, e, e, d, c, b, xq, null);
}, Aq = function zq(b, c, d) {
  var e = mo.c(c, mi);
  "undefined" === typeof vq && (vq = function(b, c, d, e, p, t) {
    this.v = b;
    this.pa = c;
    this.w = d;
    this.Ba = e;
    this.Df = p;
    this.ng = t;
    this.r = 0;
    this.k = 393216;
  }, vq.R = !0, vq.Q = "clustermap.components.full-report.company-list/t33855", vq.U = function(b, c) {
    return jc(c, "clustermap.components.full-report.company-list/t33855");
  }, vq.prototype.Ea = !0, vq.prototype.Aa = function() {
    var b = this, c = Sp(b.v, b.Ba, kk);
    return M(c) ? React.DOM.div(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["full-report-list"], null)], null), c], 0))), React.DOM.div({className:"table-responsive"}, React.DOM.table({className:"table"}, React.DOM.thead(null, React.DOM.tr(null, function() {
      var c = Rp(b.v, b.Ba, kk, "Investor-backed company", qi);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), React.DOM.th(null, "Investor"), React.DOM.th(null, "Constituency"), function() {
      var c = Rp(b.v, b.Ba, kk, "Revenue", wi);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), React.DOM.th({colSpan:"2"}, V(Rp(b.v, b.Ba, kk, "Rev. change", Ej))), function() {
      var c = Rp(b.v, b.Ba, kk, "Employees", fk);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }())), function() {
      var c = Co.e(yq, th.d(b.Ba), new n(null, 2, [ai, mh, jk, b.pa], null));
      return M(c) ? React.DOM.tbody(W(c), null) : React.DOM.tbody(null, V(c));
    }())), V(Sp(b.v, b.Ba, kk))) : React.DOM.div({className:"full-report-list"}, V(c), React.DOM.div({className:"table-responsive"}, React.DOM.table({className:"table"}, React.DOM.thead(null, React.DOM.tr(null, function() {
      var c = Rp(b.v, b.Ba, kk, "Investor-backed company", qi);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), React.DOM.th(null, "Investor"), React.DOM.th(null, "Constituency"), function() {
      var c = Rp(b.v, b.Ba, kk, "Revenue", wi);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }(), React.DOM.th({colSpan:"2"}, V(Rp(b.v, b.Ba, kk, "Rev. change", Ej))), function() {
      var c = Rp(b.v, b.Ba, kk, "Employees", fk);
      return M(c) ? React.DOM.th(W(c), null) : React.DOM.th(null, V(c));
    }())), function() {
      var c = Co.e(yq, th.d(b.Ba), new n(null, 2, [ai, mh, jk, b.pa], null));
      return M(c) ? React.DOM.tbody(W(c), null) : React.DOM.tbody(null, V(c));
    }())), V(Sp(b.v, b.Ba, kk)));
  }, vq.prototype.A = function() {
    return this.ng;
  }, vq.prototype.B = function(b, c) {
    return new vq(this.v, this.pa, this.w, this.Ba, this.Df, c);
  });
  return new vq(e, d, c, b, zq, null);
};
function Dq(a) {
  if (a ? a.je : a) {
    return a.je();
  }
  var b;
  b = Dq[m(null == a ? null : a)];
  if (!b && (b = Dq._, !b)) {
    throw u("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function Eq(a, b) {
  if (a ? a.ke : a) {
    return a.ke(0, b);
  }
  var c;
  c = Eq[m(null == a ? null : a)];
  if (!c && (c = Eq._, !c)) {
    throw u("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function Fq(a, b, c) {
  this.O = a;
  this.buffer = b;
  this.Cd = c;
}
Fq.prototype.je = function() {
  return 0 === this.buffer.length ? (this.Cd += 1, this.O[this.Cd]) : this.buffer.pop();
};
Fq.prototype.ke = function(a, b) {
  return this.buffer.push(b);
};
function Gq(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return q(b) ? b : "," === a;
}
var Hq = function() {
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
function Iq(a, b) {
  for (var c = new Xa(b), d = Dq(a);;) {
    var e;
    if (!(e = null == d) && !(e = Gq(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? Jq.d ? Jq.d(e) : Jq.call(null, e) : f : f : f;
    }
    if (e) {
      return Eq(a, d), c.toString();
    }
    c.append(d);
    d = Dq(a);
  }
}
function Kq(a) {
  for (;;) {
    var b = Dq(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var Lq = lg("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?"), Mq = lg("([-+]?[0-9]+)/([0-9]+)"), Nq = lg("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?"), Oq = lg("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
function Pq(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === c.length ? c[0] : c;
}
function Qq(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
var Rq = lg("[0-9A-Fa-f]{2}"), Sq = lg("[0-9A-Fa-f]{4}");
function Tq(a, b, c, d) {
  return q(jg(a, d)) ? d : Hq.f(b, E(["Unexpected unicode escape \\", c, d], 0));
}
function Uq(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function Vq(a) {
  var b = Dq(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  return q(c) ? c : "x" === b ? Uq(Tq(Rq, a, b, (new Xa(Dq(a), Dq(a))).toString())) : "u" === b ? Uq(Tq(Sq, a, b, (new Xa(Dq(a), Dq(a), Dq(a), Dq(a))).toString())) : /[^0-9]/.test(b) ? s ? Hq.f(a, E(["Unexpected unicode escape \\", b], 0)) : null : String.fromCharCode(b);
}
function Wq(a, b) {
  for (var c = pc(Ze);;) {
    var d;
    a: {
      d = Gq;
      for (var e = b, f = Dq(e);;) {
        if (q(d.d ? d.d(f) : d.call(null, f))) {
          f = Dq(e);
        } else {
          d = f;
          break a;
        }
      }
      d = void 0;
    }
    q(d) || Hq.f(b, E(["EOF while reading"], 0));
    if (a === d) {
      return rc(c);
    }
    e = Jq.d ? Jq.d(d) : Jq.call(null, d);
    q(e) ? d = e.c ? e.c(b, d) : e.call(null, b, d) : (Eq(b, d), d = Xq.o ? Xq.o(b, !0, null, !0) : Xq.call(null, b, !0, null));
    c = d === b ? c : $d.c(c, d);
  }
}
function Yq(a, b) {
  return Hq.f(a, E(["Reader for ", b, " not implemented yet"], 0));
}
function Zq(a, b) {
  var c = Dq(a), d = $q.d ? $q.d(c) : $q.call(null, c);
  if (q(d)) {
    return d.c ? d.c(a, b) : d.call(null, a, b);
  }
  d = ar.c ? ar.c(a, c) : ar.call(null, a, c);
  return q(d) ? d : Hq.f(a, E(["No dispatch macro for ", c], 0));
}
function br(a, b) {
  return Hq.f(a, E(["Unmached delimiter ", b], 0));
}
function cr(a) {
  return J.c(Hd, Wq(")", a));
}
function dr(a) {
  return Wq("]", a);
}
function er(a) {
  var b = Wq("}", a);
  var c = G(b);
  if ("number" !== typeof c || isNaN(c) || Infinity === c || parseFloat(c) !== parseInt(c, 10)) {
    throw Error([v("Argument must be an integer: "), v(c)].join(""));
  }
  0 !== (c & 1) && Hq.f(a, E(["Map literal must contain an even number of forms"], 0));
  return J.c(S, b);
}
function fr(a) {
  for (var b = new Xa, c = Dq(a);;) {
    if (null == c) {
      return Hq.f(a, E(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(Vq(a)), c = Dq(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      if (y) {
        b.append(c), c = Dq(a);
      } else {
        return null;
      }
    }
  }
}
function gr(a, b) {
  var c = Iq(a, b);
  if (q(-1 != c.indexOf("/"))) {
    c = Fc.c(Ad.e(c, 0, c.indexOf("/")), Ad.e(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = Fc.d(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : s ? d : null
  }
  return c;
}
function hr(a) {
  var b = Iq(a, Dq(a)), c = Qq(Oq, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? Hq.f(a, E(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Ld.c(d.substring(0, d.indexOf("/")), c) : Ld.d(b);
}
function ir(a) {
  return function(b) {
    return yb(yb(Ic, Xq.o ? Xq.o(b, !0, null, !0) : Xq.call(null, b, !0, null)), a);
  };
}
function jr() {
  return function(a) {
    return Hq.f(a, E(["Unreadable form"], 0));
  };
}
function kr(a) {
  var b;
  b = Xq.o ? Xq.o(a, !0, null, !0) : Xq.call(null, a, !0, null);
  b = b instanceof Cc ? new n(null, 1, [Mk, b], null) : "string" === typeof b ? new n(null, 1, [Mk, b], null) : b instanceof P ? new wf([b, !0]) : s ? b : null;
  M(b) || Hq.f(a, E(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = Xq.o ? Xq.o(a, !0, null, !0) : Xq.call(null, a, !0, null);
  return(c ? c.k & 262144 || c.zf || (c.k ? 0 : r(Yb, c)) : r(Yb, c)) ? Tc(c, Vf.f(E([dd(c), b], 0))) : Hq.f(a, E(["Metadata can only be applied to IWithMetas"], 0));
}
function lr(a) {
  return $f(Wq("}", a));
}
function mr(a) {
  return lg(fr(a));
}
function nr(a) {
  Xq.o ? Xq.o(a, !0, null, !0) : Xq.call(null, a, !0, null);
  return a;
}
function Jq(a) {
  return'"' === a ? fr : ":" === a ? hr : ";" === a ? Kq : "'" === a ? ir(new Cc(null, "quote", "quote", -1532577739, null)) : "@" === a ? ir(new Cc(null, "deref", "deref", -1545057749, null)) : "^" === a ? kr : "`" === a ? Yq : "~" === a ? Yq : "(" === a ? cr : ")" === a ? br : "[" === a ? dr : "]" === a ? br : "{" === a ? er : "}" === a ? br : "\\" === a ? Dq : "#" === a ? Zq : null;
}
function $q(a) {
  return "{" === a ? lr : "\x3c" === a ? jr() : '"' === a ? mr : "!" === a ? Kq : "_" === a ? nr : null;
}
function Xq(a, b, c) {
  for (;;) {
    var d = Dq(a);
    if (null == d) {
      return q(b) ? Hq.f(a, E(["EOF while reading"], 0)) : c;
    }
    if (!Gq(d)) {
      if (";" === d) {
        a = Kq.c ? Kq.c(a, d) : Kq.call(null, a);
      } else {
        if (s) {
          var e = Jq(d);
          if (q(e)) {
            e = e.c ? e.c(a, d) : e.call(null, a, d);
          } else {
            var e = a, f = void 0;
            !(f = !/[^0-9]/.test(d)) && (f = void 0, f = "+" === d || "-" === d) && (f = Dq(e), Eq(e, f), f = !/[^0-9]/.test(f));
            if (f) {
              a: {
                e = a;
                d = new Xa(d);
                for (f = Dq(e);;) {
                  var g;
                  g = null == f;
                  g || (g = (g = Gq(f)) ? g : Jq.d ? Jq.d(f) : Jq.call(null, f));
                  if (q(g)) {
                    Eq(e, f);
                    d = d.toString();
                    if (q(Qq(Lq, d))) {
                      if (g = Pq(Lq, d), f = g[2], null == f || 1 > f.length) {
                        var f = "-" === g[1] ? -1 : 1, k = q(g[3]) ? [g[3], 10] : q(g[4]) ? [g[4], 16] : q(g[5]) ? [g[5], 8] : q(g[7]) ? [g[7], parseInt(g[7])] : y ? [null, null] : null;
                        g = k[0];
                        k = k[1];
                        f = null == g ? null : f * parseInt(g, k);
                      } else {
                        f = 0;
                      }
                    } else {
                      q(Qq(Mq, d)) ? (f = Pq(Mq, d), f = parseInt(f[1]) / parseInt(f[2])) : f = q(Qq(Nq, d)) ? parseFloat(d) : null;
                    }
                    e = q(f) ? f : Hq.f(e, E(["Invalid number format [", d, "]"], 0));
                    break a;
                  }
                  d.append(f);
                  f = Dq(e);
                }
                e = void 0;
              }
            } else {
              e = s ? gr(a, d) : null;
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
function or(a) {
  if (x.c(3, G(a))) {
    return a;
  }
  if (3 < G(a)) {
    return Ad.e(a, 0, 3);
  }
  if (s) {
    for (a = new Xa(a);;) {
      if (3 > a.ib.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var pr = function() {
  var a = new Q(null, 13, 5, R, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new Q(null, 13, 5, R, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return I.c(q(d) ? b : a, c);
  };
}(), qr = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function rr(a) {
  a = parseInt(a);
  return jb(isNaN(a)) ? a : null;
}
function sr(a, b, c, d) {
  a <= b && b <= c || Hq.f(null, E([[v(d), v(" Failed:  "), v(a), v("\x3c\x3d"), v(b), v("\x3c\x3d"), v(c)].join("")], 0));
  return b;
}
function tr(a) {
  var b = jg(qr, a);
  H.e(b, 0, null);
  var c = H.e(b, 1, null), d = H.e(b, 2, null), e = H.e(b, 3, null), f = H.e(b, 4, null), g = H.e(b, 5, null), k = H.e(b, 6, null), l = H.e(b, 7, null), p = H.e(b, 8, null), t = H.e(b, 9, null), w = H.e(b, 10, null);
  if (jb(b)) {
    return Hq.f(null, E([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
  }
  a = rr(c);
  var b = function() {
    var a = rr(d);
    return q(a) ? a : 1;
  }(), c = function() {
    var a = rr(e);
    return q(a) ? a : 1;
  }(), D = function() {
    var a = rr(f);
    return q(a) ? a : 0;
  }(), K = function() {
    var a = rr(g);
    return q(a) ? a : 0;
  }(), O = function() {
    var a = rr(k);
    return q(a) ? a : 0;
  }(), Z = function() {
    var a = rr(or(l));
    return q(a) ? a : 0;
  }(), p = (x.c(p, "-") ? -1 : 1) * (60 * function() {
    var a = rr(t);
    return q(a) ? a : 0;
  }() + function() {
    var a = rr(w);
    return q(a) ? a : 0;
  }());
  return new Q(null, 8, 5, R, [a, sr(1, b, 12, "timestamp month field must be in range 1..12"), sr(1, c, pr.c ? pr.c(b, 0 === vd(a, 4) && (0 !== vd(a, 100) || 0 === vd(a, 400))) : pr.call(null, b, 0 === vd(a, 4) && (0 !== vd(a, 100) || 0 === vd(a, 400))), "timestamp day field must be in range 1..last day in month"), sr(0, D, 23, "timestamp hour field must be in range 0..23"), sr(0, K, 59, "timestamp minute field must be in range 0..59"), sr(0, O, x.c(K, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), 
  sr(0, Z, 999, "timestamp millisecond field must be in range 0..999"), p], null);
}
var ur = Bg.d(new n(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = tr(a), q(b)) {
      a = H.e(b, 0, null);
      var c = H.e(b, 1, null), d = H.e(b, 2, null), e = H.e(b, 3, null), f = H.e(b, 4, null), g = H.e(b, 5, null), k = H.e(b, 6, null);
      b = H.e(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, k) - 6E4 * b);
    } else {
      b = Hq.f(null, E([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
    }
  } else {
    b = Hq.f(null, E(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Pg(a) : Hq.f(null, E(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return kd(a) ? Be(lf, a) : Hq.f(null, E(["Queue literal expects a vector for its elements."], 0));
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
  if (M(a)) {
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
  return s ? Hq.f(null, E([[v("JS literal expects a vector or map containing "), v("only string or unqualified keyword keys")].join("")], 0)) : null;
}], null)), vr = Bg.d(null);
function ar(a, b) {
  var c = gr(a, b), d = I.c(Vb(ur), "" + v(c)), e = Vb(vr);
  return q(d) ? d.d ? d.d(Xq(a, !0, null)) : d.call(null, Xq(a, !0, null)) : q(e) ? e.c ? e.c(c, Xq(a, !0, null)) : e.call(null, c, Xq(a, !0, null)) : s ? Hq.f(a, E(["Could not find tag parser for ", "" + v(c), " in ", ug.f(E([Sf(Vb(ur))], 0))], 0)) : null;
}
;function wr(a) {
  if ("string" === typeof a) {
    return a;
  }
  if (bd(a)) {
    var b = a.prototype.ii;
    return q(b) ? [v("[crateGroup\x3d"), v(b), v("]")].join("") : a;
  }
  return a instanceof P ? Kd(a) : s ? a : null;
}
var xr = function() {
  function a(a, b) {
    return jQuery(wr(a), b);
  }
  function b(a) {
    return jQuery(wr(a));
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
h.ae = !0;
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
  return Ab.e(this, b, c);
};
h.uf = !0;
h.Db = !0;
h.C = function(a, b) {
  return b < G(this) ? this.slice(b, b + 1) : null;
};
h.ja = function(a, b, c) {
  return b < G(this) ? this.slice(b, b + 1) : void 0 === c ? null : c;
};
h.Tb = !0;
h.K = function() {
  return this.length;
};
h.Eb = !0;
h.W = function() {
  return this.get(0);
};
h.ga = function() {
  return 1 < G(this) ? this.slice(1) : Ic;
};
h.kb = !0;
h.J = function() {
  return q(this.get(0)) ? this : null;
};
function yr(a) {
  a = "" + v(a);
  return Xq(new Fq(a, [], -1), !0, null);
}
jQuery.mi(Jg(new n(null, 3, [oj, new n(null, 2, [wh, "application/edn, text/edn", bj, "application/clojure, text/clojure"], null), Qk, new n(null, 1, ["clojure", /edn|clojure/], null), Xj, new n(null, 2, ["text edn", yr, "text clojure", yr], null)], null)));
var zr;
function Ar(a, b, c) {
  c = N(c) ? J.c(S, c) : c;
  I.c(c, vk);
  c = I.c(c, Bi);
  var d = le.c(jh, a), e = le.c(ek, a), f = le.c(je.c(function() {
    return function(a) {
      return Io(a, 0);
    };
  }(d, e), function() {
    return function(a) {
      return De.c(a, new Q(null, 2, 5, R, [ek, ti], null));
    };
  }(d, e)), a), g = le.c(je.c(function() {
    return function(a) {
      return Io(a, 0);
    };
  }(d, e, f), function() {
    return function(a) {
      return De.c(a, new Q(null, 2, 5, R, [ek, di], null));
    };
  }(d, e, f)), a);
  a = le.c(je.c(function() {
    return function(a) {
      return Io(a, 0);
    };
  }(d, e, f, g), function() {
    return function(a) {
      return De.c(a, new Q(null, 2, 5, R, [ek, Th], null));
    };
  }(d, e, f, g)), a);
  return xr.d(b).Of(Jg(new n(null, 5, [Zh, new n(null, 2, [Eh, null, Jk, 300], null), kj, new n(null, 1, [bh, null], null), Yj, new n(null, 2, [Fj, d, Sg, new n(null, 1, [Sk, 270], null)], null), Rj, new Q(null, 1, 5, R, [new n(null, 3, [kj, new n(null, 1, [bh, c], null), dk, 0, Sg, new n(null, 1, [lk, function() {
    return Mo.f(this.value, E([jj, ""], 0));
  }], null)], null)], null), nk, new Q(null, 1, 5, R, [new n(null, 4, [qi, [v("Total "), v(c)].join(""), Mj, "line", Rj, 0, dh, a], null)], null)], null)));
}
var Cr = function Br(b, c, d) {
  var e = N(d) ? J.c(S, d) : d, f = I.c(e, Dk);
  "undefined" === typeof zr && (zr = function(b, c, d, e, f, w, D, K) {
    this.id = b;
    this.pa = c;
    this.jg = d;
    this.mh = e;
    this.w = f;
    this.data = w;
    this.Ch = D;
    this.Ag = K;
    this.r = 0;
    this.k = 393216;
  }, zr.R = !0, zr.Q = "clustermap.components.timeline-chart/t34593", zr.U = function(b, c) {
    return jc(c, "clustermap.components.timeline-chart/t34593");
  }, zr.prototype.He = !0, zr.prototype.Md = function() {
    Go.d(this.w);
    return Ar(this.data, Go.c(this.w, "chart"), this.pa);
  }, zr.prototype.Ge = !0, zr.prototype.Ld = function() {
    var b = this;
    Go.d(b.w);
    Ar(b.data, Go.c(b.w, "chart"), b.pa);
    return xr.d(document).eb("clustermap-change-view", function() {
      var c = xr.d(Go.c(b.w, "chart"));
      return q(c.Oi(":visible")) ? c.Of().gj() : null;
    });
  }, zr.prototype.Ea = !0, zr.prototype.Aa = function() {
    return React.DOM.div({className:"timeline-chart", id:this.id, ref:"chart"});
  }, zr.prototype.A = function() {
    return this.Ag;
  }, zr.prototype.B = function(b, c) {
    return new zr(this.id, this.pa, this.jg, this.mh, this.w, this.data, this.Ch, c);
  });
  return new zr(f, e, e, d, c, b, Br, null);
};
var Dr, Fr = function Er(b, c) {
  "undefined" === typeof Dr && (Dr = function(b, c, f, g) {
    this.w = b;
    this.data = c;
    this.jf = f;
    this.lg = g;
    this.r = 0;
    this.k = 393216;
  }, Dr.R = !0, Dr.Q = "clustermap.components.full-report.charts/t33796", Dr.U = function(b, c) {
    return jc(c, "clustermap.components.full-report.charts/t33796");
  }, Dr.prototype.Ea = !0, Dr.prototype.Aa = function() {
    var b;
    b = dj.d(this.data);
    b = q(b) ? new Q(null, 2, 5, R, [Aj, new Q(null, 2, 5, R, [ri, new Q(null, 2, 5, R, [Ak, new Q(null, 2, 5, R, [ri, new Q(null, 2, 5, R, [uj, new Q(null, 2, 5, R, [rk, new Q(null, 3, 5, R, [qh, new Q(null, 2, 5, R, [ui, "Revenue"], null), Bo.e(Cr, Jj.d(b), new n(null, 2, [jk, new n(null, 3, [Dk, "turnover-timeline-chart", Bi, "Revenue", vk, "# Filings"], null), Rh, "turnover-timeline-chart"], null))], null)], null)], null)], null)], null)], null)], null) : null;
    return M(b) ? React.DOM.div(W(qn.f(E([new n(null, 1, [bi, new Q(null, 1, 5, R, ["full-report-charts"], null)], null), b], 0))), null) : React.DOM.div({className:"full-report-charts"}, V(b));
  }, Dr.prototype.A = function() {
    return this.lg;
  }, Dr.prototype.B = function(b, c) {
    return new Dr(this.w, this.data, this.jf, c);
  });
  return new Dr(c, b, Er, null);
};
function Gr(a) {
  return x.c(1, G(a)) && x.c(hi, function() {
    var b = null == a ? null : Sf(a);
    return null == b ? null : A(b);
  }());
}
var Ir = function Hr(b, c) {
  var d = N(b) ? J.c(S, b) : b, e = I.c(d, lh), f = I.c(d, oi), g = I.c(d, gi), k = mo.d(c), k = N(k) ? J.c(S, k) : k, l = I.c(k, Lh), p = I.c(k, Rk), t = I.c(k, mi), p = ke.c(p, uh), l = ke.c(l, uh);
  "undefined" === typeof No && (No = function(b, c, d, e, f, g, k, l, p, t, qb, Yc, mf) {
    this.Lf = b;
    this.D = c;
    this.data = d;
    this.af = e;
    this.ca = f;
    this.Sd = g;
    this.selection = k;
    this.v = l;
    this.w = p;
    this.Wf = t;
    this.Vf = qb;
    this.gh = Yc;
    this.rg = mf;
    this.r = 0;
    this.k = 393216;
  }, No.R = !0, No.Q = "clustermap.components.full-report/t34031", No.U = function(b, c) {
    return jc(c, "clustermap.components.full-report/t34031");
  }, No.prototype.He = !0, No.prototype.Md = function() {
    var b = Go.d(this.w);
    xr.c("[data-toggle\x3d'tooltip']", b).data("bs.tooltip", !1);
    return xr.c("[data-toggle\x3d'tooltip']", b).Fh();
  }, No.prototype.Ea = !0, No.prototype.Aa = function() {
    var b = Bo.e(So, this.data, new n(null, 2, [jk, new n(null, 1, [mi, this.v], null), Rh, "overview"], null));
    return M(b) ? React.DOM.div(W(b), V(Bo.e(Fr, this.data, new n(null, 2, [jk, new n(null, 1, [mi, this.v], null), Rh, "details"], null))), Gr(this.Sd) ? V(q(gj.d(this.data)) ? Bo.e(tq, gj.d(this.data), new n(null, 2, [jk, new n(null, 3, [mi, this.v, Lh, this.ca, Rk, this.D], null), Rh, "selection-investments"], null)) : null) : V(q(ni.d(this.data)) ? Bo.e(Aq, ni.d(this.data), new n(null, 2, [jk, new n(null, 3, [mi, this.v, Lh, this.ca, Rk, this.D], null), Rh, "selection-investments-by-company"], 
    null)) : null)) : React.DOM.div(null, V(b), V(Bo.e(Fr, this.data, new n(null, 2, [jk, new n(null, 1, [mi, this.v], null), Rh, "details"], null))), Gr(this.Sd) ? V(q(gj.d(this.data)) ? Bo.e(tq, gj.d(this.data), new n(null, 2, [jk, new n(null, 3, [mi, this.v, Lh, this.ca, Rk, this.D], null), Rh, "selection-investments"], null)) : null) : V(q(ni.d(this.data)) ? Bo.e(Aq, ni.d(this.data), new n(null, 2, [jk, new n(null, 3, [mi, this.v, Lh, this.ca, Rk, this.D], null), Rh, "selection-investments-by-company"], 
    null)) : null));
  }, No.prototype.A = function() {
    return this.rg;
  }, No.prototype.B = function(b, c) {
    return new No(this.Lf, this.D, this.data, this.af, this.ca, this.Sd, this.selection, this.v, this.w, this.Wf, this.Vf, this.gh, c);
  });
  return new No(Hr, p, d, e, l, g, f, t, c, k, d, b, null);
};
function Jr() {
  var a = Kr, b = jd(oi) ? oi : new Q(null, 1, 5, R, [oi], null);
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
;function Lr(a) {
  return React.DOM.a({href:a.c ? a.c(null, null) : a.call(null, null, null)}, React.DOM.button({className:"btn btn-link btn-reset", type:"reset"}, "Reset to UK wide"));
}
;var Mr, Kr = function Nr(b, c) {
  var d = N(b) ? J.c(S, b) : b, e = I.c(d, Fk), f = I.c(d, Mj), g = mo.d(c), g = N(g) ? J.c(S, g) : g, k = I.c(g, Rk), l = I.c(g, mi), k = ke.c(k, uh), p = function() {
    var b = null == d ? null : Mj.d(d);
    if (null == b) {
      b = null;
    } else {
      if (q(x.c ? x.c(hi, b) : x.call(null, hi, b))) {
        b = "Investor-backed company";
      } else {
        if (q(x.c ? x.c(yk, b) : x.call(null, yk, b))) {
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
    var b = null == d ? null : Fk.d(d);
    return null == b ? null : qi.d(b);
  }(), w = function() {
    var b = null == d ? null : Fk.d(d);
    return null == b ? null : ck.d(b);
  }();
  "undefined" === typeof Mr && (Mr = function(b, c, d, e, f, g, k, l, p, w, t, mf, Bb, Fe) {
    this.value = b;
    this.D = c;
    this.Vd = d;
    this.selection = e;
    this.name = f;
    this.v = g;
    this.nh = k;
    this.w = l;
    this.url = p;
    this.cg = w;
    this.ih = t;
    this.type = mf;
    this.bg = Bb;
    this.xg = Fe;
    this.r = 0;
    this.k = 393216;
  }, Mr.R = !0, Mr.Q = "clustermap.components.page-title/t34430", Mr.U = function(b, c) {
    return jc(c, "clustermap.components.page-title/t34430");
  }, Mr.prototype.Ea = !0, Mr.prototype.Aa = function() {
    var b = this;
    return React.DOM.div({id:"page-title"}, React.DOM.button({className:"btn", type:"button", onClick:function() {
      return Pp.c(b.v, new Q(null, 2, 5, R, [Bk, "map"], null));
    }}, "View on map"), V(q(b.Vd) ? Lr(b.D) : null), function() {
      var c;
      c = b.Vd;
      c = q(c) ? c : "All investor-backed companies";
      return M(c) ? React.DOM.h2(W(c), null) : React.DOM.h2(null, V(c));
    }(), function() {
      var c;
      c = b.name;
      c = q(c) ? c : "UK wide";
      return M(c) ? React.DOM.h3(W(c), V(x.c(b.type, Oh) ? new Q(null, 6, 5, R, [Sj, "\u00a0(", uk.d(b.value), ", ", Tk.d(b.value), ")"], null) : null)) : React.DOM.h3(null, V(c), V(x.c(b.type, Oh) ? new Q(null, 6, 5, R, [Sj, "\u00a0(", uk.d(b.value), ", ", Tk.d(b.value), ")"], null) : null));
    }(), q(b.url) ? React.DOM.a({href:b.url, target:"_blank"}, V(b.url)) : null);
  }, Mr.prototype.A = function() {
    return this.xg;
  }, Mr.prototype.B = function(b, c) {
    return new Mr(this.value, this.D, this.Vd, this.selection, this.name, this.v, this.nh, this.w, this.url, this.cg, this.ih, this.type, this.bg, c);
  });
  return new Mr(e, k, p, d, t, l, Nr, c, w, g, b, f, d, null);
};
function Or(a) {
  Yk.call(this);
  a || Nm || (Nm = new Ym);
}
ta(Or, Yk);
var Pr = document.createElement("div");
Pr.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
var Qr = x.c(Pr.firstChild.nodeType, 3), Rr = x.c(Pr.getElementsByTagName("tbody").length, 0);
x.c(Pr.getElementsByTagName("link").length, 0);
var Sr = /<|&#?\w+;/, Tr = /^\s+/, Ur = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, Vr = /<([\w:]+)/, Wr = /<tbody/i, Xr = new Q(null, 3, 5, R, [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"], null), Yr = new Q(null, 3, 5, R, [1, "\x3ctable\x3e", "\x3c/table\x3e"], null), Zr = new Q(null, 3, 5, R, [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"], null), $r = Zc(["col", y, "tfoot", "caption", "optgroup", "legend", 
"area", "td", "thead", "th", "option", "tbody", "tr", "colgroup"], [new Q(null, 3, 5, R, [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"], null), new Q(null, 3, 5, R, [0, "", ""], null), Yr, Yr, Xr, new Q(null, 3, 5, R, [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"], null), new Q(null, 3, 5, R, [1, "\x3cmap\x3e", "\x3c/map\x3e"], null), Zr, Yr, Zr, Xr, Yr, new Q(null, 3, 5, R, [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"], null), 
Yr]);
function as(a, b, c, d) {
  b = jb(kg(Wr, b));
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
function bs(a) {
  var b = Zm(a, Ur, "\x3c$1\x3e\x3c/$2\x3e");
  a = ("" + v(Uc(kg(Vr, b)))).toLowerCase();
  var c = I.e($r, a, y.d($r)), d = H.e(c, 0, null), e = H.e(c, 1, null), f = H.e(c, 2, null), c = function() {
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
  q(Rr) && as(c, b, a, e);
  q(function() {
    var a = jb(Qr);
    return a ? kg(Tr, b) : a;
  }()) && c.insertBefore(document.createTextNode(A(kg(Tr, b))), c.firstChild);
  return c.childNodes;
}
function cs(a) {
  if (a ? a.Fb : a) {
    return a.Fb(a);
  }
  var b;
  b = cs[m(null == a ? null : a)];
  if (!b && (b = cs._, !b)) {
    throw u("DomContent.nodes", a);
  }
  return b.call(null, a);
}
function ds(a) {
  if (a ? a.ud : a) {
    return a.ud(a);
  }
  var b;
  b = ds[m(null == a ? null : a)];
  if (!b && (b = ds._, !b)) {
    throw u("DomContent.single-node", a);
  }
  return b.call(null, a);
}
function es(a, b) {
  for (var c = z(cs(a)), d = null, e = 0, f = 0;;) {
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
function fs(a, b) {
  for (var c = z(cs(a)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.C(null, f);
      Rm(g, b);
      f += 1;
    } else {
      if (c = z(c)) {
        d = c, ld(d) ? (c = vc(d), f = wc(d), d = c, e = G(c), c = f) : (c = A(d), Rm(c, b), c = C(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
var gs = function() {
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
}(), hs = function() {
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
function is(a) {
  return q(a.item) ? gs.d(a) : hs.d(a);
}
function js(a) {
  if (q(a)) {
    var b = jb(a.nodeName);
    return b ? a.length : b;
  }
  return a;
}
function ks(a) {
  return null == a ? Ic : (a ? a.k & 8388608 || a.kb || (a.k ? 0 : r(dc, a)) : r(dc, a)) ? z(a) : q(js(a)) ? is(a) : y ? z(new Q(null, 1, 5, R, [a], null)) : null;
}
cs._ = function(a) {
  return null == a ? Ic : (a ? a.k & 8388608 || a.kb || (a.k ? 0 : r(dc, a)) : r(dc, a)) ? z(a) : q(js(a)) ? is(a) : y ? z(new Q(null, 1, 5, R, [a], null)) : null;
};
ds._ = function(a) {
  return null == a ? null : (a ? a.k & 8388608 || a.kb || (a.k ? 0 : r(dc, a)) : r(dc, a)) ? A(a) : q(js(a)) ? a.item(0) : y ? a : null;
};
cs.string = function(a) {
  return ig.d(cs(q(kg(Sr, a)) ? bs(a) : document.createTextNode(a)));
};
ds.string = function(a) {
  return ds(q(kg(Sr, a)) ? bs(a) : document.createTextNode(a));
};
q("undefined" != typeof NodeList) && (h = NodeList.prototype, h.kb = !0, h.J = function() {
  return is(this);
}, h.Db = !0, h.C = function(a, b) {
  return this.item(b);
}, h.ja = function(a, b, c) {
  return this.length <= b ? c : H.c(this, b);
}, h.Tb = !0, h.K = function() {
  return this.length;
});
q("undefined" != typeof StaticNodeList) && (h = StaticNodeList.prototype, h.kb = !0, h.J = function() {
  return is(this);
}, h.Db = !0, h.C = function(a, b) {
  return this.item(b);
}, h.ja = function(a, b, c) {
  return this.length <= b ? c : H.c(this, b);
}, h.Tb = !0, h.K = function() {
  return this.length;
});
q("undefined" != typeof HTMLCollection) && (h = HTMLCollection.prototype, h.kb = !0, h.J = function() {
  return is(this);
}, h.Db = !0, h.C = function(a, b) {
  return this.item(b);
}, h.ja = function(a, b, c) {
  return this.length <= b ? c : H.c(this, b);
}, h.Tb = !0, h.K = function() {
  return this.length;
});
var ls;
function ms(a, b, c, d) {
  var e = Xm(b), f = b.selectSingleNode;
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
function ns(a, b) {
  return ms(a, b, function(a, b) {
    return a.selectSingleNode(b);
  }, function(a, b, e, f) {
    return b.evaluate(f, e, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  });
}
function os(a, b) {
  return ms(a, b, function(a, b) {
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
var ps = function() {
  function a(a, b) {
    "undefined" === typeof ls && (ls = function(a, b, c, d) {
      this.qb = a;
      this.hb = b;
      this.Kh = c;
      this.Gg = d;
      this.r = 0;
      this.k = 393216;
    }, ls.R = !0, ls.Q = "domina.xpath/t39284", ls.U = function(a, b) {
      return jc(b, "domina.xpath/t39284");
    }, ls.prototype.Fb = function() {
      return ve.c(ke.c(os, this.qb), cs(this.hb));
    }, ls.prototype.ud = function() {
      return A(xe(ie(ib), le.c(ke.c(ns, this.qb), cs(this.hb))));
    }, ls.prototype.A = function() {
      return this.Gg;
    }, ls.prototype.B = function(a, b) {
      return new ls(this.qb, this.hb, this.Kh, b);
    });
    return new ls(b, a, c, null);
  }
  function b(a) {
    return c.c(Um()[0], a);
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
var qs = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = N(b) ? J.c(S, b) : b, f = I.c(e, yh), g = Np.d(1);
    Cm(a, function(a) {
      Pp.c(g, function(a) {
        return q(f) ? a : Og.f(a, E([Ng, !0], 0));
      }.call(null, JSON.parse(Mm(a.target)).data));
      return dp(g);
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
function rs(a, b) {
  var c = Np.d(1);
  Dp(function() {
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
                    return c[5] = d, op(c), T;
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
          return d = c[2], np(c, d);
        }
        if (4 === d) {
          return lp(c, 7, a);
        }
        if (5 === d) {
          return c[2] = null, c[1] = 6, T;
        }
        if (6 === d) {
          return d = c[2], c[2] = d, c[1] = 3, T;
        }
        if (7 === d) {
          var d = c[7], e = c[2], d = H.e(e, 0, null), e = H.e(e, 1, null), l = jd(d);
          c[7] = d;
          c[8] = e;
          c[1] = l ? 8 : 9;
          return T;
        }
        return 8 === d ? (d = c[7], e = Ze, c[9] = d, c[10] = e, c[2] = null, c[1] = 11, T) : 9 === d ? (d = c[7], c[1] = q(d) ? 20 : 21, T) : 10 === d ? (e = c[8], d = J.e(b, c[2], e), c[11] = d, c[2] = null, c[1] = 2, T) : 11 === d ? (e = c[9], d = hd(e), c[1] = d ? 13 : 14, T) : 12 === d ? (d = c[2], c[2] = d, c[1] = 10, T) : 13 === d ? (e = c[10], c[2] = e, c[1] = 15, T) : 14 === d ? (e = c[9], d = B(e), e = A(e), c[12] = d, c[1] = q(e) ? 16 : 17, T) : 15 === d ? (d = c[2], c[2] = d, c[1] = 12, 
        T) : 16 === d ? (e = c[9], d = A(e), lp(c, 19, d)) : 17 === d ? (c[2] = null, c[1] = 18, T) : 18 === d ? (e = c[10], d = c[12], e = Wc.c(e, c[2]), c[9] = d, c[10] = e, c[2] = null, c[1] = 11, T) : 19 === d ? (d = c[2], c[2] = d, c[1] = 18, T) : 20 === d ? (d = c[7], lp(c, 23, d)) : 21 === d ? (c[2] = null, c[1] = 22, T) : 22 === d ? (d = c[2], c[2] = d, c[1] = 10, T) : 23 === d ? (d = c[2], c[2] = d, c[1] = 22, T) : null;
      });
    }(), e = function() {
      var a = d.t ? d.t() : d.call(null);
      a[6] = c;
      return a;
    }();
    return kp(e);
  });
}
function ss(a, b) {
  var c = Np.d(new wp(up(1), 1));
  rs(c, b);
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
        return Pp.c(c, new Q(null, 2, 5, R, [b, d], null));
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
function ts(a) {
  return $m.c("\x26", le.c(function(a) {
    var c = H.e(a, 0, null);
    a = H.e(a, 1, null);
    return[v(Kd(c)), v("\x3d"), v(JSON.stringify(Jg(a)))].join("");
  }, a));
}
var us = config.ni.prefix, vs = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = E(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return J.e(qs, [v("/api/boundarylines/"), v(a), v("/"), v(b)].join(""), e);
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
}(), ws = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return J.e(qs, [v("/api/boundaryline-collection-index/"), v(a)].join(""), b);
  }
  a.m = 1;
  a.j = function(a) {
    var d = A(a);
    a = B(a);
    return b(d, a);
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
    return qs([v("/api/"), v(us), v("/portfolio-company-locations?"), v(ts(a))].join(""));
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
    return qs([v("/api/"), v(us), v("/investment-account-timelines?"), v(ts(a))].join(""));
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
    return qs([v("/api/"), v(us), v("/investment-stats?"), v(ts(a))].join(""));
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
    a = Vf.f(E([new n(null, 2, [pj, 50, tk, new n(null, 1, [wi, "desc"], null)], null), a], 0));
    return qs([v("/api/"), v(us), v("/investment-aggs?"), v(ts(a))].join(""));
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}(), Bs = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = H.e(a, 0, null);
    a = Vf.f(E([new n(null, 2, [pj, 50, tk, new Q(null, 2, 5, R, [new n(null, 1, [yj, "asc"], null), new n(null, 1, [Si, "asc"], null)], null)], null), a], 0));
    return qs([v("/api/"), v(us), v("/investments?"), v(ts(a))].join(""));
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
var Cs = new Q(null, 4, 5, R, [new Q(null, 2, 5, R, [7, 0.01], null), new Q(null, 2, 5, R, [9, 0.002], null), new Q(null, 2, 5, R, [12, 3E-4], null), new Q(null, 2, 5, R, [null, 0], null)], null);
function Ds(a) {
  var b = fe(function(b) {
    var d = H.e(b, 0, null);
    b = H.e(b, 1, null);
    return q(q(d) ? a <= d : d) ? b : null;
  }, Cs);
  return q(b) ? b : 0;
}
function Es(a, b) {
  var c = Ds(a), d = Gd(xe(function(a) {
    return function(b) {
      return b > a;
    };
  }(c), le.c(Vc, Cs))), e = xe(function(a) {
    return function(b) {
      return b < a;
    };
  }(c, d), le.c(Vc, Cs)), f = $f(b), c = I.c(f, c);
  if (q(c)) {
    return c;
  }
  e = fe(f, e);
  return q(e) ? e : fe(f, d);
}
function Fs(a, b, c, d) {
  var e = vs.f(c, d, E([yh, !0], 0));
  b = jd(b) ? b : new Q(null, 1, 5, R, [b], null);
  var f = Yd.c(b, new Q(null, 2, 5, R, [c, d], null)), g = Np.d(1);
  Dp(function() {
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
                    return c[5] = d, op(c), T;
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
          return np(b, g);
        }
        return 1 === c ? lp(b, 2, e) : null;
      });
    }(), c = function() {
      var a = b.t ? b.t() : b.call(null);
      a[6] = g;
      return a;
    }();
    return kp(c);
  });
}
var Gs = function() {
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
    g = Ds(f);
    f = Es(f, Sf(l));
    k = De.c(k, new Q(null, 2, 5, R, [e, f], null));
    ce.c(g, f) && Fs(a, b, e, g);
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
rm("goog.messaging.AbstractChannel");
function Hs(a, b) {
  Or.call(this, b);
  this.hf = a;
  this.Oc = [];
}
var Is;
ta(Hs, Or);
h = Hs.prototype;
h.Td = 0;
h.Xe = !1;
h.ic = 3800;
h.send = function(a, b) {
  var c = a + ":" + b;
  if (!jl || b.length <= this.ic) {
    this.Oc.push("|" + c);
  } else {
    for (var d = b.length, e = Math.ceil(d / this.ic), f = 0, g = 1;f < d;) {
      this.Oc.push("," + g + "/" + e + "|" + c.substr(f, this.ic)), g++, f += this.ic;
    }
  }
  !this.Xe && this.Oc.length && (c = this.Oc.shift(), ++this.Td, this.Si.send(this.Td + c), ap.log(mm, "msg sent: " + this.Td + c, void 0), this.Xe = !0);
};
h.ya = function() {
  Hs.xb.ya.call(this);
  var a = Js;
  Ma(a, this.Jg);
  Ma(a, this.Ze);
  this.Jg = this.Ze = null;
  (a = this.Ig) && a.parentNode && a.parentNode.removeChild(a);
  (a = this.Ye) && a.parentNode && a.parentNode.removeChild(a);
  this.Ig = this.Ye = null;
};
var Js = [], Ks = qa(function() {
  var a = Js, b, c = !1;
  try {
    for (var d = 0;b = a[d];d++) {
      var e;
      if (!(e = c)) {
        var f = b, g = f.fj.location.href;
        if (g != f.Jf) {
          f.Jf = g;
          var k = g.split("#")[1];
          k && (k = k.substr(1), f.qi(decodeURIComponent(k)));
          e = !0;
        } else {
          e = !1;
        }
      }
      c = e;
    }
  } catch (l) {
    if (ap.info("receive_() failed: " + l), b = b.lj.hf, ap.info("Transport Error"), b.close(), !a.length) {
      return;
    }
  }
  a = sa();
  c && (Is = a);
  window.setTimeout(Ks, 1E3 > a - Is ? 10 : 100);
}, Hs);
Be(vf, le.c(function(a) {
  var b = H.e(a, 0, null);
  a = H.e(a, 1, null);
  return new Q(null, 2, 5, R, [Ld.d(b.toLowerCase()), a], null);
}, Vf.f(E([Og.d({Oh:"complete", fi:"success", Ph:"error", Lh:"abort", bi:"ready", ci:"readystatechange", TIMEOUT:"timeout", Rh:"incrementaldata", ai:"progress"})], 0))));
var Ls = function() {
  function a(a, b, c, d, e, f) {
    if (a ? a.pe : a) {
      return a.pe(0, b, c, d, e, f);
    }
    var D;
    D = Ls[m(null == a ? null : a)];
    if (!D && (D = Ls._, !D)) {
      throw u("IConnection.transmit", a);
    }
    return D.call(null, a, b, c, d, e, f);
  }
  function b(a, b, c, d, e) {
    if (a ? a.oe : a) {
      return a.oe(0, b, c, d, e);
    }
    var f;
    f = Ls[m(null == a ? null : a)];
    if (!f && (f = Ls._, !f)) {
      throw u("IConnection.transmit", a);
    }
    return f.call(null, a, b, c, d, e);
  }
  function c(a, b, c, d) {
    if (a ? a.ne : a) {
      return a.ne(0, b, c, d);
    }
    var e;
    e = Ls[m(null == a ? null : a)];
    if (!e && (e = Ls._, !e)) {
      throw u("IConnection.transmit", a);
    }
    return e.call(null, a, b, c, d);
  }
  function d(a, b, c) {
    if (a ? a.me : a) {
      return a.me(0, b, c);
    }
    var d;
    d = Ls[m(null == a ? null : a)];
    if (!d && (d = Ls._, !d)) {
      throw u("IConnection.transmit", a);
    }
    return d.call(null, a, b, c);
  }
  function e(a, b) {
    if (a ? a.le : a) {
      return a.le(0, b);
    }
    var c;
    c = Ls[m(null == a ? null : a)];
    if (!c && (c = Ls._, !c)) {
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
h = zm.prototype;
h.le = function(a, b) {
  return Ls.ta(this, b, "GET", null, null, 1E4);
};
h.me = function(a, b, c) {
  return Ls.ta(this, b, c, null, null, 1E4);
};
h.ne = function(a, b, c, d) {
  return Ls.ta(this, b, c, d, null, 1E4);
};
h.oe = function(a, b, c, d, e) {
  return Ls.ta(this, b, c, d, e, 1E4);
};
h.pe = function(a, b, c, d, e, f) {
  this.gc = Math.max(0, f);
  return this.send(b, c, d, e);
};
Be(vf, le.c(function(a) {
  var b = H.e(a, 0, null);
  a = H.e(a, 1, null);
  return new Q(null, 2, 5, R, [Ld.d(b.toLowerCase()), a], null);
}, Og.d({Nh:"cn", Mh:"at", di:"rat", $h:"pu", Qh:"ifrid", gi:"tp", Th:"lru", Zh:"pru", Sh:"lpu", Yh:"ppu", Xh:"ph", Wh:"osh", ei:"role", Vh:"nativeProtocolVersion"})));
Bg.d(null);
Bg.d(0);
function Ms(a) {
  var b = function() {
    var a = window, a = null == a ? null : a.Gf, a = null == a ? null : a.nj;
    return null == a ? null : a.code;
  }();
  q(function() {
    var a = window.Hi;
    return q(a) ? b : a;
  }()) && ga("send", "pageview", a);
}
;var Ns = new n(null, 3, [hi, qi, yk, qi, Oh, Kk], null), Os = new n(null, 4, [hi, function(a, b) {
  return[v("#/"), v(Kd(a)), v("/portfolio-company/"), v(mh.d(b))].join("");
}, yk, function(a, b) {
  return[v("#/"), v(Kd(a)), v("/investor-company/"), v(Vi.d(b))].join("");
}, Oh, function(a, b) {
  return[v("#/"), v(Kd(a)), v("/constituency/"), v(Ph.d(b))].join("");
}, null, function(a) {
  return[v("#/"), v(Kd(a))].join("");
}], null);
function Ps(a, b, c) {
  return J.c(I.c(Os, b), new Q(null, 2, 5, R, [a, c], null));
}
function Qs(a, b, c) {
  return React.DOM.a({href:Ps(a, b, c)}, V(I.c(c, I.c(Ns, b))));
}
;var Rs;
function Ss(a, b) {
  if (a ? a.Nc : a) {
    return a.Nc(a, b);
  }
  var c;
  c = Ss[m(null == a ? null : a)];
  if (!c && (c = Ss._, !c)) {
    throw u("IRouteMatches.route-matches", a);
  }
  return c.call(null, a, b);
}
var Ts = function() {
  function a(a, b) {
    if (a ? a.xh : a) {
      return a.xh(a, b);
    }
    var c;
    c = Ts[m(null == a ? null : a)];
    if (!c && (c = Ts._, !c)) {
      throw u("IRenderRoute.render-route", a);
    }
    return c.call(null, a, b);
  }
  function b(a) {
    if (a ? a.wh : a) {
      return a.wh(a);
    }
    var b;
    b = Ts[m(null == a ? null : a)];
    if (!b && (b = Ts._, !b)) {
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
}(), Us = Bg.d(new n(null, 1, [ei, ""], null));
function Vs() {
  var a = new Q(null, 1, 5, R, [ei], null), a = jd(a) ? a : new Q(null, 1, 5, R, [a], null);
  return De.c(Vb(Us), a);
}
var Ws = encodeURIComponent, Xs = decodeURIComponent;
function Ys(a) {
  return $m.c("\x26", le.c(function(a) {
    var c = H.e(a, 0, null);
    a = H.e(a, 1, null);
    return[v(Kd(c)), v("\x3d"), v(Ws.d ? Ws.d(a instanceof P ? Kd(a) : "" + v(a)) : Ws.call(null, a instanceof P ? Kd(a) : "" + v(a)))].join("");
  }, a));
}
function Zs(a) {
  return ob.e(function(a, c) {
    var d = en.e(c, /=/, 2), e = H.e(d, 0, null), d = H.e(d, 1, null), d = Xs.d ? Xs.d(d) : Xs.call(null, d);
    return $c.e(a, e, d);
  }, vf, en.c(a, /&/));
}
function $s(a) {
  return $m.c("/", le.c(Ws, en.c(a, /\//)));
}
function at(a, b) {
  var c = jg(a, b);
  return q(c) ? jd(c) ? c : new Q(null, 2, 5, R, [c, c], null) : null;
}
var bt = $f("\\.*+|?()[]{}$^");
function ct(a) {
  return ob.e(function(a, c) {
    return q(bt.d ? bt.d(c) : bt.call(null, c)) ? [v(a), v("\\"), v(c)].join("") : [v(a), v(c)].join("");
  }, "", a);
}
function dt(a, b) {
  return fe(function(b) {
    var d = H.e(b, 0, null);
    b = H.e(b, 1, null);
    var e = kg(d, a);
    return q(e) ? (d = H.e(e, 0, null), e = H.e(e, 1, null), new Q(null, 2, 5, R, [Ad.c(a, G(d)), b.d ? b.d(e) : b.call(null, e)], null)) : null;
  }, b);
}
function et(a, b) {
  for (var c = a, d = "", e = Ze;;) {
    if (z(c)) {
      var f = dt(c, b), c = H.e(f, 0, null), g = H.e(f, 1, null), f = H.e(g, 0, null), g = H.e(g, 1, null), d = [v(d), v(f)].join(""), e = Wc.c(e, g)
    } else {
      return new Q(null, 2, 5, R, [lg([v("^"), v(d), v("$")].join("")), ye(ib, e)], null);
    }
  }
}
var gt = function ft(b) {
  var c = new Q(null, 3, 5, R, [new Q(null, 2, 5, R, [/^\*([^\s.:*\/]*)/, function(b) {
    b = z(b) ? Ld.d(b) : eh;
    return new Q(null, 2, 5, R, ["(.*?)", b], null);
  }], null), new Q(null, 2, 5, R, [/^\:([^\s.:*\/]+)/, function(b) {
    b = Ld.d(b);
    return new Q(null, 2, 5, R, ["([^,;?/]+)", b], null);
  }], null), new Q(null, 2, 5, R, [/^([^:*]+)/, function(b) {
    b = ct(b);
    return new Q(null, 1, 5, R, [b], null);
  }], null)], null), d = et(b, c), e = H.e(d, 0, null), f = H.e(d, 1, null);
  "undefined" === typeof Rs && (Rs = function(b, c, d, e, f, w, D) {
    this.Oe = b;
    this.Qe = c;
    this.Hh = d;
    this.kf = e;
    this.rh = f;
    this.Ff = w;
    this.Fg = D;
    this.r = 0;
    this.k = 393216;
  }, Rs.R = !0, Rs.Q = "secretary.core/t38506", Rs.U = function(b, c) {
    return jc(c, "secretary.core/t38506");
  }, Rs.prototype.Nc = function(b, c) {
    var d = at(this.Qe, c);
    return q(d) ? (H.e(d, 0, null), d = zd(d), Wf.f(bf, E([vf, Ce.c(2, se.c(this.Oe, le.c(Xs, d)))], 0))) : null;
  }, Rs.prototype.A = function() {
    return this.Fg;
  }, Rs.prototype.B = function(b, c) {
    return new Rs(this.Oe, this.Qe, this.Hh, this.kf, this.rh, this.Ff, c);
  });
  return new Rs(f, e, d, c, b, ft, null);
}, ht = Bg.d(Ze);
function it(a, b) {
  var c = "string" === typeof a ? gt(a) : a;
  Dg.e(ht, Wc, new Q(null, 2, 5, R, [c, b], null));
}
function jt(a) {
  return fe(function(b) {
    var c = H.e(b, 0, null);
    b = H.e(b, 1, null);
    var d = Ss(c, a);
    return q(d) ? new Q(null, 2, 5, R, [b, Ss(c, a)], null) : null;
  }, Vb(ht));
}
RegExp.prototype.Nc = function(a, b) {
  var c = at(this, b);
  return q(c) ? (H.e(c, 0, null), c = zd(c), af(c)) : null;
};
Ss.string = function(a, b) {
  return gt(a).Nc(null, b);
};
Ts.string = function(a) {
  return Ts.c(a, vf);
};
Ts.string = function(a, b) {
  var c = N(b) ? J.c(S, b) : b, d = I.c(c, $g), e = Bg.d(c), c = a.replace(RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*", "g"), function(a, b, c, d, e) {
    return function(a) {
      var b = Ld.d(x.c(a, "*") ? a : Ad.c(a, 1)), c = Vb(e).call(null, b);
      jd(c) ? (Dg.o(e, $c, b, C(c)), a = $s(A(c))) : a = q(c) ? $s(c) : a;
      return a;
    };
  }(b, c, c, d, e)), c = [v(Vs()), v(c)].join(""), d = q(d) ? Ys(d) : d;
  return q(d) ? [v(c), v("?"), v(d)].join("") : c;
};
function kt(a, b) {
  if (q(x.c ? x.c(hi, a) : x.call(null, hi, a))) {
    return mh.d(b);
  }
  if (q(x.c ? x.c(yk, a) : x.call(null, yk, a))) {
    return Vi.d(b);
  }
  if (q(x.c ? x.c(Oh, a) : x.call(null, Oh, a))) {
    return Ph.d(b);
  }
  throw Error([v("No matching clause: "), v(a)].join(""));
}
;var lt, mt, ot = function nt(b, c, d) {
  var e = N(b) ? J.c(S, b) : b, f = I.c(e, Mj), g = I.c(e, qi), k = N(d) ? J.c(S, d) : d, l = I.c(k, Rk), p = I.c(k, mi);
  "undefined" === typeof lt && (lt = function(b, c, d, e, f, g, k, l, p, gb, hb, qb, Yc) {
    this.pa = b;
    this.jh = c;
    this.dg = d;
    this.D = e;
    this.eg = f;
    this.kh = g;
    this.name = k;
    this.v = l;
    this.Rd = p;
    this.w = gb;
    this.type = hb;
    this.vh = qb;
    this.yg = Yc;
    this.r = 0;
    this.k = 393216;
  }, lt.R = !0, lt.Q = "clustermap.components.search/t34451", lt.U = function(b, c) {
    return jc(c, "clustermap.components.search/t34451");
  }, lt.prototype.Je = !0, lt.prototype.Nd = function(b, c) {
    var d = this, e = N(c) ? J.c(S, c) : c, e = I.c(e, Gk), f = d.D.c ? d.D.c(d.type, d.Rd) : d.D.call(null, d.type, d.Rd);
    return React.DOM.li({className:q(e) ? "selected" : null}, React.DOM.a({href:f, ref:"link", onClick:function() {
      var b = Go.c(d.w, "link"), b = null == b ? null : xr.d(b), b = null == b ? null : b.dj(".search-component");
      return null == b ? null : b.toggle();
    }}, V(d.name)));
  }, lt.prototype.A = function() {
    return this.yg;
  }, lt.prototype.B = function(b, c) {
    return new lt(this.pa, this.jh, this.dg, this.D, this.eg, this.kh, this.name, this.v, this.Rd, this.w, this.type, this.vh, c);
  });
  return new lt(k, b, e, l, k, d, g, p, e, c, f, nt, null);
};
function pt(a, b) {
  var c = N(a) ? J.c(S, a) : a, d = I.c(c, wk), e = I.c(c, Vk), c = I.c(c, ej), f = q(c) ? c : Ze, e = q(e) ? e : Ze, d = q(d) ? d : Ze;
  return b < G(f) ? new Q(null, 2, 5, R, [Oh, I.c(c, b)], null) : b < G(f) + G(e) ? new Q(null, 2, 5, R, [hi, I.c(e, b - G(f))], null) : new Q(null, 2, 5, R, [yk, I.c(d, b - G(f) - G(e))], null);
}
function qt(a, b, c, d) {
  a = a.keyCode;
  if (q(yd.c ? yd.c(27, a) : yd.call(null, 27, a))) {
    return d = Go.c(c, "search-component"), d = null == d ? null : xr.d(d), null == d ? null : d.toggle();
  }
  if (q(yd.c ? yd.c(13, a) : yd.call(null, 13, a))) {
    a = pt(Vb(b), function() {
      var a = lo.c(c, si);
      return q(a) ? a : 0;
    }());
    b = H.e(a, 0, null);
    a = H.e(a, 1, null);
    var e = Go.c(c, "search-component"), e = null == e ? null : xr.d(e);
    null == e || e.toggle();
    return Pp.c(d, new Q(null, 2, 5, R, [Hk, new Q(null, 2, 5, R, [b, kt(b, a)], null)], null));
  }
  return q(yd.c ? yd.c(38, a) : yd.call(null, 38, a)) ? Ho(c, si, function() {
    var a = lo.c(c, si);
    return q(a) ? a : 0;
  }() - 1) : q(yd.c ? yd.c(40, a) : yd.call(null, 40, a)) ? Ho(c, si, function() {
    var a = lo.c(c, si);
    return q(a) ? a : 0;
  }() + 1) : null;
}
var st = function rt(b, c) {
  var d = N(b) ? J.c(S, b) : b, e = I.c(d, oi), e = N(e) ? J.c(S, e) : e, f = I.c(e, Mj), g = I.c(e, Fk), k = I.c(d, Ug), l = I.c(d, Kj), p = mo.d(c), p = N(p) ? J.c(S, p) : p, t = I.c(p, Rk), w = I.c(p, mi), t = ke.c(t, k), D = N(l) ? J.c(S, l) : l, K = I.c(D, wk), O = I.c(D, Vk), Z = I.c(D, ej);
  "undefined" === typeof mt && (mt = function(b, c, d, e, f, g, k, l, p, w, t, D, K, O, Z, Jh, Kh) {
    this.Ed = b;
    this.Ah = c;
    this.D = d;
    this.Pd = e;
    this.view = f;
    this.uh = g;
    this.lh = k;
    this.hg = l;
    this.gg = p;
    this.v = w;
    this.zh = t;
    this.w = D;
    this.pd = K;
    this.fg = O;
    this.ig = Z;
    this.Se = Jh;
    this.zg = Kh;
    this.r = 0;
    this.k = 393216;
  }, mt.R = !0, mt.Q = "clustermap.components.search/t34511", mt.U = function(b, c) {
    return jc(c, "clustermap.components.search/t34511");
  }, mt.prototype.Je = !0, mt.prototype.Nd = function(b, c) {
    var d = this;
    return React.DOM.div({ref:"search-component", className:"search-component", id:"search", onKeyDown:function(b) {
      return qt(b, d.Se, d.w, d.v);
    }}, React.DOM.div({className:"tbl"}, React.DOM.div({className:"tbl-cell", style:{width:"100%"}}, sn.d ? sn.d({ref:"search-field", type:"text", placeholder:"Search", onChange:function(b) {
      return Pp.c(d.v, new Q(null, 2, 5, R, [vh, b.target.value], null));
    }}) : sn.call(null, {ref:"search-field", type:"text", placeholder:"Search", onChange:function(b) {
      return Pp.c(d.v, new Q(null, 2, 5, R, [vh, b.target.value], null));
    }})), React.DOM.div({className:"tbl-cell", style:{width:"34"}}, React.DOM.button({type:"reset", onClick:function() {
      Pp.c(d.v, new Q(null, 2, 5, R, [vh, ""], null));
      return Go.c(d.w, "search-field").value = "";
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
      ce.c(g, si.d(c)) && Ho(d.w, si, g);
      return new Q(null, 3, 5, R, [Gh, new n(null, 1, [bi, "search-results"], null), new Q(null, 4, 5, R, [hh, q(de(b)) ? Be(new Q(null, 2, 5, R, [Gh, new Q(null, 3, 5, R, [Ok, new n(null, 1, [bi, "search-results-header"], null), "Constituencies"], null)], null), function() {
        return function Bb(b) {
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
                        var p = Ab.c(f, b), w = H.e(p, 0, null), t = H.e(p, 1, null);
                        Ud(l, Bo.e(ot, t, new n(null, 4, [jk, new n(null, 2, [mi, d.v, Rk, d.D], null), Fh, new n(null, 1, [Gk, x.c(w, g)], null), Ck, function() {
                          return function(b) {
                            return $c.f(b, Mj, Oh, E([Dk, I.c(b, Ph), Lj, [v("constituency:"), v(I.c(b, Ph))].join("")], 0));
                          };
                        }(b, p, w, t, f, k, l, e, c), ai, Lj], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.aa(), Bb(wc(e))) : Td(l.aa(), null);
                }
                var p = A(e), w = H.e(p, 0, null), t = H.e(p, 1, null);
                return F(Bo.e(ot, t, new n(null, 4, [jk, new n(null, 2, [mi, d.v, Rk, d.D], null), Fh, new n(null, 1, [Gk, x.c(w, g)], null), Ck, function() {
                  return function(b) {
                    return $c.f(b, Mj, Oh, E([Dk, I.c(b, Ph), Lj, [v("constituency:"), v(I.c(b, Ph))].join("")], 0));
                  };
                }(p, w, t, e, c), ai, Lj], null)), Bb(B(e)));
              }
              return null;
            }
          }, null, null);
        }(b);
      }()) : null, q(de(e)) ? Be(new Q(null, 2, 5, R, [Gh, new Q(null, 3, 5, R, [Ok, new n(null, 1, [bi, "search-results-header"], null), "Investor-backed companies"], null)], null), function() {
        return function Bb(b) {
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
                        var p = Ab.c(f, b), w = H.e(p, 0, null), t = H.e(p, 1, null);
                        Ud(l, Bo.e(ot, t, new n(null, 4, [jk, new n(null, 2, [mi, d.v, Rk, d.D], null), Fh, new n(null, 1, [Gk, x.c(w, g)], null), Ck, function() {
                          return function(b) {
                            return $c.f(b, Mj, hi, E([Dk, I.c(b, mh), Lj, [v("portfolio-company:"), v(I.c(b, mh))].join("")], 0));
                          };
                        }(b, p, w, t, f, k, l, e, c), ai, Lj], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.aa(), Bb(wc(e))) : Td(l.aa(), null);
                }
                var p = A(e), w = H.e(p, 0, null), t = H.e(p, 1, null);
                return F(Bo.e(ot, t, new n(null, 4, [jk, new n(null, 2, [mi, d.v, Rk, d.D], null), Fh, new n(null, 1, [Gk, x.c(w, g)], null), Ck, function() {
                  return function(b) {
                    return $c.f(b, Mj, hi, E([Dk, I.c(b, mh), Lj, [v("portfolio-company:"), v(I.c(b, mh))].join("")], 0));
                  };
                }(p, w, t, e, c), ai, Lj], null)), Bb(B(e)));
              }
              return null;
            }
          }, null, null);
        }(e);
      }()) : null, q(de(f)) ? Be(new Q(null, 2, 5, R, [Gh, new Q(null, 3, 5, R, [Ok, new n(null, 1, [bi, "search-results-header"], null), "Investors"], null)], null), function() {
        return function Bb(b) {
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
                        var p = Ab.c(f, b), w = H.e(p, 0, null), t = H.e(p, 1, null);
                        Ud(l, Bo.e(ot, t, new n(null, 4, [jk, new n(null, 2, [mi, d.v, Rk, d.D], null), Fh, new n(null, 1, [Gk, x.c(w, g)], null), Ck, function() {
                          return function(b) {
                            return $c.f(b, Mj, yk, E([Dk, I.c(b, Vi), Lj, [v("investor-company:"), v(I.c(b, Vi))].join("")], 0));
                          };
                        }(b, p, w, t, f, k, l, e, c), ai, Lj], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.aa(), Bb(wc(e))) : Td(l.aa(), null);
                }
                var p = A(e), w = H.e(p, 0, null), t = H.e(p, 1, null);
                return F(Bo.e(ot, t, new n(null, 4, [jk, new n(null, 2, [mi, d.v, Rk, d.D], null), Fh, new n(null, 1, [Gk, x.c(w, g)], null), Ck, function() {
                  return function(b) {
                    return $c.f(b, Mj, yk, E([Dk, I.c(b, Vi), Lj, [v("investor-company:"), v(I.c(b, Vi))].join("")], 0));
                  };
                }(p, w, t, e, c), ai, Lj], null)), Bb(B(e)));
              }
              return null;
            }
          }, null, null);
        }(f);
      }()) : null], null)], null);
    }() : null));
  }, mt.prototype.A = function() {
    return this.zg;
  }, mt.prototype.B = function(b, c) {
    return new mt(this.Ed, this.Ah, this.D, this.Pd, this.view, this.uh, this.lh, this.hg, this.gg, this.v, this.zh, this.w, this.pd, this.fg, this.ig, this.Se, c);
  });
  return new mt(K, g, t, O, k, rt, b, p, e, w, f, c, Z, d, D, l, null);
};
var tt;
function ut(a) {
  if (a ? a.vd : a) {
    return a.vd(a);
  }
  var b;
  b = ut[m(null == a ? null : a)];
  if (!b && (b = ut._, !b)) {
    throw u("Event.prevent-default", a);
  }
  return b.call(null, a);
}
function vt(a) {
  if (a ? a.se : a) {
    return a.Ja.target;
  }
  var b;
  b = vt[m(null == a ? null : a)];
  if (!b && (b = vt._, !b)) {
    throw u("Event.target", a);
  }
  return b.call(null, a);
}
var wt = window.document.documentElement, yt = function xt(b) {
  return function(c) {
    b.d ? b.d(function() {
      "undefined" === typeof tt && (tt = function(b, c, f, g) {
        this.Ja = b;
        this.Ka = c;
        this.qd = f;
        this.Id = g;
        this.r = 0;
        this.k = 393472;
      }, tt.R = !0, tt.Q = "domina.events/t39101", tt.U = function(b, c) {
        return jc(c, "domina.events/t39101");
      }, tt.prototype.L = function(b, c) {
        var f = this.Ja[c];
        return q(f) ? f : this.Ja[Kd(c)];
      }, tt.prototype.M = function(b, c, f) {
        b = Hb.c(this, c);
        return q(b) ? b : f;
      }, tt.prototype.vd = function() {
        return this.Ja.preventDefault();
      }, tt.prototype.se = function() {
        return this.Ja.target;
      }, tt.prototype.A = function() {
        return this.Id;
      }, tt.prototype.B = function(b, c) {
        return new tt(this.Ja, this.Ka, this.qd, c);
      });
      return new tt(c, b, xt, null);
    }()) : b.call(null, function() {
      "undefined" === typeof tt && (tt = function(b, c, f, g) {
        this.Ja = b;
        this.Ka = c;
        this.qd = f;
        this.Id = g;
        this.r = 0;
        this.k = 393472;
      }, tt.R = !0, tt.Q = "domina.events/t39101", tt.U = function(b, c) {
        return jc(c, "domina.events/t39101");
      }, tt.prototype.L = function(b, c) {
        var f = this.Ja[c];
        return q(f) ? f : this.Ja[Kd(c)];
      }, tt.prototype.M = function(b, c, f) {
        b = Hb.c(this, c);
        return q(b) ? b : f;
      }, tt.prototype.vd = function() {
        return this.Ja.preventDefault();
      }, tt.prototype.se = function() {
        return this.Ja.target;
      }, tt.prototype.A = function() {
        return this.Id;
      }, tt.prototype.B = function(b, c) {
        return new tt(this.Ja, this.Ka, this.qd, c);
      });
      return new tt(c, b, xt, null);
    }());
    return!0;
  };
};
function zt(a, b, c) {
  var d = yt(c), e = Kd(b);
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
                    var K = Ab.c(c, D), K = q(!1) ? Ml(K, e, d, !1) : Il(K, e, d, !1);
                    w.add(K);
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
            return F(q(!1) ? Ml(w, e, d, !1) : Il(w, e, d, !1), g(B(b)));
          }
          return null;
        }
      }, null, null);
    }(cs(a));
  }());
}
var At = function() {
  function a(a, d) {
    return b.e(wt, a, d);
  }
  var b = null, b = function(b, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, d);
      case 3:
        return zt(b, d, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = a;
  b.e = function(a, b, e) {
    return zt(a, b, e);
  };
  return b;
}();
function Bt() {
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
var Ct = function() {
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
    Yc = c.contentType && "application/xml" == c.contentType || il && (c.doctype || "[object XMLDocument]" == e.toString()) || !!e && (jl ? e.xml : c.xmlVersion || e.xmlVersion);
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
    he++;
    if (jl && Yc) {
      var c = he + "";
      a[0].setAttribute("_zipIdx", c);
      for (var d = 1, e;e = a[d];d++) {
        a[d].getAttribute("_zipIdx") != c && b.push(e), e.setAttribute("_zipIdx", c);
      }
    } else {
      if (jl && a.Cf) {
        try {
          for (d = 1;e = a[d];d++) {
            U(e) && b.push(e);
          }
        } catch (f) {
        }
      } else {
        for (a[0] && (a[0]._zipIdx = he), d = 1;e = a[d];d++) {
          a[d]._zipIdx != he && b.push(e), e._zipIdx = he;
        }
      }
    }
    return b;
  }
  function c(a, b) {
    if (!b) {
      return 1;
    }
    var c = du(a);
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
    if (!qp || b || -1 != "\x3e~+".indexOf(c) || jl && -1 != a.indexOf(":") || hb && 0 <= a.indexOf(".") || -1 != a.indexOf(":contains") || -1 != a.indexOf("|\x3d")) {
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
        jl ? c.Cf = !0 : c.Dc = !0;
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
    var b = Km[a.Qb];
    if (b) {
      return b;
    }
    var c = a.ze, c = c ? c.Hc : "", d = p(a, {Hb:1}), e = "*" == a.Ga, f = document.getElementsByClassName;
    if (c) {
      f = {Hb:1}, e && (f.Ga = 1), d = p(a, f), "+" == c ? b = l(d) : "~" == c ? b = k(d) : "\x3e" == c && (b = g(d));
    } else {
      if (a.id) {
        d = !a.Ee && e ? Bt : p(a, {Hb:1, id:1}), b = function(b, c) {
          var e;
          e = b ? new Ym(Xm(b)) : Nm || (Nm = new Ym);
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
          var d = p(a, {Hb:1, Va:1, id:1}), w = a.Va.join(" "), b = function(a, b) {
            for (var c = gb(0, b), e, f = 0, g = a.getElementsByClassName(w);e = g[f++];) {
              d(e, a) && c.push(e);
            }
            return c;
          }
        } else {
          e || a.Ee ? (d = p(a, {Hb:1, Ga:1, id:1}), b = function(b, c) {
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
    return Km[a.Qb] = b;
  }
  function g(a) {
    a = a || Bt;
    return function(b, d, e) {
      for (var f = 0, g = b[qb];b = g[f++];) {
        hg(b) && (!e || c(b, e)) && a(b, f) && d.push(b);
      }
      return d;
    };
  }
  function k(a) {
    return function(b, d, e) {
      for (b = b[Fe];b;) {
        if (hg(b)) {
          if (e && !c(b, e)) {
            break;
          }
          a(b) && d.push(b);
        }
        b = b[Fe];
      }
      return d;
    };
  }
  function l(a) {
    return function(b, d, e) {
      for (;b = b[Fe];) {
        if (!Bb || U(b)) {
          e && !c(b, e) || !a(b) || d.push(b);
          break;
        }
      }
      return d;
    };
  }
  function p(a, b) {
    if (!a) {
      return Bt;
    }
    b = b || {};
    var c = null;
    b.Hb || (c = aa(c, U));
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
    b.ub || Ja(a.ub, function(a) {
      var b = a.name;
      Oj[b] && (c = aa(c, Oj[b](b, a.value)));
    });
    b.jc || Ja(a.jc, function(a) {
      var b, d = a.Rc;
      a.type && mf[a.type] ? b = mf[a.type](d, a.Hd) : d.length && (b = Cq(d));
      b && (c = aa(c, b));
    });
    b.id || a.id && (c = aa(c, function(b) {
      return!!b && b.id == a.id;
    }));
    c || "default" in b || (c = Bt);
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
    for (b = b.firstElementChild || b.firstChild;b;b = b[Fe]) {
      hg(b) && (b._i = ++c, a === b && (e = c));
    }
    return e;
  }
  function K(a) {
    for (;a = a[Fe];) {
      if (hg(a)) {
        return!1;
      }
    }
    return!0;
  }
  function O(a) {
    for (;a = a[Bq];) {
      if (hg(a)) {
        return!1;
      }
    }
    return!0;
  }
  function Z(a, b) {
    return a ? "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (Yc ? a.getAttribute(b) : a.getAttribute(b, 2)) || "" : "";
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
    for (var d = [], e = -1, f = -1, g = -1, k = -1, l = -1, p = -1, w = -1, t = "", D = "", K, O = 0, Z = a.length, U = null, aa = null;t = D, D = a.charAt(O), O < Z;O++) {
      "\\" != t && (U || (K = O, U = {Qb:null, ub:[], jc:[], Va:[], Ga:null, Hc:null, id:null, Ad:function() {
        return Yc ? this.bh : this.Ga;
      }}, w = O), 0 <= e ? "]" == D ? (aa.Rc ? aa.Hd = c(g || e + 1, O) : aa.Rc = c(e + 1, O), !(e = aa.Hd) || '"' != e.charAt(0) && "'" != e.charAt(0) || (aa.Hd = e.slice(1, -1)), U.jc.push(aa), aa = null, e = g = -1) : "\x3d" == D && (g = 0 <= "|~^$*".indexOf(t) ? t : "", aa.type = g + D, aa.Rc = c(e + 1, O - g.length), g = O + 1) : 0 <= f ? ")" == D && (0 <= k && (aa.value = c(f + 1, O)), k = f = -1) : "#" == D ? (b(), p = O + 1) : "." == D ? (b(), l = O) : ":" == D ? (b(), k = O) : "[" == D ? 
      (b(), e = O, aa = {}) : "(" == D ? (0 <= k && (aa = {name:c(k + 1, O), value:null}, U.ub.push(aa)), f = O) : " " == D && t != D && (b(), 0 <= k && U.ub.push({name:c(k + 1, O)}), U.Ee = U.ub.length || U.jc.length || U.Va.length, U.cj = U.Qb = c(K, O), U.bh = U.Ga = U.Hc ? null : U.Ga || "*", U.Ga && (U.Ga = U.Ga.toUpperCase()), d.length && d[d.length - 1].Hc && (U.ze = d.pop(), U.Qb = U.ze.Qb + " " + U.Qb), d.push(U), U = null));
    }
    return d;
  }
  function gb(a, b) {
    var c = b || [];
    a && c.push(a);
    return c;
  }
  var hb = ll && "BackCompat" == document.compatMode, qb = document.firstChild.children ? "children" : "childNodes", Yc = !1, mf = {"*\x3d":function(a, b) {
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
  }}, Bb = "undefined" == typeof document.firstChild.nextElementSibling, Fe = Bb ? "nextSibling" : "nextElementSibling", Bq = Bb ? "previousSibling" : "previousElementSibling", hg = Bb ? U : Bt, Oj = {checked:function() {
    return function(a) {
      return a.checked || a.attributes.checked;
    };
  }, "first-child":function() {
    return O;
  }, "last-child":function() {
    return K;
  }, "only-child":function() {
    return function(a) {
      return O(a) && K(a) ? !0 : !1;
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
    var c = Ia(b)[0], d = {Hb:1};
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
  }}, Cq = jl ? function(a) {
    var b = a.toLowerCase();
    "class" == b && (a = "className");
    return function(c) {
      return Yc ? c.getAttribute(a) : c[a] || c[b];
    };
  } : function(a) {
    return function(b) {
      return b && b.getAttribute && b.hasAttribute(a);
    };
  }, Km = {}, Jh = {}, Kh = {}, qp = !!document.querySelectorAll && (!ll || ul("526")), he = 0, du = jl ? function(a) {
    return Yc ? a.getAttribute("_uid") || a.setAttribute("_uid", ++he) || he : a.uniqueID;
  } : function(a) {
    return a._uid || (a._uid = ++he);
  };
  a.ub = Oj;
  return a;
}();
da("goog.dom.query", Ct);
da("goog.dom.query.pseudos", Ct.ub);
var Dt, Et = function() {
  function a(a, b) {
    "undefined" === typeof Dt && (Dt = function(a, b, c, d) {
      this.qb = a;
      this.hb = b;
      this.yh = c;
      this.Hg = d;
      this.r = 0;
      this.k = 393216;
    }, Dt.R = !0, Dt.Q = "domina.css/t39744", Dt.U = function(a, b) {
      return jc(b, "domina.css/t39744");
    }, Dt.prototype.Fb = function() {
      var a = this;
      return ve.c(function(b) {
        return ks(Ct(a.qb, b));
      }, cs(a.hb));
    }, Dt.prototype.ud = function() {
      var a = this;
      return A(xe(ie(ib), ve.c(function(b) {
        return ks(Ct(a.qb, b));
      }, cs(a.hb))));
    }, Dt.prototype.A = function() {
      return this.Hg;
    }, Dt.prototype.B = function(a, b) {
      return new Dt(this.qb, this.hb, this.yh, b);
    });
    return new Dt(b, a, c, null);
  }
  function b(a) {
    return c.c(Um()[0], a);
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
function Ft() {
  At.e(Et.d("#nav .search \x3e a"), Ci, function(a) {
    var b = vt(a), b = ps.c(b, "..");
    ut(a);
    a = z(cs(b));
    for (var b = null, c = 0, d = 0;;) {
      if (d < c) {
        var e = b.C(null, d);
        Tm(e);
        d += 1;
      } else {
        if (a = z(a)) {
          b = a, ld(b) ? (a = vc(b), d = wc(b), b = a, c = G(a), a = d) : (a = A(b), Tm(a), a = C(b), b = null, c = 0), d = 0;
        } else {
          break;
        }
      }
    }
    return xr.d(A(Et.d("#search").Fb(null))).toggle();
  });
}
function Gt() {
  At.e(Et.d("#map-report \x3e a"), Ci, function(a) {
    vt(a);
    var b = Et.d("#map-report");
    ut(a);
    a = ds(b);
    a = La(Pm(a), "open");
    if (q(a)) {
      return fs(b, "open"), xr.d(A(b.Fb(null))).cf(Jg(new n(null, 1, ["right", "-270px"], null)), 400);
    }
    es(b, "open");
    return xr.d(A(b.Fb(null))).cf(Jg(new n(null, 1, ["right", "0px"], null)), 400);
  });
}
var Ht = new n(null, 2, ["map", "view-map", "lists", "view-lists"], null);
function It(a) {
  for (var b = z(Ht), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.C(null, e), g = H.e(f, 0, null), k = H.e(f, 1, null);
      At.e(Et.d([v("#nav ."), v(g), v(" \x3e a")].join("")), Ci, function(b, c, d, e, f, g) {
        return function(b) {
          ut(b);
          return Pp.c(a, new Q(null, 2, 5, R, [Bk, g], null));
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
          At.e(Et.d([v("#nav ."), v(g), v(" \x3e a")].join("")), Ci, function(b, c, d, e, f, g) {
            return function(b) {
              ut(b);
              return Pp.c(a, new Q(null, 2, 5, R, [Bk, g], null));
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
function Jt(a) {
  xr.d("[data-toggle\x3d'tooltip']").Fh();
  Ft();
  Gt();
  It(a);
}
;var Kt = function() {
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
var Lt, Mt, Nt, Ot;
function Pt(a) {
  return React.DOM.button({className:"btn", type:"button", onClick:function() {
    return Pp.c(a, new Q(null, 2, 5, R, [Bk, "lists"], null));
  }}, React.DOM.i({className:"icon-lists-sm"}), "Full report");
}
function Qt(a) {
  return new n(null, 3, [Ai, null == a ? null : ah.d(a), Gj, null == a ? null : Mi.d(a), Tg, null == a ? null : mj.d(a)], null);
}
var St = function Rt(b, c) {
  var d = Qt(b), d = N(d) ? J.c(S, d) : d, e = I.c(d, Tg), f = I.c(d, Gj), g = I.c(d, Ai);
  "undefined" === typeof Lt && (Lt = function(b, c, d, e, f, g, K, O) {
    this.qa = b;
    this.na = c;
    this.ha = d;
    this.Yf = e;
    this.v = f;
    this.X = g;
    this.bf = K;
    this.tg = O;
    this.r = 0;
    this.k = 393216;
  }, Lt.R = !0, Lt.Q = "clustermap.components.map-report/t34212", Lt.U = function(b, c) {
    return jc(c, "clustermap.components.map-report/t34212");
  }, Lt.prototype.Ea = !0, Lt.prototype.Aa = function() {
    var b = this;
    return React.DOM.div(null, React.DOM.header({className:"secondary"}, React.DOM.h2(null, "All investor-backed companies"), React.DOM.h3(null, "UK wide")), React.DOM.ul(null, function() {
      var c = Y.e ? Y.e(b.qa, y, "-") : Y.call(null, b.qa, y, "-");
      return M(c) ? React.DOM.li(W(c), React.DOM.small(null, "Investor-backed companies")) : React.DOM.li(null, V(c), React.DOM.small(null, "Investor-backed companies"));
    }(), function() {
      var c = Y.e ? Y.e(b.na, y, "-") : Y.call(null, b.na, y, "-");
      return M(c) ? React.DOM.li(W(c), React.DOM.small(null, "Investors")) : React.DOM.li(null, V(c), React.DOM.small(null, "Investors"));
    }(), function() {
      var c = Y.e ? Y.e(b.ha, y, "-") : Y.call(null, b.ha, y, "-");
      return M(c) ? React.DOM.li(W(c), function() {
        var c = Kt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Kt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Mo.q ? Mo.q(function() {
        var c = b.X, c = null == c ? null : Jj.d(c);
        return null == c ? null : Th.d(c);
      }(), Zj, 2, y, "-") : Mo.call(null, function() {
        var c = b.X, c = null == c ? null : Jj.d(c);
        return null == c ? null : Th.d(c);
      }(), Zj, 2, y, "-");
      return M(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total revenue")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total revenue"));
    }(), function() {
      var c = Y.q ? Y.q(function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-") : Y.call(null, function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-");
      return M(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total employees")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total employees"));
    }()), V(Pt(b.v)));
  }, Lt.prototype.A = function() {
    return this.tg;
  }, Lt.prototype.B = function(b, c) {
    return new Lt(this.qa, this.na, this.ha, this.Yf, this.v, this.X, this.bf, c);
  });
  return new Lt(g, f, e, d, c, b, Rt, null);
}, Ut = function Tt(b, c, d, e) {
  var f = Qt(c), f = N(f) ? J.c(S, f) : f, g = I.c(f, Tg), k = I.c(f, Gj), l = I.c(f, Ai);
  "undefined" === typeof Mt && (Mt = function(b, c, d, e, f, g, k, l, aa, Ia) {
    this.qa = b;
    this.na = c;
    this.ha = d;
    this.Zf = e;
    this.D = f;
    this.v = g;
    this.X = k;
    this.Jc = l;
    this.ph = aa;
    this.ug = Ia;
    this.r = 0;
    this.k = 393216;
  }, Mt.R = !0, Mt.Q = "clustermap.components.map-report/t34268", Mt.U = function(b, c) {
    return jc(c, "clustermap.components.map-report/t34268");
  }, Mt.prototype.Ea = !0, Mt.prototype.Aa = function() {
    var b = this;
    return React.DOM.div(null, React.DOM.header({className:"secondary"}, React.DOM.h2(null, "Investor-backed company"), function() {
      var c = qi.d(b.Jc);
      return M(c) ? React.DOM.h3(W(c), null) : React.DOM.h3(null, V(c));
    }(), V(Lr(b.D))), React.DOM.ul(null, function() {
      var c = Y.d ? Y.d(b.na) : Y.call(null, b.na);
      return M(c) ? React.DOM.li(W(c), function() {
        var c = Kt(b.na, "Investor");
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Kt(b.na, "Investor");
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Y.d ? Y.d(b.ha) : Y.call(null, b.ha);
      return M(c) ? React.DOM.li(W(c), function() {
        var c = Kt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Kt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Mo.q ? Mo.q(function() {
        var c = b.X, c = null == c ? null : Jj.d(c);
        return null == c ? null : Th.d(c);
      }(), Zj, 2, y, "-") : Mo.call(null, function() {
        var c = b.X, c = null == c ? null : Jj.d(c);
        return null == c ? null : Th.d(c);
      }(), Zj, 2, y, "-");
      return M(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total revenue")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total revenue"));
    }(), function() {
      var c = Y.q ? Y.q(function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-") : Y.call(null, function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-");
      return M(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total employees")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total employees"));
    }()), V(Pt(b.v)));
  }, Mt.prototype.A = function() {
    return this.ug;
  }, Mt.prototype.B = function(b, c) {
    return new Mt(this.qa, this.na, this.ha, this.Zf, this.D, this.v, this.X, this.Jc, this.ph, c);
  });
  return new Mt(l, k, g, f, e, d, c, b, Tt, null);
}, Wt = function Vt(b, c, d, e) {
  var f = Qt(c), f = N(f) ? J.c(S, f) : f, g = I.c(f, Tg), k = I.c(f, Gj), l = I.c(f, Ai);
  "undefined" === typeof Nt && (Nt = function(b, c, d, e, f, g, k, l, aa, Ia) {
    this.qa = b;
    this.na = c;
    this.ha = d;
    this.$f = e;
    this.D = f;
    this.v = g;
    this.X = k;
    this.Be = l;
    this.Pf = aa;
    this.vg = Ia;
    this.r = 0;
    this.k = 393216;
  }, Nt.R = !0, Nt.Q = "clustermap.components.map-report/t34318", Nt.U = function(b, c) {
    return jc(c, "clustermap.components.map-report/t34318");
  }, Nt.prototype.Ea = !0, Nt.prototype.Aa = function() {
    var b = this;
    return React.DOM.div(null, React.DOM.header({className:"secondary"}, React.DOM.h2(null, "Investor"), function() {
      var c = qi.d(b.Be);
      return M(c) ? React.DOM.h3(W(c), null) : React.DOM.h3(null, V(c));
    }(), V(Lr(b.D))), React.DOM.ul(null, function() {
      var c = Y.d ? Y.d(b.qa) : Y.call(null, b.qa);
      return M(c) ? React.DOM.li(W(c), function() {
        var c = Kt.f(b.qa, "Investor-backed company", E(["Investor-backed companies"], 0));
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Kt.f(b.qa, "Investor-backed company", E(["Investor-backed companies"], 0));
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Y.d ? Y.d(b.ha) : Y.call(null, b.ha);
      return M(c) ? React.DOM.li(W(c), function() {
        var c = Kt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Kt.f(b.ha, "Constituency", E(["Constituencies"], 0));
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Mo.q ? Mo.q(function() {
        var c = b.X, c = null == c ? null : Jj.d(c);
        return null == c ? null : Th.d(c);
      }(), Zj, 2, y, "-") : Mo.call(null, function() {
        var c = b.X, c = null == c ? null : Jj.d(c);
        return null == c ? null : Th.d(c);
      }(), Zj, 2, y, "-");
      return M(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total revenue")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total revenue"));
    }(), function() {
      var c = Y.q ? Y.q(function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-") : Y.call(null, function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-");
      return M(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total employees")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total employees"));
    }()), V(Pt(b.v)));
  }, Nt.prototype.A = function() {
    return this.vg;
  }, Nt.prototype.B = function(b, c) {
    return new Nt(this.qa, this.na, this.ha, this.$f, this.D, this.v, this.X, this.Be, this.Pf, c);
  });
  return new Nt(l, k, g, f, e, d, c, b, Vt, null);
}, Yt = function Xt(b, c, d, e) {
  var f = Qt(c), f = N(f) ? J.c(S, f) : f, g = I.c(f, Tg), k = I.c(f, Gj), l = I.c(f, Ai);
  "undefined" === typeof Ot && (Ot = function(b, c, d, e, f, g, k, l, aa, Ia) {
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
  }, Ot.R = !0, Ot.Q = "clustermap.components.map-report/t34372", Ot.U = function(b, c) {
    return jc(c, "clustermap.components.map-report/t34372");
  }, Ot.prototype.Ea = !0, Ot.prototype.Aa = function() {
    var b = this;
    return React.DOM.div(null, React.DOM.header({className:"secondary"}, React.DOM.h2(null, "Constituency"), function() {
      var c = qi.d(b.Sa);
      return M(c) ? React.DOM.h3(W(c), React.DOM.br(null), q(function() {
        var c = uk.d(b.Sa);
        return q(c) ? c : Tk.d(b.Sa);
      }()) ? React.DOM.small(null, "(", V(uk.d(b.Sa)), ", ", V(Tk.d(b.Sa)), ")") : null) : React.DOM.h3(null, V(c), React.DOM.br(null), q(function() {
        var c = uk.d(b.Sa);
        return q(c) ? c : Tk.d(b.Sa);
      }()) ? React.DOM.small(null, "(", V(uk.d(b.Sa)), ", ", V(Tk.d(b.Sa)), ")") : null);
    }(), V(Lr(b.D))), React.DOM.ul(null, function() {
      var c = Y.d ? Y.d(b.qa) : Y.call(null, b.qa);
      return M(c) ? React.DOM.li(W(c), function() {
        var c = Kt.f(b.qa, "Investor-backed company", E(["Investor-backed companies"], 0));
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Kt.f(b.qa, "Investor-backed company", E(["Investor-backed companies"], 0));
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Y.d ? Y.d(b.na) : Y.call(null, b.na);
      return M(c) ? React.DOM.li(W(c), function() {
        var c = Kt(b.na, "Investor");
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }()) : React.DOM.li(null, V(c), function() {
        var c = Kt(b.na, "Investor");
        return M(c) ? React.DOM.small(W(c), null) : React.DOM.small(null, V(c));
      }());
    }(), function() {
      var c = Mo.q ? Mo.q(function() {
        var c = b.X, c = null == c ? null : Jj.d(c);
        return null == c ? null : Th.d(c);
      }(), Zj, 2, y, "-") : Mo.call(null, function() {
        var c = b.X, c = null == c ? null : Jj.d(c);
        return null == c ? null : Th.d(c);
      }(), Zj, 2, y, "-");
      return M(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total revenue")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total revenue"));
    }(), function() {
      var c = Y.q ? Y.q(function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-") : Y.call(null, function() {
        var c = b.X, c = null == c ? null : aj.d(c);
        return null == c ? null : Th.d(c);
      }(), Cj, 0, y, "-");
      return M(c) ? React.DOM.li(W(c), React.DOM.small(null, "Total employees")) : React.DOM.li(null, V(c), React.DOM.small(null, "Total employees"));
    }()), V(Pt(b.v)));
  }, Ot.prototype.A = function() {
    return this.wg;
  }, Ot.prototype.B = function(b, c) {
    return new Ot(this.qa, this.na, this.ha, this.ag, this.D, this.v, this.X, this.Sa, this.Hf, c);
  });
  return new Ot(l, k, g, f, e, d, c, b, Xt, null);
};
function Zt(a, b) {
  var c = mo.d(b), c = N(c) ? J.c(S, c) : c, d = I.c(c, Rk), c = I.c(c, mi), d = ke.c(d, Dh), e = De.c(a, new Q(null, 2, 5, R, [oi, Mj], null)), f = De.c(a, new Q(null, 2, 5, R, [oi, Fk], null)), g = Nh.d(a);
  return q(yd.c ? yd.c(hi, e) : yd.call(null, hi, e)) ? Ut(f, g, c, d) : q(yd.c ? yd.c(yk, e) : yd.call(null, yk, e)) ? Wt(f, g, c, d) : q(yd.c ? yd.c(Oh, e) : yd.call(null, Oh, e)) ? Yt(f, g, c, d) : St(g, c);
}
;var $t, au = new Q(null, 2, 5, R, [new Q(null, 2, 5, R, [59.54, 2.3], null), new Q(null, 2, 5, R, [49.29, -11.29], null)], null);
function bu(a) {
  return a.Kf(Jg(au), Jg(new n(null, 2, ["paddingTopLeft", new Q(null, 2, 5, R, [0, 0], null), "paddingBottomRight", new Q(null, 2, 5, R, [0, 0], null)], null)));
}
var cu, eu, fu = config, gu = null == fu ? null : fu.Fi, hu = null == gu ? null : gu.map;
eu = null == hu ? null : hu.oi;
cu = q(eu) ? eu : "mccraigmccraig.h4f921b9";
function iu(a) {
  a = L.map.call(null, a, {zoomControl:!1});
  var b = L.Qi.kj.call(null, cu, {detectRetina:jb(config.qh)}), c = L.control.zoom.call(null, {position:"bottomright"});
  a.ki(b);
  a.ji(c);
  bu(a);
  return new n(null, 4, [pi, a, Wh, Bg.d(vf), zj, Bg.d(vf), Ii, Bg.d(Zf)], null);
}
var ju = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    if (q(de(b))) {
      var e = A(b), f = new L.Uh(e.Mi(), e.Li()), e = ob.e(function() {
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
function ku(a, b) {
  return "" + v(function() {
    var c = le.c(function(b) {
      return[v("\x3ca"), v(Yo(new n(null, 3, [Xg, a.e ? a.e(Dh, hi, b) : a.call(null, Dh, hi, b), Dk, null, bi, null], null))), v("\x3e"), v(function() {
        var a = qi.d(b);
        return M(a) ? [v("\x3cli"), v(Yo(Vf.f(E([new n(null, 2, [Dk, null, bi, null], null), a], 0)))), v("\x3e"), v("\x3c/li\x3e")].join("") : [v("\x3cli\x3e"), v($o(a)), v("\x3c/li\x3e")].join("");
      }()), v("\x3c/a\x3e")].join("");
    }, b);
    return M(c) ? [v("\x3cul"), v(Yo(Vf.f(E([new n(null, 2, [Dk, null, bi, "map-marker-popup-location-list"], null), c], 0)))), v("\x3e"), v("\x3c/ul\x3e")].join("") : [v('\x3cul class\x3d"map-marker-popup-location-list"\x3e'), v($o(c)), v("\x3c/ul\x3e")].join("");
  }());
}
function lu(a, b, c) {
  var d = function() {
    var a = null == c ? null : A(c), a = null == a ? null : Fi.d(a), a = null == a ? null : Gd(a);
    return null == a ? null : Jg(a);
  }();
  if (q(d)) {
    var e = L.Gi(Jg(new n(null, 4, [xk, "map-marker", Lk, new Q(null, 2, 5, R, [24, 28], null), xi, new Q(null, 2, 5, R, [12, 14], null), nj, new Q(null, 2, 5, R, [0, -8], null)], null))), d = L.Ri(d, Jg(new n(null, 1, [Vh, e], null)));
    a = ku(a, c);
    d.pi(a);
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
function mu(a, b, c, d) {
  var e = Vb(c), f = $f(Sf(e)), g = $f(Sf(d)), k = kn.c(f, g), l = ln.c(g, f), p = ln.c(f, g), t = Be(vf, le.c(function() {
    return function(c) {
      return new Q(null, 2, 5, R, [c, lu(a, b, I.c(d, c))], null);
    };
  }(e, f, g, k, l, p), l)), f = Be(vf, le.c(function(b) {
    return function(c) {
      var e = R, f = I.c(b, c), g = I.c(d, c);
      f.jj(ku(a, g));
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
function nu(a) {
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
  return L.Pi(Jg(new Q(null, 2, 5, R, [new Q(null, 2, 5, R, [c, a], null), new Q(null, 2, 5, R, [e, d], null)], null)));
}
function ou(a, b, c, d) {
  b = q(b) ? b[c] : null;
  var e = q(b) ? b.tolerance : null;
  b = q(b) ? new Q(null, 2, 5, R, [e, b], null) : null;
  a = a.o ? a.o(c, d, vj, 7) : a.call(null, c, d, vj, 7);
  return q(a) ? a : b;
}
function pu(a, b) {
  var c = N(b) ? J.c(S, b) : b, d = I.c(c, bk), c = I.c(c, Gk);
  q(q(c) ? d : c) ? a.Ud(Jg(new n(null, 5, [yi, "#0000aa", ii, 2, li, 1, tj, !0, zi, 0.2], null))) : q(c) ? a.Ud(Jg(new n(null, 5, [yi, "#0000aa", ii, 2, li, 1, tj, !0, zi, 0.2], null))) : q(d) ? a.Ud(Jg(new n(null, 4, [yi, "#000000", ii, 2, li, 1, tj, !1], null))) : a.Ud(Jg(new n(null, 5, [yi, "#ff0000", ii, 2, li, 0, tj, !1, zi, 0], null)));
}
function qu(a, b, c, d, e) {
  e = N(e) ? J.c(S, e) : e;
  var f = I.c(e, Gk), g = d.tolerance, k = nu(d.envelope);
  d = L.Ji(d.geojson);
  pu(d, e);
  d.$e(b);
  d.eb("click", function() {
    return Pp.c(a, new Q(null, 2, 5, R, [Hk, new Q(null, 2, 5, R, [Oh, c], null)], null));
  });
  return new n(null, 5, [Dk, c, vi, g, Gk, f, zk, d, Gi, k], null);
}
function ru(a, b, c, d, e, f, g, k) {
  if (q(c)) {
    var l = Vb(e), p = $f(Sf(l)), t = Vb(f);
    k = $f(J.c(Yd, le.c(je.c(fh, oh), J.c(Yd, Uf(k)))));
    var w = jn.c(k, g), D = ln.c(w, p), K = ln.c(p, w), O = kn.c(p, w), Z = le.c(function(e, f, k, l) {
      return function(e) {
        var f = new n(null, 2, [Gk, qd(l, e), bk, qd(g, e)], null), k = ou(b, c, e, d.Bd());
        q(k) ? (H.e(k, 0, null), k = H.e(k, 1, null), e = qu(a, d, e, k, f)) : e = null;
        return e;
      };
    }(l, p, t, k, w, D, K, O), D), U = le.c(function(e, f, k, l) {
      return function(f) {
        a: {
          var k = I.c(e, f);
          f = new n(null, 2, [Gk, qd(l, f), bk, qd(g, f)], null);
          var k = N(k) ? J.c(S, k) : k, p = I.c(k, Dk), t = ou(b, c, p, d.Bd());
          if (q(t)) {
            p = H.e(t, 0, null);
            t = H.e(t, 1, null);
            if (ce.c(p, vi.d(k))) {
              d.Lc(zk.d(k));
              f = qu(a, d, Dk.d(k), t, f);
              break a;
            }
            pu(zk.d(k), f);
          }
          f = k;
        }
        return f;
      };
    }(l, p, t, k, w, D, K, O, Z), O), aa = function() {
      for (var a = z(K), b = null, c = 0, e = 0;;) {
        if (e < c) {
          var f = b.C(null, e), f = I.c(l, f);
          q(f) && d.Lc(zk.d(f));
          e += 1;
        } else {
          if (a = z(a)) {
            ld(a) ? (c = vc(a), a = wc(a), b = c, c = G(c)) : (f = A(a), b = I.c(l, f), q(b) && d.Lc(zk.d(b)), a = C(a), b = null, c = 0), e = 0;
          } else {
            return null;
          }
        }
      }
    }(), p = ob.e(function() {
      return function(a, b) {
        var c = N(b) ? J.c(S, b) : b, d = I.c(c, Dk);
        return $c.e(a, d, c);
      };
    }(l, p, t, k, w, D, K, O, Z, U, aa), vf, xe(ge, Yd.c(Z, U)));
    Cg(f, k);
    Cg(e, p);
  }
}
function su(a, b, c, d) {
  c = Vb(c);
  d = Vb(d);
  if (hd(d)) {
    return bu(b);
  }
  if (hd(c)) {
    return xn.Ue.e ? xn.Ue.e(a, Qi, !0) : xn.Ue.call(null, a, Qi, !0);
  }
  q(lo.c(a, Qi)) && Ho(a, Qi, !1);
  a: {
    a = vf;
    for (d = z(d);;) {
      if (d) {
        var e = A(d), f = I.e(c, e, Uj);
        a = ce.c(f, Uj) ? $c.e(a, e, f) : a;
        d = C(d);
      } else {
        c = a;
        break a;
      }
    }
    c = void 0;
  }
  c = null == c ? null : Uf(c);
  c = null == c ? null : le.c(Gi, c);
  c = null == c ? null : de(c);
  return q(c) ? J.e(ju, b, c) : ju(au);
}
function tu(a, b) {
  var c = function() {
    var a = null == b ? null : b.Qd;
    return null == a ? null : a.id;
  }(), d = function() {
    var a = null == b ? null : b.Qd;
    return null == a ? null : a.Ei;
  }();
  return[v("\x3ca"), v(Yo(new n(null, 3, [Xg, a.e ? a.e(Dh, Oh, new n(null, 2, [Ph, c, Kk, d], null)) : a.call(null, Dh, Oh, new n(null, 2, [Ph, c, Kk, d], null)), Dk, null, bi, null], null))), v("\x3e"), v(M(d) ? [v("\x3cp"), v(Yo(Vf.f(E([new n(null, 2, [Dk, null, bi, "map-marker-constituency-name"], null), d], 0)))), v(" /\x3e")].join("") : [v('\x3cp class\x3d"map-marker-constituency-name"\x3e'), v($o(d)), v("\x3c/p\x3e")].join("")), v("\x3c/a\x3e")].join("");
}
var vu = function uu(b, c) {
  var d = N(b) ? J.c(S, b) : b, e = I.c(d, oi);
  "undefined" === typeof $t && ($t = function(b, c, d, e, p, t, w) {
    this.selection = b;
    this.Xd = c;
    this.Xf = d;
    this.w = e;
    this.hh = p;
    this.kg = t;
    this.sg = w;
    this.r = 0;
    this.k = 393216;
  }, $t.R = !0, $t.Q = "clustermap.components.map/t34152", $t.U = function(b, c) {
    return jc(c, "clustermap.components.map/t34152");
  }, $t.prototype.Wg = !0, $t.prototype.Me = function(b, c, d) {
    var e = this, p = N(c) ? J.c(S, c) : c;
    b = I.c(p, oi);
    c = I.c(p, Ei);
    var t = I.c(p, Mh), w = I.c(p, Yi);
    I.c(p, zh);
    I.c(p, ak);
    d = N(d) ? J.c(S, d) : d;
    d = I.c(d, Ti);
    var p = ko(e.w), p = N(p) ? J.c(S, p) : p, p = I.c(p, Yi), D = mo.d(e.w), K = N(D) ? J.c(S, D) : D, O = I.c(K, Rk);
    I.c(K, Lh);
    var D = I.c(K, Xh), Z = I.c(K, mi), K = lo.d(e.w), K = N(K) ? J.c(S, K) : K, U = I.c(K, Dh), aa = N(U) ? J.c(S, U) : U, U = I.c(aa, Ii), Ia = I.c(aa, zj), gb = I.c(aa, Wh), hb = I.c(aa, pi), aa = I.c(K, Qi);
    I.c(K, Ti);
    var qb = I.c(K, Wg), K = I.c(K, cj);
    mu(O, hb, gb, c);
    ce.c(w, p) && (Ho(e.w, Wg, function(b) {
      var c = b.Gd.Qf;
      b = b.Gd.Rf;
      var d = Xk(w, b, c), f = le.c(function() {
        return function(b) {
          return b.Qd.id;
        };
      }(c, b, d), d), d = A(d), f = $f(ne(1, f)), g = lo.c(e.w, Ti);
      q(q(d) ? ce.c(g, f) && jb(lo.c(e.w, Hj)) : d) && (g = L.oh(), g.ij(Jg(new Q(null, 2, 5, R, [c, b], null))), g.hj(tu(O, d)), g.bj(hb));
      return Ho(e.w, Ti, f);
    }), q(qb) && hb.S("mousemove", qb), hb.eb("mousemove", lo.c(e.w, Wg)), Ho(e.w, cj, function(b) {
      b = Xk(w, b.Gd.Rf, b.Gd.Qf);
      b = le.c(function() {
        return function(b) {
          return b.Qd.id;
        };
      }(b), b);
      return Pp.c(Z, new Q(null, 2, 5, R, [Hk, new Q(null, 2, 5, R, [Oh, A(b)], null)], null));
    }), q(K) && hb.S("click", K), hb.eb("click", lo.c(e.w, cj)));
    q(t) && ru(Z, D, t, hb, Ia, U, d, c);
    return q(q(aa) ? aa : ce.c(b, e.selection)) ? su(e.w, hb, Ia, U) : null;
  }, $t.prototype.Ge = !0, $t.prototype.Ld = function() {
    var b = this, c = Go.d(b.w), c = iu(c), c = N(c) ? J.c(S, c) : c;
    I.c(c, Vg);
    I.c(c, Wh);
    var d = I.c(c, pi);
    Ho(b.w, Dh, c);
    Ho(b.w, Ti, Zf);
    d.eb("zoomend", function() {
      return Dg.o(mo.c(b.w, ij), $c, ak, d.Bd());
    });
    d.eb("popupopen", function(c) {
      c = c.oh.hi;
      0 < xr.d(c).find(".map-marker-popup-location-list").length && Ho(b.w, Hj, !0);
      return xr.d(c).eb("mousemove", function(b) {
        b.preventDefault();
        return!1;
      });
    });
    d.eb("popupclose", function() {
      return Ho(b.w, Hj, null);
    });
    xr.d(document).eb("clustermap-change-view", function() {
      var c = lo.d(b.w), c = N(c) ? J.c(S, c) : c, c = I.c(c, Dh), e = N(c) ? J.c(S, c) : c, c = I.c(e, Ii), e = I.c(e, zj);
      d.Ni();
      return su(b.w, d, e, c);
    });
    return Fo.o(b.Xd, $c, ak, d.Bd());
  }, $t.prototype.Ea = !0, $t.prototype.Aa = function() {
    return React.DOM.div({className:"map", ref:"map"});
  }, $t.prototype.A = function() {
    return this.sg;
  }, $t.prototype.B = function(b, c) {
    return new $t(this.selection, this.Xd, this.Xf, this.w, this.hh, this.kg, c);
  });
  return new $t(e, d, d, c, b, uu, null);
};
var wu = Bg.d(Zc([Ug, zh, Mh, Nh, Qh, fi, gi, ni, oi, Ei, Yi, dj, gj, Ij, Kj, Nj, ak], [Dh, null, null, null, null, null, null, null, null, null, null, null, null, null, vf, null, null]));
function xu(a, b) {
  return ob.e(function(a, b) {
    var e = H.e(b, 0, null), f = H.e(b, 1, null), e = jd(e) ? e : new Q(null, 1, 5, R, [e], null);
    return He.e(a, e, bd(f) ? f : function() {
      return f;
    });
  }, a, b);
}
var yu = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = N(a) ? J.c(S, a) : a;
    return Dg.e(wu, xu, a);
  }
  a.m = 0;
  a.j = function(a) {
    a = z(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function zu() {
  var a = Np.d(1);
  Dp(function() {
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
                    return c[5] = e, op(c), T;
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
          var b = a[2], c = new RTree(10), g = Object.keys(b), k = [], l = Jg(new n(null, 1, [Mj, "FeatureCollection"], null));
          l.features = k;
          for (var g = z(g), p = null, t = 0, w = 0;;) {
            if (w < t) {
              var D = p.C(null, w), K = b[D], D = K.geojson, K = Jg(new n(null, 2, [Mj, "Feature", Zi, new n(null, 3, [Dk, K.id, Ph, K.id, Kk, K.compact_name], null)], null));
              K.geometry = D;
              k.push(K);
              w += 1;
            } else {
              if (g = z(g)) {
                ld(g) ? (t = vc(g), g = wc(g), p = t, t = G(t)) : (p = A(g), t = b[p], p = t.geojson, t = Jg(new n(null, 2, [Mj, "Feature", Zi, new n(null, 3, [Dk, t.id, Ph, t.id, Kk, t.compact_name], null)], null)), t.geometry = p, k.push(t), g = C(g), p = null, t = 0), w = 0;
              } else {
                break;
              }
            }
          }
          c.Ii(l);
          b = yu.f(E([Mh, b, Yi, c], 0));
          return np(a, b);
        }
        return 1 === b ? (b = ws.f("uk_constituencies", E([yh, !0], 0)), lp(a, 2, b)) : null;
      });
    }(), c = function() {
      var c = b.t ? b.t() : b.call(null);
      c[6] = a;
      return c;
    }();
    return kp(c);
  });
}
function Au() {
  var a = Np.d(1);
  Dp(function() {
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
                    return c[5] = e, op(c), T;
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
        return 2 === b ? (b = yu.f(E([Ij, a[2]], 0)), np(a, b)) : 1 === b ? (b = zs(), lp(a, 2, b)) : null;
      });
    }(), c = function() {
      var c = b.t ? b.t() : b.call(null);
      c[6] = a;
      return c;
    }();
    return kp(c);
  });
}
var Bu = new Xp;
function Cu(a, b, c) {
  return q(q(b) ? c : b) ? lq(Bu, [v("/"), v(Kd(q(a) ? a : "map")), v("/"), v(Kd(b)), v("/"), v(Kd(c))].join("")) : q(a) ? lq(Bu, [v("/"), v(Kd(a))].join("")) : lq(Bu, "" + v(""));
}
function Du() {
  var a = dq(Bu), b = jg(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/, a);
  H.e(b, 0, null);
  var a = H.e(b, 1, null), c = H.e(b, 2, null), b = H.e(b, 3, null);
  return new n(null, 3, [Ug, a, Mj, c, Dk, b], null);
}
var Eu = new n(null, 7, [vh, ss(function(a) {
  if (0 < G(va(a))) {
    a = qs([v("/api/"), v(us), v("/search?q\x3d"), v(a)].join(""));
  } else {
    a = new Q(null, 1, 5, R, [{}], null);
    var b = Np.d(Vd(100, a));
    Qp.c(b, a);
    a = b;
  }
  return a;
}, function(a) {
  return yu.f(E([Kj, Og.d(a)], 0));
}), Hk, function(a) {
  var b = H.e(a, 0, null);
  a = H.e(a, 1, null);
  var c = Du(), c = N(c) ? J.c(S, c) : c, c = I.c(c, Ug);
  return Cu(c, b, a);
}, rj, ss(function(a) {
  var b = H.e(a, 0, null);
  a = H.e(a, 1, null);
  var c = q(b) ? new wf([b, a]) : vf, d = gi.d(Vb(wu));
  return ce.c(c, d) ? (yu.f(E([gi, c], 0)), q(x.c ? x.c(hi, b) : x.call(null, hi, b)) ? new Q(null, 2, 5, R, [new Q(null, 6, 5, R, [qs([v("/api/"), v(us), v("/portfolio-companies/"), v(a)].join("")), zs.f(E([c], 0)), ys.f(E([c], 0)), As.f(E([c], 0)), Bs.f(E([c], 0)), xs.f(E([c], 0))], null), b], null) : q(x.c ? x.c(yk, b) : x.call(null, yk, b)) ? new Q(null, 2, 5, R, [new Q(null, 6, 5, R, [qs([v("/api/"), v(us), v("/investor-companies/"), v(a)].join("")), zs.f(E([c], 0)), ys.f(E([c], 0)), As.f(E([c], 
  0)), Bs.f(E([c], 0)), xs.f(E([c], 0))], null), b], null) : q(x.c ? x.c(Oh, b) : x.call(null, Oh, b)) ? new Q(null, 2, 5, R, [new Q(null, 6, 5, R, [qs([v("/api/"), v(us), v("/constituencies/"), v(a)].join("")), zs.f(E([c], 0)), ys.f(E([c], 0)), As.f(E([c], 0)), Bs.f(E([c], 0)), xs.f(E([c], 0))], null), b], null) : new Q(null, 2, 5, R, [new Q(null, 6, 5, R, [null, zs.f(E([c], 0)), ys.f(E([c], 0)), As.f(E([c], 0)), Bs.f(E([c], 0)), null], null), b], null)) : null;
}, function(a, b) {
  var c = H.e(a, 0, null), d = H.e(a, 1, null), e = H.e(a, 2, null), f = H.e(a, 3, null), g = H.e(a, 4, null), k = H.e(a, 5, null);
  return yu.f(E([oi, new n(null, 2, [Mj, b, Fk, c], null), Nh, d, dj, e, ni, f, gj, g, Ei, k], 0));
}), Bk, function(a) {
  var b = Du(), c = N(b) ? J.c(S, b) : b, b = I.c(c, Dk), c = I.c(c, Mj);
  return Cu(a, c, b);
}, Wj, function(a) {
  a = Ld.d(a);
  if (ce.c(a, Ug.d(Vb(wu)))) {
    yu.f(E([Ug, a], 0));
    a = Kd(a);
    if (!q(I.c(Ht, a))) {
      throw Error([v("unknown view: "), v(a)].join(""));
    }
    var b = Et.d("body"), c = [v("#nav ."), v(a)].join(""), c = Et.d(c), d = ps.c(c, ".."), d = Et.c(d, "\x3e .active");
    fs(d, "active");
    es(c, "active");
    for (var c = z(Ht), d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.C(null, f), k = H.e(g, 0, null), g = H.e(g, 1, null);
        x.c(k, a) ? es(b, g) : fs(b, g);
        f += 1;
      } else {
        if (c = z(c)) {
          ld(c) ? (e = vc(c), c = wc(c), d = e, e = G(e)) : (e = A(c), d = H.e(e, 0, null), e = H.e(e, 1, null), x.c(d, a) ? es(b, e) : fs(b, e), c = C(c), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return xr.d(document).mj("clustermap-change-view");
  }
  return null;
}, kk, function(a) {
  var b = Np.d(1);
  Dp(function() {
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
                    return c[5] = d, op(c), T;
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
          return c = yu.f(E([Qh, b[7], ni, b[2]], 0)), np(b, c);
        }
        if (1 === c) {
          var c = Vb(wu), c = Qh.d(c), c = Vf.f(E([c, a], 0)), d = Vb(wu), d = gi.d(d), d = Vf.f(E([d, c], 0)), d = As.f(E([d], 0));
          b[7] = c;
          return lp(b, 2, d);
        }
        return null;
      });
    }(), d = function() {
      var a = c.t ? c.t() : c.call(null);
      a[6] = b;
      return a;
    }();
    return kp(d);
  });
  return b;
}, Yg, function(a) {
  var b = Np.d(1);
  Dp(function() {
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
                    return c[5] = d, op(c), T;
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
          return c = yu.f(E([fi, b[7], gj, b[2]], 0)), np(b, c);
        }
        if (1 === c) {
          var c = Vb(wu), c = fi.d(c), c = Vf.f(E([c, a], 0)), d = Vb(wu), d = gi.d(d), d = Vf.f(E([d, c], 0)), d = Bs.f(E([d], 0));
          b[7] = c;
          return lp(b, 2, d);
        }
        return null;
      });
    }(), d = function() {
      var a = c.t ? c.t() : c.call(null);
      a[6] = b;
      return a;
    }();
    return kp(d);
  });
  return b;
}], null);
function Fu(a) {
  it("", function(b) {
    return M(b) ? (N(b) && J.c(S, b), Pp.c(a, new Q(null, 2, 5, R, [rj, null], null))) : kd(b) ? Pp.c(a, new Q(null, 2, 5, R, [rj, null], null)) : null;
  });
  it("/", function(b) {
    return M(b) ? (N(b) && J.c(S, b), Pp.c(a, new Q(null, 2, 5, R, [rj, null], null))) : kd(b) ? Pp.c(a, new Q(null, 2, 5, R, [rj, null], null)) : null;
  });
  it("/:view", function(b) {
    return M(b) ? (b = N(b) ? J.c(S, b) : b, b = I.c(b, Ug), Pp.c(a, new Q(null, 2, 5, R, [Wj, b], null)), Pp.c(a, new Q(null, 2, 5, R, [rj, null], null))) : kd(b) ? (b = H.e(b, 0, null), Pp.c(a, new Q(null, 2, 5, R, [Wj, b], null)), Pp.c(a, new Q(null, 2, 5, R, [rj, null], null))) : null;
  });
  it("/:view/:type/:id", function(b) {
    if (M(b)) {
      var c = N(b) ? J.c(S, b) : b;
      b = I.c(c, Dk);
      var d = I.c(c, Mj), c = I.c(c, Ug);
      Pp.c(a, new Q(null, 2, 5, R, [Wj, c], null));
      return Pp.c(a, new Q(null, 2, 5, R, [rj, new Q(null, 2, 5, R, [Ld.d(d), b], null)], null));
    }
    return kd(b) ? (c = H.e(b, 0, null), d = H.e(b, 1, null), b = H.e(b, 2, null), Pp.c(a, new Q(null, 2, 5, R, [Wj, c], null)), Pp.c(a, new Q(null, 2, 5, R, [rj, new Q(null, 2, 5, R, [Ld.d(d), b], null)], null))) : null;
  });
  Il(Bu, "navigate", function(a) {
    a = a.Eh;
    Ms(a);
    a = en.c(a, /\?/);
    var c = H.e(a, 0, null);
    a = H.e(a, 1, null);
    a = q(a) ? new n(null, 1, [$g, Zs(a)], null) : null;
    var d = jt(c), c = H.e(d, 0, null), d = H.e(d, 1, null), c = q(c) ? c : ge;
    a = Vf.f(E([d, a], 0));
    return c.d ? c.d(a) : c.call(null, a);
  });
  gq(Bu, !0);
}
function Gu() {
  var a = Np.t(), b = new n(null, 3, [mi, a, Rk, Ps, Lh, Qs], null);
  Jt(a);
  Fu(a);
  zu();
  Au();
  Do(vu, wu, new n(null, 2, [fj, Vf.f(E([b, new n(null, 2, [ij, wu, Xh, ke.e(Gs, wu, zh)], null)], 0)), Hh, document.getElementById("map-component")], null));
  Do(st, wu, new n(null, 2, [fj, b, Hh, document.getElementById("search-component")], null));
  Do(Zt, wu, new n(null, 2, [fj, b, Hh, document.getElementById("map-report-component")], null));
  Do(Jr(), wu, new n(null, 2, [fj, b, Hh, document.getElementById("page-title-component")], null));
  Do(Ir, wu, new n(null, 2, [Hh, document.getElementById("full-report-component"), fj, b], null));
  var c = Np.d(1);
  Dp(function() {
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
                    return c[5] = d, op(c), T;
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
          var d = b[2], c = H.e(d, 0, null), d = H.e(d, 1, null), e = I.c(Eu, c);
          if (jb(e)) {
            throw Error([v("no handler for event-type: "), v(c)].join(""));
          }
          c = e.d ? e.d(d) : e.call(null, d);
          b[7] = c;
          b[2] = null;
          b[1] = 2;
          return T;
        }
        return 6 === c ? (c = b[2], b[2] = c, b[1] = 3, T) : 5 === c ? (b[2] = null, b[1] = 6, T) : 4 === c ? lp(b, 7, a) : 3 === c ? (c = b[2], np(b, c)) : 2 === c ? (b[1] = 4, T) : 1 === c ? (b[2] = null, b[1] = 2, T) : null;
      });
    }(), e = function() {
      var a = b.t ? b.t() : b.call(null);
      a[6] = c;
      return a;
    }();
    return kp(e);
  });
  return c;
}
;function Hu() {
  return Gu();
}
q(config.qh) ? setTimeout(Hu, 2E3) : Gu();

//# sourceMappingURL=clustermap.js.map