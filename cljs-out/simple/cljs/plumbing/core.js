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
var G__39780__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__39780 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__39780__delegate.call(this,m,k,f,x1,x2,xs);};
G__39780.cljs$lang$maxFixedArity = 5;
G__39780.cljs$lang$applyTo = (function (arglist__39781){
var m = cljs.core.first(arglist__39781);
arglist__39781 = cljs.core.next(arglist__39781);
var k = cljs.core.first(arglist__39781);
arglist__39781 = cljs.core.next(arglist__39781);
var f = cljs.core.first(arglist__39781);
arglist__39781 = cljs.core.next(arglist__39781);
var x1 = cljs.core.first(arglist__39781);
arglist__39781 = cljs.core.next(arglist__39781);
var x2 = cljs.core.first(arglist__39781);
var xs = cljs.core.rest(arglist__39781);
return G__39780__delegate(m,k,f,x1,x2,xs);
});
G__39780.cljs$core$IFn$_invoke$arity$variadic = G__39780__delegate;
return G__39780;
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
{var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39790_39796 = cljs.core.seq.call(null,m);var chunk__39791_39797 = null;var count__39792_39798 = (0);var i__39793_39799 = (0);while(true){
if((i__39793_39799 < count__39792_39798))
{var vec__39794_39800 = cljs.core._nth.call(null,chunk__39791_39797,i__39793_39799);var k_39801 = cljs.core.nth.call(null,vec__39794_39800,(0),null);var v_39802 = cljs.core.nth.call(null,vec__39794_39800,(1),null);var m39789_39803 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m39789_39803,k_39801,f.call(null,v_39802)));
{
var G__39804 = seq__39790_39796;
var G__39805 = chunk__39791_39797;
var G__39806 = count__39792_39798;
var G__39807 = (i__39793_39799 + (1));
seq__39790_39796 = G__39804;
chunk__39791_39797 = G__39805;
count__39792_39798 = G__39806;
i__39793_39799 = G__39807;
continue;
}
} else
{var temp__4126__auto___39808 = cljs.core.seq.call(null,seq__39790_39796);if(temp__4126__auto___39808)
{var seq__39790_39809__$1 = temp__4126__auto___39808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39790_39809__$1))
{var c__4406__auto___39810 = cljs.core.chunk_first.call(null,seq__39790_39809__$1);{
var G__39811 = cljs.core.chunk_rest.call(null,seq__39790_39809__$1);
var G__39812 = c__4406__auto___39810;
var G__39813 = cljs.core.count.call(null,c__4406__auto___39810);
var G__39814 = (0);
seq__39790_39796 = G__39811;
chunk__39791_39797 = G__39812;
count__39792_39798 = G__39813;
i__39793_39799 = G__39814;
continue;
}
} else
{var vec__39795_39815 = cljs.core.first.call(null,seq__39790_39809__$1);var k_39816 = cljs.core.nth.call(null,vec__39795_39815,(0),null);var v_39817 = cljs.core.nth.call(null,vec__39795_39815,(1),null);var m39789_39818 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m39789_39818,k_39816,f.call(null,v_39817)));
{
var G__39819 = cljs.core.next.call(null,seq__39790_39809__$1);
var G__39820 = null;
var G__39821 = (0);
var G__39822 = (0);
seq__39790_39796 = G__39819;
chunk__39791_39797 = G__39820;
count__39792_39798 = G__39821;
i__39793_39799 = G__39822;
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
{var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39831_39837 = cljs.core.seq.call(null,m);var chunk__39832_39838 = null;var count__39833_39839 = (0);var i__39834_39840 = (0);while(true){
if((i__39834_39840 < count__39833_39839))
{var vec__39835_39841 = cljs.core._nth.call(null,chunk__39832_39838,i__39834_39840);var k_39842 = cljs.core.nth.call(null,vec__39835_39841,(0),null);var v_39843 = cljs.core.nth.call(null,vec__39835_39841,(1),null);var m39830_39844 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m39830_39844,f.call(null,k_39842),v_39843));
{
var G__39845 = seq__39831_39837;
var G__39846 = chunk__39832_39838;
var G__39847 = count__39833_39839;
var G__39848 = (i__39834_39840 + (1));
seq__39831_39837 = G__39845;
chunk__39832_39838 = G__39846;
count__39833_39839 = G__39847;
i__39834_39840 = G__39848;
continue;
}
} else
{var temp__4126__auto___39849 = cljs.core.seq.call(null,seq__39831_39837);if(temp__4126__auto___39849)
{var seq__39831_39850__$1 = temp__4126__auto___39849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39831_39850__$1))
{var c__4406__auto___39851 = cljs.core.chunk_first.call(null,seq__39831_39850__$1);{
var G__39852 = cljs.core.chunk_rest.call(null,seq__39831_39850__$1);
var G__39853 = c__4406__auto___39851;
var G__39854 = cljs.core.count.call(null,c__4406__auto___39851);
var G__39855 = (0);
seq__39831_39837 = G__39852;
chunk__39832_39838 = G__39853;
count__39833_39839 = G__39854;
i__39834_39840 = G__39855;
continue;
}
} else
{var vec__39836_39856 = cljs.core.first.call(null,seq__39831_39850__$1);var k_39857 = cljs.core.nth.call(null,vec__39836_39856,(0),null);var v_39858 = cljs.core.nth.call(null,vec__39836_39856,(1),null);var m39830_39859 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m39830_39859,f.call(null,k_39857),v_39858));
{
var G__39860 = cljs.core.next.call(null,seq__39831_39850__$1);
var G__39861 = null;
var G__39862 = (0);
var G__39863 = (0);
seq__39831_39837 = G__39860;
chunk__39832_39838 = G__39861;
count__39833_39839 = G__39862;
i__39834_39840 = G__39863;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39870_39874 = cljs.core.seq.call(null,ks);var chunk__39871_39875 = null;var count__39872_39876 = (0);var i__39873_39877 = (0);while(true){
if((i__39873_39877 < count__39872_39876))
{var k_39878 = cljs.core._nth.call(null,chunk__39871_39875,i__39873_39877);var m39869_39879 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m39869_39879,k_39878,f.call(null,k_39878)));
{
var G__39880 = seq__39870_39874;
var G__39881 = chunk__39871_39875;
var G__39882 = count__39872_39876;
var G__39883 = (i__39873_39877 + (1));
seq__39870_39874 = G__39880;
chunk__39871_39875 = G__39881;
count__39872_39876 = G__39882;
i__39873_39877 = G__39883;
continue;
}
} else
{var temp__4126__auto___39884 = cljs.core.seq.call(null,seq__39870_39874);if(temp__4126__auto___39884)
{var seq__39870_39885__$1 = temp__4126__auto___39884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39870_39885__$1))
{var c__4406__auto___39886 = cljs.core.chunk_first.call(null,seq__39870_39885__$1);{
var G__39887 = cljs.core.chunk_rest.call(null,seq__39870_39885__$1);
var G__39888 = c__4406__auto___39886;
var G__39889 = cljs.core.count.call(null,c__4406__auto___39886);
var G__39890 = (0);
seq__39870_39874 = G__39887;
chunk__39871_39875 = G__39888;
count__39872_39876 = G__39889;
i__39873_39877 = G__39890;
continue;
}
} else
{var k_39891 = cljs.core.first.call(null,seq__39870_39885__$1);var m39869_39892 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m39869_39892,k_39891,f.call(null,k_39891)));
{
var G__39893 = cljs.core.next.call(null,seq__39870_39885__$1);
var G__39894 = null;
var G__39895 = (0);
var G__39896 = (0);
seq__39870_39874 = G__39893;
chunk__39871_39875 = G__39894;
count__39872_39876 = G__39895;
i__39873_39877 = G__39896;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39903_39907 = cljs.core.seq.call(null,vs);var chunk__39904_39908 = null;var count__39905_39909 = (0);var i__39906_39910 = (0);while(true){
if((i__39906_39910 < count__39905_39909))
{var v_39911 = cljs.core._nth.call(null,chunk__39904_39908,i__39906_39910);var m39902_39912 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m39902_39912,f.call(null,v_39911),v_39911));
{
var G__39913 = seq__39903_39907;
var G__39914 = chunk__39904_39908;
var G__39915 = count__39905_39909;
var G__39916 = (i__39906_39910 + (1));
seq__39903_39907 = G__39913;
chunk__39904_39908 = G__39914;
count__39905_39909 = G__39915;
i__39906_39910 = G__39916;
continue;
}
} else
{var temp__4126__auto___39917 = cljs.core.seq.call(null,seq__39903_39907);if(temp__4126__auto___39917)
{var seq__39903_39918__$1 = temp__4126__auto___39917;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39903_39918__$1))
{var c__4406__auto___39919 = cljs.core.chunk_first.call(null,seq__39903_39918__$1);{
var G__39920 = cljs.core.chunk_rest.call(null,seq__39903_39918__$1);
var G__39921 = c__4406__auto___39919;
var G__39922 = cljs.core.count.call(null,c__4406__auto___39919);
var G__39923 = (0);
seq__39903_39907 = G__39920;
chunk__39904_39908 = G__39921;
count__39905_39909 = G__39922;
i__39906_39910 = G__39923;
continue;
}
} else
{var v_39924 = cljs.core.first.call(null,seq__39903_39918__$1);var m39902_39925 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m39902_39925,f.call(null,v_39924),v_39924));
{
var G__39926 = cljs.core.next.call(null,seq__39903_39918__$1);
var G__39927 = null;
var G__39928 = (0);
var G__39929 = (0);
seq__39903_39907 = G__39926;
chunk__39904_39908 = G__39927;
count__39905_39909 = G__39928;
i__39906_39910 = G__39929;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__39930){var vec__39932 = p__39930;var k = cljs.core.nth.call(null,vec__39932,(0),null);var ks = cljs.core.nthnext.call(null,vec__39932,(1));if(cljs.core.truth_(m))
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
{var m_atom__14991__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__39941_39947 = cljs.core.seq.call(null,x);var chunk__39942_39948 = null;var count__39943_39949 = (0);var i__39944_39950 = (0);while(true){
if((i__39944_39950 < count__39943_39949))
{var vec__39945_39951 = cljs.core._nth.call(null,chunk__39942_39948,i__39944_39950);var k_39952 = cljs.core.nth.call(null,vec__39945_39951,(0),null);var v_39953 = cljs.core.nth.call(null,vec__39945_39951,(1),null);var m39940_39954 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m39940_39954,((typeof k_39952 === 'string')?cljs.core.keyword.call(null,k_39952):k_39952),keywordize_map.call(null,v_39953)));
{
var G__39955 = seq__39941_39947;
var G__39956 = chunk__39942_39948;
var G__39957 = count__39943_39949;
var G__39958 = (i__39944_39950 + (1));
seq__39941_39947 = G__39955;
chunk__39942_39948 = G__39956;
count__39943_39949 = G__39957;
i__39944_39950 = G__39958;
continue;
}
} else
{var temp__4126__auto___39959 = cljs.core.seq.call(null,seq__39941_39947);if(temp__4126__auto___39959)
{var seq__39941_39960__$1 = temp__4126__auto___39959;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39941_39960__$1))
{var c__4406__auto___39961 = cljs.core.chunk_first.call(null,seq__39941_39960__$1);{
var G__39962 = cljs.core.chunk_rest.call(null,seq__39941_39960__$1);
var G__39963 = c__4406__auto___39961;
var G__39964 = cljs.core.count.call(null,c__4406__auto___39961);
var G__39965 = (0);
seq__39941_39947 = G__39962;
chunk__39942_39948 = G__39963;
count__39943_39949 = G__39964;
i__39944_39950 = G__39965;
continue;
}
} else
{var vec__39946_39966 = cljs.core.first.call(null,seq__39941_39960__$1);var k_39967 = cljs.core.nth.call(null,vec__39946_39966,(0),null);var v_39968 = cljs.core.nth.call(null,vec__39946_39966,(1),null);var m39940_39969 = cljs.core.deref.call(null,m_atom__14991__auto__);cljs.core.reset_BANG_.call(null,m_atom__14991__auto__,cljs.core.assoc_BANG_.call(null,m39940_39969,((typeof k_39967 === 'string')?cljs.core.keyword.call(null,k_39967):k_39967),keywordize_map.call(null,v_39968)));
{
var G__39970 = cljs.core.next.call(null,seq__39941_39960__$1);
var G__39971 = null;
var G__39972 = (0);
var G__39973 = (0);
seq__39941_39947 = G__39970;
chunk__39942_39948 = G__39971;
count__39943_39949 = G__39972;
i__39944_39950 = G__39973;
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
var G__39974 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__39975 = cljs.core.next.call(null,ks);
m = G__39974;
ks = G__39975;
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
})(),(function (){var iter__4375__auto__ = (function iter__39984(s__39985){return (new cljs.core.LazySeq(null,(function (){var s__39985__$1 = s__39985;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39985__$1);if(temp__4126__auto__)
{var s__39985__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39985__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__39985__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__39987 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__39986 = (0);while(true){
if((i__39986 < size__4374__auto__))
{var vec__39990 = cljs.core._nth.call(null,c__4373__auto__,i__39986);var k = cljs.core.nth.call(null,vec__39990,(0),null);var v = cljs.core.nth.call(null,vec__39990,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__39987,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__39992 = (i__39986 + (1));
i__39986 = G__39992;
continue;
}
} else
{{
var G__39993 = (i__39986 + (1));
i__39986 = G__39993;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39987),iter__39984.call(null,cljs.core.chunk_rest.call(null,s__39985__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39987),null);
}
} else
{var vec__39991 = cljs.core.first.call(null,s__39985__$2);var k = cljs.core.nth.call(null,vec__39991,(0),null);var v = cljs.core.nth.call(null,vec__39991,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__39984.call(null,cljs.core.rest.call(null,s__39985__$2)));
} else
{{
var G__39994 = cljs.core.rest.call(null,s__39985__$2);
s__39985__$1 = G__39994;
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
assoc_when.cljs$lang$applyTo = (function (arglist__39995){
var m = cljs.core.first(arglist__39995);
var kvs = cljs.core.rest(arglist__39995);
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
update_in_when.cljs$lang$applyTo = (function (arglist__39996){
var m = cljs.core.first(arglist__39996);
arglist__39996 = cljs.core.next(arglist__39996);
var key_seq = cljs.core.first(arglist__39996);
arglist__39996 = cljs.core.next(arglist__39996);
var f = cljs.core.first(arglist__39996);
var args = cljs.core.rest(arglist__39996);
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
return (function iter__40001(s__40002){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__40002__$1 = s__40002;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40002__$1);if(temp__4126__auto__)
{var s__40002__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40002__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__40002__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__40004 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__40003 = (0);while(true){
if((i__40003 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__40003);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__40004,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__40005 = (i__40003 + (1));
i__40003 = G__40005;
continue;
}
} else
{{
var G__40006 = (i__40003 + (1));
i__40003 = G__40006;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40004),iter__40001.call(null,cljs.core.chunk_rest.call(null,s__40002__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40004),null);
}
} else
{var x = cljs.core.first.call(null,s__40002__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__40001.call(null,cljs.core.rest.call(null,s__40002__$2)));
} else
{{
var G__40007 = cljs.core.rest.call(null,s__40002__$2);
s__40002__$1 = G__40007;
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
interleave_all.cljs$lang$applyTo = (function (arglist__40008){
var colls = cljs.core.seq(arglist__40008);
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
var G__40009__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__40010 = conj_when.call(null,coll,x);
var G__40011 = cljs.core.first.call(null,xs);
var G__40012 = cljs.core.next.call(null,xs);
coll = G__40010;
x = G__40011;
xs = G__40012;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__40009 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__40009__delegate.call(this,coll,x,xs);};
G__40009.cljs$lang$maxFixedArity = 2;
G__40009.cljs$lang$applyTo = (function (arglist__40013){
var coll = cljs.core.first(arglist__40013);
arglist__40013 = cljs.core.next(arglist__40013);
var x = cljs.core.first(arglist__40013);
var xs = cljs.core.rest(arglist__40013);
return G__40009__delegate(coll,x,xs);
});
G__40009.cljs$core$IFn$_invoke$arity$variadic = G__40009__delegate;
return G__40009;
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
var G__40015__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__40014_SHARP_){return cljs.core.apply.call(null,f,p1__40014_SHARP_,args);
}));
};
var G__40015 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__40015__delegate.call(this,a,f,args);};
G__40015.cljs$lang$maxFixedArity = 2;
G__40015.cljs$lang$applyTo = (function (arglist__40016){
var a = cljs.core.first(arglist__40016);
arglist__40016 = cljs.core.next(arglist__40016);
var f = cljs.core.first(arglist__40016);
var args = cljs.core.rest(arglist__40016);
return G__40015__delegate(a,f,args);
});
G__40015.cljs$core$IFn$_invoke$arity$variadic = G__40015__delegate;
return G__40015;
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
var G__40017__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__40017 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__40017__delegate.call(this,f,arg,args);};
G__40017.cljs$lang$maxFixedArity = 2;
G__40017.cljs$lang$applyTo = (function (arglist__40018){
var f = cljs.core.first(arglist__40018);
arglist__40018 = cljs.core.next(arglist__40018);
var arg = cljs.core.first(arglist__40018);
var args = cljs.core.rest(arglist__40018);
return G__40017__delegate(f,arg,args);
});
G__40017.cljs$core$IFn$_invoke$arity$variadic = G__40017__delegate;
return G__40017;
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
