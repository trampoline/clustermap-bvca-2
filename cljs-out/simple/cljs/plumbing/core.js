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
var G__39630__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__39630 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__39630__delegate.call(this,m,k,f,x1,x2,xs);};
G__39630.cljs$lang$maxFixedArity = 5;
G__39630.cljs$lang$applyTo = (function (arglist__39631){
var m = cljs.core.first(arglist__39631);
arglist__39631 = cljs.core.next(arglist__39631);
var k = cljs.core.first(arglist__39631);
arglist__39631 = cljs.core.next(arglist__39631);
var f = cljs.core.first(arglist__39631);
arglist__39631 = cljs.core.next(arglist__39631);
var x1 = cljs.core.first(arglist__39631);
arglist__39631 = cljs.core.next(arglist__39631);
var x2 = cljs.core.first(arglist__39631);
var xs = cljs.core.rest(arglist__39631);
return G__39630__delegate(m,k,f,x1,x2,xs);
});
G__39630.cljs$core$IFn$_invoke$arity$variadic = G__39630__delegate;
return G__39630;
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
{var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39640_39646 = cljs.core.seq.call(null,m);var chunk__39641_39647 = null;var count__39642_39648 = (0);var i__39643_39649 = (0);while(true){
if((i__39643_39649 < count__39642_39648))
{var vec__39644_39650 = cljs.core._nth.call(null,chunk__39641_39647,i__39643_39649);var k_39651 = cljs.core.nth.call(null,vec__39644_39650,(0),null);var v_39652 = cljs.core.nth.call(null,vec__39644_39650,(1),null);var m39639_39653 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m39639_39653,k_39651,f.call(null,v_39652)));
{
var G__39654 = seq__39640_39646;
var G__39655 = chunk__39641_39647;
var G__39656 = count__39642_39648;
var G__39657 = (i__39643_39649 + (1));
seq__39640_39646 = G__39654;
chunk__39641_39647 = G__39655;
count__39642_39648 = G__39656;
i__39643_39649 = G__39657;
continue;
}
} else
{var temp__4126__auto___39658 = cljs.core.seq.call(null,seq__39640_39646);if(temp__4126__auto___39658)
{var seq__39640_39659__$1 = temp__4126__auto___39658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39640_39659__$1))
{var c__4406__auto___39660 = cljs.core.chunk_first.call(null,seq__39640_39659__$1);{
var G__39661 = cljs.core.chunk_rest.call(null,seq__39640_39659__$1);
var G__39662 = c__4406__auto___39660;
var G__39663 = cljs.core.count.call(null,c__4406__auto___39660);
var G__39664 = (0);
seq__39640_39646 = G__39661;
chunk__39641_39647 = G__39662;
count__39642_39648 = G__39663;
i__39643_39649 = G__39664;
continue;
}
} else
{var vec__39645_39665 = cljs.core.first.call(null,seq__39640_39659__$1);var k_39666 = cljs.core.nth.call(null,vec__39645_39665,(0),null);var v_39667 = cljs.core.nth.call(null,vec__39645_39665,(1),null);var m39639_39668 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m39639_39668,k_39666,f.call(null,v_39667)));
{
var G__39669 = cljs.core.next.call(null,seq__39640_39659__$1);
var G__39670 = null;
var G__39671 = (0);
var G__39672 = (0);
seq__39640_39646 = G__39669;
chunk__39641_39647 = G__39670;
count__39642_39648 = G__39671;
i__39643_39649 = G__39672;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15342__auto__));

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
{var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39681_39687 = cljs.core.seq.call(null,m);var chunk__39682_39688 = null;var count__39683_39689 = (0);var i__39684_39690 = (0);while(true){
if((i__39684_39690 < count__39683_39689))
{var vec__39685_39691 = cljs.core._nth.call(null,chunk__39682_39688,i__39684_39690);var k_39692 = cljs.core.nth.call(null,vec__39685_39691,(0),null);var v_39693 = cljs.core.nth.call(null,vec__39685_39691,(1),null);var m39680_39694 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m39680_39694,f.call(null,k_39692),v_39693));
{
var G__39695 = seq__39681_39687;
var G__39696 = chunk__39682_39688;
var G__39697 = count__39683_39689;
var G__39698 = (i__39684_39690 + (1));
seq__39681_39687 = G__39695;
chunk__39682_39688 = G__39696;
count__39683_39689 = G__39697;
i__39684_39690 = G__39698;
continue;
}
} else
{var temp__4126__auto___39699 = cljs.core.seq.call(null,seq__39681_39687);if(temp__4126__auto___39699)
{var seq__39681_39700__$1 = temp__4126__auto___39699;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39681_39700__$1))
{var c__4406__auto___39701 = cljs.core.chunk_first.call(null,seq__39681_39700__$1);{
var G__39702 = cljs.core.chunk_rest.call(null,seq__39681_39700__$1);
var G__39703 = c__4406__auto___39701;
var G__39704 = cljs.core.count.call(null,c__4406__auto___39701);
var G__39705 = (0);
seq__39681_39687 = G__39702;
chunk__39682_39688 = G__39703;
count__39683_39689 = G__39704;
i__39684_39690 = G__39705;
continue;
}
} else
{var vec__39686_39706 = cljs.core.first.call(null,seq__39681_39700__$1);var k_39707 = cljs.core.nth.call(null,vec__39686_39706,(0),null);var v_39708 = cljs.core.nth.call(null,vec__39686_39706,(1),null);var m39680_39709 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m39680_39709,f.call(null,k_39707),v_39708));
{
var G__39710 = cljs.core.next.call(null,seq__39681_39700__$1);
var G__39711 = null;
var G__39712 = (0);
var G__39713 = (0);
seq__39681_39687 = G__39710;
chunk__39682_39688 = G__39711;
count__39683_39689 = G__39712;
i__39684_39690 = G__39713;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15342__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39720_39724 = cljs.core.seq.call(null,ks);var chunk__39721_39725 = null;var count__39722_39726 = (0);var i__39723_39727 = (0);while(true){
if((i__39723_39727 < count__39722_39726))
{var k_39728 = cljs.core._nth.call(null,chunk__39721_39725,i__39723_39727);var m39719_39729 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m39719_39729,k_39728,f.call(null,k_39728)));
{
var G__39730 = seq__39720_39724;
var G__39731 = chunk__39721_39725;
var G__39732 = count__39722_39726;
var G__39733 = (i__39723_39727 + (1));
seq__39720_39724 = G__39730;
chunk__39721_39725 = G__39731;
count__39722_39726 = G__39732;
i__39723_39727 = G__39733;
continue;
}
} else
{var temp__4126__auto___39734 = cljs.core.seq.call(null,seq__39720_39724);if(temp__4126__auto___39734)
{var seq__39720_39735__$1 = temp__4126__auto___39734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39720_39735__$1))
{var c__4406__auto___39736 = cljs.core.chunk_first.call(null,seq__39720_39735__$1);{
var G__39737 = cljs.core.chunk_rest.call(null,seq__39720_39735__$1);
var G__39738 = c__4406__auto___39736;
var G__39739 = cljs.core.count.call(null,c__4406__auto___39736);
var G__39740 = (0);
seq__39720_39724 = G__39737;
chunk__39721_39725 = G__39738;
count__39722_39726 = G__39739;
i__39723_39727 = G__39740;
continue;
}
} else
{var k_39741 = cljs.core.first.call(null,seq__39720_39735__$1);var m39719_39742 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m39719_39742,k_39741,f.call(null,k_39741)));
{
var G__39743 = cljs.core.next.call(null,seq__39720_39735__$1);
var G__39744 = null;
var G__39745 = (0);
var G__39746 = (0);
seq__39720_39724 = G__39743;
chunk__39721_39725 = G__39744;
count__39722_39726 = G__39745;
i__39723_39727 = G__39746;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15342__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39753_39757 = cljs.core.seq.call(null,vs);var chunk__39754_39758 = null;var count__39755_39759 = (0);var i__39756_39760 = (0);while(true){
if((i__39756_39760 < count__39755_39759))
{var v_39761 = cljs.core._nth.call(null,chunk__39754_39758,i__39756_39760);var m39752_39762 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m39752_39762,f.call(null,v_39761),v_39761));
{
var G__39763 = seq__39753_39757;
var G__39764 = chunk__39754_39758;
var G__39765 = count__39755_39759;
var G__39766 = (i__39756_39760 + (1));
seq__39753_39757 = G__39763;
chunk__39754_39758 = G__39764;
count__39755_39759 = G__39765;
i__39756_39760 = G__39766;
continue;
}
} else
{var temp__4126__auto___39767 = cljs.core.seq.call(null,seq__39753_39757);if(temp__4126__auto___39767)
{var seq__39753_39768__$1 = temp__4126__auto___39767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39753_39768__$1))
{var c__4406__auto___39769 = cljs.core.chunk_first.call(null,seq__39753_39768__$1);{
var G__39770 = cljs.core.chunk_rest.call(null,seq__39753_39768__$1);
var G__39771 = c__4406__auto___39769;
var G__39772 = cljs.core.count.call(null,c__4406__auto___39769);
var G__39773 = (0);
seq__39753_39757 = G__39770;
chunk__39754_39758 = G__39771;
count__39755_39759 = G__39772;
i__39756_39760 = G__39773;
continue;
}
} else
{var v_39774 = cljs.core.first.call(null,seq__39753_39768__$1);var m39752_39775 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m39752_39775,f.call(null,v_39774),v_39774));
{
var G__39776 = cljs.core.next.call(null,seq__39753_39768__$1);
var G__39777 = null;
var G__39778 = (0);
var G__39779 = (0);
seq__39753_39757 = G__39776;
chunk__39754_39758 = G__39777;
count__39755_39759 = G__39778;
i__39756_39760 = G__39779;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15342__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__39780){var vec__39782 = p__39780;var k = cljs.core.nth.call(null,vec__39782,(0),null);var ks = cljs.core.nthnext.call(null,vec__39782,(1));if(cljs.core.truth_(m))
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
{var m_atom__15342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39791_39797 = cljs.core.seq.call(null,x);var chunk__39792_39798 = null;var count__39793_39799 = (0);var i__39794_39800 = (0);while(true){
if((i__39794_39800 < count__39793_39799))
{var vec__39795_39801 = cljs.core._nth.call(null,chunk__39792_39798,i__39794_39800);var k_39802 = cljs.core.nth.call(null,vec__39795_39801,(0),null);var v_39803 = cljs.core.nth.call(null,vec__39795_39801,(1),null);var m39790_39804 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m39790_39804,((typeof k_39802 === 'string')?cljs.core.keyword.call(null,k_39802):k_39802),keywordize_map.call(null,v_39803)));
{
var G__39805 = seq__39791_39797;
var G__39806 = chunk__39792_39798;
var G__39807 = count__39793_39799;
var G__39808 = (i__39794_39800 + (1));
seq__39791_39797 = G__39805;
chunk__39792_39798 = G__39806;
count__39793_39799 = G__39807;
i__39794_39800 = G__39808;
continue;
}
} else
{var temp__4126__auto___39809 = cljs.core.seq.call(null,seq__39791_39797);if(temp__4126__auto___39809)
{var seq__39791_39810__$1 = temp__4126__auto___39809;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39791_39810__$1))
{var c__4406__auto___39811 = cljs.core.chunk_first.call(null,seq__39791_39810__$1);{
var G__39812 = cljs.core.chunk_rest.call(null,seq__39791_39810__$1);
var G__39813 = c__4406__auto___39811;
var G__39814 = cljs.core.count.call(null,c__4406__auto___39811);
var G__39815 = (0);
seq__39791_39797 = G__39812;
chunk__39792_39798 = G__39813;
count__39793_39799 = G__39814;
i__39794_39800 = G__39815;
continue;
}
} else
{var vec__39796_39816 = cljs.core.first.call(null,seq__39791_39810__$1);var k_39817 = cljs.core.nth.call(null,vec__39796_39816,(0),null);var v_39818 = cljs.core.nth.call(null,vec__39796_39816,(1),null);var m39790_39819 = cljs.core.deref.call(null,m_atom__15342__auto__);cljs.core.reset_BANG_.call(null,m_atom__15342__auto__,cljs.core.assoc_BANG_.call(null,m39790_39819,((typeof k_39817 === 'string')?cljs.core.keyword.call(null,k_39817):k_39817),keywordize_map.call(null,v_39818)));
{
var G__39820 = cljs.core.next.call(null,seq__39791_39810__$1);
var G__39821 = null;
var G__39822 = (0);
var G__39823 = (0);
seq__39791_39797 = G__39820;
chunk__39792_39798 = G__39821;
count__39793_39799 = G__39822;
i__39794_39800 = G__39823;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15342__auto__));
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
{var pair__15411__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__15411__auto__);
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
var G__39824 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__39825 = cljs.core.next.call(null,ks);
m = G__39824;
ks = G__39825;
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
})(),(function (){var iter__4375__auto__ = (function iter__39834(s__39835){return (new cljs.core.LazySeq(null,(function (){var s__39835__$1 = s__39835;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39835__$1);if(temp__4126__auto__)
{var s__39835__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39835__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__39835__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__39837 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__39836 = (0);while(true){
if((i__39836 < size__4374__auto__))
{var vec__39840 = cljs.core._nth.call(null,c__4373__auto__,i__39836);var k = cljs.core.nth.call(null,vec__39840,(0),null);var v = cljs.core.nth.call(null,vec__39840,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__39837,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__39842 = (i__39836 + (1));
i__39836 = G__39842;
continue;
}
} else
{{
var G__39843 = (i__39836 + (1));
i__39836 = G__39843;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39837),iter__39834.call(null,cljs.core.chunk_rest.call(null,s__39835__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39837),null);
}
} else
{var vec__39841 = cljs.core.first.call(null,s__39835__$2);var k = cljs.core.nth.call(null,vec__39841,(0),null);var v = cljs.core.nth.call(null,vec__39841,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__39834.call(null,cljs.core.rest.call(null,s__39835__$2)));
} else
{{
var G__39844 = cljs.core.rest.call(null,s__39835__$2);
s__39835__$1 = G__39844;
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
assoc_when.cljs$lang$applyTo = (function (arglist__39845){
var m = cljs.core.first(arglist__39845);
var kvs = cljs.core.rest(arglist__39845);
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
update_in_when.cljs$lang$applyTo = (function (arglist__39846){
var m = cljs.core.first(arglist__39846);
arglist__39846 = cljs.core.next(arglist__39846);
var key_seq = cljs.core.first(arglist__39846);
arglist__39846 = cljs.core.next(arglist__39846);
var f = cljs.core.first(arglist__39846);
var args = cljs.core.rest(arglist__39846);
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
return (function iter__39851(s__39852){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__39852__$1 = s__39852;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39852__$1);if(temp__4126__auto__)
{var s__39852__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39852__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__39852__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__39854 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__39853 = (0);while(true){
if((i__39853 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__39853);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__39854,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__39855 = (i__39853 + (1));
i__39853 = G__39855;
continue;
}
} else
{{
var G__39856 = (i__39853 + (1));
i__39853 = G__39856;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39854),iter__39851.call(null,cljs.core.chunk_rest.call(null,s__39852__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39854),null);
}
} else
{var x = cljs.core.first.call(null,s__39852__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__39851.call(null,cljs.core.rest.call(null,s__39852__$2)));
} else
{{
var G__39857 = cljs.core.rest.call(null,s__39852__$2);
s__39852__$1 = G__39857;
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
interleave_all.cljs$lang$applyTo = (function (arglist__39858){
var colls = cljs.core.seq(arglist__39858);
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
var G__39859__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__39860 = conj_when.call(null,coll,x);
var G__39861 = cljs.core.first.call(null,xs);
var G__39862 = cljs.core.next.call(null,xs);
coll = G__39860;
x = G__39861;
xs = G__39862;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__39859 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__39859__delegate.call(this,coll,x,xs);};
G__39859.cljs$lang$maxFixedArity = 2;
G__39859.cljs$lang$applyTo = (function (arglist__39863){
var coll = cljs.core.first(arglist__39863);
arglist__39863 = cljs.core.next(arglist__39863);
var x = cljs.core.first(arglist__39863);
var xs = cljs.core.rest(arglist__39863);
return G__39859__delegate(coll,x,xs);
});
G__39859.cljs$core$IFn$_invoke$arity$variadic = G__39859__delegate;
return G__39859;
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
var G__39865__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__39864_SHARP_){return cljs.core.apply.call(null,f,p1__39864_SHARP_,args);
}));
};
var G__39865 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__39865__delegate.call(this,a,f,args);};
G__39865.cljs$lang$maxFixedArity = 2;
G__39865.cljs$lang$applyTo = (function (arglist__39866){
var a = cljs.core.first(arglist__39866);
arglist__39866 = cljs.core.next(arglist__39866);
var f = cljs.core.first(arglist__39866);
var args = cljs.core.rest(arglist__39866);
return G__39865__delegate(a,f,args);
});
G__39865.cljs$core$IFn$_invoke$arity$variadic = G__39865__delegate;
return G__39865;
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
var G__39867__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__39867 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__39867__delegate.call(this,f,arg,args);};
G__39867.cljs$lang$maxFixedArity = 2;
G__39867.cljs$lang$applyTo = (function (arglist__39868){
var f = cljs.core.first(arglist__39868);
arglist__39868 = cljs.core.next(arglist__39868);
var arg = cljs.core.first(arglist__39868);
var args = cljs.core.rest(arglist__39868);
return G__39867__delegate(f,arg,args);
});
G__39867.cljs$core$IFn$_invoke$arity$variadic = G__39867__delegate;
return G__39867;
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
