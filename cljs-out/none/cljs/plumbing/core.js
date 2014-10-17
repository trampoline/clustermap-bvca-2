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
var G__27579__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__27579 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__27579__delegate.call(this,m,k,f,x1,x2,xs);};
G__27579.cljs$lang$maxFixedArity = 5;
G__27579.cljs$lang$applyTo = (function (arglist__27580){
var m = cljs.core.first(arglist__27580);
arglist__27580 = cljs.core.next(arglist__27580);
var k = cljs.core.first(arglist__27580);
arglist__27580 = cljs.core.next(arglist__27580);
var f = cljs.core.first(arglist__27580);
arglist__27580 = cljs.core.next(arglist__27580);
var x1 = cljs.core.first(arglist__27580);
arglist__27580 = cljs.core.next(arglist__27580);
var x2 = cljs.core.first(arglist__27580);
var xs = cljs.core.rest(arglist__27580);
return G__27579__delegate(m,k,f,x1,x2,xs);
});
G__27579.cljs$core$IFn$_invoke$arity$variadic = G__27579__delegate;
return G__27579;
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
{var m_atom__16491__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__27589_27595 = cljs.core.seq.call(null,m);var chunk__27590_27596 = null;var count__27591_27597 = (0);var i__27592_27598 = (0);while(true){
if((i__27592_27598 < count__27591_27597))
{var vec__27593_27599 = cljs.core._nth.call(null,chunk__27590_27596,i__27592_27598);var k_27600 = cljs.core.nth.call(null,vec__27593_27599,(0),null);var v_27601 = cljs.core.nth.call(null,vec__27593_27599,(1),null);var m27588_27602 = cljs.core.deref.call(null,m_atom__16491__auto__);cljs.core.reset_BANG_.call(null,m_atom__16491__auto__,cljs.core.assoc_BANG_.call(null,m27588_27602,k_27600,f.call(null,v_27601)));
{
var G__27603 = seq__27589_27595;
var G__27604 = chunk__27590_27596;
var G__27605 = count__27591_27597;
var G__27606 = (i__27592_27598 + (1));
seq__27589_27595 = G__27603;
chunk__27590_27596 = G__27604;
count__27591_27597 = G__27605;
i__27592_27598 = G__27606;
continue;
}
} else
{var temp__4126__auto___27607 = cljs.core.seq.call(null,seq__27589_27595);if(temp__4126__auto___27607)
{var seq__27589_27608__$1 = temp__4126__auto___27607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27589_27608__$1))
{var c__8656__auto___27609 = cljs.core.chunk_first.call(null,seq__27589_27608__$1);{
var G__27610 = cljs.core.chunk_rest.call(null,seq__27589_27608__$1);
var G__27611 = c__8656__auto___27609;
var G__27612 = cljs.core.count.call(null,c__8656__auto___27609);
var G__27613 = (0);
seq__27589_27595 = G__27610;
chunk__27590_27596 = G__27611;
count__27591_27597 = G__27612;
i__27592_27598 = G__27613;
continue;
}
} else
{var vec__27594_27614 = cljs.core.first.call(null,seq__27589_27608__$1);var k_27615 = cljs.core.nth.call(null,vec__27594_27614,(0),null);var v_27616 = cljs.core.nth.call(null,vec__27594_27614,(1),null);var m27588_27617 = cljs.core.deref.call(null,m_atom__16491__auto__);cljs.core.reset_BANG_.call(null,m_atom__16491__auto__,cljs.core.assoc_BANG_.call(null,m27588_27617,k_27615,f.call(null,v_27616)));
{
var G__27618 = cljs.core.next.call(null,seq__27589_27608__$1);
var G__27619 = null;
var G__27620 = (0);
var G__27621 = (0);
seq__27589_27595 = G__27618;
chunk__27590_27596 = G__27619;
count__27591_27597 = G__27620;
i__27592_27598 = G__27621;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16491__auto__));

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
{var m_atom__16491__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__27630_27636 = cljs.core.seq.call(null,m);var chunk__27631_27637 = null;var count__27632_27638 = (0);var i__27633_27639 = (0);while(true){
if((i__27633_27639 < count__27632_27638))
{var vec__27634_27640 = cljs.core._nth.call(null,chunk__27631_27637,i__27633_27639);var k_27641 = cljs.core.nth.call(null,vec__27634_27640,(0),null);var v_27642 = cljs.core.nth.call(null,vec__27634_27640,(1),null);var m27629_27643 = cljs.core.deref.call(null,m_atom__16491__auto__);cljs.core.reset_BANG_.call(null,m_atom__16491__auto__,cljs.core.assoc_BANG_.call(null,m27629_27643,f.call(null,k_27641),v_27642));
{
var G__27644 = seq__27630_27636;
var G__27645 = chunk__27631_27637;
var G__27646 = count__27632_27638;
var G__27647 = (i__27633_27639 + (1));
seq__27630_27636 = G__27644;
chunk__27631_27637 = G__27645;
count__27632_27638 = G__27646;
i__27633_27639 = G__27647;
continue;
}
} else
{var temp__4126__auto___27648 = cljs.core.seq.call(null,seq__27630_27636);if(temp__4126__auto___27648)
{var seq__27630_27649__$1 = temp__4126__auto___27648;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27630_27649__$1))
{var c__8656__auto___27650 = cljs.core.chunk_first.call(null,seq__27630_27649__$1);{
var G__27651 = cljs.core.chunk_rest.call(null,seq__27630_27649__$1);
var G__27652 = c__8656__auto___27650;
var G__27653 = cljs.core.count.call(null,c__8656__auto___27650);
var G__27654 = (0);
seq__27630_27636 = G__27651;
chunk__27631_27637 = G__27652;
count__27632_27638 = G__27653;
i__27633_27639 = G__27654;
continue;
}
} else
{var vec__27635_27655 = cljs.core.first.call(null,seq__27630_27649__$1);var k_27656 = cljs.core.nth.call(null,vec__27635_27655,(0),null);var v_27657 = cljs.core.nth.call(null,vec__27635_27655,(1),null);var m27629_27658 = cljs.core.deref.call(null,m_atom__16491__auto__);cljs.core.reset_BANG_.call(null,m_atom__16491__auto__,cljs.core.assoc_BANG_.call(null,m27629_27658,f.call(null,k_27656),v_27657));
{
var G__27659 = cljs.core.next.call(null,seq__27630_27649__$1);
var G__27660 = null;
var G__27661 = (0);
var G__27662 = (0);
seq__27630_27636 = G__27659;
chunk__27631_27637 = G__27660;
count__27632_27638 = G__27661;
i__27633_27639 = G__27662;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16491__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__16491__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__27669_27673 = cljs.core.seq.call(null,ks);var chunk__27670_27674 = null;var count__27671_27675 = (0);var i__27672_27676 = (0);while(true){
if((i__27672_27676 < count__27671_27675))
{var k_27677 = cljs.core._nth.call(null,chunk__27670_27674,i__27672_27676);var m27668_27678 = cljs.core.deref.call(null,m_atom__16491__auto__);cljs.core.reset_BANG_.call(null,m_atom__16491__auto__,cljs.core.assoc_BANG_.call(null,m27668_27678,k_27677,f.call(null,k_27677)));
{
var G__27679 = seq__27669_27673;
var G__27680 = chunk__27670_27674;
var G__27681 = count__27671_27675;
var G__27682 = (i__27672_27676 + (1));
seq__27669_27673 = G__27679;
chunk__27670_27674 = G__27680;
count__27671_27675 = G__27681;
i__27672_27676 = G__27682;
continue;
}
} else
{var temp__4126__auto___27683 = cljs.core.seq.call(null,seq__27669_27673);if(temp__4126__auto___27683)
{var seq__27669_27684__$1 = temp__4126__auto___27683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27669_27684__$1))
{var c__8656__auto___27685 = cljs.core.chunk_first.call(null,seq__27669_27684__$1);{
var G__27686 = cljs.core.chunk_rest.call(null,seq__27669_27684__$1);
var G__27687 = c__8656__auto___27685;
var G__27688 = cljs.core.count.call(null,c__8656__auto___27685);
var G__27689 = (0);
seq__27669_27673 = G__27686;
chunk__27670_27674 = G__27687;
count__27671_27675 = G__27688;
i__27672_27676 = G__27689;
continue;
}
} else
{var k_27690 = cljs.core.first.call(null,seq__27669_27684__$1);var m27668_27691 = cljs.core.deref.call(null,m_atom__16491__auto__);cljs.core.reset_BANG_.call(null,m_atom__16491__auto__,cljs.core.assoc_BANG_.call(null,m27668_27691,k_27690,f.call(null,k_27690)));
{
var G__27692 = cljs.core.next.call(null,seq__27669_27684__$1);
var G__27693 = null;
var G__27694 = (0);
var G__27695 = (0);
seq__27669_27673 = G__27692;
chunk__27670_27674 = G__27693;
count__27671_27675 = G__27694;
i__27672_27676 = G__27695;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16491__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__16491__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__27702_27706 = cljs.core.seq.call(null,vs);var chunk__27703_27707 = null;var count__27704_27708 = (0);var i__27705_27709 = (0);while(true){
if((i__27705_27709 < count__27704_27708))
{var v_27710 = cljs.core._nth.call(null,chunk__27703_27707,i__27705_27709);var m27701_27711 = cljs.core.deref.call(null,m_atom__16491__auto__);cljs.core.reset_BANG_.call(null,m_atom__16491__auto__,cljs.core.assoc_BANG_.call(null,m27701_27711,f.call(null,v_27710),v_27710));
{
var G__27712 = seq__27702_27706;
var G__27713 = chunk__27703_27707;
var G__27714 = count__27704_27708;
var G__27715 = (i__27705_27709 + (1));
seq__27702_27706 = G__27712;
chunk__27703_27707 = G__27713;
count__27704_27708 = G__27714;
i__27705_27709 = G__27715;
continue;
}
} else
{var temp__4126__auto___27716 = cljs.core.seq.call(null,seq__27702_27706);if(temp__4126__auto___27716)
{var seq__27702_27717__$1 = temp__4126__auto___27716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27702_27717__$1))
{var c__8656__auto___27718 = cljs.core.chunk_first.call(null,seq__27702_27717__$1);{
var G__27719 = cljs.core.chunk_rest.call(null,seq__27702_27717__$1);
var G__27720 = c__8656__auto___27718;
var G__27721 = cljs.core.count.call(null,c__8656__auto___27718);
var G__27722 = (0);
seq__27702_27706 = G__27719;
chunk__27703_27707 = G__27720;
count__27704_27708 = G__27721;
i__27705_27709 = G__27722;
continue;
}
} else
{var v_27723 = cljs.core.first.call(null,seq__27702_27717__$1);var m27701_27724 = cljs.core.deref.call(null,m_atom__16491__auto__);cljs.core.reset_BANG_.call(null,m_atom__16491__auto__,cljs.core.assoc_BANG_.call(null,m27701_27724,f.call(null,v_27723),v_27723));
{
var G__27725 = cljs.core.next.call(null,seq__27702_27717__$1);
var G__27726 = null;
var G__27727 = (0);
var G__27728 = (0);
seq__27702_27706 = G__27725;
chunk__27703_27707 = G__27726;
count__27704_27708 = G__27727;
i__27705_27709 = G__27728;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16491__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__27729){var vec__27731 = p__27729;var k = cljs.core.nth.call(null,vec__27731,(0),null);var ks = cljs.core.nthnext.call(null,vec__27731,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__7888__auto__ = ks;if(and__7888__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__7888__auto__;
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
{var m_atom__16491__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__27740_27746 = cljs.core.seq.call(null,x);var chunk__27741_27747 = null;var count__27742_27748 = (0);var i__27743_27749 = (0);while(true){
if((i__27743_27749 < count__27742_27748))
{var vec__27744_27750 = cljs.core._nth.call(null,chunk__27741_27747,i__27743_27749);var k_27751 = cljs.core.nth.call(null,vec__27744_27750,(0),null);var v_27752 = cljs.core.nth.call(null,vec__27744_27750,(1),null);var m27739_27753 = cljs.core.deref.call(null,m_atom__16491__auto__);cljs.core.reset_BANG_.call(null,m_atom__16491__auto__,cljs.core.assoc_BANG_.call(null,m27739_27753,((typeof k_27751 === 'string')?cljs.core.keyword.call(null,k_27751):k_27751),keywordize_map.call(null,v_27752)));
{
var G__27754 = seq__27740_27746;
var G__27755 = chunk__27741_27747;
var G__27756 = count__27742_27748;
var G__27757 = (i__27743_27749 + (1));
seq__27740_27746 = G__27754;
chunk__27741_27747 = G__27755;
count__27742_27748 = G__27756;
i__27743_27749 = G__27757;
continue;
}
} else
{var temp__4126__auto___27758 = cljs.core.seq.call(null,seq__27740_27746);if(temp__4126__auto___27758)
{var seq__27740_27759__$1 = temp__4126__auto___27758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27740_27759__$1))
{var c__8656__auto___27760 = cljs.core.chunk_first.call(null,seq__27740_27759__$1);{
var G__27761 = cljs.core.chunk_rest.call(null,seq__27740_27759__$1);
var G__27762 = c__8656__auto___27760;
var G__27763 = cljs.core.count.call(null,c__8656__auto___27760);
var G__27764 = (0);
seq__27740_27746 = G__27761;
chunk__27741_27747 = G__27762;
count__27742_27748 = G__27763;
i__27743_27749 = G__27764;
continue;
}
} else
{var vec__27745_27765 = cljs.core.first.call(null,seq__27740_27759__$1);var k_27766 = cljs.core.nth.call(null,vec__27745_27765,(0),null);var v_27767 = cljs.core.nth.call(null,vec__27745_27765,(1),null);var m27739_27768 = cljs.core.deref.call(null,m_atom__16491__auto__);cljs.core.reset_BANG_.call(null,m_atom__16491__auto__,cljs.core.assoc_BANG_.call(null,m27739_27768,((typeof k_27766 === 'string')?cljs.core.keyword.call(null,k_27766):k_27766),keywordize_map.call(null,v_27767)));
{
var G__27769 = cljs.core.next.call(null,seq__27740_27759__$1);
var G__27770 = null;
var G__27771 = (0);
var G__27772 = (0);
seq__27740_27746 = G__27769;
chunk__27741_27747 = G__27770;
count__27742_27748 = G__27771;
i__27743_27749 = G__27772;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16491__auto__));
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
{var pair__16560__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__16560__auto__);
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
var G__27773 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__27774 = cljs.core.next.call(null,ks);
m = G__27773;
ks = G__27774;
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
return cljs.core.into.call(null,(function (){var or__7900__auto__ = m;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__8625__auto__ = (function iter__27783(s__27784){return (new cljs.core.LazySeq(null,(function (){var s__27784__$1 = s__27784;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27784__$1);if(temp__4126__auto__)
{var s__27784__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27784__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27784__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27786 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27785 = (0);while(true){
if((i__27785 < size__8624__auto__))
{var vec__27789 = cljs.core._nth.call(null,c__8623__auto__,i__27785);var k = cljs.core.nth.call(null,vec__27789,(0),null);var v = cljs.core.nth.call(null,vec__27789,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__27786,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__27791 = (i__27785 + (1));
i__27785 = G__27791;
continue;
}
} else
{{
var G__27792 = (i__27785 + (1));
i__27785 = G__27792;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27786),iter__27783.call(null,cljs.core.chunk_rest.call(null,s__27784__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27786),null);
}
} else
{var vec__27790 = cljs.core.first.call(null,s__27784__$2);var k = cljs.core.nth.call(null,vec__27790,(0),null);var v = cljs.core.nth.call(null,vec__27790,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__27783.call(null,cljs.core.rest.call(null,s__27784__$2)));
} else
{{
var G__27793 = cljs.core.rest.call(null,s__27784__$2);
s__27784__$1 = G__27793;
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
});return iter__8625__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__27794){
var m = cljs.core.first(arglist__27794);
var kvs = cljs.core.rest(arglist__27794);
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
update_in_when.cljs$lang$applyTo = (function (arglist__27795){
var m = cljs.core.first(arglist__27795);
arglist__27795 = cljs.core.next(arglist__27795);
var key_seq = cljs.core.first(arglist__27795);
arglist__27795 = cljs.core.next(arglist__27795);
var f = cljs.core.first(arglist__27795);
var args = cljs.core.rest(arglist__27795);
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__8625__auto__ = ((function (s){
return (function iter__27800(s__27801){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__27801__$1 = s__27801;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27801__$1);if(temp__4126__auto__)
{var s__27801__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27801__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__27801__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__27803 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__27802 = (0);while(true){
if((i__27802 < size__8624__auto__))
{var x = cljs.core._nth.call(null,c__8623__auto__,i__27802);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__27803,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__27804 = (i__27802 + (1));
i__27802 = G__27804;
continue;
}
} else
{{
var G__27805 = (i__27802 + (1));
i__27802 = G__27805;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27803),iter__27800.call(null,cljs.core.chunk_rest.call(null,s__27801__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27803),null);
}
} else
{var x = cljs.core.first.call(null,s__27801__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__27800.call(null,cljs.core.rest.call(null,s__27801__$2)));
} else
{{
var G__27806 = cljs.core.rest.call(null,s__27801__$2);
s__27801__$1 = G__27806;
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
;return iter__8625__auto__.call(null,xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__27807){
var colls = cljs.core.seq(arglist__27807);
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
var G__27808__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__27809 = conj_when.call(null,coll,x);
var G__27810 = cljs.core.first.call(null,xs);
var G__27811 = cljs.core.next.call(null,xs);
coll = G__27809;
x = G__27810;
xs = G__27811;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__27808 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27808__delegate.call(this,coll,x,xs);};
G__27808.cljs$lang$maxFixedArity = 2;
G__27808.cljs$lang$applyTo = (function (arglist__27812){
var coll = cljs.core.first(arglist__27812);
arglist__27812 = cljs.core.next(arglist__27812);
var x = cljs.core.first(arglist__27812);
var xs = cljs.core.rest(arglist__27812);
return G__27808__delegate(coll,x,xs);
});
G__27808.cljs$core$IFn$_invoke$arity$variadic = G__27808__delegate;
return G__27808;
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
var G__27814__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__27813_SHARP_){return cljs.core.apply.call(null,f,p1__27813_SHARP_,args);
}));
};
var G__27814 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27814__delegate.call(this,a,f,args);};
G__27814.cljs$lang$maxFixedArity = 2;
G__27814.cljs$lang$applyTo = (function (arglist__27815){
var a = cljs.core.first(arglist__27815);
arglist__27815 = cljs.core.next(arglist__27815);
var f = cljs.core.first(arglist__27815);
var args = cljs.core.rest(arglist__27815);
return G__27814__delegate(a,f,args);
});
G__27814.cljs$core$IFn$_invoke$arity$variadic = G__27814__delegate;
return G__27814;
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
var G__27816__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__27816 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27816__delegate.call(this,f,arg,args);};
G__27816.cljs$lang$maxFixedArity = 2;
G__27816.cljs$lang$applyTo = (function (arglist__27817){
var f = cljs.core.first(arglist__27817);
arglist__27817 = cljs.core.next(arglist__27817);
var arg = cljs.core.first(arglist__27817);
var args = cljs.core.rest(arglist__27817);
return G__27816__delegate(f,arg,args);
});
G__27816.cljs$core$IFn$_invoke$arity$variadic = G__27816__delegate;
return G__27816;
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