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
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$1175;
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1)));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2)));
});
var update__6 = (function() { 
var G__53373__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__53373 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__53373__delegate.call(this,m,k,f,x1,x2,xs);};
G__53373.cljs$lang$maxFixedArity = 5;
G__53373.cljs$lang$applyTo = (function (arglist__53374){
var m = cljs.core.first(arglist__53374);
arglist__53374 = cljs.core.next(arglist__53374);
var k = cljs.core.first(arglist__53374);
arglist__53374 = cljs.core.next(arglist__53374);
var f = cljs.core.first(arglist__53374);
arglist__53374 = cljs.core.next(arglist__53374);
var x1 = cljs.core.first(arglist__53374);
arglist__53374 = cljs.core.next(arglist__53374);
var x2 = cljs.core.first(arglist__53374);
var xs = cljs.core.rest(arglist__53374);
return G__53373__delegate(m,k,f,x1,x2,xs);
});
G__53373.cljs$core$IFn$_invoke$arity$variadic = G__53373__delegate;
return G__53373;
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
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_(m))
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53383_53389 = cljs.core.seq(m);var chunk__53384_53390 = null;var count__53385_53391 = (0);var i__53386_53392 = (0);while(true){
if((i__53386_53392 < count__53385_53391))
{var vec__53387_53393 = chunk__53384_53390.cljs$core$IIndexed$_nth$arity$2(null,i__53386_53392);var k_53394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53387_53393,(0),null);var v_53395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53387_53393,(1),null);var m53382_53396 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53382_53396,k_53394,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53395) : f.call(null,v_53395)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53382_53396,k_53394,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53395) : f.call(null,v_53395)))));
{
var G__53397 = seq__53383_53389;
var G__53398 = chunk__53384_53390;
var G__53399 = count__53385_53391;
var G__53400 = (i__53386_53392 + (1));
seq__53383_53389 = G__53397;
chunk__53384_53390 = G__53398;
count__53385_53391 = G__53399;
i__53386_53392 = G__53400;
continue;
}
} else
{var temp__4126__auto___53401 = cljs.core.seq(seq__53383_53389);if(temp__4126__auto___53401)
{var seq__53383_53402__$1 = temp__4126__auto___53401;if(cljs.core.chunked_seq_QMARK_(seq__53383_53402__$1))
{var c__4314__auto___53403 = cljs.core.chunk_first(seq__53383_53402__$1);{
var G__53404 = cljs.core.chunk_rest(seq__53383_53402__$1);
var G__53405 = c__4314__auto___53403;
var G__53406 = cljs.core.count(c__4314__auto___53403);
var G__53407 = (0);
seq__53383_53389 = G__53404;
chunk__53384_53390 = G__53405;
count__53385_53391 = G__53406;
i__53386_53392 = G__53407;
continue;
}
} else
{var vec__53388_53408 = cljs.core.first(seq__53383_53402__$1);var k_53409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53388_53408,(0),null);var v_53410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53388_53408,(1),null);var m53382_53411 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53382_53411,k_53409,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53410) : f.call(null,v_53410)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53382_53411,k_53409,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53410) : f.call(null,v_53410)))));
{
var G__53412 = cljs.core.next(seq__53383_53402__$1);
var G__53413 = null;
var G__53414 = (0);
var G__53415 = (0);
seq__53383_53389 = G__53412;
chunk__53384_53390 = G__53413;
count__53385_53391 = G__53414;
i__53386_53392 = G__53415;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__)));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53424_53430 = cljs.core.seq(m);var chunk__53425_53431 = null;var count__53426_53432 = (0);var i__53427_53433 = (0);while(true){
if((i__53427_53433 < count__53426_53432))
{var vec__53428_53434 = chunk__53425_53431.cljs$core$IIndexed$_nth$arity$2(null,i__53427_53433);var k_53435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53428_53434,(0),null);var v_53436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53428_53434,(1),null);var m53423_53437 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53423_53437,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53435) : f.call(null,k_53435)),v_53436)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53423_53437,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53435) : f.call(null,k_53435)),v_53436)));
{
var G__53438 = seq__53424_53430;
var G__53439 = chunk__53425_53431;
var G__53440 = count__53426_53432;
var G__53441 = (i__53427_53433 + (1));
seq__53424_53430 = G__53438;
chunk__53425_53431 = G__53439;
count__53426_53432 = G__53440;
i__53427_53433 = G__53441;
continue;
}
} else
{var temp__4126__auto___53442 = cljs.core.seq(seq__53424_53430);if(temp__4126__auto___53442)
{var seq__53424_53443__$1 = temp__4126__auto___53442;if(cljs.core.chunked_seq_QMARK_(seq__53424_53443__$1))
{var c__4314__auto___53444 = cljs.core.chunk_first(seq__53424_53443__$1);{
var G__53445 = cljs.core.chunk_rest(seq__53424_53443__$1);
var G__53446 = c__4314__auto___53444;
var G__53447 = cljs.core.count(c__4314__auto___53444);
var G__53448 = (0);
seq__53424_53430 = G__53445;
chunk__53425_53431 = G__53446;
count__53426_53432 = G__53447;
i__53427_53433 = G__53448;
continue;
}
} else
{var vec__53429_53449 = cljs.core.first(seq__53424_53443__$1);var k_53450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53429_53449,(0),null);var v_53451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53429_53449,(1),null);var m53423_53452 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53423_53452,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53450) : f.call(null,k_53450)),v_53451)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53423_53452,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53450) : f.call(null,k_53450)),v_53451)));
{
var G__53453 = cljs.core.next(seq__53424_53443__$1);
var G__53454 = null;
var G__53455 = (0);
var G__53456 = (0);
seq__53424_53430 = G__53453;
chunk__53425_53431 = G__53454;
count__53426_53432 = G__53455;
i__53427_53433 = G__53456;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__)));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53463_53467 = cljs.core.seq(ks);var chunk__53464_53468 = null;var count__53465_53469 = (0);var i__53466_53470 = (0);while(true){
if((i__53466_53470 < count__53465_53469))
{var k_53471 = chunk__53464_53468.cljs$core$IIndexed$_nth$arity$2(null,i__53466_53470);var m53462_53472 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53462_53472,k_53471,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53471) : f.call(null,k_53471)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53462_53472,k_53471,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53471) : f.call(null,k_53471)))));
{
var G__53473 = seq__53463_53467;
var G__53474 = chunk__53464_53468;
var G__53475 = count__53465_53469;
var G__53476 = (i__53466_53470 + (1));
seq__53463_53467 = G__53473;
chunk__53464_53468 = G__53474;
count__53465_53469 = G__53475;
i__53466_53470 = G__53476;
continue;
}
} else
{var temp__4126__auto___53477 = cljs.core.seq(seq__53463_53467);if(temp__4126__auto___53477)
{var seq__53463_53478__$1 = temp__4126__auto___53477;if(cljs.core.chunked_seq_QMARK_(seq__53463_53478__$1))
{var c__4314__auto___53479 = cljs.core.chunk_first(seq__53463_53478__$1);{
var G__53480 = cljs.core.chunk_rest(seq__53463_53478__$1);
var G__53481 = c__4314__auto___53479;
var G__53482 = cljs.core.count(c__4314__auto___53479);
var G__53483 = (0);
seq__53463_53467 = G__53480;
chunk__53464_53468 = G__53481;
count__53465_53469 = G__53482;
i__53466_53470 = G__53483;
continue;
}
} else
{var k_53484 = cljs.core.first(seq__53463_53478__$1);var m53462_53485 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53462_53485,k_53484,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53484) : f.call(null,k_53484)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53462_53485,k_53484,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53484) : f.call(null,k_53484)))));
{
var G__53486 = cljs.core.next(seq__53463_53478__$1);
var G__53487 = null;
var G__53488 = (0);
var G__53489 = (0);
seq__53463_53467 = G__53486;
chunk__53464_53468 = G__53487;
count__53465_53469 = G__53488;
i__53466_53470 = G__53489;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__)));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53496_53500 = cljs.core.seq(vs);var chunk__53497_53501 = null;var count__53498_53502 = (0);var i__53499_53503 = (0);while(true){
if((i__53499_53503 < count__53498_53502))
{var v_53504 = chunk__53497_53501.cljs$core$IIndexed$_nth$arity$2(null,i__53499_53503);var m53495_53505 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53495_53505,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53504) : f.call(null,v_53504)),v_53504)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53495_53505,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53504) : f.call(null,v_53504)),v_53504)));
{
var G__53506 = seq__53496_53500;
var G__53507 = chunk__53497_53501;
var G__53508 = count__53498_53502;
var G__53509 = (i__53499_53503 + (1));
seq__53496_53500 = G__53506;
chunk__53497_53501 = G__53507;
count__53498_53502 = G__53508;
i__53499_53503 = G__53509;
continue;
}
} else
{var temp__4126__auto___53510 = cljs.core.seq(seq__53496_53500);if(temp__4126__auto___53510)
{var seq__53496_53511__$1 = temp__4126__auto___53510;if(cljs.core.chunked_seq_QMARK_(seq__53496_53511__$1))
{var c__4314__auto___53512 = cljs.core.chunk_first(seq__53496_53511__$1);{
var G__53513 = cljs.core.chunk_rest(seq__53496_53511__$1);
var G__53514 = c__4314__auto___53512;
var G__53515 = cljs.core.count(c__4314__auto___53512);
var G__53516 = (0);
seq__53496_53500 = G__53513;
chunk__53497_53501 = G__53514;
count__53498_53502 = G__53515;
i__53499_53503 = G__53516;
continue;
}
} else
{var v_53517 = cljs.core.first(seq__53496_53511__$1);var m53495_53518 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53495_53518,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53517) : f.call(null,v_53517)),v_53517)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53495_53518,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53517) : f.call(null,v_53517)),v_53517)));
{
var G__53519 = cljs.core.next(seq__53496_53511__$1);
var G__53520 = null;
var G__53521 = (0);
var G__53522 = (0);
seq__53496_53500 = G__53519;
chunk__53497_53501 = G__53520;
count__53498_53502 = G__53521;
i__53499_53503 = G__53522;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__)));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__53523){var vec__53525 = p__53523;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53525,(0),null);var ks = cljs.core.nthnext(vec__53525,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3546__auto__ = ks;if(and__3546__auto__)
{return dissoc_in((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)),ks);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else
{var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);if(cljs.core.empty_QMARK_(res))
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
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_(x))
{var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53534_53540 = cljs.core.seq(x);var chunk__53535_53541 = null;var count__53536_53542 = (0);var i__53537_53543 = (0);while(true){
if((i__53537_53543 < count__53536_53542))
{var vec__53538_53544 = chunk__53535_53541.cljs$core$IIndexed$_nth$arity$2(null,i__53537_53543);var k_53545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53538_53544,(0),null);var v_53546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53538_53544,(1),null);var m53533_53547 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53533_53547,((typeof k_53545 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53545):k_53545),keywordize_map(v_53546))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53533_53547,((typeof k_53545 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53545):k_53545),keywordize_map(v_53546))));
{
var G__53548 = seq__53534_53540;
var G__53549 = chunk__53535_53541;
var G__53550 = count__53536_53542;
var G__53551 = (i__53537_53543 + (1));
seq__53534_53540 = G__53548;
chunk__53535_53541 = G__53549;
count__53536_53542 = G__53550;
i__53537_53543 = G__53551;
continue;
}
} else
{var temp__4126__auto___53552 = cljs.core.seq(seq__53534_53540);if(temp__4126__auto___53552)
{var seq__53534_53553__$1 = temp__4126__auto___53552;if(cljs.core.chunked_seq_QMARK_(seq__53534_53553__$1))
{var c__4314__auto___53554 = cljs.core.chunk_first(seq__53534_53553__$1);{
var G__53555 = cljs.core.chunk_rest(seq__53534_53553__$1);
var G__53556 = c__4314__auto___53554;
var G__53557 = cljs.core.count(c__4314__auto___53554);
var G__53558 = (0);
seq__53534_53540 = G__53555;
chunk__53535_53541 = G__53556;
count__53536_53542 = G__53557;
i__53537_53543 = G__53558;
continue;
}
} else
{var vec__53539_53559 = cljs.core.first(seq__53534_53553__$1);var k_53560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53539_53559,(0),null);var v_53561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53539_53559,(1),null);var m53533_53562 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53533_53562,((typeof k_53560 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53560):k_53560),keywordize_map(v_53561))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53533_53562,((typeof k_53560 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53560):k_53560),keywordize_map(v_53561))));
{
var G__53563 = cljs.core.next(seq__53534_53553__$1);
var G__53564 = null;
var G__53565 = (0);
var G__53566 = (0);
seq__53534_53540 = G__53563;
chunk__53535_53541 = G__53564;
count__53536_53542 = G__53565;
i__53537_53543 = G__53566;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__)));
} else
{if(cljs.core.seq_QMARK_(x))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_(x))
{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find(m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__12509__auto__ = temp__4124__auto__;return cljs.core.val(pair__12509__auto__);
} else
{var e = schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq(ks))
{{
var G__53567 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__53568 = cljs.core.next(ks);
m = G__53567;
ks = G__53568;
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
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0))))));
}
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3558__auto__ = m;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4283__auto__ = (function iter__53577(s__53578){return (new cljs.core.LazySeq(null,(function (){var s__53578__$1 = s__53578;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53578__$1);if(temp__4126__auto__)
{var s__53578__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53578__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__53578__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__53580 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__53579 = (0);while(true){
if((i__53579 < size__4282__auto__))
{var vec__53583 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__53579);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53583,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53583,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__53580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53585 = (i__53579 + (1));
i__53579 = G__53585;
continue;
}
} else
{{
var G__53586 = (i__53579 + (1));
i__53579 = G__53586;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53580),iter__53577(cljs.core.chunk_rest(s__53578__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53580),null);
}
} else
{var vec__53584 = cljs.core.first(s__53578__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53584,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53584,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53577(cljs.core.rest(s__53578__$2)));
} else
{{
var G__53587 = cljs.core.rest(s__53578__$2);
s__53578__$1 = G__53587;
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
});return iter__4283__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__53588){
var m = cljs.core.first(arglist__53588);
var kvs = cljs.core.rest(arglist__53588);
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
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__53589){
var m = cljs.core.first(arglist__53589);
arglist__53589 = cljs.core.next(arglist__53589);
var key_seq = cljs.core.first(arglist__53589);
arglist__53589 = cljs.core.next(arglist__53589);
var f = cljs.core.first(arglist__53589);
var args = cljs.core.rest(arglist__53589);
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
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x));return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(x) : map_fn.call(null,x))));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next(s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat(n);
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
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq(s))
{return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){return unchunk(cljs.core.rest(s));
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
var sum__1 = (function (xs){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
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
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq(xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next(xs__$1))
{return null;
} else
{return cljs.core.first(xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed(cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))))
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY) : cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY));var iter__4283__auto__ = ((function (s){
return (function iter__53594(s__53595){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__53595__$1 = s__53595;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53595__$1);if(temp__4126__auto__)
{var s__53595__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53595__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__53595__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__53597 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__53596 = (0);while(true){
if((i__53596 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__53596);var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id)))
{cljs.core.chunk_append(b__53597,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__53598 = (i__53596 + (1));
i__53596 = G__53598;
continue;
}
} else
{{
var G__53599 = (i__53596 + (1));
i__53596 = G__53599;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53597),iter__53594(cljs.core.chunk_rest(s__53595__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53597),null);
}
} else
{var x = cljs.core.first(s__53595__$2);var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__53594(cljs.core.rest(s__53595__$2)));
} else
{{
var G__53600 = cljs.core.rest(s__53595__$2);
s__53595__$1 = G__53600;
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
;return iter__4283__auto__(xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq(seqs))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__53601){
var colls = cljs.core.seq(arglist__53601);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__53602__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__53603 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__53604 = cljs.core.first(xs);
var G__53605 = cljs.core.next(xs);
coll = G__53603;
x = G__53604;
xs = G__53605;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__53602 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53602__delegate.call(this,coll,x,xs);};
G__53602.cljs$lang$maxFixedArity = 2;
G__53602.cljs$lang$applyTo = (function (arglist__53606){
var coll = cljs.core.first(arglist__53606);
arglist__53606 = cljs.core.next(arglist__53606);
var x = cljs.core.first(arglist__53606);
var xs = cljs.core.rest(arglist__53606);
return G__53602__delegate(coll,x,xs);
});
G__53602.cljs$core$IFn$_invoke$arity$variadic = G__53602__delegate;
return G__53602;
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
{return cljs.core.cons(x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));var new_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val));if(cljs.core.compare_and_set_BANG_(a,old_val,new_val))
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
var G__53608__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__53607_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__53607_SHARP_,args);
}));
};
var G__53608 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53608__delegate.call(this,a,f,args);};
G__53608.cljs$lang$maxFixedArity = 2;
G__53608.cljs$lang$applyTo = (function (arglist__53609){
var a = cljs.core.first(arglist__53609);
arglist__53609 = cljs.core.next(arglist__53609);
var f = cljs.core.first(arglist__53609);
var args = cljs.core.rest(arglist__53609);
return G__53608__delegate(a,f,args);
});
G__53608.cljs$core$IFn$_invoke$arity$variadic = G__53608__delegate;
return G__53608;
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
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
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
var mapply__2 = (function (f,m){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__53610__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__53610 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53610__delegate.call(this,f,arg,args);};
G__53610.cljs$lang$maxFixedArity = 2;
G__53610.cljs$lang$applyTo = (function (arglist__53611){
var f = cljs.core.first(arglist__53611);
arglist__53611 = cljs.core.next(arglist__53611);
var arg = cljs.core.first(arglist__53611);
var args = cljs.core.rest(arglist__53611);
return G__53610__delegate(f,arg,args);
});
G__53610.cljs$core$IFn$_invoke$arity$variadic = G__53610__delegate;
return G__53610;
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
