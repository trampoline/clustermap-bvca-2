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
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$1345;
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__70260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70260) : f.call(null,G__70260));
})());
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__70261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__70262 = x1;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__70261,G__70262) : f.call(null,G__70261,G__70262));
})());
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__70263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__70264 = x1;var G__70265 = x2;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__70263,G__70264,G__70265) : f.call(null,G__70263,G__70264,G__70265));
})());
});
var update__6 = (function() { 
var G__70266__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__70266 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__70266__delegate.call(this,m,k,f,x1,x2,xs);};
G__70266.cljs$lang$maxFixedArity = 5;
G__70266.cljs$lang$applyTo = (function (arglist__70267){
var m = cljs.core.first(arglist__70267);
arglist__70267 = cljs.core.next(arglist__70267);
var k = cljs.core.first(arglist__70267);
arglist__70267 = cljs.core.next(arglist__70267);
var f = cljs.core.first(arglist__70267);
arglist__70267 = cljs.core.next(arglist__70267);
var x1 = cljs.core.first(arglist__70267);
arglist__70267 = cljs.core.next(arglist__70267);
var x2 = cljs.core.first(arglist__70267);
var xs = cljs.core.rest(arglist__70267);
return G__70266__delegate(m,k,f,x1,x2,xs);
});
G__70266.cljs$core$IFn$_invoke$arity$variadic = G__70266__delegate;
return G__70266;
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
{return cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__70287 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70287) : f.call(null,G__70287));
})());
}),cljs.core.sorted_map(),m);
} else
{if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__70288 = v;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70288) : f.call(null,G__70288));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__14991__auto__ = (function (){var G__70290 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70290) : cljs.core.atom.call(null,G__70290));
})();var seq__70291_70306 = cljs.core.seq(m);var chunk__70292_70307 = null;var count__70293_70308 = (0);var i__70294_70309 = (0);while(true){
if((i__70294_70309 < count__70293_70308))
{var vec__70295_70310 = chunk__70292_70307.cljs$core$IIndexed$_nth$arity$2(null,i__70294_70309);var k_70311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70295_70310,(0),null);var v_70312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70295_70310,(1),null);var m70289_70313 = (function (){var G__70296 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70296) : cljs.core.deref.call(null,G__70296));
})();var G__70297_70314 = m_atom__14991__auto__;var G__70298_70315 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70289_70313,k_70311,(function (){var G__70299 = v_70312;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70299) : f.call(null,G__70299));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70297_70314,G__70298_70315) : cljs.core.reset_BANG_.call(null,G__70297_70314,G__70298_70315));
{
var G__70316 = seq__70291_70306;
var G__70317 = chunk__70292_70307;
var G__70318 = count__70293_70308;
var G__70319 = (i__70294_70309 + (1));
seq__70291_70306 = G__70316;
chunk__70292_70307 = G__70317;
count__70293_70308 = G__70318;
i__70294_70309 = G__70319;
continue;
}
} else
{var temp__4126__auto___70320 = cljs.core.seq(seq__70291_70306);if(temp__4126__auto___70320)
{var seq__70291_70321__$1 = temp__4126__auto___70320;if(cljs.core.chunked_seq_QMARK_(seq__70291_70321__$1))
{var c__4406__auto___70322 = cljs.core.chunk_first(seq__70291_70321__$1);{
var G__70323 = cljs.core.chunk_rest(seq__70291_70321__$1);
var G__70324 = c__4406__auto___70322;
var G__70325 = cljs.core.count(c__4406__auto___70322);
var G__70326 = (0);
seq__70291_70306 = G__70323;
chunk__70292_70307 = G__70324;
count__70293_70308 = G__70325;
i__70294_70309 = G__70326;
continue;
}
} else
{var vec__70300_70327 = cljs.core.first(seq__70291_70321__$1);var k_70328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70300_70327,(0),null);var v_70329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70300_70327,(1),null);var m70289_70330 = (function (){var G__70301 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70301) : cljs.core.deref.call(null,G__70301));
})();var G__70302_70331 = m_atom__14991__auto__;var G__70303_70332 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70289_70330,k_70328,(function (){var G__70304 = v_70329;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70304) : f.call(null,G__70304));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70302_70331,G__70303_70332) : cljs.core.reset_BANG_.call(null,G__70302_70331,G__70303_70332));
{
var G__70333 = cljs.core.next(seq__70291_70321__$1);
var G__70334 = null;
var G__70335 = (0);
var G__70336 = (0);
seq__70291_70306 = G__70333;
chunk__70292_70307 = G__70334;
count__70293_70308 = G__70335;
i__70294_70309 = G__70336;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__70305 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70305) : cljs.core.deref.call(null,G__70305));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_(m))
{return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__70355 = k;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70355) : f.call(null,G__70355));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__14991__auto__ = (function (){var G__70357 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70357) : cljs.core.atom.call(null,G__70357));
})();var seq__70358_70373 = cljs.core.seq(m);var chunk__70359_70374 = null;var count__70360_70375 = (0);var i__70361_70376 = (0);while(true){
if((i__70361_70376 < count__70360_70375))
{var vec__70362_70377 = chunk__70359_70374.cljs$core$IIndexed$_nth$arity$2(null,i__70361_70376);var k_70378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70362_70377,(0),null);var v_70379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70362_70377,(1),null);var m70356_70380 = (function (){var G__70363 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70363) : cljs.core.deref.call(null,G__70363));
})();var G__70364_70381 = m_atom__14991__auto__;var G__70365_70382 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70356_70380,(function (){var G__70366 = k_70378;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70366) : f.call(null,G__70366));
})(),v_70379);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70364_70381,G__70365_70382) : cljs.core.reset_BANG_.call(null,G__70364_70381,G__70365_70382));
{
var G__70383 = seq__70358_70373;
var G__70384 = chunk__70359_70374;
var G__70385 = count__70360_70375;
var G__70386 = (i__70361_70376 + (1));
seq__70358_70373 = G__70383;
chunk__70359_70374 = G__70384;
count__70360_70375 = G__70385;
i__70361_70376 = G__70386;
continue;
}
} else
{var temp__4126__auto___70387 = cljs.core.seq(seq__70358_70373);if(temp__4126__auto___70387)
{var seq__70358_70388__$1 = temp__4126__auto___70387;if(cljs.core.chunked_seq_QMARK_(seq__70358_70388__$1))
{var c__4406__auto___70389 = cljs.core.chunk_first(seq__70358_70388__$1);{
var G__70390 = cljs.core.chunk_rest(seq__70358_70388__$1);
var G__70391 = c__4406__auto___70389;
var G__70392 = cljs.core.count(c__4406__auto___70389);
var G__70393 = (0);
seq__70358_70373 = G__70390;
chunk__70359_70374 = G__70391;
count__70360_70375 = G__70392;
i__70361_70376 = G__70393;
continue;
}
} else
{var vec__70367_70394 = cljs.core.first(seq__70358_70388__$1);var k_70395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70367_70394,(0),null);var v_70396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70367_70394,(1),null);var m70356_70397 = (function (){var G__70368 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70368) : cljs.core.deref.call(null,G__70368));
})();var G__70369_70398 = m_atom__14991__auto__;var G__70370_70399 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70356_70397,(function (){var G__70371 = k_70395;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70371) : f.call(null,G__70371));
})(),v_70396);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70369_70398,G__70370_70399) : cljs.core.reset_BANG_.call(null,G__70369_70398,G__70370_70399));
{
var G__70400 = cljs.core.next(seq__70358_70388__$1);
var G__70401 = null;
var G__70402 = (0);
var G__70403 = (0);
seq__70358_70373 = G__70400;
chunk__70359_70374 = G__70401;
count__70360_70375 = G__70402;
i__70361_70376 = G__70403;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__70372 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70372) : cljs.core.deref.call(null,G__70372));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__14991__auto__ = (function (){var G__70420 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70420) : cljs.core.atom.call(null,G__70420));
})();var seq__70421_70434 = cljs.core.seq(ks);var chunk__70422_70435 = null;var count__70423_70436 = (0);var i__70424_70437 = (0);while(true){
if((i__70424_70437 < count__70423_70436))
{var k_70438 = chunk__70422_70435.cljs$core$IIndexed$_nth$arity$2(null,i__70424_70437);var m70419_70439 = (function (){var G__70425 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70425) : cljs.core.deref.call(null,G__70425));
})();var G__70426_70440 = m_atom__14991__auto__;var G__70427_70441 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70419_70439,k_70438,(function (){var G__70428 = k_70438;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70428) : f.call(null,G__70428));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70426_70440,G__70427_70441) : cljs.core.reset_BANG_.call(null,G__70426_70440,G__70427_70441));
{
var G__70442 = seq__70421_70434;
var G__70443 = chunk__70422_70435;
var G__70444 = count__70423_70436;
var G__70445 = (i__70424_70437 + (1));
seq__70421_70434 = G__70442;
chunk__70422_70435 = G__70443;
count__70423_70436 = G__70444;
i__70424_70437 = G__70445;
continue;
}
} else
{var temp__4126__auto___70446 = cljs.core.seq(seq__70421_70434);if(temp__4126__auto___70446)
{var seq__70421_70447__$1 = temp__4126__auto___70446;if(cljs.core.chunked_seq_QMARK_(seq__70421_70447__$1))
{var c__4406__auto___70448 = cljs.core.chunk_first(seq__70421_70447__$1);{
var G__70449 = cljs.core.chunk_rest(seq__70421_70447__$1);
var G__70450 = c__4406__auto___70448;
var G__70451 = cljs.core.count(c__4406__auto___70448);
var G__70452 = (0);
seq__70421_70434 = G__70449;
chunk__70422_70435 = G__70450;
count__70423_70436 = G__70451;
i__70424_70437 = G__70452;
continue;
}
} else
{var k_70453 = cljs.core.first(seq__70421_70447__$1);var m70419_70454 = (function (){var G__70429 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70429) : cljs.core.deref.call(null,G__70429));
})();var G__70430_70455 = m_atom__14991__auto__;var G__70431_70456 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70419_70454,k_70453,(function (){var G__70432 = k_70453;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70432) : f.call(null,G__70432));
})());(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70430_70455,G__70431_70456) : cljs.core.reset_BANG_.call(null,G__70430_70455,G__70431_70456));
{
var G__70457 = cljs.core.next(seq__70421_70447__$1);
var G__70458 = null;
var G__70459 = (0);
var G__70460 = (0);
seq__70421_70434 = G__70457;
chunk__70422_70435 = G__70458;
count__70423_70436 = G__70459;
i__70424_70437 = G__70460;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__70433 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70433) : cljs.core.deref.call(null,G__70433));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__14991__auto__ = (function (){var G__70477 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70477) : cljs.core.atom.call(null,G__70477));
})();var seq__70478_70491 = cljs.core.seq(vs);var chunk__70479_70492 = null;var count__70480_70493 = (0);var i__70481_70494 = (0);while(true){
if((i__70481_70494 < count__70480_70493))
{var v_70495 = chunk__70479_70492.cljs$core$IIndexed$_nth$arity$2(null,i__70481_70494);var m70476_70496 = (function (){var G__70482 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70482) : cljs.core.deref.call(null,G__70482));
})();var G__70483_70497 = m_atom__14991__auto__;var G__70484_70498 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70476_70496,(function (){var G__70485 = v_70495;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70485) : f.call(null,G__70485));
})(),v_70495);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70483_70497,G__70484_70498) : cljs.core.reset_BANG_.call(null,G__70483_70497,G__70484_70498));
{
var G__70499 = seq__70478_70491;
var G__70500 = chunk__70479_70492;
var G__70501 = count__70480_70493;
var G__70502 = (i__70481_70494 + (1));
seq__70478_70491 = G__70499;
chunk__70479_70492 = G__70500;
count__70480_70493 = G__70501;
i__70481_70494 = G__70502;
continue;
}
} else
{var temp__4126__auto___70503 = cljs.core.seq(seq__70478_70491);if(temp__4126__auto___70503)
{var seq__70478_70504__$1 = temp__4126__auto___70503;if(cljs.core.chunked_seq_QMARK_(seq__70478_70504__$1))
{var c__4406__auto___70505 = cljs.core.chunk_first(seq__70478_70504__$1);{
var G__70506 = cljs.core.chunk_rest(seq__70478_70504__$1);
var G__70507 = c__4406__auto___70505;
var G__70508 = cljs.core.count(c__4406__auto___70505);
var G__70509 = (0);
seq__70478_70491 = G__70506;
chunk__70479_70492 = G__70507;
count__70480_70493 = G__70508;
i__70481_70494 = G__70509;
continue;
}
} else
{var v_70510 = cljs.core.first(seq__70478_70504__$1);var m70476_70511 = (function (){var G__70486 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70486) : cljs.core.deref.call(null,G__70486));
})();var G__70487_70512 = m_atom__14991__auto__;var G__70488_70513 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70476_70511,(function (){var G__70489 = v_70510;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70489) : f.call(null,G__70489));
})(),v_70510);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70487_70512,G__70488_70513) : cljs.core.reset_BANG_.call(null,G__70487_70512,G__70488_70513));
{
var G__70514 = cljs.core.next(seq__70478_70504__$1);
var G__70515 = null;
var G__70516 = (0);
var G__70517 = (0);
seq__70478_70491 = G__70514;
chunk__70479_70492 = G__70515;
count__70480_70493 = G__70516;
i__70481_70494 = G__70517;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__70490 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70490) : cljs.core.deref.call(null,G__70490));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__70518){var vec__70526 = p__70518;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70526,(0),null);var ks = cljs.core.nthnext(vec__70526,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3625__auto__ = ks;if(and__3625__auto__)
{return dissoc_in((function (){var G__70528 = k;return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(G__70528) : m.call(null,G__70528));
})(),ks);
} else
{return and__3625__auto__;
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
{var m_atom__14991__auto__ = (function (){var G__70547 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70547) : cljs.core.atom.call(null,G__70547));
})();var seq__70548_70561 = cljs.core.seq(x);var chunk__70549_70562 = null;var count__70550_70563 = (0);var i__70551_70564 = (0);while(true){
if((i__70551_70564 < count__70550_70563))
{var vec__70552_70565 = chunk__70549_70562.cljs$core$IIndexed$_nth$arity$2(null,i__70551_70564);var k_70566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70552_70565,(0),null);var v_70567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70552_70565,(1),null);var m70546_70568 = (function (){var G__70553 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70553) : cljs.core.deref.call(null,G__70553));
})();var G__70554_70569 = m_atom__14991__auto__;var G__70555_70570 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70546_70568,((typeof k_70566 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_70566):k_70566),keywordize_map(v_70567));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70554_70569,G__70555_70570) : cljs.core.reset_BANG_.call(null,G__70554_70569,G__70555_70570));
{
var G__70571 = seq__70548_70561;
var G__70572 = chunk__70549_70562;
var G__70573 = count__70550_70563;
var G__70574 = (i__70551_70564 + (1));
seq__70548_70561 = G__70571;
chunk__70549_70562 = G__70572;
count__70550_70563 = G__70573;
i__70551_70564 = G__70574;
continue;
}
} else
{var temp__4126__auto___70575 = cljs.core.seq(seq__70548_70561);if(temp__4126__auto___70575)
{var seq__70548_70576__$1 = temp__4126__auto___70575;if(cljs.core.chunked_seq_QMARK_(seq__70548_70576__$1))
{var c__4406__auto___70577 = cljs.core.chunk_first(seq__70548_70576__$1);{
var G__70578 = cljs.core.chunk_rest(seq__70548_70576__$1);
var G__70579 = c__4406__auto___70577;
var G__70580 = cljs.core.count(c__4406__auto___70577);
var G__70581 = (0);
seq__70548_70561 = G__70578;
chunk__70549_70562 = G__70579;
count__70550_70563 = G__70580;
i__70551_70564 = G__70581;
continue;
}
} else
{var vec__70556_70582 = cljs.core.first(seq__70548_70576__$1);var k_70583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70556_70582,(0),null);var v_70584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70556_70582,(1),null);var m70546_70585 = (function (){var G__70557 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70557) : cljs.core.deref.call(null,G__70557));
})();var G__70558_70586 = m_atom__14991__auto__;var G__70559_70587 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m70546_70585,((typeof k_70583 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_70583):k_70583),keywordize_map(v_70584));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__70558_70586,G__70559_70587) : cljs.core.reset_BANG_.call(null,G__70558_70586,G__70559_70587));
{
var G__70588 = cljs.core.next(seq__70548_70576__$1);
var G__70589 = null;
var G__70590 = (0);
var G__70591 = (0);
seq__70548_70561 = G__70588;
chunk__70549_70562 = G__70589;
count__70550_70563 = G__70590;
i__70551_70564 = G__70591;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_((function (){var G__70560 = m_atom__14991__auto__;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70560) : cljs.core.deref.call(null,G__70560));
})());
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
{var pair__15060__auto__ = temp__4124__auto__;return cljs.core.val(pair__15060__auto__);
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
var G__70592 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__70593 = cljs.core.next(ks);
m = G__70592;
ks = G__70593;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3637__auto__ = m;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4375__auto__ = (function iter__70604(s__70605){return (new cljs.core.LazySeq(null,(function (){var s__70605__$1 = s__70605;while(true){
var temp__4126__auto__ = cljs.core.seq(s__70605__$1);if(temp__4126__auto__)
{var s__70605__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__70605__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__70605__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__70607 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__70606 = (0);while(true){
if((i__70606 < size__4374__auto__))
{var vec__70612 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__70606);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70612,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70612,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append(b__70607,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__70614 = (i__70606 + (1));
i__70606 = G__70614;
continue;
}
} else
{{
var G__70615 = (i__70606 + (1));
i__70606 = G__70615;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__70607),iter__70604(cljs.core.chunk_rest(s__70605__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__70607),null);
}
} else
{var vec__70613 = cljs.core.first(s__70605__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70613,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70613,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__70604(cljs.core.rest(s__70605__$2)));
} else
{{
var G__70616 = cljs.core.rest(s__70605__$2);
s__70605__$1 = G__70616;
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
});return iter__4375__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__70617){
var m = cljs.core.first(arglist__70617);
var kvs = cljs.core.rest(arglist__70617);
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
update_in_when.cljs$lang$applyTo = (function (arglist__70618){
var m = cljs.core.first(arglist__70618);
arglist__70618 = cljs.core.next(arglist__70618);
var key_seq = cljs.core.first(arglist__70618);
arglist__70618 = cljs.core.next(arglist__70618);
var f = cljs.core.first(arglist__70618);
var args = cljs.core.rest(arglist__70618);
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
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__70621 = x;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__70621) : key_fn.call(null,G__70621));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__70622 = x;return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__70622) : map_fn.call(null,G__70622));
})()));
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
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){if(cljs.core.truth_((function (){var G__70626 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70626) : f.call(null,G__70626));
})()))
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = (function (){var G__70642 = cljs.core.PersistentHashSet.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__70642) : cljs.core.atom.call(null,G__70642));
})();var iter__4375__auto__ = ((function (s){
return (function iter__70643(s__70644){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__70644__$1 = s__70644;while(true){
var temp__4126__auto__ = cljs.core.seq(s__70644__$1);if(temp__4126__auto__)
{var s__70644__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__70644__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__70644__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__70646 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__70645 = (0);while(true){
if((i__70645 < size__4374__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__70645);var id = (function (){var G__70653 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70653) : f.call(null,G__70653));
})();if(!(cljs.core.contains_QMARK_((function (){var G__70654 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70654) : cljs.core.deref.call(null,G__70654));
})(),id)))
{cljs.core.chunk_append(b__70646,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})());
{
var G__70657 = (i__70645 + (1));
i__70645 = G__70657;
continue;
}
} else
{{
var G__70658 = (i__70645 + (1));
i__70645 = G__70658;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__70646),iter__70643(cljs.core.chunk_rest(s__70644__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__70646),null);
}
} else
{var x = cljs.core.first(s__70644__$2);var id = (function (){var G__70655 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70655) : f.call(null,G__70655));
})();if(!(cljs.core.contains_QMARK_((function (){var G__70656 = s;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70656) : cljs.core.deref.call(null,G__70656));
})(),id)))
{return cljs.core.cons((function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);
return x;
})(),iter__70643(cljs.core.rest(s__70644__$2)));
} else
{{
var G__70659 = cljs.core.rest(s__70644__$2);
s__70644__$1 = G__70659;
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
;return iter__4375__auto__(xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__70662){
var colls = cljs.core.seq(arglist__70662);
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
var G__70667__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__70668 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__70669 = cljs.core.first(xs);
var G__70670 = cljs.core.next(xs);
coll = G__70668;
x = G__70669;
xs = G__70670;
continue;
}
} else
{return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__70667 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__70667__delegate.call(this,coll,x,xs);};
G__70667.cljs$lang$maxFixedArity = 2;
G__70667.cljs$lang$applyTo = (function (arglist__70671){
var coll = cljs.core.first(arglist__70671);
arglist__70671 = cljs.core.next(arglist__70671);
var x = cljs.core.first(arglist__70671);
var xs = cljs.core.rest(arglist__70671);
return G__70667__delegate(coll,x,xs);
});
G__70667.cljs$core$IFn$_invoke$arity$variadic = G__70667__delegate;
return G__70667;
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
var old_val = (function (){var G__70677 = a;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__70677) : cljs.core.deref.call(null,G__70677));
})();var new_val = (function (){var G__70678 = old_val;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__70678) : f.call(null,G__70678));
})();if(cljs.core.compare_and_set_BANG_(a,old_val,new_val))
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
var G__70679__delegate = function (a,f,args){return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__70672_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__70672_SHARP_,args);
}));
};
var G__70679 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__70679__delegate.call(this,a,f,args);};
G__70679.cljs$lang$maxFixedArity = 2;
G__70679.cljs$lang$applyTo = (function (arglist__70680){
var a = cljs.core.first(arglist__70680);
arglist__70680 = cljs.core.next(arglist__70680);
var f = cljs.core.first(arglist__70680);
var args = cljs.core.rest(arglist__70680);
return G__70679__delegate(a,f,args);
});
G__70679.cljs$core$IFn$_invoke$arity$variadic = G__70679__delegate;
return G__70679;
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
var G__70681__delegate = function (f,arg,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__70681 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__70681__delegate.call(this,f,arg,args);};
G__70681.cljs$lang$maxFixedArity = 2;
G__70681.cljs$lang$applyTo = (function (arglist__70682){
var f = cljs.core.first(arglist__70682);
arglist__70682 = cljs.core.next(arglist__70682);
var arg = cljs.core.first(arglist__70682);
var args = cljs.core.rest(arglist__70682);
return G__70681__delegate(f,arg,args);
});
G__70681.cljs$core$IFn$_invoke$arity$variadic = G__70681__delegate;
return G__70681;
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
