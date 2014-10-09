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
var G__38444__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__38444 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__38444__delegate.call(this,m,k,f,x1,x2,xs);};
G__38444.cljs$lang$maxFixedArity = 5;
G__38444.cljs$lang$applyTo = (function (arglist__38445){
var m = cljs.core.first(arglist__38445);
arglist__38445 = cljs.core.next(arglist__38445);
var k = cljs.core.first(arglist__38445);
arglist__38445 = cljs.core.next(arglist__38445);
var f = cljs.core.first(arglist__38445);
arglist__38445 = cljs.core.next(arglist__38445);
var x1 = cljs.core.first(arglist__38445);
arglist__38445 = cljs.core.next(arglist__38445);
var x2 = cljs.core.first(arglist__38445);
var xs = cljs.core.rest(arglist__38445);
return G__38444__delegate(m,k,f,x1,x2,xs);
});
G__38444.cljs$core$IFn$_invoke$arity$variadic = G__38444__delegate;
return G__38444;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38454_38460 = cljs.core.seq.call(null,m);var chunk__38455_38461 = null;var count__38456_38462 = (0);var i__38457_38463 = (0);while(true){
if((i__38457_38463 < count__38456_38462))
{var vec__38458_38464 = cljs.core._nth.call(null,chunk__38455_38461,i__38457_38463);var k_38465 = cljs.core.nth.call(null,vec__38458_38464,(0),null);var v_38466 = cljs.core.nth.call(null,vec__38458_38464,(1),null);var m38453_38467 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38453_38467,k_38465,f.call(null,v_38466)));
{
var G__38468 = seq__38454_38460;
var G__38469 = chunk__38455_38461;
var G__38470 = count__38456_38462;
var G__38471 = (i__38457_38463 + (1));
seq__38454_38460 = G__38468;
chunk__38455_38461 = G__38469;
count__38456_38462 = G__38470;
i__38457_38463 = G__38471;
continue;
}
} else
{var temp__4126__auto___38472 = cljs.core.seq.call(null,seq__38454_38460);if(temp__4126__auto___38472)
{var seq__38454_38473__$1 = temp__4126__auto___38472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38454_38473__$1))
{var c__4314__auto___38474 = cljs.core.chunk_first.call(null,seq__38454_38473__$1);{
var G__38475 = cljs.core.chunk_rest.call(null,seq__38454_38473__$1);
var G__38476 = c__4314__auto___38474;
var G__38477 = cljs.core.count.call(null,c__4314__auto___38474);
var G__38478 = (0);
seq__38454_38460 = G__38475;
chunk__38455_38461 = G__38476;
count__38456_38462 = G__38477;
i__38457_38463 = G__38478;
continue;
}
} else
{var vec__38459_38479 = cljs.core.first.call(null,seq__38454_38473__$1);var k_38480 = cljs.core.nth.call(null,vec__38459_38479,(0),null);var v_38481 = cljs.core.nth.call(null,vec__38459_38479,(1),null);var m38453_38482 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38453_38482,k_38480,f.call(null,v_38481)));
{
var G__38483 = cljs.core.next.call(null,seq__38454_38473__$1);
var G__38484 = null;
var G__38485 = (0);
var G__38486 = (0);
seq__38454_38460 = G__38483;
chunk__38455_38461 = G__38484;
count__38456_38462 = G__38485;
i__38457_38463 = G__38486;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38495_38501 = cljs.core.seq.call(null,m);var chunk__38496_38502 = null;var count__38497_38503 = (0);var i__38498_38504 = (0);while(true){
if((i__38498_38504 < count__38497_38503))
{var vec__38499_38505 = cljs.core._nth.call(null,chunk__38496_38502,i__38498_38504);var k_38506 = cljs.core.nth.call(null,vec__38499_38505,(0),null);var v_38507 = cljs.core.nth.call(null,vec__38499_38505,(1),null);var m38494_38508 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38494_38508,f.call(null,k_38506),v_38507));
{
var G__38509 = seq__38495_38501;
var G__38510 = chunk__38496_38502;
var G__38511 = count__38497_38503;
var G__38512 = (i__38498_38504 + (1));
seq__38495_38501 = G__38509;
chunk__38496_38502 = G__38510;
count__38497_38503 = G__38511;
i__38498_38504 = G__38512;
continue;
}
} else
{var temp__4126__auto___38513 = cljs.core.seq.call(null,seq__38495_38501);if(temp__4126__auto___38513)
{var seq__38495_38514__$1 = temp__4126__auto___38513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38495_38514__$1))
{var c__4314__auto___38515 = cljs.core.chunk_first.call(null,seq__38495_38514__$1);{
var G__38516 = cljs.core.chunk_rest.call(null,seq__38495_38514__$1);
var G__38517 = c__4314__auto___38515;
var G__38518 = cljs.core.count.call(null,c__4314__auto___38515);
var G__38519 = (0);
seq__38495_38501 = G__38516;
chunk__38496_38502 = G__38517;
count__38497_38503 = G__38518;
i__38498_38504 = G__38519;
continue;
}
} else
{var vec__38500_38520 = cljs.core.first.call(null,seq__38495_38514__$1);var k_38521 = cljs.core.nth.call(null,vec__38500_38520,(0),null);var v_38522 = cljs.core.nth.call(null,vec__38500_38520,(1),null);var m38494_38523 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38494_38523,f.call(null,k_38521),v_38522));
{
var G__38524 = cljs.core.next.call(null,seq__38495_38514__$1);
var G__38525 = null;
var G__38526 = (0);
var G__38527 = (0);
seq__38495_38501 = G__38524;
chunk__38496_38502 = G__38525;
count__38497_38503 = G__38526;
i__38498_38504 = G__38527;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38534_38538 = cljs.core.seq.call(null,ks);var chunk__38535_38539 = null;var count__38536_38540 = (0);var i__38537_38541 = (0);while(true){
if((i__38537_38541 < count__38536_38540))
{var k_38542 = cljs.core._nth.call(null,chunk__38535_38539,i__38537_38541);var m38533_38543 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38533_38543,k_38542,f.call(null,k_38542)));
{
var G__38544 = seq__38534_38538;
var G__38545 = chunk__38535_38539;
var G__38546 = count__38536_38540;
var G__38547 = (i__38537_38541 + (1));
seq__38534_38538 = G__38544;
chunk__38535_38539 = G__38545;
count__38536_38540 = G__38546;
i__38537_38541 = G__38547;
continue;
}
} else
{var temp__4126__auto___38548 = cljs.core.seq.call(null,seq__38534_38538);if(temp__4126__auto___38548)
{var seq__38534_38549__$1 = temp__4126__auto___38548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38534_38549__$1))
{var c__4314__auto___38550 = cljs.core.chunk_first.call(null,seq__38534_38549__$1);{
var G__38551 = cljs.core.chunk_rest.call(null,seq__38534_38549__$1);
var G__38552 = c__4314__auto___38550;
var G__38553 = cljs.core.count.call(null,c__4314__auto___38550);
var G__38554 = (0);
seq__38534_38538 = G__38551;
chunk__38535_38539 = G__38552;
count__38536_38540 = G__38553;
i__38537_38541 = G__38554;
continue;
}
} else
{var k_38555 = cljs.core.first.call(null,seq__38534_38549__$1);var m38533_38556 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38533_38556,k_38555,f.call(null,k_38555)));
{
var G__38557 = cljs.core.next.call(null,seq__38534_38549__$1);
var G__38558 = null;
var G__38559 = (0);
var G__38560 = (0);
seq__38534_38538 = G__38557;
chunk__38535_38539 = G__38558;
count__38536_38540 = G__38559;
i__38537_38541 = G__38560;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38567_38571 = cljs.core.seq.call(null,vs);var chunk__38568_38572 = null;var count__38569_38573 = (0);var i__38570_38574 = (0);while(true){
if((i__38570_38574 < count__38569_38573))
{var v_38575 = cljs.core._nth.call(null,chunk__38568_38572,i__38570_38574);var m38566_38576 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38566_38576,f.call(null,v_38575),v_38575));
{
var G__38577 = seq__38567_38571;
var G__38578 = chunk__38568_38572;
var G__38579 = count__38569_38573;
var G__38580 = (i__38570_38574 + (1));
seq__38567_38571 = G__38577;
chunk__38568_38572 = G__38578;
count__38569_38573 = G__38579;
i__38570_38574 = G__38580;
continue;
}
} else
{var temp__4126__auto___38581 = cljs.core.seq.call(null,seq__38567_38571);if(temp__4126__auto___38581)
{var seq__38567_38582__$1 = temp__4126__auto___38581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38567_38582__$1))
{var c__4314__auto___38583 = cljs.core.chunk_first.call(null,seq__38567_38582__$1);{
var G__38584 = cljs.core.chunk_rest.call(null,seq__38567_38582__$1);
var G__38585 = c__4314__auto___38583;
var G__38586 = cljs.core.count.call(null,c__4314__auto___38583);
var G__38587 = (0);
seq__38567_38571 = G__38584;
chunk__38568_38572 = G__38585;
count__38569_38573 = G__38586;
i__38570_38574 = G__38587;
continue;
}
} else
{var v_38588 = cljs.core.first.call(null,seq__38567_38582__$1);var m38566_38589 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38566_38589,f.call(null,v_38588),v_38588));
{
var G__38590 = cljs.core.next.call(null,seq__38567_38582__$1);
var G__38591 = null;
var G__38592 = (0);
var G__38593 = (0);
seq__38567_38571 = G__38590;
chunk__38568_38572 = G__38591;
count__38569_38573 = G__38592;
i__38570_38574 = G__38593;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__38594){var vec__38596 = p__38594;var k = cljs.core.nth.call(null,vec__38596,(0),null);var ks = cljs.core.nthnext.call(null,vec__38596,(1));if(cljs.core.truth_(m))
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__38605_38611 = cljs.core.seq.call(null,x);var chunk__38606_38612 = null;var count__38607_38613 = (0);var i__38608_38614 = (0);while(true){
if((i__38608_38614 < count__38607_38613))
{var vec__38609_38615 = cljs.core._nth.call(null,chunk__38606_38612,i__38608_38614);var k_38616 = cljs.core.nth.call(null,vec__38609_38615,(0),null);var v_38617 = cljs.core.nth.call(null,vec__38609_38615,(1),null);var m38604_38618 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38604_38618,((typeof k_38616 === 'string')?cljs.core.keyword.call(null,k_38616):k_38616),keywordize_map.call(null,v_38617)));
{
var G__38619 = seq__38605_38611;
var G__38620 = chunk__38606_38612;
var G__38621 = count__38607_38613;
var G__38622 = (i__38608_38614 + (1));
seq__38605_38611 = G__38619;
chunk__38606_38612 = G__38620;
count__38607_38613 = G__38621;
i__38608_38614 = G__38622;
continue;
}
} else
{var temp__4126__auto___38623 = cljs.core.seq.call(null,seq__38605_38611);if(temp__4126__auto___38623)
{var seq__38605_38624__$1 = temp__4126__auto___38623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38605_38624__$1))
{var c__4314__auto___38625 = cljs.core.chunk_first.call(null,seq__38605_38624__$1);{
var G__38626 = cljs.core.chunk_rest.call(null,seq__38605_38624__$1);
var G__38627 = c__4314__auto___38625;
var G__38628 = cljs.core.count.call(null,c__4314__auto___38625);
var G__38629 = (0);
seq__38605_38611 = G__38626;
chunk__38606_38612 = G__38627;
count__38607_38613 = G__38628;
i__38608_38614 = G__38629;
continue;
}
} else
{var vec__38610_38630 = cljs.core.first.call(null,seq__38605_38624__$1);var k_38631 = cljs.core.nth.call(null,vec__38610_38630,(0),null);var v_38632 = cljs.core.nth.call(null,vec__38610_38630,(1),null);var m38604_38633 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m38604_38633,((typeof k_38631 === 'string')?cljs.core.keyword.call(null,k_38631):k_38631),keywordize_map.call(null,v_38632)));
{
var G__38634 = cljs.core.next.call(null,seq__38605_38624__$1);
var G__38635 = null;
var G__38636 = (0);
var G__38637 = (0);
seq__38605_38611 = G__38634;
chunk__38606_38612 = G__38635;
count__38607_38613 = G__38636;
i__38608_38614 = G__38637;
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
var G__38638 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__38639 = cljs.core.next.call(null,ks);
m = G__38638;
ks = G__38639;
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
})(),(function (){var iter__4283__auto__ = (function iter__38648(s__38649){return (new cljs.core.LazySeq(null,(function (){var s__38649__$1 = s__38649;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38649__$1);if(temp__4126__auto__)
{var s__38649__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38649__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__38649__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__38651 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__38650 = (0);while(true){
if((i__38650 < size__4282__auto__))
{var vec__38654 = cljs.core._nth.call(null,c__4281__auto__,i__38650);var k = cljs.core.nth.call(null,vec__38654,(0),null);var v = cljs.core.nth.call(null,vec__38654,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__38651,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__38656 = (i__38650 + (1));
i__38650 = G__38656;
continue;
}
} else
{{
var G__38657 = (i__38650 + (1));
i__38650 = G__38657;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38651),iter__38648.call(null,cljs.core.chunk_rest.call(null,s__38649__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38651),null);
}
} else
{var vec__38655 = cljs.core.first.call(null,s__38649__$2);var k = cljs.core.nth.call(null,vec__38655,(0),null);var v = cljs.core.nth.call(null,vec__38655,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__38648.call(null,cljs.core.rest.call(null,s__38649__$2)));
} else
{{
var G__38658 = cljs.core.rest.call(null,s__38649__$2);
s__38649__$1 = G__38658;
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
assoc_when.cljs$lang$applyTo = (function (arglist__38659){
var m = cljs.core.first(arglist__38659);
var kvs = cljs.core.rest(arglist__38659);
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
update_in_when.cljs$lang$applyTo = (function (arglist__38660){
var m = cljs.core.first(arglist__38660);
arglist__38660 = cljs.core.next(arglist__38660);
var key_seq = cljs.core.first(arglist__38660);
arglist__38660 = cljs.core.next(arglist__38660);
var f = cljs.core.first(arglist__38660);
var args = cljs.core.rest(arglist__38660);
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
return (function iter__38665(s__38666){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__38666__$1 = s__38666;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38666__$1);if(temp__4126__auto__)
{var s__38666__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38666__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__38666__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__38668 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__38667 = (0);while(true){
if((i__38667 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__38667);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__38668,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__38669 = (i__38667 + (1));
i__38667 = G__38669;
continue;
}
} else
{{
var G__38670 = (i__38667 + (1));
i__38667 = G__38670;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38668),iter__38665.call(null,cljs.core.chunk_rest.call(null,s__38666__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38668),null);
}
} else
{var x = cljs.core.first.call(null,s__38666__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__38665.call(null,cljs.core.rest.call(null,s__38666__$2)));
} else
{{
var G__38671 = cljs.core.rest.call(null,s__38666__$2);
s__38666__$1 = G__38671;
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
interleave_all.cljs$lang$applyTo = (function (arglist__38672){
var colls = cljs.core.seq(arglist__38672);
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
var G__38673__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__38674 = conj_when.call(null,coll,x);
var G__38675 = cljs.core.first.call(null,xs);
var G__38676 = cljs.core.next.call(null,xs);
coll = G__38674;
x = G__38675;
xs = G__38676;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__38673 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38673__delegate.call(this,coll,x,xs);};
G__38673.cljs$lang$maxFixedArity = 2;
G__38673.cljs$lang$applyTo = (function (arglist__38677){
var coll = cljs.core.first(arglist__38677);
arglist__38677 = cljs.core.next(arglist__38677);
var x = cljs.core.first(arglist__38677);
var xs = cljs.core.rest(arglist__38677);
return G__38673__delegate(coll,x,xs);
});
G__38673.cljs$core$IFn$_invoke$arity$variadic = G__38673__delegate;
return G__38673;
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
var G__38679__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__38678_SHARP_){return cljs.core.apply.call(null,f,p1__38678_SHARP_,args);
}));
};
var G__38679 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38679__delegate.call(this,a,f,args);};
G__38679.cljs$lang$maxFixedArity = 2;
G__38679.cljs$lang$applyTo = (function (arglist__38680){
var a = cljs.core.first(arglist__38680);
arglist__38680 = cljs.core.next(arglist__38680);
var f = cljs.core.first(arglist__38680);
var args = cljs.core.rest(arglist__38680);
return G__38679__delegate(a,f,args);
});
G__38679.cljs$core$IFn$_invoke$arity$variadic = G__38679__delegate;
return G__38679;
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
var G__38681__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__38681 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38681__delegate.call(this,f,arg,args);};
G__38681.cljs$lang$maxFixedArity = 2;
G__38681.cljs$lang$applyTo = (function (arglist__38682){
var f = cljs.core.first(arglist__38682);
arglist__38682 = cljs.core.next(arglist__38682);
var arg = cljs.core.first(arglist__38682);
var args = cljs.core.rest(arglist__38682);
return G__38681__delegate(f,arg,args);
});
G__38681.cljs$core$IFn$_invoke$arity$variadic = G__38681__delegate;
return G__38681;
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
