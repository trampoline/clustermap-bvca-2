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
purnam.cljs.nested_val = (function nested_val(p__49054,val){var vec__49058 = p__49054;var k = cljs.core.nth.call(null,vec__49058,0,null);var ks = cljs.core.nthnext.call(null,vec__49058,1);if((k == null))
{return val;
} else
{var o = (function (){var obj49060 = {};return obj49060;
})();(o[k] = nested_val.call(null,ks,val));
return o;
}
});
purnam.cljs.nested_delete = (function nested_delete(p__49061,val){var vec__49063 = p__49061;var k = cljs.core.nth.call(null,vec__49063,0,null);var ks = cljs.core.nthnext.call(null,vec__49063,1);if((ks == null))
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
var aset_in__3 = (function (var$,arr,val){var vec__49065 = arr;var k = cljs.core.nth.call(null,vec__49065,0,null);var ks = cljs.core.nthnext.call(null,vec__49065,1);if((k == null))
{} else
{if(cljs.core.empty_QMARK_.call(null,ks))
{if(cljs.core.truth_(val))
{(var$[k] = val);
} else
{delete var$[k];
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4090__auto___49066 = (var$[k]);if(cljs.core.truth_(temp__4090__auto___49066))
{var svar_49067 = temp__4090__auto___49066;aset_in.call(null,svar_49067,ks,val);
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
{var vec__49069 = temp__4090__auto__;var _ = cljs.core.nth.call(null,vec__49069,0,null);var n = cljs.core.nth.call(null,vec__49069,1,null);return n;
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
var G__49070__delegate = function (o,k,v,more){while(true){
js_assoc.call(null,o,k,v);
if(cljs.core.truth_(more))
{{
var G__49071 = o;
var G__49072 = cljs.core.first.call(null,more);
var G__49073 = cljs.core.second.call(null,more);
var G__49074 = cljs.core.nnext.call(null,more);
o = G__49071;
k = G__49072;
v = G__49073;
more = G__49074;
continue;
}
} else
{return o;
}
break;
}
};
var G__49070 = function (o,k,v,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__49070__delegate.call(this,o,k,v,more);};
G__49070.cljs$lang$maxFixedArity = 3;
G__49070.cljs$lang$applyTo = (function (arglist__49075){
var o = cljs.core.first(arglist__49075);
arglist__49075 = cljs.core.next(arglist__49075);
var k = cljs.core.first(arglist__49075);
arglist__49075 = cljs.core.next(arglist__49075);
var v = cljs.core.first(arglist__49075);
var more = cljs.core.rest(arglist__49075);
return G__49070__delegate(o,k,v,more);
});
G__49070.cljs$core$IFn$_invoke$arity$variadic = G__49070__delegate;
return G__49070;
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
var G__49076 = o;
var G__49077 = cljs.core.first.call(null,more);
var G__49078 = cljs.core.next.call(null,more);
o = G__49076;
k = G__49077;
more = G__49078;
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
js_dissoc.cljs$lang$applyTo = (function (arglist__49079){
var o = cljs.core.first(arglist__49079);
arglist__49079 = cljs.core.next(arglist__49079);
var k = cljs.core.first(arglist__49079);
var more = cljs.core.rest(arglist__49079);
return js_dissoc__delegate(o,k,more);
});
js_dissoc.cljs$core$IFn$_invoke$arity$variadic = js_dissoc__delegate;
return js_dissoc;
})()
;
purnam.cljs.js_empty = (function js_empty(o){var G__49085_49090 = goog.typeOf(o);if(cljs.core._EQ_.call(null,"array",G__49085_49090))
{(o["length"] = 0);
} else
{if(cljs.core._EQ_.call(null,"object",G__49085_49090))
{var seq__49086_49091 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o));var chunk__49087_49092 = null;var count__49088_49093 = 0;var i__49089_49094 = 0;while(true){
if((i__49089_49094 < count__49088_49093))
{var k_49095 = cljs.core._nth.call(null,chunk__49087_49092,i__49089_49094);delete o[k_49095];
{
var G__49096 = seq__49086_49091;
var G__49097 = chunk__49087_49092;
var G__49098 = count__49088_49093;
var G__49099 = (i__49089_49094 + 1);
seq__49086_49091 = G__49096;
chunk__49087_49092 = G__49097;
count__49088_49093 = G__49098;
i__49089_49094 = G__49099;
continue;
}
} else
{var temp__4092__auto___49100 = cljs.core.seq.call(null,seq__49086_49091);if(temp__4092__auto___49100)
{var seq__49086_49101__$1 = temp__4092__auto___49100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49086_49101__$1))
{var c__4015__auto___49102 = cljs.core.chunk_first.call(null,seq__49086_49101__$1);{
var G__49103 = cljs.core.chunk_rest.call(null,seq__49086_49101__$1);
var G__49104 = c__4015__auto___49102;
var G__49105 = cljs.core.count.call(null,c__4015__auto___49102);
var G__49106 = 0;
seq__49086_49091 = G__49103;
chunk__49087_49092 = G__49104;
count__49088_49093 = G__49105;
i__49089_49094 = G__49106;
continue;
}
} else
{var k_49107 = cljs.core.first.call(null,seq__49086_49101__$1);delete o[k_49107];
{
var G__49108 = cljs.core.next.call(null,seq__49086_49101__$1);
var G__49109 = null;
var G__49110 = 0;
var G__49111 = 0;
seq__49086_49091 = G__49108;
chunk__49087_49092 = G__49109;
count__49088_49093 = G__49110;
i__49089_49094 = G__49111;
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
var js_merge__2 = (function (o1,o2){var seq__49116_49120 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__49117_49121 = null;var count__49118_49122 = 0;var i__49119_49123 = 0;while(true){
if((i__49119_49123 < count__49118_49122))
{var k_49124 = cljs.core._nth.call(null,chunk__49117_49121,i__49119_49123);(o1[k_49124] = (o2[k_49124]));
{
var G__49125 = seq__49116_49120;
var G__49126 = chunk__49117_49121;
var G__49127 = count__49118_49122;
var G__49128 = (i__49119_49123 + 1);
seq__49116_49120 = G__49125;
chunk__49117_49121 = G__49126;
count__49118_49122 = G__49127;
i__49119_49123 = G__49128;
continue;
}
} else
{var temp__4092__auto___49129 = cljs.core.seq.call(null,seq__49116_49120);if(temp__4092__auto___49129)
{var seq__49116_49130__$1 = temp__4092__auto___49129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49116_49130__$1))
{var c__4015__auto___49131 = cljs.core.chunk_first.call(null,seq__49116_49130__$1);{
var G__49132 = cljs.core.chunk_rest.call(null,seq__49116_49130__$1);
var G__49133 = c__4015__auto___49131;
var G__49134 = cljs.core.count.call(null,c__4015__auto___49131);
var G__49135 = 0;
seq__49116_49120 = G__49132;
chunk__49117_49121 = G__49133;
count__49118_49122 = G__49134;
i__49119_49123 = G__49135;
continue;
}
} else
{var k_49136 = cljs.core.first.call(null,seq__49116_49130__$1);(o1[k_49136] = (o2[k_49136]));
{
var G__49137 = cljs.core.next.call(null,seq__49116_49130__$1);
var G__49138 = null;
var G__49139 = 0;
var G__49140 = 0;
seq__49116_49120 = G__49137;
chunk__49117_49121 = G__49138;
count__49118_49122 = G__49139;
i__49119_49123 = G__49140;
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
var G__49141__delegate = function (o1,o2,more){return cljs.core.apply.call(null,js_merge,js_merge.call(null,o1,o2),more);
};
var G__49141 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__49141__delegate.call(this,o1,o2,more);};
G__49141.cljs$lang$maxFixedArity = 2;
G__49141.cljs$lang$applyTo = (function (arglist__49142){
var o1 = cljs.core.first(arglist__49142);
arglist__49142 = cljs.core.next(arglist__49142);
var o2 = cljs.core.first(arglist__49142);
var more = cljs.core.rest(arglist__49142);
return G__49141__delegate(o1,o2,more);
});
G__49141.cljs$core$IFn$_invoke$arity$variadic = G__49141__delegate;
return G__49141;
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
var js_merge_nil__2 = (function (o1,o2){var seq__49147_49151 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,o2));var chunk__49148_49152 = null;var count__49149_49153 = 0;var i__49150_49154 = 0;while(true){
if((i__49150_49154 < count__49149_49153))
{var k_49155 = cljs.core._nth.call(null,chunk__49148_49152,i__49150_49154);if(cljs.core.not.call(null,(o1[k_49155])))
{(o1[k_49155] = (o2[k_49155]));
} else
{}
{
var G__49156 = seq__49147_49151;
var G__49157 = chunk__49148_49152;
var G__49158 = count__49149_49153;
var G__49159 = (i__49150_49154 + 1);
seq__49147_49151 = G__49156;
chunk__49148_49152 = G__49157;
count__49149_49153 = G__49158;
i__49150_49154 = G__49159;
continue;
}
} else
{var temp__4092__auto___49160 = cljs.core.seq.call(null,seq__49147_49151);if(temp__4092__auto___49160)
{var seq__49147_49161__$1 = temp__4092__auto___49160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49147_49161__$1))
{var c__4015__auto___49162 = cljs.core.chunk_first.call(null,seq__49147_49161__$1);{
var G__49163 = cljs.core.chunk_rest.call(null,seq__49147_49161__$1);
var G__49164 = c__4015__auto___49162;
var G__49165 = cljs.core.count.call(null,c__4015__auto___49162);
var G__49166 = 0;
seq__49147_49151 = G__49163;
chunk__49148_49152 = G__49164;
count__49149_49153 = G__49165;
i__49150_49154 = G__49166;
continue;
}
} else
{var k_49167 = cljs.core.first.call(null,seq__49147_49161__$1);if(cljs.core.not.call(null,(o1[k_49167])))
{(o1[k_49167] = (o2[k_49167]));
} else
{}
{
var G__49168 = cljs.core.next.call(null,seq__49147_49161__$1);
var G__49169 = null;
var G__49170 = 0;
var G__49171 = 0;
seq__49147_49151 = G__49168;
chunk__49148_49152 = G__49169;
count__49149_49153 = G__49170;
i__49150_49154 = G__49171;
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
var G__49172__delegate = function (o1,o2,more){while(true){
js_merge_nil.call(null,o1,o2);
if(cljs.core.truth_(more))
{{
var G__49173 = js_merge_nil.call(null,o1,o2);
var G__49174 = cljs.core.first.call(null,more);
var G__49175 = cljs.core.next.call(null,more);
o1 = G__49173;
o2 = G__49174;
more = G__49175;
continue;
}
} else
{return o1;
}
break;
}
};
var G__49172 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__49172__delegate.call(this,o1,o2,more);};
G__49172.cljs$lang$maxFixedArity = 2;
G__49172.cljs$lang$applyTo = (function (arglist__49176){
var o1 = cljs.core.first(arglist__49176);
arglist__49176 = cljs.core.next(arglist__49176);
var o2 = cljs.core.first(arglist__49176);
var more = cljs.core.rest(arglist__49176);
return G__49172__delegate(o1,o2,more);
});
G__49172.cljs$core$IFn$_invoke$arity$variadic = G__49172__delegate;
return G__49172;
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
{var obj49180 = {};return obj49180;
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
var js_deep_extend__4 = (function (to,from,visited,visitedlu){var seq__49185_49189 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,from));var chunk__49186_49190 = null;var count__49187_49191 = 0;var i__49188_49192 = 0;while(true){
if((i__49188_49192 < count__49187_49191))
{var k_49193 = cljs.core._nth.call(null,chunk__49186_49190,i__49188_49192);var v_49194 = (from[k_49193]);var vn_49195 = purnam.cljs.js_initial_value.call(null,v_49194);if(cljs.core.not_EQ_.call(null,v_49194,vn_49195))
{var i_49196 = visited.indexOf(v_49194);if(cljs.core._EQ_.call(null,-1,i_49196))
{visited.push(v_49194);
visitedlu.push(vn_49195);
js_deep_extend.call(null,vn_49195,v_49194,visited,visitedlu);
(to[k_49193] = vn_49195);
} else
{(to[k_49193] = (visitedlu[i_49196]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_49193] = v_49194);
} else
{}
}
{
var G__49197 = seq__49185_49189;
var G__49198 = chunk__49186_49190;
var G__49199 = count__49187_49191;
var G__49200 = (i__49188_49192 + 1);
seq__49185_49189 = G__49197;
chunk__49186_49190 = G__49198;
count__49187_49191 = G__49199;
i__49188_49192 = G__49200;
continue;
}
} else
{var temp__4092__auto___49201 = cljs.core.seq.call(null,seq__49185_49189);if(temp__4092__auto___49201)
{var seq__49185_49202__$1 = temp__4092__auto___49201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49185_49202__$1))
{var c__4015__auto___49203 = cljs.core.chunk_first.call(null,seq__49185_49202__$1);{
var G__49204 = cljs.core.chunk_rest.call(null,seq__49185_49202__$1);
var G__49205 = c__4015__auto___49203;
var G__49206 = cljs.core.count.call(null,c__4015__auto___49203);
var G__49207 = 0;
seq__49185_49189 = G__49204;
chunk__49186_49190 = G__49205;
count__49187_49191 = G__49206;
i__49188_49192 = G__49207;
continue;
}
} else
{var k_49208 = cljs.core.first.call(null,seq__49185_49202__$1);var v_49209 = (from[k_49208]);var vn_49210 = purnam.cljs.js_initial_value.call(null,v_49209);if(cljs.core.not_EQ_.call(null,v_49209,vn_49210))
{var i_49211 = visited.indexOf(v_49209);if(cljs.core._EQ_.call(null,-1,i_49211))
{visited.push(v_49209);
visitedlu.push(vn_49210);
js_deep_extend.call(null,vn_49210,v_49209,visited,visitedlu);
(to[k_49208] = vn_49210);
} else
{(to[k_49208] = (visitedlu[i_49211]));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(to[k_49208] = v_49209);
} else
{}
}
{
var G__49212 = cljs.core.next.call(null,seq__49185_49202__$1);
var G__49213 = null;
var G__49214 = 0;
var G__49215 = 0;
seq__49185_49189 = G__49212;
chunk__49186_49190 = G__49213;
count__49187_49191 = G__49214;
i__49188_49192 = G__49215;
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
