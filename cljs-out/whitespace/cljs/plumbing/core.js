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
var G__23462__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__23462 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__23462__delegate.call(this,m,k,f,x1,x2,xs);};
G__23462.cljs$lang$maxFixedArity = 5;
G__23462.cljs$lang$applyTo = (function (arglist__23463){
var m = cljs.core.first(arglist__23463);
arglist__23463 = cljs.core.next(arglist__23463);
var k = cljs.core.first(arglist__23463);
arglist__23463 = cljs.core.next(arglist__23463);
var f = cljs.core.first(arglist__23463);
arglist__23463 = cljs.core.next(arglist__23463);
var x1 = cljs.core.first(arglist__23463);
arglist__23463 = cljs.core.next(arglist__23463);
var x2 = cljs.core.first(arglist__23463);
var xs = cljs.core.rest(arglist__23463);
return G__23462__delegate(m,k,f,x1,x2,xs);
});
G__23462.cljs$core$IFn$_invoke$arity$variadic = G__23462__delegate;
return G__23462;
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
{var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23472_23478 = cljs.core.seq.call(null,m);var chunk__23473_23479 = null;var count__23474_23480 = (0);var i__23475_23481 = (0);while(true){
if((i__23475_23481 < count__23474_23480))
{var vec__23476_23482 = cljs.core._nth.call(null,chunk__23473_23479,i__23475_23481);var k_23483 = cljs.core.nth.call(null,vec__23476_23482,(0),null);var v_23484 = cljs.core.nth.call(null,vec__23476_23482,(1),null);var m23471_23485 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m23471_23485,k_23483,f.call(null,v_23484)));
{
var G__23486 = seq__23472_23478;
var G__23487 = chunk__23473_23479;
var G__23488 = count__23474_23480;
var G__23489 = (i__23475_23481 + (1));
seq__23472_23478 = G__23486;
chunk__23473_23479 = G__23487;
count__23474_23480 = G__23488;
i__23475_23481 = G__23489;
continue;
}
} else
{var temp__4126__auto___23490 = cljs.core.seq.call(null,seq__23472_23478);if(temp__4126__auto___23490)
{var seq__23472_23491__$1 = temp__4126__auto___23490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23472_23491__$1))
{var c__4406__auto___23492 = cljs.core.chunk_first.call(null,seq__23472_23491__$1);{
var G__23493 = cljs.core.chunk_rest.call(null,seq__23472_23491__$1);
var G__23494 = c__4406__auto___23492;
var G__23495 = cljs.core.count.call(null,c__4406__auto___23492);
var G__23496 = (0);
seq__23472_23478 = G__23493;
chunk__23473_23479 = G__23494;
count__23474_23480 = G__23495;
i__23475_23481 = G__23496;
continue;
}
} else
{var vec__23477_23497 = cljs.core.first.call(null,seq__23472_23491__$1);var k_23498 = cljs.core.nth.call(null,vec__23477_23497,(0),null);var v_23499 = cljs.core.nth.call(null,vec__23477_23497,(1),null);var m23471_23500 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m23471_23500,k_23498,f.call(null,v_23499)));
{
var G__23501 = cljs.core.next.call(null,seq__23472_23491__$1);
var G__23502 = null;
var G__23503 = (0);
var G__23504 = (0);
seq__23472_23478 = G__23501;
chunk__23473_23479 = G__23502;
count__23474_23480 = G__23503;
i__23475_23481 = G__23504;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14991__auto__));

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
{var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23513_23519 = cljs.core.seq.call(null,m);var chunk__23514_23520 = null;var count__23515_23521 = (0);var i__23516_23522 = (0);while(true){
if((i__23516_23522 < count__23515_23521))
{var vec__23517_23523 = cljs.core._nth.call(null,chunk__23514_23520,i__23516_23522);var k_23524 = cljs.core.nth.call(null,vec__23517_23523,(0),null);var v_23525 = cljs.core.nth.call(null,vec__23517_23523,(1),null);var m23512_23526 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m23512_23526,f.call(null,k_23524),v_23525));
{
var G__23527 = seq__23513_23519;
var G__23528 = chunk__23514_23520;
var G__23529 = count__23515_23521;
var G__23530 = (i__23516_23522 + (1));
seq__23513_23519 = G__23527;
chunk__23514_23520 = G__23528;
count__23515_23521 = G__23529;
i__23516_23522 = G__23530;
continue;
}
} else
{var temp__4126__auto___23531 = cljs.core.seq.call(null,seq__23513_23519);if(temp__4126__auto___23531)
{var seq__23513_23532__$1 = temp__4126__auto___23531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23513_23532__$1))
{var c__4406__auto___23533 = cljs.core.chunk_first.call(null,seq__23513_23532__$1);{
var G__23534 = cljs.core.chunk_rest.call(null,seq__23513_23532__$1);
var G__23535 = c__4406__auto___23533;
var G__23536 = cljs.core.count.call(null,c__4406__auto___23533);
var G__23537 = (0);
seq__23513_23519 = G__23534;
chunk__23514_23520 = G__23535;
count__23515_23521 = G__23536;
i__23516_23522 = G__23537;
continue;
}
} else
{var vec__23518_23538 = cljs.core.first.call(null,seq__23513_23532__$1);var k_23539 = cljs.core.nth.call(null,vec__23518_23538,(0),null);var v_23540 = cljs.core.nth.call(null,vec__23518_23538,(1),null);var m23512_23541 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m23512_23541,f.call(null,k_23539),v_23540));
{
var G__23542 = cljs.core.next.call(null,seq__23513_23532__$1);
var G__23543 = null;
var G__23544 = (0);
var G__23545 = (0);
seq__23513_23519 = G__23542;
chunk__23514_23520 = G__23543;
count__23515_23521 = G__23544;
i__23516_23522 = G__23545;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14991__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23552_23556 = cljs.core.seq.call(null,ks);var chunk__23553_23557 = null;var count__23554_23558 = (0);var i__23555_23559 = (0);while(true){
if((i__23555_23559 < count__23554_23558))
{var k_23560 = cljs.core._nth.call(null,chunk__23553_23557,i__23555_23559);var m23551_23561 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m23551_23561,k_23560,f.call(null,k_23560)));
{
var G__23562 = seq__23552_23556;
var G__23563 = chunk__23553_23557;
var G__23564 = count__23554_23558;
var G__23565 = (i__23555_23559 + (1));
seq__23552_23556 = G__23562;
chunk__23553_23557 = G__23563;
count__23554_23558 = G__23564;
i__23555_23559 = G__23565;
continue;
}
} else
{var temp__4126__auto___23566 = cljs.core.seq.call(null,seq__23552_23556);if(temp__4126__auto___23566)
{var seq__23552_23567__$1 = temp__4126__auto___23566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23552_23567__$1))
{var c__4406__auto___23568 = cljs.core.chunk_first.call(null,seq__23552_23567__$1);{
var G__23569 = cljs.core.chunk_rest.call(null,seq__23552_23567__$1);
var G__23570 = c__4406__auto___23568;
var G__23571 = cljs.core.count.call(null,c__4406__auto___23568);
var G__23572 = (0);
seq__23552_23556 = G__23569;
chunk__23553_23557 = G__23570;
count__23554_23558 = G__23571;
i__23555_23559 = G__23572;
continue;
}
} else
{var k_23573 = cljs.core.first.call(null,seq__23552_23567__$1);var m23551_23574 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m23551_23574,k_23573,f.call(null,k_23573)));
{
var G__23575 = cljs.core.next.call(null,seq__23552_23567__$1);
var G__23576 = null;
var G__23577 = (0);
var G__23578 = (0);
seq__23552_23556 = G__23575;
chunk__23553_23557 = G__23576;
count__23554_23558 = G__23577;
i__23555_23559 = G__23578;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14991__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23585_23589 = cljs.core.seq.call(null,vs);var chunk__23586_23590 = null;var count__23587_23591 = (0);var i__23588_23592 = (0);while(true){
if((i__23588_23592 < count__23587_23591))
{var v_23593 = cljs.core._nth.call(null,chunk__23586_23590,i__23588_23592);var m23584_23594 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m23584_23594,f.call(null,v_23593),v_23593));
{
var G__23595 = seq__23585_23589;
var G__23596 = chunk__23586_23590;
var G__23597 = count__23587_23591;
var G__23598 = (i__23588_23592 + (1));
seq__23585_23589 = G__23595;
chunk__23586_23590 = G__23596;
count__23587_23591 = G__23597;
i__23588_23592 = G__23598;
continue;
}
} else
{var temp__4126__auto___23599 = cljs.core.seq.call(null,seq__23585_23589);if(temp__4126__auto___23599)
{var seq__23585_23600__$1 = temp__4126__auto___23599;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23585_23600__$1))
{var c__4406__auto___23601 = cljs.core.chunk_first.call(null,seq__23585_23600__$1);{
var G__23602 = cljs.core.chunk_rest.call(null,seq__23585_23600__$1);
var G__23603 = c__4406__auto___23601;
var G__23604 = cljs.core.count.call(null,c__4406__auto___23601);
var G__23605 = (0);
seq__23585_23589 = G__23602;
chunk__23586_23590 = G__23603;
count__23587_23591 = G__23604;
i__23588_23592 = G__23605;
continue;
}
} else
{var v_23606 = cljs.core.first.call(null,seq__23585_23600__$1);var m23584_23607 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m23584_23607,f.call(null,v_23606),v_23606));
{
var G__23608 = cljs.core.next.call(null,seq__23585_23600__$1);
var G__23609 = null;
var G__23610 = (0);
var G__23611 = (0);
seq__23585_23589 = G__23608;
chunk__23586_23590 = G__23609;
count__23587_23591 = G__23610;
i__23588_23592 = G__23611;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14991__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__23612){var vec__23614 = p__23612;var k = cljs.core.nth.call(null,vec__23614,(0),null);var ks = cljs.core.nthnext.call(null,vec__23614,(1));if(cljs.core.truth_(m))
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
{var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23623_23629 = cljs.core.seq.call(null,x);var chunk__23624_23630 = null;var count__23625_23631 = (0);var i__23626_23632 = (0);while(true){
if((i__23626_23632 < count__23625_23631))
{var vec__23627_23633 = cljs.core._nth.call(null,chunk__23624_23630,i__23626_23632);var k_23634 = cljs.core.nth.call(null,vec__23627_23633,(0),null);var v_23635 = cljs.core.nth.call(null,vec__23627_23633,(1),null);var m23622_23636 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m23622_23636,((typeof k_23634 === 'string')?cljs.core.keyword.call(null,k_23634):k_23634),keywordize_map.call(null,v_23635)));
{
var G__23637 = seq__23623_23629;
var G__23638 = chunk__23624_23630;
var G__23639 = count__23625_23631;
var G__23640 = (i__23626_23632 + (1));
seq__23623_23629 = G__23637;
chunk__23624_23630 = G__23638;
count__23625_23631 = G__23639;
i__23626_23632 = G__23640;
continue;
}
} else
{var temp__4126__auto___23641 = cljs.core.seq.call(null,seq__23623_23629);if(temp__4126__auto___23641)
{var seq__23623_23642__$1 = temp__4126__auto___23641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23623_23642__$1))
{var c__4406__auto___23643 = cljs.core.chunk_first.call(null,seq__23623_23642__$1);{
var G__23644 = cljs.core.chunk_rest.call(null,seq__23623_23642__$1);
var G__23645 = c__4406__auto___23643;
var G__23646 = cljs.core.count.call(null,c__4406__auto___23643);
var G__23647 = (0);
seq__23623_23629 = G__23644;
chunk__23624_23630 = G__23645;
count__23625_23631 = G__23646;
i__23626_23632 = G__23647;
continue;
}
} else
{var vec__23628_23648 = cljs.core.first.call(null,seq__23623_23642__$1);var k_23649 = cljs.core.nth.call(null,vec__23628_23648,(0),null);var v_23650 = cljs.core.nth.call(null,vec__23628_23648,(1),null);var m23622_23651 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m23622_23651,((typeof k_23649 === 'string')?cljs.core.keyword.call(null,k_23649):k_23649),keywordize_map.call(null,v_23650)));
{
var G__23652 = cljs.core.next.call(null,seq__23623_23642__$1);
var G__23653 = null;
var G__23654 = (0);
var G__23655 = (0);
seq__23623_23629 = G__23652;
chunk__23624_23630 = G__23653;
count__23625_23631 = G__23654;
i__23626_23632 = G__23655;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14991__auto__));
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
{var pair__15060__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__15060__auto__);
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
var G__23656 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__23657 = cljs.core.next.call(null,ks);
m = G__23656;
ks = G__23657;
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
})(),(function (){var iter__4375__auto__ = (function iter__23666(s__23667){return (new cljs.core.LazySeq(null,(function (){var s__23667__$1 = s__23667;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23667__$1);if(temp__4126__auto__)
{var s__23667__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23667__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23667__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23669 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23668 = (0);while(true){
if((i__23668 < size__4374__auto__))
{var vec__23672 = cljs.core._nth.call(null,c__4373__auto__,i__23668);var k = cljs.core.nth.call(null,vec__23672,(0),null);var v = cljs.core.nth.call(null,vec__23672,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__23669,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23674 = (i__23668 + (1));
i__23668 = G__23674;
continue;
}
} else
{{
var G__23675 = (i__23668 + (1));
i__23668 = G__23675;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23669),iter__23666.call(null,cljs.core.chunk_rest.call(null,s__23667__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23669),null);
}
} else
{var vec__23673 = cljs.core.first.call(null,s__23667__$2);var k = cljs.core.nth.call(null,vec__23673,(0),null);var v = cljs.core.nth.call(null,vec__23673,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23666.call(null,cljs.core.rest.call(null,s__23667__$2)));
} else
{{
var G__23676 = cljs.core.rest.call(null,s__23667__$2);
s__23667__$1 = G__23676;
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
assoc_when.cljs$lang$applyTo = (function (arglist__23677){
var m = cljs.core.first(arglist__23677);
var kvs = cljs.core.rest(arglist__23677);
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
update_in_when.cljs$lang$applyTo = (function (arglist__23678){
var m = cljs.core.first(arglist__23678);
arglist__23678 = cljs.core.next(arglist__23678);
var key_seq = cljs.core.first(arglist__23678);
arglist__23678 = cljs.core.next(arglist__23678);
var f = cljs.core.first(arglist__23678);
var args = cljs.core.rest(arglist__23678);
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
return (function iter__23683(s__23684){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__23684__$1 = s__23684;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23684__$1);if(temp__4126__auto__)
{var s__23684__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23684__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23684__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23686 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23685 = (0);while(true){
if((i__23685 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__23685);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__23686,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__23687 = (i__23685 + (1));
i__23685 = G__23687;
continue;
}
} else
{{
var G__23688 = (i__23685 + (1));
i__23685 = G__23688;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23686),iter__23683.call(null,cljs.core.chunk_rest.call(null,s__23684__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23686),null);
}
} else
{var x = cljs.core.first.call(null,s__23684__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__23683.call(null,cljs.core.rest.call(null,s__23684__$2)));
} else
{{
var G__23689 = cljs.core.rest.call(null,s__23684__$2);
s__23684__$1 = G__23689;
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
interleave_all.cljs$lang$applyTo = (function (arglist__23690){
var colls = cljs.core.seq(arglist__23690);
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
var G__23691__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__23692 = conj_when.call(null,coll,x);
var G__23693 = cljs.core.first.call(null,xs);
var G__23694 = cljs.core.next.call(null,xs);
coll = G__23692;
x = G__23693;
xs = G__23694;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__23691 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23691__delegate.call(this,coll,x,xs);};
G__23691.cljs$lang$maxFixedArity = 2;
G__23691.cljs$lang$applyTo = (function (arglist__23695){
var coll = cljs.core.first(arglist__23695);
arglist__23695 = cljs.core.next(arglist__23695);
var x = cljs.core.first(arglist__23695);
var xs = cljs.core.rest(arglist__23695);
return G__23691__delegate(coll,x,xs);
});
G__23691.cljs$core$IFn$_invoke$arity$variadic = G__23691__delegate;
return G__23691;
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
var G__23697__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__23696_SHARP_){return cljs.core.apply.call(null,f,p1__23696_SHARP_,args);
}));
};
var G__23697 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23697__delegate.call(this,a,f,args);};
G__23697.cljs$lang$maxFixedArity = 2;
G__23697.cljs$lang$applyTo = (function (arglist__23698){
var a = cljs.core.first(arglist__23698);
arglist__23698 = cljs.core.next(arglist__23698);
var f = cljs.core.first(arglist__23698);
var args = cljs.core.rest(arglist__23698);
return G__23697__delegate(a,f,args);
});
G__23697.cljs$core$IFn$_invoke$arity$variadic = G__23697__delegate;
return G__23697;
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
var G__23699__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__23699 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23699__delegate.call(this,f,arg,args);};
G__23699.cljs$lang$maxFixedArity = 2;
G__23699.cljs$lang$applyTo = (function (arglist__23700){
var f = cljs.core.first(arglist__23700);
arglist__23700 = cljs.core.next(arglist__23700);
var arg = cljs.core.first(arglist__23700);
var args = cljs.core.rest(arglist__23700);
return G__23699__delegate(f,arg,args);
});
G__23699.cljs$core$IFn$_invoke$arity$variadic = G__23699__delegate;
return G__23699;
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
