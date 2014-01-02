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
purnam.cljs.nested_val = (function nested_val(p__33773,val){var vec__33777 = p__33773;var k = cljs.core.nth.call(null,vec__33777,0,null);var ks = cljs.core.nthnext.call(null,vec__33777,1);if((k == null))
{return val;
} else
{var o = (function (){var obj33779 = {};return obj33779;
})();(o[k] = nested_val.call(null,ks,val));
return o;
}
});
purnam.cljs.nested_delete = (function nested_delete(p__33780,val){var vec__33782 = p__33780;var k = cljs.core.nth.call(null,vec__33782,0,null);var ks = cljs.core.nthnext.call(null,vec__33782,1);if((ks == null))
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
var aset_in__3 = (function (var$,arr,val){var vec__33784 = arr;var k = cljs.core.nth.call(null,vec__33784,0,null);var ks = cljs.core.nthnext.call(null,vec__33784,1);if((k == null))
{} else
{if(cljs.core.empty_QMARK_.call(null,ks))
{if(cljs.core.truth_(val))
{(var$[k] = val);
} else
{delete var$[k];
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4090__auto___33785 = (var$[k]);if(cljs.core.truth_(temp__4090__auto___33785))
{var svar_33786 = temp__4090__auto___33785;aset_in.call(null,svar_33786,ks,val);
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
{var vec__33788 = temp__4090__auto__;var _ = cljs.core.nth.call(null,vec__33788,0,null);var n = cljs.core.nth.call(null,vec__33788,1,null);return n;
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
var G__33789__delegate = function (o,k,v,more){while(true){
js_assoc.call(null,o,k,v);
if(cljs.core.truth_(more))
{{
var G__33790 = o;
var G__33791 = cljs.core.first.call(null,more);
var G__33792 = cljs.core.second.call(null,more);
var G__33793 = cljs.core.nnext.call(null,more);
o = G__33790;
k = G__33791;
v = G__33792;
more = G__33793;
continue;
}
} else
{return o;
}
break;
}
};
var G__33789 = function (o,k,v,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__33789__delegate.call(this,o,k,v,more);};
G__33789.cljs$lang$maxFixedArity = 3;
G__33789.cljs$lang$applyTo = (function (arglist__33794){
var o = cljs.core.first(arglist__33794);
arglist__33794 = cljs.core.next(arglist__33794);
var k = cljs.core.first(arglist__33794);
arglist__33794 = cljs.core.next(arglist__33794);
var v = cljs.core.first(arglist__33794);
var more = cljs.core.rest(arglist__33794);
return G__33789__delegate(o,k,v,more);
});
G__33789.cljs$core$IFn$_invoke$arity$variadic = G__33789__delegate;
return G__33789;
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
var G__33795 = o;
var G__33796 = cljs.core.first.call(null,more);
var G__33797 = cljs.core.next.call(null,more);
o = G__33795;
k = G__33796;
more = G__33797;
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
js_dissoc.cljs$lang$applyTo = (function (arglist__33798){
var o = cljs.core.first(arglist__33798);
arglist__33798 = cljs.core.next(arglist__33798);
var k = cljs.core.first(arglist__33798);
var more = cljs.core.rest(arglist__33798);
return js_dissoc__delegate(o,k,more);
});
js_dissoc.cljs$core$IFn$_invoke$arity$variadic = js_dissoc__delegate;
return js_dissoc;
})()
;
purnam.cljs.js_empty = (function js_empty(o){var G__33804_33809 = goog.typeOf(o);if(cljs.core._EQ_.call(null,"array",G__33804_33809))
{(o["length"] = 0);
} else
{if(cljs.core._EQ_.call(null,"object",G__33804_33809))
{var seq__33805_33810 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o));var chunk__33806_33811 = null;var count__33807_33812 = 0;var i__33808_33813 = 0;while(true){
if((i__33808_33813 < count__33807_33812))
{var k_33814 = cljs.core._nth.call(null,chunk__33806_33811,i__33808_33813);delete o[k_33814];
{
var G__33815 = seq__33805_33810;
var G__33816 = chunk__33806_33811;
var G__33817 = count__33807_33812;
var G__33818 = (i__33808_33813 + 1);
seq__33805_33810 = G__33815;
chunk__33806_33811 = G__33816;
count__33807_33812 = G__33817;
i__33808_33813 = G__33818;
continue;
}
} else
{var temp__4092__auto___33819 = cljs.core.seq.call(null,seq__33805_33810);if(temp__4092__auto___33819)
{var seq__33805_33820__$1 = temp__4092__auto___33819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33805_33820__$1))
{var c__4015__auto___33821 = cljs.core.chunk_first.call(null,seq__33805_33820__$1);{
var G__33822 = cljs.core.chunk_rest.call(null,seq__33805_33820__$1);
var G__33823 = c__4015__auto___33821;
var G__33824 = cljs.core.count.call(null,c__4015__auto___33821);
var G__33825 = 0;
seq__33805_33810 = G__33822;
chunk__33806_33811 = G__33823;
count__33807_33812 = G__33824;
i__33808_33813 = G__33825;
continue;
}
} else
{var k_33826 = cljs.core.first.call(null,seq__33805_33820__$1);delete o[k_33826];
{
var G__33827 = cljs.core.next.call(null,seq__33805_33820__$1);
var G__33828 = null;
var G__33829 = 0;
var G__33830 = 0;
seq__33805_33810 = G__33827;
chunk__33806_33811 = G__33828;
count__33807_33812 = G__33829;
i__33808_33813 = G__33830;
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
var js_merge__2 = (function (o1,o2){var seq__33835_33839 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__33836_33840 = null;var count__33837_33841 = 0;var i__33838_33842 = 0;while(true){
if((i__33838_33842 < count__33837_33841))
{var k_33843 = cljs.core._nth.call(null,chunk__33836_33840,i__33838_33842);(o1[k_33843] = (o2[k_33843]));
{
var G__33844 = seq__33835_33839;
var G__33845 = chunk__33836_33840;
var G__33846 = count__33837_33841;
var G__33847 = (i__33838_33842 + 1);
seq__33835_33839 = G__33844;
chunk__33836_33840 = G__33845;
count__33837_33841 = G__33846;
i__33838_33842 = G__33847;
continue;
}
} else
{var temp__4092__auto___33848 = cljs.core.seq.call(null,seq__33835_33839);if(temp__4092__auto___33848)
{var seq__33835_33849__$1 = temp__4092__auto___33848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33835_33849__$1))
{var c__4015__auto___33850 = cljs.core.chunk_first.call(null,seq__33835_33849__$1);{
var G__33851 = cljs.core.chunk_rest.call(null,seq__33835_33849__$1);
var G__33852 = c__4015__auto___33850;
var G__33853 = cljs.core.count.call(null,c__4015__auto___33850);
var G__33854 = 0;
seq__33835_33839 = G__33851;
chunk__33836_33840 = G__33852;
count__33837_33841 = G__33853;
i__33838_33842 = G__33854;
continue;
}
} else
{var k_33855 = cljs.core.first.call(null,seq__33835_33849__$1);(o1[k_33855] = (o2[k_33855]));
{
var G__33856 = cljs.core.next.call(null,seq__33835_33849__$1);
var G__33857 = null;
var G__33858 = 0;
var G__33859 = 0;
seq__33835_33839 = G__33856;
chunk__33836_33840 = G__33857;
count__33837_33841 = G__33858;
i__33838_33842 = G__33859;
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
var G__33860__delegate = function (o1,o2,more){return cljs.core.apply.call(null,js_merge,js_merge.call(null,o1,o2),more);
};
var G__33860 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__33860__delegate.call(this,o1,o2,more);};
G__33860.cljs$lang$maxFixedArity = 2;
G__33860.cljs$lang$applyTo = (function (arglist__33861){
var o1 = cljs.core.first(arglist__33861);
arglist__33861 = cljs.core.next(arglist__33861);
var o2 = cljs.core.first(arglist__33861);
var more = cljs.core.rest(arglist__33861);
return G__33860__delegate(o1,o2,more);
});
G__33860.cljs$core$IFn$_invoke$arity$variadic = G__33860__delegate;
return G__33860;
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
var js_merge_nil__2 = (function (o1,o2){var seq__33866_33870 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__33867_33871 = null;var count__33868_33872 = 0;var i__33869_33873 = 0;while(true){
if((i__33869_33873 < count__33868_33872))
{var k_33874 = cljs.core._nth.call(null,chunk__33867_33871,i__33869_33873);if(cljs.core.not.call(null,(o1[k_33874])))
{(o1[k_33874] = (o2[k_33874]));
} else
{}
{
var G__33875 = seq__33866_33870;
var G__33876 = chunk__33867_33871;
var G__33877 = count__33868_33872;
var G__33878 = (i__33869_33873 + 1);
seq__33866_33870 = G__33875;
chunk__33867_33871 = G__33876;
count__33868_33872 = G__33877;
i__33869_33873 = G__33878;
continue;
}
} else
{var temp__4092__auto___33879 = cljs.core.seq.call(null,seq__33866_33870);if(temp__4092__auto___33879)
{var seq__33866_33880__$1 = temp__4092__auto___33879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33866_33880__$1))
{var c__4015__auto___33881 = cljs.core.chunk_first.call(null,seq__33866_33880__$1);{
var G__33882 = cljs.core.chunk_rest.call(null,seq__33866_33880__$1);
var G__33883 = c__4015__auto___33881;
var G__33884 = cljs.core.count.call(null,c__4015__auto___33881);
var G__33885 = 0;
seq__33866_33870 = G__33882;
chunk__33867_33871 = G__33883;
count__33868_33872 = G__33884;
i__33869_33873 = G__33885;
continue;
}
} else
{var k_33886 = cljs.core.first.call(null,seq__33866_33880__$1);if(cljs.core.not.call(null,(o1[k_33886])))
{(o1[k_33886] = (o2[k_33886]));
} else
{}
{
var G__33887 = cljs.core.next.call(null,seq__33866_33880__$1);
var G__33888 = null;
var G__33889 = 0;
var G__33890 = 0;
seq__33866_33870 = G__33887;
chunk__33867_33871 = G__33888;
count__33868_33872 = G__33889;
i__33869_33873 = G__33890;
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
var G__33891__delegate = function (o1,o2,more){while(true){
js_merge_nil.call(null,o1,o2);
if(cljs.core.truth_(more))
{{
var G__33892 = js_merge_nil.call(null,o1,o2);
var G__33893 = cljs.core.first.call(null,more);
var G__33894 = cljs.core.next.call(null,more);
o1 = G__33892;
o2 = G__33893;
more = G__33894;
continue;
}
} else
{return o1;
}
break;
}
};
var G__33891 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__33891__delegate.call(this,o1,o2,more);};
G__33891.cljs$lang$maxFixedArity = 2;
G__33891.cljs$lang$applyTo = (function (arglist__33895){
var o1 = cljs.core.first(arglist__33895);
arglist__33895 = cljs.core.next(arglist__33895);
var o2 = cljs.core.first(arglist__33895);
var more = cljs.core.rest(arglist__33895);
return G__33891__delegate(o1,o2,more);
});
G__33891.cljs$core$IFn$_invoke$arity$variadic = G__33891__delegate;
return G__33891;
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
{var obj33899 = {};return obj33899;
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
var js_deep_extend__4 = (function (to,from,visited,visitedlu){var seq__33904_33908 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,from));var chunk__33905_33909 = null;var count__33906_33910 = 0;var i__33907_33911 = 0;while(true){
if((i__33907_33911 < count__33906_33910))
{var k_33912 = cljs.core._nth.call(null,chunk__33905_33909,i__33907_33911);var v_33913 = (from[k_33912]);var vn_33914 = purnam.cljs.js_initial_value.call(null,v_33913);if(cljs.core.not_EQ_.call(null,v_33913,vn_33914))
{var i_33915 = visited.indexOf(v_33913);if(cljs.core._EQ_.call(null,-1,i_33915))
{visited.push(v_33913);
visitedlu.push(vn_33914);
js_deep_extend.call(null,vn_33914,v_33913,visited,visitedlu);
(to[k_33912] = vn_33914);
} else
{(to[k_33912] = (visitedlu[i_33915]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_33912] = v_33913);
} else
{}
}
{
var G__33916 = seq__33904_33908;
var G__33917 = chunk__33905_33909;
var G__33918 = count__33906_33910;
var G__33919 = (i__33907_33911 + 1);
seq__33904_33908 = G__33916;
chunk__33905_33909 = G__33917;
count__33906_33910 = G__33918;
i__33907_33911 = G__33919;
continue;
}
} else
{var temp__4092__auto___33920 = cljs.core.seq.call(null,seq__33904_33908);if(temp__4092__auto___33920)
{var seq__33904_33921__$1 = temp__4092__auto___33920;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33904_33921__$1))
{var c__4015__auto___33922 = cljs.core.chunk_first.call(null,seq__33904_33921__$1);{
var G__33923 = cljs.core.chunk_rest.call(null,seq__33904_33921__$1);
var G__33924 = c__4015__auto___33922;
var G__33925 = cljs.core.count.call(null,c__4015__auto___33922);
var G__33926 = 0;
seq__33904_33908 = G__33923;
chunk__33905_33909 = G__33924;
count__33906_33910 = G__33925;
i__33907_33911 = G__33926;
continue;
}
} else
{var k_33927 = cljs.core.first.call(null,seq__33904_33921__$1);var v_33928 = (from[k_33927]);var vn_33929 = purnam.cljs.js_initial_value.call(null,v_33928);if(cljs.core.not_EQ_.call(null,v_33928,vn_33929))
{var i_33930 = visited.indexOf(v_33928);if(cljs.core._EQ_.call(null,-1,i_33930))
{visited.push(v_33928);
visitedlu.push(vn_33929);
js_deep_extend.call(null,vn_33929,v_33928,visited,visitedlu);
(to[k_33927] = vn_33929);
} else
{(to[k_33927] = (visitedlu[i_33930]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_33927] = v_33928);
} else
{}
}
{
var G__33931 = cljs.core.next.call(null,seq__33904_33921__$1);
var G__33932 = null;
var G__33933 = 0;
var G__33934 = 0;
seq__33904_33908 = G__33931;
chunk__33905_33909 = G__33932;
count__33906_33910 = G__33933;
i__33907_33911 = G__33934;
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
