// Compiled by ClojureScript 0.0-2080
goog.provide('purnam.cljs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('purnam.common');
goog.require('purnam.common');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
purnam.cljs.nested_val = (function nested_val(p__34279,val){var vec__34283 = p__34279;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34283,0,null);var ks = cljs.core.nthnext(vec__34283,1);if((k == null))
{return val;
} else
{var o = (function (){var obj34285 = {};return obj34285;
})();(o[k] = nested_val(ks,val));
return o;
}
});
purnam.cljs.nested_delete = (function nested_delete(p__34286,val){var vec__34288 = p__34286;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34288,0,null);var ks = cljs.core.nthnext(vec__34288,1);if((ks == null))
{delete val[k];
} else
{nested_delete(ks,val);
}
return val;
});
purnam.cljs.aset_in = (function() {
var aset_in = null;
var aset_in__2 = (function (var$,arr){return aset_in.cljs$core$IFn$_invoke$arity$3(var$,arr,null);
});
var aset_in__3 = (function (var$,arr,val){var vec__34290 = arr;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34290,0,null);var ks = cljs.core.nthnext(vec__34290,1);if((k == null))
{} else
{if(cljs.core.empty_QMARK_(ks))
{if(cljs.core.truth_(val))
{(var$[k] = val);
} else
{delete var$[k];
}
} else
{if(cljs.core.constant$keyword$66)
{var temp__4090__auto___34291 = (var$[k]);if(cljs.core.truth_(temp__4090__auto___34291))
{var svar_34292 = temp__4090__auto___34291;aset_in.cljs$core$IFn$_invoke$arity$3(svar_34292,ks,val);
} else
{if(cljs.core.truth_(val))
{(var$[k] = purnam.cljs.nested_val(ks,val));
} else
{}
}
} else
{}
}
}
return var$;
});
aset_in = function(var$,arr,val){
switch(arguments.length){
case 2:
return aset_in__2.call(this,var$,arr);
case 3:
return aset_in__3.call(this,var$,arr,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset_in.cljs$core$IFn$_invoke$arity$2 = aset_in__2;
aset_in.cljs$core$IFn$_invoke$arity$3 = aset_in__3;
return aset_in;
})()
;
purnam.cljs.aget_in = (function() {
var aget_in = null;
var aget_in__1 = (function (var$){return var$;
});
var aget_in__2 = (function (var$,arr){if((var$ == null))
{return null;
} else
{if(cljs.core.empty_QMARK_(arr))
{return var$;
} else
{if(cljs.core.constant$keyword$66)
{return aget_in.cljs$core$IFn$_invoke$arity$2((var$[cljs.core.first(arr)]),cljs.core.next(arr));
} else
{return null;
}
}
}
});
aget_in = function(var$,arr){
switch(arguments.length){
case 1:
return aget_in__1.call(this,var$);
case 2:
return aget_in__2.call(this,var$,arr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget_in.cljs$core$IFn$_invoke$arity$1 = aget_in__1;
aget_in.cljs$core$IFn$_invoke$arity$2 = aget_in__2;
return aget_in;
})()
;
purnam.cljs.js_strkey = (function js_strkey(x){if(typeof x === 'string')
{return x;
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name(x);
} else
{if(cljs.core.constant$keyword$66)
{return [cljs.core.str(x)].join('');
} else
{return null;
}
}
}
});
purnam.cljs.js_obj_name = (function js_obj_name(this$){var temp__4090__auto__ = cljs.core.re_find(/^function (\w+)/,[cljs.core.str(this$)].join(''));if(cljs.core.truth_(temp__4090__auto__))
{var vec__34294 = temp__4090__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34294,0,null);var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34294,1,null);return n;
} else
{return "Object";
}
});
purnam.cljs.js_lookup = (function() {
var js_lookup = null;
var js_lookup__2 = (function (o,k){return (o[purnam.cljs.js_strkey(k)]);
});
var js_lookup__3 = (function (o,k,not_found){var s = purnam.cljs.js_strkey(k);var temp__4090__auto__ = (o[s]);if(cljs.core.truth_(temp__4090__auto__))
{var res = temp__4090__auto__;return res;
} else
{return not_found;
}
});
js_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return js_lookup__2.call(this,o,k);
case 3:
return js_lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_lookup.cljs$core$IFn$_invoke$arity$2 = js_lookup__2;
js_lookup.cljs$core$IFn$_invoke$arity$3 = js_lookup__3;
return js_lookup;
})()
;
/**
* @param {...*} var_args
*/
purnam.cljs.js_assoc = (function() {
var js_assoc = null;
var js_assoc__3 = (function (o,k,v){(o[purnam.cljs.js_strkey(k)] = v);
return o;
});
var js_assoc__4 = (function() { 
var G__34295__delegate = function (o,k,v,more){while(true){
js_assoc.cljs$core$IFn$_invoke$arity$3(o,k,v);
if(cljs.core.truth_(more))
{{
var G__34296 = o;
var G__34297 = cljs.core.first(more);
var G__34298 = cljs.core.second(more);
var G__34299 = cljs.core.nnext(more);
o = G__34296;
k = G__34297;
v = G__34298;
more = G__34299;
continue;
}
} else
{return o;
}
break;
}
};
var G__34295 = function (o,k,v,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__34295__delegate.call(this,o,k,v,more);};
G__34295.cljs$lang$maxFixedArity = 3;
G__34295.cljs$lang$applyTo = (function (arglist__34300){
var o = cljs.core.first(arglist__34300);
arglist__34300 = cljs.core.next(arglist__34300);
var k = cljs.core.first(arglist__34300);
arglist__34300 = cljs.core.next(arglist__34300);
var v = cljs.core.first(arglist__34300);
var more = cljs.core.rest(arglist__34300);
return G__34295__delegate(o,k,v,more);
});
G__34295.cljs$core$IFn$_invoke$arity$variadic = G__34295__delegate;
return G__34295;
})()
;
js_assoc = function(o,k,v,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return js_assoc__3.call(this,o,k,v);
default:
return js_assoc__4.cljs$core$IFn$_invoke$arity$variadic(o,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_assoc.cljs$lang$maxFixedArity = 3;
js_assoc.cljs$lang$applyTo = js_assoc__4.cljs$lang$applyTo;
js_assoc.cljs$core$IFn$_invoke$arity$3 = js_assoc__3;
js_assoc.cljs$core$IFn$_invoke$arity$variadic = js_assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return js_assoc;
})()
;
/**
* @param {...*} var_args
*/
purnam.cljs.js_dissoc = (function() { 
var js_dissoc__delegate = function (o,k,more){while(true){
delete o[purnam.cljs.js_strkey(k)];
if(cljs.core.truth_(more))
{{
var G__34301 = o;
var G__34302 = cljs.core.first(more);
var G__34303 = cljs.core.next(more);
o = G__34301;
k = G__34302;
more = G__34303;
continue;
}
} else
{return o;
}
break;
}
};
var js_dissoc = function (o,k,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return js_dissoc__delegate.call(this,o,k,more);};
js_dissoc.cljs$lang$maxFixedArity = 2;
js_dissoc.cljs$lang$applyTo = (function (arglist__34304){
var o = cljs.core.first(arglist__34304);
arglist__34304 = cljs.core.next(arglist__34304);
var k = cljs.core.first(arglist__34304);
var more = cljs.core.rest(arglist__34304);
return js_dissoc__delegate(o,k,more);
});
js_dissoc.cljs$core$IFn$_invoke$arity$variadic = js_dissoc__delegate;
return js_dissoc;
})()
;
purnam.cljs.js_empty = (function js_empty(o){var G__34310_34315 = goog.typeOf(o);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("array",G__34310_34315))
{(o["length"] = 0);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("object",G__34310_34315))
{var seq__34311_34316 = cljs.core.seq(cljs.core.js_keys(o));var chunk__34312_34317 = null;var count__34313_34318 = 0;var i__34314_34319 = 0;while(true){
if((i__34314_34319 < count__34313_34318))
{var k_34320 = chunk__34312_34317.cljs$core$IIndexed$_nth$arity$2(null,i__34314_34319);delete o[k_34320];
{
var G__34321 = seq__34311_34316;
var G__34322 = chunk__34312_34317;
var G__34323 = count__34313_34318;
var G__34324 = (i__34314_34319 + 1);
seq__34311_34316 = G__34321;
chunk__34312_34317 = G__34322;
count__34313_34318 = G__34323;
i__34314_34319 = G__34324;
continue;
}
} else
{var temp__4092__auto___34325 = cljs.core.seq(seq__34311_34316);if(temp__4092__auto___34325)
{var seq__34311_34326__$1 = temp__4092__auto___34325;if(cljs.core.chunked_seq_QMARK_(seq__34311_34326__$1))
{var c__4015__auto___34327 = cljs.core.chunk_first(seq__34311_34326__$1);{
var G__34328 = cljs.core.chunk_rest(seq__34311_34326__$1);
var G__34329 = c__4015__auto___34327;
var G__34330 = cljs.core.count(c__4015__auto___34327);
var G__34331 = 0;
seq__34311_34316 = G__34328;
chunk__34312_34317 = G__34329;
count__34313_34318 = G__34330;
i__34314_34319 = G__34331;
continue;
}
} else
{var k_34332 = cljs.core.first(seq__34311_34326__$1);delete o[k_34332];
{
var G__34333 = cljs.core.next(seq__34311_34326__$1);
var G__34334 = null;
var G__34335 = 0;
var G__34336 = 0;
seq__34311_34316 = G__34333;
chunk__34312_34317 = G__34334;
count__34313_34318 = G__34335;
i__34314_34319 = G__34336;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core.constant$keyword$66)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(goog.typeOf(o))].join('')));
} else
{}
}
}
return o;
});
/**
* @param {...*} var_args
*/
purnam.cljs.js_merge = (function() {
var js_merge = null;
var js_merge__2 = (function (o1,o2){var seq__34341_34345 = cljs.core.seq(cljs.core.js_keys(o2));var chunk__34342_34346 = null;var count__34343_34347 = 0;var i__34344_34348 = 0;while(true){
if((i__34344_34348 < count__34343_34347))
{var k_34349 = chunk__34342_34346.cljs$core$IIndexed$_nth$arity$2(null,i__34344_34348);(o1[k_34349] = (o2[k_34349]));
{
var G__34350 = seq__34341_34345;
var G__34351 = chunk__34342_34346;
var G__34352 = count__34343_34347;
var G__34353 = (i__34344_34348 + 1);
seq__34341_34345 = G__34350;
chunk__34342_34346 = G__34351;
count__34343_34347 = G__34352;
i__34344_34348 = G__34353;
continue;
}
} else
{var temp__4092__auto___34354 = cljs.core.seq(seq__34341_34345);if(temp__4092__auto___34354)
{var seq__34341_34355__$1 = temp__4092__auto___34354;if(cljs.core.chunked_seq_QMARK_(seq__34341_34355__$1))
{var c__4015__auto___34356 = cljs.core.chunk_first(seq__34341_34355__$1);{
var G__34357 = cljs.core.chunk_rest(seq__34341_34355__$1);
var G__34358 = c__4015__auto___34356;
var G__34359 = cljs.core.count(c__4015__auto___34356);
var G__34360 = 0;
seq__34341_34345 = G__34357;
chunk__34342_34346 = G__34358;
count__34343_34347 = G__34359;
i__34344_34348 = G__34360;
continue;
}
} else
{var k_34361 = cljs.core.first(seq__34341_34355__$1);(o1[k_34361] = (o2[k_34361]));
{
var G__34362 = cljs.core.next(seq__34341_34355__$1);
var G__34363 = null;
var G__34364 = 0;
var G__34365 = 0;
seq__34341_34345 = G__34362;
chunk__34342_34346 = G__34363;
count__34343_34347 = G__34364;
i__34344_34348 = G__34365;
continue;
}
}
} else
{}
}
break;
}
return o1;
});
var js_merge__3 = (function() { 
var G__34366__delegate = function (o1,o2,more){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(js_merge,js_merge.cljs$core$IFn$_invoke$arity$2(o1,o2),more);
};
var G__34366 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__34366__delegate.call(this,o1,o2,more);};
G__34366.cljs$lang$maxFixedArity = 2;
G__34366.cljs$lang$applyTo = (function (arglist__34367){
var o1 = cljs.core.first(arglist__34367);
arglist__34367 = cljs.core.next(arglist__34367);
var o2 = cljs.core.first(arglist__34367);
var more = cljs.core.rest(arglist__34367);
return G__34366__delegate(o1,o2,more);
});
G__34366.cljs$core$IFn$_invoke$arity$variadic = G__34366__delegate;
return G__34366;
})()
;
js_merge = function(o1,o2,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return js_merge__2.call(this,o1,o2);
default:
return js_merge__3.cljs$core$IFn$_invoke$arity$variadic(o1,o2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_merge.cljs$lang$maxFixedArity = 2;
js_merge.cljs$lang$applyTo = js_merge__3.cljs$lang$applyTo;
js_merge.cljs$core$IFn$_invoke$arity$2 = js_merge__2;
js_merge.cljs$core$IFn$_invoke$arity$variadic = js_merge__3.cljs$core$IFn$_invoke$arity$variadic;
return js_merge;
})()
;
/**
* @param {...*} var_args
*/
purnam.cljs.js_merge_nil = (function() {
var js_merge_nil = null;
var js_merge_nil__2 = (function (o1,o2){var seq__34372_34376 = cljs.core.seq(cljs.core.js_keys(o2));var chunk__34373_34377 = null;var count__34374_34378 = 0;var i__34375_34379 = 0;while(true){
if((i__34375_34379 < count__34374_34378))
{var k_34380 = chunk__34373_34377.cljs$core$IIndexed$_nth$arity$2(null,i__34375_34379);if(cljs.core.not((o1[k_34380])))
{(o1[k_34380] = (o2[k_34380]));
} else
{}
{
var G__34381 = seq__34372_34376;
var G__34382 = chunk__34373_34377;
var G__34383 = count__34374_34378;
var G__34384 = (i__34375_34379 + 1);
seq__34372_34376 = G__34381;
chunk__34373_34377 = G__34382;
count__34374_34378 = G__34383;
i__34375_34379 = G__34384;
continue;
}
} else
{var temp__4092__auto___34385 = cljs.core.seq(seq__34372_34376);if(temp__4092__auto___34385)
{var seq__34372_34386__$1 = temp__4092__auto___34385;if(cljs.core.chunked_seq_QMARK_(seq__34372_34386__$1))
{var c__4015__auto___34387 = cljs.core.chunk_first(seq__34372_34386__$1);{
var G__34388 = cljs.core.chunk_rest(seq__34372_34386__$1);
var G__34389 = c__4015__auto___34387;
var G__34390 = cljs.core.count(c__4015__auto___34387);
var G__34391 = 0;
seq__34372_34376 = G__34388;
chunk__34373_34377 = G__34389;
count__34374_34378 = G__34390;
i__34375_34379 = G__34391;
continue;
}
} else
{var k_34392 = cljs.core.first(seq__34372_34386__$1);if(cljs.core.not((o1[k_34392])))
{(o1[k_34392] = (o2[k_34392]));
} else
{}
{
var G__34393 = cljs.core.next(seq__34372_34386__$1);
var G__34394 = null;
var G__34395 = 0;
var G__34396 = 0;
seq__34372_34376 = G__34393;
chunk__34373_34377 = G__34394;
count__34374_34378 = G__34395;
i__34375_34379 = G__34396;
continue;
}
}
} else
{}
}
break;
}
return o1;
});
var js_merge_nil__3 = (function() { 
var G__34397__delegate = function (o1,o2,more){while(true){
js_merge_nil.cljs$core$IFn$_invoke$arity$2(o1,o2);
if(cljs.core.truth_(more))
{{
var G__34398 = js_merge_nil.cljs$core$IFn$_invoke$arity$2(o1,o2);
var G__34399 = cljs.core.first(more);
var G__34400 = cljs.core.next(more);
o1 = G__34398;
o2 = G__34399;
more = G__34400;
continue;
}
} else
{return o1;
}
break;
}
};
var G__34397 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__34397__delegate.call(this,o1,o2,more);};
G__34397.cljs$lang$maxFixedArity = 2;
G__34397.cljs$lang$applyTo = (function (arglist__34401){
var o1 = cljs.core.first(arglist__34401);
arglist__34401 = cljs.core.next(arglist__34401);
var o2 = cljs.core.first(arglist__34401);
var more = cljs.core.rest(arglist__34401);
return G__34397__delegate(o1,o2,more);
});
G__34397.cljs$core$IFn$_invoke$arity$variadic = G__34397__delegate;
return G__34397;
})()
;
js_merge_nil = function(o1,o2,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return js_merge_nil__2.call(this,o1,o2);
default:
return js_merge_nil__3.cljs$core$IFn$_invoke$arity$variadic(o1,o2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_merge_nil.cljs$lang$maxFixedArity = 2;
js_merge_nil.cljs$lang$applyTo = js_merge_nil__3.cljs$lang$applyTo;
js_merge_nil.cljs$core$IFn$_invoke$arity$2 = js_merge_nil__2;
js_merge_nil.cljs$core$IFn$_invoke$arity$variadic = js_merge_nil__3.cljs$core$IFn$_invoke$arity$variadic;
return js_merge_nil;
})()
;
purnam.cljs.js_replace = (function js_replace(o1,o2){purnam.cljs.js_empty(o1);
return purnam.cljs.js_merge.cljs$core$IFn$_invoke$arity$2(o1,o2);
});
purnam.cljs.js_equals = (function js_equals(v1,v2){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v1,v2))
{return true;
} else
{var t1 = goog.typeOf(v1);var t2 = goog.typeOf(v2);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("array",t1,cljs.core.array_seq([t2], 0)))
{return goog.array.equals(v1,v2,js_equals);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("object",t1,cljs.core.array_seq([t2], 0)))
{var ks1 = cljs.core.js_keys(v1).sort();var ks2 = cljs.core.js_keys(v2).sort();if(cljs.core.truth_(goog.array.equals(ks1,ks2)))
{return goog.array.every(ks1,(function (k){return js_equals((v1[k]),(v2[k]));
}));
} else
{return false;
}
} else
{if(cljs.core.constant$keyword$66)
{return false;
} else
{return null;
}
}
}
}
});
purnam.cljs.js_copy = (function js_copy(o){return goog.object.clone(o);
});
purnam.cljs.js_initial_value = (function js_initial_value(v){var t = goog.typeOf(v);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"object"))
{var obj34405 = {};return obj34405;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"array"))
{return [];
} else
{if(cljs.core.constant$keyword$66)
{return v;
} else
{return null;
}
}
}
});
purnam.cljs.js_deep_extend = (function() {
var js_deep_extend = null;
var js_deep_extend__2 = (function (to,from){var visited = [from];var visitedlu = [to];js_deep_extend.cljs$core$IFn$_invoke$arity$4(to,from,visited,visitedlu);
return to;
});
var js_deep_extend__4 = (function (to,from,visited,visitedlu){var seq__34410_34414 = cljs.core.seq(cljs.core.js_keys(from));var chunk__34411_34415 = null;var count__34412_34416 = 0;var i__34413_34417 = 0;while(true){
if((i__34413_34417 < count__34412_34416))
{var k_34418 = chunk__34411_34415.cljs$core$IIndexed$_nth$arity$2(null,i__34413_34417);var v_34419 = (from[k_34418]);var vn_34420 = purnam.cljs.js_initial_value(v_34419);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v_34419,vn_34420))
{var i_34421 = visited.indexOf(v_34419);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,i_34421))
{visited.push(v_34419);
visitedlu.push(vn_34420);
js_deep_extend.cljs$core$IFn$_invoke$arity$4(vn_34420,v_34419,visited,visitedlu);
(to[k_34418] = vn_34420);
} else
{(to[k_34418] = (visitedlu[i_34421]));
}
} else
{if(cljs.core.constant$keyword$66)
{(to[k_34418] = v_34419);
} else
{}
}
{
var G__34422 = seq__34410_34414;
var G__34423 = chunk__34411_34415;
var G__34424 = count__34412_34416;
var G__34425 = (i__34413_34417 + 1);
seq__34410_34414 = G__34422;
chunk__34411_34415 = G__34423;
count__34412_34416 = G__34424;
i__34413_34417 = G__34425;
continue;
}
} else
{var temp__4092__auto___34426 = cljs.core.seq(seq__34410_34414);if(temp__4092__auto___34426)
{var seq__34410_34427__$1 = temp__4092__auto___34426;if(cljs.core.chunked_seq_QMARK_(seq__34410_34427__$1))
{var c__4015__auto___34428 = cljs.core.chunk_first(seq__34410_34427__$1);{
var G__34429 = cljs.core.chunk_rest(seq__34410_34427__$1);
var G__34430 = c__4015__auto___34428;
var G__34431 = cljs.core.count(c__4015__auto___34428);
var G__34432 = 0;
seq__34410_34414 = G__34429;
chunk__34411_34415 = G__34430;
count__34412_34416 = G__34431;
i__34413_34417 = G__34432;
continue;
}
} else
{var k_34433 = cljs.core.first(seq__34410_34427__$1);var v_34434 = (from[k_34433]);var vn_34435 = purnam.cljs.js_initial_value(v_34434);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v_34434,vn_34435))
{var i_34436 = visited.indexOf(v_34434);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,i_34436))
{visited.push(v_34434);
visitedlu.push(vn_34435);
js_deep_extend.cljs$core$IFn$_invoke$arity$4(vn_34435,v_34434,visited,visitedlu);
(to[k_34433] = vn_34435);
} else
{(to[k_34433] = (visitedlu[i_34436]));
}
} else
{if(cljs.core.constant$keyword$66)
{(to[k_34433] = v_34434);
} else
{}
}
{
var G__34437 = cljs.core.next(seq__34410_34427__$1);
var G__34438 = null;
var G__34439 = 0;
var G__34440 = 0;
seq__34410_34414 = G__34437;
chunk__34411_34415 = G__34438;
count__34412_34416 = G__34439;
i__34413_34417 = G__34440;
continue;
}
}
} else
{}
}
break;
}
return to;
});
js_deep_extend = function(to,from,visited,visitedlu){
switch(arguments.length){
case 2:
return js_deep_extend__2.call(this,to,from);
case 4:
return js_deep_extend__4.call(this,to,from,visited,visitedlu);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_deep_extend.cljs$core$IFn$_invoke$arity$2 = js_deep_extend__2;
js_deep_extend.cljs$core$IFn$_invoke$arity$4 = js_deep_extend__4;
return js_deep_extend;
})()
;
purnam.cljs.js_deep_copy = (function js_deep_copy(value){var vn = purnam.cljs.js_initial_value(value);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,vn))
{return purnam.cljs.js_deep_extend.cljs$core$IFn$_invoke$arity$2(vn,value);
} else
{return value;
}
});
purnam.cljs.js_deep_replace = (function js_deep_replace(o1,o2){purnam.cljs.js_empty(o1);
return purnam.cljs.js_deep_extend.cljs$core$IFn$_invoke$arity$2(o1,o2);
});
purnam.cljs.js_LT__ = (function js_LT__(obj){return cljs.core.clj__GT_js(obj);
});
purnam.cljs.log = (function() {
var log = null;
var log__1 = (function (x){if(cljs.core.coll_QMARK_(x))
{console.log([cljs.core.str(x)].join(''),x);
} else
{console.log([cljs.core.str(x)].join(''));
}
return x;
});
var log__2 = (function (x,y){if(cljs.core.coll_QMARK_(x))
{console.log([cljs.core.str(x),cljs.core.str(":")].join(''),[cljs.core.str(y)].join(''),y);
} else
{console.log([cljs.core.str(x),cljs.core.str(":")].join(''),[cljs.core.str(y)].join(''));
}
return y;
});
log = function(x,y){
switch(arguments.length){
case 1:
return log__1.call(this,x);
case 2:
return log__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
log.cljs$core$IFn$_invoke$arity$1 = log__1;
log.cljs$core$IFn$_invoke$arity$2 = log__2;
return log;
})()
;
purnam.cljs.augment_fn_string = (function augment_fn_string(func){if(typeof func === 'string')
{return (function (x){return purnam.cljs.aget_in.cljs$core$IFn$_invoke$arity$2(x,clojure.string.split.cljs$core$IFn$_invoke$arity$2(func,/\./));
});
} else
{return func;
}
});
purnam.cljs.check_fn = (function() {
var check_fn = null;
var check_fn__1 = (function (chk){return (function (x){if(cljs.core.fn_QMARK_(chk))
{return (chk.cljs$core$IFn$_invoke$arity$1 ? chk.cljs$core$IFn$_invoke$arity$1(x) : chk.call(null,x));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,chk);
}
});
});
var check_fn__2 = (function (func,chk){return (function (x){var res = (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(x) : func.call(null,x));if(cljs.core.fn_QMARK_(chk))
{return (chk.cljs$core$IFn$_invoke$arity$1 ? chk.cljs$core$IFn$_invoke$arity$1(res) : chk.call(null,res));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,chk);
}
});
});
check_fn = function(func,chk){
switch(arguments.length){
case 1:
return check_fn__1.call(this,func);
case 2:
return check_fn__2.call(this,func,chk);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_fn.cljs$core$IFn$_invoke$arity$1 = check_fn__1;
check_fn.cljs$core$IFn$_invoke$arity$2 = check_fn__2;
return check_fn;
})()
;
