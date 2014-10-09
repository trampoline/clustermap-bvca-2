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
var G__67646__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__67646 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__67646__delegate.call(this,m,k,f,x1,x2,xs);};
G__67646.cljs$lang$maxFixedArity = 5;
G__67646.cljs$lang$applyTo = (function (arglist__67647){
var m = cljs.core.first(arglist__67647);
arglist__67647 = cljs.core.next(arglist__67647);
var k = cljs.core.first(arglist__67647);
arglist__67647 = cljs.core.next(arglist__67647);
var f = cljs.core.first(arglist__67647);
arglist__67647 = cljs.core.next(arglist__67647);
var x1 = cljs.core.first(arglist__67647);
arglist__67647 = cljs.core.next(arglist__67647);
var x2 = cljs.core.first(arglist__67647);
var xs = cljs.core.rest(arglist__67647);
return G__67646__delegate(m,k,f,x1,x2,xs);
});
G__67646.cljs$core$IFn$_invoke$arity$variadic = G__67646__delegate;
return G__67646;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__67656_67662 = cljs.core.seq.call(null,m);var chunk__67657_67663 = null;var count__67658_67664 = (0);var i__67659_67665 = (0);while(true){
if((i__67659_67665 < count__67658_67664))
{var vec__67660_67666 = cljs.core._nth.call(null,chunk__67657_67663,i__67659_67665);var k_67667 = cljs.core.nth.call(null,vec__67660_67666,(0),null);var v_67668 = cljs.core.nth.call(null,vec__67660_67666,(1),null);var m67655_67669 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m67655_67669,k_67667,f.call(null,v_67668)));
{
var G__67670 = seq__67656_67662;
var G__67671 = chunk__67657_67663;
var G__67672 = count__67658_67664;
var G__67673 = (i__67659_67665 + (1));
seq__67656_67662 = G__67670;
chunk__67657_67663 = G__67671;
count__67658_67664 = G__67672;
i__67659_67665 = G__67673;
continue;
}
} else
{var temp__4126__auto___67674 = cljs.core.seq.call(null,seq__67656_67662);if(temp__4126__auto___67674)
{var seq__67656_67675__$1 = temp__4126__auto___67674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67656_67675__$1))
{var c__4314__auto___67676 = cljs.core.chunk_first.call(null,seq__67656_67675__$1);{
var G__67677 = cljs.core.chunk_rest.call(null,seq__67656_67675__$1);
var G__67678 = c__4314__auto___67676;
var G__67679 = cljs.core.count.call(null,c__4314__auto___67676);
var G__67680 = (0);
seq__67656_67662 = G__67677;
chunk__67657_67663 = G__67678;
count__67658_67664 = G__67679;
i__67659_67665 = G__67680;
continue;
}
} else
{var vec__67661_67681 = cljs.core.first.call(null,seq__67656_67675__$1);var k_67682 = cljs.core.nth.call(null,vec__67661_67681,(0),null);var v_67683 = cljs.core.nth.call(null,vec__67661_67681,(1),null);var m67655_67684 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m67655_67684,k_67682,f.call(null,v_67683)));
{
var G__67685 = cljs.core.next.call(null,seq__67656_67675__$1);
var G__67686 = null;
var G__67687 = (0);
var G__67688 = (0);
seq__67656_67662 = G__67685;
chunk__67657_67663 = G__67686;
count__67658_67664 = G__67687;
i__67659_67665 = G__67688;
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__67697_67703 = cljs.core.seq.call(null,m);var chunk__67698_67704 = null;var count__67699_67705 = (0);var i__67700_67706 = (0);while(true){
if((i__67700_67706 < count__67699_67705))
{var vec__67701_67707 = cljs.core._nth.call(null,chunk__67698_67704,i__67700_67706);var k_67708 = cljs.core.nth.call(null,vec__67701_67707,(0),null);var v_67709 = cljs.core.nth.call(null,vec__67701_67707,(1),null);var m67696_67710 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m67696_67710,f.call(null,k_67708),v_67709));
{
var G__67711 = seq__67697_67703;
var G__67712 = chunk__67698_67704;
var G__67713 = count__67699_67705;
var G__67714 = (i__67700_67706 + (1));
seq__67697_67703 = G__67711;
chunk__67698_67704 = G__67712;
count__67699_67705 = G__67713;
i__67700_67706 = G__67714;
continue;
}
} else
{var temp__4126__auto___67715 = cljs.core.seq.call(null,seq__67697_67703);if(temp__4126__auto___67715)
{var seq__67697_67716__$1 = temp__4126__auto___67715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67697_67716__$1))
{var c__4314__auto___67717 = cljs.core.chunk_first.call(null,seq__67697_67716__$1);{
var G__67718 = cljs.core.chunk_rest.call(null,seq__67697_67716__$1);
var G__67719 = c__4314__auto___67717;
var G__67720 = cljs.core.count.call(null,c__4314__auto___67717);
var G__67721 = (0);
seq__67697_67703 = G__67718;
chunk__67698_67704 = G__67719;
count__67699_67705 = G__67720;
i__67700_67706 = G__67721;
continue;
}
} else
{var vec__67702_67722 = cljs.core.first.call(null,seq__67697_67716__$1);var k_67723 = cljs.core.nth.call(null,vec__67702_67722,(0),null);var v_67724 = cljs.core.nth.call(null,vec__67702_67722,(1),null);var m67696_67725 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m67696_67725,f.call(null,k_67723),v_67724));
{
var G__67726 = cljs.core.next.call(null,seq__67697_67716__$1);
var G__67727 = null;
var G__67728 = (0);
var G__67729 = (0);
seq__67697_67703 = G__67726;
chunk__67698_67704 = G__67727;
count__67699_67705 = G__67728;
i__67700_67706 = G__67729;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__67736_67740 = cljs.core.seq.call(null,ks);var chunk__67737_67741 = null;var count__67738_67742 = (0);var i__67739_67743 = (0);while(true){
if((i__67739_67743 < count__67738_67742))
{var k_67744 = cljs.core._nth.call(null,chunk__67737_67741,i__67739_67743);var m67735_67745 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m67735_67745,k_67744,f.call(null,k_67744)));
{
var G__67746 = seq__67736_67740;
var G__67747 = chunk__67737_67741;
var G__67748 = count__67738_67742;
var G__67749 = (i__67739_67743 + (1));
seq__67736_67740 = G__67746;
chunk__67737_67741 = G__67747;
count__67738_67742 = G__67748;
i__67739_67743 = G__67749;
continue;
}
} else
{var temp__4126__auto___67750 = cljs.core.seq.call(null,seq__67736_67740);if(temp__4126__auto___67750)
{var seq__67736_67751__$1 = temp__4126__auto___67750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67736_67751__$1))
{var c__4314__auto___67752 = cljs.core.chunk_first.call(null,seq__67736_67751__$1);{
var G__67753 = cljs.core.chunk_rest.call(null,seq__67736_67751__$1);
var G__67754 = c__4314__auto___67752;
var G__67755 = cljs.core.count.call(null,c__4314__auto___67752);
var G__67756 = (0);
seq__67736_67740 = G__67753;
chunk__67737_67741 = G__67754;
count__67738_67742 = G__67755;
i__67739_67743 = G__67756;
continue;
}
} else
{var k_67757 = cljs.core.first.call(null,seq__67736_67751__$1);var m67735_67758 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m67735_67758,k_67757,f.call(null,k_67757)));
{
var G__67759 = cljs.core.next.call(null,seq__67736_67751__$1);
var G__67760 = null;
var G__67761 = (0);
var G__67762 = (0);
seq__67736_67740 = G__67759;
chunk__67737_67741 = G__67760;
count__67738_67742 = G__67761;
i__67739_67743 = G__67762;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__67769_67773 = cljs.core.seq.call(null,vs);var chunk__67770_67774 = null;var count__67771_67775 = (0);var i__67772_67776 = (0);while(true){
if((i__67772_67776 < count__67771_67775))
{var v_67777 = cljs.core._nth.call(null,chunk__67770_67774,i__67772_67776);var m67768_67778 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m67768_67778,f.call(null,v_67777),v_67777));
{
var G__67779 = seq__67769_67773;
var G__67780 = chunk__67770_67774;
var G__67781 = count__67771_67775;
var G__67782 = (i__67772_67776 + (1));
seq__67769_67773 = G__67779;
chunk__67770_67774 = G__67780;
count__67771_67775 = G__67781;
i__67772_67776 = G__67782;
continue;
}
} else
{var temp__4126__auto___67783 = cljs.core.seq.call(null,seq__67769_67773);if(temp__4126__auto___67783)
{var seq__67769_67784__$1 = temp__4126__auto___67783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67769_67784__$1))
{var c__4314__auto___67785 = cljs.core.chunk_first.call(null,seq__67769_67784__$1);{
var G__67786 = cljs.core.chunk_rest.call(null,seq__67769_67784__$1);
var G__67787 = c__4314__auto___67785;
var G__67788 = cljs.core.count.call(null,c__4314__auto___67785);
var G__67789 = (0);
seq__67769_67773 = G__67786;
chunk__67770_67774 = G__67787;
count__67771_67775 = G__67788;
i__67772_67776 = G__67789;
continue;
}
} else
{var v_67790 = cljs.core.first.call(null,seq__67769_67784__$1);var m67768_67791 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m67768_67791,f.call(null,v_67790),v_67790));
{
var G__67792 = cljs.core.next.call(null,seq__67769_67784__$1);
var G__67793 = null;
var G__67794 = (0);
var G__67795 = (0);
seq__67769_67773 = G__67792;
chunk__67770_67774 = G__67793;
count__67771_67775 = G__67794;
i__67772_67776 = G__67795;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__67796){var vec__67798 = p__67796;var k = cljs.core.nth.call(null,vec__67798,(0),null);var ks = cljs.core.nthnext.call(null,vec__67798,(1));if(cljs.core.truth_(m))
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
{var m_atom__12440__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__67807_67813 = cljs.core.seq.call(null,x);var chunk__67808_67814 = null;var count__67809_67815 = (0);var i__67810_67816 = (0);while(true){
if((i__67810_67816 < count__67809_67815))
{var vec__67811_67817 = cljs.core._nth.call(null,chunk__67808_67814,i__67810_67816);var k_67818 = cljs.core.nth.call(null,vec__67811_67817,(0),null);var v_67819 = cljs.core.nth.call(null,vec__67811_67817,(1),null);var m67806_67820 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m67806_67820,((typeof k_67818 === 'string')?cljs.core.keyword.call(null,k_67818):k_67818),keywordize_map.call(null,v_67819)));
{
var G__67821 = seq__67807_67813;
var G__67822 = chunk__67808_67814;
var G__67823 = count__67809_67815;
var G__67824 = (i__67810_67816 + (1));
seq__67807_67813 = G__67821;
chunk__67808_67814 = G__67822;
count__67809_67815 = G__67823;
i__67810_67816 = G__67824;
continue;
}
} else
{var temp__4126__auto___67825 = cljs.core.seq.call(null,seq__67807_67813);if(temp__4126__auto___67825)
{var seq__67807_67826__$1 = temp__4126__auto___67825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67807_67826__$1))
{var c__4314__auto___67827 = cljs.core.chunk_first.call(null,seq__67807_67826__$1);{
var G__67828 = cljs.core.chunk_rest.call(null,seq__67807_67826__$1);
var G__67829 = c__4314__auto___67827;
var G__67830 = cljs.core.count.call(null,c__4314__auto___67827);
var G__67831 = (0);
seq__67807_67813 = G__67828;
chunk__67808_67814 = G__67829;
count__67809_67815 = G__67830;
i__67810_67816 = G__67831;
continue;
}
} else
{var vec__67812_67832 = cljs.core.first.call(null,seq__67807_67826__$1);var k_67833 = cljs.core.nth.call(null,vec__67812_67832,(0),null);var v_67834 = cljs.core.nth.call(null,vec__67812_67832,(1),null);var m67806_67835 = cljs.core.deref.call(null,m_atom__12440__auto__);cljs.core.reset_BANG_.call(null,m_atom__12440__auto__,cljs.core.assoc_BANG_.call(null,m67806_67835,((typeof k_67833 === 'string')?cljs.core.keyword.call(null,k_67833):k_67833),keywordize_map.call(null,v_67834)));
{
var G__67836 = cljs.core.next.call(null,seq__67807_67826__$1);
var G__67837 = null;
var G__67838 = (0);
var G__67839 = (0);
seq__67807_67813 = G__67836;
chunk__67808_67814 = G__67837;
count__67809_67815 = G__67838;
i__67810_67816 = G__67839;
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
var G__67840 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__67841 = cljs.core.next.call(null,ks);
m = G__67840;
ks = G__67841;
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
})(),(function (){var iter__4283__auto__ = (function iter__67850(s__67851){return (new cljs.core.LazySeq(null,(function (){var s__67851__$1 = s__67851;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67851__$1);if(temp__4126__auto__)
{var s__67851__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67851__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67851__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67853 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67852 = (0);while(true){
if((i__67852 < size__4282__auto__))
{var vec__67856 = cljs.core._nth.call(null,c__4281__auto__,i__67852);var k = cljs.core.nth.call(null,vec__67856,(0),null);var v = cljs.core.nth.call(null,vec__67856,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__67853,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__67858 = (i__67852 + (1));
i__67852 = G__67858;
continue;
}
} else
{{
var G__67859 = (i__67852 + (1));
i__67852 = G__67859;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67853),iter__67850.call(null,cljs.core.chunk_rest.call(null,s__67851__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67853),null);
}
} else
{var vec__67857 = cljs.core.first.call(null,s__67851__$2);var k = cljs.core.nth.call(null,vec__67857,(0),null);var v = cljs.core.nth.call(null,vec__67857,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__67850.call(null,cljs.core.rest.call(null,s__67851__$2)));
} else
{{
var G__67860 = cljs.core.rest.call(null,s__67851__$2);
s__67851__$1 = G__67860;
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
assoc_when.cljs$lang$applyTo = (function (arglist__67861){
var m = cljs.core.first(arglist__67861);
var kvs = cljs.core.rest(arglist__67861);
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
update_in_when.cljs$lang$applyTo = (function (arglist__67862){
var m = cljs.core.first(arglist__67862);
arglist__67862 = cljs.core.next(arglist__67862);
var key_seq = cljs.core.first(arglist__67862);
arglist__67862 = cljs.core.next(arglist__67862);
var f = cljs.core.first(arglist__67862);
var args = cljs.core.rest(arglist__67862);
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
return (function iter__67867(s__67868){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__67868__$1 = s__67868;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67868__$1);if(temp__4126__auto__)
{var s__67868__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67868__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67868__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67870 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67869 = (0);while(true){
if((i__67869 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__67869);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__67870,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__67871 = (i__67869 + (1));
i__67869 = G__67871;
continue;
}
} else
{{
var G__67872 = (i__67869 + (1));
i__67869 = G__67872;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67870),iter__67867.call(null,cljs.core.chunk_rest.call(null,s__67868__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67870),null);
}
} else
{var x = cljs.core.first.call(null,s__67868__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__67867.call(null,cljs.core.rest.call(null,s__67868__$2)));
} else
{{
var G__67873 = cljs.core.rest.call(null,s__67868__$2);
s__67868__$1 = G__67873;
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
interleave_all.cljs$lang$applyTo = (function (arglist__67874){
var colls = cljs.core.seq(arglist__67874);
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
var G__67875__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__67876 = conj_when.call(null,coll,x);
var G__67877 = cljs.core.first.call(null,xs);
var G__67878 = cljs.core.next.call(null,xs);
coll = G__67876;
x = G__67877;
xs = G__67878;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__67875 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__67875__delegate.call(this,coll,x,xs);};
G__67875.cljs$lang$maxFixedArity = 2;
G__67875.cljs$lang$applyTo = (function (arglist__67879){
var coll = cljs.core.first(arglist__67879);
arglist__67879 = cljs.core.next(arglist__67879);
var x = cljs.core.first(arglist__67879);
var xs = cljs.core.rest(arglist__67879);
return G__67875__delegate(coll,x,xs);
});
G__67875.cljs$core$IFn$_invoke$arity$variadic = G__67875__delegate;
return G__67875;
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
var G__67881__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__67880_SHARP_){return cljs.core.apply.call(null,f,p1__67880_SHARP_,args);
}));
};
var G__67881 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__67881__delegate.call(this,a,f,args);};
G__67881.cljs$lang$maxFixedArity = 2;
G__67881.cljs$lang$applyTo = (function (arglist__67882){
var a = cljs.core.first(arglist__67882);
arglist__67882 = cljs.core.next(arglist__67882);
var f = cljs.core.first(arglist__67882);
var args = cljs.core.rest(arglist__67882);
return G__67881__delegate(a,f,args);
});
G__67881.cljs$core$IFn$_invoke$arity$variadic = G__67881__delegate;
return G__67881;
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
var G__67883__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__67883 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__67883__delegate.call(this,f,arg,args);};
G__67883.cljs$lang$maxFixedArity = 2;
G__67883.cljs$lang$applyTo = (function (arglist__67884){
var f = cljs.core.first(arglist__67884);
arglist__67884 = cljs.core.next(arglist__67884);
var arg = cljs.core.first(arglist__67884);
var args = cljs.core.rest(arglist__67884);
return G__67883__delegate(f,arg,args);
});
G__67883.cljs$core$IFn$_invoke$arity$variadic = G__67883__delegate;
return G__67883;
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