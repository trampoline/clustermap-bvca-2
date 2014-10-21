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
var G__64863__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__64863 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__64863__delegate.call(this,m,k,f,x1,x2,xs);};
G__64863.cljs$lang$maxFixedArity = 5;
G__64863.cljs$lang$applyTo = (function (arglist__64864){
var m = cljs.core.first(arglist__64864);
arglist__64864 = cljs.core.next(arglist__64864);
var k = cljs.core.first(arglist__64864);
arglist__64864 = cljs.core.next(arglist__64864);
var f = cljs.core.first(arglist__64864);
arglist__64864 = cljs.core.next(arglist__64864);
var x1 = cljs.core.first(arglist__64864);
arglist__64864 = cljs.core.next(arglist__64864);
var x2 = cljs.core.first(arglist__64864);
var xs = cljs.core.rest(arglist__64864);
return G__64863__delegate(m,k,f,x1,x2,xs);
});
G__64863.cljs$core$IFn$_invoke$arity$variadic = G__64863__delegate;
return G__64863;
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
{var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__64873_64879 = cljs.core.seq.call(null,m);var chunk__64874_64880 = null;var count__64875_64881 = (0);var i__64876_64882 = (0);while(true){
if((i__64876_64882 < count__64875_64881))
{var vec__64877_64883 = cljs.core._nth.call(null,chunk__64874_64880,i__64876_64882);var k_64884 = cljs.core.nth.call(null,vec__64877_64883,(0),null);var v_64885 = cljs.core.nth.call(null,vec__64877_64883,(1),null);var m64872_64886 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m64872_64886,k_64884,f.call(null,v_64885)));
{
var G__64887 = seq__64873_64879;
var G__64888 = chunk__64874_64880;
var G__64889 = count__64875_64881;
var G__64890 = (i__64876_64882 + (1));
seq__64873_64879 = G__64887;
chunk__64874_64880 = G__64888;
count__64875_64881 = G__64889;
i__64876_64882 = G__64890;
continue;
}
} else
{var temp__4126__auto___64891 = cljs.core.seq.call(null,seq__64873_64879);if(temp__4126__auto___64891)
{var seq__64873_64892__$1 = temp__4126__auto___64891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64873_64892__$1))
{var c__4314__auto___64893 = cljs.core.chunk_first.call(null,seq__64873_64892__$1);{
var G__64894 = cljs.core.chunk_rest.call(null,seq__64873_64892__$1);
var G__64895 = c__4314__auto___64893;
var G__64896 = cljs.core.count.call(null,c__4314__auto___64893);
var G__64897 = (0);
seq__64873_64879 = G__64894;
chunk__64874_64880 = G__64895;
count__64875_64881 = G__64896;
i__64876_64882 = G__64897;
continue;
}
} else
{var vec__64878_64898 = cljs.core.first.call(null,seq__64873_64892__$1);var k_64899 = cljs.core.nth.call(null,vec__64878_64898,(0),null);var v_64900 = cljs.core.nth.call(null,vec__64878_64898,(1),null);var m64872_64901 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m64872_64901,k_64899,f.call(null,v_64900)));
{
var G__64902 = cljs.core.next.call(null,seq__64873_64892__$1);
var G__64903 = null;
var G__64904 = (0);
var G__64905 = (0);
seq__64873_64879 = G__64902;
chunk__64874_64880 = G__64903;
count__64875_64881 = G__64904;
i__64876_64882 = G__64905;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14644__auto__));

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
{var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__64914_64920 = cljs.core.seq.call(null,m);var chunk__64915_64921 = null;var count__64916_64922 = (0);var i__64917_64923 = (0);while(true){
if((i__64917_64923 < count__64916_64922))
{var vec__64918_64924 = cljs.core._nth.call(null,chunk__64915_64921,i__64917_64923);var k_64925 = cljs.core.nth.call(null,vec__64918_64924,(0),null);var v_64926 = cljs.core.nth.call(null,vec__64918_64924,(1),null);var m64913_64927 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m64913_64927,f.call(null,k_64925),v_64926));
{
var G__64928 = seq__64914_64920;
var G__64929 = chunk__64915_64921;
var G__64930 = count__64916_64922;
var G__64931 = (i__64917_64923 + (1));
seq__64914_64920 = G__64928;
chunk__64915_64921 = G__64929;
count__64916_64922 = G__64930;
i__64917_64923 = G__64931;
continue;
}
} else
{var temp__4126__auto___64932 = cljs.core.seq.call(null,seq__64914_64920);if(temp__4126__auto___64932)
{var seq__64914_64933__$1 = temp__4126__auto___64932;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64914_64933__$1))
{var c__4314__auto___64934 = cljs.core.chunk_first.call(null,seq__64914_64933__$1);{
var G__64935 = cljs.core.chunk_rest.call(null,seq__64914_64933__$1);
var G__64936 = c__4314__auto___64934;
var G__64937 = cljs.core.count.call(null,c__4314__auto___64934);
var G__64938 = (0);
seq__64914_64920 = G__64935;
chunk__64915_64921 = G__64936;
count__64916_64922 = G__64937;
i__64917_64923 = G__64938;
continue;
}
} else
{var vec__64919_64939 = cljs.core.first.call(null,seq__64914_64933__$1);var k_64940 = cljs.core.nth.call(null,vec__64919_64939,(0),null);var v_64941 = cljs.core.nth.call(null,vec__64919_64939,(1),null);var m64913_64942 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m64913_64942,f.call(null,k_64940),v_64941));
{
var G__64943 = cljs.core.next.call(null,seq__64914_64933__$1);
var G__64944 = null;
var G__64945 = (0);
var G__64946 = (0);
seq__64914_64920 = G__64943;
chunk__64915_64921 = G__64944;
count__64916_64922 = G__64945;
i__64917_64923 = G__64946;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14644__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__64953_64957 = cljs.core.seq.call(null,ks);var chunk__64954_64958 = null;var count__64955_64959 = (0);var i__64956_64960 = (0);while(true){
if((i__64956_64960 < count__64955_64959))
{var k_64961 = cljs.core._nth.call(null,chunk__64954_64958,i__64956_64960);var m64952_64962 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m64952_64962,k_64961,f.call(null,k_64961)));
{
var G__64963 = seq__64953_64957;
var G__64964 = chunk__64954_64958;
var G__64965 = count__64955_64959;
var G__64966 = (i__64956_64960 + (1));
seq__64953_64957 = G__64963;
chunk__64954_64958 = G__64964;
count__64955_64959 = G__64965;
i__64956_64960 = G__64966;
continue;
}
} else
{var temp__4126__auto___64967 = cljs.core.seq.call(null,seq__64953_64957);if(temp__4126__auto___64967)
{var seq__64953_64968__$1 = temp__4126__auto___64967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64953_64968__$1))
{var c__4314__auto___64969 = cljs.core.chunk_first.call(null,seq__64953_64968__$1);{
var G__64970 = cljs.core.chunk_rest.call(null,seq__64953_64968__$1);
var G__64971 = c__4314__auto___64969;
var G__64972 = cljs.core.count.call(null,c__4314__auto___64969);
var G__64973 = (0);
seq__64953_64957 = G__64970;
chunk__64954_64958 = G__64971;
count__64955_64959 = G__64972;
i__64956_64960 = G__64973;
continue;
}
} else
{var k_64974 = cljs.core.first.call(null,seq__64953_64968__$1);var m64952_64975 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m64952_64975,k_64974,f.call(null,k_64974)));
{
var G__64976 = cljs.core.next.call(null,seq__64953_64968__$1);
var G__64977 = null;
var G__64978 = (0);
var G__64979 = (0);
seq__64953_64957 = G__64976;
chunk__64954_64958 = G__64977;
count__64955_64959 = G__64978;
i__64956_64960 = G__64979;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14644__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__64986_64990 = cljs.core.seq.call(null,vs);var chunk__64987_64991 = null;var count__64988_64992 = (0);var i__64989_64993 = (0);while(true){
if((i__64989_64993 < count__64988_64992))
{var v_64994 = cljs.core._nth.call(null,chunk__64987_64991,i__64989_64993);var m64985_64995 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m64985_64995,f.call(null,v_64994),v_64994));
{
var G__64996 = seq__64986_64990;
var G__64997 = chunk__64987_64991;
var G__64998 = count__64988_64992;
var G__64999 = (i__64989_64993 + (1));
seq__64986_64990 = G__64996;
chunk__64987_64991 = G__64997;
count__64988_64992 = G__64998;
i__64989_64993 = G__64999;
continue;
}
} else
{var temp__4126__auto___65000 = cljs.core.seq.call(null,seq__64986_64990);if(temp__4126__auto___65000)
{var seq__64986_65001__$1 = temp__4126__auto___65000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64986_65001__$1))
{var c__4314__auto___65002 = cljs.core.chunk_first.call(null,seq__64986_65001__$1);{
var G__65003 = cljs.core.chunk_rest.call(null,seq__64986_65001__$1);
var G__65004 = c__4314__auto___65002;
var G__65005 = cljs.core.count.call(null,c__4314__auto___65002);
var G__65006 = (0);
seq__64986_64990 = G__65003;
chunk__64987_64991 = G__65004;
count__64988_64992 = G__65005;
i__64989_64993 = G__65006;
continue;
}
} else
{var v_65007 = cljs.core.first.call(null,seq__64986_65001__$1);var m64985_65008 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m64985_65008,f.call(null,v_65007),v_65007));
{
var G__65009 = cljs.core.next.call(null,seq__64986_65001__$1);
var G__65010 = null;
var G__65011 = (0);
var G__65012 = (0);
seq__64986_64990 = G__65009;
chunk__64987_64991 = G__65010;
count__64988_64992 = G__65011;
i__64989_64993 = G__65012;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14644__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__65013){var vec__65015 = p__65013;var k = cljs.core.nth.call(null,vec__65015,(0),null);var ks = cljs.core.nthnext.call(null,vec__65015,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3546__auto__ = ks;if(and__3546__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3546__auto__;
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
{var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__65024_65030 = cljs.core.seq.call(null,x);var chunk__65025_65031 = null;var count__65026_65032 = (0);var i__65027_65033 = (0);while(true){
if((i__65027_65033 < count__65026_65032))
{var vec__65028_65034 = cljs.core._nth.call(null,chunk__65025_65031,i__65027_65033);var k_65035 = cljs.core.nth.call(null,vec__65028_65034,(0),null);var v_65036 = cljs.core.nth.call(null,vec__65028_65034,(1),null);var m65023_65037 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m65023_65037,((typeof k_65035 === 'string')?cljs.core.keyword.call(null,k_65035):k_65035),keywordize_map.call(null,v_65036)));
{
var G__65038 = seq__65024_65030;
var G__65039 = chunk__65025_65031;
var G__65040 = count__65026_65032;
var G__65041 = (i__65027_65033 + (1));
seq__65024_65030 = G__65038;
chunk__65025_65031 = G__65039;
count__65026_65032 = G__65040;
i__65027_65033 = G__65041;
continue;
}
} else
{var temp__4126__auto___65042 = cljs.core.seq.call(null,seq__65024_65030);if(temp__4126__auto___65042)
{var seq__65024_65043__$1 = temp__4126__auto___65042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65024_65043__$1))
{var c__4314__auto___65044 = cljs.core.chunk_first.call(null,seq__65024_65043__$1);{
var G__65045 = cljs.core.chunk_rest.call(null,seq__65024_65043__$1);
var G__65046 = c__4314__auto___65044;
var G__65047 = cljs.core.count.call(null,c__4314__auto___65044);
var G__65048 = (0);
seq__65024_65030 = G__65045;
chunk__65025_65031 = G__65046;
count__65026_65032 = G__65047;
i__65027_65033 = G__65048;
continue;
}
} else
{var vec__65029_65049 = cljs.core.first.call(null,seq__65024_65043__$1);var k_65050 = cljs.core.nth.call(null,vec__65029_65049,(0),null);var v_65051 = cljs.core.nth.call(null,vec__65029_65049,(1),null);var m65023_65052 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m65023_65052,((typeof k_65050 === 'string')?cljs.core.keyword.call(null,k_65050):k_65050),keywordize_map.call(null,v_65051)));
{
var G__65053 = cljs.core.next.call(null,seq__65024_65043__$1);
var G__65054 = null;
var G__65055 = (0);
var G__65056 = (0);
seq__65024_65030 = G__65053;
chunk__65025_65031 = G__65054;
count__65026_65032 = G__65055;
i__65027_65033 = G__65056;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14644__auto__));
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
{var pair__14713__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__14713__auto__);
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
var G__65057 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__65058 = cljs.core.next.call(null,ks);
m = G__65057;
ks = G__65058;
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
return cljs.core.into.call(null,(function (){var or__3558__auto__ = m;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4283__auto__ = (function iter__65067(s__65068){return (new cljs.core.LazySeq(null,(function (){var s__65068__$1 = s__65068;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__65068__$1);if(temp__4126__auto__)
{var s__65068__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__65068__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__65068__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__65070 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__65069 = (0);while(true){
if((i__65069 < size__4282__auto__))
{var vec__65073 = cljs.core._nth.call(null,c__4281__auto__,i__65069);var k = cljs.core.nth.call(null,vec__65073,(0),null);var v = cljs.core.nth.call(null,vec__65073,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__65070,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__65075 = (i__65069 + (1));
i__65069 = G__65075;
continue;
}
} else
{{
var G__65076 = (i__65069 + (1));
i__65069 = G__65076;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65070),iter__65067.call(null,cljs.core.chunk_rest.call(null,s__65068__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65070),null);
}
} else
{var vec__65074 = cljs.core.first.call(null,s__65068__$2);var k = cljs.core.nth.call(null,vec__65074,(0),null);var v = cljs.core.nth.call(null,vec__65074,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__65067.call(null,cljs.core.rest.call(null,s__65068__$2)));
} else
{{
var G__65077 = cljs.core.rest.call(null,s__65068__$2);
s__65068__$1 = G__65077;
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
});return iter__4283__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__65078){
var m = cljs.core.first(arglist__65078);
var kvs = cljs.core.rest(arglist__65078);
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
update_in_when.cljs$lang$applyTo = (function (arglist__65079){
var m = cljs.core.first(arglist__65079);
arglist__65079 = cljs.core.next(arglist__65079);
var key_seq = cljs.core.first(arglist__65079);
arglist__65079 = cljs.core.next(arglist__65079);
var f = cljs.core.first(arglist__65079);
var args = cljs.core.rest(arglist__65079);
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4283__auto__ = ((function (s){
return (function iter__65084(s__65085){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__65085__$1 = s__65085;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__65085__$1);if(temp__4126__auto__)
{var s__65085__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__65085__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__65085__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__65087 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__65086 = (0);while(true){
if((i__65086 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__65086);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__65087,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__65088 = (i__65086 + (1));
i__65086 = G__65088;
continue;
}
} else
{{
var G__65089 = (i__65086 + (1));
i__65086 = G__65089;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65087),iter__65084.call(null,cljs.core.chunk_rest.call(null,s__65085__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__65087),null);
}
} else
{var x = cljs.core.first.call(null,s__65085__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__65084.call(null,cljs.core.rest.call(null,s__65085__$2)));
} else
{{
var G__65090 = cljs.core.rest.call(null,s__65085__$2);
s__65085__$1 = G__65090;
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
;return iter__4283__auto__.call(null,xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__65091){
var colls = cljs.core.seq(arglist__65091);
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
var G__65092__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__65093 = conj_when.call(null,coll,x);
var G__65094 = cljs.core.first.call(null,xs);
var G__65095 = cljs.core.next.call(null,xs);
coll = G__65093;
x = G__65094;
xs = G__65095;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__65092 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__65092__delegate.call(this,coll,x,xs);};
G__65092.cljs$lang$maxFixedArity = 2;
G__65092.cljs$lang$applyTo = (function (arglist__65096){
var coll = cljs.core.first(arglist__65096);
arglist__65096 = cljs.core.next(arglist__65096);
var x = cljs.core.first(arglist__65096);
var xs = cljs.core.rest(arglist__65096);
return G__65092__delegate(coll,x,xs);
});
G__65092.cljs$core$IFn$_invoke$arity$variadic = G__65092__delegate;
return G__65092;
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
var G__65098__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__65097_SHARP_){return cljs.core.apply.call(null,f,p1__65097_SHARP_,args);
}));
};
var G__65098 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__65098__delegate.call(this,a,f,args);};
G__65098.cljs$lang$maxFixedArity = 2;
G__65098.cljs$lang$applyTo = (function (arglist__65099){
var a = cljs.core.first(arglist__65099);
arglist__65099 = cljs.core.next(arglist__65099);
var f = cljs.core.first(arglist__65099);
var args = cljs.core.rest(arglist__65099);
return G__65098__delegate(a,f,args);
});
G__65098.cljs$core$IFn$_invoke$arity$variadic = G__65098__delegate;
return G__65098;
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
var G__65100__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__65100 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__65100__delegate.call(this,f,arg,args);};
G__65100.cljs$lang$maxFixedArity = 2;
G__65100.cljs$lang$applyTo = (function (arglist__65101){
var f = cljs.core.first(arglist__65101);
arglist__65101 = cljs.core.next(arglist__65101);
var arg = cljs.core.first(arglist__65101);
var args = cljs.core.rest(arglist__65101);
return G__65100__delegate(f,arg,args);
});
G__65100.cljs$core$IFn$_invoke$arity$variadic = G__65100__delegate;
return G__65100;
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