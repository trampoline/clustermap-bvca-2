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
var G__38269__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__38269 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__38269__delegate.call(this,m,k,f,x1,x2,xs);};
G__38269.cljs$lang$maxFixedArity = 5;
G__38269.cljs$lang$applyTo = (function (arglist__38270){
var m = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var k = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var f = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var x1 = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var x2 = cljs.core.first(arglist__38270);
var xs = cljs.core.rest(arglist__38270);
return G__38269__delegate(m,k,f,x1,x2,xs);
});
G__38269.cljs$core$IFn$_invoke$arity$variadic = G__38269__delegate;
return G__38269;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38279_38285 = cljs.core.seq.call(null,m);var chunk__38280_38286 = null;var count__38281_38287 = (0);var i__38282_38288 = (0);while(true){
if((i__38282_38288 < count__38281_38287))
{var vec__38283_38289 = cljs.core._nth.call(null,chunk__38280_38286,i__38282_38288);var k_38290 = cljs.core.nth.call(null,vec__38283_38289,(0),null);var v_38291 = cljs.core.nth.call(null,vec__38283_38289,(1),null);var m38278_38292 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38278_38292,k_38290,f.call(null,v_38291)));
{
var G__38293 = seq__38279_38285;
var G__38294 = chunk__38280_38286;
var G__38295 = count__38281_38287;
var G__38296 = (i__38282_38288 + (1));
seq__38279_38285 = G__38293;
chunk__38280_38286 = G__38294;
count__38281_38287 = G__38295;
i__38282_38288 = G__38296;
continue;
}
} else
{var temp__4126__auto___38297 = cljs.core.seq.call(null,seq__38279_38285);if(temp__4126__auto___38297)
{var seq__38279_38298__$1 = temp__4126__auto___38297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38279_38298__$1))
{var c__4314__auto___38299 = cljs.core.chunk_first.call(null,seq__38279_38298__$1);{
var G__38300 = cljs.core.chunk_rest.call(null,seq__38279_38298__$1);
var G__38301 = c__4314__auto___38299;
var G__38302 = cljs.core.count.call(null,c__4314__auto___38299);
var G__38303 = (0);
seq__38279_38285 = G__38300;
chunk__38280_38286 = G__38301;
count__38281_38287 = G__38302;
i__38282_38288 = G__38303;
continue;
}
} else
{var vec__38284_38304 = cljs.core.first.call(null,seq__38279_38298__$1);var k_38305 = cljs.core.nth.call(null,vec__38284_38304,(0),null);var v_38306 = cljs.core.nth.call(null,vec__38284_38304,(1),null);var m38278_38307 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38278_38307,k_38305,f.call(null,v_38306)));
{
var G__38308 = cljs.core.next.call(null,seq__38279_38298__$1);
var G__38309 = null;
var G__38310 = (0);
var G__38311 = (0);
seq__38279_38285 = G__38308;
chunk__38280_38286 = G__38309;
count__38281_38287 = G__38310;
i__38282_38288 = G__38311;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38320_38326 = cljs.core.seq.call(null,m);var chunk__38321_38327 = null;var count__38322_38328 = (0);var i__38323_38329 = (0);while(true){
if((i__38323_38329 < count__38322_38328))
{var vec__38324_38330 = cljs.core._nth.call(null,chunk__38321_38327,i__38323_38329);var k_38331 = cljs.core.nth.call(null,vec__38324_38330,(0),null);var v_38332 = cljs.core.nth.call(null,vec__38324_38330,(1),null);var m38319_38333 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38319_38333,f.call(null,k_38331),v_38332));
{
var G__38334 = seq__38320_38326;
var G__38335 = chunk__38321_38327;
var G__38336 = count__38322_38328;
var G__38337 = (i__38323_38329 + (1));
seq__38320_38326 = G__38334;
chunk__38321_38327 = G__38335;
count__38322_38328 = G__38336;
i__38323_38329 = G__38337;
continue;
}
} else
{var temp__4126__auto___38338 = cljs.core.seq.call(null,seq__38320_38326);if(temp__4126__auto___38338)
{var seq__38320_38339__$1 = temp__4126__auto___38338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38320_38339__$1))
{var c__4314__auto___38340 = cljs.core.chunk_first.call(null,seq__38320_38339__$1);{
var G__38341 = cljs.core.chunk_rest.call(null,seq__38320_38339__$1);
var G__38342 = c__4314__auto___38340;
var G__38343 = cljs.core.count.call(null,c__4314__auto___38340);
var G__38344 = (0);
seq__38320_38326 = G__38341;
chunk__38321_38327 = G__38342;
count__38322_38328 = G__38343;
i__38323_38329 = G__38344;
continue;
}
} else
{var vec__38325_38345 = cljs.core.first.call(null,seq__38320_38339__$1);var k_38346 = cljs.core.nth.call(null,vec__38325_38345,(0),null);var v_38347 = cljs.core.nth.call(null,vec__38325_38345,(1),null);var m38319_38348 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38319_38348,f.call(null,k_38346),v_38347));
{
var G__38349 = cljs.core.next.call(null,seq__38320_38339__$1);
var G__38350 = null;
var G__38351 = (0);
var G__38352 = (0);
seq__38320_38326 = G__38349;
chunk__38321_38327 = G__38350;
count__38322_38328 = G__38351;
i__38323_38329 = G__38352;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38359_38363 = cljs.core.seq.call(null,ks);var chunk__38360_38364 = null;var count__38361_38365 = (0);var i__38362_38366 = (0);while(true){
if((i__38362_38366 < count__38361_38365))
{var k_38367 = cljs.core._nth.call(null,chunk__38360_38364,i__38362_38366);var m38358_38368 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38358_38368,k_38367,f.call(null,k_38367)));
{
var G__38369 = seq__38359_38363;
var G__38370 = chunk__38360_38364;
var G__38371 = count__38361_38365;
var G__38372 = (i__38362_38366 + (1));
seq__38359_38363 = G__38369;
chunk__38360_38364 = G__38370;
count__38361_38365 = G__38371;
i__38362_38366 = G__38372;
continue;
}
} else
{var temp__4126__auto___38373 = cljs.core.seq.call(null,seq__38359_38363);if(temp__4126__auto___38373)
{var seq__38359_38374__$1 = temp__4126__auto___38373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38359_38374__$1))
{var c__4314__auto___38375 = cljs.core.chunk_first.call(null,seq__38359_38374__$1);{
var G__38376 = cljs.core.chunk_rest.call(null,seq__38359_38374__$1);
var G__38377 = c__4314__auto___38375;
var G__38378 = cljs.core.count.call(null,c__4314__auto___38375);
var G__38379 = (0);
seq__38359_38363 = G__38376;
chunk__38360_38364 = G__38377;
count__38361_38365 = G__38378;
i__38362_38366 = G__38379;
continue;
}
} else
{var k_38380 = cljs.core.first.call(null,seq__38359_38374__$1);var m38358_38381 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38358_38381,k_38380,f.call(null,k_38380)));
{
var G__38382 = cljs.core.next.call(null,seq__38359_38374__$1);
var G__38383 = null;
var G__38384 = (0);
var G__38385 = (0);
seq__38359_38363 = G__38382;
chunk__38360_38364 = G__38383;
count__38361_38365 = G__38384;
i__38362_38366 = G__38385;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38392_38396 = cljs.core.seq.call(null,vs);var chunk__38393_38397 = null;var count__38394_38398 = (0);var i__38395_38399 = (0);while(true){
if((i__38395_38399 < count__38394_38398))
{var v_38400 = cljs.core._nth.call(null,chunk__38393_38397,i__38395_38399);var m38391_38401 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38391_38401,f.call(null,v_38400),v_38400));
{
var G__38402 = seq__38392_38396;
var G__38403 = chunk__38393_38397;
var G__38404 = count__38394_38398;
var G__38405 = (i__38395_38399 + (1));
seq__38392_38396 = G__38402;
chunk__38393_38397 = G__38403;
count__38394_38398 = G__38404;
i__38395_38399 = G__38405;
continue;
}
} else
{var temp__4126__auto___38406 = cljs.core.seq.call(null,seq__38392_38396);if(temp__4126__auto___38406)
{var seq__38392_38407__$1 = temp__4126__auto___38406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38392_38407__$1))
{var c__4314__auto___38408 = cljs.core.chunk_first.call(null,seq__38392_38407__$1);{
var G__38409 = cljs.core.chunk_rest.call(null,seq__38392_38407__$1);
var G__38410 = c__4314__auto___38408;
var G__38411 = cljs.core.count.call(null,c__4314__auto___38408);
var G__38412 = (0);
seq__38392_38396 = G__38409;
chunk__38393_38397 = G__38410;
count__38394_38398 = G__38411;
i__38395_38399 = G__38412;
continue;
}
} else
{var v_38413 = cljs.core.first.call(null,seq__38392_38407__$1);var m38391_38414 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38391_38414,f.call(null,v_38413),v_38413));
{
var G__38415 = cljs.core.next.call(null,seq__38392_38407__$1);
var G__38416 = null;
var G__38417 = (0);
var G__38418 = (0);
seq__38392_38396 = G__38415;
chunk__38393_38397 = G__38416;
count__38394_38398 = G__38417;
i__38395_38399 = G__38418;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__38419){var vec__38421 = p__38419;var k = cljs.core.nth.call(null,vec__38421,(0),null);var ks = cljs.core.nthnext.call(null,vec__38421,(1));if(cljs.core.truth_(m))
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38430_38436 = cljs.core.seq.call(null,x);var chunk__38431_38437 = null;var count__38432_38438 = (0);var i__38433_38439 = (0);while(true){
if((i__38433_38439 < count__38432_38438))
{var vec__38434_38440 = cljs.core._nth.call(null,chunk__38431_38437,i__38433_38439);var k_38441 = cljs.core.nth.call(null,vec__38434_38440,(0),null);var v_38442 = cljs.core.nth.call(null,vec__38434_38440,(1),null);var m38429_38443 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38429_38443,((typeof k_38441 === 'string')?cljs.core.keyword.call(null,k_38441):k_38441),keywordize_map.call(null,v_38442)));
{
var G__38444 = seq__38430_38436;
var G__38445 = chunk__38431_38437;
var G__38446 = count__38432_38438;
var G__38447 = (i__38433_38439 + (1));
seq__38430_38436 = G__38444;
chunk__38431_38437 = G__38445;
count__38432_38438 = G__38446;
i__38433_38439 = G__38447;
continue;
}
} else
{var temp__4126__auto___38448 = cljs.core.seq.call(null,seq__38430_38436);if(temp__4126__auto___38448)
{var seq__38430_38449__$1 = temp__4126__auto___38448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38430_38449__$1))
{var c__4314__auto___38450 = cljs.core.chunk_first.call(null,seq__38430_38449__$1);{
var G__38451 = cljs.core.chunk_rest.call(null,seq__38430_38449__$1);
var G__38452 = c__4314__auto___38450;
var G__38453 = cljs.core.count.call(null,c__4314__auto___38450);
var G__38454 = (0);
seq__38430_38436 = G__38451;
chunk__38431_38437 = G__38452;
count__38432_38438 = G__38453;
i__38433_38439 = G__38454;
continue;
}
} else
{var vec__38435_38455 = cljs.core.first.call(null,seq__38430_38449__$1);var k_38456 = cljs.core.nth.call(null,vec__38435_38455,(0),null);var v_38457 = cljs.core.nth.call(null,vec__38435_38455,(1),null);var m38429_38458 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38429_38458,((typeof k_38456 === 'string')?cljs.core.keyword.call(null,k_38456):k_38456),keywordize_map.call(null,v_38457)));
{
var G__38459 = cljs.core.next.call(null,seq__38430_38449__$1);
var G__38460 = null;
var G__38461 = (0);
var G__38462 = (0);
seq__38430_38436 = G__38459;
chunk__38431_38437 = G__38460;
count__38432_38438 = G__38461;
i__38433_38439 = G__38462;
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
var G__38463 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__38464 = cljs.core.next.call(null,ks);
m = G__38463;
ks = G__38464;
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
})(),(function (){var iter__4283__auto__ = (function iter__38473(s__38474){return (new cljs.core.LazySeq(null,(function (){var s__38474__$1 = s__38474;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38474__$1);if(temp__4126__auto__)
{var s__38474__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38474__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__38474__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__38476 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__38475 = (0);while(true){
if((i__38475 < size__4282__auto__))
{var vec__38479 = cljs.core._nth.call(null,c__4281__auto__,i__38475);var k = cljs.core.nth.call(null,vec__38479,(0),null);var v = cljs.core.nth.call(null,vec__38479,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__38476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__38481 = (i__38475 + (1));
i__38475 = G__38481;
continue;
}
} else
{{
var G__38482 = (i__38475 + (1));
i__38475 = G__38482;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38476),iter__38473.call(null,cljs.core.chunk_rest.call(null,s__38474__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38476),null);
}
} else
{var vec__38480 = cljs.core.first.call(null,s__38474__$2);var k = cljs.core.nth.call(null,vec__38480,(0),null);var v = cljs.core.nth.call(null,vec__38480,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__38473.call(null,cljs.core.rest.call(null,s__38474__$2)));
} else
{{
var G__38483 = cljs.core.rest.call(null,s__38474__$2);
s__38474__$1 = G__38483;
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
assoc_when.cljs$lang$applyTo = (function (arglist__38484){
var m = cljs.core.first(arglist__38484);
var kvs = cljs.core.rest(arglist__38484);
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
update_in_when.cljs$lang$applyTo = (function (arglist__38485){
var m = cljs.core.first(arglist__38485);
arglist__38485 = cljs.core.next(arglist__38485);
var key_seq = cljs.core.first(arglist__38485);
arglist__38485 = cljs.core.next(arglist__38485);
var f = cljs.core.first(arglist__38485);
var args = cljs.core.rest(arglist__38485);
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
return (function iter__38490(s__38491){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__38491__$1 = s__38491;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38491__$1);if(temp__4126__auto__)
{var s__38491__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38491__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__38491__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__38493 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__38492 = (0);while(true){
if((i__38492 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__38492);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__38493,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__38494 = (i__38492 + (1));
i__38492 = G__38494;
continue;
}
} else
{{
var G__38495 = (i__38492 + (1));
i__38492 = G__38495;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38493),iter__38490.call(null,cljs.core.chunk_rest.call(null,s__38491__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38493),null);
}
} else
{var x = cljs.core.first.call(null,s__38491__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__38490.call(null,cljs.core.rest.call(null,s__38491__$2)));
} else
{{
var G__38496 = cljs.core.rest.call(null,s__38491__$2);
s__38491__$1 = G__38496;
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
interleave_all.cljs$lang$applyTo = (function (arglist__38497){
var colls = cljs.core.seq(arglist__38497);
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
var G__38498__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__38499 = conj_when.call(null,coll,x);
var G__38500 = cljs.core.first.call(null,xs);
var G__38501 = cljs.core.next.call(null,xs);
coll = G__38499;
x = G__38500;
xs = G__38501;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__38498 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38498__delegate.call(this,coll,x,xs);};
G__38498.cljs$lang$maxFixedArity = 2;
G__38498.cljs$lang$applyTo = (function (arglist__38502){
var coll = cljs.core.first(arglist__38502);
arglist__38502 = cljs.core.next(arglist__38502);
var x = cljs.core.first(arglist__38502);
var xs = cljs.core.rest(arglist__38502);
return G__38498__delegate(coll,x,xs);
});
G__38498.cljs$core$IFn$_invoke$arity$variadic = G__38498__delegate;
return G__38498;
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
var G__38504__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__38503_SHARP_){return cljs.core.apply.call(null,f,p1__38503_SHARP_,args);
}));
};
var G__38504 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38504__delegate.call(this,a,f,args);};
G__38504.cljs$lang$maxFixedArity = 2;
G__38504.cljs$lang$applyTo = (function (arglist__38505){
var a = cljs.core.first(arglist__38505);
arglist__38505 = cljs.core.next(arglist__38505);
var f = cljs.core.first(arglist__38505);
var args = cljs.core.rest(arglist__38505);
return G__38504__delegate(a,f,args);
});
G__38504.cljs$core$IFn$_invoke$arity$variadic = G__38504__delegate;
return G__38504;
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
var G__38506__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__38506 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38506__delegate.call(this,f,arg,args);};
G__38506.cljs$lang$maxFixedArity = 2;
G__38506.cljs$lang$applyTo = (function (arglist__38507){
var f = cljs.core.first(arglist__38507);
arglist__38507 = cljs.core.next(arglist__38507);
var arg = cljs.core.first(arglist__38507);
var args = cljs.core.rest(arglist__38507);
return G__38506__delegate(f,arg,args);
});
G__38506.cljs$core$IFn$_invoke$arity$variadic = G__38506__delegate;
return G__38506;
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
