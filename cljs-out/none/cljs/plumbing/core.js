// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__91901__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__91901 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__91901__delegate.call(this,m,k,f,x1,x2,xs);};
G__91901.cljs$lang$maxFixedArity = 5;
G__91901.cljs$lang$applyTo = (function (arglist__91902){
var m = cljs.core.first(arglist__91902);
arglist__91902 = cljs.core.next(arglist__91902);
var k = cljs.core.first(arglist__91902);
arglist__91902 = cljs.core.next(arglist__91902);
var f = cljs.core.first(arglist__91902);
arglist__91902 = cljs.core.next(arglist__91902);
var x1 = cljs.core.first(arglist__91902);
arglist__91902 = cljs.core.next(arglist__91902);
var x2 = cljs.core.first(arglist__91902);
var xs = cljs.core.rest(arglist__91902);
return G__91901__delegate(m,k,f,x1,x2,xs);
});
G__91901.cljs$core$IFn$_invoke$arity$variadic = G__91901__delegate;
return G__91901;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__91911_91917 = cljs.core.seq.call(null,m);var chunk__91912_91918 = null;var count__91913_91919 = (0);var i__91914_91920 = (0);while(true){
if((i__91914_91920 < count__91913_91919))
{var vec__91915_91921 = cljs.core._nth.call(null,chunk__91912_91918,i__91914_91920);var k_91922 = cljs.core.nth.call(null,vec__91915_91921,(0),null);var v_91923 = cljs.core.nth.call(null,vec__91915_91921,(1),null);var m91910_91924 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m91910_91924,k_91922,f.call(null,v_91923)));
{
var G__91925 = seq__91911_91917;
var G__91926 = chunk__91912_91918;
var G__91927 = count__91913_91919;
var G__91928 = (i__91914_91920 + (1));
seq__91911_91917 = G__91925;
chunk__91912_91918 = G__91926;
count__91913_91919 = G__91927;
i__91914_91920 = G__91928;
continue;
}
} else
{var temp__4126__auto___91929 = cljs.core.seq.call(null,seq__91911_91917);if(temp__4126__auto___91929)
{var seq__91911_91930__$1 = temp__4126__auto___91929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91911_91930__$1))
{var c__4406__auto___91931 = cljs.core.chunk_first.call(null,seq__91911_91930__$1);{
var G__91932 = cljs.core.chunk_rest.call(null,seq__91911_91930__$1);
var G__91933 = c__4406__auto___91931;
var G__91934 = cljs.core.count.call(null,c__4406__auto___91931);
var G__91935 = (0);
seq__91911_91917 = G__91932;
chunk__91912_91918 = G__91933;
count__91913_91919 = G__91934;
i__91914_91920 = G__91935;
continue;
}
} else
{var vec__91916_91936 = cljs.core.first.call(null,seq__91911_91930__$1);var k_91937 = cljs.core.nth.call(null,vec__91916_91936,(0),null);var v_91938 = cljs.core.nth.call(null,vec__91916_91936,(1),null);var m91910_91939 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m91910_91939,k_91937,f.call(null,v_91938)));
{
var G__91940 = cljs.core.next.call(null,seq__91911_91930__$1);
var G__91941 = null;
var G__91942 = (0);
var G__91943 = (0);
seq__91911_91917 = G__91940;
chunk__91912_91918 = G__91941;
count__91913_91919 = G__91942;
i__91914_91920 = G__91943;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14991__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__91952_91958 = cljs.core.seq.call(null,m);var chunk__91953_91959 = null;var count__91954_91960 = (0);var i__91955_91961 = (0);while(true){
if((i__91955_91961 < count__91954_91960))
{var vec__91956_91962 = cljs.core._nth.call(null,chunk__91953_91959,i__91955_91961);var k_91963 = cljs.core.nth.call(null,vec__91956_91962,(0),null);var v_91964 = cljs.core.nth.call(null,vec__91956_91962,(1),null);var m91951_91965 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m91951_91965,f.call(null,k_91963),v_91964));
{
var G__91966 = seq__91952_91958;
var G__91967 = chunk__91953_91959;
var G__91968 = count__91954_91960;
var G__91969 = (i__91955_91961 + (1));
seq__91952_91958 = G__91966;
chunk__91953_91959 = G__91967;
count__91954_91960 = G__91968;
i__91955_91961 = G__91969;
continue;
}
} else
{var temp__4126__auto___91970 = cljs.core.seq.call(null,seq__91952_91958);if(temp__4126__auto___91970)
{var seq__91952_91971__$1 = temp__4126__auto___91970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91952_91971__$1))
{var c__4406__auto___91972 = cljs.core.chunk_first.call(null,seq__91952_91971__$1);{
var G__91973 = cljs.core.chunk_rest.call(null,seq__91952_91971__$1);
var G__91974 = c__4406__auto___91972;
var G__91975 = cljs.core.count.call(null,c__4406__auto___91972);
var G__91976 = (0);
seq__91952_91958 = G__91973;
chunk__91953_91959 = G__91974;
count__91954_91960 = G__91975;
i__91955_91961 = G__91976;
continue;
}
} else
{var vec__91957_91977 = cljs.core.first.call(null,seq__91952_91971__$1);var k_91978 = cljs.core.nth.call(null,vec__91957_91977,(0),null);var v_91979 = cljs.core.nth.call(null,vec__91957_91977,(1),null);var m91951_91980 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m91951_91980,f.call(null,k_91978),v_91979));
{
var G__91981 = cljs.core.next.call(null,seq__91952_91971__$1);
var G__91982 = null;
var G__91983 = (0);
var G__91984 = (0);
seq__91952_91958 = G__91981;
chunk__91953_91959 = G__91982;
count__91954_91960 = G__91983;
i__91955_91961 = G__91984;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14991__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__91991_91995 = cljs.core.seq.call(null,ks);var chunk__91992_91996 = null;var count__91993_91997 = (0);var i__91994_91998 = (0);while(true){
if((i__91994_91998 < count__91993_91997))
{var k_91999 = cljs.core._nth.call(null,chunk__91992_91996,i__91994_91998);var m91990_92000 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m91990_92000,k_91999,f.call(null,k_91999)));
{
var G__92001 = seq__91991_91995;
var G__92002 = chunk__91992_91996;
var G__92003 = count__91993_91997;
var G__92004 = (i__91994_91998 + (1));
seq__91991_91995 = G__92001;
chunk__91992_91996 = G__92002;
count__91993_91997 = G__92003;
i__91994_91998 = G__92004;
continue;
}
} else
{var temp__4126__auto___92005 = cljs.core.seq.call(null,seq__91991_91995);if(temp__4126__auto___92005)
{var seq__91991_92006__$1 = temp__4126__auto___92005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91991_92006__$1))
{var c__4406__auto___92007 = cljs.core.chunk_first.call(null,seq__91991_92006__$1);{
var G__92008 = cljs.core.chunk_rest.call(null,seq__91991_92006__$1);
var G__92009 = c__4406__auto___92007;
var G__92010 = cljs.core.count.call(null,c__4406__auto___92007);
var G__92011 = (0);
seq__91991_91995 = G__92008;
chunk__91992_91996 = G__92009;
count__91993_91997 = G__92010;
i__91994_91998 = G__92011;
continue;
}
} else
{var k_92012 = cljs.core.first.call(null,seq__91991_92006__$1);var m91990_92013 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m91990_92013,k_92012,f.call(null,k_92012)));
{
var G__92014 = cljs.core.next.call(null,seq__91991_92006__$1);
var G__92015 = null;
var G__92016 = (0);
var G__92017 = (0);
seq__91991_91995 = G__92014;
chunk__91992_91996 = G__92015;
count__91993_91997 = G__92016;
i__91994_91998 = G__92017;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14991__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__92024_92028 = cljs.core.seq.call(null,vs);var chunk__92025_92029 = null;var count__92026_92030 = (0);var i__92027_92031 = (0);while(true){
if((i__92027_92031 < count__92026_92030))
{var v_92032 = cljs.core._nth.call(null,chunk__92025_92029,i__92027_92031);var m92023_92033 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m92023_92033,f.call(null,v_92032),v_92032));
{
var G__92034 = seq__92024_92028;
var G__92035 = chunk__92025_92029;
var G__92036 = count__92026_92030;
var G__92037 = (i__92027_92031 + (1));
seq__92024_92028 = G__92034;
chunk__92025_92029 = G__92035;
count__92026_92030 = G__92036;
i__92027_92031 = G__92037;
continue;
}
} else
{var temp__4126__auto___92038 = cljs.core.seq.call(null,seq__92024_92028);if(temp__4126__auto___92038)
{var seq__92024_92039__$1 = temp__4126__auto___92038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92024_92039__$1))
{var c__4406__auto___92040 = cljs.core.chunk_first.call(null,seq__92024_92039__$1);{
var G__92041 = cljs.core.chunk_rest.call(null,seq__92024_92039__$1);
var G__92042 = c__4406__auto___92040;
var G__92043 = cljs.core.count.call(null,c__4406__auto___92040);
var G__92044 = (0);
seq__92024_92028 = G__92041;
chunk__92025_92029 = G__92042;
count__92026_92030 = G__92043;
i__92027_92031 = G__92044;
continue;
}
} else
{var v_92045 = cljs.core.first.call(null,seq__92024_92039__$1);var m92023_92046 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m92023_92046,f.call(null,v_92045),v_92045));
{
var G__92047 = cljs.core.next.call(null,seq__92024_92039__$1);
var G__92048 = null;
var G__92049 = (0);
var G__92050 = (0);
seq__92024_92028 = G__92047;
chunk__92025_92029 = G__92048;
count__92026_92030 = G__92049;
i__92027_92031 = G__92050;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14991__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__92051){var vec__92053 = p__92051;var k = cljs.core.nth.call(null,vec__92053,(0),null);var ks = cljs.core.nthnext.call(null,vec__92053,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3625__auto__ = ks;if(and__3625__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3625__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__92062_92068 = cljs.core.seq.call(null,x);var chunk__92063_92069 = null;var count__92064_92070 = (0);var i__92065_92071 = (0);while(true){
if((i__92065_92071 < count__92064_92070))
{var vec__92066_92072 = cljs.core._nth.call(null,chunk__92063_92069,i__92065_92071);var k_92073 = cljs.core.nth.call(null,vec__92066_92072,(0),null);var v_92074 = cljs.core.nth.call(null,vec__92066_92072,(1),null);var m92061_92075 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m92061_92075,((typeof k_92073 === 'string')?cljs.core.keyword.call(null,k_92073):k_92073),keywordize_map.call(null,v_92074)));
{
var G__92076 = seq__92062_92068;
var G__92077 = chunk__92063_92069;
var G__92078 = count__92064_92070;
var G__92079 = (i__92065_92071 + (1));
seq__92062_92068 = G__92076;
chunk__92063_92069 = G__92077;
count__92064_92070 = G__92078;
i__92065_92071 = G__92079;
continue;
}
} else
{var temp__4126__auto___92080 = cljs.core.seq.call(null,seq__92062_92068);if(temp__4126__auto___92080)
{var seq__92062_92081__$1 = temp__4126__auto___92080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92062_92081__$1))
{var c__4406__auto___92082 = cljs.core.chunk_first.call(null,seq__92062_92081__$1);{
var G__92083 = cljs.core.chunk_rest.call(null,seq__92062_92081__$1);
var G__92084 = c__4406__auto___92082;
var G__92085 = cljs.core.count.call(null,c__4406__auto___92082);
var G__92086 = (0);
seq__92062_92068 = G__92083;
chunk__92063_92069 = G__92084;
count__92064_92070 = G__92085;
i__92065_92071 = G__92086;
continue;
}
} else
{var vec__92067_92087 = cljs.core.first.call(null,seq__92062_92081__$1);var k_92088 = cljs.core.nth.call(null,vec__92067_92087,(0),null);var v_92089 = cljs.core.nth.call(null,vec__92067_92087,(1),null);var m92061_92090 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m92061_92090,((typeof k_92088 === 'string')?cljs.core.keyword.call(null,k_92088):k_92088),keywordize_map.call(null,v_92089)));
{
var G__92091 = cljs.core.next.call(null,seq__92062_92081__$1);
var G__92092 = null;
var G__92093 = (0);
var G__92094 = (0);
seq__92062_92068 = G__92091;
chunk__92063_92069 = G__92092;
count__92064_92070 = G__92093;
i__92065_92071 = G__92094;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14991__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__15060__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__15060__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__92095 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__92096 = cljs.core.next.call(null,ks);
m = G__92095;
ks = G__92096;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3637__auto__ = m;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4375__auto__ = (function iter__92105(s__92106){return (new cljs.core.LazySeq(null,(function (){var s__92106__$1 = s__92106;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__92106__$1);if(temp__4126__auto__)
{var s__92106__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__92106__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__92106__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__92108 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__92107 = (0);while(true){
if((i__92107 < size__4374__auto__))
{var vec__92111 = cljs.core._nth.call(null,c__4373__auto__,i__92107);var k = cljs.core.nth.call(null,vec__92111,(0),null);var v = cljs.core.nth.call(null,vec__92111,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__92108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__92113 = (i__92107 + (1));
i__92107 = G__92113;
continue;
}
} else
{{
var G__92114 = (i__92107 + (1));
i__92107 = G__92114;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92108),iter__92105.call(null,cljs.core.chunk_rest.call(null,s__92106__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92108),null);
}
} else
{var vec__92112 = cljs.core.first.call(null,s__92106__$2);var k = cljs.core.nth.call(null,vec__92112,(0),null);var v = cljs.core.nth.call(null,vec__92112,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__92105.call(null,cljs.core.rest.call(null,s__92106__$2)));
} else
{{
var G__92115 = cljs.core.rest.call(null,s__92106__$2);
s__92106__$1 = G__92115;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__92116){
var m = cljs.core.first(arglist__92116);
var kvs = cljs.core.rest(arglist__92116);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__92117){
var m = cljs.core.first(arglist__92117);
arglist__92117 = cljs.core.next(arglist__92117);
var key_seq = cljs.core.first(arglist__92117);
arglist__92117 = cljs.core.next(arglist__92117);
var f = cljs.core.first(arglist__92117);
var args = cljs.core.rest(arglist__92117);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4375__auto__ = ((function (s){
return (function iter__92122(s__92123){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__92123__$1 = s__92123;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__92123__$1);if(temp__4126__auto__)
{var s__92123__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__92123__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__92123__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__92125 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__92124 = (0);while(true){
if((i__92124 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__92124);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__92125,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__92126 = (i__92124 + (1));
i__92124 = G__92126;
continue;
}
} else
{{
var G__92127 = (i__92124 + (1));
i__92124 = G__92127;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92125),iter__92122.call(null,cljs.core.chunk_rest.call(null,s__92123__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__92125),null);
}
} else
{var x = cljs.core.first.call(null,s__92123__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__92122.call(null,cljs.core.rest.call(null,s__92123__$2)));
} else
{{
var G__92128 = cljs.core.rest.call(null,s__92123__$2);
s__92123__$1 = G__92128;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4375__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__92129){
var colls = cljs.core.seq(arglist__92129);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__92130__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__92131 = conj_when.call(null,coll,x);
var G__92132 = cljs.core.first.call(null,xs);
var G__92133 = cljs.core.next.call(null,xs);
coll = G__92131;
x = G__92132;
xs = G__92133;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__92130 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__92130__delegate.call(this,coll,x,xs);};
G__92130.cljs$lang$maxFixedArity = 2;
G__92130.cljs$lang$applyTo = (function (arglist__92134){
var coll = cljs.core.first(arglist__92134);
arglist__92134 = cljs.core.next(arglist__92134);
var x = cljs.core.first(arglist__92134);
var xs = cljs.core.rest(arglist__92134);
return G__92130__delegate(coll,x,xs);
});
G__92130.cljs$core$IFn$_invoke$arity$variadic = G__92130__delegate;
return G__92130;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__92136__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__92135_SHARP_){return cljs.core.apply.call(null,f,p1__92135_SHARP_,args);
}));
};
var G__92136 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__92136__delegate.call(this,a,f,args);};
G__92136.cljs$lang$maxFixedArity = 2;
G__92136.cljs$lang$applyTo = (function (arglist__92137){
var a = cljs.core.first(arglist__92137);
arglist__92137 = cljs.core.next(arglist__92137);
var f = cljs.core.first(arglist__92137);
var args = cljs.core.rest(arglist__92137);
return G__92136__delegate(a,f,args);
});
G__92136.cljs$core$IFn$_invoke$arity$variadic = G__92136__delegate;
return G__92136;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__92138__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__92138 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__92138__delegate.call(this,f,arg,args);};
G__92138.cljs$lang$maxFixedArity = 2;
G__92138.cljs$lang$applyTo = (function (arglist__92139){
var f = cljs.core.first(arglist__92139);
arglist__92139 = cljs.core.next(arglist__92139);
var arg = cljs.core.first(arglist__92139);
var args = cljs.core.rest(arglist__92139);
return G__92138__delegate(f,arg,args);
});
G__92138.cljs$core$IFn$_invoke$arity$variadic = G__92138__delegate;
return G__92138;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map