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
purnam.cljs.nested_val = (function nested_val(p__33415,val){var vec__33419 = p__33415;var k = cljs.core.nth.call(null,vec__33419,0,null);var ks = cljs.core.nthnext.call(null,vec__33419,1);if((k == null))
{return val;
} else
{var o = (function (){var obj33421 = {};return obj33421;
})();(o[k] = nested_val.call(null,ks,val));
return o;
}
});
purnam.cljs.nested_delete = (function nested_delete(p__33422,val){var vec__33424 = p__33422;var k = cljs.core.nth.call(null,vec__33424,0,null);var ks = cljs.core.nthnext.call(null,vec__33424,1);if((ks == null))
{delete val[k];
} else
{nested_delete.call(null,ks,val);
}
return val;
});
purnam.cljs.aset_in = (function() {
var aset_in = null;
var aset_in__2 = (function (var$,arr){return aset_in.call(null,var$,arr,null);
});
var aset_in__3 = (function (var$,arr,val){var vec__33426 = arr;var k = cljs.core.nth.call(null,vec__33426,0,null);var ks = cljs.core.nthnext.call(null,vec__33426,1);if((k == null))
{} else
{if(cljs.core.empty_QMARK_.call(null,ks))
{if(cljs.core.truth_(val))
{(var$[k] = val);
} else
{delete var$[k];
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4090__auto___33427 = (var$[k]);if(cljs.core.truth_(temp__4090__auto___33427))
{var svar_33428 = temp__4090__auto___33427;aset_in.call(null,svar_33428,ks,val);
} else
{if(cljs.core.truth_(val))
{(var$[k] = purnam.cljs.nested_val.call(null,ks,val));
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
{if(cljs.core.empty_QMARK_.call(null,arr))
{return var$;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return aget_in.call(null,(var$[cljs.core.first.call(null,arr)]),cljs.core.next.call(null,arr));
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
{return cljs.core.name.call(null,x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return [cljs.core.str(x)].join('');
} else
{return null;
}
}
}
});
purnam.cljs.js_obj_name = (function js_obj_name(this$){var temp__4090__auto__ = cljs.core.re_find.call(null,/^function (\w+)/,[cljs.core.str(this$)].join(''));if(cljs.core.truth_(temp__4090__auto__))
{var vec__33430 = temp__4090__auto__;var _ = cljs.core.nth.call(null,vec__33430,0,null);var n = cljs.core.nth.call(null,vec__33430,1,null);return n;
} else
{return "Object";
}
});
purnam.cljs.js_lookup = (function() {
var js_lookup = null;
var js_lookup__2 = (function (o,k){return (o[purnam.cljs.js_strkey.call(null,k)]);
});
var js_lookup__3 = (function (o,k,not_found){var s = purnam.cljs.js_strkey.call(null,k);var temp__4090__auto__ = (o[s]);if(cljs.core.truth_(temp__4090__auto__))
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
var js_assoc__3 = (function (o,k,v){(o[purnam.cljs.js_strkey.call(null,k)] = v);
return o;
});
var js_assoc__4 = (function() { 
var G__33431__delegate = function (o,k,v,more){while(true){
js_assoc.call(null,o,k,v);
if(cljs.core.truth_(more))
{{
var G__33432 = o;
var G__33433 = cljs.core.first.call(null,more);
var G__33434 = cljs.core.second.call(null,more);
var G__33435 = cljs.core.nnext.call(null,more);
o = G__33432;
k = G__33433;
v = G__33434;
more = G__33435;
continue;
}
} else
{return o;
}
break;
}
};
var G__33431 = function (o,k,v,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__33431__delegate.call(this,o,k,v,more);};
G__33431.cljs$lang$maxFixedArity = 3;
G__33431.cljs$lang$applyTo = (function (arglist__33436){
var o = cljs.core.first(arglist__33436);
arglist__33436 = cljs.core.next(arglist__33436);
var k = cljs.core.first(arglist__33436);
arglist__33436 = cljs.core.next(arglist__33436);
var v = cljs.core.first(arglist__33436);
var more = cljs.core.rest(arglist__33436);
return G__33431__delegate(o,k,v,more);
});
G__33431.cljs$core$IFn$_invoke$arity$variadic = G__33431__delegate;
return G__33431;
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
delete o[purnam.cljs.js_strkey.call(null,k)];
if(cljs.core.truth_(more))
{{
var G__33437 = o;
var G__33438 = cljs.core.first.call(null,more);
var G__33439 = cljs.core.next.call(null,more);
o = G__33437;
k = G__33438;
more = G__33439;
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
js_dissoc.cljs$lang$applyTo = (function (arglist__33440){
var o = cljs.core.first(arglist__33440);
arglist__33440 = cljs.core.next(arglist__33440);
var k = cljs.core.first(arglist__33440);
var more = cljs.core.rest(arglist__33440);
return js_dissoc__delegate(o,k,more);
});
js_dissoc.cljs$core$IFn$_invoke$arity$variadic = js_dissoc__delegate;
return js_dissoc;
})()
;
purnam.cljs.js_empty = (function js_empty(o){var G__33446_33451 = goog.typeOf(o);if(cljs.core._EQ_.call(null,"array",G__33446_33451))
{(o["length"] = 0);
} else
{if(cljs.core._EQ_.call(null,"object",G__33446_33451))
{var seq__33447_33452 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o));var chunk__33448_33453 = null;var count__33449_33454 = 0;var i__33450_33455 = 0;while(true){
if((i__33450_33455 < count__33449_33454))
{var k_33456 = cljs.core._nth.call(null,chunk__33448_33453,i__33450_33455);delete o[k_33456];
{
var G__33457 = seq__33447_33452;
var G__33458 = chunk__33448_33453;
var G__33459 = count__33449_33454;
var G__33460 = (i__33450_33455 + 1);
seq__33447_33452 = G__33457;
chunk__33448_33453 = G__33458;
count__33449_33454 = G__33459;
i__33450_33455 = G__33460;
continue;
}
} else
{var temp__4092__auto___33461 = cljs.core.seq.call(null,seq__33447_33452);if(temp__4092__auto___33461)
{var seq__33447_33462__$1 = temp__4092__auto___33461;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33447_33462__$1))
{var c__4015__auto___33463 = cljs.core.chunk_first.call(null,seq__33447_33462__$1);{
var G__33464 = cljs.core.chunk_rest.call(null,seq__33447_33462__$1);
var G__33465 = c__4015__auto___33463;
var G__33466 = cljs.core.count.call(null,c__4015__auto___33463);
var G__33467 = 0;
seq__33447_33452 = G__33464;
chunk__33448_33453 = G__33465;
count__33449_33454 = G__33466;
i__33450_33455 = G__33467;
continue;
}
} else
{var k_33468 = cljs.core.first.call(null,seq__33447_33462__$1);delete o[k_33468];
{
var G__33469 = cljs.core.next.call(null,seq__33447_33462__$1);
var G__33470 = null;
var G__33471 = 0;
var G__33472 = 0;
seq__33447_33452 = G__33469;
chunk__33448_33453 = G__33470;
count__33449_33454 = G__33471;
i__33450_33455 = G__33472;
continue;
}
}
} else
{}
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
var js_merge__2 = (function (o1,o2){var seq__33477_33481 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__33478_33482 = null;var count__33479_33483 = 0;var i__33480_33484 = 0;while(true){
if((i__33480_33484 < count__33479_33483))
{var k_33485 = cljs.core._nth.call(null,chunk__33478_33482,i__33480_33484);(o1[k_33485] = (o2[k_33485]));
{
var G__33486 = seq__33477_33481;
var G__33487 = chunk__33478_33482;
var G__33488 = count__33479_33483;
var G__33489 = (i__33480_33484 + 1);
seq__33477_33481 = G__33486;
chunk__33478_33482 = G__33487;
count__33479_33483 = G__33488;
i__33480_33484 = G__33489;
continue;
}
} else
{var temp__4092__auto___33490 = cljs.core.seq.call(null,seq__33477_33481);if(temp__4092__auto___33490)
{var seq__33477_33491__$1 = temp__4092__auto___33490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33477_33491__$1))
{var c__4015__auto___33492 = cljs.core.chunk_first.call(null,seq__33477_33491__$1);{
var G__33493 = cljs.core.chunk_rest.call(null,seq__33477_33491__$1);
var G__33494 = c__4015__auto___33492;
var G__33495 = cljs.core.count.call(null,c__4015__auto___33492);
var G__33496 = 0;
seq__33477_33481 = G__33493;
chunk__33478_33482 = G__33494;
count__33479_33483 = G__33495;
i__33480_33484 = G__33496;
continue;
}
} else
{var k_33497 = cljs.core.first.call(null,seq__33477_33491__$1);(o1[k_33497] = (o2[k_33497]));
{
var G__33498 = cljs.core.next.call(null,seq__33477_33491__$1);
var G__33499 = null;
var G__33500 = 0;
var G__33501 = 0;
seq__33477_33481 = G__33498;
chunk__33478_33482 = G__33499;
count__33479_33483 = G__33500;
i__33480_33484 = G__33501;
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
var G__33502__delegate = function (o1,o2,more){return cljs.core.apply.call(null,js_merge,js_merge.call(null,o1,o2),more);
};
var G__33502 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__33502__delegate.call(this,o1,o2,more);};
G__33502.cljs$lang$maxFixedArity = 2;
G__33502.cljs$lang$applyTo = (function (arglist__33503){
var o1 = cljs.core.first(arglist__33503);
arglist__33503 = cljs.core.next(arglist__33503);
var o2 = cljs.core.first(arglist__33503);
var more = cljs.core.rest(arglist__33503);
return G__33502__delegate(o1,o2,more);
});
G__33502.cljs$core$IFn$_invoke$arity$variadic = G__33502__delegate;
return G__33502;
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
var js_merge_nil__2 = (function (o1,o2){var seq__33508_33512 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__33509_33513 = null;var count__33510_33514 = 0;var i__33511_33515 = 0;while(true){
if((i__33511_33515 < count__33510_33514))
{var k_33516 = cljs.core._nth.call(null,chunk__33509_33513,i__33511_33515);if(cljs.core.not.call(null,(o1[k_33516])))
{(o1[k_33516] = (o2[k_33516]));
} else
{}
{
var G__33517 = seq__33508_33512;
var G__33518 = chunk__33509_33513;
var G__33519 = count__33510_33514;
var G__33520 = (i__33511_33515 + 1);
seq__33508_33512 = G__33517;
chunk__33509_33513 = G__33518;
count__33510_33514 = G__33519;
i__33511_33515 = G__33520;
continue;
}
} else
{var temp__4092__auto___33521 = cljs.core.seq.call(null,seq__33508_33512);if(temp__4092__auto___33521)
{var seq__33508_33522__$1 = temp__4092__auto___33521;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33508_33522__$1))
{var c__4015__auto___33523 = cljs.core.chunk_first.call(null,seq__33508_33522__$1);{
var G__33524 = cljs.core.chunk_rest.call(null,seq__33508_33522__$1);
var G__33525 = c__4015__auto___33523;
var G__33526 = cljs.core.count.call(null,c__4015__auto___33523);
var G__33527 = 0;
seq__33508_33512 = G__33524;
chunk__33509_33513 = G__33525;
count__33510_33514 = G__33526;
i__33511_33515 = G__33527;
continue;
}
} else
{var k_33528 = cljs.core.first.call(null,seq__33508_33522__$1);if(cljs.core.not.call(null,(o1[k_33528])))
{(o1[k_33528] = (o2[k_33528]));
} else
{}
{
var G__33529 = cljs.core.next.call(null,seq__33508_33522__$1);
var G__33530 = null;
var G__33531 = 0;
var G__33532 = 0;
seq__33508_33512 = G__33529;
chunk__33509_33513 = G__33530;
count__33510_33514 = G__33531;
i__33511_33515 = G__33532;
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
var G__33533__delegate = function (o1,o2,more){while(true){
js_merge_nil.call(null,o1,o2);
if(cljs.core.truth_(more))
{{
var G__33534 = js_merge_nil.call(null,o1,o2);
var G__33535 = cljs.core.first.call(null,more);
var G__33536 = cljs.core.next.call(null,more);
o1 = G__33534;
o2 = G__33535;
more = G__33536;
continue;
}
} else
{return o1;
}
break;
}
};
var G__33533 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__33533__delegate.call(this,o1,o2,more);};
G__33533.cljs$lang$maxFixedArity = 2;
G__33533.cljs$lang$applyTo = (function (arglist__33537){
var o1 = cljs.core.first(arglist__33537);
arglist__33537 = cljs.core.next(arglist__33537);
var o2 = cljs.core.first(arglist__33537);
var more = cljs.core.rest(arglist__33537);
return G__33533__delegate(o1,o2,more);
});
G__33533.cljs$core$IFn$_invoke$arity$variadic = G__33533__delegate;
return G__33533;
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
purnam.cljs.js_replace = (function js_replace(o1,o2){purnam.cljs.js_empty.call(null,o1);
return purnam.cljs.js_merge.call(null,o1,o2);
});
purnam.cljs.js_equals = (function js_equals(v1,v2){if(cljs.core._EQ_.call(null,v1,v2))
{return true;
} else
{var t1 = goog.typeOf(v1);var t2 = goog.typeOf(v2);if(cljs.core._EQ_.call(null,"array",t1,t2))
{return goog.array.equals(v1,v2,js_equals);
} else
{if(cljs.core._EQ_.call(null,"object",t1,t2))
{var ks1 = cljs.core.js_keys.call(null,v1).sort();var ks2 = cljs.core.js_keys.call(null,v2).sort();if(cljs.core.truth_(goog.array.equals(ks1,ks2)))
{return goog.array.every(ks1,(function (k){return js_equals.call(null,(v1[k]),(v2[k]));
}));
} else
{return false;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
purnam.cljs.js_initial_value = (function js_initial_value(v){var t = goog.typeOf(v);if(cljs.core._EQ_.call(null,t,"object"))
{var obj33541 = {};return obj33541;
} else
{if(cljs.core._EQ_.call(null,t,"array"))
{return [];
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return v;
} else
{return null;
}
}
}
});
purnam.cljs.js_deep_extend = (function() {
var js_deep_extend = null;
var js_deep_extend__2 = (function (to,from){var visited = [from];var visitedlu = [to];js_deep_extend.call(null,to,from,visited,visitedlu);
return to;
});
var js_deep_extend__4 = (function (to,from,visited,visitedlu){var seq__33546_33550 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,from));var chunk__33547_33551 = null;var count__33548_33552 = 0;var i__33549_33553 = 0;while(true){
if((i__33549_33553 < count__33548_33552))
{var k_33554 = cljs.core._nth.call(null,chunk__33547_33551,i__33549_33553);var v_33555 = (from[k_33554]);var vn_33556 = purnam.cljs.js_initial_value.call(null,v_33555);if(cljs.core.not_EQ_.call(null,v_33555,vn_33556))
{var i_33557 = visited.indexOf(v_33555);if(cljs.core._EQ_.call(null,-1,i_33557))
{visited.push(v_33555);
visitedlu.push(vn_33556);
js_deep_extend.call(null,vn_33556,v_33555,visited,visitedlu);
(to[k_33554] = vn_33556);
} else
{(to[k_33554] = (visitedlu[i_33557]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_33554] = v_33555);
} else
{}
}
{
var G__33558 = seq__33546_33550;
var G__33559 = chunk__33547_33551;
var G__33560 = count__33548_33552;
var G__33561 = (i__33549_33553 + 1);
seq__33546_33550 = G__33558;
chunk__33547_33551 = G__33559;
count__33548_33552 = G__33560;
i__33549_33553 = G__33561;
continue;
}
} else
{var temp__4092__auto___33562 = cljs.core.seq.call(null,seq__33546_33550);if(temp__4092__auto___33562)
{var seq__33546_33563__$1 = temp__4092__auto___33562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33546_33563__$1))
{var c__4015__auto___33564 = cljs.core.chunk_first.call(null,seq__33546_33563__$1);{
var G__33565 = cljs.core.chunk_rest.call(null,seq__33546_33563__$1);
var G__33566 = c__4015__auto___33564;
var G__33567 = cljs.core.count.call(null,c__4015__auto___33564);
var G__33568 = 0;
seq__33546_33550 = G__33565;
chunk__33547_33551 = G__33566;
count__33548_33552 = G__33567;
i__33549_33553 = G__33568;
continue;
}
} else
{var k_33569 = cljs.core.first.call(null,seq__33546_33563__$1);var v_33570 = (from[k_33569]);var vn_33571 = purnam.cljs.js_initial_value.call(null,v_33570);if(cljs.core.not_EQ_.call(null,v_33570,vn_33571))
{var i_33572 = visited.indexOf(v_33570);if(cljs.core._EQ_.call(null,-1,i_33572))
{visited.push(v_33570);
visitedlu.push(vn_33571);
js_deep_extend.call(null,vn_33571,v_33570,visited,visitedlu);
(to[k_33569] = vn_33571);
} else
{(to[k_33569] = (visitedlu[i_33572]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_33569] = v_33570);
} else
{}
}
{
var G__33573 = cljs.core.next.call(null,seq__33546_33563__$1);
var G__33574 = null;
var G__33575 = 0;
var G__33576 = 0;
seq__33546_33550 = G__33573;
chunk__33547_33551 = G__33574;
count__33548_33552 = G__33575;
i__33549_33553 = G__33576;
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
purnam.cljs.js_deep_copy = (function js_deep_copy(value){var vn = purnam.cljs.js_initial_value.call(null,value);if(cljs.core.not_EQ_.call(null,value,vn))
{return purnam.cljs.js_deep_extend.call(null,vn,value);
} else
{return value;
}
});
purnam.cljs.js_deep_replace = (function js_deep_replace(o1,o2){purnam.cljs.js_empty.call(null,o1);
return purnam.cljs.js_deep_extend.call(null,o1,o2);
});
purnam.cljs.js_LT__ = (function js_LT__(obj){return cljs.core.clj__GT_js.call(null,obj);
});
purnam.cljs.log = (function() {
var log = null;
var log__1 = (function (x){if(cljs.core.coll_QMARK_.call(null,x))
{console.log([cljs.core.str(x)].join(''),x);
} else
{console.log([cljs.core.str(x)].join(''));
}
return x;
});
var log__2 = (function (x,y){if(cljs.core.coll_QMARK_.call(null,x))
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
{return (function (x){return purnam.cljs.aget_in.call(null,x,clojure.string.split.call(null,func,/\./));
});
} else
{return func;
}
});
purnam.cljs.check_fn = (function() {
var check_fn = null;
var check_fn__1 = (function (chk){return (function (x){if(cljs.core.fn_QMARK_.call(null,chk))
{return chk.call(null,x);
} else
{return cljs.core._EQ_.call(null,x,chk);
}
});
});
var check_fn__2 = (function (func,chk){return (function (x){var res = func.call(null,x);if(cljs.core.fn_QMARK_.call(null,chk))
{return chk.call(null,res);
} else
{return cljs.core._EQ_.call(null,res,chk);
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
