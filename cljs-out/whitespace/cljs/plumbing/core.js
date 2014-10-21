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
var G__22667__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__22667 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__22667__delegate.call(this,m,k,f,x1,x2,xs);};
G__22667.cljs$lang$maxFixedArity = 5;
G__22667.cljs$lang$applyTo = (function (arglist__22668){
var m = cljs.core.first(arglist__22668);
arglist__22668 = cljs.core.next(arglist__22668);
var k = cljs.core.first(arglist__22668);
arglist__22668 = cljs.core.next(arglist__22668);
var f = cljs.core.first(arglist__22668);
arglist__22668 = cljs.core.next(arglist__22668);
var x1 = cljs.core.first(arglist__22668);
arglist__22668 = cljs.core.next(arglist__22668);
var x2 = cljs.core.first(arglist__22668);
var xs = cljs.core.rest(arglist__22668);
return G__22667__delegate(m,k,f,x1,x2,xs);
});
G__22667.cljs$core$IFn$_invoke$arity$variadic = G__22667__delegate;
return G__22667;
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
{var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22677_22683 = cljs.core.seq.call(null,m);var chunk__22678_22684 = null;var count__22679_22685 = (0);var i__22680_22686 = (0);while(true){
if((i__22680_22686 < count__22679_22685))
{var vec__22681_22687 = cljs.core._nth.call(null,chunk__22678_22684,i__22680_22686);var k_22688 = cljs.core.nth.call(null,vec__22681_22687,(0),null);var v_22689 = cljs.core.nth.call(null,vec__22681_22687,(1),null);var m22676_22690 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m22676_22690,k_22688,f.call(null,v_22689)));
{
var G__22691 = seq__22677_22683;
var G__22692 = chunk__22678_22684;
var G__22693 = count__22679_22685;
var G__22694 = (i__22680_22686 + (1));
seq__22677_22683 = G__22691;
chunk__22678_22684 = G__22692;
count__22679_22685 = G__22693;
i__22680_22686 = G__22694;
continue;
}
} else
{var temp__4126__auto___22695 = cljs.core.seq.call(null,seq__22677_22683);if(temp__4126__auto___22695)
{var seq__22677_22696__$1 = temp__4126__auto___22695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22677_22696__$1))
{var c__4314__auto___22697 = cljs.core.chunk_first.call(null,seq__22677_22696__$1);{
var G__22698 = cljs.core.chunk_rest.call(null,seq__22677_22696__$1);
var G__22699 = c__4314__auto___22697;
var G__22700 = cljs.core.count.call(null,c__4314__auto___22697);
var G__22701 = (0);
seq__22677_22683 = G__22698;
chunk__22678_22684 = G__22699;
count__22679_22685 = G__22700;
i__22680_22686 = G__22701;
continue;
}
} else
{var vec__22682_22702 = cljs.core.first.call(null,seq__22677_22696__$1);var k_22703 = cljs.core.nth.call(null,vec__22682_22702,(0),null);var v_22704 = cljs.core.nth.call(null,vec__22682_22702,(1),null);var m22676_22705 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m22676_22705,k_22703,f.call(null,v_22704)));
{
var G__22706 = cljs.core.next.call(null,seq__22677_22696__$1);
var G__22707 = null;
var G__22708 = (0);
var G__22709 = (0);
seq__22677_22683 = G__22706;
chunk__22678_22684 = G__22707;
count__22679_22685 = G__22708;
i__22680_22686 = G__22709;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14644__auto__));

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
{var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22718_22724 = cljs.core.seq.call(null,m);var chunk__22719_22725 = null;var count__22720_22726 = (0);var i__22721_22727 = (0);while(true){
if((i__22721_22727 < count__22720_22726))
{var vec__22722_22728 = cljs.core._nth.call(null,chunk__22719_22725,i__22721_22727);var k_22729 = cljs.core.nth.call(null,vec__22722_22728,(0),null);var v_22730 = cljs.core.nth.call(null,vec__22722_22728,(1),null);var m22717_22731 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m22717_22731,f.call(null,k_22729),v_22730));
{
var G__22732 = seq__22718_22724;
var G__22733 = chunk__22719_22725;
var G__22734 = count__22720_22726;
var G__22735 = (i__22721_22727 + (1));
seq__22718_22724 = G__22732;
chunk__22719_22725 = G__22733;
count__22720_22726 = G__22734;
i__22721_22727 = G__22735;
continue;
}
} else
{var temp__4126__auto___22736 = cljs.core.seq.call(null,seq__22718_22724);if(temp__4126__auto___22736)
{var seq__22718_22737__$1 = temp__4126__auto___22736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22718_22737__$1))
{var c__4314__auto___22738 = cljs.core.chunk_first.call(null,seq__22718_22737__$1);{
var G__22739 = cljs.core.chunk_rest.call(null,seq__22718_22737__$1);
var G__22740 = c__4314__auto___22738;
var G__22741 = cljs.core.count.call(null,c__4314__auto___22738);
var G__22742 = (0);
seq__22718_22724 = G__22739;
chunk__22719_22725 = G__22740;
count__22720_22726 = G__22741;
i__22721_22727 = G__22742;
continue;
}
} else
{var vec__22723_22743 = cljs.core.first.call(null,seq__22718_22737__$1);var k_22744 = cljs.core.nth.call(null,vec__22723_22743,(0),null);var v_22745 = cljs.core.nth.call(null,vec__22723_22743,(1),null);var m22717_22746 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m22717_22746,f.call(null,k_22744),v_22745));
{
var G__22747 = cljs.core.next.call(null,seq__22718_22737__$1);
var G__22748 = null;
var G__22749 = (0);
var G__22750 = (0);
seq__22718_22724 = G__22747;
chunk__22719_22725 = G__22748;
count__22720_22726 = G__22749;
i__22721_22727 = G__22750;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14644__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22757_22761 = cljs.core.seq.call(null,ks);var chunk__22758_22762 = null;var count__22759_22763 = (0);var i__22760_22764 = (0);while(true){
if((i__22760_22764 < count__22759_22763))
{var k_22765 = cljs.core._nth.call(null,chunk__22758_22762,i__22760_22764);var m22756_22766 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m22756_22766,k_22765,f.call(null,k_22765)));
{
var G__22767 = seq__22757_22761;
var G__22768 = chunk__22758_22762;
var G__22769 = count__22759_22763;
var G__22770 = (i__22760_22764 + (1));
seq__22757_22761 = G__22767;
chunk__22758_22762 = G__22768;
count__22759_22763 = G__22769;
i__22760_22764 = G__22770;
continue;
}
} else
{var temp__4126__auto___22771 = cljs.core.seq.call(null,seq__22757_22761);if(temp__4126__auto___22771)
{var seq__22757_22772__$1 = temp__4126__auto___22771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22757_22772__$1))
{var c__4314__auto___22773 = cljs.core.chunk_first.call(null,seq__22757_22772__$1);{
var G__22774 = cljs.core.chunk_rest.call(null,seq__22757_22772__$1);
var G__22775 = c__4314__auto___22773;
var G__22776 = cljs.core.count.call(null,c__4314__auto___22773);
var G__22777 = (0);
seq__22757_22761 = G__22774;
chunk__22758_22762 = G__22775;
count__22759_22763 = G__22776;
i__22760_22764 = G__22777;
continue;
}
} else
{var k_22778 = cljs.core.first.call(null,seq__22757_22772__$1);var m22756_22779 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m22756_22779,k_22778,f.call(null,k_22778)));
{
var G__22780 = cljs.core.next.call(null,seq__22757_22772__$1);
var G__22781 = null;
var G__22782 = (0);
var G__22783 = (0);
seq__22757_22761 = G__22780;
chunk__22758_22762 = G__22781;
count__22759_22763 = G__22782;
i__22760_22764 = G__22783;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14644__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22790_22794 = cljs.core.seq.call(null,vs);var chunk__22791_22795 = null;var count__22792_22796 = (0);var i__22793_22797 = (0);while(true){
if((i__22793_22797 < count__22792_22796))
{var v_22798 = cljs.core._nth.call(null,chunk__22791_22795,i__22793_22797);var m22789_22799 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m22789_22799,f.call(null,v_22798),v_22798));
{
var G__22800 = seq__22790_22794;
var G__22801 = chunk__22791_22795;
var G__22802 = count__22792_22796;
var G__22803 = (i__22793_22797 + (1));
seq__22790_22794 = G__22800;
chunk__22791_22795 = G__22801;
count__22792_22796 = G__22802;
i__22793_22797 = G__22803;
continue;
}
} else
{var temp__4126__auto___22804 = cljs.core.seq.call(null,seq__22790_22794);if(temp__4126__auto___22804)
{var seq__22790_22805__$1 = temp__4126__auto___22804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22790_22805__$1))
{var c__4314__auto___22806 = cljs.core.chunk_first.call(null,seq__22790_22805__$1);{
var G__22807 = cljs.core.chunk_rest.call(null,seq__22790_22805__$1);
var G__22808 = c__4314__auto___22806;
var G__22809 = cljs.core.count.call(null,c__4314__auto___22806);
var G__22810 = (0);
seq__22790_22794 = G__22807;
chunk__22791_22795 = G__22808;
count__22792_22796 = G__22809;
i__22793_22797 = G__22810;
continue;
}
} else
{var v_22811 = cljs.core.first.call(null,seq__22790_22805__$1);var m22789_22812 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m22789_22812,f.call(null,v_22811),v_22811));
{
var G__22813 = cljs.core.next.call(null,seq__22790_22805__$1);
var G__22814 = null;
var G__22815 = (0);
var G__22816 = (0);
seq__22790_22794 = G__22813;
chunk__22791_22795 = G__22814;
count__22792_22796 = G__22815;
i__22793_22797 = G__22816;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14644__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__22817){var vec__22819 = p__22817;var k = cljs.core.nth.call(null,vec__22819,(0),null);var ks = cljs.core.nthnext.call(null,vec__22819,(1));if(cljs.core.truth_(m))
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
{var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__22828_22834 = cljs.core.seq.call(null,x);var chunk__22829_22835 = null;var count__22830_22836 = (0);var i__22831_22837 = (0);while(true){
if((i__22831_22837 < count__22830_22836))
{var vec__22832_22838 = cljs.core._nth.call(null,chunk__22829_22835,i__22831_22837);var k_22839 = cljs.core.nth.call(null,vec__22832_22838,(0),null);var v_22840 = cljs.core.nth.call(null,vec__22832_22838,(1),null);var m22827_22841 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m22827_22841,((typeof k_22839 === 'string')?cljs.core.keyword.call(null,k_22839):k_22839),keywordize_map.call(null,v_22840)));
{
var G__22842 = seq__22828_22834;
var G__22843 = chunk__22829_22835;
var G__22844 = count__22830_22836;
var G__22845 = (i__22831_22837 + (1));
seq__22828_22834 = G__22842;
chunk__22829_22835 = G__22843;
count__22830_22836 = G__22844;
i__22831_22837 = G__22845;
continue;
}
} else
{var temp__4126__auto___22846 = cljs.core.seq.call(null,seq__22828_22834);if(temp__4126__auto___22846)
{var seq__22828_22847__$1 = temp__4126__auto___22846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22828_22847__$1))
{var c__4314__auto___22848 = cljs.core.chunk_first.call(null,seq__22828_22847__$1);{
var G__22849 = cljs.core.chunk_rest.call(null,seq__22828_22847__$1);
var G__22850 = c__4314__auto___22848;
var G__22851 = cljs.core.count.call(null,c__4314__auto___22848);
var G__22852 = (0);
seq__22828_22834 = G__22849;
chunk__22829_22835 = G__22850;
count__22830_22836 = G__22851;
i__22831_22837 = G__22852;
continue;
}
} else
{var vec__22833_22853 = cljs.core.first.call(null,seq__22828_22847__$1);var k_22854 = cljs.core.nth.call(null,vec__22833_22853,(0),null);var v_22855 = cljs.core.nth.call(null,vec__22833_22853,(1),null);var m22827_22856 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m22827_22856,((typeof k_22854 === 'string')?cljs.core.keyword.call(null,k_22854):k_22854),keywordize_map.call(null,v_22855)));
{
var G__22857 = cljs.core.next.call(null,seq__22828_22847__$1);
var G__22858 = null;
var G__22859 = (0);
var G__22860 = (0);
seq__22828_22834 = G__22857;
chunk__22829_22835 = G__22858;
count__22830_22836 = G__22859;
i__22831_22837 = G__22860;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__14644__auto__));
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
{var pair__14713__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__14713__auto__);
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
var G__22861 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__22862 = cljs.core.next.call(null,ks);
m = G__22861;
ks = G__22862;
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
})(),(function (){var iter__4283__auto__ = (function iter__22871(s__22872){return (new cljs.core.LazySeq(null,(function (){var s__22872__$1 = s__22872;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22872__$1);if(temp__4126__auto__)
{var s__22872__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22872__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22872__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22874 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22873 = (0);while(true){
if((i__22873 < size__4282__auto__))
{var vec__22877 = cljs.core._nth.call(null,c__4281__auto__,i__22873);var k = cljs.core.nth.call(null,vec__22877,(0),null);var v = cljs.core.nth.call(null,vec__22877,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__22874,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22879 = (i__22873 + (1));
i__22873 = G__22879;
continue;
}
} else
{{
var G__22880 = (i__22873 + (1));
i__22873 = G__22880;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22874),iter__22871.call(null,cljs.core.chunk_rest.call(null,s__22872__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22874),null);
}
} else
{var vec__22878 = cljs.core.first.call(null,s__22872__$2);var k = cljs.core.nth.call(null,vec__22878,(0),null);var v = cljs.core.nth.call(null,vec__22878,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__22871.call(null,cljs.core.rest.call(null,s__22872__$2)));
} else
{{
var G__22881 = cljs.core.rest.call(null,s__22872__$2);
s__22872__$1 = G__22881;
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
assoc_when.cljs$lang$applyTo = (function (arglist__22882){
var m = cljs.core.first(arglist__22882);
var kvs = cljs.core.rest(arglist__22882);
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
update_in_when.cljs$lang$applyTo = (function (arglist__22883){
var m = cljs.core.first(arglist__22883);
arglist__22883 = cljs.core.next(arglist__22883);
var key_seq = cljs.core.first(arglist__22883);
arglist__22883 = cljs.core.next(arglist__22883);
var f = cljs.core.first(arglist__22883);
var args = cljs.core.rest(arglist__22883);
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
return (function iter__22888(s__22889){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__22889__$1 = s__22889;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22889__$1);if(temp__4126__auto__)
{var s__22889__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22889__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22889__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22891 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22890 = (0);while(true){
if((i__22890 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__22890);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__22891,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__22892 = (i__22890 + (1));
i__22890 = G__22892;
continue;
}
} else
{{
var G__22893 = (i__22890 + (1));
i__22890 = G__22893;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22891),iter__22888.call(null,cljs.core.chunk_rest.call(null,s__22889__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22891),null);
}
} else
{var x = cljs.core.first.call(null,s__22889__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__22888.call(null,cljs.core.rest.call(null,s__22889__$2)));
} else
{{
var G__22894 = cljs.core.rest.call(null,s__22889__$2);
s__22889__$1 = G__22894;
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
interleave_all.cljs$lang$applyTo = (function (arglist__22895){
var colls = cljs.core.seq(arglist__22895);
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
var G__22896__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22897 = conj_when.call(null,coll,x);
var G__22898 = cljs.core.first.call(null,xs);
var G__22899 = cljs.core.next.call(null,xs);
coll = G__22897;
x = G__22898;
xs = G__22899;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__22896 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22896__delegate.call(this,coll,x,xs);};
G__22896.cljs$lang$maxFixedArity = 2;
G__22896.cljs$lang$applyTo = (function (arglist__22900){
var coll = cljs.core.first(arglist__22900);
arglist__22900 = cljs.core.next(arglist__22900);
var x = cljs.core.first(arglist__22900);
var xs = cljs.core.rest(arglist__22900);
return G__22896__delegate(coll,x,xs);
});
G__22896.cljs$core$IFn$_invoke$arity$variadic = G__22896__delegate;
return G__22896;
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
var G__22902__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__22901_SHARP_){return cljs.core.apply.call(null,f,p1__22901_SHARP_,args);
}));
};
var G__22902 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22902__delegate.call(this,a,f,args);};
G__22902.cljs$lang$maxFixedArity = 2;
G__22902.cljs$lang$applyTo = (function (arglist__22903){
var a = cljs.core.first(arglist__22903);
arglist__22903 = cljs.core.next(arglist__22903);
var f = cljs.core.first(arglist__22903);
var args = cljs.core.rest(arglist__22903);
return G__22902__delegate(a,f,args);
});
G__22902.cljs$core$IFn$_invoke$arity$variadic = G__22902__delegate;
return G__22902;
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
var G__22904__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__22904 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22904__delegate.call(this,f,arg,args);};
G__22904.cljs$lang$maxFixedArity = 2;
G__22904.cljs$lang$applyTo = (function (arglist__22905){
var f = cljs.core.first(arglist__22905);
arglist__22905 = cljs.core.next(arglist__22905);
var arg = cljs.core.first(arglist__22905);
var args = cljs.core.rest(arglist__22905);
return G__22904__delegate(f,arg,args);
});
G__22904.cljs$core$IFn$_invoke$arity$variadic = G__22904__delegate;
return G__22904;
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
