// Compiled by ClojureScript 0.0-2356
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
var G__24183__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__24183 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__24183__delegate.call(this,m,k,f,x1,x2,xs);};
G__24183.cljs$lang$maxFixedArity = 5;
G__24183.cljs$lang$applyTo = (function (arglist__24184){
var m = cljs.core.first(arglist__24184);
arglist__24184 = cljs.core.next(arglist__24184);
var k = cljs.core.first(arglist__24184);
arglist__24184 = cljs.core.next(arglist__24184);
var f = cljs.core.first(arglist__24184);
arglist__24184 = cljs.core.next(arglist__24184);
var x1 = cljs.core.first(arglist__24184);
arglist__24184 = cljs.core.next(arglist__24184);
var x2 = cljs.core.first(arglist__24184);
var xs = cljs.core.rest(arglist__24184);
return G__24183__delegate(m,k,f,x1,x2,xs);
});
G__24183.cljs$core$IFn$_invoke$arity$variadic = G__24183__delegate;
return G__24183;
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
{var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__24193_24199 = cljs.core.seq.call(null,m);var chunk__24194_24200 = null;var count__24195_24201 = (0);var i__24196_24202 = (0);while(true){
if((i__24196_24202 < count__24195_24201))
{var vec__24197_24203 = cljs.core._nth.call(null,chunk__24194_24200,i__24196_24202);var k_24204 = cljs.core.nth.call(null,vec__24197_24203,(0),null);var v_24205 = cljs.core.nth.call(null,vec__24197_24203,(1),null);var m24192_24206 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m24192_24206,k_24204,f.call(null,v_24205)));
{
var G__24207 = seq__24193_24199;
var G__24208 = chunk__24194_24200;
var G__24209 = count__24195_24201;
var G__24210 = (i__24196_24202 + (1));
seq__24193_24199 = G__24207;
chunk__24194_24200 = G__24208;
count__24195_24201 = G__24209;
i__24196_24202 = G__24210;
continue;
}
} else
{var temp__4126__auto___24211 = cljs.core.seq.call(null,seq__24193_24199);if(temp__4126__auto___24211)
{var seq__24193_24212__$1 = temp__4126__auto___24211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24193_24212__$1))
{var c__4406__auto___24213 = cljs.core.chunk_first.call(null,seq__24193_24212__$1);{
var G__24214 = cljs.core.chunk_rest.call(null,seq__24193_24212__$1);
var G__24215 = c__4406__auto___24213;
var G__24216 = cljs.core.count.call(null,c__4406__auto___24213);
var G__24217 = (0);
seq__24193_24199 = G__24214;
chunk__24194_24200 = G__24215;
count__24195_24201 = G__24216;
i__24196_24202 = G__24217;
continue;
}
} else
{var vec__24198_24218 = cljs.core.first.call(null,seq__24193_24212__$1);var k_24219 = cljs.core.nth.call(null,vec__24198_24218,(0),null);var v_24220 = cljs.core.nth.call(null,vec__24198_24218,(1),null);var m24192_24221 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m24192_24221,k_24219,f.call(null,v_24220)));
{
var G__24222 = cljs.core.next.call(null,seq__24193_24212__$1);
var G__24223 = null;
var G__24224 = (0);
var G__24225 = (0);
seq__24193_24199 = G__24222;
chunk__24194_24200 = G__24223;
count__24195_24201 = G__24224;
i__24196_24202 = G__24225;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15342__auto__));

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
{var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__24234_24240 = cljs.core.seq.call(null,m);var chunk__24235_24241 = null;var count__24236_24242 = (0);var i__24237_24243 = (0);while(true){
if((i__24237_24243 < count__24236_24242))
{var vec__24238_24244 = cljs.core._nth.call(null,chunk__24235_24241,i__24237_24243);var k_24245 = cljs.core.nth.call(null,vec__24238_24244,(0),null);var v_24246 = cljs.core.nth.call(null,vec__24238_24244,(1),null);var m24233_24247 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m24233_24247,f.call(null,k_24245),v_24246));
{
var G__24248 = seq__24234_24240;
var G__24249 = chunk__24235_24241;
var G__24250 = count__24236_24242;
var G__24251 = (i__24237_24243 + (1));
seq__24234_24240 = G__24248;
chunk__24235_24241 = G__24249;
count__24236_24242 = G__24250;
i__24237_24243 = G__24251;
continue;
}
} else
{var temp__4126__auto___24252 = cljs.core.seq.call(null,seq__24234_24240);if(temp__4126__auto___24252)
{var seq__24234_24253__$1 = temp__4126__auto___24252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24234_24253__$1))
{var c__4406__auto___24254 = cljs.core.chunk_first.call(null,seq__24234_24253__$1);{
var G__24255 = cljs.core.chunk_rest.call(null,seq__24234_24253__$1);
var G__24256 = c__4406__auto___24254;
var G__24257 = cljs.core.count.call(null,c__4406__auto___24254);
var G__24258 = (0);
seq__24234_24240 = G__24255;
chunk__24235_24241 = G__24256;
count__24236_24242 = G__24257;
i__24237_24243 = G__24258;
continue;
}
} else
{var vec__24239_24259 = cljs.core.first.call(null,seq__24234_24253__$1);var k_24260 = cljs.core.nth.call(null,vec__24239_24259,(0),null);var v_24261 = cljs.core.nth.call(null,vec__24239_24259,(1),null);var m24233_24262 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m24233_24262,f.call(null,k_24260),v_24261));
{
var G__24263 = cljs.core.next.call(null,seq__24234_24253__$1);
var G__24264 = null;
var G__24265 = (0);
var G__24266 = (0);
seq__24234_24240 = G__24263;
chunk__24235_24241 = G__24264;
count__24236_24242 = G__24265;
i__24237_24243 = G__24266;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15342__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__24273_24277 = cljs.core.seq.call(null,ks);var chunk__24274_24278 = null;var count__24275_24279 = (0);var i__24276_24280 = (0);while(true){
if((i__24276_24280 < count__24275_24279))
{var k_24281 = cljs.core._nth.call(null,chunk__24274_24278,i__24276_24280);var m24272_24282 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m24272_24282,k_24281,f.call(null,k_24281)));
{
var G__24283 = seq__24273_24277;
var G__24284 = chunk__24274_24278;
var G__24285 = count__24275_24279;
var G__24286 = (i__24276_24280 + (1));
seq__24273_24277 = G__24283;
chunk__24274_24278 = G__24284;
count__24275_24279 = G__24285;
i__24276_24280 = G__24286;
continue;
}
} else
{var temp__4126__auto___24287 = cljs.core.seq.call(null,seq__24273_24277);if(temp__4126__auto___24287)
{var seq__24273_24288__$1 = temp__4126__auto___24287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24273_24288__$1))
{var c__4406__auto___24289 = cljs.core.chunk_first.call(null,seq__24273_24288__$1);{
var G__24290 = cljs.core.chunk_rest.call(null,seq__24273_24288__$1);
var G__24291 = c__4406__auto___24289;
var G__24292 = cljs.core.count.call(null,c__4406__auto___24289);
var G__24293 = (0);
seq__24273_24277 = G__24290;
chunk__24274_24278 = G__24291;
count__24275_24279 = G__24292;
i__24276_24280 = G__24293;
continue;
}
} else
{var k_24294 = cljs.core.first.call(null,seq__24273_24288__$1);var m24272_24295 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m24272_24295,k_24294,f.call(null,k_24294)));
{
var G__24296 = cljs.core.next.call(null,seq__24273_24288__$1);
var G__24297 = null;
var G__24298 = (0);
var G__24299 = (0);
seq__24273_24277 = G__24296;
chunk__24274_24278 = G__24297;
count__24275_24279 = G__24298;
i__24276_24280 = G__24299;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15342__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__24306_24310 = cljs.core.seq.call(null,vs);var chunk__24307_24311 = null;var count__24308_24312 = (0);var i__24309_24313 = (0);while(true){
if((i__24309_24313 < count__24308_24312))
{var v_24314 = cljs.core._nth.call(null,chunk__24307_24311,i__24309_24313);var m24305_24315 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m24305_24315,f.call(null,v_24314),v_24314));
{
var G__24316 = seq__24306_24310;
var G__24317 = chunk__24307_24311;
var G__24318 = count__24308_24312;
var G__24319 = (i__24309_24313 + (1));
seq__24306_24310 = G__24316;
chunk__24307_24311 = G__24317;
count__24308_24312 = G__24318;
i__24309_24313 = G__24319;
continue;
}
} else
{var temp__4126__auto___24320 = cljs.core.seq.call(null,seq__24306_24310);if(temp__4126__auto___24320)
{var seq__24306_24321__$1 = temp__4126__auto___24320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24306_24321__$1))
{var c__4406__auto___24322 = cljs.core.chunk_first.call(null,seq__24306_24321__$1);{
var G__24323 = cljs.core.chunk_rest.call(null,seq__24306_24321__$1);
var G__24324 = c__4406__auto___24322;
var G__24325 = cljs.core.count.call(null,c__4406__auto___24322);
var G__24326 = (0);
seq__24306_24310 = G__24323;
chunk__24307_24311 = G__24324;
count__24308_24312 = G__24325;
i__24309_24313 = G__24326;
continue;
}
} else
{var v_24327 = cljs.core.first.call(null,seq__24306_24321__$1);var m24305_24328 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m24305_24328,f.call(null,v_24327),v_24327));
{
var G__24329 = cljs.core.next.call(null,seq__24306_24321__$1);
var G__24330 = null;
var G__24331 = (0);
var G__24332 = (0);
seq__24306_24310 = G__24329;
chunk__24307_24311 = G__24330;
count__24308_24312 = G__24331;
i__24309_24313 = G__24332;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15342__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__24333){var vec__24335 = p__24333;var k = cljs.core.nth.call(null,vec__24335,(0),null);var ks = cljs.core.nthnext.call(null,vec__24335,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3625__auto__ = ks;if(and__3625__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3625__auto__;
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
{var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__24344_24350 = cljs.core.seq.call(null,x);var chunk__24345_24351 = null;var count__24346_24352 = (0);var i__24347_24353 = (0);while(true){
if((i__24347_24353 < count__24346_24352))
{var vec__24348_24354 = cljs.core._nth.call(null,chunk__24345_24351,i__24347_24353);var k_24355 = cljs.core.nth.call(null,vec__24348_24354,(0),null);var v_24356 = cljs.core.nth.call(null,vec__24348_24354,(1),null);var m24343_24357 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m24343_24357,((typeof k_24355 === 'string')?cljs.core.keyword.call(null,k_24355):k_24355),keywordize_map.call(null,v_24356)));
{
var G__24358 = seq__24344_24350;
var G__24359 = chunk__24345_24351;
var G__24360 = count__24346_24352;
var G__24361 = (i__24347_24353 + (1));
seq__24344_24350 = G__24358;
chunk__24345_24351 = G__24359;
count__24346_24352 = G__24360;
i__24347_24353 = G__24361;
continue;
}
} else
{var temp__4126__auto___24362 = cljs.core.seq.call(null,seq__24344_24350);if(temp__4126__auto___24362)
{var seq__24344_24363__$1 = temp__4126__auto___24362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24344_24363__$1))
{var c__4406__auto___24364 = cljs.core.chunk_first.call(null,seq__24344_24363__$1);{
var G__24365 = cljs.core.chunk_rest.call(null,seq__24344_24363__$1);
var G__24366 = c__4406__auto___24364;
var G__24367 = cljs.core.count.call(null,c__4406__auto___24364);
var G__24368 = (0);
seq__24344_24350 = G__24365;
chunk__24345_24351 = G__24366;
count__24346_24352 = G__24367;
i__24347_24353 = G__24368;
continue;
}
} else
{var vec__24349_24369 = cljs.core.first.call(null,seq__24344_24363__$1);var k_24370 = cljs.core.nth.call(null,vec__24349_24369,(0),null);var v_24371 = cljs.core.nth.call(null,vec__24349_24369,(1),null);var m24343_24372 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m24343_24372,((typeof k_24370 === 'string')?cljs.core.keyword.call(null,k_24370):k_24370),keywordize_map.call(null,v_24371)));
{
var G__24373 = cljs.core.next.call(null,seq__24344_24363__$1);
var G__24374 = null;
var G__24375 = (0);
var G__24376 = (0);
seq__24344_24350 = G__24373;
chunk__24345_24351 = G__24374;
count__24346_24352 = G__24375;
i__24347_24353 = G__24376;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15342__auto__));
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
{var pair__15411__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__15411__auto__);
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
var G__24377 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__24378 = cljs.core.next.call(null,ks);
m = G__24377;
ks = G__24378;
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
return cljs.core.into.call(null,(function (){var or__3637__auto__ = m;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4375__auto__ = (function iter__24387(s__24388){return (new cljs.core.LazySeq(null,(function (){var s__24388__$1 = s__24388;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24388__$1);if(temp__4126__auto__)
{var s__24388__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24388__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__24388__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__24390 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__24389 = (0);while(true){
if((i__24389 < size__4374__auto__))
{var vec__24393 = cljs.core._nth.call(null,c__4373__auto__,i__24389);var k = cljs.core.nth.call(null,vec__24393,(0),null);var v = cljs.core.nth.call(null,vec__24393,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__24390,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__24395 = (i__24389 + (1));
i__24389 = G__24395;
continue;
}
} else
{{
var G__24396 = (i__24389 + (1));
i__24389 = G__24396;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24390),iter__24387.call(null,cljs.core.chunk_rest.call(null,s__24388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24390),null);
}
} else
{var vec__24394 = cljs.core.first.call(null,s__24388__$2);var k = cljs.core.nth.call(null,vec__24394,(0),null);var v = cljs.core.nth.call(null,vec__24394,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__24387.call(null,cljs.core.rest.call(null,s__24388__$2)));
} else
{{
var G__24397 = cljs.core.rest.call(null,s__24388__$2);
s__24388__$1 = G__24397;
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
});return iter__4375__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__24398){
var m = cljs.core.first(arglist__24398);
var kvs = cljs.core.rest(arglist__24398);
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
update_in_when.cljs$lang$applyTo = (function (arglist__24399){
var m = cljs.core.first(arglist__24399);
arglist__24399 = cljs.core.next(arglist__24399);
var key_seq = cljs.core.first(arglist__24399);
arglist__24399 = cljs.core.next(arglist__24399);
var f = cljs.core.first(arglist__24399);
var args = cljs.core.rest(arglist__24399);
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4375__auto__ = ((function (s){
return (function iter__24404(s__24405){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__24405__$1 = s__24405;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24405__$1);if(temp__4126__auto__)
{var s__24405__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24405__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__24405__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__24407 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__24406 = (0);while(true){
if((i__24406 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__24406);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__24407,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__24408 = (i__24406 + (1));
i__24406 = G__24408;
continue;
}
} else
{{
var G__24409 = (i__24406 + (1));
i__24406 = G__24409;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24407),iter__24404.call(null,cljs.core.chunk_rest.call(null,s__24405__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24407),null);
}
} else
{var x = cljs.core.first.call(null,s__24405__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__24404.call(null,cljs.core.rest.call(null,s__24405__$2)));
} else
{{
var G__24410 = cljs.core.rest.call(null,s__24405__$2);
s__24405__$1 = G__24410;
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
;return iter__4375__auto__.call(null,xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__24411){
var colls = cljs.core.seq(arglist__24411);
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
var G__24412__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__24413 = conj_when.call(null,coll,x);
var G__24414 = cljs.core.first.call(null,xs);
var G__24415 = cljs.core.next.call(null,xs);
coll = G__24413;
x = G__24414;
xs = G__24415;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__24412 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24412__delegate.call(this,coll,x,xs);};
G__24412.cljs$lang$maxFixedArity = 2;
G__24412.cljs$lang$applyTo = (function (arglist__24416){
var coll = cljs.core.first(arglist__24416);
arglist__24416 = cljs.core.next(arglist__24416);
var x = cljs.core.first(arglist__24416);
var xs = cljs.core.rest(arglist__24416);
return G__24412__delegate(coll,x,xs);
});
G__24412.cljs$core$IFn$_invoke$arity$variadic = G__24412__delegate;
return G__24412;
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
var G__24418__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__24417_SHARP_){return cljs.core.apply.call(null,f,p1__24417_SHARP_,args);
}));
};
var G__24418 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24418__delegate.call(this,a,f,args);};
G__24418.cljs$lang$maxFixedArity = 2;
G__24418.cljs$lang$applyTo = (function (arglist__24419){
var a = cljs.core.first(arglist__24419);
arglist__24419 = cljs.core.next(arglist__24419);
var f = cljs.core.first(arglist__24419);
var args = cljs.core.rest(arglist__24419);
return G__24418__delegate(a,f,args);
});
G__24418.cljs$core$IFn$_invoke$arity$variadic = G__24418__delegate;
return G__24418;
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
var G__24420__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__24420 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24420__delegate.call(this,f,arg,args);};
G__24420.cljs$lang$maxFixedArity = 2;
G__24420.cljs$lang$applyTo = (function (arglist__24421){
var f = cljs.core.first(arglist__24421);
arglist__24421 = cljs.core.next(arglist__24421);
var arg = cljs.core.first(arglist__24421);
var args = cljs.core.rest(arglist__24421);
return G__24420__delegate(f,arg,args);
});
G__24420.cljs$core$IFn$_invoke$arity$variadic = G__24420__delegate;
return G__24420;
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
