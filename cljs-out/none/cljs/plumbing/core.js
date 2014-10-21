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
var G__86293__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__86293 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__86293__delegate.call(this,m,k,f,x1,x2,xs);};
G__86293.cljs$lang$maxFixedArity = 5;
G__86293.cljs$lang$applyTo = (function (arglist__86294){
var m = cljs.core.first(arglist__86294);
arglist__86294 = cljs.core.next(arglist__86294);
var k = cljs.core.first(arglist__86294);
arglist__86294 = cljs.core.next(arglist__86294);
var f = cljs.core.first(arglist__86294);
arglist__86294 = cljs.core.next(arglist__86294);
var x1 = cljs.core.first(arglist__86294);
arglist__86294 = cljs.core.next(arglist__86294);
var x2 = cljs.core.first(arglist__86294);
var xs = cljs.core.rest(arglist__86294);
return G__86293__delegate(m,k,f,x1,x2,xs);
});
G__86293.cljs$core$IFn$_invoke$arity$variadic = G__86293__delegate;
return G__86293;
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
{var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__86303_86309 = cljs.core.seq.call(null,m);var chunk__86304_86310 = null;var count__86305_86311 = (0);var i__86306_86312 = (0);while(true){
if((i__86306_86312 < count__86305_86311))
{var vec__86307_86313 = cljs.core._nth.call(null,chunk__86304_86310,i__86306_86312);var k_86314 = cljs.core.nth.call(null,vec__86307_86313,(0),null);var v_86315 = cljs.core.nth.call(null,vec__86307_86313,(1),null);var m86302_86316 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m86302_86316,k_86314,f.call(null,v_86315)));
{
var G__86317 = seq__86303_86309;
var G__86318 = chunk__86304_86310;
var G__86319 = count__86305_86311;
var G__86320 = (i__86306_86312 + (1));
seq__86303_86309 = G__86317;
chunk__86304_86310 = G__86318;
count__86305_86311 = G__86319;
i__86306_86312 = G__86320;
continue;
}
} else
{var temp__4126__auto___86321 = cljs.core.seq.call(null,seq__86303_86309);if(temp__4126__auto___86321)
{var seq__86303_86322__$1 = temp__4126__auto___86321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86303_86322__$1))
{var c__4406__auto___86323 = cljs.core.chunk_first.call(null,seq__86303_86322__$1);{
var G__86324 = cljs.core.chunk_rest.call(null,seq__86303_86322__$1);
var G__86325 = c__4406__auto___86323;
var G__86326 = cljs.core.count.call(null,c__4406__auto___86323);
var G__86327 = (0);
seq__86303_86309 = G__86324;
chunk__86304_86310 = G__86325;
count__86305_86311 = G__86326;
i__86306_86312 = G__86327;
continue;
}
} else
{var vec__86308_86328 = cljs.core.first.call(null,seq__86303_86322__$1);var k_86329 = cljs.core.nth.call(null,vec__86308_86328,(0),null);var v_86330 = cljs.core.nth.call(null,vec__86308_86328,(1),null);var m86302_86331 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m86302_86331,k_86329,f.call(null,v_86330)));
{
var G__86332 = cljs.core.next.call(null,seq__86303_86322__$1);
var G__86333 = null;
var G__86334 = (0);
var G__86335 = (0);
seq__86303_86309 = G__86332;
chunk__86304_86310 = G__86333;
count__86305_86311 = G__86334;
i__86306_86312 = G__86335;
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
{var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__86344_86350 = cljs.core.seq.call(null,m);var chunk__86345_86351 = null;var count__86346_86352 = (0);var i__86347_86353 = (0);while(true){
if((i__86347_86353 < count__86346_86352))
{var vec__86348_86354 = cljs.core._nth.call(null,chunk__86345_86351,i__86347_86353);var k_86355 = cljs.core.nth.call(null,vec__86348_86354,(0),null);var v_86356 = cljs.core.nth.call(null,vec__86348_86354,(1),null);var m86343_86357 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m86343_86357,f.call(null,k_86355),v_86356));
{
var G__86358 = seq__86344_86350;
var G__86359 = chunk__86345_86351;
var G__86360 = count__86346_86352;
var G__86361 = (i__86347_86353 + (1));
seq__86344_86350 = G__86358;
chunk__86345_86351 = G__86359;
count__86346_86352 = G__86360;
i__86347_86353 = G__86361;
continue;
}
} else
{var temp__4126__auto___86362 = cljs.core.seq.call(null,seq__86344_86350);if(temp__4126__auto___86362)
{var seq__86344_86363__$1 = temp__4126__auto___86362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86344_86363__$1))
{var c__4406__auto___86364 = cljs.core.chunk_first.call(null,seq__86344_86363__$1);{
var G__86365 = cljs.core.chunk_rest.call(null,seq__86344_86363__$1);
var G__86366 = c__4406__auto___86364;
var G__86367 = cljs.core.count.call(null,c__4406__auto___86364);
var G__86368 = (0);
seq__86344_86350 = G__86365;
chunk__86345_86351 = G__86366;
count__86346_86352 = G__86367;
i__86347_86353 = G__86368;
continue;
}
} else
{var vec__86349_86369 = cljs.core.first.call(null,seq__86344_86363__$1);var k_86370 = cljs.core.nth.call(null,vec__86349_86369,(0),null);var v_86371 = cljs.core.nth.call(null,vec__86349_86369,(1),null);var m86343_86372 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m86343_86372,f.call(null,k_86370),v_86371));
{
var G__86373 = cljs.core.next.call(null,seq__86344_86363__$1);
var G__86374 = null;
var G__86375 = (0);
var G__86376 = (0);
seq__86344_86350 = G__86373;
chunk__86345_86351 = G__86374;
count__86346_86352 = G__86375;
i__86347_86353 = G__86376;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__86383_86387 = cljs.core.seq.call(null,ks);var chunk__86384_86388 = null;var count__86385_86389 = (0);var i__86386_86390 = (0);while(true){
if((i__86386_86390 < count__86385_86389))
{var k_86391 = cljs.core._nth.call(null,chunk__86384_86388,i__86386_86390);var m86382_86392 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m86382_86392,k_86391,f.call(null,k_86391)));
{
var G__86393 = seq__86383_86387;
var G__86394 = chunk__86384_86388;
var G__86395 = count__86385_86389;
var G__86396 = (i__86386_86390 + (1));
seq__86383_86387 = G__86393;
chunk__86384_86388 = G__86394;
count__86385_86389 = G__86395;
i__86386_86390 = G__86396;
continue;
}
} else
{var temp__4126__auto___86397 = cljs.core.seq.call(null,seq__86383_86387);if(temp__4126__auto___86397)
{var seq__86383_86398__$1 = temp__4126__auto___86397;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86383_86398__$1))
{var c__4406__auto___86399 = cljs.core.chunk_first.call(null,seq__86383_86398__$1);{
var G__86400 = cljs.core.chunk_rest.call(null,seq__86383_86398__$1);
var G__86401 = c__4406__auto___86399;
var G__86402 = cljs.core.count.call(null,c__4406__auto___86399);
var G__86403 = (0);
seq__86383_86387 = G__86400;
chunk__86384_86388 = G__86401;
count__86385_86389 = G__86402;
i__86386_86390 = G__86403;
continue;
}
} else
{var k_86404 = cljs.core.first.call(null,seq__86383_86398__$1);var m86382_86405 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m86382_86405,k_86404,f.call(null,k_86404)));
{
var G__86406 = cljs.core.next.call(null,seq__86383_86398__$1);
var G__86407 = null;
var G__86408 = (0);
var G__86409 = (0);
seq__86383_86387 = G__86406;
chunk__86384_86388 = G__86407;
count__86385_86389 = G__86408;
i__86386_86390 = G__86409;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__86416_86420 = cljs.core.seq.call(null,vs);var chunk__86417_86421 = null;var count__86418_86422 = (0);var i__86419_86423 = (0);while(true){
if((i__86419_86423 < count__86418_86422))
{var v_86424 = cljs.core._nth.call(null,chunk__86417_86421,i__86419_86423);var m86415_86425 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m86415_86425,f.call(null,v_86424),v_86424));
{
var G__86426 = seq__86416_86420;
var G__86427 = chunk__86417_86421;
var G__86428 = count__86418_86422;
var G__86429 = (i__86419_86423 + (1));
seq__86416_86420 = G__86426;
chunk__86417_86421 = G__86427;
count__86418_86422 = G__86428;
i__86419_86423 = G__86429;
continue;
}
} else
{var temp__4126__auto___86430 = cljs.core.seq.call(null,seq__86416_86420);if(temp__4126__auto___86430)
{var seq__86416_86431__$1 = temp__4126__auto___86430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86416_86431__$1))
{var c__4406__auto___86432 = cljs.core.chunk_first.call(null,seq__86416_86431__$1);{
var G__86433 = cljs.core.chunk_rest.call(null,seq__86416_86431__$1);
var G__86434 = c__4406__auto___86432;
var G__86435 = cljs.core.count.call(null,c__4406__auto___86432);
var G__86436 = (0);
seq__86416_86420 = G__86433;
chunk__86417_86421 = G__86434;
count__86418_86422 = G__86435;
i__86419_86423 = G__86436;
continue;
}
} else
{var v_86437 = cljs.core.first.call(null,seq__86416_86431__$1);var m86415_86438 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m86415_86438,f.call(null,v_86437),v_86437));
{
var G__86439 = cljs.core.next.call(null,seq__86416_86431__$1);
var G__86440 = null;
var G__86441 = (0);
var G__86442 = (0);
seq__86416_86420 = G__86439;
chunk__86417_86421 = G__86440;
count__86418_86422 = G__86441;
i__86419_86423 = G__86442;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__86443){var vec__86445 = p__86443;var k = cljs.core.nth.call(null,vec__86445,(0),null);var ks = cljs.core.nthnext.call(null,vec__86445,(1));if(cljs.core.truth_(m))
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
{var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__86454_86460 = cljs.core.seq.call(null,x);var chunk__86455_86461 = null;var count__86456_86462 = (0);var i__86457_86463 = (0);while(true){
if((i__86457_86463 < count__86456_86462))
{var vec__86458_86464 = cljs.core._nth.call(null,chunk__86455_86461,i__86457_86463);var k_86465 = cljs.core.nth.call(null,vec__86458_86464,(0),null);var v_86466 = cljs.core.nth.call(null,vec__86458_86464,(1),null);var m86453_86467 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m86453_86467,((typeof k_86465 === 'string')?cljs.core.keyword.call(null,k_86465):k_86465),keywordize_map.call(null,v_86466)));
{
var G__86468 = seq__86454_86460;
var G__86469 = chunk__86455_86461;
var G__86470 = count__86456_86462;
var G__86471 = (i__86457_86463 + (1));
seq__86454_86460 = G__86468;
chunk__86455_86461 = G__86469;
count__86456_86462 = G__86470;
i__86457_86463 = G__86471;
continue;
}
} else
{var temp__4126__auto___86472 = cljs.core.seq.call(null,seq__86454_86460);if(temp__4126__auto___86472)
{var seq__86454_86473__$1 = temp__4126__auto___86472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86454_86473__$1))
{var c__4406__auto___86474 = cljs.core.chunk_first.call(null,seq__86454_86473__$1);{
var G__86475 = cljs.core.chunk_rest.call(null,seq__86454_86473__$1);
var G__86476 = c__4406__auto___86474;
var G__86477 = cljs.core.count.call(null,c__4406__auto___86474);
var G__86478 = (0);
seq__86454_86460 = G__86475;
chunk__86455_86461 = G__86476;
count__86456_86462 = G__86477;
i__86457_86463 = G__86478;
continue;
}
} else
{var vec__86459_86479 = cljs.core.first.call(null,seq__86454_86473__$1);var k_86480 = cljs.core.nth.call(null,vec__86459_86479,(0),null);var v_86481 = cljs.core.nth.call(null,vec__86459_86479,(1),null);var m86453_86482 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m86453_86482,((typeof k_86480 === 'string')?cljs.core.keyword.call(null,k_86480):k_86480),keywordize_map.call(null,v_86481)));
{
var G__86483 = cljs.core.next.call(null,seq__86454_86473__$1);
var G__86484 = null;
var G__86485 = (0);
var G__86486 = (0);
seq__86454_86460 = G__86483;
chunk__86455_86461 = G__86484;
count__86456_86462 = G__86485;
i__86457_86463 = G__86486;
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
var G__86487 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__86488 = cljs.core.next.call(null,ks);
m = G__86487;
ks = G__86488;
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
})(),(function (){var iter__4375__auto__ = (function iter__86497(s__86498){return (new cljs.core.LazySeq(null,(function (){var s__86498__$1 = s__86498;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__86498__$1);if(temp__4126__auto__)
{var s__86498__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__86498__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__86498__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__86500 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__86499 = (0);while(true){
if((i__86499 < size__4374__auto__))
{var vec__86503 = cljs.core._nth.call(null,c__4373__auto__,i__86499);var k = cljs.core.nth.call(null,vec__86503,(0),null);var v = cljs.core.nth.call(null,vec__86503,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__86500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__86505 = (i__86499 + (1));
i__86499 = G__86505;
continue;
}
} else
{{
var G__86506 = (i__86499 + (1));
i__86499 = G__86506;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86500),iter__86497.call(null,cljs.core.chunk_rest.call(null,s__86498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86500),null);
}
} else
{var vec__86504 = cljs.core.first.call(null,s__86498__$2);var k = cljs.core.nth.call(null,vec__86504,(0),null);var v = cljs.core.nth.call(null,vec__86504,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__86497.call(null,cljs.core.rest.call(null,s__86498__$2)));
} else
{{
var G__86507 = cljs.core.rest.call(null,s__86498__$2);
s__86498__$1 = G__86507;
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
assoc_when.cljs$lang$applyTo = (function (arglist__86508){
var m = cljs.core.first(arglist__86508);
var kvs = cljs.core.rest(arglist__86508);
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
update_in_when.cljs$lang$applyTo = (function (arglist__86509){
var m = cljs.core.first(arglist__86509);
arglist__86509 = cljs.core.next(arglist__86509);
var key_seq = cljs.core.first(arglist__86509);
arglist__86509 = cljs.core.next(arglist__86509);
var f = cljs.core.first(arglist__86509);
var args = cljs.core.rest(arglist__86509);
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
return (function iter__86514(s__86515){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__86515__$1 = s__86515;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__86515__$1);if(temp__4126__auto__)
{var s__86515__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__86515__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__86515__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__86517 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__86516 = (0);while(true){
if((i__86516 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__86516);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__86517,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__86518 = (i__86516 + (1));
i__86516 = G__86518;
continue;
}
} else
{{
var G__86519 = (i__86516 + (1));
i__86516 = G__86519;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86517),iter__86514.call(null,cljs.core.chunk_rest.call(null,s__86515__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86517),null);
}
} else
{var x = cljs.core.first.call(null,s__86515__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__86514.call(null,cljs.core.rest.call(null,s__86515__$2)));
} else
{{
var G__86520 = cljs.core.rest.call(null,s__86515__$2);
s__86515__$1 = G__86520;
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
interleave_all.cljs$lang$applyTo = (function (arglist__86521){
var colls = cljs.core.seq(arglist__86521);
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
var G__86522__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__86523 = conj_when.call(null,coll,x);
var G__86524 = cljs.core.first.call(null,xs);
var G__86525 = cljs.core.next.call(null,xs);
coll = G__86523;
x = G__86524;
xs = G__86525;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__86522 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__86522__delegate.call(this,coll,x,xs);};
G__86522.cljs$lang$maxFixedArity = 2;
G__86522.cljs$lang$applyTo = (function (arglist__86526){
var coll = cljs.core.first(arglist__86526);
arglist__86526 = cljs.core.next(arglist__86526);
var x = cljs.core.first(arglist__86526);
var xs = cljs.core.rest(arglist__86526);
return G__86522__delegate(coll,x,xs);
});
G__86522.cljs$core$IFn$_invoke$arity$variadic = G__86522__delegate;
return G__86522;
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
var G__86528__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__86527_SHARP_){return cljs.core.apply.call(null,f,p1__86527_SHARP_,args);
}));
};
var G__86528 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__86528__delegate.call(this,a,f,args);};
G__86528.cljs$lang$maxFixedArity = 2;
G__86528.cljs$lang$applyTo = (function (arglist__86529){
var a = cljs.core.first(arglist__86529);
arglist__86529 = cljs.core.next(arglist__86529);
var f = cljs.core.first(arglist__86529);
var args = cljs.core.rest(arglist__86529);
return G__86528__delegate(a,f,args);
});
G__86528.cljs$core$IFn$_invoke$arity$variadic = G__86528__delegate;
return G__86528;
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
var G__86530__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__86530 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__86530__delegate.call(this,f,arg,args);};
G__86530.cljs$lang$maxFixedArity = 2;
G__86530.cljs$lang$applyTo = (function (arglist__86531){
var f = cljs.core.first(arglist__86531);
arglist__86531 = cljs.core.next(arglist__86531);
var arg = cljs.core.first(arglist__86531);
var args = cljs.core.rest(arglist__86531);
return G__86530__delegate(f,arg,args);
});
G__86530.cljs$core$IFn$_invoke$arity$variadic = G__86530__delegate;
return G__86530;
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

//# sourceMappingURL=core.js.map