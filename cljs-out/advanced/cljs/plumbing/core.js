// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$1017;
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1)));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2)));
});
var update__6 = (function() { 
var G__52958__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__52958 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__52958__delegate.call(this,m,k,f,x1,x2,xs);};
G__52958.cljs$lang$maxFixedArity = 5;
G__52958.cljs$lang$applyTo = (function (arglist__52959){
var m = cljs.core.first(arglist__52959);
arglist__52959 = cljs.core.next(arglist__52959);
var k = cljs.core.first(arglist__52959);
arglist__52959 = cljs.core.next(arglist__52959);
var f = cljs.core.first(arglist__52959);
arglist__52959 = cljs.core.next(arglist__52959);
var x1 = cljs.core.first(arglist__52959);
arglist__52959 = cljs.core.next(arglist__52959);
var x2 = cljs.core.first(arglist__52959);
var xs = cljs.core.rest(arglist__52959);
return G__52958__delegate(m,k,f,x1,x2,xs);
});
G__52958.cljs$core$IFn$_invoke$arity$variadic = G__52958__delegate;
return G__52958;
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
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_(m))
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__52968_52974 = cljs.core.seq(m);var chunk__52969_52975 = null;var count__52970_52976 = (0);var i__52971_52977 = (0);while(true){
if((i__52971_52977 < count__52970_52976))
{var vec__52972_52978 = chunk__52969_52975.cljs$core$IIndexed$_nth$arity$2(null,i__52971_52977);var k_52979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52972_52978,(0),null);var v_52980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52972_52978,(1),null);var m52967_52981 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m52967_52981,k_52979,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_52980) : f.call(null,v_52980)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m52967_52981,k_52979,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_52980) : f.call(null,v_52980)))));
{
var G__52982 = seq__52968_52974;
var G__52983 = chunk__52969_52975;
var G__52984 = count__52970_52976;
var G__52985 = (i__52971_52977 + (1));
seq__52968_52974 = G__52982;
chunk__52969_52975 = G__52983;
count__52970_52976 = G__52984;
i__52971_52977 = G__52985;
continue;
}
} else
{var temp__4126__auto___52986 = cljs.core.seq(seq__52968_52974);if(temp__4126__auto___52986)
{var seq__52968_52987__$1 = temp__4126__auto___52986;if(cljs.core.chunked_seq_QMARK_(seq__52968_52987__$1))
{var c__4314__auto___52988 = cljs.core.chunk_first(seq__52968_52987__$1);{
var G__52989 = cljs.core.chunk_rest(seq__52968_52987__$1);
var G__52990 = c__4314__auto___52988;
var G__52991 = cljs.core.count(c__4314__auto___52988);
var G__52992 = (0);
seq__52968_52974 = G__52989;
chunk__52969_52975 = G__52990;
count__52970_52976 = G__52991;
i__52971_52977 = G__52992;
continue;
}
} else
{var vec__52973_52993 = cljs.core.first(seq__52968_52987__$1);var k_52994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52973_52993,(0),null);var v_52995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52973_52993,(1),null);var m52967_52996 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m52967_52996,k_52994,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_52995) : f.call(null,v_52995)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m52967_52996,k_52994,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_52995) : f.call(null,v_52995)))));
{
var G__52997 = cljs.core.next(seq__52968_52987__$1);
var G__52998 = null;
var G__52999 = (0);
var G__53000 = (0);
seq__52968_52974 = G__52997;
chunk__52969_52975 = G__52998;
count__52970_52976 = G__52999;
i__52971_52977 = G__53000;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__)));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53009_53015 = cljs.core.seq(m);var chunk__53010_53016 = null;var count__53011_53017 = (0);var i__53012_53018 = (0);while(true){
if((i__53012_53018 < count__53011_53017))
{var vec__53013_53019 = chunk__53010_53016.cljs$core$IIndexed$_nth$arity$2(null,i__53012_53018);var k_53020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53013_53019,(0),null);var v_53021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53013_53019,(1),null);var m53008_53022 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53008_53022,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53020) : f.call(null,k_53020)),v_53021)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53008_53022,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53020) : f.call(null,k_53020)),v_53021)));
{
var G__53023 = seq__53009_53015;
var G__53024 = chunk__53010_53016;
var G__53025 = count__53011_53017;
var G__53026 = (i__53012_53018 + (1));
seq__53009_53015 = G__53023;
chunk__53010_53016 = G__53024;
count__53011_53017 = G__53025;
i__53012_53018 = G__53026;
continue;
}
} else
{var temp__4126__auto___53027 = cljs.core.seq(seq__53009_53015);if(temp__4126__auto___53027)
{var seq__53009_53028__$1 = temp__4126__auto___53027;if(cljs.core.chunked_seq_QMARK_(seq__53009_53028__$1))
{var c__4314__auto___53029 = cljs.core.chunk_first(seq__53009_53028__$1);{
var G__53030 = cljs.core.chunk_rest(seq__53009_53028__$1);
var G__53031 = c__4314__auto___53029;
var G__53032 = cljs.core.count(c__4314__auto___53029);
var G__53033 = (0);
seq__53009_53015 = G__53030;
chunk__53010_53016 = G__53031;
count__53011_53017 = G__53032;
i__53012_53018 = G__53033;
continue;
}
} else
{var vec__53014_53034 = cljs.core.first(seq__53009_53028__$1);var k_53035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53014_53034,(0),null);var v_53036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53014_53034,(1),null);var m53008_53037 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53008_53037,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53035) : f.call(null,k_53035)),v_53036)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53008_53037,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53035) : f.call(null,k_53035)),v_53036)));
{
var G__53038 = cljs.core.next(seq__53009_53028__$1);
var G__53039 = null;
var G__53040 = (0);
var G__53041 = (0);
seq__53009_53015 = G__53038;
chunk__53010_53016 = G__53039;
count__53011_53017 = G__53040;
i__53012_53018 = G__53041;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__)));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53048_53052 = cljs.core.seq(ks);var chunk__53049_53053 = null;var count__53050_53054 = (0);var i__53051_53055 = (0);while(true){
if((i__53051_53055 < count__53050_53054))
{var k_53056 = chunk__53049_53053.cljs$core$IIndexed$_nth$arity$2(null,i__53051_53055);var m53047_53057 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53047_53057,k_53056,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53056) : f.call(null,k_53056)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53047_53057,k_53056,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53056) : f.call(null,k_53056)))));
{
var G__53058 = seq__53048_53052;
var G__53059 = chunk__53049_53053;
var G__53060 = count__53050_53054;
var G__53061 = (i__53051_53055 + (1));
seq__53048_53052 = G__53058;
chunk__53049_53053 = G__53059;
count__53050_53054 = G__53060;
i__53051_53055 = G__53061;
continue;
}
} else
{var temp__4126__auto___53062 = cljs.core.seq(seq__53048_53052);if(temp__4126__auto___53062)
{var seq__53048_53063__$1 = temp__4126__auto___53062;if(cljs.core.chunked_seq_QMARK_(seq__53048_53063__$1))
{var c__4314__auto___53064 = cljs.core.chunk_first(seq__53048_53063__$1);{
var G__53065 = cljs.core.chunk_rest(seq__53048_53063__$1);
var G__53066 = c__4314__auto___53064;
var G__53067 = cljs.core.count(c__4314__auto___53064);
var G__53068 = (0);
seq__53048_53052 = G__53065;
chunk__53049_53053 = G__53066;
count__53050_53054 = G__53067;
i__53051_53055 = G__53068;
continue;
}
} else
{var k_53069 = cljs.core.first(seq__53048_53063__$1);var m53047_53070 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53047_53070,k_53069,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53069) : f.call(null,k_53069)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53047_53070,k_53069,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53069) : f.call(null,k_53069)))));
{
var G__53071 = cljs.core.next(seq__53048_53063__$1);
var G__53072 = null;
var G__53073 = (0);
var G__53074 = (0);
seq__53048_53052 = G__53071;
chunk__53049_53053 = G__53072;
count__53050_53054 = G__53073;
i__53051_53055 = G__53074;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__)));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53081_53085 = cljs.core.seq(vs);var chunk__53082_53086 = null;var count__53083_53087 = (0);var i__53084_53088 = (0);while(true){
if((i__53084_53088 < count__53083_53087))
{var v_53089 = chunk__53082_53086.cljs$core$IIndexed$_nth$arity$2(null,i__53084_53088);var m53080_53090 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53080_53090,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53089) : f.call(null,v_53089)),v_53089)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53080_53090,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53089) : f.call(null,v_53089)),v_53089)));
{
var G__53091 = seq__53081_53085;
var G__53092 = chunk__53082_53086;
var G__53093 = count__53083_53087;
var G__53094 = (i__53084_53088 + (1));
seq__53081_53085 = G__53091;
chunk__53082_53086 = G__53092;
count__53083_53087 = G__53093;
i__53084_53088 = G__53094;
continue;
}
} else
{var temp__4126__auto___53095 = cljs.core.seq(seq__53081_53085);if(temp__4126__auto___53095)
{var seq__53081_53096__$1 = temp__4126__auto___53095;if(cljs.core.chunked_seq_QMARK_(seq__53081_53096__$1))
{var c__4314__auto___53097 = cljs.core.chunk_first(seq__53081_53096__$1);{
var G__53098 = cljs.core.chunk_rest(seq__53081_53096__$1);
var G__53099 = c__4314__auto___53097;
var G__53100 = cljs.core.count(c__4314__auto___53097);
var G__53101 = (0);
seq__53081_53085 = G__53098;
chunk__53082_53086 = G__53099;
count__53083_53087 = G__53100;
i__53084_53088 = G__53101;
continue;
}
} else
{var v_53102 = cljs.core.first(seq__53081_53096__$1);var m53080_53103 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53080_53103,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53102) : f.call(null,v_53102)),v_53102)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53080_53103,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53102) : f.call(null,v_53102)),v_53102)));
{
var G__53104 = cljs.core.next(seq__53081_53096__$1);
var G__53105 = null;
var G__53106 = (0);
var G__53107 = (0);
seq__53081_53085 = G__53104;
chunk__53082_53086 = G__53105;
count__53083_53087 = G__53106;
i__53084_53088 = G__53107;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__)));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__53108){var vec__53110 = p__53108;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53110,(0),null);var ks = cljs.core.nthnext(vec__53110,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3546__auto__ = ks;if(and__3546__auto__)
{return dissoc_in((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)),ks);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else
{var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);if(cljs.core.empty_QMARK_(res))
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
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_(x))
{var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53119_53125 = cljs.core.seq(x);var chunk__53120_53126 = null;var count__53121_53127 = (0);var i__53122_53128 = (0);while(true){
if((i__53122_53128 < count__53121_53127))
{var vec__53123_53129 = chunk__53120_53126.cljs$core$IIndexed$_nth$arity$2(null,i__53122_53128);var k_53130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53123_53129,(0),null);var v_53131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53123_53129,(1),null);var m53118_53132 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53118_53132,((typeof k_53130 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53130):k_53130),keywordize_map(v_53131))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53118_53132,((typeof k_53130 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53130):k_53130),keywordize_map(v_53131))));
{
var G__53133 = seq__53119_53125;
var G__53134 = chunk__53120_53126;
var G__53135 = count__53121_53127;
var G__53136 = (i__53122_53128 + (1));
seq__53119_53125 = G__53133;
chunk__53120_53126 = G__53134;
count__53121_53127 = G__53135;
i__53122_53128 = G__53136;
continue;
}
} else
{var temp__4126__auto___53137 = cljs.core.seq(seq__53119_53125);if(temp__4126__auto___53137)
{var seq__53119_53138__$1 = temp__4126__auto___53137;if(cljs.core.chunked_seq_QMARK_(seq__53119_53138__$1))
{var c__4314__auto___53139 = cljs.core.chunk_first(seq__53119_53138__$1);{
var G__53140 = cljs.core.chunk_rest(seq__53119_53138__$1);
var G__53141 = c__4314__auto___53139;
var G__53142 = cljs.core.count(c__4314__auto___53139);
var G__53143 = (0);
seq__53119_53125 = G__53140;
chunk__53120_53126 = G__53141;
count__53121_53127 = G__53142;
i__53122_53128 = G__53143;
continue;
}
} else
{var vec__53124_53144 = cljs.core.first(seq__53119_53138__$1);var k_53145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53124_53144,(0),null);var v_53146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53124_53144,(1),null);var m53118_53147 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53118_53147,((typeof k_53145 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53145):k_53145),keywordize_map(v_53146))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53118_53147,((typeof k_53145 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53145):k_53145),keywordize_map(v_53146))));
{
var G__53148 = cljs.core.next(seq__53119_53138__$1);
var G__53149 = null;
var G__53150 = (0);
var G__53151 = (0);
seq__53119_53125 = G__53148;
chunk__53120_53126 = G__53149;
count__53121_53127 = G__53150;
i__53122_53128 = G__53151;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__)));
} else
{if(cljs.core.seq_QMARK_(x))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_(x))
{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find(m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__12509__auto__ = temp__4124__auto__;return cljs.core.val(pair__12509__auto__);
} else
{var e = schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq(ks))
{{
var G__53152 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__53153 = cljs.core.next(ks);
m = G__53152;
ks = G__53153;
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
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0))))));
}
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3558__auto__ = m;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4283__auto__ = (function iter__53162(s__53163){return (new cljs.core.LazySeq(null,(function (){var s__53163__$1 = s__53163;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53163__$1);if(temp__4126__auto__)
{var s__53163__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53163__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__53163__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__53165 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__53164 = (0);while(true){
if((i__53164 < size__4282__auto__))
{var vec__53168 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__53164);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53168,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53168,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__53165,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53170 = (i__53164 + (1));
i__53164 = G__53170;
continue;
}
} else
{{
var G__53171 = (i__53164 + (1));
i__53164 = G__53171;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53165),iter__53162(cljs.core.chunk_rest(s__53163__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53165),null);
}
} else
{var vec__53169 = cljs.core.first(s__53163__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53169,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53169,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53162(cljs.core.rest(s__53163__$2)));
} else
{{
var G__53172 = cljs.core.rest(s__53163__$2);
s__53163__$1 = G__53172;
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
});return iter__4283__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__53173){
var m = cljs.core.first(arglist__53173);
var kvs = cljs.core.rest(arglist__53173);
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
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__53174){
var m = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var key_seq = cljs.core.first(arglist__53174);
arglist__53174 = cljs.core.next(arglist__53174);
var f = cljs.core.first(arglist__53174);
var args = cljs.core.rest(arglist__53174);
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
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x));return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(x) : map_fn.call(null,x))));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next(s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat(n);
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
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq(s))
{return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){return unchunk(cljs.core.rest(s));
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
var sum__1 = (function (xs){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
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
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq(xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next(xs__$1))
{return null;
} else
{return cljs.core.first(xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed(cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))))
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY));var iter__4283__auto__ = ((function (s){
return (function iter__53179(s__53180){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__53180__$1 = s__53180;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53180__$1);if(temp__4126__auto__)
{var s__53180__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53180__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__53180__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__53182 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__53181 = (0);while(true){
if((i__53181 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__53181);var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id)))
{cljs.core.chunk_append(b__53182,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__53183 = (i__53181 + (1));
i__53181 = G__53183;
continue;
}
} else
{{
var G__53184 = (i__53181 + (1));
i__53181 = G__53184;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53182),iter__53179(cljs.core.chunk_rest(s__53180__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53182),null);
}
} else
{var x = cljs.core.first(s__53180__$2);var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__53179(cljs.core.rest(s__53180__$2)));
} else
{{
var G__53185 = cljs.core.rest(s__53180__$2);
s__53180__$1 = G__53185;
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
;return iter__4283__auto__(xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq(seqs))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__53186){
var colls = cljs.core.seq(arglist__53186);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__53187__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__53188 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__53189 = cljs.core.first(xs);
var G__53190 = cljs.core.next(xs);
coll = G__53188;
x = G__53189;
xs = G__53190;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__53187 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53187__delegate.call(this,coll,x,xs);};
G__53187.cljs$lang$maxFixedArity = 2;
G__53187.cljs$lang$applyTo = (function (arglist__53191){
var coll = cljs.core.first(arglist__53191);
arglist__53191 = cljs.core.next(arglist__53191);
var x = cljs.core.first(arglist__53191);
var xs = cljs.core.rest(arglist__53191);
return G__53187__delegate(coll,x,xs);
});
G__53187.cljs$core$IFn$_invoke$arity$variadic = G__53187__delegate;
return G__53187;
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
{return cljs.core.cons(x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));var new_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val));if(cljs.core.compare_and_set_BANG_(a,old_val,new_val))
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
var G__53193__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__53192_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__53192_SHARP_,args);
}));
};
var G__53193 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53193__delegate.call(this,a,f,args);};
G__53193.cljs$lang$maxFixedArity = 2;
G__53193.cljs$lang$applyTo = (function (arglist__53194){
var a = cljs.core.first(arglist__53194);
arglist__53194 = cljs.core.next(arglist__53194);
var f = cljs.core.first(arglist__53194);
var args = cljs.core.rest(arglist__53194);
return G__53193__delegate(a,f,args);
});
G__53193.cljs$core$IFn$_invoke$arity$variadic = G__53193__delegate;
return G__53193;
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
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
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
var mapply__2 = (function (f,m){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__53195__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__53195 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53195__delegate.call(this,f,arg,args);};
G__53195.cljs$lang$maxFixedArity = 2;
G__53195.cljs$lang$applyTo = (function (arglist__53196){
var f = cljs.core.first(arglist__53196);
arglist__53196 = cljs.core.next(arglist__53196);
var arg = cljs.core.first(arglist__53196);
var args = cljs.core.rest(arglist__53196);
return G__53195__delegate(f,arg,args);
});
G__53195.cljs$core$IFn$_invoke$arity$variadic = G__53195__delegate;
return G__53195;
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
