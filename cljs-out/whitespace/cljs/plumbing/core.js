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
var G__23525__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__23525 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__23525__delegate.call(this,m,k,f,x1,x2,xs);};
G__23525.cljs$lang$maxFixedArity = 5;
G__23525.cljs$lang$applyTo = (function (arglist__23526){
var m = cljs.core.first(arglist__23526);
arglist__23526 = cljs.core.next(arglist__23526);
var k = cljs.core.first(arglist__23526);
arglist__23526 = cljs.core.next(arglist__23526);
var f = cljs.core.first(arglist__23526);
arglist__23526 = cljs.core.next(arglist__23526);
var x1 = cljs.core.first(arglist__23526);
arglist__23526 = cljs.core.next(arglist__23526);
var x2 = cljs.core.first(arglist__23526);
var xs = cljs.core.rest(arglist__23526);
return G__23525__delegate(m,k,f,x1,x2,xs);
});
G__23525.cljs$core$IFn$_invoke$arity$variadic = G__23525__delegate;
return G__23525;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23535_23541 = cljs.core.seq.call(null,m);var chunk__23536_23542 = null;var count__23537_23543 = (0);var i__23538_23544 = (0);while(true){
if((i__23538_23544 < count__23537_23543))
{var vec__23539_23545 = cljs.core._nth.call(null,chunk__23536_23542,i__23538_23544);var k_23546 = cljs.core.nth.call(null,vec__23539_23545,(0),null);var v_23547 = cljs.core.nth.call(null,vec__23539_23545,(1),null);var m23534_23548 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23534_23548,k_23546,f.call(null,v_23547)));
{
var G__23549 = seq__23535_23541;
var G__23550 = chunk__23536_23542;
var G__23551 = count__23537_23543;
var G__23552 = (i__23538_23544 + (1));
seq__23535_23541 = G__23549;
chunk__23536_23542 = G__23550;
count__23537_23543 = G__23551;
i__23538_23544 = G__23552;
continue;
}
} else
{var temp__4126__auto___23553 = cljs.core.seq.call(null,seq__23535_23541);if(temp__4126__auto___23553)
{var seq__23535_23554__$1 = temp__4126__auto___23553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23535_23554__$1))
{var c__4314__auto___23555 = cljs.core.chunk_first.call(null,seq__23535_23554__$1);{
var G__23556 = cljs.core.chunk_rest.call(null,seq__23535_23554__$1);
var G__23557 = c__4314__auto___23555;
var G__23558 = cljs.core.count.call(null,c__4314__auto___23555);
var G__23559 = (0);
seq__23535_23541 = G__23556;
chunk__23536_23542 = G__23557;
count__23537_23543 = G__23558;
i__23538_23544 = G__23559;
continue;
}
} else
{var vec__23540_23560 = cljs.core.first.call(null,seq__23535_23554__$1);var k_23561 = cljs.core.nth.call(null,vec__23540_23560,(0),null);var v_23562 = cljs.core.nth.call(null,vec__23540_23560,(1),null);var m23534_23563 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23534_23563,k_23561,f.call(null,v_23562)));
{
var G__23564 = cljs.core.next.call(null,seq__23535_23554__$1);
var G__23565 = null;
var G__23566 = (0);
var G__23567 = (0);
seq__23535_23541 = G__23564;
chunk__23536_23542 = G__23565;
count__23537_23543 = G__23566;
i__23538_23544 = G__23567;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23576_23582 = cljs.core.seq.call(null,m);var chunk__23577_23583 = null;var count__23578_23584 = (0);var i__23579_23585 = (0);while(true){
if((i__23579_23585 < count__23578_23584))
{var vec__23580_23586 = cljs.core._nth.call(null,chunk__23577_23583,i__23579_23585);var k_23587 = cljs.core.nth.call(null,vec__23580_23586,(0),null);var v_23588 = cljs.core.nth.call(null,vec__23580_23586,(1),null);var m23575_23589 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23575_23589,f.call(null,k_23587),v_23588));
{
var G__23590 = seq__23576_23582;
var G__23591 = chunk__23577_23583;
var G__23592 = count__23578_23584;
var G__23593 = (i__23579_23585 + (1));
seq__23576_23582 = G__23590;
chunk__23577_23583 = G__23591;
count__23578_23584 = G__23592;
i__23579_23585 = G__23593;
continue;
}
} else
{var temp__4126__auto___23594 = cljs.core.seq.call(null,seq__23576_23582);if(temp__4126__auto___23594)
{var seq__23576_23595__$1 = temp__4126__auto___23594;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23576_23595__$1))
{var c__4314__auto___23596 = cljs.core.chunk_first.call(null,seq__23576_23595__$1);{
var G__23597 = cljs.core.chunk_rest.call(null,seq__23576_23595__$1);
var G__23598 = c__4314__auto___23596;
var G__23599 = cljs.core.count.call(null,c__4314__auto___23596);
var G__23600 = (0);
seq__23576_23582 = G__23597;
chunk__23577_23583 = G__23598;
count__23578_23584 = G__23599;
i__23579_23585 = G__23600;
continue;
}
} else
{var vec__23581_23601 = cljs.core.first.call(null,seq__23576_23595__$1);var k_23602 = cljs.core.nth.call(null,vec__23581_23601,(0),null);var v_23603 = cljs.core.nth.call(null,vec__23581_23601,(1),null);var m23575_23604 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23575_23604,f.call(null,k_23602),v_23603));
{
var G__23605 = cljs.core.next.call(null,seq__23576_23595__$1);
var G__23606 = null;
var G__23607 = (0);
var G__23608 = (0);
seq__23576_23582 = G__23605;
chunk__23577_23583 = G__23606;
count__23578_23584 = G__23607;
i__23579_23585 = G__23608;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23615_23619 = cljs.core.seq.call(null,ks);var chunk__23616_23620 = null;var count__23617_23621 = (0);var i__23618_23622 = (0);while(true){
if((i__23618_23622 < count__23617_23621))
{var k_23623 = cljs.core._nth.call(null,chunk__23616_23620,i__23618_23622);var m23614_23624 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23614_23624,k_23623,f.call(null,k_23623)));
{
var G__23625 = seq__23615_23619;
var G__23626 = chunk__23616_23620;
var G__23627 = count__23617_23621;
var G__23628 = (i__23618_23622 + (1));
seq__23615_23619 = G__23625;
chunk__23616_23620 = G__23626;
count__23617_23621 = G__23627;
i__23618_23622 = G__23628;
continue;
}
} else
{var temp__4126__auto___23629 = cljs.core.seq.call(null,seq__23615_23619);if(temp__4126__auto___23629)
{var seq__23615_23630__$1 = temp__4126__auto___23629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23615_23630__$1))
{var c__4314__auto___23631 = cljs.core.chunk_first.call(null,seq__23615_23630__$1);{
var G__23632 = cljs.core.chunk_rest.call(null,seq__23615_23630__$1);
var G__23633 = c__4314__auto___23631;
var G__23634 = cljs.core.count.call(null,c__4314__auto___23631);
var G__23635 = (0);
seq__23615_23619 = G__23632;
chunk__23616_23620 = G__23633;
count__23617_23621 = G__23634;
i__23618_23622 = G__23635;
continue;
}
} else
{var k_23636 = cljs.core.first.call(null,seq__23615_23630__$1);var m23614_23637 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23614_23637,k_23636,f.call(null,k_23636)));
{
var G__23638 = cljs.core.next.call(null,seq__23615_23630__$1);
var G__23639 = null;
var G__23640 = (0);
var G__23641 = (0);
seq__23615_23619 = G__23638;
chunk__23616_23620 = G__23639;
count__23617_23621 = G__23640;
i__23618_23622 = G__23641;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23648_23652 = cljs.core.seq.call(null,vs);var chunk__23649_23653 = null;var count__23650_23654 = (0);var i__23651_23655 = (0);while(true){
if((i__23651_23655 < count__23650_23654))
{var v_23656 = cljs.core._nth.call(null,chunk__23649_23653,i__23651_23655);var m23647_23657 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23647_23657,f.call(null,v_23656),v_23656));
{
var G__23658 = seq__23648_23652;
var G__23659 = chunk__23649_23653;
var G__23660 = count__23650_23654;
var G__23661 = (i__23651_23655 + (1));
seq__23648_23652 = G__23658;
chunk__23649_23653 = G__23659;
count__23650_23654 = G__23660;
i__23651_23655 = G__23661;
continue;
}
} else
{var temp__4126__auto___23662 = cljs.core.seq.call(null,seq__23648_23652);if(temp__4126__auto___23662)
{var seq__23648_23663__$1 = temp__4126__auto___23662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23648_23663__$1))
{var c__4314__auto___23664 = cljs.core.chunk_first.call(null,seq__23648_23663__$1);{
var G__23665 = cljs.core.chunk_rest.call(null,seq__23648_23663__$1);
var G__23666 = c__4314__auto___23664;
var G__23667 = cljs.core.count.call(null,c__4314__auto___23664);
var G__23668 = (0);
seq__23648_23652 = G__23665;
chunk__23649_23653 = G__23666;
count__23650_23654 = G__23667;
i__23651_23655 = G__23668;
continue;
}
} else
{var v_23669 = cljs.core.first.call(null,seq__23648_23663__$1);var m23647_23670 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23647_23670,f.call(null,v_23669),v_23669));
{
var G__23671 = cljs.core.next.call(null,seq__23648_23663__$1);
var G__23672 = null;
var G__23673 = (0);
var G__23674 = (0);
seq__23648_23652 = G__23671;
chunk__23649_23653 = G__23672;
count__23650_23654 = G__23673;
i__23651_23655 = G__23674;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__23675){var vec__23677 = p__23675;var k = cljs.core.nth.call(null,vec__23677,(0),null);var ks = cljs.core.nthnext.call(null,vec__23677,(1));if(cljs.core.truth_(m))
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23686_23692 = cljs.core.seq.call(null,x);var chunk__23687_23693 = null;var count__23688_23694 = (0);var i__23689_23695 = (0);while(true){
if((i__23689_23695 < count__23688_23694))
{var vec__23690_23696 = cljs.core._nth.call(null,chunk__23687_23693,i__23689_23695);var k_23697 = cljs.core.nth.call(null,vec__23690_23696,(0),null);var v_23698 = cljs.core.nth.call(null,vec__23690_23696,(1),null);var m23685_23699 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23685_23699,((typeof k_23697 === 'string')?cljs.core.keyword.call(null,k_23697):k_23697),keywordize_map.call(null,v_23698)));
{
var G__23700 = seq__23686_23692;
var G__23701 = chunk__23687_23693;
var G__23702 = count__23688_23694;
var G__23703 = (i__23689_23695 + (1));
seq__23686_23692 = G__23700;
chunk__23687_23693 = G__23701;
count__23688_23694 = G__23702;
i__23689_23695 = G__23703;
continue;
}
} else
{var temp__4126__auto___23704 = cljs.core.seq.call(null,seq__23686_23692);if(temp__4126__auto___23704)
{var seq__23686_23705__$1 = temp__4126__auto___23704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23686_23705__$1))
{var c__4314__auto___23706 = cljs.core.chunk_first.call(null,seq__23686_23705__$1);{
var G__23707 = cljs.core.chunk_rest.call(null,seq__23686_23705__$1);
var G__23708 = c__4314__auto___23706;
var G__23709 = cljs.core.count.call(null,c__4314__auto___23706);
var G__23710 = (0);
seq__23686_23692 = G__23707;
chunk__23687_23693 = G__23708;
count__23688_23694 = G__23709;
i__23689_23695 = G__23710;
continue;
}
} else
{var vec__23691_23711 = cljs.core.first.call(null,seq__23686_23705__$1);var k_23712 = cljs.core.nth.call(null,vec__23691_23711,(0),null);var v_23713 = cljs.core.nth.call(null,vec__23691_23711,(1),null);var m23685_23714 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m23685_23714,((typeof k_23712 === 'string')?cljs.core.keyword.call(null,k_23712):k_23712),keywordize_map.call(null,v_23713)));
{
var G__23715 = cljs.core.next.call(null,seq__23686_23705__$1);
var G__23716 = null;
var G__23717 = (0);
var G__23718 = (0);
seq__23686_23692 = G__23715;
chunk__23687_23693 = G__23716;
count__23688_23694 = G__23717;
i__23689_23695 = G__23718;
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
var G__23719 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__23720 = cljs.core.next.call(null,ks);
m = G__23719;
ks = G__23720;
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
})(),(function (){var iter__4283__auto__ = (function iter__23729(s__23730){return (new cljs.core.LazySeq(null,(function (){var s__23730__$1 = s__23730;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23730__$1);if(temp__4126__auto__)
{var s__23730__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23730__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23730__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23732 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23731 = (0);while(true){
if((i__23731 < size__4282__auto__))
{var vec__23735 = cljs.core._nth.call(null,c__4281__auto__,i__23731);var k = cljs.core.nth.call(null,vec__23735,(0),null);var v = cljs.core.nth.call(null,vec__23735,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__23732,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23737 = (i__23731 + (1));
i__23731 = G__23737;
continue;
}
} else
{{
var G__23738 = (i__23731 + (1));
i__23731 = G__23738;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23732),iter__23729.call(null,cljs.core.chunk_rest.call(null,s__23730__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23732),null);
}
} else
{var vec__23736 = cljs.core.first.call(null,s__23730__$2);var k = cljs.core.nth.call(null,vec__23736,(0),null);var v = cljs.core.nth.call(null,vec__23736,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23729.call(null,cljs.core.rest.call(null,s__23730__$2)));
} else
{{
var G__23739 = cljs.core.rest.call(null,s__23730__$2);
s__23730__$1 = G__23739;
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
assoc_when.cljs$lang$applyTo = (function (arglist__23740){
var m = cljs.core.first(arglist__23740);
var kvs = cljs.core.rest(arglist__23740);
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
update_in_when.cljs$lang$applyTo = (function (arglist__23741){
var m = cljs.core.first(arglist__23741);
arglist__23741 = cljs.core.next(arglist__23741);
var key_seq = cljs.core.first(arglist__23741);
arglist__23741 = cljs.core.next(arglist__23741);
var f = cljs.core.first(arglist__23741);
var args = cljs.core.rest(arglist__23741);
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
return (function iter__23746(s__23747){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__23747__$1 = s__23747;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23747__$1);if(temp__4126__auto__)
{var s__23747__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23747__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__23747__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__23749 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__23748 = (0);while(true){
if((i__23748 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__23748);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__23749,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__23750 = (i__23748 + (1));
i__23748 = G__23750;
continue;
}
} else
{{
var G__23751 = (i__23748 + (1));
i__23748 = G__23751;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23749),iter__23746.call(null,cljs.core.chunk_rest.call(null,s__23747__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23749),null);
}
} else
{var x = cljs.core.first.call(null,s__23747__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__23746.call(null,cljs.core.rest.call(null,s__23747__$2)));
} else
{{
var G__23752 = cljs.core.rest.call(null,s__23747__$2);
s__23747__$1 = G__23752;
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
interleave_all.cljs$lang$applyTo = (function (arglist__23753){
var colls = cljs.core.seq(arglist__23753);
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
var G__23754__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__23755 = conj_when.call(null,coll,x);
var G__23756 = cljs.core.first.call(null,xs);
var G__23757 = cljs.core.next.call(null,xs);
coll = G__23755;
x = G__23756;
xs = G__23757;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__23754 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23754__delegate.call(this,coll,x,xs);};
G__23754.cljs$lang$maxFixedArity = 2;
G__23754.cljs$lang$applyTo = (function (arglist__23758){
var coll = cljs.core.first(arglist__23758);
arglist__23758 = cljs.core.next(arglist__23758);
var x = cljs.core.first(arglist__23758);
var xs = cljs.core.rest(arglist__23758);
return G__23754__delegate(coll,x,xs);
});
G__23754.cljs$core$IFn$_invoke$arity$variadic = G__23754__delegate;
return G__23754;
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
var G__23760__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__23759_SHARP_){return cljs.core.apply.call(null,f,p1__23759_SHARP_,args);
}));
};
var G__23760 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23760__delegate.call(this,a,f,args);};
G__23760.cljs$lang$maxFixedArity = 2;
G__23760.cljs$lang$applyTo = (function (arglist__23761){
var a = cljs.core.first(arglist__23761);
arglist__23761 = cljs.core.next(arglist__23761);
var f = cljs.core.first(arglist__23761);
var args = cljs.core.rest(arglist__23761);
return G__23760__delegate(a,f,args);
});
G__23760.cljs$core$IFn$_invoke$arity$variadic = G__23760__delegate;
return G__23760;
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
var G__23762__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__23762 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23762__delegate.call(this,f,arg,args);};
G__23762.cljs$lang$maxFixedArity = 2;
G__23762.cljs$lang$applyTo = (function (arglist__23763){
var f = cljs.core.first(arglist__23763);
arglist__23763 = cljs.core.next(arglist__23763);
var arg = cljs.core.first(arglist__23763);
var args = cljs.core.rest(arglist__23763);
return G__23762__delegate(f,arg,args);
});
G__23762.cljs$core$IFn$_invoke$arity$variadic = G__23762__delegate;
return G__23762;
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
