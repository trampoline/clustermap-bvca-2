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
purnam.cljs.nested_val = (function nested_val(p__19563,val){var vec__19567 = p__19563;var k = cljs.core.nth.call(null,vec__19567,0,null);var ks = cljs.core.nthnext.call(null,vec__19567,1);if((k == null))
{return val;
} else
{var o = (function (){var obj19569 = {};return obj19569;
})();(o[k] = nested_val.call(null,ks,val));
return o;
}
});
purnam.cljs.nested_delete = (function nested_delete(p__19570,val){var vec__19572 = p__19570;var k = cljs.core.nth.call(null,vec__19572,0,null);var ks = cljs.core.nthnext.call(null,vec__19572,1);if((ks == null))
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
var aset_in__3 = (function (var$,arr,val){var vec__19574 = arr;var k = cljs.core.nth.call(null,vec__19574,0,null);var ks = cljs.core.nthnext.call(null,vec__19574,1);if((k == null))
{} else
{if(cljs.core.empty_QMARK_.call(null,ks))
{if(cljs.core.truth_(val))
{(var$[k] = val);
} else
{delete var$[k];
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4090__auto___19575 = (var$[k]);if(cljs.core.truth_(temp__4090__auto___19575))
{var svar_19576 = temp__4090__auto___19575;aset_in.call(null,svar_19576,ks,val);
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
{var vec__19578 = temp__4090__auto__;var _ = cljs.core.nth.call(null,vec__19578,0,null);var n = cljs.core.nth.call(null,vec__19578,1,null);return n;
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
var G__19579__delegate = function (o,k,v,more){while(true){
js_assoc.call(null,o,k,v);
if(cljs.core.truth_(more))
{{
var G__19580 = o;
var G__19581 = cljs.core.first.call(null,more);
var G__19582 = cljs.core.second.call(null,more);
var G__19583 = cljs.core.nnext.call(null,more);
o = G__19580;
k = G__19581;
v = G__19582;
more = G__19583;
continue;
}
} else
{return o;
}
break;
}
};
var G__19579 = function (o,k,v,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19579__delegate.call(this,o,k,v,more);};
G__19579.cljs$lang$maxFixedArity = 3;
G__19579.cljs$lang$applyTo = (function (arglist__19584){
var o = cljs.core.first(arglist__19584);
arglist__19584 = cljs.core.next(arglist__19584);
var k = cljs.core.first(arglist__19584);
arglist__19584 = cljs.core.next(arglist__19584);
var v = cljs.core.first(arglist__19584);
var more = cljs.core.rest(arglist__19584);
return G__19579__delegate(o,k,v,more);
});
G__19579.cljs$core$IFn$_invoke$arity$variadic = G__19579__delegate;
return G__19579;
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
var G__19585 = o;
var G__19586 = cljs.core.first.call(null,more);
var G__19587 = cljs.core.next.call(null,more);
o = G__19585;
k = G__19586;
more = G__19587;
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
js_dissoc.cljs$lang$applyTo = (function (arglist__19588){
var o = cljs.core.first(arglist__19588);
arglist__19588 = cljs.core.next(arglist__19588);
var k = cljs.core.first(arglist__19588);
var more = cljs.core.rest(arglist__19588);
return js_dissoc__delegate(o,k,more);
});
js_dissoc.cljs$core$IFn$_invoke$arity$variadic = js_dissoc__delegate;
return js_dissoc;
})()
;
purnam.cljs.js_empty = (function js_empty(o){var G__19594_19599 = goog.typeOf(o);if(cljs.core._EQ_.call(null,"array",G__19594_19599))
{(o["length"] = 0);
} else
{if(cljs.core._EQ_.call(null,"object",G__19594_19599))
{var seq__19595_19600 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o));var chunk__19596_19601 = null;var count__19597_19602 = 0;var i__19598_19603 = 0;while(true){
if((i__19598_19603 < count__19597_19602))
{var k_19604 = cljs.core._nth.call(null,chunk__19596_19601,i__19598_19603);delete o[k_19604];
{
var G__19605 = seq__19595_19600;
var G__19606 = chunk__19596_19601;
var G__19607 = count__19597_19602;
var G__19608 = (i__19598_19603 + 1);
seq__19595_19600 = G__19605;
chunk__19596_19601 = G__19606;
count__19597_19602 = G__19607;
i__19598_19603 = G__19608;
continue;
}
} else
{var temp__4092__auto___19609 = cljs.core.seq.call(null,seq__19595_19600);if(temp__4092__auto___19609)
{var seq__19595_19610__$1 = temp__4092__auto___19609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19595_19610__$1))
{var c__4015__auto___19611 = cljs.core.chunk_first.call(null,seq__19595_19610__$1);{
var G__19612 = cljs.core.chunk_rest.call(null,seq__19595_19610__$1);
var G__19613 = c__4015__auto___19611;
var G__19614 = cljs.core.count.call(null,c__4015__auto___19611);
var G__19615 = 0;
seq__19595_19600 = G__19612;
chunk__19596_19601 = G__19613;
count__19597_19602 = G__19614;
i__19598_19603 = G__19615;
continue;
}
} else
{var k_19616 = cljs.core.first.call(null,seq__19595_19610__$1);delete o[k_19616];
{
var G__19617 = cljs.core.next.call(null,seq__19595_19610__$1);
var G__19618 = null;
var G__19619 = 0;
var G__19620 = 0;
seq__19595_19600 = G__19617;
chunk__19596_19601 = G__19618;
count__19597_19602 = G__19619;
i__19598_19603 = G__19620;
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
var js_merge__2 = (function (o1,o2){var seq__19625_19629 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__19626_19630 = null;var count__19627_19631 = 0;var i__19628_19632 = 0;while(true){
if((i__19628_19632 < count__19627_19631))
{var k_19633 = cljs.core._nth.call(null,chunk__19626_19630,i__19628_19632);(o1[k_19633] = (o2[k_19633]));
{
var G__19634 = seq__19625_19629;
var G__19635 = chunk__19626_19630;
var G__19636 = count__19627_19631;
var G__19637 = (i__19628_19632 + 1);
seq__19625_19629 = G__19634;
chunk__19626_19630 = G__19635;
count__19627_19631 = G__19636;
i__19628_19632 = G__19637;
continue;
}
} else
{var temp__4092__auto___19638 = cljs.core.seq.call(null,seq__19625_19629);if(temp__4092__auto___19638)
{var seq__19625_19639__$1 = temp__4092__auto___19638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19625_19639__$1))
{var c__4015__auto___19640 = cljs.core.chunk_first.call(null,seq__19625_19639__$1);{
var G__19641 = cljs.core.chunk_rest.call(null,seq__19625_19639__$1);
var G__19642 = c__4015__auto___19640;
var G__19643 = cljs.core.count.call(null,c__4015__auto___19640);
var G__19644 = 0;
seq__19625_19629 = G__19641;
chunk__19626_19630 = G__19642;
count__19627_19631 = G__19643;
i__19628_19632 = G__19644;
continue;
}
} else
{var k_19645 = cljs.core.first.call(null,seq__19625_19639__$1);(o1[k_19645] = (o2[k_19645]));
{
var G__19646 = cljs.core.next.call(null,seq__19625_19639__$1);
var G__19647 = null;
var G__19648 = 0;
var G__19649 = 0;
seq__19625_19629 = G__19646;
chunk__19626_19630 = G__19647;
count__19627_19631 = G__19648;
i__19628_19632 = G__19649;
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
var G__19650__delegate = function (o1,o2,more){return cljs.core.apply.call(null,js_merge,js_merge.call(null,o1,o2),more);
};
var G__19650 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19650__delegate.call(this,o1,o2,more);};
G__19650.cljs$lang$maxFixedArity = 2;
G__19650.cljs$lang$applyTo = (function (arglist__19651){
var o1 = cljs.core.first(arglist__19651);
arglist__19651 = cljs.core.next(arglist__19651);
var o2 = cljs.core.first(arglist__19651);
var more = cljs.core.rest(arglist__19651);
return G__19650__delegate(o1,o2,more);
});
G__19650.cljs$core$IFn$_invoke$arity$variadic = G__19650__delegate;
return G__19650;
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
var js_merge_nil__2 = (function (o1,o2){var seq__19656_19660 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__19657_19661 = null;var count__19658_19662 = 0;var i__19659_19663 = 0;while(true){
if((i__19659_19663 < count__19658_19662))
{var k_19664 = cljs.core._nth.call(null,chunk__19657_19661,i__19659_19663);if(cljs.core.not.call(null,(o1[k_19664])))
{(o1[k_19664] = (o2[k_19664]));
} else
{}
{
var G__19665 = seq__19656_19660;
var G__19666 = chunk__19657_19661;
var G__19667 = count__19658_19662;
var G__19668 = (i__19659_19663 + 1);
seq__19656_19660 = G__19665;
chunk__19657_19661 = G__19666;
count__19658_19662 = G__19667;
i__19659_19663 = G__19668;
continue;
}
} else
{var temp__4092__auto___19669 = cljs.core.seq.call(null,seq__19656_19660);if(temp__4092__auto___19669)
{var seq__19656_19670__$1 = temp__4092__auto___19669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19656_19670__$1))
{var c__4015__auto___19671 = cljs.core.chunk_first.call(null,seq__19656_19670__$1);{
var G__19672 = cljs.core.chunk_rest.call(null,seq__19656_19670__$1);
var G__19673 = c__4015__auto___19671;
var G__19674 = cljs.core.count.call(null,c__4015__auto___19671);
var G__19675 = 0;
seq__19656_19660 = G__19672;
chunk__19657_19661 = G__19673;
count__19658_19662 = G__19674;
i__19659_19663 = G__19675;
continue;
}
} else
{var k_19676 = cljs.core.first.call(null,seq__19656_19670__$1);if(cljs.core.not.call(null,(o1[k_19676])))
{(o1[k_19676] = (o2[k_19676]));
} else
{}
{
var G__19677 = cljs.core.next.call(null,seq__19656_19670__$1);
var G__19678 = null;
var G__19679 = 0;
var G__19680 = 0;
seq__19656_19660 = G__19677;
chunk__19657_19661 = G__19678;
count__19658_19662 = G__19679;
i__19659_19663 = G__19680;
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
var G__19681__delegate = function (o1,o2,more){while(true){
js_merge_nil.call(null,o1,o2);
if(cljs.core.truth_(more))
{{
var G__19682 = js_merge_nil.call(null,o1,o2);
var G__19683 = cljs.core.first.call(null,more);
var G__19684 = cljs.core.next.call(null,more);
o1 = G__19682;
o2 = G__19683;
more = G__19684;
continue;
}
} else
{return o1;
}
break;
}
};
var G__19681 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19681__delegate.call(this,o1,o2,more);};
G__19681.cljs$lang$maxFixedArity = 2;
G__19681.cljs$lang$applyTo = (function (arglist__19685){
var o1 = cljs.core.first(arglist__19685);
arglist__19685 = cljs.core.next(arglist__19685);
var o2 = cljs.core.first(arglist__19685);
var more = cljs.core.rest(arglist__19685);
return G__19681__delegate(o1,o2,more);
});
G__19681.cljs$core$IFn$_invoke$arity$variadic = G__19681__delegate;
return G__19681;
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
{var obj19689 = {};return obj19689;
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
var js_deep_extend__4 = (function (to,from,visited,visitedlu){var seq__19694_19698 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,from));var chunk__19695_19699 = null;var count__19696_19700 = 0;var i__19697_19701 = 0;while(true){
if((i__19697_19701 < count__19696_19700))
{var k_19702 = cljs.core._nth.call(null,chunk__19695_19699,i__19697_19701);var v_19703 = (from[k_19702]);var vn_19704 = purnam.cljs.js_initial_value.call(null,v_19703);if(cljs.core.not_EQ_.call(null,v_19703,vn_19704))
{var i_19705 = visited.indexOf(v_19703);if(cljs.core._EQ_.call(null,-1,i_19705))
{visited.push(v_19703);
visitedlu.push(vn_19704);
js_deep_extend.call(null,vn_19704,v_19703,visited,visitedlu);
(to[k_19702] = vn_19704);
} else
{(to[k_19702] = (visitedlu[i_19705]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_19702] = v_19703);
} else
{}
}
{
var G__19706 = seq__19694_19698;
var G__19707 = chunk__19695_19699;
var G__19708 = count__19696_19700;
var G__19709 = (i__19697_19701 + 1);
seq__19694_19698 = G__19706;
chunk__19695_19699 = G__19707;
count__19696_19700 = G__19708;
i__19697_19701 = G__19709;
continue;
}
} else
{var temp__4092__auto___19710 = cljs.core.seq.call(null,seq__19694_19698);if(temp__4092__auto___19710)
{var seq__19694_19711__$1 = temp__4092__auto___19710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19694_19711__$1))
{var c__4015__auto___19712 = cljs.core.chunk_first.call(null,seq__19694_19711__$1);{
var G__19713 = cljs.core.chunk_rest.call(null,seq__19694_19711__$1);
var G__19714 = c__4015__auto___19712;
var G__19715 = cljs.core.count.call(null,c__4015__auto___19712);
var G__19716 = 0;
seq__19694_19698 = G__19713;
chunk__19695_19699 = G__19714;
count__19696_19700 = G__19715;
i__19697_19701 = G__19716;
continue;
}
} else
{var k_19717 = cljs.core.first.call(null,seq__19694_19711__$1);var v_19718 = (from[k_19717]);var vn_19719 = purnam.cljs.js_initial_value.call(null,v_19718);if(cljs.core.not_EQ_.call(null,v_19718,vn_19719))
{var i_19720 = visited.indexOf(v_19718);if(cljs.core._EQ_.call(null,-1,i_19720))
{visited.push(v_19718);
visitedlu.push(vn_19719);
js_deep_extend.call(null,vn_19719,v_19718,visited,visitedlu);
(to[k_19717] = vn_19719);
} else
{(to[k_19717] = (visitedlu[i_19720]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_19717] = v_19718);
} else
{}
}
{
var G__19721 = cljs.core.next.call(null,seq__19694_19711__$1);
var G__19722 = null;
var G__19723 = 0;
var G__19724 = 0;
seq__19694_19698 = G__19721;
chunk__19695_19699 = G__19722;
count__19696_19700 = G__19723;
i__19697_19701 = G__19724;
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