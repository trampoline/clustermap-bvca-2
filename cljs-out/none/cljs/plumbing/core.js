// Compiled by ClojureScript 0.0-2322
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
var G__68283__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__68283 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__68283__delegate.call(this,m,k,f,x1,x2,xs);};
G__68283.cljs$lang$maxFixedArity = 5;
G__68283.cljs$lang$applyTo = (function (arglist__68284){
var m = cljs.core.first(arglist__68284);
arglist__68284 = cljs.core.next(arglist__68284);
var k = cljs.core.first(arglist__68284);
arglist__68284 = cljs.core.next(arglist__68284);
var f = cljs.core.first(arglist__68284);
arglist__68284 = cljs.core.next(arglist__68284);
var x1 = cljs.core.first(arglist__68284);
arglist__68284 = cljs.core.next(arglist__68284);
var x2 = cljs.core.first(arglist__68284);
var xs = cljs.core.rest(arglist__68284);
return G__68283__delegate(m,k,f,x1,x2,xs);
});
G__68283.cljs$core$IFn$_invoke$arity$variadic = G__68283__delegate;
return G__68283;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__68293_68299 = cljs.core.seq.call(null,m);var chunk__68294_68300 = null;var count__68295_68301 = (0);var i__68296_68302 = (0);while(true){
if((i__68296_68302 < count__68295_68301))
{var vec__68297_68303 = cljs.core._nth.call(null,chunk__68294_68300,i__68296_68302);var k_68304 = cljs.core.nth.call(null,vec__68297_68303,(0),null);var v_68305 = cljs.core.nth.call(null,vec__68297_68303,(1),null);var m68292_68306 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m68292_68306,k_68304,f.call(null,v_68305)));
{
var G__68307 = seq__68293_68299;
var G__68308 = chunk__68294_68300;
var G__68309 = count__68295_68301;
var G__68310 = (i__68296_68302 + (1));
seq__68293_68299 = G__68307;
chunk__68294_68300 = G__68308;
count__68295_68301 = G__68309;
i__68296_68302 = G__68310;
continue;
}
} else
{var temp__4126__auto___68311 = cljs.core.seq.call(null,seq__68293_68299);if(temp__4126__auto___68311)
{var seq__68293_68312__$1 = temp__4126__auto___68311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68293_68312__$1))
{var c__4314__auto___68313 = cljs.core.chunk_first.call(null,seq__68293_68312__$1);{
var G__68314 = cljs.core.chunk_rest.call(null,seq__68293_68312__$1);
var G__68315 = c__4314__auto___68313;
var G__68316 = cljs.core.count.call(null,c__4314__auto___68313);
var G__68317 = (0);
seq__68293_68299 = G__68314;
chunk__68294_68300 = G__68315;
count__68295_68301 = G__68316;
i__68296_68302 = G__68317;
continue;
}
} else
{var vec__68298_68318 = cljs.core.first.call(null,seq__68293_68312__$1);var k_68319 = cljs.core.nth.call(null,vec__68298_68318,(0),null);var v_68320 = cljs.core.nth.call(null,vec__68298_68318,(1),null);var m68292_68321 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m68292_68321,k_68319,f.call(null,v_68320)));
{
var G__68322 = cljs.core.next.call(null,seq__68293_68312__$1);
var G__68323 = null;
var G__68324 = (0);
var G__68325 = (0);
seq__68293_68299 = G__68322;
chunk__68294_68300 = G__68323;
count__68295_68301 = G__68324;
i__68296_68302 = G__68325;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__12440__auto__));

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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__68334_68340 = cljs.core.seq.call(null,m);var chunk__68335_68341 = null;var count__68336_68342 = (0);var i__68337_68343 = (0);while(true){
if((i__68337_68343 < count__68336_68342))
{var vec__68338_68344 = cljs.core._nth.call(null,chunk__68335_68341,i__68337_68343);var k_68345 = cljs.core.nth.call(null,vec__68338_68344,(0),null);var v_68346 = cljs.core.nth.call(null,vec__68338_68344,(1),null);var m68333_68347 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m68333_68347,f.call(null,k_68345),v_68346));
{
var G__68348 = seq__68334_68340;
var G__68349 = chunk__68335_68341;
var G__68350 = count__68336_68342;
var G__68351 = (i__68337_68343 + (1));
seq__68334_68340 = G__68348;
chunk__68335_68341 = G__68349;
count__68336_68342 = G__68350;
i__68337_68343 = G__68351;
continue;
}
} else
{var temp__4126__auto___68352 = cljs.core.seq.call(null,seq__68334_68340);if(temp__4126__auto___68352)
{var seq__68334_68353__$1 = temp__4126__auto___68352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68334_68353__$1))
{var c__4314__auto___68354 = cljs.core.chunk_first.call(null,seq__68334_68353__$1);{
var G__68355 = cljs.core.chunk_rest.call(null,seq__68334_68353__$1);
var G__68356 = c__4314__auto___68354;
var G__68357 = cljs.core.count.call(null,c__4314__auto___68354);
var G__68358 = (0);
seq__68334_68340 = G__68355;
chunk__68335_68341 = G__68356;
count__68336_68342 = G__68357;
i__68337_68343 = G__68358;
continue;
}
} else
{var vec__68339_68359 = cljs.core.first.call(null,seq__68334_68353__$1);var k_68360 = cljs.core.nth.call(null,vec__68339_68359,(0),null);var v_68361 = cljs.core.nth.call(null,vec__68339_68359,(1),null);var m68333_68362 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m68333_68362,f.call(null,k_68360),v_68361));
{
var G__68363 = cljs.core.next.call(null,seq__68334_68353__$1);
var G__68364 = null;
var G__68365 = (0);
var G__68366 = (0);
seq__68334_68340 = G__68363;
chunk__68335_68341 = G__68364;
count__68336_68342 = G__68365;
i__68337_68343 = G__68366;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__12440__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__68373_68377 = cljs.core.seq.call(null,ks);var chunk__68374_68378 = null;var count__68375_68379 = (0);var i__68376_68380 = (0);while(true){
if((i__68376_68380 < count__68375_68379))
{var k_68381 = cljs.core._nth.call(null,chunk__68374_68378,i__68376_68380);var m68372_68382 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m68372_68382,k_68381,f.call(null,k_68381)));
{
var G__68383 = seq__68373_68377;
var G__68384 = chunk__68374_68378;
var G__68385 = count__68375_68379;
var G__68386 = (i__68376_68380 + (1));
seq__68373_68377 = G__68383;
chunk__68374_68378 = G__68384;
count__68375_68379 = G__68385;
i__68376_68380 = G__68386;
continue;
}
} else
{var temp__4126__auto___68387 = cljs.core.seq.call(null,seq__68373_68377);if(temp__4126__auto___68387)
{var seq__68373_68388__$1 = temp__4126__auto___68387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68373_68388__$1))
{var c__4314__auto___68389 = cljs.core.chunk_first.call(null,seq__68373_68388__$1);{
var G__68390 = cljs.core.chunk_rest.call(null,seq__68373_68388__$1);
var G__68391 = c__4314__auto___68389;
var G__68392 = cljs.core.count.call(null,c__4314__auto___68389);
var G__68393 = (0);
seq__68373_68377 = G__68390;
chunk__68374_68378 = G__68391;
count__68375_68379 = G__68392;
i__68376_68380 = G__68393;
continue;
}
} else
{var k_68394 = cljs.core.first.call(null,seq__68373_68388__$1);var m68372_68395 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m68372_68395,k_68394,f.call(null,k_68394)));
{
var G__68396 = cljs.core.next.call(null,seq__68373_68388__$1);
var G__68397 = null;
var G__68398 = (0);
var G__68399 = (0);
seq__68373_68377 = G__68396;
chunk__68374_68378 = G__68397;
count__68375_68379 = G__68398;
i__68376_68380 = G__68399;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__12440__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__68406_68410 = cljs.core.seq.call(null,vs);var chunk__68407_68411 = null;var count__68408_68412 = (0);var i__68409_68413 = (0);while(true){
if((i__68409_68413 < count__68408_68412))
{var v_68414 = cljs.core._nth.call(null,chunk__68407_68411,i__68409_68413);var m68405_68415 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m68405_68415,f.call(null,v_68414),v_68414));
{
var G__68416 = seq__68406_68410;
var G__68417 = chunk__68407_68411;
var G__68418 = count__68408_68412;
var G__68419 = (i__68409_68413 + (1));
seq__68406_68410 = G__68416;
chunk__68407_68411 = G__68417;
count__68408_68412 = G__68418;
i__68409_68413 = G__68419;
continue;
}
} else
{var temp__4126__auto___68420 = cljs.core.seq.call(null,seq__68406_68410);if(temp__4126__auto___68420)
{var seq__68406_68421__$1 = temp__4126__auto___68420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68406_68421__$1))
{var c__4314__auto___68422 = cljs.core.chunk_first.call(null,seq__68406_68421__$1);{
var G__68423 = cljs.core.chunk_rest.call(null,seq__68406_68421__$1);
var G__68424 = c__4314__auto___68422;
var G__68425 = cljs.core.count.call(null,c__4314__auto___68422);
var G__68426 = (0);
seq__68406_68410 = G__68423;
chunk__68407_68411 = G__68424;
count__68408_68412 = G__68425;
i__68409_68413 = G__68426;
continue;
}
} else
{var v_68427 = cljs.core.first.call(null,seq__68406_68421__$1);var m68405_68428 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m68405_68428,f.call(null,v_68427),v_68427));
{
var G__68429 = cljs.core.next.call(null,seq__68406_68421__$1);
var G__68430 = null;
var G__68431 = (0);
var G__68432 = (0);
seq__68406_68410 = G__68429;
chunk__68407_68411 = G__68430;
count__68408_68412 = G__68431;
i__68409_68413 = G__68432;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__12440__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__68433){var vec__68435 = p__68433;var k = cljs.core.nth.call(null,vec__68435,(0),null);var ks = cljs.core.nthnext.call(null,vec__68435,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3546__auto__ = ks;if(and__3546__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3546__auto__;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__68444_68450 = cljs.core.seq.call(null,x);var chunk__68445_68451 = null;var count__68446_68452 = (0);var i__68447_68453 = (0);while(true){
if((i__68447_68453 < count__68446_68452))
{var vec__68448_68454 = cljs.core._nth.call(null,chunk__68445_68451,i__68447_68453);var k_68455 = cljs.core.nth.call(null,vec__68448_68454,(0),null);var v_68456 = cljs.core.nth.call(null,vec__68448_68454,(1),null);var m68443_68457 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m68443_68457,((typeof k_68455 === 'string')?cljs.core.keyword.call(null,k_68455):k_68455),keywordize_map.call(null,v_68456)));
{
var G__68458 = seq__68444_68450;
var G__68459 = chunk__68445_68451;
var G__68460 = count__68446_68452;
var G__68461 = (i__68447_68453 + (1));
seq__68444_68450 = G__68458;
chunk__68445_68451 = G__68459;
count__68446_68452 = G__68460;
i__68447_68453 = G__68461;
continue;
}
} else
{var temp__4126__auto___68462 = cljs.core.seq.call(null,seq__68444_68450);if(temp__4126__auto___68462)
{var seq__68444_68463__$1 = temp__4126__auto___68462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68444_68463__$1))
{var c__4314__auto___68464 = cljs.core.chunk_first.call(null,seq__68444_68463__$1);{
var G__68465 = cljs.core.chunk_rest.call(null,seq__68444_68463__$1);
var G__68466 = c__4314__auto___68464;
var G__68467 = cljs.core.count.call(null,c__4314__auto___68464);
var G__68468 = (0);
seq__68444_68450 = G__68465;
chunk__68445_68451 = G__68466;
count__68446_68452 = G__68467;
i__68447_68453 = G__68468;
continue;
}
} else
{var vec__68449_68469 = cljs.core.first.call(null,seq__68444_68463__$1);var k_68470 = cljs.core.nth.call(null,vec__68449_68469,(0),null);var v_68471 = cljs.core.nth.call(null,vec__68449_68469,(1),null);var m68443_68472 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m68443_68472,((typeof k_68470 === 'string')?cljs.core.keyword.call(null,k_68470):k_68470),keywordize_map.call(null,v_68471)));
{
var G__68473 = cljs.core.next.call(null,seq__68444_68463__$1);
var G__68474 = null;
var G__68475 = (0);
var G__68476 = (0);
seq__68444_68450 = G__68473;
chunk__68445_68451 = G__68474;
count__68446_68452 = G__68475;
i__68447_68453 = G__68476;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__12440__auto__));
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
{var pair__12509__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__12509__auto__);
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
var G__68477 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__68478 = cljs.core.next.call(null,ks);
m = G__68477;
ks = G__68478;
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
return cljs.core.into.call(null,(function (){var or__3558__auto__ = m;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4283__auto__ = (function iter__68487(s__68488){return (new cljs.core.LazySeq(null,(function (){var s__68488__$1 = s__68488;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__68488__$1);if(temp__4126__auto__)
{var s__68488__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__68488__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__68488__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__68490 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__68489 = (0);while(true){
if((i__68489 < size__4282__auto__))
{var vec__68493 = cljs.core._nth.call(null,c__4281__auto__,i__68489);var k = cljs.core.nth.call(null,vec__68493,(0),null);var v = cljs.core.nth.call(null,vec__68493,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__68490,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__68495 = (i__68489 + (1));
i__68489 = G__68495;
continue;
}
} else
{{
var G__68496 = (i__68489 + (1));
i__68489 = G__68496;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68490),iter__68487.call(null,cljs.core.chunk_rest.call(null,s__68488__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68490),null);
}
} else
{var vec__68494 = cljs.core.first.call(null,s__68488__$2);var k = cljs.core.nth.call(null,vec__68494,(0),null);var v = cljs.core.nth.call(null,vec__68494,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__68487.call(null,cljs.core.rest.call(null,s__68488__$2)));
} else
{{
var G__68497 = cljs.core.rest.call(null,s__68488__$2);
s__68488__$1 = G__68497;
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
});return iter__4283__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__68498){
var m = cljs.core.first(arglist__68498);
var kvs = cljs.core.rest(arglist__68498);
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
update_in_when.cljs$lang$applyTo = (function (arglist__68499){
var m = cljs.core.first(arglist__68499);
arglist__68499 = cljs.core.next(arglist__68499);
var key_seq = cljs.core.first(arglist__68499);
arglist__68499 = cljs.core.next(arglist__68499);
var f = cljs.core.first(arglist__68499);
var args = cljs.core.rest(arglist__68499);
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4283__auto__ = ((function (s){
return (function iter__68504(s__68505){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__68505__$1 = s__68505;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__68505__$1);if(temp__4126__auto__)
{var s__68505__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__68505__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__68505__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__68507 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__68506 = (0);while(true){
if((i__68506 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__68506);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__68507,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__68508 = (i__68506 + (1));
i__68506 = G__68508;
continue;
}
} else
{{
var G__68509 = (i__68506 + (1));
i__68506 = G__68509;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68507),iter__68504.call(null,cljs.core.chunk_rest.call(null,s__68505__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68507),null);
}
} else
{var x = cljs.core.first.call(null,s__68505__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__68504.call(null,cljs.core.rest.call(null,s__68505__$2)));
} else
{{
var G__68510 = cljs.core.rest.call(null,s__68505__$2);
s__68505__$1 = G__68510;
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
;return iter__4283__auto__.call(null,xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__68511){
var colls = cljs.core.seq(arglist__68511);
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
var G__68512__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__68513 = conj_when.call(null,coll,x);
var G__68514 = cljs.core.first.call(null,xs);
var G__68515 = cljs.core.next.call(null,xs);
coll = G__68513;
x = G__68514;
xs = G__68515;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__68512 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__68512__delegate.call(this,coll,x,xs);};
G__68512.cljs$lang$maxFixedArity = 2;
G__68512.cljs$lang$applyTo = (function (arglist__68516){
var coll = cljs.core.first(arglist__68516);
arglist__68516 = cljs.core.next(arglist__68516);
var x = cljs.core.first(arglist__68516);
var xs = cljs.core.rest(arglist__68516);
return G__68512__delegate(coll,x,xs);
});
G__68512.cljs$core$IFn$_invoke$arity$variadic = G__68512__delegate;
return G__68512;
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
var G__68518__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__68517_SHARP_){return cljs.core.apply.call(null,f,p1__68517_SHARP_,args);
}));
};
var G__68518 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__68518__delegate.call(this,a,f,args);};
G__68518.cljs$lang$maxFixedArity = 2;
G__68518.cljs$lang$applyTo = (function (arglist__68519){
var a = cljs.core.first(arglist__68519);
arglist__68519 = cljs.core.next(arglist__68519);
var f = cljs.core.first(arglist__68519);
var args = cljs.core.rest(arglist__68519);
return G__68518__delegate(a,f,args);
});
G__68518.cljs$core$IFn$_invoke$arity$variadic = G__68518__delegate;
return G__68518;
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
var G__68520__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__68520 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__68520__delegate.call(this,f,arg,args);};
G__68520.cljs$lang$maxFixedArity = 2;
G__68520.cljs$lang$applyTo = (function (arglist__68521){
var f = cljs.core.first(arglist__68521);
arglist__68521 = cljs.core.next(arglist__68521);
var arg = cljs.core.first(arglist__68521);
var args = cljs.core.rest(arglist__68521);
return G__68520__delegate(f,arg,args);
});
G__68520.cljs$core$IFn$_invoke$arity$variadic = G__68520__delegate;
return G__68520;
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