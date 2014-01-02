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
purnam.cljs.nested_val = (function nested_val(p__19705,val){var vec__19709 = p__19705;var k = cljs.core.nth.call(null,vec__19709,0,null);var ks = cljs.core.nthnext.call(null,vec__19709,1);if((k == null))
{return val;
} else
{var o = (function (){var obj19711 = {};return obj19711;
})();(o[k] = nested_val.call(null,ks,val));
return o;
}
});
purnam.cljs.nested_delete = (function nested_delete(p__19712,val){var vec__19714 = p__19712;var k = cljs.core.nth.call(null,vec__19714,0,null);var ks = cljs.core.nthnext.call(null,vec__19714,1);if((ks == null))
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
var aset_in__3 = (function (var$,arr,val){var vec__19716 = arr;var k = cljs.core.nth.call(null,vec__19716,0,null);var ks = cljs.core.nthnext.call(null,vec__19716,1);if((k == null))
{} else
{if(cljs.core.empty_QMARK_.call(null,ks))
{if(cljs.core.truth_(val))
{(var$[k] = val);
} else
{delete var$[k];
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4090__auto___19717 = (var$[k]);if(cljs.core.truth_(temp__4090__auto___19717))
{var svar_19718 = temp__4090__auto___19717;aset_in.call(null,svar_19718,ks,val);
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
{var vec__19720 = temp__4090__auto__;var _ = cljs.core.nth.call(null,vec__19720,0,null);var n = cljs.core.nth.call(null,vec__19720,1,null);return n;
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
var G__19721__delegate = function (o,k,v,more){while(true){
js_assoc.call(null,o,k,v);
if(cljs.core.truth_(more))
{{
var G__19722 = o;
var G__19723 = cljs.core.first.call(null,more);
var G__19724 = cljs.core.second.call(null,more);
var G__19725 = cljs.core.nnext.call(null,more);
o = G__19722;
k = G__19723;
v = G__19724;
more = G__19725;
continue;
}
} else
{return o;
}
break;
}
};
var G__19721 = function (o,k,v,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19721__delegate.call(this,o,k,v,more);};
G__19721.cljs$lang$maxFixedArity = 3;
G__19721.cljs$lang$applyTo = (function (arglist__19726){
var o = cljs.core.first(arglist__19726);
arglist__19726 = cljs.core.next(arglist__19726);
var k = cljs.core.first(arglist__19726);
arglist__19726 = cljs.core.next(arglist__19726);
var v = cljs.core.first(arglist__19726);
var more = cljs.core.rest(arglist__19726);
return G__19721__delegate(o,k,v,more);
});
G__19721.cljs$core$IFn$_invoke$arity$variadic = G__19721__delegate;
return G__19721;
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
var G__19727 = o;
var G__19728 = cljs.core.first.call(null,more);
var G__19729 = cljs.core.next.call(null,more);
o = G__19727;
k = G__19728;
more = G__19729;
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
js_dissoc.cljs$lang$applyTo = (function (arglist__19730){
var o = cljs.core.first(arglist__19730);
arglist__19730 = cljs.core.next(arglist__19730);
var k = cljs.core.first(arglist__19730);
var more = cljs.core.rest(arglist__19730);
return js_dissoc__delegate(o,k,more);
});
js_dissoc.cljs$core$IFn$_invoke$arity$variadic = js_dissoc__delegate;
return js_dissoc;
})()
;
purnam.cljs.js_empty = (function js_empty(o){var G__19736_19741 = goog.typeOf(o);if(cljs.core._EQ_.call(null,"array",G__19736_19741))
{(o["length"] = 0);
} else
{if(cljs.core._EQ_.call(null,"object",G__19736_19741))
{var seq__19737_19742 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o));var chunk__19738_19743 = null;var count__19739_19744 = 0;var i__19740_19745 = 0;while(true){
if((i__19740_19745 < count__19739_19744))
{var k_19746 = cljs.core._nth.call(null,chunk__19738_19743,i__19740_19745);delete o[k_19746];
{
var G__19747 = seq__19737_19742;
var G__19748 = chunk__19738_19743;
var G__19749 = count__19739_19744;
var G__19750 = (i__19740_19745 + 1);
seq__19737_19742 = G__19747;
chunk__19738_19743 = G__19748;
count__19739_19744 = G__19749;
i__19740_19745 = G__19750;
continue;
}
} else
{var temp__4092__auto___19751 = cljs.core.seq.call(null,seq__19737_19742);if(temp__4092__auto___19751)
{var seq__19737_19752__$1 = temp__4092__auto___19751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19737_19752__$1))
{var c__4015__auto___19753 = cljs.core.chunk_first.call(null,seq__19737_19752__$1);{
var G__19754 = cljs.core.chunk_rest.call(null,seq__19737_19752__$1);
var G__19755 = c__4015__auto___19753;
var G__19756 = cljs.core.count.call(null,c__4015__auto___19753);
var G__19757 = 0;
seq__19737_19742 = G__19754;
chunk__19738_19743 = G__19755;
count__19739_19744 = G__19756;
i__19740_19745 = G__19757;
continue;
}
} else
{var k_19758 = cljs.core.first.call(null,seq__19737_19752__$1);delete o[k_19758];
{
var G__19759 = cljs.core.next.call(null,seq__19737_19752__$1);
var G__19760 = null;
var G__19761 = 0;
var G__19762 = 0;
seq__19737_19742 = G__19759;
chunk__19738_19743 = G__19760;
count__19739_19744 = G__19761;
i__19740_19745 = G__19762;
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
var js_merge__2 = (function (o1,o2){var seq__19767_19771 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__19768_19772 = null;var count__19769_19773 = 0;var i__19770_19774 = 0;while(true){
if((i__19770_19774 < count__19769_19773))
{var k_19775 = cljs.core._nth.call(null,chunk__19768_19772,i__19770_19774);(o1[k_19775] = (o2[k_19775]));
{
var G__19776 = seq__19767_19771;
var G__19777 = chunk__19768_19772;
var G__19778 = count__19769_19773;
var G__19779 = (i__19770_19774 + 1);
seq__19767_19771 = G__19776;
chunk__19768_19772 = G__19777;
count__19769_19773 = G__19778;
i__19770_19774 = G__19779;
continue;
}
} else
{var temp__4092__auto___19780 = cljs.core.seq.call(null,seq__19767_19771);if(temp__4092__auto___19780)
{var seq__19767_19781__$1 = temp__4092__auto___19780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19767_19781__$1))
{var c__4015__auto___19782 = cljs.core.chunk_first.call(null,seq__19767_19781__$1);{
var G__19783 = cljs.core.chunk_rest.call(null,seq__19767_19781__$1);
var G__19784 = c__4015__auto___19782;
var G__19785 = cljs.core.count.call(null,c__4015__auto___19782);
var G__19786 = 0;
seq__19767_19771 = G__19783;
chunk__19768_19772 = G__19784;
count__19769_19773 = G__19785;
i__19770_19774 = G__19786;
continue;
}
} else
{var k_19787 = cljs.core.first.call(null,seq__19767_19781__$1);(o1[k_19787] = (o2[k_19787]));
{
var G__19788 = cljs.core.next.call(null,seq__19767_19781__$1);
var G__19789 = null;
var G__19790 = 0;
var G__19791 = 0;
seq__19767_19771 = G__19788;
chunk__19768_19772 = G__19789;
count__19769_19773 = G__19790;
i__19770_19774 = G__19791;
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
var G__19792__delegate = function (o1,o2,more){return cljs.core.apply.call(null,js_merge,js_merge.call(null,o1,o2),more);
};
var G__19792 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19792__delegate.call(this,o1,o2,more);};
G__19792.cljs$lang$maxFixedArity = 2;
G__19792.cljs$lang$applyTo = (function (arglist__19793){
var o1 = cljs.core.first(arglist__19793);
arglist__19793 = cljs.core.next(arglist__19793);
var o2 = cljs.core.first(arglist__19793);
var more = cljs.core.rest(arglist__19793);
return G__19792__delegate(o1,o2,more);
});
G__19792.cljs$core$IFn$_invoke$arity$variadic = G__19792__delegate;
return G__19792;
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
var js_merge_nil__2 = (function (o1,o2){var seq__19798_19802 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__19799_19803 = null;var count__19800_19804 = 0;var i__19801_19805 = 0;while(true){
if((i__19801_19805 < count__19800_19804))
{var k_19806 = cljs.core._nth.call(null,chunk__19799_19803,i__19801_19805);if(cljs.core.not.call(null,(o1[k_19806])))
{(o1[k_19806] = (o2[k_19806]));
} else
{}
{
var G__19807 = seq__19798_19802;
var G__19808 = chunk__19799_19803;
var G__19809 = count__19800_19804;
var G__19810 = (i__19801_19805 + 1);
seq__19798_19802 = G__19807;
chunk__19799_19803 = G__19808;
count__19800_19804 = G__19809;
i__19801_19805 = G__19810;
continue;
}
} else
{var temp__4092__auto___19811 = cljs.core.seq.call(null,seq__19798_19802);if(temp__4092__auto___19811)
{var seq__19798_19812__$1 = temp__4092__auto___19811;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19798_19812__$1))
{var c__4015__auto___19813 = cljs.core.chunk_first.call(null,seq__19798_19812__$1);{
var G__19814 = cljs.core.chunk_rest.call(null,seq__19798_19812__$1);
var G__19815 = c__4015__auto___19813;
var G__19816 = cljs.core.count.call(null,c__4015__auto___19813);
var G__19817 = 0;
seq__19798_19802 = G__19814;
chunk__19799_19803 = G__19815;
count__19800_19804 = G__19816;
i__19801_19805 = G__19817;
continue;
}
} else
{var k_19818 = cljs.core.first.call(null,seq__19798_19812__$1);if(cljs.core.not.call(null,(o1[k_19818])))
{(o1[k_19818] = (o2[k_19818]));
} else
{}
{
var G__19819 = cljs.core.next.call(null,seq__19798_19812__$1);
var G__19820 = null;
var G__19821 = 0;
var G__19822 = 0;
seq__19798_19802 = G__19819;
chunk__19799_19803 = G__19820;
count__19800_19804 = G__19821;
i__19801_19805 = G__19822;
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
var G__19823__delegate = function (o1,o2,more){while(true){
js_merge_nil.call(null,o1,o2);
if(cljs.core.truth_(more))
{{
var G__19824 = js_merge_nil.call(null,o1,o2);
var G__19825 = cljs.core.first.call(null,more);
var G__19826 = cljs.core.next.call(null,more);
o1 = G__19824;
o2 = G__19825;
more = G__19826;
continue;
}
} else
{return o1;
}
break;
}
};
var G__19823 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19823__delegate.call(this,o1,o2,more);};
G__19823.cljs$lang$maxFixedArity = 2;
G__19823.cljs$lang$applyTo = (function (arglist__19827){
var o1 = cljs.core.first(arglist__19827);
arglist__19827 = cljs.core.next(arglist__19827);
var o2 = cljs.core.first(arglist__19827);
var more = cljs.core.rest(arglist__19827);
return G__19823__delegate(o1,o2,more);
});
G__19823.cljs$core$IFn$_invoke$arity$variadic = G__19823__delegate;
return G__19823;
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
{var obj19831 = {};return obj19831;
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
var js_deep_extend__4 = (function (to,from,visited,visitedlu){var seq__19836_19840 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,from));var chunk__19837_19841 = null;var count__19838_19842 = 0;var i__19839_19843 = 0;while(true){
if((i__19839_19843 < count__19838_19842))
{var k_19844 = cljs.core._nth.call(null,chunk__19837_19841,i__19839_19843);var v_19845 = (from[k_19844]);var vn_19846 = purnam.cljs.js_initial_value.call(null,v_19845);if(cljs.core.not_EQ_.call(null,v_19845,vn_19846))
{var i_19847 = visited.indexOf(v_19845);if(cljs.core._EQ_.call(null,-1,i_19847))
{visited.push(v_19845);
visitedlu.push(vn_19846);
js_deep_extend.call(null,vn_19846,v_19845,visited,visitedlu);
(to[k_19844] = vn_19846);
} else
{(to[k_19844] = (visitedlu[i_19847]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_19844] = v_19845);
} else
{}
}
{
var G__19848 = seq__19836_19840;
var G__19849 = chunk__19837_19841;
var G__19850 = count__19838_19842;
var G__19851 = (i__19839_19843 + 1);
seq__19836_19840 = G__19848;
chunk__19837_19841 = G__19849;
count__19838_19842 = G__19850;
i__19839_19843 = G__19851;
continue;
}
} else
{var temp__4092__auto___19852 = cljs.core.seq.call(null,seq__19836_19840);if(temp__4092__auto___19852)
{var seq__19836_19853__$1 = temp__4092__auto___19852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19836_19853__$1))
{var c__4015__auto___19854 = cljs.core.chunk_first.call(null,seq__19836_19853__$1);{
var G__19855 = cljs.core.chunk_rest.call(null,seq__19836_19853__$1);
var G__19856 = c__4015__auto___19854;
var G__19857 = cljs.core.count.call(null,c__4015__auto___19854);
var G__19858 = 0;
seq__19836_19840 = G__19855;
chunk__19837_19841 = G__19856;
count__19838_19842 = G__19857;
i__19839_19843 = G__19858;
continue;
}
} else
{var k_19859 = cljs.core.first.call(null,seq__19836_19853__$1);var v_19860 = (from[k_19859]);var vn_19861 = purnam.cljs.js_initial_value.call(null,v_19860);if(cljs.core.not_EQ_.call(null,v_19860,vn_19861))
{var i_19862 = visited.indexOf(v_19860);if(cljs.core._EQ_.call(null,-1,i_19862))
{visited.push(v_19860);
visitedlu.push(vn_19861);
js_deep_extend.call(null,vn_19861,v_19860,visited,visitedlu);
(to[k_19859] = vn_19861);
} else
{(to[k_19859] = (visitedlu[i_19862]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_19859] = v_19860);
} else
{}
}
{
var G__19863 = cljs.core.next.call(null,seq__19836_19853__$1);
var G__19864 = null;
var G__19865 = 0;
var G__19866 = 0;
seq__19836_19840 = G__19863;
chunk__19837_19841 = G__19864;
count__19838_19842 = G__19865;
i__19839_19843 = G__19866;
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