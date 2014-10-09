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
var G__53364__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__53364 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__53364__delegate.call(this,m,k,f,x1,x2,xs);};
G__53364.cljs$lang$maxFixedArity = 5;
G__53364.cljs$lang$applyTo = (function (arglist__53365){
var m = cljs.core.first(arglist__53365);
arglist__53365 = cljs.core.next(arglist__53365);
var k = cljs.core.first(arglist__53365);
arglist__53365 = cljs.core.next(arglist__53365);
var f = cljs.core.first(arglist__53365);
arglist__53365 = cljs.core.next(arglist__53365);
var x1 = cljs.core.first(arglist__53365);
arglist__53365 = cljs.core.next(arglist__53365);
var x2 = cljs.core.first(arglist__53365);
var xs = cljs.core.rest(arglist__53365);
return G__53364__delegate(m,k,f,x1,x2,xs);
});
G__53364.cljs$core$IFn$_invoke$arity$variadic = G__53364__delegate;
return G__53364;
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
{var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53374_53380 = cljs.core.seq(m);var chunk__53375_53381 = null;var count__53376_53382 = (0);var i__53377_53383 = (0);while(true){
if((i__53377_53383 < count__53376_53382))
{var vec__53378_53384 = chunk__53375_53381.cljs$core$IIndexed$_nth$arity$2(null,i__53377_53383);var k_53385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53378_53384,(0),null);var v_53386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53378_53384,(1),null);var m53373_53387 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53373_53387,k_53385,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53386) : f.call(null,v_53386)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53373_53387,k_53385,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53386) : f.call(null,v_53386)))));
{
var G__53388 = seq__53374_53380;
var G__53389 = chunk__53375_53381;
var G__53390 = count__53376_53382;
var G__53391 = (i__53377_53383 + (1));
seq__53374_53380 = G__53388;
chunk__53375_53381 = G__53389;
count__53376_53382 = G__53390;
i__53377_53383 = G__53391;
continue;
}
} else
{var temp__4126__auto___53392 = cljs.core.seq(seq__53374_53380);if(temp__4126__auto___53392)
{var seq__53374_53393__$1 = temp__4126__auto___53392;if(cljs.core.chunked_seq_QMARK_(seq__53374_53393__$1))
{var c__4314__auto___53394 = cljs.core.chunk_first(seq__53374_53393__$1);{
var G__53395 = cljs.core.chunk_rest(seq__53374_53393__$1);
var G__53396 = c__4314__auto___53394;
var G__53397 = cljs.core.count(c__4314__auto___53394);
var G__53398 = (0);
seq__53374_53380 = G__53395;
chunk__53375_53381 = G__53396;
count__53376_53382 = G__53397;
i__53377_53383 = G__53398;
continue;
}
} else
{var vec__53379_53399 = cljs.core.first(seq__53374_53393__$1);var k_53400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53379_53399,(0),null);var v_53401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53379_53399,(1),null);var m53373_53402 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53373_53402,k_53400,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53401) : f.call(null,v_53401)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53373_53402,k_53400,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53401) : f.call(null,v_53401)))));
{
var G__53403 = cljs.core.next(seq__53374_53393__$1);
var G__53404 = null;
var G__53405 = (0);
var G__53406 = (0);
seq__53374_53380 = G__53403;
chunk__53375_53381 = G__53404;
count__53376_53382 = G__53405;
i__53377_53383 = G__53406;
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
{var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53415_53421 = cljs.core.seq(m);var chunk__53416_53422 = null;var count__53417_53423 = (0);var i__53418_53424 = (0);while(true){
if((i__53418_53424 < count__53417_53423))
{var vec__53419_53425 = chunk__53416_53422.cljs$core$IIndexed$_nth$arity$2(null,i__53418_53424);var k_53426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53419_53425,(0),null);var v_53427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53419_53425,(1),null);var m53414_53428 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53414_53428,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53426) : f.call(null,k_53426)),v_53427)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53414_53428,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53426) : f.call(null,k_53426)),v_53427)));
{
var G__53429 = seq__53415_53421;
var G__53430 = chunk__53416_53422;
var G__53431 = count__53417_53423;
var G__53432 = (i__53418_53424 + (1));
seq__53415_53421 = G__53429;
chunk__53416_53422 = G__53430;
count__53417_53423 = G__53431;
i__53418_53424 = G__53432;
continue;
}
} else
{var temp__4126__auto___53433 = cljs.core.seq(seq__53415_53421);if(temp__4126__auto___53433)
{var seq__53415_53434__$1 = temp__4126__auto___53433;if(cljs.core.chunked_seq_QMARK_(seq__53415_53434__$1))
{var c__4314__auto___53435 = cljs.core.chunk_first(seq__53415_53434__$1);{
var G__53436 = cljs.core.chunk_rest(seq__53415_53434__$1);
var G__53437 = c__4314__auto___53435;
var G__53438 = cljs.core.count(c__4314__auto___53435);
var G__53439 = (0);
seq__53415_53421 = G__53436;
chunk__53416_53422 = G__53437;
count__53417_53423 = G__53438;
i__53418_53424 = G__53439;
continue;
}
} else
{var vec__53420_53440 = cljs.core.first(seq__53415_53434__$1);var k_53441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53420_53440,(0),null);var v_53442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53420_53440,(1),null);var m53414_53443 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53414_53443,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53441) : f.call(null,k_53441)),v_53442)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53414_53443,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53441) : f.call(null,k_53441)),v_53442)));
{
var G__53444 = cljs.core.next(seq__53415_53434__$1);
var G__53445 = null;
var G__53446 = (0);
var G__53447 = (0);
seq__53415_53421 = G__53444;
chunk__53416_53422 = G__53445;
count__53417_53423 = G__53446;
i__53418_53424 = G__53447;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53454_53458 = cljs.core.seq(ks);var chunk__53455_53459 = null;var count__53456_53460 = (0);var i__53457_53461 = (0);while(true){
if((i__53457_53461 < count__53456_53460))
{var k_53462 = chunk__53455_53459.cljs$core$IIndexed$_nth$arity$2(null,i__53457_53461);var m53453_53463 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53453_53463,k_53462,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53462) : f.call(null,k_53462)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53453_53463,k_53462,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53462) : f.call(null,k_53462)))));
{
var G__53464 = seq__53454_53458;
var G__53465 = chunk__53455_53459;
var G__53466 = count__53456_53460;
var G__53467 = (i__53457_53461 + (1));
seq__53454_53458 = G__53464;
chunk__53455_53459 = G__53465;
count__53456_53460 = G__53466;
i__53457_53461 = G__53467;
continue;
}
} else
{var temp__4126__auto___53468 = cljs.core.seq(seq__53454_53458);if(temp__4126__auto___53468)
{var seq__53454_53469__$1 = temp__4126__auto___53468;if(cljs.core.chunked_seq_QMARK_(seq__53454_53469__$1))
{var c__4314__auto___53470 = cljs.core.chunk_first(seq__53454_53469__$1);{
var G__53471 = cljs.core.chunk_rest(seq__53454_53469__$1);
var G__53472 = c__4314__auto___53470;
var G__53473 = cljs.core.count(c__4314__auto___53470);
var G__53474 = (0);
seq__53454_53458 = G__53471;
chunk__53455_53459 = G__53472;
count__53456_53460 = G__53473;
i__53457_53461 = G__53474;
continue;
}
} else
{var k_53475 = cljs.core.first(seq__53454_53469__$1);var m53453_53476 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53453_53476,k_53475,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53475) : f.call(null,k_53475)))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53453_53476,k_53475,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_53475) : f.call(null,k_53475)))));
{
var G__53477 = cljs.core.next(seq__53454_53469__$1);
var G__53478 = null;
var G__53479 = (0);
var G__53480 = (0);
seq__53454_53458 = G__53477;
chunk__53455_53459 = G__53478;
count__53456_53460 = G__53479;
i__53457_53461 = G__53480;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53487_53491 = cljs.core.seq(vs);var chunk__53488_53492 = null;var count__53489_53493 = (0);var i__53490_53494 = (0);while(true){
if((i__53490_53494 < count__53489_53493))
{var v_53495 = chunk__53488_53492.cljs$core$IIndexed$_nth$arity$2(null,i__53490_53494);var m53486_53496 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53486_53496,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53495) : f.call(null,v_53495)),v_53495)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53486_53496,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53495) : f.call(null,v_53495)),v_53495)));
{
var G__53497 = seq__53487_53491;
var G__53498 = chunk__53488_53492;
var G__53499 = count__53489_53493;
var G__53500 = (i__53490_53494 + (1));
seq__53487_53491 = G__53497;
chunk__53488_53492 = G__53498;
count__53489_53493 = G__53499;
i__53490_53494 = G__53500;
continue;
}
} else
{var temp__4126__auto___53501 = cljs.core.seq(seq__53487_53491);if(temp__4126__auto___53501)
{var seq__53487_53502__$1 = temp__4126__auto___53501;if(cljs.core.chunked_seq_QMARK_(seq__53487_53502__$1))
{var c__4314__auto___53503 = cljs.core.chunk_first(seq__53487_53502__$1);{
var G__53504 = cljs.core.chunk_rest(seq__53487_53502__$1);
var G__53505 = c__4314__auto___53503;
var G__53506 = cljs.core.count(c__4314__auto___53503);
var G__53507 = (0);
seq__53487_53491 = G__53504;
chunk__53488_53492 = G__53505;
count__53489_53493 = G__53506;
i__53490_53494 = G__53507;
continue;
}
} else
{var v_53508 = cljs.core.first(seq__53487_53502__$1);var m53486_53509 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53486_53509,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53508) : f.call(null,v_53508)),v_53508)) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53486_53509,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_53508) : f.call(null,v_53508)),v_53508)));
{
var G__53510 = cljs.core.next(seq__53487_53502__$1);
var G__53511 = null;
var G__53512 = (0);
var G__53513 = (0);
seq__53487_53491 = G__53510;
chunk__53488_53492 = G__53511;
count__53489_53493 = G__53512;
i__53490_53494 = G__53513;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__53514){var vec__53516 = p__53514;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53516,(0),null);var ks = cljs.core.nthnext(vec__53516,(1));if(cljs.core.truth_(m))
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
{var m_atom__12440__auto__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)) : cljs.core.atom.call(null,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY)));var seq__53525_53531 = cljs.core.seq(x);var chunk__53526_53532 = null;var count__53527_53533 = (0);var i__53528_53534 = (0);while(true){
if((i__53528_53534 < count__53527_53533))
{var vec__53529_53535 = chunk__53526_53532.cljs$core$IIndexed$_nth$arity$2(null,i__53528_53534);var k_53536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53529_53535,(0),null);var v_53537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53529_53535,(1),null);var m53524_53538 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53524_53538,((typeof k_53536 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53536):k_53536),keywordize_map(v_53537))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53524_53538,((typeof k_53536 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53536):k_53536),keywordize_map(v_53537))));
{
var G__53539 = seq__53525_53531;
var G__53540 = chunk__53526_53532;
var G__53541 = count__53527_53533;
var G__53542 = (i__53528_53534 + (1));
seq__53525_53531 = G__53539;
chunk__53526_53532 = G__53540;
count__53527_53533 = G__53541;
i__53528_53534 = G__53542;
continue;
}
} else
{var temp__4126__auto___53543 = cljs.core.seq(seq__53525_53531);if(temp__4126__auto___53543)
{var seq__53525_53544__$1 = temp__4126__auto___53543;if(cljs.core.chunked_seq_QMARK_(seq__53525_53544__$1))
{var c__4314__auto___53545 = cljs.core.chunk_first(seq__53525_53544__$1);{
var G__53546 = cljs.core.chunk_rest(seq__53525_53544__$1);
var G__53547 = c__4314__auto___53545;
var G__53548 = cljs.core.count(c__4314__auto___53545);
var G__53549 = (0);
seq__53525_53531 = G__53546;
chunk__53526_53532 = G__53547;
count__53527_53533 = G__53548;
i__53528_53534 = G__53549;
continue;
}
} else
{var vec__53530_53550 = cljs.core.first(seq__53525_53544__$1);var k_53551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53530_53550,(0),null);var v_53552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53530_53550,(1),null);var m53524_53553 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__12440__auto__) : cljs.core.deref.call(null,m_atom__12440__auto__));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53524_53553,((typeof k_53551 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53551):k_53551),keywordize_map(v_53552))) : cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m53524_53553,((typeof k_53551 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_53551):k_53551),keywordize_map(v_53552))));
{
var G__53554 = cljs.core.next(seq__53525_53544__$1);
var G__53555 = null;
var G__53556 = (0);
var G__53557 = (0);
seq__53525_53531 = G__53554;
chunk__53526_53532 = G__53555;
count__53527_53533 = G__53556;
i__53528_53534 = G__53557;
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
var G__53558 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__53559 = cljs.core.next(ks);
m = G__53558;
ks = G__53559;
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
})(),(function (){var iter__4283__auto__ = (function iter__53568(s__53569){return (new cljs.core.LazySeq(null,(function (){var s__53569__$1 = s__53569;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53569__$1);if(temp__4126__auto__)
{var s__53569__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53569__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__53569__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__53571 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__53570 = (0);while(true){
if((i__53570 < size__4282__auto__))
{var vec__53574 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__53570);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53574,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53574,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__53571,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__53576 = (i__53570 + (1));
i__53570 = G__53576;
continue;
}
} else
{{
var G__53577 = (i__53570 + (1));
i__53570 = G__53577;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53571),iter__53568(cljs.core.chunk_rest(s__53569__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53571),null);
}
} else
{var vec__53575 = cljs.core.first(s__53569__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53575,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53575,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__53568(cljs.core.rest(s__53569__$2)));
} else
{{
var G__53578 = cljs.core.rest(s__53569__$2);
s__53569__$1 = G__53578;
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
assoc_when.cljs$lang$applyTo = (function (arglist__53579){
var m = cljs.core.first(arglist__53579);
var kvs = cljs.core.rest(arglist__53579);
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
update_in_when.cljs$lang$applyTo = (function (arglist__53580){
var m = cljs.core.first(arglist__53580);
arglist__53580 = cljs.core.next(arglist__53580);
var key_seq = cljs.core.first(arglist__53580);
arglist__53580 = cljs.core.next(arglist__53580);
var f = cljs.core.first(arglist__53580);
var args = cljs.core.rest(arglist__53580);
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
return (function iter__53585(s__53586){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__53586__$1 = s__53586;while(true){
var temp__4126__auto__ = cljs.core.seq(s__53586__$1);if(temp__4126__auto__)
{var s__53586__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__53586__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__53586__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__53588 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__53587 = (0);while(true){
if((i__53587 < size__4282__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__53587);var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id)))
{cljs.core.chunk_append(b__53588,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__53589 = (i__53587 + (1));
i__53587 = G__53589;
continue;
}
} else
{{
var G__53590 = (i__53587 + (1));
i__53587 = G__53590;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53588),iter__53585(cljs.core.chunk_rest(s__53586__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53588),null);
}
} else
{var x = cljs.core.first(s__53586__$2);var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__53585(cljs.core.rest(s__53586__$2)));
} else
{{
var G__53591 = cljs.core.rest(s__53586__$2);
s__53586__$1 = G__53591;
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
interleave_all.cljs$lang$applyTo = (function (arglist__53592){
var colls = cljs.core.seq(arglist__53592);
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
var G__53593__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__53594 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__53595 = cljs.core.first(xs);
var G__53596 = cljs.core.next(xs);
coll = G__53594;
x = G__53595;
xs = G__53596;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__53593 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53593__delegate.call(this,coll,x,xs);};
G__53593.cljs$lang$maxFixedArity = 2;
G__53593.cljs$lang$applyTo = (function (arglist__53597){
var coll = cljs.core.first(arglist__53597);
arglist__53597 = cljs.core.next(arglist__53597);
var x = cljs.core.first(arglist__53597);
var xs = cljs.core.rest(arglist__53597);
return G__53593__delegate(coll,x,xs);
});
G__53593.cljs$core$IFn$_invoke$arity$variadic = G__53593__delegate;
return G__53593;
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
var G__53599__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__53598_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__53598_SHARP_,args);
}));
};
var G__53599 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53599__delegate.call(this,a,f,args);};
G__53599.cljs$lang$maxFixedArity = 2;
G__53599.cljs$lang$applyTo = (function (arglist__53600){
var a = cljs.core.first(arglist__53600);
arglist__53600 = cljs.core.next(arglist__53600);
var f = cljs.core.first(arglist__53600);
var args = cljs.core.rest(arglist__53600);
return G__53599__delegate(a,f,args);
});
G__53599.cljs$core$IFn$_invoke$arity$variadic = G__53599__delegate;
return G__53599;
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
var G__53601__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__53601 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__53601__delegate.call(this,f,arg,args);};
G__53601.cljs$lang$maxFixedArity = 2;
G__53601.cljs$lang$applyTo = (function (arglist__53602){
var f = cljs.core.first(arglist__53602);
arglist__53602 = cljs.core.next(arglist__53602);
var arg = cljs.core.first(arglist__53602);
var args = cljs.core.rest(arglist__53602);
return G__53601__delegate(f,arg,args);
});
G__53601.cljs$core$IFn$_invoke$arity$variadic = G__53601__delegate;
return G__53601;
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
