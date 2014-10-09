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
var G__23581__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__23581 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__23581__delegate.call(this,m,k,f,x1,x2,xs);};
G__23581.cljs$lang$maxFixedArity = 5;
G__23581.cljs$lang$applyTo = (function (arglist__23582){
var m = cljs.core.first(arglist__23582);
arglist__23582 = cljs.core.next(arglist__23582);
var k = cljs.core.first(arglist__23582);
arglist__23582 = cljs.core.next(arglist__23582);
var f = cljs.core.first(arglist__23582);
arglist__23582 = cljs.core.next(arglist__23582);
var x1 = cljs.core.first(arglist__23582);
arglist__23582 = cljs.core.next(arglist__23582);
var x2 = cljs.core.first(arglist__23582);
var xs = cljs.core.rest(arglist__23582);
return G__23581__delegate(m,k,f,x1,x2,xs);
});
G__23581.cljs$core$IFn$_invoke$arity$variadic = G__23581__delegate;
return G__23581;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23591_23597 = cljs.core.seq.call(null,m);var chunk__23592_23598 = null;var count__23593_23599 = (0);var i__23594_23600 = (0);while(true){
if((i__23594_23600 < count__23593_23599))
{var vec__23595_23601 = cljs.core._nth.call(null,chunk__23592_23598,i__23594_23600);var k_23602 = cljs.core.nth.call(null,vec__23595_23601,(0),null);var v_23603 = cljs.core.nth.call(null,vec__23595_23601,(1),null);var m23590_23604 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23590_23604,k_23602,f.call(null,v_23603)));
{
var G__23605 = seq__23591_23597;
var G__23606 = chunk__23592_23598;
var G__23607 = count__23593_23599;
var G__23608 = (i__23594_23600 + (1));
seq__23591_23597 = G__23605;
chunk__23592_23598 = G__23606;
count__23593_23599 = G__23607;
i__23594_23600 = G__23608;
continue;
}
} else
{var temp__4126__auto___23609 = cljs.core.seq.call(null,seq__23591_23597);if(temp__4126__auto___23609)
{var seq__23591_23610__$1 = temp__4126__auto___23609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23591_23610__$1))
{var c__4314__auto___23611 = cljs.core.chunk_first.call(null,seq__23591_23610__$1);{
var G__23612 = cljs.core.chunk_rest.call(null,seq__23591_23610__$1);
var G__23613 = c__4314__auto___23611;
var G__23614 = cljs.core.count.call(null,c__4314__auto___23611);
var G__23615 = (0);
seq__23591_23597 = G__23612;
chunk__23592_23598 = G__23613;
count__23593_23599 = G__23614;
i__23594_23600 = G__23615;
continue;
}
} else
{var vec__23596_23616 = cljs.core.first.call(null,seq__23591_23610__$1);var k_23617 = cljs.core.nth.call(null,vec__23596_23616,(0),null);var v_23618 = cljs.core.nth.call(null,vec__23596_23616,(1),null);var m23590_23619 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23590_23619,k_23617,f.call(null,v_23618)));
{
var G__23620 = cljs.core.next.call(null,seq__23591_23610__$1);
var G__23621 = null;
var G__23622 = (0);
var G__23623 = (0);
seq__23591_23597 = G__23620;
chunk__23592_23598 = G__23621;
count__23593_23599 = G__23622;
i__23594_23600 = G__23623;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23632_23638 = cljs.core.seq.call(null,m);var chunk__23633_23639 = null;var count__23634_23640 = (0);var i__23635_23641 = (0);while(true){
if((i__23635_23641 < count__23634_23640))
{var vec__23636_23642 = cljs.core._nth.call(null,chunk__23633_23639,i__23635_23641);var k_23643 = cljs.core.nth.call(null,vec__23636_23642,(0),null);var v_23644 = cljs.core.nth.call(null,vec__23636_23642,(1),null);var m23631_23645 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23631_23645,f.call(null,k_23643),v_23644));
{
var G__23646 = seq__23632_23638;
var G__23647 = chunk__23633_23639;
var G__23648 = count__23634_23640;
var G__23649 = (i__23635_23641 + (1));
seq__23632_23638 = G__23646;
chunk__23633_23639 = G__23647;
count__23634_23640 = G__23648;
i__23635_23641 = G__23649;
continue;
}
} else
{var temp__4126__auto___23650 = cljs.core.seq.call(null,seq__23632_23638);if(temp__4126__auto___23650)
{var seq__23632_23651__$1 = temp__4126__auto___23650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23632_23651__$1))
{var c__4314__auto___23652 = cljs.core.chunk_first.call(null,seq__23632_23651__$1);{
var G__23653 = cljs.core.chunk_rest.call(null,seq__23632_23651__$1);
var G__23654 = c__4314__auto___23652;
var G__23655 = cljs.core.count.call(null,c__4314__auto___23652);
var G__23656 = (0);
seq__23632_23638 = G__23653;
chunk__23633_23639 = G__23654;
count__23634_23640 = G__23655;
i__23635_23641 = G__23656;
continue;
}
} else
{var vec__23637_23657 = cljs.core.first.call(null,seq__23632_23651__$1);var k_23658 = cljs.core.nth.call(null,vec__23637_23657,(0),null);var v_23659 = cljs.core.nth.call(null,vec__23637_23657,(1),null);var m23631_23660 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23631_23660,f.call(null,k_23658),v_23659));
{
var G__23661 = cljs.core.next.call(null,seq__23632_23651__$1);
var G__23662 = null;
var G__23663 = (0);
var G__23664 = (0);
seq__23632_23638 = G__23661;
chunk__23633_23639 = G__23662;
count__23634_23640 = G__23663;
i__23635_23641 = G__23664;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23671_23675 = cljs.core.seq.call(null,ks);var chunk__23672_23676 = null;var count__23673_23677 = (0);var i__23674_23678 = (0);while(true){
if((i__23674_23678 < count__23673_23677))
{var k_23679 = cljs.core._nth.call(null,chunk__23672_23676,i__23674_23678);var m23670_23680 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23670_23680,k_23679,f.call(null,k_23679)));
{
var G__23681 = seq__23671_23675;
var G__23682 = chunk__23672_23676;
var G__23683 = count__23673_23677;
var G__23684 = (i__23674_23678 + (1));
seq__23671_23675 = G__23681;
chunk__23672_23676 = G__23682;
count__23673_23677 = G__23683;
i__23674_23678 = G__23684;
continue;
}
} else
{var temp__4126__auto___23685 = cljs.core.seq.call(null,seq__23671_23675);if(temp__4126__auto___23685)
{var seq__23671_23686__$1 = temp__4126__auto___23685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23671_23686__$1))
{var c__4314__auto___23687 = cljs.core.chunk_first.call(null,seq__23671_23686__$1);{
var G__23688 = cljs.core.chunk_rest.call(null,seq__23671_23686__$1);
var G__23689 = c__4314__auto___23687;
var G__23690 = cljs.core.count.call(null,c__4314__auto___23687);
var G__23691 = (0);
seq__23671_23675 = G__23688;
chunk__23672_23676 = G__23689;
count__23673_23677 = G__23690;
i__23674_23678 = G__23691;
continue;
}
} else
{var k_23692 = cljs.core.first.call(null,seq__23671_23686__$1);var m23670_23693 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23670_23693,k_23692,f.call(null,k_23692)));
{
var G__23694 = cljs.core.next.call(null,seq__23671_23686__$1);
var G__23695 = null;
var G__23696 = (0);
var G__23697 = (0);
seq__23671_23675 = G__23694;
chunk__23672_23676 = G__23695;
count__23673_23677 = G__23696;
i__23674_23678 = G__23697;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23704_23708 = cljs.core.seq.call(null,vs);var chunk__23705_23709 = null;var count__23706_23710 = (0);var i__23707_23711 = (0);while(true){
if((i__23707_23711 < count__23706_23710))
{var v_23712 = cljs.core._nth.call(null,chunk__23705_23709,i__23707_23711);var m23703_23713 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23703_23713,f.call(null,v_23712),v_23712));
{
var G__23714 = seq__23704_23708;
var G__23715 = chunk__23705_23709;
var G__23716 = count__23706_23710;
var G__23717 = (i__23707_23711 + (1));
seq__23704_23708 = G__23714;
chunk__23705_23709 = G__23715;
count__23706_23710 = G__23716;
i__23707_23711 = G__23717;
continue;
}
} else
{var temp__4126__auto___23718 = cljs.core.seq.call(null,seq__23704_23708);if(temp__4126__auto___23718)
{var seq__23704_23719__$1 = temp__4126__auto___23718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23704_23719__$1))
{var c__4314__auto___23720 = cljs.core.chunk_first.call(null,seq__23704_23719__$1);{
var G__23721 = cljs.core.chunk_rest.call(null,seq__23704_23719__$1);
var G__23722 = c__4314__auto___23720;
var G__23723 = cljs.core.count.call(null,c__4314__auto___23720);
var G__23724 = (0);
seq__23704_23708 = G__23721;
chunk__23705_23709 = G__23722;
count__23706_23710 = G__23723;
i__23707_23711 = G__23724;
continue;
}
} else
{var v_23725 = cljs.core.first.call(null,seq__23704_23719__$1);var m23703_23726 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23703_23726,f.call(null,v_23725),v_23725));
{
var G__23727 = cljs.core.next.call(null,seq__23704_23719__$1);
var G__23728 = null;
var G__23729 = (0);
var G__23730 = (0);
seq__23704_23708 = G__23727;
chunk__23705_23709 = G__23728;
count__23706_23710 = G__23729;
i__23707_23711 = G__23730;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__23731){var vec__23733 = p__23731;var k = cljs.core.nth.call(null,vec__23733,(0),null);var ks = cljs.core.nthnext.call(null,vec__23733,(1));if(cljs.core.truth_(m))
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23742_23748 = cljs.core.seq.call(null,x);var chunk__23743_23749 = null;var count__23744_23750 = (0);var i__23745_23751 = (0);while(true){
if((i__23745_23751 < count__23744_23750))
{var vec__23746_23752 = cljs.core._nth.call(null,chunk__23743_23749,i__23745_23751);var k_23753 = cljs.core.nth.call(null,vec__23746_23752,(0),null);var v_23754 = cljs.core.nth.call(null,vec__23746_23752,(1),null);var m23741_23755 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23741_23755,((typeof k_23753 === 'string')?cljs.core.keyword.call(null,k_23753):k_23753),keywordize_map.call(null,v_23754)));
{
var G__23756 = seq__23742_23748;
var G__23757 = chunk__23743_23749;
var G__23758 = count__23744_23750;
var G__23759 = (i__23745_23751 + (1));
seq__23742_23748 = G__23756;
chunk__23743_23749 = G__23757;
count__23744_23750 = G__23758;
i__23745_23751 = G__23759;
continue;
}
} else
{var temp__4126__auto___23760 = cljs.core.seq.call(null,seq__23742_23748);if(temp__4126__auto___23760)
{var seq__23742_23761__$1 = temp__4126__auto___23760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23742_23761__$1))
{var c__4314__auto___23762 = cljs.core.chunk_first.call(null,seq__23742_23761__$1);{
var G__23763 = cljs.core.chunk_rest.call(null,seq__23742_23761__$1);
var G__23764 = c__4314__auto___23762;
var G__23765 = cljs.core.count.call(null,c__4314__auto___23762);
var G__23766 = (0);
seq__23742_23748 = G__23763;
chunk__23743_23749 = G__23764;
count__23744_23750 = G__23765;
i__23745_23751 = G__23766;
continue;
}
} else
{var vec__23747_23767 = cljs.core.first.call(null,seq__23742_23761__$1);var k_23768 = cljs.core.nth.call(null,vec__23747_23767,(0),null);var v_23769 = cljs.core.nth.call(null,vec__23747_23767,(1),null);var m23741_23770 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23741_23770,((typeof k_23768 === 'string')?cljs.core.keyword.call(null,k_23768):k_23768),keywordize_map.call(null,v_23769)));
{
var G__23771 = cljs.core.next.call(null,seq__23742_23761__$1);
var G__23772 = null;
var G__23773 = (0);
var G__23774 = (0);
seq__23742_23748 = G__23771;
chunk__23743_23749 = G__23772;
count__23744_23750 = G__23773;
i__23745_23751 = G__23774;
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
var G__23775 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__23776 = cljs.core.next.call(null,ks);
m = G__23775;
ks = G__23776;
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
})(),(function (){var iter__4283__auto__ = (function iter__23785(s__23786){return (new cljs.core.LazySeq(null,(function (){var s__23786__$1 = s__23786;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23786__$1);if(temp__4126__auto__)
{var s__23786__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23786__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23786__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23788 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23787 = (0);while(true){
if((i__23787 < size__4282__auto__))
{var vec__23791 = cljs.core._nth.call(null,c__4281__auto__,i__23787);var k = cljs.core.nth.call(null,vec__23791,(0),null);var v = cljs.core.nth.call(null,vec__23791,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__23788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23793 = (i__23787 + (1));
i__23787 = G__23793;
continue;
}
} else
{{
var G__23794 = (i__23787 + (1));
i__23787 = G__23794;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23788),iter__23785.call(null,cljs.core.chunk_rest.call(null,s__23786__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23788),null);
}
} else
{var vec__23792 = cljs.core.first.call(null,s__23786__$2);var k = cljs.core.nth.call(null,vec__23792,(0),null);var v = cljs.core.nth.call(null,vec__23792,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23785.call(null,cljs.core.rest.call(null,s__23786__$2)));
} else
{{
var G__23795 = cljs.core.rest.call(null,s__23786__$2);
s__23786__$1 = G__23795;
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
assoc_when.cljs$lang$applyTo = (function (arglist__23796){
var m = cljs.core.first(arglist__23796);
var kvs = cljs.core.rest(arglist__23796);
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
update_in_when.cljs$lang$applyTo = (function (arglist__23797){
var m = cljs.core.first(arglist__23797);
arglist__23797 = cljs.core.next(arglist__23797);
var key_seq = cljs.core.first(arglist__23797);
arglist__23797 = cljs.core.next(arglist__23797);
var f = cljs.core.first(arglist__23797);
var args = cljs.core.rest(arglist__23797);
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
return (function iter__23802(s__23803){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__23803__$1 = s__23803;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23803__$1);if(temp__4126__auto__)
{var s__23803__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23803__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23803__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23805 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23804 = (0);while(true){
if((i__23804 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__23804);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__23805,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__23806 = (i__23804 + (1));
i__23804 = G__23806;
continue;
}
} else
{{
var G__23807 = (i__23804 + (1));
i__23804 = G__23807;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23805),iter__23802.call(null,cljs.core.chunk_rest.call(null,s__23803__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23805),null);
}
} else
{var x = cljs.core.first.call(null,s__23803__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__23802.call(null,cljs.core.rest.call(null,s__23803__$2)));
} else
{{
var G__23808 = cljs.core.rest.call(null,s__23803__$2);
s__23803__$1 = G__23808;
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
interleave_all.cljs$lang$applyTo = (function (arglist__23809){
var colls = cljs.core.seq(arglist__23809);
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
var G__23810__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__23811 = conj_when.call(null,coll,x);
var G__23812 = cljs.core.first.call(null,xs);
var G__23813 = cljs.core.next.call(null,xs);
coll = G__23811;
x = G__23812;
xs = G__23813;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__23810 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23810__delegate.call(this,coll,x,xs);};
G__23810.cljs$lang$maxFixedArity = 2;
G__23810.cljs$lang$applyTo = (function (arglist__23814){
var coll = cljs.core.first(arglist__23814);
arglist__23814 = cljs.core.next(arglist__23814);
var x = cljs.core.first(arglist__23814);
var xs = cljs.core.rest(arglist__23814);
return G__23810__delegate(coll,x,xs);
});
G__23810.cljs$core$IFn$_invoke$arity$variadic = G__23810__delegate;
return G__23810;
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
var G__23816__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__23815_SHARP_){return cljs.core.apply.call(null,f,p1__23815_SHARP_,args);
}));
};
var G__23816 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23816__delegate.call(this,a,f,args);};
G__23816.cljs$lang$maxFixedArity = 2;
G__23816.cljs$lang$applyTo = (function (arglist__23817){
var a = cljs.core.first(arglist__23817);
arglist__23817 = cljs.core.next(arglist__23817);
var f = cljs.core.first(arglist__23817);
var args = cljs.core.rest(arglist__23817);
return G__23816__delegate(a,f,args);
});
G__23816.cljs$core$IFn$_invoke$arity$variadic = G__23816__delegate;
return G__23816;
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
var G__23818__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__23818 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23818__delegate.call(this,f,arg,args);};
G__23818.cljs$lang$maxFixedArity = 2;
G__23818.cljs$lang$applyTo = (function (arglist__23819){
var f = cljs.core.first(arglist__23819);
arglist__23819 = cljs.core.next(arglist__23819);
var arg = cljs.core.first(arglist__23819);
var args = cljs.core.rest(arglist__23819);
return G__23818__delegate(f,arg,args);
});
G__23818.cljs$core$IFn$_invoke$arity$variadic = G__23818__delegate;
return G__23818;
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
