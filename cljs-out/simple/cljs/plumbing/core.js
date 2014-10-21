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
var G__36732__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__36732 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__36732__delegate.call(this,m,k,f,x1,x2,xs);};
G__36732.cljs$lang$maxFixedArity = 5;
G__36732.cljs$lang$applyTo = (function (arglist__36733){
var m = cljs.core.first(arglist__36733);
arglist__36733 = cljs.core.next(arglist__36733);
var k = cljs.core.first(arglist__36733);
arglist__36733 = cljs.core.next(arglist__36733);
var f = cljs.core.first(arglist__36733);
arglist__36733 = cljs.core.next(arglist__36733);
var x1 = cljs.core.first(arglist__36733);
arglist__36733 = cljs.core.next(arglist__36733);
var x2 = cljs.core.first(arglist__36733);
var xs = cljs.core.rest(arglist__36733);
return G__36732__delegate(m,k,f,x1,x2,xs);
});
G__36732.cljs$core$IFn$_invoke$arity$variadic = G__36732__delegate;
return G__36732;
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
{var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__36742_36748 = cljs.core.seq.call(null,m);var chunk__36743_36749 = null;var count__36744_36750 = (0);var i__36745_36751 = (0);while(true){
if((i__36745_36751 < count__36744_36750))
{var vec__36746_36752 = cljs.core._nth.call(null,chunk__36743_36749,i__36745_36751);var k_36753 = cljs.core.nth.call(null,vec__36746_36752,(0),null);var v_36754 = cljs.core.nth.call(null,vec__36746_36752,(1),null);var m36741_36755 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m36741_36755,k_36753,f.call(null,v_36754)));
{
var G__36756 = seq__36742_36748;
var G__36757 = chunk__36743_36749;
var G__36758 = count__36744_36750;
var G__36759 = (i__36745_36751 + (1));
seq__36742_36748 = G__36756;
chunk__36743_36749 = G__36757;
count__36744_36750 = G__36758;
i__36745_36751 = G__36759;
continue;
}
} else
{var temp__4126__auto___36760 = cljs.core.seq.call(null,seq__36742_36748);if(temp__4126__auto___36760)
{var seq__36742_36761__$1 = temp__4126__auto___36760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36742_36761__$1))
{var c__4314__auto___36762 = cljs.core.chunk_first.call(null,seq__36742_36761__$1);{
var G__36763 = cljs.core.chunk_rest.call(null,seq__36742_36761__$1);
var G__36764 = c__4314__auto___36762;
var G__36765 = cljs.core.count.call(null,c__4314__auto___36762);
var G__36766 = (0);
seq__36742_36748 = G__36763;
chunk__36743_36749 = G__36764;
count__36744_36750 = G__36765;
i__36745_36751 = G__36766;
continue;
}
} else
{var vec__36747_36767 = cljs.core.first.call(null,seq__36742_36761__$1);var k_36768 = cljs.core.nth.call(null,vec__36747_36767,(0),null);var v_36769 = cljs.core.nth.call(null,vec__36747_36767,(1),null);var m36741_36770 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m36741_36770,k_36768,f.call(null,v_36769)));
{
var G__36771 = cljs.core.next.call(null,seq__36742_36761__$1);
var G__36772 = null;
var G__36773 = (0);
var G__36774 = (0);
seq__36742_36748 = G__36771;
chunk__36743_36749 = G__36772;
count__36744_36750 = G__36773;
i__36745_36751 = G__36774;
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
{var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__36783_36789 = cljs.core.seq.call(null,m);var chunk__36784_36790 = null;var count__36785_36791 = (0);var i__36786_36792 = (0);while(true){
if((i__36786_36792 < count__36785_36791))
{var vec__36787_36793 = cljs.core._nth.call(null,chunk__36784_36790,i__36786_36792);var k_36794 = cljs.core.nth.call(null,vec__36787_36793,(0),null);var v_36795 = cljs.core.nth.call(null,vec__36787_36793,(1),null);var m36782_36796 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m36782_36796,f.call(null,k_36794),v_36795));
{
var G__36797 = seq__36783_36789;
var G__36798 = chunk__36784_36790;
var G__36799 = count__36785_36791;
var G__36800 = (i__36786_36792 + (1));
seq__36783_36789 = G__36797;
chunk__36784_36790 = G__36798;
count__36785_36791 = G__36799;
i__36786_36792 = G__36800;
continue;
}
} else
{var temp__4126__auto___36801 = cljs.core.seq.call(null,seq__36783_36789);if(temp__4126__auto___36801)
{var seq__36783_36802__$1 = temp__4126__auto___36801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36783_36802__$1))
{var c__4314__auto___36803 = cljs.core.chunk_first.call(null,seq__36783_36802__$1);{
var G__36804 = cljs.core.chunk_rest.call(null,seq__36783_36802__$1);
var G__36805 = c__4314__auto___36803;
var G__36806 = cljs.core.count.call(null,c__4314__auto___36803);
var G__36807 = (0);
seq__36783_36789 = G__36804;
chunk__36784_36790 = G__36805;
count__36785_36791 = G__36806;
i__36786_36792 = G__36807;
continue;
}
} else
{var vec__36788_36808 = cljs.core.first.call(null,seq__36783_36802__$1);var k_36809 = cljs.core.nth.call(null,vec__36788_36808,(0),null);var v_36810 = cljs.core.nth.call(null,vec__36788_36808,(1),null);var m36782_36811 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m36782_36811,f.call(null,k_36809),v_36810));
{
var G__36812 = cljs.core.next.call(null,seq__36783_36802__$1);
var G__36813 = null;
var G__36814 = (0);
var G__36815 = (0);
seq__36783_36789 = G__36812;
chunk__36784_36790 = G__36813;
count__36785_36791 = G__36814;
i__36786_36792 = G__36815;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__36822_36826 = cljs.core.seq.call(null,ks);var chunk__36823_36827 = null;var count__36824_36828 = (0);var i__36825_36829 = (0);while(true){
if((i__36825_36829 < count__36824_36828))
{var k_36830 = cljs.core._nth.call(null,chunk__36823_36827,i__36825_36829);var m36821_36831 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m36821_36831,k_36830,f.call(null,k_36830)));
{
var G__36832 = seq__36822_36826;
var G__36833 = chunk__36823_36827;
var G__36834 = count__36824_36828;
var G__36835 = (i__36825_36829 + (1));
seq__36822_36826 = G__36832;
chunk__36823_36827 = G__36833;
count__36824_36828 = G__36834;
i__36825_36829 = G__36835;
continue;
}
} else
{var temp__4126__auto___36836 = cljs.core.seq.call(null,seq__36822_36826);if(temp__4126__auto___36836)
{var seq__36822_36837__$1 = temp__4126__auto___36836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36822_36837__$1))
{var c__4314__auto___36838 = cljs.core.chunk_first.call(null,seq__36822_36837__$1);{
var G__36839 = cljs.core.chunk_rest.call(null,seq__36822_36837__$1);
var G__36840 = c__4314__auto___36838;
var G__36841 = cljs.core.count.call(null,c__4314__auto___36838);
var G__36842 = (0);
seq__36822_36826 = G__36839;
chunk__36823_36827 = G__36840;
count__36824_36828 = G__36841;
i__36825_36829 = G__36842;
continue;
}
} else
{var k_36843 = cljs.core.first.call(null,seq__36822_36837__$1);var m36821_36844 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m36821_36844,k_36843,f.call(null,k_36843)));
{
var G__36845 = cljs.core.next.call(null,seq__36822_36837__$1);
var G__36846 = null;
var G__36847 = (0);
var G__36848 = (0);
seq__36822_36826 = G__36845;
chunk__36823_36827 = G__36846;
count__36824_36828 = G__36847;
i__36825_36829 = G__36848;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__36855_36859 = cljs.core.seq.call(null,vs);var chunk__36856_36860 = null;var count__36857_36861 = (0);var i__36858_36862 = (0);while(true){
if((i__36858_36862 < count__36857_36861))
{var v_36863 = cljs.core._nth.call(null,chunk__36856_36860,i__36858_36862);var m36854_36864 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m36854_36864,f.call(null,v_36863),v_36863));
{
var G__36865 = seq__36855_36859;
var G__36866 = chunk__36856_36860;
var G__36867 = count__36857_36861;
var G__36868 = (i__36858_36862 + (1));
seq__36855_36859 = G__36865;
chunk__36856_36860 = G__36866;
count__36857_36861 = G__36867;
i__36858_36862 = G__36868;
continue;
}
} else
{var temp__4126__auto___36869 = cljs.core.seq.call(null,seq__36855_36859);if(temp__4126__auto___36869)
{var seq__36855_36870__$1 = temp__4126__auto___36869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36855_36870__$1))
{var c__4314__auto___36871 = cljs.core.chunk_first.call(null,seq__36855_36870__$1);{
var G__36872 = cljs.core.chunk_rest.call(null,seq__36855_36870__$1);
var G__36873 = c__4314__auto___36871;
var G__36874 = cljs.core.count.call(null,c__4314__auto___36871);
var G__36875 = (0);
seq__36855_36859 = G__36872;
chunk__36856_36860 = G__36873;
count__36857_36861 = G__36874;
i__36858_36862 = G__36875;
continue;
}
} else
{var v_36876 = cljs.core.first.call(null,seq__36855_36870__$1);var m36854_36877 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m36854_36877,f.call(null,v_36876),v_36876));
{
var G__36878 = cljs.core.next.call(null,seq__36855_36870__$1);
var G__36879 = null;
var G__36880 = (0);
var G__36881 = (0);
seq__36855_36859 = G__36878;
chunk__36856_36860 = G__36879;
count__36857_36861 = G__36880;
i__36858_36862 = G__36881;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__36882){var vec__36884 = p__36882;var k = cljs.core.nth.call(null,vec__36884,(0),null);var ks = cljs.core.nthnext.call(null,vec__36884,(1));if(cljs.core.truth_(m))
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
{var m_atom__14644__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__36893_36899 = cljs.core.seq.call(null,x);var chunk__36894_36900 = null;var count__36895_36901 = (0);var i__36896_36902 = (0);while(true){
if((i__36896_36902 < count__36895_36901))
{var vec__36897_36903 = cljs.core._nth.call(null,chunk__36894_36900,i__36896_36902);var k_36904 = cljs.core.nth.call(null,vec__36897_36903,(0),null);var v_36905 = cljs.core.nth.call(null,vec__36897_36903,(1),null);var m36892_36906 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m36892_36906,((typeof k_36904 === 'string')?cljs.core.keyword.call(null,k_36904):k_36904),keywordize_map.call(null,v_36905)));
{
var G__36907 = seq__36893_36899;
var G__36908 = chunk__36894_36900;
var G__36909 = count__36895_36901;
var G__36910 = (i__36896_36902 + (1));
seq__36893_36899 = G__36907;
chunk__36894_36900 = G__36908;
count__36895_36901 = G__36909;
i__36896_36902 = G__36910;
continue;
}
} else
{var temp__4126__auto___36911 = cljs.core.seq.call(null,seq__36893_36899);if(temp__4126__auto___36911)
{var seq__36893_36912__$1 = temp__4126__auto___36911;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36893_36912__$1))
{var c__4314__auto___36913 = cljs.core.chunk_first.call(null,seq__36893_36912__$1);{
var G__36914 = cljs.core.chunk_rest.call(null,seq__36893_36912__$1);
var G__36915 = c__4314__auto___36913;
var G__36916 = cljs.core.count.call(null,c__4314__auto___36913);
var G__36917 = (0);
seq__36893_36899 = G__36914;
chunk__36894_36900 = G__36915;
count__36895_36901 = G__36916;
i__36896_36902 = G__36917;
continue;
}
} else
{var vec__36898_36918 = cljs.core.first.call(null,seq__36893_36912__$1);var k_36919 = cljs.core.nth.call(null,vec__36898_36918,(0),null);var v_36920 = cljs.core.nth.call(null,vec__36898_36918,(1),null);var m36892_36921 = cljs.core.deref.call(null,m_atom__14644__auto__);cljs.core.reset_BANG_.call(null,m_atom__14644__auto__,cljs.core.assoc_BANG_.call(null,m36892_36921,((typeof k_36919 === 'string')?cljs.core.keyword.call(null,k_36919):k_36919),keywordize_map.call(null,v_36920)));
{
var G__36922 = cljs.core.next.call(null,seq__36893_36912__$1);
var G__36923 = null;
var G__36924 = (0);
var G__36925 = (0);
seq__36893_36899 = G__36922;
chunk__36894_36900 = G__36923;
count__36895_36901 = G__36924;
i__36896_36902 = G__36925;
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
var G__36926 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__36927 = cljs.core.next.call(null,ks);
m = G__36926;
ks = G__36927;
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
})(),(function (){var iter__4283__auto__ = (function iter__36936(s__36937){return (new cljs.core.LazySeq(null,(function (){var s__36937__$1 = s__36937;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36937__$1);if(temp__4126__auto__)
{var s__36937__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36937__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__36937__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__36939 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__36938 = (0);while(true){
if((i__36938 < size__4282__auto__))
{var vec__36942 = cljs.core._nth.call(null,c__4281__auto__,i__36938);var k = cljs.core.nth.call(null,vec__36942,(0),null);var v = cljs.core.nth.call(null,vec__36942,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__36939,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__36944 = (i__36938 + (1));
i__36938 = G__36944;
continue;
}
} else
{{
var G__36945 = (i__36938 + (1));
i__36938 = G__36945;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36939),iter__36936.call(null,cljs.core.chunk_rest.call(null,s__36937__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36939),null);
}
} else
{var vec__36943 = cljs.core.first.call(null,s__36937__$2);var k = cljs.core.nth.call(null,vec__36943,(0),null);var v = cljs.core.nth.call(null,vec__36943,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36936.call(null,cljs.core.rest.call(null,s__36937__$2)));
} else
{{
var G__36946 = cljs.core.rest.call(null,s__36937__$2);
s__36937__$1 = G__36946;
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
assoc_when.cljs$lang$applyTo = (function (arglist__36947){
var m = cljs.core.first(arglist__36947);
var kvs = cljs.core.rest(arglist__36947);
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
update_in_when.cljs$lang$applyTo = (function (arglist__36948){
var m = cljs.core.first(arglist__36948);
arglist__36948 = cljs.core.next(arglist__36948);
var key_seq = cljs.core.first(arglist__36948);
arglist__36948 = cljs.core.next(arglist__36948);
var f = cljs.core.first(arglist__36948);
var args = cljs.core.rest(arglist__36948);
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
return (function iter__36953(s__36954){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__36954__$1 = s__36954;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36954__$1);if(temp__4126__auto__)
{var s__36954__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36954__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__36954__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__36956 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__36955 = (0);while(true){
if((i__36955 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__36955);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__36956,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__36957 = (i__36955 + (1));
i__36955 = G__36957;
continue;
}
} else
{{
var G__36958 = (i__36955 + (1));
i__36955 = G__36958;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36956),iter__36953.call(null,cljs.core.chunk_rest.call(null,s__36954__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36956),null);
}
} else
{var x = cljs.core.first.call(null,s__36954__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__36953.call(null,cljs.core.rest.call(null,s__36954__$2)));
} else
{{
var G__36959 = cljs.core.rest.call(null,s__36954__$2);
s__36954__$1 = G__36959;
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
interleave_all.cljs$lang$applyTo = (function (arglist__36960){
var colls = cljs.core.seq(arglist__36960);
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
var G__36961__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__36962 = conj_when.call(null,coll,x);
var G__36963 = cljs.core.first.call(null,xs);
var G__36964 = cljs.core.next.call(null,xs);
coll = G__36962;
x = G__36963;
xs = G__36964;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__36961 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36961__delegate.call(this,coll,x,xs);};
G__36961.cljs$lang$maxFixedArity = 2;
G__36961.cljs$lang$applyTo = (function (arglist__36965){
var coll = cljs.core.first(arglist__36965);
arglist__36965 = cljs.core.next(arglist__36965);
var x = cljs.core.first(arglist__36965);
var xs = cljs.core.rest(arglist__36965);
return G__36961__delegate(coll,x,xs);
});
G__36961.cljs$core$IFn$_invoke$arity$variadic = G__36961__delegate;
return G__36961;
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
var G__36967__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__36966_SHARP_){return cljs.core.apply.call(null,f,p1__36966_SHARP_,args);
}));
};
var G__36967 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36967__delegate.call(this,a,f,args);};
G__36967.cljs$lang$maxFixedArity = 2;
G__36967.cljs$lang$applyTo = (function (arglist__36968){
var a = cljs.core.first(arglist__36968);
arglist__36968 = cljs.core.next(arglist__36968);
var f = cljs.core.first(arglist__36968);
var args = cljs.core.rest(arglist__36968);
return G__36967__delegate(a,f,args);
});
G__36967.cljs$core$IFn$_invoke$arity$variadic = G__36967__delegate;
return G__36967;
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
var G__36969__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__36969 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36969__delegate.call(this,f,arg,args);};
G__36969.cljs$lang$maxFixedArity = 2;
G__36969.cljs$lang$applyTo = (function (arglist__36970){
var f = cljs.core.first(arglist__36970);
arglist__36970 = cljs.core.next(arglist__36970);
var arg = cljs.core.first(arglist__36970);
var args = cljs.core.rest(arglist__36970);
return G__36969__delegate(f,arg,args);
});
G__36969.cljs$core$IFn$_invoke$arity$variadic = G__36969__delegate;
return G__36969;
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
