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
var G__38450__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__38450 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__38450__delegate.call(this,m,k,f,x1,x2,xs);};
G__38450.cljs$lang$maxFixedArity = 5;
G__38450.cljs$lang$applyTo = (function (arglist__38451){
var m = cljs.core.first(arglist__38451);
arglist__38451 = cljs.core.next(arglist__38451);
var k = cljs.core.first(arglist__38451);
arglist__38451 = cljs.core.next(arglist__38451);
var f = cljs.core.first(arglist__38451);
arglist__38451 = cljs.core.next(arglist__38451);
var x1 = cljs.core.first(arglist__38451);
arglist__38451 = cljs.core.next(arglist__38451);
var x2 = cljs.core.first(arglist__38451);
var xs = cljs.core.rest(arglist__38451);
return G__38450__delegate(m,k,f,x1,x2,xs);
});
G__38450.cljs$core$IFn$_invoke$arity$variadic = G__38450__delegate;
return G__38450;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38460_38466 = cljs.core.seq.call(null,m);var chunk__38461_38467 = null;var count__38462_38468 = (0);var i__38463_38469 = (0);while(true){
if((i__38463_38469 < count__38462_38468))
{var vec__38464_38470 = cljs.core._nth.call(null,chunk__38461_38467,i__38463_38469);var k_38471 = cljs.core.nth.call(null,vec__38464_38470,(0),null);var v_38472 = cljs.core.nth.call(null,vec__38464_38470,(1),null);var m38459_38473 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38459_38473,k_38471,f.call(null,v_38472)));
{
var G__38474 = seq__38460_38466;
var G__38475 = chunk__38461_38467;
var G__38476 = count__38462_38468;
var G__38477 = (i__38463_38469 + (1));
seq__38460_38466 = G__38474;
chunk__38461_38467 = G__38475;
count__38462_38468 = G__38476;
i__38463_38469 = G__38477;
continue;
}
} else
{var temp__4126__auto___38478 = cljs.core.seq.call(null,seq__38460_38466);if(temp__4126__auto___38478)
{var seq__38460_38479__$1 = temp__4126__auto___38478;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38460_38479__$1))
{var c__4314__auto___38480 = cljs.core.chunk_first.call(null,seq__38460_38479__$1);{
var G__38481 = cljs.core.chunk_rest.call(null,seq__38460_38479__$1);
var G__38482 = c__4314__auto___38480;
var G__38483 = cljs.core.count.call(null,c__4314__auto___38480);
var G__38484 = (0);
seq__38460_38466 = G__38481;
chunk__38461_38467 = G__38482;
count__38462_38468 = G__38483;
i__38463_38469 = G__38484;
continue;
}
} else
{var vec__38465_38485 = cljs.core.first.call(null,seq__38460_38479__$1);var k_38486 = cljs.core.nth.call(null,vec__38465_38485,(0),null);var v_38487 = cljs.core.nth.call(null,vec__38465_38485,(1),null);var m38459_38488 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38459_38488,k_38486,f.call(null,v_38487)));
{
var G__38489 = cljs.core.next.call(null,seq__38460_38479__$1);
var G__38490 = null;
var G__38491 = (0);
var G__38492 = (0);
seq__38460_38466 = G__38489;
chunk__38461_38467 = G__38490;
count__38462_38468 = G__38491;
i__38463_38469 = G__38492;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38501_38507 = cljs.core.seq.call(null,m);var chunk__38502_38508 = null;var count__38503_38509 = (0);var i__38504_38510 = (0);while(true){
if((i__38504_38510 < count__38503_38509))
{var vec__38505_38511 = cljs.core._nth.call(null,chunk__38502_38508,i__38504_38510);var k_38512 = cljs.core.nth.call(null,vec__38505_38511,(0),null);var v_38513 = cljs.core.nth.call(null,vec__38505_38511,(1),null);var m38500_38514 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38500_38514,f.call(null,k_38512),v_38513));
{
var G__38515 = seq__38501_38507;
var G__38516 = chunk__38502_38508;
var G__38517 = count__38503_38509;
var G__38518 = (i__38504_38510 + (1));
seq__38501_38507 = G__38515;
chunk__38502_38508 = G__38516;
count__38503_38509 = G__38517;
i__38504_38510 = G__38518;
continue;
}
} else
{var temp__4126__auto___38519 = cljs.core.seq.call(null,seq__38501_38507);if(temp__4126__auto___38519)
{var seq__38501_38520__$1 = temp__4126__auto___38519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38501_38520__$1))
{var c__4314__auto___38521 = cljs.core.chunk_first.call(null,seq__38501_38520__$1);{
var G__38522 = cljs.core.chunk_rest.call(null,seq__38501_38520__$1);
var G__38523 = c__4314__auto___38521;
var G__38524 = cljs.core.count.call(null,c__4314__auto___38521);
var G__38525 = (0);
seq__38501_38507 = G__38522;
chunk__38502_38508 = G__38523;
count__38503_38509 = G__38524;
i__38504_38510 = G__38525;
continue;
}
} else
{var vec__38506_38526 = cljs.core.first.call(null,seq__38501_38520__$1);var k_38527 = cljs.core.nth.call(null,vec__38506_38526,(0),null);var v_38528 = cljs.core.nth.call(null,vec__38506_38526,(1),null);var m38500_38529 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38500_38529,f.call(null,k_38527),v_38528));
{
var G__38530 = cljs.core.next.call(null,seq__38501_38520__$1);
var G__38531 = null;
var G__38532 = (0);
var G__38533 = (0);
seq__38501_38507 = G__38530;
chunk__38502_38508 = G__38531;
count__38503_38509 = G__38532;
i__38504_38510 = G__38533;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38540_38544 = cljs.core.seq.call(null,ks);var chunk__38541_38545 = null;var count__38542_38546 = (0);var i__38543_38547 = (0);while(true){
if((i__38543_38547 < count__38542_38546))
{var k_38548 = cljs.core._nth.call(null,chunk__38541_38545,i__38543_38547);var m38539_38549 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38539_38549,k_38548,f.call(null,k_38548)));
{
var G__38550 = seq__38540_38544;
var G__38551 = chunk__38541_38545;
var G__38552 = count__38542_38546;
var G__38553 = (i__38543_38547 + (1));
seq__38540_38544 = G__38550;
chunk__38541_38545 = G__38551;
count__38542_38546 = G__38552;
i__38543_38547 = G__38553;
continue;
}
} else
{var temp__4126__auto___38554 = cljs.core.seq.call(null,seq__38540_38544);if(temp__4126__auto___38554)
{var seq__38540_38555__$1 = temp__4126__auto___38554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38540_38555__$1))
{var c__4314__auto___38556 = cljs.core.chunk_first.call(null,seq__38540_38555__$1);{
var G__38557 = cljs.core.chunk_rest.call(null,seq__38540_38555__$1);
var G__38558 = c__4314__auto___38556;
var G__38559 = cljs.core.count.call(null,c__4314__auto___38556);
var G__38560 = (0);
seq__38540_38544 = G__38557;
chunk__38541_38545 = G__38558;
count__38542_38546 = G__38559;
i__38543_38547 = G__38560;
continue;
}
} else
{var k_38561 = cljs.core.first.call(null,seq__38540_38555__$1);var m38539_38562 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38539_38562,k_38561,f.call(null,k_38561)));
{
var G__38563 = cljs.core.next.call(null,seq__38540_38555__$1);
var G__38564 = null;
var G__38565 = (0);
var G__38566 = (0);
seq__38540_38544 = G__38563;
chunk__38541_38545 = G__38564;
count__38542_38546 = G__38565;
i__38543_38547 = G__38566;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38573_38577 = cljs.core.seq.call(null,vs);var chunk__38574_38578 = null;var count__38575_38579 = (0);var i__38576_38580 = (0);while(true){
if((i__38576_38580 < count__38575_38579))
{var v_38581 = cljs.core._nth.call(null,chunk__38574_38578,i__38576_38580);var m38572_38582 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38572_38582,f.call(null,v_38581),v_38581));
{
var G__38583 = seq__38573_38577;
var G__38584 = chunk__38574_38578;
var G__38585 = count__38575_38579;
var G__38586 = (i__38576_38580 + (1));
seq__38573_38577 = G__38583;
chunk__38574_38578 = G__38584;
count__38575_38579 = G__38585;
i__38576_38580 = G__38586;
continue;
}
} else
{var temp__4126__auto___38587 = cljs.core.seq.call(null,seq__38573_38577);if(temp__4126__auto___38587)
{var seq__38573_38588__$1 = temp__4126__auto___38587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38573_38588__$1))
{var c__4314__auto___38589 = cljs.core.chunk_first.call(null,seq__38573_38588__$1);{
var G__38590 = cljs.core.chunk_rest.call(null,seq__38573_38588__$1);
var G__38591 = c__4314__auto___38589;
var G__38592 = cljs.core.count.call(null,c__4314__auto___38589);
var G__38593 = (0);
seq__38573_38577 = G__38590;
chunk__38574_38578 = G__38591;
count__38575_38579 = G__38592;
i__38576_38580 = G__38593;
continue;
}
} else
{var v_38594 = cljs.core.first.call(null,seq__38573_38588__$1);var m38572_38595 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38572_38595,f.call(null,v_38594),v_38594));
{
var G__38596 = cljs.core.next.call(null,seq__38573_38588__$1);
var G__38597 = null;
var G__38598 = (0);
var G__38599 = (0);
seq__38573_38577 = G__38596;
chunk__38574_38578 = G__38597;
count__38575_38579 = G__38598;
i__38576_38580 = G__38599;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__38600){var vec__38602 = p__38600;var k = cljs.core.nth.call(null,vec__38602,(0),null);var ks = cljs.core.nthnext.call(null,vec__38602,(1));if(cljs.core.truth_(m))
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38611_38617 = cljs.core.seq.call(null,x);var chunk__38612_38618 = null;var count__38613_38619 = (0);var i__38614_38620 = (0);while(true){
if((i__38614_38620 < count__38613_38619))
{var vec__38615_38621 = cljs.core._nth.call(null,chunk__38612_38618,i__38614_38620);var k_38622 = cljs.core.nth.call(null,vec__38615_38621,(0),null);var v_38623 = cljs.core.nth.call(null,vec__38615_38621,(1),null);var m38610_38624 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38610_38624,((typeof k_38622 === 'string')?cljs.core.keyword.call(null,k_38622):k_38622),keywordize_map.call(null,v_38623)));
{
var G__38625 = seq__38611_38617;
var G__38626 = chunk__38612_38618;
var G__38627 = count__38613_38619;
var G__38628 = (i__38614_38620 + (1));
seq__38611_38617 = G__38625;
chunk__38612_38618 = G__38626;
count__38613_38619 = G__38627;
i__38614_38620 = G__38628;
continue;
}
} else
{var temp__4126__auto___38629 = cljs.core.seq.call(null,seq__38611_38617);if(temp__4126__auto___38629)
{var seq__38611_38630__$1 = temp__4126__auto___38629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38611_38630__$1))
{var c__4314__auto___38631 = cljs.core.chunk_first.call(null,seq__38611_38630__$1);{
var G__38632 = cljs.core.chunk_rest.call(null,seq__38611_38630__$1);
var G__38633 = c__4314__auto___38631;
var G__38634 = cljs.core.count.call(null,c__4314__auto___38631);
var G__38635 = (0);
seq__38611_38617 = G__38632;
chunk__38612_38618 = G__38633;
count__38613_38619 = G__38634;
i__38614_38620 = G__38635;
continue;
}
} else
{var vec__38616_38636 = cljs.core.first.call(null,seq__38611_38630__$1);var k_38637 = cljs.core.nth.call(null,vec__38616_38636,(0),null);var v_38638 = cljs.core.nth.call(null,vec__38616_38636,(1),null);var m38610_38639 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38610_38639,((typeof k_38637 === 'string')?cljs.core.keyword.call(null,k_38637):k_38637),keywordize_map.call(null,v_38638)));
{
var G__38640 = cljs.core.next.call(null,seq__38611_38630__$1);
var G__38641 = null;
var G__38642 = (0);
var G__38643 = (0);
seq__38611_38617 = G__38640;
chunk__38612_38618 = G__38641;
count__38613_38619 = G__38642;
i__38614_38620 = G__38643;
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
var G__38644 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__38645 = cljs.core.next.call(null,ks);
m = G__38644;
ks = G__38645;
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
})(),(function (){var iter__4283__auto__ = (function iter__38654(s__38655){return (new cljs.core.LazySeq(null,(function (){var s__38655__$1 = s__38655;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38655__$1);if(temp__4126__auto__)
{var s__38655__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38655__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__38655__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__38657 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__38656 = (0);while(true){
if((i__38656 < size__4282__auto__))
{var vec__38660 = cljs.core._nth.call(null,c__4281__auto__,i__38656);var k = cljs.core.nth.call(null,vec__38660,(0),null);var v = cljs.core.nth.call(null,vec__38660,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__38657,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__38662 = (i__38656 + (1));
i__38656 = G__38662;
continue;
}
} else
{{
var G__38663 = (i__38656 + (1));
i__38656 = G__38663;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38657),iter__38654.call(null,cljs.core.chunk_rest.call(null,s__38655__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38657),null);
}
} else
{var vec__38661 = cljs.core.first.call(null,s__38655__$2);var k = cljs.core.nth.call(null,vec__38661,(0),null);var v = cljs.core.nth.call(null,vec__38661,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__38654.call(null,cljs.core.rest.call(null,s__38655__$2)));
} else
{{
var G__38664 = cljs.core.rest.call(null,s__38655__$2);
s__38655__$1 = G__38664;
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
assoc_when.cljs$lang$applyTo = (function (arglist__38665){
var m = cljs.core.first(arglist__38665);
var kvs = cljs.core.rest(arglist__38665);
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
update_in_when.cljs$lang$applyTo = (function (arglist__38666){
var m = cljs.core.first(arglist__38666);
arglist__38666 = cljs.core.next(arglist__38666);
var key_seq = cljs.core.first(arglist__38666);
arglist__38666 = cljs.core.next(arglist__38666);
var f = cljs.core.first(arglist__38666);
var args = cljs.core.rest(arglist__38666);
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
return (function iter__38671(s__38672){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__38672__$1 = s__38672;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38672__$1);if(temp__4126__auto__)
{var s__38672__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38672__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__38672__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__38674 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__38673 = (0);while(true){
if((i__38673 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__38673);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__38674,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__38675 = (i__38673 + (1));
i__38673 = G__38675;
continue;
}
} else
{{
var G__38676 = (i__38673 + (1));
i__38673 = G__38676;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38674),iter__38671.call(null,cljs.core.chunk_rest.call(null,s__38672__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38674),null);
}
} else
{var x = cljs.core.first.call(null,s__38672__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__38671.call(null,cljs.core.rest.call(null,s__38672__$2)));
} else
{{
var G__38677 = cljs.core.rest.call(null,s__38672__$2);
s__38672__$1 = G__38677;
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
interleave_all.cljs$lang$applyTo = (function (arglist__38678){
var colls = cljs.core.seq(arglist__38678);
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
var G__38679__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__38680 = conj_when.call(null,coll,x);
var G__38681 = cljs.core.first.call(null,xs);
var G__38682 = cljs.core.next.call(null,xs);
coll = G__38680;
x = G__38681;
xs = G__38682;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__38679 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38679__delegate.call(this,coll,x,xs);};
G__38679.cljs$lang$maxFixedArity = 2;
G__38679.cljs$lang$applyTo = (function (arglist__38683){
var coll = cljs.core.first(arglist__38683);
arglist__38683 = cljs.core.next(arglist__38683);
var x = cljs.core.first(arglist__38683);
var xs = cljs.core.rest(arglist__38683);
return G__38679__delegate(coll,x,xs);
});
G__38679.cljs$core$IFn$_invoke$arity$variadic = G__38679__delegate;
return G__38679;
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
var G__38685__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__38684_SHARP_){return cljs.core.apply.call(null,f,p1__38684_SHARP_,args);
}));
};
var G__38685 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38685__delegate.call(this,a,f,args);};
G__38685.cljs$lang$maxFixedArity = 2;
G__38685.cljs$lang$applyTo = (function (arglist__38686){
var a = cljs.core.first(arglist__38686);
arglist__38686 = cljs.core.next(arglist__38686);
var f = cljs.core.first(arglist__38686);
var args = cljs.core.rest(arglist__38686);
return G__38685__delegate(a,f,args);
});
G__38685.cljs$core$IFn$_invoke$arity$variadic = G__38685__delegate;
return G__38685;
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
var G__38687__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__38687 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38687__delegate.call(this,f,arg,args);};
G__38687.cljs$lang$maxFixedArity = 2;
G__38687.cljs$lang$applyTo = (function (arglist__38688){
var f = cljs.core.first(arglist__38688);
arglist__38688 = cljs.core.next(arglist__38688);
var arg = cljs.core.first(arglist__38688);
var args = cljs.core.rest(arglist__38688);
return G__38687__delegate(f,arg,args);
});
G__38687.cljs$core$IFn$_invoke$arity$variadic = G__38687__delegate;
return G__38687;
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
