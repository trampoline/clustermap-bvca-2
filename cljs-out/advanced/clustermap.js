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
function qa(a, b, c) {
  qa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
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
  a.Bb = b.prototype;
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
Xa.prototype.lb = "";
Xa.prototype.set = function(a) {
  this.lb = "" + a;
};
Xa.prototype.append = function(a, b, c) {
  this.lb += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.lb += arguments[d];
    }
  }
  return this;
};
Xa.prototype.toString = function() {
  return this.lb;
};
var Ya;
function Za() {
  throw Error("No *print-fn* fn set for evaluation environment");
}
var $a = null;
function ab() {
  return new n(null, 5, [bb, !0, cb, !0, db, !1, fb, !1, gb, null], null);
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
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function kb(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = kb(b), c = q(q(c) ? c.Q : c) ? c.P : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function lb(a) {
  var b = a.P;
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
    throw u("ICloneable.-clone", a);
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
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function vb(a) {
  if (a ? a.Z : a) {
    return a.Z(a);
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
  if (a ? a.O : a) {
    return a.O(a, b);
  }
  var c;
  c = xb[m(null == a ? null : a)];
  if (!c && (c = xb._, !c)) {
    throw u("ICollection.-conj", a);
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
      throw u("IIndexed.-nth", a);
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
function Ab(a) {
  if (a ? a.W : a) {
    return a.W(a);
  }
  var b;
  b = Ab[m(null == a ? null : a)];
  if (!b && (b = Ab._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Bb(a) {
  if (a ? a.ga : a) {
    return a.ga(a);
  }
  var b;
  b = Bb[m(null == a ? null : a)];
  if (!b && (b = Bb._, !b)) {
    throw u("ISeq.-rest", a);
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
      throw u("ILookup.-lookup", a);
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
function Fb(a, b) {
  if (a ? a.Yb : a) {
    return a.Yb(a, b);
  }
  var c;
  c = Fb[m(null == a ? null : a)];
  if (!c && (c = Fb._, !c)) {
    throw u("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Gb(a, b, c) {
  if (a ? a.mb : a) {
    return a.mb(a, b, c);
  }
  var d;
  d = Gb[m(null == a ? null : a)];
  if (!d && (d = Gb._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Hb = {};
function Ib(a, b) {
  if (a ? a.vc : a) {
    return a.vc(a, b);
  }
  var c;
  c = Ib[m(null == a ? null : a)];
  if (!c && (c = Ib._, !c)) {
    throw u("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Jb = {};
function Kb(a) {
  if (a ? a.wd : a) {
    return a.wd();
  }
  var b;
  b = Kb[m(null == a ? null : a)];
  if (!b && (b = Kb._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Lb(a) {
  if (a ? a.xd : a) {
    return a.xd();
  }
  var b;
  b = Lb[m(null == a ? null : a)];
  if (!b && (b = Lb._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Nb = {};
function Ob(a, b) {
  if (a ? a.je : a) {
    return a.je(0, b);
  }
  var c;
  c = Ob[m(null == a ? null : a)];
  if (!c && (c = Ob._, !c)) {
    throw u("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Pb(a) {
  if (a ? a.ob : a) {
    return a.ob(a);
  }
  var b;
  b = Pb[m(null == a ? null : a)];
  if (!b && (b = Pb._, !b)) {
    throw u("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Qb(a) {
  if (a ? a.pb : a) {
    return a.pb(a);
  }
  var b;
  b = Qb[m(null == a ? null : a)];
  if (!b && (b = Qb._, !b)) {
    throw u("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Rb = {};
function Sb(a, b, c) {
  if (a ? a.zd : a) {
    return a.zd(a, b, c);
  }
  var d;
  d = Sb[m(null == a ? null : a)];
  if (!d && (d = Sb._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Tb(a) {
  if (a ? a.Fb : a) {
    return a.Fb(a);
  }
  var b;
  b = Tb[m(null == a ? null : a)];
  if (!b && (b = Tb._, !b)) {
    throw u("IDeref.-deref", a);
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
    throw u("IMeta.-meta", a);
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
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Yb = {}, Zb = function() {
  function a(a, b, c) {
    if (a ? a.fa : a) {
      return a.fa(a, b, c);
    }
    var g;
    g = Zb[m(null == a ? null : a)];
    if (!g && (g = Zb._, !g)) {
      throw u("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.ea : a) {
      return a.ea(a, b);
    }
    var c;
    c = Zb[m(null == a ? null : a)];
    if (!c && (c = Zb._, !c)) {
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
function $b(a, b) {
  if (a ? a.D : a) {
    return a.D(a, b);
  }
  var c;
  c = $b[m(null == a ? null : a)];
  if (!c && (c = $b._, !c)) {
    throw u("IEquiv.-equiv", a);
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
    throw u("IHash.-hash", a);
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
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var dc = {}, ec = {}, fc = {};
function gc(a) {
  if (a ? a.yd : a) {
    return a.yd(a);
  }
  var b;
  b = gc[m(null == a ? null : a)];
  if (!b && (b = gc._, !b)) {
    throw u("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function hc(a, b) {
  if (a ? a.oe : a) {
    return a.oe(0, b);
  }
  var c;
  c = hc[m(null == a ? null : a)];
  if (!c && (c = hc._, !c)) {
    throw u("IWriter.-write", a);
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
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function kc(a, b, c) {
  if (a ? a.me : a) {
    return a.me(0, b, c);
  }
  var d;
  d = kc[m(null == a ? null : a)];
  if (!d && (d = kc._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function lc(a, b, c) {
  if (a ? a.le : a) {
    return a.le(0, b, c);
  }
  var d;
  d = lc[m(null == a ? null : a)];
  if (!d && (d = lc._, !d)) {
    throw u("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function mc(a, b) {
  if (a ? a.ne : a) {
    return a.ne(0, b);
  }
  var c;
  c = mc[m(null == a ? null : a)];
  if (!c && (c = mc._, !c)) {
    throw u("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function nc(a) {
  if (a ? a.Gb : a) {
    return a.Gb(a);
  }
  var b;
  b = nc[m(null == a ? null : a)];
  if (!b && (b = nc._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function oc(a, b) {
  if (a ? a.qb : a) {
    return a.qb(a, b);
  }
  var c;
  c = oc[m(null == a ? null : a)];
  if (!c && (c = oc._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function pc(a) {
  if (a ? a.rb : a) {
    return a.rb(a);
  }
  var b;
  b = pc[m(null == a ? null : a)];
  if (!b && (b = pc._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function qc(a, b, c) {
  if (a ? a.$b : a) {
    return a.$b(a, b, c);
  }
  var d;
  d = qc[m(null == a ? null : a)];
  if (!d && (d = qc._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function rc(a, b, c) {
  if (a ? a.ke : a) {
    return a.ke(0, b, c);
  }
  var d;
  d = rc[m(null == a ? null : a)];
  if (!d && (d = rc._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function sc(a) {
  if (a ? a.he : a) {
    return a.he();
  }
  var b;
  b = sc[m(null == a ? null : a)];
  if (!b && (b = sc._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function tc(a) {
  if (a ? a.fd : a) {
    return a.fd(a);
  }
  var b;
  b = tc[m(null == a ? null : a)];
  if (!b && (b = tc._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function uc(a) {
  if (a ? a.gd : a) {
    return a.gd(a);
  }
  var b;
  b = uc[m(null == a ? null : a)];
  if (!b && (b = uc._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function vc(a) {
  if (a ? a.ed : a) {
    return a.ed(a);
  }
  var b;
  b = vc[m(null == a ? null : a)];
  if (!b && (b = vc._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function wc(a) {
  this.lh = a;
  this.p = 0;
  this.g = 1073741824;
}
wc.prototype.oe = function(a, b) {
  return this.lh.append(b);
};
function xc(a) {
  var b = new Xa;
  a.F(null, new wc(b), ab());
  return "" + w(b);
}
function yc(a, b) {
  if (q(y.a ? y.a(a, b) : y.call(null, a, b))) {
    return 0;
  }
  var c = jb(a.ma);
  if (q(c ? b.ma : c)) {
    return-1;
  }
  if (q(a.ma)) {
    if (jb(b.ma)) {
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
  this.ab = c;
  this.Xa = d;
  this.oa = e;
  this.g = 2154168321;
  this.p = 4096;
}
h = Ac.prototype;
h.F = function(a, b) {
  return hc(b, this.ab);
};
h.K = function() {
  var a = this.Xa;
  return null != a ? a : this.Xa = a = Bc.a ? Bc.a(Cc.b ? Cc.b(this.ma) : Cc.call(null, this.ma), Cc.b ? Cc.b(this.name) : Cc.call(null, this.name)) : Bc.call(null, Cc.b ? Cc.b(this.ma) : Cc.call(null, this.ma), Cc.b ? Cc.b(this.name) : Cc.call(null, this.name));
};
h.t = function(a, b) {
  return new Ac(this.ma, this.name, this.ab, this.Xa, b);
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
  return b instanceof Ac ? this.ab === b.ab : !1;
};
h.pa = !0;
h.ka = function() {
  return new Ac(this.ma, this.name, this.ab, this.Xa, this.oa);
};
h.toString = function() {
  return this.ab;
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
  if (a && (a.g & 8388608 || a.nb)) {
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
  if (a && (a.g & 64 || a.Jb)) {
    return a.W(null);
  }
  a = A(a);
  return null == a ? null : Ab(a);
}
function C(a) {
  return null != a ? a && (a.g & 64 || a.Jb) ? a.ga(null) : (a = A(a)) ? Bb(a) : Gc : Gc;
}
function E(a) {
  return null == a ? null : a && (a.g & 128 || a.wc) ? a.ra(null) : A(C(a));
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
Date.prototype.vf = !0;
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
  return a ? a.g & 2 || a.Zb ? !0 : a.g ? !1 : r(tb, a) : r(tb, a);
}
function Lc(a) {
  return a ? a.g & 16 || a.Ib ? !0 : a.g ? !1 : r(yb, a) : r(yb, a);
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
h.O = function(a, b) {
  return G.a ? G.a(b, this) : G.call(null, b, this);
};
h.yd = function() {
  var a = ub(this);
  return 0 < a ? new Oc(this, a - 1, null) : null;
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Jc.i(this.f, b, this.f[this.o], this.o + 1);
};
h.fa = function(a, b, c) {
  return Jc.i(this.f, b, c, this.o);
};
h.G = function() {
  return this;
};
h.H = function() {
  return this.f.length - this.o;
};
h.W = function() {
  return this.f[this.o];
};
h.ga = function() {
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
h.Z = function() {
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
  this.sc = a;
  this.o = b;
  this.j = c;
  this.p = 0;
  this.g = 32374862;
}
h = Oc.prototype;
h.K = function() {
  return Nc.b ? Nc.b(this) : Nc.call(null, this);
};
h.O = function(a, b) {
  return G.a ? G.a(b, this) : G.call(null, b, this);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Rc.a ? Rc.a(b, this) : Rc.call(null, b, this);
};
h.fa = function(a, b, c) {
  return Rc.c ? Rc.c(b, c, this) : Rc.call(null, b, c, this);
};
h.G = function() {
  return this;
};
h.H = function() {
  return this.o + 1;
};
h.W = function() {
  return x.a(this.sc, this.o);
};
h.ga = function() {
  return 0 < this.o ? new Oc(this.sc, this.o - 1, null) : null;
};
h.D = function(a, b) {
  return Pc.a ? Pc.a(this, b) : Pc.call(null, this, b);
};
h.t = function(a, b) {
  return new Oc(this.sc, this.o, b);
};
h.pa = !0;
h.ka = function() {
  return new Oc(this.sc, this.o, this.j);
};
h.s = function() {
  return this.j;
};
h.Z = function() {
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
    if (a && (a.g & 2 || a.Zb)) {
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
      if (a && (a.g & 16 || a.Ib)) {
        return a.qa(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (r(yb, a)) {
        return x.a(a, b);
      }
      if (t) {
        if (a ? a.g & 64 || a.Jb || (a.g ? 0 : r(zb, a)) : r(zb, a)) {
          return Wc.c(a, b, c);
        }
        throw Error([w("nth not supported on this type "), w(lb(kb(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.g & 16 || a.Ib)) {
      return a.w(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (r(yb, a)) {
      return x.a(a, b);
    }
    if (t) {
      if (a ? a.g & 64 || a.Jb || (a.g ? 0 : r(zb, a)) : r(zb, a)) {
        return Wc.a(a, b);
      }
      throw Error([w("nth not supported on this type "), w(lb(kb(a)))].join(""));
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
    return null != a ? a && (a.g & 256 || a.vd) ? a.J(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : r(Db, a) ? Eb.c(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.g & 256 || a.vd) ? a.I(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : r(Db, a) ? Eb.a(a, b) : null;
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
  return b ? b : a ? q(q(null) ? null : a.rf) ? !0 : a.za ? !1 : r(qb, a) : r(qb, a);
}
var Sc = function ad(b, c) {
  return $c(b) && !(b ? b.g & 262144 || b.Af || (b.g ? 0 : r(Wb, b)) : r(Wb, b)) ? ad(function() {
    "undefined" === typeof Ya && (Ya = function(b, c, f, g) {
      this.j = b;
      this.jc = c;
      this.zh = f;
      this.zg = g;
      this.p = 0;
      this.g = 393217;
    }, Ya.Q = !0, Ya.P = "cljs.core/t23464", Ya.U = function(b, c) {
      return hc(c, "cljs.core/t23464");
    }, Ya.prototype.call = function() {
      function b(d, g) {
        d = this;
        var k = null;
        1 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return N.a ? N.a(b.jc, d) : N.call(null, b.jc, d);
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
      return this.call.apply(this, [this].concat(mb(c)));
    }, Ya.prototype.a = function() {
      function b(d) {
        var g = null;
        0 < arguments.length && (g = F(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, g);
      }
      function c(b) {
        return N.a ? N.a(self__.jc, b) : N.call(null, self__.jc, b);
      }
      b.l = 0;
      b.h = function(b) {
        b = A(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), Ya.prototype.rf = !0, Ya.prototype.s = function() {
      return this.zg;
    }, Ya.prototype.t = function(b, c) {
      return new Ya(this.j, this.jc, this.zh, c);
    });
    return new Ya(c, b, ad, null);
  }(), c) : null == b ? null : Xb(b, c);
};
function bd(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.xf || (a.g ? 0 : r(Ub, a)) : r(Ub, a) : b) ? Vb(a) : null;
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
  if (a && (a.g & 4194304 || a.ki)) {
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
  return null == a || jb(A(a));
}
function gd(a) {
  return null == a ? !1 : a ? a.g & 8 || a.gi ? !0 : a.g ? !1 : r(wb, a) : r(wb, a);
}
function hd(a) {
  return a ? a.g & 16777216 || a.zf ? !0 : a.g ? !1 : r(dc, a) : r(dc, a);
}
function O(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.mi ? !0 : a.g ? !1 : r(Hb, a) : r(Hb, a);
}
function id(a) {
  return a ? a.g & 16384 || a.pi ? !0 : a.g ? !1 : r(Rb, a) : r(Rb, a);
}
function jd(a) {
  return a ? a.p & 512 || a.fi ? !0 : !1 : !1;
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
  return null == a ? !1 : a ? a.g & 64 || a.Jb ? !0 : a.g ? !1 : r(zb, a) : r(zb, a);
}
function od(a) {
  return q(a) ? !0 : !1;
}
function pd(a, b) {
  return J.c(a, b, md) === md ? !1 : !0;
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
  if (kb(a) === kb(b)) {
    return a && (a.p & 2048 || a.tc) ? a.uc(null, b) : Pa(a, b);
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
    return c && (c.g & 524288 || c.ie) ? c.fa(null, a, b) : c instanceof Array ? Jc.c(c, a, b) : "string" === typeof c ? Jc.c(c, a, b) : r(Yb, c) ? Zb.c(c, a, b) : t ? Rc.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.g & 524288 || b.ie) ? b.ea(null, a) : b instanceof Array ? Jc.a(b, a) : "string" === typeof b ? Jc.a(b, a) : r(Yb, b) ? Zb.a(b, a) : t ? Rc.a(a, b) : null;
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
  this.eb = b;
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
h.O = function(a, b) {
  return new Dd(this.j, b, this, this.count + 1, null);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Rc.a(b, this);
};
h.fa = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.H = function() {
  return this.count;
};
h.ob = function() {
  return this.eb;
};
h.pb = function() {
  return Bb(this);
};
h.W = function() {
  return this.eb;
};
h.ga = function() {
  return 1 === this.count ? Gc : this.Ta;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Dd(b, this.eb, this.Ta, this.count, this.n);
};
h.pa = !0;
h.ka = function() {
  return new Dd(this.j, this.eb, this.Ta, this.count, this.n);
};
h.s = function() {
  return this.j;
};
h.Z = function() {
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
h.O = function(a, b) {
  return new Dd(this.j, b, null, 1, null);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Rc.a(b, this);
};
h.fa = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return null;
};
h.H = function() {
  return 0;
};
h.ob = function() {
  return null;
};
h.pb = function() {
  throw Error("Can't pop empty list");
};
h.W = function() {
  return null;
};
h.ga = function() {
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
h.Z = function() {
  return this;
};
var Gc = new Ed(null);
function Fd(a) {
  return(a ? a.g & 134217728 || a.ni || (a.g ? 0 : r(fc, a)) : r(fc, a)) ? gc(a) : ob.c(Vc, Gc, a);
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
            b.push(a.W(null)), a = a.ra(null);
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
        var f = a - 1, e = e.O(null, b[a - 1]);
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
  this.eb = b;
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
h.O = function(a, b) {
  return new Hd(null, b, this, this.n);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Rc.a(b, this);
};
h.fa = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.W = function() {
  return this.eb;
};
h.ga = function() {
  return null == this.Ta ? Gc : this.Ta;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Hd(b, this.eb, this.Ta, this.n);
};
h.pa = !0;
h.ka = function() {
  return new Hd(this.j, this.eb, this.Ta, this.n);
};
h.s = function() {
  return this.j;
};
h.Z = function() {
  return Sc(Gc, this.j);
};
function G(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Jb)) ? new Hd(null, a, b, null) : new Hd(null, a, A(b), null);
}
function Q(a, b, c, d) {
  this.ma = a;
  this.name = b;
  this.$a = c;
  this.Xa = d;
  this.g = 2153775105;
  this.p = 4096;
}
h = Q.prototype;
h.F = function(a, b) {
  return hc(b, [w(":"), w(this.$a)].join(""));
};
h.K = function() {
  null == this.Xa && (this.Xa = Bc(Cc(this.ma), Cc(this.name)) + 2654435769);
  return this.Xa;
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
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return J.a(a, this);
};
h.a = function(a, b) {
  return J.c(a, this, b);
};
h.D = function(a, b) {
  return b instanceof Q ? this.$a === b.$a : !1;
};
h.pa = !0;
h.ka = function() {
  return new Q(this.ma, this.name, this.$a, this.Xa);
};
h.toString = function() {
  return[w(":"), w(this.$a)].join("");
};
function Id(a, b) {
  return a === b ? !0 : a instanceof Q && b instanceof Q ? a.$a === b.$a : !1;
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
      if (a && (a.p & 4096 || a.yf)) {
        b = a.ma;
      } else {
        throw Error([w("Doesn't support namespace: "), w(a)].join(""));
      }
      return new Q(b, Jd.b ? Jd.b(a) : Jd.call(null, a), a.ab, null);
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
h.O = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
function Nd(a) {
  null != a.Ob && (a.L = a.Ob.q ? a.Ob.q() : a.Ob.call(null), a.Ob = null);
  return a.L;
}
h.ea = function(a, b) {
  return Rc.a(b, this);
};
h.fa = function(a, b, c) {
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
h.W = function() {
  cc(this);
  return null == this.L ? null : B(this.L);
};
h.ga = function() {
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
h.Z = function() {
  return Sc(Gc, this.j);
};
function Od(a, b) {
  this.ba = a;
  this.end = b;
  this.p = 0;
  this.g = 2;
}
Od.prototype.H = function() {
  return this.end;
};
Od.prototype.add = function(a) {
  this.ba[this.end] = a;
  return this.end += 1;
};
Od.prototype.Y = function() {
  var a = new Pd(this.ba, 0, this.end);
  this.ba = null;
  return a;
};
function Qd(a) {
  return new Od(Array(a), 0);
}
function Pd(a, b, c) {
  this.f = a;
  this.V = b;
  this.end = c;
  this.p = 0;
  this.g = 524306;
}
h = Pd.prototype;
h.ea = function(a, b) {
  return Jc.i(this.f, b, this.f[this.V], this.V + 1);
};
h.fa = function(a, b, c) {
  return Jc.i(this.f, b, c, this.V);
};
h.he = function() {
  if (this.V === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Pd(this.f, this.V + 1, this.end);
};
h.w = function(a, b) {
  return this.f[this.V + b];
};
h.qa = function(a, b, c) {
  return 0 <= b && b < this.end - this.V ? this.f[this.V + b] : c;
};
h.H = function() {
  return this.end - this.V;
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
  this.Y = a;
  this.Va = b;
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
  if (1 < ub(this.Y)) {
    return new Sd(sc(this.Y), this.Va, this.j, null);
  }
  var a = cc(this.Va);
  return null == a ? null : a;
};
h.O = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.G = function() {
  return this;
};
h.W = function() {
  return x.a(this.Y, 0);
};
h.ga = function() {
  return 1 < ub(this.Y) ? new Sd(sc(this.Y), this.Va, this.j, null) : null == this.Va ? Gc : this.Va;
};
h.ed = function() {
  return null == this.Va ? null : this.Va;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Sd(this.Y, this.Va, b, this.n);
};
h.s = function() {
  return this.j;
};
h.Z = function() {
  return Sc(Gc, this.j);
};
h.fd = function() {
  return this.Y;
};
h.gd = function() {
  return null == this.Va ? Gc : this.Va;
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
      return function v(a, b) {
        return new Ld(null, function() {
          var c = A(a);
          return c ? jd(c) ? Td(tc(c), v(uc(c), b)) : G(B(c), v(C(c), b)) : q(b) ? v(B(b), E(b)) : null;
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
      var v = null;
      4 < arguments.length && (v = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, v);
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
    return a.Hb ? a.Hb(c, d, e, f, g, a, k) : a.Hb ? a.Hb(c, d, e, f, g, a, k) : a.call(null, c, d, e, f, g, a, k);
  }
  var l = Ab(p), s = Bb(p);
  if (8 === b) {
    return a.td ? a.td(c, d, e, f, g, a, k, l) : a.td ? a.td(c, d, e, f, g, a, k, l) : a.call(null, c, d, e, f, g, a, k, l);
  }
  var p = Ab(s), v = Bb(s);
  if (9 === b) {
    return a.ud ? a.ud(c, d, e, f, g, a, k, l, p) : a.ud ? a.ud(c, d, e, f, g, a, k, l, p) : a.call(null, c, d, e, f, g, a, k, l, p);
  }
  var s = Ab(v), D = Bb(v);
  if (10 === b) {
    return a.hd ? a.hd(c, d, e, f, g, a, k, l, p, s) : a.hd ? a.hd(c, d, e, f, g, a, k, l, p, s) : a.call(null, c, d, e, f, g, a, k, l, p, s);
  }
  var v = Ab(D), K = Bb(D);
  if (11 === b) {
    return a.jd ? a.jd(c, d, e, f, g, a, k, l, p, s, v) : a.jd ? a.jd(c, d, e, f, g, a, k, l, p, s, v) : a.call(null, c, d, e, f, g, a, k, l, p, s, v);
  }
  var D = Ab(K), M = Bb(K);
  if (12 === b) {
    return a.kd ? a.kd(c, d, e, f, g, a, k, l, p, s, v, D) : a.kd ? a.kd(c, d, e, f, g, a, k, l, p, s, v, D) : a.call(null, c, d, e, f, g, a, k, l, p, s, v, D);
  }
  var K = Ab(M), W = Bb(M);
  if (13 === b) {
    return a.ld ? a.ld(c, d, e, f, g, a, k, l, p, s, v, D, K) : a.ld ? a.ld(c, d, e, f, g, a, k, l, p, s, v, D, K) : a.call(null, c, d, e, f, g, a, k, l, p, s, v, D, K);
  }
  var M = Ab(W), U = Bb(W);
  if (14 === b) {
    return a.md ? a.md(c, d, e, f, g, a, k, l, p, s, v, D, K, M) : a.md ? a.md(c, d, e, f, g, a, k, l, p, s, v, D, K, M) : a.call(null, c, d, e, f, g, a, k, l, p, s, v, D, K, M);
  }
  var W = Ab(U), ha = Bb(U);
  if (15 === b) {
    return a.nd ? a.nd(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W) : a.nd ? a.nd(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W) : a.call(null, c, d, e, f, g, a, k, l, p, s, v, D, K, M, W);
  }
  var U = Ab(ha), hb = Bb(ha);
  if (16 === b) {
    return a.od ? a.od(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U) : a.od ? a.od(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U) : a.call(null, c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U);
  }
  var ha = Ab(hb), Ta = Bb(hb);
  if (17 === b) {
    return a.pd ? a.pd(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha) : a.pd ? a.pd(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha) : a.call(null, c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha);
  }
  var hb = Ab(Ta), eb = Bb(Ta);
  if (18 === b) {
    return a.qd ? a.qd(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha, hb) : a.qd ? a.qd(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha, hb) : a.call(null, c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha, hb);
  }
  Ta = Ab(eb);
  eb = Bb(eb);
  if (19 === b) {
    return a.rd ? a.rd(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha, hb, Ta) : a.rd ? a.rd(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha, hb, Ta) : a.call(null, c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha, hb, Ta);
  }
  var pa = Ab(eb);
  Bb(eb);
  if (20 === b) {
    return a.sd ? a.sd(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha, hb, Ta, pa) : a.sd ? a.sd(c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha, hb, Ta, pa) : a.call(null, c, d, e, f, g, a, k, l, p, s, v, D, K, M, W, U, ha, hb, Ta, pa);
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
    function a(c, d, e, f, g, K) {
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
  }(), e = function(e, k, l, p, s, v) {
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
      return jb(N.i(y, a, c, d));
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
        return jb(N.i(a, b, d, e));
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
          return jb(a.q ? a.q() : a.call(null));
        case 1:
          return jb(a.b ? a.b(b) : a.call(null, b));
        case 2:
          return jb(a.a ? a.a(b, e) : a.call(null, b, e));
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
      }(), d = function(d, k, v, D) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.b ? b.b(c.q ? c.q() : c.call(null)) : b.call(null, c.q ? c.q() : c.call(null))) : a.call(null, b.b ? b.b(c.q ? c.q() : c.call(null)) : b.call(null, c.q ? c.q() : c.call(null)));
          case 1:
            return a.b ? a.b(b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d))) : a.call(null, b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d)));
          case 2:
            return a.b ? a.b(b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k))) : a.call(null, b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k)));
          case 3:
            return a.b ? a.b(b.b ? b.b(c.c ? c.c(d, k, v) : c.call(null, d, k, v)) : b.call(null, c.c ? c.c(d, k, v) : c.call(null, d, k, v))) : a.call(null, b.b ? b.b(c.c ? c.c(d, k, v) : c.call(null, d, k, v)) : b.call(null, c.c ? c.c(d, k, v) : c.call(null, d, k, v)));
          default:
            return l.e(d, k, v, F(arguments, 3));
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
      }(), c = function(c, g, s, v) {
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
    function a(c, d, e, f, v) {
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
      var p = A(b), s = A(c), v = A(e);
      return p && s && v ? G(a.c ? a.c(B(p), B(s), B(v)) : a.call(null, B(p), B(s), B(v)), d.i(a, C(p), C(s), C(v))) : null;
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
          for (var e = tc(c), p = H(e), s = Qd(p), v = 0;;) {
            if (v < p) {
              var D = a.b ? a.b(x.a(e, v)) : a.call(null, x.a(e, v));
              s.add(D);
              v += 1;
            } else {
              break;
            }
          }
          return Td(s.Y(), d.a(a, uc(c)));
        }
        return G(a.b ? a.b(B(c)) : a.call(null, B(c)), d.a(a, C(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, v) {
      var D = null;
      4 < arguments.length && (D = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, D);
    }
    function b(a, c, e, f, g) {
      return d.a(function(b) {
        return N.a(a, b);
      }, function K(a) {
        return new Ld(null, function() {
          var b = d.a(A, a);
          return be(de, b) ? G(d.a(B, b), K(d.a(C, b))) : null;
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
        return Td(g.Y(), se(b, uc(d)));
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
  null != a ? a && (a.p & 4 || a.ii) ? (c = ob.c(oc, nc(a), b), c = pc(c)) : c = ob.c(xb, a, b) : c = ob.c(Vc, Gc, b);
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
        if (k ? k.g & 256 || k.vd || (k.g ? 0 : r(Db, k)) : r(Db, k)) {
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
}(), Be = function Ae(b, c, d) {
  var e = I.c(c, 0, null);
  return(c = yd(c)) ? Yc.c(b, e, Ae(J.a(b, e), c, d)) : Yc.c(b, e, d);
}, Ce = function() {
  function a(a, b, c, d, f, v) {
    var D = I.c(b, 0, null);
    return(b = yd(b)) ? Yc.c(a, D, e.la(J.a(a, D), b, c, d, f, v)) : Yc.c(a, D, c.i ? c.i(J.a(a, D), d, f, v) : c.call(null, J.a(a, D), d, f, v));
  }
  function b(a, b, c, d, f) {
    var v = I.c(b, 0, null);
    return(b = yd(b)) ? Yc.c(a, v, e.m(J.a(a, v), b, c, d, f)) : Yc.c(a, v, c.c ? c.c(J.a(a, v), d, f) : c.call(null, J.a(a, v), d, f));
  }
  function c(a, b, c, d) {
    var f = I.c(b, 0, null);
    return(b = yd(b)) ? Yc.c(a, f, e.i(J.a(a, f), b, c, d)) : Yc.c(a, f, c.a ? c.a(J.a(a, f), d) : c.call(null, J.a(a, f), d));
  }
  function d(a, b, c) {
    var d = I.c(b, 0, null);
    return(b = yd(b)) ? Yc.c(a, d, e.c(J.a(a, d), b, c)) : Yc.c(a, d, c.b ? c.b(J.a(a, d)) : c.call(null, J.a(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, K, M) {
      var W = null;
      6 < arguments.length && (W = F(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, K, W);
    }
    function b(a, c, d, f, g, k, M) {
      var W = I.c(c, 0, null);
      return(c = yd(c)) ? Yc.c(a, W, N.e(e, J.a(a, W), c, d, f, F([g, k, M], 0))) : Yc.c(a, W, N.e(d, J.a(a, W), f, g, k, F([M], 0)));
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
  }(), e = function(e, k, l, p, s, v, D) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, p);
      case 5:
        return b.call(this, e, k, l, p, s);
      case 6:
        return a.call(this, e, k, l, p, s, v);
      default:
        return f.e(e, k, l, p, s, v, F(arguments, 6));
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
h.Gb = function() {
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
h.mb = function(a, b, c) {
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
h.O = function(a, b) {
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
h.yd = function() {
  return 0 < this.k ? new Oc(this, this.k - 1, null) : null;
};
h.wd = function() {
  return x.a(this, 0);
};
h.xd = function() {
  return x.a(this, 1);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Ic.a(this, b);
};
h.fa = function(a, b, c) {
  return Ic.c(this, b, c);
};
h.G = function() {
  return 0 === this.k ? null : 32 > this.k ? F.b(this.B) : t ? Te.c ? Te.c(this, 0, 0) : Te.call(null, this, 0, 0) : null;
};
h.H = function() {
  return this.k;
};
h.ob = function() {
  return 0 < this.k ? x.a(this, this.k - 1) : null;
};
h.pb = function() {
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
h.zd = function(a, b, c) {
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
h.Z = function() {
  return Sc(Ue, this.j);
};
var S = new De(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Ue = new R(null, 0, 5, S, [], 0);
function Ve(a, b) {
  var c = a.length, d = b ? a : mb(a);
  if (32 > c) {
    return new R(null, c, 5, S, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, g = (new R(null, 32, 5, S, e, null)).Gb(null);;) {
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
  this.da = a;
  this.Oa = b;
  this.o = c;
  this.V = d;
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
  if (this.V + 1 < this.Oa.length) {
    var a = Te.i ? Te.i(this.da, this.Oa, this.o, this.V + 1) : Te.call(null, this.da, this.Oa, this.o, this.V + 1);
    return null == a ? null : a;
  }
  return vc(this);
};
h.O = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Ic.a(Ze.c ? Ze.c(this.da, this.o + this.V, H(this.da)) : Ze.call(null, this.da, this.o + this.V, H(this.da)), b);
};
h.fa = function(a, b, c) {
  return Ic.c(Ze.c ? Ze.c(this.da, this.o + this.V, H(this.da)) : Ze.call(null, this.da, this.o + this.V, H(this.da)), b, c);
};
h.G = function() {
  return this;
};
h.W = function() {
  return this.Oa[this.V];
};
h.ga = function() {
  if (this.V + 1 < this.Oa.length) {
    var a = Te.i ? Te.i(this.da, this.Oa, this.o, this.V + 1) : Te.call(null, this.da, this.Oa, this.o, this.V + 1);
    return null == a ? Gc : a;
  }
  return uc(this);
};
h.ed = function() {
  var a = this.Oa.length, a = this.o + a < ub(this.da) ? Te.c ? Te.c(this.da, this.o + a, 0) : Te.call(null, this.da, this.o + a, 0) : null;
  return null == a ? null : a;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return Te.m ? Te.m(this.da, this.Oa, this.o, this.V, b) : Te.call(null, this.da, this.Oa, this.o, this.V, b);
};
h.Z = function() {
  return Sc(Ue, this.j);
};
h.fd = function() {
  return Rd.a(this.Oa, this.V);
};
h.gd = function() {
  var a = this.Oa.length, a = this.o + a < ub(this.da) ? Te.c ? Te.c(this.da, this.o + a, 0) : Te.call(null, this.da, this.o + a, 0) : null;
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
h.mb = function(a, b, c) {
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
h.O = function(a, b) {
  return af.m ? af.m(this.j, Sb(this.Ka, this.end, b), this.start, this.end + 1, null) : af.call(null, this.j, Sb(this.Ka, this.end, b), this.start, this.end + 1, null);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Ic.a(this, b);
};
h.fa = function(a, b, c) {
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
h.ob = function() {
  return x.a(this.Ka, this.end - 1);
};
h.pb = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return af.m ? af.m(this.j, this.Ka, this.start, this.end - 1, null) : af.call(null, this.j, this.Ka, this.start, this.end - 1, null);
};
h.zd = function(a, b, c) {
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
h.Z = function() {
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
h.ke = function(a, b, c) {
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
h.$b = function(a, b, c) {
  return rc(this, b, c);
};
h.qb = function(a, b) {
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
h.rb = function() {
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
h.O = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.G = function() {
  return this;
};
h.W = function() {
  return B(this.Ca);
};
h.ga = function() {
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
h.Z = function() {
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
h.O = function(a, b) {
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
h.ob = function() {
  return B(this.Ca);
};
h.pb = function() {
  if (q(this.Ca)) {
    var a = E(this.Ca);
    return a ? new ef(this.j, this.count - 1, a, this.Sa, null) : new ef(this.j, this.count - 1, A(this.Sa), Ue, null);
  }
  return this;
};
h.W = function() {
  return B(this.Ca);
};
h.ga = function() {
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
h.Z = function() {
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
    return y.a(J.c(b, B(a), hf), Tc(a));
  }, a)) : null : null);
}
function kf(a, b) {
  var c = a.f;
  if (b instanceof Q) {
    a: {
      for (var d = c.length, e = b.$a, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof Q && e === g.$a) {
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
          e = b.ab;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof Ac && e === g.ab) {
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
h.O = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Rc.a(b, this);
};
h.fa = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.H = function() {
  return(this.f.length - this.o) / 2;
};
h.W = function() {
  return new R(null, 2, 5, S, [this.f[this.o], this.f[this.o + 1]], null);
};
h.ga = function() {
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
h.Z = function() {
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
h.Gb = function() {
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
h.mb = function(a, b, c) {
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
h.Yb = function(a, b) {
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
h.O = function(a, b) {
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
h.Z = function() {
  return Xb(pf, this.j);
};
h.vc = function(a, b) {
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
  this.wb = b;
  this.f = c;
  this.p = 56;
  this.g = 258;
}
h = mf.prototype;
h.$b = function(a, b, c) {
  if (q(this.Lb)) {
    a = kf(this, b);
    if (-1 === a) {
      if (this.wb + 2 <= 2 * nf) {
        return this.wb += 2, this.f.push(b), this.f.push(c), this;
      }
      a = rf.a ? rf.a(this.wb, this.f) : rf.call(null, this.wb, this.f);
      return qc(a, b, c);
    }
    c !== this.f[a + 1] && (this.f[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.qb = function(a, b) {
  if (q(this.Lb)) {
    if (b ? b.g & 2048 || b.wf || (b.g ? 0 : r(Jb, b)) : r(Jb, b)) {
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
h.rb = function() {
  if (q(this.Lb)) {
    return this.Lb = !1, new n(null, vd(this.wb), this.f, null);
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
    return vd(this.wb);
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
  this.N = b;
  this.f = c;
}
h = xf.prototype;
h.Qa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = wd(this.N & g - 1);
  if (0 === (this.N & g)) {
    var l = wd(this.N);
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
      a.N |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = yf.Qa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.N >>> d & 1) && (k[d] = null != this.f[e] ? yf.Qa(a, b + 5, Cc(this.f[e]), this.f[e], this.f[e + 1], f) : this.f[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new zf(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), ld(this.f, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, ld(this.f, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.wa = !0, a = this.Nb(a), a.f = b, a.N |= g, a) : null;
  }
  l = this.f[2 * k];
  g = this.f[2 * k + 1];
  return null == l ? (l = g.Qa(a, b + 5, c, d, e, f), l === g ? this : wf.i(this, a, 2 * k + 1, l)) : tf(d, l) ? e === g ? this : wf.i(this, a, 2 * k + 1, e) : t ? (f.wa = !0, wf.la(this, a, 2 * k, null, 2 * k + 1, Af.Hb ? Af.Hb(a, b + 5, l, g, c, d, e) : Af.call(null, a, b + 5, l, g, c, d, e))) : null;
};
h.ec = function() {
  return Bf.b ? Bf.b(this.f) : Bf.call(null, this.f);
};
h.Nb = function(a) {
  if (a === this.C) {
    return this;
  }
  var b = wd(this.N), c = Array(0 > b ? 4 : 2 * (b + 1));
  ld(this.f, 0, c, 0, 2 * b);
  return new xf(a, this.N, c);
};
h.fc = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.N & d)) {
    return this;
  }
  var e = wd(this.N & d - 1), f = this.f[2 * e], g = this.f[2 * e + 1];
  return null == f ? (a = g.fc(a + 5, b, c), a === g ? this : null != a ? new xf(null, this.N, uf.c(this.f, 2 * e + 1, a)) : this.N === d ? null : t ? new xf(null, this.N ^ d, vf(this.f, e)) : null) : tf(c, f) ? new xf(null, this.N ^ d, vf(this.f, e)) : t ? this : null;
};
h.Pa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = wd(this.N & f - 1);
  if (0 === (this.N & f)) {
    var k = wd(this.N);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = yf.Pa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.N >>> c & 1) && (g[c] = null != this.f[d] ? yf.Pa(a + 5, Cc(this.f[d]), this.f[d], this.f[d + 1], e) : this.f[d + 1], d += 2), c += 1;
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
    return new xf(null, this.N | f, a);
  }
  k = this.f[2 * g];
  f = this.f[2 * g + 1];
  return null == k ? (k = f.Pa(a + 5, b, c, d, e), k === f ? this : new xf(null, this.N, uf.c(this.f, 2 * g + 1, k))) : tf(c, k) ? d === f ? this : new xf(null, this.N, uf.c(this.f, 2 * g + 1, d)) : t ? (e.wa = !0, new xf(null, this.N, uf.m(this.f, 2 * g, null, 2 * g + 1, Af.la ? Af.la(a + 5, k, f, b, c, d) : Af.call(null, a + 5, k, f, b, c, d)))) : null;
};
h.hb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.N & e)) {
    return d;
  }
  var f = wd(this.N & e - 1), e = this.f[2 * f], f = this.f[2 * f + 1];
  return null == e ? f.hb(a + 5, b, c, d) : tf(c, e) ? f : t ? d : null;
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
h.ec = function() {
  return Cf.b ? Cf.b(this.f) : Cf.call(null, this.f);
};
h.Nb = function(a) {
  return a === this.C ? this : new zf(a, this.k, mb(this.f));
};
h.fc = function(a, b, c) {
  var d = b >>> a & 31, e = this.f[d];
  if (null != e) {
    a = e.fc(a + 5, b, c);
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
h.hb = function(a, b, c, d) {
  var e = this.f[b >>> a & 31];
  return null != e ? e.hb(a + 5, b, c, d) : d;
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
  this.Za = b;
  this.k = c;
  this.f = d;
}
h = Ef.prototype;
h.Qa = function(a, b, c, d, e, f) {
  if (c === this.Za) {
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
      a === this.C ? (this.f = b, this.k = f, a = this) : a = new Ef(this.C, this.Za, f, b);
      return a;
    }
    return this.f[b + 1] === e ? this : wf.i(this, a, b + 1, e);
  }
  return(new xf(a, 1 << (this.Za >>> b & 31), [null, this, null, null])).Qa(a, b, c, d, e, f);
};
h.ec = function() {
  return Bf.b ? Bf.b(this.f) : Bf.call(null, this.f);
};
h.Nb = function(a) {
  if (a === this.C) {
    return this;
  }
  var b = Array(2 * (this.k + 1));
  ld(this.f, 0, b, 0, 2 * this.k);
  return new Ef(a, this.Za, this.k, b);
};
h.fc = function(a, b, c) {
  a = Df(this.f, this.k, c);
  return-1 === a ? this : 1 === this.k ? null : t ? new Ef(null, this.Za, this.k - 1, vf(this.f, vd(a))) : null;
};
h.Pa = function(a, b, c, d, e) {
  return b === this.Za ? (a = Df(this.f, this.k, c), -1 === a ? (a = 2 * this.k, b = Array(a + 2), ld(this.f, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.wa = !0, new Ef(null, this.Za, this.k + 1, b)) : y.a(this.f[a], d) ? this : new Ef(null, this.Za, this.k, uf.c(this.f, a + 1, d))) : (new xf(null, 1 << (this.Za >>> a & 31), [null, this])).Pa(a, b, c, d, e);
};
h.hb = function(a, b, c, d) {
  a = Df(this.f, this.k, c);
  return 0 > a ? d : tf(c, this.f[a]) ? this.f[a + 1] : t ? d : null;
};
var Af = function() {
  function a(a, b, c, g, k, l, p) {
    var s = Cc(c);
    if (s === k) {
      return new Ef(null, s, 2, [c, g, l, p]);
    }
    var v = new sf;
    return yf.Qa(a, b, s, c, g, v).Qa(a, b, k, l, p, v);
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
  c.Hb = a;
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
h.O = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Rc.a(b, this);
};
h.fa = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.W = function() {
  return null == this.L ? new R(null, 2, 5, S, [this.Ra[this.o], this.Ra[this.o + 1]], null) : B(this.L);
};
h.ga = function() {
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
h.Z = function() {
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
          if (q(g) && (g = g.ec(), q(g))) {
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
h.O = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Rc.a(b, this);
};
h.fa = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.W = function() {
  return B(this.L);
};
h.ga = function() {
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
h.Z = function() {
  return Sc(Gc, this.j);
};
var Cf = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (q(k) && (k = k.ec(), q(k))) {
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
h.Gb = function() {
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
  return null == b ? this.sa ? this.Fa : c : null == this.root ? c : t ? this.root.hb(0, Cc(b), b, c) : null;
};
h.mb = function(a, b, c) {
  if (null == b) {
    return this.sa && c === this.Fa ? this : new Hf(this.j, this.sa ? this.k : this.k + 1, this.root, !0, c, null);
  }
  a = new sf;
  b = (null == this.root ? yf : this.root).Pa(0, Cc(b), b, c, a);
  return b === this.root ? this : new Hf(this.j, a.wa ? this.k + 1 : this.k, b, this.sa, this.Fa, null);
};
h.Yb = function(a, b) {
  return null == b ? this.sa : null == this.root ? !1 : t ? this.root.hb(0, Cc(b), b, md) !== md : null;
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
h.O = function(a, b) {
  return id(b) ? Gb(this, x.a(b, 0), x.a(b, 1)) : ob.c(xb, this, b);
};
h.toString = function() {
  return xc(this);
};
h.G = function() {
  if (0 < this.k) {
    var a = null != this.root ? this.root.ec() : null;
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
h.Z = function() {
  return Xb(of, this.j);
};
h.vc = function(a, b) {
  if (null == b) {
    return this.sa ? new Hf(this.j, this.k - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (t) {
    var c = this.root.fc(0, Cc(b), b);
    return c === this.root ? this : new Hf(this.j, this.k - 1, c, this.sa, this.Fa, null);
  }
  return null;
};
var of = new Hf(null, 0, null, !1, null, 0);
function Xc(a, b) {
  for (var c = a.length, d = 0, e = nc(of);;) {
    if (d < c) {
      var f = d + 1, e = e.$b(null, a[d], b[d]), d = f
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
h.$b = function(a, b, c) {
  return Jf(this, b, c);
};
h.qb = function(a, b) {
  var c;
  a: {
    if (this.C) {
      if (b ? b.g & 2048 || b.wf || (b.g ? 0 : r(Jb, b)) : r(Jb, b)) {
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
h.rb = function() {
  var a;
  if (this.C) {
    this.C = null, a = new Hf(null, this.count, this.root, this.sa, this.Fa, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.I = function(a, b) {
  return null == b ? this.sa ? this.Fa : null : null == this.root ? null : this.root.hb(0, Cc(b), b);
};
h.J = function(a, b, c) {
  return null == b ? this.sa ? this.Fa : c : null == this.root ? c : this.root.hb(0, Cc(b), b, c);
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
var T = function() {
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
}(), Kf = function() {
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
function Lf(a, b) {
  this.ua = a;
  this.oa = b;
  this.p = 0;
  this.g = 32374988;
}
h = Lf.prototype;
h.K = function() {
  return Nc(this);
};
h.ra = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.wc || (a.g ? 0 : r(Cb, a)) : r(Cb, a)) ? this.ua.ra(null) : E(this.ua);
  return null == a ? null : new Lf(a, this.oa);
};
h.O = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Rc.a(b, this);
};
h.fa = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.W = function() {
  return this.ua.W(null).wd();
};
h.ga = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.wc || (a.g ? 0 : r(Cb, a)) : r(Cb, a)) ? this.ua.ra(null) : E(this.ua);
  return null != a ? new Lf(a, this.oa) : Gc;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Lf(this.ua, b);
};
h.s = function() {
  return this.oa;
};
h.Z = function() {
  return Sc(Gc, this.oa);
};
function Mf(a) {
  return(a = A(a)) ? new Lf(a, null) : null;
}
function Bd(a) {
  return Kb(a);
}
function Pf(a, b) {
  this.ua = a;
  this.oa = b;
  this.p = 0;
  this.g = 32374988;
}
h = Pf.prototype;
h.K = function() {
  return Nc(this);
};
h.ra = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.wc || (a.g ? 0 : r(Cb, a)) : r(Cb, a)) ? this.ua.ra(null) : E(this.ua);
  return null == a ? null : new Pf(a, this.oa);
};
h.O = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Rc.a(b, this);
};
h.fa = function(a, b, c) {
  return Rc.c(b, c, this);
};
h.G = function() {
  return this;
};
h.W = function() {
  return this.ua.W(null).xd();
};
h.ga = function() {
  var a = this.ua, a = (a ? a.g & 128 || a.wc || (a.g ? 0 : r(Cb, a)) : r(Cb, a)) ? this.ua.ra(null) : E(this.ua);
  return null != a ? new Pf(a, this.oa) : Gc;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new Pf(this.ua, b);
};
h.s = function() {
  return this.oa;
};
h.Z = function() {
  return Sc(Gc, this.oa);
};
function Qf(a) {
  return(a = A(a)) ? new Pf(a, null) : null;
}
function Cd(a) {
  return Lb(a);
}
var Rf = function() {
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
function Sf(a, b, c) {
  this.j = a;
  this.gb = b;
  this.n = c;
  this.p = 4;
  this.g = 15077647;
}
h = Sf.prototype;
h.Gb = function() {
  return new Tf(nc(this.gb));
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
  return Fb(this.gb, b) ? b : c;
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
h.O = function(a, b) {
  return new Sf(this.j, Yc.c(this.gb, b, null), null);
};
h.toString = function() {
  return xc(this);
};
h.G = function() {
  return Mf(this.gb);
};
h.je = function(a, b) {
  return new Sf(this.j, Ib(this.gb, b), null);
};
h.H = function() {
  return ub(this.gb);
};
h.D = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.g & 4096 || b.oi ? !0 : b.g ? !1 : r(Nb, b) : r(Nb, b)) && H(c) === H(b) && be(function(a) {
    return pd(c, a);
  }, b);
};
h.t = function(a, b) {
  return new Sf(b, this.gb, this.n);
};
h.pa = !0;
h.ka = function() {
  return new Sf(this.j, this.gb, this.n);
};
h.s = function() {
  return this.j;
};
h.Z = function() {
  return Sc(Uf, this.j);
};
var Uf = new Sf(null, pf, 0);
function Tf(a) {
  this.bb = a;
  this.g = 259;
  this.p = 136;
}
h = Tf.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Eb.c(this.bb, c, md) === md ? null : c;
      case 3:
        return Eb.c(this.bb, c, md) === md ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(mb(b)));
};
h.b = function(a) {
  return Eb.c(this.bb, a, md) === md ? null : a;
};
h.a = function(a, b) {
  return Eb.c(this.bb, a, md) === md ? b : a;
};
h.I = function(a, b) {
  return Eb.c(this, b, null);
};
h.J = function(a, b, c) {
  return Eb.c(this.bb, b, md) === md ? c : b;
};
h.H = function() {
  return H(this.bb);
};
h.qb = function(a, b) {
  this.bb = qc(this.bb, b, null);
  return this;
};
h.rb = function() {
  return new Sf(null, pc(this.bb), null);
};
function Vf(a) {
  a = A(a);
  if (null == a) {
    return Uf;
  }
  if (a instanceof Fc && 0 === a.o) {
    a = a.f;
    a: {
      for (var b = 0, c = nc(Uf);;) {
        if (b < a.length) {
          var d = b + 1, c = c.qb(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.rb(null);
  }
  if (t) {
    for (d = nc(Uf);;) {
      if (null != a) {
        b = a.ra(null), d = d.qb(null, a.W(null)), a = b;
      } else {
        return d.rb(null);
      }
    }
  } else {
    return null;
  }
}
function Jd(a) {
  if (a && (a.p & 4096 || a.yf)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
function Wf(a, b) {
  for (var c = nc(pf), d = A(a), e = A(b);;) {
    if (d && e) {
      var f = B(d), g = B(e), c = qc(c, f, g), d = E(d), e = E(e)
    } else {
      return pc(c);
    }
  }
}
var Xf = function() {
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
}(), Zf = function Yf(b, c) {
  return new Ld(null, function() {
    var d = A(c);
    return d ? q(b.b ? b.b(B(d)) : b.call(null, B(d))) ? G(B(d), Yf(b, C(d))) : null : null;
  }, null, null);
};
function $f(a, b, c, d, e) {
  this.j = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.n = e;
  this.p = 0;
  this.g = 32375006;
}
h = $f.prototype;
h.K = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Nc(this);
};
h.ra = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new $f(this.j, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new $f(this.j, this.start + this.step, this.end, this.step, null) : null;
};
h.O = function(a, b) {
  return G(b, this);
};
h.toString = function() {
  return xc(this);
};
h.ea = function(a, b) {
  return Ic.a(this, b);
};
h.fa = function(a, b, c) {
  return Ic.c(this, b, c);
};
h.G = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.H = function() {
  return jb(cc(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
h.W = function() {
  return null == cc(this) ? null : this.start;
};
h.ga = function() {
  return null != cc(this) ? new $f(this.j, this.start + this.step, this.end, this.step, null) : Gc;
};
h.D = function(a, b) {
  return Pc(this, b);
};
h.t = function(a, b) {
  return new $f(b, this.start, this.end, this.step, this.n);
};
h.pa = !0;
h.ka = function() {
  return new $f(this.j, this.start, this.end, this.step, this.n);
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
h.Z = function() {
  return Sc(Gc, this.j);
};
var ag = function() {
  function a(a, b, c) {
    return new $f(null, a, b, c, null);
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
}(), bg = function() {
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
}(), cg = function() {
  function a(a, b) {
    bg.a(a, b);
    return b;
  }
  function b(a) {
    bg.b(a);
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
function dg(a, b) {
  var c = a.exec(b);
  return y.a(B(c), b) ? 1 === H(c) ? B(c) : We(c) : null;
}
function eg(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === H(c) ? B(c) : We(c);
}
function fg(a) {
  var b = eg(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  I.c(b, 0, null);
  a = I.c(b, 1, null);
  b = I.c(b, 2, null);
  return RegExp(b, a);
}
function gg(a, b, c, d, e, f, g) {
  var k = $a;
  try {
    $a = null == $a ? null : $a - 1;
    if (null != $a && 0 > $a) {
      return hc(a, "#");
    }
    hc(a, c);
    A(g) && (b.c ? b.c(B(g), a, f) : b.call(null, B(g), a, f));
    for (var l = E(g), p = gb.b(f);l && (null == p || 0 !== p);) {
      hc(a, d);
      b.c ? b.c(B(l), a, f) : b.call(null, B(l), a, f);
      var s = E(l);
      c = p - 1;
      l = s;
      p = c;
    }
    q(gb.b(f)) && (hc(a, d), b.c ? b.c("...", a, f) : b.call(null, "...", a, f));
    return hc(a, e);
  } finally {
    $a = k;
  }
}
var hg = function() {
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
}(), ig = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function jg(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return ig[a];
  })), w('"')].join("");
}
var mg = function kg(b, c, d) {
  if (null == b) {
    return hc(c, "nil");
  }
  if (void 0 === b) {
    return hc(c, "#\x3cundefined\x3e");
  }
  if (t) {
    q(function() {
      var c = J.a(d, db);
      return q(c) ? (c = b ? b.g & 131072 || b.xf ? !0 : b.g ? !1 : r(Ub, b) : r(Ub, b)) ? bd(b) : c : c;
    }()) && (hc(c, "^"), kg(bd(b), c, d), hc(c, " "));
    if (null == b) {
      return hc(c, "nil");
    }
    if (b.Q) {
      return b.U(b, c, d);
    }
    if (b && (b.g & 2147483648 || b.$)) {
      return b.F(null, c, d);
    }
    if (kb(b) === Boolean || "number" === typeof b) {
      return hc(c, "" + w(b));
    }
    if (null != b && b.constructor === Object) {
      return hc(c, "#js "), lg.i ? lg.i(he.a(function(c) {
        return new R(null, 2, 5, S, [Kd.b(c), b[c]], null);
      }, kd(b)), kg, c, d) : lg.call(null, he.a(function(c) {
        return new R(null, 2, 5, S, [Kd.b(c), b[c]], null);
      }, kd(b)), kg, c, d);
    }
    if (b instanceof Array) {
      return gg(c, kg, "#js [", " ", "]", d, b);
    }
    if (ga(b)) {
      return q(cb.b(d)) ? hc(c, jg(b)) : hc(c, b);
    }
    if ($c(b)) {
      return hg.e(c, F(["#\x3c", "" + w(b), "\x3e"], 0));
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
      return hg.e(c, F(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? hg.e(c, F(['#"', b.source, '"'], 0)) : (b ? b.g & 2147483648 || b.$ || (b.g ? 0 : r(ic, b)) : r(ic, b)) ? jc(b, c, d) : t ? hg.e(c, F(["#\x3c", "" + w(b), "\x3e"], 0)) : null;
  }
  return null;
};
function ng(a) {
  var b = ab();
  if (fd(a)) {
    b = "";
  } else {
    var c = w, d = new Xa;
    a: {
      var e = new wc(d);
      mg(B(a), e, b);
      a = A(E(a));
      for (var f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.w(null, k);
          hc(e, " ");
          mg(l, e, b);
          k += 1;
        } else {
          if (a = A(a)) {
            f = a, jd(f) ? (a = tc(f), g = uc(f), f = a, l = H(a), a = g, g = l) : (l = B(f), hc(e, " "), mg(l, e, b), a = E(f), f = null, g = 0), k = 0;
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
var og = function() {
  function a(a) {
    var c = null;
    0 < arguments.length && (c = F(Array.prototype.slice.call(arguments, 0), 0));
    return ng(c);
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return ng(a);
  };
  a.e = function(a) {
    return ng(a);
  };
  return a;
}(), pg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = ng(a);
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
function lg(a, b, c, d) {
  return gg(c, function(a, c, d) {
    b.c ? b.c(Kb(a), c, d) : b.call(null, Kb(a), c, d);
    hc(c, " ");
    return b.c ? b.c(Lb(a), c, d) : b.call(null, Lb(a), c, d);
  }, "{", ", ", "}", d, A(a));
}
Lf.prototype.$ = !0;
Lf.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
Fc.prototype.$ = !0;
Fc.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
$e.prototype.$ = !0;
$e.prototype.F = function(a, b, c) {
  return gg(b, mg, "[", " ", "]", c, this);
};
Sd.prototype.$ = !0;
Sd.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
n.prototype.$ = !0;
n.prototype.F = function(a, b, c) {
  return lg(this, mg, b, c);
};
ef.prototype.$ = !0;
ef.prototype.F = function(a, b, c) {
  return gg(b, mg, "#queue [", " ", "]", c, A(this));
};
Ld.prototype.$ = !0;
Ld.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
Oc.prototype.$ = !0;
Oc.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
Ff.prototype.$ = !0;
Ff.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
Ye.prototype.$ = !0;
Ye.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
Hf.prototype.$ = !0;
Hf.prototype.F = function(a, b, c) {
  return lg(this, mg, b, c);
};
Sf.prototype.$ = !0;
Sf.prototype.F = function(a, b, c) {
  return gg(b, mg, "#{", " ", "}", c, this);
};
R.prototype.$ = !0;
R.prototype.F = function(a, b, c) {
  return gg(b, mg, "[", " ", "]", c, this);
};
Dd.prototype.$ = !0;
Dd.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
lf.prototype.$ = !0;
lf.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
Ed.prototype.$ = !0;
Ed.prototype.F = function(a, b) {
  return hc(b, "()");
};
Hd.prototype.$ = !0;
Hd.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
$f.prototype.$ = !0;
$f.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
Gf.prototype.$ = !0;
Gf.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
Pf.prototype.$ = !0;
Pf.prototype.F = function(a, b, c) {
  return gg(b, mg, "(", " ", ")", c, this);
};
R.prototype.tc = !0;
R.prototype.uc = function(a, b) {
  return qd.a(this, b);
};
$e.prototype.tc = !0;
$e.prototype.uc = function(a, b) {
  return qd.a(this, b);
};
Q.prototype.tc = !0;
Q.prototype.uc = function(a, b) {
  return yc(this, b);
};
Ac.prototype.tc = !0;
Ac.prototype.uc = function(a, b) {
  return yc(this, b);
};
function qg(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.xh = c;
  this.Xb = d;
  this.g = 2153938944;
  this.p = 2;
}
h = qg.prototype;
h.K = function() {
  return ka(this);
};
h.me = function(a, b, c) {
  a = A(this.Xb);
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
h.le = function(a, b, c) {
  return this.Xb = Yc.c(this.Xb, b, c);
};
h.ne = function(a, b) {
  return this.Xb = Zc.a(this.Xb, b);
};
h.F = function(a, b, c) {
  hc(b, "#\x3cAtom: ");
  mg(this.state, b, c);
  return hc(b, "\x3e");
};
h.s = function() {
  return this.j;
};
h.Fb = function() {
  return this.state;
};
h.D = function(a, b) {
  return this === b;
};
var sg = function() {
  function a(a) {
    return new qg(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = P(c) ? N.a(T, c) : c, e = J.a(d, rg), d = J.a(d, db);
      return new qg(a, d, e, null);
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
function tg(a, b) {
  var c = a.xh;
  if (null != c && !q(c.b ? c.b(b) : c.call(null, b))) {
    throw Error([w("Assert failed: "), w("Validator rejected reference state"), w("\n"), w(og.e(F([Gd(new Ac(null, "validate", "validate", 1233162959, null), new Ac(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  null != a.Xb && kc(a, c, b);
  return b;
}
var ug = function() {
  function a(a, b, c, d, e) {
    return tg(a, b.i ? b.i(a.state, c, d, e) : b.call(null, a.state, c, d, e));
  }
  function b(a, b, c, d) {
    return tg(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d));
  }
  function c(a, b, c) {
    return tg(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c));
  }
  function d(a, b) {
    return tg(a, b.b ? b.b(a.state) : b.call(null, a.state));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, K) {
      var M = null;
      5 < arguments.length && (M = F(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, M);
    }
    function b(a, c, d, e, f, g) {
      return tg(a, N.e(c, a.state, d, e, f, F([g], 0)));
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
  }(), e = function(e, k, l, p, s, v) {
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
}(), vg = null, wg = function() {
  function a(a) {
    null == vg && (vg = sg.b(0));
    return Dc.b([w(a), w(ug.a(vg, Hc))].join(""));
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
}(), xg = {};
function yg(a) {
  if (a ? a.uf : a) {
    return a.uf(a);
  }
  var b;
  b = yg[m(null == a ? null : a)];
  if (!b && (b = yg._, !b)) {
    throw u("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function zg(a) {
  return(a ? q(q(null) ? null : a.tf) || (a.za ? 0 : r(xg, a)) : r(xg, a)) ? yg(a) : "string" === typeof a || "number" === typeof a || a instanceof Q || a instanceof Ac ? Ag.b ? Ag.b(a) : Ag.call(null, a) : og.e(F([a], 0));
}
var Ag = function Bg(b) {
  if (null == b) {
    return null;
  }
  if (b ? q(q(null) ? null : b.tf) || (b.za ? 0 : r(xg, b)) : r(xg, b)) {
    return yg(b);
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
        c[zg(k)] = Bg(g);
        f += 1;
      } else {
        if (b = A(b)) {
          jd(b) ? (e = tc(b), b = uc(b), d = e, e = H(e)) : (e = B(b), d = I.c(e, 0, null), e = I.c(e, 1, null), c[zg(d)] = Bg(e), b = E(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (gd(b)) {
    c = [];
    b = A(he.a(Bg, b));
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
}, Cg = {};
function Dg(a, b) {
  if (a ? a.sf : a) {
    return a.sf(a, b);
  }
  var c;
  c = Dg[m(null == a ? null : a)];
  if (!c && (c = Dg._, !c)) {
    throw u("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var Fg = function() {
  function a(a) {
    return b.e(a, F([new n(null, 1, [Eg, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? q(q(null) ? null : a.ji) || (a.za ? 0 : r(Cg, a)) : r(Cg, a)) {
        return Dg(a, N.a(Kf, c));
      }
      if (A(c)) {
        var d = P(c) ? N.a(T, c) : c, e = J.a(d, Eg);
        return function(a, b, c, d) {
          return function M(e) {
            return P(e) ? cg.b(he.a(M, e)) : gd(e) ? xe(null == e ? null : vb(e), he.a(M, e)) : e instanceof Array ? We(he.a(M, e)) : kb(e) === Object ? xe(pf, function() {
              return function(a, b, c, d) {
                return function pa(f) {
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
                            return b ? Td(g.Y(), pa(uc(a))) : Td(g.Y(), null);
                          }
                          g = B(a);
                          return G(new R(null, 2, 5, S, [d.b ? d.b(g) : d.call(null, g), M(e[g])], null), pa(C(a)));
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
function Gg(a) {
  this.Zc = a;
  this.p = 0;
  this.g = 2153775104;
}
h = Gg.prototype;
h.K = function() {
  return Ca(og.e(F([this], 0)));
};
h.F = function(a, b) {
  return hc(b, [w('#uuid "'), w(this.Zc), w('"')].join(""));
};
h.D = function(a, b) {
  return b instanceof Gg && this.Zc === b.Zc;
};
h.pa = !0;
h.ka = function() {
  return new Gg(this.Zc);
};
function Hg(a, b) {
  this.message = a;
  this.data = b;
}
Hg.prototype = Error();
Hg.prototype.constructor = Hg;
var Ig = function() {
  function a(a, b) {
    return new Hg(a, b);
  }
  function b(a, b) {
    return new Hg(a, b);
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
var Jg = new Q(null, "labels", "labels"), Kg = new Q(null, "const-count", "const-count"), Lg = new Q(null, "view", "view"), fb = new Q(null, "dup", "dup"), Mg = new Q(null, "path", "path"), Ng = new Q(null, "href", "href"), Og = new Q(null, "portfolio-companies", "portfolio-companies"), Pg = new Q(null, "query-params", "query-params"), Qg = new Q(null, "portfolio_company_count", "portfolio_company_count"), z = new Q(null, "default", "default"), Rg = new Q(null, "recur", "recur"), Sg = new Q(null, 
"text", "text"), Tg = new Q(null, "xml", "xml"), Ug = new Q(null, "data", "data"), Vg = new Q(null, "uk_constituencies", "uk_constituencies"), Wg = new Q(null, "ul", "ul"), Xg = new Q(null, "date", "date"), Yg = new Q(null, "init-state", "init-state"), Zg = new Q(null, "all-portfolio-companies-summary", "all-portfolio-companies-summary"), $g = new Q(null, "company_no", "company_no"), ah = new Q(null, "finally-block", "finally-block"), bh = new Q(null, "boundarylinecolls", "boundarylinecolls"), ch = 
new Q(null, "div.box.box-first", "div.box.box-first"), dh = new Q(null, "selection-portfolio-company-site-stats", "selection-portfolio-company-site-stats"), eh = new Q(null, "latest_employee_count_delta", "latest_employee_count_delta"), fh = new Q(null, "latest_accounts_date", "latest_accounts_date"), gh = new Q(null, "records", "records"), hh = new Q(null, "search", "search"), ih = new Q(null, "edn", "edn"), lh = new Q(null, "selection-portfolio-company-site-account-timelines", "selection-portfolio-company-site-account-timelines"), 
mh = new Q(null, "employee-count-delta-val", "employee-count-delta-val"), nh = new Q(null, "raw", "raw"), oh = new Q(null, "boundarylines", "boundarylines"), ph = new Q(null, "catch-block", "catch-block"), qh = new Q(null, "coordinates", "coordinates"), rh = new Q(null, "map", "map"), sh = new Q(null, "width", "width"), th = new Q(null, "state", "state"), uh = new Q(null, "div", "div"), vh = new Q(null, "collection_id", "collection_id"), wh = new Q(null, "link-fn", "link-fn"), xh = new Q(null, "uk-constituencies", 
"uk-constituencies"), yh = new Q(null, "constituency", "constituency"), zh = new Q(null, "boundaryline_id", "boundaryline_id"), Ah = new Q(null, "react-key", "react-key"), Bh = new Q(null, "turnover-delta-val", "turnover-delta-val"), Ch = new Q(null, "total", "total"), Dh = new Q("om.core", "index", "om.core/index"), Eh = new Q(null, "icon", "icon"), Fh = new Q(null, "markers", "markers"), Gh = new Q(null, "fetch-boundaryline-fn", "fetch-boundaryline-fn"), Hh = new Q(null, "y", "y"), Ih = new Q(null, 
"chart", "chart"), Jh = new Q(null, "content", "content"), Kh = new Q(null, "key", "key"), Lh = new Q(null, "class", "class"), Mh = new Q(null, "x", "x"), Nh = new Q(null, "mean", "mean"), Oh = new Q(null, "prefix", "prefix"), Ph = new Q(null, "selector", "selector"), Qh = new Q(null, "portfolio-company", "portfolio-company"), Rh = new Q(null, "weight", "weight"), Sh = new Q(null, "opacity", "opacity"), Th = new Q(null, "comm", "comm"), Uh = new Q(null, "selection", "selection"), Vh = new Q(null, 
"leaflet-map", "leaflet-map"), Eg = new Q(null, "keywordize-keys", "keywordize-keys"), Wh = new Q(null, "selection-portfolio-company-sites", "selection-portfolio-company-sites"), Xh = new Q(null, "name", "name"), Yh = new Q(null, "div.tbl", "div.tbl"), Zh = new Q(null, "selected-idx", "selected-idx"), $h = new Q(null, "median", "median"), ai = new Q(null, "header", "header"), bi = new Q(null, "postcode", "postcode"), ci = new Q(null, "tolerance", "tolerance"), di = new Q(null, "latest_turnover", 
"latest_turnover"), ei = new Q(null, "iconAnchor", "iconAnchor"), fi = new Q(null, "color", "color"), gi = new Q(null, "fillOpacity", "fillOpacity"), hi = new Q(null, "pc-count", "pc-count"), ii = new Q(null, "y0-title", "y0-title"), bb = new Q(null, "flush-on-newline", "flush-on-newline"), ji = new Q(null, "click", "click"), ki = new Q(null, "selection-portfolio-company-locations", "selection-portfolio-company-locations"), li = new Q(null, "location", "location"), mi = new Q(null, "bounds", "bounds"), 
ni = new Q(null, "path-selections", "path-selections"), oi = new Q(null, "investor-companies", "investor-companies"), pi = new Q(null, "employee-count-delta", "employee-count-delta"), qi = new Q(null, "turnover-delta", "turnover-delta"), ri = new Q(null, "investor_company_count", "investor_company_count"), si = new Q(null, "catch-exception", "catch-exception"), ti = new Q(null, "employee-count", "employee-count"), ui = new Q(null, "pan-pending", "pan-pending"), vi = new Q(null, "path-highlights", 
"path-highlights"), wi = new Q(null, "continue-block", "continue-block"), xi = new Q(null, "investor_company_uid", "investor_company_uid"), yi = new Q(null, "uk-constituencies-rtree", "uk-constituencies-rtree"), zi = new Q(null, "properties", "properties"), Ai = new Q(null, "prev", "prev"), Bi = new Q(null, "employee_count", "employee_count"), Ci = new Q(null, "clojure", "clojure"), Di = new Q(null, "constituencies", "constituencies"), Ei = new Q(null, "div.box.box-last", "div.box.box-last"), Fi = 
new Q(null, "plus?", "plus?"), Gi = new Q(null, "app-state", "app-state"), Hi = new Q(null, "curr", "curr"), Ii = new Q(null, "title", "title"), Ji = new Q(null, "constituency_count", "constituency_count"), Ki = new Q(null, "popupAnchor", "popupAnchor"), Li = new Q(null, "accepts", "accepts"), Mi = new Q(null, "size", "size"), Ni = new Q(null, "route-select", "route-select"), Oi = new Q(null, "fill", "fill"), Pi = new Q(null, "div.tbl-row", "div.tbl-row"), Qi = new Q(null, "min-zoom", "min-zoom"), 
Ri = new Q(null, "paths", "paths"), Si = new Q(null, "div.grid", "div.grid"), Ti = new Q(null, "dec", "dec"), Ui = new Q(null, "h", "h"), Vi = new Q(null, "latest_turnover_delta", "latest_turnover_delta"), gb = new Q(null, "print-length", "print-length"), Wi = new Q(null, "categories", "categories"), Xi = new Q(null, "ic-count", "ic-count"), Yi = new Q(null, "turnover", "turnover"), Zi = new Q(null, "search-results", "search-results"), $i = new Q(null, "uid", "uid"), aj = new Q(null, "type", "type"), 
bj = new Q(null, "all-portfolio-company-site-stats", "all-portfolio-company-site-stats"), cj = new Q(null, "textarea", "textarea"), dj = new Q(null, "yAxis", "yAxis"), ej = new Q(null, "small", "small"), t = new Q(null, "else", "else"), hj = new Q(null, "htmlFor", "htmlFor"), ij = new Q(null, "sort", "sort"), jj = new Q("cljs.core", "not-found", "cljs.core/not-found"), kj = new Q(null, "route-change-view", "route-change-view"), cb = new Q(null, "readably", "readably"), lj = new Q(null, "converters", 
"converters"), mj = new Q(null, "xAxis", "xAxis"), nj = new Q(null, "sf", "sf"), oj = new Q(null, "zoom", "zoom"), pj = new Q(null, "highlighted", "highlighted"), qj = new Q(null, "web_url", "web_url"), rg = new Q(null, "validator", "validator"), db = new Q(null, "meta", "meta"), rj = new Q(null, "stats", "stats"), sj = new Q(null, "latest_employee_count", "latest_employee_count"), tj = new Q(null, "averages", "averages"), uj = new Q(null, "w", "w"), vj = new Q(null, "opts", "opts"), wj = new Q(null, 
"series", "series"), xj = new Q(null, "turnover_delta", "turnover_delta"), yj = new Q(null, "input", "input"), zj = new Q(null, "employee_count_delta", "employee_count_delta"), Aj = new Q(null, "div.tbl-cell", "div.tbl-cell"), Bj = new Q(null, "for", "for"), Cj = new Q(null, "mp", "mp"), Dj = new Q(null, "y1-title", "y1-title"), Ej = new Q(null, "investor_companies", "investor_companies"), Fj = new Q(null, "className", "className"), Gj = new Q(null, "investor-company", "investor-company"), Hj = new Q(null, 
"leaflet-path", "leaflet-path"), Ij = new Q(null, "!latest_turnover", "!latest_turnover"), Jj = new Q(null, "div.tbl-cell.charts", "div.tbl-cell.charts"), Kj = new Q(null, "change-view", "change-view"), Lj = new Q(null, "fn", "fn"), Mj = new Q(null, "id", "id"), Nj = new Q(null, "value", "value"), Oj = new Q(null, "portfolio_company_site_uid", "portfolio_company_site_uid"), Pj = new Q(null, "selected", "selected"), Qj = new Q(null, "select", "select"), Rj = new Q(null, "description", "description"), 
Sj = new Q(null, "compact_name", "compact_name"), Tj = new Q(null, "iconSize", "iconSize"), Uj = new Q(null, "tag", "tag"), Vj = new Q(null, "li", "li"), Wj = new Q(null, "benchmark", "benchmark"), Xj = new Q(null, "contents", "contents"), Yj = new Q(null, "path-fn", "path-fn"), Zj = new Q(null, "rotation", "rotation"), ak = new Q(null, "political_party", "political_party"), bk = new Q(null, "portfolio_companies", "portfolio_companies"), ck = new Q(null, "selection-portfolio-company-sites-by-company", 
"selection-portfolio-company-sites-by-company");
function dk(a, b, c) {
  a = a.search(Ag(new n(null, 4, [Mh, b, Hh, c, uj, 0, Ui, 0], null)));
  return te(function(a) {
    return gju.Qi(Ag(new n(null, 2, [aj, "Point", qh, new R(null, 2, 5, S, [b, c], null)], null)), a.vi);
  }, a);
}
;function ek() {
  0 != fk && (gk[ka(this)] = this);
}
var fk = 0, gk = {};
ek.prototype.Be = !1;
ek.prototype.ac = function() {
  if (!this.Be && (this.Be = !0, this.Ba(), 0 != fk)) {
    var a = ka(this);
    delete gk[a];
  }
};
ek.prototype.Ba = function() {
  if (this.lc) {
    for (;this.lc.length;) {
      this.lc.shift()();
    }
  }
};
function hk(a) {
  a && "function" == typeof a.ac && a.ac();
}
;var ik, jk, kk, lk;
function mk() {
  return ba.navigator ? ba.navigator.userAgent : null;
}
lk = kk = jk = ik = !1;
var nk;
if (nk = mk()) {
  var ok = ba.navigator;
  ik = 0 == nk.indexOf("Opera");
  jk = !ik && -1 != nk.indexOf("MSIE");
  kk = !ik && -1 != nk.indexOf("WebKit");
  lk = !ik && !kk && "Gecko" == ok.product;
}
var pk = ik, qk = jk, rk = lk, sk = kk;
function tk() {
  var a = ba.document;
  return a ? a.documentMode : void 0;
}
var uk;
a: {
  var vk = "", wk;
  if (pk && ba.opera) {
    var xk = ba.opera.version, vk = "function" == typeof xk ? xk() : xk
  } else {
    if (rk ? wk = /rv\:([^\);]+)(\)|;)/ : qk ? wk = /MSIE\s+([^\);]+)(\)|;)/ : sk && (wk = /WebKit\/(\S+)/), wk) {
      var yk = wk.exec(mk()), vk = yk ? yk[1] : ""
    }
  }
  if (qk) {
    var zk = tk();
    if (zk > parseFloat(vk)) {
      uk = String(zk);
      break a;
    }
  }
  uk = vk;
}
var Ak = {};
function Bk(a) {
  var b;
  if (!(b = Ak[a])) {
    b = 0;
    for (var c = va(String(uk)).split("."), d = va(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = l.exec(g) || ["", "", ""], v = p.exec(k) || ["", "", ""];
        if (0 == s[0].length && 0 == v[0].length) {
          break;
        }
        b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == v[2].length) ? -1 : (0 == s[2].length) > (0 == v[2].length) ? 1 : 0) || (s[2] < v[2] ? -1 : s[2] > v[2] ? 1 : 0);
      } while (0 == b);
    }
    b = Ak[a] = 0 <= b;
  }
  return b;
}
var Ck = ba.document, Dk = Ck && qk ? tk() || ("CSS1Compat" == Ck.compatMode ? parseInt(uk, 10) : 5) : void 0;
var Ek = !qk || qk && 9 <= Dk, Fk = qk && !Bk("9");
!sk || Bk("528");
rk && Bk("1.9b") || qk && Bk("8") || pk && Bk("9.5") || sk && Bk("528");
rk && !Bk("8") || qk && Bk("9");
function Gk(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
}
h = Gk.prototype;
h.Ba = function() {
};
h.ac = function() {
};
h.Ub = !1;
h.defaultPrevented = !1;
h.Wc = !0;
h.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Wc = !1;
};
function Hk(a) {
  Hk[" "](a);
  return a;
}
Hk[" "] = ea;
function Ik(a, b) {
  a && this.Hc(a, b);
}
ta(Ik, Gk);
h = Ik.prototype;
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
h.Gd = null;
h.Hc = function(a, b) {
  var c = this.type = a.type;
  Gk.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (rk) {
      var e;
      a: {
        try {
          Hk(d.nodeName);
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
  this.offsetX = sk || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = sk || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  this.Gd = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Ub;
};
h.preventDefault = function() {
  Ik.Bb.preventDefault.call(this);
  var a = this.Gd;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Fk) {
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
var Jk = 0;
function Kk() {
}
h = Kk.prototype;
h.key = 0;
h.zb = !1;
h.rc = !1;
h.Hc = function(a, b, c, d, e, f) {
  if (ia(a)) {
    this.Ke = !0;
  } else {
    if (a && a.handleEvent && ia(a.handleEvent)) {
      this.Ke = !1;
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.ib = a;
  this.Ve = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Pb = f;
  this.rc = !1;
  this.key = ++Jk;
  this.zb = !1;
};
h.handleEvent = function(a) {
  return this.Ke ? this.ib.call(this.Pb || this.src, a) : this.ib.handleEvent.call(this.ib, a);
};
var Lk = {}, Mk = {}, Nk = {}, Ok = {};
function Pk(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Pk(a, b[f], c, d, e);
    }
    return null;
  }
  a = Qk(a, b, c, !1, d, e);
  b = a.key;
  Lk[b] = a;
  return b;
}
function Qk(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var g = Mk;
  b in g || (g[b] = {Aa:0, Ia:0});
  g = g[b];
  e in g || (g[e] = {Aa:0, Ia:0}, g.Aa++);
  var g = g[e], k = ka(a), l;
  g.Ia++;
  if (g[k]) {
    l = g[k];
    for (var p = 0;p < l.length;p++) {
      if (g = l[p], g.ib == c && g.Pb == f) {
        if (g.zb) {
          break;
        }
        d || (l[p].rc = !1);
        return l[p];
      }
    }
  } else {
    l = g[k] = [], g.Aa++;
  }
  p = Rk();
  g = new Kk;
  g.Hc(c, p, a, b, e, f);
  g.rc = d;
  p.src = a;
  p.ib = g;
  l.push(g);
  Nk[k] || (Nk[k] = []);
  Nk[k].push(g);
  a.addEventListener ? a != ba && a.Ae || a.addEventListener(b, p, e) : a.attachEvent(b in Ok ? Ok[b] : Ok[b] = "on" + b, p);
  return g;
}
function Rk() {
  var a = Sk, b = Ek ? function(c) {
    return a.call(b.src, b.ib, c);
  } : function(c) {
    c = a.call(b.src, b.ib, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function Tk(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Tk(a, b[f], c, d, e);
    }
    return null;
  }
  a = Qk(a, b, c, !0, d, e);
  b = a.key;
  Lk[b] = a;
  return b;
}
function Uk(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      Uk(a, b[f], c, d, e);
    }
  } else {
    d = !!d;
    a: {
      f = Mk;
      if (b in f && (f = f[b], d in f && (f = f[d], a = ka(a), f[a]))) {
        a = f[a];
        break a;
      }
      a = null;
    }
    if (a) {
      for (f = 0;f < a.length;f++) {
        if (a[f].ib == c && a[f].capture == d && a[f].Pb == e) {
          Vk(a[f].key);
          break;
        }
      }
    }
  }
}
function Vk(a) {
  var b = Lk[a];
  if (!b || b.zb) {
    return!1;
  }
  var c = b.src, d = b.type, e = b.Ve, f = b.capture;
  c.removeEventListener ? c != ba && c.Ae || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Ok ? Ok[d] : Ok[d] = "on" + d, e);
  c = ka(c);
  Nk[c] && (e = Nk[c], La(e, b), 0 == e.length && delete Nk[c]);
  b.zb = !0;
  if (b = Mk[d][f][c]) {
    b.Ne = !0, Wk(d, f, c, b);
  }
  delete Lk[a];
  return!0;
}
function Wk(a, b, c, d) {
  if (!d.Kc && d.Ne) {
    for (var e = 0, f = 0;e < d.length;e++) {
      d[e].zb ? d[e].Ve.src = null : (e != f && (d[f] = d[e]), f++);
    }
    d.length = f;
    d.Ne = !1;
    0 == f && (delete Mk[a][b][c], Mk[a][b].Aa--, 0 == Mk[a][b].Aa && (delete Mk[a][b], Mk[a].Aa--), 0 == Mk[a].Aa && delete Mk[a]);
  }
}
function Xk(a) {
  var b = 0;
  if (null != a) {
    if (a = ka(a), Nk[a]) {
      a = Nk[a];
      for (var c = a.length - 1;0 <= c;c--) {
        Vk(a[c].key), b++;
      }
    }
  } else {
    Ra(Lk, function(a, c) {
      Vk(c);
      b++;
    });
  }
}
function Yk(a, b, c, d, e) {
  var f = 1;
  b = ka(b);
  if (a[b]) {
    var g = --a.Ia, k = a[b];
    k.Kc ? k.Kc++ : k.Kc = 1;
    try {
      for (var l = k.length, p = 0;p < l;p++) {
        var s = k[p];
        s && !s.zb && (f &= !1 !== Zk(s, e));
      }
    } finally {
      a.Ia = Math.max(g, a.Ia), k.Kc--, Wk(c, d, b, k);
    }
  }
  return Boolean(f);
}
function Zk(a, b) {
  a.rc && Vk(a.key);
  return a.handleEvent(b);
}
function Sk(a, b) {
  if (a.zb) {
    return!0;
  }
  var c = a.type, d = Mk;
  if (!(c in d)) {
    return!0;
  }
  var d = d[c], e, f;
  if (!Ek) {
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
    l = new Ik;
    l.Hc(e, this);
    e = !0;
    try {
      if (g) {
        for (var s = [], v = l.currentTarget;v;v = v.parentNode) {
          s.push(v);
        }
        f = d[!0];
        f.Ia = f.Aa;
        for (var D = s.length - 1;!l.Ub && 0 <= D && f.Ia;D--) {
          l.currentTarget = s[D], e &= Yk(f, s[D], c, !0, l);
        }
        if (k) {
          for (f = d[!1], f.Ia = f.Aa, D = 0;!l.Ub && D < s.length && f.Ia;D++) {
            l.currentTarget = s[D], e &= Yk(f, s[D], c, !1, l);
          }
        }
      } else {
        e = Zk(a, l);
      }
    } finally {
      s && (s.length = 0);
    }
    return e;
  }
  c = new Ik(b, this);
  return e = Zk(a, c);
}
;function $k() {
  ek.call(this);
}
ta($k, ek);
h = $k.prototype;
h.Ae = !0;
h.Yd = null;
h.addEventListener = function(a, b, c, d) {
  Pk(this, a, b, c, d);
};
h.removeEventListener = function(a, b, c, d) {
  Uk(this, a, b, c, d);
};
h.dispatchEvent = function(a) {
  var b = a.type || a, c = Mk;
  if (b in c) {
    if (ga(a)) {
      a = new Gk(a, this);
    } else {
      if (a instanceof Gk) {
        a.target = a.target || this;
      } else {
        var d = a;
        a = new Gk(b, this);
        Wa(a, d);
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if (b) {
      e = [];
      for (f = this;f;f = f.Yd) {
        e.push(f);
      }
      f = c[!0];
      f.Ia = f.Aa;
      for (var g = e.length - 1;!a.Ub && 0 <= g && f.Ia;g--) {
        a.currentTarget = e[g], d &= Yk(f, e[g], a.type, !0, a) && !1 != a.Wc;
      }
    }
    if (!1 in c) {
      if (f = c[!1], f.Ia = f.Aa, b) {
        for (g = 0;!a.Ub && g < e.length && f.Ia;g++) {
          a.currentTarget = e[g], d &= Yk(f, e[g], a.type, !1, a) && !1 != a.Wc;
        }
      } else {
        for (e = this;!a.Ub && e && f.Ia;e = e.Yd) {
          a.currentTarget = e, d &= Yk(f, e, a.type, !1, a) && !1 != a.Wc;
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
  $k.Bb.Ba.call(this);
  Xk(this);
  this.Yd = null;
};
function al(a, b) {
  ek.call(this);
  this.gc = a || 1;
  this.oc = b || ba;
  this.cd = qa(this.rh, this);
  this.Od = sa();
}
ta(al, $k);
h = al.prototype;
h.enabled = !1;
h.na = null;
h.setInterval = function(a) {
  this.gc = a;
  this.na && this.enabled ? (this.stop(), this.start()) : this.na && this.stop();
};
h.rh = function() {
  if (this.enabled) {
    var a = sa() - this.Od;
    0 < a && a < 0.8 * this.gc ? this.na = this.oc.setTimeout(this.cd, this.gc - a) : (this.dispatchEvent(bl), this.enabled && (this.na = this.oc.setTimeout(this.cd, this.gc), this.Od = sa()));
  }
};
h.start = function() {
  this.enabled = !0;
  this.na || (this.na = this.oc.setTimeout(this.cd, this.gc), this.Od = sa());
};
h.stop = function() {
  this.enabled = !1;
  this.na && (this.oc.clearTimeout(this.na), this.na = null);
};
h.Ba = function() {
  al.Bb.Ba.call(this);
  this.stop();
  delete this.oc;
};
var bl = "tick";
function cl(a) {
  if ("function" == typeof a.Ec) {
    return a.Ec();
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
function dl(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (fa(a) || ga(a)) {
      Ia(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.Id) {
        d = a.Id();
      } else {
        if ("function" != typeof a.Ec) {
          if (fa(a) || ga(a)) {
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
      for (var e = cl(a), f = e.length, g = 0;g < f;g++) {
        b.call(c, e[g], d && d[g], a);
      }
    }
  }
}
;function el(a, b) {
  this.xb = {};
  this.ca = [];
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
      a instanceof el ? (c = a.Id(), d = a.Ec()) : (c = Ua(a), d = Sa(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
h = el.prototype;
h.Aa = 0;
h.Ec = function() {
  fl(this);
  for (var a = [], b = 0;b < this.ca.length;b++) {
    a.push(this.xb[this.ca[b]]);
  }
  return a;
};
h.Id = function() {
  fl(this);
  return this.ca.concat();
};
h.Hf = function() {
  return Object.prototype.hasOwnProperty.call(this.xb, "Content-Type");
};
function fl(a) {
  if (a.Aa != a.ca.length) {
    for (var b = 0, c = 0;b < a.ca.length;) {
      var d = a.ca[b];
      Object.prototype.hasOwnProperty.call(a.xb, d) && (a.ca[c++] = d);
      b++;
    }
    a.ca.length = c;
  }
  if (a.Aa != a.ca.length) {
    for (var e = {}, c = b = 0;b < a.ca.length;) {
      d = a.ca[b], Object.prototype.hasOwnProperty.call(e, d) || (a.ca[c++] = d, e[d] = 1), b++;
    }
    a.ca.length = c;
  }
}
h.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.xb, a) ? this.xb[a] : b;
};
h.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.xb, a) || (this.Aa++, this.ca.push(a));
  this.xb[a] = b;
};
h.Cf = function() {
  return new el(this);
};
function gl(a) {
  return hl(a || arguments.callee.caller, []);
}
function hl(a, b) {
  var c = [];
  if (Ka(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(il(a) + "(");
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
            f = (f = il(f)) ? f : "[fn]";
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
        c.push(hl(a.caller, b));
      } catch (g) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function il(a) {
  if (jl[a]) {
    return jl[a];
  }
  a = String(a);
  if (!jl[a]) {
    var b = /function ([^\(]+)/.exec(a);
    jl[a] = b ? b[1] : "[Anonymous]";
  }
  return jl[a];
}
var jl = {};
function kl(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
kl.prototype.Ee = null;
kl.prototype.De = null;
var ll = 0;
kl.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || ll++;
  d || sa();
  this.ic = a;
  this.Hg = b;
  delete this.Ee;
  delete this.De;
};
kl.prototype.$e = function(a) {
  this.ic = a;
};
function ml(a) {
  this.Ig = a;
}
ml.prototype.Rc = null;
ml.prototype.ic = null;
ml.prototype.dd = null;
ml.prototype.Ge = null;
function nl(a, b) {
  this.name = a;
  this.value = b;
}
nl.prototype.toString = function() {
  return this.name;
};
var ol = new nl("SEVERE", 1E3), pl = new nl("WARNING", 900), ql = new nl("INFO", 800), rl = new nl("CONFIG", 700), sl = new nl("FINE", 500), tl = new nl("FINEST", 300);
h = ml.prototype;
h.getParent = function() {
  return this.Rc;
};
h.Fe = function() {
  this.dd || (this.dd = {});
  return this.dd;
};
h.$e = function(a) {
  this.ic = a;
};
function ul(a) {
  if (a.ic) {
    return a.ic;
  }
  if (a.Rc) {
    return ul(a.Rc);
  }
  Fa("Root logger has no level set.");
  return null;
}
h.log = function(a, b, c) {
  if (a.value >= ul(this).value) {
    for (a = this.Lf(a, b, c), b = "log:" + a.Hg, ba.console && (ba.console.timeStamp ? ba.console.timeStamp(b) : ba.console.markTimeline && ba.console.markTimeline(b)), ba.msWriteProfilerMark && ba.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if (c.Ge) {
        for (var e = 0, f = void 0;f = c.Ge[e];e++) {
          f(d);
        }
      }
      b = b.getParent();
    }
  }
};
h.Lf = function(a, b, c) {
  var d = new kl(a, String(b), this.Ig);
  if (c) {
    d.Ee = c;
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
          l = c.lineNumber || c.Di || "Not available";
        } catch (v) {
          l = "Not available", s = !0;
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || ba.$googDebugFname || k;
        } catch (D) {
          p = "Not available", s = !0;
        }
        g = !s && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:l, fileName:p, stack:c.stack || "Not available"};
      }
      e = "Message: " + wa(g.message) + '\nUrl: \x3ca href\x3d"view-source:' + g.fileName + '" target\x3d"_new"\x3e' + g.fileName + "\x3c/a\x3e\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + wa(g.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + wa(gl(f) + "-\x3e ");
    } catch (K) {
      e = "Exception trying to expose exception! You win, we lose. " + K;
    }
    d.De = e;
  }
  return d;
};
h.info = function(a, b) {
  this.log(ql, a, b);
};
function vl(a, b) {
  a.log(sl, b, void 0);
}
var wl = {}, xl = null;
function yl(a) {
  xl || (xl = new ml(""), wl[""] = xl, xl.$e(rl));
  var b;
  if (!(b = wl[a])) {
    b = new ml(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = yl(a.substr(0, c));
    c.Fe()[d] = b;
    b.Rc = c;
    wl[a] = b;
  }
  return b;
}
;function zl() {
}
zl.prototype.fe = null;
function Al(a) {
  var b;
  (b = a.fe) || (b = {}, Bl(a) && (b[0] = !0, b[1] = !0), b = a.fe = b);
  return b;
}
;var Cl;
function Dl() {
}
ta(Dl, zl);
function El(a) {
  return(a = Bl(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function Bl(a) {
  if (!a.He && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.He = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.He;
}
Cl = new Dl;
var Fl = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Gl(a) {
  ek.call(this);
  this.headers = new el;
  this.ad = a || null;
}
ta(Gl, $k);
Gl.prototype.La = yl("goog.net.XhrIo");
var Hl = /^https?$/i, Il = [];
function Jl(a, b) {
  var c = new Gl;
  Il.push(c);
  b && Pk(c, "complete", b);
  Pk(c, "ready", ra(Kl, c));
  c.send(a, void 0, void 0, void 0);
}
function Kl(a) {
  a.ac();
  La(Il, a);
}
h = Gl.prototype;
h.cb = !1;
h.T = null;
h.$c = null;
h.Jc = "";
h.Le = "";
h.hc = "";
h.Fd = !1;
h.Gc = !1;
h.Nd = !1;
h.vb = !1;
h.nc = 0;
h.Cb = null;
h.We = "";
h.yh = !1;
h.send = function(a, b, c, d) {
  if (this.T) {
    throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.Jc + "; newUri\x3d" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.Jc = a;
  this.hc = "";
  this.Le = b;
  this.Fd = !1;
  this.cb = !0;
  this.T = this.ad ? El(this.ad) : El(Cl);
  this.$c = this.ad ? Al(this.ad) : Al(Cl);
  this.T.onreadystatechange = qa(this.Te, this);
  try {
    vl(this.La, Ll(this, "Opening Xhr")), this.Nd = !0, this.T.open(b, a, !0), this.Nd = !1;
  } catch (e) {
    vl(this.La, Ll(this, "Error opening Xhr: " + e.message));
    Ml(this, e);
    return;
  }
  a = c || "";
  var f = this.headers.Cf();
  d && dl(d, function(a, b) {
    f.set(b, a);
  });
  d = ba.FormData && a instanceof ba.FormData;
  "POST" != b || f.Hf() || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  dl(f, function(a, b) {
    this.T.setRequestHeader(b, a);
  }, this);
  this.We && (this.T.responseType = this.We);
  "withCredentials" in this.T && (this.T.withCredentials = this.yh);
  try {
    this.Cb && (ba.clearTimeout(this.Cb), this.Cb = null), 0 < this.nc && (vl(this.La, Ll(this, "Will abort after " + this.nc + "ms if incomplete")), this.Cb = ba.setTimeout(qa(this.th, this), this.nc)), vl(this.La, Ll(this, "Sending request")), this.Gc = !0, this.T.send(a), this.Gc = !1;
  } catch (g) {
    vl(this.La, Ll(this, "Send error: " + g.message)), Ml(this, g);
  }
};
h.th = function() {
  "undefined" != typeof aa && this.T && (this.hc = "Timed out after " + this.nc + "ms, aborting", vl(this.La, Ll(this, this.hc)), this.dispatchEvent("timeout"), this.abort(8));
};
function Ml(a, b) {
  a.cb = !1;
  a.T && (a.vb = !0, a.T.abort(), a.vb = !1);
  a.hc = b;
  Nl(a);
  Ol(a);
}
function Nl(a) {
  a.Fd || (a.Fd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
h.abort = function() {
  this.T && this.cb && (vl(this.La, Ll(this, "Aborting")), this.cb = !1, this.vb = !0, this.T.abort(), this.vb = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ol(this));
};
h.Ba = function() {
  this.T && (this.cb && (this.cb = !1, this.vb = !0, this.T.abort(), this.vb = !1), Ol(this, !0));
  Gl.Bb.Ba.call(this);
};
h.Te = function() {
  this.Nd || this.Gc || this.vb ? Pl(this) : this.Tg();
};
h.Tg = function() {
  Pl(this);
};
function Pl(a) {
  if (a.cb && "undefined" != typeof aa) {
    if (a.$c[1] && 4 == Ql(a) && 2 == Tl(a)) {
      vl(a.La, Ll(a, "Local request error detected and ignored"));
    } else {
      if (a.Gc && 4 == Ql(a)) {
        ba.setTimeout(qa(a.Te, a), 0);
      } else {
        if (a.dispatchEvent("readystatechange"), 4 == Ql(a)) {
          vl(a.La, Ll(a, "Request complete"));
          a.cb = !1;
          try {
            var b = Tl(a), c, d;
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
                var f = String(a.Jc).match(Fl)[1] || null;
                if (!f && self.location) {
                  var g = self.location.protocol, f = g.substr(0, g.length - 1)
                }
                e = !Hl.test(f ? f.toLowerCase() : "");
              }
              c = e;
            }
            if (c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success");
            } else {
              var k;
              try {
                k = 2 < Ql(a) ? a.T.statusText : "";
              } catch (l) {
                vl(a.La, "Can not get status: " + l.message), k = "";
              }
              a.hc = k + " [" + Tl(a) + "]";
              Nl(a);
            }
          } finally {
            Ol(a);
          }
        }
      }
    }
  }
}
function Ol(a, b) {
  if (a.T) {
    var c = a.T, d = a.$c[0] ? ea : null;
    a.T = null;
    a.$c = null;
    a.Cb && (ba.clearTimeout(a.Cb), a.Cb = null);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
      a.La.log(ol, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
    }
  }
}
function Ql(a) {
  return a.T ? a.T.readyState : 0;
}
function Tl(a) {
  try {
    return 2 < Ql(a) ? a.T.status : -1;
  } catch (b) {
    return a.La.log(pl, "Can not get status: " + b.message, void 0), -1;
  }
}
function Ul(a) {
  try {
    return a.T ? a.T.responseText : "";
  } catch (b) {
    return vl(a.La, "Can not get responseText: " + b.message), "";
  }
}
function Ll(a, b) {
  return b + " [" + a.Le + " " + a.Jc + " " + Tl(a) + "]";
}
;var Vl, Wl = !rk && !qk || qk && qk && 9 <= Dk || rk && Bk("1.9.1");
qk && Bk("9");
function Xl(a) {
  a = a.className;
  return ga(a) && a.match(/\S+/g) || [];
}
function Yl(a, b) {
  for (var c = Xl(a), d = Na(arguments, 1), e = c, f = 0;f < d.length;f++) {
    Ka(e, d[f]) || e.push(d[f]);
  }
  a.className = c.join(" ");
}
function Zl(a, b) {
  var c = Xl(a), d = Na(arguments, 1), c = $l(c, d);
  a.className = c.join(" ");
}
function $l(a, b) {
  return Ja(a, function(a) {
    return!Ka(b, a);
  });
}
function am(a) {
  Ka(Xl(a), "open") ? Zl(a, "open") : Yl(a, "open");
}
;function bm() {
  var a = document;
  return a.querySelectorAll && a.querySelector ? a.querySelectorAll("HTML") : a.getElementsByTagName("HTML");
}
function cm(a, b, c) {
  function d(c) {
    c && b.appendChild(ga(c) ? a.createTextNode(c) : c);
  }
  for (var e = 1;e < c.length;e++) {
    var f = c[e];
    !fa(f) || ja(f) && 0 < f.nodeType ? d(f) : Ia(dm(f) ? Ma(f) : f, d);
  }
}
function em(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function dm(a) {
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
function fm(a) {
  this.Cd = a || ba.document || document;
}
h = fm.prototype;
h.createElement = function(a) {
  return this.Cd.createElement(a);
};
h.createTextNode = function(a) {
  return this.Cd.createTextNode(String(a));
};
h.appendChild = function(a, b) {
  a.appendChild(b);
};
h.append = function(a, b) {
  cm(em(a), a, arguments);
};
h.Fe = function(a) {
  return Wl && void 0 != a.children ? a.children : Ja(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
};
function gm(a, b, c) {
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
var hm = function() {
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
function im(a) {
  return a.toUpperCase();
}
function jm(a) {
  return a.toLowerCase();
}
function km(a) {
  return 2 > H(a) ? im(a) : [w(im(zd.c(a, 0, 1))), w(jm(zd.a(a, 1)))].join("");
}
function lm(a, b) {
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
var mm = function() {
  function a(a, b, c) {
    if (y.a("" + w(b), "/(?:)/")) {
      b = lm(a, c);
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
            var l = eg(b, a);
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
function nm(a) {
  for (var b = om, c = new Xa, d = a.length, e = 0;;) {
    if (y.a(d, e)) {
      return c.toString();
    }
    var f = a.charAt(e), g = J.a(b, f);
    q(g) ? c.append("" + w(g)) : c.append(f);
    e += 1;
  }
}
;function pm(a, b) {
  var c = N.c(Xf, a, b);
  return G(c, ue(function(a) {
    return c === a;
  }, b));
}
var qm = function() {
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
      a = pm(H, Vc.e(d, c, F([a], 0)));
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
        return Uf;
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
    return Uf;
  };
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}(), rm = function() {
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
      a = pm(function(a) {
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
}(), sm = function() {
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
function tm(a, b) {
  return ob.c(function(a, b) {
    var e = I.c(b, 0, null), f = I.c(b, 1, null);
    return ae.a(e, f) && pd(a, e) ? Zc.a(Yc.c(a, f, J.a(a, e)), e) : a;
  }, a, b);
}
;var um = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function vm(a) {
  if (q(a)) {
    var b = mm.a(Jd(a), /-/), c = I.c(b, 0, null), b = yd(b);
    return fd(b) || y.a("aria", c) || y.a("data", c) ? a : Kd.b(hm.b(Vc.a(he.a(km, b), c)));
  }
  return null;
}
function wm(a) {
  return ob.c(function(a, c) {
    var d = J.a(a, c);
    return q(d) ? a : Zc.a(a, c);
  }, a, Mf(a));
}
var xm = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = We(ue(ib, re.a(function(a) {
      return(a ? a.g & 33554432 || a.li || (a.g ? 0 : r(ec, a)) : r(ec, a)) ? new R(null, 1, 5, S, [a], null) : id(a) ? a : t ? new R(null, 1, 5, S, [a], null) : null;
    }, he.a(Lh, a))));
    a = N.a(Rf, a);
    return fd(b) ? a : Yc.c(a, Lh, b);
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
  if (a ? a.Ab : a) {
    return a.Ab(a);
  }
  var b;
  b = V[m(null == a ? null : a)];
  if (!b && (b = V._, !b)) {
    throw u("IInterpreter.interpret", a);
  }
  return b.call(null, a);
}
function ym(a) {
  return React.ze({render:function() {
    return this.wh(a.b ? a.b({children:this.Ha.children, onChange:this.onChange, value:this.state.value}) : a.call(null, {children:this.Ha.children, onChange:this.onChange, value:this.state.value}));
  }, componentWillReceiveProps:function(a) {
    return this.be({value:a.value});
  }, onChange:function(a) {
    var c = this.Ha.onChange;
    if (null == c) {
      return null;
    }
    c.b ? c.b(a) : c.call(null, a);
    return this.be({value:a.target.value});
  }, getInitialState:function() {
    return{value:this.Ha.value};
  }});
}
var zm = ym(React.d.input), Am = ym(React.d.qh);
function X(a) {
  var b = Ag, c = Rf.e(F([Wf(Mf(a), he.a(vm, Mf(a))), new n(null, 2, [Lh, Fj, Bj, hj], null)], 0));
  a = tm(a, c);
  b = b(a);
  a = hm.a(" ", we(A(b.className)));
  jb(/^[\s\xa0]*$/.test(null == a ? "" : String(a))) && (b.className = a);
  return b;
}
function Bm(a) {
  return pb.b(he.a(V, a));
}
V["null"] = function() {
  return null;
};
V._ = function(a) {
  return a;
};
R.prototype.Ab = function() {
  var a, b = I.c(this, 0, null), c = yd(this);
  if (!(b instanceof Q || b instanceof Ac || "string" === typeof b)) {
    throw Ig.a([w(b), w(" is not a valid element name.")].join(""), new n(null, 2, [Uj, b, Jh, c], null));
  }
  var d = dg(um, Jd(b));
  I.c(d, 0, null);
  b = I.c(d, 1, null);
  a = I.c(d, 2, null);
  d = I.c(d, 3, null);
  a = wm(new n(null, 2, [Mj, a, Lh, q(d) ? mm.a(d, /\./) : null], null));
  d = B(c);
  a = O(d) ? new R(null, 3, 5, S, [b, xm.e(F([a, d], 0)), E(c)], null) : new R(null, 3, 5, S, [b, a, c], null);
  b = I.c(a, 0, null);
  c = I.c(a, 1, null);
  a = I.c(a, 2, null);
  d = React.d[Jd(b)];
  if (q(d)) {
    b = J.c(new n(null, 2, [yj, zm, cj, Am], null), Kd.b(b), d);
  } else {
    throw Ig.a([w("Unsupported HTML tag: "), w(Jd(b))].join(""), new n(null, 1, [Uj, b], null));
  }
  return b.call(null, X(c), hd(a) && "string" === typeof B(a) && fd(C(a)) ? V(B(a)) : q(a) ? V(a) : null);
};
Fc.prototype.Ab = function() {
  return Bm(this);
};
Dd.prototype.Ab = function() {
  return Bm(this);
};
Ld.prototype.Ab = function() {
  return Bm(this);
};
Ye.prototype.Ab = function() {
  return Bm(this);
};
Hd.prototype.Ab = function() {
  return Bm(this);
};
function Cm(a) {
  React.ze({render:function() {
    return this.wh(a.b ? a.b({children:this.Ha.children, onChange:this.onChange, value:this.state.value}) : a.call(null, {children:this.Ha.children, onChange:this.onChange, value:this.state.value}));
  }, componentWillReceiveProps:function(a) {
    return this.be({value:a.value});
  }, onChange:function(a) {
    var c = this.Ha.onChange;
    if (null == c) {
      return null;
    }
    c.b ? c.b(a) : c.call(null, a);
    return this.be({value:a.target.value});
  }, getInitialState:function() {
    return{value:this.Ha.value};
  }});
}
Cm(React.d.input);
Cm(React.d.qh);
Cm(React.d.Ni);
var Y = !1, Dm = {};
function Em(a) {
  if (a ? a.Jg : a) {
    return a.Jg(a);
  }
  var b;
  b = Em[m(null == a ? null : a)];
  if (!b && (b = Em._, !b)) {
    throw u("IInitState.init-state", a);
  }
  return b.call(null, a);
}
var Fm = {};
function Gm(a, b, c) {
  if (a ? a.Kg : a) {
    return a.Kg(a, b, c);
  }
  var d;
  d = Gm[m(null == a ? null : a)];
  if (!d && (d = Gm._, !d)) {
    throw u("IShouldUpdate.should-update", a);
  }
  return d.call(null, a, b, c);
}
var Hm = {};
function Im(a) {
  if (a ? a.Og : a) {
    return a.Og(a);
  }
  var b;
  b = Im[m(null == a ? null : a)];
  if (!b && (b = Im._, !b)) {
    throw u("IWillMount.will-mount", a);
  }
  return b.call(null, a);
}
var Jm = {};
function Km(a, b) {
  if (a ? a.Ud : a) {
    return a.Ud(a, b);
  }
  var c;
  c = Km[m(null == a ? null : a)];
  if (!c && (c = Km._, !c)) {
    throw u("IDidMount.did-mount", a);
  }
  return c.call(null, a, b);
}
var Lm = {};
function Mm(a) {
  if (a ? a.Pg : a) {
    return a.Pg(a);
  }
  var b;
  b = Mm[m(null == a ? null : a)];
  if (!b && (b = Mm._, !b)) {
    throw u("IWillUnmount.will-unmount", a);
  }
  return b.call(null, a);
}
var Nm = {};
function Om(a, b, c) {
  if (a ? a.Se : a) {
    return a.Se(0, b, c);
  }
  var d;
  d = Om[m(null == a ? null : a)];
  if (!d && (d = Om._, !d)) {
    throw u("IWillUpdate.will-update", a);
  }
  return d.call(null, a, b, c);
}
var Pm = {};
function Qm(a, b, c, d) {
  if (a ? a.Vd : a) {
    return a.Vd(a, b, c, d);
  }
  var e;
  e = Qm[m(null == a ? null : a)];
  if (!e && (e = Qm._, !e)) {
    throw u("IDidUpdate.did-update", a);
  }
  return e.call(null, a, b, c, d);
}
var Rm = {};
function Sm(a) {
  if (a ? a.Da : a) {
    return a.Da(a);
  }
  var b;
  b = Sm[m(null == a ? null : a)];
  if (!b && (b = Sm._, !b)) {
    throw u("IRender.render", a);
  }
  return b.call(null, a);
}
var Tm = {};
function Um(a, b) {
  if (a ? a.Wd : a) {
    return a.Wd(a, b);
  }
  var c;
  c = Um[m(null == a ? null : a)];
  if (!c && (c = Um._, !c)) {
    throw u("IRenderState.render-state", a);
  }
  return c.call(null, a, b);
}
function Vm(a) {
  if (a ? a.Xd : a) {
    return a.Xd(a);
  }
  var b;
  b = Vm[m(null == a ? null : a)];
  if (!b && (b = Vm._, !b)) {
    throw u("IValue.-value", a);
  }
  return b.call(null, a);
}
Vm._ = function(a) {
  return a;
};
var Wm = {};
function Xm(a) {
  if (a ? a.Mc : a) {
    return a.Mc(a);
  }
  var b;
  b = Xm[m(null == a ? null : a)];
  if (!b && (b = Xm._, !b)) {
    throw u("ICursor.-path", a);
  }
  return b.call(null, a);
}
function Ym(a) {
  if (a ? a.Oc : a) {
    return a.Oc(a);
  }
  var b;
  b = Ym[m(null == a ? null : a)];
  if (!b && (b = Ym._, !b)) {
    throw u("ICursor.-state", a);
  }
  return b.call(null, a);
}
function Zm(a) {
  if (a ? a.Nc : a) {
    return a.Nc(a);
  }
  var b;
  b = Zm[m(null == a ? null : a)];
  if (!b && (b = Zm._, !b)) {
    throw u("ICursor.-shared", a);
  }
  return b.call(null, a);
}
var $m = {}, an = function() {
  function a(a, b, c, d) {
    if (a ? a.Ng : a) {
      return a.Ng(a, b, c, d);
    }
    var l;
    l = an[m(null == a ? null : a)];
    if (!l && (l = an._, !l)) {
      throw u("IToCursor.-to-cursor", a);
    }
    return l.call(null, a, b, c, d);
  }
  function b(a, b, c) {
    if (a ? a.Mg : a) {
      return a.Mg(a, b, c);
    }
    var d;
    d = an[m(null == a ? null : a)];
    if (!d && (d = an._, !d)) {
      throw u("IToCursor.-to-cursor", a);
    }
    return d.call(null, a, b, c);
  }
  function c(a, b) {
    if (a ? a.Lg : a) {
      return a.Lg(a, b);
    }
    var c;
    c = an[m(null == a ? null : a)];
    if (!c && (c = an._, !c)) {
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
function bn(a, b) {
  if (a ? a.Pc : a) {
    return a.Pc(a, b);
  }
  var c;
  c = bn[m(null == a ? null : a)];
  if (!c && (c = bn._, !c)) {
    throw u("ITransact.-transact!", a);
  }
  return c.call(null, a, b);
}
function cn(a) {
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
function dn(a) {
  return a.Ha.__om_cursor;
}
var en = function() {
  function a(a, b) {
    return hd(b) ? fd(b) ? c.b(a) : t ? ze.a(c.b(a), b) : null : J.a(c.b(a), b);
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
}(), fn = function() {
  function a(a, b) {
    return hd(b) ? fd(b) ? c.b(a) : t ? ze.a(c.b(a), b) : null : J.a(c.b(a), b);
  }
  function b(a) {
    return Zm(dn(a));
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
function gn(a) {
  a = a.state;
  var b = a.__om_pending_state;
  return q(b) ? (a.__om_prev_state = a.__om_state, a.__om_state = b, a.__om_pending_state = null, a) : null;
}
var hn = function() {
  function a(a, b) {
    var c = q(b) ? b : a.Ha, g = c.__om_state;
    if (q(g)) {
      var k = a.state, l = k.__om_pending_state;
      k.__om_pending_state = Rf.e(F([q(l) ? l : k.__om_state, g], 0));
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
}(), jn = React.ze({render:function() {
  var a = cn(this), b = Y;
  try {
    return Y = !0, (a ? q(q(null) ? null : a.Ga) || (a.za ? 0 : r(Rm, a)) : r(Rm, a)) ? Sm(a) : (a ? q(q(null) ? null : a.Qe) || (a.za ? 0 : r(Tm, a)) : r(Tm, a)) ? Um(a, en.b(this)) : t ? a : null;
  } finally {
    Y = b;
  }
}, componentDidUpdate:function(a, b, c) {
  if ((b = cn(this)) ? q(q(null) ? null : b.Pe) || (b.za ? 0 : r(Pm, b)) : r(Pm, b)) {
    var d = this.state, e = Y;
    try {
      Y = !0;
      var f = d.__om_prev_state;
      Qm(b, dn({props:a}), q(f) ? f : d.__om_state, c);
    } finally {
      Y = e;
    }
  }
  return this.state.__om_prev_state = null;
}, componentWillUpdate:function(a) {
  var b = cn(this);
  if (b ? q(q(null) ? null : b.Qg) || (b.za ? 0 : r(Nm, b)) : r(Nm, b)) {
    var c = this.state, d = Y;
    try {
      Y = !0;
      var e = c.__om_pending_state;
      Om(b, dn({props:a}), q(e) ? e : c.__om_state);
    } finally {
      Y = d;
    }
  }
  return gn(this);
}, componentWillUnmount:function() {
  var a = cn(this);
  if (a ? q(q(null) ? null : a.Li) || (a.za ? 0 : r(Lm, a)) : r(Lm, a)) {
    var b = Y;
    try {
      return Y = !0, Mm(a);
    } finally {
      Y = b;
    }
  } else {
    return null;
  }
}, componentDidMount:function(a) {
  var b = cn(this);
  if (b ? q(q(null) ? null : b.Oe) || (b.za ? 0 : r(Jm, b)) : r(Jm, b)) {
    var c = Y;
    try {
      return Y = !0, Km(b, a);
    } finally {
      Y = c;
    }
  } else {
    return null;
  }
}, componentWillMount:function() {
  hn.b(this);
  var a = cn(this);
  if (a ? q(q(null) ? null : a.Ki) || (a.za ? 0 : r(Hm, a)) : r(Hm, a)) {
    var b = Y;
    try {
      Y = !0, Im(a);
    } finally {
      Y = b;
    }
  }
  return gn(this);
}, shouldComponentUpdate:function(a) {
  var b = Y;
  try {
    Y = !0;
    var c = this.Ha, d = this.state, e = cn(this);
    hn.a(this, a);
    return(e ? q(q(null) ? null : e.Ii) || (e.za ? 0 : r(Fm, e)) : r(Fm, e)) ? Gm(e, dn({props:a}), this.state.__om_pending_state) : Vm(c.__om_cursor) !== Vm(a.__om_cursor) ? !0 : null != d.__om_pending_state ? !0 : c.__om_index !== a.__om_index ? !0 : t ? !1 : null;
  } finally {
    Y = b;
  }
}, getInitialState:function() {
  var a = cn(this), b = this.Ha, c = {__om_state:Rf.e(F([function() {
    var a = b.__om_init_state;
    return q(a) ? a : pf;
  }(), (a ? q(q(null) ? null : a.Hi) || (a.za ? 0 : r(Dm, a)) : r(Dm, a)) ? function() {
    var b = Y;
    try {
      return Y = !0, Em(a);
    } finally {
      Y = b;
    }
  }() : null], 0))};
  b.__om_init_state = null;
  return c;
}});
function kn(a) {
  return a ? q(q(null) ? null : a.Td) ? !0 : a.za ? !1 : r(Wm, a) : r(Wm, a);
}
function ln(a, b, c, d) {
  this.value = a;
  this.state = b;
  this.path = c;
  this.M = d;
  this.p = 0;
  this.g = 2158397195;
}
h = ln.prototype;
h.I = function(a, b) {
  return Eb.c(this, b, null);
};
h.J = function(a, b, c) {
  if (Y) {
    return a = Eb.c(this.value, b, c), y.a(a, c) ? c : mn.i ? mn.i(a, this.state, Vc.a(this.path, b), this.M) : mn.call(null, a, this.state, Vc.a(this.path, b), this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Yb = function(a, b) {
  if (Y) {
    return Fb(this.value, b);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.mb = function(a, b, c) {
  if (Y) {
    return new ln(Gb(this.value, b, c), this.state, this.path, this.M);
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
h.Td = !0;
h.Mc = function() {
  if (Y) {
    return this.path;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Oc = function() {
  if (Y) {
    return this.state;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Nc = function() {
  return this.M;
};
h.Fb = function() {
  if (Y) {
    throw Error([w("Cannot deref cursor during render phase: "), w(this)].join(""));
  }
  return ze.a(Tb(this.state), this.path);
};
h.Xd = function() {
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
h.O = function(a, b) {
  if (Y) {
    return new ln(xb(this.value, b), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.G = function() {
  var a = this;
  if (Y) {
    return 0 < H(a.value) ? he.a(function(b) {
      var c = I.c(b, 0, null);
      b = I.c(b, 1, null);
      return new R(null, 2, 5, S, [c, mn.i ? mn.i(b, a.state, Vc.a(a.path, c), a.M) : mn.call(null, b, a.state, Vc.a(a.path, c), a.M)], null);
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
    return kn(b) ? y.a(this.value, Vm(b)) : y.a(this.value, b);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.t = function(a, b) {
  if (Y) {
    return new ln(Sc(this.value, b), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.pa = !0;
h.ka = function() {
  return new ln(this.value, this.state, this.path, this.M);
};
h.s = function() {
  if (Y) {
    return bd(this.value);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.vc = function(a, b) {
  if (Y) {
    return new ln(Ib(this.value, b), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Re = !0;
h.Pc = function(a, b) {
  return ug.c(this.state, b, this.path);
};
function nn(a, b, c, d) {
  this.value = a;
  this.state = b;
  this.path = c;
  this.M = d;
  this.p = 0;
  this.g = 2175181595;
}
h = nn.prototype;
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
h.Yb = function(a, b) {
  if (Y) {
    return Fb(this.value, b);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.mb = function(a, b, c) {
  if (Y) {
    return mn.i ? mn.i(Sb(this.value, b, c), this.state, this.path, this.M) : mn.call(null, Sb(this.value, b, c), this.state, this.path, this.M);
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
h.Td = !0;
h.Mc = function() {
  if (Y) {
    return this.path;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Oc = function() {
  if (Y) {
    return this.state;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Nc = function() {
  return this.M;
};
h.Fb = function() {
  if (Y) {
    throw Error([w("Cannot deref cursor during render phase: "), w(this)].join(""));
  }
  return ze.a(Tb(this.state), this.path);
};
h.Xd = function() {
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
h.O = function(a, b) {
  if (Y) {
    return new nn(xb(this.value, b), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.G = function() {
  var a = this;
  if (Y) {
    return 0 < H(a.value) ? he.c(function(b, c) {
      return mn.i ? mn.i(b, a.state, Vc.a(a.path, c), a.M) : mn.call(null, b, a.state, Vc.a(a.path, c), a.M);
    }, a.value, ag.q()) : null;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.H = function() {
  if (Y) {
    return ub(this.value);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.ob = function() {
  if (Y) {
    return mn.i ? mn.i(Pb(this.value), this.state, this.path, this.M) : mn.call(null, Pb(this.value), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.pb = function() {
  if (Y) {
    return mn.i ? mn.i(Qb(this.value), this.state, this.path, this.M) : mn.call(null, Qb(this.value), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.D = function(a, b) {
  if (Y) {
    return kn(b) ? y.a(this.value, Vm(b)) : y.a(this.value, b);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.t = function(a, b) {
  if (Y) {
    return new nn(Sc(this.value, b), this.state, this.path, this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.pa = !0;
h.ka = function() {
  return new nn(this.value, this.state, this.path, this.M);
};
h.s = function() {
  if (Y) {
    return bd(this.value);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.w = function(a, b) {
  if (Y) {
    return mn.i ? mn.i(x.a(this.value, b), this.state, Vc.a(this.path, b), this.M) : mn.call(null, x.a(this.value, b), this.state, Vc.a(this.path, b), this.M);
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.qa = function(a, b, c) {
  if (Y) {
    return b < ub(this.value) ? mn.i ? mn.i(x.a(this.value, b), this.state, Vc.a(this.path, b), this.M) : mn.call(null, x.a(this.value, b), this.state, Vc.a(this.path, b), this.M) : c;
  }
  throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
};
h.Re = !0;
h.Pc = function(a, b) {
  return ug.c(this.state, b, this.path);
};
function on(a, b, c, d) {
  var e = sb(a);
  e.vf = !0;
  e.D = function(b, c) {
    if (Y) {
      return kn(c) ? y.a(a, Vm(c)) : y.a(a, c);
    }
    throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
  };
  e.Re = !0;
  e.Pc = function(a, d) {
    return ug.c(b, d, c);
  };
  e.Td = !0;
  e.Oc = function() {
    if (Y) {
      return b;
    }
    throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
  };
  e.Mc = function() {
    if (Y) {
      return c;
    }
    throw Error([w("Cannot manipulate cursor outside of render phase, only "), w("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join(""));
  };
  e.Nc = function() {
    return d;
  };
  e.hi = !0;
  e.Fb = function() {
    if (Y) {
      throw Error([w("Cannot deref cursor during render phase: "), w(this)].join(""));
    }
    return ze.a(Tb(b), c);
  };
  return e;
}
var mn = function() {
  function a(a, b, c, d) {
    return kn(a) ? a : (a ? q(q(null) ? null : a.Ji) || (a.za ? 0 : r($m, a)) : r($m, a)) ? an.i(a, b, c, d) : Lc(a) ? new nn(a, b, c, d) : O(a) ? new ln(a, b, c, d) : (a ? q(q(null) ? null : a.pa) || (a.za ? 0 : r(rb, a)) : r(rb, a)) ? on(a, b, c, d) : t ? a : null;
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
}(), pn = !1, qn = sg.b(Uf);
function rn() {
  pn = !1;
  for (var a = A(Tb(qn)), b = null, c = 0, d = 0;;) {
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
var sn = sg.b(pf), tn = function() {
  function a(a, b, c, g) {
    var k = Tb(sn);
    pd(k, g) && J.a(k, g).call(null);
    var l = a instanceof qg ? a : sg.b(a), p = function(a) {
      return function K() {
        ug.c(qn, cd, K);
        var d = Tb(a), k = mn.i(d, a, Ue, b);
        return React.Vi(new jn({__om_cursor:k}, function(a, b) {
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
    }(l), s = wg.q();
    lc(l, s, function() {
      pd(Tb(qn), p) || ug.c(qn, Vc, p);
      if (q(pn)) {
        return null;
      }
      pn = !0;
      return "undefined" !== typeof requestAnimationFrame ? requestAnimationFrame(rn) : setTimeout(rn, 16);
    });
    ug.i(sn, Yc, g, function() {
      mc(l, s);
      ug.c(sn, Zc, g);
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
}(), un = function() {
  function a(a, b, c) {
    if (!be(new Sf(null, new n(null, 7, [Yg, null, th, null, Ah, null, Dh, null, Kh, null, vj, null, Lj, null], null), null), Mf(c))) {
      throw Error([w("Assert failed: "), w(N.i(w, "build options contains invalid keys, only :key, :react-key, ", ":fn, :init-state, :state, and :opts allowed, given ", pe(", ", Mf(c)))), w("\n"), w(og.e(F([Gd(new Ac(null, "valid?", "valid?", 1830611324, null), new Ac(null, "m", "m", -1640531418, null))], 0)))].join(""));
    }
    if (null == c) {
      return c = new jn({__om_cursor:b}, function(c) {
        var f = Y;
        try {
          return Y = !0, a.a ? a.a(b, c) : a.call(null, b, c);
        } finally {
          Y = f;
        }
      }), c.constructor = ka(a), c;
    }
    if (t) {
      var g = P(c) ? N.a(T, c) : c, k = J.a(g, vj), l = J.a(g, Yg), p = J.a(g, th), g = J.a(g, Kh), s = J.a(c, Lj), v = null != s ? s.b ? s.b(b) : s.call(null, b) : b, g = null != g ? J.a(v, g) : J.a(c, Ah);
      c = new jn({key:g, __om_state:p, __om_init_state:l, __om_index:Dh.b(c), __om_cursor:v}, null == k ? function(b) {
        var c = Y;
        try {
          return Y = !0, a.a ? a.a(v, b) : a.call(null, v, b);
        } finally {
          Y = c;
        }
      } : function(b) {
        var c = Y;
        try {
          return Y = !0, a.c ? a.c(v, b, k) : a.call(null, v, b, k);
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
}(), vn = function() {
  function a(a, b, c) {
    return he.c(function(b, e) {
      return un.c(a, b, Yc.c(c, Dh, e));
    }, b, ag.q());
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
}(), wn = function() {
  function a(a, b, c, d, e, f) {
    return bn(a, function(a, g) {
      return fd(g) ? b.m ? b.m(a, c, d, e, f) : b.call(null, a, c, d, e, f) : Ce.e(a, g, b, c, d, e, F([f], 0));
    });
  }
  function b(a, b, c, d, e) {
    return bn(a, function(a, f) {
      return fd(f) ? b.i ? b.i(a, c, d, e) : b.call(null, a, c, d, e) : Ce.la(a, f, b, c, d, e);
    });
  }
  function c(a, b, c, d) {
    return bn(a, function(a, e) {
      return fd(e) ? b.c ? b.c(a, c, d) : b.call(null, a, c, d) : Ce.m(a, e, b, c, d);
    });
  }
  function d(a, b, c) {
    return bn(a, function(a, d) {
      return fd(d) ? b.a ? b.a(a, c) : b.call(null, a, c) : Ce.i(a, d, b, c);
    });
  }
  function e(a, b) {
    return bn(a, function(a, c) {
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
      return bn(a, function(a, b) {
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
  }(), f = function(f, l, p, s, v, D, K) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, l);
      case 3:
        return d.call(this, f, l, p);
      case 4:
        return c.call(this, f, l, p, s);
      case 5:
        return b.call(this, f, l, p, s, v);
      case 6:
        return a.call(this, f, l, p, s, v, D);
      default:
        return g.e(f, l, p, s, v, D, F(arguments, 6));
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
function xn(a, b) {
  var c = a.Ui;
  return q(c) ? c[b].wi() : null;
}
function yn(a, b, c) {
  var d = Y;
  try {
    Y = !0;
    var e = a.state, f = a.Ha.__om_cursor, g = Xm(f), k, l = e.__om_pending_state;
    k = q(l) ? l : e.__om_state;
    hd(b) ? e.__om_pending_state = Be(k, b, c) : e.__om_pending_state = Yc.c(k, b, c);
    return fd(g) ? ug.a(Ym(f), Ec) : ug.i(Ym(f), Ce, g, Ec);
  } finally {
    Y = d;
  }
}
;function zn(a) {
  return hm.a(",", he.a(function(a) {
    return N.a(w, a);
  }, Fd(he.a(Fd, ye.i(3, 3, Ue, Fd(a))))));
}
var An = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P(b) ? N.a(T, b) : b, f = J.a(e, nj);
    if (q(a)) {
      var e = 0 < a ? 1 : y.a(a, 0) ? 0 : 0 > a ? -1 : null, g = Math.abs(a), k = ("" + w(g)).split("."), l = I.c(k, 0, null), p = I.c(k, 1, null), k = 1 <= g ? 3 * ((H(l) - 1) / 3 | 0) : 0 < g ? -3 * ((3 + H(Zf(function() {
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
    var e = P(b) ? N.a(T, b) : b, f = J.a(e, z), g = J.a(e, Fi), e = J.a(e, Ti);
    return q(a) ? (f = q(e) ? Math.round(Math.abs(a) * Math.pow(10, e)) / Math.pow(10, e) : Math.abs(a), f = "" + w(f), e = mm.a(f, /\./), f = I.c(e, 0, null), e = I.c(e, 1, null), f = zn(f), f = hm.a(".", te(de, new R(null, 2, 5, S, [f, e], null))), 0 > a ? [w("-"), w(f)].join("") : q(q(g) ? 0 < a : g) ? [w("+"), w(f)].join("") : f) : f;
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
var Bn = new n(null, 5, [0, "", 3, "k", 6, "m", 9, "bn", 12, "tn"], null), Cn = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P(b) ? N.a(T, b) : b, f = J.a(e, z), g = J.a(e, Fi), k = J.c(e, Hi, "\u00a3"), e = J.a(e, nj);
    if (q(a)) {
      var e = An.e(a, F([nj, e], 0)), f = I.c(e, 0, null), l = I.c(e, 1, null), e = Math.abs(f), p = Bn.b ? Bn.b(l) : Bn.call(null, l), l = q(p) ? p : [w("x10^"), w(l)].join("");
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
var Dn, En;
function Fn(a) {
  a = P(a) ? N.a(T, a) : a;
  J.a(a, Nj);
  a = J.a(a, aj);
  return q(y.a ? y.a(Qh, a) : y.call(null, Qh, a)) ? new n(null, 3, [Uh, new n(null, 2, [Xh, "Total", Rj, "Totals for the selected Portfolio Company"], null), tj, new n(null, 2, [Xh, "Mean", Rj, "Mean for the selected Portfolio Company"], null), Wj, new n(null, 2, [Xh, "Benchmark", Rj, "Mean over all UK Companies"], null)], null) : q(y.a ? y.a(Gj, a) : y.call(null, Gj, a)) ? new n(null, 3, [Uh, new n(null, 2, [Xh, "Total", Rj, "Totals for the Portfolio Companies of the selected Investor"], null), 
  tj, new n(null, 2, [Xh, "Mean", Rj, "Mean over the Portfolio Companies of the selected Investor"], null), Wj, new n(null, 2, [Xh, "Benchmark", Rj, "Mean over all UK Companies"], null)], null) : q(y.a ? y.a(yh, a) : y.call(null, yh, a)) ? new n(null, 3, [Uh, new n(null, 2, [Xh, "Total", Rj, "Totals for the selected Constituency"], null), tj, new n(null, 2, [Xh, "Mean", Rj, "Mean over the Portfolio Companies with sites in the selected Constituency"], null), Wj, new n(null, 2, [Xh, "Benchmark", Rj, 
  "Mean over all UK Companies"], null)], null) : new n(null, 3, [Uh, new n(null, 2, [Xh, "Total", Rj, "Totals over all Portfolio Companies"], null), tj, new n(null, 2, [Xh, "Mean", Rj, "Mean over all Portfolio Companies"], null), Wj, new n(null, 2, [Xh, "Benchmark", Rj, "Mean over all UK Companies"], null)], null);
}
function Gn(a) {
  var b = P(a) ? N.a(T, a) : a;
  a = J.a(b, dh);
  var c = J.a(b, Uh), d = J.a(b, bj), b = Fn(c), e = q(a) ? a : d;
  return new n(null, 3, [Uh, Rf.e(F([Uh.b(b), Xc([Og, mh, Bh, oi, pi, qi, ti, Di, Yi], [Z.c ? Z.c(null == e ? null : Qg.b(e), z, "-") : Z.call(null, null == e ? null : Qg.b(e), z, "-"), function() {
    var a = null == e ? null : zj.b(e);
    return null == a ? null : Ch.b(a);
  }(), function() {
    var a = null == e ? null : xj.b(e);
    return null == a ? null : Ch.b(a);
  }(), Z.c ? Z.c(null == e ? null : ri.b(e), z, "-") : Z.call(null, null == e ? null : ri.b(e), z, "-"), Z.m ? Z.m(function() {
    var a = null == e ? null : zj.b(e);
    return null == a ? null : Ch.b(a);
  }(), Ti, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : zj.b(e);
    return null == a ? null : Ch.b(a);
  }(), Ti, 0, z, "-"), Cn.m ? Cn.m(function() {
    var a = null == e ? null : xj.b(e);
    return null == a ? null : Ch.b(a);
  }(), nj, 2, z, "-") : Cn.call(null, function() {
    var a = null == e ? null : xj.b(e);
    return null == a ? null : Ch.b(a);
  }(), nj, 2, z, "-"), Z.m ? Z.m(function() {
    var a = null == e ? null : Bi.b(e);
    return null == a ? null : Ch.b(a);
  }(), Ti, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : Bi.b(e);
    return null == a ? null : Ch.b(a);
  }(), Ti, 0, z, "-"), Z.c ? Z.c(null == e ? null : Ji.b(e), z, "-") : Z.call(null, null == e ? null : Ji.b(e), z, "-"), Cn.m ? Cn.m(function() {
    var a = null == e ? null : Yi.b(e);
    return null == a ? null : Ch.b(a);
  }(), nj, 2, z, "-") : Cn.call(null, function() {
    var a = null == e ? null : Yi.b(e);
    return null == a ? null : Ch.b(a);
  }(), nj, 2, z, "-")])], 0)), tj, Rf.e(F([tj.b(b), Xc([Og, mh, Bh, oi, pi, qi, ti, Di, Yi], ["\u00a0", function() {
    var a = null == e ? null : zj.b(e);
    return null == a ? null : Nh.b(a);
  }(), function() {
    var a = null == e ? null : xj.b(e);
    return null == a ? null : Nh.b(a);
  }(), "\u00a0", Z.m ? Z.m(function() {
    var a = null == e ? null : zj.b(e);
    return null == a ? null : Nh.b(a);
  }(), Ti, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : zj.b(e);
    return null == a ? null : Nh.b(a);
  }(), Ti, 0, z, "-"), Cn.m ? Cn.m(function() {
    var a = null == e ? null : xj.b(e);
    return null == a ? null : Nh.b(a);
  }(), nj, 2, z, "-") : Cn.call(null, function() {
    var a = null == e ? null : xj.b(e);
    return null == a ? null : Nh.b(a);
  }(), nj, 2, z, "-"), Z.m ? Z.m(function() {
    var a = null == e ? null : Bi.b(e);
    return null == a ? null : Nh.b(a);
  }(), Ti, 0, z, "-") : Z.call(null, function() {
    var a = null == e ? null : Bi.b(e);
    return null == a ? null : Nh.b(a);
  }(), Ti, 0, z, "-"), "\u00a0", Cn.m ? Cn.m(function() {
    var a = null == e ? null : Yi.b(e);
    return null == a ? null : Nh.b(a);
  }(), nj, 2, z, "-") : Cn.call(null, function() {
    var a = null == e ? null : Yi.b(e);
    return null == a ? null : Nh.b(a);
  }(), nj, 2, z, "-")])], 0)), Wj, Rf.e(F([Wj.b(b), Xc([Og, mh, Bh, oi, pi, qi, ti, Di, Yi], [Z.c ? Z.c(null == d ? null : Qg.b(d), z, "-") : Z.call(null, null == d ? null : Qg.b(d), z, "-"), function() {
    var a = null == d ? null : zj.b(d);
    return null == a ? null : Nh.b(a);
  }(), function() {
    var a = null == d ? null : xj.b(d);
    return null == a ? null : Ch.b(a);
  }(), Z.c ? Z.c(null == d ? null : ri.b(d), z, "-") : Z.call(null, null == d ? null : ri.b(d), z, "-"), Z.m ? Z.m(function() {
    var a = null == d ? null : zj.b(d);
    return null == a ? null : Nh.b(a);
  }(), Ti, 0, z, "-") : Z.call(null, function() {
    var a = null == d ? null : zj.b(d);
    return null == a ? null : Nh.b(a);
  }(), Ti, 0, z, "-"), Cn.m ? Cn.m(function() {
    var a = null == d ? null : xj.b(d);
    return null == a ? null : Nh.b(a);
  }(), nj, 2, z, "-") : Cn.call(null, function() {
    var a = null == d ? null : xj.b(d);
    return null == a ? null : Nh.b(a);
  }(), nj, 2, z, "-"), Z.m ? Z.m(function() {
    var a = null == d ? null : Bi.b(d);
    return null == a ? null : Nh.b(a);
  }(), Ti, 0, z, "-") : Z.call(null, function() {
    var a = null == d ? null : Bi.b(d);
    return null == a ? null : Nh.b(a);
  }(), Ti, 0, z, "-"), Z.c ? Z.c(null == d ? null : Ji.b(d), z, "-") : Z.call(null, null == d ? null : Ji.b(d), z, "-"), Cn.m ? Cn.m(function() {
    var a = null == d ? null : Yi.b(d);
    return null == a ? null : Nh.b(a);
  }(), nj, 2, z, "-") : Cn.call(null, function() {
    var a = null == d ? null : Yi.b(d);
    return null == a ? null : Nh.b(a);
  }(), nj, 2, z, "-")])], 0))], null);
}
function Hn(a) {
  return null == a ? null : 0 < a ? React.d.o({className:"icon-positive"}) : 0 > a ? React.d.o({className:"icon-negative"}) : null;
}
var Jn = function In(b) {
  var c = Gn(b), c = P(c) ? N.a(T, c) : c, d = J.a(c, Wj), e = J.a(c, tj), f = J.a(c, Uh);
  "undefined" === typeof En && (En = function(b, c, d, e, f, v, D) {
    this.selection = b;
    this.xa = c;
    this.ya = d;
    this.Tf = e;
    this.data = f;
    this.Xg = v;
    this.og = D;
    this.p = 0;
    this.g = 393216;
  }, En.Q = !0, En.P = "clustermap.components.full-report.overview/t22554", En.U = function(b, c) {
    return hc(c, "clustermap.components.full-report.overview/t22554");
  }, En.prototype.Ga = !0, En.prototype.Da = function() {
    var b = this;
    return React.d.R({className:"full-report-overview"}, React.d.zi(null, "Overview of latest filings"), React.d.R({className:"table-responsive"}, React.d.table({className:"table-stats"}, React.d.bf(null, React.d.Db(null, React.d.aa(null, "\u00a0"), React.d.aa(null, "Portfolio Companies"), React.d.aa(null, "Investors"), React.d.aa(null, "Constituencies"), React.d.aa(null, "Revenue"), React.d.aa({colSpan:"2"}, "Rev. change"), React.d.aa(null, "Employees"), React.d.aa({colSpan:"2"}, "Emp. change"))), 
    React.d.Yc(null, React.d.Db(null, React.d.aa(null, React.d.o({className:"icon-info", "data-toggle":"tooltip", "data-container":"body", title:b.selection.b ? b.selection.b(Rj) : b.selection.call(null, Rj)}), V(b.selection.b ? b.selection.b(Xh) : b.selection.call(null, Xh))), React.d.r(null, function() {
      var c = Og.b(b.selection);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = oi.b(b.selection);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = Di.b(b.selection);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = Yi.b(b.selection);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = Hn(Bh.b(b.selection));
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = qi.b(b.selection);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = ti.b(b.selection);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = Hn(mh.b(b.selection));
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }()), React.d.r(null, function() {
      var c = pi.b(b.selection);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["selection"], null)], null), c], 0))), null) : React.d.span({className:"selection"}, V(c));
    }())), React.d.Db(null, React.d.aa(null, React.d.o({className:"icon-info", "data-toggle":"tooltip", "data-container":"body", title:b.xa.b ? b.xa.b(Rj) : b.xa.call(null, Rj)}), V(b.xa.b ? b.xa.b(Xh) : b.xa.call(null, Xh))), React.d.r(null, function() {
      var c = Og.b(b.xa);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = oi.b(b.xa);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = Di.b(b.xa);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = Yi.b(b.xa);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = Hn(Bh.b(b.xa));
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = qi.b(b.xa);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = ti.b(b.xa);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = Hn(mh.b(b.xa));
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }()), React.d.r(null, function() {
      var c = pi.b(b.xa);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["averages"], null)], null), c], 0))), null) : React.d.span({className:"averages"}, V(c));
    }())), React.d.Db(null, React.d.aa(null, React.d.o({className:"icon-info", "data-toggle":"tooltip", "data-container":"body", title:b.ya.b ? b.ya.b(Rj) : b.ya.call(null, Rj)}), V(b.ya.b ? b.ya.b(Xh) : b.ya.call(null, Xh))), React.d.r(null, function() {
      var c = Og.b(b.ya);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = oi.b(b.ya);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = Di.b(b.ya);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = Yi.b(b.ya);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = Hn(Bh.b(b.ya));
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = qi.b(b.ya);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = ti.b(b.ya);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = Hn(mh.b(b.ya));
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()), React.d.r(null, function() {
      var c = pi.b(b.ya);
      return O(c) ? React.d.span(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["benchmark"], null)], null), c], 0))), null) : React.d.span({className:"benchmark"}, V(c));
    }()))))));
  }, En.prototype.s = function() {
    return this.og;
  }, En.prototype.t = function(b, c) {
    return new En(this.selection, this.xa, this.ya, this.Tf, this.data, this.Xg, c);
  });
  return new En(f, e, d, c, b, In, null);
};
var Kn = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/, om = new n(null, 4, '\x26 \x26amp; \x3c \x26lt; \x3e \x26gt; " \x26quot;'.split(" "), null), Ln = new Sf(null, new n(null, 33, ["dd", null, "head", null, "a", null, "b", null, "body", null, "pre", null, "form", null, "iframe", null, "dl", null, "em", null, "fieldset", null, "i", null, "h1", null, "h2", null, "span", null, "h3", null, "script", null, "html", null, "h4", null, "h5", null, "h6", null, "table", null, "dt", null, "div", null, "style", 
null, "label", null, "option", null, "ul", null, "strong", null, "canvas", null, "textarea", null, "li", null, "ol", null], null), null);
function Mn(a) {
  return a instanceof Q || a instanceof Ac ? Jd(a) : "" + w(a);
}
function Nn(a, b) {
  return[w(" "), w(Mn(a)), w('\x3d"'), w(nm(Mn(b))), w('"')].join("");
}
function On(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  return!0 === a ? y.a(Tg, Tg) ? Nn(b, b) : [w(" "), w(Mn(b))].join("") : jb(a) ? "" : t ? Nn(b, a) : null;
}
function Pn(a) {
  return N.a(w, td.b(he.a(On, a)));
}
var Rn = function Qn(b) {
  if (id(b)) {
    var c, d = I.c(b, 0, null);
    b = yd(b);
    if (!(d instanceof Q || d instanceof Ac || "string" === typeof d)) {
      throw[w(d), w(" is not a valid tag name")].join("");
    }
    var e = dg(Kn, Mn(d));
    I.c(e, 0, null);
    d = I.c(e, 1, null);
    c = I.c(e, 2, null);
    e = I.c(e, 3, null);
    c = new n(null, 2, [Mj, c, Lh, q(e) ? gm(e, ".", " ") : null], null);
    e = B(b);
    c = O(e) ? new R(null, 3, 5, S, [d, Rf.e(F([c, e], 0)), E(b)], null) : new R(null, 3, 5, S, [d, c, b], null);
    b = I.c(c, 0, null);
    d = I.c(c, 1, null);
    c = I.c(c, 2, null);
    b = q(q(c) ? c : Ln.b ? Ln.b(b) : Ln.call(null, b)) ? [w("\x3c"), w(b), w(Pn(d)), w("\x3e"), w(Rn.b ? Rn.b(c) : Rn.call(null, c)), w("\x3c/"), w(b), w("\x3e")].join("") : [w("\x3c"), w(b), w(Pn(d)), w(y.a(Tg, Tg) ? " /\x3e" : "\x3e")].join("");
  } else {
    b = P(b) ? N.a(w, he.a(Qn, b)) : t ? Mn(b) : null;
  }
  return b;
};
var Sn = yl("goog.net.xpc");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Tn;
function Un(a, b, c) {
  if (a ? a.Ac : a) {
    return a.Ac(0, b, c);
  }
  var d;
  d = Un[m(null == a ? null : a)];
  if (!d && (d = Un._, !d)) {
    throw u("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function Vn(a) {
  if (a ? a.zc : a) {
    return a.zc();
  }
  var b;
  b = Vn[m(null == a ? null : a)];
  if (!b && (b = Vn._, !b)) {
    throw u("Channel.close!", a);
  }
  return b.call(null, a);
}
function Wn(a) {
  if (a ? a.qe : a) {
    return!0;
  }
  var b;
  b = Wn[m(null == a ? null : a)];
  if (!b && (b = Wn._, !b)) {
    throw u("Handler.active?", a);
  }
  return b.call(null, a);
}
function Xn(a) {
  if (a ? a.xc : a) {
    return a.xc(a);
  }
  var b;
  b = Xn[m(null == a ? null : a)];
  if (!b && (b = Xn._, !b)) {
    throw u("Buffer.full?", a);
  }
  return b.call(null, a);
}
function Yn(a) {
  if (a ? a.yc : a) {
    return a.yc(a);
  }
  var b;
  b = Yn[m(null == a ? null : a)];
  if (!b && (b = Yn._, !b)) {
    throw u("Buffer.remove!", a);
  }
  return b.call(null, a);
}
;function Zn(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function $n(a, b, c, d) {
  this.head = a;
  this.B = b;
  this.length = c;
  this.f = d;
}
$n.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.f[this.B];
  this.f[this.B] = null;
  this.B = (this.B + 1) % this.f.length;
  this.length -= 1;
  return a;
};
$n.prototype.unshift = function(a) {
  this.f[this.head] = a;
  this.head = (this.head + 1) % this.f.length;
  this.length += 1;
  return null;
};
function ao(a, b) {
  a.length + 1 === a.f.length && a.resize();
  a.unshift(b);
}
$n.prototype.resize = function() {
  var a = Array(2 * this.f.length);
  return this.B < this.head ? (Zn(this.f, this.B, a, 0, this.length), this.B = 0, this.head = this.length, this.f = a) : this.B > this.head ? (Zn(this.f, this.B, a, 0, this.f.length - this.B), Zn(this.f, 0, a, this.f.length - this.B, this.head), this.B = 0, this.head = this.length, this.f = a) : this.B === this.head ? (this.head = this.B = 0, this.f = a) : null;
};
function bo(a, b) {
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
function co(a) {
  if (!(0 < a)) {
    throw Error([w("Assert failed: "), w("Can't create a ring buffer of size 0"), w("\n"), w(og.e(F([Gd(new Ac(null, "\x3e", "\x3e", -1640531465, null), new Ac(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new $n(0, 0, 0, Array(a));
}
function eo(a, b) {
  this.ba = a;
  this.Sd = b;
  this.p = 0;
  this.g = 2;
}
eo.prototype.H = function() {
  return this.ba.length;
};
eo.prototype.xc = function() {
  return this.ba.length === this.Sd;
};
eo.prototype.yc = function() {
  return this.ba.pop();
};
eo.prototype.pe = function(a, b) {
  if (!jb(Xn(this))) {
    throw Error([w("Assert failed: "), w("Can't add to a full buffer"), w("\n"), w(og.e(F([Gd(new Ac(null, "not", "not", -1640422260, null), Gd(new Ac("impl", "full?", "impl/full?", -1337857039, null), new Ac(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  return this.ba.unshift(b);
};
function fo(a, b) {
  this.ba = a;
  this.Sd = b;
  this.p = 0;
  this.g = 2;
}
fo.prototype.H = function() {
  return this.ba.length;
};
fo.prototype.xc = function() {
  return!1;
};
fo.prototype.yc = function() {
  return this.ba.pop();
};
fo.prototype.pe = function(a, b) {
  this.ba.length === this.Sd && Yn(this);
  return this.ba.unshift(b);
};
var go = null, ho = co(32), io = !1, jo = !1;
function ko() {
  io = !0;
  jo = !1;
  for (var a = 0;;) {
    var b = ho.pop();
    if (null != b && (b.q ? b.q() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  io = !1;
  return 0 < ho.length ? lo.q ? lo.q() : lo.call(null) : null;
}
"undefined" !== typeof MessageChannel && (go = new MessageChannel, go.port1.onmessage = function() {
  return ko();
});
function lo() {
  var a = jo;
  if (q(a ? io : a)) {
    return null;
  }
  jo = !0;
  return "undefined" !== typeof MessageChannel ? go.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(ko) : t ? setTimeout(ko, 0) : null;
}
function mo(a) {
  ao(ho, a);
  lo();
}
;function no(a) {
  ek.call(this);
  this.Mf = a;
  this.ca = [];
}
ta(no, ek);
var po = [];
function qo(a, b, c, d) {
  "array" != m(c) && (po[0] = c, c = po);
  for (var e = 0;e < c.length;e++) {
    var f = Pk(b, c[e], d || a, !1, a.Mf || a);
    a.ca.push(f);
  }
}
no.prototype.Ba = function() {
  no.Bb.Ba.call(this);
  Ia(this.ca, Vk);
  this.ca.length = 0;
};
no.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function ro(a) {
  Gk.call(this, "navigate");
  this.uh = a;
}
ta(ro, Gk);
function so(a, b, c, d) {
  ek.call(this);
  if (a && !b) {
    throw Error("Can't use invisible history without providing a blank page.");
  }
  var e;
  c ? e = c : (e = "history_state" + to, document.write(ua(uo, e, e)), e = ga(e) ? document.getElementById(e) : e);
  this.dc = e;
  this.Wa = c ? em(c) ? em(c).parentWindow || em(c).defaultView : window : window;
  this.mf = this.Wa.location.href.split("#")[0];
  this.Fc = b;
  qk && !b && (this.Fc = "https" == window.location.protocol ? "https:///" : 'javascript:""');
  this.na = new al(vo);
  b = ra(hk, this.na);
  this.lc || (this.lc = []);
  this.lc.push(qa(b, void 0));
  this.Eb = !a;
  this.tb = new no(this);
  if (a || wo) {
    d ? a = d : (a = "history_iframe" + to, d = this.Fc ? 'src\x3d"' + wa(this.Fc) + '"' : "", document.write(ua(xo, a, d)), a = ga(a) ? document.getElementById(a) : a), this.Qb = a, this.df = !0;
  }
  wo && (qo(this.tb, this.Wa, "load", this.Rg), this.af = this.Bd = !1);
  this.Eb ? yo(this, zo(this), !0) : Ao(this, this.dc.value);
  to++;
}
ta(so, $k);
so.prototype.bc = !1;
so.prototype.Tb = !1;
so.prototype.Rb = null;
var Bo = qk && qk && 8 <= Dk || rk && Bk("1.9.2") || sk && Bk("532.1"), wo = qk && !(qk && 8 <= Dk);
h = so.prototype;
h.Sb = null;
h.Ba = function() {
  so.Bb.Ba.call(this);
  this.tb.ac();
  Co(this, !1);
};
function Co(a, b) {
  if (b != a.bc) {
    if (wo && !a.Bd) {
      a.af = b;
    } else {
      if (b) {
        if (pk ? qo(a.tb, a.Wa.document, Do, a.Vg) : rk && qo(a.tb, a.Wa, "pageshow", a.Ug), Bo && a.Eb) {
          qo(a.tb, a.Wa, "hashchange", a.Sg), a.bc = !0, a.dispatchEvent(new ro(zo(a)));
        } else {
          if (!qk || a.Bd) {
            qo(a.tb, a.na, bl, qa(a.ge, a, !0)), a.bc = !0, wo || (a.Rb = zo(a), a.dispatchEvent(new ro(zo(a)))), a.na.start();
          }
        }
      } else {
        a.bc = !1;
        var c = a.tb;
        Ia(c.ca, Vk);
        c.ca.length = 0;
        a.na.stop();
      }
    }
  }
}
h.Rg = function() {
  this.Bd = !0;
  this.dc.value && Ao(this, this.dc.value, !0);
  Co(this, this.af);
};
h.Ug = function(a) {
  a.Gd.persisted && (Co(this, !1), Co(this, !0));
};
h.Sg = function() {
  var a = Eo(this.Wa);
  a != this.Rb && Fo(this, a);
};
function zo(a) {
  return null != a.Sb ? a.Sb : a.Eb ? Eo(a.Wa) : Go(a) || "";
}
function Ho(a, b) {
  zo(a) != b && (a.Eb ? (yo(a, b, !1), Bo || qk && Ao(a, b, !1, void 0), a.bc && a.ge()) : (Ao(a, b, !1), a.Sb = a.Rb = a.dc.value = b, a.dispatchEvent(new ro(b))));
}
function Eo(a) {
  a = a.location.href;
  var b = a.indexOf("#");
  return 0 > b ? "" : a.substring(b + 1);
}
function yo(a, b, c) {
  var d = a.Wa.location;
  a = a.mf;
  var e = -1 != d.href.indexOf("#");
  if (wo || e || b) {
    a += "#" + b;
  }
  a != d.href && (c ? d.replace(a) : d.href = a);
}
function Ao(a, b, c, d) {
  if (a.df || b != Go(a)) {
    if (a.df = !1, b = encodeURIComponent(String(b)), qk) {
      var e = a.Qb.contentDocument || a.Qb.contentWindow.document;
      e.open("text/html", c ? "replace" : void 0);
      e.write(ua(Io, wa(d || a.Wa.document.title), b));
      e.close();
    } else {
      if (b = a.Fc + "#" + b, a = a.Qb.contentWindow) {
        c ? a.location.replace(b) : a.location.href = b;
      }
    }
  }
}
function Go(a) {
  if (qk) {
    return a = a.Qb.contentDocument || a.Qb.contentWindow.document, a.body ? decodeURIComponent(a.body.innerHTML.replace(/\+/g, " ")) : null;
  }
  var b = a.Qb.contentWindow;
  if (b) {
    var c;
    try {
      c = decodeURIComponent(Eo(b).replace(/\+/g, " "));
    } catch (d) {
      return a.Tb || (!0 != a.Tb && a.na.setInterval(Jo), a.Tb = !0), null;
    }
    a.Tb && (!1 != a.Tb && a.na.setInterval(vo), a.Tb = !1);
    return c || null;
  }
  return null;
}
h.ge = function() {
  if (this.Eb) {
    var a = Eo(this.Wa);
    a != this.Rb && Fo(this, a);
  }
  if (!this.Eb || wo) {
    if (a = Go(this) || "", null == this.Sb || a == this.Sb) {
      this.Sb = null, a != this.Rb && Fo(this, a);
    }
  }
};
function Fo(a, b) {
  a.Rb = a.dc.value = b;
  a.Eb ? (wo && Ao(a, b), yo(a, b)) : Ao(a, b);
  a.dispatchEvent(new ro(zo(a)));
}
h.Vg = function() {
  this.na.stop();
  this.na.start();
};
var Do = ["mousedown", "keydown", "mousemove"], Io = "\x3ctitle\x3e%s\x3c/title\x3e\x3cbody\x3e%s\x3c/body\x3e", xo = '\x3ciframe id\x3d"%s" style\x3d"display:none" %s\x3e\x3c/iframe\x3e', uo = '\x3cinput type\x3d"text" name\x3d"%s" id\x3d"%s" style\x3d"display:none"\x3e', to = 0, vo = 150, Jo = 1E4;
function Ko(a) {
  a = null == a ? null : new Date(a);
  a = null == a ? null : a.getYear();
  return null == a ? null : a + 1900;
}
;var Lo, Mo;
function No(a, b, c, d) {
  var e = B(d);
  return(d = E(d)) ? (a = a.a ? a.a(c, e) : a.call(null, c, e), O(a) ? React.d.R(X(a), React.d.jb({href:b}, "\u00a0(", V(H(d)), " more...)")) : React.d.R(null, V(a), React.d.jb({href:b}, "\u00a0(", V(H(d)), " more...)"))) : a.a ? a.a(c, e) : a.call(null, c, e);
}
var Po = function Oo(b, c, d) {
  var e = P(d) ? N.a(T, d) : d, f = J.a(e, Yj), g = J.a(e, wh), k = f.a ? f.a(Qh, b) : f.call(null, Qh, b);
  "undefined" === typeof Lo && (Lo = function(b, c, d, e, f, g, k, W, U, ha) {
    this.sb = b;
    this.ja = c;
    this.S = d;
    this.Ea = e;
    this.Sf = f;
    this.Zg = g;
    this.u = k;
    this.Wb = W;
    this.jh = U;
    this.mg = ha;
    this.p = 0;
    this.g = 393216;
  }, Lo.Q = !0, Lo.P = "clustermap.components.full-report.company-site-list/t22430", Lo.U = function(b, c) {
    return hc(c, "clustermap.components.full-report.company-site-list/t22430");
  }, Lo.prototype.Ga = !0, Lo.prototype.Da = function() {
    var b = this;
    return React.d.Db(null, function() {
      var c = b.ja.a ? b.ja.a(Qh, b.Wb) : b.ja.call(null, Qh, b.Wb);
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = bi.b(b.Wb);
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = No(b.ja, b.sb, Gj, Ej.b(b.Wb));
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = No(b.ja, b.sb, yh, function() {
        var c = b.Wb, d = null == c ? null : oh.b(c);
        return null == d ? null : te(function() {
          return function(b) {
            return y.a("uk_constituencies", vh.b(b));
          };
        }(c, d), d);
      }());
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }());
  }, Lo.prototype.s = function() {
    return this.mg;
  }, Lo.prototype.t = function(b, c) {
    return new Lo(this.sb, this.ja, this.S, this.Ea, this.Sf, this.Zg, this.u, this.Wb, this.jh, c);
  });
  return new Lo(k, g, f, e, e, d, c, b, Oo, null);
}, Ro = function Qo(b, c, d) {
  "undefined" === typeof Mo && (Mo = function(b, c, d, k, l) {
    this.Ea = b;
    this.u = c;
    this.Ye = d;
    this.Ff = k;
    this.ng = l;
    this.p = 0;
    this.g = 393216;
  }, Mo.Q = !0, Mo.P = "clustermap.components.full-report.company-site-list/t22444", Mo.U = function(b, c) {
    return hc(c, "clustermap.components.full-report.company-site-list/t22444");
  }, Mo.prototype.Ga = !0, Mo.prototype.Da = function() {
    var b = this;
    return React.d.R({className:"full-report-list"}, React.d.R({className:"table-responsive"}, React.d.table({className:"table"}, React.d.bf(null, React.d.Db(null, React.d.aa(null, "Portfolio Company"), React.d.aa(null, "Postcode"), React.d.aa(null, "Investor"), React.d.aa(null, "Constituency"))), function() {
      var c = vn.c(Po, gh.b(b.Ye), new n(null, 2, [Kh, Oj, vj, b.Ea], null));
      return O(c) ? React.d.Yc(X(c), null) : React.d.Yc(null, V(c));
    }())));
  }, Mo.prototype.s = function() {
    return this.ng;
  }, Mo.prototype.t = function(b, c) {
    return new Mo(this.Ea, this.u, this.Ye, this.Ff, c);
  });
  return new Mo(d, c, b, Qo, null);
};
var So, To;
function Uo(a, b, c, d) {
  var e = B(d);
  return(d = E(d)) ? (a = a.a ? a.a(c, e) : a.call(null, c, e), O(a) ? React.d.R(X(a), React.d.jb({href:b}, "\u00a0(", V(H(d)), " more...)")) : React.d.R(null, V(a), React.d.jb({href:b}, "\u00a0(", V(H(d)), " more...)"))) : a.a ? a.a(c, e) : a.call(null, c, e);
}
function Vo(a) {
  return null == a ? null : 0 < a ? React.d.o({className:"icon-positive"}) : 0 > a ? React.d.o({className:"icon-negative"}) : null;
}
var Xo = function Wo(b, c, d) {
  var e = P(d) ? N.a(T, d) : d, f = J.a(e, Yj), g = J.a(e, wh), k = f.a ? f.a(Qh, b) : f.call(null, Qh, b);
  "undefined" === typeof So && (So = function(b, c, d, e, f, g, k, W, U, ha) {
    this.sb = b;
    this.ja = c;
    this.S = d;
    this.Ea = e;
    this.Rf = f;
    this.Yg = g;
    this.u = k;
    this.ha = W;
    this.Tc = U;
    this.kg = ha;
    this.p = 0;
    this.g = 393216;
  }, So.Q = !0, So.P = "clustermap.components.full-report.company-list/t22392", So.U = function(b, c) {
    return hc(c, "clustermap.components.full-report.company-list/t22392");
  }, So.prototype.Ga = !0, So.prototype.Da = function() {
    var b = this;
    return React.d.Db(null, function() {
      var c = b.ja.a ? b.ja.a(Qh, b.ha) : b.ja.call(null, Qh, b.ha);
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Uo(b.ja, b.sb, Gj, Ej.b(b.ha));
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Uo(b.ja, b.sb, yh, function() {
        var c = b.ha, d = null == c ? null : oh.b(c);
        return null == d ? null : te(function() {
          return function(b) {
            return y.a("uk_constituencies", vh.b(b));
          };
        }(c, d), d);
      }());
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Cn.m ? Cn.m(di.b(b.ha), nj, 2, z, "-") : Cn.call(null, di.b(b.ha), nj, 2, z, "-");
      return O(c) ? React.d.r(X(c), React.d.small(null, "\u00a0(", V(function() {
        var c = Ko(fh.b(b.ha));
        return q(c) ? c : "no info";
      }()), ")")) : React.d.r(null, V(c), React.d.small(null, "\u00a0(", V(function() {
        var c = Ko(fh.b(b.ha));
        return q(c) ? c : "no info";
      }()), ")"));
    }(), function() {
      var c = Vo(Vi.b(b.ha));
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Cn.m ? Cn.m(Vi.b(b.ha), nj, 2, z, "-") : Cn.call(null, Vi.b(b.ha), nj, 2, z, "-");
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Z.m ? Z.m(sj.b(b.ha), Ti, 0, z, "-") : Z.call(null, sj.b(b.ha), Ti, 0, z, "-");
      return O(c) ? React.d.r(X(c), React.d.small(null, "\u00a0(", V(function() {
        var c = Ko(fh.b(b.ha));
        return q(c) ? c : "no info";
      }()), ")")) : React.d.r(null, V(c), React.d.small(null, "\u00a0(", V(function() {
        var c = Ko(fh.b(b.ha));
        return q(c) ? c : "no info";
      }()), ")"));
    }(), function() {
      var c = Vo(eh.b(b.ha));
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }(), function() {
      var c = Z.m ? Z.m(eh.b(b.ha), Ti, 0, z, "-") : Z.call(null, eh.b(b.ha), Ti, 0, z, "-");
      return O(c) ? React.d.r(X(c), null) : React.d.r(null, V(c));
    }());
  }, So.prototype.s = function() {
    return this.kg;
  }, So.prototype.t = function(b, c) {
    return new So(this.sb, this.ja, this.S, this.Ea, this.Rf, this.Yg, this.u, this.ha, this.Tc, c);
  });
  return new So(k, g, f, e, e, d, c, b, Wo, null);
}, Zo = function Yo(b, c, d) {
  "undefined" === typeof To && (To = function(b, c, d, k, l) {
    this.Ea = b;
    this.u = c;
    this.ye = d;
    this.Ef = k;
    this.lg = l;
    this.p = 0;
    this.g = 393216;
  }, To.Q = !0, To.P = "clustermap.components.full-report.company-list/t22411", To.U = function(b, c) {
    return hc(c, "clustermap.components.full-report.company-list/t22411");
  }, To.prototype.Ga = !0, To.prototype.Da = function() {
    var b = this;
    return React.d.R({className:"full-report-list"}, React.d.R({className:"table-responsive"}, React.d.table({className:"table"}, React.d.bf(null, React.d.Db(null, React.d.aa(null, "Portfolio Company"), React.d.aa(null, "Investor"), React.d.aa(null, "Constituency"), React.d.aa(null, "Revenue"), React.d.aa({colSpan:"2"}, "Rev. change"), React.d.aa(null, "Employees"), React.d.aa({colSpan:"2"}, "Emp. change"))), function() {
      var c = vn.c(Xo, gh.b(b.ye), new n(null, 2, [Kh, Oj, vj, b.Ea], null));
      return O(c) ? React.d.Yc(X(c), null) : React.d.Yc(null, V(c));
    }())));
  }, To.prototype.s = function() {
    return this.lg;
  }, To.prototype.t = function(b, c) {
    return new To(this.Ea, this.u, this.ye, this.Ef, c);
  });
  return new To(d, c, b, Yo, null);
};
function $o(a) {
  if (a ? a.re : a) {
    return a.re();
  }
  var b;
  b = $o[m(null == a ? null : a)];
  if (!b && (b = $o._, !b)) {
    throw u("PushbackReader.read-char", a);
  }
  return b.call(null, a);
}
function ap(a, b) {
  if (a ? a.se : a) {
    return a.se(0, b);
  }
  var c;
  c = ap[m(null == a ? null : a)];
  if (!c && (c = ap._, !c)) {
    throw u("PushbackReader.unread", a);
  }
  return c.call(null, a, b);
}
function bp(a, b, c) {
  this.L = a;
  this.buffer = b;
  this.Md = c;
}
bp.prototype.re = function() {
  return 0 === this.buffer.length ? (this.Md += 1, this.L[this.Md]) : this.buffer.pop();
};
bp.prototype.se = function(a, b) {
  return this.buffer.push(b);
};
function cp(a) {
  var b = !/[^\t\n\r ]/.test(a);
  return q(b) ? b : "," === a;
}
var dp = function() {
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
function ep(a, b) {
  for (var c = new Xa(b), d = $o(a);;) {
    var e;
    if (!(e = null == d) && !(e = cp(d))) {
      e = d;
      var f = "#" !== e;
      e = f ? (f = "'" !== e) ? (f = ":" !== e) ? fp.b ? fp.b(e) : fp.call(null, e) : f : f : f;
    }
    if (e) {
      return ap(a, d), c.toString();
    }
    c.append(d);
    d = $o(a);
  }
}
function gp(a) {
  for (;;) {
    var b = $o(a);
    if ("\n" === b || "\r" === b || null == b) {
      return a;
    }
  }
}
var hp = fg("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?"), ip = fg("([-+]?[0-9]+)/([0-9]+)"), jp = fg("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?"), kp = fg("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
function lp(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === c.length ? c[0] : c;
}
function mp(a, b) {
  var c = a.exec(b);
  return null != c && c[0] === b ? 1 === c.length ? c[0] : c : null;
}
var np = fg("[0-9A-Fa-f]{2}"), op = fg("[0-9A-Fa-f]{4}");
function pp(a, b, c, d) {
  return q(dg(a, d)) ? d : dp.e(b, F(["Unexpected unicode escape \\", c, d], 0));
}
function qp(a) {
  return String.fromCharCode(parseInt(a, 16));
}
function rp(a) {
  var b = $o(a), c = "t" === b ? "\t" : "r" === b ? "\r" : "n" === b ? "\n" : "\\" === b ? "\\" : '"' === b ? '"' : "b" === b ? "\b" : "f" === b ? "\f" : null;
  return q(c) ? c : "x" === b ? qp(pp(np, a, b, (new Xa($o(a), $o(a))).toString())) : "u" === b ? qp(pp(op, a, b, (new Xa($o(a), $o(a), $o(a), $o(a))).toString())) : /[^0-9]/.test(b) ? t ? dp.e(a, F(["Unexpected unicode escape \\", b], 0)) : null : String.fromCharCode(b);
}
function sp(a, b) {
  for (var c = nc(Ue);;) {
    var d;
    a: {
      d = cp;
      for (var e = b, f = $o(e);;) {
        if (q(d.b ? d.b(f) : d.call(null, f))) {
          f = $o(e);
        } else {
          d = f;
          break a;
        }
      }
      d = void 0;
    }
    q(d) || dp.e(b, F(["EOF while reading"], 0));
    if (a === d) {
      return pc(c);
    }
    e = fp.b ? fp.b(d) : fp.call(null, d);
    q(e) ? d = e.a ? e.a(b, d) : e.call(null, b, d) : (ap(b, d), d = tp.i ? tp.i(b, !0, null, !0) : tp.call(null, b, !0, null));
    c = d === b ? c : oc(c, d);
  }
}
function up(a, b) {
  return dp.e(a, F(["Reader for ", b, " not implemented yet"], 0));
}
function vp(a, b) {
  var c = $o(a), d = wp.b ? wp.b(c) : wp.call(null, c);
  if (q(d)) {
    return d.a ? d.a(a, b) : d.call(null, a, b);
  }
  d = xp.a ? xp.a(a, c) : xp.call(null, a, c);
  return q(d) ? d : dp.e(a, F(["No dispatch macro for ", c], 0));
}
function yp(a, b) {
  return dp.e(a, F(["Unmached delimiter ", b], 0));
}
function zp(a) {
  return N.a(Gd, sp(")", a));
}
function Ap(a) {
  return sp("]", a);
}
function Cp(a) {
  var b = sp("}", a);
  var c = H(b);
  if ("number" !== typeof c || isNaN(c) || Infinity === c || parseFloat(c) !== parseInt(c, 10)) {
    throw Error([w("Argument must be an integer: "), w(c)].join(""));
  }
  0 !== (c & 1) && dp.e(a, F(["Map literal must contain an even number of forms"], 0));
  return N.a(T, b);
}
function Dp(a) {
  for (var b = new Xa, c = $o(a);;) {
    if (null == c) {
      return dp.e(a, F(["EOF while reading"], 0));
    }
    if ("\\" === c) {
      b.append(rp(a)), c = $o(a);
    } else {
      if ('"' === c) {
        return b.toString();
      }
      if (z) {
        b.append(c), c = $o(a);
      } else {
        return null;
      }
    }
  }
}
function Ep(a, b) {
  var c = ep(a, b);
  if (q(-1 != c.indexOf("/"))) {
    c = Dc.a(zd.c(c, 0, c.indexOf("/")), zd.c(c, c.indexOf("/") + 1, c.length));
  } else {
    var d = Dc.b(c), c = "nil" === c ? null : "true" === c ? !0 : "false" === c ? !1 : t ? d : null
  }
  return c;
}
function Fp(a) {
  var b = ep(a, $o(a)), c = mp(kp, b), b = c[0], d = c[1], c = c[2];
  return void 0 !== d && ":/" === d.substring(d.length - 2, d.length) || ":" === c[c.length - 1] || -1 !== b.indexOf("::", 1) ? dp.e(a, F(["Invalid token: ", b], 0)) : null != d && 0 < d.length ? Kd.a(d.substring(0, d.indexOf("/")), c) : Kd.b(b);
}
function Gp(a) {
  return function(b) {
    return xb(xb(Gc, tp.i ? tp.i(b, !0, null, !0) : tp.call(null, b, !0, null)), a);
  };
}
function Hp() {
  return function(a) {
    return dp.e(a, F(["Unreadable form"], 0));
  };
}
function Ip(a) {
  var b;
  b = tp.i ? tp.i(a, !0, null, !0) : tp.call(null, a, !0, null);
  b = b instanceof Ac ? new n(null, 1, [Uj, b], null) : "string" === typeof b ? new n(null, 1, [Uj, b], null) : b instanceof Q ? new qf([b, !0]) : t ? b : null;
  O(b) || dp.e(a, F(["Metadata must be Symbol,Keyword,String or Map"], 0));
  var c = tp.i ? tp.i(a, !0, null, !0) : tp.call(null, a, !0, null);
  return(c ? c.g & 262144 || c.Af || (c.g ? 0 : r(Wb, c)) : r(Wb, c)) ? Sc(c, Rf.e(F([bd(c), b], 0))) : dp.e(a, F(["Metadata can only be applied to IWithMetas"], 0));
}
function Jp(a) {
  return Vf(sp("}", a));
}
function Kp(a) {
  return fg(Dp(a));
}
function Lp(a) {
  tp.i ? tp.i(a, !0, null, !0) : tp.call(null, a, !0, null);
  return a;
}
function fp(a) {
  return'"' === a ? Dp : ":" === a ? Fp : ";" === a ? gp : "'" === a ? Gp(new Ac(null, "quote", "quote", -1532577739, null)) : "@" === a ? Gp(new Ac(null, "deref", "deref", -1545057749, null)) : "^" === a ? Ip : "`" === a ? up : "~" === a ? up : "(" === a ? zp : ")" === a ? yp : "[" === a ? Ap : "]" === a ? yp : "{" === a ? Cp : "}" === a ? yp : "\\" === a ? $o : "#" === a ? vp : null;
}
function wp(a) {
  return "{" === a ? Jp : "\x3c" === a ? Hp() : '"' === a ? Kp : "!" === a ? gp : "_" === a ? Lp : null;
}
function tp(a, b, c) {
  for (;;) {
    var d = $o(a);
    if (null == d) {
      return q(b) ? dp.e(a, F(["EOF while reading"], 0)) : c;
    }
    if (!cp(d)) {
      if (";" === d) {
        a = gp.a ? gp.a(a, d) : gp.call(null, a);
      } else {
        if (t) {
          var e = fp(d);
          if (q(e)) {
            e = e.a ? e.a(a, d) : e.call(null, a, d);
          } else {
            var e = a, f = void 0;
            !(f = !/[^0-9]/.test(d)) && (f = void 0, f = "+" === d || "-" === d) && (f = $o(e), ap(e, f), f = !/[^0-9]/.test(f));
            if (f) {
              a: {
                e = a;
                d = new Xa(d);
                for (f = $o(e);;) {
                  var g;
                  g = null == f;
                  g || (g = (g = cp(f)) ? g : fp.b ? fp.b(f) : fp.call(null, f));
                  if (q(g)) {
                    ap(e, f);
                    d = d.toString();
                    if (q(mp(hp, d))) {
                      if (g = lp(hp, d), f = g[2], null == f || 1 > f.length) {
                        var f = "-" === g[1] ? -1 : 1, k = q(g[3]) ? [g[3], 10] : q(g[4]) ? [g[4], 16] : q(g[5]) ? [g[5], 8] : q(g[7]) ? [g[7], parseInt(g[7])] : z ? [null, null] : null;
                        g = k[0];
                        k = k[1];
                        f = null == g ? null : f * parseInt(g, k);
                      } else {
                        f = 0;
                      }
                    } else {
                      q(mp(ip, d)) ? (f = lp(ip, d), f = parseInt(f[1]) / parseInt(f[2])) : f = q(mp(jp, d)) ? parseFloat(d) : null;
                    }
                    e = q(f) ? f : dp.e(e, F(["Invalid number format [", d, "]"], 0));
                    break a;
                  }
                  d.append(f);
                  f = $o(e);
                }
                e = void 0;
              }
            } else {
              e = t ? Ep(a, d) : null;
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
function Mp(a) {
  if (y.a(3, H(a))) {
    return a;
  }
  if (3 < H(a)) {
    return zd.c(a, 0, 3);
  }
  if (t) {
    for (a = new Xa(a);;) {
      if (3 > a.lb.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var Np = function() {
  var a = new R(null, 13, 5, S, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new R(null, 13, 5, S, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return J.a(q(d) ? b : a, c);
  };
}(), Op = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Pp(a) {
  a = parseInt(a);
  return jb(isNaN(a)) ? a : null;
}
function Qp(a, b, c, d) {
  a <= b && b <= c || dp.e(null, F([[w(d), w(" Failed:  "), w(a), w("\x3c\x3d"), w(b), w("\x3c\x3d"), w(c)].join("")], 0));
  return b;
}
function Rp(a) {
  var b = dg(Op, a);
  I.c(b, 0, null);
  var c = I.c(b, 1, null), d = I.c(b, 2, null), e = I.c(b, 3, null), f = I.c(b, 4, null), g = I.c(b, 5, null), k = I.c(b, 6, null), l = I.c(b, 7, null), p = I.c(b, 8, null), s = I.c(b, 9, null), v = I.c(b, 10, null);
  if (jb(b)) {
    return dp.e(null, F([[w("Unrecognized date/time syntax: "), w(a)].join("")], 0));
  }
  a = Pp(c);
  var b = function() {
    var a = Pp(d);
    return q(a) ? a : 1;
  }(), c = function() {
    var a = Pp(e);
    return q(a) ? a : 1;
  }(), D = function() {
    var a = Pp(f);
    return q(a) ? a : 0;
  }(), K = function() {
    var a = Pp(g);
    return q(a) ? a : 0;
  }(), M = function() {
    var a = Pp(k);
    return q(a) ? a : 0;
  }(), W = function() {
    var a = Pp(Mp(l));
    return q(a) ? a : 0;
  }(), p = (y.a(p, "-") ? -1 : 1) * (60 * function() {
    var a = Pp(s);
    return q(a) ? a : 0;
  }() + function() {
    var a = Pp(v);
    return q(a) ? a : 0;
  }());
  return new R(null, 8, 5, S, [a, Qp(1, b, 12, "timestamp month field must be in range 1..12"), Qp(1, c, Np.a ? Np.a(b, 0 === ud(a, 4) && (0 !== ud(a, 100) || 0 === ud(a, 400))) : Np.call(null, b, 0 === ud(a, 4) && (0 !== ud(a, 100) || 0 === ud(a, 400))), "timestamp day field must be in range 1..last day in month"), Qp(0, D, 23, "timestamp hour field must be in range 0..23"), Qp(0, K, 59, "timestamp minute field must be in range 0..59"), Qp(0, M, y.a(K, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), 
  Qp(0, W, 999, "timestamp millisecond field must be in range 0..999"), p], null);
}
var Sp = sg.b(new n(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = Rp(a), q(b)) {
      a = I.c(b, 0, null);
      var c = I.c(b, 1, null), d = I.c(b, 2, null), e = I.c(b, 3, null), f = I.c(b, 4, null), g = I.c(b, 5, null), k = I.c(b, 6, null);
      b = I.c(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, k) - 6E4 * b);
    } else {
      b = dp.e(null, F([[w("Unrecognized date/time syntax: "), w(a)].join("")], 0));
    }
  } else {
    b = dp.e(null, F(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Gg(a) : dp.e(null, F(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return id(a) ? xe(ff, a) : dp.e(null, F(["Queue literal expects a vector for its elements."], 0));
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
  return t ? dp.e(null, F([[w("JS literal expects a vector or map containing "), w("only string or unqualified keyword keys")].join("")], 0)) : null;
}], null)), Tp = sg.b(null);
function xp(a, b) {
  var c = Ep(a, b), d = J.a(Tb(Sp), "" + w(c)), e = Tb(Tp);
  return q(d) ? d.b ? d.b(tp(a, !0, null)) : d.call(null, tp(a, !0, null)) : q(e) ? e.a ? e.a(c, tp(a, !0, null)) : e.call(null, c, tp(a, !0, null)) : t ? dp.e(a, F(["Could not find tag parser for ", "" + w(c), " in ", og.e(F([Mf(Tb(Sp))], 0))], 0)) : null;
}
;function Up(a) {
  if ("string" === typeof a) {
    return a;
  }
  if ($c(a)) {
    var b = a.prototype.Yh;
    return q(b) ? [w("[crateGroup\x3d"), w(b), w("]")].join("") : a;
  }
  return a instanceof Q ? Jd(a) : t ? a : null;
}
var Vp = function() {
  function a(a, b) {
    return jQuery(Up(a), b);
  }
  function b(a) {
    return jQuery(Up(a));
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
h.ie = !0;
h.ea = function(a, b) {
  return Ic.a(this, b);
};
h.fa = function(a, b, c) {
  return Ic.c(this, b, c);
};
h.vd = !0;
h.I = function(a, b) {
  var c = this.slice(b, b + 1);
  return q(c) ? c : null;
};
h.J = function(a, b, c) {
  return x.c(this, b, c);
};
h.zf = !0;
h.Ib = !0;
h.w = function(a, b) {
  return b < H(this) ? this.slice(b, b + 1) : null;
};
h.qa = function(a, b, c) {
  return b < H(this) ? this.slice(b, b + 1) : void 0 === c ? null : c;
};
h.Zb = !0;
h.H = function() {
  return this.length;
};
h.Jb = !0;
h.W = function() {
  return this.get(0);
};
h.ga = function() {
  return 1 < H(this) ? this.slice(1) : Gc;
};
h.nb = !0;
h.G = function() {
  return q(this.get(0)) ? this : null;
};
function Wp(a) {
  a = "" + w(a);
  return tp(new bp(a, [], -1), !0, null);
}
jQuery.ai(Ag(new n(null, 3, [Li, new n(null, 2, [ih, "application/edn, text/edn", Ci, "application/clojure, text/clojure"], null), Xj, new n(null, 1, ["clojure", /edn|clojure/], null), lj, new n(null, 2, ["text edn", Wp, "text clojure", Wp], null)], null)));
var Xp;
function Yp(a, b, c) {
  c = P(c) ? N.a(T, c) : c;
  J.a(c, Dj);
  c = J.a(c, ii);
  var d = he.a(Xg, a), e = he.a(rj, a), f = he.a(function() {
    return function(a) {
      return ze.a(a, new R(null, 2, 5, S, [rj, $h], null));
    };
  }(d, e), a);
  a = he.a(function() {
    return function(a) {
      return ze.a(a, new R(null, 2, 5, S, [rj, Nh], null));
    };
  }(d, e, f), a);
  return Vp.b(b).Nf(Ag(new n(null, 5, [Ih, new n(null, 1, [sh, null], null), Ii, new n(null, 1, [Sg, null], null), mj, new n(null, 2, [Wi, d, Jg, new n(null, 1, [Zj, 270], null)], null), dj, new R(null, 1, 5, S, [new n(null, 1, [Ii, new n(null, 1, [Sg, c], null)], null)], null), wj, new R(null, 2, 5, S, [new n(null, 4, [Xh, [w("Median "), w(c)].join(""), aj, "line", dj, 0, Ug, f], null), new n(null, 4, [Xh, [w("Mean "), w(c)].join(""), aj, "line", dj, 0, Ug, a], null)], null)], null)));
}
var $p = function Zp(b, c, d) {
  var e = P(d) ? N.a(T, d) : d, f = J.a(e, Mj);
  "undefined" === typeof Xp && (Xp = function(b, c, d, e, f, v, D, K) {
    this.id = b;
    this.Ea = c;
    this.hg = d;
    this.gh = e;
    this.u = f;
    this.data = v;
    this.sh = D;
    this.yg = K;
    this.p = 0;
    this.g = 393216;
  }, Xp.Q = !0, Xp.P = "clustermap.components.timeline-chart/t23108", Xp.U = function(b, c) {
    return hc(c, "clustermap.components.timeline-chart/t23108");
  }, Xp.prototype.Pe = !0, Xp.prototype.Vd = function() {
    return Yp(this.data, xn(this.u, "chart"), this.Ea);
  }, Xp.prototype.Oe = !0, Xp.prototype.Ud = function() {
    var b = this;
    Yp(b.data, xn(b.u, "chart"), b.Ea);
    return Vp.b(document).kc("clustermap-change-view", function() {
      var c = Vp.b(xn(b.u, "chart"));
      return q(c.Bi(":visible")) ? c.Nf().Ti() : null;
    });
  }, Xp.prototype.Ga = !0, Xp.prototype.Da = function() {
    return React.d.R({className:"timeline-chart", id:this.id, ref:"chart"});
  }, Xp.prototype.s = function() {
    return this.yg;
  }, Xp.prototype.t = function(b, c) {
    return new Xp(this.id, this.Ea, this.hg, this.gh, this.u, this.data, this.sh, c);
  });
  return new Xp(f, e, e, d, c, b, Zp, null);
};
var aq, cq = function bq(b, c) {
  "undefined" === typeof aq && (aq = function(b, c, f, g) {
    this.u = b;
    this.data = c;
    this.qf = f;
    this.jg = g;
    this.p = 0;
    this.g = 393216;
  }, aq.Q = !0, aq.P = "clustermap.components.full-report.charts/t22362", aq.U = function(b, c) {
    return hc(c, "clustermap.components.full-report.charts/t22362");
  }, aq.prototype.Ga = !0, aq.prototype.Da = function() {
    var b;
    b = lh.b(this.data);
    b = q(b) ? new R(null, 2, 5, S, [Si, new R(null, 2, 5, S, [Yh, new R(null, 2, 5, S, [Jj, new R(null, 2, 5, S, [Yh, new R(null, 3, 5, S, [Pi, new R(null, 2, 5, S, [Aj, new R(null, 3, 5, S, [ch, new R(null, 2, 5, S, [ai, "Turnover"], null), un.c($p, Yi.b(b), new n(null, 2, [vj, new n(null, 3, [Mj, "turnover-timeline-chart", ii, "Turnover", Dj, "# Filings"], null), Ah, "turnover-timeline-chart"], null))], null)], null), new R(null, 2, 5, S, [Aj, new R(null, 3, 5, S, [Ei, new R(null, 2, 5, S, [ai, 
    "Employment"], null), un.c($p, Bi.b(b), new n(null, 2, [vj, new n(null, 3, [Mj, "employment-timeline-chart", ii, "Employment", Dj, "# Filings"], null), Ah, "employment-timeline-chart"], null))], null)], null)], null)], null)], null)], null)], null) : null;
    return O(b) ? React.d.R(X(xm.e(F([new n(null, 1, [Lh, new R(null, 1, 5, S, ["full-report-charts"], null)], null), b], 0))), null) : React.d.R({className:"full-report-charts"}, V(b));
  }, aq.prototype.s = function() {
    return this.jg;
  }, aq.prototype.t = function(b, c) {
    return new aq(this.u, this.data, this.qf, c);
  });
  return new aq(c, b, bq, null);
};
function dq(a) {
  return y.a(1, H(a)) && y.a(Qh, function() {
    var b = null == a ? null : Mf(a);
    return null == b ? null : B(b);
  }());
}
var fq = function eq(b, c) {
  var d = P(b) ? N.a(T, b) : b, e = J.a(d, Zg), f = J.a(d, Uh), g = J.a(d, Ph), k = fn.b(c), k = P(k) ? N.a(T, k) : k, l = J.a(k, wh), p = J.a(k, Yj), s = J.a(k, Th);
  "undefined" === typeof Dn && (Dn = function(b, c, d, e, f, g, k, l, s, p, pa, Mc, Mb) {
    this.Kf = b;
    this.S = c;
    this.$g = d;
    this.Uf = e;
    this.data = f;
    this.jf = g;
    this.ja = k;
    this.$d = l;
    this.selection = s;
    this.v = p;
    this.u = pa;
    this.Vf = Mc;
    this.pg = Mb;
    this.p = 0;
    this.g = 393216;
  }, Dn.Q = !0, Dn.P = "clustermap.components.full-report/t22601", Dn.U = function(b, c) {
    return hc(c, "clustermap.components.full-report/t22601");
  }, Dn.prototype.Pe = !0, Dn.prototype.Vd = function(b, c, d, e) {
    Vp.a("[data-toggle\x3d'tooltip']", e).data("bs.tooltip", !1);
    return Vp.a("[data-toggle\x3d'tooltip']", e).vh();
  }, Dn.prototype.Ga = !0, Dn.prototype.Da = function() {
    var b = un.c(Jn, this.data, new n(null, 2, [vj, new n(null, 1, [Th, this.v], null), Ah, "overview"], null));
    return O(b) ? React.d.R(X(b), V(un.c(cq, this.data, new n(null, 2, [vj, new n(null, 1, [Th, this.v], null), Ah, "details"], null))), dq(this.$d) ? V(q(Wh.b(this.data)) ? un.c(Ro, Wh.b(this.data), new n(null, 2, [vj, new n(null, 3, [Th, this.v, wh, this.ja, Yj, this.S], null), Ah, "selection-portfolio-company-sites"], null)) : null) : V(q(ck.b(this.data)) ? un.c(Zo, ck.b(this.data), new n(null, 2, [vj, new n(null, 3, [Th, this.v, wh, this.ja, Yj, this.S], null), Ah, "selection-portfolio-company-sites-by-company"], 
    null)) : null)) : React.d.R(null, V(b), V(un.c(cq, this.data, new n(null, 2, [vj, new n(null, 1, [Th, this.v], null), Ah, "details"], null))), dq(this.$d) ? V(q(Wh.b(this.data)) ? un.c(Ro, Wh.b(this.data), new n(null, 2, [vj, new n(null, 3, [Th, this.v, wh, this.ja, Yj, this.S], null), Ah, "selection-portfolio-company-sites"], null)) : null) : V(q(ck.b(this.data)) ? un.c(Zo, ck.b(this.data), new n(null, 2, [vj, new n(null, 3, [Th, this.v, wh, this.ja, Yj, this.S], null), Ah, "selection-portfolio-company-sites-by-company"], 
    null)) : null));
  }, Dn.prototype.s = function() {
    return this.pg;
  }, Dn.prototype.t = function(b, c) {
    return new Dn(this.Kf, this.S, this.$g, this.Uf, this.data, this.jf, this.ja, this.$d, this.selection, this.v, this.u, this.Vf, c);
  });
  return new Dn(eq, p, b, d, d, e, l, g, f, s, c, k, null);
};
function gq() {
  var a = hq, b = hd(Uh) ? Uh : new R(null, 1, 5, S, [Uh], null);
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
;var iq, kq = function jq(b) {
  "undefined" === typeof iq && (iq = function(b, d, e) {
    this.Na = b;
    this.Hd = d;
    this.Cg = e;
    this.p = 0;
    this.g = 393216;
  }, iq.Q = !0, iq.P = "cljs.core.async.impl.ioc-helpers/t26921", iq.U = function(b, d) {
    return hc(d, "cljs.core.async.impl.ioc-helpers/t26921");
  }, iq.prototype.qe = function() {
    return!0;
  }, iq.prototype.s = function() {
    return this.Cg;
  }, iq.prototype.t = function(b, d) {
    return new iq(this.Na, this.Hd, d);
  });
  return new iq(b, jq, null);
};
function lq(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].zc(), b;
    }
    if (t) {
      throw b;
    }
    return null;
  }
}
function mq(a, b, c) {
  c = c.Bf(kq(function(c) {
    a[2] = c;
    a[1] = b;
    return lq(a);
  }));
  return q(c) ? (a[2] = Tb(c), a[1] = b, Rg) : null;
}
function nq(a, b, c) {
  b = b.Ac(0, c, kq(function() {
    a[2] = null;
    a[1] = 7;
    return lq(a);
  }));
  return q(b) ? (a[2] = Tb(b), a[1] = 7, Rg) : null;
}
function oq(a, b) {
  var c = a[6];
  null != b && c.Ac(0, b, kq(function() {
    return null;
  }));
  c.zc();
  return c;
}
function pq(a) {
  for (;;) {
    var b = a[4], c = ph.b(b), d = si.b(b), e = a[5];
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
      a[4] = Yc.e(b, ph, null, F([si, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? jb(c) && jb(ah.b(b)) : a;
    }())) {
      a[4] = Ai.b(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = jb(c)) ? ah.b(b) : a : a;
      }())) {
        a[1] = ah.b(b);
        a[4] = Yc.c(b, ah, null);
        break;
      }
      if (q(function() {
        var a = jb(e);
        return a ? ah.b(b) : a;
      }())) {
        a[1] = ah.b(b);
        a[4] = Yc.c(b, ah, null);
        break;
      }
      if (jb(e) && jb(ah.b(b))) {
        a[1] = wi.b(b);
        a[4] = Ai.b(b);
        break;
      }
      if (t) {
        throw Error([w("Assert failed: "), w("No matching clause"), w("\n"), w(og.e(F([!1], 0)))].join(""));
      }
      break;
    }
  }
}
;var qq, sq = function rq(b) {
  "undefined" === typeof qq && (qq = function(b, d, e) {
    this.wa = b;
    this.nf = d;
    this.Bg = e;
    this.p = 0;
    this.g = 425984;
  }, qq.Q = !0, qq.P = "cljs.core.async.impl.channels/t26910", qq.U = function(b, d) {
    return hc(d, "cljs.core.async.impl.channels/t26910");
  }, qq.prototype.Fb = function() {
    return this.wa;
  }, qq.prototype.s = function() {
    return this.Bg;
  }, qq.prototype.t = function(b, d) {
    return new qq(this.wa, this.nf, d);
  });
  return new qq(b, rq, null);
};
function tq(a, b) {
  this.Pb = a;
  this.wa = b;
}
function uq(a) {
  return Wn(a.Pb);
}
function vq(a, b, c, d, e, f) {
  this.mc = a;
  this.Dc = b;
  this.Uc = c;
  this.Cc = d;
  this.ba = e;
  this.closed = f;
}
vq.prototype.zc = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.mc.pop();
      if (null != a) {
        mo(function(a) {
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
vq.prototype.Bf = function(a) {
  if (null != this.ba && 0 < H(this.ba)) {
    return sq(this.ba.yc(null));
  }
  for (;;) {
    var b = this.Uc.pop();
    if (null != b) {
      return a = b.wa, mo(b.Pb.Na), sq(a);
    }
    if (this.closed) {
      return sq(null);
    }
    64 < this.Dc ? (this.Dc = 0, bo(this.mc, Wn)) : this.Dc += 1;
    if (!(1024 > this.mc.length)) {
      throw Error([w("Assert failed: "), w([w("No more than "), w(1024), w(" pending takes are allowed on a single channel.")].join("")), w("\n"), w(og.e(F([Gd(new Ac(null, "\x3c", "\x3c", -1640531467, null), Gd(new Ac(null, ".-length", ".-length", 1395928862, null), new Ac(null, "takes", "takes", -1530407291, null)), new Ac("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    ao(this.mc, a);
    return null;
  }
};
vq.prototype.Ac = function(a, b, c) {
  if (null == b) {
    throw Error([w("Assert failed: "), w("Can't put nil in on a channel"), w("\n"), w(og.e(F([Gd(new Ac(null, "not", "not", -1640422260, null), Gd(new Ac(null, "nil?", "nil?", -1637150201, null), new Ac(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if (this.closed) {
    return sq(null);
  }
  for (;;) {
    a = this.mc.pop();
    if (null != a) {
      c = c.Na, mo(function(a) {
        return function() {
          return a.b ? a.b(b) : a.call(null, b);
        };
      }(a.Na, c, a));
    } else {
      if (null == this.ba || this.ba.xc(null)) {
        64 < this.Cc ? (this.Cc = 0, bo(this.Uc, uq)) : this.Cc += 1;
        if (!(1024 > this.Uc.length)) {
          throw Error([w("Assert failed: "), w([w("No more than "), w(1024), w(" pending puts are allowed on a single channel."), w(" Consider using a windowed buffer.")].join("")), w("\n"), w(og.e(F([Gd(new Ac(null, "\x3c", "\x3c", -1640531467, null), Gd(new Ac(null, ".-length", ".-length", 1395928862, null), new Ac(null, "puts", "puts", -1637078787, null)), new Ac("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        ao(this.Uc, new tq(c, b));
        return null;
      }
      c = c.Na;
      this.ba.pe(null, b);
    }
    return sq(null);
  }
};
function wq(a, b, c) {
  this.key = a;
  this.wa = b;
  this.forward = c;
  this.p = 0;
  this.g = 2155872256;
}
wq.prototype.F = function(a, b, c) {
  return gg(b, mg, "[", " ", "]", c, this);
};
wq.prototype.G = function() {
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
    return new wq(a, b, c);
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
var yq = function xq(b) {
  "undefined" === typeof Tn && (Tn = function(b, d, e) {
    this.Na = b;
    this.Hd = d;
    this.Ag = e;
    this.p = 0;
    this.g = 393216;
  }, Tn.Q = !0, Tn.P = "cljs.core.async/t24317", Tn.U = function(b, d) {
    return hc(d, "cljs.core.async/t24317");
  }, Tn.prototype.qe = function() {
    return!0;
  }, Tn.prototype.s = function() {
    return this.Ag;
  }, Tn.prototype.t = function(b, d) {
    return new Tn(this.Na, this.Hd, d);
  });
  return new Tn(b, xq, null);
}, zq = function() {
  function a(a) {
    a = y.a(a, 0) ? null : a;
    a = "number" === typeof a ? new eo(co(a), a) : a;
    return new vq(co(32), 0, co(32), 0, a, null);
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
function Aq() {
  return null;
}
var Bq = function() {
  function a(a, b, c, d) {
    a = Un(a, b, yq(c));
    q(q(a) ? ae.a(c, Aq) : a) && (q(d) ? c.q ? c.q() : c.call(null) : mo(c));
    return null;
  }
  function b(a, b, c) {
    return d.i(a, b, c, !0);
  }
  function c(a, b) {
    return d.c(a, b, Aq);
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
}(), Cq = function() {
  function a(a, b, c) {
    var g = zq.b(1);
    mo(function() {
      var k = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!Id(b, Rg)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, pq(c), Rg;
                    }
                    if (t) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!Id(d, Rg)) {
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
            return Rg;
          }
          return 2 === k ? (l = g[7], g[1] = q(l) ? 4 : 5, Rg) : 3 === k ? (k = g[2], oq(g, k)) : 4 === k ? (l = g[7], k = B(l), nq(g, a, k)) : 5 === k ? (g[1] = q(c) ? 8 : 9, Rg) : 6 === k ? (k = g[2], g[2] = k, g[1] = 3, Rg) : 7 === k ? (l = g[7], k = g[2], l = E(l), g[8] = k, g[7] = l, g[2] = null, g[1] = 2, Rg) : 8 === k ? (k = Vn(a), g[2] = k, g[1] = 10, Rg) : 9 === k ? (g[2] = null, g[1] = 10, Rg) : 10 === k ? (k = g[2], g[2] = k, g[1] = 6, Rg) : null;
        });
      }(), l = function() {
        var a = k.q ? k.q() : k.call(null);
        a[6] = g;
        return a;
      }();
      return lq(l);
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
var Dq, hq = function Eq(b, c) {
  var d = P(b) ? N.a(T, b) : b, e = J.a(d, Nj), f = J.a(d, aj), g = fn.a(c, Th), k = function() {
    var b = null == d ? null : aj.b(d);
    if (null == b) {
      b = null;
    } else {
      if (q(y.a ? y.a(Qh, b) : y.call(null, Qh, b))) {
        b = "Portfolio Company";
      } else {
        if (q(y.a ? y.a(Gj, b) : y.call(null, Gj, b))) {
          b = "Investor";
        } else {
          if (q(y.a ? y.a(yh, b) : y.call(null, yh, b))) {
            b = "Constituency";
          } else {
            throw Error([w("No matching clause: "), w(b)].join(""));
          }
        }
      }
    }
    return b;
  }(), l = function() {
    var b = null == d ? null : Nj.b(d);
    return null == b ? null : Xh.b(b);
  }(), p = function() {
    var b = null == d ? null : Nj.b(d);
    return null == b ? null : qj.b(b);
  }();
  "undefined" === typeof Dq && (Dq = function(b, c, d, e, f, g, k, l, p, Ta, eb, pa) {
    this.bh = b;
    this.value = c;
    this.cf = d;
    this.ag = e;
    this.selection = f;
    this.name = g;
    this.v = k;
    this.hh = l;
    this.u = p;
    this.url = Ta;
    this.type = eb;
    this.vg = pa;
    this.p = 0;
    this.g = 393216;
  }, Dq.Q = !0, Dq.P = "clustermap.components.page-title/t22990", Dq.U = function(b, c) {
    return hc(c, "clustermap.components.page-title/t22990");
  }, Dq.prototype.Ga = !0, Dq.prototype.Da = function() {
    var b = this;
    return React.d.R({id:"page-title"}, React.d.button({className:"btn", type:"button", onClick:function() {
      return Bq.a(b.v, new R(null, 2, 5, S, [Kj, "map"], null));
    }}, "View on map"), function() {
      var c;
      c = b.cf;
      c = q(c) ? c : "All portfolio companies";
      return O(c) ? React.d.cc(X(c), null) : React.d.cc(null, V(c));
    }(), function() {
      var c;
      c = b.name;
      c = q(c) ? c : "UK wide";
      return O(c) ? React.d.fb(X(c), V(y.a(b.type, yh) ? new R(null, 6, 5, S, [ej, "\u00a0(", Cj.b(b.value), ", ", ak.b(b.value), ")"], null) : null)) : React.d.fb(null, V(c), V(y.a(b.type, yh) ? new R(null, 6, 5, S, [ej, "\u00a0(", Cj.b(b.value), ", ", ak.b(b.value), ")"], null) : null));
    }(), q(b.url) ? React.d.jb({href:b.url, target:"_blank"}, V(b.url)) : null);
  }, Dq.prototype.s = function() {
    return this.vg;
  }, Dq.prototype.t = function(b, c) {
    return new Dq(this.bh, this.value, this.cf, this.ag, this.selection, this.name, this.v, this.hh, this.u, this.url, this.type, c);
  });
  return new Dq(b, e, k, d, d, l, g, Eq, c, p, f, null);
};
function Fq(a) {
  ek.call(this);
  a || Vl || (Vl = new fm);
}
ta(Fq, ek);
var Gq = document.createElement("div");
Gq.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
var Hq = y.a(Gq.firstChild.nodeType, 3), Iq = y.a(Gq.getElementsByTagName("tbody").length, 0);
y.a(Gq.getElementsByTagName("link").length, 0);
var Jq = /<|&#?\w+;/, Kq = /^\s+/, Lq = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, Mq = /<([\w:]+)/, Nq = /<tbody/i, Oq = new R(null, 3, 5, S, [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"], null), Pq = new R(null, 3, 5, S, [1, "\x3ctable\x3e", "\x3c/table\x3e"], null), Qq = new R(null, 3, 5, S, [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"], null), Rq = Xc(["col", z, "tfoot", "caption", "optgroup", "legend", 
"area", "td", "thead", "th", "option", "tbody", "tr", "colgroup"], [new R(null, 3, 5, S, [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"], null), new R(null, 3, 5, S, [0, "", ""], null), Pq, Pq, Oq, new R(null, 3, 5, S, [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"], null), new R(null, 3, 5, S, [1, "\x3cmap\x3e", "\x3c/map\x3e"], null), Qq, Pq, Qq, Oq, Pq, new R(null, 3, 5, S, [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"], null), 
Pq]);
function Sq(a, b, c, d) {
  b = jb(eg(Nq, b));
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
function Tq(a) {
  var b = gm(a, Lq, "\x3c$1\x3e\x3c/$2\x3e");
  a = ("" + w(Tc(eg(Mq, b)))).toLowerCase();
  var c = J.c(Rq, a, z.b(Rq)), d = I.c(c, 0, null), e = I.c(c, 1, null), f = I.c(c, 2, null), c = function() {
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
  q(Iq) && Sq(c, b, a, e);
  q(function() {
    var a = jb(Hq);
    return a ? eg(Kq, b) : a;
  }()) && c.insertBefore(document.createTextNode(B(eg(Kq, b))), c.firstChild);
  return c.childNodes;
}
function Uq(a) {
  if (a ? a.Kb : a) {
    return a.Kb(a);
  }
  var b;
  b = Uq[m(null == a ? null : a)];
  if (!b && (b = Uq._, !b)) {
    throw u("DomContent.nodes", a);
  }
  return b.call(null, a);
}
function Vq(a) {
  if (a ? a.Dd : a) {
    return a.Dd(a);
  }
  var b;
  b = Vq[m(null == a ? null : a)];
  if (!b && (b = Vq._, !b)) {
    throw u("DomContent.single-node", a);
  }
  return b.call(null, a);
}
function Wq(a, b) {
  for (var c = A(Uq(a)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.w(null, f);
      Yl(g, b);
      f += 1;
    } else {
      if (c = A(c)) {
        d = c, jd(d) ? (c = tc(d), f = uc(d), d = c, e = H(c), c = f) : (c = B(d), Yl(c, b), c = E(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
function Xq(a, b) {
  for (var c = A(Uq(a)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.w(null, f);
      Zl(g, b);
      f += 1;
    } else {
      if (c = A(c)) {
        d = c, jd(d) ? (c = tc(d), f = uc(d), d = c, e = H(c), c = f) : (c = B(d), Zl(c, b), c = E(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
var Yq = function() {
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
}(), Zq = function() {
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
function $q(a) {
  return q(a.item) ? Yq.b(a) : Zq.b(a);
}
function ar(a) {
  if (q(a)) {
    var b = jb(a.nodeName);
    return b ? a.length : b;
  }
  return a;
}
function br(a) {
  return null == a ? Gc : (a ? a.g & 8388608 || a.nb || (a.g ? 0 : r(bc, a)) : r(bc, a)) ? A(a) : q(ar(a)) ? $q(a) : z ? A(new R(null, 1, 5, S, [a], null)) : null;
}
Uq._ = function(a) {
  return null == a ? Gc : (a ? a.g & 8388608 || a.nb || (a.g ? 0 : r(bc, a)) : r(bc, a)) ? A(a) : q(ar(a)) ? $q(a) : z ? A(new R(null, 1, 5, S, [a], null)) : null;
};
Vq._ = function(a) {
  return null == a ? null : (a ? a.g & 8388608 || a.nb || (a.g ? 0 : r(bc, a)) : r(bc, a)) ? B(a) : q(ar(a)) ? a.item(0) : z ? a : null;
};
Uq.string = function(a) {
  return cg.b(Uq(q(eg(Jq, a)) ? Tq(a) : document.createTextNode(a)));
};
Vq.string = function(a) {
  return Vq(q(eg(Jq, a)) ? Tq(a) : document.createTextNode(a));
};
q("undefined" != typeof NodeList) && (h = NodeList.prototype, h.nb = !0, h.G = function() {
  return $q(this);
}, h.Ib = !0, h.w = function(a, b) {
  return this.item(b);
}, h.qa = function(a, b, c) {
  return this.length <= b ? c : I.a(this, b);
}, h.Zb = !0, h.H = function() {
  return this.length;
});
q("undefined" != typeof StaticNodeList) && (h = StaticNodeList.prototype, h.nb = !0, h.G = function() {
  return $q(this);
}, h.Ib = !0, h.w = function(a, b) {
  return this.item(b);
}, h.qa = function(a, b, c) {
  return this.length <= b ? c : I.a(this, b);
}, h.Zb = !0, h.H = function() {
  return this.length;
});
q("undefined" != typeof HTMLCollection) && (h = HTMLCollection.prototype, h.nb = !0, h.G = function() {
  return $q(this);
}, h.Ib = !0, h.w = function(a, b) {
  return this.item(b);
}, h.qa = function(a, b, c) {
  return this.length <= b ? c : I.a(this, b);
}, h.Zb = !0, h.H = function() {
  return this.length;
});
var cr;
function dr(a, b, c, d) {
  var e = em(b), f = b.selectSingleNode;
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
function er(a, b) {
  return dr(a, b, function(a, b) {
    return a.selectSingleNode(b);
  }, function(a, b, e, f) {
    return b.evaluate(f, e, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  });
}
function fr(a, b) {
  return dr(a, b, function(a, b) {
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
var gr = function() {
  function a(a, b) {
    "undefined" === typeof cr && (cr = function(a, b, c, d) {
      this.ub = a;
      this.kb = b;
      this.Ah = c;
      this.Dg = d;
      this.p = 0;
      this.g = 393216;
    }, cr.Q = !0, cr.P = "domina.xpath/t27736", cr.U = function(a, b) {
      return hc(b, "domina.xpath/t27736");
    }, cr.prototype.Kb = function() {
      return re.a(ge.a(fr, this.ub), Uq(this.kb));
    }, cr.prototype.Dd = function() {
      return B(te(ee(ib), he.a(ge.a(er, this.ub), Uq(this.kb))));
    }, cr.prototype.s = function() {
      return this.Dg;
    }, cr.prototype.t = function(a, b) {
      return new cr(this.ub, this.kb, this.Ah, b);
    });
    return new cr(b, a, c, null);
  }
  function b(a) {
    return c.a(bm()[0], a);
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
var hr = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P(b) ? N.a(T, b) : b, f = J.a(e, nh), g = zq.b(1);
    Jl(a, function(a) {
      Bq.a(g, function(a) {
        return q(f) ? a : Fg.e(a, F([Eg, !0], 0));
      }.call(null, (JSON.parse.b ? JSON.parse.b(Ul(a.target)) : JSON.parse.call(null, Ul(a.target))).data));
      return Vn(g);
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
function ir(a, b) {
  var c = zq.b(1);
  mo(function() {
    var d = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Id(b, Rg)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, pq(c), Rg;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Id(d, Rg)) {
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
          return c[2] = null, c[1] = 2, Rg;
        }
        if (2 === d) {
          return c[1] = 4, Rg;
        }
        if (3 === d) {
          return d = c[2], oq(c, d);
        }
        if (4 === d) {
          return mq(c, 7, a);
        }
        if (5 === d) {
          return c[2] = null, c[1] = 6, Rg;
        }
        if (6 === d) {
          return d = c[2], c[2] = d, c[1] = 3, Rg;
        }
        if (7 === d) {
          var d = c[7], e = c[2], d = I.c(e, 0, null), e = I.c(e, 1, null), l = hd(d);
          c[8] = e;
          c[7] = d;
          c[1] = l ? 8 : 9;
          return Rg;
        }
        return 8 === d ? (d = c[7], e = Ue, c[9] = d, c[10] = e, c[2] = null, c[1] = 11, Rg) : 9 === d ? (d = c[7], c[1] = q(d) ? 20 : 21, Rg) : 10 === d ? (e = c[8], d = N.c(b, c[2], e), c[11] = d, c[2] = null, c[1] = 2, Rg) : 11 === d ? (e = c[9], d = fd(e), c[1] = d ? 13 : 14, Rg) : 12 === d ? (d = c[2], c[2] = d, c[1] = 10, Rg) : 13 === d ? (e = c[10], c[2] = e, c[1] = 15, Rg) : 14 === d ? (e = c[9], d = C(e), e = B(e), c[12] = d, c[1] = q(e) ? 16 : 17, Rg) : 15 === d ? (d = c[2], c[2] = d, c[1] = 
        12, Rg) : 16 === d ? (e = c[9], d = B(e), mq(c, 19, d)) : 17 === d ? (c[2] = null, c[1] = 18, Rg) : 18 === d ? (e = c[10], d = c[12], e = Vc.a(e, c[2]), c[9] = d, c[10] = e, c[2] = null, c[1] = 11, Rg) : 19 === d ? (d = c[2], c[2] = d, c[1] = 18, Rg) : 20 === d ? (d = c[7], mq(c, 23, d)) : 21 === d ? (c[2] = null, c[1] = 22, Rg) : 22 === d ? (d = c[2], c[2] = d, c[1] = 10, Rg) : 23 === d ? (d = c[2], c[2] = d, c[1] = 22, Rg) : null;
      });
    }(), e = function() {
      var a = d.q ? d.q() : d.call(null);
      a[6] = c;
      return a;
    }();
    return lq(e);
  });
}
function jr(a, b) {
  var c = zq.b(new fo(co(1), 1));
  ir(c, b);
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
        return Bq.a(c, new R(null, 2, 5, S, [b, d], null));
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
function kr(a) {
  return hm.a("\x26", he.a(function(a) {
    var c = I.c(a, 0, null);
    a = I.c(a, 1, null);
    return[w(Jd(c)), w("\x3d"), w(JSON.stringify(Ag(a)))].join("");
  }, a));
}
var lr = config.bi.prefix, mr = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = F(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return N.c(hr, [w("/api/boundarylines/"), w(a), w("/"), w(b)].join(""), e);
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
}(), nr = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return N.c(hr, [w("/api/boundaryline-collection-index/"), w(a)].join(""), b);
  }
  a.l = 1;
  a.h = function(a) {
    var d = B(a);
    a = C(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), or = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    a = Rf.e(F([new n(null, 2, [Mi, 100, ij, new R(null, 1, 5, S, [new n(null, 1, [Ij, "desc"], null)], null)], null), a], 0));
    return hr([w("/api/"), w(lr), w("/portfolio-company-sites?"), w(kr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), pr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    a = Rf.e(F([new n(null, 2, [Mi, 100, ij, new R(null, 1, 5, S, [new n(null, 1, [Ij, "desc"], null)], null)], null), a], 0));
    return hr([w("/api/"), w(lr), w("/portfolio-company-sites-by-company?"), w(kr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), qr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    return hr([w("/api/"), w(lr), w("/portfolio-company-locations?"), w(kr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), rr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    return hr([w("/api/"), w(lr), w("/portfolio-company-site-stats?"), w(kr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), sr = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = I.c(a, 0, null);
    return hr([w("/api/"), w(lr), w("/portfolio-company-site-account-timelines?"), w(kr(a))].join(""));
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
var tr = new R(null, 4, 5, S, [new R(null, 2, 5, S, [7, 0.01], null), new R(null, 2, 5, S, [9, 0.002], null), new R(null, 2, 5, S, [12, 3E-4], null), new R(null, 2, 5, S, [null, 0], null)], null);
function ur(a) {
  var b = ce(function(b) {
    var d = I.c(b, 0, null);
    b = I.c(b, 1, null);
    return q(q(d) ? a <= d : d) ? b : null;
  }, tr);
  return q(b) ? b : 0;
}
function vr(a, b) {
  var c = ur(a), d = Fd(te(function(a) {
    return function(b) {
      return b > a;
    };
  }(c), he.a(Uc, tr))), e = te(function(a) {
    return function(b) {
      return b < a;
    };
  }(c, d), he.a(Uc, tr)), f = Vf(b), c = J.a(f, c);
  if (q(c)) {
    return c;
  }
  e = ce(f, e);
  return q(e) ? e : ce(f, d);
}
function wr(a, b, c, d) {
  var e = mr.e(c, d, F([nh, !0], 0));
  b = hd(b) ? b : new R(null, 1, 5, S, [b], null);
  var f = Yd.a(b, new R(null, 2, 5, S, [c, d], null)), g = zq.b(1);
  mo(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Id(b, Rg)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, pq(c), Rg;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Id(d, Rg)) {
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
          var d = b[2], g = ug.i(a, Ce, f, function() {
            return function(a) {
              return function() {
                return a;
              };
            }(d, d, c);
          }());
          return oq(b, g);
        }
        return 1 === c ? mq(b, 2, e) : null;
      });
    }(), c = function() {
      var a = b.q ? b.q() : b.call(null);
      a[6] = g;
      return a;
    }();
    return lq(c);
  });
}
var xr = function() {
  function a(a, d, e, f, g) {
    var k = null;
    4 < arguments.length && (k = F(Array.prototype.slice.call(arguments, 4), 0));
    return b.call(this, a, d, e, f, k);
  }
  function b(a, b, e, f, g) {
    g = P(g) ? N.a(T, g) : g;
    g = J.a(g, Qi);
    if (q(q(g) ? f <= g : g)) {
      return null;
    }
    g = hd(b) ? b : new R(null, 1, 5, S, [b], null);
    var k = ze.a(Tb(a), g), l = J.a(k, e);
    g = ur(f);
    f = vr(f, Mf(l));
    k = ze.a(k, new R(null, 2, 5, S, [e, f], null));
    ae.a(g, f) && wr(a, b, e, g);
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
yl("goog.messaging.AbstractChannel");
function yr(a, b) {
  Fq.call(this, b);
  this.pf = a;
  this.Xc = [];
}
var zr;
ta(yr, Fq);
h = yr.prototype;
h.ae = 0;
h.ef = !1;
h.pc = 3800;
h.send = function(a, b) {
  var c = a + ":" + b;
  if (!qk || b.length <= this.pc) {
    this.Xc.push("|" + c);
  } else {
    for (var d = b.length, e = Math.ceil(d / this.pc), f = 0, g = 1;f < d;) {
      this.Xc.push("," + g + "/" + e + "|" + c.substr(f, this.pc)), g++, f += this.pc;
    }
  }
  !this.ef && this.Xc.length && (c = this.Xc.shift(), ++this.ae, this.Gi.send(this.ae + c), Sn.log(tl, "msg sent: " + this.ae + c, void 0), this.ef = !0);
};
h.Ba = function() {
  yr.Bb.Ba.call(this);
  var a = Ar;
  La(a, this.Gg);
  La(a, this.gf);
  this.Gg = this.gf = null;
  (a = this.Fg) && a.parentNode && a.parentNode.removeChild(a);
  (a = this.ff) && a.parentNode && a.parentNode.removeChild(a);
  this.Fg = this.ff = null;
};
var Ar = [], Br = qa(function() {
  var a = Ar, b, c = !1;
  try {
    for (var d = 0;b = a[d];d++) {
      var e;
      if (!(e = c)) {
        var f = b, g = f.Si.location.href;
        if (g != f.If) {
          f.If = g;
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
    if (Sn.info("receive_() failed: " + l), b = b.$i.pf, Sn.info("Transport Error"), b.close(), !a.length) {
      return;
    }
  }
  a = sa();
  c && (zr = a);
  window.setTimeout(Br, 1E3 > a - zr ? 10 : 100);
}, yr);
xe(pf, he.a(function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  return new R(null, 2, 5, S, [Kd.b(b.toLowerCase()), a], null);
}, Rf.e(F([Fg.b({Eh:"complete", Wh:"success", Fh:"error", Bh:"abort", Sh:"ready", Th:"readystatechange", TIMEOUT:"timeout", Hh:"incrementaldata", Rh:"progress"})], 0))));
var Cr = function() {
  function a(a, b, c, d, e, f) {
    if (a ? a.xe : a) {
      return a.xe(0, b, c, d, e, f);
    }
    var D;
    D = Cr[m(null == a ? null : a)];
    if (!D && (D = Cr._, !D)) {
      throw u("IConnection.transmit", a);
    }
    return D.call(null, a, b, c, d, e, f);
  }
  function b(a, b, c, d, e) {
    if (a ? a.we : a) {
      return a.we(0, b, c, d, e);
    }
    var f;
    f = Cr[m(null == a ? null : a)];
    if (!f && (f = Cr._, !f)) {
      throw u("IConnection.transmit", a);
    }
    return f.call(null, a, b, c, d, e);
  }
  function c(a, b, c, d) {
    if (a ? a.ve : a) {
      return a.ve(0, b, c, d);
    }
    var e;
    e = Cr[m(null == a ? null : a)];
    if (!e && (e = Cr._, !e)) {
      throw u("IConnection.transmit", a);
    }
    return e.call(null, a, b, c, d);
  }
  function d(a, b, c) {
    if (a ? a.ue : a) {
      return a.ue(0, b, c);
    }
    var d;
    d = Cr[m(null == a ? null : a)];
    if (!d && (d = Cr._, !d)) {
      throw u("IConnection.transmit", a);
    }
    return d.call(null, a, b, c);
  }
  function e(a, b) {
    if (a ? a.te : a) {
      return a.te(0, b);
    }
    var c;
    c = Cr[m(null == a ? null : a)];
    if (!c && (c = Cr._, !c)) {
      throw u("IConnection.transmit", a);
    }
    return c.call(null, a, b);
  }
  var f = null, f = function(f, k, l, p, s, v) {
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
        return a.call(this, f, k, l, p, s, v);
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
h = Gl.prototype;
h.te = function(a, b) {
  return Cr.la(this, b, "GET", null, null, 1E4);
};
h.ue = function(a, b, c) {
  return Cr.la(this, b, c, null, null, 1E4);
};
h.ve = function(a, b, c, d) {
  return Cr.la(this, b, c, d, null, 1E4);
};
h.we = function(a, b, c, d, e) {
  return Cr.la(this, b, c, d, e, 1E4);
};
h.xe = function(a, b, c, d, e, f) {
  this.nc = Math.max(0, f);
  return this.send(b, c, d, e);
};
xe(pf, he.a(function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  return new R(null, 2, 5, S, [Kd.b(b.toLowerCase()), a], null);
}, Fg.b({Dh:"cn", Ch:"at", Uh:"rat", Qh:"pu", Gh:"ifrid", Xh:"tp", Jh:"lru", Ph:"pru", Ih:"lpu", Oh:"ppu", Nh:"ph", Mh:"osh", Vh:"role", Lh:"nativeProtocolVersion"})));
sg.b(null);
sg.b(0);
var Dr = new n(null, 3, [Qh, Xh, Gj, Xh, yh, Sj], null), Er = new n(null, 4, [Qh, function(a, b) {
  return[w("#/"), w(function() {
    var b = null == a ? null : Tb(a), b = null == b ? null : Lg.b(b);
    return null == b ? null : Jd(b);
  }()), w("/portfolio-company/"), w($g.b(b))].join("");
}, Gj, function(a, b) {
  return[w("#/"), w(function() {
    var b = null == a ? null : Tb(a), b = null == b ? null : Lg.b(b);
    return null == b ? null : Jd(b);
  }()), w("/investor-company/"), w(xi.b(b))].join("");
}, yh, function(a, b) {
  return[w("#/"), w(function() {
    var b = null == a ? null : Tb(a), b = null == b ? null : Lg.b(b);
    return null == b ? null : Jd(b);
  }()), w("/constituency/"), w(zh.b(b))].join("");
}, null, function(a) {
  return[w("#/"), w(function() {
    var b = null == a ? null : Tb(a), b = null == b ? null : Lg.b(b);
    return null == b ? null : Jd(b);
  }())].join("");
}], null);
function Fr(a, b, c) {
  return N.a(J.a(Er, b), new R(null, 2, 5, S, [a, c], null));
}
function Gr(a, b, c) {
  return React.d.jb({href:Fr(a, b, c)}, V(J.a(c, J.a(Dr, b))));
}
;sg.b(new n(null, 1, [Oh, ""], null));
var Hr = sg.b(pf), Ir = /\//;
function Jr(a, b) {
  return y.a(B(a), ":") ? new qf([Kd.b(zd.a(a, 1)), b]) : null;
}
function Kr(a, b) {
  return y.a(a, b);
}
function Lr(a, b) {
  var c = mm.a(a, Ir), d = mm.a(b, Ir);
  return y.a(H(c), H(d)) ? be(nd, he.c(function(a, b) {
    return y.a(B(a), ":") || y.a(a, b);
  }, c, d)) : null;
}
function Mr(a, b) {
  return te(function(c) {
    return a.a ? a.a(B(c), b) : a.call(null, B(c), b);
  }, Tb(Hr));
}
function Nr(a) {
  return ob.c(function(a, c) {
    var d = mm.c(c, /=/, 2), e = I.c(d, 0, null), d = I.c(d, 1, null);
    return Yc.c(a, e, decodeURIComponent(d));
  }, pf, mm.a(a, /&/));
}
function Or(a, b) {
  return q(Lr(a, b)) ? N.a(Rf, function() {
    return function d(a) {
      return new Ld(null, function() {
        for (var b = a;;) {
          if (b = A(b)) {
            if (jd(b)) {
              var g = tc(b), k = H(g), l = Qd(k);
              a: {
                for (var p = 0;;) {
                  if (p < k) {
                    var s = x.a(g, p), s = N.a(Jr, s);
                    null != s && l.add(s);
                    p += 1;
                  } else {
                    g = !0;
                    break a;
                  }
                }
                g = void 0;
              }
              return g ? Td(l.Y(), d(uc(b))) : Td(l.Y(), null);
            }
            l = B(b);
            l = N.a(Jr, l);
            if (null != l) {
              return G(l, d(C(b)));
            }
            b = C(b);
          } else {
            return null;
          }
        }
      }, null, null);
    }(Wf(mm.a(a, Ir), mm.a(b, Ir)));
  }()) : null;
}
;function Pr(a, b) {
  if (q(y.a ? y.a(Qh, a) : y.call(null, Qh, a))) {
    return $g.b(b);
  }
  if (q(y.a ? y.a(Gj, a) : y.call(null, Gj, a))) {
    return xi.b(b);
  }
  if (q(y.a ? y.a(yh, a) : y.call(null, yh, a))) {
    return zh.b(b);
  }
  throw Error([w("No matching clause: "), w(a)].join(""));
}
;var Qr, Rr, Tr = function Sr(b, c, d) {
  var e = P(b) ? N.a(T, b) : b, f = J.a(e, aj), g = J.a(e, Xh), k = P(d) ? N.a(T, d) : d, l = J.a(k, Yj), p = J.a(k, Th);
  "undefined" === typeof Qr && (Qr = function(b, c, d, e, f, g, k, l, p, Ta, eb, pa, Mc) {
    this.Ea = b;
    this.S = c;
    this.cg = d;
    this.bg = e;
    this.name = f;
    this.v = g;
    this.Zd = k;
    this.u = l;
    this.eh = p;
    this.type = Ta;
    this.nh = eb;
    this.dh = pa;
    this.wg = Mc;
    this.p = 0;
    this.g = 393216;
  }, Qr.Q = !0, Qr.P = "clustermap.components.search/t23007", Qr.U = function(b, c) {
    return hc(c, "clustermap.components.search/t23007");
  }, Qr.prototype.Qe = !0, Qr.prototype.Wd = function(b, c) {
    var d = this, e = P(c) ? N.a(T, c) : c, e = J.a(e, Pj), f = d.S.a ? d.S.a(d.type, d.Zd) : d.S.call(null, d.type, d.Zd);
    return React.d.A({className:q(e) ? "selected" : null}, React.d.jb({href:f, ref:"link", onClick:function() {
      var b = xn(d.u, "link"), b = null == b ? null : Vp.b(b), b = null == b ? null : b.Pi(".search-component");
      return null == b ? null : b.toggle();
    }}, V(d.name), q(e) ? "*" : null));
  }, Qr.prototype.s = function() {
    return this.wg;
  }, Qr.prototype.t = function(b, c) {
    return new Qr(this.Ea, this.S, this.cg, this.bg, this.name, this.v, this.Zd, this.u, this.eh, this.type, this.nh, this.dh, c);
  });
  return new Qr(k, l, k, e, g, p, e, c, d, f, Sr, b, null);
};
function Ur(a, b) {
  var c = P(a) ? N.a(T, a) : a, d = J.a(c, Ej), e = J.a(c, bk), c = J.a(c, Di), f = q(c) ? c : Ue, e = q(e) ? e : Ue, d = q(d) ? d : Ue;
  return b < H(f) ? new R(null, 2, 5, S, [yh, J.a(c, b)], null) : b < H(f) + H(e) ? new R(null, 2, 5, S, [Qh, J.a(e, b - H(f))], null) : new R(null, 2, 5, S, [Gj, J.a(d, b - H(f) - H(e))], null);
}
function Vr(a, b, c, d) {
  a = a.keyCode;
  if (q(xd.a ? xd.a(27, a) : xd.call(null, 27, a))) {
    return d = xn(c, "search-component"), d = null == d ? null : Vp.b(d), null == d ? null : d.toggle();
  }
  if (q(xd.a ? xd.a(13, a) : xd.call(null, 13, a))) {
    a = Ur(Tb(b), function() {
      var a = en.a(c, Zh);
      return q(a) ? a : 0;
    }());
    b = I.c(a, 0, null);
    a = I.c(a, 1, null);
    var e = xn(c, "search-component"), e = null == e ? null : Vp.b(e);
    null == e || e.toggle();
    return Bq.a(d, new R(null, 2, 5, S, [Qj, new R(null, 2, 5, S, [b, Pr(b, a)], null)], null));
  }
  return q(xd.a ? xd.a(38, a) : xd.call(null, 38, a)) ? yn(c, Zh, function() {
    var a = en.a(c, Zh);
    return q(a) ? a : 0;
  }() - 1) : q(xd.a ? xd.a(40, a) : xd.call(null, 40, a)) ? yn(c, Zh, function() {
    var a = en.a(c, Zh);
    return q(a) ? a : 0;
  }() + 1) : null;
}
var Xr = function Wr(b, c) {
  var d = P(b) ? N.a(T, b) : b, e = J.a(d, Uh), e = P(e) ? N.a(T, e) : e, f = J.a(e, aj), g = J.a(e, Nj), k = J.a(d, Zi), l = fn.b(c), l = P(l) ? N.a(T, l) : l, p = J.a(l, Yj), s = J.a(l, Th), v = P(k) ? N.a(T, k) : k, D = J.a(v, Ej), K = J.a(v, bk), M = J.a(v, Di);
  "undefined" === typeof Rr && (Rr = function(b, c, d, e, f, g, k, l, p, s, v, D, K, M, gj, kh) {
    this.Ic = b;
    this.Ze = c;
    this.S = d;
    this.Sc = e;
    this.mh = f;
    this.fh = g;
    this.v = k;
    this.ph = l;
    this.u = p;
    this.Bc = s;
    this.eg = v;
    this.Xe = D;
    this.dg = K;
    this.gg = M;
    this.fg = gj;
    this.xg = kh;
    this.p = 0;
    this.g = 393216;
  }, Rr.Q = !0, Rr.P = "clustermap.components.search/t23067", Rr.U = function(b, c) {
    return hc(c, "clustermap.components.search/t23067");
  }, Rr.prototype.Qe = !0, Rr.prototype.Wd = function(b, c) {
    var d = this;
    return React.d.R({ref:"search-component", className:"search-component", id:"search", onKeyDown:function(b) {
      return Vr(b, d.Xe, d.u, d.v);
    }}, React.d.R({className:"tbl"}, React.d.R({className:"tbl-cell", style:{width:"100%"}}, zm.b ? zm.b({ref:"search-field", type:"text", placeholder:"Search", onChange:function(b) {
      return Bq.a(d.v, new R(null, 2, 5, S, [hh, b.target.value], null));
    }}) : zm.call(null, {ref:"search-field", type:"text", placeholder:"Search", onChange:function(b) {
      return Bq.a(d.v, new R(null, 2, 5, S, [hh, b.target.value], null));
    }})), React.d.R({className:"tbl-cell", style:{width:"34"}}, React.d.button({type:"reset", onClick:function() {
      Bq.a(d.v, new R(null, 2, 5, S, [hh, ""], null));
      return xn(d.u, "search-field").value = "";
    }}, "\u00d7")), q(d.Ze) ? React.d.R({className:"tbl-cell", style:{width:"136"}}, React.d.jb({href:d.S.a ? d.S.a(null, null) : d.S.call(null, null, null)}, React.d.button({className:"btn-reset", type:"reset", onClick:function() {
      Bq.a(d.v, new R(null, 2, 5, S, [hh, ""], null));
      return xn(d.u, "search-field").value = "";
    }}, "Reset to UK wide"))) : null), V(q(function() {
      var b = A(d.Bc) ? d.Bc : null;
      if (q(b)) {
        return b;
      }
      b = A(d.Sc) ? d.Sc : null;
      return q(b) ? b : A(d.Ic) ? d.Ic : null;
    }()) ? function() {
      var b = he.c(Xe, ne(Hc, 0), d.Bc), e = he.c(Xe, ne(Hc, H(b)), d.Sc), f = he.c(Xe, ne(Hc, H(b) + H(e)), d.Ic), g = ud(function() {
        var b = Zh.b(c);
        return q(b) ? b : 0;
      }(), H(b) + H(e) + H(f));
      ae.a(g, Zh.b(c)) && yn(d.u, Zh, g);
      return new R(null, 3, 5, S, [uh, new n(null, 1, [Lh, "search-results"], null), new R(null, 4, 5, S, [Wg, q(A(b) ? b : null) ? xe(new R(null, 2, 5, S, [uh, new R(null, 3, 5, S, [Vj, new n(null, 1, [Lh, "search-results-header"], null), "Constituencies"], null)], null), function() {
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
                        var p = x.a(f, b), s = I.c(p, 0, null), v = I.c(p, 1, null);
                        Ud(l, un.c(Tr, v, new n(null, 4, [vj, new n(null, 2, [Th, d.v, Yj, d.S], null), th, new n(null, 1, [Pj, y.a(s, g)], null), Lj, function() {
                          return function(b) {
                            return Yc.e(b, aj, yh, F([Mj, J.a(b, zh), $i, [w("constituency:"), w(J.a(b, zh))].join("")], 0));
                          };
                        }(b, p, s, v, f, k, l, e, c), Kh, $i], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.Y(), Mb(uc(e))) : Td(l.Y(), null);
                }
                var p = B(e), s = I.c(p, 0, null), v = I.c(p, 1, null);
                return G(un.c(Tr, v, new n(null, 4, [vj, new n(null, 2, [Th, d.v, Yj, d.S], null), th, new n(null, 1, [Pj, y.a(s, g)], null), Lj, function() {
                  return function(b) {
                    return Yc.e(b, aj, yh, F([Mj, J.a(b, zh), $i, [w("constituency:"), w(J.a(b, zh))].join("")], 0));
                  };
                }(p, s, v, e, c), Kh, $i], null)), Mb(C(e)));
              }
              return null;
            }
          }, null, null);
        }(b);
      }()) : null, q(A(e) ? e : null) ? xe(new R(null, 2, 5, S, [uh, new R(null, 3, 5, S, [Vj, new n(null, 1, [Lh, "search-results-header"], null), "Companies"], null)], null), function() {
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
                        var p = x.a(f, b), s = I.c(p, 0, null), v = I.c(p, 1, null);
                        Ud(l, un.c(Tr, v, new n(null, 4, [vj, new n(null, 2, [Th, d.v, Yj, d.S], null), th, new n(null, 1, [Pj, y.a(s, g)], null), Lj, function() {
                          return function(b) {
                            return Yc.e(b, aj, Qh, F([Mj, J.a(b, $g), $i, [w("portfolio-company:"), w(J.a(b, $g))].join("")], 0));
                          };
                        }(b, p, s, v, f, k, l, e, c), Kh, $i], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.Y(), Mb(uc(e))) : Td(l.Y(), null);
                }
                var p = B(e), s = I.c(p, 0, null), v = I.c(p, 1, null);
                return G(un.c(Tr, v, new n(null, 4, [vj, new n(null, 2, [Th, d.v, Yj, d.S], null), th, new n(null, 1, [Pj, y.a(s, g)], null), Lj, function() {
                  return function(b) {
                    return Yc.e(b, aj, Qh, F([Mj, J.a(b, $g), $i, [w("portfolio-company:"), w(J.a(b, $g))].join("")], 0));
                  };
                }(p, s, v, e, c), Kh, $i], null)), Mb(C(e)));
              }
              return null;
            }
          }, null, null);
        }(e);
      }()) : null, q(A(f) ? f : null) ? xe(new R(null, 2, 5, S, [uh, new R(null, 3, 5, S, [Vj, new n(null, 1, [Lh, "search-results-header"], null), "Investors"], null)], null), function() {
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
                        var p = x.a(f, b), s = I.c(p, 0, null), v = I.c(p, 1, null);
                        Ud(l, un.c(Tr, v, new n(null, 4, [vj, new n(null, 2, [Th, d.v, Yj, d.S], null), th, new n(null, 1, [Pj, y.a(s, g)], null), Lj, function() {
                          return function(b) {
                            return Yc.e(b, aj, Gj, F([Mj, J.a(b, xi), $i, [w("investor-company:"), w(J.a(b, xi))].join("")], 0));
                          };
                        }(b, p, s, v, f, k, l, e, c), Kh, $i], null)));
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Td(l.Y(), Mb(uc(e))) : Td(l.Y(), null);
                }
                var p = B(e), s = I.c(p, 0, null), v = I.c(p, 1, null);
                return G(un.c(Tr, v, new n(null, 4, [vj, new n(null, 2, [Th, d.v, Yj, d.S], null), th, new n(null, 1, [Pj, y.a(s, g)], null), Lj, function() {
                  return function(b) {
                    return Yc.e(b, aj, Gj, F([Mj, J.a(b, xi), $i, [w("investor-company:"), w(J.a(b, xi))].join("")], 0));
                  };
                }(p, s, v, e, c), Kh, $i], null)), Mb(C(e)));
              }
              return null;
            }
          }, null, null);
        }(f);
      }()) : null], null)], null);
    }() : null));
  }, Rr.prototype.s = function() {
    return this.xg;
  }, Rr.prototype.t = function(b, c) {
    return new Rr(this.Ic, this.Ze, this.S, this.Sc, this.mh, this.fh, this.v, this.ph, this.u, this.Bc, this.eg, this.Xe, this.dg, this.gg, this.fg, c);
  });
  return new Rr(D, g, p, K, Wr, b, s, f, c, M, e, k, d, v, l, null);
};
var Yr;
function Zr(a) {
  if (a ? a.Ed : a) {
    return a.Ed(a);
  }
  var b;
  b = Zr[m(null == a ? null : a)];
  if (!b && (b = Zr._, !b)) {
    throw u("Event.prevent-default", a);
  }
  return b.call(null, a);
}
function $r(a) {
  if (a ? a.Ce : a) {
    return a.Ma.target;
  }
  var b;
  b = $r[m(null == a ? null : a)];
  if (!b && (b = $r._, !b)) {
    throw u("Event.target", a);
  }
  return b.call(null, a);
}
var as = window.document.documentElement, cs = function bs(b) {
  return function(c) {
    b.b ? b.b(function() {
      "undefined" === typeof Yr && (Yr = function(b, c, f, g) {
        this.Ma = b;
        this.Na = c;
        this.Ad = f;
        this.Rd = g;
        this.p = 0;
        this.g = 393472;
      }, Yr.Q = !0, Yr.P = "domina.events/t27553", Yr.U = function(b, c) {
        return hc(c, "domina.events/t27553");
      }, Yr.prototype.I = function(b, c) {
        var f = this.Ma[c];
        return q(f) ? f : this.Ma[Jd(c)];
      }, Yr.prototype.J = function(b, c, f) {
        b = Eb.a(this, c);
        return q(b) ? b : f;
      }, Yr.prototype.Ed = function() {
        return this.Ma.preventDefault();
      }, Yr.prototype.Ce = function() {
        return this.Ma.target;
      }, Yr.prototype.s = function() {
        return this.Rd;
      }, Yr.prototype.t = function(b, c) {
        return new Yr(this.Ma, this.Na, this.Ad, c);
      });
      return new Yr(c, b, bs, null);
    }()) : b.call(null, function() {
      "undefined" === typeof Yr && (Yr = function(b, c, f, g) {
        this.Ma = b;
        this.Na = c;
        this.Ad = f;
        this.Rd = g;
        this.p = 0;
        this.g = 393472;
      }, Yr.Q = !0, Yr.P = "domina.events/t27553", Yr.U = function(b, c) {
        return hc(c, "domina.events/t27553");
      }, Yr.prototype.I = function(b, c) {
        var f = this.Ma[c];
        return q(f) ? f : this.Ma[Jd(c)];
      }, Yr.prototype.J = function(b, c, f) {
        b = Eb.a(this, c);
        return q(b) ? b : f;
      }, Yr.prototype.Ed = function() {
        return this.Ma.preventDefault();
      }, Yr.prototype.Ce = function() {
        return this.Ma.target;
      }, Yr.prototype.s = function() {
        return this.Rd;
      }, Yr.prototype.t = function(b, c) {
        return new Yr(this.Ma, this.Na, this.Ad, c);
      });
      return new Yr(c, b, bs, null);
    }());
    return!0;
  };
};
function ds(a, b, c) {
  var d = cs(c), e = Jd(b);
  return cg.b(function() {
    return function g(a) {
      return new Ld(null, function() {
        for (;;) {
          var b = A(a);
          if (b) {
            if (jd(b)) {
              var c = tc(b), s = H(c), v = Qd(s);
              a: {
                for (var D = 0;;) {
                  if (D < s) {
                    var K = x.a(c, D), K = q(!1) ? Tk(K, e, d, !1) : Pk(K, e, d, !1);
                    v.add(K);
                    D += 1;
                  } else {
                    c = !0;
                    break a;
                  }
                }
                c = void 0;
              }
              return c ? Td(v.Y(), g(uc(b))) : Td(v.Y(), null);
            }
            v = B(b);
            return G(q(!1) ? Tk(v, e, d, !1) : Pk(v, e, d, !1), g(C(b)));
          }
          return null;
        }
      }, null, null);
    }(Uq(a));
  }());
}
var es = function() {
  function a(a, d) {
    return b.c(as, a, d);
  }
  var b = null, b = function(b, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, d);
      case 3:
        return ds(b, d, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.c = function(a, b, e) {
    return ds(a, b, e);
  };
  return b;
}();
function fs() {
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
var gs = function() {
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
    Mc = c.contentType && "application/xml" == c.contentType || pk && (c.doctype || "[object XMLDocument]" == e.toString()) || !!e && (qk ? e.xml : c.xmlVersion || e.xmlVersion);
    return(e = d(a)(c)) && e.Lc ? e : b(e);
  }
  function b(a) {
    if (a && a.Lc) {
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
    if (qk && Mc) {
      var c = Md + "";
      a[0].setAttribute("_zipIdx", c);
      for (var d = 1, e;e = a[d];d++) {
        a[d].getAttribute("_zipIdx") != c && b.push(e), e.setAttribute("_zipIdx", c);
      }
    } else {
      if (qk && a.Df) {
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
    var c = Is(a);
    return b[c] ? 0 : b[c] = 1;
  }
  function d(a, b) {
    if (oo) {
      var c = Sl[a];
      if (c && !b) {
        return c;
      }
    }
    if (c = Rl[a]) {
      return c;
    }
    var c = a.charAt(0), f = -1 == a.indexOf(" ");
    0 <= a.indexOf("#") && f && (b = !0);
    if (!oo || b || -1 != "\x3e~+".indexOf(c) || qk && -1 != a.indexOf(":") || eb && 0 <= a.indexOf(".") || -1 != a.indexOf(":contains") || -1 != a.indexOf("|\x3d")) {
      var g = a.split(/\s*,\s*/);
      return Rl[a] = 2 > g.length ? e(a) : function(a) {
        for (var b = 0, c = [], d;d = g[b++];) {
          c = c.concat(e(d)(a));
        }
        return c;
      };
    }
    var k = 0 <= "\x3e~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return Sl[a] = function(b) {
      try {
        if (9 != b.nodeType && !f) {
          throw "";
        }
        var c = b.querySelectorAll(k);
        qk ? c.Df = !0 : c.Lc = !0;
        return c;
      } catch (e) {
        return d(a, !0)(b);
      }
    };
  }
  function e(a) {
    var b = hb(va(a));
    if (1 == b.length) {
      var c = f(b[0]);
      return function(a) {
        if (a = c(a, [])) {
          a.Lc = !0;
        }
        return a;
      };
    }
    return function(a) {
      a = Ta(a);
      for (var c, d, e = b.length, g, k, l = 0;l < e;l++) {
        k = [];
        c = b[l];
        d = a.length - 1;
        0 < d && (g = {}, k.Lc = !0);
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
    var b = kh[a.Vb];
    if (b) {
      return b;
    }
    var c = a.Ie, c = c ? c.Qc : "", d = p(a, {Mb:1}), e = "*" == a.Ja, f = document.getElementsByClassName;
    if (c) {
      f = {Mb:1}, e && (f.Ja = 1), d = p(a, f), "+" == c ? b = l(d) : "~" == c ? b = k(d) : "\x3e" == c && (b = g(d));
    } else {
      if (a.id) {
        d = !a.Me && e ? fs : p(a, {Mb:1, id:1}), b = function(b, c) {
          var e;
          e = b ? new fm(em(b)) : Vl || (Vl = new fm);
          var f = a.id;
          if ((f = (e = ga(f) ? e.Cd.getElementById(f) : f) && d(e)) && !(f = 9 == b.nodeType)) {
            for (f = e.parentNode;f && f != b;) {
              f = f.parentNode;
            }
            f = !!f;
          }
          if (f) {
            return Ta(e, c);
          }
        };
      } else {
        if (f && /\{\s*\[native code\]\s*\}/.test(String(f)) && a.Ya.length && !eb) {
          var d = p(a, {Mb:1, Ya:1, id:1}), s = a.Ya.join(" "), b = function(a, b) {
            for (var c = Ta(0, b), e, f = 0, g = a.getElementsByClassName(s);e = g[f++];) {
              d(e, a) && c.push(e);
            }
            return c;
          }
        } else {
          e || a.Me ? (d = p(a, {Mb:1, Ja:1, id:1}), b = function(b, c) {
            for (var e = Ta(0, c), f, g = 0, k = b.getElementsByTagName(a.Jd());f = k[g++];) {
              d(f, b) && e.push(f);
            }
            return e;
          }) : b = function(b, c) {
            for (var d = Ta(0, c), e, f = 0, g = b.getElementsByTagName(a.Jd());e = g[f++];) {
              d.push(e);
            }
            return d;
          };
        }
      }
    }
    return kh[a.Vb] = b;
  }
  function g(a) {
    a = a || fs;
    return function(b, d, e) {
      for (var f = 0, g = b[pa];b = g[f++];) {
        Of(b) && (!e || c(b, e)) && a(b, f) && d.push(b);
      }
      return d;
    };
  }
  function k(a) {
    return function(b, d, e) {
      for (b = b[Nf];b;) {
        if (Of(b)) {
          if (e && !c(b, e)) {
            break;
          }
          a(b) && d.push(b);
        }
        b = b[Nf];
      }
      return d;
    };
  }
  function l(a) {
    return function(b, d, e) {
      for (;b = b[Nf];) {
        if (!jh || U(b)) {
          e && !c(b, e) || !a(b) || d.push(b);
          break;
        }
      }
      return d;
    };
  }
  function p(a, b) {
    if (!a) {
      return fs;
    }
    b = b || {};
    var c = null;
    b.Mb || (c = ha(c, U));
    b.Ja || "*" != a.Ja && (c = ha(c, function(b) {
      return b && b.tagName == a.Jd();
    }));
    b.Ya || Ia(a.Ya, function(a, b) {
      var d = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
      c = ha(c, function(a) {
        return d.test(a.className);
      });
      c.count = b;
    });
    b.yb || Ia(a.yb, function(a) {
      var b = a.name;
      fj[b] && (c = ha(c, fj[b](b, a.value)));
    });
    b.qc || Ia(a.qc, function(a) {
      var b, d = a.bd;
      a.type && Mb[a.type] ? b = Mb[a.type](d, a.Qd) : d.length && (b = gj(d));
      b && (c = ha(c, b));
    });
    b.id || a.id && (c = ha(c, function(b) {
      return!!b && b.id == a.id;
    }));
    c || "default" in b || (c = fs);
    return c;
  }
  function s(a) {
    return D(a) % 2;
  }
  function v(a) {
    return!(D(a) % 2);
  }
  function D(a) {
    var b = a.parentNode, c = 0, d = b[pa], e = a._i || -1, f = b._l || -1;
    if (!d) {
      return-1;
    }
    d = d.length;
    if (f == d && 0 <= e && 0 <= f) {
      return e;
    }
    b._l = d;
    e = -1;
    for (b = b.firstElementChild || b.firstChild;b;b = b[Nf]) {
      Of(b) && (b._i = ++c, a === b && (e = c));
    }
    return e;
  }
  function K(a) {
    for (;a = a[Nf];) {
      if (Of(a)) {
        return!1;
      }
    }
    return!0;
  }
  function M(a) {
    for (;a = a[Bp];) {
      if (Of(a)) {
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
  function hb(a) {
    function b() {
      0 <= p && (U.id = c(p, M).replace(/\\/g, ""), p = -1);
      if (0 <= s) {
        var a = s == M ? null : c(s, M);
        0 > "\x3e~+".indexOf(a) ? U.Ja = a : U.Qc = a;
        s = -1;
      }
      0 <= l && (U.Ya.push(c(l + 1, M).replace(/\\/g, "")), l = -1);
    }
    function c(b, d) {
      return va(a.slice(b, d));
    }
    a = 0 <= "\x3e~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
    for (var d = [], e = -1, f = -1, g = -1, k = -1, l = -1, p = -1, s = -1, v = "", D = "", K, M = 0, W = a.length, U = null, pa = null;v = D, D = a.charAt(M), M < W;M++) {
      "\\" != v && (U || (K = M, U = {Vb:null, yb:[], qc:[], Ya:[], Ja:null, Qc:null, id:null, Jd:function() {
        return Mc ? this.Wg : this.Ja;
      }}, s = M), 0 <= e ? "]" == D ? (pa.bd ? pa.Qd = c(g || e + 1, M) : pa.bd = c(e + 1, M), !(e = pa.Qd) || '"' != e.charAt(0) && "'" != e.charAt(0) || (pa.Qd = e.slice(1, -1)), U.qc.push(pa), pa = null, e = g = -1) : "\x3d" == D && (g = 0 <= "|~^$*".indexOf(v) ? v : "", pa.type = g + D, pa.bd = c(e + 1, M - g.length), g = M + 1) : 0 <= f ? ")" == D && (0 <= k && (pa.value = c(f + 1, M)), k = f = -1) : "#" == D ? (b(), p = M + 1) : "." == D ? (b(), l = M) : ":" == D ? (b(), k = M) : "[" == D ? 
      (b(), e = M, pa = {}) : "(" == D ? (0 <= k && (pa = {name:c(k + 1, M), value:null}, U.yb.push(pa)), f = M) : " " == D && v != D && (b(), 0 <= k && U.yb.push({name:c(k + 1, M)}), U.Me = U.yb.length || U.qc.length || U.Ya.length, U.Oi = U.Vb = c(K, M), U.Wg = U.Ja = U.Qc ? null : U.Ja || "*", U.Ja && (U.Ja = U.Ja.toUpperCase()), d.length && d[d.length - 1].Qc && (U.Ie = d.pop(), U.Vb = U.Ie.Vb + " " + U.Vb), d.push(U), U = null));
    }
    return d;
  }
  function Ta(a, b) {
    var c = b || [];
    a && c.push(a);
    return c;
  }
  var eb = sk && "BackCompat" == document.compatMode, pa = document.firstChild.children ? "children" : "childNodes", Mc = !1, Mb = {"*\x3d":function(a, b) {
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
  }}, jh = "undefined" == typeof document.firstChild.nextElementSibling, Nf = jh ? "nextSibling" : "nextElementSibling", Bp = jh ? "previousSibling" : "previousElementSibling", Of = jh ? U : fs, fj = {checked:function() {
    return function(a) {
      return a.checked || a.attributes.checked;
    };
  }, "first-child":function() {
    return M;
  }, "last-child":function() {
    return K;
  }, "only-child":function() {
    return function(a) {
      return M(a) && K(a) ? !0 : !1;
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
    var c = hb(b)[0], d = {Mb:1};
    "*" != c.Ja && (d.Ja = 1);
    c.Ya.length || (d.Ya = 1);
    var e = p(c, d);
    return function(a) {
      return!e(a);
    };
  }, "nth-child":function(a, b) {
    if ("odd" == b) {
      return s;
    }
    if ("even" == b) {
      return v;
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
  }}, gj = qk ? function(a) {
    var b = a.toLowerCase();
    "class" == b && (a = "className");
    return function(c) {
      return Mc ? c.getAttribute(a) : c[a] || c[b];
    };
  } : function(a) {
    return function(b) {
      return b && b.getAttribute && b.hasAttribute(a);
    };
  }, kh = {}, Rl = {}, Sl = {}, oo = !!document.querySelectorAll && (!sk || Bk("526")), Md = 0, Is = qk ? function(a) {
    return Mc ? a.getAttribute("_uid") || a.setAttribute("_uid", ++Md) || Md : a.uniqueID;
  } : function(a) {
    return a._uid || (a._uid = ++Md);
  };
  a.yb = fj;
  return a;
}();
ca("goog.dom.query", gs);
ca("goog.dom.query.pseudos", gs.yb);
var hs, is = function() {
  function a(a, b) {
    "undefined" === typeof hs && (hs = function(a, b, c, d) {
      this.ub = a;
      this.kb = b;
      this.oh = c;
      this.Eg = d;
      this.p = 0;
      this.g = 393216;
    }, hs.Q = !0, hs.P = "domina.css/t28196", hs.U = function(a, b) {
      return hc(b, "domina.css/t28196");
    }, hs.prototype.Kb = function() {
      var a = this;
      return re.a(function(b) {
        return br(gs(a.ub, b));
      }, Uq(a.kb));
    }, hs.prototype.Dd = function() {
      var a = this;
      return B(te(ee(ib), re.a(function(b) {
        return br(gs(a.ub, b));
      }, Uq(a.kb))));
    }, hs.prototype.s = function() {
      return this.Eg;
    }, hs.prototype.t = function(a, b) {
      return new hs(this.ub, this.kb, this.oh, b);
    });
    return new hs(b, a, c, null);
  }
  function b(a) {
    return c.a(bm()[0], a);
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
function js() {
  es.c(is.b("#nav .search \x3e a"), ji, function(a) {
    var b = $r(a), b = gr.a(b, "..");
    Zr(a);
    a = A(Uq(b));
    for (var b = null, c = 0, d = 0;;) {
      if (d < c) {
        var e = b.w(null, d);
        am(e);
        d += 1;
      } else {
        if (a = A(a)) {
          b = a, jd(b) ? (a = tc(b), d = uc(b), b = a, c = H(a), a = d) : (a = B(b), am(a), a = E(b), b = null, c = 0), d = 0;
        } else {
          break;
        }
      }
    }
    return Vp.b(B(is.b("#search").Kb(null))).toggle();
  });
}
function ks() {
  es.c(is.b("#map-report \x3e a"), ji, function(a) {
    $r(a);
    var b = is.b("#map-report");
    Zr(a);
    a = Vq(b);
    a = Ka(Xl(a), "open");
    if (q(a)) {
      return Xq(b, "open"), Vp.b(B(b.Kb(null))).lf(Ag(new n(null, 1, ["right", "-270px"], null)), 400);
    }
    Wq(b, "open");
    return Vp.b(B(b.Kb(null))).lf(Ag(new n(null, 1, ["right", "0px"], null)), 400);
  });
}
var ls = new n(null, 2, ["map", "view-map", "lists", "view-lists"], null);
function ms(a) {
  for (var b = A(ls), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.w(null, e), g = I.c(f, 0, null), k = I.c(f, 1, null);
      es.c(is.b([w("#nav ."), w(g), w(" \x3e a")].join("")), ji, function(b, c, d, e, f, g) {
        return function(b) {
          Zr(b);
          return Bq.a(a, new R(null, 2, 5, S, [Kj, g], null));
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
          es.c(is.b([w("#nav ."), w(g), w(" \x3e a")].join("")), ji, function(b, c, d, e, f, g) {
            return function(b) {
              Zr(b);
              return Bq.a(a, new R(null, 2, 5, S, [Kj, g], null));
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
function ns(a) {
  Vp.b("[data-toggle\x3d'tooltip']").vh();
  js();
  ks();
  ms(a);
}
;var os = function() {
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
var ps, qs, rs, ss;
function ts(a) {
  return React.d.button({className:"btn", type:"button", onClick:function() {
    return Bq.a(a, new R(null, 2, 5, S, [Kj, "lists"], null));
  }}, React.d.o({className:"icon-lists-sm"}), "Full report");
}
function us(a) {
  return new n(null, 3, [hi, null == a ? null : Qg.b(a), Xi, null == a ? null : ri.b(a), Kg, null == a ? null : Ji.b(a)], null);
}
var ws = function vs(b, c) {
  var d = us(b), d = P(d) ? N.a(T, d) : d, e = J.a(d, Kg), f = J.a(d, Xi), g = J.a(d, hi);
  "undefined" === typeof ps && (ps = function(b, c, d, e, f, g, K, M) {
    this.va = b;
    this.ta = c;
    this.ia = d;
    this.Xf = e;
    this.v = f;
    this.X = g;
    this.kf = K;
    this.rg = M;
    this.p = 0;
    this.g = 393216;
  }, ps.Q = !0, ps.P = "clustermap.components.map-report/t22776", ps.U = function(b, c) {
    return hc(c, "clustermap.components.map-report/t22776");
  }, ps.prototype.Ga = !0, ps.prototype.Da = function() {
    var b = this;
    return React.d.R(null, React.d.Ld({className:"secondary"}, React.d.cc(null, "All portfolio companies"), React.d.fb(null, "UK wide")), React.d.de(null, function() {
      var c = Z.c ? Z.c(b.va, z, "-") : Z.call(null, b.va, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Companies listed")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Companies listed"));
    }(), function() {
      var c = Z.c ? Z.c(b.ta, z, "-") : Z.call(null, b.ta, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Investors listed")) : React.d.A(null, V(c), React.d.small(null, "Investors listed"));
    }(), function() {
      var c = Z.c ? Z.c(b.ia, z, "-") : Z.call(null, b.ia, z, "-");
      return O(c) ? React.d.A(X(c), function() {
        var c = os.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = os.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = Cn.m ? Cn.m(function() {
        var c = b.X, c = null == c ? null : Yi.b(c);
        return null == c ? null : Ch.b(c);
      }(), nj, 2, z, "-") : Cn.call(null, function() {
        var c = b.X, c = null == c ? null : Yi.b(c);
        return null == c ? null : Ch.b(c);
      }(), nj, 2, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.X, c = null == c ? null : Bi.b(c);
        return null == c ? null : Ch.b(c);
      }(), Ti, 0, z, "-") : Z.call(null, function() {
        var c = b.X, c = null == c ? null : Bi.b(c);
        return null == c ? null : Ch.b(c);
      }(), Ti, 0, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Employees"));
    }()), V(ts(b.v)));
  }, ps.prototype.s = function() {
    return this.rg;
  }, ps.prototype.t = function(b, c) {
    return new ps(this.va, this.ta, this.ia, this.Xf, this.v, this.X, this.kf, c);
  });
  return new ps(g, f, e, d, c, b, vs, null);
}, ys = function xs(b, c, d) {
  var e = us(c), e = P(e) ? N.a(T, e) : e, f = J.a(e, Kg), g = J.a(e, Xi), k = J.a(e, hi);
  "undefined" === typeof qs && (qs = function(b, c, d, e, f, g, k, W, U) {
    this.va = b;
    this.ta = c;
    this.ia = d;
    this.Yf = e;
    this.v = f;
    this.X = g;
    this.Tc = k;
    this.ih = W;
    this.sg = U;
    this.p = 0;
    this.g = 393216;
  }, qs.Q = !0, qs.P = "clustermap.components.map-report/t22832", qs.U = function(b, c) {
    return hc(c, "clustermap.components.map-report/t22832");
  }, qs.prototype.Ga = !0, qs.prototype.Da = function() {
    var b = this;
    return React.d.R(null, React.d.Ld({className:"secondary"}, React.d.cc(null, "Portfolio Company"), function() {
      var c = Xh.b(b.Tc);
      return O(c) ? React.d.fb(X(c), null) : React.d.fb(null, V(c));
    }()), React.d.de(null, function() {
      var c = Z.b ? Z.b(b.ta) : Z.call(null, b.ta);
      return O(c) ? React.d.A(X(c), function() {
        var c = os(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = os(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = Z.b ? Z.b(b.ia) : Z.call(null, b.ia);
      return O(c) ? React.d.A(X(c), function() {
        var c = os.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = os.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = Cn.m ? Cn.m(function() {
        var c = b.X, c = null == c ? null : Yi.b(c);
        return null == c ? null : Ch.b(c);
      }(), nj, 2, z, "-") : Cn.call(null, function() {
        var c = b.X, c = null == c ? null : Yi.b(c);
        return null == c ? null : Ch.b(c);
      }(), nj, 2, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.X, c = null == c ? null : Bi.b(c);
        return null == c ? null : Ch.b(c);
      }(), Ti, 0, z, "-") : Z.call(null, function() {
        var c = b.X, c = null == c ? null : Bi.b(c);
        return null == c ? null : Ch.b(c);
      }(), Ti, 0, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Employees"));
    }()), V(ts(b.v)));
  }, qs.prototype.s = function() {
    return this.sg;
  }, qs.prototype.t = function(b, c) {
    return new qs(this.va, this.ta, this.ia, this.Yf, this.v, this.X, this.Tc, this.ih, c);
  });
  return new qs(k, g, f, e, d, c, b, xs, null);
}, As = function zs(b, c, d) {
  var e = us(c), e = P(e) ? N.a(T, e) : e, f = J.a(e, Kg), g = J.a(e, Xi), k = J.a(e, hi);
  "undefined" === typeof rs && (rs = function(b, c, d, e, f, g, k, W, U) {
    this.va = b;
    this.ta = c;
    this.ia = d;
    this.Zf = e;
    this.v = f;
    this.X = g;
    this.Je = k;
    this.Of = W;
    this.tg = U;
    this.p = 0;
    this.g = 393216;
  }, rs.Q = !0, rs.P = "clustermap.components.map-report/t22882", rs.U = function(b, c) {
    return hc(c, "clustermap.components.map-report/t22882");
  }, rs.prototype.Ga = !0, rs.prototype.Da = function() {
    var b = this;
    return React.d.R(null, React.d.Ld({className:"secondary"}, React.d.cc(null, "Investor"), function() {
      var c = Xh.b(b.Je);
      return O(c) ? React.d.fb(X(c), null) : React.d.fb(null, V(c));
    }()), React.d.de(null, function() {
      var c = Z.b ? Z.b(b.va) : Z.call(null, b.va);
      return O(c) ? React.d.A(X(c), function() {
        var c = os.e(b.va, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = os.e(b.va, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = Z.b ? Z.b(b.ia) : Z.call(null, b.ia);
      return O(c) ? React.d.A(X(c), function() {
        var c = os.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = os.e(b.ia, "Constituency", F(["Constituencies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = Cn.m ? Cn.m(function() {
        var c = b.X, c = null == c ? null : Yi.b(c);
        return null == c ? null : Ch.b(c);
      }(), nj, 2, z, "-") : Cn.call(null, function() {
        var c = b.X, c = null == c ? null : Yi.b(c);
        return null == c ? null : Ch.b(c);
      }(), nj, 2, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.X, c = null == c ? null : Bi.b(c);
        return null == c ? null : Ch.b(c);
      }(), Ti, 0, z, "-") : Z.call(null, function() {
        var c = b.X, c = null == c ? null : Bi.b(c);
        return null == c ? null : Ch.b(c);
      }(), Ti, 0, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Employees"));
    }()), V(ts(b.v)));
  }, rs.prototype.s = function() {
    return this.tg;
  }, rs.prototype.t = function(b, c) {
    return new rs(this.va, this.ta, this.ia, this.Zf, this.v, this.X, this.Je, this.Of, c);
  });
  return new rs(k, g, f, e, d, c, b, zs, null);
}, Cs = function Bs(b, c, d) {
  var e = us(c), e = P(e) ? N.a(T, e) : e, f = J.a(e, Kg), g = J.a(e, Xi), k = J.a(e, hi);
  "undefined" === typeof ss && (ss = function(b, c, d, e, f, g, k, W, U) {
    this.va = b;
    this.ta = c;
    this.ia = d;
    this.$f = e;
    this.v = f;
    this.X = g;
    this.Ua = k;
    this.Gf = W;
    this.ug = U;
    this.p = 0;
    this.g = 393216;
  }, ss.Q = !0, ss.P = "clustermap.components.map-report/t22936", ss.U = function(b, c) {
    return hc(c, "clustermap.components.map-report/t22936");
  }, ss.prototype.Ga = !0, ss.prototype.Da = function() {
    var b = this;
    return React.d.R(null, React.d.Ld({className:"secondary"}, React.d.cc(null, "Constituency"), function() {
      var c = Xh.b(b.Ua);
      return O(c) ? React.d.fb(X(c), React.d.of(null), q(function() {
        var c = Cj.b(b.Ua);
        return q(c) ? c : ak.b(b.Ua);
      }()) ? React.d.small(null, "(", V(Cj.b(b.Ua)), ", ", V(ak.b(b.Ua)), ")") : null) : React.d.fb(null, V(c), React.d.of(null), q(function() {
        var c = Cj.b(b.Ua);
        return q(c) ? c : ak.b(b.Ua);
      }()) ? React.d.small(null, "(", V(Cj.b(b.Ua)), ", ", V(ak.b(b.Ua)), ")") : null);
    }()), React.d.de(null, function() {
      var c = Z.b ? Z.b(b.va) : Z.call(null, b.va);
      return O(c) ? React.d.A(X(c), function() {
        var c = os.e(b.va, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = os.e(b.va, "Portfolio Company", F(["Portfolio Companies"], 0));
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = Z.b ? Z.b(b.ta) : Z.call(null, b.ta);
      return O(c) ? React.d.A(X(c), function() {
        var c = os(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }()) : React.d.A(null, V(c), function() {
        var c = os(b.ta, "Investor");
        return O(c) ? React.d.small(X(c), null) : React.d.small(null, V(c));
      }());
    }(), function() {
      var c = Cn.m ? Cn.m(function() {
        var c = b.X, c = null == c ? null : Yi.b(c);
        return null == c ? null : Ch.b(c);
      }(), nj, 2, z, "-") : Cn.call(null, function() {
        var c = b.X, c = null == c ? null : Yi.b(c);
        return null == c ? null : Ch.b(c);
      }(), nj, 2, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Turnover")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Turnover"));
    }(), function() {
      var c = Z.m ? Z.m(function() {
        var c = b.X, c = null == c ? null : Bi.b(c);
        return null == c ? null : Ch.b(c);
      }(), Ti, 0, z, "-") : Z.call(null, function() {
        var c = b.X, c = null == c ? null : Bi.b(c);
        return null == c ? null : Ch.b(c);
      }(), Ti, 0, z, "-");
      return O(c) ? React.d.A(X(c), React.d.small(null, "Portfolio Company Employees")) : React.d.A(null, V(c), React.d.small(null, "Portfolio Company Employees"));
    }()), V(ts(b.v)));
  }, ss.prototype.s = function() {
    return this.ug;
  }, ss.prototype.t = function(b, c) {
    return new ss(this.va, this.ta, this.ia, this.$f, this.v, this.X, this.Ua, this.Gf, c);
  });
  return new ss(k, g, f, e, d, c, b, Bs, null);
};
function Ds(a, b) {
  var c = fn.a(b, Th), d = ze.a(a, new R(null, 2, 5, S, [Uh, aj], null)), e = ze.a(a, new R(null, 2, 5, S, [Uh, Nj], null)), f = dh.b(a);
  return q(xd.a ? xd.a(Qh, d) : xd.call(null, Qh, d)) ? ys(e, f, c) : q(xd.a ? xd.a(Gj, d) : xd.call(null, Gj, d)) ? As(e, f, c) : q(xd.a ? xd.a(yh, d) : xd.call(null, yh, d)) ? Cs(e, f, c) : ws(f, c);
}
;var Es, Fs = new R(null, 2, 5, S, [new R(null, 2, 5, S, [59.54, 2.3], null), new R(null, 2, 5, S, [49.29, -11.29], null)], null);
function Gs(a) {
  a.Jf(Ag(Fs), Ag(new n(null, 2, ["paddingTopLeft", new R(null, 2, 5, S, [0, 0], null), "paddingBottomRight", new R(null, 2, 5, S, [0, 0], null)], null)));
}
var Hs, Js, Ks = config, Ls = null == Ks ? null : Ks.ri, Ms = null == Ls ? null : Ls.map;
Js = null == Ms ? null : Ms.ci;
Hs = q(Js) ? Js : "mccraigmccraig.h4f921b9";
function Ns(a) {
  a = L.map.call(null, a, {zoomControl:!1});
  var b = L.Ei.Zi.call(null, Hs, {detectRetina:jb(config.kh)}), c = L.control.zoom.call(null, {position:"bottomright"});
  a.$h(b);
  a.Zh(c);
  Gs(a);
  return new n(null, 4, [Vh, a, Fh, sg.b(pf), Ri, sg.b(pf), ni, sg.b(Uf)], null);
}
var Os = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    if (q(A(b) ? b : null)) {
      var e = B(b), f = new L.Kh(e.yi(), e.xi()), e = ob.c(function() {
        return function(a, b) {
          return a.extend(b);
        };
      }(e, f), f, C(b));
      return a.Jf(e);
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
function Ps(a, b) {
  return "" + w(function() {
    var c = he.a(function(b) {
      return[w("\x3cli"), w(""), w("\x3e"), w("\x3ca"), w(Pn(new n(null, 3, [Ng, a.a ? a.a(Qh, b) : a.call(null, Qh, b), Mj, null, Lh, null], null))), w("\x3e"), w(Rn(Xh.b(b))), w("\x3c/a\x3e"), w("\x3c/li\x3e")].join("");
    }, b);
    return O(c) ? [w("\x3cul"), w(Pn(Rf.e(F([new n(null, 2, [Mj, null, Lh, "map-marker-popup-location-list"], null), c], 0)))), w("\x3e"), w("\x3c/ul\x3e")].join("") : [w('\x3cul class\x3d"map-marker-popup-location-list"\x3e'), w(Rn(c)), w("\x3c/ul\x3e")].join("");
  }());
}
function Qs(a, b, c) {
  var d = function() {
    var a = null == c ? null : B(c), a = null == a ? null : li.b(a), a = null == a ? null : Fd(a);
    return null == a ? null : Ag(a);
  }();
  if (q(d)) {
    var e = L.si(Ag(new n(null, 4, [Fj, "map-marker", Tj, new R(null, 2, 5, S, [24, 28], null), ei, new R(null, 2, 5, S, [12, 28], null), Ki, new R(null, 2, 5, S, [0, -22], null)], null))), d = L.Fi(d, Ag(new n(null, 1, [Eh, e], null)));
    a = Ps(a, c);
    d.di(a);
    d.hf(b);
    return d;
  }
  return console.log([w("missing location: "), w(function() {
    var a = new Xa, b = Za;
    try {
      Za = function(b) {
        return a.append(b);
      }, pg.e(F([c], 0));
    } finally {
      Za = b;
    }
    return "" + w(a);
  }())].join(""));
}
function Rs(a, b, c, d) {
  var e = Tb(c), f = Vf(Mf(e)), g = Vf(Mf(d)), k = rm.a(f, g), l = sm.a(g, f), p = sm.a(f, g), s = xe(pf, he.a(function() {
    return function(c) {
      return new R(null, 2, 5, S, [c, Qs(a, b, J.a(d, c))], null);
    };
  }(e, f, g, k, l, p), l)), f = xe(pf, he.a(function(b) {
    return function(c) {
      var e = S, f = J.a(b, c), g = J.a(d, c);
      f.Yi(Ps(a, g));
      return new R(null, 2, 5, e, [c, f], null);
    };
  }(e, f, g, k, l, p, s), k));
  (function() {
    for (var a = A(p), c = null, d = 0, f = 0;;) {
      if (f < d) {
        var g = c.w(null, f), g = J.a(e, g);
        b.Vc(g);
        f += 1;
      } else {
        if (a = A(a)) {
          jd(a) ? (d = tc(a), a = uc(a), c = d, d = H(d)) : (g = B(a), c = J.a(e, g), b.Vc(c), a = E(a), c = null, d = 0), f = 0;
        } else {
          return null;
        }
      }
    }
  })();
  tg(c, Rf.e(F([f, s], 0)));
}
function Ss(a) {
  a = Fg.b(a);
  a = P(a) ? N.a(T, a) : a;
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
  return L.Ci(Ag(new R(null, 2, 5, S, [new R(null, 2, 5, S, [c, a], null), new R(null, 2, 5, S, [e, d], null)], null)));
}
function Ts(a, b, c, d) {
  b = q(b) ? b[c] : null;
  var e = q(b) ? b.tolerance : null;
  b = q(b) ? new R(null, 2, 5, S, [e, b], null) : null;
  a = a.i ? a.i(c, d, Qi, 7) : a.call(null, c, d, Qi, 7);
  return q(a) ? a : b;
}
function Us(a, b) {
  var c = P(b) ? N.a(T, b) : b, d = J.a(c, pj), c = J.a(c, Pj);
  q(q(c) ? d : c) ? a.ce(Ag(new n(null, 5, [fi, "#0000aa", Rh, 2, Sh, 1, Oi, !0, gi, 0.2], null))) : q(c) ? a.ce(Ag(new n(null, 5, [fi, "#0000aa", Rh, 2, Sh, 1, Oi, !0, gi, 0.2], null))) : q(d) ? a.ce(Ag(new n(null, 4, [fi, "#000000", Rh, 2, Sh, 1, Oi, !1], null))) : a.ce(Ag(new n(null, 5, [fi, "#ff0000", Rh, 2, Sh, 0, Oi, !1, gi, 0], null)));
}
function Vs(a, b, c, d, e) {
  e = P(e) ? N.a(T, e) : e;
  var f = J.a(e, Pj), g = d.tolerance, k = Ss(d.envelope);
  d = L.ui(d.geojson);
  Us(d, e);
  d.hf(b);
  d.kc("click", function() {
    return Bq.a(a, new R(null, 2, 5, S, [Qj, new R(null, 2, 5, S, [yh, c], null)], null));
  });
  return new n(null, 5, [Mj, c, ci, g, Pj, f, Hj, d, mi, k], null);
}
function Ws(a, b, c, d, e, f, g, k) {
  if (q(c)) {
    var l = Tb(e), p = Vf(Mf(l)), s = Tb(f);
    k = Vf(N.a(Yd, he.a(fe.a(Vg, bh), N.a(Yd, Qf(k)))));
    var v = qm.a(k, g), D = sm.a(v, p), K = sm.a(p, v), M = rm.a(p, v), W = he.a(function(e, f, k, l) {
      return function(e) {
        var f = new n(null, 2, [Pj, pd(l, e), pj, pd(g, e)], null), k = Ts(b, c, e, d.Kd());
        q(k) ? (I.c(k, 0, null), k = I.c(k, 1, null), e = Vs(a, d, e, k, f)) : e = null;
        return e;
      };
    }(l, p, s, k, v, D, K, M), D), U = he.a(function(e, f, k, l) {
      return function(f) {
        a: {
          var k = J.a(e, f);
          f = new n(null, 2, [Pj, pd(l, f), pj, pd(g, f)], null);
          var k = P(k) ? N.a(T, k) : k, p = J.a(k, Mj), s = Ts(b, c, p, d.Kd());
          if (q(s)) {
            p = I.c(s, 0, null);
            s = I.c(s, 1, null);
            if (ae.a(p, ci.b(k))) {
              d.Vc(Hj.b(k));
              f = Vs(a, d, Mj.b(k), s, f);
              break a;
            }
            Us(Hj.b(k), f);
          }
          f = k;
        }
        return f;
      };
    }(l, p, s, k, v, D, K, M, W), M), ha = function() {
      for (var a = A(K), b = null, c = 0, e = 0;;) {
        if (e < c) {
          var f = b.w(null, e), f = J.a(l, f);
          q(f) && d.Vc(Hj.b(f));
          e += 1;
        } else {
          if (a = A(a)) {
            jd(a) ? (c = tc(a), a = uc(a), b = c, c = H(c)) : (f = B(a), b = J.a(l, f), q(b) && d.Vc(Hj.b(b)), a = E(a), b = null, c = 0), e = 0;
          } else {
            return null;
          }
        }
      }
    }(), p = ob.c(function() {
      return function(a, b) {
        var c = P(b) ? N.a(T, b) : b, d = J.a(c, Mj);
        return Yc.c(a, d, c);
      };
    }(l, p, s, k, v, D, K, M, W, U, ha), pf, te(de, Yd.a(W, U)));
    tg(f, k);
    tg(e, p);
  }
}
function Xs(a, b, c, d) {
  c = Tb(c);
  d = Tb(d);
  if (fd(c)) {
    return Gs(b), yn(a, ui, !0);
  }
  yn(a, ui, !1);
  a: {
    a = pf;
    for (d = A(d);;) {
      if (d) {
        var e = B(d), f = J.c(c, e, jj);
        a = ae.a(f, jj) ? Yc.c(a, e, f) : a;
        d = E(d);
      } else {
        c = a;
        break a;
      }
    }
    c = void 0;
  }
  c = null == c ? null : Qf(c);
  c = null == c ? null : he.a(mi, c);
  return q(c) ? N.c(Os, b, c) : Os(Fs);
}
var Zs = function Ys(b, c) {
  var d = P(b) ? N.a(T, b) : b, e = J.a(d, Uh);
  "undefined" === typeof Es && (Es = function(b, c, d, e, p, s, v) {
    this.selection = b;
    this.ee = c;
    this.Wf = d;
    this.u = e;
    this.ah = p;
    this.ig = s;
    this.qg = v;
    this.p = 0;
    this.g = 393216;
  }, Es.Q = !0, Es.P = "clustermap.components.map/t22715", Es.U = function(b, c) {
    return hc(c, "clustermap.components.map/t22715");
  }, Es.prototype.Qg = !0, Es.prototype.Se = function(b, c, d) {
    var e = this, p = P(c) ? N.a(T, c) : c;
    b = J.a(p, Uh);
    c = J.a(p, ki);
    var s = J.a(p, xh), v = J.a(p, yi);
    J.a(p, oh);
    J.a(p, oj);
    d = P(d) ? N.a(T, d) : d;
    d = J.a(d, vi);
    var p = dn(e.u), p = P(p) ? N.a(T, p) : p, p = J.a(p, yi), D = fn.b(e.u), K = P(D) ? N.a(T, D) : D, D = J.a(K, Yj);
    J.a(K, wh);
    var M = J.a(K, Gh), W = J.a(K, Th), K = en.b(e.u), K = P(K) ? N.a(T, K) : K, U = J.a(K, rh), ha = P(U) ? N.a(T, U) : U, U = J.a(ha, ni), hb = J.a(ha, Ri), Ta = J.a(ha, Fh), eb = J.a(ha, Vh), ha = J.a(K, ui);
    J.a(K, vi);
    Rs(D, eb, Ta, c);
    ae.a(v, p) && (eb.kc("mousemove", function(b) {
      var c = b.Pd.Pf;
      b = b.Pd.Qf;
      var d = dk(v, b, c), f = he.a(function() {
        return function(b) {
          return b.Ue.id;
        };
      }(c, b, d), d), g = B(d), d = Vf(je(1, f)), f = en.a(e.u, vi);
      q(q(g) ? ae.a(f, d) : g) && (f = L.Ri(), f.Xi(Ag(new R(null, 2, 5, S, [c, b], null))), f.Wi([w("\x3cp\x3e"), w(function() {
        var b = null == g ? null : g.Ue;
        return null == b ? null : b.qi;
      }()), w("\x3c/p\x3e")].join("")), f.Mi(eb));
      return yn(e.u, vi, d);
    }), eb.kc("click", function(b) {
      b = dk(v, b.Pd.Qf, b.Pd.Pf);
      b = he.a(function() {
        return function(b) {
          return b.Ue.id;
        };
      }(b), b);
      return Bq.a(W, new R(null, 2, 5, S, [Qj, new R(null, 2, 5, S, [yh, B(b)], null)], null));
    }));
    q(s) && Ws(W, M, s, eb, hb, U, d, c);
    return q(q(ha) ? ha : ae.a(b, e.selection)) ? Xs(e.u, eb, hb, U) : null;
  }, Es.prototype.Oe = !0, Es.prototype.Ud = function(b, c) {
    var d = this, e = Ns(c), e = P(e) ? N.a(T, e) : e;
    J.a(e, Mg);
    J.a(e, Fh);
    var p = J.a(e, Vh);
    yn(d.u, rh, e);
    yn(d.u, vi, Uf);
    p.kc("zoomend", function() {
      return ug.i(fn.a(d.u, Gi), Yc, oj, p.Kd());
    });
    Vp.b(document).kc("clustermap-change-view", function() {
      console.log("change-view");
      var b = en.b(d.u), b = P(b) ? N.a(T, b) : b, b = J.a(b, rh), c = P(b) ? N.a(T, b) : b, b = J.a(c, ni), c = J.a(c, Ri);
      p.Ai();
      return Xs(d.u, p, c, b);
    });
    return wn.i(d.ee, Yc, oj, p.Kd());
  }, Es.prototype.Ga = !0, Es.prototype.Da = function() {
    return React.d.R({className:"map", ref:"map"});
  }, Es.prototype.s = function() {
    return this.qg;
  }, Es.prototype.t = function(b, c) {
    return new Es(this.selection, this.ee, this.Wf, this.u, this.ah, this.ig, c);
  });
  return new Es(e, d, d, c, b, Ys, null);
};
var $s = sg.b(Xc([Lg, dh, lh, oh, xh, Ph, Uh, Wh, ki, yi, Zi, bj, oj, ck], [rh, null, null, null, null, null, null, Ue, null, null, pf, null, null, null]));
function at(a, b) {
  return ob.c(function(a, b) {
    var e = I.c(b, 0, null), f = I.c(b, 1, null), e = hd(e) ? e : new R(null, 1, 5, S, [e], null);
    return Ce.c(a, e, $c(f) ? f : function() {
      return f;
    });
  }, a, b);
}
var bt = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = P(a) ? N.a(T, a) : a;
    return ug.c($s, at, a);
  }
  a.l = 0;
  a.h = function(a) {
    a = A(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ct() {
  var a = zq.b(1);
  mo(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Id(b, Rg)) {
                      return b;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return c[5] = e, pq(c), Rg;
                  }
                  if (t) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!Id(e, Rg)) {
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
          var b = a[2], c = new RTree(10), g = Object.keys(b), k = [], l = Ag(new n(null, 1, [aj, "FeatureCollection"], null));
          l.features = k;
          for (var g = A(g), p = null, s = 0, v = 0;;) {
            if (v < s) {
              var D = p.w(null, v), K = b[D], D = K.geojson, K = Ag(new n(null, 2, [aj, "Feature", zi, new n(null, 2, [Mj, K.id, Sj, K.compact_name], null)], null));
              K.geometry = D;
              k.push(K);
              v += 1;
            } else {
              if (g = A(g)) {
                jd(g) ? (s = tc(g), g = uc(g), p = s, s = H(s)) : (p = B(g), s = b[p], p = s.geojson, s = Ag(new n(null, 2, [aj, "Feature", zi, new n(null, 2, [Mj, s.id, Sj, s.compact_name], null)], null)), s.geometry = p, k.push(s), g = E(g), p = null, s = 0), v = 0;
              } else {
                break;
              }
            }
          }
          c.ti(l);
          b = bt.e(F([xh, b, yi, c], 0));
          return oq(a, b);
        }
        return 1 === b ? (b = nr.e("uk_constituencies", F([nh, !0], 0)), mq(a, 2, b)) : null;
      });
    }(), c = function() {
      var c = b.q ? b.q() : b.call(null);
      c[6] = a;
      return c;
    }();
    return lq(c);
  });
}
function dt() {
  var a = zq.b(1);
  mo(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Id(b, Rg)) {
                      return b;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return c[5] = e, pq(c), Rg;
                  }
                  if (t) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!Id(e, Rg)) {
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
        return 2 === b ? (b = bt.e(F([bj, a[2]], 0)), oq(a, b)) : 1 === b ? (b = rr(), mq(a, 2, b)) : null;
      });
    }(), c = function() {
      var c = b.q ? b.q() : b.call(null);
      c[6] = a;
      return c;
    }();
    return lq(c);
  });
}
var et = new so;
function ft(a, b, c) {
  return q(q(b) ? c : b) ? Ho(et, [w("/"), w(Jd(q(a) ? a : "map")), w("/"), w(Jd(b)), w("/"), w(Jd(c))].join("")) : q(a) ? Ho(et, [w("/"), w(Jd(a))].join("")) : Ho(et, "" + w(""));
}
function gt() {
  var a = zo(et), b = dg(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/, a);
  I.c(b, 0, null);
  var a = I.c(b, 1, null), c = I.c(b, 2, null), b = I.c(b, 3, null);
  return new n(null, 3, [Lg, a, aj, c, Mj, b], null);
}
var ht = new n(null, 5, [hh, jr(function(a) {
  if (0 < H(va(a))) {
    a = hr([w("/api/"), w(lr), w("/search?q\x3d"), w(a)].join(""));
  } else {
    a = new R(null, 1, 5, S, [{}], null);
    var b = zq.b(Vd(100, a));
    Cq.a(b, a);
    a = b;
  }
  return a;
}, function(a) {
  return bt.e(F([Zi, Fg.b(a)], 0));
}), Qj, function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  var c = gt(), c = P(c) ? N.a(T, c) : c, c = J.a(c, Lg);
  return ft(c, b, a);
}, Ni, jr(function(a) {
  var b = I.c(a, 0, null);
  a = I.c(a, 1, null);
  var c = q(b) ? new qf([b, a]) : pf, d = Ph.b(Tb($s));
  return ae.a(c, d) ? (bt.e(F([Ph, c], 0)), q(y.a ? y.a(Qh, b) : y.call(null, Qh, b)) ? new R(null, 2, 5, S, [new R(null, 6, 5, S, [hr([w("/api/"), w(lr), w("/portfolio-companies/"), w(a)].join("")), rr.e(F([c], 0)), or.e(F([c], 0)), pr.e(F([c], 0)), sr.e(F([c], 0)), qr.e(F([c], 0))], null), b], null) : q(y.a ? y.a(Gj, b) : y.call(null, Gj, b)) ? new R(null, 2, 5, S, [new R(null, 6, 5, S, [hr([w("/api/"), w(lr), w("/investor-companies/"), w(a)].join("")), rr.e(F([c], 0)), or.e(F([c], 0)), pr.e(F([c], 
  0)), sr.e(F([c], 0)), qr.e(F([c], 0))], null), b], null) : q(y.a ? y.a(yh, b) : y.call(null, yh, b)) ? new R(null, 2, 5, S, [new R(null, 6, 5, S, [hr([w("/api/"), w(lr), w("/constituencies/"), w(a)].join("")), rr.e(F([c], 0)), or.e(F([c], 0)), pr.e(F([c], 0)), sr.e(F([c], 0)), qr.e(F([c], 0))], null), b], null) : new R(null, 2, 5, S, [new R(null, 6, 5, S, [null, rr.e(F([c], 0)), or.e(F([c], 0)), pr.e(F([c], 0)), sr.e(F([c], 0)), null], null), b], null)) : null;
}, function(a, b) {
  var c = I.c(a, 0, null), d = I.c(a, 1, null), e = I.c(a, 2, null), f = I.c(a, 3, null), g = I.c(a, 4, null), k = I.c(a, 5, null);
  return bt.e(F([Uh, new n(null, 2, [aj, b, Nj, c], null), dh, d, Wh, e, ck, f, lh, g, ki, k], 0));
}), Kj, function(a) {
  var b = gt(), c = P(b) ? N.a(T, b) : b, b = J.a(c, Mj), c = J.a(c, aj);
  return ft(a, c, b);
}, kj, function(a) {
  a = Kd.b(a);
  if (ae.a(a, Lg.b(Tb($s)))) {
    bt.e(F([Lg, a], 0));
    a = Jd(a);
    if (!q(J.a(ls, a))) {
      throw Error([w("unknown view: "), w(a)].join(""));
    }
    var b = is.b("body"), c = [w("#nav ."), w(a)].join(""), c = is.b(c), d = gr.a(c, ".."), d = is.a(d, "\x3e .active");
    Xq(d, "active");
    Wq(c, "active");
    for (var c = A(ls), d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.w(null, f), k = I.c(g, 0, null), g = I.c(g, 1, null);
        y.a(k, a) ? Wq(b, g) : Xq(b, g);
        f += 1;
      } else {
        if (c = A(c)) {
          jd(c) ? (e = tc(c), c = uc(c), d = e, e = H(e)) : (e = B(c), d = I.c(e, 0, null), e = I.c(e, 1, null), y.a(d, a) ? Wq(b, e) : Xq(b, e), c = E(c), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return Vp.b(document).aj("clustermap-change-view");
  }
  return null;
}], null);
function it(a) {
  ug.i(Hr, Yc, "/", function(b) {
    P(b) && N.a(T, b);
    return Bq.a(a, new R(null, 2, 5, S, [Ni, null], null));
  });
  ug.i(Hr, Yc, "/:view", function(b) {
    b = P(b) ? N.a(T, b) : b;
    b = J.a(b, Lg);
    Bq.a(a, new R(null, 2, 5, S, [kj, b], null));
    return Bq.a(a, new R(null, 2, 5, S, [Ni, null], null));
  });
  ug.i(Hr, Yc, "/:view/:type/:id", function(b) {
    var c = P(b) ? N.a(T, b) : b;
    b = J.a(c, Mj);
    var d = J.a(c, aj), c = J.a(c, Lg);
    Bq.a(a, new R(null, 2, 5, S, [kj, c], null));
    return Bq.a(a, new R(null, 2, 5, S, [Ni, new R(null, 2, 5, S, [Kd.b(d), b], null)], null));
  });
  Pk(et, "navigate", function(a) {
    a = mm.a(a.uh, /\?/);
    var c = I.c(a, 0, null);
    a = I.c(a, 1, null);
    a = q(a) ? new n(null, 1, [Pg, Nr(a)], null) : null;
    var d;
    var e = B(Mr(Kr, c));
    q(e) ? (d = I.c(e, 0, null), e = I.c(e, 1, null), d = new R(null, 2, 5, S, [e, pf], null)) : (d = A(Mr(Lr, c))) ? (e = B(d), d = I.c(e, 0, null), e = I.c(e, 1, null), d = new R(null, 2, 5, S, [e, Or(d, c)], null)) : d = null;
    c = I.c(d, 0, null);
    d = I.c(d, 1, null);
    c = q(c) ? c : de;
    a = Rf.e(F([d, a], 0));
    return c.b ? c.b(a) : c.call(null, a);
  });
  Co(et, !0);
}
function jt() {
  var a = zq.q(), b = ge.a(Fr, $s), c = ge.a(Gr, $s), b = new n(null, 3, [Th, a, Yj, b, wh, c], null);
  ns(a);
  it(a);
  ct();
  dt();
  tn.i($s, Rf.e(F([b, new n(null, 2, [Gi, $s, Gh, ge.c(xr, $s, oh)], null)], 0)), Zs, document.getElementById("map-component"));
  tn.i($s, b, Xr, document.getElementById("search-component"));
  tn.i($s, b, Ds, document.getElementById("map-report-component"));
  tn.i($s, b, gq(), document.getElementById("page-title-component"));
  tn.i($s, b, fq, document.getElementById("full-report-component"));
  var d = zq.b(1);
  mo(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Id(b, Rg)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, pq(c), Rg;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Id(d, Rg)) {
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
          var d = b[2], c = I.c(d, 0, null), d = I.c(d, 1, null), e = J.a(ht, c);
          if (jb(e)) {
            throw Error([w("no handler for event-type: "), w(c)].join(""));
          }
          c = e.b ? e.b(d) : e.call(null, d);
          b[7] = c;
          b[2] = null;
          b[1] = 2;
          return Rg;
        }
        return 6 === c ? (c = b[2], b[2] = c, b[1] = 3, Rg) : 5 === c ? (b[2] = null, b[1] = 6, Rg) : 4 === c ? mq(b, 7, a) : 3 === c ? (c = b[2], oq(b, c)) : 2 === c ? (b[1] = 4, Rg) : 1 === c ? (b[2] = null, b[1] = 2, Rg) : null;
      });
    }(), c = function() {
      var a = b.q ? b.q() : b.call(null);
      a[6] = d;
      return a;
    }();
    return lq(c);
  });
  return d;
}
;function kt() {
  return jt();
}
q(config.kh) ? setTimeout(kt, 2E3) : jt();

})();

//# sourceMappingURL=clustermap.js.map