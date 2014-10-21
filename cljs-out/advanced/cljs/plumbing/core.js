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
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$1362;
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__69856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69856) : f.call(null,G__69856));
})());
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__69857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__69858 = x1;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__69857,G__69858) : f.call(null,G__69857,G__69858));
})());
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__69859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__69860 = x1;var G__69861 = x2;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__69859,G__69860,G__69861) : f.call(null,G__69859,G__69860,G__69861));
})());
});
var update__6 = (function() { 
var G__69862__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__69862 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__69862__delegate.call(this,m,k,f,x1,x2,xs);};
G__69862.cljs$lang$maxFixedArity = 5;
G__69862.cljs$lang$applyTo = (function (arglist__69863){
var m = cljs.core.first(arglist__69863);
arglist__69863 = cljs.core.next(arglist__69863);
var k = cljs.core.first(arglist__69863);
arglist__69863 = cljs.core.next(arglist__69863);
var f = cljs.core.first(arglist__69863);
arglist__69863 = cljs.core.next(arglist__69863);
var x1 = cljs.core.first(arglist__69863);
arglist__69863 = cljs.core.next(arglist__69863);
var x2 = cljs.core.first(arglist__69863);
var xs = cljs.core.rest(arglist__69863);
return G__69862__delegate(m,k,f,x1,x2,xs);
});
G__69862.cljs$core$IFn$_invoke$arity$variadic = G__69862__delegate;
return G__69862;
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
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__69883 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69883) : f.call(null,G__69883));
})());
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__69884 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69884) : f.call(null,G__69884));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__15342__auto__ = (function (){var G__69886 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__69886) : cljs.core.atom.call(null,G__69886));
})();var seq__69887_69902 = cljs.core.seq(m);var chunk__69888_69903 = null;var count__69889_69904 = (0);var i__69890_69905 = (0);while(true){
if((i__69890_69905 < count__69889_69904))
{var vec__69891_69906 = chunk__69888_69903.cljs$core$IIndexed$_nth$arity$2(null,i__69890_69905);var k_69907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69891_69906,(0),null);var v_69908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69891_69906,(1),null);var m69885_69909 = (function (){var G__69892 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69892) : cljs.core.deref.call(null,G__69892));
})();var G__69893_69910 = m_atom__15342__auto__;var G__69894_69911 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m69885_69909,k_69907,(function (){var G__69895 = v_69908;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69895) : f.call(null,G__69895));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__69893_69910,G__69894_69911) : cljs.core.reset_BANG_.call(null,G__69893_69910,G__69894_69911));
{
var G__69912 = seq__69887_69902;
var G__69913 = chunk__69888_69903;
var G__69914 = count__69889_69904;
var G__69915 = (i__69890_69905 + (1));
seq__69887_69902 = G__69912;
chunk__69888_69903 = G__69913;
count__69889_69904 = G__69914;
i__69890_69905 = G__69915;
continue;
}
} else
{var temp__4126__auto___69916 = cljs.core.seq(seq__69887_69902);if(temp__4126__auto___69916)
{var seq__69887_69917__$1 = temp__4126__auto___69916;if(cljs.core.chunked_seq_QMARK_(seq__69887_69917__$1))
{var c__4406__auto___69918 = cljs.core.chunk_first(seq__69887_69917__$1);{
var G__69919 = cljs.core.chunk_rest(seq__69887_69917__$1);
var G__69920 = c__4406__auto___69918;
var G__69921 = cljs.core.count(c__4406__auto___69918);
var G__69922 = (0);
seq__69887_69902 = G__69919;
chunk__69888_69903 = G__69920;
count__69889_69904 = G__69921;
i__69890_69905 = G__69922;
continue;
}
} else
{var vec__69896_69923 = cljs.core.first(seq__69887_69917__$1);var k_69924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69896_69923,(0),null);var v_69925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69896_69923,(1),null);var m69885_69926 = (function (){var G__69897 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69897) : cljs.core.deref.call(null,G__69897));
})();var G__69898_69927 = m_atom__15342__auto__;var G__69899_69928 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m69885_69926,k_69924,(function (){var G__69900 = v_69925;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69900) : f.call(null,G__69900));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__69898_69927,G__69899_69928) : cljs.core.reset_BANG_.call(null,G__69898_69927,G__69899_69928));
{
var G__69929 = cljs.core.next(seq__69887_69917__$1);
var G__69930 = null;
var G__69931 = (0);
var G__69932 = (0);
seq__69887_69902 = G__69929;
chunk__69888_69903 = G__69930;
count__69889_69904 = G__69931;
i__69890_69905 = G__69932;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__69901 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69901) : cljs.core.deref.call(null,G__69901));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__69951 = k;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69951) : f.call(null,G__69951));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__15342__auto__ = (function (){var G__69953 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__69953) : cljs.core.atom.call(null,G__69953));
})();var seq__69954_69969 = cljs.core.seq(m);var chunk__69955_69970 = null;var count__69956_69971 = (0);var i__69957_69972 = (0);while(true){
if((i__69957_69972 < count__69956_69971))
{var vec__69958_69973 = chunk__69955_69970.cljs$core$IIndexed$_nth$arity$2(null,i__69957_69972);var k_69974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69958_69973,(0),null);var v_69975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69958_69973,(1),null);var m69952_69976 = (function (){var G__69959 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69959) : cljs.core.deref.call(null,G__69959));
})();var G__69960_69977 = m_atom__15342__auto__;var G__69961_69978 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m69952_69976,(function (){var G__69962 = k_69974;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69962) : f.call(null,G__69962));
})(),v_69975);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__69960_69977,G__69961_69978) : cljs.core.reset_BANG_.call(null,G__69960_69977,G__69961_69978));
{
var G__69979 = seq__69954_69969;
var G__69980 = chunk__69955_69970;
var G__69981 = count__69956_69971;
var G__69982 = (i__69957_69972 + (1));
seq__69954_69969 = G__69979;
chunk__69955_69970 = G__69980;
count__69956_69971 = G__69981;
i__69957_69972 = G__69982;
continue;
}
} else
{var temp__4126__auto___69983 = cljs.core.seq(seq__69954_69969);if(temp__4126__auto___69983)
{var seq__69954_69984__$1 = temp__4126__auto___69983;if(cljs.core.chunked_seq_QMARK_(seq__69954_69984__$1))
{var c__4406__auto___69985 = cljs.core.chunk_first(seq__69954_69984__$1);{
var G__69986 = cljs.core.chunk_rest(seq__69954_69984__$1);
var G__69987 = c__4406__auto___69985;
var G__69988 = cljs.core.count(c__4406__auto___69985);
var G__69989 = (0);
seq__69954_69969 = G__69986;
chunk__69955_69970 = G__69987;
count__69956_69971 = G__69988;
i__69957_69972 = G__69989;
continue;
}
} else
{var vec__69963_69990 = cljs.core.first(seq__69954_69984__$1);var k_69991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69963_69990,(0),null);var v_69992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69963_69990,(1),null);var m69952_69993 = (function (){var G__69964 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69964) : cljs.core.deref.call(null,G__69964));
})();var G__69965_69994 = m_atom__15342__auto__;var G__69966_69995 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m69952_69993,(function (){var G__69967 = k_69991;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69967) : f.call(null,G__69967));
})(),v_69992);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__69965_69994,G__69966_69995) : cljs.core.reset_BANG_.call(null,G__69965_69994,G__69966_69995));
{
var G__69996 = cljs.core.next(seq__69954_69984__$1);
var G__69997 = null;
var G__69998 = (0);
var G__69999 = (0);
seq__69954_69969 = G__69996;
chunk__69955_69970 = G__69997;
count__69956_69971 = G__69998;
i__69957_69972 = G__69999;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__69968 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__69968) : cljs.core.deref.call(null,G__69968));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__15342__auto__ = (function (){var G__70016 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70016) : cljs.core.atom.call(null,G__70016));
})();var seq__70017_70030 = cljs.core.seq(ks);var chunk__70018_70031 = null;var count__70019_70032 = (0);var i__70020_70033 = (0);while(true){
if((i__70020_70033 < count__70019_70032))
{var k_70034 = chunk__70018_70031.cljs$core$IIndexed$_nth$arity$2(null,i__70020_70033);var m70015_70035 = (function (){var G__70021 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70021) : cljs.core.deref.call(null,G__70021));
})();var G__70022_70036 = m_atom__15342__auto__;var G__70023_70037 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70015_70035,k_70034,(function (){var G__70024 = k_70034;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70024) : f.call(null,G__70024));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70022_70036,G__70023_70037) : cljs.core.reset_BANG_.call(null,G__70022_70036,G__70023_70037));
{
var G__70038 = seq__70017_70030;
var G__70039 = chunk__70018_70031;
var G__70040 = count__70019_70032;
var G__70041 = (i__70020_70033 + (1));
seq__70017_70030 = G__70038;
chunk__70018_70031 = G__70039;
count__70019_70032 = G__70040;
i__70020_70033 = G__70041;
continue;
}
} else
{var temp__4126__auto___70042 = cljs.core.seq(seq__70017_70030);if(temp__4126__auto___70042)
{var seq__70017_70043__$1 = temp__4126__auto___70042;if(cljs.core.chunked_seq_QMARK_(seq__70017_70043__$1))
{var c__4406__auto___70044 = cljs.core.chunk_first(seq__70017_70043__$1);{
var G__70045 = cljs.core.chunk_rest(seq__70017_70043__$1);
var G__70046 = c__4406__auto___70044;
var G__70047 = cljs.core.count(c__4406__auto___70044);
var G__70048 = (0);
seq__70017_70030 = G__70045;
chunk__70018_70031 = G__70046;
count__70019_70032 = G__70047;
i__70020_70033 = G__70048;
continue;
}
} else
{var k_70049 = cljs.core.first(seq__70017_70043__$1);var m70015_70050 = (function (){var G__70025 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70025) : cljs.core.deref.call(null,G__70025));
})();var G__70026_70051 = m_atom__15342__auto__;var G__70027_70052 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70015_70050,k_70049,(function (){var G__70028 = k_70049;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70028) : f.call(null,G__70028));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70026_70051,G__70027_70052) : cljs.core.reset_BANG_.call(null,G__70026_70051,G__70027_70052));
{
var G__70053 = cljs.core.next(seq__70017_70043__$1);
var G__70054 = null;
var G__70055 = (0);
var G__70056 = (0);
seq__70017_70030 = G__70053;
chunk__70018_70031 = G__70054;
count__70019_70032 = G__70055;
i__70020_70033 = G__70056;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__70029 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70029) : cljs.core.deref.call(null,G__70029));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__15342__auto__ = (function (){var G__70073 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70073) : cljs.core.atom.call(null,G__70073));
})();var seq__70074_70087 = cljs.core.seq(vs);var chunk__70075_70088 = null;var count__70076_70089 = (0);var i__70077_70090 = (0);while(true){
if((i__70077_70090 < count__70076_70089))
{var v_70091 = chunk__70075_70088.cljs$core$IIndexed$_nth$arity$2(null,i__70077_70090);var m70072_70092 = (function (){var G__70078 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70078) : cljs.core.deref.call(null,G__70078));
})();var G__70079_70093 = m_atom__15342__auto__;var G__70080_70094 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70072_70092,(function (){var G__70081 = v_70091;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70081) : f.call(null,G__70081));
})(),v_70091);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70079_70093,G__70080_70094) : cljs.core.reset_BANG_.call(null,G__70079_70093,G__70080_70094));
{
var G__70095 = seq__70074_70087;
var G__70096 = chunk__70075_70088;
var G__70097 = count__70076_70089;
var G__70098 = (i__70077_70090 + (1));
seq__70074_70087 = G__70095;
chunk__70075_70088 = G__70096;
count__70076_70089 = G__70097;
i__70077_70090 = G__70098;
continue;
}
} else
{var temp__4126__auto___70099 = cljs.core.seq(seq__70074_70087);if(temp__4126__auto___70099)
{var seq__70074_70100__$1 = temp__4126__auto___70099;if(cljs.core.chunked_seq_QMARK_(seq__70074_70100__$1))
{var c__4406__auto___70101 = cljs.core.chunk_first(seq__70074_70100__$1);{
var G__70102 = cljs.core.chunk_rest(seq__70074_70100__$1);
var G__70103 = c__4406__auto___70101;
var G__70104 = cljs.core.count(c__4406__auto___70101);
var G__70105 = (0);
seq__70074_70087 = G__70102;
chunk__70075_70088 = G__70103;
count__70076_70089 = G__70104;
i__70077_70090 = G__70105;
continue;
}
} else
{var v_70106 = cljs.core.first(seq__70074_70100__$1);var m70072_70107 = (function (){var G__70082 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70082) : cljs.core.deref.call(null,G__70082));
})();var G__70083_70108 = m_atom__15342__auto__;var G__70084_70109 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70072_70107,(function (){var G__70085 = v_70106;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70085) : f.call(null,G__70085));
})(),v_70106);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70083_70108,G__70084_70109) : cljs.core.reset_BANG_.call(null,G__70083_70108,G__70084_70109));
{
var G__70110 = cljs.core.next(seq__70074_70100__$1);
var G__70111 = null;
var G__70112 = (0);
var G__70113 = (0);
seq__70074_70087 = G__70110;
chunk__70075_70088 = G__70111;
count__70076_70089 = G__70112;
i__70077_70090 = G__70113;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__70086 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70086) : cljs.core.deref.call(null,G__70086));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__70114){var vec__70122 = p__70114;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70122,(0),null);var ks = cljs.core.nthnext(vec__70122,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3625__auto__ = ks;if(and__3625__auto__)
{return dissoc_in((function (){var G__70124 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__70124) : m.call(null,G__70124));
})(),ks);
} else
{return and__3625__auto__;
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
{var m_atom__15342__auto__ = (function (){var G__70143 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70143) : cljs.core.atom.call(null,G__70143));
})();var seq__70144_70157 = cljs.core.seq(x);var chunk__70145_70158 = null;var count__70146_70159 = (0);var i__70147_70160 = (0);while(true){
if((i__70147_70160 < count__70146_70159))
{var vec__70148_70161 = chunk__70145_70158.cljs$core$IIndexed$_nth$arity$2(null,i__70147_70160);var k_70162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70148_70161,(0),null);var v_70163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70148_70161,(1),null);var m70142_70164 = (function (){var G__70149 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70149) : cljs.core.deref.call(null,G__70149));
})();var G__70150_70165 = m_atom__15342__auto__;var G__70151_70166 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70142_70164,((typeof k_70162 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_70162):k_70162),keywordize_map(v_70163));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70150_70165,G__70151_70166) : cljs.core.reset_BANG_.call(null,G__70150_70165,G__70151_70166));
{
var G__70167 = seq__70144_70157;
var G__70168 = chunk__70145_70158;
var G__70169 = count__70146_70159;
var G__70170 = (i__70147_70160 + (1));
seq__70144_70157 = G__70167;
chunk__70145_70158 = G__70168;
count__70146_70159 = G__70169;
i__70147_70160 = G__70170;
continue;
}
} else
{var temp__4126__auto___70171 = cljs.core.seq(seq__70144_70157);if(temp__4126__auto___70171)
{var seq__70144_70172__$1 = temp__4126__auto___70171;if(cljs.core.chunked_seq_QMARK_(seq__70144_70172__$1))
{var c__4406__auto___70173 = cljs.core.chunk_first(seq__70144_70172__$1);{
var G__70174 = cljs.core.chunk_rest(seq__70144_70172__$1);
var G__70175 = c__4406__auto___70173;
var G__70176 = cljs.core.count(c__4406__auto___70173);
var G__70177 = (0);
seq__70144_70157 = G__70174;
chunk__70145_70158 = G__70175;
count__70146_70159 = G__70176;
i__70147_70160 = G__70177;
continue;
}
} else
{var vec__70152_70178 = cljs.core.first(seq__70144_70172__$1);var k_70179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70152_70178,(0),null);var v_70180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70152_70178,(1),null);var m70142_70181 = (function (){var G__70153 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70153) : cljs.core.deref.call(null,G__70153));
})();var G__70154_70182 = m_atom__15342__auto__;var G__70155_70183 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70142_70181,((typeof k_70179 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_70179):k_70179),keywordize_map(v_70180));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70154_70182,G__70155_70183) : cljs.core.reset_BANG_.call(null,G__70154_70182,G__70155_70183));
{
var G__70184 = cljs.core.next(seq__70144_70172__$1);
var G__70185 = null;
var G__70186 = (0);
var G__70187 = (0);
seq__70144_70157 = G__70184;
chunk__70145_70158 = G__70185;
count__70146_70159 = G__70186;
i__70147_70160 = G__70187;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__70156 = m_atom__15342__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70156) : cljs.core.deref.call(null,G__70156));
})());
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
{var pair__15411__auto__ = temp__4124__auto__;return cljs.core.val(pair__15411__auto__);
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
var G__70188 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__70189 = cljs.core.next(ks);
m = G__70188;
ks = G__70189;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3637__auto__ = m;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4375__auto__ = (function iter__70200(s__70201){return (new cljs.core.LazySeq(null,(function (){var s__70201__$1 = s__70201;while(true){
var temp__4126__auto__ = cljs.core.seq(s__70201__$1);if(temp__4126__auto__)
{var s__70201__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__70201__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__70201__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__70203 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__70202 = (0);while(true){
if((i__70202 < size__4374__auto__))
{var vec__70208 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__70202);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70208,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70208,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__70203,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__70210 = (i__70202 + (1));
i__70202 = G__70210;
continue;
}
} else
{{
var G__70211 = (i__70202 + (1));
i__70202 = G__70211;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__70203),iter__70200(cljs.core.chunk_rest(s__70201__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__70203),null);
}
} else
{var vec__70209 = cljs.core.first(s__70201__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70209,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70209,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__70200(cljs.core.rest(s__70201__$2)));
} else
{{
var G__70212 = cljs.core.rest(s__70201__$2);
s__70201__$1 = G__70212;
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
});return iter__4375__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__70213){
var m = cljs.core.first(arglist__70213);
var kvs = cljs.core.rest(arglist__70213);
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
update_in_when.cljs$lang$applyTo = (function (arglist__70214){
var m = cljs.core.first(arglist__70214);
arglist__70214 = cljs.core.next(arglist__70214);
var key_seq = cljs.core.first(arglist__70214);
arglist__70214 = cljs.core.next(arglist__70214);
var f = cljs.core.first(arglist__70214);
var args = cljs.core.rest(arglist__70214);
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
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__70217 = x;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__70217) : key_fn.call(null,G__70217));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__70218 = x;return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__70218) : map_fn.call(null,G__70218));
})()));
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
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((function (){var G__70222 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70222) : f.call(null,G__70222));
})()))
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (function (){var G__70238 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70238) : cljs.core.atom.call(null,G__70238));
})();var iter__4375__auto__ = ((function (s){
return (function iter__70239(s__70240){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__70240__$1 = s__70240;while(true){
var temp__4126__auto__ = cljs.core.seq(s__70240__$1);if(temp__4126__auto__)
{var s__70240__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__70240__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__70240__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__70242 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__70241 = (0);while(true){
if((i__70241 < size__4374__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__70241);var id = (function (){var G__70249 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70249) : f.call(null,G__70249));
})();if(!(cljs.core.contains_QMARK_((function (){var G__70250 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70250) : cljs.core.deref.call(null,G__70250));
})(),id)))
{cljs.core.chunk_append(b__70242,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__70253 = (i__70241 + (1));
i__70241 = G__70253;
continue;
}
} else
{{
var G__70254 = (i__70241 + (1));
i__70241 = G__70254;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__70242),iter__70239(cljs.core.chunk_rest(s__70240__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__70242),null);
}
} else
{var x = cljs.core.first(s__70240__$2);var id = (function (){var G__70251 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70251) : f.call(null,G__70251));
})();if(!(cljs.core.contains_QMARK_((function (){var G__70252 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70252) : cljs.core.deref.call(null,G__70252));
})(),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__70239(cljs.core.rest(s__70240__$2)));
} else
{{
var G__70255 = cljs.core.rest(s__70240__$2);
s__70240__$1 = G__70255;
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
;return iter__4375__auto__(xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__70258){
var colls = cljs.core.seq(arglist__70258);
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
var G__70263__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__70264 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__70265 = cljs.core.first(xs);
var G__70266 = cljs.core.next(xs);
coll = G__70264;
x = G__70265;
xs = G__70266;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__70263 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__70263__delegate.call(this,coll,x,xs);};
G__70263.cljs$lang$maxFixedArity = 2;
G__70263.cljs$lang$applyTo = (function (arglist__70267){
var coll = cljs.core.first(arglist__70267);
arglist__70267 = cljs.core.next(arglist__70267);
var x = cljs.core.first(arglist__70267);
var xs = cljs.core.rest(arglist__70267);
return G__70263__delegate(coll,x,xs);
});
G__70263.cljs$core$IFn$_invoke$arity$variadic = G__70263__delegate;
return G__70263;
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
var old_val = (function (){var G__70273 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70273) : cljs.core.deref.call(null,G__70273));
})();var new_val = (function (){var G__70274 = old_val;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70274) : f.call(null,G__70274));
})();if(cljs.core.compare_and_set_BANG_(a,old_val,new_val))
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
var G__70275__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__70268_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__70268_SHARP_,args);
}));
};
var G__70275 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__70275__delegate.call(this,a,f,args);};
G__70275.cljs$lang$maxFixedArity = 2;
G__70275.cljs$lang$applyTo = (function (arglist__70276){
var a = cljs.core.first(arglist__70276);
arglist__70276 = cljs.core.next(arglist__70276);
var f = cljs.core.first(arglist__70276);
var args = cljs.core.rest(arglist__70276);
return G__70275__delegate(a,f,args);
});
G__70275.cljs$core$IFn$_invoke$arity$variadic = G__70275__delegate;
return G__70275;
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
var G__70277__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__70277 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__70277__delegate.call(this,f,arg,args);};
G__70277.cljs$lang$maxFixedArity = 2;
G__70277.cljs$lang$applyTo = (function (arglist__70278){
var f = cljs.core.first(arglist__70278);
arglist__70278 = cljs.core.next(arglist__70278);
var arg = cljs.core.first(arglist__70278);
var args = cljs.core.rest(arglist__70278);
return G__70277__delegate(f,arg,args);
});
G__70277.cljs$core$IFn$_invoke$arity$variadic = G__70277__delegate;
return G__70277;
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
