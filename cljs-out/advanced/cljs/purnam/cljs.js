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
purnam.cljs.nested_val = (function nested_val(p__19072,val){var vec__19076 = p__19072;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19076,0,null);var ks = cljs.core.nthnext(vec__19076,1);if((k == null))
{return val;
} else
{var o = (function (){var obj19078 = {};return obj19078;
})();(o[k] = nested_val(ks,val));
return o;
}
});
purnam.cljs.nested_delete = (function nested_delete(p__19079,val){var vec__19081 = p__19079;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19081,0,null);var ks = cljs.core.nthnext(vec__19081,1);if((ks == null))
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
var aset_in__3 = (function (var$,arr,val){var vec__19083 = arr;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19083,0,null);var ks = cljs.core.nthnext(vec__19083,1);if((k == null))
{} else
{if(cljs.core.empty_QMARK_(ks))
{if(cljs.core.truth_(val))
{(var$[k] = val);
} else
{delete var$[k];
}
} else
{if(cljs.core.constant$keyword$6)
{var temp__4090__auto___19084 = (var$[k]);if(cljs.core.truth_(temp__4090__auto___19084))
{var svar_19085 = temp__4090__auto___19084;aset_in.cljs$core$IFn$_invoke$arity$3(svar_19085,ks,val);
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
{var vec__19087 = temp__4090__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19087,0,null);var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19087,1,null);return n;
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
var G__19088__delegate = function (o,k,v,more){while(true){
js_assoc.cljs$core$IFn$_invoke$arity$3(o,k,v);
if(cljs.core.truth_(more))
{{
var G__19089 = o;
var G__19090 = cljs.core.first(more);
var G__19091 = cljs.core.second(more);
var G__19092 = cljs.core.nnext(more);
o = G__19089;
k = G__19090;
v = G__19091;
more = G__19092;
continue;
}
} else
{return o;
}
break;
}
};
var G__19088 = function (o,k,v,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19088__delegate.call(this,o,k,v,more);};
G__19088.cljs$lang$maxFixedArity = 3;
G__19088.cljs$lang$applyTo = (function (arglist__19093){
var o = cljs.core.first(arglist__19093);
arglist__19093 = cljs.core.next(arglist__19093);
var k = cljs.core.first(arglist__19093);
arglist__19093 = cljs.core.next(arglist__19093);
var v = cljs.core.first(arglist__19093);
var more = cljs.core.rest(arglist__19093);
return G__19088__delegate(o,k,v,more);
});
G__19088.cljs$core$IFn$_invoke$arity$variadic = G__19088__delegate;
return G__19088;
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
var G__19094 = o;
var G__19095 = cljs.core.first(more);
var G__19096 = cljs.core.next(more);
o = G__19094;
k = G__19095;
more = G__19096;
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
js_dissoc.cljs$lang$applyTo = (function (arglist__19097){
var o = cljs.core.first(arglist__19097);
arglist__19097 = cljs.core.next(arglist__19097);
var k = cljs.core.first(arglist__19097);
var more = cljs.core.rest(arglist__19097);
return js_dissoc__delegate(o,k,more);
});
js_dissoc.cljs$core$IFn$_invoke$arity$variadic = js_dissoc__delegate;
return js_dissoc;
})()
;
purnam.cljs.js_empty = (function js_empty(o){var G__19103_19108 = goog.typeOf(o);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("array",G__19103_19108))
{(o["length"] = 0);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("object",G__19103_19108))
{var seq__19104_19109 = cljs.core.seq(cljs.core.js_keys(o));var chunk__19105_19110 = null;var count__19106_19111 = 0;var i__19107_19112 = 0;while(true){
if((i__19107_19112 < count__19106_19111))
{var k_19113 = chunk__19105_19110.cljs$core$IIndexed$_nth$arity$2(null,i__19107_19112);delete o[k_19113];
{
var G__19114 = seq__19104_19109;
var G__19115 = chunk__19105_19110;
var G__19116 = count__19106_19111;
var G__19117 = (i__19107_19112 + 1);
seq__19104_19109 = G__19114;
chunk__19105_19110 = G__19115;
count__19106_19111 = G__19116;
i__19107_19112 = G__19117;
continue;
}
} else
{var temp__4092__auto___19118 = cljs.core.seq(seq__19104_19109);if(temp__4092__auto___19118)
{var seq__19104_19119__$1 = temp__4092__auto___19118;if(cljs.core.chunked_seq_QMARK_(seq__19104_19119__$1))
{var c__4015__auto___19120 = cljs.core.chunk_first(seq__19104_19119__$1);{
var G__19121 = cljs.core.chunk_rest(seq__19104_19119__$1);
var G__19122 = c__4015__auto___19120;
var G__19123 = cljs.core.count(c__4015__auto___19120);
var G__19124 = 0;
seq__19104_19109 = G__19121;
chunk__19105_19110 = G__19122;
count__19106_19111 = G__19123;
i__19107_19112 = G__19124;
continue;
}
} else
{var k_19125 = cljs.core.first(seq__19104_19119__$1);delete o[k_19125];
{
var G__19126 = cljs.core.next(seq__19104_19119__$1);
var G__19127 = null;
var G__19128 = 0;
var G__19129 = 0;
seq__19104_19109 = G__19126;
chunk__19105_19110 = G__19127;
count__19106_19111 = G__19128;
i__19107_19112 = G__19129;
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
var js_merge__2 = (function (o1,o2){var seq__19134_19138 = cljs.core.seq(cljs.core.js_keys(o2));var chunk__19135_19139 = null;var count__19136_19140 = 0;var i__19137_19141 = 0;while(true){
if((i__19137_19141 < count__19136_19140))
{var k_19142 = chunk__19135_19139.cljs$core$IIndexed$_nth$arity$2(null,i__19137_19141);(o1[k_19142] = (o2[k_19142]));
{
var G__19143 = seq__19134_19138;
var G__19144 = chunk__19135_19139;
var G__19145 = count__19136_19140;
var G__19146 = (i__19137_19141 + 1);
seq__19134_19138 = G__19143;
chunk__19135_19139 = G__19144;
count__19136_19140 = G__19145;
i__19137_19141 = G__19146;
continue;
}
} else
{var temp__4092__auto___19147 = cljs.core.seq(seq__19134_19138);if(temp__4092__auto___19147)
{var seq__19134_19148__$1 = temp__4092__auto___19147;if(cljs.core.chunked_seq_QMARK_(seq__19134_19148__$1))
{var c__4015__auto___19149 = cljs.core.chunk_first(seq__19134_19148__$1);{
var G__19150 = cljs.core.chunk_rest(seq__19134_19148__$1);
var G__19151 = c__4015__auto___19149;
var G__19152 = cljs.core.count(c__4015__auto___19149);
var G__19153 = 0;
seq__19134_19138 = G__19150;
chunk__19135_19139 = G__19151;
count__19136_19140 = G__19152;
i__19137_19141 = G__19153;
continue;
}
} else
{var k_19154 = cljs.core.first(seq__19134_19148__$1);(o1[k_19154] = (o2[k_19154]));
{
var G__19155 = cljs.core.next(seq__19134_19148__$1);
var G__19156 = null;
var G__19157 = 0;
var G__19158 = 0;
seq__19134_19138 = G__19155;
chunk__19135_19139 = G__19156;
count__19136_19140 = G__19157;
i__19137_19141 = G__19158;
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
var G__19159__delegate = function (o1,o2,more){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(js_merge,js_merge.cljs$core$IFn$_invoke$arity$2(o1,o2),more);
};
var G__19159 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19159__delegate.call(this,o1,o2,more);};
G__19159.cljs$lang$maxFixedArity = 2;
G__19159.cljs$lang$applyTo = (function (arglist__19160){
var o1 = cljs.core.first(arglist__19160);
arglist__19160 = cljs.core.next(arglist__19160);
var o2 = cljs.core.first(arglist__19160);
var more = cljs.core.rest(arglist__19160);
return G__19159__delegate(o1,o2,more);
});
G__19159.cljs$core$IFn$_invoke$arity$variadic = G__19159__delegate;
return G__19159;
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
var js_merge_nil__2 = (function (o1,o2){var seq__19165_19169 = cljs.core.seq(cljs.core.js_keys(o2));var chunk__19166_19170 = null;var count__19167_19171 = 0;var i__19168_19172 = 0;while(true){
if((i__19168_19172 < count__19167_19171))
{var k_19173 = chunk__19166_19170.cljs$core$IIndexed$_nth$arity$2(null,i__19168_19172);if(cljs.core.not((o1[k_19173])))
{(o1[k_19173] = (o2[k_19173]));
} else
{}
{
var G__19174 = seq__19165_19169;
var G__19175 = chunk__19166_19170;
var G__19176 = count__19167_19171;
var G__19177 = (i__19168_19172 + 1);
seq__19165_19169 = G__19174;
chunk__19166_19170 = G__19175;
count__19167_19171 = G__19176;
i__19168_19172 = G__19177;
continue;
}
} else
{var temp__4092__auto___19178 = cljs.core.seq(seq__19165_19169);if(temp__4092__auto___19178)
{var seq__19165_19179__$1 = temp__4092__auto___19178;if(cljs.core.chunked_seq_QMARK_(seq__19165_19179__$1))
{var c__4015__auto___19180 = cljs.core.chunk_first(seq__19165_19179__$1);{
var G__19181 = cljs.core.chunk_rest(seq__19165_19179__$1);
var G__19182 = c__4015__auto___19180;
var G__19183 = cljs.core.count(c__4015__auto___19180);
var G__19184 = 0;
seq__19165_19169 = G__19181;
chunk__19166_19170 = G__19182;
count__19167_19171 = G__19183;
i__19168_19172 = G__19184;
continue;
}
} else
{var k_19185 = cljs.core.first(seq__19165_19179__$1);if(cljs.core.not((o1[k_19185])))
{(o1[k_19185] = (o2[k_19185]));
} else
{}
{
var G__19186 = cljs.core.next(seq__19165_19179__$1);
var G__19187 = null;
var G__19188 = 0;
var G__19189 = 0;
seq__19165_19169 = G__19186;
chunk__19166_19170 = G__19187;
count__19167_19171 = G__19188;
i__19168_19172 = G__19189;
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
var G__19190__delegate = function (o1,o2,more){while(true){
js_merge_nil.cljs$core$IFn$_invoke$arity$2(o1,o2);
if(cljs.core.truth_(more))
{{
var G__19191 = js_merge_nil.cljs$core$IFn$_invoke$arity$2(o1,o2);
var G__19192 = cljs.core.first(more);
var G__19193 = cljs.core.next(more);
o1 = G__19191;
o2 = G__19192;
more = G__19193;
continue;
}
} else
{return o1;
}
break;
}
};
var G__19190 = function (o1,o2,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19190__delegate.call(this,o1,o2,more);};
G__19190.cljs$lang$maxFixedArity = 2;
G__19190.cljs$lang$applyTo = (function (arglist__19194){
var o1 = cljs.core.first(arglist__19194);
arglist__19194 = cljs.core.next(arglist__19194);
var o2 = cljs.core.first(arglist__19194);
var more = cljs.core.rest(arglist__19194);
return G__19190__delegate(o1,o2,more);
});
G__19190.cljs$core$IFn$_invoke$arity$variadic = G__19190__delegate;
return G__19190;
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
{var obj19198 = {};return obj19198;
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
var js_deep_extend__4 = (function (to,from,visited,visitedlu){var seq__19203_19207 = cljs.core.seq(cljs.core.js_keys(from));var chunk__19204_19208 = null;var count__19205_19209 = 0;var i__19206_19210 = 0;while(true){
if((i__19206_19210 < count__19205_19209))
{var k_19211 = chunk__19204_19208.cljs$core$IIndexed$_nth$arity$2(null,i__19206_19210);var v_19212 = (from[k_19211]);var vn_19213 = purnam.cljs.js_initial_value(v_19212);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v_19212,vn_19213))
{var i_19214 = visited.indexOf(v_19212);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,i_19214))
{visited.push(v_19212);
visitedlu.push(vn_19213);
js_deep_extend.cljs$core$IFn$_invoke$arity$4(vn_19213,v_19212,visited,visitedlu);
(to[k_19211] = vn_19213);
} else
{(to[k_19211] = (visitedlu[i_19214]));
}
} else
{if(cljs.core.constant$keyword$6)
{(to[k_19211] = v_19212);
} else
{}
}
{
var G__19215 = seq__19203_19207;
var G__19216 = chunk__19204_19208;
var G__19217 = count__19205_19209;
var G__19218 = (i__19206_19210 + 1);
seq__19203_19207 = G__19215;
chunk__19204_19208 = G__19216;
count__19205_19209 = G__19217;
i__19206_19210 = G__19218;
continue;
}
} else
{var temp__4092__auto___19219 = cljs.core.seq(seq__19203_19207);if(temp__4092__auto___19219)
{var seq__19203_19220__$1 = temp__4092__auto___19219;if(cljs.core.chunked_seq_QMARK_(seq__19203_19220__$1))
{var c__4015__auto___19221 = cljs.core.chunk_first(seq__19203_19220__$1);{
var G__19222 = cljs.core.chunk_rest(seq__19203_19220__$1);
var G__19223 = c__4015__auto___19221;
var G__19224 = cljs.core.count(c__4015__auto___19221);
var G__19225 = 0;
seq__19203_19207 = G__19222;
chunk__19204_19208 = G__19223;
count__19205_19209 = G__19224;
i__19206_19210 = G__19225;
continue;
}
} else
{var k_19226 = cljs.core.first(seq__19203_19220__$1);var v_19227 = (from[k_19226]);var vn_19228 = purnam.cljs.js_initial_value(v_19227);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v_19227,vn_19228))
{var i_19229 = visited.indexOf(v_19227);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,i_19229))
{visited.push(v_19227);
visitedlu.push(vn_19228);
js_deep_extend.cljs$core$IFn$_invoke$arity$4(vn_19228,v_19227,visited,visitedlu);
(to[k_19226] = vn_19228);
} else
{(to[k_19226] = (visitedlu[i_19229]));
}
} else
{if(cljs.core.constant$keyword$6)
{(to[k_19226] = v_19227);
} else
{}
}
{
var G__19230 = cljs.core.next(seq__19203_19220__$1);
var G__19231 = null;
var G__19232 = 0;
var G__19233 = 0;
seq__19203_19207 = G__19230;
chunk__19204_19208 = G__19231;
count__19205_19209 = G__19232;
i__19206_19210 = G__19233;
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
