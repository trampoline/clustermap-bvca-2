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
purnam.cljs.nested_val = (function nested_val(p__19564,val){var vec__19568 = p__19564;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19568,0,null);var ks = cljs.core.nthnext(vec__19568,1);if((k == null))
{return val;
} else
{var o = (function (){var obj19570 = {};return obj19570;
})();(o[k] = nested_val(ks,val));
return o;
}
});
purnam.cljs.nested_delete = (function nested_delete(p__19571,val){var vec__19573 = p__19571;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19573,0,null);var ks = cljs.core.nthnext(vec__19573,1);if((ks == null))
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
var aset_in__3 = (function (var$,arr,val){var vec__19575 = arr;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19575,0,null);var ks = cljs.core.nthnext(vec__19575,1);if((k == null))
{} else
{if(cljs.core.empty_QMARK_(ks))
{if(cljs.core.truth_(val))
{(var$[k] = val);
} else
{delete var$[k];
}
} else
{if(cljs.core.constant$keyword$6)
{var temp__4090__auto___19576 = (var$[k]);if(cljs.core.truth_(temp__4090__auto___19576))
{var svar_19577 = temp__4090__auto___19576;aset_in.cljs$core$IFn$_invoke$arity$3(svar_19577,ks,val);
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
{if(cljs.core.constant$keyword$6)
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
{if(cljs.core.constant$keyword$6)
{return [cljs.core.str(x)].join('');
} else
{return null;
}
}
}
});
purnam.cljs.js_obj_name = (function js_obj_name(this$){var temp__4090__auto__ = cljs.core.re_find(/^function (\w+)/,[cljs.core.str(this$)].join(''));if(cljs.core.truth_(temp__4090__auto__))
{var vec__19579 = temp__4090__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19579,0,null);var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19579,1,null);return n;
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
var G__19580__delegate = function (o,k,v,more){while(true){
js_assoc.cljs$core$IFn$_invoke$arity$3(o,k,v);
if(cljs.core.truth_(more))
{{
var G__19581 = o;
var G__19582 = cljs.core.first(more);
var G__19583 = cljs.core.second(more);
var G__19584 = cljs.core.nnext(more);
o = G__19581;
k = G__19582;
v = G__19583;
more = G__19584;
continue;
}
} else
{return o;
}
break;
}
};
var G__19580 = function (o,k,v,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19580__delegate.call(this,o,k,v,more);};
G__19580.cljs$lang$maxFixedArity = 3;
G__19580.cljs$lang$applyTo = (function (arglist__19585){
var o = cljs.core.first(arglist__19585);
arglist__19585 = cljs.core.next(arglist__19585);
var k = cljs.core.first(arglist__19585);
arglist__19585 = cljs.core.next(arglist__19585);
var v = cljs.core.first(arglist__19585);
var more = cljs.core.rest(arglist__19585);
return G__19580__delegate(o,k,v,more);
});
G__19580.cljs$core$IFn$_invoke$arity$variadic = G__19580__delegate;
return G__19580;
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
var G__19586 = o;
var G__19587 = cljs.core.first(more);
var G__19588 = cljs.core.next(more);
o = G__19586;
k = G__19587;
more = G__19588;
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
js_dissoc.cljs$lang$applyTo = (function (arglist__19589){
var o = cljs.core.first(arglist__19589);
arglist__19589 = cljs.core.next(arglist__19589);
var k = cljs.core.first(arglist__19589);
var more = cljs.core.rest(arglist__19589);
return js_dissoc__delegate(o,k,more);
});
js_dissoc.cljs$core$IFn$_invoke$arity$variadic = js_dissoc__delegate;
return js_dissoc;
})()
;
purnam.cljs.js_empty = (function js_empty(o){var G__19595_19600 = goog.typeOf(o);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("array",G__19595_19600))
{(o["length"] = 0);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("object",G__19595_19600))
{var seq__19596_19601 = cljs.core.seq(cljs.core.js_keys(o));var chunk__19597_19602 = null;var count__19598_19603 = 0;var i__19599_19604 = 0;while(true){
if((i__19599_19604 < count__19598_19603))
{var k_19605 = chunk__19597_19602.cljs$core$IIndexed$_nth$arity$2(null,i__19599_19604);delete o[k_19605];
{
var G__19606 = seq__19596_19601;
var G__19607 = chunk__19597_19602;
var G__19608 = count__19598_19603;
var G__19609 = (i__19599_19604 + 1);
seq__19596_19601 = G__19606;
chunk__19597_19602 = G__19607;
count__19598_19603 = G__19608;
i__19599_19604 = G__19609;
continue;
}
} else
{var temp__4092__auto___19610 = cljs.core.seq(seq__19596_19601);if(temp__4092__auto___19610)
{var seq__19596_19611__$1 = temp__4092__auto___19610;if(cljs.core.chunked_seq_QMARK_(seq__19596_19611__$1))
{var c__4015__auto___19612 = cljs.core.chunk_first(seq__19596_19611__$1);{
var G__19613 = cljs.core.chunk_rest(seq__19596_19611__$1);
var G__19614 = c__4015__auto___19612;
var G__19615 = cljs.core.count(c__4015__auto___19612);
var G__19616 = 0;
seq__19596_19601 = G__19613;
chunk__19597_19602 = G__19614;
count__19598_19603 = G__19615;
i__19599_19604 = G__19616;
continue;
}
} else
{var k_19617 = cljs.core.first(seq__19596_19611__$1);delete o[k_19617];
{
var G__19618 = cljs.core.next(seq__19596_19611__$1);
var G__19619 = null;
var G__19620 = 0;
var G__19621 = 0;
seq__19596_19601 = G__19618;
chunk__19597_19602 = G__19619;
count__19598_19603 = G__19620;
i__19599_19604 = G__19621;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core.constant$keyword$6)
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
var js_merge__2 = (function (o1,o2){var seq__19626_19630 = cljs.core.seq(cljs.core.js_keys(o2));var chunk__19627_19631 = null;var count__19628_19632 = 0;var i__19629_19633 = 0;while(true){
if((i__19629_19633 < count__19628_19632))
{var k_19634 = chunk__19627_19631.cljs$core$IIndexed$_nth$arity$2(null,i__19629_19633);(o1[k_19634] = (o2[k_19634]));
{
var G__19635 = seq__19626_19630;
var G__19636 = chunk__19627_19631;
var G__19637 = count__19628_19632;
var G__19638 = (i__19629_19633 + 1);
seq__19626_19630 = G__19635;
chunk__19627_19631 = G__19636;
count__19628_19632 = G__19637;
i__19629_19633 = G__19638;
continue;
}
} else
{var temp__4092__auto___19639 = cljs.core.seq(seq__19626_19630);if(temp__4092__auto___19639)
{var seq__19626_19640__$1 = temp__4092__auto___19639;if(cljs.core.chunked_seq_QMARK_(seq__19626_19640__$1))
{var c__4015__auto___19641 = cljs.core.chunk_first(seq__19626_19640__$1);{
var G__19642 = cljs.core.chunk_rest(seq__19626_19640__$1);
var G__19643 = c__4015__auto___19641;
var G__19644 = cljs.core.count(c__4015__auto___19641);
var G__19645 = 0;
seq__19626_19630 = G__19642;
chunk__19627_19631 = G__19643;
count__19628_19632 = G__19644;
i__19629_19633 = G__19645;
continue;
}
} else
{var k_19646 = cljs.core.first(seq__19626_19640__$1);(o1[k_19646] = (o2[k_19646]));
{
var G__19647 = cljs.core.next(seq__19626_19640__$1);
var G__19648 = null;
var G__19649 = 0;
var G__19650 = 0;
seq__19626_19630 = G__19647;
chunk__19627_19631 = G__19648;
count__19628_19632 = G__19649;
i__19629_19633 = G__19650;
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
var G__19651__delegate = function (o1,o2,more){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(js_merge,js_merge.cljs$core$IFn$_invoke$arity$2(o1,o2),more);
};
var G__19651 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19651__delegate.call(this,o1,o2,more);};
G__19651.cljs$lang$maxFixedArity = 2;
G__19651.cljs$lang$applyTo = (function (arglist__19652){
var o1 = cljs.core.first(arglist__19652);
arglist__19652 = cljs.core.next(arglist__19652);
var o2 = cljs.core.first(arglist__19652);
var more = cljs.core.rest(arglist__19652);
return G__19651__delegate(o1,o2,more);
});
G__19651.cljs$core$IFn$_invoke$arity$variadic = G__19651__delegate;
return G__19651;
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
var js_merge_nil__2 = (function (o1,o2){var seq__19657_19661 = cljs.core.seq(cljs.core.js_keys(o2));var chunk__19658_19662 = null;var count__19659_19663 = 0;var i__19660_19664 = 0;while(true){
if((i__19660_19664 < count__19659_19663))
{var k_19665 = chunk__19658_19662.cljs$core$IIndexed$_nth$arity$2(null,i__19660_19664);if(cljs.core.not((o1[k_19665])))
{(o1[k_19665] = (o2[k_19665]));
} else
{}
{
var G__19666 = seq__19657_19661;
var G__19667 = chunk__19658_19662;
var G__19668 = count__19659_19663;
var G__19669 = (i__19660_19664 + 1);
seq__19657_19661 = G__19666;
chunk__19658_19662 = G__19667;
count__19659_19663 = G__19668;
i__19660_19664 = G__19669;
continue;
}
} else
{var temp__4092__auto___19670 = cljs.core.seq(seq__19657_19661);if(temp__4092__auto___19670)
{var seq__19657_19671__$1 = temp__4092__auto___19670;if(cljs.core.chunked_seq_QMARK_(seq__19657_19671__$1))
{var c__4015__auto___19672 = cljs.core.chunk_first(seq__19657_19671__$1);{
var G__19673 = cljs.core.chunk_rest(seq__19657_19671__$1);
var G__19674 = c__4015__auto___19672;
var G__19675 = cljs.core.count(c__4015__auto___19672);
var G__19676 = 0;
seq__19657_19661 = G__19673;
chunk__19658_19662 = G__19674;
count__19659_19663 = G__19675;
i__19660_19664 = G__19676;
continue;
}
} else
{var k_19677 = cljs.core.first(seq__19657_19671__$1);if(cljs.core.not((o1[k_19677])))
{(o1[k_19677] = (o2[k_19677]));
} else
{}
{
var G__19678 = cljs.core.next(seq__19657_19671__$1);
var G__19679 = null;
var G__19680 = 0;
var G__19681 = 0;
seq__19657_19661 = G__19678;
chunk__19658_19662 = G__19679;
count__19659_19663 = G__19680;
i__19660_19664 = G__19681;
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
var G__19682__delegate = function (o1,o2,more){while(true){
js_merge_nil.cljs$core$IFn$_invoke$arity$2(o1,o2);
if(cljs.core.truth_(more))
{{
var G__19683 = js_merge_nil.cljs$core$IFn$_invoke$arity$2(o1,o2);
var G__19684 = cljs.core.first(more);
var G__19685 = cljs.core.next(more);
o1 = G__19683;
o2 = G__19684;
more = G__19685;
continue;
}
} else
{return o1;
}
break;
}
};
var G__19682 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19682__delegate.call(this,o1,o2,more);};
G__19682.cljs$lang$maxFixedArity = 2;
G__19682.cljs$lang$applyTo = (function (arglist__19686){
var o1 = cljs.core.first(arglist__19686);
arglist__19686 = cljs.core.next(arglist__19686);
var o2 = cljs.core.first(arglist__19686);
var more = cljs.core.rest(arglist__19686);
return G__19682__delegate(o1,o2,more);
});
G__19682.cljs$core$IFn$_invoke$arity$variadic = G__19682__delegate;
return G__19682;
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
{if(cljs.core.constant$keyword$6)
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
{var obj19690 = {};return obj19690;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"array"))
{return [];
} else
{if(cljs.core.constant$keyword$6)
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
var js_deep_extend__4 = (function (to,from,visited,visitedlu){var seq__19695_19699 = cljs.core.seq(cljs.core.js_keys(from));var chunk__19696_19700 = null;var count__19697_19701 = 0;var i__19698_19702 = 0;while(true){
if((i__19698_19702 < count__19697_19701))
{var k_19703 = chunk__19696_19700.cljs$core$IIndexed$_nth$arity$2(null,i__19698_19702);var v_19704 = (from[k_19703]);var vn_19705 = purnam.cljs.js_initial_value(v_19704);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v_19704,vn_19705))
{var i_19706 = visited.indexOf(v_19704);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,i_19706))
{visited.push(v_19704);
visitedlu.push(vn_19705);
js_deep_extend.cljs$core$IFn$_invoke$arity$4(vn_19705,v_19704,visited,visitedlu);
(to[k_19703] = vn_19705);
} else
{(to[k_19703] = (visitedlu[i_19706]));
}
} else
{if(cljs.core.constant$keyword$6)
{(to[k_19703] = v_19704);
} else
{}
}
{
var G__19707 = seq__19695_19699;
var G__19708 = chunk__19696_19700;
var G__19709 = count__19697_19701;
var G__19710 = (i__19698_19702 + 1);
seq__19695_19699 = G__19707;
chunk__19696_19700 = G__19708;
count__19697_19701 = G__19709;
i__19698_19702 = G__19710;
continue;
}
} else
{var temp__4092__auto___19711 = cljs.core.seq(seq__19695_19699);if(temp__4092__auto___19711)
{var seq__19695_19712__$1 = temp__4092__auto___19711;if(cljs.core.chunked_seq_QMARK_(seq__19695_19712__$1))
{var c__4015__auto___19713 = cljs.core.chunk_first(seq__19695_19712__$1);{
var G__19714 = cljs.core.chunk_rest(seq__19695_19712__$1);
var G__19715 = c__4015__auto___19713;
var G__19716 = cljs.core.count(c__4015__auto___19713);
var G__19717 = 0;
seq__19695_19699 = G__19714;
chunk__19696_19700 = G__19715;
count__19697_19701 = G__19716;
i__19698_19702 = G__19717;
continue;
}
} else
{var k_19718 = cljs.core.first(seq__19695_19712__$1);var v_19719 = (from[k_19718]);var vn_19720 = purnam.cljs.js_initial_value(v_19719);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v_19719,vn_19720))
{var i_19721 = visited.indexOf(v_19719);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,i_19721))
{visited.push(v_19719);
visitedlu.push(vn_19720);
js_deep_extend.cljs$core$IFn$_invoke$arity$4(vn_19720,v_19719,visited,visitedlu);
(to[k_19718] = vn_19720);
} else
{(to[k_19718] = (visitedlu[i_19721]));
}
} else
{if(cljs.core.constant$keyword$6)
{(to[k_19718] = v_19719);
} else
{}
}
{
var G__19722 = cljs.core.next(seq__19695_19712__$1);
var G__19723 = null;
var G__19724 = 0;
var G__19725 = 0;
seq__19695_19699 = G__19722;
chunk__19696_19700 = G__19723;
count__19697_19701 = G__19724;
i__19698_19702 = G__19725;
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
