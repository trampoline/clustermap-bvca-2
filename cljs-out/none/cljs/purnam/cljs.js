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
purnam.cljs.nested_val = (function nested_val(p__19504,val){var vec__19508 = p__19504;var k = cljs.core.nth.call(null,vec__19508,0,null);var ks = cljs.core.nthnext.call(null,vec__19508,1);if((k == null))
{return val;
} else
{var o = (function (){var obj19510 = {};return obj19510;
})();(o[k] = nested_val.call(null,ks,val));
return o;
}
});
purnam.cljs.nested_delete = (function nested_delete(p__19511,val){var vec__19513 = p__19511;var k = cljs.core.nth.call(null,vec__19513,0,null);var ks = cljs.core.nthnext.call(null,vec__19513,1);if((ks == null))
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
var aset_in__3 = (function (var$,arr,val){var vec__19515 = arr;var k = cljs.core.nth.call(null,vec__19515,0,null);var ks = cljs.core.nthnext.call(null,vec__19515,1);if((k == null))
{} else
{if(cljs.core.empty_QMARK_.call(null,ks))
{if(cljs.core.truth_(val))
{(var$[k] = val);
} else
{delete var$[k];
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4090__auto___19516 = (var$[k]);if(cljs.core.truth_(temp__4090__auto___19516))
{var svar_19517 = temp__4090__auto___19516;aset_in.call(null,svar_19517,ks,val);
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
{var vec__19519 = temp__4090__auto__;var _ = cljs.core.nth.call(null,vec__19519,0,null);var n = cljs.core.nth.call(null,vec__19519,1,null);return n;
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
var G__19520__delegate = function (o,k,v,more){while(true){
js_assoc.call(null,o,k,v);
if(cljs.core.truth_(more))
{{
var G__19521 = o;
var G__19522 = cljs.core.first.call(null,more);
var G__19523 = cljs.core.second.call(null,more);
var G__19524 = cljs.core.nnext.call(null,more);
o = G__19521;
k = G__19522;
v = G__19523;
more = G__19524;
continue;
}
} else
{return o;
}
break;
}
};
var G__19520 = function (o,k,v,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19520__delegate.call(this,o,k,v,more);};
G__19520.cljs$lang$maxFixedArity = 3;
G__19520.cljs$lang$applyTo = (function (arglist__19525){
var o = cljs.core.first(arglist__19525);
arglist__19525 = cljs.core.next(arglist__19525);
var k = cljs.core.first(arglist__19525);
arglist__19525 = cljs.core.next(arglist__19525);
var v = cljs.core.first(arglist__19525);
var more = cljs.core.rest(arglist__19525);
return G__19520__delegate(o,k,v,more);
});
G__19520.cljs$core$IFn$_invoke$arity$variadic = G__19520__delegate;
return G__19520;
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
var G__19526 = o;
var G__19527 = cljs.core.first.call(null,more);
var G__19528 = cljs.core.next.call(null,more);
o = G__19526;
k = G__19527;
more = G__19528;
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
js_dissoc.cljs$lang$applyTo = (function (arglist__19529){
var o = cljs.core.first(arglist__19529);
arglist__19529 = cljs.core.next(arglist__19529);
var k = cljs.core.first(arglist__19529);
var more = cljs.core.rest(arglist__19529);
return js_dissoc__delegate(o,k,more);
});
js_dissoc.cljs$core$IFn$_invoke$arity$variadic = js_dissoc__delegate;
return js_dissoc;
})()
;
purnam.cljs.js_empty = (function js_empty(o){var G__19535_19540 = goog.typeOf(o);if(cljs.core._EQ_.call(null,"array",G__19535_19540))
{(o["length"] = 0);
} else
{if(cljs.core._EQ_.call(null,"object",G__19535_19540))
{var seq__19536_19541 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o));var chunk__19537_19542 = null;var count__19538_19543 = 0;var i__19539_19544 = 0;while(true){
if((i__19539_19544 < count__19538_19543))
{var k_19545 = cljs.core._nth.call(null,chunk__19537_19542,i__19539_19544);delete o[k_19545];
{
var G__19546 = seq__19536_19541;
var G__19547 = chunk__19537_19542;
var G__19548 = count__19538_19543;
var G__19549 = (i__19539_19544 + 1);
seq__19536_19541 = G__19546;
chunk__19537_19542 = G__19547;
count__19538_19543 = G__19548;
i__19539_19544 = G__19549;
continue;
}
} else
{var temp__4092__auto___19550 = cljs.core.seq.call(null,seq__19536_19541);if(temp__4092__auto___19550)
{var seq__19536_19551__$1 = temp__4092__auto___19550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19536_19551__$1))
{var c__4015__auto___19552 = cljs.core.chunk_first.call(null,seq__19536_19551__$1);{
var G__19553 = cljs.core.chunk_rest.call(null,seq__19536_19551__$1);
var G__19554 = c__4015__auto___19552;
var G__19555 = cljs.core.count.call(null,c__4015__auto___19552);
var G__19556 = 0;
seq__19536_19541 = G__19553;
chunk__19537_19542 = G__19554;
count__19538_19543 = G__19555;
i__19539_19544 = G__19556;
continue;
}
} else
{var k_19557 = cljs.core.first.call(null,seq__19536_19551__$1);delete o[k_19557];
{
var G__19558 = cljs.core.next.call(null,seq__19536_19551__$1);
var G__19559 = null;
var G__19560 = 0;
var G__19561 = 0;
seq__19536_19541 = G__19558;
chunk__19537_19542 = G__19559;
count__19538_19543 = G__19560;
i__19539_19544 = G__19561;
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
var js_merge__2 = (function (o1,o2){var seq__19566_19570 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__19567_19571 = null;var count__19568_19572 = 0;var i__19569_19573 = 0;while(true){
if((i__19569_19573 < count__19568_19572))
{var k_19574 = cljs.core._nth.call(null,chunk__19567_19571,i__19569_19573);(o1[k_19574] = (o2[k_19574]));
{
var G__19575 = seq__19566_19570;
var G__19576 = chunk__19567_19571;
var G__19577 = count__19568_19572;
var G__19578 = (i__19569_19573 + 1);
seq__19566_19570 = G__19575;
chunk__19567_19571 = G__19576;
count__19568_19572 = G__19577;
i__19569_19573 = G__19578;
continue;
}
} else
{var temp__4092__auto___19579 = cljs.core.seq.call(null,seq__19566_19570);if(temp__4092__auto___19579)
{var seq__19566_19580__$1 = temp__4092__auto___19579;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19566_19580__$1))
{var c__4015__auto___19581 = cljs.core.chunk_first.call(null,seq__19566_19580__$1);{
var G__19582 = cljs.core.chunk_rest.call(null,seq__19566_19580__$1);
var G__19583 = c__4015__auto___19581;
var G__19584 = cljs.core.count.call(null,c__4015__auto___19581);
var G__19585 = 0;
seq__19566_19570 = G__19582;
chunk__19567_19571 = G__19583;
count__19568_19572 = G__19584;
i__19569_19573 = G__19585;
continue;
}
} else
{var k_19586 = cljs.core.first.call(null,seq__19566_19580__$1);(o1[k_19586] = (o2[k_19586]));
{
var G__19587 = cljs.core.next.call(null,seq__19566_19580__$1);
var G__19588 = null;
var G__19589 = 0;
var G__19590 = 0;
seq__19566_19570 = G__19587;
chunk__19567_19571 = G__19588;
count__19568_19572 = G__19589;
i__19569_19573 = G__19590;
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
var G__19591__delegate = function (o1,o2,more){return cljs.core.apply.call(null,js_merge,js_merge.call(null,o1,o2),more);
};
var G__19591 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19591__delegate.call(this,o1,o2,more);};
G__19591.cljs$lang$maxFixedArity = 2;
G__19591.cljs$lang$applyTo = (function (arglist__19592){
var o1 = cljs.core.first(arglist__19592);
arglist__19592 = cljs.core.next(arglist__19592);
var o2 = cljs.core.first(arglist__19592);
var more = cljs.core.rest(arglist__19592);
return G__19591__delegate(o1,o2,more);
});
G__19591.cljs$core$IFn$_invoke$arity$variadic = G__19591__delegate;
return G__19591;
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
var js_merge_nil__2 = (function (o1,o2){var seq__19597_19601 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__19598_19602 = null;var count__19599_19603 = 0;var i__19600_19604 = 0;while(true){
if((i__19600_19604 < count__19599_19603))
{var k_19605 = cljs.core._nth.call(null,chunk__19598_19602,i__19600_19604);if(cljs.core.not.call(null,(o1[k_19605])))
{(o1[k_19605] = (o2[k_19605]));
} else
{}
{
var G__19606 = seq__19597_19601;
var G__19607 = chunk__19598_19602;
var G__19608 = count__19599_19603;
var G__19609 = (i__19600_19604 + 1);
seq__19597_19601 = G__19606;
chunk__19598_19602 = G__19607;
count__19599_19603 = G__19608;
i__19600_19604 = G__19609;
continue;
}
} else
{var temp__4092__auto___19610 = cljs.core.seq.call(null,seq__19597_19601);if(temp__4092__auto___19610)
{var seq__19597_19611__$1 = temp__4092__auto___19610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19597_19611__$1))
{var c__4015__auto___19612 = cljs.core.chunk_first.call(null,seq__19597_19611__$1);{
var G__19613 = cljs.core.chunk_rest.call(null,seq__19597_19611__$1);
var G__19614 = c__4015__auto___19612;
var G__19615 = cljs.core.count.call(null,c__4015__auto___19612);
var G__19616 = 0;
seq__19597_19601 = G__19613;
chunk__19598_19602 = G__19614;
count__19599_19603 = G__19615;
i__19600_19604 = G__19616;
continue;
}
} else
{var k_19617 = cljs.core.first.call(null,seq__19597_19611__$1);if(cljs.core.not.call(null,(o1[k_19617])))
{(o1[k_19617] = (o2[k_19617]));
} else
{}
{
var G__19618 = cljs.core.next.call(null,seq__19597_19611__$1);
var G__19619 = null;
var G__19620 = 0;
var G__19621 = 0;
seq__19597_19601 = G__19618;
chunk__19598_19602 = G__19619;
count__19599_19603 = G__19620;
i__19600_19604 = G__19621;
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
var G__19622__delegate = function (o1,o2,more){while(true){
js_merge_nil.call(null,o1,o2);
if(cljs.core.truth_(more))
{{
var G__19623 = js_merge_nil.call(null,o1,o2);
var G__19624 = cljs.core.first.call(null,more);
var G__19625 = cljs.core.next.call(null,more);
o1 = G__19623;
o2 = G__19624;
more = G__19625;
continue;
}
} else
{return o1;
}
break;
}
};
var G__19622 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19622__delegate.call(this,o1,o2,more);};
G__19622.cljs$lang$maxFixedArity = 2;
G__19622.cljs$lang$applyTo = (function (arglist__19626){
var o1 = cljs.core.first(arglist__19626);
arglist__19626 = cljs.core.next(arglist__19626);
var o2 = cljs.core.first(arglist__19626);
var more = cljs.core.rest(arglist__19626);
return G__19622__delegate(o1,o2,more);
});
G__19622.cljs$core$IFn$_invoke$arity$variadic = G__19622__delegate;
return G__19622;
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
{var obj19630 = {};return obj19630;
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
var js_deep_extend__4 = (function (to,from,visited,visitedlu){var seq__19635_19639 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,from));var chunk__19636_19640 = null;var count__19637_19641 = 0;var i__19638_19642 = 0;while(true){
if((i__19638_19642 < count__19637_19641))
{var k_19643 = cljs.core._nth.call(null,chunk__19636_19640,i__19638_19642);var v_19644 = (from[k_19643]);var vn_19645 = purnam.cljs.js_initial_value.call(null,v_19644);if(cljs.core.not_EQ_.call(null,v_19644,vn_19645))
{var i_19646 = visited.indexOf(v_19644);if(cljs.core._EQ_.call(null,-1,i_19646))
{visited.push(v_19644);
visitedlu.push(vn_19645);
js_deep_extend.call(null,vn_19645,v_19644,visited,visitedlu);
(to[k_19643] = vn_19645);
} else
{(to[k_19643] = (visitedlu[i_19646]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_19643] = v_19644);
} else
{}
}
{
var G__19647 = seq__19635_19639;
var G__19648 = chunk__19636_19640;
var G__19649 = count__19637_19641;
var G__19650 = (i__19638_19642 + 1);
seq__19635_19639 = G__19647;
chunk__19636_19640 = G__19648;
count__19637_19641 = G__19649;
i__19638_19642 = G__19650;
continue;
}
} else
{var temp__4092__auto___19651 = cljs.core.seq.call(null,seq__19635_19639);if(temp__4092__auto___19651)
{var seq__19635_19652__$1 = temp__4092__auto___19651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19635_19652__$1))
{var c__4015__auto___19653 = cljs.core.chunk_first.call(null,seq__19635_19652__$1);{
var G__19654 = cljs.core.chunk_rest.call(null,seq__19635_19652__$1);
var G__19655 = c__4015__auto___19653;
var G__19656 = cljs.core.count.call(null,c__4015__auto___19653);
var G__19657 = 0;
seq__19635_19639 = G__19654;
chunk__19636_19640 = G__19655;
count__19637_19641 = G__19656;
i__19638_19642 = G__19657;
continue;
}
} else
{var k_19658 = cljs.core.first.call(null,seq__19635_19652__$1);var v_19659 = (from[k_19658]);var vn_19660 = purnam.cljs.js_initial_value.call(null,v_19659);if(cljs.core.not_EQ_.call(null,v_19659,vn_19660))
{var i_19661 = visited.indexOf(v_19659);if(cljs.core._EQ_.call(null,-1,i_19661))
{visited.push(v_19659);
visitedlu.push(vn_19660);
js_deep_extend.call(null,vn_19660,v_19659,visited,visitedlu);
(to[k_19658] = vn_19660);
} else
{(to[k_19658] = (visitedlu[i_19661]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_19658] = v_19659);
} else
{}
}
{
var G__19662 = cljs.core.next.call(null,seq__19635_19652__$1);
var G__19663 = null;
var G__19664 = 0;
var G__19665 = 0;
seq__19635_19639 = G__19662;
chunk__19636_19640 = G__19663;
count__19637_19641 = G__19664;
i__19638_19642 = G__19665;
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

//# sourceMappingURL=cljs.js.map