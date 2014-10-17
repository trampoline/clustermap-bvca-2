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
var G__23528__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__23528 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__23528__delegate.call(this,m,k,f,x1,x2,xs);};
G__23528.cljs$lang$maxFixedArity = 5;
G__23528.cljs$lang$applyTo = (function (arglist__23529){
var m = cljs.core.first(arglist__23529);
arglist__23529 = cljs.core.next(arglist__23529);
var k = cljs.core.first(arglist__23529);
arglist__23529 = cljs.core.next(arglist__23529);
var f = cljs.core.first(arglist__23529);
arglist__23529 = cljs.core.next(arglist__23529);
var x1 = cljs.core.first(arglist__23529);
arglist__23529 = cljs.core.next(arglist__23529);
var x2 = cljs.core.first(arglist__23529);
var xs = cljs.core.rest(arglist__23529);
return G__23528__delegate(m,k,f,x1,x2,xs);
});
G__23528.cljs$core$IFn$_invoke$arity$variadic = G__23528__delegate;
return G__23528;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23538_23544 = cljs.core.seq.call(null,m);var chunk__23539_23545 = null;var count__23540_23546 = (0);var i__23541_23547 = (0);while(true){
if((i__23541_23547 < count__23540_23546))
{var vec__23542_23548 = cljs.core._nth.call(null,chunk__23539_23545,i__23541_23547);var k_23549 = cljs.core.nth.call(null,vec__23542_23548,(0),null);var v_23550 = cljs.core.nth.call(null,vec__23542_23548,(1),null);var m23537_23551 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23537_23551,k_23549,f.call(null,v_23550)));
{
var G__23552 = seq__23538_23544;
var G__23553 = chunk__23539_23545;
var G__23554 = count__23540_23546;
var G__23555 = (i__23541_23547 + (1));
seq__23538_23544 = G__23552;
chunk__23539_23545 = G__23553;
count__23540_23546 = G__23554;
i__23541_23547 = G__23555;
continue;
}
} else
{var temp__4126__auto___23556 = cljs.core.seq.call(null,seq__23538_23544);if(temp__4126__auto___23556)
{var seq__23538_23557__$1 = temp__4126__auto___23556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23538_23557__$1))
{var c__4314__auto___23558 = cljs.core.chunk_first.call(null,seq__23538_23557__$1);{
var G__23559 = cljs.core.chunk_rest.call(null,seq__23538_23557__$1);
var G__23560 = c__4314__auto___23558;
var G__23561 = cljs.core.count.call(null,c__4314__auto___23558);
var G__23562 = (0);
seq__23538_23544 = G__23559;
chunk__23539_23545 = G__23560;
count__23540_23546 = G__23561;
i__23541_23547 = G__23562;
continue;
}
} else
{var vec__23543_23563 = cljs.core.first.call(null,seq__23538_23557__$1);var k_23564 = cljs.core.nth.call(null,vec__23543_23563,(0),null);var v_23565 = cljs.core.nth.call(null,vec__23543_23563,(1),null);var m23537_23566 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23537_23566,k_23564,f.call(null,v_23565)));
{
var G__23567 = cljs.core.next.call(null,seq__23538_23557__$1);
var G__23568 = null;
var G__23569 = (0);
var G__23570 = (0);
seq__23538_23544 = G__23567;
chunk__23539_23545 = G__23568;
count__23540_23546 = G__23569;
i__23541_23547 = G__23570;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23579_23585 = cljs.core.seq.call(null,m);var chunk__23580_23586 = null;var count__23581_23587 = (0);var i__23582_23588 = (0);while(true){
if((i__23582_23588 < count__23581_23587))
{var vec__23583_23589 = cljs.core._nth.call(null,chunk__23580_23586,i__23582_23588);var k_23590 = cljs.core.nth.call(null,vec__23583_23589,(0),null);var v_23591 = cljs.core.nth.call(null,vec__23583_23589,(1),null);var m23578_23592 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23578_23592,f.call(null,k_23590),v_23591));
{
var G__23593 = seq__23579_23585;
var G__23594 = chunk__23580_23586;
var G__23595 = count__23581_23587;
var G__23596 = (i__23582_23588 + (1));
seq__23579_23585 = G__23593;
chunk__23580_23586 = G__23594;
count__23581_23587 = G__23595;
i__23582_23588 = G__23596;
continue;
}
} else
{var temp__4126__auto___23597 = cljs.core.seq.call(null,seq__23579_23585);if(temp__4126__auto___23597)
{var seq__23579_23598__$1 = temp__4126__auto___23597;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23579_23598__$1))
{var c__4314__auto___23599 = cljs.core.chunk_first.call(null,seq__23579_23598__$1);{
var G__23600 = cljs.core.chunk_rest.call(null,seq__23579_23598__$1);
var G__23601 = c__4314__auto___23599;
var G__23602 = cljs.core.count.call(null,c__4314__auto___23599);
var G__23603 = (0);
seq__23579_23585 = G__23600;
chunk__23580_23586 = G__23601;
count__23581_23587 = G__23602;
i__23582_23588 = G__23603;
continue;
}
} else
{var vec__23584_23604 = cljs.core.first.call(null,seq__23579_23598__$1);var k_23605 = cljs.core.nth.call(null,vec__23584_23604,(0),null);var v_23606 = cljs.core.nth.call(null,vec__23584_23604,(1),null);var m23578_23607 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23578_23607,f.call(null,k_23605),v_23606));
{
var G__23608 = cljs.core.next.call(null,seq__23579_23598__$1);
var G__23609 = null;
var G__23610 = (0);
var G__23611 = (0);
seq__23579_23585 = G__23608;
chunk__23580_23586 = G__23609;
count__23581_23587 = G__23610;
i__23582_23588 = G__23611;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23618_23622 = cljs.core.seq.call(null,ks);var chunk__23619_23623 = null;var count__23620_23624 = (0);var i__23621_23625 = (0);while(true){
if((i__23621_23625 < count__23620_23624))
{var k_23626 = cljs.core._nth.call(null,chunk__23619_23623,i__23621_23625);var m23617_23627 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23617_23627,k_23626,f.call(null,k_23626)));
{
var G__23628 = seq__23618_23622;
var G__23629 = chunk__23619_23623;
var G__23630 = count__23620_23624;
var G__23631 = (i__23621_23625 + (1));
seq__23618_23622 = G__23628;
chunk__23619_23623 = G__23629;
count__23620_23624 = G__23630;
i__23621_23625 = G__23631;
continue;
}
} else
{var temp__4126__auto___23632 = cljs.core.seq.call(null,seq__23618_23622);if(temp__4126__auto___23632)
{var seq__23618_23633__$1 = temp__4126__auto___23632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23618_23633__$1))
{var c__4314__auto___23634 = cljs.core.chunk_first.call(null,seq__23618_23633__$1);{
var G__23635 = cljs.core.chunk_rest.call(null,seq__23618_23633__$1);
var G__23636 = c__4314__auto___23634;
var G__23637 = cljs.core.count.call(null,c__4314__auto___23634);
var G__23638 = (0);
seq__23618_23622 = G__23635;
chunk__23619_23623 = G__23636;
count__23620_23624 = G__23637;
i__23621_23625 = G__23638;
continue;
}
} else
{var k_23639 = cljs.core.first.call(null,seq__23618_23633__$1);var m23617_23640 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23617_23640,k_23639,f.call(null,k_23639)));
{
var G__23641 = cljs.core.next.call(null,seq__23618_23633__$1);
var G__23642 = null;
var G__23643 = (0);
var G__23644 = (0);
seq__23618_23622 = G__23641;
chunk__23619_23623 = G__23642;
count__23620_23624 = G__23643;
i__23621_23625 = G__23644;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23651_23655 = cljs.core.seq.call(null,vs);var chunk__23652_23656 = null;var count__23653_23657 = (0);var i__23654_23658 = (0);while(true){
if((i__23654_23658 < count__23653_23657))
{var v_23659 = cljs.core._nth.call(null,chunk__23652_23656,i__23654_23658);var m23650_23660 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23650_23660,f.call(null,v_23659),v_23659));
{
var G__23661 = seq__23651_23655;
var G__23662 = chunk__23652_23656;
var G__23663 = count__23653_23657;
var G__23664 = (i__23654_23658 + (1));
seq__23651_23655 = G__23661;
chunk__23652_23656 = G__23662;
count__23653_23657 = G__23663;
i__23654_23658 = G__23664;
continue;
}
} else
{var temp__4126__auto___23665 = cljs.core.seq.call(null,seq__23651_23655);if(temp__4126__auto___23665)
{var seq__23651_23666__$1 = temp__4126__auto___23665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23651_23666__$1))
{var c__4314__auto___23667 = cljs.core.chunk_first.call(null,seq__23651_23666__$1);{
var G__23668 = cljs.core.chunk_rest.call(null,seq__23651_23666__$1);
var G__23669 = c__4314__auto___23667;
var G__23670 = cljs.core.count.call(null,c__4314__auto___23667);
var G__23671 = (0);
seq__23651_23655 = G__23668;
chunk__23652_23656 = G__23669;
count__23653_23657 = G__23670;
i__23654_23658 = G__23671;
continue;
}
} else
{var v_23672 = cljs.core.first.call(null,seq__23651_23666__$1);var m23650_23673 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23650_23673,f.call(null,v_23672),v_23672));
{
var G__23674 = cljs.core.next.call(null,seq__23651_23666__$1);
var G__23675 = null;
var G__23676 = (0);
var G__23677 = (0);
seq__23651_23655 = G__23674;
chunk__23652_23656 = G__23675;
count__23653_23657 = G__23676;
i__23654_23658 = G__23677;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__23678){var vec__23680 = p__23678;var k = cljs.core.nth.call(null,vec__23680,(0),null);var ks = cljs.core.nthnext.call(null,vec__23680,(1));if(cljs.core.truth_(m))
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23689_23695 = cljs.core.seq.call(null,x);var chunk__23690_23696 = null;var count__23691_23697 = (0);var i__23692_23698 = (0);while(true){
if((i__23692_23698 < count__23691_23697))
{var vec__23693_23699 = cljs.core._nth.call(null,chunk__23690_23696,i__23692_23698);var k_23700 = cljs.core.nth.call(null,vec__23693_23699,(0),null);var v_23701 = cljs.core.nth.call(null,vec__23693_23699,(1),null);var m23688_23702 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23688_23702,((typeof k_23700 === 'string')?cljs.core.keyword.call(null,k_23700):k_23700),keywordize_map.call(null,v_23701)));
{
var G__23703 = seq__23689_23695;
var G__23704 = chunk__23690_23696;
var G__23705 = count__23691_23697;
var G__23706 = (i__23692_23698 + (1));
seq__23689_23695 = G__23703;
chunk__23690_23696 = G__23704;
count__23691_23697 = G__23705;
i__23692_23698 = G__23706;
continue;
}
} else
{var temp__4126__auto___23707 = cljs.core.seq.call(null,seq__23689_23695);if(temp__4126__auto___23707)
{var seq__23689_23708__$1 = temp__4126__auto___23707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23689_23708__$1))
{var c__4314__auto___23709 = cljs.core.chunk_first.call(null,seq__23689_23708__$1);{
var G__23710 = cljs.core.chunk_rest.call(null,seq__23689_23708__$1);
var G__23711 = c__4314__auto___23709;
var G__23712 = cljs.core.count.call(null,c__4314__auto___23709);
var G__23713 = (0);
seq__23689_23695 = G__23710;
chunk__23690_23696 = G__23711;
count__23691_23697 = G__23712;
i__23692_23698 = G__23713;
continue;
}
} else
{var vec__23694_23714 = cljs.core.first.call(null,seq__23689_23708__$1);var k_23715 = cljs.core.nth.call(null,vec__23694_23714,(0),null);var v_23716 = cljs.core.nth.call(null,vec__23694_23714,(1),null);var m23688_23717 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23688_23717,((typeof k_23715 === 'string')?cljs.core.keyword.call(null,k_23715):k_23715),keywordize_map.call(null,v_23716)));
{
var G__23718 = cljs.core.next.call(null,seq__23689_23708__$1);
var G__23719 = null;
var G__23720 = (0);
var G__23721 = (0);
seq__23689_23695 = G__23718;
chunk__23690_23696 = G__23719;
count__23691_23697 = G__23720;
i__23692_23698 = G__23721;
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
var G__23722 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__23723 = cljs.core.next.call(null,ks);
m = G__23722;
ks = G__23723;
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
})(),(function (){var iter__4283__auto__ = (function iter__23732(s__23733){return (new cljs.core.LazySeq(null,(function (){var s__23733__$1 = s__23733;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23733__$1);if(temp__4126__auto__)
{var s__23733__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23733__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23733__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23735 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23734 = (0);while(true){
if((i__23734 < size__4282__auto__))
{var vec__23738 = cljs.core._nth.call(null,c__4281__auto__,i__23734);var k = cljs.core.nth.call(null,vec__23738,(0),null);var v = cljs.core.nth.call(null,vec__23738,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__23735,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23740 = (i__23734 + (1));
i__23734 = G__23740;
continue;
}
} else
{{
var G__23741 = (i__23734 + (1));
i__23734 = G__23741;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23735),iter__23732.call(null,cljs.core.chunk_rest.call(null,s__23733__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23735),null);
}
} else
{var vec__23739 = cljs.core.first.call(null,s__23733__$2);var k = cljs.core.nth.call(null,vec__23739,(0),null);var v = cljs.core.nth.call(null,vec__23739,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23732.call(null,cljs.core.rest.call(null,s__23733__$2)));
} else
{{
var G__23742 = cljs.core.rest.call(null,s__23733__$2);
s__23733__$1 = G__23742;
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
assoc_when.cljs$lang$applyTo = (function (arglist__23743){
var m = cljs.core.first(arglist__23743);
var kvs = cljs.core.rest(arglist__23743);
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
update_in_when.cljs$lang$applyTo = (function (arglist__23744){
var m = cljs.core.first(arglist__23744);
arglist__23744 = cljs.core.next(arglist__23744);
var key_seq = cljs.core.first(arglist__23744);
arglist__23744 = cljs.core.next(arglist__23744);
var f = cljs.core.first(arglist__23744);
var args = cljs.core.rest(arglist__23744);
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
return (function iter__23749(s__23750){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__23750__$1 = s__23750;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23750__$1);if(temp__4126__auto__)
{var s__23750__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23750__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23750__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23752 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23751 = (0);while(true){
if((i__23751 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__23751);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__23752,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__23753 = (i__23751 + (1));
i__23751 = G__23753;
continue;
}
} else
{{
var G__23754 = (i__23751 + (1));
i__23751 = G__23754;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23752),iter__23749.call(null,cljs.core.chunk_rest.call(null,s__23750__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23752),null);
}
} else
{var x = cljs.core.first.call(null,s__23750__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__23749.call(null,cljs.core.rest.call(null,s__23750__$2)));
} else
{{
var G__23755 = cljs.core.rest.call(null,s__23750__$2);
s__23750__$1 = G__23755;
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
interleave_all.cljs$lang$applyTo = (function (arglist__23756){
var colls = cljs.core.seq(arglist__23756);
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
var G__23757__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__23758 = conj_when.call(null,coll,x);
var G__23759 = cljs.core.first.call(null,xs);
var G__23760 = cljs.core.next.call(null,xs);
coll = G__23758;
x = G__23759;
xs = G__23760;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__23757 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23757__delegate.call(this,coll,x,xs);};
G__23757.cljs$lang$maxFixedArity = 2;
G__23757.cljs$lang$applyTo = (function (arglist__23761){
var coll = cljs.core.first(arglist__23761);
arglist__23761 = cljs.core.next(arglist__23761);
var x = cljs.core.first(arglist__23761);
var xs = cljs.core.rest(arglist__23761);
return G__23757__delegate(coll,x,xs);
});
G__23757.cljs$core$IFn$_invoke$arity$variadic = G__23757__delegate;
return G__23757;
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
var G__23763__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__23762_SHARP_){return cljs.core.apply.call(null,f,p1__23762_SHARP_,args);
}));
};
var G__23763 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23763__delegate.call(this,a,f,args);};
G__23763.cljs$lang$maxFixedArity = 2;
G__23763.cljs$lang$applyTo = (function (arglist__23764){
var a = cljs.core.first(arglist__23764);
arglist__23764 = cljs.core.next(arglist__23764);
var f = cljs.core.first(arglist__23764);
var args = cljs.core.rest(arglist__23764);
return G__23763__delegate(a,f,args);
});
G__23763.cljs$core$IFn$_invoke$arity$variadic = G__23763__delegate;
return G__23763;
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
var G__23765__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__23765 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23765__delegate.call(this,f,arg,args);};
G__23765.cljs$lang$maxFixedArity = 2;
G__23765.cljs$lang$applyTo = (function (arglist__23766){
var f = cljs.core.first(arglist__23766);
arglist__23766 = cljs.core.next(arglist__23766);
var arg = cljs.core.first(arglist__23766);
var args = cljs.core.rest(arglist__23766);
return G__23765__delegate(f,arg,args);
});
G__23765.cljs$core$IFn$_invoke$arity$variadic = G__23765__delegate;
return G__23765;
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
